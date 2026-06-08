package day42.fundamentals;

import java.util.*;

/**
 * Day 42: Advanced Dynamic Programming - Comprehensive Implementation
 * 
 * This file contains 8 advanced DP algorithms with multiple approaches:
 * 1. Burst Balloons - Interval DP
 * 2. Palindrome Partitioning - 2D DP + Palindrome checking
 * 3. Regular Expression Matching - 2D DP with wildcards
 * 4. Matrix Chain Multiplication - Classic Interval DP
 * 5. Traveling Salesman Problem - Bitmask DP
 * 6. Tree Diameter - Tree DP
 * 7. Count of Range Sum - Segment Tree + DP
 * 8. Distinct Subsequences - Space-optimized 2D DP
 * 
 * Each algorithm includes:
 * - Multiple implementation approaches (recursive, memoization, tabulation)
 * - Space optimization where applicable
 * - Detailed comments explaining the logic
 * - Time and space complexity analysis
 */
public class AdvancedDP {
    
    // ======================== 1. BURST BALLOONS (INTERVAL DP) ========================
    
    /**
     * Burst Balloons - Interval DP
     * Given balloons with numbers, burst them to get coins = nums[left] * nums[i] * nums[right]
     * Time: O(n³), Space: O(n²)
     */
    public static int maxCoins(int[] nums) {
        if (nums == null || nums.length == 0) return 0;
        
        int n = nums.length;
        // Add virtual balloons with value 1 at both ends
        int[] arr = new int[n + 2];
        arr[0] = 1;
        arr[n + 1] = 1;
        for (int i = 0; i < n; i++) {
            arr[i + 1] = nums[i];
        }
        
        // dp[i][j] = max coins from bursting balloons between i and j
        int[][] dp = new int[n + 2][n + 2];
        
        // len is the length of interval
        for (int len = 1; len <= n; len++) {
            for (int left = 1; left <= n - len + 1; left++) {
                int right = left + len - 1;
                
                // Try bursting each balloon k as the last one in this interval
                for (int k = left; k <= right; k++) {
                    // Coins from bursting k last = arr[left-1] * arr[k] * arr[right+1]
                    // Plus coins from left and right sub-intervals
                    int coins = arr[left - 1] * arr[k] * arr[right + 1];
                    coins += dp[left][k - 1] + dp[k + 1][right];
                    dp[left][right] = Math.max(dp[left][right], coins);
                }
            }
        }
        
        return dp[1][n];
    }
    
    /**
     * Burst Balloons - Memoization approach
     * Time: O(n³), Space: O(n²)
     */
    public static int maxCoinsMemo(int[] nums) {
        if (nums == null || nums.length == 0) return 0;
        
        int n = nums.length;
        int[] arr = new int[n + 2];
        arr[0] = 1;
        arr[n + 1] = 1;
        System.arraycopy(nums, 0, arr, 1, n);
        
        int[][] memo = new int[n + 2][n + 2];
        for (int[] row : memo) {
            Arrays.fill(row, -1);
        }
        
        return maxCoinsMemoHelper(arr, 1, n, memo);
    }
    
    private static int maxCoinsMemoHelper(int[] arr, int left, int right, int[][] memo) {
        if (left > right) return 0;
        if (memo[left][right] != -1) return memo[left][right];
        
        int maxCoins = 0;
        for (int k = left; k <= right; k++) {
            int coins = arr[left - 1] * arr[k] * arr[right + 1];
            coins += maxCoinsMemoHelper(arr, left, k - 1, memo);
            coins += maxCoinsMemoHelper(arr, k + 1, right, memo);
            maxCoins = Math.max(maxCoins, coins);
        }
        
        memo[left][right] = maxCoins;
        return maxCoins;
    }
    
    // ======================== 2. PALINDROME PARTITIONING II ========================
    
    /**
     * Minimum cuts needed to partition string into palindromes
     * Time: O(n²), Space: O(n²)
     */
    public static int minCut(String s) {
        int n = s.length();
        
        // isPalindrome[i][j] = true if s[i..j] is palindrome
        boolean[][] isPalindrome = new boolean[n][n];
        
        // Build palindrome table
        for (int i = n - 1; i >= 0; i--) {
            for (int j = i; j < n; j++) {
                if (s.charAt(i) == s.charAt(j)) {
                    if (j - i <= 1 || isPalindrome[i + 1][j - 1]) {
                        isPalindrome[i][j] = true;
                    }
                }
            }
        }
        
        // dp[i] = minimum cuts needed for s[0..i]
        int[] dp = new int[n];
        Arrays.fill(dp, Integer.MAX_VALUE);
        
        for (int i = 0; i < n; i++) {
            if (isPalindrome[0][i]) {
                dp[i] = 0;  // Entire substring is palindrome
            } else {
                for (int j = 0; j < i; j++) {
                    if (isPalindrome[j + 1][i]) {
                        dp[i] = Math.min(dp[i], dp[j] + 1);
                    }
                }
            }
        }
        
        return dp[n - 1];
    }
    
    /**
     * Palindrome Partitioning - Alternative approach
     * Expand from center while building DP
     * Time: O(n²), Space: O(n)
     */
    public static int minCutOptimized(String s) {
        int n = s.length();
        int[] dp = new int[n];
        
        for (int i = 0; i < n; i++) {
            dp[i] = i;  // Maximum possible cuts
        }
        
        for (int center = 0; center < n; center++) {
            // Odd length palindromes
            expandAndUpdate(s, center, center, dp);
            // Even length palindromes
            if (center < n - 1) {
                expandAndUpdate(s, center, center + 1, dp);
            }
        }
        
        return dp[n - 1];
    }
    
    private static void expandAndUpdate(String s, int left, int right, int[] dp) {
        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            int cuts = (left == 0) ? 0 : dp[left - 1] + 1;
            dp[right] = Math.min(dp[right], cuts);
            left--;
            right++;
        }
    }
    
    // ======================== 3. REGULAR EXPRESSION MATCHING ========================
    
    /**
     * Regular Expression Matching with '.' and '*'
     * '.' matches any single character
     * '*' matches zero or more of the preceding element
     * Time: O(m*n), Space: O(m*n)
     */
    public static boolean isMatch(String s, String p) {
        int m = s.length();
        int n = p.length();
        
        // dp[i][j] = true if s[0..i-1] matches p[0..j-1]
        boolean[][] dp = new boolean[m + 1][n + 1];
        dp[0][0] = true;  // Empty string matches empty pattern
        
        // Handle patterns like a*, a*b*, a*b*c* that can match empty string
        for (int j = 2; j <= n; j++) {
            if (p.charAt(j - 1) == '*') {
                dp[0][j] = dp[0][j - 2];
            }
        }
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                char sChar = s.charAt(i - 1);
                char pChar = p.charAt(j - 1);
                
                if (pChar == '*') {
                    char prevPChar = p.charAt(j - 2);
                    // Two choices:
                    // 1. Use * as zero occurrence: dp[i][j-2]
                    // 2. Use * as one or more: check if prevPChar matches sChar
                    dp[i][j] = dp[i][j - 2];  // Zero occurrence
                    if (prevPChar == '.' || prevPChar == sChar) {
                        dp[i][j] = dp[i][j] || dp[i - 1][j];  // One or more
                    }
                } else if (pChar == '.' || pChar == sChar) {
                    dp[i][j] = dp[i - 1][j - 1];
                }
            }
        }
        
        return dp[m][n];
    }
    
    /**
     * Regular Expression Matching - Memoization
     * Time: O(m*n), Space: O(m*n)
     */
    public static boolean isMatchMemo(String s, String p) {
        Boolean[][] memo = new Boolean[s.length() + 1][p.length() + 1];
        return isMatchHelper(s, p, 0, 0, memo);
    }
    
    private static boolean isMatchHelper(String s, String p, int i, int j, Boolean[][] memo) {
        if (memo[i][j] != null) {
            return memo[i][j];
        }
        
        if (j == p.length()) {
            return i == s.length();
        }
        
        boolean firstMatch = i < s.length() && 
                            (p.charAt(j) == '.' || p.charAt(j) == s.charAt(i));
        
        boolean result;
        if (j + 1 < p.length() && p.charAt(j + 1) == '*') {
            // Two choices: use * as zero or one-or-more
            result = isMatchHelper(s, p, i, j + 2, memo) ||  // Zero
                    (firstMatch && isMatchHelper(s, p, i + 1, j, memo));  // One or more
        } else {
            result = firstMatch && isMatchHelper(s, p, i + 1, j + 1, memo);
        }
        
        memo[i][j] = result;
        return result;
    }
    
    // ======================== 4. MATRIX CHAIN MULTIPLICATION ========================
    
    /**
     * Matrix Chain Multiplication - Find minimum multiplication operations
     * Given dimensions array: matrices are A1[p[0] x p[1]], A2[p[1] x p[2]], ...
     * Time: O(n³), Space: O(n²)
     */
    public static int matrixChainOrder(int[] p) {
        int n = p.length - 1;  // Number of matrices
        
        // dp[i][j] = minimum multiplications for matrices from i to j
        int[][] dp = new int[n][n];
        
        // Cost is zero when multiplying one matrix
        for (int i = 0; i < n; i++) {
            dp[i][i] = 0;
        }
        
        // len is chain length
        for (int len = 2; len <= n; len++) {
            for (int i = 0; i <= n - len; i++) {
                int j = i + len - 1;
                dp[i][j] = Integer.MAX_VALUE;
                
                // Try all possible split points
                for (int k = i; k < j; k++) {
                    int cost = dp[i][k] + dp[k + 1][j] + p[i] * p[k + 1] * p[j + 1];
                    dp[i][j] = Math.min(dp[i][j], cost);
                }
            }
        }
        
        return dp[0][n - 1];
    }
    
    /**
     * Matrix Chain Multiplication with split point tracking
     * Returns both minimum cost and optimal parenthesization
     */
    public static class MCMResult {
        int minCost;
        String parenthesization;
        
        public MCMResult(int cost, String paren) {
            this.minCost = cost;
            this.parenthesization = paren;
        }
    }
    
    public static MCMResult matrixChainOrderWithSplit(int[] p) {
        int n = p.length - 1;
        int[][] dp = new int[n][n];
        int[][] split = new int[n][n];
        
        for (int len = 2; len <= n; len++) {
            for (int i = 0; i <= n - len; i++) {
                int j = i + len - 1;
                dp[i][j] = Integer.MAX_VALUE;
                
                for (int k = i; k < j; k++) {
                    int cost = dp[i][k] + dp[k + 1][j] + p[i] * p[k + 1] * p[j + 1];
                    if (cost < dp[i][j]) {
                        dp[i][j] = cost;
                        split[i][j] = k;
                    }
                }
            }
        }
        
        String paren = buildParenthesization(split, 0, n - 1);
        return new MCMResult(dp[0][n - 1], paren);
    }
    
    private static String buildParenthesization(int[][] split, int i, int j) {
        if (i == j) {
            return "A" + (i + 1);
        }
        
        int k = split[i][j];
        String left = buildParenthesization(split, i, k);
        String right = buildParenthesization(split, k + 1, j);
        return "(" + left + " x " + right + ")";
    }
    
    // ======================== 5. TRAVELING SALESMAN PROBLEM (BITMASK DP) ========================
    
    /**
     * Traveling Salesman Problem using Bitmask DP
     * Find minimum cost to visit all cities exactly once and return to start
     * Time: O(n² * 2^n), Space: O(n * 2^n)
     */
    public static int tsp(int[][] dist) {
        int n = dist.length;
        int totalMask = (1 << n) - 1;  // All cities visited
        
        // dp[mask][i] = min cost to visit cities in mask, ending at city i
        int[][] dp = new int[1 << n][n];
        for (int[] row : dp) {
            Arrays.fill(row, Integer.MAX_VALUE / 2);
        }
        
        // Start at city 0
        dp[1][0] = 0;
        
        // Iterate through all possible masks
        for (int mask = 1; mask <= totalMask; mask++) {
            for (int last = 0; last < n; last++) {
                if ((mask & (1 << last)) == 0) continue;  // last city not in mask
                
                int prevMask = mask ^ (1 << last);  // Remove last city
                
                for (int prev = 0; prev < n; prev++) {
                    if ((prevMask & (1 << prev)) == 0) continue;
                    
                    dp[mask][last] = Math.min(dp[mask][last], 
                                             dp[prevMask][prev] + dist[prev][last]);
                }
            }
        }
        
        // Find minimum cost to visit all cities and return to start
        int minCost = Integer.MAX_VALUE;
        for (int i = 0; i < n; i++) {
            minCost = Math.min(minCost, dp[totalMask][i] + dist[i][0]);
        }
        
        return minCost;
    }
    
    /**
     * TSP with path reconstruction
     */
    public static class TSPResult {
        int minCost;
        List<Integer> path;
        
        public TSPResult(int cost, List<Integer> path) {
            this.minCost = cost;
            this.path = path;
        }
    }
    
    public static TSPResult tspWithPath(int[][] dist) {
        int n = dist.length;
        int totalMask = (1 << n) - 1;
        
        int[][] dp = new int[1 << n][n];
        int[][] parent = new int[1 << n][n];
        
        for (int[] row : dp) {
            Arrays.fill(row, Integer.MAX_VALUE / 2);
        }
        for (int[] row : parent) {
            Arrays.fill(row, -1);
        }
        
        dp[1][0] = 0;
        
        for (int mask = 1; mask <= totalMask; mask++) {
            for (int last = 0; last < n; last++) {
                if ((mask & (1 << last)) == 0) continue;
                
                int prevMask = mask ^ (1 << last);
                
                for (int prev = 0; prev < n; prev++) {
                    if ((prevMask & (1 << prev)) == 0) continue;
                    
                    int newCost = dp[prevMask][prev] + dist[prev][last];
                    if (newCost < dp[mask][last]) {
                        dp[mask][last] = newCost;
                        parent[mask][last] = prev;
                    }
                }
            }
        }
        
        // Find best ending city
        int minCost = Integer.MAX_VALUE;
        int lastCity = -1;
        for (int i = 0; i < n; i++) {
            int cost = dp[totalMask][i] + dist[i][0];
            if (cost < minCost) {
                minCost = cost;
                lastCity = i;
            }
        }
        
        // Reconstruct path
        List<Integer> path = new ArrayList<>();
        int mask = totalMask;
        int curr = lastCity;
        
        while (curr != -1) {
            path.add(curr);
            int prev = parent[mask][curr];
            if (prev != -1) {
                mask ^= (1 << curr);
            }
            curr = prev;
        }
        
        Collections.reverse(path);
        path.add(0);  // Return to start
        
        return new TSPResult(minCost, path);
    }
    
    // ======================== 6. TREE DIAMETER (TREE DP) ========================
    
    static class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
        
        TreeNode(int val) {
            this.val = val;
        }
    }
    
    /**
     * Calculate diameter of binary tree
     * Diameter = longest path between any two nodes
     * Time: O(n), Space: O(h) for recursion stack
     */
    private static int diameter = 0;
    
    public static int diameterOfBinaryTree(TreeNode root) {
        diameter = 0;
        diameterHelper(root);
        return diameter;
    }
    
    private static int diameterHelper(TreeNode node) {
        if (node == null) return 0;
        
        int leftHeight = diameterHelper(node.left);
        int rightHeight = diameterHelper(node.right);
        
        // Update diameter: path through current node
        diameter = Math.max(diameter, leftHeight + rightHeight);
        
        // Return height of current node
        return 1 + Math.max(leftHeight, rightHeight);
    }
    
    /**
     * Maximum path sum in binary tree
     * Path can start and end at any node
     * Time: O(n), Space: O(h)
     */
    private static int maxSum = Integer.MIN_VALUE;
    
    public static int maxPathSum(TreeNode root) {
        maxSum = Integer.MIN_VALUE;
        maxPathSumHelper(root);
        return maxSum;
    }
    
    private static int maxPathSumHelper(TreeNode node) {
        if (node == null) return 0;
        
        // Get maximum path sum from left and right subtrees
        // Use Math.max with 0 to handle negative paths
        int leftSum = Math.max(0, maxPathSumHelper(node.left));
        int rightSum = Math.max(0, maxPathSumHelper(node.right));
        
        // Update global maximum: path through current node
        maxSum = Math.max(maxSum, node.val + leftSum + rightSum);
        
        // Return maximum path sum extending from current node
        return node.val + Math.max(leftSum, rightSum);
    }
    
    // ======================== 7. COUNT OF RANGE SUM ========================
    
    /**
     * Count of Range Sum using Merge Sort + DP
     * Count number of range sums in [lower, upper]
     * Time: O(n log n), Space: O(n)
     */
    public static int countRangeSum(int[] nums, int lower, int upper) {
        int n = nums.length;
        long[] prefixSum = new long[n + 1];
        
        for (int i = 0; i < n; i++) {
            prefixSum[i + 1] = prefixSum[i] + nums[i];
        }
        
        return countRangeSumHelper(prefixSum, 0, n + 1, lower, upper);
    }
    
    private static int countRangeSumHelper(long[] sums, int left, int right, 
                                          int lower, int upper) {
        if (right - left <= 1) return 0;
        
        int mid = left + (right - left) / 2;
        int count = countRangeSumHelper(sums, left, mid, lower, upper) +
                   countRangeSumHelper(sums, mid, right, lower, upper);
        
        // Count cross-boundary range sums
        int j = mid, k = mid, t = mid;
        long[] cache = new long[right - left];
        int cacheIndex = 0;
        
        for (int i = left; i < mid; i++) {
            while (k < right && sums[k] - sums[i] < lower) k++;
            while (j < right && sums[j] - sums[i] <= upper) j++;
            count += j - k;
            
            while (t < right && sums[t] < sums[i]) {
                cache[cacheIndex++] = sums[t++];
            }
            cache[cacheIndex++] = sums[i];
        }
        
        System.arraycopy(cache, 0, sums, left, cacheIndex);
        return count;
    }
    
    // ======================== 8. DISTINCT SUBSEQUENCES ========================
    
    /**
     * Count distinct subsequences of s that equals t
     * Time: O(m*n), Space: O(m*n)
     */
    public static int numDistinct(String s, String t) {
        int m = s.length();
        int n = t.length();
        
        // dp[i][j] = number of distinct subsequences of s[0..i-1] equal to t[0..j-1]
        long[][] dp = new long[m + 1][n + 1];
        
        // Empty string t can be formed by any prefix of s in exactly one way
        for (int i = 0; i <= m; i++) {
            dp[i][0] = 1;
        }
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                // Don't use s[i-1]
                dp[i][j] = dp[i - 1][j];
                
                // Use s[i-1] if it matches t[j-1]
                if (s.charAt(i - 1) == t.charAt(j - 1)) {
                    dp[i][j] += dp[i - 1][j - 1];
                }
            }
        }
        
        return (int) dp[m][n];
    }
    
    /**
     * Distinct Subsequences - Space Optimized
     * Time: O(m*n), Space: O(n)
     */
    public static int numDistinctOptimized(String s, String t) {
        int m = s.length();
        int n = t.length();
        
        long[] dp = new long[n + 1];
        dp[0] = 1;
        
        for (int i = 1; i <= m; i++) {
            // Process from right to left to avoid overwriting needed values
            for (int j = n; j >= 1; j--) {
                if (s.charAt(i - 1) == t.charAt(j - 1)) {
                    dp[j] += dp[j - 1];
                }
            }
        }
        
        return (int) dp[n];
    }
    
    // ======================== UTILITY METHODS ========================
    
    /**
     * Print 2D DP table for debugging
     */
    public static void printDPTable(int[][] dp) {
        System.out.println("DP Table:");
        for (int[] row : dp) {
            for (int val : row) {
                System.out.printf("%4d ", val);
            }
            System.out.println();
        }
        System.out.println();
    }
    
    /**
     * Print binary representation of bitmask
     */
    public static void printBitmask(int mask, int n) {
        System.out.print("Mask " + mask + ": ");
        for (int i = n - 1; i >= 0; i--) {
            System.out.print((mask & (1 << i)) != 0 ? "1" : "0");
        }
        System.out.println();
    }
    
    /**
     * Main method for testing
     */
    public static void main(String[] args) {
        System.out.println("=== Day 42: Advanced DP Algorithms ===\n");
        
        // Test 1: Burst Balloons
        System.out.println("1. Burst Balloons:");
        int[] balloons = {3, 1, 5, 8};
        System.out.println("Input: " + Arrays.toString(balloons));
        System.out.println("Max Coins: " + maxCoins(balloons));
        System.out.println("Expected: 167\n");
        
        // Test 2: Palindrome Partitioning
        System.out.println("2. Palindrome Partitioning:");
        String s = "aab";
        System.out.println("Input: \"" + s + "\"");
        System.out.println("Min Cuts: " + minCut(s));
        System.out.println("Expected: 1\n");
        
        // Test 3: Regular Expression Matching
        System.out.println("3. Regular Expression Matching:");
        String text = "aa", pattern = "a*";
        System.out.println("Text: \"" + text + "\", Pattern: \"" + pattern + "\"");
        System.out.println("Matches: " + isMatch(text, pattern));
        System.out.println("Expected: true\n");
        
        // Test 4: Matrix Chain Multiplication
        System.out.println("4. Matrix Chain Multiplication:");
        int[] matrices = {10, 20, 30, 40, 30};
        System.out.println("Dimensions: " + Arrays.toString(matrices));
        MCMResult mcm = matrixChainOrderWithSplit(matrices);
        System.out.println("Min Operations: " + mcm.minCost);
        System.out.println("Parenthesization: " + mcm.parenthesization);
        System.out.println("Expected: 30000\n");
        
        // Test 5: TSP
        System.out.println("5. Traveling Salesman Problem:");
        int[][] dist = {
            {0, 10, 15, 20},
            {10, 0, 35, 25},
            {15, 35, 0, 30},
            {20, 25, 30, 0}
        };
        TSPResult tsp = tspWithPath(dist);
        System.out.println("Min Cost: " + tsp.minCost);
        System.out.println("Path: " + tsp.path);
        System.out.println("Expected: 80\n");
        
        // Test 6: Tree Diameter
        System.out.println("6. Binary Tree Diameter:");
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);
        System.out.println("Diameter: " + diameterOfBinaryTree(root));
        System.out.println("Expected: 3\n");
        
        // Test 7: Distinct Subsequences
        System.out.println("7. Distinct Subsequences:");
        String s1 = "rabbbit", t1 = "rabbit";
        System.out.println("S: \"" + s1 + "\", T: \"" + t1 + "\"");
        System.out.println("Count: " + numDistinct(s1, t1));
        System.out.println("Expected: 3\n");
        
        System.out.println("All tests completed!");
    }
}
