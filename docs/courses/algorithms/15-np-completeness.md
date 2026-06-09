# Chapter 15: NP-Completeness

## Learning Objectives

By the end of this chapter, students will be able to:

1. Define the complexity classes P, NP, NP-complete, and NP-hard.
2. Perform polynomial-time reductions between problems.
3. Understand the statement and significance of the Cook-Levin theorem.
4. Prove NP-completeness of classic problems: SAT, TSP, vertex cover, clique.

---

## Theory

### 15.1 Complexity Classes

**Definition 15.1 (P).** The class P consists of all decision problems that can be solved in polynomial time by a deterministic Turing machine.

**Definition 15.2 (NP).** The class NP (nondeterministic polynomial time) consists of all decision problems for which a YES answer can be verified in polynomial time given a certificate (witness) of polynomial size.

**Definition 15.3 (NP-hard).** A problem \( H \) is NP-hard if every problem in NP can be reduced to \( H \) in polynomial time.

**Definition 15.4 (NP-complete).** A problem is NP-complete if it is (a) in NP and (b) NP-hard.

**The central question:** Is \( P = NP \)? That is, can every problem whose solution can be verified in polynomial time also be solved in polynomial time? This is one of the seven Millennium Prize Problems.

### 15.2 Polynomial-Time Reductions

**Definition 15.5.** A **polynomial-time reduction** from problem \( A \) to problem \( B \) is a polynomial-time algorithm that transforms any instance \( x \) of \( A \) into an instance \( f(x) \) of \( B \) such that \( x \) is a YES instance of \( A \) if and only if \( f(x) \) is a YES instance of \( B \).

**Notation:** \( A \le_p B \) (A reduces to B in polynomial time).

**Properties:**
- If \( A \le_p B \) and \( B \in P \), then \( A \in P \).
- If \( A \le_p B \) and \( A \) is NP-hard, then \( B \) is NP-hard.
- Reductions are transitive: \( A \le_p B \) and \( B \le_p C \) implies \( A \le_p C \).

### 15.3 Cook-Levin Theorem

**Theorem 15.1 (Cook-Levin, 1971).** SATISFIABILITY (SAT) is NP-complete.

**Proof sketch:**
1. SAT is in NP: given a satisfying assignment, verify each clause in polynomial time.
2. SAT is NP-hard: For any NP language \( L \), there is a nondeterministic Turing machine \( M \) that decides \( L \) in polynomial time. Construct a Boolean formula \( \phi \) that is satisfiable if and only if \( M \) accepts its input. The formula encodes: the initial configuration, the transition function, and the acceptance condition. The size of \( \phi \) is polynomial in the input size.

**Significance:** This was the first NP-completeness proof. All subsequent NP-completeness proofs proceed by reduction from SAT or another known NP-complete problem.

### 15.4 Classic NP-Complete Problems

#### 15.4.1 3-SAT

**Problem:** Given a CNF formula where each clause has exactly three literals, determine if there is a satisfying assignment.

**Reduction from SAT:** Replace each clause with up to five 3-literal clauses using auxiliary variables.

#### 15.4.2 Clique

**Problem:** Given a graph \( G = (V, E) \) and an integer \( k \), does \( G \) contain a clique of size \( k \)? (A clique is a set of vertices where every pair is connected by an edge.)

**Reduction from 3-SAT:** For a formula with \( n \) variables and \( m \) clauses, create a graph with \( 3m \) vertices (one per literal). Add edges between all vertices except those in the same clause and those that correspond to complementary literals. There is a clique of size \( m \) if and only if the formula is satisfiable.

#### 15.4.3 Vertex Cover

**Problem:** Given a graph \( G = (V, E) \) and an integer \( k \), does there exist a set of \( k \) vertices such that every edge is incident to at least one selected vertex?

**Reduction from Clique:** For a graph \( G \), the complement graph \( \overline{G} \) has a vertex cover of size \( |V| - k \) if and only if \( G \) has a clique of size \( k \).

#### 15.4.4 Hamiltonian Cycle and TSP

**Problem (Hamiltonian Cycle):** Does a graph contain a cycle that visits each vertex exactly once?

**Problem (Traveling Salesman):** Given a complete graph with edge weights and a bound \( B \), does there exist a tour of total weight \( \le B \) that visits each city exactly once?

**Reduction from Vertex Cover to Hamiltonian Cycle** is involved; TSP reduces directly from Hamiltonian Cycle by assigning weight 1 to existing edges and a large weight to non-edges.

#### 15.4.5 Subset Sum

**Problem:** Given a set of integers \( A \) and a target \( S \), does there exist a subset that sums to \( S \)?

**Reduction from 3-SAT** uses a clever encoding of truth assignments as numbers.

### 15.5 NP-Hard Problems

Some problems are NP-hard but not in NP (because they are not decision problems).

- **Optimization TSP:** Find the shortest tour (not just decide if a tour of length \( \le B \) exists).
- **Halting problem:** Undecidable, hence NP-hard.
- **Integer programming:** Maximize a linear function subject to integer constraints.

---

## Examples

### Example 15.1: Clique to Vertex Cover Reduction

**Problem:** Reduce CLIQUE to VERTEX COVER.

**Construction:** Given graph \( G = (V, E) \) and integer \( k \), construct the complement graph \( \overline{G} = (V, \overline{E}) \) where \( \overline{E} = \{(u,v) : u \neq v, (u,v) \notin E\} \). Let \( k' = |V| - k \).

**Correctness:** A set \( C \subseteq V \) is a vertex cover in \( \overline{G} \) if every non-edge in \( G \) has at least one endpoint in \( C \). This is equivalent to \( V \setminus C \) being a clique in \( G \). So \( G \) has a clique of size \( k \) iff \( \overline{G} \) has a vertex cover of size \( |V| - k \).

### Example 15.2: 3-SAT to Clique Reduction

**Problem:** Prove CLIQUE is NP-complete.

**Construction:** Given a 3-CNF formula \( F = C_1 \land C_2 \land \cdots \land C_m \) with variables \( x_1, \ldots, x_n \):

- Create vertices: for each clause \( C_j = (l_{j1} \lor l_{j2} \lor l_{j3}) \), create three vertices \( v_{j1}, v_{j2}, v_{j3} \).
- Add edges between \( v_{jp} \) and \( v_{jq} \) if and only if they are in different clauses AND \( l_{jp} \neq \overline{l_{jq}} \).
- Set \( k = m \).

**Correctness:** A clique of size \( m \) must contain exactly one vertex from each clause (since vertices in the same clause are not connected). The compatibility condition ensures no literal conflicts (a variable and its negation cannot both be selected). The selected vertices correspond to a satisfying assignment.

### Example 15.3: Proving NP-Completeness Checklist

1. **Show the problem is in NP:** Give a certificate and a polynomial-time verification algorithm.
2. **Choose a known NP-complete problem** \( A \) to reduce from.
3. **Construct a reduction** \( f \) that maps instances of \( A \) to instances of your problem.
4. **Prove correctness:** Show \( x \) is YES for \( A \) iff \( f(x) \) is YES for your problem.
5. **Show \( f \) is polynomial-time computable.**

---

## Summary

| Class | Definition | Example |
|-------|------------|---------|
| P | Solvable in polynomial time | Shortest path |
| NP | Verifiable in polynomial time | SAT, TSP, clique |
| NP-complete | NP + NP-hard | 3-SAT, vertex cover |
| NP-hard | At least as hard as any NP problem | Optimization TSP |

The P vs. NP question remains open. If \( P = NP \), every problem with an efficiently verifiable solution can be solved efficiently. If \( P \neq NP \), there are intrinsically hard combinatorial problems.

---

## Exercises

### Review Questions

1. Explain the difference between NP-complete and NP-hard.
2. What is the significance of the Cook-Levin theorem?
3. List three properties that polynomial-time reductions satisfy.

### Application Problems

4. Reduce VERTEX COVER to SET COVER. (Hint: each edge is an element to cover.)
5. Prove that SUBSET SUM is in NP by describing a certificate and verifier.
6. Show that INDEPENDENT SET is NP-complete by reducing from CLIQUE.
7. Prove that the DOMINATING SET problem is NP-complete by reducing from VERTEX COVER.

### Challenge Problem

8. Prove that the **HITTING SET** problem is NP-complete: given a collection of subsets of a universe and an integer \( k \), does there exist a set of size \( k \) that intersects each subset? Reduce from VERTEX COVER.
