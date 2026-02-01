---
title: "Information and Communication Technologies"
chapter: 4
order: 1
description: "IT infrastructure definitions, CIO's ICT responsibilities, leader vs. follower strategy, cloud computing (IaaS, PaaS, BaaS, SaaS), computing stack, virtualization, containerization, and distributed systems"
---

## Context and IT Infrastructure

The **ICT layer** is the bottom layer of the Krcmar model — providing the technological foundation (storage, processing, communication) that supports the Information Systems layer above.

> **Definition:** Duncan (1995) defined IT infrastructure as *a set of shared, tangible IT resources that provide a foundation to enable present and future business applications*.

| Group | Examples |
|-------|----------|
| **Hardware** | Computers, servers, printing, peripherals |
| **Network and telecommunications** | Cable, phones, video equipment |
| **Data** | Databases, data warehouses |
| **Core data-processing applications** | Core systems, e.g. ERP, CRM |

> **Important:** Duncan's definition focuses on *tangible* resources. Other definitions also include people, organizational structures, and management processes.

---

## CIO's ICT Responsibilities

| # | Responsibility |
|---|---------------|
| 1 | **Observing and evaluating** technological developments |
| 2 | **Strategic planning** of technological decisions |
| 3 | **Development and protection** of competitively relevant technologies |
| 4 | **Internal and external exploitation** of technological capabilities |

> **Important:** The central strategic question: *Leader or follower strategy?* Leaders invest early in emerging tech for competitive advantage; followers wait for maturity, reducing risk but potentially missing first-mover benefits.

### The Innovation Matrix

| Quadrant | Strategy | Knowledge | Share |
|----------|----------|-----------|-------|
| **I** | Do what we do now, only better | Existing knowledge | **72%** |
| **II** | Do new things | Existing knowledge | **8%** |
| **III** | Do what we do now, only better | Leading-edge discoveries | **8%** |
| **IV** | Do new things | Leading-edge discoveries | **2%** |

> **Important:** 72% of ICT effort is incremental improvement with known technology. Only 2% targets genuinely new work with cutting-edge discoveries. The CIO's primary ICT job is to **keep services running** and **watch what's emerging**.

---

## The Gartner Hype Cycle

> **Definition:** The Hype Cycle plots technology **expectations** (y-axis) against **time** (x-axis), producing a curve with five phases. It helps CIOs decide **when** to invest — informing the leader vs. follower strategy.

<div class="not-prose my-8 flex justify-center">
  <div class="w-full max-w-2xl">
    <div class="rounded-lg border border-gray-200 dark:border-gray-700 p-4" style="background:rgba(100,116,139,0.03);">
      <div class="flex gap-2">
        <div class="flex items-center">
          <span class="text-xs text-gray-400 dark:text-gray-500 font-semibold italic" style="writing-mode: vertical-rl; transform: rotate(180deg);">expectations</span>
        </div>
        <div class="flex-1">
          <svg viewBox="0 0 520 230" class="w-full h-auto">
            <line x1="20" y1="170" x2="510" y2="170" stroke="currentColor" class="text-gray-300 dark:text-gray-600" stroke-width="1"/>
            <line x1="130" y1="5" x2="130" y2="170" stroke="currentColor" class="text-gray-200 dark:text-gray-700" stroke-width="1" stroke-dasharray="4,3"/>
            <line x1="220" y1="5" x2="220" y2="170" stroke="currentColor" class="text-gray-200 dark:text-gray-700" stroke-width="1" stroke-dasharray="4,3"/>
            <line x1="320" y1="5" x2="320" y2="170" stroke="currentColor" class="text-gray-200 dark:text-gray-700" stroke-width="1" stroke-dasharray="4,3"/>
            <line x1="410" y1="5" x2="410" y2="170" stroke="currentColor" class="text-gray-200 dark:text-gray-700" stroke-width="1" stroke-dasharray="4,3"/>
            <path d="M 30,160 C 60,158 80,150 100,135 C 120,115 135,75 150,45 C 165,18 175,12 185,12 C 195,12 205,22 215,48 C 235,88 250,125 265,145 C 278,158 290,162 305,157 C 330,148 350,135 370,122 C 390,112 410,105 440,100 C 465,97 490,96 510,96" fill="none" stroke="currentColor" class="text-sky-500 dark:text-sky-400" stroke-width="3" stroke-linecap="round"/>
            <circle cx="50" cy="158" r="4" fill="currentColor" class="text-sky-500 dark:text-sky-400"/>
            <circle cx="185" cy="12" r="4" fill="currentColor" class="text-amber-500 dark:text-amber-400"/>
            <circle cx="272" cy="150" r="4" fill="currentColor" class="text-red-400 dark:text-red-500"/>
            <circle cx="365" cy="125" r="4" fill="currentColor" class="text-purple-500 dark:text-purple-400"/>
            <circle cx="475" cy="97" r="4" fill="currentColor" class="text-green-500 dark:text-green-400"/>
            <text x="75" y="188" text-anchor="middle" font-size="7" font-weight="600" fill="currentColor" class="text-gray-500 dark:text-gray-400">Innovation</text>
            <text x="175" y="188" text-anchor="middle" font-size="7" font-weight="600" fill="currentColor" class="text-gray-500 dark:text-gray-400">Peak of Inflated</text>
            <text x="270" y="188" text-anchor="middle" font-size="7" font-weight="600" fill="currentColor" class="text-gray-500 dark:text-gray-400">Trough of</text>
            <text x="365" y="188" text-anchor="middle" font-size="7" font-weight="600" fill="currentColor" class="text-gray-500 dark:text-gray-400">Slope of</text>
            <text x="460" y="188" text-anchor="middle" font-size="7" font-weight="600" fill="currentColor" class="text-gray-500 dark:text-gray-400">Plateau of</text>
            <text x="75" y="198" text-anchor="middle" font-size="7" font-weight="600" fill="currentColor" class="text-gray-500 dark:text-gray-400">Trigger</text>
            <text x="175" y="198" text-anchor="middle" font-size="7" font-weight="600" fill="currentColor" class="text-gray-500 dark:text-gray-400">Expectations</text>
            <text x="270" y="198" text-anchor="middle" font-size="7" font-weight="600" fill="currentColor" class="text-gray-500 dark:text-gray-400">Disillusionment</text>
            <text x="365" y="198" text-anchor="middle" font-size="7" font-weight="600" fill="currentColor" class="text-gray-500 dark:text-gray-400">Enlightenment</text>
            <text x="460" y="198" text-anchor="middle" font-size="7" font-weight="600" fill="currentColor" class="text-gray-500 dark:text-gray-400">Productivity</text>
            <text x="270" y="220" text-anchor="middle" font-size="8" font-weight="600" font-style="italic" fill="currentColor" class="text-gray-400 dark:text-gray-500">time →</text>
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>

| Phase | What Happens |
|-------|-------------|
| **Innovation Trigger** | R&D breakthrough sparks interest; startups, first VC funding, first-gen products |
| **Peak of Inflated Expectations** | Mass hype; expectations exceed capability; negative press begins |
| **Trough of Disillusionment** | Failures dominate; supplier consolidation; <5% adoption |
| **Slope of Enlightenment** | Practical use cases emerge; second-gen products; best practices developing |
| **Plateau of Productivity** | Mainstream adoption; third-gen products; 20–30% adoption |

The Hype Cycle is a **management decision tool** (Gartner), not empirical science — positioning is based on consensus assessment of hype and maturity. Early phases are driven by hype levels; later phases by actual maturity data.

> **Important:** *Leaders* invest at the Innovation Trigger (high risk, high reward); *followers* wait for the Slope of Enlightenment (lower risk, proven value). Avoid investing heavily at the Peak — expectations are most inflated and disappointment most likely.

---

## Cloud Computing

| Model | What You Rent | You Manage | Provider Manages | Example |
|-------|--------------|------------|-----------------|---------|
| **IaaS** | Serviced hardware (VM) | OS, runtime, apps | Servers, storage, networking | AWS EC2 |
| **PaaS** | Serviced system for your service/container | Apps, data | OS, runtime, servers | AWS Elastic Beanstalk |
| **BaaS** | Ready-made backend (auth, DB, storage) | Frontend app | Entire backend stack | Firebase |
| **SaaS** | Fully serviced software | Nothing | Everything | Salesforce |

### The Computing Stack

<div class="not-prose my-8 flex justify-center">
  <div class="w-full max-w-xl">
    <div class="flex gap-2 mb-1">
      <div class="flex-1 px-4 py-2 rounded bg-green-100 dark:bg-green-900/40 border border-green-300 dark:border-green-700 text-green-900 dark:text-green-100 text-xs font-semibold text-center">Software Solution</div>
      <div class="px-3 py-2 rounded bg-green-200 dark:bg-green-800/60 border-2 border-green-400 dark:border-green-500 text-green-900 dark:text-green-100 text-xs font-bold text-center" style="width:4rem;">SaaS</div>
    </div>
    <div class="flex gap-2 mb-1">
      <div class="flex-1 px-4 py-2 rounded bg-green-100 dark:bg-green-900/40 border border-green-300 dark:border-green-700 text-green-900 dark:text-green-100 text-xs font-semibold text-center">Software Stack</div>
      <div class="px-3 py-2 rounded bg-green-200 dark:bg-green-800/60 border-2 border-green-400 dark:border-green-500 text-green-900 dark:text-green-100 text-xs font-bold text-center" style="width:4rem;">BaaS</div>
    </div>
    <div class="flex gap-2 mb-1">
      <div class="flex-1 flex flex-col gap-1">
        <div class="px-4 py-2 rounded bg-amber-100 dark:bg-amber-900/40 border border-amber-300 dark:border-amber-700 text-amber-900 dark:text-amber-100 text-xs font-semibold text-center">Database</div>
        <div class="px-4 py-2 rounded bg-amber-100 dark:bg-amber-900/40 border border-amber-300 dark:border-amber-700 text-amber-900 dark:text-amber-100 text-xs font-semibold text-center">Webserver</div>
        <div class="px-4 py-2 rounded bg-amber-100 dark:bg-amber-900/40 border border-amber-300 dark:border-amber-700 text-amber-900 dark:text-amber-100 text-xs font-semibold text-center">Operating System</div>
      </div>
      <div class="rounded bg-amber-200 dark:bg-amber-800/60 border-2 border-amber-400 dark:border-amber-500 text-amber-900 dark:text-amber-100 text-xs font-bold flex items-center justify-center" style="width:4rem;">PaaS</div>
    </div>
    <div class="flex gap-2">
      <div class="flex-1 flex flex-col gap-1">
        <div class="px-4 py-2 rounded bg-sky-100 dark:bg-sky-900/40 border border-sky-300 dark:border-sky-700 text-sky-900 dark:text-sky-100 text-xs font-semibold text-center">Hardware System</div>
        <div class="px-4 py-2 rounded bg-sky-100 dark:bg-sky-900/40 border border-sky-300 dark:border-sky-700 text-sky-900 dark:text-sky-100 text-xs font-semibold text-center">Storage System</div>
        <div class="px-4 py-2 rounded bg-sky-100 dark:bg-sky-900/40 border border-sky-300 dark:border-sky-700 text-sky-900 dark:text-sky-100 text-xs font-semibold text-center">Network</div>
      </div>
      <div class="rounded bg-sky-200 dark:bg-sky-800/60 border-2 border-sky-400 dark:border-sky-500 text-sky-900 dark:text-sky-100 text-xs font-bold flex items-center justify-center" style="width:4rem;">IaaS</div>
    </div>
    <div class="mt-3 flex justify-center gap-6 text-xs text-gray-500 dark:text-gray-400">
      <span class="flex items-center gap-1"><span class="inline-block w-3 h-2 rounded bg-sky-200 dark:bg-sky-800 border border-sky-400 dark:border-sky-600"></span> Infrastructure</span>
      <span class="flex items-center gap-1"><span class="inline-block w-3 h-2 rounded bg-amber-200 dark:bg-amber-800 border border-amber-400 dark:border-amber-600"></span> Platform</span>
      <span class="flex items-center gap-1"><span class="inline-block w-3 h-2 rounded bg-green-200 dark:bg-green-800 border border-green-400 dark:border-green-600"></span> Application</span>
    </div>
  </div>
</div>

> **Important:** The higher up the stack you consume as a service, the less you manage — but the less control you have. IaaS gives maximum flexibility; SaaS gives zero operational burden.

---

## Virtualization and Containerization

> **Definition:** **Virtualization** runs multiple **virtual machines (VMs)** on a single physical host via a **hypervisor**. Each VM has its own full OS.

> **Definition:** **Containers** are lightweight alternatives sharing the host OS kernel through a **container runtime** instead of each needing its own OS.

| Aspect | VMs | Containers |
|--------|-----|------------|
| **Abstraction layer** | Hypervisor | Container Runtime |
| **OS** | Each VM has its own full OS | Shared host OS kernel |
| **Weight** | Heavy (full OS per instance) | Lightweight (app + bins/libs only) |
| **Isolation** | Strong (separate OS) | Process-level (shared kernel) |
| **Coupling** | Isolated by design | Designed to be easily coupled |
| **Use case** | Full environments, legacy apps | Smaller services (DB, web, API) that interact |

### Traditional → Virtualized → Container

<div class="not-prose my-8 flex justify-center">
  <div class="w-full max-w-3xl overflow-x-auto">
    <div style="display:flex; align-items:flex-end; gap:0.5rem; min-width:40rem;">
      <!-- Traditional -->
      <div style="flex:1;" class="flex flex-col items-center gap-0">
        <div class="w-full flex gap-1 justify-center mb-1">
          <div class="px-2 py-1 rounded bg-gray-100 dark:bg-gray-700/40 border border-gray-300 dark:border-gray-600 text-xs font-medium text-gray-700 dark:text-gray-300">App</div>
          <div class="px-2 py-1 rounded bg-gray-100 dark:bg-gray-700/40 border border-gray-300 dark:border-gray-600 text-xs font-medium text-gray-700 dark:text-gray-300">App</div>
          <div class="px-2 py-1 rounded bg-gray-100 dark:bg-gray-700/40 border border-gray-300 dark:border-gray-600 text-xs font-medium text-gray-700 dark:text-gray-300">App</div>
        </div>
        <div class="w-full px-3 py-2 rounded bg-sky-200 dark:bg-sky-800/50 border border-sky-400 dark:border-sky-600 text-sky-900 dark:text-sky-100 text-xs font-semibold text-center">Operating System</div>
        <div class="w-full px-3 py-2 rounded bg-sky-300 dark:bg-sky-700/60 border border-sky-500 dark:border-sky-500 text-sky-900 dark:text-sky-100 text-xs font-semibold text-center mt-0.5">Hardware</div>
        <div class="text-xs font-semibold text-gray-600 dark:text-gray-300 mt-2">Traditional</div>
      </div>
      <div class="text-gray-400 dark:text-gray-500 text-lg pb-6">→</div>
      <!-- Virtualized -->
      <div style="flex:1;" class="flex flex-col items-center gap-0">
        <div class="w-full flex gap-1 justify-center mb-1">
          <div class="rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800/30 p-1 flex flex-col items-center gap-0.5">
            <div class="flex gap-0.5">
              <div class="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-700/40 border border-gray-300 dark:border-gray-600 text-xs text-gray-700 dark:text-gray-300">App</div>
              <div class="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-700/40 border border-gray-300 dark:border-gray-600 text-xs text-gray-700 dark:text-gray-300">App</div>
            </div>
            <div class="w-full px-1 py-0.5 rounded bg-sky-100 dark:bg-sky-900/40 border border-sky-300 dark:border-sky-700 text-xs text-sky-800 dark:text-sky-200 text-center">OS</div>
            <div class="text-xs text-gray-400 dark:text-gray-500">VM</div>
          </div>
          <div class="rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800/30 p-1 flex flex-col items-center gap-0.5">
            <div class="flex gap-0.5">
              <div class="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-700/40 border border-gray-300 dark:border-gray-600 text-xs text-gray-700 dark:text-gray-300">App</div>
              <div class="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-700/40 border border-gray-300 dark:border-gray-600 text-xs text-gray-700 dark:text-gray-300">App</div>
            </div>
            <div class="w-full px-1 py-0.5 rounded bg-sky-100 dark:bg-sky-900/40 border border-sky-300 dark:border-sky-700 text-xs text-sky-800 dark:text-sky-200 text-center">OS</div>
            <div class="text-xs text-gray-400 dark:text-gray-500">VM</div>
          </div>
        </div>
        <div class="w-full px-3 py-2 rounded bg-purple-100 dark:bg-purple-900/40 border border-purple-300 dark:border-purple-700 text-purple-900 dark:text-purple-100 text-xs font-semibold text-center">Hypervisor</div>
        <div class="w-full px-3 py-2 rounded bg-sky-200 dark:bg-sky-800/50 border border-sky-400 dark:border-sky-600 text-sky-900 dark:text-sky-100 text-xs font-semibold text-center mt-0.5">Operating System</div>
        <div class="w-full px-3 py-2 rounded bg-sky-300 dark:bg-sky-700/60 border border-sky-500 dark:border-sky-500 text-sky-900 dark:text-sky-100 text-xs font-semibold text-center mt-0.5">Hardware</div>
        <div class="text-xs font-semibold text-gray-600 dark:text-gray-300 mt-2">Virtualized</div>
      </div>
      <div class="text-gray-400 dark:text-gray-500 text-lg pb-6">→</div>
      <!-- Container -->
      <div style="flex:1;" class="flex flex-col items-center gap-0">
        <div class="w-full flex gap-1 justify-center mb-1">
          <div class="rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800/30 p-1 flex flex-col items-center gap-0.5">
            <div class="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-700/40 border border-gray-300 dark:border-gray-600 text-xs text-gray-700 dark:text-gray-300">App</div>
            <div class="w-full px-1 py-0.5 rounded bg-green-100 dark:bg-green-900/40 border border-green-300 dark:border-green-700 text-xs text-green-800 dark:text-green-200 text-center">Bin/Lib</div>
          </div>
          <div class="rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800/30 p-1 flex flex-col items-center gap-0.5">
            <div class="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-700/40 border border-gray-300 dark:border-gray-600 text-xs text-gray-700 dark:text-gray-300">App</div>
            <div class="w-full px-1 py-0.5 rounded bg-green-100 dark:bg-green-900/40 border border-green-300 dark:border-green-700 text-xs text-green-800 dark:text-green-200 text-center">Bin/Lib</div>
          </div>
          <div class="rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800/30 p-1 flex flex-col items-center gap-0.5">
            <div class="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-700/40 border border-gray-300 dark:border-gray-600 text-xs text-gray-700 dark:text-gray-300">App</div>
            <div class="w-full px-1 py-0.5 rounded bg-green-100 dark:bg-green-900/40 border border-green-300 dark:border-green-700 text-xs text-green-800 dark:text-green-200 text-center">Bin/Lib</div>
          </div>
        </div>
        <div class="w-full px-3 py-2 rounded bg-green-200 dark:bg-green-800/50 border border-green-400 dark:border-green-600 text-green-900 dark:text-green-100 text-xs font-semibold text-center">Container Runtime</div>
        <div class="w-full px-3 py-2 rounded bg-sky-200 dark:bg-sky-800/50 border border-sky-400 dark:border-sky-600 text-sky-900 dark:text-sky-100 text-xs font-semibold text-center mt-0.5">Operating System</div>
        <div class="w-full px-3 py-2 rounded bg-sky-300 dark:bg-sky-700/60 border border-sky-500 dark:border-sky-500 text-sky-900 dark:text-sky-100 text-xs font-semibold text-center mt-0.5">Hardware</div>
        <div class="text-xs font-semibold text-gray-600 dark:text-gray-300 mt-2">Container</div>
      </div>
    </div>
    <div class="mt-3 flex justify-center gap-5 text-xs text-gray-500 dark:text-gray-400">
      <span class="flex items-center gap-1"><span class="inline-block w-3 h-2 rounded bg-sky-200 dark:bg-sky-800 border border-sky-400 dark:border-sky-600"></span> Shared layers</span>
      <span class="flex items-center gap-1"><span class="inline-block w-3 h-2 rounded bg-purple-200 dark:bg-purple-800 border border-purple-400 dark:border-purple-600"></span> Hypervisor</span>
      <span class="flex items-center gap-1"><span class="inline-block w-3 h-2 rounded bg-green-200 dark:bg-green-800 border border-green-400 dark:border-green-600"></span> Container Runtime</span>
    </div>
  </div>
</div>

> **Important:** VMs virtualize the *hardware* (each runs a full OS); containers virtualize the *operating system* (share host kernel). Containers are faster to start, smaller, and easier to scale — but with weaker isolation than full VMs.

---

## Distributed Systems

> **Definition:** "A distributed system is one in which the failure of a computer you didn't even know existed can render your own computer unusable." — Leslie Lamport

> **Important:** Distributed systems are the inevitable consequence of cloud computing and containerized microservices. Failure is *normal* — designing for resilience (redundancy, graceful degradation, circuit breakers) is a core ICT management concern.
