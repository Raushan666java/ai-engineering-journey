# Arrays - Quick Concepts Guide

## 📚 Core Concepts

### Array Fundamentals
Arrays are contiguous blocks of memory storing elements of the same data type. Key characteristics:

```java
// Declaration and initialization
int[] arr = new int[5];           // Size 5, all elements 0
int[] arr2 = {1, 2, 3, 4, 5};    // Size 5, initialized values
int[] arr3 = new int[]{1, 2, 3}; // Anonymous array

// Common operations
int length = arr.length;          // Property, not method
Arrays.fill(arr, 42);            // Fill with value
int[] copy = Arrays.copyOf(arr, 10); // Resize array
```

### Time & Space Complexity
- **Access by index**: O(1)
- **Search (unsorted)**: O(n)
- **Search (sorted)**: O(log n)
- **Insertion/Deletion**: O(n) worst case
- **Space**: O(n) contiguous memory

## 🔍 Search Algorithms

### Linear Search
```java
public int linearSearch(int[] arr, int target) {
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] == target) return i;
    }
    return -1;
}
// Time: O(n), Space: O(1)
```

### Binary Search (Sorted Array)
```java
public int binarySearch(int[] arr, int target) {
    int left = 0, right = arr.length - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    return -1;
}
// Time: O(log n), Space: O(1)
```

### Search in Rotated Sorted Array
```java
public int searchRotated(int[] nums, int target) {
    int left = 0, right = nums.length - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (nums[mid] == target) return mid;

        // Left half is sorted
        if (nums[left] <= nums[mid]) {
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        // Right half is sorted
        else {
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
}
```

## 🏃‍♂️ Two Pointers Technique

### Opposite Direction (Two Sum)
```java
public int[] twoSum(int[] nums, int target) {
    int[] sorted = Arrays.copyOf(nums, nums.length);
    Arrays.sort(sorted);

    int left = 0, right = sorted.length - 1;

    while (left < right) {
        int sum = sorted[left] + sorted[right];

        if (sum == target) {
            // Find original indices
            return findIndices(nums, sorted[left], sorted[right]);
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return new int[]{-1, -1};
}
```

### Same Direction (Remove Duplicates)
```java
public int removeDuplicates(int[] nums) {
    if (nums.length == 0) return 0;

    int i = 0; // Slow pointer

    for (int j = 1; j < nums.length; j++) { // Fast pointer
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }

    return i + 1;
}
// Time: O(n), Space: O(1)
```

### Container With Most Water
```java
public int maxArea(int[] height) {
    int left = 0, right = height.length - 1;
    int maxArea = 0;

    while (left < right) {
        int width = right - left;
        int h = Math.min(height[left], height[right]);
        maxArea = Math.max(maxArea, width * h);

        // Move the shorter line inward
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}
```

## 🪟 Sliding Window Technique

### Fixed Size Window
```java
public double[] findAverages(int[] arr, int k) {
    double[] result = new double[arr.length - k + 1];
    double windowSum = 0;

    // Initialize first window
    for (int i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    result[0] = windowSum / k;

    // Slide the window
    for (int i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k];
        result[i - k + 1] = windowSum / k;
    }

    return result;
}
```

### Variable Size Window (Longest Substring)
```java
public int lengthOfLongestSubstring(String s) {
    Set<Character> set = new HashSet<>();
    int left = 0, maxLength = 0;

    for (int right = 0; right < s.length(); right++) {
        // Remove duplicates by moving left pointer
        while (set.contains(s.charAt(right))) {
            set.remove(s.charAt(left));
            left++;
        }

        set.add(s.charAt(right));
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}
```

## ⚡ Kadane's Algorithm (Maximum Subarray Sum)

### Standard Kadane's
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
// Time: O(n), Space: O(1)
```

### With Indices
```java
public int[] maxSubArrayWithIndices(int[] nums) {
    int maxSum = Integer.MIN_VALUE;
    int currentSum = 0;
    int start = 0, end = 0, tempStart = 0;

    for (int i = 0; i < nums.length; i++) {
        currentSum += nums[i];

        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }

        if (currentSum < 0) {
            currentSum = 0;
            tempStart = i + 1;
        }
    }

    return new int[]{start, end, maxSum};
}
```

## 🔢 Prefix Sum Technique

### Range Sum Queries
```java
public class NumArray {
    private int[] prefixSum;

    public NumArray(int[] nums) {
        prefixSum = new int[nums.length + 1];

        for (int i = 1; i <= nums.length; i++) {
            prefixSum[i] = prefixSum[i - 1] + nums[i - 1];
        }
    }

    public int sumRange(int left, int right) {
        return prefixSum[right + 1] - prefixSum[left];
    }
}
// Preprocessing: O(n), Query: O(1)
```

### Subarray Sum Equals K
```java
public int subarraySum(int[] nums, int k) {
    Map<Integer, Integer> prefixCount = new HashMap<>();
    prefixCount.put(0, 1); // Base case

    int prefixSum = 0, count = 0;

    for (int num : nums) {
        prefixSum += num;

        // Check if (prefixSum - k) exists
        if (prefixCount.containsKey(prefixSum - k)) {
            count += prefixCount.get(prefixSum - k);
        }

        prefixCount.put(prefixSum, prefixCount.getOrDefault(prefixSum, 0) + 1);
    }

    return count;
}
// Time: O(n), Space: O(n)
```

## 🔄 Array Rotation

### Using Extra Space
```java
public void rotate(int[] nums, int k) {
    int n = nums.length;
    k = k % n;

    int[] temp = new int[n];

    // Copy rotated elements
    for (int i = 0; i < n; i++) {
        temp[(i + k) % n] = nums[i];
    }

    // Copy back
    System.arraycopy(temp, 0, nums, 0, n);
}
// Time: O(n), Space: O(n)
```

### In-place Rotation (Reversal Algorithm)
```java
public void rotateInPlace(int[] nums, int k) {
    int n = nums.length;
    k = k % n;

    // Reverse entire array
    reverse(nums, 0, n - 1);

    // Reverse first k elements
    reverse(nums, 0, k - 1);

    // Reverse remaining elements
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
// Time: O(n), Space: O(1)
```

## 📐 Matrix Operations

### Spiral Traversal
```java
public List<Integer> spiralOrder(int[][] matrix) {
    List<Integer> result = new ArrayList<>();

    if (matrix.length == 0) return result;

    int top = 0, bottom = matrix.length - 1;
    int left = 0, right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        // Traverse right
        for (int j = left; j <= right; j++) {
            result.add(matrix[top][j]);
        }
        top++;

        // Traverse down
        for (int i = top; i <= bottom; i++) {
            result.add(matrix[i][right]);
        }
        right--;

        // Traverse left (if necessary)
        if (top <= bottom) {
            for (int j = right; j >= left; j--) {
                result.add(matrix[bottom][j]);
            }
            bottom--;
        }

        // Traverse up (if necessary)
        if (left <= right) {
            for (int i = bottom; i >= top; i--) {
                result.add(matrix[i][left]);
            }
            left++;
        }
    }

    return result;
}
```

### Rotate Matrix 90 Degrees
```java
public void rotate(int[][] matrix) {
    int n = matrix.length;

    // Transpose the matrix
    for (int i = 0; i < n; i++) {
        for (int j = i; j < n; j++) {
            int temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    // Reverse each row
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n / 2; j++) {
            int temp = matrix[i][j];
            matrix[i][j] = matrix[i][n - 1 - j];
            matrix[i][n - 1 - j] = temp;
        }
    }
}
// Time: O(n²), Space: O(1)
```

## 🎯 Common Interview Patterns

### 1. Dutch National Flag (Sort 0s, 1s, 2s)
```java
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
```

### 2. Find Missing Number
```java
public int missingNumber(int[] nums) {
    int n = nums.length;
    int expectedSum = n * (n + 1) / 2;
    int actualSum = 0;

    for (int num : nums) {
        actualSum += num;
    }

    return expectedSum - actualSum;
}
// Time: O(n), Space: O(1)
```

### 3. Majority Element (> n/2)
```java
public int majorityElement(int[] nums) {
    int candidate = nums[0];
    int count = 1;

    // Find candidate
    for (int i = 1; i < nums.length; i++) {
        if (count == 0) {
            candidate = nums[i];
            count = 1;
        } else if (nums[i] == candidate) {
            count++;
        } else {
            count--;
        }
    }

    return candidate;
}
// Time: O(n), Space: O(1)
```

## 🚨 Edge Cases & Pitfalls

### Common Mistakes
1. **Off-by-one errors**: Array indices start at 0
2. **Empty arrays**: Always check `length == 0`
3. **Single element**: Handle n=1 cases
4. **Integer overflow**: Use `long` for sums
5. **Negative indices**: Ensure indices >= 0

### Test Cases to Consider
```java
// Edge cases
int[] empty = {};
int[] single = {42};
int[] duplicates = {1, 1, 1, 1};
int[] negatives = {-1, -2, -3};
int[] mixed = {-2, 1, -3, 4, -1, 2, 1, -5, 4};

// Boundary conditions
int[] maxSize = new int[100000]; // Large arrays
int[] allZeros = new int[1000];
int[] sorted = {1, 2, 3, 4, 5};
int[] reverseSorted = {5, 4, 3, 2, 1};
```

## 📊 Complexity Analysis

| Operation | Time | Space | Notes |
|-----------|------|-------|-------|
| Access by index | O(1) | O(1) | Direct memory access |
| Linear search | O(n) | O(1) | Worst case: not found |
| Binary search | O(log n) | O(1) | Requires sorted array |
| Insertion (end) | O(1) | O(1) | Amortized for dynamic arrays |
| Insertion (middle) | O(n) | O(1) | Shift elements |
| Deletion | O(n) | O(1) | Shift elements |
| Traversal | O(n) | O(1) | Visit each element |

## 🎨 Problem-Solving Framework

### Step-by-Step Approach
1. **Understand the problem**: Input/output, constraints, edge cases
2. **Choose data structure**: Array, list, or other?
3. **Identify pattern**: Two pointers, sliding window, prefix sum?
4. **Handle edge cases**: Empty, single element, large inputs
5. **Implement efficiently**: Optimal time/space complexity
6. **Test thoroughly**: Multiple test cases, boundary conditions

### Optimization Checklist
- [ ] Can I use two pointers instead of nested loops?
- [ ] Is there a sliding window solution?
- [ ] Should I use prefix sums for range queries?
- [ ] Can I sort the array first?
- [ ] Is there a mathematical formula I can use?
- [ ] Can I solve it in-place to save space?

Master these patterns and you'll solve most array problems efficiently! 🚀