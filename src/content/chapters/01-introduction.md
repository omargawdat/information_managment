---
title: "Introduction"
chapter: 1
order: 1
description: "Why information matters, what information is, information systems, and information management"
---

## Three Fundamental Resources (Picot, 1988)

Every organization depends on **Materials** (physical building blocks), **Energy** (driving force), and **Information** (guiding intelligence for decisions). Information Management exists because information is a critical resource requiring planning and governance — just like materials and energy.

---

## What Is Information?

### The Information Hierarchy

Each level builds on the one below, connected by a governing principle:

| Level | Name | Governed By | Example |
|-------|------|-------------|---------|
| 1 | **Symbols** | — | `F`, `R`, `5`, `%` |
| 2 | **Data** | **Syntax** (grammar rules) | `FRA:VOW3 +5%` |
| 3 | **Information** | **Semantics** (meaning via context) | "VW stock rose 5% on Frankfurt Exchange" |
| 4 | **Knowledge** | **Pragmatics** (action-enabling) | "VW's strategy works — I should invest" |

<div class="not-prose flex justify-center my-6">
  <div class="flex flex-col items-center gap-0">
    <div class="px-5 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-center text-sm font-semibold text-gray-800 dark:text-gray-100" style="width:12rem;">Symbols</div>
    <div class="flex flex-col items-center">
      <div style="width:2px; height:0.75rem;" class="bg-gray-400 dark:bg-gray-500"></div>
      <div class="px-2.5 py-0.5 rounded-full border border-gray-300 dark:border-gray-600 text-xs font-medium text-gray-600 dark:text-gray-300">Syntax</div>
      <div style="width:2px; height:0.75rem;" class="bg-gray-400 dark:bg-gray-500"></div>
      <div class="text-gray-400 dark:text-gray-500">↓</div>
    </div>
    <div class="px-5 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-center text-sm font-semibold text-gray-800 dark:text-gray-100" style="width:12rem;">Data</div>
    <div class="flex flex-col items-center">
      <div style="width:2px; height:0.75rem;" class="bg-gray-400 dark:bg-gray-500"></div>
      <div class="px-2.5 py-0.5 rounded-full border border-gray-300 dark:border-gray-600 text-xs font-medium text-gray-600 dark:text-gray-300">Semantics</div>
      <div style="width:2px; height:0.75rem;" class="bg-gray-400 dark:bg-gray-500"></div>
      <div class="text-gray-400 dark:text-gray-500">↓</div>
    </div>
    <div class="px-5 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-center text-sm font-semibold text-gray-800 dark:text-gray-100" style="width:12rem;">Information</div>
    <div class="flex flex-col items-center">
      <div style="width:2px; height:0.75rem;" class="bg-gray-400 dark:bg-gray-500"></div>
      <div class="px-2.5 py-0.5 rounded-full border border-gray-300 dark:border-gray-600 text-xs font-medium text-gray-600 dark:text-gray-300">Pragmatics</div>
      <div style="width:2px; height:0.75rem;" class="bg-gray-400 dark:bg-gray-500"></div>
      <div class="text-gray-400 dark:text-gray-500">↓</div>
    </div>
    <div class="px-5 py-2 rounded-lg border-2 border-gray-500 dark:border-gray-400 text-center text-sm font-bold text-gray-800 dark:text-gray-100" style="width:12rem;">Knowledge</div>
  </div>
</div>

> **Important:** Knowledge is subjective and lives inside a person's mind — it cannot be stored in a computer. Only data and information can. "Knowledge bases" are really structured information that helps humans build knowledge.

### Properties of Information

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
| **Transportable at speed of light** | Once digital, travels globally almost instantly |

### Three Perspectives on Information

| Perspective | Core Idea | Most Relevant To |
|-------------|-----------|-------------------|
| **As a Process** | "I am being informed" — a dynamic act of communicating | Sender–receiver flow |
| **As Knowledge** | Intangible, subjective, in a person's mind | Interpretation & prior knowledge |
| **As a Thing** | Can be stored and retrieved (document, file, record) | IT systems |

### Shannon Information Theory

Shannon defined information as a **quantification of surprise**: the more unexpected a message, the more information it carries. Completely predictable = zero information.

**Self-information:** `I(x) = -log₂(P(x))` — result in **bits**

**Entropy:** `H = -Σ(pᵢ · log₂(pᵢ))` — average information across all possible events

> **Definition:** Entropy = minimum bits needed to perfectly compress data. High entropy → high randomness → more bits needed. Low entropy → predictable → fewer bits.

### The Role of Context

Context fundamentally changes how data is interpreted. Five questions to evaluate any piece of information: **How** was it created? **When?** **For whom?** **Who** created it? **Why?**

> **Important:** Data stripped of its context can be misleading or used to deceive.

---

## Information Systems

> **Definition:** An **Information System** takes **data as input** and produces **information as output** — transforming raw data into something meaningful and actionable.

### Components of an Information System

An IS consists of **Human** (users, operators, decision-makers) and **Machine** (Hardware + Application). The Application layer contains **Data** and **Processes**, where processes are composed of **Functions** (individual operations) and **Connections** (logic linking functions).

<div class="not-prose my-8 flex justify-center">
  <div class="flex flex-col items-center gap-0">
    <div class="px-5 py-2 rounded-lg border-2 border-gray-500 dark:border-gray-400 text-sm font-bold text-gray-800 dark:text-gray-100 text-center" style="width:14rem;">Information System</div>
    <div style="width:2px; height:1.25rem;" class="bg-gray-400 dark:bg-gray-500"></div>
    <div style="width:16rem; height:2px;" class="bg-gray-400 dark:bg-gray-500"></div>
    <div style="width:16rem;" class="flex items-start gap-0">
      <div class="flex flex-col items-center flex-1">
        <div style="width:2px; height:1rem;" class="bg-gray-400 dark:bg-gray-500"></div>
        <div class="text-gray-400 dark:text-gray-500">↓</div>
        <div class="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-sm font-semibold text-gray-800 dark:text-gray-100 text-center">Human</div>
      </div>
      <div class="flex flex-col items-center flex-1">
        <div style="width:2px; height:1rem;" class="bg-gray-400 dark:bg-gray-500"></div>
        <div class="text-gray-400 dark:text-gray-500">↓</div>
        <div class="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-sm font-semibold text-gray-800 dark:text-gray-100 text-center">Machine</div>
        <div style="width:2px; height:1rem;" class="bg-gray-400 dark:bg-gray-500"></div>
        <div style="width:12rem; height:2px;" class="bg-gray-400 dark:bg-gray-500"></div>
        <div style="width:12rem;" class="flex items-start gap-0">
          <div class="flex flex-col items-center flex-1">
            <div style="width:2px; height:1rem;" class="bg-gray-400 dark:bg-gray-500"></div>
            <div class="text-gray-400 dark:text-gray-500 text-xs">↓</div>
            <div class="px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-600 text-xs font-semibold text-gray-800 dark:text-gray-100 text-center">Hardware</div>
          </div>
          <div class="flex flex-col items-center flex-1">
            <div style="width:2px; height:1rem;" class="bg-gray-400 dark:bg-gray-500"></div>
            <div class="text-gray-400 dark:text-gray-500 text-xs">↓</div>
            <div class="px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-600 text-xs font-semibold text-gray-800 dark:text-gray-100 text-center">Application</div>
            <div style="width:2px; height:1rem;" class="bg-gray-400 dark:bg-gray-500"></div>
            <div style="width:10rem; height:2px;" class="bg-gray-400 dark:bg-gray-500"></div>
            <div style="width:10rem;" class="flex items-start gap-0">
              <div class="flex flex-col items-center flex-1">
                <div style="width:2px; height:0.75rem;" class="bg-gray-400 dark:bg-gray-500"></div>
                <div class="text-gray-400 dark:text-gray-500 text-xs">↓</div>
                <div class="px-2 py-1 rounded-lg border border-gray-300 dark:border-gray-600 text-xs font-medium text-gray-700 dark:text-gray-200 text-center">Data</div>
              </div>
              <div class="flex flex-col items-center flex-1">
                <div style="width:2px; height:0.75rem;" class="bg-gray-400 dark:bg-gray-500"></div>
                <div class="text-gray-400 dark:text-gray-500 text-xs">↓</div>
                <div class="px-2 py-1 rounded-lg border border-gray-300 dark:border-gray-600 text-xs font-medium text-gray-700 dark:text-gray-200 text-center">Processes</div>
                <div style="width:2px; height:0.75rem;" class="bg-gray-400 dark:bg-gray-500"></div>
                <div style="width:8rem; height:2px;" class="bg-gray-400 dark:bg-gray-500"></div>
                <div style="width:8rem;" class="flex items-start gap-0">
                  <div class="flex flex-col items-center flex-1">
                    <div style="width:2px; height:0.75rem;" class="bg-gray-400 dark:bg-gray-500"></div>
                    <div class="text-gray-400 dark:text-gray-500 text-xs">↓</div>
                    <div class="px-2 py-1 rounded border border-gray-300 dark:border-gray-600 text-xs font-medium text-gray-600 dark:text-gray-300 text-center">Functions</div>
                  </div>
                  <div class="flex flex-col items-center flex-1">
                    <div style="width:2px; height:0.75rem;" class="bg-gray-400 dark:bg-gray-500"></div>
                    <div class="text-gray-400 dark:text-gray-500 text-xs">↓</div>
                    <div class="px-2 py-1 rounded border border-gray-300 dark:border-gray-600 text-xs font-medium text-gray-600 dark:text-gray-300 text-center">Connections</div>
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

---

## Information Management

> **Definition:** Information Management oversees the investment in new information systems and the operation of existing ones. It requires diverse management skills to deliver the benefits of IS investments (Bytheway, 2003).

### Viewpoint 1: Task-Oriented

| Dimension | Contents |
|-----------|----------|
| **Goals** | Profit/cost reduction, IT strategy, service-orientation, HR development, change management |
| **Tasks** | IT strategy, architecture, service/project management, controlling, governance, security, compliance |
| **Roles** | Translators (business ↔ IT), project leads, deciders |
| **Situations** | Communicate across all levels, indirect governance, "sandwich" position, goal conflicts |

### Viewpoint 2: Layer-Oriented

Three layers where upper layers send **requirements** downward and lower layers provide **support** upward:

<div class="not-prose my-6 flex justify-center">
  <div class="max-w-lg w-full flex items-stretch gap-3">
    <div class="flex flex-col items-center justify-between py-4">
      <span class="text-xs font-semibold text-gray-500 dark:text-gray-400" style="writing-mode: vertical-rl; transform: rotate(180deg);">Requirements ↓</span>
    </div>
    <div class="flex-1 flex flex-col gap-3">
      <div class="rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-3">
        <div class="text-sm font-semibold text-gray-800 dark:text-gray-100">Information Application</div>
        <div class="text-xs text-gray-600 dark:text-gray-400 mt-0.5">What information does the organization need?</div>
      </div>
      <div class="rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-3">
        <div class="text-sm font-semibold text-gray-800 dark:text-gray-100">Information & Communication Systems</div>
        <div class="text-xs text-gray-600 dark:text-gray-400 mt-0.5">Which applications process the information?</div>
      </div>
      <div class="rounded-lg border border-gray-300 dark:border-gray-600 px-4 py-3">
        <div class="text-sm font-semibold text-gray-800 dark:text-gray-100">Infrastructure</div>
        <div class="text-xs text-gray-600 dark:text-gray-400 mt-0.5">Storage, networks, servers</div>
      </div>
    </div>
    <div class="flex flex-col items-center justify-between py-4">
      <span class="text-xs font-semibold text-gray-500 dark:text-gray-400" style="writing-mode: vertical-rl;">↑ Support</span>
    </div>
  </div>
</div>

### Viewpoint 3: Consolidated (Krcmar Model)

The Krcmar model combines all perspectives. An overarching governance block — **Managing Information Management** (IT Strategy, IT Governance, IT Processes, IT HR, IT Controlling, IT Security) — governs three managed areas:

| Managed Area | Scope | Audience |
|-------------|-------|----------|
| **Information Economy** | Demand, Supply, Usage | IT Users (IT is a tool) |
| **Information Systems** | Data, Processes, Application Lifecycle & Landscape | IT Specialists (IT is their work) |
| **ICT** | Storage, Processing, Communication, Tech Stacks | Supports IS layer |

<div class="not-prose my-6 flex justify-center">
  <div class="max-w-2xl w-full flex flex-col items-center gap-0">
    <div class="w-full rounded-lg border-2 border-gray-500 dark:border-gray-400 p-4" style="background:rgba(100,116,139,0.1);">
      <div class="text-sm font-bold text-gray-800 dark:text-gray-100 text-center mb-3">Managing Information Management</div>
      <div class="grid grid-cols-2 gap-2" style="grid-template-columns:repeat(3,minmax(0,1fr));">
        <div class="px-3 py-1.5 rounded border border-gray-300 dark:border-gray-600 text-xs font-medium text-gray-700 dark:text-gray-200 text-center">IT Strategy</div>
        <div class="px-3 py-1.5 rounded border border-gray-300 dark:border-gray-600 text-xs font-medium text-gray-700 dark:text-gray-200 text-center">IT Governance</div>
        <div class="px-3 py-1.5 rounded border border-gray-300 dark:border-gray-600 text-xs font-medium text-gray-700 dark:text-gray-200 text-center">IT Processes</div>
        <div class="px-3 py-1.5 rounded border border-gray-300 dark:border-gray-600 text-xs font-medium text-gray-700 dark:text-gray-200 text-center">IT HR</div>
        <div class="px-3 py-1.5 rounded border border-gray-300 dark:border-gray-600 text-xs font-medium text-gray-700 dark:text-gray-200 text-center">IT Controlling</div>
        <div class="px-3 py-1.5 rounded border border-gray-300 dark:border-gray-600 text-xs font-medium text-gray-700 dark:text-gray-200 text-center">IT Security</div>
      </div>
    </div>
    <div class="text-gray-400 dark:text-gray-500 text-center text-lg my-1">↓ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ↓ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ↓</div>
    <div class="grid gap-3 w-full" style="grid-template-columns:repeat(3,minmax(0,1fr));">
      <div class="rounded-lg border border-gray-300 dark:border-gray-600 p-3">
        <div class="text-sm font-semibold text-gray-800 dark:text-gray-100 text-center">Information Economy</div>
        <div class="text-xs text-gray-600 dark:text-gray-400 text-center mt-1">Demand, Supply, Usage</div>
        <div class="text-xs text-gray-500 dark:text-gray-500 text-center mt-1 italic">IT Users</div>
      </div>
      <div class="rounded-lg border border-gray-300 dark:border-gray-600 p-3">
        <div class="text-sm font-semibold text-gray-800 dark:text-gray-100 text-center">Information Systems</div>
        <div class="text-xs text-gray-600 dark:text-gray-400 text-center mt-1">Data, Processes, Lifecycle</div>
        <div class="text-xs text-gray-500 dark:text-gray-500 text-center mt-1 italic">IT Specialists</div>
      </div>
      <div class="rounded-lg border border-gray-300 dark:border-gray-600 p-3">
        <div class="text-sm font-semibold text-gray-800 dark:text-gray-100 text-center">ICT</div>
        <div class="text-xs text-gray-600 dark:text-gray-400 text-center mt-1">Storage, Processing, Comms</div>
        <div class="text-xs text-gray-500 dark:text-gray-500 text-center mt-1 italic">Supports IS layer</div>
      </div>
    </div>
  </div>
</div>

### The CIO (Chief Information Officer)

| Aspect | Previously | Now |
|--------|-----------|-----|
| **Reports to** | CFO | CEO (often board member) |
| **Perceived as** | Cost factor, "head of data center" | Strategic driver of innovation |
| **Focus** | Back-office operations | Driving innovation across the company |

This shift reflects IT moving from a cost center to a strategic driver of business value.
