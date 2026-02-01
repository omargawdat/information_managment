---
title: "Management of Information Systems"
chapter: 3
order: 1
description: "Application life cycle, project vs. service, waterfall, V-Model, Agile, Scrum, Kanban, DevOps, DevSecOps, outsourcing, RE process facets, activity diagrams, UML class diagrams, data modeling, and MBSE"
---

## Three Fundamental SE Process Decisions

This chapter covers **Management of Information Systems** — specifically the Application Life Cycle within the Krcmar model. Every CIO faces three decisions:

| # | Decision | Options |
|---|----------|---------|
| 1 | **Project or Service** | One-time effort vs. ongoing operation |
| 2 | **Waterfall or Incremental-Iterative** | Sequential phases vs. repeated cycles |
| 3 | **Inhouse or Outsource** | Internal teams vs. external providers |

---

## Decision 1: Project vs. Service

> **Definition:** A **Project** (DIN69901) has a defined goal, a defined time span, and is usually run once. A **Service** has a defined goal, a defined target group, and runs indefinitely.

| Dimension | Project | Service |
|-----------|---------|---------|
| **Leadership** | Project Manager | Service Owner |
| **Time horizon** | Fixed (defined time span) | Indefinite (ongoing) |
| **Justification** | Needs re-justification every period | Justified by ongoing demand |
| **Strength** | Hypothesis testing, prototypes | Stability, continuous improvement |
| **Weakness** | Poor knowledge transfer | Less suited for exploratory work |

> **Important:** Projects and services are not mutually exclusive — organizations use projects to build capabilities, then transition them into services for ongoing operation.

---

## Decision 2: Waterfall vs. Incremental-Iterative

### Waterfall (Royce)

Sequential — each phase completes before the next begins:

**System Requirements → Software Requirements → Preliminary Design → Analysis → Program Design → Coding → Testing → Operations**

> **Important:** Royce's original model included feedback loops between adjacent phases. The "pure waterfall" with no feedback is a misinterpretation.

### The V-Model

Extends waterfall by pairing each construction phase with a corresponding test level. Test planning starts during the corresponding design phase, not after coding.

<div class="not-prose my-8 flex justify-center">
  <div class="w-full max-w-2xl">
    <div style="display:grid; grid-template-columns:1fr auto 1fr; grid-template-rows:repeat(5,auto); gap:0.25rem 0; align-items:center;" class="text-xs font-semibold">
      <div class="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 text-center">
        Requirements Definition
      </div>
      <div class="px-4 text-gray-400 dark:text-gray-500 text-center text-xs tracking-wider">· · · · · ·</div>
      <div class="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 text-center">
        Acceptance Test
      </div>
      <div class="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 text-center" style="margin-left:2rem;">
        Functional System Design
      </div>
      <div class="px-4 text-gray-400 dark:text-gray-500 text-center text-xs tracking-wider">· · · · ·</div>
      <div class="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 text-center" style="margin-right:2rem;">
        System Test
      </div>
      <div class="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 text-center" style="margin-left:4rem;">
        Technical System Design
      </div>
      <div class="px-4 text-gray-400 dark:text-gray-500 text-center text-xs tracking-wider">· · · ·</div>
      <div class="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 text-center" style="margin-right:4rem;">
        Integration Test
      </div>
      <div class="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 text-center" style="margin-left:6rem;">
        Components Specification
      </div>
      <div class="px-4 text-gray-400 dark:text-gray-500 text-center text-xs tracking-wider">· ·</div>
      <div class="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 text-center" style="margin-right:6rem;">
        Component Test
      </div>
      <div></div>
      <div class="px-4 py-2 rounded-lg border-2 border-gray-500 dark:border-gray-400 text-gray-800 dark:text-gray-100 text-center font-bold">
        Programming
      </div>
      <div></div>
    </div>
    <div class="mt-2 text-center text-xs text-gray-500 dark:text-gray-400">Left = Construction phases · Right = Testing phases · Each row is a matched pair</div>
  </div>
</div>

### Agile Development — The Agile Manifesto (2001)

Four core values — left is valued **more**, right is **not rejected**:

| Valued More | Over | Valued Less |
|-------------|------|-------------|
| **Individuals and interactions** | over | Processes and tools |
| **Working software** | over | Comprehensive documentation |
| **Customer collaboration** | over | Contract negotiation |
| **Responding to change** | over | Following a plan |

**12 Agile Principles (condensed):**

| # | Core Idea | # | Core Idea |
|---|-----------|---|-----------|
| 1 | Early, continuous delivery | 7 | Working software = progress |
| 2 | Welcome changing requirements | 8 | Sustainable pace |
| 3 | Deliver frequently (prefer short) | 9 | Technical excellence |
| 4 | Daily business-dev collaboration | 10 | Simplicity (maximize work not done) |
| 5 | Motivated individuals + trust | 11 | Self-organizing teams |
| 6 | Face-to-face communication | 12 | Regular reflection + adjustment |

### Scrum

**Scrum** organizes work into fixed-length **Sprints** (1–4 weeks):

| Category | Elements |
|----------|----------|
| **Roles** | Product Owner, Development Team, Scrum Master |
| **Artifacts** | Product Backlog, Sprint Backlog, Product Increment |
| **Events** | Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective |

**Flow:** Product Backlog → Sprint Planning → Daily Scrums → Sprint Review → Product Increment → Sprint Retrospective → next Sprint

### Kanban

> **Definition:** Kanban's core principle is that **limiting WIP (Work in Progress) increases throughput**. A Kanban board visualizes workflow as columns, each with a WIP limit.

Kanban suits process improvement and services — no prescribed roles or fixed iterations; work flows continuously. Originated at Toyota (1947); David J. Anderson adapted it for software.

---

## Decision 3: Inhouse vs. Outsource

> **Definition:** **Outsourcing** — paying another company to do part of your work. **Offshoring** — basing business in a different country for lower costs. **Nearshoring** — offshoring to geographically close locations.

| Expected Benefit | Achievement | Key Obstacle |
|-----------------|-------------|--------------|
| **Cost savings** | Non-achieved | Significant start-up overhead |
| **Capacity** | Partial | Communication problems, productivity gap |
| **Quality** | Non-achieved | Knowledge loss, perceived quality decrease |
| **Speed** | Non-achieved | Believed faster if kept onshore |
| **Innovation** | Partial | Failure to respond to acute problems |

> **Important:** Cost savings rarely materialize. Achieved benefits tend to be about **access to talent**, while tight-collaboration benefits (quality, speed, innovation) fall short.

---

## DevOps

> **Definition:** **DevOps** is a collaborative and multidisciplinary effort to automate continuous delivery of new software versions, while guaranteeing correctness and reliability (Leite et al., 2019).

**Dev:** Plan → Discover → Build → Test | **Ops:** Deploy → Operate → Observe | Wrapped in Continuous Feedback, Collaboration & Communication. DevOps is a cultural shift, not just tooling.

| Category | Goal | Key Concepts |
|----------|------|-------------|
| **Knowledge sharing** | Human collaboration | Culture, breaking down silos |
| **Source code management** | Continuous delivery | Versioning, sharing knowledge |
| **Build process** | Continuous delivery | Release engineering, test automation |
| **Continuous Integration** | Continuous delivery | CI pipeline, artifact management |
| **Deployment automation** | CD + Reliability | Infrastructure as code, containers, cloud |
| **Monitoring & Logging** | Reliability | "You built it, you run it", alerting |

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

> **Important:** Security is **shifted left** — starts at requirements and coding, catching vulnerabilities earlier when cheaper to fix.

---

## Requirements Engineering Process Facets

| Facet | Spectrum |
|-------|----------|
| **Time** | Linear ↔ Iterative |
| **Target** | Market-oriented ↔ Customer-specific |
| **Purpose** | Exploratory ↔ Prescriptive |

| RE Process Type | Time | Target | Purpose |
|----------------|------|--------|---------|
| **Product-oriented RE** | Iterative | Market-oriented | Exploratory |
| **Contractual RE** | Linear | Customer-specific | Prescriptive |
| **Participatory RE** | Iterative | Customer-specific | Both |

---

## Models and System Definition

> **Definition:** A **model** is an **abstraction** from reality with a **specific purpose**. Models filter out everything except what is relevant.

### Three Properties of Models (Stachowiak)

| Property | Meaning |
|----------|---------|
| **Mapping** | Models represent something in the real world |
| **Reduction** | Models leave out irrelevant details |
| **Pragmatics** | Models serve a specific purpose |

### System under Development (SuD)

| Property | Meaning |
|----------|---------|
| **Operational context** | Environment that influences or is influenced by the SuD |
| **Context boundary** | Separates relevant context from non-relevant environment |
| **Inner structure** | Related elements composing the system |
| **Interfaces** | Define the system boundary; where behavior is observable |
| **Behavior** | Observable at the interfaces |

> **Important:** System boundary (what is inside) vs. context boundary (what is relevant outside) is fundamental to scoping. Actors interact through interfaces — outside the system boundary but within the context boundary.

<div class="not-prose my-8 flex justify-center">
  <div class="w-full max-w-2xl">
    <div class="rounded-lg border border-gray-200 dark:border-gray-700 p-3" style="background:rgba(100,116,139,0.05);">
      <div class="text-xs text-gray-400 dark:text-gray-500 font-semibold mb-2 text-right">Non-relevant environment</div>
      <div class="rounded-lg border-2 border-dashed border-gray-400 dark:border-gray-500 p-3">
        <div class="text-xs text-gray-600 dark:text-gray-400 font-semibold mb-2">Context Boundary</div>
        <div class="flex items-center gap-3">
          <div class="flex flex-col gap-2">
            <div class="px-2 py-1.5 rounded border border-gray-300 dark:border-gray-600 text-xs font-semibold text-gray-700 dark:text-gray-200 text-center">Human</div>
            <div class="px-2 py-1.5 rounded border border-gray-300 dark:border-gray-600 text-xs font-semibold text-gray-700 dark:text-gray-200 text-center">Other System</div>
            <div class="px-2 py-1.5 rounded border border-gray-300 dark:border-gray-600 text-xs font-semibold text-gray-700 dark:text-gray-200 text-center">Process</div>
          </div>
          <div class="flex flex-col items-center gap-1">
            <div class="text-xs text-gray-500 dark:text-gray-400 font-bold">Interface</div>
            <div class="text-gray-400 dark:text-gray-500">→</div>
          </div>
          <div class="flex-1 rounded-lg border-2 border-gray-500 dark:border-gray-400 p-3">
            <div class="text-xs text-gray-600 dark:text-gray-400 font-semibold mb-2">System Boundary (SuD)</div>
            <div class="rounded border border-gray-300 dark:border-gray-600 p-2">
              <div class="text-xs text-gray-500 dark:text-gray-400 font-semibold mb-1">Inner Structure</div>
              <div class="flex gap-2">
                <div class="px-2 py-1 rounded border border-gray-300 dark:border-gray-600 text-xs text-gray-600 dark:text-gray-300">Element A</div>
                <div class="px-2 py-1 rounded border border-gray-300 dark:border-gray-600 text-xs text-gray-600 dark:text-gray-300">Element B</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-2 text-center text-xs text-gray-500 dark:text-gray-400">Dashed = context boundary · Solid = system boundary · Left boxes = actors</div>
  </div>
</div>

### Mental Models (Norman, 1983) and DDD (Evans, 2004)

> **Definition:** A **Mental Model** is an organized understanding and mental representation of knowledge about key elements of the system under consideration.

**Domain Driven Design** (Evans, 2004) emphasizes a **ubiquitous language** — shared terminology between developers and domain experts so code reflects the domain model directly. If stakeholders hold different mental models, misunderstandings and defects follow.

### Modeling Dimensions

| Dimension | Question | Options |
|-----------|----------|---------|
| **Modeling Object** | What is modeled? | **Domain Model** (real-world concepts only) vs. **System Model** (includes implementation concepts) |
| **Modeling Purpose** | What is it for? | **Conceptual Model** (understandability) vs. **Specification Model** (formal precision, code generation) |

> **Important:** A conceptual model prioritizes shared understanding; a specification model prioritizes formal precision. Both can be either domain or system models.

---

## UML Overview

**UML** was created by Booch, Jacobson, and Rumbaugh ("Three Amigos"), defined by the **Object Management Group (OMG)**.

| Category | Questions It Answers |
|----------|---------------------|
| **Structure Diagrams** | What elements make up the system? Interfaces? Configurations? |
| **Behavior Diagrams** | Which actors/use cases? Input/output behavior? States and transitions? |

### Use Case Diagrams

| Element | Notation | Meaning |
|---------|----------|---------|
| **Actor** | Stick figure or rectangle | A role that interacts with the system |
| **Use Case** | Oval/ellipse | A functionality the system provides |
| **System Boundary** | Rectangle enclosing use cases | Inside vs. outside the system |
| **Association** | Solid line | Actor participates in a use case |
| **Include** | Dashed arrow \<\<include\>\> | Mandatory sub-behavior always included |

### Cockburn Template (Detailed Use Cases)

| Field | Purpose |
|-------|---------|
| **Use Case Name** | Short descriptive name |
| **Goal in Context** | User story: "As a [role], I want [action], so that [benefit]" |
| **Precondition** | What must be true before the use case starts |
| **Success End Condition** | What is true when the use case succeeds |
| **Failed End Condition** | What happens on failure |
| **Main Success Scenario** | Numbered steps for the happy path |
| **Alternatives** | Variations branching from specific steps |

---

## UML Activity Diagrams

> **Definition:** An **activity** specifies an input-to-output transformation via a sequence of **actions**. Activity diagrams visualize workflows, business processes, and use case steps.

| Element | Notation | Meaning |
|---------|----------|---------|
| **Action** | Rounded rectangle | A single step |
| **Initial node** | Filled circle | Start |
| **Final node** | Circled filled circle | End |
| **Decision / Merge** | Diamond | One outgoing edge taken (guard condition) |
| **Fork / Join** | Thick bar | All outgoing edges (parallel execution) |
| **Swimlanes** | Partitions | Who executes which action |
| **Object flow** | Dashed arrow with object | Data passed between actions |

> **Important:** Decision nodes use **guard conditions** (boolean in square brackets) to choose the path. Swimlanes show which actor performs each action.

---

## UML Class Diagrams

Class diagrams show classes, attributes, operations, and relationships.

### Classes and Objects

A **class** is a generalized type; an **object** is a concrete instance. UML class = three-compartment rectangle:

| Compartment | Content | Syntax |
|-------------|---------|--------|
| **Name** | Class name (bold, centered) | `ClassName` |
| **Attributes** | Data the class holds | `<visibility> <name> : <type>` |
| **Operations** | Behavior the class provides | `<visibility> <name>(<params>) : <returnType>` |

### Associations and Multiplicities

> **Definition:** An **association** connects classes, indicating their instances can be linked. A **link** is a concrete instance of an association.

**Rolenames** label each end, describing the role an object plays.

| Notation | Meaning |
|----------|---------|
| `0..1` | Optional (zero or one) |
| `1` | Exactly one |
| `*` or `0..*` | Zero or more |
| `1..*` | One or more |
| `n..m` | At least n, at most m |

> **Important:** Multiplicities map to code — `*` → array/list, `1` → mandatory reference, `0..1` → nullable/optional.

### Generalization (Inheritance)

- **Subtype** inherits all supertype attributes and associations (IS-A relationship)
- Subtype-specific associations apply only to that subtype
- **Notation:** hollow triangle arrow from subtype → supertype

### Visibility

| Symbol | Name | Accessible From |
|--------|------|----------------|
| `+` | Public | All classes with access to this package |
| `~` | Package | Only inside this package |
| `#` | Protected | This class and all subclasses |
| `-` | Private | Only this class |

### Packages

> **Definition:** **Packages** define named regions that group related model elements — similar to folders. A class's fully qualified name includes its package path.

---

## Noun-Phrase Method (Text → Class Diagram)

> **Definition:** The **Noun-Phrase Method** derives UML class diagrams from natural-language requirements.

1. **Identify noun phrases** → candidate classes
2. **Filter out** inappropriate candidates: redundant, attributes, outside scope, operations/events, vague, wrong detail level
3. **Identify verb phrases** → operations and/or associations

---

## Models vs. Diagrams

| Concept | Definition |
|---------|-----------|
| **Model** | Contains **all** system elements and relations; the source of truth |
| **Diagram** | Visualizes a **selection** of elements; a graphical view of part of the model |

One element can appear in many diagrams. An element not shown in any diagram is still part of the model. You can have a model without any diagrams.

---

## Model-Based Systems Engineering (MBSE)

> **Definition:** **MBSE** replaces document-centric engineering with a unified model as the single source of truth.

| Aspect | Document-Based | MBSE |
|--------|---------------|------|
| **Artifact** | Document types and structure | Types, Relations, Traces |
| **Organization** | Separate specs by different people | Unified model with shared architecture |
| **Consistency** | Manual cross-referencing | Automatic traceability |

MBSE enables: **validate** requirements, **analyze** change impact, **verify** consistency, **generate** artifacts (docs, code, tests) from the model.

> **Important:** All diagram types live in **one model** — a change to a model element propagates to every diagram referencing it, eliminating document-based inconsistency.
