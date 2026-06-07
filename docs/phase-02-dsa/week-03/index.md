# Week 3 — Trees & Stack

Stack LIFO hai — Last In, First Out. Tree recursion ka natural fit hai. Stack ke problems mostly monotonic pattern follow karte hain, trees mein DFS recursion aur BFS queue ka khel hai.

---

## Valid Parentheses (Easy)

```python
# Problem: Kya brackets balanced hain?
# Input: "()[]{}"
# Output: True

def is_valid(s: str) -> bool:
    stack = []
    pairs = {")": "(", "]": "[", "}": "{"}

    for ch in s:
        if ch in pairs:          # closing bracket
            if not stack or stack[-1] != pairs[ch]:
                return False
            stack.pop()
        else:                    # opening bracket
            stack.append(ch)

    return not stack  # all matched

# Trace: "()[]{}"
# ch='(' -> stack=['(']
# ch=')' -> stack[-1]='(' matches -> stack=[]
# ch='[' -> stack=['[']
# ch=']' -> stack[-1]='[' matches -> stack=[]
# ch='{' -> stack=['{']
# ch='}' -> stack[-1]='{' matches -> stack=[]
# not stack -> True ✅
```

**Pattern:** Closing bracket dikhe toh top match karo, warna push karo.

---

## Min Stack (Medium)

```python
# Problem: Stack with getMin() in O(1)
# Operations: push, pop, top, getMin — all O(1)

class MinStack:
    def __init__(self):
        self.stack = []

    def push(self, val: int) -> None:
        if not self.stack:
            self.stack.append((val, val))  # (value, min_so_far)
        else:
            current_min = min(val, self.stack[-1][1])
            self.stack.append((val, current_min))

    def pop(self) -> None:
        self.stack.pop()

    def top(self) -> int:
        return self.stack[-1][0]

    def get_min(self) -> int:
        return self.stack[-1][1]

# Trace:
# push(-2): stack=[(-2, -2)]
# push(0):  stack=[(-2, -2), (0, -2)]
# push(-3): stack=[(-2, -2), (0, -2), (-3, -3)]
# get_min() -> -3
# pop() -> stack=[(-2, -2), (0, -2)]
# top() -> 0
# get_min() -> -2 ✅
```

**Trick:** Har element ke saath current minimum store karo. Space O(n) extra, par O(1) mein min mil jaata hai.

---

## Daily Temperatures (Medium)

```python
# Problem: Har din ka wait kitna karna padega warmer temperature ke liye?
# Input: [73, 74, 75, 71, 69, 72, 76, 73]
# Output: [1, 1, 4, 2, 1, 1, 0, 0]

def daily_temperatures(temperatures: list[int]) -> list[int]:
    n = len(temperatures)
    result = [0] * n
    stack = []  # monotonic decreasing stack of indices

    for i, temp in enumerate(temperatures):
        while stack and temp > temperatures[stack[-1]]:
            prev_idx = stack.pop()
            result[prev_idx] = i - prev_idx
        stack.append(i)

    return result

# Trace:
# i=0, temp=73: stack=[] -> push 0, stack=[0]
# i=1, temp=74: temp(74)>temp[0]=73, prev=0, result[0]=1, pop, push 1, stack=[1]
# i=2, temp=75: temp(75)>temp[1]=74, prev=1, result[1]=1, pop, push 2, stack=[2]
# i=3, temp=71: 71<75, push 3, stack=[2,3]
# i=4, temp=69: 69<71, push 4, stack=[2,3,4]
# i=5, temp=72: 72>69, prev=4, result[4]=1, pop
#                72>71, prev=3, result[3]=2, pop
#                push 5, stack=[2,5]
# i=6, temp=76: 76>72, prev=5, result[5]=1, pop
#                76>75, prev=2, result[2]=4, pop
#                push 6, stack=[6]
# i=7, temp=73: 73<76, push 7, stack=[6,7]
# result = [1,1,4,2,1,1,0,0] ✅
```

**Monotonic Stack Rule:** Stack mein indices decreasing temperatures ke hisaab se rehte hain. Jab bada temperature aaye, saare chhoton ko process kar do.

---

## Invert Binary Tree (Easy)

```python
# Problem: Tree ka mirror image banao
# Input:
#     4
#    / \
#   2   7
#  / \ / \
# 1  3 6  9

def invert_tree(root: TreeNode | None) -> TreeNode | None:
    if not root:
        return None

    root.left, root.right = root.right, root.left
    invert_tree(root.left)
    invert_tree(root.right)

    return root

# Output:
#     4
#    / \
#   7   2
#  / \ / \
# 9  6 3  1
```

**Fun Fact:** Google ne yeh problem isliye famous kiya jab interview mein candidate nahi kar paya. Ab har koi karta hai.

---

## Maximum Depth of Binary Tree (Easy)

```python
# Problem: Tree ki max depth (root to leaf)
# Input: [3,9,20,null,null,15,7]
# Output: 3

def max_depth(root: TreeNode | None) -> int:
    if not root:
        return 0
    return 1 + max(max_depth(root.left), max_depth(root.right))

# Trace:
# max_depth(3) = 1 + max(max_depth(9), max_depth(20))
# max_depth(9) = 1 + max(0, 0) = 1
# max_depth(20) = 1 + max(max_depth(15), max_depth(7))
#                = 1 + max(1, 1) = 2
# max_depth(3) = 1 + max(1, 2) = 3 ✅
```

**Template:** `1 + max(left, right)` — har recursive problem ka base template yahi hai.

---

## Same Tree (Easy)

```python
# Problem: Kya do trees identical hain?
# Input: p = [1,2,3], q = [1,2,3]
# Output: True

def is_same_tree(p: TreeNode | None, q: TreeNode | None) -> bool:
    if not p and not q:
        return True
    if not p or not q:
        return False
    return (p.val == q.val
            and is_same_tree(p.left, q.left)
            and is_same_tree(p.right, q.right))

# Trace:
# p=1, q=1 -> val match, check left and right
# p.left=2, q.left=2 -> val match, children None -> True
# p.right=3, q.right=3 -> val match, children None -> True
# All True ✅
```

---

## Level Order Traversal (Medium)

```python
# Problem: Level by level traverse karo
# Input: [3,9,20,null,null,15,7]
# Output: [[3], [9,20], [15,7]]

from collections import deque

def level_order(root: TreeNode | None) -> list[list[int]]:
    if not root:
        return []

    result = []
    queue = deque([root])

    while queue:
        level = []
        for _ in range(len(queue)):
            node = queue.popleft()
            level.append(node.val)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        result.append(level)

    return result

# Trace:
# queue=[3], level=[]
#   pop 3, level=[3], enqueue 9,20
# queue=[9,20], result=[[3]]
#   pop 9, level=[9], enqueue null,null
#   pop 20, level=[9,20], enqueue 15,7
# queue=[15,7], result=[[3],[9,20]]
#   pop 15, level=[15]
#   pop 7, level=[15,7]
# result=[[3],[9,20],[15,7]] ✅
```

**BFS Template:** Queue mein root daalo, har level ke nodes process karo, agle level ke bachche enqueue karo.

---

## Validate BST (Medium)

```python
# Problem: Kya yeh binary tree BST hai?
# Input: [2,1,3]
# Output: True

def is_valid_bst(root: TreeNode | None) -> bool:
    def validate(node, low=float('-inf'), high=float('inf')):
        if not node:
            return True
        if node.val <= low or node.val >= high:
            return False
        return (validate(node.left, low, node.val)
                and validate(node.right, node.val, high))

    return validate(root)

# Trace: [5,1,4,null,null,3,6]
# validate(5, -inf, +inf) -> 5 in range
#   left: validate(1, -inf, 5) -> 1 in range, no children -> True
#   right: validate(4, 5, +inf) -> 4 NOT > 5 -> False ❌
```

**Alternate — In-order traversal:** BST ka inorder sorted hota hai. Agar sorted nahi hai toh BST nahi hai.

```python
def is_valid_bst_inorder(root: TreeNode | None) -> bool:
    stack = []
    prev = float('-inf')

    while stack or root:
        while root:
            stack.append(root)
            root = root.left
        root = stack.pop()
        if root.val <= prev:
            return False
        prev = root.val
        root = root.right

    return True
```

---

## Kth Smallest in BST (Medium)

```python
# Problem: BST mein kth smallest element dhundho
# Input: root = [3,1,4,null,2], k = 1
# Output: 1

def kth_smallest(root: TreeNode | None, k: int) -> int:
    stack = []

    while stack or root:
        while root:
            stack.append(root)
            root = root.left                   # leftmost jao
        root = stack.pop()
        k -= 1
        if k == 0:
            return root.val
        root = root.right                      # right subtree check

    return -1

# Trace: [3,1,4,null,2], k=2
# stack=[], root=3
#   push 3, root=1 -> push 1, root=None
#   pop 1, k=1, root=2
#   push 2, root=None
#   pop 2, k=0 -> return 2 ✅
```

**Key Insight:** BST ka inorder traversal sorted hota hai. kth element = kth item in inorder.

---

## Lowest Common Ancestor (Medium)

```python
# Problem: Do nodes ka lowest common ancestor dhundho
# Input: root = [6,2,8,0,4,7,9,null,null,3,5], p=2, q=8
# Output: 6

# BST Case — Tree BST hai toh property use karo:
def lowest_common_ancestor_bst(root: TreeNode | None, p: TreeNode, q: TreeNode) -> TreeNode | None:
    curr = root
    while curr:
        if p.val < curr.val and q.val < curr.val:
            curr = curr.left
        elif p.val > curr.val and q.val > curr.val:
            curr = curr.right
        else:
            return curr  # split point — yahi LCA hai

    return None

# General Binary Tree Case — BST nahi hai toh:
def lowest_common_ancestor(root: TreeNode | None, p: TreeNode, q: TreeNode) -> TreeNode | None:
    if not root or root == p or root == q:
        return root

    left = lowest_common_ancestor(root.left, p, q)
    right = lowest_common_ancestor(root.right, p, q)

    if left and right:
        return root       # dono subtrees mein mil gaye = yehi LCA
    return left or right  # jo bhi mila wahi LCA

# Trace general case:
# root=3, p=5, q=1
# LCA(3) -> LCA(5) returns 5, LCA(1) returns 1 -> both non-None -> return 3 ✅
```

---

## Binary Tree Right Side View (Medium)

```python
# Problem: Right se dekhne par kya dikhega?
# Input: [1,2,3,null,5,null,4]
# Output: [1,3,4]

from collections import deque

def right_side_view(root: TreeNode | None) -> list[int]:
    if not root:
        return []

    result = []
    queue = deque([root])

    while queue:
        level_len = len(queue)
        for i in range(level_len):
            node = queue.popleft()
            if i == level_len - 1:             # rightmost node
                result.append(node.val)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)

    return result

# Trace:
# queue=[1] -> level_len=1
#   pop 1, i=0==0, result=[1], enqueue 2,3
# queue=[2,3] -> level_len=2
#   pop 2, i=0!=1, enqueue 5
#   pop 3, i=1==1, result=[1,3], enqueue 4
# queue=[5,4] -> level_len=2
#   pop 5, i=0!=1
#   pop 4, i=1==1, result=[1,3,4] ✅
```

**BFS variant:** Level ke end mein jo node hai wohi right side view mein dikhti hai.

---

## Week 3 Targets

- [ ] Valid Parentheses — stack matching
- [ ] Min Stack — tuple stack with min tracking
- [ ] Daily Temperatures — monotonic decreasing stack
- [ ] Invert Binary Tree — recursive swap
- [ ] Maximum Depth — `1 + max(left, right)`
- [ ] Same Tree — recursive comparison
- [ ] Level Order Traversal — BFS queue template
- [ ] Validate BST — min/max bounds ya inorder
- [ ] Kth Smallest in BST — iterative inorder
- [ ] Lowest Common Ancestor — BST property or recursive
- [ ] Binary Tree Right Side View — BFS rightmost

**Week 3 Flow:** Stack ke LIFO rules pakdo → Monotonic stack ka pattern samjho → Trees mein recursion ki muscle memory banao → BFS/DFS dono haath aajayein.
