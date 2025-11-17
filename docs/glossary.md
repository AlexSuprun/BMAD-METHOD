# BMad Method - User Glossary

> **Your Practical Guide** to understanding BMad Method concepts
> **Version:** v6 Alpha | **Audience:** All Users

---

## How to Use This Glossary

This glossary explains BMad Method concepts in plain language. Each term includes:
- **What it is** - Simple definition
- **Why it matters** - How it helps you
- **When to use** - Practical guidance
- **Examples** - Real-world scenarios

**Looking for technical details?** See [Developer Glossary](./v6-glossary.md)
**Want quick commands?** See [Cheat Sheet](./v6-cheat-sheet.md)

---

## Table of Contents

- [Getting Started Concepts](#getting-started-concepts)
- [Agents Explained](#agents-explained)
- [Planning & Project Types](#planning--project-types)
- [Workflows & Processes](#workflows--processes)
- [Documents & Artifacts](#documents--artifacts)
- [Advanced Features](#advanced-features)
- [Common Terms](#common-terms)

---

## Getting Started Concepts

### Agent

**What it is:** An AI assistant with specialized expertise in a specific area (like product management, architecture, or testing).

**Why it matters:** Instead of working with a generic AI, you get an expert that knows exactly how to help with your specific task. Each agent has the right mindset, questions, and workflows for their domain.

**When to use:** Load an agent when you need their specific expertise:
- Need to write requirements? → Load the PM agent
- Designing system architecture? → Load the Architect agent
- Writing code? → Load the Developer agent

**Example:** Think of agents like calling a specialist doctor instead of a general practitioner. You wouldn't ask a dermatologist about a broken bone - same idea here.

**Popular Agents:**
- **PM** - Product planning and requirements
- **Architect** - System design and technical decisions
- **Developer** - Code implementation
- **BMad Master** - Jack-of-all-trades when you need flexibility

### Workflow

**What it is:** A guided, step-by-step process that walks you through accomplishing a specific goal using best practices.

**Why it matters:** You don't have to remember all the steps or best practices - the workflow guides you through everything. It's like having a checklist that asks you the right questions at the right time.

**When to use:** Run a workflow when you want structured guidance:
- Creating a product requirements document → `*prd` workflow
- Implementing a user story → `*dev-story` workflow
- Doing market research → `*market-research` workflow

**Example:** Like following a recipe when cooking. The workflow tells you what ingredients you need (information to gather), what steps to take (questions to answer), and what the final dish should look like (deliverable).

### Module

**What it is:** A package of related agents and workflows focused on a specific domain or purpose.

**Why it matters:** Modules let you install only what you need. Building a game? Install the game development module. Need creative facilitation? Install the creative suite.

**Available Modules:**
- **BMM (BMad Method)** - Software/game development (12 agents, 34 workflows)
- **BMB (BMad Builder)** - Create your own agents and workflows
- **CIS (Creative Intelligence Suite)** - Brainstorming and innovation (5 agents, 5 workflows)

**Example:** Like installing apps on your phone - you don't need every app, just the ones you'll actually use.

### Command (or Trigger)

**What it is:** A shortcut phrase that tells an agent to run a specific workflow or action.

**Why it matters:** Faster than typing out full requests. Once you learn the commands, you can quickly execute workflows.

**Formats:**
- Natural: "Run the PRD workflow"
- Shortcut: `*prd`
- Slash command: `/bmad:bmm:workflows:prd`

**Example:** Like keyboard shortcuts in software - `Ctrl+S` to save is faster than clicking File → Save.

---

## Agents Explained

### PM (Product Manager)

**What they do:** Help you define what to build and why. Think product strategy, user needs, and requirements.

**Best for:**
- Writing Product Requirements Documents (PRD)
- Planning product features
- Defining user stories
- Managing product roadmap

**Personality:** Strategic, user-focused, business-minded

**When to load:** When you're in the "What should we build?" phase

### Analyst

**What they do:** Research, analysis, and understanding your market/users/competitors.

**Best for:**
- Brainstorming project ideas
- Market research
- Competitor analysis
- User research
- Writing product briefs

**Personality:** Curious, thorough, data-driven

**When to load:** When you need to research before planning

### Architect

**What they do:** Design the technical systems and make technology decisions.

**Best for:**
- System architecture design
- Technology stack selection
- Technical specifications
- Design patterns and best practices

**Personality:** Systematic, thoughtful, technically deep

**When to load:** When you need to design "How will we build it?"

### Developer (DEV)

**What they do:** Help implement code and solve technical problems.

**Best for:**
- Writing user stories
- Implementing features
- Code reviews
- Debugging issues

**Personality:** Practical, detail-oriented, solution-focused

**When to load:** When you're ready to write code

### Scrum Master (SM)

**What they do:** Facilitate agile processes and keep your project on track.

**Best for:**
- Sprint planning
- Backlog management
- Process improvement
- Team coordination

**Personality:** Organized, process-driven, collaborative

**When to load:** When you need project management and workflow orchestration

### Test Architect (TEA)

**What they do:** Ensure quality through testing strategy and execution.

**Best for:**
- Test strategy planning
- Test case design
- Quality assurance
- Coverage analysis

**Personality:** Methodical, quality-focused, thorough

**When to load:** When you need to ensure your code works correctly

### UX Designer

**What they do:** Design user experiences and interfaces.

**Best for:**
- User interface design
- User experience flows
- Wireframing and prototyping
- Design systems

**Personality:** User-empathetic, creative, detail-oriented

**When to load:** When you need to design the user-facing parts

### BMad Master

**What they do:** Universal executor that can run any task without taking on a specific persona.

**Best for:**
- When you need flexibility
- Running one-off tasks
- Accessing the knowledge base (`*kb`)
- When you're not sure which specialized agent to use

**Personality:** Neutral, direct, efficient

**When to load:** When you want a general-purpose assistant

### Creative Agents (CIS Module)

#### Carson - Brainstorming Coach

**What they do:** Energetic facilitator who helps you generate and explore ideas.

**Best for:** Ideation sessions, divergent thinking, creative problem-solving

**Personality:** Energetic, enthusiastic, encouraging

#### Maya - Design Thinking Coach

**What they do:** Guide you through human-centered design processes.

**Best for:** Empathy mapping, user journey mapping, design thinking workshops

**Personality:** Jazz-like improviser, adaptive, flowing

#### Dr. Quinn - Problem Solver

**What they do:** Systematic problem-solving using analytical frameworks.

**Best for:** Root cause analysis, structured problem-solving, decision-making

**Personality:** Detective-scientist hybrid, methodical, curious

#### Victor - Innovation Strategist

**What they do:** Strategic innovation and business model thinking.

**Best for:** Business strategy, disruptive innovation, strategic planning

**Personality:** Bold, precise, strategic

#### Sophia - Storyteller

**What they do:** Help craft compelling narratives and stories.

**Best for:** Pitch development, narrative design, storytelling frameworks

**Personality:** Whimsical, narrative-driven, engaging

### BMad Builder

**What they do:** Help you create custom agents, workflows, and modules.

**Best for:**
- Building domain-specific agents
- Creating custom workflows
- Extending BMad Method for your needs

**Personality:** Builder, creator, technical

**When to load:** When you want to customize or extend BMad Method

---

## Planning & Project Types

### Planning Track

**What it is:** The approach you take for planning based on your project's complexity and needs.

**Why it matters:** Different projects need different levels of planning. A bug fix doesn't need the same documentation as building a new product. The right track saves time while ensuring quality.

**Three Tracks:**

#### 1. Quick Flow Track (Level 0-1)

**Use when:**
- Fixing bugs
- Making 2-3 small related changes
- Clear, simple scope
- Rapid prototyping

**Documentation:** Just a tech-spec (lightweight technical plan)

**Time:** Minutes to hours

**Example:** "Fix the login button color" or "Add email validation to form"

#### 2. BMad Method Track (Level 2-4)

**Use when:**
- Building new features
- Creating products or platforms
- Moderate to high complexity
- Need architecture decisions

**Documentation:**
- Level 2: PRD + optional architecture
- Level 3-4: Full PRD + comprehensive architecture + UX

**Time:** Days to weeks

**Example:** "Build a user dashboard" or "Create a payment integration"

#### 3. Enterprise Method Track

**Use when:**
- Enterprise requirements
- Compliance needs (HIPAA, SOC2, etc.)
- Security-critical systems
- Large-scale platforms

**Documentation:** Everything in BMad Method Track + security/DevOps/test strategies

**Time:** Weeks to months

**Example:** "Healthcare patient portal" or "Financial trading platform"

**Not sure which track?** Run `*workflow-init` - it will analyze your project and recommend the right approach.

### Complexity Level (0-4)

**What it is:** A scale measuring how complex your project is, which determines planning depth.

**Why it matters:** BMad Method automatically adjusts documentation requirements based on complexity. Small projects get lightweight planning, large projects get comprehensive planning.

**The Levels:**

**Level 0-1:** Quick fixes and small features
- Single file or simple changes
- Clear requirements
- Minimal planning needed

**Level 2:** Medium features
- Multiple components
- Some architectural decisions
- Moderate planning

**Level 3-4:** Large features and products
- Complex systems
- Significant architectural design
- Comprehensive planning

**How it's determined:** When you run `*workflow-init`, BMad analyzes your project description and assigns a level. You can override if needed.

**Example:**
- Level 0: "Fix typo in error message"
- Level 2: "Add search functionality to blog"
- Level 4: "Build multi-tenant SaaS platform"

### Greenfield vs Brownfield

#### Greenfield Project

**What it is:** Starting from scratch - a brand new project with no existing code.

**Why it matters:** You have total freedom in design decisions but need to make all the choices yourself.

**Start with:** `*workflow-init` → planning track → build

**Example:** Creating a new mobile app from zero

#### Brownfield Project

**What it is:** Adding to or modifying an existing codebase.

**Why it matters:** You need to understand what's already there before making changes. Different workflows help you document and work within existing systems.

**Start with:** `*document-project` → `*workflow-init` → planning track → build

**Example:** Adding a new feature to your company's existing web application

**Key difference:** Brownfield requires documenting existing code first so AI understands your system.

### Four Phases

**What it is:** The standard development lifecycle that BMad Method follows.

**Why it matters:** Provides structure and ensures you don't skip important steps. Each phase builds on the previous one.

#### Phase 0: Documentation (Brownfield Only)

**Goal:** Understand what already exists

**Key Workflow:** `*document-project`

**Output:** Codebase documentation

**When:** Before planning any changes to existing code

#### Phase 1: Analysis (Optional)

**Goal:** Research and ideation before committing to an approach

**Key Workflows:** `*brainstorm-project`, `*market-research`, `*competitor-analysis`

**Output:** Research findings, product briefs, validated ideas

**When:** For new products or when you need to explore options

#### Phase 2: Planning (Required)

**Goal:** Define WHAT you're building

**Key Workflows:** `*prd`, `*gdd`, `*tech-spec`

**Output:** Requirements document (PRD, GDD, or tech-spec)

**When:** Every project needs this - defines scope and requirements

#### Phase 3: Solutioning (Track-Dependent)

**Goal:** Design HOW you'll build it

**Key Workflows:** `*architecture`, `*ux-spec`, `*test-strategy`

**Output:** Technical architecture, UX designs, testing approach

**When:** For Level 2+ projects that need design decisions

#### Phase 4: Implementation (Iterative)

**Goal:** Build it

**Key Workflows:** `*draft-story`, `*dev-story`, `*review-story`

**Output:** Working code, tested and reviewed

**When:** After planning/solutioning is complete

**Visual Flow:**
```
Greenfield: Phase 1 (optional) → Phase 2 → Phase 3 → Phase 4
Brownfield: Phase 0 → Phase 1 (optional) → Phase 2 → Phase 3 → Phase 4
Quick Flow: Phase 2 (tech-spec) → Phase 4
```

---

## Workflows & Processes

### Story

**What it is:** A single unit of work representing a feature, bug fix, or task that can be completed in one development session.

**Why it matters:** Stories break large projects into manageable chunks. They're specific enough to implement but small enough to finish.

**Anatomy:**
- **Title:** Short description
- **Description:** What needs to be done
- **Acceptance Criteria:** How you know it's done
- **Technical Notes:** Implementation guidance

**Example:**
- Good story: "Add forgot password link to login page"
- Too big: "Implement entire authentication system"
- Too small: "Change button color to blue"

**Story States:**

```
backlog → drafted → ready → in-progress → review → done
```

**State Meanings:**
- **backlog:** Identified but not yet detailed
- **drafted:** Story written but needs refinement
- **ready:** Fully specified, ready to code
- **in-progress:** Currently being developed
- **review:** Code written, being reviewed
- **done:** Completed and merged

### Epic

**What it is:** A large feature or initiative broken down into multiple stories.

**Why it matters:** Epics provide context for related stories and help organize your backlog.

**Example:**
- Epic: "User Authentication System"
  - Story 1: "Add login page"
  - Story 2: "Implement password reset"
  - Story 3: "Add email verification"
  - Story 4: "Create user profile page"

### Party Mode

**What it is:** A special mode where ALL agents collaborate on a task together.

**Why it matters:** Get diverse perspectives from different expertise areas. Great for complex decisions or creative brainstorming where you need multiple viewpoints.

**When to use:**
- Making important architectural decisions
- Strategic planning discussions
- Complex problem-solving
- Creative brainstorming sessions
- When you want the "full team" perspective

**How to use:** `/bmad:core:workflows:party-mode`

**Example:** You're deciding between three different technology stacks. In party mode, the Architect brings technical perspective, PM brings business perspective, Developer brings implementation perspective, and TEA brings testing perspective - all in one conversation.

### Workflow-Init

**What it is:** The starting workflow that analyzes your project and recommends your planning path.

**Why it matters:** Prevents you from using the wrong approach. Asks questions about your project and suggests the right track and workflows.

**Always run this first** when starting a new project or feature.

**Command:** `*workflow-init`

**What it asks:**
- New or existing project?
- What are you building?
- How complex is it?
- What's your timeline?

**What it recommends:**
- Planning track (Quick Flow, BMad Method, Enterprise)
- Complexity level (0-4)
- Next workflows to run
- Which agents to use

---

## Documents & Artifacts

### PRD (Product Requirements Document)

**What it is:** A document describing WHAT you're building and WHY, without getting into technical HOW.

**Why it matters:** Ensures everyone understands the vision, goals, and requirements before coding starts. Prevents building the wrong thing.

**Created by:** PM agent using `*prd` workflow

**Includes:**
- Product vision and goals
- User personas and needs
- Features and requirements
- Success metrics
- Out of scope (what you're NOT building)

**When to create:** Level 2-4 projects in BMad Method or Enterprise tracks

**Example sections:**
- "Our analytics dashboard will help marketing teams understand campaign performance"
- "Users must be able to filter data by date range, campaign, and channel"
- "Success = 80% of users create their first report within 5 minutes"

### GDD (Game Design Document)

**What it is:** Like a PRD but specifically for games. Describes game mechanics, story, characters, and gameplay.

**Why it matters:** Games have unique requirements (fun, balance, narrative) that regular PRDs don't cover well.

**Created by:** Game Designer agent using `*gdd` workflow

**Includes:**
- Game concept and genre
- Core mechanics
- Story and characters
- Levels and progression
- Art and audio direction

**When to create:** When building games instead of traditional software

### Tech-Spec (Technical Specification)

**What it is:** A lightweight document describing the technical approach for implementing something.

**Why it matters:** Quick Flow projects need some planning, just not as much as a full PRD. Tech-specs provide just enough detail to start coding confidently.

**Created by:** Developer or Architect using `*tech-spec` workflow

**Includes:**
- Technical approach
- Files/components to modify
- Implementation notes
- Testing approach

**When to create:** Level 0-1 projects in Quick Flow track

**Example:** "To fix the bug, we'll update the validation function in `auth.js`, add a regex pattern check, and add 3 unit tests."

### Architecture Document

**What it is:** Technical blueprint showing how the system is designed and structured.

**Why it matters:** Ensures everyone builds things the same way. Prevents spaghetti code and technical debt.

**Created by:** Architect agent using `*architecture` workflow

**Includes:**
- System architecture diagrams
- Technology stack decisions
- Design patterns to follow
- Coding standards
- File/folder structure

**When to create:** Level 3-4 projects that need structured technical design

**Example sections:**
- "We'll use microservices architecture with Node.js services"
- "All API endpoints follow REST conventions"
- "Code organized by feature, not file type"

### UX Spec (UX Specification)

**What it is:** Document describing user interface design and user experience flows.

**Why it matters:** Ensures consistent, user-friendly interfaces. Prevents redesign work later.

**Created by:** UX Designer agent using `*ux-spec` workflow

**Includes:**
- User flows and journeys
- Wireframes
- Design system/style guide
- Accessibility requirements
- Responsive design approach

**When to create:** Projects with significant user-facing components

---

## Advanced Features

### Document Sharding

**What it is:** Splitting large documents (like PRDs or architecture docs) into smaller section files.

**Why it matters:** Huge token savings! Instead of loading a 10,000-word PRD every time, workflows load only the sections they need.

**Savings:** 90%+ token reduction in Phase 4 workflows

**When to use:**
- PRDs over ~5,000 words
- Large architecture documents
- Comprehensive design docs

**How it works:**
1. You create your document normally
2. Run `*shard-doc` to split it into sections
3. Workflows automatically detect and use sharded format

**Example:**
```
Before: docs/prd.md (one 10,000-word file)
After:  docs/prd/
        ├── 1-overview.md
        ├── 2-user-needs.md
        ├── 3-features.md
        └── 4-success-metrics.md
```

**User impact:** Workflows run faster, cost less in AI tokens, and load faster.

### Agent Customization

**What it is:** Changing an agent's name, personality, or behavior to match your team's style.

**Why it matters:** Make agents feel like part of YOUR team. Use your company's terminology and communication style.

**What you can customize:**
- Agent names and titles
- Communication style
- Principles and approach
- Menu commands
- Add/remove workflows

**How:** Create override files in `{bmad_folder}/_cfg/agents/`

**Example:** Change PM agent to "Chief Product Officer" with executive communication style, or rename commands to match your team's terminology.

**Survives updates:** Your customizations persist when you update BMad Method.

### Web Bundles

**What it is:** Pre-packaged agents you can use in Claude Projects, ChatGPT, or Gemini WITHOUT installing anything.

**Why it matters:** Try BMad Method without installation, or use agents in environments where you can't install software.

**How to use:**
1. Download XML file from [bmad-bundles website](https://bmad-code-org.github.io/bmad-bundles/)
2. Upload to Claude Projects / paste into ChatGPT / paste into Gemini
3. Start using the agent immediately

**Limitations:**
- Can't customize as easily
- Can't save work to your project files
- Missing some IDE integrations

**Best for:** Trying BMad Method, using in restricted environments, quick one-off tasks

---

## Common Terms

### Menu

**What it is:** The list of commands/workflows that appears when you load an agent.

**Why it matters:** Shows you what the agent can do without memorizing commands.

**Example:** When you load the PM agent, the menu shows options like:
1. Create PRD
2. Create Epic
3. Manage Roadmap
etc.

### Trigger

**What it is:** The command word that starts a workflow (the part after the `*`).

**Why it matters:** Faster than typing full requests once you learn them.

**Example:** `*prd`, `*draft-story`, `*architecture`

**Rules:** Must be kebab-case (lowercase with hyphens, like `create-epic` not `createEpic`)

### Task

**What it is:** A reusable mini-workflow that multiple workflows can use.

**Why it matters:** Common operations (like creating a document from a template) don't need to be rewritten in every workflow.

**Example:** The `create-doc` task is used by PRD workflow, architecture workflow, and many others.

**User impact:** More consistent experience - document creation works the same everywhere.

### Template

**What it is:** A pre-structured format for documents.

**Why it matters:** You don't start with a blank page - the template guides you on what sections to include.

**Available templates:**
- PRD template
- Architecture template
- Story template
- Test plan template
- GDD template
- And more...

**Example:** PRD template includes sections for vision, user needs, features, metrics - you just fill in the details.

### Checklist

**What it is:** A quality verification list that workflows can run through.

**Why it matters:** Ensures nothing important is missed.

**Types:**
- Story definition of done
- Architecture review checklist
- PM review checklist
- Code review checklist

**Example:** Before a story is marked "ready," the checklist verifies it has acceptance criteria, technical notes, and estimates.

### Knowledge Base (KB)

**What it is:** A comprehensive reference document containing all BMad Method information.

**Why it matters:** Agents can access it to answer your questions about how BMad Method works.

**How to use:** Load BMad Master agent, then type `*kb`

**Contains:** Documentation about all workflows, agents, concepts, and best practices

**Example:** "How does document sharding work?" → Agent consults KB → provides detailed answer

### Installation

**What it is:** The setup process that puts BMad Method into your project.

**Why it matters:** One-time setup that configures everything for your environment.

**What it does:**
- Asks what modules you want (BMM, BMB, CIS)
- Asks your preferences (name, language, IDE)
- Copies files to your project
- Configures agents and workflows
- Sets up IDE integrations

**Command:** `npx bmad-method@alpha install`

**Where files go:** `{bmad_folder}/` (default is `.bmad` folder in your project)

### Configuration

**What it is:** Settings that control how BMad Method behaves.

**Why it matters:** Personalizes BMad Method to your preferences and project needs.

**Key settings:**
- Your name (so agents address you correctly)
- Communication language
- Output document language
- Where to save artifacts
- Document sharding preferences

**Where it lives:** `{bmad_folder}/_cfg/config.yaml`

**Can be changed:** Yes, edit the file anytime

---

## Quick Decision Trees

### "Which Agent Should I Use?"

```
Need to plan what to build?
├─ Yes → PM
└─ No ↓

Need to design how to build?
├─ Yes → Architect
└─ No ↓

Need to write code?
├─ Yes → Developer
└─ No ↓

Need to test?
├─ Yes → TEA
└─ No ↓

Need creative thinking?
├─ Yes → CIS agents (Carson, Maya, Dr. Quinn, Victor, Sophia)
└─ No ↓

Not sure / flexible task?
└─ Yes → BMad Master
```

### "Which Planning Track?"

```
What are you building?

Bug fix or 1-3 simple changes?
└─ Quick Flow Track (Level 0-1)
   Use: *tech-spec → *dev-story

Medium feature, clear scope?
└─ BMad Method Track (Level 2)
   Use: *prd → (optional *architecture) → *draft-story

Large feature or new product?
└─ BMad Method Track (Level 3-4)
   Use: *prd → *architecture → *ux-spec → *draft-story

Enterprise/compliance required?
└─ Enterprise Method Track
   Use: Full BMad Method + security/DevOps/test strategies

Existing codebase?
└─ Brownfield (any track)
   Start with: *document-project → then choose track above
```

### "What Workflow Next?"

```
Starting new project?
└─ *workflow-init (it will guide you)

Need to explore ideas?
└─ *brainstorm-project

Ready to plan?
├─ Software → *prd
├─ Game → *gdd
└─ Quick project → *tech-spec

Planning done, need architecture?
└─ *architecture

Ready to code?
├─ Create story → *draft-story
├─ Make story ready → *refine-story
├─ Implement story → *dev-story
└─ Review code → *review-story

Need to understand existing code?
└─ *document-project
```

---

## Visual Guides

### The BMad Method Journey (Typical Path)

```
1. INSTALL
   ↓
2. INITIALIZE
   Load agent → *workflow-init
   ↓
3. PLAN (Phase 2)
   *prd or *tech-spec
   ↓
4. DESIGN (Phase 3) - if needed
   *architecture, *ux-spec
   ↓
5. BUILD (Phase 4)
   *draft-story → *dev-story → repeat
   ↓
6. DELIVER
   Code complete!
```

### Story Lifecycle (Simple View)

```
📝 *draft-story
   Creates new story
   ↓
✨ *refine-story
   Adds details, acceptance criteria
   ↓
💻 *dev-story
   Write the code
   ↓
👀 *review-story
   Code review
   ↓
✅ Done!
   Merge and ship
```

### Module Relationships (User View)

```
Core Module (BMad Master)
├─ Universal orchestrator
└─ Shared tasks/tools
   ↓
BMM Module (Development)
├─ PM, Architect, Developer, etc.
├─ Used for: Building software/games
└─ Uses: Core + CIS workflows
   ↓
BMB Module (Builder)
├─ BMad Builder agent
├─ Used for: Creating custom agents/workflows
└─ Uses: Core
   ↓
CIS Module (Creative)
├─ Carson, Maya, Dr. Quinn, Victor, Sophia
├─ Used for: Brainstorming, innovation, problem-solving
└─ Used by: BMM (for brainstorming workflow)
```

---

## Real-World Scenarios

### Scenario 1: "I need to fix a bug"

1. **Track:** Quick Flow (Level 0-1)
2. **Agent:** Developer
3. **Workflow:** `*tech-spec` (if complex) or directly `*draft-story`
4. **Process:**
   - Describe the bug
   - Create story with fix approach
   - Implement fix
   - Test and merge

**Time:** 30 minutes to 2 hours

---

### Scenario 2: "I'm building a new dashboard feature"

1. **Track:** BMad Method (Level 2-3)
2. **Agent sequence:** PM → Architect → UX Designer → Developer
3. **Workflow sequence:**
   - PM: `*prd` - Define requirements
   - Architect: `*architecture` - Design approach
   - UX Designer: `*ux-spec` - Design interface
   - Developer: `*draft-story` → `*dev-story` - Implement
4. **Process:**
   - Define user needs and features
   - Design technical architecture
   - Design user interface
   - Break into stories
   - Implement story by story

**Time:** 1-2 weeks

---

### Scenario 3: "I'm starting a brand new SaaS product"

1. **Track:** BMad Method (Level 4) or Enterprise Method
2. **Agent sequence:** Analyst → PM → Architect → UX Designer → Developer → TEA
3. **Workflow sequence:**
   - Analyst: `*brainstorm-project`, `*market-research`
   - PM: `*prd`
   - Architect: `*architecture`
   - UX Designer: `*ux-spec`
   - TEA: `*test-strategy`
   - Developer: `*draft-story` → `*dev-story` (iterative)
4. **Process:**
   - Research market and validate idea
   - Write comprehensive PRD
   - Design full architecture
   - Design UX system
   - Plan testing approach
   - Implement in iterations

**Time:** 2-6 months

---

### Scenario 4: "I'm adding a feature to existing code"

1. **Track:** Brownfield → then appropriate track
2. **Agent sequence:** BMad Master → PM → Architect → Developer
3. **Workflow sequence:**
   - BMad Master: `*document-project` - Understand existing code
   - Then follow greenfield path above based on complexity
4. **Process:**
   - Document what already exists
   - Plan new feature in context of existing system
   - Design integration approach
   - Implement carefully to avoid breaking existing code

**Time:** Depends on feature complexity + 1-2 days for documentation

---

### Scenario 5: "I need fresh ideas for my product"

1. **Track:** Analysis (Phase 1) → then planning
2. **Agent:** Carson (Brainstorming) or Maya (Design Thinking)
3. **Workflow:** `*brainstorm` or `*design-thinking`
4. **Process:**
   - Run creative facilitation session
   - Generate and explore ideas
   - Converge on best ideas
   - Then proceed to planning with PM

**Time:** 1-3 hours for ideation

---

## Tips for Success

### Getting Started

✅ **Always run `*workflow-init` first** - It's your GPS
✅ **Start small** - Try Quick Flow on a bug before tackling a full product
✅ **Load the right agent** - Check the "Which Agent?" decision tree above
✅ **Follow the phases** - Don't skip planning to jump to code
✅ **Document brownfield projects** - AI can't help if it doesn't know what exists

### Ongoing Usage

✅ **Use shortcuts** - Learn the `*` commands for speed
✅ **Party Mode for big decisions** - Get multiple perspectives
✅ **Keep stories small** - If it takes >1 day, break it down
✅ **Shard large docs** - Save tokens on big projects
✅ **Customize agents** - Make them match your team's style

### Common Mistakes

❌ **Skipping workflow-init** - You might choose the wrong approach
❌ **Over-planning simple tasks** - Level 0 bugs don't need PRDs
❌ **Under-planning complex features** - Level 3 products need architecture
❌ **Wrong agent** - PM can't help you debug code, Developer can't help you research market
❌ **Stories too big** - "Build entire auth system" is an epic, not a story
❌ **Not documenting brownfield** - AI makes assumptions about unknown code

---

## Getting Help

### In-Product Help

- **Load BMad Master** → `*kb` - Access full knowledge base
- **Load any agent** → `*help` - See what that agent can do
- **Run `*workflow-status`** - See where you are in your project

### Documentation

- **[Quick Start Guide](../src/modules/bmm/docs/quick-start.md)** - Get started in 15 minutes
- **[Cheat Sheet](./v6-cheat-sheet.md)** - Quick command reference
- **[Agents Guide](../src/modules/bmm/docs/agents-guide.md)** - Deep dive on all 12 agents
- **[FAQ](../src/modules/bmm/docs/faq.md)** - Common questions

### Community

- **[Discord](https://discord.gg/gk8jAdXWmj)** - #general-dev for questions, #bugs-issues for problems
- **[YouTube](https://www.youtube.com/@BMadCode)** - Video walkthroughs
- **[GitHub Issues](https://github.com/bmad-code-org/BMAD-METHOD/issues)** - Bug reports and feature requests

---

## Glossary Index

**Core Concepts:** Agent • Workflow • Module • Command
**Agents:** PM • Analyst • Architect • Developer • Scrum Master • TEA • UX Designer • BMad Master • CIS Agents • BMad Builder
**Planning:** Planning Track • Complexity Level • Greenfield • Brownfield • Four Phases
**Workflows:** Story • Epic • Party Mode • Workflow-Init
**Documents:** PRD • GDD • Tech-Spec • Architecture • UX Spec
**Advanced:** Document Sharding • Agent Customization • Web Bundles
**Terms:** Menu • Trigger • Task • Template • Checklist • Knowledge Base • Installation • Configuration

---

**Welcome to BMad Method!** Start with [Quick Start Guide](../src/modules/bmm/docs/quick-start.md) or run `*workflow-init` to begin your journey.

**License:** MIT | **Trademarks:** BMAD™ and BMAD-METHOD™ are trademarks of BMad Code, LLC.
