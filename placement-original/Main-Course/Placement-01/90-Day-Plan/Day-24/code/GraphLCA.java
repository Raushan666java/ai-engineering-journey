import java.util.*;

public class GraphLCA {
    static class LCA {
        int n, LOG;
        List<List<Integer>> adj;
        int[][] up; int[] depth;

        LCA(int n) {
            this.n = n; LOG = 1; while ((1<<LOG) <= n) LOG++;
            adj = new ArrayList<>(); for (int i=0;i<n;i++) adj.add(new ArrayList<>());
            up = new int[LOG][n]; depth = new int[n];
        }

        void addEdge(int u, int v) { adj.get(u).add(v); adj.get(v).add(u); }
        void build(int root) { dfs(root, root); for (int k=1;k<LOG;k++) for (int v=0;v<n;v++) up[k][v] = up[k-1][up[k-1][v]]; }
        void dfs(int u, int p) { up[0][u] = p; for (int v : adj.get(u)) if (v!=p) { depth[v] = depth[u]+1; dfs(v, u); } }
        int lca(int a, int b) {
            if (depth[a] < depth[b]) { int t=a; a=b; b=t; }
            int diff = depth[a] - depth[b]; for (int k=0;k<LOG;k++) if ((diff & (1<<k)) != 0) a = up[k][a];
            if (a==b) return a;
            for (int k=LOG-1;k>=0;k--) if (up[k][a] != up[k][b]) { a = up[k][a]; b = up[k][b]; }
            return up[0][a];
        }
    }

    public static void main(String[] args) {
        int n = 9; LCA lca = new LCA(n);
        lca.addEdge(0,1); lca.addEdge(0,2); lca.addEdge(1,3); lca.addEdge(1,4); lca.addEdge(2,5); lca.addEdge(2,6); lca.addEdge(6,7); lca.addEdge(6,8);
        lca.build(0);
        int r1 = lca.lca(3,4), r2 = lca.lca(3,8), r3 = lca.lca(7,8);
        System.out.println("LCA(3,4) = " + r1 + " (expected 1)");
        System.out.println("LCA(3,8) = " + r2 + " (expected 0)");
        System.out.println("LCA(7,8) = " + r3 + " (expected 6)");
        // support CI/testing mode
        if (args != null && args.length > 0) {
            for (String a : args) if ("--ci".equals(a) || "--test".equals(a)) {
                boolean ok = (r1==1 && r2==0 && r3==6);
                if (ok) { System.out.println("CI_OK"); System.exit(0); } else { System.out.println("CI_FAIL"); System.exit(1); }
            }
        }
    }
}
