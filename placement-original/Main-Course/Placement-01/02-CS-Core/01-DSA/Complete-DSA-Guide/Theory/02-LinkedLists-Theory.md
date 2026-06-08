# 🔗 Linked Lists Theory - Complete Guide

## 📋 Table of Contents
- [Introduction to Linked Lists](#introduction-to-linked-lists)
- [Types of Linked Lists](#types-of-linked-lists)
- [Basic Operations](#basic-operations)
- [Common Patterns & Techniques](#common-patterns--techniques)
- [Advanced Concepts](#advanced-concepts)
- [Time & Space Complexity](#time--space-complexity)
- [Practice Problems by Category](#practice-problems-by-category)

---

## Introduction to Linked Lists

### What is a Linked List?
A **linked list** is a linear data structure where elements are stored in nodes, and each node contains data and a reference (or link) to the next node in the sequence.

### Key Characteristics:
- **Dynamic Size**: Can grow or shrink during runtime
- **Non-contiguous Memory**: Nodes can be stored anywhere in memory
- **Sequential Access**: Must traverse from head to reach any element
- **Efficient Insertion/Deletion**: O(1) at known positions

### Basic Node Structure:
```cpp
struct ListNode {
    int val;
    ListNode* next;
    
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode* next) : val(x), next(next) {}
};
```

### Memory Representation:
```
Array:     [1][2][3][4][5]  (Contiguous)
          100 104 108 112 116

Linked List: [1|ptr] -> [2|ptr] -> [3|ptr] -> [4|ptr] -> [5|NULL]
            100        200        150        300        250
```

### Advantages:
- Dynamic size allocation
- Efficient insertion/deletion at beginning
- Memory allocated as needed
- No memory waste

### Disadvantages:
- No random access (must traverse)
- Extra memory for pointers
- Not cache-friendly
- No backward traversal (in singly linked list)

---

## Types of Linked Lists

### 1. **Singly Linked List**
Each node points to the next node.

```cpp
class SinglyLinkedList {
private:
    ListNode* head;
    
public:
    SinglyLinkedList() : head(nullptr) {}
    
    void insert(int val) {
        ListNode* newNode = new ListNode(val);
        newNode->next = head;
        head = newNode;
    }
    
    void display() {
        ListNode* curr = head;
        while (curr) {
            cout << curr->val << " -> ";
            curr = curr->next;
        }
        cout << "NULL" << endl;
    }
};
```

**Structure**: A -> B -> C -> NULL

---

### 2. **Doubly Linked List**
Each node has pointers to both next and previous nodes.

```cpp
struct DoublyListNode {
    int val;
    DoublyListNode* next;
    DoublyListNode* prev;
    
    DoublyListNode(int x) : val(x), next(nullptr), prev(nullptr) {}
};

class DoublyLinkedList {
private:
    DoublyListNode* head;
    DoublyListNode* tail;
    
public:
    DoublyLinkedList() : head(nullptr), tail(nullptr) {}
    
    void insertAtEnd(int val) {
        DoublyListNode* newNode = new DoublyListNode(val);
        
        if (!head) {
            head = tail = newNode;
        } else {
            tail->next = newNode;
            newNode->prev = tail;
            tail = newNode;
        }
    }
};
```

**Structure**: NULL <- A <-> B <-> C -> NULL

---

### 3. **Circular Linked List**
Last node points back to the first node.

```cpp
class CircularLinkedList {
private:
    ListNode* head;
    
public:
    CircularLinkedList() : head(nullptr) {}
    
    void insert(int val) {
        ListNode* newNode = new ListNode(val);
        
        if (!head) {
            head = newNode;
            newNode->next = head;
        } else {
            ListNode* curr = head;
            while (curr->next != head) {
                curr = curr->next;
            }
            curr->next = newNode;
            newNode->next = head;
        }
    }
};
```

**Structure**: A -> B -> C -> A (forms a circle)

---

### 4. **Circular Doubly Linked List**
Combines features of both circular and doubly linked lists.

**Structure**: A <-> B <-> C <-> A

---

## Basic Operations

### 1. **Insertion**

#### At Beginning:
```cpp
void insertAtHead(ListNode*& head, int val) {
    ListNode* newNode = new ListNode(val);
    newNode->next = head;
    head = newNode;
}
```
**Time**: O(1), **Space**: O(1)

#### At End:
```cpp
void insertAtTail(ListNode*& head, int val) {
    ListNode* newNode = new ListNode(val);
    
    if (!head) {
        head = newNode;
        return;
    }
    
    ListNode* curr = head;
    while (curr->next) {
        curr = curr->next;
    }
    curr->next = newNode;
}
```
**Time**: O(n), **Space**: O(1)

#### At Position:
```cpp
void insertAtPosition(ListNode*& head, int pos, int val) {
    if (pos == 0) {
        insertAtHead(head, val);
        return;
    }
    
    ListNode* newNode = new ListNode(val);
    ListNode* curr = head;
    
    for (int i = 0; i < pos - 1 && curr; i++) {
        curr = curr->next;
    }
    
    if (curr) {
        newNode->next = curr->next;
        curr->next = newNode;
    }
}
```
**Time**: O(n), **Space**: O(1)

---

### 2. **Deletion**

#### From Beginning:
```cpp
void deleteFromHead(ListNode*& head) {
    if (!head) return;
    
    ListNode* temp = head;
    head = head->next;
    delete temp;
}
```
**Time**: O(1), **Space**: O(1)

#### From End:
```cpp
void deleteFromTail(ListNode*& head) {
    if (!head) return;
    
    if (!head->next) {
        delete head;
        head = nullptr;
        return;
    }
    
    ListNode* curr = head;
    while (curr->next->next) {
        curr = curr->next;
    }
    
    delete curr->next;
    curr->next = nullptr;
}
```
**Time**: O(n), **Space**: O(1)

#### By Value:
```cpp
void deleteByValue(ListNode*& head, int val) {
    if (!head) return;
    
    if (head->val == val) {
        ListNode* temp = head;
        head = head->next;
        delete temp;
        return;
    }
    
    ListNode* curr = head;
    while (curr->next && curr->next->val != val) {
        curr = curr->next;
    }
    
    if (curr->next) {
        ListNode* temp = curr->next;
        curr->next = curr->next->next;
        delete temp;
    }
}
```
**Time**: O(n), **Space**: O(1)

---

### 3. **Traversal**

#### Forward Traversal:
```cpp
void printList(ListNode* head) {
    ListNode* curr = head;
    while (curr) {
        cout << curr->val << " -> ";
        curr = curr->next;
    }
    cout << "NULL" << endl;
}
```
**Time**: O(n), **Space**: O(1)

#### Recursive Traversal:
```cpp
void printListRecursive(ListNode* head) {
    if (!head) {
        cout << "NULL" << endl;
        return;
    }
    
    cout << head->val << " -> ";
    printListRecursive(head->next);
}
```
**Time**: O(n), **Space**: O(n) - recursion stack

---

### 4. **Searching**

#### Linear Search:
```cpp
bool search(ListNode* head, int val) {
    ListNode* curr = head;
    while (curr) {
        if (curr->val == val) {
            return true;
        }
        curr = curr->next;
    }
    return false;
}
```
**Time**: O(n), **Space**: O(1)

#### Get Node at Position:
```cpp
ListNode* getNodeAtPosition(ListNode* head, int pos) {
    ListNode* curr = head;
    for (int i = 0; i < pos && curr; i++) {
        curr = curr->next;
    }
    return curr;
}
```
**Time**: O(n), **Space**: O(1)

---

## Common Patterns & Techniques

### 1. **Two Pointers Technique**

#### Fast and Slow Pointers (Floyd's Algorithm):
Used for cycle detection and finding middle element.

```cpp
// Find middle of linked list
ListNode* findMiddle(ListNode* head) {
    if (!head) return nullptr;
    
    ListNode* slow = head;
    ListNode* fast = head;
    
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
    }
    
    return slow;
}

// Detect cycle in linked list
bool hasCycle(ListNode* head) {
    if (!head || !head->next) return false;
    
    ListNode* slow = head;
    ListNode* fast = head;
    
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
        
        if (slow == fast) return true;
    }
    
    return false;
}
```

#### Two Pointers with Distance:
Used for finding nth node from end.

```cpp
ListNode* findNthFromEnd(ListNode* head, int n) {
    ListNode* first = head;
    ListNode* second = head;
    
    // Move first pointer n steps ahead
    for (int i = 0; i < n; i++) {
        if (!first) return nullptr;
        first = first->next;
    }
    
    // Move both pointers until first reaches end
    while (first) {
        first = first->next;
        second = second->next;
    }
    
    return second;
}
```

---

### 2. **Reversal Techniques**

#### Iterative Reversal:
```cpp
ListNode* reverseList(ListNode* head) {
    ListNode* prev = nullptr;
    ListNode* curr = head;
    
    while (curr) {
        ListNode* nextTemp = curr->next;
        curr->next = prev;
        prev = curr;
        curr = nextTemp;
    }
    
    return prev;
}
```

#### Recursive Reversal:
```cpp
ListNode* reverseListRecursive(ListNode* head) {
    if (!head || !head->next) {
        return head;
    }
    
    ListNode* reversedHead = reverseListRecursive(head->next);
    head->next->next = head;
    head->next = nullptr;
    
    return reversedHead;
}
```

#### Reverse in Groups:
```cpp
ListNode* reverseKGroup(ListNode* head, int k) {
    // Check if there are k nodes to reverse
    ListNode* curr = head;
    int count = 0;
    
    while (curr && count < k) {
        curr = curr->next;
        count++;
    }
    
    if (count == k) {
        // Reverse first k nodes
        curr = reverseKGroup(curr, k);
        
        while (count > 0) {
            ListNode* tmp = head->next;
            head->next = curr;
            curr = head;
            head = tmp;
            count--;
        }
        
        head = curr;
    }
    
    return head;
}
```

---

### 3. **Merging Techniques**

#### Merge Two Sorted Lists:
```cpp
ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
    ListNode dummy(0);
    ListNode* tail = &dummy;
    
    while (l1 && l2) {
        if (l1->val <= l2->val) {
            tail->next = l1;
            l1 = l1->next;
        } else {
            tail->next = l2;
            l2 = l2->next;
        }
        tail = tail->next;
    }
    
    tail->next = l1 ? l1 : l2;
    return dummy.next;
}
```

#### Merge K Sorted Lists:
```cpp
ListNode* mergeKLists(vector<ListNode*>& lists) {
    if (lists.empty()) return nullptr;
    
    while (lists.size() > 1) {
        vector<ListNode*> mergedLists;
        
        for (int i = 0; i < lists.size(); i += 2) {
            ListNode* l1 = lists[i];
            ListNode* l2 = (i + 1 < lists.size()) ? lists[i + 1] : nullptr;
            mergedLists.push_back(mergeTwoLists(l1, l2));
        }
        
        lists = mergedLists;
    }
    
    return lists[0];
}
```

---

### 4. **Dummy Node Technique**
Used to simplify edge cases in list manipulation.

```cpp
ListNode* removeElements(ListNode* head, int val) {
    ListNode dummy(0);
    dummy.next = head;
    
    ListNode* prev = &dummy;
    ListNode* curr = head;
    
    while (curr) {
        if (curr->val == val) {
            prev->next = curr->next;
            delete curr;
            curr = prev->next;
        } else {
            prev = curr;
            curr = curr->next;
        }
    }
    
    return dummy.next;
}
```

---

### 5. **Stack-based Techniques**
Used for problems requiring backward processing.

```cpp
// Check if linked list is palindrome
bool isPalindrome(ListNode* head) {
    vector<int> values;
    
    // Store values in vector
    ListNode* curr = head;
    while (curr) {
        values.push_back(curr->val);
        curr = curr->next;
    }
    
    // Check palindrome
    int left = 0, right = values.size() - 1;
    while (left < right) {
        if (values[left] != values[right]) {
            return false;
        }
        left++;
        right--;
    }
    
    return true;
}
```

---

### 6. **Hash Set Technique**
Used for cycle detection and intersection problems.

```cpp
// Find intersection of two linked lists using hash set
ListNode* getIntersectionNode(ListNode* headA, ListNode* headB) {
    unordered_set<ListNode*> visited;
    
    // Store all nodes of first list
    ListNode* curr = headA;
    while (curr) {
        visited.insert(curr);
        curr = curr->next;
    }
    
    // Check nodes of second list
    curr = headB;
    while (curr) {
        if (visited.find(curr) != visited.end()) {
            return curr;
        }
        curr = curr->next;
    }
    
    return nullptr;
}
```

---

## Advanced Concepts

### 1. **Skip Lists**
Probabilistic data structure that allows fast search within ordered sequence.

```cpp
struct SkipListNode {
    int val;
    vector<SkipListNode*> forward;
    
    SkipListNode(int value, int level) : val(value), forward(level + 1, nullptr) {}
};

class SkipList {
private:
    SkipListNode* head;
    int maxLevel;
    float probability;
    
public:
    SkipList() : maxLevel(16), probability(0.5) {
        head = new SkipListNode(-1, maxLevel);
    }
    
    int randomLevel() {
        int level = 0;
        while (((float)rand() / RAND_MAX) < probability && level < maxLevel) {
            level++;
        }
        return level;
    }
    
    bool search(int target) {
        SkipListNode* curr = head;
        
        for (int level = maxLevel; level >= 0; level--) {
            while (curr->forward[level] && curr->forward[level]->val < target) {
                curr = curr->forward[level];
            }
        }
        
        curr = curr->forward[0];
        return curr && curr->val == target;
    }
};
```

---

### 2. **Memory Management**
Proper handling of dynamic memory in linked lists.

```cpp
class LinkedList {
private:
    ListNode* head;
    
public:
    LinkedList() : head(nullptr) {}
    
    // Destructor to free memory
    ~LinkedList() {
        clear();
    }
    
    void clear() {
        while (head) {
            ListNode* temp = head;
            head = head->next;
            delete temp;
        }
    }
    
    // Copy constructor
    LinkedList(const LinkedList& other) : head(nullptr) {
        ListNode* curr = other.head;
        while (curr) {
            insertAtTail(curr->val);
            curr = curr->next;
        }
    }
    
    // Assignment operator
    LinkedList& operator=(const LinkedList& other) {
        if (this != &other) {
            clear();
            ListNode* curr = other.head;
            while (curr) {
                insertAtTail(curr->val);
                curr = curr->next;
            }
        }
        return *this;
    }
};
```

---

### 3. **Linked List with Random Pointers**
Special type of linked list where each node has an additional random pointer.

```cpp
struct RandomListNode {
    int val;
    RandomListNode* next;
    RandomListNode* random;
    
    RandomListNode(int x) : val(x), next(nullptr), random(nullptr) {}
};

// Clone linked list with random pointers
RandomListNode* copyRandomList(RandomListNode* head) {
    if (!head) return nullptr;
    
    // Step 1: Create copy nodes interleaved with original
    RandomListNode* curr = head;
    while (curr) {
        RandomListNode* copy = new RandomListNode(curr->val);
        copy->next = curr->next;
        curr->next = copy;
        curr = copy->next;
    }
    
    // Step 2: Set random pointers for copy nodes
    curr = head;
    while (curr) {
        if (curr->random) {
            curr->next->random = curr->random->next;
        }
        curr = curr->next->next;
    }
    
    // Step 3: Separate original and copy lists
    RandomListNode* original = head;
    RandomListNode* copyHead = head->next;
    RandomListNode* copy = copyHead;
    
    while (original) {
        original->next = original->next->next;
        if (copy->next) {
            copy->next = copy->next->next;
        }
        original = original->next;
        copy = copy->next;
    }
    
    return copyHead;
}
```

---

## Time & Space Complexity

### Basic Operations:
| Operation | Singly LL | Doubly LL | Time | Space |
|-----------|-----------|-----------|------|-------|
| **Access** | O(n) | O(n) | Must traverse from head | O(1) |
| **Search** | O(n) | O(n) | Linear search only | O(1) |
| **Insertion (Head)** | O(1) | O(1) | Direct pointer update | O(1) |
| **Insertion (Tail)** | O(n) | O(1)* | Need tail pointer for O(1) | O(1) |
| **Insertion (Middle)** | O(n) | O(n) | Must traverse to position | O(1) |
| **Deletion (Head)** | O(1) | O(1) | Direct pointer update | O(1) |
| **Deletion (Tail)** | O(n) | O(1)* | Need tail pointer for O(1) | O(1) |
| **Deletion (Middle)** | O(n) | O(n) | Must traverse to position | O(1) |

### Algorithm Complexities:
| Algorithm | Time Complexity | Space Complexity |
|-----------|----------------|------------------|
| **Two Pointers (Cycle Detection)** | O(n) | O(1) |
| **Reverse List** | O(n) | O(1) iterative, O(n) recursive |
| **Merge Two Lists** | O(m + n) | O(1) |
| **Find Middle** | O(n) | O(1) |
| **Remove Duplicates** | O(n) | O(1) |
| **Palindrome Check** | O(n) | O(n) or O(1) |

---

## Practice Problems by Category

### **Basic Operations**
1. Insert node at beginning, end, and position
2. Delete node by value and position
3. Search for element in linked list
4. Count nodes in linked list
5. Find length of linked list

### **Two Pointers**
1. Find middle of linked list
2. Detect cycle in linked list
3. Find starting point of cycle
4. Remove nth node from end
5. Check if linked list is palindrome

### **Reversal**
1. Reverse entire linked list
2. Reverse linked list in groups of k
3. Reverse nodes in even positions
4. Reverse alternate nodes
5. Reverse between two positions

### **Merging & Sorting**
1. Merge two sorted linked lists
2. Merge k sorted linked lists
3. Sort linked list (merge sort)
4. Remove duplicates from sorted list
5. Intersection of two linked lists

### **Advanced Problems**
1. Clone linked list with random pointers
2. Flatten multilevel linked list
3. Add two numbers represented as linked lists
4. Rotate linked list by k positions
5. Delete nodes with greater value on right

### **Design Problems**
1. Design LRU cache using linked list
2. Design browser history
3. Design music playlist
4. Implement stack using linked list
5. Implement queue using linked list

---

## Key Takeaways

### **When to Use Linked Lists:**
- Frequent insertions/deletions at beginning
- Unknown or dynamic size
- No need for random access
- Memory usage is a concern (no wasted space)

### **When NOT to Use Linked Lists:**
- Need random access to elements
- Frequent searching required
- Cache performance is critical
- Memory is limited (pointer overhead)

### **Common Patterns:**
1. **Two Pointers**: Most cycle and middle-finding problems
2. **Dummy Node**: Simplifies edge cases in manipulation
3. **Stack/Recursion**: For problems requiring backward processing
4. **Hash Set**: For intersection and duplicate detection

### **Common Mistakes:**
- Memory leaks (not freeing deleted nodes)
- Null pointer dereferencing
- Losing reference to head node
- Infinite loops in circular lists
- Not handling empty list edge cases

### **Optimization Tips:**
- Use dummy nodes to simplify code
- Keep track of tail pointer for O(1) insertion at end
- Use two pointers to solve in single pass
- Consider space-time tradeoffs (hash set vs two pointers)

---

This comprehensive guide covers all essential linked list concepts for competitive programming and technical interviews. Master these patterns and you'll be able to solve any linked list problem efficiently! 🚀
