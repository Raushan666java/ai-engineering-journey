# Chapter 5: Stacks

## Learning Objectives

- Define the Stack ADT (Last-In-First-Out).
- Implement a stack using arrays and linked lists.
- Apply stacks to expression evaluation, parenthesis matching, and undo functionality.
- Analyze the complexity of each stack operation.

## Theory

![Stacks, Queues and Deques](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/data-structures/ch03-stacks-queues.png)

### Stack ADT

A stack is a linear data structure that supports two primary operations: **push** (insert at the top) and **pop** (remove from the top). The Last-In-First-Out (LIFO) discipline governs access.

**Core operations:**

| Operation | Description | Complexity |
|-----------|-------------|------------|
| `push(x)` | Insert element x at the top | \( O(1) \) |
| `pop()` | Remove and return the top element | \( O(1) \) |
| `top()` / `peek()` | Return the top element without removing | \( O(1) \) |
| `isEmpty()` | Check if the stack is empty | \( O(1) \) |
| `size()` | Return the number of elements | \( O(1) \) |

### Applications

- **Expression evaluation**: Convert infix to postfix (Shunting-yard algorithm), evaluate postfix.
- **Parenthesis matching**: Verify correct nesting of `()`, `{}`, `[]`.
- **Undo operations**: Maintain a history of states; pop the last state on undo.
- **Function call stack**: Manage activation records for recursive calls.
- **DFS traversal**: Implicitly via recursion or explicitly with a stack.

## Examples

### Example 1: Array-Based Stack

```cpp
#include <iostream>
#include <stdexcept>

template <typename T>
class ArrayStack {
private:
    T* data;
    int capacity;
    int topIndex;

    void resize() {
        int newCap = capacity * 2;
        T* newData = new T[newCap];
        for (int i = 0; i < capacity; ++i) newData[i] = data[i];
        delete[] data;
        data = newData;
        capacity = newCap;
    }

public:
    ArrayStack(int cap = 4) : capacity(cap), topIndex(-1) {
        data = new T[capacity];
    }

    ~ArrayStack() { delete[] data; }

    void push(const T& value) {
        if (topIndex == capacity - 1) resize();
        data[++topIndex] = value;
    }

    T pop() {
        if (isEmpty()) throw std::out_of_range("Stack underflow");
        return data[topIndex--];
    }

    T top() const {
        if (isEmpty()) throw std::out_of_range("Stack is empty");
        return data[topIndex];
    }

    bool isEmpty() const { return topIndex == -1; }

    int size() const { return topIndex + 1; }
};

int main() {
    ArrayStack<int> stack;
    stack.push(10);
    stack.push(20);
    stack.push(30);

    std::cout << "Top: " << stack.top() << "\n";
    std::cout << "Size: " << stack.size() << "\n";

    while (!stack.isEmpty()) {
        std::cout << "Pop: " << stack.pop() << "\n";
    }

    return 0;
}
```

**Output:**
```
Top: 30
Size: 3
Pop: 30
Pop: 20
Pop: 10
```

### Example 2: Linked-List-Based Stack

```cpp
#include <iostream>
#include <stdexcept>

template <typename T>
class LinkedStack {
private:
    struct Node {
        T data;
        Node* next;
        Node(const T& value) : data(value), next(nullptr) {}
    };
    Node* stackTop;
    int count;

public:
    LinkedStack() : stackTop(nullptr), count(0) {}

    ~LinkedStack() {
        while (stackTop) {
            Node* temp = stackTop;
            stackTop = stackTop->next;
            delete temp;
        }
    }

    void push(const T& value) {
        Node* newNode = new Node(value);
        newNode->next = stackTop;
        stackTop = newNode;
        ++count;
    }

    T pop() {
        if (isEmpty()) throw std::out_of_range("Stack underflow");
        Node* temp = stackTop;
        T value = temp->data;
        stackTop = stackTop->next;
        delete temp;
        --count;
        return value;
    }

    T top() const {
        if (isEmpty()) throw std::out_of_range("Stack is empty");
        return stackTop->data;
    }

    bool isEmpty() const { return count == 0; }
    int size() const { return count; }
};
```

### Example 3: Parenthesis Matching

```cpp
#include <iostream>
#include <string>
#include <stack>

bool isMatching(char open, char close) {
    return (open == '(' && close == ')') ||
           (open == '{' && close == '}') ||
           (open == '[' && close == ']');
}

bool isValidParentheses(const std::string& s) {
    std::stack<char> st;
    for (char c : s) {
        if (c == '(' || c == '{' || c == '[') {
            st.push(c);
        } else if (c == ')' || c == '}' || c == ']') {
            if (st.empty() || !isMatching(st.top(), c)) return false;
            st.pop();
        }
    }
    return st.empty();
}

int main() {
    std::string tests[] = {"(){}[]", "({[]})", "({[})", "((()))"};
    for (const auto& t : tests) {
        std::cout << t << " -> "
                  << (isValidParentheses(t) ? "valid" : "invalid") << "\n";
    }
    return 0;
}
```

**Output:**
```
(){}[] -> valid
({[]}) -> valid
({[}) -> invalid
((())) -> valid
```

### Example 4: Infix to Postfix (Shunting-Yard)

```cpp
#include <iostream>
#include <string>
#include <stack>
#include <cctype>

int precedence(char op) {
    if (op == '+' || op == '-') return 1;
    if (op == '*' || op == '/') return 2;
    return 0;
}

std::string infixToPostfix(const std::string& expr) {
    std::stack<char> st;
    std::string result;

    for (char c : expr) {
        if (std::isalnum(c)) {
            result += c;
        } else if (c == '(') {
            st.push(c);
        } else if (c == ')') {
            while (!st.empty() && st.top() != '(') {
                result += st.top(); st.pop();
            }
            st.pop(); // remove '('
        } else {
            while (!st.empty() && precedence(st.top()) >= precedence(c)) {
                result += st.top(); st.pop();
            }
            st.push(c);
        }
    }

    while (!st.empty()) {
        result += st.top(); st.pop();
    }
    return result;
}

int main() {
    std::string expr = "a+b*(c-d)/e";
    std::cout << "Infix:   " << expr << "\n";
    std::cout << "Postfix: " << infixToPostfix(expr) << "\n";
    return 0;
}
```

**Output:**
```
Infix:   a+b*(c-d)/e
Postfix: abcd-*e/+
```

### Example 5: Evaluate Postfix

```cpp
#include <iostream>
#include <string>
#include <stack>
#include <cctype>

int evaluatePostfix(const std::string& expr) {
    std::stack<int> st;
    for (char c : expr) {
        if (std::isdigit(c)) {
            st.push(c - '0');
        } else {
            int b = st.top(); st.pop();
            int a = st.top(); st.pop();
            switch (c) {
                case '+': st.push(a + b); break;
                case '-': st.push(a - b); break;
                case '*': st.push(a * b); break;
                case '/': st.push(a / b); break;
            }
        }
    }
    return st.top();
}

int main() {
    std::string expr = "23*54*+9-";
    // 2*3 + 5*4 - 9 = 6 + 20 - 9 = 17
    std::cout << "Postfix: " << expr << " = " << evaluatePostfix(expr) << "\n";
    return 0;
}
```

**Output:**
```
Postfix: 23*54*+9- = 17
```

## ðŸ’¡ Pro Tips

- **Use a stack to detect balanced brackets**: Push opening brackets; pop and match on closing. If the stack isn't empty at the end, or the wrong bracket is on top â€” invalid.
- **Postfix evaluation is stack's killer app**: Push operands; when you see an operator, pop two operands, apply, push result. One stack, no recursion, no parentheses needed.
- **`getMin()` in \(O(1)\) needs an auxiliary stack**: The main stack holds values; the min stack tracks the current minimum at each level. On pop, if the popped value equals the min stack's top, pop the min stack too.
- **Stack overflow = recursion too deep**: Every recursive call pushes a stack frame. Deep recursion (10k+ levels) overflows the call stack. Convert to explicit stack iteration for large inputs.

## One-Sentence Takeaways

- LIFO means the last pushed element is the first popped.
- Array stacks use less memory; linked stacks never overflow.
- Balanced parentheses are checked with a single stack.
- Postfix expression evaluation uses a single stack of operands.
- Shunting-yard converts infix to postfix via operator stack.
- Stacks model recursion, undo, and depth-first search.

## Concept Comparison Table

| Feature | Array-based Stack | Linked Stack |
|---------|------------------|--------------|
| Push | \(O(1)\) amortized | \(O(1)\) |
| Pop | \(O(1)\) | \(O(1)\) |
| Top | \(O(1)\) | \(O(1)\) |
| Memory | Contiguous (may overallocate) | Per-node allocation |
| Overflow | Resizes dynamically | Never (until heap full) |
| Cache locality | Excellent | Poor |

## Quick Reference: Stack Use Cases

| Problem | How Stack Is Used |
|---------|------------------|
| Balanced parentheses | Push opens, pop on close, check match |
| Postfix evaluation | Push operands, pop for operator, push result |
| Infix â†’ Postfix (Shunting-yard) | Operator precedence stack |
| DFS traversal | Explicit stack of nodes to visit |
| Undo (Ctrl+Z) | Stack of previous states |
| Call stack (function calls) | Return addresses + local variables |

## Cross-Application Matrix

| Application | Stack Type | Justification |
|-------------|-----------|---------------|
| Expression parser | Operator stack | Infix to postfix conversion |
| Undo system | Object stack | Push states, pop to undo |
| DFS traversal | Node stack | LIFO for backtracking |
| Back-button navigation | URL stack | Push pages, pop for back |
| Recursion emulation | Frame stack | Simulate call stack iteratively |

## Chapter Quiz

1. **What does LIFO stand for?**
   - a) Last In, First Out âœ“
   - b) Least In, Fastest Out
   - c) Linear Input, Fixed Output
   - d) Long In, First Out

2. **What is the time complexity of stack push?**
   - a) \(O(1)\) âœ“
   - b) \(O(\log n)\)
   - c) \(O(n)\)
   - d) \(O(n^2)\)

3. **Which algorithm converts infix to postfix?**
   - a) Floyd's algorithm
   - b) Shunting-yard âœ“
   - c) Dijkstra's algorithm
   - d) Kahn's algorithm

4. **Postfix `3 4 + 2 *` evaluates to:**
   - a) 10
   - b) 14 âœ“
   - c) 9
   - d) 7

5. **A MinStack with \(O(1)\) getMin() uses:**
   - a) Two stacks âœ“
   - b) Two queues
   - c) Hash table
   - d) Binary tree

**Answers:** 1-a, 2-a, 3-b, 4-b, 5-a

## Summary

- Stacks provide LIFO access with \( O(1) \) push, pop, and top operations.
- Array-based stacks may need resizing; linked stacks never overflow but allocate per node.
- Parenthesis matching uses a stack to track open brackets.
- The shunting-yard algorithm converts infix to postfix; postfix is evaluated with a single stack.
- Stacks are fundamental to parsing, recursion, and undo systems.

## Exercises

### Review Questions

1. What is the LIFO discipline and where does it arise naturally?
2. Compare array-based and linked-list-based stack implementations.
3. Why is postfix notation easier to evaluate than infix?

### Application Problems

4. Implement a function to reverse a string using a stack.
5. Write a program to evaluate a fully parenthesized infix expression containing +, -, *, /.
6. Implement a stack that supports `getMin()` in \( O(1) \) time alongside push and pop.

### Challenge Problem

7. Implement a `MinStack` that supports push, pop, top, and retrieving the minimum element in constant time. Use an auxiliary stack to track minima.
