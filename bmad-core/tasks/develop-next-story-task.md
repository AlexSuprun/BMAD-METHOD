<!-- Powered by BMAD™ Core -->

# develop-next-story-task

Develop the next uncompleted task in a user story, handling one task at a time for better LLM performance and more granular progress tracking.

## Purpose

- Develop one task at a time to reduce cognitive load and context size
- Support resuming interrupted work or starting fresh tasks
- Provide clear progress tracking with multiple task states
- Enable better error recovery and debugging

## Task States

- `[ ]` - Not started
- `[-]` - In progress (or needs fixing after failed verification)
- `[v]` - Completed but not verified
- `[x]` - Done (completed and verified)

## Inputs

```yaml
required_one_of:
  - story_id: '{epic}.{story}' # e.g., "2.1"
  - story_file: 'path/to/story.md' # direct path to story file

optional:
  - task_number: 'number' # specific task to work on (overrides priority logic)

from_config:
  - devStoryLocation: from `.bmad-core/core-config.yaml` key `devStoryLocation`
```

## Prerequisites

- Repository builds and tests run locally
- Lint and test commands available (follow project standards)
- Story file exists and has Tasks/Subtasks section

## Process (Do not skip steps)

### 0. Load Core Configuration & Story

- Read `.bmad-core/core-config.yaml` and extract `devStoryLocation`
- Resolve story file:
  - If `story_id` provided: `{devStoryLocation}/{story_id}.*.md`
  - If `story_file` provided: use direct path
  - If neither provided: HALT and ask for story identifier
- Load story file and verify Tasks/Subtasks section exists
- HALT if story file not found or missing Tasks section

### 1. Identify Target Task (Priority Logic)

**If task_number provided:**

- Find the specified task by number
- HALT if task number doesn't exist or is already `[x]`

**If no task_number (automatic selection):**

- **Priority 1**: Find first task marked `[-]` (resume interrupted/failed work)
  - If multiple `[-]` tasks found: warn user and list them
  - Ask user which to resume or default to first one
- **Priority 2**: Find first task marked `[ ]` (start new work)
- **None found**: Report "All tasks completed, in progress, or pending verification"

### 2. Check for Resume Context

**If resuming `[-]` task:**

- Check Dev Agent Record → Verification Notes subsection
- If verification failure notes exist:
  - Display notes to understand what needs fixing
  - List specific subtasks that need rework
- Keep task status as `[-]` (already in progress)

**If starting new `[ ]` task:**

- Update task checkbox from `[ ]` to `[-]`
- Add timestamp entry in Dev Agent Record

### 3. Focus on Single Task Implementation

**Task Scope:**

- Work ONLY on the target task and its subtasks
- Do not modify other tasks or their subtasks
- Read relevant Dev Notes sections for context

**Implementation Process:**

- Extract all subtasks under the target task
- For each subtask:
  - If marked `[x]`: skip (already complete)
  - If marked `[ ]` or `[-]`: implement
  - Mark subtask `[x]` when complete
- Follow all project standards and conventions
- Use existing libraries and patterns from codebase

### 4. Testing & Validation

**Run Tests:**

- Execute project-specific test commands (e.g., `deno test -A`, `npm test`)
- Execute lint commands (e.g., `deno lint`, `npm run lint`)
- Fix any test failures or lint issues before proceeding

**Quality Checks:**

- Ensure code follows project conventions
- Verify all subtasks are implemented
- Check that acceptance criteria are addressed

### 5. Mark Task Complete

**Update Task Status:**

- Change task checkbox from `[-]` to `[v]` (completed but not verified)
- Ensure all subtasks under this task are marked `[x]`

**Update Dev Agent Record:**

- **Agent Model Used**: Record model/version if changed
- **Debug Log References**: Note any important commands/outputs
- **Completion Notes List**: Add entry describing what was implemented
- **File List**: Add/update all files created, modified, or deleted
- Clear any previous Verification Notes for this task (fresh start)

### 6. Update Story Status

**Auto-update based on overall task states:**

- If any task is `[-]`: Set Status to "InProgress"
- If all tasks are `[v]` or mix of `[v]`/`[x]`: Set Status to "Review"
- If all tasks are `[x]`: Set Status to "Done"
- Otherwise: Leave Status unchanged

### 7. Add Change Log Entry

Add new entry to Change Log table:

```
| [Current Date] | [Version] | Completed Task N: [Task Description] | dev-agent |
```

### 8. Report Completion

Provide clear completion report:

```
✅ TASK COMPLETED
Task: [N] [Task Description]
Status: [v] (Ready for Verification)
Subtasks: [X/Y] Complete
Files Modified: [List of files]

NEXT STEPS:
- Run `*verify-task [story-id]` to verify this task
- Or run `*develop-next-story-task [story-id]` to continue with next task

STORY PROGRESS:
- Tasks Complete: [N]
- Tasks Ready for Verification: [N]
- Tasks Remaining: [N]
```

## Blocking Conditions

- Missing `.bmad-core/core-config.yaml`
- Story file not found
- No Tasks/Subtasks section in story
- All tasks are already `[x]` (story complete)
- Test failures that cannot be resolved after 3 attempts
- Lint failures that cannot be resolved

## Error Handling

**Multiple In-Progress Tasks:**

```
⚠️  MULTIPLE TASKS IN PROGRESS
Found tasks marked [-]: Task 2, Task 5, Task 7
Which task should I resume?
1. Task 2: [Description]
2. Task 5: [Description]
3. Task 7: [Description]
4. Let me choose the first one (Task 2)

Please enter 1-4 or provide --task=N parameter
```

**Resume with Verification Notes:**

```
📝 RESUMING FAILED TASK
Task 3: [Description]
Previous verification failed with these issues:
- Issue 1: [Description]
- Issue 2: [Description]

Subtasks needing rework: 3.2, 3.4
Proceeding to fix identified issues...
```

## Integration with Verify Task

This task produces `[v]` tasks that are consumed by `verify-task.md`:

- develop-next-story-task: `[ ]` → `[-]` → `[v]`
- verify-task: `[v]` → `[x]` (pass) or `[-]` (fail with notes)

## Key Principles

- **Single Task Focus**: Never work on multiple tasks simultaneously
- **Resumption Support**: Handle interrupted work gracefully
- **Clear Progress**: Always know exactly what state each task is in
- **Quality First**: Don't compromise on testing or standards
- **Incremental Development**: Complete one task fully before moving on
- **Failure Recovery**: Support fixing failed verifications with context
