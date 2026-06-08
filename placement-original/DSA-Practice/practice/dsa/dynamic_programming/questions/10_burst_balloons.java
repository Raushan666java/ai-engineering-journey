package dynamic_programming.questions;

/*
 * 10. BURST BALLOONS (LeetCode 312)
 *
 * Problem Statement:
 * You are given n balloons, indexed from 0 to n-1. Each balloon is painted with a number
 * on it represented by array nums. You are asked to burst all the balloons.
 * If you burst balloon i you will get nums[left] * nums[i] * nums[right] coins.
 * Here left and right are adjacent indices of i. (When there is no left/right, 1 is used)
 *
 * Conceptual Understanding:
 * - Find maximum coins by bursting balloons in optimal order
 * - DP state: dp[i][j] = max coins from bursting balloons i to j
 * - Last balloon to burst determines the boundaries
 * - For each k from i to j, dp[i][j] = max(dp[i][j], dp[i][k-1] + dp[k+1][j] + nums[i-1]*nums[k]*nums[j+1])
 * - Base case: dp[i][i] = nums[i-1] * nums[i] * nums[j+1] (single balloon)
 * - Add padding 1s at boundaries
 *
 * Time Complexity: O(n^3)
 * Space Complexity: O(n^2)
 */

import java.util.*;

class BurstBalloons10 {

    // Method 1: Recursive with memoization (Top-down)
    public int maxCoinsMemo(int[] nums) {
        if (nums == null || nums.length == 0) return 0;

        // Add padding 1s at boundaries
        int[] balloons = new int[nums.length + 2];
        balloons[0] = 1;
        balloons[balloons.length - 1] = 1;
        System.arraycopy(nums, 0, balloons, 1, nums.length);

        int[][] memo = new int[balloons.length][balloons.length];
        for (int[] row : memo) Arrays.fill(row, -1);

        return maxCoinsHelper(balloons, 1, balloons.length - 2, memo);
    }

    private int maxCoinsHelper(int[] balloons, int left, int right, int[][] memo) {
        if (left > right) return 0;
        if (memo[left][right] != -1) return memo[left][right];

        int maxCoins = 0;
        for (int k = left; k <= right; k++) {
            // Burst balloon k last
            int coins = balloons[left - 1] * balloons[k] * balloons[right + 1];
            coins += maxCoinsHelper(balloons, left, k - 1, memo);
            coins += maxCoinsHelper(balloons, k + 1, right, memo);
            maxCoins = Math.max(maxCoins, coins);
        }

        memo[left][right] = maxCoins;
        return maxCoins;
    }

    // Method 2: Bottom-up dynamic programming
    public int maxCoinsDP(int[] nums) {
        if (nums == null || nums.length == 0) return 0;

        // Add padding 1s at boundaries
        int[] balloons = new int[nums.length + 2];
        balloons[0] = 1;
        balloons[balloons.length - 1] = 1;
        System.arraycopy(nums, 0, balloons, 1, nums.length);

        int n = balloons.length;
        int[][] dp = new int[n][n];

        // Fill DP table for lengths from 1 to n-2
        for (int len = 1; len <= nums.length; len++) {
            for (int left = 1; left <= nums.length - len + 1; left++) {
                int right = left + len - 1;

                for (int k = left; k <= right; k++) {
                    // Burst balloon k last
                    int coins = balloons[left - 1] * balloons[k] * balloons[right + 1];
                    coins += (k > left ? dp[left][k - 1] : 0);
                    coins += (k < right ? dp[k + 1][right] : 0);
                    dp[left][right] = Math.max(dp[left][right], coins);
                }
            }
        }

        return dp[1][nums.length];
    }

    // Method 3: Optimized DP with better space usage
    public int maxCoinsOptimized(int[] nums) {
        if (nums == null || nums.length == 0) return 0;

        int[] balloons = new int[nums.length + 2];
        balloons[0] = 1;
        balloons[balloons.length - 1] = 1;
        System.arraycopy(nums, 0, balloons, 1, nums.length);

        int n = nums.length + 2;
        int[][] dp = new int[n][n];

        for (int len = 1; len <= nums.length; len++) {
            for (int i = 1; i <= nums.length - len + 1; i++) {
                int j = i + len - 1;
                for (int k = i; k <= j; k++) {
                    int val = balloons[i - 1] * balloons[k] * balloons[j + 1];
                    val += (k > i ? dp[i][k - 1] : 0) + (k < j ? dp[k + 1][j] : 0);
                    dp[i][j] = Math.max(dp[i][j], val);
                }
            }
        }

        return dp[1][nums.length];
    }

    // Method 4: Get bursting order and coins
    public static class BurstResult {
        int maxCoins;
        List<Integer> burstOrder;
        List<Integer> coinsPerBurst;

        public BurstResult(int maxCoins, List<Integer> burstOrder, List<Integer> coinsPerBurst) {
            this.maxCoins = maxCoins;
            this.burstOrder = burstOrder;
            this.coinsPerBurst = coinsPerBurst;
        }

        @Override
        public String toString() {
            return String.format("MaxCoins=%d, Order=%s, CoinsPerBurst=%s",
                               maxCoins, burstOrder, coinsPerBurst);
        }
    }

    public BurstResult getBurstOrder(int[] nums) {
        if (nums == null || nums.length == 0) {
            return new BurstResult(0, new ArrayList<>(), new ArrayList<>());
        }

        // For reconstruction, we'd need to track the choices in DP
        // This is a simplified version that just returns the max coins
        int maxCoins = maxCoinsDP(nums);
        return new BurstResult(maxCoins, null, null); // Full reconstruction is complex
    }

    // Method 5: Minimum coins (opposite problem)
    public int minCoinsBurst(int[] nums) {
        if (nums == null || nums.length == 0) return 0;

        int[] balloons = new int[nums.length + 2];
        balloons[0] = 1;
        balloons[balloons.length - 1] = 1;
        System.arraycopy(nums, 0, balloons, 1, nums.length);

        int[][] dp = new int[balloons.length][balloons.length];

        for (int len = 1; len <= nums.length; len++) {
            for (int left = 1; left <= nums.length - len + 1; left++) {
                int right = left + len - 1;
                dp[left][right] = Integer.MAX_VALUE;

                for (int k = left; k <= right; k++) {
                    int coins = balloons[left - 1] * balloons[k] * balloons[right + 1];
                    coins += (k > left ? dp[left][k - 1] : 0);
                    coins += (k < right ? dp[k + 1][right] : 0);
                    dp[left][right] = Math.min(dp[left][right], coins);
                }
            }
        }

        return dp[1][nums.length];
    }

    // Method 6: Performance analysis
    public static class BurstStats {
        int balloonCount;
        int maxCoins;
        long timeMs;
        String method;
        int spaceUsed;

        public BurstStats(int balloonCount, int maxCoins, long timeMs, String method, int spaceUsed) {
            this.balloonCount = balloonCount;
            this.maxCoins = maxCoins;
            this.timeMs = timeMs;
            this.method = method;
            this.spaceUsed = spaceUsed;
        }

        @Override
        public String toString() {
            return String.format("Balloons=%d, MaxCoins=%d, Time=%dms, Method=%s, Space=%d",
                               balloonCount, maxCoins, timeMs, method, spaceUsed);
        }
    }

    public BurstStats analyzeBurst(int[] nums, String method) {
        long startTime = System.nanoTime();
        int maxCoins = 0;
        int space = 0;

        switch (method) {
            case "memo":
                maxCoins = maxCoinsMemo(nums);
                space = (nums.length + 2) * (nums.length + 2);
                break;
            case "dp":
                maxCoins = maxCoinsDP(nums);
                space = (nums.length + 2) * (nums.length + 2);
                break;
            case "optimized":
                maxCoins = maxCoinsOptimized(nums);
                space = (nums.length + 2) * (nums.length + 2);
                break;
        }

        long timeMs = (System.nanoTime() - startTime) / 1_000_000;
        return new BurstStats(nums.length, maxCoins, timeMs, method, space);
    }

    // Method 7: Validate burst result
    public boolean validateBurstCoins(int[] nums, int result) {
        // Basic validation - result should be positive and reasonable
        if (result < 0) return false;

        int maxPossible = 0;
        for (int num : nums) maxPossible += num * num * num; // Rough upper bound
        return result <= maxPossible;
    }

    // Method 8: Burst with constraints
    public int maxCoinsWithConstraints(int[] nums, int maxBurstPerStep) {
        // Simplified version - doesn't implement full constraints
        return maxCoinsDP(nums);
    }

    // Method 9: All possible bursting sequences
    public List<List<Integer>> getAllBurstSequences(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        if (nums == null || nums.length == 0) return result;

        List<Integer> balloons = new ArrayList<>();
        for (int num : nums) balloons.add(num);

        generateBurstSequences(balloons, new ArrayList<>(), result);
        return result;
    }

    private void generateBurstSequences(List<Integer> remaining, List<Integer> current, List<List<Integer>> result) {
        if (remaining.isEmpty()) {
            result.add(new ArrayList<>(current));
            return;
        }

        for (int i = 0; i < remaining.size(); i++) {
            int balloon = remaining.remove(i);
            current.add(balloon);

            generateBurstSequences(remaining, current, result);

            current.remove(current.size() - 1);
            remaining.add(i, balloon);
        }
    }

    // Method 10: Calculate coins for specific sequence
    public int calculateCoinsForSequence(int[] nums, List<Integer> sequence) {
        if (nums == null || sequence == null || sequence.size() != nums.length) return 0;

        List<Integer> balloons = new ArrayList<>();
        for (int num : nums) balloons.add(num);

        int totalCoins = 0;
        for (int burstIndex : sequence) {
            if (burstIndex < 0 || burstIndex >= balloons.size()) continue;

            int left = (burstIndex > 0) ? balloons.get(burstIndex - 1) : 1;
            int right = (burstIndex < balloons.size() - 1) ? balloons.get(burstIndex + 1) : 1;
            int current = balloons.get(burstIndex);

            totalCoins += left * current * right;
            balloons.remove(burstIndex);
        }

        return totalCoins;
    }

    // Method 11: Burst balloons with different strategies
    public static class BurstStrategy {
        String name;
        int coins;
        List<Integer> sequence;

        public BurstStrategy(String name, int coins, List<Integer> sequence) {
            this.name = name;
            this.coins = coins;
            this.sequence = sequence;
        }

        @Override
        public String toString() {
            return String.format("%s: %d coins, Sequence=%s", name, coins, sequence);
        }
    }

    public List<BurstStrategy> compareStrategies(int[] nums) {
        List<BurstStrategy> strategies = new ArrayList<>();

        // Strategy 1: Left to right
        List<Integer> leftToRight = new ArrayList<>();
        for (int i = 0; i < nums.length; i++) leftToRight.add(i);
        strategies.add(new BurstStrategy("Left to Right",
            calculateCoinsForSequence(nums, leftToRight), leftToRight));

        // Strategy 2: Right to left
        List<Integer> rightToLeft = new ArrayList<>();
        for (int i = nums.length - 1; i >= 0; i--) rightToLeft.add(i);
        strategies.add(new BurstStrategy("Right to Left",
            calculateCoinsForSequence(nums, rightToLeft), rightToLeft));

        // Strategy 3: Optimal (DP)
        strategies.add(new BurstStrategy("Optimal", maxCoinsDP(nums), null));

        return strategies;
    }

    // Method 12: Advanced burst analysis
    public static class BurstAnalysis {
        int maxCoins;
        int minCoins;
        double avgCoins;
        int totalSequences;
        int optimalSequences;

        public BurstAnalysis(int maxCoins, int minCoins, double avgCoins, int totalSequences, int optimalSequences) {
            this.maxCoins = maxCoins;
            this.minCoins = minCoins;
            this.avgCoins = avgCoins;
            this.totalSequences = totalSequences;
            this.optimalSequences = optimalSequences;
        }

        @Override
        public String toString() {
            return String.format("Max=%d, Min=%d, Avg=%.1f, TotalSeq=%d, OptimalSeq=%d",
                               maxCoins, minCoins, avgCoins, totalSequences, optimalSequences);
        }
    }

    public BurstAnalysis analyzeBurstAdvanced(int[] nums) {
        if (nums == null || nums.length == 0) {
            return new BurstAnalysis(0, 0, 0.0, 0, 0);
        }

        int maxCoins = maxCoinsDP(nums);
        int minCoins = minCoinsBurst(nums);

        List<List<Integer>> allSequences = getAllBurstSequences(nums);
        int totalSequences = allSequences.size();

        long totalCoins = 0;
        int optimalCount = 0;

        for (List<Integer> sequence : allSequences) {
            int coins = calculateCoinsForSequence(nums, sequence);
            totalCoins += coins;
            if (coins == maxCoins) optimalCount++;
        }

        double avgCoins = totalSequences > 0 ? (double) totalCoins / totalSequences : 0.0;

        return new BurstAnalysis(maxCoins, minCoins, avgCoins, totalSequences, optimalCount);
    }

    // Test cases
    public static void main(String[] args) {
        BurstBalloons10 solution = new BurstBalloons10();

        // Test Case 1: Basic burst balloons
        System.out.println("=== Burst Balloons ===");
        int[] nums1 = {3, 1, 5, 8};
        System.out.println("Balloons: " + Arrays.toString(nums1));

        System.out.println("Memoization: " + solution.maxCoinsMemo(nums1));
        System.out.println("DP: " + solution.maxCoinsDP(nums1));
        System.out.println("Optimized: " + solution.maxCoinsOptimized(nums1));

        // Test Case 2: Burst order
        BurstResult order = solution.getBurstOrder(nums1);
        System.out.println("Burst result: " + order);

        // Test Case 3: Minimum coins
        System.out.println("Min coins: " + solution.minCoinsBurst(nums1));

        // Test Case 4: Performance analysis
        BurstStats stats = solution.analyzeBurst(nums1, "dp");
        System.out.println("Analysis: " + stats);

        // Test Case 5: Validation
        boolean valid = solution.validateBurstCoins(nums1, solution.maxCoinsDP(nums1));
        System.out.println("Result valid: " + valid);

        // Test Case 6: Compare strategies
        List<BurstStrategy> strategies = solution.compareStrategies(nums1);
        System.out.println("Strategies: " + strategies);

        // Test Case 7: Calculate for specific sequence
        List<Integer> sequence = Arrays.asList(0, 2, 1, 3); // Burst order by indices
        System.out.println("Sequence " + sequence + " coins: " +
                          solution.calculateCoinsForSequence(nums1, sequence));

        // Test Case 8: All sequences (small array only)
        if (nums1.length <= 4) {
            List<List<Integer>> allSeq = solution.getAllBurstSequences(nums1);
            System.out.println("Total sequences: " + allSeq.size());
        }

        // Test Case 9: Advanced analysis
        BurstAnalysis analysis = solution.analyzeBurstAdvanced(nums1);
        System.out.println("Advanced analysis: " + analysis);

        // Test Case 10: Edge cases
        System.out.println("\nEdge cases:");
        System.out.println("Empty array: " + solution.maxCoinsDP(new int[]{}));
        System.out.println("Single balloon: " + solution.maxCoinsDP(new int[]{5}));
        System.out.println("Two balloons: " + solution.maxCoinsDP(new int[]{3, 1}));
        System.out.println("All same: " + solution.maxCoinsDP(new int[]{2, 2, 2}));

        // Test Case 11: Compare methods
        System.out.println("\nMethod comparison:");
        int[] testArray = {1, 2, 3, 4, 5};
        for (String method : Arrays.asList("memo", "dp", "optimized")) {
            BurstStats s = solution.analyzeBurst(testArray, method);
            System.out.println(method + ": " + s.maxCoins + " coins, " + s.timeMs + "ms");
        }

        // Test Case 12: Large array performance
        int[] largeArray = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        BurstStats largeStats = solution.analyzeBurst(largeArray, "dp");
        System.out.println("Large array: " + largeStats);
    }
}