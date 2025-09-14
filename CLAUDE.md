# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## BMAD-METHOD™ Architecture

BMAD-METHOD™ is an Agentic Agile Development framework that orchestrates specialized AI agents through a two-phase workflow:

1. **Planning Phase**: Agents (Analyst, PM, Architect, UX) collaborate to create comprehensive PRDs and Architecture documents
2. **Development Phase**: Scrum Master creates hyper-detailed story files that Dev agents implement with full context

The system eliminates planning inconsistency and context loss by embedding all implementation details directly into story files.

## Core Commands

```bash
# Installation and updates
npx bmad-method install        # Install or update BMAD in project
npm run install:bmad           # Alternative install/update command

# Building and validation
npm run build                  # Build all web bundles
npm run build:agents          # Build only agent bundles
npm run build:teams           # Build only team bundles
npm run validate              # Validate all agent/team configurations

# Development workflow
npm run lint                  # Run linting
npm run lint:fix             # Fix linting issues
npm run format               # Format code with prettier
npm run format:check         # Check formatting

# Version management
npm run version:patch        # Bump patch version
npm run version:minor        # Bump minor version
npm run version:major        # Bump major version

# Listing available resources
node tools/cli.js list:agents      # List all available agents
node tools/cli.js list:expansions  # List expansion packs
```

## Project Structure

```
BMAD-METHOD/
├── bmad-core/               # Core framework
│   ├── agents/             # Agent definitions (analyst, pm, architect, dev, sm, qa, etc.)
│   ├── tasks/              # Executable task workflows
│   ├── templates/          # Document templates (YAML format)
│   ├── workflows/          # Workflow definitions (greenfield/brownfield)
│   ├── agent-teams/        # Team configurations
│   └── core-config.yaml    # Core configuration template
├── expansion-packs/         # Domain-specific extensions
├── tools/                   # Build and utility tools
│   ├── cli.js              # Main CLI tool
│   ├── installer/          # Installation system
│   └── builders/           # Web bundle builders
└── dist/                   # Built bundles output
```

## Agent System Architecture

### Agent Activation Flow

1. Agents read their complete definition from their markdown file
2. Load project's `core-config.yaml` for configuration
3. Execute tasks from `bmad-core/tasks/` when commanded
4. Use templates from `bmad-core/templates/` for document creation

### Key Agent Roles

- **Analyst**: Creates project briefs, conducts research
- **PM**: Creates PRDs with epics and stories
- **Architect**: Creates technical architecture documents
- **UX Expert**: Creates UI/UX specifications
- **SM (Scrum Master)**: Creates detailed story files from sharded docs
- **Dev**: Implements stories (never modifies stories, only code)
- **QA**: Reviews implementations and provides feedback
- **PO**: Validates documents and shards them for development

### Story Workflow

1. PO shards PRD/Architecture into `docs/epics/` and `docs/architecture/`
2. SM creates story files in configured location (e.g., `docs/stories/`)
3. Stories contain ALL context needed for implementation
4. Dev implements story without needing to read original docs
5. QA reviews implementation and updates story status

## Critical Implementation Details

### Story Creation (`create-next-story.md`)

- Reads sharded epics to identify next story
- Extracts all relevant architecture context
- Creates self-contained story file with full technical details
- Never invents technical details - only uses documented info

### Task Execution Rules

- Tasks with `elicit: true` REQUIRE user interaction
- Tasks are executable workflows, not reference material
- Follow task instructions exactly as written
- Tasks override base behavioral constraints when executing

### Configuration System

Projects using BMAD must have:

- `core-config.yaml` in project root (copied from `bmad-core/`)
- Configured paths for stories, PRD, architecture locations
- Workflow settings (greenfield vs brownfield)

### Document Sharding

- PRD sharded into epics: `docs/epics/epic-{num}.md`
- Architecture sharded by component: `docs/architecture/{component}.md`
- Sharding enables focused context for story creation

## Adding New Features

### To Add a New Task Command

1. Create task file in `bmad-core/tasks/`
2. Add task to relevant agent's dependencies
3. Add command to agent's commands list
4. Task should follow existing patterns for elicitation and workflow

### To Add a New Agent

1. Create agent markdown in `bmad-core/agents/`
2. Follow existing agent structure with YAML block
3. Define commands, dependencies, and persona
4. Add to relevant team configurations

### To Create Expansion Packs

1. Create directory in `expansion-packs/`
2. Include `config.yaml` with pack metadata
3. Add custom agents, tasks, templates, workflows
4. Build with `npm run build:expansions`

## Development Patterns

### BMAD Workflow Types

- **Greenfield**: New projects from scratch
- **Brownfield**: Existing projects needing enhancement
- Workflows defined in `bmad-core/workflows/*.yaml`

### Template System

- Templates use YAML format with markdown output
- Support interactive elicitation for user input
- Include owner/editor permissions for agents
- Located in `bmad-core/templates/`

### Web Bundle Building

- Agents/teams built into single-file bundles
- Bundles include all dependencies inline
- Output to `dist/agents/` and `dist/teams/`
- Used for web UI platforms (Gemini, ChatGPT, etc.)

## Testing Approach

When adding new features:

1. Validate YAML syntax in all configurations
2. Test agent activation and command execution
3. Verify task workflows complete successfully
4. Check bundle building doesn't break
5. Ensure sharding produces correct output structure
