# Chapter 11: Graphs

**Prev:** [Chapter 10: Heaps](10-heaps.md) | **Next:** [Chapter 12: Graph Traversals](12-graph-traversals.md)

## Learning Objectives

> **One-Sentence Takeaway:** Graphs model pairwise relationships; choose adjacency matrix for dense graphs and adjacency list for sparse graphs.

<!-- Image Gallery -->
<section class="lesson-visuals" aria-label="Visual learning resources">
  <header><span>VISUAL LEARNING</span><h2>See it. Review it. Remember it.</h2></header>
  <a class="lesson-visual-card" href="../../../assets/images/lessons/data-structures/11-graphs/.png" target="_blank" rel="noopener">
    <img src="../../../assets/images/lessons/data-structures/11-graphs/.png" alt="Handwritten notes" loading="lazy">
    <span><strong>Handwritten notes</strong>Condensed notes for deliberate review.</span>
  </a>
  <a class="lesson-visual-card" href="../../../assets/images/lessons/data-structures/11-graphs/.png" target="_blank" rel="noopener">
    <img src="../../../assets/images/lessons/data-structures/11-graphs/.png" alt="Sticky-note revision" loading="lazy">
    <span><strong>Sticky-note revision</strong>Fast recall prompts for revision.</span>
  </a>
  <a class="lesson-visual-card" href="../../../assets/images/lessons/data-structures/11-graphs/.png" target="_blank" rel="noopener">
    <img src="../../../assets/images/lessons/data-structures/11-graphs/.png" alt="Visual concept guide" loading="lazy">
    <span><strong>Visual concept guide</strong>A connected explanation of the key ideas.</span>
  </a>
</section>
<!-- End Image Gallery -->


- Define graphs and graph terminology.
- Implement graph representations: adjacency matrix, adjacency list, and edge list.
- Distinguish directed, undirected, weighted, and unweighted graphs.
- Analyze space/time complexity of each representation.
- Identify complete graphs, bipartite graphs, and graph density.

## Why Graphs Matter

**Real-World Analogy:** Imagine a city's road map. Each intersection is a **vertex** (node), and each road connecting two intersections is an **edge**. Now picture Facebook — each person is a vertex, and each friendship is an edge connecting two people. Graphs are everywhere: Twitter follower networks (directed edges), Google Maps road networks (weighted edges for distance), the World Wide Web itself (webpages linked by hyperlinks), and even your brain's neural connections. Without graphs, there is no navigation, no social network, no web search, no routing — they are the universal language of relationships.

| Domain | What Becomes a Vertex | What Becomes an Edge |
|--------|----------------------|---------------------|
| Social network | Person | Friendship/follow |
| Road map | Intersection | Road (with distance weight) |
| Web | Webpage | Hyperlink |
| Computer network | Router | Cable (with bandwidth weight) |
| Prerequisites | Course | "Depends on" relationship |

> **Why this matters:** If you can model a problem as a graph, you can apply hundreds of years of mathematical theory and decades of algorithmic research to solve it — shortest paths, connectivity, clustering, ranking, and more.

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| Graph definition | \(G = (V, E)\) — vertices and edges | Models relationships between any entities |
| Adjacency matrix | \(n \times n\) matrix, \(O(1)\) edge queries | Best for dense graphs (\(E \approx V^2\)) |
| Adjacency list | Array of neighbor lists, \(O(V+E)\) space | Best for sparse graphs (most real-world graphs) |
| Edge list | List of \((u,v,w)\) tuples, \(O(E)\) space | Best for I/O, sorting, Kruskal's MST |
| Weighted graphs | Edge carries a numerical weight | Essential for shortest-path problems |
| Directed vs Undirected | Arrows vs lines between vertices | Choose based on relationship symmetry |
| Complete graph | Every pair connected by an edge | Maximum edges = \(n(n-1)/2\) |
| Bipartite graph | Vertices in 2 sets, edges only between sets | Models matching problems, 2-coloring |
| Graph density | Dense: \(E \approx V^2\); Sparse: \(E \ll V^2\) | Density drives representation choice |

## Chapter Roadmap

`mermaid
flowchart TD
    A[Why Graphs Matter] --> B[Graph Types]
    B --> C[Directed]
    B --> D[Undirected]
    B --> E[Weighted]
    C --> F{Representation?}
    D --> F
    E --> F
    F --> G[Adjacency Matrix]
    F --> H[Adjacency List]
    F --> I[Edge List]
    G --> J[Dense Graphs O1 Edge Query]
    H --> K[Sparse Graphs O(V+E) Space]
    I --> L[O(E) Storage / Kruskal's]
    J --> M[Degree Calculation]
    K --> M
    M --> N[Special Graphs]
    N --> O[Complete Graph]
    N --> P[Bipartite Graph]
    O --> Q[Applications]
    P --> Q
    Q --> R[Social Networks]
    Q --> S[Maps / Navigation]
    Q --> T[Web Graph / PageRank]
    Q --> U[Routing Protocols]
`

---

## Theory

### 1. Graph Types: Directed, Undirected, Weighted


**Real-World Analogy:**
- **Undirected graph:** Facebook friendship — if Alice is friends with Bob, Bob is automatically friends with Alice. The relationship is symmetric.
- **Directed graph:** Twitter follows — Alice follows Bob does not mean Bob follows Alice. The relationship has a direction (arrow).
- **Weighted graph:** Google Maps road network — the edge between two intersections carries a weight representing distance in miles or travel time in minutes.

#### 1.1 Definitions

| Type | Notation | Edge Representation | Example |
|------|----------|-------------------|---------|
| Undirected | \(G = (V, E)\), edges are unordered pairs | \(\{u, v\}\) or \(u - v\) | Facebook friendship |
| Directed (digraph) | \(G = (V, E)\), edges are ordered pairs | \((u, v)\) or \(u \to v\) | Twitter follow |
| Weighted (undirected) | \(G = (V, E, w)\) | \(\{u, v\}\) with weight \(w\) | Road network |
| Weighted (directed) | \(G = (V, E, w)\) | \((u, v)\) with weight \(w\) | Flight routes with cost |

#### 1.2 Algorithm Steps to Determine Graph Type

1. Identify the relationship: is it symmetric or asymmetric?
2. If symmetric → undirected. If asymmetric → directed.
3. Does each relationship carry a numeric cost/value? If yes → weighted.
4. Choose representation (matrix/list/edge list) based on density.

#### 1.3 Pseudocode

`
DETERMINE_GRAPH_PROPERTIES(edges):
    isDirected = false
    isWeighted = false
    for each (u, v) in edges:
        if (v, u) not in edges:
            isDirected = true
        if edge has weight:
            isWeighted = true
    return (isDirected, isWeighted)
`

#### 1.4 Dry Run

**Input edges:** [(0,1,5), (1,2,3), (2,0,4), (1,3,2)]

| Step | Edge(u,v,w) | Reverse (v,u) exists? | isDirected? | hasWeight? | isWeighted? |
|------|-------------|----------------------|-------------|------------|-------------|
| 1 | (0,1,5) | (1,0)? No → Yes | Yes | Yes (5) | Yes |
| 2 | (1,2,3) | (2,1)? No | Yes | Yes (3) | Yes |
| 3 | (2,0,4) | (0,2)? No | Yes | Yes (4) | Yes |
| 4 | (1,3,2) | (3,1)? No | Yes | Yes (2) | Yes |

**Result:** Directed, weighted graph.

#### 1.5 C++ Implementation

`cpp
#include &lt;iostream&gt;
#include &lt;vector&gt;
#include &lt;tuple&gt;
using namespace std;

struct Edge {
    int u, v, w;
    bool hasWeight;
    Edge(int u, int v, int w = 0, bool hw = false)
        : u(u), v(v), w(w), hasWeight(hw) {}
};

pair&lt;bool,bool&gt; determineGraphType(const vector&lt;Edge&gt;& edges) {
    bool isDirected = false;
    bool isWeighted = false;
    for (const auto& e : edges) {
        if (e.hasWeight) isWeighted = true;
        bool found = false;
        for (const auto& rev : edges) {
            if (rev.u == e.v && rev.v == e.u) { found = true; break; }
        }
        if (!found) isDirected = true;
    }
    return {isDirected, isWeighted};
}

int main() {
    vector&lt;Edge&gt; edges = {{0,1,5,true},{1,2,3,true},{2,0,4,true},{1,3,2,true}};
    auto [dir, wt] = determineGraphType(edges);
    cout &lt;< "Directed: " << dir << ", Weighted: " << wt << endl;
    return 0;
}
`

#### 1.6 Python Implementation

`python
def determine_graph_type(edges):
    is_directed = False
    is_weighted = False
    edge_set = set()
    for e in edges:
        if len(e) == 3:
            is_weighted = True
            u, v, w = e
        else:
            u, v = e
        edge_set.add((u, v))
    for (u, v, *_) in edges:
        if (v, u) not in edge_set:
            is_directed = True
    return is_directed, is_weighted

edges = [(0, 1, 5), (1, 2, 3), (2, 0, 4), (1, 3, 2)]
dir, wt = determine_graph_type(edges)
print(f"Directed: {dir}, Weighted: {wt}")
`

#### 1.7 Java Implementation

`java
import java.util.*;

class Edge {
    int u, v, w;
    boolean hasWeight;
    Edge(int u, int v) { this.u = u; this.v = v; hasWeight = false; }
    Edge(int u, int v, int w) { this.u = u; this.v = v; this.w = w; hasWeight = true; }
}

class Main {
    static boolean[] determineGraphType(List&lt;Edge&gt; edges) {
        boolean isDirected = false, isWeighted = false;
        Set&lt;String&gt; set = new HashSet&lt;>();
        for (Edge e : edges) {
            if (e.hasWeight) isWeighted = true;
            set.add(e.u + "," + e.v);
        }
        for (Edge e : edges) {
            if (!set.contains(e.v + "," + e.u)) { isDirected = true; break; }
        }
        return new boolean[]{isDirected, isWeighted};
    }

    public static void main(String[] args) {
        List&lt;Edge&gt; edges = Arrays.asList(
            new Edge(0,1,5), new Edge(1,2,3),
            new Edge(2,0,4), new Edge(1,3,2));
        boolean[] res = determineGraphType(edges);
        System.out.println("Directed: " + res[0] + ", Weighted: " + res[1]);
    }
}
`

#### 1.8 Complexity Analysis

| Operation | Time | Why |
|-----------|------|-----|
| Determine directed | \(O(E^2)\) worst (naive) or \(O(E)\) with hash set | Each edge checks reverse existence |
| Determine weighted | \(O(E)\) | Single pass checking weight field |

#### 1.9 Advantages & Disadvantages

| Aspect | Advantage | Disadvantage |
|--------|-----------|-------------|
| Directed graphs | Models asymmetric relationships (web links, follows) | More complex algorithms (SCC vs CC) |
| Undirected graphs | Simpler algorithms, half the storage | Cannot model asymmetric relationships |
| Weighted graphs | Enables optimization (shortest path) | Extra storage per edge |

#### 1.10 Edge Cases

- **Single vertex:** \(|V| = 1, |E| = 0\) — trivially both directed and undirected.
- **Self-loop:** Edge \((v, v)\). In undirected, reverse = same, so not detected as directed.
- **Empty graph:** No edges — undirected by default.
- **Mixed:** Can a graph have both directed and undirected edges? Yes — called a **mixed graph**, though most algorithms require one type.

---

### 2. Adjacency Matrix


**Real-World Analogy:** Think of a flight booking system. You want to know "Is there a direct flight from New York to London?" An adjacency matrix is like a massive airport x airport table where cell [NYC][LON] = 1 if a direct flight exists, or shows the ticket price if weighted. Looking up any pair is instant (O(1)), but storing the table requires space for every possible pair — even airports with no connection.

#### 2.1 Definition

An **adjacency matrix** is an \(n \times n\) boolean (or numeric) matrix \(M\) where:

\[
M[i][j] = \begin{cases}
1 \text{ (or weight)} & \text{if edge } (i, j) \text{ exists} \\
0 & \text{otherwise}
\end{cases}
\]

For undirected graphs, \(M\) is symmetric: \(M[i][j] = M[j][i]\).

#### 2.2 Algorithm Steps to Build an Adjacency Matrix

1. Initialize an \(n \times n\) matrix with all zeros (or sentinel like \(\infty\) for weighted).
2. For each edge \((u, v)\) in the edge list:
   - Set \(\text{matrix}[u][v] = 1\) (or the weight).
   - If undirected, also set \(\text{matrix}[v][u] = 1\).
3. To query edge existence: return \(\text{matrix}[u][v] \neq 0\).
4. To iterate neighbors of vertex \(v\): scan row \(v\) for non-zero entries.

#### 2.3 Pseudocode

`
ADJACENCY_MATRIX(n, edges, directed):
    // Initialize n x n matrix with 0
    matrix = new int[n][n]
    for i = 0 to n-1:
        for j = 0 to n-1:
            matrix[i][j] = 0

    for each (u, v, [weight]) in edges:
        matrix[u][v] = weight or 1
        if not directed:
            matrix[v][u] = weight or 1

    return matrix

HAS_EDGE(matrix, u, v):
    return matrix[u][v] != 0

GET_NEIGHBORS(matrix, n, v):
    neighbors = []
    for i = 0 to n-1:
        if matrix[v][i] != 0:
            neighbors.append(i)
    return neighbors
`



#### 2.4 Dry Run

**Input:** \(n = 4\), undirected edges: (0,1), (0,2), (1,2), (2,3)

**Step 1:** Initialize \(4 \times 4\) matrix.

`
    0   1   2   3
0   0   0   0   0
1   0   0   0   0
2   0   0   0   0
3   0   0   0   0
`

**Step 2:** Process edge (0,1).

`
    0   1   2   3
0   0   1   0   0
1   1   0   0   0
2   0   0   0   0
3   0   0   0   0
`

**Step 3:** Process edge (0,2).

`
    0   1   2   3
0   0   1   1   0
1   1   0   0   0
2   1   0   0   0
3   0   0   0   0
`

**Step 4:** Process edge (1,2).

`
    0   1   2   3
0   0   1   1   0
1   1   0   1   0
2   1   1   0   0
3   0   0   0   0
`

**Step 5:** Process edge (2,3).

`
    0   1   2   3
0   0   1   1   0
1   1   0   1   0
2   1   1   0   1
3   0   0   1   0
`

**Queries:** hasEdge(0,1) = true (matrix[0][1] = 1), hasEdge(1,3) = false (matrix[1][3] = 0).

**Neighbors of 2:** Scan row 2 → [0, 1, 3].

#### 2.5 C++ Implementation

`cpp
#include &lt;iostream&gt;
#include &lt;vector&gt;
using namespace std;

class AdjacencyMatrix {
    int n;
    vector&lt;vector<int&gt;> mat;
    bool directed;
public:
    AdjacencyMatrix(int n, bool dir = false) : n(n), directed(dir) {
        mat.assign(n, vector&lt;int&gt;(n, 0));
    }

    void addEdge(int u, int v, int w = 1) {
        if (u &lt; 0 || u &gt;= n || v &lt; 0 || v &gt;= n) return;
        mat[u][v] = w;
        if (!directed) mat[v][u] = w;
    }

    bool hasEdge(int u, int v) {
        if (u &lt; 0 || u &gt;= n || v &lt; 0 || v &gt;= n) return false;
        return mat[u][v] != 0;
    }

    vector&lt;int&gt; getNeighbors(int v) {
        vector&lt;int&gt; res;
        if (v &lt; 0 || v &gt;= n) return res;
        for (int i = 0; i &lt; n; i++)
            if (mat[v][i] != 0) res.push_back(i);
        return res;
    }

    void print() {
        for (int i = 0; i &lt; n; i++) {
            for (int j = 0; j &lt; n; j++)
                cout &lt;< mat[i][j] << " ";
            cout &lt;< "\n";
        }
    }
};

int main() {
    AdjacencyMatrix g(4);
    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 2);
    g.addEdge(2, 3);
    g.print();
    cout &lt;< "Edge (0,1): " << g.hasEdge(0,1) << "\n";
    cout &lt;< "Edge (1,3): " << g.hasEdge(1,3) << "\n";
    cout &lt;< "Neighbors of 2: ";
    for (int v : g.getNeighbors(2)) cout &lt;< v << " ";
    cout &lt;< "\n";
    return 0;
}
`

**Output:**
`
0 1 1 0
1 0 1 0
1 1 0 1
0 0 1 0
Edge (0,1): 1
Edge (1,3): 0
Neighbors of 2: 0 1 3
`

#### 2.6 Python Implementation

`python
class AdjacencyMatrix:
    def __init__(self, n, directed=False):
        self.n = n
        self.directed = directed
        self.mat = [[0] * n for _ in range(n)]

    def add_edge(self, u, v, w=1):
        if not (0 &lt;= u < self.n and 0 <= v < self.n):
            return
        self.mat[u][v] = w
        if not self.directed:
            self.mat[v][u] = w

    def has_edge(self, u, v):
        if not (0 &lt;= u < self.n and 0 <= v < self.n):
            return False
        return self.mat[u][v] != 0

    def get_neighbors(self, v):
        return [i for i in range(self.n) if self.mat[v][i] != 0]

    def __str__(self):
        return "\n".join(" ".join(str(x) for x in row) for row in self.mat)

g = AdjacencyMatrix(4)
g.add_edge(0, 1)
g.add_edge(0, 2)
g.add_edge(1, 2)
g.add_edge(2, 3)
print(g)
print("Edge (0,1):", g.has_edge(0, 1))
print("Edge (1,3):", g.has_edge(1, 3))
print("Neighbors of 2:", g.get_neighbors(2))
`

#### 2.7 Java Implementation

`java
import java.util.*;

class AdjacencyMatrix {
    private int n;
    private int[][] mat;
    private boolean directed;

    public AdjacencyMatrix(int n, boolean directed) {
        this.n = n;
        this.directed = directed;
        mat = new int[n][n];
    }

    public void addEdge(int u, int v, int w) {
        if (u &lt; 0 || u &gt;= n || v &lt; 0 || v &gt;= n) return;
        mat[u][v] = w;
        if (!directed) mat[v][u] = w;
    }

    public void addEdge(int u, int v) { addEdge(u, v, 1); }

    public boolean hasEdge(int u, int v) {
        if (u &lt; 0 || u &gt;= n || v &lt; 0 || v &gt;= n) return false;
        return mat[u][v] != 0;
    }

    public List&lt;Integer&gt; getNeighbors(int v) {
        List&lt;Integer&gt; res = new ArrayList&lt;>();
        if (v &lt; 0 || v &gt;= n) return res;
        for (int i = 0; i &lt; n; i++)
            if (mat[v][i] != 0) res.add(i);
        return res;
    }

    public void print() {
        for (int i = 0; i &lt; n; i++) {
            for (int j = 0; j &lt; n; j++)
                System.out.print(mat[i][j] + " ");
            System.out.println();
        }
    }

    public static void main(String[] args) {
        AdjacencyMatrix g = new AdjacencyMatrix(4, false);
        g.addEdge(0, 1); g.addEdge(0, 2);
        g.addEdge(1, 2); g.addEdge(2, 3);
        g.print();
        System.out.println("Edge (0,1): " + g.hasEdge(0,1));
        System.out.println("Edge (1,3): " + g.hasEdge(1,3));
        System.out.println("Neighbors of 2: " + g.getNeighbors(2));
    }
}
`

#### 2.8 Complexity Analysis

| Operation | Time | Why |
|-----------|------|-----|
| Space | \(O(V^2)\) | Stores \(n \times n\) entries regardless of actual edges |
| Add edge | \(O(1)\) | Direct index assignment |
| Remove edge | \(O(1)\) | Direct index assignment |
| Edge query | \(O(1)\) | Direct index lookup |
| Neighbor iteration | \(O(V)\) | Must scan entire row of \(n\) entries |
| Add vertex | \(O(V^2)\) | Must rebuild entire matrix with new row/column |

**Why \(O(V^2)\) space is problematic:** For \(V = 10,000\) (moderate social network), the matrix requires \(10^8\) entries. At 1 byte per entry = 100 MB. For \(V = 1,000,000\), it's \(10^{12}\) entries = impossible. Yet most real graphs have \(E \ll V^2\) (sparse), making adjacency lists the practical choice.

#### 2.9 Advantages & Disadvantages

| Aspect | Advantage | Disadvantage |
|--------|-----------|-------------|
| Speed | \(O(1)\) edge existence check | Slow neighbor iteration (\(O(V)\)) |
| Space | Simple, predictable allocation | \(O(V^2)\) — huge for large sparse graphs |
| Edge weight | Direct weight storage | Cannot represent parallel edges easily |
| Implementation | Trivial to code | Wastes memory on zeros for sparse graphs |
| Algorithms | Essential for Floyd-Warshall | Impractical for BFS/DFS on sparse graphs |

#### 2.10 Edge Cases

- **Single vertex:** \(1 \times 1\) matrix with [0] — works, addEdge does nothing.
- **Disconnected graph:** Most entries remain 0 — wastes space.
- **Self-loop:** mat[v][v] = 1 — allowed if input specifies it.
- **Multigraph (parallel edges):** Cannot represent directly with booleans. Use integers to count parallel edges, or store min weight.
- **Very large \(n\):** \(n > 10^5\) makes the matrix impossible — switch to adjacency list.

---


### 3. Adjacency List


**Real-World Analogy:** Imagine a phone book for a small town. Instead of a massive grid of every possible pair of residents, each person has a short list of people they know personally. Looking up "who does Alice know?" is fast — just read her list. But checking "does Alice know Bob?" requires scanning her list. This is how Facebook stores the social graph: each user's friend list is an adjacency list.

#### 3.1 Definition

An **adjacency list** is an array (or map) of lists. For each vertex \(v\), \(\text{adj}[v]\) stores a list of its neighbors (and optionally edge weights).

- Space: \(O(V + E)\) — only stores edges that exist.
- Edge query: \(O(\deg(v))\) — must scan the list.
- Neighbor iteration: \(O(\deg(v))\) — direct iteration.

#### 3.2 Algorithm Steps to Build an Adjacency List

1. Create an array `adj` of size \(n\), each initialized to an empty list.
2. For each edge \((u, v)\):
   - Append \(v\) to \(\text{adj}[u]\).
   - If undirected, append \(u\) to \(\text{adj}[v]\).
3. To query edge existence: search \(\text{adj}[u]\) for \(v\).
4. To iterate neighbors: traverse \(\text{adj}[v]\).

#### 3.3 Pseudocode

```
ADJACENCY_LIST(n, edges, directed):
    adj = new list of size n, each empty
    for each (u, v, [weight]) in edges:
        adj[u].append((v, weight) or v)
        if not directed:
            adj[v].append((u, weight) or u)
    return adj

HAS_EDGE(adj, u, v):
    for each neighbor in adj[u]:
        if neighbor == v:
            return true
    return false

GET_NEIGHBORS(adj, v):
    return adj[v]
```

#### 3.4 Dry Run

**Input:** \(n = 5\), directed edges: (0,1), (0,3), (1,2), (2,3), (3,4), (4,1)

**Step 1:** Initialize empty lists.

```
adj[0] = []
adj[1] = []
adj[2] = []
adj[3] = []
adj[4] = []
```

**Step 2:** Process (0,1). Append 1 to adj[0].

```
adj[0] = [1]
adj[1] = []
adj[2] = []
adj[3] = []
adj[4] = []
```

**Step 3:** Process (0,3). Append 3 to adj[0].

```
adj[0] = [1, 3]
adj[1] = []
adj[2] = []
adj[3] = []
adj[4] = []
```

**Step 4:** Process (1,2). Append 2 to adj[1].

```
adj[0] = [1, 3]
adj[1] = [2]
adj[2] = []
adj[3] = []
adj[4] = []
```

**Step 5:** Process (2,3). Append 3 to adj[2].

```
adj[0] = [1, 3]
adj[1] = [2]
adj[2] = [3]
adj[3] = []
adj[4] = []
```

**Step 6:** Process (3,4). Append 4 to adj[3].

```
adj[0] = [1, 3]
adj[1] = [2]
adj[2] = [3]
adj[3] = [4]
adj[4] = []
```

**Step 7:** Process (4,1). Append 1 to adj[4].

```
adj[0] = [1, 3]
adj[1] = [2]
adj[2] = [3]
adj[3] = [4]
adj[4] = [1]
```

**Neighbors of 0:** adj[0] = [1, 3]. **Edge (0,1)?** Scan adj[0] — found. **Edge (1,0)?** Scan adj[1] = [2] — not found (directed).

#### 3.5 C++ Implementation

```cpp
#include <iostream>
#include <vector>
#include <list>
#include <algorithm>
using namespace std;

class AdjacencyList {
    int n;
    vector<list<int>> adj;
    bool directed;
public:
    AdjacencyList(int n, bool dir = false) : n(n), directed(dir) {
        adj.resize(n);
    }

    void addEdge(int u, int v) {
        if (u < 0 || u >= n || v < 0 || v >= n) return;
        adj[u].push_back(v);
        if (!directed) adj[v].push_back(u);
    }

    bool hasEdge(int u, int v) {
        if (u < 0 || u >= n) return false;
        return find(adj[u].begin(), adj[u].end(), v) != adj[u].end();
    }

    list<int> getNeighbors(int v) {
        if (v < 0 || v >= n) return {};
        return adj[v];
    }

    void print() {
        for (int i = 0; i < n; i++) {
            cout << i << ": ";
            for (int v : adj[i]) cout << v << " ";
            cout << "\n";
        }
    }
};

int main() {
    AdjacencyList g(5, true);
    g.addEdge(0, 1); g.addEdge(0, 3);
    g.addEdge(1, 2); g.addEdge(2, 3);
    g.addEdge(3, 4); g.addEdge(4, 1);
    g.print();
    cout << "Edge (0,1): " << g.hasEdge(0,1) << "\n";
    cout << "Edge (1,0): " << g.hasEdge(1,0) << "\n";
    return 0;
}
```

**Output:**
```
0: 1 3
1: 2
2: 3
3: 4
4: 1
Edge (0,1): 1
Edge (1,0): 0
```

#### 3.6 Python Implementation

```python
class AdjacencyList:
    def __init__(self, n, directed=False):
        self.n = n
        self.directed = directed
        self.adj = [[] for _ in range(n)]

    def add_edge(self, u, v):
        if not (0 <= u < self.n and 0 <= v < self.n):
            return
        self.adj[u].append(v)
        if not self.directed:
            self.adj[v].append(u)

    def has_edge(self, u, v):
        if not (0 <= u < self.n):
            return False
        return v in self.adj[u]

    def get_neighbors(self, v):
        if not (0 <= v < self.n):
            return []
        return self.adj[v]

    def __str__(self):
        lines = []
        for i in range(self.n):
            lines.append(f"{i}: {' '.join(map(str, self.adj[i]))}")
        return "\n".join(lines)

g = AdjacencyList(5, True)
g.add_edge(0, 1); g.add_edge(0, 3)
g.add_edge(1, 2); g.add_edge(2, 3)
g.add_edge(3, 4); g.add_edge(4, 1)
print(g)
print("Edge (0,1):", g.has_edge(0, 1))
print("Edge (1,0):", g.has_edge(1, 0))
```

#### 3.7 Java Implementation

```java
import java.util.*;

class AdjacencyList {
    private int n;
    private List<List<Integer>> adj;
    private boolean directed;

    public AdjacencyList(int n, boolean directed) {
        this.n = n;
        this.directed = directed;
        adj = new ArrayList<>(n);
        for (int i = 0; i < n; i++) adj.add(new ArrayList<>());
    }

    public void addEdge(int u, int v) {
        if (u < 0 || u >= n || v < 0 || v >= n) return;
        adj.get(u).add(v);
        if (!directed) adj.get(v).add(u);
    }

    public boolean hasEdge(int u, int v) {
        if (u < 0 || u >= n) return false;
        return adj.get(u).contains(v);
    }

    public List<Integer> getNeighbors(int v) {
        if (v < 0 || v >= n) return new ArrayList<>();
        return adj.get(v);
    }

    public void print() {
        for (int i = 0; i < n; i++)
            System.out.println(i + ": " + adj.get(i));
    }

    public static void main(String[] args) {
        AdjacencyList g = new AdjacencyList(5, true);
        g.addEdge(0, 1); g.addEdge(0, 3);
        g.addEdge(1, 2); g.addEdge(2, 3);
        g.addEdge(3, 4); g.addEdge(4, 1);
        g.print();
        System.out.println("Edge (0,1): " + g.hasEdge(0,1));
        System.out.println("Edge (1,0): " + g.hasEdge(1,0));
    }
}
```

#### 3.8 Complexity Analysis

| Operation | Time | Why |
|-----------|------|-----|
| Space | \(O(V + E)\) | Array of \(V\) heads + total \(E\) nodes |
| Add edge | \(O(1)\) | Push to front/back of linked list |
| Remove edge | \(O(\deg(v))\) | Must find the target in the list |
| Edge query | \(O(\deg(v))\) | Linear scan of the neighbor list |
| Neighbor iteration | \(O(\deg(v))\) | Direct list traversal |
| Add vertex | \(O(1)\) | Append one empty list |

**Why \(O(V+E)\) is optimal:** Each edge appears exactly once (or twice for undirected) in the structure. No space is wasted on non-edges. For a sparse graph with \(V = 10^6\) and \(E = 10^7\), adjacency list uses ~\(10^7\) entries vs adjacency matrix requiring \(10^{12}\) entries — a 100,000x savings.

#### 3.9 Advantages & Disadvantages

| Aspect | Advantage | Disadvantage |
|--------|-----------|-------------|
| Space | \(O(V+E)\) — excellent for sparse graphs | Slightly more overhead per edge (pointer) |
| Speed | Fast neighbor iteration | Slow edge existence check |
| Flexibility | Easy to add/remove vertices | Harder to code than matrix |
| Weighted | Trivially stores (neighbor, weight) pairs | Slightly more complex |
| Algorithms | Natural for BFS, DFS, Dijkstra | Poor for Floyd-Warshall (matrix needed) |

#### 3.10 Edge Cases

- **Single vertex:** Empty list at adj[0] — works.
- **Isolated vertex:** Its list remains empty — no space wasted.
- **Self-loop:** adj[v] contains v — allowed, just push.
- **Multigraph:** Lists can contain duplicates — handle by checking before adding or counting occurrences.
- **Very dense graph:** If \(E \approx V^2\), lists become long (\(O(V)\) per list), and edge queries degrade to \(O(V)\). Switch to matrix.

---


### 4. Edge List


**Real-World Analogy:** Think of an airline's flight schedule — a simple list of all flights: (JFK, LHR, $800), (JFK, CDG, $650), (LHR, DXB, $400). No fancy indexing, no lookup structure — just the raw data. When you need to sort all edges by weight (as in Kruskal's algorithm for Minimum Spanning Tree), an edge list is the natural representation.

#### 4.1 Definition

An **edge list** is a simple list (array) of all edges. Each element is a tuple \((u, v)\) for unweighted graphs or \((u, v, w)\) for weighted graphs.

- Space: \(O(E)\) — the most compact representation.
- Edge query: \(O(E)\) — must scan the entire list.
- Neighbor iteration: \(O(E)\) — must scan entire list for matches.

#### 4.2 Algorithm Steps to Build an Edge List

1. Create an empty list `edges`.
2. For each edge \((u, v)\) in the input: append \((u, v)\) to `edges`.
3. For edge existence: scan all edges for a match.
4. For neighbors: scan all edges and collect those incident to \(v\).

#### 4.3 Pseudocode

```
EDGE_LIST(edges_input):
    return list of (u, v, [w]) for each input edge

HAS_EDGE(edge_list, u, v):
    for each (a, b) in edge_list:
        if a == u and b == v:
            return true
    return false

GET_NEIGHBORS(edge_list, v, directed):
    neighbors = []
    for each (a, b) in edge_list:
        if a == v: neighbors.append(b)
        if not directed and b == v: neighbors.append(a)
    return neighbors
```

#### 4.4 Dry Run

**Input:** Undirected edges: (0,1,5), (0,2,2), (1,2,1), (1,3,4), (2,3,3)

| Step | Action | Edge List State |
|------|--------|-----------------|
| 1 | Init | [] |
| 2 | Append (0,1,5) | [(0,1,5)] |
| 3 | Append (0,2,2) | [(0,1,5), (0,2,2)] |
| 4 | Append (1,2,1) | [(0,1,5), (0,2,2), (1,2,1)] |
| 5 | Append (1,3,4) | [(0,1,5), (0,2,2), (1,2,1), (1,3,4)] |
| 6 | Append (2,3,3) | [(0,1,5), (0,2,2), (1,2,1), (1,3,4), (2,3,3)] |

**Query hasEdge(1,3):** Scan list — found at index 3 → true.

**Neighbors of 2:** Scan all edges — (0,2), (1,2), (2,3) → [0, 1, 3].

#### 4.5 C++ Implementation

```cpp
#include <iostream>
#include <vector>
#include <tuple>
using namespace std;

class EdgeList {
    vector<tuple<int,int,int>> edges;
    bool directed;
public:
    EdgeList(bool dir = false) : directed(dir) {}

    void addEdge(int u, int v, int w = 1) {
        edges.push_back({u, v, w});
    }

    bool hasEdge(int u, int v) {
        for (auto [a, b, w] : edges)
            if (a == u && b == v) return true;
        if (!directed)
            for (auto [a, b, w] : edges)
                if (a == v && b == u) return true;
        return false;
    }

    vector<pair<int,int>> getNeighbors(int v) {
        vector<pair<int,int>> res;
        for (auto [a, b, w] : edges) {
            if (a == v) res.push_back({b, w});
            if (!directed && b == v) res.push_back({a, w});
        }
        return res;
    }

    const auto& getEdges() const { return edges; }
    int edgeCount() const { return edges.size(); }
};

int main() {
    EdgeList g(false);
    g.addEdge(0, 1, 5); g.addEdge(0, 2, 2);
    g.addEdge(1, 2, 1); g.addEdge(1, 3, 4);
    g.addEdge(2, 3, 3);
    cout << "Edge count: " << g.edgeCount() << "\n";
    cout << "Edge (1,3): " << g.hasEdge(1,3) << "\n";
    cout << "Neighbors of 2: ";
    for (auto [v, w] : g.getNeighbors(2))
        cout << "(" << v << ",w=" << w << ") ";
    cout << "\n";
    return 0;
}
```

**Output:**
```
Edge count: 5
Edge (1,3): 1
Neighbors of 2: (0,w=2) (1,w=1) (3,w=3)
```

#### 4.6 Python Implementation

```python
class EdgeList:
    def __init__(self, directed=False):
        self.directed = directed
        self.edges = []

    def add_edge(self, u, v, w=1):
        self.edges.append((u, v, w))

    def has_edge(self, u, v):
        for a, b, _ in self.edges:
            if a == u and b == v:
                return True
        if not self.directed:
            for a, b, _ in self.edges:
                if a == v and b == u:
                    return True
        return False

    def get_neighbors(self, v):
        res = []
        for a, b, w in self.edges:
            if a == v:
                res.append((b, w))
            if not self.directed and b == v:
                res.append((a, w))
        return res

g = EdgeList(False)
g.add_edge(0, 1, 5); g.add_edge(0, 2, 2)
g.add_edge(1, 2, 1); g.add_edge(1, 3, 4)
g.add_edge(2, 3, 3)
print("Edge count:", len(g.edges))
print("Edge (1,3):", g.has_edge(1, 3))
print("Neighbors of 2:", g.get_neighbors(2))
```

#### 4.7 Java Implementation

```java
import java.util.*;

class EdgeList {
    static class Edge {
        int u, v, w;
        Edge(int u, int v, int w) { this.u = u; this.v = v; this.w = w; }
    }

    private List<Edge> edges;
    private boolean directed;

    public EdgeList(boolean directed) {
        this.directed = directed;
        edges = new ArrayList<>();
    }

    public void addEdge(int u, int v, int w) { edges.add(new Edge(u, v, w)); }

    public boolean hasEdge(int u, int v) {
        for (Edge e : edges) if (e.u == u && e.v == v) return true;
        if (!directed) for (Edge e : edges) if (e.u == v && e.v == u) return true;
        return false;
    }

    public List<String> getNeighbors(int v) {
        List<String> res = new ArrayList<>();
        for (Edge e : edges) {
            if (e.u == v) res.add("(" + e.v + ",w=" + e.w + ")");
            if (!directed && e.v == v) res.add("(" + e.u + ",w=" + e.w + ")");
        }
        return res;
    }

    public static void main(String[] args) {
        EdgeList g = new EdgeList(false);
        g.addEdge(0,1,5); g.addEdge(0,2,2);
        g.addEdge(1,2,1); g.addEdge(1,3,4);
        g.addEdge(2,3,3);
        System.out.println("Edge count: " + g.edges.size());
        System.out.println("Edge (1,3): " + g.hasEdge(1,3));
        System.out.println("Neighbors of 2: " + g.getNeighbors(2));
    }
}
```

#### 4.8 Complexity Analysis

| Operation | Time | Why |
|-----------|------|-----|
| Space | \(O(E)\) | Only stores edges, no per-vertex overhead |
| Add edge | \(O(1)\) | Append to array/list |
| Edge query | \(O(E)\) | Linear scan of entire list |
| Neighbor iteration | \(O(E)\) | Must scan all edges |
| Remove edge | \(O(E)\) | Find + shift/remove |
| Sort by weight | \(O(E \log E)\) | Standard sort on edge list |

**Why \(O(E)\) space is minimal:** No per-vertex data structure at all. For memory-constrained environments or when you mainly need to sort edges (Kruskal's MST), this is ideal.

#### 4.9 Advantages & Disadvantages

| Aspect | Advantage | Disadvantage |
|--------|-----------|-------------|
| Space | Most compact representation | Cannot quickly answer adjacency queries |
| Sorting | Natural for sorting by weight | No vertex-centric operations |
| I/O | Perfect for file storage | Must rebuild for each algorithm run |
| Simplicity | Trivial to code | Terrible for BFS/DFS |

#### 4.10 Edge Cases

- **Empty graph:** Empty list — works.
- **Single edge:** List with one element — works.
- **Duplicate edges:** List may contain duplicates — filter or tolerate.
- **Very large edge count:** \(O(E)\) scan becomes slow — use adjacency list for frequent queries.

---


### 5. Degree Calculation


**Real-World Analogy:** In a Twitter network, your "out-degree" is the number of people you follow, and your "in-degree" is the number of people who follow you. On Facebook (undirected), your "degree" is just your number of friends. The "degree sum theorem" says every handshake increases the total degree count by 2 — if you sum everyone's friends, you get twice the number of handshakes.

#### 5.1 Definition

- **Degree** (undirected): \(\deg(v)\) = number of edges incident to vertex \(v\).
- **In-degree** (directed): \(\text{in}(v)\) = number of edges entering \(v\).
- **Out-degree** (directed): \(\text{out}(v)\) = number of edges leaving \(v\).

**Handshaking Lemma:** \(\sum_{v \in V} \deg(v) = 2|E|\). Each edge contributes 1 to the degree of each endpoint.

#### 5.2 Algorithm Steps for Degree Calculation (Adjacency List)

1. Initialize arrays: `degree` (or `inDegree`, `outDegree`) of size \(n\) with zeros.
2. For each vertex \(u\):
   - For each neighbor \(v\) in \(\text{adj}[u]\):
     - Increment \(\text{outDegree}[u]\).
     - If directed, increment \(\text{inDegree}[v]\).
3. For undirected, degree = outDegree (same as inDegree).

#### 5.3 Pseudocode

```
CALCULATE_DEGREES(adj, directed):
    n = len(adj)
    outDeg = new int[n]  // all 0
    inDeg = new int[n]   // all 0

    for u = 0 to n-1:
        for each v in adj[u]:
            outDeg[u]++
            if directed:
                inDeg[v]++

    if not directed:
        return outDeg   // same as degree
    else:
        return (inDeg, outDeg)
```

#### 5.4 Dry Run

**Input:** Directed adjacency list from earlier example.

```
adj[0] = [1, 3]
adj[1] = [2]
adj[2] = [3]
adj[3] = [4]
adj[4] = [1]
```

| u | v | outDeg[u]++ | inDeg[v]++ |
|---|---|-------------|------------|
| 0 | 1 | outDeg[0]=1 | inDeg[1]=1 |
| 0 | 3 | outDeg[0]=2 | inDeg[3]=1 |
| 1 | 2 | outDeg[1]=1 | inDeg[2]=1 |
| 2 | 3 | outDeg[2]=1 | inDeg[3]=2 |
| 3 | 4 | outDeg[3]=1 | inDeg[4]=1 |
| 4 | 1 | outDeg[4]=1 | inDeg[1]=2 |

**Result:**

| Vertex | Out-Degree | In-Degree |
|--------|-----------|-----------|
| 0 | 2 | 0 |
| 1 | 1 | 2 |
| 2 | 1 | 1 |
| 3 | 1 | 2 |
| 4 | 1 | 1 |

**Verification:** Sum of out = \(2+1+1+1+1 = 6\), Sum of in = \(0+2+1+2+1 = 6\). \(|E| = 6\). \(\sum \text{out} = \sum \text{in} = |E| = 6\) ✓

#### 5.5 C++ Implementation

```cpp
#include <iostream>
#include <vector>
#include <list>
using namespace std;

void printDegrees(const vector<list<int>>& adj, bool directed) {
    int n = adj.size();
    vector<int> outDeg(n, 0), inDeg(n, 0);

    for (int u = 0; u < n; u++)
        for (int v : adj[u]) {
            outDeg[u]++;
            if (directed) inDeg[v]++;
        }

    for (int i = 0; i < n; i++) {
        if (directed)
            cout << "Vertex " << i << ": in=" << inDeg[i]
                 << ", out=" << outDeg[i] << "\n";
        else
            cout << "Vertex " << i << ": deg=" << outDeg[i] << "\n";
    }
}

int main() {
    vector<list<int>> adj(5);
    adj[0] = {1, 3}; adj[1] = {2};
    adj[2] = {3};    adj[3] = {4};
    adj[4] = {1};

    cout << "Directed degrees:\n";
    printDegrees(adj, true);
    return 0;
}
```

#### 5.6 Python Implementation

```python
def print_degrees(adj, directed):
    n = len(adj)
    out_deg = [0] * n
    in_deg = [0] * n

    for u in range(n):
        for v in adj[u]:
            out_deg[u] += 1
            if directed:
                in_deg[v] += 1

    for i in range(n):
        if directed:
            print(f"Vertex {i}: in={in_deg[i]}, out={out_deg[i]}")
        else:
            print(f"Vertex {i}: deg={out_deg[i]}")

adj = [[1, 3], [2], [3], [4], [1]]
print("Directed degrees:")
print_degrees(adj, True)
```

#### 5.7 Java Implementation

```java
import java.util.*;

class DegreeCalc {
    static void printDegrees(List<List<Integer>> adj, boolean directed) {
        int n = adj.size();
        int[] outDeg = new int[n];
        int[] inDeg = new int[n];

        for (int u = 0; u < n; u++)
            for (int v : adj.get(u)) {
                outDeg[u]++;
                if (directed) inDeg[v]++;
            }

        for (int i = 0; i < n; i++) {
            if (directed)
                System.out.println("Vertex " + i + ": in=" + inDeg[i]
                    + ", out=" + outDeg[i]);
            else
                System.out.println("Vertex " + i + ": deg=" + outDeg[i]);
        }
    }

    public static void main(String[] args) {
        List<List<Integer>> adj = Arrays.asList(
            Arrays.asList(1, 3), Arrays.asList(2),
            Arrays.asList(3), Arrays.asList(4),
            Arrays.asList(1));
        System.out.println("Directed degrees:");
        printDegrees(adj, true);
    }
}
```

#### 5.8 Complexity Analysis

| Operation | Time | Why |
|-----------|------|-----|
| Undirected degree | \(O(V+E)\) | Visit each neighbor exactly once |
| Directed in/out-degree | \(O(V+E)\) | Same traversal, track both counters |
| Adjacency matrix degree | \(O(V^2)\) | Must scan entire row (and column for in-degree) |

#### 5.9 Advantages & Disadvantages

| Aspect | Advantage | Disadvantage |
|--------|-----------|-------------|
| Computation | Linear in graph size | Must iterate all edges |
| Matrix approach | Direct row-sum for degree | \(O(V^2)\) — poor for sparse |
| Degree sum theorem | Built-in verification | — |

#### 5.10 Edge Cases

- **Isolated vertex:** Degree 0 — correct.
- **Complete graph:** Degree = \(n-1\) for all vertices.
- **Self-loop:** Counts as 2 for undirected degree (adds 1 to each end = same vertex twice), 1 for out-degree in directed.
- **Zero-vertex graph:** Trivial — no degrees to compute.

---


### 6. Complete Graph


**Real-World Analogy:** Imagine a conference where every attendee shakes hands with every other attendee exactly once. If there are \(n\) people, the total number of handshakes is \(n(n-1)/2\). This is a **complete graph** — every vertex is directly connected to every other vertex. This represents the maximum possible connections in a network.

#### 6.1 Definition

A **complete graph** \(K_n\) is an undirected graph where every pair of distinct vertices is connected by an edge.

- \(|E| = \frac{n(n-1)}{2}\)
- \(\deg(v) = n-1\) for all vertices \(v\)
- For directed complete graphs: \(|E| = n(n-1)\) (both directions for every pair)

#### 6.2 Properties

| Property | Value |
|----------|-------|
| Number of edges | \(n(n-1)/2\) |
| Degree of each vertex | \(n-1\) |
| Diameter | 1 (any vertex reaches any other in one hop) |
| Chromatic number | \(n\) |
| Connectivity | \(n-1\) (vertex connectivity) |

#### 6.3 Algorithm Steps to Check if a Graph is Complete

1. Count the number of edges \(|E|\) in the graph.
2. If \(|E| = n(n-1)/2\) for undirected (or \(n(n-1)\) for directed) → complete.
3. Alternative: For each vertex, check that \(\deg(v) = n-1\).

#### 6.4 Pseudocode

```
IS_COMPLETE(adj):
    n = len(adj)
    for each vertex v in 0..n-1:
        deg = len(adj[v])
        if self-loop present: deg--  // self-loop should not count twice
        if deg != n - 1:
            return false
    return true
```

#### 6.5 Dry Run

**Check if 4-vertex graph is complete.** Adjacency list:
```
adj[0] = [1, 2, 3]
adj[1] = [0, 2, 3]
adj[2] = [0, 1, 3]
adj[3] = [0, 1, 2]
```

| Vertex | deg(v) | n-1 | Complete? |
|--------|--------|-----|------|
| 0 | 3 | 3 | Yes |
| 1 | 3 | 3 | Yes |
| 2 | 3 | 3 | Yes |
| 3 | 3 | 3 | Yes |

**Result:** Complete graph \(K_4\).

#### 6.6 C++ Implementation

```cpp
#include <iostream>
#include <vector>
#include <list>
using namespace std;

bool isComplete(const vector<list<int>>& adj) {
    int n = adj.size();
    for (int i = 0; i < n; i++) {
        if ((int)adj[i].size() != n - 1) return false;
    }
    return true;
}

int main() {
    vector<list<int>> adj(4);
    adj[0] = {1,2,3}; adj[1] = {0,2,3};
    adj[2] = {0,1,3}; adj[3] = {0,1,2};
    cout << "Is complete: " << isComplete(adj) << "\n";

    vector<list<int>> adj2(4);
    adj2[0] = {1,2}; adj2[1] = {0,2};
    adj2[2] = {0,1}; adj2[3] = {0};
    cout << "Is complete: " << isComplete(adj2) << "\n";
    return 0;
}
```

**Output:**
```
Is complete: 1
Is complete: 0
```

#### 6.7 Python Implementation

```python
def is_complete(adj):
    n = len(adj)
    return all(len(adj[i]) == n - 1 for i in range(n))

adj = [[1, 2, 3], [0, 2, 3], [0, 1, 3], [0, 1, 2]]
print("Is complete:", is_complete(adj))

adj2 = [[1, 2], [0, 2], [0, 1], [0]]
print("Is complete:", is_complete(adj2))
```

#### 6.8 Java Implementation

```java
import java.util.*;

class CompleteGraph {
    static boolean isComplete(List<List<Integer>> adj) {
        int n = adj.size();
        for (int i = 0; i < n; i++)
            if (adj.get(i).size() != n - 1) return false;
        return true;
    }

    public static void main(String[] args) {
        List<List<Integer>> adj = Arrays.asList(
            Arrays.asList(1,2,3), Arrays.asList(0,2,3),
            Arrays.asList(0,1,3), Arrays.asList(0,1,2));
        System.out.println("Is complete: " + isComplete(adj));

        List<List<Integer>> adj2 = Arrays.asList(
            Arrays.asList(1,2), Arrays.asList(0,2),
            Arrays.asList(0,1), Arrays.asList(0));
        System.out.println("Is complete: " + isComplete(adj2));
    }
}
```

#### 6.9 Complexity Analysis

| Operation | Time | Why |
|-----------|------|-----|
| Check completeness | \(O(V)\) | Just check degree of each vertex |
| Count edges in complete graph | \(O(1)\) | Formula \(n(n-1)/2\) |
| Build complete graph | \(O(V^2)\) | Must add all \(n(n-1)/2\) edges |

#### 6.10 Edge Cases

- **n = 0:** Trivially complete (no vertices).
- **n = 1:** Single vertex with no edges — vacuously complete (no pairs to connect).
- **n = 2:** One edge needed — K2 is a single edge.

---


### 7. Bipartite Graph


**Real-World Analogy:** Think of a dating app. There are two sets: men and women. Connections (matches) only exist between the sets, never within a set. This is a **bipartite graph**. Another example: in a streaming service, users and movies form a bipartite graph — users rate movies, but users don't rate other users and movies don't rate movies. A bipartite graph can be **2-colored** — paint all vertices red or blue such that no edge connects same-colored vertices.

#### 7.1 Definition

A graph \(G = (V, E)\) is **bipartite** if \(V\) can be partitioned into two disjoint sets \(U\) and \(W\) such that every edge connects a vertex in \(U\) to a vertex in \(W\).

- Equivalent to: the graph is **2-colorable**.
- Equivalent to: the graph contains **no odd-length cycles**.
- A graph that contains an odd cycle is **not bipartite**.

#### 7.2 Algorithm Steps (BFS-based 2-Coloring)

1. Initialize `color` array of size \(n\) with -1 (uncolored).
2. For each vertex \(v\) (handles disconnected graphs):
   - If uncolored, set `color[v] = 0` and BFS from \(v\).
   - For each neighbor \(u\) of current node:
     - If uncolored, set `color[u] = 1 - color[current]`.
     - If colored and same as current → not bipartite.
3. If BFS completes without conflict → bipartite.

#### 7.3 Pseudocode

```
IS_BIPARTITE(adj):
    n = len(adj)
    color = [-1] * n

    for start = 0 to n-1:
        if color[start] != -1: continue
        queue = [start]
        color[start] = 0

        while queue not empty:
            v = queue.pop(0)
            for each u in adj[v]:
                if color[u] == -1:
                    color[u] = 1 - color[v]
                    queue.push(u)
                else if color[u] == color[v]:
                    return false  // conflict
    return true
```

#### 7.4 Dry Run

**Graph:** 4 vertices. Edges: (0,1), (0,2), (1,3), (2,3). Is it bipartite?

```
adj[0] = [1, 2]
adj[1] = [0, 3]
adj[2] = [0, 3]
adj[3] = [1, 2]
```

| Step | Queue | Vertex v | color[v] | Neighbor u | color[u] | Action |
|------|-------|----------|----------|------------|----------|--------|
| 1 | [0] | — | — | — | — | color[0]=0 |
| 2 | [0] | 0 | 0 | 1 | -1 | color[1]=1, queue=[1] |
| 3 | [1] | 0 | 0 | 2 | -1 | color[2]=1, queue=[1,2] |
| 4 | [1,2] | 1 | 1 | 0 | 0 (OK) | — |
| 5 | [2] | 1 | 1 | 3 | -1 | color[3]=0, queue=[2,3] |
| 6 | [2,3] | 2 | 1 | 0 | 0 (OK) | — |
| 7 | [3] | 2 | 1 | 3 | 0 (OK) | — |
| 8 | [3] | 3 | 0 | 1 | 1 (OK) | — |
| 9 | [] | 3 | 0 | 2 | 1 (OK) | — |

**Result:** Bipartite! Partitions: \(U = \{0, 3\}\) (color 0), \(W = \{1, 2\}\) (color 1).

**Non-bipartite example:** Triangle (3-cycle): edges (0,1), (1,2), (2,0). Try coloring 0=0, 1=1, but 2 adjacent to both 0 (color 0) and 1 (color 1) — conflict! Contains odd cycle → not bipartite.

#### 7.5 C++ Implementation

```cpp
#include <iostream>
#include <vector>
#include <list>
#include <queue>
using namespace std;

bool isBipartite(const vector<list<int>>& adj) {
    int n = adj.size();
    vector<int> color(n, -1);

    for (int start = 0; start < n; start++) {
        if (color[start] != -1) continue;
        queue<int> q;
        q.push(start);
        color[start] = 0;

        while (!q.empty()) {
            int v = q.front(); q.pop();
            for (int u : adj[v]) {
                if (color[u] == -1) {
                    color[u] = 1 - color[v];
                    q.push(u);
                } else if (color[u] == color[v]) {
                    return false;
                }
            }
        }
    }
    return true;
}

int main() {
    vector<list<int>> adj(4);
    adj[0] = {1,2}; adj[1] = {0,3};
    adj[2] = {0,3}; adj[3] = {1,2};
    cout << "Bipartite: " << isBipartite(adj) << "\n";

    vector<list<int>> triangle(3);
    triangle[0] = {1,2}; triangle[1] = {0,2}; triangle[2] = {0,1};
    cout << "Triangle is bipartite: " << isBipartite(triangle) << "\n";
    return 0;
}
```

**Output:**
```
Bipartite: 1
Triangle is bipartite: 0
```

#### 7.6 Python Implementation

```python
from collections import deque

def is_bipartite(adj):
    n = len(adj)
    color = [-1] * n

    for start in range(n):
        if color[start] != -1:
            continue
        q = deque([start])
        color[start] = 0

        while q:
            v = q.popleft()
            for u in adj[v]:
                if color[u] == -1:
                    color[u] = 1 - color[v]
                    q.append(u)
                elif color[u] == color[v]:
                    return False
    return True

adj = [[1, 2], [0, 3], [0, 3], [1, 2]]
print("Bipartite:", is_bipartite(adj))

triangle = [[1, 2], [0, 2], [0, 1]]
print("Triangle is bipartite:", is_bipartite(triangle))
```

#### 7.7 Java Implementation

```java
import java.util.*;

class BipartiteCheck {
    static boolean isBipartite(List<List<Integer>> adj) {
        int n = adj.size();
        int[] color = new int[n];
        Arrays.fill(color, -1);

        for (int start = 0; start < n; start++) {
            if (color[start] != -1) continue;
            Queue<Integer> q = new LinkedList<>();
            q.add(start);
            color[start] = 0;

            while (!q.isEmpty()) {
                int v = q.poll();
                for (int u : adj.get(v)) {
                    if (color[u] == -1) {
                        color[u] = 1 - color[v];
                        q.add(u);
                    } else if (color[u] == color[v]) {
                        return false;
                    }
                }
            }
        }
        return true;
    }

    public static void main(String[] args) {
        List<List<Integer>> adj = Arrays.asList(
            Arrays.asList(1,2), Arrays.asList(0,3),
            Arrays.asList(0,3), Arrays.asList(1,2));
        System.out.println("Bipartite: " + isBipartite(adj));

        List<List<Integer>> tri = Arrays.asList(
            Arrays.asList(1,2), Arrays.asList(0,2), Arrays.asList(0,1));
        System.out.println("Triangle bipartite: " + isBipartite(tri));
    }
}
```

#### 7.8 Complexity Analysis

| Operation | Time | Why |
|-----------|------|-----|
| 2-coloring check (BFS) | \(O(V+E)\) | Each vertex/edge visited once |
| 2-coloring check (matrix) | \(O(V^2)\) | Each row must be scanned |
| Space (BFS queue) | \(O(V)\) | Queue holds up to one level |

**Why BFS works:** BFS explores level by level. In a bipartite graph, all vertices at even depth get color 0, odd depth get color 1. An edge connecting same-depth vertices = odd cycle = not bipartite.

#### 7.9 Advantages & Disadvantages

| Aspect | Advantage | Disadvantage |
|--------|-----------|-------------|
| Detection | \(O(V+E)\) BFS is efficient | Requires adjacency list for linear time |
| Usefulness | Models matching, assignment problems | Triangle graph (odd cycle) breaks it |
| Intuition | 2-coloring is easy to understand | Disconnected graphs need outer loop |

#### 7.10 Edge Cases

- **Single vertex:** No edges → trivially bipartite.
- **Empty graph:** No edges → bipartite (all vertices same color).
- **Disconnected bipartite:** Each component independently 2-colorable.
- **Self-loop:** A self-loop creates a cycle of length 1 (odd) → not bipartite.

---


## Adjacency Matrix vs List vs Edge List — Comparison Table

| Feature | Adjacency Matrix | Adjacency List | Edge List |
|---------|-----------------|---------------|-----------|
| Space | \(O(V^2)\) | \(O(V+E)\) | \(O(E)\) |
| Edge existence query | \(O(1)\) | \(O(\deg(v))\) | \(O(E)\) |
| Neighbor iteration | \(O(V)\) | \(O(\deg(v))\) | \(O(E)\) |
| Add edge | \(O(1)\) | \(O(1)\) | \(O(1)\) |
| Remove edge | \(O(1)\) | \(O(\deg(v))\) | \(O(E)\) |
| Add vertex | \(O(V^2)\) | \(O(1)\) | \(O(1)\) |
| Sort edges by weight | Not applicable | Not applicable | \(O(E \log E)\) |
| Degree calculation | \(O(V)\) per vertex | \(O(\deg(v))\) per vertex | \(O(E)\) |
| Memory per edge | 1 bit (or 4–8 bytes weight) | 8–16 bytes (node + pointer) | 12–24 bytes (tuple) |
| Cache friendliness | Good (contiguous) | Poor (scattered nodes) | Good (contiguous) |
| Best for | Dense graphs, Floyd-Warshall | Sparse graphs, BFS, DFS, Dijkstra | Kruskal's MST, I/O, sorting |

**Decision Rule:** If you need fast edge existence checks AND the graph is dense → matrix. If you mostly iterate neighbors AND the graph is sparse → adjacency list. If you're reading from a file or sorting edges → edge list.

---

## Concept Comparison Table

| Feature | Adjacency Matrix | Adjacency List | Edge List |
|---------|-----------------|---------------|-----------|
| Space | \(O(V^2)\) | \(O(V+E)\) | \(O(E)\) |
| Edge query | \(O(1)\) | \(O(\deg(v))\) | \(O(E)\) |
| Neighbor iteration | \(O(V)\) | \(O(\deg(v))\) | \(O(E)\) |
| Add edge | \(O(1)\) | \(O(1)\) | \(O(1)\) |
| Remove edge | \(O(1)\) | \(O(\deg(v))\) | \(O(E)\) |
| Best for | Dense graphs | Sparse graphs | I/O, simple storage |

## Quick Reference: Graph Terminology

| Term | Definition |
|------|------------|
| Degree (undirected) | Number of edges incident to a vertex |
| In-degree (directed) | Number of edges entering a vertex |
| Out-degree (directed) | Number of edges leaving a vertex |
| Path | Sequence of vertices connected by edges |
| Simple path | Path with no repeated vertices |
| Cycle | Path where first = last, no repeated vertices |
| Connected graph | Path exists between every pair of vertices |
| Connected component | Maximal connected subgraph |
| Complete graph \(K_n\) | Every pair of vertices is connected by an edge |
| Bipartite graph | Vertices divided into two sets; edges only between sets |
| Dense graph | \(E \approx V^2\) |
| Sparse graph | \(E \ll V^2\) |
| Tree | Connected acyclic graph, \(E = V - 1\) |
| Subgraph | Subset of vertices and edges from a graph |
| Spanning tree | Subgraph that is a tree covering all vertices |

## Cross-Application Matrix

| Domain | Graph Type | Edge Meaning | Representation Choice |
|--------|-----------|--------------|----------------------|
| Social network (Facebook) | Undirected | Friendship | Adjacency list (sparse) |
| Social network (Twitter) | Directed | Follow | Adjacency list (sparse) |
| Web pages | Directed | Hyperlink | Adjacency list (sparse) |
| Road network | Weighted undirected | Distance / time | Adjacency list (sparse) |
| Computer network | Weighted directed | Bandwidth / latency | Adjacency list (sparse) |
| Prerequisite chain | Directed acyclic | Course dependency | Adjacency list (sparse) |
| Recommendation | Weighted bipartite | User-item affinity | Adjacency list with hash sets |
| Flight routes | Weighted directed | Cost / duration | Edge list (for sorting by cost) |
| Protein interaction | Undirected | Binding | Adjacency list (sparse) |
| Electrical grid | Weighted undirected | Impedance | Adjacency matrix (dense) |

---

## Interview Corner

### 1. Choosing the Right Representation for Different Problem Types

| Problem Type | Recommended Representation | Why |
|-------------|--------------------------|-----|
| BFS / DFS / shortest path on sparse graph | Adjacency list | Fast neighbor iteration |
| Floyd-Warshall (all-pairs shortest path) | Adjacency matrix | Needs \(O(1)\) access to all pairs |
| Kruskal's MST | Edge list | Needs to sort edges by weight |
| Dijkstra (single-source) | Adjacency list | Need fast neighbor access |
| Check if graph has any edge with weight &lt; threshold | Adjacency matrix | \(O(1)\) random access |
| Transitive closure (reachability) | Adjacency matrix (bit-set optimized) | Matrix multiplication |
| Graph stored in file / database | Edge list | Simple serialization |

### 2. Detect Cycle in a Directed Graph

**Approach:** Use DFS with three-state coloring (0 = unvisited, 1 = in current path, 2 = done).

```python
def has_cycle_directed(adj):
    n = len(adj)
    state = [0] * n  # 0=unvisited, 1=in-stack, 2=done

    def dfs(v):
        if state[v] == 1: return True  # back edge → cycle
        if state[v] == 2: return False
        state[v] = 1
        for u in adj[v]:
            if dfs(u): return True
        state[v] = 2
        return False

    for v in range(n):
        if state[v] == 0:
            if dfs(v): return True
    return False
```

**Complexity:** \(O(V+E)\) time, \(O(V)\) space for recursion stack.

### 3. Detect Cycle in an Undirected Graph

**Approach:** DFS with parent tracking — if we find an edge to an already-visited vertex that is NOT the parent, we have a cycle.

```python
def has_cycle_undirected(adj):
    n = len(adj)
    visited = [False] * n

    def dfs(v, parent):
        visited[v] = True
        for u in adj[v]:
            if not visited[u]:
                if dfs(u, v): return True
            elif u != parent:  # visited and not parent → cycle
                return True
        return False

    for v in range(n):
        if not visited[v]:
            if dfs(v, -1): return True
    return False
```

**Complexity:** \(O(V+E)\) time, \(O(V)\) space.

### 4. Topological Sort (DAG)

**Approach (Kahn's algorithm — BFS-based):**

```python
from collections import deque

def topological_sort(adj):
    n = len(adj)
    in_deg = [0] * n
    for u in range(n):
        for v in adj[u]:
            in_deg[v] += 1

    q = deque([i for i in range(n) if in_deg[i] == 0])
    result = []

    while q:
        v = q.popleft()
        result.append(v)
        for u in adj[v]:
            in_deg[u] -= 1
            if in_deg[u] == 0:
                q.append(u)

    if len(result) != n:
        return []  # cycle detected → no valid topological order
    return result
```

**Complexity:** \(O(V+E)\) time, \(O(V)\) space.

**Real-world use:** Course prerequisite scheduling, build system dependency resolution, task scheduling.

---

## Applications in Real Systems

### 1. Google Maps — Road Networks

Google Maps models the road network as a **large, sparse, weighted, directed graph**.
- **Vertices:** Intersections and waypoints
- **Edges:** Road segments (directed for one-way streets)
- **Weights:** Travel time (dynamic — adjusts for traffic), distance
- **Algorithms:** Dijkstra / A* for shortest path, contraction hierarchies for precomputation
- **Scale:** Billions of vertices, processed in milliseconds via precomputed landmarks

> "Finding the shortest path between two points in a city is a graph problem — maps are just graphs with geographic coordinates attached to each vertex."

### 2. Facebook / Instagram — Social Graphs

Facebook's social graph has **3+ billion vertices** (users) and **trillions of edges** (friendships).
- **Graph type:** Undirected (friendship), directed (follow), weighted (interaction frequency)
- **Representation:** Custom adjacency list (TAO — distributed graph store built on MySQL)
- **Operations:** Friend suggestions (triangle counting), feed ranking (edge weight = interaction recency), community detection (connected components)
- **Challenge:** Sharding a graph across thousands of machines while maintaining locality

> "When you see 'People You May Know', Facebook is counting triangles in the social graph to suggest friends-of-friends."

### 3. PageRank — Web Graph

Google's original PageRank algorithm treats the web as a **directed graph** of pages connected by hyperlinks.
- **Vertices:** Webpages
- **Edges:** Hyperlinks (directed)
- **Algorithm:** Random walk — a page is "important" if many important pages link to it
- **Mathematically:** Eigenvector computation on the adjacency matrix (normalized)
- **Scale:** 100+ trillion URLs indexed

> "PageRank is why graphs matter more than any other data structure — it turned the web into a graph and built a $2 trillion company on top."

### 4. OSPF — Routing Protocols

OSPF (Open Shortest Path First) uses **Dijkstra's algorithm** on a **weighted, directed graph** to route IP packets.
- **Vertices:** Routers
- **Edges:** Network links
- **Weights:** Link cost (often inverse of bandwidth)
- **Real-time:** Recalculates when topology changes (link failure, new router)
- **Scale:** Thousands of routers in a single OSPF area

### 5. Other Notable Applications

| System | Graph Model | What It Solves |
|--------|-------------|----------------|
| Netflix/MovieLens | Weighted bipartite (user → movie) | Collaborative filtering recommendations |
| GitHub dependency graph | Directed acyclic | Version resolution, vulnerability propagation |
| LinkedIn | Directed (connections, follows) | 2nd/3rd degree network, recruiter search |
| Amazon product graph | Undirected weighted ("customers who bought this also bought") | Product recommendations |
| Molecular chemistry | Undirected (atoms → bonds) | Drug discovery, molecule property prediction |
| Neural networks | Weighted directed (neurons → synapses) | Deep learning model computation |

---

## Pro Tips

- **Choose representation based on density**: For dense graphs (\(E \approx V^2\)), use an adjacency matrix. For sparse graphs (\(E \ll V^2\)), use an adjacency list. Most real-world graphs are sparse.
- **Transpose of a directed graph**: Reverse the direction of every edge. This is useful for Kosaraju's SCC algorithm. Building the transpose from an adjacency list is \(O(V+E)\).
- **Graph is a tree if**: (a) it's connected, and (b) \(|E| = |V| - 1\). If either condition fails, it's not a tree.
- **Degree sum theorem**: The sum of all degrees in an undirected graph is \(2|E|\). Each edge contributes 1 to the degree of each of its endpoints. This is useful for validation and handshaking lemma problems.
- **Bipartite ↔ 2-colorable ↔ no odd cycles**: These three statements are equivalent. If asked "is this graph bipartite?" in an interview, immediately think BFS + 2-coloring.
- **Always check for disconnected components**: BFS/cycle-detection/bipartite-check all need an outer loop over all vertices to handle disconnected graphs.

---

## One-Sentence Takeaways

- A graph \(G = (V, E)\) consists of vertices and edges connecting them.
- Adjacency matrix: \(O(1)\) edge queries, \(O(V^2)\) space — best for dense graphs.
- Adjacency list: \(O(V+E)\) space — preferred for sparse graphs (most real-world).
- Edge list: \(O(E)\) space — the most compact, ideal for I/O and sorting.
- Directed graphs have ordered edges; undirected graphs have unordered edges.
- Weighted graphs assign a weight (cost) to each edge.
- A complete graph has all possible edges: \(|E| = n(n-1)/2\).
- A bipartite graph is 2-colorable with no odd cycles.
- The Handshaking Lemma: \(\sum \deg(v) = 2|E|\).

---

## Common Mistakes & GFG Deepening

### Common Mistakes (GFG-Style)

| Mistake | Why It's Wrong | Correct Approach |
|---------|----------------|------------------|
| Confusing adjacency list vs matrix memory | Matrix is always O(V²) even for sparse graphs; list saves no memory for dense graphs | Use adjacency list for sparse (|E| ≪ |V|²), matrix for dense graphs |
| Forgetting that BFS uses a queue and DFS uses a stack | Using a stack for BFS gives wrong order (like DFS) | BFS = Queue, DFS = Stack (explicit or recursion) |
| Not handling disconnected components in traversal | BFS/DFS starting from one node won't reach all nodes | Loop over all vertices, run BFS/DFS from unvisited ones |
| Confusing indegree and outdegree in directed graphs | indegree edges coming in, outdegree edges going out | indegree = incoming count, outdegree = outgoing count |
| Misinterpreting "complete graph" vs "connected graph" | Complete = every pair has an edge; connected = there's a path between any two | K_n has n(n-1)/2 edges for undirected, n(n-1) for directed |
| Forgetting to mark visited nodes in DFS | Without visited array, infinite loop on cyclic graphs | Mark visited before processing neighbors; or use a set |
| Assuming a DAG has a unique topological order | Many valid orders exist for the same DAG | Any topological sort is valid; Kahn's algorithm may produce different orders based on removal order |

### TypeScript Graph Representation

```typescript
// Adjacency List
class Graph {
    private adjList: Map<number, number[]>;

    constructor(private vertices: number) {
        this.adjList = new Map();
        for (let i = 0; i < vertices; i++) this.adjList.set(i, []);
    }

    addEdge(u: number, v: number, directed: boolean = false): void {
        this.adjList.get(u)!.push(v);
        if (!directed) this.adjList.get(v)!.push(u);
    }

    hasEdge(u: number, v: number): boolean {
        return this.adjList.get(u)?.includes(v) ?? false;
    }

    neighbors(u: number): number[] {
        return [...(this.adjList.get(u) || [])];
    }

    // Check if graph is connected (undirected)
    isConnected(): boolean {
        const visited = new Set<number>();
        const dfs = (v: number) => {
            visited.add(v);
            for (const w of this.adjList.get(v) || []) {
                if (!visited.has(w)) dfs(w);
            }
        };
        dfs(0);
        return visited.size === this.vertices;
    }

    // Count connected components (undirected)
    countComponents(): number {
        const visited = new Set<number>();
        let count = 0;
        for (let i = 0; i < this.vertices; i++) {
            if (!visited.has(i)) {
                count++;
                const stack = [i];
                while (stack.length > 0) {
                    const v = stack.pop()!;
                    if (visited.has(v)) continue;
                    visited.add(v);
                    for (const w of this.adjList.get(v) || []) {
                        if (!visited.has(w)) stack.push(w);
                    }
                }
            }
        }
        return count;
    }

    // Detect cycle in undirected graph (DFS)
    hasCycleUndirected(): boolean {
        const visited = new Set<number>();
        const dfs = (v: number, parent: number): boolean => {
            visited.add(v);
            for (const w of this.adjList.get(v) || []) {
                if (!visited.has(w)) {
                    if (dfs(w, v)) return true;
                } else if (w !== parent) return true;
            }
            return false;
        };
        for (let i = 0; i < this.vertices; i++) {
            if (!visited.has(i) && dfs(i, -1)) return true;
        }
        return false;
    }

    // Topological sort (Kahn's algorithm)
    topologicalSort(): number[] | null {
        const indegree = new Array(this.vertices).fill(0);
        for (const [u, neighbors] of this.adjList) {
            for (const v of neighbors) indegree[v]++;
        }
        const queue: number[] = [];
        for (let i = 0; i < this.vertices; i++) {
            if (indegree[i] === 0) queue.push(i);
        }
        const result: number[] = [];
        while (queue.length > 0) {
            const u = queue.shift()!;
            result.push(u);
            for (const v of this.adjList.get(u) || []) {
                indegree[v]--;
                if (indegree[v] === 0) queue.push(v);
            }
        }
        return result.length === this.vertices ? result : null; // null if cycle
    }
}
```

### Additional MCQs (GFG Pattern)

9. **For a directed graph with V vertices and E edges, the adjacency list uses:**
   - a) O(V) space
   - b) O(E) space
   - c) O(V + E) space ✓
   - d) O(V²) space

10. **What is the degree of a vertex in a complete undirected graph with n vertices?**
    - a) n
    - b) n - 1 ✓
    - c) n(n - 1)/2
    - d) 2n

11. **Kahn's algorithm for topological sort requires:**
    - a) A stack
    - b) A queue ✓
    - c) A priority queue
    - d) A Deque

12. **Which of the following is true about a bipartite graph?**
    - a) It contains a triangle
    - b) It can be 2-colored ✓
    - c) It is always connected
    - d) It has no edges

13. **The handshaking lemma states that the sum of degrees equals:**
    - a) |V|
    - b) 2|E| ✓
    - c) |E|²
    - d) |V|²

14. **What is the minimum number of edges needed for a simple graph with V vertices to be connected?**
    - a) V
    - b) V - 1 ✓
    - c) V(V - 1)/2
    - d) V + 1

**Answers:** 9-c, 10-b, 11-b, 12-b, 13-b, 14-b

### Additional Exercises (GFG Pattern)

15. **Bipartite graph check**: Given an undirected graph, determine if it is bipartite using BFS (2-coloring).

16. **Find if a path exists between two vertices**: Given source and destination, check if a path exists using DFS or BFS.

17. **Mother vertex**: Find a vertex from which all other vertices are reachable in a directed graph.

18. **Transitive closure of a directed graph**: Compute the reachability matrix (Floyd-Warshall or DFS from each vertex).

19. **Find all strongly connected components (Kosaraju's algorithm)**: Implement Kosaraju's algorithm: first DFS for finish order, then DFS on transpose graph.

20. **Find all strongly connected components (Tarjan's algorithm)**: Implement Tarjan's algorithm using single DFS with low-link values.

21. **Eulerian path and circuit**: Check if an undirected graph has an Eulerian path (0 or 2 odd-degree vertices) or circuit (all even-degree vertices).

22. **Hamiltonian path check (DFS backtracking)**: Given a graph, determine if it contains a Hamiltonian path that visits each vertex exactly once.

23. **Minimum edges to make a graph connected**: Given a disconnected undirected graph, find the minimum number of edges to add to make it connected.

24. **Snakes and Ladders (BFS)**: Given a snakes and ladders board, find the minimum number of dice throws to reach the last cell using BFS.
   - c) \(O(E^2)\)
   - d) \(O(V)\)

2. **What is the sum of degrees in an undirected graph?**
   - a) \(|E|\)
   - b) \(2|E|\) ✓
   - c) \(|V|\)
   - d) \(2|V|\)

3. **Which representation is best for a sparse graph?**
   - a) Adjacency matrix
   - b) Adjacency list ✓
   - c) Edge list with hash set
   - d) Incidence matrix

4. **A tree must satisfy:**
   - a) Connected and \(|E| = |V| - 1\) ✓
   - b) \(|E| = |V|\)
   - c) Complete
   - d) Bipartite

5. **An undirected complete graph with \(n\) vertices has how many edges?**
   - a) \(n\)
   - b) \(n(n-1)/2\) ✓
   - c) \(n^2\)
   - d) \(n-1\)

6. **Which representation is best for Kruskal's MST algorithm?**
   - a) Adjacency matrix
   - b) Adjacency list
   - c) Edge list ✓
   - d) Incidence matrix

7. **A graph with an odd cycle is:**
   - a) Always complete
   - b) Always bipartite
   - c) Never bipartite ✓
   - d) Never connected

8. **Which algorithm is used for topological sort?**
   - a) Floyd-Warshall
   - b) Kahn's algorithm ✓
   - c) Kruskal's algorithm
   - d) Bellman-Ford

**Answers:** 1-b, 2-b, 3-b, 4-a, 5-b, 6-c, 7-c, 8-b

---

## Summary

- Graphs model pairwise relationships between entities — the most flexible data structure.
- Three core representations: **adjacency matrix** (\(O(V^2)\) space, \(O(1)\) edge queries), **adjacency list** (\(O(V+E)\) space, fast neighbor iteration), **edge list** (\(O(E)\) space, compact).
- **Directed vs undirected:** Choose based on relationship symmetry. Weighted for costs/distances.
- **Complete graphs** have maximum edges; **bipartite graphs** are 2-colorable.
- **Degree calculation** uses \(O(V+E)\) on adjacency list; verifying with Handshaking Lemma catches errors.
- **Decision rule:** Dense → matrix; Sparse → list; I/O/sorting → edge list.
- **Real-world** uses: Google Maps (shortest path on road graphs), Facebook (social graph analysis), PageRank (web graph ranking), OSPF (routing protocol on network graph).

---

## Exercises

### Review Questions

1. When would an adjacency matrix be preferred over an adjacency list?
2. What is the space complexity of each representation for a complete graph?
3. How does the degree calculation differ for directed and undirected graphs?
4. What property must a graph NOT have to be bipartite?
5. How many edges does a complete bipartite graph \(K_{3,4}\) have?

### Application Problems

6. Write a function to compute the transitive closure of a directed graph (reachability matrix) using Floyd-Warshall.
7. Implement a function that reads a graph from an edge list file and builds both representations.
8. Write a function to detect if an undirected graph is a tree (connected and \(|E| = |V| - 1\)).
9. Implement isBipartite using BFS 2-coloring. Test on a 4-cycle (should work) and a triangle (should fail).
10. Write a function to convert an adjacency matrix to an adjacency list and vice versa.

### Challenge Problems

11. Implement a **graph isomorphism checker** that determines whether two graphs have the same structure (node names may differ). Use degree sequences and adjacency comparison.
12. Implement **Kosaraju's algorithm** to find all strongly connected components in a directed graph using two DFS passes.
13. Given an undirected graph, find all articulation points (cut vertices) whose removal disconnects the graph.
