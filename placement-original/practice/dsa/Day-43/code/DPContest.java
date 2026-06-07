package day43.fundamentals;

import java.util.*;

/**
 * Day 43: Dynamic Programming Contest - 10 Contest-Level Problems
 * 
 * This file contains solutions to 10 challenging DP problems representing
 * all major DP patterns covered in Week 6:
 * 
 * 1. Longest Increasing Subsequence (LIS) - Binary Search Optimization
 * 2. Best Time to Buy and Sell Stock IV - State Machine DP
 * 3. Stone Game II - Game Theory + Minimax DP
 * 4. Number of Dice Rolls With Target Sum - 2D DP with Modulo
 * 5. Count Square Submatrices with All Ones - Matrix DP
 * 6. Maximum Product Subarray - Modified Kadane's
 * 7. Unique Paths III - Backtracking + Bitmask DP
 * 8. Minimum Insertion Steps for Palindrome - LCS Variant
 * 9. Cherry Pickup II - 3D DP with Two Paths
 * 10. Minimum Cost to Merge Stones - Interval DP
 * 
 * Each solution includes:
 * - Multiple approaches (brute force, optimized, space-optimized)
 * - Detailed explanation and intuition
 * - Time and space complexity analysis
 * - Test cases and edge case handling
 */
public class DPContest {
    
    // ======================== 1. LONGEST INCREASING SUBSEQUENCE ========================
    
    /**
     * LIS - Dynamic Programming Approach
     * Time: O(n²), Space: O(n)
     */
    public static int lengthOfLIS_DP(int[] nums) {
        if (nums == null || nums.length == 0) return 0;
        
        int n = nums.length;
        int[] dp = new int[n];
        Arrays.fill(dp, 1);  // Each element is LIS of length 1
        
        int maxLength = 1;
        
        for (int i = 1; i < n; i++) {
            for (int j = 0; j < i; j++) {
                if (nums[i] > nums[j]) {
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                }
            }
            maxLength = Math.max(maxLength, dp[i]);
        }
        
        return maxLength;
    }
    
    /**
     * LIS - Binary Search Optimization (Optimal Solution)
     * Maintain array where tails[i] = smallest ending element of LIS of length i+1
     * Time: O(n log n), Space: O(n)
     */
    public static int lengthOfLIS(int[] nums) {
        if (nums == null || nums.length == 0) return 0;
        
        List<Integer> tails = new ArrayList<>();
        
        for (int num : nums) {
            int pos = binarySearchLIS(tails, num);
            if (pos == tails.size()) {
                tails.add(num);
            } else {
                tails.set(pos, num);
            }
        }
        
        return tails.size();
    }
    
    private static int binarySearchLIS(List<Integer> tails, int target) {
        int left = 0, right = tails.size();
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (tails.get(mid) < target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        
        return left;
    }
    
    /**
     * LIS - With Path Reconstruction
     * Returns both length and actual LIS
     */
    public static class LISResult {
        int length;
        List<Integer> sequence;
        
        public LISResult(int length, List<Integer> sequence) {
            this.length = length;
            this.sequence = sequence;
        }
    }
    
    public static LISResult lengthOfLISWithPath(int[] nums) {
        if (nums == null || nums.length == 0) {
            return new LISResult(0, new ArrayList<>());
        }
        
        int n = nums.length;
        int[] dp = new int[n];
        int[] parent = new int[n];
        Arrays.fill(dp, 1);
        Arrays.fill(parent, -1);
        
        int maxLength = 1;
        int maxIndex = 0;
        
        for (int i = 1; i < n; i++) {
            for (int j = 0; j < i; j++) {
                if (nums[i] > nums[j] && dp[j] + 1 > dp[i]) {
                    dp[i] = dp[j] + 1;
                    parent[i] = j;
                }
            }
            if (dp[i] > maxLength) {
                maxLength = dp[i];
                maxIndex = i;
            }
        }
        
        // Reconstruct path
        List<Integer> sequence = new ArrayList<>();
        int curr = maxIndex;
        while (curr != -1) {
            sequence.add(nums[curr]);
            curr = parent[curr];
        }
        Collections.reverse(sequence);
        
        return new LISResult(maxLength, sequence);
    }
    
    // ======================== 2. BEST TIME TO BUY AND SELL STOCK IV ========================
    
    /**
     * Stock Trading with at most K transactions
     * Time: O(n*k), Space: O(k)
     */
    public static int maxProfit(int k, int[] prices) {
        if (prices == null || prices.length == 0 || k == 0) return 0;
        
        int n = prices.length;
        
        // If k >= n/2, we can do unlimited transactions
        if (k >= n / 2) {
            return maxProfitUnlimited(prices);
        }
        
        // buy[i] = max profit after at most i transactions with stock in hand
        // sell[i] = max profit after at most i transactions with no stock
        int[] buy = new int[k + 1];
        int[] sell = new int[k + 1];
        
        Arrays.fill(buy, Integer.MIN_VALUE);
        
        for (int price : prices) {
            for (int i = k; i >= 1; i--) {
                sell[i] = Math.max(sell[i], buy[i] + price);
                buy[i] = Math.max(buy[i], sell[i - 1] - price);
            }
        }
        
        return sell[k];
    }
    
    private static int maxProfitUnlimited(int[] prices) {
        int profit = 0;
        for (int i = 1; i < prices.length; i++) {
            profit += Math.max(0, prices[i] - prices[i - 1]);
        }
        return profit;
    }
    
    /**
     * Stock Trading - 2D DP approach (more intuitive)
     * Time: O(n*k), Space: O(n*k)
     */
    public static int maxProfit2D(int k, int[] prices) {
        if (prices == null || prices.length == 0 || k == 0) return 0;
        
        int n = prices.length;
        if (k >= n / 2) return maxProfitUnlimited(prices);
        
        // dp[i][j] = max profit using at most i transactions up to day j
        int[][] dp = new int[k + 1][n];
        
        for (int i = 1; i <= k; i++) {
            int maxDiff = -prices[0];  // max(dp[i-1][m] - prices[m]) for m < j
            
            for (int j = 1; j < n; j++) {
                dp[i][j] = Math.max(dp[i][j - 1], prices[j] + maxDiff);
                maxDiff = Math.max(maxDiff, dp[i - 1][j] - prices[j]);
            }
        }
        
        return dp[k][n - 1];
    }
    
    // ======================== 3. STONE GAME II ========================
    
    /**
     * Stone Game II - Alice and Bob play optimally
     * Time: O(n³), Space: O(n²)
     */
    public static int stoneGameII(int[] piles) {
        int n = piles.length;
        
        // Suffix sum for quick range queries
        int[] suffixSum = new int[n + 1];
        for (int i = n - 1; i >= 0; i--) {
            suffixSum[i] = suffixSum[i + 1] + piles[i];
        }
        
        // Memoization: dp[i][M] = max stones first player can get from index i with M
        int[][] memo = new int[n][n + 1];
        
        return stoneGameHelper(piles, 0, 1, suffixSum, memo);
    }
    
    private static int stoneGameHelper(int[] piles, int index, int M, 
                                       int[] suffixSum, int[][] memo) {
        if (index >= piles.length) return 0;
        
        if (index + 2 * M >= piles.length) {
            // Can take all remaining piles
            return suffixSum[index];
        }
        
        if (memo[index][M] > 0) return memo[index][M];
        
        int maxStones = 0;
        
        // Try taking X piles where 1 <= X <= 2M
        for (int X = 1; X <= 2 * M; X++) {
            // Current player takes X piles
            // Opponent plays optimally with new M = max(M, X)
            int opponentGets = stoneGameHelper(piles, index + X, Math.max(M, X), 
                                              suffixSum, memo);
            
            // Current player gets: remaining - what opponent gets
            int currentGets = suffixSum[index] - opponentGets;
            maxStones = Math.max(maxStones, currentGets);
        }
        
        memo[index][M] = maxStones;
        return maxStones;
    }
    
    // ======================== 4. NUMBER OF DICE ROLLS WITH TARGET SUM ========================
    
    /**
     * Dice Rolls to Target Sum
     * Time: O(d*f*target), Space: O(target)
     */
    private static final int MOD = 1_000_000_007;
    
    public static int numRollsToTarget(int d, int f, int target) {
        if (target < d || target > d * f) return 0;
        
        // dp[sum] = number of ways to achieve sum
        int[] dp = new int[target + 1];
        dp[0] = 1;
        
        for (int dice = 1; dice <= d; dice++) {
            int[] newDp = new int[target + 1];
            
            for (int sum = dice; sum <= target; sum++) {
                for (int face = 1; face <= f && face <= sum; face++) {
                    newDp[sum] = (newDp[sum] + dp[sum - face]) % MOD;
                }
            }
            
            dp = newDp;
        }
        
        return dp[target];
    }
    
    /**
     * Dice Rolls - 2D DP (more intuitive)
     * Time: O(d*f*target), Space: O(d*target)
     */
    public static int numRollsToTarget2D(int d, int f, int target) {
        // dp[i][j] = ways to achieve sum j using i dice
        int[][] dp = new int[d + 1][target + 1];
        dp[0][0] = 1;
        
        for (int dice = 1; dice <= d; dice++) {
            for (int sum = 1; sum <= target; sum++) {
                for (int face = 1; face <= f && face <= sum; face++) {
                    dp[dice][sum] = (dp[dice][sum] + dp[dice - 1][sum - face]) % MOD;
                }
            }
        }
        
        return dp[d][target];
    }
    
    // ======================== 5. COUNT SQUARE SUBMATRICES WITH ALL ONES ========================
    
    /**
     * Count Square Submatrices
     * Time: O(m*n), Space: O(1) - modifies input
     */
    public static int countSquares(int[][] matrix) {
        if (matrix == null || matrix.length == 0) return 0;
        
        int m = matrix.length;
        int n = matrix[0].length;
        int count = 0;
        
        // dp[i][j] = side length of largest square with bottom-right at (i,j)
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (matrix[i][j] == 1 && i > 0 && j > 0) {
                    matrix[i][j] = Math.min(matrix[i - 1][j],
                                  Math.min(matrix[i][j - 1], matrix[i - 1][j - 1])) + 1;
                }
                count += matrix[i][j];
            }
        }
        
        return count;
    }
    
    /**
     * Count Square Submatrices - Without modifying input
     * Time: O(m*n), Space: O(n)
     */
    public static int countSquaresNoModify(int[][] matrix) {
        int m = matrix.length;
        int n = matrix[0].length;
        int[] dp = new int[n];
        int count = 0;
        int prev = 0;
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                int temp = dp[j];
                
                if (matrix[i][j] == 1) {
                    if (i == 0 || j == 0) {
                        dp[j] = 1;
                    } else {
                        dp[j] = Math.min(dp[j], Math.min(dp[j - 1], prev)) + 1;
                    }
                    count += dp[j];
                } else {
                    dp[j] = 0;
                }
                
                prev = temp;
            }
        }
        
        return count;
    }
    
    // ======================== 6. MAXIMUM PRODUCT SUBARRAY ========================
    
    /**
     * Maximum Product Subarray
     * Track both max and min (negative * negative = positive)
     * Time: O(n), Space: O(1)
     */
    public static int maxProduct(int[] nums) {
        if (nums == null || nums.length == 0) return 0;
        
        int maxProduct = nums[0];
        int currentMax = nums[0];
        int currentMin = nums[0];
        
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] < 0) {
                // Swap max and min
                int temp = currentMax;
                currentMax = currentMin;
                currentMin = temp;
            }
            
            currentMax = Math.max(nums[i], currentMax * nums[i]);
            currentMin = Math.min(nums[i], currentMin * nums[i]);
            
            maxProduct = Math.max(maxProduct, currentMax);
        }
        
        return maxProduct;
    }
    
    /**
     * Maximum Product - DP Array Approach
     * Time: O(n), Space: O(n)
     */
    public static int maxProductDP(int[] nums) {
        int n = nums.length;
        int[] maxDp = new int[n];
        int[] minDp = new int[n];
        
        maxDp[0] = nums[0];
        minDp[0] = nums[0];
        int result = nums[0];
        
        for (int i = 1; i < n; i++) {
            maxDp[i] = Math.max(nums[i], 
                       Math.max(maxDp[i - 1] * nums[i], minDp[i - 1] * nums[i]));
            minDp[i] = Math.min(nums[i],
                       Math.min(maxDp[i - 1] * nums[i], minDp[i - 1] * nums[i]));
            result = Math.max(result, maxDp[i]);
        }
        
        return result;
    }
    
    // ======================== 7. UNIQUE PATHS III ========================
    
    /**
     * Unique Paths III - Walk over every non-obstacle square exactly once
     * Time: O(4^(m*n)), Space: O(m*n) for recursion
     */
    public static int uniquePathsIII(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;
        int startX = 0, startY = 0, emptyCount = 1; // Start square counts as empty
        
        // Find start position and count empty squares
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 1) {
                    startX = i;
                    startY = j;
                } else if (grid[i][j] == 0) {
                    emptyCount++;
                }
            }
        }
        
        return uniquePathsIIIHelper(grid, startX, startY, emptyCount);
    }
    
    private static int uniquePathsIIIHelper(int[][] grid, int x, int y, int remaining) {
        if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length || 
            grid[x][y] == -1) {
            return 0;
        }
        
        if (grid[x][y] == 2) {
            return remaining == 0 ? 1 : 0;
        }
        
        grid[x][y] = -1;  // Mark as visited
        
        int paths = uniquePathsIIIHelper(grid, x + 1, y, remaining - 1) +
                   uniquePathsIIIHelper(grid, x - 1, y, remaining - 1) +
                   uniquePathsIIIHelper(grid, x, y + 1, remaining - 1) +
                   uniquePathsIIIHelper(grid, x, y - 1, remaining - 1);
        
        grid[x][y] = 0;  // Backtrack
        
        return paths;
    }
    
    // ======================== 8. MINIMUM INSERTION STEPS FOR PALINDROME ========================
    
    /**
     * Minimum Insertions to Make String Palindrome
     * Equivalent to: n - LCS(s, reverse(s))
     * Time: O(n²), Space: O(n²)
     */
    public static int minInsertions(String s) {
        int n = s.length();
        String reversed = new StringBuilder(s).reverse().toString();
        
        // Find LCS
        int lcsLength = longestCommonSubsequence(s, reversed);
        
        // Minimum insertions = length - LCS
        return n - lcsLength;
    }
    
    private static int longestCommonSubsequence(String s1, String s2) {
        int m = s1.length();
        int n = s2.length();
        int[][] dp = new int[m + 1][n + 1];
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (s1.charAt(i - 1) == s2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }
        
        return dp[m][n];
    }
    
    /**
     * Minimum Insertions - Direct DP approach
     * Time: O(n²), Space: O(n²)
     */
    public static int minInsertionsDirect(String s) {
        int n = s.length();
        // dp[i][j] = min insertions to make s[i..j] palindrome
        int[][] dp = new int[n][n];
        
        for (int len = 2; len <= n; len++) {
            for (int i = 0; i <= n - len; i++) {
                int j = i + len - 1;
                
                if (s.charAt(i) == s.charAt(j)) {
                    dp[i][j] = dp[i + 1][j - 1];
                } else {
                    dp[i][j] = Math.min(dp[i + 1][j], dp[i][j - 1]) + 1;
                }
            }
        }
        
        return dp[0][n - 1];
    }
    
    // ======================== 9. CHERRY PICKUP II ========================
    
    /**
     * Cherry Pickup II - Two robots collect cherries
     * Time: O(m*n²), Space: O(n²)
     */
    public static int cherryPickup(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;
        
        // dp[col1][col2] = max cherries when robot1 at col1, robot2 at col2
        int[][] dp = new int[n][n];
        int[][] newDp = new int[n][n];
        
        // Initialize: both robots start at top
        dp[0][n - 1] = grid[0][0] + grid[0][n - 1];
        
        for (int row = 1; row < m; row++) {
            for (int[] arr : newDp) Arrays.fill(arr, -1);
            
            for (int col1 = 0; col1 < n; col1++) {
                for (int col2 = 0; col2 < n; col2++) {
                    if (dp[col1][col2] == -1) continue;
                    
                    // Try all 9 combinations of moves
                    for (int d1 = -1; d1 <= 1; d1++) {
                        for (int d2 = -1; d2 <= 1; d2++) {
                            int newCol1 = col1 + d1;
                            int newCol2 = col2 + d2;
                            
                            if (newCol1 >= 0 && newCol1 < n && 
                                newCol2 >= 0 && newCol2 < n) {
                                int cherries = dp[col1][col2] + grid[row][newCol1];
                                if (newCol1 != newCol2) {
                                    cherries += grid[row][newCol2];
                                }
                                newDp[newCol1][newCol2] = Math.max(
                                    newDp[newCol1][newCol2], cherries
                                );
                            }
                        }
                    }
                }
            }
            
            int[][] temp = dp;
            dp = newDp;
            newDp = temp;
        }
        
        // Find maximum in last row
        int maxCherries = 0;
        for (int col1 = 0; col1 < n; col1++) {
            for (int col2 = 0; col2 < n; col2++) {
                maxCherries = Math.max(maxCherries, dp[col1][col2]);
            }
        }
        
        return maxCherries;
    }
    
    // ======================== 10. MINIMUM COST TO MERGE STONES ========================
    
    /**
     * Minimum Cost to Merge Stones into K piles
     * Time: O(n³/K), Space: O(n²)
     */
    public static int mergeStones(int[] stones, int K) {
        int n = stones.length;
        
        // Check if it's possible to merge
        if ((n - 1) % (K - 1) != 0) return -1;
        
        // Prefix sum for range sum queries
        int[] prefixSum = new int[n + 1];
        for (int i = 0; i < n; i++) {
            prefixSum[i + 1] = prefixSum[i] + stones[i];
        }
        
        // dp[i][j][p] = min cost to merge stones[i..j] into p piles
        int[][][] dp = new int[n][n][K + 1];
        for (int[][] matrix : dp) {
            for (int[] row : matrix) {
                Arrays.fill(row, Integer.MAX_VALUE / 2);
            }
        }
        
        // Base case: merging 1 pile costs 0
        for (int i = 0; i < n; i++) {
            dp[i][i][1] = 0;
        }
        
        for (int len = 2; len <= n; len++) {
            for (int i = 0; i <= n - len; i++) {
                int j = i + len - 1;
                
                // Merge into p piles
                for (int p = 2; p <= K; p++) {
                    for (int mid = i; mid < j; mid += K - 1) {
                        dp[i][j][p] = Math.min(dp[i][j][p],
                                      dp[i][mid][1] + dp[mid + 1][j][p - 1]);
                    }
                }
                
                // Merge K piles into 1
                dp[i][j][1] = dp[i][j][K] + prefixSum[j + 1] - prefixSum[i];
            }
        }
        
        return dp[0][n - 1][1];
    }
    
    // ======================== MAIN METHOD FOR TESTING ========================
    
    public static void main(String[] args) {
        System.out.println("=== Day 43: DP Contest Problems ===\n");
        
        // Test 1: Longest Increasing Subsequence
        System.out.println("1. Longest Increasing Subsequence:");
        int[] nums1 = {10, 9, 2, 5, 3, 7, 101, 18};
        System.out.println("Input: " + Arrays.toString(nums1));
        System.out.println("LIS Length (DP): " + lengthOfLIS_DP(nums1));
        System.out.println("LIS Length (Binary Search): " + lengthOfLIS(nums1));
        LISResult lisResult = lengthOfLISWithPath(nums1);
        System.out.println("LIS Sequence: " + lisResult.sequence);
        System.out.println("Expected: 4 ([2,3,7,101])\n");
        
        // Test 2: Stock Trading
        System.out.println("2. Best Time to Buy and Sell Stock IV:");
        int k = 2;
        int[] prices = {2, 4, 1};
        System.out.println("K=" + k + ", Prices: " + Arrays.toString(prices));
        System.out.println("Max Profit: " + maxProfit(k, prices));
        System.out.println("Expected: 2\n");
        
        // Test 3: Stone Game II
        System.out.println("3. Stone Game II:");
        int[] piles = {2, 7, 9, 4, 4};
        System.out.println("Piles: " + Arrays.toString(piles));
        System.out.println("Alice's Max Stones: " + stoneGameII(piles));
        System.out.println("Expected: 10\n");
        
        // Test 4: Dice Rolls
        System.out.println("4. Number of Dice Rolls:");
        int d = 2, f = 6, target = 7;
        System.out.println("Dice=" + d + ", Faces=" + f + ", Target=" + target);
        System.out.println("Ways: " + numRollsToTarget(d, f, target));
        System.out.println("Expected: 6\n");
        
        // Test 5: Count Squares
        System.out.println("5. Count Square Submatrices:");
        int[][] matrix = {
            {0, 1, 1, 1},
            {1, 1, 1, 1},
            {0, 1, 1, 1}
        };
        System.out.println("Count: " + countSquares(matrix));
        System.out.println("Expected: 15\n");
        
        // Test 6: Maximum Product
        System.out.println("6. Maximum Product Subarray:");
        int[] nums2 = {2, 3, -2, 4};
        System.out.println("Input: " + Arrays.toString(nums2));
        System.out.println("Max Product: " + maxProduct(nums2));
        System.out.println("Expected: 6\n");
        
        // Test 7: Unique Paths III
        System.out.println("7. Unique Paths III:");
        int[][] grid = {{1, 0, 0, 0}, {0, 0, 0, 0}, {0, 0, 2, -1}};
        System.out.println("Unique Paths: " + uniquePathsIII(grid));
        System.out.println("Expected: 2\n");
        
        // Test 8: Minimum Insertions
        System.out.println("8. Minimum Insertion for Palindrome:");
        String s = "zzazz";
        System.out.println("String: \"" + s + "\"");
        System.out.println("Min Insertions: " + minInsertions(s));
        System.out.println("Expected: 0\n");
        
        // Test 9: Cherry Pickup II
        System.out.println("9. Cherry Pickup II:");
        int[][] cherryGrid = {{3, 1, 1}, {2, 5, 1}, {1, 5, 5}, {2, 1, 1}};
        System.out.println("Max Cherries: " + cherryPickup(cherryGrid));
        System.out.println("Expected: 24\n");
        
        // Test 10: Merge Stones
        System.out.println("10. Minimum Cost to Merge Stones:");
        int[] stones = {3, 2, 4, 1};
        int K = 2;
        System.out.println("Stones: " + Arrays.toString(stones) + ", K=" + K);
        System.out.println("Min Cost: " + mergeStones(stones, K));
        System.out.println("Expected: 20\n");
        
        System.out.println("All contest problems tested!");
    }
}
