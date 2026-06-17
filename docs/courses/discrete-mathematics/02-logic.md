# Chapter 2: Logic

## Learning Objectives

![Logic Overview](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/discrete-mathematics/02-logic.png)

After completing this chapter, you will be able to:

- Identify propositions and their truth values
- Construct truth tables for compound propositions
- Apply logical connectives: $\neg, \land, \lor, \oplus, \rightarrow, \leftrightarrow$
- Prove logical equivalence using truth tables and known equivalences
- Apply De Morgan's laws for logic
- Work with conditional and biconditional statements
- Determine converse, inverse, and contrapositive

## Theory

### 2.1 Propositions

A **proposition** is a declarative statement that is either true (T) or false (F), but not both.

Examples: "2 + 2 = 4" (true). "5 is an even number" (false). "If it rains, the ground gets wet" (a conditional proposition whose truth depends on the meaning; in logic we treat it as a compound proposition).

Non-examples: "What time is it?" (question), "Close the door" (command), "This sentence is false" (paradox, not a proposition).

### 2.2 Logical Connectives

Let $p$ and $q$ be propositions.

| Name | Symbol | Read as | True when |
|------|--------|---------|-----------|
| Negation | $\neg p$ | "not $p$" | $p$ is false |
| Conjunction | $p \land q$ | "$p$ and $q$" | both true |
| Disjunction | $p \lor q$ | "$p$ or $q$" (inclusive) | at least one true |
| Exclusive or | $p \oplus q$ | "$p$ xor $q$" | exactly one true |
| Conditional | $p \rightarrow q$ | "if $p$ then $q$" | $p$ false or $q$ true |
| Biconditional | $p \leftrightarrow q$ | "$p$ if and only if $q$" | both same truth value |

### 2.3 Truth Tables

A truth table enumerates all possible truth assignments to the variables and shows the resulting truth value of a compound proposition.

| $p$ | $q$ | $\neg p$ | $p \land q$ | $p \lor q$ | $p \oplus q$ | $p \rightarrow q$ | $p \leftrightarrow q$ |
|-----|-----|----------|-------------|-------------|---------------|--------------------|----------------------|
| T | T | F | T | T | F | T | T |
| T | F | F | F | T | T | F | F |
| F | T | T | F | T | T | T | F |
| F | F | T | F | F | F | T | T |

Note carefully: $p \rightarrow q$ is false only when $p$ is true and $q$ is false. This is called **material implication**.

### 2.4 Logical Equivalence

Two compound propositions $A$ and $B$ are **logically equivalent**, written $A \equiv B$, if they have identical truth values for all truth assignments.

**Theorem 2.1 (De Morgan's Laws).**
$$\neg(p \land q) \equiv \neg p \lor \neg q$$
$$\neg(p \lor q) \equiv \neg p \land \neg q$$

**Important equivalences:**

| Name | Equivalence |
|------|-------------|
| Identity | $p \land \text{T} \equiv p$, $p \lor \text{F} \equiv p$ |
| Domination | $p \lor \text{T} \equiv \text{T}$, $p \land \text{F} \equiv \text{F}$ |
| Idempotent | $p \land p \equiv p$, $p \lor p \equiv p$ |
| Double negation | $\neg(\neg p) \equiv p$ |
| Commutative | $p \land q \equiv q \land p$, $p \lor q \equiv q \lor p$ |
| Associative | $(p \land q) \land r \equiv p \land (q \land r)$ (similarly for $\lor$) |
| Distributive | $p \lor (q \land r) \equiv (p \lor q) \land (p \lor r)$ |
| | $p \land (q \lor r) \equiv (p \land q) \lor (p \land r)$ |
| Implication | $p \rightarrow q \equiv \neg p \lor q$ |
| Contrapositive | $p \rightarrow q \equiv \neg q \rightarrow \neg p$ |
| Biconditional | $p \leftrightarrow q \equiv (p \rightarrow q) \land (q \rightarrow p)$ |

### 2.5 Conditional and Related Statements

For the conditional $p \rightarrow q$:

- **Converse:** $q \rightarrow p$
- **Inverse:** $\neg p \rightarrow \neg q$
- **Contrapositive:** $\neg q \rightarrow \neg p$

The conditional is equivalent to its contrapositive. The converse is equivalent to the inverse.

### 2.6 Satisfiability and Tautology

A compound proposition is a **tautology** if it is always true (e.g., $p \lor \neg p$). It is a **contradiction** if always false (e.g., $p \land \neg p$). It is **satisfiable** if there exists at least one truth assignment making it true.

## Examples

**Example 2.1** (Truth table construction). Build the truth table for $(p \lor q) \rightarrow (p \land q)$.

| $p$ | $q$ | $p \lor q$ | $p \land q$ | $(p \lor q) \rightarrow (p \land q)$ |
|-----|-----|-----------|-------------|--------------------------------------|
| T | T | T | T | T |
| T | F | T | F | F |
| F | T | T | F | F |
| F | F | F | F | T |

**Example 2.2** (Logical equivalence). Show $p \rightarrow q \equiv \neg p \lor q$ using a truth table.

*Solution.* Compare columns for $p \rightarrow q$ and $\neg p \lor q$; they match for all four rows, confirming equivalence.

**Example 2.3** (De Morgan's). Negate "It is raining and it is cold."

*Solution.* Let $p$ = "it is raining", $q$ = "it is cold". The statement is $p \land q$. Negation: $\neg(p \land q) \equiv \neg p \lor \neg q$, i.e., "It is not raining or it is not cold."

**Example 2.4** (Converse/inverse/contrapositive). For "If it snows, school closes" ($p \rightarrow q$):

- Converse: "If school closes, it snows" ($q \rightarrow p$)
- Inverse: "If it does not snow, school does not close" ($\neg p \rightarrow \neg q$)
- Contrapositive: "If school does not close, it did not snow" ($\neg q \rightarrow \neg p$)

Note the original and contrapositive are equivalent; the converse and inverse are equivalent (but not equivalent to the original).

**Example 2.5** (Distributive law). Show $p \lor (q \land r) \equiv (p \lor q) \land (p \lor r)$.

| $p$ | $q$ | $r$ | $q \land r$ | $p \lor (q \land r)$ | $p \lor q$ | $p \lor r$ | RHS |
|-----|-----|-----|-----------|---------------------|-----------|-----------|-----|
| T | T | T | T | T | T | T | T |
| T | T | F | F | T | T | T | T |
| T | F | T | F | T | T | T | T |
| T | F | F | F | T | T | T | T |
| F | T | T | T | T | T | T | T |
| F | T | F | F | F | T | F | F |
| F | F | T | F | F | F | T | F |
| F | F | F | F | F | F | F | F |

The columns match, confirming equivalence.

## Summary

- Propositions are T/F statements. Logical connectives combine them into compound propositions.
- Truth tables exhaustively enumerate truth values.
- Logical equivalence means identical truth tables; De Morgan's and distributive laws are essential.
- $p \rightarrow q$ is equivalent to $\neg p \lor q$ and to its contrapositive $\neg q \rightarrow \neg p$.
- A tautology is always true; a contradiction is always false.

## Exercises

### Review Questions

1. Is "This statement is false" a proposition? Explain.
2. Build a truth table for $\neg(p \lor \neg q)$.
3. State the converse and contrapositive of "If a number is even, its square is even."
4. Show $p \rightarrow q$ and $\neg q \rightarrow \neg p$ are equivalent.
5. What is the negation of $p \oplus q$?

### Application Problems

6. Prove De Morgan's second law $\neg(p \lor q) \equiv \neg p \land \neg q$ by truth table.

7. Simplify $\neg(p \land (\neg p \lor q))$ using logical equivalences. Name each step.

8. Determine whether $(p \rightarrow q) \land (q \rightarrow p)$ is logically equivalent to $p \leftrightarrow q$.

9. Prove that $(p \lor q) \land \neg(p \land q)$ is equivalent to $p \oplus q$.

10. Is $((p \rightarrow q) \rightarrow r) \rightarrow s$ a tautology, contradiction, or satisfiable? Justify.

### Challenge Problem

11. A **Sheffer stroke** (NAND) is defined as $p \mid q \equiv \neg(p \land q)$. Show that all other logical connectives ($\neg, \land, \lor, \rightarrow$) can be expressed using only the Sheffer stroke.
