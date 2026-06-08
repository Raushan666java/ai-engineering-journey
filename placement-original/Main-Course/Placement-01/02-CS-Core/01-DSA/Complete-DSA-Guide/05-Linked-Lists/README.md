# Linked Lists

## Table of Contents
- [Introduction](#introduction)
- [1. Singly Linked List](#1-singly-linked-list)
- [2. Doubly Linked List](#2-doubly-linked-list)
- [3. Circular Linked List](#3-circular-linked-list)
- [4. Key Operations and Time Complexity](#4-key-operations-and-time-complexity)
- [5. Common Linked List Problems](#5-common-linked-list-problems)
- [6. Linked List Patterns and Techniques](#6-linked-list-patterns-and-techniques)
- [7. Practice Problems](#7-practice-problems)
- [8. Advanced Linked List Concepts](#8-advanced-linked-list-concepts)
- [9. Resources](#9-resources)

## Introduction

A linked list is a linear data structure where elements, called nodes, are stored in separate memory locations and connected through pointers. Each node contains data and a reference (or pointer) to the next node in the sequence.

**Advantages over Arrays:**
- Dynamic size (no pre-allocation required)
- Efficient insertions/deletions (no shifting required)
- Memory utilization (only what's needed)

**Disadvantages:**
- No random access (must traverse from beginning)
- Extra memory for pointers
- Not cache-friendly (scattered memory locations)

## 1. Singly Linked List

A singly linked list is the most basic type of linked list where each node points to the next node, and the last node points to NULL.

### 1.1 Node Structure
```cpp
// C++
struct Node {
    int data;
    Node* next;
    
    // Constructor
    Node(int val) : data(val), next(nullptr) {}
};
```

```python
# Python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
```

### 1.2 Implementation

```cpp
// C++ Implementation
class SinglyLinkedList {
private:
    Node* head;
    
public:
    SinglyLinkedList() : head(nullptr) {}
    
    // Insert at beginning
    void insertAtBeginning(int data) {
        Node* newNode = new Node(data);
        newNode->next = head;
        head = newNode;
    }
    
    // Insert at end
    void insertAtEnd(int data) {
        Node* newNode = new Node(data);
        
        if (!head) {
            head = newNode;
            return;
        }
        
        Node* temp = head;
        while (temp->next) {
            temp = temp->next;
        }
        temp->next = newNode;
    }
    
    // Delete a node with given value
    void deleteNode(int key) {
        Node* temp = head;
        Node* prev = nullptr;
        
        // If head node itself holds the key
        if (temp && temp->data == key) {
            head = temp->next;
            delete temp;
            return;
        }
        
        // Search for the key to be deleted
        while (temp && temp->data != key) {
            prev = temp;
            temp = temp->next;
        }
        
        // Key not found
        if (!temp) return;
        
        // Unlink the node from the list
        prev->next = temp->next;
        delete temp;
    }
    
    // Print the linked list
    void printList() {
        Node* temp = head;
        while (temp) {
            std::cout << temp->data << " -> ";
            temp = temp->next;
        }
        std::cout << "NULL" << std::endl;
    }
    
    // Destructor to free memory
    ~SinglyLinkedList() {
        Node* current = head;
        Node* next;
        
        while (current) {
            next = current->next;
            delete current;
            current = next;
        }
        head = nullptr;
    }
};
```

## 2. Doubly Linked List

In a doubly linked list, each node has pointers to both the next node and the previous node, allowing for traversal in both directions.

### 2.1 Node Structure
```cpp
// C++
struct Node {
    int data;
    Node* next;
    Node* prev;
    
    // Constructor
    Node(int val) : data(val), next(nullptr), prev(nullptr) {}
};
```

```python
# Python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None
```

### 2.2 Implementation

```cpp
// C++ Implementation
class DoublyLinkedList {
private:
    Node* head;
    Node* tail;
    
public:
    DoublyLinkedList() : head(nullptr), tail(nullptr) {}
    
    // Insert at beginning
    void insertAtBeginning(int data) {
        Node* newNode = new Node(data);
        
        if (!head) {
            head = tail = newNode;
        } else {
            newNode->next = head;
            head->prev = newNode;
            head = newNode;
        }
    }
    
    // Insert at end
    void insertAtEnd(int data) {
        Node* newNode = new Node(data);
        
        if (!head) {
            head = tail = newNode;
        } else {
            newNode->prev = tail;
            tail->next = newNode;
            tail = newNode;
        }
    }
    
    // Delete a node with given value
    void deleteNode(int key) {
        if (!head) return;
        
        Node* temp = head;
        
        // If head node contains the key
        if (temp->data == key) {
            head = temp->next;
            if (head) head->prev = nullptr;
            else tail = nullptr; // List becomes empty
            delete temp;
            return;
        }
        
        // If tail node contains the key
        if (tail->data == key) {
            temp = tail;
            tail = tail->prev;
            tail->next = nullptr;
            delete temp;
            return;
        }
        
        // Search for the key in the middle
        while (temp && temp->data != key) {
            temp = temp->next;
        }
        
        // Key not found
        if (!temp) return;
        
        // Unlink the node from the list
        temp->prev->next = temp->next;
        if (temp->next) temp->next->prev = temp->prev;
        delete temp;
    }
    
    // Print the list forward
    void printForward() {
        Node* temp = head;
        std::cout << "NULL <- ";
        while (temp) {
            std::cout << temp->data << " <-> ";
            temp = temp->next;
        }
        std::cout << "NULL" << std::endl;
    }
    
    // Print the list backward
    void printBackward() {
        Node* temp = tail;
        std::cout << "NULL <- ";
        while (temp) {
            std::cout << temp->data << " <-> ";
            temp = temp->prev;
        }
        std::cout << "NULL" << std::endl;
    }
    
    // Destructor to free memory
    ~DoublyLinkedList() {
        Node* current = head;
        Node* next;
        
        while (current) {
            next = current->next;
            delete current;
            current = next;
        }
        head = tail = nullptr;
    }
};
```

## 3. Circular Linked List

In a circular linked list, the last node points back to the first node, creating a cycle.

### 3.1 Singly Circular Linked List

```cpp
// C++ Implementation
class CircularLinkedList {
private:
    Node* head;
    
public:
    CircularLinkedList() : head(nullptr) {}
    
    // Insert at beginning
    void insertAtBeginning(int data) {
        Node* newNode = new Node(data);
        
        if (!head) {
            head = newNode;
            newNode->next = head; // Point to itself
        } else {
            Node* temp = head;
            
            // Find the last node
            while (temp->next != head) {
                temp = temp->next;
            }
            
            newNode->next = head;
            temp->next = newNode;
            head = newNode;
        }
    }
    
    // Insert at end
    void insertAtEnd(int data) {
        Node* newNode = new Node(data);
        
        if (!head) {
            head = newNode;
            newNode->next = head; // Point to itself
        } else {
            Node* temp = head;
            
            // Find the last node
            while (temp->next != head) {
                temp = temp->next;
            }
            
            temp->next = newNode;
            newNode->next = head;
        }
    }
    
    // Delete a node with given value
    void deleteNode(int key) {
        if (!head) return;
        
        // If only one node exists
        if (head->data == key && head->next == head) {
            delete head;
            head = nullptr;
            return;
        }
        
        Node* temp = head;
        Node* prev = nullptr;
        
        // If head is to be deleted
        if (head->data == key) {
            // Find the last node
            while (temp->next != head) {
                temp = temp->next;
            }
            
            temp->next = head->next;
            delete head;
            head = temp->next;
            return;
        }
        
        // Find the node to be deleted
        prev = head;
        temp = head->next;
        
        while (temp != head) {
            if (temp->data == key) {
                prev->next = temp->next;
                delete temp;
                return;
            }
            prev = temp;
            temp = temp->next;
        }
    }
    
    // Print the list
    void printList() {
        if (!head) {
            std::cout << "List is empty" << std::endl;
            return;
        }
        
        Node* temp = head;
        do {
            std::cout << temp->data << " -> ";
            temp = temp->next;
        } while (temp != head);
        std::cout << "HEAD" << std::endl;
    }
    
    // Destructor to free memory
    ~CircularLinkedList() {
        if (!head) return;
        
        Node* temp = head->next;
        Node* next;
        
        while (temp != head) {
            next = temp->next;
            delete temp;
            temp = next;
        }
        delete head;
        head = nullptr;
    }
};
```

### 3.2 Doubly Circular Linked List
- Similar to doubly linked list, but last node's next points to first node and first node's prev points to last node
- Implementation details are similar to singly circular linked list with additional prev pointers

## 4. Key Operations and Time Complexity

| Operation | Singly Linked List | Doubly Linked List |
|-----------|-------------------|-------------------|
| Access    | O(n)              | O(n)              |
| Insert at beginning | O(1)    | O(1)              |
| Insert at end (with tail) | O(1) | O(1)           |
| Insert at end (no tail)  | O(n) | O(n)            |
| Insert at middle         | O(n) | O(n)            |
| Delete from beginning    | O(1) | O(1)            |
| Delete from end (with tail) | O(n) | O(1)         |
| Delete from middle       | O(n) | O(n)            |
| Search                   | O(n) | O(n)            |

## 5. Common Linked List Problems

### 5.1 Reverse a Linked List
```cpp
// Iterative approach
Node* reverseList(Node* head) {
    Node* prev = nullptr;
    Node* current = head;
    Node* next = nullptr;
    
    while (current) {
        next = current->next;  // Store next node
        current->next = prev;  // Reverse the link
        prev = current;        // Move prev forward
        current = next;        // Move current forward
    }
    
    return prev;  // New head
}
```

### 5.2 Detect a Cycle
```cpp
// Floyd's Cycle-Finding Algorithm (Tortoise and Hare)
bool hasCycle(Node* head) {
    if (!head || !head->next) return false;
    
    Node* slow = head;
    Node* fast = head;
    
    while (fast && fast->next) {
        slow = slow->next;         // Move one step
        fast = fast->next->next;   // Move two steps
        
        if (slow == fast) return true;  // Cycle detected
    }
    
    return false;  // No cycle
}
```

### 5.3 Find Middle of a Linked List
```cpp
Node* middleNode(Node* head) {
    if (!head) return nullptr;
    
    Node* slow = head;
    Node* fast = head;
    
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
    }
    
    return slow;  // Middle node
}
```

### 5.4 Merge Two Sorted Lists
```cpp
Node* mergeTwoLists(Node* l1, Node* l2) {
    // Dummy node to simplify edge cases
    Node dummy(0);
    Node* tail = &dummy;
    
    while (l1 && l2) {
        if (l1->data <= l2->data) {
            tail->next = l1;
            l1 = l1->next;
        } else {
            tail->next = l2;
            l2 = l2->next;
        }
        tail = tail->next;
    }
    
    // Attach remaining nodes
    tail->next = l1 ? l1 : l2;
    
    return dummy.next;
}
```

### 5.5 Remove Nth Node From End
```cpp
Node* removeNthFromEnd(Node* head, int n) {
    Node dummy(0);
    dummy.next = head;
    
    Node* first = &dummy;
    Node* second = &dummy;
    
    // Advance first pointer by n+1 steps
    for (int i = 0; i <= n; i++) {
        first = first->next;
    }
    
    // Move both pointers until first reaches end
    while (first) {
        first = first->next;
        second = second->next;
    }
    
    // Delete the nth node from end
    Node* toDelete = second->next;
    second->next = second->next->next;
    delete toDelete;
    
    return dummy.next;
}
```

## 6. Linked List Patterns and Techniques

### 6.1 Fast and Slow Pointers (Two Pointers)
- **Use cases**: Finding middle element, detecting cycles, finding cycle start point
- **Implementation**:
  ```cpp
  Node* slow = head;
  Node* fast = head;
  
  while (fast && fast->next) {
      slow = slow->next;          // Move one step
      fast = fast->next->next;    // Move two steps
      // Logic here
  }
  ```

### 6.2 Floyd's Cycle Detection Algorithm
- **Phase 1**: Determine if there's a cycle (two pointers as above)
- **Phase 2**: Find the start of the cycle
  ```cpp
  bool hasCycle = false;
  Node* slow = head;
  Node* fast = head;
  
  // Phase 1: Detect cycle
  while (fast && fast->next) {
      slow = slow->next;
      fast = fast->next->next;
      if (slow == fast) {
          hasCycle = true;
          break;
      }
  }
  
  if (!hasCycle) return nullptr;
  
  // Phase 2: Find start of cycle
  slow = head;
  while (slow != fast) {
      slow = slow->next;
      fast = fast->next;
  }
  
  return slow;  // Start of cycle
  ```

### 6.3 Reversing Linked Lists
- **In-place reversal technique**:
  ```cpp
  Node* prev = nullptr;
  Node* current = head;
  Node* next = nullptr;
  
  while (current) {
      next = current->next;
      current->next = prev;
      prev = current;
      current = next;
  }
  
  return prev;  // New head
  ```

### 6.4 Merge Sort for Linked Lists
- **Divide and Conquer approach**
- **Steps**:
  1. Find the middle
  2. Split the list
  3. Sort both halves recursively
  4. Merge the sorted halves

  ```cpp
  Node* mergeSort(Node* head) {
      // Base case
      if (!head || !head->next) return head;
      
      // Find middle
      Node* middle = findMiddle(head);
      Node* secondHalf = middle->next;
      middle->next = nullptr;  // Split the list
      
      // Recursive sort
      Node* left = mergeSort(head);
      Node* right = mergeSort(secondHalf);
      
      // Merge
      return merge(left, right);
  }
  ```

## 7. Practice Problems

### 7.1 Easy Problems
1. [LeetCode 206: Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)
2. [LeetCode 21: Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)
3. [LeetCode 83: Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)
4. [LeetCode 141: Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)
5. [LeetCode 160: Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists/)
6. [LeetCode 203: Remove Linked List Elements](https://leetcode.com/problems/remove-linked-list-elements/)
7. [LeetCode 876: Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/)

### 7.2 Medium Problems
1. [LeetCode 19: Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)
2. [LeetCode 2: Add Two Numbers](https://leetcode.com/problems/add-two-numbers/)
3. [LeetCode 142: Linked List Cycle II](https://leetcode.com/problems/linked-list-cycle-ii/)
4. [LeetCode 82: Remove Duplicates from Sorted List II](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/)
5. [LeetCode 143: Reorder List](https://leetcode.com/problems/reorder-list/)
6. [LeetCode 61: Rotate List](https://leetcode.com/problems/rotate-list/)
7. [LeetCode 86: Partition List](https://leetcode.com/problems/partition-list/)
8. [LeetCode 147: Insertion Sort List](https://leetcode.com/problems/insertion-sort-list/)

### 7.3 Hard Problems
1. [LeetCode 23: Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)
2. [LeetCode 25: Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/)
3. [LeetCode 146: LRU Cache](https://leetcode.com/problems/lru-cache/) (uses doubly linked list)
4. [LeetCode 460: LFU Cache](https://leetcode.com/problems/lfu-cache/)

## 8. Advanced Linked List Concepts

### 8.1 Skip Lists
- Probabilistic data structure with multiple layers of linked lists
- Provides O(log n) search complexity on average
- Used in Redis for sorted sets

### 8.2 XOR Linked Lists
- Memory-efficient doubly linked list variation
- Each node stores XOR of addresses of previous and next nodes
- Reduces memory usage but increases complexity

### 8.3 Self-organizing Lists
- Move-to-front: Recently accessed items moved to head
- Transpose: Swap accessed item with predecessor
- Count: Keep count of accesses and sort by frequency

### 8.4 Unrolled Linked Lists
- Hybrid between arrays and linked lists
- Each node contains an array of elements
- Reduces pointer overhead and improves cache locality

## 9. Resources

### 9.1 Books
- "Introduction to Algorithms" by Cormen, Leiserson, Rivest, and Stein (CLRS)
- "Cracking the Coding Interview" by Gayle Laakmann McDowell
- "Algorithms" by Robert Sedgewick and Kevin Wayne

### 9.2 Online Resources
- [GeeksforGeeks: Linked List Data Structure](https://www.geeksforgeeks.org/data-structures/linked-list/)
- [Visualgo: Linked List Visualization](https://visualgo.net/en/list)
- [CS Dojo: Linked Lists on YouTube](https://www.youtube.com/watch?v=WwfhLC16bis)

### 9.3 Practice Platforms
- [LeetCode Linked List Problems](https://leetcode.com/tag/linked-list/)
- [HackerRank Linked Lists](https://www.hackerrank.com/domains/data-structures?filters%5Bsubdomains%5D%5B%5D=linked-lists)
- [InterviewBit: Linked Lists](https://www.interviewbit.com/courses/programming/topics/linked-lists/)

---

## Key Takeaways

1. **Foundational Data Structure**: Linked lists are fundamental and appear frequently in technical interviews.
2. **Two Pointer Technique**: Fast and slow pointers solve many linked list problems efficiently.
3. **Implementation Practice**: Practice implementing all operations from scratch.
4. **Edge Cases**: Always consider empty lists, single-node lists, and cycles.
5. **Space-Time Tradeoff**: Know when to use a linked list vs an array/dynamic array.

## Love Babbar & Striver Sheet Problems (Linked Lists)

### Love Babbar Sheet (Linked Lists)
1. [Reverse a Linked List](https://leetcode.com/problems/reverse-linked-list/)
2. [Detect Loop in a Linked List](https://leetcode.com/problems/linked-list-cycle/)
3. [Find the starting point of the loop](https://leetcode.com/problems/linked-list-cycle-ii/)
4. [Remove duplicates in a sorted Linked List](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)
5. [Remove duplicates in an unsorted Linked List](https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list/)
6. [Move last element to front of a Linked List](https://www.geeksforgeeks.org/move-last-element-to-front-of-a-given-linked-list/)
7. [Add 1 to a number represented as a Linked List](https://leetcode.com/problems/plus-one-linked-list/)
8. [Add two numbers represented by Linked Lists](https://leetcode.com/problems/add-two-numbers/)

### Striver SDE Sheet (Linked Lists)
1. [Reverse a Linked List](https://leetcode.com/problems/reverse-linked-list/)
2. [Find the middle of Linked List](https://leetcode.com/problems/middle-of-the-linked-list/)
3. [Merge two sorted Linked Lists](https://leetcode.com/problems/merge-two-sorted-lists/)
4. [Remove N-th node from the end of Linked List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)
5. [Delete a given Node when a node is given](https://leetcode.com/problems/delete-node-in-a-linked-list/)
6. [Find intersection point of Y Linked List](https://leetcode.com/problems/intersection-of-two-linked-lists/)
7. [Detect a cycle in Linked List](https://leetcode.com/problems/linked-list-cycle/)
8. [Reverse Linked List in groups of size K](https://leetcode.com/problems/reverse-nodes-in-k-group/)
