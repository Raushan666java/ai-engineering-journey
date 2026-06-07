/*
 * 5. MAXIMUM SUBARRAY (Kadane's Algorithm) (LeetCode 53)
 *
 * Problem Statement:
 * Given an integer array nums, find the contiguous subarray (containing at least one number)
 * which has the largest sum and return its sum.
 *
 * A subarray is a contiguous part of an array.
 *
 * Conceptual Understanding:
 * - Kadane's algorithm is a greedy algorithm that finds maximum subarray sum in linear time
 * - Maintains running sum and resets when sum becomes negative
 * - Greedy insight: negative sum will only decrease future sums, so discard it
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

public class MaximumSubarray {

    // Method 1: Standard Kadane's Algorithm
    public int maxSubArray(int[] nums) {
        if (nums == null || nums.length == 0) {
            return 0;
        }

        int maxSoFar = nums[0];        // Maximum sum found so far
        int maxEndingHere = nums[0];   // Maximum sum ending at current position

        for (int i = 1; i < nums.length; i++) {
            // Greedy choice: extend current subarray or start new one
            maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);

            // Update global maximum
            maxSoFar = Math.max(maxSoFar, maxEndingHere);
        }

        return maxSoFar;
    }

    // Method 2: Handling all negative numbers explicitly
    public int maxSubArrayAllNegative(int[] nums) {
        if (nums == null || nums.length == 0) {
            return 0;
        }

        int maxSum = Integer.MIN_VALUE;
        int currentSum = 0;
        boolean allNegative = true;

        for (int num : nums) {
            if (num > 0) allNegative = false;

            currentSum = Math.max(num, currentSum + num);
            maxSum = Math.max(maxSum, currentSum);
        }

        // If all numbers are negative, return the largest one
        if (allNegative) {
            int maxNegative = Integer.MIN_VALUE;
            for (int num : nums) {
                maxNegative = Math.max(maxNegative, num);
            }
            return maxNegative;
        }

        return maxSum;
    }

    // Method 3: Divide and Conquer Approach
    public int maxSubArrayDivideConquer(int[] nums) {
        if (nums == null || nums.length == 0) {
            return 0;
        }
        return maxSubArrayHelper(nums, 0, nums.length - 1);
    }

    private int maxSubArrayHelper(int[] nums, int left, int right) {
        if (left == right) return nums[left];

        int mid = left + (right - left) / 2;

        // Find max in left half, right half, and crossing
        int leftMax = maxSubArrayHelper(nums, left, mid);
        int rightMax = maxSubArrayHelper(nums, mid + 1, right);
        int crossMax = maxCrossingSum(nums, left, mid, right);

        return Math.max(Math.max(leftMax, rightMax), crossMax);
    }

    private int maxCrossingSum(int[] nums, int left, int mid, int right) {
        int leftSum = Integer.MIN_VALUE, rightSum = Integer.MIN_VALUE;
        int sum = 0;

        // Left part
        for (int i = mid; i >= left; i--) {
            sum += nums[i];
            leftSum = Math.max(leftSum, sum);
        }

        // Right part
        sum = 0;
        for (int i = mid + 1; i <= right; i++) {
            sum += nums[i];
            rightSum = Math.max(rightSum, sum);
        }

        return leftSum + rightSum;
    }

    // Test cases
    public static void main(String[] args) {
        MaximumSubarray solution = new MaximumSubarray();

        // Test Case 1: Mixed positive/negative
        int[] nums1 = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
        System.out.println("Test 1: " + solution.maxSubArray(nums1)); // Expected: 6

        // Test Case 2: All positive
        int[] nums2 = {1, 2, 3, 4};
        System.out.println("Test 2: " + solution.maxSubArray(nums2)); // Expected: 10

        // Test Case 3: All negative
        int[] nums3 = {-1, -2, -3, -4};
        System.out.println("Test 3: " + solution.maxSubArray(nums3)); // Expected: -1

        // Test Case 4: Single element
        int[] nums4 = {5};
        System.out.println("Test 4: " + solution.maxSubArray(nums4)); // Expected: 5
    }
}