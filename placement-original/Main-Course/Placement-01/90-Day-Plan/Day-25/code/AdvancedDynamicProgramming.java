/**
 * DAY 25 - ADVANCED DYNAMIC PROGRAMMING - COMPLETE GUIDE
 * 
 * Topics Covered:
 * 1. Bitmask DP (Traveling Salesman, Assignment Problem)
 * 2. Digit DP (Count numbers with properties)
 * 3. DP on Trees (Tree DP)
 * 4. DP Optimization (Convex Hull Trick, Divide & Conquer)
 * 5. Broken Profile DP (Tiling Problems)
 * 6. SOS (Sum over Subsets) DP
 * 7. DP with Matrix Exponentiation
 * 8. Probability DP
 * 9. Game Theory DP (Nim, Sprague-Grundy)
 * 10. Advanced State DP
 * 
 * Production-ready implementations for competitive programming
 */

import java.util.*;

public class AdvancedDynamicProgramming {

    // ============================================================================
    // 1. BITMASK DP - ADVANCED PROBLEMS
    // ============================================================================

    /**
     * Assignment Problem using Bitmask DP
     * Assign n tasks to n people with minimum cost
     * Time: O(n * 2^n)
     */
    static class AssignmentProblem {
        private int[][] cost;
        private int n;
        private Integer[] dp;

        public AssignmentProblem(int[][] cost) {
            this.cost = cost;
            this.n = cost.length;
            this.dp = new Integer[1 << n];
        }

        public int minCost() {
            return solve(0, 0);
        }

        private int solve(int mask, int person) {
            if (person == n) {
                return 0;
            }

            if (dp[mask] != null) {
                return dp[mask];
            }

            int ans = Integer.MAX_VALUE;
            for (int task = 0; task < n; task++) {
                if ((mask & (1 << task)) == 0) {
                    ans = Math.min(ans, cost[person][task] + 
                                   solve(mask | (1 << task), person + 1));
                }
            }

            return dp[mask] = ans;
        }

        // Get the actual assignment
        public int[] getAssignment() {
            int[] assignment = new int[n];
            int mask = 0;

            for (int person = 0; person < n; person++) {
                int best = -1;
                int bestCost = Integer.MAX_VALUE;

                for (int task = 0; task < n; task++) {
                    if ((mask & (1 << task)) == 0) {
                        int totalCost = cost[person][task] + 
                                       solve(mask | (1 << task), person + 1);
                        if (totalCost < bestCost) {
                            bestCost = totalCost;
                            best = task;
                        }
                    }
                }

                assignment[person] = best;
                mask |= (1 << best);
            }

            return assignment;
        }
    }

    /**
     * Hamiltonian Path Count using Bitmask DP
     * Time: O(n^2 * 2^n)
     */
    static class HamiltonianPath {
        private boolean[][] graph;
        private int n;
        private long[][] dp;

        public HamiltonianPath(boolean[][] graph) {
            this.graph = graph;
            this.n = graph.length;
            this.dp = new long[1 << n][n];
            for (long[] row : dp) {
                Arrays.fill(row, -1);
            }
        }

        public long countPaths(int start, int end) {
            return solve(1 << start, start, end);
        }

        private long solve(int mask, int pos, int end) {
            if (pos == end && mask == (1 << n) - 1) {
                return 1;
            }

            if (dp[mask][pos] != -1) {
                return dp[mask][pos];
            }

            long count = 0;
            for (int next = 0; next < n; next++) {
                if (graph[pos][next] && (mask & (1 << next)) == 0) {
                    count += solve(mask | (1 << next), next, end);
                }
            }

            return dp[mask][pos] = count;
        }
    }

    // ============================================================================
    // 2. DIGIT DP - COUNT NUMBERS WITH PROPERTIES
    // ============================================================================

    /**
     * Digit DP Template
     * Count numbers in range [L, R] with specific properties
     */
    static class DigitDP {
        
        // Count numbers with sum of digits equal to target
        public static long countWithDigitSum(long num, int targetSum) {
            String s = String.valueOf(num);
            Long[][][] dp = new Long[s.length()][targetSum + 1][2];
            return solve(s, 0, 0, targetSum, true, dp);
        }

        private static long solve(String num, int pos, int sum, int targetSum, 
                                 boolean tight, Long[][][] dp) {
            if (pos == num.length()) {
                return sum == targetSum ? 1 : 0;
            }

            int tightVal = tight ? 1 : 0;
            if (dp[pos][sum][tightVal] != null) {
                return dp[pos][sum][tightVal];
            }

            int limit = tight ? (num.charAt(pos) - '0') : 9;
            long count = 0;

            for (int digit = 0; digit <= limit; digit++) {
                if (sum + digit <= targetSum) {
                    count += solve(num, pos + 1, sum + digit, targetSum,
                                  tight && (digit == limit), dp);
                }
            }

            return dp[pos][sum][tightVal] = count;
        }

        // Count numbers with no consecutive equal digits
        public static long countNoConsecutive(long num) {
            String s = String.valueOf(num);
            Long[][][] dp = new Long[s.length()][10][2];
            return solveNoConsecutive(s, 0, -1, true, dp);
        }

        private static long solveNoConsecutive(String num, int pos, int prev,
                                               boolean tight, Long[][][] dp) {
            if (pos == num.length()) {
                return 1;
            }

            int tightVal = tight ? 1 : 0;
            if (prev != -1 && dp[pos][prev][tightVal] != null) {
                return dp[pos][prev][tightVal];
            }

            int limit = tight ? (num.charAt(pos) - '0') : 9;
            long count = 0;

            for (int digit = 0; digit <= limit; digit++) {
                if (digit != prev) {
                    count += solveNoConsecutive(num, pos + 1, digit,
                                               tight && (digit == limit), dp);
                }
            }

            if (prev != -1) {
                dp[pos][prev][tightVal] = count;
            }
            return count;
        }

        // Count numbers divisible by K with digit sum divisible by M
        public static long countDivisible(long num, int k, int m) {
            String s = String.valueOf(num);
            Long[][][][] dp = new Long[s.length()][k][m][2];
            return solveDivisible(s, 0, 0, 0, k, m, true, dp);
        }

        private static long solveDivisible(String num, int pos, int modK, int modM,
                                          int k, int m, boolean tight, Long[][][][] dp) {
            if (pos == num.length()) {
                return (modK == 0 && modM == 0) ? 1 : 0;
            }

            int tightVal = tight ? 1 : 0;
            if (dp[pos][modK][modM][tightVal] != null) {
                return dp[pos][modK][modM][tightVal];
            }

            int limit = tight ? (num.charAt(pos) - '0') : 9;
            long count = 0;

            for (int digit = 0; digit <= limit; digit++) {
                int newModK = (modK * 10 + digit) % k;
                int newModM = (modM + digit) % m;
                count += solveDivisible(num, pos + 1, newModK, newModM, k, m,
                                       tight && (digit == limit), dp);
            }

            return dp[pos][modK][modM][tightVal] = count;
        }
    }

    // ============================================================================
    // 3. DP ON TREES
    // ============================================================================

    /**
     * Tree DP for various problems
     */
    static class TreeDP {
        private List<Integer>[] tree;
        private int[] dp;
        private int[] values;

        @SuppressWarnings("unchecked")
        public TreeDP(int n) {
            tree = new List[n];
            for (int i = 0; i < n; i++) {
                tree[i] = new ArrayList<>();
            }
            dp = new int[n];
            values = new int[n];
        }

        public void addEdge(int u, int v) {
            tree[u].add(v);
            tree[v].add(u);
        }

        public void setValue(int node, int value) {
            values[node] = value;
        }

        // Maximum Independent Set in Tree
        public int maxIndependentSet(int root) {
            return dfsIndependentSet(root, -1);
        }

        private int dfsIndependentSet(int node, int parent) {
            int include = values[node];
            int exclude = 0;

            for (int child : tree[node]) {
                if (child != parent) {
                    // If we include current node, skip children
                    for (int grandchild : tree[child]) {
                        if (grandchild != node) {
                            include += dfsIndependentSet(grandchild, child);
                        }
                    }
                    // If we exclude current node, include children
                    exclude += dfsIndependentSet(child, node);
                }
            }

            return Math.max(include, exclude);
        }

        // Tree Diameter using DP
        private int diameter = 0;

        public int treeDiameter(int root) {
            diameter = 0;
            dfsHeight(root, -1);
            return diameter;
        }

        private int dfsHeight(int node, int parent) {
            int max1 = 0, max2 = 0;

            for (int child : tree[node]) {
                if (child != parent) {
                    int height = dfsHeight(child, node);
                    if (height > max1) {
                        max2 = max1;
                        max1 = height;
                    } else if (height > max2) {
                        max2 = height;
                    }
                }
            }

            diameter = Math.max(diameter, max1 + max2);
            return max1 + 1;
        }

        // Subtree Sum and Queries
        private long[] subtreeSum;

        public long[] getSubtreeSums(int root) {
            subtreeSum = new long[tree.length];
            dfsSubtreeSum(root, -1);
            return subtreeSum;
        }

        private long dfsSubtreeSum(int node, int parent) {
            long sum = values[node];
            for (int child : tree[node]) {
                if (child != parent) {
                    sum += dfsSubtreeSum(child, node);
                }
            }
            return subtreeSum[node] = sum;
        }
    }

    // ============================================================================
    // 4. SOS (SUM OVER SUBSETS) DP
    // ============================================================================

    /**
     * Sum over Subsets DP
     * Time: O(n * 2^n)
     */
    static class SumOverSubsets {
        
        // For each mask, calculate sum over all its subsets
        public static long[] sosDP(long[] arr) {
            int n = arr.length;
            int logN = Integer.bitCount(n - 1) + 1;
            long[] dp = arr.clone();

            for (int i = 0; i < logN; i++) {
                for (int mask = 0; mask < n; mask++) {
                    if ((mask & (1 << i)) != 0) {
                        dp[mask] += dp[mask ^ (1 << i)];
                    }
                }
            }

            return dp;
        }

        // Count pairs with AND equal to 0
        public static long countZeroAndPairs(int[] arr) {
            int maxVal = 0;
            for (int x : arr) maxVal = Math.max(maxVal, x);
            
            int bits = Integer.bitCount(maxVal - 1) + 1;
            int size = 1 << bits;
            long[] freq = new long[size];

            for (int x : arr) {
                freq[x]++;
            }

            long[] dp = sosDP(freq);
            long count = 0;

            for (int x : arr) {
                int complement = (size - 1) ^ x;
                count += dp[complement];
            }

            return count / 2;
        }

        // Maximum XOR subset
        public static int maxXorSubset(int[] arr) {
            int maxXor = 0;
            List<Integer> basis = new ArrayList<>();

            for (int num : arr) {
                int cur = num;
                for (int b : basis) {
                    cur = Math.min(cur, cur ^ b);
                }
                if (cur != 0) {
                    basis.add(cur);
                    maxXor ^= cur;
                }
            }

            return maxXor;
        }
    }

    // ============================================================================
    // 5. CONVEX HULL TRICK (CHT)
    // ============================================================================

    /**
     * Convex Hull Trick for DP Optimization
     * Used when DP transition is of form: dp[i] = min(dp[j] + b[j] * a[i])
     */
    static class ConvexHullTrick {
        static class Line {
            long m, c;
            Line(long m, long c) {
                this.m = m;
                this.c = c;
            }
            
            long eval(long x) {
                return m * x + c;
            }
            
            double intersectX(Line other) {
                return (double)(other.c - c) / (m - other.m);
            }
        }

        private Deque<Line> lines = new ArrayDeque<>();

        // Add line with decreasing slopes (for minimization)
        public void addLine(long m, long c) {
            Line newLine = new Line(m, c);
            
            while (lines.size() >= 2) {
                Line last = lines.pollLast();
                Line secondLast = lines.peekLast();
                
                if (secondLast.intersectX(newLine) < secondLast.intersectX(last)) {
                    break;
                }
            }
            
            lines.addLast(newLine);
        }

        // Query minimum value at x (for increasing x)
        public long query(long x) {
            while (lines.size() >= 2) {
                Line first = lines.peekFirst();
                Line second = lines.get(1);
                
                if (first.eval(x) <= second.eval(x)) {
                    break;
                }
                lines.pollFirst();
            }
            
            return lines.peekFirst().eval(x);
        }

        // Example: Minimum cost to build factories
        public static long minFactoryCost(int[] positions, int[] costs) {
            int n = positions.length;
            long[] dp = new long[n];
            ConvexHullTrick cht = new ConvexHullTrick();
            
            cht.addLine(-2L * positions[0], 
                       (long)positions[0] * positions[0] + costs[0]);
            
            for (int i = 1; i < n; i++) {
                dp[i] = cht.query(positions[i]) + 
                       (long)positions[i] * positions[i];
                cht.addLine(-2L * positions[i], 
                           dp[i] + (long)positions[i] * positions[i] + costs[i]);
            }
            
            return dp[n - 1];
        }
    }

    // ============================================================================
    // 6. BROKEN PROFILE DP (TILING PROBLEMS)
    // ============================================================================

    /**
     * Count ways to tile n x m board with 1 x 2 and 2 x 1 tiles
     */
    static class TilingDP {
        private long[][] dp;
        private int n, m;

        public TilingDP(int n, int m) {
            this.n = n;
            this.m = m;
            this.dp = new long[m + 1][1 << n];
            for (long[] row : dp) {
                Arrays.fill(row, -1);
            }
        }

        public long countWays() {
            return solve(0, 0);
        }

        private long solve(int col, int mask) {
            if (col == m) {
                return mask == 0 ? 1 : 0;
            }

            if (dp[col][mask] != -1) {
                return dp[col][mask];
            }

            long ways = 0;
            ways += generateNext(col, mask, 0, 0);
            
            return dp[col][mask] = ways;
        }

        private long generateNext(int col, int curMask, int row, int nextMask) {
            if (row == n) {
                return solve(col + 1, nextMask);
            }

            long ways = 0;

            // Current cell is already filled
            if ((curMask & (1 << row)) != 0) {
                ways += generateNext(col, curMask, row + 1, nextMask);
            } else {
                // Place vertical tile
                ways += generateNext(col, curMask | (1 << row), row + 1, 
                                    nextMask | (1 << row));
                
                // Place horizontal tile (if next cell is also empty)
                if (row + 1 < n && (curMask & (1 << (row + 1))) == 0) {
                    ways += generateNext(col, curMask | (1 << row) | (1 << (row + 1)),
                                        row + 2, nextMask);
                }
            }

            return ways;
        }
    }

    // ============================================================================
    // 7. PROBABILITY DP
    // ============================================================================

    /**
     * Probability DP Problems
     */
    static class ProbabilityDP {
        
        // Expected number of coin flips to get k heads in a row
        public static double expectedFlips(int k) {
            double[] dp = new double[k + 1];
            
            for (int i = k - 1; i >= 0; i--) {
                dp[i] = 1 + 0.5 * dp[i + 1];
                for (int j = 0; j < i; j++) {
                    dp[i] += Math.pow(0.5, i - j + 1) * dp[j];
                }
            }
            
            return dp[0];
        }

        // Probability of winning a game with DP
        public static double winProbability(int target, double p) {
            double[] dp = new double[target + 1];
            dp[target] = 1.0;
            
            for (int i = target - 1; i >= 0; i--) {
                dp[i] = p * dp[i + 1] + (1 - p) * (i > 0 ? dp[i - 1] : 0);
            }
            
            return dp[0];
        }

        // Expected value of random walk
        public static double expectedSteps(int start, int end, int n) {
            double[][] dp = new double[n + 1][n + 1];
            
            for (int steps = n - 1; steps >= 0; steps--) {
                for (int pos = 1; pos < n; pos++) {
                    if (pos == end) {
                        dp[steps][pos] = 0;
                    } else {
                        dp[steps][pos] = 1 + 0.5 * (dp[steps + 1][pos - 1] + 
                                                    dp[steps + 1][pos + 1]);
                    }
                }
            }
            
            return dp[0][start];
        }
    }

    // ============================================================================
    // 8. GAME THEORY DP (NIM & SPRAGUE-GRUNDY)
    // ============================================================================

    /**
     * Game Theory DP using Grundy Numbers
     */
    static class GameTheoryDP {
        
        // Calculate Grundy number (nim value) for a position
        public static int grundy(int n, int[] moves) {
            int[] dp = new int[n + 1];
            
            for (int i = 0; i <= n; i++) {
                Set<Integer> reachable = new HashSet<>();
                
                for (int move : moves) {
                    if (i >= move) {
                        reachable.add(dp[i - move]);
                    }
                }
                
                // Find MEX (minimum excludant)
                int mex = 0;
                while (reachable.contains(mex)) {
                    mex++;
                }
                dp[i] = mex;
            }
            
            return dp[n];
        }

        // Check if first player wins
        public static boolean firstPlayerWins(int[] piles) {
            int xorSum = 0;
            for (int pile : piles) {
                xorSum ^= pile;
            }
            return xorSum != 0;
        }

        // Find winning move in Nim game
        public static int[] findWinningMove(int[] piles) {
            int xorSum = 0;
            for (int pile : piles) {
                xorSum ^= pile;
            }
            
            if (xorSum == 0) return null; // Losing position
            
            for (int i = 0; i < piles.length; i++) {
                int target = piles[i] ^ xorSum;
                if (target < piles[i]) {
                    return new int[]{i, piles[i] - target};
                }
            }
            
            return null;
        }
    }

    // ============================================================================
    // DEMONSTRATION AND TESTING
    // ============================================================================

    public static void main(String[] args) {
        System.out.println("=== DAY 25: ADVANCED DYNAMIC PROGRAMMING ===\n");

        testAssignmentProblem();
        testDigitDP();
        testTreeDP();
        testSOSDP();
        testProbabilityDP();
        testGameTheory();
    }

    private static void testAssignmentProblem() {
        System.out.println("--- Assignment Problem Demo ---");
        int[][] cost = {
            {9, 2, 7, 8},
            {6, 4, 3, 7},
            {5, 8, 1, 8},
            {7, 6, 9, 4}
        };
        
        AssignmentProblem ap = new AssignmentProblem(cost);
        System.out.println("Minimum cost: " + ap.minCost());
        System.out.println("Assignment: " + Arrays.toString(ap.getAssignment()));
    }

    private static void testDigitDP() {
        System.out.println("\n--- Digit DP Demo ---");
        System.out.println("Numbers <= 100 with digit sum 10: " + 
                          DigitDP.countWithDigitSum(100, 10));
        System.out.println("Numbers <= 1000 with no consecutive digits: " + 
                          DigitDP.countNoConsecutive(1000));
    }

    private static void testTreeDP() {
        System.out.println("\n--- Tree DP Demo ---");
        TreeDP tree = new TreeDP(7);
        tree.addEdge(0, 1);
        tree.addEdge(0, 2);
        tree.addEdge(1, 3);
        tree.addEdge(1, 4);
        tree.addEdge(2, 5);
        tree.addEdge(2, 6);
        
        for (int i = 0; i < 7; i++) {
            tree.setValue(i, i + 1);
        }
        
        System.out.println("Tree diameter: " + tree.treeDiameter(0));
        System.out.println("Subtree sums: " + Arrays.toString(tree.getSubtreeSums(0)));
    }

    private static void testSOSDP() {
        System.out.println("\n--- SOS DP Demo ---");
        long[] arr = {1, 2, 3, 4, 5};
        long[] result = SumOverSubsets.sosDP(arr);
        System.out.println("SOS DP result: " + Arrays.toString(result));
    }

    private static void testProbabilityDP() {
        System.out.println("\n--- Probability DP Demo ---");
        System.out.println("Expected flips for 3 heads: " + 
                          ProbabilityDP.expectedFlips(3));
        System.out.println("Win probability (target=10, p=0.6): " + 
                          ProbabilityDP.winProbability(10, 0.6));
    }

    private static void testGameTheory() {
        System.out.println("\n--- Game Theory DP Demo ---");
        int[] moves = {1, 3, 4};
        System.out.println("Grundy number for n=10: " + 
                          GameTheoryDP.grundy(10, moves));
        
        int[] piles = {3, 5, 7};
        System.out.println("First player wins: " + 
                          GameTheoryDP.firstPlayerWins(piles));
        System.out.println("Winning move: " + 
                          Arrays.toString(GameTheoryDP.findWinningMove(piles)));
    }
}
