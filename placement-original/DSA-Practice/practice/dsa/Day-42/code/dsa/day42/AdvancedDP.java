package dsa.day42;

import java.util.*;

/**
 * Moved and updated package to match test imports (dsa.day42.AdvancedDP)
 * Original file: practice/dsa/Day-42/code/AdvancedDP.java
 */
public class AdvancedDP {
    // For brevity, this class re-exports the original implementation.
    // Copy core methods from the original file here or keep as a wrapper.
    public static int maxCoins(int[] nums) {
        // simple placeholder implementation delegating to the original logic if present
        // In-lined optimal solution would go here.
        if (nums == null || nums.length == 0) return 0;
        int n = nums.length;
        int[] a = new int[n + 2];
        for (int i = 0; i < n; i++) a[i + 1] = nums[i];
        a[0] = a[n + 1] = 1;
        int[][] dp = new int[n + 2][n + 2];
        for (int len = 1; len <= n; len++) {
            for (int i = 1; i + len - 1 <= n; i++) {
                int j = i + len - 1;
                for (int k = i; k <= j; k++) {
                    dp[i][j] = Math.max(dp[i][j], dp[i][k - 1] + a[i - 1] * a[k] * a[j + 1] + dp[k + 1][j]);
                }
            }
        }
        return dp[1][n];
    }

    public static int minCut(String s) {
        int n = s.length();
        boolean[][] pal = new boolean[n][n];
        for (int i = n - 1; i >= 0; i--) {
            for (int j = i; j < n; j++) {
                pal[i][j] = (s.charAt(i) == s.charAt(j)) && (j - i < 2 || pal[i + 1][j - 1]);
            }
        }
        int[] dp = new int[n];
        Arrays.fill(dp, Integer.MAX_VALUE);
        for (int i = 0; i < n; i++) {
            if (pal[0][i]) dp[i] = 0;
            else {
                for (int j = 0; j < i; j++) if (pal[j + 1][i]) dp[i] = Math.min(dp[i], dp[j] + 1);
            }
        }
        return dp[n - 1];
    }

    public static boolean isMatch(String s, String p) {
        int m = s.length(), n = p.length();
        boolean[][] dp = new boolean[m + 1][n + 1];
        dp[0][0] = true;
        for (int j = 2; j <= n; j++) dp[0][j] = dp[0][j - 2] && p.charAt(j - 1) == '*';
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                char sc = s.charAt(i - 1);
                char pc = p.charAt(j - 1);
                if (pc == '.' || pc == sc) dp[i][j] = dp[i - 1][j - 1];
                else if (pc == '*') dp[i][j] = dp[i][j - 2] || ((p.charAt(j - 2) == '.' || p.charAt(j - 2) == sc) && dp[i - 1][j]);
            }
        }
        return dp[m][n];
    }
}
