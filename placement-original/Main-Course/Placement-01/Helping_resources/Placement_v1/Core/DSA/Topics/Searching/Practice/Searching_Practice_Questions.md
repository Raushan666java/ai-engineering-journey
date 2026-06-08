# Searching Algorithms: Practice Questions

## Easy Level Questions

### 1. Binary Search
**Problem**: Implement binary search to find a target element in a sorted array.

```java
public int binarySearch(int[] nums, int target) {
    int left = 0, right = nums.length - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}
```

**LeetCode**: [704. Binary Search](https://leetcode.com/problems/binary-search/)

### 2. First Bad Version
**Problem**: You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad. Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

```java
public int firstBadVersion(int n) {
    int left = 1, right = n;
    
    while (left < right) {
        int mid = left + (right - left) / 2;
        
        if (isBadVersion(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
}
```

**LeetCode**: [278. First Bad Version](https://leetcode.com/problems/first-bad-version/)

### 3. Search Insert Position
**Problem**: Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

```java
public int searchInsert(int[] nums, int target) {
    int left = 0, right = nums.length - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return left;
}
```

**LeetCode**: [35. Search Insert Position](https://leetcode.com/problems/search-insert-position/)

### 4. Guess Number Higher or Lower
**Problem**: We are playing the Guess Game. The game is as follows: I pick a number from 1 to n. You have to guess which number I picked. Every time you guess wrong, I'll tell you whether the number is higher or lower.

```java
public int guessNumber(int n) {
    int left = 1, right = n;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        int result = guess(mid);
        
        if (result == 0) {
            return mid;
        } else if (result == -1) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return -1;
}
```

**LeetCode**: [374. Guess Number Higher or Lower](https://leetcode.com/problems/guess-number-higher-or-lower/)

### 5. Valid Perfect Square
**Problem**: Given a positive integer num, write a function which returns True if num is a perfect square else False.

```java
public boolean isPerfectSquare(int num) {
    if (num < 2) return true;
    
    long left = 2, right = num / 2;
    
    while (left <= right) {
        long mid = left + (right - left) / 2;
        long square = mid * mid;
        
        if (square == num) {
            return true;
        } else if (square < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return false;
}
```

**LeetCode**: [367. Valid Perfect Square](https://leetcode.com/problems/valid-perfect-square/)

## Medium Level Questions

### 6. Search in Rotated Sorted Array
**Problem**: Given a rotated sorted array and a target value, return the index if the target is found. If not, return -1.

```java
public int search(int[] nums, int target) {
    int left = 0, right = nums.length - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (nums[mid] == target) {
            return mid;
        }
        
        // Check if left half is sorted
        if (nums[left] <= nums[mid]) {
            // Check if target is in left half
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            // Right half is sorted
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    
    return -1;
}
```

**LeetCode**: [33. Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)

### 7. Find First and Last Position of Element in Sorted Array
**Problem**: Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

```java
public int[] searchRange(int[] nums, int target) {
    int[] result = {-1, -1};
    
    // Find first occurrence
    int left = 0, right = nums.length - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (nums[mid] == target) {
            result[0] = mid;
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    // If target not found, return [-1, -1]
    if (result[0] == -1) {
        return result;
    }
    
    // Find last occurrence
    left = 0;
    right = nums.length - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (nums[mid] == target) {
            result[1] = mid;
            left = mid + 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return result;
}
```

**LeetCode**: [34. Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)

### 8. Find Peak Element
**Problem**: A peak element is an element that is strictly greater than its neighbors. Given an integer array nums, find a peak element, and return its index.

```java
public int findPeakElement(int[] nums) {
    int left = 0, right = nums.length - 1;
    
    while (left < right) {
        int mid = left + (right - left) / 2;
        
        if (nums[mid] > nums[mid + 1]) {
            // Peak is in left half (including mid)
            right = mid;
        } else {
            // Peak is in right half
            left = mid + 1;
        }
    }
    
    return left;
}
```

**LeetCode**: [162. Find Peak Element](https://leetcode.com/problems/find-peak-element/)

### 9. Search a 2D Matrix
**Problem**: Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties: Integers in each row are sorted from left to right. The first integer of each row is greater than the last integer of the previous row.

```java
public boolean searchMatrix(int[][] matrix, int target) {
    if (matrix == null || matrix.length == 0) {
        return false;
    }
    
    int rows = matrix.length;
    int cols = matrix[0].length;
    
    int left = 0, right = rows * cols - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        int midValue = matrix[mid / cols][mid % cols];
        
        if (midValue == target) {
            return true;
        } else if (midValue < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return false;
}
```

**LeetCode**: [74. Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/)

### 10. Find Minimum in Rotated Sorted Array
**Problem**: Suppose an array of length n sorted in ascending order is rotated between 1 and n times. Find the minimum element.

```java
public int findMin(int[] nums) {
    int left = 0, right = nums.length - 1;
    
    while (left < right) {
        int mid = left + (right - left) / 2;
        
        if (nums[mid] > nums[right]) {
            // Minimum is in the right half
            left = mid + 1;
        } else {
            // Minimum is in the left half (including mid)
            right = mid;
        }
    }
    
    return nums[left];
}
```

**LeetCode**: [153. Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)

## Hard Level Questions

### 11. Median of Two Sorted Arrays
**Problem**: Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

```java
public double findMedianSortedArrays(int[] nums1, int[] nums2) {
    // Ensure nums1 is the smaller array
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }
    
    int x = nums1.length;
    int y = nums2.length;
    int low = 0, high = x;
    
    while (low <= high) {
        int partitionX = (low + high) / 2;
        int partitionY = (x + y + 1) / 2 - partitionX;
        
        int maxX = (partitionX == 0) ? Integer.MIN_VALUE : nums1[partitionX - 1];
        int minX = (partitionX == x) ? Integer.MAX_VALUE : nums1[partitionX];
        
        int maxY = (partitionY == 0) ? Integer.MIN_VALUE : nums2[partitionY - 1];
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

**LeetCode**: [4. Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/)

### 12. Split Array Largest Sum
**Problem**: Given an array nums which consists of non-negative integers and an integer m, you can split the array into m non-empty continuous subarrays. Write an algorithm to minimize the largest sum among these m subarrays.

```java
public int splitArray(int[] nums, int m) {
    int left = 0, right = 0;
    
    // Find the range for binary search
    for (int num : nums) {
        left = Math.max(left, num);
        right += num;
    }
    
    // Binary search on the sum range
    while (left < right) {
        int mid = left + (right - left) / 2;
        
        if (canSplit(nums, mid, m)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
}

private boolean canSplit(int[] nums, int maxSum, int m) {
    int count = 1;
    int sum = 0;
    
    for (int num : nums) {
        sum += num;
        
        if (sum > maxSum) {
            count++;
            sum = num;
            
            if (count > m) {
                return false;
            }
        }
    }
    
    return true;
}
```

**LeetCode**: [410. Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/)

### 13. Count of Range Sum
**Problem**: Given an integer array nums and two integers lower and upper, return the number of range sums that lie in [lower, upper] inclusive.

```java
public int countRangeSum(int[] nums, int lower, int upper) {
    int n = nums.length;
    long[] sums = new long[n + 1];
    
    // Calculate prefix sums
    for (int i = 0; i < n; i++) {
        sums[i + 1] = sums[i] + nums[i];
    }
    
    return countMergeSort(sums, 0, n, lower, upper);
}

private int countMergeSort(long[] sums, int start, int end, int lower, int upper) {
    if (start >= end) return 0;
    
    int mid = start + (end - start) / 2;
    int count = countMergeSort(sums, start, mid, lower, upper) + 
                countMergeSort(sums, mid + 1, end, lower, upper);
    
    int j = mid + 1, k = mid + 1;
    for (int i = start; i <= mid; i++) {
        // Find the range [j, k) where sums[j] - sums[i] >= lower and sums[k] - sums[i] > upper
        while (j <= end && sums[j] - sums[i] < lower) j++;
        while (k <= end && sums[k] - sums[i] <= upper) k++;
        count += k - j;
    }
    
    // Merge the two sorted halves
    merge(sums, start, mid, end);
    
    return count;
}

private void merge(long[] sums, int start, int mid, int end) {
    long[] temp = new long[end - start + 1];
    int i = start, j = mid + 1, k = 0;
    
    while (i <= mid && j <= end) {
        if (sums[i] <= sums[j]) {
            temp[k++] = sums[i++];
        } else {
            temp[k++] = sums[j++];
        }
    }
    
    while (i <= mid) temp[k++] = sums[i++];
    while (j <= end) temp[k++] = sums[j++];
    
    for (i = 0; i < temp.length; i++) {
        sums[start + i] = temp[i];
    }
}
```

**LeetCode**: [327. Count of Range Sum](https://leetcode.com/problems/count-of-range-sum/)

### 14. Kth Smallest Element in a Sorted Matrix
**Problem**: Given an n x n matrix where each row and column is sorted in ascending order, return the kth smallest element in the matrix.

```java
public int kthSmallest(int[][] matrix, int k) {
    int n = matrix.length;
    int left = matrix[0][0];
    int right = matrix[n-1][n-1];
    
    while (left < right) {
        int mid = left + (right - left) / 2;
        int count = countLessEqual(matrix, mid);
        
        if (count < k) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    
    return left;
}

private int countLessEqual(int[][] matrix, int target) {
    int count = 0;
    int n = matrix.length;
    int row = 0;
    int col = n - 1;
    
    while (row < n && col >= 0) {
        if (matrix[row][col] <= target) {
            count += col + 1; // Count all elements in this row up to col
            row++;
        } else {
            col--;
        }
    }
    
    return count;
}
```

**LeetCode**: [378. Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/)

### 15. Count of Smaller Numbers After Self
**Problem**: Given an integer array nums, return an integer array counts where counts[i] is the number of smaller elements to the right of nums[i].

```java
public List<Integer> countSmaller(int[] nums) {
    int n = nums.length;
    Integer[] result = new Integer[n];
    Arrays.fill(result, 0);
    
    // Create pairs of (value, index)
    int[][] pairs = new int[n][2];
    for (int i = 0; i < n; i++) {
        pairs[i][0] = nums[i];
        pairs[i][1] = i;
    }
    
    mergeSort(pairs, 0, n - 1, result);
    
    return Arrays.asList(result);
}

private void mergeSort(int[][] pairs, int start, int end, Integer[] result) {
    if (start >= end) return;
    
    int mid = start + (end - start) / 2;
    mergeSort(pairs, start, mid, result);
    mergeSort(pairs, mid + 1, end, result);
    
    merge(pairs, start, mid, end, result);
}

private void merge(int[][] pairs, int start, int mid, int end, Integer[] result) {
    int[][] temp = new int[end - start + 1][2];
    int i = start, j = mid + 1, k = 0;
    
    while (i <= mid && j <= end) {
        if (pairs[i][0] <= pairs[j][0]) {
            // Count smaller elements to the right
            result[pairs[i][1]] += j - (mid + 1);
            temp[k++] = pairs[i++];
        } else {
            temp[k++] = pairs[j++];
        }
    }
    
    while (i <= mid) {
        // Count remaining smaller elements
        result[pairs[i][1]] += j - (mid + 1);
        temp[k++] = pairs[i++];
    }
    
    while (j <= end) {
        temp[k++] = pairs[j++];
    }
    
    for (i = 0; i < temp.length; i++) {
        pairs[start + i] = temp[i];
    }
}
```

**LeetCode**: [315. Count of Smaller Numbers After Self](https://leetcode.com/problems/count-of-smaller-numbers-after-self/)