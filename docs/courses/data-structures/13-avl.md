# Chapter 13: AVL Trees

**Prev:** [Chapter 12: Graph Traversals](12-graph-traversals.md) | **Next:** [Chapter 14: Red-Black Trees](14-red-black.md)

## Learning Objectives

> **One-Sentence Takeaway:** AVL trees guarantee O(log n) operations by maintaining a strict height balance factor of -1, 0, or 1 at every node.

<!-- Image Gallery -->
<div style="display:flex;flex-wrap:wrap;gap:4px;margin:16px 0;padding:12px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;">
<a href="../../../assets/images/lessons/data-structures/13-avl/hero.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/data-structures/13-avl/hero.svg" alt="Chapter Banner: Chapter 13: AVL Trees" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/data-structures/13-avl/handwritten-notes.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/data-structures/13-avl/handwritten-notes.svg" alt="Handwritten Notes: Chapter 13: AVL Trees" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/data-structures/13-avl/sticky-notes.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/data-structures/13-avl/sticky-notes.svg" alt="Sticky Notes: Chapter 13: AVL Trees" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/data-structures/13-avl/visual-explanation.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/data-structures/13-avl/visual-explanation.svg" alt="Visual Explanation: Chapter 13: AVL Trees" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/data-structures/13-avl/architecture.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/data-structures/13-avl/architecture.svg" alt="Architecture: Chapter 13: AVL Trees" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/data-structures/13-avl/workflow.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/data-structures/13-avl/workflow.svg" alt="Workflow: Chapter 13: AVL Trees" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/data-structures/13-avl/mindmap.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/data-structures/13-avl/mindmap.svg" alt="Mind Map: Chapter 13: AVL Trees" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/data-structures/13-avl/comparison.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/data-structures/13-avl/comparison.svg" alt="Comparison: Chapter 13: AVL Trees" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/data-structures/13-avl/cheatsheet.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/data-structures/13-avl/cheatsheet.svg" alt="Cheat Sheet: Chapter 13: AVL Trees" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/data-structures/13-avl/interview-quiz.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/data-structures/13-avl/interview-quiz.svg" alt="Quiz Card: Chapter 13: AVL Trees" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/data-structures/13-avl/social-card.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/data-structures/13-avl/social-card.svg" alt="Social Card: Chapter 13: AVL Trees" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
</div>
<!-- End Image Gallery -->


- Define balance factor and AVL invariant.
- Implement LL, RR, LR, and RL rotations.
- Implement insertion and deletion with rebalancing.
- Analyze AVL tree height guarantees.

## Why AVL Trees Matter

Imagine a **self-balancing scale** — a platform that automatically levels itself no matter how you distribute the weight. If you load one side too heavily, a mechanism shifts the platform back to perfectly horizontal. Without this self-balancing, the scale would tilt and become useless for accurate measurement.

A standard **Binary Search Tree (BST)** is like a scale without auto-leveling. Insert sorted data (1, 2, 3, 4, 5) and the tree degenerates into a linked list — search time drops from O(log n) to O(n). With millions of records, that is the difference between instantaneous and grinding to a halt.

The **AVL tree** (named after inventors Adelson-Velsky and Landis, 1962) is the self-balancing mechanism. After every insertion or deletion, it checks its own "tilt" (the balance factor) and performs small local rearrangements called **rotations** to restore balance. This guarantees the tree height never exceeds ~1.44 log₂ n, keeping all operations strictly logarithmic.

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| Balance factor | height(left) - height(right) ∈ {-1, 0, 1} | The invariant that keeps the tree balanced |
| Rotations | LL, RR (single), LR, RL (double) | Four patterns that restore balance after modifications |
| Insertion | Insert as BST, then rebalance | At most one rotation needed |
| Deletion | Remove as BST, then rebalance up the path | May require cascading rotations to root |
| Height bound | \(h &lt; 1.44 \log n\) | Guarantees logarithmic worst-case search |
| AVL vs Red-Black | Tighter balance → faster search | Choose AVL for search-heavy workloads |

## Chapter Roadmap

```mermaid
flowchart TD
    A[AVL Tree] --> B[BST Insert/Delete]
    B --> C{Balance Factor Check}
    C --> D[|bf| ≤ 1 ✓]
    C --> E[|bf| > 1 ✗]
    D --> F[Done]
    E --> G{Which Rotation?}
    G --> H[LL → Right Rotate]
    G --> I[RR → Left Rotate]
    G --> J[LR → Left then Right]
    G --> K[RL → Right then Left]
    H --> L[Tree Balanced]
    I --> L
    J --> L
    K --> L
    L --> F
```

## Theory

> **One-Sentence Takeaway:** The AVL invariant ensures that the tree height never exceeds 1.44 log n, making all operations O(log n).

![AVL Tree Flowchart](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/data-structures/ch13-avl.png)

### AVL Invariant


An **AVL tree** is a self-balancing BST. The balance factor of any node is:

\[ \text{balance} = \text{height(left)} - \text{height(right)} \]

The AVL invariant requires \( \text{balance} \in \{-1, 0, 1\} \) for every node.

### Height Guarantee


The height of an AVL tree is bounded by \( h &lt; 2 \log_2 (n+1) \). This guarantees \( O(\log n) \) search, insert, and delete.

### Rotations Overview


When an insertion or deletion violates the balance invariant, rotations restore balance.

| Case | Pattern | Rotation |
|------|---------|----------|
| LL | insertion in left child's left subtree | Right rotate at grandparent |
| RR | insertion in right child's right subtree | Left rotate at grandparent |
| LR | insertion in left child's right subtree | Left rotate at child, then right rotate at grandparent |
| RL | insertion in right child's left subtree | Right rotate at child, then left rotate at grandparent |

---

## Balance Factor

### Real-World Analogy

Imagine a **spirit level (bubble level)** used in construction. The bubble sits centered when the surface is horizontal. If you tilt left, the bubble drifts right by exactly the tilt amount. The **balance factor** measures this tilt: positive means left subtree deeper, negative means right subtree deeper. The AVL invariant demands the bubble stays within [-1, 0, 1] — "close enough to level."

### Definition

\[ \text{Balance Factor} = \text{Height(Left Subtree)} - \text{Height(Right Subtree)} \]

Height of a leaf = 1. Height of null = 0.

### Algorithm Steps

1. **Compute height**: `height = 1 + max(height(left), height(right))`. null → 0.
2. **Compute balance factor**: `bf = height(left) - height(right)`.
3. **Check invariant**: if |bf| > 1, rebalance.
4. **Propagate upward**: recompute heights and check bf along the path from modification to root.

### Pseudocode

```
FUNCTION getHeight(node):
    IF node == NULL: RETURN 0
    RETURN node.height

FUNCTION getBalanceFactor(node):
    IF node == NULL: RETURN 0
    RETURN getHeight(node.left) - getHeight(node.right)

FUNCTION updateHeight(node):
    node.height = 1 + max(getHeight(node.left), getHeight(node.right))
```

### Step-by-Step Dry Run

Given tree:

```
       30
      /  \
     20   40
    /  \
   10   25
```

| Node | height(left) | height(right) | node.height | Balance Factor |
|------|-------------|--------------|-------------|---------------|
| 10   | 0           | 0            | 1           | 0             |
| 25   | 0           | 0            | 1           | 0             |
| 20   | 1 (10)      | 1 (25)       | 2           | 0             |
| 40   | 0           | 0            | 1           | 0             |
| 30   | 2 (20)      | 1 (40)       | 3           | 1             |

All balance factors ∈ {-1, 0, 1} ✓. This tree is AVL-compliant.

Now insert 5. The tree becomes:

```
       30
      /  \
     20   40
    /  \
   10   25
  /
 5
```

| Node | height(left) | height(right) | node.height | Balance Factor |
|------|-------------|--------------|-------------|---------------|
| 5    | 0           | 0            | 1           | 0             |
| 10   | 1 (5)       | 0            | 2           | 1 (OK)        |
| 25   | 0           | 0            | 1           | 0             |
| 20   | 2 (10)      | 1 (25)       | 3           | 1 (OK)        |
| 40   | 0           | 0            | 1           | 0             |
| 30   | 3 (20)      | 1 (40)       | 4           | **2** ✗       |

Node 30 has bf = 2 → AVL violation. Rotation needed.

### C++ Implementation

```cpp
int height(AVLNode* node) {
    return node ? node->height : 0;
}

int balanceFactor(AVLNode* node) {
    return node ? height(node->left) - height(node->right) : 0;
}

void updateHeight(AVLNode* node) {
    if (node) {
        node->height = 1 + std::max(height(node->left), height(node->right));
    }
}
```

### Python Implementation

```python
def height(node):
    return node.height if node else 0

def balance_factor(node):
    return height(node.left) - height(node.right) if node else 0

def update_height(node):
    if node:
        node.height = 1 + max(height(node.left), height(node.right))
```

### Java Implementation

```java
public int height(AVLNode node) {
    return (node == null) ? 0 : node.height;
}

public int balanceFactor(AVLNode node) {
    return (node == null) ? 0 : height(node.left) - height(node.right);
}

public void updateHeight(AVLNode node) {
    if (node != null) {
        node.height = 1 + Math.max(height(node.left), height(node.right));
    }
}
```

### Complexity Analysis

| Operation | Time | Why |
|-----------|------|-----|
| Computing height of one node | O(1) | Reads precomputed child heights |
| Computing balance factor | O(1) | Subtracts two precomputed values |
| Updating heights along path | O(log n) | At most h ≤ 1.44 log₂ n ancestors |

**Why O(log n) is guaranteed:** In an AVL tree of height h, the minimum node count follows n(h) = n(h-1) + n(h-2) + 1 (Fibonacci-like recurrence). This gives h &lt; 1.44 log₂(n+2). Unlike ordinary BST where h can equal n, AVL provably stays logarithmic.

### Advantages & Disadvantages

| Advantages | Disadvantages |
|------------|---------------|
| Guaranteed O(log n) search — no worst-case degradation | Extra storage: each node stores height (int) |
| Tighter balance than Red-Black → faster lookups | Rotations add overhead on writes |
| Predictable performance for real-time systems | Deletion more complex than BST |
| Simple invariant to reason about | Not ideal for write-heavy workloads |
| Every operation is individually O(log n) | Slightly more code than BST |

### Edge Cases

| Case | Behavior |
|------|----------|
| **Empty tree (root = null)** | Height = 0, bf = 0. Valid. |
| **Single node** | Height = 1, bf = 0. Valid. |
| **Two nodes** | Root: bf = ±1. Child is leaf: bf = 0. Valid. |
| **Duplicate value** | Typically ignored — no height change, no rebalancing. |
| **All nodes have bf = 0** | Perfectly balanced. Best-case height = ⌊log₂ n⌋ + 1. |
| **bf = +2 but left child has bf = -1** | LR case — double rotation needed. |
| **1 million nodes** | Height ≤ 1.44 log₂ 1,000,000 ≈ 29. All ops finish in ~30 steps. |

---

## Rotations

Rotations rearrange 3-4 pointers to restore the AVL invariant without breaking BST ordering. Four patterns, but conceptually only two: **single** (LL, RR) and **double** (LR, RL = two singles composed).

### LL Rotation (Right Rotation)

#### Real-World Analogy

A **stack of books** on a shelf where the heaviest book is on top and lighter books stack to the left — tipping left. Grab the middle book, lift it to the top, let the heavy book fall right. The stack levels instantly.

#### Diagram

```
        z                         y
       / \                       / \
      y   T4        ===>        x   z
     / \                           / \
    x   T3                        T3  T4
   / \
  T1  T2

Before: bf(z) = +2, bf(y) ≥ 0
After:  bf(z) = 0,  bf(y) = 0
```

#### Algorithm Steps

1. Let `z` be the unbalanced node (bf = +2).
2. Let `y` = left child of `z`.
3. Detach `T2` = right subtree of `y`.
4. Make `z` the right child of `y`.
5. Attach `T2` as left child of `z`.
6. Update heights of `z`, then `y`.
7. Return `y` as new subtree root.

#### Pseudocode

```
FUNCTION rightRotate(z):
    y = z.left
    T2 = y.right
    y.right = z
    z.left = T2
    updateHeight(z)
    updateHeight(y)
    RETURN y
```

#### Step-by-Step Dry Run

Insert 30, 20, 10 in order.

**Step 1:** Insert 30.
```
30 (bf=0, h=1)
```

**Step 2:** Insert 20.
```
    30 (bf=+1, h=2)
   /
  20 (bf=0, h=1)
```

**Step 3:** Insert 10. bf(30) = +2 ✗. LL case.
```
      30 (bf=+2 ✗, h=3)
     /
    20 (bf=+1, h=2)
   /
  10 (bf=0, h=1)
```

**Step 4:** Right rotate at 30.
```
      20 (bf=0, h=2)
     /  \
    10   30 (bf=0, h=1)
```
Balanced. ✓

#### C++ Implementation

```cpp
AVLNode* rotateRight(AVLNode* z) {
    AVLNode* y = z->left;
    AVLNode* T2 = y->right;
    y->right = z;
    z->left = T2;
    updateHeight(z);
    updateHeight(y);
    return y;
}
```

#### Python Implementation

```python
def rotate_right(z):
    y = z.left
    T2 = y.right
    y.right = z
    z.left = T2
    update_height(z)
    update_height(y)
    return y
```

#### Java Implementation

```java
public AVLNode rotateRight(AVLNode z) {
    AVLNode y = z.left;
    AVLNode T2 = y.right;
    y.right = z;
    z.left = T2;
    updateHeight(z);
    updateHeight(y);
    return y;
}
```

#### Complexity Analysis

| Aspect | Value | Why |
|--------|-------|-----|
| Time | O(1) | 3 pointer reassignments — constant work |
| Space | O(1) | 2 local pointer variables |

#### Advantages & Disadvantages

| Advantages | Disadvantages |
|------------|---------------|
| Restores balance in O(1) local operation | Only correct for LL pattern |
| Preserves BST ordering | If applied to LR case, tree stays broken |

#### Edge Cases

| Case | Behavior |
|------|----------|
| **z has no left child** | Impossible — bf = +2 requires deeper left |
| **T2 = null** | Works — z.left becomes null |
| **z is root** | y becomes new global root |

---

### RR Rotation (Left Rotation)

#### Real-World Analogy

Mirror image of LL — a **stack of boxes** leaning right. Push the middle box up, let the heavy box drop left.

#### Diagram

```
    z                           y
   / \                         / \
  T4  y          ===>         z   x
     / \                     / \
    T3  x                   T4 T3
       / \
      T2 T1

Before: bf(z) = -2, bf(y) ≤ 0
After:  bf(z) = 0,  bf(y) = 0
```

#### Algorithm Steps

1. Let `z` be the unbalanced node (bf = -2).
2. Let `y` = right child of `z`.
3. Detach `T2` = left subtree of `y`.
4. Make `z` the left child of `y`.
5. Attach `T2` as right child of `z`.
6. Update heights of `z`, then `y`.
7. Return `y`.

#### Pseudocode

```
FUNCTION leftRotate(z):
    y = z.right
    T2 = y.left
    y.left = z
    z.right = T2
    updateHeight(z)
    updateHeight(y)
    RETURN y
```

#### Step-by-Step Dry Run

Insert 10, 20, 30.

**Step 1:** Insert 10.
```
10 (bf=0, h=1)
```

**Step 2:** Insert 20.
```
10 (bf=-1, h=2)
  \
   20 (bf=0, h=1)
```

**Step 3:** Insert 30. bf(10) = -2 ✗. RR case.
```
10 (bf=-2 ✗, h=3)
  \
   20 (bf=-1, h=2)
     \
      30 (bf=0, h=1)
```

**Step 4:** Left rotate at 10.
```
    20 (bf=0, h=2)
   /  \
  10   30 (bf=0, h=1)
```
Balanced. ✓

#### C++ Implementation

```cpp
AVLNode* rotateLeft(AVLNode* z) {
    AVLNode* y = z->right;
    AVLNode* T2 = y->left;
    y->left = z;
    z->right = T2;
    updateHeight(z);
    updateHeight(y);
    return y;
}
```

#### Python Implementation

```python
def rotate_left(z):
    y = z.right
    T2 = y.left
    y.left = z
    z.right = T2
    update_height(z)
    update_height(y)
    return y
```

#### Java Implementation

```java
public AVLNode rotateLeft(AVLNode z) {
    AVLNode y = z.right;
    AVLNode T2 = y.left;
    y.left = z;
    z.right = T2;
    updateHeight(z);
    updateHeight(y);
    return y;
}
```

#### Complexity Analysis

| Aspect | Value | Why |
|--------|-------|-----|
| Time | O(1) | Mirror of RR — 3 pointer updates |
| Space | O(1) | 2 local variables |

#### Advantages & Disadvantages

| Advantages | Disadvantages |
|------------|---------------|
| O(1) fix for RR imbalance | Incorrect for RL case |
| Symmetric to rightRotate | Requires checking child's bf |

---

### LR Rotation (Left-Right Double Rotation)

#### Real-World Analogy

**Untangling a garden hose** with a kink in the middle. First twist the kink one way to create a simple bend, then straighten the whole thing. You cannot pull it straight directly — the kink must first be reversed into a simpler curve.

#### Diagram

```
LR Case (Left-Right):
        z                         z                         x
       / \                       / \                       / \
      y   T4       ===>         x   T4       ===>         y   z
     / \                       / \                       / \ / \
    T1  x                     y   T3                    T1 T2T3 T4
       / \                   / \
      T2 T3                 T1 T2

Step 1: Left rotate at y     Step 2: Right rotate at z
Before: bf(z) = +2, bf(y) = -1
```

#### Algorithm Steps

1. `z` is unbalanced (bf = +2). Left child `y` has bf = -1.
2. **First rotation:** Left rotate at `y` — converts LR to LL.
3. **Second rotation:** Right rotate at `z` — fixes LL.
4. Update heights after each rotation.

#### Pseudocode

```
FUNCTION leftRightRotate(z):
    z.left = leftRotate(z.left)
    RETURN rightRotate(z)
```

#### Step-by-Step Dry Run

Insert 30, 10, 20.

**Step 1:** Insert 30.
```
30 (bf=0, h=1)
```

**Step 2:** Insert 10.
```
    30 (bf=+1, h=2)
   /
  10 (bf=0, h=1)
```

**Step 3:** Insert 20. bf(30) = +2 ✗. bf(10) = -1 → LR case.
```
      30 (bf=+2 ✗)
     /
    10 (bf=-1)
     \
      20 (bf=0, h=1)
```

**Step 4:** Left rotate at 10.
```
      30 (bf=+2 ✗)
     /
    20 (bf=0)
   /
  10 (bf=0)
```
Now LL case at 30.

**Step 5:** Right rotate at 30.
```
      20 (bf=0, h=2)
     /  \
    10   30 (bf=0, h=1)
```
Balanced. ✓

#### C++ Implementation

```cpp
AVLNode* leftRightRotate(AVLNode* z) {
    z->left = rotateLeft(z->left);
    return rotateRight(z);
}
```

#### Python Implementation

```python
def left_right_rotate(z):
    z.left = rotate_left(z.left)
    return rotate_right(z)
```

#### Java Implementation

```java
public AVLNode leftRightRotate(AVLNode z) {
    z.left = rotateLeft(z.left);
    return rotateRight(z);
}
```

---

### RL Rotation (Right-Left Double Rotation)

#### Real-World Analogy

A **jackhammer handle** — the grip is on the right, but the weight shifts inside and left. First push the inner handle outward (right), then pull the whole thing left to center it.

#### Diagram

```
RL Case (Right-Left):
    z                         z                           x
   / \                       / \                         / \
  T4  y       ===>         T4  x        ===>            z   y
     / \                       / \                     / \ / \
    x  T3                     T1  y                   T4 T1T2 T3
   / \                           / \
  T1 T2                         T2 T3

Step 1: Right rotate at y     Step 2: Left rotate at z
Before: bf(z) = -2, bf(y) = +1
```

#### Algorithm Steps

1. `z` is unbalanced (bf = -2). Right child `y` has bf = +1.
2. **First rotation:** Right rotate at `y` — converts RL to RR.
3. **Second rotation:** Left rotate at `z` — fixes RR.
4. Update heights.

#### Pseudocode

```
FUNCTION rightLeftRotate(z):
    z.right = rightRotate(z.right)
    RETURN leftRotate(z)
```

#### Step-by-Step Dry Run

Insert 10, 30, 20.

**Step 1:** Insert 10.
```
10 (bf=0, h=1)
```

**Step 2:** Insert 30.
```
10 (bf=-1, h=2)
  \
   30 (bf=0, h=1)
```

**Step 3:** Insert 20. bf(10) = -2 ✗. bf(30) = +1 → RL case.
```
10 (bf=-2 ✗)
  \
   30 (bf=+1)
  /
 20 (bf=0, h=1)
```

**Step 4:** Right rotate at 30.
```
10 (bf=-2 ✗)
  \
   20 (bf=0)
     \
      30 (bf=0)
```
Now RR case at 10.

**Step 5:** Left rotate at 10.
```
     20 (bf=0, h=2)
    /  \
   10   30 (bf=0, h=1)
```
Balanced. ✓

#### C++ Implementation

```cpp
AVLNode* rightLeftRotate(AVLNode* z) {
    z->right = rotateRight(z->right);
    return rotateLeft(z);
}
```

#### Python Implementation

```python
def right_left_rotate(z):
    z.right = rotate_right(z.right)
    return rotate_left(z)
```

#### Java Implementation

```java
public AVLNode rightLeftRotate(AVLNode z) {
    z.right = rotateRight(z.right);
    return leftRotate(z);
}
```

#### Complexity Analysis (LR and RL)

| Aspect | Value | Why |
|--------|-------|-----|
| Time | O(1) | Two O(1) rotations composed |
| Space | O(1) | Reuses single-rotation routines |

#### Advantages & Disadvantages (LR and RL)

| Advantages | Disadvantages |
|------------|---------------|
| Handles "inside" imbalance patterns | Twice the pointer work of single rotations |
| Built from well-understood single rotations | Requires correct detection of child's balance |

#### Edge Cases for LR/RL

| Case | Behavior |
|------|----------|
| **Child's bf misdetected as 0 instead of ±1** | May pick wrong rotation — must check |
| **Rotating when X has no children** | T2/T3 are null — rotation still correct |
| **z is the root** | After double rotation, new node becomes root |

---

## Insertion with Rebalancing

### Real-World Analogy

**Loading plates onto a barbell.** Each time you add weight to one side, the bar tilts. Check the tilt and adjust by moving plates from the heavy side to the light side before adding the next plate. The bar stays level throughout — just as AVL rebalances after each insertion to maintain logarithmic height.

### Algorithm Steps

1. **BST Insert:** Insert node as in a standard BST.
2. **Update Height:** Walk back up, recomputing height at each ancestor.
3. **Check Balance:** Compute bf at each ancestor.
4. **Rebalance if |bf| > 1:**
   - bf > 1 AND value &lt; node.left.data → **LL**: rightRotate(node)
   - bf &lt; -1 AND value &gt; node.right.data → **RR**: leftRotate(node)
   - bf > 1 AND value > node.left.data → **LR**: leftRotate(node.left) then rightRotate(node)
   - bf &lt; -1 AND value < node.right.data → **RL**: rightRotate(node.right) then leftRotate(node)
5. Return (possibly new) subtree root.

### Pseudocode

```
FUNCTION insert(node, value):
    IF node == NULL:
        RETURN new AVLNode(value)

    IF value < node.data:
        node.left = insert(node.left, value)
    ELSE IF value > node.data:
        node.right = insert(node.right, value)
    ELSE:
        RETURN node  // no duplicates

    updateHeight(node)

    bf = getBalanceFactor(node)

    // LL
    IF bf > 1 AND value < node.left.data:
        RETURN rightRotate(node)

    // RR
    IF bf < -1 AND value > node.right.data:
        RETURN leftRotate(node)

    // LR
    IF bf > 1 AND value > node.left.data:
        node.left = leftRotate(node.left)
        RETURN rightRotate(node)

    // RL
    IF bf < -1 AND value < node.right.data:
        node.right = rightRotate(node.right)
        RETURN leftRotate(node)

    RETURN node
```

### Step-by-Step Dry Run

Insert: [30, 20, 40, 10, 25, 35, 50, 5, 15]

**Insert 30:**
```
30 [bf=0, h=1]
```

**Insert 20:**
```
    30 [bf=+1, h=2]
   /
  20 [bf=0, h=1]
```
bf(30) = 1 ✓

**Insert 40:**
```
    30 [bf=0, h=2]
   /  \
  20   40
```
bf(30) = 2-2=0 ✓

**Insert 10:**
```
      30 [bf=+1, h=3]
     /  \
    20   40
   /
  10
```
bf(30) = 2-1=1 ✓

**Insert 25:**
```
      30 [bf=+1, h=3]
     /  \
    20   40
   /  \
  10  25
```
bf(30) = 2-1=1 ✓

**Insert 35:**
```
      30 [bf=0, h=3]
     /  \
    20   40
   /  \  /
  10 25 35
```
bf(30) = 2-2=0 ✓

**Insert 50:**
```
      30 [bf=-1, h=3]
     /  \
    20   40
   /  \  / \
  10 25 35 50
```
bf(30) = 2-2=0 ✓

**Insert 5:**
```
          30 [bf=+1, h=4]
         /  \
       20   40
      /  \  / \
     10  25 35 50
    /
   5
```
Heights: 5→1, 10→2, 20→3. bf(30) = 3-2=1 ✓

**Insert 15:**
```
            30 [bf=+2 ✗]
           /  \
         20   40
        /  \  / \
       10  25 35 50
      / \
     5  15
```
Heights: 5→1, 15→1, 10→2, 20→3, 30→4.
bf(20) = 2-1=1 ✓. bf(30) = 3-2 = **+2 ✗**

**Detect LR case at 30:** bf(30)=+2, bf(left child 20)=+1? No, bf(20) = h(10)=2 - h(25)=1 = +1. Since bf > 1 AND value(15) > node.left.data(20) → LR.

**Step A:** Left rotate at 20.
```
Before:            After:
     20              10
    /  \            /  \
   10  25          5   20
  / \                 /  \
 5  15              15   25
```

Tree becomes:
```
          30 [bf=+2 ✗]
         /  \
        10  40
       / \  / \
      5 20 35 50
        / \
       15 25
```

**Step B:** Right rotate at 30.
```
          20 [bf=0, h=3]
         /  \
       10    30
      / \   / \
     5  15 25 40
             /  \
            35  50
```

All balance factors ∈ {-1, 0, 1}. ✓ Final tree is perfectly balanced.

### C++ Implementation (Full Insert)

```cpp
AVLNode* insert(AVLNode* node, const T& value) {
    if (!node) return new AVLNode(value);

    if (value < node->data)
        node->left = insert(node->left, value);
    else if (value > node->data)
        node->right = insert(node->right, value);
    else
        return node;

    updateHeight(node);
    return rebalance(node, value);
}

AVLNode* rebalance(AVLNode* node, const T& value) {
    int bf = balanceFactor(node);

    // LL
    if (bf > 1 && value < node->left->data)
        return rotateRight(node);

    // RR
    if (bf < -1 && value > node->right->data)
        return rotateLeft(node);

    // LR
    if (bf > 1 && value > node->left->data) {
        node->left = rotateLeft(node->left);
        return rotateRight(node);
    }

    // RL
    if (bf < -1 && value < node->right->data) {
        node->right = rotateRight(node->right);
        return rotateLeft(node);
    }

    return node;
}
```

### Python Implementation (Full Insert)

```python
def insert(node, value):
    if node is None:
        return AVLNode(value)

    if value < node.data:
        node.left = insert(node.left, value)
    elif value > node.data:
        node.right = insert(node.right, value)
    else:
        return node

    update_height(node)
    return rebalance(node, value)

def rebalance(node, value):
    bf = balance_factor(node)

    # LL
    if bf > 1 and value < node.left.data:
        return rotate_right(node)

    # RR
    if bf < -1 and value > node.right.data:
        return rotate_left(node)

    # LR
    if bf > 1 and value > node.left.data:
        node.left = rotate_left(node.left)
        return rotate_right(node)

    # RL
    if bf < -1 and value < node.right.data:
        node.right = rotate_right(node.right)
        return rotate_left(node)

    return node
```

### Java Implementation (Full Insert)

```java
public AVLNode insert(AVLNode node, int value) {
    if (node == null) return new AVLNode(value);

    if (value < node.data)
        node.left = insert(node.left, value);
    else if (value > node.data)
        node.right = insert(node.right, value);
    else
        return node;

    updateHeight(node);
    return rebalance(node, value);
}

public AVLNode rebalance(AVLNode node, int value) {
    int bf = balanceFactor(node);

    // LL
    if (bf > 1 && value < node.left.data)
        return rotateRight(node);

    // RR
    if (bf < -1 && value > node.right.data)
        return rotateLeft(node);

    // LR
    if (bf > 1 && value > node.left.data) {
        node.left = rotateLeft(node.left);
        return rotateRight(node);
    }

    // RL
    if (bf < -1 && value < node.right.data) {
        node.right = rotateRight(node.right);
        return rotateLeft(node);
    }

    return node;
}
```

### Complexity Analysis

| Aspect | Value | Why |
|--------|-------|-----|
| Time (worst) | O(log n) | BST descent O(h) + ≤ 2 rotations O(1) + height updates O(h). h ≤ 1.44 log₂ n |
| Time (average) | O(log n) | Same bound |
| Space | O(log n) | Recursive call stack depth = tree height |
| Rotations per insert | ≤ 2 | At most one double rotation |

**Why only ≤ 2 rotations?** After inserting a node, the balance factor of an ancestor changes by at most ±1. Once you rotate at the first unbalanced node, the subtree height returns to its pre-insertion value. Ancestors above are unaffected — rotations **do not cascade** during insertion.

### Advantages & Disadvantages

| Advantages | Disadvantages |
|------------|---------------|
| Guaranteed O(log n) even with sorted input | More complex than BST insertion |
| At most one double rotation per insert | Recursive descent requires stack space |
| No amortization — every insert is individually fast | Slightly slower inserts than Red-Black trees |

### Edge Cases

| Case | Behavior |
|------|----------|
| **Empty tree** | New node becomes root, h=1, bf=0 |
| **Duplicate value** | Typically ignored. No height change. |
| **Insert causes no imbalance** | Height updates only — no rotation. |
| **Insert causes zigzag (LR/RL)** | Double rotation needed. |
| **Sorted ascending input** | RR at every 3rd insertion. |
| **Rotation at root** | Root pointer changes. Must update global root. |

---

## Deletion with Rebalancing

### Real-World Analogy

Removing a **support pillar from a building** — the floors above may settle unevenly, and this instability can propagate all the way up. Unlike insertion (where adding one brick tilts only one beam), deletion can cause cascading imbalance. Each floor-to-be ancestor must be checked and possibly re-shored.

### Algorithm Steps

1. **BST Delete:**
   - Leaf: delete directly.
   - One child: replace node with its child.
   - Two children: replace with inorder successor, then delete successor from right subtree.
2. **Update Height:** At each ancestor from deletion point to root.
3. **Check Balance:** Compute bf at each ancestor.
4. **Rebalance if |bf| > 1** (using child's bf to distinguish):
   - bf > 1 AND bf(left child) ≥ 0 → **LL**: rightRotate(node)
   - bf > 1 AND bf(left child) &lt; 0 → **LR**: leftRotate(left) then rightRotate(node)
   - bf &lt; -1 AND bf(right child) ≤ 0 → **RR**: leftRotate(node)
   - bf &lt; -1 AND bf(right child) &gt; 0 → **RL**: rightRotate(right) then leftRotate(node)
5. **Repeat** for EVERY ancestor up to root (deletion may cascade—unlike insertion).
6. Return the (possibly new) subtree root.

### Pseudocode

```
FUNCTION delete(node, value):
    IF node == NULL: RETURN NULL

    IF value < node.data:
        node.left = delete(node.left, value)
    ELSE IF value > node.data:
        node.right = delete(node.right, value)
    ELSE:
        IF node.left == NULL OR node.right == NULL:
            temp = node.left ? node.left : node.right
            delete node
            RETURN temp
        ELSE:
            successor = findMin(node.right)
            node.data = successor.data
            node.right = delete(node.right, successor.data)

    updateHeight(node)
    RETURN rebalanceDelete(node)

FUNCTION rebalanceDelete(node):
    IF node == NULL: RETURN NULL
    bf = getBalanceFactor(node)

    // LL
    IF bf > 1 AND getBalanceFactor(node.left) >= 0:
        RETURN rightRotate(node)

    // LR
    IF bf > 1 AND getBalanceFactor(node.left) < 0:
        node.left = leftRotate(node.left)
        RETURN rightRotate(node)

    // RR
    IF bf < -1 AND getBalanceFactor(node.right) <= 0:
        RETURN leftRotate(node)

    // RL
    IF bf < -1 AND getBalanceFactor(node.right) > 0:
        node.right = rightRotate(node.right)
        RETURN leftRotate(node)

    RETURN node
```

### Step-by-Step Dry Run

Start from a balanced AVL tree:

```
          30 [bf=0, h=4]
         /  \
       20    40 [bf=0, h=3]
      /  \   / \
     10  25 35 50
    /  \       / \
   5   15     45 55
```

#### Deletion 1: Delete 25 (leaf — no cascade)

**Step 1:** BST delete 25. Walk up:

```
          30 [bf=+1, h=4]
         /  \
       20    40
      /  \   / \
     10  -  35 50
    /  \      / \
   5   15    45 55
```

Heights: 20→h=3 (left=10(h=2), right=0). bf(20) = 2-0 = +1 ✓
30→h=4 (left=20(h=3), right=40(h=3)). bf(30) = 0 ✓

No rotations. ✓

#### Deletion 2: Delete 50 (one child — cascading)

**Step 1:** BST delete 50 — replace with its child 55.

```
          30 [bf=0, h=4]
         /  \
       20    40 [bf=-1, h=3]
      /  \   / \
     10  -  35 55
    /  \
   5   15
```

Check 40: left=35(h=1), right=55(h=1). bf(40) = 0 ✓

Check 30: left=20(h=3), right=40(h=2). bf(30) = 1 ✓

#### Deletion 3: Delete 10 (two children — cascading rotations)

**Step 1:** Inorder successor of 10 is 15. Copy 15 to node 10. Delete 15 from right subtree of 10.

```
          30
         /  \
       20    40
      /  \   / \
     15  -  35 55
    /
   5
```

**Step 2:** Walk up. Node 15 has bf = 1-0 = +1 ✓. Node 20 has bf = h(15)=2 - 0 = +2 ✗.

At 20: bf=+2, bf(left child 15) = +1 ≥ 0 → LL case.

**Step 3:** Right rotate at 20.

Before rotation at 20:
```
      20 [bf=+2 ✗]
     /  \
    15   null
   /
  5
```

After right rotate:
```
      15 [bf=0, h=2]
     /  \
    5   20
```

Tree:
```
          30 [bf=-1, h=3]
         /  \
       15    40
      /  \   / \
     5  20 35 55
```

**Step 4:** Walk up to 30. bf(30) = h(15)=2 - h(40)=2 = 0 ✓. Done.

#### Deletion 4: Delete 30 (root, two children — deep cascade)

**Step 1:** Inorder successor of 30 is 35. Copy 35. Delete 35 from right subtree.

```
          35 [bf=-1, h=3]
         /  \
       15    40
      /  \    \
     5  20    55
```

**Step 2:** Node 40: left=null, right=55(h=1). bf(40) = 0-1 = -1 ✓.
bf(35) = h(15)=2 - h(40)=1 = +1 ✓. No rotation.

### C++ Implementation (Full Delete)

```cpp
AVLNode* remove(AVLNode* node, const T& value) {
    if (!node) return nullptr;

    if (value < node->data)
        node->left = remove(node->left, value);
    else if (value > node->data)
        node->right = remove(node->right, value);
    else {
        if (!node->left || !node->right) {
            AVLNode* temp = node->left ? node->left : node->right;
            delete node;
            return temp;
        } else {
            AVLNode* successor = findMin(node->right);
            node->data = successor->data;
            node->right = remove(node->right, successor->data);
        }
    }

    updateHeight(node);
    return rebalanceDelete(node);
}

AVLNode* rebalanceDelete(AVLNode* node) {
    if (!node) return nullptr;
    int bf = balanceFactor(node);

    // LL
    if (bf > 1 && balanceFactor(node->left) >= 0)
        return rotateRight(node);

    // LR
    if (bf > 1 && balanceFactor(node->left) < 0) {
        node->left = rotateLeft(node->left);
        return rotateRight(node);
    }

    // RR
    if (bf < -1 && balanceFactor(node->right) <= 0)
        return rotateLeft(node);

    // RL
    if (bf < -1 && balanceFactor(node->right) > 0) {
        node->right = rotateRight(node->right);
        return rotateLeft(node);
    }

    return node;
}
```

### Python Implementation (Full Delete)

```python
def delete(node, value):
    if node is None:
        return None

    if value < node.data:
        node.left = delete(node.left, value)
    elif value > node.data:
        node.right = delete(node.right, value)
    else:
        if node.left is None or node.right is None:
            temp = node.left if node.left else node.right
            return temp
        else:
            successor = find_min(node.right)
            node.data = successor.data
            node.right = delete(node.right, successor.data)

    update_height(node)
    return rebalance_delete(node)

def rebalance_delete(node):
    if node is None:
        return None
    bf = balance_factor(node)

    # LL
    if bf > 1 and balance_factor(node.left) >= 0:
        return rotate_right(node)

    # LR
    if bf > 1 and balance_factor(node.left) < 0:
        node.left = rotate_left(node.left)
        return rotate_right(node)

    # RR
    if bf < -1 and balance_factor(node.right) <= 0:
        return rotate_left(node)

    # RL
    if bf < -1 and balance_factor(node.right) > 0:
        node.right = rotate_right(node.right)
        return rotate_left(node)

    return node
```

### Java Implementation (Full Delete)

```java
public AVLNode delete(AVLNode node, int value) {
    if (node == null) return null;

    if (value < node.data)
        node.left = delete(node.left, value);
    else if (value > node.data)
        node.right = delete(node.right, value);
    else {
        if (node.left == null || node.right == null) {
            AVLNode temp = (node.left != null) ? node.left : node.right;
            return temp;
        } else {
            AVLNode successor = findMin(node.right);
            node.data = successor.data;
            node.right = delete(node.right, successor.data);
        }
    }

    updateHeight(node);
    return rebalanceDelete(node);
}

public AVLNode rebalanceDelete(AVLNode node) {
    if (node == null) return null;
    int bf = balanceFactor(node);

    // LL
    if (bf > 1 && balanceFactor(node.left) >= 0)
        return rotateRight(node);

    // LR
    if (bf > 1 && balanceFactor(node.left) < 0) {
        node.left = rotateLeft(node.left);
        return rotateRight(node);
    }

    // RR
    if (bf < -1 && balanceFactor(node.right) <= 0)
        return rotateLeft(node);

    // RL
    if (bf < -1 && balanceFactor(node.right) > 0) {
        node.right = rotateRight(node.right);
        return rotateLeft(node);
    }

    return node;
}
```

### Complexity Analysis

| Aspect | Value | Why |
|--------|-------|-----|
| Time (worst) | O(log n) | BST delete O(h) + up to O(h) rotations × O(1) each |
| Rotations per delete | O(log n) | Unlike insertion, deletion may cascade to root |
| Space | O(log n) | Recursive stack depth = tree height |
| Height updates | O(log n) | Every ancestor updated |

**Why deletion cascades but insertion does not:** Insertion adds a leaf — the subtree height can increase by at most 1. After rotation, the height returns to the pre-insertion value, so ancestors are unaffected. Deletion removes a node — subtree height can decrease by 1, creating imbalance at ancestors. Fixing one level may change the height that the next ancestor sees, potentially creating a new imbalance. This propagates upward.

### Advantages & Disadvantages

| Advantages | Disadvantages |
|------------|---------------|
| Maintains O(log n) height after deletion | May require O(log n) rotations |
| Self-healing — tree stays balanced | More complex to implement than insert rebalance |
| No amortization — each delete is individually O(log n) | Needs to check child's balance (not inserted value) |

### Edge Cases

| Case | Behavior |
|------|----------|
| **Delete from empty tree** | Return null |
| **Delete leaf** | Direct removal; check ancestors for imbalance |
| **Delete node with one child** | Replace with child; check ancestors |
| **Delete node with two children** | Find successor; copy value; delete successor from right subtree |
| **Delete causes cascade** | Each ancestor up to root rechecked and possibly rotated |
| **Delete causes imbalance at root** | Rotation changes root — update global root pointer |

---

## AVL vs Red-Black vs B-Tree

| Feature | AVL Tree | Red-Black Tree | B-Tree (m=3) |
|---------|----------|----------------|--------------|
| Balance condition | \|bf\| ≤ 1 | Red property + black-height | All leaves at same depth |
| Height bound | ~1.44 log₂ n | ~2 log₂ n | log_m n |
| Search | **Fastest** (tightest balance) | Fast | Fast (fewer levels, wider nodes) |
| Insert rotations | ≤ 2 | ≤ 2 | Node splits |
| Delete rotations | O(log n) | ≤ 3 | Node merges |
| Extra storage per node | Height (int, ~4 bytes) | Color (1 bit) | Keys array + child pointers |
| Use case | **Search-heavy** workloads | Write-heavy, language stdlibs | **Disk-based** databases |
| Memory locality | Poor (pointer chasing) | Poor (pointer chasing) | **Excellent** (block-oriented) |
| Implementation complexity | Moderate | Moderate | High |
| Real-world examples | In-memory DB indices | Linux CF scheduler, C++ map | MySQL InnoDB, PostgreSQL, MongoDB |

**When to choose which:**
- **AVL** when reads dominate writes and search speed matters (compiler symbol tables, in-memory caches).
- **Red-Black** when writes are frequent and worst-case insert/delete bounds matter (OS schedulers, std::map).
- **B-Tree** when data lives on disk and block I/O is the bottleneck (relational databases, file systems).

---

## Interview Corner

### Q1: Explain AVL Rotations Visually

```
LL → Right rotate:
     z               y
    / \             / \
   y  T4    =>     x   z
  / \                 / \
 x  T3               T3 T4

RR → Left rotate:
 z                  y
/ \                / \
T1 y       =>     z   x
  / \                / \
 T2 x              T1 T2

LR → Left then Right:
   z              z              x
  / \            / \            / \
 y  T4    =>    x  T4    =>   y   z
/ \            / \            / \ / \
T1 x          y  T3          T1 T2 T3 T4
  / \        / \
 T2 T3      T1 T2

RL → Right then Left:
 z              z              x
/ \            / \            / \
T1 y     =>   T1 x      =>   z   y
  / \            / \        / \ / \
 x  T4          T1 y        T1 T2 T3 T4
/ \              / \
T2 T3           T2 T3
```

**Memory trick:** The name tells the direction of the first rotation. LR = Left then Right. RL = Right then Left. The grandparent always gets the opposite-direction single rotation.

### Q2: Check if a Binary Tree is AVL

```
FUNCTION isAVL(node):
    IF node == NULL: RETURN (true, 0)

    (leftAVL, leftH) = isAVL(node.left)
    (rightAVL, rightH) = isAVL(node.right)

    IF NOT leftAVL OR NOT rightAVL: RETURN (false, 0)

    bf = leftH - rightH
    IF |bf| > 1: RETURN (false, 0)

    height = 1 + max(leftH, rightH)
    RETURN (true, height)
```

Runs in O(n) time, O(h) space. Returns both AVL status and height in one post-order traversal.

### Q3: Count Rotations During a Sequence of Insertions

Maintain a counter. Every time `rotateRight()` or `rotateLeft()` is called (including inside double rotations), increment it.

```
Insert sequence: [30, 20, 10] → 1 rotation (LL at 30)
Insert sequence: [10, 20, 30] → 1 rotation (RR at 10)
Insert sequence: [30, 10, 20] → 2 rotations (LR at 30)
Insert sequence: [10, 30, 20] → 2 rotations (RL at 10)
```

### Q4: Worst-Case AVL Height

For an AVL tree with height h, the minimum number of nodes follows:
- N(0) = 0, N(1) = 1
- N(h) = N(h-1) + N(h-2) + 1

This Fibonacci-like recurrence gives N(h) ≈ φ^(h+2) / √5 - 1. Solving for h:
- h ≈ 1.44 log₂(n+2) — the **worst-case** height of an AVL tree.

For 1,000,000 nodes: h ≈ 1.44 × log₂(1,000,002) ≈ 1.44 × 20 = **28.7**. A million-node AVL tree fits in 29 levels.

### Q5: When Would You NOT Use AVL?

- **Write-heavy workloads** where insertions/deletions outnumber searches 2:1 or more.
- **Disk-backed storage** where B-tree's block-level access patterns are more efficient.
- **Memory-constrained environments** where the height int per node is significant.
- **When only worst-case insert/delete speed matters** — Red-Black trees have tighter delete rotation bounds (≤ 3).

---

## Applications in Real Systems

| Application | Why AVL | Details |
|-------------|---------|---------|
| **In-memory database indexes** | Guaranteed O(log n) search | SQLite in-memory mode, Redis sorted sets use skip lists but AVL is used by custom caching layers |
| **Compiler symbol tables** | Fast lookups, rare insertions | C++ compilers use AVL or hash tables for identifier resolution |
| **Real-time systems** | Predictable latency | Avionics, automotive ECUs — can tolerate AVL's O(log n) worst case, unlike hash tables |
| **Network routing tables** | Fast prefix lookup | Some software routers use AVL for prefix matching |
| **Gaming engines** | Entity lookup, spatial indexing | Entity-component systems use AVL for ID-to-entity maps |
| **File system indexing** | Directory tree balancing | Some in-memory FS layers (tmpfs internals) |
| **Text editors (Undo/Redo stacks)** | Balanced history trees | AVL tracks revision history with O(log n) lookup to any version |
| **Geometric algorithms** | Line sweep intersection | AVL is used as the status structure in Bentley-Ottmann line sweep |
| **Database query optimizers** | Cost estimation trees | AVL stores plan alternatives for quick minimum-cost lookup |

### Key Insight: AVL vs Hash Table

AVL trees support ordered operations that hash tables cannot:
- **Range queries:** "Find all keys between 1000 and 2000" — O(log n + k) in AVL, O(n) in hash table.
- **Ordered traversal:** Sorted iteration in O(n) — impossible in hash table.
- **Successor/Predecessor:** Find next/previous key in O(log n) — O(1) average in hash table only when approximate.

---

## Examples

> **One-Sentence Takeaway:** The code demonstrates how rotations, balance factor checking, and rebalancing work together to maintain the AVL invariant through insertions and deletions.

### Example 1: AVL Tree Full Implementation

```cpp
#include <iostream>
#include <algorithm>

template <typename T>
struct AVLNode {
    T data;
    AVLNode* left;
    AVLNode* right;
    int height;

    AVLNode(const T& value)
        : data(value), left(nullptr), right(nullptr), height(1) {}
};

template <typename T>
class AVLTree {
private:
    AVLNode<T>* root;

    int height(AVLNode<T>* node) const {
        return node ? node->height : 0;
    }

    int balanceFactor(AVLNode<T>* node) const {
        return node ? height(node->left) - height(node->right) : 0;
    }

    void updateHeight(AVLNode<T>* node) {
        if (node) {
            node->height = 1 + std::max(height(node->left), height(node->right));
        }
    }

    // Right rotate (LL case)
    AVLNode<T>* rotateRight(AVLNode<T>* z) {
        AVLNode<T>* y = z->left;
        AVLNode<T>* T2 = y->right;

        y->right = z;
        z->left = T2;

        updateHeight(z);
        updateHeight(y);
        return y;
    }

    // Left rotate (RR case)
    AVLNode<T>* rotateLeft(AVLNode<T>* z) {
        AVLNode<T>* y = z->right;
        AVLNode<T>* T2 = y->left;

        y->left = z;
        z->right = T2;

        updateHeight(z);
        updateHeight(y);
        return y;
    }

    AVLNode<T>* insert(AVLNode<T>* node, const T& value) {
        if (!node) return new AVLNode<T>(value);

        if (value < node->data)
            node->left = insert(node->left, value);
        else if (value > node->data)
            node->right = insert(node->right, value);
        else
            return node; // no duplicates

        updateHeight(node);
        return rebalance(node, value);
    }

    AVLNode<T>* rebalance(AVLNode<T>* node, const T& value) {
        int bf = balanceFactor(node);

        // LL case
        if (bf > 1 && value < node->left->data)
            return rotateRight(node);

        // RR case
        if (bf < -1 && value > node->right->data)
            return rotateLeft(node);

        // LR case
        if (bf > 1 && value > node->left->data) {
            node->left = rotateLeft(node->left);
            return rotateRight(node);
        }

        // RL case
        if (bf < -1 && value < node->right->data) {
            node->right = rotateRight(node->right);
            return rotateLeft(node);
        }

        return node;
    }

    AVLNode<T>* findMin(AVLNode<T>* node) const {
        while (node && node->left) node = node->left;
        return node;
    }

    AVLNode<T>* remove(AVLNode<T>* node, const T& value) {
        if (!node) return nullptr;

        if (value < node->data) {
            node->left = remove(node->left, value);
        } else if (value > node->data) {
            node->right = remove(node->right, value);
        } else {
            if (!node->left || !node->right) {
                AVLNode<T>* temp = node->left ? node->left : node->right;
                delete node;
                return temp;
            } else {
                AVLNode<T>* successor = findMin(node->right);
                node->data = successor->data;
                node->right = remove(node->right, successor->data);
            }
        }

        updateHeight(node);
        return rebalanceDelete(node);
    }

    AVLNode<T>* rebalanceDelete(AVLNode<T>* node) {
        if (!node) return nullptr;
        int bf = balanceFactor(node);

        // LL case
        if (bf > 1 && balanceFactor(node->left) >= 0)
            return rotateRight(node);

        // LR case
        if (bf > 1 && balanceFactor(node->left) < 0) {
            node->left = rotateLeft(node->left);
            return rotateRight(node);
        }

        // RR case
        if (bf < -1 && balanceFactor(node->right) <= 0)
            return rotateLeft(node);

        // RL case
        if (bf < -1 && balanceFactor(node->right) > 0) {
            node->right = rotateRight(node->right);
            return rotateLeft(node);
        }

        return node;
    }

    void inorder(AVLNode<T>* node) const {
        if (!node) return;
        inorder(node->left);
        std::cout << node->data << " ";
        inorder(node->right);
    }

    void destroy(AVLNode<T>* node) {
        if (!node) return;
        destroy(node->left);
        destroy(node->right);
        delete node;
    }

public:
    AVLTree() : root(nullptr) {}
    ~AVLTree() { destroy(root); }

    void insert(const T& value) { root = insert(root, value); }
    void remove(const T& value) { root = remove(root, value); }

    bool search(const T& value) const {
        AVLNode<T>* current = root;
        while (current) {
            if (value == current->data) return true;
            if (value < current->data) current = current->left;
            else current = current->right;
        }
        return false;
    }

    void inorder() const {
        inorder(root);
        std::cout << "\n";
    }

    int height() const { return height(root); }
};
```

### Example 2: AVL Tree Driver

```cpp
#include "avl.h"

int main() {
    AVLTree<int> avl;

    // Insert values that would cause a BST to become degenerate
    int values[] = {10, 20, 30, 40, 50, 5, 15, 25, 35, 45};
    for (int v : values) avl.insert(v);

    std::cout << "Inorder: ";
    avl.inorder();

    std::cout << "Height: " << avl.height() << "\n";
    std::cout << "Search 25: " << (avl.search(25) ? "found" : "not found") << "\n";
    std::cout << "Search 55: " << (avl.search(55) ? "found" : "not found") << "\n";

    avl.remove(10);
    std::cout << "After remove 10: ";
    avl.inorder();

    avl.remove(30);
    std::cout << "After remove 30: ";
    avl.inorder();

    avl.remove(50);
    std::cout << "After remove 50: ";
    avl.inorder();

    return 0;
}
```

**Output:**
```
Inorder: 5 10 15 20 25 30 35 40 45 50
Height: 3
Search 25: found
Search 55: not found
After remove 10: 5 15 20 25 30 35 40 45 50
After remove 30: 5 15 20 25 35 40 45 50
After remove 50: 5 15 20 25 35 40 45
```

### Example 3: Checking AVL Balance

```cpp
#include <iostream>

template <typename T>
bool isAVL(AVLNode<T>* node) {
    if (!node) return true;
    int bf = (node->left ? node->left->height : 0)
           - (node->right ? node->right->height : 0);
    if (bf < -1 || bf > 1) return false;
    return isAVL(node->left) && isAVL(node->right);
}

// Usage:
// std::cout << "Is AVL: " << (isAVL(avl.getRoot()) ? "yes" : "no") << "\n";
```

---

## Pro Tips

> **One-Sentence Takeaway:** Master single rotations (LL/RR) first — double rotations (LR/RL) are just two single rotations in sequence.

- **The four rotation patterns are just two**: LL and RR are symmetric (single rotations). LR and RL are symmetric (double rotations — rotate the child first, then the node). Master one direction and the other is mirrored.
- **Balance factor = height(left) - height(right)**: AVL invariant requires this to be -1, 0, or 1. After insertion, walk up to the first unbalanced node and apply the corresponding rotation.
- **Deletion may cascade**: Unlike insertion (at most one rotation needed), deletion may require rotations at multiple ancestors. Walk all the way up to the root, rebalancing at each unbalanced node.
- **AVL vs Red-Black**: AVL trees have tighter balance → faster lookups. Red-Black trees have faster insertions/deletions (fewer rotations). Choose AVL for search-heavy workloads.
- **Insert rebalancing uses `value` comparisons** to distinguish LL/LR/RR/RL. Delete rebalancing uses **child's balance factor** instead (since the deleted value is no longer in the tree for comparison).

## One-Sentence Takeaways

- AVL trees maintain height balance factor between -1, 0, and 1 for every node.
- Four rotation patterns (LL, RR, LR, RL) restore balance after modifications.
- Height is strictly \(O(\log n)\), guaranteeing logarithmic worst-case operations.
- Deletion may require multiple rotations propagating up to the root.
- AVL trees sacrifice insertion speed for faster lookups compared to Red-Black trees.
- The minimum number of nodes in an AVL tree of height h follows \(n(h) = n(h-1) + n(h-2) + 1\).

## Concept Comparison Table

| Feature | BST (unbalanced) | AVL Tree | Red-Black Tree |
|---------|------------------|----------|----------------|
| Height bound | \(n\) (worst) | \(1.44 \log n\) | \(2 \log n\) |
| Search | \(O(n)\) worst | \(O(\log n)\) | \(O(\log n)\) |
| Insert | \(O(n)\) worst | \(O(\log n)\) | \(O(\log n)\) |
| Delete | \(O(n)\) worst | \(O(\log n)\) | \(O(\log n)\) |
| Rotations per insert | 0 | ≤ 2 | ≤ 2 |
| Rotations per delete | 0 | \(O(\log n)\) | ≤ 3 |
| Extra storage | None | Balance factor (2 bits) | Color bit (1 bit) |

## Quick Reference: AVL Rotation Patterns

| Pattern | Condition | Operation | Result |
|---------|-----------|-----------|--------|
| LL | Left child is heavy-left | Single right rotation on node | Restores balance |
| RR | Right child is heavy-right | Single left rotation on node | Restores balance |
| LR | Left child is heavy-right | Left rotation on child, then right rotation on node | Restores balance |
| RL | Right child is heavy-left | Right rotation on child, then left rotation on node | Restores balance |

## Cross-Application Matrix

| Application | Why AVL |
|-------------|---------|
| Database in-memory index | Guaranteed \(O(\log n)\) search for large datasets |
| Compiler symbol table | Fast lookups, infrequent insertions |
| Real-time systems | Predictable worst-case performance |
| Network routing table | Fast prefix lookup, stable |
| Gaming (entity lookup) | Low latency, search-heavy workload |

## Common Mistakes & GFG Deepening

### Common Mistakes (GFG-Style)

| Mistake | Why It's Wrong | Correct Approach |
|---------|----------------|------------------|
| Forgetting to update height after rotation | Height of subtrees changes after rotation — old height gives wrong balance | Always recompute height = 1 + max(left.height, right.height) after each rotation |
| Checking balance before updating heights | Balance factor uses stale height values → false violation or false pass | Update heights first, then check balance |
| Wrong rotation case classification for insertion | Insert into left-left vs left-right of heavy subtree determines single vs double rotation | Map violation pattern → rotation type: LL (right-rotate), RR (left-rotate), LR (left-right), RL (right-left) |
| Applying rotation to wrong node (not the imbalanced ancestor) | Rotating the inserted node instead of the first imbalanced ancestor | Always find the deepest imbalanced node, then apply rotation on that node |
| Not rebalancing bottom-up after deletion | Deleting a node may leave ancestors imbalanced, not just the parent | After deletion, traverse up the path to root, updating heights and rebalancing |
| Forgetting that AVL deletion is harder than insertion | Insertion requires at most 2 rotations; deletion may require O(log n) rotations | Rebalance every node on the path from deleted node to root |
| Double rotation implementation: only rotating once | Doing only the first rotation (e.g., left) without the second (right) leaves the tree still imbalanced | LR = left-rotate(left child) then right-rotate(node); RL = right-rotate(right child) then left-rotate(node) |

### TypeScript AVL Tree Implementation

```typescript
class AVLNode {
    data: number;
    left: AVLNode | null = null;
    right: AVLNode | null = null;
    height: number = 1;

    constructor(data: number) {
        this.data = data;
    }
}

class AVLTree {
    private root: AVLNode | null = null;

    private height(node: AVLNode | null): number {
        return node ? node.height : 0;
    }

    private balanceFactor(node: AVLNode | null): number {
        return node ? this.height(node.left) - this.height(node.right) : 0;
    }

    private updateHeight(node: AVLNode): void {
        node.height = 1 + Math.max(this.height(node.left), this.height(node.right));
    }

    private rightRotate(y: AVLNode): AVLNode {
        const x = y.left!;
        const T2 = x.right;
        x.right = y;
        y.left = T2;
        this.updateHeight(y);
        this.updateHeight(x);
        return x;
    }

    private leftRotate(x: AVLNode): AVLNode {
        const y = x.right!;
        const T2 = y.left;
        y.left = x;
        x.right = T2;
        this.updateHeight(x);
        this.updateHeight(y);
        return y;
    }

    insert(data: number): void {
        this.root = this._insert(this.root, data);
    }

    private _insert(node: AVLNode | null, data: number): AVLNode {
        if (!node) return new AVLNode(data);
        if (data < node.data) node.left = this._insert(node.left, data);
        else if (data > node.data) node.right = this._insert(node.right, data);
        else return node; // no duplicates

        this.updateHeight(node);
        const bf = this.balanceFactor(node);

        // LL Case
        if (bf > 1 && data < node.left!.data) return this.rightRotate(node);
        // RR Case
        if (bf < -1 && data > node.right!.data) return this.leftRotate(node);
        // LR Case
        if (bf > 1 && data > node.left!.data) {
            node.left = this.leftRotate(node.left!);
            return this.rightRotate(node);
        }
        // RL Case
        if (bf < -1 && data < node.right!.data) {
            node.right = this.rightRotate(node.right!);
            return this.leftRotate(node);
        }
        return node;
    }

    delete(data: number): void {
        this.root = this._delete(this.root, data);
    }

    private _delete(node: AVLNode | null, data: number): AVLNode | null {
        if (!node) return null;
        if (data < node.data) node.left = this._delete(node.left, data);
        else if (data > node.data) node.right = this._delete(node.right, data);
        else {
            if (!node.left) return node.right;
            if (!node.right) return node.left;
            const succ = this._min(node.right!);
            node.data = succ.data;
            node.right = this._delete(node.right, succ.data);
        }
        if (!node) return null;

        this.updateHeight(node);
        const bf = this.balanceFactor(node);

        // LL
        if (bf > 1 && this.balanceFactor(node.left) >= 0) return this.rightRotate(node);
        // LR
        if (bf > 1 && this.balanceFactor(node.left) < 0) {
            node.left = this.leftRotate(node.left!);
            return this.rightRotate(node);
        }
        // RR
        if (bf < -1 && this.balanceFactor(node.right) <= 0) return this.leftRotate(node);
        // RL
        if (bf < -1 && this.balanceFactor(node.right) > 0) {
            node.right = this.rightRotate(node.right!);
            return this.leftRotate(node);
        }
        return node;
    }

    private _min(node: AVLNode): AVLNode {
        let curr = node;
        while (curr.left) curr = curr.left;
        return curr;
    }

    search(data: number): boolean {
        let curr = this.root;
        while (curr) {
            if (data === curr.data) return true;
            curr = data < curr.data ? curr.left : curr.right;
        }
        return false;
    }

    toArray(): number[] {
        const result: number[] = [];
        const stack: AVLNode[] = [];
        let curr = this.root;
        while (curr || stack.length > 0) {
            while (curr) { stack.push(curr); curr = curr.left; }
            curr = stack.pop()!;
            result.push(curr.data);
            curr = curr.right;
        }
        return result;
    }
}
```

### Additional MCQs (GFG Pattern)

9. **What is the maximum possible height of an AVL tree with 7 nodes?**
   - a) 2
   - b) 3 ✓
   - c) 4
   - d) 6

10. **How many rotations are needed at most during an AVL insertion?**
    - a) 1
    - b) 2 ✓
    - c) O(log n)
    - d) O(n)

11. **What is the worst-case time for searching in an AVL tree with n nodes?**
    - a) O(1)
    - b) O(log n) ✓
    - c) O(n)
    - d) O(n log n)

12. **What distinguishes an LR case from an LL case in AVL insertion?**
    - a) The imbalance is at the right child
    - b) The inserted node is in the right subtree of the left child ✓
    - c) Balance factor = 2
    - d) No rotation needed

13. **An AVL tree with height h has at least how many nodes (recursive formula)?**
    - a) N(h) = 2^h - 1
    - b) N(h) = N(h-1) + N(h-2) + 1 ✓ (Fibonacci-like)
    - c) N(h) = 2 × N(h-1)
    - d) N(h) = h²

14. **If an AVL deletion causes imbalance at multiple ancestors:**
    - a) Only one needs rebalancing
    - b) All ancestors on the path must be rebalanced ✓
    - c) The root is always rebalanced
    - d) No rebalancing is needed

**Answers:** 9-b, 10-b, 11-b, 12-b, 13-b, 14-b

### Additional Exercises (GFG Pattern)

14. **AVL tree property verification**: Write functions to verify that a given binary tree is a valid AVL tree (BST invariant + balance factor ≤ 1 + correct heights).

15. **Count nodes in range [L, R]**: Given an AVL tree and a range, count the number of nodes whose values lie in [L, R] in O(log n + k) time.

16. **AVL tree with augmentation**: Support `findKthSmallest(k)` in O(log n) by storing subtree sizes. Implement the insertion and rotation with size updates.

17. **Merge two AVL trees**: Given two AVL trees, merge them into one AVL tree. If the total size is m + n, aim for O(m + n) time by flattening to sorted array and building balanced tree.

18. **Split an AVL tree by key**: Given a key K, split the AVL tree into two trees: one with values ≤ K and one with values > K. Each must remain a valid AVL tree.

19. **AVL tree serialization**: Design an algorithm to serialize and deserialize an AVL tree, preserving both the BST property and the balance information.

20. **Largest BST in a binary tree**: Given a binary tree (not necessarily BST), find the largest subtree that is a valid BST. Use a bottom-up approach returning (min, max, size, isBST) from each node.

21. **AVL tree with duplicates**: Modify the AVL tree to support duplicate keys (e.g., using a count field per node). All operations should remain O(log n).

### Self-Balancing Trees Comparison

| Property | AVL | Red-Black | Splay | Treap | B-Tree |
|----------|-----|-----------|-------|-------|--------|
| Height bound | 1.44 log₂n | 2 log₂n | O(log n) amortized | O(log n) expected | log_{m/2}(n) |
| Search (worst) | O(log n) | O(log n) | O(log n) amortized | O(log n) | O(log n) |
| Insert (worst) | O(log n) | O(log n) | O(log n) amortized | O(log n) | O(log n) |
| Delete (worst) | O(log n) | O(log n) | O(log n) amortized | O(log n) | O(log n) |
| Rotations per insert | ≤ 2 | ≤ 2 | 0 (splay) | 0 (rotate after insert) | Node split |
| Balance strictness | Strict | Relaxed | None (amortized) | Probabilistic | Degree-based |
| Space overhead | Height field | Color bit | Parent ptr (optional) | Priority field | Multiple keys/pointers |
| Use case | Lookup-heavy | Insert-heavy | Locality of reference | Simple impl | Disk-based |
| Locality | Poor | Poor | Good (recent nodes near root) | Poor | Good (blocks/pages) |
   - c) -2, -1, 0, 1, 2
   - d) 0 only

2. **How many rotations may be needed after an AVL insertion?**
   - a) At most 1 ✅
   - b) At most 2
   - c) \(O(\log n)\)
   - d) 0

3. **LR rotation is:**
   - a) Single rotation
   - b) Double rotation (left then right) ✅
   - c) Double rotation (right then left)
   - d) No rotation needed

4. **What is the maximum height of an AVL tree with \(n\) nodes?**
   - a) \(n\)
   - b) \(1.44 \log n\) ✅
   - c) \(2 \log n\)
   - d) \(\log n\)

5. **Which is better for search-heavy workloads?**
   - a) AVL ✅
   - b) Red-Black
   - c) Unbalanced BST
   - d) Linked list

6. **Why can deletion require multiple rotations but insertion cannot?**
   - a) Deletion is recursive, insertion is iterative
   - b) Insertion restores original subtree height; deletion may not ✅
   - c) Deletion uses a different balance factor formula
   - d) Insertion never causes LL/RR imbalance

7. **How does delete rebalancing distinguish LL from LR (since the value is gone)?**
   - a) It uses the balance factor of the child node ✅
   - b) It randomly tries one rotation
   - c) It uses the deleted value, stored separately
   - d) It applies both and checks which works

**Answers:** 1-b, 2-a, 3-b, 4-b, 5-a, 6-b, 7-a

## Summary

- AVL trees maintain height balance via the balance factor (-1, 0, 1).
- Four rotation patterns (LL, RR, LR, RL) restore balance after modifications.
- Height is strictly \( O(\log n) \), guaranteeing logarithmic operations.
- Deletion rebalancing may require multiple rotations up the path.
- Insertion needs ≤ 2 rotations; deletion may cascade to the root.

## Exercises

### Review Questions

1. What is the balance factor, and what values does the AVL invariant permit?
2. What is the maximum height of an AVL tree with 1000 nodes?
3. Why does deletion in an AVL tree require checking balance at every ancestor?

### Application Problems

4. Draw the AVL tree resulting from inserting 1, 2, 3, 4, 5, 6, 7 in order. Show each rotation.
5. Implement a function that prints the balance factor of every node in an AVL tree.
6. Write a program that counts the number of rotations performed during a sequence of insertions.
7. Draw the step-by-step rotations when deleting node 15 from this AVL tree:
   ```
        20
       /  \
      10   30
     / \   / \
    5  15 25 35
   ```
8. Given the sequence [50, 30, 80, 20, 40, 70, 90, 10, 35, 45], build the AVL tree step by step showing the balance factor at every node after each insertion.

### Challenge Problem

9. Implement an **AVL tree with parent pointers** in each node. Show how successor, predecessor, and rebalancing after deletion can use parent pointers for \( O(\log n) \) upward traversal.
10. Implement an **iterative AVL insertion** (no recursion) using a stack to track the path from root to the new node. Compare its performance with the recursive version.
