# Chapter 9: Graph Theory

> **Previous:** [Chapter 8: Functions](./08-functions.md) | **Next:** [Chapter 10: Trees](./10-trees.md)

## Learning Objectives

After completing this chapter, you will be able to:

- Define and identify different types of graphs (undirected, directed, weighted, simple, multigraphs)
- Apply graph terminology: vertices, edges, degree, adjacency, paths, cycles
- Distinguish between graph representations (adjacency matrix, adjacency list, incidence matrix)
- Determine connectivity, components, and cut vertices/edges
- Recognize bipartite, complete, and regular graphs
- Model real-world problems using graph structures
- Apply Euler and Hamilton path concepts

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| Graph Types | Undirected, directed, weighted, multigraphs | Choose representation based on relationship symmetry |
| Vertex Degree | Sum of degrees = $2 \|E\|$ | Handshaking lemma: even number of odd-degree vertices |
| Connectivity | Paths connect vertices; components are maximal connected subgraphs | Cut vertices and bridges are single points of failure |
| Graph Representations | Adjacency matrix, adjacency list, incidence matrix | Matrix: $O(1)$ edge lookup; List: $O(V+E)$ space for sparse graphs |
| Complete Graphs | $K_n$ has $n(n-1)/2$ edges | Every pair of vertices is connected |
| Bipartite Graphs | Two independent sets; no odd cycles | Equivalent to 2-colorability |
| Eulerian vs Hamiltonian | Euler: traverse every edge; Hamilton: visit every vertex | Euler: all even-degree vertices; Hamilton: NP-complete |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Graph Definition] --> B[Types]
    B --> C[Undirected]
    B --> D[Directed]
    B --> E[Weighted]
    B --> F[Multigraph]
    A --> G[Basic Concepts]
    G --> H[Degree]
    G --> I[Adjacency]
    G --> J[Path / Cycle]
    G --> K[Connectivity]
    A --> L[Special Graphs]
    L --> M[Complete K_n]
    L --> N[Bipartite]
    L --> O[Regular]
    A --> P[Euler & Hamilton]
    A --> Q[Representations]
    Q --> R[Adjacency Matrix]
    Q --> S[Adjacency List]
    Q --> T[Incidence Matrix]
```

## Theory

### 9.1 Definition

A **graph** $G = (V, E)$ consists of a set $V$ of **vertices** (or **nodes**) and a set $E$ of **edges** connecting pairs of vertices. An edge $\{u, v\}$ connects vertices $u$ and $v$.

**Graph types:**
- **Undirected graph:** edges have no direction ($\{u,v\} = \{v,u\}$).
- **Directed graph (digraph):** edges have direction ($(u,v) \neq (v,u)$).
- **Weighted graph:** edges carry a numeric weight.
- **Multigraph:** multiple edges between the same vertices allowed.
- **Simple graph:** no loops or multiple edges.

> **One-Sentence Takeaway:** A graph is a set of vertices connected by edges; the edge type (directed, weighted, multiple) determines the graph variant.

### 9.2 Basic Concepts

**Adjacency:** Two vertices are adjacent if an edge connects them.

**Degree (undirected):** $\deg(v)$ = number of edges incident to $v$. A vertex of degree 0 is **isolated**; degree 1 is a **pendant** (leaf).

**The Handshaking Lemma (Theorem 9.1):** $\sum_{v \in V} \deg(v) = 2|E|$. Every graph has an even number of odd-degree vertices.

**Degree (directed):** $\deg^-(v)$ = in-degree (incoming edges), $\deg^+(v)$ = out-degree (outgoing edges). $\sum \deg^-(v) = \sum \deg^+(v) = |E|$.

**Path:** A sequence of vertices where each consecutive pair is adjacent. A **simple path** repeats no vertices. **Length** = number of edges.

**Cycle:** A path where the first and last vertices are the same (and $v_0$ is the only repeated vertex).

> **One-Sentence Takeaway:** The Handshaking Lemma ties vertex degrees to edge count; paths and cycles are the fundamental building blocks of graph connectivity.

### 9.3 Connectivity

A graph is **connected** if there is a path between any two vertices. A **connected component** is a maximal connected subgraph.

**Cut vertex (articulation point):** A vertex whose removal disconnects the graph.

**Bridge (cut edge):** An edge whose removal disconnects the graph.

**Theorem 9.2 (Connectivity in directed graphs).** A directed graph is **strongly connected** if there is a directed path between any two vertices. It is **weakly connected** if its underlying undirected graph is connected.

**Distance:** The shortest path length between two vertices.

**Diameter:** The maximum distance between any two vertices in a connected graph.

> **One-Sentence Takeaway:** A vertex or edge whose removal disconnects the graph is a cut vertex or bridge; strong connectivity requires directed paths both ways.

### 9.4 Special Graphs

**Complete graph $K_n$:** Every pair of vertices is connected. Has $n(n-1)/2$ edges.

**Cycle graph $C_n$:** $n$ vertices connected in a single cycle.

**Bipartite graph $K_{m,n}$:** Vertices partitioned into two sets; edges only cross between sets.

**Theorem 9.3 (Bipartite characterization).** A graph is bipartite if and only if it contains no odd-length cycles.

**Regular graph:** Every vertex has degree $k$ (a $k$-regular graph).

**Wheel graph $W_n$:** Cycle $C_{n-1}$ connected to one central vertex.

**Planar graph:** Can be drawn with no edge crossings (edges intersect only at vertices).

**Theorem 9.4 (Euler's formula for planar graphs).** For a connected planar graph: $V - E + F = 2$, where $F$ is the number of faces.

> **One-Sentence Takeaway:** Complete graphs ($K_n$) and bipartite graphs ($K_{m,n}$) are fundamental special classes; bipartite is equivalent to 2-colorability and absence of odd cycles.

### 9.5 Graph Representations

**Adjacency Matrix:** $A[i][j] = 1$ if edge $(i,j)$ exists, $0$ otherwise. For undirected graphs, $A$ is symmetric. Size: $|V| \times |V|$.

**Adjacency List:** Array of lists; vertex $i$ has a list of its neighbors. Space: $O(|V| + |E|)$.

**Incidence Matrix:** $M[i][j] = 1$ if vertex $i$ is incident to edge $j$. Size: $|V| \times |E|$.

```typescript
class Graph {
  private adj: Map<number, number[]> = new Map();
  private directed: boolean;

  constructor(directed: boolean = false) {
    this.directed = directed;
  }

  addVertex(v: number): void {
    if (!this.adj.has(v)) this.adj.set(v, []);
  }

  addEdge(u: number, v: number): void {
    this.addVertex(u);
    this.addVertex(v);
    this.adj.get(u)!.push(v);
    if (!this.directed) this.adj.get(v)!.push(u);
  }

  neighbors(v: number): number[] {
    return this.adj.get(v) ?? [];
  }

  degree(v: number): number {
    return this.neighbors(v).length;
  }

  hasEdge(u: number, v: number): boolean {
    return this.neighbors(u).includes(v);
  }
}
```

> **One-Sentence Takeaway:** Adjacency matrices give $O(1)$ edge lookup at the cost of $O(V^2)$ space; adjacency lists use $O(V+E)$ space and are preferred for sparse graphs.

### 9.6 Euler and Hamilton Paths

**Eulerian path:** A trail that traverses every edge exactly once.
**Eulerian circuit:** An Eulerian path that starts and ends at the same vertex.

**Theorem 9.5 (Euler's theorem).** An undirected graph has an Eulerian circuit if and only if every vertex has even degree. It has an Eulerian path (but not a circuit) if exactly two vertices have odd degree.

**Hamiltonian path:** A path that visits every vertex exactly once.
**Hamiltonian cycle:** A Hamiltonian path that starts and ends at the same vertex.

No simple characterization exists for Hamiltonian graphs (the problem is NP-complete).

**Theorem 9.6 (Dirac's theorem).** If $G$ is a simple graph with $n \geq 3$ vertices and every vertex has degree $\geq n/2$, then $G$ has a Hamiltonian cycle.

> **One-Sentence Takeaway:** Eulerian paths traverse every edge once (easy to characterize via parity); Hamiltonian paths visit every vertex once (NP-complete to characterize).

### 9.7 Subgraphs and Graph Isomorphism

**Subgraph:** $H = (V', E')$ where $V' \subseteq V$ and $E' \subseteq E$.

**Spanning subgraph:** $V' = V$ (keeps all vertices).

**Induced subgraph:** Includes all edges whose endpoints are in $V'$.

**Graph isomorphism:** Graphs $G$ and $H$ are isomorphic ($G \cong H$) if there exists a bijection $f: V_G \rightarrow V_H$ such that $\{u,v\} \in E_G \iff \{f(u), f(v)\} \in E_H$.

Isomorphism is an equivalence relation. Checking isomorphism is difficult (no polynomial-time algorithm known in general).

**Invariants preserved by isomorphism:** number of vertices, edges, degree sequence, connectivity, bipartiteness.

## Quick Reference

| Graph Family | Notation | Vertices | Edges | Properties |
|-------------|----------|----------|-------|------------|
| Complete | $K_n$ | $n$ | $n(n-1)/2$ | All pairs connected; $n-1$-regular |
| Cycle | $C_n$ | $n$ | $n$ | 2-regular; connected |
| Bipartite | $K_{m,n}$ | $m+n$ | $mn$ | Two independent sets; no odd cycles |
| Wheel | $W_n$ | $n$ | $2(n-1)$ | Cycle + hub; planar for $n \leq 4$ |
| Path | $P_n$ | $n$ | $n-1$ | 2 pendant vertices; tree |
| Hypercube | $Q_n$ | $2^n$ | $n2^{n-1}$ | $n$-regular; distance = Hamming distance |

## Cross-Application Matrix

| Concept | Computer Science | Networking | Operations | Biology |
|---------|-----------------|------------|------------|---------|
| Shortest Path | Dijkstra, BFS | Routing protocols (OSPF) | Logistics optimization | Metabolic pathway analysis |
| Connectivity | Network resilience | Fault-tolerant topologies | Supply chain risk | Protein interaction networks |
| Bipartite Graphs | Matching algorithms | Switch-router models | Job assignment | Gene regulatory networks |
| Planar Graphs | VLSI layout, PCB routing | Map routing | Facility layout | Neural connectivity |
| Eulerian Path | De Bruijn sequences | Network traversal | Garbage collection routes | DNA assembly |
| Hamiltonian Cycle | TSP algorithms | Ring topologies | Traveling salesman | Genome mapping |

## Chapter Quiz

1. What is the sum of degrees in a graph with $|E| = 10$ edges?
   - A) 5
   - B) 10
   - C) 20
   - D) 40
   <details><summary>Answer</summary>**C)** $\sum \deg(v) = 2|E| = 20$ by the Handshaking Lemma.</details>

2. Which condition characterizes bipartite graphs?
   - A) No even cycles
   - B) No odd cycles
   - C) Every vertex has even degree
   - D) Connectedness
   <details><summary>Answer</summary>**B)** A graph is bipartite iff it contains no odd-length cycles.</details>

3. A graph has an Eulerian circuit if and only if:
   - A) It is connected and every vertex has even degree
   - B) It is complete
   - C) It is bipartite
   - D) It has a Hamiltonian cycle
   <details><summary>Answer</summary>**A)** Eulerian circuit exists iff the graph is connected (ignoring isolated vertices) and every vertex has even degree.</details>

4. How many edges does $K_6$ have?
   - A) 6
   - B) 10
   - C) 15
   - D) 30
   <details><summary>Answer</summary>**C)** $K_6$ has $6 \cdot 5 / 2 = 15$ edges.</details>

5. What is the space complexity of an adjacency matrix for a graph with $V$ vertices?
   - A) $O(V)$
   - B) $O(V + E)$
   - C) $O(V^2)$
   - D) $O(E^2)$
   <details><summary>Answer</summary>**C)** Adjacency matrices use $O(V^2)$ space regardless of the number of edges.</details>

## Examples

**Example 9.1** (Handshaking Lemma verification). Consider a graph with 4 vertices and edges $\{\{1,2\}, \{2,3\}, \{3,4\}, \{4,1\}, \{2,4\}\}$. Degrees: $\deg(1)=2$, $\deg(2)=3$, $\deg(3)=2$, $\deg(4)=3$. Sum $= 2 + 3 + 2 + 3 = 10 = 2 \cdot 5 = 2|E|$.

**Example 9.2** (Path vs. cycle). In $C_5$ (a 5-cycle), the maximum distance between any two vertices is 2 (diameter = 2). The graph is 2-regular and connected.

**Example 9.3** (Bipartite check). $C_4$ is bipartite (even cycle): assign vertices alternately to sets $A = \{1,3\}$, $B = \{2,4\}$. $C_3$ (triangle) is not bipartite (odd cycle).

**Example 9.4** (Eulerian path). A graph with vertices $\{1,2,3,4\}$ and edges $\{\{1,2\},\{2,3\},\{3,4\},\{4,2\}\}$: degrees are $\deg(1)=1$, $\deg(2)=3$, $\deg(3)=2$, $\deg(4)=2$. Two odd-degree vertices (1 and 2), so it has an Eulerian path but not a circuit.

```typescript
function hasEulerianCircuit(graph: Graph): boolean {
  const vertices = Array.from(graph['adj'].keys());
  for (const v of vertices) {
    if (graph.degree(v) % 2 !== 0) return false;
  }
  return true;
}

function hasEulerianPath(graph: Graph): boolean {
  const vertices = Array.from(graph['adj'].keys());
  let oddCount = 0;
  for (const v of vertices) {
    if (graph.degree(v) % 2 !== 0) oddCount++;
  }
  return oddCount === 0 || oddCount === 2;
}
```

**Example 9.5** (Euler's formula). The cube graph $Q_3$ has $V = 8$, $E = 12$, $F = 6$. Euler's formula: $8 - 12 + 6 = 2$. ✓

**Example 9.6** (Adjacency matrix). For graph with edges $\{1,2\},\{2,3\},\{3,1\}$:
$$A = \begin{bmatrix} 0 & 1 & 1 \\ 1 & 0 & 1 \\ 1 & 1 & 0 \end{bmatrix}$$

**Example 9.7** (Distance calculation). In $K_5$, distance between any two distinct vertices is 1. Diameter = 1.

**Example 9.8** (Complete bipartite graph $K_{2,3}$). Two vertices in set $A$, three in set $B$. $|E| = 2 \cdot 3 = 6$. The graph is bipartite and has $5$ vertices.

**Example 9.9** (Finding cut vertices). In a path graph $P_4$ ($1-2-3-4$), every internal vertex (2 and 3) is a cut vertex. The end vertices (1 and 4) are not.

**Example 9.10** (Isomorphism). $C_4$ drawn as a square is isomorphic to $C_4$ drawn as a diamond — vertex labels differ but structure is identical.

### 9.8 Graph Traversal Algorithms

**Breadth-first search (BFS):** Explores a graph level by level. Uses a queue. $O(V+E)$.
- Finds shortest path in unweighted graphs.
- Used for connected components, bipartite checking, level-order traversal.

```typescript
function bfs(graph: Graph, start: number): Map<number, number> {
  const distances = new Map<number, number>();
  const queue: number[] = [start];
  distances.set(start, 0);
  while (queue.length > 0) {
    const v = queue.shift()!;
    for (const neighbor of graph.neighbors(v)) {
      if (!distances.has(neighbor)) {
        distances.set(neighbor, distances.get(v)! + 1);
        queue.push(neighbor);
      }
    }
  }
  return distances;
}
```

**Depth-first search (DFS):** Explores as deep as possible before backtracking. Uses a stack (recursion). $O(V+E)$.
- Used for topological sorting, cycle detection, strongly connected components.

```typescript
function dfs(
  graph: Graph,
  start: number,
  visited: Set<number> = new Set()
): Set<number> {
  visited.add(start);
  for (const neighbor of graph.neighbors(start)) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
    }
  }
  return visited;
}
```

> **One-Sentence Takeaway:** BFS finds shortest paths in unweighted graphs using a queue; DFS explores deep using a stack and is useful for cycle detection and topological ordering.

### 9.9 Graph Coloring

Greedy coloring algorithm: Order vertices; assign each vertex the smallest color not used by its already-colored neighbors. Uses at most $\Delta + 1$ colors.

**Applications:**
- Scheduling: exams with overlapping students (conflict = edge).
- Register allocation: variables live at the same time (conflict = edge).
- Sudoku: coloring $9 \times 9$ with constraints.

### 9.10 Applications of Graph Theory

- **Social networks:** Recommend friends, detect communities, measure influence.
- **Road networks:** GPS shortest-path navigation (Dijkstra, A*).
- **World Wide Web:** PageRank uses directed graph of hyperlinks.
- **Biology:** Protein interaction networks, neural connectivity, phylogenetic trees.
- **Transportation:** Airline route optimization, shipping logistics.
- **Computer networks:** Topology design, routing protocols, fault tolerance.

### 9.11 Graph Traversal Implementations

**Breadth-First Search (BFS)** explores vertices in order of increasing distance from the source.

```typescript
function bfs(graph: number[][], start: number): { dist: number[]; parent: number[] } {
  const n = graph.length;
  const dist = new Array(n).fill(-1);
  const parent = new Array(n).fill(-1);
  const queue: number[] = [start];
  dist[start] = 0;

  while (queue.length > 0) {
    const u = queue.shift()!;
    for (const v of graph[u]) {
      if (dist[v] === -1) {
        dist[v] = dist[u] + 1;
        parent[v] = u;
        queue.push(v);
      }
    }
  }
  return { dist, parent };
}

// Example: path from 0 to 4
function getPath(parent: number[], target: number): number[] {
  const path: number[] = [];
  for (let v = target; v !== -1; v = parent[v]) path.push(v);
  return path.reverse();
}

const adjList = [[1, 2], [0, 3], [0, 3], [1, 2, 4], [3]];
const { dist, parent } = bfs(adjList, 0);
console.log(dist);  // [0, 1, 1, 2, 3]
console.log(getPath(parent, 4)); // [0, 1, 3, 4] or [0, 2, 3, 4]
```

**Depth-First Search (DFS)** explores as far as possible before backtracking.

```typescript
function dfs(graph: number[][], start: number): number[] {
  const visited = new Set<number>();
  const order: number[] = [];

  const dfsRec = (u: number) => {
    visited.add(u);
    order.push(u);
    for (const v of graph[u]) {
      if (!visited.has(v)) dfsRec(v);
    }
  };
  dfsRec(start);
  return order;
}

function hasCycle(graph: number[][]): boolean {
  const n = graph.length;
  const visited = new Array(n).fill(false);
  const recStack = new Array(n).fill(false);

  const dfsCycle = (u: number): boolean => {
    visited[u] = true;
    recStack[u] = true;
    for (const v of graph[u]) {
      if (!visited[v]) { if (dfsCycle(v)) return true; }
      else if (recStack[v]) return true;
    }
    recStack[u] = false;
    return false;
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i] && dfsCycle(i)) return true;
  }
  return false;
}
```

### 9.12 Shortest Path Algorithms

**Dijkstra's Algorithm** finds the shortest path from a source to all other vertices in a weighted graph with nonnegative weights.

```typescript
function dijkstra(
  graph: [number, number][][],
  start: number
): { dist: number[]; prev: number[] } {
  const n = graph.length;
  const dist = new Array(n).fill(Infinity);
  const prev = new Array(n).fill(-1);
  const visited = new Array(n).fill(false);
  dist[start] = 0;

  for (let i = 0; i < n; i++) {
    let u = -1;
    let minDist = Infinity;
    for (let j = 0; j < n; j++) {
      if (!visited[j] && dist[j] < minDist) {
        minDist = dist[j];
        u = j;
      }
    }
    if (u === -1) break;
    visited[u] = true;

    for (const [v, w] of graph[u]) {
      if (!visited[v] && dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
        prev[v] = u;
      }
    }
  }
  return { dist, prev };
}

// Weighted graph: edges are [neighbor, weight]
const weightedGraph: [number, number][][] = [
  [[1, 4], [2, 1]],           // 0
  [[3, 1]],                    // 1
  [[1, 2], [3, 5]],            // 2
  [[4, 3]],                    // 3
  []                           // 4
];
console.log(dijkstra(weightedGraph, 0).dist); // [0, 3, 1, 4, 7]
```

**Bellman-Ford Algorithm** handles negative edge weights and detects negative cycles.

```typescript
function bellmanFord(
  n: number,
  edges: [number, number, number][],
  start: number
): { dist: number[]; hasNegativeCycle: boolean } {
  const dist = new Array(n).fill(Infinity);
  dist[start] = 0;

  for (let i = 0; i < n - 1; i++) {
    for (const [u, v, w] of edges) {
      if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
      }
    }
  }

  let hasNegativeCycle = false;
  for (const [u, v, w] of edges) {
    if (dist[u] !== Infinity && dist[u] + w < dist[v]) {
      hasNegativeCycle = true;
    }
  }
  return { dist, hasNegativeCycle };
}
```

### 9.13 Graph Applications in Practice

**Detecting bipartite graphs** via BFS 2-coloring:

```typescript
function isBipartite(graph: number[][]): boolean {
  const n = graph.length;
  const color = new Array(n).fill(-1);

  for (let start = 0; start < n; start++) {
    if (color[start] !== -1) continue;
    color[start] = 0;
    const queue = [start];
    while (queue.length > 0) {
      const u = queue.shift()!;
      for (const v of graph[u]) {
        if (color[v] === -1) {
          color[v] = 1 - color[u];
          queue.push(v);
        } else if (color[v] === color[u]) {
          return false;
        }
      }
    }
  }
  return true;
}
```

**Theorem 9.2 (Graph equivalence).** A graph is bipartite if and only if it has no odd cycles.

```mermaid
flowchart TD
    subgraph "Graph Problems by Complexity"
        A[Graph Problem] --> B{Eulerian?}
        B -->|Yes| C[O(E) — check degrees]
        B -->|No| D{Hamiltonian?}
        D -->|Yes| E[NP-complete — brute force]
        D -->|No| F{Planar?}
        F -->|Yes| G[O(V) — check K5, K3,3 minors]
        F -->|No| H[Non-planar]
    end
```

**Example 9.7** (Dijkstra in GPS navigation). The road network has ~2M vertices (intersections) and ~5M edges (road segments). Dijkstra with a priority queue runs in $O((V+E)\log V) \approx 15M$ operations — feasible for real-time navigation. A* adds a heuristic (straight-line distance) for faster routing.

**Example 9.8** (Graph coloring for exam scheduling). Five exams: A conflicts with B, C; B conflicts with A, C, D; C conflicts with A, B, E; D conflicts with B, E; E conflicts with C, D. Greedy coloring: color A=1, B=2, C=3 (conflicts with 1,2), D=1 (conflicts with 2 only), E=2 (conflicts with 3,1). Uses 3 colors.

**Proof 9.3** (Five Color Theorem — sketch). Every planar graph is 5-colorable.

*Proof sketch.* By induction on $|V|$. Every planar graph has a vertex $v$ of degree $\leq 5$ (by Euler's formula $E \leq 3V - 6$). Remove $v$, 5-color the rest by induction. If the 5 neighbors use fewer than 5 colors, recolor $v$ with the unused color. Otherwise, use Kempe chain recolorings: consider two nonadjacent colors among the neighbors, swap them along alternating paths to free a color for $v$. $\square$

**Example 9.9** (Topological sort — DAG ordering).

```typescript
function topologicalSort(graph: number[][]): number[] {
  const n = graph.length;
  const inDegree = new Array(n).fill(0);
  for (const neighbors of graph) {
    for (const v of neighbors) inDegree[v]++;
  }
  const queue: number[] = [];
  for (let i = 0; i < n; i++) if (inDegree[i] === 0) queue.push(i);

  const result: number[] = [];
  while (queue.length > 0) {
    const u = queue.shift()!;
    result.push(u);
    for (const v of graph[u]) {
      inDegree[v]--;
      if (inDegree[v] === 0) queue.push(v);
    }
  }
  return result;
}

// Course prerequisites: {0 → 1, 0 → 2, 1 → 3, 2 → 3}
console.log(topologicalSort([[1, 2], [3], [3], []])); // [0, 1, 2, 3] or [0, 2, 1, 3]
```

## Additional Exercises

16. Determine whether a graph with degree sequence $(3, 3, 2, 2, 2)$ can be planar.

17. Run Dijkstra's algorithm on a graph with 5 vertices where edges are $(0,1,4), (0,2,2), (1,2,1), (1,3,5), (2,3,8), (2,4,10), (3,4,2)$ starting from vertex 0. Show the shortest distances.

18. A **complete bipartite graph** $K_{m,n}$ has $m + n$ vertices. How many edges does it have? When is it planar?

19. Write a TypeScript function `isConnected(graph: number[][]): boolean` that uses BFS to test graph connectivity.

20. Prove that a finite graph where every vertex has degree at least 2 contains a cycle.

## TypeScript Implementations

```typescript
// --- BFS (Breadth-First Search) ---
function bfs(graph: number[][], start: number): Map<number, number> {
  const dist = new Map<number, number>();
  const queue: number[] = [start];
  dist.set(start, 0);
  while (queue.length > 0) {
    const v = queue.shift()!;
    for (const n of graph[v]) {
      if (!dist.has(n)) { dist.set(n, dist.get(v)! + 1); queue.push(n); }
    }
  }
  return dist;
}
const adj: number[][] = [[1,2],[0,3],[0,3],[1,2]];
console.log('BFS distances:', [...bfs(adj, 0)]); // [[0,0],[1,1],[2,1],[3,2]]

// --- DFS (Depth-First Search) & Cycle Detection ---
function hasCycle(graph: number[][]): boolean {
  const visited = new Array(graph.length).fill(false);
  function dfs(v: number, parent: number): boolean {
    visited[v] = true;
    for (const n of graph[v]) {
      if (!visited[n]) { if (dfs(n, v)) return true; }
      else if (n !== parent) return true;
    }
    return false;
  }
  for (let v = 0; v < graph.length; v++) if (!visited[v] && dfs(v, -1)) return true;
  return false;
}
console.log('Cycle detected:', hasCycle([[1],[0,2],[1]]));         // false (path)
console.log('Cycle detected:', hasCycle([[1],[0,2],[1,0]]));      // true (triangle)

// --- Dijkstra's Algorithm ---
type Edge = { to: number; weight: number };
function dijkstra(graph: Edge[][], start: number): number[] {
  const dist = new Array(graph.length).fill(Infinity);
  const visited = new Array(graph.length).fill(false);
  dist[start] = 0;
  for (let i = 0; i < graph.length; i++) {
    let u = -1;
    for (let v = 0; v < graph.length; v++)
      if (!visited[v] && (u === -1 || dist[v] < dist[u])) u = v;
    if (dist[u] === Infinity) break;
    visited[u] = true;
    for (const { to, weight } of graph[u])
      if (!visited[to] && dist[u] + weight < dist[to])
        dist[to] = dist[u] + weight;
  }
  return dist;
}
const weightedGraph: Edge[][] = [
  [{ to: 1, weight: 4 }, { to: 2, weight: 2 }],
  [{ to: 2, weight: 1 }, { to: 3, weight: 5 }],
  [{ to: 3, weight: 8 }, { to: 4, weight: 10 }],
  [{ to: 4, weight: 2 }], []
];
console.log('Dijkstra from 0:', dijkstra(weightedGraph, 0)); // [0,4,2,9,11]

// --- Isomorphism Checker (simple) ---
function degreeSequence(graph: number[][]): number[] {
  return graph.map(v => v.length).sort((a,b) => b-a);
}
function couldBeIsomorphic(g1: number[][], g2: number[][]): boolean {
  if (g1.length !== g2.length) return false;
  const d1 = degreeSequence(g1), d2 = degreeSequence(g2);
  return d1.every((d,i) => d === d2[i]);
}
console.log('Could be isomorphic:', couldBeIsomorphic([[1,2],[0],[0]], [[1],[0,2],[1]]));
// true (both are paths of 3 vertices)

// --- Graph Coloring (Greedy) ---
function greedyColoring(graph: number[][]): number[] {
  const colors = new Array(graph.length).fill(-1);
  for (let v = 0; v < graph.length; v++) {
    const used = new Set(graph[v].map(n => colors[n]));
    for (let c = 0; c < graph.length; c++) { if (!used.has(c)) { colors[v] = c; break; } }
  }
  return colors;
}
console.log('Greedy coloring:', greedyColoring([[1,2],[0,2],[0,1]])); // [0,1,2]
```

```
// --- Graph Isomorphism Checker (naive via degree sequence) ---
function degreeSequence(adj: number[][]): number[] {
  return adj.map(neighbors => neighbors.length).sort((a, b) => a - b);
}
function isIsomorphicPossible(adj1: number[][], adj2: number[][]): boolean {
  if (adj1.length !== adj2.length) return false;
  const seq1 = degreeSequence(adj1).join(',');
  const seq2 = degreeSequence(adj2).join(',');
  if (seq1 !== seq2) return false;
  // Degree sequence match is necessary but not sufficient
  return true;
}
const G1 = [[1,2],[0,2],[0,1]]; // triangle
const G2 = [[1,2],[0,2],[0,1]]; // triangle
console.log('Isomorphism possible (3-cycle):', isIsomorphicPossible(G1, G2));

// --- Bipartite Graph Checker ---
function isBipartite(adj: number[][]): { bipartite: boolean; partition?: [number[], number[]] } {
  const color = new Array(adj.length).fill(-1);
  const parts: [number[], number[]] = [[], []];
  for (let start = 0; start < adj.length; start++) {
    if (color[start] !== -1) continue;
    color[start] = 0;
    parts[0].push(start);
    const queue = [start];
    while (queue.length) {
      const v = queue.shift()!;
      for (const u of adj[v]) {
        if (color[u] === color[v]) return { bipartite: false };
        if (color[u] === -1) {
          color[u] = 1 - color[v];
          parts[color[u]].push(u);
          queue.push(u);
        }
      }
    }
  }
  return { bipartite: true, partition: parts };
}
const bipGraph = [[1,3],[0,2],[1,3],[0,2]]; // 4-cycle
const nonBip = [[1,2],[0,2],[0,1]]; // triangle
console.log('\n4-cycle bipartite:', isBipartite(bipGraph));
console.log('Triangle bipartite:', isBipartite(nonBip));

// --- Eulerian Path/Circuit Checker ---
function isEulerian(adj: number[][]): 'circuit' | 'path' | 'none' {
  const odd = adj.map((n, i) => n.length % 2 !== 0 ? i : -1).filter(i => i !== -1);
  if (odd.length === 0) return 'circuit';
  if (odd.length === 2) return 'path';
  return 'none';
}
const eulerGraph = [[1,2],[0,2,3],[0,1,3],[1,2]]; // K4
console.log('\nK4 Eulerian:', isEulerian(eulerGraph));

// --- Hamiltonian Path (Brute force for small graphs) ---
function hasHamiltonianPath(adj: number[][]): boolean {
  const n = adj.length;
  const perm = Array.from({length: n}, (_, i) => i);
  function nextPerm(arr: number[]): boolean {
    let i = arr.length - 2;
    while (i >= 0 && arr[i] >= arr[i + 1]) i--;
    if (i < 0) return false;
    let j = arr.length - 1;
    while (arr[j] <= arr[i]) j--;
    [arr[i], arr[j]] = [arr[j], arr[i]];
    arr.splice(i + 1, arr.length - i - 1, ...arr.slice(i + 1).reverse());
    return true;
  }
  do {
    if (perm.every((v, i) => i === 0 || adj[perm[i - 1]].includes(v))) return true;
  } while (nextPerm(perm));
  return false;
}
console.log('\nHamiltonian path in K4:', hasHamiltonianPath(eulerGraph));

// --- Graph Center (minimize eccentricity) ---
function graphCenter(adj: number[][]): number[] {
  const n = adj.length;
  const dist = Array.from({length: n}, () => new Array(n).fill(Infinity));
  for (let i = 0; i < n; i++) { dist[i][i] = 0; for (const j of adj[i]) dist[i][j] = 1; }
  for (let k = 0; k < n; k++)
    for (let i = 0; i < n; i++)
      for (let j = 0; j < n; j++)
        if (dist[i][k] + dist[k][j] < dist[i][j]) dist[i][j] = dist[i][k] + dist[k][j];
  const ecc = dist.map(row => Math.max(...row.filter(d => d < Infinity)));
  const minEcc = Math.min(...ecc);
  return ecc.map((e, i) => e === minEcc ? i : -1).filter(i => i !== -1);
}
const path4: number[][] = [[1],[0,2],[1,3],[2]];
console.log('\nCenter of path of length 4:', graphCenter(path4));
```

## Summary

- Graphs are modeled as $(V,E)$; types include undirected, directed, weighted, and multigraphs.
- The Handshaking Lemma: $\sum \deg(v) = 2|E|$.
- A graph is connected if a path exists between any two vertices.
- Bipartite iff no odd cycles.
- Eulerian circuit iff all vertices have even degree (connected graph).
- Hamiltonian cycle is NP-complete to characterize.

## Practical Takeaways

1. **Use adjacency list for sparse graphs** — real-world graphs are almost always sparse.
2. **Bipartite = 2-colorable** — check via BFS alternating colors; any conflict means an odd cycle.
3. **Euler = edges, Hamilton = vertices** — Euler is computationally easy, Hamilton is hard.
4. **Even-degree condition** — always check parity first when looking for Eulerian trails.
5. **Planar graphs have $E \leq 3V - 6$** — a quick check for non-planarity.

## Exercises

### Review Questions

1. What is the degree of every vertex in $C_7$?
2. Can a complete bipartite graph $K_{2,2}$ have a Hamiltonian cycle?
3. How many edges does $K_{10}$ have?
4. Is $C_6$ bipartite? Explain.
5. State Euler's formula for planar graphs.

### Application Problems

6. Show that any graph with $|V| = 6$ and $|E| = 16$ has at least one vertex of degree $\geq 6$.

7. Determine whether $K_5$ is planar.

8. Prove that every tree (connected, acyclic graph) with $n$ vertices has $n-1$ edges.

9. Draw $K_{3,3}$ and determine whether it is planar.

10. Construct an Eulerian circuit for the graph with vertices $\{1,2,3,4\}$ and edges $\{\{1,2\},\{2,3\},\{3,4\},\{4,1\},\{1,3\},\{2,4\}\}$.

11. Find the diameter of $Q_3$ (the 3-dimensional hypercube).

12. Write a BFS-based function to check if a graph is connected.

### Challenge Problem

13. Prove that every graph with at least 2 vertices has at least two vertices of the same degree.

14. Prove: A graph with $n$ vertices and $\binom{n-1}{2} + 1$ edges is always connected.

15. A **tournament** is a complete directed graph (for every unordered pair $\{u,v\}$, exactly one of $(u,v)$ or $(v,u)$ is an edge). Prove that every tournament has a Hamiltonian path.
