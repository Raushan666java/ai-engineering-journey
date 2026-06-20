# Chapter 4: Doubly Linked List and Circular Linked List

> **Previous:** [Chapter 3: Singly Linked List](./03-singly-linked-list.md) | **Next:** [Stacks](./05-stacks.md)

## Learning Objectives

- Implement a doubly linked list with forward and backward traversal.
- Implement a circular linked list.
- Compare singly, doubly, and circular linked lists.
- Analyze operation complexity for each variant.

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| Node Structure | Each node has prev + data + next pointers | Use struct Node with prev, data, next fields |
| Doubly Linked List | Forward and backward traversal supported | Delete node at known position in O(1) |
| Circular Linked List | Last node points back to head | Use for round-robin scheduling |
| Doubly Circular | Tail.next = head, head.prev = tail | Traverse in any direction indefinitely |
| Memory Overhead | 2 pointers per node vs 1 in singly linked | Trade memory for operational flexibility |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Doubly Linked List] --> B[Singly vs Doubly vs Circular]
    B --> C[Doubly: Insert, Delete, Traverse]
    C --> D[Circular Singly]
    D --> E[Circular Doubly]
    E --> F[Complexity Comparison]
    F --> G[Applications: LRU, Scheduler]
```

## Theory

![Doubly Linked List Flowchart](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/data-structures/ch04-doubly-linked-list.png)

### Doubly Linked List

> **Pro Tip:** Doubly linked lists use 2 pointers per node (prev + next) enabling O(1) deletion at both ends but double the memory overhead of singly linked lists.

Each node stores pointers to both the next node and the previous node, enabling \( O(1) \) deletion at the tail and bidirectional traversal.

```
nullptr â† [prev|data|next] â†” [prev|data|next] â†” [prev|data|next] â†’ nullptr
```

**Advantages over singly linked list:**
- Delete at tail: \( O(1) \) instead of \( O(n) \).
- Delete a given node: \( O(1) \) if pointer is known.
- Reverse traversal: possible.

**Disadvantage:** Each node requires one extra pointer (more memory).

### Circular Linked List

The last node points back to the first node (singly circular) or the first node's prev points to the last (doubly circular). Useful for round-robin scheduling and cyclic buffers.

```
Singly circular:
head â†’ [A] â†’ [B] â†’ [C] â†’ (back to head)

Doubly circular:
head â†” [A] â†” [B] â†” [C] â†” (back to head)
```

> **One-Sentence Takeaway:** Doubly linked lists provide O(1) deletion at known nodes and backward traversal at the cost of double the pointer overhead per element.

## Examples

### Example 1: Doubly Linked List Implementation

```cpp
#include <iostream>

template <typename T>
struct DNode {
    T data;
    DNode* prev;
    DNode* next;

    DNode(const T& value) : data(value), prev(nullptr), next(nullptr) {}
};

template <typename T>
class DoublyLinkedList {
private:
    DNode<T>* head;
    DNode<T>* tail;
    int count;

public:
    DoublyLinkedList() : head(nullptr), tail(nullptr), count(0) {}

    ~DoublyLinkedList() {
        DNode<T>* current = head;
        while (current) {
            DNode<T>* temp = current;
            current = current->next;
            delete temp;
        }
    }

    int size() const { return count; }

    // O(1)
    void pushFront(const T& value) {
        DNode<T>* newNode = new DNode<T>(value);
        if (!head) {
            head = tail = newNode;
        } else {
            newNode->next = head;
            head->prev = newNode;
            head = newNode;
        }
        ++count;
    }

    // O(1)
    void pushBack(const T& value) {
        DNode<T>* newNode = new DNode<T>(value);
        if (!tail) {
            head = tail = newNode;
        } else {
            tail->next = newNode;
            newNode->prev = tail;
            tail = newNode;
        }
        ++count;
    }

    // O(1)
    void popFront() {
        if (!head) return;
        DNode<T>* temp = head;
        head = head->next;
        if (head) head->prev = nullptr;
        else tail = nullptr;
        delete temp;
        --count;
    }

    // O(1)
    void popBack() {
        if (!tail) return;
        DNode<T>* temp = tail;
        tail = tail->prev;
        if (tail) tail->next = nullptr;
        else head = nullptr;
        delete temp;
        --count;
    }

    // O(n)
    void insertAt(int index, const T& value) {
        if (index < 0 || index > count) return;
        if (index == 0) { pushFront(value); return; }
        if (index == count) { pushBack(value); return; }

        DNode<T>* current = head;
        for (int i = 0; i < index; ++i) current = current->next;
        DNode<T>* newNode = new DNode<T>(value);
        newNode->prev = current->prev;
        newNode->next = current;
        current->prev->next = newNode;
        current->prev = newNode;
        ++count;
    }

    // O(1) if node pointer is known; O(n) by index
    void removeAt(int index) {
        if (index < 0 || index >= count) return;
        if (index == 0) { popFront(); return; }
        if (index == count - 1) { popBack(); return; }

        DNode<T>* current = head;
        for (int i = 0; i < index; ++i) current = current->next;
        current->prev->next = current->next;
        current->next->prev = current->prev;
        delete current;
        --count;
    }

    void printForward() const {
        DNode<T>* current = head;
        while (current) {
            std::cout << current->data << " <-> ";
            current = current->next;
        }
        std::cout << "nullptr\n";
    }

    void printBackward() const {
        DNode<T>* current = tail;
        while (current) {
            std::cout << current->data << " <-> ";
            current = current->prev;
        }
        std::cout << "nullptr\n";
    }
};
```

### Example 2: Driver for Doubly Linked List

```cpp
#include "doublyLinkedList.h"

int main() {
    DoublyLinkedList<int> dll;

    dll.pushBack(10);
    dll.pushBack(20);
    dll.pushBack(30);
    dll.pushFront(5);
    std::cout << "Forward:  ";
    dll.printForward();
    std::cout << "Backward: ";
    dll.printBackward();

    dll.popBack();
    std::cout << "After popBack (forward): ";
    dll.printForward();

    dll.insertAt(1, 12);
    std::cout << "After insertAt(1,12): ";
    dll.printForward();

    return 0;
}
```

**Output:**
```
Forward:  5 <-> 10 <-> 20 <-> 30 <-> nullptr
Backward: 30 <-> 20 <-> 10 <-> 5 <-> nullptr
After popBack (forward): 5 <-> 10 <-> 20 <-> nullptr
After insertAt(1,12): 5 <-> 12 <-> 10 <-> 20 <-> nullptr
```

### Example 3: Circular Singly Linked List

```cpp
#include <iostream>

template <typename T>
class CircularLinkedList {
private:
    struct Node {
        T data;
        Node* next;
        Node(const T& value) : data(value), next(nullptr) {}
    };
    Node* head;
    int count;

public:
    CircularLinkedList() : head(nullptr), count(0) {}

    void pushBack(const T& value) {
        Node* newNode = new Node(value);
        if (!head) {
            head = newNode;
            head->next = head;
        } else {
            Node* current = head;
            while (current->next != head) current = current->next;
            current->next = newNode;
            newNode->next = head;
        }
        ++count;
    }

    void print() const {
        if (!head) return;
        Node* current = head;
        do {
            std::cout << current->data << " -> ";
            current = current->next;
        } while (current != head);
        std::cout << "(back to " << head->data << ")\n";
    }
};

int main() {
    CircularLinkedList<int> cll;
    cll.pushBack(1);
    cll.pushBack(2);
    cll.pushBack(3);
    cll.pushBack(4);
    cll.print();
    return 0;
}
```

**Output:**
```
1 -> 2 -> 3 -> 4 -> (back to 1)
```

> **One-Sentence Takeaway:** Review the complexity comparison table - choosing the right list variant can make the difference between O(1) and O(n) for critical operations.

## ðŸ’¡ Pro Tips

> **Remember:** Always check for null prev on the head node before accessing node->prev in doubly linked list operations - this is the most common source of crashes.

- **LRU cache is the classic doubly-linked list application**: Pair a DLL with a hash map. The DLL maintains access order; the hash map provides \(O(1)\) lookup. Move accessed nodes to the head to implement "most recently used" ordering.
- **Circular lists are natural for round-robin**: No end-of-list checks needed â€” when you reach the same node again, you've visited everyone once. Perfect for CPU scheduling and turn-based games.
- **Bi-directional traversal costs 1 extra pointer**: Doubly linked nodes use 2Ã— the pointer memory of singly linked. For 1 million integers (32-bit), that's 8 MB vs 4 MB extra â€” a small price for \(O(1)\) deletion at arbitrary positions.
- **Watch for null prev on the head**: In doubly linked list operations, always check if the node is the head before accessing its prev pointer. Dereferencing nullptr is an immediate crash.

## One-Sentence Takeaways

- Doubly linked lists allow \(O(1)\) deletion at both ends and backward traversal.
- Circular linked lists form a ring; traversal from any node visits all nodes.
- LRU cache uses a doubly linked list for \(O(1)\) access-order maintenance.
- Josephus problem is elegantly solved with a circular linked list.
- XOR linked list reduces pointer overhead but sacrifices readability.

## Concept Comparison Table

| Feature | Singly | Doubly | Circular Singly | Circular Doubly |
|---------|--------|--------|-----------------|-----------------|
| Forward traversal | Yes | Yes | Yes (infinite) | Yes (infinite) |
| Backward traversal | No | Yes | No | Yes |
| Delete head | \(O(1)\) | \(O(1)\) | \(O(1)\) | \(O(1)\) |
| Delete tail | \(O(n)\) | \(O(1)\) | \(O(n)\) | \(O(1)\) |
| Memory per node | 1 pointer | 2 pointers | 1 pointer | 2 pointers |
| Round-robin support | No | No | Yes | Yes |

## Quick Reference: When to Use Which List

| Requirement | Best Choice |
|-------------|-------------|
| Single-pass forward only | Singly linked |
| Need reverse traversal | Doubly linked |
| Round-robin / cyclic access | Circular singly |
| Full flexibility | Circular doubly |
| Minimize memory | Singly linked |
| \(O(1)\) tail deletion | Doubly or circular doubly |

## Cross-Application Matrix

| Application | List Type | Why |
|-------------|-----------|-----|
| LRU cache | Doubly linked + hash map | \(O(1)\) move-to-front, \(O(1)\) delete-last |
| CPU scheduler | Circular singly | Round-robin time-slicing |
| Music playlist repeat | Circular doubly | Cycle through songs, prev/next |
| Browser history | Doubly linked | Forward/backward navigation |
| Undo/redo | Stack + doubly linked list | Navigate history in both directions |

## Chapter Quiz

1. **Why can a DLL delete at the tail in \(O(1)\)?**
   - a) Tail pointer with prev from last node âœ“
   - b) Binary search
   - c) Hash table lookup
   - d) Circular indexing

2. **What is the memory overhead of a doubly linked node vs singly?**
   - a) Same
   - b) 1 extra pointer âœ“
   - c) 2 extra pointers
   - d) 4 extra pointers

3. **Which application uses a circular linked list naturally?**
   - a) Stack
   - b) Round-robin scheduler âœ“
   - c) Hash table
   - d) Binary search tree

4. **LRU cache combines a DLL with:**
   - a) Array
   - b) Hash map âœ“
   - c) Stack
   - d) Priority queue

5. **What field do we check before accessing node->prev?**
   - a) node->next
   - b) node == head âœ“
   - c) node->data
   - d) tail pointer

**Answers:** 1-a, 2-b, 3-b, 4-b, 5-b

## Summary

| Property | Singly | Doubly | Circular Singly |
|----------|--------|--------|-----------------|
| Forward traversal | Yes | Yes | Yes |
| Backward traversal | No | Yes | Yes (via full cycle) |
| Tail deletion | \( O(n) \) | \( O(1) \) | \( O(n) \) |
| Memory per node | 1 pointer | 2 pointers | 1 pointer |
| Round-robin | No | No | Natural |

## Exercises

### Review Questions

1. Why can a doubly linked list delete at the tail in \( O(1) \) while a singly linked list requires \( O(n) \)?
2. What is the primary advantage of a circular linked list for scheduling algorithms?
3. Compare the memory overhead of singly vs doubly linked lists for storing 1 million integers.

### Application Problems

4. Implement a function to reverse a doubly linked list in \( O(n) \).
5. Write a program to detect whether a circular linked list is broken (has a non-circular node).
6. Implement a Josephus problem solver using a circular linked list.

### Challenge Problem

7. Implement an LRU (Least Recently Used) cache using a doubly linked list and a hash map. Both `get` and `put` must operate in \( O(1) \) amortized time.
