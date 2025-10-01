# BMAD Templates - Complete Guide

**Session 1.3 Learning Material**

---

## What is a BMAD Template?

A **template** is a **pre-defined structure for a document** that ensures consistency, completeness, quality, and efficiency when agents generate documents.

### The Problem Without Templates

When creating documents like Project Briefs, PRDs, Architecture docs, or Story files:

- Structure would be inconsistent
- Sections might be missing
- Quality would vary
- Agents would reinvent the wheel each time

### The Solution: Templates

Templates provide:

- **Consistency** - Every document of the same type has the same structure
- **Completeness** - Nothing important gets forgotten
- **Quality** - Each section has clear instructions on what to include
- **Efficiency** - Agents don't have to figure out structure each time

### Real-World Analogy

Templates are like:

- A form at the doctor's office (Name, Address, Insurance sections always present)
- A recipe card format (Ingredients, Steps, Cooking Time sections standardized)
- A tax form (Same structure every year, just different data)

---

## Template Structure - The Building Blocks

Every BMAD template is a **YAML file** with 4 main blocks:

### 1. Template Block (Required - Document Identity)

```yaml
template:
  id: project-brief-template-v2 # Unique identifier
  name: Project Brief # Human-readable name
  version: 2.0 # Version number
  output:
    format: markdown # Output format (always markdown)
    filename: docs/brief.md # Where to save the document
    title: 'Project Brief: {{project_name}}' # Document title (can use variables)
```

**Purpose**: Tells the agent:

- What this template is called
- Where to save the generated document
- What version it is (for tracking updates)

**Variables**: Use `{{variable_name}}` syntax for placeholders that get filled in during generation.

---

### 2. Workflow Block (Required - Interaction Behavior)

```yaml
workflow:
  mode: interactive # How to work with user
  elicitation: advanced-elicitation # Type of questioning
  custom_elicitation: # Optional custom options
    title: 'Project Brief Elicitation Actions'
    options:
      - 'Expand section with more specific details'
      - 'Validate against similar successful products'
      - 'Proceed to next section'
```

**Purpose**: Tells the agent HOW to interact with the user.

**Key fields**:

- `mode`: `interactive` (section by section) or `yolo` (generate full draft)
- `elicitation`: How to ask questions (`basic`, `advanced-elicitation`)
- `custom_elicitation`: Custom menu options for user (optional)

---

### 3. Agent Config Block (Optional - Permissions)

```yaml
agent_config:
  editable_sections: # Which sections agents can edit
    - Status
    - Dev Notes
    - Change Log
```

**Purpose**: Controls which sections agents are allowed to modify.

**Used in**: Story templates, where different agents need different edit permissions.

**Note**: This is **optional** - only use when you need fine-grained control over who can edit what.

---

### 4. Sections Block (Required - Document Structure)

This is the **most important part** - it defines the actual content structure:

```yaml
sections:
  - id: executive-summary # Unique section ID
    title: Executive Summary # Section heading in document
    instruction: | # Instructions for agent
      Create a concise overview that captures the essence of the project.
      Include:
      - Product concept in 1-2 sentences
      - Primary problem being solved
    template: '{{executive_summary_content}}' # Placeholder for content
    elicit: true # Must ask user (optional)
    type: paragraphs # Section type (optional)
    condition: Has UX requirements # Show only if condition met (optional)
```

---

## Section Properties Reference

| Property      | Required? | Purpose                       | Example                        |
| ------------- | --------- | ----------------------------- | ------------------------------ |
| `id`          | ✅ Yes    | Unique identifier for section | `executive-summary`            |
| `title`       | ✅ Yes    | Heading shown in document     | `Executive Summary`            |
| `instruction` | ✅ Yes    | Tells agent what to create    | "Create a concise overview..." |
| `template`    | ❌ No     | Format pattern with variables | `"{{content}}"`                |
| `elicit`      | ❌ No     | Must ask user for input       | `true` or `false`              |
| `type`        | ❌ No     | Section content type          | See types below                |
| `condition`   | ❌ No     | Only show if condition met    | `Has UX requirements`          |
| `sections`    | ❌ No     | Nested sub-sections           | (array of sections)            |
| `owner`       | ❌ No     | Which agent creates this      | `scrum-master`                 |
| `editors`     | ❌ No     | Which agents can edit         | `[dev-agent, qa-agent]`        |

---

## Section Types

Different types control how content is formatted:

| Type            | What It Creates             | Example Use                    |
| --------------- | --------------------------- | ------------------------------ |
| `template-text` | Fixed format with variables | User story: "As a {{role}}..." |
| `paragraphs`    | Free-form text paragraphs   | Background, descriptions       |
| `bullet-list`   | Bulleted markdown list      | Features, notes                |
| `numbered-list` | Numbered markdown list      | Requirements (FR1, FR2...)     |
| `table`         | Markdown table              | Change logs, comparisons       |
| `choice`        | Select from options         | Status: Draft/Done             |

---

## Nested Sections

You can have **parent sections** that contain **child sections**:

```yaml
sections:
  - id: target-users # Parent section
    title: Target Users
    instruction: Define user segments
    sections: # Child sections!
      - id: primary-segment # Child 1
        title: 'Primary User Segment'
        template: '{{primary_description}}'
      - id: secondary-segment # Child 2
        title: 'Secondary User Segment'
        template: '{{secondary_description}}'
```

**Result in generated document**:

```markdown
## Target Users

### Primary User Segment

[content here]

### Secondary User Segment

[content here]
```

---

## Complete Minimal Template Example

Here's the **absolute minimum** template structure:

```yaml
# <!-- Powered by BMAD™ Core -->
template:
  id: my-template-v1
  name: My Document
  version: 1.0
  output:
    format: markdown
    filename: docs/my-doc.md
    title: 'My Document'

workflow:
  mode: interactive
  elicitation: advanced-elicitation

sections:
  - id: introduction
    title: Introduction
    instruction: Write an introduction paragraph
```

Everything else is **optional** and added based on your needs.

---

## When Are Templates Used?

### Answer: Only during TASK execution that generates documents

Templates are **NOT**:

- ❌ Loaded during agent activation
- ❌ Listed in agent dependencies directly (they are, but not loaded)
- ❌ Used in every command

Templates **ARE**:

- ✅ Used when executing specific tasks that generate documents
- ✅ Referenced in task files OR in command definitions
- ✅ Loaded only when needed (lazy loading)

---

## Two Ways Templates Are Referenced

### Way 1: In the Task File Header

At the top of a task file:

```markdown
docOutputLocation: docs/brainstorming-session-results.md
template: '{root}/templates/brainstorming-output-tmpl.yaml'
```

The task declares which template it will use.

---

### Way 2: In the Agent's Command Definition

In the agent's YAML block:

```yaml
commands:
  - create-prd: run task create-doc.md with template prd-tmpl.yaml
  - create-brownfield-prd: run task create-doc.md with template brownfield-prd-tmpl.yaml
```

The **command** specifies:

- Which **task** to run
- Which **template** to use

So the SAME task can use DIFFERENT templates depending on the command!

---

## The Template Flow (How It Works)

When a user executes a command that uses a template:

```
User: *create-prd

↓

PM Agent: Looks up command "create-prd"
          Finds: "run task create-doc.md with template prd-tmpl.yaml"

↓

PM Agent: Loads task file: bmad-core/tasks/create-doc.md
          Loads template: bmad-core/templates/prd-tmpl.yaml

↓

Task executes using the template structure:
  - Reads template sections
  - Checks conditions
  - Elicits user input (if elicit: true)
  - Generates content for each section
  - Assembles final document

↓

Document generated and saved: docs/prd.md
```

---

## Lazy Loading Principle

BMAD uses **lazy loading** for efficiency:

| Loading Time          | What Gets Loaded                                      |
| --------------------- | ----------------------------------------------------- |
| **Agent Activation**  | Agent definition, core-config.yaml, persona           |
| **Command Execution** | Task file, dependencies (templates, checklists, data) |
| **Never**             | Everything at once                                    |

**Why?** To avoid loading unnecessary files and wasting context/tokens.

---

## Where Templates Live in Dependencies

Templates are stored in agent dependencies but **NOT loaded until needed**:

```yaml
dependencies:
  tasks:
    - create-doc.md # Task that uses templates
  templates:
    - prd-tmpl.yaml # Template (not loaded at activation)
    - architecture-tmpl.yaml # Template (not loaded at activation)
```

---

## Key Differences: Agents vs Tasks vs Templates

| Aspect        | Agents                    | Tasks                    | Templates                  |
| ------------- | ------------------------- | ------------------------ | -------------------------- |
| **What**      | Personas with behaviors   | Workflows to execute     | Document blueprints        |
| **Format**    | Markdown with YAML config | Flexible markdown        | YAML structure             |
| **Purpose**   | Define WHO and HOW        | Define step-by-step WHAT | Define document STRUCTURE  |
| **Loading**   | Read once at activation   | Read when commanded      | Read when generating doc   |
| **Variables** | Config from core-config   | Inline file references   | Placeholders {{like_this}} |

---

## Real-World Example: Story Template Usage

**Scrum Master activates** and runs command:

```
*create-next-story
```

**What happens**:

1. SM loads task: `create-next-story.md`
2. Task internally uses template: `story-tmpl.yaml`
3. SM reads sharded epic: `docs/epics/epic-1.md`
4. SM reads architecture: `docs/architecture/*.md`
5. SM processes template sections:
   - **Status**: Sets to "Draft" (choice type)
   - **Story**: Elicits from user (elicit: true) - "As a user, I want..."
   - **Acceptance Criteria**: Copies from epic
   - **Tasks/Subtasks**: Elicits breakdown from user
   - **Dev Notes**: Extracts relevant architecture info
   - **Testing**: Extracts testing standards from architecture
6. SM writes: `docs/stories/1.3.feature-name.md`

**Result**: A self-contained story file with ALL context Dev needs.

---

## Template Variables (Placeholders)

Templates use `{{variable}}` syntax for dynamic content:

```yaml
title: 'Story {{epic_num}}.{{story_num}}: {{story_title_short}}'
filename: docs/stories/{{epic_num}}.{{story_num}}.{{story_title_short}}.md
```

These are filled in during document generation:

- From user input (elicitation)
- From config files (core-config.yaml)
- From other documents (epics, architecture)
- From agent logic (generated content)

---

## Advanced Features

### Conditional Sections

```yaml
- id: ui-goals
  title: User Interface Design Goals
  condition: PRD has UX/UI requirements # Only show if condition met
```

### Owner/Editor System (Permissions)

```yaml
- id: status
  title: Status
  owner: scrum-master # Who creates this
  editors: [scrum-master, dev-agent] # Who can modify this
```

**Purpose**: Prevents agents from overstepping their roles.

### Elicitation Control

```yaml
- id: story
  title: Story
  instruction: Define the user story
  elicit: true # MUST ask user for input
```

**When `elicit: true`**: Agent MUST interact with user, can't auto-generate this section.

---

## Summary

**Templates are:**

- Document structure blueprints in YAML format
- Used by tasks to generate consistent documents
- Loaded only when needed (lazy loading)
- Made up of 4 main blocks: template, workflow, agent_config (optional), sections

**Templates control:**

- Document structure and sections
- User interaction flow (interactive vs yolo)
- Which agents can edit which sections
- What content to include and how to format it

**Use templates when:**

- You need consistent document structure across projects
- Multiple agents need to create/edit the same document type
- You want to ensure completeness and quality
- You want to guide agents on what to include

---

**Next Steps**: Create a custom template for "technical-design-doc"
