# Chapter 12: Time Complexity and NP-Completeness

> **Previous:** [Reducibility](./11-reducibility.md) | **Next:** [Space Complexity](./13-space-complexity.md)



## Learning Objectives

- Define time complexity classes P and NP.
- Analyze the time complexity of algorithms using big-O notation.
- Define polynomial-time reductions.
- State and understand the Cook-Levin theorem.
- Prove NP-completeness for classic problems.
- Distinguish between P, NP, and NP-complete.
- Understand the significance of the P vs NP question.


## Chapter at a Glance
| Topic | Key Insight | Practical Takeaway |
|-------|------------|-------------------|
| Class P | Polynomial-time DTM solution | Efficiently solvable problems |
| Class NP | Polynomial-time verification | Solutions easy to check |
| NP-Completeness | Hardest problems in NP | If one falls, all fall |
| Cook-Levin Theorem | SAT is NP-complete | First NP-complete problem |
| Polynomial Reduction | A ≤_P B preserves P membership | Tool for proving NP-completeness |




## Chapter Roadmap
```mermaid
flowchart LR
    A[Time Complexity] --> B[Class P]
    B --> C[Class NP]
    C --> D[Polynomial Reductions]
    D --> E[NP-Completeness]
    E --> F[Cook-Levin Theorem]
    F --> G[Proving NP-Completeness]
```

## Theory

![Complexity Classes Mindmap](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/theory-of-computation/12-time-complexity.png)

### 12.1 Time Complexity

The **time complexity** of a Turing machine M is the function t: â„• â†’ â„• where t(n) is the maximum number of steps M takes on any input of length n.

For a **multitape TM**, the time complexity is defined similarly, but one step may involve all heads simultaneously.

**Big-O notation:** f(n) = O(g(n)) if there exist constants c > 0 and nâ‚€ such that for all n â‰¥ nâ‚€, f(n) â‰¤ cÂ·g(n).

Common complexity classes: O(1), O(log n), O(n), O(n log n), O(nÂ²), O(2â¿), O(n!).

### 12.2 The Class P

**P = âˆª_{k â‰¥ 0} TIME(náµ)**

P is the class of languages decidable in **polynomial time** on a deterministic Turing machine.

**Key principles:**
- P represents problems that are "efficiently solvable" or "tractable."
- The exact polynomial degree matters less than the classification as polynomial.
- Any polynomial-time algorithm on a reasonable model can be simulated in polynomial time on a TM (with at most polynomial slowdown).

**Problems in P:**
- Path existence in graphs (DFS/BFS).
- Sorting a list (O(n log n)).
- Matrix multiplication (O(nÂ³)).
- Linear programming (O(nÂ³Â·L)).
- GCD computation (Euclidean algorithm).
- Context-free language membership (CYK algorithm).
- DFA equivalence.

### 12.3 The Class NP

**NP = âˆª_{k â‰¥ 0} NTIME(náµ)**

NP is the class of languages decidable in polynomial time on a **nondeterministic** Turing machine.

**Equivalent characterization:** A language L is in NP if there exists a **verifier** V such that:
- V is a polynomial-time deterministic TM.
- For any string x âˆˆ L, there exists a proof y (|y| â‰¤ p(|x|) for some polynomial p) such that V accepts âŸ¨x, yâŸ©.
- For any x âˆ‰ L, V rejects âŸ¨x, yâŸ© for all y.

**Intuition:** NP = problems where solutions can be **verified** in polynomial time. The certificate y is the "solution" to the problem; checking it is efficient.

**Problems in NP:**
- SAT (Boolean satisfiability): given a formula, does a satisfying assignment exist?
- TSP (Traveling Salesman Problem): is there a tour of length â‰¤ K?
- CLIQUE: does a graph contain a K-clique?
- SUBSET-SUM: does a subset of numbers sum to exactly T?
- VERTEX-COVER: is there a vertex cover of size â‰¤ K?

**P vs NP:** The most famous open problem in computer science. Does P = NP?
- If P = NP: all efficiently verifiable problems are efficiently solvable.
- If P â‰  NP: some problems are inherently hard â€” their solutions can be verified quickly but not found quickly.

Most researchers believe P â‰  NP.

### 12.4 Polynomial-Time Reductions

A language A is **polynomial-time reducible** to B (written A â‰¤_P B) if there exists a function f computable in polynomial time such that w âˆˆ A iff f(w) âˆˆ B.

**Properties:**
- If A â‰¤_P B and B âˆˆ P, then A âˆˆ P.
- If A â‰¤_P B and A âˆ‰ P, then B âˆ‰ P.
- Polynomial-time reductions are **transitive**: if A â‰¤_P B and B â‰¤_P C, then A â‰¤_P C.

### 12.5 NP-Completeness

A language B is **NP-complete** if:
1. B âˆˆ NP.
2. For every A âˆˆ NP, A â‰¤_P B (B is NP-hard).

**Significance:** If any NP-complete problem is in P, then P = NP. If any NP-complete problem is not in P, then no NP-complete problem is in P.

### 12.6 Cook-Levin Theorem

**Theorem (Cook 1971, Levin 1973):** SAT is NP-complete.

**Proof sketch:**

1. **SAT âˆˆ NP:** Given a formula and an assignment, verify in polynomial time.
2. **SAT is NP-hard:** For any A âˆˆ NP with NTM N running in náµ time, construct a Boolean formula Ï† that is satisfiable iff N accepts w.

The formula encodes:
- **Cell states:** Variables x_{i,j,s} meaning "cell i,j contains symbol s." (i = time step, j = tape position.)
- **Initial state:** Ï†_start encodes the initial configuration qâ‚€ w.
- **Valid transitions:** Ï†_move ensures each configuration follows from the previous via N's transition relation.
- **Acceptance:** Ï†_accept ensures at least one configuration is accepting.

The formula size is O(nÂ²áµ), which is polynomial in n. A satisfying assignment corresponds to an accepting computation of N.

**Consequences:**
- Thousands of problems have been proven NP-complete.
- The first NP-complete problem enables a chain of reductions: SAT â‰¤_P 3SAT â‰¤_P CLIQUE â‰¤_P VERTEX-COVER â‰¤_P HAM-CYCLE â‰¤_P TSP, etc.

### 12.7 Proving NP-Completeness

To prove a problem B is NP-complete:
1. **Show B âˆˆ NP:** Give a polynomial-time verifier.
2. **Show B is NP-hard:** Choose a known NP-complete problem A and show A â‰¤_P B.

**Standard NP-complete problems:**
- **3SAT:** Boolean formulas in CNF with exactly 3 literals per clause.
- **CLIQUE:** Does G contain a K-clique? (K â‰¤ |V|)
- **VERTEX-COVER:** Does G have a vertex cover of size K?
- **HAM-CYCLE/HAM-PATH:** Does G have a Hamiltonian cycle/path?
- **TSP:** Does the complete graph have a tour of weight â‰¤ D?
- **SUBSET-SUM:** Does a set of integers have a subset summing to T?
- **PARTITION:** Can a multiset be partitioned into equal-sum subsets?
- **BIN-PACKING:** Can items of given sizes fit into K bins of capacity C?
- **GRAPH-COLORING (3-COLOR):** Is G 3-colorable?

### 12.8 Beyond NP

**NP-hard:** Problems to which every NP problem reduces (but may not be in NP). Includes:
- The halting problem (much harder than NP).
- All NP-complete problems.
- Optimization versions of NP-complete problems.

**co-NP:** Languages whose complements are in NP. Example: TAUTOLOGY = { Ï† | Ï† is true for all assignments } âˆˆ co-NP.

**NPI (NP-Intermediate):** If P â‰  NP, there exist problems in NP that are neither in P nor NP-complete (Ladner's theorem). Candidates: Graph Isomorphism, Factoring.

## Examples

### Example 12.1: Proving a Problem is in NP â€” CLIQUE

CLIQUE = { âŸ¨G, KâŸ© | G has a K-clique }.

**Verifier:** Given input âŸ¨G, KâŸ© and certificate (a set of K vertices V'):
- Verify |V'| = K.
- Verify that for every pair u, v âˆˆ V', (u, v) is an edge in G.
- If all checks pass, accept; otherwise reject.

Runtime: O(KÂ²) âŠ† O(|V|Â²) â€” polynomial. So CLIQUE âˆˆ NP.

### Example 12.2: 3SAT â‰¤_P CLIQUE

Given a 3CNF formula Ï† with k clauses, construct graph G:
- Create 3 vertices per clause (one for each literal).
- Connect vertices if they are in different clauses AND are not contradictory (not x and Â¬x).
- Set K = k (number of clauses).

**Correctness:** Ï† is satisfiable iff there is a k-clique in G. A clique of size k picks one literal from each clause, all of which can be simultaneously true.

Construction: O(kÂ²Â·3Â²) = O(kÂ²) â€” polynomial.

### Example 12.3: VERTEX-COVER â‰¤_P CLIQUE (via complement)

Given graph G = (V, E) and integer k, the complement graph á¸  = (V, Ä’) where Ä’ = { (u,v) | u â‰  v and (u,v) âˆ‰ E }.

**Key fact:** C is a vertex cover in G iff V âˆ’ C is a clique in á¸ .

So: G has a k-vertex-cover iff á¸  has an (|V|âˆ’k)-clique.

This gives: VERTEX-COVER â‰¤_P CLIQUE.

### Example 12.4: SAT â‰¤_P 3SAT

Given SAT formula Ï†, convert to 3SAT Ï†':
- Each clause in Ï† is replaced by a set of 3-clauses using auxiliary variables.
- For a 1-literal clause (x): replace with (x âˆ¨ x âˆ¨ x).
- For a 2-literal clause (x âˆ¨ y): replace with (x âˆ¨ y âˆ¨ z) âˆ§ (x âˆ¨ y âˆ¨ Â¬z) for fresh z.
- For a k-literal clause (k > 3): introduce k-3 new variables to split into 3-clauses.

The transformation is polynomial and preserves satisfiability.

### Example 12.5: SUBSET-SUM is NP-Complete

Given numbers aâ‚, â€¦, aâ‚™ and target T.

**In NP:** Certificate is the subset. Verify sum = T.

**NP-hardness:** Reduce 3SAT to SUBSET-SUM. For each variable, create two numbers (one for true, one for false). For each clause, create two "slack" numbers. The construction ensures a subset summing to T corresponds to a satisfying assignment (each clause's sum is satisfied by at least one literal).



## Concept Comparison Table
| Class | Definition | Characteristic |
|-------|------------|---------------|
| P | ⋃ TIME(n^k) | Polynomial-time DTM solution |
| NP | ⋃ NTIME(n^k) | Polynomial-time verification |
| NP-complete | NP ∩ NP-hard | Hardest in NP |
| co-NP | { L | complement ∈ NP } | Negative certificates |

## Quick Reference
| Problem | Class | Key Insight |
|---------|-------|-------------|
| PATH | P | BFS/DFS reachability |
| SAT | NP-complete | Cook-Levin theorem |
| CLIQUE | NP-complete | 3SAT reduction |
| TSP | NP-complete | Many practical problems |
| Primality | P | AKS algorithm |

## Cross-Application Matrix
| Domain | Complexity Concept |
|--------|-------------------|
| Cryptography | One-way functions require P ≠ NP |
| AI | Many planning problems NP-complete |
| Operations research | Optimization NP-hard |
| Bioinformatics | Sequence alignment in P |
| Scheduling | Many variants NP-complete |

## Chapter Quiz

**Q1.** P is the class of problems solvable in:
- A) Linear time
- B) Polynomial time on DTM ✓
- C) Polynomial time on NTM
- D) Exponential time

<details>
<summary>Answer</summary>
**B)** P = problems decidable in O(n^k) time on a deterministic Turing machine.
</details>

**Q2.** NP problems can be:
- A) Solved in polynomial time
- B) Verified in polynomial time ✓
- C) Solved in exponential time only
- D) Solved by DFA

<details>
<summary>Answer</summary>
**B)** NP = problems with polynomial-time verifiable certificates (solutions).
</details>

**Q3.** A problem is NP-complete if it is:
- A) In NP
- B) NP-hard
- C) Both in NP and NP-hard ✓
- D) In P

<details>
<summary>Answer</summary>
**C)** NP-complete = in NP + all NP problems reduce to it (NP-hard).
</details>

**Q4.** Cook-Levin theorem proved ___ is NP-complete:
- A) TSP
- B) SAT ✓
- C) CLIQUE
- D) HAM-CYCLE

<details>
<summary>Answer</summary>
**B)** Cook (1971) and Levin (1973) independently proved SAT is NP-complete.
</details>

**Q5.** If P = NP, then:
- A) All NP problems have polynomial algorithms ✓
- B) All problems are decidable
- C) Cryptography becomes impossible
- D) Exponential time is unnecessary

<details>
<summary>Answer</summary>
**A)** P = NP means every efficiently verifiable problem is efficiently solvable.
</details>

## Summary

- P = problems solvable in polynomial time on a DTM.
- NP = problems verifiable in polynomial time = solvable in polynomial time on an NTM.
- Polynomial-time reductions (â‰¤_P) preserve polynomial-time solvability.
- A problem is NP-complete if it's in NP and all NP problems reduce to it.
- The Cook-Levin theorem proves SAT is NP-complete by encoding TM computations as Boolean formulas.
- Thousands of NP-complete problems span computing, optimization, and mathematics.
- P vs NP remains the most important open question in theoretical CS.

## Exercises

### Basic

1. Show that PATH (is there a path from s to t in a directed graph?) is in P.
2. Show that COMPOSITE (is n composite?) is in NP.
3. Show that P is closed under union, intersection, and complement.
4. Explain why a polynomial-time reduction from A to B combined with B âˆˆ P implies A âˆˆ P.
5. Classify: Sorting, TSP, Matrix multiplication, Graph connectivity â€” which are in P and which are in NP?

### Intermediate

6. Prove that CLIQUE is NP-complete by reducing 3SAT to CLIQUE (construct the standard reduction).
7. Prove that VERTEX-COVER is NP-complete.
8. Show that HAM-CYCLE is NP-complete.
9. Prove that SUBSET-SUM is NP-complete (reduce 3SAT to SUBSET-SUM).
10. Show that if P = NP, then every polynomial-time verifiable problem has a polynomial-time algorithm.

### Advanced

11. Prove the Cook-Levin theorem: construct the formula Ï† for a nondeterministic TM and show it is satisfiable iff the TM accepts.
12. Prove Ladner's theorem: if P â‰  NP, then there exists an NP-intermediate language.
13. Show that GRAPH-ISOMORPHISM is in NP (and is a candidate for NP-intermediate status).
14. Prove that the optimization version of TSP (find the shortest tour) is NP-hard.
15. Show that if SAT âˆˆ P, then every NP problem has an algorithm running in O(náµ) time for some fixed k (the same polynomial degree for all problems).
