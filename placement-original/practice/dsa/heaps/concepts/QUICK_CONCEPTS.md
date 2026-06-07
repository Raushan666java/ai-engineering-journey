# HEAPS / PRIORITY QUEUES - QUICK CONCEPTS

## Core Concepts

### 1. Binary Heap Structure
- **Complete Binary Tree**: Perfectly filled except bottom level
- **Array Representation**: Efficient storage and access
- **Heap Property**: Parent ≥ children (max-heap) or Parent ≤ children (min-heap)
- **Height**: O(log n) for operations

### 2. Array Indexing
```java
// For element at index i:
int parent = (i - 1) / 2;
int leftChild = 2 * i + 1;
int rightChild = 2 * i + 2;

// Root is at index 0
// Last non-leaf node: (n/2) - 1
```

### 3. Heap Operations

#### Insert (Heapify Up)
```java
public void insert(int val) {
    heap.add(val);
    int i = heap.size() - 1;

    // Heapify up
    while (i > 0 && heap.get(parent(i)) < heap.get(i)) {
        swap(i, parent(i));
        i = parent(i);
    }
}
```

#### Extract Max/Min (Heapify Down)
```java
public int extractMax() {
    if (heap.isEmpty()) return -1;

    int max = heap.get(0);
    int last = heap.remove(heap.size() - 1);

    if (!heap.isEmpty()) {
        heap.set(0, last);
        heapifyDown(0);
    }

    return max;
}
```

#### Build Heap (O(n) time)
```java
public void buildHeap(int[] arr) {
    heap.addAll(Arrays.asList(arr));

    // Start from last non-leaf node
    for (int i = heap.size() / 2 - 1; i >= 0; i--) {
        heapifyDown(i);
    }
}
```

### 4. Min Heap vs Max Heap

#### Min Heap Implementation
- Root contains smallest element
- Parent ≤ children
- Used for priority queues with min priority

#### Max Heap Implementation
- Root contains largest element
- Parent ≥ children
- Used for priority queues with max priority

### 5. Priority Queue Applications

#### K-th Largest Element
- Use min-heap of size k
- Keep smallest k elements
- Root is k-th largest

#### Top K Frequent Elements
- Use max-heap with frequency comparison
- Or min-heap with custom comparator
- Handle frequency counting first

#### Running Median
- Use two heaps: max-heap for lower half, min-heap for upper half
- Balance heaps to keep sizes equal
- Median is average of heap roots

### 6. Heap Sort Algorithm
```java
public void heapSort(int[] arr) {
    // Build max heap
    buildMaxHeap(arr);

    // Extract elements one by one
    for (int i = arr.length - 1; i > 0; i--) {
        // Move root to end
        swap(arr, 0, i);

        // Heapify reduced heap
        heapify(arr, 0, i);
    }
}
```

### 7. Common Patterns

#### Sliding Window Maximum
- Use deque to maintain decreasing order
- Remove elements outside window
- Front always contains maximum

#### Merge K Sorted Lists
- Use priority queue to track smallest element from each list
- Extract minimum and add next element from same list
- Continue until all lists exhausted

#### K-way Merge
- Similar to merge k sorted lists
- Use heap to efficiently find next smallest element
- Better than pairwise merging

### 8. Advanced Topics

#### Fibonacci Heap
- Better amortized complexity
- Decrease key in O(1) amortized
- Used in advanced algorithms like Dijkstra

#### Binomial Heap
- Collection of binomial trees
- Efficient merge operations
- Used in some competitive programming

#### Pairing Heap
- Self-adjusting heap
- Simple implementation
- Good practical performance

### 9. Implementation Considerations

#### Custom Comparators
```java
// For objects with custom priority
PriorityQueue<Node> pq = new PriorityQueue<>((a, b) -> a.priority - b.priority);

// For max heap (reverse natural order)
PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a, b) -> b - a);
```

#### Handling Duplicates
- Heaps naturally handle duplicates
- Stability not guaranteed
- Use additional fields for stable sort if needed

#### Memory Management
- Array-based: contiguous memory
- Dynamic sizing: resize when needed
- Consider initial capacity for performance

### 10. Interview Tips

#### Implementation Questions
- **Start with interface**: Define operations first
- **Choose heap type**: Min or max based on problem
- **Handle edge cases**: Empty heap, single element
- **Consider time/space**: O(log n) operations expected

#### Problem-Solving Approach
1. **Identify heap usage**: Priority queue needed?
2. **Choose heap type**: Min-heap or max-heap?
3. **Determine operations**: What operations are frequent?
4. **Consider alternatives**: Sometimes simpler approaches work
5. **Analyze complexity**: Ensure efficient solution

#### Common Mistakes
- **Wrong heap type**: Using min-heap when max-heap needed
- **Not maintaining heap property**: After modifications
- **Incorrect indexing**: Off-by-one in array operations
- **Forgetting edge cases**: Empty heap operations

#### Optimization Techniques
- **Bulk operations**: Build heap in O(n) time
- **Lazy deletion**: Mark deleted instead of immediate removal
- **Custom heap**: For specific constraints
- **Hybrid approaches**: Combine with other data structures

Remember: Heaps are powerful for priority-based problems. Master the heap property, array representation, and common patterns for efficient solutions!