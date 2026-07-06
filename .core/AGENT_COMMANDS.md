# Agent Skills & Slash Commands

This document contains the core slash commands provided by the plugins in this workspace, mapped directly to the software development lifecycle. Use these at any time to force the AI into a specific, structured workflow.

### ⚙️ System & Meta Commands
* **`/goal`**: Run a long-running task and be extra thorough until fully achieved.
* **`/schedule`**: Run an instruction on a recurring schedule or set a one-time timer.
* **`/grill-me`**: Align on a plan through an interactive interview to resolve design decisions.
* **`/learn`**: Persist agent behavior for future tasks after a complex setup or correction.
* **`/using-agent-skills`**: Discovers and invokes agent skills. The meta-skill that governs how all other skills are discovered.
* **`/context-engineering`**: Optimizes agent context setup when switching tasks or configuring rules files.

### 📐 1. Definition & Planning
* **`/spec-driven-development`**: Creates specs before coding. Use when starting a new project, feature, or when requirements are unclear.
* **`/planning-and-task-breakdown`**: Breaks work into ordered, implementable tasks. Use when a task feels too large to start or parallel work is possible.
* **`/idea-refine`**: Refines raw ideas into sharp, actionable concepts through structured divergent and convergent thinking.
* **`/interview-me`**: Extracts underlying intent through a one-question-at-a-time interview until ~95% confidence is reached.
* **`/doubt-driven-development`**: Subjects non-trivial decisions to a fresh-context adversarial review. Use when correctness matters more than speed.
* **`/api-and-interface-design`**: Guides stable API and interface design. Use when defining module boundaries or public interfaces.

### 🏗️ 2. Building & Implementation
* **`/incremental-implementation`**: Delivers changes incrementally. Use when implementing any feature touching more than one file.
* **`/source-driven-development`**: Grounds every implementation decision in official documentation, free from outdated patterns.
* **`/android-cli`**: Orchestrates Android development tasks including project creation, deployment, and SDK management.

### 🎨 3. Frontend & UI Engineering
* **`/frontend-ui-engineering`**: Builds production-quality UIs. Prioritizes modern design aesthetics and avoids generic AI-generated looks.
* **`/performance-optimization`**: Optimizes application performance (Core Web Vitals, load times, profiling).
* **`/browser-testing-with-devtools`**: Tests in real browsers via Chrome DevTools MCP. Use to inspect the DOM, network, and console.

### 🧪 4. Verification & Quality
* **`/test-driven-development`**: Drives development with tests. Proves code works before or after writing logic.
* **`/code-review-and-quality`**: Conducts multi-axis code review. Use before merging any change to assess code quality.
* **`/code-simplification`**: Simplifies code for clarity without changing behavior.
* **`/debugging-and-error-recovery`**: Guides systematic root-cause debugging instead of guessing.

### 🛡️ 5. Security & Maintenance
* **`/security-and-hardening`**: Hardens code against vulnerabilities (handling user input, auth, data storage).
* **`/deprecation-and-migration`**: Manages sunsetting old systems or migrating users from one implementation to another.
* **`/git-workflow-and-versioning`**: Structures git workflow practices (branching, commits, conflict resolution).

### 🚀 6. Documentation & Launch
* **`/documentation-and-adrs`**: Records architectural decisions, public APIs, and context for future engineers.
* **`/shipping-and-launch`**: Prepares production launches, staged rollouts, rollback strategies, and monitoring.
* **`/observability-and-instrumentation`**: Instruments code with logging, metrics, tracing, or alerting so production behavior is visible.


