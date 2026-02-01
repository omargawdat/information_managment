---
title: "Introduction"
chapter: 1
order: 1
description: "Why information matters, what information is, information systems, and information management"
---

## Part 1: Why Information Management Matters

Every organization depends on three fundamental resources (Picot, 1988):

1. **Materials** — the physical building blocks. Without raw materials, nothing can exist in the first place.
2. **Energy** — the driving force. Without energy, no process can run and nothing happens.
3. **Information** — the guiding intelligence. Without information, decisions cannot be made and nothing makes sense.

Information is what allows a company to coordinate its materials and energy effectively. This is why **Information Management** exists as a discipline — it treats information as a critical resource that must be planned, organized, and governed just like any other.

### The Digitalization Imperative

The COVID-19 pandemic confirmed how critical digitalization is: **95%** of companies said digitalization gained importance, and roughly **77%** of companies with already-digitalized business models and processes coped better with the crisis (Bitkom Research 2021). Meanwhile, Industry 4.0 is reshaping the workforce — **68%** of companies are investing in further training, while the same share agrees that Industry 4.0 eliminates jobs for low-qualified workers (Bitkom Research 2020).

### The Complexity Challenge

The IT landscape is growing more complex every year. Companies must now deal with:

- **Artificial Intelligence** — automating decisions and processes
- **Natural Language Processing** — enabling machines to understand and generate human text
- **Cloud Technologies** — shifting infrastructure from on-premise to scalable remote services
- **Containerization** — packaging software for portable, consistent deployment (e.g., Docker)
- **Thousands of software stacks** — an ever-growing ecosystem of tools and frameworks
- **BYOD (Bring Your Own Device)** — employees using personal devices for work, creating security and management challenges

The core question for any company becomes: **how do you manage all of this?** That is exactly what Information Management addresses — providing structure and strategy to handle IT complexity.

## Part 2: What Is Information?

### Properties of Information (Business Good)

From a business perspective, information behaves very differently from physical goods. It has unique properties:

- **Immaterial** — information has no physical form and is not consumed through use. You can read a report a thousand times without "using it up."
- **Value-creating** — information provides direct benefits to whoever uses it (e.g., a market report helps a company make better investment decisions).
- **Not a free good** — unlike air, information costs money to produce, maintain, and distribute. It has a measurable economic value.
- **Context-dependent** — the same piece of information can be extremely valuable or worthless depending on when and where it is used. Yesterday's stock price is far less useful than today's.
- **Adjustable in value** — you can increase or decrease the value of information by adding to it, filtering it, making it more specific, or removing irrelevant parts.
- **Has quality dimensions** — information can be measured by its completeness, correctness, timeliness, and relevance.
- **Easily copied** — digital information can be duplicated perfectly without any loss in quality, unlike physical goods.
- **Requires standardized encoding** — to be shared and transported, information must be represented in agreed-upon formats (e.g., UTF-8, JSON, PDF).
- **Transportable at the speed of light** — once encoded digitally, information can travel across the globe almost instantly.

#### Example: Information Travels Faster Than Earthquakes

A vivid illustration of information's speed (xkcd #723): When an earthquake hits, people post about it online within 20-30 seconds. Seismic waves travel at 3-5 km/s, but fiber optic signals travel at ~200,000 km/s. This means that once the quake is about 100 km out, tweets and messages about the earthquake actually **overtake the physical shockwave**. People farther away can learn about the quake via Twitter or SMS **before the shaking reaches them**. This perfectly demonstrates how digital information, once created, can outpace even physical phenomena.

### Three Perspectives on What "Information" Means

Different fields define information differently. There are three major viewpoints:

#### 1. Information as a Process

*"I am being informed."*

Here, information is seen as the **act of communicating** — a dynamic process where someone receives and processes new input. The focus is on the flow: a sender transmits something, and a receiver becomes informed. Information is not a static object but something that happens.

#### 2. Information as Knowledge

*"It's intangible, subjective, stored in my mind."*

In this view, information is equated with **knowledge** — something that lives inside a person's head. It is subjective and intangible. Two people reading the same report may extract different information from it, because their prior knowledge and context differ. This perspective highlights that information is deeply personal and interpretive.

#### 3. Information as a Thing

*"Information can be stored and retrieved, e.g. in a book."*

This treats information as a **tangible, storable object** — a document, a database record, a file. It can be written down, saved, searched, and retrieved. This is the perspective most relevant to IT systems, where information must be physically represented and managed.

### Shannon Information Theory

Beyond the three perspectives above, Claude Shannon defined information mathematically as a **quantification of surprise**: the more unexpected a message is, the more information it carries. If something is completely predictable, it contains zero information. If it is highly surprising, it contains a lot. This perspective underpins all of digital communication — it is the basis for how data compression, encoding, and transmission work.

Shannon formalized how to **measure** information:

- An event with **100% probability** is completely unsurprising and carries **zero information**.
- The **less probable** an event, the more surprising it is, and the **more information** it yields.
- For two **independent events**, the total information is the **sum** of their individual information values.

**Self-information formula:** `I(x) = -log_b(P(x))`

Where `P(x)` is the probability of event x. The base `b` is typically 2, which gives the result in **bits**.

**Entropy** is the **average information** across all possible events in a system. It measures the overall disorder or uncertainty:

`H = -SUM(p_z * log2(p_z))` for all events z

**Practical meaning:** Entropy tells you the minimum number of bits you would need to perfectly compress and describe the data. High entropy = high randomness = more bits needed. Low entropy = predictable = fewer bits needed.

### The Information Hierarchy: Symbols, Data, Information, Knowledge

Understanding the difference between these four levels is fundamental. Each builds on the one below it:

#### Level 1: Symbols

The raw alphabet — characters, digits, and signs like `[a-Z, 0-9, +, -, %, :]`. Symbols have no meaning on their own. They are just the building blocks.

#### Level 2: Data (Valid Expressions)

When symbols are arranged according to a **grammar** (syntax rules), they form valid expressions — this is **data**. For example, `FRA:VOW3 +5%` is data: it follows the syntax rules of stock ticker notation. But if you don't know what stock tickers are, it's just a string of characters.

**Definition:** Data is a set of analog or digital symbols that someone might perceive and ascribe meaning to (Amy Ko).

#### Level 3: Information

When data is placed into **context** and given **meaning** (semantics), it becomes information. The data `FRA:VOW3 +5%` becomes information when you know it means "Volkswagen stock rose 5% on the Frankfurt Stock Exchange." The same data means nothing to someone without that context.

**Definition:** Information is data that has been shaped into a form that is meaningful and useful (Laudon & Laudon).

#### Level 4: Knowledge

When information is connected to other information in a person's mind — forming a **network** of understanding — it becomes knowledge. Knowing that VW stock rose 5% is information. Connecting it to VW's e-mobility strategy and concluding "I should consider investing" is knowledge.

**Definition:** Knowledge is an interconnected system of information in a mind (Amy Ko).

#### How the Levels Connect

The transitions between levels are governed by different concepts:

- **Symbols → Data:** governed by **Syntax** (grammar rules that determine valid expressions)
- **Data → Information:** governed by **Semantics** (meaning assigned through context)
- **Information → Knowledge:** governed by **Pragmatics** (actions and actors — what you do with the information)

**Important note on "Knowledge":** This is the trickiest level. Knowledge is subjective and lives inside a person's mind. It cannot be directly stored in a computer — only information and data can. What we often call "knowledge bases" are really structured information that helps humans build knowledge.

### The Role of Context

Context fundamentally changes how data and information are interpreted. The same words can carry completely different meanings depending on context.

**Example:** Consider these statements in sequence:
- "I have been to war."
- "In that war, I have killed many people."
- "Sometimes, killing in that war brought me joy and laughter."

Without context, these are alarming. But with context: the "war" was Call of Duty Black Ops — a video game played with friends. The identical data carries a completely different meaning.

#### What Shapes Context?

When evaluating any piece of information or data, always ask:

- **How** was it created?
- **When** was it created?
- **For whom** was it created?
- **Who** created it?
- **Why** was it created?

These same questions apply equally to data. Be careful when interpreting data without understanding its context — this is where **ethical issues** and **room for manipulation** arise. Data stripped of its context can be misleading or used to deceive.

## Part 3: Information Systems

### From Technology to Information Systems

Technology is any application of knowledge for practical purposes. Looking at history, a clear trend emerges — technology increasingly revolves around **information**:

| Era | Technology |
|-----|-----------|
| 15000 BC | Stone tools |
| 2700 BC | **Abacus** (early computation) |
| 1400's | **Printing press** (mass information distribution) |
| 1920's | **Television** (broadcast information) |
| 1970's | **Computers** |
| 1980's | **Cell phones** |
| 1990's | **Internet** |
| 2000's | **Smartphones** |

The trend is clear: from the abacus onward, an increasing share of major technologies are **information technologies**. Modern "technology" is now nearly synonymous with IT.

### What Is an Information System?

An Information System takes **data as input** and produces **information as output**. It transforms raw data into something meaningful and actionable.

**Example:** A Warehouse Management System takes in customer orders, arrival records, and stocktaking results. It outputs the answer to: "Which goods need to be ordered?" — turning raw data into a decision-ready piece of information.

### Components of an Information System

An Information System is not just software. It consists of two major parts:

1. **Human** — the people who use, operate, and make decisions based on the system
2. **Machine** — the technical side, which breaks down further:
   - **Hardware** — physical servers, computers, network equipment
   - **Application** — the software layer, which contains:
     - **Data** — what the system stores and processes
     - **Processes** — the workflows the system executes, composed of:
       - **Functions** — individual operations (e.g., a database lookup)
       - **Connections** — the logic linking functions together (e.g., "if lookup returns >0 results, show results")

### Example: Virtual Hospital System

Applying this structure to a real scenario — a virtual hospital where patients search for specialist doctors:

- **Human:** Doctors (who register their expertise)
- **Machine:**
  - **Hardware:** Servers + Client devices
  - **Application:** "Search-for-Expert" application
    - **Data:** Registered doctors with their expertise
    - **Processes:** Search process
      - **Functions:** DBMS lookup
      - **Connections:** "If DBMS lookup returns >0 results, execute show results"

## Part 4: Information Management

### Definition

**Management** is the activity of setting strategy and coordinating efforts to accomplish objectives through available resources (financial, natural, technological, human).

**Information Management** is the discipline that oversees the investment in new information systems and the operation of existing ones. It requires diverse management skills to deliver the benefits of information systems investments (Bytheway, 2003).

In simpler terms: Information Management is about **deciding which IT systems a company needs, building them, running them, and ensuring they deliver value**.

The core challenge for leaders today is to prepare organizations to respond to rapid change — to be resilient, innovative, agile, and adaptive. Information Management provides the framework for doing this through IT (Hoque et al., 2007).

### Viewpoints on Information Management

There are multiple ways to look at what IM actually involves. Each viewpoint highlights a different aspect.

#### Viewpoint 1: Task-Oriented

This viewpoint sees IM as **a set of tasks** and describes it through four dimensions:

**Goals** — what IM aims to achieve:
- Profit / cost reduction
- IT strategy definition
- Service-orientation
- HR development
- Change management

**Tasks** — the concrete activities IM performs:
- Develop and implement IT strategy
- Plan and control IT architecture
- IT service management
- IT project management
- Organization and management in the IT area
- IT controlling
- License management
- Quality management
- IT governance
- IT security management
- IT risk management
- IT compliance and management of legal frameworks

**Roles** — who carries out IM:
- Translators to all sides (bridging business and IT)
- Project leads
- Point of contact
- Deciders

**Situations** — the challenges IM professionals face:
- Must communicate across all organizational levels
- Indirect governance (influence without direct authority)
- Large span of topics to cover
- "Sandwich" position (pressure from above and below)
- Challenging stakeholders
- Goal conflicts between departments

#### Viewpoint 2: Layer-Oriented

This viewpoint structures IM into **three layers**, where each upper layer sends requirements downward and each lower layer provides support upward:

1. **Layer of Information Application** (top) — the business side: what information does the organization need?
2. **Layer of Information and Communication Systems** (middle) — the software: which applications and systems process the information?
3. **Layer of Infrastructure** (bottom) — the hardware: storage, networks, servers that run everything

Each layer depends on the one below it: business needs drive system requirements, and system requirements drive infrastructure decisions.

#### Viewpoint 3: Consolidated (Krcmar Model)

The Krcmar model combines all perspectives into a comprehensive framework with **one overarching management block** and **three managed areas**:

**Managing Information Management** (overarching) — the strategic and organizational side:
- IT Strategy, IT Governance, IT Processes, IT HR, IT Controlling, IT Security

This block governs three areas:

1. **Management of the Information Economy** — the demand side (users):
   - Demand, Supply, Usage
   - Audience: **IT Users** (IT is a tool being used)

2. **Management of Information Systems** — the systems themselves:
   - Data, Processes, Application Life Cycle and Landscape
   - Audience: **IT Specialists** (IT is the content of their work)

3. **Management of Information and Communication Technologies** — the infrastructure:
   - Storage, Processing, Communicating, Tech Stacks
   - (Supports the systems layer above)

### The CIO (Chief Information Officer)

The role responsible for Information Management has evolved significantly:

- **Previously:** Organized under the CFO, seen as a cost factor, essentially the "head of data center"
- **Now:** Often a board member, reporting directly to the CEO, tasked with **driving innovation** across the company

This shift reflects how IT moved from being a back-office cost center to a strategic driver of business value.
