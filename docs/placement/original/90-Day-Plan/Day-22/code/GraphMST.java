import java.util.*;

public class GraphMST {

    static class Edge { int u, v, w; Edge(int u, int v, int w) { this.u = u; this.v = v; this.w = w; } }

    static class UnionFind {
        int[] parent, rank;
        UnionFind(int n) { parent = new int[n]; rank = new int[n]; for (int i=0;i<n;i++) parent[i]=i; }
        int find(int x) { if (parent[x]!=x) parent[x] = find(parent[x]); return parent[x]; }
        boolean union(int x, int y) { x = find(x); y = find(y); if (x==y) return false; if (rank[x] < rank[y]) parent[x] = y; else if (rank[y] < rank[x]) parent[y] = x; else { parent[y] = x; rank[x]++; } return true; }
    }

    // Kruskal's algorithm
    public static List<Edge> kruskal(int n, List<Edge> edges) {
        edges.sort(Comparator.comparingInt(e -> e.w));
        UnionFind uf = new UnionFind(n);
        List<Edge> mst = new ArrayList<>();
        for (Edge e : edges) {
            if (uf.union(e.u, e.v)) mst.add(e);
        }
        return mst;
    }

    public static void main(String[] args) {
        int n = 5;
        List<Edge> edges = new ArrayList<>();
        edges.add(new Edge(0,1,2));
        edges.add(new Edge(0,3,6));
        edges.add(new Edge(1,2,3));
        edges.add(new Edge(1,3,8));
        edges.add(new Edge(1,4,5));
        edges.add(new Edge(2,4,7));
        edges.add(new Edge(3,4,9));

        List<Edge> mst = kruskal(n, edges);
        System.out.println("Kruskal MST edges (u, v, w):");
        int total = 0;
        for (Edge e : mst) { System.out.println(e.u + " - " + e.v + " : " + e.w); total += e.w; }
        System.out.println("Total MST weight = " + total);
        // CI/test mode
        if (args != null && args.length > 0) {
            for (String a : args) if ("--ci".equals(a) || "--test".equals(a)) {
                if (total == 16) { System.out.println("CI_OK"); System.exit(0); } else { System.out.println("CI_FAIL"); System.exit(1); }
            }
        }
    }
}
