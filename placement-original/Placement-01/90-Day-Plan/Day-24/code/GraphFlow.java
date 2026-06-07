import java.util.*;

public class GraphFlow {
    static class Edge { int to; int capacity; int rev; Edge(int to, int c, int rev) { this.to = to; this.capacity = c; this.rev = rev; } }
    static class MaxFlowEK {
        List<List<Edge>> graph; int n;
        MaxFlowEK(int n) { this.n = n; graph = new ArrayList<>(); for (int i=0;i<n;i++) graph.add(new ArrayList<>()); }
        void addEdge(int u, int v, int cap) {
            Edge a = new Edge(v, cap, graph.get(v).size());
            Edge b = new Edge(u, 0, graph.get(u).size());
            graph.get(u).add(a); graph.get(v).add(b);
        }
        int bfsLevel(int s, int t, int[] level) {
            Arrays.fill(level, -1); level[s] = 0;
            Queue<Integer> q = new LinkedList<>(); q.add(s);
            while (!q.isEmpty()) {
                int u = q.poll();
                for (Edge e : graph.get(u)) if (level[e.to] < 0 && e.capacity > 0) { level[e.to] = level[u] + 1; q.add(e.to);} }
            return level[t];
        }
        int maxFlow(int s, int t) {
            int flow = 0;
            int[] level = new int[n];
            while (bfsLevel(s, t, level) >= 0) {
                int f; int[] ptr = new int[n];
                while ((f = sendFlow(s, t, Integer.MAX_VALUE, ptr, level)) > 0) flow += f;
            }
            return flow;
        }
        int sendFlow(int u, int t, int flow, int[] ptr, int[] level) {
            if (u == t) return flow;
            for (int i = ptr[u]; i < graph.get(u).size(); i++, ptr[u]++) {
                Edge e = graph.get(u).get(i);
                if (e.capacity > 0 && level[e.to] == level[u] + 1) {
                    int curr = Math.min(flow, e.capacity);
                    int temp = sendFlow(e.to, t, curr, ptr, level);
                    if (temp > 0) { e.capacity -= temp; graph.get(e.to).get(e.rev).capacity += temp; return temp; }
                }
            }
            return 0;
        }
    }

    public static void main(String[] args) {
        // Simple example (same as classic Edmonds-Karp / Dinic) 6 nodes 0..5
        MaxFlowEK mf = new MaxFlowEK(6);
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
        int flow = mf.maxFlow(0, 5);
        System.out.println("Max flow (0 -> 5) = " + flow + " (expected 23)");
        if (args != null && args.length > 0) {
            for (String a : args) if ("--ci".equals(a) || "--test".equals(a)) {
                if (flow == 23) { System.out.println("CI_OK"); System.exit(0); } else { System.out.println("CI_FAIL"); System.exit(1); }
            }
        }
    }
}
