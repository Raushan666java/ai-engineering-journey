# System Modelling

## Learning Objectives

After completing this chapter, the student will be able to: explain the purpose of system modelling in software engineering; construct UML use case diagrams, class diagrams, sequence diagrams, activity diagrams, and state machine diagrams; describe component and deployment diagrams; distinguish between UML and SysML; construct data flow diagrams and entity-relationship diagrams; explain model-driven engineering and its benefits; and write constraints using the Object Constraint Language.

## Theory

![UML Diagram Types Mindmap](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/software-engineering/03-system-modeling.png)

### The Purpose of System Modelling

System modelling is the process of developing abstract representations of a system from different perspectives. Each model emphasises certain aspects of the system while suppressing others, enabling stakeholders to understand, analyse, and communicate about the system. Models serve several purposes: they facilitate discussion between stakeholders and developers, they provide input to the design process, they document design decisions, and they can be used to generate implementation artefacts automatically.

A software system can be modelled from three complementary perspectives: the external perspective, which models the system's context and environment; the interaction perspective, which models interactions between the system and its environment or between components; and the structural perspective, which models the organisation of the system and its data.

### The Unified Modeling Language

The Unified Modeling Language (UML) is a general-purpose visual modelling language standardised by the Object Management Group (OMG). UML provides thirteen diagram types divided into two categories: structure diagrams, which describe the static structure of a system, and behaviour diagrams, which describe the dynamic behaviour.

UML is extensible through stereotypes, tagged values, and constraints. Stereotypes extend the UML vocabulary by defining new model elements derived from existing ones. Tagged values extend the properties of model elements. Constraints extend the semantics by adding rules expressed in natural language or OCL.

### Use Case Diagrams

Use case diagrams show the interactions between actors and the system. An actor is a role played by a user or another system that interacts with the system under development. A use case represents a complete unit of functionality. Relationships between use cases include include, where one use case incorporates the behaviour of another; extend, where one use case optionally extends the behaviour of another; and generalisation, where one use case inherits from another.

Use case diagrams are valuable for establishing the system boundary and identifying the principal functions. They are accessible to non-technical stakeholders and provide a starting point for detailed specification.

### Class Diagrams

Class diagrams describe the static structure of a system by showing classes, their attributes and operations, and the relationships between classes. A class is a template for objects that share structure and behaviour. Attributes represent the data held by instances of the class; operations represent the behaviours.

Relationships include association, which represents a structural connection between instances; aggregation, which represents a whole-part relationship where the part can exist independently; composition, a stronger form of aggregation where the part cannot exist independently; inheritance, where a subclass inherits the structure and behaviour of a superclass; and dependency, where a change to one class may affect another.

Multiplicity specifies how many instances participate in a relationship. Common multiplicities include one-to-one, one-to-many, and many-to-many.

### Sequence Diagrams

Sequence diagrams model the interactions between objects over time. They show the messages exchanged between objects arranged in chronological order. Each object has a lifeline represented by a vertical dashed line. Messages are shown as arrows between lifelines. The ordering of messages indicates the sequence of interactions.

Sequence diagrams can show alternative behaviours using combined fragments with operators such as alt (alternative), opt (optional), loop (iteration), and par (parallel). They are particularly useful for detailing the logic of a use case scenario.

### Activity Diagrams

Activity diagrams model the flow of control from one activity to another. They are essentially flowcharts that can represent sequential, concurrent, and conditional behaviour. Initial nodes mark the start of an activity; final nodes mark completion. Activity nodes represent actions, and edges represent the transition between actions.

Fork nodes split a flow into multiple concurrent flows; join nodes synchronise concurrent flows. Decision nodes represent conditional branching, and merge nodes bring alternative paths back together. Swimlanes partition activities according to the actor responsible for them.

### State Machine Diagrams

State machine diagrams model the behaviour of an object as it responds to events over its lifetime. They show the states an object can occupy, the transitions between states, the events that trigger transitions, and the actions that occur during transitions.

An initial state indicates the starting point. A state represents a condition during which the object satisfies some condition, performs some activity, or waits for an event. Transitions are triggered by events and may have guard conditions that must be true for the transition to fire. Actions may be associated with entering a state, exiting a state, or responding to an event.

Composite states contain nested states, enabling hierarchical modelling. Concurrent regions within a composite state represent independent aspects of behaviour.

### Component Diagrams

Component diagrams show the organisation and dependencies among software components. A component is a modular, deployable, and replaceable part of a system that encapsulates implementation and exposes a set of interfaces. Components have provided interfaces, which define the services they offer, and required interfaces, which define the services they need from the environment.

Component diagrams are used to model the high-level structure of a system and to reason about system composition, reuse, and deployment.

### Deployment Diagrams

Deployment diagrams show the physical deployment of software components on hardware nodes. Nodes represent computational resources such as servers, workstations, or embedded processors. Artefacts represent physical pieces of information such as executable files or configuration files. Communication paths between nodes indicate network connections.

Deployment diagrams are used to reason about system performance, reliability, and security in the target environment.

### UML versus SysML

The Systems Modeling Language (SysML) is a profile of UML adapted for systems engineering. SysML extends UML with constructs for modelling requirements, parametrics, and the flow-based behaviour of physical systems. While UML is focused on software-intensive systems, SysML supports the modelling of hardware, software, data, personnel, and facilities. SysML retains a subset of UML diagrams — use case, sequence, activity, state machine, and block definition diagrams (replacing class diagrams) — and adds requirements diagrams and parametric diagrams.

### Data Flow Diagrams

Data flow diagrams (DFDs) model the flow of data through a system. They are not part of UML but remain widely used for requirements analysis. A DFD consists of processes, which transform data; data flows, which represent data in motion; data stores, which represent data at rest; and external entities, which represent sources or destinations of data outside the system.

DFDs are hierarchically organised: a context diagram shows the system as a single process with its environment, and successive levels decompose processes into increasing detail. Level-1 DFDs show the major processes; level-2 DFDs refine each major process.

### Entity-Relationship Diagrams

Entity-relationship (ER) diagrams model the data perspective of a system. They show entity types, which represent categories of things of interest to the organisation; attributes, which describe properties of entities; and relationships, which represent associations between entities.

ER diagrams are central to data modelling and database design. They are complemented by the Enhanced Entity-Relationship (EER) model, which adds support for inheritance, categorisation, and complex relationships.

### Model-Driven Engineering

Model-driven engineering (MDE) elevates models from documentation artefacts to primary development artefacts from which implementation code can be generated automatically. In MDE, the developer creates models at different levels of abstraction using a domain-specific modelling language. Transformation tools convert platform-independent models into platform-specific models and then into executable code.

The Model-Driven Architecture (MDA) framework, standardised by OMG, distinguishes between Platform-Independent Models (PIM), which describe the system independently of the implementation platform, and Platform-Specific Models (PSM), which incorporate platform-specific details. Transformations between models are defined using the Query/View/Transformation (QVT) standard or using template-based approaches.

### Object Constraint Language

The Object Constraint Language (OCL) is a formal language for expressing constraints on UML models. OCL is a declarative language that does not have side effects. Expressions can specify invariants on classes, preconditions and postconditions on operations, and guard conditions on transitions.

An OCL invariant has the form "context ClassName inv: boolean-expression". For example, a constraint that an account balance must never be negative is expressed as: "context Account inv: self.balance >= 0". OCL expressions navigate the model using dot notation and support set operations through collection types including Set, Bag, Sequence, and OrderedSet.

## Examples

### Case Study: UML for an Online Banking System

An online banking system was modelled using seven UML diagram types. Use case diagrams showed the interactions between customers, tellers, and administrators with the system. A class diagram defined seventy-five classes across the domain, customer, transaction, and persistence layers. Sequence diagrams detailed the flow of funds transfer and bill payment scenarios. State machine diagrams modelled the lifecycle of a transaction through pending, completed, failed, and cancelled states. Component diagrams organised the system into web, application, and data tiers. Deployment diagrams specified a three-server architecture with load balancing and database replication.

### Case Study: SysML for an Autonomous Vehicle

An autonomous vehicle project adopted SysML for system-level modelling. Block definition diagrams described the vehicle's physical and logical architecture. Parametric diagrams modelled constraints such as braking distance as a function of speed and friction. Requirements diagrams traced system requirements to subsystem specifications. Activity diagrams modelled the sensing-planning-acting pipeline with concurrent flows for sensor fusion, path planning, and actuation.

### Template: OCL Constraints

context Loan inv maximumAmount: self.amount <= 100000
context Account::withdraw(a: Integer) precondition sufficientFunds: self.balance >= a
context Account::withdraw(a: Integer) postcondition balanceReduced: self.balance = self@pre.balance - a
context Customer inv uniqueIdentifier: Customer.allInstances()->forAll(c1, c2 | c1 <> c2 implies c1.identifier <> c2.identifier)

## Summary

System modelling provides multiple perspectives on a software system. UML is the standard modelling language for software systems, offering thirteen diagram types for structural and behavioural modelling. SysML extends UML for systems engineering. DFDs and ER diagrams remain valuable for data-oriented modelling. Model-driven engineering transforms models from documentation into primary development artefacts. OCL adds formal precision to UML models by expressing constraints that cannot be captured graphically.

## Exercises

### Review Questions

1. What are the three perspectives from which a system can be modelled?
2. List the structure diagrams and behaviour diagrams defined by UML.
3. What is the difference between include and extend relationships in use case diagrams?
4. How does a sequence diagram convey the timing of interactions?
5. What is the purpose of a fork node in an activity diagram?
6. Distinguish between aggregation and composition in class diagrams.
7. What is the difference between a provided interface and a required interface in component diagrams?
8. How does SysML extend UML for systems engineering?
9. What is the distinction between a PIM and a PSM in MDA?
10. What does an OCL invariant specify?

### Application Problems

1. Draw a use case diagram for a university library system. Identify at least four actors and twelve use cases.
2. Develop a class diagram for an online course registration system. Include classes for Student, Course, Instructor, Registration, and Department with appropriate attributes, operations, and relationships.
3. Construct a sequence diagram for the "Place Order" use case of an e-commerce system showing interactions between the customer, the shopping cart, the inventory system, and the payment gateway.

### Challenge Problem

You are the chief architect for a hospital information system that must integrate patient records, appointment scheduling, billing, laboratory results, and pharmacy management. Develop a modelling strategy that addresses all five subsystems. Specify which UML diagram types you would use for each subsystem and in what order you would develop them. Explain how you would ensure consistency across the models. Provide an OCL constraint for at least three business rules, such as "a patient cannot be scheduled for two appointments at the same time" or "a prescription must be authorised by a licensed physician."
