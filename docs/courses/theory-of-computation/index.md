# Theory of Computation — Complete Course Textbook

## Course Overview

The Theory of Computation is the branch of computer science that deals with **what problems can be solved** by computational means and **how efficiently** they can be solved. It provides the mathematical foundations for understanding computation itself — its capabilities, its limits, and its costs.

This textbook covers three classical pillars of the field:

- **Automata Theory** — abstract machines (finite automata, pushdown automata, Turing machines) and the languages they recognize.
- **Computability Theory** — what problems are solvable by algorithms, culminating in the discovery of intrinsically unsolvable problems.
- **Complexity Theory** — how much time and memory are required to solve a problem, leading to the famous P vs NP question.

## Prerequisites

- **Discrete Mathematics**: Sets, functions, relations, graphs, induction proofs, pigeonhole principle.
- **Basic Proof Techniques**: Direct proof, proof by contradiction, proof by induction.
- **Mathematical Maturity**: Comfort with formal definitions and abstract reasoning.

No programming experience is assumed, though familiarity with recursion and data structures is helpful for later chapters.

## How to Use This Textbook

Each chapter is structured as follows:

1. **Learning Objectives** — What you should be able to do after studying the chapter.
2. **Theory** — Formal definitions, theorems, and proofs with intuition.
3. **Examples** — Step-by-step worked problems with diagram descriptions.
4. **Summary** — Key takeaways for rapid review.
5. **Exercises** — Tiered practice (Basic / Intermediate / Advanced) for self-study.

## Chapter List

### Part I: Automata and Languages

| # | Chapter | Description |
|---|---------|-------------|
| 1 | [Deterministic Finite Automata](01-dfa.md) | DFA definition, transition diagrams, language acceptance, DFA design |
| 2 | [Nondeterministic Finite Automata](02-nfa.md) | NFA definition, epsilon transitions, subset construction, DFA/NFA equivalence |
| 3 | [Regular Expressions](03-regex.md) | Regex operators, precedence, algebraic laws, Arden's lemma, FA equivalence |
| 4 | [Properties of Regular Languages](04-regular-languages.md) | Pumping lemma, closure properties, Myhill-Nerode theorem, DFA minimization |
| 5 | [Context-Free Grammars](05-cfg.md) | CFG definition, derivations, parse trees, ambiguity, left recursion, left factoring |
| 6 | [Pushdown Automata](06-pda.md) | PDA definition, types, CFG/PDA equivalence, design examples |
| 7 | [Properties of Context-Free Languages](07-cfl.md) | Pumping lemma for CFLs, closure, Chomsky/Greibach normal forms, CYK algorithm |

### Part II: Computability Theory

| # | Chapter | Description |
|---|---------|-------------|
| 8 | [Turing Machines](08-turing.md) | TM definition, design patterns, multitape TMs, nondeterministic TMs |
| 9 | [Turing Machine Extensions and the Church-Turing Thesis](09-turing-extensions.md) | RE vs recursive languages, universal TM, Church-Turing thesis |
| 10 | [Decidability](10-decidability.md) | Decidable vs undecidable problems, the halting problem, reduction technique |
| 11 | [Reducibility and Advanced Undecidability](11-reducibility.md) | Mapping reductions, Rice's theorem, Post's correspondence problem |

### Part III: Complexity Theory

| # | Chapter | Description |
|---|---------|-------------|
| 12 | [Time Complexity and NP-Completeness](12-time-complexity.md) | Time complexity classes P and NP, polynomial reductions, Cook-Levin theorem |
| 13 | [Space Complexity](13-space-complexity.md) | Space complexity classes, PSPACE, Savitch's theorem, PSPACE-completeness |
| 14 | [Advanced Complexity Topics](14-advanced-complexity.md) | L, NL, co-NP, polynomial hierarchy, circuit complexity |
| 15 | [Applications of Automata Theory](15-applications.md) | Compilers, formal verification, AI, cryptography, programming languages |

## Recommended Reading and References

- **Sipser, M.** *Introduction to the Theory of Computation* (3rd ed.) — The standard textbook.
- **Hopcroft, J., Motwani, R., Ullman, J.** *Introduction to Automata Theory, Languages, and Computation* (3rd ed.) — Encyclopedic reference.
- **Kozen, D.** *Automata and Computability* — Succinct and rigorous.
- **Arora, S. and Barak, B.** *Computational Complexity: A Modern Approach* — Advanced complexity theory.

## Notation Conventions Used

| Symbol | Meaning |
|--------|---------|
| Σ | Input alphabet (finite set of symbols) |
| ε | Empty string (length 0) |
| Q | Set of states |
| δ | Transition function |
| q₀ | Start state |
| F | Set of accept states |
| L(M) | Language recognized by machine M |
| ∪, ∩, −, ¯ | Set union, intersection, difference, complement |
| ⊆ | Subset |
| ∅ | Empty set |
| ℕ | Natural numbers {0, 1, 2, ...} |
| → | Implies or transition depending on context |
| ⇒ | Derives in one step (grammars) |
| ⇒* | Derives in zero or more steps |
