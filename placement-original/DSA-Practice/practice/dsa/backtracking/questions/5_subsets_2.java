package backtracking.questions;

/*
 * 5. SUBSETS II (LeetCode 90)
 *
 * Problem Statement:
 * Given an integer array nums that may contain duplicates, return all possible subsets (the power set).
 * The solution set must not contain duplicate subsets. Return the solution in any order.
 *
 * Conceptual Understanding:
 * - Generate all possible subsets (power set)
 * - Handle duplicates in input array
 * - Each element can be included or excluded
 * - Sort array to group duplicates together
 * - Skip duplicate elements in same level of recursion
 * - Use backtracking to explore all combinations
 *
 * Time Complexity: O(2^n) - each element has 2 choices
 * Space Complexity: O(2^n) for result storage
 */

import java.util.*;

class SubsetsII5 {

    // Method 1: Basic backtracking with duplicate handling
    public List<List<Integer>> subsetsWithDup(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        if (nums == null) {
            return result;
        }

        Arrays.sort(nums); // Sort to handle duplicates
        backtrack(result, new ArrayList<>(), nums, 0);
        return result;
    }

    private void backtrack(List<List<Integer>> result, List<Integer> current,
                          int[] nums, int start) {
        // Add current subset to result
        result.add(new ArrayList<>(current));

        // Try adding each remaining element
        for (int i = start; i < nums.length; i++) {
            // Skip duplicates: if current element same as previous and previous not used
            if (i > start && nums[i] == nums[i - 1]) continue;

            // Include current element
            current.add(nums[i]);
            backtrack(result, current, nums, i + 1);
            current.remove(current.size() - 1);
        }
    }

    // Method 2: Iterative approach
    public List<List<Integer>> subsetsWithDupIterative(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        if (nums == null) {
            return result;
        }

        Arrays.sort(nums);
        result.add(new ArrayList<>()); // Empty subset

        int prevSize = 0;
        for (int i = 0; i < nums.length; i++) {
            int start = 0;

            // If duplicate, start from previous duplicate position
            if (i > 0 && nums[i] == nums[i - 1]) {
                start = prevSize;
            }

            prevSize = result.size();

            // Add current element to existing subsets starting from start
            for (int j = start; j < prevSize; j++) {
                List<Integer> newSubset = new ArrayList<>(result.get(j));
                newSubset.add(nums[i]);
                result.add(newSubset);
            }
        }

        return result;
    }

    // Method 3: Using bit manipulation
    public List<List<Integer>> subsetsWithDupBitManipulation(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        if (nums == null) {
            return result;
        }

        Arrays.sort(nums);
        Set<String> seen = new HashSet<>();

        int n = nums.length;
        int totalSubsets = 1 << n; // 2^n

        for (int mask = 0; mask < totalSubsets; mask++) {
            List<Integer> subset = new ArrayList<>();

            for (int i = 0; i < n; i++) {
                if ((mask & (1 << i)) != 0) {
                    subset.add(nums[i]);
                }
            }

            // Use string representation to check duplicates
            String subsetStr = subset.toString();
            if (!seen.contains(subsetStr)) {
                seen.add(subsetStr);
                result.add(subset);
            }
        }

        return result;
    }

    // Method 4: Recursive approach with different base case
    public List<List<Integer>> subsetsWithDupRecursive(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        if (nums == null) {
            return result;
        }

        Arrays.sort(nums);
        return generateSubsets(nums, 0);
    }

    private List<List<Integer>> generateSubsets(int[] nums, int start) {
        List<List<Integer>> result = new ArrayList<>();

        if (start == nums.length) {
            result.add(new ArrayList<>());
            return result;
        }

        // Get subsets without current element
        List<List<Integer>> subsetsWithout = generateSubsets(nums, start + 1);

        // Get subsets with current element
        List<List<Integer>> subsetsWith = new ArrayList<>();
        for (List<Integer> subset : subsetsWithout) {
            List<Integer> newSubset = new ArrayList<>(subset);
            newSubset.add(nums[start]);
            subsetsWith.add(newSubset);
        }

        // Combine results, handling duplicates
        result.addAll(subsetsWithout);

        // Only add subsets with current element if not duplicate
        if (start == 0 || nums[start] != nums[start - 1]) {
            result.addAll(subsetsWith);
        } else {
            // For duplicates, add only if previous element was included
            // This is handled by the backtracking approach
        }

        return result;
    }

    // Method 5: Generate subsets of specific size
    public List<List<Integer>> subsetsWithDupSize(int[] nums, int size) {
        List<List<Integer>> result = new ArrayList<>();
        if (nums == null || size < 0 || size > nums.length) {
            return result;
        }

        Arrays.sort(nums);
        backtrackSize(result, new ArrayList<>(), nums, 0, size);
        return result;
    }

    private void backtrackSize(List<List<Integer>> result, List<Integer> current,
                              int[] nums, int start, int size) {
        if (current.size() == size) {
            result.add(new ArrayList<>(current));
            return;
        }

        for (int i = start; i < nums.length; i++) {
            if (i > start && nums[i] == nums[i - 1]) continue;

            current.add(nums[i]);
            backtrackSize(result, current, nums, i + 1, size);
            current.remove(current.size() - 1);
        }
    }

    // Method 6: Count subsets without generating
    public int countSubsets(int[] nums) {
        if (nums == null) return 0;

        Map<Integer, Integer> frequency = new HashMap<>();
        for (int num : nums) {
            frequency.put(num, frequency.getOrDefault(num, 0) + 1);
        }

        int result = 1; // Empty subset
        for (int count : frequency.values()) {
            result *= (count + 1); // Each number can be used 0 to count times
        }

        return result;
    }

    // Method 7: Get all subset sums
    public Set<Integer> getAllSubsetSums(int[] nums) {
        Set<Integer> sums = new HashSet<>();
        backtrackSums(sums, nums, 0, 0);
        return sums;
    }

    private void backtrackSums(Set<Integer> sums, int[] nums, int start, int currentSum) {
        if (start == nums.length) {
            sums.add(currentSum);
            return;
        }

        // Exclude current element
        backtrackSums(sums, nums, start + 1, currentSum);

        // Include current element
        backtrackSums(sums, nums, start + 1, currentSum + nums[start]);
    }

    // Method 8: Find subsets with target sum
    public List<List<Integer>> subsetsWithDupTargetSum(int[] nums, int target) {
        List<List<Integer>> result = new ArrayList<>();
        Arrays.sort(nums);
        backtrackTarget(result, new ArrayList<>(), nums, target, 0);
        return result;
    }

    private void backtrackTarget(List<List<Integer>> result, List<Integer> current,
                                int[] nums, int target, int start) {
        if (target == 0) {
            result.add(new ArrayList<>(current));
            return;
        }

        for (int i = start; i < nums.length; i++) {
            if (i > start && nums[i] == nums[i - 1]) continue;
            if (nums[i] > target) break;

            current.add(nums[i]);
            backtrackTarget(result, current, nums, target - nums[i], i + 1);
            current.remove(current.size() - 1);
        }
    }

    // Method 9: Performance analysis
    public static class PerformanceStats {
        int[] input;
        int subsetsGenerated;
        long timeMs;
        int duplicatesRemoved;

        public PerformanceStats(int[] input, int subsetsGenerated, long timeMs, int duplicatesRemoved) {
            this.input = input.clone();
            this.subsetsGenerated = subsetsGenerated;
            this.timeMs = timeMs;
            this.duplicatesRemoved = duplicatesRemoved;
        }

        @Override
        public String toString() {
            return String.format("Input size: %d, Subsets: %d, Time: %dms, Duplicates removed: %d",
                               input.length, subsetsGenerated, timeMs, duplicatesRemoved);
        }
    }

    public PerformanceStats analyzePerformance(int[] nums) {
        long startTime = System.nanoTime();
        List<List<Integer>> result = subsetsWithDup(nums.clone());
        long timeMs = (System.nanoTime() - startTime) / 1_000_000;

        int totalPossible = 1 << nums.length;
        int duplicatesRemoved = totalPossible - result.size();

        return new PerformanceStats(nums, result.size(), timeMs, duplicatesRemoved);
    }

    // Method 10: Validate subsets
    public boolean validateSubsets(List<List<Integer>> subsets, int[] original) {
        if (subsets == null || original == null) return false;

        Set<String> uniqueSubsets = new HashSet<>();
        Set<Integer> originalSet = new HashSet<>();
        for (int num : original) originalSet.add(num);

        for (List<Integer> subset : subsets) {
            // Check elements are from original
            for (int num : subset) {
                if (!originalSet.contains(num)) return false;
            }

            // Check for duplicates
            Collections.sort(subset);
            String subsetStr = subset.toString();
            if (uniqueSubsets.contains(subsetStr)) return false;
            uniqueSubsets.add(subsetStr);
        }

        // Check power set size (should be 2^n with duplicates handled)
        Map<Integer, Integer> freq = new HashMap<>();
        for (int num : original) freq.put(num, freq.getOrDefault(num, 0) + 1);

        int expectedSize = 1;
        for (int count : freq.values()) {
            expectedSize *= (count + 1);
        }

        return subsets.size() == expectedSize;
    }

    // Method 11: Get subset statistics
    public static class SubsetStats {
        int totalSubsets;
        int emptySubsets;
        int maxSubsetSize;
        double avgSubsetSize;
        Map<Integer, Integer> sizeDistribution;

        public SubsetStats(int totalSubsets, int emptySubsets, int maxSubsetSize,
                          double avgSubsetSize, Map<Integer, Integer> sizeDistribution) {
            this.totalSubsets = totalSubsets;
            this.emptySubsets = emptySubsets;
            this.maxSubsetSize = maxSubsetSize;
            this.avgSubsetSize = avgSubsetSize;
            this.sizeDistribution = sizeDistribution;
        }

        @Override
        public String toString() {
            return String.format("Total: %d, Empty: %d, Max Size: %d, Avg Size: %.2f, Distribution: %s",
                               totalSubsets, emptySubsets, maxSubsetSize, avgSubsetSize, sizeDistribution);
        }
    }

    public SubsetStats getSubsetStats(int[] nums) {
        List<List<Integer>> subsets = subsetsWithDup(nums.clone());

        int emptySubsets = 0;
        int maxSubsetSize = 0;
        int totalSize = 0;
        Map<Integer, Integer> sizeDistribution = new HashMap<>();

        for (List<Integer> subset : subsets) {
            int size = subset.size();
            if (size == 0) emptySubsets++;
            maxSubsetSize = Math.max(maxSubsetSize, size);
            totalSize += size;
            sizeDistribution.put(size, sizeDistribution.getOrDefault(size, 0) + 1);
        }

        double avgSubsetSize = subsets.isEmpty() ? 0 : (double) totalSize / subsets.size();

        return new SubsetStats(subsets.size(), emptySubsets, maxSubsetSize, avgSubsetSize, sizeDistribution);
    }

    // Method 12: Generate subsets with constraints
    public List<List<Integer>> subsetsWithDupConstraints(int[] nums, int minSize, int maxSize) {
        List<List<Integer>> result = new ArrayList<>();
        if (nums == null) {
            return result;
        }

        Arrays.sort(nums);
        backtrackConstraints(result, new ArrayList<>(), nums, 0, minSize, maxSize);
        return result;
    }

    private void backtrackConstraints(List<List<Integer>> result, List<Integer> current,
                                    int[] nums, int start, int minSize, int maxSize) {
        if (current.size() >= minSize && current.size() <= maxSize) {
            result.add(new ArrayList<>(current));
        }

        if (current.size() >= maxSize) return;

        for (int i = start; i < nums.length; i++) {
            if (i > start && nums[i] == nums[i - 1]) continue;

            current.add(nums[i]);
            backtrackConstraints(result, current, nums, i + 1, minSize, maxSize);
            current.remove(current.size() - 1);
        }
    }

    // Test cases
    public static void main(String[] args) {
        SubsetsII5 solution = new SubsetsII5();

        // Test Case 1: Basic subsets with duplicates
        System.out.println("=== Basic Subsets II ===");
        int[] nums1 = {1, 2, 2};
        List<List<Integer>> result1 = solution.subsetsWithDup(nums1);
        System.out.println("Input: " + Arrays.toString(nums1));
        System.out.println("Subsets: " + result1);
        System.out.println("Count: " + result1.size());
        System.out.println("Valid: " + solution.validateSubsets(result1, nums1));

        // Test Case 2: Iterative approach
        List<List<Integer>> result2 = solution.subsetsWithDupIterative(nums1);
        System.out.println("Iterative approach: " + result2.size() + " subsets");

        // Test Case 3: Bit manipulation approach
        List<List<Integer>> result3 = solution.subsetsWithDupBitManipulation(nums1);
        System.out.println("Bit manipulation: " + result3.size() + " subsets");

        // Test Case 4: Recursive approach
        List<List<Integer>> result4 = solution.subsetsWithDupRecursive(nums1);
        System.out.println("Recursive approach: " + result4.size() + " subsets");

        // Test Case 5: Specific size subsets
        List<List<Integer>> result5 = solution.subsetsWithDupSize(nums1, 2);
        System.out.println("Size 2 subsets: " + result5);

        // Test Case 6: Count subsets
        int count = solution.countSubsets(nums1);
        System.out.println("Total subsets count: " + count);

        // Test Case 7: All subset sums
        Set<Integer> sums = solution.getAllSubsetSums(nums1);
        System.out.println("All subset sums: " + sums);

        // Test Case 8: Target sum subsets
        List<List<Integer>> targetSubsets = solution.subsetsWithDupTargetSum(nums1, 3);
        System.out.println("Subsets with sum 3: " + targetSubsets);

        // Test Case 9: Performance analysis
        PerformanceStats stats = solution.analyzePerformance(nums1);
        System.out.println("Performance: " + stats);

        // Test Case 10: Statistics
        SubsetStats subsetStats = solution.getSubsetStats(nums1);
        System.out.println("Statistics: " + subsetStats);

        // Test Case 11: Edge cases
        System.out.println("\nEdge cases:");
        System.out.println("Empty array: " + solution.subsetsWithDup(new int[0]));
        System.out.println("Single element: " + solution.subsetsWithDup(new int[]{1}));
        System.out.println("All duplicates: " + solution.subsetsWithDup(new int[]{2, 2, 2, 2}));

        // Test Case 12: With constraints
        int[] nums12 = {1, 2, 2, 3};
        List<List<Integer>> constrained = solution.subsetsWithDupConstraints(nums12, 1, 3);
        System.out.println("Size 1-3 subsets: " + constrained.size());
    }
}