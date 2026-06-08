# Searching Algorithms

## Overview
Searching algorithms are designed to retrieve information stored within some data structure. These algorithms are fundamental to computer science and are used in many applications.

## Algorithms

### 1. Linear Search
**Description**: Sequentially checks each element of the list until a match is found or the whole list has been searched.

**Implementation**:
```java
public int linearSearch(int[] arr, int target) {
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1; // Element not found
}
```

**Time Complexity**: O(n)  
**Space Complexity**: O(1)  
**Best for**: Small arrays or unsorted arrays

### 2. Binary Search
**Description**: Finds the position of a target value within a sorted array by repeatedly dividing the search interval in half.

**Implementation**:
```java
public int binarySearch(int[] arr, int target) {
    int left = 0, right = arr.length - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target) {
            return mid;
        }
        
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1; // Element not found
}
```

**Time Complexity**: O(log n)  
**Space Complexity**: O(1) for iterative, O(log n) for recursive  
**Best for**: Sorted arrays

### 3. Ternary Search
**Description**: Similar to binary search but divides the array into three parts instead of two.

**Implementation**:
```java
public int ternarySearch(int[] arr, int target) {
    int left = 0, right = arr.length - 1;
    
    while (left <= right) {
        int mid1 = left + (right - left) / 3;
        int mid2 = right - (right - left) / 3;
        
        if (arr[mid1] == target) {
            return mid1;
        }
        
        if (arr[mid2] == target) {
            return mid2;
        }
        
        if (target < arr[mid1]) {
            right = mid1 - 1;
        } else if (target > arr[mid2]) {
            left = mid2 + 1;
        } else {
            left = mid1 + 1;
            right = mid2 - 1;
        }
    }
    
    return -1; // Element not found
}
```

**Time Complexity**: O(log₃ n)  
**Space Complexity**: O(1)  
**Best for**: Sorted arrays when comparison is expensive

### 4. Jump Search
**Description**: Works by jumping ahead by fixed steps and then performing a linear search.

**Implementation**:
```java
public int jumpSearch(int[] arr, int target) {
    int n = arr.length;
    int step = (int) Math.sqrt(n);
    int prev = 0;
    
    // Finding the block where element may be present
    while (arr[Math.min(step, n) - 1] < target) {
        prev = step;
        step += (int) Math.sqrt(n);
        if (prev >= n) {
            return -1;
        }
    }
    
    // Linear search in the identified block
    while (arr[prev] < target) {
        prev++;
        if (prev == Math.min(step, n)) {
            return -1;
        }
    }
    
    if (arr[prev] == target) {
        return prev;
    }
    
    return -1; // Element not found
}
```

**Time Complexity**: O(√n)  
**Space Complexity**: O(1)  
**Best for**: Sorted arrays when binary search is too complex to implement

### 5. Exponential Search
**Description**: Works by finding a range where the element might be present and then performing a binary search within that range.

**Implementation**:
```java
public int exponentialSearch(int[] arr, int target) {
    int n = arr.length;
    
    // If element is at the first position
    if (arr[0] == target) {
        return 0;
    }
    
    // Find range for binary search
    int i = 1;
    while (i < n && arr[i] <= target) {
        i *= 2;
    }
    
    // Perform binary search in the identified range
    return binarySearch(arr, target, i / 2, Math.min(i, n - 1));
}

private int binarySearch(int[] arr, int target, int left, int right) {
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target) {
            return mid;
        }
        
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1; // Element not found
}
```

**Time Complexity**: O(log n)  
**Space Complexity**: O(1)  
**Best for**: Unbounded/infinite arrays

## Problem-Solving Patterns

### 1. Binary Search Variations
- **Finding First or Last Occurrence**:
  ```java
  public int findFirstOccurrence(int[] arr, int target) {
      int left = 0, right = arr.length - 1;
      int result = -1;
      
      while (left <= right) {
          int mid = left + (right - left) / 2;
          
          if (arr[mid] == target) {
              result = mid;
              right = mid - 1; // Continue searching left
          } else if (arr[mid] < target) {
              left = mid + 1;
          } else {
              right = mid - 1;
          }
      }
      
      return result;
  }
  ```

- **Search in Rotated Sorted Array**:
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

- **Search in 2D Matrix**:
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

### 2. When to Use Each Algorithm

| Algorithm | Time Complexity | Space Complexity | Best Used When |
|-----------|----------------|-----------------|---------------|
| Linear Search | O(n) | O(1) | Small arrays or unsorted arrays |
| Binary Search | O(log n) | O(1) | Sorted arrays |
| Ternary Search | O(log₃ n) | O(1) | Sorted arrays with expensive comparisons |
| Jump Search | O(√n) | O(1) | Sorted arrays when binary search is too complex |
| Exponential Search | O(log n) | O(1) | Unbounded/infinite sorted arrays |

### 3. Common Mistakes and Optimizations

1. **Off-by-one errors**: Be careful with the boundary conditions in binary search.
2. **Integer overflow**: Use `left + (right - left) / 2` instead of `(left + right) / 2`.
3. **Infinite loops**: Ensure that the search space is reduced in each iteration.
4. **Handling duplicates**: Consider how to handle duplicates in the array.
5. **Recursive vs. Iterative**: Iterative implementations are generally more efficient in terms of space complexity.

## Practice Problems

1. [Binary Search](https://leetcode.com/problems/binary-search/)
2. [First Bad Version](https://leetcode.com/problems/first-bad-version/)
3. [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)
4. [Find Peak Element](https://leetcode.com/problems/find-peak-element/)
5. [Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/)
6. [Kth Smallest Element in a Sorted Matrix](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/)
7. [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)
8. [Search Insert Position](https://leetcode.com/problems/search-insert-position/)
9. [Count of Smaller Numbers After Self](https://leetcode.com/problems/count-of-smaller-numbers-after-self/)
10. [Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/)