import java.util.*;

/**
 * Day 18: Dynamic Programming Basics
 * Includes memoization and tabulation examples
 */

public class DPBasics {

    // 1. Fibonacci - naive, memo, and tabulation
    public static long fibNaive(int n) {
        if (n <= 1) return n;
        return fibNaive(n - 1) + fibNaive(n - 2);
    }

    public static long fibMemo(int n, long[] memo) {
        if (n <= 1) return n;
        if (memo[n] != -1) return memo[n];
        memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
        return memo[n];
    }

    public static long fibTab(int n) {
        if (n <= 1) return n;
        long[] dp = new long[n + 1];
        dp[0] = 0; dp[1] = 1;
        for (int i = 2; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }
        return dp[n];
    }

    // 2. Climbing Stairs - memo and tab
    public static int climbStairsMemo(int n, int[] memo) {
        if (n <= 2) return n;
        if (memo[n] != -1) return memo[n];
        memo[n] = climbStairsMemo(n - 1, memo) + climbStairsMemo(n - 2, memo);
        return memo[n];
    }

    public static int climbStairsTab(int n) {
        if (n <= 2) return n;
        int[] dp = new int[n + 1];
        dp[0] = 0; dp[1] = 1; dp[2] = 2;
        for (int i = 3; i <= n; i++) dp[i] = dp[i - 1] + dp[i - 2];
        return dp[n];
    }

    // 3. 0/1 Knapsack - recursive memo
    public static int knapsackMemo(int[] wt, int[] val, int W) {
        int n = wt.length;
        int[][] memo = new int[n][W + 1];
        for (int i = 0; i < n; i++) Arrays.fill(memo[i], -1);
        return knapsackMemoHelper(wt, val, n - 1, W, memo);
    }

    private static int knapsackMemoHelper(int[] wt, int[] val, int i, int W, int[][] memo) {
        if (i < 0 || W == 0) return 0;
        if (memo[i][W] != -1) return memo[i][W];
        if (wt[i] > W) return memo[i][W] = knapsackMemoHelper(wt, val, i - 1, W, memo);
        int notTake = knapsackMemoHelper(wt, val, i - 1, W, memo);
        int take = val[i] + knapsackMemoHelper(wt, val, i - 1, W - wt[i], memo);
        memo[i][W] = Math.max(notTake, take);
        return memo[i][W];
    }

    // 4. 0/1 Knapsack - tabulation
    public static int knapsackTab(int[] wt, int[] val, int W) {
        int n = wt.length;
        int[][] dp = new int[n + 1][W + 1];
        for (int i = 1; i <= n; i++) {
            for (int w = 0; w <= W; w++) {
                dp[i][w] = dp[i - 1][w];
                if (wt[i - 1] <= w) dp[i][w] = Math.max(dp[i][w], val[i - 1] + dp[i - 1][w - wt[i - 1]]);
            }
        }
        return dp[n][W];
    }

    // 5. Longest Common Subsequence (LCS)
    public static int lcs(String a, String b) {
        int n = a.length(), m = b.length();
        int[][] dp = new int[n + 1][m + 1];
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= m; j++) {
                if (a.charAt(i - 1) == b.charAt(j - 1)) dp[i][j] = 1 + dp[i - 1][j - 1];
                else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
        return dp[n][m];
    }

    // 6. Coin Change (min coins) - tab
    public static int coinChangeMin(int[] coins, int amount) {
        int MAX = 1_000_000_000;
        int[] dp = new int[amount + 1];
        Arrays.fill(dp, MAX);
        dp[0] = 0;
        for (int coin : coins) {
            for (int j = coin; j <= amount; j++) {
                dp[j] = Math.min(dp[j], dp[j - coin] + 1);
            }
        }
        return dp[amount] >= MAX ? -1 : dp[amount];
    }

    // 7. Longest Increasing Subsequence (LIS) - O(n log n) approach used? provide DP O(n^2)
    public static int lisDP(int[] nums) {
        int n = nums.length;
        if (n == 0) return 0;
        int[] dp = new int[n];
        Arrays.fill(dp, 1);
        int best = 1;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < i; j++) {
                if (nums[j] < nums[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
            }
            best = Math.max(best, dp[i]);
        }
        return best;
    }

    public static void main(String[] args) {
        System.out.println("=".repeat(60));
        System.out.println("DAY 18: DYNAMIC PROGRAMMING BASICS - TESTS");
        System.out.println("=".repeat(60));

        // Fibonacci
        int n = 30;
        long[] memo = new long[n + 1]; Arrays.fill(memo, -1);
        System.out.println("fibNaive(20): may take a bit: " + fibNaive(20));
        System.out.println("fibMemo(30): " + fibMemo(n, memo));
        System.out.println("fibTab(30): " + fibTab(n));

        // Climbing stairs
        int stairs = 10; int[] stairsMemo = new int[stairs + 1]; Arrays.fill(stairsMemo, -1);
        System.out.println("climbStairsMemo(10): " + climbStairsMemo(stairs, stairsMemo));
        System.out.println("climbStairsTab(10): " + climbStairsTab(stairs));

        // Knapsack
        int[] wt = {1, 3, 4, 5};
        int[] val = {1, 4, 5, 7};
        int W = 7;
        System.out.println("knapsackMemo: " + knapsackMemo(wt, val, W));
        System.out.println("knapsackTab: " + knapsackTab(wt, val, W));

        // LCS
        String a = "AGGTAB", b = "GXTXAYB";
        System.out.println("LCS(AGGTAB, GXTXAYB) = " + lcs(a, b));

        // Coin Change
        int[] coins = {1, 2, 5}; int amount = 11;
        System.out.println("CoinChange Min coins(11): " + coinChangeMin(coins, amount));

        // LIS
        int[] arr = {10,9,2,5,3,7,101,18};
        System.out.println("LIS O(n^2): " + lisDP(arr));

        System.out.println("All DP basic tests completed! ✓");
    }
}