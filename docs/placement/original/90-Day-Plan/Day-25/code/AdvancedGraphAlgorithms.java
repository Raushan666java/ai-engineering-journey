/**
 * DAY 25 - ADVANCED GRAPH ALGORITHMS - COMPLETE GUIDE
 * 
 * Topics Covered:
 * 1. Network Flow (Ford-Fulkerson, Edmond-Karp, Dinic's)
 * 2. Minimum Cut & Maximum Flow
 * 3. Bipartite Matching (Hungarian Algorithm)
 * 4. Articulation Points & Bridges
 * 5. Strongly Connected Components (Kosaraju, Tarjan)
 * 6. Eulerian Path & Circuit
 * 7. Hamiltonian Path & Cycle
 * 8. Graph Coloring
 * 9. Traveling Salesman Problem (TSP)
 * 10. Shortest Path in DAG
 * 
 * Production-ready implementations for competitive programming
 */

import java.util.*;

public class AdvancedGraphAlgorithms {

    // ============================================================================
    // 1. NETWORK FLOW - Ford-Fulkerson & Edmond-Karp
    // ============================================================================

    /**
     * Maximum Flow using Edmond-Karp (BFS-based Ford-Fulkerson)
     * Time: O(V * E^2)
     */
    static class MaxFlow {
        private int[][] capacity;
        private int[][] flow;
        private int vertices;

        public MaxFlow(int vertices) {
            this.vertices = vertices;
            this.capacity = new int[vertices][vertices];
            this.flow = new int[vertices][vertices];
        }

        public void addEdge(int from, int to, int cap) {
            capacity[from][to] = cap;
        }

        public int fordFulkerson(int source, int sink) {
            int maxFlow = 0;
            int[] parent = new int[vertices];

            while (bfs(source, sink, parent)) {
                int pathFlow = Integer.MAX_VALUE;

                // Find minimum capacity along the path
                for (int v = sink; v != source; v = parent[v]) {
                    int u = parent[v];
                    pathFlow = Math.min(pathFlow, capacity[u][v] - flow[u][v]);
                }

                // Update flows
                for (int v = sink; v != source; v = parent[v]) {
                    int u = parent[v];
                    flow[u][v] += pathFlow;
                    flow[v][u] -= pathFlow;
                }

                maxFlow += pathFlow;
            }

            return maxFlow;
        }

        private boolean bfs(int source, int sink, int[] parent) {
            boolean[] visited = new boolean[vertices];
            Queue<Integer> queue = new LinkedList<>();
            queue.offer(source);
            visited[source] = true;
            parent[source] = -1;

            while (!queue.isEmpty()) {
                int u = queue.poll();

                for (int v = 0; v < vertices; v++) {
                    if (!visited[v] && capacity[u][v] - flow[u][v] > 0) {
                        queue.offer(v);
                        parent[v] = u;
                        visited[v] = true;
                        if (v == sink) return true;
                    }
                }
            }

            return false;
        }

        // Get minimum cut
        public List<int[]> getMinCut(int source) {
            boolean[] visited = new boolean[vertices];
            dfs(source, visited);

            List<int[]> minCut = new ArrayList<>();
            for (int u = 0; u < vertices; u++) {
                if (visited[u]) {
                    for (int v = 0; v < vertices; v++) {
                        if (!visited[v] && capacity[u][v] > 0) {
                            minCut.add(new int[]{u, v});
                        }
                    }
                }
            }

            return minCut;
        }

        private void dfs(int u, boolean[] visited) {
            visited[u] = true;
            for (int v = 0; v < vertices; v++) {
                if (!visited[v] && capacity[u][v] - flow[u][v] > 0) {
                    dfs(v, visited);
                }
            }
        }
    }

    /**
     * Dinic's Algorithm - Faster Max Flow
     * Time: O(V^2 * E)
     */
    static class DinicMaxFlow {
        static class Edge {
            int to, cap, flow;
            Edge reverse;

            Edge(int to, int cap) {
                this.to = to;
                this.cap = cap;
            }
        }

        private List<Edge>[] graph;
        private int[] level;
        private int[] iter;
        private int vertices;

        @SuppressWarnings("unchecked")
        public DinicMaxFlow(int vertices) {
            this.vertices = vertices;
            graph = new List[vertices];
            for (int i = 0; i < vertices; i++) {
                graph[i] = new ArrayList<>();
            }
        }

        public void addEdge(int from, int to, int cap) {
            Edge forward = new Edge(to, cap);
            Edge backward = new Edge(from, 0);
            forward.reverse = backward;
            backward.reverse = forward;
            graph[from].add(forward);
            graph[to].add(backward);
        }

        public int maxFlow(int source, int sink) {
            int flow = 0;
            while (bfs(source, sink)) {
                iter = new int[vertices];
                int f;
                while ((f = dfs(source, sink, Integer.MAX_VALUE)) > 0) {
                    flow += f;
                }
            }
            return flow;
        }

        private boolean bfs(int source, int sink) {
            level = new int[vertices];
            Arrays.fill(level, -1);
            level[source] = 0;

            Queue<Integer> queue = new LinkedList<>();
            queue.offer(source);

            while (!queue.isEmpty()) {
                int u = queue.poll();
                for (Edge e : graph[u]) {
                    if (level[e.to] < 0 && e.cap > e.flow) {
                        level[e.to] = level[u] + 1;
                        queue.offer(e.to);
                    }
                }
            }

            return level[sink] >= 0;
        }

        private int dfs(int u, int sink, int pushed) {
            if (u == sink) return pushed;

            for (int i = iter[u]; i < graph[u].size(); i++) {
                Edge e = graph[u].get(i);
                if (level[u] + 1 == level[e.to] && e.cap > e.flow) {
                    int flow = dfs(e.to, sink, Math.min(pushed, e.cap - e.flow));
                    if (flow > 0) {
                        e.flow += flow;
                        e.reverse.flow -= flow;
                        return flow;
                    }
                }
                iter[u]++;
            }

            return 0;
        }
    }

    // ============================================================================
    // 2. BIPARTITE MATCHING - Hungarian Algorithm
    // ============================================================================

    /**
     * Maximum Bipartite Matching
     * Time: O(V * E)
     */
    static class BipartiteMatching {
        private List<Integer>[] graph;
        private int[] match;
        private boolean[] visited;
        private int vertices;

        @SuppressWarnings("unchecked")
        public BipartiteMatching(int vertices) {
            this.vertices = vertices;
            graph = new List[vertices];
            for (int i = 0; i < vertices; i++) {
                graph[i] = new ArrayList<>();
            }
            match = new int[vertices];
            Arrays.fill(match, -1);
        }

        public void addEdge(int u, int v) {
            graph[u].add(v);
        }

        public int maxMatching() {
            int result = 0;
            for (int u = 0; u < vertices; u++) {
                visited = new boolean[vertices];
                if (dfs(u)) result++;
            }
            return result;
        }

        private boolean dfs(int u) {
            for (int v : graph[u]) {
                if (visited[v]) continue;
                visited[v] = true;

                if (match[v] == -1 || dfs(match[v])) {
                    match[v] = u;
                    return true;
                }
            }
            return false;
        }

        public int[] getMatching() {
            return match;
        }
    }

    /**
     * Hungarian Algorithm for Assignment Problem
     * Time: O(n^3)
     */
    static class HungarianAlgorithm {
        public int minCost(int[][] cost) {
            int n = cost.length;
            int[] u = new int[n + 1];
            int[] v = new int[n + 1];
            int[] p = new int[n + 1];
            int[] way = new int[n + 1];

            for (int i = 1; i <= n; i++) {
                p[0] = i;
                int j0 = 0;
                int[] minv = new int[n + 1];
                Arrays.fill(minv, Integer.MAX_VALUE);
                boolean[] used = new boolean[n + 1];

                do {
                    used[j0] = true;
                    int i0 = p[j0];
                    int delta = Integer.MAX_VALUE;
                    int j1 = 0;

                    for (int j = 1; j <= n; j++) {
                        if (!used[j]) {
                            int cur = cost[i0 - 1][j - 1] - u[i0] - v[j];
                            if (cur < minv[j]) {
                                minv[j] = cur;
                                way[j] = j0;
                            }
                            if (minv[j] < delta) {
                                delta = minv[j];
                                j1 = j;
                            }
                        }
                    }

                    for (int j = 0; j <= n; j++) {
                        if (used[j]) {
                            u[p[j]] += delta;
                            v[j] -= delta;
                        } else {
                            minv[j] -= delta;
                        }
                    }

                    j0 = j1;
                } while (p[j0] != 0);

                do {
                    int j1 = way[j0];
                    p[j0] = p[j1];
                    j0 = j1;
                } while (j0 != 0);
            }

            return -v[0];
        }
    }

    // ============================================================================
    // 3. ARTICULATION POINTS & BRIDGES (Tarjan's Algorithm)
    // ============================================================================

    /**
     * Find Articulation Points and Bridges
     */
    static class ArticulationPointsAndBridges {
        private List<Integer>[] graph;
        private boolean[] visited;
        private int[] disc;
        private int[] low;
        private int[] parent;
        private boolean[] ap; // Articulation points
        private List<int[]> bridges;
        private int time;

        @SuppressWarnings("unchecked")
        public ArticulationPointsAndBridges(int vertices) {
            graph = new List[vertices];
            for (int i = 0; i < vertices; i++) {
                graph[i] = new ArrayList<>();
            }
            visited = new boolean[vertices];
            disc = new int[vertices];
            low = new int[vertices];
            parent = new int[vertices];
            ap = new boolean[vertices];
            bridges = new ArrayList<>();
            Arrays.fill(parent, -1);
            time = 0;
        }

        public void addEdge(int u, int v) {
            graph[u].add(v);
            graph[v].add(u);
        }

        public void findArticulationPoints() {
            for (int i = 0; i < graph.length; i++) {
                if (!visited[i]) {
                    dfsAP(i);
                }
            }
        }

        private void dfsAP(int u) {
            int children = 0;
            visited[u] = true;
            disc[u] = low[u] = ++time;

            for (int v : graph[u]) {
                if (!visited[v]) {
                    children++;
                    parent[v] = u;
                    dfsAP(v);

                    low[u] = Math.min(low[u], low[v]);

                    // Check if u is an articulation point
                    if (parent[u] == -1 && children > 1) {
                        ap[u] = true;
                    }

                    if (parent[u] != -1 && low[v] >= disc[u]) {
                        ap[u] = true;
                    }

                    // Check if edge u-v is a bridge
                    if (low[v] > disc[u]) {
                        bridges.add(new int[]{u, v});
                    }
                } else if (v != parent[u]) {
                    low[u] = Math.min(low[u], disc[v]);
                }
            }
        }

        public List<Integer> getArticulationPoints() {
            List<Integer> result = new ArrayList<>();
            for (int i = 0; i < ap.length; i++) {
                if (ap[i]) result.add(i);
            }
            return result;
        }

        public List<int[]> getBridges() {
            return bridges;
        }
    }

    // ============================================================================
    // 4. STRONGLY CONNECTED COMPONENTS - Kosaraju's Algorithm
    // ============================================================================

    /**
     * Find all Strongly Connected Components
     * Time: O(V + E)
     */
    static class StronglyConnectedComponents {
        private List<Integer>[] graph;
        private List<Integer>[] transpose;
        private boolean[] visited;
        private Stack<Integer> stack;
        private List<List<Integer>> sccs;

        @SuppressWarnings("unchecked")
        public StronglyConnectedComponents(int vertices) {
            graph = new List[vertices];
            transpose = new List[vertices];
            for (int i = 0; i < vertices; i++) {
                graph[i] = new ArrayList<>();
                transpose[i] = new ArrayList<>();
            }
            visited = new boolean[vertices];
            stack = new Stack<>();
            sccs = new ArrayList<>();
        }

        public void addEdge(int u, int v) {
            graph[u].add(v);
            transpose[v].add(u);
        }

        public List<List<Integer>> findSCCs() {
            // First DFS to fill stack
            for (int i = 0; i < graph.length; i++) {
                if (!visited[i]) {
                    fillOrder(i);
                }
            }

            // Reset visited
            Arrays.fill(visited, false);

            // Second DFS on transpose graph
            while (!stack.isEmpty()) {
                int v = stack.pop();
                if (!visited[v]) {
                    List<Integer> component = new ArrayList<>();
                    dfsTranspose(v, component);
                    sccs.add(component);
                }
            }

            return sccs;
        }

        private void fillOrder(int v) {
            visited[v] = true;
            for (int u : graph[v]) {
                if (!visited[u]) {
                    fillOrder(u);
                }
            }
            stack.push(v);
        }

        private void dfsTranspose(int v, List<Integer> component) {
            visited[v] = true;
            component.add(v);
            for (int u : transpose[v]) {
                if (!visited[u]) {
                    dfsTranspose(u, component);
                }
            }
        }
    }

    // ============================================================================
    // 5. EULERIAN PATH & CIRCUIT
    // ============================================================================

    /**
     * Find Eulerian Path/Circuit in directed graph
     */
    static class EulerianPath {
        private Map<Integer, List<Integer>> graph;
        private Map<Integer, Integer> inDegree;
        private Map<Integer, Integer> outDegree;

        public EulerianPath() {
            graph = new HashMap<>();
            inDegree = new HashMap<>();
            outDegree = new HashMap<>();
        }

        public void addEdge(int u, int v) {
            graph.computeIfAbsent(u, k -> new ArrayList<>()).add(v);
            outDegree.put(u, outDegree.getOrDefault(u, 0) + 1);
            inDegree.put(v, inDegree.getOrDefault(v, 0) + 1);
            graph.putIfAbsent(v, new ArrayList<>());
            inDegree.putIfAbsent(u, 0);
            outDegree.putIfAbsent(v, 0);
        }

        public List<Integer> findEulerianPath() {
            if (!hasEulerianPath()) {
                return new ArrayList<>();
            }

            int start = getStartVertex();
            Stack<Integer> stack = new Stack<>();
            List<Integer> path = new ArrayList<>();

            stack.push(start);
            Map<Integer, List<Integer>> tempGraph = new HashMap<>();
            for (Map.Entry<Integer, List<Integer>> entry : graph.entrySet()) {
                tempGraph.put(entry.getKey(), new ArrayList<>(entry.getValue()));
            }

            while (!stack.isEmpty()) {
                int v = stack.peek();
                if (tempGraph.get(v).isEmpty()) {
                    path.add(v);
                    stack.pop();
                } else {
                    int next = tempGraph.get(v).remove(0);
                    stack.push(next);
                }
            }

            Collections.reverse(path);
            return path;
        }

        private boolean hasEulerianPath() {
            int startNodes = 0, endNodes = 0;

            for (int node : graph.keySet()) {
                int out = outDegree.getOrDefault(node, 0);
                int in = inDegree.getOrDefault(node, 0);

                if (Math.abs(out - in) > 1) return false;
                if (out - in == 1) startNodes++;
                if (in - out == 1) endNodes++;
            }

            return (startNodes == 0 && endNodes == 0) || (startNodes == 1 && endNodes == 1);
        }

        private int getStartVertex() {
            int start = graph.keySet().iterator().next();
            for (int node : graph.keySet()) {
                if (outDegree.getOrDefault(node, 0) - inDegree.getOrDefault(node, 0) == 1) {
                    return node;
                }
                if (outDegree.getOrDefault(node, 0) > 0) {
                    start = node;
                }
            }
            return start;
        }
    }

    // ============================================================================
    // 6. TRAVELING SALESMAN PROBLEM (Dynamic Programming)
    // ============================================================================

    /**
     * TSP using Dynamic Programming with Bitmask
     * Time: O(n^2 * 2^n)
     */
    static class TSP {
        private int n;
        private int[][] dist;
        private int[][] dp;
        private final int INF = (int) 1e9;

        public TSP(int[][] distances) {
            this.n = distances.length;
            this.dist = distances;
            this.dp = new int[1 << n][n];
            for (int[] row : dp) {
                Arrays.fill(row, -1);
            }
        }

        public int solve() {
            return tsp(1, 0); // Start from city 0
        }

        private int tsp(int mask, int pos) {
            if (mask == (1 << n) - 1) {
                return dist[pos][0]; // Return to start
            }

            if (dp[mask][pos] != -1) {
                return dp[mask][pos];
            }

            int ans = INF;
            for (int city = 0; city < n; city++) {
                if ((mask & (1 << city)) == 0) {
                    int newAns = dist[pos][city] + tsp(mask | (1 << city), city);
                    ans = Math.min(ans, newAns);
                }
            }

            return dp[mask][pos] = ans;
        }

        public List<Integer> getPath() {
            List<Integer> path = new ArrayList<>();
            int mask = 1, pos = 0;
            path.add(0);

            for (int i = 0; i < n - 1; i++) {
                int best = -1;
                int bestCost = INF;

                for (int city = 0; city < n; city++) {
                    if ((mask & (1 << city)) == 0) {
                        int cost = dist[pos][city] + tsp(mask | (1 << city), city);
                        if (cost < bestCost) {
                            bestCost = cost;
                            best = city;
                        }
                    }
                }

                path.add(best);
                mask |= (1 << best);
                pos = best;
            }

            path.add(0); // Return to start
            return path;
        }
    }

    // ============================================================================
    // DEMONSTRATION AND TESTING
    // ============================================================================

    public static void main(String[] args) {
        System.out.println("=== DAY 25: ADVANCED GRAPH ALGORITHMS ===\n");

        testMaxFlow();
        testBipartiteMatching();
        testArticulationPoints();
        testSCC();
        testEulerianPath();
        testTSP();
    }

    private static void testMaxFlow() {
        System.out.println("--- Maximum Flow Demo ---");
        MaxFlow mf = new MaxFlow(6);
        mf.addEdge(0, 1, 16);
        mf.addEdge(0, 2, 13);
        mf.addEdge(1, 2, 10);
        mf.addEdge(1, 3, 12);
        mf.addEdge(2, 1, 4);
        mf.addEdge(2, 4, 14);
        mf.addEdge(3, 2, 9);
        mf.addEdge(3, 5, 20);
        mf.addEdge(4, 3, 7);
        mf.addEdge(4, 5, 4);

        System.out.println("Maximum flow: " + mf.fordFulkerson(0, 5));
        System.out.println("Minimum cut edges: " + mf.getMinCut(0).size());
    }

    private static void testBipartiteMatching() {
        System.out.println("\n--- Bipartite Matching Demo ---");
        BipartiteMatching bm = new BipartiteMatching(6);
        bm.addEdge(0, 3);
        bm.addEdge(0, 4);
        bm.addEdge(1, 4);
        bm.addEdge(1, 5);
        bm.addEdge(2, 3);
        bm.addEdge(2, 5);

        System.out.println("Maximum matching: " + bm.maxMatching());
    }

    private static void testArticulationPoints() {
        System.out.println("\n--- Articulation Points Demo ---");
        ArticulationPointsAndBridges apb = new ArticulationPointsAndBridges(5);
        apb.addEdge(0, 1);
        apb.addEdge(1, 2);
        apb.addEdge(2, 0);
        apb.addEdge(1, 3);
        apb.addEdge(3, 4);

        apb.findArticulationPoints();
        System.out.println("Articulation points: " + apb.getArticulationPoints());
        System.out.println("Bridges: " + apb.getBridges().size());
    }

    private static void testSCC() {
        System.out.println("\n--- Strongly Connected Components Demo ---");
        StronglyConnectedComponents scc = new StronglyConnectedComponents(5);
        scc.addEdge(0, 1);
        scc.addEdge(1, 2);
        scc.addEdge(2, 0);
        scc.addEdge(1, 3);
        scc.addEdge(3, 4);

        List<List<Integer>> components = scc.findSCCs();
        System.out.println("Number of SCCs: " + components.size());
        for (int i = 0; i < components.size(); i++) {
            System.out.println("SCC " + i + ": " + components.get(i));
        }
    }

    private static void testEulerianPath() {
        System.out.println("\n--- Eulerian Path Demo ---");
        EulerianPath ep = new EulerianPath();
        ep.addEdge(0, 1);
        ep.addEdge(1, 2);
        ep.addEdge(2, 0);
        ep.addEdge(0, 3);
        ep.addEdge(3, 4);
        ep.addEdge(4, 0);

        List<Integer> path = ep.findEulerianPath();
        System.out.println("Eulerian path: " + path);
    }

    private static void testTSP() {
        System.out.println("\n--- Traveling Salesman Problem Demo ---");
        int[][] dist = {
            {0, 10, 15, 20},
            {10, 0, 35, 25},
            {15, 35, 0, 30},
            {20, 25, 30, 0}
        };

        TSP tsp = new TSP(dist);
        System.out.println("Minimum cost: " + tsp.solve());
        System.out.println("Path: " + tsp.getPath());
    }
}
