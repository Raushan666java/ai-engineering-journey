package stacks.questions;

/*
 * 1. STACK IMPLEMENTATION
 *
 * Problem Statement:
 * Implement a stack data structure using both array and linked list approaches.
 * The stack should support standard operations: push, pop, peek, isEmpty, and size.
 *
 * Conceptual Understanding:
 * - Stack follows LIFO (Last In, First Out) principle
 * - Array implementation: Fixed size, fast access, may overflow
 * - Linked list implementation: Dynamic size, no overflow, extra memory per element
 * - Both implementations provide O(1) time complexity for all operations
 * - Choose implementation based on requirements (fixed vs dynamic size)
 *
 * Time Complexity: O(1) for all operations
 * Space Complexity: O(n) for both implementations
 */

import java.util.EmptyStackException;

// Array-based Stack Implementation
class ArrayStack {
    private int[] arr;
    private int top;
    private int capacity;

    // Constructor with default capacity
    public ArrayStack() {
        this(10); // Default capacity
    }

    // Constructor with custom capacity
    public ArrayStack(int capacity) {
        if (capacity <= 0) {
            throw new IllegalArgumentException("Capacity must be positive");
        }
        this.capacity = capacity;
        this.arr = new int[capacity];
        this.top = -1; // Stack is empty
    }

    // Push operation - add element to top
    public void push(int x) {
        if (isFull()) {
            throw new StackOverflowError("Stack is full");
        }
        arr[++top] = x;
    }

    // Pop operation - remove and return top element
    public int pop() {
        if (isEmpty()) {
            throw new EmptyStackException();
        }
        return arr[top--];
    }

    // Peek operation - return top element without removing
    public int peek() {
        if (isEmpty()) {
            throw new EmptyStackException();
        }
        return arr[top];
    }

    // Check if stack is empty
    public boolean isEmpty() {
        return top == -1;
    }

    // Check if stack is full
    public boolean isFull() {
        return top == capacity - 1;
    }

    // Get current size of stack
    public int size() {
        return top + 1;
    }

    // Get capacity of stack
    public int capacity() {
        return capacity;
    }

    // Clear the stack
    public void clear() {
        top = -1;
    }

    // Convert stack to string for debugging
    @Override
    public String toString() {
        if (isEmpty()) {
            return "[]";
        }

        StringBuilder sb = new StringBuilder();
        sb.append("[");
        for (int i = 0; i <= top; i++) {
            sb.append(arr[i]);
            if (i < top) {
                sb.append(", ");
            }
        }
        sb.append("]");
        return sb.toString();
    }
}

// Linked List-based Stack Implementation
class LinkedStack {
    private Node top;
    private int size;

    // Node class for linked list
    private static class Node {
        int data;
        Node next;

        Node(int data) {
            this.data = data;
            this.next = null;
        }
    }

    // Constructor
    public LinkedStack() {
        this.top = null;
        this.size = 0;
    }

    // Push operation - add element to top
    public void push(int x) {
        Node newNode = new Node(x);
        newNode.next = top;
        top = newNode;
        size++;
    }

    // Pop operation - remove and return top element
    public int pop() {
        if (isEmpty()) {
            throw new EmptyStackException();
        }
        int data = top.data;
        top = top.next;
        size--;
        return data;
    }

    // Peek operation - return top element without removing
    public int peek() {
        if (isEmpty()) {
            throw new EmptyStackException();
        }
        return top.data;
    }

    // Check if stack is empty
    public boolean isEmpty() {
        return top == null;
    }

    // Get current size of stack
    public int size() {
        return size;
    }

    // Clear the stack
    public void clear() {
        top = null;
        size = 0;
    }

    // Convert stack to string for debugging
    @Override
    public String toString() {
        if (isEmpty()) {
            return "[]";
        }

        StringBuilder sb = new StringBuilder();
        sb.append("[");
        Node current = top;
        while (current != null) {
            sb.append(current.data);
            if (current.next != null) {
                sb.append(", ");
            }
            current = current.next;
        }
        sb.append("]");
        return sb.toString();
    }
}

// Dynamic Array Stack (Resizable)
class DynamicArrayStack {
    private int[] arr;
    private int top;
    private int capacity;

    // Constructor with initial capacity
    public DynamicArrayStack() {
        this(10);
    }

    public DynamicArrayStack(int initialCapacity) {
        if (initialCapacity <= 0) {
            throw new IllegalArgumentException("Initial capacity must be positive");
        }
        this.capacity = initialCapacity;
        this.arr = new int[capacity];
        this.top = -1;
    }

    // Resize array when needed
    private void resize(int newCapacity) {
        int[] newArr = new int[newCapacity];
        for (int i = 0; i <= top; i++) {
            newArr[i] = arr[i];
        }
        arr = newArr;
        capacity = newCapacity;
    }

    // Push with automatic resizing
    public void push(int x) {
        if (isFull()) {
            resize(capacity * 2); // Double the capacity
        }
        arr[++top] = x;
    }

    // Pop operation
    public int pop() {
        if (isEmpty()) {
            throw new EmptyStackException();
        }
        int data = arr[top--];

        // Shrink array if necessary (optional)
        if (size() > 0 && size() == capacity / 4) {
            resize(capacity / 2);
        }

        return data;
    }

    // Peek operation
    public int peek() {
        if (isEmpty()) {
            throw new EmptyStackException();
        }
        return arr[top];
    }

    // Check if empty
    public boolean isEmpty() {
        return top == -1;
    }

    // Check if full
    private boolean isFull() {
        return top == capacity - 1;
    }

    // Get size
    public int size() {
        return top + 1;
    }

    // Get capacity
    public int capacity() {
        return capacity;
    }

    // Clear stack
    public void clear() {
        top = -1;
    }

    @Override
    public String toString() {
        if (isEmpty()) {
            return "[]";
        }

        StringBuilder sb = new StringBuilder();
        sb.append("[");
        for (int i = 0; i <= top; i++) {
            sb.append(arr[i]);
            if (i < top) {
                sb.append(", ");
            }
        }
        sb.append("]");
        return sb.toString();
    }
}

// Generic Stack Implementation
class GenericStack<T> {
    private java.util.ArrayList<T> list;

    public GenericStack() {
        list = new java.util.ArrayList<>();
    }

    public void push(T item) {
        list.add(item);
    }

    public T pop() {
        if (isEmpty()) {
            throw new EmptyStackException();
        }
        return list.remove(list.size() - 1);
    }

    public T peek() {
        if (isEmpty()) {
            throw new EmptyStackException();
        }
        return list.get(list.size() - 1);
    }

    public boolean isEmpty() {
        return list.isEmpty();
    }

    public int size() {
        return list.size();
    }

    public void clear() {
        list.clear();
    }

    @Override
    public String toString() {
        return list.toString();
    }
}

// Test class
public class StackImplementation1 {
    public static void main(String[] args) {
        System.out.println("=== Array Stack Demo ===");
        ArrayStack arrayStack = new ArrayStack(5);

        // Test basic operations
        arrayStack.push(10);
        arrayStack.push(20);
        arrayStack.push(30);
        System.out.println("Stack: " + arrayStack);
        System.out.println("Size: " + arrayStack.size());
        System.out.println("Peek: " + arrayStack.peek());
        System.out.println("Pop: " + arrayStack.pop());
        System.out.println("Stack after pop: " + arrayStack);

        System.out.println("\n=== Linked Stack Demo ===");
        LinkedStack linkedStack = new LinkedStack();

        linkedStack.push(100);
        linkedStack.push(200);
        linkedStack.push(300);
        System.out.println("Stack: " + linkedStack);
        System.out.println("Size: " + linkedStack.size());
        System.out.println("Peek: " + linkedStack.peek());
        System.out.println("Pop: " + linkedStack.pop());
        System.out.println("Stack after pop: " + linkedStack);

        System.out.println("\n=== Dynamic Array Stack Demo ===");
        DynamicArrayStack dynamicStack = new DynamicArrayStack(2);

        for (int i = 1; i <= 10; i++) {
            dynamicStack.push(i);
            System.out.println("Pushed " + i + ", Size: " + dynamicStack.size() +
                             ", Capacity: " + dynamicStack.capacity());
        }
        System.out.println("Final stack: " + dynamicStack);

        // Pop some elements
        for (int i = 0; i < 5; i++) {
            System.out.println("Pop: " + dynamicStack.pop() +
                             ", Size: " + dynamicStack.size() +
                             ", Capacity: " + dynamicStack.capacity());
        }

        System.out.println("\n=== Generic Stack Demo ===");
        GenericStack<String> stringStack = new GenericStack<>();

        stringStack.push("Hello");
        stringStack.push("World");
        stringStack.push("Java");
        System.out.println("String stack: " + stringStack);
        System.out.println("Pop: " + stringStack.pop());
        System.out.println("Final stack: " + stringStack);
    }
}