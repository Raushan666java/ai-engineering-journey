# Chapter 12: Time Complexity and NP-Completeness

## Learning Objectives

- Define time complexity classes P and NP.
- Analyze the time complexity of algorithms using big-O notation.
- Define polynomial-time reductions.
- State and understand the Cook-Levin theorem.
- Prove NP-completeness for classic problems.
- Distinguish between P, NP, and NP-complete.
- Understand the significance of the P vs NP question.

## Theory

![Complexity Classes Mindmap](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/theory-of-computation/12-time-complexity.png)

### 12.1 Time Complexity

The **time complexity** of a Turing machine M is the function t: ℕ → ℕ where t(n) is the maximum number of steps M takes on any input of length n.

For a **multitape TM**, the time complexity is defined similarly, but one step may involve all heads simultaneously.

**Big-O notation:** f(n) = O(g(n)) if there exist constants c > 0 and n₀ such that for all n ≥ n₀, f(n) ≤ c·g(n).

Common complexity classes: O(1), O(log n), O(n), O(n log n), O(n²), O(2ⁿ), O(n!).

### 12.2 The Class P

**P = ∪_{k ≥ 0} TIME(nᵏ)**

P is the class of languages decidable in **polynomial time** on a deterministic Turing machine.

**Key principles:**
- P represents problems that are "efficiently solvable" or "tractable."
- The exact polynomial degree matters less than the classification as polynomial.
- Any polynomial-time algorithm on a reasonable model can be simulated in polynomial time on a TM (with at most polynomial slowdown).

**Problems in P:**
- Path existence in graphs (DFS/BFS).
- Sorting a list (O(n log n)).
- Matrix multiplication (O(n³)).
- Linear programming (O(n³·L)).
- GCD computation (Euclidean algorithm).
- Context-free language membership (CYK algorithm).
- DFA equivalence.

### 12.3 The Class NP

**NP = ∪_{k ≥ 0} NTIME(nᵏ)**

NP is the class of languages decidable in polynomial time on a **nondeterministic** Turing machine.

**Equivalent characterization:** A language L is in NP if there exists a **verifier** V such that:
- V is a polynomial-time deterministic TM.
- For any string x ∈ L, there exists a proof y (|y| ≤ p(|x|) for some polynomial p) such that V accepts ⟨x, y⟩.
- For any x ∉ L, V rejects ⟨x, y⟩ for all y.

**Intuition:** NP = problems where solutions can be **verified** in polynomial time. The certificate y is the "solution" to the problem; checking it is efficient.

**Problems in NP:**
- SAT (Boolean satisfiability): given a formula, does a satisfying assignment exist?
- TSP (Traveling Salesman Problem): is there a tour of length ≤ K?
- CLIQUE: does a graph contain a K-clique?
- SUBSET-SUM: does a subset of numbers sum to exactly T?
- VERTEX-COVER: is there a vertex cover of size ≤ K?

**P vs NP:** The most famous open problem in computer science. Does P = NP?
- If P = NP: all efficiently verifiable problems are efficiently solvable.
- If P ≠ NP: some problems are inherently hard — their solutions can be verified quickly but not found quickly.

Most researchers believe P ≠ NP.

### 12.4 Polynomial-Time Reductions

A language A is **polynomial-time reducible** to B (written A ≤_P B) if there exists a function f computable in polynomial time such that w ∈ A iff f(w) ∈ B.

**Properties:**
- If A ≤_P B and B ∈ P, then A ∈ P.
- If A ≤_P B and A ∉ P, then B ∉ P.
- Polynomial-time reductions are **transitive**: if A ≤_P B and B ≤_P C, then A ≤_P C.

### 12.5 NP-Completeness

A language B is **NP-complete** if:
1. B ∈ NP.
2. For every A ∈ NP, A ≤_P B (B is NP-hard).

**Significance:** If any NP-complete problem is in P, then P = NP. If any NP-complete problem is not in P, then no NP-complete problem is in P.

### 12.6 Cook-Levin Theorem

**Theorem (Cook 1971, Levin 1973):** SAT is NP-complete.

**Proof sketch:**

1. **SAT ∈ NP:** Given a formula and an assignment, verify in polynomial time.
2. **SAT is NP-hard:** For any A ∈ NP with NTM N running in nᵏ time, construct a Boolean formula φ that is satisfiable iff N accepts w.

The formula encodes:
- **Cell states:** Variables x_{i,j,s} meaning "cell i,j contains symbol s." (i = time step, j = tape position.)
- **Initial state:** φ_start encodes the initial configuration q₀ w.
- **Valid transitions:** φ_move ensures each configuration follows from the previous via N's transition relation.
- **Acceptance:** φ_accept ensures at least one configuration is accepting.

The formula size is O(n²ᵏ), which is polynomial in n. A satisfying assignment corresponds to an accepting computation of N.

**Consequences:**
- Thousands of problems have been proven NP-complete.
- The first NP-complete problem enables a chain of reductions: SAT ≤_P 3SAT ≤_P CLIQUE ≤_P VERTEX-COVER ≤_P HAM-CYCLE ≤_P TSP, etc.

### 12.7 Proving NP-Completeness

To prove a problem B is NP-complete:
1. **Show B ∈ NP:** Give a polynomial-time verifier.
2. **Show B is NP-hard:** Choose a known NP-complete problem A and show A ≤_P B.

**Standard NP-complete problems:**
- **3SAT:** Boolean formulas in CNF with exactly 3 literals per clause.
- **CLIQUE:** Does G contain a K-clique? (K ≤ |V|)
- **VERTEX-COVER:** Does G have a vertex cover of size K?
- **HAM-CYCLE/HAM-PATH:** Does G have a Hamiltonian cycle/path?
- **TSP:** Does the complete graph have a tour of weight ≤ D?
- **SUBSET-SUM:** Does a set of integers have a subset summing to T?
- **PARTITION:** Can a multiset be partitioned into equal-sum subsets?
- **BIN-PACKING:** Can items of given sizes fit into K bins of capacity C?
- **GRAPH-COLORING (3-COLOR):** Is G 3-colorable?

### 12.8 Beyond NP

**NP-hard:** Problems to which every NP problem reduces (but may not be in NP). Includes:
- The halting problem (much harder than NP).
- All NP-complete problems.
- Optimization versions of NP-complete problems.

**co-NP:** Languages whose complements are in NP. Example: TAUTOLOGY = { φ | φ is true for all assignments } ∈ co-NP.

**NPI (NP-Intermediate):** If P ≠ NP, there exist problems in NP that are neither in P nor NP-complete (Ladner's theorem). Candidates: Graph Isomorphism, Factoring.

## Examples

### Example 12.1: Proving a Problem is in NP — CLIQUE

CLIQUE = { ⟨G, K⟩ | G has a K-clique }.

**Verifier:** Given input ⟨G, K⟩ and certificate (a set of K vertices V'):
- Verify |V'| = K.
- Verify that for every pair u, v ∈ V', (u, v) is an edge in G.
- If all checks pass, accept; otherwise reject.

Runtime: O(K²) ⊆ O(|V|²) — polynomial. So CLIQUE ∈ NP.

### Example 12.2: 3SAT ≤_P CLIQUE

Given a 3CNF formula φ with k clauses, construct graph G:
- Create 3 vertices per clause (one for each literal).
- Connect vertices if they are in different clauses AND are not contradictory (not x and ¬x).
- Set K = k (number of clauses).

**Correctness:** φ is satisfiable iff there is a k-clique in G. A clique of size k picks one literal from each clause, all of which can be simultaneously true.

Construction: O(k²·3²) = O(k²) — polynomial.

### Example 12.3: VERTEX-COVER ≤_P CLIQUE (via complement)

Given graph G = (V, E) and integer k, the complement graph Ḡ = (V, Ē) where Ē = { (u,v) | u ≠ v and (u,v) ∉ E }.

**Key fact:** C is a vertex cover in G iff V − C is a clique in Ḡ.

So: G has a k-vertex-cover iff Ḡ has an (|V|−k)-clique.

This gives: VERTEX-COVER ≤_P CLIQUE.

### Example 12.4: SAT ≤_P 3SAT

Given SAT formula φ, convert to 3SAT φ':
- Each clause in φ is replaced by a set of 3-clauses using auxiliary variables.
- For a 1-literal clause (x): replace with (x ∨ x ∨ x).
- For a 2-literal clause (x ∨ y): replace with (x ∨ y ∨ z) ∧ (x ∨ y ∨ ¬z) for fresh z.
- For a k-literal clause (k > 3): introduce k-3 new variables to split into 3-clauses.

The transformation is polynomial and preserves satisfiability.

### Example 12.5: SUBSET-SUM is NP-Complete

Given numbers a₁, …, aₙ and target T.

**In NP:** Certificate is the subset. Verify sum = T.

**NP-hardness:** Reduce 3SAT to SUBSET-SUM. For each variable, create two numbers (one for true, one for false). For each clause, create two "slack" numbers. The construction ensures a subset summing to T corresponds to a satisfying assignment (each clause's sum is satisfied by at least one literal).

## Summary

- P = problems solvable in polynomial time on a DTM.
- NP = problems verifiable in polynomial time = solvable in polynomial time on an NTM.
- Polynomial-time reductions (≤_P) preserve polynomial-time solvability.
- A problem is NP-complete if it's in NP and all NP problems reduce to it.
- The Cook-Levin theorem proves SAT is NP-complete by encoding TM computations as Boolean formulas.
- Thousands of NP-complete problems span computing, optimization, and mathematics.
- P vs NP remains the most important open question in theoretical CS.

## Exercises

### Basic

1. Show that PATH (is there a path from s to t in a directed graph?) is in P.
2. Show that COMPOSITE (is n composite?) is in NP.
3. Show that P is closed under union, intersection, and complement.
4. Explain why a polynomial-time reduction from A to B combined with B ∈ P implies A ∈ P.
5. Classify: Sorting, TSP, Matrix multiplication, Graph connectivity — which are in P and which are in NP?

### Intermediate

6. Prove that CLIQUE is NP-complete by reducing 3SAT to CLIQUE (construct the standard reduction).
7. Prove that VERTEX-COVER is NP-complete.
8. Show that HAM-CYCLE is NP-complete.
9. Prove that SUBSET-SUM is NP-complete (reduce 3SAT to SUBSET-SUM).
10. Show that if P = NP, then every polynomial-time verifiable problem has a polynomial-time algorithm.

### Advanced

11. Prove the Cook-Levin theorem: construct the formula φ for a nondeterministic TM and show it is satisfiable iff the TM accepts.
12. Prove Ladner's theorem: if P ≠ NP, then there exists an NP-intermediate language.
13. Show that GRAPH-ISOMORPHISM is in NP (and is a candidate for NP-intermediate status).
14. Prove that the optimization version of TSP (find the shortest tour) is NP-hard.
15. Show that if SAT ∈ P, then every NP problem has an algorithm running in O(nᵏ) time for some fixed k (the same polynomial degree for all problems).
