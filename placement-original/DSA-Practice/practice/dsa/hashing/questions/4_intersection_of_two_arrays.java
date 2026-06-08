package hashing.questions;

/*
 * 4. INTERSECTION OF TWO ARRAYS (LeetCode 349)
 *
 * Problem Statement:
 * Given two integer arrays nums1 and nums2, return an array of their intersection.
 * Each element in the result must be unique and you may return the result in any order.
 *
 * Conceptual Understanding:
 * - Find common elements between two arrays
 * - Result should contain unique elements only
 * - Use hash set to track elements from first array
 * - Check second array against the set
 *
 * Time Complexity: O(m + n)
 * Space Complexity: O(min(m, n))
 */

import java.util.*;

class IntersectionOfTwoArrays4 {

    // Method 1: Hash Set approach
    public int[] intersection(int[] nums1, int[] nums2) {
        Set<Integer> set1 = new HashSet<>();
        Set<Integer> resultSet = new HashSet<>();

        // Add all elements from nums1 to set
        for (int num : nums1) {
            set1.add(num);
        }

        // Check nums2 against set1
        for (int num : nums2) {
            if (set1.contains(num)) {
                resultSet.add(num);
            }
        }

        // Convert set to array
        int[] result = new int[resultSet.size()];
        int index = 0;
        for (int num : resultSet) {
            result[index++] = num;
        }

        return result;
    }

    // Method 2: Optimized - use smaller array for set
    public int[] intersectionOptimized(int[] nums1, int[] nums2) {
        // Use smaller array for the set
        if (nums1.length > nums2.length) {
            return intersection(nums2, nums1);
        }

        Set<Integer> set = new HashSet<>();
        Set<Integer> resultSet = new HashSet<>();

        // Add smaller array to set
        for (int num : nums1) {
            set.add(num);
        }

        // Check larger array
        for (int num : nums2) {
            if (set.contains(num)) {
                resultSet.add(num);
            }
        }

        return resultSet.stream().mapToInt(Integer::intValue).toArray();
    }

    // Method 3: Sorting and two pointers
    public int[] intersectionSorting(int[] nums1, int[] nums2) {
        Arrays.sort(nums1);
        Arrays.sort(nums2);

        Set<Integer> resultSet = new HashSet<>();
        int i = 0, j = 0;

        while (i < nums1.length && j < nums2.length) {
            if (nums1[i] == nums2[j]) {
                resultSet.add(nums1[i]);
                i++;
                j++;
            } else if (nums1[i] < nums2[j]) {
                i++;
            } else {
                j++;
            }
        }

        return resultSet.stream().mapToInt(Integer::intValue).toArray();
    }

    // Method 4: Using HashMap for frequency (overkill but works)
    public int[] intersectionHashMap(int[] nums1, int[] nums2) {
        Map<Integer, Integer> freq1 = new HashMap<>();
        List<Integer> result = new ArrayList<>();

        // Count frequency in nums1
        for (int num : nums1) {
            freq1.put(num, freq1.getOrDefault(num, 0) + 1);
        }

        // Check nums2
        for (int num : nums2) {
            if (freq1.containsKey(num) && freq1.get(num) > 0) {
                result.add(num);
                freq1.put(num, 0); // Mark as used to avoid duplicates
            }
        }

        return result.stream().mapToInt(Integer::intValue).toArray();
    }

    // Test cases
    public static void main(String[] args) {
        IntersectionOfTwoArrays4 solution = new IntersectionOfTwoArrays4();

        // Test Case 1: Basic intersection
        int[] nums1_1 = {1, 2, 2, 1};
        int[] nums2_1 = {2, 2};
        int[] result1 = solution.intersection(nums1_1, nums2_1);
        System.out.println("Test 1: " + Arrays.toString(result1)); // Expected: [2]

        // Test Case 2: Multiple intersections
        int[] nums1_2 = {4, 9, 5};
        int[] nums2_2 = {9, 4, 9, 8, 4};
        int[] result2 = solution.intersection(nums1_2, nums2_2);
        System.out.println("Test 2: " + Arrays.toString(result2)); // Expected: [9, 4]

        // Test Case 3: No intersection
        int[] nums1_3 = {1, 2, 3};
        int[] nums2_3 = {4, 5, 6};
        int[] result3 = solution.intersection(nums1_3, nums2_3);
        System.out.println("Test 3: " + Arrays.toString(result3)); // Expected: []

        // Test Case 4: Empty arrays
        int[] nums1_4 = {};
        int[] nums2_4 = {1, 2, 3};
        int[] result4 = solution.intersection(nums1_4, nums2_4);
        System.out.println("Test 4: " + Arrays.toString(result4)); // Expected: []
    }
}