# Arrays: Comprehensive Notes

## 1. Introduction to Arrays

An array is a collection of elements of the same type stored at contiguous memory locations. It is the simplest data structure where each element can be accessed directly using its index.

### Key Characteristics
- Fixed size (in most languages)
- Homogeneous elements (same data type)
- Contiguous memory allocation
- Random access (O(1) time complexity)

### Memory Representation
```
Index:  0   1   2   3   4
       ┌───┬───┬───┬───┬───┐
Value: │ 10│ 20│ 30│ 40│ 50│
       └───┴───┴───┴───┴───┘
Memory: 1000 1004 1008 1012 1016 (assuming 4-byte integers)
```

## 2. Types of Arrays

### One-Dimensional Arrays
```java
// Declaration and initialization
int[] arr = new int[5];  // Declaration with size
int[] arr = {1, 2, 3, 4, 5};  // Declaration with initialization
```

### Multi-Dimensional Arrays
```java
// 2D array
int[][] matrix = new int[3][4];  // 3 rows, 4 columns
int[][] matrix = {
    {1, 2, 3, 4},
    {5, 6, 7, 8},
    {9, 10, 11, 12}
};

// 3D array
int[][][] cube = new int[3][3][3];
```

## 3. Basic Operations

### Insertion
- **At the end (if space available)**: O(1)
- **At a specific position**: O(n) - requires shifting elements

```java
// Insert at index i
public void insertAt(int[] arr, int n, int i, int x) {
    // n is current size, x is element to insert
    if (n >= arr.length) return;  // Array is full
    
    // Shift elements to the right
    for (int j = n - 1; j >= i; j--) {
        arr[j + 1] = arr[j];
    }
    
    arr[i] = x;  // Insert element
}
```

### Deletion
- **From the end**: O(1)
- **From a specific position**: O(n) - requires shifting elements

```java
// Delete from index i
public void deleteAt(int[] arr, int n, int i) {
    // n is current size
    if (i >= n) return;  // Invalid index
    
    // Shift elements to the left
    for (int j = i; j < n - 1; j++) {
        arr[j] = arr[j + 1];
    }
}
```

### Traversal
- **Linear traversal**: O(n)

```java
// Traverse array
public void traverse(int[] arr) {
    for (int i = 0; i < arr.length; i++) {
        System.out.print(arr[i] + " ");
    }
}
```

### Search
- **Linear search**: O(n)
- **Binary search** (for sorted arrays): O(log n)

```java
// Linear search
public int linearSearch(int[] arr, int x) {
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] == x) return i;
    }
    return -1;  // Element not found
}

// Binary search
public int binarySearch(int[] arr, int x) {
    int left = 0, right = arr.length - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == x) return mid;
        if (arr[mid] < x) left = mid + 1;
        else right = mid - 1;
    }
    
    return -1;  // Element not found
}
```

## 4. Advanced Array Techniques

### Two Pointer Technique
Used for searching pairs in a sorted array, container with most water, etc.

```java
// Find pair with sum equal to target in sorted array
public int[] twoSum(int[] nums, int target) {
    int left = 0, right = nums.length - 1;
    
    while (left < right) {
        int sum = nums[left] + nums[right];
        
        if (sum == target) return new int[]{left, right};
        if (sum < target) left++;
        else right--;
    }
    
    return new int[]{-1, -1};  // No solution found
}
```

### Sliding Window
Used for problems involving subarrays or substring operations.

```java
// Find maximum sum subarray of size k
public int maxSumSubarray(int[] arr, int k) {
    int n = arr.length;
    if (n < k) return -1;
    
    // Compute sum of first window
    int maxSum = 0;
    for (int i = 0; i < k; i++) {
        maxSum += arr[i];
    }
    
    // Compute sum of remaining windows
    int windowSum = maxSum;
    for (int i = k; i < n; i++) {
        windowSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }
    
    return maxSum;
}
```

### Prefix Sum
Used for range sum queries and finding subarrays with specific properties.

```java
// Build prefix sum array
public int[] buildPrefixSum(int[] arr) {
    int n = arr.length;
    int[] prefixSum = new int[n];
    
    prefixSum[0] = arr[0];
    for (int i = 1; i < n; i++) {
        prefixSum[i] = prefixSum[i - 1] + arr[i];
    }
    
    return prefixSum;
}

// Query sum of range [l, r]
public int rangeSum(int[] prefixSum, int l, int r) {
    if (l == 0) return prefixSum[r];
    return prefixSum[r] - prefixSum[l - 1];
}
```

### Kadane's Algorithm
Used for maximum subarray sum problems.

```java
// Find maximum subarray sum
public int maxSubarraySum(int[] arr) {
    int maxSoFar = arr[0];
    int maxEndingHere = arr[0];
    
    for (int i = 1; i < arr.length; i++) {
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    
    return maxSoFar;
}
```

## 5. Common Array Problems and Patterns

### Pattern 1: Two Sum Pattern
```java
// Two Sum using HashMap
public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        if (map.containsKey(complement)) {
            return new int[]{map.get(complement), i};
        }
        map.put(nums[i], i);
    }
    
    return new int[]{-1, -1};  // No solution found
}
```

### Pattern 2: Dutch National Flag Problem
```java
// Sort array of 0s, 1s, and 2s
public void sortColors(int[] nums) {
    int low = 0, mid = 0, high = nums.length - 1;
    
    while (mid <= high) {
        switch (nums[mid]) {
            case 0:
                swap(nums, low++, mid++);
                break;
            case 1:
                mid++;
                break;
            case 2:
                swap(nums, mid, high--);
                break;
        }
    }
}

private void swap(int[] nums, int i, int j) {
    int temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}
```

### Pattern 3: Merge Intervals
```java
// Merge overlapping intervals
public int[][] merge(int[][] intervals) {
    if (intervals.length <= 1) return intervals;
    
    // Sort by start time
    Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
    
    List<int[]> result = new ArrayList<>();
    int[] currentInterval = intervals[0];
    result.add(currentInterval);
    
    for (int[] interval : intervals) {
        // If current interval overlaps with the last merged interval
        if (interval[0] <= currentInterval[1]) {
            // Update end time of current interval if needed
            currentInterval[1] = Math.max(currentInterval[1], interval[1]);
        } else {
            // Add as a new interval
            currentInterval = interval;
            result.add(currentInterval);
        }
    }
    
    return result.toArray(new int[result.size()][]);
}
```

### Pattern 4: Rotate Array
```java
// Rotate array to the right by k steps
public void rotate(int[] nums, int k) {
    int n = nums.length;
    k %= n;  // Handle case where k > n
    
    // Reverse the entire array
    reverse(nums, 0, n - 1);
    // Reverse the first k elements
    reverse(nums, 0, k - 1);
    // Reverse the remaining elements
    reverse(nums, k, n - 1);
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

## 6. Time and Space Complexity

| Operation | Time Complexity | Space Complexity |
|-----------|----------------|-----------------|
| Access    | O(1)           | -               |
| Search    | O(n)           | O(1)            |
| Binary Search (sorted) | O(log n) | O(1)    |
| Insertion | O(n)           | O(1)            |
| Deletion  | O(n)           | O(1)            |
| Traversal | O(n)           | O(1)            |

## 7. Best Practices

1. **Always check array bounds** to prevent IndexOutOfBoundsException
2. **Consider edge cases**: empty array, single element, duplicate elements
3. **Use appropriate search algorithm**: linear search for unsorted, binary search for sorted
4. **Optimize space**: in-place operations when possible
5. **Consider time complexity**: choose the most efficient algorithm for the problem

## 8. Learning Strategy for Arrays

1. **Master the basics**: array declaration, initialization, traversal
2. **Understand common patterns**: two pointers, sliding window, prefix sum
3. **Practice problems by category**: start with easy problems, then medium, then hard
4. **Analyze solutions**: understand time and space complexity
5. **Implement from scratch**: don't memorize solutions, understand the approach

## 9. Common Interview Questions

1. Find the missing number in an array containing n distinct numbers from 0 to n
2. Find the duplicate number in an array
3. Find the largest sum contiguous subarray
4. Merge two sorted arrays
5. Rotate an array by k steps
6. Find the majority element
7. Find the intersection of two arrays
8. Move all zeros to the end while maintaining the order of non-zero elements
9. Find the equilibrium index of an array
10. Find the peak element in an array

## 10. Advanced Topics

1. **Sparse Arrays**: Arrays with many zero or default values
2. **Dynamic Arrays**: Arrays that can resize themselves (like ArrayList in Java)
3. **Jagged Arrays**: Arrays with variable row lengths
4. **Matrix Operations**: Transpose, rotation, spiral traversal
5. **Subarray Problems**: Maximum subarray sum, subarray with given sum

## Resources for Further Learning

1. **Books**:
   - "Introduction to Algorithms" by CLRS
   - "Cracking the Coding Interview" by Gayle Laakmann McDowell

2. **Online Platforms**:
   - LeetCode: Array section
   - GeeksforGeeks: Array data structure
   - HackerRank: Array challenges

3. **YouTube Channels**:
   - mycodeschool
   - Back To Back SWE
   - Abdul Bari
   - Striver (takeUforward)

4. **Visualization Tools**:
   - VisuAlgo: https://visualgo.net/en/array
   - Algorithm Visualizer: https://algorithm-visualizer.org/