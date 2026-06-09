# Chapter 7: Relations

## Learning Objectives

After completing this chapter, you will be able to:

- Represent relations as sets of ordered pairs and as matrices or digraphs
- Determine whether a relation is reflexive, symmetric, antisymmetric, or transitive
- Form equivalence relations and identify equivalence classes
- Construct partial orders and draw Hasse diagrams
- Find closures of relations

## Theory

### 7.1 Definition

A **binary relation** $R$ from set $A$ to set $B$ is a subset of $A \times B$. When $A = B$, we say $R$ is a relation on $A$. We write $a R b$ to mean $(a, b) \in R$.

### 7.2 Representations

**Matrix representation.** If $A = \{a_1, \ldots, a_m\}$ and $B = \{b_1, \ldots, b_n\}$, the relation $R$ can be represented by an $m \times n$ zero-one matrix $M_R$ with $M_R[i, j] = 1$ iff $(a_i, b_j) \in R$.

**Digraph representation.** For a relation on $A$, draw a directed graph with vertices $A$ and an edge $a \rightarrow b$ iff $(a, b) \in R$.

### 7.3 Properties of Relations

Let $R$ be a relation on a set $A$.
- **Reflexive:** $a R a$ for all $a \in A$.
- **Irreflexive:** $a \not R a$ for all $a \in A$.
- **Symmetric:** $a R b \implies b R a$ for all $a, b \in A$.
- **Antisymmetric:** $(a R b \land b R a) \implies a = b$.
- **Asymmetric:** $a R b \implies b \not R a$.
- **Transitive:** $(a R b \land b R c) \implies a R c$ for all $a, b, c \in A$.

### 7.4 Combining Relations

$R$ and $S$ can be combined via set operations ($R \cup S$, $R \cap S$, $R \setminus S$).

**Composition:** $S \circ R = \{(a, c) \mid \exists b \in A,\; (a, b) \in R \land (b, c) \in S\}$.

**Powers:** $R^n = R \circ R \circ \cdots \circ R$ ($n$ times). $R^0$ is the identity relation $\{(a, a) \mid a \in A\}$.

### 7.5 Closures

The **reflexive closure** of $R$ is $R \cup \{(a, a) \mid a \in A\} = R \cup \Delta$.

The **symmetric closure** is $R \cup R^{-1}$ where $R^{-1} = \{(b, a) \mid (a, b) \in R\}$.

The **transitive closure** is $\bigcup_{n=1}^{\infty} R^n$. Computed via **Warshall's algorithm** or by finding reachability in the digraph.

### 7.6 Equivalence Relations

**Definition.** A relation $R$ on $A$ is an **equivalence relation** if it is reflexive, symmetric, and transitive.

**Equivalence class** of $a$: $[a] = \{b \in A \mid a R b\}$.

**Theorem 7.1 (Partition).** The equivalence classes of an equivalence relation on $A$ form a partition of $A$ (disjoint, nonempty, covering all of $A$). Conversely, any partition of $A$ defines an equivalence relation.

### 7.7 Partial Orders

**Definition.** A relation $R$ on $A$ is a **partial order** if it is reflexive, antisymmetric, and transitive. Denoted $\preceq$ or $\leq$. The pair $(A, \preceq)$ is a **partially ordered set** (poset).

Elements $a$ and $b$ are **comparable** if $a \preceq b$ or $b \preceq a$. A poset where every pair is comparable is a **total order** (chain).

**Hasse diagrams** are digraphs of partial orders drawn with:
1. Transitive edges omitted.
2. Reflexive loops omitted.
3. Arrows oriented upward (edges are undirected, direction implied by vertical position).

**Special elements:**
- **Maximal:** no element is greater.
- **Minimal:** no element is smaller.
- **Greatest:** greater than or equal to all.
- **Least:** less than or equal to all.
- **Upper bound:** $u$ with $a \preceq u$ for all $a$ in a subset.
- **Least upper bound (supremum):** the smallest upper bound.
- **Greatest lower bound (infimum):** the largest lower bound.

A **lattice** is a poset where every pair of elements has a supremum and an infimum.

**Topological sorting:** A linear ordering of a poset consistent with the partial order (if $a \preceq b$, then $a$ comes before $b$).

### 7.8 n-ary Relations

An **n-ary relation** is a subset of $A_1 \times A_2 \times \cdots \times A_n$. Used in relational databases. Operations include projection ($\Pi$) and join ($\bowtie$).

## Examples

**Example 7.1** (Properties). Let $R = \{(1,1), (1,2), (2,2), (2,3), (3,3)\}$ on $A = \{1,2,3\}$.
- Reflexive? Yes: $(1,1), (2,2), (3,3) \in R$.
- Symmetric? No: $(1,2) \in R$ but $(2,1) \notin R$.
- Antisymmetric? Yes: no distinct $a,b$ satisfy both $(a,b)$ and $(b,a)$.
- Transitive? Yes. Check: $(1,2),(2,3) \implies (1,3)$ needed, but $(1,3) \notin R$. So NOT transitive.

**Example 7.2** (Equivalence relation). On $\mathbb{Z}$, define $a R b \iff a \equiv b \pmod{3}$.
- Reflexive: $a \equiv a \pmod{3}$.
- Symmetric: $a \equiv b \pmod{3} \implies b \equiv a \pmod{3}$.
- Transitive: $a \equiv b$ and $b \equiv c \pmod{3}$ implies $a \equiv c \pmod{3}$.
Classes: $[0] = \{\ldots, -3, 0, 3, 6, \ldots\}$, $[1] = \{\ldots, -2, 1, 4, \ldots\}$, $[2] = \{\ldots, -1, 2, 5, \ldots\}$.

**Example 7.3** (Partial order). The divisibility relation on $\{1, 2, 3, 6, 9, 18\}$: $a \preceq b \iff a \mid b$.
Hasse diagram: 1 at bottom, above it 2, 3; above those 6, 9; 18 at top. Edges: $1 \rightarrow 2$, $1 \rightarrow 3$, $2 \rightarrow 6$, $2 \rightarrow 18$, $3 \rightarrow 6$, $3 \rightarrow 9$, $6 \rightarrow 18$, $9 \rightarrow 18$ (transitive edges like $1 \rightarrow 6$ omitted).

**Example 7.4** (Transitive closure by Warshall's algorithm). Compute the transitive closure of $R = \{(1,2), (2,3), (3,1)\}$ on $\{1,2,3\}$.

*Solution.* Initial matrix $M_0 = \begin{pmatrix}0 & 1 & 0\\ 0 & 0 & 1\\ 1 & 0 & 0\end{pmatrix}$. Applying Warshall's yields $M_3 = \begin{pmatrix}1 & 1 & 1\\ 1 & 1 & 1\\ 1 & 1 & 1\end{pmatrix}$, so the transitive closure is $A \times A$ (all pairs).

**Example 7.5** (Topological sort). Topologically sort the poset $(\{a,b,c,d,e,f\}, \preceq)$ where $a \preceq c$, $a \preceq d$, $b \preceq d$, $c \preceq e$, $d \preceq e$, $d \preceq f$.

One valid ordering: $a, b, c, d, e, f$. (Check: every precedence relation is satisfied.)

## Summary

- Relations are sets of ordered pairs. They can be matrices or digraphs.
- Reflexive, symmetric, antisymmetric, transitive properties define relation types.
- Equivalence relations partition the set into equivalence classes.
- Partial orders are reflexive, antisymmetric, transitive; visualized via Hasse diagrams.
- Closures add minimum pairs to achieve a desired property.

## Exercises

### Review Questions

1. List all properties of the relation $\leq$ on $\mathbb{Z}$.
2. How many equivalence relations exist on a 3-element set?
3. What is the difference between antisymmetric and asymmetric?
4. Give an example of a relation that is both symmetric and antisymmetric.
5. What does a Hasse diagram omit?

### Application Problems

6. Determine whether $R = \{(1,1), (1,2), (2,1), (2,2), (3,3), (4,4)\}$ on $\{1,2,3,4\}$ is an equivalence relation. If so, give the classes.

7. Let $R$ be a relation on $\mathbb{Z}^+$ defined by $a R b$ iff $a$ and $b$ have the same number of prime factors (counting multiplicity). Prove $R$ is an equivalence relation and describe the classes.

8. Draw the Hasse diagram for the relation "divides" on $\{1,2,3,4,5,6,7,8,9,10\}$.

9. Prove: If $R$ is a partial order, then $R^{-1}$ is also a partial order.

10. Use Warshall's algorithm to find the transitive closure of $R = \{(1,3), (2,1), (3,2), (4,3)\}$ on $\{1,2,3,4\}$.

### Challenge Problem

11. A relation $R$ on $A$ is **circular** if $a R b \land b R c \implies c R a$. Prove: $R$ is reflexive and circular if and only if $R$ is an equivalence relation.
