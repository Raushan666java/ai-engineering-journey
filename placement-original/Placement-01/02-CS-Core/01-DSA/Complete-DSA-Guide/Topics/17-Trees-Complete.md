# 🌳 Trees & Binary Trees - Complete Guide

## 📚 **Tree Fundamentals**

### **What is a Tree?**
A tree is a hierarchical data structure consisting of nodes connected by edges, with the following properties:
- **Hierarchical Structure**: Parent-child relationships
- **Connected**: All nodes are reachable from root
- **Acyclic**: No cycles exist
- **N-1 Edges**: For N nodes, exactly N-1 edges

### **Tree Terminology**
```
        A (Root)
       / \
      B   C (Children of A)
     / \   \
    D   E   F (Leaves)
   /
  G (Leaf)

Root: A (topmost node)
Parent: A is parent of B,C
Children: B,C are children of A
Siblings: B,C are siblings
Leaf/Terminal: D,E,F,G (no children)
Internal: A,B,C (have children)
Height: Longest path from root to leaf (3)
Depth of node: Distance from root (G depth = 3)
Level: All nodes at same depth (Level 0: A, Level 1: B,C)
```

---

## 🎯 **Binary Tree Fundamentals**

### **Binary Tree Definition**
A binary tree is a tree where each node has **at most 2 children**, typically called:
- **Left child**
- **Right child**

### **Types of Binary Trees**

#### **1. Full Binary Tree**
```
Every node has either 0 or 2 children

Example:
     A
   /   \
  B     C
 / \   / \
D   E F   G
```

#### **2. Complete Binary Tree**
```
All levels filled except possibly the last,
last level filled from left to right

Example:
     A
   /   \
  B     C
 / \   /
D   E F
```

#### **3. Perfect Binary Tree**
```
All internal nodes have 2 children,
all leaves at same level

Example:
     A
   /   \
  B     C
 / \   / \
D   E F   G
```

#### **4. Balanced Binary Tree**
```
Height difference between left and right subtrees ≤ 1
for every node

Example:
     A
   /   \
  B     C
 / \
D   E
```

### **Binary Tree Implementation**
```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
    
    def __str__(self):
        return str(self.val)

# Creating a binary tree
#       1
#      / \
#     2   3
#    / \
#   4   5

root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)
```

---

## 🚀 **Tree Traversal Algorithms**

### **1. Depth-First Search (DFS) Traversals**

#### **Inorder Traversal (Left → Root → Right)**
```python
def inorder_recursive(root):
    """
    Inorder: Left subtree → Root → Right subtree
    For BST: gives sorted order
    """
    result = []
    
    def inorder(node):
        if node:
            inorder(node.left)
            result.append(node.val)
            inorder(node.right)
    
    inorder(root)
    return result

def inorder_iterative(root):
    """Iterative inorder using stack"""
    result = []
    stack = []
    current = root
    
    while stack or current:
        # Go to leftmost node
        while current:
            stack.append(current)
            current = current.left
        
        # Process current node
        current = stack.pop()
        result.append(current.val)
        
        # Move to right subtree
        current = current.right
    
    return result

# Example: [4, 2, 5, 1, 3] for tree above
```

#### **Preorder Traversal (Root → Left → Right)**
```python
def preorder_recursive(root):
    """
    Preorder: Root → Left subtree → Right subtree
    Used for: Tree copying, expression trees
    """
    result = []
    
    def preorder(node):
        if node:
            result.append(node.val)
            preorder(node.left)
            preorder(node.right)
    
    preorder(root)
    return result

def preorder_iterative(root):
    """Iterative preorder using stack"""
    if not root:
        return []
    
    result = []
    stack = [root]
    
    while stack:
        node = stack.pop()
        result.append(node.val)
        
        # Push right first, then left (stack is LIFO)
        if node.right:
            stack.append(node.right)
        if node.left:
            stack.append(node.left)
    
    return result

# Example: [1, 2, 4, 5, 3] for tree above
```

#### **Postorder Traversal (Left → Right → Root)**
```python
def postorder_recursive(root):
    """
    Postorder: Left subtree → Right subtree → Root
    Used for: Deleting trees, calculating directory sizes
    """
    result = []
    
    def postorder(node):
        if node:
            postorder(node.left)
            postorder(node.right)
            result.append(node.val)
    
    postorder(root)
    return result

def postorder_iterative(root):
    """Iterative postorder using two stacks"""
    if not root:
        return []
    
    result = []
    stack1 = [root]
    stack2 = []
    
    while stack1:
        node = stack1.pop()
        stack2.append(node)
        
        if node.left:
            stack1.append(node.left)
        if node.right:
            stack1.append(node.right)
    
    while stack2:
        result.append(stack2.pop().val)
    
    return result

# Example: [4, 5, 2, 3, 1] for tree above
```

### **2. Breadth-First Search (BFS) Traversal**

#### **Level Order Traversal**
```python
from collections import deque

def level_order(root):
    """
    Level order: Visit nodes level by level
    Used for: Shortest path, tree serialization
    """
    if not root:
        return []
    
    result = []
    queue = deque([root])
    
    while queue:
        level_size = len(queue)
        level = []
        
        for _ in range(level_size):
            node = queue.popleft()
            level.append(node.val)
            
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        
        result.append(level)
    
    return result

def level_order_flat(root):
    """Level order as flat list"""
    if not root:
        return []
    
    result = []
    queue = deque([root])
    
    while queue:
        node = queue.popleft()
        result.append(node.val)
        
        if node.left:
            queue.append(node.left)
        if node.right:
            queue.append(node.right)
    
    return result

# Example: [[1], [2, 3], [4, 5]] for tree above
```

---

## 🧮 **Binary Tree Algorithms**

### **1. Tree Properties**

#### **Calculate Height/Depth**
```python
def max_depth(root):
    """
    Find maximum depth (height) of tree
    Height = longest path from root to leaf
    """
    if not root:
        return 0
    
    left_depth = max_depth(root.left)
    right_depth = max_depth(root.right)
    
    return max(left_depth, right_depth) + 1

def min_depth(root):
    """Find minimum depth to a leaf node"""
    if not root:
        return 0
    
    if not root.left and not root.right:
        return 1
    
    if not root.left:
        return min_depth(root.right) + 1
    
    if not root.right:
        return min_depth(root.left) + 1
    
    return min(min_depth(root.left), min_depth(root.right)) + 1
```

#### **Count Nodes**
```python
def count_nodes(root):
    """Count total number of nodes"""
    if not root:
        return 0
    
    return 1 + count_nodes(root.left) + count_nodes(root.right)

def count_leaves(root):
    """Count leaf nodes"""
    if not root:
        return 0
    
    if not root.left and not root.right:
        return 1
    
    return count_leaves(root.left) + count_leaves(root.right)

def count_internal_nodes(root):
    """Count internal (non-leaf) nodes"""
    if not root or (not root.left and not root.right):
        return 0
    
    return 1 + count_internal_nodes(root.left) + count_internal_nodes(root.right)
```

### **2. Tree Comparison**

#### **Same Tree**
```python
def is_same_tree(p, q):
    """Check if two trees are identical"""
    if not p and not q:
        return True
    
    if not p or not q:
        return False
    
    return (p.val == q.val and
            is_same_tree(p.left, q.left) and
            is_same_tree(p.right, q.right))
```

#### **Symmetric Tree**
```python
def is_symmetric(root):
    """Check if tree is symmetric (mirror of itself)"""
    def is_mirror(left, right):
        if not left and not right:
            return True
        
        if not left or not right:
            return False
        
        return (left.val == right.val and
                is_mirror(left.left, right.right) and
                is_mirror(left.right, right.left))
    
    return is_mirror(root.left, root.right) if root else True
```

### **3. Tree Modification**

#### **Invert Binary Tree**
```python
def invert_tree(root):
    """Invert (mirror) a binary tree"""
    if not root:
        return None
    
    # Swap left and right children
    root.left, root.right = root.right, root.left
    
    # Recursively invert subtrees
    invert_tree(root.left)
    invert_tree(root.right)
    
    return root
```

#### **Flatten Tree to Linked List**
```python
def flatten(root):
    """Flatten binary tree to linked list (preorder)"""
    if not root:
        return
    
    # Flatten left and right subtrees
    flatten(root.left)
    flatten(root.right)
    
    # Store right subtree
    right_subtree = root.right
    
    # Move left subtree to right
    root.right = root.left
    root.left = None
    
    # Find rightmost node and attach original right subtree
    current = root
    while current.right:
        current = current.right
    current.right = right_subtree
```

### **4. Path Algorithms**

#### **Path Sum**
```python
def has_path_sum(root, target_sum):
    """Check if there's a root-to-leaf path with given sum"""
    if not root:
        return False
    
    # Leaf node
    if not root.left and not root.right:
        return target_sum == root.val
    
    # Check left and right subtrees
    remaining = target_sum - root.val
    return (has_path_sum(root.left, remaining) or
            has_path_sum(root.right, remaining))

def path_sum_all(root, target_sum):
    """Find all root-to-leaf paths with given sum"""
    def dfs(node, current_path, remaining):
        if not node:
            return
        
        current_path.append(node.val)
        
        # Leaf node with target sum
        if not node.left and not node.right and remaining == node.val:
            result.append(current_path[:])
        else:
            # Explore children
            dfs(node.left, current_path, remaining - node.val)
            dfs(node.right, current_path, remaining - node.val)
        
        current_path.pop()  # Backtrack
    
    result = []
    dfs(root, [], target_sum)
    return result
```

#### **Binary Tree Maximum Path Sum**
```python
def max_path_sum(root):
    """Find maximum path sum between any two nodes"""
    def max_gain(node):
        nonlocal max_sum
        if not node:
            return 0
        
        # Maximum gain from left and right subtrees
        left_gain = max(max_gain(node.left), 0)
        right_gain = max(max_gain(node.right), 0)
        
        # Price of new path through current node
        current_max = node.val + left_gain + right_gain
        max_sum = max(max_sum, current_max)
        
        # Return max gain if we continue path through parent
        return node.val + max(left_gain, right_gain)
    
    max_sum = float('-inf')
    max_gain(root)
    return max_sum
```

### **5. Lowest Common Ancestor (LCA)**

#### **LCA in Binary Tree**
```python
def lowest_common_ancestor(root, p, q):
    """Find LCA of two nodes in binary tree"""
    if not root or root == p or root == q:
        return root
    
    left = lowest_common_ancestor(root.left, p, q)
    right = lowest_common_ancestor(root.right, p, q)
    
    if left and right:
        return root
    
    return left or right
```

---

## 🔍 **Binary Search Tree (BST)**

### **BST Properties**
- **Left subtree**: All values < root value
- **Right subtree**: All values > root value
- **Inorder traversal**: Gives sorted sequence
- **Search/Insert/Delete**: O(log n) average, O(n) worst case

### **BST Operations**

#### **Search in BST**
```python
def search_bst(root, val):
    """Search for value in BST"""
    if not root or root.val == val:
        return root
    
    if val < root.val:
        return search_bst(root.left, val)
    else:
        return search_bst(root.right, val)

def search_bst_iterative(root, val):
    """Iterative search"""
    while root and root.val != val:
        if val < root.val:
            root = root.left
        else:
            root = root.right
    return root
```

#### **Insert in BST**
```python
def insert_bst(root, val):
    """Insert value in BST"""
    if not root:
        return TreeNode(val)
    
    if val < root.val:
        root.left = insert_bst(root.left, val)
    else:
        root.right = insert_bst(root.right, val)
    
    return root

def insert_bst_iterative(root, val):
    """Iterative insert"""
    if not root:
        return TreeNode(val)
    
    current = root
    while True:
        if val < current.val:
            if not current.left:
                current.left = TreeNode(val)
                break
            current = current.left
        else:
            if not current.right:
                current.right = TreeNode(val)
                break
            current = current.right
    
    return root
```

#### **Delete from BST**
```python
def delete_bst(root, key):
    """Delete node from BST"""
    if not root:
        return None
    
    if key < root.val:
        root.left = delete_bst(root.left, key)
    elif key > root.val:
        root.right = delete_bst(root.right, key)
    else:
        # Node to delete found
        if not root.left:
            return root.right
        elif not root.right:
            return root.left
        else:
            # Node has two children
            # Find inorder successor (smallest in right subtree)
            successor = find_min(root.right)
            root.val = successor.val
            root.right = delete_bst(root.right, successor.val)
    
    return root

def find_min(root):
    """Find minimum value node in subtree"""
    while root.left:
        root = root.left
    return root
```

#### **Validate BST**
```python
def is_valid_bst(root):
    """Check if tree is valid BST"""
    def validate(node, min_val, max_val):
        if not node:
            return True
        
        if node.val <= min_val or node.val >= max_val:
            return False
        
        return (validate(node.left, min_val, node.val) and
                validate(node.right, node.val, max_val))
    
    return validate(root, float('-inf'), float('inf'))
```

---

## 🏗️ **Tree Construction Algorithms**

### **Build Tree from Traversals**

#### **From Preorder and Inorder**
```python
def build_tree_pre_in(preorder, inorder):
    """Build tree from preorder and inorder traversals"""
    if not preorder or not inorder:
        return None
    
    # First element in preorder is root
    root = TreeNode(preorder[0])
    
    # Find root in inorder to split left/right subtrees
    root_idx = inorder.index(preorder[0])
    
    # Build left subtree
    root.left = build_tree_pre_in(
        preorder[1:root_idx + 1],
        inorder[:root_idx]
    )
    
    # Build right subtree
    root.right = build_tree_pre_in(
        preorder[root_idx + 1:],
        inorder[root_idx + 1:]
    )
    
    return root
```

#### **From Postorder and Inorder**
```python
def build_tree_post_in(inorder, postorder):
    """Build tree from inorder and postorder traversals"""
    if not inorder or not postorder:
        return None
    
    # Last element in postorder is root
    root = TreeNode(postorder[-1])
    
    # Find root in inorder
    root_idx = inorder.index(postorder[-1])
    
    # Build left subtree
    root.left = build_tree_post_in(
        inorder[:root_idx],
        postorder[:root_idx]
    )
    
    # Build right subtree
    root.right = build_tree_post_in(
        inorder[root_idx + 1:],
        postorder[root_idx:-1]
    )
    
    return root
```

### **Convert Sorted Array to BST**
```python
def sorted_array_to_bst(nums):
    """Convert sorted array to balanced BST"""
    if not nums:
        return None
    
    mid = len(nums) // 2
    root = TreeNode(nums[mid])
    
    root.left = sorted_array_to_bst(nums[:mid])
    root.right = sorted_array_to_bst(nums[mid + 1:])
    
    return root
```

---

## 📊 **Advanced Tree Algorithms**

### **Tree Serialization**
```python
def serialize(root):
    """Serialize tree to string"""
    def preorder(node):
        if not node:
            vals.append('#')
        else:
            vals.append(str(node.val))
            preorder(node.left)
            preorder(node.right)
    
    vals = []
    preorder(root)
    return ','.join(vals)

def deserialize(data):
    """Deserialize string to tree"""
    def build_tree():
        val = next(vals)
        if val == '#':
            return None
        
        node = TreeNode(int(val))
        node.left = build_tree()
        node.right = build_tree()
        return node
    
    vals = iter(data.split(','))
    return build_tree()
```

### **Tree Views**

#### **Right Side View**
```python
def right_side_view(root):
    """Get right side view of tree"""
    if not root:
        return []
    
    result = []
    queue = deque([root])
    
    while queue:
        level_size = len(queue)
        
        for i in range(level_size):
            node = queue.popleft()
            
            # Last node in each level
            if i == level_size - 1:
                result.append(node.val)
            
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
    
    return result
```

### **Tree Diameter**
```python
def diameter_of_binary_tree(root):
    """Find diameter (longest path between any two nodes)"""
    def depth(node):
        nonlocal diameter
        if not node:
            return 0
        
        left_depth = depth(node.left)
        right_depth = depth(node.right)
        
        # Update diameter
        diameter = max(diameter, left_depth + right_depth)
        
        return max(left_depth, right_depth) + 1
    
    diameter = 0
    depth(root)
    return diameter
```

---

## 📈 **Flowchart: Binary Tree Traversal**

```
         [START]
            ↓
    [Input: Tree Root]
            ↓
    <Choose Traversal Type>
       ↙    ↓    ↘
   Inorder Preorder Postorder
      ↓      ↓       ↓
   [L→R→Rt] [Rt→L→R] [L→R→Rt]
      ↓      ↓       ↓
   <Node = NULL?>
     ↙      ↘
   YES      NO
    ↓        ↓
 [Return] [Process Node]
    ↓        ↓
   [END] [Recurse Left]
           ↓
      [Recurse Right]
           ↓
        [Return]
           ↓
        [END]
```

## 📈 **Flowchart: BST Search**

```
       [START]
          ↓
   [Input: Root, Key]
          ↓
     <Root = NULL?>
       ↙      ↘
     YES      NO
      ↓        ↓
  [Return    <Root.val = Key?>
   NULL]       ↙       ↘
     ↓       YES       NO
    [END] [Return Root] ↓
            ↓      <Key < Root.val?>
          [END]     ↙        ↘
                  YES        NO
                   ↓          ↓
             [Root = Root.left] [Root = Root.right]
                   ↓          ↓
                   ↑ ← ← ← ← ← ↑
                   (Loop back to Root = NULL check)
```

---

## 🧪 **Practice Problems**

### **Easy Level**
1. **Maximum Depth of Binary Tree** (LC #104)
2. **Same Tree** (LC #100)
3. **Invert Binary Tree** (LC #226)
4. **Symmetric Tree** (LC #101)
5. **Path Sum** (LC #112)

### **Medium Level**
1. **Binary Tree Level Order Traversal** (LC #102)
2. **Validate Binary Search Tree** (LC #98)
3. **Lowest Common Ancestor** (LC #236)
4. **Binary Tree Right Side View** (LC #199)
5. **Construct Binary Tree from Preorder and Inorder** (LC #105)

### **Hard Level**
1. **Binary Tree Maximum Path Sum** (LC #124)
2. **Serialize and Deserialize Binary Tree** (LC #297)
3. **Recover Binary Search Tree** (LC #99)

---

## 📊 **Time & Space Complexity Summary**

| Operation | Average | Worst Case | Space |
|-----------|---------|------------|-------|
| **Binary Tree** |  |  |  |
| Search | O(n) | O(n) | O(h) |
| Insert | O(n) | O(n) | O(h) |
| Delete | O(n) | O(n) | O(h) |
| Traversal | O(n) | O(n) | O(h) |
| **BST** |  |  |  |
| Search | O(log n) | O(n) | O(h) |
| Insert | O(log n) | O(n) | O(h) |
| Delete | O(log n) | O(n) | O(h) |
| **Balanced BST** |  |  |  |
| All Operations | O(log n) | O(log n) | O(h) |

*h = height of tree*

---

**🎯 Key Takeaways**:
- Trees are fundamental hierarchical data structures
- Master both recursive and iterative approaches
- Understand the difference between binary trees and BSTs
- Practice tree traversal algorithms thoroughly
- Learn to identify when to use DFS vs BFS
- BST operations are efficient when tree is balanced
