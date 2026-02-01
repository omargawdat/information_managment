---
title: "Management of Information Systems"
chapter: 3
order: 1
description: "Application life cycle, project vs. service, waterfall, V-Model, Agile, Scrum, Kanban, DevOps, DevSecOps, outsourcing, RE process facets, activity diagrams, UML class diagrams, data modeling, and MBSE"
---

## Context in the Krcmar Model

This chapter covers **Management of Information Systems** — specifically the **Application Life Cycle and Landscape** within the machine-side of the Krcmar model.

---

## Three Fundamental SE Process Decisions

Every CIO and IT manager faces three fundamental software engineering process decisions:

| # | Decision | Options |
|---|----------|---------|
| 1 | **Project or Service** | One-time effort vs. ongoing operation |
| 2 | **Waterfall or Incremental-Iterative** | Sequential phases vs. repeated cycles |
| 3 | **Inhouse or Outsource** | Internal teams vs. external providers (offshore or nearshore) |

---

## Decision 1: Project vs. Service

> **Definition:** A **Project** (DIN69901) has a defined goal, a defined time span, and is usually run once. A **Service** has a defined goal, a defined target group, and runs indefinitely.

| Dimension | Project | Service |
|-----------|---------|---------|
| **Leadership** | Project Manager | Service Owner |
| **Time horizon** | Fixed (defined time span) | Indefinite (ongoing) |
| **Justification** | Needs re-justification every fixed period | Justified by ongoing demand |
| **Strength** | Hypothesis testing (validations, prototypes) | Stability, continuous improvement |
| **Weakness** | Poor knowledge transfer and documentation | Less suited for exploratory work |

> **Important:** Projects and services are not mutually exclusive — organizations use projects to build capabilities, then transition them into services for ongoing operation.

---

## Decision 2: Waterfall vs. Incremental-Iterative

### Waterfall (Royce)

The **Waterfall model** (Royce) is sequential — each phase completes before the next begins:

**System Requirements → Software Requirements → Preliminary Program Design → Analysis → Program Design → Coding → Testing → Operations**

> **Important:** Royce's original model included feedback loops between adjacent phases. The "pure waterfall" with no feedback is a misinterpretation.

### The V-Model

The **V-Model** extends waterfall by pairing each construction phase with a corresponding test level.

<div class="not-prose my-8 flex justify-center">
  <div class="w-full max-w-2xl">
    <!-- V-Model Diagram -->
    <div style="display:grid; grid-template-columns:1fr auto 1fr; grid-template-rows:repeat(5,auto); gap:0.25rem 0; align-items:center;" class="text-xs font-semibold">
      <!-- Row 1: Requirements Definition ↔ Acceptance Test -->
      <div class="px-3 py-2 rounded-lg bg-sky-100 dark:bg-sky-900/40 border border-sky-300 dark:border-sky-700 text-sky-900 dark:text-sky-100 text-center">
        Requirements Definition
      </div>
      <div class="px-4 text-gray-400 dark:text-gray-500 text-center text-[10px] tracking-wider">· · · · · · · · · ·</div>
      <div class="px-3 py-2 rounded-lg bg-green-100 dark:bg-green-900/40 border border-green-300 dark:border-green-700 text-green-900 dark:text-green-100 text-center">
        Acceptance Test
      </div>
      <!-- Row 2: Functional System Design ↔ System Test -->
      <div class="px-3 py-2 rounded-lg bg-sky-100 dark:bg-sky-900/40 border border-sky-300 dark:border-sky-700 text-sky-900 dark:text-sky-100 text-center" style="margin-left:2rem;">
        Functional System Design
      </div>
      <div class="px-4 text-gray-400 dark:text-gray-500 text-center text-[10px] tracking-wider">· · · · · · ·</div>
      <div class="px-3 py-2 rounded-lg bg-green-100 dark:bg-green-900/40 border border-green-300 dark:border-green-700 text-green-900 dark:text-green-100 text-center" style="margin-right:2rem;">
        System Test
      </div>
      <!-- Row 3: Technical System Design ↔ Integration Test -->
      <div class="px-3 py-2 rounded-lg bg-sky-100 dark:bg-sky-900/40 border border-sky-300 dark:border-sky-700 text-sky-900 dark:text-sky-100 text-center" style="margin-left:4rem;">
        Technical System Design
      </div>
      <div class="px-4 text-gray-400 dark:text-gray-500 text-center text-[10px] tracking-wider">· · · ·</div>
      <div class="px-3 py-2 rounded-lg bg-green-100 dark:bg-green-900/40 border border-green-300 dark:border-green-700 text-green-900 dark:text-green-100 text-center" style="margin-right:4rem;">
        Integration Test
      </div>
      <!-- Row 4: Components Specification ↔ Component Test -->
      <div class="px-3 py-2 rounded-lg bg-sky-100 dark:bg-sky-900/40 border border-sky-300 dark:border-sky-700 text-sky-900 dark:text-sky-100 text-center" style="margin-left:6rem;">
        Components Specification
      </div>
      <div class="px-4 text-gray-400 dark:text-gray-500 text-center text-[10px] tracking-wider">· ·</div>
      <div class="px-3 py-2 rounded-lg bg-green-100 dark:bg-green-900/40 border border-green-300 dark:border-green-700 text-green-900 dark:text-green-100 text-center" style="margin-right:6rem;">
        Component Test
      </div>
      <!-- Row 5: Programming (center bottom) -->
      <div></div>
      <div class="px-4 py-2 rounded-lg bg-amber-100 dark:bg-amber-900/40 border-2 border-amber-400 dark:border-amber-500 text-amber-900 dark:text-amber-100 text-center font-bold">
        Programming
      </div>
      <div></div>
    </div>
    <div class="mt-2 flex justify-center gap-6 text-[10px] text-gray-500 dark:text-gray-400">
      <span class="flex items-center gap-1"><span class="inline-block w-3 h-2 rounded bg-sky-200 dark:bg-sky-800 border border-sky-400 dark:border-sky-600"></span> Construction</span>
      <span class="flex items-center gap-1"><span class="inline-block w-3 h-2 rounded bg-green-200 dark:bg-green-800 border border-green-400 dark:border-green-600"></span> Testing</span>
      <span class="flex items-center gap-1"><span class="inline-block w-3 h-2 rounded bg-amber-200 dark:bg-amber-800 border border-amber-400 dark:border-amber-600"></span> Implementation</span>
    </div>
  </div>
</div>

> **Important:** Test planning starts during the corresponding design phase, not after coding. Each test level validates artifacts from its paired construction phase.

### Agile Development

#### The Agile Manifesto (2001)

The Agile Manifesto establishes four core values — left is valued **more**, right is **not rejected**:

| Valued More | Over | Valued Less |
|-------------|------|-------------|
| **Individuals and interactions** | over | Processes and tools |
| **Working software** | over | Comprehensive documentation |
| **Customer collaboration** | over | Contract negotiation |
| **Responding to change** | over | Following a plan |

#### 12 Agile Principles

| # | Core Idea | # | Core Idea |
|---|-----------|---|-----------|
| 1 | Early, continuous delivery | 7 | Working software = progress |
| 2 | Welcome changing requirements | 8 | Sustainable pace |
| 3 | Deliver frequently (prefer short) | 9 | Technical excellence |
| 4 | Daily business-dev collaboration | 10 | Simplicity (maximize work not done) |
| 5 | Motivated individuals + trust | 11 | Self-organizing teams |
| 6 | Face-to-face communication | 12 | Regular reflection + adjustment |

### Scrum

**Scrum** is an agile framework organizing work into fixed-length **Sprints**.

| Category | Elements |
|----------|----------|
| **Roles** | Product Owner, Development Team, Scrum Master |
| **Artifacts** | Product Backlog, Sprint Backlog, Product Increment |
| **Events** | Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective |

<div class="not-prose my-8 flex justify-center">
  <div class="w-full max-w-2xl">
    <div class="relative rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 p-4">
      <!-- Center label -->
      <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span class="text-amber-500 dark:text-amber-400 font-bold text-sm bg-white/80 dark:bg-gray-900/80 px-2 py-1 rounded">Sprint (1–4 wk)</span>
      </div>
      <div class="flex items-center gap-3">
        <!-- Product Backlog input -->
        <div class="shrink-0 px-3 py-2 rounded-lg bg-sky-100 dark:bg-sky-900/40 border border-sky-300 dark:border-sky-700 text-sky-900 dark:text-sky-100 text-xs font-semibold text-center">
          Product<br>Backlog
        </div>
        <div class="text-gray-400 dark:text-gray-500 text-lg">→</div>
        <!-- 2x2 event grid -->
        <div class="flex-1 grid grid-cols-2 gap-2">
          <div class="px-3 py-2 rounded-lg bg-purple-100 dark:bg-purple-900/40 border border-purple-300 dark:border-purple-700 text-purple-900 dark:text-purple-100 text-xs font-semibold text-center">
            Sprint Planning
          </div>
          <div class="px-3 py-2 rounded-lg bg-purple-100 dark:bg-purple-900/40 border border-purple-300 dark:border-purple-700 text-purple-900 dark:text-purple-100 text-xs font-semibold text-center">
            Daily Scrum
          </div>
          <div class="px-3 py-2 rounded-lg bg-purple-100 dark:bg-purple-900/40 border border-purple-300 dark:border-purple-700 text-purple-900 dark:text-purple-100 text-xs font-semibold text-center">
            Retrospective
          </div>
          <div class="px-3 py-2 rounded-lg bg-purple-100 dark:bg-purple-900/40 border border-purple-300 dark:border-purple-700 text-purple-900 dark:text-purple-100 text-xs font-semibold text-center">
            Sprint Review
          </div>
        </div>
        <div class="text-gray-400 dark:text-gray-500 text-lg">→</div>
        <!-- Product Increment output -->
        <div class="shrink-0 px-3 py-2 rounded-lg bg-green-100 dark:bg-green-900/40 border border-green-300 dark:border-green-700 text-green-900 dark:text-green-100 text-xs font-semibold text-center">
          Product<br>Increment
        </div>
      </div>
      <!-- Clockwise arrows -->
      <div class="flex justify-center gap-1 mt-1 text-[10px] text-purple-400 dark:text-purple-500 font-mono">
        ↓ → ↑ ← (cycle)
      </div>
    </div>
    <!-- Role legend -->
    <div class="mt-2 flex justify-center gap-6 text-[10px] text-gray-500 dark:text-gray-400">
      <span><strong>PO</strong> = Product Owner</span>
      <span><strong>SM</strong> = Scrum Master</span>
      <span><strong>DT</strong> = Dev Team</span>
    </div>
  </div>
</div>

### Kanban

**Kanban** ("signboard") originated at Toyota (1947); David J. Anderson brought it to software development.

> **Definition:** Kanban's core principle is that **limiting WIP (Work in Progress) increases throughput**. A Kanban board visualizes workflow as columns, each with a WIP limit.

Kanban suits process improvement and services — no prescribed roles or fixed iterations; work flows continuously.

---

## Decision 3: Inhouse vs. Outsource

> **Definition:** **Outsourcing** is the process of paying to have part of a company's work done by another company (Cambridge Dictionary).

> **Definition:** **Offshoring** is the practice of basing a business or part of a business in a different country, usually because this involves paying less tax or other costs (Cambridge Dictionary).

> **Definition:** **Nearshoring** is relocation of business processes to (typically) lower cost foreign locations, but in close geographical proximity.

### Offshoring: Expectations vs. Reality

| Expected Benefit | Achievement | Key Obstacle |
|-----------------|-------------|--------------|
| **Cost savings** | Non-achieved | Significant start-up overhead |
| **Capacity** | Partial | Communication problems, productivity gap |
| **Quality** | Non-achieved | Knowledge loss, perceived quality decrease |
| **Speed** | Non-achieved | Believed faster if kept onshore |
| **Innovation + Competitive advantage** | Partial | Failure to respond to acute problems |

Cost savings rarely materialize due to start-up overhead and communication costs; achieved benefits tend to be about **access to talent**, while tight-collaboration benefits (quality, speed, innovation) fall short.

---

## DevOps

> **Definition:** **DevOps** is a collaborative and multidisciplinary effort within an organization to automate continuous delivery of new software versions, while guaranteeing their correctness and reliability (Leite et al., 2019).

**Dev side:** Plan → Discover → Build → Test | **Ops side:** Deploy → Operate → Observe | **Center:** Continuous Feedback. The entire loop is wrapped in Collaboration and Communication — DevOps is a cultural shift, not just tooling.

<div class="not-prose my-8 flex justify-center">
  <div class="w-full max-w-2xl">
    <div class="rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 p-4">
      <div class="text-center text-[10px] text-gray-500 dark:text-gray-400 font-semibold tracking-wider uppercase mb-3">Collaboration &amp; Communication</div>
      <div class="grid grid-cols-3 gap-3 items-start">
        <!-- Dev column -->
        <div class="space-y-2">
          <div class="text-center text-xs font-bold text-sky-700 dark:text-sky-300 mb-1">DEV</div>
          <div class="px-3 py-1.5 rounded-lg bg-sky-100 dark:bg-sky-900/40 border border-sky-300 dark:border-sky-700 text-sky-900 dark:text-sky-100 text-xs font-semibold text-center">Plan</div>
          <div class="text-center text-gray-400 dark:text-gray-500 text-xs">↓</div>
          <div class="px-3 py-1.5 rounded-lg bg-sky-100 dark:bg-sky-900/40 border border-sky-300 dark:border-sky-700 text-sky-900 dark:text-sky-100 text-xs font-semibold text-center">Discover</div>
          <div class="text-center text-gray-400 dark:text-gray-500 text-xs">↓</div>
          <div class="px-3 py-1.5 rounded-lg bg-sky-100 dark:bg-sky-900/40 border border-sky-300 dark:border-sky-700 text-sky-900 dark:text-sky-100 text-xs font-semibold text-center">Build</div>
          <div class="text-center text-gray-400 dark:text-gray-500 text-xs">↓</div>
          <div class="px-3 py-1.5 rounded-lg bg-sky-100 dark:bg-sky-900/40 border border-sky-300 dark:border-sky-700 text-sky-900 dark:text-sky-100 text-xs font-semibold text-center">Test</div>
        </div>
        <!-- Center feedback -->
        <div class="flex flex-col items-center justify-between h-full py-4">
          <div class="text-amber-500 dark:text-amber-400 font-bold text-sm">→</div>
          <div class="px-3 py-2 rounded-lg bg-amber-100 dark:bg-amber-900/40 border-2 border-amber-400 dark:border-amber-500 text-amber-900 dark:text-amber-100 text-xs font-bold text-center">
            Continuous<br>Feedback
          </div>
          <div class="text-amber-500 dark:text-amber-400 font-bold text-sm">←</div>
        </div>
        <!-- Ops column -->
        <div class="space-y-2">
          <div class="text-center text-xs font-bold text-green-700 dark:text-green-300 mb-1">OPS</div>
          <div class="px-3 py-1.5 rounded-lg bg-green-100 dark:bg-green-900/40 border border-green-300 dark:border-green-700 text-green-900 dark:text-green-100 text-xs font-semibold text-center">Deploy</div>
          <div class="text-center text-gray-400 dark:text-gray-500 text-xs">↓</div>
          <div class="px-3 py-1.5 rounded-lg bg-green-100 dark:bg-green-900/40 border border-green-300 dark:border-green-700 text-green-900 dark:text-green-100 text-xs font-semibold text-center">Operate</div>
          <div class="text-center text-gray-400 dark:text-gray-500 text-xs">↓</div>
          <div class="px-3 py-1.5 rounded-lg bg-green-100 dark:bg-green-900/40 border border-green-300 dark:border-green-700 text-green-900 dark:text-green-100 text-xs font-semibold text-center">Observe</div>
        </div>
      </div>
    </div>
    <!-- Color legend -->
    <div class="mt-2 flex justify-center gap-6 text-[10px] text-gray-500 dark:text-gray-400">
      <span class="flex items-center gap-1"><span class="inline-block w-3 h-2 rounded bg-sky-200 dark:bg-sky-800 border border-sky-400 dark:border-sky-600"></span> Dev</span>
      <span class="flex items-center gap-1"><span class="inline-block w-3 h-2 rounded bg-green-200 dark:bg-green-800 border border-green-400 dark:border-green-600"></span> Ops</span>
      <span class="flex items-center gap-1"><span class="inline-block w-3 h-2 rounded bg-amber-200 dark:bg-amber-800 border border-amber-400 dark:border-amber-600"></span> Feedback</span>
    </div>
  </div>
</div>

### DevOps Tool Categories

| Category | Goal | Key Concepts |
|----------|------|-------------|
| **Knowledge sharing** | Human collaboration | Culture of collaboration, breaking down silos |
| **Source code management** | Continuous delivery | Versioning, sharing knowledge |
| **Build process** | Continuous delivery | Release engineering, test automation, static analysis |
| **Continuous Integration** | Continuous delivery | CI pipeline, artifact management, automation |
| **Deployment automation** | Continuous delivery + Reliability | Infrastructure as code, containerization, cloud services |
| **Monitoring & Logging** | Reliability | "You built it, you run it", runtime monitoring, alerting |

> **Important:** "You built it, you run it" — developers operate their own code in production, creating a direct feedback loop.

---

## DevSecOps

**DevSecOps** extends DevOps by integrating **Security** into every phase rather than treating it as a final gate.

| Phase | Security Activities |
|-------|-------------------|
| **Develop** | Requirements analysis, Secure coding |
| **Build** | SAST (Static Application Security Testing) |
| **Test** | White box DAST, Black box DAST |
| **Release** | Digital signing |
| **Deliver** | Secure transfer, Security analysis |
| **Deploy** | Security configuration, Security scanning |
| **Operate** | Security patching |
| **Monitor** | Security monitoring, Security auditing |

> **Important:** Security is **shifted left** — it starts at requirements and coding, catching vulnerabilities earlier when they are cheaper to fix.

---

## Requirements Engineering Process Facets

RE processes are characterized along three facets:

| Facet | Spectrum |
|-------|----------|
| **Time** | Linear ↔ Iterative |
| **Target** | Market-oriented ↔ Customer-specific |
| **Purpose** | Exploratory ↔ Prescriptive |

| RE Process Type | Time | Target | Purpose | Description |
|----------------|------|--------|---------|-------------|
| **Product-oriented RE** | Iterative | Market-oriented | Exploratory | Building for a market; requirements discovered through exploration and experimentation |
| **Contractual RE** | Linear | Customer-specific | Prescriptive | Building under contract; requirements defined upfront |
| **Participatory RE** | Iterative | Customer-specific | Both | Building collaboratively; customer actively participates in ongoing discovery |

---

## Models and System Definition

Two ways to communicate system knowledge: **Speak** (natural language) vs. **Specify** (formal models).

> **Definition:** A **model** is an **abstraction** from reality with a **specific purpose**. Models filter out everything except what is relevant to the creator/user.

### Three Properties of Models (Stachowiak)

| Property | Meaning |
|----------|---------|
| **Mapping** | Models represent something in the real world |
| **Reduction** | Models leave out irrelevant details |
| **Pragmatics** | Models serve a specific purpose |

### System Definition (SuD)

A **System under Development (SuD)** has five key properties:

| Property | Meaning |
|----------|---------|
| **Operational context** | Environment that influences or is influenced by the SuD (Humans, Processes, Services/Data, Other Systems) |
| **Context boundary** | Separates the operational context from the non-relevant environment |
| **Inner structure** | Related elements composing the system |
| **Interfaces** | Distinguish the SuD from its context; define the system boundary |
| **Behavior** | Observable at the interfaces |

> **Important:** The system boundary (what is inside) vs. the context boundary (what is relevant outside) is fundamental to scoping any IS project. Actors interact through interfaces, from outside the system boundary but within the context boundary.

<div class="not-prose my-8 flex justify-center">
  <div class="w-full max-w-2xl">
    <!-- Non-relevant environment -->
    <div class="rounded-xl bg-gray-50 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700 p-3">
      <div class="text-[10px] text-gray-400 dark:text-gray-500 font-semibold mb-2 text-right">Non-relevant environment</div>
      <!-- Context Boundary -->
      <div class="rounded-lg border-2 border-dashed border-amber-400 dark:border-amber-500 p-3">
        <div class="text-[10px] text-amber-600 dark:text-amber-400 font-semibold mb-2">Context Boundary</div>
        <div class="flex items-center gap-3">
          <!-- Actors (between context and system boundary) -->
          <div class="shrink-0 space-y-2">
            <div class="px-2 py-1.5 rounded bg-purple-100 dark:bg-purple-900/40 border border-purple-300 dark:border-purple-700 text-purple-900 dark:text-purple-100 text-[10px] font-semibold text-center">
              👤 Human
            </div>
            <div class="px-2 py-1.5 rounded bg-purple-100 dark:bg-purple-900/40 border border-purple-300 dark:border-purple-700 text-purple-900 dark:text-purple-100 text-[10px] font-semibold text-center">
              ⚙ Other System
            </div>
            <div class="px-2 py-1.5 rounded bg-purple-100 dark:bg-purple-900/40 border border-purple-300 dark:border-purple-700 text-purple-900 dark:text-purple-100 text-[10px] font-semibold text-center">
              ⟳ Process
            </div>
          </div>
          <!-- Interface label on boundary edge -->
          <div class="flex flex-col items-center gap-1">
            <div class="text-[9px] text-sky-600 dark:text-sky-400 font-bold">Interface</div>
            <div class="w-px h-12 border-l-2 border-dotted border-sky-400 dark:border-sky-500"></div>
          </div>
          <!-- System Boundary -->
          <div class="flex-1 rounded-lg border-2 border-solid border-sky-400 dark:border-sky-500 p-3">
            <div class="text-[10px] text-sky-600 dark:text-sky-400 font-semibold mb-2">System Boundary (SuD)</div>
            <!-- Inner structure -->
            <div class="rounded bg-sky-50 dark:bg-sky-900/20 border border-sky-200 dark:border-sky-800 p-3">
              <div class="text-[10px] text-sky-700 dark:text-sky-300 font-semibold mb-1">Inner Structure</div>
              <div class="flex gap-2">
                <div class="px-2 py-1 rounded bg-sky-100 dark:bg-sky-900/40 border border-sky-300 dark:border-sky-700 text-sky-800 dark:text-sky-200 text-[9px]">Element A</div>
                <div class="px-2 py-1 rounded bg-sky-100 dark:bg-sky-900/40 border border-sky-300 dark:border-sky-700 text-sky-800 dark:text-sky-200 text-[9px]">Element B</div>
                <div class="px-2 py-1 rounded bg-sky-100 dark:bg-sky-900/40 border border-sky-300 dark:border-sky-700 text-sky-800 dark:text-sky-200 text-[9px]">Element C</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Legend -->
    <div class="mt-2 flex flex-wrap justify-center gap-4 text-[10px] text-gray-500 dark:text-gray-400">
      <span class="flex items-center gap-1"><span class="inline-block w-3 h-2 rounded border-2 border-dashed border-amber-400 dark:border-amber-500"></span> Context boundary</span>
      <span class="flex items-center gap-1"><span class="inline-block w-3 h-2 rounded border-2 border-solid border-sky-400 dark:border-sky-500"></span> System boundary</span>
      <span class="flex items-center gap-1"><span class="inline-block w-3 h-2 rounded bg-purple-200 dark:bg-purple-800 border border-purple-400 dark:border-purple-600"></span> Actors</span>
    </div>
  </div>
</div>

---

## The Unified Modeling Language (UML)

**UML** was created by Booch, Jacobson, and Rumbaugh (the "Three Amigos") and is defined by the **Object Management Group (OMG)**.

### UML Diagram Types

| Category | Questions It Answers |
|----------|---------------------|
| **Structure Diagrams** | What **elements** make up the system? What are the syntactic **interfaces**? What **configurations** are possible? |
| **Behavior Diagrams** | Which **stakeholders/actors** are involved? Which **use cases**? What is the **input/output behavior**? What **states** and transitions? |

### UML Use Case Diagrams

| Element | Notation | Meaning |
|---------|----------|---------|
| **Actor** | Stick figure (human) or rectangle (system) | A role that interacts with the system |
| **Use Case** | Oval/ellipse | A functionality the system provides |
| **System Boundary** | Rectangle enclosing use cases | Defines inside vs. outside the system |
| **Association** | Solid line (actor ↔ use case) | Actor participates in a use case |
| **Include** | Dashed arrow with \<\<include\>\> | Mandatory sub-behavior always included |

### Detailed Use Cases: Cockburn Template

The Cockburn template describes *how* each use case works step by step:

| Field | Purpose |
|-------|---------|
| **Use Case Name** | Short descriptive name |
| **Goal in Context** | User story: "As a [role], I want to [action], so that [benefit]" |
| **Precondition** | What must be true before the use case starts |
| **Success End Condition** | What is true when the use case succeeds |
| **Failed End Condition** | What happens when the use case fails |
| **Main Success Scenario** | Numbered steps for the happy path |
| **Alternatives** | Variations branching from specific steps |

---

## UML Activity Diagrams

> **Definition:** An **activity** specifies an input-to-output transformation via a sequence of **actions**. Activity diagrams visualize workflows, business processes, and use case steps.

### Activity Diagram Elements

| Element | Notation | Meaning |
|---------|----------|---------|
| **Action** | Rounded rectangle | A single step in the activity |
| **Initial node** | Filled circle | Start of the activity |
| **Final node** | Circled filled circle | End of the activity |
| **Decision / Merge node** | Diamond | Only one outgoing edge taken (guard condition) |
| **Fork / Join node** | Thick bar | All outgoing edges taken (parallel execution) |
| **Swimlanes** | Vertical or horizontal partitions | Who executes which action |
| **Object flow** | Dashed arrow with object | Data passed between actions |

> **Important:** Activity diagrams can visualize Cockburn use case steps, with **swimlanes** showing which actor performs each action. Decision nodes use **guard conditions** (boolean expressions in square brackets) to choose the outgoing path.

<div class="not-prose my-8 flex justify-center">
  <div class="w-full max-w-md">
    <div class="flex flex-col items-center gap-2">
      <!-- Initial node -->
      <div class="w-5 h-5 rounded-full bg-gray-800 dark:bg-gray-200"></div>
      <div class="w-px h-3 bg-gray-400 dark:bg-gray-500"></div>
      <!-- Action: Enter Credentials -->
      <div class="w-full px-4 py-2 rounded-xl bg-sky-100 dark:bg-sky-900/40 border border-sky-300 dark:border-sky-700 text-sky-900 dark:text-sky-100 text-xs font-semibold text-center">
        Enter Credentials
      </div>
      <div class="w-px h-3 bg-gray-400 dark:bg-gray-500"></div>
      <!-- Action: Validate Credentials -->
      <div class="w-full px-4 py-2 rounded-xl bg-purple-100 dark:bg-purple-900/40 border border-purple-300 dark:border-purple-700 text-purple-900 dark:text-purple-100 text-xs font-semibold text-center">
        Validate Credentials
      </div>
      <div class="w-px h-3 bg-gray-400 dark:bg-gray-500"></div>
      <!-- Decision diamond -->
      <div class="relative w-10 h-10">
        <div class="absolute inset-0 rotate-45 bg-amber-100 dark:bg-amber-900/40 border-2 border-amber-400 dark:border-amber-500 rounded-sm"></div>
        <div class="absolute inset-0 flex items-center justify-center text-amber-700 dark:text-amber-300 text-[9px] font-bold">?</div>
      </div>
      <!-- Branches -->
      <div class="w-full grid grid-cols-2 gap-4">
        <!-- Left branch: valid -->
        <div class="flex flex-col items-center gap-2">
          <div class="text-[10px] text-green-600 dark:text-green-400 font-semibold">[valid]</div>
          <div class="w-px h-3 bg-gray-400 dark:bg-gray-500"></div>
          <div class="w-full px-3 py-2 rounded-xl bg-green-100 dark:bg-green-900/40 border border-green-300 dark:border-green-700 text-green-900 dark:text-green-100 text-xs font-semibold text-center">
            Load Dashboard
          </div>
          <div class="w-px h-3 bg-gray-400 dark:bg-gray-500"></div>
          <!-- Final node -->
          <div class="w-5 h-5 rounded-full border-2 border-gray-800 dark:border-gray-200 flex items-center justify-center">
            <div class="w-2.5 h-2.5 rounded-full bg-gray-800 dark:bg-gray-200"></div>
          </div>
        </div>
        <!-- Right branch: invalid -->
        <div class="flex flex-col items-center gap-2">
          <div class="text-[10px] text-red-600 dark:text-red-400 font-semibold">[invalid]</div>
          <div class="w-px h-3 bg-gray-400 dark:bg-gray-500"></div>
          <div class="w-full px-3 py-2 rounded-xl bg-red-100 dark:bg-red-900/40 border border-red-300 dark:border-red-700 text-red-900 dark:text-red-100 text-xs font-semibold text-center">
            Show Error
          </div>
          <div class="w-px h-3 bg-gray-400 dark:bg-gray-500"></div>
          <div class="text-[10px] text-gray-500 dark:text-gray-400 font-semibold italic">↩ loop back</div>
        </div>
      </div>
    </div>
    <!-- Legend -->
    <div class="mt-4 flex flex-wrap justify-center gap-4 text-[10px] text-gray-500 dark:text-gray-400">
      <span class="flex items-center gap-1"><span class="inline-block w-2.5 h-2.5 rounded-full bg-gray-800 dark:bg-gray-200"></span> Initial node</span>
      <span class="flex items-center gap-1"><span class="inline-block w-3 h-2 rounded-xl bg-sky-200 dark:bg-sky-800 border border-sky-400 dark:border-sky-600"></span> Action</span>
      <span class="flex items-center gap-1"><span class="inline-block w-2.5 h-2.5 rotate-45 bg-amber-200 dark:bg-amber-800 border border-amber-400 dark:border-amber-600"></span> Decision</span>
      <span class="flex items-center gap-1">
        <span class="inline-block w-2.5 h-2.5 rounded-full border-2 border-gray-800 dark:border-gray-200 relative"><span class="absolute inset-0.5 rounded-full bg-gray-800 dark:bg-gray-200"></span></span> Final node
      </span>
    </div>
  </div>
</div>

---

## Mental Models

> **Definition:** A **Mental Model** (Norman, 1983) is an organized understanding and mental representation of knowledge about key elements of the system under consideration.

Mental models underpin nearly every IS activity: communication between stakeholders, architecture design, database modeling, project planning, and contract negotiation. If people hold **different mental models** of the same system, misunderstandings and defects follow.

**Domain Driven Design** (Evans, 2004) refocuses on the importance of a common terminology — a **ubiquitous language** — shared by developers and domain experts so that the code reflects the domain model directly.

### Modeling Dimensions

Two orthogonal dimensions classify any model:

| Dimension | Question | Options |
|-----------|----------|---------|
| **Modeling Object** | What is modeled? | **Domain Model** (application domain — real-world concepts only) vs. **System Model** (system architecture — includes implementation concepts) |
| **Modeling Purpose** | What is it modeled for? | **Conceptual Model** (understandability over formality — whiteboard sketch) vs. **Specification Model** (formally precise — can generate code/tests) |

**Example — Address Book:**
- **Domain Model:** Address Book → Entry → Phone Number (real-world concepts only)
- **System Model:** same + Currently Opened Entry, Entry Database, Cloud Connector (implementation concepts added)

> **Important:** A **conceptual** model prioritizes shared understanding; a **specification** model prioritizes formal precision (full types, constraints, code generation). Both can be either domain or system models.

---

## UML Class Diagrams

Class diagrams are the primary **structure diagram** in UML — they show classes, attributes, operations, and the relationships between classes.

### Classes and Objects

- An **object** is a concrete instance with specific attribute values
- A **class** is a generalized type describing shared structure and behavior for its objects

A UML class is drawn as a rectangle with three compartments:

| Compartment | Content | Syntax |
|-------------|---------|--------|
| **Name** | Class name (bold, centered) | `ClassName` |
| **Attributes** | Data the class holds | `<visibility> <name> : <type>` |
| **Operations** | Behavior the class provides | `<visibility> <name>(<params>:<types>) : <returnType>` |

### Associations

> **Definition:** An **association** connects two (or more) classes, indicating that instances of those classes can be linked. A **link** is a concrete instance of an association between specific objects.

- **Rolenames** label each end of an association, describing the role an object plays in the relationship
- Associations are drawn as solid lines between classes

### Multiplicities

Multiplicities specify how many objects can participate in an association:

| Notation | Meaning |
|----------|---------|
| `0..1` | Optional (zero or one) |
| `1` | Exactly one (always) |
| `*` or `0..*` | Zero or more |
| `1..*` | One or more |
| `n..m` | At least n, at most m |

> **Important:** Multiplicities map directly to code — e.g., `*` translates to an array/list field, `1` to a mandatory single reference, `0..1` to a nullable/optional reference.

<div class="not-prose my-8 flex justify-center">
  <div class="w-full max-w-2xl overflow-x-auto">
    <div class="min-w-[28rem] mx-auto flex items-center justify-center gap-4">
      <!-- Student class -->
      <div class="w-48 rounded-lg border-2 border-sky-400 dark:border-sky-500 overflow-hidden">
        <div class="bg-sky-200 dark:bg-sky-900/60 px-3 py-1.5 text-center text-xs font-bold text-sky-900 dark:text-sky-100">Student</div>
        <div class="px-3 py-2 border-t border-sky-300 dark:border-sky-700 bg-white dark:bg-gray-900">
          <div class="text-[11px] font-mono text-gray-700 dark:text-gray-300 space-y-0.5">
            <div>- name : String</div>
            <div>- matricNo : int</div>
            <div>- email : String</div>
          </div>
        </div>
        <div class="px-3 py-2 border-t border-sky-300 dark:border-sky-700 bg-white dark:bg-gray-900">
          <div class="text-[11px] font-mono text-gray-700 dark:text-gray-300 space-y-0.5">
            <div>+ enroll(c : Course)</div>
            <div>+ drop(c : Course)</div>
          </div>
        </div>
      </div>
      <!-- Association line with multiplicities -->
      <div class="flex flex-col items-center gap-0.5 shrink-0">
        <div class="text-[10px] text-gray-500 dark:text-gray-400 italic">enrolls in</div>
        <div class="flex items-center gap-1">
          <span class="text-[10px] font-mono font-bold text-gray-700 dark:text-gray-300">*</span>
          <div class="w-16 h-0.5 bg-gray-400 dark:bg-gray-500"></div>
          <span class="text-[10px] font-mono font-bold text-gray-700 dark:text-gray-300">1..*</span>
        </div>
        <div class="flex justify-between w-full text-[9px] text-gray-400 dark:text-gray-500 px-1">
          <span>student</span>
          <span>course</span>
        </div>
      </div>
      <!-- Course class -->
      <div class="w-48 rounded-lg border-2 border-sky-400 dark:border-sky-500 overflow-hidden">
        <div class="bg-sky-200 dark:bg-sky-900/60 px-3 py-1.5 text-center text-xs font-bold text-sky-900 dark:text-sky-100">Course</div>
        <div class="px-3 py-2 border-t border-sky-300 dark:border-sky-700 bg-white dark:bg-gray-900">
          <div class="text-[11px] font-mono text-gray-700 dark:text-gray-300 space-y-0.5">
            <div>- title : String</div>
            <div>- credits : int</div>
            <div>- maxStudents : int</div>
          </div>
        </div>
        <div class="px-3 py-2 border-t border-sky-300 dark:border-sky-700 bg-white dark:bg-gray-900">
          <div class="text-[11px] font-mono text-gray-700 dark:text-gray-300 space-y-0.5">
            <div>+ addStudent(s : Student)</div>
            <div>+ getCapacity() : int</div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-2 text-center text-[10px] text-gray-500 dark:text-gray-400">
      A <strong>Student</strong> enrolls in <strong>1..*</strong> courses; a <strong>Course</strong> has <strong>*</strong> (zero or more) students. Rolenames (<em>student</em>, <em>course</em>) label each end.
    </div>
  </div>
</div>

### Generalization (Inheritance)

- A **subtype** is a subgrouping of a supertype with distinct additional attributes or behavior
- A **supertype** is a generic class with a generalization relationship to its subtypes
- **Attribute inheritance:** subtypes inherit all supertype attributes; an instance of a subtype **IS** an instance of the supertype
- **Association inheritance:** supertype associations apply to all subtypes; subtype-specific associations apply only to that subtype
- **Notation:** hollow triangle arrow pointing from subtype → supertype

<div class="not-prose my-8 flex justify-center">
  <div class="w-full max-w-xl">
    <div class="flex flex-col items-center gap-0">
      <!-- Vehicle supertype -->
      <div class="w-56 rounded-lg border-2 border-sky-400 dark:border-sky-500 overflow-hidden">
        <div class="bg-sky-200 dark:bg-sky-900/60 px-3 py-1.5 text-center text-xs font-bold text-sky-900 dark:text-sky-100">Vehicle</div>
        <div class="px-3 py-1.5 border-t border-sky-300 dark:border-sky-700 bg-white dark:bg-gray-900">
          <div class="text-[11px] font-mono text-gray-700 dark:text-gray-300 space-y-0.5">
            <div>- make : String</div>
            <div>- year : int</div>
          </div>
        </div>
        <div class="px-3 py-1.5 border-t border-sky-300 dark:border-sky-700 bg-white dark:bg-gray-900">
          <div class="text-[11px] font-mono text-gray-700 dark:text-gray-300">
            + start() : void
          </div>
        </div>
      </div>
      <!-- Hollow triangle -->
      <div class="flex justify-center my-1">
        <svg width="20" height="16" viewBox="0 0 20 16" class="text-gray-700 dark:text-gray-300">
          <polygon points="10,0 0,16 20,16" fill="none" stroke="currentColor" stroke-width="2"/>
        </svg>
      </div>
      <!-- Vertical line from triangle -->
      <div class="w-px h-4 bg-gray-400 dark:bg-gray-500"></div>
      <!-- Horizontal branch line -->
      <div class="w-64 h-0.5 bg-gray-400 dark:bg-gray-500"></div>
      <!-- Two subtypes -->
      <div class="flex gap-8 mt-0">
        <!-- Left vertical line -->
        <div class="flex flex-col items-center">
          <div class="w-px h-4 bg-gray-400 dark:bg-gray-500"></div>
          <!-- Car subtype -->
          <div class="w-44 rounded-lg border-2 border-green-400 dark:border-green-500 overflow-hidden">
            <div class="bg-green-200 dark:bg-green-900/60 px-3 py-1.5 text-center text-xs font-bold text-green-900 dark:text-green-100">Car</div>
            <div class="px-3 py-1.5 border-t border-green-300 dark:border-green-700 bg-white dark:bg-gray-900">
              <div class="text-[11px] font-mono text-gray-700 dark:text-gray-300">
                - numDoors : int
              </div>
            </div>
            <div class="px-3 py-1.5 border-t border-green-300 dark:border-green-700 bg-white dark:bg-gray-900">
              <div class="text-[11px] font-mono text-gray-700 dark:text-gray-300">
                + openTrunk() : void
              </div>
            </div>
          </div>
        </div>
        <!-- Right vertical line -->
        <div class="flex flex-col items-center">
          <div class="w-px h-4 bg-gray-400 dark:bg-gray-500"></div>
          <!-- Truck subtype -->
          <div class="w-44 rounded-lg border-2 border-green-400 dark:border-green-500 overflow-hidden">
            <div class="bg-green-200 dark:bg-green-900/60 px-3 py-1.5 text-center text-xs font-bold text-green-900 dark:text-green-100">Truck</div>
            <div class="px-3 py-1.5 border-t border-green-300 dark:border-green-700 bg-white dark:bg-gray-900">
              <div class="text-[11px] font-mono text-gray-700 dark:text-gray-300">
                - payload : double
              </div>
            </div>
            <div class="px-3 py-1.5 border-t border-green-300 dark:border-green-700 bg-white dark:bg-gray-900">
              <div class="text-[11px] font-mono text-gray-700 dark:text-gray-300">
                + loadCargo() : void
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Annotation -->
    <div class="mt-3 text-center text-[10px] text-gray-500 dark:text-gray-400">
      △ = generalization. <strong>Car</strong> and <strong>Truck</strong> inherit <em>make</em>, <em>year</em>, and <em>start()</em> from <strong>Vehicle</strong>.
    </div>
  </div>
</div>

### Packages

> **Definition:** **Packages** define named regions that group related model elements — similar to folders defining paths to files.

Packages organize classes into logical groups (e.g., Context, System, Database, UI). A class's fully qualified name includes its package path.

### Visibility (Access Operators)

| Symbol | Name | Accessible From |
|--------|------|----------------|
| `+` | Public | All classes with access to this package |
| `~` | Package | Only inside this package |
| `#` | Protected | This class and all subclasses |
| `-` | Private | Only this class |

---

## Creating Data Models from Text: Noun-Phrase Method

> **Definition:** The **Noun-Phrase Method** is a systematic technique for deriving UML class diagrams from natural-language requirements descriptions.

### Steps

1. **Identify noun phrases** in the system description → these are **candidate classes**
2. **Filter out** inappropriate candidates:
   - **Redundant** — same concept under different names
   - **Attributes** — properties of a class, not classes themselves
   - **Outside scope** — not part of the system under development
   - **Operations/events** — actions, not structural elements
   - **Vague** — too abstract to be a meaningful class
   - **Wrong level of detail** — too fine-grained or too coarse
3. **Identify verb phrases** → these suggest **operations** and/or **associations** between classes

> **Important:** The noun-phrase method provides a repeatable way to go from requirements text → candidate classes → UML class diagram. It is a starting point — domain knowledge and iteration are still needed to refine the model.

---

## Models vs. Diagrams

| Concept | Definition |
|---------|-----------|
| **(System) Model** | Contains **all** system elements and their relations; structured as a hierarchical tree |
| **Diagram** | Visualizes a **selection** of elements and relations; a graphical view of part of the model |

Key distinctions:

- One **model element** can appear in **many** diagrams
- A model element **not shown** in any diagram is **still part of the model**
- You can create a model **without any diagrams** at all — the model is the source of truth, diagrams are just views

---

## Model-Based Systems Engineering (MBSE)

> **Definition:** **MBSE** replaces document-centric engineering with a unified model that serves as the single source of truth for all system information.

### Document-Based vs. MBSE

| Aspect | Document-Based Engineering | MBSE |
|--------|---------------------------|------|
| **Artifact** | Document types and structure | Types, Relations, Traces |
| **Organization** | Separate specs (requirements, architecture, tests) managed by different people | Unified model with shared information architecture |
| **Consistency** | Manual cross-referencing between documents | Automatic traceability between elements |

### MBSE Benefits

- **Validate** requirements against the model
- **Analyze** impact of change across all related elements
- **Verify** design consistency automatically
- **Generate** artifacts (documents, code, test cases) from the model

> **Important:** All diagram types (use case, activity, class) live in **one model** — a change to a model element automatically propagates to every diagram that references it. This eliminates the inconsistency problem of document-based approaches.
