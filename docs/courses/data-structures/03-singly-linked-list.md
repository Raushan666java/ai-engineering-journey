# Chapter 3: Singly Linked List

## Learning Objectives

- Define the singly linked list structure and node abstraction.
- Implement insertion at the beginning, middle, and end.
- Implement deletion, traversal, search, and reversal.
- Analyze the complexity of each operation.

## Theory

![Singly Linked List Flowchart](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/data-structures/ch03-singly-linked-list.png)

### Structure

A singly linked list is a sequence of nodes where each node contains data and a pointer to the next node. The list is identified by a `head` pointer; the last node points to `nullptr`.

```
head → [data|next] → [data|next] → [data|next] → nullptr
```

### Complexity Compared to Arrays

| Operation | Singly Linked List | Dynamic Array |
|-----------|-------------------|---------------|
| Access by index | \( O(n) \) | \( O(1) \) |
| Insert at head | \( O(1) \) | \( O(n) \) |
| Insert at tail | \( O(n) \) / \( O(1) \) with tail ptr | \( O(1) \) amortized |
| Insert at middle | \( O(n) \) | \( O(n) \) |
| Delete at head | \( O(1) \) | \( O(n) \) |

### Reversal

Reversing a singly linked list can be done iteratively in \( O(n) \) time and \( O(1) \) space by rewiring the pointers.

## Examples

### Example 1: Node and List Definition

```cpp
#include <iostream>

template <typename T>
struct Node {
    T data;
    Node* next;

    Node(const T& value) : data(value), next(nullptr) {}
};

template <typename T>
class SinglyLinkedList {
private:
    Node<T>* head;
    Node<T>* tail;
    int count;

public:
    SinglyLinkedList() : head(nullptr), tail(nullptr), count(0) {}

    ~SinglyLinkedList() {
        Node<T>* current = head;
        while (current) {
            Node<T>* temp = current;
            current = current->next;
            delete temp;
        }
    }

    int size() const { return count; }
    bool empty() const { return count == 0; }

    // O(1)
    void pushFront(const T& value) {
        Node<T>* newNode = new Node<T>(value);
        newNode->next = head;
        head = newNode;
        if (!tail) tail = head;
        ++count;
    }

    // O(1) with tail pointer
    void pushBack(const T& value) {
        Node<T>* newNode = new Node<T>(value);
        if (!head) {
            head = tail = newNode;
        } else {
            tail->next = newNode;
            tail = newNode;
        }
        ++count;
    }

    // O(1)
    void popFront() {
        if (!head) return;
        Node<T>* temp = head;
        head = head->next;
        if (!head) tail = nullptr;
        delete temp;
        --count;
    }

    // O(n)
    void insertAt(int index, const T& value) {
        if (index < 0 || index > count) return;
        if (index == 0) { pushFront(value); return; }
        if (index == count) { pushBack(value); return; }

        Node<T>* newNode = new Node<T>(value);
        Node<T>* current = head;
        for (int i = 0; i < index - 1; ++i) current = current->next;
        newNode->next = current->next;
        current->next = newNode;
        ++count;
    }

    // O(n)
    void removeAt(int index) {
        if (index < 0 || index >= count || !head) return;
        if (index == 0) { popFront(); return; }

        Node<T>* current = head;
        for (int i = 0; i < index - 1; ++i) current = current->next;
        Node<T>* temp = current->next;
        current->next = temp->next;
        if (!current->next) tail = current;
        delete temp;
        --count;
    }

    // O(n)
    int search(const T& value) const {
        Node<T>* current = head;
        int idx = 0;
        while (current) {
            if (current->data == value) return idx;
            current = current->next;
            ++idx;
        }
        return -1;
    }

    // O(n)
    void reverse() {
        Node<T>* prev = nullptr;
        Node<T>* current = head;
        tail = head;
        while (current) {
            Node<T>* next = current->next;
            current->next = prev;
            prev = current;
            current = next;
        }
        head = prev;
    }

    // O(n)
    void print() const {
        Node<T>* current = head;
        while (current) {
            std::cout << current->data << " -> ";
            current = current->next;
        }
        std::cout << "nullptr\n";
    }
};
```

### Example 2: Driver Program

```cpp
#include "singlyLinkedList.h"

int main() {
    SinglyLinkedList<int> list;

    list.pushBack(10);
    list.pushBack(20);
    list.pushBack(30);
    list.pushFront(5);
    std::cout << "After inserts: ";
    list.print();

    list.insertAt(2, 15);
    std::cout << "After insertAt(2,15): ";
    list.print();

    list.popFront();
    std::cout << "After popFront: ";
    list.print();

    list.removeAt(2);
    std::cout << "After removeAt(2): ";
    list.print();

    std::cout << "Search for 20 at index: " << list.search(20) << "\n";

    list.reverse();
    std::cout << "After reverse: ";
    list.print();

    return 0;
}
```

**Output:**
```
After inserts: 5 -> 10 -> 20 -> 30 -> nullptr
After insertAt(2,15): 5 -> 10 -> 15 -> 20 -> 30 -> nullptr
After popFront: 10 -> 15 -> 20 -> 30 -> nullptr
After removeAt(2): 10 -> 15 -> 30 -> nullptr
Search for 20 at index: -1
After reverse: 30 -> 15 -> 10 -> nullptr
```

### Example 3: Recursive Reverse

```cpp
#include <iostream>

template <typename T>
Node<T>* reverseRecursive(Node<T>* node) {
    if (!node || !node->next) return node;
    Node<T>* rest = reverseRecursive(node->next);
    node->next->next = node;
    node->next = nullptr;
    return rest;
}

// Usage in main:
// list.reverseRecursive(); assigns head = reverseRecursive(head);
```

## Summary

- Singly linked lists excel at head insertions and deletions (\( O(1) \)) but pay \( O(n) \) for indexed access.
- Maintaining a tail pointer makes pushBack \( O(1) \).
- Iterative reversal rewires three pointers in a single pass.
- Linked lists avoid the shifting cost of arrays for insertions and deletions.

## Exercises

### Review Questions

1. Why does array insertion at index 0 cost \( O(n) \) while linked list pushFront costs \( O(1) \)?
2. What are the trade-offs of not maintaining a tail pointer?
3. Explain why a singly linked list cannot traverse backwards efficiently.

### Application Problems

4. Implement a function that detects and removes the middle node of a linked list in one pass.
5. Write a function to merge two sorted singly linked lists into one sorted list.
6. Detect a cycle in a linked list using Floyd's Tortoise and Hare algorithm.

### Challenge Problem

7. Given a singly linked list, group all odd-indexed nodes together followed by even-indexed nodes in \( O(n) \) time and \( O(1) \) space. Example: `1->2->3->4->5` becomes `1->3->5->2->4`.
