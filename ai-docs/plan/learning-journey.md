# BMAD Extension & Claude Code Integration - Learning & Development Journey

## 🎯 Goals

1. Master BMAD fundamentals (agents, tasks, workflows, templates, commands)
2. Learn to customize and extend BMAD workflows
3. Design and implement optional Claude Code sub-agent integration
4. Maintain backward compatibility with existing BMAD functionality

---

## 📚 PHASE 1: BMAD Fundamentals Deep Dive (2-3 sessions)

### Session 1.1: Agent Architecture Anatomy

**Goal**: Understand how agents work and how to customize them

**Hands-on Exercises**:

1. **Agent Structure Analysis**
   - Dissect `dev.md`, `sm.md`, `analyst.md` line-by-line
   - Understand: activation-instructions, persona, commands, dependencies
   - Map how `@dev` activation flows from file read → persona adoption → command execution

2. **Create Custom Agent**
   - Build a simple "code-reviewer" agent from scratch
   - Define persona, 2-3 commands, link to existing tasks
   - Test activation in this BMAD fork

**Deliverables**:

- Documentation of agent anatomy with annotations
- Working custom agent file in `bmad-core/agents/`

**Checkpoint**: Can you explain how an agent "activates" and executes commands?

---

### Session 1.2: Task System Mastery

**Goal**: Understand executable task workflows and elicitation

**Hands-on Exercises**:

1. **Task Flow Tracing**
   - Trace `create-next-story.md` execution step-by-step
   - Identify: elicitation points, blocking conditions, file operations
   - Map task dependencies (what files it reads/writes)

2. **Create Custom Task**
   - Build "analyze-technical-debt.md" task
   - Include elicitation, sequential steps, blocking conditions
   - Link to an agent (analyst or dev)

**Deliverables**:

- Task flow diagrams for 3 core tasks
- Working custom task in `bmad-core/tasks/`

**Checkpoint**: Can you write a task that properly elicits user input and handles errors?

---

### Session 1.3: Templates & Configuration

**Goal**: Master document templates and project configuration

**Hands-on Exercises**:

1. **Template Structure Analysis**
   - Dissect `story-tmpl.yaml` structure
   - Understand: sections, owners, editors, elicitation
   - Map how templates generate markdown output

2. **Configuration Mapping**
   - Map all `core-config.yaml` settings to their usage in tasks
   - Understand sharding vs monolithic document strategies
   - Trace how config affects agent behavior

**Deliverables**:

- Custom template for "technical-design-doc"
- Configuration cheat sheet with usage examples

**Checkpoint**: Can you create a template that an agent can use to generate documents?

---

## 🔧 PHASE 2: Workflow Engineering (2-3 sessions)

### Session 2.1: Workflow Architecture

**Goal**: Understand multi-agent workflows and orchestration

**Hands-on Exercises**:

1. **Workflow Analysis**
   - Dissect `greenfield-fullstack.yaml` agent sequence
   - Map dependencies, handoffs, conditional steps
   - Identify parallel vs serial execution opportunities

2. **Create Custom Workflow**
   - Build "code-modernization.yaml" brownfield workflow
   - Define agent sequence for refactoring legacy code
   - Include conditional steps and validation gates

**Deliverables**:

- Mermaid diagram of your custom workflow
- Working workflow file in `bmad-core/workflows/`

**Checkpoint**: Can you design a workflow that coordinates 4+ agents with conditional logic?

---

### Session 2.2: Brownfield vs Greenfield Patterns

**Goal**: Master both workflow types and when to use each

**Hands-on Exercises**:

1. **Pattern Comparison**
   - Compare greenfield vs brownfield workflows side-by-side
   - Identify key differences in agent roles and task sequences
   - Map how sharding differs between workflow types

2. **Extend Brownfield Workflow**
   - Add migration planning phase to brownfield workflow
   - Include dependency analysis and risk assessment
   - Test on this BMAD fork project

**Deliverables**:

- Comparison matrix of workflow patterns
- Extended brownfield workflow with new phases

**Checkpoint**: Can you choose the right workflow type and customize it for a specific project?

---

## 🚀 PHASE 3: Claude Code Sub-Agent Integration Design (3-4 sessions)

### Session 3.1: Claude Code Sub-Agent Deep Dive

**Goal**: Master Claude Code's Task tool and sub-agent capabilities

**Hands-on Exercises**:

1. **Sub-Agent Exploration**
   - Study Claude Code sub-agent types (general-purpose, code-review, git-\*, etc.)
   - Test Task tool with different agent types
   - Understand parallel execution with multiple Task calls

2. **BMAD vs Claude Code Mapping**
   - Map BMAD agents to potential Claude Code sub-agent types
   - Identify which agents benefit most from real sub-agents
   - Design hybrid execution strategy

**Deliverables**:

- Sub-agent capability matrix
- BMAD-to-Claude-Code agent mapping document

**Checkpoint**: Can you spawn 3 sub-agents in parallel and aggregate their results?

---

### Session 3.2: Integration Architecture Design

**Goal**: Design backward-compatible sub-agent integration

**Hands-on Exercises**:

1. **Feature Flag System**
   - Design config flag: `claudeCodeSubAgents: true/false`
   - Plan agent detection logic (is running in Claude Code?)
   - Design fallback to traditional mode

2. **Agent Wrapper Pattern**
   - Design wrapper that routes to sub-agent OR traditional mode
   - Plan context passing between parent and sub-agent
   - Handle error propagation and results aggregation

**Deliverables**:

- Integration architecture document with diagrams
- Pseudo-code for agent wrapper system

**Checkpoint**: Can you explain the execution path for both modes (traditional vs sub-agent)?

---

### Session 3.3: Prototype Implementation - Read-Only Agent

**Goal**: Build first working sub-agent integration (safe, read-only)

**Hands-on Exercises**:

1. **Create "Analyst-SubAgent" Wrapper**
   - Modify analyst agent to optionally use Claude Code Task tool
   - Implement config-driven behavior switch
   - Test market research with real web search via sub-agent

2. **Validate Backward Compatibility**
   - Test analyst agent in traditional mode (without sub-agents)
   - Test analyst agent in sub-agent mode (with config flag)
   - Ensure both produce same quality output

**Deliverables**:

- Working sub-agent wrapper for analyst
- Test results comparing both modes

**Checkpoint**: Does the analyst agent work in both modes without breaking changes?

---

### Session 3.4: Prototype Implementation - Write-Capable Agent

**Goal**: Extend sub-agent integration to agents that modify files

**Hands-on Exercises**:

1. **Create "Dev-SubAgent" Wrapper**
   - Modify dev agent to optionally use Claude Code Task tool
   - Handle file operations through sub-agent
   - Implement result validation and error handling

2. **Test Story Implementation**
   - Create test story in this BMAD fork
   - Run dev agent in sub-agent mode
   - Validate story completion and file updates

**Deliverables**:

- Working sub-agent wrapper for dev
- Completed test story using sub-agent mode

**Checkpoint**: Can dev agent implement stories using real sub-agents?

---

## 🌟 PHASE 4: Advanced Features & Optimization (2-3 sessions)

### Session 4.1: Parallel Agent Execution

**Goal**: Enable parallel sub-agent execution for performance

**Hands-on Exercises**:

1. **Identify Parallelization Opportunities**
   - Find workflow steps that can run in parallel
   - Design coordination strategy for parallel agents
   - Implement parallel execution in workflow engine

2. **Build Parallel Story Implementation**
   - Split story tasks across multiple dev sub-agents
   - Coordinate file changes without conflicts
   - Aggregate results and update story file

**Deliverables**:

- Parallel execution capability in workflows
- Performance comparison (serial vs parallel)

**Checkpoint**: Can you run 3 dev agents in parallel without conflicts?

---

### Session 4.2: Context Optimization & Sub-Agent Prompts

**Goal**: Minimize context size and optimize sub-agent prompts

**Hands-on Exercises**:

1. **Analyze Context Overhead**
   - Measure context size for traditional vs sub-agent modes
   - Identify context reduction opportunities
   - Design minimal prompts for sub-agents

2. **Build Optimized Sub-Agent Prompts**
   - Create condensed agent prompts for Task tool
   - Strip unnecessary context, keep essential instructions
   - Test quality vs traditional full-context agents

**Deliverables**:

- Context size comparison analysis
- Optimized sub-agent prompt templates

**Checkpoint**: Have you reduced context size by 50%+ while maintaining quality?

---

### Session 4.3: Documentation & Developer Experience

**Goal**: Make your fork easy to use and extend

**Hands-on Exercises**:

1. **Create Extension Guide**
   - Document how to create custom agents/tasks/workflows
   - Provide examples and templates
   - Include troubleshooting guide

2. **Build Testing Framework**
   - Create validation tests for agents/tasks
   - Add integration tests for workflows
   - Document testing approach

**Deliverables**:

- Comprehensive extension guide in docs/
- Working test suite for core components

**Checkpoint**: Can a new developer extend your fork following your docs?

---

## 🎓 Learning Resources Throughout Journey

**For Each Session**:

1. Start with relevant BMAD code reading (30 min)
2. Hands-on experimentation (60-90 min)
3. Documentation/reflection (15-30 min)
4. Checkpoint validation before next session

**Key Files to Bookmark**:

- `bmad-core/agents/` - Agent definitions
- `bmad-core/tasks/` - Executable workflows
- `bmad-core/templates/` - Document templates
- `bmad-core/workflows/` - Multi-agent orchestration
- `tools/cli.js` - Build system entry point
- `tools/builders/` - Web bundle generation

**Success Metrics**:

- ✅ Can create custom agents, tasks, workflows from scratch
- ✅ Can extend existing workflows with new capabilities
- ✅ Have working sub-agent integration (opt-in, backward compatible)
- ✅ Fork is 50%+ faster with parallel sub-agents for complex workflows
- ✅ Documentation enables others to use and extend your fork

---

## 🚦 Getting Started

**Current Status**: Ready to begin Phase 1

**Next Session**: Session 1.1 - Agent Architecture Anatomy

**Preparation**:

1. Review `bmad-core/agents/dev.md`, `sm.md`, `analyst.md`
2. Have code editor ready for annotations
3. Clear 2 hours for deep dive session

**Progress Tracking**: See `ai-docs/plan/progress.md` for session completion status
