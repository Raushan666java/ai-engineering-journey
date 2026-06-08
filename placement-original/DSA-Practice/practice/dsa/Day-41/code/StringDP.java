package day41.fundamentals;

import java.util.*;

/**
 * Day 41: String Dynamic Programming - Comprehensive Implementation
 * 
 * This file contains 8 fundamental string DP algorithms with multiple approaches:
 * 1. Longest Common Subsequence (LCS) - Recursive, Memoization, Tabulation, Space-Optimized
 * 2. Longest Common Substring - DP Table, Space-Optimized
 * 3. Edit Distance (Levenshtein) - Memoization, Tabulation, Space-Optimized
 * 4. Longest Palindromic Subsequence - Memoization, Tabulation
 * 5. Longest Palindromic Substring - Expand Around Center, DP Table, Manacher's Algorithm
 * 6. Distinct Subsequences - Memoization, Tabulation, Space-Optimized
 * 7. Wildcard Pattern Matching - Memoization, Tabulation, Space-Optimized
 * 8. Regular Expression Matching - Memoization, Tabulation
 * 
 * Each algorithm includes:
 * - Multiple implementation approaches (recursive, memoization, tabulation)
 * - Space optimization where applicable
 * - Detailed comments explaining the logic
 * - Time and space complexity analysis
 */
public class StringDP {
    
    // ======================== 1. LONGEST COMMON SUBSEQUENCE (LCS) ========================
    
    /**
     * LCS using recursion (exponential time)
     * Time: O(2^(m+n)), Space: O(m+n) for recursion stack
     */
    public static int lcsRecursive(String s1, String s2) {
        return lcsRecursiveHelper(s1, s2, s1.length(), s2.length());
    }
    
    private static int lcsRecursiveHelper(String s1, String s2, int m, int n) {
        if (m == 0 || n == 0) {
            return 0;
        }
        
        if (s1.charAt(m - 1) == s2.charAt(n - 1)) {
            return 1 + lcsRecursiveHelper(s1, s2, m - 1, n - 1);
        } else {
            return Math.max(
                lcsRecursiveHelper(s1, s2, m - 1, n),
                lcsRecursiveHelper(s1, s2, m, n - 1)
            );
        }
    }
    
    /**
     * LCS using memoization (top-down DP)
     * Time: O(m*n), Space: O(m*n)
     */
    public static int lcsMemoization(String s1, String s2) {
        int[][] memo = new int[s1.length() + 1][s2.length() + 1];
        for (int[] row : memo) {
            Arrays.fill(row, -1);
        }
        return lcsMemoHelper(s1, s2, s1.length(), s2.length(), memo);
    }
    
    private static int lcsMemoHelper(String s1, String s2, int m, int n, int[][] memo) {
        if (m == 0 || n == 0) {
            return 0;
        }
        
        if (memo[m][n] != -1) {
            return memo[m][n];
        }
        
        if (s1.charAt(m - 1) == s2.charAt(n - 1)) {
            memo[m][n] = 1 + lcsMemoHelper(s1, s2, m - 1, n - 1, memo);
        } else {
            memo[m][n] = Math.max(
                lcsMemoHelper(s1, s2, m - 1, n, memo),
                lcsMemoHelper(s1, s2, m, n - 1, memo)
            );
        }
        
        return memo[m][n];
    }
    
    /**
     * LCS using tabulation (bottom-up DP)
     * Time: O(m*n), Space: O(m*n)
     */
    public static int lcsTabulation(String s1, String s2) {
        int m = s1.length();
        int n = s2.length();
        int[][] dp = new int[m + 1][n + 1];
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (s1.charAt(i - 1) == s2.charAt(j - 1)) {
                    dp[i][j] = 1 + dp[i - 1][j - 1];
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }
        
        return dp[m][n];
    }
    
    /**
     * LCS with space optimization (using 1D array)
     * Time: O(m*n), Space: O(min(m,n))
     */
    public static int lcsSpaceOptimized(String s1, String s2) {
        // Ensure s1 is the shorter string for space optimization
        if (s1.length() > s2.length()) {
            String temp = s1;
            s1 = s2;
            s2 = temp;
        }
        
        int m = s1.length();
        int n = s2.length();
        int[] prev = new int[m + 1];
        int[] curr = new int[m + 1];
        
        for (int j = 1; j <= n; j++) {
            for (int i = 1; i <= m; i++) {
                if (s1.charAt(i - 1) == s2.charAt(j - 1)) {
                    curr[i] = 1 + prev[i - 1];
                } else {
                    curr[i] = Math.max(prev[i], curr[i - 1]);
                }
            }
            int[] temp = prev;
            prev = curr;
            curr = temp;
            Arrays.fill(curr, 0);
        }
        
        return prev[m];
    }
    
    /**
     * LCS with path reconstruction
     * Returns the actual longest common subsequence
     */
    public static String lcsWithPath(String s1, String s2) {
        int m = s1.length();
        int n = s2.length();
        int[][] dp = new int[m + 1][n + 1];
        
        // Build DP table
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (s1.charAt(i - 1) == s2.charAt(j - 1)) {
                    dp[i][j] = 1 + dp[i - 1][j - 1];
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }
        
        // Reconstruct the LCS
        StringBuilder lcs = new StringBuilder();
        int i = m, j = n;
        while (i > 0 && j > 0) {
            if (s1.charAt(i - 1) == s2.charAt(j - 1)) {
                lcs.append(s1.charAt(i - 1));
                i--;
                j--;
            } else if (dp[i - 1][j] > dp[i][j - 1]) {
                i--;
            } else {
                j--;
            }
        }
        
        return lcs.reverse().toString();
    }
    
    // ======================== 2. LONGEST COMMON SUBSTRING ========================
    
    /**
     * Longest Common Substring using DP table
     * Time: O(m*n), Space: O(m*n)
     */
    public static int longestCommonSubstring(String s1, String s2) {
        int m = s1.length();
        int n = s2.length();
        int[][] dp = new int[m + 1][n + 1];
        int maxLen = 0;
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (s1.charAt(i - 1) == s2.charAt(j - 1)) {
                    dp[i][j] = 1 + dp[i - 1][j - 1];
                    maxLen = Math.max(maxLen, dp[i][j]);
                } else {
                    dp[i][j] = 0;
                }
            }
        }
        
        return maxLen;
    }
    
    /**
     * Longest Common Substring with space optimization
     * Time: O(m*n), Space: O(n)
     */
    public static int longestCommonSubstringOptimized(String s1, String s2) {
        int m = s1.length();
        int n = s2.length();
        int[] prev = new int[n + 1];
        int[] curr = new int[n + 1];
        int maxLen = 0;
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (s1.charAt(i - 1) == s2.charAt(j - 1)) {
                    curr[j] = 1 + prev[j - 1];
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
    
    /**
     * Longest Common Substring with the substring itself
     */
    public static String longestCommonSubstringWithPath(String s1, String s2) {
        int m = s1.length();
        int n = s2.length();
        int[][] dp = new int[m + 1][n + 1];
        int maxLen = 0;
        int endIndex = 0;
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (s1.charAt(i - 1) == s2.charAt(j - 1)) {
                    dp[i][j] = 1 + dp[i - 1][j - 1];
                    if (dp[i][j] > maxLen) {
                        maxLen = dp[i][j];
                        endIndex = i;
                    }
                }
            }
        }
        
        if (maxLen == 0) {
            return "";
        }
        
        return s1.substring(endIndex - maxLen, endIndex);
    }
    
    // ======================== 3. EDIT DISTANCE (LEVENSHTEIN) ========================
    
    /**
     * Edit Distance using memoization
     * Operations: insert, delete, replace
     * Time: O(m*n), Space: O(m*n)
     */
    public static int editDistanceMemo(String s1, String s2) {
        int[][] memo = new int[s1.length() + 1][s2.length() + 1];
        for (int[] row : memo) {
            Arrays.fill(row, -1);
        }
        return editDistanceMemoHelper(s1, s2, s1.length(), s2.length(), memo);
    }
    
    private static int editDistanceMemoHelper(String s1, String s2, int m, int n, int[][] memo) {
        if (m == 0) return n;
        if (n == 0) return m;
        
        if (memo[m][n] != -1) {
            return memo[m][n];
        }
        
        if (s1.charAt(m - 1) == s2.charAt(n - 1)) {
            memo[m][n] = editDistanceMemoHelper(s1, s2, m - 1, n - 1, memo);
        } else {
            int insert = editDistanceMemoHelper(s1, s2, m, n - 1, memo);
            int delete = editDistanceMemoHelper(s1, s2, m - 1, n, memo);
            int replace = editDistanceMemoHelper(s1, s2, m - 1, n - 1, memo);
            memo[m][n] = 1 + Math.min(insert, Math.min(delete, replace));
        }
        
        return memo[m][n];
    }
    
    /**
     * Edit Distance using tabulation
     * Time: O(m*n), Space: O(m*n)
     */
    public static int editDistanceTabulation(String s1, String s2) {
        int m = s1.length();
        int n = s2.length();
        int[][] dp = new int[m + 1][n + 1];
        
        // Base cases
        for (int i = 0; i <= m; i++) {
            dp[i][0] = i;
        }
        for (int j = 0; j <= n; j++) {
            dp[0][j] = j;
        }
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (s1.charAt(i - 1) == s2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    dp[i][j] = 1 + Math.min(
                        dp[i][j - 1],      // insert
                        Math.min(
                            dp[i - 1][j],    // delete
                            dp[i - 1][j - 1] // replace
                        )
                    );
                }
            }
        }
        
        return dp[m][n];
    }
    
    /**
     * Edit Distance with space optimization
     * Time: O(m*n), Space: O(n)
     */
    public static int editDistanceOptimized(String s1, String s2) {
        int m = s1.length();
        int n = s2.length();
        int[] prev = new int[n + 1];
        int[] curr = new int[n + 1];
        
        for (int j = 0; j <= n; j++) {
            prev[j] = j;
        }
        
        for (int i = 1; i <= m; i++) {
            curr[0] = i;
            for (int j = 1; j <= n; j++) {
                if (s1.charAt(i - 1) == s2.charAt(j - 1)) {
                    curr[j] = prev[j - 1];
                } else {
                    curr[j] = 1 + Math.min(
                        curr[j - 1],     // insert
                        Math.min(
                            prev[j],      // delete
                            prev[j - 1]   // replace
                        )
                    );
                }
            }
            int[] temp = prev;
            prev = curr;
            curr = temp;
        }
        
        return prev[n];
    }
    
    // ======================== 4. LONGEST PALINDROMIC SUBSEQUENCE ========================
    
    /**
     * Longest Palindromic Subsequence using memoization
     * Time: O(n^2), Space: O(n^2)
     */
    public static int longestPalindromicSubsequence(String s) {
        int n = s.length();
        int[][] memo = new int[n][n];
        for (int[] row : memo) {
            Arrays.fill(row, -1);
        }
        return lpsHelper(s, 0, n - 1, memo);
    }
    
    private static int lpsHelper(String s, int i, int j, int[][] memo) {
        if (i > j) return 0;
        if (i == j) return 1;
        
        if (memo[i][j] != -1) {
            return memo[i][j];
        }
        
        if (s.charAt(i) == s.charAt(j)) {
            memo[i][j] = 2 + lpsHelper(s, i + 1, j - 1, memo);
        } else {
            memo[i][j] = Math.max(
                lpsHelper(s, i + 1, j, memo),
                lpsHelper(s, i, j - 1, memo)
            );
        }
        
        return memo[i][j];
    }
    
    /**
     * Longest Palindromic Subsequence using tabulation
     * Time: O(n^2), Space: O(n^2)
     */
    public static int longestPalindromicSubsequenceTab(String s) {
        int n = s.length();
        int[][] dp = new int[n][n];
        
        // Every single character is a palindrome of length 1
        for (int i = 0; i < n; i++) {
            dp[i][i] = 1;
        }
        
        // Fill the DP table for substrings of length 2 to n
        for (int len = 2; len <= n; len++) {
            for (int i = 0; i <= n - len; i++) {
                int j = i + len - 1;
                if (s.charAt(i) == s.charAt(j)) {
                    dp[i][j] = 2 + (len == 2 ? 0 : dp[i + 1][j - 1]);
                } else {
                    dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
                }
            }
        }
        
        return dp[0][n - 1];
    }
    
    /**
     * Alternative: LPS as LCS(s, reverse(s))
     * Time: O(n^2), Space: O(n^2)
     */
    public static int longestPalindromicSubsequenceLCS(String s) {
        String rev = new StringBuilder(s).reverse().toString();
        return lcsTabulation(s, rev);
    }
    
    // ======================== 5. LONGEST PALINDROMIC SUBSTRING ========================
    
    /**
     * Longest Palindromic Substring - Expand Around Center
     * Time: O(n^2), Space: O(1)
     */
    public static String longestPalindromicSubstring(String s) {
        if (s == null || s.length() == 0) return "";
        
        int start = 0, maxLen = 0;
        
        for (int i = 0; i < s.length(); i++) {
            // Odd length palindromes
            int len1 = expandAroundCenter(s, i, i);
            // Even length palindromes
            int len2 = expandAroundCenter(s, i, i + 1);
            int len = Math.max(len1, len2);
            
            if (len > maxLen) {
                maxLen = len;
                start = i - (len - 1) / 2;
            }
        }
        
        return s.substring(start, start + maxLen);
    }
    
    private static int expandAroundCenter(String s, int left, int right) {
        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            left--;
            right++;
        }
        return right - left - 1;
    }
    
    /**
     * Longest Palindromic Substring using DP table
     * Time: O(n^2), Space: O(n^2)
     */
    public static String longestPalindromicSubstringDP(String s) {
        int n = s.length();
        if (n == 0) return "";
        
        boolean[][] dp = new boolean[n][n];
        int start = 0, maxLen = 1;
        
        // Every single character is a palindrome
        for (int i = 0; i < n; i++) {
            dp[i][i] = true;
        }
        
        // Check for two-character palindromes
        for (int i = 0; i < n - 1; i++) {
            if (s.charAt(i) == s.charAt(i + 1)) {
                dp[i][i + 1] = true;
                start = i;
                maxLen = 2;
            }
        }
        
        // Check for palindromes of length 3 and more
        for (int len = 3; len <= n; len++) {
            for (int i = 0; i <= n - len; i++) {
                int j = i + len - 1;
                if (s.charAt(i) == s.charAt(j) && dp[i + 1][j - 1]) {
                    dp[i][j] = true;
                    start = i;
                    maxLen = len;
                }
            }
        }
        
        return s.substring(start, start + maxLen);
    }
    
    /**
     * Manacher's Algorithm for Longest Palindromic Substring
     * Time: O(n), Space: O(n)
     */
    public static String longestPalindromicSubstringManacher(String s) {
        if (s == null || s.length() == 0) return "";
        
        // Transform s to add boundaries
        String t = "#";
        for (char c : s.toCharArray()) {
            t += c + "#";
        }
        
        int n = t.length();
        int[] p = new int[n]; // p[i] = radius of palindrome centered at i
        int center = 0, right = 0;
        int maxLen = 0, centerIndex = 0;
        
        for (int i = 0; i < n; i++) {
            // Mirror of i with respect to center
            int mirror = 2 * center - i;
            
            if (i < right) {
                p[i] = Math.min(right - i, p[mirror]);
            }
            
            // Try to expand palindrome centered at i
            int a = i + (1 + p[i]);
            int b = i - (1 + p[i]);
            while (a < n && b >= 0 && t.charAt(a) == t.charAt(b)) {
                p[i]++;
                a++;
                b--;
            }
            
            // Update center and right if palindrome centered at i extends past right
            if (i + p[i] > right) {
                center = i;
                right = i + p[i];
            }
            
            // Track the maximum palindrome
            if (p[i] > maxLen) {
                maxLen = p[i];
                centerIndex = i;
            }
        }
        
        // Extract the original palindrome substring
        int start = (centerIndex - maxLen) / 2;
        return s.substring(start, start + maxLen);
    }
    
    // ======================== 6. DISTINCT SUBSEQUENCES ========================
    
    /**
     * Count distinct subsequences of t in s
     * Time: O(m*n), Space: O(m*n)
     */
    public static int distinctSubsequences(String s, String t) {
        int m = s.length();
        int n = t.length();
        int[][] memo = new int[m + 1][n + 1];
        for (int[] row : memo) {
            Arrays.fill(row, -1);
        }
        return distinctSubseqHelper(s, t, m, n, memo);
    }
    
    private static int distinctSubseqHelper(String s, String t, int m, int n, int[][] memo) {
        if (n == 0) return 1; // Empty string is a subsequence
        if (m == 0) return 0; // Can't form t from empty s
        
        if (memo[m][n] != -1) {
            return memo[m][n];
        }
        
        if (s.charAt(m - 1) == t.charAt(n - 1)) {
            memo[m][n] = distinctSubseqHelper(s, t, m - 1, n - 1, memo) + 
                         distinctSubseqHelper(s, t, m - 1, n, memo);
        } else {
            memo[m][n] = distinctSubseqHelper(s, t, m - 1, n, memo);
        }
        
        return memo[m][n];
    }
    
    /**
     * Distinct Subsequences using tabulation
     * Time: O(m*n), Space: O(m*n)
     */
    public static int distinctSubsequencesTab(String s, String t) {
        int m = s.length();
        int n = t.length();
        int[][] dp = new int[m + 1][n + 1];
        
        // Empty string has one subsequence (empty string)
        for (int i = 0; i <= m; i++) {
            dp[i][0] = 1;
        }
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                dp[i][j] = dp[i - 1][j];
                if (s.charAt(i - 1) == t.charAt(j - 1)) {
                    dp[i][j] += dp[i - 1][j - 1];
                }
            }
        }
        
        return dp[m][n];
    }
    
    /**
     * Distinct Subsequences with space optimization
     * Time: O(m*n), Space: O(n)
     */
    public static int distinctSubsequencesOptimized(String s, String t) {
        int m = s.length();
        int n = t.length();
        int[] prev = new int[n + 1];
        int[] curr = new int[n + 1];
        
        prev[0] = 1;
        curr[0] = 1;
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                curr[j] = prev[j];
                if (s.charAt(i - 1) == t.charAt(j - 1)) {
                    curr[j] += prev[j - 1];
                }
            }
            int[] temp = prev;
            prev = curr;
            curr = temp;
            Arrays.fill(curr, 0);
            curr[0] = 1;
        }
        
        return prev[n];
    }
    
    // ======================== 7. WILDCARD PATTERN MATCHING ========================
    
    /**
     * Wildcard Pattern Matching with memoization
     * '?' matches any single character
     * '*' matches any sequence of characters (including empty)
     * Time: O(m*n), Space: O(m*n)
     */
    public static boolean wildcardMatching(String s, String p) {
        int[][] memo = new int[s.length() + 1][p.length() + 1];
        for (int[] row : memo) {
            Arrays.fill(row, -1);
        }
        return wildcardHelper(s, p, s.length(), p.length(), memo) == 1;
    }
    
    private static int wildcardHelper(String s, String p, int m, int n, int[][] memo) {
        if (m == 0 && n == 0) return 1;
        if (n == 0) return 0;
        if (m == 0) {
            // Check if remaining pattern is all '*'
            for (int i = 0; i < n; i++) {
                if (p.charAt(i) != '*') return 0;
            }
            return 1;
        }
        
        if (memo[m][n] != -1) {
            return memo[m][n];
        }
        
        if (p.charAt(n - 1) == '*') {
            // '*' can match empty sequence or one or more characters
            int matchEmpty = wildcardHelper(s, p, m, n - 1, memo);
            int matchOne = wildcardHelper(s, p, m - 1, n, memo);
            memo[m][n] = (matchEmpty == 1 || matchOne == 1) ? 1 : 0;
        } else if (p.charAt(n - 1) == '?' || s.charAt(m - 1) == p.charAt(n - 1)) {
            memo[m][n] = wildcardHelper(s, p, m - 1, n - 1, memo);
        } else {
            memo[m][n] = 0;
        }
        
        return memo[m][n];
    }
    
    /**
     * Wildcard Pattern Matching using tabulation
     * Time: O(m*n), Space: O(m*n)
     */
    public static boolean wildcardMatchingTab(String s, String p) {
        int m = s.length();
        int n = p.length();
        boolean[][] dp = new boolean[m + 1][n + 1];
        
        dp[0][0] = true;
        
        // Handle patterns starting with '*'
        for (int j = 1; j <= n; j++) {
            if (p.charAt(j - 1) == '*') {
                dp[0][j] = dp[0][j - 1];
            }
        }
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (p.charAt(j - 1) == '*') {
                    dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
                } else if (p.charAt(j - 1) == '?' || s.charAt(i - 1) == p.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1];
                }
            }
        }
        
        return dp[m][n];
    }
    
    /**
     * Wildcard Pattern Matching with space optimization
     * Time: O(m*n), Space: O(n)
     */
    public static boolean wildcardMatchingOptimized(String s, String p) {
        int m = s.length();
        int n = p.length();
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
                } else if (p.charAt(j - 1) == '?' || s.charAt(i - 1) == p.charAt(j - 1)) {
                    curr[j] = prev[j - 1];
                } else {
                    curr[j] = false;
                }
            }
            boolean[] temp = prev;
            prev = curr;
            curr = temp;
        }
        
        return prev[n];
    }
    
    // ======================== 8. REGULAR EXPRESSION MATCHING ========================
    
    /**
     * Regular Expression Matching with memoization
     * '.' matches any single character
     * '*' matches zero or more of the preceding element
     * Time: O(m*n), Space: O(m*n)
     */
    public static boolean regexMatching(String s, String p) {
        int[][] memo = new int[s.length() + 1][p.length() + 1];
        for (int[] row : memo) {
            Arrays.fill(row, -1);
        }
        return regexHelper(s, p, 0, 0, memo) == 1;
    }
    
    private static int regexHelper(String s, String p, int i, int j, int[][] memo) {
        if (j == p.length()) {
            return i == s.length() ? 1 : 0;
        }
        
        if (memo[i][j] != -1) {
            return memo[i][j];
        }
        
        boolean firstMatch = i < s.length() && 
                            (p.charAt(j) == '.' || s.charAt(i) == p.charAt(j));
        
        if (j + 1 < p.length() && p.charAt(j + 1) == '*') {
            // Two choices: match zero occurrences or match one+ occurrences
            int matchZero = regexHelper(s, p, i, j + 2, memo);
            int matchOne = firstMatch ? regexHelper(s, p, i + 1, j, memo) : 0;
            memo[i][j] = (matchZero == 1 || matchOne == 1) ? 1 : 0;
        } else {
            memo[i][j] = firstMatch ? regexHelper(s, p, i + 1, j + 1, memo) : 0;
        }
        
        return memo[i][j];
    }
    
    /**
     * Regular Expression Matching using tabulation
     * Time: O(m*n), Space: O(m*n)
     */
    public static boolean regexMatchingTab(String s, String p) {
        int m = s.length();
        int n = p.length();
        boolean[][] dp = new boolean[m + 1][n + 1];
        
        dp[0][0] = true;
        
        // Handle patterns like a*, a*b*, a*b*c*
        for (int j = 2; j <= n; j++) {
            if (p.charAt(j - 1) == '*') {
                dp[0][j] = dp[0][j - 2];
            }
        }
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (p.charAt(j - 1) == '*') {
                    // Match zero occurrences of preceding element
                    dp[i][j] = dp[i][j - 2];
                    // Match one or more occurrences
                    if (p.charAt(j - 2) == '.' || s.charAt(i - 1) == p.charAt(j - 2)) {
                        dp[i][j] = dp[i][j] || dp[i - 1][j];
                    }
                } else if (p.charAt(j - 1) == '.' || s.charAt(i - 1) == p.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1];
                }
            }
        }
        
        return dp[m][n];
    }
}
