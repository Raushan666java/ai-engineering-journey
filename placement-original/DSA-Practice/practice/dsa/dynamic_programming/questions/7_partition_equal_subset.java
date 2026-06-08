package dynamic_programming.questions;

/*
 * 7. PARTITION EQUAL SUBSET SUM (LeetCode 416)
 *
 * Problem Statement:
 * Given a non-empty array nums containing only positive integers,
 * find if the array can be partitioned into two subsets such that
 * the sum of elements in both subsets is equal.
 *
 * Conceptual Understanding:
 * - Find if array can be partitioned into two subsets with equal sum
 * - Total sum must be even for equal partition
 * - DP state: dp[i][j] = can we achieve sum j using first i elements
 * - Or 0/1 knapsack: can we achieve sum = total/2
 * - Base case: dp[0] = true (sum 0 is always possible)
 * - Transition: dp[j] = dp[j] || dp[j - nums[i]]
 *
 * Time Complexity: O(n * sum)
 * Space Complexity: O(sum)
 */

import java.util.*;

class PartitionEqualSubsetSum7 {

    // Method 1: Recursive with memoization (Top-down)
    public boolean canPartitionMemo(int[] nums) {
        if (nums == null || nums.length < 2) return false;

        int total = 0;
        for (int num : nums) total += num;
        if (total % 2 != 0) return false;

        int target = total / 2;
        Boolean[][] memo = new Boolean[nums.length + 1][target + 1];
        return canPartitionHelper(nums, 0, target, memo);
    }

    private boolean canPartitionHelper(int[] nums, int index, int target, Boolean[][] memo) {
        if (target == 0) return true;
        if (index >= nums.length || target < 0) return false;
        if (memo[index][target] != null) return memo[index][target];

        // Skip current number
        boolean skip = canPartitionHelper(nums, index + 1, target, memo);

        // Take current number
        boolean take = false;
        if (nums[index] <= target) {
            take = canPartitionHelper(nums, index + 1, target - nums[index], memo);
        }

        memo[index][target] = skip || take;
        return memo[index][target];
    }

    // Method 2: Bottom-up dynamic programming (0/1 Knapsack)
    public boolean canPartitionDP(int[] nums) {
        if (nums == null || nums.length < 2) return false;

        int total = 0;
        for (int num : nums) total += num;
        if (total % 2 != 0) return false;

        int target = total / 2;
        boolean[] dp = new boolean[target + 1];
        dp[0] = true;

        for (int num : nums) {
            for (int j = target; j >= num; j--) {
                dp[j] = dp[j] || dp[j - num];
            }
        }

        return dp[target];
    }

    // Method 3: 2D DP table
    public boolean canPartition2D(int[] nums) {
        if (nums == null || nums.length < 2) return false;

        int total = 0;
        for (int num : nums) total += num;
        if (total % 2 != 0) return false;

        int target = total / 2;
        boolean[][] dp = new boolean[nums.length + 1][target + 1];

        // Base case: sum 0 is always possible
        for (int i = 0; i <= nums.length; i++) dp[i][0] = true;

        for (int i = 1; i <= nums.length; i++) {
            for (int j = 1; j <= target; j++) {
                // Don't include current number
                dp[i][j] = dp[i - 1][j];

                // Include current number if possible
                if (j >= nums[i - 1]) {
                    dp[i][j] = dp[i][j] || dp[i - 1][j - nums[i - 1]];
                }
            }
        }

        return dp[nums.length][target];
    }

    // Method 4: Get partition subsets
    public static class PartitionResult {
        boolean possible;
        List<Integer> subset1;
        List<Integer> subset2;

        public PartitionResult(boolean possible, List<Integer> subset1, List<Integer> subset2) {
            this.possible = possible;
            this.subset1 = subset1;
            this.subset2 = subset2;
        }

        @Override
        public String toString() {
            if (!possible) return "Not possible";
            return String.format("Subset1=%s (sum=%d), Subset2=%s (sum=%d)",
                               subset1, subset1.stream().mapToInt(Integer::intValue).sum(),
                               subset2, subset2.stream().mapToInt(Integer::intValue).sum());
        }
    }

    public PartitionResult getPartitionSubsets(int[] nums) {
        if (nums == null || nums.length < 2) {
            return new PartitionResult(false, null, null);
        }

        int total = 0;
        for (int num : nums) total += num;
        if (total % 2 != 0) {
            return new PartitionResult(false, null, null);
        }

        int target = total / 2;
        boolean[][] dp = new boolean[nums.length + 1][target + 1];
        boolean[][] used = new boolean[nums.length + 1][target + 1];

        // Initialize
        for (int i = 0; i <= nums.length; i++) dp[i][0] = true;

        // Fill DP table
        for (int i = 1; i <= nums.length; i++) {
            for (int j = 1; j <= target; j++) {
                dp[i][j] = dp[i - 1][j];
                if (j >= nums[i - 1]) {
                    if (dp[i - 1][j - nums[i - 1]]) {
                        dp[i][j] = true;
                        used[i][j] = true; // Mark that we used this number
                    }
                }
            }
        }

        if (!dp[nums.length][target]) {
            return new PartitionResult(false, null, null);
        }

        // Reconstruct subsets
        List<Integer> subset1 = new ArrayList<>();
        List<Integer> subset2 = new ArrayList<>();
        int currentSum = target;
        int currentIndex = nums.length;

        while (currentSum > 0 && currentIndex > 0) {
            if (used[currentIndex][currentSum]) {
                subset1.add(nums[currentIndex - 1]);
                currentSum -= nums[currentIndex - 1];
            } else {
                subset2.add(nums[currentIndex - 1]);
            }
            currentIndex--;
        }

        // Add remaining numbers to subset2
        for (int i = 0; i < currentIndex; i++) {
            subset2.add(nums[i]);
        }

        return new PartitionResult(true, subset1, subset2);
    }

    // Method 5: Minimum difference partition
    public int minPartitionDifference(int[] nums) {
        if (nums == null || nums.length == 0) return 0;

        int total = 0;
        for (int num : nums) total += num;

        boolean[] dp = new boolean[total + 1];
        dp[0] = true;

        for (int num : nums) {
            for (int j = total; j >= num; j--) {
                dp[j] = dp[j] || dp[j - num];
            }
        }

        int minDiff = Integer.MAX_VALUE;
        for (int i = total / 2; i >= 0; i--) {
            if (dp[i]) {
                minDiff = Math.min(minDiff, total - 2 * i);
                break;
            }
        }

        return minDiff;
    }

    // Method 6: Performance analysis
    public static class PartitionStats {
        int arraySize;
        int totalSum;
        boolean possible;
        long timeMs;
        String method;
        int spaceUsed;

        public PartitionStats(int arraySize, int totalSum, boolean possible, long timeMs,
                            String method, int spaceUsed) {
            this.arraySize = arraySize;
            this.totalSum = totalSum;
            this.possible = possible;
            this.timeMs = timeMs;
            this.method = method;
            this.spaceUsed = spaceUsed;
        }

        @Override
        public String toString() {
            return String.format("Size=%d, Sum=%d, Possible=%s, Time=%dms, Method=%s, Space=%d",
                               arraySize, totalSum, possible, timeMs, method, spaceUsed);
        }
    }

    public PartitionStats analyzePartition(int[] nums, String method) {
        long startTime = System.nanoTime();
        boolean possible = false;
        int space = 0;

        switch (method) {
            case "memo":
                possible = canPartitionMemo(nums);
                space = nums.length * (Arrays.stream(nums).sum() / 2 + 1);
                break;
            case "dp":
                possible = canPartitionDP(nums);
                space = Arrays.stream(nums).sum() / 2 + 1;
                break;
            case "2d":
                possible = canPartition2D(nums);
                space = nums.length * (Arrays.stream(nums).sum() / 2 + 1);
                break;
        }

        long timeMs = (System.nanoTime() - startTime) / 1_000_000;
        return new PartitionStats(nums.length, Arrays.stream(nums).sum(), possible, timeMs, method, space);
    }

    // Method 7: Validate partition result
    public boolean validatePartition(int[] nums, PartitionResult result) {
        if (!result.possible) return !canPartitionDP(nums);

        if (result.subset1 == null || result.subset2 == null) return false;

        // Check if all numbers are used exactly once
        Set<Integer> allNumbers = new HashSet<>();
        for (int num : nums) allNumbers.add(num);

        Set<Integer> usedNumbers = new HashSet<>();
        usedNumbers.addAll(result.subset1);
        usedNumbers.addAll(result.subset2);

        if (!allNumbers.equals(usedNumbers)) return false;

        // Check if sums are equal
        int sum1 = result.subset1.stream().mapToInt(Integer::intValue).sum();
        int sum2 = result.subset2.stream().mapToInt(Integer::intValue).sum();

        return sum1 == sum2;
    }

    // Method 8: Count ways to partition
    public int countPartitionWays(int[] nums) {
        int total = Arrays.stream(nums).sum();
        if (total % 2 != 0) return 0;

        int target = total / 2;
        int[] dp = new int[target + 1];
        dp[0] = 1;

        for (int num : nums) {
            for (int j = target; j >= num; j--) {
                dp[j] += dp[j - num];
            }
        }

        return dp[target];
    }

    // Method 9: Partition with minimum subset size
    public PartitionResult partitionMinSize(int[] nums, int minSize) {
        PartitionResult result = getPartitionSubsets(nums);
        if (!result.possible) return result;

        if (result.subset1.size() < minSize || result.subset2.size() < minSize) {
            return new PartitionResult(false, null, null);
        }

        return result;
    }

    // Method 10: All possible partitions
    public List<PartitionResult> getAllPartitions(int[] nums) {
        List<PartitionResult> results = new ArrayList<>();
        generatePartitions(nums, 0, new ArrayList<>(), new ArrayList<>(), results);
        return results;
    }

    private void generatePartitions(int[] nums, int index, List<Integer> subset1,
                                  List<Integer> subset2, List<PartitionResult> results) {
        if (index == nums.length) {
            int sum1 = subset1.stream().mapToInt(Integer::intValue).sum();
            int sum2 = subset2.stream().mapToInt(Integer::intValue).sum();
            if (sum1 == sum2) {
                results.add(new PartitionResult(true,
                    new ArrayList<>(subset1), new ArrayList<>(subset2)));
            }
            return;
        }

        // Add to subset1
        subset1.add(nums[index]);
        generatePartitions(nums, index + 1, subset1, subset2, results);
        subset1.remove(subset1.size() - 1);

        // Add to subset2
        subset2.add(nums[index]);
        generatePartitions(nums, index + 1, subset1, subset2, results);
        subset2.remove(subset2.size() - 1);
    }

    // Method 11: Partition with constraints
    public boolean canPartitionWithConstraints(int[] nums, int maxSubsetSize, int maxSubsetSum) {
        if (!canPartitionDP(nums)) return false;

        PartitionResult result = getPartitionSubsets(nums);
        if (!result.possible) return false;

        return result.subset1.size() <= maxSubsetSize && result.subset2.size() <= maxSubsetSize &&
               result.subset1.stream().mapToInt(Integer::intValue).sum() <= maxSubsetSum &&
               result.subset2.stream().mapToInt(Integer::intValue).sum() <= maxSubsetSum;
    }

    // Method 12: Advanced partition analysis
    public static class PartitionAnalysis {
        boolean possible;
        int minDifference;
        int ways;
        double balanceRatio;
        List<Integer> largestSubset;

        public PartitionAnalysis(boolean possible, int minDifference, int ways,
                               double balanceRatio, List<Integer> largestSubset) {
            this.possible = possible;
            this.minDifference = minDifference;
            this.ways = ways;
            this.balanceRatio = balanceRatio;
            this.largestSubset = largestSubset;
        }

        @Override
        public String toString() {
            return String.format("Possible=%s, MinDiff=%d, Ways=%d, Balance=%.2f, Largest=%s",
                               possible, minDifference, ways, balanceRatio, largestSubset);
        }
    }

    public PartitionAnalysis analyzePartitionAdvanced(int[] nums) {
        boolean possible = canPartitionDP(nums);
        int minDiff = minPartitionDifference(nums);
        int ways = countPartitionWays(nums);

        PartitionResult result = getPartitionSubsets(nums);
        double balanceRatio = 0.0;
        List<Integer> largestSubset = new ArrayList<>();

        if (result.possible) {
            int sum1 = result.subset1.stream().mapToInt(Integer::intValue).sum();
            int sum2 = result.subset2.stream().mapToInt(Integer::intValue).sum();
            int total = sum1 + sum2;
            balanceRatio = (double) Math.min(sum1, sum2) / Math.max(sum1, sum2);

            largestSubset = sum1 >= sum2 ? result.subset1 : result.subset2;
        }

        return new PartitionAnalysis(possible, minDiff, ways, balanceRatio, largestSubset);
    }

    // Test cases
    public static void main(String[] args) {
        PartitionEqualSubsetSum7 solution = new PartitionEqualSubsetSum7();

        // Test Case 1: Basic partition
        System.out.println("=== Partition Equal Subset Sum ===");
        int[] nums1 = {1, 5, 11, 5};
        System.out.println("Array: " + Arrays.toString(nums1));

        System.out.println("Memoization: " + solution.canPartitionMemo(nums1));
        System.out.println("DP: " + solution.canPartitionDP(nums1));
        System.out.println("2D DP: " + solution.canPartition2D(nums1));

        // Test Case 2: With subsets
        PartitionResult result = solution.getPartitionSubsets(nums1);
        System.out.println("With subsets: " + result);

        // Test Case 3: Minimum difference
        System.out.println("Min difference: " + solution.minPartitionDifference(nums1));

        // Test Case 4: Performance analysis
        PartitionStats stats = solution.analyzePartition(nums1, "dp");
        System.out.println("Analysis: " + stats);

        // Test Case 5: Validation
        boolean valid = solution.validatePartition(nums1, result);
        System.out.println("Result valid: " + valid);

        // Test Case 6: Count ways
        System.out.println("Number of ways: " + solution.countPartitionWays(nums1));

        // Test Case 7: Minimum size constraint
        PartitionResult minSize = solution.partitionMinSize(nums1, 2);
        System.out.println("Min size 2: " + minSize);

        // Test Case 8: All partitions
        List<PartitionResult> allPartitions = solution.getAllPartitions(new int[]{1, 2, 3});
        System.out.println("All partitions for [1,2,3]: " + allPartitions.size() + " ways");

        // Test Case 9: With constraints
        System.out.println("Max size 2, max sum 8: " + solution.canPartitionWithConstraints(nums1, 2, 8));

        // Test Case 10: Advanced analysis
        PartitionAnalysis analysis = solution.analyzePartitionAdvanced(nums1);
        System.out.println("Advanced analysis: " + analysis);

        // Test Case 11: Edge cases
        System.out.println("\nEdge cases:");
        System.out.println("Empty array: " + solution.canPartitionDP(new int[]{}));
        System.out.println("Single element: " + solution.canPartitionDP(new int[]{5}));
        System.out.println("Two equal: " + solution.canPartitionDP(new int[]{3, 3}));
        System.out.println("Two different: " + solution.canPartitionDP(new int[]{1, 2}));
        System.out.println("Odd sum: " + solution.canPartitionDP(new int[]{1, 2, 3}));

        // Test Case 12: Compare methods
        System.out.println("\nMethod comparison:");
        int[] testArray = {1, 2, 3, 4, 5, 6, 7};
        for (String method : Arrays.asList("memo", "dp", "2d")) {
            PartitionStats s = solution.analyzePartition(testArray, method);
            System.out.println(method + ": " + s.possible + " possible, " + s.timeMs + "ms");
        }
    }
}