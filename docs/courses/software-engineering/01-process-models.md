# Software Process Models

## Learning Objectives

After completing this chapter, the student will be able to: differentiate between a software process and a process model; describe the activities common to all software processes; explain the Waterfall model and identify its limitations; contrast the V-model with the Waterfall approach; describe incremental and iterative development; explain the risk-driven nature of the Spiral model; describe the four phases of the Unified Process; articulate the principles of the Agile Manifesto; explain the practices of Extreme Programming; describe the Scrum framework including roles, events, and artefacts; and compare process models to select an appropriate approach for a given project context.

## Theory

![SDLC Process Models Flowchart](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/software-engineering/01-process-models.png)

### The Software Process

A software process is a structured set of activities required to develop a software system. These activities typically include specification — defining what the system should do; design and implementation — defining the system architecture and writing code; validation — checking that the system does what the customer requires; and evolution — modifying the system in response to changing needs. A software process model is an abstract representation of a process that describes how these activities are organised and enacted.

Process models range from highly structured, plan-driven approaches to flexible, iterative approaches. The choice of process model depends on project characteristics including size, complexity, requirements stability, team expertise, and organisational culture.

### The Waterfall Model

The Waterfall model, first described by Royce in 1970, presents software development as a sequence of phases: requirements definition, system and software design, implementation and unit testing, integration and system testing, and operation and maintenance. Each phase must be completed before the next begins, with formal documents produced at each stage.

The principal advantage of the Waterfall model is its simplicity and the clarity of milestones. It enforces discipline through documented deliverables and works well when requirements are well understood and unlikely to change. However, the model has significant limitations: it offers no mechanism for iteration or feedback between phases; working software is not produced until late in the process; it cannot accommodate changing requirements; and it assumes that all requirements can be specified completely at the outset, which is rarely true for complex systems.

### The V-Model

The V-model is an extension of the Waterfall model that emphasises the relationship between development phases and testing phases. The left leg of the V represents the decomposition of requirements into design specifications, while the right leg represents the integration and testing activities that verify each level of specification. At each level, verification activities are planned in parallel with the corresponding development activity.

The V-model makes explicit the connection between requirements and acceptance testing, between system design and system testing, between architectural design and integration testing, and between detailed design and unit testing. It is particularly prevalent in safety-critical and regulated domains where traceability from requirements to tests is mandatory.

### Incremental and Iterative Development

Incremental development delivers the system in small, usable increments. Each increment adds a subset of the required functionality. Customers receive working software early and can provide feedback that influences subsequent increments. Incremental development reduces the risk of delivering a system that does not meet customer needs and allows partial deployment of functionality.

Iterative development revisits the same components repeatedly, refining them with each pass. Unlike incremental development, which adds new features, iterative development improves existing features. Many modern processes combine both approaches: the system is built incrementally, and each increment is developed iteratively.

### The Spiral Model

The Spiral model, proposed by Boehm in 1988, is a risk-driven process model that combines elements of prototyping and the Waterfall model. The process is represented as a spiral, each loop of which represents one phase of development. Each loop has four quadrants: determining objectives, alternatives, and constraints; evaluating alternatives and resolving risks; developing and verifying the product; and planning the next phase.

Risk analysis is the distinguishing feature of the Spiral model. In each loop, major risks are identified and analysed. Risk-driven prototyping may be used to resolve high-risk issues. The model is particularly appropriate for large, complex systems where risk management is critical. However, it relies on skilled risk assessment and may be impractical for small projects.

### The Unified Process

The Unified Process is an iterative and incremental framework developed by Jacobson, Booch, and Rumbaugh. It organises development into four phases: Inception, where the project vision and business case are established; Elaboration, where the system architecture is defined and major risks are mitigated; Construction, where the bulk of implementation occurs through a series of iterations; and Transition, where the system is deployed to the user community.

Each phase consists of one or more iterations, and each iteration encompasses activities from multiple disciplines: requirements, analysis, design, implementation, and testing. The Unified Process is use-case driven, architecture-centric, and iterative. The Rational Unified Process (RUP) is a commercial elaboration that provides detailed guidance for each discipline.

### The Agile Manifesto

In 2001, seventeen software practitioners published the Agile Manifesto, which articulates four values: individuals and interactions over processes and tools; working software over comprehensive documentation; customer collaboration over contract negotiation; and responding to change over following a plan. The manifesto is accompanied by twelve principles that emphasise customer satisfaction, welcoming changing requirements, frequent delivery of working software, collaboration between business and development, motivated teams, face-to-face communication, working software as the primary measure of progress, sustainable development, technical excellence, simplicity, self-organising teams, and regular reflection on how to become more effective.

Agile methods reject the heavyweight documentation and rigid planning of traditional approaches in favour of adaptability and people-centric practices.

### Extreme Programming

Extreme Programming (XP), developed by Beck, is an agile methodology that takes programming practices to extreme levels. If code reviews are good, XP practices continuous code review through pair programming. If testing is good, XP requires that tests be written before the code. If design is good, XP practices continuous design improvement through refactoring.

XP is built around five values: communication, simplicity, feedback, courage, and respect. Its primary practices include the planning game, small releases, a system metaphor, simple design, continuous testing through test-driven development, refactoring, pair programming, collective code ownership, continuous integration, a forty-hour work week, an on-site customer, and coding standards.

### Scrum

Scrum is an agile framework for managing complex projects. It is founded on the principles of transparency, inspection, and adaptation. Scrum defines three roles: the Product Owner, who is responsible for maximising the value of the product and managing the product backlog; the Development Team, a self-organising, cross-functional group responsible for delivering increments of potentially releasable functionality; and the Scrum Master, who is responsible for ensuring that Scrum is understood and enacted.

Scrum events include the Sprint, a time-boxed period of one to four weeks during which a usable product increment is created; Sprint Planning, where the work for the Sprint is selected and planned; the Daily Scrum, a fifteen-minute synchronisation meeting; Sprint Review, where the increment is inspected and the backlog is adapted; and Sprint Retrospective, where the team inspects itself and creates a plan for improvement.

Scrum artefacts include the Product Backlog, an ordered list of everything that might be needed in the product; the Sprint Backlog, the set of backlog items selected for the Sprint plus a plan for delivering them; and the Increment, the sum of all completed backlog items.

## Examples

### Case Study: Waterfall in Government Systems

A government agency contracted the development of a tax processing system. The requirements were specified in a 500-page document and were not expected to change. The Waterfall model was chosen because the fixed-price contract required firm specifications, and the regulatory environment demanded extensive documentation. The project completed on schedule but revealed significant usability problems during acceptance testing, which could not be addressed without a contract amendment.

### Case Study: Spiral Model in Aerospace

An aerospace company developing flight control software adopted the Spiral model. Each spiral loop addressed specific technical risks, including sensor fusion accuracy, real-time performance guarantees, and fault tolerance. Prototyping in early loops resolved architectural uncertainties before full-scale implementation. The project delivered a high-quality system but required experienced risk managers to execute the model effectively.

### Template: Process Model Selection Matrix

| Criterion | Waterfall | Incremental | Spiral | Scrum |
|-----------|-----------|-------------|--------|-------|
| Requirements clarity | High | Low | Variable | Low |
| Project size | Small-medium | Medium-large | Large | Small-medium |
| Risk level | Low | Low-medium | High | Low-medium |
| Customer involvement | Low | Medium | Medium | High |
| Documentation need | High | Medium | High | Low |

## Summary

Software process models provide structure and guidance for development activities. No single model is appropriate for all projects. The Waterfall model offers simplicity but lacks flexibility. The V-model emphasises verification and traceability. Incremental and iterative approaches deliver early value and accommodate change. The Spiral model incorporates explicit risk management. The Unified Process provides an iterative, architecture-centric framework. Agile methods prioritise people, working software, and responsiveness to change. The selection of a process model should be based on project characteristics including requirements stability, risk profile, team size, and organisational context.

## Exercises

### Review Questions

1. What are the four fundamental activities common to all software processes?
2. Under what circumstances is the Waterfall model appropriate?
3. How does the V-model enforce traceability between requirements and tests?
4. Distinguish between incremental and iterative development.
5. What is the role of risk analysis in the Spiral model?
6. Name the four phases of the Unified Process and describe the purpose of each.
7. List the four values of the Agile Manifesto.
8. What are the five values of Extreme Programming?
9. Describe the three roles defined by Scrum.
10. What is the purpose of the Sprint Retrospective?

### Application Problems

1. A startup is developing a mobile application for social event discovery. Requirements are expected to evolve rapidly based on user feedback. Recommend a process model and justify your choice.
2. A defence contractor must develop software for an avionics system. The system must satisfy strict regulatory standards and full traceability is required. Compare the suitability of the V-model and Scrum for this context.
3. Construct a process model selection matrix for a hospital management system with 500,000 lines of estimated code, moderate requirements stability, and a distributed development team.

### Challenge Problem

A large financial institution plans to replace its core banking system over a three-year period. The system must interface with dozens of existing subsystems, comply with multiple regulatory frameworks, and support a gradual migration from legacy systems. Propose a hybrid process model that combines elements from the Spiral model, the Unified Process, and agile practices. Justify each element of your proposal with specific reference to the project characteristics. Describe how you would manage the tensions between the plan-driven and agile elements of your hybrid approach.
