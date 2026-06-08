package hashing.questions;

/*
 * 2. CONTAINS DUPLICATE (LeetCode 217)
 *
 * Problem Statement:
 * Given an integer array nums, return true if any value appears at least twice in the array,
 * and return false if every element is distinct.
 *
 * Conceptual Understanding:
 * - Use hash set to track seen elements
 * - For each element, check if already in set
 * - If yes, return true; if no, add to set
 * - Return false if no duplicates found
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

import java.util.*;

class ContainsDuplicate2 {

    // Method 1: Hash Set approach
    public boolean containsDuplicate(int[] nums) {
        Set<Integer> seen = new HashSet<>();

        for (int num : nums) {
            if (seen.contains(num)) {
                return true;
            }
            seen.add(num);
        }

        return false;
    }

    // Method 2: Alternative using HashMap (less efficient)
    public boolean containsDuplicateHashMap(int[] nums) {
        Map<Integer, Integer> frequency = new HashMap<>();

        for (int num : nums) {
            frequency.put(num, frequency.getOrDefault(num, 0) + 1);
            if (frequency.get(num) > 1) {
                return true;
            }
        }

        return false;
    }

    // Method 3: Sorting approach (O(n log n))
    public boolean containsDuplicateSorting(int[] nums) {
        Arrays.sort(nums);

        for (int i = 1; i < nums.length; i++) {
            if (nums[i] == nums[i - 1]) {
                return true;
            }
        }

        return false;
    }

    // Method 4: Using stream (Java 8+)
    public boolean containsDuplicateStream(int[] nums) {
        return Arrays.stream(nums).distinct().count() != nums.length;
    }

    // Test cases
    public static void main(String[] args) {
        ContainsDuplicate2 solution = new ContainsDuplicate2();

        // Test Case 1: Has duplicates
        int[] nums1 = {1, 2, 3, 1};
        System.out.println("Test 1: " + solution.containsDuplicate(nums1)); // Expected: true

        // Test Case 2: No duplicates
        int[] nums2 = {1, 2, 3, 4};
        System.out.println("Test 2: " + solution.containsDuplicate(nums2)); // Expected: false

        // Test Case 3: Empty array
        int[] nums3 = {};
        System.out.println("Test 3: " + solution.containsDuplicate(nums3)); // Expected: false

        // Test Case 4: Single element
        int[] nums4 = {1};
        System.out.println("Test 4: " + solution.containsDuplicate(nums4)); // Expected: false

        // Test Case 5: All duplicates
        int[] nums5 = {2, 2, 2, 2};
        System.out.println("Test 5: " + solution.containsDuplicate(nums5)); // Expected: true
    }
}