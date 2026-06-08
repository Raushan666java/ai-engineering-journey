package recursion.questions;

/*
 * 1. FIBONACCI NUMBER (LeetCode 509)
 *
 * Problem Statement:
 * The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence,
 * such that each number is the sum of the two preceding ones, starting from 0 and 1.
 *
 * Given n, calculate F(n).
 *
 * Conceptual Understanding:
 * - F(0) = 0, F(1) = 1
 * - F(n) = F(n-1) + F(n-2) for n > 1
 * - Tree recursion creates exponential time complexity
 * - Memoization reduces to linear time
 * - Iterative solution is most efficient
 *
 * Time Complexity: O(2^n) naive, O(n) with memoization, O(n) iterative
 * Space Complexity: O(n) recursion stack, O(n) memoization, O(1) iterative
 */

import java.util.*;

class FibonacciNumber1 {

    // Method 1: Naive Recursion (Exponential time)
    public int fib(int n) {
        if (n <= 1) {
            return n;
        }
        return fib(n - 1) + fib(n - 2);
    }

    // Method 2: Recursion with Memoization (Top-down DP)
    public int fibMemo(int n) {
        int[] memo = new int[n + 1];
        Arrays.fill(memo, -1);
        return fibHelper(n, memo);
    }

    private int fibHelper(int n, int[] memo) {
        if (n <= 1) {
            return n;
        }

        if (memo[n] != -1) {
            return memo[n];
        }

        memo[n] = fibHelper(n - 1, memo) + fibHelper(n - 2, memo);
        return memo[n];
    }

    // Method 3: Bottom-up DP (Iterative)
    public int fibDP(int n) {
        if (n <= 1) {
            return n;
        }

        int[] dp = new int[n + 1];
        dp[0] = 0;
        dp[1] = 1;

        for (int i = 2; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }

        return dp[n];
    }

    // Method 4: Optimized Iterative (Constant space)
    public int fibOptimized(int n) {
        if (n <= 1) {
            return n;
        }

        int prev2 = 0; // F(0)
        int prev1 = 1; // F(1)
        int current = 0;

        for (int i = 2; i <= n; i++) {
            current = prev1 + prev2;
            prev2 = prev1;
            prev1 = current;
        }

        return current;
    }

    // Method 5: Matrix Exponentiation (O(log n) time)
    public int fibMatrix(int n) {
        if (n <= 1) {
            return n;
        }

        int[][] result = matrixPower(new int[][]{{1, 1}, {1, 0}}, n);
        return result[0][1];
    }

    private int[][] matrixPower(int[][] matrix, int n) {
        int[][] result = {{1, 0}, {0, 1}}; // Identity matrix

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

    // Method 6: Tail Recursion
    public int fibTail(int n) {
        return fibTailHelper(n, 0, 1);
    }

    private int fibTailHelper(int n, int a, int b) {
        if (n == 0) return a;
        if (n == 1) return b;
        return fibTailHelper(n - 1, b, a + b);
    }

    // Test cases
    public static void main(String[] args) {
        FibonacciNumber1 solution = new FibonacciNumber1();

        // Test Case 1: Basic cases
        System.out.println("F(0): " + solution.fib(0)); // Expected: 0
        System.out.println("F(1): " + solution.fib(1)); // Expected: 1
        System.out.println("F(2): " + solution.fib(2)); // Expected: 1
        System.out.println("F(3): " + solution.fib(3)); // Expected: 2
        System.out.println("F(4): " + solution.fib(4)); // Expected: 3
        System.out.println("F(5): " + solution.fib(5)); // Expected: 5

        // Test Case 2: Larger number
        System.out.println("F(10): " + solution.fibOptimized(10)); // Expected: 55

        // Test Case 3: Compare methods
        int n = 20;
        System.out.println("Naive F(" + n + "): " + solution.fib(n));
        System.out.println("Memo F(" + n + "): " + solution.fibMemo(n));
        System.out.println("DP F(" + n + "): " + solution.fibDP(n));
        System.out.println("Optimized F(" + n + "): " + solution.fibOptimized(n));
        System.out.println("Matrix F(" + n + "): " + solution.fibMatrix(n));
        System.out.println("Tail F(" + n + "): " + solution.fibTail(n));
    }
}