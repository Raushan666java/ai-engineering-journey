# Capstone Project

## Learning Objectives

After completing this chapter, the student will be able to: produce a comprehensive project plan for a software system; write a Software Requirements Specification document; perform architectural design using the Attribute-Driven Design method; execute an implementation sprint using agile practices; design a multi-level testing strategy; create a quality assurance plan; and formulate a deployment plan. This chapter integrates all previous chapters into a single, cohesive project exercise.

## Capstone Overview

The capstone project requires the student to produce a complete software engineering package for a specified system. The deliverables span the entire software lifecycle from planning through deployment. The recommended system for the capstone is a "Smart Campus Management System" — a platform that integrates course management, room booking, event scheduling, student services, and administrative functions for a university.

Alternative systems may be proposed by the student with instructor approval. The project is intended to be completed over a period of eight to twelve weeks and should be undertaken in teams of three to five students. The deliverables are organised into seven phases corresponding to the major areas of software engineering covered in this textbook.

## Phase 1: Project Planning

### Objective

Produce a comprehensive project plan that defines the scope, schedule, resources, risks, and management approach for the system.

### Activities

Define the project scope and objectives, identifying the boundaries of the system and the key stakeholders. Develop a Work Breakdown Structure (WBS) decomposing the system into manageable work packages at a minimum of three levels. Estimate the effort using function points and COCOMO II. Construct a project schedule using PERT and Gantt charts with a critical path analysis. Perform a risk assessment with a risk register and risk mitigation strategies. Define the team organisation, roles, and responsibilities. Specify the communication plan and project tracking approach using earned value management.

### Deliverable

Project Plan Document including: project charter, WBS, estimation report, schedule with Gantt chart, risk register, team structure, and monitoring plan.

### Template: Project Charter

- Project name and purpose
- Business case and justification
- Scope — what is included and excluded
- Key stakeholders
- Major milestones and target dates
- Budget summary
- Success criteria
- Project manager and sponsor

## Phase 2: Requirements Specification

### Objective

Produce a complete Software Requirements Specification (SRS) following IEEE 830 format.

### Activities

Identify all stakeholders including students, faculty, administrators, IT staff, and external systems. Select and apply appropriate elicitation techniques — at least two techniques must be used, such as interviews with stakeholders and a survey of potential users. Classify requirements as functional, non-functional, and domain requirements. Write each functional requirement with a unique identifier, description, and rationale. Specify non-functional requirements for usability, reliability, performance, security, maintainability, and portability with quantifiable targets. Model the requirements using UML use case diagrams with at least six use cases. Specify three use cases in full detail using the standard use case template. Develop a requirements traceability matrix. Apply MoSCoW prioritisation to all requirements.

### Deliverable

Software Requirements Specification including: introduction and scope; general description; specific requirements organised by subsystem or feature; use case models; traceability matrix; and prioritisation results.

### Template: IEEE 830 SRS Section Structure

1. Introduction — Purpose, product scope, definitions, references
2. General Description — Product perspective, user characteristics, assumptions, dependencies
3. Specific Requirements — Functional requirements, external interface requirements, performance requirements, design constraints, quality attributes
4. Appendices — Use case specifications, glossary, models

## Phase 3: Architectural Design

### Objective

Produce an architectural design using the Attribute-Driven Design (ADD) method.

### Activities

Identify the key architectural drivers — the most significant functional and quality attribute requirements that will shape the architecture. Select architectural patterns appropriate for the system. Justify each pattern selection with reference to the architectural drivers. Decompose the system into components, assigning responsibilities to each component. Specify the interfaces between components. Document the architecture using UML component and deployment diagrams. Identify the major architectural decisions and document each using an Architecture Decision Record (ADR) template. Evaluate the architecture against the key quality attribute requirements. Address data architecture including database design and data flow.

### Deliverable

Architecture Design Document including: architectural drivers and constraints; architectural pattern selection and justification; component decomposition with responsibilities; interface specifications; component diagrams; deployment diagrams; ADRs; and architecture evaluation results.

### Template: ADD Process Steps

1. Confirm the architectural drivers (top functional and quality attribute requirements)
2. Choose an element of the system to decompose
3. Identify candidate architectural patterns
4. Select one or more patterns based on their ability to satisfy the drivers
5. Decompose the element into child components
6. Assign responsibilities to the child components
7. Define interfaces for the child components
8. Verify that the drivers are satisfied
9. Repeat steps 2-8 for the next element

## Phase 4: Implementation Sprint

### Objective

Implement one subsystem of the system through a full Sprint or iteration using agile practices.

### Activities

Select one subsystem of moderate complexity for implementation. Decompose the subsystem into user stories with acceptance criteria. Estimate each story using planning poker and assign story points. Create a Sprint backlog for a two-week Sprint. Implement the stories using test-driven development where practical. Maintain a Scrum board with task status. Apply SOLID principles and refactor as needed. Run automated unit tests achieving a minimum of seventy per cent statement coverage. Perform daily stand-up meetings within the team. Conduct a Sprint review and retrospective at the conclusion.

### Deliverable

Implementation package including: codebase with unit tests; Sprint backlog and task board; test coverage report; Sprint review demonstration materials; and Sprint retrospective findings.

### Template: User Story with Acceptance Criteria

Story ID: US-023
Title: Room Booking
As a faculty member, I want to book a classroom for a specific date and time so that I can hold my lectures in an appropriate space.
Acceptance Criteria:
- Search available rooms by date, time, and capacity
- Booking confirmation received within five seconds
- Calendar integration reflects booking immediately
- Double-booking is prevented at the system level
- Cancellation policy enforced based on booking lead time

## Phase 5: Testing Strategy

### Objective

Design and document a comprehensive testing strategy for the system.

### Activities

Define the test levels — unit, integration, system, and acceptance — and specify what each level will test. Specify the testing techniques to be applied at each level, including white-box and black-box techniques. Design test cases using equivalence partitioning and boundary value analysis for at least two modules. Design test cases using decision tables for a function with complex conditional logic. Specify the test automation approach and tools. Define the regression testing strategy. Specify the non-functional testing approach for performance, security, and usability. Define entry and exit criteria for each test level. Specify defect management procedures.

### Deliverable

Test Plan Document including: test strategy for each level; test case specifications; automated testing approach; non-functional testing plan; defect management process; and traceability from test cases to requirements.

### Template: Test Case Specification

Test Case ID: TC-045
Requirement: REQ-023 — Room Booking
Test Level: System
Technique: Boundary Value Analysis
Precondition: User is authenticated as faculty
Input: Room capacity requested = 1, 49, 50, 51, 200
Expected Result: Capacity 49 succeeds; capacity 50 succeeds; capacity 51 succeeds; capacity 1 fails (minimum below threshold); capacity 200 fails (maximum above threshold)
Postcondition: Booking records updated correctly

## Phase 6: Quality Assurance Plan

### Objective

Produce a quality assurance plan covering the processes and standards that will ensure the quality of the delivered system.

### Activities

Define the quality standards to which the project will conform. Specify the quality assurance activities for each phase of development — requirements reviews, design inspections, code reviews, and testing. Define quality metrics including defect density, test coverage, and defect removal efficiency targets. Specify the review and inspection process including roles, checklists, and entry/exit criteria. Define the configuration management procedures. Define the change management process. Specify the acceptance criteria for the final delivery. Define the post-deployment quality monitoring approach.

### Deliverable

Quality Assurance Plan including: quality standards; phase-specific QA activities; metrics and targets; review and inspection procedures; configuration management plan; change management plan; and acceptance criteria.

### Template: Quality Metrics Targets

| Metric | Target | Measurement Point |
|--------|--------|-------------------|
| Requirements review defect density | < 5 per page | After requirements review |
| Code review coverage | 100% of new code | After each Sprint |
| Unit test statement coverage | > 80% | Continuous |
| System test pass rate | > 98% | Before release |
| DRE | > 90% | Release |
| Production defect density | < 0.5 per KLOC | 6 months post-release |

## Phase 7: Deployment Plan

### Objective

Produce a deployment plan that describes how the system will transition from development to production.

### Activities

Define the deployment architecture including hardware, network, and software requirements. Specify the deployment strategy — rolling, blue-green, or canary — with justification. Define the deployment pipeline with stages, tools, and triggers. Specify the rollback procedure. Define the database migration plan. Specify the data migration plan if data must be transferred from existing systems. Define the user training approach and materials. Specify the go-live procedure and criteria. Define the post-deployment monitoring and support processes. Specify the contingency plan for deployment issues.

### Deliverable

Deployment Plan including: deployment architecture; deployment strategy; CI/CD pipeline specification; rollback procedures; data migration plan; training plan; go-live checklist; and post-deployment support plan.

### Template: Go-Live Checklist

- [ ] Final acceptance testing completed and passed
- [ ] All known critical defects resolved
- [ ] Performance testing confirms capacity targets
- [ ] Security testing completed and vulnerabilities addressed
- [ ] Database migration scripts tested in staging
- [ ] Rollback procedures tested and documented
- [ ] User training completed
- [ ] Support team briefed and on standby
- [ ] Monitoring tools configured and verified
- [ ] Go-live approval obtained from stakeholders

## Integration and Assessment

The capstone project should demonstrate the student's ability to integrate all aspects of software engineering. The deliverables will be assessed on: completeness and correctness of each artefact; consistency across artefacts — for example, that the testing strategy verifies the requirements and that the architecture realises the quality attribute requirements; justification of decisions with reference to established principles; use of appropriate standards and templates; attention to quality throughout the lifecycle; and the quality of the final software artefact.

Assessment rubrics should weight each phase appropriately, with emphasis on the requirements specification, architectural design, and implementation phases. The capstone is the integrative assessment for the course and should constitute a significant proportion of the final grade.

## Summary

The capstone project integrates all knowledge areas covered in this textbook. Students plan the project, specify requirements, design the architecture, implement a subsystem, develop a testing strategy, create a quality assurance plan, and formulate a deployment plan. The consistent thread across all phases is the application of software engineering discipline — systematic processes, reasoned decisions, documented artefacts, and attention to quality. Successful completion of the capstone demonstrates competency in the core practices of professional software engineering.

---

## Exercises

### Review Questions

1. What is the purpose of a software project management plan, and what are its essential components?
2. Explain why a requirements specification must be validated before architectural design begins.
3. How does a traceability matrix help maintain consistency across software engineering artefacts?
4. Describe the role of risk management in the capstone project lifecycle.
5. Why should deployment plans include rollback procedures?

### Application Problems

1. Write a one-page Software Project Management Plan for a project of your choice. Include scope, schedule, budget, risk register, and quality goals.
2. From your SRS in Exercise 1, derive a traceability matrix that maps each functional requirement to at least one test case and one architectural component.
3. Create a checklist for a pre-deployment readiness review based on the deployment plan template in this chapter. Add at least five items not included in the template.

### Challenge Problem

1. Select a real-world open-source project from GitHub. Analyse it through the lens of the capstone lifecycle: reverse-engineer its requirements, infer its architectural decisions, critique its testing strategy, and propose a deployment plan for the next major release. Present your analysis as a formal 10-15 page engineering report.
