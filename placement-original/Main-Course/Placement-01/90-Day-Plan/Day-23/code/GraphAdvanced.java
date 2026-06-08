import java.util.*;

public class GraphAdvanced {

    public static List<Integer> kahnTopological(List<List<Integer>> adj) {
        int n = adj.size();
        int[] indeg = new int[n];
        for (int u=0;u<n;u++) for (int v: adj.get(u)) indeg[v]++;
        Queue<Integer> q = new LinkedList<>();
        for (int i=0;i<n;i++) if (indeg[i]==0) q.add(i);
        List<Integer> topo = new ArrayList<>();
        while (!q.isEmpty()) {
            int u = q.poll(); topo.add(u);
            for (int v : adj.get(u)) {
                indeg[v]--; if (indeg[v]==0) q.add(v);
            }
        }
        if (topo.size() != n) return Collections.emptyList(); // cycle detected
        return topo;
    }

    public static List<Integer> dfsTopological(List<List<Integer>> adj) {
        int n = adj.size();
        boolean[] visited = new boolean[n];
        Deque<Integer> stack = new ArrayDeque<>();
        for (int i=0;i<n;i++) if (!visited[i]) dfsTopoHelper(adj, i, visited, stack);
        List<Integer> topo = new ArrayList<>();
        while (!stack.isEmpty()) topo.add(stack.pop());
        return topo;
    }

    private static void dfsTopoHelper(List<List<Integer>> adj, int u, boolean[] visited, Deque<Integer> stack) {
        visited[u] = true;
        for (int v: adj.get(u)) if (!visited[v]) dfsTopoHelper(adj, v, visited, stack);
        stack.push(u);
    }

    public static List<List<Integer>> kosarajuSCC(List<List<Integer>> adj) {
        int n = adj.size();
        boolean[] visited = new boolean[n];
        Deque<Integer> order = new ArrayDeque<>();
        for (int i=0;i<n;i++) if (!visited[i]) dfsOrder(adj, i, visited, order);
        // transpose
        List<List<Integer>> tr = new ArrayList<>(); for (int i=0;i<n;i++) tr.add(new ArrayList<>());
        for (int u=0;u<n;u++) for (int v: adj.get(u)) tr.get(v).add(u);
        Arrays.fill(visited, false);
        List<List<Integer>> scc = new ArrayList<>();
        while (!order.isEmpty()) {
            int u = order.pop();
            if (visited[u]) continue;
            List<Integer> comp = new ArrayList<>();
            dfsCollect(tr, u, visited, comp);
            scc.add(comp);
        }
        return scc;
    }

    private static void dfsOrder(List<List<Integer>> adj, int u, boolean[] visited, Deque<Integer> order) {
        visited[u] = true;
        for (int v: adj.get(u)) if (!visited[v]) dfsOrder(adj, v, visited, order);
        order.push(u);
    }

    private static void dfsCollect(List<List<Integer>> tr, int u, boolean[] visited, List<Integer> comp) {
        visited[u] = true; comp.add(u);
        for (int v: tr.get(u)) if (!visited[v]) dfsCollect(tr, v, visited, comp);
    }

    // Bellman-Ford: returns distances or null if negative cycle detected
    public static int[] bellmanFord(List<int[]> edges, int n, int src) {
        int[] dist = new int[n]; Arrays.fill(dist, Integer.MAX_VALUE/2); dist[src] = 0;
        for (int i=0;i<n-1;i++) {
            boolean updated = false;
            for (int[] e : edges) {
                int u = e[0], v = e[1], w = e[2];
                if (dist[u] + w < dist[v]) { dist[v] = dist[u] + w; updated = true; }
            }
            if (!updated) break;
        }
        // check negative cycles
        for (int[] e: edges) if (dist[e[0]] + e[2] < dist[e[1]]) return null;
        return dist;
    }

    // Floyd-Warshall: all pairs shortest path
    public static int[][] floydWarshall(int[][] g) {
        int n = g.length; int[][] dist = new int[n][n];
        for (int i=0;i<n;i++) for (int j=0;j<n;j++) dist[i][j] = g[i][j];
        for (int k=0;k<n;k++) for (int i=0;i<n;i++) for (int j=0;j<n;j++) {
            dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
        }
        return dist;
    }

    public static void main(String[] args) {
        System.out.println("Day 23: Advanced Graphs - Demos");

        // Topological sort demo (DAG)
        List<List<Integer>> dag = new ArrayList<>(); for (int i=0;i<6;i++) dag.add(new ArrayList<>());
        dag.get(5).add(2); dag.get(5).add(0); dag.get(4).add(0); dag.get(4).add(1); dag.get(2).add(3); dag.get(3).add(1);
        List<List<Integer>> dagCopy = new ArrayList<>(); for (int i=0;i<dag.size();i++) dagCopy.add(new ArrayList<>(dag.get(i)));
        System.out.println("Kahn topological sort (DAG): " + kahnTopological(dagCopy));
        System.out.println("DFS topological sort (DAG): " + dfsTopological(dagCopy));

        // Cycle detection test - a small cycle
        dag.get(1).add(5); // add edge that introduces cycle
        List<Integer> topoAfterCycle = kahnTopological(dag);
        System.out.println("After introducing a cycle, Kahn returned size: " + topoAfterCycle.size());

        // Kosaraju SCC demo
        List<List<Integer>> g = new ArrayList<>(); for (int i=0;i<5;i++) g.add(new ArrayList<>());
        g.get(0).add(2); g.get(2).add(1); g.get(1).add(0); g.get(0).add(3); g.get(3).add(4);
        List<List<Integer>> sccs = kosarajuSCC(g);
        System.out.println("Kosaraju SCCs: " + sccs);

        // Bellman-Ford demo (negative weight handling)
        List<int[]> edges = new ArrayList<>();
        edges.add(new int[]{0,1,4}); edges.add(new int[]{0,2,5}); edges.add(new int[]{1,2,-3}); edges.add(new int[]{2,3,6}); edges.add(new int[]{3,1,-2});
        int[] bf = bellmanFord(edges, 4, 0);
        if (bf == null) System.out.println("Bellman-Ford detected negative cycle"); else System.out.println("Bellman-Ford distances: " + Arrays.toString(bf));

        // Floyd-Warshall demo
        int INF = 1000000;
        int[][] gmat = new int[][] {
            {0, 3, INF, 5},
            {2, 0, INF, 4},
            {INF, 1, 0, INF},
            {INF, INF, 2, 0}
        };
        int[][] allp = floydWarshall(gmat);
        System.out.println("Floyd-Warshall distances:");
        for (var row : allp) System.out.println(Arrays.toString(row));
        // CI/test mode
        if (args != null && args.length > 0) {
            for (String a : args) if ("--ci".equals(a) || "--test".equals(a)) {
                boolean ok = true; String failReason = "";
                List<Integer> expectedKahn = Arrays.asList(4,5,2,0,3,1);
                List<Integer> expectedDfs = Arrays.asList(5,4,2,3,1,0);
                List<Integer> actualKahn = kahnTopological(dagCopy);
                if (!actualKahn.equals(expectedKahn)) { ok = false; failReason += "KAHN;"; System.out.println("ACTUAL KAHN: " + actualKahn + " EXPECTED: " + expectedKahn); }
                List<Integer> actualDfs = dfsTopological(dagCopy);
                if (!actualDfs.equals(expectedDfs)) { ok = false; failReason += "DFS;"; System.out.println("ACTUAL DFS: " + actualDfs + " EXPECTED: " + expectedDfs); }
                // Kosaraju expected clusters - convert to sets
                Set<Set<Integer>> expectedSCC = new HashSet<>(); expectedSCC.add(new HashSet<>(Arrays.asList(0,1,2))); expectedSCC.add(new HashSet<>(Arrays.asList(3))); expectedSCC.add(new HashSet<>(Arrays.asList(4)));
                Set<Set<Integer>> actualSCC = new HashSet<>(); for (List<Integer> comp : sccs) actualSCC.add(new HashSet<>(comp));
                if (!actualSCC.equals(expectedSCC)) { ok = false; failReason += "SCC;"; System.out.println("ACTUAL SCC: " + actualSCC + " EXPECTED: " + expectedSCC); }
                int[] expectedBf = new int[]{0,4,1,7}; if (!Arrays.equals(bf, expectedBf)) { ok = false; failReason += "BF;"; System.out.println("ACTUAL BF: " + Arrays.toString(bf) + " EXPECTED: " + Arrays.toString(expectedBf)); }
                int[][] expectedFW = new int[][] {
                    {0,3,7,5},
                    {2,0,6,4},
                    {3,1,0,5},
                    {5,3,2,0}
                };
                if (allp.length != expectedFW.length) { ok = false; failReason += "FW_len;"; } else for (int i=0;i<allp.length;i++) if (!Arrays.equals(allp[i], expectedFW[i])) { ok = false; failReason += "FW@"+i+";"; System.out.println("ACTUAL FW row " + i + ": " + Arrays.toString(allp[i]) + " EXPECTED " + Arrays.toString(expectedFW[i])); }
                if (ok) { System.out.println("CI_OK"); System.exit(0);} else { System.out.println("CI_FAIL -> " + failReason); System.exit(1); }
            }
        }
    }
}
