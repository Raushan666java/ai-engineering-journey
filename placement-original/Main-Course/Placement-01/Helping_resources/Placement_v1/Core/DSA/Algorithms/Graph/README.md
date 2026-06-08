# Graph Algorithms

## Overview
Graph algorithms are used to solve problems related to graph data structures, which consist of vertices (nodes) and edges connecting these vertices. These algorithms are fundamental to many applications including social networks, routing, and network analysis.

## Graph Representations

### 1. Adjacency Matrix
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
}
```

**Time Complexity**: O(1) for edge operations, O(V²) for space  
**Best for**: Dense graphs, small graphs

### 2. Adjacency List
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
}
```

**Time Complexity**: O(1) for adding edges, O(V+E) for space  
**Best for**: Sparse graphs, large graphs

## Algorithms

### 1. Depth-First Search (DFS)
**Description**: Explores as far as possible along each branch before backtracking.

**Implementation**:
```java
public void dfs(List<List<Integer>> adjList, int start) {
    boolean[] visited = new boolean[adjList.size()];
    dfsUtil(adjList, start, visited);
}

private void dfsUtil(List<List<Integer>> adjList, int vertex, boolean[] visited) {
    visited[vertex] = true;
    System.out.print(vertex + " ");
    
    for (int neighbor : adjList.get(vertex)) {
        if (!visited[neighbor]) {
            dfsUtil(adjList, neighbor, visited);
        }
    }
}
```

**Time Complexity**: O(V + E)  
**Space Complexity**: O(V)  
**Applications**: Topological sorting, cycle detection, path finding, connected components

### 2. Breadth-First Search (BFS)
**Description**: Explores all neighbors at the present depth before moving to vertices at the next depth level.

**Implementation**:
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

**Time Complexity**: O(V + E)  
**Space Complexity**: O(V)  
**Applications**: Shortest path in unweighted graphs, level order traversal, connected components

### 3. Dijkstra's Algorithm
**Description**: Finds the shortest path from a source vertex to all other vertices in a weighted graph with non-negative edge weights.

**Implementation**:
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

**Time Complexity**: O((V + E) log V)  
**Space Complexity**: O(V + E)  
**Applications**: Shortest path with non-negative weights, network routing, GPS navigation

### 4. Bellman-Ford Algorithm
**Description**: Finds the shortest path from a source vertex to all other vertices, even with negative edge weights (but no negative cycles).

**Implementation**:
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
**Applications**: Shortest path with negative weights, arbitrage detection, network routing

### 5. Floyd-Warshall Algorithm
**Description**: Finds the shortest paths between all pairs of vertices in a weighted graph.

**Implementation**:
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
**Applications**: All-pairs shortest paths, transitive closure, detecting negative cycles

### 6. Kruskal's Algorithm
**Description**: Finds a minimum spanning tree for a connected weighted graph.

**Implementation**:
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
**Applications**: Minimum spanning tree, network design, clustering

### 7. Prim's Algorithm
**Description**: Finds a minimum spanning tree for a connected weighted graph.

**Implementation**:
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
**Applications**: Minimum spanning tree, network design, clustering

### 8. Topological Sort
**Description**: Finds a linear ordering of vertices such that for every directed edge (u, v), vertex u comes before v in the ordering.

**Implementation**:
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
**Applications**: Task scheduling, dependency resolution, course prerequisites

## Problem-Solving Patterns

### 1. Graph Traversal
- **Connected Components**: Use DFS or BFS to find connected components in an undirected graph.
  ```java
  public int countComponents(int n, int[][] edges) {
      List<List<Integer>> adjList = new ArrayList<>();
      for (int i = 0; i < n; i++) {
          adjList.add(new ArrayList<>());
      }
      
      for (int[] edge : edges) {
          adjList.get(edge[0]).add(edge[1]);
          adjList.get(edge[1]).add(edge[0]);
      }
      
      boolean[] visited = new boolean[n];
      int count = 0;
      
      for (int i = 0; i < n; i++) {
          if (!visited[i]) {
              dfs(adjList, i, visited);
              count++;
          }
      }
      
      return count;
  }
  
  private void dfs(List<List<Integer>> adjList, int v, boolean[] visited) {
      visited[v] = true;
      
      for (int neighbor : adjList.get(v)) {
          if (!visited[neighbor]) {
              dfs(adjList, neighbor, visited);
          }
      }
  }
  ```

- **Bipartite Graph**: Check if a graph can be divided into two sets such that no two adjacent vertices belong to the same set.
  ```java
  public boolean isBipartite(int[][] graph) {
      int n = graph.length;
      int[] colors = new int[n]; // 0: uncolored, 1: color A, -1: color B
      
      for (int i = 0; i < n; i++) {
          if (colors[i] == 0 && !dfs(graph, colors, i, 1)) {
              return false;
          }
      }
      
      return true;
  }
  
  private boolean dfs(int[][] graph, int[] colors, int node, int color) {
      colors[node] = color;
      
      for (int neighbor : graph[node]) {
          if (colors[neighbor] == color) {
              return false;
          }
          
          if (colors[neighbor] == 0 && !dfs(graph, colors, neighbor, -color)) {
              return false;
          }
      }
      
      return true;
  }
  ```

### 2. Shortest Path
- **Single-Source Shortest Path**: Use Dijkstra's algorithm for non-negative weights or Bellman-Ford for graphs with negative weights.
- **All-Pairs Shortest Path**: Use Floyd-Warshall algorithm.

### 3. Minimum Spanning Tree
- **Kruskal's Algorithm**: Sort edges by weight and add them to the MST if they don't create a cycle.
- **Prim's Algorithm**: Start from a vertex and add the minimum weight edge that connects a visited vertex to an unvisited vertex.

### 4. Cycle Detection
- **Directed Graph**: Use DFS with a recursion stack.
  ```java
  public boolean hasCycle(List<List<Integer>> adjList) {
      int n = adjList.size();
      boolean[] visited = new boolean[n];
      boolean[] recStack = new boolean[n];
      
      for (int i = 0; i < n; i++) {
          if (dfs(adjList, i, visited, recStack)) {
              return true;
          }
      }
      
      return false;
  }
  
  private boolean dfs(List<List<Integer>> adjList, int v, boolean[] visited, boolean[] recStack) {
      if (recStack[v]) {
          return true; // Cycle detected
      }
      
      if (visited[v]) {
          return false; // Already processed
      }
      
      visited[v] = true;
      recStack[v] = true;
      
      for (int neighbor : adjList.get(v)) {
          if (dfs(adjList, neighbor, visited, recStack)) {
              return true;
          }
      }
      
      recStack[v] = false; // Remove from recursion stack
      return false;
  }
  ```

- **Undirected Graph**: Use DFS with a parent pointer or Union-Find.
  ```java
  public boolean hasCycle(List<List<Integer>> adjList) {
      int n = adjList.size();
      boolean[] visited = new boolean[n];
      
      for (int i = 0; i < n; i++) {
          if (!visited[i] && dfs(adjList, i, visited, -1)) {
              return true;
          }
      }
      
      return false;
  }
  
  private boolean dfs(List<List<Integer>> adjList, int v, boolean[] visited, int parent) {
      visited[v] = true;
      
      for (int neighbor : adjList.get(v)) {
          if (!visited[neighbor]) {
              if (dfs(adjList, neighbor, visited, v)) {
                  return true;
              }
          } else if (neighbor != parent) {
              return true; // Cycle detected
          }
      }
      
      return false;
  }
  ```

### 5. Strongly Connected Components
- **Kosaraju's Algorithm**: Perform DFS, store vertices in order of finish time, transpose the graph, and perform DFS again.
- **Tarjan's Algorithm**: Find SCCs in a single DFS pass.

## When to Use Each Algorithm

| Algorithm | Time Complexity | Space Complexity | Best Used When |
|-----------|----------------|-----------------|---------------|
| DFS | O(V + E) | O(V) | Exploring all paths, cycle detection, topological sort |
| BFS | O(V + E) | O(V) | Shortest path in unweighted graphs, level order traversal |
| Dijkstra's | O((V + E) log V) | O(V + E) | Shortest path with non-negative weights |
| Bellman-Ford | O(V * E) | O(V) | Shortest path with negative weights |
| Floyd-Warshall | O(V³) | O(V²) | All-pairs shortest paths |
| Kruskal's | O(E log E) | O(V + E) | Minimum spanning tree |
| Prim's | O(E log V) | O(V + E) | Minimum spanning tree |
| Topological Sort | O(V + E) | O(V) | Dependency resolution, scheduling |

## Practice Problems

1. [Number of Islands](https://leetcode.com/problems/number-of-islands/)
2. [Course Schedule](https://leetcode.com/problems/course-schedule/)
3. [Network Delay Time](https://leetcode.com/problems/network-delay-time/)
4. [Redundant Connection](https://leetcode.com/problems/redundant-connection/)
5. [Is Graph Bipartite?](https://leetcode.com/problems/is-graph-bipartite/)
6. [Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/)
7. [Critical Connections in a Network](https://leetcode.com/problems/critical-connections-in-a-network/)
8. [Alien Dictionary](https://leetcode.com/problems/alien-dictionary/)
9. [Reconstruct Itinerary](https://leetcode.com/problems/reconstruct-itinerary/)
10. [Word Ladder](https://leetcode.com/problems/word-ladder/)