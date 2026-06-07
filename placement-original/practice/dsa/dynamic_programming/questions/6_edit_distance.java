package dynamic_programming.questions;

/*
 * 6. EDIT DISTANCE (LeetCode 72)
 *
 * Problem Statement:
 * Given two strings word1 and word2, return the minimum number of operations required
 * to convert word1 to word2. You have the following three operations permitted on a word:
 * - Insert a character
 * - Delete a character
 * - Replace a character
 *
 * Conceptual Understanding:
 * - Find minimum operations to transform word1 to word2
 * - DP state: dp[i][j] = min operations for word1[0..i-1] to word2[0..j-1]
 * - If chars match: dp[i][j] = dp[i-1][j-1]
 * - If not match: dp[i][j] = min(dp[i-1][j-1] + 1, dp[i-1][j] + 1, dp[i][j-1] + 1)
 * - Base cases: dp[i][0] = i, dp[0][j] = j
 *
 * Time Complexity: O(m*n)
 * Space Complexity: O(m*n), can be optimized to O(min(m,n))
 */

import java.util.*;

class EditDistance6 {

    // Method 1: Recursive with memoization (Top-down)
    public int minDistanceMemo(String word1, String word2) {
        if (word1 == null || word2 == null) {
            return word1 == null ? (word2 == null ? 0 : word2.length()) :
                   (word2 == null ? word1.length() : 0);
        }

        int m = word1.length();
        int n = word2.length();
        int[][] memo = new int[m + 1][n + 1];
        for (int[] row : memo) Arrays.fill(row, -1);

        return editDistanceHelper(word1, word2, m, n, memo);
    }

    private int editDistanceHelper(String word1, String word2, int i, int j, int[][] memo) {
        if (i == 0) return j; // Insert j characters
        if (j == 0) return i; // Delete i characters
        if (memo[i][j] != -1) return memo[i][j];

        if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
            memo[i][j] = editDistanceHelper(word1, word2, i - 1, j - 1, memo);
        } else {
            // Replace, Delete, Insert
            int replace = editDistanceHelper(word1, word2, i - 1, j - 1, memo) + 1;
            int delete = editDistanceHelper(word1, word2, i - 1, j, memo) + 1;
            int insert = editDistanceHelper(word1, word2, i, j - 1, memo) + 1;
            memo[i][j] = Math.min(replace, Math.min(delete, insert));
        }

        return memo[i][j];
    }

    // Method 2: Bottom-up dynamic programming
    public int minDistanceDP(String word1, String word2) {
        if (word1 == null || word2 == null) {
            return word1 == null ? (word2 == null ? 0 : word2.length()) :
                   (word2 == null ? word1.length() : 0);
        }

        int m = word1.length();
        int n = word2.length();
        int[][] dp = new int[m + 1][n + 1];

        // Initialize base cases
        for (int i = 0; i <= m; i++) dp[i][0] = i;
        for (int j = 0; j <= n; j++) dp[0][j] = j;

        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    dp[i][j] = Math.min(
                        dp[i - 1][j - 1] + 1, // Replace
                        Math.min(
                            dp[i - 1][j] + 1,  // Delete
                            dp[i][j - 1] + 1   // Insert
                        )
                    );
                }
            }
        }

        return dp[m][n];
    }

    // Method 3: Space optimized DP
    public int minDistanceOptimized(String word1, String word2) {
        if (word1 == null || word2 == null) {
            return word1 == null ? (word2 == null ? 0 : word2.length()) :
                   (word2 == null ? word1.length() : 0);
        }

        int m = word1.length();
        int n = word2.length();

        // Ensure word1 is shorter
        if (m > n) {
            String temp = word1;
            word1 = word2;
            word2 = temp;
            int tempLen = m;
            m = n;
            n = tempLen;
        }

        int[] prev = new int[m + 1];
        int[] curr = new int[m + 1];

        // Initialize first row
        for (int i = 0; i <= m; i++) prev[i] = i;

        for (int j = 1; j <= n; j++) {
            curr[0] = j; // Initialize first column

            for (int i = 1; i <= m; i++) {
                if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
                    curr[i] = prev[i - 1];
                } else {
                    curr[i] = Math.min(
                        prev[i - 1] + 1, // Replace
                        Math.min(
                            prev[i] + 1,  // Delete
                            curr[i - 1] + 1 // Insert
                        )
                    );
                }
            }

            // Swap arrays
            int[] temp = prev;
            prev = curr;
            curr = temp;
        }

        return prev[m];
    }

    // Method 4: Get edit operations
    public static class EditResult {
        int distance;
        List<String> operations;
        String transformed;

        public EditResult(int distance, List<String> operations, String transformed) {
            this.distance = distance;
            this.operations = operations;
            this.transformed = transformed;
        }

        @Override
        public String toString() {
            return String.format("Distance=%d, Operations=%s, Result='%s'",
                               distance, operations, transformed);
        }
    }

    public EditResult getEditOperations(String word1, String word2) {
        if (word1 == null || word2 == null) {
            return new EditResult(0, new ArrayList<>(), word1 == null ? word2 : word1);
        }

        int m = word1.length();
        int n = word2.length();
        int[][] dp = new int[m + 1][n + 1];

        // Initialize base cases
        for (int i = 0; i <= m; i++) dp[i][0] = i;
        for (int j = 0; j <= n; j++) dp[0][j] = j;

        // Fill DP table
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    dp[i][j] = Math.min(
                        dp[i - 1][j - 1] + 1,
                        Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1)
                    );
                }
            }
        }

        // Reconstruct operations
        List<String> operations = new ArrayList<>();
        StringBuilder result = new StringBuilder(word1);
        int i = m, j = n;

        while (i > 0 || j > 0) {
            if (i > 0 && j > 0 && word1.charAt(i - 1) == word2.charAt(j - 1)) {
                // No operation needed
                i--;
                j--;
            } else if (j > 0 && (i == 0 || dp[i][j - 1] + 1 == dp[i][j])) {
                // Insert
                operations.add("Insert '" + word2.charAt(j - 1) + "' at position " + i);
                result.insert(i, word2.charAt(j - 1));
                j--;
            } else if (i > 0 && (j == 0 || dp[i - 1][j] + 1 == dp[i][j])) {
                // Delete
                operations.add("Delete '" + word1.charAt(i - 1) + "' at position " + (i - 1));
                result.deleteCharAt(i - 1);
                i--;
            } else {
                // Replace
                operations.add("Replace '" + word1.charAt(i - 1) + "' with '" + word2.charAt(j - 1) + "' at position " + (i - 1));
                result.setCharAt(i - 1, word2.charAt(j - 1));
                i--;
                j--;
            }
        }

        Collections.reverse(operations);
        return new EditResult(dp[m][n], operations, result.toString());
    }

    // Method 5: Edit distance with costs
    public int minDistanceWithCosts(String word1, String word2, int insertCost, int deleteCost, int replaceCost) {
        if (word1 == null || word2 == null) return 0;

        int m = word1.length();
        int n = word2.length();
        int[][] dp = new int[m + 1][n + 1];

        // Initialize base cases
        for (int i = 0; i <= m; i++) dp[i][0] = i * deleteCost;
        for (int j = 0; j <= n; j++) dp[0][j] = j * insertCost;

        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    dp[i][j] = Math.min(
                        dp[i - 1][j - 1] + replaceCost,
                        Math.min(
                            dp[i - 1][j] + deleteCost,
                            dp[i][j - 1] + insertCost
                        )
                    );
                }
            }
        }

        return dp[m][n];
    }

    // Method 6: Performance analysis
    public static class EditStats {
        int len1;
        int len2;
        int distance;
        long timeMs;
        String method;
        int spaceUsed;

        public EditStats(int len1, int len2, int distance, long timeMs, String method, int spaceUsed) {
            this.len1 = len1;
            this.len2 = len2;
            this.distance = distance;
            this.timeMs = timeMs;
            this.method = method;
            this.spaceUsed = spaceUsed;
        }

        @Override
        public String toString() {
            return String.format("Len1=%d, Len2=%d, Distance=%d, Time=%dms, Method=%s, Space=%d",
                               len1, len2, distance, timeMs, method, spaceUsed);
        }
    }

    public EditStats analyzeEditDistance(String word1, String word2, String method) {
        long startTime = System.nanoTime();
        int distance = 0;
        int space = 0;

        switch (method) {
            case "memo":
                distance = minDistanceMemo(word1, word2);
                space = word1.length() * word2.length();
                break;
            case "dp":
                distance = minDistanceDP(word1, word2);
                space = word1.length() * word2.length();
                break;
            case "optimized":
                distance = minDistanceOptimized(word1, word2);
                space = 2 * Math.min(word1.length(), word2.length());
                break;
        }

        long timeMs = (System.nanoTime() - startTime) / 1_000_000;
        return new EditStats(word1.length(), word2.length(), distance, timeMs, method, space);
    }

    // Method 7: Validate edit result
    public boolean validateEditResult(String word1, String word2, EditResult result) {
        if (word1 == null || word2 == null) return result.distance == 0;

        // Check if transformed string equals target
        if (!result.transformed.equals(word2)) return false;

        // Check if operation count matches distance
        return result.operations.size() == result.distance;
    }

    // Method 8: Similarity based on edit distance
    public double editSimilarity(String word1, String word2) {
        if (word1 == null || word2 == null) return 0.0;

        int distance = minDistanceDP(word1, word2);
        int maxLen = Math.max(word1.length(), word2.length());

        return maxLen == 0 ? 1.0 : 1.0 - (double) distance / maxLen;
    }

    // Method 9: Minimum operations with constraints
    public int minDistanceWithConstraints(String word1, String word2, int maxOperations) {
        int distance = minDistanceDP(word1, word2);
        return distance <= maxOperations ? distance : -1;
    }

    // Method 10: Edit distance for multiple words
    public int minDistanceMultiple(String[] words) {
        if (words == null || words.length <= 1) return 0;

        int totalDistance = 0;
        for (int i = 0; i < words.length - 1; i++) {
            totalDistance += minDistanceDP(words[i], words[i + 1]);
        }

        return totalDistance;
    }

    // Method 11: Fuzzy string matching
    public boolean isSimilar(String word1, String word2, double threshold) {
        double similarity = editSimilarity(word1, word2);
        return similarity >= threshold;
    }

    // Method 12: Edit distance with character weights
    public int minDistanceWeighted(String word1, String word2, Map<Character, Integer> insertWeights,
                                  Map<Character, Integer> deleteWeights, Map<String, Integer> replaceWeights) {
        if (word1 == null || word2 == null) return 0;

        int m = word1.length();
        int n = word2.length();
        int[][] dp = new int[m + 1][n + 1];

        // Initialize base cases
        for (int i = 1; i <= m; i++) {
            char c = word1.charAt(i - 1);
            dp[i][0] = dp[i - 1][0] + deleteWeights.getOrDefault(c, 1);
        }
        for (int j = 1; j <= n; j++) {
            char c = word2.charAt(j - 1);
            dp[0][j] = dp[0][j - 1] + insertWeights.getOrDefault(c, 1);
        }

        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                char c1 = word1.charAt(i - 1);
                char c2 = word2.charAt(j - 1);

                if (c1 == c2) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    String replaceKey = c1 + "" + c2;
                    int replaceCost = replaceWeights.getOrDefault(replaceKey, 1);
                    int insertCost = insertWeights.getOrDefault(c2, 1);
                    int deleteCost = deleteWeights.getOrDefault(c1, 1);

                    dp[i][j] = Math.min(
                        dp[i - 1][j - 1] + replaceCost,
                        Math.min(
                            dp[i - 1][j] + deleteCost,
                            dp[i][j - 1] + insertCost
                        )
                    );
                }
            }
        }

        return dp[m][n];
    }

    // Test cases
    public static void main(String[] args) {
        EditDistance6 solution = new EditDistance6();

        // Test Case 1: Basic edit distance
        System.out.println("=== Edit Distance ===");
        String word1 = "horse";
        String word2 = "ros";
        System.out.println("Word1: '" + word1 + "', Word2: '" + word2 + "'");

        System.out.println("Memoization: " + solution.minDistanceMemo(word1, word2));
        System.out.println("DP: " + solution.minDistanceDP(word1, word2));
        System.out.println("Optimized: " + solution.minDistanceOptimized(word1, word2));

        // Test Case 2: With operations
        EditResult result = solution.getEditOperations(word1, word2);
        System.out.println("With operations: " + result);

        // Test Case 3: With custom costs
        System.out.println("Custom costs (I=2,D=3,R=4): " +
                          solution.minDistanceWithCosts(word1, word2, 2, 3, 4));

        // Test Case 4: Performance analysis
        EditStats stats = solution.analyzeEditDistance(word1, word2, "dp");
        System.out.println("Analysis: " + stats);

        // Test Case 5: Validation
        boolean valid = solution.validateEditResult(word1, word2, result);
        System.out.println("Result valid: " + valid);

        // Test Case 6: Similarity
        System.out.println("Similarity: " + String.format("%.3f", solution.editSimilarity(word1, word2)));

        // Test Case 7: With constraints
        System.out.println("Max 3 operations: " + solution.minDistanceWithConstraints(word1, word2, 3));

        // Test Case 8: Multiple words
        String[] words = {"horse", "ros", "rose"};
        System.out.println("Multiple words: " + solution.minDistanceMultiple(words));

        // Test Case 9: Fuzzy matching
        System.out.println("Similar (threshold 0.6): " + solution.isSimilar(word1, word2, 0.6));

        // Test Case 10: Weighted distance
        Map<Character, Integer> insertW = new HashMap<>();
        Map<Character, Integer> deleteW = new HashMap<>();
        Map<String, Integer> replaceW = new HashMap<>();
        insertW.put('s', 2);
        deleteW.put('h', 3);
        replaceW.put("or", 5);
        System.out.println("Weighted: " + solution.minDistanceWeighted(word1, word2, insertW, deleteW, replaceW));

        // Test Case 11: Edge cases
        System.out.println("\nEdge cases:");
        System.out.println("Empty strings: " + solution.minDistanceDP("", ""));
        System.out.println("One empty: " + solution.minDistanceDP("abc", ""));
        System.out.println("Identical: " + solution.minDistanceDP("abc", "abc"));
        System.out.println("Single char: " + solution.minDistanceDP("a", "b"));

        // Test Case 12: Compare methods
        System.out.println("\nMethod comparison:");
        String test1 = "intention";
        String test2 = "execution";
        for (String method : Arrays.asList("memo", "dp", "optimized")) {
            EditStats s = solution.analyzeEditDistance(test1, test2, method);
            System.out.println(method + ": " + s.distance + " distance, " + s.timeMs + "ms, " + s.spaceUsed + " space");
        }
    }
}