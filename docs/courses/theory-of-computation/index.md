# Theory of Computation

## Course Overview

The theory of computation is the branch of computer science concerned with the fundamental capabilities and limitations of computers. It addresses three central questions: What problems can be solved by mechanical computation? How efficiently can they be solved? And what are the inherent limits beyond which no machine can go?

This textbook develops these questions through three classical pillars:

1. **Automata Theory** — the study of abstract computing devices (finite automata, pushdown automata, Turing machines) that formalize the notion of "machine."
2. **Computability Theory** — the study of what problems are solvable by any algorithm, culminating in undecidability results such as the Halting Problem.
3. **Complexity Theory** — the study of the resources (time, space, randomness, interaction) required for computation.

The prerequisite structure flows linearly: each chapter depends on the material before it. The book assumes discrete mathematics (sets, functions, relations, graphs, proof by induction) and basic logic.

## Chapter List

| # | Chapter | Topic |
|---|---------|-------|
| 1 | **Deterministic Finite Automata** | Formal definition, transition diagrams, DFA design, language of DFA, product construction |
| 2 | **Nondeterministic Finite Automata** | Epsilon transitions, subset construction, equivalence of NFA and DFA |
| 3 | **Regular Expressions** | Operators, algebraic laws, Thompson construction, state elimination, Kleene's theorem |
| 4 | **Properties of Regular Languages** | Pumping lemma, closure properties, Myhill-Nerode theorem |
| 5 | **Context-Free Grammars** | Derivations, parse trees, ambiguity, grammar design |
| 6 | **Pushdown Automata** | Formal definition, DPDA vs NPDA, CFG/PDA equivalence |
| 7 | **Properties of CFLs** | Pumping lemma for CFLs, closure properties, decision algorithms |
| 8 | **Turing Machines** | Formal definition, TM design, variants, universal TM |
| 9 | **Extended TM Models** | Unrestricted grammars, recursive/RE languages, Church-Turing thesis |
| 10 | **Decidability** | Halting problem undecidability, reductions, Rice's theorem |
| 11 | **Reducibility** | Mapping reductions, arithmetical hierarchy, oracle machines |
| 12 | **Time Complexity** | P, NP, NP-completeness, Cook-Levin theorem |
| 13 | **Space Complexity** | PSPACE, Savitch's theorem, L, NL, completeness |
| 14 | **Advanced Complexity** | Randomization, interaction, circuits, polynomial hierarchy |
| 15 | **Applications** | Compilers, verification, DNA computing, quantum computing, cryptography |

## Recommended Background

- **Sets and relations**: union, intersection, Cartesian product, equivalence relations, functions
- **Graphs**: directed graphs, paths, reachability
- **Proof techniques**: induction, contradiction, pigeonhole principle
- **Logic**: propositional and predicate logic, quantifiers

## Notation Used Throughout

| Symbol | Meaning |
|--------|---------|
| $\Sigma$ | Input alphabet (finite set of symbols) |
| $\epsilon$ | Empty string |
| $\Sigma^*$ | Set of all strings over $\Sigma$ |
| $L$ | A language (subset of $\Sigma^*$) |
| $\delta$ | Transition function |
| $q_0$ | Start state |
| $F$ | Set of accepting states |
| $|w|$ | Length of string $w$ |
| $\mathcal{P}(S)$ | Power set of $S$ |

## How to Read This Book

Each chapter follows a consistent structure: **Learning Objectives** state what the reader should be able to do; **Theory** section presents formal definitions, theorems, and proofs with explanatory prose; **Examples** give fully-worked problems; **Summary** reviews core ideas; **Exercises** provide review questions, application problems, and a challenge problem.

Proofs are written in clear English with mathematical notation, favoring intuition alongside rigor. Every theorem is motivated before it is proved.
