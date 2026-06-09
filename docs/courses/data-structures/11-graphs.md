# Chapter 11: Graphs

## Learning Objectives

- Define graphs and graph terminology.
- Implement graph representations: adjacency matrix and adjacency list.
- Distinguish directed, undirected, weighted, and unweighted graphs.
- Analyze space complexity of each representation.

## Theory

### Definition

A **graph** \( G = (V, E) \) consists of a set of vertices \( V \) and a set of edges \( E \subseteq V \times V \). An edge connects two vertices.

**Terminology:**
- **Directed graph (digraph)**: edges have a direction (u → v).
- **Undirected graph**: edges have no direction (u — v).
- **Weighted graph**: each edge has a numerical weight.
- **Degree**: number of edges incident to a vertex. In directed graphs: **in-degree** and **out-degree**.
- **Path**: a sequence of vertices where consecutive vertices are connected by edges.
- **Cycle**: a path where the first and last vertices are the same.
- **Connected graph**: every vertex is reachable from every other (undirected).
- **Strongly connected**: every vertex reachable from every other (directed).
- **Complete graph**: every pair of vertices is connected by an edge.

### Graph Representations

**Adjacency Matrix**: an \( n \times n \) matrix where \( m[i][j] = 1 \) (or weight) if edge (i, j) exists.

- Space: \( O(V^2) \)
- Edge query: \( O(1) \)
- Iterating neighbors: \( O(V) \)

**Adjacency List**: an array of lists; list \( i \) contains the neighbors of vertex \( i \).

- Space: \( O(V + E) \)
- Edge query: \( O(\deg(v)) \)
- Iterating neighbors: \( O(\deg(v)) \)

### Graph Notation Summary

| Notation | Meaning |
|----------|---------|
| \( n = \|V\| \) | Number of vertices |
| \( m = \|E\| \) | Number of edges |
| \( \deg(v) \) | Degree of vertex v |
| \( \delta(G) \) | Minimum degree |
| \( \Delta(G) \) | Maximum degree |

## Examples

### Example 1: Adjacency Matrix

```cpp
#include <iostream>
#include <vector>

class GraphMatrix {
private:
    int numVertices;
    std::vector<std::vector<bool>> adj;
    bool directed;

public:
    GraphMatrix(int n, bool dir = false)
        : numVertices(n), directed(dir) {
        adj.resize(n, std::vector<bool>(n, false));
    }

    void addEdge(int u, int v) {
        if (u < 0 || u >= numVertices || v < 0 || v >= numVertices) return;
        adj[u][v] = true;
        if (!directed) adj[v][u] = true;
    }

    void removeEdge(int u, int v) {
        if (u < 0 || u >= numVertices || v < 0 || v >= numVertices) return;
        adj[u][v] = false;
        if (!directed) adj[v][u] = false;
    }

    bool hasEdge(int u, int v) const {
        if (u < 0 || u >= numVertices || v < 0 || v >= numVertices) return false;
        return adj[u][v];
    }

    void print() const {
        for (int i = 0; i < numVertices; ++i) {
            std::cout << i << ": ";
            for (int j = 0; j < numVertices; ++j) {
                std::cout << (adj[i][j] ? "1 " : "0 ");
            }
            std::cout << "\n";
        }
    }

    int vertexCount() const { return numVertices; }
};

int main() {
    GraphMatrix g(4, false); // undirected
    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 2);
    g.addEdge(2, 3);

    std::cout << "Adjacency Matrix:\n";
    g.print();

    std::cout << "Edge (0,1): " << g.hasEdge(0, 1) << "\n";
    std::cout << "Edge (1,3): " << g.hasEdge(1, 3) << "\n";

    return 0;
}
```

**Output:**
```
Adjacency Matrix:
0: 0 1 1 0
1: 1 0 1 0
2: 1 1 0 1
3: 0 0 1 0
Edge (0,1): 1
Edge (1,3): 0
```

### Example 2: Adjacency List

```cpp
#include <iostream>
#include <vector>
#include <list>

class GraphList {
private:
    int numVertices;
    std::vector<std::list<int>> adj;
    bool directed;

public:
    GraphList(int n, bool dir = false)
        : numVertices(n), directed(dir) {
        adj.resize(n);
    }

    void addEdge(int u, int v) {
        if (u < 0 || u >= numVertices || v < 0 || v >= numVertices) return;
        adj[u].push_back(v);
        if (!directed) adj[v].push_back(u);
    }

    void print() const {
        for (int i = 0; i < numVertices; ++i) {
            std::cout << i << ": ";
            for (int neighbor : adj[i]) {
                std::cout << neighbor << " ";
            }
            std::cout << "\n";
        }
    }

    const std::list<int>& neighbors(int v) const { return adj[v]; }

    int vertexCount() const { return numVertices; }
};

int main() {
    GraphList g(5, true); // directed
    g.addEdge(0, 1);
    g.addEdge(0, 3);
    g.addEdge(1, 2);
    g.addEdge(2, 3);
    g.addEdge(3, 4);
    g.addEdge(4, 1);

    std::cout << "Adjacency List (directed):\n";
    g.print();

    return 0;
}
```

**Output:**
```
Adjacency List (directed):
0: 1 3
1: 2
2: 3
3: 4
4: 1
```

### Example 3: Weighted Graph (Adjacency List with Pair)

```cpp
#include <iostream>
#include <vector>
#include <list>
#include <utility>

class WeightedGraph {
private:
    int numVertices;
    std::vector<std::list<std::pair<int, int>>> adj; // (neighbor, weight)
    bool directed;

public:
    WeightedGraph(int n, bool dir = false)
        : numVertices(n), directed(dir) {
        adj.resize(n);
    }

    void addEdge(int u, int v, int w) {
        adj[u].push_back({v, w});
        if (!directed) adj[v].push_back({u, w});
    }

    void print() const {
        for (int i = 0; i < numVertices; ++i) {
            std::cout << i << ": ";
            for (const auto& [neighbor, weight] : adj[i]) {
                std::cout << "(" << neighbor << ", w=" << weight << ") ";
            }
            std::cout << "\n";
        }
    }
};

int main() {
    WeightedGraph g(4, false);
    g.addEdge(0, 1, 5);
    g.addEdge(0, 2, 2);
    g.addEdge(1, 2, 1);
    g.addEdge(1, 3, 4);
    g.addEdge(2, 3, 3);

    std::cout << "Weighted Graph:\n";
    g.print();

    return 0;
}
```

**Output:**
```
Weighted Graph:
0: (1, w=5) (2, w=2)
1: (0, w=5) (2, w=1) (3, w=4)
2: (0, w=2) (1, w=1) (3, w=3)
3: (1, w=4) (2, w=3)
```

### Example 4: Degree Calculation

```cpp
#include <iostream>
#include <vector>

void printDegrees(const std::vector<std::list<int>>& adj, bool directed) {
    int n = adj.size();
    std::vector<int> outDegree(n, 0);
    std::vector<int> inDegree(n, 0);

    for (int u = 0; u < n; ++u) {
        for (int v : adj[u]) {
            outDegree[u]++;
            if (directed) inDegree[v]++;
        }
    }

    for (int i = 0; i < n; ++i) {
        if (directed) {
            std::cout << "Vertex " << i << ": in=" << inDegree[i]
                      << ", out=" << outDegree[i] << "\n";
        } else {
            std::cout << "Vertex " << i << ": degree=" << outDegree[i] << "\n";
        }
    }
}
```

## Summary

- Graphs model relationships between entities.
- Adjacency matrices offer \( O(1) \) edge queries at \( O(V^2) \) space.
- Adjacency lists use \( O(V+E) \) space and excel for sparse graphs.
- Weighted graphs store edge weights alongside neighbor information.
- Directed and undirected graphs capture different relationship types.

## Exercises

### Review Questions

1. When would an adjacency matrix be preferred over an adjacency list?
2. What is the space complexity of each representation for a complete graph?
3. How does the degree calculation differ for directed and undirected graphs?

### Application Problems

4. Write a function to compute the transitive closure of a directed graph (reachability matrix) using Floyd-Warshall.
5. Implement a function that reads a graph from an edge list file and builds both representations.
6. Write a function to detect if an undirected graph is a tree (connected and \( |E| = |V| - 1 \)).

### Challenge Problem

7. Implement a **graph isomorphism checker** that determines whether two graphs have the same structure (node names may differ). Use degree sequences and adjacency comparison.
