# Week 3: Stack, Queue & Trees

**Duration:** July 20-26, 2026 | **Hours:** 35

---

## Stack

```python
# LIFO — perfect for matching problems
def is_valid_parentheses(s: str) -> bool:
    stack = []
    pairs = {")": "(", "]": "[", "}": "{"}
    for char in s:
        if char in pairs:
            if not stack or stack.pop() != pairs[char]:
                return False
        else:
            stack.append(char)
    return not stack
```

## Trees (DFS)

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# DFS recursion
def max_depth(root: TreeNode | None) -> int:
    if not root:
        return 0
    return 1 + max(max_depth(root.left), max_depth(root.right))

# Invert tree
def invert_tree(root: TreeNode | None) -> TreeNode | None:
    if not root:
        return None
    root.left, root.right = root.right, root.left
    invert_tree(root.left)
    invert_tree(root.right)
    return root
```

## Daily Problems

| Day | Topic | Problems |
|-----|-------|----------|
| Mon | Stack | Valid Parentheses, Min Stack |
| Tue | Stack | Eval RPN, Daily Temperatures |
| Wed | Trees DFS | Invert Tree, Max Depth |
| Thu | Trees DFS | Same Tree, Valid BST |
| Fri | Trees BFS | Level Order, Right Side View |
| Sat | Review | Stack + Trees |
