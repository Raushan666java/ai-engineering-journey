import java.util.*;

public class AdvancedDPBasics {

    // TSP with bitmask DP on small N
    static int tsp(int[][] cost) {
        int n = cost.length;
        int full = (1 << n);
        int[][] dp = new int[full][n];
        for (int[] row : dp) Arrays.fill(row, Integer.MAX_VALUE / 2);
        dp[1][0] = 0; // start at node 0
        for (int mask = 1; mask < full; mask++) {
            for (int u = 0; u < n; u++) {
                if ((mask & (1 << u)) == 0) continue;
                int cur = dp[mask][u];
                if (cur >= Integer.MAX_VALUE / 4) continue;
                for (int v = 0; v < n; v++) {
                    if ((mask & (1 << v)) != 0) continue;
                    dp[mask | (1 << v)][v] = Math.min(dp[mask | (1 << v)][v], cur + cost[u][v]);
                }
            }
        }
        int best = Integer.MAX_VALUE;
        for (int u = 0; u < n; u++) best = Math.min(best, dp[full - 1][u] + cost[u][0]);
        return best;
    }

    // Convex Hull Trick (Monotonic Insert / Query): store lines in deque for min queries with increasing x
    static class Line { long m; long b; Line(long m, long b){this.m=m; this.b=b;} long eval(long x){return m*x + b;} }
    static class ConvexHullTrick {
        LinkedList<Line> dq = new LinkedList<>();
        boolean isBad(Line l1, Line l2, Line l3) {
            // returns true iff l2 is unnecessary between l1 and l3 for min queries; uses cross multiply to avoid doubles
            // (b3-b1)/(m1-m3) <= (b2-b1)/(m1-m2) when slopes m1>m2>m3
            // rearrange to avoid division
            return (l1.b - l3.b) * (l1.m - l2.m) <= (l1.b - l2.b) * (l1.m - l3.m);
        }
        void addLine(long m, long b) {
            Line nl = new Line(m, b);
            // Assumes slopes added in decreasing order
            while (dq.size() >= 2) {
                Line l2 = dq.removeLast(); Line l1 = dq.peekLast();
                if (!isBad(l1, l2, nl)) { dq.addLast(l2); break; }
            }
            dq.addLast(nl);
        }
        long query(long x) {
            // queries with non-decreasing x
            while (dq.size() >= 2 && dq.peekFirst().eval(x) >= dq.get(1).eval(x)) dq.removeFirst();
            return dq.peekFirst().eval(x);
        }
    }

    public static void main(String[] args) {
        boolean ci=false; if (args!=null) for (String a: args) if ("--ci".equals(a)||"--test".equals(a)) ci=true;
        // TSP example: 4 nodes classic example
        int[][] cost = new int[][]{
            {0,10,15,20},
            {10,0,35,25},
            {15,35,0,30},
            {20,25,30,0}
        };
        int tspBest = tsp(cost);
        System.out.println("TSP optimal cost: " + tspBest);

        // Convex hull trick example
        ConvexHullTrick cht = new ConvexHullTrick();
        // Add slopes in decreasing order for our isBad logic (1 > 0 > -1)
        cht.addLine(1, 1);
        cht.addLine(0, 3);
        cht.addLine(-1, 5);
        long[] queries = new long[]{0,2,5}; long[] expected = new long[]{1,3,0}; long[] out = new long[queries.length];
        for (int i=0;i<queries.length;i++) { out[i] = cht.query(queries[i]); }
        System.out.println("CHT queries: " + Arrays.toString(out));

        if (ci) {
            boolean ok = true;
            ok &= tspBest == 80; // known from this cost matrix
            ok &= out[0] == expected[0]; ok &= out[1] == expected[1]; ok &= out[2] == expected[2];
            if (ok) { System.out.println("CI_OK"); System.exit(0);} else { System.out.println("CI_FAIL"); System.exit(1); }
        }
    }
}
