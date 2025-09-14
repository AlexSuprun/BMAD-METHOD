# BMad Orchestrator Guide

## Overview

The BMad Orchestrator is the master coordinator agent that helps you navigate BMad-Method, switch between specialized agents, and coordinate multi-agent tasks. Think of it as your AI project manager that knows all the other agents and can transform into any of them on demand.

**Key Purpose**: Unified interface to all BMad capabilities without pre-loading resources.

## Actually Available Commands

All commands require the `*` prefix (e.g., `*help`, `*agent pm`)

| Command             | Description                        | Example                             |
| ------------------- | ---------------------------------- | ----------------------------------- |
| `*help`             | Show available commands and agents | `*help`                             |
| `*agent [name]`     | Transform into specialized agent   | `*agent sm` or `*agent` (lists all) |
| `*chat-mode`        | Start conversational assistance    | `*chat-mode`                        |
| `*kb-mode`          | Load BMad knowledge base           | `*kb-mode`                          |
| `*status`           | Show current context and progress  | `*status`                           |
| `*task [name]`      | Run specific task (requires agent) | `*task create-doc`                  |
| `*checklist [name]` | Execute checklist (requires agent) | `*checklist story-draft-checklist`  |
| `*party-mode`       | Group chat with all agents         | `*party-mode`                       |
| `*doc-out`          | Output full document               | `*doc-out`                          |
| `*yolo`             | Toggle skip confirmations          | `*yolo`                             |
| `*exit`             | Exit orchestrator mode             | `*exit`                             |

## Core Capabilities

### 1. Agent Transformation

Transform into any specialist without loading new chat:

```text
@bmad-orchestrator
*agent sm  // Becomes Scrum Master
*agent dev  // Becomes Developer
*agent  // Lists all available agents
```

### 2. Resource Discovery

Loads resources only when needed:

```text
*task  // Lists available tasks
*checklist  // Lists available checklists
```

### 3. Knowledge Base Access

```text
*kb-mode  // Loads full BMad knowledge base for detailed guidance
```

### 4. Conversational Guidance

```text
*chat-mode
"Help me choose the right approach for adding features to an existing API"
```

## How to Use

### Starting the Orchestrator

```text
@bmad-orchestrator  // In IDE
or
/bmad-orchestrator  // Depending on IDE syntax
```

### Common Usage Patterns

#### Pattern 1: Quick Agent Switching

```text
@bmad-orchestrator
*agent pm  // Transform to Product Manager
*create-doc prd  // Use PM's task
*agent sm  // Switch to Scrum Master
*create  // Create story
```

#### Pattern 2: Getting Guidance

```text
@bmad-orchestrator
*chat-mode
"I have an existing Node.js API and need to add dual-write functionality.
What's the best approach?"
// Orchestrator provides personalized guidance
```

#### Pattern 3: Exploring Capabilities

```text
@bmad-orchestrator
*agent  // See all available agents
*agent dev  // Transform to developer
*task  // See developer's available tasks
```

#### Pattern 4: Knowledge Base Consultation

```text
@bmad-orchestrator
*kb-mode
"Tell me about brownfield workflows"
// Get detailed information from BMad knowledge base
```

## Multi-Agent Coordination

While the orchestrator doesn't have built-in workflow commands, you can coordinate multiple agents:

### Sequential Coordination

```text
@bmad-orchestrator
*agent pm
"Update the PRD with new file validation requirements"

*agent architect
"Update architecture to reflect PRD changes"

*agent sm
"Create story based on updated PRD and architecture"
```

### Using Chat Mode for Complex Tasks

```text
@bmad-orchestrator
*chat-mode
"I need to update documentation across PRD, Architecture, and Stories
for a new file validation feature. Guide me through this."
// Orchestrator provides step-by-step guidance
```

## Common Scenarios

### Scenario 1: Starting a New Feature

```text
@bmad-orchestrator
*chat-mode
"I need to add a new feature to my existing system"
// Orchestrator guides you through the brownfield process
```

### Scenario 2: Unsure Which Agent to Use

```text
@bmad-orchestrator
*agent  // List all agents with descriptions
// Choose based on the "When to Use" descriptions
```

### Scenario 3: Need Comprehensive Information

```text
@bmad-orchestrator
*kb-mode
// Access full BMad documentation and best practices
```

### Scenario 4: Quick Task Execution

```text
@bmad-orchestrator
*agent bmad-master  // Universal agent for any task
"Shard my PRD document"
```

## Important Notes

### Documented vs Implemented Features

The orchestrator's help display shows some commands that **aren't actually implemented**:

**Shown in Help but NOT Working**:

- `*workflow [name]` - Start specific workflow
- `*workflow-guidance` - Get workflow recommendations
- `*plan` - Create workflow plan
- `*plan-status` - Show workflow progress
- `*plan-update` - Update workflow state

**Why?** These appear to be planned features documented in the help template but not yet implemented in the commands section.

**Workaround**: Use `*chat-mode` to get workflow guidance conversationally.

### Best Practices

1. **Use orchestrator when unsure** - It can guide you to the right agent
2. **Don't pre-load resources** - Let orchestrator load only what's needed
3. **New chats for complex switches** - Start fresh when doing major context switches
4. **Leverage chat-mode** - For complex multi-step guidance
5. **Check kb-mode** - For detailed BMad methodology information

### When to Use Orchestrator vs Other Agents

| Use Orchestrator When              | Use Specific Agent When          |
| ---------------------------------- | -------------------------------- |
| Unsure which agent to use          | You know exactly what task to do |
| Need to coordinate multiple agents | Working within single domain     |
| Want workflow guidance             | Executing specific task          |
| Exploring BMad capabilities        | Deep work in one area            |
| Need general BMad help             | Need specialized expertise       |

## Quick Reference

**Transform to Agent**: `*agent [name]`
**Get Help**: `*help` or `*kb-mode`
**Interactive Guidance**: `*chat-mode`
**Check Status**: `*status`
**Exit**: `*exit`

Remember: The orchestrator is your starting point when you're unsure. It's designed to guide you to the right tool or agent for your needs, not to do all the work itself.
