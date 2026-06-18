# Chapter 12: Minimum Spanning Trees

> **Prerequisites:** [Chapter 11: Graph Shortest Paths](./11-graph-shortest.md) â€” Graph algorithms, priority queues, relaxation | **Next:** [Chapter 13: Network Flow](./13-graph-flow.md) â€” From tree structures to flow networks

## Learning Objectives

By the end of this chapter, students will be able to:

1. Implement Kruskal's algorithm with union-find and Prim's algorithm with a priority queue.
2. Prove the cut property and cycle property and use them to justify MST algorithms.
3. Analyze the complexity of Boruvka's algorithm and understand its parallel nature.
4. Apply MST algorithms to clustering, network design, and approximation problems.

---

### Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| MST Definition | Tree + all vertices + min total weight | Spanning tree property: n-1 edges, connected, acyclic |
| Cut Property | Lightest crossing edge is in some MST | Foundation for Prim's and Boruvka's algorithms |
| Cycle Property | Heaviest edge in any cycle is NOT in any MST | Foundation for Kruskal's reverse-delete variant |
| Kruskal's Algorithm | Sort edges, pick if no cycle | O(E log V) with union-find DSU |
| Prim's Algorithm | Grow tree from a seed vertex | O(E log V) with priority queue; resembles Dijkstra |
| Boruvka's Algorithm | Add cheapest edge from each component | O(E log V); parallelizable |

### Chapter Roadmap

```mermaid
flowchart LR
    A[MST] --> B[Kruskal]
    A --> C[Prim]
    A --> D[Boruvka]
    B --> E[Sort edges + Union-Find]
    C --> F[Priority Queue + Visited]
    D --> G[Component-cheapest edges]
    B --> H[Cycle Property]
    C --> I[Cut Property]
    D --> I
```

## Theory

![MST Diagram](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/algorithms/ch12-graph-mst.png)

### 12.1 Minimum Spanning Tree: Definition

**Definition 12.1.** Given a connected, undirected, weighted graph \( G = (V, E) \), a **spanning tree** is a subgraph \( T = (V, E') \) that is a tree (connected and acyclic). A **minimum spanning tree** (MST) is a spanning tree that minimizes the total weight \( \sum_{e \in E'} w(e) \).

> **Pro Tip:** MST is one of the few problems where a greedy algorithm is always optimal. The cut property and cycle property are the two correctness pillars â€” memorize them for proof problems.
>
> **Remember:** An MST always has exactly |V|-1 edges for a connected graph with |V| vertices.

**One-Sentence Takeaway:** A minimum spanning tree connects all vertices with minimum total edge weight, always using exactly n-1 edges for an n-vertex graph.

### 12.2 Fundamental Properties

**Theorem 12.1 (Cut Property).** Let \( S \subset V \) be a non-empty proper subset of vertices. Let \( e \) be the minimum-weight edge crossing the cut \( (S, V \setminus S) \). Then \( e \) belongs to some MST.

**Proof.** Let \( T \) be an MST that does not contain \( e \). Adding \( e \) to \( T \) creates a cycle. This cycle must contain some other edge \( e' \) crossing the cut. Since \( w(e) \le w(e') \), we can replace \( e' \) with \( e \) to obtain another spanning tree with total weight at most that of \( T \), which is also an MST.

**Theorem 12.2 (Cycle Property).** Let \( C \) be a cycle in \( G \). Let \( e \) be the maximum-weight edge on \( C \). Then \( e \) is not in any MST.

> **Pro Tip:** The cut property justifies adding the lightest crossing edge. The cycle property justifies removing the heaviest cycle edge. Together they prove Kruskal, Prim, and Boruvka correct.

**One-Sentence Takeaway:** The cut property (lightest crossing edge is in some MST) and cycle property (heaviest cycle edge is in no MST) are the dual correctness foundations for all MST algorithms.

### 12.3 Kruskal's Algorithm

**Strategy:** Repeatedly add the smallest-weight edge that does not form a cycle.

```
Kruskal(G):
    Sort edges by weight
    T = empty set
    for each edge (u,v) in sorted order:
        if u and v are in different components:
            T = T + (u,v)
    return T
```

**Union-Find data structure:** Maintains connected components. Find(u) returns the representative of \( u \)'s component. Union(u,v) merges two components.

```
Find(x):
    if parent[x] != x:
        parent[x] = Find(parent[x])   // path compression
    return parent[x]

Union(x, y):
    xr = Find(x), yr = Find(y)
    if xr == yr: return
    if rank[xr] < rank[yr]: parent[xr] = yr
    else if rank[xr] > rank[yr]: parent[yr] = xr
    else: parent[yr] = xr, rank[xr]++
```

**Complexity:** \\( O(E \\log E) \\) for sorting, \\( O(E \\alpha(V)) \\) for union-find operations, where \\( \\alpha \\) is the inverse Ackermann function.

> **Pro Tip:** Kruskal's algorithm is preferred for sparse graphs (E = O(V)) where sorting dominates. The union-find with path compression and union by rank makes the find operations nearly O(1) amortized.
>
> **Warning:** Without path compression, union-find can degrade to O(V) per operation. Always implement both path compression and union by rank.

**One-Sentence Takeaway:** Kruskal's algorithm sorts edges by weight and uses union-find to add the smallest edge that doesn't create a cycle â€” O(E log E) overall.

### 12.4 Prim's Algorithm

**Strategy:** Grow the MST from a starting vertex, always adding the smallest edge connecting the current tree to a vertex outside it.

```
Prim(G, r):
    key[v] = inf for all v, key[r] = 0
    PQ = priority queue of (key[v], v)
    while PQ is not empty:
        u = ExtractMin(PQ)
        for each neighbor v of u:
            if v in PQ and w(u,v) < key[v]:
                parent[v] = u
                key[v] = w(u,v)
                DecreaseKey(PQ, v, key[v])
    return parent
```

**Correctness:** Invariant: the set of edges selected so far is a subset of some MST. The cut property guarantees that adding the minimum-weight edge crossing the cut preserves optimality.

**Complexity:** \\( O((V + E) \\log V) = O(E \\log V) \\) with a binary heap, \\( O(E + V \\log V) \\) with a Fibonacci heap.

> **Pro Tip:** Prim's algorithm looks almost identical to Dijkstra. The difference is that Prim's key is the minimum edge weight to the current tree, while Dijkstra's key is the total distance from the source.
>
> **Remember:** Prim's is better for dense graphs (E â‰ˆ VÂ²) where the priority queue operations dominate. For dense graphs, an O(VÂ²) array-based implementation can outperform a binary heap.

**One-Sentence Takeaway:** Prim's algorithm grows an MST from a seed vertex using a priority queue, always adding the cheapest edge connecting the tree to a new vertex â€” O(E log V).

### 12.5 Boruvka's Algorithm

**Strategy:** The oldest MST algorithm (1926). Each vertex starts as a component. In each phase, find the cheapest edge from each component to a different component, add all such edges, and contract components.

```
Boruvka(G):
    T = empty set
    while |T| < |V| - 1:
        for each component C:
            cheapest[C] = minimum-weight edge from C to another component
        for each component C:
            if cheapest[C] forms a cycle with T:
                T = T + cheapest[C]
        Contract components
    return T
```

**Complexity:** Each phase halves the number of components, so there are \\( O(\\log V) \\) phases. Each phase scans all edges, yielding \\( O(E \\log V) \\).

> **Pro Tip:** Boruvka is the most parallelizable MST algorithm â€” each component independently finds its cheapest edge. It's historically significant and useful for distributed settings where global sorting is expensive.
>
> **Remember:** Boruvka's algorithm works by contracting components. After each phase, the number of components at least halves, guaranteeing O(log V) phases.

**One-Sentence Takeaway:** Boruvka's algorithm repeatedly finds each component's cheapest outgoing edge in parallel, halving components each phase â€” O(E log V).

### 12.6 Applications

- **Network design:** Minimize the cost of connecting nodes (electrical grids, computer networks).
- **Clustering:** Remove the \( k-1 \) heaviest edges from the MST to form \( k \) clusters (single-link clustering).
- **Approximation algorithms:** MST is used in the 2-approximation for TSP.
- **Steiner tree approximation:** The minimum Steiner tree can be approximated using MST.

---

## Examples

### Example 12.1: Kruskal's Algorithm in C++

```cpp
#include <vector>
#include <algorithm>

struct Edge { int u, v, w; };

struct UnionFind {
    std::vector<int> parent, rank;
    UnionFind(int n) : parent(n), rank(n, 0) {
        for (int i = 0; i < n; ++i) parent[i] = i;
    }
    int find(int x) {
        if (parent[x] != x)
            parent[x] = find(parent[x]);
        return parent[x];
    }
    bool unite(int x, int y) {
        int xr = find(x), yr = find(y);
        if (xr == yr) return false;
        if (rank[xr] < rank[yr]) parent[xr] = yr;
        else if (rank[xr] > rank[yr]) parent[yr] = xr;
        else { parent[yr] = xr; rank[xr]++; }
        return true;
    }
};

int kruskal(int n, std::vector<Edge>& edges) {
    std::sort(edges.begin(), edges.end(),
              [](const Edge& a, const Edge& b) { return a.w < b.w; });
    UnionFind uf(n);
    int totalWeight = 0;
    for (const auto& e : edges) {
        if (uf.unite(e.u, e.v))
            totalWeight += e.w;
    }
    return totalWeight;
}
```

### Example 12.2: Prim's Algorithm in C++

```cpp
#include <vector>
#include <queue>
#include <limits>

int prim(const std::vector<std::vector<std::pair<int,int>>>& adj) {
    int n = static_cast<int>(adj.size());
    std::vector<int> key(n, std::numeric_limits<int>::max());
    std::vector<bool> inMST(n, false);
    key[0] = 0;
    using P = std::pair<int,int>;
    std::priority_queue<P, std::vector<P>, std::greater<P>> pq;
    pq.push({0, 0});
    int totalWeight = 0;
    while (!pq.empty()) {
        auto [w, u] = pq.top(); pq.pop();
        if (inMST[u]) continue;
        inMST[u] = true;
        totalWeight += w;
        for (auto [v, weight] : adj[u]) {
            if (!inMST[v] && weight < key[v]) {
                key[v] = weight;
                pq.push({key[v], v});
            }
        }
    }
    return totalWeight;
}
```

### Example 12.3: MST Cut Property Proof Application

**Problem:** Given a graph with 4 vertices and edges (0,1,1), (1,2,2), (2,3,3), (0,3,4), (0,2,5), (1,3,6), find the MST.

**Kruskal:** Sort edges by weight: 1,2,3,4,5,6. Add (0,1), (1,2), (2,3). Total weight: 6.

**Prim from 0:** Add (0,1) weight 1, (1,2) weight 2, (2,3) weight 3. Total: 6.

---

### Concept Comparison Table

| Algorithm | Strategy | Data Structure | Best For | Complexity |
|-----------|----------|---------------|----------|------------|
| Kruskal | Add smallest non-cycle edge | Union-Find DSU | Sparse graphs (E â‰ˆ V) | O(E log E) |
| Prim | Grow tree from seed | Priority Queue / Array | Dense graphs (E â‰ˆ VÂ²) | O(E log V) |
| Boruvka | Component cheapest edges | Per-component arrays | Parallel/Distributed | O(E log V) |

### Quick Reference

| Category | Key Points |
|----------|------------|
| **Kruskal** | Sort edges, use union-find to skip cycles |
| **Prim** | Grow tree like Dijkstra, key = min edge to tree |
| **Boruvka** | Each component picks cheapest outgoing edge; O(log V) phases |
| **Cut Property** | Lightest crossing edge is in some MST |
| **Cycle Property** | Heaviest cycle edge is in no MST |
| **Applications** | Network design, clustering, TSP approximation |

### Cross-Application Matrix

| Algorithm | DSA Interviews | Competitive Programming | System Design | Real-World |
|-----------|---------------|----------------------|---------------|------------|
| Kruskal | Very common | Standard MST | Network cabling | Power grids, telecom |
| Prim | Common | Dense graph MST | Circuit design | Chip layout |
| Boruvka | Rare | Distributed MST | Distributed systems | Large-scale networks |
| MST in general | Common | Core technique | Clustering | Single-link clustering |

---

## Summary

| Algorithm | Strategy | Time | Use Case |
|-----------|----------|------|----------|
| Kruskal | Edge-sorting + union-find | \( O(E \log E) \) | Sparse graphs |
| Prim (binary heap) | Priority queue on vertices | \( O(E \log V) \) | Dense graphs |
| Prim (Fibonacci heap) | Decrease-key | \( O(E + V \log V) \) | Very dense graphs |
| Boruvka | Component contraction | \( O(E \log V) \) | Parallel/distributed |

---

## Exercises

### Review Questions

### Chapter Quiz

**Q1.** Which MST algorithm is best for a sparse graph with E â‰ˆ V?

- A) Prim with binary heap
- B) Boruvka
- C) Kruskal
- D) All are equally good

<details>
<summary>Answer</summary>
C) Kruskal â€” the sorting step dominates at O(E log E), and union-find operations are nearly constant.
</details>

**Q2.** What property guarantees that the smallest edge crossing a cut belongs to some MST?

- A) Cycle property
- B) Cut property
- C) Optimal substructure
- D) Triangle inequality

<details>
<summary>Answer</summary>
B) The cut property states the minimum-weight edge crossing any cut is in some MST.
</details>

**Q3.** How many phases does Boruvka's algorithm run in the worst case?

- A) O(V)
- B) O(E)
- C) O(log V)
- D) O(1)

<details>
<summary>Answer</summary>
C) O(log V) â€” each phase at least halves the number of components.
</details>

### Review Questions

1. State and prove the cut property of MSTs.
2. Compare Kruskal and Prim in terms of complexity on sparse vs. dense graphs.
3. Why does Boruvka have at most \( O(\log V) \) phases?

### Application Problems

4. Implement Kruskal with path compression and union by rank.
5. Use Prim's algorithm to find the MST of a complete graph with 100 vertices and edge weights uniformly distributed in [0,1].
6. Prove that the MST is unique if all edge weights are distinct.
7. Given a graph and a pre-specified edge \( e \), determine if \( e \) must belong to every MST.

### Challenge Problem

8. Design an algorithm for the **minimum Steiner tree** problem in metric spaces using MST. Give a 2-approximation guarantee.
