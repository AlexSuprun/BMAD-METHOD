<!-- Powered by BMAD™ Core -->

# Review Code Task

## Purpose

Perform comprehensive code review covering quality, security, performance, and best practices. Provide constructive, actionable feedback to improve code maintainability and reliability.

## Inputs

```yaml
required_one_of:
  - file_path: 'path/to/file' # specific file to review
  - directory_path: 'path/to/dir' # directory to review
  - git_diff: 'true' # review staged or recent changes

optional:
  - focus: 'security|performance|quality|all' # specific focus area (default: all)
  - depth: 'quick|thorough|comprehensive' # review depth (default: thorough)
```

## Prerequisites

- Code is syntactically valid and can be parsed
- Project structure is accessible
- Coding standards document available (if exists)

## Review Process

### 1. Scope Identification

**Determine what to review:**

- If `file_path` provided: Review single file
- If `directory_path` provided: Review all code files in directory
- If `git_diff: true`: Review staged changes (`git diff --cached`)
- If no input: Ask user to specify scope

### 2. Load Review Standards

**Read project standards (if they exist):**

- Check for `.bmad-core/data/coding-standards.md`
- Check for `.bmad-core/data/security-best-practices.md`
- Check for project-specific linter configs (`.eslintrc`, `pyproject.toml`, etc.)
- Use general best practices if project standards not found

### 3. Code Quality Review

**For each file in scope, check:**

#### Readability & Maintainability

- Clear, descriptive variable and function names
- Appropriate function length (< 30 lines ideal)
- Proper indentation and formatting
- Meaningful comments where needed (not obvious code)
- Consistent code style throughout

#### Code Structure

- Single Responsibility Principle adherence
- DRY (Don't Repeat Yourself) violations
- Proper error handling
- Appropriate abstraction levels
- Clear separation of concerns

#### Code Smells

- Long functions or classes
- Too many parameters (> 3-4)
- Deeply nested conditionals (> 3 levels)
- Magic numbers or strings
- Dead or commented-out code
- God classes or functions

### 4. Security Review

**Check for security vulnerabilities:**

#### Input Validation

- Unvalidated user input
- SQL injection risks
- XSS (Cross-Site Scripting) vulnerabilities
- Command injection risks
- Path traversal vulnerabilities

#### Data Exposure

- Hardcoded secrets or credentials
- Sensitive data in logs
- Unencrypted sensitive data
- Exposed API keys or tokens
- Information leakage in error messages

#### Authentication & Authorization

- Missing authentication checks
- Improper authorization logic
- Insecure session management
- Weak password policies
- Missing CSRF protection

### 5. Performance Review

**Identify performance issues:**

#### Algorithm Efficiency

- N+1 query problems
- Unnecessary loops or iterations
- Inefficient data structures
- Missing caching opportunities
- Redundant computations

#### Resource Management

- Memory leaks
- Unclosed resources (files, connections)
- Excessive memory allocation
- Large objects in memory
- Inefficient string concatenation

#### Async & Concurrency

- Blocking operations in async code
- Race conditions
- Deadlock potential
- Missing parallelization opportunities

### 6. Best Practices Review

**Verify adherence to best practices:**

#### Testing

- Test coverage for critical paths
- Edge cases handled
- Error conditions tested
- Test quality (not just quantity)

#### Documentation

- Public APIs documented
- Complex logic explained
- TODO/FIXME comments addressed
- README updated if needed

#### Dependencies

- Unnecessary dependencies
- Outdated packages
- Security vulnerabilities in dependencies
- Proper version pinning

### 7. Generate Review Report

**Create structured feedback:**

```markdown
## Code Review Report

### Summary

- Files reviewed: [count]
- Issues found: [count by severity]
- Review focus: [quality/security/performance/all]

### Critical Issues (Must Fix)

1. [Issue description]
   - Location: file.js:123
   - Impact: [security/performance/quality]
   - Recommendation: [specific fix]

### Major Issues (Should Fix)

...

### Minor Issues (Nice to Have)

...

### Positive Observations

- [Good practices found]

### Overall Assessment

[Brief summary and priority recommendations]
```

## Review Depth Levels

### Quick Review (5-10 min)

- Focus on critical security issues
- Check for obvious code smells
- Verify basic error handling

### Thorough Review (Default, 20-30 min)

- Complete quality, security, performance check
- Detailed feedback on all issues
- Specific improvement recommendations

### Comprehensive Review (45-60 min)

- All thorough review items
- Architecture and design patterns review
- Alternative implementation suggestions
- Long-term maintainability analysis

## Output Format

Present findings as:

1. **Critical Issues** - Security vulnerabilities, major bugs
2. **Major Issues** - Performance problems, code quality issues
3. **Minor Issues** - Style inconsistencies, minor improvements
4. **Suggestions** - Optional improvements, alternative approaches
5. **Positive Feedback** - Well-written code, good practices

Always provide:

- Specific file and line number
- Clear explanation of the issue
- Concrete recommendation for improvement
- Example of better implementation (when applicable)

## Constructive Feedback Guidelines

- Be objective and specific
- Focus on the code, not the coder
- Explain the "why" behind recommendations
- Provide examples of improvements
- Acknowledge good code as well as issues
- Prioritize issues by severity and impact
