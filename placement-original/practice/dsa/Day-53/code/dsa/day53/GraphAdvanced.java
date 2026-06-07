package dsa.day53;

import java.util.*;

/**
 * Day 53: Advanced Graph Algorithms
 * 
 * Contents:
 *  - Dijkstra's shortest paths (weighted, non-negative edges)
 *  - Bellman-Ford (handles negative edges and detects negative cycles)
 *  - Topological sort (Kahn's algorithm)
 *  - Tarjan's SCC
 *  - Bridges and articulation points
 *  - Edmonds-Karp max flow (BFS-based Ford-Fulkerson)
 *  - Johnson's algorithm (all-pairs with reweighting using Bellman-Ford)
 *  - Utility graph builders and small examples
 * 
 * Each algorithm includes complexity notes and edge-case handling.
 * Quality: clear API, immutable input expectations, and deterministic outputs for tests.
 */
public class GraphAdvanced {

    // --------------------- Graph representations ---------------------
    // Use adjacency lists represented as Map<Integer, List<Edge>> for flexibility

    public static class Edge {
        public final int to;
        public final long weight; // use long to avoid overflow in some use-cases
        public Edge(int to, long weight) { this.to = to; this.weight = weight; }
        @Override public String toString() { return "->"+to+"("+weight+")"; }
    }

    /** Build an adjacency map from edge list */
    public static Map<Integer, List<Edge>> buildDirected(int n, int[][] edges) {
        Map<Integer, List<Edge>> g = new HashMap<>();
        for (int i = 0; i < n; i++) g.put(i, new ArrayList<>());
        for (int[] e : edges) {
            int u = e[0], v = e[1]; long w = e.length > 2 ? e[2] : 1;
            g.get(u).add(new Edge(v, w));
        }
        return g;
    }

    // --------------------- Dijkstra ---------------------
    // Time: O((V+E) log V) with binary heap

    public static long[] dijkstra(Map<Integer, List<Edge>> graph, int src) {
        int n = graph.size();
        long[] dist = new long[n];
        Arrays.fill(dist, Long.MAX_VALUE/4);
        dist[src] = 0;
        PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingLong(a -> a[1]));
        pq.offer(new int[]{src, 0});
        while (!pq.isEmpty()) {
            int[] cur = pq.poll(); int u = cur[0]; long d = cur[1];
            if (d != dist[u]) continue;
            for (Edge e : graph.getOrDefault(u, Collections.emptyList())) {
                if (dist[e.to] > d + e.weight) {
                    dist[e.to] = d + e.weight;
                    pq.offer(new int[]{e.to, (int)dist[e.to]});
                }
            }
        }
        return dist;
    }

    // --------------------- Bellman-Ford ---------------------
    // Time: O(V*E)
    public static class BFResult {
        public final long[] dist; public final boolean hasNegCycle;
        public BFResult(long[] dist, boolean hasNegCycle) { this.dist = dist; this.hasNegCycle = hasNegCycle; }
    }

    public static BFResult bellmanFord(int n, int[][] edges, int src) {
        long[] dist = new long[n];
        Arrays.fill(dist, Long.MAX_VALUE/4);
        dist[src] = 0;
        for (int i = 0; i < n - 1; i++) {
            boolean updated = false;
            for (int[] e : edges) {
                int u = e[0], v = e[1]; long w = e.length > 2 ? e[2] : 1;
                if (dist[u] + w < dist[v]) { dist[v] = dist[u] + w; updated = true; }
            }
            if (!updated) break;
        }
        // one more pass to detect negative cycles
        boolean negCycle = false;
        for (int[] e : edges) {
            int u = e[0], v = e[1]; long w = e.length > 2 ? e[2] : 1;
            if (dist[u] + w < dist[v]) { negCycle = true; break; }
        }
        return new BFResult(dist, negCycle);
    }

    // --------------------- Topological Sort (Kahn) ---------------------
    // Time: O(V+E)
    public static List<Integer> topoSort(int n, int[][] edges) {
        Map<Integer, List<Integer>> g = new HashMap<>();
        int[] indeg = new int[n];
        for (int i = 0; i < n; i++) g.put(i, new ArrayList<>());
        for (int[] e : edges) {
            int u = e[0], v = e[1]; g.get(u).add(v); indeg[v]++;
        }
        Deque<Integer> q = new ArrayDeque<>();
        for (int i = 0; i < n; i++) if (indeg[i] == 0) q.add(i);
        List<Integer> res = new ArrayList<>();
        while (!q.isEmpty()) {
            int u = q.poll(); res.add(u);
            for (int v : g.get(u)) { if (--indeg[v] == 0) q.add(v); }
        }
        if (res.size() != n) return Collections.emptyList(); // cycle => no topo
        return res;
    }

    // --------------------- Tarjan's SCC ---------------------
    // Time: O(V+E)
    public static List<List<Integer>> stronglyConnectedComponents(Map<Integer, List<Edge>> g) {
        int n = g.size();
        int time = 0; Map<Integer,Integer> disc = new HashMap<>(), low = new HashMap<>();
        Deque<Integer> st = new ArrayDeque<>(); Set<Integer> onStack = new HashSet<>();
        List<List<Integer>> sccs = new ArrayList<>();
        for (int v : g.keySet()) {
            if (!disc.containsKey(v)) tarjan(v, g, disc, low, st, onStack, sccs, new int[]{time});
        }
        return sccs;
    }

    private static void tarjan(int u, Map<Integer,List<Edge>> g, Map<Integer,Integer> disc, Map<Integer,Integer> low,
                               Deque<Integer> st, Set<Integer> onStack, List<List<Integer>> sccs, int[] timeRef) {
        disc.put(u, ++timeRef[0]); low.put(u, disc.get(u)); st.push(u); onStack.add(u);
        for (Edge e : g.getOrDefault(u, Collections.emptyList())) {
            int v = e.to;
            if (!disc.containsKey(v)) { tarjan(v, g, disc, low, st, onStack, sccs, timeRef); low.put(u, Math.min(low.get(u), low.get(v))); }
            else if (onStack.contains(v)) low.put(u, Math.min(low.get(u), disc.get(v)));
        }
        if (low.get(u).equals(disc.get(u))) {
            List<Integer> comp = new ArrayList<>(); int w;
            do { w = st.pop(); onStack.remove(w); comp.add(w); } while (w != u);
            sccs.add(comp);
        }
    }

    // --------------------- Bridges & Articulation Points ---------------------
    // Time: O(V+E)
    public static class CutResult { public final List<int[]> bridges; public final Set<Integer> articulationPoints; public CutResult(List<int[]> b, Set<Integer> a) { bridges = b; articulationPoints = a; }}
    public static CutResult findBridgesAndArticulation(int n, int[][] edges) {
        Map<Integer,List<Integer>> g = new HashMap<>();
        for (int i = 0; i < n; i++) g.put(i, new ArrayList<>());
        for (int[] e : edges) { int u=e[0], v=e[1]; g.get(u).add(v); g.get(v).add(u); }
        int time = 0; int[] disc = new int[n], low = new int[n], parent = new int[n]; Arrays.fill(disc, -1); Arrays.fill(parent, -1);
        List<int[]> bridges = new ArrayList<>(); Set<Integer> aps = new HashSet<>();
        for (int i=0;i<n;i++) if (disc[i]==-1) dfsCut(i, g, disc, low, parent, bridges, aps, new int[]{time});
        return new CutResult(bridges, aps);
    }

    private static void dfsCut(int u, Map<Integer,List<Integer>> g, int[] disc, int[] low, int[] parent, List<int[]> bridges, Set<Integer> aps, int[] timeRef) {
        disc[u] = low[u] = ++timeRef[0]; int children = 0;
        for (int v : g.get(u)) {
            if (disc[v] == -1) { children++; parent[v] = u; dfsCut(v, g, disc, low, parent, bridges, aps, timeRef); low[u] = Math.min(low[u], low[v]);
                if (low[v] > disc[u]) bridges.add(new int[]{u, v});
                if (parent[u] == -1 && children > 1) aps.add(u);
                if (parent[u] != -1 && low[v] >= disc[u]) aps.add(u);
            } else if (v != parent[u]) low[u] = Math.min(low[u], disc[v]);
        }
    }

    // --------------------- Edmonds-Karp (Max Flow) ---------------------
    // Time: O(V * E^2) but works well for moderate graphs in tests
    public static long maxFlow(int n, int[][] capacities, int s, int t) {
        long[][] cap = new long[n][n]; for (int[] e: capacities) cap[e[0]][e[1]] = e[2];
        long flow = 0;
        while (true) {
            int[] parent = new int[n]; Arrays.fill(parent, -1); parent[s] = -2;
            long[] mcap = new long[n]; mcap[s] = Long.MAX_VALUE/4;
            Deque<Integer> q = new ArrayDeque<>(); q.add(s);
            while (!q.isEmpty()) {
                int u = q.poll();
                for (int v=0; v<n; v++) {
                    if (parent[v] == -1 && cap[u][v] > 0) {
                        parent[v] = u; mcap[v] = Math.min(mcap[u], cap[u][v]);
                        if (v == t) break; q.add(v);
                    }
                }
            }
            if (parent[t] == -1) break;
            long bottleneck = mcap[t];
            flow += bottleneck;
            int v = t; while (v != s) { int u = parent[v]; cap[u][v] -= bottleneck; cap[v][u] += bottleneck; v = u; }
        }
        return flow;
    }

    // --------------------- Johnson's Algorithm (All-pairs shortest paths) ---------------------
    // Uses Bellman-Ford to reweight, then runs Dijkstra from each node.
    // Time: O(V*E + V * (E log V))
    public static long[][] johnson(int n, int[][] edges) {
        // first convert to edge list for BF
        int m = edges.length;
        int[][] augmented = new int[m + n][3]; System.arraycopy(edges, 0, augmented, 0, m);
        int idx = m;
        // add new source s = n connecting to all nodes with weight 0
        for (int v=0; v<n; v++) augmented[idx++] = new int[]{n, v, 0};
        BFResult bf = bellmanFord(n+1, augmented, n);
        if (bf.hasNegCycle) return new long[0][]; // signal failure
        long[] h = bf.dist;
        // reweight edges
        Map<Integer, List<Edge>> graph = new HashMap<>(); for (int i=0;i<n;i++) graph.put(i, new ArrayList<>());
        for (int[] e : edges) {
            int u = e[0], v = e[1]; long w = e[2]; long nw = w + h[u] - h[v]; graph.get(u).add(new Edge(v, nw));
        }
        long[][] all = new long[n][n];
        for (int u = 0; u < n; u++) {
            long[] dist = dijkstra(graph, u);
            for (int v = 0; v < n; v++) all[u][v] = (dist[v] >= Long.MAX_VALUE/8) ? Long.MAX_VALUE : dist[v] - h[u] + h[v];
        }
        return all;
    }

    // Small helper: readable adjacency print
    public static String graphToString(Map<Integer,List<Edge>> g) {
        StringBuilder sb = new StringBuilder();
        for (int u : g.keySet()) { sb.append(u).append(": ").append(g.get(u)).append("\n"); }
        return sb.toString();
    }

}
