# Day 13 Notes — AVL, Heap & Priority Queue

## Key Concepts Learned
- AVL balance factor: height(left) - height(right), valid values: -1, 0, +1
- 4 rotation cases: LL (right rotate), RR (left rotate), LR (left-right), RL (right-left)
- Heap complete binary tree property: all levels filled except last (left-aligned)
- Min heap: parent ≤ children; Max heap: parent ≥ children
- Heap array indices: parent at i, children at 2i+1 and 2i+2
- PriorityQueue comparator: (a,b) -> a-b is MIN, (a,b) -> b-a is MAX

## Important Algorithms

**AVL Right Rotation:**
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

**Heap Insert (Heapify Up):**
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

**Top-K Pattern:**
```java
// Min heap of size K for Kth largest
PriorityQueue<Integer> minHeap = new PriorityQueue<>();
for (int num : nums) {
    minHeap.offer(num);
    if (minHeap.size() > k) minHeap.poll();
}
return minHeap.peek(); // Kth largest
```

## Questions & Doubts
- When to use AVL vs Red-Black trees? → AVL for read-heavy, RB for write-heavy
- Why is build heap O(n) not O(n log n)? → Half nodes are leaves (no heapify needed)
- Heap vs sorting for Top-K? → Heap O(n log k) better than sort O(n log n) when k << n

## Mistakes & Corrections
- Mistake: Forgot to update height after rotation → Always update after rotation
- Mistake: Used max heap when needed min heap → Check comparator direction carefully
- Mistake: Wrong parent index → Remember: parent(i) = (i-1)/2, not i/2

## Future Reference
- Practice all 4 AVL rotation cases 10+ times on paper
- Master PriorityQueue comparator syntax (critical for interviews)
- Review two-heaps median finder pattern (Google/Meta favorite)
- Study Red-Black trees (optional, less common in interviews)

## Personal Reflections
- AVL rotations are tricky initially but pattern emerges with practice
- Heap problems are very common in FAANG—worth mastering thoroughly
- Two-heaps pattern is elegant solution for median/stream problems

## Action Items for Tomorrow
- Review Day 13 solutions (15 min)
- Practice explaining AVL rotations verbally
- Solve 3 more heap problems if time permits
- Preview Day 14 (Week 2 Review & Contest)
