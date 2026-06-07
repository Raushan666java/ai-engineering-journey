# Day 14 Quick Reference: Week 2 Review

## 📚 Topics Covered in Week 2

### Day 8: Arrays & Time Complexity
- **Big O Notation:** O(1), O(n), O(log n), O(n²)
- **Array operations:** Access O(1), Search O(n), Insert O(n)
- **Amortized complexity:** Dynamic array resizing

### Day 9: Collections Framework
- **List:** ArrayList (dynamic), LinkedList (doubly linked)
- **Set:** HashSet (O(1) ops), TreeSet (O(log n) sorted)
- **Map:** HashMap (key-value), TreeMap (sorted keys)

### Day 10: Streams & Lambda
- **Stream operations:** filter, map, reduce, collect
- **Functional interfaces:** Predicate, Function, Consumer
- **Method references:** Class::method

### Day 11: HashMap & Cycle Detection
- **Hash function:** key → hashCode() → index
- **Collision handling:** Separate chaining, open addressing
- **Floyd's algorithm:** Fast/slow pointers for cycles

### Day 12: Trees & BST
- **DFS:** Inorder (LNR), Preorder (NLR), Postorder (LRN)
- **BFS:** Level order using Queue
- **BST property:** Left < Root < Right

### Day 13: AVL & Heap
- **AVL balance:** |left height - right height| ≤ 1
- **Rotations:** LL (right), RR (left), LR, RL
- **Heap:** Min heap (parent < children), Max heap (parent > children)

---

## ⚡ Quick Code Snippets

### Two Pointer Pattern
```java
int left = 0, right = arr.length - 1;
while (left < right) {
    int sum = arr[left] + arr[right];
    if (sum == target) return new int[]{left, right};
    else if (sum < target) left++;
    else right--;
}
```

### HashMap Two-Sum
```java
Map<Integer, Integer> map = new HashMap<>();
for (int i = 0; i < nums.length; i++) {
    int complement = target - nums[i];
    if (map.containsKey(complement)) {
        return new int[]{map.get(complement), i};
    }
    map.put(nums[i], i);
}
```

### Floyd's Cycle Detection
```java
ListNode slow = head, fast = head;
while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) return true; // Cycle found
}
return false;
```

### Binary Tree Inorder Traversal
```java
void inorder(TreeNode root) {
    if (root == null) return;
    inorder(root.left);
    System.out.print(root.val + " ");
    inorder(root.right);
}
```

### Level Order Traversal (BFS)
```java
Queue<TreeNode> queue = new LinkedList<>();
queue.offer(root);
while (!queue.isEmpty()) {
    TreeNode node = queue.poll();
    System.out.print(node.val + " ");
    if (node.left != null) queue.offer(node.left);
    if (node.right != null) queue.offer(node.right);
}
```

### BST Validation
```java
boolean isValidBST(TreeNode root, long min, long max) {
    if (root == null) return true;
    if (root.val <= min || root.val >= max) return false;
    return isValidBST(root.left, min, root.val) && 
           isValidBST(root.right, root.val, max);
}
```

### Min Heap Top-K Pattern
```java
PriorityQueue<Integer> minHeap = new PriorityQueue<>();
for (int num : nums) {
    minHeap.offer(num);
    if (minHeap.size() > k) {
        minHeap.poll(); // Remove smallest
    }
}
return minHeap.peek(); // Kth largest
```

### Two Heaps for Median
```java
PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
PriorityQueue<Integer> minHeap = new PriorityQueue<>();

void addNum(int num) {
    maxHeap.offer(num);
    minHeap.offer(maxHeap.poll());
    if (maxHeap.size() < minHeap.size()) {
        maxHeap.offer(minHeap.poll());
    }
}

double findMedian() {
    return maxHeap.size() > minHeap.size() ? maxHeap.peek() 
           : (maxHeap.peek() + minHeap.peek()) / 2.0;
}
```

---

## 🎯 Common Patterns Recognition

### When to Use What

| Problem Type | Data Structure | Pattern | Example |
|--------------|----------------|---------|---------|
| Two Sum | HashMap | Hash lookup | LC 1 |
| Sorted array search | Binary Search | Two pointer | LC 167 |
| Cycle in linked list | Fast/Slow | Floyd's | LC 141 |
| Frequency counting | HashMap | Counter | LC 49, 347 |
| Level order traversal | Queue | BFS | LC 102 |
| Tree path problems | Recursion | DFS | LC 124 |
| Top K elements | Min Heap | Priority Queue | LC 215 |
| Kth largest | Min Heap (size K) | Top-K | LC 215 |
| Median stream | Two Heaps | Max+Min heap | LC 295 |
| Merge K sorted | Min Heap | Priority Queue | LC 23 |

---

## 🧠 Time Complexity Cheat Sheet

### Data Structure Operations

**Array:**
- Access: O(1)
- Search: O(n)
- Insert (end): O(1) amortized
- Insert (middle): O(n)
- Delete: O(n)

**HashMap:**
- Insert: O(1) average, O(n) worst
- Search: O(1) average, O(n) worst
- Delete: O(1) average, O(n) worst

**LinkedList:**
- Access: O(n)
- Search: O(n)
- Insert (with ref): O(1)
- Delete (with ref): O(1)

**Binary Search Tree (Balanced):**
- Search: O(log n)
- Insert: O(log n)
- Delete: O(log n)

**Heap:**
- Insert: O(log n)
- Extract Min/Max: O(log n)
- Peek: O(1)
- Build heap: O(n)

**AVL Tree:**
- Search/Insert/Delete: O(log n)
- Rotation: O(1)

---

## ❌ Common Mistakes to Avoid

### Arrays
- ❌ Off-by-one errors in loops
- ✅ Use `arr.length - 1` for last index
- ❌ Modifying array while iterating
- ✅ Use separate index or iterate backwards

### HashMap
- ❌ Null pointer on `.get()` when key doesn't exist
- ✅ Use `.containsKey()` or `.getOrDefault()`
- ❌ Using objects without overriding `.hashCode()` and `.equals()`
- ✅ Override both or use built-in types

### Linked Lists
- ❌ Losing reference to head
- ✅ Use dummy node
- ❌ Not handling single node case
- ✅ Check `head.next != null`

### Trees
- ❌ Forgetting base case in recursion
- ✅ Always check `root == null`
- ❌ Mixing up inorder/preorder/postorder
- ✅ Remember: Inorder = LNR, Preorder = NLR, Postorder = LRN

### Heap
- ❌ Using max heap when min heap needed
- ✅ For Kth largest, use min heap of size K
- ❌ Forgetting to poll when heap size exceeds K
- ✅ Always maintain heap size

---

## 🔑 Key Insights from Week 2

### Problem-Solving Strategies

1. **Pattern Recognition:**
   - See "two sum" → think HashMap
   - See "Kth largest" → think Min Heap
   - See "sorted array" → think Two Pointer or Binary Search
   - See "tree levels" → think BFS/Queue

2. **Optimization Steps:**
   - Start with brute force (understand problem)
   - Identify bottleneck (what's taking O(n²)?)
   - Apply data structure (HashMap, Heap, etc.)
   - Test edge cases (null, empty, single element)

3. **Edge Cases Checklist:**
   - Empty input ([], null)
   - Single element ([1])
   - Duplicates ([1,1,1])
   - Negative numbers ([-1, -2])
   - Large numbers (Integer.MAX_VALUE)

---

## 📝 Contest Day Notes

### Before Contest
- [ ] Review all 30 problems from study_plan
- [ ] Warm up with 3 easy problems
- [ ] Set 90-minute timer
- [ ] Have templates ready (TreeNode, ListNode classes)

### During Contest
- **Time Management:**
  - Easy: 10-15 min each
  - Medium: 20-25 min each
  - Hard: 15+ min (attempt, may not finish)
- **Strategy:**
  - Read all problems first (5 min)
  - Solve easiest first (build confidence)
  - Don't get stuck (30 min rule)
- **Debugging:**
  - Test with example inputs
  - Check edge cases
  - Print intermediate values

### After Contest
- [ ] Review ALL problems (even solved)
- [ ] Understand optimal solutions
- [ ] Note new patterns learned
- [ ] Update mistakes list

---

## 🏆 Week 2 Achievements

### What You've Mastered
- ✅ Analyzed time/space complexity
- ✅ Used HashMap for O(1) lookups
- ✅ Detected cycles with Floyd's algorithm
- ✅ Implemented all tree traversals
- ✅ Built AVL tree with rotations
- ✅ Solved Top-K problems with heaps
- ✅ Applied 10+ problem-solving patterns

### Interview Readiness
- **Arrays:** Can solve Two Sum, 3Sum, sliding window problems
- **HashMap:** Frequency counting, anagram detection
- **Linked Lists:** Reversal, cycle detection, merge
- **Trees:** All traversals, BST validation, LCA
- **Heap:** Kth largest, top K frequent, median stream

---

## 🚀 Next Steps

### For Weak Areas
- **Arrays:** Practice more sliding window problems (LC 3, 209, 438)
- **Trees:** Focus on hard path problems (LC 124, 543)
- **Heap:** Master two-heap technique (LC 295, 480)

### For Week 3 Preparation
- Topics: Sorting, Searching, Recursion, Dynamic Programming
- Brush up on: Merge sort, Quick sort, Binary search variants
- Preview: DP concepts (memoization, tabulation)

---

**Use this as quick reference during contest! Good luck! 🎯**
