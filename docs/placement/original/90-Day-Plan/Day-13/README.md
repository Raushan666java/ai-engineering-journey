# 🌲 Day 13: Advanced Trees - AVL, Heap & Priority Queue

## 📋 Overview
**Topic:** AVL Trees, Min/Max Heap, Priority Queue, Self-Balancing Trees  
**Difficulty:** Hard  
**Time Required:** 9 hours  
**Prerequisites:** Binary Trees (Day 12), BST operations, Tree rotations  
**Interview Frequency:** ⭐⭐⭐⭐ (High - Asked in 60% of senior/advanced interviews)

---

## 🎯 Learning Objectives

By the end of Day 13, you will master:

### AVL Trees
✅ Understand self-balancing concept and balance factor  
✅ Implement all 4 rotation types (LL, RR, LR, RL)  
✅ Insert elements maintaining AVL property  
✅ Delete elements with rebalancing  
✅ Analyze time complexity (guaranteed O(log n))  

### Heap Data Structure
✅ Understand complete binary tree property  
✅ Implement Min Heap and Max Heap from scratch  
✅ Perform heapify operations (up and down)  
✅ Build heap from array in O(n)  
✅ Use heap for priority-based problems  

### Priority Queue
✅ Master Java PriorityQueue class  
✅ Solve Top-K problems efficiently  
✅ Implement median finder using two heaps  
✅ Merge K sorted lists/arrays  
✅ Apply heap to scheduling problems  

### Interview Mastery
✅ Solve 15+ heap/AVL problems  
✅ Explain rotation logic on whiteboard  
✅ Optimize brute force to heap solutions  
✅ Handle edge cases in balancing  

---

## 📚 Theory & Concepts

### 1. AVL Trees (Adelson-Velsky and Landis)

**Definition:** Self-balancing BST where height difference between left and right subtrees ≤ 1 for all nodes.

**Balance Factor:**
```
Balance Factor = height(left subtree) - height(right subtree)
Valid values: -1, 0, +1
```

**Four Rotation Cases:**

1. **Left-Left (LL) Case:**
   - Balance Factor > 1 and insertion in left subtree's left
   - Fix: Single Right Rotation

2. **Right-Right (RR) Case:**
   - Balance Factor < -1 and insertion in right subtree's right
   - Fix: Single Left Rotation

3. **Left-Right (LR) Case:**
   - Balance Factor > 1 and insertion in left subtree's right
   - Fix: Left rotation on left child, then right rotation on node

4. **Right-Left (RL) Case:**
   - Balance Factor < -1 and insertion in right subtree's left
   - Fix: Right rotation on right child, then left rotation on node

**Time Complexity:**
- Search: O(log n) - guaranteed (unlike BST's O(n) worst case)
- Insert: O(log n)
- Delete: O(log n)
- Height always ≤ 1.44 * log(n)

**Code Example:**
```java
AVLNode rightRotate(AVLNode y) {
    AVLNode x = y.left;
    AVLNode T2 = x.right;
    x.right = y;
    y.left = T2;
    y.height = max(height(y.left), height(y.right)) + 1;
    x.height = max(height(x.left), height(x.right)) + 1;
    return x;
}
```

---

### 2. Heap Data Structure

**Definition:** Complete binary tree where parent is always smaller (min-heap) or larger (max-heap) than children.

**Properties:**
1. Complete binary tree (all levels filled except possibly last, filled left to right)
2. Min Heap: parent ≤ children
3. Max Heap: parent ≥ children
4. Array representation: parent at i, children at 2i+1 and 2i+2

**Heap Operations:**

**Insert (Heapify Up):**
```java
void insert(int val) {
    heap.add(val);
    int i = heap.size() - 1;
    while (i > 0 && heap.get(parent(i)) > heap.get(i)) {
        swap(i, parent(i));
        i = parent(i);
    }
}
```
- Time: O(log n)

**Extract Min/Max (Heapify Down):**
```java
int extractMin() {
    int min = heap.get(0);
    heap.set(0, heap.remove(heap.size() - 1));
    heapifyDown(0);
    return min;
}
```
- Time: O(log n)

**Build Heap:**
```java
void buildHeap(int[] arr) {
    for (int i = arr.length / 2 - 1; i >= 0; i--) {
        heapifyDown(i);
    }
}
```
- Time: O(n) - not O(n log n)!

---

### 3. Priority Queue

**Java PriorityQueue:**
```java
// Min Heap (default)
PriorityQueue<Integer> minHeap = new PriorityQueue<>();

// Max Heap
PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a, b) -> b - a);

// Custom comparator
PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[0] - b[0]);
```

**Common Patterns:**

1. **Top K Elements:**
   - Use min heap of size K
   - Time: O(n log k)

2. **Kth Largest:**
   - Min heap of size K
   - Answer: heap.peek()

3. **Merge K Sorted:**
   - Min heap with (value, list_index, element_index)
   - Time: O(n log k)

4. **Median Finder:**
   - Two heaps: maxHeap (lower half), minHeap (upper half)
   - Balance sizes
   - Median: avg of tops or single top

---

## 💻 Code Files & Implementation

### File Structure
```
Day-13/
├── code/
│   ├── avl_tree.java                  ✅ AVL insert with rotations
│   ├── min_heap.java                  ✅ Min heap implementation
│   ├── priority_queue_examples.java   ✅ Top-K, merge K sorted
│   ├── heap_problems.java             ✅ Median finder, K closest
│   └── practice_problems.java         ✅ 15 problems
├── notes/
│   ├── avl_notes.md
│   ├── heap_notes.md
│   └── complexity_analysis.md
├── resources/
│   ├── visualization_guides.md
│   ├── interview_patterns.md
│   └── cheatsheet.md
├── README.md (this file)
├── study_plan.md
├── progress.md
├── notes.md
└── resources.md
```

---

## 🔥 Top 15 Interview Problems

### Heap Problems (High Frequency)

1. **Kth Largest Element** (LC 215) - Medium ⭐⭐⭐⭐⭐
   - Use min heap of size K
   - Asked by: Amazon, Google, Meta

2. **Top K Frequent Elements** (LC 347) - Medium ⭐⭐⭐⭐⭐
   - Hash map + min heap
   - Asked by: Amazon, Microsoft

3. **Find Median from Data Stream** (LC 295) - Hard ⭐⭐⭐⭐⭐
   - Two heaps approach
   - Asked by: Google, Meta, Amazon

4. **Merge K Sorted Lists** (LC 23) - Hard ⭐⭐⭐⭐
   - Min heap with list pointers
   - Asked by: Amazon, Microsoft, Google

5. **K Closest Points to Origin** (LC 973) - Medium ⭐⭐⭐⭐
   - Max heap of size K
   - Asked by: Amazon, Meta

6. **Task Scheduler** (LC 621) - Medium ⭐⭐⭐⭐
   - Max heap + cooldown tracking
   - Asked by: Amazon, Google

7. **Reorganize String** (LC 767) - Medium ⭐⭐⭐
   - Max heap for frequency
   - Asked by: Google, Meta

8. **Sliding Window Maximum** (LC 239) - Hard ⭐⭐⭐⭐
   - Deque or heap approach
   - Asked by: Amazon, Google

9. **Minimum Cost to Connect Sticks** (LC 1167) - Medium ⭐⭐⭐
   - Min heap greedy
   - Asked by: Amazon

10. **K Pairs with Smallest Sums** (LC 373) - Medium ⭐⭐⭐
    - Min heap with indices
    - Asked by: Google

### AVL Tree Problems

11. **Balanced Binary Tree** (LC 110) - Easy ⭐⭐⭐⭐
    - Check balance factor ≤ 1

12. **Implement AVL Insert** - Hard ⭐⭐⭐
    - 4 rotation cases

13. **Implement AVL Delete** - Hard ⭐⭐
    - Rebalance after deletion

14. **Convert Sorted Array to AVL** - Medium ⭐⭐⭐
    - Divide and conquer

15. **Validate AVL Tree** - Medium ⭐⭐
    - Check BST + balance property

---

## 📊 Complexity Comparison

| Operation | BST (worst) | AVL Tree | Heap | Priority Queue |
|-----------|-------------|----------|------|----------------|
| Insert | O(n) | O(log n) | O(log n) | O(log n) |
| Delete | O(n) | O(log n) | O(log n) | O(log n) |
| Search | O(n) | O(log n) | O(n) | O(n) |
| Find Min/Max | O(n) | O(log n) | O(1) | O(1) |
| Build | O(n log n) | O(n log n) | O(n) | O(n) |
| Space | O(n) | O(n) | O(n) | O(n) |

---

## ⏰ 9-Hour Study Schedule

### Morning (9:00 AM - 12:00 PM) - AVL Trees

**Hour 1: AVL Theory**
- Watch Abdul Bari AVL video (40 min)
- Read rotation concepts
- Draw rotation diagrams on paper

**Hour 2: AVL Implementation**
- Code `avl_tree.java`
- Implement all 4 rotations
- Test with sample insertions

**Hour 3: AVL Practice**
- Solve LC 110 (Balanced Tree)
- Implement AVL delete (bonus)
- Trace rotations manually

### Afternoon (1:00 PM - 4:00 PM) - Heap Fundamentals

**Hour 1: Heap Theory**
- Watch heap visualization videos
- Understand heapify operations
- Read `heap_notes.md`

**Hour 2: Heap Implementation**
- Code `min_heap.java` from scratch
- Implement insert and extractMin
- Test heapify operations

**Hour 3: Heap Problems**
- Solve LC 215 (Kth Largest)
- Solve LC 347 (Top K Frequent)
- Code `heap_problems.java`

### Evening (5:00 PM - 8:00 PM) - Priority Queue Mastery

**Hour 1: PriorityQueue Practice**
- Learn Java PriorityQueue API
- Code `priority_queue_examples.java`
- Solve merge K sorted arrays

**Hour 2: Advanced Heap Problems**
- Solve LC 295 (Median Finder) ⭐
- Solve LC 973 (K Closest Points)
- Solve LC 23 (Merge K Lists)

**Hour 3: Contest & Review**
- Solve 3 more heap problems
- Review all code
- Update progress.md
- Practice verbal explanations

---

## 🚀 Quick Start

```powershell
# Navigate and compile
cd C:\xampp\htdocs\Placement\Placement-01\90-Day-Plan\Day-13\code
javac *.java

# Run AVL Tree
java avl_tree
# Output: Preorder traversal after insertions with auto-balancing

# Run Min Heap
java min_heap
# Output: Heap operations demo

# Run Priority Queue Examples
java priority_queue_examples
# Output: Kth largest, merge K arrays, top K frequent

# Run Heap Problems
java heap_problems
# Output: Median finder, K closest points, reorganize string
```

---

## ✅ Day 13 Checklist

### Knowledge
- [ ] Understand AVL balance factor and invariants
- [ ] Can identify all 4 rotation cases
- [ ] Know heap vs BST vs AVL differences
- [ ] Understand heapify up vs heapify down
- [ ] Master PriorityQueue comparator syntax

### Coding
- [ ] Implemented AVL with rotations
- [ ] Built min heap from scratch
- [ ] Solved Kth largest problem
- [ ] Solved median finder (2 heaps)
- [ ] Solved merge K sorted lists
- [ ] Completed 10+ heap problems

### Interview Prep
- [ ] Can draw and explain rotations
- [ ] Can code heap on whiteboard
- [ ] Know when to use heap vs sorting
- [ ] Practiced Top-K pattern
- [ ] Solved 15 total problems

---

## 🎓 World-Class Resources

**See `resources.md` for:**
- Striver's AVL & Heap series
- Abdul Bari animations
- VisuAlgo heap visualizations
- LeetCode Top 100 heap problems
- FAANG company-specific problems
- GitHub repos with solutions

---

## 🏆 Success Metrics

**Minimum Goals:**
- Compile all 5 code files ✅
- Solve 10 heap problems
- Understand all rotations
- Complete 9-hour session

**Stretch Goals:**
- Solve 15 problems
- Implement AVL delete
- Build heap in O(n)
- Score 8+ on self-assessment

---

**Day 13 is challenging but mastering AVL and Heaps opens doors to advanced algorithms like Dijkstra, Huffman Coding, and system design problems!** 🚀

**Compilation Status:** ✅ All files compile successfully  
**Test Status:** ✅ AVL and Min Heap verified working  
**Ready to Start:** ✅ Begin with AVL theory video!
