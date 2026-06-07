import java.util.*;

public class GraphBasics {

    static class Graph {
        int n;
        List<List<Integer>> adj;

        Graph(int n) {
            this.n = n;
            adj = new ArrayList<>();
            for (int i = 0; i < n; i++) adj.add(new ArrayList<>());
        }

        void addEdge(int u, int v) {
            adj.get(u).add(v);
            adj.get(v).add(u);
        }

        void printGraph() {
            for (int i = 0; i < n; i++) {
                System.out.print(i + ": ");
                for (int v : adj.get(i)) System.out.print(v + " ");
                System.out.println();
            }
        }
    }

    // BFS - breadth-first search (iterative)
    public static List<Integer> bfs(Graph g, int start) {
        boolean[] visited = new boolean[g.n];
        List<Integer> order = new ArrayList<>();
        Queue<Integer> q = new LinkedList<>();
        q.add(start); visited[start] = true;
        while (!q.isEmpty()) {
            int u = q.poll();
            order.add(u);
            for (int v : g.adj.get(u)) {
                if (!visited[v]) { visited[v] = true; q.add(v); }
            }
        }
        return order;
    }

    // DFS - recursive
    public static List<Integer> dfsRecursive(Graph g, int start) {
        boolean[] visited = new boolean[g.n];
        List<Integer> order = new ArrayList<>();
        dfsHelper(g, start, visited, order);
        return order;
    }

    private static void dfsHelper(Graph g, int u, boolean[] visited, List<Integer> order) {
        visited[u] = true;
        order.add(u);
        for (int v : g.adj.get(u)) {
            if (!visited[v]) dfsHelper(g, v, visited, order);
        }
    }

    public static void main(String[] args) {
        // Example undirected graph
        Graph g = new Graph(7);
        g.addEdge(0, 1);
        g.addEdge(0, 2);
        g.addEdge(1, 3);
        g.addEdge(2, 4);
        g.addEdge(3, 5);
        g.addEdge(4, 5);
        g.addEdge(5, 6);

        System.out.println("Graph adjacency list:");
        g.printGraph();

        System.out.println();
        System.out.println("BFS order starting from 0: " + bfs(g, 0));
        List<Integer> bfsOrder = bfs(g, 0);
        List<Integer> dfsOrder = dfsRecursive(g, 0);
        System.out.println("DFS order starting from 0: " + dfsOrder);
        if (args != null && args.length > 0) {
            for (String a : args) if ("--ci".equals(a) || "--test".equals(a)) {
                List<Integer> expectedBfs = Arrays.asList(0,1,2,3,4,5,6);
                List<Integer> expectedDfs = Arrays.asList(0,1,3,5,4,2,6);
                boolean ok = bfsOrder.equals(expectedBfs) && dfsOrder.equals(expectedDfs);
                if (ok) { System.out.println("CI_OK"); System.exit(0); } else { System.out.println("CI_FAIL"); System.exit(1); }
            }
        }
    }
}
