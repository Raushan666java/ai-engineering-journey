/**
 * Day 9: Queue and Deque Implementations
 * 
 * Topics Covered:
 * - Queue interface (FIFO)
 * - PriorityQueue (heap-based priority queue)
 * - Deque interface (double-ended queue)
 * - ArrayDeque (resizable array deque)
 * - Queue vs Stack operations
 */

import java.util.*;

public class queue_deque_demo {
    public static void main(String[] args) {
        System.out.println("=== Queue and Deque Implementations ===\n");
        
        // ============ QUEUE INTERFACE ============
        
        // 1. Queue Basics (FIFO)
        System.out.println("1. Queue Basics (FIFO - First In First Out):");
        Queue<String> queue = new LinkedList<>();
        
        // add() vs offer() - both add elements
        queue.offer("First");   // Returns false if fails (doesn't throw exception)
        queue.offer("Second");
        queue.offer("Third");
        queue.add("Fourth");    // Throws exception if fails
        
        System.out.println("Queue: " + queue);
        System.out.println("Peek (front): " + queue.peek());  // View front without removing
        System.out.println("Poll (remove): " + queue.poll());  // Remove and return front
        System.out.println("After poll: " + queue);
        System.out.println();
        
        // 2. Queue Methods Comparison
        System.out.println("2. Queue Methods:");
        Queue<Integer> q = new LinkedList<>();
        q.offer(10);
        q.offer(20);
        q.offer(30);
        
        System.out.println("Queue: " + q);
        System.out.println("peek() - view front: " + q.peek());  // null if empty
        System.out.println("element() - view front: " + q.element());  // Exception if empty
        System.out.println("poll() - remove front: " + q.poll());  // null if empty
        System.out.println("After poll: " + q);
        // q.remove() would throw NoSuchElementException if empty
        System.out.println();
        
        // ============ PRIORITY QUEUE ============
        
        // 3. PriorityQueue (Min Heap by default)
        System.out.println("3. PriorityQueue (Min Heap):");
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        
        minHeap.offer(50);
        minHeap.offer(20);
        minHeap.offer(70);
        minHeap.offer(10);
        minHeap.offer(40);
        
        System.out.println("Min Heap (internal order): " + minHeap);
        System.out.println("Peek (min element): " + minHeap.peek());
        
        System.out.print("Poll order (ascending): ");
        while (!minHeap.isEmpty()) {
            System.out.print(minHeap.poll() + " ");
        }
        System.out.println("\n");
        
        // 4. PriorityQueue as Max Heap
        System.out.println("4. PriorityQueue (Max Heap):");
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
        
        maxHeap.offer(50);
        maxHeap.offer(20);
        maxHeap.offer(70);
        maxHeap.offer(10);
        maxHeap.offer(40);
        
        System.out.println("Max Heap (internal order): " + maxHeap);
        System.out.println("Peek (max element): " + maxHeap.peek());
        
        System.out.print("Poll order (descending): ");
        while (!maxHeap.isEmpty()) {
            System.out.print(maxHeap.poll() + " ");
        }
        System.out.println("\n");
        
        // 5. PriorityQueue with Custom Objects
        System.out.println("5. PriorityQueue with Custom Comparator:");
        
        class Task {
            String name;
            int priority;
            
            Task(String name, int priority) {
                this.name = name;
                this.priority = priority;
            }
            
            @Override
            public String toString() {
                return name + "(P" + priority + ")";
            }
        }
        
        // Lower priority number = higher priority
        PriorityQueue<Task> taskQueue = new PriorityQueue<>((a, b) -> a.priority - b.priority);
        
        taskQueue.offer(new Task("Low priority task", 5));
        taskQueue.offer(new Task("High priority task", 1));
        taskQueue.offer(new Task("Medium priority task", 3));
        
        System.out.println("Task queue: " + taskQueue);
        System.out.print("Execution order: ");
        while (!taskQueue.isEmpty()) {
            System.out.print(taskQueue.poll() + " ");
        }
        System.out.println("\n");
        
        // 6. Top K Elements Example
        System.out.println("6. Find Top 3 Elements:");
        int[] numbers = {15, 20, 5, 30, 10, 25, 8};
        
        PriorityQueue<Integer> top3 = new PriorityQueue<>(3);
        
        for (int num : numbers) {
            if (top3.size() < 3) {
                top3.offer(num);
            } else if (num > top3.peek()) {
                top3.poll();
                top3.offer(num);
            }
        }
        
        System.out.println("Array: " + Arrays.toString(numbers));
        System.out.println("Top 3 elements: " + top3);
        System.out.println();
        
        // ============ DEQUE INTERFACE ============
        
        // 7. ArrayDeque Basics
        System.out.println("7. ArrayDeque (Double-Ended Queue):");
        Deque<String> deque = new ArrayDeque<>();
        
        // Add to both ends
        deque.offerFirst("Middle");
        deque.offerFirst("First");   // Add to front
        deque.offerLast("Last");      // Add to back
        
        System.out.println("Deque: " + deque);
        System.out.println("First element: " + deque.peekFirst());
        System.out.println("Last element: " + deque.peekLast());
        
        deque.pollFirst();  // Remove from front
        deque.pollLast();   // Remove from back
        System.out.println("After removing both ends: " + deque);
        System.out.println();
        
        // 8. Deque as Stack (LIFO)
        System.out.println("8. Deque as Stack (LIFO - Last In First Out):");
        Deque<Integer> stack = new ArrayDeque<>();
        
        stack.push(1);  // Same as addFirst()
        stack.push(2);
        stack.push(3);
        stack.push(4);
        
        System.out.println("Stack: " + stack);
        System.out.println("Peek top: " + stack.peek());
        System.out.println("Pop: " + stack.pop());  // Same as removeFirst()
        System.out.println("After pop: " + stack);
        System.out.println();
        
        // 9. Deque as Queue (FIFO)
        System.out.println("9. Deque as Queue (FIFO):");
        Deque<String> fifoQueue = new ArrayDeque<>();
        
        fifoQueue.offer("First");   // Add to back
        fifoQueue.offer("Second");
        fifoQueue.offer("Third");
        
        System.out.println("Queue: " + fifoQueue);
        System.out.println("Poll: " + fifoQueue.poll());  // Remove from front
        System.out.println("After poll: " + fifoQueue);
        System.out.println();
        
        // 10. ArrayDeque vs LinkedList Performance
        System.out.println("10. Performance Comparison:");
        performanceComparison();
        System.out.println();
        
        // 11. Practical Example: Sliding Window Maximum
        System.out.println("11. Sliding Window Maximum (Deque):");
        int[] arr = {1, 3, -1, -3, 5, 3, 6, 7};
        int k = 3;
        int[] result = slidingWindowMax(arr, k);
        
        System.out.println("Array: " + Arrays.toString(arr));
        System.out.println("Window size: " + k);
        System.out.println("Max in each window: " + Arrays.toString(result));
        System.out.println();
        
        // 12. Stack Operations Example
        System.out.println("12. Valid Parentheses (Stack):");
        String[] expressions = {"()", "()[]{}", "(]", "([)]", "{[]}"};
        
        for (String expr : expressions) {
            System.out.println(expr + " is " + (isValidParentheses(expr) ? "valid" : "invalid"));
        }
        System.out.println();
        
        // 13. Queue for BFS Example
        System.out.println("13. Level Order Traversal (Queue):");
        // Simple tree structure simulation
        Queue<String> bfsQueue = new LinkedList<>();
        bfsQueue.offer("Root");
        
        System.out.println("BFS Order:");
        while (!bfsQueue.isEmpty()) {
            int levelSize = bfsQueue.size();
            System.out.print("Level: ");
            
            for (int i = 0; i < levelSize; i++) {
                String node = bfsQueue.poll();
                System.out.print(node + " ");
                
                // Simulate adding children
                if (node.equals("Root")) {
                    bfsQueue.offer("Left");
                    bfsQueue.offer("Right");
                } else if (node.equals("Left")) {
                    bfsQueue.offer("LL");
                    bfsQueue.offer("LR");
                }
            }
            System.out.println();
        }
        
        System.out.println("\n=== Queue and Deque Demo Complete ===");
    }
    
    // Performance comparison
    public static void performanceComparison() {
        int size = 100000;
        
        // ArrayDeque performance
        Deque<Integer> arrayDeque = new ArrayDeque<>();
        long startTime = System.nanoTime();
        for (int i = 0; i < size; i++) {
            arrayDeque.offerLast(i);
        }
        long endTime = System.nanoTime();
        System.out.println("ArrayDeque add: " + (endTime - startTime) / 1000000 + " ms");
        
        // LinkedList performance
        Deque<Integer> linkedList = new LinkedList<>();
        startTime = System.nanoTime();
        for (int i = 0; i < size; i++) {
            linkedList.offerLast(i);
        }
        endTime = System.nanoTime();
        System.out.println("LinkedList add: " + (endTime - startTime) / 1000000 + " ms");
        
        System.out.println("ArrayDeque is generally faster and more memory efficient");
    }
    
    // Sliding window maximum using deque
    public static int[] slidingWindowMax(int[] nums, int k) {
        if (nums == null || nums.length == 0) return new int[0];
        
        int[] result = new int[nums.length - k + 1];
        Deque<Integer> deque = new ArrayDeque<>();  // Stores indices
        
        for (int i = 0; i < nums.length; i++) {
            // Remove indices outside window
            while (!deque.isEmpty() && deque.peekFirst() < i - k + 1) {
                deque.pollFirst();
            }
            
            // Remove smaller elements from back
            while (!deque.isEmpty() && nums[deque.peekLast()] < nums[i]) {
                deque.pollLast();
            }
            
            deque.offerLast(i);
            
            // Add to result
            if (i >= k - 1) {
                result[i - k + 1] = nums[deque.peekFirst()];
            }
        }
        
        return result;
    }
    
    // Valid parentheses using stack
    public static boolean isValidParentheses(String s) {
        Deque<Character> stack = new ArrayDeque<>();
        
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
}

/**
 * Key Concepts:
 * 
 * QUEUE INTERFACE (FIFO):
 * - offer() vs add(): offer returns false if fails, add throws exception
 * - poll() vs remove(): poll returns null if empty, remove throws exception
 * - peek() vs element(): peek returns null if empty, element throws exception
 * - Use offer/poll/peek for safer operations
 * 
 * PRIORITY QUEUE:
 * - Heap-based implementation (min heap by default)
 * - Elements ordered by natural ordering or comparator
 * - NOT thread-safe
 * - O(log n) offer and poll, O(1) peek
 * - No null elements allowed
 * - Useful for: Top K problems, task scheduling, Dijkstra's algorithm
 * 
 * DEQUE INTERFACE:
 * - Double-ended queue (add/remove from both ends)
 * - Can be used as Stack (LIFO) or Queue (FIFO)
 * - ArrayDeque is preferred over Stack class (legacy)
 * - ArrayDeque faster than LinkedList for most operations
 * - Useful for: Sliding window, palindrome check, undo/redo
 * 
 * ARRAYDEQUE:
 * - Resizable array implementation
 * - Faster than LinkedList (better cache locality)
 * - No capacity restrictions
 * - Not thread-safe
 * - Null elements not allowed
 * 
 * Time Complexities:
 * 
 * Queue (LinkedList):
 * - offer/poll: O(1)
 * - peek: O(1)
 * 
 * PriorityQueue:
 * - offer: O(log n)
 * - poll: O(log n)
 * - peek: O(1)
 * - remove(Object): O(n)
 * 
 * ArrayDeque:
 * - offerFirst/offerLast: O(1) amortized
 * - pollFirst/pollLast: O(1)
 * - peekFirst/peekLast: O(1)
 * 
 * Interview Tips:
 * - Use ArrayDeque instead of Stack for LIFO operations
 * - PriorityQueue for heap operations, top K problems
 * - Deque perfect for sliding window maximum
 * - Queue for BFS, level-order traversal
 * - Stack (Deque) for DFS, valid parentheses, expression evaluation
 */
