$base = "C:\xampp\htdocs\ai-engineering-journey\docs\courses\software-engineering"
$utf8 = [System.Text.Encoding]::UTF8

function Process-File {
    param($Path, $ScriptBlock)
    $c = [System.IO.File]::ReadAllText($path, $utf8)
    $c = $c.Replace("`r`n", "`n")  # normalize to LF
    & $ScriptBlock
    $c = $c.Replace("`n", "`r`n")  # restore CRLF
    [System.IO.File]::WriteAllText($path, $c, $utf8)
}

# ===== 01-process-models.md =====
$path = Join-Path $base "01-process-models.md"
Process-File $path {
    $c = $c.Replace("# Software Process Models`n`n", "# Software Process Models`n`n> **Previous:** None | **Next:** [Requirements Engineering](./02-requirements.md)`n`n")
    $o = "and compare process models to select an appropriate approach for a given project context."
    $g = "`n`n## Chapter at a Glance`n`n| Topic | Key Insight | Practical Takeaway |`n|-------|-------------|-------------------|`n| Software Process | Structured set of activities for development | Always define the process before starting any project |`n| Waterfall Model | Sequential phases with formal milestones | Best for stable, well-understood requirements |`n| Incremental and Iterative | Deliver features incrementally, refine iteratively | Reduces risk by delivering working software early |`n| Spiral Model | Risk-driven development with prototyping | Ideal for large, complex, high-risk systems |`n| Agile Manifesto | Individuals, working software, collaboration, change | Adopt agile values even in plan-driven environments |`n`n## Chapter Roadmap`n`n```mermaid`nflowchart LR`n    A[Software Processes] --> B[Waterfall Model]`n    A --> C[V-Model]`n    A --> D[Incremental Iterative]`n    A --> E[Spiral Model]`n    A --> F[Unified Process]`n    A --> G[Agile Methods]`n    G --> H[XP]`n    G --> I[Scrum]`n```"
    $c = $c.Replace($o, $o + $g)
    $c = $c.Replace("### The Software Process`n`nA software process is a structured set", "> **One-Sentence Takeaway:** A software process model organises specification, design, validation, and evolution activities.`n`n### The Software Process`n`nA software process is a structured set")
    $c = $c.Replace("### The Waterfall Model`n`nThe Waterfall model, first described by Royce", "> **Warning:** The Waterfall model assumes fully knowable requirements - which fails for most real-world projects. Always validate this assumption.`n`n> **One-Sentence Takeaway:** Waterfall offers clarity but fails when requirements are uncertain.`n`n### The Waterfall Model`n`nThe Waterfall model, first described by Royce")
    $c = $c.Replace("### The V-Model`n`nThe V-model is an extension of the Waterfall model", "> **Pro Tip:** Use the V-model when regulatory traceability is mandatory - it links requirements directly to acceptance tests.`n`n> **One-Sentence Takeaway:** The V-model pairs each development phase with a corresponding test phase.`n`n### The V-Model`n`nThe V-model is an extension of the Waterfall model")
    $c = $c.Replace("### Incremental and Iterative Development`n`nIncremental development delivers the system", "> **One-Sentence Takeaway:** Incremental adds features; iterative refines them - most modern processes combine both.`n`n### Incremental and Iterative Development`n`nIncremental development delivers the system")
    $c = $c.Replace("### The Spiral Model`n`nThe Spiral model, proposed by Boehm", "> **One-Sentence Takeaway:** The Spiral model's hallmark is explicit risk analysis in every development loop.`n`n### The Spiral Model`n`nThe Spiral model, proposed by Boehm")
    $c = $c.Replace("### The Unified Process`n`nThe Unified Process is an iterative and incremental framework", "> **One-Sentence Takeaway:** The Unified Process is use-case driven, architecture-centric, and iterative over four phases.`n`n### The Unified Process`n`nThe Unified Process is an iterative and incremental framework")
    $c = $c.Replace("### The Agile Manifesto`n`nIn 2001, seventeen software practitioners", "> **One-Sentence Takeaway:** The Agile Manifesto's four values prioritise people, working software, collaboration, and adaptability.`n`n### The Agile Manifesto`n`nIn 2001, seventeen software practitioners")
    $c = $c.Replace("### Extreme Programming`n`nExtreme Programming (XP), developed by Beck", "> **One-Sentence Takeaway:** XP takes good practices to extremes - continuous review, test-first, and relentless refactoring.`n`n### Extreme Programming`n`nExtreme Programming (XP), developed by Beck")
    $c = $c.Replace("### Scrum`n`nScrum is an agile framework for managing complex projects", "> **One-Sentence Takeaway:** Scrum provides minimal roles, events, and artefacts for self-organising, iterative development.`n`n### Scrum`n`nScrum is an agile framework for managing complex projects")
    $s = "## Summary`n`nSoftware process models provide structure and guidance"
    $r = "## Concept Comparison Table
| Model | Flexibility | Risk Management | Documentation | Customer Involvement | Best For |
|-------|-------------|----------------|---------------|---------------------|----------|
| Waterfall | Low | None | Heavy | Low | Stable requirements |
| V-Model | Low | Verification-driven | Heavy | Low | Safety-critical systems |
| Incremental | Medium | Early feedback | Medium | Medium | Rapid delivery needed |
| Spiral | High | Explicit per loop | Medium | Medium | Large, risky projects |
| Unified Process | Medium | Architecture-driven | Heavy | Medium | Enterprise systems |
| Scrum | High | Inspection and adaptation | Light | High | Evolving requirements |

## Quick Reference

| Concept | Definition | Key Benefit |
|---------|------------|-------------|
| Software Process | Set of activities for building software | Structure and repeatability |
| Process Model | Abstract representation of a process | Enables comparison and selection |
| Increment | Usable subset delivered early | Reduces risk, provides early value |
| Iteration | Repeated refinement of components | Improves quality over time |
| Risk Analysis | Identifying and mitigating project risks | Prevents costly late-stage failures |

## Cross-Application Matrix

| Domain | Recommended Model | Rationale |
|--------|-------------------|-----------|
| E-commerce startup | Scrum | Rapid iteration, evolving requirements |
| Flight control system | V-Model + Spiral | Traceability + risk management |
| Government tax system | Waterfall | Fixed scope, regulatory documentation |
| Mobile game | Scrum/XP | Fast feedback, creative exploration |
| Enterprise ERP | Unified Process | Architecture-centric, multi-team |

## Chapter Quiz

1. Which process model introduces explicit risk analysis in each phase?
   A) Waterfall
   B) V-Model
   C) Spiral Model
   D) Unified Process

<details><summary>Answer</summary>**C)** Spiral Model - each loop includes risk identification, analysis, and resolution.</details>

2. What is the primary advantage of incremental development over Waterfall?
   A) Lower cost
   B) Earlier delivery of working software
   C) More documentation
   D) Simpler team structure

<details><summary>Answer</summary>**B)** Incremental development delivers working software early, enabling feedback and partial deployment.</details>

3. Which Scrum event is time-boxed to 15 minutes?
   A) Sprint Planning
   B) Sprint Review
   C) Daily Scrum
   D) Sprint Retrospective

<details><summary>Answer</summary>**C)** The Daily Scrum is a 15-minute synchronisation event for the Development Team.</details>

4. How many values does the Agile Manifesto articulate?
   A) Two
   B) Four
   C) Twelve
   D) Seven

<details><summary>Answer</summary>**B)** The Agile Manifesto articulates four values and twelve principles.</details>

## Summary

Software process models provide structure and guidance"
    $c = $c.Replace($s, $r)
}
Write-Host "OK 01-process-models.md"

# ===== 02-requirements.md =====
$path = Join-Path $base "02-requirements.md"
Process-File $path {
    $c = $c.Replace("# Requirements Engineering`n`n", "# Requirements Engineering`n`n> **Previous:** [Software Process Models](./01-process-models.md) | **Next:** [System Modelling](./03-system-modeling.md)`n`n")
    $o = "and manage requirements through traceability, prioritisation, and change control."
    $g = "`n`n## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| Requirements Types | Functional, non-functional, domain | Non-functional are often more critical than functional |
| Feasibility Study | Technical, economic, operational assessment | Always validate feasibility before committing resources |
| Elicitation Techniques | Interviews, surveys, observation, workshops, prototypes | Use multiple techniques to discover implicit requirements |
| Specification Formats | IEEE 830, user stories, use cases | Choose format based on project context |
| Validation | Reviews, prototyping, test-case generation | Catch defects early - cost of fixing grows exponentially |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Feasibility Study] --> B[Elicitation]
    B --> C[Specification]
    C --> D[Validation]
    D --> E[Management]
    C --> F[IEEE 830 SRS]
    C --> G[User Stories]
    C --> H[Use Cases]
```"
    $c = $c.Replace($o, $o + $g)
    $c = $c.Replace("### The Requirements Engineering Process`n`nRequirements engineering is the branch", "> **One-Sentence Takeaway:** Requirements engineering is an iterative process of feasibility, elicitation, specification, and validation.`n`n### The Requirements Engineering Process`n`nRequirements engineering is the branch")
    $c = $c.Replace("### Types of Requirements`n`nRequirements are commonly classified", "> **Pro Tip:** Frame non-functional requirements with quantifiable targets like 'response time < 2 seconds under 1000 concurrent users' so they are testable.`n`n> **One-Sentence Takeaway:** Non-functional requirements often determine system success more decisively than functional ones.`n`n### Types of Requirements`n`nRequirements are commonly classified")
    $c = $c.Replace("### Feasibility Study`n`nA feasibility study assesses", "> **One-Sentence Takeaway:** A feasibility study answers three questions: can we build it, can we afford it, can the organisation adapt.`n`n### Feasibility Study`n`nA feasibility study assesses")
    $c = $c.Replace("### Requirements Elicitation`n`nElicitation is the process of discovering requirements from stakeholders", "> **Warning:** Users often cannot articulate what they need - implicit requirements are best found through observation and prototyping.`n`n> **One-Sentence Takeaway:** The best elicitation combines multiple techniques; no single method captures all requirements.`n`n### Requirements Elicitation`n`nElicitation is the process of discovering requirements from stakeholders")
    $c = $c.Replace("### Requirements Specification`n`nThe requirements specification documents", "> **One-Sentence Takeaway:** The specification format - SRS, user stories, or use cases - shapes how requirements are communicated.`n`n### Requirements Specification`n`nThe requirements specification documents")
    $c = $c.Replace("### Requirements Validation`n`nValidation ensures that the specified requirements", "> **One-Sentence Takeaway:** Validation catches omissions, inconsistencies, and ambiguities before implementation - the cheapest time to fix them.`n`n### Requirements Validation`n`nValidation ensures that the specified requirements")
    $c = $c.Replace("### Requirements Management`n`nRequirements management encompasses", "> **One-Sentence Takeaway:** Traceability, prioritisation, and change control keep the specification trustworthy across the lifecycle.`n`n### Requirements Management`n`nRequirements management encompasses")
    $s = "## Summary`n`nRequirements engineering is the foundation"
    $r = "## Concept Comparison Table

| Aspect | IEEE 830 SRS | User Stories | Use Cases |
|--------|-------------|--------------|-----------|
| Formality | High | Low | Medium |
| Best For | Plan-driven projects | Agile projects | Interactive systems |
| Detail Level | Comprehensive | Minimal | Moderate |
| Stakeholder Accessibility | Limited | High | Medium |
| Maintenance Cost | High | Low | Medium |
| Traceability | Built-in | Requires tooling | Good |

## Quick Reference

| Concept | Definition | Example |
|---------|------------|---------|
| Functional Requirement | What the system must do | Search catalogue by author |
| Non-Functional Requirement | Constraint on behaviour | Response under 2 seconds |
| Domain Requirement | Characteristic of the domain | Interest calculated daily |
| Feasibility | Can we build it | Technical, economic, operational |
| MoSCoW | Prioritisation technique | Must, Should, Could, Won't |
| Traceability Matrix | Links requirements to artefacts | REQ-001 to Design to Test |

## Cross-Application Matrix

| Domain | Elicitation Technique | Specification Format |
|--------|----------------------|---------------------|
| Healthcare | Observation + Interviews | IEEE 830 + Use Cases |
| E-commerce | Surveys + Prototyping | User Stories |
| Banking | Workshops + Document Analysis | IEEE 830 |
| Mobile App | Prototyping + Focus Groups | User Stories |
| Embedded Systems | Document Analysis + Interviews | IEEE 830 |

## Chapter Quiz

1. Which requirement type is most likely to render a system unacceptable if unmet?
   A) Functional
   B) Non-functional
   C) Domain
   D) Technical

<details><summary>Answer</summary>**B)** Non-functional requirements - a system that is too slow or insecure is often unusable.</details>

2. What does MoSCoW stand for?
   A) Must, Should, Could, Won't
   B) Might, Shall, Can, Will
   C) Minimum, Standard, Complete, Wide
   D) Major, Secondary, Critical, Wish

<details><summary>Answer</summary>**A)** MoSCoW stands for Must have, Should have, Could have, Won't have.</details>

3. Which elicitation technique is best for discovering implicit requirements?
   A) Survey
   B) Observation
   C) Interview
   D) Document analysis

<details><summary>Answer</summary>**B)** Observation reveals what users actually do, which often differs from what they say.</details>

## Summary

Requirements engineering is the foundation"
    $c = $c.Replace($s, $r)
}
Write-Host "OK 02-requirements.md"

# ===== 03-system-modeling.md =====
$path = Join-Path $base "03-system-modeling.md"
Process-File $path {
    $c = $c.Replace("# System Modelling`n`n", "# System Modelling`n`n> **Previous:** [Requirements Engineering](./02-requirements.md) | **Next:** [Architectural Design](./04-architectural-design.md)`n`n")
    $o = "and write constraints using the Object Constraint Language."
    $g = "`n`n## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| Purpose of Modelling | Abstract representations from perspectives | Models facilitate communication and drive implementation |
| UML | 13 diagram types: structural and behavioural | UML is the industry standard for software modelling |
| Use Case Diagrams | Actors, use cases, include/extend relationships | Excellent for defining system boundaries |
| Class Diagrams | Classes, attributes, operations, relationships | Foundation for object-oriented design |
| Sequence and Activity Diagrams | Interaction over time, control flow | Essential for detailing use case logic |
| Model-Driven Engineering | Models as primary artefacts | Enables automatic code generation from models |

## Chapter Roadmap

```mermaid
flowchart LR
    A[System Modelling] --> B[UML Structure]
    A --> C[UML Behaviour]
    B --> D[Class Diagram]
    B --> E[Component Diagram]
    B --> F[Deployment Diagram]
    C --> G[Use Case Diagram]
    C --> H[Sequence Diagram]
    C --> I[Activity Diagram]
    C --> J[State Machine]
    A --> K[DFD ER]
    A --> L[MDE MDA]
```"
    $c = $c.Replace($o, $o + $g)
    $c = $c.Replace("### The Purpose of System Modelling`n`nSystem modelling is the process", "> **One-Sentence Takeaway:** Models serve as communication bridges between stakeholders and developers, not merely documentation.`n`n### The Purpose of System Modelling`n`nSystem modelling is the process")
    $c = $c.Replace("### The Unified Modeling Language`n`nThe Unified Modeling Language (UML) is a general-purpose visual modelling language", "> **Pro Tip:** You do not need all 13 UML diagrams for every project - select the subset that adds clarity for your stakeholders.`n`n> **One-Sentence Takeaway:** UML provides 13 diagram types across structural and behavioural categories.`n`n### The Unified Modeling Language`n`nThe Unified Modeling Language (UML) is a general-purpose visual modelling language")
    $c = $c.Replace("### Use Case Diagrams`n`nUse case diagrams show the interactions", "> **One-Sentence Takeaway:** Use case diagrams establish the system boundary and are accessible to non-technical stakeholders.`n`n### Use Case Diagrams`n`nUse case diagrams show the interactions")
    $c = $c.Replace("### Class Diagrams`n`nClass diagrams describe the static structure", "> **One-Sentence Takeaway:** Class diagrams capture static structure - classes, attributes, operations, and relationships with multiplicity.`n`n### Class Diagrams`n`nClass diagrams describe the static structure")
    $c = $c.Replace("### Sequence Diagrams`n`nSequence diagrams model the interactions", "> **One-Sentence Takeaway:** Sequence diagrams show message ordering over time, ideal for detailing use case scenarios.`n`n### Sequence Diagrams`n`nSequence diagrams model the interactions")
    $c = $c.Replace("### Activity Diagrams`n`nActivity diagrams model the flow of control", "> **One-Sentence Takeaway:** Activity diagrams model control flow with forks, joins, decisions, and swimlanes for concurrent behaviour.`n`n### Activity Diagrams`n`nActivity diagrams model the flow of control")
    $c = $c.Replace("### State Machine Diagrams`n`nState machine diagrams model the behaviour", "> **One-Sentence Takeaway:** State machine diagrams model event-driven behaviour over an object's lifetime with hierarchical states.`n`n### State Machine Diagrams`n`nState machine diagrams model the behaviour")
    $c = $c.Replace("### Component Diagrams`n`nComponent diagrams show the organisation", "> **One-Sentence Takeaway:** Component diagrams reveal modular structure and interface dependencies of a software system.`n`n### Component Diagrams`n`nComponent diagrams show the organisation")
    $c = $c.Replace("### Deployment Diagrams`n`nDeployment diagrams show the physical deployment", "> **One-Sentence Takeaway:** Deployment diagrams map software components to hardware nodes for performance and reliability analysis.`n`n### Deployment Diagrams`n`nDeployment diagrams show the physical deployment")
    $c = $c.Replace("### UML versus SysML`n`nThe Systems Modeling Language (SysML) is a profile", "> **One-Sentence Takeaway:** SysML extends UML for systems engineering with requirements and parametric diagrams.`n`n### UML versus SysML`n`nThe Systems Modeling Language (SysML) is a profile")
    $c = $c.Replace("### Data Flow Diagrams`n`nData flow diagrams (DFDs) model the flow of data", "> **One-Sentence Takeaway:** DFDs model data flow hierarchically from context diagram to detailed process levels.`n`n### Data Flow Diagrams`n`nData flow diagrams (DFDs) model the flow of data")
    $c = $c.Replace("### Entity-Relationship Diagrams`n`nEntity-relationship (ER) diagrams model the data perspective", "> **One-Sentence Takeaway:** ER diagrams model entity types, attributes, and relationships - central to database design.`n`n### Entity-Relationship Diagrams`n`nEntity-relationship (ER) diagrams model the data perspective")
    $c = $c.Replace("### Model-Driven Engineering`n`nModel-driven engineering (MDE) elevates models", "> **Remember:** MDE is most valuable when deploying on multiple platforms - the PIM stays the same while PSMs vary by target.`n`n> **One-Sentence Takeaway:** MDE elevates models to primary artefacts enabling automatic transformation from PIM to PSM to code.`n`n### Model-Driven Engineering`n`nModel-driven engineering (MDE) elevates models")
    $c = $c.Replace("### Object Constraint Language`n`nThe Object Constraint Language (OCL) is a formal language", "> **One-Sentence Takeaway:** OCL adds formal precision to UML models through invariants, preconditions, and postconditions.`n`n### Object Constraint Language`n`nThe Object Constraint Language (OCL) is a formal language")
    $s = "## Summary`n`nSystem modelling provides multiple perspectives"
    $r = "## Concept Comparison Table

| Diagram Type | Category | Purpose | Key Elements |
|-------------|----------|---------|--------------|
| Use Case | Behaviour | System boundaries | Actors, use cases, relationships |
| Class | Structure | Static data model | Classes, attributes, operations, associations |
| Sequence | Behaviour | Time-ordered interactions | Lifelines, messages, combined fragments |
| Activity | Behaviour | Control flow | Actions, forks, joins, decisions, swimlanes |
| State Machine | Behaviour | Lifecycle behaviour | States, transitions, events, guards |
| Component | Structure | Module organisation | Components, interfaces, dependencies |
| Deployment | Structure | Physical deployment | Nodes, artefacts, communication paths |

## Quick Reference

| Concept | Definition | Practical Use |
|---------|------------|---------------|
| Stereotype | UML extension mechanism | boundary, control, entity |
| Association | Structural relationship | Bidirectional or unidirectional |
| Aggregation | Weak whole-part | Team contains players |
| Composition | Strong whole-part | Order contains line items |
| Multiplicity | Instance count | 1..*, 0..1, * |
| Combined Fragment | Interaction operator | alt, opt, loop, par |

## Cross-Application Matrix

| System Type | Primary Diagrams | Secondary Diagrams |
|-------------|-----------------|-------------------|
| Web Application | Use Case, Class, Component, Deployment | Sequence, Activity |
| Embedded System | State Machine, Component, Deployment | Sequence, Activity |
| Data Warehouse | ER, Component, Deployment | Use Case, Activity |
| Real-Time System | State Machine, Sequence, Component | Activity, Deployment |
| Mobile App | Use Case, Class, Sequence, Deployment | Activity, Component |

## Chapter Quiz

1. Which UML diagram is best for showing physical deployment of software on hardware?
   A) Component Diagram
   B) Deployment Diagram
   C) Class Diagram
   D) Activity Diagram

<details><summary>Answer</summary>**B)** Deployment diagrams show the physical mapping of artefacts to hardware nodes.</details>

2. What does a combined fragment with alt operator represent in a sequence diagram?
   A) Parallel execution
   B) Optional interaction
   C) Alternative behaviours
   D) Loop iteration

<details><summary>Answer</summary>**C)** The alt operator marks mutually exclusive alternative interaction paths.</details>

3. In a class diagram, what does multiplicity * on both ends of an association mean?
   A) One-to-one
   B) One-to-many
   C) Many-to-many
   D) Optional

<details><summary>Answer</summary>**C)** Many-to-many - many instances on each side participate.</details>

## Summary

System modelling provides multiple perspectives"
    $c = $c.Replace($s, $r)
}
Write-Host "OK 03-system-modeling.md"

# ===== 04-architectural-design.md =====
$path = Join-Path $base "04-architectural-design.md"
Process-File $path {
    $c = $c.Replace("# Architectural Design`n`n", "# Architectural Design`n`n> **Previous:** [System Modelling](./03-system-modeling.md) | **Next:** [Design and Implementation](./05-design-implementation.md)`n`n")
    $o = "and language processing systems."
    $g = "`n`n## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| Architectural Design | Defines overall structure bridging requirements to design | Decisions are hardest to change - invest upfront |
| Layered Architecture | Horizontal layers with stable interfaces | Most common pattern for enterprise applications |
| MVC Pattern | Separates data, presentation, and control logic | Foundation of modern web frameworks |
| Microservices | Small, independently deployable services | Best for large systems with multiple teams |
| Event-Driven | Decoupled producers and consumers via events | Ideal for real-time, reactive systems |
| ADRs | Document each decision with rationale | Prevents knowledge loss as teams evolve |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Architectural Design] --> B[Layered]
    A --> C[MVC]
    A --> D[Repository]
    A --> E[Client-Server]
    A --> F[Pipe-Filter]
    A --> G[Microservices]
    A --> H[Event-Driven]
    A --> I[Broker]
    B --> J[Enterprise Systems]
    G --> K[Netflix-Scale]
```"
    $c = $c.Replace($o, $o + $g)
    $c = $c.Replace("### The Role of Architectural Design`n`nArchitectural design is the process", "> **One-Sentence Takeaway:** Architecture bridges requirements and implementation and determines quality attributes like performance and security.`n`n### The Role of Architectural Design`n`nArchitectural design is the process")
    $c = $c.Replace("### Architectural Decisions`n`nArchitectural decisions are the choices", "> **Pro Tip:** Start with no more than three patterns - over-architecting early is as dangerous as under-architecting.`n`n> **One-Sentence Takeaway:** ADRs capture context, alternatives, and rationale, making knowledge persistent across team changes.`n`n### Architectural Decisions`n`nArchitectural decisions are the choices")
    $c = $c.Replace("### The Layered Architecture Pattern`n`nThe layered architecture organises the system", "> **One-Sentence Takeaway:** Layering enables separation of concerns but can introduce performance overhead through indirection.`n`n### The Layered Architecture Pattern`n`nThe layered architecture organises the system")
    $c = $c.Replace("### The Model-View-Controller Pattern`n`nModel-View-Controller (MVC) separates", "> **One-Sentence Takeaway:** MVC separates data, presentation, and control - supporting multiple views and independent testability.`n`n### The Model-View-Controller Pattern`n`nModel-View-Controller (MVC) separates")
    $c = $c.Replace("### The Repository Pattern`n`nThe repository pattern centralises data storage", "> **One-Sentence Takeaway:** The repository pattern centralises data access - simple for data-centric systems but risk of bottleneck.`n`n### The Repository Pattern`n`nThe repository pattern centralises data storage")
    $c = $c.Replace("### The Client-Server Pattern`n`nThe client-server pattern distributes the system", "> **One-Sentence Takeaway:** Client-server is the foundation of networked systems with centralised data management and distributed clients.`n`n### The Client-Server Pattern`n`nThe client-server pattern distributes the system")
    $c = $c.Replace("### The Pipe-and-Filter Pattern`n`nThe pipe-and-filter pattern processes data", "> **One-Sentence Takeaway:** Pipe-and-filter enables reusable, composable processing steps - ideal for data transformation pipelines.`n`n### The Pipe-and-Filter Pattern`n`nThe pipe-and-filter pattern processes data")
    $c = $c.Replace("### Microservices Architecture`n`nMicroservices architecture decomposes a system", "> **Warning:** Do not start with microservices. A well-structured monolith split later outperforms a premature distributed architecture.`n`n> **One-Sentence Takeaway:** Microservices enable independent deployability but introduce distributed system complexity.`n`n### Microservices Architecture`n`nMicroservices architecture decomposes a system")
    $c = $c.Replace("### The Event-Driven Pattern`n`nThe event-driven pattern organises components", "> **One-Sentence Takeaway:** Event-driven architectures achieve maximal decoupling through publish-subscribe for real-time reactive systems.`n`n### The Event-Driven Pattern`n`nThe event-driven pattern organises components")
    $c = $c.Replace("### The Broker Pattern`n`nThe broker pattern decouples clients from servers", "> **One-Sentence Takeaway:** The broker pattern provides distribution transparency - clients use remote services through a local model.`n`n### The Broker Pattern`n`nThe broker pattern decouples clients from servers")
    $c = $c.Replace("### Transaction Processing Systems`n`nTransaction processing systems manage transactions", "> **One-Sentence Takeaway:** Transaction processing guarantees ACID properties through a three-tier architecture.`n`n### Transaction Processing Systems`n`nTransaction processing systems manage transactions")
    $c = $c.Replace("### Information Systems`n`nInformation systems manage and provide access", "> **One-Sentence Takeaway:** Information systems are data-intensive - repository pattern with shared database is the natural choice.`n`n### Information Systems`n`nInformation systems manage and provide access")
    $c = $c.Replace("### Language Processing Systems`n`nLanguage processing systems translate or interpret languages", "> **One-Sentence Takeaway:** Compilers follow a pipe-and-filter pipeline from lexical analysis through code generation and optimisation.`n`n### Language Processing Systems`n`nLanguage processing systems translate or interpret languages")
    $s = "## Summary`n`nArchitectural design defines the high-level structure"
    $r = "## Concept Comparison Table

| Pattern | Coupling | Scalability | Use Case | Complexity |
|---------|----------|-------------|----------|------------|
| Layered | Tight within layer | Vertical | Enterprise apps | Low |
| MVC | Loose | Vertical | Interactive apps | Low |
| Repository | Tight (central) | Vertical | Data-centric apps | Medium |
| Client-Server | Loose | Horizontal | Networked apps | Medium |
| Pipe-and-Filter | Very loose | Parallel | Data processing | Low |
| Microservices | Very loose | Horizontal | Large-scale apps | High |
| Event-Driven | Minimal | Horizontal | Real-time systems | High |
| Broker | Loose | Horizontal | Distributed systems | High |

## Quick Reference

| Concept | Definition |
|---------|------------|
| Architectural Pattern | Reusable solution to recurring design problems at system level |
| ADR | Documents context, alternatives, decision, consequences |
| Quality Attribute | Non-functional requirement shaping architecture |
| Component | Modular, deployable, replaceable system part |
| Interface | Contract between components |
| Coupling | Degree of interdependence between components |

## Cross-Application Matrix

| Quality Attribute | Best Pattern | Why |
|-------------------|-------------|-----|
| Performance | Pipe-and-Filter | Parallel processing |
| Modifiability | Layered | Stable interfaces contain change |
| Scalability | Microservices | Independent horizontal scaling |
| Availability | Event-Driven | Loose coupling limits blast radius |
| Security | Layered + Broker | Defence in depth |
| Testability | MVC | Each component independently testable |

## Chapter Quiz

1. Which pattern is the foundation of Ruby on Rails and Spring MVC?
   A) Layered
   B) MVC
   C) Repository
   D) Microservices

<details><summary>Answer</summary>**B)** MVC is the foundation of Ruby on Rails, Spring MVC, ASP.NET MVC.</details>

2. What is the primary disadvantage of microservices?
   A) Tight coupling
   B) Distributed system complexity
   C) Poor scalability
   D) Single point of failure

<details><summary>Answer</summary>**B)** Microservices introduce network latency, data consistency, and operational overhead.</details>

3. What does an ADR capture?
   A) Test results
   B) Context, alternatives, decision, consequences
   C) Code review comments
   D) Deployment instructions

<details><summary>Answer</summary>**B)** An ADR documents context, alternatives considered, decision, and consequences.</details>

## Summary

Architectural design defines the high-level structure"
    $c = $c.Replace($s, $r)
}
Write-Host "OK 04-architectural-design.md"
Write-Host "=== Files 01-04 DONE ==="
