# Queues - Quick Concepts Guide

## Core Concepts

### What is a Queue?
A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle. Elements are added at the rear and removed from the front.

### Basic Queue Operations
```java
interface Queue<T> {
    void enqueue(T item);     // Add to rear
    T dequeue();             // Remove from front
    T peek();                // View front element
    boolean isEmpty();       // Check if empty
    int size();              // Get size
}
```

## Queue Implementations

### 1. Array-based Queue
```java
class ArrayQueue {
    private int[] data;
    private int front, rear, size;

    public ArrayQueue(int capacity) {
        data = new int[capacity];
        front = 0;
        rear = -1;
        size = 0;
    }

    public void enqueue(int item) {
        if (size == data.length) return; // Full
        rear = (rear + 1) % data.length;
        data[rear] = item;
        size++;
    }

    public int dequeue() {
        if (size == 0) return -1; // Empty
        int item = data[front];
        front = (front + 1) % data.length;
        size--;
        return item;
    }
}
```

### 2. Linked List Queue
```java
class LinkedQueue {
    private Node front, rear;

    public void enqueue(int item) {
        Node newNode = new Node(item);
        if (rear == null) {
            front = rear = newNode;
        } else {
            rear.next = newNode;
            rear = newNode;
        }
    }

    public int dequeue() {
        if (front == null) return -1;
        int item = front.data;
        front = front.next;
        if (front == null) rear = null;
        return item;
    }
}
```

### 3. Circular Queue
```java
class CircularQueue {
    private int[] data;
    private int front, rear, size, capacity;

    public CircularQueue(int k) {
        data = new int[k];
        capacity = k;
        front = -1;
        rear = -1;
        size = 0;
    }

    public boolean enQueue(int value) {
        if (isFull()) return false;
        rear = (rear + 1) % capacity;
        data[rear] = value;
        size++;
        return true;
    }

    public boolean deQueue() {
        if (isEmpty()) return false;
        front = (front + 1) % capacity;
        size--;
        return true;
    }
}
```

## Queue Variants

### Priority Queue
- Elements ordered by priority, not insertion order
- Java: `PriorityQueue<Integer> pq = new PriorityQueue<>();`
- Operations: O(log n) for insert/delete

### Deque (Double-Ended Queue)
- Elements can be added/removed from both ends
- Java: `Deque<Integer> deque = new LinkedList<>();`
- Useful for sliding window problems

## Common Queue Patterns

### 1. BFS Traversal
```java
public void bfs(TreeNode root) {
    if (root == null) return;

    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);

    while (!queue.isEmpty()) {
        TreeNode node = queue.poll();
        // Process node

        if (node.left != null) queue.offer(node.left);
        if (node.right != null) queue.offer(node.right);
    }
}
```

### 2. Level Order Traversal
```java
public List<List<Integer>> levelOrder(TreeNode root) {
    List<List<Integer>> result = new ArrayList<>();
    if (root == null) return result;

    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);

    while (!queue.isEmpty()) {
        int levelSize = queue.size();
        List<Integer> level = new ArrayList<>();

        for (int i = 0; i < levelSize; i++) {
            TreeNode node = queue.poll();
            level.add(node.val);

            if (node.left != null) queue.offer(node.left);
            if (node.right != null) queue.offer(node.right);
        }

        result.add(level);
    }

    return result;
}
```

### 3. Sliding Window Maximum (using Deque)
```java
public int[] maxSlidingWindow(int[] nums, int k) {
    if (nums == null || nums.length == 0) return new int[0];

    Deque<Integer> deque = new LinkedList<>();
    int[] result = new int[nums.length - k + 1];

    for (int i = 0; i < nums.length; i++) {
        // Remove elements outside window
        while (!deque.isEmpty() && deque.peekFirst() < i - k + 1) {
            deque.pollFirst();
        }

        // Remove smaller elements
        while (!deque.isEmpty() && nums[deque.peekLast()] < nums[i]) {
            deque.pollLast();
        }

        deque.offerLast(i);

        // Add to result when window is complete
        if (i >= k - 1) {
            result[i - k + 1] = nums[deque.peekFirst()];
        }
    }

    return result;
}
```

## Time Complexity Analysis

| Operation | Array Queue | Linked Queue | Circular Queue |
|-----------|-------------|--------------|----------------|
| Enqueue   | O(1)       | O(1)        | O(1)          |
| Dequeue   | O(1)       | O(1)        | O(1)          |
| Peek      | O(1)       | O(1)        | O(1)          |
| IsEmpty   | O(1)       | O(1)        | O(1)          |

## Space Complexity
- **Array Queue**: O(n) fixed size
- **Linked Queue**: O(n) dynamic
- **Circular Queue**: O(n) fixed size, efficient space usage

## Applications

### 1. BFS Algorithms
- Shortest path in unweighted graphs
- Level-order tree traversal
- Web crawling
- Social network analysis

### 2. Operating Systems
- CPU scheduling
- Disk scheduling
- Print job management
- Buffer management

### 3. Real-world Applications
- Call center phone systems
- Restaurant order management
- Traffic management
- Task scheduling

## Interview Problem Patterns

### Array Problems
- Implement queue with stacks
- Design circular queue
- Moving average from data stream

### Tree Problems
- Level order traversal
- Maximum depth (BFS)
- Minimum depth
- Right side view

### Graph Problems
- BFS traversal
- Shortest path (unweighted)
- Connected components
- Topological sort

## Edge Cases to Consider
- Empty queue operations
- Full queue (circular)
- Single element queue
- Large number of enqueue/dequeue operations
- Memory constraints

## Common Mistakes
- Confusing queue with stack operations
- Not handling circular queue wrap-around
- Forgetting to check empty/full conditions
- Using wrong queue implementation
- Not considering thread-safety for concurrent access

## Optimization Tips
- Use ArrayDeque for better performance than LinkedList
- Pre-allocate capacity when known
- Consider priority queues for weighted elements
- Use circular queues for fixed-size buffers
- Implement custom queues for specific constraints