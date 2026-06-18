# Software Evolution

## Learning Objectives

After completing this chapter, the student will be able to: distinguish between the four categories of software maintenance; explain the challenges of reverse engineering and tools that support it; describe refactoring and its relationship to design quality; identify the characteristics of legacy systems and strategies for their management; explain the role of regression testing in software evolution; and articulate Lehman's laws of software evolution.

## Theory

![Software Evolution Overview](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/software-engineering/ch-07-software-evolution.png)

### The Nature of Software Evolution

Software evolution is the continuous process of adapting a software system after its initial deployment. Unlike hardware, software does not wear out, but it must evolve to remain useful. Changes in the operational environment, the emergence of new user needs, and the correction of latent defects all drive software evolution.

Studies have shown that the cost of software evolution typically exceeds the cost of initial development over the lifetime of a system. For many long-lived systems, maintenance costs represent sixty to eighty per cent of total lifecycle costs. This economic reality makes software evolution a central concern of software engineering.

### Categories of Maintenance

Software maintenance is conventionally classified into four categories.

Corrective maintenance involves fixing defects discovered after deployment. These defects include logic errors that cause incorrect behaviour, implementation errors that deviate from the specification, and failures that occur under specific conditions.

Adaptive maintenance involves modifying the system to cope with changes in the external environment. Environment changes include new operating system versions, hardware upgrades, database system updates, and regulatory requirements.

Perfective maintenance involves enhancing the system to improve performance, usability, or maintainability. Most maintenance effort falls into this category as users identify opportunities for improvement through experience.

Preventive maintenance involves making changes to prevent future problems. This includes refactoring to improve maintainability, adding defensive checks, updating documentation, and replacing deprecated dependencies.

### Reverse Engineering

Reverse engineering is the process of analysing a software system to extract design information and create representations at a higher level of abstraction. Unlike forward engineering, which proceeds from requirements to implementation, reverse engineering proceeds from implementation to design.

Reverse engineering is necessary when documentation is missing, outdated, or inaccurate. It is commonly applied to legacy systems where the original developers are no longer available. Tools that support reverse engineering include static analysers that extract structure from source code, dependency analysers that generate dependency graphs, and database reverse engineering tools that derive data models from database schemas.

Reverse engineering does not change the system; it produces information about the system. When the extracted information is used to modify the system, the process is called reengineering.

### Refactoring

Refactoring is the process of restructuring existing code without changing its external behaviour. The goal of refactoring is to improve the internal structure of the code to make it more maintainable and understandable.

Refactoring is performed through a catalogue of small, behaviour-preserving transformations. Each transformation addresses a specific design problem. Common refactorings include Extract Method, which moves code from a long method into a new method; Rename Variable, which improves naming clarity; Move Class, which relocates a class to a more appropriate package; Replace Conditional with Polymorphism, which replaces conditional logic with polymorphic dispatch; and Extract Class, which splits a class with multiple responsibilities into separate classes.

Refactoring must be performed in small steps with frequent testing to avoid introducing defects. Most modern IDEs provide automated refactoring tools that guarantee behaviour preservation. Refactoring is a continuous practice in agile development, where it is applied as part of the TDD cycle or as dedicated refactoring sprints.

### Legacy Systems

Legacy systems are older systems that continue to serve critical business functions but are difficult and expensive to maintain. Legacy systems typically have one or more of the following characteristics: outdated technology platforms that are no longer supported; poor documentation or documentation that has drifted from the implementation; a degraded structure resulting from years of ad hoc changes; reliance on obsolete hardware or operating systems; and a shortage of developers with relevant skills.

Strategies for managing legacy systems include: scrap and rebuild, where the system is replaced entirely; freeze, where changes are minimised to essential corrections; maintain, where the system continues to be evolved using current practices; transform, where the system is reengineered to a modern platform; and wrap, where the legacy system is encapsulated with a modern interface.

The choice of strategy depends on the system's business value and technical quality. A portfolio analysis classifies systems by these two dimensions and recommends appropriate strategies for each quadrant.

### Regression Testing During Evolution

Regression testing is essential during software evolution to detect defects introduced by changes. As the system evolves, the regression test suite grows, and maintaining it becomes a significant effort.

Test suite maintenance challenges include test obsolescence, where existing tests no longer match the changed system; test fragility, where tests fail due to unrelated changes; and test suite bloat, where the growing suite takes too long to execute.

Strategies for managing the regression test suite include: prioritisation, which orders tests to maximise early defect detection; minimisation, which removes redundant test cases; and test case selection, which identifies a subset of tests relevant to the change.

### Lehman's Laws of Software Evolution

Lehman formulated eight laws describing the dynamics of software evolution based on empirical studies of large systems.

The Law of Continuing Change states that a system must be continually adapted or it becomes progressively less satisfactory. Systems that are not changed become increasingly irrelevant.

The Law of Increasing Complexity states that as a system evolves, its complexity increases unless work is performed to reduce it. Without deliberate refactoring, entropy increases.

The Law of Self-Regulation states that the evolution process is self-regulating with statistically regular distributions of product and process metrics.

The Law of Conservation of Organisational Stability states that the average effective global activity rate in an evolving system is invariant over the product lifetime.

The Law of Conservation of Familiarity states that the incremental growth of each release is statistically invariant.

The Law of Continuing Growth states that the functional content of a system must be continually increased to maintain user satisfaction.

The Law of Declining Quality states that the quality of a system will appear to decline unless it is rigorously maintained and adapted to operational environment changes.

The Law of Feedback System states that evolution processes constitute multi-loop, multi-level feedback systems.

## Examples

### Case Study: Reengineering a Legacy Banking System

A major bank maintained a core banking system written in COBOL running on a mainframe. The system had evolved over thirty years, and the cost of maintenance was escalating. The bank adopted a wrapping strategy: they created REST APIs in Java that encapsulated the COBOL transactions, enabling modern web and mobile applications to access the legacy functionality without modifying the core system. Over a five-year period, individual COBOL modules were incrementally replaced with Java implementations, following the strangler fig pattern.

### Case Study: Refactoring a Large Codebase

A SaaS company with a million-line PHP codebase adopted a systematic refactoring programme. Each sprint included time for refactoring alongside feature work. The team used automated refactoring tools to extract classes, reduce duplication, and improve naming. Over eighteen months, the cyclomatic complexity of the codebase was reduced by thirty per cent, and the defect rate decreased by forty per cent.

### Template: Legacy System Portfolio Analysis

| System | Business Value | Technical Quality | Strategy |
|--------|---------------|-------------------|----------|
| Customer Accounts | High | Low | Reengineer |
| Reporting | Low | High | Maintain |
| Payroll | High | High | Continue evolution |
| Print Queue | Low | Low | Scrap and replace |

## Summary

Software evolution consumes the majority of lifecycle costs. Maintenance is classified as corrective, adaptive, perfective, and preventive. Reverse engineering recovers design information from existing code. Refactoring improves internal structure without changing external behaviour. Legacy systems pose particular challenges due to outdated technology and degraded structure. Regression testing is essential during evolution. Lehman's laws describe the empirical dynamics of software evolution, including the tendency toward increasing complexity and the necessity of continuing change.

## Exercises

### Review Questions

1. What proportion of total lifecycle costs is typically consumed by maintenance?
2. Distinguish between corrective and adaptive maintenance.
3. What distinguishes reverse engineering from reengineering?
4. What is the principal constraint on refactoring â€” what must be preserved?
5. List five characteristics of legacy systems.
6. Describe the strangler fig pattern for legacy system replacement.
7. What are the two dimensions used in legacy system portfolio analysis?
8. State Lehman's Law of Increasing Complexity and its implication for maintenance.
9. What challenges arise in maintaining the regression test suite as a system evolves?

### Application Problems

1. A system has 500,000 lines of code with an annual change rate of 15 per cent. The current maintenance team costs $1.2 million per year. If a refactoring programme costing $300,000 would reduce the annual change rate to 10 per cent, calculate the break-even period for the investment.
2. Propose a refactoring plan for a class that has grown to 2,000 lines, handles persistence, business logic, and presentation, and contains duplicated code in five locations.
3. Analyse a legacy system in your organisation (or a case study of your choice) using Lehman's laws. Identify which laws are most relevant to the system's current challenges.

### Challenge Problem

A government social security agency operates a thirty-year-old system that processes benefit claims. The system is written in an obsolete language, the documentation is incomplete, the original developers have retired, and the system cannot be replaced because the business rules are not fully understood by anyone in the organisation. However, recent legislation requires significant changes to eligibility rules, and the system must be integrated with a modern citizen portal. Develop a comprehensive evolution strategy for this system. Address how you will recover knowledge about the current system, how you will manage the legislative changes, what testing approach you will use, and how you will plan the transition to a more maintainable architecture. Consider the organisational, technical, and human factors involved.
