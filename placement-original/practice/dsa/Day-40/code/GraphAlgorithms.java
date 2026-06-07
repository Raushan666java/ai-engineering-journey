package day40.fundamentals;

import java.util.*;

/**
 * Day 40: Fundamental Graph Algorithms
 * 
 * Core Algorithms:
 * 1. Dijkstra's Shortest Path (Single Source)
 * 2. Bellman-Ford Algorithm (Handles Negative Weights)
 * 3. Floyd-Warshall (All Pairs Shortest Path)
 * 4. Prim's MST (Minimum Spanning Tree)
 * 5. Kruskal's MST with Union-Find
 * 6. Topological Sort (DFS and Kahn's Algorithm)
 * 7. Strongly Connected Components (Tarjan's and Kosaraju's)
 * 8. Union-Find (Disjoint Set Union with Path Compression)
 * 
 * Each algorithm includes multiple implementations and optimizations
 */
public class GraphAlgorithms {
    
    // ==================== GRAPH REPRESENTATION ====================
    
    /**
     * Edge class for weighted graphs
     */
    public static class Edge implements Comparable<Edge> {
        int src, dest, weight;
        
        public Edge(int src, int dest, int weight) {
            this.src = src;
            this.dest = dest;
            this.weight = weight;
        }
        
        @Override
        public int compareTo(Edge other) {
            return this.weight - other.weight;
        }
        
        @Override
        public String toString() {
            return "(" + src + " -> " + dest + ", w=" + weight + ")";
        }
    }
    
    /**
     * Node class for priority queue in Dijkstra
     */
    static class Node implements Comparable<Node> {
        int vertex, distance;
        
        Node(int vertex, int distance) {
            this.vertex = vertex;
            this.distance = distance;
        }
        
        @Override
        public int compareTo(Node other) {
            return this.distance - other.distance;
        }
    }
    
    // ==================== 1. DIJKSTRA'S ALGORITHM ====================
    
    /**
     * Dijkstra's Single Source Shortest Path
     * 
     * Time: O((V + E) log V) with priority queue
     * Space: O(V)
     * 
     * Limitations: Cannot handle negative edge weights
     * 
     * @param graph Adjacency list representation
     * @param src Source vertex
     * @param V Number of vertices
     * @return Array of shortest distances from src
     */
    public static int[] dijkstra(List<List<Edge>> graph, int src, int V) {
        int[] dist = new int[V];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[src] = 0;
        
        PriorityQueue<Node> pq = new PriorityQueue<>();
        pq.offer(new Node(src, 0));
        
        boolean[] visited = new boolean[V];
        
        while (!pq.isEmpty()) {
            Node current = pq.poll();
            int u = current.vertex;
            
            if (visited[u]) continue;
            visited[u] = true;
            
            // Relax all adjacent edges
            for (Edge edge : graph.get(u)) {
                int v = edge.dest;
                int weight = edge.weight;
                
                if (!visited[v] && dist[u] != Integer.MAX_VALUE && 
                    dist[u] + weight < dist[v]) {
                    dist[v] = dist[u] + weight;
                    pq.offer(new Node(v, dist[v]));
                }
            }
        }
        
        return dist;
    }
    
    /**
     * Dijkstra with path reconstruction
     * 
     * @return Map containing distances and parent pointers
     */
    public static Map<String, Object> dijkstraWithPath(List<List<Edge>> graph, int src, int V) {
        int[] dist = new int[V];
        int[] parent = new int[V];
        Arrays.fill(dist, Integer.MAX_VALUE);
        Arrays.fill(parent, -1);
        dist[src] = 0;
        
        PriorityQueue<Node> pq = new PriorityQueue<>();
        pq.offer(new Node(src, 0));
        boolean[] visited = new boolean[V];
        
        while (!pq.isEmpty()) {
            Node current = pq.poll();
            int u = current.vertex;
            
            if (visited[u]) continue;
            visited[u] = true;
            
            for (Edge edge : graph.get(u)) {
                int v = edge.dest;
                int weight = edge.weight;
                
                if (!visited[v] && dist[u] != Integer.MAX_VALUE && 
                    dist[u] + weight < dist[v]) {
                    dist[v] = dist[u] + weight;
                    parent[v] = u;
                    pq.offer(new Node(v, dist[v]));
                }
            }
        }
        
        Map<String, Object> result = new HashMap<>();
        result.put("distances", dist);
        result.put("parents", parent);
        return result;
    }
    
    /**
     * Reconstruct path from source to destination
     */
    public static List<Integer> reconstructPath(int[] parent, int src, int dest) {
        if (parent[dest] == -1 && dest != src) {
            return new ArrayList<>();  // No path exists
        }
        
        List<Integer> path = new ArrayList<>();
        int current = dest;
        
        while (current != -1) {
            path.add(current);
            if (current == src) break;
            current = parent[current];
        }
        
        Collections.reverse(path);
        return path;
    }
    
    // ==================== 2. BELLMAN-FORD ALGORITHM ====================
    
    /**
     * Bellman-Ford Algorithm - Handles Negative Weights
     * 
     * Time: O(V × E)
     * Space: O(V)
     * 
     * Can detect negative cycles
     * 
     * @param edges List of all edges
     * @param V Number of vertices
     * @param src Source vertex
     * @return Distances array (null if negative cycle exists)
     */
    public static int[] bellmanFord(List<Edge> edges, int V, int src) {
        int[] dist = new int[V];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[src] = 0;
        
        // Relax all edges V-1 times
        for (int i = 0; i < V - 1; i++) {
            for (Edge edge : edges) {
                int u = edge.src;
                int v = edge.dest;
                int weight = edge.weight;
                
                if (dist[u] != Integer.MAX_VALUE && dist[u] + weight < dist[v]) {
                    dist[v] = dist[u] + weight;
                }
            }
        }
        
        // Check for negative cycles
        for (Edge edge : edges) {
            int u = edge.src;
            int v = edge.dest;
            int weight = edge.weight;
            
            if (dist[u] != Integer.MAX_VALUE && dist[u] + weight < dist[v]) {
                return null;  // Negative cycle detected
            }
        }
        
        return dist;
    }
    
    /**
     * Bellman-Ford with negative cycle detection
     * 
     * @return Map with distances and cycle flag
     */
    public static Map<String, Object> bellmanFordDetectCycle(List<Edge> edges, int V, int src) {
        int[] dist = new int[V];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[src] = 0;
        
        // Relax edges
        for (int i = 0; i < V - 1; i++) {
            for (Edge edge : edges) {
                int u = edge.src;
                int v = edge.dest;
                int weight = edge.weight;
                
                if (dist[u] != Integer.MAX_VALUE && dist[u] + weight < dist[v]) {
                    dist[v] = dist[u] + weight;
                }
            }
        }
        
        // Check for negative cycle
        boolean hasNegativeCycle = false;
        for (Edge edge : edges) {
            int u = edge.src;
            int v = edge.dest;
            int weight = edge.weight;
            
            if (dist[u] != Integer.MAX_VALUE && dist[u] + weight < dist[v]) {
                hasNegativeCycle = true;
                break;
            }
        }
        
        Map<String, Object> result = new HashMap<>();
        result.put("distances", dist);
        result.put("hasNegativeCycle", hasNegativeCycle);
        return result;
    }
    
    // ==================== 3. FLOYD-WARSHALL ALGORITHM ====================
    
    /**
     * Floyd-Warshall All Pairs Shortest Path
     * 
     * Time: O(V³)
     * Space: O(V²)
     * 
     * Finds shortest paths between all pairs of vertices
     * Can detect negative cycles
     * 
     * @param graph Adjacency matrix (INF for no edge)
     * @return Distance matrix
     */
    public static int[][] floydWarshall(int[][] graph) {
        int V = graph.length;
        int[][] dist = new int[V][V];
        
        // Initialize distance matrix
        for (int i = 0; i < V; i++) {
            for (int j = 0; j < V; j++) {
                dist[i][j] = graph[i][j];
            }
        }
        
        // Try all intermediate vertices
        for (int k = 0; k < V; k++) {
            for (int i = 0; i < V; i++) {
                for (int j = 0; j < V; j++) {
                    if (dist[i][k] != Integer.MAX_VALUE && 
                        dist[k][j] != Integer.MAX_VALUE &&
                        dist[i][k] + dist[k][j] < dist[i][j]) {
                        dist[i][j] = dist[i][k] + dist[k][j];
                    }
                }
            }
        }
        
        // Check for negative cycles
        for (int i = 0; i < V; i++) {
            if (dist[i][i] < 0) {
                System.out.println("Negative cycle detected!");
                return null;
            }
        }
        
        return dist;
    }
    
    /**
     * Floyd-Warshall with path reconstruction
     */
    public static Map<String, Object> floydWarshallWithPath(int[][] graph) {
        int V = graph.length;
        int[][] dist = new int[V][V];
        int[][] next = new int[V][V];
        
        // Initialize
        for (int i = 0; i < V; i++) {
            for (int j = 0; j < V; j++) {
                dist[i][j] = graph[i][j];
                if (graph[i][j] != Integer.MAX_VALUE && i != j) {
                    next[i][j] = j;
                } else {
                    next[i][j] = -1;
                }
            }
        }
        
        // Floyd-Warshall
        for (int k = 0; k < V; k++) {
            for (int i = 0; i < V; i++) {
                for (int j = 0; j < V; j++) {
                    if (dist[i][k] != Integer.MAX_VALUE && 
                        dist[k][j] != Integer.MAX_VALUE &&
                        dist[i][k] + dist[k][j] < dist[i][j]) {
                        dist[i][j] = dist[i][k] + dist[k][j];
                        next[i][j] = next[i][k];
                    }
                }
            }
        }
        
        Map<String, Object> result = new HashMap<>();
        result.put("distances", dist);
        result.put("next", next);
        return result;
    }
    
    /**
     * Reconstruct path using next matrix
     */
    public static List<Integer> reconstructPathFloydWarshall(int[][] next, int u, int v) {
        if (next[u][v] == -1) return new ArrayList<>();
        
        List<Integer> path = new ArrayList<>();
        path.add(u);
        
        while (u != v) {
            u = next[u][v];
            path.add(u);
        }
        
        return path;
    }
    
    // ==================== 4. PRIM'S MST ====================
    
    /**
     * Prim's Minimum Spanning Tree Algorithm
     * 
     * Time: O((V + E) log V) with priority queue
     * Space: O(V + E)
     * 
     * Works on undirected, weighted, connected graphs
     * 
     * @param graph Adjacency list
     * @param V Number of vertices
     * @return List of edges in MST
     */
    public static List<Edge> primMST(List<List<Edge>> graph, int V) {
        List<Edge> mst = new ArrayList<>();
        boolean[] inMST = new boolean[V];
        PriorityQueue<Edge> pq = new PriorityQueue<>();
        
        // Start from vertex 0
        inMST[0] = true;
        for (Edge edge : graph.get(0)) {
            pq.offer(edge);
        }
        
        while (!pq.isEmpty() && mst.size() < V - 1) {
            Edge edge = pq.poll();
            int v = edge.dest;
            
            if (inMST[v]) continue;
            
            // Add edge to MST
            mst.add(edge);
            inMST[v] = true;
            
            // Add all edges from v
            for (Edge nextEdge : graph.get(v)) {
                if (!inMST[nextEdge.dest]) {
                    pq.offer(nextEdge);
                }
            }
        }
        
        return mst;
    }
    
    /**
     * Prim's MST with total weight
     */
    public static Map<String, Object> primMSTWithWeight(List<List<Edge>> graph, int V) {
        List<Edge> mst = new ArrayList<>();
        boolean[] inMST = new boolean[V];
        PriorityQueue<Edge> pq = new PriorityQueue<>();
        int totalWeight = 0;
        
        inMST[0] = true;
        for (Edge edge : graph.get(0)) {
            pq.offer(edge);
        }
        
        while (!pq.isEmpty() && mst.size() < V - 1) {
            Edge edge = pq.poll();
            int v = edge.dest;
            
            if (inMST[v]) continue;
            
            mst.add(edge);
            totalWeight += edge.weight;
            inMST[v] = true;
            
            for (Edge nextEdge : graph.get(v)) {
                if (!inMST[nextEdge.dest]) {
                    pq.offer(nextEdge);
                }
            }
        }
        
        Map<String, Object> result = new HashMap<>();
        result.put("edges", mst);
        result.put("totalWeight", totalWeight);
        return result;
    }
    
    // ==================== 5. KRUSKAL'S MST WITH UNION-FIND ====================
    
    /**
     * Union-Find Data Structure (Disjoint Set Union)
     * With path compression and union by rank
     */
    public static class UnionFind {
        int[] parent;
        int[] rank;
        int components;
        
        public UnionFind(int n) {
            parent = new int[n];
            rank = new int[n];
            components = n;
            for (int i = 0; i < n; i++) {
                parent[i] = i;
                rank[i] = 0;
            }
        }
        
        /**
         * Find with path compression
         */
        public int find(int x) {
            if (parent[x] != x) {
                parent[x] = find(parent[x]);  // Path compression
            }
            return parent[x];
        }
        
        /**
         * Union by rank
         * 
         * @return true if union performed, false if already in same set
         */
        public boolean union(int x, int y) {
            int rootX = find(x);
            int rootY = find(y);
            
            if (rootX == rootY) return false;
            
            // Union by rank
            if (rank[rootX] < rank[rootY]) {
                parent[rootX] = rootY;
            } else if (rank[rootX] > rank[rootY]) {
                parent[rootY] = rootX;
            } else {
                parent[rootY] = rootX;
                rank[rootX]++;
            }
            
            components--;
            return true;
        }
        
        /**
         * Check if two elements are in same set
         */
        public boolean connected(int x, int y) {
            return find(x) == find(y);
        }
        
        /**
         * Get number of connected components
         */
        public int getComponents() {
            return components;
        }
    }
    
    /**
     * Kruskal's Minimum Spanning Tree
     * 
     * Time: O(E log E) for sorting + O(E × α(V)) for union-find
     * Space: O(V + E)
     * 
     * @param edges List of all edges
     * @param V Number of vertices
     * @return List of edges in MST
     */
    public static List<Edge> kruskalMST(List<Edge> edges, int V) {
        List<Edge> mst = new ArrayList<>();
        Collections.sort(edges);  // Sort by weight
        
        UnionFind uf = new UnionFind(V);
        
        for (Edge edge : edges) {
            if (uf.union(edge.src, edge.dest)) {
                mst.add(edge);
                if (mst.size() == V - 1) break;  // MST complete
            }
        }
        
        return mst;
    }
    
    /**
     * Kruskal's MST with total weight
     */
    public static Map<String, Object> kruskalMSTWithWeight(List<Edge> edges, int V) {
        List<Edge> mst = new ArrayList<>();
        Collections.sort(edges);
        
        UnionFind uf = new UnionFind(V);
        int totalWeight = 0;
        
        for (Edge edge : edges) {
            if (uf.union(edge.src, edge.dest)) {
                mst.add(edge);
                totalWeight += edge.weight;
                if (mst.size() == V - 1) break;
            }
        }
        
        Map<String, Object> result = new HashMap<>();
        result.put("edges", mst);
        result.put("totalWeight", totalWeight);
        return result;
    }
    
    // ==================== 6. TOPOLOGICAL SORT ====================
    
    /**
     * Topological Sort using DFS
     * 
     * Time: O(V + E)
     * Space: O(V)
     * 
     * Works only on Directed Acyclic Graphs (DAG)
     * 
     * @param graph Adjacency list
     * @param V Number of vertices
     * @return Topological order (empty if cycle exists)
     */
    public static List<Integer> topologicalSortDFS(List<List<Integer>> graph, int V) {
        boolean[] visited = new boolean[V];
        Stack<Integer> stack = new Stack<>();
        boolean[] recursionStack = new boolean[V];
        
        // Check for cycles and perform DFS
        for (int i = 0; i < V; i++) {
            if (!visited[i]) {
                if (topologicalSortDFSUtil(graph, i, visited, stack, recursionStack)) {
                    return new ArrayList<>();  // Cycle detected
                }
            }
        }
        
        // Pop all elements from stack
        List<Integer> result = new ArrayList<>();
        while (!stack.isEmpty()) {
            result.add(stack.pop());
        }
        
        return result;
    }
    
    private static boolean topologicalSortDFSUtil(List<List<Integer>> graph, int v,
                                                   boolean[] visited, Stack<Integer> stack,
                                                   boolean[] recursionStack) {
        visited[v] = true;
        recursionStack[v] = true;
        
        for (int neighbor : graph.get(v)) {
            if (!visited[neighbor]) {
                if (topologicalSortDFSUtil(graph, neighbor, visited, stack, recursionStack)) {
                    return true;  // Cycle found
                }
            } else if (recursionStack[neighbor]) {
                return true;  // Back edge (cycle)
            }
        }
        
        recursionStack[v] = false;
        stack.push(v);
        return false;
    }
    
    /**
     * Topological Sort using Kahn's Algorithm (BFS)
     * 
     * Time: O(V + E)
     * Space: O(V)
     * 
     * @param graph Adjacency list
     * @param V Number of vertices
     * @return Topological order (empty if cycle exists)
     */
    public static List<Integer> topologicalSortKahn(List<List<Integer>> graph, int V) {
        int[] inDegree = new int[V];
        
        // Calculate in-degrees
        for (int u = 0; u < V; u++) {
            for (int v : graph.get(u)) {
                inDegree[v]++;
            }
        }
        
        // Add all vertices with in-degree 0 to queue
        Queue<Integer> queue = new LinkedList<>();
        for (int i = 0; i < V; i++) {
            if (inDegree[i] == 0) {
                queue.offer(i);
            }
        }
        
        List<Integer> result = new ArrayList<>();
        
        while (!queue.isEmpty()) {
            int u = queue.poll();
            result.add(u);
            
            // Reduce in-degree of neighbors
            for (int v : graph.get(u)) {
                inDegree[v]--;
                if (inDegree[v] == 0) {
                    queue.offer(v);
                }
            }
        }
        
        // If result doesn't contain all vertices, there's a cycle
        if (result.size() != V) {
            return new ArrayList<>();
        }
        
        return result;
    }
    
    // ==================== 7. STRONGLY CONNECTED COMPONENTS ====================
    
    /**
     * Kosaraju's Algorithm for SCC
     * 
     * Time: O(V + E)
     * Space: O(V)
     * 
     * Two DFS passes:
     * 1. Fill stack with finish times
     * 2. DFS on transposed graph in stack order
     * 
     * @param graph Adjacency list
     * @param V Number of vertices
     * @return List of SCCs (each SCC is a list of vertices)
     */
    public static List<List<Integer>> kosarajuSCC(List<List<Integer>> graph, int V) {
        // Step 1: Fill stack with vertices in finish time order
        Stack<Integer> stack = new Stack<>();
        boolean[] visited = new boolean[V];
        
        for (int i = 0; i < V; i++) {
            if (!visited[i]) {
                fillOrder(graph, i, visited, stack);
            }
        }
        
        // Step 2: Create transpose graph
        List<List<Integer>> transpose = getTranspose(graph, V);
        
        // Step 3: DFS on transpose in stack order
        Arrays.fill(visited, false);
        List<List<Integer>> sccs = new ArrayList<>();
        
        while (!stack.isEmpty()) {
            int v = stack.pop();
            if (!visited[v]) {
                List<Integer> scc = new ArrayList<>();
                dfsCollect(transpose, v, visited, scc);
                sccs.add(scc);
            }
        }
        
        return sccs;
    }
    
    private static void fillOrder(List<List<Integer>> graph, int v, 
                                   boolean[] visited, Stack<Integer> stack) {
        visited[v] = true;
        
        for (int neighbor : graph.get(v)) {
            if (!visited[neighbor]) {
                fillOrder(graph, neighbor, visited, stack);
            }
        }
        
        stack.push(v);
    }
    
    private static List<List<Integer>> getTranspose(List<List<Integer>> graph, int V) {
        List<List<Integer>> transpose = new ArrayList<>();
        for (int i = 0; i < V; i++) {
            transpose.add(new ArrayList<>());
        }
        
        for (int u = 0; u < V; u++) {
            for (int v : graph.get(u)) {
                transpose.get(v).add(u);  // Reverse edge
            }
        }
        
        return transpose;
    }
    
    private static void dfsCollect(List<List<Integer>> graph, int v,
                                    boolean[] visited, List<Integer> component) {
        visited[v] = true;
        component.add(v);
        
        for (int neighbor : graph.get(v)) {
            if (!visited[neighbor]) {
                dfsCollect(graph, neighbor, visited, component);
            }
        }
    }
    
    /**
     * Tarjan's Algorithm for SCC
     * 
     * Time: O(V + E)
     * Space: O(V)
     * 
     * Single DFS pass with low-link values
     */
    public static List<List<Integer>> tarjanSCC(List<List<Integer>> graph, int V) {
        int[] ids = new int[V];
        int[] low = new int[V];
        boolean[] onStack = new boolean[V];
        Stack<Integer> stack = new Stack<>();
        Arrays.fill(ids, -1);
        
        List<List<Integer>> sccs = new ArrayList<>();
        int[] idCounter = {0};
        
        for (int i = 0; i < V; i++) {
            if (ids[i] == -1) {
                tarjanDFS(graph, i, ids, low, onStack, stack, sccs, idCounter);
            }
        }
        
        return sccs;
    }
    
    private static void tarjanDFS(List<List<Integer>> graph, int at,
                                   int[] ids, int[] low, boolean[] onStack,
                                   Stack<Integer> stack, List<List<Integer>> sccs,
                                   int[] idCounter) {
        ids[at] = low[at] = idCounter[0]++;
        stack.push(at);
        onStack[at] = true;
        
        for (int to : graph.get(at)) {
            if (ids[to] == -1) {
                tarjanDFS(graph, to, ids, low, onStack, stack, sccs, idCounter);
            }
            if (onStack[to]) {
                low[at] = Math.min(low[at], low[to]);
            }
        }
        
        // Found SCC root
        if (ids[at] == low[at]) {
            List<Integer> scc = new ArrayList<>();
            while (true) {
                int node = stack.pop();
                onStack[node] = false;
                scc.add(node);
                if (node == at) break;
            }
            sccs.add(scc);
        }
    }
    
    // ==================== 8. UNION-FIND APPLICATIONS ====================
    
    /**
     * Detect cycle in undirected graph using Union-Find
     * 
     * Time: O(E × α(V))
     * Space: O(V)
     * 
     * @param edges List of edges
     * @param V Number of vertices
     * @return true if cycle exists
     */
    public static boolean hasCycleUndirected(List<Edge> edges, int V) {
        UnionFind uf = new UnionFind(V);
        
        for (Edge edge : edges) {
            int x = uf.find(edge.src);
            int y = uf.find(edge.dest);
            
            if (x == y) {
                return true;  // Cycle detected
            }
            
            uf.union(edge.src, edge.dest);
        }
        
        return false;
    }
    
    /**
     * Count number of connected components
     * 
     * @param edges List of edges
     * @param V Number of vertices
     * @return Number of components
     */
    public static int countComponents(List<Edge> edges, int V) {
        UnionFind uf = new UnionFind(V);
        
        for (Edge edge : edges) {
            uf.union(edge.src, edge.dest);
        }
        
        return uf.getComponents();
    }
    
    // ==================== UTILITY METHODS ====================
    
    /**
     * Print adjacency list
     */
    public static void printGraph(List<List<Edge>> graph) {
        for (int i = 0; i < graph.size(); i++) {
            System.out.print(i + " -> ");
            for (Edge edge : graph.get(i)) {
                System.out.print("(" + edge.dest + ", " + edge.weight + ") ");
            }
            System.out.println();
        }
    }
    
    /**
     * Print distance array
     */
    public static void printDistances(int[] dist) {
        System.out.print("Distances: ");
        for (int i = 0; i < dist.length; i++) {
            if (dist[i] == Integer.MAX_VALUE) {
                System.out.print("INF ");
            } else {
                System.out.print(dist[i] + " ");
            }
        }
        System.out.println();
    }
    
    /**
     * Print 2D distance matrix
     */
    public static void print2DDistances(int[][] dist) {
        int V = dist.length;
        System.out.println("All-pairs shortest paths:");
        for (int i = 0; i < V; i++) {
            for (int j = 0; j < V; j++) {
                if (dist[i][j] == Integer.MAX_VALUE) {
                    System.out.print("INF ");
                } else {
                    System.out.printf("%3d ", dist[i][j]);
                }
            }
            System.out.println();
        }
    }
    
    // ==================== DEMO ====================
    
    public static void main(String[] args) {
        System.out.println("=== Day 40: Fundamental Graph Algorithms ===\n");
        
        // Demo 1: Dijkstra's Algorithm
        System.out.println("1. Dijkstra's Shortest Path:");
        int V1 = 5;
        List<List<Edge>> graph1 = new ArrayList<>();
        for (int i = 0; i < V1; i++) graph1.add(new ArrayList<>());
        
        graph1.get(0).add(new Edge(0, 1, 4));
        graph1.get(0).add(new Edge(0, 2, 1));
        graph1.get(2).add(new Edge(2, 1, 2));
        graph1.get(1).add(new Edge(1, 3, 1));
        graph1.get(2).add(new Edge(2, 3, 5));
        graph1.get(3).add(new Edge(3, 4, 3));
        
        int[] dijkstraDist = dijkstra(graph1, 0, V1);
        printDistances(dijkstraDist);
        
        // Demo 2: Bellman-Ford
        System.out.println("\n2. Bellman-Ford Algorithm:");
        List<Edge> edges2 = new ArrayList<>();
        edges2.add(new Edge(0, 1, -1));
        edges2.add(new Edge(0, 2, 4));
        edges2.add(new Edge(1, 2, 3));
        edges2.add(new Edge(1, 3, 2));
        edges2.add(new Edge(1, 4, 2));
        edges2.add(new Edge(3, 2, 5));
        edges2.add(new Edge(3, 1, 1));
        edges2.add(new Edge(4, 3, -3));
        
        int[] bfDist = bellmanFord(edges2, 5, 0);
        if (bfDist != null) {
            printDistances(bfDist);
        }
        
        // Demo 3: Floyd-Warshall
        System.out.println("\n3. Floyd-Warshall All-Pairs Shortest Path:");
        int INF = Integer.MAX_VALUE;
        int[][] graph3 = {
            {0, 5, INF, 10},
            {INF, 0, 3, INF},
            {INF, INF, 0, 1},
            {INF, INF, INF, 0}
        };
        int[][] fwDist = floydWarshall(graph3);
        if (fwDist != null) {
            print2DDistances(fwDist);
        }
        
        // Demo 4: Prim's MST
        System.out.println("\n4. Prim's Minimum Spanning Tree:");
        int V4 = 4;
        List<List<Edge>> graph4 = new ArrayList<>();
        for (int i = 0; i < V4; i++) graph4.add(new ArrayList<>());
        
        // Undirected graph - add both directions
        graph4.get(0).add(new Edge(0, 1, 10));
        graph4.get(1).add(new Edge(1, 0, 10));
        graph4.get(0).add(new Edge(0, 2, 6));
        graph4.get(2).add(new Edge(2, 0, 6));
        graph4.get(0).add(new Edge(0, 3, 5));
        graph4.get(3).add(new Edge(3, 0, 5));
        graph4.get(1).add(new Edge(1, 3, 15));
        graph4.get(3).add(new Edge(3, 1, 15));
        graph4.get(2).add(new Edge(2, 3, 4));
        graph4.get(3).add(new Edge(3, 2, 4));
        
        Map<String, Object> primResult = primMSTWithWeight(graph4, V4);
        System.out.println("MST Total Weight: " + primResult.get("totalWeight"));
        
        // Demo 5: Kruskal's MST
        System.out.println("\n5. Kruskal's Minimum Spanning Tree:");
        List<Edge> edges5 = new ArrayList<>();
        edges5.add(new Edge(0, 1, 10));
        edges5.add(new Edge(0, 2, 6));
        edges5.add(new Edge(0, 3, 5));
        edges5.add(new Edge(1, 3, 15));
        edges5.add(new Edge(2, 3, 4));
        
        Map<String, Object> kruskalResult = kruskalMSTWithWeight(edges5, 4);
        System.out.println("MST Total Weight: " + kruskalResult.get("totalWeight"));
        
        // Demo 6: Topological Sort
        System.out.println("\n6. Topological Sort:");
        int V6 = 6;
        List<List<Integer>> graph6 = new ArrayList<>();
        for (int i = 0; i < V6; i++) graph6.add(new ArrayList<>());
        
        graph6.get(5).add(2);
        graph6.get(5).add(0);
        graph6.get(4).add(0);
        graph6.get(4).add(1);
        graph6.get(2).add(3);
        graph6.get(3).add(1);
        
        List<Integer> topoOrder = topologicalSortKahn(graph6, V6);
        System.out.println("Topological Order: " + topoOrder);
        
        // Demo 7: Strongly Connected Components
        System.out.println("\n7. Strongly Connected Components (Kosaraju):");
        int V7 = 5;
        List<List<Integer>> graph7 = new ArrayList<>();
        for (int i = 0; i < V7; i++) graph7.add(new ArrayList<>());
        
        graph7.get(1).add(0);
        graph7.get(0).add(2);
        graph7.get(2).add(1);
        graph7.get(0).add(3);
        graph7.get(3).add(4);
        
        List<List<Integer>> sccs = kosarajuSCC(graph7, V7);
        System.out.println("Number of SCCs: " + sccs.size());
        for (int i = 0; i < sccs.size(); i++) {
            System.out.println("SCC " + (i + 1) + ": " + sccs.get(i));
        }
        
        // Demo 8: Union-Find
        System.out.println("\n8. Union-Find - Cycle Detection:");
        List<Edge> edges8 = new ArrayList<>();
        edges8.add(new Edge(0, 1, 0));
        edges8.add(new Edge(1, 2, 0));
        edges8.add(new Edge(2, 0, 0));  // This creates a cycle
        
        boolean hasCycle = hasCycleUndirected(edges8, 3);
        System.out.println("Graph has cycle: " + hasCycle);
    }
}
