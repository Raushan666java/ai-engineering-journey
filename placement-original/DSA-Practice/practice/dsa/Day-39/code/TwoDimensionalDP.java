package day39.fundamentals;

import java.util.*;

/**
 * Day 39: 2D Dynamic Programming Fundamentals
 * 
 * Core 2D DP Problems:
 * 1. Longest Common Subsequence (LCS)
 * 2. Edit Distance (Levenshtein Distance)
 * 3. Longest Common Substring
 * 4. Distinct Subsequences
 * 5. Wildcard Matching
 * 6. Regular Expression Matching
 * 7. Interleaving String
 * 8. Minimum Path Sum (Grid)
 * 
 * Each problem demonstrates:
 * - 2D state definition
 * - State transitions
 * - Space optimization
 * - Path reconstruction
 */
public class TwoDimensionalDP {
    
    // ==================== 1. LONGEST COMMON SUBSEQUENCE (LCS) ====================
    
    /**
     * LC 1143: Longest Common Subsequence
     * 
     * Problem: Find length of longest common subsequence between two strings.
     * Example: "abcde", "ace" → 3 (ace)
     * 
     * Approach: 2D DP
     * State: dp[i][j] = LCS length of s1[0..i-1] and s2[0..j-1]
     * Transition:
     *   If s1[i-1] == s2[j-1]: dp[i][j] = dp[i-1][j-1] + 1
     *   Else: dp[i][j] = max(dp[i-1][j], dp[i][j-1])
     * 
     * Time: O(m × n), Space: O(m × n)
     */
    public static int longestCommonSubsequence(String text1, String text2) {
        int m = text1.length(), n = text2.length();
        int[][] dp = new int[m + 1][n + 1];
        
        // Base case: dp[0][j] = 0, dp[i][0] = 0 (already initialized)
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (text1.charAt(i - 1) == text2.charAt(j - 1)) {
                    // Characters match: extend LCS
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    // Characters don't match: take max of skipping one
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }
        
        return dp[m][n];
    }
    
    /**
     * LCS with path reconstruction - returns the actual subsequence
     */
    public static String longestCommonSubsequenceString(String text1, String text2) {
        int m = text1.length(), n = text2.length();
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
        int i = m, j = n;
        
        while (i > 0 && j > 0) {
            if (text1.charAt(i - 1) == text2.charAt(j - 1)) {
                lcs.insert(0, text1.charAt(i - 1));
                i--;
                j--;
            } else if (dp[i - 1][j] > dp[i][j - 1]) {
                i--;
            } else {
                j--;
            }
        }
        
        return lcs.toString();
    }
    
    /**
     * LCS Space Optimized: O(min(m, n)) space
     */
    public static int longestCommonSubsequenceOptimized(String text1, String text2) {
        // Ensure text2 is shorter for space optimization
        if (text1.length() < text2.length()) {
            return longestCommonSubsequenceOptimized(text2, text1);
        }
        
        int m = text1.length(), n = text2.length();
        int[] prev = new int[n + 1];
        int[] curr = new int[n + 1];
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (text1.charAt(i - 1) == text2.charAt(j - 1)) {
                    curr[j] = prev[j - 1] + 1;
                } else {
                    curr[j] = Math.max(prev[j], curr[j - 1]);
                }
            }
            // Swap arrays
            int[] temp = prev;
            prev = curr;
            curr = temp;
        }
        
        return prev[n];
    }
    
    // ==================== 2. EDIT DISTANCE ====================
    
    /**
     * LC 72: Edit Distance (Levenshtein Distance)
     * 
     * Problem: Minimum operations (insert, delete, replace) to convert s1 to s2.
     * Example: "horse", "ros" → 3 (replace h→r, remove o, remove e)
     * 
     * Approach: 2D DP
     * State: dp[i][j] = min operations to convert s1[0..i-1] to s2[0..j-1]
     * Transition:
     *   If s1[i-1] == s2[j-1]: dp[i][j] = dp[i-1][j-1]
     *   Else: dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])
     *         (delete, insert, replace)
     * 
     * Time: O(m × n), Space: O(m × n)
     */
    public static int minDistance(String word1, String word2) {
        int m = word1.length(), n = word2.length();
        int[][] dp = new int[m + 1][n + 1];
        
        // Base cases
        for (int i = 0; i <= m; i++) {
            dp[i][0] = i; // Delete all characters from word1
        }
        for (int j = 0; j <= n; j++) {
            dp[0][j] = j; // Insert all characters to get word2
        }
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
                    // Characters match: no operation needed
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    // Take minimum of three operations
                    dp[i][j] = 1 + Math.min(
                        dp[i - 1][j],      // Delete from word1
                        Math.min(
                            dp[i][j - 1],  // Insert into word1
                            dp[i - 1][j - 1] // Replace
                        )
                    );
                }
            }
        }
        
        return dp[m][n];
    }
    
    /**
     * Edit Distance with path reconstruction
     */
    public static List<String> minDistanceWithOperations(String word1, String word2) {
        int m = word1.length(), n = word2.length();
        int[][] dp = new int[m + 1][n + 1];
        
        // Fill DP table
        for (int i = 0; i <= m; i++) dp[i][0] = i;
        for (int j = 0; j <= n; j++) dp[0][j] = j;
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    dp[i][j] = 1 + Math.min(dp[i - 1][j],
                                   Math.min(dp[i][j - 1], dp[i - 1][j - 1]));
                }
            }
        }
        
        // Reconstruct operations
        List<String> operations = new ArrayList<>();
        int i = m, j = n;
        
        while (i > 0 || j > 0) {
            if (i == 0) {
                operations.add(0, "Insert '" + word2.charAt(j - 1) + "'");
                j--;
            } else if (j == 0) {
                operations.add(0, "Delete '" + word1.charAt(i - 1) + "'");
                i--;
            } else if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
                operations.add(0, "Keep '" + word1.charAt(i - 1) + "'");
                i--;
                j--;
            } else {
                int replace = dp[i - 1][j - 1];
                int delete = dp[i - 1][j];
                int insert = dp[i][j - 1];
                
                if (replace <= delete && replace <= insert) {
                    operations.add(0, "Replace '" + word1.charAt(i - 1) + 
                                   "' with '" + word2.charAt(j - 1) + "'");
                    i--;
                    j--;
                } else if (delete <= insert) {
                    operations.add(0, "Delete '" + word1.charAt(i - 1) + "'");
                    i--;
                } else {
                    operations.add(0, "Insert '" + word2.charAt(j - 1) + "'");
                    j--;
                }
            }
        }
        
        return operations;
    }
    
    /**
     * Edit Distance Space Optimized: O(min(m, n)) space
     */
    public static int minDistanceOptimized(String word1, String word2) {
        if (word1.length() < word2.length()) {
            return minDistanceOptimized(word2, word1);
        }
        
        int m = word1.length(), n = word2.length();
        int[] prev = new int[n + 1];
        int[] curr = new int[n + 1];
        
        for (int j = 0; j <= n; j++) {
            prev[j] = j;
        }
        
        for (int i = 1; i <= m; i++) {
            curr[0] = i;
            for (int j = 1; j <= n; j++) {
                if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
                    curr[j] = prev[j - 1];
                } else {
                    curr[j] = 1 + Math.min(prev[j], 
                                  Math.min(curr[j - 1], prev[j - 1]));
                }
            }
            int[] temp = prev;
            prev = curr;
            curr = temp;
        }
        
        return prev[n];
    }
    
    // ==================== 3. LONGEST COMMON SUBSTRING ====================
    
    /**
     * Longest Common Substring (continuous)
     * 
     * Problem: Find length of longest common substring (must be continuous).
     * Example: "abcde", "abfce" → 2 ("ab")
     * 
     * Approach: 2D DP
     * State: dp[i][j] = length of common substring ending at s1[i-1] and s2[j-1]
     * Transition:
     *   If s1[i-1] == s2[j-1]: dp[i][j] = dp[i-1][j-1] + 1
     *   Else: dp[i][j] = 0
     * 
     * Time: O(m × n), Space: O(m × n)
     */
    public static int longestCommonSubstring(String text1, String text2) {
        int m = text1.length(), n = text2.length();
        int[][] dp = new int[m + 1][n + 1];
        int maxLen = 0;
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (text1.charAt(i - 1) == text2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                    maxLen = Math.max(maxLen, dp[i][j]);
                }
                // Else: dp[i][j] = 0 (already initialized)
            }
        }
        
        return maxLen;
    }
    
    /**
     * Longest Common Substring with actual string
     */
    public static String longestCommonSubstringString(String text1, String text2) {
        int m = text1.length(), n = text2.length();
        int[][] dp = new int[m + 1][n + 1];
        int maxLen = 0;
        int endIndex = 0;
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (text1.charAt(i - 1) == text2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                    if (dp[i][j] > maxLen) {
                        maxLen = dp[i][j];
                        endIndex = i;
                    }
                }
            }
        }
        
        return maxLen == 0 ? "" : text1.substring(endIndex - maxLen, endIndex);
    }
    
    /**
     * Longest Common Substring Space Optimized: O(n) space
     */
    public static int longestCommonSubstringOptimized(String text1, String text2) {
        int m = text1.length(), n = text2.length();
        int[] prev = new int[n + 1];
        int[] curr = new int[n + 1];
        int maxLen = 0;
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (text1.charAt(i - 1) == text2.charAt(j - 1)) {
                    curr[j] = prev[j - 1] + 1;
                    maxLen = Math.max(maxLen, curr[j]);
                } else {
                    curr[j] = 0;
                }
            }
            int[] temp = prev;
            prev = curr;
            curr = temp;
            Arrays.fill(curr, 0);
        }
        
        return maxLen;
    }
    
    // ==================== 4. DISTINCT SUBSEQUENCES ====================
    
    /**
     * LC 115: Distinct Subsequences
     * 
     * Problem: Count distinct subsequences of s that equal t.
     * Example: s = "rabbbit", t = "rabbit" → 3
     * 
     * Approach: 2D DP
     * State: dp[i][j] = # of ways to form t[0..j-1] from s[0..i-1]
     * Transition:
     *   If s[i-1] == t[j-1]: dp[i][j] = dp[i-1][j-1] + dp[i-1][j]
     *   Else: dp[i][j] = dp[i-1][j]
     * 
     * Time: O(m × n), Space: O(m × n)
     */
    public static int numDistinct(String s, String t) {
        int m = s.length(), n = t.length();
        long[][] dp = new long[m + 1][n + 1];
        
        // Base case: empty t can be formed in 1 way
        for (int i = 0; i <= m; i++) {
            dp[i][0] = 1;
        }
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (s.charAt(i - 1) == t.charAt(j - 1)) {
                    // Use current char or skip it
                    dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
                } else {
                    // Skip current char
                    dp[i][j] = dp[i - 1][j];
                }
            }
        }
        
        return (int) dp[m][n];
    }
    
    /**
     * Distinct Subsequences Space Optimized
     */
    public static int numDistinctOptimized(String s, String t) {
        int m = s.length(), n = t.length();
        long[] prev = new long[n + 1];
        long[] curr = new long[n + 1];
        
        prev[0] = 1;
        
        for (int i = 1; i <= m; i++) {
            curr[0] = 1;
            for (int j = 1; j <= n; j++) {
                if (s.charAt(i - 1) == t.charAt(j - 1)) {
                    curr[j] = prev[j - 1] + prev[j];
                } else {
                    curr[j] = prev[j];
                }
            }
            long[] temp = prev;
            prev = curr;
            curr = temp;
        }
        
        return (int) prev[n];
    }
    
    // ==================== 5. WILDCARD MATCHING ====================
    
    /**
     * LC 44: Wildcard Matching
     * 
     * Problem: Match string with wildcard pattern ('?' matches one, '*' matches any).
     * Example: s = "aa", p = "*" → true
     * 
     * Approach: 2D DP
     * State: dp[i][j] = whether s[0..i-1] matches p[0..j-1]
     * Transition:
     *   If p[j-1] == '*': dp[i][j] = dp[i][j-1] (0 chars) || dp[i-1][j] (1+ chars)
     *   Else if match: dp[i][j] = dp[i-1][j-1]
     * 
     * Time: O(m × n), Space: O(m × n)
     */
    public static boolean isMatch(String s, String p) {
        int m = s.length(), n = p.length();
        boolean[][] dp = new boolean[m + 1][n + 1];
        
        // Base case: empty strings match
        dp[0][0] = true;
        
        // Handle patterns like "*", "**", etc.
        for (int j = 1; j <= n; j++) {
            if (p.charAt(j - 1) == '*') {
                dp[0][j] = dp[0][j - 1];
            }
        }
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (p.charAt(j - 1) == '*') {
                    // '*' matches 0 or more characters
                    dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
                } else if (p.charAt(j - 1) == '?' || 
                           s.charAt(i - 1) == p.charAt(j - 1)) {
                    // '?' or exact match
                    dp[i][j] = dp[i - 1][j - 1];
                }
            }
        }
        
        return dp[m][n];
    }
    
    /**
     * Wildcard Matching Space Optimized
     */
    public static boolean isMatchOptimized(String s, String p) {
        int m = s.length(), n = p.length();
        boolean[] prev = new boolean[n + 1];
        boolean[] curr = new boolean[n + 1];
        
        prev[0] = true;
        for (int j = 1; j <= n; j++) {
            if (p.charAt(j - 1) == '*') {
                prev[j] = prev[j - 1];
            }
        }
        
        for (int i = 1; i <= m; i++) {
            curr[0] = false;
            for (int j = 1; j <= n; j++) {
                if (p.charAt(j - 1) == '*') {
                    curr[j] = curr[j - 1] || prev[j];
                } else if (p.charAt(j - 1) == '?' || 
                           s.charAt(i - 1) == p.charAt(j - 1)) {
                    curr[j] = prev[j - 1];
                }
            }
            boolean[] temp = prev;
            prev = curr;
            curr = temp;
            Arrays.fill(curr, false);
        }
        
        return prev[n];
    }
    
    // ==================== 6. REGULAR EXPRESSION MATCHING ====================
    
    /**
     * LC 10: Regular Expression Matching
     * 
     * Problem: Match string with regex pattern ('.' matches one, '*' matches 0+ of previous).
     * Example: s = "aa", p = "a*" → true
     * 
     * Approach: 2D DP
     * State: dp[i][j] = whether s[0..i-1] matches p[0..j-1]
     * Transition: Complex based on p[j-1] and p[j-2]
     * 
     * Time: O(m × n), Space: O(m × n)
     */
    public static boolean isMatchRegex(String s, String p) {
        int m = s.length(), n = p.length();
        boolean[][] dp = new boolean[m + 1][n + 1];
        
        dp[0][0] = true;
        
        // Handle patterns like "a*", "a*b*", etc.
        for (int j = 2; j <= n; j++) {
            if (p.charAt(j - 1) == '*') {
                dp[0][j] = dp[0][j - 2];
            }
        }
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (p.charAt(j - 1) == '*') {
                    // '*' matches 0 or more of previous character
                    dp[i][j] = dp[i][j - 2]; // 0 occurrences
                    
                    if (p.charAt(j - 2) == '.' || 
                        s.charAt(i - 1) == p.charAt(j - 2)) {
                        dp[i][j] = dp[i][j] || dp[i - 1][j]; // 1+ occurrences
                    }
                } else if (p.charAt(j - 1) == '.' || 
                           s.charAt(i - 1) == p.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1];
                }
            }
        }
        
        return dp[m][n];
    }
    
    // ==================== 7. INTERLEAVING STRING ====================
    
    /**
     * LC 97: Interleaving String
     * 
     * Problem: Check if s3 is interleaving of s1 and s2.
     * Example: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac" → true
     * 
     * Approach: 2D DP
     * State: dp[i][j] = whether s3[0..i+j-1] is interleaving of s1[0..i-1] and s2[0..j-1]
     * 
     * Time: O(m × n), Space: O(m × n)
     */
    public static boolean isInterleave(String s1, String s2, String s3) {
        int m = s1.length(), n = s2.length();
        
        if (m + n != s3.length()) return false;
        
        boolean[][] dp = new boolean[m + 1][n + 1];
        dp[0][0] = true;
        
        // Base cases
        for (int i = 1; i <= m; i++) {
            dp[i][0] = dp[i - 1][0] && s1.charAt(i - 1) == s3.charAt(i - 1);
        }
        for (int j = 1; j <= n; j++) {
            dp[0][j] = dp[0][j - 1] && s2.charAt(j - 1) == s3.charAt(j - 1);
        }
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                int k = i + j - 1;
                dp[i][j] = (dp[i - 1][j] && s1.charAt(i - 1) == s3.charAt(k)) ||
                           (dp[i][j - 1] && s2.charAt(j - 1) == s3.charAt(k));
            }
        }
        
        return dp[m][n];
    }
    
    /**
     * Interleaving String Space Optimized
     */
    public static boolean isInterleaveOptimized(String s1, String s2, String s3) {
        int m = s1.length(), n = s2.length();
        
        if (m + n != s3.length()) return false;
        
        boolean[] dp = new boolean[n + 1];
        dp[0] = true;
        
        for (int j = 1; j <= n; j++) {
            dp[j] = dp[j - 1] && s2.charAt(j - 1) == s3.charAt(j - 1);
        }
        
        for (int i = 1; i <= m; i++) {
            dp[0] = dp[0] && s1.charAt(i - 1) == s3.charAt(i - 1);
            for (int j = 1; j <= n; j++) {
                int k = i + j - 1;
                dp[j] = (dp[j] && s1.charAt(i - 1) == s3.charAt(k)) ||
                        (dp[j - 1] && s2.charAt(j - 1) == s3.charAt(k));
            }
        }
        
        return dp[n];
    }
    
    // ==================== 8. MINIMUM PATH SUM ====================
    
    /**
     * LC 64: Minimum Path Sum
     * 
     * Problem: Find path from top-left to bottom-right with minimum sum.
     * Example: [[1,3,1],[1,5,1],[4,2,1]] → 7 (1→3→1→1→1)
     * 
     * Approach: 2D DP
     * State: dp[i][j] = minimum sum to reach cell (i, j)
     * Transition: dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1])
     * 
     * Time: O(m × n), Space: O(m × n)
     */
    public static int minPathSum(int[][] grid) {
        int m = grid.length, n = grid[0].length;
        int[][] dp = new int[m][n];
        
        dp[0][0] = grid[0][0];
        
        // First row
        for (int j = 1; j < n; j++) {
            dp[0][j] = dp[0][j - 1] + grid[0][j];
        }
        
        // First column
        for (int i = 1; i < m; i++) {
            dp[i][0] = dp[i - 1][0] + grid[i][0];
        }
        
        // Fill table
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
            }
        }
        
        return dp[m - 1][n - 1];
    }
    
    /**
     * Minimum Path Sum with path reconstruction
     */
    public static List<int[]> minPathSumWithPath(int[][] grid) {
        int m = grid.length, n = grid[0].length;
        int[][] dp = new int[m][n];
        
        dp[0][0] = grid[0][0];
        
        for (int j = 1; j < n; j++) {
            dp[0][j] = dp[0][j - 1] + grid[0][j];
        }
        for (int i = 1; i < m; i++) {
            dp[i][0] = dp[i - 1][0] + grid[i][0];
        }
        
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
            }
        }
        
        // Reconstruct path
        List<int[]> path = new ArrayList<>();
        int i = m - 1, j = n - 1;
        path.add(new int[]{i, j});
        
        while (i > 0 || j > 0) {
            if (i == 0) {
                j--;
            } else if (j == 0) {
                i--;
            } else if (dp[i - 1][j] < dp[i][j - 1]) {
                i--;
            } else {
                j--;
            }
            path.add(0, new int[]{i, j});
        }
        
        return path;
    }
    
    /**
     * Minimum Path Sum Space Optimized: O(n) space
     */
    public static int minPathSumOptimized(int[][] grid) {
        int m = grid.length, n = grid[0].length;
        int[] dp = new int[n];
        
        dp[0] = grid[0][0];
        for (int j = 1; j < n; j++) {
            dp[j] = dp[j - 1] + grid[0][j];
        }
        
        for (int i = 1; i < m; i++) {
            dp[0] += grid[i][0];
            for (int j = 1; j < n; j++) {
                dp[j] = grid[i][j] + Math.min(dp[j], dp[j - 1]);
            }
        }
        
        return dp[n - 1];
    }
    
    // ==================== UTILITY METHODS ====================
    
    /**
     * Print 2D DP table for debugging
     */
    public static void print2DTable(int[][] dp) {
        System.out.println("DP Table:");
        for (int i = 0; i < dp.length; i++) {
            for (int j = 0; j < dp[i].length; j++) {
                System.out.printf("%4d ", dp[i][j]);
            }
            System.out.println();
        }
        System.out.println();
    }
    
    /**
     * Print 2D boolean table
     */
    public static void print2DBoolTable(boolean[][] dp) {
        System.out.println("DP Table:");
        for (int i = 0; i < dp.length; i++) {
            for (int j = 0; j < dp[i].length; j++) {
                System.out.print(dp[i][j] ? "T " : "F ");
            }
            System.out.println();
        }
        System.out.println();
    }
    
    // ==================== DEMO ====================
    
    public static void main(String[] args) {
        System.out.println("=== Day 39: 2D Dynamic Programming ===\n");
        
        // Demo 1: Longest Common Subsequence
        System.out.println("1. Longest Common Subsequence:");
        String s1 = "abcde", s2 = "ace";
        System.out.println("String 1: " + s1 + ", String 2: " + s2);
        System.out.println("LCS Length: " + longestCommonSubsequence(s1, s2));
        System.out.println("LCS String: " + longestCommonSubsequenceString(s1, s2));
        System.out.println("Space Optimized: " + longestCommonSubsequenceOptimized(s1, s2));
        
        // Demo 2: Edit Distance
        System.out.println("\n2. Edit Distance:");
        String w1 = "horse", w2 = "ros";
        System.out.println("Word 1: " + w1 + ", Word 2: " + w2);
        System.out.println("Min operations: " + minDistance(w1, w2));
        System.out.println("Operations: " + minDistanceWithOperations(w1, w2));
        
        // Demo 3: Longest Common Substring
        System.out.println("\n3. Longest Common Substring:");
        String t1 = "abcde", t2 = "abfce";
        System.out.println("String 1: " + t1 + ", String 2: " + t2);
        System.out.println("Length: " + longestCommonSubstring(t1, t2));
        System.out.println("Substring: " + longestCommonSubstringString(t1, t2));
        
        // Demo 4: Distinct Subsequences
        System.out.println("\n4. Distinct Subsequences:");
        String s = "rabbbit", t = "rabbit";
        System.out.println("S: " + s + ", T: " + t);
        System.out.println("Count: " + numDistinct(s, t));
        
        // Demo 5: Wildcard Matching
        System.out.println("\n5. Wildcard Matching:");
        String str = "aa", pat = "a*";
        System.out.println("String: " + str + ", Pattern: " + pat);
        System.out.println("Match: " + isMatch(str, pat));
        
        // Demo 6: Regular Expression Matching
        System.out.println("\n6. Regular Expression Matching:");
        String str2 = "aa", pat2 = "a*";
        System.out.println("String: " + str2 + ", Pattern: " + pat2);
        System.out.println("Match: " + isMatchRegex(str2, pat2));
        
        // Demo 7: Interleaving String
        System.out.println("\n7. Interleaving String:");
        String s1i = "aabcc", s2i = "dbbca", s3i = "aadbbcbcac";
        System.out.println("S1: " + s1i + ", S2: " + s2i + ", S3: " + s3i);
        System.out.println("Is Interleaving: " + isInterleave(s1i, s2i, s3i));
        
        // Demo 8: Minimum Path Sum
        System.out.println("\n8. Minimum Path Sum:");
        int[][] grid = {{1,3,1},{1,5,1},{4,2,1}};
        System.out.println("Grid:");
        for (int[] row : grid) {
            System.out.println(Arrays.toString(row));
        }
        System.out.println("Min Path Sum: " + minPathSum(grid));
        List<int[]> path = minPathSumWithPath(grid);
        System.out.print("Path: ");
        for (int[] cell : path) {
            System.out.print("(" + cell[0] + "," + cell[1] + ") ");
        }
        System.out.println();
    }
}
