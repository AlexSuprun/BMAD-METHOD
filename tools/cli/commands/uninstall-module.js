const chalk = require('chalk');
const path = require('node:path');
const fs = require('fs-extra');
const ora = require('ora');
const inquirer = require('inquirer').default || require('inquirer');
const csv = require('csv-parse/sync');

const { Installer } = require('../installers/lib/core/installer');
const { Manifest } = require('../installers/lib/core/manifest');

/**
 * Convert array of objects to CSV string
 */
function objectsToCsv(data, columns) {
  if (data.length === 0) return columns.join(',') + '\n';

  const header = columns.join(',');
  const rows = data.map((row) => {
    return columns
      .map((col) => {
        const val = row[col] || '';
        // Quote values containing commas or quotes
        if (val.includes(',') || val.includes('"') || val.includes('\n')) {
          return `"${val.replaceAll('"', '""')}"`;
        }
        return val;
      })
      .join(',');
  });

  return [header, ...rows].join('\n') + '\n';
}

module.exports = {
  command: 'uninstall-module <module-code>',
  description: 'Uninstall a BMAD module',
  options: [['-f, --force', 'Skip confirmation prompt']],
  action: async (moduleCode, options) => {
    const spinner = ora();

    try {
      console.log(chalk.cyan(`\n🗑️  Uninstalling module: ${moduleCode}`));

      // Step 1: Find BMAD installation
      const installer = new Installer();
      const { bmadDir } = await installer.findBmadDir(process.cwd());

      // Step 2: Check if manifest exists (confirms BMAD is actually installed)
      const manifest = new Manifest();
      const manifestData = await manifest.read(bmadDir);

      if (!manifestData) {
        console.error(chalk.red('\nError: No BMAD installation found.'));
        process.exit(1);
      }

      // Step 3: Check if module is installed
      if (!manifestData.modules || !manifestData.modules.includes(moduleCode)) {
        console.error(chalk.red(`\nError: Module '${moduleCode}' is not installed.`));
        console.log(chalk.dim('Installed modules:'), manifestData.modules?.join(', ') || 'none');
        process.exit(1);
      }

      const projectDir = path.dirname(bmadDir);

      // Step 4: Collect what will be removed
      const toRemove = {
        directories: [],
        files: [],
        csvEntries: {
          files: 0,
          agents: 0,
          workflows: 0,
          tasks: 0,
          tools: 0,
        },
      };

      // Module directory
      const moduleDir = path.join(bmadDir, moduleCode);
      if (await fs.pathExists(moduleDir)) {
        toRemove.directories.push(moduleDir);
      }

      // IDE command directories
      const installedIDEs = manifestData.ides || [];
      if (installedIDEs.includes('claude-code')) {
        const claudeCommandsDir = path.join(projectDir, '.claude', 'commands', 'bmad', moduleCode);
        if (await fs.pathExists(claudeCommandsDir)) {
          toRemove.directories.push(claudeCommandsDir);
        }
      }

      // Custom module cache
      const customCacheDir = path.join(bmadDir, '_config', 'custom', moduleCode);
      if (await fs.pathExists(customCacheDir)) {
        toRemove.directories.push(customCacheDir);
      }

      // Agent sidecars - find agents belonging to this module
      const memoryDir = path.join(bmadDir, '_memory');
      if (await fs.pathExists(memoryDir)) {
        const agentsCsvPath = path.join(bmadDir, '_config', 'agents.csv');
        if (await fs.pathExists(agentsCsvPath)) {
          const agentsCsvContent = await fs.readFile(agentsCsvPath, 'utf8');
          const agentsData = csv.parse(agentsCsvContent, { columns: true });
          const moduleAgents = agentsData.filter((row) => row.module === moduleCode);

          for (const agent of moduleAgents) {
            const sidecarDir = path.join(memoryDir, `${agent.name}-sidecar`);
            if (await fs.pathExists(sidecarDir)) {
              toRemove.directories.push(sidecarDir);
            }
          }
        }
      }

      // Customization files
      const agentsConfigDir = path.join(bmadDir, '_config', 'agents');
      if (await fs.pathExists(agentsConfigDir)) {
        const customizeFiles = await fs.readdir(agentsConfigDir);
        for (const file of customizeFiles) {
          if (file.startsWith(`${moduleCode}-`) && file.endsWith('.customize.yaml')) {
            toRemove.files.push(path.join(agentsConfigDir, file));
          }
        }
      }

      // Count CSV entries to remove
      const csvFiles = ['files-manifest.csv', 'agent-manifest.csv', 'workflow-manifest.csv', 'task-manifest.csv', 'tool-manifest.csv'];
      for (const csvFile of csvFiles) {
        const csvPath = path.join(bmadDir, '_config', csvFile);
        if (await fs.pathExists(csvPath)) {
          const content = await fs.readFile(csvPath, 'utf8');
          const data = csv.parse(content, { columns: true });
          const count = data.filter((row) => row.module === moduleCode).length;
          switch (csvFile) {
            case 'files-manifest.csv': {
              toRemove.csvEntries.files = count;
              break;
            }
            case 'agent-manifest.csv': {
              toRemove.csvEntries.agents = count;
              break;
            }
            case 'workflow-manifest.csv': {
              toRemove.csvEntries.workflows = count;
              break;
            }
            case 'task-manifest.csv': {
              toRemove.csvEntries.tasks = count;
              break;
            }
            case 'tool-manifest.csv': {
              toRemove.csvEntries.tools = count;
              break;
            }
            // No default
          }
        }
      }

      // Step 5: Check for customizations and warn
      const hasCustomizations = toRemove.files.length > 0;

      // Step 6: Show what will be removed
      console.log(chalk.yellow('\nThe following will be removed:'));
      for (const dir of toRemove.directories) {
        console.log(chalk.dim(`  📁 ${path.relative(projectDir, dir)}/`));
      }
      for (const file of toRemove.files) {
        console.log(chalk.dim(`  📄 ${path.relative(projectDir, file)}`));
      }

      const csvSummary = [];
      if (toRemove.csvEntries.files > 0) csvSummary.push(`${toRemove.csvEntries.files} files`);
      if (toRemove.csvEntries.agents > 0) csvSummary.push(`${toRemove.csvEntries.agents} agents`);
      if (toRemove.csvEntries.workflows > 0) csvSummary.push(`${toRemove.csvEntries.workflows} workflows`);
      if (toRemove.csvEntries.tasks > 0) csvSummary.push(`${toRemove.csvEntries.tasks} tasks`);
      if (toRemove.csvEntries.tools > 0) csvSummary.push(`${toRemove.csvEntries.tools} tools`);
      if (csvSummary.length > 0) {
        console.log(chalk.dim(`  📋 Manifest entries: ${csvSummary.join(', ')}`));
      }

      if (hasCustomizations) {
        console.log(chalk.yellow(`\n⚠️  Warning: ${toRemove.files.length} customization file(s) will be deleted.`));
      }

      // Check if this is the last module
      if (manifestData.modules.length === 1) {
        console.log(chalk.yellow('\n⚠️  Warning: This is the last installed module.'));
      }

      // Step 7: Confirm unless --force
      if (!options.force) {
        const { confirmed } = await inquirer.prompt([
          {
            type: 'confirm',
            name: 'confirmed',
            message: `Uninstall module '${moduleCode}'?`,
            default: false,
          },
        ]);

        if (!confirmed) {
          console.log(chalk.dim('\nUninstall cancelled.'));
          process.exit(0);
        }
      }

      // Step 8: Remove files and directories
      spinner.start('Removing module files...');

      // Remove directories
      for (const dir of toRemove.directories) {
        await fs.remove(dir);
      }

      // Remove individual files
      for (const file of toRemove.files) {
        await fs.remove(file);
      }

      spinner.succeed('Module files removed');

      // Step 9: Update CSV manifest files
      spinner.start('Updating manifest files...');

      for (const csvFile of csvFiles) {
        const csvPath = path.join(bmadDir, '_config', csvFile);
        if (await fs.pathExists(csvPath)) {
          const content = await fs.readFile(csvPath, 'utf8');
          const data = csv.parse(content, { columns: true, skip_empty_lines: true });
          const filtered = data.filter((row) => row.module !== moduleCode);
          const columns = data.length > 0 ? Object.keys(data[0]) : content.split('\n')[0].split(',');
          const output = objectsToCsv(filtered, columns);
          await fs.writeFile(csvPath, output);
        }
      }

      spinner.succeed('Manifest files updated');

      // Step 10: Update manifest.yaml
      spinner.start('Updating manifest.yaml...');
      await manifest.removeModule(bmadDir, moduleCode);
      spinner.succeed('manifest.yaml updated');

      // Success message
      console.log(chalk.green(`\n✨ Module '${moduleCode}' uninstalled successfully!`));

      process.exit(0);
    } catch (error) {
      spinner.fail('Uninstall failed');

      if (error.fullMessage) {
        console.error(error.fullMessage);
      } else {
        console.error(chalk.red('Error:'), error.message);
      }

      if (process.env.BMAD_VERBOSE_INSTALL === 'true') {
        console.error(chalk.dim(error.stack));
      }

      process.exit(1);
    }
  },
};
