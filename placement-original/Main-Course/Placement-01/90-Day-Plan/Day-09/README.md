# Day 9: Collections Framework Deep Dive

## 🎯 Learning Objectives
By the end of Day 9, you will:
- Master Java Collections Framework hierarchy
- Understand List, Set, Map, Queue, and Deque interfaces
- Choose the right collection for specific use cases
- Use Collections utility methods effectively
- Implement custom sorting with Comparator
- Understand time complexities of collection operations

## 📚 Topics Covered

### 1. Collections Framework Overview
- Collection hierarchy (Collection, List, Set, Queue)
- Map hierarchy (separate from Collection)
- Choosing the right collection
- Time complexity comparison

### 2. List Interface Implementations
- ArrayList vs LinkedList
- Vector and Stack (legacy)
- When to use which implementation
- Performance characteristics

### 3. Set Interface Implementations
- HashSet (no order, O(1) operations)
- LinkedHashSet (insertion order)
- TreeSet (sorted order)
- Set operations (union, intersection, difference)

### 4. Map Interface Implementations
- HashMap (no order, O(1) operations)
- LinkedHashMap (insertion order)
- TreeMap (sorted by keys)
- Hashtable (legacy, synchronized)
- Working with key-value pairs

### 5. Queue and Deque Interfaces
- Queue operations (offer, poll, peek)
- PriorityQueue (heap-based)
- ArrayDeque (double-ended queue)
- LinkedList as Deque

### 6. Collections Utility Class
- Sorting (sort, reverseOrder)
- Searching (binarySearch)
- Shuffling and rotating
- Synchronization wrappers
- Unmodifiable collections

### 7. Comparator and Comparable
- Natural ordering with Comparable
- Custom ordering with Comparator
- Lambda expressions for sorting
- Chained comparators

## 🗂️ File Structure
```
Day-09/
├── code/
│   ├── list_implementations.java       # ArrayList, LinkedList, Vector
│   ├── set_map_demo.java              # HashSet, TreeSet, HashMap, TreeMap
│   ├── queue_deque_demo.java          # PriorityQueue, ArrayDeque
│   ├── collections_algorithms.java    # Collections utility methods
│   └── practice_problems.java         # 6 collections practice problems
├── notes/
│   ├── collections_overview.md        # Framework hierarchy
│   ├── list_set_notes.md             # List and Set details
│   ├── map_notes.md                   # Map implementations
│   └── performance_guide.md           # Time complexities
├── resources/
│   ├── collections_cheatsheet.md      # Quick reference
│   ├── when_to_use.md                 # Decision guide
│   └── interview_questions.md         # Common interview questions
├── study_plan.md                       # Detailed 9-hour study schedule
├── progress.md                         # Daily progress tracker
└── README.md                           # This file
```

## 💻 Code Examples Overview

### list_implementations.java
- ArrayList operations (add, get, remove, contains)
- LinkedList operations and Deque methods
- Vector demonstration
- Performance comparison
- Converting between arrays and lists

### set_map_demo.java
- HashSet for unique elements
- TreeSet for sorted unique elements
- HashMap for key-value storage
- TreeMap for sorted keys
- Handling duplicates and null values

### queue_deque_demo.java
- PriorityQueue with natural and custom ordering
- ArrayDeque as stack and queue
- Queue operations (offer, poll, peek)
- Deque operations (addFirst, addLast, etc.)

### collections_algorithms.java
- Sorting lists (natural and custom)
- Binary search
- Reversing and shuffling
- Min, max, frequency operations
- Synchronized and unmodifiable wrappers

### practice_problems.java
1. Remove duplicates from list
2. Find k most frequent elements
3. Group anagrams using Map
4. Implement LRU cache
5. Top K frequent words
6. Custom sorting with multiple criteria

## 📖 Study Plan
See [study_plan.md](study_plan.md) for the detailed 9-hour schedule:
- **Morning (3 hours)**: List and Set implementations
- **Afternoon (4 hours)**: Map, Queue, Collections algorithms
- **Evening (2 hours)**: Practice problems and interview prep

## 🎓 Key Concepts to Master

### Collection Hierarchy
```
Collection (interface)
├── List (ordered, allows duplicates)
│   ├── ArrayList
│   ├── LinkedList
│   └── Vector
├── Set (no duplicates)
│   ├── HashSet
│   ├── LinkedHashSet
│   └── TreeSet
└── Queue (FIFO)
    ├── PriorityQueue
    └── ArrayDeque

Map (interface, not part of Collection)
├── HashMap
├── LinkedHashMap
├── TreeMap
└── Hashtable
```

### When to Use What

**ArrayList**: Random access, rare insertions/deletions
**LinkedList**: Frequent insertions/deletions, sequential access
**HashSet**: Fast lookup, no duplicates, no order
**TreeSet**: Sorted unique elements, range queries
**HashMap**: Fast key-value lookup, no order
**TreeMap**: Sorted keys, range queries
**PriorityQueue**: Priority-based processing
**ArrayDeque**: Stack or queue operations

### Time Complexities

| Operation | ArrayList | LinkedList | HashSet | TreeSet | HashMap | TreeMap |
|-----------|-----------|------------|---------|---------|---------|---------|
| Add | O(1)* | O(1) | O(1) | O(log n) | O(1) | O(log n) |
| Remove | O(n) | O(1)** | O(1) | O(log n) | O(1) | O(log n) |
| Get | O(1) | O(n) | - | - | O(1) | O(log n) |
| Contains | O(n) | O(n) | O(1) | O(log n) | O(1) | O(log n) |

*Amortized O(1), worst case O(n) when resizing  
**O(1) if removing from known position

## 🔑 Interview Tips

1. **Know time complexities**: Be ready to explain Big-O for each operation
2. **Understand internal structure**: HashMap (buckets), TreeMap (Red-Black tree)
3. **null handling**: HashMap allows one null key, HashSet allows one null
4. **Fail-fast iterators**: ConcurrentModificationException
5. **Comparator vs Comparable**: When to use each
6. **Collections.sort() vs Arrays.sort()**: Both use TimSort
7. **Synchronized collections**: Use Collections.synchronizedList() or ConcurrentHashMap

## ✅ Success Criteria
- [ ] Understand Collection and Map hierarchies
- [ ] Know when to use ArrayList vs LinkedList
- [ ] Use HashMap and TreeMap effectively
- [ ] Implement custom sorting with Comparator
- [ ] Solve 6 collections practice problems
- [ ] Explain time complexities for common operations
- [ ] Use Collections utility methods

## 🔗 Related Topics
- **Previous**: Day 8 - OOP (Inheritance, Polymorphism, Abstraction)
- **Next**: Day 10 - Generics and Lambda Expressions
- **Related**: Day 5 - Arrays & Basic Collections

## 📚 Additional Resources
- Oracle Java Collections Tutorial
- Effective Java (Joshua Bloch) - Collections chapter
- Java Collections Framework Documentation
- LeetCode Collections problems

## 🎯 Daily Challenge
Implement a custom HashMap from scratch:
- Use array of LinkedLists (chaining for collisions)
- Implement put(), get(), remove() methods
- Handle resizing when load factor > 0.75
- Calculate hash codes properly

---
**Estimated Time**: 9 hours (3h theory + 4h practice + 2h problems)  
**Difficulty**: ⭐⭐⭐⭐ (Medium-High)  
**Prerequisites**: Days 1-8 (Java basics, OOP, Arrays)
