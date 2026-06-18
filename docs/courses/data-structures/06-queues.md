# Chapter 6: Queues

## Learning Objectives

- Define the Queue ADT (First-In-First-Out).
- Implement a circular queue using arrays.
- Implement a queue using linked lists.
- Describe priority queues and deques.
- Apply queues to scheduling and breadth-first processing.

## Theory

![Queues Flowchart](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/data-structures/ch06-queues.png)

### Queue ADT

A queue follows the First-In-First-Out (FIFO) discipline: elements are inserted at the **rear** and removed from the **front**.

| Operation | Description | Complexity |
|-----------|-------------|------------|
| `enqueue(x)` | Insert element at the rear | \( O(1) \) |
| `dequeue()` | Remove and return the front element | \( O(1) \) |
| `front()` | Return the front element without removing | \( O(1) \) |
| `isEmpty()` | Check if the queue is empty | \( O(1) \) |
| `size()` | Return the number of elements | \( O(1) \) |

### Circular Queue

A naive array queue wastes space because after dequeues the front pointer moves forward, leaving unused slots at the beginning. A circular queue wraps around: when the rear reaches the end, it continues at index 0 (modulo arithmetic).

### Priority Queue

In a priority queue, elements have a priority value; the element with the highest (or lowest) priority is dequeued first. Typically implemented with a binary heap (\( O(\log n) \) insert and extract).

### Deque (Double-Ended Queue)

A deque allows insertion and deletion at both ends in \( O(1) \) time, combining stack and queue capabilities.

## Examples

### Example 1: Circular Array Queue

```cpp
#include <iostream>
#include <stdexcept>

template <typename T>
class CircularQueue {
private:
    T* data;
    int capacity;
    int frontIndex;
    int rearIndex;
    int count;

public:
    CircularQueue(int cap = 8) : capacity(cap), frontIndex(0), rearIndex(0), count(0) {
        data = new T[capacity];
    }

    ~CircularQueue() { delete[] data; }

    void enqueue(const T& value) {
        if (count == capacity) {
            resize();
        }
        data[rearIndex] = value;
        rearIndex = (rearIndex + 1) % capacity;
        ++count;
    }

    T dequeue() {
        if (isEmpty()) throw std::out_of_range("Queue underflow");
        T value = data[frontIndex];
        frontIndex = (frontIndex + 1) % capacity;
        --count;
        return value;
    }

    T front() const {
        if (isEmpty()) throw std::out_of_range("Queue is empty");
        return data[frontIndex];
    }

    bool isEmpty() const { return count == 0; }
    int size() const { return count; }

private:
    void resize() {
        int newCap = capacity * 2;
        T* newData = new T[newCap];
        for (int i = 0; i < count; ++i) {
            newData[i] = data[(frontIndex + i) % capacity];
        }
        delete[] data;
        data = newData;
        capacity = newCap;
        frontIndex = 0;
        rearIndex = count;
    }
};

int main() {
    CircularQueue<int> q;
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);

    std::cout << "Front: " << q.front() << "\n";
    std::cout << "Dequeue: " << q.dequeue() << "\n";
    std::cout << "Dequeue: " << q.dequeue() << "\n";

    q.enqueue(4);
    q.enqueue(5);
    std::cout << "Size: " << q.size() << "\n";

    while (!q.isEmpty()) {
        std::cout << q.dequeue() << " ";
    }
    std::cout << "\n";

    return 0;
}
```

**Output:**
```
Front: 1
Dequeue: 1
Dequeue: 2
Size: 3
3 4 5
```

### Example 2: Linked-List Queue

```cpp
#include <iostream>
#include <stdexcept>

template <typename T>
class LinkedQueue {
private:
    struct Node {
        T data;
        Node* next;
        Node(const T& value) : data(value), next(nullptr) {}
    };
    Node* head;
    Node* tail;
    int count;

public:
    LinkedQueue() : head(nullptr), tail(nullptr), count(0) {}

    ~LinkedQueue() {
        while (head) {
            Node* temp = head;
            head = head->next;
            delete temp;
        }
    }

    void enqueue(const T& value) {
        Node* newNode = new Node(value);
        if (tail) tail->next = newNode;
        else head = newNode;
        tail = newNode;
        ++count;
    }

    T dequeue() {
        if (isEmpty()) throw std::out_of_range("Queue underflow");
        Node* temp = head;
        T value = temp->data;
        head = head->next;
        if (!head) tail = nullptr;
        delete temp;
        --count;
        return value;
    }

    T front() const {
        if (isEmpty()) throw std::out_of_range("Queue is empty");
        return head->data;
    }

    bool isEmpty() const { return count == 0; }
    int size() const { return count; }
};

int main() {
    LinkedQueue<std::string> q;
    q.enqueue("first");
    q.enqueue("second");
    q.enqueue("third");

    std::cout << q.dequeue() << "\n";
    std::cout << q.dequeue() << "\n";
    q.enqueue("fourth");
    std::cout << q.dequeue() << "\n";
    std::cout << q.dequeue() << "\n";

    return 0;
}
```

**Output:**
```
first
second
third
fourth
```

### Example 3: Deque (Double-Ended Queue)

```cpp
#include <iostream>
#include <deque>

int main() {
    std::deque<int> dq;

    dq.push_back(10);
    dq.push_back(20);
    dq.push_front(5);
    dq.push_front(1);

    std::cout << "Deque: ";
    for (int x : dq) std::cout << x << " ";
    std::cout << "\n";

    std::cout << "pop_front: " << dq.front() << "\n";
    dq.pop_front();
    std::cout << "pop_back: " << dq.back() << "\n";
    dq.pop_back();

    std::cout << "Remaining: ";
    for (int x : dq) std::cout << x << " ";
    std::cout << "\n";

    return 0;
}
```

**Output:**
```
Deque: 1 5 10 20
pop_front: 1
pop_back: 20
Remaining: 5 10
```

### Example 4: Priority Queue with Custom Comparator

```cpp
#include <iostream>
#include <queue>
#include <vector>

struct Task {
    std::string name;
    int priority;

    bool operator<(const Task& other) const {
        return priority < other.priority; // higher priority first
    }
};

int main() {
    std::priority_queue<Task> pq;
    pq.push({"Write report", 3});
    pq.push({"Fix critical bug", 10});
    pq.push({"Check email", 1});
    pq.push({"Review PR", 5});

    while (!pq.empty()) {
        Task t = pq.top(); pq.pop();
        std::cout << "[Priority " << t.priority << "] " << t.name << "\n";
    }

    return 0;
}
```

**Output:**
```
[Priority 10] Fix critical bug
[Priority 5] Review PR
[Priority 3] Write report
[Priority 1] Check email
```

## ðŸ’¡ Pro Tips

- **Circular array queue needs one sentinel slot**: Use front and rear indices where an empty queue has front == rear, and a full queue has (rear + 1) % size == front. This wastes one slot but avoids tracking separate size.
- **BFS is queue's natural domain**: Push the start node, mark visited, then repeatedly pop, process neighbors, and push unvisited ones. The queue guarantees level-by-level exploration.
- **Monotonic queue for sliding window max**: Maintain a deque where elements are in decreasing order. Before pushing, pop from the back while the back is smaller than the new element. The front is always the window max.
- **Priority queue with `decreaseKey` needs a heap index**: For Dijkstra's algorithm, maintain an array mapping vertex ID â†’ heap position. This allows \(O(\log n)\) priority updates instead of \(O(n)\) search.

## One-Sentence Takeaways

- FIFO means the first enqueued element is the first dequeued.
- Circular arrays avoid wasted space by wrapping indices modulo capacity.
- Linked queues have no capacity limit but allocate per node.
- Deques allow insertion and deletion at both ends.
- Priority queues use a binary heap for \(O(\log n)\) insertion and extraction.
- Queues are essential for BFS, scheduling, and buffering.

## Concept Comparison Table

| Feature | Array Queue | Circular Queue | Linked Queue | Deque |
|---------|-------------|----------------|--------------|-------|
| Enqueue | \(O(1)\) | \(O(1)\) | \(O(1)\) | \(O(1)\) both ends |
| Dequeue | \(O(1)\) | \(O(1)\) | \(O(1)\) | \(O(1)\) both ends |
| Space waste | Wraparound needs free slot | 1 sentinel slot | Per-node ptr overhead | 2 ptrs per node |
| Capacity limit | Fixed | Fixed | No | No |
| Cache locality | Good | Good | Poor | Poor |

## Quick Reference: When to Use Which Queue

| Need | Best Queue Type |
|------|-----------------|
| Fixed-size buffer | Circular array queue |
| Variable-size FIFO | Linked queue |
| Insert/delete at both ends | Deque |
| Access by priority | Priority queue (binary heap) |
| Sliding window max | Monotonic deque |

## Cross-Application Matrix

| Application | Queue Type | Why |
|-------------|-----------|-----|
| BFS graph traversal | Simple FIFO queue | Level-order processing |
| CPU task scheduling | Priority queue | Higher-priority tasks first |
| Keyboard buffer | Circular queue | Fixed buffer, sequential read |
| Undo history | Deque | Limit size, add/remove from ends |
| Sliding window max | Monotonic deque | \(O(n)\) time overall |
| Packet buffering | Circular queue | Fixed capacity, overwrite oldest |

## Chapter Quiz

1. **What does FIFO stand for?**
   - a) Fast In, Fast Out
   - b) First In, First Out âœ“
   - c) Final In, Final Out
   - d) Fixed Input, Fixed Output

2. **Why does a circular queue waste one slot?**
   - a) Implementation error
   - b) To distinguish empty from full âœ“
   - c) Performance optimization
   - d) Alignment requirement

3. **Which data structure enables priority queue operations?**
   - a) Stack
   - b) Binary heap âœ“
   - c) Hash table
   - d) Linked list

4. **A deque allows insertion at:**
   - a) Front only
   - b) Back only
   - c) Both ends âœ“
   - d) Middle only

5. **Which algorithm uses a queue naturally?**
   - a) DFS
   - b) BFS âœ“
   - c) Binary search
   - d) Merge sort

**Answers:** 1-b, 2-b, 3-b, 4-c, 5-b

## Summary

- Queues enforce FIFO ordering; circular arrays prevent wasted space by wrapping indices.
- Linked queues provide \( O(1) \) enqueue and dequeue without pre-allocated capacity.
- Deques support insertion and deletion at both ends.
- Priority queues order elements by priority, typically via a binary heap.
- Queues are fundamental to BFS, scheduling, and buffering.

## Exercises

### Review Questions

1. Why does a naive array queue waste space? How does circular addressing fix this?
2. What is the key difference between a stack and a queue?
3. When would you choose a deque over a regular queue?

### Application Problems

4. Implement a queue using two stacks.
5. Write a function to reverse the first k elements of a queue.
6. Implement a circular buffer (ring buffer) for a fixed-size data stream.

### Challenge Problem

7. Implement a **Monotonic Queue** data structure that supports `push(x)`, `pop()`, and `getMax()` in amortized \( O(1) \) time. Use it to solve the sliding window maximum problem.
