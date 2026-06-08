# 🚀 DSA Quick Mastery Guide - Part 4: Sorting & Searching

# 📚 TOPIC 4: SORTING & SEARCHING

## Core Concepts

### Sorting Algorithms
```java
// Time and Space Complexities
// Bubble Sort: O(n²) time, O(1) space
// Selection Sort: O(n²) time, O(1) space
// Insertion Sort: O(n²) time, O(1) space
// Merge Sort: O(n log n) time, O(n) space
// Quick Sort: O(n log n) avg, O(n²) worst time, O(log n) space
// Heap Sort: O(n log n) time, O(1) space
// Counting Sort: O(n+k) time, O(k) space (k = range of input)
// Radix Sort: O(d*(n+k)) time, O(n+k) space (d = digits, k = base)
```

### Key Sorting Implementations

#### 1. Merge Sort
```java
public void mergeSort(int[] arr, int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}

private void merge(int[] arr, int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;
    
    int[] L = new int[n1];
    int[] R = new int[n2];
    
    for (int i = 0; i < n1; i++) {
        L[i] = arr[left + i];
    }
    for (int j = 0; j < n2; j++) {
        R[j] = arr[mid + 1 + j];
    }
    
    int i = 0, j = 0, k = left;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k++] = L[i++];
        } else {
            arr[k++] = R[j++];
        }
    }
    
    while (i < n1) {
        arr[k++] = L[i++];
    }
    
    while (j < n2) {
        arr[k++] = R[j++];
    }
}
```

#### 2. Quick Sort
```java
public void quickSort(int[] arr, int low, int high) {
    if (low < high) {
        int pivotIndex = partition(arr, low, high);
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
}

private int partition(int[] arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    
    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    
    swap(arr, i + 1, high);
    return i + 1;
}

private void swap(int[] arr, int i, int j) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
```

### Searching Algorithms

#### 1. Binary Search
```java
// Iterative Binary Search
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
    
    return -1; // Not found
}

// Binary Search Variations
// 1. Find first occurrence
public int findFirstOccurrence(int[] arr, int target) {
    int left = 0, right = arr.length - 1;
    int result = -1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target) {
            result = mid; // Save result and continue searching left
            right = mid - 1;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return result;
}

// 2. Find last occurrence
public int findLastOccurrence(int[] arr, int target) {
    int left = 0, right = arr.length - 1;
    int result = -1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target) {
            result = mid; // Save result and continue searching right
            left = mid + 1;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return result;
}
```

## 🎯 Problem Patterns & Solutions

### Pattern 1: Modified Binary Search
```java
// Search in Rotated Sorted Array
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
        } 
        // Right half is sorted
        else {
            // Check if target is in right half
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    
    return -1;
}

// Find Peak Element
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

### Pattern 2: Sorting Applications
```java
// Merge Intervals
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

// Kth Largest Element (Quick Select)
public int findKthLargest(int[] nums, int k) {
    return quickSelect(nums, 0, nums.length - 1, nums.length - k);
}

private int quickSelect(int[] nums, int low, int high, int k) {
    int pivot = partition(nums, low, high);
    
    if (pivot == k) {
        return nums[pivot];
    } else if (pivot < k) {
        return quickSelect(nums, pivot + 1, high, k);
    } else {
        return quickSelect(nums, low, pivot - 1, k);
    }
}

private int partition(int[] nums, int low, int high) {
    int pivot = nums[high];
    int i = low;
    
    for (int j = low; j < high; j++) {
        if (nums[j] <= pivot) {
            swap(nums, i, j);
            i++;
        }
    }
    
    swap(nums, i, high);
    return i;
}
```

## 🔄 Quick Revision Questions

### Easy Level
1. Binary search in sorted array
2. First bad version
3. Search insert position
4. Merge sorted arrays
5. Intersection of two arrays

### Medium Level
1. Search in rotated sorted array
2. Find peak element
3. Merge intervals
4. Kth largest element in an array
5. Search a 2D matrix

### Hard Level
1. Median of two sorted arrays
2. Count of smaller numbers after self
3. Split array largest sum
4. Find k closest elements
5. Kth smallest element in a sorted matrix