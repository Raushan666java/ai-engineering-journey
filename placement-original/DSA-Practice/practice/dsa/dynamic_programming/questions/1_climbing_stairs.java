package dynamic_programming.questions;

/*
 * 1. CLIMBING STAIRS (LeetCode 70)
 *
 * Problem Statement:
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 *
 * Conceptual Understanding:
 * - Classic DP problem with Fibonacci pattern
 * - Ways to reach step n = ways to reach (n-1) + ways to reach (n-2)
 * - Base cases: 1 way for n=1 (1 step), 2 ways for n=2 (1+1 or 2)
 * - Optimal substructure and overlapping subproblems
 *
 * Time Complexity: O(n) for iterative, O(2^n) for naive recursive
 * Space Complexity: O(1) optimized, O(n) for DP array
 */

import java.util.*;

class ClimbingStairs1 {

    // Method 1: Recursive approach (exponential time)
    public int climbStairsRecursive(int n) {
        if (n <= 0) return 0;
        if (n == 1) return 1;
        if (n == 2) return 2;

        return climbStairsRecursive(n - 1) + climbStairsRecursive(n - 2);
    }

    // Method 2: Memoization (top-down DP)
    public int climbStairsMemo(int n) {
        if (n <= 0) return 0;
        int[] memo = new int[n + 1];
        return climbStairsMemoHelper(n, memo);
    }

    private int climbStairsMemoHelper(int n, int[] memo) {
        if (n <= 0) return 0;
        if (n == 1) return 1;
        if (n == 2) return 2;

        if (memo[n] != 0) return memo[n];

        memo[n] = climbStairsMemoHelper(n - 1, memo) + climbStairsMemoHelper(n - 2, memo);
        return memo[n];
    }

    // Method 3: Tabulation (bottom-up DP)
    public int climbStairsTabulation(int n) {
        if (n <= 0) return 0;
        if (n == 1) return 1;
        if (n == 2) return 2;

        int[] dp = new int[n + 1];
        dp[0] = 0;
        dp[1] = 1;
        dp[2] = 2;

        for (int i = 3; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }

        return dp[n];
    }

    // Method 4: Space optimized (O(1) space)
    public int climbStairsOptimized(int n) {
        if (n <= 0) return 0;
        if (n == 1) return 1;
        if (n == 2) return 2;

        int prev2 = 1; // ways to reach step 1
        int prev1 = 2; // ways to reach step 2

        for (int i = 3; i <= n; i++) {
            int current = prev1 + prev2;
            prev2 = prev1;
            prev1 = current;
        }

        return prev1;
    }

    // Method 5: Matrix exponentiation (O(log n) time)
    public int climbStairsMatrix(int n) {
        if (n <= 0) return 0;
        if (n == 1) return 1;
        if (n == 2) return 2;

        // Fibonacci matrix: [[1, 1], [1, 0]]
        // Raising to power (n-1) gives F(n)
        long[][] matrix = {{1, 1}, {1, 0}};
        long[][] result = matrixPower(matrix, n - 1);

        // F(n) = result[0][0] * F(1) + result[0][1] * F(0)
        return (int) (result[0][0] * 2 + result[0][1] * 1);
    }

    private long[][] matrixPower(long[][] matrix, int n) {
        long[][] result = {{1, 0}, {0, 1}}; // Identity matrix

        while (n > 0) {
            if (n % 2 == 1) {
                result = matrixMultiply(result, matrix);
            }
            matrix = matrixMultiply(matrix, matrix);
            n /= 2;
        }

        return result;
    }

    private long[][] matrixMultiply(long[][] a, long[][] b) {
        long[][] result = new long[2][2];
        for (int i = 0; i < 2; i++) {
            for (int j = 0; j < 2; j++) {
                for (int k = 0; k < 2; k++) {
                    result[i][j] += a[i][k] * b[k][j];
                }
            }
        }
        return result;
    }

    // Method 6: Binet's formula approximation
    public int climbStairsBinet(int n) {
        if (n <= 0) return 0;
        if (n == 1) return 1;
        if (n == 2) return 2;

        double phi = (1 + Math.sqrt(5)) / 2;
        double psi = (1 - Math.sqrt(5)) / 2;

        return (int) Math.round((Math.pow(phi, n + 1) - Math.pow(psi, n + 1)) / Math.sqrt(5));
    }

    // Method 7: With variable step sizes
    public int climbStairsVariableSteps(int n, int[] steps) {
        if (n <= 0) return 0;
        if (n == 1) return 1;

        int[] dp = new int[n + 1];
        dp[0] = 1; // 1 way to stay at ground

        for (int i = 1; i <= n; i++) {
            for (int step : steps) {
                if (i >= step) {
                    dp[i] += dp[i - step];
                }
            }
        }

        return dp[n];
    }

    // Method 8: Count paths with obstacles
    public int climbStairsWithObstacles(int n, boolean[] obstacles) {
        if (n <= 0) return 0;
        if (obstacles.length != n) return 0;

        int[] dp = new int[n + 1];
        dp[0] = 1; // Start position

        for (int i = 1; i <= n; i++) {
            if (!obstacles[i - 1]) { // No obstacle at this step
                if (i >= 1) dp[i] += dp[i - 1];
                if (i >= 2) dp[i] += dp[i - 2];
            }
            // If obstacle, dp[i] remains 0
        }

        return dp[n];
    }

    // Method 9: Performance analysis
    public static class ClimbingStats {
        int n;
        int ways;
        long timeMs;
        String method;
        int spaceUsed;

        public ClimbingStats(int n, int ways, long timeMs, String method, int spaceUsed) {
            this.n = n;
            this.ways = ways;
            this.timeMs = timeMs;
            this.method = method;
            this.spaceUsed = spaceUsed;
        }

        @Override
        public String toString() {
            return String.format("N=%d, Ways=%d, Time=%dms, Method=%s, Space=%d",
                               n, ways, timeMs, method, spaceUsed);
        }
    }

    public ClimbingStats analyzeClimbing(int n, String method) {
        long startTime = System.nanoTime();
        int ways = 0;
        int space = 0;

        switch (method) {
            case "recursive":
                ways = climbStairsRecursive(n);
                space = n; // stack space
                break;
            case "memo":
                ways = climbStairsMemo(n);
                space = n; // memo array
                break;
            case "tabulation":
                ways = climbStairsTabulation(n);
                space = n; // dp array
                break;
            case "optimized":
                ways = climbStairsOptimized(n);
                space = 2; // two variables
                break;
            case "matrix":
                ways = climbStairsMatrix(n);
                space = 4; // 2x2 matrix
                break;
            case "binet":
                ways = climbStairsBinet(n);
                space = 1; // constants
                break;
        }

        long timeMs = (System.nanoTime() - startTime) / 1_000_000;
        return new ClimbingStats(n, ways, timeMs, method, space);
    }

    // Method 10: Validate result
    public boolean validateClimbingStairs(int n, int result) {
        if (n <= 0) return result == 0;
        if (n == 1) return result == 1;
        if (n == 2) return result == 2;

        // Check if result follows Fibonacci pattern
        int[] fib = new int[n + 1];
        fib[1] = 1;
        fib[2] = 2;
        for (int i = 3; i <= n; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }

        return result == fib[n];
    }

    // Method 11: Get all possible paths
    public List<List<Integer>> getAllPaths(int n) {
        List<List<Integer>> result = new ArrayList<>();
        List<Integer> current = new ArrayList<>();
        generatePaths(n, current, result);
        return result;
    }

    private void generatePaths(int remaining, List<Integer> current, List<List<Integer>> result) {
        if (remaining == 0) {
            result.add(new ArrayList<>(current));
            return;
        }

        // Try step of 1
        if (remaining >= 1) {
            current.add(1);
            generatePaths(remaining - 1, current, result);
            current.remove(current.size() - 1);
        }

        // Try step of 2
        if (remaining >= 2) {
            current.add(2);
            generatePaths(remaining - 2, current, result);
            current.remove(current.size() - 1);
        }
    }

    // Method 12: Advanced climbing with costs
    public int minCostClimbingStairs(int[] cost) {
        int n = cost.length;
        if (n == 0) return 0;
        if (n == 1) return cost[0];

        int[] dp = new int[n + 1];
        dp[0] = 0;
        dp[1] = cost[0];

        for (int i = 2; i <= n; i++) {
            dp[i] = cost[i - 1] + Math.min(dp[i - 1], dp[i - 2]);
        }

        return Math.min(dp[n], dp[n - 1]); // Can reach top from last or second last step
    }

    // Test cases
    public static void main(String[] args) {
        ClimbingStairs1 solution = new ClimbingStairs1();

        // Test Case 1: Basic climbing stairs
        System.out.println("=== Climbing Stairs ===");
        int n1 = 5;
        System.out.println("Ways to climb " + n1 + " stairs:");

        System.out.println("Recursive: " + solution.climbStairsRecursive(n1));
        System.out.println("Memoization: " + solution.climbStairsMemo(n1));
        System.out.println("Tabulation: " + solution.climbStairsTabulation(n1));
        System.out.println("Optimized: " + solution.climbStairsOptimized(n1));
        System.out.println("Matrix: " + solution.climbStairsMatrix(n1));
        System.out.println("Binet: " + solution.climbStairsBinet(n1));

        // Test Case 2: Variable steps
        int[] steps = {1, 2, 3};
        System.out.println("With steps [1,2,3]: " + solution.climbStairsVariableSteps(n1, steps));

        // Test Case 3: With obstacles
        boolean[] obstacles = {false, false, true, false, false}; // obstacle at step 3
        System.out.println("With obstacles: " + solution.climbStairsWithObstacles(n1, obstacles));

        // Test Case 4: Performance analysis
        ClimbingStats stats = solution.analyzeClimbing(10, "optimized");
        System.out.println("Performance: " + stats);

        // Test Case 5: Validation
        boolean valid = solution.validateClimbingStairs(n1, solution.climbStairsOptimized(n1));
        System.out.println("Result valid: " + valid);

        // Test Case 6: All paths
        List<List<Integer>> paths = solution.getAllPaths(4);
        System.out.println("All paths for n=4: " + paths);

        // Test Case 7: Min cost climbing
        int[] cost = {10, 15, 20};
        System.out.println("Min cost: " + solution.minCostClimbingStairs(cost));

        // Test Case 8: Edge cases
        System.out.println("\nEdge cases:");
        System.out.println("n=0: " + solution.climbStairsOptimized(0));
        System.out.println("n=1: " + solution.climbStairsOptimized(1));
        System.out.println("n=2: " + solution.climbStairsOptimized(2));

        // Test Case 9: Large n (performance test)
        int largeN = 45;
        long startTime = System.nanoTime();
        int result = solution.climbStairsOptimized(largeN);
        long timeMs = (System.nanoTime() - startTime) / 1_000_000;
        System.out.println("Large n=" + largeN + ": " + result + " (time: " + timeMs + "ms)");

        // Test Case 10: Compare methods for small n
        System.out.println("\nMethod comparison for n=10:");
        for (String method : Arrays.asList("recursive", "memo", "tabulation", "optimized", "matrix", "binet")) {
            ClimbingStats s = solution.analyzeClimbing(10, method);
            System.out.println(method + ": " + s.ways + " ways, " + s.timeMs + "ms, " + s.spaceUsed + " space");
        }
    }
}