# Chapter 7: First-Order Logic and Inference

---

## Learning Objectives

- Identify the limitations of Propositional Logic and the advantages of First-Order Logic (FOL).
- Define the syntax of FOL: objects, relations, functions, and quantifiers.
- Translate complex natural language sentences into FOL.
- Explain the processes of Unification and Lifting in logical inference.
- Compare Forward Chaining and Backward Chaining inference strategies.

---

## Theory

![First-Order Logic](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/artificial-intelligence/ch07-fol.png)

### Why First-Order Logic?
While Propositional Logic assumes the world contains facts, **First-Order Logic (FOL)** assumes the world contains:
- **Objects**: People, houses, numbers, colors.
- **Relations**: Red, round, brother of, bigger than.
- **Functions**: Father of, best friend, plus one.

This allows for much more expressive power, especially when combined with **quantifiers**.

### Syntax of FOL
- **Constants**: `KingJohn`, `2`, `Red`.
- **Predicates**: `Brother(KingJohn, Richard)`, `IsMortal(Socrates)`.
- **Functions**: `LeftLeg(John)`.
- **Variables**: `x`, `y`, `z`.
- **Quantifiers**:
  - **Universal ($\forall$)**: "For all". $\forall x P(x)$ means $P$ is true for every object $x$.
  - **Existential ($\exists$)**: "There exists". $\exists x P(x)$ means $P$ is true for at least one object $x$.

### Inference in FOL
Inference in FOL is more complex than in PL due to variables:
- **Universal Instantiation**: Replacing a variable with a ground term.
- **Unification**: Finding a substitution that makes two logical expressions identical.
- **Lifting**: Generalizing inference rules (like Modus Ponens) to work with variables and quantifiers.

### Inference Strategies
- **Forward Chaining**: Starting from known facts and applying rules to derive new facts until the goal is reached (data-driven).
- **Backward Chaining**: Starting from the goal and looking for rules that could derive it, recursively checking their premises (goal-driven).

---

## Examples

### Example 1: Translating to FOL
"Every person has a mother."
- **Step-by-step**:
  1. Identify the predicate: `Person(x)` and `Mother(m, x)` (where $m$ is the mother of $x$).
  2. Use the universal quantifier for "Every person".
  3. Use the existential quantifier for "has a mother".
- **Result**: $\forall x Person(x) \Rightarrow \exists m (Mother(m, x) \wedge Person(m))$
- **What it demonstrates**: The use of nested quantifiers to represent relationships.

### Example 2: Unification
Find a substitution $\theta$ such that `Knows(John, x)` and `Knows(y, Mother(y))` unify.
- **Step-by-step**:
  1. Compare the first arguments: `John` and `y`. Substitute $\{y/John\}$.
  2. The second arguments are now `x` and `Mother(John)`.
  3. Substitute $\{x/Mother(John)\}$.
- **Final Substitution**: $\theta = \{y/John, x/Mother(John)\}$
- **What it demonstrates**: How a logical engine matches general patterns with specific facts.

---

## Summary

- First-Order Logic represents the world in terms of objects and relations.
- Quantifiers ($\forall, \exists$) allow for general statements about entire sets of objects.
- Unification is the core mechanism for matching patterns in FOL inference.
- Forward Chaining is typically used in production systems and expert systems.
- Backward Chaining is the foundation of the Prolog programming language.
- Godel's Completeness Theorem states that FOL is semantically complete.
- However, FOL is semi-decidable: we can prove entailment if it holds, but the process may not terminate if it does not.

---

## Exercises

### Review Questions
1. Contrast Propositional Logic and First-Order Logic.
2. What is the difference between a Predicate and a Function?
3. Explain the "Standardizing Apart" technique in inference.
4. Define a "Ground Term" and explain its importance in unification.

### Application Problems
1. Translate to FOL: "No two people have the same DNA, except for identical twins."
2. Unify the following pairs or state why they cannot be unified:
   - `P(A, B, x)` and `P(y, z, C)`
   - `Q(x, f(x))` and `Q(y, y)`
3. Describe a scenario where Backward Chaining is more efficient than Forward Chaining.

### Challenge Problem
1. **Resolution in FOL**: Describe the steps required to convert an FOL sentence into Conjunctive Normal Form (CNF), specifically explaining the process of **Skolemization** (removing existential quantifiers).
