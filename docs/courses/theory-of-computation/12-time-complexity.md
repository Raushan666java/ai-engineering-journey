# Chapter 12: Time Complexity and NP-Completeness

## Learning Objectives

By the end of this chapter, you should be able to: define time complexity classes $P$ and $NP$ formally; analyze the asymptotic running time of algorithms using Big-O notation; perform polynomial-time reductions between problems; state and outline the proof of the Cook-Levin theorem; prove NP-completeness of classic problems (SAT, 3-SAT, CLIQUE, VERTEX-COVER, HAMILTONIAN-PATH, SUBSET-SUM); distinguish between $P$, $NP$, and $NP$-complete.

## Theory

### Time Complexity

Let $M$ be a deterministic TM that halts on all inputs. The **running time** of $M$ is the function $f : \mathbb{N} \to \mathbb{N}$ where $f(n)$ is the maximum number of steps $M$ takes on any input of length $n$.

**Definition**: $TIME(f(n)) = \{ L \mid L \text{ is decided by an } O(f(n)) \text{ time TM} \}$.

**Big-O Notation**: $f(n) = O(g(n))$ if there exist constants $c, n_0 > 0$ such that $f(n) \leq c \cdot g(n)$ for all $n \geq n_0$. This suppresses constant factors and lower-order terms, allowing machine-independent analysis.

### The Class P

$$P = \bigcup_{k \geq 0} TIME(n^k)$$

$P$ is the class of languages decidable in polynomial time on a deterministic TM. Problems in $P$ are considered **tractable** (feasibly solvable).

**Examples of problems in $P$**:
- Shortest paths in graphs (Dijkstra's algorithm: $O(m \log n)$)
- Minimum spanning tree (Prim's or Kruskal's: $O(m \log n)$)
- Context-free grammar membership (CYK: $O(n^3)$)
- Linear programming (Khachiyan's ellipsoid: $O(n^4 L)$)
- Matching in bipartite graphs
- Primality testing (AKS: $O(n^6)$)

The **polynomial-time Church-Turing thesis** refines the classical thesis: the class $P$ is robust across all "reasonable" deterministic models of computation (single/multi-tape TMs, RAM machines) that differ by at most a polynomial factor.

### The Class NP

$NP$ is the class of languages that can be **verified** in polynomial time by a deterministic TM, given a certificate (witness) of polynomial length.

**Definition (Verifier-based)**: $L \in NP$ if there exists a polynomial-time TM $V$ (the verifier) and a constant $k$ such that:

$$x \in L \iff \exists y \in \Sigma^* \text{ with } |y| \leq |x|^k \text{ and } V(x, y) \text{ accepts}$$

**Definition (Nondeterministic)**: $L \in NP$ if there exists a nondeterministic TM $N$ running in polynomial time that accepts $L$. The two definitions are equivalent: nondeterministic branches represent guesses of the certificate.

**Examples of problems in $NP$**:
- SAT: given a Boolean formula, is there a satisfying assignment?
- CLIQUE: given a graph $G$ and $k$, does $G$ contain a $k$-clique?
- VERTEX-COVER: given a graph $G$ and $k$, is there a vertex cover of size $k$?
- SUBSET-SUM: given a set of integers and a target, is there a subset summing to the target?
- HAMILTONIAN-CYCLE: does a graph contain a Hamiltonian cycle?

### $P$ vs $NP$

The central open question: Is $P = NP$? That is, can every problem whose solution can be verified quickly also be solved quickly? It is widely believed that $P \neq NP$, but no proof exists.

Note: $P \subseteq NP$ trivially (if we can solve it, we can verify it). The question is whether the containment is strict.

### Polynomial-Time Reductions

$A$ is **polynomial-time reducible** to $B$, written $A \leq_p B$, if there exists a function $f$ computable in polynomial time such that:

$$w \in A \iff f(w) \in B$$

Properties:
- If $B \in P$ and $A \leq_p B$, then $A \in P$.
- If $B \in NP$ and $A \leq_p B$, then $A \in NP$.
- $\leq_p$ is transitive.

### NP-Completeness

**Definition**: $L$ is **NP-complete** if:
1. $L \in NP$
2. For every $A \in NP$, $A \leq_p L$

If any NP-complete problem is in $P$, then $P = NP$.

### The Cook-Levin Theorem

**Theorem 12.1 (Cook-Levin)**: SAT is NP-complete.

**Proof sketch**: Let $L \in NP$, so there is a nondeterministic TM $N$ running in $n^k$ time that recognizes $L$. Given an input $w$ of length $n$, the computation of $N$ on $w$ can be described by a tableau of size $n^k \times n^k$ (rows = configurations, columns = tape cells).

Construct a Boolean formula $\phi$ that is satisfiable iff there exists an accepting computation of $N$ on $w$. The formula has variables for each cell $(i, j)$ of the tableau. It consists of conjunctions of clauses:

1. **Cell constraints**: Each cell contains exactly one symbol.
2. **Start configuration**: The first row represents $q_0 w$.
3. **Acceptance**: The last row contains $q_{\text{accept}}$.
4. **Transition constraints**: Each row follows from the previous by a legal nondeterministic TM move.

The transition constraint is the core: it says that each $2 \times 3$ window of the tableau is locally consistent with $\delta$ of $N$. This is a local condition, expressible as a conjunction of small clauses.

The formula $\phi$ is polynomial in $n^k$, so the reduction runs in polynomial time. $\square$

### Proving NP-Completeness

To prove $B$ is NP-complete:
1. Show $B \in NP$.
2. Choose a known NP-complete problem $A$ and show $A \leq_p B$.

Common known NP-complete problems for reductions:
- 3-SAT (each clause has exactly 3 literals)
- CLIQUE (NP-complete via SAT reduction)
- VERTEX-COVER (NP-complete via CLIQUE reduction)
- HAMILTONIAN-PATH (NP-complete via 3SAT reduction)
- SUBSET-SUM (NP-complete via 3SAT reduction)
- GRAPH-3-COLORABILITY

## Examples

### Example 1: SAT to 3-SAT

Convert $(x_1 \lor x_2) \land (\overline{x_2} \lor x_3 \lor x_4 \lor x_5)$ to 3-CNF.

For the first clause (2 literals): $(x_1 \lor x_2 \lor y_1) \land (x_1 \lor x_2 \lor \overline{y_1})$.
For the second clause (4 literals): $(\overline{x_2} \lor x_3 \lor y_2) \land (\overline{y_2} \lor x_4 \lor x_5)$.

The conversion uses auxiliary variables to split long clauses while preserving satisfiability.

### Example 2: CLIQUE from 3-SAT

Reduce $\phi = (x_1 \lor \overline{x_2} \lor x_3) \land (\overline{x_1} \lor x_2 \lor x_3)$ to CLIQUE.

Create a graph with one vertex per literal occurrence. Connect vertices if they are in different clauses and are not contradictory ($x_i$ and $\overline{x_i}$).

For $\phi$, we have 6 vertices: $C_1: \{x_1, \overline{x_2}, x_3\}$, $C_2: \{\overline{x_1}, x_2, x_3\}$.

Edges exist between non-contradictory vertices in different clauses:
- $x_1$ connects to $x_2$, $x_3$ (not to $\overline{x_1}$)
- $\overline{x_2}$ connects to $\overline{x_1}$, $x_2$? No — $\overline{x_2}$ does not connect to $x_2$ (contradictory). Connects to $\overline{x_1}$, $x_3$.
- etc.

A 2-clique in this graph corresponds to a satisfying assignment (one vertex from each clause, no contradiction). $\phi$ is satisfiable iff there is a $k$-clique where $k = \#\text{clauses} = 2$.

### Example 3: Subset Sum

Given numbers $\{3, 5, 7, 9, 11\}$, target $T = 14$.

Is there a subset summing to 14? $3 + 11 = 14$, so yes. SUBSET-SUM is NP-complete, so in general no polynomial algorithm is known.

## Summary

- $P$ contains problems solvable in polynomial time.
- $NP$ contains problems verifiable in polynomial time.
- $P \stackrel{?}{=} NP$ is the central open question in computer science.
- NP-complete problems are the hardest problems in NP; if any one is in $P$, then $P = NP$.
- The Cook-Levin theorem established SAT as the first NP-complete problem.
- Thousands of problems across computer science, operations research, and engineering are NP-complete.
- Polynomial-time reductions preserve membership in $P$ and $NP$.

## Exercises

### Review Questions

1. Why is polynomial time considered efficient?
2. Explain the two equivalent definitions of NP.
3. What does it mean for a problem to be NP-complete? Why is this concept important?
4. Why does the Cook-Levin theorem use a tableau to encode TM computations?

### Application Problems

5. Prove that VERTEX-COVER is NP-complete by reduction from CLIQUE.
6. Prove that HAMILTONIAN-PATH is NP-complete by reduction from 3-SAT (outline the construction).
7. Show that SUBSET-SUM is NP-complete by reduction from 3-SAT.
8. Prove that if $P = NP$, then every NP-complete problem is in $P$.

### Challenge Problem

9. Show that the **traveling salesman problem** (TSP) — given $n$ cities with pairwise distances and a budget $k$, is there a tour visiting all cities with total distance $\leq k$? — is NP-complete by reduction from HAMILTONIAN-CYCLE.
