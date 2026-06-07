# 🚀 **DAY 7: LINKED LIST FUNDAMENTALS & JAVA COLLECTIONS FRAMEWORK**
## Complete Study Plan for Day 7 of 90-Day Placement Preparation

---

## 📅 **DAY 7 OVERVIEW**
**Date**: December 31, 2025 (Week 1 Completion)  
**Focus**: Linked List Data Structure + Java Collections Framework  
**Total Study Time**: 9 hours  
**Target**: Master linked list operations and Java collection interfaces  
**Week 1 Review**: Arrays, Strings, Two-Pointer, Sliding Window, Hashing

---

## 🕐 **MORNING SESSION (6:00 AM - 9:00 AM)**

### **6:00 AM - 7:30 AM: DSA - Linked List Theory & Implementation (1.5 hours)**

#### 📚 **Learning Objectives**
- Understand linked list structure and memory allocation
- Learn types: Singly, Doubly, Circular linked lists
- Master basic operations: insertion, deletion, traversal
- Compare linked list vs array trade-offs

#### **Study Resources**
- **GeeksforGeeks**: [Linked List Data Structure](https://www.geeksforgeeks.org/data-structures/linked-list/)
- **Video**: [Linked List by Abdul Bari](https://www.youtube.com/watch?v=HKtYkjd0OWE) (30 min)
- **Video**: [Linked List in Java](https://www.youtube.com/watch?v=SMIq13-FZSE) (20 min)

**📝 Key Concepts:**
```
✅ Linked List Node Structure:
   class Node {
       int data;
       Node next;  // Reference to next node
       
       Node(int data) {
           this.data = data;
           this.next = null;
       }
   }

✅ Types of Linked Lists:
   1. Singly Linked List (next pointer only)
   2. Doubly Linked List (next and prev pointers)
   3. Circular Linked List (last node points to first)

✅ Operations & Time Complexity:
   - Insertion at beginning: O(1)
   - Insertion at end: O(n) - O(1) with tail pointer
   - Insertion at position: O(n)
   - Deletion at beginning: O(1)
   - Deletion at position: O(n)
   - Search: O(n)
   - Traversal: O(n)

✅ Advantages over Arrays:
   - Dynamic size (no pre-allocation needed)
   - Efficient insertions/deletions at beginning
   - No memory waste

✅ Disadvantages:
   - No random access (must traverse)
   - Extra memory for pointers
   - Not cache-friendly
```

#### **📝 Implementation Practice (30 min)**

**Task 1: Basic Singly Linked List Implementation**
```java
class LinkedList {
    Node head;
    
    // Insert at beginning - O(1)
    public void insertAtBeginning(int data) {
        Node newNode = new Node(data);
        newNode.next = head;
        head = newNode;
    }
    
    // Insert at end - O(n)
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
    
    // Delete node with given value - O(n)
    public void delete(int key) {
        if (head == null) return;
        
        // If head node holds the key
        if (head.data == key) {
            head = head.next;
            return;
        }
        
        Node current = head;
        while (current.next != null && current.next.data != key) {
            current = current.next;
        }
        
        if (current.next != null) {
            current.next = current.next.next;
        }
    }
    
    // Display list - O(n)
    public void display() {
        Node current = head;
        while (current != null) {
            System.out.print(current.data + " -> ");
            current = current.next;
        }
        System.out.println("null");
    }
    
    // Get length - O(n)
    public int length() {
        int count = 0;
        Node current = head;
        while (current != null) {
            count++;
            current = current.next;
        }
        return count;
    }
}
```

**Practice Exercise**: Create a linked list and perform:
- Insert 5 elements at beginning
- Insert 3 elements at end
- Delete middle element
- Display the list
- Find length

---

### **7:30 AM - 9:00 AM: Linked List Problem Solving (1.5 hours)**

#### **Problem 1: Reverse Linked List (LeetCode #206)** ⭐⭐
**Difficulty**: Easy  
**Topic**: Linked List Reversal  
**Time**: 25 minutes

**Problem Statement**:
Given the head of a singly linked list, reverse the list and return the reversed list.

**Example**:
```
Input: 1 -> 2 -> 3 -> 4 -> 5
Output: 5 -> 4 -> 3 -> 2 -> 1
```

**Solution Approach**:
```java
// Approach: Three pointers (prev, current, next)
// Time: O(n), Space: O(1)

public Node reverseList(Node head) {
    Node prev = null;
    Node current = head;
    
    while (current != null) {
        Node next = current.next;  // Store next
        current.next = prev;        // Reverse pointer
        prev = current;             // Move prev
        current = next;             // Move current
    }
    
    return prev;  // New head
}

// Recursive approach
public Node reverseRecursive(Node head) {
    // Base case
    if (head == null || head.next == null) {
        return head;
    }
    
    // Recursive call
    Node newHead = reverseRecursive(head.next);
    
    // Reverse the pointer
    head.next.next = head;
    head.next = null;
    
    return newHead;
}
```

**Key Learnings**:
- Iterative vs recursive approaches
- Three-pointer technique
- Edge cases: empty list, single node

---

#### **Problem 2: Middle of the Linked List (LeetCode #876)** ⭐⭐
**Difficulty**: Easy  
**Topic**: Slow-Fast Pointer (Tortoise-Hare)  
**Time**: 20 minutes

**Problem Statement**:
Given the head of a singly linked list, return the middle node. If there are two middle nodes, return the second middle node.

**Example**:
```
Input: 1 -> 2 -> 3 -> 4 -> 5
Output: 3 -> 4 -> 5

Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6
Output: 4 -> 5 -> 6
```

**Solution**:
```java
// Slow-Fast Pointer Technique
// Time: O(n), Space: O(1)

public Node middleNode(Node head) {
    Node slow = head;
    Node fast = head;
    
    // Fast moves 2x speed of slow
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return slow;  // When fast reaches end, slow is at middle
}
```

**Key Learnings**:
- Floyd's cycle detection algorithm foundation
- Two-pointer technique variations
- Even vs odd length handling

---

#### **Problem 3: Merge Two Sorted Lists (LeetCode #21)** ⭐⭐
**Difficulty**: Easy  
**Topic**: Linked List Merging  
**Time**: 25 minutes

**Problem Statement**:
Merge two sorted linked lists and return it as a sorted list.

**Example**:
```
Input: list1 = 1 -> 2 -> 4, list2 = 1 -> 3 -> 4
Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4
```

**Solution**:
```java
// Iterative approach with dummy node
// Time: O(m + n), Space: O(1)

public Node mergeTwoLists(Node list1, Node list2) {
    Node dummy = new Node(0);
    Node current = dummy;
    
    while (list1 != null && list2 != null) {
        if (list1.data <= list2.data) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    
    // Attach remaining nodes
    if (list1 != null) current.next = list1;
    if (list2 != null) current.next = list2;
    
    return dummy.next;
}

// Recursive approach
public Node mergeRecursive(Node l1, Node l2) {
    if (l1 == null) return l2;
    if (l2 == null) return l1;
    
    if (l1.data <= l2.data) {
        l1.next = mergeRecursive(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeRecursive(l1, l2.next);
        return l2;
    }
}
```

---

## 🌅 **AFTERNOON SESSION (2:00 PM - 5:00 PM)**

### **2:00 PM - 3:30 PM: Java Collections Framework (1.5 hours)**

#### 📚 **Collections Framework Overview**

**Study Resources**:
- **Java Docs**: [Collections Framework](https://docs.oracle.com/javase/8/docs/technotes/guides/collections/overview.html)
- **Video**: [Java Collections by Telusko](https://www.youtube.com/watch?v=GdAon80-0KA) (25 min)

**📝 Key Concepts:**
```
✅ Collections Hierarchy:
   Collection (Interface)
   ├── List (Interface)
   │   ├── ArrayList
   │   ├── LinkedList
   │   └── Vector
   ├── Set (Interface)
   │   ├── HashSet
   │   ├── LinkedHashSet
   │   └── TreeSet
   └── Queue (Interface)
       ├── PriorityQueue
       └── Deque
   
   Map (Interface)
   ├── HashMap
   ├── LinkedHashMap
   └── TreeMap

✅ List Interface (Ordered Collection):
   - ArrayList: Resizable array, fast random access
   - LinkedList: Doubly-linked list, fast insertions
   - Vector: Synchronized ArrayList (legacy)

✅ Set Interface (No Duplicates):
   - HashSet: Unordered, O(1) operations
   - LinkedHashSet: Maintains insertion order
   - TreeSet: Sorted order, O(log n) operations

✅ Map Interface (Key-Value Pairs):
   - HashMap: Unordered key-value pairs
   - LinkedHashMap: Maintains insertion order
   - TreeMap: Sorted by keys
```

#### **List Interface Deep Dive**

**ArrayList vs LinkedList Comparison**:
```java
import java.util.*;

// ArrayList - Dynamic array
ArrayList<Integer> arrayList = new ArrayList<>();
arrayList.add(10);           // Add at end - O(1) amortized
arrayList.add(0, 5);         // Add at index - O(n)
arrayList.get(0);            // Random access - O(1)
arrayList.remove(0);         // Remove at index - O(n)
arrayList.contains(10);      // Search - O(n)

// LinkedList - Doubly linked list
LinkedList<Integer> linkedList = new LinkedList<>();
linkedList.add(10);          // Add at end - O(1)
linkedList.addFirst(5);      // Add at beginning - O(1)
linkedList.addLast(15);      // Add at end - O(1)
linkedList.get(0);           // Random access - O(n)
linkedList.removeFirst();    // Remove at beginning - O(1)
linkedList.removeLast();     // Remove at end - O(1)

// When to use what:
// ArrayList: Need random access, few insertions/deletions
// LinkedList: Frequent insertions/deletions at ends
```

#### **Common List Operations**
```java
List<String> list = new ArrayList<>();

// Add elements
list.add("Java");
list.add("Python");
list.add("C++");

// Add at index
list.add(1, "JavaScript");  // [Java, JavaScript, Python, C++]

// Get element
String lang = list.get(0);  // "Java"

// Update element
list.set(0, "Kotlin");      // [Kotlin, JavaScript, Python, C++]

// Remove element
list.remove(1);             // [Kotlin, Python, C++]
list.remove("Python");      // [Kotlin, C++]

// Size
int size = list.size();     // 2

// Check if empty
boolean empty = list.isEmpty();  // false

// Contains
boolean hasKotlin = list.contains("Kotlin");  // true

// Iterate
for (String s : list) {
    System.out.println(s);
}

// Sort
Collections.sort(list);

// Reverse
Collections.reverse(list);

// Clear all
list.clear();
```

---

### **3:30 PM - 5:00 PM: Set and Map Implementation (1.5 hours)**

#### **Set Interface Implementation**
```java
import java.util.*;

// HashSet - Unordered, no duplicates, O(1) operations
Set<Integer> hashSet = new HashSet<>();
hashSet.add(10);
hashSet.add(20);
hashSet.add(10);  // Duplicate, won't be added
System.out.println(hashSet);  // [20, 10] - random order

// LinkedHashSet - Maintains insertion order
Set<Integer> linkedHashSet = new LinkedHashSet<>();
linkedHashSet.add(10);
linkedHashSet.add(20);
linkedHashSet.add(30);
System.out.println(linkedHashSet);  // [10, 20, 30] - insertion order

// TreeSet - Sorted order, O(log n) operations
Set<Integer> treeSet = new TreeSet<>();
treeSet.add(30);
treeSet.add(10);
treeSet.add(20);
System.out.println(treeSet);  // [10, 20, 30] - sorted order

// Common operations
hashSet.contains(10);        // true - O(1)
hashSet.remove(10);          // Removes 10
hashSet.size();              // Get size
hashSet.isEmpty();           // Check empty

// Set operations
Set<Integer> set1 = new HashSet<>(Arrays.asList(1, 2, 3, 4));
Set<Integer> set2 = new HashSet<>(Arrays.asList(3, 4, 5, 6));

// Union
Set<Integer> union = new HashSet<>(set1);
union.addAll(set2);  // [1, 2, 3, 4, 5, 6]

// Intersection
Set<Integer> intersection = new HashSet<>(set1);
intersection.retainAll(set2);  // [3, 4]

// Difference
Set<Integer> difference = new HashSet<>(set1);
difference.removeAll(set2);  // [1, 2]
```

#### **Map Interface Implementation**
```java
import java.util.*;

// HashMap - Key-value pairs, O(1) operations
Map<String, Integer> hashMap = new HashMap<>();
hashMap.put("Alice", 25);
hashMap.put("Bob", 30);
hashMap.put("Charlie", 35);

// Get value
int age = hashMap.get("Alice");  // 25

// Check if key exists
boolean hasAlice = hashMap.containsKey("Alice");  // true

// Check if value exists
boolean has25 = hashMap.containsValue(25);  // true

// Update value
hashMap.put("Alice", 26);  // Updates Alice's age

// Remove
hashMap.remove("Bob");

// Get or default
int defaultAge = hashMap.getOrDefault("David", 0);  // 0

// Iterate through map
for (Map.Entry<String, Integer> entry : hashMap.entrySet()) {
    System.out.println(entry.getKey() + " -> " + entry.getValue());
}

// Iterate keys only
for (String key : hashMap.keySet()) {
    System.out.println(key);
}

// Iterate values only
for (Integer value : hashMap.values()) {
    System.out.println(value);
}

// LinkedHashMap - Maintains insertion order
Map<String, Integer> linkedHashMap = new LinkedHashMap<>();

// TreeMap - Sorted by keys
Map<String, Integer> treeMap = new TreeMap<>();
treeMap.put("Charlie", 35);
treeMap.put("Alice", 25);
treeMap.put("Bob", 30);
System.out.println(treeMap);  // {Alice=25, Bob=30, Charlie=35} - sorted
```

#### **Practical Exercise: Word Frequency Counter**
```java
import java.util.*;

public class WordFrequency {
    public static void main(String[] args) {
        String text = "java is great and java is powerful";
        Map<String, Integer> frequencyMap = new HashMap<>();
        
        String[] words = text.split(" ");
        for (String word : words) {
            frequencyMap.put(word, frequencyMap.getOrDefault(word, 0) + 1);
        }
        
        System.out.println(frequencyMap);
        // {java=2, is=2, great=1, and=1, powerful=1}
    }
}
```

---

## 🌆 **EVENING SESSION (7:00 PM - 10:00 PM)**

### **7:00 PM - 8:30 PM: Advanced Linked List Problems (1.5 hours)**

#### **Problem 4: Linked List Cycle Detection (LeetCode #141)** ⭐⭐⭐
**Difficulty**: Medium  
**Topic**: Floyd's Cycle Detection Algorithm  
**Time**: 30 minutes

**Problem Statement**:
Determine if a linked list has a cycle in it.

**Solution**:
```java
// Floyd's Cycle Detection (Slow-Fast Pointer)
// Time: O(n), Space: O(1)

public boolean hasCycle(Node head) {
    if (head == null || head.next == null) {
        return false;
    }
    
    Node slow = head;
    Node fast = head;
    
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow == fast) {
            return true;  // Cycle detected
        }
    }
    
    return false;
}
```

---

#### **Problem 5: Remove Nth Node From End (LeetCode #19)** ⭐⭐⭐
**Difficulty**: Medium  
**Topic**: Two-pointer technique  
**Time**: 25 minutes

**Problem Statement**:
Remove the nth node from the end of the linked list and return its head.

**Solution**:
```java
// Two-pointer approach (one pass)
// Time: O(n), Space: O(1)

public Node removeNthFromEnd(Node head, int n) {
    Node dummy = new Node(0);
    dummy.next = head;
    Node first = dummy;
    Node second = dummy;
    
    // Move first n+1 steps ahead
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

---

#### **Problem 6: Palindrome Linked List (LeetCode #234)** ⭐⭐⭐
**Difficulty**: Medium  
**Topic**: Linked list manipulation  
**Time**: 35 minutes

**Solution**:
```java
// Approach: Find middle + Reverse second half + Compare
// Time: O(n), Space: O(1)

public boolean isPalindrome(Node head) {
    if (head == null || head.next == null) return true;
    
    // Find middle
    Node slow = head, fast = head;
    while (fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // Reverse second half
    Node secondHalf = reverse(slow.next);
    Node firstHalf = head;
    
    // Compare both halves
    while (secondHalf != null) {
        if (firstHalf.data != secondHalf.data) {
            return false;
        }
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }
    
    return true;
}

private Node reverse(Node head) {
    Node prev = null;
    while (head != null) {
        Node next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}
```

---

### **8:30 PM - 9:30 PM: WEEK 1 COMPLETE REVIEW (1 hour)**

#### **📊 Week 1 Topics Covered:**

**Data Structures Mastered:**
1. ✅ Arrays - Fundamentals, operations, time complexity
2. ✅ Strings - Manipulation, pattern matching
3. ✅ Hashing - HashMap, HashSet, collision resolution
4. ✅ Linked Lists - Singly, operations, reversal

**Algorithms & Techniques:**
1. ✅ Two-Pointer Technique
2. ✅ Sliding Window Pattern
3. ✅ Floyd's Cycle Detection
4. ✅ Time & Space Complexity Analysis

**Java Programming:**
1. ✅ Java Setup & Basics
2. ✅ OOP Fundamentals
3. ✅ Collections Framework (List, Set, Map)
4. ✅ String manipulation

**Problems Solved This Week:** ~30 problems

#### **📝 Week 1 Assessment Test**

**Test yourself with these problems (45 minutes):**
1. Two Sum II (LeetCode #167) - 10 min
2. Longest Palindromic Substring (LeetCode #5) - 15 min
3. Intersection of Two Linked Lists (LeetCode #160) - 20 min

**Scoring:**
- All 3 solved correctly: Excellent! Move to Week 2
- 2 solved correctly: Good! Review one weak area
- 1 or less: Review Week 1 topics before proceeding

---

### **9:30 PM - 10:00 PM: Planning & Progress Update (30 minutes)**

#### **📝 Today's Achievements**
- [ ] Linked list operations mastered
- [ ] 6 linked list problems solved
- [ ] Java Collections Framework learned
- [ ] Week 1 completed and reviewed

#### **📊 Week 1 Statistics Update**
Update your practice tracker:
- Total problems solved: ____
- Total study hours: ____
- Strong areas: ____
- Weak areas to review: ____

#### **🎯 Week 2 Preview: RECURSION & BACKTRACKING**
**Topics Coming:**
- Day 8: Recursion Fundamentals
- Day 9: Backtracking Basics
- Day 10: Trees Introduction
- Day 11: Binary Search Trees
- Day 12: Tree Traversals
- Day 13: Advanced Tree Problems
- Day 14: Week 2 Review & Contest

---

## 📚 **DAY 7 COMPLETE RESOURCE LIST**

### **Video Tutorials**
1. [Linked List Data Structure](https://www.youtube.com/watch?v=HKtYkjd0OWE) - Abdul Bari (30 min)
2. [Java Collections Framework](https://www.youtube.com/watch?v=GdAon80-0KA) - Telusko (25 min)
3. [LinkedList vs ArrayList](https://www.youtube.com/watch?v=LHkxy7hY5Hg) - Coding with John (15 min)

### **Reading Materials**
1. GeeksforGeeks - Linked List Complete Guide
2. Java Documentation - Collections Framework
3. LeetCode - Linked List Study Guide

### **Practice Platforms**
1. LeetCode - Linked List Tag (Easy + Medium)
2. HackerRank - Java Collections
3. Coding Ninjas - Linked List Module

---

## ✅ **DAY 7 COMPLETION CHECKLIST**

### **Morning Session**
- [ ] Linked list theory and implementation studied
- [ ] Reverse Linked List solved (LeetCode #206)
- [ ] Middle of Linked List solved (LeetCode #876)
- [ ] Merge Two Sorted Lists solved (LeetCode #21)

### **Afternoon Session**
- [ ] Java Collections Framework overview learned
- [ ] List interface (ArrayList, LinkedList) implemented
- [ ] Set interface (HashSet, TreeSet) practiced
- [ ] Map interface (HashMap, TreeMap) mastered

### **Evening Session**
- [ ] Linked List Cycle Detection solved (LeetCode #141)
- [ ] Remove Nth Node From End solved (LeetCode #19)
- [ ] Palindrome Linked List solved (LeetCode #234)
- [ ] Week 1 complete review done
- [ ] Week 1 assessment test completed

### **Daily Goals**
- [ ] 6 Linked List problems solved ✅
- [ ] Java Collections Framework mastered ✅
- [ ] Notes created for future reference ✅
- [ ] Progress tracker updated ✅
- [ ] 9 hours study completed ✅

---

## 🎯 **WEEK 1 SUMMARY & ACHIEVEMENTS**

### **🏆 Congratulations! Week 1 Completed!**

**Topics Mastered:**
- Arrays (static & dynamic)
- Strings (manipulation & patterns)
- Two-Pointer Technique
- Sliding Window Pattern
- Hashing (HashMap, HashSet)
- Linked Lists (singly linked)
- Java Collections Framework

**Problems Solved:** 30+ problems  
**Java Concepts:** Basics, OOP, Collections  
**Study Hours:** 63 hours total

**📈 Progress:** 11% of 90-Day Plan Complete

---

## 💡 **KEY TAKEAWAYS FROM DAY 7**

1. **Linked Lists vs Arrays:**
   - Use arrays for random access
   - Use linked lists for frequent insertions/deletions

2. **Floyd's Algorithm:**
   - Slow-fast pointer technique
   - Used for cycle detection and finding middle

3. **Java Collections:**
   - Choose ArrayList for random access
   - Choose LinkedList for frequent modifications
   - Use HashMap for O(1) lookups

4. **Problem-Solving Patterns:**
   - Dummy node simplifies edge cases
   - Two-pointer technique is versatile
   - Always consider space-time trade-offs

---

## 🔥 **MOTIVATIONAL NOTE**

You've completed **Week 1** of your placement preparation journey! 🎉

You've built a strong foundation in:
- Core data structures
- Problem-solving techniques
- Java programming fundamentals

**Remember:**
- Consistency beats intensity
- Every problem solved is progress
- Mistakes are learning opportunities

**Week 2 Challenge:** Master recursion and tree data structures!

**Stay focused, stay consistent, keep coding!** 💪

---

## 📅 **TOMORROW: DAY 8 - RECURSION FUNDAMENTALS**

**Topics:**
- Recursion basics and call stack
- Base case and recursive case
- Recursion vs Iteration
- Classic recursion problems

**Get ready for an exciting week of Trees and Recursion!** 🌳

---

**End of Day 7 Study Plan**  
**Next:** [Day 8 - Recursion Fundamentals](day_8_study_plan.md)  
**Previous:** [Day 6 - Hashing Fundamentals](day_6_study_plan.md)  
**Week 1 Review:** ✅ COMPLETED

---

*Keep up the great work! You're 7.7% done with your 90-day journey!* 🚀
