import java.util.*;

/**
 * Day 18: DP Visualizer - prints DP tables for LCS and Knapsack
 */
public class DPVisualizer {

    public static void printLcsTable(String a, String b) {
        int n = a.length(), m = b.length();
        int[][] dp = new int[n + 1][m + 1];
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= m; j++) {
                if (a.charAt(i - 1) == b.charAt(j - 1)) dp[i][j] = 1 + dp[i - 1][j - 1];
                else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
        
        System.out.println("LCS DP table for '" + a + "' and '" + b + "':");
        System.out.print("    ");
        for (int j = 0; j < m; j++) System.out.printf("  %c", b.charAt(j));
        System.out.println();
        for (int i = 0; i <= n; i++) {
            if (i == 0) System.out.print(" "); else System.out.print(a.charAt(i - 1));
            for (int j = 0; j <= m; j++) {
                System.out.printf("%3d", dp[i][j]);
            }
            System.out.println();
        }
    }

    public static void printKnapsackTable(int[] wt, int[] val, int W) {
        int n = wt.length;
        int[][] dp = new int[n + 1][W + 1];
        for (int i = 1; i <= n; i++) {
            for (int w = 0; w <= W; w++) {
                dp[i][w] = dp[i - 1][w];
                if (wt[i - 1] <= w) dp[i][w] = Math.max(dp[i][w], val[i - 1] + dp[i - 1][w - wt[i - 1]]);
            }
        }
        System.out.println("Knapsack DP table (n=" + n + ", W=" + W + "):");
        System.out.print("W ");
        for (int w = 0; w <= W; w++) System.out.printf("%4d", w);
        System.out.println();
        for (int i = 0; i <= n; i++) {
            if (i == 0) System.out.print("i0 "); else System.out.print("i" + i + " ");
            for (int w = 0; w <= W; w++) System.out.printf("%4d", dp[i][w]);
            System.out.println();
        }

        System.out.println("Max value: " + dp[n][W]);
    }

    public static void main(String[] args) {
        System.out.println("=".repeat(60));
        System.out.println("DP VISUALIZER - TABLES DEMO");
        System.out.println("=".repeat(60));
        printLcsTable("AGGTAB", "GXTXAYB");
        System.out.println();
        int[] wt = {1, 3, 4, 5}; int[] val = {1, 4, 5, 7}; int W = 7;
        printKnapsackTable(wt, val, W);
        System.out.println("Done.");
    }
}
