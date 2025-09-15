<!-- Powered by BMAD™ Core -->

# verify-task

Verify completed tasks marked as `[v]` and either promote them to `[x]` (done) or demote them back to `[-]` with detailed failure notes for fixing.

## Purpose

- Provide quality gate for completed implementations
- Validate tasks against acceptance criteria and project standards
- Support surgical fixes by identifying specific failing subtasks
- Maintain clear audit trail of verification results

## Task States

- `[v]` - Completed but not verified (INPUT)
- `[x]` - Done (completed and verified) (SUCCESS OUTPUT)
- `[-]` - In progress/needs fixing (FAILURE OUTPUT)

## Inputs

```yaml
required_one_of:
  - story_id: '{epic}.{story}' # e.g., "2.1"
  - story_file: 'path/to/story.md' # direct path to story file

optional:
  - task_number: 'number' # specific task to verify (if not provided, verify all [v] tasks)
  - auto_verify: 'boolean' # automatically verify all without prompting (default: false)

from_config:
  - devStoryLocation: from `.bmad-core/core-config.yaml` key `devStoryLocation`
```

## Prerequisites

- Repository builds and tests run locally
- Lint and test commands available (follow project standards)
- Story file exists with Tasks/Subtasks section
- At least one task marked `[v]` (ready for verification)

## Process (Do not skip steps)

### 0. Load Core Configuration & Story

- Read `.bmad-core/core-config.yaml` and extract `devStoryLocation`
- Resolve story file:
  - If `story_id` provided: `{devStoryLocation}/{story_id}.*.md`
  - If `story_file` provided: use direct path
  - If neither provided: HALT and ask for story identifier
- Load story file and verify Tasks/Subtasks section exists
- HALT if story file not found or missing Tasks section

### 1. Identify Tasks to Verify

**If task_number provided:**

- Find the specified task by number
- Verify it's marked `[v]` (ready for verification)
- HALT if task doesn't exist or isn't in `[v]` state
- Set verification scope to single task

**If no task_number (verify all):**

- Scan all tasks for `[v]` status
- If no `[v]` tasks found: Report "No tasks ready for verification"
- List all `[v]` tasks found
- If `auto_verify` is false: Ask user to confirm verification of all tasks

### 2. Verification Process (Per Task)

**For each task to verify:**

#### 2.1. Load Implementation Context

- Read task description and all subtasks
- Check which subtasks are marked `[x]` (claimed complete)
- Review relevant acceptance criteria from story
- Check Dev Agent Record → File List for modified files

#### 2.2. Code Quality Verification

- **Lint Check**: Run project lint commands on modified files
  - If lint fails: Note specific lint errors
- **Test Execution**: Run project test commands
  - If tests fail: Note specific test failures
  - Focus on tests related to this task's functionality
- **Standards Compliance**: Verify code follows project conventions
  - Check imports, patterns, naming conventions
  - Verify integration with existing codebase

#### 2.3. Functional Verification

- **Acceptance Criteria**: Check if task addresses relevant AC items
- **Subtask Completeness**: Verify all subtasks are actually implemented
  - For each `[x]` subtask: confirm implementation exists
  - Identify any subtasks marked complete but not implemented
- **Integration**: Verify task works with rest of system
- **Edge Cases**: Check error handling and edge cases

#### 2.4. File Verification

- **File List Accuracy**: Verify Dev Agent Record → File List is complete
  - Check all modified files are listed
  - Verify no missing files or incorrectly listed files
- **File Content**: Spot-check key files for quality

### 3. Verification Decision (Per Task)

#### 3.1. PASS Criteria (Mark as `[x]`)

All of the following must be true:

- Lint passes with no errors
- All relevant tests pass
- All subtasks are genuinely implemented
- Addresses relevant acceptance criteria
- Code follows project standards
- File List is accurate and complete
- No critical issues found

**Actions for PASS:**

- Update task checkbox from `[v]` to `[x]`
- Clear any existing Verification Notes for this task
- Add success entry to Dev Agent Record → Completion Notes

#### 3.2. FAIL Criteria (Mark as `[-]`)

Any of the following:

- Lint failures
- Test failures
- Missing or incomplete subtask implementations
- Doesn't address acceptance criteria
- Code quality issues
- Inaccurate File List
- Critical functional issues

**Actions for FAIL:**

- Update task checkbox from `[v]` to `[-]`
- Mark specific failing subtasks back to `[ ]` (surgical approach)
- Keep working subtasks as `[x]` (don't lose good work)
- Add detailed failure notes to Dev Agent Record → Verification Notes

### 4. Update Dev Agent Record

#### 4.1. For Each Verified Task

**Verification Notes Section (create if doesn't exist):**

```markdown
#### Verification Notes

##### Task [N]: [Task Description]

**Verification Date**: [Current Date]
**Status**: [PASS/FAIL]

[If PASS]
✅ All checks passed successfully

- Lint: PASS
- Tests: PASS
- Implementation: Complete
- AC Coverage: Verified

[If FAIL]
❌ Verification failed - requires fixes:
**Critical Issues:**

- [List critical issues that must be fixed]

**Code Issues:**

- [Lint errors, test failures, etc.]

**Implementation Gaps:**

- Subtask [N.M]: [Description of missing implementation]
- [Other gaps]

**Files Needing Attention:**

- [List specific files that need fixes]

**Next Steps:**

1. [Specific action needed]
2. [Another specific action]
```

**Update Other Sections:**

- **Completion Notes**: Add verification results
- **File List**: Verify accuracy, update if needed

### 5. Update Story Status

**Auto-update based on verification results:**

- If verification created any `[-]` tasks: Set Status to "InProgress"
- If all tasks are now `[x]`: Set Status to "Done"
- If mix of `[x]` and `[v]`: Keep Status as "Review"

### 6. Add Change Log Entry

```
| [Current Date] | [Version] | Verified Task(s): [List] - [PASS/FAIL summary] | qa-agent |
```

### 7. Generate Verification Report

**Provide comprehensive verification report:**

```
🔍 VERIFICATION COMPLETE

STORY: [Story Title]
TASKS VERIFIED: [N]

✅ PASSED VERIFICATION:
- Task [N]: [Description]
- Task [M]: [Description]

❌ FAILED VERIFICATION:
- Task [X]: [Description]
  Issues: [Brief summary]
  Action: Marked back to [-] for fixes

📊 STORY PROGRESS:
- Tasks Done [x]: [N]
- Tasks Ready for Verification [v]: [N]
- Tasks Needing Work [-]: [N]
- Tasks Not Started [ ]: [N]

NEXT STEPS:
[If failures]: Run `*develop-next-story-task` to fix failed tasks
[If all pass]: Story verification complete! Review overall story status.
```

## Blocking Conditions

- Missing `.bmad-core/core-config.yaml`
- Story file not found
- No Tasks/Subtasks section in story
- No tasks in `[v]` state when none specified
- Cannot run lint or test commands
- Critical system errors preventing verification

## Error Handling

**No Tasks Ready:**

```
ℹ️  NO TASKS TO VERIFY
Current task states:
- Done [x]: [N] tasks
- In Progress [-]: [N] tasks
- Not Started [ ]: [N] tasks
- Ready for Verification [v]: 0 tasks

Run `*develop-next-story-task` to complete more tasks first.
```

**Partial Verification:**

```
⚠️  PARTIAL VERIFICATION FAILURE
Task 3 failed verification but some subtasks are working:

✅ Keep as complete:
- Subtask 3.1: User interface created
- Subtask 3.2: Basic validation added

❌ Mark for rework:
- Subtask 3.3: API integration incomplete
- Subtask 3.4: Error handling missing

Task 3 marked as [-] with detailed notes for fixing.
```

## Integration with Development Task

This task consumes `[v]` tasks produced by `develop-next-story-task.md`:

- develop-next-story-task: `[ ]` → `[-]` → `[v]`
- **verify-task: `[v]` → `[x]` (pass) or `[-]` (fail with notes)**

Failed tasks can be resumed by develop-next-story-task which will read the Verification Notes.

## Key Principles

- **Quality Gate**: Don't let incomplete work be marked as done
- **Surgical Precision**: Only reset what actually failed
- **Clear Communication**: Detailed failure notes help developers
- **Preserve Work**: Don't lose good subtasks when parent task fails
- **Comprehensive Checking**: Verify code, tests, standards, and functionality
- **Audit Trail**: Complete record of what was verified and results
