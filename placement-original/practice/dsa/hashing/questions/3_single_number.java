package hashing.questions;

/*
 * 3. SINGLE NUMBER (LeetCode 136)
 *
 * Problem Statement:
 * Given a non-empty array of integers nums, every element appears twice except for one.
 * Find that single one. You must implement a solution with a linear runtime complexity
 * and use only constant extra space.
 *
 * Conceptual Understanding:
 * - XOR operation: a ^ a = 0, a ^ 0 = a
 * - XOR is commutative and associative
 * - All duplicate numbers cancel out, leaving the single number
 * - Hash set approach also works but uses O(n) space
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1) for XOR, O(n) for hash set
 */

import java.util.*;

class SingleNumber3 {

    // Method 1: XOR approach (optimal - O(1) space)
    public int singleNumber(int[] nums) {
        int result = 0;

        // XOR all elements
        for (int num : nums) {
            result ^= num;
        }

        return result;
    }

    // Method 2: Hash Set approach (O(n) space)
    public int singleNumberHashSet(int[] nums) {
        Set<Integer> seen = new HashSet<>();

        for (int num : nums) {
            if (seen.contains(num)) {
                seen.remove(num);
            } else {
                seen.add(num);
            }
        }

        // Only one element should remain
        return seen.iterator().next();
    }

    // Method 3: Hash Map approach
    public int singleNumberHashMap(int[] nums) {
        Map<Integer, Integer> frequency = new HashMap<>();

        for (int num : nums) {
            frequency.put(num, frequency.getOrDefault(num, 0) + 1);
        }

        // Find the number with frequency 1
        for (Map.Entry<Integer, Integer> entry : frequency.entrySet()) {
            if (entry.getValue() == 1) {
                return entry.getKey();
            }
        }

        return -1; // Should not reach here
    }

    // Method 4: Mathematical approach
    public int singleNumberMath(int[] nums) {
        Set<Integer> unique = new HashSet<>();

        for (int num : nums) {
            unique.add(num);
        }

        // Sum of unique elements * 2 - sum of all elements
        int sumUnique = unique.stream().mapToInt(Integer::intValue).sum();
        int sumAll = Arrays.stream(nums).sum();

        return 2 * sumUnique - sumAll;
    }

    // Test cases
    public static void main(String[] args) {
        SingleNumber3 solution = new SingleNumber3();

        // Test Case 1: Basic case
        int[] nums1 = {2, 2, 1};
        System.out.println("Test 1: " + solution.singleNumber(nums1)); // Expected: 1

        // Test Case 2: Multiple pairs
        int[] nums2 = {4, 1, 2, 1, 2};
        System.out.println("Test 2: " + solution.singleNumber(nums2)); // Expected: 4

        // Test Case 3: Single element
        int[] nums3 = {1};
        System.out.println("Test 3: " + solution.singleNumber(nums3)); // Expected: 1

        // Test Case 4: Negative numbers
        int[] nums4 = {-1, -1, -2};
        System.out.println("Test 4: " + solution.singleNumber(nums4)); // Expected: -2
    }
}