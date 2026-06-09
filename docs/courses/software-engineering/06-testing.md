# Software Testing

## Learning Objectives

After completing this chapter, the student will be able to: distinguish between verification and validation; describe the levels of testing from unit to acceptance; explain the differences between functional, structural, and non-functional testing; apply white-box testing techniques including statement, branch, path, and condition coverage; apply black-box testing techniques including equivalence partitioning, boundary value analysis, decision tables, and state transition testing; explain regression, smoke, performance, security, and usability testing; describe test automation approaches; and explain test-driven development and behaviour-driven development.

## Theory

### Verification and Validation

Verification and validation (V&V) are the two principal approaches to establishing that a software system meets its specification and satisfies stakeholder needs. Verification answers the question "Are we building the product right?" It checks that the software conforms to its specification. Validation answers the question "Are we building the right product?" It checks that the software meets the actual needs of the customer.

Both verification and validation are achieved through a combination of static techniques, which analyse the software without executing it, and dynamic techniques, which execute the software with selected test cases.

### Levels of Testing

Testing is organised into levels that correspond to phases of development.

Unit testing verifies individual components or modules in isolation. The goal is to ensure that each unit performs its specified function correctly. Unit tests are typically written by the developer who coded the unit and are automated using a unit testing framework such as JUnit, NUnit, or pytest.

Integration testing verifies that units work correctly together. It focuses on the interfaces between components and the interactions across component boundaries. Integration testing strategies include big bang integration, where all components are combined at once; top-down integration, where high-level components are tested by stubbing lower-level components; bottom-up integration, where low-level components are tested using drivers for higher-level components; and sandwich integration, which combines top-down and bottom-up approaches.

System testing verifies that the complete, integrated system meets its specified requirements. It is performed against the system requirements specification and includes functional and non-functional testing.

Acceptance testing determines whether the system satisfies the customer's acceptance criteria. It is performed by or with the customer and is the final testing phase before deployment. Alpha testing is performed by the customer at the developer's site. Beta testing is performed by the customer at their own site. User acceptance testing (UAT) validates that the system supports the intended business processes.

### Functional Testing

Functional testing verifies that the system functions as specified. It is typically performed as black-box testing, where test cases are derived from the requirements or specification without knowledge of the internal implementation.

### Structural Testing

Structural testing, also known as white-box testing, derives test cases from the internal structure of the software. The tester has access to the source code and can design tests that exercise specific code paths.

Statement coverage measures the percentage of executable statements that have been executed by the test suite. The goal is typically 100 per cent statement coverage, although achieving this does not guarantee that all defects have been found.

Branch coverage measures the percentage of decision outcomes that have been exercised. For each decision point, both the true and false branches must be executed. Branch coverage subsumes statement coverage because exercising all branches ensures that all statements are executed.

Path coverage measures the percentage of possible execution paths that have been exercised. A path is a unique sequence of branches from the entry of a method to its exit. Path coverage is a stronger criterion than branch coverage but is often impractical because the number of paths grows exponentially with the number of decision points.

Condition coverage measures the percentage of atomic conditions within decisions that have been evaluated to both true and false. Multiple condition coverage requires all combinations of atomic condition outcomes to be exercised.

### Black-Box Testing Techniques

Equivalence partitioning divides the input domain into equivalence classes such that the behaviour of the system is equivalent for all values within a class. If the system behaves correctly for one value from a class, it is assumed to behave correctly for all values in that class. Test cases are selected from each equivalence class. Equivalent classes are identified for valid input and for invalid input.

Boundary value analysis selects test cases at the boundaries of equivalence classes. Experience shows that defects frequently occur at boundaries. For each boundary, three test cases are typically created: the boundary value itself, the value immediately above the boundary, and the value immediately below the boundary.

Decision tables capture complex combinations of conditions and corresponding actions. A decision table has four sections: conditions, which are Boolean expressions; condition entries, which show the values of conditions for each rule; actions, which are the outcomes; and action entries, which show which actions are triggered for each rule. Decision tables ensure that all combinations of conditions are considered.

State transition testing models the system as a finite state machine with states, transitions, and events. Test cases are designed to cover states, transitions, and sequences of transitions. This technique is particularly effective for testing control-intensive systems such as telecommunications protocols and embedded systems.

### Non-Functional Testing

Performance testing evaluates system behaviour under load. Load testing applies expected usage levels; stress testing applies extreme levels; endurance testing applies sustained load over extended periods; and spike testing applies sudden increases in load.

Security testing identifies vulnerabilities in the system. It includes authentication testing, authorisation testing, input validation testing, and penetration testing.

Usability testing evaluates how easy the system is to learn and use. It typically involves observing representative users performing representative tasks. Heuristic evaluation is a review-based approach where evaluators assess the interface against established usability heuristics.

### Regression Testing

Regression testing verifies that changes to the system have not introduced new defects in previously working functionality. When a change is made, the entire existing test suite or a carefully selected subset is re-executed. The regression test suite should be automated to ensure frequent execution. Regression test selection techniques include retest-all, which executes all existing tests; selective retest, which executes tests related to the changed code; and test case prioritisation, which orders tests to maximise early defect detection.

### Smoke Testing

Smoke testing, also called build verification testing, is a preliminary set of tests that verify whether the most critical functions of the system work. Smoke tests are run after each build to determine whether the build is stable enough for more thorough testing. A failed smoke test causes the build to be rejected.

### Test Automation

Test automation uses software tools to control the execution of tests and compare actual outcomes with predicted outcomes. Automated tests can be executed frequently and consistently, enabling continuous testing.

The test automation pyramid, proposed by Cohn, recommends three layers: unit tests form the broad base, service or API tests form the middle, and end-to-end UI tests form the narrow top. This distribution reflects the trade-offs between speed, reliability, and confidence: unit tests are fast and reliable but provide limited confidence; end-to-end tests provide high confidence but are slow and fragile.

Test automation frameworks include data-driven frameworks, where test data is separated from test logic; keyword-driven frameworks, where test actions are specified as keywords; and hybrid frameworks combining multiple approaches.

### Test-Driven Development

Test-driven development (TDD) reverses the traditional order of writing code then tests. In TDD, the developer writes a failing test first, then writes the minimum code to pass the test, then refactors the code. This cycle is often expressed as red-green-refactor.

TDD produces a comprehensive suite of automated unit tests and tends to produce code with low coupling and high cohesion because testability drives design. Studies provide mixed evidence on TDD's effect on productivity, but the practice is widely adopted in agile development.

### Behaviour-Driven Development

Behaviour-driven development (BDD) extends TDD by expressing tests in a format that can be understood by non-technical stakeholders. BDD uses the Given-When-Then template: Given a context, when an event occurs, then an outcome should be observed.

BDD frameworks such as Cucumber and SpecFlow parse feature files written in Gherkin syntax and map them to automated test code. BDD promotes collaboration between developers, testers, and domain experts in defining system behaviour.

## Examples

### Case Study: Test Strategy for an E-Commerce Platform

An e-commerce platform implemented a four-level test strategy. Unit tests (3,400 tests, 87 per cent coverage) verified individual service methods. Integration tests (420 tests) verified database access, API endpoints, and message queue interactions. System tests (150 tests) verified complete business workflows. Acceptance tests (45 scenarios) were expressed in Gherkin and validated by product owners.

### Template: Equivalence Partitioning for Age Field

Requirement: A system accepts age values between 18 and 120 inclusive.
Valid equivalence classes: Ages 18 to 120 (single class)
Invalid equivalence classes: Ages below 18, ages above 120, non-numeric input, null input
Boundary values: 17, 18, 19 and 119, 120, 121

### Template: White-Box Coverage Matrix

| Method | Statements | Branches | Conditions | Paths |
|--------|------------|----------|------------|-------|
| calculateDiscount | 12/12 (100%) | 6/6 (100%) | 4/4 (100%) | 3/5 (60%) |
| processOrder | 28/30 (93%) | 14/16 (88%) | 8/10 (80%) | 12/24 (50%) |

## Summary

Software testing is the primary dynamic verification and validation technique. Testing occurs at four levels: unit, integration, system, and acceptance. White-box techniques use knowledge of the internal structure to design test cases; black-box techniques derive test cases from specifications. Non-functional testing addresses performance, security, and usability. Regression testing protects against regression defects. Test automation is essential for frequent, consistent testing. TDD and BDD integrate testing into the development process.

## Exercises

### Review Questions

1. Distinguish between verification and validation.
2. What are the four levels of testing, and what does each level verify?
3. Explain the difference between top-down and bottom-up integration testing.
4. What is the difference between statement coverage and branch coverage?
5. Why is path coverage often impractical for real-world systems?
6. Describe the equivalence partitioning technique with an example.
7. How does boundary value analysis complement equivalence partitioning?
8. What is the purpose of regression testing?
9. Describe the three layers of the test automation pyramid.
10. Explain the red-green-refactor cycle of test-driven development.

### Application Problems

1. Apply equivalence partitioning and boundary value analysis to a function that accepts a date in the format DD/MM/YYYY and validates that the date is within the range 01/01/2000 to 31/12/2099. List the test cases.
2. Construct a decision table for a login system with the following rules: the user must have a valid account; the account must not be locked; the password must match; after three failed attempts, the account is locked.
3. Calculate statement coverage and branch coverage for the following code fragment and identify which tests would achieve 100 per cent branch coverage: if (a > 0) { if (b > 0) { x = 1; } else { x = 2; } } else { x = 3; }

### Challenge Problem

You lead the testing effort for a medical device software system that calculates radiation dosage for cancer treatment. The system must meet FDA regulatory requirements, which mandate traceability from requirements to test cases, 100 per cent decision coverage at the unit level, and documented risk-based testing at the system level. Design a comprehensive testing strategy that addresses unit testing, integration testing, system testing, and acceptance testing. Specify the coverage criteria, describe how you will achieve traceability, explain your approach to risk-based testing, and design the test automation framework. Include consideration of the specific challenges of safety-critical testing and how you will verify non-functional requirements such as response time and reliability.
