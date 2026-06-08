import java.util.*;

public class GraphShortestPaths {

    static class Edge { int to; int weight; Edge(int to, int weight) { this.to = to; this.weight = weight; } }

    public static int[] dijkstra(List<List<Edge>> adj, int src) {
        int n = adj.size();
        int[] dist = new int[n]; Arrays.fill(dist, Integer.MAX_VALUE); dist[src] = 0;
        PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a[0]));
        pq.add(new int[]{0, src});
        while (!pq.isEmpty()) {
            int[] top = pq.poll(); int d = top[0], u = top[1];
            if (d > dist[u]) continue;
            for (Edge e : adj.get(u)) {
                if (dist[e.to] > dist[u] + e.weight) {
                    dist[e.to] = dist[u] + e.weight;
                    pq.add(new int[]{dist[e.to], e.to});
                }
            }
        }
        return dist;
    }

    public static void main(String[] args) {
        int n = 6;
        List<List<Edge>> adj = new ArrayList<>();
        for (int i=0;i<n;i++) adj.add(new ArrayList<>());
        // build weighted directed graph
        adj.get(0).add(new Edge(1, 7));
        adj.get(0).add(new Edge(2, 9));
        adj.get(0).add(new Edge(5, 14));
        adj.get(1).add(new Edge(2, 10));
        adj.get(1).add(new Edge(3, 15));
        adj.get(2).add(new Edge(3, 11));
        adj.get(2).add(new Edge(5, 2));
        adj.get(3).add(new Edge(4, 6));
        adj.get(4).add(new Edge(5, 9));

        int[] dist = dijkstra(adj, 0);
        System.out.println("Dijkstra distances from 0: " + Arrays.toString(dist));
        // support CI mode
        if (args != null && args.length > 0) {
            for (String a : args) if ("--ci".equals(a) || "--test".equals(a)) {
                int[] expected = new int[]{0,7,9,20,26,11};
                boolean ok = Arrays.equals(dist, expected);
                if (ok) { System.out.println("CI_OK"); System.exit(0);} else { System.out.println("CI_FAIL"); System.exit(1); }
            }
        }
    }
}
