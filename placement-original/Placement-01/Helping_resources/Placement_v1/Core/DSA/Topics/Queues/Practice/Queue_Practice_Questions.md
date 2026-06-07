# Queue Practice Questions

## Easy Level Questions

### 1. Implement Queue using Array
**Problem:** Implement a queue using an array with operations: enqueue, dequeue, peek, isEmpty, and isFull.

**Example:**
```
Queue q = new Queue(5);
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.peek(); // Returns 1
q.dequeue(); // Returns 1
q.isEmpty(); // Returns false
```

**Approach:**
1. Use an array to store elements
2. Maintain front and rear pointers
3. Use circular array implementation to efficiently use space
4. Implement all required operations

**Solution:**
```java
public class Queue {
    private int[] array;
    private int front;
    private int rear;
    private int capacity;
    private int size;
    
    public Queue(int capacity) {
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

**Time Complexity:** O(1) for all operations  
**Space Complexity:** O(n) where n is the capacity of the queue

### 2. Implement Queue using Stacks
**Problem:** Implement a queue using only two stacks with operations: push, pop, peek, and empty.

**Example:**
```
MyQueue queue = new MyQueue();
queue.push(1);
queue.push(2);
queue.peek();  // returns 1
queue.pop();   // returns 1
queue.empty(); // returns false
```

**Approach:**
1. Use two stacks: one for enqueue operations and one for dequeue operations
2. When dequeuing, if the dequeue stack is empty, transfer all elements from the enqueue stack to the dequeue stack
3. This reverses the order, allowing FIFO behavior

**Solution:**
```java
public class MyQueue {
    private Stack<Integer> stack1; // for enqueue
    private Stack<Integer> stack2; // for dequeue
    
    public MyQueue() {
        stack1 = new Stack<>();
        stack2 = new Stack<>();
    }
    
    public void push(int x) {
        stack1.push(x);
    }
    
    public int pop() {
        if (stack2.isEmpty()) {
            transferStack1ToStack2();
        }
        return stack2.pop();
    }
    
    public int peek() {
        if (stack2.isEmpty()) {
            transferStack1ToStack2();
        }
        return stack2.peek();
    }
    
    public boolean empty() {
        return stack1.isEmpty() && stack2.isEmpty();
    }
    
    private void transferStack1ToStack2() {
        while (!stack1.isEmpty()) {
            stack2.push(stack1.pop());
        }
    }
}
```

**Time Complexity:** O(1) amortized for all operations  
**Space Complexity:** O(n) where n is the number of elements in the queue

### 3. Number of Recent Calls
**Problem:** Implement the RecentCounter class to count recent requests within a certain time frame.

**Example:**
```
RecentCounter counter = new RecentCounter();
counter.ping(1);     // requests = [1], range is [-2999,1], return 1
counter.ping(100);   // requests = [1, 100], range is [-2900,100], return 2
counter.ping(3001);  // requests = [1, 100, 3001], range is [1,3001], return 3
counter.ping(3002);  // requests = [1, 100, 3001, 3002], range is [2,3002], return 3
```

**Approach:**
1. Use a queue to store timestamps of requests
2. For each new ping, add its timestamp to the queue
3. Remove timestamps that are outside the 3000ms window
4. Return the size of the queue

**Solution:**
```java
class RecentCounter {
    private Queue<Integer> requests;
    
    public RecentCounter() {
        requests = new LinkedList<>();
    }
    
    public int ping(int t) {
        requests.offer(t);
        
        // Remove timestamps outside the 3000ms window
        while (!requests.isEmpty() && requests.peek() < t - 3000) {
            requests.poll();
        }
        
        return requests.size();
    }
}
```

**Time Complexity:** O(n) where n is the number of pings that fall outside the time window  
**Space Complexity:** O(n) where n is the number of requests within the time window

## Medium Level Questions

### 4. Design Circular Queue
**Problem:** Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO principle and the last position is connected back to the first position to make a circle.

**Example:**
```
MyCircularQueue circularQueue = new MyCircularQueue(3);
circularQueue.enQueue(1);  // return true
circularQueue.enQueue(2);  // return true
circularQueue.enQueue(3);  // return true
circularQueue.enQueue(4);  // return false, the queue is full
circularQueue.Rear();      // return 3
circularQueue.isFull();    // return true
circularQueue.deQueue();   // return true
circularQueue.enQueue(4);  // return true
circularQueue.Rear();      // return 4
```

**Approach:**
1. Use an array to implement the circular queue
2. Maintain front and rear pointers
3. Use modulo arithmetic to wrap around the array
4. Implement all required operations

**Solution:**
```java
public class MyCircularQueue {
    private int[] array;
    private int front;
    private int rear;
    private int size;
    private int capacity;
    
    public MyCircularQueue(int k) {
        this.capacity = k;
        this.array = new int[k];
        this.front = 0;
        this.rear = -1;
        this.size = 0;
    }
    
    public boolean enQueue(int value) {
        if (isFull()) {
            return false;
        }
        
        rear = (rear + 1) % capacity;
        array[rear] = value;
        size++;
        return true;
    }
    
    public boolean deQueue() {
        if (isEmpty()) {
            return false;
        }
        
        front = (front + 1) % capacity;
        size--;
        return true;
    }
    
    public int Front() {
        if (isEmpty()) {
            return -1;
        }
        
        return array[front];
    }
    
    public int Rear() {
        if (isEmpty()) {
            return -1;
        }
        
        return array[rear];
    }
    
    public boolean isEmpty() {
        return size == 0;
    }
    
    public boolean isFull() {
        return size == capacity;
    }
}
```

**Time Complexity:** O(1) for all operations  
**Space Complexity:** O(k) where k is the capacity of the queue

### 5. Sliding Window Maximum
**Problem:** Given an array nums and a sliding window of size k, find the maximum element in each window as the window slides from left to right.

**Example:**
```
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
```

**Approach:**
1. Use a deque (double-ended queue) to store indices of elements in the current window
2. Maintain the deque such that:
   - Elements outside the current window are removed
   - Elements smaller than the current element are removed (as they cannot be the maximum)
3. The front of the deque always contains the index of the maximum element in the current window
4. For each window, add the maximum element to the result

**Solution:**
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

**Time Complexity:** O(n) where n is the length of the array  
**Space Complexity:** O(k) where k is the size of the window

### 6. Design Hit Counter
**Problem:** Design a hit counter which counts the number of hits received in the past 5 minutes (300 seconds).

**Example:**
```
HitCounter counter = new HitCounter();
counter.hit(1);      // hit at timestamp 1
counter.hit(2);      // hit at timestamp 2
counter.hit(3);      // hit at timestamp 3
counter.getHits(4);  // get hits at timestamp 4, returns 3
counter.hit(300);    // hit at timestamp 300
counter.getHits(300); // get hits at timestamp 300, returns 4
counter.getHits(301); // get hits at timestamp 301, returns 3
```

**Approach:**
1. Use a queue to store timestamps of hits
2. For each getHits call, remove timestamps that are outside the 300-second window
3. Return the size of the queue

**Solution:**
```java
public class HitCounter {
    private Queue<Integer> hits;
    
    public HitCounter() {
        hits = new LinkedList<>();
    }
    
    public void hit(int timestamp) {
        hits.offer(timestamp);
    }
    
    public int getHits(int timestamp) {
        while (!hits.isEmpty() && hits.peek() <= timestamp - 300) {
            hits.poll();
        }
        
        return hits.size();
    }
}
```

**Time Complexity:** O(n) for getHits where n is the number of hits that fall outside the time window  
**Space Complexity:** O(n) where n is the number of hits within the time window

## Hard Level Questions

### 7. Implement a Queue using a Linked List with a Minimum Operation
**Problem:** Implement a queue that supports push, pop, top, and retrieving the minimum element in constant time.

**Example:**
```
MinQueue queue = new MinQueue();
queue.push(3);
queue.push(5);
queue.push(2);
queue.getMin(); // Returns 2
queue.pop();    // Returns 3
queue.getMin(); // Returns 2
queue.pop();    // Returns 5
queue.getMin(); // Returns 2
```

**Approach:**
1. Use a linked list to implement the queue
2. Maintain a separate deque to track minimum values
3. When pushing a new element, remove all elements from the deque that are greater than the new element
4. The front of the deque will always contain the minimum element

**Solution:**
```java
public class MinQueue {
    private class Node {
        int val;
        Node next;
        
        Node(int val) {
            this.val = val;
        }
    }
    
    private Node front;
    private Node rear;
    private Deque<Integer> minDeque;
    
    public MinQueue() {
        front = null;
        rear = null;
        minDeque = new ArrayDeque<>();
    }
    
    public void push(int x) {
        Node newNode = new Node(x);
        
        if (isEmpty()) {
            front = rear = newNode;
        } else {
            rear.next = newNode;
            rear = newNode;
        }
        
        // Update min deque
        while (!minDeque.isEmpty() && minDeque.peekLast() > x) {
            minDeque.pollLast();
        }
        minDeque.offerLast(x);
    }
    
    public int pop() {
        if (isEmpty()) {
            throw new NoSuchElementException("Queue is empty");
        }
        
        int val = front.val;
        front = front.next;
        
        if (front == null) {
            rear = null;
        }
        
        // Update min deque
        if (!minDeque.isEmpty() && minDeque.peekFirst() == val) {
            minDeque.pollFirst();
        }
        
        return val;
    }
    
    public int peek() {
        if (isEmpty()) {
            throw new NoSuchElementException("Queue is empty");
        }
        
        return front.val;
    }
    
    public int getMin() {
        if (isEmpty()) {
            throw new NoSuchElementException("Queue is empty");
        }
        
        return minDeque.peekFirst();
    }
    
    public boolean isEmpty() {
        return front == null;
    }
}
```

**Time Complexity:** O(1) amortized for all operations  
**Space Complexity:** O(n) where n is the number of elements in the queue

### 8. Rearrange Queue
**Problem:** Given a queue of integers, rearrange it such that all even numbers are at the beginning of the queue and all odd numbers are at the end of the queue, while maintaining the relative order of even and odd numbers.

**Example:**
```
Input: [1, 2, 3, 4, 5, 6, 7, 8]
Output: [2, 4, 6, 8, 1, 3, 5, 7]
```

**Approach:**
1. Use two separate queues: one for even numbers and one for odd numbers
2. Dequeue elements from the original queue and enqueue them to the appropriate queue based on whether they are even or odd
3. Dequeue all elements from the even queue and enqueue them back to the original queue
4. Dequeue all elements from the odd queue and enqueue them back to the original queue

**Solution:**
```java
public Queue<Integer> rearrangeQueue(Queue<Integer> queue) {
    Queue<Integer> evenQueue = new LinkedList<>();
    Queue<Integer> oddQueue = new LinkedList<>();
    
    // Separate even and odd numbers
    int size = queue.size();
    for (int i = 0; i < size; i++) {
        int num = queue.poll();
        if (num % 2 == 0) {
            evenQueue.offer(num);
        } else {
            oddQueue.offer(num);
        }
    }
    
    // Enqueue even numbers back to the original queue
    while (!evenQueue.isEmpty()) {
        queue.offer(evenQueue.poll());
    }
    
    // Enqueue odd numbers back to the original queue
    while (!oddQueue.isEmpty()) {
        queue.offer(oddQueue.poll());
    }
    
    return queue;
}
```

**Time Complexity:** O(n) where n is the number of elements in the queue  
**Space Complexity:** O(n) for the two additional queues

### 9. Implement a Queue with Maximum API
**Problem:** Design a queue that supports enqueue, dequeue, and max operations, where max returns the maximum element in the queue.

**Example:**
```
MaxQueue q = new MaxQueue();
q.enqueue(3);
q.enqueue(1);
q.enqueue(5);
q.max();      // Returns 5
q.dequeue();  // Returns 3
q.max();      // Returns 5
q.dequeue();  // Returns 1
q.max();      // Returns 5
```

**Approach:**
1. Use a linked list to implement the basic queue operations
2. Use a deque to track maximum values
3. When enqueueing a new element, remove all elements from the deque that are smaller than the new element
4. The front of the deque will always contain the maximum element

**Solution:**
```java
public class MaxQueue {
    private class Node {
        int val;
        Node next;
        
        Node(int val) {
            this.val = val;
        }
    }
    
    private Node front;
    private Node rear;
    private Deque<Integer> maxDeque;
    
    public MaxQueue() {
        front = null;
        rear = null;
        maxDeque = new ArrayDeque<>();
    }
    
    public void enqueue(int x) {
        Node newNode = new Node(x);
        
        if (isEmpty()) {
            front = rear = newNode;
        } else {
            rear.next = newNode;
            rear = newNode;
        }
        
        // Update max deque
        while (!maxDeque.isEmpty() && maxDeque.peekLast() < x) {
            maxDeque.pollLast();
        }
        maxDeque.offerLast(x);
    }
    
    public int dequeue() {
        if (isEmpty()) {
            throw new NoSuchElementException("Queue is empty");
        }
        
        int val = front.val;
        front = front.next;
        
        if (front == null) {
            rear = null;
        }
        
        // Update max deque
        if (!maxDeque.isEmpty() && maxDeque.peekFirst() == val) {
            maxDeque.pollFirst();
        }
        
        return val;
    }
    
    public int peek() {
        if (isEmpty()) {
            throw new NoSuchElementException("Queue is empty");
        }
        
        return front.val;
    }
    
    public int max() {
        if (isEmpty()) {
            throw new NoSuchElementException("Queue is empty");
        }
        
        return maxDeque.peekFirst();
    }
    
    public boolean isEmpty() {
        return front == null;
    }
}
```

**Time Complexity:** O(1) amortized for all operations  
**Space Complexity:** O(n) where n is the number of elements in the queue

### 10. Implement a Queue with Interleave Operation
**Problem:** Design a queue that supports an interleave operation, which rearranges the elements such that the first half of the queue is interleaved with the second half.

**Example:**
```
Queue: [1, 2, 3, 4, 5, 6]
After interleave: [1, 4, 2, 5, 3, 6]
```

**Approach:**
1. Use a stack to reverse the second half of the queue
2. Use another queue to store the interleaved result
3. Dequeue elements from the original queue and the stack alternately and enqueue them to the result queue
4. Replace the original queue with the result queue

**Solution:**
```java
public void interleaveQueue(Queue<Integer> queue) {
    if (queue.size() % 2 != 0) {
        throw new IllegalArgumentException("Queue size must be even");
    }
    
    int halfSize = queue.size() / 2;
    Stack<Integer> stack = new Stack<>();
    
    // Dequeue first half and enqueue back
    for (int i = 0; i < halfSize; i++) {
        queue.offer(queue.poll());
    }
    
    // Dequeue second half and push to stack
    for (int i = 0; i < halfSize; i++) {
        stack.push(queue.poll());
    }
    
    // Dequeue first half and push to stack
    for (int i = 0; i < halfSize; i++) {
        stack.push(queue.poll());
    }
    
    // Pop from stack and enqueue back
    while (!stack.isEmpty()) {
        queue.offer(stack.pop());
    }
    
    // Dequeue all and enqueue back to reverse
    for (int i = 0; i < queue.size(); i++) {
        queue.offer(queue.poll());
    }
    
    // Dequeue first half and push to stack
    for (int i = 0; i < halfSize; i++) {
        stack.push(queue.poll());
    }
    
    // Interleave by alternating between stack and queue
    while (!stack.isEmpty()) {
        queue.offer(stack.pop());
        queue.offer(queue.poll());
    }
}
```

**Time Complexity:** O(n) where n is the number of elements in the queue  
**Space Complexity:** O(n) for the stack

## Learning Strategy for Queue Problems

1. **Master the basics**: queue operations, implementations (array, linked list)
2. **Understand variations**: circular queue, priority queue, deque
3. **Learn common patterns**: BFS, level order traversal, sliding window
4. **Practice by difficulty**: start with easy problems, then medium, then hard
5. **Implement from scratch**: don't memorize solutions, understand the approach

## Additional Resources

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