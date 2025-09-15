# BMAD Brownfield Planning - Comprehensive Workflow Guide

This guide focuses exclusively on the **brownfield planning phase** that occurs before entering the main BMAD development cycle. Use this for existing codebase enhancements, legacy system modernization, and feature additions to established applications.

**🔄 After Planning:** Transition to main development flow at Stage 7 (Document Sharding) in `development-flow-guide.md`

## Brownfield Planning Overview

```mermaid
flowchart TD
    A["🚀 Brownfield Enhancement Project"] --> B{"📋 Project Scope?"}

    subgraph "Approach Selection"
        B -->|"Large/Complex Enhancement"| C["📊 PRD-First Approach<br/>Define requirements → Document focused areas"]
        B -->|"Small/Unknown System"| D["📚 Document-First Approach<br/>Document everything → Define requirements"]
        B -->|"Single Feature Addition"| E["⚡ Quick Epic Approach<br/>Focused planning"]
        B -->|"Bug Fix/Small Change"| F["🔧 Story-Only Approach<br/>Minimal planning"]
    end

    subgraph "PRD-First Flow"
        C --> G["@pm *create-brownfield-prd"]
        G --> H["📋 Requirements Defined"]
        H --> I["@architect *document-project<br/>(Focused areas only)"]
        I --> J["📚 Targeted Documentation"]
    end

    subgraph "Document-First Flow"
        D --> K["@architect *document-project<br/>(Complete system)"]
        K --> L["📚 Full Documentation"]
        L --> M["@pm *create-brownfield-prd"]
        M --> N["📋 Requirements with Context"]
    end

    subgraph "Quick Approaches"
        E --> O["@pm *create-brownfield-epic"]
        F --> P["@pm *create-brownfield-story"]
        O --> Q["📝 Epic Defined"]
        P --> R["📝 Story Defined"]
    end

    subgraph "Risk Assessment (MANDATORY)"
        J --> S["🧪 QA Risk Assessment"]
        N --> S
        Q --> S
        R --> S
        S --> T["@qa *risk {requirements}"]
        T --> U["@qa *design {requirements}"]
        U --> V["⚠️ Risk Strategy Created"]
    end

    subgraph "Architecture Planning"
        V --> W["@architect *create-brownfield-architecture"]
        W --> X["🏗️ Integration Architecture"]
    end

    subgraph "Validation & Transition"
        X --> Y["@po *execute-checklist-po"]
        Y --> Z{"📋 Planning Complete?"}
        Z -->|Yes| AA["✅ Ready for Development"]
        Z -->|No| BB["📝 Update Documents"]
        BB --> Y
        AA --> CC["🔄 Enter Main BMAD Cycle<br/>at Stage 7: Document Sharding"]
    end

    style A fill:#fff3e0
    style AA fill:#c8e6c9
    style CC fill:#e1f5fe
    style S fill:#ffcdd2
    style V fill:#ffd54f
```

## Part 1: Approach Selection

### Decision Framework

Choose your brownfield planning approach based on project characteristics:

```mermaid
flowchart TD
    A["🤔 Brownfield Planning Decision"] --> B{"📊 Codebase Size?"}

    B -->|"Large (1000+ files)"| C{"🎯 Enhancement Scope?"}
    B -->|"Medium (100-1000 files)"| D{"💡 System Knowledge?"}
    B -->|"Small (<100 files)"| E["📚 Document-First Approach"]

    C -->|"Multiple Systems"| F["📊 PRD-First Approach<br/>Focus on affected areas"]
    C -->|"Single System"| G["📊 PRD-First or Quick Epic<br/>Based on complexity"]

    D -->|"Well Known"| H["⚡ Quick Epic or PRD-First"]
    D -->|"Unknown"| I["📚 Document-First Approach"]

    F --> J["Efficiency: High<br/>Coverage: Targeted<br/>Risk: Medium"]
    G --> K["Efficiency: High<br/>Coverage: Focused<br/>Risk: Low-Medium"]
    H --> L["Efficiency: Very High<br/>Coverage: Minimal<br/>Risk: Low"]
    E --> M["Efficiency: Low<br/>Coverage: Complete<br/>Risk: Very Low"]
    I --> N["Efficiency: Low<br/>Coverage: Complete<br/>Risk: Very Low"]

    style F fill:#e3f2fd
    style G fill:#f3e5f5
    style H fill:#c8e6c9
    style E fill:#fff3e0
    style I fill:#fff3e0
```

### Approach Selection Table

| **Approach**       | **When to Use**                               | **Time Investment** | **Coverage** | **Risk Level** |
| ------------------ | --------------------------------------------- | ------------------- | ------------ | -------------- |
| **PRD-First**      | Large codebases, complex multi-system changes | Medium              | Targeted     | Medium         |
| **Document-First** | Unknown systems, small-medium codebases       | High                | Complete     | Very Low       |
| **Quick Epic**     | Well-defined isolated enhancements            | Low                 | Focused      | Low            |
| **Story-Only**     | Bug fixes, tiny features, urgent changes      | Very Low            | Minimal      | Variable       |

## Part 2: Document-First Workflow

**Best for:** Unknown systems, comprehensive understanding needed, exploratory changes

### Document-First Process

```mermaid
flowchart TD
    A["🚀 Document-First Start"] --> B["@architect *document-project"]
    B --> C["📚 Complete System Documentation"]
    C --> D{"📋 Enhancement Clarity?"}
    D -->|Clear| E["@pm *create-brownfield-prd"]
    D -->|Unclear| F["📝 Define Enhancement Requirements"]
    F --> E
    E --> G["📋 Requirements with Full Context"]
    G --> H["🧪 Risk Assessment Phase"]
    H --> I["Ready for Architecture Planning"]

    style A fill:#fff3e0
    style C fill:#e1f5fe
    style G fill:#c8e6c9
    style I fill:#f3e5f5
```

### Document-First Commands

```bash
# Phase 1: Complete System Documentation
@architect *document-project

# Phase 2: Define Enhancement Requirements
@pm *create-brownfield-prd

# Phase 3: Risk Assessment (Continue to Part 4)
@qa *risk {enhancement-requirements}
@qa *design {enhancement-requirements}
```

**Outputs:**

- `docs/architecture.md` - Complete system documentation
- `docs/prd.md` - Enhancement requirements with full system context
- Risk assessment and test strategy documents

## Part 3: PRD-First Workflow

**Best for:** Large codebases, well-defined enhancements, time efficiency

### PRD-First Process

```mermaid
flowchart TD
    A["🚀 PRD-First Start"] --> B["@pm *create-brownfield-prd"]
    B --> C["📋 Enhancement Requirements Defined"]
    C --> D["@architect *document-project<br/>(Focused on PRD areas)"]
    D --> E["📚 Targeted Documentation"]
    E --> F["🔍 Integration Points Identified"]
    F --> G["🧪 Risk Assessment Phase"]
    G --> H["Ready for Architecture Planning"]

    style A fill:#fff3e0
    style C fill:#e3f2fd
    style E fill:#c8e6c9
    style H fill:#f3e5f5
```

### PRD-First Commands

```bash
# Phase 1: Define Enhancement Requirements
@pm *create-brownfield-prd

# Phase 2: Focused System Documentation
@architect *document-project
# PM will guide architect to focus on PRD-identified areas

# Phase 3: Risk Assessment (Continue to Part 4)
@qa *risk {prd-requirements}
@qa *design {prd-requirements}
```

**Outputs:**

- `docs/prd.md` - Clear enhancement requirements
- `docs/architecture.md` - Focused system documentation
- Risk assessment covering integration points

### Quick Approaches

#### Quick Epic Approach

```bash
@pm *create-brownfield-epic
# Use for: Well-defined, isolated enhancements
# Still requires: Risk assessment and focused documentation
```

#### Story-Only Approach

```bash
@pm *create-brownfield-story
# Use for: Bug fixes, urgent small changes
# Caution: Still run risk assessment for critical systems
```

## Part 4: Risk Assessment & QA Planning (MANDATORY)

### Why Risk Assessment is Critical for Brownfield

```mermaid
flowchart TD
    A["🚨 Brownfield Risk Factors"] --> B["Legacy Dependencies"]
    A --> C["Integration Complexity"]
    A --> D["Performance Impact"]
    A --> E["Breaking Changes"]

    B --> F["@qa *risk identifies:<br/>• Hidden dependencies<br/>• Outdated patterns<br/>• Technical debt"]
    C --> G["@qa *risk identifies:<br/>• Integration points<br/>• API consumers<br/>• Data flow impacts"]
    D --> H["@qa *risk identifies:<br/>• Bottleneck potential<br/>• Resource constraints<br/>• Scalability limits"]
    E --> I["@qa *risk identifies:<br/>• Contract violations<br/>• Backward compatibility<br/>• Migration complexity"]

    F --> J["🧪 Risk Mitigation Strategy"]
    G --> J
    H --> J
    I --> J

    J --> K["@qa *design creates:<br/>• Regression test plan<br/>• Integration test strategy<br/>• Performance benchmarks<br/>• Rollback procedures"]

    style A fill:#ffcdd2
    style J fill:#fff3e0
    style K fill:#c8e6c9
```

### Risk Assessment Commands

```bash
# MANDATORY: Risk identification and scoring
@qa *risk {brownfield-requirements}

# MANDATORY: Test strategy planning
@qa *design {brownfield-requirements}

# OPTIONAL: Early architecture review for high-risk items
@qa *early-test-architecture {high-risk-areas}
```

**Critical Risk Categories:**

- **Regression Risk** (9): High probability of breaking existing functionality
- **Integration Risk** (6-9): Complex inter-system dependencies
- **Performance Risk** (4-6): Potential for system degradation
- **Data Risk** (6-9): Complex migrations or data integrity concerns

## Part 5: Architecture Planning

### Brownfield Architecture Creation

```bash
@architect *create-brownfield-architecture {prd-and-documentation}
```

**Architecture Focus Areas:**

- **Integration Strategy** - How new code connects to existing systems
- **Migration Approach** - Gradual transition plans (strangler fig pattern)
- **Compatibility Requirements** - Backward compatibility preservation
- **Performance Considerations** - Impact on existing system performance
- **Rollback Procedures** - Safe reversion strategies

## Part 6: Validation & Transition to Development

### Planning Validation

```mermaid
flowchart TD
    A["📋 Planning Validation Phase"] --> B["@po *execute-checklist-po"]
    B --> C{"✅ Validation Results"}

    C -->|Pass| D["🎯 All Requirements Clear"]
    C -->|Concerns| E["⚠️ Issues Identified"]
    C -->|Fail| F["❌ Major Gaps Found"]

    D --> G["📝 Risk Mitigation Planned"]
    E --> H["🔧 Address Specific Concerns"]
    F --> I["🔄 Revisit Planning Phase"]

    G --> J["🏗️ Architecture Aligned"]
    H --> J
    I --> B

    J --> K["✅ Ready for Development"]
    K --> L["🔄 Enter Main BMAD Cycle<br/>at Stage 7: Document Sharding"]

    style A fill:#fff3e0
    style D fill:#c8e6c9
    style E fill:#fff3e0
    style F fill:#ffcdd2
    style K fill:#c8e6c9
    style L fill:#e1f5fe
```

### Transition Checklist

Before entering the main development cycle, ensure:

- [ ] **Documentation Complete** - System understanding captured
- [ ] **Requirements Clear** - Enhancement scope well-defined
- [ ] **Risks Assessed** - All regression risks identified and planned for
- [ ] **Architecture Aligned** - Integration strategy defined
- [ ] **Test Strategy Ready** - Regression and new feature test plans created
- [ ] **Rollback Plan** - Safe reversion procedures documented

### Entry Point to Main Development

**🔄 Transition Command:**

```bash
# Enter main BMAD cycle at Stage 7
@po *shard-doc prd.md docs/epics/
@po *shard-doc architecture.md docs/architecture/
```

**Continue with:** `development-flow-guide.md` from "Part 3: Core Development Cycle"

## Quick Command Reference

### Planning Phase Commands

| **Command**                       | **Purpose**                         | **When to Use**                 | **Output**             |
| --------------------------------- | ----------------------------------- | ------------------------------- | ---------------------- |
| `*document-project`               | Understand existing system          | Always first (except PRD-first) | `docs/architecture.md` |
| `*create-brownfield-prd`          | Define enhancement requirements     | Complex changes                 | `docs/prd.md`          |
| `*create-brownfield-epic`         | Quick epic planning                 | Focused enhancements            | Epic in PRD            |
| `*create-brownfield-story`        | Single story creation               | Small fixes                     | Story document         |
| `*risk {requirements}`            | **MANDATORY** regression assessment | Every brownfield project        | Risk assessment        |
| `*design {requirements}`          | **MANDATORY** test strategy         | After risk assessment           | Test design            |
| `*create-brownfield-architecture` | Integration planning                | After requirements + risks      | `docs/architecture.md` |

### Decision Quick Reference

| **Situation**           | **Recommended Approach** | **Key Commands**                               |
| ----------------------- | ------------------------ | ---------------------------------------------- |
| Large unknown codebase  | Document-First           | `*document-project` → `*create-brownfield-prd` |
| Large known codebase    | PRD-First                | `*create-brownfield-prd` → `*document-project` |
| Single feature addition | Quick Epic               | `*create-brownfield-epic`                      |
| Bug fix or tiny change  | Story-Only               | `*create-brownfield-story`                     |

**🚨 Remember:** All approaches require mandatory risk assessment (`*risk` + `*design`) before development begins.

---

This guide covers the complete brownfield planning phase. Once planning is complete, continue with the main development workflow from Stage 7 in `development-flow-guide.md`.
