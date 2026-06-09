# Chapter 4: Doubly Linked List and Circular Linked List

## Learning Objectives

- Implement a doubly linked list with forward and backward traversal.
- Implement a circular linked list.
- Compare singly, doubly, and circular linked lists.
- Analyze operation complexity for each variant.

## Theory

### Doubly Linked List

Each node stores pointers to both the next node and the previous node, enabling \( O(1) \) deletion at the tail and bidirectional traversal.

```
nullptr ← [prev|data|next] ↔ [prev|data|next] ↔ [prev|data|next] → nullptr
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
head → [A] → [B] → [C] → (back to head)

Doubly circular:
head ↔ [A] ↔ [B] ↔ [C] ↔ (back to head)
```

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
