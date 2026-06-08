import java.util.*;

public class GraphTarjan {
    static int time = 0;
    public static List<int[]> findBridges(List<List<Integer>> adj) {
        int n = adj.size();
        boolean[] visited = new boolean[n];
        int[] disc = new int[n], low = new int[n];
        List<int[]> bridges = new ArrayList<>();
        for (int i=0;i<n;i++) if (!visited[i]) dfs(adj, i, -1, visited, disc, low, bridges);
        return bridges;
    }

    private static void dfs(List<List<Integer>> adj, int u, int parent, boolean[] visited, int[] disc, int[] low, List<int[]> bridges) {
        visited[u] = true; disc[u] = low[u] = ++time;
        for (int v: adj.get(u)) {
            if (v == parent) continue;
            if (!visited[v]) {
                dfs(adj, v, u, visited, disc, low, bridges);
                low[u] = Math.min(low[u], low[v]);
                if (low[v] > disc[u]) bridges.add(new int[]{u, v});
            } else {
                low[u] = Math.min(low[u], disc[v]);
            }
        }
    }

    // Articulation points
    public static Set<Integer> findArticulationPoints(List<List<Integer>> adj) {
        int n = adj.size(); boolean[] visited = new boolean[n]; int[] disc = new int[n], low = new int[n];
        Set<Integer> art = new HashSet<>(); int[] parent = new int[n]; Arrays.fill(parent, -1); time = 0;
        for (int i=0;i<n;i++) if (!visited[i]) apDfs(adj, i, visited, disc, low, parent, art);
        return art;
    }

    private static void apDfs(List<List<Integer>> adj, int u, boolean[] visited, int[] disc, int[] low, int[] parent, Set<Integer> art) {
        visited[u] = true; disc[u] = low[u] = ++time; int children = 0;
        for (int v: adj.get(u)) {
            if (!visited[v]) {
                children++; parent[v] = u; apDfs(adj, v, visited, disc, low, parent, art);
                low[u] = Math.min(low[u], low[v]);
                if (parent[u] == -1 && children > 1) art.add(u);
                if (parent[u] != -1 && low[v] >= disc[u]) art.add(u);
            } else if (v != parent[u]) low[u] = Math.min(low[u], disc[v]);
        }
    }

    public static void main(String[] args) {
        List<List<Integer>> adj = new ArrayList<>(); for (int i=0;i<5;i++) adj.add(new ArrayList<>());
        adj.get(0).add(1); adj.get(1).add(0);
        adj.get(1).add(2); adj.get(2).add(1);
        adj.get(2).add(3); adj.get(3).add(2);
        adj.get(2).add(4); adj.get(4).add(2);
        // Bridges: 2-3, 2-4; articulation points: 2
        List<int[]> bridges = findBridges(adj);
        Set<Integer> art = findArticulationPoints(adj);
        System.out.println("Bridges: " + Arrays.deepToString(bridges.toArray()));
        System.out.println("Articulation points: " + art);
        if (args != null && args.length > 0) {
            for (String a : args) if ("--ci".equals(a) || "--test".equals(a)) {
                Set<String> actualBridges = new HashSet<>();
                for (int[] b : bridges) { int x=b[0], y=b[1]; if (x>y) { int t=x;x=y;y=t; } actualBridges.add(x+":"+y); }
                Set<String> expectedBridges = new HashSet<>(); expectedBridges.add("0:1"); expectedBridges.add("1:2"); expectedBridges.add("2:3"); expectedBridges.add("2:4");
                Set<Integer> expectedArt = new HashSet<>(); expectedArt.add(1); expectedArt.add(2);
                boolean ok = actualBridges.equals(expectedBridges) && art.equals(expectedArt);
                if (ok) { System.out.println("CI_OK"); System.exit(0);} else {
                    System.out.println("CI_FAIL -> bridges=" + actualBridges + " expected=" + expectedBridges + " art=" + art + " expectedArt=" + expectedArt);
                    System.exit(1);
                }            }
        }
    }
}
