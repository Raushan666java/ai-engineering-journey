# Stacks and Queues

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand stack (LIFO) and queue (FIFO) data structures and their properties |
| LO2 | Implement stacks and queues using arrays and linked lists |
| LO3 | Solve problems using stacks: parenthesis matching, expression evaluation, monotonic stack |
| LO4 | Apply queues for BFS, level-order traversal, and task scheduling |
| LO5 | Implement circular queues, deques, and priority queues |
| LO6 | Use monotonic stack/queue for next greater/smaller element problems |

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 8.1 | Stack Fundamentals | LIFO, push, pop, top, operations |
| 8.2 | Queue Fundamentals | FIFO, enqueue, dequeue, front, rear |
| 8.3 | Stack Applications | Parenthesis matching, expression evaluation |
| 8.4 | Monotonic Stack | Next greater element, histogram problems |
| 8.5 | Queue Variants | Circular queue, deque, priority queue |
| 8.6 | Real-World Applications | BFS, cache, task scheduling |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Stack & Queue] --> B[Stack LIFO]
    A --> C[Queue FIFO]
    B --> D[Array Stack]
    B --> E[Linked Stack]
    C --> F[Array Queue]
    C --> G[Linked Queue]
    D --> H[Applications]
    E --> H
    F --> I[Deque/Circular]
    G --> I
    H --> J[Expression/Parentheses]
    I --> K[BFS/Scheduling]
```


A stack (LIFO) and queue (FIFO) are fundamental abstract data types used to organize data with specific access patterns.

## 8.1 Stack Fundamentals

**Stack operations**: push (add to top), pop (remove from top), top/peek (view top), is_empty.

**Array-based stack**:

```python
class ArrayStack:
    def __init__(self):
        self.data = []

    def push(self, val):
        self.data.append(val)  # O(1) amortized

    def pop(self):
        if self.is_empty():
            raise IndexError("Empty stack")
        return self.data.pop()  # O(1)

    def top(self):
        if self.is_empty():
            raise IndexError("Empty stack")
        return self.data[-1]

    def is_empty(self):
        return len(self.data) == 0

    def size(self):
        return len(self.data)
```

**Linked list-based stack**:

```python
class Node:
    def __init__(self, val):
        self.val = val
        self.next = None

class LinkedStack:
    def __init__(self):
        self.head = None

    def push(self, val):
        node = Node(val)
        node.next = self.head
        self.head = node

    def pop(self):
        if self.is_empty():
            raise IndexError("Empty stack")
        val = self.head.val
        self.head = self.head.next
        return val

    def top(self):
        if self.is_empty():
            raise IndexError("Empty stack")
        return self.head.val

    def is_empty(self):
        return self.head is None
```

## 8.2 Queue Fundamentals

**Queue operations**: enqueue (add to rear), dequeue (remove from front), front (view front), rear (view back).

**Array-based circular queue**:

```python
class CircularQueue:
    def __init__(self, capacity):
        self.data = [None] * capacity
        self.capacity = capacity
        self.front = 0
        self.rear = -1
        self.size = 0

    def enqueue(self, val):
        if self.is_full():
            raise IndexError("Queue full")
        self.rear = (self.rear + 1) % self.capacity
        self.data[self.rear] = val
        self.size += 1

    def dequeue(self):
        if self.is_empty():
            raise IndexError("Queue empty")
        val = self.data[self.front]
        self.front = (self.front + 1) % self.capacity
        self.size -= 1
        return val

    def is_empty(self):
        return self.size == 0

    def is_full(self):
        return self.size == self.capacity
```

**Linked list-based queue**:

```python
class LinkedQueue:
    def __init__(self):
        self.head = None
        self.tail = None

    def enqueue(self, val):
        node = Node(val)
        if self.tail:
            self.tail.next = node
        self.tail = node
        if not self.head:
            self.head = node

    def dequeue(self):
        if self.is_empty():
            raise IndexError("Queue empty")
        val = self.head.val
        self.head = self.head.next
        if not self.head:
            self.tail = None
        return val

    def is_empty(self):
        return self.head is None
```

## 8.3 Stack Applications

**Valid parentheses**:

```python
def is_valid_parentheses(s):
    pairs = {")": "(", "}": "{", "]": "["}
    stack = []
    for char in s:
        if char in pairs:
            if not stack or stack[-1] != pairs[char]:
                return False
            stack.pop()
        else:
            stack.append(char)
    return len(stack) == 0

print(is_valid_parentheses("()[]{}"))  # True
print(is_valid_parentheses("([)]"))   # False
```

**Expression evaluation** (infix to postfix):

```python
def infix_to_postfix(expression):
    precedence = {"+": 1, "-": 1, "*": 2, "/": 2, "^": 3}
    result = []
    stack = []
    for char in expression:
        if char.isalnum():
            result.append(char)
        elif char == "(":
            stack.append(char)
        elif char == ")":
            while stack and stack[-1] != "(":
                result.append(stack.pop())
            stack.pop()  # remove "("
        else:
            while stack and stack[-1] != "(" and 
                  precedence.get(stack[-1], 0) >= precedence.get(char, 0):
                result.append(stack.pop())
            stack.append(char)
    while stack:
        result.append(stack.pop())
    return "".join(result)

print(infix_to_postfix("A*(B+C)/D"))  # "ABC+*D/"
```

**Evaluate postfix expression**:

```python
def eval_postfix(expr):
    stack = []
    for token in expr:
        if token.isdigit():
            stack.append(int(token))
        else:
            b = stack.pop()
            a = stack.pop()
            if token == "+": stack.append(a + b)
            elif token == "-": stack.append(a - b)
            elif token == "*": stack.append(a * b)
            elif token == "/": stack.append(a // b)
    return stack[0]

print(eval_postfix("23*54*+"))  # (2*3)+(5*4) = 26
```

## 8.4 Monotonic Stack

A monotonic stack maintains elements in increasing or decreasing order. Used for next greater/smaller element problems.

**Next greater element**:

```python
def next_greater_element(nums):
    result = [-1] * len(nums)
    stack = []
    for i, num in enumerate(nums):
        while stack and nums[stack[-1]] < num:
            result[stack.pop()] = num
        stack.append(i)
    return result

print(next_greater_element([4, 5, 2, 25]))  # [5, 25, 25, -1]
```

**Largest rectangle in histogram**:

```python
def largest_rectangle_area(heights):
    stack = []
    max_area = 0
    heights.append(0)  # sentinel
    for i, h in enumerate(heights):
        while stack and heights[stack[-1]] > h:
            height = heights[stack.pop()]
            width = i if not stack else i - stack[-1] - 1
            max_area = max(max_area, height * width)
        stack.append(i)
    return max_area

print(largest_rectangle_area([2, 1, 5, 6, 2, 3]))  # 10
```

**Daily temperatures** (days until warmer):

```python
def daily_temperatures(temps):
    result = [0] * len(temps)
    stack = []
    for i, t in enumerate(temps):
        while stack and temps[stack[-1]] < t:
            prev = stack.pop()
            result[prev] = i - prev
        stack.append(i)
    return result

print(daily_temperatures([73, 74, 75, 71, 69, 72, 76, 73]))
# [1, 1, 4, 2, 1, 1, 0, 0]
```

## 8.5 Queue Variants

**Deque** (double-ended queue): Supports push/pop from both ends.

```python
from collections import deque

dq = deque()
dq.append(1)        # add to right
dq.appendleft(2)    # add to left
dq.pop()            # remove from right
dq.popleft()        # remove from left
```

**Priority queue** (min-heap or max-heap): Elements have priorities.

```python
import heapq

pq = []
heapq.heappush(pq, (3, "task3"))
heapq.heappush(pq, (1, "task1"))
heapq.heappush(pq, (2, "task2"))
while pq:
    priority, task = heapq.heappop(pq)
    print(f"{task}: {priority}")
# task1: 1, task2: 2, task3: 3
```

## 8.6 Real-World Applications

**BFS using queue**:

```python
from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    visited.add(start)
    while queue:
        node = queue.popleft()
        print(node, end=" ")
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)

graph = {0: [1, 2], 1: [2], 2: [0, 3], 3: [3]}
bfs(graph, 2)  # 2 0 3 1
```

**Stack for undo/redo**:

```python
class UndoRedo:
    def __init__(self):
        self.undo_stack = []
        self.redo_stack = []

    def action(self, state):
        self.undo_stack.append(state)
        self.redo_stack.clear()

    def undo(self):
        if self.undo_stack:
            self.redo_stack.append(self.undo_stack.pop())

    def redo(self):
        if self.redo_stack:
            self.undo_stack.append(self.redo_stack.pop())
```

---

## TypeScript Parallel

```typescript
class Stack<T> {
    private items: T[] = [];
    push(item: T): void { this.items.push(item); }
    pop(): T | undefined { return this.items.pop(); }
    peek(): T | undefined { return this.items[this.items.length - 1]; }
    isEmpty(): boolean { return this.items.length === 0; }
}

class Queue<T> {
    private items: T[] = [];
    enqueue(item: T): void { this.items.push(item); }
    dequeue(): T | undefined { return this.items.shift(); }
    front(): T | undefined { return this.items[0]; }
    isEmpty(): boolean { return this.items.length === 0; }
}

function isValid(s: string): boolean {
    const map = new Map<string, string>([["}", "{"], ["]", "["], [")", "("]]);
    const stack: string[] = [];
    for (const c of s) {
        if (map.has(c)) { if (stack.pop() !== map.get(c)) return false; }
        else stack.push(c);
    }
    return stack.length === 0;
}
```

---

## Summary

- Stacks follow LIFO (Last-In-First-Out) principle; queues follow FIFO (First-In-First-Out)
- Array-based stacks provide O(1) amortized push/pop; simple and cache-friendly
- Linked-list based queues avoid shifting but use more memory per element
- Parenthesis matching uses a stack to track opening brackets, ensuring proper nesting
- Expression evaluation uses stacks for operator precedence and postfix conversion
- Monotonic stacks maintain sorted order and solve next greater/smaller element in O(n)
- The largest rectangle in histogram uses a monotonic stack to find the maximum area rectangle
- Circular queues reuse array space by wrapping around, avoiding O(n) enqueue/dequeue
- Deques support operations at both ends and are implemented as collections.deque in Python
- Priority queues order elements by priority and are implemented with heaps for O(log n) operations

## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| Parentheses validation | Use stack of opening brackets | Counting brackets without nesting check |
| Next greater element | Monotonic decreasing stack | Nested loops O(n^2) |
| Queue BFS | Use collections.deque | Using list.pop(0) which is O(n) |
| Circular buffer | Use modular arithmetic for front/rear | Resizing array for each enqueue |
| Expression parsing | Stack for operators, postfix evaluation | Recursive descent for simple cases |
| Priority task scheduling | heapq push/pop | Sorting each time |


## Interview Q&A
<details class="tp-qa-card" data-qid="dsa08-q1">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>
    Q1: What is the difference between a stack and a queue?
  </summary>
  <div class="tp-qa-answer"><p>Stack: LIFO - push/pop at same end. Queue: FIFO - enqueue at rear, dequeue at front.</p></div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="dsa08-q2">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>
    Q2: How do you implement a queue using two stacks?
  </summary>
  <div class="tp-qa-answer"><p>Use stack1 for enqueue. For dequeue, if stack2 is empty, pop all from stack1 to stack2, then pop from stack2. Amortized O(1) per operation.</p></div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="dsa08-q3">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>
    Q3: Explain the monotonic stack with an example.
  </summary>
  <div class="tp-qa-answer"><p>A monotonic stack maintains elements in increasing/decreasing order. For next greater element, we pop when current > stack top, recording the current as the next greater for the popped index.</p></div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="dsa08-q4">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>
    Q4: How do you implement a stack with O(1) min operation?
  </summary>
  <div class="tp-qa-answer"><p>Maintain two stacks: one for values, one for minimums. On push, push min(value, current_min) onto min stack. On pop, pop both. Min is top of min stack.</p></div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="dsa08-q5">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>
    Q5: How does a circular queue work?
  </summary>
  <div class="tp-qa-answer"><p>Use a fixed array with front and rear pointers that wrap around using modulo. Avoids O(n) shifting required by linear array queues.</p></div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="dsa08-q6">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>
    Q6: Solve the largest rectangle in histogram problem.
  </summary>
  <div class="tp-qa-answer"><p>Use monotonic stack of increasing heights. When a smaller height is encountered, pop larger heights and calculate area using the current index as right boundary.</p></div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="dsa08-q7">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>
    Q7: How do you evaluate a postfix expression?
  </summary>
  <div class="tp-qa-answer"><p>Scan left to right. Push numbers onto stack. When operator is encountered, pop two numbers, apply operator, push result. Final stack element is the answer.</p></div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="dsa08-q8">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>
    Q8: What is a deque and when would you use it?
  </summary>
  <div class="tp-qa-answer"><p>Deque allows push/pop from both ends. Used for sliding window maximum, palindrome checking, and undo/redo with limited history.</p></div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="dsa08-q9">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>
    Q9: How does a priority queue differ from a regular queue?
  </summary>
  <div class="tp-qa-answer"><p>Priority queue orders elements by priority (not insertion order). Implemented with heap: O(log n) insert/delete, O(1) peek. Used for Dijkstra, A*, task scheduling.</p></div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="dsa08-q10">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>
    Q10: Implement a stack that supports push, pop, top, and getMin in O(1).
  </summary>
  <div class="tp-qa-answer"><p>Store each value paired with the current minimum: (value, min_so_far). On push, compare new value with top's min. On pop, just pop. getMin returns top's min.</p></div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="dsa08-q11">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>
    Q11: Explain the sliding window maximum using deque.
  </summary>
  <div class="tp-qa-answer"><p>Store indices in deque with decreasing values. Before adding new element, remove indices outside window (from front) and smaller elements (from back). Front always has max.</p></div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="dsa08-q12">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>
    Q12: How do you check if a string has balanced parentheses?
  </summary>
  <div class="tp-qa-answer"><p>Use stack. For each char, if opening bracket, push. If closing, pop and check if it matches the expected opening bracket. Stack must be empty at end.</p></div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

## Chapter Quiz
**Q1**: What is the time complexity of push/pop operations on a stack implemented with dynamic array?

a) O(1) amortized  b) O(n)  c) O(log n)  d) O(n^2)
<details class="tp-qa-card" data-qid="dsa08-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: a) O(1) amortized</strong></p></div></details>

**Q2**: Which data structure is used for BFS traversal?
a) Stack  b) Queue  c) Priority Queue  d) Deque
<details class="tp-qa-card" data-qid="dsa08-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Queue</strong></p></div></details>

**Q3**: What is the space complexity of the monotonic stack solution for next greater element?
a) O(1)  b) O(n)  c) O(log n)  d) O(n^2)
<details class="tp-qa-card" data-qid="dsa08-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) O(n)</strong></p></div></details>

**Q4**: Which queue variant allows push/pop at both ends?
a) Circular queue  b) Priority queue  c) Deque  d) Blocking queue
<details class="tp-qa-card" data-qid="dsa08-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) Deque</strong></p></div></details>

**Q5**: What is the time complexity of accessing the minimum element in a stack with O(1) getMin?
a) O(1)  b) O(n)  c) O(log n)  d) O(n^2)
<details class="tp-qa-card" data-qid="dsa08-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: a) O(1)</strong></p></div></details>

## Exercises

**Easy** - Implement a stack using arrays with push, pop, top, isEmpty, and size

**Medium** - Implement a MinStack that supports push, pop, top, and getMin in O(1)

**Medium** - Evaluate a fully parenthesized infix expression using two stacks

**Hard** - Largest rectangle in a histogram - implement the O(n) monotonic stack solution

**Hard** - Implement a queue using stacks where each operation is amortized O(1)

---

> **Next**: [09 - Binary Trees →](09-binary-trees.md)
