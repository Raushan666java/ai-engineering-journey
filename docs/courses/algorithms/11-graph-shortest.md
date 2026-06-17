# Chapter 11: Graph Shortest Paths

## Learning Objectives

By the end of this chapter, students will be able to:

1. Implement Dijkstra's algorithm for single-source shortest paths with non-negative weights.
2. Implement Bellman-Ford for graphs with negative weights and detect negative cycles.
3. Compute all-pairs shortest paths using Floyd-Warshall.
4. Compute shortest paths in DAGs using topological order.
5. Understand the A* search algorithm and its admissible heuristic property.

---

## Theory

![Graph Shortest Paths Diagram](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/algorithms/ch11-graph-shortest.png)

### 11.1 Dijkstra's Algorithm

**Problem:** Find the shortest paths from a source vertex \( s \) to all other vertices in a weighted graph with non-negative edge weights.

**Algorithm:** Maintain a set of visited vertices and a priority queue of distances. At each step, extract the vertex with the smallest distance, relax all its outgoing edges.

```
Dijkstra(G, s):
    dist[v] = inf for all v, dist[s] = 0
    PQ = min-priority queue of (dist[v], v)
    while PQ is not empty:
        u = ExtractMin(PQ)
        for each neighbor v of u:
            if dist[u] + w(u,v) < dist[v]:
                dist[v] = dist[u] + w(u,v)
                DecreaseKey(PQ, v, dist[v])
    return dist
```

**Correctness:** Invariant: when a vertex \( u \) is extracted from the priority queue, \( dist[u] \) is the true shortest distance from \( s \) to \( u \). This holds because all edge weights are non-negative, so no future relaxation can produce a shorter path.

**Complexity:** \( O((V+E) \log V) \) with a binary heap, \( O(V \log V + E) \) with a Fibonacci heap.

### 11.2 Bellman-Ford Algorithm

**Problem:** Find shortest paths when edge weights may be negative. Also detects negative cycles reachable from the source.

**Algorithm:** Relax all edges \( |V|-1 \) times. After \( |V|-1 \) iterations, run another pass to detect negative cycles.

```
BellmanFord(G, s):
    dist[v] = inf for all v, dist[s] = 0
    for i = 1 to |V|-1:
        for each edge (u,v) in E:
            if dist[u] + w(u,v) < dist[v]:
                dist[v] = dist[u] + w(u,v)
    for each edge (u,v) in E:
        if dist[u] + w(u,v) < dist[v]:
            report "negative cycle detected"
    return dist
```

**Correctness:** After \( k \) iterations, \( dist[v] \) is the shortest path from \( s \) to \( v \) using at most \( k \) edges. The shortest path has at most \( |V|-1 \) edges, so \( |V|-1 \) iterations suffice.

**Complexity:** \( O(VE) \).

### 11.3 Floyd-Warshall Algorithm

**Problem:** Find the shortest paths between all pairs of vertices. Handles negative weights but not negative cycles.

**Algorithm:** Let \( d^{(k)}[i][j] \) be the shortest path from \( i \) to \( j \) using only vertices from \( \{1, \ldots, k\} \) as intermediates.

\[
d^{(0)}[i][j] = \begin{cases}
0 & \text{if } i = j \\
w(i,j) & \text{if } (i,j) \in E \\
\infty & \text{otherwise}
\end{cases}
\]

\[
d^{(k)}[i][j] = \min(d^{(k-1)}[i][j], d^{(k-1)}[i][k] + d^{(k-1)}[k][j])
\]

```
FloydWarshall(G):
    n = |V|
    dist = n x n matrix initialized to edge weights (inf for non-edges)
    for k = 0 to n-1:
        for i = 0 to n-1:
            for j = 0 to n-1:
                if dist[i][k] + dist[k][j] < dist[i][j]:
                    dist[i][j] = dist[i][k] + dist[k][j]
    return dist
```

**Complexity:** \( \Theta(V^3) \) time, \( \Theta(V^2) \) space.

### 11.4 Shortest Path in DAG

**Problem:** Find shortest paths in a directed acyclic graph (DAG). The absence of cycles allows a linear-time solution.

**Algorithm:** Topologically sort the vertices. Process vertices in order, relaxing outgoing edges.

```
DAGShortestPath(G, s):
    order = TopologicalSort(G)
    dist[v] = inf for all v, dist[s] = 0
    for u in order:
        for each neighbor v of u:
            if dist[u] + w(u,v) < dist[v]:
                dist[v] = dist[u] + w(u,v)
    return dist
```

**Complexity:** \( O(V + E) \).

### 11.5 A* Search

A* is an informed search algorithm that uses a heuristic function \( h(v) \) to estimate the distance from \( v \) to the target. It combines the actual distance \( g(v) \) with the heuristic: \( f(v) = g(v) + h(v) \).

```
AStar(G, s, t, h):
    g[v] = inf for all v, g[s] = 0
    PQ = priority queue of (f[v], v) where f[v] = g[v] + h(v)
    while PQ is not empty:
        u = ExtractMin(PQ)
        if u == t: reconstruct and return
        for each neighbor v of u:
            if g[u] + w(u,v) < g[v]:
                g[v] = g[u] + w(u,v)
                DecreaseKey(PQ, v, g[v] + h(v))
    return no path
```

**Admissibility:** A heuristic \( h \) is admissible if \( h(v) \le \text{true cost}(v, t) \) for all \( v \). With an admissible heuristic, A* is guaranteed to find the optimal path.

**Consistency (monotonicity):** \( h(u) \le w(u,v) + h(v) \). A consistent heuristic ensures A* never re-opens closed nodes.

---

## Examples

### Example 11.1: Dijkstra in C++

```cpp
#include <vector>
#include <queue>
#include <limits>
#include <algorithm>

std::vector<int> dijkstra(const std::vector<std::vector<std::pair<int,int>>>& adj, int s) {
    int n = static_cast<int>(adj.size());
    std::vector<int> dist(n, std::numeric_limits<int>::max());
    dist[s] = 0;
    using P = std::pair<int,int>;
    std::priority_queue<P, std::vector<P>, std::greater<P>> pq;
    pq.push({0, s});
    while (!pq.empty()) {
        auto [d, u] = pq.top(); pq.pop();
        if (d != dist[u]) continue;
        for (auto [v, w] : adj[u]) {
            if (dist[u] + w < dist[v]) {
                dist[v] = dist[u] + w;
                pq.push({dist[v], v});
            }
        }
    }
    return dist;
}
```

### Example 11.2: Bellman-Ford in C++

```cpp
#include <vector>
#include <limits>

struct Edge { int u, v, w; };

std::vector<int> bellmanFord(const std::vector<Edge>& edges, int n, int s) {
    std::vector<int> dist(n, std::numeric_limits<int>::max());
    dist[s] = 0;
    for (int i = 0; i < n - 1; ++i) {
        for (const auto& e : edges) {
            if (dist[e.u] != std::numeric_limits<int>::max()
                && dist[e.u] + e.w < dist[e.v])
                dist[e.v] = dist[e.u] + e.w;
        }
    }
    for (const auto& e : edges) {
        if (dist[e.u] != std::numeric_limits<int>::max()
            && dist[e.u] + e.w < dist[e.v])
            return {}; // negative cycle
    }
    return dist;
}
```

### Example 11.3: Floyd-Warshall in C++

```cpp
#include <vector>
#include <limits>

std::vector<std::vector<int>> floydWarshall(
    const std::vector<std::vector<int>>& graph) {
    int n = static_cast<int>(graph.size());
    std::vector<std::vector<int>> dist = graph;
    for (int k = 0; k < n; ++k)
        for (int i = 0; i < n; ++i)
            for (int j = 0; j < n; ++j)
                if (dist[i][k] != std::numeric_limits<int>::max()
                    && dist[k][j] != std::numeric_limits<int>::max()
                    && dist[i][k] + dist[k][j] < dist[i][j])
                    dist[i][j] = dist[i][k] + dist[k][j];
    return dist;
}
```

---

## Summary

| Algorithm | Type | Weights | Time | Space |
|-----------|------|---------|------|-------|
| Dijkstra | Single-source | Non-negative | \( O((V+E) \log V) \) | \( O(V) \) |
| Bellman-Ford | Single-source | Any (detects negative cycles) | \( O(VE) \) | \( O(V) \) |
| Floyd-Warshall | All-pairs | Any (no negative cycles) | \( \Theta(V^3) \) | \( \Theta(V^2) \) |
| DAG shortest | Single-source | Any | \( O(V+E) \) | \( O(V) \) |
| A* | s-t | Non-negative + heuristic | \( O(E) \) in practice | \( O(V) \) |

---

## Exercises

### Review Questions

1. Why does Dijkstra fail with negative edge weights?
2. What is the purpose of the final pass in Bellman-Ford?
3. State the difference between admissible and consistent heuristics in A*.

### Application Problems

4. Implement Dijkstra with predecessor tracking to reconstruct the shortest path.
5. Run Bellman-Ford on a graph with a negative cycle and verify the detection.
6. Implement DAG shortest path for task scheduling (critical path).
7. Given a 10x10 grid with obstacles, implement A* with Manhattan distance heuristic.

### Challenge Problem

8. Design an algorithm for the **K shortest simple paths** problem: find the K shortest paths between two vertices that do not share vertices. Analyze its complexity.
