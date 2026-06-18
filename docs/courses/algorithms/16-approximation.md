# Chapter 16: Approximation Algorithms

> **Prerequisites:** [Chapter 15: NP-Completeness](./15-np-completeness.md) â€” Understanding of NP-hard problems and reductions | **Next:** [Chapter 17: Randomized Algorithms](./17-randomized.md) â€” From deterministic approximation to probabilistic methods

## Learning Objectives

By the end of this chapter, students will be able to:

1. Define approximation ratio and approximation scheme.
2. Implement and analyze the 2-approximation for vertex cover.
3. Implement the MST-based 2-approximation for TSP.
4. Analyze the greedy set cover algorithm and its approximation ratio.
5. Apply the probabilistic method for MAX-SAT approximation.

---

### Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| Approximation Ratio | ALG / OPT â‰¤ c (for minimization) | Measures how close an approximation gets to optimal |
| Vertex Cover | Pick both endpoints of uncovered edge | Simple 2-approximation; greedy fails worse |
| TSP (Metric) | MST-based tour + shortcutting | 2-approximation; triangle inequality is essential |
| Set Cover | Pick set with best cost-per-new-element | O(log n)-approximation via greedy |
| MAX-SAT | Random assignment + conditional expectation | 1 - 1/2^k approximation; derandomizable |

### Chapter Roadmap

```mermaid
flowchart LR
    A[Approximation] --> B[Ratio Definition]
    A --> C[Vertex Cover 2-approx]
    A --> D[ TSP 2-approx]
    A --> E[Set Cover O(log n)]
    A --> F[ MAX-SAT]
    C --> G[Pick both endpoints]
    D --> H[MST + DFS shortcut]
    E --> I[Greedy per-element cost]
    F --> J[Random + Derandomize]
```

## Theory

![Approximation Algorithms Diagram](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/algorithms/ch16-approximation.png)

### 16.1 Approximation Ratio

**Definition 16.1.** An algorithm for a minimization problem has an **approximation ratio** \( \rho \) if for every input instance:
\[
\frac{C_{\text{alg}}}{C_{\text{opt}}} \le \rho
\]
where \( C_{\text{alg}} \) is the cost of the algorithm's solution and \( C_{\text{opt}} \) is the cost of the optimal solution.

For maximization problems, the ratio is \( C_{\text{opt}} / C_{\text{alg}} \le \rho \).

**Definition 16.2.** A **polynomial-time approximation scheme (PTAS)** is an algorithm that, for any fixed \( \epsilon > 0 \), achieves an approximation ratio of \( 1 + \epsilon \) in time polynomial in \( n \) (but possibly exponential in \( 1/\epsilon \)).

A **fully polynomial-time approximation scheme (FPTAS)** runs in time polynomial in both \( n \) and \( 1/\epsilon \).

### 16.2 Vertex Cover: 2-Approximation

**Problem:** Find the smallest set of vertices that covers all edges.

**Algorithm (Maximal Matching):**
```
ApproxVertexCover(G):
    C = empty set
    while E is not empty:
        pick any edge (u,v) in E
        C = C + {u,v}
        remove all edges incident to u or v from E
    return C
```

**Theorem 16.1.** The maximal-matching algorithm is a 2-approximation for minimum vertex cover.

**Proof.** Let \( M \) be the set of edges selected by the algorithm. These edges form a matching (no two share a vertex). Any vertex cover must include at least one endpoint of each edge in \( M \), so \( |C_{\text{opt}}| \ge |M| \). The algorithm chooses \( 2|M| \) vertices, so \( |C_{\text{alg}}| = 2|M| \le 2|C_{\text{opt}}| \).

> **Pro Tip:** The elegant proof: the selected edges form a matching, so any vertex cover must include at least one endpoint per edge. The algorithm picks both -- hence at most 2x optimal. This is a canonical example of a pairing argument.
>
> **Remember:** The greedy algorithm that picks the highest-degree vertex has a worse approximation ratio. The matching-based approach is simpler and better.

**One-Sentence Takeaway:** The maximal-matching algorithm achieves a 2-approximation for vertex cover by selecting both endpoints of each matched edge.

### 16.3 Traveling Salesman: 2-Approximation

**Problem (Metric TSP):** Given a complete graph with edge weights satisfying the triangle inequality, find the shortest tour visiting each vertex exactly once.

**Algorithm (MST-based):**
```
ApproxTSP(G):
    T = MST of G
    Perform a pre-order walk of T
    Return the resulting Hamiltonian cycle
```

**Theorem 16.2.** The MST-based algorithm is a 2-approximation for metric TSP.

**Proof.** Let \( c(T) \) be the MST cost. The optimal tour \( C_{\text{opt}} \) has cost at least \( c(T) \) (removing any edge from the tour gives a spanning tree). A depth-first walk of the MST traverses each edge twice, giving cost \( 2c(T) \). Using the triangle inequality, shortcutting repeated vertices does not increase the cost. Thus \( c(C_{\text{alg}}) \le 2c(T) \le 2c(C_{\text{opt}}) \).

**Christofides' algorithm** improves this to a 1.5-approximation by combining an MST with a minimum-weight perfect matching on odd-degree vertices.

### 16.4 Set Cover

**Problem:** Given a universe \( U \) of \( n \) elements and a collection of subsets \( S_1, \ldots, S_m \) with costs, find the minimum-cost collection that covers all elements.

**Greedy Algorithm:**
```
GreedySetCover(U, S):
    uncovered = U
    cover = empty set
    while uncovered is not empty:
        pick subset S_i that minimizes cost(S_i) / |S_i + uncovered|
        cover = cover + {S_i}
        uncovered = uncovered - S_i
    return cover
```

**Theorem 16.3.** The greedy set cover algorithm achieves an approximation ratio of \( H_n = \sum_{i=1}^n 1/i \approx \ln n + \gamma \).

**Proof.** When the optimal cover has cost \( C_{\text{opt}} \), there must exist a set with cost per uncovered element at most \( C_{\text{opt}} / |\text{uncovered}| \). The greedy algorithm picks at least this efficiently. Summing the harmonic series gives the bound.

**Tightness:** There exist instances where the greedy algorithm achieves exactly \( \ln n \) approximation.

### 16.5 MAX-SAT

**Problem:** Given a CNF formula, find an assignment that maximizes the number of satisfied clauses.

**Randomized Algorithm:** Assign each variable true with probability \( 1/2 \).

**Theorem 16.4.** The random assignment satisfies at least \( (1 - 2^{-k}) \) fraction of clauses, where \( k \) is the minimum clause length. In particular, for general MAX-SAT, it achieves expected approximation ratio 2.

**Derandomization using the method of conditional expectations:** Set variables one at a time, always choosing the value that maximizes the expected number of satisfied clauses given the current partial assignment.

**Johnson's algorithm:** For MAX-2-SAT (clauses of length 2), a more sophisticated approach achieves a 3/4-approximation.

---

## Examples

### Example 16.1: Vertex Cover 2-Approximation in C++

```cpp
#include <vector>
#include <unordered_set>

std::vector<int> approxVertexCover(int n, std::vector<std::pair<int,int>> edges) {
    std::vector<bool> removed(n, false);
    std::vector<int> cover;
    for (auto& [u, v] : edges) {
        if (!removed[u] && !removed[v]) {
            cover.push_back(u);
            cover.push_back(v);
            removed[u] = true;
            removed[v] = true;
        }
    }
    return cover;
}
```

### Example 16.2: Metric TSP 2-Approximation

```cpp
#include <vector>
#include <algorithm>
#include <functional>

// Assumes dist[][] satisfies triangle inequality
double approxTSP(const std::vector<std::vector<double>>& dist) {
    int n = static_cast<int>(dist.size());
    // Prim's to build MST
    std::vector<double> key(n, 1e18);
    std::vector<int> parent(n, -1);
    std::vector<bool> inMST(n, false);
    key[0] = 0;
    for (int i = 0; i < n; ++i) {
        int u = -1;
        for (int v = 0; v < n; ++v)
            if (!inMST[v] && (u == -1 || key[v] < key[u]))
                u = v;
        inMST[u] = true;
        for (int v = 0; v < n; ++v)
            if (!inMST[v] && dist[u][v] < key[v]) {
                key[v] = dist[u][v];
                parent[v] = u;
            }
    }
    // Build adjacency from parent array
    std::vector<std::vector<int>> mst(n);
    for (int v = 1; v < n; ++v) {
        mst[v].push_back(parent[v]);
        mst[parent[v]].push_back(v);
    }
    // Pre-order walk (DFS)
    std::vector<int> tour;
    std::function<void(int,int)> dfs = [&](int u, int p) {
        tour.push_back(u);
        for (int v : mst[u])
            if (v != p) dfs(v, u);
    };
    dfs(0, -1);
    tour.push_back(tour[0]); // return to start
    double totalDist = 0;
    for (size_t i = 0; i + 1 < tour.size(); ++i)
        totalDist += dist[tour[i]][tour[i+1]];
    return totalDist;
}
```

### Example 16.3: Greedy Set Cover

```cpp
#include <vector>
#include <unordered_set>
#include <algorithm>

double greedySetCover(const std::vector<std::unordered_set<int>>& subsets,
                      const std::vector<double>& costs, int universeSize) {
    std::vector<bool> covered(universeSize, false);
    int remaining = universeSize;
    double totalCost = 0;
    std::vector<bool> used(subsets.size(), false);
    while (remaining > 0) {
        int bestIdx = -1;
        double bestRatio = 1e18;
        for (size_t i = 0; i < subsets.size(); ++i) {
            if (used[i]) continue;
            int newCovers = 0;
            for (int elem : subsets[i])
                if (!covered[elem]) ++newCovers;
            if (newCovers == 0) continue;
            double ratio = costs[i] / newCovers;
            if (ratio < bestRatio) { bestRatio = ratio; bestIdx = i; }
        }
        if (bestIdx == -1) break;
        used[bestIdx] = true;
        totalCost += costs[bestIdx];
        for (int elem : subsets[bestIdx]) {
            if (!covered[elem]) { covered[elem] = true; --remaining; }
        }
    }
    return totalCost;
}
```

---

### Concept Comparison Table

| Algorithm | Problem Type | Ratio | Key Idea | Derandomizes? |
|-----------|-------------|-------|----------|---------------|
| Maximal Matching VC | Vertex Cover | 2 | Pick both endpoints of matching edge | N/A |
| MST-based TSP | Metric TSP | 2 | MST + DFS + shortcutting | N/A |
| Christofides | Metric TSP | 1.5 | MST + perfect matching on odd vertices | N/A |
| Greedy Set Cover | Set Cover | O(log n) | Min cost-per-new-element ratio | N/A |
| Random MAX-SAT | MAX-SAT | 2 | Random assignment | Conditional expectation |

### Quick Reference

| Category | Key Points |
|----------|------------|
| **Approximation Ratio** | ALG/OPT for minimization; OPT/ALG for maximization; always >= 1 |
| **PTAS vs FPTAS** | PTAS poly in n (exp in 1/e); FPTAS poly in both |
| **Vertex Cover** | Pick both endpoints of a maximal matching edge |
| **Metric TSP** | MST cost <= OPT; double + DFS + shortcut gives 2x |
| **Christofides** | MST + perfect matching on odd-degree vertices = 1.5x |
| **Set Cover** | Greedy picks min cost-per-new-element; O(log n) ratio |
| **MAX-SAT** | Random assignment = 2-approx; conditional expectations derandomizes |

### Cross-Application Matrix

| Algorithm | DSA Interviews | Competitive Programming | Real-World |
|-----------|---------------|----------------------|------------|
| Vertex Cover 2-approx | Common pairing argument | Useful in graph problems | Network monitoring |
| TSP 2-approx | Occasionally | Held-Karp DP better | Logistics, routing |
| Set Cover greedy | Common | Identifying hard instances | Resource allocation |
| MAX-SAT | Occasionally | N/A | Circuit design |

---

## Summary

| Problem | Algorithm | Ratio | Lower Bound |
|---------|-----------|-------|-------------|
| Vertex cover | Maximal matching | 2 | \( 2 - \epsilon \) (NP-hard) |
| Metric TSP | MST-based | 2 | 1.5 (Christofides) |
| Metric TSP | Christofides | 1.5 | \( 1 + \epsilon \) (NP-hard) |
| Set cover | Greedy | \( H_n \) | \( c \log n \) (NP-hard) |
| MAX-SAT | Random assignment | 2 | 1.14 (NP-hard) |

---

## Exercises

### Review Questions

### Chapter Quiz

**Q1.** What is the approximation ratio of the maximal-matching algorithm for vertex cover?

- A) 1.5
- B) 2
- C) O(log n)
- D) H_n

<details>
<summary>Answer</summary>
B) 2. Each matched edge contributes two vertices to the cover, while optimal needs at least one per edge.
</details>

**Q2.** Why does the MST-based TSP algorithm require the triangle inequality?

- A) To compute the MST
- B) To ensure shortcutting does not increase the tour cost
- C) To guarantee polynomial running time
- D) To prove optimality

<details>
<summary>Answer</summary>
B) The triangle inequality ensures that skipping repeated vertices (shortcutting) does not increase the tour cost.
</details>

**Q3.** What is the approximation ratio of greedy set cover?

- A) 2
- B) log_2 n
- C) H_n â‰ˆ ln n
- D) 1.5

<details>
<summary>Answer</summary>
C) The greedy set cover achieves H_n â‰ˆ ln n + Î³, which is optimal up to constant factors unless P = NP.
</details>

### Review Questions

1. Define the approximation ratio for a minimization problem.
2. Explain why the triangle inequality is required for the 2-approximation TSP algorithm.
3. What is the greedy choice in the set cover algorithm?

### Application Problems

4. Implement Christofides' algorithm and compare its performance with the 2-approximation.
5. Construct an instance where the maximal-matching vertex cover achieves exactly ratio 2.
6. Apply greedy set cover to the universe {1,2,3,4,5} and subsets S1={1,2,3}, S2={2,4}, S3={3,4}, S4={4,5}. Compute the approximation ratio on this instance.
7. Derandomize the MAX-SAT random assignment algorithm.

### Challenge Problem

8. Design a PTAS for the **Euclidean TSP** (points in the plane with Euclidean distance). Hint: use a divide-and-conquer approach with dynamic programming on the boundary.
