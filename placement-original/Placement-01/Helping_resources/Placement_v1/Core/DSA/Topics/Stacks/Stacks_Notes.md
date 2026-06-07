# Stacks: Comprehensive Notes

## 1. Introduction to Stacks

A stack is a linear data structure that follows the Last In First Out (LIFO) principle. The last element added to the stack is the first one to be removed.

### Key Characteristics
- LIFO (Last In First Out) principle
- Elements are added and removed from the same end (top)
- Only the top element is accessible at any time
- Restricted access data structure

### Real-world Analogies
- Stack of plates
- Stack of books
- Undo operation in text editors
- Function call stack in programming languages

### Visual Representation
```
    ┌───┐
    │ 5 │ ← Top (Last In, First Out)
    ├───┤
    │ 3 │
    ├───┤
    │ 8 │
    ├───┤
    │ 2 │
    └───┘
```

## 2. Basic Operations

### Push
Adds an element to the top of the stack.
- Time Complexity: O(1)

```java
public void push(int data) {
    // Create a new node
    Node newNode = new Node(data);
    
    // Link the new node to the current top
    newNode.next = top;
    
    // Update the top pointer
    top = newNode;
}
```

### Pop
Removes and returns the top element from the stack.
- Time Complexity: O(1)

```java
public int pop() {
    // Check if stack is empty
    if (isEmpty()) {
        throw new EmptyStackException();
    }
    
    // Get the data from the top node
    int data = top.data;
    
    // Update the top pointer
    top = top.next;
    
    // Return the data
    return data;
}
```

### Peek (or Top)
Returns the top element without removing it.
- Time Complexity: O(1)

```java
public int peek() {
    // Check if stack is empty
    if (isEmpty()) {
        throw new EmptyStackException();
    }
    
    // Return the data from the top node
    return top.data;
}
```

### isEmpty
Checks if the stack is empty.
- Time Complexity: O(1)

```java
public boolean isEmpty() {
    return top == null;
}
```

### size
Returns the number of elements in the stack.
- Time Complexity: O(1) with a size variable, O(n) without

```java
public int size() {
    return size; // If maintaining a size variable
    
    // Alternative: count nodes
    int count = 0;
    Node current = top;
    while (current != null) {
        count++;
        current = current.next;
    }
    return count;
}
```

## 3. Stack Implementations

### Array-based Implementation
```java
public class ArrayStack {
    private int[] array;
    private int top;
    private int capacity;
    
    public ArrayStack(int capacity) {
        this.capacity = capacity;
        this.array = new int[capacity];
        this.top = -1; // Stack is initially empty
    }
    
    public void push(int data) {
        if (isFull()) {
            throw new StackOverflowError("Stack is full");
        }
        array[++top] = data;
    }
    
    public int pop() {
        if (isEmpty()) {
            throw new EmptyStackException();
        }
        return array[top--];
    }
    
    public int peek() {
        if (isEmpty()) {
            throw new EmptyStackException();
        }
        return array[top];
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
```

### Linked List-based Implementation
```java
public class LinkedStack {
    private class Node {
        int data;
        Node next;
        
        Node(int data) {
            this.data = data;
        }
    }
    
    private Node top;
    private int size;
    
    public LinkedStack() {
        this.top = null;
        this.size = 0;
    }
    
    public void push(int data) {
        Node newNode = new Node(data);
        newNode.next = top;
        top = newNode;
        size++;
    }
    
    public int pop() {
        if (isEmpty()) {
            throw new EmptyStackException();
        }
        int data = top.data;
        top = top.next;
        size--;
        return data;
    }
    
    public int peek() {
        if (isEmpty()) {
            throw new EmptyStackException();
        }
        return top.data;
    }
    
    public boolean isEmpty() {
        return top == null;
    }
    
    public int size() {
        return size;
    }
}
```

### Using Java's Built-in Stack
```java
import java.util.Stack;

public class StackExample {
    public static void main(String[] args) {
        Stack<Integer> stack = new Stack<>();
        
        // Push elements
        stack.push(10);
        stack.push(20);
        stack.push(30);
        
        // Peek at the top element
        System.out.println("Top element: " + stack.peek()); // 30
        
        // Pop elements
        System.out.println("Popped: " + stack.pop()); // 30
        System.out.println("Popped: " + stack.pop()); // 20
        
        // Check if empty
        System.out.println("Is empty? " + stack.isEmpty()); // false
        
        // Size
        System.out.println("Size: " + stack.size()); // 1
    }
}
```

## 4. Applications of Stacks

### Expression Evaluation
- **Infix to Postfix Conversion**
- **Postfix Expression Evaluation**
- **Infix Expression Evaluation**

```java
// Infix to Postfix conversion
public String infixToPostfix(String infix) {
    StringBuilder postfix = new StringBuilder();
    Stack<Character> stack = new Stack<>();
    
    for (char c : infix.toCharArray()) {
        // If the character is an operand, add it to the output
        if (Character.isLetterOrDigit(c)) {
            postfix.append(c);
        }
        // If the character is '(', push it to the stack
        else if (c == '(') {
            stack.push(c);
        }
        // If the character is ')', pop and add to output until '(' is found
        else if (c == ')') {
            while (!stack.isEmpty() && stack.peek() != '(') {
                postfix.append(stack.pop());
            }
            stack.pop(); // Remove '(' from stack
        }
        // If the character is an operator
        else {
            while (!stack.isEmpty() && precedence(c) <= precedence(stack.peek())) {
                postfix.append(stack.pop());
            }
            stack.push(c);
        }
    }
    
    // Pop all remaining operators from the stack
    while (!stack.isEmpty()) {
        postfix.append(stack.pop());
    }
    
    return postfix.toString();
}

private int precedence(char operator) {
    switch (operator) {
        case '+':
        case '-':
            return 1;
        case '*':
        case '/':
            return 2;
        case '^':
            return 3;
    }
    return -1;
}
```

### Balanced Parentheses
```java
public boolean isBalanced(String expression) {
    Stack<Character> stack = new Stack<>();
    
    for (char c : expression.toCharArray()) {
        if (c == '(' || c == '[' || c == '{') {
            stack.push(c);
        } else if (c == ')' || c == ']' || c == '}') {
            if (stack.isEmpty()) {
                return false;
            }
            
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
```

### Function Call Management
- Programming languages use stacks to manage function calls
- Each function call creates a new stack frame
- Local variables and parameters are stored in the stack frame
- When a function returns, its stack frame is popped

### Undo Mechanism
```java
public class TextEditor {
    private StringBuilder text;
    private Stack<String> undoStack;
    
    public TextEditor() {
        text = new StringBuilder();
        undoStack = new Stack<>();
    }
    
    public void append(String str) {
        undoStack.push(text.toString());
        text.append(str);
    }
    
    public void delete(int n) {
        undoStack.push(text.toString());
        text.delete(text.length() - n, text.length());
    }
    
    public void undo() {
        if (!undoStack.isEmpty()) {
            text = new StringBuilder(undoStack.pop());
        }
    }
    
    public String getText() {
        return text.toString();
    }
}
```

### Backtracking Algorithms
- Depth-First Search (DFS)
- Maze solving
- N-Queens problem
- Sudoku solver

## 5. Common Stack Problems and Patterns

### Pattern 1: Next Greater Element
```java
public int[] nextGreaterElement(int[] nums) {
    int n = nums.length;
    int[] result = new int[n];
    Arrays.fill(result, -1);
    Stack<Integer> stack = new Stack<>();
    
    for (int i = 0; i < n; i++) {
        while (!stack.isEmpty() && nums[stack.peek()] < nums[i]) {
            result[stack.pop()] = nums[i];
        }
        stack.push(i);
    }
    
    return result;
}
```

### Pattern 2: Monotonic Stack
```java
// Find the largest rectangle in a histogram
public int largestRectangleArea(int[] heights) {
    int n = heights.length;
    Stack<Integer> stack = new Stack<>();
    int maxArea = 0;
    
    for (int i = 0; i <= n; i++) {
        int h = (i == n) ? 0 : heights[i];
        
        while (!stack.isEmpty() && h < heights[stack.peek()]) {
            int height = heights[stack.pop()];
            int width = stack.isEmpty() ? i : i - stack.peek() - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        
        stack.push(i);
    }
    
    return maxArea;
}
```

### Pattern 3: Expression Evaluation
```java
// Evaluate a postfix expression
public int evaluatePostfix(String expression) {
    Stack<Integer> stack = new Stack<>();
    
    for (char c : expression.toCharArray()) {
        if (Character.isDigit(c)) {
            stack.push(c - '0');
        } else {
            int val1 = stack.pop();
            int val2 = stack.pop();
            
            switch (c) {
                case '+':
                    stack.push(val2 + val1);
                    break;
                case '-':
                    stack.push(val2 - val1);
                    break;
                case '*':
                    stack.push(val2 * val1);
                    break;
                case '/':
                    stack.push(val2 / val1);
                    break;
            }
        }
    }
    
    return stack.pop();
}
```

### Pattern 4: Balanced Parentheses
```java
// Check if a string of parentheses is valid
public boolean isValid(String s) {
    Stack<Character> stack = new Stack<>();
    
    for (char c : s.toCharArray()) {
        if (c == '(' || c == '[' || c == '{') {
            stack.push(c);
        } else {
            if (stack.isEmpty()) {
                return false;
            }
            
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
```

## 6. Advanced Stack Concepts

### Min Stack
A stack that supports push, pop, top, and retrieving the minimum element in constant time.

```java
public class MinStack {
    private Stack<Integer> stack;
    private Stack<Integer> minStack;
    
    public MinStack() {
        stack = new Stack<>();
        minStack = new Stack<>();
    }
    
    public void push(int val) {
        stack.push(val);
        if (minStack.isEmpty() || val <= minStack.peek()) {
            minStack.push(val);
        }
    }
    
    public void pop() {
        if (stack.isEmpty()) {
            return;
        }
        
        int val = stack.pop();
        if (val == minStack.peek()) {
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
```

### Stack with Max API
Similar to Min Stack, but retrieves the maximum element.

```java
public class MaxStack {
    private Stack<Integer> stack;
    private Stack<Integer> maxStack;
    
    public MaxStack() {
        stack = new Stack<>();
        maxStack = new Stack<>();
    }
    
    public void push(int val) {
        stack.push(val);
        if (maxStack.isEmpty() || val >= maxStack.peek()) {
            maxStack.push(val);
        }
    }
    
    public int pop() {
        if (stack.isEmpty()) {
            throw new EmptyStackException();
        }
        
        int val = stack.pop();
        if (val == maxStack.peek()) {
            maxStack.pop();
        }
        return val;
    }
    
    public int top() {
        return stack.peek();
    }
    
    public int getMax() {
        return maxStack.peek();
    }
}
```

### Two Stacks in One Array
Implement two stacks using a single array.

```java
public class TwoStacks {
    private int[] array;
    private int top1;
    private int top2;
    private int capacity;
    
    public TwoStacks(int capacity) {
        this.capacity = capacity;
        this.array = new int[capacity];
        this.top1 = -1;
        this.top2 = capacity;
    }
    
    public void push1(int data) {
        if (top1 + 1 < top2) {
            array[++top1] = data;
        } else {
            throw new StackOverflowError("Stack 1 is full");
        }
    }
    
    public void push2(int data) {
        if (top1 < top2 - 1) {
            array[--top2] = data;
        } else {
            throw new StackOverflowError("Stack 2 is full");
        }
    }
    
    public int pop1() {
        if (top1 >= 0) {
            return array[top1--];
        }
        throw new EmptyStackException();
    }
    
    public int pop2() {
        if (top2 < capacity) {
            return array[top2++];
        }
        throw new EmptyStackException();
    }
    
    public int peek1() {
        if (top1 >= 0) {
            return array[top1];
        }
        throw new EmptyStackException();
    }
    
    public int peek2() {
        if (top2 < capacity) {
            return array[top2];
        }
        throw new EmptyStackException();
    }
    
    public boolean isEmpty1() {
        return top1 == -1;
    }
    
    public boolean isEmpty2() {
        return top2 == capacity;
    }
}
```

## 7. Time and Space Complexity

| Operation | Time Complexity | Space Complexity |
|-----------|----------------|-----------------|
| Push      | O(1)           | O(1)            |
| Pop       | O(1)           | O(1)            |
| Peek      | O(1)           | O(1)            |
| isEmpty   | O(1)           | O(1)            |
| Size      | O(1)*          | O(1)            |

*O(1) if maintaining a size variable, O(n) otherwise

## 8. Best Practices

1. **Always check for empty stack** before pop or peek operations
2. **Consider edge cases**: empty stack, single element, multiple elements
3. **Choose the right implementation** based on requirements (array vs linked list)
4. **Use built-in stack** when possible for simplicity
5. **Consider thread safety** for concurrent applications

## 9. Learning Strategy for Stacks

1. **Master the basics**: stack operations, implementations
2. **Understand common applications**: expression evaluation, balanced parentheses
3. **Practice problems by pattern**: monotonic stack, expression evaluation
4. **Analyze solutions**: understand time and space complexity
5. **Implement from scratch**: don't memorize solutions, understand the approach

## 10. Common Interview Questions

1. Implement a stack using arrays/linked lists
2. Check for balanced parentheses in an expression
3. Evaluate postfix/prefix expressions
4. Convert infix to postfix/prefix expressions
5. Implement a min/max stack
6. Implement two stacks in one array
7. Sort a stack
8. Next greater/smaller element
9. Implement a stack with getMiddle() operation
10. Design a stack that supports getMin() in O(1) time

## Resources for Further Learning

1. **Books**:
   - "Introduction to Algorithms" by CLRS
   - "Cracking the Coding Interview" by Gayle Laakmann McDowell

2. **Online Platforms**:
   - LeetCode: Stack section
   - GeeksforGeeks: Stack data structure
   - HackerRank: Stack challenges

3. **YouTube Channels**:
   - [mycodeschool](https://www.youtube.com/watch?v=F1F2imiOJfk) - Stack Data Structure
   - [Abdul Bari](https://www.youtube.com/watch?v=vZEuSFXSMDI) - Stack Implementation
   - [Back To Back SWE](https://www.youtube.com/watch?v=QMlDCR9xyd8) - Stack Problems
   - [Striver (takeUforward)](https://www.youtube.com/watch?v=P1bAPZg5uaE) - Stack Questions

4. **Visualization Tools**:
   - [VisuAlgo](https://visualgo.net/en/list) - Stack Visualization
   - [Algorithm Visualizer](https://algorithm-visualizer.org/) - Stack Operations