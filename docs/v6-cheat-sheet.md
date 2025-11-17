# BMad Method v6 Alpha - Cheat Sheet

> **Quick Reference Guide** for daily BMad Method usage
> **Version:** v6 Alpha | **Last Updated:** 2025-11-14

---

## 🚀 Quick Start

```bash
# Install v6 Alpha
npx bmad-method@alpha install

# Install stable v4
npx bmad-method install
```

**First Steps After Installation:**
1. Load any agent in your IDE
2. Run `*workflow-init` to analyze your project
3. Follow recommended planning track

---

## 📋 Planning Track Selection

| When... | Use This Track | Documentation |
|---------|----------------|---------------|
| Bug fix or 2-3 small changes | **Quick Flow** (Level 0-1) | Tech-spec only |
| New feature, moderate complexity | **BMad Method** (Level 2) | PRD + optional Architecture |
| Product, platform, complex feature | **BMad Method** (Level 3-4) | PRD + Architecture + UX |
| Enterprise, compliance, security | **Enterprise Method** | Full suite + Sec/DevOps/Test |
| Existing codebase | **Brownfield** → then Quick/BMad | `*document-project` first |

**Not sure?** Run `*workflow-init` - it will recommend the right track.

---

## 🤖 Agent Quick Selector

### "Which agent should I use?"

| I need to... | Load This Agent | Then Run |
|--------------|-----------------|----------|
| **Planning & Requirements** |
| Define product vision | PM | `*prd` or `*gdd` |
| Do research or analysis | Analyst | `*brainstorm-project`, `*market-research` |
| **Architecture & Design** |
| Design system architecture | Architect | `*architecture` |
| Design UI/UX | UX Designer | `*ux-spec` |
| **Development** |
| Implement stories | Developer (DEV) | `*dev-story` |
| Sprint planning | Scrum Master (SM) | `*sprint-plan` |
| **Testing & Quality** |
| Test strategy | Test Architect (TEA) | `*test-strategy` |
| **Documentation** |
| Technical docs | Technical Writer | `*tech-doc` |
| **Game Development** |
| Game design doc | Game Designer | `*gdd` |
| Game implementation | Game Developer | `*dev-game-story` |
| Game architecture | Game Architect | `*game-architecture` |
| **Creation & Customization** |
| Create custom agent | BMad Builder | `*create-agent` |
| Create workflow | BMad Builder | `*create-workflow` |
| Create module | BMad Builder | `*create-module` |
| **Creative & Innovation** |
| Brainstorming | Carson (CIS) | `*brainstorm` |
| Design thinking | Maya (CIS) | `*design-thinking` |
| Problem solving | Dr. Quinn (CIS) | `*problem-solving` |
| Innovation strategy | Victor (CIS) | `*innovation-strategy` |
| Storytelling | Sophia (CIS) | `*storytelling` |
| **Universal Tasks** |
| Any task, no persona needed | BMad Master | `*task`, `*create-doc`, `*kb` |

---

## 🎯 Common Workflows

### Phase 1: Analysis (Optional)

```
*brainstorm-project          # Ideation session
*market-research             # Market analysis
*competitor-analysis         # Competitive landscape
*user-research               # User insights
*product-brief               # Initial product concept
```

### Phase 2: Planning (Required)

```
*workflow-init               # Analyze project, recommend track
*prd                         # Product Requirements Document
*gdd                         # Game Design Document
*tech-spec                   # Technical specification (Quick Flow)
```

### Phase 3: Solutioning (Track-Dependent)

```
*architecture                # System architecture
*ux-spec                     # UX/UI specification
*test-strategy               # Testing approach (coming soon: security, DevOps)
```

### Phase 4: Implementation (Iterative)

```
*draft-story                 # Create new story
*refine-story                # Prepare story for dev
*dev-story                   # Implement story
*review-story                # Code review
*update-story                # Modify existing story
```

### Testing Workflows

```
*test-strategy               # Define testing approach
*test-plan                   # Detailed test planning
*test-execution              # Run tests
```

### Documentation & Utilities

```
*document-project            # Document existing codebase (brownfield)
*tech-doc                    # Generate technical documentation
*shard-doc                   # Split large docs for token optimization
*workflow-status             # Check project status
```

### Multi-Agent Collaboration

```
/bmad:core:workflows:party-mode   # Engage all agents for group discussion
```

---

## 💬 Command Syntax

### Three Ways to Execute

**1. Natural Language** (with agent loaded)
```
"Run workflow-init"
"Create a PRD"
"Help me draft a story"
```

**2. Shortcut Syntax** (with agent loaded)
```
*workflow-init
*prd
*draft-story
```

**3. Direct Slash Commands** (no agent required)
```
/bmad:bmm:workflows:workflow-init
/bmad:bmm:workflows:prd
/bmad:bmm:workflows:dev-story
```

**Menu Selection** (with agent loaded)
```
"Run option 2"
"Execute number 5"
```

---

## 📁 File Structure Quick Reference

```
your-project/
└── {bmad_folder}/              # Default: .bmad
    ├── core/                   # Core framework
    │   ├── agents/
    │   │   └── bmad-master.md
    │   ├── workflows/
    │   ├── tasks/
    │   └── tools/
    │
    ├── bmm/                    # BMad Method (12 agents, 34 workflows)
    │   ├── agents/
    │   │   ├── pm.md
    │   │   ├── architect.md
    │   │   ├── dev.md
    │   │   ├── tea.md
    │   │   └── ... (8 more)
    │   ├── workflows/
    │   │   ├── 1-analysis/
    │   │   ├── 2-plan-workflows/
    │   │   ├── 3-solutioning/
    │   │   ├── 4-implementation/
    │   │   └── testarch/
    │   ├── tasks/
    │   ├── tools/
    │   └── teams/
    │
    ├── bmb/                    # BMad Builder (1 agent, 7 workflows)
    │   ├── agents/
    │   │   └── bmad-builder.md
    │   └── workflows/
    │       ├── create-agent/
    │       ├── create-workflow/
    │       ├── create-module/
    │       ├── edit-agent/
    │       ├── edit-workflow/
    │       └── ...
    │
    ├── cis/                    # Creative Intelligence Suite (5 agents, 5 workflows)
    │   ├── agents/
    │   │   ├── brainstorming-coach.md    # Carson
    │   │   ├── design-thinking-coach.md  # Maya
    │   │   ├── creative-problem-solver.md # Dr. Quinn
    │   │   ├── innovation-strategist.md   # Victor
    │   │   └── storyteller.md             # Sophia
    │   └── workflows/
    │       ├── brainstorming/
    │       ├── design-thinking/
    │       ├── problem-solving/
    │       ├── innovation-strategy/
    │       └── storytelling/
    │
    └── _cfg/                   # Your customizations (survives updates)
        ├── config.yaml         # Global configuration
        └── agents/             # Agent customization overrides
            ├── pm.yaml
            ├── architect.yaml
            └── ...
```

---

## 🔧 Configuration Variables

### Common Variables in Templates/Workflows

| Variable | Description | Example |
|----------|-------------|---------|
| `{bmad_folder}` | Root BMAD folder | `.bmad` |
| `{project-root}` | Project root directory | `/Users/you/myproject` |
| `{user_name}` | Your configured name | `Alex` |
| `{communication_language}` | Chat language | `english` |
| `{document_output_language}` | Output language | `english` |
| `{output_folder}` | Artifacts folder | `docs` |

### Configuration Locations

| Config Type | Location | Purpose |
|-------------|----------|---------|
| **Global Config** | `{bmad_folder}/_cfg/config.yaml` | User preferences |
| **Agent Customization** | `{bmad_folder}/_cfg/agents/{agent}.yaml` | Override agent personas |
| **Core Config** | `{bmad_folder}/core-config.yaml` | Project settings |
| **Install Config** | `{module}/_module-installer/install-config.yaml` | Module defaults |

---

## 📊 Story Lifecycle States

```
backlog → drafted → ready → in-progress → review → done
```

| State | Meaning | Next Action |
|-------|---------|-------------|
| **backlog** | Identified, not drafted | `*draft-story` |
| **drafted** | Story created, needs refinement | `*refine-story` |
| **ready** | Fully specified, ready for dev | `*dev-story` |
| **in-progress** | Active development | Continue coding |
| **review** | Code complete, under review | `*review-story` |
| **done** | Completed, tested, merged | Archive |

---

## 🎨 Agent Customization Quick Guide

### Override Agent Persona

**Location:** `{bmad_folder}/_cfg/agents/{agent-id}.yaml`

**Example:** `{bmad_folder}/_cfg/agents/pm.yaml`

```yaml
metadata:
  name: "Chief Product Officer"
  title: "CPO - Strategic Product Leadership"
  icon: "👔"

persona:
  role: "Executive Product Leader"
  communication_style: "Executive-level, strategic, visionary"
  principles:
    - "Business outcomes drive product decisions"
    - "Customer obsession above all"

menu:
  - trigger: "strategic-roadmap"
    workflow: "{bmad_folder}/bmm/workflows/2-plan-workflows/prd/instructions.md"
    description: "Create strategic product roadmap"
```

**Changes apply:** Next time you load the agent

---

## 🌐 Web Bundles (No Installation)

### Download Pre-Built Agents

**URL:** [https://bmad-code-org.github.io/bmad-bundles/](https://bmad-code-org.github.io/bmad-bundles/)

**Use in:**
- Claude Projects (upload XML)
- ChatGPT Custom GPTs (paste XML)
- Gemini Gems (paste XML)

**Available Bundles:**
- All BMM agents (PM, Architect, DEV, etc.)
- All CIS agents (Carson, Maya, Dr. Quinn, Victor, Sophia)
- BMad Builder
- BMad Master

**Auto-Updated:** Every commit to main branch

---

## 🔍 Troubleshooting Quick Fixes

### Agent Not Loading Menu

```bash
# Ensure you're in project with {bmad_folder}
ls .bmad  # or your configured folder name

# Reload agent in IDE
# Check for activation message
```

### Workflow Not Found

```bash
# Use full slash command path
/bmad:bmm:workflows:workflow-init

# Or load correct agent first, then use shortcut
# Load PM → *prd
```

### Variables Not Resolving

```bash
# Check config exists
cat {bmad_folder}/_cfg/config.yaml

# Ensure proper installation
npx bmad-method@alpha install
```

### Customization Not Applied

```bash
# Check override file location
ls {bmad_folder}/_cfg/agents/

# Verify YAML syntax
# Reload agent
```

### Installation Issues

```bash
# Check Node.js version (20+ required)
node --version

# Clear npm cache
npm cache clean --force

# Reinstall
rm -rf node_modules package-lock.json
npm install
```

---

## 🧪 Development & Testing (Contributors)

### Quality Checks

```bash
# Run all checks (required before commit)
npm test

# Individual checks
npm run test:schemas          # Agent schema validation
npm run test:install          # Installation tests
npm run validate:schemas      # YAML validation
npm run validate:bundles      # Web bundle integrity

# Code quality
npm run lint                  # ESLint check
npm run lint:fix              # Auto-fix
npm run format:check          # Prettier check
npm run format:fix            # Auto-format
```

### Build & Bundle

```bash
# Test local installation
npm run install:bmad

# Generate web bundles
npm run bundle                # All modules
npm run rebundle              # Existing bundles only

# Check installation status
npm run bmad:status

# Regenerate manifests
node tools/cli/regenerate-manifests.js
```

---

## 📝 Document Sharding (Advanced)

### When to Use

- Large PRDs (>5000 tokens)
- Comprehensive architectures
- Phase 4 workflows (90%+ token savings)

### How to Enable

**1. Configure in `core-config.yaml`:**

```yaml
prd:
  prdFile: docs/prd.md
  prdSharded: true
  prdShardedLocation: docs/prd

architecture:
  architectureFile: docs/architecture.md
  architectureSharded: true
  architectureShardedLocation: docs/architecture
```

**2. Shard your document:**

```
*shard-doc {document-path} {destination-folder}
```

**3. Use workflows normally** - they auto-detect sharded format

---

## 🎯 IDE-Specific Notes

### Claude Code

```
# Slash command format
/bmad:bmm:workflows:prd

# Load agent
/bmad:bmm:agents:pm
```

### Cursor / Windsurf

```
# May use @ symbols or different syntax
# Check IDE-specific docs
```

### VS Code with Copilot

```
# Check docs/ide-info/github-copilot.md
# Syntax may differ
```

**IDE Integration Guides:** `docs/ide-info/`

---

## 📚 Essential Documentation Links

| Resource | Link |
|----------|------|
| **Main README** | [/README.md](../README.md) |
| **BMM Complete Docs Hub** | [/src/modules/bmm/docs/README.md](../src/modules/bmm/docs/README.md) |
| **Quick Start Guide** | [/src/modules/bmm/docs/quick-start.md](../src/modules/bmm/docs/quick-start.md) |
| **All 12 Agents Guide** | [/src/modules/bmm/docs/agents-guide.md](../src/modules/bmm/docs/agents-guide.md) |
| **Scale Adaptive System** | [/src/modules/bmm/docs/scale-adaptive-system.md](../src/modules/bmm/docs/scale-adaptive-system.md) |
| **Brownfield Guide** | [/src/modules/bmm/docs/brownfield-guide.md](../src/modules/bmm/docs/brownfield-guide.md) |
| **Quick Spec Flow** | [/src/modules/bmm/docs/quick-spec-flow.md](../src/modules/bmm/docs/quick-spec-flow.md) |
| **BMB Module** | [/src/modules/bmb/README.md](../src/modules/bmb/README.md) |
| **CIS Module** | [/src/modules/cis/README.md](../src/modules/cis/README.md) |
| **v6 Glossary** | [/docs/v6-glossary.md](./v6-glossary.md) |
| **Agent Customization** | [/docs/agent-customization-guide.md](./agent-customization-guide.md) |
| **Web Bundles Guide** | [/docs/web-bundles-gemini-gpt-guide.md](./web-bundles-gemini-gpt-guide.md) |
| **Document Sharding** | [/docs/document-sharding-guide.md](./document-sharding-guide.md) |
| **v4 to v6 Upgrade** | [/docs/v4-to-v6-upgrade.md](./v4-to-v6-upgrade.md) |

---

## 🆘 Community & Support

| Need | Resource |
|------|----------|
| **Questions & Help** | [Discord](https://discord.gg/gk8jAdXWmj) - #general-dev |
| **Bug Reports** | [GitHub Issues](https://github.com/bmad-code-org/BMAD-METHOD/issues) |
| **Video Tutorials** | [YouTube](https://www.youtube.com/@BMadCode) |
| **Feature Requests** | [GitHub Issues](https://github.com/bmad-code-org/BMAD-METHOD/issues) |
| **Contributing** | [CONTRIBUTING.md](../CONTRIBUTING.md) |

---

## 🎓 Quick Tips

### Efficiency Tips

✅ **Load the right agent** - Each has specialized menu for their domain
✅ **Use `*workflow-init` first** - Let BMM recommend your path
✅ **Party Mode for big decisions** - Multi-agent collaboration
✅ **Document brownfield projects first** - `*document-project` before planning
✅ **Shard large docs** - Save 90%+ tokens in Phase 4
✅ **Customize agents** - Make them match your team's style
✅ **Use Quick Flow for bugs** - Don't over-plan simple fixes

### Common Mistakes to Avoid

❌ **Skipping workflow-init** - You might choose wrong track
❌ **Over-planning small features** - Use Quick Flow (Level 0-1) instead
❌ **Loading wrong agent** - Check agent selector above
❌ **Not documenting brownfield** - Run `*document-project` first
❌ **Ignoring sharding for large docs** - Token waste in Phase 4
❌ **Modifying core files** - Use `_cfg/` for customizations

### Power User Shortcuts

```bash
# Combine agent expertise
# Load PM for planning, then:
/bmad:bmm:agents:architect    # Switch to Architect mid-conversation

# Quick story creation workflow
*draft-story                   # Create
*refine-story                  # Refine
*dev-story                     # Implement
*review-story                  # Review

# Research → Plan → Build chain
*brainstorm-project            # Ideation
*prd                           # Planning
*architecture                  # Solutioning
*draft-story                   # Implementation
```

---

## 📋 Printable Quick Reference Card

```
╔════════════════════════════════════════════════════════════════╗
║              BMad Method v6 Alpha - Quick Card                 ║
╠════════════════════════════════════════════════════════════════╣
║ INSTALL:         npx bmad-method@alpha install                 ║
║ FIRST STEP:      Load any agent → *workflow-init               ║
║                                                                 ║
║ TRACKS:          Quick Flow (0-1) | BMad Method (2-4)          ║
║                  Enterprise | Brownfield                       ║
║                                                                 ║
║ TOP AGENTS:      PM (planning) | Architect (design)            ║
║                  DEV (code) | TEA (testing)                    ║
║                  BMad Builder (create) | BMad Master (all)     ║
║                                                                 ║
║ TOP WORKFLOWS:   *workflow-init  *prd  *architecture           ║
║                  *draft-story  *dev-story  *review-story       ║
║                                                                 ║
║ PARTY MODE:      /bmad:core:workflows:party-mode               ║
║                                                                 ║
║ BROWNFIELD:      *document-project (run first!)                ║
║                                                                 ║
║ CUSTOMIZE:       {bmad_folder}/_cfg/agents/{agent}.yaml        ║
║                                                                 ║
║ WEB BUNDLES:     bmad-code-org.github.io/bmad-bundles          ║
║                                                                 ║
║ HELP:            Discord: discord.gg/gk8jAdXWmj                ║
║                  Docs: /src/modules/bmm/docs/README.md         ║
╚════════════════════════════════════════════════════════════════╝
```

---

**Print or bookmark this page for quick daily reference!**

**License:** MIT | **Trademarks:** BMAD™ and BMAD-METHOD™ are trademarks of BMad Code, LLC.