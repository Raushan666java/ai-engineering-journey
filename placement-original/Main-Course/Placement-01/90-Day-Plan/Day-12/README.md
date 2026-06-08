# 🌳 Day 12: Trees & Binary Search Trees (Part 1)

## 📋 Overview
**Topic:** Binary Trees, Tree Traversals, Binary Search Trees  
**Difficulty:** Medium  
**Time Required:** 9 hours  
**Prerequisites:** Linked Lists (Day 9-10), Recursion basics  
**Interview Frequency:** ⭐⭐⭐⭐⭐ (Very High - Asked in 80% of technical interviews)

---

## 🎯 Learning Objectives

By the end of Day 12, you will be able to:

### Core Concepts
✅ Understand binary tree structure and terminology (root, leaf, height, depth)  
✅ Implement tree node class and basic tree operations  
✅ Master all tree traversal techniques (DFS and BFS)  
✅ Differentiate between binary tree and binary search tree  
✅ Implement BST insertion, search, and deletion  
✅ Analyze time and space complexity of tree operations  

### Problem-Solving Skills
✅ Solve 10+ tree problems using recursion  
✅ Implement iterative traversals using stack/queue  
✅ Find height, depth, and diameter of trees  
✅ Check if a tree is balanced or symmetric  
✅ Validate if a tree is a valid BST  
✅ Find lowest common ancestor (LCA)  

### Interview Readiness
✅ Explain tree traversals on whiteboard  
✅ Code tree solutions in 20-30 minutes  
✅ Optimize recursive solutions to iterative  
✅ Handle edge cases (null trees, single nodes)  

---

## 📚 Theory & Concepts

### 1. Binary Tree Fundamentals

**Definition:** A binary tree is a hierarchical data structure where each node has at most two children (left and right).

**Key Terminology:**
- **Root:** Top node with no parent
- **Leaf:** Node with no children
- **Height:** Longest path from root to leaf
- **Depth:** Distance from root to a node
- **Level:** All nodes at same depth
- **Balanced:** Height difference ≤ 1 for all nodes

**Types of Binary Trees:**
1. **Full Binary Tree:** Every node has 0 or 2 children
2. **Complete Binary Tree:** All levels filled except last (left-aligned)
3. **Perfect Binary Tree:** All internal nodes have 2 children, all leaves at same level
4. **Balanced Binary Tree:** Height difference between left and right ≤ 1
5. **Degenerate Tree:** Each parent has only one child (linked list)

### 2. Tree Traversals (DFS - Depth First Search)

**Inorder Traversal (Left → Root → Right):**
```java
void inorder(Node root) {
    if (root == null) return;
    inorder(root.left);
    System.out.print(root.val + " ");
    inorder(root.right);
}
```
- **Use Case:** BST gives sorted order
- **Complexity:** Time O(n), Space O(h) where h = height

**Preorder Traversal (Root → Left → Right):**
```java
void preorder(Node root) {
    if (root == null) return;
    System.out.print(root.val + " ");
    preorder(root.left);
    preorder(root.right);
}
```
- **Use Case:** Create copy of tree, prefix expression
- **Complexity:** Time O(n), Space O(h)

**Postorder Traversal (Left → Right → Root):**
```java
void postorder(Node root) {
    if (root == null) return;
    postorder(root.left);
    postorder(root.right);
    System.out.print(root.val + " ");
}
```
- **Use Case:** Delete tree, postfix expression
- **Complexity:** Time O(n), Space O(h)

### 3. Level Order Traversal (BFS - Breadth First Search)

```java
void levelOrder(Node root) {
    if (root == null) return;
    Queue<Node> q = new LinkedList<>();
    q.offer(root);
    while (!q.isEmpty()) {
        Node node = q.poll();
        System.out.print(node.val + " ");
        if (node.left != null) q.offer(node.left);
        if (node.right != null) q.offer(node.right);
    }
}
```
- **Use Case:** Print level by level, shortest path
- **Complexity:** Time O(n), Space O(w) where w = max width

### 4. Binary Search Tree (BST)

**Properties:**
- Left subtree values < root value
- Right subtree values > root value
- No duplicate values (in standard BST)
- Inorder traversal gives sorted sequence

**BST Operations:**

**Insert:**
```java
Node insert(Node root, int val) {
    if (root == null) return new Node(val);
    if (val < root.val) root.left = insert(root.left, val);
    else if (val > root.val) root.right = insert(root.right, val);
    return root;
}
```
- **Time:** O(h) where h = height | Best: O(log n), Worst: O(n)

**Search:**
```java
boolean search(Node root, int val) {
    if (root == null) return false;
    if (root.val == val) return true;
    return val < root.val ? search(root.left, val) : search(root.right, val);
}
```
- **Time:** O(h) | Best: O(log n), Worst: O(n)

**Delete (3 cases):**
1. Node is leaf → Simply remove
2. Node has 1 child → Replace with child
3. Node has 2 children → Replace with inorder successor/predecessor

---

## 💻 Code Files & Implementation

### File Structure
```
Day-12/
├── code/
│   ├── binary_tree_basics.java      # Tree creation, level order
│   ├── tree_traversals.java         # Inorder, Preorder, Postorder
│   ├── bst_operations.java          # BST insert, search, min/max
│   ├── tree_problems.java           # Common problems (depth, balanced)
│   └── practice_problems.java       # 10 interview problems
├── notes.md
├── resources.md
├── study_plan.md
├── progress.md
└── README.md (this file)
```

### Code Examples

**1. Binary Tree Node Class:**
```java
class Node {
    int val;
    Node left, right;
    
    Node(int x) {
        val = x;
        left = right = null;
    }
}
```

**2. Build Sample Tree:**
```java
Node root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
```

**3. Iterative Inorder (Using Stack):**
```java
void inorderIterative(Node root) {
    Stack<Node> stack = new Stack<>();
    Node curr = root;
    while (curr != null || !stack.isEmpty()) {
        while (curr != null) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        System.out.print(curr.val + " ");
        curr = curr.right;
    }
}
```

---

## 🔥 Top 10 Interview Problems (Practice Today)

### Easy Problems
1. **Maximum Depth of Binary Tree** (LC 104)
   - Find height of tree using recursion
   - Time: O(n), Space: O(h)

2. **Symmetric Tree** (LC 101)
   - Check if tree is mirror of itself
   - Use recursion or BFS

3. **Invert Binary Tree** (LC 226)
   - Swap left and right subtrees
   - Recursive solution in 5 lines

4. **Same Tree** (LC 100)
   - Check if two trees are identical
   - Compare structure and values

5. **Balanced Binary Tree** (LC 110)
   - Check if height difference ≤ 1
   - Use height calculation

### Medium Problems
6. **Binary Tree Level Order Traversal** (LC 102)
   - Return 2D list of levels
   - Use BFS with queue

7. **Validate Binary Search Tree** (LC 98)
   - Check BST property for all nodes
   - Use inorder or range checking

8. **Lowest Common Ancestor of BST** (LC 235)
   - Find LCA in BST
   - Use BST property for optimization

9. **Binary Tree Right Side View** (LC 199)
   - Return rightmost node at each level
   - Use level order traversal

10. **Construct Binary Tree from Traversals** (LC 105)
    - Build tree from preorder + inorder
    - Use recursion with index tracking

---

## 📊 Complexity Analysis

### Tree Operations Time Complexity

| Operation | Binary Tree | Balanced BST | Unbalanced BST |
|-----------|-------------|--------------|----------------|
| Search | O(n) | O(log n) | O(n) |
| Insert | O(1) | O(log n) | O(n) |
| Delete | O(n) | O(log n) | O(n) |
| Traversal | O(n) | O(n) | O(n) |
| Height | O(n) | O(log n) | O(n) |

### Space Complexity

| Traversal Type | Space Complexity | Reason |
|----------------|------------------|--------|
| Recursive DFS | O(h) | Recursion stack |
| Iterative DFS | O(h) | Explicit stack |
| BFS (Level Order) | O(w) | Queue width |
| Morris Traversal | O(1) | No extra space |

---

## 🎓 World-Class Resources

### Must-Watch Videos (Total: ~8 hours)
1. **Striver's Tree Series** - [TakeUForward YouTube](https://www.youtube.com/c/takeUforward)
   - Complete 20-hour tree playlist
   - Used by 100K+ placement students

2. **Abdul Bari - Trees** - [YouTube Channel](https://www.youtube.com/@abdul_bari)
   - Best animations for understanding
   - Covers traversals, BST, AVL

3. **NeetCode - Tree Problems** - [YouTube Channel](https://www.youtube.com/@NeetCode)
   - LeetCode problem walkthroughs
   - Clean code solutions

### Must-Read Materials
1. **Cracking the Coding Interview** - Chapter 4: Trees and Graphs
2. **GeeksforGeeks Tree Tutorial** - [GFG Trees](https://www.geeksforgeeks.org/binary-tree-data-structure/)
3. **LeetCode Explore - Binary Tree** - [LC Learn](https://leetcode.com/explore/learn/card/data-structure-tree/)

### Practice Platforms
- **LeetCode:** 250+ tree problems (filter by Easy/Medium)
- **InterviewBit:** Trees section (40+ curated problems)
- **HackerRank:** Data Structures > Trees

### Visualization Tools
- **VisuAlgo:** [visualgo.net/en/bst](https://visualgo.net/en/bst)
- **Data Structure Visualizations:** [usfca.edu](https://www.cs.usfca.edu/~galles/visualization/Algorithms.html)

---

## ⏰ 9-Hour Study Schedule

### Morning Session (9:00 AM - 12:00 PM) - 3 Hours
**Focus: Binary Tree Fundamentals**

- **Hour 1 (9:00-10:00):** Theory & Setup
  - Watch Striver's Binary Tree Introduction (30 min)
  - Read tree fundamentals in notes.md (30 min)
  
- **Hour 2 (10:00-11:00):** Traversals
  - Implement `tree_traversals.java`
  - Run and trace inorder/preorder/postorder
  - Practice on paper with sample trees
  
- **Hour 3 (11:00-12:00):** Level Order
  - Implement `binary_tree_basics.java`
  - Code BFS using queue
  - Solve LC 102 (Binary Tree Level Order)

### Afternoon Session (1:00 PM - 4:00 PM) - 3 Hours
**Focus: BST & Problem Solving**

- **Hour 1 (1:00-2:00):** BST Theory
  - Understand BST properties
  - Watch Abdul Bari BST video (40 min)
  - Read BST notes (20 min)
  
- **Hour 2 (2:00-3:00):** BST Implementation
  - Code `bst_operations.java`
  - Implement insert, search, min, max
  - Test with various inputs
  
- **Hour 3 (3:00-4:00):** Basic Problems
  - Solve LC 104 (Max Depth)
  - Solve LC 110 (Balanced Tree)
  - Solve LC 100 (Same Tree)

### Evening Session (5:00 PM - 8:00 PM) - 3 Hours
**Focus: Practice & Interview Prep**

- **Hour 1 (5:00-6:00):** Medium Problems
  - Solve LC 98 (Validate BST)
  - Solve LC 235 (LCA of BST)
  
- **Hour 2 (6:00-7:00):** More Practice
  - Solve LC 101 (Symmetric Tree)
  - Solve LC 226 (Invert Tree)
  - Solve LC 199 (Right Side View)
  
- **Hour 3 (7:00-8:00):** Review & Mock Interview
  - Review all solutions
  - Practice explaining traversals verbally
  - Do a 30-min mock coding session
  - Update progress.md

---

## 🚀 Quick Start Commands

### Compile All Files
```powershell
cd C:\xampp\htdocs\Placement\Placement-01\90-Day-Plan\Day-12\code
javac *.java
```

### Run Individual Programs
```powershell
# Binary tree level order
java binary_tree_basics

# Tree traversals
java tree_traversals

# BST operations
java bst_operations

# Tree problems
java tree_problems
```

---

## ✅ Success Checklist

### Knowledge Check
- [ ] Can explain difference between binary tree and BST
- [ ] Can implement all 3 DFS traversals from memory
- [ ] Can implement level order traversal using queue
- [ ] Can insert and search in BST
- [ ] Understand when to use each traversal type
- [ ] Can analyze time/space complexity of tree operations

### Coding Check
- [ ] Implemented all traversals (recursive + iterative)
- [ ] Created BST with insert/search/delete
- [ ] Solved 5+ Easy LeetCode tree problems
- [ ] Solved 3+ Medium LeetCode tree problems
- [ ] Can code tree solution in <30 minutes
- [ ] Handled all edge cases (null, single node)

### Interview Prep
- [ ] Can draw and explain traversals on whiteboard
- [ ] Can convert recursive solution to iterative
- [ ] Know top 20 tree interview questions
- [ ] Practiced verbal explanation of solutions
- [ ] Completed mock interview session

---

## 🔄 Common Patterns & Templates

### Pattern 1: Recursive DFS Template
```java
returnType dfs(Node root) {
    // Base case
    if (root == null) return baseValue;
    
    // Recursive calls
    returnType left = dfs(root.left);
    returnType right = dfs(root.right);
    
    // Process current node
    returnType result = process(root.val, left, right);
    return result;
}
```

### Pattern 2: BFS Level Order Template
```java
void levelOrder(Node root) {
    Queue<Node> q = new LinkedList<>();
    q.offer(root);
    while (!q.isEmpty()) {
        int size = q.size();
        for (int i = 0; i < size; i++) {
            Node node = q.poll();
            // Process node
            if (node.left != null) q.offer(node.left);
            if (node.right != null) q.offer(node.right);
        }
    }
}
```

### Pattern 3: BST Search Template
```java
Node search(Node root, int target) {
    if (root == null || root.val == target) return root;
    if (target < root.val) return search(root.left, target);
    return search(root.right, target);
}
```

---

## ⚠️ Common Mistakes & How to Avoid

### Mistake 1: Forgetting Null Checks
```java
// Wrong
int height = 1 + Math.max(height(root.left), height(root.right));

// Correct
if (root == null) return 0;
int height = 1 + Math.max(height(root.left), height(root.right));
```

### Mistake 2: Confusing Traversal Orders
- **Tip:** Remember "In" = in the middle, "Pre" = before, "Post" = after

### Mistake 3: Wrong BST Validation
```java
// Wrong - Only checks immediate children
boolean isValidBST(Node root) {
    if (root.left.val >= root.val) return false;
    return true;
}

// Correct - Checks entire subtree with range
boolean isValidBST(Node root, long min, long max) {
    if (root == null) return true;
    if (root.val <= min || root.val >= max) return false;
    return isValidBST(root.left, min, root.val) && 
           isValidBST(root.right, root.val, max);
}
```

---

## 🎯 Interview Tips

1. **Start with clarification:**
   - "Is this a binary tree or BST?"
   - "Can there be duplicate values?"
   - "What should I return for empty tree?"

2. **Think out loud:**
   - "I'll use level order traversal because..."
   - "The time complexity will be O(n) because we visit each node once"

3. **Test with examples:**
   - Draw small tree on paper
   - Trace through your algorithm
   - Check edge cases

4. **Optimize if asked:**
   - "I can optimize from recursive to iterative to save space"
   - "Using Morris traversal, I can reduce space to O(1)"

---

## 📈 Progress Tracking

### Update Your Progress
After completing Day 12, update `progress.md` with:
- Time spent on each session
- Problems solved (with LeetCode numbers)
- Concepts mastered
- Areas needing more practice

### Next Steps
- **Day 13:** Advanced Trees (AVL, Red-Black, Segment Trees)
- **Day 14:** Review Week 2 + Contest

---

## 🏆 Day 12 Goals Summary

**Primary Goal:** Master binary trees and BST fundamentals  
**Secondary Goal:** Solve 10+ tree interview problems  
**Stretch Goal:** Implement iterative traversals and advanced BST operations  

**Expected Outcome:** You should be able to confidently solve Easy and Medium tree problems in interviews and explain your approach clearly.

---

## 📞 Need Help?

- **LeetCode Discuss:** [leetcode.com/discuss](https://leetcode.com/discuss/)
- **Reddit:** r/leetcode, r/cscareerquestions
- **Discord:** NeetCode, AlgoExpert communities
- **Our Code:** Review `tree_traversals.java` and `bst_operations.java`

---

**Remember:** Trees are in 80% of technical interviews. Master them today! 🌳🚀

**Start Time:** _______  
**End Time:** _______  
**Problems Solved:** _______  
**Confidence Level (1-10):** _______
