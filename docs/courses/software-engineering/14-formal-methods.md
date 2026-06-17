# Formal Methods

## Learning Objectives

After completing this chapter, the student will be able to: explain the purpose of formal methods in software engineering; read and write specifications in the Z notation; describe the VDM and B-Method approaches; distinguish between model checking and theorem proving; apply Hoare logic for program correctness proofs; explain abstraction and refinement in formal development; and describe the application of formal methods in safety-critical systems.

## Theory

![Formal Methods Landscape](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/software-engineering/ch-14-formal-methods.png)

### The Role of Formal Methods

Formal methods are mathematically based techniques for the specification, development, and verification of software systems. They provide a rigorous framework for establishing that a system satisfies its specification with a degree of certainty that cannot be achieved through testing alone.

The use of formal methods is motivated by the limitations of informal approaches. Natural language specifications are inherently ambiguous. Testing can demonstrate the presence of defects but cannot demonstrate their absence. Formal methods enable precise specification and exhaustive verification, making them essential for safety-critical and security-critical systems where failure has catastrophic consequences.

The adoption of formal methods in industry has been limited by the mathematical sophistication required, the cost of formal analysis, and the difficulty of scaling formal techniques to large systems. However, in domains where correctness is paramount — such as railway signalling, avionics, and cryptographic protocol verification — formal methods are established practice.

### Formal Specification

Formal specification uses mathematical notation to describe what a system must do without prescribing how it does it. The specification serves as a precise contract between stakeholders and developers. It can be analysed for consistency, completeness, and correctness before implementation begins.

#### The Z Notation

Z is a formal specification language based on set theory and first-order predicate logic. Z organises specifications into schemas — rectangular boxes that describe the state of a system and the operations that change it.

A Z schema has a name and consists of two parts: the declaration part, which introduces variables and their types, and the predicate part, which constrains the values of those variables. A state schema defines the system state and its invariants. An operation schema describes an operation in terms of its effect on the state and its inputs and outputs.

The mathematical toolkit of Z includes: sets, with operations such as union, intersection, and set difference; relations, which are sets of ordered pairs; functions, which are many-to-one relations; sequences, which are functions from natural numbers to elements; and the schema calculus, which enables the composition of schemas.

#### VDM

The Vienna Development Method (VDM) is a formal specification language with an explicit focus on model-oriented specification. VDM specifications define abstract data types using mathematical constructs such as sets, sequences, and mappings, and define operations using preconditions and postconditions.

VDM supports both loose specification, which allows multiple implementations, and strict specification, which defines exact behaviour. VDM-SL (VDM Specification Language) is the standardised language for VDM specifications. The VDM Toolbox provides tool support for syntax checking, type checking, and proof obligation generation.

#### The B-Method

The B-Method is a formal method for the specification, design, and code generation of software systems. It uses the Abstract Machine Notation (AMN) and is grounded in set theory and generalised substitutions. B supports an incremental development process based on refinement.

A B specification consists of a set of machines, each representing a module or component. Each machine has a state, invariants that must always hold, and operations defined by generalised substitutions. The B-Method generates proof obligations that must be discharged to guarantee correctness.

The Event-B variant extends B to systems with multiple events and is widely used for modelling reactive and distributed systems. The Rodin platform provides an integrated environment for Event-B development.

### Formal Verification

Formal verification uses mathematical reasoning to establish that a system satisfies a desired property. The two principal approaches are model checking and theorem proving.

#### Model Checking

Model checking automatically verifies finite-state systems against temporal logic specifications. The system is modelled as a finite state machine. The desired property is expressed in a temporal logic such as Linear Temporal Logic (LTL) or Computation Tree Logic (CTL). The model checker exhaustively explores all reachable states to determine whether the property holds.

Model checking is fully automatic and produces counterexamples when a property fails. However, it suffers from the state explosion problem: the number of states grows exponentially with the number of concurrent components. Abstraction and symbolic representation techniques mitigate this limitation.

Prominent model checkers include SPIN, which verifies LTL properties of concurrent systems modelled in the Promela language, and NuSMV, which verifies CTL properties of systems modelled in the SMV language.

#### Theorem Proving

Theorem proving uses inference rules to prove that a system satisfies its specification. Unlike model checking, theorem proving can handle infinite state spaces and arbitrary data types. The user guides the proof by suggesting lemmas and proof strategies, while the theorem prover checks the logical validity of each step.

Interactive theorem provers such as Coq, Isabelle/HOL, and PVS require significant user expertise but can verify systems of arbitrary complexity. Automated theorem provers such as Z3 apply decision procedures to decidable fragments of logic.

### Correctness Proofs and Hoare Logic

Hoare logic provides a formal system for reasoning about program correctness. The central construct is the Hoare triple: {P} C {Q}, where P is the precondition that must hold before execution, C is the command, and Q is the postcondition that will hold after execution if C terminates.

A Hoare triple is valid if every execution of C starting from a state satisfying P results in a state satisfying Q. Hoare logic provides inference rules for each programming language construct: the assignment rule, the composition rule, the conditional rule, the loop rule with invariants, and the consequence rule for strengthening preconditions and weakening postconditions.

The key challenge in Hoare logic is finding loop invariants — predicates that hold before and after each iteration. Loop invariants must be true initially, preserved by the loop body, and strong enough to imply the desired postcondition when the loop terminates.

Partial correctness requires that if the program terminates, the postcondition holds. Total correctness additionally requires that the program terminates.

### Abstraction and Refinement

Abstraction and refinement are complementary concepts in formal development. Abstraction removes detail to create a simpler model; refinement adds detail to transform an abstract specification into a concrete implementation.

A refinement is correct if every behaviour of the concrete system is allowed by the abstract specification. Data refinement replaces abstract data types with concrete representations. Operation refinement replaces abstract operations with concrete algorithms.

The refinement calculus provides a systematic approach to deriving correct programs from specifications by applying correctness-preserving transformations.

### Applications in Safety-Critical Systems

Formal methods are mandated or strongly recommended in several safety-critical domains.

In railway signalling, the CENELEC EN 50128 standard requires the use of formal methods for the highest safety integrity levels. The B-Method has been used extensively in the development of railway interlocking systems. The Paris Metro Line 14 uses B-developed automatic train operation software.

In avionics, the DO-178C standard includes Formal Methods as a supplement for the highest level of software certification. The Airbus A380 flight control system was developed using formal methods.

In the security domain, formal methods are used to verify cryptographic protocols. The TLS handshake protocol has been formally verified, and formal analysis has discovered previously unknown vulnerabilities in widely deployed protocols.

## Examples

### Case Study: B-Method for Paris Metro

The Paris Metro Line 14 (Meteor) used the B-Method to develop its automatic train operation software. The specification comprised approximately 30,000 lines of B and 28,000 lines of Ada code. The formal approach enabled the detection of specification errors before implementation and provided confidence that the system would operate safely.

### Example: Hoare Triple for Factorial

{ n >= 0 }
i := 1;
f := 1;
while i <= n do
  f := f * i;
  i := i + 1
end
{ f = n! }

The loop invariant is: f = (i-1)! and i <= n+1.

### Example: Z Schema for a Library System

_LibrarySystem_
knownBooks: P ISBN
shelved: ISBN → Location
borrowed: ISBN → Borrower
status: ISBN → BookStatus

dom shelved ∪ dom borrowed = knownBooks
dom shelved ∩ dom borrowed = ∅
∀ b: dom borrowed • status(b) = ON_LOAN
∀ b: dom shelved • status(b) = AVAILABLE

## Summary

Formal methods apply mathematical techniques to software specification and verification. Z, VDM, and the B-Method enable precise specification. Model checking exhaustively verifies finite-state systems against temporal properties. Theorem proving addresses complex verification problems through user-guided reasoning. Hoare logic provides a framework for program correctness proofs. Refinement connects abstract specifications to concrete implementations. Formal methods are essential in safety-critical domains such as railway signalling and avionics.

## Exercises

### Review Questions

1. What distinguishes formal specification from natural language specification?
2. What are the main components of a Z schema?
3. Describe the difference between model checking and theorem proving.
4. What is the state explosion problem in model checking?
5. Define a Hoare triple and explain its components.
6. What is the role of a loop invariant in program verification?
7. Distinguish between abstraction and refinement.
8. What standard mandates formal methods for railway signalling software?
9. What is a proof obligation in the B-Method?
10. What distinguishes partial correctness from total correctness?

### Application Problems

1. Write a Hoare triple for a program that computes the maximum of two integers. State the precondition, the code, and the postcondition.
2. Specify a Z schema for an ATM machine. Include the state schema with account balances and PINs, and an operation schema for cash withdrawal with appropriate preconditions and postconditions.
3. A model checker examines a system with 25 Boolean variables. What is the maximum number of states the model checker may need to explore? Explain how symbolic model checking can reduce this number.

### Challenge Problem

A medical device company is developing an implantable insulin pump that automatically delivers insulin based on continuous blood glucose monitoring. The system must satisfy safety requirements including: insulin delivery must never exceed a maximum rate; glucose levels must remain within specified bounds; sensor failures must be detected and trigger a safe state; and the device must function correctly under all operational conditions. The regulatory agency requires evidence of correctness. Design a formal methods approach for this system. Specify which formal techniques you would use for specification, verification, and development. Explain how you would model the continuous physiological processes, what properties you would verify, and how you would handle the complexity of the hybrid (discrete-continuous) system. Address the practical concerns of training requirements, tool support, and integration with the development process.
