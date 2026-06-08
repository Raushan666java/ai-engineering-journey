package dynamic_programming.questions;

/*
 * 2. HOUSE ROBBER (LeetCode 198)
 *
 * Problem Statement:
 * You are a professional robber planning to rob houses along a street.
 * Each house has a certain amount of money stashed, the only constraint stopping you
 * from robbing each of them is that adjacent houses have security systems connected
 * and it will automatically contact the police if two adjacent houses were broken into on the same night.
 * Given an integer array nums representing the amount of money of each house,
 * return the maximum amount of money you can rob tonight without alerting the police.
 *
 * Conceptual Understanding:
 * - Cannot rob adjacent houses (houses i and i+1)
 * - Choose maximum sum where no two elements are adjacent
 * - DP state: max money up to house i
 * - Decision: rob current house or skip it
 * - Base cases: empty array = 0, single house = that amount
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1) optimized, O(n) with array
 */

import java.util.*;

class HouseRobber2 {

    // Method 1: Recursive approach (exponential time)
    public int robRecursive(int[] nums) {
        if (nums == null || nums.length == 0) return 0;
        return robRecursiveHelper(nums, 0);
    }

    private int robRecursiveHelper(int[] nums, int index) {
        if (index >= nums.length) return 0;

        // Option 1: Rob current house, skip next
        int robCurrent = nums[index] + robRecursiveHelper(nums, index + 2);

        // Option 2: Skip current house
        int skipCurrent = robRecursiveHelper(nums, index + 1);

        return Math.max(robCurrent, skipCurrent);
    }

    // Method 2: Memoization (top-down DP)
    public int robMemo(int[] nums) {
        if (nums == null || nums.length == 0) return 0;

        int[] memo = new int[nums.length];
        Arrays.fill(memo, -1);
        return robMemoHelper(nums, 0, memo);
    }

    private int robMemoHelper(int[] nums, int index, int[] memo) {
        if (index >= nums.length) return 0;
        if (memo[index] != -1) return memo[index];

        // Rob current + skip next
        int robCurrent = nums[index] + robMemoHelper(nums, index + 2, memo);

        // Skip current
        int skipCurrent = robMemoHelper(nums, index + 1, memo);

        memo[index] = Math.max(robCurrent, skipCurrent);
        return memo[index];
    }

    // Method 3: Tabulation (bottom-up DP)
    public int robTabulation(int[] nums) {
        if (nums == null || nums.length == 0) return 0;
        if (nums.length == 1) return nums[0];

        int n = nums.length;
        int[] dp = new int[n];

        // Base cases
        dp[0] = nums[0];
        dp[1] = Math.max(nums[0], nums[1]);

        // Fill DP table
        for (int i = 2; i < n; i++) {
            // Max of: rob current + dp[i-2], or skip current = dp[i-1]
            dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
        }

        return dp[n - 1];
    }

    // Method 4: Space optimized (O(1) space)
    public int robOptimized(int[] nums) {
        if (nums == null || nums.length == 0) return 0;
        if (nums.length == 1) return nums[0];
        if (nums.length == 2) return Math.max(nums[0], nums[1]);

        int prev2 = nums[0];        // dp[i-2]
        int prev1 = Math.max(nums[0], nums[1]); // dp[i-1]

        for (int i = 2; i < nums.length; i++) {
            int current = Math.max(nums[i] + prev2, prev1);
            prev2 = prev1;
            prev1 = current;
        }

        return prev1;
    }

    // Method 5: House robber with circular constraint (House Robber II)
    public int robCircular(int[] nums) {
        if (nums == null || nums.length == 0) return 0;
        if (nums.length == 1) return nums[0];
        if (nums.length == 2) return Math.max(nums[0], nums[1]);

        // Case 1: Rob houses 0 to n-2 (exclude last house)
        int max1 = robOptimized(Arrays.copyOfRange(nums, 0, nums.length - 1));

        // Case 2: Rob houses 1 to n-1 (exclude first house)
        int max2 = robOptimized(Arrays.copyOfRange(nums, 1, nums.length));

        return Math.max(max1, max2);
    }

    // Method 6: House robber with variable constraints
    public int robWithConstraints(int[] nums, int minDistance) {
        if (nums == null || nums.length == 0) return 0;
        if (minDistance <= 0) return Arrays.stream(nums).sum();

        int n = nums.length;
        int[] dp = new int[n];

        // Base cases
        dp[0] = nums[0];
        for (int i = 1; i < Math.min(minDistance, n); i++) {
            dp[i] = Math.max(dp[i - 1], nums[i]);
        }

        // Fill DP table
        for (int i = minDistance; i < n; i++) {
            dp[i] = Math.max(nums[i] + dp[i - minDistance], dp[i - 1]);
        }

        return dp[n - 1];
    }

    // Method 7: Get robbery plan (which houses to rob)
    public List<Integer> getRobberyPlan(int[] nums) {
        List<Integer> plan = new ArrayList<>();
        if (nums == null || nums.length == 0) return plan;

        int n = nums.length;
        int[] dp = new int[n];

        // Fill DP table
        dp[0] = nums[0];
        if (n > 1) {
            dp[1] = Math.max(nums[0], nums[1]);
        }

        for (int i = 2; i < n; i++) {
            dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
        }

        // Backtrack to find which houses were robbed
        int i = n - 1;
        while (i >= 0) {
            if (i == 0) {
                plan.add(0);
                break;
            } else if (i == 1) {
                if (dp[1] == nums[1]) {
                    plan.add(1);
                } else {
                    plan.add(0);
                }
                break;
            } else {
                if (dp[i] == nums[i] + dp[i - 2]) {
                    plan.add(i);
                    i -= 2;
                } else {
                    i -= 1;
                }
            }
        }

        Collections.sort(plan); // Return in ascending order
        return plan;
    }

    // Method 8: Performance analysis
    public static class RobberyStats {
        int houses;
        int maxAmount;
        long timeMs;
        String method;
        int spaceUsed;
        List<Integer> plan;

        public RobberyStats(int houses, int maxAmount, long timeMs, String method,
                           int spaceUsed, List<Integer> plan) {
            this.houses = houses;
            this.maxAmount = maxAmount;
            this.timeMs = timeMs;
            this.method = method;
            this.spaceUsed = spaceUsed;
            this.plan = plan;
        }

        @Override
        public String toString() {
            return String.format("Houses=%d, Amount=%d, Time=%dms, Method=%s, Space=%d, Plan=%s",
                               houses, maxAmount, timeMs, method, spaceUsed, plan);
        }
    }

    public RobberyStats analyzeRobbery(int[] nums, String method) {
        long startTime = System.nanoTime();
        int amount = 0;
        int space = 0;
        List<Integer> plan = null;

        switch (method) {
            case "recursive":
                amount = robRecursive(nums);
                space = nums.length; // stack space
                break;
            case "memo":
                amount = robMemo(nums);
                space = nums.length; // memo array
                break;
            case "tabulation":
                amount = robTabulation(nums);
                space = nums.length; // dp array
                break;
            case "optimized":
                amount = robOptimized(nums);
                space = 2; // two variables
                plan = getRobberyPlan(nums);
                break;
        }

        long timeMs = (System.nanoTime() - startTime) / 1_000_000;
        return new RobberyStats(nums.length, amount, timeMs, method, space, plan);
    }

    // Method 9: Validate robbery result
    public boolean validateRobbery(int[] nums, int result, List<Integer> plan) {
        if (nums == null || nums.length == 0) return result == 0;

        // Check if plan is valid (no adjacent houses)
        if (plan != null) {
            for (int i = 1; i < plan.size(); i++) {
                if (plan.get(i) - plan.get(i - 1) <= 1) {
                    return false; // Adjacent houses robbed
                }
            }
        }

        // Calculate actual amount from plan
        int calculated = 0;
        if (plan != null) {
            for (int house : plan) {
                if (house >= 0 && house < nums.length) {
                    calculated += nums[house];
                } else {
                    return false; // Invalid house index
                }
            }
        }

        return calculated == result;
    }

    // Method 10: Get all possible robbery plans
    public List<List<Integer>> getAllRobberyPlans(int[] nums) {
        List<List<Integer>> plans = new ArrayList<>();
        generatePlans(nums, 0, new ArrayList<>(), plans);
        return plans;
    }

    private void generatePlans(int[] nums, int index, List<Integer> current, List<List<Integer>> plans) {
        if (index >= nums.length) {
            plans.add(new ArrayList<>(current));
            return;
        }

        // Option 1: Rob current house
        current.add(index);
        generatePlans(nums, index + 2, current, plans); // Skip next house
        current.remove(current.size() - 1);

        // Option 2: Skip current house
        generatePlans(nums, index + 1, current, plans);
    }

    // Method 11: Maximum robbery with K skips allowed
    public int robWithKSkips(int[] nums, int k) {
        if (nums == null || nums.length == 0) return 0;

        int n = nums.length;
        int[] dp = new int[n];

        // Base cases
        dp[0] = nums[0];
        if (n > 1) dp[1] = Math.max(nums[0], nums[1]);

        for (int i = 2; i < n; i++) {
            // Can skip up to k houses between robberies
            int maxPrev = 0;
            for (int j = Math.max(0, i - k - 1); j < i - 1; j++) {
                maxPrev = Math.max(maxPrev, dp[j]);
            }
            dp[i] = Math.max(nums[i] + maxPrev, dp[i - 1]);
        }

        return dp[n - 1];
    }

    // Method 12: Advanced house robber with costs
    public int robWithCosts(int[] nums, int[] costs) {
        if (nums == null || nums.length == 0) return 0;
        if (costs == null || costs.length != nums.length) {
            return robOptimized(nums); // Fallback to standard
        }

        int n = nums.length;
        int[] dp = new int[n];

        // Base cases with costs
        dp[0] = Math.max(0, nums[0] - costs[0]); // Can choose not to rob
        if (n > 1) {
            dp[1] = Math.max(dp[0], Math.max(0, nums[1] - costs[1]));
        }

        for (int i = 2; i < n; i++) {
            // Rob current (with cost) + best from non-adjacent, or skip
            int robCurrent = nums[i] - costs[i] + Math.max(0, dp[i - 2]);
            int skipCurrent = dp[i - 1];
            dp[i] = Math.max(robCurrent, skipCurrent);
        }

        return dp[n - 1];
    }

    // Test cases
    public static void main(String[] args) {
        HouseRobber2 solution = new HouseRobber2();

        // Test Case 1: Basic house robber
        System.out.println("=== House Robber ===");
        int[] nums1 = {1, 2, 3, 1};
        System.out.println("Houses: " + Arrays.toString(nums1));

        System.out.println("Recursive: " + solution.robRecursive(nums1));
        System.out.println("Memoization: " + solution.robMemo(nums1));
        System.out.println("Tabulation: " + solution.robTabulation(nums1));
        System.out.println("Optimized: " + solution.robOptimized(nums1));

        // Test Case 2: Circular house robber
        int[] nums2 = {2, 3, 2};
        System.out.println("Circular houses " + Arrays.toString(nums2) + ": " + solution.robCircular(nums2));

        // Test Case 3: Variable constraints
        System.out.println("Min distance 3: " + solution.robWithConstraints(nums1, 3));

        // Test Case 4: Get robbery plan
        List<Integer> plan = solution.getRobberyPlan(nums1);
        System.out.println("Robbery plan: " + plan);

        // Test Case 5: Performance analysis
        RobberyStats stats = solution.analyzeRobbery(nums1, "optimized");
        System.out.println("Analysis: " + stats);

        // Test Case 6: Validation
        boolean valid = solution.validateRobbery(nums1, solution.robOptimized(nums1), plan);
        System.out.println("Plan valid: " + valid);

        // Test Case 7: All plans
        List<List<Integer>> allPlans = solution.getAllRobberyPlans(new int[]{1, 2, 3});
        System.out.println("All plans for [1,2,3]: " + allPlans);

        // Test Case 8: With K skips
        System.out.println("With 2 skips: " + solution.robWithKSkips(nums1, 2));

        // Test Case 9: With costs
        int[] costs = {0, 1, 1, 2};
        System.out.println("With costs " + Arrays.toString(costs) + ": " + solution.robWithCosts(nums1, costs));

        // Test Case 10: Edge cases
        System.out.println("\nEdge cases:");
        System.out.println("Empty array: " + solution.robOptimized(new int[]{}));
        System.out.println("Single house: " + solution.robOptimized(new int[]{5}));
        System.out.println("Two houses: " + solution.robOptimized(new int[]{1, 2}));
        System.out.println("All zeros: " + solution.robOptimized(new int[]{0, 0, 0}));

        // Test Case 11: Large array performance
        int[] largeArray = new int[100];
        Arrays.fill(largeArray, 1);
        long startTime = System.nanoTime();
        int result = solution.robOptimized(largeArray);
        long timeMs = (System.nanoTime() - startTime) / 1_000_000;
        System.out.println("Large array (100 houses): " + result + " (time: " + timeMs + "ms)");

        // Test Case 12: Compare methods
        System.out.println("\nMethod comparison:");
        int[] testArray = {2, 7, 9, 3, 1};
        for (String method : Arrays.asList("recursive", "memo", "tabulation", "optimized")) {
            RobberyStats s = solution.analyzeRobbery(testArray, method);
            System.out.println(method + ": " + s.maxAmount + " amount, " + s.timeMs + "ms");
        }
    }
}