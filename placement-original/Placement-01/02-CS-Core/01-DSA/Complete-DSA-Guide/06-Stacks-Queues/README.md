# Stacks & Queues

## Table of Contents
- [Introduction](#introduction)
- [1. Stack Data Structure](#1-stack-data-structure)
- [2. Queue Data Structure](#2-queue-data-structure)
- [3. Deque (Double-Ended Queue)](#3-deque-double-ended-queue)
- [4. Priority Queue](#4-priority-queue)
- [5. Applications of Stacks](#5-applications-of-stacks)
- [6. Applications of Queues](#6-applications-of-queues)
- [7. Common Stack Problems](#7-common-stack-problems)
- [8. Common Queue Problems](#8-common-queue-problems)
- [9. Advanced Techniques](#9-advanced-techniques)
- [10. Practice Problems](#10-practice-problems)
- [11. Resources](#11-resources)

## Introduction

Stacks and Queues are fundamental linear data structures with specific rules for adding and removing elements. They are used in various algorithms and system processes due to their simplicity and efficiency in specific operations.

## 1. Stack Data Structure

A stack is a Last-In-First-Out (LIFO) data structure where elements are inserted and removed from the same end, called the top.

### 1.1 Basic Operations
- **push**: Add an element to the top of the stack
- **pop**: Remove and return the top element
- **peek/top**: View the top element without removing it
- **isEmpty**: Check if the stack is empty
- **size**: Return the number of elements in the stack

### 1.2 Implementations

#### 1.2.1 Array-based Implementation
```cpp
// C++ implementation of stack using array
class Stack {
private:
    int* arr;
    int top;
    int capacity;
    
public:
    Stack(int size) {
        arr = new int[size];
        capacity = size;
        top = -1;
    }
    
    ~Stack() {
        delete[] arr;
    }
    
    void push(int x) {
        if (isFull()) {
            std::cout << "Stack Overflow\n";
            return;
        }
        arr[++top] = x;
    }
    
    int pop() {
        if (isEmpty()) {
            std::cout << "Stack Underflow\n";
            return -1;
        }
        return arr[top--];
    }
    
    int peek() {
        if (isEmpty()) {
            std::cout << "Stack is empty\n";
            return -1;
        }
        return arr[top];
    }
    
    bool isEmpty() {
        return top == -1;
    }
    
    bool isFull() {
        return top == capacity - 1;
    }
    
    int size() {
        return top + 1;
    }
};
```

#### 1.2.2 Linked List-based Implementation
```cpp
// C++ implementation of stack using linked list
class Stack {
private:
    struct Node {
        int data;
        Node* next;
        Node(int val) : data(val), next(nullptr) {}
    };
    
    Node* top;
    int stackSize;
    
public:
    Stack() : top(nullptr), stackSize(0) {}
    
    ~Stack() {
        while (!isEmpty()) {
            pop();
        }
    }
    
    void push(int x) {
        Node* newNode = new Node(x);
        newNode->next = top;
        top = newNode;
        stackSize++;
    }
    
    int pop() {
        if (isEmpty()) {
            std::cout << "Stack Underflow\n";
            return -1;
        }
        
        Node* temp = top;
        int popped = temp->data;
        top = top->next;
        delete temp;
        stackSize--;
        return popped;
    }
    
    int peek() {
        if (isEmpty()) {
            std::cout << "Stack is empty\n";
            return -1;
        }
        return top->data;
    }
    
    bool isEmpty() {
        return top == nullptr;
    }
    
    int size() {
        return stackSize;
    }
};
```

### 1.3 Time Complexity
| Operation | Time Complexity |
|-----------|----------------|
| Push      | O(1)           |
| Pop       | O(1)           |
| Peek      | O(1)           |
| isEmpty   | O(1)           |
| Size      | O(1)           |

### 1.4 Built-in Stack Implementations
```cpp
// C++ STL Stack
#include <stack>

std::stack<int> s;
s.push(10);
s.push(20);
int top = s.top();  // 20
s.pop();            // Removes 20
bool empty = s.empty();
int size = s.size();
```

```python
# Python list as stack
stack = []
stack.append(10)    # push
stack.append(20)    # push
top = stack[-1]     # peek (20)
stack.pop()         # pop (returns and removes 20)
is_empty = len(stack) == 0
size = len(stack)
```

## 2. Queue Data Structure

A queue is a First-In-First-Out (FIFO) data structure where elements are inserted at the rear (enqueue) and removed from the front (dequeue).

### 2.1 Basic Operations
- **enqueue**: Add an element to the end of the queue
- **dequeue**: Remove and return the front element
- **front**: View the front element without removing it
- **rear**: View the rear element without removing it
- **isEmpty**: Check if the queue is empty
- **size**: Return the number of elements in the queue

### 2.2 Implementations

#### 2.2.1 Array-based Implementation (Circular Queue)
```cpp
// C++ implementation of queue using circular array
class Queue {
private:
    int* arr;
    int front, rear;
    int capacity;
    int size;
    
public:
    Queue(int cap) {
        capacity = cap;
        arr = new int[capacity];
        front = 0;
        rear = -1;
        size = 0;
    }
    
    ~Queue() {
        delete[] arr;
    }
    
    void enqueue(int x) {
        if (isFull()) {
            std::cout << "Queue is full\n";
            return;
        }
        
        rear = (rear + 1) % capacity;
        arr[rear] = x;
        size++;
    }
    
    int dequeue() {
        if (isEmpty()) {
            std::cout << "Queue is empty\n";
            return -1;
        }
        
        int item = arr[front];
        front = (front + 1) % capacity;
        size--;
        return item;
    }
    
    int getFront() {
        if (isEmpty()) {
            std::cout << "Queue is empty\n";
            return -1;
        }
        return arr[front];
    }
    
    int getRear() {
        if (isEmpty()) {
            std::cout << "Queue is empty\n";
            return -1;
        }
        return arr[rear];
    }
    
    bool isEmpty() {
        return size == 0;
    }
    
    bool isFull() {
        return size == capacity;
    }
    
    int getSize() {
        return size;
    }
};
```

#### 2.2.2 Linked List-based Implementation
```cpp
// C++ implementation of queue using linked list
class Queue {
private:
    struct Node {
        int data;
        Node* next;
        Node(int val) : data(val), next(nullptr) {}
    };
    
    Node* front;
    Node* rear;
    int queueSize;
    
public:
    Queue() : front(nullptr), rear(nullptr), queueSize(0) {}
    
    ~Queue() {
        while (!isEmpty()) {
            dequeue();
        }
    }
    
    void enqueue(int x) {
        Node* newNode = new Node(x);
        
        if (isEmpty()) {
            front = rear = newNode;
        } else {
            rear->next = newNode;
            rear = newNode;
        }
        
        queueSize++;
    }
    
    int dequeue() {
        if (isEmpty()) {
            std::cout << "Queue is empty\n";
            return -1;
        }
        
        Node* temp = front;
        int item = temp->data;
        
        front = front->next;
        if (front == nullptr) {
            rear = nullptr; // Queue becomes empty
        }
        
        delete temp;
        queueSize--;
        return item;
    }
    
    int getFront() {
        if (isEmpty()) {
            std::cout << "Queue is empty\n";
            return -1;
        }
        return front->data;
    }
    
    int getRear() {
        if (isEmpty()) {
            std::cout << "Queue is empty\n";
            return -1;
        }
        return rear->data;
    }
    
    bool isEmpty() {
        return front == nullptr;
    }
    
    int size() {
        return queueSize;
    }
};
```

### 2.3 Time Complexity
| Operation | Time Complexity |
|-----------|----------------|
| Enqueue   | O(1)           |
| Dequeue   | O(1)           |
| Front     | O(1)           |
| Rear      | O(1)           |
| isEmpty   | O(1)           |
| Size      | O(1)           |

### 2.4 Built-in Queue Implementations
```cpp
// C++ STL Queue
#include <queue>

std::queue<int> q;
q.push(10);        // enqueue
q.push(20);        // enqueue
int f = q.front(); // 10
int r = q.back();  // 20
q.pop();           // dequeue (removes 10)
bool empty = q.empty();
int size = q.size();
```

```python
# Python queue implementation
from collections import deque

queue = deque()
queue.append(10)    # enqueue
queue.append(20)    # enqueue
front = queue[0]    # front (10)
rear = queue[-1]    # rear (20)
queue.popleft()     # dequeue (returns and removes 10)
is_empty = len(queue) == 0
size = len(queue)
```

## 3. Deque (Double-Ended Queue)

A deque (pronounced "deck") allows insertion and removal of elements from both ends, combining features of both stacks and queues.

### 3.1 Basic Operations
- **pushFront**: Add an element to the front
- **pushBack**: Add an element to the back
- **popFront**: Remove and return the front element
- **popBack**: Remove and return the back element
- **front**: View the front element without removing it
- **back**: View the back element without removing it
- **isEmpty**: Check if the deque is empty
- **size**: Return the number of elements in the deque

### 3.2 Implementation (Using Doubly Linked List)
```cpp
class Deque {
private:
    struct Node {
        int data;
        Node* prev;
        Node* next;
        Node(int val) : data(val), prev(nullptr), next(nullptr) {}
    };
    
    Node* front;
    Node* rear;
    int dequeSize;
    
public:
    Deque() : front(nullptr), rear(nullptr), dequeSize(0) {}
    
    ~Deque() {
        while (!isEmpty()) {
            popFront();
        }
    }
    
    void pushFront(int x) {
        Node* newNode = new Node(x);
        
        if (isEmpty()) {
            front = rear = newNode;
        } else {
            newNode->next = front;
            front->prev = newNode;
            front = newNode;
        }
        
        dequeSize++;
    }
    
    void pushBack(int x) {
        Node* newNode = new Node(x);
        
        if (isEmpty()) {
            front = rear = newNode;
        } else {
            rear->next = newNode;
            newNode->prev = rear;
            rear = newNode;
        }
        
        dequeSize++;
    }
    
    int popFront() {
        if (isEmpty()) {
            std::cout << "Deque is empty\n";
            return -1;
        }
        
        Node* temp = front;
        int item = temp->data;
        
        if (front == rear) {
            front = rear = nullptr;
        } else {
            front = front->next;
            front->prev = nullptr;
        }
        
        delete temp;
        dequeSize--;
        return item;
    }
    
    int popBack() {
        if (isEmpty()) {
            std::cout << "Deque is empty\n";
            return -1;
        }
        
        Node* temp = rear;
        int item = temp->data;
        
        if (front == rear) {
            front = rear = nullptr;
        } else {
            rear = rear->prev;
            rear->next = nullptr;
        }
        
        delete temp;
        dequeSize--;
        return item;
    }
    
    int getFront() {
        if (isEmpty()) {
            std::cout << "Deque is empty\n";
            return -1;
        }
        return front->data;
    }
    
    int getBack() {
        if (isEmpty()) {
            std::cout << "Deque is empty\n";
            return -1;
        }
        return rear->data;
    }
    
    bool isEmpty() {
        return front == nullptr;
    }
    
    int size() {
        return dequeSize;
    }
};
```

### 3.3 Built-in Deque Implementations
```cpp
// C++ STL Deque
#include <deque>

std::deque<int> dq;
dq.push_front(10);    // push to front
dq.push_back(20);     // push to back
int f = dq.front();   // 10
int b = dq.back();    // 20
dq.pop_front();       // removes 10
dq.pop_back();        // removes 20
bool empty = dq.empty();
int size = dq.size();
```

```python
# Python deque
from collections import deque

dq = deque()
dq.appendleft(10)   # push to front
dq.append(20)       # push to back
front = dq[0]       # 10
back = dq[-1]       # 20
dq.popleft()        # removes and returns 10
dq.pop()            # removes and returns 20
is_empty = len(dq) == 0
size = len(dq)
```

## 4. Priority Queue

A priority queue is an abstract data type similar to a regular queue or stack, where each element has a "priority" associated with it. Elements with high priority are served before elements with low priority.

### 4.1 Basic Operations
- **insert**: Add an element with priority
- **extractMax/extractMin**: Remove and return the element with the highest/lowest priority
- **peek**: View the highest/lowest priority element without removing it
- **isEmpty**: Check if the priority queue is empty
- **size**: Return the number of elements

### 4.2 Implementations

#### 4.2.1 Using Heap
Priority queues are typically implemented using heaps, which provide efficient insertion and extraction operations.

```cpp
// C++ STL Priority Queue
#include <queue>

// Max Priority Queue (default)
std::priority_queue<int> maxPQ;
maxPQ.push(10);
maxPQ.push(30);
maxPQ.push(20);
int highest = maxPQ.top();  // 30
maxPQ.pop();               // Removes 30
bool empty = maxPQ.empty();
int size = maxPQ.size();

// Min Priority Queue
std::priority_queue<int, std::vector<int>, std::greater<int>> minPQ;
minPQ.push(10);
minPQ.push(30);
minPQ.push(20);
int lowest = minPQ.top();  // 10
```

```python
# Python heapq (implements min heap)
import heapq

# Min Priority Queue
min_pq = []
heapq.heappush(min_pq, 10)
heapq.heappush(min_pq, 30)
heapq.heappush(min_pq, 20)
lowest = min_pq[0]          # 10
popped = heapq.heappop(min_pq)  # removes and returns 10

# Max Priority Queue (negate values)
max_pq = []
heapq.heappush(max_pq, -10)
heapq.heappush(max_pq, -30)
heapq.heappush(max_pq, -20)
highest = -max_pq[0]           # 30
popped = -heapq.heappop(max_pq)  # removes and returns 30
```

### 4.3 Time Complexity
| Operation    | Time Complexity |
|--------------|----------------|
| Insert       | O(log n)       |
| ExtractMax   | O(log n)       |
| Peek         | O(1)           |
| isEmpty      | O(1)           |
| Size         | O(1)           |

## 5. Applications of Stacks

### 5.1 Expression Evaluation and Conversion
- **Infix to Postfix Conversion**
  ```cpp
  string infixToPostfix(string infix) {
      std::stack<char> s;
      string postfix = "";
      
      // Define operator precedence
      std::map<char, int> precedence;
      precedence['+'] = precedence['-'] = 1;
      precedence['*'] = precedence['/'] = 2;
      precedence['^'] = 3;
      
      for (char c : infix) {
          if (isalnum(c)) {
              postfix += c;  // Operand, add to output
          } else if (c == '(') {
              s.push(c);
          } else if (c == ')') {
              // Pop and add to output until '(' is found
              while (!s.empty() && s.top() != '(') {
                  postfix += s.top();
                  s.pop();
              }
              
              if (!s.empty() && s.top() == '(') {
                  s.pop();  // Remove '('
              }
          } else {
              // Operator
              while (!s.empty() && s.top() != '(' && 
                     precedence[c] <= precedence[s.top()]) {
                  postfix += s.top();
                  s.pop();
              }
              s.push(c);
          }
      }
      
      // Pop remaining operators
      while (!s.empty()) {
          if (s.top() == '(') s.pop();
          else {
              postfix += s.top();
              s.pop();
          }
      }
      
      return postfix;
  }
  ```

- **Postfix Evaluation**
  ```cpp
  int evaluatePostfix(string postfix) {
      std::stack<int> s;
      
      for (char c : postfix) {
          if (isdigit(c)) {
              s.push(c - '0');  // Convert char to integer
          } else {
              // Operator - pop two operands
              int val2 = s.top(); s.pop();
              int val1 = s.top(); s.pop();
              
              switch (c) {
                  case '+': s.push(val1 + val2); break;
                  case '-': s.push(val1 - val2); break;
                  case '*': s.push(val1 * val2); break;
                  case '/': s.push(val1 / val2); break;
              }
          }
      }
      
      return s.top();
  }
  ```

### 5.2 Parentheses Checking
```cpp
bool areParenthesesBalanced(string expr) {
    std::stack<char> s;
    
    for (char c : expr) {
        if (c == '(' || c == '{' || c == '[') {
            s.push(c);
        } else if (c == ')' || c == '}' || c == ']') {
            if (s.empty()) return false;
            
            char top = s.top();
            if ((c == ')' && top == '(') || 
                (c == '}' && top == '{') || 
                (c == ']' && top == '[')) {
                s.pop();
            } else {
                return false;
            }
        }
    }
    
    return s.empty();
}
```

### 5.3 Function Call Management (Call Stack)
- Tracks active subroutine calls in program execution
- Manages local variables and return addresses
- Enables recursion

### 5.4 Backtracking Algorithms
- Maze solving
- N-Queens problem
- Sudoku solver

### 5.5 Undo Mechanism
- Text editors
- Photoshop and other design software
- Browser history

## 6. Applications of Queues

### 6.1 Breadth-First Search (BFS)
```cpp
void bfs(vector<vector<int>>& graph, int start) {
    int n = graph.size();
    vector<bool> visited(n, false);
    queue<int> q;
    
    visited[start] = true;
    q.push(start);
    
    while (!q.empty()) {
        int vertex = q.front();
        q.pop();
        std::cout << vertex << " ";
        
        for (int adjacent : graph[vertex]) {
            if (!visited[adjacent]) {
                visited[adjacent] = true;
                q.push(adjacent);
            }
        }
    }
}
```

### 6.2 Job Scheduling
- CPU scheduling
- Print queue management
- Task processing in order of arrival

### 6.3 Cache Implementation
- Web server request buffering
- Message queues in distributed systems
- Database request queuing

### 6.4 Simulation
- Event-driven simulation
- Traffic flow simulation
- Customer service simulation

## 7. Common Stack Problems

### 7.1 Next Greater Element
```cpp
vector<int> nextGreaterElement(vector<int>& nums) {
    int n = nums.size();
    vector<int> result(n, -1);
    stack<int> s;  // Stack to store indices
    
    for (int i = 0; i < n; i++) {
        while (!s.empty() && nums[i] > nums[s.top()]) {
            result[s.top()] = nums[i];
            s.pop();
        }
        s.push(i);
    }
    
    return result;
}
```

### 7.2 Stock Span Problem
```cpp
vector<int> calculateSpan(vector<int>& prices) {
    int n = prices.size();
    vector<int> spans(n, 1);
    stack<int> s;
    
    for (int i = 0; i < n; i++) {
        while (!s.empty() && prices[i] >= prices[s.top()]) {
            s.pop();
        }
        
        spans[i] = s.empty() ? i + 1 : i - s.top();
        s.push(i);
    }
    
    return spans;
}
```

### 7.3 Largest Rectangle in Histogram
```cpp
int largestRectangleArea(vector<int>& heights) {
    int n = heights.size();
    stack<int> s;
    int maxArea = 0;
    
    for (int i = 0; i <= n; i++) {
        int currHeight = (i == n) ? 0 : heights[i];
        
        while (!s.empty() && currHeight < heights[s.top()]) {
            int height = heights[s.top()];
            s.pop();
            
            int width;
            if (s.empty()) {
                width = i;
            } else {
                width = i - s.top() - 1;
            }
            
            maxArea = max(maxArea, height * width);
        }
        
        s.push(i);
    }
    
    return maxArea;
}
```

### 7.4 Min Stack
```cpp
class MinStack {
private:
    stack<int> mainStack;
    stack<int> minStack;
    
public:
    void push(int x) {
        mainStack.push(x);
        
        if (minStack.empty() || x <= minStack.top()) {
            minStack.push(x);
        }
    }
    
    void pop() {
        if (mainStack.empty()) return;
        
        if (mainStack.top() == minStack.top()) {
            minStack.pop();
        }
        
        mainStack.pop();
    }
    
    int top() {
        return mainStack.top();
    }
    
    int getMin() {
        return minStack.top();
    }
};
```

## 8. Common Queue Problems

### 8.1 Sliding Window Maximum
```cpp
vector<int> maxSlidingWindow(vector<int>& nums, int k) {
    int n = nums.size();
    vector<int> result;
    deque<int> dq;  // Store indices of elements
    
    for (int i = 0; i < n; i++) {
        // Remove elements outside the current window
        while (!dq.empty() && dq.front() < i - k + 1) {
            dq.pop_front();
        }
        
        // Remove smaller elements as they can't be the maximum
        while (!dq.empty() && nums[i] > nums[dq.back()]) {
            dq.pop_back();
        }
        
        dq.push_back(i);
        
        // Add maximum to result when the window is complete
        if (i >= k - 1) {
            result.push_back(nums[dq.front()]);
        }
    }
    
    return result;
}
```

### 8.2 Implement Stack using Queues
```cpp
class StackUsingQueues {
private:
    queue<int> q1;
    queue<int> q2;
    
public:
    // Push - O(1)
    void push(int x) {
        q1.push(x);
    }
    
    // Pop - O(n)
    int pop() {
        if (q1.empty()) return -1;
        
        // Move all elements except the last one to q2
        while (q1.size() > 1) {
            q2.push(q1.front());
            q1.pop();
        }
        
        // Last element is the one to pop
        int popped = q1.front();
        q1.pop();
        
        // Swap q1 and q2
        swap(q1, q2);
        
        return popped;
    }
    
    int top() {
        if (q1.empty()) return -1;
        
        // Move all elements except the last one to q2
        while (q1.size() > 1) {
            q2.push(q1.front());
            q1.pop();
        }
        
        // Last element is the top
        int topElement = q1.front();
        
        // Move the last element to q2
        q2.push(q1.front());
        q1.pop();
        
        // Swap q1 and q2
        swap(q1, q2);
        
        return topElement;
    }
    
    bool empty() {
        return q1.empty();
    }
};
```

### 8.3 Generate Binary Numbers
```cpp
vector<string> generateBinaryNumbers(int n) {
    vector<string> result;
    queue<string> q;
    
    q.push("1");
    
    for (int i = 0; i < n; i++) {
        string current = q.front();
        q.pop();
        
        result.push_back(current);
        
        q.push(current + "0");
        q.push(current + "1");
    }
    
    return result;
}
```

### 8.4 First Non-Repeating Character in a Stream
```cpp
string firstNonRepeating(string str) {
    queue<char> q;
    vector<int> charCount(26, 0);
    string result = "";
    
    for (char c : str) {
        q.push(c);
        charCount[c - 'a']++;
        
        // Find the first non-repeating character
        while (!q.empty() && charCount[q.front() - 'a'] > 1) {
            q.pop();
        }
        
        if (q.empty()) {
            result += '#';
        } else {
            result += q.front();
        }
    }
    
    return result;
}
```

## 9. Advanced Techniques

### 9.1 Monotonic Stack
A monotonic stack maintains elements in strictly increasing (or decreasing) order, removing elements that would violate this property.

```cpp
// Next Greater Element using Monotonic Stack
vector<int> nextGreater(vector<int>& nums) {
    int n = nums.size();
    vector<int> result(n, -1);
    stack<int> s; // Monotonic decreasing stack
    
    for (int i = 0; i < n; i++) {
        while (!s.empty() && nums[i] > nums[s.top()]) {
            result[s.top()] = nums[i];
            s.pop();
        }
        s.push(i);
    }
    
    return result;
}
```

### 9.2 Monotonic Queue
Similar to monotonic stack, but maintains order in a queue structure, useful for sliding window problems.

```cpp
// Sliding Window Maximum using Monotonic Queue
vector<int> maxSlidingWindow(vector<int>& nums, int k) {
    int n = nums.size();
    vector<int> result;
    deque<int> dq; // Monotonic decreasing queue
    
    for (int i = 0; i < n; i++) {
        // Remove elements outside window
        while (!dq.empty() && dq.front() < i - k + 1) {
            dq.pop_front();
        }
        
        // Remove smaller elements
        while (!dq.empty() && nums[i] > nums[dq.back()]) {
            dq.pop_back();
        }
        
        dq.push_back(i);
        
        if (i >= k - 1) {
            result.push_back(nums[dq.front()]);
        }
    }
    
    return result;
}
```

### 9.3 Circular Deque
A deque with fixed size that wraps around.

```cpp
class MyCircularDeque {
private:
    vector<int> data;
    int front;
    int rear;
    int size;
    int capacity;
    
public:
    MyCircularDeque(int k) {
        data.resize(k);
        front = 0;
        rear = k - 1;
        size = 0;
        capacity = k;
    }
    
    bool insertFront(int value) {
        if (isFull()) return false;
        
        front = (front - 1 + capacity) % capacity;
        data[front] = value;
        size++;
        return true;
    }
    
    bool insertLast(int value) {
        if (isFull()) return false;
        
        rear = (rear + 1) % capacity;
        data[rear] = value;
        size++;
        return true;
    }
    
    bool deleteFront() {
        if (isEmpty()) return false;
        
        front = (front + 1) % capacity;
        size--;
        return true;
    }
    
    bool deleteLast() {
        if (isEmpty()) return false;
        
        rear = (rear - 1 + capacity) % capacity;
        size--;
        return true;
    }
    
    int getFront() {
        if (isEmpty()) return -1;
        return data[front];
    }
    
    int getRear() {
        if (isEmpty()) return -1;
        return data[rear];
    }
    
    bool isEmpty() {
        return size == 0;
    }
    
    bool isFull() {
        return size == capacity;
    }
};
```

## 10. Practice Problems

### 10.1 Stack Problems
1. [LeetCode 20: Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)
2. [LeetCode 155: Min Stack](https://leetcode.com/problems/min-stack/)
3. [LeetCode 739: Daily Temperatures](https://leetcode.com/problems/daily-temperatures/)
4. [LeetCode 84: Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/)
5. [LeetCode 42: Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/)
6. [LeetCode 394: Decode String](https://leetcode.com/problems/decode-string/)
7. [LeetCode 402: Remove K Digits](https://leetcode.com/problems/remove-k-digits/)
8. [LeetCode 85: Maximal Rectangle](https://leetcode.com/problems/maximal-rectangle/)

### 10.2 Queue Problems
1. [LeetCode 933: Number of Recent Calls](https://leetcode.com/problems/number-of-recent-calls/)
2. [LeetCode 225: Implement Stack using Queues](https://leetcode.com/problems/implement-stack-using-queues/)
3. [LeetCode 622: Design Circular Queue](https://leetcode.com/problems/design-circular-queue/)
4. [LeetCode 239: Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/)
5. [LeetCode 199: Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/)
6. [LeetCode 542: 01 Matrix](https://leetcode.com/problems/01-matrix/)
7. [LeetCode 1091: Shortest Path in Binary Matrix](https://leetcode.com/problems/shortest-path-in-binary-matrix/)
8. [LeetCode 649: Dota2 Senate](https://leetcode.com/problems/dota2-senate/)

### 10.3 Deque Problems
1. [LeetCode 239: Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/)
2. [LeetCode 641: Design Circular Deque](https://leetcode.com/problems/design-circular-deque/)
3. [LeetCode 1438: Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/)

### 10.4 Priority Queue Problems
1. [LeetCode 973: K Closest Points to Origin](https://leetcode.com/problems/k-closest-points-to-origin/)
2. [LeetCode 215: Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array/)
3. [LeetCode 703: Kth Largest Element in a Stream](https://leetcode.com/problems/kth-largest-element-in-a-stream/)
4. [LeetCode 295: Find Median from Data Stream](https://leetcode.com/problems/find-median-from-data-stream/)
5. [LeetCode 1046: Last Stone Weight](https://leetcode.com/problems/last-stone-weight/)

## 11. Resources

### 11.1 Books
- "Introduction to Algorithms" by Cormen, Leiserson, Rivest, and Stein (CLRS)
- "Algorithms" by Robert Sedgewick and Kevin Wayne
- "Data Structures and Algorithms Made Easy" by Narasimha Karumanchi

### 11.2 Online Resources
- [GeeksforGeeks: Stack Data Structure](https://www.geeksforgeeks.org/stack-data-structure/)
- [GeeksforGeeks: Queue Data Structure](https://www.geeksforgeeks.org/queue-data-structure/)
- [Visualgo: Stack and Queue Visualization](https://visualgo.net/en/list)

### 11.3 Practice Platforms
- [LeetCode: Stack Problems](https://leetcode.com/tag/stack/)
- [LeetCode: Queue Problems](https://leetcode.com/tag/queue/)
- [HackerRank: Stacks](https://www.hackerrank.com/domains/data-structures?filters%5Bsubdomains%5D%5B%5D=stacks)
- [HackerRank: Queues](https://www.hackerrank.com/domains/data-structures?filters%5Bsubdomains%5D%5B%5D=queues)

---

## Key Takeaways

1. **Stack**: Last-In-First-Out (LIFO) structure, ideal for problems involving nested structures, DFS traversals, and expression parsing.
2. **Queue**: First-In-First-Out (FIFO) structure, ideal for BFS, scheduling, and maintaining order.
3. **Deque**: Double-ended queue allowing operations at both ends, useful for sliding window problems.
4. **Priority Queue**: Serves elements based on priority, commonly implemented with heaps.
5. **Monotonic Stack/Queue**: Maintains elements in order, efficient for next/previous greater/smaller element problems and sliding window maximums.

## Love Babbar & Striver Sheet Problems (Stacks & Queues)

### Love Babbar Sheet (Stacks)
1. [Implement Stack from Scratch](https://www.geeksforgeeks.org/stack-data-structure-introduction-program/)
2. [Implement Queue from Scratch](https://www.geeksforgeeks.org/queue-set-1introduction-and-array-implementation/)
3. [Implement 2 Stacks in an Array](https://practice.geeksforgeeks.org/problems/implement-two-stacks-in-an-array/1)
4. [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)
5. [Next Greater Element](https://leetcode.com/problems/next-greater-element-i/)
6. [Sort a Stack](https://practice.geeksforgeeks.org/problems/sort-a-stack/1)
7. [Evaluate Reverse Polish Notation](https://leetcode.com/problems/evaluate-reverse-polish-notation/)
8. [Implement Min Stack](https://leetcode.com/problems/min-stack/)
9. [Celebrity Problem](https://practice.geeksforgeeks.org/problems/the-celebrity-problem/1)
10. [Maximum Rectangular Area in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/)

### Striver SDE Sheet (Stacks & Queues)
1. [Implement Stack using Arrays](https://www.geeksforgeeks.org/stack-data-structure-introduction-program/)
2. [Implement Queue using Arrays](https://www.geeksforgeeks.org/queue-set-1introduction-and-array-implementation/)
3. [Implement Stack using Queue](https://leetcode.com/problems/implement-stack-using-queues/)
4. [Implement Queue using Stack](https://leetcode.com/problems/implement-queue-using-stacks/)
5. [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)
6. [Next Greater Element](https://practice.geeksforgeeks.org/problems/next-larger-element-1587115620/1)
7. [Sort a Stack](https://practice.geeksforgeeks.org/problems/sort-a-stack/1)
8. [LRU Cache Implementation](https://leetcode.com/problems/lru-cache/)
9. [Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/)
10. [Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/)
