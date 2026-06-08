# 🚀 DSA Quick Mastery Guide - Part 2: Linked Lists, Stacks & Queues

# 📚 TOPIC 2: LINKED LISTS, STACKS & QUEUES

## Core Concepts

### Linked List Fundamentals
```java
class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

// Time Complexities
// Access: O(n)
// Search: O(n)
// Insert/Delete at beginning: O(1)
// Insert/Delete at end: O(n) [O(1) with tail pointer]
```

### Key Linked List Techniques

#### 1. Two Pointer Technique
```java
// Detect cycle
public boolean hasCycle(ListNode head) {
    if (head == null) return false;
    ListNode slow = head, fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) return true;
    }
    return false;
}

// Find middle node
public ListNode middleNode(ListNode head) {
    ListNode slow = head, fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}
```

#### 2. Dummy Node Technique
```java
// Remove nth node from end
public ListNode removeNthFromEnd(ListNode head, int n) {
    ListNode dummy = new ListNode(0);
    dummy.next = head;
    ListNode first = dummy, second = dummy;
    
    // Advance first pointer by n+1 steps
    for (int i = 0; i <= n; i++) {
        first = first.next;
    }
    
    // Move both pointers until first reaches end
    while (first != null) {
        first = first.next;
        second = second.next;
    }
    
    // Remove the nth node
    second.next = second.next.next;
    return dummy.next;
}
```

### Stack & Queue Fundamentals
```java
// Stack implementation
Stack<Integer> stack = new Stack<>();
stack.push(1);
int top = stack.peek();
int popped = stack.pop();
boolean empty = stack.isEmpty();

// Queue implementation
Queue<Integer> queue = new LinkedList<>();
queue.offer(1);
int front = queue.peek();
int removed = queue.poll();
boolean empty = queue.isEmpty();

// Deque (double-ended queue)
Deque<Integer> deque = new ArrayDeque<>();
deque.offerFirst(1);
deque.offerLast(2);
int first = deque.peekFirst();
int last = deque.peekLast();
```

## 🎯 Problem Patterns & Solutions

### Pattern 1: Linked List Reversal
```java
// Reverse Linked List
public ListNode reverseList(ListNode head) {
    ListNode prev = null, curr = head;
    while (curr != null) {
        ListNode next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

// Reverse Nodes in k-Group
public ListNode reverseKGroup(ListNode head, int k) {
    ListNode dummy = new ListNode(0);
    dummy.next = head;
    ListNode prevGroupEnd = dummy;
    
    while (head != null) {
        // Check if there are k nodes left
        ListNode groupEnd = prevGroupEnd;
        for (int i = 0; i < k; i++) {
            groupEnd = groupEnd.next;
            if (groupEnd == null) return dummy.next;
        }
        
        // Reverse k nodes
        ListNode groupStart = prevGroupEnd.next;
        ListNode next = groupEnd.next;
        groupEnd.next = null; // Disconnect group
        
        prevGroupEnd.next = reverseList(groupStart);
        groupStart.next = next; // Connect with rest of list
        
        prevGroupEnd = groupStart;
        head = next;
    }
    
    return dummy.next;
}
```

### Pattern 2: Stack Applications
```java
// Valid Parentheses
public boolean isValid(String s) {
    Stack<Character> stack = new Stack<>();
    for (char c : s.toCharArray()) {
        if (c == '(' || c == '{' || c == '[') {
            stack.push(c);
        } else {
            if (stack.isEmpty()) return false;
            char top = stack.pop();
            if ((c == ')' && top != '(') || 
                (c == '}' && top != '{') || 
                (c == ']' && top != '[')) {
                return false;
            }
        }
    }
    return stack.isEmpty();
}

// Next Greater Element
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

### Pattern 3: Queue Applications
```java
// BFS using Queue
public void bfs(Node root) {
    if (root == null) return;
    Queue<Node> queue = new LinkedList<>();
    queue.offer(root);
    
    while (!queue.isEmpty()) {
        int levelSize = queue.size();
        for (int i = 0; i < levelSize; i++) {
            Node node = queue.poll();
            System.out.print(node.val + " ");
            
            if (node.left != null) queue.offer(node.left);
            if (node.right != null) queue.offer(node.right);
        }
        System.out.println(); // New level
    }
}

// Sliding Window Maximum using Deque
public int[] maxSlidingWindow(int[] nums, int k) {
    if (nums == null || nums.length == 0) return new int[0];
    int n = nums.length;
    int[] result = new int[n - k + 1];
    Deque<Integer> deque = new ArrayDeque<>(); // Stores indices
    
    for (int i = 0; i < n; i++) {
        // Remove elements outside current window
        while (!deque.isEmpty() && deque.peekFirst() < i - k + 1) {
            deque.pollFirst();
        }
        
        // Remove smaller elements
        while (!deque.isEmpty() && nums[deque.peekLast()] < nums[i]) {
            deque.pollLast();
        }
        
        deque.offerLast(i);
        
        // Add to result if window has k elements
        if (i >= k - 1) {
            result[i - k + 1] = nums[deque.peekFirst()];
        }
    }
    
    return result;
}
```

## 🔄 Quick Revision Questions

### Easy Level
1. Reverse a linked list
2. Detect cycle in linked list
3. Implement stack using array
4. Valid parentheses
5. Implement queue using stacks

### Medium Level
1. Add two numbers represented as linked lists
2. LRU Cache implementation
3. Next greater element
4. Flatten a multilevel doubly linked list
5. Design a min stack

### Hard Level
1. Merge k sorted lists
2. Reverse nodes in k-group
3. Sliding window maximum
4. LFU Cache implementation
5. Basic calculator (using stack)