# Linked Lists: Comprehensive Notes

## 1. Introduction to Linked Lists

A linked list is a linear data structure where elements are stored in nodes, and each node contains a data field and a reference (link) to the next node in the sequence.

### Key Characteristics
- Dynamic size (can grow or shrink during execution)
- Non-contiguous memory allocation
- Efficient insertion and deletion operations
- Sequential access (no random access)

### Memory Representation
```
┌───────────┐    ┌───────────┐    ┌───────────┐
│ Data │ Next│───►│ Data │ Next│───►│ Data │ Next│───► null
└───────────┘    └───────────┘    └───────────┘
     Node 1           Node 2           Node 3
```

## 2. Types of Linked Lists

### Singly Linked List
Each node contains data and a reference to the next node. The last node points to null.

```java
class Node {
    int data;
    Node next;
    
    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    Node head;
}
```

### Doubly Linked List
Each node contains data, a reference to the next node, and a reference to the previous node.

```java
class DoublyNode {
    int data;
    DoublyNode next;
    DoublyNode prev;
    
    DoublyNode(int data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    DoublyNode head;
    DoublyNode tail;
}
```

### Circular Linked List
The last node points back to the first node, forming a circle.

```java
class CircularLinkedList {
    Node head;
    
    // In a circular linked list, the last node's next points to head
    // For example, if we have nodes A -> B -> C, then C.next = A
}
```

## 3. Basic Operations

### Insertion
- **At the beginning**: O(1)
- **At the end**: O(n) for singly linked list, O(1) for doubly linked list with tail pointer
- **At a specific position**: O(n)

```java
// Insert at the beginning
public void insertAtBeginning(int data) {
    Node newNode = new Node(data);
    newNode.next = head;
    head = newNode;
}

// Insert at the end
public void insertAtEnd(int data) {
    Node newNode = new Node(data);
    
    if (head == null) {
        head = newNode;
        return;
    }
    
    Node current = head;
    while (current.next != null) {
        current = current.next;
    }
    
    current.next = newNode;
}

// Insert at a specific position
public void insertAtPosition(int data, int position) {
    if (position < 0) return;
    
    if (position == 0) {
        insertAtBeginning(data);
        return;
    }
    
    Node newNode = new Node(data);
    Node current = head;
    
    for (int i = 0; i < position - 1 && current != null; i++) {
        current = current.next;
    }
    
    if (current == null) return;
    
    newNode.next = current.next;
    current.next = newNode;
}
```

### Deletion
- **From the beginning**: O(1)
- **From the end**: O(n) for singly linked list, O(1) for doubly linked list with tail pointer
- **From a specific position**: O(n)

```java
// Delete from the beginning
public void deleteFromBeginning() {
    if (head == null) return;
    
    head = head.next;
}

// Delete from the end
public void deleteFromEnd() {
    if (head == null) return;
    
    if (head.next == null) {
        head = null;
        return;
    }
    
    Node current = head;
    while (current.next.next != null) {
        current = current.next;
    }
    
    current.next = null;
}

// Delete from a specific position
public void deleteFromPosition(int position) {
    if (head == null || position < 0) return;
    
    if (position == 0) {
        head = head.next;
        return;
    }
    
    Node current = head;
    
    for (int i = 0; i < position - 1 && current != null; i++) {
        current = current.next;
    }
    
    if (current == null || current.next == null) return;
    
    current.next = current.next.next;
}
```

### Traversal
- **Linear traversal**: O(n)

```java
// Traverse linked list
public void traverse() {
    Node current = head;
    
    while (current != null) {
        System.out.print(current.data + " ");
        current = current.next;
    }
    System.out.println();
}
```

### Search
- **Linear search**: O(n)

```java
// Search for a value
public boolean search(int data) {
    Node current = head;
    
    while (current != null) {
        if (current.data == data) {
            return true;
        }
        current = current.next;
    }
    
    return false;
}
```

## 4. Advanced Linked List Techniques

### Two Pointer Technique
Used for finding the middle node, detecting cycles, or finding the nth node from the end.

```java
// Find the middle node
public Node findMiddle() {
    if (head == null) return null;
    
    Node slow = head;
    Node fast = head;
    
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return slow;
}

// Detect cycle
public boolean hasCycle() {
    if (head == null) return false;
    
    Node slow = head;
    Node fast = head;
    
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow == fast) {
            return true;
        }
    }
    
    return false;
}

// Find the nth node from the end
public Node findNthFromEnd(int n) {
    if (head == null || n <= 0) return null;
    
    Node first = head;
    Node second = head;
    
    // Move first pointer n nodes ahead
    for (int i = 0; i < n; i++) {
        if (first == null) return null;
        first = first.next;
    }
    
    // Move both pointers until first reaches the end
    while (first != null) {
        first = first.next;
        second = second.next;
    }
    
    return second;
}
```

### Dummy Node Technique
Used to simplify operations on the head of the list.

```java
// Remove nth node from the end using dummy node
public Node removeNthFromEnd(int n) {
    Node dummy = new Node(0);
    dummy.next = head;
    
    Node first = dummy;
    Node second = dummy;
    
    // Move first pointer n+1 steps ahead
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

### Reverse Linked List
A fundamental operation for many linked list problems.

```java
// Iterative approach
public Node reverseList() {
    Node prev = null;
    Node current = head;
    Node next = null;
    
    while (current != null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    
    head = prev;
    return head;
}

// Recursive approach
public Node reverseListRecursive(Node head) {
    if (head == null || head.next == null) {
        return head;
    }
    
    Node newHead = reverseListRecursive(head.next);
    head.next.next = head;
    head.next = null;
    
    return newHead;
}
```

### Merge Two Sorted Lists
A common operation in many linked list problems.

```java
public Node mergeTwoLists(Node l1, Node l2) {
    Node dummy = new Node(0);
    Node current = dummy;
    
    while (l1 != null && l2 != null) {
        if (l1.data <= l2.data) {
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

### Floyd's Cycle-Finding Algorithm
Used to detect cycles in a linked list.

```java
// Detect cycle and find the start of the cycle
public Node detectCycle() {
    if (head == null) return null;
    
    Node slow = head;
    Node fast = head;
    boolean hasCycle = false;
    
    // Detect cycle
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow == fast) {
            hasCycle = true;
            break;
        }
    }
    
    if (!hasCycle) return null;
    
    // Find the start of the cycle
    slow = head;
    while (slow != fast) {
        slow = slow.next;
        fast = fast.next;
    }
    
    return slow;
}
```

## 5. Common Linked List Problems and Patterns

### Pattern 1: Reverse Linked List
```java
// Reverse a linked list
public Node reverseList() {
    Node prev = null;
    Node current = head;
    
    while (current != null) {
        Node next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    
    return prev;
}
```

### Pattern 2: Fast and Slow Pointers
```java
// Find the middle of a linked list
public Node middleNode() {
    Node slow = head;
    Node fast = head;
    
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return slow;
}
```

### Pattern 3: Merge Lists
```java
// Merge k sorted lists
public Node mergeKLists(Node[] lists) {
    if (lists == null || lists.length == 0) return null;
    
    PriorityQueue<Node> minHeap = new PriorityQueue<>((a, b) -> a.data - b.data);
    
    // Add the first node of each list to the min heap
    for (Node list : lists) {
        if (list != null) {
            minHeap.offer(list);
        }
    }
    
    Node dummy = new Node(0);
    Node current = dummy;
    
    while (!minHeap.isEmpty()) {
        Node node = minHeap.poll();
        current.next = node;
        current = current.next;
        
        if (node.next != null) {
            minHeap.offer(node.next);
        }
    }
    
    return dummy.next;
}
```

### Pattern 4: Cycle Detection
```java
// Detect cycle in a linked list
public boolean hasCycle() {
    if (head == null) return false;
    
    Node slow = head;
    Node fast = head;
    
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow == fast) {
            return true;
        }
    }
    
    return false;
}
```

## 6. Time and Space Complexity

| Operation | Singly Linked List | Doubly Linked List |
|-----------|-------------------|-------------------|
| Access    | O(n)              | O(n)              |
| Search    | O(n)              | O(n)              |
| Insertion at beginning | O(1) | O(1)              |
| Insertion at end | O(n) / O(1)* | O(1)            |
| Insertion at position | O(n) | O(n)              |
| Deletion at beginning | O(1) | O(1)              |
| Deletion at end | O(n) / O(1)* | O(1)            |
| Deletion at position | O(n) | O(n)              |

*O(1) if tail pointer is maintained

## 7. Best Practices

1. **Always check for null pointers** to prevent NullPointerException
2. **Consider edge cases**: empty list, single node, two nodes
3. **Use dummy nodes** for operations that might modify the head
4. **Maintain tail pointers** for efficient operations at the end
5. **Use two pointers** for problems like finding the middle, detecting cycles, etc.

## 8. Learning Strategy for Linked Lists

1. **Master the basics**: node structure, traversal, insertion, deletion
2. **Understand common patterns**: two pointers, dummy node, reversal
3. **Practice problems by category**: start with easy problems, then medium, then hard
4. **Analyze solutions**: understand time and space complexity
5. **Implement from scratch**: don't memorize solutions, understand the approach

## 9. Common Interview Questions

1. Reverse a linked list
2. Detect cycle in a linked list
3. Find the middle of a linked list
4. Merge two sorted linked lists
5. Remove nth node from the end
6. Check if a linked list is a palindrome
7. Find the intersection of two linked lists
8. Add two numbers represented by linked lists
9. Flatten a multilevel doubly linked list
10. Sort a linked list

## 10. Advanced Topics

1. **Skip Lists**: Probabilistic data structure with multiple layers
2. **XOR Linked Lists**: Memory-efficient doubly linked lists
3. **Self-Adjusting Lists**: Lists that reorganize based on access patterns
4. **Unrolled Linked Lists**: Hybrid of arrays and linked lists
5. **Memory Pool**: Efficient memory allocation for linked lists

## Resources for Further Learning

1. **Books**:
   - "Introduction to Algorithms" by CLRS
   - "Cracking the Coding Interview" by Gayle Laakmann McDowell

2. **Online Platforms**:
   - LeetCode: Linked List section
   - GeeksforGeeks: Linked List data structure
   - HackerRank: Linked List challenges

3. **YouTube Channels**:
   - [mycodeschool](https://www.youtube.com/user/mycodeschool)
   - [Back To Back SWE](https://www.youtube.com/channel/UCmJz2DV1a3yfgrR7GqRtUUA)
   - [Abdul Bari](https://www.youtube.com/channel/UCZCFT11CWBi3MHNlGf019nw)
   - [Striver (takeUforward)](https://www.youtube.com/c/takeUforward)

4. **Visualization Tools**:
   - [VisuAlgo](https://visualgo.net/en/list)
   - [Algorithm Visualizer](https://algorithm-visualizer.org/)