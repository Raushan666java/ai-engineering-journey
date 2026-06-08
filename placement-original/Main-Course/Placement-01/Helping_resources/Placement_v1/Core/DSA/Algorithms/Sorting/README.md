# Sorting Algorithms

## Overview
Sorting algorithms are used to rearrange a list of elements in a certain order (usually ascending or descending). These algorithms are fundamental to computer science and are used in many applications.

## Algorithms

### 1. Bubble Sort
**Description**: Repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.

**Implementation**:
```java
public void bubbleSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
```

**Time Complexity**: O(n²)  
**Space Complexity**: O(1)  
**Stable**: Yes  
**Best for**: Small datasets or nearly sorted arrays

### 2. Selection Sort
**Description**: Repeatedly finds the minimum element from the unsorted part and puts it at the beginning.

**Implementation**:
```java
public void selectionSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n - 1; i++) {
        int minIndex = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Swap arr[i] and arr[minIndex]
        int temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}
```

**Time Complexity**: O(n²)  
**Space Complexity**: O(1)  
**Stable**: No  
**Best for**: Small datasets or when memory is limited

### 3. Insertion Sort
**Description**: Builds the sorted array one item at a time by repeatedly taking the next element and inserting it into its correct position.

**Implementation**:
```java
public void insertionSort(int[] arr) {
    int n = arr.length;
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        
        // Move elements greater than key to one position ahead
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}
```

**Time Complexity**: O(n²)  
**Space Complexity**: O(1)  
**Stable**: Yes  
**Best for**: Small datasets or nearly sorted arrays

### 4. Merge Sort
**Description**: Divides the array into two halves, sorts them separately, and then merges the sorted halves.

**Implementation**:
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
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
    
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
    
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}
```

**Time Complexity**: O(n log n)  
**Space Complexity**: O(n)  
**Stable**: Yes  
**Best for**: General-purpose sorting, external sorting

### 5. Quick Sort
**Description**: Picks a pivot element and partitions the array around the pivot.

**Implementation**:
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
            
            // Swap arr[i] and arr[j]
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    
    // Swap arr[i+1] and arr[high] (pivot)
    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    
    return i + 1;
}
```

**Time Complexity**: O(n log n) average, O(n²) worst case  
**Space Complexity**: O(log n)  
**Stable**: No  
**Best for**: In-place sorting, good average-case performance

### 6. Heap Sort
**Description**: Builds a max heap from the array and repeatedly extracts the maximum element.

**Implementation**:
```java
public void heapSort(int[] arr) {
    int n = arr.length;
    
    // Build max heap
    for (int i = n / 2 - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
    
    // Extract elements from heap one by one
    for (int i = n - 1; i > 0; i--) {
        // Move current root to end
        int temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        
        // Call heapify on the reduced heap
        heapify(arr, i, 0);
    }
}

private void heapify(int[] arr, int n, int i) {
    int largest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;
    
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }
    
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }
    
    if (largest != i) {
        int swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;
        
        heapify(arr, n, largest);
    }
}
```

**Time Complexity**: O(n log n)  
**Space Complexity**: O(1)  
**Stable**: No  
**Best for**: In-place sorting, guaranteed O(n log n) performance

### 7. Counting Sort
**Description**: Counts the occurrences of each element and places them in the correct order.

**Implementation**:
```java
public void countingSort(int[] arr) {
    int n = arr.length;
    
    // Find the maximum value in the array
    int max = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    
    // Create count array
    int[] count = new int[max + 1];
    for (int i = 0; i < n; i++) {
        count[arr[i]]++;
    }
    
    // Update count array to store actual position
    for (int i = 1; i <= max; i++) {
        count[i] += count[i - 1];
    }
    
    // Create output array
    int[] output = new int[n];
    for (int i = n - 1; i >= 0; i--) {
        output[count[arr[i]] - 1] = arr[i];
        count[arr[i]]--;
    }
    
    // Copy output array to original array
    for (int i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}
```

**Time Complexity**: O(n + k) where k is the range of input  
**Space Complexity**: O(n + k)  
**Stable**: Yes  
**Best for**: Integer sorting with small range

### 8. Radix Sort
**Description**: Sorts the elements by processing individual digits, starting from the least significant digit.

**Implementation**:
```java
public void radixSort(int[] arr) {
    int max = getMax(arr);
    
    // Do counting sort for every digit
    for (int exp = 1; max / exp > 0; exp *= 10) {
        countingSortByDigit(arr, exp);
    }
}

private int getMax(int[] arr) {
    int max = arr[0];
    for (int i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

private void countingSortByDigit(int[] arr, int exp) {
    int n = arr.length;
    int[] output = new int[n];
    int[] count = new int[10]; // 0-9 digits
    
    // Count occurrences of each digit
    for (int i = 0; i < n; i++) {
        count[(arr[i] / exp) % 10]++;
    }
    
    // Change count[i] so that it contains actual position
    for (int i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }
    
    // Build the output array
    for (int i = n - 1; i >= 0; i--) {
        output[count[(arr[i] / exp) % 10] - 1] = arr[i];
        count[(arr[i] / exp) % 10]--;
    }
    
    // Copy the output array to arr[]
    for (int i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}
```

**Time Complexity**: O(d * (n + k)) where d is the number of digits and k is the range of each digit  
**Space Complexity**: O(n + k)  
**Stable**: Yes  
**Best for**: Integer sorting with large range but limited number of digits

### 9. Bucket Sort
**Description**: Divides the array into a number of buckets, sorts each bucket individually, and then concatenates them.

**Implementation**:
```java
public void bucketSort(float[] arr) {
    int n = arr.length;
    
    // Create buckets
    @SuppressWarnings("unchecked")
    List<Float>[] buckets = new ArrayList[n];
    for (int i = 0; i < n; i++) {
        buckets[i] = new ArrayList<>();
    }
    
    // Add elements to buckets
    for (int i = 0; i < n; i++) {
        int bucketIndex = (int) (n * arr[i]);
        buckets[bucketIndex].add(arr[i]);
    }
    
    // Sort each bucket
    for (int i = 0; i < n; i++) {
        Collections.sort(buckets[i]);
    }
    
    // Concatenate buckets back into arr[]
    int index = 0;
    for (int i = 0; i < n; i++) {
        for (float value : buckets[i]) {
            arr[index++] = value;
        }
    }
}
```

**Time Complexity**: O(n + k) average case, O(n²) worst case  
**Space Complexity**: O(n + k)  
**Stable**: Yes (depends on the sorting algorithm used for each bucket)  
**Best for**: Uniformly distributed data over a range

## Comparison of Sorting Algorithms

| Algorithm | Time Complexity (Best) | Time Complexity (Average) | Time Complexity (Worst) | Space Complexity | Stable | In-Place |
|-----------|------------------------|---------------------------|-------------------------|-----------------|--------|----------|
| Bubble Sort | O(n) | O(n²) | O(n²) | O(1) | Yes | Yes |
| Selection Sort | O(n²) | O(n²) | O(n²) | O(1) | No | Yes |
| Insertion Sort | O(n) | O(n²) | O(n²) | O(1) | Yes | Yes |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) | Yes | No |
| Quick Sort | O(n log n) | O(n log n) | O(n²) | O(log n) | No | Yes |
| Heap Sort | O(n log n) | O(n log n) | O(n log n) | O(1) | No | Yes |
| Counting Sort | O(n + k) | O(n + k) | O(n + k) | O(n + k) | Yes | No |
| Radix Sort | O(d * (n + k)) | O(d * (n + k)) | O(d * (n + k)) | O(n + k) | Yes | No |
| Bucket Sort | O(n + k) | O(n + k) | O(n²) | O(n + k) | Yes | No |

## When to Use Each Algorithm

1. **Bubble Sort**: When the array is small or nearly sorted.
2. **Selection Sort**: When memory is limited and simplicity is preferred.
3. **Insertion Sort**: When the array is small or nearly sorted.
4. **Merge Sort**: When stable sorting is needed and O(n log n) time complexity is required.
5. **Quick Sort**: When average-case performance is important and in-place sorting is preferred.
6. **Heap Sort**: When guaranteed O(n log n) performance is needed and in-place sorting is preferred.
7. **Counting Sort**: When sorting integers with a small range.
8. **Radix Sort**: When sorting integers with a large range but limited number of digits.
9. **Bucket Sort**: When input is uniformly distributed over a range.

## Problem-Solving Patterns

### 1. Hybrid Sorting Algorithms
- **Timsort**: Combines merge sort and insertion sort, used in Python and Java.
- **Introsort**: Combines quick sort, heap sort, and insertion sort, used in C++ STL.

### 2. External Sorting
- Used when data doesn't fit into memory.
- Typically uses merge sort with modifications.

### 3. Parallel Sorting
- Divides the data among multiple processors.
- Merge sort and quick sort are easily parallelizable.

### 4. Sorting in Special Cases
- **Nearly Sorted Arrays**: Insertion sort or bubble sort with optimizations.
- **Small Arrays**: Insertion sort is often faster for small arrays.
- **Linked Lists**: Merge sort is preferred for linked lists.

## Practice Problems

1. [Sort an Array](https://leetcode.com/problems/sort-an-array/)
2. [Sort Colors](https://leetcode.com/problems/sort-colors/)
3. [Merge Intervals](https://leetcode.com/problems/merge-intervals/)
4. [Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/)
5. [Sort List](https://leetcode.com/problems/sort-list/)
6. [Insertion Sort List](https://leetcode.com/problems/insertion-sort-list/)
7. [Largest Number](https://leetcode.com/problems/largest-number/)
8. [Wiggle Sort II](https://leetcode.com/problems/wiggle-sort-ii/)
9. [Maximum Gap](https://leetcode.com/problems/maximum-gap/)
10. [Count of Smaller Numbers After Self](https://leetcode.com/problems/count-of-smaller-numbers-after-self/)