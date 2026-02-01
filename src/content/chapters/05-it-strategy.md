---
title: "IT Strategy"
chapter: 5
order: 1
description: "Corporate strategy, competitive advantage (Porter, RBV, SWOT), and strategic alignment (SAM)"
---

## Context in the Krcmar Model

IT Strategy belongs to the **Managing Information Management** layer — the overarching governance block of the Krcmar model (see Chapter 1). This layer includes IT Strategy, IT Governance, IT Processes, IT HR, IT Controlling, and IT Security. This chapter focuses on the first of these: how organizations formulate and align their IT strategy with business goals.

---

## The Business-IT Relationship

The relationship between business and IT can be understood at two levels of complexity.

**Simple loop:** Business "defines goals for" IT, and IT "transforms" Business.

**Extended loop (with Business Context):** The real world is more nuanced — a third element, Business Context, shapes the competitive landscape that business operates in.

<div class="not-prose my-8 flex justify-center">
  <div class="w-full max-w-2xl overflow-x-auto">
    <div style="display:flex; align-items:center; justify-content:center; gap:1.5rem; min-width:36rem; padding:1rem 0;">
      <!-- Business Context -->
      <div style="display:flex; flex-direction:column; align-items:center; gap:0.25rem;">
        <div class="px-5 py-3 rounded-lg bg-amber-100 dark:bg-amber-900/40 border-2 border-amber-400 dark:border-amber-500 text-sm font-bold text-amber-900 dark:text-amber-100 text-center" style="min-width:8rem;">
          Business Context
        </div>
        <div class="text-[10px] text-gray-500 dark:text-gray-400 italic">Competition, market, regulation</div>
      </div>
      <!-- Arrows between Context and Business -->
      <div style="display:flex; flex-direction:column; align-items:center; gap:0.25rem;">
        <div class="text-[9px] text-gray-500 dark:text-gray-400 font-medium">impacts competition</div>
        <div class="text-gray-400 dark:text-gray-500 text-lg">→</div>
        <div class="text-gray-400 dark:text-gray-500 text-lg">←</div>
        <div class="text-[9px] text-gray-500 dark:text-gray-400 font-medium">transforms</div>
      </div>
      <!-- Business -->
      <div style="display:flex; flex-direction:column; align-items:center; gap:0.25rem;">
        <div class="px-5 py-3 rounded-lg bg-sky-100 dark:bg-sky-900/40 border-2 border-sky-400 dark:border-sky-500 text-sm font-bold text-sky-900 dark:text-sky-100 text-center" style="min-width:6rem;">
          Business
        </div>
        <div class="text-[10px] text-gray-500 dark:text-gray-400 italic">Strategy, goals, operations</div>
      </div>
      <!-- Arrows between Business and IT -->
      <div style="display:flex; flex-direction:column; align-items:center; gap:0.25rem;">
        <div class="text-[9px] text-gray-500 dark:text-gray-400 font-medium">defines goals</div>
        <div class="text-gray-400 dark:text-gray-500 text-lg">→</div>
        <div class="text-gray-400 dark:text-gray-500 text-lg">←</div>
        <div class="text-[9px] text-gray-500 dark:text-gray-400 font-medium">supports &amp; transforms</div>
      </div>
      <!-- IT -->
      <div style="display:flex; flex-direction:column; align-items:center; gap:0.25rem;">
        <div class="px-5 py-3 rounded-lg bg-green-100 dark:bg-green-900/40 border-2 border-green-400 dark:border-green-500 text-sm font-bold text-green-900 dark:text-green-100 text-center" style="min-width:4rem;">
          IT
        </div>
        <div class="text-[10px] text-gray-500 dark:text-gray-400 italic">Systems, infrastructure</div>
      </div>
    </div>
  </div>
</div>

> **Important:** A McKinsey 2016 survey (n=709) found that most companies treat IT as a **Supplier** (a technology service provider), but most executives believe IT *should* be a **Partner** (actively collaborating to shape strategy). The gap between current and desired role is significant — IT strategy is about closing that gap.

### Three Core IT Management Questions

IT management is always caught between two tensions: achieving **strategic advantages through IT investments** and maintaining **short-term IT cost control**. Three core questions guide this balance:

1. **Which** IT services should be provided?
2. **Who** provides these IT services?
3. **Are** the IT services provided correctly (efficiently and effectively)?

---

## Strategy Foundations

> **Definition:** A **strategy** is a plan of action to achieve a particular goal. Short-term strategies typically cover the next 6 months; long-term strategies span 3–5 years.

> **Definition:** **Strategic Management** (Smith/Arnold/Bizzell, 1986) is the process of examining both present and future environments, formulating the organization's objectives, and making, implementing, and controlling decisions focused on achieving these objectives.

### Earl's Three Strategy Types (1989)

| Strategy | Question | Focus |
|----------|----------|-------|
| **IS Strategy** | What? | Business applications of IT — aligning them with business needs and deriving strategic benefits |
| **IT Strategy** | How? | Technology architecture, technical standards, security levels, risk attitudes, technology policies |
| **IM Strategy** | Who? Where? | Structures and roles for managing IS and IT — specialist/user relationships, management control, performance measurement |

### Basic Strategy 101 — Five Simplified Steps

1. Identify business strategy and goals
2. Break goals down into concrete activities and processes
3. Identify metrics to measure progress towards these goals
4. Identify how IT can help progress for these activities
5. Measure actual performance

Steps 2–5 are supported by known tools (Balanced Scorecards, KPIs, OKRs, GQM). The hard part is **Step 1**: identifying the right business strategy.

### Contents of a Concrete IT Strategy Document

- Competitive analysis and forecasting
- Mission statement, goals and basic tasks
- Strengths and weaknesses of own ICT system and technology on the market
- Assessment of future technology development
- Hardware and software policy
- Priority rules for IT projects
- Organizational developments in the company
- Guidelines, standards, and norms
- Personnel development in IT

---

## Competitive Advantage: Market-Based View (MBV)

The **Market-Based View** focuses on external competitive forces. The central idea: industry structure determines profitability, and strategy should position the firm advantageously within that structure.

### Porter's Five Competitive Forces

> **Definition:** Porter's Five Forces framework identifies five forces that determine the competitive intensity and attractiveness of a market.

<div class="not-prose my-8 flex justify-center">
  <div class="w-full max-w-2xl overflow-x-auto">
    <div style="display:grid; grid-template-columns:1fr auto 1fr; grid-template-rows:auto auto auto; gap:0; align-items:center; justify-items:center; min-width:32rem; padding:1rem 0;">
      <!-- Row 1: Top force -->
      <div></div>
      <div style="display:flex; flex-direction:column; align-items:center; gap:0.25rem;">
        <div class="px-4 py-2.5 rounded-lg bg-amber-100 dark:bg-amber-900/40 border border-amber-300 dark:border-amber-600 text-xs font-semibold text-amber-900 dark:text-amber-100 text-center" style="min-width:10rem;">
          Threat of New Entrants
        </div>
        <div class="text-gray-400 dark:text-gray-500 text-lg">↓</div>
      </div>
      <div></div>
      <!-- Row 2: Left force, Center, Right force -->
      <div style="display:flex; align-items:center; gap:0.25rem;">
        <div class="px-4 py-2.5 rounded-lg bg-amber-100 dark:bg-amber-900/40 border border-amber-300 dark:border-amber-600 text-xs font-semibold text-amber-900 dark:text-amber-100 text-center" style="min-width:8rem;">
          Bargaining Power<br>of Suppliers
        </div>
        <div class="text-gray-400 dark:text-gray-500 text-lg">→</div>
      </div>
      <div class="px-5 py-4 rounded-lg bg-sky-100 dark:bg-sky-900/40 border-2 border-sky-400 dark:border-sky-500 text-sm font-bold text-sky-900 dark:text-sky-100 text-center" style="min-width:10rem;">
        Industry Rivalry<br><span class="text-xs font-medium">(The Firm vs. Competitors)</span>
      </div>
      <div style="display:flex; align-items:center; gap:0.25rem;">
        <div class="text-gray-400 dark:text-gray-500 text-lg">←</div>
        <div class="px-4 py-2.5 rounded-lg bg-amber-100 dark:bg-amber-900/40 border border-amber-300 dark:border-amber-600 text-xs font-semibold text-amber-900 dark:text-amber-100 text-center" style="min-width:8rem;">
          Bargaining Power<br>of Customers
        </div>
      </div>
      <!-- Row 3: Bottom force -->
      <div></div>
      <div style="display:flex; flex-direction:column; align-items:center; gap:0.25rem;">
        <div class="text-gray-400 dark:text-gray-500 text-lg">↑</div>
        <div class="px-4 py-2.5 rounded-lg bg-amber-100 dark:bg-amber-900/40 border border-amber-300 dark:border-amber-600 text-xs font-semibold text-amber-900 dark:text-amber-100 text-center" style="min-width:10rem;">
          Threat of Substitutes
        </div>
      </div>
      <div></div>
    </div>
  </div>
</div>

These five forces determine how much value an industry creates and how that value is divided among competitors, new entrants, suppliers, customers, and substitute products.

### Porter's Generic Strategies

| Strategy | How IS Supports It |
|----------|-------------------|
| **Low-cost leadership** | Use IS to produce products/services at lower price than competitors while enhancing quality and service level |
| **Product differentiation** | Use IS to differentiate products, enable new services and products |
| **Focus on market niche** | Use IS to enable a focused strategy on a single market niche; specialize |
| **Customer and supplier intimacy** | Use IS to develop strong ties and loyalty with customers and suppliers |

### Porter's Strategy Matrix (2x2)

<div class="not-prose my-8 flex justify-center">
  <div class="w-full max-w-lg">
    <div style="display:grid; grid-template-columns:auto 1fr 1fr; gap:0;">
      <!-- Header row -->
      <div style="padding:0.5rem;" class="text-xs text-gray-500 dark:text-gray-400"></div>
      <div style="padding:0.75rem;" class="text-xs font-bold text-gray-700 dark:text-gray-200 text-center border border-gray-300 dark:border-gray-600" style="background:rgba(100,116,139,0.15);">Singularity<br><span class="font-normal text-[10px]">(from customer's perspective)</span></div>
      <div style="padding:0.75rem;" class="text-xs font-bold text-gray-700 dark:text-gray-200 text-center border border-gray-300 dark:border-gray-600" style="background:rgba(100,116,139,0.15);">Cost Advantage</div>
      <!-- Row 1: Industry-wide -->
      <div style="padding:0.75rem;" class="text-xs font-bold text-gray-700 dark:text-gray-200 text-center border border-gray-300 dark:border-gray-600">Industry-<br>wide</div>
      <div style="padding:1rem;" class="border border-gray-300 dark:border-gray-600 text-center">
        <div class="px-3 py-2 rounded bg-purple-100 dark:bg-purple-900/40 border border-purple-300 dark:border-purple-600 text-xs font-semibold text-purple-900 dark:text-purple-100">Product Differentiation</div>
      </div>
      <div style="padding:1rem;" class="border border-gray-300 dark:border-gray-600 text-center">
        <div class="px-3 py-2 rounded bg-green-100 dark:bg-green-900/40 border border-green-300 dark:border-green-600 text-xs font-semibold text-green-900 dark:text-green-100">Low-Cost Leadership</div>
      </div>
      <!-- Row 2: Industry segment -->
      <div style="padding:0.75rem;" class="text-xs font-bold text-gray-700 dark:text-gray-200 text-center border border-gray-300 dark:border-gray-600">Industry<br>segment</div>
      <div style="padding:1rem; grid-column:span 2;" class="border border-gray-300 dark:border-gray-600 text-center">
        <div class="px-3 py-2 rounded bg-amber-100 dark:bg-amber-900/40 border border-amber-300 dark:border-amber-600 text-xs font-semibold text-amber-900 dark:text-amber-100">Focus on Market Niche</div>
      </div>
    </div>
  </div>
</div>

---

## Competitive Advantage: Resource-Based View (RBV)

The **Resource-Based View** takes the opposite perspective from MBV: success depends on **internal resources and capabilities**, not just the competitive landscape.

### Three Levels of Internal Strength

| Level | Responsibility | Focus |
|-------|---------------|-------|
| **Vision** | C-level | Strategic direction |
| **Capabilities** | Middle management | Ability to adapt resources and competencies to changing environments; using resources efficiently and effectively |
| **Resources** | Product & project management | Fixed assets, human capital, money, reputation/brands, management team, technology and patents, organizational culture, organizational structure |

### Tangible vs. Intangible Resources

How to gain advantage through RBV:
- Keep **tangible resources** (e.g. factories, hardware) up to date
- Develop **intangible resources** (e.g. employee skills, culture, creativity), capabilities, and vision

### VRIN Criteria

Resources and capabilities must satisfy **all four** criteria for sustainable strategic advantage:

| Criterion | Meaning |
|-----------|---------|
| **V**aluable | The resource provides value to the firm |
| **R**are | Not widely available to competitors |
| **I**nimitable | Difficult or impossible to copy |
| **N**on-Substitutional | No equivalent substitute exists |

> **Important:** All four VRIN criteria must be met simultaneously. A resource that is valuable and rare but easy to imitate will not provide a lasting competitive advantage.

---

## SWOT Analysis — Synthesis of MBV + RBV

**SWOT** combines the external analysis of MBV with the internal analysis of RBV into a single framework.

<div class="not-prose my-8 flex justify-center">
  <div class="w-full max-w-lg">
    <div style="display:grid; grid-template-columns:auto 1fr 1fr; gap:0;">
      <!-- Header row -->
      <div style="padding:0.5rem;"></div>
      <div style="padding:0.75rem;" class="text-xs font-bold text-gray-700 dark:text-gray-200 text-center border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800/40">Helpful<br><span class="font-normal text-[10px]">(to achieving objective)</span></div>
      <div style="padding:0.75rem;" class="text-xs font-bold text-gray-700 dark:text-gray-200 text-center border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800/40">Harmful<br><span class="font-normal text-[10px]">(to achieving objective)</span></div>
      <!-- Row 1: Internal origin -->
      <div style="padding:0.75rem;" class="text-xs font-bold text-gray-700 dark:text-gray-200 text-center border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800/40">Internal<br>origin</div>
      <div style="padding:1.25rem;" class="border border-gray-300 dark:border-gray-600 text-center">
        <div class="px-4 py-3 rounded bg-green-100 dark:bg-green-900/40 border border-green-300 dark:border-green-600 text-sm font-bold text-green-900 dark:text-green-100">Strengths</div>
      </div>
      <div style="padding:1.25rem;" class="border border-gray-300 dark:border-gray-600 text-center">
        <div class="px-4 py-3 rounded bg-rose-100 dark:bg-rose-900/40 border border-rose-300 dark:border-rose-600 text-sm font-bold text-rose-900 dark:text-rose-100">Weaknesses</div>
      </div>
      <!-- Row 2: External origin -->
      <div style="padding:0.75rem;" class="text-xs font-bold text-gray-700 dark:text-gray-200 text-center border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800/40">External<br>origin</div>
      <div style="padding:1.25rem;" class="border border-gray-300 dark:border-gray-600 text-center">
        <div class="px-4 py-3 rounded bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 text-sm font-bold text-green-800 dark:text-green-200">Opportunities</div>
      </div>
      <div style="padding:1.25rem;" class="border border-gray-300 dark:border-gray-600 text-center">
        <div class="px-4 py-3 rounded bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-700 text-sm font-bold text-rose-800 dark:text-rose-200">Threats</div>
      </div>
    </div>
    <!-- Annotation -->
    <div class="mt-3 text-[10px] text-gray-500 dark:text-gray-400 text-center">
      Strengths &amp; Weaknesses = internal (RBV perspective) &nbsp;|&nbsp; Opportunities &amp; Threats = external (MBV perspective)
    </div>
  </div>
</div>

> **Important:** SWOT is the bridge between the two schools of competitive strategy. Strengths and Weaknesses come from internal analysis (RBV) — what the organization is good or bad at. Opportunities and Threats come from external analysis (MBV) — what the market allows or threatens. Effective strategy addresses all four quadrants.

---

## Strategic Alignment

The final piece: how do we ensure that business strategy and IT strategy are actually working together?

### Key Definitions

> **Definition:** **Strategic Fit** (Porter, 1996) — Strategic fit among many activities is fundamental not only to competitive advantage but also to the sustainability of that advantage. It is harder for a rival to match an array of interlocked activities than to imitate a single approach.

> **Definition:** **Strategic Alignment** (Reich & Benbasat, 2000) — The extent to which the business mission, objectives, and plans are supported by the IS mission, objectives, and plans.

> **Definition:** **Alignment** (Henderson & Venkatraman, 1993) — The degree of fit and integration among business strategy, IT strategy, business infrastructure, and IT infrastructure.

### The Strategic Alignment Model (SAM)

Henderson & Venkatraman (1993) proposed a 2x2 framework with four quadrants, organized along two dimensions: **Strategic Fit** (external strategy vs. internal infrastructure) and **Functional Integration** (business side vs. IT side).

<div class="not-prose my-8 flex justify-center">
  <div class="w-full max-w-2xl overflow-x-auto">
    <div style="min-width:32rem; padding:1rem 0;">
      <!-- Column headers -->
      <div style="display:grid; grid-template-columns:4rem 1fr 1fr; gap:0;">
        <div></div>
        <div class="text-center text-xs font-bold text-gray-700 dark:text-gray-200 pb-2">BUSINESS</div>
        <div class="text-center text-xs font-bold text-gray-700 dark:text-gray-200 pb-2">INFORMATION TECHNOLOGY</div>
      </div>
      <!-- Main grid -->
      <div style="display:grid; grid-template-columns:4rem 1fr 1fr; gap:0;">
        <!-- Row 1: External -->
        <div style="display:flex; align-items:center; justify-content:center;" class="text-xs font-bold text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800/40">
          <span style="writing-mode:vertical-rl; transform:rotate(180deg);">EXTERNAL</span>
        </div>
        <div style="padding:1rem;" class="border border-gray-300 dark:border-gray-600">
          <div class="px-3 py-3 rounded-lg bg-sky-100 dark:bg-sky-900/40 border border-sky-300 dark:border-sky-600">
            <div class="text-xs font-bold text-sky-900 dark:text-sky-100 mb-2">Business Strategy</div>
            <ul class="text-[10px] text-sky-800 dark:text-sky-200 space-y-0.5 list-disc list-inside">
              <li>Business Scope</li>
              <li>Distinctive Competencies</li>
              <li>Business Governance</li>
            </ul>
          </div>
        </div>
        <div style="padding:1rem;" class="border border-gray-300 dark:border-gray-600">
          <div class="px-3 py-3 rounded-lg bg-green-100 dark:bg-green-900/40 border border-green-300 dark:border-green-600">
            <div class="text-xs font-bold text-green-900 dark:text-green-100 mb-2">I/T Strategy</div>
            <ul class="text-[10px] text-green-800 dark:text-green-200 space-y-0.5 list-disc list-inside">
              <li>Technology Scope</li>
              <li>Systemic Competencies</li>
              <li>I/T Governance</li>
            </ul>
          </div>
        </div>
        <!-- Row 2: Internal -->
        <div style="display:flex; align-items:center; justify-content:center;" class="text-xs font-bold text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800/40">
          <span style="writing-mode:vertical-rl; transform:rotate(180deg);">INTERNAL</span>
        </div>
        <div style="padding:1rem;" class="border border-gray-300 dark:border-gray-600">
          <div class="px-3 py-3 rounded-lg bg-sky-50 dark:bg-sky-900/20 border border-sky-200 dark:border-sky-700">
            <div class="text-xs font-bold text-sky-800 dark:text-sky-200 mb-2">Organizational Infrastructure</div>
            <ul class="text-[10px] text-sky-700 dark:text-sky-300 space-y-0.5 list-disc list-inside">
              <li>Administrative Infrastructure</li>
              <li>Processes</li>
              <li>Skills</li>
            </ul>
          </div>
        </div>
        <div style="padding:1rem;" class="border border-gray-300 dark:border-gray-600">
          <div class="px-3 py-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700">
            <div class="text-xs font-bold text-green-800 dark:text-green-200 mb-2">I/S Infrastructure & Processes</div>
            <ul class="text-[10px] text-green-700 dark:text-green-300 space-y-0.5 list-disc list-inside">
              <li>Architectures</li>
              <li>Processes</li>
              <li>Skills</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Axis labels -->
      <div style="display:grid; grid-template-columns:4rem 1fr; gap:0;" class="mt-2">
        <div></div>
        <div class="text-center text-[10px] text-gray-500 dark:text-gray-400 font-semibold italic">← Functional Integration →</div>
      </div>
      <div style="position:relative;">
        <div class="text-[10px] text-gray-500 dark:text-gray-400 font-semibold italic" style="position:absolute; left:0; top:-8rem; writing-mode:vertical-rl; transform:rotate(180deg);">← Strategic Fit →</div>
      </div>
    </div>
  </div>
</div>

### Two Dimensions of Alignment

- **Strategic Fit:** Aligning external positioning (strategy) with internal arrangement (infrastructure and processes)
- **Functional Integration:** Aligning the business domain with the IT domain

### Four Dominant Alignment Perspectives

| Perspective | Driver | Top Mgmt Role | IS Mgmt Role | Performance Criteria |
|-------------|--------|---------------|--------------|---------------------|
| **Strategy Execution** | Business Strategy | Strategy Formulator | Strategy Implementor | Cost/Service Center |
| **Technology Transformation** | Business Strategy | Technology Visionary | Technology Architect | Technology Leadership |
| **Competitive Potential** | I/T Strategy | Business Visionary | Catalyst | Business Leadership |
| **Service Level** | I/T Strategy | Prioritizer | Executive Leadership | Customer Satisfaction |

> **Important:** The SAM model shows that alignment is not a one-time exercise — it requires continuous attention across all four perspectives. The choice of dominant perspective determines the roles of top management and IS management, and shapes how IT performance is measured.
