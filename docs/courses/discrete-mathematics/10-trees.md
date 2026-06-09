# Chapter 10: Trees

## Learning Objectives

After completing this chapter, you will be able to:

- Define trees and state their fundamental properties
- Identify spanning trees and construct minimum spanning trees
- Work with rooted trees and binary search trees
- Perform tree traversals (preorder, inorder, postorder)
- Find minimum spanning trees using Prim's and Kruskal's algorithms
- Model hierarchical data using trees

## Theory

### 10.1 Definitions

A **tree** is a connected acyclic undirected graph. A **forest** is an acyclic undirected graph (each component is a tree).

**Theorem 10.1 (Equivalent characterizations).** For a graph $T$ with $n$ vertices, the following are equivalent:
- $T$ is a tree.
- $T$ is connected and has $n-1$ edges.
- $T$ is acyclic and has $n-1$ edges.
- $T$ is connected, but removing any edge disconnects it.
- $T$ is acyclic, but adding any edge creates a unique cycle.
- There is a unique path between any two vertices.

**Theorem 10.2.** Every tree with $n \geq 2$ has at least two leaves (degree-1 vertices).

### 10.2 Rooted Trees

A **rooted tree** designates one vertex as the **root**. Relationships:
- **Parent/child:** adjacent vertices farther from/closer to root.
- **Sibling:** same parent.
- **Ancestor/descendant:** on the unique path to/from the root.
- **Leaf:** no children. Internal vertex: has children.
- **Subtree:** a vertex and all its descendants.

The **height** is the maximum depth (distance from root). The **level** of a vertex is its distance from the root.

An $m$-**ary tree** has at most $m$ children per vertex (binary if $m = 2$). It is **full** if every internal vertex has exactly $m$ children. It is **complete** if all levels are fully filled except possibly the last, and the last level is left-filled.

**Theorem 10.3.** A full $m$-ary tree with $i$ internal vertices has $n = mi + 1$ vertices total and $l = (m-1)i + 1$ leaves.

### 10.3 Tree Traversals

**Preorder:** Visit root, then left subtree, then right subtree.
**Inorder:** Visit left subtree, root, right subtree.
**Postorder:** Visit left subtree, right subtree, root.

### 10.4 Binary Search Trees

A **binary search tree** is a binary tree where for each node:
- Left subtree values < node value < right subtree values.

Operations: search, insert, delete — all $O(h)$ where $h$ is the height. For a balanced BST, $h = O(\log n)$.

### 10.5 Spanning Trees

A **spanning tree** of a connected graph $G$ is a subgraph that is a tree and contains all vertices of $G$.

**Theorem 10.4.** Every connected graph has at least one spanning tree.

A **minimum spanning tree** (MST) minimizes the total edge weight among all spanning trees of a weighted graph.

**Prim's algorithm:** Growing tree — repeatedly add the minimum-weight edge connecting a visited vertex to an unvisited vertex. $O(m \log n)$ with binary heap.

**Kruskal's algorithm:** Growing forest — repeatedly add the minimum-weight edge that does not create a cycle (use union-find). $O(m \log m)$.

**Theorem 10.5 (Cut property).** For any cut, the minimum-weight edge crossing the cut belongs to every MST.

**Theorem 10.6 (Cycle property).** For any cycle, the maximum-weight edge in that cycle belongs to no MST.

### 10.6 Huffman Coding

**Huffman coding** constructs an optimal prefix-free binary code for a set of symbols with given frequencies. Algorithm: repeatedly merge the two lowest-frequency nodes, building a binary tree. The code for a symbol is the path from root to that symbol (left = 0, right = 1).

### 10.7 Decision Trees

A **decision tree** models a sequence of decisions, each branching on a condition. The depth of the tree is the worst-case number of decisions. Decision trees can be used to prove lower bounds on comparison-based sorting ($\Omega(n \log n)$ comparisons required).

## Examples

**Example 10.1** (Tree verification). A graph with 8 vertices and 7 edges that is acyclic — is it a tree? Yes, by Theorem 10.1 (acyclic + $n-1$ edges = tree). Also verify connectivity.

**Example 10.2** (Full binary tree). A full binary tree has 6 internal vertices. How many leaves? $l = (2-1)\cdot 6 + 1 = 7$ leaves. Total vertices $= 6 + 7 = 13 = 2\cdot 6 + 1$.

**Example 10.3** (Tree traversals). For the tree:
```
     A
    / \
   B   C
  / \   \
 D   E   F
```
- Preorder: A, B, D, E, C, F
- Inorder: D, B, E, A, C, F
- Postorder: D, E, B, F, C, A

**Example 10.4** (Prim's algorithm). Find MST for graph with vertices $\{a,b,c,d\}$ and edges: $ab:4, ac:2, bd:3, bc:1, cd:5$.

*Solution.* Start at $a$. Add $ac$ (2). From $\{a,c\}$, cheapest edge to $\{b,d\}$ is $bc$ (1). From $\{a,b,c\}$, cheapest to $\{d\}$ is $bd$ (3). MST: $\{ac, bc, bd\}$, total weight = 6.

**Example 10.5** (Kruskal's algorithm). Same graph. Sort edges: $bc:1, ac:2, bd:3, ab:4, cd:5$. Add $bc$ (no cycle). Add $ac$ (no cycle). Add $bd$ (no cycle). Done — same MST with total weight 6.

**Example 10.6** (Huffman coding). Symbols: A(0.4), B(0.3), C(0.2), D(0.1).

*Solution.* Merge D(0.1) and C(0.2) → node (0.3). Merge (0.3) and B(0.3) → node (0.6). Merge (0.6) and A(0.4) → root (1.0). Codes: A=1, B=01, C=001, D=000. Average bits per symbol: $1\cdot 0.4 + 2\cdot 0.3 + 3\cdot 0.2 + 3\cdot 0.1 = 1.9$.

## Summary

- Trees are the minimal connected graphs ($n$ vertices, $n-1$ edges, unique paths).
- Rooted trees organize hierarchical data; traversals visit systematically.
- Prim's and Kruskal's algorithms find MSTs greedily.
- Huffman coding gives optimal prefix codes.
- Decision trees model comparison-based algorithms and give lower bounds.

## Exercises

### Review Questions

1. How many edges does a tree with 100 vertices have?
2. What is the height of a complete binary tree with 15 vertices?
3. State the cut property of MSTs.
4. Which traversal visits the root last?
5. What is an optimal prefix code?

### Application Problems

6. Draw all non-isomorphic trees with 5 vertices.

7. A full 5-ary tree has 41 vertices. How many leaves does it have?

8. Compute the MST for a graph with 5 vertices and edges: $ab:5, ac:3, ad:2, bc:4, be:6, cd:1, ce:7, de:8$. Use both Prim's and Kruskal's.

9. Construct a Huffman code for symbols with frequencies $\{0.35, 0.25, 0.20, 0.12, 0.08\}$. Compute the average code length.

10. Prove that a tree has at most one perfect matching.

### Challenge Problem

11. Prove **Cayley's formula**: the number of distinct labeled trees on $n$ vertices is $n^{n-2}$. (Hint: use Prüfer sequences — show a bijection between trees of $n$ vertices and sequences of length $n-2$ over $\{1, \ldots, n\}$.)
