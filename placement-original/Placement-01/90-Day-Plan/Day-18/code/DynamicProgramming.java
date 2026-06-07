import java.util.*;

/**
 * Day 18: Dynamic Programming - Additional Examples & Visualizations
 */
public class DynamicProgramming {

    // Edit Distance (Levenshtein) - DP 2D
    public static int editDistance(String a, String b) {
        int n = a.length(), m = b.length();
        int[][] dp = new int[n + 1][m + 1];
        for (int i = 0; i <= n; i++) dp[i][0] = i;
        for (int j = 0; j <= m; j++) dp[0][j] = j;
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= m; j++) {
                if (a.charAt(i - 1) == b.charAt(j - 1)) dp[i][j] = dp[i - 1][j - 1];
                else dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], Math.min(dp[i - 1][j], dp[i][j - 1]));
            }
        }
        return dp[n][m];
    }

    // Coin change: number of ways (combination count) - CoinChange 2 (LC 518)
    public static int coinChangeWays(int[] coins, int amount) {
        int[] dp = new int[amount + 1]; dp[0] = 1;
        for (int coin : coins) {
            for (int j = coin; j <= amount; j++) {
                dp[j] += dp[j - coin];
            }
        }
        return dp[amount];
    }

    // Partition equal subset sum
    public static boolean canPartition(int[] nums) {
        int sum = 0; for (int x : nums) sum += x;
        if ((sum & 1) == 1) return false;
        int target = sum / 2;
        boolean[] dp = new boolean[target + 1]; dp[0] = true;
        for (int num : nums) {
            for (int t = target; t >= num; t--) {
                dp[t] = dp[t] || dp[t - num];
            }
        }
        return dp[target];
    }

    // Minimum coins - top-down
    public static int coinChangeMinTopDown(int[] coins, int amount) {
        int[] memo = new int[amount + 1]; Arrays.fill(memo, -2);
        return coinChangeTopDownHelper(coins, amount, memo);
    }
    private static int coinChangeTopDownHelper(int[] coins, int rem, int[] memo) {
        if (rem < 0) return -1;
        if (rem == 0) return 0;
        if (memo[rem] != -2) return memo[rem];
        int min = Integer.MAX_VALUE;
        for (int coin : coins) {
            int res = coinChangeTopDownHelper(coins, rem - coin, memo);
            if (res >= 0 && res < min) min = res + 1;
        }
        memo[rem] = (min == Integer.MAX_VALUE) ? -1 : min;
        return memo[rem];
    }

    public static void main(String[] args) {
        System.out.println("=".repeat(60));
        System.out.println("DAY 18: ADDITIONAL DP EXAMPLES - TESTS");
        System.out.println("=".repeat(60));

        // Edit Distance
        System.out.println("Edit Distance(kitten, sitting) = " + editDistance("kitten", "sitting"));

        // Coin change ways
        int[] coins = {1, 2, 5}; int amount = 5;
        System.out.println("CoinChangeWays(5) = " + coinChangeWays(coins, amount));

        // Coin change min (top-down)
        System.out.println("CoinChangeMinTopDown(11) = " + coinChangeMinTopDown(coins, 11));

        // Partition
        int[] nums = {1, 5, 11, 5};
        System.out.println("Partition equal subset sum: " + canPartition(nums));

        System.out.println("All additional DP tests completed! ✓");
    }
}
