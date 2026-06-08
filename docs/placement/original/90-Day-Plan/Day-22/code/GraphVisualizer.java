import java.util.*;

public class GraphVisualizer {

    public static void main(String[] args) {
        boolean quiet = false; boolean ci = false;
        for (String a : args) if (a.equals("--quiet") || a.equals("-q")) quiet = true;
        for (String a : args) if (a.equals("--ci") || a.equals("--test")) ci = true;

        // Small graph for visual demo
        List<List<Integer>> adj = new ArrayList<>();
        for (int i=0;i<6;i++) adj.add(new ArrayList<>());
        adj.get(0).add(1); adj.get(0).add(2);
        adj.get(1).add(3); adj.get(1).add(4);
        adj.get(2).add(4); adj.get(2).add(5);
        adj.get(3).add(4); adj.get(4).add(5);

        if (!quiet) System.out.println("GraphVisualizer: adjacency list: ");
        if (!quiet) for (int i=0;i<adj.size();i++) System.out.println(i + ": " + adj.get(i));

        if (!quiet) System.out.println("\nRunning BFS layers from 0:");
        List<List<Integer>> layers = GraphTraversals.bfsLayers(adj, 0);
        if (!quiet) for (int i = 0; i < layers.size(); i++) System.out.println("Layer " + i + ": " + layers.get(i));
        else System.out.println("BFS layers: " + layers);

        if (!quiet) System.out.println("\nRunning iterative DFS from 0:");
        List<Integer> order = GraphTraversals.dfsIterative(adj, 0);
        System.out.println("DFS order: " + order);

        if (!quiet) System.out.println("\nRunning Dijkstra (weighted graph demo):");
        int[] dist = GraphShortestPaths.dijkstra(makeWeightedAdj(), 0);
        System.out.println("Dijkstra distances from node 0: " + Arrays.toString(dist));

        if (!quiet) System.out.println("\nRunning Kruskal MST demo:");
        // Build the same edges as GraphMST and call kruskal directly to avoid process exits
        int n = 5; List<GraphMST.Edge> edges = new ArrayList<>();
        edges.add(new GraphMST.Edge(0,1,2));
        edges.add(new GraphMST.Edge(0,3,6));
        edges.add(new GraphMST.Edge(1,2,3));
        edges.add(new GraphMST.Edge(1,3,8));
        edges.add(new GraphMST.Edge(1,4,5));
        edges.add(new GraphMST.Edge(2,4,7));
        edges.add(new GraphMST.Edge(3,4,9));
        List<GraphMST.Edge> mst = GraphMST.kruskal(n, edges);
        int total = 0; for (GraphMST.Edge e : mst) total += e.w; System.out.println("Total MST weight = " + total);
        if (ci) { if (total==16 && Arrays.equals(dist, new int[]{0,7,9,20,26,11})) { System.out.println("CI_OK"); System.exit(0); } else { System.out.println("CI_FAIL"); System.exit(1); } }
    }

    private static List<List<GraphShortestPaths.Edge>> makeWeightedAdj() {
        int n = 6; List<List<GraphShortestPaths.Edge>> adj = new ArrayList<>();
        for (int i=0;i<n;i++) adj.add(new ArrayList<>());
        adj.get(0).add(new GraphShortestPaths.Edge(1, 7));
        adj.get(0).add(new GraphShortestPaths.Edge(2, 9));
        adj.get(0).add(new GraphShortestPaths.Edge(5, 14));
        adj.get(1).add(new GraphShortestPaths.Edge(2, 10));
        adj.get(1).add(new GraphShortestPaths.Edge(3, 15));
        adj.get(2).add(new GraphShortestPaths.Edge(3, 11));
        adj.get(2).add(new GraphShortestPaths.Edge(5, 2));
        adj.get(3).add(new GraphShortestPaths.Edge(4, 6));
        adj.get(4).add(new GraphShortestPaths.Edge(5, 9));
        return adj;
    }
}
