package day38.fundamentals;

import java.util.*;

/**
 * DAY 38: Dynamic Programming Fundamentals
 * 
 * Core Concepts:
 * 1. Overlapping Subproblems
 * 2. Optimal Substructure
 * 3. Memoization (Top-Down)
 * 4. Tabulation (Bottom-Up)
 * 5. Space Optimization
 * 
 * This class demonstrates DP concepts with classic problems
 */
public class DPFundamentals {

    // ==================== FIBONACCI SEQUENCE ====================
    
    /**
     * Fibonacci - Naive Recursive (Exponential Time)
     * Time: O(2^n), Space: O(n) for recursion stack
     * 
     * This demonstrates why DP is needed - exponential time complexity!
     */
    public static long fibonacciNaive(int n) {
        if (n <= 1) return n;
        return fibonacciNaive(n - 1) + fibonacciNaive(n - 2);
    }
    
    /**
     * Fibonacci - Memoization (Top-Down DP)
     * Time: O(n), Space: O(n)
     * 
     * Key Insight: Store results of subproblems to avoid recomputation
     */
    public static long fibonacciMemo(int n) {
        Map<Integer, Long> memo = new HashMap<>();
        return fibonacciMemoHelper(n, memo);
    }
    
    private static long fibonacciMemoHelper(int n, Map<Integer, Long> memo) {
        if (n <= 1) return n;
        
        if (memo.containsKey(n)) {
            return memo.get(n);
        }
        
        long result = fibonacciMemoHelper(n - 1, memo) + fibonacciMemoHelper(n - 2, memo);
        memo.put(n, result);
        return result;
    }
    
    /**
     * Fibonacci - Tabulation (Bottom-Up DP)
     * Time: O(n), Space: O(n)
     * 
     * Key Insight: Build solution iteratively from base cases
     */
    public static long fibonacciTab(int n) {
        if (n <= 1) return n;
        
        long[] dp = new long[n + 1];
        dp[0] = 0;
        dp[1] = 1;
        
        for (int i = 2; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }
        
        return dp[n];
    }
    
    /**
     * Fibonacci - Space Optimized
     * Time: O(n), Space: O(1)
     * 
     * Key Insight: Only need last 2 values, not entire array
     */
    public static long fibonacciOptimized(int n) {
        if (n <= 1) return n;
        
        long prev2 = 0, prev1 = 1;
        
        for (int i = 2; i <= n; i++) {
            long curr = prev1 + prev2;
            prev2 = prev1;
            prev1 = curr;
        }
        
        return prev1;
    }
    
    // ==================== CLIMBING STAIRS (LC 70) ====================
    
    /**
     * Climbing Stairs - Find number of ways to reach top
     * You can climb 1 or 2 steps at a time
     * 
     * Time: O(n), Space: O(n)
     * 
     * Example: n = 3 → 3 ways: [1,1,1], [1,2], [2,1]
     */
    public static int climbStairs(int n) {
        if (n <= 2) return n;
        
        int[] dp = new int[n + 1];
        dp[1] = 1;
        dp[2] = 2;
        
        for (int i = 3; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }
        
        return dp[n];
    }
    
    /**
     * Climbing Stairs - Space Optimized
     * Time: O(n), Space: O(1)
     */
    public static int climbStairsOptimized(int n) {
        if (n <= 2) return n;
        
        int prev2 = 1, prev1 = 2;
        
        for (int i = 3; i <= n; i++) {
            int curr = prev1 + prev2;
            prev2 = prev1;
            prev1 = curr;
        }
        
        return prev1;
    }
    
    // ==================== HOUSE ROBBER (LC 198) ====================
    
    /**
     * House Robber - Maximum money without robbing adjacent houses
     * 
     * Time: O(n), Space: O(n)
     * 
     * Example: nums = [2,7,9,3,1] → 12 (rob houses 0, 2, 4)
     * 
     * DP State: dp[i] = max money robbing houses 0..i
     * Transition: dp[i] = max(dp[i-1], dp[i-2] + nums[i])
     */
    public static int rob(int[] nums) {
        if (nums == null || nums.length == 0) return 0;
        if (nums.length == 1) return nums[0];
        
        int n = nums.length;
        int[] dp = new int[n];
        dp[0] = nums[0];
        dp[1] = Math.max(nums[0], nums[1]);
        
        for (int i = 2; i < n; i++) {
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
        }
        
        return dp[n - 1];
    }
    
    /**
     * House Robber - Space Optimized
     * Time: O(n), Space: O(1)
     */
    public static int robOptimized(int[] nums) {
        if (nums == null || nums.length == 0) return 0;
        if (nums.length == 1) return nums[0];
        
        int prev2 = nums[0];
        int prev1 = Math.max(nums[0], nums[1]);
        
        for (int i = 2; i < nums.length; i++) {
            int curr = Math.max(prev1, prev2 + nums[i]);
            prev2 = prev1;
            prev1 = curr;
        }
        
        return prev1;
    }
    
    // ==================== COIN CHANGE (LC 322) ====================
    
    /**
     * Coin Change - Minimum coins to make amount
     * 
     * Time: O(n × amount), Space: O(amount)
     * 
     * Example: coins = [1,2,5], amount = 11 → 3 (5+5+1)
     * 
     * DP State: dp[i] = min coins to make amount i
     * Transition: dp[i] = min(dp[i], dp[i - coin] + 1) for each coin
     */
    public static int coinChange(int[] coins, int amount) {
        int[] dp = new int[amount + 1];
        Arrays.fill(dp, amount + 1); // Initialize with impossible value
        dp[0] = 0;
        
        for (int i = 1; i <= amount; i++) {
            for (int coin : coins) {
                if (i >= coin) {
                    dp[i] = Math.min(dp[i], dp[i - coin] + 1);
                }
            }
        }
        
        return dp[amount] > amount ? -1 : dp[amount];
    }
    
    /**
     * Coin Change - With path reconstruction
     * Returns the actual coins used
     */
    public static List<Integer> coinChangeWithPath(int[] coins, int amount) {
        int[] dp = new int[amount + 1];
        int[] parent = new int[amount + 1];
        Arrays.fill(dp, amount + 1);
        Arrays.fill(parent, -1);
        dp[0] = 0;
        
        for (int i = 1; i <= amount; i++) {
            for (int coin : coins) {
                if (i >= coin && dp[i - coin] + 1 < dp[i]) {
                    dp[i] = dp[i - coin] + 1;
                    parent[i] = coin;
                }
            }
        }
        
        if (dp[amount] > amount) return new ArrayList<>();
        
        // Reconstruct path
        List<Integer> result = new ArrayList<>();
        int curr = amount;
        while (curr > 0) {
            result.add(parent[curr]);
            curr -= parent[curr];
        }
        
        return result;
    }
    
    // ==================== LONGEST INCREASING SUBSEQUENCE (LC 300) ====================
    
    /**
     * Longest Increasing Subsequence (LIS) - DP Solution
     * 
     * Time: O(n²), Space: O(n)
     * 
     * Example: nums = [10,9,2,5,3,7,101,18] → 4 ([2,3,7,101])
     * 
     * DP State: dp[i] = length of LIS ending at index i
     * Transition: dp[i] = max(dp[j] + 1) for all j < i where nums[j] < nums[i]
     */
    public static int lengthOfLIS(int[] nums) {
        if (nums == null || nums.length == 0) return 0;
        
        int n = nums.length;
        int[] dp = new int[n];
        Arrays.fill(dp, 1);
        
        int maxLen = 1;
        
        for (int i = 1; i < n; i++) {
            for (int j = 0; j < i; j++) {
                if (nums[j] < nums[i]) {
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                }
            }
            maxLen = Math.max(maxLen, dp[i]);
        }
        
        return maxLen;
    }
    
    /**
     * LIS - Optimized with Binary Search
     * Time: O(n log n), Space: O(n)
     * 
     * Key Insight: Maintain array of smallest tail elements for each length
     */
    public static int lengthOfLISOptimized(int[] nums) {
        if (nums == null || nums.length == 0) return 0;
        
        List<Integer> tails = new ArrayList<>();
        
        for (int num : nums) {
            int pos = binarySearch(tails, num);
            
            if (pos == tails.size()) {
                tails.add(num);
            } else {
                tails.set(pos, num);
            }
        }
        
        return tails.size();
    }
    
    private static int binarySearch(List<Integer> tails, int target) {
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
    
    // ==================== MAXIMUM SUBARRAY (LC 53) ====================
    
    /**
     * Maximum Subarray Sum - Kadane's Algorithm
     * 
     * Time: O(n), Space: O(1)
     * 
     * Example: nums = [-2,1,-3,4,-1,2,1,-5,4] → 6 ([4,-1,2,1])
     * 
     * DP State: maxEndingHere = max sum ending at current position
     * Transition: maxEndingHere = max(num, maxEndingHere + num)
     */
    public static int maxSubArray(int[] nums) {
        int maxSoFar = nums[0];
        int maxEndingHere = nums[0];
        
        for (int i = 1; i < nums.length; i++) {
            maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
            maxSoFar = Math.max(maxSoFar, maxEndingHere);
        }
        
        return maxSoFar;
    }
    
    /**
     * Maximum Subarray - With indices
     * Returns [maxSum, startIndex, endIndex]
     */
    public static int[] maxSubArrayWithIndices(int[] nums) {
        int maxSoFar = nums[0];
        int maxEndingHere = nums[0];
        int start = 0, end = 0, tempStart = 0;
        
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] > maxEndingHere + nums[i]) {
                maxEndingHere = nums[i];
                tempStart = i;
            } else {
                maxEndingHere = maxEndingHere + nums[i];
            }
            
            if (maxEndingHere > maxSoFar) {
                maxSoFar = maxEndingHere;
                start = tempStart;
                end = i;
            }
        }
        
        return new int[]{maxSoFar, start, end};
    }
    
    // ==================== UNIQUE PATHS (LC 62) ====================
    
    /**
     * Unique Paths - Grid traversal (only right and down)
     * 
     * Time: O(m × n), Space: O(m × n)
     * 
     * Example: m = 3, n = 7 → 28 unique paths
     * 
     * DP State: dp[i][j] = number of ways to reach (i, j)
     * Transition: dp[i][j] = dp[i-1][j] + dp[i][j-1]
     */
    public static int uniquePaths(int m, int n) {
        int[][] dp = new int[m][n];
        
        // Initialize first row and column
        for (int i = 0; i < m; i++) dp[i][0] = 1;
        for (int j = 0; j < n; j++) dp[0][j] = 1;
        
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
        
        return dp[m - 1][n - 1];
    }
    
    /**
     * Unique Paths - Space Optimized
     * Time: O(m × n), Space: O(n)
     */
    public static int uniquePathsOptimized(int m, int n) {
        int[] dp = new int[n];
        Arrays.fill(dp, 1);
        
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                dp[j] += dp[j - 1];
            }
        }
        
        return dp[n - 1];
    }
    
    // ==================== DECODE WAYS (LC 91) ====================
    
    /**
     * Decode Ways - Count ways to decode a digit string
     * 
     * Time: O(n), Space: O(n)
     * 
     * Example: s = "226" → 3 ways: "BZ", "VF", "BBF"
     * (1-26 map to A-Z)
     * 
     * DP State: dp[i] = number of ways to decode s[0..i-1]
     * Transition: 
     *   - If s[i-1] valid (1-9): dp[i] += dp[i-1]
     *   - If s[i-2:i] valid (10-26): dp[i] += dp[i-2]
     */
    public static int numDecodings(String s) {
        if (s == null || s.length() == 0 || s.charAt(0) == '0') return 0;
        
        int n = s.length();
        int[] dp = new int[n + 1];
        dp[0] = 1;
        dp[1] = 1;
        
        for (int i = 2; i <= n; i++) {
            int oneDigit = s.charAt(i - 1) - '0';
            int twoDigits = Integer.parseInt(s.substring(i - 2, i));
            
            if (oneDigit >= 1 && oneDigit <= 9) {
                dp[i] += dp[i - 1];
            }
            
            if (twoDigits >= 10 && twoDigits <= 26) {
                dp[i] += dp[i - 2];
            }
        }
        
        return dp[n];
    }
    
    /**
     * Decode Ways - Space Optimized
     * Time: O(n), Space: O(1)
     */
    public static int numDecodingsOptimized(String s) {
        if (s == null || s.length() == 0 || s.charAt(0) == '0') return 0;
        
        int prev2 = 1, prev1 = 1;
        
        for (int i = 2; i <= s.length(); i++) {
            int curr = 0;
            int oneDigit = s.charAt(i - 1) - '0';
            int twoDigits = Integer.parseInt(s.substring(i - 2, i));
            
            if (oneDigit >= 1 && oneDigit <= 9) {
                curr += prev1;
            }
            
            if (twoDigits >= 10 && twoDigits <= 26) {
                curr += prev2;
            }
            
            prev2 = prev1;
            prev1 = curr;
        }
        
        return prev1;
    }
    
    // ==================== UTILITY: DP VISUALIZATION ====================
    
    /**
     * Visualize DP table for debugging
     */
    public static void printDPTable(int[][] dp, String name) {
        System.out.println("\n" + name + " DP Table:");
        for (int[] row : dp) {
            for (int val : row) {
                System.out.printf("%4d ", val);
            }
            System.out.println();
        }
    }
    
    /**
     * Visualize 1D DP array
     */
    public static void printDPArray(int[] dp, String name) {
        System.out.println("\n" + name + " DP Array:");
        System.out.print("[");
        for (int i = 0; i < dp.length; i++) {
            System.out.print(dp[i]);
            if (i < dp.length - 1) System.out.print(", ");
        }
        System.out.println("]");
    }
    
    // ==================== DEMO ====================
    
    public static void main(String[] args) {
        System.out.println("=== Day 38: Dynamic Programming Fundamentals ===\n");
        
        // Demo 1: Fibonacci
        System.out.println("1. Fibonacci Sequence:");
        int n = 10;
        System.out.println("Fibonacci(" + n + "):");
        System.out.println("  Naive:     " + fibonacciNaive(n));
        System.out.println("  Memo:      " + fibonacciMemo(n));
        System.out.println("  Tab:       " + fibonacciTab(n));
        System.out.println("  Optimized: " + fibonacciOptimized(n));
        
        // Demo 2: Climbing Stairs
        System.out.println("\n2. Climbing Stairs:");
        int stairs = 5;
        System.out.println("Ways to climb " + stairs + " stairs: " + climbStairs(stairs));
        System.out.println("Space optimized: " + climbStairsOptimized(stairs));
        
        // Demo 3: House Robber
        System.out.println("\n3. House Robber:");
        int[] houses = {2, 7, 9, 3, 1};
        System.out.println("Houses: " + Arrays.toString(houses));
        System.out.println("Max money: " + rob(houses));
        System.out.println("Space optimized: " + robOptimized(houses));
        
        // Demo 4: Coin Change
        System.out.println("\n4. Coin Change:");
        int[] coins = {1, 2, 5};
        int amount = 11;
        System.out.println("Coins: " + Arrays.toString(coins) + ", Amount: " + amount);
        System.out.println("Min coins: " + coinChange(coins, amount));
        System.out.println("Coins used: " + coinChangeWithPath(coins, amount));
        
        // Demo 5: Longest Increasing Subsequence
        System.out.println("\n5. Longest Increasing Subsequence:");
        int[] nums = {10, 9, 2, 5, 3, 7, 101, 18};
        System.out.println("Array: " + Arrays.toString(nums));
        System.out.println("LIS length (DP): " + lengthOfLIS(nums));
        System.out.println("LIS length (optimized): " + lengthOfLISOptimized(nums));
        
        // Demo 6: Maximum Subarray
        System.out.println("\n6. Maximum Subarray:");
        int[] arr = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
        System.out.println("Array: " + Arrays.toString(arr));
        System.out.println("Max sum: " + maxSubArray(arr));
        int[] result = maxSubArrayWithIndices(arr);
        System.out.println("Max sum with indices: " + result[0] + 
                         " (from index " + result[1] + " to " + result[2] + ")");
        
        // Demo 7: Unique Paths
        System.out.println("\n7. Unique Paths:");
        int m = 3, cols = 7;
        System.out.println("Grid: " + m + " × " + cols);
        System.out.println("Unique paths: " + uniquePaths(m, cols));
        System.out.println("Space optimized: " + uniquePathsOptimized(m, cols));
        
        // Demo 8: Decode Ways
        System.out.println("\n8. Decode Ways:");
        String s = "226";
        System.out.println("String: " + s);
        System.out.println("Decode ways: " + numDecodings(s));
        System.out.println("Space optimized: " + numDecodingsOptimized(s));
        
        System.out.println("\n✓ All DP fundamentals demonstrated successfully!");
    }
}
