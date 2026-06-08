# STACKS

## Overview
A stack is a linear data structure that follows the Last In, First Out (LIFO) principle. Elements are added and removed from the same end, called the top of the stack. This section covers stack implementations, operations, and common problems.

## Difficulty Breakdown

### Easy Problems
1. **Stack Implementation** - Array and linked list based
2. **Basic Operations** - Push, pop, peek, isEmpty
3. **Valid Parentheses** - Check balanced brackets (LeetCode 20)
4. **Reverse String** - Using stack (LeetCode 344)

### Medium Problems
5. **Min Stack** - Stack with O(1) min operation (LeetCode 155)
6. **Evaluate Reverse Polish Notation** - Expression evaluation (LeetCode 150)
7. **Next Greater Element** - Find next greater elements (LeetCode 496)
8. **Largest Rectangle in Histogram** - Stack based solution (LeetCode 84)

### Hard Problems
9. **Maximal Rectangle** - 2D histogram problem (LeetCode 85)
10. **Trapping Rain Water** - Stack solution (LeetCode 42)
11. **Longest Valid Parentheses** - Complex bracket matching (LeetCode 32)
12. **Basic Calculator** - Expression evaluation with precedence (LeetCode 224)

## Key Concepts

### Stack Operations
- **Push**: Add element to top of stack
- **Pop**: Remove and return top element
- **Peek/Top**: Return top element without removing
- **isEmpty**: Check if stack is empty
- **Size**: Get number of elements in stack

### Stack Implementations
- **Array-based**: Fixed size, fast access, may overflow
- **Linked List-based**: Dynamic size, no overflow, extra memory per element
- **Dynamic Array**: Resizable array, amortized O(1) operations

### Stack Applications
- **Function Call Stack**: Program execution
- **Expression Evaluation**: Infix to postfix conversion
- **Backtracking**: Maze solving, undo operations
- **Browser History**: Forward/backward navigation
- **Syntax Checking**: Balanced parentheses
- **Memory Management**: Recursion stack

## Time Complexity

| Operation | Array Stack | Linked Stack |
|-----------|-------------|--------------|
| Push | O(1) | O(1) |
| Pop | O(1) | O(1) |
| Peek | O(1) | O(1) |
| isEmpty | O(1) | O(1) |
| Size | O(1) | O(n) |

## Common Interview Questions

1. **Implement stack using arrays/linked lists**
2. **Design min stack with O(1) operations**
3. **Evaluate postfix expressions**
4. **Check balanced parentheses**
5. **Find next greater element**
6. **Implement stack using queues**
7. **Largest rectangle in histogram**
8. **Valid palindrome using stack**
9. **Sort stack using recursion**
10. **Stock span problem**

## Implementation Notes

- Always check for empty stack before pop/peek operations
- Consider overflow conditions for array-based stacks
- Use dynamic arrays for resizable stacks
- Implement proper exception handling
- Consider thread-safety for concurrent access

## Question Files
1. `1_stack_implementation.java` - Array and linked list implementations
2. `2_min_stack.java` - Stack with minimum element tracking (LeetCode 155)
3. `3_valid_parentheses.java` - Balanced brackets checker (LeetCode 20)
4. `4_reverse_polish_notation.java` - Expression evaluation (LeetCode 150)
5. `5_next_greater_element.java` - Find next greater elements (LeetCode 496)
6. `6_largest_rectangle_histogram.java` - Stack based solution (LeetCode 84)
7. `7_stack_using_queues.java` - Implement stack using queue(s)
8. `8_sort_stack.java` - Sort stack using recursion
9. `9_trapping_rain_water.java` - Stack solution (LeetCode 42)
10. `10_basic_calculator.java` - Expression evaluation (LeetCode 224)
11. `11_longest_valid_parentheses.java` - Complex bracket matching (LeetCode 32)
12. `12_maximal_rectangle.java` - 2D histogram problem (LeetCode 85)