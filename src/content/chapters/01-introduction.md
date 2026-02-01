---
title: "Introduction"
chapter: 1
order: 1
description: "Why information matters, what information is, information systems, and information management"
---

## Part 1: Why Information Management Matters

Every organization depends on three fundamental resources (Picot, 1988):

1. **Materials** — the physical building blocks. Without raw materials, nothing can exist.
2. **Energy** — the driving force. Without energy, no process can run.
3. **Information** — the guiding intelligence. Without information, decisions cannot be made.

Information is what allows a company to coordinate its materials and energy effectively. This is why **Information Management** exists as a discipline — it treats information as a critical resource that must be planned, organized, and governed just like any other.

> **Key thesis:** The IT landscape grows more complex every year (AI, cloud, containerization, BYOD, etc.). Information Management provides the structure and strategy to handle this complexity.

---

## Part 2: What Is Information?

### The Information Hierarchy: Symbols → Data → Information → Knowledge

This is the foundational framework. Each level builds on the one below it:

| Level | Name | What It Is | Example |
|-------|------|-----------|---------|
| 1 | **Symbols** | Raw alphabet: characters, digits, signs `[a-Z, 0-9, +, -, %]` | `F`, `R`, `A`, `5`, `%` |
| 2 | **Data** | Symbols arranged by syntax (grammar rules) | `FRA:VOW3 +5%` |
| 3 | **Information** | Data placed into context with meaning (semantics) | "VW stock rose 5% on Frankfurt Exchange" |
| 4 | **Knowledge** | Information networked in a mind, enabling action (pragmatics) | "VW's e-mobility strategy is working — I should invest" |

**Transitions between levels:**

- **Symbols → Data:** governed by **Syntax** (grammar rules that determine valid expressions)
- **Data → Information:** governed by **Semantics** (meaning assigned through context)
- **Information → Knowledge:** governed by **Pragmatics** (actions and actors — what you do with the information)

> **Important:** Knowledge is subjective and lives inside a person's mind. It cannot be directly stored in a computer — only information and data can. What we call "knowledge bases" are really structured information that helps humans build knowledge.

### Properties of Information

Information behaves differently from physical goods:

| Property | Meaning |
|----------|---------|
| **Immaterial** | No physical form; not consumed through use |
| **Value-creating** | Provides direct benefits to whoever uses it |
| **Not a free good** | Costs money to produce, maintain, and distribute |
| **Context-dependent** | Value changes based on when/where it is used |
| **Adjustable in value** | Can be increased by filtering, combining, or enriching |
| **Has quality dimensions** | Measured by completeness, correctness, timeliness, relevance |
| **Easily copied** | Duplicated perfectly without quality loss |
| **Requires standardized encoding** | Must use agreed-upon formats (UTF-8, JSON, PDF) to be shared |
| **Transportable at the speed of light** | Once digital, travels globally almost instantly |

### Three Perspectives on Information

| Perspective | Core Idea | Focus |
|-------------|-----------|-------|
| **Information as a Process** | "I am being informed" — a dynamic act of communicating | The flow between sender and receiver |
| **Information as Knowledge** | "It's intangible, subjective, in my mind" — equated with personal understanding | Interpretation depends on prior knowledge |
| **Information as a Thing** | "It can be stored and retrieved" — a tangible, storable object (document, file, record) | Most relevant to IT systems |

### Shannon Information Theory

Shannon defined information as a **quantification of surprise**: the more unexpected a message, the more information it carries. Completely predictable = zero information.

**Self-information:** `I(x) = -log₂(P(x))`

Where `P(x)` is the probability of event x. Result is in **bits**.

**Entropy** — the average information across all possible events:

`H = -Σ(pᵢ · log₂(pᵢ))` for all events i

> **Practical meaning:** Entropy = minimum bits needed to perfectly compress the data. High entropy → high randomness → more bits. Low entropy → predictable → fewer bits.

### The Role of Context

Context fundamentally changes how data and information are interpreted. The same words can carry completely different meanings depending on context (e.g., violent-sounding statements that are actually about a video game).

**Five questions to evaluate any piece of information:**

- **How** was it created?
- **When** was it created?
- **For whom** was it created?
- **Who** created it?
- **Why** was it created?

> **Warning:** Data stripped of its context can be misleading or used to deceive. This is where ethical issues and room for manipulation arise.

---

## Part 3: Information Systems

### What Is an Information System?

> **Definition:** An Information System takes **data as input** and produces **information as output** — transforming raw data into something meaningful and actionable.

**Example:** A Warehouse Management System takes in customer orders, arrival records, and stocktaking results. It outputs: "Which goods need to be ordered?" — turning raw data into a decision-ready piece of information.

### Components of an Information System

An IS consists of two major parts:

1. **Human** — the people who use, operate, and make decisions based on the system
2. **Machine** — the technical side:
   - **Hardware** — physical servers, computers, network equipment
   - **Application** — the software layer:
     - **Data** — what the system stores and processes
     - **Processes** — workflows composed of:
       - **Functions** — individual operations (e.g., a database lookup)
       - **Connections** — logic linking functions (e.g., "if lookup returns >0 results → show results")

**Virtual hospital example:** Human = doctors who register expertise. Hardware = servers + clients. Application = "Search-for-Expert" with data (registered doctors), a search process, a DBMS lookup function, and a connection ("if results >0 → display").

---

## Part 4: Information Management

> **Definition:** Information Management oversees the investment in new information systems and the operation of existing ones. It requires diverse management skills to deliver the benefits of IS investments (Bytheway, 2003).

In simpler terms: IM is about **deciding which IT systems a company needs, building them, running them, and ensuring they deliver value**.

### Viewpoint 1: Task-Oriented

This viewpoint describes IM through four dimensions:

| Dimension | Contents |
|-----------|----------|
| **Goals** | Profit/cost reduction, IT strategy, service-orientation, HR development, change management |
| **Tasks** | IT strategy, IT architecture, service management, project management, controlling, license management, quality management, governance, security, risk, compliance |
| **Roles** | Translators (bridging business ↔ IT), project leads, point of contact, deciders |
| **Situations** | Communicate across all levels, indirect governance, broad topic span, "sandwich" position, goal conflicts |

### Viewpoint 2: Layer-Oriented

IM is structured into **three layers**. Each upper layer sends **requirements** downward; each lower layer provides **support** upward:

1. **Information Application** (top) — the business side: what information does the organization need?
2. **Information and Communication Systems** (middle) — the software: which applications process the information?
3. **Infrastructure** (bottom) — the hardware: storage, networks, servers that run everything

Each layer depends on the one below: business needs → system requirements → infrastructure decisions.

### Viewpoint 3: Consolidated (Krcmar Model)

The Krcmar model combines all perspectives into one framework:

**Overarching: Managing Information Management**
IT Strategy, IT Governance, IT Processes, IT HR, IT Controlling, IT Security

This block governs three managed areas:

| Managed Area | Scope | Audience |
|-------------|-------|----------|
| **Information Economy** | Demand, Supply, Usage | **IT Users** (IT is a tool) |
| **Information Systems** | Data, Processes, Application Life Cycle & Landscape | **IT Specialists** (IT is their work content) |
| **Information & Communication Technologies** | Storage, Processing, Communication, Tech Stacks | Supports the systems layer above |

### The CIO (Chief Information Officer)

| Aspect | Previously | Now |
|--------|-----------|-----|
| **Reports to** | CFO | CEO (often board member) |
| **Perceived as** | Cost factor, "head of data center" | Strategic driver of innovation |
| **Focus** | Back-office operations | Driving innovation across the company |

This shift reflects how IT moved from being a cost center to a strategic driver of business value.
