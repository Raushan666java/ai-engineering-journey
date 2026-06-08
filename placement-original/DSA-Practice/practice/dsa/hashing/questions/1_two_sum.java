package hashing.questions;

/*
 * 1. TWO SUM (LeetCode 1)
 *
 * Problem Statement:
 * Given an array of integers nums and an integer target, return indices of the two numbers
 * such that they add up to target. You may assume that each input would have exactly one solution,
 * and you may not use the same element twice.
 *
 * Conceptual Understanding:
 * - Use hash map to store complement values
 * - For each number, check if (target - num) exists in map
 * - Store index to return indices instead of values
 * - Handle edge cases: duplicate numbers, negative numbers
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

import java.util.*;

public class TwoSum1 {

    // Method 1: Hash Map approach
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];

            // Check if complement exists in map
            if (map.containsKey(complement)) {
                return new int[]{map.get(complement), i};
            }

            // Store current number and its index
            map.put(nums[i], i);
        }

        // Should not reach here as per problem statement
        throw new IllegalArgumentException("No two sum solution");
    }

    // Method 2: Alternative with same logic but different iteration
    public int[] twoSumAlternative(int[] nums, int target) {
        Map<Integer, Integer> numToIndex = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            int needed = target - nums[i];

            if (numToIndex.containsKey(needed)) {
                return new int[]{numToIndex.get(needed), i};
            }

            numToIndex.put(nums[i], i);
        }

        return new int[]{-1, -1}; // No solution found
    }

    // Method 3: Brute force (for comparison - O(n²))
    public int[] twoSumBruteForce(int[] nums, int target) {
        for (int i = 0; i < nums.length - 1; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    return new int[]{i, j};
                }
            }
        }
        return new int[]{-1, -1};
    }

    // Test cases
    public static void main(String[] args) {
        TwoSum1 solution = new TwoSum1();

        // Test Case 1: Basic case
        int[] nums1 = {2, 7, 11, 15};
        int target1 = 9;
        int[] result1 = solution.twoSum(nums1, target1);
        System.out.println("Test 1: [" + result1[0] + ", " + result1[1] + "]"); // Expected: [0, 1]

        // Test Case 2: Negative numbers
        int[] nums2 = {-1, -2, -3, -4, -5};
        int target2 = -8;
        int[] result2 = solution.twoSum(nums2, target2);
        System.out.println("Test 2: [" + result2[0] + ", " + result2[1] + "]"); // Expected: [2, 4]

        // Test Case 3: Duplicates
        int[] nums3 = {3, 3};
        int target3 = 6;
        int[] result3 = solution.twoSum(nums3, target3);
        System.out.println("Test 3: [" + result3[0] + ", " + result3[1] + "]"); // Expected: [0, 1]
    }
}