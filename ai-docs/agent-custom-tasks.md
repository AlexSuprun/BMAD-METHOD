# BMad Agent Custom Instructions Guide

## Overview

This guide explains how to give custom instructions to BMad agents and choose the right agent for any task. BMad agents are flexible and can handle custom work beyond their predefined tasks when given clear instructions.

## Agent Responsibilities & Abilities Matrix

### Core Development Agents

| Agent                      | Primary Role            | Can Do                                                                                                                                   | Cannot/Should Not Do                                                                                                     |
| -------------------------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **PM (Product Manager)**   | Requirements & Strategy | • Create/update PRDs<br>• Define features & requirements<br>• Prioritize features<br>• Market analysis<br>• Product roadmaps             | • Write code<br>• Create user stories<br>• Technical implementation<br>• System architecture                             |
| **Architect**              | System Design           | • Design system architecture<br>• Technology decisions<br>• Integration patterns<br>• Performance planning<br>• Update architecture docs | • Write implementation code<br>• Create user stories<br>• Business requirements<br>• Testing strategies                  |
| **SM (Scrum Master)**      | Story Management        | • Create/update user stories<br>• Sprint planning<br>• Story refinement<br>• Process guidance<br>• Story validation                      | • Write production code<br>• Make architecture decisions<br>• Change business requirements<br>• Technical implementation |
| **Dev (Developer)**        | Implementation          | • Write/modify code<br>• Implement user stories<br>• Debug issues<br>• Code refactoring<br>• Technical problem solving                   | • Create user stories<br>• Change requirements<br>• Architecture decisions<br>• Quality assurance testing                |
| **QA (Quality Assurance)** | Quality & Testing       | • Code review<br>• Test planning<br>• Quality validation<br>• Code refactoring<br>• Bug identification                                   | • Create user stories<br>• Change business requirements<br>• System architecture<br>• Feature prioritization             |

### Specialized Agents

| Agent                  | Primary Role         | Can Do                                                                                                                 | Best Used For                                                                   |
| ---------------------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| **Analyst**            | Research & Analysis  | • Market research<br>• Competitive analysis<br>• Requirements gathering<br>• Data analysis<br>• Documentation creation | • Initial project research<br>• Existing system analysis<br>• Market validation |
| **UX Expert**          | User Experience      | • UI/UX design<br>• User journey mapping<br>• Prototyping<br>• Usability analysis<br>• Design systems                  | • Interface design<br>• User experience optimization<br>• Design validation     |
| **PO (Product Owner)** | Backlog & Validation | • Backlog management<br>• Story validation<br>• Acceptance criteria<br>• Cross-document consistency                    | • Story refinement<br>• Document validation<br>• Process oversight              |

### Meta Agents

| Agent                 | Primary Role     | Can Do                                                                                                | When to Use                                                                           |
| --------------------- | ---------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| **BMad-Orchestrator** | Coordination     | • Agent switching<br>• Workflow coordination<br>• Multi-agent tasks<br>• Resource loading             | • Complex multi-role tasks<br>• When unsure which agent to use<br>• Workflow guidance |
| **BMad-Master**       | Universal Expert | • Any task without switching<br>• Cross-domain work<br>• Generic problem solving<br>• Resource access | • Single-session work<br>• When agent switching is impractical<br>• Ad-hoc tasks      |

## Custom Instruction Patterns

### Pattern 1: Task Override

**When to Use**: You want an agent to do something similar but different from their standard tasks.

**Format**:

```
@agent-name
*standard-command
"Instead of [normal behavior], please [custom behavior]"
```

**Example**:

```
@sm
*create
"Instead of creating a new story, update story 1.1 to include OAuth authentication requirements"
```

### Pattern 2: Contextual Instructions

**When to Use**: You need to provide specific context or constraints for the task.

**Format**:

```
@agent-name
"[Task description] with these constraints:
- [Constraint 1]
- [Constraint 2]
- [Additional context]"
```

**Example**:

```
@dev
"Implement story 1.1 but use the existing FileRepository interface at falcon-api/files/file.repository.interface.ts instead of creating new interfaces"
```

### Pattern 3: Multi-Step Instructions

**When to Use**: You need the agent to perform several related actions in sequence.

**Format**:

```
@agent-name
"I need you to:
1. [Step 1]
2. [Step 2]
3. [Step 3]
4. [Final validation step]"
```

**Example**:

```
@architect
"I need you to:
1. Review the current file handling architecture
2. Identify integration points with the new dual-write system
3. Propose minimal changes to support both systems
4. Update only the relevant architecture sections"
```

### Pattern 4: Scope-Limited Instructions

**When to Use**: You want to restrict the agent's focus to specific areas.

**Format**:

```
@agent-name
"[Main task] but focus only on [specific area]. Don't change [areas to avoid]."
```

**Example**:

```
@pm
"Update the PRD section on file handling, but focus only on security requirements. Don't modify the user interface specifications."
```

## Agent Selection Decision Guide

### Quick Decision Tree

1. **Need to modify requirements or features?** → **PM**
2. **Need to create/update user stories?** → **SM**
3. **Need to write or modify code?** → **Dev**
4. **Need system design or architecture changes?** → **Architect**
5. **Need code review or quality validation?** → **QA**
6. **Need research or analysis?** → **Analyst**
7. **Need UI/UX design?** → **UX Expert**
8. **Need to coordinate multiple agents?** → **BMad-Orchestrator**
9. **Unsure or need flexible work?** → **BMad-Master**

### Common Scenarios

| Scenario                           | Recommended Agent | Why                                     |
| ---------------------------------- | ----------------- | --------------------------------------- |
| Update existing user story         | **SM**            | Stories are SM's primary responsibility |
| Add new API endpoint               | **Dev**           | Code implementation task                |
| Change business requirements       | **PM**            | Requirements ownership                  |
| Review code quality                | **QA**            | Quality assurance expertise             |
| Design new UI component            | **UX Expert**     | User interface specialization           |
| Plan system integration            | **Architect**     | System design expertise                 |
| Analyze existing codebase          | **Analyst**       | Research and analysis focus             |
| Validate story acceptance criteria | **PO**            | Backlog and validation role             |

## Instruction Format Examples

### Effective Instructions ✅

**Clear and Specific**:

```
@sm
"Update story 1.2 to add input validation for file uploads:
- Maximum file size: 10MB
- Allowed types: PDF, JPG, PNG, DOCX
- Add error handling for invalid files"
```

**Contextual with Constraints**:

```
@dev
"Implement the file validation from story 1.2, but integrate with the existing FileRepository interface. Don't create new validation classes - extend the current validation service at services/validation.ts"
```

**Multi-step with Clear Outcomes**:

```
@qa
"Review the file upload implementation:
1. Check error handling coverage
2. Validate security measures
3. Test performance with large files
4. Document any issues in the story QA section"
```

### Ineffective Instructions ❌

**Too Vague**:

```
@dev
"Fix the file thing"
```

**Wrong Agent**:

```
@sm
"Write the file validation code"  // SM doesn't write code
```

**Missing Context**:

```
@dev
"Add validation"  // What kind? Where? What rules?
```

## Advanced Techniques

### 1. Override Default Behavior

Agents will follow your instructions even if they conflict with their default tasks:

```
@sm
*create  // Normally creates new story
"Instead of creating new, analyze all existing stories and identify gaps in our file handling coverage. Create a summary report."
```

### 2. Cross-Domain Instructions

Use meta-agents for tasks spanning multiple domains:

```
@bmad-master
"Analyze the consistency between our PRD file handling requirements and the current architecture implementation. Identify any misalignments."
```

### 3. Conditional Instructions

Provide decision logic for the agent:

```
@dev
"Implement story 1.1. If the existing FileRepository is sufficient, use it. If not, extend it with new methods. Don't create a completely new interface unless absolutely necessary."
```

### 4. Reference External Context

Direct agents to specific files or sections:

```
@architect
"Update the architecture document based on the dual-write implementation in paperhive/apps/honey-vault/src/files/internal/. Focus on how this integrates with the legacy falcon-api system."
```

## Best Practices

### 1. Be Specific

- ✅ "Update story 1.1 to add OAuth login flow"
- ❌ "Make the login better"

### 2. Provide Context

- ✅ "Use the existing UserService at services/user.ts"
- ❌ "Add user functionality"

### 3. State Constraints

- ✅ "Don't modify the database schema"
- ❌ Assume agent knows limitations

### 4. Define Success

- ✅ "Mark complete when all tests pass and story is updated"
- ❌ Leave completion criteria unclear

### 5. Choose the Right Agent

- ✅ Use SM for story work, Dev for code work
- ❌ Ask Dev to create stories or PM to write code

### 6. Use Agent Strengths

- Each agent has specialized knowledge and perspective
- Leverage their expertise within their domain
- Don't fight against agent specialization

## Critical Rules

1. **ALWAYS use SM for story creation/modification** - Never use other agents for this
2. **ALWAYS use Dev for code implementation** - Don't ask other agents to write production code
3. **Start new chats when switching agents** - Clean context improves performance
4. **You are the final authority** - Agents follow your instructions over their defaults
5. **Be explicit about file locations** - Help agents find the right context quickly

## Remember

You are the "Vibe CEO" in BMad-Method. The agents are your specialized team members. Give clear direction, provide necessary context, and leverage each agent's expertise. They're designed to be flexible and responsive to your needs while maintaining their specialized knowledge and capabilities.
