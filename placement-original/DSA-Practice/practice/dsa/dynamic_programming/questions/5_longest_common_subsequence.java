package dynamic_programming.questions;

/*
 * 5. LONGEST COMMON SUBSEQUENCE (LeetCode 1143)
 *
 * Problem Statement:
 * Given two strings text1 and text2, return the length of their longest common subsequence.
 * A subsequence of a string is a new string generated from the original string with some
 * characters (can be none) deleted without changing the relative order of the remaining characters.
 *
 * Conceptual Understanding:
 * - Find longest subsequence present in both strings
 * - Characters don't need to be contiguous, but order must be preserved
 * - DP state: dp[i][j] = LCS of text1[0..i-1] and text2[0..j-1]
 * - If chars match: dp[i][j] = dp[i-1][j-1] + 1
 * - If not match: dp[i][j] = max(dp[i-1][j], dp[i][j-1])
 * - Base case: dp[0][j] = 0, dp[i][0] = 0
 *
 * Time Complexity: O(m*n)
 * Space Complexity: O(m*n), can be optimized to O(min(m,n))
 */

import java.util.*;

class LongestCommonSubsequence5 {

    // Method 1: Recursive with memoization (Top-down)
    public int longestCommonSubsequenceMemo(String text1, String text2) {
        if (text1 == null || text2 == null) return 0;

        int m = text1.length();
        int n = text2.length();
        int[][] memo = new int[m + 1][n + 1];
        for (int[] row : memo) Arrays.fill(row, -1);

        return lcsHelper(text1, text2, m, n, memo);
    }

    private int lcsHelper(String text1, String text2, int i, int j, int[][] memo) {
        if (i == 0 || j == 0) return 0;
        if (memo[i][j] != -1) return memo[i][j];

        if (text1.charAt(i - 1) == text2.charAt(j - 1)) {
            memo[i][j] = lcsHelper(text1, text2, i - 1, j - 1, memo) + 1;
        } else {
            memo[i][j] = Math.max(
                lcsHelper(text1, text2, i - 1, j, memo),
                lcsHelper(text1, text2, i, j - 1, memo)
            );
        }

        return memo[i][j];
    }

    // Method 2: Bottom-up dynamic programming
    public int longestCommonSubsequenceDP(String text1, String text2) {
        if (text1 == null || text2 == null) return 0;

        int m = text1.length();
        int n = text2.length();
        int[][] dp = new int[m + 1][n + 1];

        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (text1.charAt(i - 1) == text2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }

        return dp[m][n];
    }

    // Method 3: Space optimized DP (O(min(m,n)) space)
    public int longestCommonSubsequenceOptimized(String text1, String text2) {
        if (text1 == null || text2 == null) return 0;

        // Ensure text1 is the shorter string
        if (text1.length() > text2.length()) {
            String temp = text1;
            text1 = text2;
            text2 = temp;
        }

        int m = text1.length();
        int n = text2.length();
        int[] prev = new int[m + 1];
        int[] curr = new int[m + 1];

        for (int j = 1; j <= n; j++) {
            for (int i = 1; i <= m; i++) {
                if (text1.charAt(i - 1) == text2.charAt(j - 1)) {
                    curr[i] = prev[i - 1] + 1;
                } else {
                    curr[i] = Math.max(prev[i], curr[i - 1]);
                }
            }
            // Swap arrays
            int[] temp = prev;
            prev = curr;
            curr = temp;
            Arrays.fill(curr, 0);
        }

        return prev[m];
    }

    // Method 4: Get the actual LCS string
    public static class LCSResult {
        int length;
        String subsequence;
        List<Integer> positions1;
        List<Integer> positions2;

        public LCSResult(int length, String subsequence, List<Integer> positions1, List<Integer> positions2) {
            this.length = length;
            this.subsequence = subsequence;
            this.positions1 = positions1;
            this.positions2 = positions2;
        }

        @Override
        public String toString() {
            return String.format("Length=%d, LCS='%s', Pos1=%s, Pos2=%s",
                               length, subsequence, positions1, positions2);
        }
    }

    public LCSResult getLCSWithString(String text1, String text2) {
        if (text1 == null || text2 == null) {
            return new LCSResult(0, "", new ArrayList<>(), new ArrayList<>());
        }

        int m = text1.length();
        int n = text2.length();
        int[][] dp = new int[m + 1][n + 1];

        // Fill DP table
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (text1.charAt(i - 1) == text2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }

        // Reconstruct LCS
        StringBuilder lcs = new StringBuilder();
        List<Integer> pos1 = new ArrayList<>();
        List<Integer> pos2 = new ArrayList<>();
        int i = m, j = n;

        while (i > 0 && j > 0) {
            if (text1.charAt(i - 1) == text2.charAt(j - 1)) {
                lcs.append(text1.charAt(i - 1));
                pos1.add(i - 1);
                pos2.add(j - 1);
                i--;
                j--;
            } else if (dp[i - 1][j] > dp[i][j - 1]) {
                i--;
            } else {
                j--;
            }
        }

        // Reverse the results
        lcs.reverse();
        Collections.reverse(pos1);
        Collections.reverse(pos2);

        return new LCSResult(dp[m][n], lcs.toString(), pos1, pos2);
    }

    // Method 5: All LCS strings
    public List<String> getAllLCS(String text1, String text2) {
        Set<String> result = new HashSet<>();
        getAllLCSHelper(text1, text2, text1.length(), text2.length(), "", result);
        return new ArrayList<>(result);
    }

    private void getAllLCSHelper(String text1, String text2, int i, int j, String current, Set<String> result) {
        if (i == 0 || j == 0) {
            if (!current.isEmpty()) {
                result.add(current);
            }
            return;
        }

        if (text1.charAt(i - 1) == text2.charAt(j - 1)) {
            getAllLCSHelper(text1, text2, i - 1, j - 1, text1.charAt(i - 1) + current, result);
        } else {
            if (getLCSLength(text1, text2, i - 1, j) >= getLCSLength(text1, text2, i, j - 1)) {
                getAllLCSHelper(text1, text2, i - 1, j, current, result);
            }
            if (getLCSLength(text1, text2, i, j - 1) >= getLCSLength(text1, text2, i - 1, j)) {
                getAllLCSHelper(text1, text2, i, j - 1, current, result);
            }
        }
    }

    private int getLCSLength(String text1, String text2, int i, int j) {
        if (i == 0 || j == 0) return 0;
        if (text1.charAt(i - 1) == text2.charAt(j - 1)) {
            return getLCSLength(text1, text2, i - 1, j - 1) + 1;
        } else {
            return Math.max(getLCSLength(text1, text2, i - 1, j), getLCSLength(text1, text2, i, j - 1));
        }
    }

    // Method 6: LCS with minimum deletions
    public int minDeletionsForLCS(String text1, String text2) {
        int lcs = longestCommonSubsequenceDP(text1, text2);
        return text1.length() + text2.length() - 2 * lcs;
    }

    // Method 7: Performance analysis
    public static class LCSStats {
        int len1;
        int len2;
        int lcsLength;
        long timeMs;
        String method;
        int spaceUsed;

        public LCSStats(int len1, int len2, int lcsLength, long timeMs, String method, int spaceUsed) {
            this.len1 = len1;
            this.len2 = lcsLength;
            this.lcsLength = lcsLength;
            this.timeMs = timeMs;
            this.method = method;
            this.spaceUsed = spaceUsed;
        }

        @Override
        public String toString() {
            return String.format("Len1=%d, Len2=%d, LCS=%d, Time=%dms, Method=%s, Space=%d",
                               len1, len2, lcsLength, timeMs, method, spaceUsed);
        }
    }

    public LCSStats analyzeLCS(String text1, String text2, String method) {
        long startTime = System.nanoTime();
        int lcsLength = 0;
        int space = 0;

        switch (method) {
            case "memo":
                lcsLength = longestCommonSubsequenceMemo(text1, text2);
                space = text1.length() * text2.length();
                break;
            case "dp":
                lcsLength = longestCommonSubsequenceDP(text1, text2);
                space = text1.length() * text2.length();
                break;
            case "optimized":
                lcsLength = longestCommonSubsequenceOptimized(text1, text2);
                space = 2 * Math.min(text1.length(), text2.length());
                break;
        }

        long timeMs = (System.nanoTime() - startTime) / 1_000_000;
        return new LCSStats(text1.length(), text2.length(), lcsLength, timeMs, method, space);
    }

    // Method 8: Validate LCS result
    public boolean validateLCS(String text1, String text2, LCSResult result) {
        if (text1 == null || text2 == null) return result.length == 0;

        // Check length
        if (result.subsequence.length() != result.length) return false;

        // Check if subsequence exists in both strings
        int pos1 = 0, pos2 = 0;
        for (char c : result.subsequence.toCharArray()) {
            // Find c in text1 starting from pos1
            while (pos1 < text1.length() && text1.charAt(pos1) != c) pos1++;
            if (pos1 >= text1.length()) return false;
            pos1++;

            // Find c in text2 starting from pos2
            while (pos2 < text2.length() && text2.charAt(pos2) != c) pos2++;
            if (pos2 >= text2.length()) return false;
            pos2++;
        }

        return true;
    }

    // Method 9: LCS with constraints (minimum length)
    public String longestCommonSubsequenceMinLength(String text1, String text2, int minLength) {
        LCSResult result = getLCSWithString(text1, text2);
        return result.length >= minLength ? result.subsequence : "";
    }

    // Method 10: LCS similarity score
    public double lcsSimilarity(String text1, String text2) {
        if (text1 == null || text2 == null) return 0.0;

        int lcs = longestCommonSubsequenceDP(text1, text2);
        int maxLen = Math.max(text1.length(), text2.length());

        return maxLen == 0 ? 1.0 : (double) lcs / maxLen;
    }

    // Method 11: Multiple strings LCS
    public int longestCommonSubsequenceMultiple(String[] strings) {
        if (strings == null || strings.length == 0) return 0;
        if (strings.length == 1) return strings[0].length();

        String result = strings[0];
        for (int i = 1; i < strings.length; i++) {
            result = getLCSWithString(result, strings[i]).subsequence;
            if (result.isEmpty()) return 0;
        }

        return result.length();
    }

    // Method 12: LCS with character frequencies
    public Map<Character, Integer> lcsCharacterFrequency(String text1, String text2) {
        LCSResult result = getLCSWithString(text1, text2);
        Map<Character, Integer> freq = new HashMap<>();

        for (char c : result.subsequence.toCharArray()) {
            freq.put(c, freq.getOrDefault(c, 0) + 1);
        }

        return freq;
    }

    // Test cases
    public static void main(String[] args) {
        LongestCommonSubsequence5 solution = new LongestCommonSubsequence5();

        // Test Case 1: Basic LCS
        System.out.println("=== Longest Common Subsequence ===");
        String text1 = "abcde";
        String text2 = "ace";
        System.out.println("Text1: '" + text1 + "', Text2: '" + text2 + "'");

        System.out.println("Memoization: " + solution.longestCommonSubsequenceMemo(text1, text2));
        System.out.println("DP: " + solution.longestCommonSubsequenceDP(text1, text2));
        System.out.println("Optimized: " + solution.longestCommonSubsequenceOptimized(text1, text2));

        // Test Case 2: With actual string
        LCSResult result = solution.getLCSWithString(text1, text2);
        System.out.println("With string: " + result);

        // Test Case 3: All LCS strings
        List<String> allLCS = solution.getAllLCS("abc", "bac");
        System.out.println("All LCS for 'abc' and 'bac': " + allLCS);

        // Test Case 4: Minimum deletions
        System.out.println("Min deletions: " + solution.minDeletionsForLCS(text1, text2));

        // Test Case 5: Performance analysis
        LCSStats stats = solution.analyzeLCS(text1, text2, "dp");
        System.out.println("Analysis: " + stats);

        // Test Case 6: Validation
        boolean valid = solution.validateLCS(text1, text2, result);
        System.out.println("Result valid: " + valid);

        // Test Case 7: Minimum length constraint
        System.out.println("Min length 2: '" + solution.longestCommonSubsequenceMinLength(text1, text2, 2) + "'");

        // Test Case 8: Similarity score
        System.out.println("Similarity: " + String.format("%.3f", solution.lcsSimilarity(text1, text2)));

        // Test Case 9: Multiple strings
        String[] multiple = {"abcde", "ace", "bcd"};
        System.out.println("Multiple strings LCS: " + solution.longestCommonSubsequenceMultiple(multiple));

        // Test Case 10: Character frequency
        Map<Character, Integer> freq = solution.lcsCharacterFrequency(text1, text2);
        System.out.println("Character frequency: " + freq);

        // Test Case 11: Edge cases
        System.out.println("\nEdge cases:");
        System.out.println("Empty strings: " + solution.longestCommonSubsequenceDP("", ""));
        System.out.println("One empty: " + solution.longestCommonSubsequenceDP("abc", ""));
        System.out.println("Identical: " + solution.longestCommonSubsequenceDP("abc", "abc"));
        System.out.println("No common: " + solution.longestCommonSubsequenceDP("abc", "def"));

        // Test Case 12: Compare methods
        System.out.println("\nMethod comparison:");
        String test1 = "AGGTAB";
        String test2 = "GXTXAYB";
        for (String method : Arrays.asList("memo", "dp", "optimized")) {
            LCSStats s = solution.analyzeLCS(test1, test2, method);
            System.out.println(method + ": " + s.lcsLength + " length, " + s.timeMs + "ms, " + s.spaceUsed + " space");
        }
    }
}