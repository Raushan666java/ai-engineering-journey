# Binary Search Trees

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand BST property: left < root < right for all nodes |
| LO2 | Implement BST search, insertion, and deletion operations |
| LO3 | Understand balanced BST concepts: AVL, Red-Black trees |
| LO4 | Solve BST problems using inorder traversal property |
| LO5 | Implement range queries, floor/ceil, and successor/predecessor |
| LO6 | Convert BST to sorted list and vice versa |

## Introduction

Tries (prefix trees) are specialized trees for efficient string operations. They provide O(m) lookup where m is the key length, making them ideal for autocomplete, spell checking, and IP routing tables.

## Prerequisites

- Tree basics
- String operations


## Theory

Understanding binary search trees is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how binary search trees works in practice.

### Key Concepts

- **Core Principle**: The foundational idea behind binary search trees
- **How It Works**: The mechanism and process involved
- **Why It Matters**: Relevance to AI engineering and real-world applications
- **Trade-offs**: Advantages and limitations to consider

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 10.1 | BST Property | Left < Root < Right, inorder sorted |
| 10.2 | Basic Operations | Search, insert, delete |
| 10.3 | BST Validation | Inorder check, min/max range |
| 10.4 | Successor/Predecessor | Next/previous in sorted order |
| 10.5 | Balanced BSTs | AVL rotations, Red-Black properties |
| 10.6 | Advanced Problems | Floor/ceil, range sum, BST to DLL |

## Chapter Roadmap

```mermaid
flowchart LR
    A[BST] --> B[Property: Left < Root < Right]
    B --> C[Search O(h)]
    B --> D[Insert O(h)]
    B --> E[Delete O(h)]
    C --> F[Balance]
    D --> F
    E --> F
    F --> G[AVL Tree]
    F --> H[Red-Black Tree]
```text


A Binary Search Tree (BST) maintains the ordering property that for every node, all values in the left subtree are less than the node's value, and all values in the right subtree are greater.

## 10.1 BST Property

```python
class BSTNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

## Valid BST

##       5

##      / \

##     3   7

##    / \   \

##   2   4   8
root = BSTNode(5)
root.left = BSTNode(3)
root.right = BSTNode(7)
root.left.left = BSTNode(2)
root.left.right = BSTNode(4)
root.right.right = BSTNode(8)

## Inorder gives sorted order
def inorder(root):
    if not root: return []
    return inorder(root.left) + [root.val] + inorder(root.right)
print(inorder(root))  # [2, 3, 4, 5, 7, 8]
```text

## 10.2 Basic Operations

**Search**:

```python
def search(root, target):
    if not root or root.val == target:
        return root
    if target < root.val:
        return search(root.left, target)
    return search(root.right, target)

def search_iterative(root, target):
    while root and root.val != target:
        if target < root.val:
            root = root.left
        else:
            root = root.right
    return root
```text

**Insert**:

```python
def insert(root, val):
    if not root:
        return BSTNode(val)
    if val < root.val:
        root.left = insert(root.left, val)
    elif val > root.val:
        root.right = insert(root.right, val)
    return root
```text

**Delete** (three cases):

```python
def delete(root, val):
    if not root:
        return None
    if val < root.val:
        root.left = delete(root.left, val)
    elif val > root.val:
        root.right = delete(root.right, val)
    else:
        # Case 1: Leaf node
        if not root.left and not root.right:
            return None
        # Case 2: One child
        if not root.left:
            return root.right
        if not root.right:
            return root.left
        # Case 3: Two children
        successor = min_value_node(root.right)
        root.val = successor.val
        root.right = delete(root.right, successor.val)
    return root

def min_value_node(root):
    while root.left:
        root = root.left
    return root
```text

## 10.3 BST Validation

**Validate BST using min/max range**:

```python
def is_valid_bst(root):
    def validate(node, low, high):
        if not node:
            return True
        if node.val <= low or node.val >= high:
            return False
        return (validate(node.left, low, node.val) and
                validate(node.right, node.val, high))
    return validate(root, float("-inf"), float("inf"))
```text

**Validate BST using inorder**:

```python
def is_valid_bst_inorder(root):
    prev = [float("-inf")]

    def dfs(node):
        if not node: return True
        if not dfs(node.left): return False
        if node.val <= prev[0]: return False
        prev[0] = node.val
        return dfs(node.right)

    return dfs(root)
```text

## 10.4 Successor and Predecessor

**Inorder successor** (next node in inorder):

```python
def inorder_successor(root, target):
    successor = None
    while root:
        if target.val < root.val:
            successor = root
            root = root.left
        else:
            root = root.right
    return successor

def inorder_predecessor(root, target):
    predecessor = None
    while root:
        if target.val > root.val:
            predecessor = root
            root = root.right
        else:
            root = root.left
    return predecessor
```text

## 10.5 Balanced BSTs

**AVL Tree** balances after every insertion/deletion using rotations. Height difference between left and right subtrees is at most 1.

```python
class AVLNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
        self.height = 1

def get_height(node): return node.height if node else 0
def get_balance(node):
    return get_height(node.left) - get_height(node.right) if node else 0

def rotate_right(y):
    x = y.left
    T2 = x.right
    x.right = y
    y.left = T2
    y.height = 1 + max(get_height(y.left), get_height(y.right))
    x.height = 1 + max(get_height(x.left), get_height(x.right))
    return x

def rotate_left(x):
    y = x.right
    T2 = y.left
    y.left = x
    x.right = T2
    x.height = 1 + max(get_height(x.left), get_height(x.right))
    y.height = 1 + max(get_height(y.left), get_height(y.right))
    return y
```text

**Red-Black Tree** properties:
- Each node is either red or black
- Root is black
- Red nodes cannot have red children (no two reds in a row)
- Every path from root to leaf has same number of black nodes

## 10.6 Advanced Problems

**Floor and Ceil in BST**:

```python
    result = None
    while root:
        if root.val == x:
            return root.val
        elif root.val < x:
            result = root.val
            root = root.right
        else:
            root = root.left
    return result

def ceil(root, x):
    result = None
    while root:
        if root.val == x:
            return root.val
        elif root.val > x:
            result = root.val
            root = root.left
        else:
            root = root.right
    return result
```text

**Range sum BST** (sum of values between low and high):

```python
def range_sum_bst(root, low, high):
    if not root: return 0
    if root.val < low:
        return range_sum_bst(root.right, low, high)
    if root.val > high:
        return range_sum_bst(root.left, low, high)
    return (root.val +
            range_sum_bst(root.left, low, high) +
            range_sum_bst(root.right, low, high))
```text

**Convert BST to sorted doubly linked list**:

```python
def bst_to_dll(root):
    def dfs(node):
        nonlocal first, last
        if not node: return
        dfs(node.left)
        if last:
            last.right = node
            node.left = last
        else:
            first = node
        last = node
        dfs(node.right)
    first = last = None
    dfs(root)
    return first
```text

---

## TypeScript Parallel

```typescript
class TreeNode {
    val: number;
    left: TreeNode | null = null;
    right: TreeNode | null = null;
    constructor(val: number) { this.val = val; }
}

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    if (!root || root.val === val) return root;
    return val < root.val ? searchBST(root.left, val) : searchBST(root.right, val);
}

function isValidBST(root: TreeNode | null): boolean {
    function validate(node: TreeNode | null, low: number, high: number): boolean {
        if (!node) return true;
        if (node.val <= low || node.val >= high) return false;
        return validate(node.left, low, node.val) && validate(node.right, node.val, high);
    }
    return validate(root, -Infinity, Infinity);
}
```text

---

## Summary

- BSTs maintain the ordering property left < root < right, enabling O(h) search, insert, and delete
- Inorder traversal of a BST yields values in sorted order, useful for validation and extraction
- BST deletion has three cases: leaf (remove), one child (replace), two children (replace with inorder successor)
- BST validation uses recursive range checking (min/max bounds) to ensure all nodes satisfy the property
- Inorder successor finds the next larger node; it is the minimum of the right subtree or an ancestor
- AVL trees maintain O(log n) height by performing rotations when balance factor exceeds -1 or 1
- Red-Black trees guarantee O(log n) operations with less strict balancing (fewer rotations than AVL)
- Floor/ceil operations navigate the BST by tracking candidates when going left/right
- Range sum queries can be optimized by pruning subtrees that are outside the range
- BSTs are widely used in databases (B-trees), in-memory caches, and language runtimes

## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| BST search | Use while loop iterative approach | Recursion without tail optimization |
| BST validation | Use min/max range percolation | Only checking immediate children |
| Delete with two children | Replace with inorder successor | Copying the entire subtree |
| Balanced BST | Use AVL or Red-Black tree for guaranteed O(log n) | Using unbalanced BST for critical ops |
| Range queries | Prune subtrees outside range | Traversing the entire tree |
| Floor/Ceil | Track candidate while traversing | Traversing all nodes |


## Interview Q&A
<details class="tp-qa-card" data-qid="dsa10-q1">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>
    Q1: What is the BST property? Why is it useful?
  </summary>
  <div class="tp-qa-answer"><p>Left subtree values < root value < right subtree values. This enables O(h) binary search, sorted inorder traversal, and efficient range queries.</p></div>
  <button class="tp-qa-mark-btn">? Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="dsa10-q2">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>
    Q2: How do you delete a node from a BST?
  </summary>
  <div class="tp-qa-answer"><p>Three cases: leaf (remove directly), one child (replace with child), two children (find inorder successor, copy value, delete successor). O(h) time.</p></div>
  <button class="tp-qa-mark-btn">? Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="dsa10-q3">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>
    Q3: How do you validate whether a binary tree is a BST?
  </summary>
  <div class="tp-qa-answer"><p>Two approaches: (1) Range checking with min/max bounds per node. (2) Inorder traversal must yield strictly increasing sequence. Range checking is more efficient.</p></div>
  <button class="tp-qa-mark-btn">? Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="dsa10-q4">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>
    Q4: What is the inorder successor? How do you find it?
  </summary>
  <div class="tp-qa-answer"><p>The next node in inorder traversal (smallest node larger than current). If node has right child: minimum of right subtree. Otherwise: first ancestor where node is in left subtree. O(h).</p></div>
  <button class="tp-qa-mark-btn">? Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="dsa10-q5">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>
    Q5: Explain AVL tree rotations.
  </summary>
  <div class="tp-qa-answer"><p>Four imbalance cases: Left-Left (right rotate), Right-Right (left rotate), Left-Right (left then right), Right-Left (right then left). Each rotation is O(1) and restores balance.</p></div>
  <button class="tp-qa-mark-btn">? Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="dsa10-q6">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>
    Q6: Compare AVL and Red-Black trees.
  </summary>
  <div class="tp-qa-answer"><p>AVL: stricter balance (diff <= 1), faster lookup, more rotations during insert/delete. Red-Black: looser balance (black height), faster insert/delete, O(log n) for all ops.</p></div>
  <button class="tp-qa-mark-btn">? Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="dsa10-q7">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>
    Q7: How do you find the kth smallest element in a BST?
  </summary>
  <div class="tp-qa-answer"><p>Do inorder traversal and stop at kth element. If node stores subtree sizes, you can do O(h) by comparing k with left subtree size.</p></div>
  <button class="tp-qa-mark-btn">? Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="dsa10-q8">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>
    Q8: What is the time complexity of BST operations?
  </summary>
  <div class="tp-qa-answer"><p>O(h) where h is height. Best case (balanced): O(log n). Worst case (skewed): O(n). Balanced BSTs guarantee O(log n) through rotations.</p></div>
  <button class="tp-qa-mark-btn">? Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="dsa10-q9">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>
    Q9: How do you convert a sorted array to a balanced BST?
  </summary>
  <div class="tp-qa-answer"><p>Use binary division: middle element is root, left half forms left subtree, right half forms right subtree. Recursively build. O(n) time.</p></div>
  <button class="tp-qa-mark-btn">? Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="dsa10-q10">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>
    Q10: What is the floor of a value in BST?
  </summary>
  <div class="tp-qa-answer"><p>The largest value in BST that is <= target. Traverse: if root.val == target, return it. If root.val < target, update result and go right. Otherwise go left.</p></div>
  <button class="tp-qa-mark-btn">? Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="dsa10-q11">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>
    Q11: How do you find LCA in a BST?
  </summary>
  <div class="tp-qa-answer"><p>Since BST is ordered, if both values are less than root, LCA is in left subtree. If both greater, LCA is in right subtree. Otherwise, root is LCA. O(h) time.</p></div>
  <button class="tp-qa-mark-btn">? Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="dsa10-q12">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>
    Q12: Compare BST with Hash Table for search operations.
  </summary>
  <div class="tp-qa-answer"><p>BST: O(log n) average, supports ordered operations (range query, floor, ceil, sorted order). Hash Table: O(1) average, no ordering, better for exact lookups.</p></div>
  <button class="tp-qa-mark-btn">? Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>

## Chapter Quiz
**Q1**: What is the time complexity of searching in a balanced BST?
a) O(1)  b) O(log n)  c) O(n)  d) O(n^2)
<details class="tp-qa-card" data-qid="dsa10-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) O(log n)</strong></p></div></details>

**Q2**: Which traversal of BST produces sorted order?
a) Preorder  b) Inorder  c) Postorder  d) Level-order
<details class="tp-qa-card" data-qid="dsa10-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Inorder</strong></p></div></details>

**Q3**: In BST deletion with two children, which node replaces the deleted node?
a) Maximum of left subtree  b) Inorder successor  c) Random child  d) Parent
<details class="tp-qa-card" data-qid="dsa10-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Inorder successor</strong></p></div></details>

**Q4**: What is the main advantage of AVL over BST?
a) Faster deletion  b) Guaranteed O(log n) height  c) Less memory  d) Simpler implementation
<details class="tp-qa-card" data-qid="dsa10-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Guaranteed O(log n) height</strong></p></div></details>

**Q5**: In a valid BST, if node has a right child, the inorder successor is:
a) Right child  b) Minimum of right subtree  c) Maximum of right subtree  d) Parent
<details class="tp-qa-card" data-qid="dsa10-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Minimum of right subtree</strong></p></div></details>

## Exercises

**Easy** - Insert a sequence of numbers into a BST and verify with inorder traversal

**Medium** - Find the kth largest element in a BST

**Medium** - Convert a BST to a balanced BST (same values, different structure)

**Hard** - Implement an AVL tree with insert and delete, including all four rotation cases

**Hard** - Design a data structure that supports insert, delete, and getRandom in O(log n) using BST with subtree sizes

---


## Common Mistakes

1. Not handling prefix sharing correctly
2. Forgetting to mark end-of-word nodes
3. Not considering memory overhead of tries
4. Using tries for small datasets where hash maps suffice
5. Not implementing deletion correctly

## Revision Notes

- Trie: O(m) search where m = key length
- Each node represents a character
- Prefix sharing reduces space
- Used for autocomplete and spell check
- Patricia/Radix tries compress common prefixes

## Placement Section

### Top 10 Interview Questions

#### Google Style
1. Explain the time and space trade-offs of data structures algorithms. When would you choose one approach over another?
2. Design a system that efficiently handles data structures algorithms at scale (millions of requests/second).

#### Amazon Style
1. Tell me about a time you had to optimize a system related to data structures algorithms. What was your approach and what was the result?
2. How would you explain data structures algorithms to a non-technical stakeholder?

#### Microsoft Style
1. How does data structures algorithms integrate with enterprise systems and cloud architectures?
2. What are the security implications of data structures algorithms?

#### NVIDIA Style
1. How would you optimize data structures algorithms for GPU-accelerated computing?
2. What parallel processing patterns apply to data structures algorithms?

#### AI Startup Style
1. How would you implement data structures algorithms in a cost-effective, scalable way for a startup?
2. What's the fastest way to prototype a solution using data structures algorithms?

### Resume Tips
- **Technical Skills**: List data structures algorithms under relevant technical skills
- **Project Description**: "Implemented data structures algorithms to [specific outcome], reducing [metric] by [X]%"
- **Keywords**: Include data structures algorithms in your skills section for ATS optimization

### Interview Day Checklist
- [ ] Review core concepts of data structures algorithms
- [ ] Practice 3-5 problems related to data structures algorithms
- [ ] Prepare 2 real-world examples of using data structures algorithms
- [ ] Know the time/space complexity of common data structures algorithms operations
- [ ] Have questions ready about how the company uses data structures algorithms> **Next**: [11 - Heaps and Tries ?](11-heaps-and-tries.md)
