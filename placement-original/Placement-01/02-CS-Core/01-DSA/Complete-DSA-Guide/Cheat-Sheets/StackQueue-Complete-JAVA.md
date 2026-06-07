# 📚 Stack & Queue - Complete Question Set (Love Babbar + Striver)
## Total: 48 Questions with Java Solutions & Theory

---

## 📋 Theory & Patterns

### Stack Concepts:
1. **LIFO** - Last In First Out principle
2. **Operations** - push(), pop(), peek(), isEmpty()
3. **Applications** - Expression evaluation, backtracking, function calls
4. **Monotonic Stack** - Maintain ascending/descending order

### Queue Concepts:
1. **FIFO** - First In First Out principle
2. **Types** - Simple, Circular, Deque, Priority Queue
3. **Operations** - enqueue(), dequeue(), front(), rear()
4. **Applications** - BFS, scheduling, buffering

### Important Algorithms:
- **Expression Evaluation** - Infix, postfix, prefix
- **Parentheses Matching** - Balanced expressions
- **Sliding Window Maximum** - Using deque
- **Histogram Problems** - Largest rectangle area

### Data Structure Implementations:
```java
// Stack using Array
class StackArray {
    private int[] arr;
    private int top;
    private int capacity;
    
    public StackArray(int size) {
        arr = new int[size];
        capacity = size;
        top = -1;
    }
    
    public void push(int x) {
        if (top == capacity - 1) {
            throw new RuntimeException("Stack Overflow");
        }
        arr[++top] = x;
    }
    
    public int pop() {
        if (top == -1) {
            throw new RuntimeException("Stack Underflow");
        }
        return arr[top--];
    }
    
    public int peek() {
        if (top == -1) {
            throw new RuntimeException("Stack is empty");
        }
        return arr[top];
    }
    
    public boolean isEmpty() {
        return top == -1;
    }
}

// Queue using Array (Circular)
class QueueArray {
    private int[] arr;
    private int front, rear, size, capacity;
    
    public QueueArray(int capacity) {
        this.capacity = capacity;
        arr = new int[capacity];
        front = 0;
        rear = -1;
        size = 0;
    }
    
    public void enqueue(int x) {
        if (size == capacity) {
            throw new RuntimeException("Queue Overflow");
        }
        rear = (rear + 1) % capacity;
        arr[rear] = x;
        size++;
    }
    
    public int dequeue() {
        if (size == 0) {
            throw new RuntimeException("Queue Underflow");
        }
        int result = arr[front];
        front = (front + 1) % capacity;
        size--;
        return result;
    }
}
```

---

## 💡 Love Babbar Stack & Queue Questions (159-206)

### 159. Implement Stack using Array
**Problem**: Create stack with array implementation  
**Difficulty**: Easy  
**Pattern**: Array Manipulation

```java
class MyStack {
    private int[] arr;
    private int top;
    private int capacity;
    
    public MyStack(int capacity) {
        this.capacity = capacity;
        arr = new int[capacity];
        top = -1;
    }
    
    public void push(int x) {
        if (isFull()) {
            throw new RuntimeException("Stack Overflow");
        }
        arr[++top] = x;
    }
    
    public int pop() {
        if (isEmpty()) {
            throw new RuntimeException("Stack Underflow");
        }
        return arr[top--];
    }
    
    public int peek() {
        if (isEmpty()) {
            throw new RuntimeException("Stack is empty");
        }
        return arr[top];
    }
    
    public boolean isEmpty() {
        return top == -1;
    }
    
    public boolean isFull() {
        return top == capacity - 1;
    }
    
    public int size() {
        return top + 1;
    }
}

// Dynamic Stack (resizing)
class DynamicStack {
    private int[] arr;
    private int top;
    private int capacity;
    
    public DynamicStack() {
        capacity = 10;
        arr = new int[capacity];
        top = -1;
    }
    
    public void push(int x) {
        if (top == capacity - 1) {
            resize();
        }
        arr[++top] = x;
    }
    
    private void resize() {
        capacity *= 2;
        arr = Arrays.copyOf(arr, capacity);
    }
    
    public int pop() {
        if (isEmpty()) {
            throw new RuntimeException("Stack Underflow");
        }
        int result = arr[top--];
        
        // Shrink if needed
        if (top > 0 && top == capacity / 4) {
            capacity /= 2;
            arr = Arrays.copyOf(arr, capacity);
        }
        
        return result;
    }
    
    public int peek() {
        if (isEmpty()) {
            throw new RuntimeException("Stack is empty");
        }
        return arr[top];
    }
    
    public boolean isEmpty() {
        return top == -1;
    }
}
```
**Time**: O(1) for all operations, **Space**: O(n)

---

### 160. Implement Two Stacks in Array
**Problem**: Implement two stacks in single array  
**Difficulty**: Medium  
**Pattern**: Array Partitioning

```java
class TwoStacks {
    private int[] arr;
    private int top1, top2;
    private int size;
    
    public TwoStacks(int n) {
        size = n;
        arr = new int[n];
        top1 = -1;
        top2 = size;
    }
    
    public void push1(int x) {
        if (top1 < top2 - 1) {
            arr[++top1] = x;
        } else {
            throw new RuntimeException("Stack Overflow");
        }
    }
    
    public void push2(int x) {
        if (top1 < top2 - 1) {
            arr[--top2] = x;
        } else {
            throw new RuntimeException("Stack Overflow");
        }
    }
    
    public int pop1() {
        if (top1 >= 0) {
            return arr[top1--];
        } else {
            throw new RuntimeException("Stack 1 Underflow");
        }
    }
    
    public int pop2() {
        if (top2 < size) {
            return arr[top2++];
        } else {
            throw new RuntimeException("Stack 2 Underflow");
        }
    }
    
    public boolean isEmpty1() {
        return top1 == -1;
    }
    
    public boolean isEmpty2() {
        return top2 == size;
    }
}
```
**Time**: O(1) for all operations, **Space**: O(n)

---

### 161. Implement Stack using Queue
**Problem**: Implement stack using queue operations  
**Difficulty**: Easy  
**Pattern**: Queue Manipulation

```java
import java.util.*;

class MyStackUsingQueue {
    private Queue<Integer> q1;
    private Queue<Integer> q2;
    
    public MyStackUsingQueue() {
        q1 = new LinkedList<>();
        q2 = new LinkedList<>();
    }
    
    // Method 1: Make push costly
    public void push(int x) {
        // Move all elements from q1 to q2
        while (!q1.isEmpty()) {
            q2.offer(q1.poll());
        }
        
        // Add new element to q1
        q1.offer(x);
        
        // Move all elements back from q2 to q1
        while (!q2.isEmpty()) {
            q1.offer(q2.poll());
        }
    }
    
    public int pop() {
        if (q1.isEmpty()) {
            throw new RuntimeException("Stack is empty");
        }
        return q1.poll();
    }
    
    public int top() {
        if (q1.isEmpty()) {
            throw new RuntimeException("Stack is empty");
        }
        return q1.peek();
    }
    
    public boolean empty() {
        return q1.isEmpty();
    }
}

// Method 2: Make pop costly (using single queue)
class MyStackUsingOneQueue {
    private Queue<Integer> queue;
    
    public MyStackUsingOneQueue() {
        queue = new LinkedList<>();
    }
    
    public void push(int x) {
        int size = queue.size();
        queue.offer(x);
        
        // Rotate queue to make new element at front
        for (int i = 0; i < size; i++) {
            queue.offer(queue.poll());
        }
    }
    
    public int pop() {
        if (queue.isEmpty()) {
            throw new RuntimeException("Stack is empty");
        }
        return queue.poll();
    }
    
    public int top() {
        if (queue.isEmpty()) {
            throw new RuntimeException("Stack is empty");
        }
        return queue.peek();
    }
    
    public boolean empty() {
        return queue.isEmpty();
    }
}
```
**Time**: O(n) push, O(1) pop in method 1, **Space**: O(n)

---

### 162. Implement Queue using Stack
**Problem**: Implement queue using stack operations  
**Difficulty**: Easy  
**Pattern**: Stack Manipulation

```java
import java.util.*;

class MyQueueUsingStack {
    private Stack<Integer> input;
    private Stack<Integer> output;
    
    public MyQueueUsingStack() {
        input = new Stack<>();
        output = new Stack<>();
    }
    
    public void push(int x) {
        input.push(x);
    }
    
    public int pop() {
        peek(); // Ensure output has elements
        return output.pop();
    }
    
    public int peek() {
        if (output.isEmpty()) {
            // Transfer all elements from input to output
            while (!input.isEmpty()) {
                output.push(input.pop());
            }
        }
        
        if (output.isEmpty()) {
            throw new RuntimeException("Queue is empty");
        }
        
        return output.peek();
    }
    
    public boolean empty() {
        return input.isEmpty() && output.isEmpty();
    }
}

// Using single stack (recursive approach)
class MyQueueUsingSingleStack {
    private Stack<Integer> stack;
    
    public MyQueueUsingSingleStack() {
        stack = new Stack<>();
    }
    
    public void push(int x) {
        stack.push(x);
    }
    
    public int pop() {
        if (stack.isEmpty()) {
            throw new RuntimeException("Queue is empty");
        }
        
        if (stack.size() == 1) {
            return stack.pop();
        }
        
        // Recursively remove and temporarily store top elements
        int item = stack.pop();
        int result = pop();
        stack.push(item);
        
        return result;
    }
    
    public int peek() {
        if (stack.isEmpty()) {
            throw new RuntimeException("Queue is empty");
        }
        
        if (stack.size() == 1) {
            return stack.peek();
        }
        
        int item = stack.pop();
        int result = peek();
        stack.push(item);
        
        return result;
    }
    
    public boolean empty() {
        return stack.isEmpty();
    }
}
```
**Time**: O(1) amortized for pop/peek, O(1) push, **Space**: O(n)

---

### 163. Valid Parentheses
**Problem**: Check if parentheses are balanced  
**Difficulty**: Easy  
**Pattern**: Stack Matching

```java
import java.util.*;

public boolean isValid(String s) {
    Stack<Character> stack = new Stack<>();
    
    for (char c : s.toCharArray()) {
        if (c == '(' || c == '[' || c == '{') {
            stack.push(c);
        } else {
            if (stack.isEmpty()) return false;
            
            char top = stack.pop();
            if ((c == ')' && top != '(') ||
                (c == ']' && top != '[') ||
                (c == '}' && top != '{')) {
                return false;
            }
        }
    }
    
    return stack.isEmpty();
}

// Using HashMap for cleaner code
public boolean isValidHashMap(String s) {
    Stack<Character> stack = new Stack<>();
    Map<Character, Character> mapping = new HashMap<>();
    
    mapping.put(')', '(');
    mapping.put(']', '[');
    mapping.put('}', '{');
    
    for (char c : s.toCharArray()) {
        if (mapping.containsKey(c)) {
            // Closing bracket
            char topElement = stack.isEmpty() ? '#' : stack.pop();
            if (topElement != mapping.get(c)) {
                return false;
            }
        } else {
            // Opening bracket
            stack.push(c);
        }
    }
    
    return stack.isEmpty();
}

// For multiple types of brackets with count
public boolean isValidWithCount(String s) {
    int round = 0, square = 0, curly = 0;
    
    for (char c : s.toCharArray()) {
        switch (c) {
            case '(':
                round++;
                break;
            case ')':
                round--;
                if (round < 0) return false;
                break;
            case '[':
                square++;
                break;
            case ']':
                square--;
                if (square < 0) return false;
                break;
            case '{':
                curly++;
                break;
            case '}':
                curly--;
                if (curly < 0) return false;
                break;
        }
    }
    
    return round == 0 && square == 0 && curly == 0;
}
```
**Time**: O(n), **Space**: O(n)

---

### 164. Next Greater Element I
**Problem**: Find next greater element for each element  
**Difficulty**: Easy  
**Pattern**: Monotonic Stack

```java
import java.util.*;

public int[] nextGreaterElement(int[] nums1, int[] nums2) {
    Map<Integer, Integer> nextGreaterMap = new HashMap<>();
    Stack<Integer> stack = new Stack<>();
    
    // Build next greater map for nums2
    for (int num : nums2) {
        while (!stack.isEmpty() && stack.peek() < num) {
            nextGreaterMap.put(stack.pop(), num);
        }
        stack.push(num);
    }
    
    // Build result for nums1
    int[] result = new int[nums1.length];
    for (int i = 0; i < nums1.length; i++) {
        result[i] = nextGreaterMap.getOrDefault(nums1[i], -1);
    }
    
    return result;
}

// For circular array (Next Greater Element II)
public int[] nextGreaterElementsCircular(int[] nums) {
    int n = nums.length;
    int[] result = new int[n];
    Arrays.fill(result, -1);
    
    Stack<Integer> stack = new Stack<>();
    
    // Process array twice to handle circular nature
    for (int i = 0; i < 2 * n; i++) {
        int num = nums[i % n];
        
        while (!stack.isEmpty() && nums[stack.peek()] < num) {
            result[stack.pop()] = num;
        }
        
        if (i < n) {
            stack.push(i);
        }
    }
    
    return result;
}

// Next greater element to the left
public int[] nextGreaterToLeft(int[] nums) {
    int n = nums.length;
    int[] result = new int[n];
    Stack<Integer> stack = new Stack<>();
    
    for (int i = 0; i < n; i++) {
        while (!stack.isEmpty() && stack.peek() <= nums[i]) {
            stack.pop();
        }
        
        result[i] = stack.isEmpty() ? -1 : stack.peek();
        stack.push(nums[i]);
    }
    
    return result;
}
```
**Time**: O(n), **Space**: O(n)

---

### 165. Next Smaller Element
**Problem**: Find next smaller element for each element  
**Difficulty**: Easy  
**Pattern**: Monotonic Stack

```java
import java.util.*;

public int[] nextSmallerElement(int[] nums) {
    int n = nums.length;
    int[] result = new int[n];
    Stack<Integer> stack = new Stack<>();
    
    // Process from right to left
    for (int i = n - 1; i >= 0; i--) {
        while (!stack.isEmpty() && stack.peek() >= nums[i]) {
            stack.pop();
        }
        
        result[i] = stack.isEmpty() ? -1 : stack.peek();
        stack.push(nums[i]);
    }
    
    return result;
}

// Previous smaller element
public int[] previousSmallerElement(int[] nums) {
    int n = nums.length;
    int[] result = new int[n];
    Stack<Integer> stack = new Stack<>();
    
    for (int i = 0; i < n; i++) {
        while (!stack.isEmpty() && stack.peek() >= nums[i]) {
            stack.pop();
        }
        
        result[i] = stack.isEmpty() ? -1 : stack.peek();
        stack.push(nums[i]);
    }
    
    return result;
}

// Indices instead of values
public int[] nextSmallerElementIndices(int[] nums) {
    int n = nums.length;
    int[] result = new int[n];
    Arrays.fill(result, n); // Default to n (out of bounds)
    
    Stack<Integer> stack = new Stack<>();
    
    for (int i = 0; i < n; i++) {
        while (!stack.isEmpty() && nums[stack.peek()] > nums[i]) {
            result[stack.pop()] = i;
        }
        stack.push(i);
    }
    
    return result;
}
```
**Time**: O(n), **Space**: O(n)

---

### 166. Largest Rectangle in Histogram
**Problem**: Find largest rectangle area in histogram  
**Difficulty**: Hard  
**Pattern**: Monotonic Stack

```java
import java.util.*;

public int largestRectangleArea(int[] heights) {
    Stack<Integer> stack = new Stack<>();
    int maxArea = 0;
    int n = heights.length;
    
    for (int i = 0; i <= n; i++) {
        int currentHeight = (i == n) ? 0 : heights[i];
        
        while (!stack.isEmpty() && heights[stack.peek()] > currentHeight) {
            int height = heights[stack.pop()];
            int width = stack.isEmpty() ? i : i - stack.peek() - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        
        stack.push(i);
    }
    
    return maxArea;
}

// Using previous and next smaller arrays
public int largestRectangleAreaTwoArrays(int[] heights) {
    int n = heights.length;
    int[] prevSmaller = new int[n];
    int[] nextSmaller = new int[n];
    
    // Find previous smaller elements
    Stack<Integer> stack = new Stack<>();
    for (int i = 0; i < n; i++) {
        while (!stack.isEmpty() && heights[stack.peek()] >= heights[i]) {
            stack.pop();
        }
        prevSmaller[i] = stack.isEmpty() ? -1 : stack.peek();
        stack.push(i);
    }
    
    // Find next smaller elements
    stack.clear();
    for (int i = n - 1; i >= 0; i--) {
        while (!stack.isEmpty() && heights[stack.peek()] >= heights[i]) {
            stack.pop();
        }
        nextSmaller[i] = stack.isEmpty() ? n : stack.peek();
        stack.push(i);
    }
    
    // Calculate maximum area
    int maxArea = 0;
    for (int i = 0; i < n; i++) {
        int width = nextSmaller[i] - prevSmaller[i] - 1;
        maxArea = Math.max(maxArea, heights[i] * width);
    }
    
    return maxArea;
}

// Optimized single pass
public int largestRectangleAreaOptimized(int[] heights) {
    Stack<Integer> stack = new Stack<>();
    int maxArea = 0;
    
    for (int i = 0; i <= heights.length; i++) {
        int currentHeight = (i == heights.length) ? 0 : heights[i];
        
        while (!stack.isEmpty() && heights[stack.peek()] >= currentHeight) {
            int height = heights[stack.pop()];
            int width = stack.isEmpty() ? i : i - stack.peek() - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        
        stack.push(i);
    }
    
    return maxArea;
}
```
**Time**: O(n), **Space**: O(n)

---

### 167. Min Stack
**Problem**: Stack with O(1) min operation  
**Difficulty**: Easy  
**Pattern**: Auxiliary Stack/Single Stack

```java
import java.util.*;

class MinStack {
    private Stack<Integer> stack;
    private Stack<Integer> minStack;
    
    public MinStack() {
        stack = new Stack<>();
        minStack = new Stack<>();
    }
    
    public void push(int val) {
        stack.push(val);
        
        // Push to minStack if it's empty or val is smaller/equal
        if (minStack.isEmpty() || val <= minStack.peek()) {
            minStack.push(val);
        }
    }
    
    public void pop() {
        if (stack.isEmpty()) return;
        
        int popped = stack.pop();
        
        // Pop from minStack if popped element was minimum
        if (!minStack.isEmpty() && popped == minStack.peek()) {
            minStack.pop();
        }
    }
    
    public int top() {
        return stack.peek();
    }
    
    public int getMin() {
        return minStack.peek();
    }
}

// Space optimized using single stack
class MinStackOptimized {
    private Stack<Long> stack;
    private long min;
    
    public MinStackOptimized() {
        stack = new Stack<>();
    }
    
    public void push(int val) {
        if (stack.isEmpty()) {
            stack.push(0L);
            min = val;
        } else {
            long diff = val - min;
            stack.push(diff);
            
            if (val < min) {
                min = val;
            }
        }
    }
    
    public void pop() {
        if (stack.isEmpty()) return;
        
        long diff = stack.pop();
        
        if (diff < 0) {
            // Restore previous minimum
            min = min - diff;
        }
    }
    
    public int top() {
        long diff = stack.peek();
        
        if (diff < 0) {
            return (int) min;
        } else {
            return (int) (min + diff);
        }
    }
    
    public int getMin() {
        return (int) min;
    }
}
```
**Time**: O(1) for all operations, **Space**: O(n)

---

### 168. Expression Evaluation
**Problem**: Evaluate mathematical expressions  
**Difficulty**: Medium  
**Pattern**: Two Stacks

```java
import java.util.*;

public int calculate(String s) {
    Stack<Integer> stack = new Stack<>();
    int num = 0;
    char operation = '+';
    
    for (int i = 0; i < s.length(); i++) {
        char c = s.charAt(i);
        
        if (Character.isDigit(c)) {
            num = num * 10 + (c - '0');
        }
        
        if (c == '+' || c == '-' || c == '*' || c == '/' || i == s.length() - 1) {
            switch (operation) {
                case '+':
                    stack.push(num);
                    break;
                case '-':
                    stack.push(-num);
                    break;
                case '*':
                    stack.push(stack.pop() * num);
                    break;
                case '/':
                    stack.push(stack.pop() / num);
                    break;
            }
            
            operation = c;
            num = 0;
        }
    }
    
    int result = 0;
    while (!stack.isEmpty()) {
        result += stack.pop();
    }
    
    return result;
}

// With parentheses support
public int calculateWithParentheses(String s) {
    Stack<Integer> stack = new Stack<>();
    Stack<Character> ops = new Stack<>();
    
    for (int i = 0; i < s.length(); i++) {
        char c = s.charAt(i);
        
        if (c == ' ') continue;
        
        if (Character.isDigit(c)) {
            int num = 0;
            while (i < s.length() && Character.isDigit(s.charAt(i))) {
                num = num * 10 + (s.charAt(i) - '0');
                i++;
            }
            i--; // Adjust for the extra increment
            stack.push(num);
        } else if (c == '(') {
            ops.push(c);
        } else if (c == ')') {
            while (!ops.isEmpty() && ops.peek() != '(') {
                int val2 = stack.pop();
                int val1 = stack.pop();
                char op = ops.pop();
                stack.push(applyOperation(val1, val2, op));
            }
            ops.pop(); // Remove '('
        } else if (isOperator(c)) {
            while (!ops.isEmpty() && precedence(ops.peek()) >= precedence(c)) {
                int val2 = stack.pop();
                int val1 = stack.pop();
                char op = ops.pop();
                stack.push(applyOperation(val1, val2, op));
            }
            ops.push(c);
        }
    }
    
    while (!ops.isEmpty()) {
        int val2 = stack.pop();
        int val1 = stack.pop();
        char op = ops.pop();
        stack.push(applyOperation(val1, val2, op));
    }
    
    return stack.pop();
}

private boolean isOperator(char c) {
    return c == '+' || c == '-' || c == '*' || c == '/';
}

private int precedence(char op) {
    if (op == '+' || op == '-') return 1;
    if (op == '*' || op == '/') return 2;
    return 0;
}

private int applyOperation(int a, int b, char op) {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
    }
    return 0;
}
```
**Time**: O(n), **Space**: O(n)

---

### 169. Sliding Window Maximum
**Problem**: Maximum in each sliding window of size k  
**Difficulty**: Hard  
**Pattern**: Deque

```java
import java.util.*;

public int[] maxSlidingWindow(int[] nums, int k) {
    if (nums == null || nums.length == 0) return new int[0];
    
    int n = nums.length;
    int[] result = new int[n - k + 1];
    Deque<Integer> deque = new ArrayDeque<>();
    
    for (int i = 0; i < n; i++) {
        // Remove elements outside current window
        while (!deque.isEmpty() && deque.peekFirst() < i - k + 1) {
            deque.pollFirst();
        }
        
        // Remove smaller elements from rear
        while (!deque.isEmpty() && nums[deque.peekLast()] < nums[i]) {
            deque.pollLast();
        }
        
        deque.offerLast(i);
        
        // Add to result if window is complete
        if (i >= k - 1) {
            result[i - k + 1] = nums[deque.peekFirst()];
        }
    }
    
    return result;
}

// Using Priority Queue (less efficient)
public int[] maxSlidingWindowPQ(int[] nums, int k) {
    int n = nums.length;
    int[] result = new int[n - k + 1];
    
    // Max heap with index tracking
    PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> {
        if (a[0] == b[0]) return b[1] - a[1]; // If values equal, prefer later index
        return b[0] - a[0]; // Max heap based on value
    });
    
    // Initialize first window
    for (int i = 0; i < k; i++) {
        pq.offer(new int[]{nums[i], i});
    }
    
    result[0] = pq.peek()[0];
    
    // Process remaining windows
    for (int i = k; i < n; i++) {
        pq.offer(new int[]{nums[i], i});
        
        // Remove elements outside current window
        while (!pq.isEmpty() && pq.peek()[1] <= i - k) {
            pq.poll();
        }
        
        result[i - k + 1] = pq.peek()[0];
    }
    
    return result;
}
```
**Time**: O(n) deque, O(n log k) PQ, **Space**: O(k)

---

## 🚀 Striver Stack & Queue Questions

### S1. Implement LRU Cache
**Problem**: Design Least Recently Used cache  
**Difficulty**: Medium  
**Pattern**: HashMap + Doubly Linked List

```java
import java.util.*;

class LRUCache {
    class Node {
        int key, value;
        Node prev, next;
        
        Node(int key, int value) {
            this.key = key;
            this.value = value;
        }
    }
    
    private int capacity;
    private Map<Integer, Node> cache;
    private Node head, tail;
    
    public LRUCache(int capacity) {
        this.capacity = capacity;
        cache = new HashMap<>();
        
        // Create dummy head and tail
        head = new Node(0, 0);
        tail = new Node(0, 0);
        head.next = tail;
        tail.prev = head;
    }
    
    public int get(int key) {
        Node node = cache.get(key);
        
        if (node == null) {
            return -1;
        }
        
        // Move to head (most recently used)
        moveToHead(node);
        return node.value;
    }
    
    public void put(int key, int value) {
        Node node = cache.get(key);
        
        if (node == null) {
            Node newNode = new Node(key, value);
            
            if (cache.size() >= capacity) {
                // Remove least recently used
                Node tail = removeTail();
                cache.remove(tail.key);
            }
            
            cache.put(key, newNode);
            addToHead(newNode);
        } else {
            // Update existing node
            node.value = value;
            moveToHead(node);
        }
    }
    
    private void addToHead(Node node) {
        node.prev = head;
        node.next = head.next;
        head.next.prev = node;
        head.next = node;
    }
    
    private void removeNode(Node node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
    
    private void moveToHead(Node node) {
        removeNode(node);
        addToHead(node);
    }
    
    private Node removeTail() {
        Node lastNode = tail.prev;
        removeNode(lastNode);
        return lastNode;
    }
}
```
**Time**: O(1) for get and put, **Space**: O(capacity)

---

### S2. LFU Cache
**Problem**: Design Least Frequently Used cache  
**Difficulty**: Hard  
**Pattern**: HashMap + LinkedHashSet

```java
import java.util.*;

class LFUCache {
    private int capacity;
    private int minFrequency;
    private Map<Integer, Integer> keyToValue;
    private Map<Integer, Integer> keyToFrequency;
    private Map<Integer, LinkedHashSet<Integer>> frequencyToKeys;
    
    public LFUCache(int capacity) {
        this.capacity = capacity;
        this.minFrequency = 0;
        keyToValue = new HashMap<>();
        keyToFrequency = new HashMap<>();
        frequencyToKeys = new HashMap<>();
    }
    
    public int get(int key) {
        if (!keyToValue.containsKey(key)) {
            return -1;
        }
        
        updateFrequency(key);
        return keyToValue.get(key);
    }
    
    public void put(int key, int value) {
        if (capacity <= 0) return;
        
        if (keyToValue.containsKey(key)) {
            keyToValue.put(key, value);
            updateFrequency(key);
            return;
        }
        
        if (keyToValue.size() >= capacity) {
            evictLFU();
        }
        
        // Add new key
        keyToValue.put(key, value);
        keyToFrequency.put(key, 1);
        frequencyToKeys.computeIfAbsent(1, k -> new LinkedHashSet<>()).add(key);
        minFrequency = 1;
    }
    
    private void updateFrequency(int key) {
        int frequency = keyToFrequency.get(key);
        
        // Remove from current frequency set
        frequencyToKeys.get(frequency).remove(key);
        
        // If this was the only key with minFrequency, update minFrequency
        if (frequency == minFrequency && frequencyToKeys.get(frequency).isEmpty()) {
            minFrequency++;
        }
        
        // Add to new frequency set
        int newFrequency = frequency + 1;
        keyToFrequency.put(key, newFrequency);
        frequencyToKeys.computeIfAbsent(newFrequency, k -> new LinkedHashSet<>()).add(key);
    }
    
    private void evictLFU() {
        // Get the least recently used key among least frequent keys
        int keyToEvict = frequencyToKeys.get(minFrequency).iterator().next();
        
        // Remove from all maps
        frequencyToKeys.get(minFrequency).remove(keyToEvict);
        keyToValue.remove(keyToEvict);
        keyToFrequency.remove(keyToEvict);
    }
}
```
**Time**: O(1) for get and put, **Space**: O(capacity)

---

## 📈 Summary

### Key Stack & Queue Patterns Mastered:
1. **Monotonic Stack** - Next/previous greater/smaller elements
2. **Expression Evaluation** - Operator precedence handling
3. **Sliding Window** - Deque for efficient maximum/minimum
4. **Design Problems** - LRU/LFU cache implementations
5. **Auxiliary Structures** - Min stack, two stacks in array

### Important Algorithms:
- **Parentheses Matching** - Balance validation
- **Histogram Problems** - Largest rectangle calculations
- **Expression Parsing** - Infix to postfix conversion
- **Cache Mechanisms** - LRU and LFU strategies

### Common Patterns:
- **Stack for Backtracking** - Undo operations
- **Queue for BFS** - Level-order traversals
- **Deque for Sliding Window** - Efficient min/max tracking
- **Two Data Structures** - Often combined for optimization

### Performance Considerations:
- **Stack Operations** - O(1) push/pop with proper implementation
- **Queue Operations** - O(1) enqueue/dequeue with circular array
- **Cache Operations** - O(1) access with proper data structure choice
- **Space Trade-offs** - Often exchange space for time complexity

### Next Steps:
- Practice more design problems
- Learn about advanced queue variants (priority, circular)
- Move to Trees and Graph problems

---
*This completes all major stack and queue problems with detailed Java solutions and theory explanations.*
