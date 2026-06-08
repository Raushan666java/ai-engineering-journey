// Day 1 LeetCode Solutions
// Array Problems - Easy Level

import java.util.HashMap;
import java.util.HashSet;

public class LeetCodeSolutions {

    // Problem 1: Two Sum (LeetCode #1)
    // Time: O(n), Space: O(n)
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }
            map.put(nums[i], i);
        }
        return new int[] {};
    }

    // Problem 2: Remove Duplicates from Sorted Array (LeetCode #26)
    // Time: O(n), Space: O(1)
    public int removeDuplicates(int[] nums) {
        if (nums.length == 0) return 0;

        int i = 0; // Slow pointer
        for (int j = 1; j < nums.length; j++) { // Fast pointer
            if (nums[j] != nums[i]) {
                i++;
                nums[i] = nums[j];
            }
        }
        return i + 1; // Return the length of unique elements
    }

    // Problem 3: Contains Duplicate (LeetCode #217)
    // Time: O(n), Space: O(n)
    public boolean containsDuplicate(int[] nums) {
        HashSet<Integer> set = new HashSet<>();
        for (int num : nums) {
            if (set.contains(num)) {
                return true;
            }
            set.add(num);
        }
        return false;
    }

    // Additional Practice Problems

    // Find Maximum Element
    public int findMaximum(int[] nums) {
        if (nums.length == 0) return Integer.MIN_VALUE;

        int max = nums[0];
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] > max) {
                max = nums[i];
            }
        }
        return max;
    }

    // Find Minimum Element
    public int findMinimum(int[] nums) {
        if (nums.length == 0) return Integer.MAX_VALUE;

        int min = nums[0];
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] < min) {
                min = nums[i];
            }
        }
        return min;
    }

    // Calculate Array Sum
    public int arraySum(int[] nums) {
        int sum = 0;
        for (int num : nums) {
            sum += num;
        }
        return sum;
    }

    // Calculate Array Average
    public double arrayAverage(int[] nums) {
        if (nums.length == 0) return 0.0;
        return (double) arraySum(nums) / nums.length;
    }

    // Test all methods
    public static void main(String[] args) {
        LeetCodeSolutions solution = new LeetCodeSolutions();

        // Test Two Sum
        int[] nums1 = {2, 7, 11, 15};
        int target = 9;
        int[] result1 = solution.twoSum(nums1, target);
        System.out.println("Two Sum result: [" + result1[0] + ", " + result1[1] + "]");

        // Test Remove Duplicates
        int[] nums2 = {1, 1, 2, 2, 3, 4, 4};
        int length = solution.removeDuplicates(nums2);
        System.out.println("Unique elements length: " + length);
        System.out.print("Array after removing duplicates: ");
        for (int i = 0; i < length; i++) {
            System.out.print(nums2[i] + " ");
        }
        System.out.println();

        // Test Contains Duplicate
        int[] nums3 = {1, 2, 3, 1};
        boolean hasDuplicate = solution.containsDuplicate(nums3);
        System.out.println("Contains duplicate: " + hasDuplicate);

        // Test additional methods
        int[] testArray = {10, 5, 8, 15, 3};
        System.out.println("Maximum: " + solution.findMaximum(testArray));
        System.out.println("Minimum: " + solution.findMinimum(testArray));
        System.out.println("Sum: " + solution.arraySum(testArray));
        System.out.println("Average: " + solution.arrayAverage(testArray));
    }
}