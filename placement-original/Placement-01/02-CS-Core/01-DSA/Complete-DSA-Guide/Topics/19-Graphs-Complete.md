# 🕸️ Graphs - Complete Guide

## 📚 **Graph Fundamentals**

### **What is a Graph?**
A graph is a collection of **vertices (nodes)** connected by **edges** that represent relationships between entities.

**Mathematical Definition**: G = (V, E)
- **V**: Set of vertices/nodes
- **E**: Set of edges connecting vertices

### **Graph Terminology**
```
Example Graph:
    A -------- B
    |         /|
    |        / |
    |       /  |
    D ---- C   E

Vertices: {A, B, C, D, E}
Edges: {(A,B), (A,D), (B,C), (B,E), (C,D)}
```

- **Vertex/Node**: Individual point in graph
- **Edge**: Connection between two vertices
- **Adjacent**: Two vertices connected by an edge
- **Degree**: Number of edges connected to a vertex
- **Path**: Sequence of vertices connected by edges
- **Cycle**: Path that starts and ends at same vertex
- **Connected**: Graph where path exists between any two vertices

### **Types of Graphs**

#### **1. Directed vs Undirected**
```
Undirected Graph:        Directed Graph (Digraph):
    A ---- B                A ---→ B
    |      |                |      ↑
    |      |                ↓      |
    D ---- C                D ---→ C

Edges: A-B, A-D, B-C, C-D  Edges: A→B, A→D, D→C, C→B
```

#### **2. Weighted vs Unweighted**
```
Unweighted:              Weighted:
    A ---- B                A --5-- B
    |      |                |       |
    |      |                3       2
    D ---- C                D --4-- C
```

#### **3. Special Graph Types**
- **Complete Graph**: Every pair of vertices connected
- **Tree**: Connected acyclic graph with n-1 edges
- **DAG**: Directed Acyclic Graph
- **Bipartite**: Vertices can be divided into two disjoint sets
- **Planar**: Can be drawn without edge crossings

---

## 🏗️ **Graph Representation**

### **1. Adjacency Matrix**
```python
class GraphMatrix:
    def __init__(self, num_vertices):
        self.V = num_vertices
        self.matrix = [[0] * num_vertices for _ in range(num_vertices)]
    
    def add_edge(self, u, v, weight=1):
        """Add edge from u to v"""
        self.matrix[u][v] = weight
        # For undirected graph, add reverse edge
        # self.matrix[v][u] = weight
    
    def has_edge(self, u, v):
        """Check if edge exists"""
        return self.matrix[u][v] != 0
    
    def get_neighbors(self, u):
        """Get all neighbors of vertex u"""
        neighbors = []
        for v in range(self.V):
            if self.matrix[u][v] != 0:
                neighbors.append(v)
        return neighbors
    
    def display(self):
        """Display adjacency matrix"""
        for row in self.matrix:
            print(row)

# Example usage
g = GraphMatrix(4)
g.add_edge(0, 1)
g.add_edge(0, 2)
g.add_edge(1, 3)
g.add_edge(2, 3)
g.display()
"""
Output:
[0, 1, 1, 0]
[0, 0, 0, 1]
[0, 0, 0, 1]
[0, 0, 0, 0]
"""
```

**Pros**: O(1) edge lookup, simple implementation
**Cons**: O(V²) space, expensive to add/remove vertices

### **2. Adjacency List**
```python
from collections import defaultdict

class GraphList:
    def __init__(self):
        self.graph = defaultdict(list)
    
    def add_edge(self, u, v, weight=1):
        """Add edge from u to v"""
        self.graph[u].append((v, weight))
        # For undirected graph, add reverse edge
        # self.graph[v].append((u, weight))
    
    def get_neighbors(self, u):
        """Get all neighbors of vertex u"""
        return self.graph[u]
    
    def has_edge(self, u, v):
        """Check if edge exists"""
        return any(neighbor == v for neighbor, _ in self.graph[u])
    
    def display(self):
        """Display adjacency list"""
        for vertex in self.graph:
            print(f"{vertex}: {self.graph[vertex]}")

# Example usage
g = GraphList()
g.add_edge(0, 1, 5)
g.add_edge(0, 2, 3)
g.add_edge(1, 3, 2)
g.add_edge(2, 3, 4)
g.display()
"""
Output:
0: [(1, 5), (2, 3)]
1: [(3, 2)]
2: [(3, 4)]
"""
```

**Pros**: O(V + E) space, efficient for sparse graphs
**Cons**: O(V) edge lookup in worst case

### **3. Edge List**
```python
class GraphEdgeList:
    def __init__(self):
        self.edges = []
        self.vertices = set()
    
    def add_edge(self, u, v, weight=1):
        """Add edge to graph"""
        self.edges.append((u, v, weight))
        self.vertices.add(u)
        self.vertices.add(v)
    
    def get_edges(self):
        """Return all edges"""
        return self.edges
    
    def get_vertices(self):
        """Return all vertices"""
        return list(self.vertices)

# Example usage
g = GraphEdgeList()
g.add_edge(0, 1, 5)
g.add_edge(0, 2, 3)
g.add_edge(1, 3, 2)
print(g.get_edges())  # [(0, 1, 5), (0, 2, 3), (1, 3, 2)]
```

**Best for**: Algorithms that process all edges (Kruskal's MST)

---

## 🚀 **Graph Traversal Algorithms**

### **1. Breadth-First Search (BFS)**
```python
from collections import deque

def bfs(graph, start):
    """
    BFS traversal of graph
    Time: O(V + E), Space: O(V)
    """
    visited = set()
    queue = deque([start])
    result = []
    
    visited.add(start)
    
    while queue:
        vertex = queue.popleft()
        result.append(vertex)
        
        # Visit all unvisited neighbors
        for neighbor, _ in graph[vertex]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
    
    return result

def bfs_shortest_path(graph, start, end):
    """
    Find shortest path using BFS
    """
    if start == end:
        return [start]
    
    visited = set()
    queue = deque([(start, [start])])
    visited.add(start)
    
    while queue:
        vertex, path = queue.popleft()
        
        for neighbor, _ in graph[vertex]:
            if neighbor == end:
                return path + [neighbor]
            
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append((neighbor, path + [neighbor]))
    
    return None  # No path found

# BFS Applications:
# - Shortest path in unweighted graphs
# - Level order traversal
# - Web crawling
# - Social networking (degrees of separation)
```

### **2. Depth-First Search (DFS)**
```python
def dfs_recursive(graph, start, visited=None):
    """
    Recursive DFS traversal
    Time: O(V + E), Space: O(V)
    """
    if visited is None:
        visited = set()
    
    visited.add(start)
    result = [start]
    
    for neighbor, _ in graph[start]:
        if neighbor not in visited:
            result.extend(dfs_recursive(graph, neighbor, visited))
    
    return result

def dfs_iterative(graph, start):
    """
    Iterative DFS using stack
    """
    visited = set()
    stack = [start]
    result = []
    
    while stack:
        vertex = stack.pop()
        
        if vertex not in visited:
            visited.add(vertex)
            result.append(vertex)
            
            # Add neighbors to stack (reverse order for same result as recursive)
            for neighbor, _ in reversed(graph[vertex]):
                if neighbor not in visited:
                    stack.append(neighbor)
    
    return result

def dfs_paths(graph, start, end, path=None):
    """
    Find all paths from start to end using DFS
    """
    if path is None:
        path = []
    
    path = path + [start]
    
    if start == end:
        return [path]
    
    paths = []
    for neighbor, _ in graph[start]:
        if neighbor not in path:  # Avoid cycles
            new_paths = dfs_paths(graph, neighbor, end, path)
            paths.extend(new_paths)
    
    return paths

# DFS Applications:
# - Cycle detection
# - Topological sorting
# - Connected components
# - Maze solving
```

---

## 🔄 **Cycle Detection**

### **1. Cycle Detection in Undirected Graph**
```python
def has_cycle_undirected(graph):
    """
    Detect cycle in undirected graph using DFS
    """
    visited = set()
    
    def dfs(vertex, parent):
        visited.add(vertex)
        
        for neighbor, _ in graph[vertex]:
            if neighbor not in visited:
                if dfs(neighbor, vertex):
                    return True
            elif neighbor != parent:
                # Back edge found (cycle detected)
                return True
        
        return False
    
    # Check all components
    for vertex in graph:
        if vertex not in visited:
            if dfs(vertex, -1):
                return True
    
    return False
```

### **2. Cycle Detection in Directed Graph**
```python
def has_cycle_directed(graph):
    """
    Detect cycle in directed graph using DFS
    Three colors: White (0), Gray (1), Black (2)
    """
    color = {}
    
    def dfs(vertex):
        if vertex in color:
            return color[vertex] == 1  # Gray = back edge = cycle
        
        color[vertex] = 1  # Gray
        
        for neighbor, _ in graph[vertex]:
            if dfs(neighbor):
                return True
        
        color[vertex] = 2  # Black
        return False
    
    for vertex in graph:
        if vertex not in color:
            if dfs(vertex):
                return True
    
    return False
```

---

## 🎯 **Topological Sorting**

### **1. DFS-based Topological Sort**
```python
def topological_sort_dfs(graph):
    """
    Topological sort using DFS
    Time: O(V + E), Space: O(V)
    """
    visited = set()
    stack = []
    
    def dfs(vertex):
        visited.add(vertex)
        
        for neighbor, _ in graph[vertex]:
            if neighbor not in visited:
                dfs(neighbor)
        
        stack.append(vertex)
    
    # Visit all vertices
    for vertex in graph:
        if vertex not in visited:
            dfs(vertex)
    
    return stack[::-1]  # Reverse to get topological order
```

### **2. Kahn's Algorithm (BFS-based)**
```python
def topological_sort_kahn(graph):
    """
    Kahn's algorithm for topological sorting
    """
    from collections import defaultdict, deque
    
    # Calculate in-degrees
    in_degree = defaultdict(int)
    for vertex in graph:
        for neighbor, _ in graph[vertex]:
            in_degree[neighbor] += 1
    
    # Initialize queue with vertices having in-degree 0
    queue = deque([v for v in graph if in_degree[v] == 0])
    result = []
    
    while queue:
        vertex = queue.popleft()
        result.append(vertex)
        
        # Reduce in-degree of neighbors
        for neighbor, _ in graph[vertex]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)
    
    # Check if topological sort is possible
    if len(result) != len(graph):
        return None  # Cycle exists
    
    return result
```

---

## 🌲 **Minimum Spanning Tree (MST)**

### **1. Kruskal's Algorithm**
```python
class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n
    
    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]
    
    def union(self, x, y):
        px, py = self.find(x), self.find(y)
        if px == py:
            return False
        
        if self.rank[px] < self.rank[py]:
            px, py = py, px
        
        self.parent[py] = px
        if self.rank[px] == self.rank[py]:
            self.rank[px] += 1
        
        return True

def kruskal_mst(edges, num_vertices):
    """
    Kruskal's algorithm for MST
    Time: O(E log E), Space: O(V)
    """
    # Sort edges by weight
    edges.sort(key=lambda x: x[2])
    
    uf = UnionFind(num_vertices)
    mst = []
    total_weight = 0
    
    for u, v, weight in edges:
        if uf.union(u, v):
            mst.append((u, v, weight))
            total_weight += weight
            
            if len(mst) == num_vertices - 1:
                break
    
    return mst, total_weight

# Example usage
edges = [(0, 1, 4), (0, 2, 3), (1, 2, 1), (1, 3, 2), (2, 3, 4)]
mst, weight = kruskal_mst(edges, 4)
print(f"MST: {mst}, Total Weight: {weight}")
# MST: [(1, 2, 1), (1, 3, 2), (0, 2, 3)], Total Weight: 6
```

### **2. Prim's Algorithm**
```python
import heapq

def prim_mst(graph, start=0):
    """
    Prim's algorithm for MST
    Time: O(E log V), Space: O(V)
    """
    mst = []
    visited = set()
    min_heap = [(0, start, -1)]  # (weight, vertex, parent)
    total_weight = 0
    
    while min_heap:
        weight, vertex, parent = heapq.heappop(min_heap)
        
        if vertex in visited:
            continue
        
        visited.add(vertex)
        if parent != -1:
            mst.append((parent, vertex, weight))
            total_weight += weight
        
        # Add edges to unvisited neighbors
        for neighbor, edge_weight in graph[vertex]:
            if neighbor not in visited:
                heapq.heappush(min_heap, (edge_weight, neighbor, vertex))
    
    return mst, total_weight

# Example usage
graph = {
    0: [(1, 4), (2, 3)],
    1: [(0, 4), (2, 1), (3, 2)],
    2: [(0, 3), (1, 1), (3, 4)],
    3: [(1, 2), (2, 4)]
}
mst, weight = prim_mst(graph)
print(f"MST: {mst}, Total Weight: {weight}")
```

---

## 🛣️ **Shortest Path Algorithms**

### **1. Dijkstra's Algorithm**
```python
import heapq

def dijkstra(graph, start):
    """
    Dijkstra's algorithm for shortest paths
    Time: O((V + E) log V), Space: O(V)
    """
    distances = {vertex: float('inf') for vertex in graph}
    distances[start] = 0
    previous = {}
    pq = [(0, start)]
    
    while pq:
        current_dist, current = heapq.heappop(pq)
        
        if current_dist > distances[current]:
            continue
        
        for neighbor, weight in graph[current]:
            distance = current_dist + weight
            
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                previous[neighbor] = current
                heapq.heappush(pq, (distance, neighbor))
    
    return distances, previous

def get_shortest_path(previous, start, end):
    """Reconstruct shortest path"""
    path = []
    current = end
    
    while current is not None:
        path.append(current)
        current = previous.get(current)
    
    return path[::-1] if path[-1] == start else None

# Example usage
graph = {
    'A': [('B', 4), ('C', 2)],
    'B': [('C', 1), ('D', 5)],
    'C': [('D', 8), ('E', 10)],
    'D': [('E', 2)],
    'E': []
}
distances, previous = dijkstra(graph, 'A')
path = get_shortest_path(previous, 'A', 'E')
print(f"Shortest distance to E: {distances['E']}")
print(f"Shortest path: {path}")
```

### **2. Bellman-Ford Algorithm**
```python
def bellman_ford(graph, start):
    """
    Bellman-Ford algorithm (handles negative weights)
    Time: O(VE), Space: O(V)
    """
    # Initialize distances
    vertices = set()
    edges = []
    
    for u in graph:
        vertices.add(u)
        for v, weight in graph[u]:
            vertices.add(v)
            edges.append((u, v, weight))
    
    distances = {v: float('inf') for v in vertices}
    distances[start] = 0
    
    # Relax edges V-1 times
    for _ in range(len(vertices) - 1):
        for u, v, weight in edges:
            if distances[u] != float('inf') and distances[u] + weight < distances[v]:
                distances[v] = distances[u] + weight
    
    # Check for negative cycles
    for u, v, weight in edges:
        if distances[u] != float('inf') and distances[u] + weight < distances[v]:
            return None  # Negative cycle detected
    
    return distances
```

### **3. Floyd-Warshall Algorithm**
```python
def floyd_warshall(graph):
    """
    Floyd-Warshall algorithm (all-pairs shortest paths)
    Time: O(V³), Space: O(V²)
    """
    vertices = list(graph.keys())
    n = len(vertices)
    
    # Initialize distance matrix
    dist = {}
    for i in vertices:
        dist[i] = {}
        for j in vertices:
            if i == j:
                dist[i][j] = 0
            else:
                dist[i][j] = float('inf')
    
    # Add direct edges
    for u in graph:
        for v, weight in graph[u]:
            dist[u][v] = weight
    
    # Floyd-Warshall main algorithm
    for k in vertices:
        for i in vertices:
            for j in vertices:
                if dist[i][k] + dist[k][j] < dist[i][j]:
                    dist[i][j] = dist[i][k] + dist[k][j]
    
    return dist
```

---

## 🔗 **Connected Components**

### **1. Find Connected Components (Undirected)**
```python
def find_connected_components(graph):
    """
    Find all connected components in undirected graph
    """
    visited = set()
    components = []
    
    def dfs(vertex, component):
        visited.add(vertex)
        component.append(vertex)
        
        for neighbor, _ in graph[vertex]:
            if neighbor not in visited:
                dfs(neighbor, component)
    
    for vertex in graph:
        if vertex not in visited:
            component = []
            dfs(vertex, component)
            components.append(component)
    
    return components
```

### **2. Strongly Connected Components (Directed)**
```python
def kosaraju_scc(graph):
    """
    Kosaraju's algorithm for strongly connected components
    """
    visited = set()
    stack = []
    
    # Step 1: Fill stack with finish times
    def dfs1(vertex):
        visited.add(vertex)
        for neighbor, _ in graph[vertex]:
            if neighbor not in visited:
                dfs1(neighbor)
        stack.append(vertex)
    
    for vertex in graph:
        if vertex not in visited:
            dfs1(vertex)
    
    # Step 2: Create transpose graph
    transpose = defaultdict(list)
    for u in graph:
        for v, weight in graph[u]:
            transpose[v].append((u, weight))
    
    # Step 3: DFS on transpose in reverse finish order
    visited = set()
    sccs = []
    
    def dfs2(vertex, scc):
        visited.add(vertex)
        scc.append(vertex)
        for neighbor, _ in transpose[vertex]:
            if neighbor not in visited:
                dfs2(neighbor, scc)
    
    while stack:
        vertex = stack.pop()
        if vertex not in visited:
            scc = []
            dfs2(vertex, scc)
            sccs.append(scc)
    
    return sccs
```

---

## 📈 **Flowchart: BFS Algorithm**

```
         [START]
            ↓
    [Input: Graph, Start vertex]
            ↓
    [Initialize: Queue, Visited set]
            ↓
    [Add start to queue and visited]
            ↓
       <Queue empty?>
         ↙      ↘
       YES      NO
        ↓        ↓
      [END]  [Dequeue vertex]
               ↓
          [Process vertex]
               ↓
      [For each unvisited neighbor]
               ↓
       <Neighbor visited?>
         ↙        ↘
       YES        NO
        ↓          ↓
     [Skip]  [Add to queue
              and visited]
        ↓          ↓
        ↑ ← ← ← ← ←↑
        (Back to queue check)
```

## 📈 **Flowchart: Dijkstra's Algorithm**

```
         [START]
            ↓
    [Input: Graph, Source]
            ↓
    [Initialize distances to ∞]
            ↓
    [Set distance[source] = 0]
            ↓
    [Add source to priority queue]
            ↓
      <Priority queue empty?>
         ↙           ↘
       YES           NO
        ↓             ↓
      [END]    [Extract min vertex]
                      ↓
              [For each neighbor]
                      ↓
              <new_dist < current_dist?>
                 ↙           ↘
               YES           NO
                ↓             ↓
        [Update distance,    [Skip]
         Add to queue]        ↓
                ↓             ↓
                ↑ ← ← ← ← ← ← ↑
                (Back to queue check)
```

---

## 🧪 **Practice Problems**

### **Easy Level**
1. **Number of Islands** (LC #200)
2. **Clone Graph** (LC #133)
3. **Find the Town Judge** (LC #997)
4. **Flood Fill** (LC #733)

### **Medium Level**
1. **Course Schedule** (LC #207)
2. **Word Ladder** (LC #127)
3. **Network Delay Time** (LC #743)
4. **Minimum Spanning Tree** (Various platforms)
5. **Detect Cycle in Undirected Graph**

### **Hard Level**
1. **Word Ladder II** (LC #126)
2. **Alien Dictionary** (LC #269)
3. **Critical Connections in Network** (LC #1192)
4. **Shortest Path Visiting All Nodes** (LC #847)

---

## 📊 **Time & Space Complexity Summary**

| Algorithm | Time Complexity | Space Complexity | Use Case |
|-----------|----------------|------------------|----------|
| **BFS** | O(V + E) | O(V) | Shortest path (unweighted) |
| **DFS** | O(V + E) | O(V) | Cycle detection, connectivity |
| **Dijkstra** | O((V + E) log V) | O(V) | Shortest path (non-negative) |
| **Bellman-Ford** | O(VE) | O(V) | Shortest path (negative edges) |
| **Floyd-Warshall** | O(V³) | O(V²) | All-pairs shortest paths |
| **Kruskal's MST** | O(E log E) | O(V) | Minimum spanning tree |
| **Prim's MST** | O(E log V) | O(V) | Minimum spanning tree |
| **Topological Sort** | O(V + E) | O(V) | Task scheduling |

---

**🎯 Key Takeaways**:
- Choose representation based on graph density and operations
- BFS for shortest paths in unweighted graphs
- DFS for cycle detection and connectivity
- Dijkstra for weighted shortest paths (non-negative)
- Bellman-Ford when negative edges exist
- MST algorithms for network design problems
- Topological sort for dependency resolution
