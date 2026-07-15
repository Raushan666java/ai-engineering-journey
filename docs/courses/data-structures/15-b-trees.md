# Chapter 15: B-Trees and B+ Trees

**Prev:** [Chapter 14: Red-Black Trees](14-red-black.md) | **Next:** [Chapter 16: Trie (Prefix Tree)](16-trie.md)

## Learning Objectives

> **One-Sentence Takeaway:** B-trees achieve extremely shallow trees by using multi-way nodes that match disk block sizes, making them ideal for database indexing.

<!-- Image Gallery -->
<section class="lesson-visuals" aria-label="Visual learning resources">
  <header><span>VISUAL LEARNING</span><h2>See it. Review it. Remember it.</h2></header>
  <a class="lesson-visual-card" href="../../../assets/images/lessons/data-structures/15-b-trees/handwritten-notes.svg" target="_blank" rel="noopener">
    <img src="../../../assets/images/lessons/data-structures/15-b-trees/handwritten-notes.svg" alt="Handwritten notes" loading="lazy">
    <span><strong>Handwritten notes</strong>Condensed notes for deliberate review.</span>
  </a>
  <a class="lesson-visual-card" href="../../../assets/images/lessons/data-structures/15-b-trees/sticky-notes.svg" target="_blank" rel="noopener">
    <img src="../../../assets/images/lessons/data-structures/15-b-trees/sticky-notes.svg" alt="Sticky-note revision" loading="lazy">
    <span><strong>Sticky-note revision</strong>Fast recall prompts for revision.</span>
  </a>
  <a class="lesson-visual-card" href="../../../assets/images/lessons/data-structures/15-b-trees/visual-explanation.svg" target="_blank" rel="noopener">
    <img src="../../../assets/images/lessons/data-structures/15-b-trees/visual-explanation.svg" alt="Visual concept guide" loading="lazy">
    <span><strong>Visual concept guide</strong>A connected explanation of the key ideas.</span>
  </a>
</section>
<!-- End Image Gallery -->


- Define B-tree order, properties, and structure.
- Implement search, insertion, and deletion in B-trees.
- Describe B+ trees and their advantages for databases.
- Analyze B-tree height and complexity.

## Why B-Trees Matter

> **Real-World Analogy:** Imagine a library with 1 million books. A binary-search approach would require ~20 trips between shelves (each decision halves the search space). Now imagine you could grab an entire shelf of 500 books at once — each trip gives you 500 choices instead of 2. A B-tree is exactly that: instead of binary decisions, each "shelf" (node) holds hundreds of keys, so finding any book among 1 billion takes only 3-4 trips. This is why databases use B-trees — disk reads are slow, so maximizing keys-per-read minimizes I/O.

Traditional BSTs and AVL trees have branching factor 2 — each node has 1 key and 2 children. For 1 billion keys, an AVL tree has height ~30-45. Each level = one disk read. At 10ms per disk seek, that's 300-450ms per query. A B-tree of order 1000 has height ≤ 3 — that's 30ms. B-trees are not just "better balanced trees"; they are the bridge between algorithmic efficiency and physical storage reality.

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| Order m | Max children per node = m | Higher order → shallower trees |
| Node occupancy | At least ⌈m/2⌉ children, at most m | Prevents degenerate trees |
| Splitting | Full node splits in two, middle key rises | Propagation may reach root |
| Merging | Underfull node borrows or merges with sibling | Maintains occupancy invariant |
| Height bound | \(\log_{⌈m/2⌉} n\) | Order 1000 → height ≤ 3 for billions |
| B+ tree leaves | Linked list of data pages | Efficient range scans |

## Chapter Roadmap

```mermaid
flowchart TD
    A[B-Tree Concepts] --> B{Order m}
    B --> C[Node with m children max]
    C --> D[Insert Key]
    D --> E{Node Full?}
    E --> F[No → Insert in sorted order]
    E --> G[Yes → Split Node]
    G --> H[Middle key → parent]
    H --> I{Parent Full?}
    I --> G
    I --> J[Done]
    F --> J
    J --> K[Search: O(log n)]
    J --> L[B+ Tree: Linked Leaves]
    L --> M[Range Queries Efficient]
```

## Theory

> **One-Sentence Takeaway:** B-trees minimize disk I/O by packing hundreds of keys per node, so even massive databases need only 3-4 levels of traversal.

### B-Tree Definition and Properties


**Real-World Analogy (Organization Chart):** A multinational corporation has a CEO (root), regional VPs (internal nodes), and team leads (leaves). No VP reports to a lower-level manager than their peers — all leaves are at the same depth. Each executive manages between a minimum and maximum number of direct reports to avoid both underutilization and overload. This is exactly the B-tree invariant.

#### Formal Definition

A B-tree of **order m** is a balanced search tree satisfying:

1. **Multi-way branching:** Every node has at most \( m \) children (and thus at most \( m-1 \) keys).
2. **Minimum occupancy:** Every internal node (except the root) has at least \( \lceil m/2 \rceil \) children.
3. **Root leniency:** The root has at least 2 children if it is not a leaf (or at least 1 key).
4. **Leaf uniformity:** All leaves appear at the same level.
5. **Key-child relationship:** A non-leaf node with \( k \) children contains exactly \( k-1 \) keys.

**Example (order 5):** Internal nodes have 2-4 keys and 3-5 children. If any node drops below 2 keys, it must borrow or merge.

```
        [30, 60, 90]                    ← root (3 keys, 4 children)
       /    |    |    \
[10,20]  [40,50] [70,80] [100,110]      ← internal/leaf nodes
```

#### Properties

| Property | Expression | Why It Matters |
|----------|-----------|----------------|
| Max keys per node | \(m-1\) | Determines node size → matches disk block |
| Min keys (non-root) | \(\lceil m/2 \rceil - 1\) | Prevents degenerate trees |
| Max children | \(m\) | Branching factor |
| Min children (non-root) | \(\lceil m/2 \rceil\) | Ensures ≥50% space utilization |
| Height bound | \(\log_{\lceil m/2 \rceil} n\) | Guarantees logarithmic performance |

### Height Bound — Why It Matters


The height \( h \) of a B-tree of order \( m \) with \( n \) keys satisfies:

\[ h \le \log_{\lceil m/2 \rceil} \frac{n+1}{2} \]

**Proof intuition:** At minimum occupancy, each node has at least \(\lceil m/2 \rceil\) children. Level 0 (root) has 1 node, level 1 has at least 2, level 2 has at least \(2\lceil m/2 \rceil\), level 3 has at least \(2\lceil m/2 \rceil^2\), and so on. Summing the geometric series gives the bound above.

| Order (m) | Height for \(10^9\) keys | Disk reads per query |
|-----------|------------------------|---------------------|
| 2 (degenerate) | ~30 | 30 |
| 5 | ~14 | 14 |
| 50 | ~5 | 5 |
| 100 | ~4 | 4 |
| 1000 | ~3 | 3 |

### Search Operation


**Real-World Analogy (Dictionary with Guide Tabs):** A dictionary has guide words at the top of each page. To find "elephant", you flip to the section where guide words span "eagle–emerald", then narrow within that page. B-tree search is identical: at each node, you scan the keys (guide words) to pick the correct child pointer (page section).

#### Algorithm Steps

1. Start at root node.
2. Scan the node's keys left-to-right to find the position where the search key fits (between two adjacent keys, or before first, or after last).
3. If the current key matches the search key, return success (key + position).
4. If the node is a leaf and key not found, return failure.
5. Otherwise, follow the child pointer at that position and repeat from step 2.

#### Pseudocode

```
FUNCTION B_TREE_SEARCH(node, key):
    i = 0
    WHILE i < node.numKeys AND key > node.keys[i]:
        i = i + 1

    IF i < node.numKeys AND key == node.keys[i]:
        RETURN (node, i)   // Found

    IF node.isLeaf:
        RETURN NULL        // Not found

    RETURN B_TREE_SEARCH(node.children[i], key)
```

#### Dry Run: Search for key 55 in order-5 B-tree

Initial tree:
```
        [30, 60, 90]
       /    |    |    \
[10,20]  [40,50] [70,80] [100,110]
```

| Step | Current Node | Keys Scanned | i | Comparison | Action |
|------|-------------|-------------|---|-----------|--------|
| 1 | [30,60,90] | 30,60 | 1 | 55 &lt; 60 | Follow child[1] |
| 2 | [40,50] | 40,50 | 2 | 55 not in leaf | Not found |

**Result:** Key 55 not found.

#### Dry Run: Search for key 70

| Step | Current Node | Keys Scanned | i | Comparison | Action |
|------|-------------|-------------|---|-----------|--------|
| 1 | [30,60,90] | 30,60,90 | 2 | 70 > 60 but &lt; 90 | Follow child[2] |
| 2 | [70,80] | 70 | 0 | key == 70 | Found at node[2], pos[0] |

**Result:** Key 70 found.

#### Complexity Analysis

| Aspect | Complexity | Why |
|--------|-----------|-----|
| Time | \(O(\log_m n)\) | Height bound — each level narrows by branching factor |
| Disk I/Os | \(O(\log_m n)\) | Each node access = 1 disk read |
| CPU (within node) | \(O(m)\) | Linear scan within a node |
| Best case | \(O(\log_m n)\) | Same as worst — tree is always balanced |
| Worst case | \(O(\log_m n)\) | Minimum occupancy still gives logarithmic height |

**Why not O(log₂ n)?** In a BST, branching factor is 2, so height = log₂ n. In a B-tree of order 1000, branching factor is ~500, so height = log₅₀₀ n. For n = 10⁹: BST = 30 levels, B-tree = 3 levels. The logarithmic base matters enormously for disk-bound systems.

#### Edge Cases

| Case | Behavior |
|------|----------|
| Empty tree | Returns false immediately |
| Single-node tree | Searches within root only |
| Key smaller than all keys | i = 0, follow child[0] |
| Key larger than all keys | i = numKeys, follow child[numKeys] |
| Duplicate keys | Not allowed in standard B-trees |

#### C++ Implementation

```cpp
#include <iostream>
#include <vector>

const int ORDER = 5;  // max children = 5, max keys = 4

struct BTreeNode {
    std::vector<int> keys;
    std::vector<BTreeNode*> children;
    bool isLeaf;
    int numKeys;

    BTreeNode(bool leaf) : isLeaf(leaf), numKeys(0) {
        keys.resize(ORDER - 1);
        children.resize(ORDER);
    }
};

class BTree {
private:
    BTreeNode* root;

    bool search(BTreeNode* node, int key, BTreeNode*& resultNode, int& pos) const {
        if (!node) return false;
        int i = 0;
        while (i < node->numKeys && key > node->keys[i]) ++i;
        if (i < node->numKeys && key == node->keys[i]) {
            resultNode = node; pos = i; return true;
        }
        if (node->isLeaf) return false;
        return search(node->children[i], key, resultNode, pos);
    }

public:
    BTree() : root(nullptr) {}

    bool search(int key) const {
        BTreeNode* node = nullptr;
        int pos;
        return search(root, key, node, pos);
    }
};
```

#### Python Implementation

```python
class BTreeNode:
    def __init__(self, leaf=True):
        self.leaf = leaf
        self.keys = []
        self.children = []

class BTree:
    def __init__(self, order=5):
        self.root = None
        self.order = order

    def search(self, key, node=None):
        if node is None:
            node = self.root
        if node is None:
            return None

        i = 0
        while i < len(node.keys) and key > node.keys[i]:
            i += 1

        if i < len(node.keys) and key == node.keys[i]:
            return (node, i)

        if node.leaf:
            return None

        return self.search(key, node.children[i])
```

#### Java Implementation

```java
class BTreeNode {
    int[] keys;
    BTreeNode[] children;
    boolean isLeaf;
    int numKeys;
    int order;

    BTreeNode(int order, boolean isLeaf) {
        this.order = order;
        this.isLeaf = isLeaf;
        this.keys = new int[order - 1];
        this.children = new BTreeNode[order];
        this.numKeys = 0;
    }
}

class BTree {
    private BTreeNode root;
    private int order;

    public BTree(int order) {
        this.order = order;
        this.root = null;
    }

    public boolean search(int key) {
        return search(root, key);
    }

    private boolean search(BTreeNode node, int key) {
        if (node == null) return false;
        int i = 0;
        while (i < node.numKeys && key > node.keys[i]) i++;
        if (i < node.numKeys && key == node.keys[i]) return true;
        if (node.isLeaf) return false;
        return search(node.children[i], key);
    }
}
```

#### Advantages & Disadvantages

| Advantages | Disadvantages |
|------------|---------------|
| Very shallow height (3-4 for billions) | Complex implementation vs BST/AVL |
| Disk-I/O optimized (node = block) | Space overhead from partially-filled nodes |
| Automatically balanced | Deletion complexity is high |
| Good cache locality within node | Insertion can cascade splits to root |
| Supports range queries (B+ tree variant) | Not ideal for in-memory-only workloads |

### Insertion Operation


**Real-World Analogy (Cafeteria Trays):** A cafeteria stacks trays in columns. Each column holds at most 5 trays. When a column is full and a new tray arrives, you split the column into two columns of 2 and 3 trays, and the middle tray becomes the label for both columns. If the row above is also full, the split propagates upward — sometimes requiring a new row entirely.

#### Algorithm Steps

1. If tree is empty, create a new root node with the key.
2. Otherwise, find the leaf where the key should be inserted (by searching from root).
3. If the leaf has fewer than \(m-1\) keys, insert the key in sorted position.
4. If the leaf is full (has \(m-1\) keys):
   a. Split the node into two nodes: left (first \(\lfloor (m-1)/2 \rfloor\) keys) and right (remaining keys).
   b. Promote the middle key to the parent.
   c. The parent now has a new child pointer to the right node.
5. If the parent is now full, repeat step 4 recursively upward.
6. If the root splits, create a new root with the promoted key.

#### Pseudocode

```
FUNCTION B_TREE_INSERT(tree, key):
    root = tree.root
    IF root == NULL:
        tree.root = NEW_NODE(isLeaf=true)
        tree.root.keys[0] = key
        tree.root.numKeys = 1
        RETURN

    IF root.numKeys == ORDER - 1:
        newRoot = NEW_NODE(isLeaf=false)
        newRoot.children[0] = root
        SPLIT_CHILD(newRoot, 0, root)
        tree.root = newRoot

    INSERT_NON_FULL(tree.root, key)

FUNCTION INSERT_NON_FULL(node, key):
    i = node.numKeys - 1
    IF node.isLeaf:
        WHILE i >= 0 AND key < node.keys[i]:
            node.keys[i + 1] = node.keys[i]
            i = i - 1
        node.keys[i + 1] = key
        node.numKeys = node.numKeys + 1
    ELSE:
        WHILE i >= 0 AND key < node.keys[i]:
            i = i - 1
        i = i + 1
        IF node.children[i].numKeys == ORDER - 1:
            SPLIT_CHILD(node, i, node.children[i])
            IF key > node.keys[i]:
                i = i + 1
        INSERT_NON_FULL(node.children[i], key)

FUNCTION SPLIT_CHILD(parent, idx, child):
    newChild = NEW_NODE(isLeaf=child.isLeaf)
    newChild.numKeys = ORDER / 2
    FOR j = 0 TO ORDER/2 - 1:
        newChild.keys[j] = child.keys[j + ORDER/2]
    IF NOT child.isLeaf:
        FOR j = 0 TO ORDER/2:
            newChild.children[j] = child.children[j + ORDER/2]
    child.numKeys = ORDER/2
    FOR j = parent.numKeys DOWNTO idx + 1:
        parent.children[j + 1] = parent.children[j]
    parent.children[idx + 1] = newChild
    FOR j = parent.numKeys - 1 DOWNTO idx:
        parent.keys[j + 1] = parent.keys[j]
    parent.keys[idx] = child.keys[ORDER/2]
    parent.numKeys = parent.numKeys + 1
```

#### Dry Run: Insert keys 10, 20, 30, 40, 50 into order-5 B-tree

Order 5 → max 4 keys per node. Split trigger when inserting key 50.

**Step 1: Insert 10**
```
[10]
```

**Step 2: Insert 20**
```
[10, 20]
```

**Step 3: Insert 30**
```
[10, 20, 30]
```

**Step 4: Insert 40**
```
[10, 20, 30, 40]
```

**Step 5: Insert 50 — node full, SPLIT!**

Middle key = 30. Left = [10,20], Right = [40,50]. Root = [30].

```
     [30]
    /     \
[10,20]  [40,50]
```

#### Dry Run: Insert 5, 6, 7, 8, 9 into order-5 (continuing)

**Step 6: Insert 5** → goes to left leaf
```
     [30]
    /     \
[5,10,20]  [40,50]
```

**Step 7: Insert 6**
```
        [30]
       /     \
[5,6,10,20]  [40,50]
```

**Step 8: Insert 7** → left leaf full (4 keys), SPLIT!
Left leaf [5,6,10,20] after inserting 7 → [5,6,7,10,20]. Middle = 7. Left = [5,6], Right = [10,20].

```
        [7, 30]
       /   |    \
   [5,6] [10,20] [40,50]
```

**Step 9: Insert 8** → goes to middle leaf [10,20]
```
        [7, 30]
       /   |    \
   [5,6] [8,10,20] [40,50]
```

**Step 10: Insert 9** → middle leaf full → SPLIT!
Middle = 10, left = [8,9], right = [20]. Promote 10 to parent. Parent [7,30] → [7,10,30].

```
        [7, 10, 30]
       /   |   |    \
   [5,6] [8,9] [20] [40,50]
```

#### Complexity Analysis

| Aspect | Complexity | Why |
|--------|-----------|-----|
| Insert (time) | \(O(\log_m n)\) | Must traverse to leaf; splits propagate at most height |
| Disk I/Os | \(O(\log_m n)\) | Read path down + write splits back |
| Split cost | \(O(m)\) | Copying up to m keys/children per split |
| Amortized splits | \(O(1)\) per insert | Most inserts don't trigger splits |
| Worst-case splits | \(O(\log_m n)\) | Every level splits up to root |

**Why splits stay rare:** Each split creates two nodes at least 50% full. To trigger another split, both halves must fill again — requiring at least \( \lceil m/2 \rceil - 1 \) more inserts per half. Only 1 in every ~\( m/2 \) inserts causes a split.

#### Edge Cases

| Case | Behavior |
|------|----------|
| Empty tree | Create root with key |
| Root split | New root created; tree height increases by 1 |
| Split propagates to root | Same as above |
| Key already exists | Duplicates not allowed; insertion fails |
| Consecutive full nodes on path | Multiple splits cascade upward |

#### C++ Implementation (Insertion)

```cpp
void splitChild(BTreeNode* parent, int idx, BTreeNode* child) {
    BTreeNode* newChild = new BTreeNode(child->isLeaf);
    newChild->numKeys = ORDER / 2;

    for (int i = 0; i < ORDER / 2; ++i)
        newChild->keys[i] = child->keys[i + ORDER / 2];

    if (!child->isLeaf) {
        for (int i = 0; i <= ORDER / 2; ++i)
            newChild->children[i] = child->children[i + ORDER / 2];
    }

    child->numKeys = ORDER / 2;

    for (int i = parent->numKeys; i > idx; --i)
        parent->children[i + 1] = parent->children[i];
    parent->children[idx + 1] = newChild;

    for (int i = parent->numKeys - 1; i >= idx; --i)
        parent->keys[i + 1] = parent->keys[i];
    parent->keys[idx] = child->keys[ORDER / 2];
    ++parent->numKeys;
}

void insertNonFull(BTreeNode* node, int key) {
    int i = node->numKeys - 1;
    if (node->isLeaf) {
        while (i >= 0 && key < node->keys[i]) {
            node->keys[i + 1] = node->keys[i];
            --i;
        }
        node->keys[i + 1] = key;
        ++node->numKeys;
    } else {
        while (i >= 0 && key < node->keys[i]) --i;
        ++i;
        if (node->children[i]->numKeys == ORDER - 1) {
            splitChild(node, i, node->children[i]);
            if (key > node->keys[i]) ++i;
        }
        insertNonFull(node->children[i], key);
    }
}

void insert(int key) {
    if (!root) {
        root = new BTreeNode(true);
        root->keys[0] = key;
        root->numKeys = 1;
        return;
    }
    if (root->numKeys == ORDER - 1) {
        BTreeNode* newRoot = new BTreeNode(false);
        newRoot->children[0] = root;
        splitChild(newRoot, 0, root);
        root = newRoot;
    }
    insertNonFull(root, key);
}
```

#### Python Implementation (Insertion)

```python
class BTree:
    def __init__(self, order=5):
        self.root = None
        self.order = order

    def insert(self, key):
        if self.root is None:
            self.root = BTreeNode(leaf=True)
            self.root.keys.append(key)
            return

        if len(self.root.keys) == self.order - 1:
            new_root = BTreeNode(leaf=False)
            new_root.children.append(self.root)
            self._split_child(new_root, 0)
            self.root = new_root

        self._insert_non_full(self.root, key)

    def _insert_non_full(self, node, key):
        i = len(node.keys) - 1
        if node.leaf:
            node.keys.append(0)
            while i >= 0 and key < node.keys[i]:
                node.keys[i + 1] = node.keys[i]
                i -= 1
            node.keys[i + 1] = key
        else:
            while i >= 0 and key < node.keys[i]:
                i -= 1
            i += 1
            if len(node.children[i].keys) == self.order - 1:
                self._split_child(node, i)
                if key > node.keys[i]:
                    i += 1
            self._insert_non_full(node.children[i], key)

    def _split_child(self, parent, idx):
        order = self.order
        child = parent.children[idx]
        new_child = BTreeNode(leaf=child.leaf)

        mid = order // 2
        new_child.keys = child.keys[mid:]
        child.keys = child.keys[:mid]

        if not child.leaf:
            new_child.children = child.children[mid:]
            child.children = child.children[:mid]

        parent.children.insert(idx + 1, new_child)
        parent.keys.insert(idx, child.keys.pop())
```

#### Java Implementation (Insertion)

```java
class BTree {
    private BTreeNode root;
    private int order;

    public BTree(int order) {
        this.order = order;
        this.root = null;
    }

    public void insert(int key) {
        if (root == null) {
            root = new BTreeNode(order, true);
            root.keys[0] = key;
            root.numKeys = 1;
            return;
        }
        if (root.numKeys == order - 1) {
            BTreeNode newRoot = new BTreeNode(order, false);
            newRoot.children[0] = root;
            splitChild(newRoot, 0);
            root = newRoot;
        }
        insertNonFull(root, key);
    }

    private void splitChild(BTreeNode parent, int idx) {
        BTreeNode child = parent.children[idx];
        BTreeNode newChild = new BTreeNode(order, child.isLeaf);
        newChild.numKeys = order / 2;

        for (int i = 0; i < order / 2; i++)
            newChild.keys[i] = child.keys[i + order / 2];
        if (!child.isLeaf) {
            for (int i = 0; i <= order / 2; i++)
                newChild.children[i] = child.children[i + order / 2];
        }

        child.numKeys = order / 2;

        for (int i = parent.numKeys; i > idx; i--)
            parent.children[i + 1] = parent.children[i];
        parent.children[idx + 1] = newChild;

        for (int i = parent.numKeys - 1; i >= idx; i--)
            parent.keys[i + 1] = parent.keys[i];
        parent.keys[idx] = child.keys[order / 2];
        parent.numKeys++;
    }

    private void insertNonFull(BTreeNode node, int key) {
        int i = node.numKeys - 1;
        if (node.isLeaf) {
            while (i >= 0 && key < node.keys[i]) {
                node.keys[i + 1] = node.keys[i];
                i--;
            }
            node.keys[i + 1] = key;
            node.numKeys++;
        } else {
            while (i >= 0 && key < node.keys[i]) i--;
            i++;
            if (node.children[i].numKeys == order - 1) {
                splitChild(node, i);
                if (key > node.keys[i]) i++;
            }
            insertNonFull(node.children[i], key);
        }
    }
}
```

#### Advantages & Disadvantages (Insertion)

| Advantages | Disadvantages |
|------------|---------------|
| Maintains perfect balance automatically | Split logic is complex |
| No rebalancing needed after insert (unlike AVL) | Cascading splits can be expensive |
| High branching factor minimizes splits | Root split increases tree height |
| Single pass down (find + insert) | Requires parent pointers or stack |

### Deletion Operation


**Real-World Analogy (Library Shelf Restocking):** When books are removed from a shelf, the shelf must stay at least half-full. If it drops below, you either borrow a book from a neighboring shelf (redistribution) or merge two half-empty shelves into one (merge). The librarian may need to adjust the section labels (parent keys) accordingly.

#### Algorithm Steps

1. Find the key to delete.
2. **Case 1: Key in leaf** — simply remove it. If the leaf has at least \(\lceil m/2 \rceil - 1\) keys after removal, done.
3. **Case 2: Key in internal node** — find predecessor (max key in left subtree) or successor (min key in right subtree). Swap with the leaf key, then delete from leaf (now Case 1).
4. **Case 3: Underflow** — after deletion, if node has fewer than \(\lceil m/2 \rceil - 1\) keys:
   a. **Borrow from left sibling:** If left sibling has extra keys, rotate: sibling's rightmost key goes up to parent, parent key comes down.
   b. **Borrow from right sibling:** If right sibling has extra keys, rotate: sibling's leftmost key goes up to parent, parent key comes down.
   c. **Merge with sibling:** If neither sibling has extra keys, merge — parent key comes down into merged node.
5. **Merge propagation:** If merging causes the parent to underflow, repeat step 4 upward.
6. **Root underflow:** If the root becomes empty (0 keys), replace it with its only child.

#### Pseudocode

```
FUNCTION B_TREE_DELETE(tree, key):
    DELETE_FROM_NODE(tree.root, key)
    IF tree.root.numKeys == 0:
        IF tree.root.isLeaf:
            tree.root = NULL
        ELSE:
            tree.root = tree.root.children[0]

FUNCTION DELETE_FROM_NODE(node, key):
    i = FIND_KEY_POSITION(node, key)
    IF node.isLeaf:
        IF i < node.numKeys AND node.keys[i] == key:
            REMOVE_KEY(node, i)
    ELSE:
        IF i < node.numKeys AND node.keys[i] == key:
            pred = GET_PREDECESSOR(node, i)
            node.keys[i] = pred
            DELETE_FROM_NODE(node.children[i], pred)
        ELSE:
            DELETE_FROM_NODE(node.children[i], key)
    IF node != root AND node.numKeys < MIN_KEYS:
        FIX_UNDERFLOW(node)

FUNCTION FIX_UNDERFLOW(node):
    sibling, parentIdx = FIND_SIBLING(node)
    IF sibling.numKeys > MIN_KEYS:
        IF sibling is LEFT sibling:
            BORROW_FROM_LEFT(node, sibling, parentIdx)
        ELSE:
            BORROW_FROM_RIGHT(node, sibling, parentIdx)
    ELSE:
        MERGE_WITH_SIBLING(node, sibling, parentIdx)

FUNCTION BORROW_FROM_LEFT(node, leftSibling, parentIdx):
    SHIFT_KEYS_RIGHT(node)
    node.keys[0] = parent.keys[parentIdx - 1]
    parent.keys[parentIdx - 1] = leftSibling.keys[leftSibling.numKeys - 1]
    REMOVE_KEY(leftSibling, leftSibling.numKeys - 1)
    IF NOT node.isLeaf:
        SHIFT_CHILDREN_RIGHT(node)
        node.children[0] = leftSibling.children[leftSibling.numKeys]
        REMOVE_CHILD(leftSibling, leftSibling.numKeys)

FUNCTION MERGE_WITH_SIBLING(node, sibling, parentIdx):
    sibling.keys[MIN_KEYS] = parent.keys[parentIdx]
    COPY_KEYS(node, sibling, MIN_KEYS + 1)
    IF NOT node.isLeaf:
        COPY_CHILDREN(node, sibling, MIN_KEYS + 1)
    REMOVE_KEY(parent, parentIdx)
    REMOVE_CHILD(parent, parentIdx + 1)
    sibling.numKeys = sibling.numKeys + node.numKeys + 1
```

#### Dry Run: Deletion from B-tree of order 5 (min keys = 2)

Initial tree:
```
        [30, 60, 90]
       /    |    |    \
[10,20]  [40,50] [70,80] [100,110]
```

**Delete 20** (leaf, has extra keys — no underflow):

| Step | Action | Node State |
|------|--------|-----------|
| 1 | Find 20 in leaf [10,20] | [10,20] |
| 2 | Remove 20 | [10] |
| 3 | [10] has 1 key, min = 2. Underflow! | |
| 4 | Right sibling [40,50] has 2 keys (can spare 1) | Borrow from right |
| 5 | Rotate: [40,50] → parent → [10] | |

```
        [30, 60, 90]        →      [40, 60, 90]
       /    |    |    \            /    |    |    \
   [10]  [40,50] [...]    →   [10,30] [50]      [...]
```

Final after borrow:
```
        [40, 60, 90]
       /    |    |    \
[10,30]  [50] [70,80] [100,110]
```

**Delete 30** (internal node key — predecessor swap):

| Step | Action | Node State |
|------|--------|-----------|
| 1 | Find 30 at child[0] leaf [10,30] | |
| 2 | 30 in leaf node — remove | [10] (underflow!) |
| 3 | Right sibling [50] has 1 key (min=2). Cannot borrow. | Merge! |
| 4 | Merge [10] + parent key 40 + [50] → [10,40,50] | |
| 5 | Parent becomes [60,90] — valid | |

```
        [40, 60, 90]        →        [60, 90]
       /    |    |    \            /    |     \
[10,30]  [50] [...]        →  [10,40,50]  [70,80] [100,110]
```

#### Complexity Analysis

| Aspect | Complexity | Why |
|--------|-----------|-----|
| Time | \(O(\log_m n)\) | Traverse to leaf + possible propagations |
| Disk I/Os | \(O(\log_m n)\) | Read path + write back merged/borrowed nodes |
| Borrow cost | \(O(1)\) | Rotate fixed number of keys |
| Merge cost | \(O(m)\) | Copy up to m-1 keys |
| Worst-case merges | \(O(\log_m n)\) | Every level merges up to root |

**Why deletion doesn't degrade the tree:** Unlike BST deletion (which can create a degenerate tree), B-tree deletion invariants guarantee every node remains at least half full. The tree may shrink in height when the root becomes empty.

#### Edge Cases

| Case | Behavior |
|------|----------|
| Delete from leaf without underflow | Simple removal, no propagation |
| Delete from leaf causing underflow (borrow available) | Rotate from sibling, parent key updated |
| Delete from leaf causing underflow (no borrow) | Merge with sibling, parent key drops |
| Delete internal node key (predecessor/successor swap) | Swap then delete from leaf |
| Cascade merge reaches root | Root becomes empty → height decreases |
| Empty tree | Nothing to delete |

#### C++ Implementation (Deletion)

```cpp
void removeFromLeaf(BTreeNode* node, int idx) {
    for (int i = idx + 1; i < node->numKeys; ++i)
        node->keys[i - 1] = node->keys[i];
    node->numKeys--;
}

int getPredecessor(BTreeNode* node, int idx) {
    BTreeNode* cur = node->children[idx];
    while (!cur->isLeaf) cur = cur->children[cur->numKeys];
    return cur->keys[cur->numKeys - 1];
}

int getSuccessor(BTreeNode* node, int idx) {
    BTreeNode* cur = node->children[idx + 1];
    while (!cur->isLeaf) cur = cur->children[0];
    return cur->keys[0];
}

void borrowFromPrev(BTreeNode* node, int idx) {
    BTreeNode* child = node->children[idx];
    BTreeNode* sibling = node->children[idx - 1];
    for (int i = child->numKeys - 1; i >= 0; --i)
        child->keys[i + 1] = child->keys[i];
    if (!child->isLeaf) {
        for (int i = child->numKeys; i >= 0; --i)
            child->children[i + 1] = child->children[i];
    }
    child->keys[0] = node->keys[idx - 1];
    if (!child->isLeaf)
        child->children[0] = sibling->children[sibling->numKeys];
    node->keys[idx - 1] = sibling->keys[sibling->numKeys - 1];
    child->numKeys++;
    sibling->numKeys--;
}

void borrowFromNext(BTreeNode* node, int idx) {
    BTreeNode* child = node->children[idx];
    BTreeNode* sibling = node->children[idx + 1];
    child->keys[child->numKeys] = node->keys[idx];
    if (!child->isLeaf)
        child->children[child->numKeys + 1] = sibling->children[0];
    node->keys[idx] = sibling->keys[0];
    for (int i = 1; i < sibling->numKeys; ++i)
        sibling->keys[i - 1] = sibling->keys[i];
    if (!sibling->isLeaf) {
        for (int i = 1; i <= sibling->numKeys; ++i)
            sibling->children[i - 1] = sibling->children[i];
    }
    child->numKeys++;
    sibling->numKeys--;
}

void merge(BTreeNode* node, int idx) {
    BTreeNode* left = node->children[idx];
    BTreeNode* right = node->children[idx + 1];
    int MIN_KEYS = ORDER / 2;

    left->keys[MIN_KEYS] = node->keys[idx];
    for (int i = 0; i < right->numKeys; ++i)
        left->keys[MIN_KEYS + 1 + i] = right->keys[i];
    if (!left->isLeaf) {
        for (int i = 0; i <= right->numKeys; ++i)
            left->children[MIN_KEYS + 1 + i] = right->children[i];
    }
    left->numKeys = left->numKeys + right->numKeys + 1;

    for (int i = idx + 1; i < node->numKeys; ++i)
        node->keys[i - 1] = node->keys[i];
    for (int i = idx + 2; i <= node->numKeys; ++i)
        node->children[i - 1] = node->children[i];
    node->numKeys--;

    delete right;
}

void fixUnderflow(BTreeNode* node, int idx) {
    if (idx > 0 && node->children[idx - 1]->numKeys > ORDER / 2)
        borrowFromPrev(node, idx);
    else if (idx < node->numKeys && node->children[idx + 1]->numKeys > ORDER / 2)
        borrowFromNext(node, idx);
    else {
        if (idx < node->numKeys) merge(node, idx);
        else merge(node, idx - 1);
    }
}

void deleteKey(BTreeNode* node, int key) {
    int idx = 0;
    while (idx < node->numKeys && key > node->keys[idx]) ++idx;

    if (node->isLeaf) {
        if (idx < node->numKeys && node->keys[idx] == key)
            removeFromLeaf(node, idx);
        return;
    }

    if (idx < node->numKeys && node->keys[idx] == key) {
        if (node->children[idx]->numKeys > ORDER / 2) {
            int pred = getPredecessor(node, idx);
            node->keys[idx] = pred;
            deleteKey(node->children[idx], pred);
        } else if (node->children[idx + 1]->numKeys > ORDER / 2) {
            int succ = getSuccessor(node, idx);
            node->keys[idx] = succ;
            deleteKey(node->children[idx + 1], succ);
        } else {
            merge(node, idx);
            deleteKey(node->children[idx], key);
        }
    } else {
        deleteKey(node->children[idx], key);
    }

    if (node->children[idx]->numKeys < ORDER / 2 && node != root)
        fixUnderflow(node, idx);
}

void removeKey(int key) {
    if (!root) return;
    deleteKey(root, key);
    if (root->numKeys == 0) {
        BTreeNode* temp = root;
        if (root->isLeaf) root = nullptr;
        else root = root->children[0];
        delete temp;
    }
}
```

#### Python Implementation (Deletion)

```python
class BTree:
    def __init__(self, order=5):
        self.root = None
        self.order = order

    def delete(self, key):
        if self.root is None:
            return
        self._delete(self.root, key)
        if self.root and len(self.root.keys) == 0:
            if self.root.leaf:
                self.root = None
            else:
                self.root = self.root.children[0]

    def _delete(self, node, key):
        min_keys = (self.order + 1) // 2 - 1
        i = 0
        while i < len(node.keys) and key > node.keys[i]:
            i += 1

        if node.leaf:
            if i < len(node.keys) and node.keys[i] == key:
                node.keys.pop(i)
            return

        if i < len(node.keys) and node.keys[i] == key:
            if len(node.children[i].keys) > min_keys:
                pred = self._get_predecessor(node, i)
                node.keys[i] = pred
                self._delete(node.children[i], pred)
            elif len(node.children[i + 1].keys) > min_keys:
                succ = self._get_successor(node, i)
                node.keys[i] = succ
                self._delete(node.children[i + 1], succ)
            else:
                self._merge(node, i)
                self._delete(node.children[i], key)
        else:
            self._delete(node.children[i], key)

        if len(node.children[i].keys) < min_keys and node != self.root:
            self._fix_underflow(node, i)

    def _get_predecessor(self, node, idx):
        cur = node.children[idx]
        while not cur.leaf:
            cur = cur.children[-1]
        return cur.keys[-1]

    def _get_successor(self, node, idx):
        cur = node.children[idx + 1]
        while not cur.leaf:
            cur = cur.children[0]
        return cur.keys[0]

    def _fix_underflow(self, parent, idx):
        min_keys = (self.order + 1) // 2 - 1
        if idx > 0 and len(parent.children[idx - 1].keys) > min_keys:
            self._borrow_from_prev(parent, idx)
        elif idx < len(parent.children) - 1 and len(parent.children[idx + 1].keys) > min_keys:
            self._borrow_from_next(parent, idx)
        else:
            if idx < len(parent.children) - 1:
                self._merge(parent, idx)
            else:
                self._merge(parent, idx - 1)

    def _borrow_from_prev(self, parent, idx):
        child = parent.children[idx]
        sibling = parent.children[idx - 1]
        child.keys.insert(0, parent.keys[idx - 1])
        if not child.leaf:
            child.children.insert(0, sibling.children.pop())
        parent.keys[idx - 1] = sibling.keys.pop()

    def _borrow_from_next(self, parent, idx):
        child = parent.children[idx]
        sibling = parent.children[idx + 1]
        child.keys.append(parent.keys[idx])
        if not child.leaf:
            child.children.append(sibling.children.pop(0))
        parent.keys[idx] = sibling.keys.pop(0)

    def _merge(self, parent, idx):
        left = parent.children[idx]
        right = parent.children[idx + 1]
        left.keys.append(parent.keys.pop(idx))
        left.keys.extend(right.keys)
        if not left.leaf:
            left.children.extend(right.children)
        parent.children.pop(idx + 1)
```

#### Java Implementation (Deletion)

```java
class BTree {
    private BTreeNode root;
    private int order;
    private int minKeys() { return (int)Math.ceil(order / 2.0) - 1; }

    public BTree(int order) {
        this.order = order;
        this.root = null;
    }

    public void delete(int key) {
        if (root == null) return;
        deleteKey(root, key);
        if (root.numKeys == 0) {
            if (root.isLeaf) root = null;
            else root = root.children[0];
        }
    }

    private void deleteKey(BTreeNode node, int key) {
        int idx = 0;
        while (idx < node.numKeys && key > node.keys[idx]) idx++;

        if (node.isLeaf) {
            if (idx < node.numKeys && node.keys[idx] == key)
                removeFromLeaf(node, idx);
            return;
        }

        if (idx < node.numKeys && node.keys[idx] == key) {
            if (node.children[idx].numKeys > minKeys()) {
                int pred = getPredecessor(node, idx);
                node.keys[idx] = pred;
                deleteKey(node.children[idx], pred);
            } else if (node.children[idx + 1].numKeys > minKeys()) {
                int succ = getSuccessor(node, idx);
                node.keys[idx] = succ;
                deleteKey(node.children[idx + 1], succ);
            } else {
                merge(node, idx);
                deleteKey(node.children[idx], key);
            }
        } else {
            deleteKey(node.children[idx], key);
        }
        if (node.children[idx].numKeys < minKeys() && node != root)
            fixUnderflow(node, idx);
    }

    private int getPredecessor(BTreeNode node, int idx) {
        BTreeNode cur = node.children[idx];
        while (!cur.isLeaf) cur = cur.children[cur.numKeys];
        return cur.keys[cur.numKeys - 1];
    }

    private int getSuccessor(BTreeNode node, int idx) {
        BTreeNode cur = node.children[idx + 1];
        while (!cur.isLeaf) cur = cur.children[0];
        return cur.keys[0];
    }

    private void fixUnderflow(BTreeNode node, int idx) {
        if (idx > 0 && node.children[idx - 1].numKeys > minKeys())
            borrowFromPrev(node, idx);
        else if (idx < node.numKeys && node.children[idx + 1].numKeys > minKeys())
            borrowFromNext(node, idx);
        else {
            if (idx < node.numKeys) merge(node, idx);
            else merge(node, idx - 1);
        }
    }

    private void borrowFromPrev(BTreeNode node, int idx) {
        BTreeNode child = node.children[idx];
        BTreeNode sibling = node.children[idx - 1];
        for (int i = child.numKeys - 1; i >= 0; i--)
            child.keys[i + 1] = child.keys[i];
        if (!child.isLeaf) {
            for (int i = child.numKeys; i >= 0; i--)
                child.children[i + 1] = child.children[i];
        }
        child.keys[0] = node.keys[idx - 1];
        if (!child.isLeaf)
            child.children[0] = sibling.children[sibling.numKeys];
        node.keys[idx - 1] = sibling.keys[sibling.numKeys - 1];
        child.numKeys++;
        sibling.numKeys--;
    }

    private void borrowFromNext(BTreeNode node, int idx) {
        BTreeNode child = node.children[idx];
        BTreeNode sibling = node.children[idx + 1];
        child.keys[child.numKeys] = node.keys[idx];
        if (!child.isLeaf)
            child.children[child.numKeys + 1] = sibling.children[0];
        node.keys[idx] = sibling.keys[0];
        for (int i = 1; i < sibling.numKeys; i++)
            sibling.keys[i - 1] = sibling.keys[i];
        if (!sibling.isLeaf) {
            for (int i = 1; i <= sibling.numKeys; i++)
                sibling.children[i - 1] = sibling.children[i];
        }
        child.numKeys++;
        sibling.numKeys--;
    }

    private void merge(BTreeNode node, int idx) {
        BTreeNode left = node.children[idx];
        BTreeNode right = node.children[idx + 1];
        left.keys[minKeys()] = node.keys[idx];
        for (int i = 0; i < right.numKeys; i++)
            left.keys[minKeys() + 1 + i] = right.keys[i];
        if (!left.isLeaf) {
            for (int i = 0; i <= right.numKeys; i++)
                left.children[minKeys() + 1 + i] = right.children[i];
        }
        left.numKeys = left.numKeys + right.numKeys + 1;
        for (int i = idx + 1; i < node.numKeys; i++)
            node.keys[i - 1] = node.keys[i];
        for (int i = idx + 2; i <= node.numKeys; i++)
            node.children[i - 1] = node.children[i];
        node.numKeys--;
    }

    private void removeFromLeaf(BTreeNode node, int idx) {
        for (int i = idx + 1; i < node.numKeys; i++)
            node.keys[i - 1] = node.keys[i];
        node.numKeys--;
    }
}
```

#### Advantages & Disadvantages (Deletion)

| Advantages | Disadvantages |
|------------|---------------|
| Maintains ≥50% space utilization | Complex — 3 underflow handling cases |
| Tree height never increases from deletion | Borrow/merge logic is error-prone |
| Merges may reduce height (good) | Cascading merges can be expensive |
| No garbage accumulation (unlike BST) | Must handle predecessor/successor swap |

### B+ Trees


**Real-World Analogy (Library Index Card Catalog):** Imagine a library where the card catalog (internal nodes) only lists topic ranges — "A-F", "G-M", "N-Z" — with no actual books. To find a specific book, you look up the range, then go directly to the shelf (leaf) where all books in that range are stored. The shelves themselves are connected in alphabetical order, so browsing "G through K" means finding the first G-book, then walking forward shelf by shelf.

#### B+ Tree Properties

1. All keys are stored in the leaves (data nodes).
2. Internal nodes contain only routing keys — no data pointers.
3. Leaves are linked in a sorted doubly-linked list.
4. Internal nodes still obey B-tree occupancy rules.
5. All leaves are at the same depth.

#### Algorithm: B+ Tree Search

```
FUNCTION BPLUS_SEARCH(node, key):
    WHILE NOT node.isLeaf:
        i = 0
        WHILE i < node.numKeys AND key >= node.keys[i]:
            i = i + 1
        node = node.children[i]
    // Now at leaf
    FOR i = 0 TO node.numKeys - 1:
        IF node.keys[i] == key:
            RETURN node.values[i]
    RETURN NULL

FUNCTION BPLUS_RANGE_SCAN(startKey, endKey):
    leaf = FIND_LEAF(root, startKey)
    WHILE leaf != NULL:
        FOR i = 0 TO leaf.numKeys - 1:
            IF leaf.keys[i] > endKey:
                RETURN
            OUTPUT leaf.keys[i], leaf.values[i]
        leaf = leaf.next
```

#### B+ Tree vs B-Tree Comparison Table

| Feature | B-Tree | B+ Tree |
|---------|--------|---------|
| Data storage | Internal + leaf nodes | Leaf nodes only |
| Internal node content | Keys + data pointers | Keys only (routing) |
| Leaf links | None | Sorted linked list |
| Range query performance | \(O(\log n + k \cdot \log n)\) | \(O(\log n + k)\) |
| Space utilization | Lower (internal nodes hold data) | Higher (compact internal nodes) |
| Single key lookup | Same | Same |
| Index size | Larger | More compact |
| Disk block efficiency | Lower | Higher (more routing keys per block) |
| Implementation complexity | Moderate | More complex (two node types) |
| Cache friendliness | Good | Better (smaller internal nodes) |

**Why B+ trees dominate databases:**
- Internal nodes pack more routing keys (no data → more keys per block → fanout is higher → tree is shorter)
- Range scans are a linear walk of leaf pointers (no back-tracking up the tree)
- Clustered index scans are I/O-sequential (leaves are physically adjacent or linked)

#### Dry Run: B+ Tree Range Query

B+ tree of order 4:
```
Internal:        [50, 100]
                 /    |    \
Leaves:    [10,30,50] → [60,80,100] → [120,150,200]
```

**Range query:** Find all keys between 20 and 90

| Step | Action |
|------|--------|
| 1 | Search for key ≥ 20 at root [50,100] |
| 2 | 20 &lt; 50, follow child[0] to leaf [10,30,50] |
| 3 | Scan leaf: skip 10, output 30, 50 |
| 4 | Follow leaf link → next leaf [60,80,100] |
| 5 | Scan: output 60, 80. 100 > 90, stop. |
| 6 | **Result:** 30, 50, 60, 80 |

#### Complexity Analysis

| Operation | B-Tree | B+ Tree | Why B+ is better |
|-----------|--------|---------|-----------------|
| Search | \(O(\log_m n)\) | \(O(\log_m n)\) | Same |
| Insert | \(O(\log_m n)\) | \(O(\log_m n)\) | Same |
| Delete | \(O(\log_m n)\) | \(O(\log_m n)\) | Same |
| Range query | \(O(\log n + k \log n)\) | \(O(\log n + k)\) | B+ leaf scan avoids tree backtracking |
| Internal node fanout | Lower | Higher | No data in internal nodes |

#### C++ B+ Tree Skeleton

```cpp
#include <iostream>
#include <vector>

const int BPLUS_ORDER = 4;

struct BPlusLeaf {
    std::vector<int> keys;
    std::vector<int> values;
    BPlusLeaf* next;

    BPlusLeaf() : next(nullptr) {}
    bool isFull() const { return keys.size() >= BPLUS_ORDER; }
};

struct BPlusNode {
    std::vector<int> keys;
    std::vector<BPlusNode*> children;
    bool isLeaf;
    BPlusLeaf* leafHead;

    BPlusNode(bool leaf) : isLeaf(leaf), leafHead(nullptr) {}
    bool isFull() const { return keys.size() >= BPLUS_ORDER; }
};

class BPlusTree {
private:
    BPlusNode* root;

    BPlusLeaf* findLeaf(int key) {
        BPlusNode* node = root;
        while (node && !node->isLeaf) {
            int i = 0;
            while (i < (int)node->keys.size() && key >= node->keys[i]) ++i;
            node = node->children[i];
        }
        return node ? node->leafHead : nullptr;
    }

public:
    BPlusTree() : root(nullptr) {}

    std::vector<int> rangeQuery(int low, int high) {
        std::vector<int> result;
        BPlusLeaf* leaf = findLeaf(low);
        while (leaf) {
            for (int i = 0; i < (int)leaf->keys.size(); ++i) {
                if (leaf->keys[i] > high) return result;
                if (leaf->keys[i] >= low)
                    result.push_back(leaf->keys[i]);
            }
            leaf = leaf->next;
        }
        return result;
    }
};
```

#### Python B+ Tree Skeleton

```python
class BPlusLeaf:
    def __init__(self):
        self.keys = []
        self.values = []
        self.next = None

class BPlusNode:
    def __init__(self, leaf=False):
        self.keys = []
        self.children = []
        self.leaf = leaf
        self.leaf_head = None

class BPlusTree:
    def __init__(self, order=4):
        self.root = None
        self.order = order

    def find_leaf(self, key):
        node = self.root
        while node and not node.leaf:
            i = 0
            while i < len(node.keys) and key >= node.keys[i]:
                i += 1
            node = node.children[i]
        return node.leaf_head if node else None

    def range_query(self, low, high):
        result = []
        leaf = self.find_leaf(low)
        while leaf:
            for i, k in enumerate(leaf.keys):
                if k > high:
                    return result
                if k >= low:
                    result.append(k)
            leaf = leaf.next
        return result
```

#### Java B+ Tree Skeleton

```java
class BPlusLeaf {
    int[] keys;
    int[] values;
    BPlusLeaf next;
    int numKeys;

    BPlusLeaf(int order) {
        keys = new int[order];
        values = new int[order];
        next = null;
        numKeys = 0;
    }
}

class BPlusNode {
    int[] keys;
    BPlusNode[] children;
    boolean isLeaf;
    int numKeys;
    BPlusLeaf leafHead;

    BPlusNode(int order, boolean isLeaf) {
        keys = new int[order];
        children = new BPlusNode[order + 1];
        this.isLeaf = isLeaf;
        numKeys = 0;
        leafHead = null;
    }
}

class BPlusTree {
    private BPlusNode root;
    private int order;

    public BPlusTree(int order) {
        this.order = order;
        this.root = null;
    }

    private BPlusLeaf findLeaf(int key) {
        BPlusNode node = root;
        while (node != null && !node.isLeaf) {
            int i = 0;
            while (i < node.numKeys && key >= node.keys[i]) i++;
            node = node.children[i];
        }
        return node != null ? node.leafHead : null;
    }

    public java.util.List<Integer> rangeQuery(int low, int high) {
        java.util.List<Integer> result = new java.util.ArrayList<>();
        BPlusLeaf leaf = findLeaf(low);
        while (leaf != null) {
            for (int i = 0; i < leaf.numKeys; i++) {
                if (leaf.keys[i] > high) return result;
                if (leaf.keys[i] >= low)
                    result.add(leaf.keys[i]);
            }
            leaf = leaf.next;
        }
        return result;
    }
}
```

#### B+ Tree Advantages & Disadvantages

| Advantages | Disadvantages |
|------------|---------------|
| Superior range query performance | More complex code (two structures) |
| Higher fanout (compact internal nodes) | Duplicate keys (routing vs data) |
| Better disk block utilization | Leaf pointers add overhead |
| Sequential scan is O(log n + k) | Wasted space in internal nodes (routing only) |
| Industry standard for databases | Less suitable for pure in-memory use |

## B-Tree vs B+ Tree: When to Use What

| Scenario | Choose | Why |
|----------|--------|-----|
| Single-key lookups (primary key) | Either | Both are O(log n) |
| Range queries, sorted scans | **B+ Tree** | Leaf-linked lists avoid tree backtracking |
| In-memory index (small data) | B-Tree | Simpler, no duplicate keys |
| File system directory | B-Tree (ext4 Htree) | No range scans needed |
| Database clustered index | **B+ Tree** | Range scans + high fanout |
| OLTP (many single-row lookups) | **B+ Tree** | InnoDB, PostgreSQL default |
| OLAP (many range aggregations) | **B+ Tree** | Columnar stores use variants |

## Interview Corner

### Q1: Why are B-trees used for disk-based storage instead of BSTs or AVL trees?

**Answer:** Disk I/O is ~10,000x slower than RAM access (10ms for a disk seek vs 1μs for RAM). In a BST with 1 billion keys, each lookup requires ~30 node traversals. Each traversal is a random disk read → 300ms per query. A B-tree of order 1000 packs 999 keys per node, so height ≤ 3 → only 3 random disk reads → 30ms per query. Additionally, B-tree node size is intentionally matched to disk blocks (usually 4KB-16KB), so each read brings in an entire node in one I/O operation.

### Q2: B+ tree vs B-tree for range queries — explain the difference.

**Answer:** In a B-tree, a range query "find all keys between 10 and 100" works by:
1. Find key 10 (O(log n)) — done.
2. Find successor of 10 (backtrack to parent, follow next child) — another O(log n) worst case.
3. Repeat for each key in range: O(k log n) total.

In a B+ tree:
1. Find the leaf containing key 10 (O(log n)) — done.
2. Walk the leaf's linked list forward until > 100.
3. Total: O(log n + k).

**Empirical:** For a range of 10,000 keys in a tree of 10⁹ keys, B+ tree does ~3 + 10,000 = 10,003 operations. B-tree does ~10,000 × 3 = 30,000 operations — 3x worse.

### Q3: How do you choose the order m of a B-tree?

**Answer:** The order is chosen to make each node fit exactly into one disk block:
\[ m = \frac{\text{block size} - \text{overhead}}{\text{key size} + \text{child pointer size}} \]

| Block size | Typical m | Keys/node | Height for 10⁹ |
|-----------|-----------|-----------|-----------------|
| 4 KB | ~200 | ~199 | ~4 |
| 8 KB | ~400 | ~399 | ~3 |
| 16 KB | ~800 | ~799 | ~3 |

MySQL InnoDB default page = 16KB → effective order ~1000 for 8-byte keys. The rule: maximize m within the block size to minimize tree height.

### Q4: What happens when you insert into a B-tree in sorted order (ascending)?

**Answer:** Sequential insertion (1, 2, 3, ...) causes maximum node splits. Each new key fills the rightmost leaf, causing a split that propagates some distance upward. However, unlike BSTs (where sorted insertion creates a degenerate linked list), B-trees remain perfectly balanced. Every insert still takes O(log n). This is a key advantage over BSTs.

### Q5: What is fill factor and why does it matter?

**Answer:** Fill factor measures how full the nodes are. B-tree minimum guarantee is 50% (by the ⌈m/2⌉ rule). Actual fill factor in practice is ~65-70% for random insert patterns. For B+ trees used as database indexes, a higher fill factor means fewer nodes → smaller tree height → better performance. MySQL InnoDB allows configuring the fill factor. A low fill factor (<50%) indicates a design problem — consider rebuilding the index.

### Q6: How do concurrent B-trees work (latching)?

**Answer:** Concurrent B-tree access uses **crabbing** (lock-coupling):
1. Lock the root.
2. Lock the child.
3. If the child is not a split/merge risk, release the parent lock.
4. Continue down — always holding at most 2 locks.

For higher concurrency, **B-link trees** add sibling pointers at every level. A search that encounters a mid-split node can follow the sibling link without waiting for the split to complete. PostgreSQL uses a variant of this for its B-tree index concurrency.

## Applications in Real Systems

| System | Tree Type | How It's Used |
|--------|-----------|---------------|
| **MySQL InnoDB** | B+ Tree | Primary key = clustered index (data stored in leaf pages). Secondary indexes point to primary key. Default page = 16KB. |
| **PostgreSQL** | B+ Tree (B-link) | Default index type. B-link tree concurrency. Supports INCLUDE clause for covering indexes. |
| **MongoDB WiredTiger** | B-Tree (LSM variant) | Document index with B-tree internal nodes. LSM trees for write-heavy workloads. |
| **Oracle Database** | B+ Tree | Clustered and secondary indexes. Index-organized tables store rows in B-tree leaves. |
| **NTFS** | B+ Tree | Master File Table (MFT) is a B+ tree for file metadata. Directory indexes for fast filename lookups. |
| **ext4** | H-tree (B-tree variant) | Directory indexing uses hash-based B-tree (Htree). Fast lookups for large directories. |
| **HFS+ (macOS)** | B-Tree | Catalog file (directory hierarchy). Extents overflow file for large file allocation. |
| **SQLite** | B+ Tree | Each table and index is a separate B+ tree. Pages are 4KB default. |
| **IBM DB2** | B+ Tree | Universal index with multiple key types. Bidirectional indexes. |
| **AWS DynamoDB** | B+ Tree (LSM) | LSM tree with B+ tree structure on each level. Write-optimized with background compaction. |

### Deeper Dive: Database Indexing

**MySQL InnoDB Example:**

```sql
-- Primary key creates a B+ tree clustered index
CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
);

-- Secondary index creates another B+ tree
CREATE INDEX idx_name ON users(name);

-- Query uses B+ tree:
-- 1. Search idx_name B+ tree for 'Alice' → get primary key id
-- 2. Search primary key B+ tree for that id → get full row
SELECT * FROM users WHERE name = 'Alice';

-- Range query is efficient on B+ tree:
-- 1. Find leaf for id=100
-- 2. Walk leaf linked list to id=200
SELECT * FROM users WHERE id BETWEEN 100 AND 200;
```

**Why PostgreSQL's B-tree is special:** PostgreSQL implements a "B-link tree" variant with:
- Right-sibling pointers at every level (not just leaves)
- Lehman-Yao concurrent access algorithm (high concurrency without read locks)
- Deduplication (compresses duplicate keys in internal nodes)
- INCLUDE clause (add non-key columns in unique indexes)

```sql
-- PostgreSQL unique index with included non-key columns
CREATE UNIQUE INDEX idx_unique ON users (email) INCLUDE (name, created_at);
-- B+ tree: email in keys (internal + leaf), name+created_at only in leaves
```

**MongoDB WiredTiger:**

```javascript
// MongoDB creates a B-tree index on the specified field
db.users.createIndex({ email: 1 });

// Compound index
db.users.createIndex({ name: 1, age: -1 });

// TTL index (time-to-live) uses B-tree for sorted deletion
db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 });
```

## Quick Reference: B-Tree Order and Height

| Order (m) | Min Keys/Node | Max Keys/Node | Height for 10⁶ | Height for 10⁹ |
|-----------|---------------|---------------|----------------|----------------|
| 3 | 1 | 2 | ~20 | ~30 |
| 5 | 2 | 4 | ~10 | ~14 |
| 50 | 24 | 49 | ~4 | ~5 |
| 100 | 49 | 99 | ~3 | ~4 |
| 200 | 99 | 199 | ~3 | ~4 |
| 1000 | 499 | 999 | ~2 | ~3 |

## Concept Comparison Table

| Feature | BST | AVL | B-Tree (order m) | B+ Tree |
|---------|-----|-----|------------------|---------|
| Branching factor | 2 | 2 | Up to m | Up to m |
| Height | \(n\) | \(1.44 \log n\) | \(\log_{m/2} n\) | \(\log_{m/2} n\) |
| Internal nodes | Store data | Store data | Store data | Only keys |
| Leaf nodes | Store data | Store data | Store data | Store keys + data or data ptrs |
| Leaf links | No | No | No | Yes (sorted linked list) |
| Disk-friendly | No | No | Yes | Yes |
| Range queries | \(O(n)\) | \(O(n)\) | \(O(n)\) | \(O(\log n + k)\) |
| Space | O(n) | O(n) | O(n) | O(n) |
| Self-balancing | No | Yes | Yes | Yes |
| Concurrency support | Low | Low | Medium | High (B-link) |

## Cross-Application Matrix

| System | Tree Type | Why |
|--------|-----------|-----|
| MySQL InnoDB | B+ tree | Primary key index, range scans |
| PostgreSQL | B+ tree (B-link) | General-purpose index, high concurrency |
| NTFS (MFT) | B+ tree | File metadata lookup |
| ext4 | H-tree (B-tree variant) | Directory indexing |
| MongoDB | B-tree (WiredTiger) | Document index |
| Oracle | B+ tree | Clustered and secondary indexes |
| SQLite | B+ tree | Table/index storage |
| HFS+ | B-tree | Directory hierarchy |
| DynamoDB | B+ tree (LSM) | Partitioned key-value store |

## Common Mistakes & GFG Deepening

### Common Mistakes (GFG-Style)

| Mistake | Why It's Wrong | Correct Approach |
|---------|----------------|------------------|
| Confusing "order m" definitions (max children vs max keys) | Some texts define m as max children, others as max keys | Clarify: order m B-tree has m max children, m-1 max keys |
| Not splitting when inserting into a full node | Attempting insertion without splitting violates B-tree properties | Always split the full node first (at median), then insert into appropriate child |
| Inserting into a full root before splitting | Root overflow must be handled by creating a new root | Split root at median, create new root with median key, two children |
| Wrong key count after deletion (underflow) | Merging neighbors without ensuring correct total key count | After merge, parent loses one key; total = keys_left + 1 + keys_right |
| Not handling deletion from internal nodes | Deleting an internal key requires finding predecessor/successor from leaf | Replace with inorder predecessor (max of left child) or successor (min of right child) |
| Forgetting that all leaves must be at the same depth | B-tree property: all leaf nodes at level h | Verify tree after each operation — any leaf at different depth = violation |
| Confusing B-tree with B+ tree (linked leaves) | B+ tree has all data in leaves with linked list; B-tree has data in all nodes | B-tree: data in every node; B+ tree: data only in leaves, leaves linked |

### TypeScript B-Tree Implementation (simplified)

```typescript
class BTreeNode {
    keys: number[] = [];
    children: BTreeNode[] = [];
    leaf: boolean;

    constructor(leaf: boolean) { this.leaf = leaf; }
}

class BTree {
    private root: BTreeNode;
    private t: number; // minimum degree (node can have t-1 to 2t-1 keys)

    constructor(t: number) {
        this.t = t;
        this.root = new BTreeNode(true);
    }

    search(key: number): boolean {
        return this._search(this.root, key);
    }

    private _search(node: BTreeNode, key: number): boolean {
        let i = 0;
        while (i < node.keys.length && key > node.keys[i]) i++;
        if (i < node.keys.length && key === node.keys[i]) return true;
        if (node.leaf) return false;
        return this._search(node.children[i], key);
    }

    insert(key: number): void {
        const r = this.root;
        if (r.keys.length === 2 * this.t - 1) {
            const s = new BTreeNode(false);
            s.children.push(r);
            this.root = s;
            this.splitChild(s, 0);
            this.insertNonFull(s, key);
        } else {
            this.insertNonFull(r, key);
        }
    }

    private splitChild(parent: BTreeNode, i: number): void {
        const y = parent.children[i];
        const z = new BTreeNode(y.leaf);
        const mid = y.keys[this.t - 1];
        
        z.keys = y.keys.splice(this.t); // take upper half
        const midKey = y.keys.pop()!; // actually splice already removes

        // Wait, let me fix this
        // y.keys from 0 to t-2 remain, key at t-1 goes up, keys from t to 2t-2 go to z
        const midKeyCorrect = y.keys[this.t - 1];
        z.keys = y.keys.splice(this.t); // keeps keys from this.t onward

        if (!y.leaf) {
            z.children = y.children.splice(this.t);
        }
        parent.children.splice(i + 1, 0, z);
        parent.keys.splice(i, 0, midKeyCorrect);
    }

    private insertNonFull(node: BTreeNode, key: number): void {
        let i = node.keys.length - 1;
        if (node.leaf) {
            // Find position and insert
            node.keys.push(0); // placeholder
            while (i >= 0 && key < node.keys[i]) {
                node.keys[i + 1] = node.keys[i];
                i--;
            }
            node.keys[i + 1] = key;
        } else {
            while (i >= 0 && key < node.keys[i]) i--;
            i++;
            if (node.children[i].keys.length === 2 * this.t - 1) {
                this.splitChild(node, i);
                if (key > node.keys[i]) i++;
            }
            this.insertNonFull(node.children[i], key);
        }
    }

    traverse(): number[] {
        const result: number[] = [];
        this._traverse(this.root, result);
        return result;
    }

    private _traverse(node: BTreeNode, result: number[]): void {
        let i = 0;
        for (; i < node.keys.length; i++) {
            if (!node.leaf) this._traverse(node.children[i], result);
            result.push(node.keys[i]);
        }
        if (!node.leaf) this._traverse(node.children[i], result);
    }
}

// B+ Tree style: In-order traversal produces sorted keys
function bTreeSearchRange(tree: BTree, low: number, high: number): number[] {
    return tree.traverse().filter(k => k >= low && k <= high);
}
```

### Additional MCQs (GFG Pattern)

9. **In a B-tree of order 5 (max 5 children), what is the maximum number of keys in a node?**
   - a) 4 ✓
   - b) 5
   - c) 3
   - d) 6

10. **How many children does a node with k keys have in a B-tree (non-leaf, non-root)?**
    - a) k
    - b) k + 1 ✓
    - c) 2k
    - d) k - 1

11. **What is the height bound of a B-tree with n keys and minimum degree t?**
    - a) log₂n
    - b) log_t(n) ✓
    - c) log₂(t × n)
    - d) n/t

12. **Which operation is more efficient in a B+ tree compared to a standard B-tree?**
    - a) Point search
    - b) Range queries ✓
    - c) Insertion
    - d) Deletion

13. **In a B-tree deletion, when a node underflows after borrowing from a sibling fails:**
    - a) The node is deleted
    - b) The node is merged with a sibling ✓
    - c) A new key is generated
    - d) The tree height increases

14. **The primary reason databases use B-trees/B+ trees is:**
    - a) They use less memory than hash tables
    - b) They minimize disk I/O by having a large branching factor ✓
    - c) They are simpler to implement than AVL trees
    - d) They support O(1) key lookups

**Answers:** 9-a, 10-b, 11-b, 12-b, 13-b, 14-b

### Additional Exercises (GFG Pattern)

12. **B-tree level printing**: Print all keys in a B-tree level by level, showing the keys in each node separated by structure.

13. **Verify B-tree properties**: Write a function that checks all B-tree properties: keys sorted, min/max key counts, all leaves at same depth.

14. **B-tree with lazy deletion**: Instead of physically deleting keys, mark them as deleted. Modify search to ignore marked keys. Analyze space impact.

15. **Convert B-tree to B+ tree**: Given a B-tree, rebuild it as a B+ tree where all data resides in leaves and leaves are linked for range queries.

16. **B-tree bulk loading**: Given a sorted array of n keys, construct a B-tree directly in O(n) time (instead of n insertions). Use the bottom-up approach.

17. **Find the median of B-tree**: Given a B-tree, find the median key without extracting all keys. Use rank-based traversal.

18. **B-tree with variable-length keys**: Modify the B-tree to support variable-length string keys. How does the order m change?

19. **B-tree node visualization**: Create a function that outputs a node in DOT format for GraphViz, showing keys and children with pointers.

20. **Concurrent B-tree operations**: Describe and implement a locking protocol (latch crabbing) for concurrent B-tree insertions.

### B-Tree Variants Comparison

| Property | B-Tree | B+ Tree | B* Tree | R-Tree | 2-3-4 Tree |
|----------|--------|---------|---------|--------|------------|
| Data location | Internal + leaf nodes | Only leaf nodes | Internal + leaf | Leaf nodes | Internal + leaf |
| Leaf linking | No | Yes (linked list) | No | No | No |
| Min fill factor | t-1 | t-1 | ⌊(2t-1)/3⌋ ≤ keys ≤ 2t-1 | Variable | 1 key |
| Max keys per node | 2t-1 | 2t-1 | 2t-1 | Variable (MBR) | 3 keys |
| Range query | O(log n + k) | O(log n + k) (faster due to links) | O(log n + k) | Variable | O(log n + k) |
| Use case | General indexed data | Databases, file systems | Optimized B-tree | Spatial data | Teaching/intro |
| Split strategy | Median split | Median split | Redistribute before split | Node splitting | Median split |
| Storage efficiency | Lower (internal nodes store data) | Higher (internal nodes only store keys) | Higher (less splitting) | Variable | Lower |
   - c) \(m/2\)
   - d) 1

2. **What happens when a B-tree node overflows?**
   - a) It is deleted
   - b) It splits into two nodes ✅
   - c) Keys are discarded
   - d) The tree rebalances

3. **What key advantage does a B+ tree have over a B-tree?**
   - a) Lower height
   - b) Efficient range scans ✅
   - c) Less memory
   - d) Simpler implementation

4. **B-trees are designed for:**
   - a) In-memory computation
   - b) Disk-block storage ✅
   - c) Network communication
   - d) Cache optimization

5. **What is the height bound of a B-tree of order m with n keys?**
   - a) \(\log m\)
   - b) \(\log_{\lceil m/2 \rceil} n\) ✅
   - c) \(n/m\)
   - d) \(\log n\)

6. **In a B+ tree, where is data stored?**
   - a) Internal nodes only
   - b) Leaf nodes only ✅
   - c) Both internal and leaf nodes
   - d) Only in the root

7. **What operation fixes a B-tree node with too few keys?**
   - a) Rotation
   - b) Borrow or merge ✅
   - c) Restructuring
   - d) Rebuilding

8. **Why do databases prefer B+ trees over B-trees?**
   - a) Faster single-key lookups
   - b) Higher fanout (compact internal nodes) ✅
   - c) Simpler deletion
   - d) Less memory usage

**Answers:** 1-b, 2-b, 3-b, 4-b, 5-b, 6-b, 7-b, 8-b

## Summary

- B-trees are multi-way balanced trees designed for block-oriented storage.
- The branching factor (order) controls height; high order means very shallow trees.
- Splits propagate upward; merges prevent underflow and maintain the ≥50% occupancy guarantee.
- B+ trees store all data in leaves connected by a linked list, enabling efficient range scans.
- B-trees and B+ trees are the standard data structure for database indexes and file systems.
- The order m is chosen to make each node fit exactly one disk block for maximum I/O efficiency.
- B-link trees add sibling pointers for high-concurrency access patterns.

## Exercises

### Review Questions

1. Why does a B-tree have a minimum occupancy requirement (ceil(m/2) - 1 keys)?
2. How does the B+ tree leaf-linked structure benefit range queries?
3. What is the relationship between disk block size and B-tree order?
4. Why does sorted insertion in B-trees not cause degeneration (unlike BSTs)?
5. What is the difference between borrowing and merging during deletion? When is each used?

### Application Problems

6. Implement a B-tree deletion operation for a node with underflow (borrow and merge).
7. Write a function to compute the exact height of a B-tree given its order and number of keys.
8. Simulate a B+ tree range query: find all keys between \( low \) and \( high \).
9. Given disk block size = 4096 bytes, key = 8 bytes, pointer = 8 bytes, overhead = 64 bytes. Compute the optimal order m.
10. Write a function that prints the fill factor (percentage of used key slots) of every node in a B-tree.

### Challenge Problem

11. Implement a **B-link tree**, a variant that adds sibling pointers at every level for concurrency. Show how a search can start at the root and follow sibling links if a split is encountered mid-traversal.
