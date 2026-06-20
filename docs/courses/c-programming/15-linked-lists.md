# Chapter 15: Linked Lists

> **Previous:** [Recursion](./14-recursion.md) | **Next:** [Stacks and Queues](./16-stacks-queues.md)

## Learning Objectives

- Define self-referential structures for linked data structures
- Implement singly linked list operations: creation, traversal, insertion, deletion
- Implement doubly linked lists for bidirectional traversal
- Implement circular linked lists
- Understand the trade-offs between linked lists and arrays


### Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| Node Structure | Each node contains data and a pointer to the next node | Define as `struct Node { int data; struct Node *next; };` |
| Singly Linked List | Nodes linked in one direction (forward only) | Traversal is O(n); insert at head is O(1) |
| Doubly Linked List | Each node has `prev` and `next` pointers | Bidirectional traversal; insert/delete anywhere is O(1) with the pointer |
| Basic Operations | Insert, delete, search, traverse, reverse | Always update all relevant pointers and free removed nodes |
| Circular Linked List | Last node points back to the head | Useful for round-robin scheduling and cyclic buffers |


```mermaid
flowchart LR
    A["15.1 Node Structure"] --> B["15.2 Singly Linked List"]
    B --> C["15.3 Basic Operations"]
    C --> D["15.4 Doubly Linked List"]
    D --> E["15.5 Circular Linked List"]
    E --> F["15.6 Advantages & Limitations"]
    F --> G["Summary & Exercises"]
```
![C Linked Lists: Singly, Doubly, Circular, Operations and Complexity](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/c-programming/ch-15-linked-lists.png)

## 15.1 Node Structure

A linked list is a sequence of nodes where each node contains data and a pointer to the next node.

```c
typedef struct node {
    int data;            /* data stored in this node */
    struct node *next;   /* pointer to the next node */
} Node;
```

The structure is **self-referential** because it contains a pointer to an instance of itself.

> **One-Sentence Takeaway:** A linked list node is a self-referential struct containing data and a pointer to the next node

## 15.2 Singly Linked List

### 15.2.1 Creating a Node

```c
#include <stdio.h>
#include <stdlib.h>

typedef struct node {
    int data;
    struct node *next;
} Node;

Node *create_node(int value)
{
    Node *new_node = (Node*)malloc(sizeof(Node));
    if (new_node == NULL) {
        fprintf(stderr, "Memory allocation failed\n");
        exit(1);
    }
    new_node->data = value;
    new_node->next = NULL;
    return new_node;
}
```

### 15.2.2 Traversal

```c
void print_list(const Node *head)
{
    const Node *current = head;
    while (current != NULL) {
        printf("%d -> ", current->data);
        current = current->next;
    }
    printf("NULL\n");
}
```

### 15.2.3 Insertion at Beginning

```c
Node *insert_beginning(Node *head, int value)
{
    Node *new_node = create_node(value);
    new_node->next = head;
    return new_node;    /* new head */
}
```

### 15.2.4 Insertion at End

```c
Node *insert_end(Node *head, int value)
{
    Node *new_node = create_node(value);

    if (head == NULL) {
        return new_node;
    }

    Node *current = head;
    while (current->next != NULL) {
        current = current->next;
    }
    current->next = new_node;
    return head;
}
```

### 15.2.5 Insertion at Position

```c
Node *insert_at(Node *head, int value, int position)
{
    if (position == 0) {
        return insert_beginning(head, value);
    }

    Node *current = head;
    for (int i = 0; current != NULL && i < position - 1; i++) {
        current = current->next;
    }

    if (current == NULL) {
        fprintf(stderr, "Position out of range\n");
        return head;
    }

    Node *new_node = create_node(value);
    new_node->next = current->next;
    current->next = new_node;
    return head;
}
```

### 15.2.6 Deletion by Value

```c
Node *delete_value(Node *head, int value)
{
    if (head == NULL) return NULL;

    /* If the value is at the head */
    if (head->data == value) {
        Node *temp = head;
        head = head->next;
        free(temp);
        return head;
    }

    /* Search for the node containing value */
    Node *current = head;
    while (current->next != NULL && current->next->data != value) {
        current = current->next;
    }

    if (current->next == NULL) {
        printf("Value %d not found\n", value);
        return head;
    }

    Node *temp = current->next;
    current->next = temp->next;
    free(temp);
    return head;
}
```

### 15.2.7 Complete Singly Linked List Example

```c
#include <stdio.h>
#include <stdlib.h>

typedef struct node {
    int data;
    struct node *next;
} Node;

Node *create_node(int value)
{
    Node *n = (Node*)malloc(sizeof(Node));
    if (n) { n->data = value; n->next = NULL; }
    return n;
}

void print_list(const Node *head)
{
    while (head) {
        printf("%d -> ", head->data);
        head = head->next;
    }
    printf("NULL\n");
}

void free_list(Node *head)
{
    Node *temp;
    while (head) {
        temp = head;
        head = head->next;
        free(temp);
    }
}

Node *insert_end(Node *head, int value)
{
    Node *new_node = create_node(value);
    if (!head) return new_node;

    Node *cur = head;
    while (cur->next) cur = cur->next;
    cur->next = new_node;
    return head;
}

int main(void)
{
    Node *head = NULL;

    head = insert_end(head, 10);
    head = insert_end(head, 20);
    head = insert_end(head, 30);
    head = insert_end(head, 40);

    printf("Initial list: ");
    print_list(head);

    head = delete_value(head, 20);
    printf("After deleting 20: ");
    print_list(head);

    head = insert_beginning(head, 5);
    printf("After inserting 5 at front: ");
    print_list(head);

    free_list(head);
    return 0;
}
```

**Output:**
```
Initial list: 10 -> 20 -> 30 -> 40 -> NULL
After deleting 20: 10 -> 30 -> 40 -> NULL
After inserting 5 at front: 5 -> 10 -> 30 -> 40 -> NULL
```

> **One-Sentence Takeaway:** Each node points only forward; traversal requires starting from the head each time


> **Pro Tip:** Always use a temporary pointer when traversing: `struct Node *cur = head; while (cur) { ... cur = cur->next; }`. Never modify `head` directly or you lose the list.

## 15.3 Doubly Linked List

A doubly linked list has pointers in both directions, enabling traversal forward and backward.

```c
typedef struct dnode {
    int data;
    struct dnode *prev;
    struct dnode *next;
} DNode;
```

```c
#include <stdio.h>
#include <stdlib.h>

typedef struct dnode {
    int data;
    struct dnode *prev;
    struct dnode *next;
} DNode;

DNode *create_dnode(int value)
{
    DNode *n = (DNode*)malloc(sizeof(DNode));
    if (n) { n->data = value; n->prev = NULL; n->next = NULL; }
    return n;
}

void print_forward(const DNode *head)
{
    while (head) {
        printf("%d <-> ", head->data);
        head = head->next;
    }
    printf("NULL\n");
}

void print_backward(const DNode *tail)
{
    while (tail) {
        printf("%d <-> ", tail->data);
        tail = tail->prev;
    }
    printf("NULL\n");
}

DNode *insert_end(DNode *head, int value)
{
    DNode *new_node = create_dnode(value);
    if (!head) return new_node;

    DNode *cur = head;
    while (cur->next) cur = cur->next;
    cur->next = new_node;
    new_node->prev = cur;
    return head;
}

DNode *delete_node(DNode *head, int value)
{
    DNode *cur = head;
    while (cur && cur->data != value) cur = cur->next;

    if (!cur) return head;  /* not found */

    if (cur->prev)
        cur->prev->next = cur->next;
    else
        head = cur->next;   /* deleting head */

    if (cur->next)
        cur->next->prev = cur->prev;

    free(cur);
    return head;
}

int main(void)
{
    DNode *head = NULL;
    head = insert_end(head, 10);
    head = insert_end(head, 20);
    head = insert_end(head, 30);
    head = insert_end(head, 40);

    printf("Forward:  ");
    print_forward(head);

    /* Find tail for backward traversal */
    DNode *tail = head;
    while (tail && tail->next) tail = tail->next;
    printf("Backward: ");
    print_backward(tail);

    head = delete_node(head, 30);
    printf("After deleting 30:\n");
    printf("Forward:  ");
    print_forward(head);

    /* Free all nodes */
    while (head) {
        DNode *temp = head;
        head = head->next;
        free(temp);
    }

    return 0;
}
```

**Output:**
```
Forward:  10 <-> 20 <-> 30 <-> 40 <-> NULL
Backward: 40 <-> 30 <-> 20 <-> 10 <-> NULL
After deleting 30:
Forward:  10 <-> 20 <-> 40 <-> NULL
```


> **One-Sentence Takeaway:** Basic operations include insert delete search traverse and reverse
> **Warning:** Deleting a node requires a pointer to the previous node to relink the list.
## 15.4 Circular Linked List

In a circular linked list, the last node points back to the head.

```c
#include <stdio.h>
#include <stdlib.h>

typedef struct node {
    int data;
    struct node *next;
} Node;

Node *insert_end_circular(Node *head, int value)
{
    Node *new_node = (Node*)malloc(sizeof(Node));
    new_node->data = value;

    if (head == NULL) {
        new_node->next = new_node;  /* points to itself */
        return new_node;
    }

    /* Insert after head */
    new_node->next = head->next;
    head->next = new_node;

    /* Swap data to maintain head as the "first" element */
    int temp = head->data;
    head->data = new_node->data;
    new_node->data = temp;

    return new_node;  /* new node becomes the new head */
}

void print_circular(const Node *head)
{
    if (head == NULL) return;

    const Node *current = head;
    do {
        printf("%d -> ", current->data);
        current = current->next;
    } while (current != head);
    printf("(back to %d)\n", head->data);
}

int main(void)
{
    Node *head = NULL;
    head = insert_end_circular(head, 10);
    head = insert_end_circular(head, 20);
    head = insert_end_circular(head, 30);
    head = insert_end_circular(head, 40);

    printf("Circular list: ");
    print_circular(head);
    return 0;
}
```

**Output:**
```
Circular list: 10 -> 40 -> 30 -> 20 -> (back to 10)
```


> **One-Sentence Takeaway:** Doubly linked lists have prev and next pointers for bidirectional traversal
## 15.5 Linked List vs. Array

| Operation | Array | Linked List |
|-----------|-------|-------------|
| Access by index | O(1) â€” direct | O(n) â€” must traverse |
| Insert at beginning | O(n) â€” shift elements | O(1) |
| Insert at end | O(1) amortized (if space) | O(n) (without tail ptr) |
| Delete from beginning | O(n) â€” shift elements | O(1) |
| Memory overhead | Minimal | 4â€“8 bytes per node (pointer) |
| Memory fragmentation | Contiguous | Scattered |
| Cache performance | Excellent (locality) | Poor (indirection) |
| Size change | Difficult (may need realloc) | Trivial |


> **One-Sentence Takeaway:** Circular linked lists connect the tail back to the head for cyclic iteration
> **Remember:** Circular lists require explicit termination conditions to avoid infinite loops.
## 15.6 Common Operations â€” Complexity

| Operation | Singly | Doubly | Circular |
|-----------|--------|--------|----------|
| Insert at front | O(1) | O(1) | O(1) |
| Insert at end | O(n) | O(1)* | O(1) |
| Delete by value | O(n) | O(n) | O(n) |
| Search | O(n) | O(n) | O(n) |
| Reverse | O(n) | O(1)** | O(n) |

\* With tail pointer
\** Traverse backward, not strictly a reversal

## Concept Comparison Table

| Feature | Singly Linked | Doubly Linked | Circular |
|---------|---------------|---------------|----------|
| Memory per node | 1 pointer + data | 2 pointers + data | 1 pointer + data |
| Direction | Forward only | Forward + backward | Forward (or both) |
| End marker | `NULL` in `next` | `NULL` in both | `next` = head |
| Insert at head | O(1) | O(1) | O(1) |
| Delete with pointer | O(n) to find prev | O(1) | O(n) or O(1) |
| Reverse traversal | Impossible | O(1) per step | Requires full walk |

## Quick Reference

| Operation | Singly Linked List |
|-----------|-------------------|
| Create node | `struct Node *n = malloc(sizeof(*n)); n->data = val; n->next = NULL;` |
| Insert at head | `n->next = head; head = n;` |
| Delete after prev | `struct Node *tmp = prev->next; prev->next = tmp->next; free(tmp);` |
| Search | `for (struct Node *c = head; c; c = c->next) if (c->data == val) ...` |
| Reverse | Three-pointer technique: `prev/cur/next` slide pointers |
| Free all | `while (head) { struct Node *t = head; head = head->next; free(t); }` |

## Cross-Application Matrix

| Application | List Type | Rationale |
|-------------|-----------|-----------|
| Undo buffer | Doubly linked | Forward/backward navigation |
| Round-robin scheduler | Circular | Wrap to start automatically |
| Music playlist | Circular doubly | Repeat + bidirectional skip |
| Hash table buckets | Singly | Simple, minimal memory per node |
| OS memory free list | Doubly or singly | Fast alloc/dealloc from head |

## Chapter Quiz

1. What is the time complexity of searching for a value in a singly linked list?
   A) O(1)
   B) O(log n)
   C) O(n)
   D) O(n²)

<details><summary>Answer</summary>**C)** Search requires traversing from the head, potentially visiting all n nodes.</details>

2. What advantage does a doubly linked list have over a singly linked list?
   A) Less memory
   B) O(1) deletion given a pointer to the node
   C) Faster search
   D) Smaller code

<details><summary>Answer</summary>**B)** With a pointer to the node, the previous node is accessible via the `prev` pointer, enabling O(1) deletion.</details>

3. How does a circular linked list know when the traversal is complete?
   A) It never completes
   B) When `current == head` on the second visit
   C) When `current->next == NULL`
   D) It uses a counter

<details><summary>Answer</summary>**B)** Traversal is complete when the pointer returns to the head node.</details>

## Summary

- A linked list is built from self-referential nodes containing data and a pointer to the next node.
- Singly linked lists support forward traversal only; insertion and deletion at the head are O(1).
- Doubly linked lists have `prev` and `next` pointers, enabling bidirectional traversal.
- Circular linked lists connect the last node back to the head; useful for round-robin scheduling.
- Linked lists excel at insertions and deletions but have poor random-access performance compared to arrays.
- Memory must be freed node by node; never lose the head pointer.

## Exercises

### Review Questions

1. What is a self-referential structure and why is it needed for linked lists?
2. Why must we update the head pointer when inserting at the front of a list?
3. What is the advantage of a doubly linked list over a singly linked list? What is the disadvantage?
4. How does a circular linked list differ from a regular linked list? Give a use case.
5. When would you choose an array over a linked list, and vice versa?

### Application Problems

1. Write a function `int count_nodes(const Node *head)` that returns the number of nodes in a singly linked list.
2. Write a function `Node *reverse_list(Node *head)` that reverses a singly linked list in-place (no extra array).
3. Write a function `int find_middle(const Node *head)` that returns the data in the middle node of a linked list using **two-pointer technique** (slow and fast pointers).
4. Write a function `Node *merge_sorted(Node *a, Node *b)` that merges two sorted singly linked lists into one sorted list, using only existing nodes (no new allocations).

### Challenge Problem

Implement a **polynomial** using a linked list where each node stores a coefficient and an exponent. Provide functions for:

- `Poly *poly_create()` â€” create empty polynomial.
- `void poly_add_term(Poly *p, double coeff, int exp)` â€” add a term (or combine if exponent exists).
- `Poly *poly_add(const Poly *a, const Poly *b)` â€” add two polynomials.
- `Poly *poly_multiply(const Poly *a, const Poly *b)` â€” multiply two polynomials.
- `void poly_print(const Poly *p)` â€” print in standard form: `3.0x^2 + 2.0x - 5.0`.
- `double poly_eval(const Poly *p, double x)` â€” evaluate using Horner's method.

Test with `(3x^2 + 2x - 5) + (x^3 - 4x + 7)` and `(x + 1) * (x - 1)`.

> **One-Sentence Takeaway:** Linked lists offer O(1) insertion and deletion but O(n) access and poor cache locality
