package arrays.questions;

/*
 * 5. MAXIMUM SUBARRAY (LeetCode 53)
 *
 * Problem Statement:
 * Given an integer array nums, find the contiguous subarray (containing at least one number)
 * which has the largest sum and return its sum.
 *
 * Conceptual Understanding:
 * - Find maximum sum of contiguous subarray
 * - At least one element (handles negative numbers)
 * - Time: O(n), Space: O(1) using Kadane's algorithm
 * - Alternative: O(n²) brute force, O(n³) naive
 * - Kadane's algorithm: track current max and global max
 * - Handle all negative numbers case
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

class MaximumSubarray5 {

    // Method 1: Kadane's algorithm (most efficient)
    public int maxSubArray(int[] nums) {
        if (nums == null || nums.length == 0) {
            return 0;
        }

        int maxCurrent = nums[0];
        int maxGlobal = nums[0];

        for (int i = 1; i < nums.length; i++) {
            maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
            if (maxCurrent > maxGlobal) {
                maxGlobal = maxCurrent;
            }
        }

        return maxGlobal;
    }

    // Method 2: Brute force (O(n²))
    public int maxSubArrayBruteForce(int[] nums) {
        if (nums == null || nums.length == 0) {
            return 0;
        }

        int maxSum = Integer.MIN_VALUE;

        for (int i = 0; i < nums.length; i++) {
            int currentSum = 0;
            for (int j = i; j < nums.length; j++) {
                currentSum += nums[j];
                if (currentSum > maxSum) {
                    maxSum = currentSum;
                }
            }
        }

        return maxSum;
    }

    // Method 3: Divide and conquer (O(n log n))
    public int maxSubArrayDivideConquer(int[] nums) {
        if (nums == null || nums.length == 0) {
            return 0;
        }

        return maxSubArrayHelper(nums, 0, nums.length - 1);
    }

    private int maxSubArrayHelper(int[] nums, int left, int right) {
        if (left == right) {
            return nums[left];
        }

        int mid = left + (right - left) / 2;

        // Max subarray in left half
        int leftMax = maxSubArrayHelper(nums, left, mid);

        // Max subarray in right half
        int rightMax = maxSubArrayHelper(nums, mid + 1, right);

        // Max subarray crossing midpoint
        int crossMax = maxCrossingSum(nums, left, mid, right);

        return Math.max(Math.max(leftMax, rightMax), crossMax);
    }

    private int maxCrossingSum(int[] nums, int left, int mid, int right) {
        // Left side maximum
        int leftSum = Integer.MIN_VALUE;
        int sum = 0;
        for (int i = mid; i >= left; i--) {
            sum += nums[i];
            if (sum > leftSum) {
                leftSum = sum;
            }
        }

        // Right side maximum
        int rightSum = Integer.MIN_VALUE;
        sum = 0;
        for (int i = mid + 1; i <= right; i++) {
            sum += nums[i];
            if (sum > rightSum) {
                rightSum = sum;
            }
        }

        return leftSum + rightSum;
    }

    // Method 4: Dynamic programming with array
    public int maxSubArrayDP(int[] nums) {
        if (nums == null || nums.length == 0) {
            return 0;
        }

        int[] dp = new int[nums.length];
        dp[0] = nums[0];
        int maxSum = dp[0];

        for (int i = 1; i < nums.length; i++) {
            dp[i] = Math.max(nums[i], dp[i - 1] + nums[i]);
            maxSum = Math.max(maxSum, dp[i]);
        }

        return maxSum;
    }

    // Method 5: Using prefix sums
    public int maxSubArrayPrefixSum(int[] nums) {
        if (nums == null || nums.length == 0) {
            return 0;
        }

        int[] prefix = new int[nums.length + 1];
        for (int i = 1; i <= nums.length; i++) {
            prefix[i] = prefix[i - 1] + nums[i - 1];
        }

        int minPrefix = prefix[0];
        int maxSum = Integer.MIN_VALUE;

        for (int i = 1; i <= nums.length; i++) {
            maxSum = Math.max(maxSum, prefix[i] - minPrefix);
            minPrefix = Math.min(minPrefix, prefix[i]);
        }

        return maxSum;
    }

    // Method 6: Handle empty array
    public int maxSubArrayEmpty(int[] nums) {
        if (nums == null || nums.length == 0) {
            return 0; // or throw exception
        }
        return maxSubArray(nums);
    }

    // Method 7: Return subarray indices too
    public int[] maxSubArrayWithIndices(int[] nums) {
        if (nums == null || nums.length == 0) {
            return new int[]{0, 0, 0}; // start, end, sum
        }

        int maxCurrent = nums[0];
        int maxGlobal = nums[0];
        int start = 0, end = 0, tempStart = 0;

        for (int i = 1; i < nums.length; i++) {
            if (maxCurrent < 0) {
                maxCurrent = nums[i];
                tempStart = i;
            } else {
                maxCurrent += nums[i];
            }

            if (maxCurrent > maxGlobal) {
                maxGlobal = maxCurrent;
                start = tempStart;
                end = i;
            }
        }

        return new int[]{start, end, maxGlobal};
    }

    // Method 8: Circular maximum subarray (variation)
    public int maxSubArrayCircular(int[] nums) {
        if (nums == null || nums.length == 0) {
            return 0;
        }

        // Case 1: Maximum subarray is not circular (standard Kadane)
        int maxKadane = maxSubArray(nums);

        // Case 2: Maximum subarray is circular
        // Find minimum subarray sum, then total - min = max circular
        int total = 0;
        for (int num : nums) {
            total += num;
        }

        int minKadane = minSubArray(nums);
        int maxCircular = total - minKadane;

        // If all numbers are negative, maxCircular will be 0 (empty subarray)
        // In that case, return maxKadane (which will be the largest negative number)
        if (maxCircular == 0) {
            return maxKadane;
        }

        return Math.max(maxKadane, maxCircular);
    }

    private int minSubArray(int[] nums) {
        int minCurrent = nums[0];
        int minGlobal = nums[0];

        for (int i = 1; i < nums.length; i++) {
            minCurrent = Math.min(nums[i], minCurrent + nums[i]);
            minGlobal = Math.min(minGlobal, minCurrent);
        }

        return minGlobal;
    }

    // Method 9: Maximum subarray with at most k elements
    public int maxSubArrayAtMostK(int[] nums, int k) {
        if (nums == null || nums.length == 0 || k <= 0) {
            return 0;
        }

        // Sliding window maximum for subarrays of size at most k
        int maxSum = Integer.MIN_VALUE;

        for (int i = 0; i < nums.length; i++) {
            int currentSum = 0;
            for (int j = i; j < Math.min(nums.length, i + k); j++) {
                currentSum += nums[j];
                maxSum = Math.max(maxSum, currentSum);
            }
        }

        return maxSum;
    }

    // Method 10: Maximum subarray with exactly k elements
    public int maxSubArrayExactlyK(int[] nums, int k) {
        if (nums == null || nums.length < k || k <= 0) {
            return 0;
        }

        int maxSum = Integer.MIN_VALUE;

        for (int i = 0; i <= nums.length - k; i++) {
            int currentSum = 0;
            for (int j = i; j < i + k; j++) {
                currentSum += nums[j];
            }
            maxSum = Math.max(maxSum, currentSum);
        }

        return maxSum;
    }

    // Method 11: Maximum subarray product (variation)
    public int maxSubArrayProduct(int[] nums) {
        if (nums == null || nums.length == 0) {
            return 0;
        }

        int maxCurrent = nums[0];
        int minCurrent = nums[0];
        int maxGlobal = nums[0];

        for (int i = 1; i < nums.length; i++) {
            int temp = maxCurrent;
            maxCurrent = Math.max(Math.max(nums[i], maxCurrent * nums[i]), minCurrent * nums[i]);
            minCurrent = Math.min(Math.min(nums[i], temp * nums[i]), minCurrent * nums[i]);
            maxGlobal = Math.max(maxGlobal, maxCurrent);
        }

        return maxGlobal;
    }

    // Method 12: All maximum subarrays
    public java.util.List<int[]> findAllMaxSubarrays(int[] nums) {
        java.util.List<int[]> result = new java.util.ArrayList<>();
        if (nums == null || nums.length == 0) {
            return result;
        }

        int maxSum = maxSubArray(nums);
        int currentSum = nums[0];
        int start = 0;

        for (int i = 1; i <= nums.length; i++) {
            if (i < nums.length && currentSum > 0) {
                currentSum += nums[i];
            } else {
                if (currentSum == maxSum) {
                    result.add(new int[]{start, i - 1, maxSum});
                }
                if (i < nums.length) {
                    start = i;
                    currentSum = nums[i];
                }
            }
        }

        return result;
    }

    // Test cases
    public static void main(String[] args) {
        MaximumSubarray5 solution = new MaximumSubarray5();

        // Test Case 1: Mixed positive and negative
        int[] nums1 = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
        System.out.println("Max subarray sum: " + solution.maxSubArray(nums1)); // Expected: 6

        // Test Case 2: All negative
        int[] nums2 = {-1, -2, -3, -4};
        System.out.println("All negative: " + solution.maxSubArray(nums2)); // Expected: -1

        // Test Case 3: All positive
        int[] nums3 = {1, 2, 3, 4};
        System.out.println("All positive: " + solution.maxSubArray(nums3)); // Expected: 10

        // Test Case 4: Single element
        int[] nums4 = {5};
        System.out.println("Single element: " + solution.maxSubArray(nums4)); // Expected: 5

        // Test Case 5: Performance comparison
        int[] largeArray = new int[10000];
        for (int i = 0; i < largeArray.length; i++) {
            largeArray[i] = (int)(Math.random() * 200) - 100; // -100 to 99
        }

        long startTime, endTime;

        // Kadane's algorithm
        startTime = System.nanoTime();
        int result1 = solution.maxSubArray(largeArray.clone());
        endTime = System.nanoTime();
        System.out.println("\nKadane's result: " + result1 + " (" + (endTime - startTime) / 1000000 + " ms)");

        // Divide and conquer
        startTime = System.nanoTime();
        int result2 = solution.maxSubArrayDivideConquer(largeArray.clone());
        endTime = System.nanoTime();
        System.out.println("Divide & conquer result: " + result2 + " (" + (endTime - startTime) / 1000000 + " ms)");

        // Test Case 6: With indices
        int[] indicesResult = solution.maxSubArrayWithIndices(nums1);
        System.out.println("Max subarray from index " + indicesResult[0] + " to " + indicesResult[1] +
                          " with sum " + indicesResult[2]);

        // Test Case 7: Circular array
        int[] circular = {5, -3, 5};
        System.out.println("Circular max: " + solution.maxSubArrayCircular(circular)); // Expected: 10 (5 + 5)

        // Test Case 8: At most k elements
        int[] kArray = {1, -2, 3, -4, 5};
        System.out.println("Max subarray at most 3 elements: " + solution.maxSubArrayAtMostK(kArray, 3));

        // Test Case 9: Exactly k elements
        System.out.println("Max subarray exactly 2 elements: " + solution.maxSubArrayExactlyK(kArray, 2));

        // Test Case 10: Maximum product
        int[] productArray = {2, 3, -2, 4};
        System.out.println("Max product: " + solution.maxSubArrayProduct(productArray)); // Expected: 6

        // Test Case 11: Edge cases
        System.out.println("\nEdge cases:");

        // Empty array
        int[] empty = {};
        System.out.println("Empty array: " + solution.maxSubArrayEmpty(empty));

        // Null array
        System.out.println("Null array: " + solution.maxSubArrayEmpty(null));

        // Large negative numbers
        int[] largeNegative = {-1000, -1, -2000};
        System.out.println("Large negative: " + solution.maxSubArray(largeNegative));

        // Test Case 12: All maximum subarrays
        int[] multiMax = {1, -1, 1, -1, 1};
        java.util.List<int[]> allMax = solution.findAllMaxSubarrays(multiMax);
        System.out.println("All maximum subarrays:");
        for (int[] subarray : allMax) {
            System.out.println("[" + subarray[0] + ", " + subarray[1] + "] sum=" + subarray[2]);
        }
    }
}