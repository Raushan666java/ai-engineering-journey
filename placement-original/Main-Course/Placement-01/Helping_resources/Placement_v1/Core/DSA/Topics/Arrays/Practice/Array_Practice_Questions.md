# Array Practice Questions

## Easy Level Questions

### 1. Two Sum
**Problem:** Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

**Example:**
```
Input: nums = [2,7,11,15], target = 9
Output: [0,1] (because nums[0] + nums[1] = 2 + 7 = 9)
```

**Approach:**
1. Use a HashMap to store elements and their indices
2. For each element, check if its complement (target - current element) exists in the HashMap
3. If found, return the indices; otherwise, add the current element to the HashMap

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

### 2. Maximum Subarray
**Problem:** Find the contiguous subarray with the largest sum.

**Example:**
```
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6 (subarray [4,-1,2,1])
```

**Approach (Kadane's Algorithm):**
1. Initialize two variables: maxSoFar and maxEndingHere to the first element
2. Iterate through the array starting from the second element
3. For each element, update maxEndingHere to be the maximum of the current element and the sum of the current element and maxEndingHere
4. Update maxSoFar to be the maximum of maxSoFar and maxEndingHere
5. Return maxSoFar

**Solution:**
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

### 3. Contains Duplicate
**Problem:** Given an array of integers, determine if the array contains any duplicate elements.

**Example:**
```
Input: nums = [1,2,3,1]
Output: true
```

**Approach:**
1. Use a HashSet to track seen elements
2. Iterate through the array
3. If the current element is already in the HashSet, return true
4. Otherwise, add the element to the HashSet
5. If no duplicates are found, return false

**Solution:**
```java
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
```

**Time Complexity:** O(n)  
**Space Complexity:** O(n)

### 4. Move Zeroes
**Problem:** Given an array `nums`, move all 0's to the end while maintaining the relative order of the non-zero elements.

**Example:**
```
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
```

**Approach:**
1. Use two pointers: one for the current position and one for the position of the next non-zero element
2. Iterate through the array
3. When a non-zero element is found, swap it with the element at the non-zero position and increment the non-zero position
4. After the iteration, all non-zero elements will be at the beginning, and all zeros will be at the end

**Solution:**
```java
public void moveZeroes(int[] nums) {
    int nonZeroPos = 0;
    
    // Move all non-zero elements to the front
    for (int i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[nonZeroPos++] = nums[i];
        }
    }
    
    // Fill the rest with zeros
    while (nonZeroPos < nums.length) {
        nums[nonZeroPos++] = 0;
    }
}
```

**Time Complexity:** O(n)  
**Space Complexity:** O(1)

### 5. Best Time to Buy and Sell Stock
**Problem:** Given an array `prices` where `prices[i]` is the price of a stock on day i, find the maximum profit by buying on one day and selling on a later day.

**Example:**
```
Input: prices = [7,1,5,3,6,4]
Output: 5 (buy on day 2 (price = 1) and sell on day 5 (price = 6))
```

**Approach:**
1. Initialize minPrice to the first price and maxProfit to 0
2. Iterate through the array
3. Update minPrice to be the minimum of minPrice and the current price
4. Update maxProfit to be the maximum of maxProfit and the difference between the current price and minPrice
5. Return maxProfit

**Solution:**
```java
public int maxProfit(int[] prices) {
    if (prices.length <= 1) return 0;
    
    int minPrice = prices[0];
    int maxProfit = 0;
    
    for (int i = 1; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
    
    return maxProfit;
}
```

**Time Complexity:** O(n)  
**Space Complexity:** O(1)

## Medium Level Questions

### 6. Product of Array Except Self
**Problem:** Given an array `nums`, return an array `output` such that `output[i]` is equal to the product of all the elements of `nums` except `nums[i]`.

**Example:**
```
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
```

**Approach:**
1. Create an output array of the same length as the input array
2. Compute the product of all elements to the left of each element and store it in the output array
3. Compute the product of all elements to the right of each element and multiply it with the corresponding value in the output array
4. Return the output array

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

### 7. 3Sum
**Problem:** Given an array `nums`, find all unique triplets in the array which gives the sum of zero.

**Example:**
```
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
```

**Approach:**
1. Sort the array
2. Iterate through the array
3. For each element, use two pointers to find pairs that sum to the negative of the current element
4. Skip duplicates to avoid duplicate triplets
5. Return all unique triplets

**Solution:**
```java
public List<List<Integer>> threeSum(int[] nums) {
    List<List<Integer>> result = new ArrayList<>();
    if (nums == null || nums.length < 3) return result;
    
    Arrays.sort(nums);
    
    for (int i = 0; i < nums.length - 2; i++) {
        // Skip duplicates
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        
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
                while (left < right && nums[left] == nums[left + 1]) left++;
                while (left < right && nums[right] == nums[right - 1]) right--;
                
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

### 8. Container With Most Water
**Problem:** Given n non-negative integers representing heights of lines, find two lines that together with the x-axis form a container that holds the most water.

**Example:**
```
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49 (between heights 8 and 7)
```

**Approach:**
1. Use two pointers: one at the beginning and one at the end of the array
2. Calculate the area between the two pointers
3. Move the pointer with the smaller height inward
4. Keep track of the maximum area
5. Return the maximum area

**Solution:**
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

### 9. Subarray Sum Equals K
**Problem:** Given an array of integers and an integer k, find the total number of continuous subarrays whose sum equals to k.

**Example:**
```
Input: nums = [1,1,1], k = 2
Output: 2
```

**Approach:**
1. Use a HashMap to store the prefix sum and its frequency
2. Initialize the HashMap with {0, 1} to account for subarrays starting from the beginning
3. Iterate through the array, calculating the cumulative sum
4. For each sum, check if (sum - k) exists in the HashMap
5. If it exists, add its frequency to the count
6. Update the HashMap with the current sum
7. Return the count

**Solution:**
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

### 10. Next Permutation
**Problem:** Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

**Example:**
```
Input: nums = [1,2,3]
Output: [1,3,2]
```

**Approach:**
1. Find the first pair of adjacent elements from the right such that nums[i] < nums[i+1]
2. If no such pair exists, reverse the entire array
3. Otherwise, find the smallest element in the suffix that is greater than nums[i]
4. Swap nums[i] with this element
5. Reverse the suffix starting from position i+1

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

## Hard Level Questions

### 11. Trapping Rain Water
**Problem:** Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

**Example:**
```
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
```

**Approach:**
1. Use two pointers: one from the left and one from the right
2. Keep track of the maximum height seen from the left and right
3. If the left height is smaller than the right height, calculate the water trapped at the left pointer
4. Otherwise, calculate the water trapped at the right pointer
5. Move the pointer with the smaller height inward
6. Return the total water trapped

**Solution:**
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

### 12. Median of Two Sorted Arrays
**Problem:** Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

**Example:**
```
Input: nums1 = [1,3], nums2 = [2]
Output: 2.0
```

**Approach:**
1. Ensure nums1 is the smaller array
2. Perform binary search on nums1
3. For each partition of nums1, calculate the corresponding partition of nums2
4. Check if the partitions are correct (all elements on the left are smaller than all elements on the right)
5. If not, adjust the partition
6. Once the correct partition is found, calculate the median

**Solution:**
```java
public double findMedianSortedArrays(int[] nums1, int[] nums2) {
    // Ensure nums1 is the smaller array
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

### 13. First Missing Positive
**Problem:** Given an unsorted integer array nums, find the smallest missing positive integer.

**Example:**
```
Input: nums = [3,4,-1,1]
Output: 2
```

**Approach:**
1. For each number in the array, if it's positive and within the range [1, n], place it at its correct position (nums[i] should be at position nums[i]-1)
2. After rearranging, iterate through the array again
3. The first position i where nums[i] != i+1 is the answer
4. If all positions are correct, the answer is n+1

**Solution:**
```java
public int firstMissingPositive(int[] nums) {
    int n = nums.length;
    
    // Place each number at its correct position
    for (int i = 0; i < n; i++) {
        while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] != nums[i]) {
            // Swap nums[i] with nums[nums[i] - 1]
            int temp = nums[nums[i] - 1];
            nums[nums[i] - 1] = nums[i];
            nums[i] = temp;
        }
    }
    
    // Find the first missing positive
    for (int i = 0; i < n; i++) {
        if (nums[i] != i + 1) {
            return i + 1;
        }
    }
    
    // If all numbers are in correct positions, return n+1
    return n + 1;
}
```

**Time Complexity:** O(n)  
**Space Complexity:** O(1)

### 14. Sliding Window Maximum
**Problem:** Given an array nums and a sliding window of size k, find the maximum element in each window as the window slides from left to right.

**Example:**
```
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
```

**Approach:**
1. Use a deque to store indices of elements in the current window
2. Maintain the deque such that:
   - Elements outside the current window are removed
   - Elements smaller than the current element are removed (as they cannot be the maximum)
3. The front of the deque always contains the index of the maximum element in the current window
4. For each window, add the maximum element to the result

**Solution:**
```java
public int[] maxSlidingWindow(int[] nums, int k) {
    if (nums == null || nums.length == 0 || k <= 0) {
        return new int[0];
    }
    
    int n = nums.length;
    int[] result = new int[n - k + 1];
    Deque<Integer> deque = new ArrayDeque<>(); // Store indices
    
    for (int i = 0; i < n; i++) {
        // Remove elements outside the window
        while (!deque.isEmpty() && deque.peekFirst() < i - k + 1) {
            deque.pollFirst();
        }
        
        // Remove smaller elements
        while (!deque.isEmpty() && nums[deque.peekLast()] < nums[i]) {
            deque.pollLast();
        }
        
        deque.offerLast(i);
        
        // Add to result if window has k elements
        if (i >= k - 1) {
            result[i - k + 1] = nums[deque.peekFirst()];
        }
    }
    
    return result;
}
```

**Time Complexity:** O(n)  
**Space Complexity:** O(k)

### 15. Longest Consecutive Sequence
**Problem:** Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

**Example:**
```
Input: nums = [100,4,200,1,3,2]
Output: 4 (The longest consecutive elements sequence is [1, 2, 3, 4])
```

**Approach:**
1. Use a HashSet to store all elements for O(1) lookup
2. For each element, check if it's the start of a sequence (i.e., num-1 is not in the set)
3. If it is, count the length of the consecutive sequence starting from this element
4. Return the maximum length found

**Solution:**
```java
public int longestConsecutive(int[] nums) {
    if (nums == null || nums.length == 0) {
        return 0;
    }
    
    Set<Integer> numSet = new HashSet<>();
    for (int num : nums) {
        numSet.add(num);
    }
    
    int maxLength = 0;
    
    for (int num : numSet) {
        // Check if it's the start of a sequence
        if (!numSet.contains(num - 1)) {
            int currentNum = num;
            int currentLength = 1;
            
            // Count consecutive elements
            while (numSet.contains(currentNum + 1)) {
                currentNum++;
                currentLength++;
            }
            
            maxLength = Math.max(maxLength, currentLength);
        }
    }
    
    return maxLength;
}
```

**Time Complexity:** O(n)  
**Space Complexity:** O(n)

## Learning Strategy for Array Problems

1. **Start with the basics**: Understand array operations, traversal, and manipulation
2. **Master common patterns**: Two pointers, sliding window, prefix sum, Kadane's algorithm
3. **Practice by difficulty**: Begin with easy problems, then medium, then hard
4. **Analyze solutions**: Understand time and space complexity
5. **Implement from scratch**: Don't memorize solutions, understand the approach
6. **Review regularly**: Use spaced repetition to reinforce concepts

## Additional Resources

1. **Books**:
   - "Cracking the Coding Interview" by Gayle Laakmann McDowell
   - "Elements of Programming Interviews" by Adnan Aziz, Tsung-Hsien Lee, and Amit Prakash

2. **Online Platforms**:
   - LeetCode: Array section
   - GeeksforGeeks: Array data structure
   - HackerRank: Array challenges

3. **YouTube Channels**:
   - [mycodeschool](https://www.youtube.com/user/mycodeschool)
   - [Back To Back SWE](https://www.youtube.com/channel/UCmJz2DV1a3yfgrR7GqRtUUA)
   - [Abdul Bari](https://www.youtube.com/channel/UCZCFT11CWBi3MHNlGf019nw)
   - [Striver (takeUforward)](https://www.youtube.com/c/takeUforward)

4. **Visualization Tools**:
   - [VisuAlgo](https://visualgo.net/en/array)
   - [Algorithm Visualizer](https://algorithm-visualizer.org/)