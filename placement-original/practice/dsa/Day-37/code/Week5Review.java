package day37.review;

import java.util.*;

/**
 * DAY 37: Week 5 Review - Comprehensive Graph & Union-Find Review
 * 
 * This class consolidates all major concepts from Week 5:
 * - Graph representations and traversals (Days 31-34)
 * - Union-Find data structure (Days 35-36)
 * - Advanced graph algorithms
 */
public class Week5Review {

    // ==================== GRAPH REPRESENTATIONS ====================
    
    /**
     * Adjacency List - Most common representation
     * Space: O(V + E)
     */
    public static class AdjacencyList {
        private List<List<Integer>> adj;
        
        public AdjacencyList(int n) {
            adj = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                adj.add(new ArrayList<>());
            }
        }
        
        public void addEdge(int u, int v) {
            adj.get(u).add(v);
        }
        
        public void addUndirectedEdge(int u, int v) {
            adj.get(u).add(v);
            adj.get(v).add(u);
        }
        
        public List<Integer> getNeighbors(int u) {
            return adj.get(u);
        }
    }
    
    /**
     * Adjacency Matrix - Good for dense graphs
     * Space: O(V^2)
     */
    public static class AdjacencyMatrix {
        private int[][] matrix;
        private int n;
        
        public AdjacencyMatrix(int n) {
            this.n = n;
            matrix = new int[n][n];
        }
        
        public void addEdge(int u, int v, int weight) {
            matrix[u][v] = weight;
        }
        
        public boolean hasEdge(int u, int v) {
            return matrix[u][v] != 0;
        }
        
        public int getWeight(int u, int v) {
            return matrix[u][v];
        }
    }
    
    // ==================== GRAPH TRAVERSALS ====================
    
    /**
     * BFS - Level-order traversal
     * Time: O(V + E), Space: O(V)
     */
    public static List<Integer> bfs(List<List<Integer>> graph, int start) {
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
    
    /**
     * DFS - Depth-first traversal (Recursive)
     * Time: O(V + E), Space: O(V)
     */
    public static List<Integer> dfs(List<List<Integer>> graph, int start) {
        List<Integer> result = new ArrayList<>();
        boolean[] visited = new boolean[graph.size()];
        dfsHelper(graph, start, visited, result);
        return result;
    }
    
    private static void dfsHelper(List<List<Integer>> graph, int node, 
                                  boolean[] visited, List<Integer> result) {
        visited[node] = true;
        result.add(node);
        
        for (int neighbor : graph.get(node)) {
            if (!visited[neighbor]) {
                dfsHelper(graph, neighbor, visited, result);
            }
        }
    }
    
    // ==================== SHORTEST PATH ALGORITHMS ====================
    
    /**
     * Dijkstra's Algorithm - Single source shortest path (non-negative weights)
     * Time: O((V + E) log V), Space: O(V)
     */
    public static int[] dijkstra(List<List<int[]>> graph, int start) {
        int n = graph.size();
        int[] dist = new int[n];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[start] = 0;
        
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[1] - b[1]);
        pq.offer(new int[]{start, 0});
        
        while (!pq.isEmpty()) {
            int[] curr = pq.poll();
            int node = curr[0];
            int d = curr[1];
            
            if (d > dist[node]) continue;
            
            for (int[] edge : graph.get(node)) {
                int next = edge[0];
                int weight = edge[1];
                
                if (dist[node] + weight < dist[next]) {
                    dist[next] = dist[node] + weight;
                    pq.offer(new int[]{next, dist[next]});
                }
            }
        }
        
        return dist;
    }
    
    /**
     * Bellman-Ford Algorithm - Handles negative weights
     * Time: O(V × E), Space: O(V)
     */
    public static int[] bellmanFord(int n, int[][] edges, int start) {
        int[] dist = new int[n];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[start] = 0;
        
        // Relax edges V-1 times
        for (int i = 0; i < n - 1; i++) {
            for (int[] edge : edges) {
                int u = edge[0], v = edge[1], w = edge[2];
                if (dist[u] != Integer.MAX_VALUE && dist[u] + w < dist[v]) {
                    dist[v] = dist[u] + w;
                }
            }
        }
        
        // Check for negative cycles
        for (int[] edge : edges) {
            int u = edge[0], v = edge[1], w = edge[2];
            if (dist[u] != Integer.MAX_VALUE && dist[u] + w < dist[v]) {
                throw new RuntimeException("Negative cycle detected");
            }
        }
        
        return dist;
    }
    
    /**
     * Floyd-Warshall Algorithm - All pairs shortest path
     * Time: O(V^3), Space: O(V^2)
     */
    public static int[][] floydWarshall(int n, int[][] edges) {
        int[][] dist = new int[n][n];
        
        // Initialize
        for (int i = 0; i < n; i++) {
            Arrays.fill(dist[i], Integer.MAX_VALUE / 2);
            dist[i][i] = 0;
        }
        
        for (int[] edge : edges) {
            dist[edge[0]][edge[1]] = edge[2];
        }
        
        // Floyd-Warshall
        for (int k = 0; k < n; k++) {
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) {
                    dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
                }
            }
        }
        
        return dist;
    }
    
    // ==================== CYCLE DETECTION ====================
    
    /**
     * Detect cycle in undirected graph - DFS
     * Time: O(V + E), Space: O(V)
     */
    public static boolean hasCycleUndirected(List<List<Integer>> graph) {
        int n = graph.size();
        boolean[] visited = new boolean[n];
        
        for (int i = 0; i < n; i++) {
            if (!visited[i]) {
                if (dfsForCycleUndirected(graph, i, -1, visited)) {
                    return true;
                }
            }
        }
        
        return false;
    }
    
    private static boolean dfsForCycleUndirected(List<List<Integer>> graph, int node, 
                                                 int parent, boolean[] visited) {
        visited[node] = true;
        
        for (int neighbor : graph.get(node)) {
            if (!visited[neighbor]) {
                if (dfsForCycleUndirected(graph, neighbor, node, visited)) {
                    return true;
                }
            } else if (neighbor != parent) {
                return true; // Back edge found
            }
        }
        
        return false;
    }
    
    /**
     * Detect cycle in directed graph - DFS with colors
     * Time: O(V + E), Space: O(V)
     */
    public static boolean hasCycleDirected(List<List<Integer>> graph) {
        int n = graph.size();
        int[] color = new int[n]; // 0: white, 1: gray, 2: black
        
        for (int i = 0; i < n; i++) {
            if (color[i] == 0) {
                if (dfsForCycleDirected(graph, i, color)) {
                    return true;
                }
            }
        }
        
        return false;
    }
    
    private static boolean dfsForCycleDirected(List<List<Integer>> graph, int node, int[] color) {
        color[node] = 1; // Mark as gray (in progress)
        
        for (int neighbor : graph.get(node)) {
            if (color[neighbor] == 1) {
                return true; // Back edge to gray node
            }
            if (color[neighbor] == 0 && dfsForCycleDirected(graph, neighbor, color)) {
                return true;
            }
        }
        
        color[node] = 2; // Mark as black (completed)
        return false;
    }
    
    // ==================== TOPOLOGICAL SORT ====================
    
    /**
     * Topological Sort - Kahn's Algorithm (BFS)
     * Time: O(V + E), Space: O(V)
     */
    public static List<Integer> topologicalSortBFS(List<List<Integer>> graph) {
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
    
    /**
     * Topological Sort - DFS
     * Time: O(V + E), Space: O(V)
     */
    public static List<Integer> topologicalSortDFS(List<List<Integer>> graph) {
        int n = graph.size();
        boolean[] visited = new boolean[n];
        Stack<Integer> stack = new Stack<>();
        
        for (int i = 0; i < n; i++) {
            if (!visited[i]) {
                dfsForTopoSort(graph, i, visited, stack);
            }
        }
        
        List<Integer> result = new ArrayList<>();
        while (!stack.isEmpty()) {
            result.add(stack.pop());
        }
        
        return result;
    }
    
    private static void dfsForTopoSort(List<List<Integer>> graph, int node,
                                      boolean[] visited, Stack<Integer> stack) {
        visited[node] = true;
        
        for (int neighbor : graph.get(node)) {
            if (!visited[neighbor]) {
                dfsForTopoSort(graph, neighbor, visited, stack);
            }
        }
        
        stack.push(node);
    }
    
    // ==================== UNION-FIND REVIEW ====================
    
    /**
     * Union-Find with Path Compression and Union by Size
     * Time: O(α(N)) per operation, Space: O(N)
     */
    public static class UnionFind {
        private int[] parent;
        private int[] size;
        private int components;
        
        public UnionFind(int n) {
            parent = new int[n];
            size = new int[n];
            components = n;
            
            for (int i = 0; i < n; i++) {
                parent[i] = i;
                size[i] = 1;
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
        
        public boolean isConnected(int x, int y) {
            return find(x) == find(y);
        }
        
        public int getComponents() {
            return components;
        }
        
        public int getSize(int x) {
            return size[find(x)];
        }
    }
    
    // ==================== MINIMUM SPANNING TREE ====================
    
    /**
     * Kruskal's Algorithm using Union-Find
     * Time: O(E log E), Space: O(V)
     */
    public static class Edge implements Comparable<Edge> {
        public int u, v, weight;
        
        public Edge(int u, int v, int weight) {
            this.u = u;
            this.v = v;
            this.weight = weight;
        }
        
        @Override
        public int compareTo(Edge other) {
            return Integer.compare(this.weight, other.weight);
        }
    }
    
    public static List<Edge> kruskalMST(int n, List<Edge> edges) {
        Collections.sort(edges);
        UnionFind uf = new UnionFind(n);
        List<Edge> mst = new ArrayList<>();
        
        for (Edge edge : edges) {
            if (uf.union(edge.u, edge.v)) {
                mst.add(edge);
                if (mst.size() == n - 1) break;
            }
        }
        
        return mst;
    }
    
    /**
     * Prim's Algorithm using Priority Queue
     * Time: O((V + E) log V), Space: O(V + E)
     */
    public static List<Edge> primMST(int n, List<List<int[]>> graph) {
        boolean[] inMST = new boolean[n];
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[2] - b[2]);
        List<Edge> mst = new ArrayList<>();
        
        // Start from node 0
        inMST[0] = true;
        for (int[] edge : graph.get(0)) {
            pq.offer(new int[]{0, edge[0], edge[1]});
        }
        
        while (!pq.isEmpty() && mst.size() < n - 1) {
            int[] curr = pq.poll();
            int u = curr[0], v = curr[1], w = curr[2];
            
            if (inMST[v]) continue;
            
            inMST[v] = true;
            mst.add(new Edge(u, v, w));
            
            for (int[] edge : graph.get(v)) {
                if (!inMST[edge[0]]) {
                    pq.offer(new int[]{v, edge[0], edge[1]});
                }
            }
        }
        
        return mst;
    }
    
    // ==================== STRONGLY CONNECTED COMPONENTS ====================
    
    /**
     * Kosaraju's Algorithm for SCC
     * Time: O(V + E), Space: O(V)
     */
    public static List<List<Integer>> kosarajuSCC(List<List<Integer>> graph) {
        int n = graph.size();
        Stack<Integer> stack = new Stack<>();
        boolean[] visited = new boolean[n];
        
        // First DFS to fill stack
        for (int i = 0; i < n; i++) {
            if (!visited[i]) {
                dfsForStack(graph, i, visited, stack);
            }
        }
        
        // Transpose graph
        List<List<Integer>> transpose = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            transpose.add(new ArrayList<>());
        }
        for (int u = 0; u < n; u++) {
            for (int v : graph.get(u)) {
                transpose.get(v).add(u);
            }
        }
        
        // Second DFS on transpose
        Arrays.fill(visited, false);
        List<List<Integer>> sccs = new ArrayList<>();
        
        while (!stack.isEmpty()) {
            int node = stack.pop();
            if (!visited[node]) {
                List<Integer> scc = new ArrayList<>();
                dfsForSCC(transpose, node, visited, scc);
                sccs.add(scc);
            }
        }
        
        return sccs;
    }
    
    private static void dfsForStack(List<List<Integer>> graph, int node,
                                   boolean[] visited, Stack<Integer> stack) {
        visited[node] = true;
        for (int neighbor : graph.get(node)) {
            if (!visited[neighbor]) {
                dfsForStack(graph, neighbor, visited, stack);
            }
        }
        stack.push(node);
    }
    
    private static void dfsForSCC(List<List<Integer>> graph, int node,
                                 boolean[] visited, List<Integer> scc) {
        visited[node] = true;
        scc.add(node);
        for (int neighbor : graph.get(node)) {
            if (!visited[neighbor]) {
                dfsForSCC(graph, neighbor, visited, scc);
            }
        }
    }
    
    // ==================== DEMO ====================
    
    public static void main(String[] args) {
        System.out.println("=== Week 5 Review: Graph Algorithms & Union-Find ===\n");
        
        // Demo 1: BFS and DFS
        System.out.println("1. Graph Traversals:");
        List<List<Integer>> graph = new ArrayList<>();
        for (int i = 0; i < 5; i++) {
            graph.add(new ArrayList<>());
        }
        graph.get(0).addAll(Arrays.asList(1, 2));
        graph.get(1).addAll(Arrays.asList(0, 3));
        graph.get(2).addAll(Arrays.asList(0, 4));
        graph.get(3).addAll(Arrays.asList(1));
        graph.get(4).addAll(Arrays.asList(2));
        
        System.out.println("BFS from 0: " + bfs(graph, 0));
        System.out.println("DFS from 0: " + dfs(graph, 0));
        
        // Demo 2: Union-Find
        System.out.println("\n2. Union-Find:");
        UnionFind uf = new UnionFind(5);
        uf.union(0, 1);
        uf.union(2, 3);
        System.out.println("Components: " + uf.getComponents());
        System.out.println("0 and 1 connected: " + uf.isConnected(0, 1));
        System.out.println("0 and 2 connected: " + uf.isConnected(0, 2));
        
        // Demo 3: Cycle Detection
        System.out.println("\n3. Cycle Detection:");
        System.out.println("Has cycle (undirected): " + hasCycleUndirected(graph));
        
        // Demo 4: Topological Sort
        System.out.println("\n4. Topological Sort:");
        List<List<Integer>> dag = new ArrayList<>();
        for (int i = 0; i < 4; i++) {
            dag.add(new ArrayList<>());
        }
        dag.get(0).add(1);
        dag.get(0).add(2);
        dag.get(1).add(3);
        dag.get(2).add(3);
        
        System.out.println("Topological order (BFS): " + topologicalSortBFS(dag));
        System.out.println("Topological order (DFS): " + topologicalSortDFS(dag));
        
        System.out.println("\n✓ Week 5 review completed!");
    }
}
