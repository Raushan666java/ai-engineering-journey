# Chapter 13: Network Flow

## Learning Objectives

By the end of this chapter, students will be able to:

1. State and prove the max-flow min-cut theorem.
2. Implement Ford-Fulkerson, Edmonds-Karp, and Dinic's algorithms.
3. Reduce bipartite matching and assignment problems to network flow.
4. Model real-world problems as flow networks.

---

## Theory

![Network Flow Diagram](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/algorithms/ch13-graph-flow.png)

### 13.1 Flow Networks

**Definition 13.1.** A **flow network** is a directed graph \( G = (V, E) \) with:
- A **source** \( s \in V \) with no incoming edges.
- A **sink** \( t \in V \) with no outgoing edges.
- A **capacity function** \( c : E \to \mathbb{R}^+ \).

A **flow** \( f : E \to \mathbb{R} \) satisfies:
1. **Capacity constraint:** \( 0 \le f(u,v) \le c(u,v) \) for all edges.
2. **Flow conservation:** For all \( v \in V \setminus \{s, t\} \), \( \sum_{u} f(u,v) = \sum_{w} f(v,w) \).

The **value** of a flow is \( |f| = \sum_{v} f(s,v) - \sum_{v} f(v,s) \).

### 13.2 Max-Flow Min-Cut Theorem

**Definition 13.2.** An **s-t cut** \( (S, T) \) partitions \( V \) into \( S \ni s \) and \( T \ni t \). The **capacity** of the cut is \( c(S, T) = \sum_{u \in S, v \in T} c(u,v) \).

**Theorem 13.1 (Max-Flow Min-Cut).** The maximum flow value equals the minimum cut capacity.

**Proof sketch.** Let \( f \) be a maximum flow. The residual network has no augmenting path. Define \( S \) as the set of vertices reachable from \( s \) in the residual network. Then \( (S, V \setminus S) \) is a cut with capacity equal to \( |f| \). No cut can have smaller capacity because any flow must cross any cut by the amount \( |f| \).

### 13.3 Ford-Fulkerson Method

**Algorithm:** Repeatedly find an augmenting path in the residual graph and push flow along it.

```
FordFulkerson(G, s, t):
    f = 0 on all edges
    while there exists a path p from s to t in residual graph Gf:
        cf(p) = min residual capacity on p
        for each edge (u,v) on p:
            f(u,v) += cf(p)
            f(v,u) -= cf(p)
    return f
```

**Residual capacity:** \( c_f(u,v) = c(u,v) - f(u,v) + f(v,u) \).

**Complexity:** \( O(E \cdot |f^*|) \) where \( f^* \) is the max flow value. Pseudo-polynomial if capacities are large.

### 13.4 Edmonds-Karp Algorithm

**Improvement:** Always choose the shortest augmenting path (in number of edges, using BFS).

```
EdmondsKarp(G, s, t):
    f = 0 on all edges
    while true:
        P = BFS from s to t in Gf
        if no path exists: break
        cf = min residual capacity on P
        augment f by cf along P
    return f
```

**Complexity:** \( O(VE^2) \). Each BFS finds a shortest path, and there are at most \( O(VE) \) augmentations because each BFS increases the distance from \( s \) to at least one vertex.

### 13.5 Dinic's Algorithm

**Algorithm:** Uses a level graph (BFS layers) and blocks all shortest paths simultaneously.

```
Dinic(G, s, t):
    f = 0
    while true:
        level = BFS from s in Gf to compute distances
        if level[t] is not defined: break
        ptr = array of iteration pointers, initialized to 0
        while flow = DFS(s, t, inf):
            augment f by flow
    return f
```

DFS(s, t, flow) sends flow from \( s \) to \( t \) along the level graph, respecting capacity constraints.

**Complexity:** \( O(V^2 E) \), \( O(E \sqrt{V}) \) for unit-capacity networks, \( O(E V^{1/2}) \) for bipartite matching.

### 13.6 Bipartite Matching

**Problem:** Given a bipartite graph \( (U, V, E) \), find the largest set of edges with no shared endpoints.

**Reduction to max flow:**
1. Connect a source \( s \) to all vertices in \( U \) with capacity 1.
2. Direct all edges from \( U \) to \( V \) with capacity 1.
3. Connect all vertices in \( V \) to sink \( t \) with capacity 1.
4. The max flow value equals the size of the maximum matching.

**Complexity:** \( O(E \sqrt{V}) \) using Dinic, which is significantly faster than \( O(VE) \) augmentations.

### 13.7 Assignment Problem

**Problem:** Given \( n \) workers and \( n \) jobs with a cost \( c_{ij} \) for worker \( i \) to perform job \( j \), find the minimum-cost perfect matching.

**Reduction to min-cost max flow:** Add edge weights (costs) to the bipartite matching reduction and use min-cost flow.

---

## Examples

### Example 13.1: Edmonds-Karp in C++

```cpp
#include <vector>
#include <queue>
#include <limits>
#include <algorithm>

struct Edge {
    int to, rev;
    int cap;
};

class MaxFlow {
    std::vector<std::vector<Edge>> graph;
public:
    MaxFlow(int n) : graph(n) {}
    void addEdge(int from, int to, int cap) {
        graph[from].push_back({to, static_cast<int>(graph[to].size()), cap});
        graph[to].push_back({from, static_cast<int>(graph[from].size()) - 1, 0});
    }
    int maxFlow(int s, int t) {
        int flow = 0, n = static_cast<int>(graph.size());
        while (true) {
            std::vector<int> level(n, -1);
            std::queue<int> q;
            level[s] = 0; q.push(s);
            while (!q.empty()) {
                int v = q.front(); q.pop();
                for (const auto& e : graph[v]) {
                    if (e.cap > 0 && level[e.to] < 0) {
                        level[e.to] = level[v] + 1;
                        q.push(e.to);
                    }
                }
            }
            if (level[t] < 0) break;
            std::vector<int> iter(n, 0);
            while (true) {
                int f = dfs(s, t, std::numeric_limits<int>::max(), level, iter);
                if (f == 0) break;
                flow += f;
            }
        }
        return flow;
    }
private:
    int dfs(int v, int t, int f, const std::vector<int>& level,
            std::vector<int>& iter) {
        if (v == t) return f;
        for (int &i = iter[v]; i < static_cast<int>(graph[v].size()); ++i) {
            Edge& e = graph[v][i];
            if (e.cap > 0 && level[v] < level[e.to]) {
                int d = dfs(e.to, t, std::min(f, e.cap), level, iter);
                if (d > 0) {
                    e.cap -= d;
                    graph[e.to][e.rev].cap += d;
                    return d;
                }
            }
        }
        return 0;
    }
};
```

### Example 13.2: Bipartite Matching via Max Flow

```cpp
// Construct graph with source = U.size() + V.size(),
// sink = U.size() + V.size() + 1
int maxBipartiteMatching(int uSize, int vSize,
                          const std::vector<std::pair<int,int>>& edges) {
    int n = uSize + vSize + 2;
    int source = n - 2, sink = n - 1;
    MaxFlow mf(n);
    for (int i = 0; i < uSize; ++i)
        mf.addEdge(source, i, 1);
    for (int j = 0; j < vSize; ++j)
        mf.addEdge(uSize + j, sink, 1);
    for (const auto& [u, v] : edges)
        mf.addEdge(u, uSize + v, 1);
    return mf.maxFlow(source, sink);
}
```

### Example 13.3: Max Flow Min Cut Application

**Problem:** A city has a water network. Edges are pipes with capacities. What is the maximum flow from the reservoir to the city? What is the bottleneck (minimum cut)?

**Solution:** Compute max flow using Dinic. The minimum cut identifies the set of pipes that, if upgraded, would increase flow.

---

## Summary

| Algorithm | Time | Notes |
|-----------|------|-------|
| Ford-Fulkerson | \( O(E \cdot |f^*|) \) | Pseudo-polynomial |
| Edmonds-Karp | \( O(VE^2) \) | BFS-based shortest augmenting path |
| Dinic | \( O(V^2 E) \) | Level graph + blocking flow |
| Dinic (unit capacities) | \( O(E \sqrt{V}) \) | Matches bipartite matching lower bound |

---

## Exercises

### Review Questions

1. State the max-flow min-cut theorem and provide a proof sketch.
2. Explain why Ford-Fulkerson with integer capacities terminates.
3. Why does Edmonds-Karp use BFS rather than DFS?

### Application Problems

4. Implement Dinic's algorithm and test it on a network with 1000 vertices and 5000 edges.
5. Model the **edge-disjoint paths** problem as a max flow problem. Find the maximum number of vertex-disjoint paths.
6. Given a bipartite graph with 20 vertices on each side, find the maximum matching using max flow.
7. Model the **baseball elimination** problem as a max flow instance.

### Challenge Problem

8. Design an algorithm for the **minimum cut** problem that does not require computing max flow (Stoer-Wagner algorithm). Implement and analyze its complexity.
