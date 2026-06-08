# HEAPS / PRIORITY QUEUES

## Overview
A heap is a specialized tree-based data structure that satisfies the heap property. Heaps are commonly used to implement priority queues and are essential for algorithms requiring efficient access to the maximum or minimum element.

## Difficulty Breakdown

### Easy Problems
1. **Heap Implementation** - Array-based min/max heap
2. **Basic Operations** - Insert, extract min/max, peek
3. **Heap Sort** - Sort array using heap operations

### Medium Problems
4. **K-th Largest Element** - Find k-th largest in array (LeetCode 215)
5. **Top K Frequent Elements** - Find most frequent elements (LeetCode 347)
6. **Merge K Sorted Lists** - Merge multiple sorted lists (LeetCode 23)
7. **Find Median from Data Stream** - Running median (LeetCode 295)

### Hard Problems
8. **Sliding Window Maximum** - Maximum in sliding window (LeetCode 239)
9. **Reorganize String** - Rearrange string with constraints (LeetCode 767)
10. **Smallest Range Covering Elements** - Minimum range with all elements (LeetCode 632)
11. **IPO** - Maximize capital with k projects (LeetCode 502)
12. **Course Schedule III** - Schedule courses with deadlines (LeetCode 630)

## Key Concepts

### Heap Properties
- **Complete Binary Tree**: All levels filled except possibly last, left-filled
- **Heap Property**: Parent ≥ children (max-heap) or Parent ≤ children (min-heap)
- **Array Representation**: Root at index 0, left child at 2*i+1, right at 2*i+2

### Types of Heaps
- **Max Heap**: Root is largest element
- **Min Heap**: Root is smallest element
- **Binary Heap**: Most common implementation
- **Fibonacci Heap**: Advanced with better amortized complexity

### Priority Queue Operations
- **Insert/Push**: Add element maintaining heap property O(log n)
- **Extract/Delete**: Remove root element O(log n)
- **Peek**: Get root without removal O(1)
- **Decrease/Increase Key**: Modify element priority O(log n)

## Time Complexity

| Operation | Binary Heap | Fibonacci Heap |
|-----------|-------------|----------------|
| Insert | O(log n) | O(1) amortized |
| Extract Min/Max | O(log n) | O(log n) amortized |
| Peek | O(1) | O(1) |
| Decrease Key | O(log n) | O(1) amortized |
| Delete | O(log n) | O(log n) amortized |

## Common Interview Questions

1. **Implement heap from scratch**
2. **Convert array to heap**
3. **Heap vs balanced BST comparison**
4. **K-way merge algorithms**
5. **Priority queue applications**
6. **Heap sort implementation**
7. **Running median problem**
8. **Top K elements problems**
9. **Sliding window with heap**
10. **Merge K sorted arrays**

## Implementation Notes

- Use array indexing: parent = (i-1)/2, left = 2*i+1, right = 2*i+2
- Heapify operations: heapify up (insert) and heapify down (extract)
- Build heap: O(n) time using bottom-up heap construction
- Handle duplicates carefully in priority queues
- Consider custom comparators for complex objects

## Question Files
1. `1_heap_implementation.java` - Array-based min/max heap implementation
2. `2_heap_sort.java` - Heap sort algorithm implementation
3. `3_kth_largest_element.java` - Find k-th largest element (LeetCode 215)
4. `4_top_k_frequent.java` - Top K frequent elements (LeetCode 347)
5. `5_merge_k_sorted_lists.java` - Merge K sorted linked lists (LeetCode 23)
6. `6_median_finder.java` - Find median from data stream (LeetCode 295)
7. `7_sliding_window_maximum.java` - Maximum in sliding window (LeetCode 239)
8. `8_reorganize_string.java` - Reorganize string (LeetCode 767)
9. `9_smallest_range.java` - Smallest range covering elements (LeetCode 632)
10. `10_ipo.java` - IPO problem (LeetCode 502)
11. `11_course_schedule_3.java` - Course schedule III (LeetCode 630)
12. `12_priority_queue_custom.java` - Custom priority queue implementations