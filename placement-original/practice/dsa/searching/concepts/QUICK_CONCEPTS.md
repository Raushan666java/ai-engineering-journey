# Searching - Quick Concepts Guide

## Core Concepts

### Linear Search
Sequential search through all elements.

```java
public int linearSearch(int[] arr, int target) {
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}
// Time: O(n), Space: O(1)
```

### Binary Search
Divide and conquer on sorted arrays.

```java
public int binarySearch(int[] arr, int target) {
    int left = 0, right = arr.length - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}
// Time: O(log n), Space: O(1)
```

### Recursive Binary Search
```java
public int binarySearchRecursive(int[] arr, int target, int left, int right) {
    if (left > right) return -1;

    int mid = left + (right - left) / 2;

    if (arr[mid] == target) return mid;
    if (arr[mid] > target) {
        return binarySearchRecursive(arr, target, left, mid - 1);
    }
    return binarySearchRecursive(arr, target, mid + 1, right);
}
// Time: O(log n), Space: O(log n)
```

## Binary Search Variants

### 1. Find First Occurrence
```java
public int findFirst(int[] arr, int target) {
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

### 2. Find Last Occurrence
```java
public int findLast(int[] arr, int target) {
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

### 3. Search Insert Position
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

    return left; // Insert position
}
```

### 4. Find Peak Element
```java
public int findPeakElement(int[] nums) {
    int left = 0, right = nums.length - 1;

    while (left < right) {
        int mid = left + (right - left) / 2;

        if (nums[mid] < nums[mid + 1]) {
            left = mid + 1; // Peak is on right
        } else {
            right = mid; // Peak is on left or mid
        }
    }

    return left;
}
```

## Advanced Search Techniques

### Exponential Search
Find range exponentially, then binary search.

```java
public int exponentialSearch(int[] arr, int target) {
    if (arr[0] == target) return 0;

    int i = 1;
    while (i < arr.length && arr[i] <= target) {
        i *= 2;
    }

    // Binary search in range [i/2, min(i, arr.length-1)]
    return binarySearch(arr, target, i/2, Math.min(i, arr.length-1));
}
```

### Interpolation Search
Estimate position using interpolation formula.

```java
public int interpolationSearch(int[] arr, int target) {
    int low = 0, high = arr.length - 1;

    while (low <= high && target >= arr[low] && target <= arr[high]) {
        if (low == high) {
            if (arr[low] == target) return low;
            return -1;
        }

        // Interpolation formula
        int pos = low + ((target - arr[low]) * (high - low)) / (arr[high] - arr[low]);

        if (arr[pos] == target) {
            return pos;
        } else if (arr[pos] < target) {
            low = pos + 1;
        } else {
            high = pos - 1;
        }
    }

    return -1;
}
```

## Search in Different Data Structures

### 2D Matrix Search
```java
public boolean searchMatrix(int[][] matrix, int target) {
    if (matrix == null || matrix.length == 0) return false;

    int rows = matrix.length, cols = matrix[0].length;
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

### Rotated Sorted Array Search
```java
public int searchRotated(int[] nums, int target) {
    int left = 0, right = nums.length - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (nums[mid] == target) {
            return mid;
        }

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

## Binary Search on Answer

### Find Square Root
```java
public int mySqrt(int x) {
    if (x == 0 || x == 1) return x;

    int left = 1, right = x;
    int result = 0;

    while (left <= right) {
        int mid = left + (right - left) / 2;
        long square = (long) mid * mid;

        if (square == x) {
            return mid;
        } else if (square < x) {
            result = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return result;
}
```

### Find K Closest Elements
```java
public List<Integer> findClosestElements(int[] arr, int k, int x) {
    int left = 0, right = arr.length - k;

    while (left < right) {
        int mid = left + (right - left) / 2;

        if (x - arr[mid] > arr[mid + k] - x) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    List<Integer> result = new ArrayList<>();
    for (int i = left; i < left + k; i++) {
        result.add(arr[i]);
    }

    return result;
}
```

## Graph Search Algorithms

### DFS (Depth-First Search)
```java
public void dfs(Graph graph, int vertex, boolean[] visited) {
    visited[vertex] = true;
    System.out.print(vertex + " ");

    for (int neighbor : graph.getNeighbors(vertex)) {
        if (!visited[neighbor]) {
            dfs(graph, neighbor, visited);
        }
    }
}
```

### BFS (Breadth-First Search)
```java
public void bfs(Graph graph, int startVertex) {
    boolean[] visited = new boolean[graph.size()];
    Queue<Integer> queue = new LinkedList<>();

    visited[startVertex] = true;
    queue.add(startVertex);

    while (!queue.isEmpty()) {
        int vertex = queue.poll();
        System.out.print(vertex + " ");

        for (int neighbor : graph.getNeighbors(vertex)) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.add(neighbor);
            }
        }
    }
}
```

## Time Complexity Analysis

| Algorithm | Best Case | Average Case | Worst Case | Space |
|-----------|-----------|--------------|------------|-------|
| Linear Search | O(1) | O(n) | O(n) | O(1) |
| Binary Search | O(1) | O(log n) | O(log n) | O(1) |
| Interpolation | O(1) | O(log log n) | O(n) | O(1) |
| Exponential | O(1) | O(log n) | O(log n) | O(1) |

## Common Applications

### 1. Database Systems
- Index lookups
- Range queries
- Full-text search

### 2. File Systems
- Directory traversal
- File location
- Disk block allocation

### 3. Network Routing
- Shortest path algorithms
- Packet forwarding
- Load balancing

### 4. Game Development
- Pathfinding (A*, Dijkstra)
- Collision detection
- AI decision making

## Interview Problem Patterns

### Array Problems
- Find target in sorted array
- Search insert position
- Find peak element
- Search in rotated array

### Matrix Problems
- Search in 2D matrix
- Spiral traversal
- Diagonal traversal
- Saddle point search

### Optimization Problems
- Minimize maximum
- Maximize minimum
- Kth smallest/largest
- Closest elements

## Edge Cases to Consider
- Empty arrays
- Single element arrays
- Target not found
- Duplicate elements
- Boundary conditions (first/last element)
- Integer overflow (large indices)

## Common Mistakes
- Off-by-one errors in binary search
- Not handling empty arrays
- Incorrect mid calculation (overflow)
- Wrong termination conditions
- Not considering duplicates
- Forgetting to sort before binary search

## Optimization Tips
- Use binary search when data is sorted
- Consider interpolation search for uniform data
- Use exponential search for unbounded arrays
- Pre-sort data when multiple searches needed
- Use appropriate data structures (HashMap, TreeMap, etc.)
- Consider early termination conditions
- Handle integer overflow in calculations

## Practice Problems by Difficulty

### Easy
- Linear search implementation
- Binary search on sorted array
- Find first/last occurrence
- Search insert position
- Valid perfect square

### Medium
- Search in rotated sorted array
- Find minimum in rotated array
- Search 2D matrix
- Kth smallest in BST
- Sqrt(x) implementation

### Hard
- Median of two sorted arrays
- Find k closest elements
- Split array largest sum
- Aggressive cows placement
- Maximum side length square