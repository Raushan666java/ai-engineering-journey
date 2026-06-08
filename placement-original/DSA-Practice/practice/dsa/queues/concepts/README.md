# Queues - Complete Guide

## Overview
Queues are fundamental data structures that follow the First-In-First-Out (FIFO) principle. Elements are added to the rear and removed from the front, making queues ideal for scenarios requiring ordered processing.

## Difficulty Breakdown

### Easy Level (6 problems)
1. **Implement Queue using Stacks (232)** - Design queue with stack operations
2. **First Unique Character (387)** - Find first non-repeating character
3. **Moving Average from Data Stream (346)** - Calculate moving average
4. **Number of Recent Calls (933)** - Count recent ping calls
5. **Design Circular Queue (622)** - Implement circular queue
6. **Maximum Depth of Binary Tree (104)** - BFS approach

### Medium Level (4 problems)
7. **Binary Tree Level Order Traversal (102)** - Level order traversal
8. **Rotting Oranges (994)** - Multi-source BFS
9. **Open the Lock (752)** - BFS with constraints
10. **Perfect Squares (279)** - BFS for minimum steps

### Hard Level (4 problems)
11. **Word Ladder (127)** - BFS for word transformation
12. **Minimum Window Substring (76)** - Sliding window with queue
13. **Sliding Window Maximum (239)** - Deque for maximums
14. **Course Schedule II (210)** - Topological sort with BFS

## Key Concepts

### Queue Types
- **Simple Queue**: Basic FIFO structure
- **Circular Queue**: Fixed size, wraps around
- **Priority Queue**: Elements ordered by priority
- **Deque**: Double-ended queue

### Queue Operations
- **Enqueue**: Add element to rear - O(1)
- **Dequeue**: Remove element from front - O(1)
- **Front/Peek**: View front element - O(1)
- **IsEmpty/Size**: Check status - O(1)

### Time Complexity
- **Array-based**: O(1) for all operations
- **Linked List**: O(1) for all operations
- **Priority Queue**: O(log n) for insert/delete

## Common Patterns
1. **BFS Traversal**: Level-order tree/graph traversal
2. **Sliding Window**: Process elements in windows
3. **Task Scheduling**: Process tasks in order
4. **Cache Implementation**: LRU with queue
5. **Producer-Consumer**: Thread-safe operations

## Interview Tips
- Understand FIFO vs LIFO (stacks)
- Know when to use queue vs stack
- Consider circular queues for fixed buffers
- Think about priority queues for weighted elements
- Be familiar with deque for flexible operations