package queues.questions;

/*
 * 1. IMPLEMENT QUEUE USING STACKS (LeetCode 232)
 *
 * Problem Statement:
 * Implement a first in first out (FIFO) queue using only two stacks.
 * The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).
 *
 * Implement the MyQueue class:
 * - void push(int x) Pushes element x to the back of the queue.
 * - int pop() Removes the element from the front of the queue and returns it.
 * - int peek() Returns the element at the front of the queue.
 * - boolean empty() Returns true if the queue is empty.
 *
 * Conceptual Understanding:
 * - Use two stacks: one for input (push), one for output (pop/peek)
 * - When popping/peeking, if output stack empty, transfer all from input to output
 * - This reverses the order, making oldest element accessible
 *
 * Time Complexity: Amortized O(1) for all operations
 * Space Complexity: O(n)
 */

import java.util.Stack;

class ImplementQueueUsingStacks1 {

    private Stack<Integer> inputStack;
    private Stack<Integer> outputStack;

    public ImplementQueueUsingStacks1() {
        inputStack = new Stack<>();
        outputStack = new Stack<>();
    }

    // Push element to the back of queue
    public void push(int x) {
        inputStack.push(x);
    }

    // Remove the element from the front of queue and return it
    public int pop() {
        // Transfer elements if output stack is empty
        if (outputStack.isEmpty()) {
            transferElements();
        }

        if (outputStack.isEmpty()) {
            throw new RuntimeException("Queue is empty");
        }

        return outputStack.pop();
    }

    // Get the front element
    public int peek() {
        // Transfer elements if output stack is empty
        if (outputStack.isEmpty()) {
            transferElements();
        }

        if (outputStack.isEmpty()) {
            throw new RuntimeException("Queue is empty");
        }

        return outputStack.peek();
    }

    // Return whether the queue is empty
    public boolean empty() {
        return inputStack.isEmpty() && outputStack.isEmpty();
    }

    // Helper method to transfer elements from input to output stack
    private void transferElements() {
        while (!inputStack.isEmpty()) {
            outputStack.push(inputStack.pop());
        }
    }

    // Alternative implementation with amortized analysis
    static class MyQueue {
        private Stack<Integer> s1 = new Stack<>();
        private Stack<Integer> s2 = new Stack<>();

        public void push(int x) {
            s1.push(x);
        }

        public int pop() {
            if (s2.isEmpty()) {
                while (!s1.isEmpty()) {
                    s2.push(s1.pop());
                }
            }
            return s2.pop();
        }

        public int peek() {
            if (s2.isEmpty()) {
                while (!s1.isEmpty()) {
                    s2.push(s1.pop());
                }
            }
            return s2.peek();
        }

        public boolean empty() {
            return s1.isEmpty() && s2.isEmpty();
        }
    }

    // Test cases
    public static void main(String[] args) {
        ImplementQueueUsingStacks1 queue = new ImplementQueueUsingStacks1();

        // Test basic operations
        queue.push(1);
        queue.push(2);
        System.out.println("Peek: " + queue.peek());    // Expected: 1
        System.out.println("Pop: " + queue.pop());      // Expected: 1
        System.out.println("Empty: " + queue.empty());  // Expected: false
        System.out.println("Pop: " + queue.pop());      // Expected: 2
        System.out.println("Empty: " + queue.empty());  // Expected: true

        // Test with MyQueue class
        MyQueue q = new MyQueue();
        q.push(1);
        q.push(2);
        q.push(3);
        System.out.println("MyQueue Pop: " + q.pop());  // Expected: 1
        System.out.println("MyQueue Peek: " + q.peek()); // Expected: 2
    }
}