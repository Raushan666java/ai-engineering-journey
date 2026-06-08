# Module 5: Graph Theory - Complete Guide
## 🕸️ Networks and Connections

---

## 📚 Chapter 1: Graph Fundamentals

### **1.1 Basic Definitions**
```
Graph G = (V, E) where:
- V = set of vertices (nodes)
- E = set of edges (connections)

Types:
- Undirected Graph: edges have no direction
- Directed Graph (Digraph): edges have direction
- Weighted Graph: edges have weights/costs
- Simple Graph: no loops or multiple edges
- Multigraph: multiple edges allowed
- Complete Graph Kₙ: every pair of vertices connected

Examples:
K₃ (triangle): V = {1,2,3}, E = {(1,2), (2,3), (1,3)}
Path P₃: V = {1,2,3}, E = {(1,2), (2,3)}
Cycle C₄: V = {1,2,3,4}, E = {(1,2), (2,3), (3,4), (4,1)}
```

### **1.2 Graph Properties**
```
Degree of vertex v: deg(v) = number of edges incident to v
- In directed graphs: in-degree and out-degree

Handshaking Lemma: Σ deg(v) = 2|E|
- Sum of all degrees equals twice the number of edges
- Number of odd-degree vertices is even

Path: sequence of vertices connected by edges
Walk: path allowing repeated vertices/edges
Trail: walk with distinct edges
Cycle: closed path with distinct vertices (except first/last)

Distance d(u,v): length of shortest path between u and v
Diameter: maximum distance between any two vertices
Girth: length of shortest cycle
```

### **1.3 Graph Representations**

#### **Adjacency Matrix**
```
For graph with n vertices, n×n matrix A where:
A[i][j] = 1 if edge (i,j) exists, 0 otherwise

Example for triangle K₃:
    1  2  3
1 [ 0  1  1 ]
2 [ 1  0  1 ]
3 [ 1  1  0 ]

Properties:
- Symmetric for undirected graphs
- Space: O(n²)
- Edge lookup: O(1)
- Good for dense graphs
```

#### **Adjacency List**
```
Array of lists, where list[i] contains neighbors of vertex i

Example for triangle K₃:
1: [2, 3]
2: [1, 3]  
3: [1, 2]

Properties:
- Space: O(n + m) where m = |E|
- Edge lookup: O(deg(v))
- Good for sparse graphs
- Most common representation
```

#### **Edge List**
```
Simple list of all edges: [(u₁,v₁), (u₂,v₂), ...]

Example for triangle K₃:
[(1,2), (2,3), (1,3)]

Properties:
- Space: O(m)
- Edge lookup: O(m)
- Good for algorithms that process all edges
```

---

## 🔍 Chapter 2: Graph Traversal

### **2.1 Depth-First Search (DFS)**
```
Algorithm:
1. Start at source vertex
2. Mark as visited
3. Recursively visit unvisited neighbors
4. Backtrack when no unvisited neighbors

Applications:
- Connected components
- Cycle detection
- Topological sorting
- Strongly connected components

Time Complexity: O(V + E)
Space Complexity: O(V) for recursion stack

DFS Tree Properties:
- Tree edges: edges in DFS tree
- Back edges: to ancestors (create cycles)
- Forward edges: to descendants
- Cross edges: between different subtrees
```

### **2.2 Breadth-First Search (BFS)**
```
Algorithm:
1. Start at source vertex
2. Use queue to process vertices level by level
3. Mark visited and add unvisited neighbors to queue
4. Continue until queue empty

Applications:
- Shortest path in unweighted graphs
- Level-order traversal
- Bipartite graph testing
- Connected components

Time Complexity: O(V + E)
Space Complexity: O(V) for queue

BFS Properties:
- Finds shortest paths in unweighted graphs
- Explores vertices in order of distance from source
- Creates BFS tree with minimum depth
```

---

## 🌳 Chapter 3: Trees and Forests

### **3.1 Tree Properties**
```
Tree: connected acyclic graph

Equivalent Definitions (for n vertices):
1. Connected graph with n-1 edges
2. Acyclic graph with n-1 edges  
3. Connected graph where removing any edge disconnects it
4. Acyclic graph where adding any edge creates cycle
5. Unique path between every pair of vertices

Forest: collection of disjoint trees
Spanning Tree: subgraph that is tree and includes all vertices
```

### **3.2 Minimum Spanning Tree (MST)**

#### **Kruskal's Algorithm**
```
Greedy algorithm using Union-Find:
1. Sort edges by weight
2. Initialize each vertex as separate component
3. For each edge (u,v):
   - If u and v in different components, add edge
   - Union the components
4. Stop when n-1 edges added

Time Complexity: O(E log E) for sorting
Space Complexity: O(V) for Union-Find

Correctness: Cut property of MSTs
```

#### **Prim's Algorithm**
```
Greedy algorithm growing tree from single vertex:
1. Start with arbitrary vertex
2. Maintain priority queue of edges from tree to non-tree vertices
3. Repeatedly add minimum weight edge that connects tree to new vertex
4. Update priority queue with new edges

Time Complexity: O(E log V) with binary heap
                 O(E + V log V) with Fibonacci heap
Space Complexity: O(V)

Correctness: Cut property of MSTs
```

---

## 🛣️ Chapter 4: Shortest Paths

### **4.1 Single-Source Shortest Paths**

#### **Dijkstra's Algorithm**
```
For non-negative edge weights:
1. Initialize distances: d[source] = 0, others = ∞
2. Use priority queue with vertices by distance
3. For each vertex u extracted from queue:
   - For each neighbor v: relax edge (u,v)
   - If d[u] + weight(u,v) < d[v]: update d[v]

Time Complexity: O(E log V) with binary heap
                 O(E + V log V) with Fibonacci heap
Space Complexity: O(V)

Requirements: Non-negative edge weights
Applications: GPS navigation, network routing
```

#### **Bellman-Ford Algorithm**
```
Handles negative edge weights:
1. Initialize distances: d[source] = 0, others = ∞
2. Repeat V-1 times:
   - For each edge (u,v): relax if d[u] + weight(u,v) < d[v]
3. Check for negative cycles:
   - If any edge can still be relaxed, negative cycle exists

Time Complexity: O(VE)
Space Complexity: O(V)

Advantages: Detects negative cycles, handles negative weights
Applications: Currency arbitrage, network analysis
```

### **4.2 All-Pairs Shortest Paths**

#### **Floyd-Warshall Algorithm**
```
Dynamic programming approach:
1. Initialize distance matrix from adjacency matrix
2. For k from 1 to n:
   - For i from 1 to n:
     - For j from 1 to n:
       - d[i][j] = min(d[i][j], d[i][k] + d[k][j])

Time Complexity: O(V³)
Space Complexity: O(V²)

Applications: Dense graphs, transitive closure, shortest paths between all pairs
```

---

## 🎨 Chapter 5: Graph Coloring

### **5.1 Vertex Coloring**
```
Proper Coloring: assign colors to vertices such that adjacent vertices have different colors

Chromatic Number χ(G): minimum number of colors needed

Bounds:
- χ(G) ≥ ω(G) where ω(G) is clique number
- χ(G) ≤ Δ(G) + 1 where Δ(G) is maximum degree
- Brooks' Theorem: χ(G) ≤ Δ(G) unless G is complete or odd cycle

Special Cases:
- Bipartite graphs: χ(G) = 2
- Trees: χ(G) = 2
- Complete graphs: χ(Kₙ) = n
- Cycles: χ(Cₙ) = 2 if n even, 3 if n odd
```

### **5.2 Greedy Coloring Algorithm**
```
Algorithm:
1. Order vertices (various strategies)
2. For each vertex v:
   - Assign smallest color not used by neighbors

Time Complexity: O(V + E)
Quality: Uses at most Δ(G) + 1 colors

Ordering Strategies:
- Largest First: order by decreasing degree
- Smallest Last: repeatedly remove vertex with smallest degree
- Welsh-Powell: order by decreasing degree, then apply greedy
```

---

## 🌊 Chapter 6: Network Flows

### **6.1 Maximum Flow Problem**
```
Flow Network: directed graph with:
- Source s and sink t
- Capacity c(u,v) for each edge (u,v)
- Flow f(u,v) satisfying:
  * Capacity constraint: 0 ≤ f(u,v) ≤ c(u,v)
  * Flow conservation: Σ f(u,v) = Σ f(v,w) for all v ≠ s,t

Maximum Flow: largest possible flow from s to t
```

#### **Ford-Fulkerson Method**
```
Algorithm:
1. Initialize flow to 0
2. While augmenting path exists in residual graph:
   - Find augmenting path
   - Determine bottleneck capacity
   - Update flow along path
   - Update residual graph

Time Complexity: O(E × max_flow) with DFS
                 O(VE²) with BFS (Edmonds-Karp)

Max-Flow Min-Cut Theorem: Maximum flow equals minimum cut capacity
```

### **6.2 Applications**
```
Bipartite Matching:
- Model as flow network
- Maximum matching = maximum flow

Edge-Disjoint Paths:
- Maximum number of edge-disjoint paths = maximum flow

Vertex Connectivity:
- Minimum vertex cut using vertex splitting technique

Project Selection:
- Maximize profit subject to precedence constraints
```

---

## 🎯 Practice Problems - Module 5 (150 Problems)

### **Graph Basics (30 Problems)**

**Q1.** In a graph with 10 vertices, what is the maximum number of edges in a simple graph?

**Answer:** C(10,2) = 45 edges (complete graph K₁₀)

**Q2.** Prove that in any graph, the number of vertices with odd degree is even.

**Answer:**
```
Proof by Handshaking Lemma:
- Sum of all degrees = 2|E| (even number)
- Sum = (sum of even degrees) + (sum of odd degrees)
- Since sum of even degrees is even, sum of odd degrees must be even
- Since each odd-degree vertex contributes an odd number to the sum,
  there must be an even number of such vertices ∎
```

### **Tree Problems (25 Problems)**

**Q1.** How many labeled trees are there on n vertices?

**Answer:** n^(n-2) by Cayley's formula

**Q2.** Find MST of weighted graph using Kruskal's algorithm.

**Answer:**
```
Given edges with weights: (A,B,3), (A,C,1), (B,C,2), (B,D,4), (C,D,5)

Kruskal's Algorithm:
1. Sort edges: (A,C,1), (B,C,2), (A,B,3), (B,D,4), (C,D,5)
2. Add (A,C,1): components {A,C}, {B}, {D}
3. Add (B,C,2): components {A,B,C}, {D}  
4. Add (B,D,4): components {A,B,C,D}
5. Stop (3 edges for 4 vertices)

MST edges: (A,C,1), (B,C,2), (B,D,4)
Total weight: 7
```

### **Shortest Path Problems (35 Problems)**

**Q1.** Apply Dijkstra's algorithm to find shortest paths from vertex A.

**Answer:**
```
Graph: A-B(4), A-C(2), B-C(1), B-D(5), C-D(8), C-E(10), D-E(2)

Dijkstra's Algorithm:
Initial: d[A]=0, d[B]=∞, d[C]=∞, d[D]=∞, d[E]=∞
Queue: {A:0, B:∞, C:∞, D:∞, E:∞}

Step 1: Extract A(0)
- Update d[B] = 4, d[C] = 2
- Queue: {C:2, B:4, D:∞, E:∞}

Step 2: Extract C(2)  
- Update d[B] = min(4, 2+1) = 3
- Update d[D] = 2+8 = 10, d[E] = 2+10 = 12
- Queue: {B:3, D:10, E:12}

Step 3: Extract B(3)
- Update d[D] = min(10, 3+5) = 8
- Queue: {D:8, E:12}

Step 4: Extract D(8)
- Update d[E] = min(12, 8+2) = 10
- Queue: {E:10}

Final distances: A:0, B:3, C:2, D:8, E:10
```

### **Graph Coloring Problems (25 Problems)**

**Q1.** Find chromatic number of cycle C₅.

**Answer:**
```
C₅ is an odd cycle with 5 vertices
- Cannot be 2-colored (bipartite graphs have even cycles only)
- Can be 3-colored: alternate colors around cycle, use third color for one vertex
- Therefore χ(C₅) = 3

Coloring: 1-Red, 2-Blue, 3-Red, 4-Blue, 5-Green
```

### **Network Flow Problems (35 Problems)**

**Q1.** Find maximum flow from s to t using Ford-Fulkerson.

**Answer:**
```
Network: s→a(10), s→c(8), a→b(5), a→c(2), b→t(10), c→b(7), c→d(10), d→t(10)

Ford-Fulkerson Algorithm:
Path 1: s→a→b→t, flow = min(10,5,10) = 5
Path 2: s→c→d→t, flow = min(8,10,10) = 8  
Path 3: s→c→b→t, flow = min(0,7,5) = 0 (c capacity used)

Maximum flow = 5 + 8 = 13

Minimum cut: {s,a,c} | {b,d,t} with capacity 5+8 = 13
Verifies max-flow min-cut theorem
```

---

## 💻 Programming Labs - Module 5

### **Lab 1: Graph Implementation and Traversal**

```python
from collections import defaultdict, deque
import heapq

class Graph:
    """
    Comprehensive graph implementation with multiple representations
    """
    
    def __init__(self, directed=False):
        self.directed = directed
        self.adj_list = defaultdict(list)
        self.vertices = set()
        self.edges = []
    
    def add_vertex(self, v):
        """Add vertex to graph"""
        self.vertices.add(v)
        if v not in self.adj_list:
            self.adj_list[v] = []
    
    def add_edge(self, u, v, weight=1):
        """Add edge to graph"""
        self.add_vertex(u)
        self.add_vertex(v)
        
        self.adj_list[u].append((v, weight))
        self.edges.append((u, v, weight))
        
        if not self.directed:
            self.adj_list[v].append((u, weight))
    
    def get_adjacency_matrix(self):
        """Convert to adjacency matrix representation"""
        vertices = sorted(list(self.vertices))
        n = len(vertices)
        vertex_to_index = {v: i for i, v in enumerate(vertices)}
        
        matrix = [[0] * n for _ in range(n)]
        
        for u in self.adj_list:
            for v, weight in self.adj_list[u]:
                i, j = vertex_to_index[u], vertex_to_index[v]
                matrix[i][j] = weight
        
        return matrix, vertices
    
    def dfs(self, start, visited=None):
        """Depth-First Search traversal"""
        if visited is None:
            visited = set()
        
        result = []
        
        def dfs_recursive(vertex):
            visited.add(vertex)
            result.append(vertex)
            
            for neighbor, _ in self.adj_list[vertex]:
                if neighbor not in visited:
                    dfs_recursive(neighbor)
        
        dfs_recursive(start)
        return result
    
    def bfs(self, start):
        """Breadth-First Search traversal"""
        visited = set()
        queue = deque([start])
        result = []
        
        visited.add(start)
        
        while queue:
            vertex = queue.popleft()
            result.append(vertex)
            
            for neighbor, _ in self.adj_list[vertex]:
                if neighbor not in visited:
                    visited.add(neighbor)
                    queue.append(neighbor)
        
        return result
    
    def find_connected_components(self):
        """Find all connected components using DFS"""
        visited = set()
        components = []
        
        for vertex in self.vertices:
            if vertex not in visited:
                component = self.dfs(vertex, visited)
                components.append(component)
        
        return components
    
    def is_bipartite(self):
        """Check if graph is bipartite using BFS coloring"""
        color = {}
        
        for start in self.vertices:
            if start not in color:
                queue = deque([start])
                color[start] = 0
                
                while queue:
                    vertex = queue.popleft()
                    
                    for neighbor, _ in self.adj_list[vertex]:
                        if neighbor not in color:
                            color[neighbor] = 1 - color[vertex]
                            queue.append(neighbor)
                        elif color[neighbor] == color[vertex]:
                            return False, {}
        
        # Separate vertices by color
        set1 = [v for v, c in color.items() if c == 0]
        set2 = [v for v, c in color.items() if c == 1]
        
        return True, (set1, set2)
    
    def has_cycle(self):
        """Detect cycle in graph"""
        if self.directed:
            return self._has_cycle_directed()
        else:
            return self._has_cycle_undirected()
    
    def _has_cycle_undirected(self):
        """Detect cycle in undirected graph using DFS"""
        visited = set()
        
        def dfs_cycle(vertex, parent):
            visited.add(vertex)
            
            for neighbor, _ in self.adj_list[vertex]:
                if neighbor not in visited:
                    if dfs_cycle(neighbor, vertex):
                        return True
                elif neighbor != parent:
                    return True
            
            return False
        
        for vertex in self.vertices:
            if vertex not in visited:
                if dfs_cycle(vertex, None):
                    return True
        
        return False
    
    def _has_cycle_directed(self):
        """Detect cycle in directed graph using DFS with colors"""
        WHITE, GRAY, BLACK = 0, 1, 2
        color = {v: WHITE for v in self.vertices}
        
        def dfs_cycle(vertex):
            color[vertex] = GRAY
            
            for neighbor, _ in self.adj_list[vertex]:
                if color[neighbor] == GRAY:  # Back edge found
                    return True
                elif color[neighbor] == WHITE and dfs_cycle(neighbor):
                    return True
            
            color[vertex] = BLACK
            return False
        
        for vertex in self.vertices:
            if color[vertex] == WHITE:
                if dfs_cycle(vertex):
                    return True
        
        return False
    
    def topological_sort(self):
        """Topological sorting for directed acyclic graph"""
        if not self.directed:
            raise ValueError("Topological sort only for directed graphs")
        
        if self.has_cycle():
            raise ValueError("Graph has cycle, cannot perform topological sort")
        
        visited = set()
        stack = []
        
        def dfs_topo(vertex):
            visited.add(vertex)
            
            for neighbor, _ in self.adj_list[vertex]:
                if neighbor not in visited:
                    dfs_topo(neighbor)
            
            stack.append(vertex)
        
        for vertex in self.vertices:
            if vertex not in visited:
                dfs_topo(vertex)
        
        return stack[::-1]  # Reverse to get correct order

# Example usage
if __name__ == "__main__":
    # Create undirected graph
    g = Graph(directed=False)
    
    # Add edges
    edges = [('A', 'B'), ('A', 'C'), ('B', 'D'), ('C', 'D'), ('D', 'E')]
    for u, v in edges:
        g.add_edge(u, v)
    
    print("Graph Traversal Demo")
    print("=" * 30)
    
    # DFS and BFS
    print(f"DFS from A: {g.dfs('A')}")
    print(f"BFS from A: {g.bfs('A')}")
    
    # Connected components
    components = g.find_connected_components()
    print(f"Connected components: {components}")
    
    # Bipartite test
    is_bip, partition = g.is_bipartite()
    print(f"Is bipartite: {is_bip}")
    if is_bip:
        print(f"Partition: {partition}")
    
    # Cycle detection
    print(f"Has cycle: {g.has_cycle()}")
    
    # Test directed graph
    print(f"\nDirected Graph Demo")
    print("=" * 30)
    
    dg = Graph(directed=True)
    dag_edges = [('A', 'B'), ('A', 'C'), ('B', 'D'), ('C', 'D'), ('D', 'E')]
    for u, v in dag_edges:
        dg.add_edge(u, v)
    
    print(f"Has cycle: {dg.has_cycle()}")
    print(f"Topological sort: {dg.topological_sort()}")
```

### **Lab 2: Shortest Path Algorithms**

```python
import heapq
from collections import defaultdict

class ShortestPath:
    """
    Implementation of shortest path algorithms
    """
    
    def __init__(self, graph):
        self.graph = graph
    
    def dijkstra(self, start):
        """
        Dijkstra's algorithm for single-source shortest paths
        Returns distances and previous vertices for path reconstruction
        """
        distances = {vertex: float('infinity') for vertex in self.graph.vertices}
        distances[start] = 0
        previous = {vertex: None for vertex in self.graph.vertices}
        
        # Priority queue: (distance, vertex)
        pq = [(0, start)]
        visited = set()
        
        while pq:
            current_distance, current_vertex = heapq.heappop(pq)
            
            if current_vertex in visited:
                continue
            
            visited.add(current_vertex)
            
            # Check neighbors
            for neighbor, weight in self.graph.adj_list[current_vertex]:
                distance = current_distance + weight
                
                if distance < distances[neighbor]:
                    distances[neighbor] = distance
                    previous[neighbor] = current_vertex
                    heapq.heappush(pq, (distance, neighbor))
        
        return distances, previous
    
    def bellman_ford(self, start):
        """
        Bellman-Ford algorithm - handles negative weights
        Returns distances, previous vertices, and whether negative cycle exists
        """
        distances = {vertex: float('infinity') for vertex in self.graph.vertices}
        distances[start] = 0
        previous = {vertex: None for vertex in self.graph.vertices}
        
        # Relax edges V-1 times
        for _ in range(len(self.graph.vertices) - 1):
            for u, v, weight in self.graph.edges:
                if distances[u] != float('infinity') and distances[u] + weight < distances[v]:
                    distances[v] = distances[u] + weight
                    previous[v] = u
        
        # Check for negative cycles
        has_negative_cycle = False
        for u, v, weight in self.graph.edges:
            if distances[u] != float('infinity') and distances[u] + weight < distances[v]:
                has_negative_cycle = True
                break
        
        return distances, previous, has_negative_cycle
    
    def floyd_warshall(self):
        """
        Floyd-Warshall algorithm for all-pairs shortest paths
        Returns distance matrix
        """
        vertices = list(self.graph.vertices)
        n = len(vertices)
        vertex_to_index = {v: i for i, v in enumerate(vertices)}
        
        # Initialize distance matrix
        dist = [[float('infinity')] * n for _ in range(n)]
        
        # Distance from vertex to itself is 0
        for i in range(n):
            dist[i][i] = 0
        
        # Fill in edge weights
        for u, v, weight in self.graph.edges:
            i, j = vertex_to_index[u], vertex_to_index[v]
            dist[i][j] = weight
            if not self.graph.directed:
                dist[j][i] = weight
        
        # Floyd-Warshall algorithm
        for k in range(n):
            for i in range(n):
                for j in range(n):
                    if dist[i][k] + dist[k][j] < dist[i][j]:
                        dist[i][j] = dist[i][k] + dist[k][j]
        
        return dist, vertices
    
    def reconstruct_path(self, start, end, previous):
        """Reconstruct shortest path from previous vertices"""
        path = []
        current = end
        
        while current is not None:
            path.append(current)
            current = previous[current]
        
        path.reverse()
        
        if path[0] == start:
            return path
        else:
            return []  # No path exists
    
    def all_shortest_paths(self, start):
        """Get all shortest paths from start vertex"""
        distances, previous = self.dijkstra(start)
        paths = {}
        
        for vertex in self.graph.vertices:
            if distances[vertex] != float('infinity'):
                paths[vertex] = {
                    'distance': distances[vertex],
                    'path': self.reconstruct_path(start, vertex, previous)
                }
        
        return paths

# Example usage
if __name__ == "__main__":
    # Create weighted graph
    g = Graph(directed=False)
    
    # Add weighted edges
    weighted_edges = [
        ('A', 'B', 4), ('A', 'C', 2), ('B', 'C', 1),
        ('B', 'D', 5), ('C', 'D', 8), ('C', 'E', 10),
        ('D', 'E', 2)
    ]
    
    for u, v, w in weighted_edges:
        g.add_edge(u, v, w)
    
    sp = ShortestPath(g)
    
    print("Shortest Path Algorithms Demo")
    print("=" * 40)
    
    # Dijkstra's algorithm
    print("Dijkstra's Algorithm from A:")
    distances, previous = sp.dijkstra('A')
    for vertex in sorted(distances.keys()):
        if distances[vertex] != float('infinity'):
            path = sp.reconstruct_path('A', vertex, previous)
            print(f"  To {vertex}: distance = {distances[vertex]}, path = {' -> '.join(path)}")
    
    # All shortest paths
    print(f"\nAll shortest paths from A:")
    all_paths = sp.all_shortest_paths('A')
    for vertex, info in sorted(all_paths.items()):
        print(f"  To {vertex}: {info}")
    
    # Floyd-Warshall
    print(f"\nFloyd-Warshall (All-pairs shortest paths):")
    dist_matrix, vertices = sp.floyd_warshall()
    
    print("Distance Matrix:")
    print("     " + "  ".join(f"{v:>3}" for v in vertices))
    for i, u in enumerate(vertices):
        row = f"{u:>3}: " + "  ".join(f"{dist_matrix[i][j]:>3.0f}" if dist_matrix[i][j] != float('infinity') else "∞" for j in range(len(vertices)))
        print(row)
```

---

## 📖 Module 5 Summary

### **Key Concepts Mastered**
✓ Graph representations and basic properties
✓ Graph traversal algorithms (DFS, BFS)
✓ Tree algorithms and minimum spanning trees
✓ Shortest path algorithms (Dijkstra, Bellman-Ford, Floyd-Warshall)
✓ Graph coloring and chromatic numbers
✓ Network flow and maximum flow algorithms

### **Programming Skills Developed**
✓ Efficient graph data structure implementations
✓ Traversal algorithm implementations
✓ Shortest path algorithm coding
✓ MST algorithm implementations
✓ Flow network algorithms
✓ Graph analysis and visualization tools

### **Applications Learned**
✓ Network analysis and social networks
✓ Route planning and GPS navigation
✓ Project scheduling and dependency management
✓ Resource allocation and optimization
✓ Circuit design and VLSI layout
✓ Bioinformatics and molecular analysis

### **Next Module Preview**
**Module 6: Number Theory**
- Prime numbers and factorization
- Modular arithmetic and congruences
- Cryptographic applications
- Euler's theorem and Fermat's little theorem

---

**🎯 Graph Theory mastered! Ready for Number Theory? 🚀**