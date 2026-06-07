# Graph Practice Questions

## Easy Level Questions

### 1. Number of Islands
**Problem:** Given a 2D grid of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.

**Example:**
```
Input:
[
  ['1','1','0','0','0'],
  ['1','1','0','0','0'],
  ['0','0','1','0','0'],
  ['0','0','0','1','1']
]
Output: 3
```

**Approach:**
1. Use DFS to explore each island
2. When we find a '1', increment the island count and use DFS to mark all connected '1's as visited
3. Continue until we've explored the entire grid

**Solution:**
```java
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

**Time Complexity:** O(m×n) where m is the number of rows and n is the number of columns  
**Space Complexity:** O(m×n) in the worst case for the recursion stack

### 2. Find the Town Judge
**Problem:** In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge. The town judge trusts nobody and everybody (except for the town judge) trusts the town judge. You are given an array `trust` where `trust[i] = [a, b]` representing that the person labeled a trusts the person labeled b. Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.

**Example:**
```
Input: n = 3, trust = [[1,3],[2,3]]
Output: 3

Input: n = 3, trust = [[1,3],[2,3],[3,1]]
Output: -1
```

**Approach:**
1. Use an array to track the net trust score for each person
2. Increment the score when someone is trusted
3. Decrement the score when someone trusts others
4. The town judge should have a net score of n-1

**Solution:**
```java
public int findJudge(int n, int[][] trust) {
    int[] trustScore = new int[n + 1];
    
    for (int[] relation : trust) {
        trustScore[relation[0]]--; // Person trusts someone
        trustScore[relation[1]]++; // Person is trusted
    }
    
    for (int i = 1; i <= n; i++) {
        if (trustScore[i] == n - 1) {
            return i;
        }
    }
    
    return -1;
}
```

**Time Complexity:** O(E) where E is the number of trust relationships  
**Space Complexity:** O(n) for the trust score array

### 3. Find if Path Exists in Graph
**Problem:** There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1. The edges in the graph are represented as a 2D integer array `edges`, where each `edges[i] = [ui, vi]` denotes an edge between vertex ui and vertex vi. Every vertex pair is connected by at most one edge, and no vertex has an edge to itself. You want to determine if there is a valid path that exists from vertex `source` to vertex `destination`.

**Example:**
```
Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
Output: true
Explanation: There are two paths from 0 to 2: 0 → 1 → 2 and 0 → 2
```

**Approach:**
1. Build an adjacency list representation of the graph
2. Use BFS or DFS to check if there is a path from source to destination

**Solution:**
```java
public boolean validPath(int n, int[][] edges, int source, int destination) {
    // Build adjacency list
    List<List<Integer>> adjList = new ArrayList<>();
    for (int i = 0; i < n; i++) {
        adjList.add(new ArrayList<>());
    }
    
    for (int[] edge : edges) {
        adjList.get(edge[0]).add(edge[1]);
        adjList.get(edge[1]).add(edge[0]); // Undirected graph
    }
    
    // BFS
    boolean[] visited = new boolean[n];
    Queue<Integer> queue = new LinkedList<>();
    queue.offer(source);
    visited[source] = true;
    
    while (!queue.isEmpty()) {
        int current = queue.poll();
        
        if (current == destination) {
            return true;
        }
        
        for (int neighbor : adjList.get(current)) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.offer(neighbor);
            }
        }
    }
    
    return false;
}
```

**Time Complexity:** O(V + E) where V is the number of vertices and E is the number of edges  
**Space Complexity:** O(V + E) for the adjacency list and visited array

## Medium Level Questions

### 4. Course Schedule
**Problem:** There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai. Return true if you can finish all courses. Otherwise, return false.

**Example:**
```
Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are 2 courses to take. To take course 1 you should have finished course 0. So it is possible.

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are 2 courses to take. To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
```

**Approach:**
1. This is a cycle detection problem in a directed graph
2. Build an adjacency list representation of the graph
3. Use DFS with a visited array and a recursion stack to detect cycles
4. If a cycle is found, return false; otherwise, return true

**Solution:**
```java
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

**Time Complexity:** O(V + E) where V is the number of vertices and E is the number of edges  
**Space Complexity:** O(V + E) for the adjacency list and visited array

### 5. Network Delay Time
**Problem:** You are given a network of n nodes, labeled from 1 to n. You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target. We will send a signal from a given node k. Return the time it takes for all the n nodes to receive the signal. If it is impossible for all the n nodes to receive the signal, return -1.

**Example:**
```
Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
Output: 2
```

**Approach:**
1. Use Dijkstra's algorithm to find the shortest path from the source node to all other nodes
2. The time it takes for all nodes to receive the signal is the maximum time among all nodes
3. If any node is unreachable, return -1

**Solution:**
```java
public int networkDelayTime(int[][] times, int n, int k) {
    // Build adjacency list
    List<List<int[]>> adjList = new ArrayList<>();
    for (int i = 0; i <= n; i++) {
        adjList.add(new ArrayList<>());
    }
    
    for (int[] time : times) {
        int source = time[0], target = time[1], weight = time[2];
        adjList.get(source).add(new int[]{target, weight});
    }
    
    // Dijkstra's algorithm
    int[] dist = new int[n + 1];
    Arrays.fill(dist, Integer.MAX_VALUE);
    dist[k] = 0;
    
    PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[1] - b[1]); // [node, distance]
    pq.offer(new int[]{k, 0});
    
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
    
    int maxTime = 0;
    for (int i = 1; i <= n; i++) {
        if (dist[i] == Integer.MAX_VALUE) return -1; // Unreachable node
        maxTime = Math.max(maxTime, dist[i]);
    }
    
    return maxTime;
}
```

**Time Complexity:** O((V + E) log V) where V is the number of vertices and E is the number of edges  
**Space Complexity:** O(V + E) for the adjacency list and priority queue

### 6. Redundant Connection
**Problem:** In this problem, a tree is an undirected graph that is connected and has no cycles. You are given a graph that started as a tree with n nodes labeled from 1 to n, with one additional edge added. The added edge has two different vertices chosen from 1 to n, and was not an edge that already existed. The graph is represented as an array edges of length n where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the graph. Return an edge that can be removed so that the resulting graph is a tree of n nodes. If there are multiple answers, return the answer that occurs last in the input.

**Example:**
```
Input: edges = [[1,2],[1,3],[2,3]]
Output: [2,3]
```

**Approach:**
1. Use Union-Find (Disjoint Set) to detect the cycle
2. Process edges one by one and check if adding an edge creates a cycle
3. If a cycle is detected, that edge is the redundant connection

**Solution:**
```java
public int[] findRedundantConnection(int[][] edges) {
    int n = edges.length;
    int[] parent = new int[n + 1];
    
    // Initialize parent array
    for (int i = 1; i <= n; i++) {
        parent[i] = i;
    }
    
    for (int[] edge : edges) {
        int u = edge[0], v = edge[1];
        
        if (find(parent, u) == find(parent, v)) {
            return edge; // Cycle detected
        }
        
        union(parent, u, v);
    }
    
    return new int[0]; // No redundant connection found
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

**Time Complexity:** O(n) where n is the number of edges  
**Space Complexity:** O(n) for the parent array

## Hard Level Questions

### 7. Alien Dictionary
**Problem:** There is a new alien language that uses the English alphabet. However, the order of the letters is unknown to you. You are given a list of strings words from the alien language's dictionary, where the strings in words are sorted lexicographically by the rules of this new language. Return a string of the unique letters in the new alien language sorted in lexicographically increasing order by the new language's rules. If there is no solution, return "". If there are multiple solutions, return any of them.

**Example:**
```
Input: words = ["wrt","wrf","er","ett","rftt"]
Output: "wertf"
```

**Approach:**
1. Build a graph where each node is a character and each edge represents the relative order between characters
2. Perform a topological sort on the graph
3. If there is a cycle, return an empty string
4. Otherwise, return the topological order

**Solution:**
```java
public String alienOrder(String[] words) {
    // Build adjacency list
    Map<Character, Set<Character>> adjList = new HashMap<>();
    Map<Character, Integer> inDegree = new HashMap<>();
    
    // Initialize maps with all characters
    for (String word : words) {
        for (char c : word.toCharArray()) {
            adjList.putIfAbsent(c, new HashSet<>());
            inDegree.putIfAbsent(c, 0);
        }
    }
    
    // Build graph
    for (int i = 0; i < words.length - 1; i++) {
        String word1 = words[i];
        String word2 = words[i + 1];
        
        // Check for invalid order
        if (word1.length() > word2.length() && word1.startsWith(word2)) {
            return "";
        }
        
        // Find the first different character
        int minLength = Math.min(word1.length(), word2.length());
        for (int j = 0; j < minLength; j++) {
            char c1 = word1.charAt(j);
            char c2 = word2.charAt(j);
            
            if (c1 != c2) {
                if (!adjList.get(c1).contains(c2)) {
                    adjList.get(c1).add(c2);
                    inDegree.put(c2, inDegree.get(c2) + 1);
                }
                break;
            }
        }
    }
    
    // Topological sort using BFS
    StringBuilder result = new StringBuilder();
    Queue<Character> queue = new LinkedList<>();
    
    // Add characters with 0 in-degree to the queue
    for (char c : inDegree.keySet()) {
        if (inDegree.get(c) == 0) {
            queue.offer(c);
        }
    }
    
    while (!queue.isEmpty()) {
        char c = queue.poll();
        result.append(c);
        
        for (char neighbor : adjList.get(c)) {
            inDegree.put(neighbor, inDegree.get(neighbor) - 1);
            if (inDegree.get(neighbor) == 0) {
                queue.offer(neighbor);
            }
        }
    }
    
    // Check if all characters are included
    if (result.length() != inDegree.size()) {
        return ""; // Cycle detected
    }
    
    return result.toString();
}
```

**Time Complexity:** O(C) where C is the total length of all words  
**Space Complexity:** O(1) since there are at most 26 letters

### 8. Critical Connections in a Network
**Problem:** There are n servers numbered from 0 to n - 1 connected by undirected server-to-server connections forming a network where connections[i] = [ai, bi] represents a connection between servers ai and bi. Any server can reach other servers directly or indirectly through the network. A critical connection is a connection that, if removed, will make some servers unable to reach some other server. Return all critical connections in the network in any order.

**Example:**
```
Input: n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]
Output: [[1,3]]
Explanation: The connection between 1 and 3 is a critical connection.
```

**Approach:**
1. Use Tarjan's algorithm to find bridges in the graph
2. A bridge is an edge that, if removed, increases the number of connected components
3. These bridges are the critical connections

**Solution:**
```java
public List<List<Integer>> criticalConnections(int n, List<List<Integer>> connections) {
    // Build adjacency list
    List<List<Integer>> adjList = new ArrayList<>();
    for (int i = 0; i < n; i++) {
        adjList.add(new ArrayList<>());
    }
    
    for (List<Integer> connection : connections) {
        int u = connection.get(0), v = connection.get(1);
        adjList.get(u).add(v);
        adjList.get(v).add(u);
    }
    
    // Tarjan's algorithm
    List<List<Integer>> result = new ArrayList<>();
    int[] disc = new int[n]; // Discovery time
    int[] low = new int[n];  // Earliest visited vertex
    Arrays.fill(disc, -1);   // -1 means not visited
    
    for (int i = 0; i < n; i++) {
        if (disc[i] == -1) {
            dfs(adjList, i, -1, 0, disc, low, result);
        }
    }
    
    return result;
}

private void dfs(List<List<Integer>> adjList, int u, int parent, int time, int[] disc, int[] low, List<List<Integer>> result) {
    disc[u] = low[u] = time++;
    
    for (int v : adjList.get(u)) {
        if (v == parent) continue; // Skip parent
        
        if (disc[v] == -1) { // If v is not visited
            dfs(adjList, v, u, time, disc, low, result);
            
            low[u] = Math.min(low[u], low[v]);
            
            // If the lowest vertex reachable from v is below v in the DFS tree,
            // then u-v is a bridge
            if (low[v] > disc[u]) {
                result.add(Arrays.asList(u, v));
            }
        } else {
            // Update low value of u for parent function calls
            low[u] = Math.min(low[u], disc[v]);
        }
    }
}
```

**Time Complexity:** O(V + E) where V is the number of vertices and E is the number of edges  
**Space Complexity:** O(V + E) for the adjacency list and recursion stack

### 9. Reconstruct Itinerary
**Problem:** You are given a list of airline tickets where tickets[i] = [fromi, toi] represent the departure and the arrival airports of one flight. Reconstruct the itinerary in order and return it. All of the tickets belong to a man who departs from "JFK", thus, the itinerary must begin with "JFK". If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string. For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"]. You may assume all tickets form at least one valid itinerary. You must use all the tickets once and only once.

**Example:**
```
Input: tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]
Output: ["JFK","MUC","LHR","SFO","SJC"]
```

**Approach:**
1. Build a graph where each node is an airport and each edge is a flight
2. Sort the destinations in lexical order
3. Use DFS with backtracking to find the Eulerian path
4. Start the DFS from "JFK"

**Solution:**
```java
public List<String> findItinerary(List<List<String>> tickets) {
    // Build adjacency list
    Map<String, PriorityQueue<String>> adjList = new HashMap<>();
    
    for (List<String> ticket : tickets) {
        String from = ticket.get(0), to = ticket.get(1);
        adjList.putIfAbsent(from, new PriorityQueue<>());
        adjList.get(from).offer(to);
    }
    
    LinkedList<String> result = new LinkedList<>();
    dfs("JFK", adjList, result);
    
    return result;
}

private void dfs(String airport, Map<String, PriorityQueue<String>> adjList, LinkedList<String> result) {
    PriorityQueue<String> destinations = adjList.get(airport);
    
    while (destinations != null && !destinations.isEmpty()) {
        dfs(destinations.poll(), adjList, result);
    }
    
    result.addFirst(airport); // Add in reverse order
}
```

**Time Complexity:** O(E log E) where E is the number of edges (tickets)  
**Space Complexity:** O(V + E) where V is the number of vertices (airports)

## Learning Strategy for Graph Problems

1. **Master the basics**: Graph representations, DFS, BFS
2. **Understand common patterns**:
   - DFS for exploring all paths, cycle detection
   - BFS for shortest path in unweighted graphs
   - Dijkstra's for shortest path in weighted graphs
   - Union-Find for connected components and cycle detection
   - Topological sort for dependency problems
3. **Practice by category**:
   - Traversal problems
   - Shortest path problems
   - Cycle detection problems
   - Connected components problems
4. **Analyze solutions**: Understand time and space complexity
5. **Implement from scratch**: Don't memorize solutions, understand the approach

## Additional Resources

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