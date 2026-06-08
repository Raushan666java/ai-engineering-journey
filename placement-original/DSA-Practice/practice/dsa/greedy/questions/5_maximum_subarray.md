# 5. MAXIMUM SUBARRAY (Kadane's Algorithm) (LeetCode 53)

## Problem Statement
Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A **subarray** is a **contiguous** part of an array.

## Conceptual Understanding

### What is Kadane's Algorithm?
Kadane's algorithm is a **greedy algorithm** that finds the maximum subarray sum in linear time. It maintains a running sum and resets when the sum becomes negative.

### The Greedy Insight
- **Local decision**: At each step, decide whether to continue the current subarray or start a new one
- **Greedy choice**: If current sum becomes negative, start fresh from next element
- **Why it works**: A negative sum will only decrease future sums, so discard it

### Algorithm Intuition
1. **Track current sum**: Sum of current subarray
2. **Track maximum sum**: Best sum found so far
3. **Reset on negative**: When current sum becomes negative, reset to 0
4. **Handle all negative**: Return largest single element

## Solution Approach

### Method 1: Kadane's Algorithm (Standard)
```java
public int maxSubArray(int[] nums) {
    int maxSoFar = nums[0];     // Maximum sum found so far
    int maxEndingHere = nums[0]; // Maximum sum ending at current position

    for (int i = 1; i < nums.length; i++) {
        // Choose: extend current subarray or start new one
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);

        // Update global maximum
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar;
}
```

### Why This Works:
- **Greedy choice**: `maxEndingHere + nums[i]` vs `nums[i]` alone
- **No negative drag**: Reset when sum becomes negative
- **Linear time**: Single pass through array

### Method 2: Handling All Negative Numbers
```java
public int maxSubArrayAllNegative(int[] nums) {
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
        return Arrays.stream(nums).max().getAsInt();
    }

    return maxSum;
}
```

## Time & Space Complexity
- **Time**: O(n) - single pass through array
- **Space**: O(1) - constant extra space

## Edge Cases & Testing
```java
// Test Case 1: Mixed positive/negative
int[] nums1 = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
// Result: 6 (subarray [4, -1, 2, 1])

// Test Case 2: All positive
int[] nums2 = {1, 2, 3, 4};
// Result: 10 (entire array)

// Test Case 3: All negative
int[] nums3 = {-1, -2, -3, -4};
// Result: -1 (largest single element)

// Test Case 4: Single element
int[] nums4 = {5};
// Result: 5

// Test Case 5: Empty array (not applicable - assume non-empty)

// Test Case 6: Alternating positive/negative
int[] nums6 = {1, -1, 1, -1, 1};
// Result: 1
```

## Alternative Approaches

### Method 3: Divide and Conquer
```java
public int maxSubArrayDC(int[] nums) {
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
// Time: O(n log n), Space: O(log n)
```

### Method 4: Brute Force (Inefficient)
```java
public int maxSubArrayBrute(int[] nums) {
    int maxSum = Integer.MIN_VALUE;

    for (int i = 0; i < nums.length; i++) {
        int currentSum = 0;
        for (int j = i; j < nums.length; j++) {
            currentSum += nums[j];
            maxSum = Math.max(maxSum, currentSum);
        }
    }
    return maxSum;
}
// Time: O(n²), Space: O(1)
```

## Key Insights
1. **Greedy choice**: Extend subarray only if it increases sum
2. **Negative sum reset**: Never carry negative sum forward
3. **All negative case**: Must handle separately
4. **Linear optimality**: Cannot be solved faster than O(n)

## Similar Problems
- **Maximum Product Subarray (152)**: Similar but for product
- **Best Time to Buy/Sell Stock (121)**: Kadane's variant
- **House Robber (198)**: DP with constraints

## Interview Tips
- Explain why negative sums should be discarded
- Discuss the all-negative edge case
- Compare with divide and conquer approach
- Mention the brute force and its inefficiency</content>
<parameter name="filePath">c:\xampp\htdocs\Placement\practice\dsa\greedy\questions\5_maximum_subarray.md