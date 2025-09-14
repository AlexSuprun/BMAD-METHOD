# BMAD Agents and Their Slash Commands

Here's a comprehensive overview of all BMAD agents and their specific slash commands:

## Core BMAD Agents (bmad-core)

### 🎭 **BMad Orchestrator** - Master Coordinator

**Slash Commands:**

- `*help` - Show available commands and agents
- `*agent [name]` - Transform into specialized agent
- `*chat-mode` - Start conversational assistance
- `*kb-mode` - Load full BMAD knowledge base
- `*status` - Show current context and progress
- `*task [name]` - Run specific task
- `*workflow [name]` - Start specific workflow
- `*party-mode` - Group chat with all agents
- `*yolo` - Toggle skip confirmations mode
- `*exit` - Return to BMAD or exit

### 📊 **Business Analyst (Mary)** - Research & Analysis

**Slash Commands:**

- `*brainstorm {topic}` - Structured brainstorming session
- `*create-competitor-analysis` - Generate competitor analysis
- `*create-project-brief` - Create project brief document
- `*perform-market-research` - Market research document
- `*research-prompt {topic}` - Create deep research prompt
- `*elicit` - Advanced elicitation techniques
- `*doc-out` - Output document in progress
- `*yolo` - Toggle Yolo Mode
- `*exit` - Exit analyst persona

### 🏗️ **Architect (Winston)** - System Design

**Slash Commands:**

- `*create-backend-architecture` - Backend architecture doc
- `*create-brownfield-architecture` - Brownfield system architecture
- `*create-front-end-architecture` - Frontend architecture doc
- `*create-full-stack-architecture` - Full-stack architecture
- `*document-project` - Document existing project
- `*execute-checklist {checklist}` - Run architect checklist
- `*research {topic}` - Research architectural topics
- `*shard-prd` - Shard architecture documents
- `*doc-out` - Output document
- `*yolo` - Toggle Yolo Mode
- `*exit` - Exit architect persona

### 📋 **Product Manager (John)** - Product Strategy

**Slash Commands:**

- `*create-prd` - Create Product Requirements Document
- `*create-brownfield-prd` - Brownfield PRD
- `*create-brownfield-epic` - Create epic for brownfield
- `*create-brownfield-story` - Create brownfield story
- `*shard-prd` - Shard PRD into smaller pieces
- `*correct-course` - Course correction task
- `*doc-out` - Output document
- `*yolo` - Toggle Yolo Mode
- `*exit` - Exit PM persona

### 📝 **Product Owner (Sarah)** - Backlog Management

**Slash Commands:**

- `*create-epic` - Create epic for projects
- `*create-story` - Create user story from requirements
- `*validate-story-draft {story}` - Validate story file
- `*execute-checklist-po` - Run PO master checklist
- `*shard-doc {document} {destination}` - Shard documents
- `*correct-course` - Execute course correction
- `*doc-out` - Output document
- `*yolo` - Toggle Yolo Mode
- `*exit` - Exit PO persona

### 🏃 **Scrum Master (Bob)** - Story Creation

**Slash Commands:**

- `*draft` - Execute create-next-story task
- `*story-checklist` - Execute story draft checklist
- `*correct-course` - Course correction task
- `*help` - Show available commands
- `*exit` - Exit Scrum Master persona

### 💻 **Full Stack Developer (James)** - Implementation

**Slash Commands:**

- `*develop-story` - Implement story following strict workflow
- `*run-tests` - Execute linting and tests
- `*review-qa` - Apply QA fixes
- `*explain` - Detailed explanation for learning
- `*help` - Show available commands
- `*exit` - Exit developer persona

### 🧪 **QA/Test Architect (Quinn)** - Quality Assurance

**Slash Commands:**

- `*review {story}` - Comprehensive story review
- `*gate {story}` - Quality gate decision
- `*test-design {story}` - Create test scenarios
- `*risk-profile {story}` - Generate risk assessment
- `*trace {story}` - Map requirements to tests
- `*nfr-assess {story}` - Non-functional requirements assessment
- `*help` - Show available commands
- `*exit` - Exit QA persona

### 🎨 **UX Expert (Sally)** - User Experience

**Slash Commands:**

- `*create-front-end-spec` - Create frontend specifications
- `*generate-ui-prompt` - Generate AI UI prompts
- `*help` - Show available commands
- `*exit` - Exit UX persona

### 🧙 **BMad Master** - Universal Executor

**Slash Commands:**

- Can execute ANY BMAD resource without persona switching
- `*create-doc` - Direct document creation
- `*execute-checklist` - Run any checklist
- `*document-project` - Document existing projects
- `*kb` - Knowledge base access

## Expansion Pack Agents

### Creative Writing Pack (10 agents)

- **Narrative Designer** - Interactive storytelling
- **Character Psychologist** - Character development
- **Plot Architect** - Story structure
- **World Builder** - Setting creation
- **Dialog Specialist** - Conversation writing
- **Editor** - Content refinement
- **Book Critic** - Literary analysis
- **Cover Designer** - Visual design
- **Genre Specialist** - Genre expertise
- **Beta Reader** - Reader feedback

### Game Development Packs

- **Godot Game Developer** - Godot-specific development
- **Unity 2D Game Developer** - Unity 2D games
- **Phaser Game Developer** - Web games
- **Game Designer** - Game mechanics
- **Game Architect** - Game systems

### Infrastructure Pack

- **Infrastructure DevOps Platform** - Infrastructure deployment

## Key Usage Patterns

**All commands MUST start with `*`** - this is the universal prefix for BMAD agent commands.

**Agent Transformation**: Use `*agent pm` to become Product Manager, `*agent dev` to become Developer, etc.

**Task Execution**: Most agents have specific tasks they can run with commands like `*create-prd`, `*develop-story`, `*review story-name`.

**Document Management**: Use `*doc-out` to output documents, `*shard-prd` to break documents into pieces.

**Workflow Control**: `*yolo` toggles confirmation skipping, `*exit` returns to orchestrator or exits persona.

Each agent is highly specialized with unique capabilities, templates, and workflows designed for their specific role in the development process.

## Agent Workflow Patterns

### Planning Phase (Typically Web UI)

```
Business Analyst → Product Manager → Architect → UX Expert
↓
Comprehensive PRD + Architecture + UI Specifications
```

### Development Cycle (Typically IDE)

```
Scrum Master → Developer → QA → Product Owner
↓
Story-driven implementation with quality gates
```

### Specialized Domain Work

```
Domain-specific agents (Creative Writing, Game Dev, DevOps)
↓
Specialized deliverables and expertise
```

## Command Structure Details

### Universal Commands (Available in Most Agents)

- `*help` - Always shows agent-specific commands
- `*doc-out` - Output current document
- `*yolo` - Toggle confirmation skipping
- `*exit` - Exit current persona

### Document Creation Commands

- `*create-prd` (PM) - Product Requirements Document
- `*create-full-stack-architecture` (Architect) - Complete system design
- `*create-project-brief` (Analyst) - Project briefing document
- `*create-front-end-spec` (UX) - Frontend specifications

### Workflow Commands

- `*draft` (Scrum Master) - Create detailed user story
- `*develop-story` (Developer) - Implement story with full workflow
- `*review {story}` (QA) - Comprehensive quality review
- `*validate-story-draft` (Product Owner) - Story validation

### Research & Analysis Commands

- `*brainstorm {topic}` (Analyst) - Structured brainstorming
- `*perform-market-research` (Analyst) - Market analysis
- `*research {topic}` (Architect) - Technical research

### Quality & Process Commands

- `*execute-checklist` - Run process checklists
- `*correct-course` - Course correction workflows
- `*risk-profile` (QA) - Risk assessment
- `*trace {story}` (QA) - Requirements traceability

## Best Practices

1. **Start with Orchestrator**: Always begin with `*agent` command to transform into the appropriate specialist
2. **Follow Workflows**: Each agent has specific workflows designed for their role
3. **Use Help**: When in doubt, use `*help` to see available commands for current agent
4. **Document Everything**: Use `*doc-out` frequently to save progress
5. **Quality Gates**: Always run QA review before considering work complete
6. **Stay in Character**: Each agent has specific expertise and limitations
7. **Progressive Refinement**: Use validation commands to iteratively improve deliverables
