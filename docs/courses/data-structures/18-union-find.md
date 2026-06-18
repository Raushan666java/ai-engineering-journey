# Chapter 18: Union-Find (Disjoint Set Union)

## Learning Objectives

- Define the Disjoint Set Union (DSU) data structure.
- Implement find and union with path compression and union by rank.
- Analyze the inverse-Ackermann amortized complexity.
- Apply DSU to Kruskal's MST and connected components problems.

## Theory

![Union-Find Flowchart](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/data-structures/ch18-union-find.png)

### Disjoint Set Union (DSU)

The DSU data structure maintains a collection of disjoint (non-overlapping) sets. Each set is identified by a representative element (the root). Two operations:

- **Find(x)**: returns the representative of the set containing \( x \).
- **Union(x, y)**: merges the sets containing \( x \) and \( y \).

### Optimizations

**Path compression**: during Find, make every node on the path point directly to the root, flattening the tree for future operations.

**Union by rank (or size)**: attach the shorter tree under the taller tree. Rank is an upper bound on tree height.

**Complexity**: with both optimizations, the amortized time per operation is \( O(\alpha(n)) \), where \( \alpha \) is the inverse Ackermann function â€” effectively constant for any practical input size.

### Applications

- Kruskal's minimum spanning tree algorithm
- Detecting cycles in undirected graphs
- Connected components in graphs
- Maze generation (randomized Kruskal)
- Social network friend groups
- Image segmentation (connected components labeling)

## Examples

### Example 1: DSU Implementation with Path Compression and Union by Rank

```cpp
#include <iostream>
#include <vector>

class DSU {
private:
    std::vector<int> parent;
    std::vector<int> rank;
    int numSets;

public:
    DSU(int n) : numSets(n) {
        parent.resize(n);
        rank.resize(n, 0);
        for (int i = 0; i < n; ++i) parent[i] = i;
    }

    // Find with path compression
    int find(int x) {
        if (parent[x] != x) {
            parent[x] = find(parent[x]); // path compression
        }
        return parent[x];
    }

    // Union by rank
    void unionSets(int x, int y) {
        int rootX = find(x);
        int rootY = find(y);

        if (rootX == rootY) return;

        if (rank[rootX] < rank[rootY]) {
            parent[rootX] = rootY;
        } else if (rank[rootX] > rank[rootY]) {
            parent[rootY] = rootX;
        } else {
            parent[rootY] = rootX;
            rank[rootX]++;
        }

        --numSets;
    }

    bool connected(int x, int y) {
        return find(x) == find(y);
    }

    int countSets() const {
        return numSets;
    }

    void printSets() const {
        std::vector<std::vector<int>> components(parent.size());
        for (int i = 0; i < parent.size(); ++i) {
            int root = find(i); // note: parent[i] may not be root in const context
            components[root].push_back(i);
        }

        for (int i = 0; i < parent.size(); ++i) {
            if (!components[i].empty()) {
                std::cout << "Set " << i << ": ";
                for (int v : components[i]) std::cout << v << " ";
                std::cout << "\n";
            }
        }
    }
};
```

### Example 2: DSU Driver

```cpp
#include "dsu.h"

int main() {
    DSU dsu(8); // elements 0..7

    dsu.unionSets(0, 1);
    dsu.unionSets(1, 2);
    dsu.unionSets(3, 4);
    dsu.unionSets(5, 6);
    dsu.unionSets(6, 7);

    std::cout << "Connected(0,2): " << dsu.connected(0, 2) << "\n";
    std::cout << "Connected(0,3): " << dsu.connected(0, 3) << "\n";
    std::cout << "Connected(5,7): " << dsu.connected(5, 7) << "\n";

    std::cout << "Number of sets: " << dsu.countSets() << "\n";

    dsu.unionSets(2, 3); // merge sets {0,1,2} and {3,4}
    std::cout << "After merging {0,1,2} and {3,4}:\n";
    std::cout << "Connected(0,4): " << dsu.connected(0, 4) << "\n";
    std::cout << "Number of sets: " << dsu.countSets() << "\n";

    dsu.unionSets(4, 5); // merge all
    std::cout << "After merging all:\n";
    std::cout << "Connected(0,7): " << dsu.connected(0, 7) << "\n";
    std::cout << "Number of sets: " << dsu.countSets() << "\n";

    return 0;
}
```

**Output:**
```
Connected(0,2): 1
Connected(0,3): 0
Connected(5,7): 1
Number of sets: 4
After merging {0,1,2} and {3,4}:
Connected(0,4): 1
Number of sets: 3
After merging all:
Connected(0,7): 1
Number of sets: 1
```

### Example 3: Kruskal's Minimum Spanning Tree

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

struct Edge {
    int u, v, weight;
    bool operator<(const Edge& other) const {
        return weight < other.weight;
    }
};

class KruskalMST {
private:
    int numVertices;
    std::vector<Edge> edges;

public:
    KruskalMST(int n) : numVertices(n) {}

    void addEdge(int u, int v, int w) {
        edges.push_back({u, v, w});
    }

    std::vector<Edge> computeMST() {
        std::sort(edges.begin(), edges.end());

        DSU dsu(numVertices);
        std::vector<Edge> mst;

        for (const Edge& e : edges) {
            if (!dsu.connected(e.u, e.v)) {
                dsu.unionSets(e.u, e.v);
                mst.push_back(e);
            }
        }

        return mst;
    }
};

int main() {
    // Graph with 6 vertices (0..5)
    KruskalMST g(6);
    g.addEdge(0, 1, 4);
    g.addEdge(0, 2, 2);
    g.addEdge(1, 2, 1);
    g.addEdge(1, 3, 5);
    g.addEdge(2, 3, 8);
    g.addEdge(2, 4, 10);
    g.addEdge(3, 4, 2);
    g.addEdge(3, 5, 6);
    g.addEdge(4, 5, 3);

    auto mst = g.computeMST();

    std::cout << "Minimum Spanning Tree edges:\n";
    int totalWeight = 0;
    for (const Edge& e : mst) {
        std::cout << "  " << e.u << " - " << e.v << " : " << e.weight << "\n";
        totalWeight += e.weight;
    }
    std::cout << "Total weight: " << totalWeight << "\n";

    return 0;
}
```

**Output:**
```
Minimum Spanning Tree edges:
  1 - 2 : 1
  0 - 2 : 2
  3 - 4 : 2
  4 - 5 : 3
  1 - 3 : 5
Total weight: 13
```

### Example 4: Cycle Detection in an Undirected Graph

```cpp
#include <iostream>
#include <vector>
#include <utility>

bool hasCycle(int n, const std::vector<std::pair<int, int>>& edges) {
    DSU dsu(n);
    for (const auto& [u, v] : edges) {
        if (dsu.connected(u, v)) return true;
        dsu.unionSets(u, v);
    }
    return false;
}

int main() {
    std::vector<std::pair<int, int>> edges1 = {
        {0, 1}, {1, 2}, {2, 3}};
    std::vector<std::pair<int, int>> edges2 = {
        {0, 1}, {1, 2}, {2, 0}};

    std::cout << "Graph 1 has cycle: " << hasCycle(4, edges1) << "\n";
    std::cout << "Graph 2 has cycle: " << hasCycle(3, edges2) << "\n";

    return 0;
}
```

**Output:**
```
Graph 1 has cycle: 0
Graph 2 has cycle: 1
```

### Example 5: Number of Connected Components

```cpp
#include <iostream>
#include <vector>

int countComponents(int n, const std::vector<std::pair<int, int>>& edges) {
    DSU dsu(n);
    for (const auto& [u, v] : edges) {
        dsu.unionSets(u, v);
    }

    std::vector<bool> seen(n, false);
    int components = 0;
    for (int i = 0; i < n; ++i) {
        int root = dsu.find(i);
        if (!seen[root]) {
            seen[root] = true;
            ++components;
        }
    }
    return components;
}

int main() {
    std::vector<std::pair<int, int>> edges = {
        {0, 1}, {2, 3}, {4, 5}, {3, 4}};

    int comp = countComponents(7, edges);
    std::cout << "Connected components: " << comp << "\n";
    // Sets: {0,1}, {2,3,4,5}, {6} = 3 components

    return 0;
}
```

**Output:**
```
Connected components: 3
```

## ðŸ’¡ Pro Tips

- **Implement union by rank OR by size**: Both give similar theoretical guarantees. Union by size is slightly more intuitive â€” attach the smaller tree under the larger tree.
- **Path compression alone is almost enough**: Even without union by rank, path compression gives amortized \(O(\log n)\). Adding union by rank yields the inverse Ackermann bound \(O(\alpha(n))\).
- **DSU for offline queries**: When you have a sequence of edge additions and connectivity queries, DSU can answer all queries in near-linear time. For deletions, use DSU with rollback.
- **Kruskal's algorithm + DSU is the canonical MST algorithm**: Sort edges by weight (\(O(E \log V)\)), process edges in order, union endpoints if they belong to different components. DSU detects cycles in \(O(\alpha(V))\) per edge.

## One-Sentence Takeaways

- DSU (Union-Find) maintains disjoint sets with find and union operations.
- Path compression flattens the tree during find for near-constant amortized time.
- Union by rank attaches smaller trees under larger trees to limit depth.
- Combined optimizations yield \(O(\alpha(n))\) per operation, where \(\alpha\) is the inverse Ackermann function.
- Kruskal's algorithm uses DSU to find MSTs by processing edges in sorted order.
- DSU can answer connectivity queries online (as edges arrive) in near-linear time.

## Concept Comparison Table

| Optimization | Without | Path Compression Only | Union by Rank Only | Both |
|-------------|---------|---------------------|-------------------|------|
| find() complexity | \(O(n)\) | \(O(\log n)\) amortized | \(O(\log n)\) | \(O(\alpha(n))\) amortized |
| union() complexity | \(O(n)\) | \(O(\log n)\) amortized | \(O(\log n)\) | \(O(\alpha(n))\) amortized |
| Implementation | Simple | Simple | Simple | Simple |
| Memory overhead | None | None | Rank/size array | Both arrays |

## Quick Reference: DSU Operations

| Operation | Pseudocode | Complexity |
|-----------|-------------|------------|
| makeSet(x) | parent[x] = x; rank[x] = 0 | \(O(1)\) |
| find(x) | if parent[x] != x: parent[x] = find(parent[x]); return parent[x] | \(O(\alpha(n))\) |
| union(x, y) | rx = find(x); ry = find(y); if rx == ry: return; if rank[rx] < rank[ry]: swap; parent[ry] = rx; if rank[rx] == rank[ry]: rank[rx]++ | \(O(\alpha(n))\) |
| connected(x, y) | return find(x) == find(y) | \(O(\alpha(n))\) |

## Cross-Application Matrix

| Problem | How DSU Is Used | Complexity |
|---------|-----------------|------------|
| Kruskal's MST | Union endpoints of each edge; connects \(V-1\) edges | \(O(E \log V + E \alpha(V))\) |
| Connected components | Union adjacent cells in grid | \(O(n \alpha(n))\) |
| Number of islands | DSU on grid cells (4-dir connectivity) | \(O(mn \alpha(mn))\) |
| Cycle detection in undirected graph | Union endpoints; if find(u) == find(v), cycle exists | \(O(E \alpha(V))\) |
| Friend circles (social network) | Union connected users | \(O(m \alpha(n))\) where m = relationships |
| Dynamic connectivity | DSU with rollback | \(O(q \log q \log n)\) offline |

## Chapter Quiz

1. **What is the near-constant time complexity of optimized DSU?**
   - a) \(O(1)\)
   - b) \(O(\alpha(n))\) âœ“
   - c) \(O(\log n)\)
   - d) \(O(n)\)

2. **What does path compression do?**
   - a) Merges trees
   - b) Flattens the tree during find âœ“
   - c) Sorts edges
   - d) Computes rank

3. **Which algorithm uses DSU to find MSTs?**
   - a) Dijkstra's
   - b) Kruskal's âœ“
   - c) Prim's
   - d) Floyd's

4. **What is the inverse Ackermann function \(\alpha(n)\) for practical n?**
   - a) ~4 âœ“
   - b) ~log n
   - c) ~1
   - d) ~n

5. **Union by rank ensures:**
   - a) Smaller tree under larger âœ“
   - b) Trees are sorted
   - c) Path is always 1
   - d) All elements are connected

**Answers:** 1-b, 2-b, 3-b, 4-a, 5-a

## Summary

- DSU maintains disjoint sets with near-constant amortized operations.
- Path compression and union by rank together yield \( O(\alpha(n)) \) per operation.
- Kruskal's algorithm uses DSU to build a minimum spanning tree in \( O(E \log V) \).
- DSU is widely used for connectivity queries, cycle detection, and partition refinement.

## Exercises

### Review Questions

1. How does path compression flatten the DSU tree? Draw an example.
2. Why is union by rank not strictly necessary when path compression is used?
3. What is the significance of the inverse Ackermann function?

### Application Problems

4. Implement union by size instead of union by rank. Compare the resulting tree heights.
5. Use DSU to solve the **number of islands** problem in a binary grid.
6. Implement **DSU with rollback** â€” support undoing the last union operation (useful for offline dynamic connectivity).

### Challenge Problem

7. Implement **Offline Dynamic Connectivity**: given a sequence of edge insertions and deletions, use DSU with rollback and a divide-and-conquer segment tree structure to answer connectivity queries at any point in time. The overall complexity is \( O(q \log q \log n) \) where \( q \) is the number of operations.
