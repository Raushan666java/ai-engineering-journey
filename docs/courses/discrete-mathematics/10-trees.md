# Chapter 10: Trees

> **Previous:** [Chapter 9: Graph Theory](./09-graph-theory.md) | **Next:** [Chapter 11: Algebra](./11-algebra.md)

## Learning Objectives

After completing this chapter, you will be able to:

- Define trees and identify their fundamental properties
- Apply tree theorems (edge count, leaf count, spanning tree existence)
- Construct and traverse binary search trees
- Distinguish between rooted, unrooted, full, and complete binary trees
- Apply prefix (Huffman) codes for data compression
- Model decision problems using decision trees
- Understand minimum spanning trees and their algorithms

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| Tree Definition | Connected acyclic graph | $n$ vertices, $n-1$ edges; exactly one path between any two vertices |
| Rooted Trees | A designated root; parent-child relationship | Enables hierarchy; every node (except root) has exactly one parent |
| Binary Trees | Each node has at most 2 children | Foundational data structure: BST, heap, expression trees |
| Tree Traversals | Preorder, inorder, postorder, level-order | Inorder on BST yields sorted sequence |
| Spanning Trees | Subgraph connecting all vertices | Every connected graph has at least one spanning tree |
| Minimum Spanning Tree | Minimum total weight connecting all vertices | Kruskal (union-find) and Prim (priority queue) |
| Huffman Coding | Optimal prefix code from character frequencies | Lossless compression achieved by replacing fixed-length codes with variable-length ones |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Tree Definition] --> B[Properties]
    B --> C[n vertices, n-1 edges]
    B --> D[Unique path property]
    B --> E[Leaf count ≥ 2]
    A --> F[Rooted Trees]
    F --> G[Binary Trees]
    G --> H[BST]
    G --> I[Traversals]
    A --> J[Spanning Trees]
    J --> K[MST: Kruskal]
    J --> L[MST: Prim]
    A --> M[Applications]
    M --> N[Huffman Coding]
    M --> O[Decision Trees]
    M --> P[Game Trees]
```

## Theory

### 10.1 Definition

A **tree** is a connected acyclic undirected graph. A **forest** is an acyclic graph (each component is a tree).

**Theorem 10.1 (Basic tree properties).** For a tree $T = (V, E)$ with $n$ vertices:
1. $|E| = n - 1$.
2. There is exactly one unique path between any two vertices.
3. Adding any edge creates exactly one cycle.
4. Removing any edge disconnects the graph.
5. A tree has at least two leaves (pendant vertices) for $n \geq 2$.

**Theorem 10.2 (Leaf count).** A tree with at least 2 vertices has at least 2 vertices of degree 1.

> **One-Sentence Takeaway:** A tree is the minimal connected graph — $n-1$ edges, unique paths, at least two leaves, and adding any edge creates a cycle.

### 10.2 Rooted Trees

A **rooted tree** designates one vertex as the **root**, establishing a hierarchy:
- **Parent:** the node directly above in the tree.
- **Child:** a node directly below.
- **Siblings:** nodes sharing the same parent.
- **Leaf:** a node with no children.
- **Internal node:** a node with at least one child.
- **Depth of node:** length of the path from root to that node.
- **Height of tree:** maximum depth of any node.
- **Subtree:** a node and all its descendants.
- **Level:** all nodes at the same depth.

> **One-Sentence Takeaway:** Rooting a tree creates parent-child relationships; depth, height, level, and subtree all derive from this orientation.

### 10.3 Binary Trees

A **binary tree** is a rooted tree where each node has at most two children (left and right).

**Types:**
- **Full binary tree:** every node has 0 or 2 children.
- **Complete binary tree:** all levels are filled except possibly the last, which is filled left-to-right.
- **Perfect binary tree:** all internal nodes have 2 children and all leaves are at the same depth.

**Theorem 10.3 (Full binary tree leaf count).** A full binary tree with $i$ internal nodes has $i + 1$ leaves.

**Theorem 10.4 (Height bound).** A binary tree with $n$ nodes has height at least $\lfloor \log_2 n \rfloor$ and at most $n-1$ (a chain).

```typescript
class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class BinarySearchTree<T> {
  root: TreeNode<T> | null = null;

  insert(value: T): void {
    const newNode = new TreeNode(value);
    if (!this.root) { this.root = newNode; return; }
    let curr = this.root;
    while (true) {
      if (value < curr.value) {
        if (!curr.left) { curr.left = newNode; return; }
        curr = curr.left;
      } else {
        if (!curr.right) { curr.right = newNode; return; }
        curr = curr.right;
      }
    }
  }

  search(value: T): boolean {
    let curr = this.root;
    while (curr) {
      if (value === curr.value) return true;
      curr = value < curr.value ? curr.left : curr.right;
    }
    return false;
  }
}
```

> **One-Sentence Takeaway:** Binary trees limit branching to at most two children per node; BSTs enable $O(\log n)$ search, insert, and delete operations when balanced.

### 10.4 Tree Traversals

**Preorder (NLR):** Visit root, traverse left subtree, traverse right subtree.

**Inorder (LNR):** Traverse left subtree, visit root, traverse right subtree. (Gives sorted order in BST.)

**Postorder (LRN):** Traverse left subtree, traverse right subtree, visit root.

**Level-order (BFS):** Visit all nodes at depth $d$ before depth $d+1$.

```typescript
function inorder<T>(node: TreeNode<T> | null, result: T[] = []): T[] {
  if (!node) return result;
  inorder(node.left, result);
  result.push(node.value);
  inorder(node.right, result);
  return result;
}

function preorder<T>(node: TreeNode<T> | null, result: T[] = []): T[] {
  if (!node) return result;
  result.push(node.value);
  preorder(node.left, result);
  preorder(node.right, result);
  return result;
}

function postorder<T>(node: TreeNode<T> | null, result: T[] = []): T[] {
  if (!node) return result;
  postorder(node.left, result);
  postorder(node.right, result);
  result.push(node.value);
  return result;
}

function levelOrder<T>(root: TreeNode<T> | null): T[] {
  if (!root) return [];
  const result: T[] = [];
  const queue: TreeNode<T>[] = [root];
  while (queue.length > 0) {
    const node = queue.shift()!;
    result.push(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return result;
}
```

> **One-Sentence Takeaway:** Inorder traversal of a BST yields sorted output; preorder creates a copy; postorder is useful for deletion and expression evaluation.

### 10.5 Spanning Trees

A **spanning tree** of a connected graph $G$ is a subgraph that is a tree and includes all vertices of $G$.

**Theorem 10.5 (Spanning tree existence).** Every connected graph has at least one spanning tree.

**Minimum spanning tree (MST):** In a weighted graph, the spanning tree with minimum total weight.

**Kruskal's algorithm:** Sort edges by weight; repeatedly add the smallest edge that does not create a cycle (use union-find for cycle detection). $O(|E| \log |V|)$.

**Prim's algorithm:** Start from any vertex; repeatedly add the cheapest edge connecting the current tree to a new vertex. $O(|E| \log |V|)$ with a binary heap.

> **One-Sentence Takeaway:** Every connected graph has a spanning tree; Kruskal and Prim greedily find the minimum-weight spanning tree.

### 10.6 Decision Trees

A **decision tree** models a decision process as a binary tree where internal nodes test a condition and branches represent outcomes. Used in:
- Classification and regression (machine learning)
- Game theory (game trees for minimax)
- Sorting algorithms (comparison-based sorting has depth $\Omega(n \log n)$)
- Diagnostic systems (medical diagnosis, fault detection)

**Lower bound for sorting:** Any comparison-based sorting algorithm requires at least $\lceil \log_2(n!) \rceil$ comparisons in the worst case, which is $\Omega(n \log n)$.

> **One-Sentence Takeaway:** Decision trees model sequential decisions; the sorting lower bound ($\Omega(n \log n)$) follows from the height of a binary decision tree with $n!$ leaves.

### 10.7 Huffman Coding

Huffman coding is a greedy algorithm for constructing an optimal prefix code.

**Prefix code:** No codeword is a prefix of any other codeword.

**Algorithm:**
1. Build a min-heap of leaf nodes, one per character, weighted by frequency.
2. Repeatedly extract the two smallest-weight nodes, combine as children of a new node with their sum weight, and insert the new node.
3. The resulting binary tree's left/right edges encode 0/1 bits.

**Optimality:** Huffman codes minimize $\sum f_c \cdot \ell_c$, the weighted path length.

```typescript
class HuffmanNode {
  char: string | null;
  freq: number;
  left: HuffmanNode | null = null;
  right: HuffmanNode | null = null;

  constructor(char: string | null, freq: number) {
    this.char = char;
    this.freq = freq;
  }
}

function buildHuffmanTree(freqs: Map<string, number>): HuffmanNode {
  const heap: HuffmanNode[] = [];
  for (const [char, freq] of freqs) {
    heap.push(new HuffmanNode(char, freq));
  }
  heap.sort((a, b) => a.freq - b.freq); // use min-heap for efficiency

  while (heap.length > 1) {
    const left = heap.shift()!;
    const right = heap.shift()!;
    const parent = new HuffmanNode(null, left.freq + right.freq);
    parent.left = left;
    parent.right = right;
    heap.push(parent);
    heap.sort((a, b) => a.freq - b.freq);
  }
  return heap[0];
}
```

> **One-Sentence Takeaway:** Huffman coding creates an optimal prefix code by repeatedly combining the two least-frequent characters — the tree minimizes total weighted codeword length.

## Cross-Application Matrix

| Concept | Computer Science | Data Science | Networks | Operations |
|---------|-----------------|--------------|----------|------------|
| Binary Search Tree | Efficient search/sort | Database indexing | Routing tables | Symbol tables |
| Minimum Spanning Tree | Network design | Clustering (single-link) | Network wiring | Supply chain routing |
| Huffman Coding | Data compression | Feature encoding | Transmission optimization | — |
| Decision Trees | Classification | Random forests | — | Decision analysis |
| Tree Traversals | Expression evaluation | AST processing | — | Organizational chart analysis |
| Spanning Tree | Network topology | — | STP protocol | Utility network design |

## Chapter Quiz

1. How many edges does a tree with 12 vertices have?
   - A) 10
   - B) 11
   - C) 12
   - D) 13
   <details><summary>Answer</summary>**B)** $n - 1 = 11$ edges.</details>

2. Inorder traversal of a BST produces:
   - A) Sorted descending order
   - B) Sorted ascending order
   - C) Reverse level order
   - D) Random order
   <details><summary>Answer</summary>**B)** Inorder traversal of a BST visits nodes in sorted ascending order.</details>

3. Which of the following is NOT a property of a tree with $n \geq 2$?
   - A) Connected
   - B) Exactly $n$ edges
   - C) Acyclic
   - D) At least 2 leaves
   <details><summary>Answer</summary>**B)** A tree has exactly $n-1$ edges, not $n$.</details>

4. A full binary tree with 7 internal nodes has how many leaves?
   - A) 6
   - B) 7
   - C) 8
   - D) 14
   <details><summary>Answer</summary>**C)** $i + 1 = 7 + 1 = 8$ leaves.</details>

5. Kruskal's algorithm finds which type of tree?
   - A) Binary search tree
   - B) AVL tree
   - C) Minimum spanning tree
   - D) Decision tree
   <details><summary>Answer</summary>**C)** Kruskal's algorithm finds the minimum spanning tree.</details>

## Examples

**Example 10.1** (Tree verification). Graph with $V = \{1,2,3,4\}$ and edges $\{\{1,2\},\{2,3\},\{3,4\},\{4,1\}\}$ has $n=4$, $e=4$, so it cannot be a tree ($e > n-1$). Indeed, it is $C_4$ (a cycle). Remove any edge to get a tree ($n=4$, $e=3$).

**Example 10.2** (Rooted tree — file system). A UNIX filesystem directory is a rooted tree. `/` is the root. `/usr/bin/python3` illustrates depth. The depth of `python3` is 3.

**Example 10.3** (BST insertion). Insert $[5, 3, 7, 2, 4, 6, 8]$ into an empty BST:
```
        5
      /   \
     3     7
    / \   / \
   2   4 6   8
```
Inorder: $2, 3, 4, 5, 6, 7, 8$.

**Example 10.4** (Tree traversals). On the BST from Example 10.3:
- Preorder: $5, 3, 2, 4, 7, 6, 8$
- Inorder: $2, 3, 4, 5, 6, 7, 8$
- Postorder: $2, 4, 3, 6, 8, 7, 5$
- Level-order: $5, 3, 7, 2, 4, 6, 8$

**Example 10.5** (Kruskal's algorithm). Graph with edges: $(1,2,5)$, $(2,3,3)$, $(1,3,1)$, $(3,4,4)$, $(2,4,6)$. Sorted: $(1,3,1)$, $(2,3,3)$, $(3,4,4)$, $(1,2,5)$, $(2,4,6)$. Greedily pick: $(1,3)$, $(2,3)$, $(3,4)$ → MST with weight $1+3+4=8$.

**Example 10.6** (Huffman code). Frequencies: $A:45$, $B:13$, $C:12$, $D:16$, $E:9$, $F:5$.

Building the tree:
1. Combine $F(5)$ and $E(9)$ → $14$.
2. Combine $C(12)$ and $B(13)$ → $25$.
3. Combine $14$ and $D(16)$ → $30$.
4. Combine $A(45)$ and $25$ → $70$.
5. Combine $30$ and $70$ → $100$.

Codes: $A:0$, $B:101$, $C:100$, $D:111$, $E:1101$, $F:1100$. Total bits: $45 \cdot 1 + 13 \cdot 3 + 12 \cdot 3 + 16 \cdot 3 + 9 \cdot 4 + 5 \cdot 4 = 224$ bits.

**Example 10.7** (Decision tree — sorting 3 elements). The decision tree for sorting $a,b,c$ has $3! = 6$ leaves. Depth $\geq \lceil \log_2 6 \rceil = 3$ comparisons.

**Example 10.8** (Spanning tree count). $K_3$ (triangle) has 3 spanning trees (remove any one edge). Cayley's formula: $K_n$ has $n^{n-2}$ spanning trees.

**Example 10.9** (Prim's algorithm). Starting from vertex 1 in the same graph as Example 10.5: add $(1,3,1)$, then $(3,2,3)$, then $(3,4,4)$ → same MST.

**Example 10.10** (Perfect binary tree). A perfect binary tree of height $h = 3$ has $2^{h+1} - 1 = 15$ nodes and $2^h = 8$ leaves.

## Summary

- A tree is a connected acyclic graph with $n$ vertices and $n-1$ edges.
- Rooting a tree establishes parent-child relationships.
- Binary trees have at most two children per node; traversals include preorder, inorder, postorder, and level-order.
- Spanning trees connect all vertices; minimum spanning trees minimize total weight (Kruskal, Prim).
- Huffman coding produces optimal prefix codes via a greedy tree construction.
- Decision trees model sequential decisions and establish lower bounds.

## Practical Takeaways

1. **$n-1$ edges is the quick check** — if $|E| \neq |V| - 1$, it is not a tree.
2. **BST inorder = sorted** — use inorder traversal to verify search tree correctness.
3. **MST is greedy** — Kruskal (sort edges) and Prim (grow from a vertex) both work greedily.
4. **Huffman requires frequency data** — the compression ratio depends on the frequency distribution.
5. **Tree height matters** — height determines traversal and search efficiency.

## Exercises

### Review Questions

1. How many edges does a tree with 15 vertices have?
2. What is the difference between a full and complete binary tree?
3. List the three standard tree traversals and their visit order.
4. State Cayley's formula for the number of spanning trees in $K_n$.
5. What property defines a prefix code?

### Application Problems

6. Construct a BST from the input sequence $[10, 5, 15, 3, 7, 12, 18]$. Show inorder traversal.

7. Apply Kruskal's algorithm to find the MST of a graph with 4 vertices and edges: $(1,2,2), (2,3,1), (3,4,5), (1,4,4), (2,4,3)$.

8. Build a Huffman tree for frequencies $\{A:10, B:15, C:30, D:25, E:20\}$ and compute total bits.

9. Prove that a tree with $n$ vertices has exactly $n-1$ edges.

10. Write a TypeScript function to compute the height of a binary tree.

11. Show the decision tree for sorting 4 elements. How many leaves does it have? What is the minimum height?

12. Draw a perfect binary tree of height 2. How many nodes and leaves does it have?

### Challenge Problem

13. Prove: In any binary tree, the number of leaves $L$ equals $i + 1$, where $i$ is the number of internal nodes with 2 children.

14. Prove Cayley's formula: $K_n$ has $n^{n-2}$ spanning trees (hint: use Prüfer sequences).

15. A **binary search tree** is **balanced** if $|\text{height(left)} - \text{height(right)}| \leq 1$ for every node. Prove that a balanced BST with $n$ nodes has height $\leq \lfloor 1.44 \log_2 (n+2) \rfloor$.
