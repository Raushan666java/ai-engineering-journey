package practice.dsa.dynamic_programming;

/**
 * DYNAMIC PROGRAMMING PRACTICE SOLUTIONS
 * Complete collection of DP problems with solutions
 * Difficulty: Easy → Medium → Hard
 */
public class DYNAMICPROGRAMMING_PRACTICE_SOLUTIONS {

    // ==========================================
    // EASY LEVEL PROBLEMS
    // ==========================================

    /**
     * Problem 1: Climbing Stairs
     * Time: O(n), Space: O(1)
     */
    public static int climbStairs(int n) {
        if (n <= 2) return n;

        int prev2 = 1, prev1 = 2;
        for (int i = 3; i <= n; i++) {
            int current = prev1 + prev2;
            prev2 = prev1;
            prev1 = current;
        }
        return prev1;
    }

    /**
     * Problem 2: Fibonacci Number
     * Time: O(n), Space: O(1)
     */
    public static int fib(int n) {
        if (n <= 1) return n;

        int prev2 = 0, prev1 = 1;
        for (int i = 2; i <= n; i++) {
            int current = prev1 + prev2;
            prev2 = prev1;
            prev1 = current;
        }
        return prev1;
    }

    /**
     * Problem 3: House Robber
     * Time: O(n), Space: O(1)
     */
    public static int rob(int[] nums) {
        if (nums.length == 0) return 0;
        if (nums.length == 1) return nums[0];

        int prev2 = 0, prev1 = nums[0];
        for (int i = 1; i < nums.length; i++) {
            int current = Math.max(prev1, prev2 + nums[i]);
            prev2 = prev1;
            prev1 = current;
        }
        return prev1;
    }

    /**
     * Problem 4: Maximum Subarray (Kadane's Algorithm)
     * Time: O(n), Space: O(1)
     */
    public static int maxSubArray(int[] nums) {
        int maxSoFar = nums[0], maxEndingHere = nums[0];

        for (int i = 1; i < nums.length; i++) {
            maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
            maxSoFar = Math.max(maxSoFar, maxEndingHere);
        }
        return maxSoFar;
    }

    /**
     * Problem 5: Min Cost Climbing Stairs
     * Time: O(n), Space: O(1)
     */
    public static int minCostClimbingStairs(int[] cost) {
        int n = cost.length;
        int prev2 = cost[0], prev1 = cost[1];

        for (int i = 2; i < n; i++) {
            int current = cost[i] + Math.min(prev1, prev2);
            prev2 = prev1;
            prev1 = current;
        }
        return Math.min(prev1, prev2);
    }

    /**
     * Problem 6: Longest Increasing Subsequence Length
     * Time: O(n log n), Space: O(n)
     */
    public static int lengthOfLIS(int[] nums) {
        int[] tails = new int[nums.length];
        int size = 0;

        for (int num : nums) {
            int left = 0, right = size;
            while (left < right) {
                int mid = left + (right - left) / 2;
                if (tails[mid] < num) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }
            tails[left] = num;
            if (left == size) size++;
        }
        return size;
    }

    // ==========================================
    // MEDIUM LEVEL PROBLEMS
    // ==========================================

    /**
     * Problem 7: Coin Change
     * Time: O(amount * coins), Space: O(amount)
     */
    public static int coinChange(int[] coins, int amount) {
        int[] dp = new int[amount + 1];
        java.util.Arrays.fill(dp, amount + 1);
        dp[0] = 0;

        for (int i = 1; i <= amount; i++) {
            for (int coin : coins) {
                if (coin <= i) {
                    dp[i] = Math.min(dp[i], dp[i - coin] + 1);
                }
            }
        }
        return dp[amount] > amount ? -1 : dp[amount];
    }

    /**
     * Problem 8: Longest Common Subsequence
     * Time: O(m*n), Space: O(m*n)
     */
    public static int longestCommonSubsequence(String text1, String text2) {
        int m = text1.length(), n = text2.length();
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

    /**
     * Problem 9: Edit Distance
     * Time: O(m*n), Space: O(m*n)
     */
    public static int minDistance(String word1, String word2) {
        int m = word1.length(), n = word2.length();
        int[][] dp = new int[m + 1][n + 1];

        // Initialize base cases
        for (int i = 0; i <= m; i++) dp[i][0] = i;
        for (int j = 0; j <= n; j++) dp[0][j] = j;

        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    dp[i][j] = Math.min(dp[i - 1][j - 1], // replace
                              Math.min(dp[i - 1][j],      // delete
                                       dp[i][j - 1])) + 1; // insert
                }
            }
        }
        return dp[m][n];
    }

    /**
     * Problem 10: Unique Paths
     * Time: O(m*n), Space: O(m*n)
     */
    public static int uniquePaths(int m, int n) {
        int[][] dp = new int[m][n];

        // Initialize first row and first column
        for (int i = 0; i < m; i++) dp[i][0] = 1;
        for (int j = 0; j < n; j++) dp[0][j] = 1;

        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
        return dp[m - 1][n - 1];
    }

    // ==========================================
    // HARD LEVEL PROBLEMS
    // ==========================================

    /**
     * Problem 11: Longest Valid Parentheses
     * Time: O(n), Space: O(1)
     */
    public static int longestValidParentheses(String s) {
        int maxLength = 0;
        int left = 0, right = 0;

        // Left to right pass
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == '(') {
                left++;
            } else {
                right++;
            }
            if (left == right) {
                maxLength = Math.max(maxLength, 2 * right);
            } else if (right > left) {
                left = right = 0;
            }
        }

        left = right = 0;
        // Right to left pass
        for (int i = s.length() - 1; i >= 0; i--) {
            if (s.charAt(i) == '(') {
                left++;
            } else {
                right++;
            }
            if (left == right) {
                maxLength = Math.max(maxLength, 2 * left);
            } else if (left > right) {
                left = right = 0;
            }
        }
        return maxLength;
    }

    /**
     * Problem 12: Regular Expression Matching
     * Time: O(m*n), Space: O(m*n)
     */
    public static boolean isMatch(String s, String p) {
        int m = s.length(), n = p.length();
        boolean[][] dp = new boolean[m + 1][n + 1];
        dp[0][0] = true;

        // Handle patterns like a*, a*b*, etc.
        for (int j = 1; j <= n; j++) {
            if (p.charAt(j - 1) == '*') {
                dp[0][j] = dp[0][j - 2];
            }
        }

        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (p.charAt(j - 1) == '.' || p.charAt(j - 1) == s.charAt(i - 1)) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else if (p.charAt(j - 1) == '*') {
                    dp[i][j] = dp[i][j - 2]; // Zero occurrence
                    if (p.charAt(j - 2) == '.' || p.charAt(j - 2) == s.charAt(i - 1)) {
                        dp[i][j] = dp[i][j] || dp[i - 1][j]; // One or more occurrence
                    }
                }
            }
        }
        return dp[m][n];
    }

    /**
     * Problem 13: Word Break
     * Time: O(n²), Space: O(n)
     */
    public static boolean wordBreak(String s, java.util.List<String> wordDict) {
        java.util.Set<String> wordSet = new java.util.HashSet<>(wordDict);
        boolean[] dp = new boolean[s.length() + 1];
        dp[0] = true;

        for (int i = 1; i <= s.length(); i++) {
            for (int j = 0; j < i; j++) {
                if (dp[j] && wordSet.contains(s.substring(j, i))) {
                    dp[i] = true;
                    break;
                }
            }
        }
        return dp[s.length()];
    }

    /**
     * Problem 14: Maximum Product Subarray
     * Time: O(n), Space: O(1)
     */
    public static int maxProduct(int[] nums) {
        if (nums.length == 0) return 0;

        int maxSoFar = nums[0], minSoFar = nums[0], result = nums[0];

        for (int i = 1; i < nums.length; i++) {
            int curr = nums[i];
            int tempMax = Math.max(curr, Math.max(maxSoFar * curr, minSoFar * curr));
            minSoFar = Math.min(curr, Math.min(maxSoFar * curr, minSoFar * curr));
            maxSoFar = tempMax;
            result = Math.max(result, maxSoFar);
        }
        return result;
    }

    // ==========================================
    // UTILITY METHODS
    // ==========================================

    public static void printArray(int[] arr) {
        System.out.print("[");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i]);
            if (i < arr.length - 1) System.out.print(", ");
        }
        System.out.println("]");
    }

    // ==========================================
    // TEST METHODS
    // ==========================================

    public static void main(String[] args) {
        System.out.println("=== DYNAMIC PROGRAMMING PRACTICE SOLUTIONS ===\n");

        // Test Climbing Stairs
        System.out.println("1. Climbing Stairs");
        System.out.println("n = 5: " + climbStairs(5));
        System.out.println();

        // Test Fibonacci Number
        System.out.println("2. Fibonacci Number");
        System.out.println("n = 10: " + fib(10));
        System.out.println();

        // Test House Robber
        System.out.println("3. House Robber");
        int[] houses = {1, 2, 3, 1};
        System.out.print("Houses: ");
        printArray(houses);
        System.out.println("Max Robbery: " + rob(houses));
        System.out.println();

        // Test Maximum Subarray
        System.out.println("4. Maximum Subarray");
        int[] subarray = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
        System.out.print("Array: ");
        printArray(subarray);
        System.out.println("Max Subarray Sum: " + maxSubArray(subarray));
        System.out.println();

        // Test Coin Change
        System.out.println("5. Coin Change");
        int[] coins = {1, 2, 5};
        int amount = 11;
        System.out.println("Coins: " + java.util.Arrays.toString(coins) + ", Amount: " + amount);
        System.out.println("Min Coins: " + coinChange(coins, amount));
        System.out.println();

        // Test Longest Common Subsequence
        System.out.println("6. Longest Common Subsequence");
        String text1 = "abcde", text2 = "ace";
        System.out.println("Text1: \"" + text1 + "\", Text2: \"" + text2 + "\"");
        System.out.println("LCS Length: " + longestCommonSubsequence(text1, text2));
        System.out.println();

        // Test Edit Distance
        System.out.println("7. Edit Distance");
        String word1 = "horse", word2 = "ros";
        System.out.println("Word1: \"" + word1 + "\", Word2: \"" + word2 + "\"");
        System.out.println("Edit Distance: " + minDistance(word1, word2));
        System.out.println();

        // Test Unique Paths
        System.out.println("8. Unique Paths");
        System.out.println("Grid 3x7: " + uniquePaths(3, 7));
        System.out.println();

        // Test Longest Valid Parentheses
        System.out.println("9. Longest Valid Parentheses");
        String parentheses = "(()";
        System.out.println("String: \"" + parentheses + "\"");
        System.out.println("Longest Valid: " + longestValidParentheses(parentheses));
        System.out.println();

        // Test Maximum Product Subarray
        System.out.println("10. Maximum Product Subarray");
        int[] products = {2, 3, -2, 4};
        System.out.print("Array: ");
        printArray(products);
        System.out.println("Max Product: " + maxProduct(products));
    }
}