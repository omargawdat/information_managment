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

<div class="not-prose flex justify-center my-6">
  <div class="flex flex-col items-center gap-0">
    <!-- Symbols -->
    <div class="w-48 py-2.5 rounded-lg bg-sky-100 dark:bg-sky-900/40 border border-sky-300 dark:border-sky-700 text-center text-sm font-semibold text-sky-900 dark:text-sky-100">
      Symbols
    </div>
    <!-- Arrow + Label: Syntax -->
    <div class="flex flex-col items-center">
      <div class="w-0.5 h-4 bg-sky-400 dark:bg-sky-500"></div>
      <div class="px-2.5 py-0.5 rounded-full bg-sky-50 dark:bg-sky-900/60 border border-sky-200 dark:border-sky-700 text-xs font-medium text-sky-700 dark:text-sky-300">Syntax</div>
      <div class="w-0.5 h-4 bg-sky-400 dark:bg-sky-500"></div>
      <svg class="w-3 h-2 text-sky-400 dark:text-sky-500" viewBox="0 0 12 8" fill="currentColor"><polygon points="6,8 0,0 12,0"/></svg>
    </div>
    <!-- Data -->
    <div class="w-48 py-2.5 rounded-lg bg-sky-200 dark:bg-sky-800/50 border border-sky-400 dark:border-sky-600 text-center text-sm font-semibold text-sky-900 dark:text-sky-100">
      Data
    </div>
    <!-- Arrow + Label: Semantics -->
    <div class="flex flex-col items-center">
      <div class="w-0.5 h-4 bg-sky-400 dark:bg-sky-500"></div>
      <div class="px-2.5 py-0.5 rounded-full bg-sky-50 dark:bg-sky-900/60 border border-sky-200 dark:border-sky-700 text-xs font-medium text-sky-700 dark:text-sky-300">Semantics</div>
      <div class="w-0.5 h-4 bg-sky-400 dark:bg-sky-500"></div>
      <svg class="w-3 h-2 text-sky-400 dark:text-sky-500" viewBox="0 0 12 8" fill="currentColor"><polygon points="6,8 0,0 12,0"/></svg>
    </div>
    <!-- Information -->
    <div class="w-48 py-2.5 rounded-lg bg-sky-300 dark:bg-sky-700/60 border border-sky-500 dark:border-sky-500 text-center text-sm font-semibold text-sky-900 dark:text-sky-100">
      Information
    </div>
    <!-- Arrow + Label: Pragmatics -->
    <div class="flex flex-col items-center">
      <div class="w-0.5 h-4 bg-sky-400 dark:bg-sky-500"></div>
      <div class="px-2.5 py-0.5 rounded-full bg-sky-50 dark:bg-sky-900/60 border border-sky-200 dark:border-sky-700 text-xs font-medium text-sky-700 dark:text-sky-300">Pragmatics</div>
      <div class="w-0.5 h-4 bg-sky-400 dark:bg-sky-500"></div>
      <svg class="w-3 h-2 text-sky-400 dark:text-sky-500" viewBox="0 0 12 8" fill="currentColor"><polygon points="6,8 0,0 12,0"/></svg>
    </div>
    <!-- Knowledge -->
    <div class="w-48 py-2.5 rounded-lg bg-sky-500 dark:bg-sky-600 border border-sky-600 dark:border-sky-400 text-center text-sm font-semibold text-white">
      Knowledge
    </div>
  </div>
</div>

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

<div class="not-prose my-6 overflow-x-auto">
  <div class="min-w-[500px] flex flex-col items-center gap-0">
    <!-- Root: Information System -->
    <div class="px-5 py-2.5 rounded-lg bg-sky-500 dark:bg-sky-600 border border-sky-600 dark:border-sky-400 text-sm font-semibold text-white text-center">
      Information System
    </div>
    <!-- Connector down -->
    <div class="w-0.5 h-5 bg-sky-400 dark:bg-sky-500"></div>
    <!-- Horizontal bar -->
    <div class="w-64 h-0.5 bg-sky-400 dark:bg-sky-500"></div>
    <!-- Level 2: Human + Machine -->
    <div class="flex items-start gap-0 w-64">
      <!-- Human branch -->
      <div class="flex flex-col items-center flex-1">
        <div class="w-0.5 h-5 bg-sky-400 dark:bg-sky-500"></div>
        <svg class="w-3 h-2 text-sky-400 dark:text-sky-500" viewBox="0 0 12 8" fill="currentColor"><polygon points="6,8 0,0 12,0"/></svg>
        <div class="px-4 py-2 rounded-lg bg-sky-300 dark:bg-sky-700/60 border border-sky-400 dark:border-sky-500 text-sm font-semibold text-sky-900 dark:text-sky-100 text-center">
          Human
        </div>
      </div>
      <!-- Machine branch -->
      <div class="flex flex-col items-center flex-1">
        <div class="w-0.5 h-5 bg-sky-400 dark:bg-sky-500"></div>
        <svg class="w-3 h-2 text-sky-400 dark:text-sky-500" viewBox="0 0 12 8" fill="currentColor"><polygon points="6,8 0,0 12,0"/></svg>
        <div class="px-4 py-2 rounded-lg bg-sky-300 dark:bg-sky-700/60 border border-sky-400 dark:border-sky-500 text-sm font-semibold text-sky-900 dark:text-sky-100 text-center">
          Machine
        </div>
        <!-- Connector down from Machine -->
        <div class="w-0.5 h-5 bg-sky-400 dark:bg-sky-500"></div>
        <!-- Horizontal bar for Hardware + Application -->
        <div class="w-48 h-0.5 bg-sky-400 dark:bg-sky-500"></div>
        <div class="flex items-start gap-0 w-48">
          <!-- Hardware -->
          <div class="flex flex-col items-center flex-1">
            <div class="w-0.5 h-5 bg-sky-400 dark:bg-sky-500"></div>
            <svg class="w-3 h-2 text-sky-400 dark:text-sky-500" viewBox="0 0 12 8" fill="currentColor"><polygon points="6,8 0,0 12,0"/></svg>
            <div class="px-3 py-2 rounded-lg bg-sky-200 dark:bg-sky-800/50 border border-sky-300 dark:border-sky-600 text-xs font-semibold text-sky-900 dark:text-sky-100 text-center">
              Hardware
            </div>
          </div>
          <!-- Application -->
          <div class="flex flex-col items-center flex-1">
            <div class="w-0.5 h-5 bg-sky-400 dark:bg-sky-500"></div>
            <svg class="w-3 h-2 text-sky-400 dark:text-sky-500" viewBox="0 0 12 8" fill="currentColor"><polygon points="6,8 0,0 12,0"/></svg>
            <div class="px-3 py-2 rounded-lg bg-sky-200 dark:bg-sky-800/50 border border-sky-300 dark:border-sky-600 text-xs font-semibold text-sky-900 dark:text-sky-100 text-center">
              Application
            </div>
            <!-- Connector down from Application -->
            <div class="w-0.5 h-5 bg-sky-400 dark:bg-sky-500"></div>
            <!-- Horizontal bar for Data + Processes -->
            <div class="w-40 h-0.5 bg-sky-400 dark:bg-sky-500"></div>
            <div class="flex items-start gap-0 w-40">
              <!-- Data -->
              <div class="flex flex-col items-center flex-1">
                <div class="w-0.5 h-5 bg-sky-400 dark:bg-sky-500"></div>
                <svg class="w-3 h-2 text-sky-400 dark:text-sky-500" viewBox="0 0 12 8" fill="currentColor"><polygon points="6,8 0,0 12,0"/></svg>
                <div class="px-3 py-1.5 rounded-lg bg-sky-100 dark:bg-sky-900/40 border border-sky-200 dark:border-sky-700 text-xs font-medium text-sky-800 dark:text-sky-200 text-center">
                  Data
                </div>
              </div>
              <!-- Processes -->
              <div class="flex flex-col items-center flex-1">
                <div class="w-0.5 h-5 bg-sky-400 dark:bg-sky-500"></div>
                <svg class="w-3 h-2 text-sky-400 dark:text-sky-500" viewBox="0 0 12 8" fill="currentColor"><polygon points="6,8 0,0 12,0"/></svg>
                <div class="px-3 py-1.5 rounded-lg bg-sky-100 dark:bg-sky-900/40 border border-sky-200 dark:border-sky-700 text-xs font-medium text-sky-800 dark:text-sky-200 text-center">
                  Processes
                </div>
                <!-- Connector down from Processes -->
                <div class="w-0.5 h-4 bg-sky-400 dark:bg-sky-500"></div>
                <!-- Horizontal bar for Functions + Connections -->
                <div class="w-32 h-0.5 bg-sky-400 dark:bg-sky-500"></div>
                <div class="flex items-start gap-0 w-32">
                  <!-- Functions -->
                  <div class="flex flex-col items-center flex-1">
                    <div class="w-0.5 h-4 bg-sky-400 dark:bg-sky-500"></div>
                    <svg class="w-3 h-2 text-sky-400 dark:text-sky-500" viewBox="0 0 12 8" fill="currentColor"><polygon points="6,8 0,0 12,0"/></svg>
                    <div class="px-2 py-1 rounded bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 text-[11px] font-medium text-sky-700 dark:text-sky-300 text-center">
                      Functions
                    </div>
                  </div>
                  <!-- Connections -->
                  <div class="flex flex-col items-center flex-1">
                    <div class="w-0.5 h-4 bg-sky-400 dark:bg-sky-500"></div>
                    <svg class="w-3 h-2 text-sky-400 dark:text-sky-500" viewBox="0 0 12 8" fill="currentColor"><polygon points="6,8 0,0 12,0"/></svg>
                    <div class="px-2 py-1 rounded bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 text-[11px] font-medium text-sky-700 dark:text-sky-300 text-center">
                      Connections
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

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

<div class="not-prose my-6 flex justify-center">
  <div class="max-w-lg w-full flex items-stretch gap-3">
    <!-- Left: Requirements arrow (down) -->
    <div class="flex flex-col items-center justify-between py-4">
      <span class="text-xs font-semibold text-amber-700 dark:text-amber-400 writing-mode-vertical rotate-180" style="writing-mode: vertical-rl; transform: rotate(180deg);">Requirements</span>
      <div class="flex-1 w-0.5 bg-amber-400 dark:bg-amber-500 my-1"></div>
      <svg class="w-3 h-2 text-amber-400 dark:text-amber-500" viewBox="0 0 12 8" fill="currentColor"><polygon points="6,8 0,0 12,0"/></svg>
    </div>
    <!-- Center: Layer cards -->
    <div class="flex-1 flex flex-col gap-3">
      <!-- Layer 1: Information Application -->
      <div class="rounded-lg bg-sky-100 dark:bg-sky-900/40 border border-sky-300 dark:border-sky-700 px-4 py-3">
        <div class="text-sm font-semibold text-sky-900 dark:text-sky-100">Information Application</div>
        <div class="text-xs text-sky-700 dark:text-sky-300 mt-0.5">What information does the organization need?</div>
      </div>
      <!-- Layer 2: Information & Communication Systems -->
      <div class="rounded-lg bg-sky-200 dark:bg-sky-800/50 border border-sky-400 dark:border-sky-600 px-4 py-3">
        <div class="text-sm font-semibold text-sky-900 dark:text-sky-100">Information & Communication Systems</div>
        <div class="text-xs text-sky-700 dark:text-sky-300 mt-0.5">Which applications process the information?</div>
      </div>
      <!-- Layer 3: Infrastructure -->
      <div class="rounded-lg bg-sky-300 dark:bg-sky-700/60 border border-sky-500 dark:border-sky-500 px-4 py-3">
        <div class="text-sm font-semibold text-sky-900 dark:text-sky-100">Infrastructure</div>
        <div class="text-xs text-sky-700 dark:text-sky-300 mt-0.5">Storage, networks, servers that run everything</div>
      </div>
    </div>
    <!-- Right: Support arrow (up) -->
    <div class="flex flex-col items-center justify-between py-4">
      <svg class="w-3 h-2 text-green-500 dark:text-green-400 rotate-180" viewBox="0 0 12 8" fill="currentColor"><polygon points="6,8 0,0 12,0"/></svg>
      <div class="flex-1 w-0.5 bg-green-400 dark:bg-green-500 my-1"></div>
      <span class="text-xs font-semibold text-green-700 dark:text-green-400" style="writing-mode: vertical-rl;">Support</span>
    </div>
  </div>
</div>

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

<div class="not-prose my-6 flex justify-center">
  <div class="max-w-2xl w-full flex flex-col items-center gap-0">
    <!-- Governance block -->
    <div class="w-full rounded-lg border-2 border-sky-500 dark:border-sky-400 bg-sky-50 dark:bg-sky-900/30 p-4">
      <div class="text-sm font-bold text-sky-900 dark:text-sky-100 text-center mb-3">Managing Information Management</div>
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
        <div class="px-3 py-1.5 rounded bg-sky-100 dark:bg-sky-800/60 border border-sky-300 dark:border-sky-600 text-xs font-medium text-sky-800 dark:text-sky-200 text-center">IT Strategy</div>
        <div class="px-3 py-1.5 rounded bg-sky-100 dark:bg-sky-800/60 border border-sky-300 dark:border-sky-600 text-xs font-medium text-sky-800 dark:text-sky-200 text-center">IT Governance</div>
        <div class="px-3 py-1.5 rounded bg-sky-100 dark:bg-sky-800/60 border border-sky-300 dark:border-sky-600 text-xs font-medium text-sky-800 dark:text-sky-200 text-center">IT Processes</div>
        <div class="px-3 py-1.5 rounded bg-sky-100 dark:bg-sky-800/60 border border-sky-300 dark:border-sky-600 text-xs font-medium text-sky-800 dark:text-sky-200 text-center">IT HR</div>
        <div class="px-3 py-1.5 rounded bg-sky-100 dark:bg-sky-800/60 border border-sky-300 dark:border-sky-600 text-xs font-medium text-sky-800 dark:text-sky-200 text-center">IT Controlling</div>
        <div class="px-3 py-1.5 rounded bg-sky-100 dark:bg-sky-800/60 border border-sky-300 dark:border-sky-600 text-xs font-medium text-sky-800 dark:text-sky-200 text-center">IT Security</div>
      </div>
    </div>
    <!-- Three connector lines -->
    <div class="flex w-full max-w-md justify-around">
      <div class="flex flex-col items-center">
        <div class="w-0.5 h-6 bg-sky-400 dark:bg-sky-500"></div>
        <svg class="w-3 h-2 text-sky-400 dark:text-sky-500" viewBox="0 0 12 8" fill="currentColor"><polygon points="6,8 0,0 12,0"/></svg>
      </div>
      <div class="flex flex-col items-center">
        <div class="w-0.5 h-6 bg-sky-400 dark:bg-sky-500"></div>
        <svg class="w-3 h-2 text-sky-400 dark:text-sky-500" viewBox="0 0 12 8" fill="currentColor"><polygon points="6,8 0,0 12,0"/></svg>
      </div>
      <div class="flex flex-col items-center">
        <div class="w-0.5 h-6 bg-sky-400 dark:bg-sky-500"></div>
        <svg class="w-3 h-2 text-sky-400 dark:text-sky-500" viewBox="0 0 12 8" fill="currentColor"><polygon points="6,8 0,0 12,0"/></svg>
      </div>
    </div>
    <!-- Three managed areas -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
      <!-- Information Economy -->
      <div class="rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-300 dark:border-amber-700 p-3">
        <div class="text-sm font-semibold text-amber-900 dark:text-amber-200 text-center">Information Economy</div>
        <div class="text-xs text-amber-700 dark:text-amber-400 text-center mt-1">Demand, Supply, Usage</div>
        <div class="text-[10px] text-amber-600 dark:text-amber-500 text-center mt-1 italic">IT Users</div>
      </div>
      <!-- Information Systems -->
      <div class="rounded-lg bg-sky-50 dark:bg-sky-900/20 border border-sky-300 dark:border-sky-700 p-3">
        <div class="text-sm font-semibold text-sky-900 dark:text-sky-200 text-center">Information Systems</div>
        <div class="text-xs text-sky-700 dark:text-sky-400 text-center mt-1">Data, Processes, Lifecycle</div>
        <div class="text-[10px] text-sky-600 dark:text-sky-500 text-center mt-1 italic">IT Specialists</div>
      </div>
      <!-- ICT -->
      <div class="rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-300 dark:border-green-700 p-3">
        <div class="text-sm font-semibold text-green-900 dark:text-green-200 text-center">ICT</div>
        <div class="text-xs text-green-700 dark:text-green-400 text-center mt-1">Storage, Processing, Comms</div>
        <div class="text-[10px] text-green-600 dark:text-green-500 text-center mt-1 italic">Supports IS layer</div>
      </div>
    </div>
    <!-- ICT supports IS label -->
    <div class="flex items-center gap-2 mt-2">
      <div class="w-8 border-t border-dashed border-green-400 dark:border-green-500"></div>
      <span class="text-[10px] text-green-600 dark:text-green-400 font-medium">ICT supports IS</span>
      <svg class="w-2.5 h-2 text-green-500 dark:text-green-400 -rotate-90" viewBox="0 0 12 8" fill="currentColor"><polygon points="6,8 0,0 12,0"/></svg>
    </div>
  </div>
</div>

### The CIO (Chief Information Officer)

| Aspect | Previously | Now |
|--------|-----------|-----|
| **Reports to** | CFO | CEO (often board member) |
| **Perceived as** | Cost factor, "head of data center" | Strategic driver of innovation |
| **Focus** | Back-office operations | Driving innovation across the company |

This shift reflects how IT moved from being a cost center to a strategic driver of business value.
