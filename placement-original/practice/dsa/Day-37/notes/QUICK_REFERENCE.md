# 📋 DAY 37 QUICK REFERENCE - Graph Algorithms Cheat Sheet

## 🚀 Core Algorithms (Copy-Paste Ready)

### 1. BFS Template
```java
List<Integer> bfs(List<List<Integer>> graph, int start) {
    List<Integer> result = new ArrayList<>();
    boolean[] visited = new boolean[graph.size()];
    Queue<Integer> queue = new LinkedList<>();
    
    queue.offer(start);
    visited[start] = true;
    
    while (!queue.isEmpty()) {
        int node = queue.poll();
        result.add(node);
        
        for (int neighbor : graph.get(node)) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.offer(neighbor);
            }
        }
    }
    
    return result;
}
```

### 2. DFS Template
```java
List<Integer> dfs(List<List<Integer>> graph, int start) {
    List<Integer> result = new ArrayList<>();
    boolean[] visited = new boolean[graph.size()];
    dfsHelper(graph, start, visited, result);
    return result;
}

void dfsHelper(List<List<Integer>> graph, int node, boolean[] visited, List<Integer> result) {
    visited[node] = true;
    result.add(node);
    
    for (int neighbor : graph.get(node)) {
        if (!visited[neighbor]) {
            dfsHelper(graph, neighbor, visited, result);
        }
    }
}
```

### 3. Union-Find Template
```java
class UnionFind {
    int[] parent, size;
    int components;
    
    UnionFind(int n) {
        parent = new int[n];
        size = new int[n];
        components = n;
        for (int i = 0; i < n; i++) {
            parent[i] = i;
            size[i] = 1;
        }
    }
    
    int find(int x) {
        if (parent[x] != x) {
            parent[x] = find(parent[x]); // Path compression
        }
        return parent[x];
    }
    
    boolean union(int x, int y) {
        int rootX = find(x), rootY = find(y);
        if (rootX == rootY) return false;
        
        // Union by size
        if (size[rootX] < size[rootY]) {
            parent[rootX] = rootY;
            size[rootY] += size[rootX];
        } else {
            parent[rootY] = rootX;
            size[rootX] += size[rootY];
        }
        
        components--;
        return true;
    }
    
    boolean isConnected(int x, int y) {
        return find(x) == find(y);
    }
}
```

### 4. Dijkstra's Algorithm
```java
int[] dijkstra(List<List<int[]>> graph, int start) {
    int n = graph.size();
    int[] dist = new int[n];
    Arrays.fill(dist, Integer.MAX_VALUE);
    dist[start] = 0;
    
    PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[1] - b[1]);
    pq.offer(new int[]{start, 0});
    
    while (!pq.isEmpty()) {
        int[] curr = pq.poll();
        int node = curr[0], d = curr[1];
        
        if (d > dist[node]) continue;
        
        for (int[] edge : graph.get(node)) {
            int next = edge[0], weight = edge[1];
            
            if (dist[node] + weight < dist[next]) {
                dist[next] = dist[node] + weight;
                pq.offer(new int[]{next, dist[next]});
            }
        }
    }
    
    return dist;
}
```

### 5. Topological Sort (Kahn's Algorithm)
```java
List<Integer> topologicalSort(List<List<Integer>> graph) {
    int n = graph.size();
    int[] indegree = new int[n];
    
    for (int i = 0; i < n; i++) {
        for (int neighbor : graph.get(i)) {
            indegree[neighbor]++;
        }
    }
    
    Queue<Integer> queue = new LinkedList<>();
    for (int i = 0; i < n; i++) {
        if (indegree[i] == 0) {
            queue.offer(i);
        }
    }
    
    List<Integer> result = new ArrayList<>();
    
    while (!queue.isEmpty()) {
        int node = queue.poll();
        result.add(node);
        
        for (int neighbor : graph.get(node)) {
            indegree[neighbor]--;
            if (indegree[neighbor] == 0) {
                queue.offer(neighbor);
            }
        }
    }
    
    return result.size() == n ? result : new ArrayList<>();
}
```

### 6. Cycle Detection (Directed Graph)
```java
boolean hasCycleDirected(List<List<Integer>> graph) {
    int n = graph.size();
    int[] color = new int[n]; // 0: white, 1: gray, 2: black
    
    for (int i = 0; i < n; i++) {
        if (color[i] == 0 && dfs(graph, i, color)) {
            return true;
        }
    }
    
    return false;
}

boolean dfs(List<List<Integer>> graph, int node, int[] color) {
    color[node] = 1; // Gray
    
    for (int neighbor : graph.get(node)) {
        if (color[neighbor] == 1) return true; // Back edge
        if (color[neighbor] == 0 && dfs(graph, neighbor, color)) return true;
    }
    
    color[node] = 2; // Black
    return false;
}
```

### 7. Cycle Detection (Undirected Graph)
```java
boolean hasCycleUndirected(List<List<Integer>> graph) {
    int n = graph.size();
    boolean[] visited = new boolean[n];
    
    for (int i = 0; i < n; i++) {
        if (!visited[i] && dfs(graph, i, -1, visited)) {
            return true;
        }
    }
    
    return false;
}

boolean dfs(List<List<Integer>> graph, int node, int parent, boolean[] visited) {
    visited[node] = true;
    
    for (int neighbor : graph.get(node)) {
        if (!visited[neighbor]) {
            if (dfs(graph, neighbor, node, visited)) return true;
        } else if (neighbor != parent) {
            return true; // Back edge
        }
    }
    
    return false;
}
```

---

## 📊 Algorithm Complexity Cheat Sheet

| Algorithm | Time Complexity | Space Complexity | Use Case |
|-----------|----------------|------------------|----------|
| **BFS** | O(V + E) | O(V) | Shortest path (unweighted) |
| **DFS** | O(V + E) | O(V) | Cycle detection, topological sort |
| **Union-Find** | O(α(N)) | O(N) | Connected components, MST |
| **Dijkstra** | O((V+E) log V) | O(V) | Shortest path (positive weights) |
| **Bellman-Ford** | O(V × E) | O(V) | Shortest path (negative weights) |
| **Floyd-Warshall** | O(V³) | O(V²) | All-pairs shortest path |
| **Kruskal MST** | O(E log E) | O(V) | Minimum spanning tree |
| **Prim MST** | O((V+E) log V) | O(V) | Minimum spanning tree (dense) |
| **Topological Sort** | O(V + E) | O(V) | DAG ordering |
| **Kosaraju SCC** | O(V + E) | O(V) | Strongly connected components |

---

## 🎯 Problem Pattern Recognition

### Pattern 1: Shortest Path Problems
**Keywords:** minimum steps, shortest distance, fewest moves

**Template:**
```java
int bfsShortestPath(int start, int target, List<List<Integer>> graph) {
    Queue<Integer> queue = new LinkedList<>();
    boolean[] visited = new boolean[graph.size()];
    
    queue.offer(start);
    visited[start] = true;
    int steps = 0;
    
    while (!queue.isEmpty()) {
        int size = queue.size();
        for (int i = 0; i < size; i++) {
            int node = queue.poll();
            if (node == target) return steps;
            
            for (int neighbor : graph.get(node)) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.offer(neighbor);
                }
            }
        }
        steps++;
    }
    
    return -1;
}
```

### Pattern 2: Connected Components
**Keywords:** number of islands, friend circles, connected groups

**Template:**
```java
int countComponents(int n, int[][] edges) {
    UnionFind uf = new UnionFind(n);
    
    for (int[] edge : edges) {
        uf.union(edge[0], edge[1]);
    }
    
    return uf.components;
}
```

### Pattern 3: Cycle Detection
**Keywords:** detect cycle, circular dependency, deadlock

**Template:** See Cycle Detection templates above

### Pattern 4: Dependency Resolution
**Keywords:** prerequisites, course schedule, build order

**Template:** See Topological Sort template above

### Pattern 5: Minimum Spanning Tree
**Keywords:** connect all nodes, minimum cost, spanning tree

**Template:**
```java
int kruskalMST(int n, int[][] edges) {
    Arrays.sort(edges, (a, b) -> a[2] - b[2]); // Sort by weight
    UnionFind uf = new UnionFind(n);
    
    int totalCost = 0;
    int edgesUsed = 0;
    
    for (int[] edge : edges) {
        if (uf.union(edge[0], edge[1])) {
            totalCost += edge[2];
            edgesUsed++;
            if (edgesUsed == n - 1) break;
        }
    }
    
    return edgesUsed == n - 1 ? totalCost : -1;
}
```

---

## 🔥 Top 10 Must-Know Problems

| Rank | Problem | Pattern | Difficulty | Key Concept |
|------|---------|---------|------------|-------------|
| 1 | Number of Islands | DFS/BFS | Medium | Grid traversal |
| 2 | Course Schedule | Topological Sort | Medium | Cycle detection |
| 3 | Network Delay Time | Dijkstra | Medium | Shortest path |
| 4 | Word Ladder | BFS | Hard | Shortest transformation |
| 5 | Accounts Merge | Union-Find | Medium | Connected components |
| 6 | Is Graph Bipartite | BFS/DFS | Medium | 2-coloring |
| 7 | Graph Valid Tree | Union-Find | Medium | Tree validation |
| 8 | Critical Connections | Tarjan | Hard | Bridges in graph |
| 9 | Swim in Rising Water | Modified Dijkstra | Hard | Bottleneck path |
| 10 | Evaluate Division | DFS | Medium | Weighted graph |

---

## 💡 Common Tricks & Tips

### Trick 1: Bidirectional BFS
For shortest path problems, start BFS from both source and target. Reduces search space from O(b^d) to O(b^(d/2)).

```java
int bidirectionalBFS(int start, int end, List<List<Integer>> graph) {
    Set<Integer> forward = new HashSet<>();
    Set<Integer> backward = new HashSet<>();
    forward.add(start);
    backward.add(end);
    
    int level = 0;
    
    while (!forward.isEmpty() && !backward.isEmpty()) {
        if (forward.size() > backward.size()) {
            Set<Integer> temp = forward;
            forward = backward;
            backward = temp;
        }
        
        Set<Integer> next = new HashSet<>();
        for (int node : forward) {
            if (backward.contains(node)) return level;
            
            for (int neighbor : graph.get(node)) {
                next.add(neighbor);
            }
        }
        forward = next;
        level++;
    }
    
    return -1;
}
```

### Trick 2: Graph as HashMap
For sparse graphs or when node IDs are strings:

```java
Map<String, List<String>> graph = new HashMap<>();

// Add edge
graph.computeIfAbsent(u, k -> new ArrayList<>()).add(v);

// Get neighbors
List<String> neighbors = graph.getOrDefault(node, new ArrayList<>());
```

### Trick 3: Multi-Source BFS
For problems with multiple starting points:

```java
int multiSourceBFS(int[][] grid, int target) {
    Queue<int[]> queue = new LinkedList<>();
    
    // Add all sources
    for (int i = 0; i < grid.length; i++) {
        for (int j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == target) {
                queue.offer(new int[]{i, j});
            }
        }
    }
    
    int level = 0;
    // Continue with standard BFS...
}
```

### Trick 4: Path Reconstruction
Store parent pointers to reconstruct path:

```java
Map<Integer, Integer> parent = new HashMap<>();

// During BFS/DFS
parent.put(neighbor, current);

// Reconstruct path
List<Integer> path = new ArrayList<>();
int node = target;
while (node != start) {
    path.add(node);
    node = parent.get(node);
}
path.add(start);
Collections.reverse(path);
```

---

## 🎯 Interview Cheat Sheet

### When to Use What?

**BFS:**
- Shortest path in unweighted graph
- Level-order traversal
- Finding all nodes at distance K

**DFS:**
- Detecting cycles
- Path finding with backtracking
- Topological sort
- Connected components

**Union-Find:**
- Dynamic connectivity
- Kruskal's MST
- Detecting cycles in undirected graph
- Connected components with online updates

**Dijkstra:**
- Shortest path with positive weights
- Single source to all destinations
- Network routing

**Topological Sort:**
- Task scheduling
- Build systems
- Course prerequisites
- Dependency resolution

### Common Edge Cases
```java
// Empty graph
if (graph == null || graph.isEmpty()) return result;

// Single node
if (graph.size() == 1) return result;

// Disconnected graph
// Use multiple DFS/BFS starting points

// Self-loops
if (node == neighbor) continue;

// Duplicate edges (in adjacency list)
// Use Set instead of List
```

---

## 📚 Quick Code Snippets

### Building Graph from Edges
```java
// Directed graph
List<List<Integer>> buildDirectedGraph(int n, int[][] edges) {
    List<List<Integer>> graph = new ArrayList<>();
    for (int i = 0; i < n; i++) {
        graph.add(new ArrayList<>());
    }
    for (int[] edge : edges) {
        graph.get(edge[0]).add(edge[1]);
    }
    return graph;
}

// Undirected graph
List<List<Integer>> buildUndirectedGraph(int n, int[][] edges) {
    List<List<Integer>> graph = new ArrayList<>();
    for (int i = 0; i < n; i++) {
        graph.add(new ArrayList<>());
    }
    for (int[] edge : edges) {
        graph.get(edge[0]).add(edge[1]);
        graph.get(edge[1]).add(edge[0]);
    }
    return graph;
}

// Weighted graph
List<List<int[]>> buildWeightedGraph(int n, int[][] edges) {
    List<List<int[]>> graph = new ArrayList<>();
    for (int i = 0; i < n; i++) {
        graph.add(new ArrayList<>());
    }
    for (int[] edge : edges) {
        graph.get(edge[0]).add(new int[]{edge[1], edge[2]}); // [neighbor, weight]
    }
    return graph;
}
```

### Grid Traversal
```java
int[][] dirs = {{-1,0},{1,0},{0,-1},{0,1}}; // 4 directions

boolean isValid(int r, int c, int rows, int cols) {
    return r >= 0 && r < rows && c >= 0 && c < cols;
}

void dfsGrid(int[][] grid, int r, int c, boolean[][] visited) {
    visited[r][c] = true;
    
    for (int[] dir : dirs) {
        int nr = r + dir[0], nc = c + dir[1];
        if (isValid(nr, nc, grid.length, grid[0].length) && !visited[nr][nc]) {
            dfsGrid(grid, nr, nc, visited);
        }
    }
}
```

---

**Last Updated:** Day 37  
**Total Algorithms:** 15+  
**Total Patterns:** 10+  
**Use:** Print and keep handy during coding interviews!

