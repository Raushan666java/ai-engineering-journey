# 📊 Arrays: Practice Problems & Solutions

## Core Concepts Review
Arrays are contiguous memory locations that store elements of the same type. They provide O(1) access time but have fixed size.

**Time Complexities:**
- Access: O(1)
- Search: O(n) for unsorted, O(log n) for sorted
- Insertion/Deletion: O(n) in worst case

## Problem 1: Two Sum
**Problem:** Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

**Example:**
```
Input: nums = [2,7,11,15], target = 9
Output: [0,1] (because nums[0] + nums[1] = 2 + 7 = 9)
```

**Solution:**
```java
public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        if (map.containsKey(complement)) {
            return new int[] { map.get(complement), i };
        }
        map.put(nums[i], i);
    }
    return new int[] {}; // No solution found
}
```

**Time Complexity:** O(n)  
**Space Complexity:** O(n)

## Problem 2: Maximum Subarray
**Problem:** Find the contiguous subarray with the largest sum.

**Example:**
```
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6 (subarray [4,-1,2,1])
```

**Solution (Kadane's Algorithm):**
```java
public int maxSubArray(int[] nums) {
    int maxSoFar = nums[0];
    int maxEndingHere = nums[0];
    
    for (int i = 1; i < nums.length; i++) {
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    
    return maxSoFar;
}
```

**Time Complexity:** O(n)  
**Space Complexity:** O(1)

## Problem 3: Container With Most Water
**Problem:** Given n non-negative integers representing heights of lines, find two lines that together with the x-axis form a container that holds the most water.

**Example:**
```
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49 (between heights 8 and 7)
```

**Solution (Two Pointer Technique):**
```java
public int maxArea(int[] height) {
    int left = 0;
    int right = height.length - 1;
    int maxArea = 0;
    
    while (left < right) {
        int width = right - left;
        int h = Math.min(height[left], height[right]);
        maxArea = Math.max(maxArea, width * h);
        
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxArea;
}
```

**Time Complexity:** O(n)  
**Space Complexity:** O(1)

## Problem 4: Rotate Array
**Problem:** Rotate an array to the right by k steps.

**Example:**
```
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
```

**Solution:**
```java
public void rotate(int[] nums, int k) {
    k %= nums.length; // Handle case where k > nums.length
    
    // Reverse the entire array
    reverse(nums, 0, nums.length - 1);
    // Reverse the first k elements
    reverse(nums, 0, k - 1);
    // Reverse the remaining elements
    reverse(nums, k, nums.length - 1);
}

private void reverse(int[] nums, int start, int end) {
    while (start < end) {
        int temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}
```

**Time Complexity:** O(n)  
**Space Complexity:** O(1)

## Problem 5: Merge Sorted Arrays
**Problem:** Merge two sorted arrays nums1 and nums2 into nums1 as one sorted array.

**Example:**
```
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
```

**Solution:**
```java
public void merge(int[] nums1, int m, int[] nums2, int n) {
    int p1 = m - 1; // Pointer for nums1
    int p2 = n - 1; // Pointer for nums2
    int p = m + n - 1; // Pointer for merged array
    
    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[p--] = nums1[p1--];
        } else {
            nums1[p--] = nums2[p2--];
        }
    }
    
    // Copy remaining elements from nums2
    while (p2 >= 0) {
        nums1[p--] = nums2[p2--];
    }
}
```

**Time Complexity:** O(m + n)  
**Space Complexity:** O(1)

## Problem 6: Product of Array Except Self
**Problem:** Given an array nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

**Example:**
```
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
```

**Solution:**
```java
public int[] productExceptSelf(int[] nums) {
    int n = nums.length;
    int[] output = new int[n];
    
    // Calculate left products
    output[0] = 1;
    for (int i = 1; i < n; i++) {
        output[i] = output[i - 1] * nums[i - 1];
    }
    
    // Calculate right products and multiply with left products
    int rightProduct = 1;
    for (int i = n - 1; i >= 0; i--) {
        output[i] *= rightProduct;
        rightProduct *= nums[i];
    }
    
    return output;
}
```

**Time Complexity:** O(n)  
**Space Complexity:** O(1) excluding output array

## Problem 7: Find the Duplicate Number
**Problem:** Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

**Example:**
```
Input: nums = [1,3,4,2,2]
Output: 2
```

**Solution (Floyd's Cycle Detection):**
```java
public int findDuplicate(int[] nums) {
    int slow = nums[0];
    int fast = nums[0];
    
    // Find the intersection point
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow != fast);
    
    // Find the entrance to the cycle
    slow = nums[0];
    while (slow != fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    
    return slow;
}
```

**Time Complexity:** O(n)  
**Space Complexity:** O(1)

## Problem 8: Next Permutation
**Problem:** Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

**Example:**
```
Input: nums = [1,2,3]
Output: [1,3,2]
```

**Solution:**
```java
public void nextPermutation(int[] nums) {
    int n = nums.length;
    int i = n - 2;
    
    // Find first decreasing element from right
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    
    if (i >= 0) {
        int j = n - 1;
        // Find element just larger than nums[i]
        while (nums[j] <= nums[i]) {
            j--;
        }
        // Swap them
        swap(nums, i, j);
    }
    
    // Reverse the subarray after position i
    reverse(nums, i + 1, n - 1);
}

private void swap(int[] nums, int i, int j) {
    int temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

private void reverse(int[] nums, int start, int end) {
    while (start < end) {
        swap(nums, start++, end--);
    }
}
```

**Time Complexity:** O(n)  
**Space Complexity:** O(1)

## Problem 9: Trapping Rain Water
**Problem:** Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

**Example:**
```
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
```

**Solution (Two Pointer Approach):**
```java
public int trap(int[] height) {
    if (height == null || height.length < 3) {
        return 0;
    }
    
    int left = 0, right = height.length - 1;
    int leftMax = 0, rightMax = 0;
    int water = 0;
    
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }
            right--;
        }
    }
    
    return water;
}
```

**Time Complexity:** O(n)  
**Space Complexity:** O(1)

## Problem 10: Median of Two Sorted Arrays
**Problem:** Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

**Example:**
```
Input: nums1 = [1,3], nums2 = [2]
Output: 2.0
```

**Solution (Binary Search):**
```java
public double findMedianSortedArrays(int[] nums1, int[] nums2) {
    // Ensure nums1 is the smaller array for simplicity
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }
    
    int x = nums1.length;
    int y = nums2.length;
    int low = 0;
    int high = x;
    
    while (low <= high) {
        int partitionX = (low + high) / 2;
        int partitionY = (x + y + 1) / 2 - partitionX;
        
        int maxX = (partitionX == 0) ? Integer.MIN_VALUE : nums1[partitionX - 1];
        int maxY = (partitionY == 0) ? Integer.MIN_VALUE : nums2[partitionY - 1];
        
        int minX = (partitionX == x) ? Integer.MAX_VALUE : nums1[partitionX];
        int minY = (partitionY == y) ? Integer.MAX_VALUE : nums2[partitionY];
        
        if (maxX <= minY && maxY <= minX) {
            // Found the correct partition
            if ((x + y) % 2 == 0) {
                return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2.0;
            } else {
                return Math.max(maxX, maxY);
            }
        } else if (maxX > minY) {
            high = partitionX - 1;
        } else {
            low = partitionX + 1;
        }
    }
    
    throw new IllegalArgumentException("Input arrays are not sorted");
}
```

**Time Complexity:** O(log(min(m,n)))  
**Space Complexity:** O(1)

## Problem 11: 3Sum
**Problem:** Given an array nums of n integers, find all unique triplets in the array which gives the sum of zero.

**Example:**
```
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
```

**Solution:**
```java
public List<List<Integer>> threeSum(int[] nums) {
    List<List<Integer>> result = new ArrayList<>();
    if (nums == null || nums.length < 3) {
        return result;
    }
    
    Arrays.sort(nums);
    
    for (int i = 0; i < nums.length - 2; i++) {
        // Skip duplicates
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        
        int left = i + 1;
        int right = nums.length - 1;
        
        while (left < right) {
            int sum = nums[i] + nums[left] + nums[right];
            
            if (sum < 0) {
                left++;
            } else if (sum > 0) {
                right--;
            } else {
                result.add(Arrays.asList(nums[i], nums[left], nums[right]));
                
                // Skip duplicates
                while (left < right && nums[left] == nums[left + 1]) {
                    left++;
                }
                while (left < right && nums[right] == nums[right - 1]) {
                    right--;
                }
                
                left++;
                right--;
            }
        }
    }
    
    return result;
}
```

**Time Complexity:** O(n²)  
**Space Complexity:** O(1) excluding output

## Problem 12: Subarray Sum Equals K
**Problem:** Given an array of integers and an integer k, find the total number of continuous subarrays whose sum equals to k.

**Example:**
```
Input: nums = [1,1,1], k = 2
Output: 2
```

**Solution (Prefix Sum with HashMap):**
```java
public int subarraySum(int[] nums, int k) {
    int count = 0;
    int sum = 0;
    Map<Integer, Integer> prefixSumCount = new HashMap<>();
    prefixSumCount.put(0, 1); // Empty subarray with sum 0
    
    for (int num : nums) {
        sum += num;
        count += prefixSumCount.getOrDefault(sum - k, 0);
        prefixSumCount.put(sum, prefixSumCount.getOrDefault(sum, 0) + 1);
    }
    
    return count;
}
```

**Time Complexity:** O(n)  
**Space Complexity:** O(n)

## Array Techniques Summary

### 1. Two Pointer Technique
Used for problems involving searching, sorting, or when you need to find pairs/triplets.
```java
int left = 0, right = array.length - 1;
while (left < right) {
    // Process array[left] and array[right]
    // Move pointers based on conditions
}
```

### 2. Sliding Window
Used for problems involving subarrays or substring operations.
```java
int left = 0;
for (int right = 0; right < array.length; right++) {
    // Add array[right] to window
    while (/* window needs shrinking */) {
        // Remove array[left] from window
        left++;
    }
    // Process current window
}
```

### 3. Prefix Sum
Used for range sum queries or finding subarrays with specific properties.
```java
int[] prefixSum = new int[nums.length + 1];
for (int i = 0; i < nums.length; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i];
}
// Sum of subarray from index i to j (inclusive)
int rangeSum = prefixSum[j + 1] - prefixSum[i];
```

### 4. Kadane's Algorithm
Used for maximum subarray problems.
```java
int maxSoFar = nums[0];
int maxEndingHere = nums[0];
for (int i = 1; i < nums.length; i++) {
    maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
}
```

### 5. Binary Search
Used for searching in sorted arrays.
```java
int left = 0, right = array.length - 1;
while (left <= right) {
    int mid = left + (right - left) / 2;
    if (array[mid] == target) {
        return mid;
    } else if (array[mid] < target) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}
```

## Practice Exercises

1. Find the missing number in an array containing n distinct numbers from 0 to n
2. Merge two sorted arrays without using extra space
3. Find the maximum sum of a subarray of size k
4. Find all pairs in an array that sum to a given value
5. Rotate a matrix by 90 degrees
6. Find the longest consecutive sequence in an unsorted array
7. Find the smallest missing positive integer in an unsorted array
8. Find the majority element (appears more than n/2 times)
9. Find the equilibrium index (sum of elements on left equals sum on right)
10. Search in a rotated sorted array