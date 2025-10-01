# BMAD Checklists - Complete Guide

**Session 1.3 Learning Material**

---

## What Are BMAD Checklists?

A **checklist** is a **quality validation framework** that agents use to systematically verify document completeness and quality.

### The Problem Without Checklists

When creating complex documents (PRDs, Architecture, Stories), how do you ensure **nothing important is missing**?

**Without checklists:**

- Agents might forget critical sections
- Quality varies between documents
- No systematic validation
- Gaps discovered too late (expensive to fix)

### The Solution: Checklists

Checklists provide:

- **Quality Gates** - Prevents incomplete documents from moving forward
- **Consistency** - Same validation criteria every time
- **Learning Tool** - Shows what "good" looks like
- **Accountability** - Documents what was checked

### Real-World Analogy

Checklists are like:

- **Preflight checklist for pilots** - Ensures nothing critical forgotten before takeoff
- **Surgical checklist** - Validates all steps completed correctly
- **Code review checklist** - Systematic quality verification

---

## Checklist Structure

Every BMAD checklist is a **markdown file** with a specific structure:

### 1. Header (Metadata)

```markdown
<!-- Powered by BMAD™ Core -->

# Story Draft Checklist

The Scrum Master should use this checklist to validate that each story
contains sufficient context for a developer agent to implement it successfully.
```

**Purpose**: Explains what this checklist validates and who uses it.

---

### 2. LLM Instructions Block (Agent Guidance)

This is **unique to checklists** and uses the `[[LLM: ...]]` syntax:

```markdown
[[LLM: INITIALIZATION INSTRUCTIONS - STORY DRAFT VALIDATION

Before proceeding with this checklist, ensure you have access to:

1. The story document being validated
2. The parent epic context
3. Any referenced architecture or design documents

VALIDATION PRINCIPLES:

1. Clarity - A developer should understand WHAT to build
2. Context - WHY this is being built
3. Guidance - Key technical decisions to follow
4. Testability - How to verify it works
5. Self-Contained - Most info is in the story itself

REMEMBER: We assume competent developer agents who can:

- Research documentation and codebases
- Make reasonable technical decisions
- Follow established patterns
- Ask for clarification when truly stuck
  ]]
```

**Purpose**:

- Tells the agent how to think about validation
- Sets the validation philosophy
- Defines what to check for
- Provides context on assumptions

---

### 3. Checklist Sections (Validation Categories)

Each section has:

- **Section heading** - Category name
- **LLM guidance** - How to think about this category
- **Checkboxes** - Specific items to verify

**Example:**

```markdown
## 1. GOAL & CONTEXT CLARITY

[[LLM: Without clear goals, developers build the wrong thing. Verify:

1. The story states WHAT functionality to implement
2. The business value or user benefit is clear
3. How this fits into the larger epic/product is explained
4. Dependencies are explicit ("requires Story X to be complete")
5. Success looks like something specific, not vague
   ]]

- [ ] Story goal/purpose is clearly stated
- [ ] Relationship to epic goals is evident
- [ ] How the story fits into overall system flow is explained
- [ ] Dependencies on previous stories are identified (if applicable)
- [ ] Business context and value are clear
```

**Two-Level Structure:**

- **`[[LLM: ...]]` block** = HOW to think about validation
- **Checkboxes** = WHAT specific items to verify

---

### 4. Validation Report Template (Output Structure)

At the end, checklists define how to report findings:

```markdown
[[LLM: FINAL STORY VALIDATION REPORT

Generate a concise validation report:

1. Quick Summary
   - Story readiness: READY / NEEDS REVISION / BLOCKED
   - Clarity score (1-10)
   - Major gaps identified

2. Fill in the validation table with:
   - PASS: Requirements clearly met
   - PARTIAL: Some gaps but workable
   - FAIL: Critical information missing

3. Specific Issues (if any)
   - List concrete problems to fix
   - Suggest specific improvements
   - Identify any blocking dependencies

4. Developer Perspective
   - Could YOU implement this story as written?
   - What questions would you have?
   - What might cause delays or rework?
     ]]

| Category                             | Status | Issues |
| ------------------------------------ | ------ | ------ |
| 1. Goal & Context Clarity            | _TBD_  |        |
| 2. Technical Implementation Guidance | _TBD_  |        |
| 3. Reference Effectiveness           | _TBD_  |        |
| 4. Self-Containment Assessment       | _TBD_  |        |
| 5. Testing Guidance                  | _TBD_  |        |

**Final Assessment:**

- READY: The story provides sufficient context for implementation
- NEEDS REVISION: The story requires updates (see issues)
- BLOCKED: External information required (specify what information)
```

**Purpose**: Standardizes the output format for validation results.

---

## How Checklists Work (The Flow)

Let's trace what happens when an agent executes a checklist:

```
User: *story-checklist

↓

SM Agent: Looks up command "story-checklist"
          Finds: "Execute task execute-checklist.md
                  with checklist story-draft-checklist.md"

↓

SM Agent: Loads checklist file from dependencies
          bmad-core/checklists/story-draft-checklist.md

↓

SM Agent: Reads all [[LLM: ...]] instruction blocks
          Understands validation philosophy
          Knows what to look for in each category

↓

SM Agent: Reads the document being validated
          (e.g., docs/stories/1.3.user-auth.md)

↓

SM Agent: Systematically checks each category:
          - Reads section LLM guidance
          - Evaluates each checkbox item
          - Marks as PASS/PARTIAL/FAIL/N/A

↓

SM Agent: Generates validation report
          - Fills in status table
          - Lists specific issues found
          - Provides recommendations

↓

SM Agent: Presents report to user
          Awaits decision: Fix issues or proceed
```

---

## When Are Checklists Used?

### Answer: During quality gates in the BMAD workflow

Checklists are used at specific validation points:

| Checklist                  | When Used                  | Who Uses It     | Purpose                                       |
| -------------------------- | -------------------------- | --------------- | --------------------------------------------- |
| `pm-checklist.md`          | After PRD created          | PM or PO        | Validate PRD completeness before architecture |
| `architect-checklist.md`   | After architecture created | Architect or PO | Validate architecture quality before stories  |
| `story-draft-checklist.md` | After story created        | Scrum Master    | Validate story has enough context for dev     |
| `story-dod-checklist.md`   | After story implemented    | Dev or QA       | Validate Definition of Done met               |
| `po-master-checklist.md`   | Document review            | Product Owner   | Comprehensive validation across phases        |
| `change-checklist.md`      | Before changes             | Any agent       | Validate change impact assessment             |

---

## How to Call Checklists

### Method 1: Via Specific Agent Command (Most Common)

Agents have commands defined that execute checklists:

**Example from SM agent:**

```yaml
commands:
  - story-checklist: Execute task execute-checklist.md
      with checklist story-draft-checklist.md
```

**User calls it:**

```
*story-checklist
```

**What happens:**

- Command name: `story-checklist`
- Runs task: `execute-checklist.md` (generic checklist executor)
- With parameter: `story-draft-checklist.md` (specific checklist file)

---

### Method 2: Via Generic Execute Command

Some agents have a generic command accepting checklist name as parameter:

**Example from Architect agent:**

```yaml
commands:
  - execute-checklist {checklist}: Run task execute-checklist
      (default->architect-checklist)
```

**User calls it:**

```
*execute-checklist architect-checklist
*execute-checklist pm-checklist
*execute-checklist                    (uses default: architect-checklist)
```

---

### Method 3: Embedded in Task Workflow (Automatic)

Checklists can be called **automatically** within a task's workflow:

**Example from Dev agent completion workflow:**

```yaml
completion: "All Tasks marked [x]
  →run tests
  →run the task execute-checklist for checklist story-dod-checklist
  →set story status: 'Ready for Review'"
```

**When this happens:**

- Dev agent finishes implementation
- Automatically runs `story-dod-checklist`
- User doesn't need to call it manually
- Part of the completion process

---

## Where Checklists Live

Checklists are stored in agent dependencies but **NOT loaded until needed**:

```yaml
dependencies:
  checklists:
    - story-draft-checklist.md # Available to this agent
    - story-dod-checklist.md
  tasks:
    - execute-checklist.md # Task that runs checklists
```

**Lazy Loading Principle:**

- Checklists listed in dependencies
- Only loaded when command executes them
- Not loaded at agent activation

---

## The Execute-Checklist Task

The generic task that executes checklists: `common/tasks/execute-checklist.md`

**Key responsibilities:**

1. **Checklist Selection**
   - Accept checklist name as parameter
   - Fuzzy match (e.g., "architecture" → "architect-checklist")
   - List available checklists if not specified

2. **Mode Selection**
   - Interactive mode: Section by section with user confirmation
   - YOLO mode: Process all sections, present complete report (recommended)

3. **Document Gathering**
   - Each checklist specifies required documents
   - Resolve paths (usually in `docs/` folder)
   - Ask user if unclear

4. **Validation Approach**
   - Read and understand each requirement
   - Look for evidence in documentation
   - Follow all checklist LLM instructions
   - Mark items as:
     - ✅ PASS: Requirement clearly met
     - ❌ FAIL: Requirement not met or insufficient
     - ⚠️ PARTIAL: Some aspects covered, needs improvement
     - N/A: Not applicable to this case

5. **Report Generation**
   - Overall completion status
   - Pass rates by section
   - List of failed items with context
   - Specific recommendations for improvement
   - Sections marked N/A with justification

---

## Understanding `[[LLM: ...]]` Syntax

### What Is This?

The `[[LLM: ...]]` syntax is a **convention** that signals:

> "This text is specifically for the AI agent, not just content to display"

### How It Works

**Key insight: LLMs read and understand instructions written in natural language.**

When an LLM reads a checklist:

```markdown
## 2. TECHNICAL IMPLEMENTATION GUIDANCE

[[LLM: Developers need enough technical context to start coding. Check:

1. Key files/components to create or modify are mentioned
2. Technology choices are specified where non-obvious
3. Integration points with existing code are identified
   Note: We don't need every file listed - just the important ones.]]

- [ ] Key files to create/modify are identified
- [ ] Technologies specifically needed are mentioned
```

**The LLM understands:**

- The `[[LLM: ...]]` block provides **how to think** about this section
- It sets the validation philosophy ("not exhaustive, just important ones")
- The checkboxes below are **what to verify**

### Why This Works

1. **LLMs are text processors** - Everything is just text to them
2. **The execute-checklist task says** - "Follow all checklist LLM instructions"
3. **The syntax clearly marks** - "This is for the AI agent"
4. **It provides context** - HOW to think, not just WHAT to check

### Is This a Common Technique?

**YES** - It's called "in-context instructions" or "embedded prompts"

**Similar patterns in AI systems:**

| Pattern              | Where Used                       |
| -------------------- | -------------------------------- |
| `<!-- AI: ... -->`   | Custom AI systems                |
| `@ai` directives     | Some code assistants             |
| Frontmatter metadata | Static site generators, AI tools |
| `[[LLM:...]]`        | **BMAD's convention**            |
| System prompts       | ChatGPT, Claude projects         |
| Code comments        | GitHub Copilot                   |

**Why BMAD uses `[[LLM:...]]`:**

- Visually distinctive (easy to spot)
- Won't conflict with markdown syntax
- Clear intent (for the LLM)
- Human-readable (transparency)
- Self-contained (instructions travel with content)

### BMAD's Innovation

Most systems put instructions in **separate files**:

```
instructions.txt  → How to process
data.md          → What to process
```

**BMAD embeds them together:**

```markdown
checklist.md:

- Content (checkboxes)
- Instructions ([[LLM:...]])
- Both in ONE file
```

**Benefits:**

1. **Self-Contained** - Checklist carries its own usage instructions
2. **Versioned Together** - Instructions and content stay in sync
3. **Portable** - Copy the file, instructions come with it
4. **Transparent** - Humans can see how AI will interpret it
5. **Maintainable** - Update instructions right next to content

---

## Real-World Example: Story Validation

**Scenario**: Scrum Master just created story `1.3.user-auth.md`

### Step 1: Execute Checklist

```
SM: *story-checklist
```

### Step 2: Load and Understand

```
SM loads: story-draft-checklist.md
SM reads all [[LLM]] guidance blocks:
  - Understand validation philosophy
  - Know what "sufficient" means
  - Learn assumptions about dev capabilities
```

### Step 3: Systematic Checking

```
SM reads: docs/stories/1.3.user-auth.md

SM checks each category:
  ✅ Goal & Context: Clear, epic relationship stated
  ⚠️ Technical Guidance: Missing database schema details
  ✅ Reference Effectiveness: Specific sections referenced
  ❌ Self-Containment: Relies too heavily on architecture doc
  ✅ Testing Guidance: Test approach defined
```

### Step 4: Generate Report

```markdown
## Validation Report

**Status**: NEEDS REVISION
**Clarity Score**: 7/10

| Category                | Status  | Issues                        |
| ----------------------- | ------- | ----------------------------- |
| Goal & Context          | PASS    | -                             |
| Technical Guidance      | PARTIAL | Missing DB schema details     |
| Reference Effectiveness | PASS    | -                             |
| Self-Containment        | FAIL    | Over-reliant on external docs |
| Testing Guidance        | PASS    | -                             |

**Critical Issues:**

1. Self-Containment (FAIL): Story references architecture doc 5 times without
   summarizing key patterns. Dev will need to context-switch frequently.

**Recommendations:**

1. Add database schema inline or in Dev Notes section
2. Summarize authentication flow pattern from architecture in story
3. Include key API endpoint details in story instead of just referencing

**Developer Perspective:**
Could implement this story but would need to read architecture doc multiple
times. This breaks flow and increases cognitive load.
```

### Step 5: User Decision

```
User reviews report and decides to:
- Fix the self-containment issue
- Add DB schema to Dev Notes
- Summarize auth flow in story
```

---

## Checklist vs Template vs Task

| Aspect      | Templates          | Tasks                | Checklists                   |
| ----------- | ------------------ | -------------------- | ---------------------------- |
| **What**    | Document structure | Workflows to execute | Quality validation           |
| **Format**  | YAML               | Markdown             | Markdown with [[LLM]] blocks |
| **When**    | Creating documents | Doing work           | Validating quality           |
| **Output**  | New document       | Completed action     | Validation report            |
| **Purpose** | Ensure structure   | Execute process      | Ensure completeness          |
| **Loading** | When task needs it | When command runs    | When validation runs         |

---

## Checklist Structure Patterns

### Simple Checklist (Binary Pass/Fail)

```markdown
- [ ] Item clearly defined
- [ ] Dependencies identified
- [ ] Tests specified
```

### Complex Checklist (Categories + Guidance)

```markdown
## 1. CATEGORY NAME

[[LLM: Explain how to think about this category

- What to look for
- Why it matters
- How to validate
  ]]

- [ ] Specific check 1
- [ ] Specific check 2

## 2. NEXT CATEGORY

...
```

### Validation Report Template

```markdown
[[LLM: FINAL REPORT GENERATION

Create report with:

1. Summary (READY/NEEDS REVISION/BLOCKED)
2. Status table with PASS/PARTIAL/FAIL
3. Specific issues to fix
4. Recommendations
   ]]

| Category | Status | Issues |
| -------- | ------ | ------ |
| ...      | _TBD_  |        |
```

---

## Available Checklists in BMAD

| Checklist File             | Purpose                               | Used By       | Phase                |
| -------------------------- | ------------------------------------- | ------------- | -------------------- |
| `pm-checklist.md`          | Validate PRD completeness and quality | PM, PO        | After PRD            |
| `architect-checklist.md`   | Validate architecture design          | Architect, PO | After Architecture   |
| `story-draft-checklist.md` | Validate story has sufficient context | Scrum Master  | After Story Creation |
| `story-dod-checklist.md`   | Validate Definition of Done met       | Dev, QA       | After Implementation |
| `po-master-checklist.md`   | Comprehensive document validation     | Product Owner | Any Phase            |
| `change-checklist.md`      | Validate change impact                | Any Agent     | Before Changes       |

---

## Why You Need Checklists

### 1. Quality Gates

- Prevents incomplete documents from moving forward
- Catches issues early when they're cheaper to fix
- Ensures readiness for next phase

### 2. Consistency

- Same validation criteria applied every time
- No "forgetting" to check something important
- Standardized quality across all projects

### 3. Learning Tool

- Shows what "good" looks like
- Teaches agents what to include
- Codifies best practices

### 4. Accountability

- Documents what was checked
- Tracks validation history
- Provides evidence of quality process

### 5. Efficiency

- Systematic approach is faster than ad-hoc
- Reduces back-and-forth due to missing info
- Prevents rework from discovered gaps

---

## Key Insights

### 1. Checklists Are Agent Tools

- They're loaded and interpreted by AI agents
- `[[LLM]]` blocks guide agent thinking
- Not just for humans to read

### 2. Two-Level Validation

- **Checkboxes**: Specific items to verify (WHAT)
- **LLM Guidance**: How to think about validation (HOW)

### 3. Lazy Loading

- Checklists listed in agent dependencies
- Only loaded when command executed
- Not loaded at agent activation

### 4. Execution Modes

- **Interactive**: Section by section with user feedback
- **YOLO**: Complete analysis, then present (faster, recommended)

### 5. Self-Contained Design

- Instructions embedded in the checklist file
- Content and guidance travel together
- Versioned as a unit

---

## Summary

**Checklists are:**

- Quality validation frameworks in markdown format
- Used at workflow quality gates
- Interpreted by agents with `[[LLM: ...]]` guidance
- Result in validation reports (PASS/PARTIAL/FAIL)

**Checklists control:**

- What to validate in documents
- How agents think about quality
- When to proceed vs fix issues
- What "complete" and "ready" look like

**Use checklists when:**

- Validating document completeness
- Enforcing quality standards
- Catching issues before next phase
- Teaching agents what "good" looks like
- Ensuring nothing critical is forgotten

**Checklists work because:**

- LLMs can read and follow instructions in text
- `[[LLM: ...]]` provides validation philosophy
- Self-contained design keeps content and guidance together
- Systematic approach ensures consistency

---

**Next Steps**: Understanding core-config.yaml and how everything connects together
