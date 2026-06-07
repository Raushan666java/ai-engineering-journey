// package practice.dsa.arrays;

import java.util.HashMap;
import java.util.Arrays;

/**
 * Problem: Two Sum
 * 
 * Given an array of integers nums and an integer target, 
 * return indices of the two numbers such that they add up to target.
 * 
 * Example:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: nums[0] + nums[1] = 2 + 7 = 9
 * 
 * Constraints:
 * - 2 <= nums.length <= 10^4
 * - -10^9 <= nums[i] <= 10^9
 * - Only one valid answer exists
 * 
 * Company Tags: Amazon, Google, Facebook, Microsoft, Apple
 * Difficulty: Easy
 */
public class Easy_Array_TwoSum {
    
    /**
     * Approach 1: Brute Force
     * Time Complexity: O(n^2)
     * Space Complexity: O(1)
     */
    public static int[] twoSumBruteForce(int[] nums, int target) {
        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    return new int[]{i, j};
                }
            }
        }
        return new int[]{-1, -1};
    }
    
    /**
     * Approach 2: Hash Map (Optimal)
     * Time Complexity: O(n)
     * Space Complexity: O(n)
     */
    public static int[] twoSumHashMap(int[] nums, int target) {
        HashMap<Integer, Integer> map = new HashMap<>();
        
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[]{map.get(complement), i};
            }
            map.put(nums[i], i);
        }
        return new int[]{-1, -1};
    }
    
    public static void main(String[] args) {
        // Test Case 1
        int[] nums1 = {2, 7, 11, 15};
        int target1 = 9;
        System.out.println("Input: nums = " + Arrays.toString(nums1) + ", target = " + target1);
        System.out.println("Output (Brute Force): " + Arrays.toString(twoSumBruteForce(nums1, target1)));
        System.out.println("Output (HashMap): " + Arrays.toString(twoSumHashMap(nums1, target1)));
        
        // Test Case 2
        int[] nums2 = {3, 2, 4};
        int target2 = 6;
        System.out.println("\nInput: nums = " + Arrays.toString(nums2) + ", target = " + target2);
        System.out.println("Output (HashMap): " + Arrays.toString(twoSumHashMap(nums2, target2)));
        
        // Test Case 3
        int[] nums3 = {3, 3};
        int target3 = 6;
        System.out.println("\nInput: nums = " + Arrays.toString(nums3) + ", target = " + target3);
        System.out.println("Output (HashMap): " + Arrays.toString(twoSumHashMap(nums3, target3)));
    }
}

/**
 * Key Learnings:
 * 1. HashMap provides O(1) lookup time
 * 2. Store complement instead of checking all pairs
 * 3. One-pass solution is possible
 * 
 * Follow-up Questions:
 * 1. What if the array is sorted? (Two-pointer approach)
 * 2. What if we need to return all pairs? (Different approach needed)
 * 3. What if duplicates are allowed?
 */
