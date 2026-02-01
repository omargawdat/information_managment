---
title: "Management of the Information Economy"
chapter: 2
order: 1
description: "Information logistics, eliciting information demand, stakeholders, personas, and the Balanced Scorecard"
---

## Introduction

The **Information Economy** is the demand-side layer of the Krcmar model (see Chapter 1). Its core problem: organizations have plenty of data, but **decision-makers need information** — data that is relevant, timely, and contextualized. This chapter covers the three pillars of the Information Economy: **eliciting demand** (who needs what), **managing supply** (how we deliver it), and **organizing sources and resources** (where it comes from and how we structure it).

---

## Information Logistics (Augustin, 1990)

> **Definition:** The **logistical principle** (Augustin, 1990) states that we must supply:
> - The **right information**
> - At the **right time**
> - In the **right amount**
> - At the **right place**
> - In the **required quality**

### The Information Logistics Cycle

<div class="not-prose my-8 flex justify-center">
  <div class="max-w-sm w-full flex flex-col items-center gap-0">
    <!-- Step 1: Information Demand -->
    <div class="px-5 py-2.5 rounded-lg bg-amber-100 dark:bg-amber-900/40 border-2 border-amber-400 dark:border-amber-500 text-sm font-semibold text-amber-900 dark:text-amber-100 text-center">
      1. Information Demand
    </div>
    <div class="flex items-center gap-2 py-1">
      <div class="text-gray-400 dark:text-gray-500 text-lg">↓</div>
      <div class="text-xs text-gray-500 dark:text-gray-400">Requirements</div>
    </div>
    <!-- Step 2: Information Sources -->
    <div class="px-5 py-2.5 rounded-lg bg-sky-100 dark:bg-sky-900/40 border border-sky-300 dark:border-sky-700 text-sm font-semibold text-sky-900 dark:text-sky-100 text-center">
      2. Information Sources
    </div>
    <div class="flex items-center gap-2 py-1">
      <div class="text-gray-400 dark:text-gray-500 text-lg">↓</div>
      <div class="text-xs text-gray-500 dark:text-gray-400">Enable processing</div>
    </div>
    <!-- Step 3: Information Resources -->
    <div class="px-5 py-2.5 rounded-lg bg-sky-100 dark:bg-sky-900/40 border border-sky-300 dark:border-sky-700 text-sm font-semibold text-sky-900 dark:text-sky-100 text-center">
      3. Information Resources
    </div>
    <div class="flex items-center gap-2 py-1">
      <div class="text-gray-400 dark:text-gray-500 text-lg">↓</div>
      <div class="text-xs text-gray-500 dark:text-gray-400">Customize</div>
    </div>
    <!-- Step 4: Information Supply -->
    <div class="px-5 py-2.5 rounded-lg bg-green-100 dark:bg-green-900/40 border border-green-300 dark:border-green-700 text-sm font-semibold text-green-900 dark:text-green-100 text-center">
      4. Information Supply
    </div>
    <div class="flex items-center gap-2 py-1">
      <div class="text-gray-400 dark:text-gray-500 text-lg">↻</div>
      <div class="text-xs text-gray-500 dark:text-gray-400">Make available → back to Demand</div>
    </div>
  </div>
</div>

| Stage | Activity | Question |
|-------|----------|----------|
| **Information Demand** | Identify what information is needed | What do stakeholders require? |
| **Information Sources** | Find where the needed information exists | Which internal/external sources are available? |
| **Information Resources** | Process and prepare the information | How do we transform raw sources into usable form? |
| **Information Supply** | Deliver information to those who need it | How do we make it available at the right time? |

The rest of this chapter walks through each stage in order: demand elicitation (Section 3), sources and resources (Section 4), and supply (Section 5).

---

## Eliciting Information Demand

Three sub-steps: **identify stakeholders and personas**, **elicit people's needs** (subjective — interviews, surveys, workshops), and **understand company needs** (objective — strategic analysis).

### Picot's Three Dimensions (Picot, 1988)

Information demand emerges from the **overlap** of three dimensions:

<div class="not-prose my-8 flex justify-center">
  <div class="max-w-md w-full flex flex-col items-center gap-2">
    <!-- Three input concepts -->
    <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:0.5rem;" class="w-full">
      <div class="px-3 py-3 rounded-lg bg-sky-100 dark:bg-sky-900/30 border border-sky-300 dark:border-sky-600 text-center">
        <div class="text-xs font-semibold text-sky-800 dark:text-sky-200">Objective Information Need</div>
        <div class="text-[10px] text-sky-600 dark:text-sky-400 mt-1">What's necessary for the task?</div>
      </div>
      <div class="px-3 py-3 rounded-lg bg-amber-100 dark:bg-amber-900/30 border border-amber-300 dark:border-amber-600 text-center">
        <div class="text-xs font-semibold text-amber-800 dark:text-amber-200">Subjective Information Need</div>
        <div class="text-[10px] text-amber-600 dark:text-amber-400 mt-1">What's perceived necessary?</div>
      </div>
      <div class="px-3 py-3 rounded-lg bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-600 text-center">
        <div class="text-xs font-semibold text-green-800 dark:text-green-200">Available Information</div>
        <div class="text-[10px] text-green-600 dark:text-green-400 mt-1">What info exists?</div>
      </div>
    </div>
    <!-- Converging arrows -->
    <div class="text-gray-400 dark:text-gray-500 text-center text-lg tracking-widest">↘ ↓ ↙</div>
    <!-- Center result -->
    <div class="px-5 py-2.5 rounded-lg bg-gray-800 dark:bg-gray-200 text-sm font-bold text-white dark:text-gray-900 text-center shadow-lg">
      Information Demand
    </div>
    <div class="text-[10px] text-gray-500 dark:text-gray-400 text-center">= where all three overlap</div>
  </div>
</div>

**Information Demand** = the intersection of all three dimensions. The gaps between dimensions have specific meanings:

| Gap | Meaning | Implication |
|-----|---------|-------------|
| Objective but **not** Subjective | The person doesn't realize they need this information | **Training gap** — awareness must be raised |
| Subjective but **not** Objective | The person thinks they need it, but it's not task-relevant | **Noise** — creates information overload if supplied |
| Needed (objective + subjective) but **not** Available | The information simply doesn't exist or isn't accessible | **Information gap** — requires new sources or systems |
| Available but **not** Needed | Information exists but no one requires it | **Overload risk** — should not be pushed to users |

| Approach | Method | Examples |
|----------|--------|----------|
| **Subjective** | Derive requirements from personal interpretation of the task | Interviews, wishlists |
| **Objective** | Derive requirements from inter-subjectively validated interpretation | Strategic analysis, process analysis |
| **Mixed** | Combine both — typically objective first, then subjective | Process analysis followed by interviews |

### Stakeholders and Personas

#### Stakeholders

> **Definition:** A **stakeholder** is a person or organization who influences a system's requirements or who is impacted by that system. Influence can also be indirect — e.g., stakeholders may follow instructions issued by their managers or organizations (Glinz, 2020).

| Level | Stakeholder Types | Information Focus |
|-------|------------------|-------------------|
| **Strategic** | Senior management | Strategic direction, high-level KPIs |
| **Tactical** | Middle management, knowledge workers | Departmental performance, analysis, resource allocation |
| **Operational** | Operational managers, data workers, production staff | Day-to-day operations, task instructions, data entry |

> **Important:** Different stakeholders view the same system from entirely different perspectives. An end user, a software vendor, and an operations manager each bring their own viewpoint. Accounting for all views is essential for complete requirements.

#### Personas

**Personas** are fictional individuals representing a user group. They are built from empirical data (interviews, analytics), then clustered and prioritized. Each persona captures demographics, goals, frustrations, and motivations — providing concrete guidance instead of designing for a vague, "elastic" user.

### Understanding Company Needs — The Balanced Scorecard (Kaplan & Norton, 1992)

The **Balanced Scorecard** (BSC) links **firm strategy and objectives** to measurable indicators across four perspectives:

<div class="not-prose my-8 flex justify-center">
  <div class="max-w-2xl w-full flex flex-col items-center gap-0">
    <!-- Financial (top) -->
    <div style="width:55%;" class="rounded-lg border border-gray-400 dark:border-gray-500 p-3">
      <div class="text-sm font-bold text-gray-800 dark:text-gray-100 text-center">Financial</div>
      <div class="text-xs text-gray-600 dark:text-gray-400 mt-1">Cash flow · ROI · Return on capital employed · Return on equity</div>
    </div>
    <!-- Bidirectional arrow vertical -->
    <div class="text-gray-400 dark:text-gray-500 text-lg py-0.5">↕</div>
    <!-- Middle row: Customers ↔ Strategy ↔ Business Processes -->
    <div style="display:grid; grid-template-columns:1fr auto auto auto 1fr; gap:0;" class="w-full items-center">
      <div class="rounded-lg border border-gray-400 dark:border-gray-500 p-3">
        <div class="text-sm font-bold text-gray-800 dark:text-gray-100 text-center">Customers</div>
        <div class="text-xs text-gray-600 dark:text-gray-400 mt-1">Delivery performance · Quality · Satisfaction · Loyalty · Retention</div>
      </div>
      <div class="text-gray-400 dark:text-gray-500 text-lg px-2">↔</div>
      <div class="px-5 py-5 rounded-lg border-2 border-gray-300 dark:border-gray-500 text-sm font-bold text-gray-800 dark:text-gray-100 text-center" style="background:rgba(100,116,139,0.15);">Firm Strategy<br/>and Objectives</div>
      <div class="text-gray-400 dark:text-gray-500 text-lg px-2">↔</div>
      <div class="rounded-lg border border-gray-400 dark:border-gray-500 p-3">
        <div class="text-sm font-bold text-gray-800 dark:text-gray-100 text-center">Business Processes</div>
        <div class="text-xs text-gray-600 dark:text-gray-400 mt-1">Number of activities · Execution time · Accident ratios · Resource efficiency · Downtime</div>
      </div>
    </div>
    <!-- Bidirectional arrow vertical -->
    <div class="text-gray-400 dark:text-gray-500 text-lg py-0.5">↕</div>
    <!-- Learning and Growth (bottom) -->
    <div style="width:55%;" class="rounded-lg border border-gray-400 dark:border-gray-500 p-3">
      <div class="text-sm font-bold text-gray-800 dark:text-gray-100 text-center">Learning and Growth</div>
      <div class="text-xs text-gray-600 dark:text-gray-400 mt-1">Investment rate · Illness rate · Internal promotions % · Employee turnover · Gender ratios</div>
    </div>
  </div>
</div>

The arrows are **bidirectional**: strategy defines *what* to measure in each perspective, and the measurements *feed back* to validate or adjust the strategy. Each perspective translates abstract strategic goals into concrete, measurable KPIs — and those KPIs define the **information demand** for the organization's information systems.

| Perspective | Guiding Question | Components |
|-------------|-----------------|------------|
| **Financial** | To succeed financially, how should we appear to our shareholders? | Objectives, Measures, Targets, Initiatives |
| **Customer** | To achieve our vision, how should we appear to our customers? | Objectives, Measures, Targets, Initiatives |
| **Internal Business Process** | To satisfy shareholders and customers, what processes must we excel at? | Objectives, Measures, Targets, Initiatives |
| **Learning and Growth** | How will we sustain our ability to change and improve? | Objectives, Measures, Targets, Initiatives |

> **Important:** The BSC is not just a set of KPIs — it explicitly links **Vision and Strategy** to measurable outcomes across all four perspectives, ensuring that information demand is derived from actual strategic objectives rather than ad-hoc requests.

**BSC → Information Demand:** Each BSC perspective generates concrete information needs. For example, a strategic objective like "improve customer retention by 10%" creates demand for churn analytics, satisfaction survey data, and support ticket trends. The BSC thus provides the **objective** side of Picot's framework — it tells us what information the organization *should* need, independent of what individuals *think* they need.

---

## Information Sources & Resources

### Source/Demand Matrix

<div class="not-prose my-8 flex justify-center">
  <div class="max-w-lg w-full">
    <!-- Header row -->
    <div class="grid gap-0" style="grid-template-columns:repeat(3,minmax(0,1fr));">
      <div></div>
      <div class="px-3 py-2 border border-gray-400 dark:border-gray-500 text-xs font-bold text-gray-800 dark:text-gray-100 text-center" style="background:rgba(100,116,139,0.2);">Internal Source</div>
      <div class="px-3 py-2 border border-gray-400 dark:border-gray-500 text-xs font-bold text-gray-800 dark:text-gray-100 text-center" style="background:rgba(100,116,139,0.2);">External Source</div>
    </div>
    <!-- Row 1: Internal Demand -->
    <div class="grid gap-0" style="grid-template-columns:repeat(3,minmax(0,1fr));">
      <div class="px-3 py-3 border border-gray-400 dark:border-gray-500 text-xs font-bold text-gray-800 dark:text-gray-100 flex items-center justify-center text-center" style="background:rgba(100,116,139,0.2);">Internal Demand</div>
      <div class="px-3 py-3 border border-gray-400 dark:border-gray-500 text-xs font-semibold text-gray-800 dark:text-gray-100 flex items-center justify-center text-center">Enterprise Systems</div>
      <div class="px-3 py-3 border border-gray-400 dark:border-gray-500 text-xs font-medium text-gray-700 dark:text-gray-300 flex items-center justify-center text-center">Specialized information</div>
    </div>
    <!-- Row 2: External Demand -->
    <div class="grid gap-0" style="grid-template-columns:repeat(3,minmax(0,1fr));">
      <div class="px-3 py-3 border border-gray-400 dark:border-gray-500 text-xs font-bold text-gray-800 dark:text-gray-100 flex items-center justify-center text-center" style="background:rgba(100,116,139,0.2);">External Demand</div>
      <div class="px-3 py-3 border border-gray-400 dark:border-gray-500 text-xs font-medium text-gray-700 dark:text-gray-300 flex items-center justify-center text-center">Publications, P.R., Investor relations</div>
      <div class="px-3 py-3 border border-gray-400 dark:border-gray-500 text-xs font-medium text-gray-500 dark:text-gray-400 flex items-center justify-center text-center italic">Not relevant for IM</div>
    </div>
  </div>
</div>

- The **primary IM focus** is fulfilling **internal demand** via **enterprise systems** (top-left cell).

### Information Quality

| Contextual Qualities | Presentational Qualities | Intrinsic Qualities | Access Qualities |
|---------------------|------------------------|--------------------|--------------------|
| Currentness | Understandability | Reliability | Accessibility |
| Completeness | Clarity | Correctness | Maintainability |
| Appropriate Scope | Uniformity | Objectivity | |
| Relevance | Unambiguity | Credibility | |

> **Important:** Information quality is not just about correctness — even correct information can fail if it is not current, not accessible, or not presented in an understandable way. All four quality dimensions must be considered.

### From Sources to Resources

An **information source** is any origin of data (a database, a report, a person). When a source is **used recurrently** and managed for reuse, it becomes an **information resource**. The distinction matters: sources are discovered, resources are *engineered* — organized, indexed, and maintained so they can be efficiently found and reused over time.

### Three Approaches to Organizing Resources

| Approach | Structure | Examples |
|----------|-----------|----------|
| **Hierarchies** | Tree-structured classification | Taxonomy |
| **Keywords** | Flat or semi-structured labels | Thesaurus, Tags |
| **Graphs** | Network of linked concepts | Semantic Web |

### Taxonomies

A **taxonomy** is a hierarchical classification system. Formally, a taxonomy T consists of:

- A set of **labels** L
- A set of **relationships** R, where every relationship r = ⟨l₁, l₂⟩ with l₁, l₂ ∈ L

Each label can be an **instance** (a specific individual, e.g., "Albert Einstein") or a **class** (a category, e.g., "American physicists"), and the semantics of the relationship R varies accordingly (is-a vs. member-of).

<div class="not-prose my-8 flex justify-center">
  <div style="max-width:32rem;" class="w-full flex flex-col items-center gap-0">
    <!-- Root -->
    <div class="px-5 py-2 rounded-full bg-sky-100 dark:bg-sky-900/40 border border-sky-300 dark:border-sky-700 text-xs font-semibold text-sky-900 dark:text-sky-100 text-center">
      American academics
    </div>
    <!-- Connector -->
    <div style="width:2px; height:1.25rem;" class="bg-sky-400 dark:bg-sky-500"></div>
    <div style="width:20rem; height:2px;" class="bg-sky-400 dark:bg-sky-500"></div>
    <!-- Level 2 -->
    <div style="width:20rem;" class="flex items-start gap-0">
      <div class="flex flex-col items-center flex-1">
        <div style="width:2px; height:1.25rem;" class="bg-sky-400 dark:bg-sky-500"></div>
        <svg class="w-3 h-2 text-sky-400 dark:text-sky-500" viewBox="0 0 12 8" fill="currentColor"><polygon points="6,8 0,0 12,0"/></svg>
        <div style="white-space:nowrap;" class="px-3 py-1.5 rounded-full bg-sky-200 dark:bg-sky-800/50 border border-sky-400 dark:border-sky-600 text-[10px] font-semibold text-sky-900 dark:text-sky-100 text-center">
          American scientists
        </div>
        <!-- Level 3 children -->
        <div style="width:2px; height:1rem;" class="bg-sky-400 dark:bg-sky-500"></div>
        <div style="width:12rem; height:2px;" class="bg-sky-400 dark:bg-sky-500"></div>
        <div style="width:12rem;" class="flex items-start gap-0">
          <div class="flex flex-col items-center flex-1">
            <div style="width:2px; height:1rem;" class="bg-sky-400 dark:bg-sky-500"></div>
            <svg class="w-2.5 h-1.5 text-sky-400 dark:text-sky-500" viewBox="0 0 12 8" fill="currentColor"><polygon points="6,8 0,0 12,0"/></svg>
            <div style="white-space:nowrap;" class="px-2 py-1 rounded-full bg-sky-100 dark:bg-sky-900/40 border border-sky-200 dark:border-sky-700 text-[9px] font-medium text-sky-800 dark:text-sky-200 text-center">Biologists</div>
          </div>
          <div class="flex flex-col items-center flex-1">
            <div style="width:2px; height:1rem;" class="bg-sky-400 dark:bg-sky-500"></div>
            <svg class="w-2.5 h-1.5 text-sky-400 dark:text-sky-500" viewBox="0 0 12 8" fill="currentColor"><polygon points="6,8 0,0 12,0"/></svg>
            <div style="white-space:nowrap;" class="px-2 py-1 rounded-full bg-sky-100 dark:bg-sky-900/40 border border-sky-200 dark:border-sky-700 text-[9px] font-medium text-sky-800 dark:text-sky-200 text-center">Physicists</div>
            <!-- Instance leaf -->
            <div style="width:2px; height:1rem;" class="bg-gray-300 dark:bg-gray-600"></div>
            <svg class="w-2.5 h-1.5 text-gray-300 dark:text-gray-600" viewBox="0 0 12 8" fill="currentColor"><polygon points="6,8 0,0 12,0"/></svg>
            <div style="white-space:nowrap;" class="px-2 py-1 rounded-full bg-gray-200 dark:bg-gray-700/60 border border-gray-300 dark:border-gray-600 text-[9px] font-medium text-gray-600 dark:text-gray-300 text-center italic">Einstein</div>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center flex-1">
        <div style="width:2px; height:1.25rem;" class="bg-sky-400 dark:bg-sky-500"></div>
        <svg class="w-3 h-2 text-sky-400 dark:text-sky-500" viewBox="0 0 12 8" fill="currentColor"><polygon points="6,8 0,0 12,0"/></svg>
        <div style="white-space:nowrap;" class="px-3 py-1.5 rounded-full bg-sky-200 dark:bg-sky-800/50 border border-sky-400 dark:border-sky-600 text-[10px] font-semibold text-sky-900 dark:text-sky-100 text-center">
          Professors of English
        </div>
      </div>
    </div>
  </div>
</div>

> **Important:** In a taxonomy, classes group instances hierarchically, but a single label can appear under multiple parents (e.g., "Einstein" could be under both "American physicists" and "German physicists"). The relationships can form directed acyclic graphs, not just strict trees.

### The Semantic Web (Tim Berners-Lee)

The **Semantic Web** is the graph-based approach to organizing information resources — a vision of a web where machines understand *meaning*, not just syntax. Its architecture builds in layers: **URI/Unicode** provide global identifiers, **XML** provides syntax, **RDF triples** (subject–predicate–object) provide the data model, and **Ontologies** provide shared vocabularies for describing domain concepts and their relationships.

For IM, the Semantic Web matters because it enables **cross-system linking** — information from different enterprise systems can be connected through shared ontologies, reducing data silos and making information resources discoverable across organizational boundaries.

---

## Information Supply: Data Warehouse & ETL

The final step is **delivering** the right information to those who need it. A key infrastructure for this is the **Data Warehouse**.

> **Definition:** A **Data Warehouse** consolidates data from multiple operational systems into a single, query-optimized repository for analysis and reporting.

<div class="not-prose my-8 overflow-x-auto">
  <div style="min-width:600px;" class="flex items-center gap-4 justify-center">
    <!-- Sources -->
    <div class="flex flex-col gap-2">
      <div class="px-3 py-1.5 rounded bg-sky-100 dark:bg-sky-900/40 border border-sky-300 dark:border-sky-700 text-xs font-medium text-sky-800 dark:text-sky-200 text-center">Operational System</div>
      <div class="px-3 py-1.5 rounded bg-sky-100 dark:bg-sky-900/40 border border-sky-300 dark:border-sky-700 text-xs font-medium text-sky-800 dark:text-sky-200 text-center">ERP</div>
      <div class="px-3 py-1.5 rounded bg-sky-100 dark:bg-sky-900/40 border border-sky-300 dark:border-sky-700 text-xs font-medium text-sky-800 dark:text-sky-200 text-center">CRM</div>
      <div class="px-3 py-1.5 rounded bg-sky-100 dark:bg-sky-900/40 border border-sky-300 dark:border-sky-700 text-xs font-medium text-sky-800 dark:text-sky-200 text-center">Flat Files</div>
    </div>
    <!-- Arrow to ETL -->
    <div class="flex flex-col items-center">
      <svg class="w-4 h-3 text-gray-400 dark:text-gray-500 -rotate-90" viewBox="0 0 12 8" fill="currentColor"><polygon points="6,8 0,0 12,0"/></svg>
    </div>
    <!-- ETL -->
    <div class="px-4 py-6 rounded-lg bg-purple-100 dark:bg-purple-900/30 border border-purple-300 dark:border-purple-600 text-center">
      <div class="text-sm font-bold text-purple-900 dark:text-purple-100">ETL</div>
      <div class="text-[10px] text-purple-700 dark:text-purple-300 mt-1">Extraction</div>
      <div class="text-[10px] text-purple-700 dark:text-purple-300">Transformation</div>
      <div class="text-[10px] text-purple-700 dark:text-purple-300">Loading</div>
    </div>
    <!-- Arrow to DW -->
    <div class="flex flex-col items-center">
      <svg class="w-4 h-3 text-gray-400 dark:text-gray-500 -rotate-90" viewBox="0 0 12 8" fill="currentColor"><polygon points="6,8 0,0 12,0"/></svg>
    </div>
    <!-- Data Warehouse -->
    <div class="px-5 py-4 rounded-lg bg-sky-200 dark:bg-sky-800/50 border-2 border-sky-400 dark:border-sky-500 text-center">
      <div class="text-sm font-bold text-sky-900 dark:text-sky-100">Data Warehouse</div>
      <div class="text-[10px] text-sky-700 dark:text-sky-300 mt-2 space-y-0.5">
        <div>Metadata</div>
        <div>Summary Data</div>
        <div>Raw Data</div>
      </div>
    </div>
    <!-- Arrow to Outputs -->
    <div class="flex flex-col items-center">
      <svg class="w-4 h-3 text-gray-400 dark:text-gray-500 -rotate-90" viewBox="0 0 12 8" fill="currentColor"><polygon points="6,8 0,0 12,0"/></svg>
    </div>
    <!-- Outputs -->
    <div class="flex flex-col gap-2">
      <div class="px-3 py-1.5 rounded bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 text-xs font-medium text-green-800 dark:text-green-200 text-center">OLAP Analysis</div>
      <div class="px-3 py-1.5 rounded bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 text-xs font-medium text-green-800 dark:text-green-200 text-center">Reporting</div>
      <div class="px-3 py-1.5 rounded bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 text-xs font-medium text-green-800 dark:text-green-200 text-center">Data Mining</div>
    </div>
  </div>
</div>

| Stage | Process | Purpose |
|-------|---------|---------|
| **Extraction** | Pull data from multiple heterogeneous source systems | Gather raw operational data |
| **Transformation** | Clean, standardize, and restructure the data | Ensure consistency and quality |
| **Loading** | Store the processed data in the warehouse | Make it available for analysis |

**What happens during Transformation:** This is the most complex ETL step. It involves **data cleaning** (fixing errors, handling missing values), **deduplication** (merging duplicate records), **format standardization** (unifying date formats, units, encodings), **business rule application** (computing derived fields like profit margins), and **schema mapping** (aligning source schemas to the warehouse's target schema). Without proper transformation, the warehouse inherits the inconsistencies of its source systems.
