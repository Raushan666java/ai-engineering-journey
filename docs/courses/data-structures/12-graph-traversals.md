# Chapter 12: Graph Traversals

**Prev:** [Chapter 11: Graphs](11-graphs.md) | **Next:** [Chapter 13: AVL Trees](13-avl.md)

## Learning Objectives

> **One-Sentence Takeaway:** BFS finds shortest paths in unweighted graphs; DFS excels at connectivity analysis and topological sorting.

By the end of this chapter, students will be able to:

1. Implement Breadth-First Search (BFS) and Depth-First Search (DFS) — recursive and iterative.
2. Find connected components in undirected graphs.
3. Detect cycles in directed and undirected graphs using DFS.
4. Determine whether a graph is bipartite using BFS two-coloring.
5. Compute topological ordering using Kahn's algorithm and DFS-based post-order.
6. Find strongly connected components using Kosaraju's algorithm.

---

## Why Graph Traversals Matter

**Real-World Analogy:** Imagine you're exploring a massive underground cave system. You have two strategies:

- **BFS-style:** Explore all tunnels that are 1 minute from the entrance first, then all tunnels 2 minutes away, then 3 minutes — systematically expanding outward like ripples in a pond. This is how GPS navigation finds the shortest route: it explores all intersections one turn away, then two turns away, until it reaches the destination.

- **DFS-style:** Pick a tunnel and follow it as deep as possible until you hit a dead end, then backtrack and try the next tunnel. This is how a maze-solving robot works — commit to a path, go all the way, then try another.

Graph traversals power: **web crawling** (Google discovers pages level by level), **social recommendations** (LinkedIn "people you may know" uses BFS for distance-2 connections), **GPS navigation** (shortest paths), **dependency resolution** (npm/yarn topological sort), **garbage collection** (JVM mark-and-sweep uses DFS), and **constraint solving** (topological ordering for build systems). Without traversals, no search engine, no navigation, no package managers.

---

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| BFS | Level-order traversal using a queue | Shortest path in unweighted graphs |
| DFS Recursive | Depth-first via call stack | Simplest implementation for connectivity |
| DFS Iterative | Explicit stack avoids recursion depth limits | Production-safe for large graphs |
| Topological sort | Linear ordering of DAG vertices | Dependency resolution, build systems |
| Cycle detection | Back edge in directed, visited non-parent in undirected | Deadlock detection, invalid graph validation |
| Connected components | Vertices reachable within same component | Cluster analysis, graph partitioning |
| Bipartite checking | Two-coloring with BFS | Matching problems, resource allocation |
| Strongly connected components | Mutual reachability in directed graphs | Recommendation systems, web communities |

### Chapter Roadmap

\\\mermaid
flowchart TD
    A[Graph Traversal] --> B{BFS or DFS?}
    B --> C[BFS - Queue]
    B --> D[DFS - Stack/Recursion]
    C --> E[Shortest Path Unweighted]
    C --> F[Bipartite Check]
    D --> G[Topological Sort]
    D --> H[Cycle Detection]
    D --> I[Strongly Connected Components]
    D --> J[DFS Iterative]
    D --> K[Connected Components]
    E --> L[Applications]
    G --> L
    H --> L
    I --> L
\\\

---
## 12.1 DFS — Recursive

**Real-World Analogy:** Solving a maze by always keeping your right hand on the wall. You follow the wall as deep as it goes, and when you hit a dead end, you backtrack along your path until you find an unexplored branch. You eventually explore every corridor — but not in order of distance.

### Definition

Depth-First Search (DFS) explores as far as possible along each branch before backtracking. It uses recursion (implicitly the call stack) to remember which vertices to visit next. The algorithm marks vertices as **visited** to avoid infinite loops in cyclic graphs.

### Algorithm Steps

1. Mark the starting vertex as visited.
2. Process the vertex (print/record).
3. For each unvisited neighbor, recursively call DFS on that neighbor.
4. When all neighbors are visited, backtrack to the previous caller.
5. Repeat until all reachable vertices from the source are visited.

### Pseudocode

\\\
DFS(G, v):
    visited[v] = true
    process(v)
    for each neighbor u of v in G:
        if not visited[u]:
            DFS(G, u)
\\\

### Step-by-Step Dry Run

Input graph (undirected):
\\\
    0 --- 1 --- 3 --- 4
    |           |
    2 --- 5     |
            |
            6
\\\

Edges: (0,1), (0,2), (1,3), (2,5), (3,4), (5,6)

Start: vertex 0. Neighbors visited in ascending order.

| Step | Call Stack | v | visited[] (T=marked) | Action |
|------|-----------|----|---------------------|--------|
| 1 | [0] | 0 | {0} | Visit 0, go to neighbor 1 |
| 2 | [0,1] | 1 | {0,1} | Visit 1, go to neighbor 3 |
| 3 | [0,1,3] | 3 | {0,1,3} | Visit 3, go to neighbor 4 |
| 4 | [0,1,3,4] | 4 | {0,1,3,4} | Visit 4, no unvisited neighbors, backtrack |
| 5 | [0,1,3] | 3 | — | 3's neighbors done, backtrack |
| 6 | [0,1] | 1 | — | 1's neighbors done, backtrack |
| 7 | [0] | 0 | — | Next unvisited neighbor: 2 |
| 8 | [0,2] | 2 | {0,1,2,3,4} | Visit 2, go to neighbor 5 |
| 9 | [0,2,5] | 5 | {0,1,2,3,4,5} | Visit 5, go to neighbor 6 |
| 10 | [0,2,5,6] | 6 | {0,1,2,3,4,5,6} | Visit 6, dead end, backtrack |
| 11 | [0,2,5] | 5 | all visited | Backtrack through [2], [0], done |

**DFS Order:** 0, 1, 3, 4, 2, 5, 6

### Complexity Analysis

| Case | Complexity | When |
|------|-----------|------|
| **Time** | O(V + E) | Each vertex processed once, each edge examined once |
| **Space** | O(V) | Recursion stack (worst: linear chain) + visited array |

**Why O(V + E)?** Each vertex is processed exactly once (V operations). Each edge is examined exactly once in an undirected graph (2E times in adjacency list — each direction is examined from its source vertex). Summed: V + E total operations.

**Why not O(V²)?** With adjacency lists we only examine existing edges, not all possible edges. An adjacency matrix would require O(V²) because each vertex would check all V columns for possible edges.

**Why O(V) space?** In a linear chain of V vertices, the recursion depth reaches V. DFS from the first vertex goes V levels deep before the first backtrack.

### Implementations

\\\cpp
// C++ — Recursive DFS
#include &lt;iostream&gt;
#include &lt;vector&gt;
#include &lt;list&gt;

class Graph {
    int V;
    std::vector&lt;std::list<int&gt;> adj;

    void dfsUtil(int v, std::vector&lt;bool&gt;& visited) {
        visited[v] = true;
        std::cout &lt;< v << " ";
        for (int u : adj[v]) {
            if (!visited[u])
                dfsUtil(u, visited);
        }
    }

public:
    Graph(int n) : V(n) { adj.resize(V); }
    void addEdge(int u, int v) {
        adj[u].push_back(v);
        adj[v].push_back(u);
    }
    void dfs(int s) {
        std::vector&lt;bool&gt; visited(V, false);
        dfsUtil(s, visited);
        std::cout &lt;< "\n";
    }
};
\\\

\\\python
# Python — Recursive DFS
class Graph:
    def __init__(self, n):
        self.V = n
        self.adj = [[] for _ in range(n)]

    def add_edge(self, u, v):
        self.adj[u].append(v)
        self.adj[v].append(u)

    def _dfs_util(self, v, visited):
        visited[v] = True
        print(v, end=" ")
        for u in self.adj[v]:
            if not visited[u]:
                self._dfs_util(u, visited)

    def dfs(self, s):
        visited = [False] * self.V
        self._dfs_util(s, visited)
        print()
\\\

\\\java
// Java — Recursive DFS
import java.util.*;

class Graph {
    private int V;
    private List&lt;List<Integer&gt;> adj;

    Graph(int n) {
        V = n;
        adj = new ArrayList&lt;>(V);
        for (int i = 0; i &lt; V; i++) adj.add(new ArrayList<&gt;());
    }

    void addEdge(int u, int v) {
        adj.get(u).add(v);
        adj.get(v).add(u);
    }

    private void dfsUtil(int v, boolean[] visited) {
        visited[v] = true;
        System.out.print(v + " ");
        for (int u : adj.get(v))
            if (!visited[u]) dfsUtil(u, visited);
    }

    void dfs(int s) {
        boolean[] visited = new boolean[V];
        dfsUtil(s, visited);
        System.out.println();
    }
}
\\\

### Advantages & Disadvantages

| Advantages | Disadvantages |
|-----------|--------------|
| Simple, elegant recursive implementation | Stack overflow on deep graphs (O(V) recursion depth) |
| Low memory per edge | Can get stuck going very deep in large graphs |
| Natural for connectivity and cycle detection | Doesn't guarantee shortest paths |

### Edge Cases

- **Disconnected graph:** DFS from a source only visits one component. Loop over all vertices for full coverage.
- **Single vertex:** Immediate return after marking visited.
- **Cycle:** Visited array prevents infinite loops.
- **Empty graph (V=0):** No vertices to traverse.

---

## 12.2 DFS — Iterative

**Real-World Analogy:** A hiker exploring trails using a stack of sticky notes. At each junction, the hiker writes all unexplored branches on notes and stacks them. The top note dictates the next path. When a trail ends, the hiker picks the top note from the stack. This avoids deep mental recursion — practical for long expeditions.

### Definition

Iterative DFS uses an explicit stack (LIFO) instead of the call stack. This avoids recursion depth limits. The key structural difference from BFS: we use a stack instead of a queue.

### Algorithm Steps

1. Create an empty stack. Push the starting vertex and mark it visited.
2. While the stack is not empty:
   a. Pop the top vertex from the stack.
   b. Process the vertex.
   c. For each unvisited neighbor, mark it visited and push it onto the stack.

### Pseudocode

\\\
DFS_Iterative(G, s):
    visited[s] = true
    stack.push(s)
    while stack is not empty:
        v = stack.pop()
        process(v)
        for each neighbor u of v:
            if not visited[u]:
                visited[u] = true
                stack.push(u)
\\\

### Step-by-Step Dry Run

Same graph: 0-1-3-4 / 0-2-5-6

Start: vertex 0.

| Step | Stack (top→bottom) | Pop | visited[] | Action |
|------|-------------------|-----|-----------|--------|
| 1 | [0] | — | {0} | Push 0 |
| 2 | [] | 0 | — | Pop 0, process. Push neighbors 1, 2 |
| 3 | [2, 1] | — | {0,1,2} | Pushed 1 and 2 |
| 4 | [2] | 1 | — | Pop 1, process. Push neighbor 3 |
| 5 | [2, 3] | — | {0,1,2,3} | Pushed 3 |
| 6 | [2] | 3 | — | Pop 3, process. Push neighbor 4 |
| 7 | [2, 4] | — | {0,1,2,3,4} | Pushed 4 |
| 8 | [2] | 4 | — | Pop 4, process. No new neighbors |
| 9 | [] | 2 | — | Pop 2, process. Push neighbor 5 |
| 10 | [5] | — | {0,1,2,3,4,5} | Pushed 5 |
| 11 | [] | 5 | — | Pop 5, process. Push neighbor 6 |
| 12 | [6] | — | {0,1,2,3,4,5,6} | Pushed 6 |
| 13 | [] | 6 | — | Pop 6, process. Stack empty |

**DFS Order:** 0, 1, 3, 4, 2, 5, 6

> **Note:** To match recursive DFS order exactly, push neighbors in reverse order (largest index first so smallest is popped first).

### Complexity Analysis

| Case | Complexity | When |
|------|-----------|------|
| **Time** | O(V + E) | Each vertex popped once, each edge examined once |
| **Space** | O(V) | Stack + visited array |

**Why same complexity as recursive DFS?** The algorithm does the same number of operations — each vertex pushed/popped once, each edge examined once. The only difference is where memory is allocated (heap vs call stack).

### Implementations

\\\cpp
// C++ — Iterative DFS
void dfsIterative(int s, const std::vector&lt;std::list<int&gt;>& adj) {
    int V = adj.size();
    std::vector&lt;bool&gt; visited(V, false);
    std::stack&lt;int&gt; st;
    visited[s] = true;
    st.push(s);
    while (!st.empty()) {
        int v = st.top(); st.pop();
        std::cout &lt;< v << " ";
        for (int u : adj[v]) {
            if (!visited[u]) {
                visited[u] = true;
                st.push(u);
            }
        }
    }
    std::cout &lt;< "\n";
}
\\\

\\\python
# Python — Iterative DFS
def dfs_iterative(adj, s):
    V = len(adj)
    visited = [False] * V
    stack = [s]
    visited[s] = True
    while stack:
        v = stack.pop()
        print(v, end=" ")
        for u in adj[v]:
            if not visited[u]:
                visited[u] = True
                stack.append(u)
    print()
\\\

\\\java
// Java — Iterative DFS
void dfsIterative(List&lt;List<Integer&gt;> adj, int s) {
    int V = adj.size();
    boolean[] visited = new boolean[V];
    Stack&lt;Integer&gt; stack = new Stack&lt;>();
    visited[s] = true;
    stack.push(s);
    while (!stack.isEmpty()) {
        int v = stack.pop();
        System.out.print(v + " ");
        for (int u : adj.get(v)) {
            if (!visited[u]) {
                visited[u] = true;
                stack.push(u);
            }
        }
    }
    System.out.println();
}
\\\

### Advantages & Disadvantages

| Advantages | Disadvantages |
|-----------|--------------|
| No recursion depth limit — safe for large graphs | More code than recursive version |
| Explicit control over traversal order | May produce different order than recursion |
| Memory usage on heap, not call stack | Must carefully manage neighbor ordering |

### Edge Cases

- **Deep linear chain:** Explicit stack on the heap avoids stack overflow — production-safe for graphs with 10^6+ depth.
- **Same as recursive DFS** for disconnected, single-node, cycle, and empty graph cases.

---
## 12.3 BFS — Breadth-First Search

**Real-World Analogy:** Dropping a stone into a still pond. Ripples spread outward in concentric circles. BFS visits all vertices at distance 1 from the source, then distance 2, then 3, exactly like GPS navigation: explore all roads one turn away, then two turns, until the destination is found. The path to any vertex is guaranteed to use the minimum number of edges.

### Definition

BFS visits vertices in order of increasing distance from the source using a **queue** (FIFO). Vertices closer to the source are processed before farther ones. BFS is the traversal of choice for shortest paths in unweighted graphs.

### Algorithm Steps

1. Mark the starting vertex visited with distance 0 and enqueue it.
2. While the queue is not empty:
   a. Dequeue the front vertex.
   b. Process the vertex.
   c. For each unvisited neighbor: mark it visited, set its distance = current + 1, enqueue it.

### Pseudocode

\\\
BFS(G, s):
    visited[s] = true
    distance[s] = 0
    queue.enqueue(s)
    while queue is not empty:
        v = queue.dequeue()
        process(v)
        for each neighbor u of v:
            if not visited[u]:
                visited[u] = true
                distance[u] = distance[v] + 1
                queue.enqueue(u)
\\\

### Step-by-Step Dry Run

Graph: 0-1-3-4 / 0-2-5-6

Start: vertex 0.

| Step | Queue (front→back) | Dequeue | visited[] | dist[] | Action |
|------|--------------------|---------|-----------|--------|--------|
| 1 | [0] | — | {0} | dist[0]=0 | Enqueue 0 |
| 2 | [] | 0 | — | — | Dequeue 0, enqueue 1,2 |
| 3 | [1,2] | — | {0,1,2} | dist[1]=1, dist[2]=1 | Enqueued neighbors |
| 4 | [2] | 1 | — | — | Dequeue 1, enqueue 3 |
| 5 | [2,3] | — | {0,1,2,3} | dist[3]=2 | Enqueued 3 |
| 6 | [3] | 2 | — | — | Dequeue 2, enqueue 5 |
| 7 | [3,5] | — | {0,1,2,3,5} | dist[5]=2 | Enqueued 5 |
| 8 | [5] | 3 | — | — | Dequeue 3, enqueue 4 |
| 9 | [5,4] | — | {0,1,2,3,4,5} | dist[4]=3 | Enqueued 4 |
| 10 | [4] | 5 | — | — | Dequeue 5, enqueue 6 |
| 11 | [4,6] | — | {0,1,2,3,4,5,6} | dist[6]=3 | Enqueued 6 |
| 12 | [6] | 4 | — | — | Dequeue 4 |
| 13 | [] | 6 | — | — | Dequeue 6, queue empty |

**BFS Order:** 0, 1, 2, 3, 5, 4, 6
**Distances:** [0:0, 1:1, 2:1, 3:2, 5:2, 4:3, 6:3]

### Complexity Analysis

| Case | Complexity | When |
|------|-----------|------|
| **Time** | O(V + E) | Each vertex enqueued/dequeued once, each edge examined once |
| **Space** | O(V) | Queue (holds up to V vertices) + visited array |

**Why O(V + E)?** Each vertex is enqueued once and dequeued once — O(V) operations. For each dequeued vertex, we examine its adjacency list. Summed over all vertices, this is O(E) work. Total: O(V + E).

**BFS queue vs DFS stack:** BFS's queue grows to the "width" of the graph (worst: O(V) for a star graph where the center is processed and all leaves are enqueued). DFS's stack grows to the "depth" (worst: O(V) for a chain). Both are O(V) worst-case but BFS tends to use more memory on wide graphs.

### Implementations

\\\cpp
// C++ — BFS
#include &lt;queue&gt;
std::vector&lt;int&gt; bfs(int s, const std::vector&lt;std::list<int&gt;>& adj) {
    int V = adj.size();
    std::vector&lt;int&gt; dist(V, -1);
    std::queue&lt;int&gt; q;
    dist[s] = 0;
    q.push(s);
    while (!q.empty()) {
        int v = q.front(); q.pop();
        for (int u : adj[v]) {
            if (dist[u] == -1) {
                dist[u] = dist[v] + 1;
                q.push(u);
            }
        }
    }
    return dist;
}
\\\

\\\python
# Python — BFS
from collections import deque

def bfs(adj, s):
    V = len(adj)
    dist = [-1] * V
    q = deque([s])
    dist[s] = 0
    while q:
        v = q.popleft()
        for u in adj[v]:
            if dist[u] == -1:
                dist[u] = dist[v] + 1
                q.append(u)
    return dist
\\\

\\\java
// Java — BFS
List&lt;Integer&gt; bfs(List&lt;List<Integer&gt;> adj, int s) {
    int V = adj.size();
    List&lt;Integer&gt; dist = new ArrayList&lt;>(Collections.nCopies(V, -1));
    Queue&lt;Integer&gt; q = new LinkedList&lt;>();
    dist.set(s, 0);
    q.offer(s);
    while (!q.isEmpty()) {
        int v = q.poll();
        for (int u : adj.get(v)) {
            if (dist.get(u) == -1) {
                dist.set(u, dist.get(v) + 1);
                q.offer(u);
            }
        }
    }
    return dist;
}
\\\

### Advantages & Disadvantages

| Advantages | Disadvantages |
|-----------|--------------|
| Shortest path in unweighted graphs (guaranteed) | Queue can grow large — more memory than DFS |
| Level-order traversal useful for many apps | Cannot directly do topological sort |
| No recursion — safe for any depth | Not as natural for deep connectivity problems |

### Edge Cases

- **Disconnected graph:** BFS from a source reaches one component. Use outer loop for all components.
- **Single vertex:** Dequeued immediately, distance 0.
- **Cycle:** Visited array prevents re-queuing.
- **High branching factor:** Queue may hold most of the graph simultaneously.

---

## 12.4 Connected Components

**Real-World Analogy:** An archipelago of islands connected by bridges. Islands reachable from each other via bridges form one group (component). Finding connected components tells you how many distinct archipelagos exist. On Facebook, connected components represent groups of users who can reach each other through friend connections — isolated groups of friends.

### Definition

A **connected component** in an undirected graph is a maximal set of vertices where every pair is connected by some path. Algorithm: run DFS/BFS from each unvisited vertex; each new traversal discovers one component.

### Algorithm Steps

1. Initialize component_id array to -1 (unassigned).
2. For each vertex v: if component_id[v] == -1, start a new component.
3. Run DFS/BFS from v, labeling all reachable vertices with current_id.
4. Increment current_id and continue.

### Pseudocode

\\\
FindComponents(G):
    comp = array[V] initialized to -1
    id = 0
    for each vertex v in G:
        if comp[v] == -1:
            DFS_Label(G, v, comp, id)
            id++
    return comp

DFS_Label(G, v, comp, id):
    comp[v] = id
    for each neighbor u of v:
        if comp[u] == -1:
            DFS_Label(G, u, comp, id)
\\\

### Step-by-Step Dry Run

Graph with two components:
\\\
Component 0:     Component 1:
    0 --- 1         4 --- 5
    |                     |
    2                     6
    |
    3
\\\

| Step | v | comp[] | Action |
|------|---|--------|--------|
| 1 | 0 | [0, -1, -1, -1, -1, -1, -1] | Start DFS from 0, label id=0 |
| 2 | 1 (via 0) | [0, 0, -1, -1, -1, -1, -1] | DFS visits 1 |
| 3 | 2 (via 0) | [0, 0, 0, -1, -1, -1, -1] | DFS visits 2 |
| 4 | 3 (via 2) | [0, 0, 0, 0, -1, -1, -1] | DFS visits 3 |
| 5 | backtrack | — | Component 0 complete |
| 6 | 4 | [0,0,0,0, 1, -1, -1] | Start new DFS, label id=1 |
| 7 | 5 (via 4) | [0,0,0,0, 1, 1, -1] | DFS visits 5 |
| 8 | 6 (via 5) | [0,0,0,0, 1, 1, 1] | DFS visits 6 |
| 9 | backtrack | — | Component 1 complete |

**Components:** Component 0 = {0,1,2,3}, Component 1 = {4,5,6}

### Complexity Analysis

| Case | Complexity | When |
|------|-----------|------|
| **Time** | O(V + E) | Each vertex/edge examined once total across all DFS calls |
| **Space** | O(V) | comp array + recursion stack |

**Why O(V + E) total?** The outer loop visits each vertex exactly once. Each DFS call only processes unvisited vertices. An edge is examined only when its source vertex is processed. Every vertex and edge is processed exactly once in total — regardless of how many components exist. This is a key property: even with 100 components, we still do O(V + E) total work.

### Implementations

\\\cpp
// C++ — Connected Components (Iterative DFS)
int findComponents(const std::vector&lt;std::list<int&gt;>& adj,
                   std::vector&lt;int&gt;& comp) {
    int V = adj.size();
    comp.assign(V, -1);
    int id = 0;
    for (int v = 0; v &lt; V; ++v) {
        if (comp[v] == -1) {
            std::stack&lt;int&gt; st;
            st.push(v);
            comp[v] = id;
            while (!st.empty()) {
                int u = st.top(); st.pop();
                for (int w : adj[u])
                    if (comp[w] == -1) {
                        comp[w] = id;
                        st.push(w);
                    }
            }
            ++id;
        }
    }
    return id; // number of components
}
\\\

\\\python
# Python — Connected Components
def find_components(adj):
    V = len(adj)
    comp = [-1] * V
    cur_id = 0
    for v in range(V):
        if comp[v] == -1:
            stack = [v]
            comp[v] = cur_id
            while stack:
                u = stack.pop()
                for w in adj[u]:
                    if comp[w] == -1:
                        comp[w] = cur_id
                        stack.append(w)
            cur_id += 1
    return comp, cur_id
\\\

\\\java
// Java — Connected Components
int[] findComponents(List&lt;List<Integer&gt;> adj) {
    int V = adj.size();
    int[] comp = new int[V];
    Arrays.fill(comp, -1);
    int id = 0;
    for (int v = 0; v &lt; V; v++) {
        if (comp[v] == -1) {
            Stack&lt;Integer&gt; st = new Stack&lt;>();
            st.push(v);
            comp[v] = id;
            while (!st.isEmpty()) {
                int u = st.pop();
                for (int w : adj.get(u))
                    if (comp[w] == -1) {
                        comp[w] = id;
                        st.push(w);
                    }
            }
            id++;
        }
    }
    return comp;
}
\\\

### Advantages & Disadvantages

| Advantages | Disadvantages |
|-----------|--------------|
| Simple extension of DFS/BFS — O(V + E) | Only for undirected graphs |
| Works for any graph representation | Directed graphs need SCC algorithms |
| Foundation for clustering and graph analysis | |

### Edge Cases

- **Empty graph (V=0):** 0 components.
- **Single isolated vertex:** 1 component of size 1.
- **Fully connected:** 1 component.
- **All isolated vertices:** V components.

---
## 12.5 Cycle Detection

**Real-World Analogy:** A package dependency system (npm/pip). Package A requires B, B requires C, C requires A — circular dependency creates a deadlock where none can install first. Spreadsheet formulas that create a circular reference (A1 = B1+1, B1 = A1+1) trigger an error. Cycle detection catches these impossible configurations.

### Definition

A **cycle** is a path of length >= 3 that starts and ends at the same vertex with no repeated edges. Detection differs by graph type:

- **Undirected:** Edge to a visited vertex that is NOT the parent of the current vertex in the DFS tree = cycle.
- **Directed:** Edge to a vertex on the current DFS recursion stack = "back edge" = cycle.

### Algorithm Steps — Undirected

1. For each unvisited vertex, start DFS with parent = -1.
2. For each neighbor:
   - If unvisited: recursively visit with current as parent.
   - If visited AND neighbor != parent: **cycle detected**.

### Algorithm Steps — Directed

1. For each unvisited vertex, start DFS.
2. Mark current vertex visited AND add to recStack.
3. For each neighbor:
   - If unvisited: recursively visit.
   - If visited AND on recStack: **back edge -> cycle detected**.
4. Remove current from recStack before returning.

### Pseudocode — Undirected

\\\
HasCycleUndirected(G):
    visited = [false] * V
    for each vertex v:
        if not visited[v]:
            if DFS_Cycle_Undirected(G, v, -1, visited):
                return true
    return false

DFS_Cycle_Undirected(G, v, parent, visited):
    visited[v] = true
    for each neighbor u of v:
        if not visited[u]:
            if DFS_Cycle_Undirected(G, u, v, visited):
                return true
        else if u != parent:
            return true   // cycle
    return false
\\\

### Pseudocode — Directed

\\\
HasCycleDirected(G):
    visited = [false] * V
    recStack = [false] * V
    for each vertex v:
        if not visited[v]:
            if DFS_Cycle_Directed(G, v, visited, recStack):
                return true
    return false

DFS_Cycle_Directed(G, v, visited, recStack):
    visited[v] = true
    recStack[v] = true
    for each neighbor u of v:
        if not visited[u]:
            if DFS_Cycle_Directed(G, u, visited, recStack):
                return true
        else if recStack[u]:
            return true   // back edge
    recStack[v] = false
    return false
\\\

### Step-by-Step Dry Run — Directed

Graph: 0 -> 1 -> 2 -> 0

| Step | Call Stack | v | Edge | visited[] | recStack[] | Action |
|------|-----------|----|------|-----------|------------|--------|
| 1 | [0] | 0 | — | {0} | {0} | Start DFS from 0 |
| 2 | [0,1] | 1 | 0→1 | {0,1} | {0,1} | Recurse to 1 |
| 3 | [0,1,2] | 2 | 1→2 | {0,1,2} | {0,1,2} | Recurse to 2 |
| 4 | [0,1,2] | 2→0 | 2→0 | — | — | 0 visited AND in recStack -> **back edge** |
| 5 | — | — | — | — | — | **Return true — cycle exists** |

### Step-by-Step Dry Run — Undirected

Graph: 0-1-2-0 (triangle)

| Step | Call Stack | v | parent | Edge | visited[] | Action |
|------|-----------|----|--------|------|-----------|--------|
| 1 | [0] | 0 | -1 | — | {0} | Start DFS |
| 2 | [0,1] | 1 | 0 | 0-1 | {0,1} | Recurse to 1 |
| 3 | [0,1,2] | 2 | 1 | 1-2 | {0,1,2} | Recurse to 2 |
| 4 | [0,1,2] | 2→0 | 1 | 2-0 | — | 0 visited AND 0 != parent(1) -> **cycle** |

### Complexity Analysis

| Case | Complexity | When |
|------|-----------|------|
| **Time** | O(V + E) | Single DFS pass |
| **Space** | O(V) | visited + recStack (directed) + recursion stack |

**Why O(V + E)?** Each vertex is visited once. Each edge is examined once. The recStack check is O(1) — a simple array lookup. Adding the parent parameter for undirected doesn't change the complexity. This is optimal — you cannot detect a cycle without examining at least V + E elements in the worst case.

### Implementations

\\\cpp
// C++ — Cycle Detection (Directed)
bool hasCycleDirected(const std::vector&lt;std::list<int&gt;>& adj) {
    int V = adj.size();
    std::vector&lt;bool&gt; visited(V, false), recStack(V, false);
    std::function&lt;bool(int)&gt; dfs = [&](int v) -> bool {
        visited[v] = recStack[v] = true;
        for (int u : adj[v]) {
            if (!visited[u]) { if (dfs(u)) return true; }
            else if (recStack[u]) return true;
        }
        recStack[v] = false;
        return false;
    };
    for (int v = 0; v &lt; V; ++v)
        if (!visited[v] && dfs(v)) return true;
    return false;
}

// C++ — Cycle Detection (Undirected)
bool hasCycleUndirected(const std::vector&lt;std::list<int&gt;>& adj) {
    int V = adj.size();
    std::vector&lt;bool&gt; visited(V, false);
    std::function&lt;bool(int, int)&gt; dfs = [&](int v, int p) -> bool {
        visited[v] = true;
        for (int u : adj[v]) {
            if (!visited[u]) { if (dfs(u, v)) return true; }
            else if (u != p) return true;
        }
        return false;
    };
    for (int v = 0; v &lt; V; ++v)
        if (!visited[v] && dfs(v, -1)) return true;
    return false;
}
\\\

\\\python
# Python — Cycle Detection (Directed)
def has_cycle_directed(adj):
    V = len(adj)
    visited = [False] * V
    rec_stack = [False] * V

    def dfs(v):
        visited[v] = rec_stack[v] = True
        for u in adj[v]:
            if not visited[u]:
                if dfs(u): return True
            elif rec_stack[u]: return True
        rec_stack[v] = False
        return False

    for v in range(V):
        if not visited[v] and dfs(v): return True
    return False

# Python — Cycle Detection (Undirected)
def has_cycle_undirected(adj):
    V = len(adj)
    visited = [False] * V

    def dfs(v, parent):
        visited[v] = True
        for u in adj[v]:
            if not visited[u]:
                if dfs(u, v): return True
            elif u != parent: return True
        return False

    for v in range(V):
        if not visited[v] and dfs(v, -1): return True
    return False
\\\

\\\java
// Java — Cycle Detection (Directed)
boolean hasCycleDirected(List&lt;List<Integer&gt;> adj) {
    int V = adj.size();
    boolean[] visited = new boolean[V];
    boolean[] recStack = new boolean[V];
    for (int v = 0; v &lt; V; v++)
        if (!visited[v] && dfsDirected(v, adj, visited, recStack))
            return true;
    return false;
}
boolean dfsDirected(int v, List&lt;List<Integer&gt;> adj,
        boolean[] visited, boolean[] recStack) {
    visited[v] = recStack[v] = true;
    for (int u : adj.get(v)) {
        if (!visited[u]) { if (dfsDirected(u, adj, visited, recStack)) return true; }
        else if (recStack[u]) return true;
    }
    recStack[v] = false;
    return false;
}

// Java — Cycle Detection (Undirected)
boolean hasCycleUndirected(List&lt;List<Integer&gt;> adj) {
    int V = adj.size();
    boolean[] visited = new boolean[V];
    for (int v = 0; v &lt; V; v++)
        if (!visited[v] && dfsUndirected(v, -1, adj, visited))
            return true;
    return false;
}
boolean dfsUndirected(int v, int parent, List&lt;List<Integer&gt;> adj,
        boolean[] visited) {
    visited[v] = true;
    for (int u : adj.get(v)) {
        if (!visited[u]) { if (dfsUndirected(u, v, adj, visited)) return true; }
        else if (u != parent) return true;
    }
    return false;
}
\\\

### Advantages & Disadvantages

| Advantages | Disadvantages |
|-----------|--------------|
| Single DFS pass — efficient O(V + E) | Recursion stack can overflow for deep graphs |
| Works for both directed and undirected | Directed version needs additional recStack array |
| Simple extension of standard DFS | Undirected version needs parent tracking |

### Edge Cases

- **Self-loop:** edge from vertex to itself is a cycle. In undirected check, the parent check would miss a self-loop (u == parent catches it? No, u == v is the self-loop case). Handle by checking u == v explicitly.
- **Parallel edges:** Two edges between the same vertices form a cycle of length 2 in undirected graphs (u-v-u).
- **Single vertex:** No possible cycle.
- **Disconnected DAGs:** Each component checked individually by the outer loop.

---

## 12.6 Bipartite Graph Check

**Real-World Analogy:** A school assigns students to two classrooms for an exam. Students who know each other must sit in different rooms to prevent cheating. Can we color every student red or blue such that no adjacent students share a color? This is the bipartite problem. Real applications: scheduling conflicts into time slots, frequency assignment in wireless networks (adjacent cells get different frequencies), job matching.

### Definition

A graph is **bipartite** if vertices can be divided into two disjoint sets such that every edge connects vertices from different sets. Equivalently: 2-colorable with no adjacent vertices sharing a color. A graph is bipartite **iff** it contains no odd-length cycles.

### Algorithm Steps (BFS)

1. Initialize color array to -1 (uncolored).
2. For each vertex v (to handle disconnected graphs):
   a. If color[v] == -1, set color[v] = 0 and enqueue v.
   b. While queue not empty:
      i. Dequeue u.
      ii. For each neighbor w:
          - If color[w] == -1: color[w] = 1 - color[u], enqueue w.
          - If color[w] == color[u]: NOT bipartite.

### Pseudocode

\\\
IsBipartite(G):
    color = array[V] initialized to -1
    for each vertex v:
        if color[v] == -1:
            queue.enqueue(v)
            color[v] = 0
            while queue is not empty:
                u = queue.dequeue()
                for each neighbor w of u:
                    if color[w] == -1:
                        color[w] = 1 - color[u]
                        queue.enqueue(w)
                    else if color[w] == color[u]:
                        return false
    return true
\\\

### Step-by-Step Dry Run

Graph (bipartite — 4-cycle):
\\\
    0 --- 1
    |     |
    3 --- 2
\\\

| Step | Queue | v | color[] | Action |
|------|-------|---|---------|--------|
| 1 | [0] | 0 | [0, -1, -1, -1] | Color 0 as 0 |
| 2 | [1,3] | 0 | [0, 1, -1, 1] | Enqueue 1 (color 1), 3 (color 1) |
| 3 | [3] | 1 | — | 1's neighbor 2 (uncolored -> color 0) |
| 4 | [2] | 3 | [0, 1, -1, 1] | 3's neighbors: 0 (color 0, diff), 2 (color -1 -> color 0) |
| 5 | [] | 2 | [0, 1, 0, 1] | 2's neighbors: 1 (color 1, diff), 3 (color 1, diff) |
| 6 | — | — | — | **All OK — graph IS bipartite** |

Now test a triangle (3-cycle — NOT bipartite):
\\\
    0 --- 1
     \   /
       2
\\\

| Step | Queue | v | color[] | Action |
|------|-------|---|---------|--------|
| 1 | [0] | 0 | [0, -1, -1] | Color 0 = 0 |
| 2 | [1,2] | 0 | [0, 1, 1] | Color 1=1, 2=1 |
| 3 | [2] | 1 | — | neighbor 2: color[2]=1 == color[1]=1 -> **Conflict!** |

**Result:** Triangle has odd cycle — NOT bipartite.

### Complexity Analysis

| Case | Complexity | When |
|------|-----------|------|
| **Time** | O(V + E) | BFS visits each vertex/edge once |
| **Space** | O(V) | Color array + queue |

**Why O(V + E)?** This is a standard BFS traversal, possibly restarted for disconnected components. Each vertex is enqueued once, each edge examined once. The color check is an O(1) array access. No extra passes needed.

**Why does it detect odd cycles?** A graph has an odd cycle iff it's not bipartite. The BFS coloring will detect a color conflict exactly when two vertices at odd distance from each other are forced to share a color — which happens precisely when there's an odd-length cycle.

### Implementations

\\\cpp
// C++ — Bipartite Check (BFS)
bool isBipartite(const std::vector&lt;std::list<int&gt;>& adj) {
    int V = adj.size();
    std::vector&lt;int&gt; color(V, -1);
    for (int v = 0; v &lt; V; ++v) {
        if (color[v] == -1) {
            std::queue&lt;int&gt; q;
            color[v] = 0;
            q.push(v);
            while (!q.empty()) {
                int u = q.front(); q.pop();
                for (int w : adj[u]) {
                    if (color[w] == -1) {
                        color[w] = 1 - color[u];
                        q.push(w);
                    } else if (color[w] == color[u]) {
                        return false;
                    }
                }
            }
        }
    }
    return true;
}
\\\

\\\python
# Python — Bipartite Check (BFS)
from collections import deque

def is_bipartite(adj):
    V = len(adj)
    color = [-1] * V
    for v in range(V):
        if color[v] == -1:
            q = deque([v])
            color[v] = 0
            while q:
                u = q.popleft()
                for w in adj[u]:
                    if color[w] == -1:
                        color[w] = 1 - color[u]
                        q.append(w)
                    elif color[w] == color[u]:
                        return False
    return True
\\\

\\\java
// Java — Bipartite Check (BFS)
boolean isBipartite(List&lt;List<Integer&gt;> adj) {
    int V = adj.size();
    int[] color = new int[V];
    Arrays.fill(color, -1);
    for (int v = 0; v &lt; V; v++) {
        if (color[v] == -1) {
            Queue&lt;Integer&gt; q = new LinkedList&lt;>();
            color[v] = 0;
            q.offer(v);
            while (!q.isEmpty()) {
                int u = q.poll();
                for (int w : adj.get(u)) {
                    if (color[w] == -1) {
                        color[w] = 1 - color[u];
                        q.offer(w);
                    } else if (color[w] == color[u]) {
                        return false;
                    }
                }
            }
        }
    }
    return true;
}
\\\

### Advantages & Disadvantages

| Advantages | Disadvantages |
|-----------|--------------|
| O(V + E) time — efficient | Only works for undirected graphs |
| Simple BFS-based coloring | Only handles 2-coloring (not general graph coloring) |
| Detects all odd cycles | BFS queue can be large for wide graphs |

### Edge Cases

- **Empty graph:** Vacuously bipartite (no edges).
- **Single vertex:** Trivially bipartite.
- **Disconnected graph:** Each component checked separately.
- **Odd cycle:** Always non-bipartite (by theorem).
- **Self-loop:** Not bipartite (vertex would need two different colors).

---

## 12.7 Topological Sort

**Real-World Analogy:** Planning a college course schedule. Calculus I before Calculus II, Calculus II before Differential Equations. This is a partial order — some courses depend on others, but unrelated courses (like History and English) can be taken in any order. Topological sort produces a valid sequence respecting all prerequisites. Build systems (Make, Maven, npm) use the same logic: compile dependencies first.

### Definition

A **topological ordering** of a DAG is a linear ordering where for every edge u -> v, u appears before v. Exists **iff** graph is a DAG (no cycles). Two main algorithms:

- **Kahn's algorithm (BFS-based):** Repeatedly remove vertices with in-degree 0.
- **DFS-based:** Perform DFS; push vertices onto a stack after all neighbors processed (post-order).

### Algorithm Steps — Kahn's

1. Compute in-degree for all vertices.
2. Initialize queue with all in-degree-0 vertices.
3. While queue not empty:
   a. Dequeue u, add to result.
   b. For each neighbor v: decrement in-degree. If 0, enqueue v.
4. If result size &lt; V, a cycle exists.

### Algorithm Steps — DFS

1. For each unvisited vertex, call DFS.
2. In DFS: mark visited, recurse on unvisited neighbors.
3. After all neighbors processed, push vertex onto a stack.
4. After all vertices processed, pop stack for topological order.

### Pseudocode — Kahn's

\\\
KahnTopologicalSort(G):
    in_degree = array[V] initialized to 0
    for each vertex u:
        for each neighbor v of u:
            in_degree[v]++

    queue = []
    for each vertex u:
        if in_degree[u] == 0:
            queue.enqueue(u)

    result = []
    while queue is not empty:
        u = queue.dequeue()
        result.append(u)
        for each neighbor v of u:
            in_degree[v]--
            if in_degree[v] == 0:
                queue.enqueue(v)

    if result.size() != V:
        error: graph has a cycle
    return result
\\\

### Pseudocode — DFS

\\\
DFSTopologicalSort(G):
    visited = [false] * V
    stack = []
    for each vertex v:
        if not visited[v]:
            DFS_Topo(G, v, visited, stack)
    return stack (pop for order)

DFS_Topo(G, v, visited, stack):
    visited[v] = true
    for each neighbor u of v:
        if not visited[u]:
            DFS_Topo(G, u, visited, stack)
    stack.push(v)   // post-order
\\\

### Step-by-Step Dry Run — Kahn's

Graph (DAG):
\\\
    5 -> 0 &lt;- 4
    v    v
    2 -> 3 -> 1
\\\

Edges: 5->2, 5->0, 4->0, 4->1, 2->3, 3->1

Initial in-degrees: in[0]=2, in[1]=2, in[2]=1, in[3]=1, in[4]=0, in[5]=0

| Step | Queue | Dequeue | Result | in-degree Changes |
|------|-------|---------|--------|-------------------|
| 1 | [4,5] | — | [] | Initial: 4,5 have in-degree 0 |
| 2 | [5] | 4 | [4] | 4->0: in[0]--, 4->1: in[1]-- |
| 3 | [0? No, in=1] | 5 | [4,5] | 5->0: in[0]--=0, 5->2: in[2]--=0 |
| 4 | [0,2] | — | — | in[0]=0, in[2]=0 -> enqueue |
| 5 | [2] | 0 | [4,5,0] | 0 has no outgoing edges |
| 6 | [] | 2 | [4,5,0,2] | 2->3: in[3]--=0 -> enqueue 3 |
| 7 | [3] | — | — | in[3]=0 |
| 8 | [] | 3 | [4,5,0,2,3] | 3->1: in[1]--=0 -> enqueue 1 |
| 9 | [1] | — | — | in[1]=0 |
| 10 | [] | 1 | [4,5,0,2,3,1] | All done |

**Topological Order:** 4, 5, 0, 2, 3, 1

### Step-by-Step Dry Run — DFS

Same graph.

DFS outer loop visits 0,1,2,3,4,5 in order. From 0: neighbor 3 -> from 3: neighbor 1 -> from 1: no unvisited neighbors (after outer loop has processed in order... wait, DFS from 0 in a directed graph visits what? Let me use proper DFS traversal.)

Actually, for the DFS-based topological sort, the order of visiting in the outer loop matters. Let me trace more carefully.

Adjacency:
0: [] (no outgoing edges in this graph? Wait, edges say 5->0, meaning 0 is receiving. Let me re-read: edges are 5->2, 5->0, 4->0, 4->1, 2->3, 3->1. So adj[0] = [] (no outgoing from 0). adj[1] = []. adj[2] = [3]. adj[3] = [1]. adj[4] = [0, 1]. adj[5] = [2, 0].

DFS outer loop: v from 0 to 5:

| Step | v | Action | visited | Stack (push after done) |
|------|---|--------|---------|----------------------|
| 1 | 0 | Visit 0, no neighbors, push 0 | {0} | [0] |
| 2 | 1 | Visit 1, no neighbors, push 1 | {0,1} | [0, 1] |
| 3 | 2 | Visit 2, neighbor 3 (unvisited) | {0,1,2} | [0, 1] |
| 4 | 3 (from 2) | Visit 3, neighbor 1 (visited), push 3 | {0,1,2,3} | [0, 1, 3] |
| 5 | back to 2 | All visited, push 2 | — | [0, 1, 3, 2] |
| 6 | 4 | Visit 4, neighbors 0(visited),1(visited), push 4 | {0,1,2,3,4} | [0, 1, 3, 2, 4] |
| 7 | 5 | Visit 5, neighbors 2(visited),0(visited), push 5 | {all} | [0, 1, 3, 2, 4, 5] |

Stack (bottom->top): [0, 1, 3, 2, 4, 5]
**Topological Order (pop):** 5, 4, 2, 3, 1, 0

Both 4, 5, 0, 2, 3, 1 (Kahn's) and 5, 4, 2, 3, 1, 0 (DFS) are valid topological orders.

### Complexity Analysis

| Aspect | Kahn's Algorithm | DFS-Based |
|--------|-----------------|-----------|
| **Time** | O(V + E) — compute in-degrees O(E), each vertex/edge processed once | O(V + E) — standard DFS |
| **Space** | O(V) — queue + in-degree array | O(V) — recursion stack + visited + stack |
| **Cycle detection** | Built-in (result size &lt; V) | Requires separate check |

**Why O(V + E) for both?** Kahn's: computing in-degrees takes O(E). The while loop processes each vertex and edge once. DFS: each vertex visited once, each edge examined once. The constant factors differ but the asymptotic complexity is identical.

### Implementations

\\\cpp
// C++ — Kahn's Algorithm
std::vector&lt;int&gt; topologicalSortKahn(const std::vector&lt;std::list<int&gt;>& adj) {
    int V = adj.size();
    std::vector&lt;int&gt; inDeg(V, 0);
    for (int u = 0; u &lt; V; ++u)
        for (int v : adj[u]) ++inDeg[v];

    std::queue&lt;int&gt; q;
    for (int i = 0; i &lt; V; ++i)
        if (inDeg[i] == 0) q.push(i);

    std::vector&lt;int&gt; result;
    while (!q.empty()) {
        int u = q.front(); q.pop();
        result.push_back(u);
        for (int v : adj[u])
            if (--inDeg[v] == 0) q.push(v);
    }
    if (result.size() != V) return {}; // cycle
    return result;
}

// C++ — DFS-Based Topological Sort
void dfsTopo(int v, const std::vector&lt;std::list<int&gt;>& adj,
             std::vector&lt;bool&gt;& visited, std::stack&lt;int&gt;& st) {
    visited[v] = true;
    for (int u : adj[v])
        if (!visited[u]) dfsTopo(u, adj, visited, st);
    st.push(v);
}

std::vector&lt;int&gt; topologicalSortDFS(const std::vector&lt;std::list<int&gt;>& adj) {
    int V = adj.size();
    std::vector&lt;bool&gt; visited(V, false);
    std::stack&lt;int&gt; st;
    for (int i = 0; i &lt; V; ++i)
        if (!visited[i]) dfsTopo(i, adj, visited, st);
    std::vector&lt;int&gt; result;
    while (!st.empty()) { result.push_back(st.top()); st.pop(); }
    return result;
}
\\\

\\\python
# Python — Kahn's Algorithm
from collections import deque

def topological_sort_kahn(adj):
    V = len(adj)
    in_deg = [0] * V
    for u in range(V):
        for v in adj[u]: in_deg[v] += 1
    q = deque([i for i in range(V) if in_deg[i] == 0])
    result = []
    while q:
        u = q.popleft()
        result.append(u)
        for v in adj[u]:
            in_deg[v] -= 1
            if in_deg[v] == 0: q.append(v)
    return result if len(result) == V else []

# Python — DFS-Based Topological Sort
def topological_sort_dfs(adj):
    V = len(adj)
    visited = [False] * V
    stack = []

    def dfs(v):
        visited[v] = True
        for u in adj[v]:
            if not visited[u]: dfs(u)
        stack.append(v)

    for v in range(V):
        if not visited[v]: dfs(v)
    return stack[::-1]
\\\

\\\java
// Java — Kahn's Algorithm
List&lt;Integer&gt; topologicalSortKahn(List&lt;List<Integer&gt;> adj) {
    int V = adj.size();
    int[] inDeg = new int[V];
    for (int u = 0; u &lt; V; u++)
        for (int v : adj.get(u)) inDeg[v]++;
    Queue&lt;Integer&gt; q = new LinkedList&lt;>();
    for (int i = 0; i &lt; V; i++)
        if (inDeg[i] == 0) q.offer(i);
    List&lt;Integer&gt; result = new ArrayList&lt;>();
    while (!q.isEmpty()) {
        int u = q.poll();
        result.add(u);
        for (int v : adj.get(u))
            if (--inDeg[v] == 0) q.offer(v);
    }
    if (result.size() != V) return new ArrayList&lt;>();
    return result;
}

// Java — DFS-Based Topological Sort
void dfsTopo(int v, List&lt;List<Integer&gt;> adj,
             boolean[] visited, Stack&lt;Integer&gt; stack) {
    visited[v] = true;
    for (int u : adj.get(v))
        if (!visited[u]) dfsTopo(u, adj, visited, stack);
    stack.push(v);
}

List&lt;Integer&gt; topologicalSortDFS(List&lt;List<Integer&gt;> adj) {
    int V = adj.size();
    boolean[] visited = new boolean[V];
    Stack&lt;Integer&gt; stack = new Stack&lt;>();
    for (int v = 0; v &lt; V; v++)
        if (!visited[v]) dfsTopo(v, adj, visited, stack);
    List&lt;Integer&gt; result = new ArrayList&lt;>();
    while (!stack.isEmpty()) result.add(stack.pop());
    return result;
}
\\\

### Advantages & Disadvantages

| Algorithm | Advantages | Disadvantages |
|-----------|-----------|--------------|
| **Kahn's** | Built-in cycle detection; BFS — no recursion | Requires in-degree pre-computation |
| **DFS-based** | Simpler recursion; natural ordering | No cycle detection; needs separate check |

### Edge Cases

- **Graph with cycle:** Kahn's result shorter than V. DFS needs explicit cycle detection.
- **Single vertex:** Trivially topological — [0].
- **Disconnected DAG:** Both algorithms handle naturally — multiple initial in-degree-0 vertices (Kahn's), outer loop (DFS).
- **Empty graph:** Returns empty list.

---
## 12.8 Strongly Connected Components (Kosaraju)

**Real-World Analogy:** In Twitter, user A follows B, and B follows A. These users are "mutually reachable" — A can see B's tweets and B can see A's tweets. A group where every pair is mutually reachable forms a strongly connected community. On the web, pages that link to each other form web communities. Finding these clusters helps search engines understand topic relevance and recommendation systems identify interest groups.

### Definition

A **strongly connected component (SCC)** of a directed graph is a maximal set of vertices where every pair (u, v) has a path u -> v AND v -> u in the original graph. Kosaraju's algorithm finds all SCCs in O(V + E) time using two DFS passes.

### Kosaraju's Algorithm — Steps

1. Perform DFS on the original graph. Push vertices to a stack **after** they finish (post-order).
2. Compute the **transpose** (reverse) graph — reverse all edge directions.
3. Pop vertices from the stack. For each unvisited vertex in the transpose graph, run DFS. Each DFS tree yields one SCC.

### Pseudocode

\\\
Kosaraju(G):
    stack = []
    visited = [false] * V

    // Step 1: Fill stack in finish-time order
    for each vertex v:
        if not visited[v]:
            DFS_Fill(G, v, visited, stack)

    // Step 2: Compute transpose
    GT = transpose(G)

    // Step 3: DFS on transpose
    visited = [false] * V
    while stack is not empty:
        v = stack.pop()
        if not visited[v]:
            component = DFS_Collect(GT, v, visited)
            print "SCC:", component

DFS_Fill(G, v, visited, stack):
    visited[v] = true
    for each neighbor u of v:
        if not visited[u]:
            DFS_Fill(G, u, visited, stack)
    stack.push(v)   // post-order

DFS_Collect(G, v, visited):
    visited[v] = true
    component = [v]
    for each neighbor u of v:
        if not visited[u]:
            component += DFS_Collect(G, u, visited)
    return component
\\\

### Step-by-Step Dry Run

Graph:
\\\
    0 -> 1 -> 2 -> 0
    v         v
    3 -> 4    5
\\\

Edges: 0->1, 1->2, 2->0, 2->5, 0->3, 1->3, 3->4

**Step 1: DFS on original (compute finish order)**

| Step | v | visited[] | Stack Action |
|------|---|-----------|--------------|
| 1 | 0 | {0} | DFS from 0 |
| 2 | 1 (via 0) | {0,1} | Go to 1 |
| 3 | 2 (via 1) | {0,1,2} | Go to 2 |
| 4 | 5 (via 2) | {0,1,2,5} | Visit 5, no outgoing neighbors, **push 5** |
| 5 | 2 | — | Next neighbor: 0 (visited). All done, **push 2** |
| 6 | 1 | — | Next neighbor: 3 (unvisited). Go to 3 |
| 7 | 3 | {0,1,2,3,5} | Go to 4 |
| 8 | 4 | {0,1,2,3,4,5} | Visit 4, no neighbors, **push 4** |
| 9 | 3 | — | All done, **push 3** |
| 10 | 1 | — | All done, **push 1** |
| 11 | 0 | — | All done, **push 0** |

Stack (bottom->top): [5, 2, 4, 3, 1, 0]

**Step 2: Transpose graph**

Reverse all edges:\
1->0, 2->1, 0->2, 5->2, 3->0, 3->1, 4->3

Transpose adjacency:
- 0: [2]
- 1: [0]
- 2: [1, 5]
- Wait, let me re-derive: original 2->0 becomes 0->2. Original 2->5 becomes 5->2. So transpose: 0 has neighbor 2; 2 has neighbor 1 (from 1->2); 5 has neighbor 2.

Transpose adj:
- 0: [2] (from 2->0)
- 1: [0] (from 0->1)
- 2: [1] (from 1->2)
- 3: [0, 1] (from 0->3, 1->3)
- 4: [3] (from 3->4)
- 5: [2] (from 2->5)

**Step 3: DFS on transpose (pop from stack: 0, 1, 3, 4, 2, 5)**

| Pop | v | visited (T) | DFS on Transpose | SCC |
|-----|---|-------------|-----------------|-----|
| 1 | 0 | {0} | 0 -> 2 -> 1 (neighbor of 2). 1 -> 0 (visited). | {0, 2, 1} |
| 2 | 1 | visited | skip | — |
| 3 | 3 | {3} | 3 -> 0 (visited), 3 -> 1 (visited). | {3} |
| 4 | 4 | {4} | 4 -> 3 (visited). | {4} |
| 5 | 2 | visited | skip | — |
| 6 | 5 | {5} | 5 -> 2 (visited). | {5} |

**SCCs:** {0, 1, 2}, {3}, {4}, {5}

### Complexity Analysis

| Case | Complexity | When |
|------|-----------|------|
| **Time** | O(V + E) | Two DFS passes — each O(V + E) — plus transpose O(V + E) |
| **Space** | O(V + E) | Original + transpose adjacency lists + visited + stack |

**Why O(V + E) and not O(2*(V+E))?** The constant factor of 2 is absorbed by the big-O notation. Both DFS passes visit each vertex and edge exactly once. Building the transpose also takes O(V + E). Total: 3 * O(V + E) = O(V + E).

**Why can't we do it in one pass?** Reachability in directed graphs is asymmetric. u may reach v but not vice versa. The first pass determines a global ordering; the second pass on the transpose leverages the property that SCCs are preserved under graph transposition.

### Implementations

\\\cpp
// C++ — Kosaraju's Algorithm
#include &lt;stack&gt;
#include &lt;vector&gt;
#include &lt;list&gt;

void dfsFill(int v, const std::vector&lt;std::list<int&gt;>& adj,
             std::vector&lt;bool&gt;& visited, std::stack&lt;int&gt;& st) {
    visited[v] = true;
    for (int u : adj[v])
        if (!visited[u]) dfsFill(u, adj, visited, st);
    st.push(v);
}

void dfsCollect(int v, const std::vector&lt;std::list<int&gt;>& adjT,
                std::vector&lt;bool&gt;& visited, std::vector&lt;int&gt;& comp) {
    visited[v] = true;
    comp.push_back(v);
    for (int u : adjT[v])
        if (!visited[u]) dfsCollect(u, adjT, visited, comp);
}

std::vector&lt;std::vector<int&gt;> kosaraju(const std::vector&lt;std::list<int&gt;>& adj) {
    int V = adj.size();
    std::vector&lt;bool&gt; visited(V, false);
    std::stack&lt;int&gt; st;

    for (int v = 0; v &lt; V; ++v)
        if (!visited[v]) dfsFill(v, adj, visited, st);

    // Build transpose
    std::vector&lt;std::list<int&gt;> adjT(V);
    for (int v = 0; v &lt; V; ++v)
        for (int u : adj[v]) adjT[u].push_back(v);

    std::vector&lt;std::vector<int&gt;> sccs;
    visited.assign(V, false);
    while (!st.empty()) {
        int v = st.top(); st.pop();
        if (!visited[v]) {
            std::vector&lt;int&gt; comp;
            dfsCollect(v, adjT, visited, comp);
            sccs.push_back(comp);
        }
    }
    return sccs;
}
\\\

\\\python
# Python — Kosaraju's Algorithm
def kosaraju(adj):
    V = len(adj)
    visited = [False] * V
    stack = []

    def dfs_fill(v):
        visited[v] = True
        for u in adj[v]:
            if not visited[u]: dfs_fill(u)
        stack.append(v)

    for v in range(V):
        if not visited[v]: dfs_fill(v)

    # Build transpose
    adjT = [[] for _ in range(V)]
    for v in range(V):
        for u in adj[v]: adjT[u].append(v)

    visited = [False] * V
    sccs = []

    def dfs_collect(v, comp):
        visited[v] = True
        comp.append(v)
        for u in adjT[v]:
            if not visited[u]: dfs_collect(u, comp)

    while stack:
        v = stack.pop()
        if not visited[v]:
            comp = []
            dfs_collect(v, comp)
            sccs.append(comp)
    return sccs
\\\

\\\java
// Java — Kosaraju's Algorithm
void dfsFill(int v, List&lt;List<Integer&gt;> adj,
             boolean[] visited, Stack&lt;Integer&gt; stack) {
    visited[v] = true;
    for (int u : adj.get(v))
        if (!visited[u]) dfsFill(u, adj, visited, stack);
    stack.push(v);
}

void dfsCollect(int v, List&lt;List<Integer&gt;> adjT,
                boolean[] visited, List&lt;Integer&gt; comp) {
    visited[v] = true;
    comp.add(v);
    for (int u : adjT.get(v))
        if (!visited[u]) dfsCollect(u, adjT, visited, comp);
}

List&lt;List<Integer&gt;> kosaraju(List&lt;List<Integer&gt;> adj) {
    int V = adj.size();
    boolean[] visited = new boolean[V];
    Stack&lt;Integer&gt; stack = new Stack&lt;>();
    for (int v = 0; v &lt; V; v++)
        if (!visited[v]) dfsFill(v, adj, visited, stack);

    List&lt;List<Integer&gt;> adjT = new ArrayList&lt;>();
    for (int v = 0; v &lt; V; v++) adjT.add(new ArrayList<&gt;());
    for (int v = 0; v &lt; V; v++)
        for (int u : adj.get(v)) adjT.get(u).add(v);

    visited = new boolean[V];
    List&lt;List<Integer&gt;> sccs = new ArrayList&lt;>();
    while (!stack.isEmpty()) {
        int v = stack.pop();
        if (!visited[v]) {
            List&lt;Integer&gt; comp = new ArrayList&lt;>();
            dfsCollect(v, adjT, visited, comp);
            sccs.add(comp);
        }
    }
    return sccs;
}
\\\

### Advantages & Disadvantages

| Advantages | Disadvantages |
|-----------|--------------|
| Simple two-pass strategy | Requires transpose graph (double memory) |
| O(V + E) time — optimal | Two DFS passes vs Tarjan's single pass |
| Produces SCCs in reverse topological order | Can't easily find SCCs incrementally |

### Edge Cases

- **DAG:** Every vertex is its own SCC (V components).
- **Single cycle:** One SCC containing all vertices.
- **Single vertex:** One SCC of size 1.
- **Fully connected directed graph:** One SCC (the entire graph).

---

## DFS vs BFS — Comprehensive Comparison

| Property | DFS | BFS |
|----------|-----|-----|
| **Data Structure** | Stack (LIFO) — explicit or recursion | Queue (FIFO) |
| **Traversal Pattern** | Deep first — go to leaf, backtrack | Wide first — level by level |
| **Shortest Path** | Not guaranteed | Guaranteed in unweighted graphs |
| **Space Complexity** | O(V) — stack depth (chain) | O(V) — queue width (star) |
| **Memory per Vertex** | Lower on wide graphs | Lower on deep graphs |
| **Cycle Detection (Undirected)** | Parent check in DFS | More complex — union-find or color-based |
| **Cycle Detection (Directed)** | Back edge via recStack | Not directly possible (use Kahn/Kosaraju) |
| **Topological Sort** | Post-order DFS | Kahn's algorithm (BFS variant) |
| **Connected Components** | Marginal cost in DFS outer loop | Marginal cost in BFS outer loop |
| **Bipartite Check** | More complex | Natural — two-coloring with BFS |
| **Strongly Connected** | Kosaraju/Tarjan (DFS-based) | Not applicable |
| **Recursion Limit** | Can overflow call stack | No recursion — safe |
| **Implementation Complexity** | Simpler recursively; more complex iteratively | Simple — just a queue |
| **When to Use** | Connectivity, cycles, SCC, topological sort | Shortest path, bipartite check, web crawl |

---

## Interview Corner

### Common Questions

1. **Clone Graph** (LeetCode 133)\
   Given a reference to a node in a connected undirected graph, return a deep copy.\
   **Approach:** Use BFS or DFS. Maintain a hash map from original node -> cloned node. When visiting a neighbor, if already cloned, add the clone's neighbor; otherwise, clone and BFS/DFS into it. O(V + E) time and space.

2. **Word Ladder** (LeetCode 127)\
   Given beginWord, endWord, and a word list, find the shortest transformation sequence (change one letter at a time, each intermediate must be in the word list).\
   **Approach:** Model words as graph nodes with an edge when one letter differs. BFS from beginWord to endWord gives the shortest path. Optimization: use bidirectional BFS (meet-in-the-middle) for O(b^(d/2)) instead of O(b^d). Classic BFS shortest-path application.

3. **Number of Islands** (LeetCode 200)\
   Given an m x n 2D binary grid (1 = land, 0 = water), count the number of islands (connected 1s).\
   **Approach:** Iterate through the grid. When a '1' is found, increment count and run DFS/BFS to mark all connected '1's as visited (set to '0'). Each DFS/BFS call from a new '1' discovers one island. This is connected components on a grid graph. O(m * n) time.

4. **Course Schedule** (LeetCode 207)\
   Given n courses and prerequisite pairs [a, b] meaning b -> a, determine if all courses can be finished.\
   **Approach:** Build a directed graph. Check for cycles with DFS + recStack (directed cycle detection), or use Kahn's algorithm and check if all vertices are processed. If cycle exists, impossible. O(V + E) time.

5. **Alien Dictionary** (LeetCode 269)\
   Given a sorted dictionary of an alien language, find the order of characters.\
   **Approach:** Compare adjacent words to find character precedence (first differing character). Build a directed graph of character ordering. Run topological sort (Kahn's). If cycle exists or inconsistent ordering, return empty string. O(C) where C is total characters.

### Pro Tips

- **BFS for shortest path:** When the problem says "minimum number of edges", "shortest transformation", "closest" — that's BFS.
- **DFS for connectivity:** "Is there a path?", "Count components", "Detect cycle" — that's DFS.
- **Topological sort for dependencies:** "Course schedule", "Build order", "Package installation" — look for topological ordering.
- **When BFS needs reconstruction:** Store a predecessor array during BFS. At the end, backtrack from target to source to reconstruct the path.
- **Bidirectional BFS:** For large graphs where BFS from source would explore too many nodes, run BFS from both source and target simultaneously. Cuts the search space from O(b^d) to roughly O(2 * b^(d/2)).

### Common Pitfalls

| Pitfall | Solution |
|---------|----------|
| Forgetting to handle disconnected graphs | Always use outer loop over all vertices |
| Recursion stack overflow on DFS | Use iterative DFS or increase recursion limit |
| BFS not finding shortest path for weighted graphs | Use Dijkstra (not BFS) for weighted edges |
| Not clearing recStack between paths (directed cycle) | Reset recStack[v] = false after each DFS call |
| Infinite loop in iterative DFS if visited marked on pop | Mark visited when **pushing** to stack, not when popping |
| Forgetting that topological sort requires a DAG | Always check for cycles first |

---

## Applications in Real Systems

| Application | Traversal | How It Uses It |
|-------------|-----------|----------------|
| **Web crawling (Google)** | BFS | Processes pages level by level, prioritizing high-importance pages first. A crawler starts with seed URLs, downloads each page, extracts links, and adds new URLs to the frontier queue. BFS ensures crawled pages stay close to the seeds. |
| **GPS Navigation (Google Maps)** | BFS | Finds the shortest route by number of road segments (edges). Each road intersection is a vertex, each road segment is an edge. BFS guarantees the path with fewest turns. For weighted roads (traffic), Dijkstra replaces BFS. |
| **Social recommendations (LinkedIn)** | BFS | "People you may know" queries distance-2 connections: friends of friends not yet connected to you. BFS to depth 2 finds these efficiently. |
| **Package management (npm, pip)** | Topological sort | Resolves dependency order: install dependencies before packages that need them. Kahn's algorithm ensures every package is installed after its prerequisites. If cycle detected, dependency resolution fails with an error. |
| **Build systems (Make, Bazel)** | Topological sort | Determines compilation order: compile library A before library B if B depends on A. Only DAGs are valid build graphs. |
| **Garbage collection (JVM)** | DFS (mark phase) | Starting from root objects (stack variables, static fields), DFS marks all reachable objects. Unmarked objects are garbage. DFS is preferred over BFS because it uses less memory (stack instead of queue) for the object graph. |
| **Recommendation systems** | SCC (Kosaraju) | Identifies communities of mutually-interacting users or items. Pages that link to each other form web communities. Streaming platforms find groups of users with similar taste. |
| **Deadlock detection (DB transactions)** | Cycle detection | Database systems track which transactions hold which locks and which locks other transactions wait for. A cycle in this wait-for graph = deadlock. Victim transaction is rolled back. |
| **Constraint solving / SAT** | Topological sort | In constraint propagation, variables with no dependencies are solved first. Topological ordering of the constraint graph ensures efficient propagation. |
| **Electrical circuit simulation (SPICE)** | Topological sort | Circuit components are evaluated in topological order: inputs before outputs, ensuring signal flows correctly through the circuit DAG. |

---

## One-Sentence Takeaways

- BFS uses a queue, processes vertices by distance, and finds shortest paths.
- DFS uses recursion (or stack), explores deeply, and excels at connectivity analysis.
- Both run in O(V + E) time using adjacency lists.
- Cycle detection in directed graphs uses a recursion stack (back edges).
- An undirected graph is bipartite iff it contains no odd cycle — BFS two-coloring detects this.
- Topological sort requires a DAG; Kahn's algorithm also detects cycles.
- Strongly connected components partition vertices where every pair is mutually reachable — Kosaraju finds them in O(V + E).

---

## Concept Comparison Table

| Feature | BFS | DFS | Dijkstra | A* |
|---------|-----|-----|----------|----|
| Data structure | Queue | Stack (implicit recursion) | Priority queue | Priority queue |
| Space | O(V) | O(V) (worst depth) | O(V) | O(V) |
| Shortest path | Unweighted | Not guaranteed | Weighted (non-negative) | Weighted + heuristic |
| Completeness | Yes | No (may go infinite) | Yes | Yes |
| Optimality | Yes (unweighted) | No | Yes | Yes (admissible heuristic) |

---

## Quick Reference: Traversal Use Cases

| Problem | Algorithm | Why |
|---------|-----------|-----|
| Shortest path (unweighted) | BFS | Level-order guarantees minimum edges |
| Topological sort | Kahn's or DFS | In-degree removal or post-order DFS |
| Cycle detection (directed) | DFS with recStack | Back edges indicate cycles |
| Cycle detection (undirected) | DFS with parent check | Edge to visited non-parent = cycle |
| Connected components | DFS or BFS | Count traversal starts per component |
| Bipartite check | BFS with coloring | No edge connects same-colored vertices |
| SCC | Kosaraju / Tarjan | Two DFS passes or single DFS with low-link |

---

## Cross-Application Matrix

| Application | Traversal | How It Uses It |
|-------------|-----------|----------------|
| Web crawling | BFS | Process pages level by level |
| Puzzle solving (maze) | DFS + backtracking | Explore one path fully before backtracking |
| Dependency resolution | Topological sort | Build packages in correct order |
| Social network friend suggestions | BFS | Find distance-2 connections |
| Garbage collection | DFS | Mark reachable objects from roots |

---

## Common Mistakes & GFG Deepening

### Common Mistakes (GFG-Style)

| Mistake | Why It's Wrong | Correct Approach |
|---------|----------------|------------------|
| Using recursion for BFS (recursion uses a stack, BFS needs a queue) | BFS is inherently iterative — recursion gives depth-first ordering | Always use an explicit queue for BFS |
| Not marking visited when pushing to queue (only when processing) | Same node gets enqueued multiple times, leading to exponential work | Mark visited at enqueue time, not dequeue time |
| DFS recursion on large graphs causing stack overflow | Call stack limit is ~10^4; graph may have 10^5+ vertices | Use explicit stack-based DFS for large graphs |
| Confusing iterative DFS order with recursive DFS order | Stack LIFO reverses neighbor order compared to recursion | Recursive DFS visits neighbors in order; stack-based visits them in reverse unless you push in reverse |
| BFS for shortest path in weighted graphs | BFS finds minimum number of edges, not minimum weight | Use Dijkstra for weighted shortest paths |
| Forgetting to handle disconnected components | Running DFS/BFS from only one node misses other components | Loop all vertices and run traversal from each unvisited one |
| Not resetting visited state between multiple traversals | State leaks across runs, giving incorrect results | Create a fresh visited array/set for each independent traversal |
| Wrong bidirectional BFS termination condition | Two frontiers expand; stop when they intersect, but intersection check must be O(1) | Use a hash set for visited nodes from each direction; stop on overlap |

### TypeScript BFS & DFS Implementations

```typescript
interface Graph {
    getNeighbors(v: number): number[];
}

// BFS returning distances and parent tree
function bfs(graph: Graph, start: number): { dist: number[]; parent: number[] } {
    const n = 1000; // assume graph size
    const dist = new Array(n).fill(-1);
    const parent = new Array(n).fill(-1);
    const queue: number[] = [start];
    dist[start] = 0;
    
    while (queue.length > 0) {
        const u = queue.shift()!;
        for (const v of graph.getNeighbors(u)) {
            if (dist[v] === -1) { // unvisited
                dist[v] = dist[u] + 1;
                parent[v] = u;
                queue.push(v);
            }
        }
    }
    return { dist, parent };
}

// Reconstruct path from BFS parent array
function reconstructPath(parent: number[], target: number): number[] {
    const path: number[] = [];
    let curr = target;
    while (curr !== -1) {
        path.push(curr);
        curr = parent[curr];
    }
    return path.reverse();
}

// Iterative DFS with pre/post order
function dfsIterative(graph: Graph, start: number): { pre: number[]; post: number[] } {
    const visited = new Set<number>();
    const pre: number[] = [];
    const post: number[] = [];
    const stack: { v: number; state: 'enter' | 'exit' }[] = [{ v: start, state: 'enter' }];
    
    while (stack.length > 0) {
        const { v, state } = stack.pop()!;
        if (state === 'enter') {
            if (visited.has(v)) continue;
            visited.add(v);
            pre.push(v);
            stack.push({ v, state: 'exit' });
            // Push neighbors in reverse so original order is preserved
            const neighbors = graph.getNeighbors(v);
            for (let i = neighbors.length - 1; i >= 0; i--) {
                if (!visited.has(neighbors[i])) {
                    stack.push({ v: neighbors[i], state: 'enter' });
                }
            }
        } else {
            post.push(v);
        }
    }
    return { pre, post };
}

// Bidirectional BFS for shortest path in unweighted graph
function bidirectionalBFS(graph: Graph, start: number, target: number): number[] | null {
    if (start === target) return [start];
    const n = 1000;
    const distF = new Array(n).fill(-1);
    const distB = new Array(n).fill(-1);
    const parentF = new Array(n).fill(-1);
    const parentB = new Array(n).fill(-1);
    const queueF: number[] = [start];
    const queueB: number[] = [target];
    distF[start] = 0;
    distB[target] = 0;
    
    const expand = (queue: number[], dist: number[], parent: number[], otherDist: number[]): number | null => {
        const u = queue.shift()!;
        for (const v of graph.getNeighbors(u)) {
            if (dist[v] === -1) {
                dist[v] = dist[u] + 1;
                parent[v] = u;
                if (otherDist[v] !== -1) return v; // intersection
                queue.push(v);
            }
        }
        return null;
    };
    
    while (queueF.length > 0 && queueB.length > 0) {
        const intersect = queueF.length <= queueB.length
            ? expand(queueF, distF, parentF, distB)
            : expand(queueB, distB, parentB, distF);
        if (intersect !== null) {
            // Reconstruct combined path
            const path1: number[] = [];
            let curr = intersect;
            while (curr !== -1) { path1.push(curr); curr = parentF[curr]; }
            path1.reverse();
            const path2: number[] = [];
            curr = intersect;
            while (curr !== -1) { path2.push(curr); curr = parentB[curr]; }
            return [...path1, ...path2.slice(1).reverse()];
        }
    }
    return null;
}
```

### Additional MCQs (GFG Pattern)

9. **What is the worst-case time complexity of DFS on a graph with V vertices and E edges?**
   - a) O(V)
   - b) O(E)
   - c) O(V + E) ✓
   - d) O(V²)

10. **BFS can be used to find:**
    - a) Shortest path in an unweighted graph ✓
    - b) Shortest path in a weighted graph
    - c) Topological ordering
    - d) Strongly connected components

11. **The space complexity of BFS (queue + visited) is:**
    - a) O(1)
    - b) O(V) ✓
    - c) O(E)
    - d) O(V + E)

12. **In which scenario is iterative DFS preferred over recursive DFS?**
    - a) The graph is small
    - b) The graph is deep (tall) ✓
    - c) The graph is dense
    - d) The graph is directed

13. **Bidirectional BFS reduces the search space from b^d to approximately:**
    - a) b^(d/2) ✓
    - b) b^(2d)
    - c) 2b^d
    - d) b^d / 2

14. **Which traversal guarantees a node is processed after all its descendants?**
    - a) Pre-order DFS
    - b) Post-order DFS ✓
    - c) BFS
    - d) In-order DFS

**Answers:** 9-c, 10-a, 11-b, 12-b, 13-a, 14-b

### Additional Exercises (GFG Pattern)

12. **Word ladder (BFS)**: Given a start word, end word, and a dictionary, find the length of the shortest transformation sequence from start to end, changing one letter at a time.

13. **Rotting oranges (BFS multi-source)**: Given a grid where 0=empty, 1=fresh orange, 2=rotten orange, find the minimum time for all oranges to rot (rot spreads to adjacent cells each minute).

14. **Number of islands (DFS/BFS)**: Given a binary grid (1=land, 0=water), count the number of islands (connected components of 1s).

15. **Clone a graph (DFS/BFS)**: Given a reference to a node in a connected undirected graph, return a deep copy (clone) of the entire graph.

16. **Detect cycle in a directed graph**: Use DFS with a recursion stack (white/gray/black coloring) to detect cycles in a directed graph.

17. **Topological sort using DFS**: Implement topological sorting using DFS (post-order) for a DAG.

18. **Minimum knight moves on chessboard (BFS)**: Find the minimum number of moves a knight needs to reach a target square on an infinite chessboard.

19. **Course schedule (cycle detection/DFS)**: Given numCourses and prerequisites pairs, determine if all courses can be completed (no cycle in the dependency graph).

20. **Alien dictionary**: Given a sorted dictionary of an alien language, find the order of characters using topological sort.

21. **Find the shortest cycle in an undirected graph**: Use BFS from each vertex, stop when finding an already-visited neighbor (not parent).

### Traversal Comparison

| Property | BFS | DFS (Recursive) | DFS (Iterative) | Bidirectional BFS |
|----------|-----|-----------------|-----------------|-------------------|
| Data structure | Queue | Call stack (implicit) | Stack (explicit) | Two queues |
| Space | O(width) = O(V) | O(depth) = O(V) | O(depth) = O(V) | O(b^(d/2)) |
| Shortest path (unweighted) | Yes | No | No | Yes |
| Completeness | Yes | No (can go infinite) | No (can go infinite) | Yes |
| Optimal | Yes | No | No | Yes |
| Cycle detection | Yes | Yes | Yes | N/A |
| Topological sort | Kahn's | Post-order | Post-order | N/A |
| Connected components | Yes | Yes | Yes | N/A |
   - c) Priority queue
   - d) Hash table

2. **What is BFS's time complexity on adjacency lists?**
   - a) O(V)
   - b) O(V + E) ✅
   - c) O(V²)
   - d) O(E²)

3. **In directed graph cycle detection, what indicates a cycle?**
   - a) Cross edge
   - b) Back edge ✅
   - c) Forward edge
   - d) Tree edge

4. **Kahn's algorithm detects cycles when:**
   - a) All vertices are processed
   - b) Some vertices remain unprocessed ✅
   - c) The queue is empty
   - d) In-degrees are zero

5. **Which algorithm finds shortest paths in unweighted graphs?**
   - a) DFS
   - b) BFS ✅
   - c) Topological sort
   - d) Kosaraju's

6. **A graph is bipartite iff it contains:**
   - a) No cycles
   - b) No odd cycles ✅
   - c) No even cycles
   - d) No back edges

7. **What is the space complexity of Kosaraju's algorithm?**
   - a) O(V)
   - b) O(V + E) ✅
   - c) O(E²)
   - d) O(log V)

8. **Which traversal is used for topological sort?**
   - a) BFS only
   - b) DFS only
   - c) Both BFS (Kahn's) and DFS ✅
   - d) Neither

**Answers:** 1-b, 2-b, 3-b, 4-b, 5-b, 6-b, 7-b, 8-c

---

## Summary

- **BFS** uses a queue and finds shortest paths in unweighted graphs.
- **DFS** uses recursion (or a stack) and is useful for connectivity, cycles, and topological ordering.
- **Cycle detection** in directed graphs uses a recursion stack to detect back edges.
- **Bipartite check** uses BFS two-coloring — conflict means odd cycle.
- **Topological sort** exists only for DAGs; Kahn's algorithm and DFS produce valid orderings.
- **Strongly connected components** partition directed graph vertices into mutual-reachability groups.

---

## Exercises

### Review Questions

1. Compare BFS and DFS: when is one preferred over the other?
2. Why does a DFS recursion stack need both visited and recStack for cycle detection in directed graphs?
3. What happens in Kahn's algorithm when the graph has a cycle?
4. Why can an undirected graph never have a back edge (in the directed sense)?
5. What is the relationship between bipartiteness and odd cycles?

### Application Problems

6. Implement a function to determine if an undirected graph is bipartite using BFS.
7. Write a program to find all strongly connected components using Kosaraju's algorithm.
8. Compute the minimum number of edges to add to make a directed graph strongly connected.
9. Implement iterative DFS and compare its traversal order with recursive DFS.
10. Given a grid of 0s and 1s, find the size of the largest connected component of 1s.

### Challenge Problems

11. Implement the **A* search algorithm** for a weighted grid graph. Compare the number of nodes visited with Dijkstra's algorithm.
12. **Word Ladder II** (LeetCode 126): Find all shortest transformation sequences from beginWord to endWord.
13. **Critical Connections in a Network** (LeetCode 1192): Find all bridges in an undirected graph using Tarjan's algorithm.
14. **Minimum Height Trees** (LeetCode 310): Find root(s) that minimize tree height — a topological removal problem.
15. **Graph Valid Tree** (LeetCode 261): Determine if a given set of edges forms a valid tree (connected and acyclic).
