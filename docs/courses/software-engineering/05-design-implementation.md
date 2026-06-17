# Design and Implementation

## Learning Objectives

After completing this chapter, the student will be able to: apply the SOLID principles of object-oriented design; explain the DRY, KISS, and YAGNI principles; articulate separation of concerns and information hiding; apply design heuristics for good software design; distinguish between coupling and cohesion and describe their relationship to design quality; conduct a design review; describe software reuse strategies; explain configuration management and build tools; and describe the role of integrated development environments in implementation.

## Theory

![Design and Implementation Principles](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/software-engineering/ch-05-design-implementation.png)

### Design Principles

Design principles are established guidelines that, when followed, produce designs that are maintainable, understandable, and adaptable. They represent distilled experience about what characterises good software design.

### The SOLID Principles

The SOLID principles, articulated by Robert C. Martin, are five principles of object-oriented class design.

The Single Responsibility Principle (SRP) states that a class should have only one reason to change. Each class should be responsible for a single part of the functionality provided by the system. When a class has multiple responsibilities, changes to one responsibility may affect the other, and the class becomes more difficult to understand and maintain.

The Open-Closed Principle (OCP) states that classes should be open for extension but closed for modification. This means that the behaviour of a class should be extendable without modifying the class itself. The typical technique is to use inheritance or interfaces: the base class defines the contract, and subclasses provide specific implementations.

The Liskov Substitution Principle (LSP) states that objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program. Subtypes must preserve the behavioural contract of their base types. Violations occur when a subclass overrides methods in ways that break the expectations of clients.

The Interface Segregation Principle (ISP) states that clients should not be forced to depend on interfaces they do not use. Large, fat interfaces should be split into smaller, more specific ones. A class that implements an interface should not be required to implement methods that are irrelevant to its role.

The Dependency Inversion Principle (DIP) states that high-level modules should not depend on low-level modules; both should depend on abstractions. Abstractions should not depend on details; details should depend on abstractions. This principle inverts the traditional dependency direction and is typically implemented through dependency injection.

### DRY, KISS, and YAGNI

The DRY principle — Don't Repeat Yourself — states that every piece of knowledge should have a single, unambiguous representation within the system. Duplication increases the risk that changes made in one place will not be made in another, leading to inconsistencies. DRY is achieved through abstraction, parameterisation, and code generation.

The KISS principle — Keep It Simple, Stupid — advocates simplicity in design. Simple designs are easier to understand, test, and maintain. Unnecessary complexity should be avoided even if it adds generality or elegance that is not currently required.

The YAGNI principle — You Ain't Gonna Need It — states that functionality should not be added until it is actually required. Anticipating future requirements leads to bloat and complexity that may never be justified. YAGNI is particularly emphasised in agile development.

### Separation of Concerns

Separation of concerns is the principle of partitioning a system into distinct sections such that each section addresses a separate concern. A concern is a particular goal, concept, or area of interest. By separating concerns, each part of the system can be developed, understood, and changed independently.

Examples of separation of concerns include the separation of presentation logic from business logic, of business logic from data access, and of application logic from infrastructure concerns such as logging and security. Layered architectures, MVC, and aspect-oriented programming are all mechanisms for achieving separation of concerns.

### Information Hiding

Information hiding, articulated by Parnas, states that the design decisions that are most likely to change should be hidden behind interfaces. Each module should expose only the information necessary for other modules to use it and should conceal its internal implementation details.

Information hiding reduces the ripple effect of changes: if a module's internal implementation changes but its interface remains stable, other modules are unaffected. The key is to identify which design decisions are likely to change and to isolate them within single modules.

### Coupling and Cohesion

Coupling measures the degree of interdependence between modules. Low coupling is desirable because it means that modules can be changed independently. High coupling means that changes to one module are likely to require changes to other modules. Coupling is classified on a spectrum from worst to best: content coupling, where one module directly modifies internal data of another; common coupling, where modules share global data; external coupling, where modules share external format or protocol; control coupling, where one module passes control flags to another; stamp coupling, where modules share composite data structures only part of which is used; data coupling, where modules share data through parameters; and message coupling, where modules communicate through explicit messages.

Cohesion measures the degree to which the elements within a module belong together. High cohesion is desirable because it means that a module has a clear, focused purpose. Cohesion ranges from worst to best: coincidental cohesion, where elements are arbitrarily grouped; logical cohesion, where elements perform related functions but are selected externally; temporal cohesion, where elements are grouped because they occur at the same time; procedural cohesion, where elements follow a sequence; communicational cohesion, where elements operate on the same data; sequential cohesion, where the output of one element is input to the next; and functional cohesion, where all elements contribute to a single, well-defined function.

The relationship between coupling and cohesion follows a common trade-off: designs with high cohesion tend to have low coupling, and vice versa. Good design aims for both high cohesion and low coupling.

### Design Heuristics

Heuristics are experience-based guidelines that complement formal principles. Notable design heuristics include: aim for low coupling and high cohesion; keep interfaces small and focused; prefer composition over inheritance; program to interfaces, not implementations; encapsulate what varies; minimise the ripple effect of changes; and follow the Law of Demeter, which states that a method should only call methods on objects it directly knows.

### Design Review

Design review is a systematic evaluation of a design to identify defects and assess quality. Formal design reviews follow a structured process: the designer distributes the design documentation in advance; reviewers study the material individually; a review meeting is conducted where issues are identified and recorded; and a follow-up ensures that issues are resolved.

Design review checklists typically cover correctness, completeness, consistency, clarity, and adherence to standards. The review examines interfaces, error handling, performance considerations, and maintainability.

### Implementation Issues

Software reuse is the practice of using existing software artefacts in the construction of new systems. Reuse occurs at multiple levels: code reuse through libraries and frameworks; component reuse through application frameworks and COTS components; design reuse through design patterns; and architecture reuse through reference architectures. Reuse improves productivity, quality, and consistency, but introduces dependencies on external artefacts.

Configuration management tracks and controls changes to software artefacts. It encompasses version control, change management, and release management. Every artefact that is produced during development should be under configuration management.

Build tools automate the process of compiling source code, linking components, and packaging executables. Build tools handle dependency resolution, incremental builds, and integration with testing and deployment. Examples include Make, Maven, Gradle, and npm.

Integrated development environments (IDEs) combine source code editing, compilation, debugging, and refactoring into a single application. IDEs improve productivity through syntax highlighting, code completion, navigation, and integrated testing. Modern IDEs such as Eclipse, IntelliJ IDEA, and Visual Studio support multiple languages and extensive plugin ecosystems.

## Examples

### Case Study: Refactoring to SOLID Principles

A legacy Java e-commerce system contained a single Order class handling persistence, validation, pricing, and email notification. This violated SRP. The class was refactored into OrderValidator, OrderCalculator, OrderRepository, and OrderNotificationService. Each new class had a single responsibility and could be tested and changed independently.

### Design Review Checklist Template

- Are interfaces minimal and well-defined?
- Does the design satisfy all functional requirements?
- Are non-functional requirements addressed?
- Is coupling minimised between modules?
- Are modules functionally cohesive?
- Are error conditions handled appropriately?
- Are design decisions justified and documented?

### Template: Coupling and Cohesion Analysis

| Module | Coupling Type | Cohesion Type | Assessment |
|--------|---------------|---------------|------------|
| OrderService | Data coupling with CustomerService | Functional (order processing) | Acceptable |
| GlobalConfig | Common coupling through global state | Coincidental | Needs refactoring |
| ReportGenerator | Stamp coupling with DataExporter | Sequential | Monitor |

## Summary

Design principles guide the creation of maintainable, understandable software. The SOLID principles address class-level design; DRY, KISS, and YAGNI promote simplicity and avoid duplication. Separation of concerns partitions the system into distinct areas of responsibility. Information hiding conceals volatile design decisions behind stable interfaces. Low coupling and high cohesion are the primary indicators of design quality. Design reviews provide systematic evaluation. Implementation concerns include reuse, configuration management, build automation, and IDEs.

## Exercises

### Review Questions

1. State the Single Responsibility Principle and provide an example of its violation.
2. How does the Liskov Substitution Principle constrain the use of inheritance?
3. What problem does the Dependency Inversion Principle solve?
4. Distinguish between stamp coupling and data coupling.
5. Arrange the coupling types from most desirable to least desirable.
6. Describe the seven levels of cohesion from worst to best.
7. What does the Law of Demeter require?
8. How does information hiding reduce the ripple effect of changes?
9. What are the benefits and risks of software reuse?

### Application Problems

1. Identify SOLID principle violations in the following class: a Report class that retrieves data from a database, formats it as HTML, and sends it by email. Refactor the design.
2. Analyse the coupling and cohesion of a system with a single Utility class containing methods for string manipulation, date calculation, file I/O, and network connectivity. Propose a refactoring.
3. Conduct a design review on a module that exposes all of its internal data structures as public fields. Identify the specific design principle violations and recommend corrections.

### Challenge Problem

You inherit a codebase with the following characteristics: a single class of over 10,000 lines implementing the entire business logic; all methods are public and directly access the database; global variables are used extensively for sharing state between modules; the system has no automated tests; and every change, no matter how small, requires weeks of regression testing. Develop a systematic plan for refactoring this system over a six-month period. Prioritise the design principles you will apply, specify the order in which you will address the problems, and describe how you will manage the risk of introducing defects during the refactoring process.
