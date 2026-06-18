# Chapter 10: Heaps

## Learning Objectives

- Define binary heap properties (structure and order).
- Implement min-heap and max-heap operations.
- Implement heapify and heap sort.
- Use a heap as a priority queue.

## Theory

![Heaps, Balanced Trees and Advanced Data Structures](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/data-structures/ch06-heap-trees-advanced.png)

### Binary Heap

A **binary heap** is a complete binary tree satisfying the **heap property**:
- **Max-heap**: for every node, \( \text{parent} \ge \text{children} \).
- **Min-heap**: for every node, \( \text{parent} \le \text{children} \).

Since a heap is a complete binary tree, it can be stored compactly in an array:

```
Array indices (1-based):  1   2   3   4   5   6
Tree:                    [A] [B] [C] [D] [E] [F]
```

For node at index \( i \):
- Parent: \( \lfloor i/2 \rfloor \)
- Left child: \( 2i \)
- Right child: \( 2i + 1 \)

### Core Operations

| Operation | Description | Complexity |
|-----------|-------------|------------|
| `insert(x)` | Add element, then bubble up | \( O(\log n) \) |
| `extract()` / `pop()` | Remove root, replace with last element, bubble down | \( O(\log n) \) |
| `peek()` | Return root | \( O(1) \) |
| `buildHeap(a)` | Build heap from array | \( O(n) \) |
| `heapify(i)` | Restore heap property at node i | \( O(\log n) \) |

### Heap Sort

1. Build a max-heap from the array (\( O(n) \)).
2. Repeatedly extract the root (swap with last, reduce heap size, heapify).
3. Total: \( O(n \log n) \), in-place.

## Examples

### Example 1: Max-Heap Implementation

```cpp
#include <iostream>
#include <vector>
#include <stdexcept>

template <typename T>
class MaxHeap {
private:
    std::vector<T> heap;

    int parent(int i) const { return (i - 1) / 2; }
    int left(int i) const { return 2 * i + 1; }
    int right(int i) const { return 2 * i + 2; }

    void siftUp(int i) {
        while (i > 0 && heap[parent(i)] < heap[i]) {
            std::swap(heap[parent(i)], heap[i]);
            i = parent(i);
        }
    }

    void siftDown(int i) {
        int maxIdx = i;
        int l = left(i);
        int r = right(i);

        if (l < heap.size() && heap[l] > heap[maxIdx]) maxIdx = l;
        if (r < heap.size() && heap[r] > heap[maxIdx]) maxIdx = r;

        if (maxIdx != i) {
            std::swap(heap[i], heap[maxIdx]);
            siftDown(maxIdx);
        }
    }

public:
    MaxHeap() = default;

    explicit MaxHeap(const std::vector<T>& arr) {
        heap = arr;
        buildHeap();
    }

    void buildHeap() {
        for (int i = heap.size() / 2 - 1; i >= 0; --i) {
            siftDown(i);
        }
    }

    void insert(const T& value) {
        heap.push_back(value);
        siftUp(heap.size() - 1);
    }

    T extractMax() {
        if (heap.empty()) throw std::out_of_range("Heap is empty");
        T max = heap[0];
        heap[0] = heap.back();
        heap.pop_back();
        if (!heap.empty()) siftDown(0);
        return max;
    }

    T peek() const {
        if (heap.empty()) throw std::out_of_range("Heap is empty");
        return heap[0];
    }

    int size() const { return heap.size(); }
    bool empty() const { return heap.empty(); }

    void print() const {
        for (const T& v : heap) std::cout << v << " ";
        std::cout << "\n";
    }
};
```

### Example 2: Heap Operations

```cpp
#include "maxHeap.h"

int main() {
    MaxHeap<int> h;

    h.insert(10);
    h.insert(30);
    h.insert(20);
    h.insert(50);
    h.insert(40);

    std::cout << "Heap array: ";
    h.print();

    std::cout << "Max: " << h.peek() << "\n";
    std::cout << "Extract max: " << h.extractMax() << "\n";
    std::cout << "Heap after extract: ";
    h.print();

    h.insert(60);
    std::cout << "After insert 60: ";
    h.print();

    // Build heap from array
    std::vector<int> arr = {3, 1, 4, 1, 5, 9, 2, 6};
    MaxHeap<int> h2(arr);
    std::cout << "Heap built from array: ";
    h2.print();

    return 0;
}
```

**Output:**
```
Heap array: 50 40 20 10 30
Max: 50
Extract max: 50
Heap after extract: 40 30 20 10
After insert 60: 60 40 20 10 30
Heap built from array: 9 6 4 3 5 1 2 1
```

### Example 3: Heap Sort

```cpp
#include <iostream>
#include <vector>

void heapify(std::vector<int>& arr, int n, int i) {
    int largest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) largest = left;
    if (right < n && arr[right] > arr[largest]) largest = right;

    if (largest != i) {
        std::swap(arr[i], arr[largest]);
        heapify(arr, n, largest);
    }
}

void heapSort(std::vector<int>& arr) {
    int n = arr.size();
    // Build max-heap
    for (int i = n / 2 - 1; i >= 0; --i)
        heapify(arr, n, i);
    // Extract one by one
    for (int i = n - 1; i > 0; --i) {
        std::swap(arr[0], arr[i]);
        heapify(arr, i, 0);
    }
}

int main() {
    std::vector<int> arr = {12, 11, 13, 5, 6, 7};
    heapSort(arr);

    std::cout << "Sorted: ";
    for (int x : arr) std::cout << x << " ";
    std::cout << "\n";
    return 0;
}
```

**Output:**
```
Sorted: 5 6 7 11 12 13
```

### Example 4: Min-Heap as Priority Queue

```cpp
#include <iostream>
#include <queue>
#include <vector>

struct Event {
    int timestamp;
    std::string description;

    bool operator>(const Event& other) const {
        return timestamp > other.timestamp;
    }
};

int main() {
    // Min-heap (default max-heap, so use greater)
    std::priority_queue<Event, std::vector<Event>, std::greater<Event>> pq;

    pq.push({100, "Start"});
    pq.push({50, "Prepare"});
    pq.push({200, "Process"});
    pq.push({25, "Initialize"});

    std::cout << "Events (by timestamp):\n";
    while (!pq.empty()) {
        Event e = pq.top(); pq.pop();
        std::cout << "  t=" << e.timestamp << " " << e.description << "\n";
    }

    return 0;
}
```

**Output:**
```
Events (by timestamp):
  t=25 Initialize
  t=50 Prepare
  t=100 Start
  t=200 Process
```

## ðŸ’¡ Pro Tips

- **Building a heap is \(O(n)\), not \(O(n \log n)\)**: The trick is percolate-down (heapify) starting from the last non-leaf node. Percolate-up from each element (Floyd's method) would be \(O(n \log n)\). Always use bottom-up construction.
- **Heap sort is in-place but not stable**: The relative order of equal elements is not preserved. Use merge sort if stability is required.
- **Median finder with two heaps**: Maintain a max-heap for the lower half and a min-heap for the upper half. Insert in \(O(\log n)\); the median is the max-heap's root in \(O(1)\).
- **`decreaseKey` in Dijkstra**: To implement Dijkstra's algorithm efficiently, you need a priority queue that supports priority updates. A binary heap with an index array mapping vertex â†’ heap position enables \(O(\log n)\) decreaseKey.

## One-Sentence Takeaways

- Heaps are complete binary trees stored implicitly in arrays with \(O(\log n)\) insert and extract.
- Max-heap: parent â‰¥ children; min-heap: parent â‰¤ children.
- Building a heap from an array is \(O(n)\) using bottom-up heapify.
- Heap sort sorts in place in \(O(n \log n)\) time.
- Priority queues are typically implemented with binary heaps.
- Two heaps can maintain running median in \(O(\log n)\) per insertion.

## Concept Comparison Table

| Feature | Binary Heap | BST | Sorted Array |
|---------|-------------|-----|--------------|
| Insert | \(O(\log n)\) | \(O(\log n)\) avg | \(O(n)\) |
| Extract min | \(O(\log n)\) | \(O(\log n)\) avg | \(O(1)\) |
| Find min | \(O(1)\) | \(O(\log n)\) (leftmost) | \(O(1)\) |
| Search | \(O(n)\) | \(O(\log n)\) avg | \(O(\log n)\) |
| Merge | \(O(n)\) | \(O(n)\) | \(O(n)\) |
| In-place sort | \(O(n \log n)\) | \(O(n \log n)\) | Already sorted |

## Quick Reference: Heap Array Indexing

| Operation | Formula | Example (n=7) |
|-----------|---------|---------------|
| Parent of i | \((i-1)/2\) | i=5 â†’ parent=2 |
| Left child of i | \(2i + 1\) | i=1 â†’ left=3 |
| Right child of i | \(2i + 2\) | i=1 â†’ right=4 |
| Leaf range | \(\lfloor n/2 \rfloor\) to \(n-1\) | 3 to 6 |
| Last non-leaf | \(\lfloor n/2 \rfloor - 1\) | 2 |

## Cross-Application Matrix

| Algorithm | Heap Use | Complexity Impact |
|-----------|----------|-------------------|
| Dijkstra's shortest path | Extract min, decreaseKey | \(O((V+E)\log V)\) |
| Prim's MST | Extract min, decreaseKey | \(O((V+E)\log V)\) |
| Heap sort | Build â†’ extract all | \(O(n \log n)\) |
| K-way merge | Build heap of k elements | \(O(k + n \log k)\) |
| Median finder | Max-heap + min-heap | \(O(\log n)\) per insert |

## Chapter Quiz

1. **What is the time complexity of building a heap from an array?**
   - a) \(O(n \log n)\)
   - b) \(O(n)\) âœ“
   - c) \(O(\log n)\)
   - d) \(O(n^2)\)

2. **In a max-heap, the root is:**
   - a) The smallest element
   - b) The largest element âœ“
   - c) Random
   - d) Middle element

3. **What is heap sort's worst-case complexity?**
   - a) \(O(n \log n)\) âœ“
   - b) \(O(n^2)\)
   - c) \(O(n)\)
   - d) \(O(\log n)\)

4. **The left child of index i is at:**
   - a) \(2i\)
   - b) \(2i + 1\) âœ“
   - c) \(i/2\)
   - d) \(i + 1\)

5. **Which data structure is a heap usually used to implement?**
   - a) Stack
   - b) Priority queue âœ“
   - c) Hash table
   - d) Queue

**Answers:** 1-b, 2-b, 3-a, 4-b, 5-b

## Summary

- Heaps are complete binary trees stored in arrays.
- Max-heap: root is the largest element; min-heap: root is the smallest.
- Insert and extract are \( O(\log n) \); building a heap is \( O(n) \).
- Heap sort runs in \( O(n \log n) \) and is in-place.
- Heaps are the standard implementation for priority queues.

## Exercises

### Review Questions

1. Why can a heap be stored in an array without explicit pointers?
2. What is the difference between a min-heap and a max-heap?
3. Why is building a heap from an array \( O(n) \) rather than \( O(n \log n) \)?

### Application Problems

4. Implement a min-heap using the max-heap code by changing comparisons.
5. Write a function that merges k sorted arrays using a min-heap.
6. Implement a priority queue that supports `decreaseKey` (change the priority of an element).

### Challenge Problem

7. Implement a **Median Finder** data structure that supports \( O(\log n) \) insertion and \( O(1) \) median retrieval. Use two heaps: a max-heap for the lower half and a min-heap for the upper half.
