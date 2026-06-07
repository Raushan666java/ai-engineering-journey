# SORTING ALGORITHMS

## Overview
Sorting algorithms are fundamental to computer science and are used to arrange elements in a specific order (ascending or descending). This section covers the most important sorting algorithms with their implementations, time/space complexities, and use cases.

## Difficulty Breakdown

### Easy Problems
1. **Bubble Sort** - Basic comparison sort
2. **Selection Sort** - Find minimum and swap
3. **Insertion Sort** - Build sorted array one element at a time
4. **Counting Sort** - For small range of integers

### Medium Problems
5. **Merge Sort** - Divide and conquer approach
6. **Quick Sort** - Partition-based sorting
7. **Heap Sort** - Using heap data structure
8. **Shell Sort** - Generalized insertion sort

### Hard Problems
9. **Radix Sort** - Process digits from least significant to most
10. **Bucket Sort** - Distribution sort
11. **Tim Sort** - Hybrid sorting algorithm (used in Python/Java)
12. **External Sort** - For large datasets that don't fit in memory

## Key Concepts

### Stability
- **Stable Sort**: Maintains relative order of equal elements
- **Unstable Sort**: May change relative order of equal elements

### In-Place vs Out-of-Place
- **In-Place**: Uses constant extra space O(1)
- **Out-of-Place**: Uses additional space O(n)

### Comparison vs Non-Comparison
- **Comparison**: Compare elements to sort (Bubble, Quick, Merge, etc.)
- **Non-Comparison**: Use properties of data (Counting, Radix, Bucket)

## Time Complexity Comparison

| Algorithm | Best | Average | Worst | Space | Stable | In-Place |
|-----------|------|---------|-------|-------|--------|----------|
| Bubble Sort | O(n) | O(n²) | O(n²) | O(1) | Yes | Yes |
| Selection Sort | O(n²) | O(n²) | O(n²) | O(1) | No | Yes |
| Insertion Sort | O(n) | O(n²) | O(n²) | O(1) | Yes | Yes |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) | Yes | No |
| Quick Sort | O(n log n) | O(n log n) | O(n²) | O(log n) | No | Yes |
| Heap Sort | O(n log n) | O(n log n) | O(n log n) | O(1) | No | Yes |
| Counting Sort | O(n+k) | O(n+k) | O(n+k) | O(k) | Yes | No |
| Radix Sort | O(n*k) | O(n*k) | O(n*k) | O(n+k) | Yes | No |
| Bucket Sort | O(n+k) | O(n) | O(n²) | O(n) | Yes | No |

## Common Interview Questions

1. **Implement different sorting algorithms**
2. **Sort array with custom comparator**
3. **Sort objects by multiple criteria**
4. **Find k-th largest/smallest element**
5. **Sort nearly sorted array**
6. **External sorting for large files**
7. **Stable vs unstable sorting**
8. **Time/space complexity analysis**

## Implementation Notes

- Always consider edge cases: empty array, single element, already sorted, reverse sorted
- For primitive types, focus on efficiency
- For objects, consider stability requirements
- Choose algorithm based on constraints (time, space, stability)
- Practice implementing from scratch without library functions

## Question Files
1. `1_bubble_sort.java` - Basic bubble sort implementation
2. `2_selection_sort.java` - Selection sort with optimization
3. `3_insertion_sort.java` - Insertion sort with binary search
4. `4_merge_sort.java` - Recursive and iterative merge sort
5. `5_quick_sort.java` - Quick sort with different pivot strategies
6. `6_heap_sort.java` - Heap sort using max heap
7. `7_counting_sort.java` - Counting sort for limited range
8. `8_radix_sort.java` - Radix sort for integers
9. `9_bucket_sort.java` - Bucket sort with linked lists
10. `10_sort_colors.java` - Dutch National Flag problem (LeetCode 75)
11. `11_kth_largest_element.java` - Quick select algorithm (LeetCode 215)
12. `12_sort_list.java` - Sort linked list (LeetCode 148)