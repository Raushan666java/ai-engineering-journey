# Architectural Design

## Learning Objectives

After completing this chapter, the student will be able to: explain the role of architectural design in software engineering; identify the key decisions made during architectural design; describe the layered architecture pattern and its use cases; explain the Model-View-Controller pattern; describe the repository pattern and its advantages for data-centric systems; explain the client-server and pipe-and-filter patterns; describe microservices architecture and its trade-offs; explain event-driven and broker patterns; compare common application architectures for transaction processing, information systems, and language processing systems.

## Theory

### The Role of Architectural Design

Architectural design is the process of defining the overall structure of a software system. It identifies the major components of the system, their responsibilities, and the relationships between them. Architectural design is the first stage of the design process and serves as the bridge between requirements and detailed design.

The architecture of a system influences every subsequent development activity. It determines the system's ability to meet quality attributes including performance, security, maintainability, and reliability. Architectural decisions are the most consequential decisions in software development because they are the most difficult to change.

### Architectural Decisions

Architectural decisions are the choices that shape the system's structure. They include the selection of architectural patterns, the partitioning of functionality into components, the assignment of responsibilities to components, the specification of communication protocols, the choice of data storage strategy, and the adoption of technology platforms.

Architectural decisions should be documented with their rationale. The concept of architectural decision records (ADRs) captures each decision with its context, the alternatives considered, the decision made, and the consequences. ADRs provide a historical record that helps new team members understand why the system is structured as it is.

### The Layered Architecture Pattern

The layered architecture organises the system into horizontal layers, where each layer provides services to the layer above and consumes services from the layer below. The most common instantiation is the three-tier architecture: the presentation layer handles user interface concerns, the business logic layer implements domain rules, and the data access layer manages persistent storage.

Layering supports separation of concerns by encapsulating each level of abstraction. Changes within a layer do not affect other layers if the interfaces between layers remain stable. However, layering can introduce performance overhead from the indirection of passing through multiple layers, and layers may become tightly coupled if dependencies are not carefully managed.

### The Model-View-Controller Pattern

Model-View-Controller (MVC) separates an interactive application into three components. The Model manages the application data and business rules. The View renders the model into a user interface. The Controller interprets user input and updates the model or view accordingly.

The MVC pattern supports multiple views of the same data, enables separation of presentation from business logic, and facilitates testing by allowing each component to be tested independently. Variations include Model-View-Presenter (MVP) and Model-View-ViewModel (MVVM). MVC is the foundation of many web frameworks including Ruby on Rails, Spring MVC, and ASP.NET MVC.

### The Repository Pattern

The repository pattern centralises data storage and management. All components access data through a central repository rather than communicating directly with each other. Components add data to the repository, retrieve data from it, and are notified when data changes.

The repository pattern simplifies component communication by providing a single point of access. It is particularly suited to systems where data sharing is the primary integration concern, such as information systems and compiler front ends. However, the repository can become a performance bottleneck and a single point of failure.

### The Client-Server Pattern

The client-server pattern distributes the system into two types of components: servers, which provide services, and clients, which request services. Multiple clients can connect to a single server. The server is typically passive — it waits for client requests and responds to them.

The client-server pattern is the foundation of most networked systems. It enables centralised management of data and services while distributing presentation and application processing to clients. Variations include three-tier client-server, where an application server mediates between the client and database server, and multi-tier architectures with additional intermediate layers.

### The Pipe-and-Filter Pattern

The pipe-and-filter pattern processes data through a sequence of processing steps. Filters transform data; pipes convey data between filters. Each filter operates independently of the others, making filters reusable and composable. The pattern supports incremental processing and parallel execution.

The pipe-and-filter pattern is widely used in batch processing systems, compilers, and data transformation pipelines. Its limitations include the overhead of data transformation between filters and the difficulty of maintaining state across the pipeline.

### Microservices Architecture

Microservices architecture decomposes a system into a collection of small, independently deployable services, each running in its own process and communicating through lightweight mechanisms such as HTTP APIs or message queues. Each service is built around a specific business capability and can be developed, deployed, and scaled independently.

The benefits of microservices include independent deployability, technology diversity, organisational alignment with Conway's law, and resilience through isolation. The challenges include distributed system complexity, network latency, data consistency across services, service discovery, and operational overhead. Microservices are best suited to large, complex systems with multiple development teams.

### The Event-Driven Pattern

The event-driven pattern organises components around the production and consumption of events. An event is a significant change in state. Event producers publish events without knowing which components will consume them. Event consumers subscribe to events without knowing which components produced them.

Event-driven architectures are highly decoupled and scalable. They are well suited to systems that must react to changes in real time, such as monitoring systems, trading platforms, and Internet of Things applications. The primary challenges are event schema evolution, event ordering, and debugging distributed event flows.

### The Broker Pattern

The broker pattern decouples clients from servers by introducing an intermediary — the broker — that routes requests between them. Clients make requests through the broker, which locates an appropriate server, forwards the request, and returns the response. The broker may also handle service registration, naming, and load balancing.

The broker pattern is the foundation of middleware systems including CORBA, Java RMI, and enterprise service buses (ESBs). It enables distribution transparency, where clients interact with remote services using the same programming model as local services. Modern variations include API gateways and service meshes.

### Transaction Processing Systems

Transaction processing systems manage transactions against a shared database. A transaction is an atomic unit of work that must be completed entirely or not at all. Transaction processing systems must guarantee ACID properties: atomicity, consistency, isolation, and durability.

The architectural pattern for transaction processing systems typically follows a three-tier structure: a presentation tier providing user interfaces, a transaction processing tier coordinating transactions, and a database tier managing persistent data. Examples include airline reservation systems, banking systems, and e-commerce platforms.

### Information Systems

Information systems manage and provide access to large volumes of data. They are characterised by data-intensive operations including data entry, query, reporting, and analysis. The repository pattern is the natural architectural choice for information systems, with a shared database serving as the central repository.

Modern information systems frequently adopt a layered architecture augmented with an MVC presentation layer. The system is organised into a data layer for database access, a business logic layer for domain rules and validation, and a presentation layer for user interaction.

### Language Processing Systems

Language processing systems translate or interpret languages. A compiler is the canonical example, translating source code into executable code. The architectural pattern for language processing systems follows a pipe-and-filter structure: lexical analysis, syntax analysis, semantic analysis, code generation, and optimisation.

Each phase transforms the representation of the source program. The lexical analyser converts characters into tokens; the syntax analyser builds a parse tree; the semantic analyser checks type correctness; the code generator produces target code; and the optimiser improves the generated code.

## Examples

### Case Study: Microservices at Netflix

Netflix migrated from a monolithic architecture to a microservices architecture with hundreds of services. Each service is independently deployable and owned by a separate team. Services communicate through REST APIs and asynchronous message queues. The architecture enables Netflix to deploy changes thousands of times per day, scale different services independently, and isolate failures.

### Case Study: Layered Architecture in Enterprise Systems

A large insurance company developed its claims processing system using a five-layer architecture: presentation, application, domain, infrastructure, and data. The domain layer implemented insurance-specific business rules independent of any technical framework. Changes to business rules required modifications only to the domain layer.

### Template: Architecture Decision Record

Title: ADR-001 — Database Selection
Context: The system requires strong consistency guarantees for financial transactions.
Alternatives Considered: PostgreSQL (relational), MongoDB (document), Cassandra (wide-column)
Decision: Adopt PostgreSQL for transaction consistency
Consequences: Transactional guarantees are satisfied but horizontal scaling will require application-level sharding

## Summary

Architectural design defines the high-level structure of a software system. Major patterns include layered architecture for separation of concerns, MVC for interactive systems, repository for data-centric systems, client-server for distributed systems, pipe-and-filter for data processing, microservices for independent deployability, event-driven for reactive systems, and broker for distribution transparency. Application architectures vary by domain: transaction processing emphasises ACID guarantees, information systems focus on data management, and language processing systems follow a pipe-and-filter structure. Architectural decisions should be documented with ADRs.

## Exercises

### Review Questions

1. Why are architectural decisions considered the most consequential decisions in software development?
2. What is an architectural decision record, and what information does it capture?
3. Describe the three tiers of a three-tier layered architecture.
4. What are the roles of the Model, View, and Controller in MVC?
5. When is the repository pattern an appropriate architectural choice?
6. List three advantages and three challenges of microservices architecture.
7. How does the event-driven pattern achieve loose coupling?
8. What is the role of the broker in a broker pattern?
9. Describe the architectural structure of a compiler in terms of architectural patterns.

### Application Problems

1. Propose an architecture for an online banking system. Identify the architectural patterns you would use and justify each choice.
2. Compare a microservices approach to a layered approach for a medium-sized e-commerce platform with ten developers. Include considerations for deployment, scalability, and team organisation.
3. Construct ADRs for three different architectural decisions in a hospital management system. Include the context, alternatives considered, decision, and consequences.

### Challenge Problem

A global logistics company is building a real-time shipment tracking platform. The system must track millions of shipments across multiple carriers, process location updates from GPS devices delivering thousands of events per second, provide REST APIs for customer-facing web and mobile applications, integrate with existing warehouse and billing systems, and guarantee 99.99% availability. Design an architectural solution that addresses these requirements. Specify the architectural patterns you would use, how you would decompose the system into components, and how you would handle data consistency, scalability, and fault tolerance. Justify your architectural decisions with explicit reference to the quality attribute requirements.
