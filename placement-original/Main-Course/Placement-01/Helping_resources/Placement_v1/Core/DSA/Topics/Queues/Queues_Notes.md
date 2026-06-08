# Queues: Comprehensive Notes

## 1. Introduction to Queues

A queue is a linear data structure that follows the First In First Out (FIFO) principle. The first element added to the queue is the first one to be removed.

### Key Characteristics
- FIFO (First In First Out) principle
- Elements are added at the rear (enqueue) and removed from the front (dequeue)
- Restricted access data structure
- Used for ordering processes based on arrival time

### Real-world Analogies
- Queue at a ticket counter
- Printer queue
- Traffic on a single lane road
- Call center queue

### Visual Representation
```
  Front                 Rear
    ↓                     ↓
  ┌───┬───┬───┬───┬───┬───┐
  │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │
  └───┴───┴───┴───┴───┴───┘
  
  First In → First Out
```

## 2. Basic Operations

### Enqueue
Adds an element to the rear of the queue.
- Time Complexity: O(1)

```java
public void enqueue(int data) {
    // Create a new node
    Node newNode = new Node(data);
    
    // If queue is empty, set both front and rear to new node
    if (isEmpty()) {
        front = rear = newNode;
        return;
    }
    
    // Add the new node at the end and update rear
    rear.next = newNode;
    rear = newNode;
}
```

### Dequeue
Removes and returns the element from the front of the queue.
- Time Complexity: O(1)

```java
public int dequeue() {
    // Check if queue is empty
    if (isEmpty()) {
        throw new NoSuchElementException("Queue is empty");
    }
    
    // Get the data from the front node
    int data = front.data;
    
    // Update the front pointer
    front = front.next;
    
    // If front becomes null, set rear to null as well
    if (front == null) {
        rear = null;
    }
    
    // Return the data
    return data;
}
```

### Peek (or Front)
Returns the element at the front without removing it.
- Time Complexity: O(1)

```java
public int peek() {
    // Check if queue is empty
    if (isEmpty()) {
        throw new NoSuchElementException("Queue is empty");
    }
    
    // Return the data from the front node
    return front.data;
}
```

### isEmpty
Checks if the queue is empty.
- Time Complexity: O(1)

```java
public boolean isEmpty() {
    return front == null;
}
```

### size
Returns the number of elements in the queue.
- Time Complexity: O(1) with a size variable, O(n) without

```java
public int size() {
    return size; // If maintaining a size variable
    
    // Alternative: count nodes
    int count = 0;
    Node current = front;
    while (current != null) {
        count++;
        current = current.next;
    }
    return count;
}
```

## 3. Queue Implementations

### Array-based Implementation
```java
public class ArrayQueue {
    private int[] array;
    private int front;
    private int rear;
    private int capacity;
    private int size;
    
    public ArrayQueue(int capacity) {
        this.capacity = capacity;
        this.array = new int[capacity];
        this.front = 0;
        this.rear = -1;
        this.size = 0;
    }
    
    public void enqueue(int data) {
        if (isFull()) {
            throw new IllegalStateException("Queue is full");
        }
        
        rear = (rear + 1) % capacity;
        array[rear] = data;
        size++;
    }
    
    public int dequeue() {
        if (isEmpty()) {
            throw new NoSuchElementException("Queue is empty");
        }
        
        int data = array[front];
        front = (front + 1) % capacity;
        size--;
        return data;
    }
    
    public int peek() {
        if (isEmpty()) {
            throw new NoSuchElementException("Queue is empty");
        }
        
        return array[front];
    }
    
    public boolean isEmpty() {
        return size == 0;
    }
    
    public boolean isFull() {
        return size == capacity;
    }
    
    public int size() {
        return size;
    }
}
```

### Linked List-based Implementation
```java
public class LinkedQueue {
    private class Node {
        int data;
        Node next;
        
        Node(int data) {
            this.data = data;
        }
    }
    
    private Node front;
    private Node rear;
    private int size;
    
    public LinkedQueue() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }
    
    public void enqueue(int data) {
        Node newNode = new Node(data);
        
        if (isEmpty()) {
            front = rear = newNode;
        } else {
            rear.next = newNode;
            rear = newNode;
        }
        
        size++;
    }
    
    public int dequeue() {
        if (isEmpty()) {
            throw new NoSuchElementException("Queue is empty");
        }
        
        int data = front.data;
        front = front.next;
        
        if (front == null) {
            rear = null;
        }
        
        size--;
        return data;
    }
    
    public int peek() {
        if (isEmpty()) {
            throw new NoSuchElementException("Queue is empty");
        }
        
        return front.data;
    }
    
    public boolean isEmpty() {
        return front == null;
    }
    
    public int size() {
        return size;
    }
}
```

### Circular Queue
```java
public class CircularQueue {
    private int[] array;
    private int front;
    private int rear;
    private int capacity;
    private int size;
    
    public CircularQueue(int capacity) {
        this.capacity = capacity;
        this.array = new int[capacity];
        this.front = 0;
        this.rear = -1;
        this.size = 0;
    }
    
    public void enqueue(int data) {
        if (isFull()) {
            throw new IllegalStateException("Queue is full");
        }
        
        rear = (rear + 1) % capacity;
        array[rear] = data;
        size++;
    }
    
    public int dequeue() {
        if (isEmpty()) {
            throw new NoSuchElementException("Queue is empty");
        }
        
        int data = array[front];
        front = (front + 1) % capacity;
        size--;
        return data;
    }
    
    public int peek() {
        if (isEmpty()) {
            throw new NoSuchElementException("Queue is empty");
        }
        
        return array[front];
    }
    
    public boolean isEmpty() {
        return size == 0;
    }
    
    public boolean isFull() {
        return size == capacity;
    }
    
    public int size() {
        return size;
    }
}
```

### Using Java's Built-in Queue
```java
import java.util.LinkedList;
import java.util.Queue;

public class QueueExample {
    public static void main(String[] args) {
        Queue<Integer> queue = new LinkedList<>();
        
        // Enqueue elements
        queue.offer(10);
        queue.offer(20);
        queue.offer(30);
        
        // Peek at the front element
        System.out.println("Front element: " + queue.peek()); // 10
        
        // Dequeue elements
        System.out.println("Dequeued: " + queue.poll()); // 10
        System.out.println("Dequeued: " + queue.poll()); // 20
        
        // Check if empty
        System.out.println("Is empty? " + queue.isEmpty()); // false
        
        // Size
        System.out.println("Size: " + queue.size()); // 1
    }
}
```

## 4. Applications of Queues

### Breadth-First Search (BFS)
```java
public void bfs(Graph graph, int startVertex) {
    boolean[] visited = new boolean[graph.getVertexCount()];
    Queue<Integer> queue = new LinkedList<>();
    
    visited[startVertex] = true;
    queue.offer(startVertex);
    
    while (!queue.isEmpty()) {
        int vertex = queue.poll();
        System.out.print(vertex + " ");
        
        for (int adjacent : graph.getAdjacencyList(vertex)) {
            if (!visited[adjacent]) {
                visited[adjacent] = true;
                queue.offer(adjacent);
            }
        }
    }
}
```

### Level Order Traversal of a Tree
```java
public void levelOrderTraversal(TreeNode root) {
    if (root == null) {
        return;
    }
    
    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);
    
    while (!queue.isEmpty()) {
        TreeNode node = queue.poll();
        System.out.print(node.val + " ");
        
        if (node.left != null) {
            queue.offer(node.left);
        }
        
        if (node.right != null) {
            queue.offer(node.right);
        }
    }
}
```

### Task Scheduling
```java
public class TaskScheduler {
    private Queue<Task> taskQueue;
    
    public TaskScheduler() {
        this.taskQueue = new LinkedList<>();
    }
    
    public void addTask(Task task) {
        taskQueue.offer(task);
    }
    
    public void executeTasks() {
        while (!taskQueue.isEmpty()) {
            Task task = taskQueue.poll();
            task.execute();
        }
    }
}
```

### Print Queue
```java
public class PrintQueue {
    private Queue<PrintJob> jobQueue;
    
    public PrintQueue() {
        this.jobQueue = new LinkedList<>();
    }
    
    public void addJob(PrintJob job) {
        jobQueue.offer(job);
        System.out.println("Added job: " + job.getName());
    }
    
    public void processPrintJobs() {
        while (!jobQueue.isEmpty()) {
            PrintJob job = jobQueue.poll();
            System.out.println("Printing: " + job.getName());
            job.print();
        }
    }
}
```

### CPU Scheduling
```java
public class CPUScheduler {
    private Queue<Process> readyQueue;
    
    public CPUScheduler() {
        this.readyQueue = new LinkedList<>();
    }
    
    public void addProcess(Process process) {
        readyQueue.offer(process);
    }
    
    public void executeRoundRobin(int timeQuantum) {
        while (!readyQueue.isEmpty()) {
            Process process = readyQueue.poll();
            int remainingTime = process.execute(timeQuantum);
            
            if (remainingTime > 0) {
                readyQueue.offer(process);
            }
        }
    }
}
```

## 5. Common Queue Problems and Patterns

### Pattern 1: BFS for Shortest Path
```java
public int shortestPath(Graph graph, int start, int end) {
    boolean[] visited = new boolean[graph.getVertexCount()];
    Queue<Integer> queue = new LinkedList<>();
    int[] distance = new int[graph.getVertexCount()];
    
    visited[start] = true;
    queue.offer(start);
    distance[start] = 0;
    
    while (!queue.isEmpty()) {
        int vertex = queue.poll();
        
        if (vertex == end) {
            return distance[vertex];
        }
        
        for (int adjacent : graph.getAdjacencyList(vertex)) {
            if (!visited[adjacent]) {
                visited[adjacent] = true;
                queue.offer(adjacent);
                distance[adjacent] = distance[vertex] + 1;
            }
        }
    }
    
    return -1; // No path found
}
```

### Pattern 2: Level Order Processing
```java
public List<List<Integer>> levelOrder(TreeNode root) {
    List<List<Integer>> result = new ArrayList<>();
    
    if (root == null) {
        return result;
    }
    
    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);
    
    while (!queue.isEmpty()) {
        int levelSize = queue.size();
        List<Integer> currentLevel = new ArrayList<>();
        
        for (int i = 0; i < levelSize; i++) {
            TreeNode node = queue.poll();
            currentLevel.add(node.val);
            
            if (node.left != null) {
                queue.offer(node.left);
            }
            
            if (node.right != null) {
                queue.offer(node.right);
            }
        }
        
        result.add(currentLevel);
    }
    
    return result;
}
```

### Pattern 3: Sliding Window Maximum
```java
public int[] maxSlidingWindow(int[] nums, int k) {
    if (nums == null || nums.length == 0 || k <= 0) {
        return new int[0];
    }
    
    int n = nums.length;
    int[] result = new int[n - k + 1];
    Deque<Integer> deque = new ArrayDeque<>(); // Store indices
    
    for (int i = 0; i < n; i++) {
        // Remove elements outside the window
        while (!deque.isEmpty() && deque.peekFirst() < i - k + 1) {
            deque.pollFirst();
        }
        
        // Remove smaller elements
        while (!deque.isEmpty() && nums[deque.peekLast()] < nums[i]) {
            deque.pollLast();
        }
        
        deque.offerLast(i);
        
        // Add to result if window has k elements
        if (i >= k - 1) {
            result[i - k + 1] = nums[deque.peekFirst()];
        }
    }
    
    return result;
}
```

### Pattern 4: Queue Reconstruction
```java
public int[][] reconstructQueue(int[][] people) {
    // Sort by height (desc) and k (asc)
    Arrays.sort(people, (a, b) -> a[0] == b[0] ? a[1] - b[1] : b[0] - a[0]);
    
    List<int[]> result = new ArrayList<>();
    
    // Insert each person at their k position
    for (int[] person : people) {
        result.add(person[1], person);
    }
    
    return result.toArray(new int[people.length][2]);
}
```

## 6. Advanced Queue Concepts

### Priority Queue
A queue where elements are dequeued based on priority rather than insertion order.

```java
public class PriorityQueueExample {
    public static void main(String[] args) {
        // Min heap (natural ordering)
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        
        // Max heap (reverse ordering)
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
        
        // Add elements
        minHeap.offer(5);
        minHeap.offer(2);
        minHeap.offer(8);
        minHeap.offer(1);
        
        // Remove elements (in order of priority)
        while (!minHeap.isEmpty()) {
            System.out.print(minHeap.poll() + " "); // 1 2 5 8
        }
        
        // Custom comparator
        PriorityQueue<String> pq = new PriorityQueue<>((a, b) -> a.length() - b.length());
        pq.offer("Apple");
        pq.offer("Banana");
        pq.offer("Cherry");
        
        while (!pq.isEmpty()) {
            System.out.println(pq.poll()); // Apple, Cherry, Banana (by length)
        }
    }
}
```

### Deque (Double-Ended Queue)
A queue that allows insertion and removal from both ends.

```java
public class DequeExample {
    public static void main(String[] args) {
        Deque<Integer> deque = new ArrayDeque<>();
        
        // Add elements
        deque.offerFirst(1); // [1]
        deque.offerLast(2);  // [1, 2]
        deque.offerFirst(0); // [0, 1, 2]
        deque.offerLast(3);  // [0, 1, 2, 3]
        
        // Peek elements
        System.out.println("First: " + deque.peekFirst()); // 0
        System.out.println("Last: " + deque.peekLast());   // 3
        
        // Remove elements
        System.out.println("Remove first: " + deque.pollFirst()); // 0
        System.out.println("Remove last: " + deque.pollLast());   // 3
        
        // Remaining elements
        System.out.println("Remaining: " + deque); // [1, 2]
    }
}
```

### Circular Buffer
A fixed-size queue that wraps around when full.

```java
public class CircularBuffer<T> {
    private T[] buffer;
    private int capacity;
    private int writePos;
    private int readPos;
    private int size;
    
    @SuppressWarnings("unchecked")
    public CircularBuffer(int capacity) {
        this.capacity = capacity;
        this.buffer = (T[]) new Object[capacity];
        this.writePos = 0;
        this.readPos = 0;
        this.size = 0;
    }
    
    public void write(T item) {
        if (isFull()) {
            throw new IllegalStateException("Buffer is full");
        }
        
        buffer[writePos] = item;
        writePos = (writePos + 1) % capacity;
        size++;
    }
    
    public T read() {
        if (isEmpty()) {
            throw new NoSuchElementException("Buffer is empty");
        }
        
        T item = buffer[readPos];
        buffer[readPos] = null; // Help GC
        readPos = (readPos + 1) % capacity;
        size--;
        return item;
    }
    
    public boolean isEmpty() {
        return size == 0;
    }
    
    public boolean isFull() {
        return size == capacity;
    }
    
    public int size() {
        return size;
    }
}
```

### Blocking Queue
A queue that blocks when attempting to dequeue from an empty queue or enqueue to a full queue.

```java
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.BlockingQueue;

public class BlockingQueueExample {
    public static void main(String[] args) {
        BlockingQueue<Integer> queue = new ArrayBlockingQueue<>(5);
        
        // Producer thread
        new Thread(() -> {
            try {
                for (int i = 0; i < 10; i++) {
                    queue.put(i); // Blocks if queue is full
                    System.out.println("Produced: " + i);
                    Thread.sleep(100);
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }).start();
        
        // Consumer thread
        new Thread(() -> {
            try {
                for (int i = 0; i < 10; i++) {
                    int value = queue.take(); // Blocks if queue is empty
                    System.out.println("Consumed: " + value);
                    Thread.sleep(200);
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }).start();
    }
}
```

## 7. Time and Space Complexity

| Operation | Time Complexity | Space Complexity |
|-----------|----------------|-----------------|
| Enqueue   | O(1)           | O(1)            |
| Dequeue   | O(1)           | O(1)            |
| Peek      | O(1)           | O(1)            |
| isEmpty   | O(1)           | O(1)            |
| Size      | O(1)*          | O(1)            |

*O(1) if maintaining a size variable, O(n) otherwise

## 8. Best Practices

1. **Always check for empty queue** before dequeue or peek operations
2. **Consider edge cases**: empty queue, single element, multiple elements
3. **Choose the right implementation** based on requirements (array vs linked list)
4. **Use built-in queue** when possible for simplicity
5. **Consider thread safety** for concurrent applications
6. **Use circular queue** for fixed-size applications to avoid wasting space

## 9. Learning Strategy for Queues

1. **Master the basics**: queue operations, implementations
2. **Understand common applications**: BFS, level order traversal
3. **Practice problems by pattern**: BFS, level order processing
4. **Analyze solutions**: understand time and space complexity
5. **Implement from scratch**: don't memorize solutions, understand the approach

## 10. Common Interview Questions

1. Implement a queue using arrays/linked lists
2. Implement a queue using stacks
3. Implement a circular queue
4. Level order traversal of a binary tree
5. BFS for shortest path in a graph
6. Sliding window maximum
7. Design a queue with getMin() operation
8. Implement a priority queue
9. Queue reconstruction by height
10. Implement a queue with fixed capacity

## Resources for Further Learning

1. **Books**:
   - "Introduction to Algorithms" by CLRS
   - "Cracking the Coding Interview" by Gayle Laakmann McDowell

2. **Online Platforms**:
   - LeetCode: Queue section
   - GeeksforGeeks: Queue data structure
   - HackerRank: Queue challenges

3. **YouTube Channels**:
   - [mycodeschool](https://www.youtube.com/watch?v=okr-XE8yTO8) - Queue Data Structure
   - [Abdul Bari](https://www.youtube.com/watch?v=YqrFeU90Coo) - Queue Implementation
   - [Back To Back SWE](https://www.youtube.com/watch?v=C_jNInO52EI) - Queue Problems
   - [Striver (takeUforward)](https://www.youtube.com/watch?v=M6GnoUDpqEE) - Queue Questions

4. **Visualization Tools**:
   - [VisuAlgo](https://visualgo.net/en/list) - Queue Visualization
   - [Algorithm Visualizer](https://algorithm-visualizer.org/) - Queue Operations