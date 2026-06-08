# Graphs: Comprehensive Notes

## 1. Introduction to Graphs

A graph is a non-linear data structure consisting of vertices (or nodes) connected by edges. It is used to represent relationships between pairs of objects.

### Key Characteristics
- Consists of vertices and edges
- Can be directed or undirected
- Can be weighted or unweighted
- Can be cyclic or acyclic
- Can be connected or disconnected

### Graph Terminology
- **Vertex**: A node in the graph
- **Edge**: A connection between two vertices
- **Adjacent**: Two vertices are adjacent if there is an edge connecting them
- **Path**: A sequence of vertices where each adjacent pair is connected by an edge
- **Cycle**: A path that starts and ends at the same vertex
- **Degree**: The number of edges connected to a vertex
- **In-degree**: The number of incoming edges to a vertex (directed graphs)
- **Out-degree**: The number of outgoing edges from a vertex (directed graphs)
- **Connected Graph**: A graph where there is a path between every pair of vertices
- **Connected Component**: A subgraph in which any two vertices are connected to each other by paths

### Visual Representation
```
    A --- B
   /|     |
  / |     |
 C  |     E
  \ |    /
   \|   /
    D--/
```

## 2. Graph Representations

### Adjacency Matrix
A 2D array where matrix[i][j] represents an edge from vertex i to vertex j.

```java
public class AdjacencyMatrix {
    private int V; // Number of vertices
    private boolean[][] adjMatrix;
    
    public AdjacencyMatrix(int v) {
        this.V = v;
        adjMatrix = new boolean[v][v];
    }
    
    public void addEdge(int u, int v) {
        adjMatrix[u][v] = true;
        adjMatrix[v][u] = true; // For undirected graph
    }
    
    public void removeEdge(int u, int v) {
        adjMatrix[u][v] = false;
        adjMatrix[v][u] = false; // For undirected graph
    }
    
    public boolean isEdge(int u, int v) {
        return adjMatrix[u][v];
    }
}
```

**Pros and Cons:**
- **Pros**: 
  - Simple implementation
  - Edge lookup is O(1)
  - Removing an edge is O(1)
- **Cons**: 
  - Uses O(V²) space
  - Adding a vertex is O(V²)
  - Inefficient for sparse graphs

### Adjacency List
An array of lists, where each list describes the set of neighbors of a vertex.

```java
public class AdjacencyList {
    private int V; // Number of vertices
    private List<List<Integer>> adjList;
    
    public AdjacencyList(int v) {
        this.V = v;
        adjList = new ArrayList<>(v);
        for (int i = 0; i < v; i++) {
            adjList.add(new ArrayList<>());
        }
    }
    
    public void addEdge(int u, int v) {
        adjList.get(u).add(v);
        adjList.get(v).add(u); // For undirected graph
    }
    
    public void removeEdge(int u, int v) {
        adjList.get(u).remove(Integer.valueOf(v));
        adjList.get(v).remove(Integer.valueOf(u)); // For undirected graph
    }
    
    public boolean isEdge(int u, int v) {
        return adjList.get(u).contains(v);
    }
    
    public List<Integer> getNeighbors(int v) {
        return adjList.get(v);
    }
}
```

**Pros and Cons:**
- **Pros**: 
  - Space efficient for sparse graphs
  - Adding a vertex is easier
  - Iterating over all edges is efficient
- **Cons**: 
  - Edge lookup is O(V)
  - Removing an edge is O(V)

### Edge List
A list of all edges in the graph.

```java
public class EdgeList {
    private int V; // Number of vertices
    private List<int[]> edges; // Each element is [u, v, weight]
    
    public EdgeList(int v) {
        this.V = v;
        edges = new ArrayList<>();
    }
    
    public void addEdge(int u, int v, int weight) {
        edges.add(new int[]{u, v, weight});
        // For undirected graph, add the reverse edge
        // edges.add(new int[]{v, u, weight});
    }
    
    public List<int[]> getAllEdges() {
        return edges;
    }
}
```

**Pros and Cons:**
- **Pros**: 
  - Simple implementation
  - Space efficient for sparse graphs
  - Good for algorithms that process all edges (e.g., Kruskal's)
- **Cons**: 
  - Edge lookup is O(E)
  - Finding all edges incident to a vertex is O(E)

## 3. Graph Traversals

### Depth-First Search (DFS)
Explores as far as possible along each branch before backtracking.

```java
public void dfs(List<List<Integer>> adjList, int start) {
    boolean[] visited = new boolean[adjList.size()];
    dfsUtil(adjList, start, visited);
}

private void dfsUtil(List<List<Integer>> adjList, int vertex, boolean[] visited) {
    // Mark the current node as visited
    visited[vertex] = true;
    System.out.print(vertex + " ");
    
    // Recur for all adjacent vertices
    for (int neighbor : adjList.get(vertex)) {
        if (!visited[neighbor]) {
            dfsUtil(adjList, neighbor, visited);
        }
    }
}

// Iterative DFS
public void dfsIterative(List<List<Integer>> adjList, int start) {
    boolean[] visited = new boolean[adjList.size()];
    Stack<Integer> stack = new Stack<>();
    
    stack.push(start);
    
    while (!stack.isEmpty()) {
        int vertex = stack.pop();
        
        if (!visited[vertex]) {
            visited[vertex] = true;
            System.out.print(vertex + " ");
            
            // Push all adjacent vertices in reverse order
            // (to process them in the original order)
            List<Integer> neighbors = adjList.get(vertex);
            for (int i = neighbors.size() - 1; i >= 0; i--) {
                int neighbor = neighbors.get(i);
                if (!visited[neighbor]) {
                    stack.push(neighbor);
                }
            }
        }
    }
}
```

**Time Complexity**: O(V + E) where V is the number of vertices and E is the number of edges  
**Space Complexity**: O(V) for the visited array and recursion stack

### Breadth-First Search (BFS)
Explores all neighbors at the present depth before moving to vertices at the next depth level.

```java
public void bfs(List<List<Integer>> adjList, int start) {
    boolean[] visited = new boolean[adjList.size()];
    Queue<Integer> queue = new LinkedList<>();
    
    visited[start] = true;
    queue.offer(start);
    
    while (!queue.isEmpty()) {
        int vertex = queue.poll();
        System.out.print(vertex + " ");
        
        for (int neighbor : adjList.get(vertex)) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.offer(neighbor);
            }
        }
    }
}
```

**Time Complexity**: O(V + E) where V is the number of vertices and E is the number of edges  
**Space Complexity**: O(V) for the visited array and queue

## 4. Graph Algorithms

### Shortest Path Algorithms

#### Dijkstra's Algorithm
Finds the shortest path from a source vertex to all other vertices in a weighted graph with non-negative edge weights.

```java
public int[] dijkstra(List<List<int[]>> adjList, int start) {
    int n = adjList.size();
    int[] dist = new int[n];
    Arrays.fill(dist, Integer.MAX_VALUE);
    dist[start] = 0;
    
    PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[1] - b[1]); // [node, distance]
    pq.offer(new int[]{start, 0});
    
    while (!pq.isEmpty()) {
        int[] curr = pq.poll();
        int node = curr[0], distance = curr[1];
        
        if (distance > dist[node]) continue; // Skip if we found a better path
        
        for (int[] edge : adjList.get(node)) {
            int neighbor = edge[0], weight = edge[1];
            int newDist = dist[node] + weight;
            
            if (newDist < dist[neighbor]) {
                dist[neighbor] = newDist;
                pq.offer(new int[]{neighbor, newDist});
            }
        }
    }
    
    return dist;
}
```

**Time Complexity**: O((V + E) log V) with a binary heap  
**Space Complexity**: O(V + E)

#### Bellman-Ford Algorithm
Finds the shortest path from a source vertex to all other vertices, even with negative edge weights (but no negative cycles).

```java
public int[] bellmanFord(int n, int[][] edges, int start) {
    int[] dist = new int[n];
    Arrays.fill(dist, Integer.MAX_VALUE);
    dist[start] = 0;
    
    // Relax all edges V-1 times
    for (int i = 0; i < n - 1; i++) {
        for (int[] edge : edges) {
            int u = edge[0], v = edge[1], weight = edge[2];
            if (dist[u] != Integer.MAX_VALUE && dist[u] + weight < dist[v]) {
                dist[v] = dist[u] + weight;
            }
        }
    }
    
    // Check for negative cycles
    for (int[] edge : edges) {
        int u = edge[0], v = edge[1], weight = edge[2];
        if (dist[u] != Integer.MAX_VALUE && dist[u] + weight < dist[v]) {
            // Negative cycle exists
            return null;
        }
    }
    
    return dist;
}
```

**Time Complexity**: O(V * E)  
**Space Complexity**: O(V)

#### Floyd-Warshall Algorithm
Finds the shortest paths between all pairs of vertices in a weighted graph.

```java
public int[][] floydWarshall(int n, int[][] edges) {
    // Initialize distance matrix
    int[][] dist = new int[n][n];
    for (int i = 0; i < n; i++) {
        Arrays.fill(dist[i], Integer.MAX_VALUE);
        dist[i][i] = 0;
    }
    
    // Set direct edges
    for (int[] edge : edges) {
        int u = edge[0], v = edge[1], weight = edge[2];
        dist[u][v] = weight;
    }
    
    // Floyd-Warshall algorithm
    for (int k = 0; k < n; k++) {
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (dist[i][k] != Integer.MAX_VALUE && dist[k][j] != Integer.MAX_VALUE &&
                    dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }
    
    return dist;
}
```

**Time Complexity**: O(V³)  
**Space Complexity**: O(V²)

### Minimum Spanning Tree Algorithms

#### Kruskal's Algorithm
Finds a minimum spanning tree for a connected weighted graph.

```java
public List<int[]> kruskalMST(int n, int[][] edges) {
    // Sort edges by weight
    Arrays.sort(edges, (a, b) -> a[2] - b[2]);
    
    // Initialize Union-Find
    int[] parent = new int[n];
    for (int i = 0; i < n; i++) {
        parent[i] = i;
    }
    
    List<int[]> mst = new ArrayList<>();
    
    for (int[] edge : edges) {
        int u = edge[0], v = edge[1], weight = edge[2];
        
        if (find(parent, u) != find(parent, v)) {
            union(parent, u, v);
            mst.add(edge);
        }
        
        if (mst.size() == n - 1) break; // MST has n-1 edges
    }
    
    return mst;
}

private int find(int[] parent, int x) {
    if (parent[x] != x) {
        parent[x] = find(parent, parent[x]); // Path compression
    }
    return parent[x];
}

private void union(int[] parent, int x, int y) {
    parent[find(parent, x)] = find(parent, y);
}
```

**Time Complexity**: O(E log E) or O(E log V)  
**Space Complexity**: O(V + E)

#### Prim's Algorithm
Finds a minimum spanning tree for a connected weighted graph.

```java
public List<int[]> primMST(List<List<int[]>> adjList) {
    int n = adjList.size();
    boolean[] visited = new boolean[n];
    PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[2] - b[2]); // [u, v, weight]
    List<int[]> mst = new ArrayList<>();
    
    // Start from vertex 0
    visited[0] = true;
    for (int[] edge : adjList.get(0)) {
        pq.offer(new int[]{0, edge[0], edge[1]});
    }
    
    while (!pq.isEmpty() && mst.size() < n - 1) {
        int[] edge = pq.poll();
        int u = edge[0], v = edge[1], weight = edge[2];
        
        if (visited[v]) continue;
        
        visited[v] = true;
        mst.add(new int[]{u, v, weight});
        
        for (int[] nextEdge : adjList.get(v)) {
            int neighbor = nextEdge[0], edgeWeight = nextEdge[1];
            if (!visited[neighbor]) {
                pq.offer(new int[]{v, neighbor, edgeWeight});
            }
        }
    }
    
    return mst;
}
```

**Time Complexity**: O(E log V)  
**Space Complexity**: O(V + E)

### Topological Sort
Finds a linear ordering of vertices such that for every directed edge (u, v), vertex u comes before v in the ordering.

```java
public List<Integer> topologicalSort(List<List<Integer>> adjList) {
    int n = adjList.size();
    boolean[] visited = new boolean[n];
    Stack<Integer> stack = new Stack<>();
    
    for (int i = 0; i < n; i++) {
        if (!visited[i]) {
            topologicalSortUtil(adjList, i, visited, stack);
        }
    }
    
    List<Integer> result = new ArrayList<>();
    while (!stack.isEmpty()) {
        result.add(stack.pop());
    }
    
    return result;
}

private void topologicalSortUtil(List<List<Integer>> adjList, int v, boolean[] visited, Stack<Integer> stack) {
    visited[v] = true;
    
    for (int neighbor : adjList.get(v)) {
        if (!visited[neighbor]) {
            topologicalSortUtil(adjList, neighbor, visited, stack);
        }
    }
    
    stack.push(v);
}
```

**Time Complexity**: O(V + E)  
**Space Complexity**: O(V)

### Cycle Detection

#### Cycle Detection in Undirected Graph
```java
public boolean hasCycle(List<List<Integer>> adjList) {
    int n = adjList.size();
    boolean[] visited = new boolean[n];
    
    for (int i = 0; i < n; i++) {
        if (!visited[i]) {
            if (hasCycleUtil(adjList, i, visited, -1)) {
                return true;
            }
        }
    }
    
    return false;
}

private boolean hasCycleUtil(List<List<Integer>> adjList, int v, boolean[] visited, int parent) {
    visited[v] = true;
    
    for (int neighbor : adjList.get(v)) {
        if (!visited[neighbor]) {
            if (hasCycleUtil(adjList, neighbor, visited, v)) {
                return true;
            }
        } else if (neighbor != parent) {
            return true; // Back edge found
        }
    }
    
    return false;
}
```

**Time Complexity**: O(V + E)  
**Space Complexity**: O(V)

#### Cycle Detection in Directed Graph
```java
public boolean hasCycle(List<List<Integer>> adjList) {
    int n = adjList.size();
    boolean[] visited = new boolean[n];
    boolean[] recStack = new boolean[n];
    
    for (int i = 0; i < n; i++) {
        if (hasCycleUtil(adjList, i, visited, recStack)) {
            return true;
        }
    }
    
    return false;
}

private boolean hasCycleUtil(List<List<Integer>> adjList, int v, boolean[] visited, boolean[] recStack) {
    if (recStack[v]) {
        return true; // Cycle detected
    }
    
    if (visited[v]) {
        return false; // Already processed
    }
    
    visited[v] = true;
    recStack[v] = true;
    
    for (int neighbor : adjList.get(v)) {
        if (hasCycleUtil(adjList, neighbor, visited, recStack)) {
            return true;
        }
    }
    
    recStack[v] = false; // Remove from recursion stack
    return false;
}
```

**Time Complexity**: O(V + E)  
**Space Complexity**: O(V)

## 5. Advanced Graph Algorithms

### Strongly Connected Components (Kosaraju's Algorithm)
Finds all strongly connected components in a directed graph.

```java
public List<List<Integer>> stronglyConnectedComponents(List<List<Integer>> adjList) {
    int n = adjList.size();
    boolean[] visited = new boolean[n];
    Stack<Integer> stack = new Stack<>();
    
    // Step 1: Fill stack with vertices in order of finishing time
    for (int i = 0; i < n; i++) {
        if (!visited[i]) {
            fillOrder(adjList, i, visited, stack);
        }
    }
    
    // Step 2: Create transpose of the graph
    List<List<Integer>> transpose = new ArrayList<>();
    for (int i = 0; i < n; i++) {
        transpose.add(new ArrayList<>());
    }
    
    for (int i = 0; i < n; i++) {
        for (int neighbor : adjList.get(i)) {
            transpose.get(neighbor).add(i);
        }
    }
    
    // Step 3: Process vertices in order defined by stack
    Arrays.fill(visited, false);
    List<List<Integer>> result = new ArrayList<>();
    
    while (!stack.isEmpty()) {
        int v = stack.pop();
        
        if (!visited[v]) {
            List<Integer> component = new ArrayList<>();
            dfsUtil(transpose, v, visited, component);
            result.add(component);
        }
    }
    
    return result;
}

private void fillOrder(List<List<Integer>> adjList, int v, boolean[] visited, Stack<Integer> stack) {
    visited[v] = true;
    
    for (int neighbor : adjList.get(v)) {
        if (!visited[neighbor]) {
            fillOrder(adjList, neighbor, visited, stack);
        }
    }
    
    stack.push(v);
}

private void dfsUtil(List<List<Integer>> adjList, int v, boolean[] visited, List<Integer> component) {
    visited[v] = true;
    component.add(v);
    
    for (int neighbor : adjList.get(v)) {
        if (!visited[neighbor]) {
            dfsUtil(adjList, neighbor, visited, component);
        }
    }
}
```

**Time Complexity**: O(V + E)  
**Space Complexity**: O(V)

### Articulation Points and Bridges (Tarjan's Algorithm)
Finds all articulation points (cut vertices) and bridges in an undirected graph.

```java
public class ArticulationPointsAndBridges {
    private int time = 0;
    
    public List<Integer> findArticulationPoints(List<List<Integer>> adjList) {
        int n = adjList.size();
        boolean[] visited = new boolean[n];
        int[] disc = new int[n]; // Discovery time
        int[] low = new int[n]; // Earliest visited vertex
        boolean[] ap = new boolean[n]; // Articulation points
        int[] parent = new int[n];
        Arrays.fill(parent, -1);
        
        for (int i = 0; i < n; i++) {
            if (!visited[i]) {
                dfsAP(adjList, i, visited, disc, low, parent, ap);
            }
        }
        
        List<Integer> result = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            if (ap[i]) {
                result.add(i);
            }
        }
        
        return result;
    }
    
    private void dfsAP(List<List<Integer>> adjList, int u, boolean[] visited, int[] disc, int[] low, int[] parent, boolean[] ap) {
        visited[u] = true;
        disc[u] = low[u] = ++time;
        int children = 0;
        
        for (int v : adjList.get(u)) {
            if (!visited[v]) {
                children++;
                parent[v] = u;
                
                dfsAP(adjList, v, visited, disc, low, parent, ap);
                
                low[u] = Math.min(low[u], low[v]);
                
                // Case 1: u is root and has multiple children
                if (parent[u] == -1 && children > 1) {
                    ap[u] = true;
                }
                
                // Case 2: u is not root and low value of one of its children is >= discovery value of u
                if (parent[u] != -1 && low[v] >= disc[u]) {
                    ap[u] = true;
                }
            } else if (v != parent[u]) {
                low[u] = Math.min(low[u], disc[v]);
            }
        }
    }
    
    public List<int[]> findBridges(List<List<Integer>> adjList) {
        int n = adjList.size();
        boolean[] visited = new boolean[n];
        int[] disc = new int[n];
        int[] low = new int[n];
        int[] parent = new int[n];
        Arrays.fill(parent, -1);
        List<int[]> bridges = new ArrayList<>();
        
        for (int i = 0; i < n; i++) {
            if (!visited[i]) {
                dfsBridge(adjList, i, visited, disc, low, parent, bridges);
            }
        }
        
        return bridges;
    }
    
    private void dfsBridge(List<List<Integer>> adjList, int u, boolean[] visited, int[] disc, int[] low, int[] parent, List<int[]> bridges) {
        visited[u] = true;
        disc[u] = low[u] = ++time;
        
        for (int v : adjList.get(u)) {
            if (!visited[v]) {
                parent[v] = u;
                
                dfsBridge(adjList, v, visited, disc, low, parent, bridges);
                
                low[u] = Math.min(low[u], low[v]);
                
                // If the lowest vertex reachable from v is below v in the DFS tree,
                // then u-v is a bridge
                if (low[v] > disc[u]) {
                    bridges.add(new int[]{u, v});
                }
            } else if (v != parent[u]) {
                low[u] = Math.min(low[u], disc[v]);
            }
        }
    }
}
```

**Time Complexity**: O(V + E)  
**Space Complexity**: O(V)

### Bipartite Graph Check
Checks if a graph can be divided into two sets such that no two adjacent vertices belong to the same set.

```java
public boolean isBipartite(List<List<Integer>> adjList) {
    int n = adjList.size();
    int[] color = new int[n]; // 0: uncolored, 1: color A, -1: color B
    
    for (int i = 0; i < n; i++) {
        if (color[i] == 0) {
            if (!isBipartiteUtil(adjList, i, color, 1)) {
                return false;
            }
        }
    }
    
    return true;
}

private boolean isBipartiteUtil(List<List<Integer>> adjList, int v, int[] color, int c) {
    color[v] = c;
    
    for (int neighbor : adjList.get(v)) {
        if (color[neighbor] == 0) {
            if (!isBipartiteUtil(adjList, neighbor, color, -c)) {
                return false;
            }
        } else if (color[neighbor] == c) {
            return false; // Same color for adjacent vertices
        }
    }
    
    return true;
}
```

**Time Complexity**: O(V + E)  
**Space Complexity**: O(V)

## 6. Common Graph Problems and Patterns

### Pattern 1: Graph Traversal
```java
// Number of Islands (DFS)
public int numIslands(char[][] grid) {
    if (grid == null || grid.length == 0) return 0;
    
    int count = 0;
    int rows = grid.length, cols = grid[0].length;
    
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            if (grid[i][j] == '1') {
                count++;
                dfs(grid, i, j);
            }
        }
    }
    
    return count;
}

private void dfs(char[][] grid, int i, int j) {
    int rows = grid.length, cols = grid[0].length;
    
    if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] != '1') {
        return;
    }
    
    grid[i][j] = '0'; // Mark as visited
    
    dfs(grid, i + 1, j);
    dfs(grid, i - 1, j);
    dfs(grid, i, j + 1);
    dfs(grid, i, j - 1);
}
```

### Pattern 2: Shortest Path
```java
// Network Delay Time (Dijkstra's Algorithm)
public int networkDelayTime(int[][] times, int n, int k) {
    // Build adjacency list
    List<List<int[]>> adjList = new ArrayList<>();
    for (int i = 0; i <= n; i++) {
        adjList.add(new ArrayList<>());
    }
    
    for (int[] time : times) {
        int u = time[0], v = time[1], w = time[2];
        adjList.get(u).add(new int[]{v, w});
    }
    
    // Dijkstra's algorithm
    int[] dist = new int[n + 1];
    Arrays.fill(dist, Integer.MAX_VALUE);
    dist[k] = 0;
    
    PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[1] - b[1]);
    pq.offer(new int[]{k, 0});
    
    while (!pq.isEmpty()) {
        int[] curr = pq.poll();
        int node = curr[0], distance = curr[1];
        
        if (distance > dist[node]) continue;
        
        for (int[] edge : adjList.get(node)) {
            int neighbor = edge[0], weight = edge[1];
            int newDist = dist[node] + weight;
            
            if (newDist < dist[neighbor]) {
                dist[neighbor] = newDist;
                pq.offer(new int[]{neighbor, newDist});
            }
        }
    }
    
    int maxTime = 0;
    for (int i = 1; i <= n; i++) {
        if (dist[i] == Integer.MAX_VALUE) return -1;
        maxTime = Math.max(maxTime, dist[i]);
    }
    
    return maxTime;
}
```

### Pattern 3: Topological Sort
```java
// Course Schedule (Cycle Detection)
public boolean canFinish(int numCourses, int[][] prerequisites) {
    // Build adjacency list
    List<List<Integer>> adjList = new ArrayList<>();
    for (int i = 0; i < numCourses; i++) {
        adjList.add(new ArrayList<>());
    }
    
    for (int[] prereq : prerequisites) {
        adjList.get(prereq[1]).add(prereq[0]);
    }
    
    // 0 = unvisited, 1 = visiting, 2 = visited
    int[] visited = new int[numCourses];
    
    for (int i = 0; i < numCourses; i++) {
        if (visited[i] == 0 && hasCycle(adjList, visited, i)) {
            return false;
        }
    }
    
    return true;
}

private boolean hasCycle(List<List<Integer>> adjList, int[] visited, int node) {
    if (visited[node] == 1) return true; // Cycle detected
    if (visited[node] == 2) return false; // Already processed
    
    visited[node] = 1; // Mark as visiting
    
    for (int neighbor : adjList.get(node)) {
        if (hasCycle(adjList, visited, neighbor)) {
            return true;
        }
    }
    
    visited[node] = 2; // Mark as visited
    return false;
}
```

### Pattern 4: Union-Find
```java
// Number of Connected Components in an Undirected Graph
public int countComponents(int n, int[][] edges) {
    int[] parent = new int[n];
    for (int i = 0; i < n; i++) {
        parent[i] = i;
    }
    
    for (int[] edge : edges) {
        union(parent, edge[0], edge[1]);
    }
    
    int count = 0;
    for (int i = 0; i < n; i++) {
        if (parent[i] == i) {
            count++;
        }
    }
    
    return count;
}

private int find(int[] parent, int x) {
    if (parent[x] != x) {
        parent[x] = find(parent, parent[x]); // Path compression
    }
    return parent[x];
}

private void union(int[] parent, int x, int y) {
    parent[find(parent, x)] = find(parent, y);
}
```

## 7. Time and Space Complexity

| Algorithm | Time Complexity | Space Complexity |
|-----------|----------------|-----------------|
| DFS | O(V + E) | O(V) |
| BFS | O(V + E) | O(V) |
| Dijkstra's | O((V + E) log V) | O(V + E) |
| Bellman-Ford | O(V * E) | O(V) |
| Floyd-Warshall | O(V³) | O(V²) |
| Kruskal's MST | O(E log E) | O(V + E) |
| Prim's MST | O(E log V) | O(V + E) |
| Topological Sort | O(V + E) | O(V) |
| Kosaraju's SCC | O(V + E) | O(V) |
| Tarjan's AP & Bridges | O(V + E) | O(V) |

## 8. Best Practices

1. **Choose the right representation**: Adjacency list for sparse graphs, adjacency matrix for dense graphs
2. **Consider edge cases**: Empty graph, disconnected graph, self-loops, parallel edges
3. **Optimize traversals**: Use BFS for shortest path in unweighted graphs, DFS for exploring all paths
4. **Use appropriate algorithms**: Dijkstra's for non-negative weights, Bellman-Ford for negative weights
5. **Implement Union-Find with path compression** for efficient connected components problems

## 9. Learning Strategy for Graphs

1. **Master the basics**: Graph representations, DFS, BFS
2. **Understand common patterns**: Shortest path, topological sort, connected components
3. **Practice by category**: Start with traversal problems, then shortest path, then more complex algorithms
4. **Analyze solutions**: Understand time and space complexity
5. **Implement from scratch**: Don't memorize solutions, understand the approach

## 10. Common Interview Questions

1. Implement DFS and BFS
2. Find the shortest path between two nodes
3. Detect a cycle in a directed/undirected graph
4. Check if a graph is bipartite
5. Find all connected components
6. Implement topological sort
7. Find the minimum spanning tree
8. Detect strongly connected components
9. Find articulation points and bridges
10. Solve the course schedule problem

## Resources for Further Learning

1. **Books**:
   - "Introduction to Algorithms" by CLRS
   - "Algorithms" by Robert Sedgewick and Kevin Wayne

2. **Online Platforms**:
   - LeetCode: Graph section
   - GeeksforGeeks: Graph algorithms
   - HackerRank: Graph theory challenges

3. **YouTube Channels**:
   - [William Fiset](https://www.youtube.com/watch?v=09_LlHjoEiY) - Graph Theory Playlist
   - [Abdul Bari](https://www.youtube.com/watch?v=pcKY4hjDrxk) - Graph Algorithms
   - [Back To Back SWE](https://www.youtube.com/watch?v=tWVWeAqZ0WU) - Graph Problems
   - [Striver (takeUforward)](https://www.youtube.com/watch?v=M3_pLsDdeuU) - Graph Algorithms

4. **Visualization Tools**:
   - [VisuAlgo](https://visualgo.net/en/graphds)
   - [Algorithm Visualizer](https://algorithm-visualizer.org/)
   - [CS Academy Graph Editor](https://csacademy.com/app/graph_editor/)