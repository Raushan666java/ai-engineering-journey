# Chapter 9: Graph Theory

## Learning Objectives

After completing this chapter, you will be able to:

- Define graphs, digraphs, and their components (vertices, edges, degrees)
- Identify paths, cycles, connected components
- Determine Eulerian and Hamiltonian paths and circuits
- Apply planar graph properties (Euler's formula, Kuratowski's theorem)
- Solve graph coloring problems
- Model real-world problems using graphs

## Theory

![Graph Theory Overview](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/discrete-mathematics/09-graph-theory.png)

### 9.1 Definitions

An **undirected graph** $G = (V, E)$ consists of a set of **vertices** $V$ and a set of **edges** $E \subseteq \{\{u, v\} \mid u, v \in V, u \neq v\}$ (simple graph). A **directed graph** (digraph) has edges as ordered pairs $(u, v)$.

- **Loop:** an edge from a vertex to itself.
- **Parallel edges:** multiple edges between the same pair.
- **Simple graph:** no loops or parallel edges.
- **Multigraph:** allows parallel edges.
- **Pseudograph:** allows loops and parallel edges.

### 9.2 Degree

For an undirected graph, the **degree** of a vertex $v$, $\deg(v)$, is the number of edges incident to it. A vertex of degree 0 is **isolated**; degree 1 is a **pendant** (leaf).

**Theorem 9.1 (Handshaking Lemma).** $\sum_{v \in V} \deg(v) = 2|E|$.
Every graph has an even number of vertices of odd degree.

For directed graphs: **indegree** $\deg^-(v)$ and **outdegree** $\deg^+(v)$.

### 9.3 Special Graphs

- **Complete graph $K_n$:** every pair of vertices is adjacent. $|E(K_n)| = \binom{n}{2}$.
- **Cycle graph $C_n$:** $n$ vertices in a closed chain.
- **Wheel graph $W_n$:** $C_{n-1}$ plus a central vertex connected to all others.
- **Bipartite graph $K_{m,n}$:** vertices partitioned into two sets; edges only cross sets. $K_{m,n}$ is the complete bipartite graph.

**Theorem 9.2.** A graph is bipartite iff it contains no odd cycles.

### 9.4 Subgraphs and Isomorphism

A **subgraph** $H = (V', E')$ of $G = (V, E)$ has $V' \subseteq V$ and $E' \subseteq E$.

An **isomorphism** between $G$ and $H$ is a bijection $f: V_G \rightarrow V_H$ preserving adjacency: $(u, v) \in E_G \iff (f(u), f(v)) \in E_H$.

**Invariants** (properties preserved by isomorphism): number of vertices, edges, degree sequence, connectivity.

### 9.5 Paths, Cycles, Connectivity

A **path** is a sequence of distinct vertices with edges between consecutive vertices. The **path length** is the number of edges.

A **circuit** (cycle) is a closed path (starts and ends at same vertex, no repeated vertices otherwise).

A graph is **connected** if there is a path between any two vertices. A **connected component** is a maximal connected subgraph.

An **Eulerian circuit** traverses every edge exactly once and returns to start. An **Eulerian trail** traverses every edge exactly once (need not return).

**Theorem 9.3 (Euler).** A connected graph has an Eulerian circuit iff every vertex has even degree. It has an Eulerian trail but not a circuit iff exactly two vertices have odd degree.

A **Hamiltonian cycle** visits every vertex exactly once. A **Hamiltonian path** visits every vertex exactly once (not necessarily closed).

**Theorem 9.4 (Dirac).** If $G$ has $n \geq 3$ vertices and $\deg(v) \geq n/2$ for all $v$, then $G$ is Hamiltonian.

**Theorem 9.5 (Ore).** If $G$ has $n \geq 3$ and $\deg(u) + \deg(v) \geq n$ for all nonadjacent $u, v$, then $G$ is Hamiltonian.

### 9.6 Planar Graphs

A graph is **planar** if it can be drawn in the plane with no edge crossings. A planar drawing divides the plane into **faces**.

**Theorem 9.6 (Euler's Formula).** For a connected planar graph: $v - e + f = 2$, where $v = |V|$, $e = |E|$, $f = |F|$ (faces).

**Corollary.** If $G$ is planar, $v \geq 3$, then $e \leq 3v - 6$. For bipartite planar graphs: $e \leq 2v - 4$.

**Theorem 9.7 (Kuratowski).** A graph is non-planar iff it contains a subdivision of $K_5$ or $K_{3,3}$.

### 9.7 Graph Coloring

A **proper k-coloring** assigns one of $k$ colors to each vertex such that adjacent vertices have different colors. The **chromatic number** $\chi(G)$ is the minimum $k$.

**Theorem 9.8 (Four Color Theorem).** Every planar graph is 4-colorable.

**Theorem 9.9 (Greedy coloring).** $\chi(G) \leq \max \deg(v) + 1$.

## Examples

**Example 9.1** (Handshaking lemma). A graph has 7 vertices of degree 3 and 3 vertices of degree 5. How many edges?

*Solution.* Sum of degrees $= 7 \cdot 3 + 3 \cdot 5 = 21 + 15 = 36$. So $2|E| = 36 \implies |E| = 18$.

**Example 9.2** (Eulerian circuit). Determine if $K_4$ has an Eulerian circuit.

*Solution.* $K_4$ has 4 vertices, each of degree 3. Since 3 is odd, no Eulerian circuit exists. It has an Eulerian trail? Exactly 4 odd-degree vertices, so no Eulerian trail either.

**Example 9.3** (Planarity). Is $K_5$ planar?

*Solution.* $K_5$ has $v = 5$, $e = 10$. For a planar graph, $e \leq 3v - 6 = 9$. Since $10 > 9$, $K_5$ is non-planar. (Confirmed by Kuratowski's theorem.)

**Example 9.4** (Euler's formula). A connected planar graph has 8 vertices and 12 edges. How many faces?

*Solution.* $v - e + f = 2 \implies 8 - 12 + f = 2 \implies f = 6$.

**Example 9.5** (Graph coloring). Find $\chi(C_5)$ (cycle of length 5).

*Solution.* $C_5$ is an odd cycle, so $\chi(C_5) = 3$. (Even cycles are 2-colorable; odd cycles require 3.)

**Example 9.6** (Bipartite check). Is a graph with vertices $\{1,2,3,4\}$ and edges $\{12,23,34,41\}$ bipartite?

*Solution.* This is $C_4$, which has length 4 (even). So yes, it is bipartite. Coloring: $\{1,3\}$ red, $\{2,4\}$ blue.

## Summary

- Handshaking lemma: sum of degrees equals twice the number of edges.
- Eulerian circuits exist iff all vertices have even degree.
- Hamiltonian cycles visit every vertex exactly once (no simple characterization).
- Planar graphs satisfy Euler's formula $v - e + f = 2$.
- The four color theorem guarantees 4-colorability of planar graphs.
- Kuratowski's theorem characterizes planarity via forbidden subdivisions.

## Exercises

### Review Questions

1. Can a graph with all vertices of degree 2 have an Eulerian circuit? Explain.
2. What is $\chi(K_n)$?
3. State Kuratowski's theorem.
4. Is $K_{3,3}$ planar? How can you tell?
5. What does Dirac's theorem guarantee?

### Application Problems

6. Draw $K_{2,3}$. Determine if it has an Eulerian circuit. Determine $\chi(K_{2,3})$.

7. Prove: Every tree ($|V| = |E| + 1$) is bipartite.

8. A connected planar graph has 12 vertices, each of degree 5. How many faces does it have?

9. Show that $C_6$ and two disjoint triangles are not isomorphic, but have the same degree sequence.

10. Determine which of $K_4$, $K_5$, $K_{3,3}$, and $K_6$ are planar. Justify each.

### Challenge Problem

11. Prove that any graph with $n$ vertices and more than $\frac{n^2}{4}$ edges contains a triangle. (Hint: use TurÃ¡n's theorem or induction and the pigeonhole principle.)
