# SORTING ALGORITHMS - QUICK CONCEPTS

## Core Concepts

### 1. Bubble Sort
- **Idea**: Repeatedly swap adjacent elements if they are in wrong order
- **How it works**: Multiple passes, each pass moves largest element to end
- **Optimizations**: Stop if no swaps in a pass (already sorted)
- **Best for**: Small arrays, educational purposes
- **Time**: O(n²), Space: O(1), Stable: Yes, In-place: Yes

### 2. Selection Sort
- **Idea**: Find minimum element and place it at beginning
- **How it works**: Scan unsorted portion for minimum, swap with first unsorted
- **Key**: Number of swaps is minimized (O(n))
- **Best for**: When swap cost is high
- **Time**: O(n²), Space: O(1), Stable: No, In-place: Yes

### 3. Insertion Sort
- **Idea**: Build sorted array one element at a time
- **How it works**: Take element, insert into correct position in sorted portion
- **Optimizations**: Use binary search for insertion point
- **Best for**: Small arrays, nearly sorted arrays
- **Time**: O(n²), Space: O(1), Stable: Yes, In-place: Yes

### 4. Merge Sort
- **Idea**: Divide and conquer - split array, sort halves, merge
- **How it works**: Recursively divide into single elements, then merge sorted halves
- **Key**: Stable, predictable O(n log n), but uses extra space
- **Best for**: Linked lists, external sorting, stable sort needed
- **Time**: O(n log n), Space: O(n), Stable: Yes, In-place: No

### 5. Quick Sort
- **Idea**: Partition array around pivot, recursively sort partitions
- **How it works**: Choose pivot, partition elements < pivot left, > pivot right
- **Key**: In-place, usually fast, but worst case O(n²)
- **Best for**: Arrays, in-place sorting, average case performance
- **Time**: O(n log n) avg, O(n²) worst, Space: O(log n), Stable: No, In-place: Yes

### 6. Heap Sort
- **Idea**: Use heap data structure to sort
- **How it works**: Build max heap, repeatedly extract maximum and rebuild heap
- **Key**: Guaranteed O(n log n), in-place, but not stable
- **Best for**: When guaranteed worst-case performance needed
- **Time**: O(n log n), Space: O(1), Stable: No, In-place: Yes

### 7. Counting Sort
- **Idea**: Count occurrences of each element, use counts to place elements
- **How it works**: Create count array, accumulate counts, place elements in order
- **Key**: Linear time for small range, stable variant exists
- **Best for**: Small range of integers, when range is known
- **Time**: O(n+k), Space: O(k), Stable: Yes, In-place: No

### 8. Radix Sort
- **Idea**: Sort by individual digits from least significant to most
- **How it works**: Use stable sort (counting sort) for each digit position
- **Key**: Works on digits/bits, stable, linear for fixed digit length
- **Best for**: Fixed-length strings, integers with known digit count
- **Time**: O(n*k), Space: O(n+k), Stable: Yes, In-place: No

### 9. Bucket Sort
- **Idea**: Distribute elements into buckets, sort buckets, concatenate
- **How it works**: Hash elements to buckets, sort each bucket, combine
- **Key**: Average case O(n), depends on hash function and bucket sort
- **Best for**: Uniform distribution, floating point numbers
- **Time**: O(n) avg, O(n²) worst, Space: O(n), Stable: Yes, In-place: No

## Interview Tips

### Choosing the Right Algorithm
- **Small arrays (n < 10)**: Insertion sort
- **Nearly sorted**: Insertion sort
- **Stability needed**: Merge sort, counting sort
- **Space constrained**: Heap sort, quick sort
- **Guaranteed performance**: Heap sort, merge sort
- **Integer range known**: Counting sort
- **Memory not issue**: Merge sort

### Common Mistakes
- Forgetting edge cases: empty, single element, duplicates
- Not considering stability requirements
- Using unstable sort when relative order matters
- Not handling negative numbers in counting sort
- Choosing wrong pivot in quick sort

### Optimization Techniques
- **Hybrid sorts**: Use insertion sort for small subarrays
- **Three-way partitioning**: For arrays with many duplicates
- **Median-of-three**: Better pivot selection in quick sort
- **Introsort**: Switch to heap sort if quick sort degrades

### Implementation Patterns
```java
// In-place swap
void swap(int[] arr, int i, int j) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// Merge two sorted arrays
void merge(int[] arr, int left, int mid, int right) {
    // Implementation
}

// Partition for quick sort
int partition(int[] arr, int low, int high) {
    // Implementation
}
```

## Problem-Solving Approach

1. **Understand constraints**: Array size, element range, stability needs
2. **Choose algorithm**: Based on time/space requirements
3. **Handle edge cases**: Empty, null, single element, duplicates
4. **Implement carefully**: Watch for off-by-one errors
5. **Test thoroughly**: Various input sizes and distributions
6. **Analyze complexity**: Time and space for your solution

## Advanced Topics

### External Sorting
- For data that doesn't fit in memory
- Use merge sort with multiple passes
- Key: Minimize disk I/O operations

### Parallel Sorting
- Bitonic sort for parallel processors
- Parallel merge sort
- Sample sort for distributed systems

### Cache-Efficient Sorting
- Block-based algorithms
- Cache-oblivious algorithms
- Minimize cache misses

### String Sorting
- Radix sort for fixed-length strings
- Burst sort for variable-length strings
- Suffix array construction

Remember: The best sorting algorithm depends on your specific constraints and requirements. Always analyze the problem constraints before choosing an implementation!