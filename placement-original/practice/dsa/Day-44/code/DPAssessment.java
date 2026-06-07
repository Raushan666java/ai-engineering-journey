/**
 * Day 44: Week 6 Assessment - Dynamic Programming Mastery Validation
 * 
 * This file contains 12 comprehensive DP problems covering all major patterns:
 * - Linear DP (3 problems)
 * - Grid/Matrix DP (2 problems)
 * - Knapsack Variants (2 problems)
 * - String DP (2 problems)
 * - Interval DP (1 problem)
 * - Advanced DP (2 problems)
 * 
 * Total Time Limit: 90 minutes
 * Target: Solve 10+ problems for A grade
 * 
 * @author Placement Preparation
 * @version 1.0
 */

package dsa.day44;

import java.util.*;

public class DPAssessment {
    
    // ==================== CATEGORY A: LINEAR DP ====================
    
    /**
     * Problem 1: House Robber II (Circular Array)
     * 
     * You are a robber planning to rob houses along a street. Houses are arranged
     * in a circle (first and last are adjacent). Adjacent houses have security
     * systems that will alert police if robbed on the same night.
     * 
     * Given array of house values, return maximum money you can rob.
     * 
     * Example:
     * Input: nums = [2,3,2]
     * Output: 3
     * Explanation: Cannot rob house 1 (2) and 3 (2) since they're adjacent in circle.
     *              Rob house 2 (3) only.
     * 
     * LeetCode #213
     * 
     * Time: O(n), Space: O(1)
     */
    public static int houseRobberII(int[] nums) {
        if (nums == null || nums.length == 0) return 0;
        if (nums.length == 1) return nums[0];
        if (nums.length == 2) return Math.max(nums[0], nums[1]);
        
        // Key insight: Split into two linear sub-problems
        // Case 1: Rob houses 0 to n-2 (exclude last house)
        // Case 2: Rob houses 1 to n-1 (exclude first house)
        int case1 = robLinear(nums, 0, nums.length - 2);
        int case2 = robLinear(nums, 1, nums.length - 1);
        
        return Math.max(case1, case2);
    }
    
    private static int robLinear(int[] nums, int start, int end) {
        int prev2 = 0;  // rob(i-2)
        int prev1 = 0;  // rob(i-1)
        
        for (int i = start; i <= end; i++) {
            int current = Math.max(prev1, prev2 + nums[i]);
            prev2 = prev1;
            prev1 = current;
        }
        
        return prev1;
    }
    
    /**
     * Problem 2: Decode Ways II (With Wildcards)
     * 
     * A message containing letters A-Z is encoded to numbers: 'A' -> 1, 'B' -> 2, ..., 'Z' -> 26.
     * Now string also contains '*' which can represent any digit 1-9.
     * 
     * Return number of ways to decode the string. Answer modulo 10^9+7.
     * 
     * Example:
     * Input: s = "*"
     * Output: 9
     * Explanation: Can represent 1-9, each is a valid encoding.
     * 
     * LeetCode #639
     * 
     * Time: O(n), Space: O(1)
     */
    public static int numDecodingsWithWildcard(String s) {
        long MOD = 1_000_000_007;
        int n = s.length();
        
        // dp[i] = number of ways to decode s[0..i-1]
        long prev2 = 1;  // dp[i-2]
        long prev1 = s.charAt(0) == '*' ? 9 : (s.charAt(0) == '0' ? 0 : 1);  // dp[i-1]
        
        for (int i = 1; i < n; i++) {
            long current = 0;
            char curr = s.charAt(i);
            char prev = s.charAt(i - 1);
            
            // Single digit decoding
            if (curr == '*') {
                current = (prev1 * 9) % MOD;  // 1-9
            } else if (curr != '0') {
                current = prev1;
            }
            
            // Two digit decoding
            if (prev == '*') {
                if (curr == '*') {
                    // ** can form 11-19 (9 ways) and 21-26 (6 ways)
                    current = (current + prev2 * 15) % MOD;
                } else if (curr <= '6') {
                    // *0-*6 can form 10-16 and 20-26 (2 ways each)
                    current = (current + prev2 * 2) % MOD;
                } else {
                    // *7-*9 can only form 17-19 (1 way)
                    current = (current + prev2) % MOD;
                }
            } else if (prev == '1') {
                if (curr == '*') {
                    // 1* can form 11-19 (9 ways)
                    current = (current + prev2 * 9) % MOD;
                } else {
                    // 10-19 all valid
                    current = (current + prev2) % MOD;
                }
            } else if (prev == '2') {
                if (curr == '*') {
                    // 2* can form 21-26 (6 ways)
                    current = (current + prev2 * 6) % MOD;
                } else if (curr <= '6') {
                    // 20-26 all valid
                    current = (current + prev2) % MOD;
                }
            }
            
            prev2 = prev1;
            prev1 = current;
        }
        
        return (int) prev1;
    }
    
    /**
     * Problem 3: Paint Fence
     * 
     * You are painting a fence of n posts with k different colors.
     * Constraint: No more than 2 adjacent fence posts can have the same color.
     * 
     * Return number of ways to paint the fence.
     * 
     * Example:
     * Input: n = 3, k = 2
     * Output: 6
     * Explanation: [1,1,2], [1,2,1], [1,2,2], [2,1,1], [2,1,2], [2,2,1]
     * 
     * LeetCode #276
     * 
     * Time: O(n), Space: O(1)
     */
    public static int paintFence(int n, int k) {
        if (n == 0) return 0;
        if (n == 1) return k;
        
        // State machine DP
        // same = ways to paint with last 2 posts same color
        // diff = ways to paint with last 2 posts different color
        
        int same = k;           // First 2 posts same color: k ways
        int diff = k * (k - 1); // First 2 posts different: k * (k-1) ways
        
        for (int i = 3; i <= n; i++) {
            int newSame = diff;  // To make same, previous must be different
            int newDiff = (same + diff) * (k - 1);  // Choose different color
            
            same = newSame;
            diff = newDiff;
        }
        
        return same + diff;
    }
    
    // ==================== CATEGORY B: GRID/MATRIX DP ====================
    
    /**
     * Problem 4: Unique Paths III (With Obstacles and Visit All)
     * 
     * On a 2D grid, there are:
     * - 1: starting square
     * - 2: ending square
     * - 0: empty squares to walk over
     * - -1: obstacles
     * 
     * Return number of 4-directional walks from start to end that walk over
     * every non-obstacle square exactly once.
     * 
     * Example:
     * Input: grid = [[1,0,0,0],[0,0,0,0],[0,0,2,-1]]
     * Output: 2
     * 
     * LeetCode #980
     * 
     * Time: O(4^(m*n)), Space: O(m*n)
     */
    public static int uniquePathsIII(int[][] grid) {
        int m = grid.length, n = grid[0].length;
        int startX = 0, startY = 0;
        int emptyCount = 1; // Count starting square
        
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
        
        return dfsUniquePathsIII(grid, startX, startY, emptyCount);
    }
    
    private static int dfsUniquePathsIII(int[][] grid, int x, int y, int remain) {
        if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] == -1) {
            return 0;
        }
        
        if (grid[x][y] == 2) {
            return remain == 0 ? 1 : 0;
        }
        
        grid[x][y] = -1; // Mark as visited
        int paths = 0;
        
        paths += dfsUniquePathsIII(grid, x + 1, y, remain - 1);
        paths += dfsUniquePathsIII(grid, x - 1, y, remain - 1);
        paths += dfsUniquePathsIII(grid, x, y + 1, remain - 1);
        paths += dfsUniquePathsIII(grid, x, y - 1, remain - 1);
        
        grid[x][y] = 0; // Backtrack
        return paths;
    }
    
    /**
     * Problem 5: Dungeon Game (Minimum Initial Health)
     * 
     * A knight must rescue a princess in a dungeon (2D grid). Each cell has
     * a value: negative means damage, positive means health gain.
     * 
     * Knight starts at top-left, princess at bottom-right.
     * Return minimum initial health needed to reach princess (health never drops to 0 or below).
     * 
     * Example:
     * Input: dungeon = [[-2,-3,3],[-5,-10,1],[10,30,-5]]
     * Output: 7
     * Explanation: Initial health 7, path: -2 -> -3 -> 3 -> 1 -> -5
     * 
     * LeetCode #174
     * 
     * Time: O(m*n), Space: O(n)
     */
    public static int calculateMinimumHP(int[][] dungeon) {
        int m = dungeon.length, n = dungeon[0].length;
        
        // Key insight: Work backwards from bottom-right
        // dp[i][j] = minimum health needed AT position (i,j) to reach end
        int[] dp = new int[n];
        
        // Initialize last column from bottom
        dp[n - 1] = Math.max(1, 1 - dungeon[m - 1][n - 1]);
        
        // Fill last row (right to left)
        for (int j = n - 2; j >= 0; j--) {
            dp[j] = Math.max(1, dp[j + 1] - dungeon[m - 1][j]);
        }
        
        // Fill remaining rows (bottom to top)
        for (int i = m - 2; i >= 0; i--) {
            // Rightmost column
            dp[n - 1] = Math.max(1, dp[n - 1] - dungeon[i][n - 1]);
            
            // Other columns
            for (int j = n - 2; j >= 0; j--) {
                int minHealthFromRight = Math.max(1, dp[j + 1] - dungeon[i][j]);
                int minHealthFromDown = Math.max(1, dp[j] - dungeon[i][j]);
                dp[j] = Math.min(minHealthFromRight, minHealthFromDown);
            }
        }
        
        return dp[0];
    }
    
    // ==================== CATEGORY C: KNAPSACK VARIANTS ====================
    
    /**
     * Problem 6: Coin Change II (Number of Combinations)
     * 
     * Given coins of different denominations and a total amount,
     * compute number of combinations that make up that amount.
     * Assume infinite supply of each coin.
     * 
     * Example:
     * Input: amount = 5, coins = [1,2,5]
     * Output: 4
     * Explanation: 5=5, 5=2+2+1, 5=2+1+1+1, 5=1+1+1+1+1
     * 
     * LeetCode #518
     * 
     * Time: O(n*amount), Space: O(amount)
     */
    public static int coinChangeII(int amount, int[] coins) {
        // dp[i] = number of combinations to make amount i
        int[] dp = new int[amount + 1];
        dp[0] = 1; // One way to make 0: use no coins
        
        // Key: Iterate coins in outer loop to avoid counting permutations
        for (int coin : coins) {
            for (int i = coin; i <= amount; i++) {
                dp[i] += dp[i - coin];
            }
        }
        
        return dp[amount];
    }
    
    /**
     * Problem 7: Partition Equal Subset Sum
     * 
     * Given non-empty array of positive integers, find if array can be
     * partitioned into two subsets with equal sum.
     * 
     * Example:
     * Input: nums = [1,5,11,5]
     * Output: true
     * Explanation: [1,5,5] and [11] both sum to 11
     * 
     * LeetCode #416
     * 
     * Time: O(n*sum), Space: O(sum)
     */
    public static boolean canPartition(int[] nums) {
        int totalSum = 0;
        for (int num : nums) {
            totalSum += num;
        }
        
        // If odd sum, cannot partition equally
        if (totalSum % 2 != 0) return false;
        
        int target = totalSum / 2;
        
        // 0/1 Knapsack: Can we achieve sum = target?
        boolean[] dp = new boolean[target + 1];
        dp[0] = true;
        
        for (int num : nums) {
            // Traverse backwards to avoid using same element twice
            for (int j = target; j >= num; j--) {
                dp[j] = dp[j] || dp[j - num];
            }
        }
        
        return dp[target];
    }
    
    // ==================== CATEGORY D: STRING DP ====================
    
    /**
     * Problem 8: Interleaving String
     * 
     * Given strings s1, s2, and s3, find whether s3 is formed by interleaving s1 and s2.
     * Interleaving: all characters from s1 and s2 must be used, maintaining relative order.
     * 
     * Example:
     * Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
     * Output: true
     * Explanation: s3 = "aa" (s1) + "dbbc" (s2) + "bc" (s1) + "a" (s2) + "c" (s1)
     * 
     * LeetCode #97
     * 
     * Time: O(m*n), Space: O(n)
     */
    public static boolean isInterleave(String s1, String s2, String s3) {
        int m = s1.length(), n = s2.length();
        
        if (m + n != s3.length()) return false;
        
        // dp[j] = whether s1[0..i-1] and s2[0..j-1] can interleave to s3[0..i+j-1]
        boolean[] dp = new boolean[n + 1];
        dp[0] = true;
        
        // Initialize first row (only s2)
        for (int j = 1; j <= n; j++) {
            dp[j] = dp[j - 1] && s2.charAt(j - 1) == s3.charAt(j - 1);
        }
        
        // Fill DP table
        for (int i = 1; i <= m; i++) {
            // Update dp[0] (only s1)
            dp[0] = dp[0] && s1.charAt(i - 1) == s3.charAt(i - 1);
            
            for (int j = 1; j <= n; j++) {
                char c1 = s1.charAt(i - 1);
                char c2 = s2.charAt(j - 1);
                char c3 = s3.charAt(i + j - 1);
                
                dp[j] = (dp[j] && c1 == c3) || (dp[j - 1] && c2 == c3);
            }
        }
        
        return dp[n];
    }
    
    /**
     * Problem 9: Scramble String
     * 
     * Given strings s1 and s2 of same length, determine if s2 is a scrambled string of s1.
     * 
     * Scrambling: recursively divide string into two non-empty substrings, then either:
     * - Keep order and scramble substrings
     * - Swap two substrings and scramble them
     * 
     * Example:
     * Input: s1 = "great", s2 = "rgeat"
     * Output: true
     * Explanation: Split "great" into "gr" and "eat", scramble "eat" to "eat"
     *              Split "gr" into "g" and "r", swap to get "rg"
     * 
     * LeetCode #87
     * 
     * Time: O(n^4), Space: O(n^3)
     */
    public static boolean isScramble(String s1, String s2) {
        if (s1.equals(s2)) return true;
        if (s1.length() != s2.length()) return false;
        
        // Check if same character frequency
        int[] letters = new int[26];
        for (int i = 0; i < s1.length(); i++) {
            letters[s1.charAt(i) - 'a']++;
            letters[s2.charAt(i) - 'a']--;
        }
        for (int count : letters) {
            if (count != 0) return false;
        }
        
        Map<String, Boolean> memo = new HashMap<>();
        return isScrambleHelper(s1, s2, memo);
    }
    
    private static boolean isScrambleHelper(String s1, String s2, Map<String, Boolean> memo) {
        if (s1.equals(s2)) return true;
        
        String key = s1 + "#" + s2;
        if (memo.containsKey(key)) return memo.get(key);
        
        int n = s1.length();
        
        // Try all possible split points
        for (int i = 1; i < n; i++) {
            // Case 1: No swap
            if (isScrambleHelper(s1.substring(0, i), s2.substring(0, i), memo) &&
                isScrambleHelper(s1.substring(i), s2.substring(i), memo)) {
                memo.put(key, true);
                return true;
            }
            
            // Case 2: Swap
            if (isScrambleHelper(s1.substring(0, i), s2.substring(n - i), memo) &&
                isScrambleHelper(s1.substring(i), s2.substring(0, n - i), memo)) {
                memo.put(key, true);
                return true;
            }
        }
        
        memo.put(key, false);
        return false;
    }
    
    // ==================== CATEGORY E: INTERVAL DP ====================
    
    /**
     * Problem 10: Minimum Cost to Merge Stones
     * 
     * There are n piles of stones arranged in a row. In each move, merge exactly K
     * consecutive piles into one pile (cost = sum of stones).
     * 
     * Return minimum cost to merge all piles into one pile. If impossible, return -1.
     * 
     * Example:
     * Input: stones = [3,2,4,1], K = 2
     * Output: 20
     * Explanation: Merge [3,2] (cost 5), [4,1] (cost 5), [5,5] (cost 10). Total: 20
     * 
     * LeetCode #1000
     * 
     * Time: O(n^3/K), Space: O(n^2)
     */
    public static int mergeStones(int[] stones, int K) {
        int n = stones.length;
        
        // Check if it's possible to merge all to one pile
        if ((n - 1) % (K - 1) != 0) return -1;
        
        // Prefix sum for quick range sum calculation
        int[] prefixSum = new int[n + 1];
        for (int i = 0; i < n; i++) {
            prefixSum[i + 1] = prefixSum[i] + stones[i];
        }
        
        // dp[i][j] = min cost to merge stones[i..j] into minimum possible piles
        int[][] dp = new int[n][n];
        
        // Try all lengths
        for (int len = K; len <= n; len++) {
            for (int i = 0; i + len - 1 < n; i++) {
                int j = i + len - 1;
                dp[i][j] = Integer.MAX_VALUE;
                
                // Try all split points (must be (K-1) distance apart)
                for (int mid = i; mid < j; mid += K - 1) {
                    dp[i][j] = Math.min(dp[i][j], dp[i][mid] + dp[mid + 1][j]);
                }
                
                // If we can merge [i..j] to exactly one pile, add merge cost
                if ((j - i) % (K - 1) == 0) {
                    dp[i][j] += prefixSum[j + 1] - prefixSum[i];
                }
            }
        }
        
        return dp[0][n - 1];
    }
    
    // ==================== CATEGORY F: ADVANCED DP ====================
    
    /**
     * Problem 11: Maximum Profit in Job Scheduling
     * 
     * We have n jobs: job i starts at startTime[i], ends at endTime[i],
     * and has profit profit[i].
     * 
     * Return maximum profit you can take such that no two jobs overlap.
     * 
     * Example:
     * Input: startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]
     * Output: 120
     * Explanation: Take jobs 0 and 3 (profit 50 + 70 = 120)
     * 
     * LeetCode #1235
     * 
     * Time: O(n log n), Space: O(n)
     */
    public static int jobScheduling(int[] startTime, int[] endTime, int[] profit) {
        int n = startTime.length;
        
        // Create job objects and sort by end time
        int[][] jobs = new int[n][3]; // [start, end, profit]
        for (int i = 0; i < n; i++) {
            jobs[i] = new int[]{startTime[i], endTime[i], profit[i]};
        }
        Arrays.sort(jobs, (a, b) -> a[1] - b[1]); // Sort by end time
        
        // dp[i] = maximum profit using jobs 0..i
        int[] dp = new int[n];
        dp[0] = jobs[0][2];
        
        for (int i = 1; i < n; i++) {
            // Option 1: Don't take current job
            int profitWithout = dp[i - 1];
            
            // Option 2: Take current job
            int profitWith = jobs[i][2];
            
            // Find last non-overlapping job using binary search
            int lastNonOverlap = binarySearchJobScheduling(jobs, i);
            if (lastNonOverlap != -1) {
                profitWith += dp[lastNonOverlap];
            }
            
            dp[i] = Math.max(profitWithout, profitWith);
        }
        
        return dp[n - 1];
    }
    
    private static int binarySearchJobScheduling(int[][] jobs, int index) {
        int left = 0, right = index - 1;
        int result = -1;
        int currentStart = jobs[index][0];
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (jobs[mid][1] <= currentStart) {
                result = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return result;
    }
    
    /**
     * Problem 12: Count Vowels Permutation
     * 
     * Given integer n, return number of strings of length n that can be formed
     * under following rules:
     * - 'a' can only be followed by 'e'
     * - 'e' can only be followed by 'a' or 'i'
     * - 'i' can only be followed by 'a', 'e', 'o', 'u'
     * - 'o' can only be followed by 'i' or 'u'
     * - 'u' can only be followed by 'a'
     * 
     * Answer modulo 10^9+7.
     * 
     * Example:
     * Input: n = 2
     * Output: 10
     * Explanation: ae, ea, ei, ia, ie, io, iu, oi, ou, ua
     * 
     * LeetCode #1220
     * 
     * Time: O(n), Space: O(1)
     */
    public static int countVowelPermutation(int n) {
        long MOD = 1_000_000_007;
        
        // State machine: track count ending with each vowel
        long a = 1, e = 1, i = 1, o = 1, u = 1;
        
        for (int len = 2; len <= n; len++) {
            long newA = e;                              // e -> a
            long newE = (a + i) % MOD;                  // a -> e, i -> e
            long newI = (a + e + o + u) % MOD;          // a,e,o,u -> i
            long newO = (i + u) % MOD;                  // i -> o, u -> o
            long newU = a;                              // a -> u
            
            a = newA;
            e = newE;
            i = newI;
            o = newO;
            u = newU;
        }
        
        return (int) ((a + e + i + o + u) % MOD);
    }
    
    // ==================== TEST CASES ====================
    
    public static void main(String[] args) {
        System.out.println("=== DAY 44: DP ASSESSMENT - 12 COMPREHENSIVE PROBLEMS ===\n");
        
        // Problem 1: House Robber II
        System.out.println("Problem 1: House Robber II (Circular Array)");
        int[] houses1 = {2, 3, 2};
        System.out.println("Input: [2,3,2]");
        System.out.println("Output: " + houseRobberII(houses1));
        System.out.println("Expected: 3\n");
        
        int[] houses2 = {1, 2, 3, 1};
        System.out.println("Input: [1,2,3,1]");
        System.out.println("Output: " + houseRobberII(houses2));
        System.out.println("Expected: 4\n");
        
        // Problem 2: Decode Ways II
        System.out.println("Problem 2: Decode Ways II (With Wildcards)");
        System.out.println("Input: \"*\"");
        System.out.println("Output: " + numDecodingsWithWildcard("*"));
        System.out.println("Expected: 9\n");
        
        System.out.println("Input: \"1*\"");
        System.out.println("Output: " + numDecodingsWithWildcard("1*"));
        System.out.println("Expected: 18\n");
        
        // Problem 3: Paint Fence
        System.out.println("Problem 3: Paint Fence");
        System.out.println("Input: n=3, k=2");
        System.out.println("Output: " + paintFence(3, 2));
        System.out.println("Expected: 6\n");
        
        System.out.println("Input: n=7, k=2");
        System.out.println("Output: " + paintFence(7, 2));
        System.out.println("Expected: 42\n");
        
        // Problem 4: Unique Paths III
        System.out.println("Problem 4: Unique Paths III");
        int[][] grid1 = {{1, 0, 0, 0}, {0, 0, 0, 0}, {0, 0, 2, -1}};
        System.out.println("Input: [[1,0,0,0],[0,0,0,0],[0,0,2,-1]]");
        System.out.println("Output: " + uniquePathsIII(grid1));
        System.out.println("Expected: 2\n");
        
        // Problem 5: Dungeon Game
        System.out.println("Problem 5: Dungeon Game (Minimum Initial Health)");
        int[][] dungeon = {{-2, -3, 3}, {-5, -10, 1}, {10, 30, -5}};
        System.out.println("Input: [[-2,-3,3],[-5,-10,1],[10,30,-5]]");
        System.out.println("Output: " + calculateMinimumHP(dungeon));
        System.out.println("Expected: 7\n");
        
        // Problem 6: Coin Change II
        System.out.println("Problem 6: Coin Change II (Combinations)");
        int[] coins1 = {1, 2, 5};
        System.out.println("Input: amount=5, coins=[1,2,5]");
        System.out.println("Output: " + coinChangeII(5, coins1));
        System.out.println("Expected: 4\n");
        
        // Problem 7: Partition Equal Subset Sum
        System.out.println("Problem 7: Partition Equal Subset Sum");
        int[] nums1 = {1, 5, 11, 5};
        System.out.println("Input: [1,5,11,5]");
        System.out.println("Output: " + canPartition(nums1));
        System.out.println("Expected: true\n");
        
        // Problem 8: Interleaving String
        System.out.println("Problem 8: Interleaving String");
        System.out.println("Input: s1=\"aabcc\", s2=\"dbbca\", s3=\"aadbbcbcac\"");
        System.out.println("Output: " + isInterleave("aabcc", "dbbca", "aadbbcbcac"));
        System.out.println("Expected: true\n");
        
        // Problem 9: Scramble String
        System.out.println("Problem 9: Scramble String");
        System.out.println("Input: s1=\"great\", s2=\"rgeat\"");
        System.out.println("Output: " + isScramble("great", "rgeat"));
        System.out.println("Expected: true\n");
        
        // Problem 10: Minimum Cost to Merge Stones
        System.out.println("Problem 10: Minimum Cost to Merge Stones");
        int[] stones = {3, 2, 4, 1};
        System.out.println("Input: stones=[3,2,4,1], K=2");
        System.out.println("Output: " + mergeStones(stones, 2));
        System.out.println("Expected: 20\n");
        
        // Problem 11: Maximum Profit in Job Scheduling
        System.out.println("Problem 11: Maximum Profit in Job Scheduling");
        int[] startTime = {1, 2, 3, 3};
        int[] endTime = {3, 4, 5, 6};
        int[] profit = {50, 10, 40, 70};
        System.out.println("Input: start=[1,2,3,3], end=[3,4,5,6], profit=[50,10,40,70]");
        System.out.println("Output: " + jobScheduling(startTime, endTime, profit));
        System.out.println("Expected: 120\n");
        
        // Problem 12: Count Vowels Permutation
        System.out.println("Problem 12: Count Vowels Permutation");
        System.out.println("Input: n=2");
        System.out.println("Output: " + countVowelPermutation(2));
        System.out.println("Expected: 10\n");
        
        System.out.println("Input: n=5");
        System.out.println("Output: " + countVowelPermutation(5));
        System.out.println("Expected: 68\n");
        
        System.out.println("\n=== ASSESSMENT COMPLETE ===");
        System.out.println("Review your solutions and calculate your score!");
        System.out.println("Target: 10+ problems solved correctly for A grade");
    }
}
