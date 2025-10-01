# BMAD Workflows - Complete Guide

**Session 1.3 Learning Material**

---

## WHAT are Workflows?

**Workflows are the "game plan" for building a project** - they define which agents work in what order to take a project from idea to implementation.

Think of them like:

- **A construction blueprint** - Shows order of operations (foundation → framing → plumbing → electrical)
- **A recipe flow** - Shows steps and when to add each ingredient
- **A playbook** - Defines strategy and coordination between team members

**Key insight**: Workflows are **NOT executable code** - they're **reference guides** that describe the agent collaboration sequence.

---

## WHY do you need Workflows?

### The Problem Without Workflows

Imagine you want to build a full-stack app. You'd have to figure out:

- Do I start with Analyst or PM?
- When does Architect get involved?
- What does each agent need from the previous agent?
- Can I skip any steps?
- What order should agents work in?

**Chaos!** Every project would start with confusion.

### The Solution: Workflows

Workflows provide:

1. **Clear sequence** - Agent A → Agent B → Agent C
2. **Handoff clarity** - What each agent needs to proceed
3. **Decision points** - When to skip/include optional steps
4. **Consistent process** - Same approach every time

---

## WHEN are Workflows used?

### At Project Start (Choosing the Right Workflow)

You select a workflow based on:

- **Project type**: New (greenfield) vs existing (brownfield)
- **Stack type**: Fullstack vs UI-only vs Service-only

### Throughout the Project (As Reference)

Workflows are referenced:

- When you're unsure who works next
- When deciding if you need a document
- When coordinating agent handoffs
- When validating you haven't skipped steps

**Important**: Workflows are **not loaded by agents** - they're **for humans** to understand the process.

---

## WHERE do Workflows live?

```
bmad-core/workflows/
├── greenfield-fullstack.yaml    # New full-stack project
├── greenfield-service.yaml      # New backend/service only
├── greenfield-ui.yaml           # New frontend only
├── brownfield-fullstack.yaml   # Enhance existing full-stack
├── brownfield-service.yaml     # Enhance existing backend
└── brownfield-ui.yaml          # Enhance existing frontend
```

**File format**: YAML (structured data)

**Used by**:

- ✅ Humans (read to understand process)
- ✅ BMAD Orchestrator agent (guides user through workflow)
- ❌ Individual agents (they don't load workflow files)

---

## HOW do Workflows work?

### Workflow Structure (Anatomy)

Every workflow has these key sections:

### 1. Metadata Block

```yaml
workflow:
  id: greenfield-fullstack
  name: Greenfield Full-Stack Application Development
  description: Agent workflow for building full-stack apps
  type: greenfield
  project_types:
    - web-app
    - saas
    - mvp
```

**Purpose**: Identifies what this workflow is for.

---

### 2. Sequence Block (The Main Event)

This is **the heart of the workflow** - defines agent order and actions:

```yaml
sequence:
  - agent: analyst # Which agent
    creates: project-brief.md # What they create
    optional_steps: # Optional actions
      - brainstorming_session
      - market_research_prompt
    notes: 'Can brainstorm first...' # Instructions
```

**Each step defines**:

- `agent`: Who does the work
- `creates`: What document/artifact they produce
- `requires`: What they need before starting
- `optional_steps`: Optional actions they can take
- `condition`: When to include this step
- `notes`: Human-readable instructions

---

### 3. Real Example (Story Creation Step)

```yaml
- agent: sm
  action: create_story
  creates: story.md
  requires: sharded_docs
  repeats: for_each_epic
  notes: |
    Story creation cycle:
    - SM Agent (New Chat): @sm → *create
    - Creates next story from sharded docs
    - Story starts in "Draft" status
```

**Translation**:

1. **Who**: Scrum Master agent
2. **What**: Create a story file
3. **Needs**: Sharded documents must exist first
4. **Repeats**: Do this for every epic
5. **How**: Instructions for user on what to do

---

### 4. Decision Points (Conditional Steps)

```yaml
- agent: ux-expert
  creates: v0_prompt (optional)
  requires: front-end-spec.md
  condition: user_wants_ai_generation # Only if user wants this
  notes: 'OPTIONAL BUT RECOMMENDED...'
```

**Purpose**: Some steps are optional based on user needs.

---

### 5. Flow Diagram (Visual Representation)

````yaml
flow_diagram: |
  ```mermaid
  graph TD
      A[Start] --> B[analyst: project-brief]
      B --> C[pm: prd]
      C --> D[ux-expert: front-end-spec]
      ...
````

````

**Purpose**: Mermaid diagram showing the visual flow with decision branches.

---

### 6. Handoff Prompts (Agent Communication)

```yaml
handoff_prompts:
  analyst_to_pm: "Project brief is complete. Save it as docs/project-brief.md, then create the PRD."
  pm_to_ux: "PRD is ready. Save it as docs/prd.md, then create the UI/UX specification."
````

**Purpose**: What to say when handing off between agents.

---

### 7. Decision Guidance

```yaml
decision_guidance:
  when_to_use:
    - Building production-ready applications
    - Multiple team members will be involved
    - Complex feature requirements
    - Need comprehensive documentation
```

**Purpose**: Helps you decide if this workflow is right for your project.

---

## The Two Main Workflow Types

### Greenfield Workflows (New Projects)

**When to use**: Building something from scratch

**Flow**:

```
Analyst (Brief) → PM (PRD) → UX Expert (UI Spec)
→ Architect (Architecture) → PO (Validate)
→ PO (Shard) → SM (Stories) → Dev (Implement) → QA (Review)
```

**Key characteristics**:

- Full planning phase required
- All documents created from scratch
- Comprehensive architecture needed
- Linear flow (each step builds on previous)

**Example**: Building a new SaaS todo app from zero

---

### Brownfield Workflows (Existing Projects)

**When to use**: Enhancing/fixing existing project

**Flow** (with decision points):

```
Analyst (Classify scope)
  → If single story: PM (Create story) → Dev implements → Done
  → If small feature: PM (Create epic) → SM creates stories → Done
  → If major enhancement: Check existing docs
    → If docs inadequate: Architect (Document project)
    → PM (PRD)
    → If architecture changes needed: Architect (Architecture)
    → PO (Validate) → PO (Shard) → SM (Stories) → Dev → QA
```

**Key characteristics**:

- **Smart routing** based on scope (single story vs epic vs major)
- **Skip steps** if not needed (don't recreate adequate docs)
- **Document existing system** only if necessary
- **Conditional architecture** (only if changes needed)

**Example**: Adding authentication to existing app

---

## Key Differences: Greenfield vs Brownfield

| Aspect             | Greenfield                   | Brownfield                             |
| ------------------ | ---------------------------- | -------------------------------------- |
| **Starting point** | Nothing exists               | Project exists                         |
| **First step**     | Analyst creates brief        | Analyst classifies scope               |
| **Routing**        | Linear flow                  | Smart routing (1 story / epic / major) |
| **Documentation**  | Create all from scratch      | Skip if adequate docs exist            |
| **Architecture**   | Always created               | Only if changes needed                 |
| **Story creation** | Standard `create-next-story` | May use `create-brownfield-story`      |
| **Risk**           | Unknown unknowns             | Integration with existing code         |
| **Focus**          | Building right thing         | Not breaking existing things           |

---

## Workflow Variants by Stack Type

### Fullstack Workflows

**Includes**:

- Frontend planning (UX Expert)
- Backend planning (Architect)
- Full architecture document
- Both UI and service stories

**Use when**: Building web apps, SaaS products, enterprise apps

---

### Service Workflows

**Includes**:

- Backend/API focus only
- No UI/UX planning step
- Service architecture document
- API-focused stories

**Use when**: Building REST APIs, GraphQL services, microservices

---

### UI Workflows

**Includes**:

- Frontend focus only
- UX Expert creates detailed specs
- Frontend architecture
- UI component stories

**Use when**: Building standalone UIs, design systems, frontend-only apps

---

## How You Actually Use Workflows

### Step 1: Choose Your Workflow

Based on:

- **New vs existing**: Greenfield or Brownfield
- **Stack type**: Fullstack, Service, or UI

**Decision matrix**:

| Project Type     | Stack         | Workflow File               |
| ---------------- | ------------- | --------------------------- |
| New project      | Full-stack    | `greenfield-fullstack.yaml` |
| New project      | Backend only  | `greenfield-service.yaml`   |
| New project      | Frontend only | `greenfield-ui.yaml`        |
| Existing project | Full-stack    | `brownfield-fullstack.yaml` |
| Existing project | Backend only  | `brownfield-service.yaml`   |
| Existing project | Frontend only | `brownfield-ui.yaml`        |

**Example**: "I'm building a new SaaS web app" → `greenfield-fullstack.yaml`

---

### Step 2: Follow the Sequence

Open the workflow file and follow steps in order:

```yaml
1. Agent: analyst → creates: project-brief.md
   Action: Activate analyst, create brief, save to docs/

2. Agent: pm → creates: prd.md
   Action: Activate PM, create PRD from brief, save to docs/

3. Agent: ux-expert → creates: front-end-spec.md
   Action: Activate UX Expert, create spec, save to docs/
```

---

### Step 3: Make Decisions at Decision Points

```yaml
- condition: user_wants_ai_generation
  notes: 'OPTIONAL: Generate v0 prompt?'
```

**You decide**: Yes or No, then follow that path.

---

### Step 4: Hand Off Between Agents

Use the `handoff_prompts`:

```
"Project brief is complete. Save it as docs/project-brief.md,
then create the PRD."
```

**Handoff checklist**:

- ✅ Document created and complete
- ✅ Document saved to correct location
- ✅ Next agent knows what file to read
- ✅ Next agent knows what to create

---

### Step 5: Repeat Development Cycle

For the development phase:

```
Repeat: SM (create story) → Dev (implement) → QA (review)
Until: All stories complete
```

---

## Real-World Example: Greenfield Fullstack

**Scenario**: Building a new todo app

### Planning Phase (Web Chat):

1. **Analyst** (@analyst):
   - Optionally: Brainstorm ideas
   - Create project brief
   - Save → `docs/project-brief.md`

2. **PM** (@pm):
   - Read brief
   - Create PRD
   - Save → `docs/prd.md`

3. **UX Expert** (@ux-expert):
   - Read PRD
   - Create UI/UX spec
   - Save → `docs/front-end-spec.md`

4. **Architect** (@architect):
   - Read PRD + UI spec
   - Create fullstack architecture
   - Save → `docs/fullstack-architecture.md`

5. **PO** (@po):
   - Validate all documents (run checklist)
   - If issues: Send back to relevant agent
   - If good: Shard PRD
   - Result → `docs/epics/`, `docs/architecture/`

### Development Phase (IDE):

6. **SM** (@sm):
   - Create story 1.1
   - Save → `docs/stories/1.1.setup.md`

7. **Dev** (@dev):
   - Read story 1.1
   - Implement code
   - Update story status → "Review"

8. **QA** (@qa):
   - Review implementation
   - Fix small issues
   - Update story status → "Done"

9. **Repeat** steps 6-8 for:
   - Story 1.2, 1.3, 2.1, 2.2, etc.
   - Until all epics complete

---

## Real-World Example: Brownfield Enhancement

**Scenario**: Adding user authentication to existing app

### Classification Phase:

1. **Analyst** (@analyst):
   - Ask: "Describe the enhancement scope"
   - User: "Add OAuth2 login with Google/GitHub"
   - Classify: **Major enhancement** (needs architecture changes)

### Documentation Check:

2. **Analyst** (@analyst):
   - Check existing docs: `docs/architecture.md`
   - Assessment: **Inadequate** (outdated, no auth section)

3. **Architect** (@architect):
   - Run task: `document-project`
   - Capture current system state
   - Save → `docs/brownfield-architecture.md`

### Planning Phase:

4. **PM** (@pm):
   - Use template: `brownfield-prd-tmpl`
   - Reference: `brownfield-architecture.md`
   - Create enhancement PRD
   - Save → `docs/prd.md`

5. **Architect** (@architect):
   - Architecture changes needed? **Yes** (OAuth2 integration)
   - Create architecture document
   - Save → `docs/architecture.md`

6. **PO** (@po):
   - Validate: PRD + Architecture
   - Shard documents
   - Result → `docs/epics/`, `docs/architecture/`

### Development Phase:

7. **SM → Dev → QA** cycle (same as greenfield)

---

## Workflow Step Properties Reference

| Property         | Required? | Purpose                             | Example                           |
| ---------------- | --------- | ----------------------------------- | --------------------------------- |
| `agent`          | ✅ Yes    | Which agent performs this step      | `analyst`, `pm`, `sm`             |
| `action`         | ❌ No     | What action to perform              | `create_story`, `validate`        |
| `creates`        | ❌ No     | What artifact is produced           | `prd.md`, `story.md`              |
| `requires`       | ❌ No     | What's needed before this step      | `project-brief.md`                |
| `uses`           | ❌ No     | What tool/template/checklist to use | `prd-tmpl`, `po-master-checklist` |
| `optional_steps` | ❌ No     | Optional actions within this step   | `brainstorming_session`           |
| `condition`      | ❌ No     | When to include this step           | `user_wants_ai_generation`        |
| `optional`       | ❌ No     | Whether entire step is optional     | `true`, `false`                   |
| `repeats`        | ❌ No     | How many times to repeat            | `for_each_epic`                   |
| `notes`          | ✅ Yes    | Human instructions                  | Markdown text                     |

---

## Workflow vs Other BMAD Components

| Component      | Purpose               | Used By                | Executable? | Format          |
| -------------- | --------------------- | ---------------------- | ----------- | --------------- |
| **Agents**     | WHO does work         | Loaded at activation   | Yes         | Markdown + YAML |
| **Tasks**      | WHAT steps to execute | Loaded when commanded  | Yes         | Markdown        |
| **Templates**  | Document STRUCTURE    | Loaded when generating | Yes         | YAML            |
| **Checklists** | Quality VALIDATION    | Loaded when validating | Yes         | Markdown        |
| **Data**       | Reference INFO        | Loaded when needed     | No          | Markdown        |
| **Workflows**  | Process SEQUENCE      | Read by humans         | No          | YAML            |

**Key insight**: Workflows are **descriptive**, not **prescriptive** (agents don't execute them directly).

---

## Common Workflow Patterns

### Pattern 1: Optional Step

```yaml
- agent: ux-expert
  creates: v0_prompt
  condition: user_wants_ai_generation
  optional: true
  notes: 'Ask user if they want to generate UI with AI tools'
```

**When to use**: Features that some projects need, others don't.

---

### Pattern 2: Conditional Routing

```yaml
- step: routing_decision
  condition: based_on_classification
  routes:
    single_story:
      agent: pm
      uses: brownfield-create-story
    small_feature:
      agent: pm
      uses: brownfield-create-epic
    major_enhancement:
      continue: to_next_step
```

**When to use**: Different paths based on project needs.

---

### Pattern 3: Validation Loop

```yaml
- agent: po
  validates: all_artifacts

- agent: various
  updates: any_flagged_documents
  condition: po_checklist_issues
  notes: 'If PO finds issues, fix and re-validate'
```

**When to use**: Quality gates that must pass before proceeding.

---

### Pattern 4: Repeating Cycle

```yaml
- agent: sm
  action: create_story
  repeats: for_each_epic

- agent: dev
  action: implement_story

- agent: qa
  action: review_implementation

- step: repeat_development_cycle
  notes: 'Repeat SM → Dev → QA for all stories'
```

**When to use**: Iterative development cycles.

---

## Tips for Following Workflows

### 1. Don't Skip Steps (Unless Optional)

❌ **Wrong**: Skip architect step because "I know what I want"
✅ **Right**: Follow sequence, even if step seems unnecessary

**Why**: Each step adds value you might not see initially.

---

### 2. Save Documents to Correct Location

Every workflow specifies where to save:

```yaml
notes: "SAVE OUTPUT: Copy final prd.md to your project's docs/ folder."
```

❌ **Wrong**: Keep document in chat, don't save
✅ **Right**: Save to `docs/` folder immediately

**Why**: Next agent needs to read the file.

---

### 3. Use Handoff Prompts

Workflows provide exact text:

```yaml
handoff_prompts:
  analyst_to_pm: 'Project brief is complete. Save it as docs/project-brief.md, then create the PRD.'
```

✅ **Right**: Copy this text when switching agents

**Why**: Clear communication, nothing forgotten.

---

### 4. Make Conscious Decisions at Decision Points

When workflow says:

```yaml
condition: user_wants_ai_generation
```

❌ **Wrong**: Randomly pick yes/no
✅ **Right**: Think about your project needs, then decide

---

### 5. Reference Flow Diagram

Every workflow has a Mermaid diagram showing:

- All steps
- Decision points
- Loops
- Optional paths

✅ **Right**: Look at diagram to understand big picture

---

## Summary

**Workflows are:**

- Project "playbooks" defining agent sequence
- YAML files in `bmad-core/workflows/`
- Reference guides for humans (not executed by agents)
- Divided by type (greenfield/brownfield) and stack (fullstack/service/ui)

**Workflows define:**

- Which agents work in what order
- What each agent creates
- What each agent needs before starting
- When steps are optional
- How to hand off between agents

**Workflows consist of:**

- Metadata (id, name, type)
- Sequence (ordered steps with agent/action/creates/requires)
- Flow diagram (visual Mermaid chart)
- Handoff prompts (communication templates)
- Decision guidance (when to use this workflow)

**Use workflows when:**

- Starting a new project (choose your workflow)
- Unsure which agent comes next
- Need to validate you're following best practices
- Coordinating multi-agent collaboration

**Key differences:**

- **Greenfield**: Linear, comprehensive, everything from scratch
- **Brownfield**: Smart routing, conditional steps, skip unnecessary work

---

**Next Steps**: Understand core-config.yaml and how it ties everything together
