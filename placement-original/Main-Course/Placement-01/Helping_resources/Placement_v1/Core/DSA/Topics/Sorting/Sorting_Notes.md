# Sorting Algorithms: Comprehensive Notes

## 1. Introduction to Sorting

Sorting is the process of arranging elements in a specific order (usually ascending or descending). It is one of the most fundamental operations in computer science and is used in many applications.

### Key Considerations
- **Time Complexity**: How the algorithm scales with input size
- **Space Complexity**: Memory requirements of the algorithm
- **Stability**: Whether equal elements maintain their relative order
- **In-Place**: Whether the algorithm requires additional memory
- **Adaptivity**: Whether the algorithm performs better on partially sorted data

## 2. Basic Sorting Algorithms

### Bubble Sort
**Description**: Repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.

```java
public void bubbleSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n - 1; i++) {
        boolean swapped = false;
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        // If no swapping occurred in this pass, array is sorted
        if (!swapped) break;
    }
}
```

**Time Complexity**: O(n²) worst and average case, O(n) best case (already sorted)  
**Space Complexity**: O(1)  
**Stable**: Yes  
**In-Place**: Yes  
**Best for**: Small datasets or nearly sorted arrays

### Selection Sort
**Description**: Repeatedly finds the minimum element from the unsorted part and puts it at the beginning.

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

**Time Complexity**: O(n²) in all cases  
**Space Complexity**: O(1)  
**Stable**: No  
**In-Place**: Yes  
**Best for**: Small datasets or when memory is limited

### Insertion Sort
**Description**: Builds the sorted array one item at a time by repeatedly taking the next element and inserting it into its correct position.

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

**Time Complexity**: O(n²) worst and average case, O(n) best case (already sorted)  
**Space Complexity**: O(1)  
**Stable**: Yes  
**In-Place**: Yes  
**Best for**: Small datasets, nearly sorted arrays, or as part of more complex algorithms

## 3. Efficient Sorting Algorithms

### Merge Sort
**Description**: Divides the array into two halves, sorts them separately, and then merges the sorted halves.

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

**Time Complexity**: O(n log n) in all cases  
**Space Complexity**: O(n)  
**Stable**: Yes  
**In-Place**: No  
**Best for**: General-purpose sorting, external sorting, when stability is required

### Quick Sort
**Description**: Picks a pivot element and partitions the array around the pivot.

```java
public void quickSort(int[] arr, int low, int high) {
    if (low < high) {
        int pivotIndex = partition(arr, low, high);
        
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
}

private int partition(int[] arr, int low, int high) {
    // Choose pivot (here we use the last element)
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

**Time Complexity**: O(n log n) average case, O(n²) worst case  
**Space Complexity**: O(log n) for recursion stack  
**Stable**: No  
**In-Place**: Yes  
**Best for**: In-place sorting, good average-case performance

### Heap Sort
**Description**: Builds a max heap from the array and repeatedly extracts the maximum element.

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

**Time Complexity**: O(n log n) in all cases  
**Space Complexity**: O(1)  
**Stable**: No  
**In-Place**: Yes  
**Best for**: In-place sorting, guaranteed O(n log n) performance

## 4. Linear-Time Sorting Algorithms

### Counting Sort
**Description**: Counts the occurrences of each element and places them in the correct order.

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
**In-Place**: No  
**Best for**: Integer sorting with small range

### Radix Sort
**Description**: Sorts the elements by processing individual digits, starting from the least significant digit.

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
**In-Place**: No  
**Best for**: Integer sorting with large range but limited number of digits

### Bucket Sort
**Description**: Divides the array into a number of buckets, sorts each bucket individually, and then concatenates them.

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
**In-Place**: No  
**Best for**: Uniformly distributed data over a range

## 5. Comparison of Sorting Algorithms

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

## 6. Advanced Sorting Techniques

### Hybrid Sorting Algorithms
- **Timsort**: Combines merge sort and insertion sort, used in Python and Java.
- **Introsort**: Combines quick sort, heap sort, and insertion sort, used in C++ STL.

### External Sorting
Used when data doesn't fit into memory.
- Divide data into chunks that fit in memory
- Sort each chunk using an efficient algorithm
- Merge the sorted chunks

### Parallel Sorting
- Divides the data among multiple processors
- Merge sort and quick sort are easily parallelizable
- Requires synchronization mechanisms

## 7. Sorting in Special Cases

### Nearly Sorted Arrays
- Insertion sort performs well (O(n + k) where k is the number of inversions)
- Bubble sort with optimization can detect already sorted sections

### Small Arrays
- Insertion sort is often faster for small arrays (less than ~50 elements)
- Many libraries switch to insertion sort for small subarrays

### Linked Lists
- Merge sort is preferred for linked lists (O(n log n) time, O(log n) space)
- Quick sort requires random access, which is inefficient for linked lists

## 8. Real-world Applications

1. **Database Systems**: Sorting records for efficient retrieval
2. **Search Algorithms**: Binary search requires sorted data
3. **Data Analysis**: Sorting data for statistical analysis
4. **Computer Graphics**: Sorting objects by depth (z-buffer algorithm)
5. **Operating Systems**: Process scheduling, memory management

## 9. Learning Strategy for Sorting Algorithms

1. **Understand the basics**: Start with simple algorithms like bubble, insertion, and selection sort
2. **Master divide-and-conquer**: Learn merge sort and quick sort thoroughly
3. **Study heap sort**: Understand heap data structure and its application in sorting
4. **Explore linear-time algorithms**: Learn counting, radix, and bucket sort for special cases
5. **Implement from scratch**: Write the code without looking at references
6. **Analyze performance**: Compare different algorithms on various inputs

## 10. Interview Tips

1. **Know the trade-offs**: Understand when to use each algorithm
2. **Handle edge cases**: Empty arrays, single elements, duplicates
3. **Optimize for the input**: Choose the algorithm based on the input characteristics
4. **Consider stability**: Some applications require stable sorting
5. **Space constraints**: Consider in-place algorithms when memory is limited

## Resources for Further Learning

1. **Books**:
   - "Introduction to Algorithms" by CLRS
   - "Algorithms" by Robert Sedgewick and Kevin Wayne

2. **Online Platforms**:
   - LeetCode: Sorting problems
   - GeeksforGeeks: Sorting algorithms
   - HackerRank: Sorting challenges

3. **Visualization Tools**:
   - VisuAlgo: https://visualgo.net/en/sorting
   - Sorting Algorithms Animations: https://www.toptal.com/developers/sorting-algorithms