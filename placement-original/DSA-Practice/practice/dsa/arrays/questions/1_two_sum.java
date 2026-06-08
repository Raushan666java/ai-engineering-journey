package arrays.questions;

/*
 * 1. TWO SUM (LeetCode 1)
 *
 * Problem Statement:
 * Given an array of integers nums and an integer target, return indices of the two numbers
 * such that they add up to target. You may assume that each input would have exactly one solution,
 * and you may not use the same element twice.
 *
 * Conceptual Understanding:
 * - Find two numbers in array that sum to target
 * - Return their indices (not values)
 * - Exactly one solution exists
 * - Cannot use same element twice
 * - Time: O(n), Space: O(n) for hash map
 * - Alternative: O(n²) brute force, O(n log n) with sorting
 * - HashMap gives optimal solution
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

class TwoSum1 {

    // Method 1: HashMap approach (most efficient)
    public int[] twoSum(int[] nums, int target) {
        java.util.Map<Integer, Integer> map = new java.util.HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];

            if (map.containsKey(complement)) {
                return new int[]{map.get(complement), i};
            }

            map.put(nums[i], i);
        }

        throw new IllegalArgumentException("No two sum solution");
    }

    // Method 2: Brute force (O(n²))
    public int[] twoSumBruteForce(int[] nums, int target) {
        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    return new int[]{i, j};
                }
            }
        }

        throw new IllegalArgumentException("No two sum solution");
    }

    // Method 3: Sort and two pointers (O(n log n))
    public int[] twoSumTwoPointers(int[] nums, int target) {
        // Create array of pairs (value, index)
        int[][] pairs = new int[nums.length][2];
        for (int i = 0; i < nums.length; i++) {
            pairs[i] = new int[]{nums[i], i};
        }

        // Sort by value
        java.util.Arrays.sort(pairs, (a, b) -> Integer.compare(a[0], b[0]));

        int left = 0, right = nums.length - 1;

        while (left < right) {
            int sum = pairs[left][0] + pairs[right][0];

            if (sum == target) {
                return new int[]{pairs[left][1], pairs[right][1]};
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }

        throw new IllegalArgumentException("No two sum solution");
    }

    // Method 4: Using HashSet (variation)
    public int[] twoSumHashSet(int[] nums, int target) {
        java.util.Set<Integer> seen = new java.util.HashSet<>();

        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];

            if (seen.contains(complement)) {
                // Find the index of complement
                for (int j = 0; j < i; j++) {
                    if (nums[j] == complement) {
                        return new int[]{j, i};
                    }
                }
            }

            seen.add(nums[i]);
        }

        throw new IllegalArgumentException("No two sum solution");
    }

    // Method 5: For multiple solutions (return all pairs)
    public java.util.List<int[]> twoSumAllPairs(int[] nums, int target) {
        java.util.List<int[]> result = new java.util.ArrayList<>();
        java.util.Map<Integer, java.util.List<Integer>> map = new java.util.HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            map.computeIfAbsent(nums[i], k -> new java.util.ArrayList<>()).add(i);
        }

        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            java.util.List<Integer> complementIndices = map.get(complement);

            if (complementIndices != null) {
                for (int j : complementIndices) {
                    if (i < j) { // Avoid duplicates and same index
                        result.add(new int[]{i, j});
                    }
                }
            }
        }

        return result;
    }

    // Method 6: Optimized for sorted array
    public int[] twoSumSorted(int[] nums, int target) {
        // Assume nums is sorted
        int left = 0, right = nums.length - 1;

        while (left < right) {
            int sum = nums[left] + nums[right];

            if (sum == target) {
                return new int[]{left, right};
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }

        throw new IllegalArgumentException("No two sum solution");
    }

    // Method 7: Using streams (educational)
    public int[] twoSumStreams(int[] nums, int target) {
        java.util.Map<Integer, Integer> map = new java.util.HashMap<>();

        return java.util.stream.IntStream.range(0, nums.length)
                .filter(i -> {
                    int complement = target - nums[i];
                    if (map.containsKey(complement)) {
                        return true;
                    }
                    map.put(nums[i], i);
                    return false;
                })
                .mapToObj(i -> new int[]{map.get(target - nums[i]), i})
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("No two sum solution"));
    }

    // Method 8: Handle duplicates properly
    public int[] twoSumWithDuplicates(int[] nums, int target) {
        java.util.Map<Integer, Integer> map = new java.util.HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];

            if (map.containsKey(complement)) {
                return new int[]{map.get(complement), i};
            }

            // Only put if not already present (for duplicates)
            map.putIfAbsent(nums[i], i);
        }

        throw new IllegalArgumentException("No two sum solution");
    }

    // Method 9: Two Sum with multiple targets
    public java.util.Map<Integer, int[]> twoSumMultipleTargets(int[] nums, int[] targets) {
        java.util.Map<Integer, int[]> results = new java.util.HashMap<>();
        java.util.Map<Integer, Integer> map = new java.util.HashMap<>();

        for (int target : targets) {
            // Build map for this target
            map.clear();
            boolean found = false;

            for (int i = 0; i < nums.length && !found; i++) {
                int complement = target - nums[i];

                if (map.containsKey(complement)) {
                    results.put(target, new int[]{map.get(complement), i});
                    found = true;
                }

                map.put(nums[i], i);
            }

            if (!found) {
                results.put(target, null);
            }
        }

        return results;
    }

    // Method 10: Two Sum closest to target
    public int[] twoSumClosest(int[] nums, int target) {
        java.util.Arrays.sort(nums);
        int left = 0, right = nums.length - 1;
        int closestSum = nums[0] + nums[1];
        int[] result = {0, 1};

        while (left < right) {
            int currentSum = nums[left] + nums[right];

            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
                result[0] = left;
                result[1] = right;
            }

            if (currentSum < target) {
                left++;
            } else {
                right--;
            }
        }

        return result;
    }

    // Method 11: Two Sum with indices (original array)
    public int[] twoSumOriginalIndices(int[] nums, int target) {
        // Create array of pairs (value, original index)
        int[][] pairs = new int[nums.length][2];
        for (int i = 0; i < nums.length; i++) {
            pairs[i] = new int[]{nums[i], i};
        }

        java.util.Arrays.sort(pairs, (a, b) -> Integer.compare(a[0], b[0]));

        int left = 0, right = nums.length - 1;

        while (left < right) {
            int sum = pairs[left][0] + pairs[right][0];

            if (sum == target) {
                return new int[]{pairs[left][1], pairs[right][1]};
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }

        throw new IllegalArgumentException("No two sum solution");
    }

    // Method 12: Two Sum with constraints
    public int[] twoSumConstraints(int[] nums, int target, int maxIndex) {
        java.util.Map<Integer, Integer> map = new java.util.HashMap<>();

        for (int i = 0; i < Math.min(nums.length, maxIndex + 1); i++) {
            int complement = target - nums[i];

            if (map.containsKey(complement)) {
                return new int[]{map.get(complement), i};
            }

            map.put(nums[i], i);
        }

        throw new IllegalArgumentException("No two sum solution within constraints");
    }

    // Test cases
    public static void main(String[] args) {
        TwoSum1 solution = new TwoSum1();

        // Test Case 1: Basic test
        int[] nums1 = {2, 7, 11, 15};
        int target1 = 9;
        int[] result1 = solution.twoSum(nums1, target1);
        System.out.println("Indices: [" + result1[0] + ", " + result1[1] + "]"); // Expected: [0, 1]

        // Test Case 2: Different positions
        int[] nums2 = {3, 2, 4};
        int target2 = 6;
        int[] result2 = solution.twoSum(nums2, target2);
        System.out.println("Indices: [" + result2[0] + ", " + result2[1] + "]"); // Expected: [1, 2]

        // Test Case 3: Negative numbers
        int[] nums3 = {-1, -2, -3, -4, -5};
        int target3 = -8;
        int[] result3 = solution.twoSum(nums3, target3);
        System.out.println("Indices: [" + result3[0] + ", " + result3[1] + "]"); // Expected: [2, 4]

        // Test Case 4: Compare different approaches
        int[] testNums = {1, 3, 5, 7, 9};
        int testTarget = 12;

        long startTime, endTime;

        // HashMap approach
        startTime = System.nanoTime();
        for (int i = 0; i < 10000; i++) {
            solution.twoSum(testNums, testTarget);
        }
        endTime = System.nanoTime();
        System.out.println("\nHashMap (10000 runs): " + (endTime - startTime) / 1000000 + " ms");

        // Brute force approach
        startTime = System.nanoTime();
        for (int i = 0; i < 10000; i++) {
            solution.twoSumBruteForce(testNums, testTarget);
        }
        endTime = System.nanoTime();
        System.out.println("Brute force (10000 runs): " + (endTime - startTime) / 1000000 + " ms");

        // Test Case 5: Edge cases
        System.out.println("\nEdge cases:");

        // Minimum size
        int[] minArray = {1, 2};
        int[] minResult = solution.twoSum(minArray, 3);
        System.out.println("Min array: [" + minResult[0] + ", " + minResult[1] + "]");

        // Large numbers
        int[] largeArray = {1000000, 2000000, 3000000};
        int[] largeResult = solution.twoSum(largeArray, 3000000);
        System.out.println("Large numbers: [" + largeResult[0] + ", " + largeResult[1] + "]");

        // Test Case 6: Multiple pairs (all pairs method)
        int[] multiArray = {1, 2, 3, 4, 5};
        java.util.List<int[]> allPairs = solution.twoSumAllPairs(multiArray, 7);
        System.out.println("All pairs for sum=7:");
        for (int[] pair : allPairs) {
            System.out.println("[" + pair[0] + ", " + pair[1] + "]");
        }

        // Test Case 7: Closest sum
        int[] closestArray = {1, 2, 3, 4, 5};
        int[] closestResult = solution.twoSumClosest(closestArray, 8);
        System.out.println("Closest to 8: [" + closestResult[0] + ", " + closestResult[1] + "] (sum=" +
                          (closestArray[closestResult[0]] + closestArray[closestResult[1]]) + ")");
    }
}