# STACKS - QUICK CONCEPTS

## Core Concepts

### 1. Stack Data Structure
- **LIFO Principle**: Last In, First Out
- **Operations**: Push (add), Pop (remove), Peek (view top), isEmpty, Size
- **Top Pointer**: Points to most recently added element
- **Two Implementations**: Array-based (fixed size) and Linked List-based (dynamic)

### 2. Array-based Stack
```java
class ArrayStack {
    private int[] arr;
    private int top;
    private int capacity;

    public ArrayStack(int capacity) {
        this.capacity = capacity;
        arr = new int[capacity];
        top = -1;
    }

    public void push(int x) {
        if (top == capacity - 1) throw new StackOverflowError();
        arr[++top] = x;
    }

    public int pop() {
        if (isEmpty()) throw new EmptyStackException();
        return arr[top--];
    }
}
```

### 3. Linked List-based Stack
```java
class LinkedStack {
    private Node top;

    private class Node {
        int data;
        Node next;
    }

    public void push(int x) {
        Node newNode = new Node();
        newNode.data = x;
        newNode.next = top;
        top = newNode;
    }

    public int pop() {
        if (isEmpty()) throw new EmptyStackException();
        int data = top.data;
        top = top.next;
        return data;
    }
}
```

### 4. Stack Applications

#### Expression Evaluation
- **Infix**: Standard notation (2 + 3 * 4)
- **Postfix**: Operators after operands (2 3 4 * +)
- **Prefix**: Operators before operands (+ 2 * 3 4)
- **Conversion**: Use stack to convert between notations

#### Balanced Parentheses
- **Opening brackets**: Push to stack
- **Closing brackets**: Pop and check matching
- **Final check**: Stack should be empty

#### Function Call Stack
- **Recursion**: Each call creates new stack frame
- **Local variables**: Stored in stack frame
- **Return address**: Where to return after function completes

### 5. Monotonic Stack
- **Increasing**: Elements in increasing order from bottom to top
- **Decreasing**: Elements in decreasing order from bottom to top
- **Applications**: Next greater element, previous smaller element
- **Pattern**: Remove elements that violate monotonic property

### 6. Stack with Additional Operations

#### Min Stack (O(1) minimum)
- **Two stacks**: Main stack + minimum stack
- **Push**: Push to main, push min(current, new_element) to min stack
- **Pop**: Pop both stacks
- **Get min**: Peek min stack

#### Stack with Max
- Similar to min stack but track maximum
- Useful for sliding window maximum problems

### 7. Stack-based Algorithms

#### Next Greater Element
```java
public int[] nextGreaterElement(int[] nums) {
    int[] result = new int[nums.length];
    Stack<Integer> stack = new Stack<>();

    for (int i = nums.length - 1; i >= 0; i--) {
        while (!stack.isEmpty() && stack.peek() <= nums[i]) {
            stack.pop();
        }
        result[i] = stack.isEmpty() ? -1 : stack.peek();
        stack.push(nums[i]);
    }

    return result;
}
```

#### Largest Rectangle in Histogram
- **Stack stores indices** of increasing heights
- **Calculate area** when height decreases
- **Width calculation**: Current index - stack.peek() - 1

### 8. Common Patterns

#### Iterative to Recursive Conversion
- **Stack simulates recursion**
- **State management**: Push/pop state information
- **Base cases**: Handle in loop conditions

#### Backtracking Problems
- **DFS with stack**: Explore all possibilities
- **State restoration**: Pop to backtrack
- **Visited tracking**: Prevent cycles

#### Expression Parsing
- **Operator precedence**: Higher precedence operators evaluated first
- **Associativity**: Left-to-right or right-to-left
- **Parentheses**: Override normal precedence

### 9. Edge Cases and Error Handling

#### Stack Overflow
- **Array-based**: Fixed capacity exceeded
- **Prevention**: Use dynamic arrays or linked lists
- **Detection**: Check capacity before push

#### Stack Underflow
- **Empty stack pop/peek**: Throw exception
- **Prevention**: Always check isEmpty() before operations
- **Graceful handling**: Return sentinel values or throw custom exceptions

#### Memory Management
- **Linked list nodes**: Proper cleanup on pop
- **Reference cycles**: Avoid in custom objects
- **Memory leaks**: Clear references when done

### 10. Advanced Topics

#### Concurrent Stack
- **Thread-safe operations**: Atomic push/pop
- **Lock-free implementations**: CAS operations
- **ABA problem**: Counter-based solutions

#### Persistent Stack
- **Immutable operations**: Each operation creates new stack
- **Path copying**: Share common structure
- **Memory efficient**: Only changed parts are new

#### Stack in Other Languages
- **C++**: std::stack
- **Python**: list with append/pop
- **JavaScript**: Array with push/pop
- **Implementation differences**: Performance characteristics

### 11. Interview Tips

#### Implementation Questions
- **Start with interface**: Define operations first
- **Handle edge cases**: Empty stack, full stack
- **Choose right implementation**: Array vs Linked List
- **Consider generics**: Type-safe implementations

#### Problem-Solving Approach
1. **Identify stack usage**: LIFO property needed?
2. **Choose data structure**: Stack, Queue, or Deque?
3. **Handle edge cases**: Empty input, single element
4. **Time/space complexity**: Analyze your solution
5. **Test thoroughly**: Various input sizes and edge cases

#### Common Mistakes
- **Not checking empty stack**: Before pop/peek
- **Wrong order operations**: Push/pop sequence
- **Missing base cases**: In recursive stack problems
- **Incorrect indexing**: Off-by-one errors

Remember: Stacks are fundamental for many algorithmic patterns. Master the basic operations and understand when to apply different stack-based techniques!