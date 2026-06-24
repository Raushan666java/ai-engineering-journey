# Requirements Engineering

## Learning Objectives

After completing this chapter, the student will be able to: classify requirements as functional, non-functional, and domain requirements; conduct a feasibility study for a proposed software system; select and apply appropriate elicitation techniques; specify requirements using IEEE 830 format, user stories, and use cases; perform requirements validation; and manage requirements through traceability, prioritisation, and change control.

## Theory

![Requirements Engineering Process](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/software-engineering/ch-02-requirements.png)

### The Requirements Engineering Process

Requirements engineering is the branch of software engineering concerned with the real-world goals for, functions of, and constraints on a software system. It encompasses the set of activities from problem understanding through to the production of a validated specification. The requirements engineering process typically comprises four high-level activities: feasibility study, elicitation and analysis, specification, and validation. These activities are interleaved, iterative, and must be revisited as understanding evolves.

### Types of Requirements

Requirements are commonly classified into three categories.

Functional requirements describe the services that the system should provide, how the system should react to particular inputs, and how the system should behave in specific situations. A functional requirement for a library system might state: "The system shall allow registered borrowers to search the catalogue by author, title, or subject."

Non-functional requirements are constraints on the services or functions offered by the system. They encompass quality attributes such as performance, security, availability, usability, and maintainability, as well as constraints such as platform compatibility, legal regulations, and interface standards. Non-functional requirements are often more critical than functional requirements because a system that fails to meet a functional requirement may still be usable, while one that fails to meet a non-functional requirement may be unacceptable.

Domain requirements reflect the characteristics of the application domain. They may be functional or non-functional and are derived from the domain context rather than from specific user needs. A domain requirement for a banking system might include the rule that interest must be calculated on a daily basis.

### Feasibility Study

A feasibility study assesses whether a proposed software project is technically, economically, and operationally feasible. Technical feasibility considers whether the required technology exists and whether the team possesses the necessary skills. Economic feasibility employs cost-benefit analysis to determine whether the expected benefits justify the investment. Operational feasibility evaluates whether the organisation can adapt to the new system. The output of a feasibility study is a feasibility report that recommends whether to proceed with the project.

### Requirements Elicitation

Elicitation is the process of discovering requirements from stakeholders. Several techniques exist, each with strengths and weaknesses.

Interviews are the most common elicitation technique. Structured interviews follow a predetermined set of questions, while unstructured interviews explore topics conversationally. Interviews are effective for building rapport and exploring tacit knowledge, but they are time-consuming and may miss requirements that stakeholders do not articulate.

Surveys and questionnaires enable the collection of information from a large number of stakeholders. They are efficient for gathering quantitative data but provide limited depth and cannot explore unexpected topics.

Observation involves watching users perform their work in their natural environment. It is particularly useful for discovering implicit requirements â€” things that users do but do not think to mention. Observation may be passive, where the analyst simply watches, or active, where the analyst participates in the work.

Workshops and focus groups bring together multiple stakeholders in a facilitated session. Workshops can rapidly generate ideas, resolve conflicts, and build consensus. The JAD (Joint Application Development) approach formalises workshops as a primary elicitation technique.

Prototyping involves creating a partial implementation of the system to elicit feedback. Throwaway prototypes are built quickly to clarify requirements and then discarded. Evolutionary prototypes are incrementally refined into the final system.

### Requirements Specification

The requirements specification documents the agreed requirements. The IEEE 830 standard defines a template for Software Requirements Specifications (SRS) that includes sections for introduction, general description, specific requirements including functional and non-functional requirements, and appendices.

User stories are a lightweight specification format used in agile methods. Each user story follows the template: "As a [role], I want [goal] so that [benefit]." User stories are deliberately brief; details are elaborated through conversation and confirmed through acceptance criteria.

Use cases describe interactions between actors and the system. Each use case has a name, a primary actor, preconditions, a main success scenario, alternative flows, and postconditions. Use cases are particularly effective for specifying functional requirements for interactive systems. The UML notation provides a standardised format for use case diagrams that show the relationships between actors and use cases.

### Requirements Validation

Validation ensures that the specified requirements accurately reflect stakeholder needs. Validation techniques include requirements reviews, where stakeholders and analysts inspect the specification for errors, omissions, and ambiguities; prototyping, where users interact with a mock-up to confirm understanding; and test-case generation, where writing tests against the requirements exposes inconsistencies.

Common defects detected during validation include omission, where a necessary requirement is missing; inconsistency, where requirements contradict each other; ambiguity, where a requirement can be interpreted in multiple ways; duplication, where the same requirement appears multiple times; and infeasibility, where a requirement cannot be implemented within constraints.

### Requirements Management

Requirements management encompasses the activities of maintaining the requirements specification as the system evolves. Key practices include traceability, prioritisation, and change control.

Requirements traceability links requirements to their sources, to the design and implementation artefacts that realise them, and to the tests that verify them. A traceability matrix records these links and enables impact analysis when requirements change.

Prioritisation assigns relative importance to requirements. Techniques include MoSCoW (Must have, Should have, Could have, Won't have), the Kano model, which categorises requirements by their effect on customer satisfaction, and the Analytic Hierarchy Process (AHP), which uses pairwise comparisons to establish priorities.

Change control manages the evolution of requirements after the specification is approved. A change control board (CCB) reviews proposed changes, assesses their impact on cost and schedule, and approves or rejects them. A requirements management plan defines the procedures for submitting, evaluating, and implementing changes.

## Examples

### Case Study: SRS for a Library Management System

A university library commissioned a new management system. The requirements team conducted interviews with librarians, library patrons, and IT staff. They distributed surveys to five hundred library users and observed the circulation desk during peak hours. The resulting SRS included seventy-three functional requirements organised by subsystem, eighteen non-functional requirements covering performance and security, and domain requirements specifying the Library of Congress classification system.

### Template: IEEE 830 SRS Section Outline

1. Introduction â€” Purpose, scope, definitions, references, overview
2. General Description â€” Product perspective, user characteristics, constraints, assumptions
3. Specific Requirements â€” Functional requirements organised by mode or feature, external interface requirements, performance requirements, design constraints, software system attributes (security, reliability, maintainability, portability)
4. Appendices â€” Glossary, models, issues list

### Template: User Story with Acceptance Criteria

Title: Book Search
As a library patron, I want to search for books by title, author, or subject so that I can find materials relevant to my research.
Acceptance Criteria:
- Search returns results within three seconds
- Results display title, author, publication year, and availability
- Empty search field returns a prompt rather than all catalogue entries
- Search supports partial matching and wildcard characters

### Template: Use Case Specification

Use Case: Borrow Book
Primary Actor: Library Patron
Precondition: Patron is registered and has fewer than the maximum allowed loans
Main Success Scenario:
1. Patron presents books and library card to librarian
2. System records each book against the patron's account
3. System prints due-date receipt
4. System updates book status to "on loan"
Postcondition: Book status is "on loan" and patron record reflects new loan

## Summary

Requirements engineering is the foundation of successful software development. Functional requirements define what the system must do; non-functional requirements constrain how it does it; and domain requirements capture the context. Feasibility studies determine whether a project should proceed. Elicitation techniques must be selected based on the project context. Specifications take different forms â€” IEEE 830 documents, user stories, or use cases â€” depending on the process model. Validation ensures correctness and completeness. Management through traceability, prioritisation, and change control maintains the specification's integrity as the system evolves.

## Exercises

### Review Questions

1. Distinguish between functional and non-functional requirements with examples.
2. What is the purpose of a feasibility study, and what three dimensions does it assess?
3. Compare the strengths and limitations of interviews versus observation as elicitation techniques.
4. What are the components of a well-formed user story?
5. Describe the structure of a use case specification.
6. List five types of defects that requirements validation can detect.
7. What is a requirements traceability matrix, and how is it used in impact analysis?
8. Explain the MoSCoW prioritisation technique.

### Application Problems

1. Write ten user stories for an online food delivery system. Include acceptance criteria for three of the stories.
2. Develop a use case specification for the "Cancel Order" functionality of an e-commerce system. Include a main success scenario and at least two alternative flows.
3. You are the requirements engineer for a hospital patient management system. Propose an elicitation strategy that engages doctors, nurses, administrators, and patients. Justify your choice of techniques.

### Challenge Problem

A government agency is developing a benefits eligibility system that replaces a thirty-year-old mainframe application. The existing system has no documentation, and the original developers have retired. The new system must comply with recently enacted legislation that changes eligibility rules. Design a requirements engineering approach for this context. Address how you will recover knowledge of the current system, handle the legislative changes, and manage the conflicting interests of policy makers who want flexibility and operations staff who want predictability. Propose a specification format and a requirements management strategy.
