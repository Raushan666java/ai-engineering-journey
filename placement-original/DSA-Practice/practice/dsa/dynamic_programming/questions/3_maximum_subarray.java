package dynamic_programming.questions;

/*
 * 3. MAXIMUM SUBARRAY (LeetCode 53)
 *
 * Problem Statement:
 * Given an integer array nums, find the contiguous subarray (containing at least one number)
 * which has the largest sum and return its sum.
 *
 * Conceptual Understanding:
 * - Find contiguous subarray with maximum sum
 * - Kadane's algorithm: track current sum and maximum sum
 * - Reset current sum when it becomes negative
 * - Handle all negative numbers case
 * - Base case: single element is the maximum
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1) optimized
 */

import java.util.*;

class MaximumSubarray3 {

    // Method 1: Brute force (O(n^3) time)
    public int maxSubArrayBrute(int[] nums) {
        if (nums == null || nums.length == 0) return 0;

        int maxSum = Integer.MIN_VALUE;
        int n = nums.length;

        // Try all possible subarrays
        for (int i = 0; i < n; i++) {
            for (int j = i; j < n; j++) {
                int currentSum = 0;
                for (int k = i; k <= j; k++) {
                    currentSum += nums[k];
                }
                maxSum = Math.max(maxSum, currentSum);
            }
        }

        return maxSum;
    }

    // Method 2: Optimized brute force (O(n^2) time)
    public int maxSubArrayBruteOptimized(int[] nums) {
        if (nums == null || nums.length == 0) return 0;

        int maxSum = Integer.MIN_VALUE;
        int n = nums.length;

        for (int i = 0; i < n; i++) {
            int currentSum = 0;
            for (int j = i; j < n; j++) {
                currentSum += nums[j];
                maxSum = Math.max(maxSum, currentSum);
            }
        }

        return maxSum;
    }

    // Method 3: Kadane's algorithm (O(n) time, O(1) space)
    public int maxSubArrayKadane(int[] nums) {
        if (nums == null || nums.length == 0) return 0;

        int maxSoFar = nums[0];
        int maxEndingHere = nums[0];

        for (int i = 1; i < nums.length; i++) {
            // Either extend current subarray or start new one
            maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
            maxSoFar = Math.max(maxSoFar, maxEndingHere);
        }

        return maxSoFar;
    }

    // Method 4: Kadane's with indices (find subarray position)
    public static class SubarrayResult {
        int sum;
        int startIndex;
        int endIndex;

        public SubarrayResult(int sum, int startIndex, int endIndex) {
            this.sum = sum;
            this.startIndex = startIndex;
            this.endIndex = endIndex;
        }

        @Override
        public String toString() {
            return String.format("Sum=%d, Indices=[%d,%d]", sum, startIndex, endIndex);
        }
    }

    public SubarrayResult maxSubArrayWithIndices(int[] nums) {
        if (nums == null || nums.length == 0) {
            return new SubarrayResult(0, -1, -1);
        }

        int maxSoFar = nums[0];
        int maxEndingHere = nums[0];
        int start = 0, end = 0;
        int tempStart = 0;

        for (int i = 1; i < nums.length; i++) {
            if (maxEndingHere + nums[i] < nums[i]) {
                maxEndingHere = nums[i];
                tempStart = i; // Start new subarray
            } else {
                maxEndingHere += nums[i];
            }

            if (maxEndingHere > maxSoFar) {
                maxSoFar = maxEndingHere;
                start = tempStart;
                end = i;
            }
        }

        return new SubarrayResult(maxSoFar, start, end);
    }

    // Method 5: Divide and conquer approach
    public int maxSubArrayDivideConquer(int[] nums) {
        if (nums == null || nums.length == 0) return 0;
        return maxSubArrayHelper(nums, 0, nums.length - 1);
    }

    private int maxSubArrayHelper(int[] nums, int left, int right) {
        if (left == right) return nums[left];

        int mid = left + (right - left) / 2;

        // Find max in left half
        int leftMax = maxSubArrayHelper(nums, left, mid);

        // Find max in right half
        int rightMax = maxSubArrayHelper(nums, mid + 1, right);

        // Find max crossing the midpoint
        int crossMax = maxCrossingSum(nums, left, mid, right);

        return Math.max(Math.max(leftMax, rightMax), crossMax);
    }

    private int maxCrossingSum(int[] nums, int left, int mid, int right) {
        // Max sum from mid to left
        int leftSum = Integer.MIN_VALUE;
        int sum = 0;
        for (int i = mid; i >= left; i--) {
            sum += nums[i];
            leftSum = Math.max(leftSum, sum);
        }

        // Max sum from mid+1 to right
        int rightSum = Integer.MIN_VALUE;
        sum = 0;
        for (int i = mid + 1; i <= right; i++) {
            sum += nums[i];
            rightSum = Math.max(rightSum, sum);
        }

        return leftSum + rightSum;
    }

    // Method 6: Handle all negative numbers
    public int maxSubArrayNegative(int[] nums) {
        if (nums == null || nums.length == 0) return 0;

        int maxSum = Integer.MIN_VALUE;
        int currentSum = 0;
        boolean allNegative = true;

        for (int num : nums) {
            if (num >= 0) allNegative = false;

            currentSum = Math.max(num, currentSum + num);
            maxSum = Math.max(maxSum, currentSum);
        }

        // If all numbers are negative, return the largest one
        if (allNegative) {
            return Arrays.stream(nums).max().orElse(0);
        }

        return maxSum;
    }

    // Method 7: Maximum subarray with at most K elements
    public int maxSubArrayAtMostK(int[] nums, int k) {
        if (nums == null || nums.length == 0 || k <= 0) return 0;

        int n = nums.length;
        int[] dp = new int[n + 1];

        for (int i = 1; i <= n; i++) {
            int currentMax = Integer.MIN_VALUE;
            int sum = 0;

            // Consider subarrays ending at i-1 with at most k elements
            for (int j = i - 1; j >= Math.max(0, i - k); j--) {
                sum += nums[j];
                currentMax = Math.max(currentMax, sum);
            }

            dp[i] = Math.max(dp[i - 1], currentMax);
        }

        return dp[n];
    }

    // Method 8: Performance analysis
    public static class SubarrayStats {
        int arraySize;
        int maxSum;
        long timeMs;
        String method;
        int spaceUsed;
        SubarrayResult result;

        public SubarrayStats(int arraySize, int maxSum, long timeMs, String method,
                           int spaceUsed, SubarrayResult result) {
            this.arraySize = arraySize;
            this.maxSum = maxSum;
            this.timeMs = timeMs;
            this.method = method;
            this.spaceUsed = spaceUsed;
            this.result = result;
        }

        @Override
        public String toString() {
            return String.format("Size=%d, Sum=%d, Time=%dms, Method=%s, Space=%d, Result=%s",
                               arraySize, maxSum, timeMs, method, spaceUsed, result);
        }
    }

    public SubarrayStats analyzeSubarray(int[] nums, String method) {
        long startTime = System.nanoTime();
        int maxSum = 0;
        int space = 0;
        SubarrayResult result = null;

        switch (method) {
            case "brute":
                maxSum = maxSubArrayBrute(nums);
                space = nums.length;
                break;
            case "brute_opt":
                maxSum = maxSubArrayBruteOptimized(nums);
                space = nums.length;
                break;
            case "kadane":
                maxSum = maxSubArrayKadane(nums);
                space = 2; // two variables
                break;
            case "indices":
                result = maxSubArrayWithIndices(nums);
                maxSum = result.sum;
                space = 4; // few variables
                break;
            case "divide_conquer":
                maxSum = maxSubArrayDivideConquer(nums);
                space = nums.length; // recursion stack
                break;
            case "negative":
                maxSum = maxSubArrayNegative(nums);
                space = 3; // few variables
                break;
        }

        long timeMs = (System.nanoTime() - startTime) / 1_000_000;
        return new SubarrayStats(nums.length, maxSum, timeMs, method, space, result);
    }

    // Method 9: Validate subarray result
    public boolean validateSubarray(int[] nums, SubarrayResult result) {
        if (nums == null || result == null) return false;

        if (result.startIndex < 0 || result.endIndex >= nums.length ||
            result.startIndex > result.endIndex) {
            return false;
        }

        // Calculate actual sum
        int actualSum = 0;
        for (int i = result.startIndex; i <= result.endIndex; i++) {
            actualSum += nums[i];
        }

        return actualSum == result.sum;
    }

    // Method 10: Get all maximum subarrays
    public List<SubarrayResult> getAllMaxSubarrays(int[] nums) {
        List<SubarrayResult> results = new ArrayList<>();
        if (nums == null || nums.length == 0) return results;

        SubarrayResult maxResult = maxSubArrayWithIndices(nums);
        int maxSum = maxResult.sum;

        // Find all subarrays with the maximum sum
        for (int i = 0; i < nums.length; i++) {
            int currentSum = 0;
            for (int j = i; j < nums.length; j++) {
                currentSum += nums[j];
                if (currentSum == maxSum) {
                    results.add(new SubarrayResult(maxSum, i, j));
                }
            }
        }

        return results;
    }

    // Method 11: Maximum subarray with constraints
    public int maxSubArrayWithConstraints(int[] nums, int minLength, int maxLength) {
        if (nums == null || nums.length == 0) return 0;

        int n = nums.length;
        int maxSum = Integer.MIN_VALUE;

        for (int len = minLength; len <= Math.min(maxLength, n); len++) {
            int currentSum = 0;

            // Calculate sum of first window
            for (int i = 0; i < len; i++) {
                currentSum += nums[i];
            }
            maxSum = Math.max(maxSum, currentSum);

            // Slide the window
            for (int i = len; i < n; i++) {
                currentSum = currentSum - nums[i - len] + nums[i];
                maxSum = Math.max(maxSum, currentSum);
            }
        }

        return maxSum;
    }

    // Method 12: Circular maximum subarray
    public int maxSubArrayCircular(int[] nums) {
        if (nums == null || nums.length == 0) return 0;

        // Case 1: Maximum subarray is not circular (standard Kadane)
        int maxKadane = maxSubArrayKadane(nums);

        // Case 2: Maximum subarray is circular
        // Find minimum subarray sum, then total - min = max circular
        int total = 0;
        for (int num : nums) total += num;

        // Invert array to find minimum subarray
        int[] inverted = new int[nums.length];
        for (int i = 0; i < nums.length; i++) {
            inverted[i] = -nums[i];
        }

        int minSubarray = maxSubArrayKadane(inverted);
        int maxCircular = total - (-minSubarray); // -minSubarray because we inverted

        // Handle case where all numbers are negative
        if (maxCircular == 0) return maxKadane;

        return Math.max(maxKadane, maxCircular);
    }

    // Test cases
    public static void main(String[] args) {
        MaximumSubarray3 solution = new MaximumSubarray3();

        // Test Case 1: Basic maximum subarray
        System.out.println("=== Maximum Subarray ===");
        int[] nums1 = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
        System.out.println("Array: " + Arrays.toString(nums1));

        System.out.println("Brute force: " + solution.maxSubArrayBrute(nums1));
        System.out.println("Brute optimized: " + solution.maxSubArrayBruteOptimized(nums1));
        System.out.println("Kadane: " + solution.maxSubArrayKadane(nums1));

        // Test Case 2: With indices
        SubarrayResult result = solution.maxSubArrayWithIndices(nums1);
        System.out.println("With indices: " + result);

        // Test Case 3: Divide and conquer
        System.out.println("Divide & conquer: " + solution.maxSubArrayDivideConquer(nums1));

        // Test Case 4: All negative numbers
        int[] negative = {-1, -2, -3, -4};
        System.out.println("All negative " + Arrays.toString(negative) + ": " + solution.maxSubArrayNegative(negative));

        // Test Case 5: At most K elements
        System.out.println("At most 3 elements: " + solution.maxSubArrayAtMostK(nums1, 3));

        // Test Case 6: Performance analysis
        SubarrayStats stats = solution.analyzeSubarray(nums1, "kadane");
        System.out.println("Analysis: " + stats);

        // Test Case 7: Validation
        boolean valid = solution.validateSubarray(nums1, result);
        System.out.println("Result valid: " + valid);

        // Test Case 8: All maximum subarrays
        List<SubarrayResult> allMax = solution.getAllMaxSubarrays(nums1);
        System.out.println("All max subarrays: " + allMax);

        // Test Case 9: With constraints
        System.out.println("Length 2-4: " + solution.maxSubArrayWithConstraints(nums1, 2, 4));

        // Test Case 10: Circular
        int[] circular = {5, -3, 5};
        System.out.println("Circular " + Arrays.toString(circular) + ": " + solution.maxSubArrayCircular(circular));

        // Test Case 11: Edge cases
        System.out.println("\nEdge cases:");
        System.out.println("Empty array: " + solution.maxSubArrayKadane(new int[]{}));
        System.out.println("Single element: " + solution.maxSubArrayKadane(new int[]{5}));
        System.out.println("Two elements: " + solution.maxSubArrayKadane(new int[]{-1, 2}));

        // Test Case 12: Compare methods
        System.out.println("\nMethod comparison:");
        int[] testArray = {-2, -3, 4, -1, -2, 1, 5, -3};
        for (String method : Arrays.asList("brute_opt", "kadane", "divide_conquer")) {
            SubarrayStats s = solution.analyzeSubarray(testArray, method);
            System.out.println(method + ": " + s.maxSum + " sum, " + s.timeMs + "ms");
        }
    }
}