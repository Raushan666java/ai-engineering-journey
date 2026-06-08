# 🔗 Linked Lists: Practice Problems & Solutions

## Core Concepts Review
A linked list is a linear data structure where elements are stored in nodes, and each node points to the next node in the sequence.

**Types of Linked Lists:**
- Singly Linked List: Each node points to the next node
- Doubly Linked List: Each node points to both next and previous nodes
- Circular Linked List: Last node points back to the first node

**Time Complexities:**
- Access: O(n)
- Search: O(n)
- Insertion/Deletion at beginning: O(1)
- Insertion/Deletion at end: O(n) for singly linked list, O(1) for doubly linked list with tail pointer

## Basic Node Structure
```java
// Singly Linked List Node
class ListNode {
    int val;
    ListNode next;
    
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

// Doubly Linked List Node
class DoublyListNode {
    int val;
    DoublyListNode next;
    DoublyListNode prev;
    
    DoublyListNode() {}
    DoublyListNode(int val) { this.val = val; }
    DoublyListNode(int val, DoublyListNode next, DoublyListNode prev) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}
```

## Problem 1: Reverse a Linked List
**Problem:** Reverse a singly linked list.

**Example:**
```
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
```

**Solution (Iterative):**
```java
public ListNode reverseList(ListNode head) {
    ListNode prev = null;
    ListNode current = head;
    
    while (current != null) {
        ListNode nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }
    
    return prev;
}
```

**Solution (Recursive):**
```java
public ListNode reverseListRecursive(ListNode head) {
    if (head == null || head.next == null) {
        return head;
    }
    
    ListNode newHead = reverseListRecursive(head.next);
    head.next.next = head;
    head.next = null;
    
    return newHead;
}
```

**Time Complexity:** O(n)  
**Space Complexity:** O(1) for iterative, O(n) for recursive due to call stack

## Problem 2: Detect Cycle in a Linked List
**Problem:** Given a linked list, determine if it has a cycle in it.

**Example:**
```
Input: head = [3,2,0,-4], pos = 1 (pos indicates the index where the tail connects)
Output: true (there is a cycle)
```

**Solution (Floyd's Cycle-Finding Algorithm):**
```java
public boolean hasCycle(ListNode head) {
    if (head == null || head.next == null) {
        return false;
    }
    
    ListNode slow = head;
    ListNode fast = head;
    
    while (fast != null && fast.next != null) {
        slow = slow.next;          // Move one step
        fast = fast.next.next;     // Move two steps
        
        if (slow == fast) {        // If they meet, there's a cycle
            return true;
        }
    }
    
    return false;
}
```

**Time Complexity:** O(n)  
**Space Complexity:** O(1)

## Problem 3: Find the Middle of a Linked List
**Problem:** Find the middle node of a linked list. If there are two middle nodes, return the second middle node.

**Example:**
```
Input: [1,2,3,4,5]
Output: 3 (the middle node is 3)

Input: [1,2,3,4,5,6]
Output: 4 (the second middle node is 4)
```

**Solution (Fast and Slow Pointers):**
```java
public ListNode middleNode(ListNode head) {
    ListNode slow = head;
    ListNode fast = head;
    
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return slow;
}
```

**Time Complexity:** O(n)  
**Space Complexity:** O(1)

## Problem 4: Remove Nth Node From End of List
**Problem:** Remove the nth node from the end of a linked list and return its head.

**Example:**
```
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
```

**Solution (Two-Pass):**
```java
public ListNode removeNthFromEnd(ListNode head, int n) {
    // Create a dummy node to handle edge cases
    ListNode dummy = new ListNode(0);
    dummy.next = head;
    
    // First pass to find the length
    int length = 0;
    ListNode current = head;
    while (current != null) {
        length++;
        current = current.next;
    }
    
    // Second pass to remove the nth node
    current = dummy;
    for (int i = 0; i < length - n; i++) {
        current = current.next;
    }
    current.next = current.next.next;
    
    return dummy.next;
}
```

**Solution (One-Pass with Two Pointers):**
```java
public ListNode removeNthFromEnd(ListNode head, int n) {
    ListNode dummy = new ListNode(0);
    dummy.next = head;
    
    ListNode first = dummy;
    ListNode second = dummy;
    
    // Advance first pointer by n+1 steps
    for (int i = 0; i <= n; i++) {
        first = first.next;
    }
    
    // Move both pointers until first reaches the end
    while (first != null) {
        first = first.next;
        second = second.next;
    }
    
    // Remove the nth node
    second.next = second.next.next;
    
    return dummy.next;
}
```

**Time Complexity:** O(n)  
**Space Complexity:** O(1)

## Problem 5: Merge Two Sorted Lists
**Problem:** Merge two sorted linked lists and return it as a new sorted list.

**Example:**
```
Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]
```

**Solution (Iterative):**
```java
public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
    // Create a dummy head
    ListNode dummy = new ListNode(0);
    ListNode current = dummy;
    
    while (l1 != null && l2 != null) {
        if (l1.val <= l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    
    // Attach remaining nodes
    current.next = (l1 != null) ? l1 : l2;
    
    return dummy.next;
}
```

**Solution (Recursive):**
```java
public ListNode mergeTwoListsRecursive(ListNode l1, ListNode l2) {
    if (l1 == null) return l2;
    if (l2 == null) return l1;
    
    if (l1.val <= l2.val) {
        l1.next = mergeTwoListsRecursive(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoListsRecursive(l1, l2.next);
        return l2;
    }
}
```

**Time Complexity:** O(n + m) where n and m are the lengths of the lists  
**Space Complexity:** O(1) for iterative, O(n + m) for recursive due to call stack

## Problem 6: Palindrome Linked List
**Problem:** Determine if a linked list is a palindrome.

**Example:**
```
Input: [1,2,2,1]
Output: true
```

**Solution:**
```java
public boolean isPalindrome(ListNode head) {
    if (head == null || head.next == null) {
        return true;
    }
    
    // Find the middle of the linked list
    ListNode slow = head;
    ListNode fast = head;
    
    while (fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // Reverse the second half
    ListNode secondHalf = reverseList(slow.next);
    
    // Compare the first and second half
    ListNode p1 = head;
    ListNode p2 = secondHalf;
    
    boolean result = true;
    while (result && p2 != null) {
        if (p1.val != p2.val) {
            result = false;
        }
        p1 = p1.next;
        p2 = p2.next;
    }
    
    // Restore the list (optional)
    slow.next = reverseList(secondHalf);
    
    return result;
}

private ListNode reverseList(ListNode head) {
    ListNode prev = null;
    ListNode current = head;
    
    while (current != null) {
        ListNode nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }
    
    return prev;
}
```

**Time Complexity:** O(n)  
**Space Complexity:** O(1)

## Problem 7: Intersection of Two Linked Lists
**Problem:** Find the node at which the intersection of two singly linked lists begins.

**Example:**
```
Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
Output: Reference to the node with value 8
```

**Solution:**
```java
public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
    if (headA == null || headB == null) {
        return null;
    }
    
    ListNode ptrA = headA;
    ListNode ptrB = headB;
    
    // If the lists have different lengths, this approach will align them
    while (ptrA != ptrB) {
        ptrA = (ptrA == null) ? headB : ptrA.next;
        ptrB = (ptrB == null) ? headA : ptrB.next;
    }
    
    return ptrA; // Either the intersection point or null
}
```

**Time Complexity:** O(n + m) where n and m are the lengths of the lists  
**Space Complexity:** O(1)

## Problem 8: Add Two Numbers
**Problem:** Add two numbers represented by linked lists. The digits are stored in reverse order, and each node contains a single digit.

**Example:**
```
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807
```

**Solution:**
```java
public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    ListNode dummy = new ListNode(0);
    ListNode current = dummy;
    int carry = 0;
    
    while (l1 != null || l2 != null) {
        int x = (l1 != null) ? l1.val : 0;
        int y = (l2 != null) ? l2.val : 0;
        
        int sum = x + y + carry;
        carry = sum / 10;
        
        current.next = new ListNode(sum % 10);
        current = current.next;
        
        if (l1 != null) l1 = l1.next;
        if (l2 != null) l2 = l2.next;
    }
    
    if (carry > 0) {
        current.next = new ListNode(carry);
    }
    
    return dummy.next;
}
```

**Time Complexity:** O(max(n, m)) where n and m are the lengths of the lists  
**Space Complexity:** O(max(n, m)) for the result list

## Problem 9: Remove Duplicates from Sorted List
**Problem:** Given a sorted linked list, delete all duplicates such that each element appears only once.

**Example:**
```
Input: [1,1,2,3,3]
Output: [1,2,3]
```

**Solution:**
```java
public ListNode deleteDuplicates(ListNode head) {
    ListNode current = head;
    
    while (current != null && current.next != null) {
        if (current.val == current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    
    return head;
}
```

**Time Complexity:** O(n)  
**Space Complexity:** O(1)

## Problem 10: Linked List Cycle II
**Problem:** Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

**Example:**
```
Input: head = [3,2,0,-4], pos = 1
Output: Node with value 2 (the node where the cycle begins)
```

**Solution (Floyd's Cycle-Finding Algorithm):**
```java
public ListNode detectCycle(ListNode head) {
    if (head == null || head.next == null) {
        return null;
    }
    
    // Phase 1: Detect if there's a cycle
    ListNode slow = head;
    ListNode fast = head;
    boolean hasCycle = false;
    
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow == fast) {
            hasCycle = true;
            break;
        }
    }
    
    if (!hasCycle) {
        return null;
    }
    
    // Phase 2: Find the start of the cycle
    slow = head;
    while (slow != fast) {
        slow = slow.next;
        fast = fast.next;
    }
    
    return slow;
}
```

**Time Complexity:** O(n)  
**Space Complexity:** O(1)

## Problem 11: Reverse Nodes in k-Group
**Problem:** Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

**Example:**
```
Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]
```

**Solution:**
```java
public ListNode reverseKGroup(ListNode head, int k) {
    ListNode dummy = new ListNode(0);
    dummy.next = head;
    
    ListNode prevGroupEnd = dummy;
    
    while (head != null) {
        // Check if there are k nodes left
        ListNode groupEnd = prevGroupEnd;
        for (int i = 0; i < k; i++) {
            groupEnd = groupEnd.next;
            if (groupEnd == null) {
                return dummy.next; // Less than k nodes left
            }
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

private ListNode reverseList(ListNode head) {
    ListNode prev = null;
    ListNode current = head;
    
    while (current != null) {
        ListNode nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }
    
    return prev;
}
```

**Time Complexity:** O(n)  
**Space Complexity:** O(1)

## Problem 12: LRU Cache
**Problem:** Design and implement a data structure for Least Recently Used (LRU) cache. It should support get and put operations.

**Example:**
```
LRUCache cache = new LRUCache(2); // capacity = 2
cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4
```

**Solution (Using Doubly Linked List and HashMap):**
```java
class LRUCache {
    private class Node {
        int key;
        int value;
        Node prev;
        Node next;
        
        Node(int key, int value) {
            this.key = key;
            this.value = value;
        }
    }
    
    private int capacity;
    private Map<Integer, Node> cache;
    private Node head; // Most recently used
    private Node tail; // Least recently used
    
    public LRUCache(int capacity) {
        this.capacity = capacity;
        this.cache = new HashMap<>();
        
        // Initialize dummy head and tail nodes
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);
        head.next = tail;
        tail.prev = head;
    }
    
    public int get(int key) {
        if (!cache.containsKey(key)) {
            return -1;
        }
        
        // Move the accessed node to the front (most recently used)
        Node node = cache.get(key);
        moveToHead(node);
        
        return node.value;
    }
    
    public void put(int key, int value) {
        if (cache.containsKey(key)) {
            // Update existing node
            Node node = cache.get(key);
            node.value = value;
            moveToHead(node);
        } else {
            // Add new node
            Node newNode = new Node(key, value);
            cache.put(key, newNode);
            addToHead(newNode);
            
            // Check capacity
            if (cache.size() > capacity) {
                // Remove least recently used node (tail)
                Node lru = removeTail();
                cache.remove(lru.key);
            }
        }
    }
    
    private void addToHead(Node node) {
        node.next = head.next;
        node.prev = head;
        head.next.prev = node;
        head.next = node;
    }
    
    private void removeNode(Node node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
    
    private void moveToHead(Node node) {
        removeNode(node);
        addToHead(node);
    }
    
    private Node removeTail() {
        Node lru = tail.prev;
        removeNode(lru);
        return lru;
    }
}
```

**Time Complexity:** O(1) for both get and put operations  
**Space Complexity:** O(capacity)

## Linked List Techniques Summary

### 1. Two Pointer Technique
Used for problems like finding the middle node, detecting cycles, or finding the nth node from the end.
```java
ListNode slow = head;
ListNode fast = head;

// For finding middle
while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
}
// slow is now at the middle
```

### 2. Dummy Node Technique
Used to simplify operations on the head of the list.
```java
ListNode dummy = new ListNode(0);
dummy.next = head;
// Perform operations...
return dummy.next; // New head
```

### 3. Reverse Linked List
A fundamental operation for many linked list problems.
```java
ListNode prev = null;
ListNode current = head;
while (current != null) {
    ListNode nextTemp = current.next;
    current.next = prev;
    prev = current;
    current = nextTemp;
}
// prev is the new head
```

### 4. Floyd's Cycle-Finding Algorithm
Used to detect cycles in a linked list.
```java
ListNode slow = head;
ListNode fast = head;
while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) {
        // Cycle detected
        break;
    }
}
```

### 5. Merge Two Sorted Lists
A common operation in many linked list problems.
```java
ListNode dummy = new ListNode(0);
ListNode current = dummy;
while (l1 != null && l2 != null) {
    if (l1.val <= l2.val) {
        current.next = l1;
        l1 = l1.next;
    } else {
        current.next = l2;
        l2 = l2.next;
    }
    current = current.next;
}
current.next = (l1 != null) ? l1 : l2;
```

## Practice Exercises

1. Implement a function to check if a linked list is a palindrome
2. Implement a function to remove all elements from a linked list of integers that have a specific value
3. Implement a function to partition a linked list around a value x
4. Implement a function to determine if two singly linked lists intersect
5. Implement a function to find the node at the beginning of the loop in a circular linked list
6. Implement a function to add two numbers represented by linked lists where digits are stored in forward order
7. Implement a function to sort a linked list using merge sort
8. Implement a function to flatten a multilevel doubly linked list
9. Implement a function to copy a linked list with random pointers
10. Implement a function to reorder a linked list such that L0→L1→...→Ln-1→Ln becomes L0→Ln→L1→Ln-1→L2→Ln-2→...