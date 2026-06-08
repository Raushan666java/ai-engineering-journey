package stacks.questions;

/*
 * 2. MIN STACK (LeetCode 155)
 *
 * Problem Statement:
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
 * Implement the MinStack class:
 * - MinStack() initializes the stack object.
 * - void push(int val) pushes the element val onto the stack.
 * - void pop() removes the element on the top of the stack.
 * - int top() gets the top element of the stack.
 * - int getMin() retrieves the minimum element in the stack.
 *
 * Conceptual Understanding:
 * - Need to maintain minimum element with O(1) time complexity
 * - Use two stacks: main stack + minimum stack
 * - Minimum stack stores minimum values seen so far
 * - Push: Push to main stack, push min(current_min, new_val) to min stack
 * - Pop: Pop both stacks simultaneously
 * - Get min: Peek minimum stack
 * - Space efficient: Only stores minimum values, not all elements
 *
 * Time Complexity: O(1) for all operations
 * Space Complexity: O(n) worst case, O(1) amortized for minimum stack
 */

import java.util.Stack;

// Method 1: Two Stack Approach
class MinStack {
    private Stack<Integer> mainStack;
    private Stack<Integer> minStack;

    public MinStack() {
        mainStack = new Stack<>();
        minStack = new Stack<>();
    }

    public void push(int val) {
        mainStack.push(val);

        // Push to min stack: current minimum or new value
        if (minStack.isEmpty()) {
            minStack.push(val);
        } else {
            minStack.push(Math.min(minStack.peek(), val));
        }
    }

    public void pop() {
        if (mainStack.isEmpty()) {
            throw new RuntimeException("Stack is empty");
        }
        mainStack.pop();
        minStack.pop();
    }

    public int top() {
        if (mainStack.isEmpty()) {
            throw new RuntimeException("Stack is empty");
        }
        return mainStack.peek();
    }

    public int getMin() {
        if (minStack.isEmpty()) {
            throw new RuntimeException("Stack is empty");
        }
        return minStack.peek();
    }

    public boolean isEmpty() {
        return mainStack.isEmpty();
    }

    public int size() {
        return mainStack.size();
    }
}

// Method 2: Single Stack with Pairs (Value, Min)
class MinStackPairs {
    private Stack<int[]> stack; // Each element: [value, current_min]

    public MinStackPairs() {
        stack = new Stack<>();
    }

    public void push(int val) {
        if (stack.isEmpty()) {
            stack.push(new int[]{val, val}); // First element is both value and min
        } else {
            int currentMin = stack.peek()[1];
            stack.push(new int[]{val, Math.min(currentMin, val)});
        }
    }

    public void pop() {
        if (stack.isEmpty()) {
            throw new RuntimeException("Stack is empty");
        }
        stack.pop();
    }

    public int top() {
        if (stack.isEmpty()) {
            throw new RuntimeException("Stack is empty");
        }
        return stack.peek()[0];
    }

    public int getMin() {
        if (stack.isEmpty()) {
            throw new RuntimeException("Stack is empty");
        }
        return stack.peek()[1];
    }

    public boolean isEmpty() {
        return stack.isEmpty();
    }

    public int size() {
        return stack.size();
    }
}

// Method 3: Optimized Single Stack (Store differences)
class MinStackOptimized {
    private Stack<Long> stack;
    private long min;

    public MinStackOptimized() {
        stack = new Stack<>();
    }

    public void push(int val) {
        long value = (long) val;
        if (stack.isEmpty()) {
            stack.push(0L); // First element
            min = value;
        } else {
            stack.push(value - min); // Store difference
            if (value < min) {
                min = value; // Update min
            }
        }
    }

    public void pop() {
        if (stack.isEmpty()) {
            throw new RuntimeException("Stack is empty");
        }

        long pop = stack.pop();

        if (pop < 0) {
            // If pop < 0, it means min was updated, restore previous min
            min = min - pop;
        }
    }

    public int top() {
        if (stack.isEmpty()) {
            throw new RuntimeException("Stack is empty");
        }

        long top = stack.peek();

        if (top < 0) {
            // If top < 0, actual value is current min
            return (int) min;
        } else {
            // Actual value is min + top
            return (int) (min + top);
        }
    }

    public int getMin() {
        if (stack.isEmpty()) {
            throw new RuntimeException("Stack is empty");
        }
        return (int) min;
    }

    public boolean isEmpty() {
        return stack.isEmpty();
    }

    public int size() {
        return stack.size();
    }
}

// Method 4: Max Stack (similar concept for maximum)
class MaxStack {
    private Stack<Integer> mainStack;
    private Stack<Integer> maxStack;

    public MaxStack() {
        mainStack = new Stack<>();
        maxStack = new Stack<>();
    }

    public void push(int val) {
        mainStack.push(val);

        if (maxStack.isEmpty()) {
            maxStack.push(val);
        } else {
            maxStack.push(Math.max(maxStack.peek(), val));
        }
    }

    public void pop() {
        if (mainStack.isEmpty()) {
            throw new RuntimeException("Stack is empty");
        }
        mainStack.pop();
        maxStack.pop();
    }

    public int top() {
        if (mainStack.isEmpty()) {
            throw new RuntimeException("Stack is empty");
        }
        return mainStack.peek();
    }

    public int getMax() {
        if (maxStack.isEmpty()) {
            throw new RuntimeException("Stack is empty");
        }
        return maxStack.peek();
    }

    public boolean isEmpty() {
        return mainStack.isEmpty();
    }

    public int size() {
        return mainStack.size();
    }
}

// Method 5: Min-Max Stack (both min and max in O(1))
class MinMaxStack {
    private Stack<int[]> stack; // Each element: [value, current_min, current_max]

    public MinMaxStack() {
        stack = new Stack<>();
    }

    public void push(int val) {
        if (stack.isEmpty()) {
            stack.push(new int[]{val, val, val});
        } else {
            int[] prev = stack.peek();
            int currentMin = Math.min(prev[1], val);
            int currentMax = Math.max(prev[2], val);
            stack.push(new int[]{val, currentMin, currentMax});
        }
    }

    public void pop() {
        if (stack.isEmpty()) {
            throw new RuntimeException("Stack is empty");
        }
        stack.pop();
    }

    public int top() {
        if (stack.isEmpty()) {
            throw new RuntimeException("Stack is empty");
        }
        return stack.peek()[0];
    }

    public int getMin() {
        if (stack.isEmpty()) {
            throw new RuntimeException("Stack is empty");
        }
        return stack.peek()[1];
    }

    public int getMax() {
        if (stack.isEmpty()) {
            throw new RuntimeException("Stack is empty");
        }
        return stack.peek()[2];
    }

    public boolean isEmpty() {
        return stack.isEmpty();
    }

    public int size() {
        return stack.size();
    }
}

// Test class
public class MinStack2 {
    public static void main(String[] args) {
        System.out.println("=== MinStack (Two Stack Approach) ===");
        MinStack minStack = new MinStack();

        minStack.push(-2);
        minStack.push(0);
        minStack.push(-3);
        System.out.println("Min: " + minStack.getMin()); // -3
        minStack.pop();
        System.out.println("Top: " + minStack.top());    // 0
        System.out.println("Min: " + minStack.getMin()); // -2

        System.out.println("\n=== MinStack Pairs Approach ===");
        MinStackPairs minStackPairs = new MinStackPairs();

        minStackPairs.push(2);
        minStackPairs.push(0);
        minStackPairs.push(3);
        minStackPairs.push(0);
        System.out.println("Min: " + minStackPairs.getMin()); // 0
        minStackPairs.pop();
        System.out.println("Min: " + minStackPairs.getMin()); // 0
        minStackPairs.pop();
        System.out.println("Min: " + minStackPairs.getMin()); // 0
        minStackPairs.pop();
        System.out.println("Min: " + minStackPairs.getMin()); // 2

        System.out.println("\n=== Optimized MinStack ===");
        MinStackOptimized optMinStack = new MinStackOptimized();

        optMinStack.push(5);
        optMinStack.push(3);
        optMinStack.push(7);
        optMinStack.push(2);
        System.out.println("Min: " + optMinStack.getMin()); // 2
        System.out.println("Top: " + optMinStack.top());    // 2
        optMinStack.pop();
        System.out.println("Min: " + optMinStack.getMin()); // 3
        System.out.println("Top: " + optMinStack.top());    // 7

        System.out.println("\n=== MaxStack ===");
        MaxStack maxStack = new MaxStack();

        maxStack.push(5);
        maxStack.push(3);
        maxStack.push(7);
        maxStack.push(2);
        System.out.println("Max: " + maxStack.getMax()); // 7
        maxStack.pop();
        System.out.println("Max: " + maxStack.getMax()); // 7
        maxStack.pop();
        System.out.println("Max: " + maxStack.getMax()); // 5

        System.out.println("\n=== MinMaxStack ===");
        MinMaxStack minMaxStack = new MinMaxStack();

        minMaxStack.push(4);
        minMaxStack.push(2);
        minMaxStack.push(6);
        minMaxStack.push(1);
        minMaxStack.push(8);

        System.out.println("Min: " + minMaxStack.getMin()); // 1
        System.out.println("Max: " + minMaxStack.getMax()); // 8
        System.out.println("Top: " + minMaxStack.top());    // 8

        minMaxStack.pop();
        System.out.println("After pop - Min: " + minMaxStack.getMin() + ", Max: " + minMaxStack.getMax()); // 1, 6
    }
}