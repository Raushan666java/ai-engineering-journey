# Searching Algorithms: Comprehensive Notes

## 1. Introduction to Searching

Searching is the process of finding a specific element within a collection of elements. Efficient searching is crucial for many applications and is a fundamental operation in computer science.

### Key Considerations
- **Data Structure**: The choice of searching algorithm depends on the data structure
- **Sorted vs Unsorted**: Different algorithms work best for different scenarios
- **Time and Space Complexity**: Trade-offs between efficiency and memory usage
- **Frequency of Operations**: How often searching is performed relative to other operations

## 2. Types of Searching Algorithms

### Linear Search
**Description**: Sequentially checks each element until finding a match or reaching the end.

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

### Binary Search
**Description**: Finds the position of a target value within a sorted array by repeatedly dividing the search interval in half.

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

### Ternary Search
**Description**: Similar to binary search but divides the array into three parts instead of two.

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

### Jump Search
**Description**: Works by jumping ahead by fixed steps and then performing a linear search.

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

### Exponential Search
**Description**: Works by finding a range where the element might be present and then performing a binary search within that range.

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

## 3. Advanced Binary Search Techniques

### Finding First or Last Occurrence
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

public int findLastOccurrence(int[] arr, int target) {
    int left = 0, right = arr.length - 1;
    int result = -1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target) {
            result = mid;
            left = mid + 1; // Continue searching right
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return result;
}
```

### Search in Rotated Sorted Array
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

### Search in 2D Matrix
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

## 4. Comparison of Searching Algorithms

| Algorithm | Time Complexity | Space Complexity | Best Used When |
|-----------|----------------|-----------------|---------------|
| Linear Search | O(n) | O(1) | Small arrays or unsorted arrays |
| Binary Search | O(log n) | O(1) | Sorted arrays |
| Ternary Search | O(log₃ n) | O(1) | Sorted arrays with expensive comparisons |
| Jump Search | O(√n) | O(1) | Sorted arrays when binary search is too complex |
| Exponential Search | O(log n) | O(1) | Unbounded/infinite sorted arrays |

## 5. Common Mistakes and Optimizations

1. **Off-by-one errors**: Be careful with the boundary conditions in binary search.
2. **Integer overflow**: Use `left + (right - left) / 2` instead of `(left + right) / 2`.
3. **Infinite loops**: Ensure that the search space is reduced in each iteration.
4. **Handling duplicates**: Consider how to handle duplicates in the array.
5. **Recursive vs. Iterative**: Iterative implementations are generally more efficient in terms of space complexity.

## 6. Real-world Applications

1. **Database Indexing**: Binary search is used in B-trees and other database index structures
2. **Search Engines**: Various search algorithms are used to quickly find relevant documents
3. **Spell Checkers**: Finding similar words using search algorithms
4. **Autocomplete**: Finding matching prefixes in a dictionary
5. **IP Routing**: Finding the best route in routing tables

## 7. Learning Strategy for Searching Algorithms

1. **Master the basics**: Understand linear and binary search thoroughly
2. **Implement from scratch**: Write the code without looking at references
3. **Solve variations**: Practice different variations of binary search
4. **Analyze edge cases**: Test with empty arrays, single elements, duplicates
5. **Compare approaches**: Understand when to use each algorithm

## 8. Interview Tips

1. **Always clarify**: Ask if the array is sorted before choosing an algorithm
2. **Consider constraints**: Think about the size of the input and time/space requirements
3. **Handle edge cases**: Empty arrays, single elements, duplicates
4. **Optimize**: Start with a working solution, then optimize
5. **Test your code**: Walk through your algorithm with a simple example

## Resources for Further Learning

1. **Books**:
   - "Introduction to Algorithms" by CLRS
   - "Algorithms" by Robert Sedgewick and Kevin Wayne

2. **Online Platforms**:
   - LeetCode: Binary Search section
   - GeeksforGeeks: Searching algorithms
   - HackerRank: Search challenges

3. **Visualization Tools**:
   - VisuAlgo: https://visualgo.net/en/binarysearch
   - Algorithm Visualizer: https://algorithm-visualizer.org/