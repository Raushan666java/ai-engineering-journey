package day41.practice;

import java.util.*;

/**
 * Day 41: Advanced String DP Practice Problems
 * 
 * This file contains 8 advanced LeetCode-style problems with multiple solutions:
 * 1. Interleaving Strings - Memoization, Tabulation, Space-Optimized
 * 2. Shortest Common Supersequence - DP with Path Reconstruction
 * 3. Palindrome Partitioning II - DP with Precomputation
 * 4. Word Break II - Backtracking with Memoization
 * 5. Scramble String - 3D DP, Memoization
 * 6. Minimum Window Subsequence - DP, Two-Pointer
 * 7. Longest Repeating Subsequence - Modified LCS
 * 8. Count Palindromic Substrings - Expand Around Center, DP
 */
public class Day41Practice {
    
    // ======================== 1. INTERLEAVING STRINGS ========================
    
    /**
     * LeetCode 97: Interleaving String
     * Check if s3 is formed by interleaving s1 and s2
     * Time: O(m*n), Space: O(m*n)
     */
    public static boolean isInterleave(String s1, String s2, String s3) {
        if (s1.length() + s2.length() != s3.length()) {
            return false;
        }
        
        int[][] memo = new int[s1.length() + 1][s2.length() + 1];
        for (int[] row : memo) {
            Arrays.fill(row, -1);
        }
        
        return isInterleaveHelper(s1, s2, s3, 0, 0, 0, memo);
    }
    
    private static boolean isInterleaveHelper(String s1, String s2, String s3, 
                                             int i, int j, int k, int[][] memo) {
        if (k == s3.length()) {
            return true;
        }
        
        if (memo[i][j] != -1) {
            return memo[i][j] == 1;
        }
        
        boolean result = false;
        
        if (i < s1.length() && s1.charAt(i) == s3.charAt(k)) {
            result = isInterleaveHelper(s1, s2, s3, i + 1, j, k + 1, memo);
        }
        
        if (!result && j < s2.length() && s2.charAt(j) == s3.charAt(k)) {
            result = isInterleaveHelper(s1, s2, s3, i, j + 1, k + 1, memo);
        }
        
        memo[i][j] = result ? 1 : 0;
        return result;
    }
    
    /**
     * Interleaving String using tabulation
     * Time: O(m*n), Space: O(m*n)
     */
    public static boolean isInterleaveTab(String s1, String s2, String s3) {
        if (s1.length() + s2.length() != s3.length()) {
            return false;
        }
        
        int m = s1.length();
        int n = s2.length();
        boolean[][] dp = new boolean[m + 1][n + 1];
        
        dp[0][0] = true;
        
        // Fill first column
        for (int i = 1; i <= m; i++) {
            dp[i][0] = dp[i - 1][0] && s1.charAt(i - 1) == s3.charAt(i - 1);
        }
        
        // Fill first row
        for (int j = 1; j <= n; j++) {
            dp[0][j] = dp[0][j - 1] && s2.charAt(j - 1) == s3.charAt(j - 1);
        }
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                boolean match1 = dp[i - 1][j] && s1.charAt(i - 1) == s3.charAt(i + j - 1);
                boolean match2 = dp[i][j - 1] && s2.charAt(j - 1) == s3.charAt(i + j - 1);
                dp[i][j] = match1 || match2;
            }
        }
        
        return dp[m][n];
    }
    
    /**
     * Interleaving String with space optimization
     * Time: O(m*n), Space: O(n)
     */
    public static boolean isInterleaveOptimized(String s1, String s2, String s3) {
        if (s1.length() + s2.length() != s3.length()) {
            return false;
        }
        
        int m = s1.length();
        int n = s2.length();
        boolean[] prev = new boolean[n + 1];
        boolean[] curr = new boolean[n + 1];
        
        prev[0] = true;
        
        for (int j = 1; j <= n; j++) {
            prev[j] = prev[j - 1] && s2.charAt(j - 1) == s3.charAt(j - 1);
        }
        
        for (int i = 1; i <= m; i++) {
            curr[0] = prev[0] && s1.charAt(i - 1) == s3.charAt(i - 1);
            
            for (int j = 1; j <= n; j++) {
                boolean match1 = prev[j] && s1.charAt(i - 1) == s3.charAt(i + j - 1);
                boolean match2 = curr[j - 1] && s2.charAt(j - 1) == s3.charAt(i + j - 1);
                curr[j] = match1 || match2;
            }
            
            boolean[] temp = prev;
            prev = curr;
            curr = temp;
        }
        
        return prev[n];
    }
    
    // ======================== 2. SHORTEST COMMON SUPERSEQUENCE ========================
    
    /**
     * LeetCode 1092: Shortest Common Supersequence
     * Find the shortest string that has both s1 and s2 as subsequences
     * Time: O(m*n), Space: O(m*n)
     */
    public static String shortestCommonSupersequence(String s1, String s2) {
        int m = s1.length();
        int n = s2.length();
        
        // Build LCS DP table
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
        
        // Build the SCS by traversing the DP table
        StringBuilder result = new StringBuilder();
        int i = m, j = n;
        
        while (i > 0 && j > 0) {
            if (s1.charAt(i - 1) == s2.charAt(j - 1)) {
                result.append(s1.charAt(i - 1));
                i--;
                j--;
            } else if (dp[i - 1][j] > dp[i][j - 1]) {
                result.append(s1.charAt(i - 1));
                i--;
            } else {
                result.append(s2.charAt(j - 1));
                j--;
            }
        }
        
        // Add remaining characters
        while (i > 0) {
            result.append(s1.charAt(i - 1));
            i--;
        }
        while (j > 0) {
            result.append(s2.charAt(j - 1));
            j--;
        }
        
        return result.reverse().toString();
    }
    
    /**
     * Alternative: SCS length calculation
     * SCS length = m + n - LCS length
     */
    public static int shortestCommonSupersequenceLength(String s1, String s2) {
        int m = s1.length();
        int n = s2.length();
        int lcsLen = lcsLength(s1, s2);
        return m + n - lcsLen;
    }
    
    private static int lcsLength(String s1, String s2) {
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
    
    // ======================== 3. PALINDROME PARTITIONING II ========================
    
    /**
     * LeetCode 132: Palindrome Partitioning II
     * Find minimum cuts needed to partition s such that every substring is a palindrome
     * Time: O(n^2), Space: O(n^2)
     */
    public static int minCut(String s) {
        int n = s.length();
        
        // Precompute palindrome table
        boolean[][] isPalin = new boolean[n][n];
        for (int i = 0; i < n; i++) {
            isPalin[i][i] = true;
        }
        
        for (int len = 2; len <= n; len++) {
            for (int i = 0; i <= n - len; i++) {
                int j = i + len - 1;
                if (s.charAt(i) == s.charAt(j)) {
                    isPalin[i][j] = (len == 2) || isPalin[i + 1][j - 1];
                }
            }
        }
        
        // DP for minimum cuts
        int[] dp = new int[n];
        for (int i = 0; i < n; i++) {
            if (isPalin[0][i]) {
                dp[i] = 0;
            } else {
                dp[i] = i; // Maximum possible cuts
                for (int j = 1; j <= i; j++) {
                    if (isPalin[j][i]) {
                        dp[i] = Math.min(dp[i], dp[j - 1] + 1);
                    }
                }
            }
        }
        
        return dp[n - 1];
    }
    
    /**
     * Palindrome Partitioning II - Optimized with expand around center
     * Time: O(n^2), Space: O(n)
     */
    public static int minCutOptimized(String s) {
        int n = s.length();
        int[] dp = new int[n];
        
        for (int i = 0; i < n; i++) {
            dp[i] = i; // Maximum cuts needed
        }
        
        for (int center = 0; center < n; center++) {
            // Odd length palindromes
            expandAndUpdate(s, dp, center, center);
            // Even length palindromes
            expandAndUpdate(s, dp, center, center + 1);
        }
        
        return dp[n - 1];
    }
    
    private static void expandAndUpdate(String s, int[] dp, int left, int right) {
        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            int newCuts = (left == 0) ? 0 : dp[left - 1] + 1;
            dp[right] = Math.min(dp[right], newCuts);
            left--;
            right++;
        }
    }
    
    // ======================== 4. WORD BREAK II ========================
    
    /**
     * LeetCode 140: Word Break II
     * Return all possible sentences by adding spaces in s
     * Time: O(n * 2^n) worst case, Space: O(n * 2^n)
     */
    public static List<String> wordBreak(String s, List<String> wordDict) {
        Set<String> dict = new HashSet<>(wordDict);
        Map<String, List<String>> memo = new HashMap<>();
        return wordBreakHelper(s, dict, memo);
    }
    
    private static List<String> wordBreakHelper(String s, Set<String> dict, 
                                               Map<String, List<String>> memo) {
        if (memo.containsKey(s)) {
            return memo.get(s);
        }
        
        List<String> result = new ArrayList<>();
        
        if (dict.contains(s)) {
            result.add(s);
        }
        
        for (int i = 1; i < s.length(); i++) {
            String left = s.substring(0, i);
            if (dict.contains(left)) {
                List<String> rightResults = wordBreakHelper(s.substring(i), dict, memo);
                for (String right : rightResults) {
                    result.add(left + " " + right);
                }
            }
        }
        
        memo.put(s, result);
        return result;
    }
    
    /**
     * Word Break II with DP precomputation
     * First check if word break is possible, then generate sentences
     */
    public static List<String> wordBreakWithCheck(String s, List<String> wordDict) {
        Set<String> dict = new HashSet<>(wordDict);
        
        // Check if word break is possible
        if (!canBreak(s, dict)) {
            return new ArrayList<>();
        }
        
        Map<String, List<String>> memo = new HashMap<>();
        return wordBreakHelper(s, dict, memo);
    }
    
    private static boolean canBreak(String s, Set<String> dict) {
        int n = s.length();
        boolean[] dp = new boolean[n + 1];
        dp[0] = true;
        
        for (int i = 1; i <= n; i++) {
            for (int j = 0; j < i; j++) {
                if (dp[j] && dict.contains(s.substring(j, i))) {
                    dp[i] = true;
                    break;
                }
            }
        }
        
        return dp[n];
    }
    
    // ======================== 5. SCRAMBLE STRING ========================
    
    /**
     * LeetCode 87: Scramble String
     * Check if s2 is a scrambled string of s1
     * Time: O(n^4), Space: O(n^3)
     */
    public static boolean isScramble(String s1, String s2) {
        if (s1.equals(s2)) return true;
        if (s1.length() != s2.length()) return false;
        
        Map<String, Boolean> memo = new HashMap<>();
        return isScrambleHelper(s1, s2, memo);
    }
    
    private static boolean isScrambleHelper(String s1, String s2, Map<String, Boolean> memo) {
        if (s1.equals(s2)) return true;
        if (s1.length() != s2.length()) return false;
        
        String key = s1 + "#" + s2;
        if (memo.containsKey(key)) {
            return memo.get(key);
        }
        
        // Check if characters match
        int[] count = new int[26];
        for (int i = 0; i < s1.length(); i++) {
            count[s1.charAt(i) - 'a']++;
            count[s2.charAt(i) - 'a']--;
        }
        for (int c : count) {
            if (c != 0) {
                memo.put(key, false);
                return false;
            }
        }
        
        // Try all possible split points
        int n = s1.length();
        for (int i = 1; i < n; i++) {
            // No swap
            if (isScrambleHelper(s1.substring(0, i), s2.substring(0, i), memo) &&
                isScrambleHelper(s1.substring(i), s2.substring(i), memo)) {
                memo.put(key, true);
                return true;
            }
            
            // With swap
            if (isScrambleHelper(s1.substring(0, i), s2.substring(n - i), memo) &&
                isScrambleHelper(s1.substring(i), s2.substring(0, n - i), memo)) {
                memo.put(key, true);
                return true;
            }
        }
        
        memo.put(key, false);
        return false;
    }
    
    /**
     * Scramble String using 3D DP table
     * Time: O(n^4), Space: O(n^3)
     */
    public static boolean isScrambleDP(String s1, String s2) {
        if (s1.equals(s2)) return true;
        if (s1.length() != s2.length()) return false;
        
        int n = s1.length();
        boolean[][][] dp = new boolean[n][n][n + 1];
        
        // Base case: substrings of length 1
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                dp[i][j][1] = s1.charAt(i) == s2.charAt(j);
            }
        }
        
        // Fill DP table for increasing lengths
        for (int len = 2; len <= n; len++) {
            for (int i = 0; i <= n - len; i++) {
                for (int j = 0; j <= n - len; j++) {
                    for (int k = 1; k < len; k++) {
                        // No swap
                        if (dp[i][j][k] && dp[i + k][j + k][len - k]) {
                            dp[i][j][len] = true;
                            break;
                        }
                        // With swap
                        if (dp[i][j + len - k][k] && dp[i + k][j][len - k]) {
                            dp[i][j][len] = true;
                            break;
                        }
                    }
                }
            }
        }
        
        return dp[0][0][n];
    }
    
    // ======================== 6. MINIMUM WINDOW SUBSEQUENCE ========================
    
    /**
     * LeetCode 727: Minimum Window Subsequence
     * Find minimum window in s1 that contains s2 as subsequence
     * Time: O(m*n), Space: O(m*n)
     */
    public static String minWindowSubsequence(String s1, String s2) {
        int m = s1.length();
        int n = s2.length();
        
        // dp[i][j] = start index of minimum window ending at s1[i-1] containing s2[0..j-1]
        int[][] dp = new int[m + 1][n + 1];
        
        for (int i = 0; i <= m; i++) {
            dp[i][0] = i + 1;
        }
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= Math.min(i, n); j++) {
                if (s1.charAt(i - 1) == s2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    dp[i][j] = dp[i - 1][j];
                }
            }
        }
        
        int start = 0, minLen = Integer.MAX_VALUE;
        for (int i = 1; i <= m; i++) {
            if (dp[i][n] > 0) {
                int len = i - dp[i][n] + 1;
                if (len < minLen) {
                    minLen = len;
                    start = dp[i][n] - 1;
                }
            }
        }
        
        return minLen == Integer.MAX_VALUE ? "" : s1.substring(start, start + minLen);
    }
    
    /**
     * Minimum Window Subsequence using two-pointer approach
     * Time: O(m*n), Space: O(1)
     */
    public static String minWindowSubsequenceTwoPointer(String s1, String s2) {
        int m = s1.length();
        int n = s2.length();
        int minLen = Integer.MAX_VALUE;
        String result = "";
        
        int i = 0;
        while (i < m) {
            int j = 0;
            // Forward pass: find subsequence
            while (i < m && j < n) {
                if (s1.charAt(i) == s2.charAt(j)) {
                    j++;
                }
                i++;
            }
            
            if (j == n) {
                // Backward pass: shrink window
                int end = i;
                j--;
                i--;
                while (j >= 0) {
                    if (s1.charAt(i) == s2.charAt(j)) {
                        j--;
                    }
                    i--;
                }
                i++;
                
                if (end - i < minLen) {
                    minLen = end - i;
                    result = s1.substring(i, end);
                }
                i++; // Move past current window start
            }
        }
        
        return result;
    }
    
    // ======================== 7. LONGEST REPEATING SUBSEQUENCE ========================
    
    /**
     * Longest Repeating Subsequence
     * Find longest subsequence that appears at least twice (at different positions)
     * Time: O(n^2), Space: O(n^2)
     */
    public static int longestRepeatingSubsequence(String s) {
        int n = s.length();
        int[][] dp = new int[n + 1][n + 1];
        
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                if (s.charAt(i - 1) == s.charAt(j - 1) && i != j) {
                    dp[i][j] = 1 + dp[i - 1][j - 1];
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }
        
        return dp[n][n];
    }
    
    /**
     * Longest Repeating Subsequence with the actual sequence
     */
    public static String longestRepeatingSubsequenceString(String s) {
        int n = s.length();
        int[][] dp = new int[n + 1][n + 1];
        
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                if (s.charAt(i - 1) == s.charAt(j - 1) && i != j) {
                    dp[i][j] = 1 + dp[i - 1][j - 1];
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }
        
        // Reconstruct the sequence
        StringBuilder result = new StringBuilder();
        int i = n, j = n;
        while (i > 0 && j > 0) {
            if (s.charAt(i - 1) == s.charAt(j - 1) && i != j) {
                result.append(s.charAt(i - 1));
                i--;
                j--;
            } else if (dp[i - 1][j] > dp[i][j - 1]) {
                i--;
            } else {
                j--;
            }
        }
        
        return result.reverse().toString();
    }
    
    // ======================== 8. COUNT PALINDROMIC SUBSTRINGS ========================
    
    /**
     * LeetCode 647: Palindromic Substrings
     * Count all palindromic substrings
     * Time: O(n^2), Space: O(1)
     */
    public static int countPalindromicSubstrings(String s) {
        int count = 0;
        for (int i = 0; i < s.length(); i++) {
            // Odd length palindromes
            count += countPalindromes(s, i, i);
            // Even length palindromes
            count += countPalindromes(s, i, i + 1);
        }
        return count;
    }
    
    private static int countPalindromes(String s, int left, int right) {
        int count = 0;
        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            count++;
            left--;
            right++;
        }
        return count;
    }
    
    /**
     * Count Palindromic Substrings using DP
     * Time: O(n^2), Space: O(n^2)
     */
    public static int countPalindromicSubstringsDP(String s) {
        int n = s.length();
        boolean[][] dp = new boolean[n][n];
        int count = 0;
        
        // Single characters
        for (int i = 0; i < n; i++) {
            dp[i][i] = true;
            count++;
        }
        
        // Two characters
        for (int i = 0; i < n - 1; i++) {
            if (s.charAt(i) == s.charAt(i + 1)) {
                dp[i][i + 1] = true;
                count++;
            }
        }
        
        // Three or more characters
        for (int len = 3; len <= n; len++) {
            for (int i = 0; i <= n - len; i++) {
                int j = i + len - 1;
                if (s.charAt(i) == s.charAt(j) && dp[i + 1][j - 1]) {
                    dp[i][j] = true;
                    count++;
                }
            }
        }
        
        return count;
    }
    
    /**
     * Count Palindromic Substrings - Manacher's Algorithm
     * Time: O(n), Space: O(n)
     */
    public static int countPalindromicSubstringsManacher(String s) {
        // Transform string
        StringBuilder t = new StringBuilder("#");
        for (char c : s.toCharArray()) {
            t.append(c).append("#");
        }
        
        int n = t.length();
        int[] p = new int[n];
        int center = 0, right = 0;
        int count = 0;
        
        for (int i = 0; i < n; i++) {
            int mirror = 2 * center - i;
            
            if (i < right) {
                p[i] = Math.min(right - i, p[mirror]);
            }
            
            // Expand around i
            int a = i + (1 + p[i]);
            int b = i - (1 + p[i]);
            while (a < n && b >= 0 && t.charAt(a) == t.charAt(b)) {
                p[i]++;
                a++;
                b--;
            }
            
            if (i + p[i] > right) {
                center = i;
                right = i + p[i];
            }
            
            // Count palindromes
            count += (p[i] + 1) / 2;
        }
        
        return count;
    }
}
