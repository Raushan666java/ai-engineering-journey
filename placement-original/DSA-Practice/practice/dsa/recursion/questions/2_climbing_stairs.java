package recursion.questions;

/*
 * 2. CLIMBING STAIRS (LeetCode 70)
 *
 * Problem Statement:
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 *
 * Conceptual Understanding:
 * - At each step, you have 2 choices: climb 1 step or 2 steps
 * - This is a Fibonacci sequence problem
 * - Ways to reach step n = ways to reach (n-1) + ways to reach (n-2)
 * - Base cases: 1 way to reach step 0, 1 way to reach step 1
 *
 * Time Complexity: O(2^n) naive, O(n) with memoization, O(n) iterative
 * Space Complexity: O(n) recursion stack, O(n) memoization, O(1) iterative
 */

import java.util.*;

class ClimbingStairs2 {

    // Method 1: Naive Recursion (Exponential time)
    public int climbStairs(int n) {
        if (n <= 1) {
            return 1;
        }
        return climbStairs(n - 1) + climbStairs(n - 2);
    }

    // Method 2: Recursion with Memoization
    public int climbStairsMemo(int n) {
        int[] memo = new int[n + 1];
        Arrays.fill(memo, -1);
        return climbStairsHelper(n, memo);
    }

    private int climbStairsHelper(int n, int[] memo) {
        if (n <= 1) {
            return 1;
        }

        if (memo[n] != -1) {
            return memo[n];
        }

        memo[n] = climbStairsHelper(n - 1, memo) + climbStairsHelper(n - 2, memo);
        return memo[n];
    }

    // Method 3: Bottom-up DP (Iterative)
    public int climbStairsDP(int n) {
        if (n <= 1) {
            return 1;
        }

        int[] dp = new int[n + 1];
        dp[0] = 1; // 1 way to stay at ground
        dp[1] = 1; // 1 way to reach step 1

        for (int i = 2; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }

        return dp[n];
    }

    // Method 4: Optimized Iterative (Constant space)
    public int climbStairsOptimized(int n) {
        if (n <= 1) {
            return 1;
        }

        int prev2 = 1; // Ways to reach step 0
        int prev1 = 1; // Ways to reach step 1
        int current = 0;

        for (int i = 2; i <= n; i++) {
            current = prev1 + prev2;
            prev2 = prev1;
            prev1 = current;
        }

        return current;
    }

    // Method 5: Mathematical Formula (Binet's formula approximation)
    public int climbStairsFormula(int n) {
        double sqrt5 = Math.sqrt(5);
        double phi = (1 + sqrt5) / 2;
        double psi = (1 - sqrt5) / 2;

        return (int) Math.round((Math.pow(phi, n + 1) - Math.pow(psi, n + 1)) / sqrt5);
    }

    // Method 6: Matrix Exponentiation
    public int climbStairsMatrix(int n) {
        if (n <= 1) return 1;

        int[][] base = {{1, 1}, {1, 0}};
        int[][] result = matrixPower(base, n);

        return result[0][0];
    }

    private int[][] matrixPower(int[][] matrix, int n) {
        int[][] result = {{1, 0}, {0, 1}}; // Identity

        while (n > 0) {
            if (n % 2 == 1) {
                result = matrixMultiply(result, matrix);
            }
            matrix = matrixMultiply(matrix, matrix);
            n /= 2;
        }

        return result;
    }

    private int[][] matrixMultiply(int[][] a, int[][] b) {
        return new int[][]{
            {a[0][0] * b[0][0] + a[0][1] * b[1][0], a[0][0] * b[0][1] + a[0][1] * b[1][1]},
            {a[1][0] * b[0][0] + a[1][1] * b[1][0], a[1][0] * b[0][1] + a[1][1] * b[1][1]}
        };
    }

    // Method 7: General solution for k steps
    public int climbStairsKSteps(int n, int k) {
        if (n <= 1) return 1;

        int[] dp = new int[n + 1];
        dp[0] = 1;

        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= k && j <= i; j++) {
                dp[i] += dp[i - j];
            }
        }

        return dp[n];
    }

    // Test cases
    public static void main(String[] args) {
        ClimbingStairs2 solution = new ClimbingStairs2();

        // Test Case 1: Basic cases
        System.out.println("Ways to climb 0 stairs: " + solution.climbStairs(0)); // Expected: 1
        System.out.println("Ways to climb 1 stair: " + solution.climbStairs(1));  // Expected: 1
        System.out.println("Ways to climb 2 stairs: " + solution.climbStairs(2)); // Expected: 2
        System.out.println("Ways to climb 3 stairs: " + solution.climbStairs(3)); // Expected: 3
        System.out.println("Ways to climb 4 stairs: " + solution.climbStairs(4)); // Expected: 5
        System.out.println("Ways to climb 5 stairs: " + solution.climbStairs(5)); // Expected: 8

        // Test Case 2: Larger number
        int n = 10;
        System.out.println("Ways to climb " + n + " stairs:");
        System.out.println("Naive: " + solution.climbStairs(n));
        System.out.println("Memo: " + solution.climbStairsMemo(n));
        System.out.println("DP: " + solution.climbStairsDP(n));
        System.out.println("Optimized: " + solution.climbStairsOptimized(n));
        System.out.println("Formula: " + solution.climbStairsFormula(n));
        System.out.println("Matrix: " + solution.climbStairsMatrix(n));

        // Test Case 3: K steps (3 steps allowed)
        System.out.println("Ways to climb 4 stairs (1,2,3 steps): " + solution.climbStairsKSteps(4, 3)); // Expected: 7
    }
}