import java.util.*;

public class GraphTraversals {

    // BFS with layers: returns list of lists where each sublist is nodes at that distance
    public static List<List<Integer>> bfsLayers(List<List<Integer>> adj, int start) {
        int n = adj.size();
        boolean[] visited = new boolean[n];
        Queue<Integer> q = new LinkedList<>();
        List<List<Integer>> layers = new ArrayList<>();
        q.add(start); visited[start] = true;
        while (!q.isEmpty()) {
            int sz = q.size();
            List<Integer> layer = new ArrayList<>();
            for (int i = 0; i < sz; i++) {
                int u = q.poll(); layer.add(u);
                for (int v : adj.get(u)) if (!visited[v]) { visited[v] = true; q.add(v); }
            }
            layers.add(layer);
        }
        return layers;
    }

    // DFS iterative using stack (preorder traversal)
    public static List<Integer> dfsIterative(List<List<Integer>> adj, int start) {
        int n = adj.size();
        boolean[] visited = new boolean[n];
        List<Integer> order = new ArrayList<>();
        Deque<Integer> stack = new ArrayDeque<>();
        stack.push(start);
        while (!stack.isEmpty()) {
            int u = stack.pop();
            if (visited[u]) continue;
            visited[u] = true; order.add(u);
            // Push neighbors in reverse to maintain similar order as recursive
            List<Integer> neighbors = adj.get(u);
            for (int i = neighbors.size()-1; i >= 0; i--) stack.push(neighbors.get(i));
        }
        return order;
    }

    public static void main(String[] args) {
        List<List<Integer>> adj = new ArrayList<>();
        for (int i=0;i<6;i++) adj.add(new ArrayList<>());
        adj.get(0).add(1); adj.get(0).add(2);
        adj.get(1).add(3); adj.get(1).add(4);
        adj.get(2).add(4); adj.get(2).add(5);
        adj.get(3).add(4); adj.get(4).add(5);

        System.out.println("BFS layers from 0:");
        List<List<Integer>> layers = bfsLayers(adj, 0);
        for (int i = 0; i < layers.size(); i++) System.out.println("Layer " + i + ": " + layers.get(i));

        List<List<Integer>> actLayers = bfsLayers(adj, 0);
        List<Integer> actDfs = dfsIterative(adj, 0);
        System.out.println("DFS iterative order from 0: " + actDfs);
        if (args != null && args.length > 0) {
            for (String a : args) if ("--ci".equals(a) || "--test".equals(a)) {
                List<List<Integer>> expectedLayers = Arrays.asList(Arrays.asList(0), Arrays.asList(1,2), Arrays.asList(3,4,5));
                List<Integer> expectedDfs = Arrays.asList(0,1,3,4,5,2);
                boolean ok = actLayers.equals(expectedLayers) && actDfs.equals(expectedDfs);
                if (ok) { System.out.println("CI_OK"); System.exit(0);} else { System.out.println("CI_FAIL"); System.exit(1);}            }
        }
    }
}
