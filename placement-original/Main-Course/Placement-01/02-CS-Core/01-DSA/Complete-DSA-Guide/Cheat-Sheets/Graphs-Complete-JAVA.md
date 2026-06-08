# 🌐 Graphs - Complete Question Set (Love Babbar + Striver)
## Total: 55 Questions with Java Solutions & Theory

---

## 📋 Theory & Patterns

### Graph Fundamentals:
1. **Directed vs Undirected** - Edge direction matters or not
2. **Weighted vs Unweighted** - Edges have costs or not
3. **Connected vs Disconnected** - All vertices reachable or not
4. **Cyclic vs Acyclic** - Contains cycles or not
5. **Dense vs Sparse** - Many edges vs few edges

### Graph Representations:
1. **Adjacency Matrix** - 2D array, O(V²) space
2. **Adjacency List** - Array of lists, O(V + E) space
3. **Edge List** - List of edges, O(E) space

### Graph Algorithms:
- **DFS** - Depth-First Search for connectivity, cycles
- **BFS** - Breadth-First Search for shortest paths
- **Dijkstra** - Shortest path in weighted graphs
- **Bellman-Ford** - Handles negative weights
- **Floyd-Warshall** - All pairs shortest paths
- **Kruskal/Prim** - Minimum Spanning Tree
- **Topological Sort** - DAG ordering

### Graph Implementations:
```java
// Adjacency List Representation
class Graph {
    private int vertices;
    private List<List<Integer>> adjList;
    
    public Graph(int vertices) {
        this.vertices = vertices;
        adjList = new ArrayList<>();
        
        for (int i = 0; i < vertices; i++) {
            adjList.add(new ArrayList<>());
        }
    }
    
    public void addEdge(int u, int v) {
        adjList.get(u).add(v);
        adjList.get(v).add(u); // For undirected graph
    }
    
    public List<Integer> getNeighbors(int vertex) {
        return adjList.get(vertex);
    }
}

// Weighted Graph
class WeightedGraph {
    class Edge {
        int to, weight;
        
        Edge(int to, int weight) {
            this.to = to;
            this.weight = weight;
        }
    }
    
    private List<List<Edge>> adjList;
    
    public WeightedGraph(int vertices) {
        adjList = new ArrayList<>();
        for (int i = 0; i < vertices; i++) {
            adjList.add(new ArrayList<>());
        }
    }
    
    public void addEdge(int from, int to, int weight) {
        adjList.get(from).add(new Edge(to, weight));
    }
}
```

---

## 💡 Love Babbar Graph Questions (389-433)

### 389. DFS Traversal
**Problem**: Depth-First Search traversal of graph  
**Difficulty**: Easy  
**Pattern**: Recursive/Stack-based DFS

```java
import java.util.*;

public List<Integer> dfsTraversal(int vertices, List<List<Integer>> adjList) {
    List<Integer> result = new ArrayList<>();
    boolean[] visited = new boolean[vertices];
    
    // Handle disconnected components
    for (int i = 0; i < vertices; i++) {
        if (!visited[i]) {
            dfsHelper(i, adjList, visited, result);
        }
    }
    
    return result;
}

private void dfsHelper(int vertex, List<List<Integer>> adjList, 
                      boolean[] visited, List<Integer> result) {
    visited[vertex] = true;
    result.add(vertex);
    
    for (int neighbor : adjList.get(vertex)) {
        if (!visited[neighbor]) {
            dfsHelper(neighbor, adjList, visited, result);
        }
    }
}

// Iterative DFS using stack
public List<Integer> dfsIterative(int vertices, List<List<Integer>> adjList) {
    List<Integer> result = new ArrayList<>();
    boolean[] visited = new boolean[vertices];
    
    for (int i = 0; i < vertices; i++) {
        if (!visited[i]) {
            Stack<Integer> stack = new Stack<>();
            stack.push(i);
            
            while (!stack.isEmpty()) {
                int vertex = stack.pop();
                
                if (!visited[vertex]) {
                    visited[vertex] = true;
                    result.add(vertex);
                    
                    // Add neighbors in reverse order for consistent traversal
                    List<Integer> neighbors = adjList.get(vertex);
                    for (int j = neighbors.size() - 1; j >= 0; j--) {
                        if (!visited[neighbors.get(j)]) {
                            stack.push(neighbors.get(j));
                        }
                    }
                }
            }
        }
    }
    
    return result;
}

// DFS with path tracking
public List<List<Integer>> findAllPaths(List<List<Integer>> adjList, int start, int end) {
    List<List<Integer>> allPaths = new ArrayList<>();
    List<Integer> currentPath = new ArrayList<>();
    boolean[] visited = new boolean[adjList.size()];
    
    dfsAllPaths(adjList, start, end, visited, currentPath, allPaths);
    return allPaths;
}

private void dfsAllPaths(List<List<Integer>> adjList, int current, int target,
                        boolean[] visited, List<Integer> currentPath, 
                        List<List<Integer>> allPaths) {
    visited[current] = true;
    currentPath.add(current);
    
    if (current == target) {
        allPaths.add(new ArrayList<>(currentPath));
    } else {
        for (int neighbor : adjList.get(current)) {
            if (!visited[neighbor]) {
                dfsAllPaths(adjList, neighbor, target, visited, currentPath, allPaths);
            }
        }
    }
    
    // Backtrack
    currentPath.remove(currentPath.size() - 1);
    visited[current] = false;
}
```
**Time**: O(V + E), **Space**: O(V)

---

### 390. BFS Traversal
**Problem**: Breadth-First Search traversal of graph  
**Difficulty**: Easy  
**Pattern**: Queue-based BFS

```java
import java.util.*;

public List<Integer> bfsTraversal(int vertices, List<List<Integer>> adjList) {
    List<Integer> result = new ArrayList<>();
    boolean[] visited = new boolean[vertices];
    
    for (int i = 0; i < vertices; i++) {
        if (!visited[i]) {
            bfsHelper(i, adjList, visited, result);
        }
    }
    
    return result;
}

private void bfsHelper(int start, List<List<Integer>> adjList, 
                      boolean[] visited, List<Integer> result) {
    Queue<Integer> queue = new LinkedList<>();
    queue.offer(start);
    visited[start] = true;
    
    while (!queue.isEmpty()) {
        int vertex = queue.poll();
        result.add(vertex);
        
        for (int neighbor : adjList.get(vertex)) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.offer(neighbor);
            }
        }
    }
}

// BFS with levels
public List<List<Integer>> bfsLevelOrder(List<List<Integer>> adjList, int start) {
    List<List<Integer>> levels = new ArrayList<>();
    boolean[] visited = new boolean[adjList.size()];
    Queue<Integer> queue = new LinkedList<>();
    
    queue.offer(start);
    visited[start] = true;
    
    while (!queue.isEmpty()) {
        int levelSize = queue.size();
        List<Integer> currentLevel = new ArrayList<>();
        
        for (int i = 0; i < levelSize; i++) {
            int vertex = queue.poll();
            currentLevel.add(vertex);
            
            for (int neighbor : adjList.get(vertex)) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.offer(neighbor);
                }
            }
        }
        
        levels.add(currentLevel);
    }
    
    return levels;
}

// BFS shortest path
public int shortestPath(List<List<Integer>> adjList, int start, int end) {
    if (start == end) return 0;
    
    boolean[] visited = new boolean[adjList.size()];
    Queue<Integer> queue = new LinkedList<>();
    Queue<Integer> distance = new LinkedList<>();
    
    queue.offer(start);
    distance.offer(0);
    visited[start] = true;
    
    while (!queue.isEmpty()) {
        int vertex = queue.poll();
        int dist = distance.poll();
        
        for (int neighbor : adjList.get(vertex)) {
            if (neighbor == end) {
                return dist + 1;
            }
            
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.offer(neighbor);
                distance.offer(dist + 1);
            }
        }
    }
    
    return -1; // No path found
}
```
**Time**: O(V + E), **Space**: O(V)

---

### 391. Detect Cycle in Undirected Graph
**Problem**: Check if undirected graph has cycle  
**Difficulty**: Medium  
**Pattern**: DFS with Parent Tracking

```java
public boolean hasCycle(int vertices, List<List<Integer>> adjList) {
    boolean[] visited = new boolean[vertices];
    
    for (int i = 0; i < vertices; i++) {
        if (!visited[i]) {
            if (dfsHasCycle(i, -1, adjList, visited)) {
                return true;
            }
        }
    }
    
    return false;
}

private boolean dfsHasCycle(int vertex, int parent, List<List<Integer>> adjList, 
                           boolean[] visited) {
    visited[vertex] = true;
    
    for (int neighbor : adjList.get(vertex)) {
        if (!visited[neighbor]) {
            if (dfsHasCycle(neighbor, vertex, adjList, visited)) {
                return true;
            }
        } else if (neighbor != parent) {
            // Back edge found (cycle detected)
            return true;
        }
    }
    
    return false;
}

// Using Union-Find (Disjoint Set)
class UnionFind {
    private int[] parent;
    private int[] rank;
    
    public UnionFind(int n) {
        parent = new int[n];
        rank = new int[n];
        
        for (int i = 0; i < n; i++) {
            parent[i] = i;
            rank[i] = 0;
        }
    }
    
    public int find(int x) {
        if (parent[x] != x) {
            parent[x] = find(parent[x]); // Path compression
        }
        return parent[x];
    }
    
    public boolean union(int x, int y) {
        int rootX = find(x);
        int rootY = find(y);
        
        if (rootX == rootY) {
            return false; // Cycle detected
        }
        
        // Union by rank
        if (rank[rootX] < rank[rootY]) {
            parent[rootX] = rootY;
        } else if (rank[rootX] > rank[rootY]) {
            parent[rootY] = rootX;
        } else {
            parent[rootY] = rootX;
            rank[rootX]++;
        }
        
        return true;
    }
}

public boolean hasCycleUnionFind(int vertices, int[][] edges) {
    UnionFind uf = new UnionFind(vertices);
    
    for (int[] edge : edges) {
        if (!uf.union(edge[0], edge[1])) {
            return true; // Cycle detected
        }
    }
    
    return false;
}
```
**Time**: O(V + E), **Space**: O(V)

---

### 392. Detect Cycle in Directed Graph
**Problem**: Check if directed graph has cycle  
**Difficulty**: Medium  
**Pattern**: DFS with Colors/Topological Sort

```java
public boolean hasCycleDirected(int vertices, List<List<Integer>> adjList) {
    int[] color = new int[vertices]; // 0: white, 1: gray, 2: black
    
    for (int i = 0; i < vertices; i++) {
        if (color[i] == 0) {
            if (dfsHasCycleDirected(i, adjList, color)) {
                return true;
            }
        }
    }
    
    return false;
}

private boolean dfsHasCycleDirected(int vertex, List<List<Integer>> adjList, int[] color) {
    color[vertex] = 1; // Mark as gray (visiting)
    
    for (int neighbor : adjList.get(vertex)) {
        if (color[neighbor] == 1) {
            return true; // Back edge found (cycle)
        }
        
        if (color[neighbor] == 0 && dfsHasCycleDirected(neighbor, adjList, color)) {
            return true;
        }
    }
    
    color[vertex] = 2; // Mark as black (visited)
    return false;
}

// Using Kahn's algorithm (topological sort)
public boolean hasCycleKahn(int vertices, List<List<Integer>> adjList) {
    int[] indegree = new int[vertices];
    
    // Calculate indegree for each vertex
    for (int i = 0; i < vertices; i++) {
        for (int neighbor : adjList.get(i)) {
            indegree[neighbor]++;
        }
    }
    
    Queue<Integer> queue = new LinkedList<>();
    
    // Add all vertices with indegree 0
    for (int i = 0; i < vertices; i++) {
        if (indegree[i] == 0) {
            queue.offer(i);
        }
    }
    
    int processedVertices = 0;
    
    while (!queue.isEmpty()) {
        int vertex = queue.poll();
        processedVertices++;
        
        for (int neighbor : adjList.get(vertex)) {
            indegree[neighbor]--;
            if (indegree[neighbor] == 0) {
                queue.offer(neighbor);
            }
        }
    }
    
    return processedVertices != vertices; // Cycle exists if not all vertices processed
}
```
**Time**: O(V + E), **Space**: O(V)

---

### 393. Topological Sort
**Problem**: Linear ordering of directed acyclic graph  
**Difficulty**: Medium  
**Pattern**: DFS/Kahn's Algorithm

```java
// DFS-based topological sort
public List<Integer> topologicalSortDFS(int vertices, List<List<Integer>> adjList) {
    Stack<Integer> stack = new Stack<>();
    boolean[] visited = new boolean[vertices];
    
    for (int i = 0; i < vertices; i++) {
        if (!visited[i]) {
            topologicalSortHelper(i, adjList, visited, stack);
        }
    }
    
    List<Integer> result = new ArrayList<>();
    while (!stack.isEmpty()) {
        result.add(stack.pop());
    }
    
    return result;
}

private void topologicalSortHelper(int vertex, List<List<Integer>> adjList, 
                                  boolean[] visited, Stack<Integer> stack) {
    visited[vertex] = true;
    
    for (int neighbor : adjList.get(vertex)) {
        if (!visited[neighbor]) {
            topologicalSortHelper(neighbor, adjList, visited, stack);
        }
    }
    
    stack.push(vertex);
}

// Kahn's algorithm (BFS-based)
public List<Integer> topologicalSortKahn(int vertices, List<List<Integer>> adjList) {
    int[] indegree = new int[vertices];
    
    // Calculate indegree
    for (int i = 0; i < vertices; i++) {
        for (int neighbor : adjList.get(i)) {
            indegree[neighbor]++;
        }
    }
    
    Queue<Integer> queue = new LinkedList<>();
    List<Integer> result = new ArrayList<>();
    
    // Add vertices with indegree 0
    for (int i = 0; i < vertices; i++) {
        if (indegree[i] == 0) {
            queue.offer(i);
        }
    }
    
    while (!queue.isEmpty()) {
        int vertex = queue.poll();
        result.add(vertex);
        
        for (int neighbor : adjList.get(vertex)) {
            indegree[neighbor]--;
            if (indegree[neighbor] == 0) {
                queue.offer(neighbor);
            }
        }
    }
    
    // Check if all vertices are included (DAG property)
    if (result.size() != vertices) {
        return new ArrayList<>(); // Cycle exists
    }
    
    return result;
}

// All possible topological sorts
public List<List<Integer>> allTopologicalSorts(int vertices, List<List<Integer>> adjList) {
    int[] indegree = new int[vertices];
    
    for (int i = 0; i < vertices; i++) {
        for (int neighbor : adjList.get(i)) {
            indegree[neighbor]++;
        }
    }
    
    List<List<Integer>> result = new ArrayList<>();
    List<Integer> currentSort = new ArrayList<>();
    
    allTopologicalSortsHelper(adjList, indegree, currentSort, result);
    return result;
}

private void allTopologicalSortsHelper(List<List<Integer>> adjList, int[] indegree,
                                      List<Integer> currentSort, List<List<Integer>> result) {
    boolean hasZeroIndegree = false;
    
    for (int i = 0; i < indegree.length; i++) {
        if (indegree[i] == 0) {
            hasZeroIndegree = true;
            
            // Include vertex in current sort
            currentSort.add(i);
            indegree[i] = -1; // Mark as used
            
            // Reduce indegree of neighbors
            for (int neighbor : adjList.get(i)) {
                indegree[neighbor]--;
            }
            
            allTopologicalSortsHelper(adjList, indegree, currentSort, result);
            
            // Backtrack
            currentSort.remove(currentSort.size() - 1);
            indegree[i] = 0;
            
            for (int neighbor : adjList.get(i)) {
                indegree[neighbor]++;
            }
        }
    }
    
    if (!hasZeroIndegree && currentSort.size() == indegree.length) {
        result.add(new ArrayList<>(currentSort));
    }
}
```
**Time**: O(V + E), **Space**: O(V)

---

### 394. Shortest Path in Unweighted Graph
**Problem**: Find shortest path using BFS  
**Difficulty**: Easy  
**Pattern**: BFS with Distance Tracking

```java
public int[] shortestPath(int vertices, List<List<Integer>> adjList, int source) {
    int[] distance = new int[vertices];
    Arrays.fill(distance, -1);
    
    Queue<Integer> queue = new LinkedList<>();
    queue.offer(source);
    distance[source] = 0;
    
    while (!queue.isEmpty()) {
        int vertex = queue.poll();
        
        for (int neighbor : adjList.get(vertex)) {
            if (distance[neighbor] == -1) {
                distance[neighbor] = distance[vertex] + 1;
                queue.offer(neighbor);
            }
        }
    }
    
    return distance;
}

// Reconstruct path
public List<Integer> reconstructPath(int vertices, List<List<Integer>> adjList, 
                                   int source, int target) {
    int[] parent = new int[vertices];
    int[] distance = new int[vertices];
    Arrays.fill(parent, -1);
    Arrays.fill(distance, -1);
    
    Queue<Integer> queue = new LinkedList<>();
    queue.offer(source);
    distance[source] = 0;
    
    while (!queue.isEmpty()) {
        int vertex = queue.poll();
        
        if (vertex == target) {
            break;
        }
        
        for (int neighbor : adjList.get(vertex)) {
            if (distance[neighbor] == -1) {
                distance[neighbor] = distance[vertex] + 1;
                parent[neighbor] = vertex;
                queue.offer(neighbor);
            }
        }
    }
    
    if (distance[target] == -1) {
        return new ArrayList<>(); // No path
    }
    
    // Reconstruct path
    List<Integer> path = new ArrayList<>();
    int current = target;
    
    while (current != -1) {
        path.add(current);
        current = parent[current];
    }
    
    Collections.reverse(path);
    return path;
}

// Count shortest paths
public int countShortestPaths(int vertices, List<List<Integer>> adjList, 
                             int source, int target) {
    int[] distance = new int[vertices];
    int[] count = new int[vertices];
    Arrays.fill(distance, -1);
    
    Queue<Integer> queue = new LinkedList<>();
    queue.offer(source);
    distance[source] = 0;
    count[source] = 1;
    
    while (!queue.isEmpty()) {
        int vertex = queue.poll();
        
        for (int neighbor : adjList.get(vertex)) {
            if (distance[neighbor] == -1) {
                distance[neighbor] = distance[vertex] + 1;
                count[neighbor] = count[vertex];
                queue.offer(neighbor);
            } else if (distance[neighbor] == distance[vertex] + 1) {
                count[neighbor] += count[vertex];
            }
        }
    }
    
    return count[target];
}
```
**Time**: O(V + E), **Space**: O(V)

---

### 395. Dijkstra's Algorithm
**Problem**: Shortest path in weighted graph  
**Difficulty**: Medium  
**Pattern**: Priority Queue + Relaxation

```java
import java.util.*;

class Edge {
    int to, weight;
    
    Edge(int to, int weight) {
        this.to = to;
        this.weight = weight;
    }
}

public int[] dijkstra(int vertices, List<List<Edge>> adjList, int source) {
    int[] distance = new int[vertices];
    Arrays.fill(distance, Integer.MAX_VALUE);
    distance[source] = 0;
    
    PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[1] - b[1]);
    pq.offer(new int[]{source, 0});
    
    while (!pq.isEmpty()) {
        int[] current = pq.poll();
        int vertex = current[0];
        int dist = current[1];
        
        if (dist > distance[vertex]) {
            continue; // Skip outdated entry
        }
        
        for (Edge edge : adjList.get(vertex)) {
            int newDist = distance[vertex] + edge.weight;
            
            if (newDist < distance[edge.to]) {
                distance[edge.to] = newDist;
                pq.offer(new int[]{edge.to, newDist});
            }
        }
    }
    
    return distance;
}

// Dijkstra with path reconstruction
public class DijkstraResult {
    int[] distance;
    int[] parent;
    
    DijkstraResult(int[] distance, int[] parent) {
        this.distance = distance;
        this.parent = parent;
    }
}

public DijkstraResult dijkstraWithPath(int vertices, List<List<Edge>> adjList, int source) {
    int[] distance = new int[vertices];
    int[] parent = new int[vertices];
    Arrays.fill(distance, Integer.MAX_VALUE);
    Arrays.fill(parent, -1);
    distance[source] = 0;
    
    PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[1] - b[1]);
    pq.offer(new int[]{source, 0});
    
    while (!pq.isEmpty()) {
        int[] current = pq.poll();
        int vertex = current[0];
        int dist = current[1];
        
        if (dist > distance[vertex]) continue;
        
        for (Edge edge : adjList.get(vertex)) {
            int newDist = distance[vertex] + edge.weight;
            
            if (newDist < distance[edge.to]) {
                distance[edge.to] = newDist;
                parent[edge.to] = vertex;
                pq.offer(new int[]{edge.to, newDist});
            }
        }
    }
    
    return new DijkstraResult(distance, parent);
}

public List<Integer> getPath(int[] parent, int source, int target) {
    if (parent[target] == -1 && target != source) {
        return new ArrayList<>(); // No path
    }
    
    List<Integer> path = new ArrayList<>();
    int current = target;
    
    while (current != -1) {
        path.add(current);
        current = parent[current];
    }
    
    Collections.reverse(path);
    return path;
}
```
**Time**: O((V + E) log V), **Space**: O(V)

---

### 396. Bellman-Ford Algorithm
**Problem**: Shortest path with negative weights  
**Difficulty**: Medium  
**Pattern**: Edge Relaxation with Negative Cycle Detection

```java
class WeightedEdge {
    int from, to, weight;
    
    WeightedEdge(int from, int to, int weight) {
        this.from = from;
        this.to = to;
        this.weight = weight;
    }
}

public int[] bellmanFord(int vertices, List<WeightedEdge> edges, int source) {
    int[] distance = new int[vertices];
    Arrays.fill(distance, Integer.MAX_VALUE);
    distance[source] = 0;
    
    // Relax edges V-1 times
    for (int i = 0; i < vertices - 1; i++) {
        for (WeightedEdge edge : edges) {
            if (distance[edge.from] != Integer.MAX_VALUE && 
                distance[edge.from] + edge.weight < distance[edge.to]) {
                distance[edge.to] = distance[edge.from] + edge.weight;
            }
        }
    }
    
    // Check for negative cycles
    for (WeightedEdge edge : edges) {
        if (distance[edge.from] != Integer.MAX_VALUE && 
            distance[edge.from] + edge.weight < distance[edge.to]) {
            throw new RuntimeException("Graph contains negative cycle");
        }
    }
    
    return distance;
}

// Detect negative cycle and return affected vertices
public Set<Integer> findNegativeCycleVertices(int vertices, List<WeightedEdge> edges, int source) {
    int[] distance = new int[vertices];
    Arrays.fill(distance, Integer.MAX_VALUE);
    distance[source] = 0;
    
    // Relax edges V-1 times
    for (int i = 0; i < vertices - 1; i++) {
        for (WeightedEdge edge : edges) {
            if (distance[edge.from] != Integer.MAX_VALUE && 
                distance[edge.from] + edge.weight < distance[edge.to]) {
                distance[edge.to] = distance[edge.from] + edge.weight;
            }
        }
    }
    
    // Find vertices affected by negative cycles
    Set<Integer> negativeCycleVertices = new HashSet<>();
    
    for (int i = 0; i < vertices; i++) {
        for (WeightedEdge edge : edges) {
            if (distance[edge.from] != Integer.MAX_VALUE && 
                distance[edge.from] + edge.weight < distance[edge.to]) {
                distance[edge.to] = Integer.MIN_VALUE;
                negativeCycleVertices.add(edge.to);
            }
        }
    }
    
    return negativeCycleVertices;
}
```
**Time**: O(VE), **Space**: O(V)

---

### 397. Floyd-Warshall Algorithm
**Problem**: All pairs shortest paths  
**Difficulty**: Medium  
**Pattern**: Dynamic Programming on Paths

```java
public int[][] floydWarshall(int vertices, int[][] graph) {
    int[][] dist = new int[vertices][vertices];
    final int INF = Integer.MAX_VALUE;
    
    // Initialize distances
    for (int i = 0; i < vertices; i++) {
        for (int j = 0; j < vertices; j++) {
            if (i == j) {
                dist[i][j] = 0;
            } else if (graph[i][j] != 0) {
                dist[i][j] = graph[i][j];
            } else {
                dist[i][j] = INF;
            }
        }
    }
    
    // Floyd-Warshall algorithm
    for (int k = 0; k < vertices; k++) {
        for (int i = 0; i < vertices; i++) {
            for (int j = 0; j < vertices; j++) {
                if (dist[i][k] != INF && dist[k][j] != INF && 
                    dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }
    
    return dist;
}

// Floyd-Warshall with path reconstruction
public class FloydWarshallResult {
    int[][] distance;
    int[][] next;
    
    FloydWarshallResult(int[][] distance, int[][] next) {
        this.distance = distance;
        this.next = next;
    }
}

public FloydWarshallResult floydWarshallWithPath(int vertices, int[][] graph) {
    int[][] dist = new int[vertices][vertices];
    int[][] next = new int[vertices][vertices];
    final int INF = Integer.MAX_VALUE;
    
    // Initialize
    for (int i = 0; i < vertices; i++) {
        for (int j = 0; j < vertices; j++) {
            if (i == j) {
                dist[i][j] = 0;
                next[i][j] = i;
            } else if (graph[i][j] != 0) {
                dist[i][j] = graph[i][j];
                next[i][j] = j;
            } else {
                dist[i][j] = INF;
                next[i][j] = -1;
            }
        }
    }
    
    // Main algorithm
    for (int k = 0; k < vertices; k++) {
        for (int i = 0; i < vertices; i++) {
            for (int j = 0; j < vertices; j++) {
                if (dist[i][k] != INF && dist[k][j] != INF && 
                    dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                    next[i][j] = next[i][k];
                }
            }
        }
    }
    
    return new FloydWarshallResult(dist, next);
}

public List<Integer> reconstructPath(int[][] next, int start, int end) {
    if (next[start][end] == -1) {
        return new ArrayList<>(); // No path
    }
    
    List<Integer> path = new ArrayList<>();
    int current = start;
    
    while (current != end) {
        path.add(current);
        current = next[current][end];
    }
    path.add(end);
    
    return path;
}
```
**Time**: O(V³), **Space**: O(V²)

---

## 🚀 Striver Graph Questions

### S1. Number of Islands
**Problem**: Count connected components in 2D grid  
**Difficulty**: Medium  
**Pattern**: DFS/BFS on Grid

```java
public int numIslands(char[][] grid) {
    if (grid == null || grid.length == 0) return 0;
    
    int rows = grid.length;
    int cols = grid[0].length;
    int islands = 0;
    
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            if (grid[i][j] == '1') {
                islands++;
                dfsMarkIsland(grid, i, j);
            }
        }
    }
    
    return islands;
}

private void dfsMarkIsland(char[][] grid, int row, int col) {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || 
        grid[row][col] != '1') {
        return;
    }
    
    grid[row][col] = '0'; // Mark as visited
    
    // Explore 4 directions
    dfsMarkIsland(grid, row + 1, col);
    dfsMarkIsland(grid, row - 1, col);
    dfsMarkIsland(grid, row, col + 1);
    dfsMarkIsland(grid, row, col - 1);
}

// BFS approach
public int numIslandsBFS(char[][] grid) {
    if (grid == null || grid.length == 0) return 0;
    
    int rows = grid.length;
    int cols = grid[0].length;
    int islands = 0;
    
    int[][] directions = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
    
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            if (grid[i][j] == '1') {
                islands++;
                
                Queue<int[]> queue = new LinkedList<>();
                queue.offer(new int[]{i, j});
                grid[i][j] = '0';
                
                while (!queue.isEmpty()) {
                    int[] current = queue.poll();
                    
                    for (int[] dir : directions) {
                        int newRow = current[0] + dir[0];
                        int newCol = current[1] + dir[1];
                        
                        if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && 
                            grid[newRow][newCol] == '1') {
                            grid[newRow][newCol] = '0';
                            queue.offer(new int[]{newRow, newCol});
                        }
                    }
                }
            }
        }
    }
    
    return islands;
}

// Union-Find approach
public int numIslandsUnionFind(char[][] grid) {
    if (grid == null || grid.length == 0) return 0;
    
    int rows = grid.length;
    int cols = grid[0].length;
    
    UnionFind uf = new UnionFind(rows * cols);
    int count = 0;
    
    int[][] directions = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
    
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            if (grid[i][j] == '1') {
                count++;
                
                for (int[] dir : directions) {
                    int newRow = i + dir[0];
                    int newCol = j + dir[1];
                    
                    if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && 
                        grid[newRow][newCol] == '1') {
                        
                        int id1 = i * cols + j;
                        int id2 = newRow * cols + newCol;
                        
                        if (uf.union(id1, id2)) {
                            count--;
                        }
                    }
                }
            }
        }
    }
    
    return count;
}
```
**Time**: O(rows × cols), **Space**: O(1) DFS, O(min(rows, cols)) BFS

---

### S2. Course Schedule
**Problem**: Check if all courses can be completed (cycle detection)  
**Difficulty**: Medium  
**Pattern**: Topological Sort

```java
public boolean canFinish(int numCourses, int[][] prerequisites) {
    List<List<Integer>> adjList = new ArrayList<>();
    int[] indegree = new int[numCourses];
    
    // Build graph
    for (int i = 0; i < numCourses; i++) {
        adjList.add(new ArrayList<>());
    }
    
    for (int[] prereq : prerequisites) {
        adjList.get(prereq[1]).add(prereq[0]);
        indegree[prereq[0]]++;
    }
    
    // Kahn's algorithm
    Queue<Integer> queue = new LinkedList<>();
    for (int i = 0; i < numCourses; i++) {
        if (indegree[i] == 0) {
            queue.offer(i);
        }
    }
    
    int completedCourses = 0;
    
    while (!queue.isEmpty()) {
        int course = queue.poll();
        completedCourses++;
        
        for (int nextCourse : adjList.get(course)) {
            indegree[nextCourse]--;
            if (indegree[nextCourse] == 0) {
                queue.offer(nextCourse);
            }
        }
    }
    
    return completedCourses == numCourses;
}

// Course Schedule II - return order of courses
public int[] findOrder(int numCourses, int[][] prerequisites) {
    List<List<Integer>> adjList = new ArrayList<>();
    int[] indegree = new int[numCourses];
    
    for (int i = 0; i < numCourses; i++) {
        adjList.add(new ArrayList<>());
    }
    
    for (int[] prereq : prerequisites) {
        adjList.get(prereq[1]).add(prereq[0]);
        indegree[prereq[0]]++;
    }
    
    Queue<Integer> queue = new LinkedList<>();
    for (int i = 0; i < numCourses; i++) {
        if (indegree[i] == 0) {
            queue.offer(i);
        }
    }
    
    int[] order = new int[numCourses];
    int index = 0;
    
    while (!queue.isEmpty()) {
        int course = queue.poll();
        order[index++] = course;
        
        for (int nextCourse : adjList.get(course)) {
            indegree[nextCourse]--;
            if (indegree[nextCourse] == 0) {
                queue.offer(nextCourse);
            }
        }
    }
    
    return index == numCourses ? order : new int[0];
}
```
**Time**: O(V + E), **Space**: O(V + E)

---

### S3. Word Ladder
**Problem**: Minimum transformations from start to end word  
**Difficulty**: Hard  
**Pattern**: BFS with String Transformations

```java
public int ladderLength(String beginWord, String endWord, List<String> wordList) {
    Set<String> wordSet = new HashSet<>(wordList);
    
    if (!wordSet.contains(endWord)) {
        return 0;
    }
    
    Queue<String> queue = new LinkedList<>();
    Set<String> visited = new HashSet<>();
    
    queue.offer(beginWord);
    visited.add(beginWord);
    
    int level = 1;
    
    while (!queue.isEmpty()) {
        int size = queue.size();
        
        for (int i = 0; i < size; i++) {
            String currentWord = queue.poll();
            
            if (currentWord.equals(endWord)) {
                return level;
            }
            
            // Try all possible one-character changes
            char[] chars = currentWord.toCharArray();
            
            for (int j = 0; j < chars.length; j++) {
                char originalChar = chars[j];
                
                for (char c = 'a'; c <= 'z'; c++) {
                    if (c == originalChar) continue;
                    
                    chars[j] = c;
                    String newWord = new String(chars);
                    
                    if (wordSet.contains(newWord) && !visited.contains(newWord)) {
                        visited.add(newWord);
                        queue.offer(newWord);
                    }
                }
                
                chars[j] = originalChar; // Restore
            }
        }
        
        level++;
    }
    
    return 0;
}

// Bidirectional BFS for optimization
public int ladderLengthBidirectional(String beginWord, String endWord, List<String> wordList) {
    Set<String> wordSet = new HashSet<>(wordList);
    
    if (!wordSet.contains(endWord)) {
        return 0;
    }
    
    Set<String> beginSet = new HashSet<>();
    Set<String> endSet = new HashSet<>();
    Set<String> visited = new HashSet<>();
    
    beginSet.add(beginWord);
    endSet.add(endWord);
    
    int level = 1;
    
    while (!beginSet.isEmpty() && !endSet.isEmpty()) {
        // Always expand the smaller set
        if (beginSet.size() > endSet.size()) {
            Set<String> temp = beginSet;
            beginSet = endSet;
            endSet = temp;
        }
        
        Set<String> nextSet = new HashSet<>();
        
        for (String word : beginSet) {
            char[] chars = word.toCharArray();
            
            for (int i = 0; i < chars.length; i++) {
                char originalChar = chars[i];
                
                for (char c = 'a'; c <= 'z'; c++) {
                    if (c == originalChar) continue;
                    
                    chars[i] = c;
                    String newWord = new String(chars);
                    
                    if (endSet.contains(newWord)) {
                        return level + 1;
                    }
                    
                    if (wordSet.contains(newWord) && !visited.contains(newWord)) {
                        visited.add(newWord);
                        nextSet.add(newWord);
                    }
                }
                
                chars[i] = originalChar;
            }
        }
        
        beginSet = nextSet;
        level++;
    }
    
    return 0;
}
```
**Time**: O(M² × N) where M is word length, N is word count, **Space**: O(M × N)

---

## 📈 Summary

### Key Graph Patterns Mastered:
1. **Graph Traversals** - DFS and BFS with various applications
2. **Cycle Detection** - Undirected (parent tracking) and directed (colors)
3. **Shortest Paths** - Unweighted (BFS), weighted (Dijkstra), negative weights (Bellman-Ford)
4. **Topological Sorting** - DFS and Kahn's algorithm for DAGs
5. **Connectivity** - Union-Find for dynamic connectivity
6. **All Pairs Shortest Paths** - Floyd-Warshall algorithm

### Important Algorithms:
- **DFS Applications** - Connectivity, cycle detection, topological sort
- **BFS Applications** - Shortest paths, level-order processing
- **Dijkstra's Algorithm** - Single-source shortest paths in weighted graphs
- **Bellman-Ford** - Handles negative weights, detects negative cycles
- **Floyd-Warshall** - All pairs shortest paths with path reconstruction

### Common Patterns:
- **Visited Array** - Track processed vertices
- **Parent Tracking** - For path reconstruction
- **Color Coding** - White/Gray/Black for cycle detection in directed graphs
- **Priority Queue** - For Dijkstra's algorithm
- **Union-Find** - For dynamic connectivity and MST

### Performance Considerations:
- **Graph Representation** - Adjacency list vs matrix based on density
- **Space-Time Tradeoffs** - BFS uses more space, DFS more time in worst case
- **Negative Cycles** - Bellman-Ford can detect, Dijkstra cannot handle
- **Dense vs Sparse** - Algorithm choice depends on edge density

### Next Steps:
- Practice more advanced graph problems
- Learn about Minimum Spanning Trees (Kruskal, Prim)
- Study advanced topics (strongly connected components, max flow)
- Move to remaining specialized topics

---
*This completes the major graph algorithms with detailed Java solutions and comprehensive theory explanations.*
