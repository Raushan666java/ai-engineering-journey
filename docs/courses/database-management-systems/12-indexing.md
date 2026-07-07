# Chapter 12: Indexing

> **Prev:** [Chapter 11: Recovery System](11-recovery.md) | **Next:** [Chapter 13: Query Processing](13-query-processing.md)

## Learning Objectives

- Explain the purpose of indexes in query acceleration with analogies and complexity analysis
- Distinguish between ordered (primary vs secondary) and dense vs sparse indices
- Describe B-Tree and B+Tree structure, properties, and operations (search/insert/delete) with pseudocode and dry-run traces
- Implement B-Tree, B+Tree, Hash index, and Bitmap index in C++ and Python
- Analyze time/space complexity of each index type with justification
- Understand ISAM, static/extendable/linear hashing, bitmap indexing, function-based indexes
- Design composite indexes using the leftmost prefix rule with selectivity analysis
- Apply index strategies in real systems: MySQL InnoDB, PostgreSQL, MongoDB
- Answer interview questions on index internals, trade-offs, and optimization

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| **Purpose of Indexes** | Accelerate lookups at cost of writes + storage | Index columns in WHERE, JOIN, ORDER BY |
| **Ordered Indices** | Primary (clustered) vs Secondary (non-clustered) | One clustered per table; many secondary |
| **Dense vs Sparse** | Dense: every row. Sparse: every page | Sparse is smaller but requires clustered order |
| **B-Tree** | Balanced multi-way tree; keys in all nodes | Good for general-purpose; internal nodes store data |
| **B+Tree** | Keys only in leaves; internal nodes route | Default in MySQL/PostgreSQL; range-scan optimized |
| **ISAM** | Static multi-level index | Historical; fixed structure; no self-balancing |
| **Hash Index** | O(1) equality lookups | No range support; extendable/linear variants |
| **Bitmap Index** | Bit per distinct value per row | Low-cardinality columns in DW |
| **Function-Based Index** | Index on expression result | LOWER(email), JSON extraction |
| **Composite Index** | Multi-column ordering | Leftmost prefix rule governs usability |
| **Covering Index** | All query columns in index | Eliminates table access (index-only scan) |
| **Index Selection** | Match index type to query pattern | Monitor slow queries; add indexes iteratively |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Query Arrives] --> B{Full Scan?}
    B -->|Yes| C[Sequential Read O(n)]
    B -->|No - Use Index| D{Index Type}
    D -->|B-Tree| E[Range / Equality / Ordering]
    D -->|B+Tree| E2[Range / Equality / Ordering]
    D -->|ISAM| F[Static Range / Equality]
    D -->|Hash| G[Equality Only O(1)]
    D -->|Bitmap| H[Boolean Combos AND/OR/NOT]
    D -->|Composite| I[Multi-Column Leftmost Prefix]
    D -->|Functional| J[Expression-Based Lookup]
    E & E2 & F & G & H & I & J --> K[Page Lookup]
    K --> L[Return Results]
```

## Theory

![Indexing, Query Processing and Join Algorithms](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/database-management-systems/ch05-indexing-query.png)

### 12.1 Why Indexes?

**Real-World Analogy:** A book's index. Without an index, finding "database indexing" in a 1000-page book means reading every page (full scan). With the index at the back, you look up "indexing' p. 342, 410, 512" and flip directly. A database index works identically -- it maps search-key values to physical locations (page ID, row ID, or tuple pointer).

**The Problem:** A full table scan on 10M rows at 100 MB/s sequential read takes ~5-10 seconds. With an index, the same lookup takes 2-4 random I/Os (~10-20 ms). That is a 500x-1000x improvement.

**The Trade-off:**
- **Reads:** Dramatically faster -- O(log n) vs O(n)
- **Writes:** Slower -- every INSERT/UPDATE/DELETE must update each index on the table
- **Storage:** Extra space -- each index is a separate data structure (typically 10-50% of table size)

**Cost-Benefit Calculation:**

| Workload | Without Index | With B+Tree Index |
|----------|--------------|-------------------|
| SELECT by PK (1 row) | O(n) full scan | O(log n) ~3 I/Os |
| Range scan (5% of rows) | O(n) full scan | O(log n + k) ~ log n + 0.05n leaf reads |
| INSERT 1 row | O(1) append | O(log n) index maintenance |
| DELETE 1 row | O(1) mark + O(n) later | O(log n) index maintenance |

> **One-Sentence Takeaway:** Indexes transform full table scans (minutes) into direct lookups (milliseconds) at the cost of slower writes and extra storage.

**Edge Cases:**
- **Duplicate keys:** Indexes handle duplicates -- B+Tree leaf nodes store multiple values per key (row IDs). Hash indexes use overflow chaining.
- **NULL in index:** Most DBMS allow NULL in index entries. NULL is treated as a distinct value (PostgreSQL places NULLs last by default).
- **Index fragmentation:** Over time, page splits and merges create fragmentation. Rebuilding the index (REINDEX, ALTER INDEX REBUILD) restores compactness.

### 12.2 Index Types Overview

**Classification by Organization:**

| Dimension | Types |
|-----------|-------|
| **By ordering** | Ordered (B-Tree, B+Tree) vs Hash (unordered) |
| **By density** | Dense (every row pointer) vs Sparse (every page pointer) |
| **By clustering** | Clustered (primary) vs Non-clustered (secondary) |
| **By structure** | Tree-based (B+Tree) vs Hash-based vs Bitmap vs Inverted |
| **By columns** | Single-column vs Composite (multi-column) |
| **By scope** | Full-table vs Partial (filtered rows) |
| **By expression** | Plain vs Function-based (expression index) |

**Comparison: Primary vs Secondary vs Dense vs Sparse**

| Feature | Primary Index (Clustered) | Secondary Index (Non-Clustered) | Dense Index | Sparse Index |
|---------|--------------------------|-------------------------------|-------------|--------------|
| **Physical ordering** | Data sorted by key | Data not sorted | Any order | Requires sorted data |
| **Entries per table** | One per row | One per row | One per row | One per block/page |
| **Size** | Same as table | Same as table | Same as table | ~1/block_factor of table |
| **Lookup speed** | Fast (1 I/O for data) | Extra I/O (index + data) | Fast (direct row pointer) | Slower (may scan block) |
| **Range scan** | Excellent (sequential) | Poor (random per row) | Good (follow pointers) | Good (fewer pointers to follow) |
| **Can have multiple?** | Only one (physical order) | Many | Many | Few (requires ordering) |

### 12.3 Ordered Indices: Primary (Clustering) vs Secondary

**12.3.1 Primary Index (Clustered Index)**

The table data is physically ordered on disk according to the index key. The leaf level of the index is the data.

```sql
-- MySQL InnoDB: Primary key automatically becomes the clustered index
CREATE TABLE employees (
    emp_id INT PRIMARY KEY,      -- Clustered index on emp_id
    name VARCHAR(100),
    dept_id INT,
    salary DECIMAL(10,2)
);

-- Leaf pages of the clustered index contain the full row data
-- Searching for emp_id = 42 goes: Root -> Internal -> Leaf (which IS the row)
```

**Properties:**
- Only one per table (data can only be physically sorted one way)
- Leaves store the actual row data, not pointers
- Range scans are extremely fast (data is physically contiguous)
- INSERT near the end of the key range is fast; random INSERT causes page splits

**12.3.2 Secondary Index (Non-Clustered Index)**

A separate structure from the data. Leaves store pointers to the actual rows (row IDs or primary key values).

```sql
-- Creating a secondary index
CREATE INDEX idx_emp_name ON employees(name);

-- Lookup: Go through idx_emp_name B+Tree -> get PK value -> go through clustered index
-- This is called a "bookmark lookup" or "key lookup"
SELECT * FROM employees WHERE name = 'Alice';
-- Plan: Index Scan on idx_emp_name -> Clustered Index Seek on PK
```

**The "Two I/O" Penalty:**
```
Search for name='Alice' in secondary index:
  1. Traverse idx_emp_name B+Tree (3 I/Os) -> find PK = 42
  2. Traverse PK clustered B+Tree (3 I/Os) -> find full row
  Total: 6 I/Os vs 3 I/Os for a clustered lookup
```

**"Wider" Secondary Indexes (InnoDB):** In InnoDB, secondary index leaves store the PRIMARY KEY value, not a direct row pointer. If the PK is large (e.g., UUID), all secondary indexes become larger.

### 12.4 Dense vs Sparse Indices

**Real-World Analogy:**
- **Dense index:** Every street address is listed in a directory -> instant find but huge book
- **Sparse index:** Only every 100th street is listed -> smaller book but you search within a block after finding the entry point

**12.4.1 Dense Index**

An index record appears for **every search-key value** in the file.

```
Data File (sorted by emp_id):
[1, Alice] [2, Bob] [3, Carol] [4, Dave] [5, Eve] [6, Frank]

Dense Index:
1 -> ptr to [1, Alice]
2 -> ptr to [2, Bob]
3 -> ptr to [3, Carol]
4 -> ptr to [4, Dave]
5 -> ptr to [5, Eve]
6 -> ptr to [6, Frank]
```

**Properties:**
- Faster lookup: directly locate any record
- Larger: as many entries as rows in the table
- Can be used on unsorted data (if storing direct pointers)

**12.4.2 Sparse Index**

An index record appears for **each block** (or page) of the file. Only works on ordered files.

```
Data File (sorted by emp_id, 2 rows per block):
Block 1: [1, Alice] [2, Bob]
Block 2: [3, Carol] [4, Dave]
Block 3: [5, Eve] [6, Frank]

Sparse Index:
1 -> Block 1
3 -> Block 2
5 -> Block 3
```

**Search for emp_id=4:**
1. Find largest key &lt;= 4 in sparse index -&gt; 3 -> Block 2
2. Read Block 2 -> scan for id=4 -> found

**Comparison:**

| Aspect | Dense Index | Sparse Index |
|--------|------------|-------------|
| **Size** | O(n) entries | O(n/k) where k = rows per block |
| **Lookup cost** | O(log n_dense) -> find exact | O(log n_sparse) + block scan |
| **Insert cost** | Must update index every row | May not update (if same block) |
| **Space saving** | None (largest) | ~block_factor x smaller |
| **Ordering required** | No | Yes (file must be sorted by key) |
| **Typical use** | Secondary indexes | Primary (clustered) indexes |

### 12.5 B-Tree Indexes

**Real-World Analogy:** A phone book with hierarchical tabs. You don't read every name -- you go to the right letter tab (root), then sub-tab (internal), then find the specific name (leaf). Every tab holds some names directly.

**12.5.1 Structure**

A B-Tree of order m satisfies:
- Every node has at most m children
- Every node (except root) has at least ceil(m/2) children
- Root has at least 2 children (unless it is a leaf)
- All leaves appear at the same depth
- A non-leaf node with k children contains k-1 keys
- Keys within a node are sorted
- **Every node stores both keys AND data pointers** (unlike B+Tree)

```
B-Tree of order 5 (example, typically much wider):
                    [30, 60]
                   /    |    \
           [10,20]  [40,50]  [70,80,90]
           /  |  \   /  |  \   /  |  |  \
       Data Data Data Data Data Data Data Data Data
```

**12.5.2 Properties**
- Self-balancing (all leaves at same depth)
- Each node holds ceil(m/2)-1 to m-1 keys
- Height: O(log_m n) or O(log n / log m)
- With m=500, height &lt;= 3 for 125M keys
- Internal nodes contain keys + pointers to children
- Data pointers are attached to every key (in both internal and leaf nodes)

**12.5.3 Search Operation**

**Numbered Steps:**
1. Start at root node
2. Linear or binary search within the node for key K
3. If found return the data pointer associated with K
4. If not found choose the child pointer between the two bounding keys
5. If no child exists (leaf) -> K does not exist
6. Repeat from step 2 for the child node

**Pseudocode:**
```
function B_TREE_SEARCH(node, key):
    i = 1
    while i <= node.n and key > node.keys[i]:
        i = i + 1
    if i <= node.n and key == node.keys[i]:
        return (node, i)  // Found with data pointer
    if node.is_leaf:
        return null       // Not found
    else:
        return B_TREE_SEARCH(node.children[i], key)
```

**Dry Run Search for key = 50 in B-Tree of order 5:**

```
Initial tree:
                     [30, 60]
                    /    |    \
          [10,20,25]  [40,50]  [70,80,90]

Step | Node Visited       | i | keys[i] | Comparison     | Action
-----|-------------------|----|---------|----------------|----------------------
1    | [30, 60]          | 1 | 30      | 50 > 30        | i++
2    | [30, 60]          | 2 | 60      | 50 < 60        | Follow child[2]
3    | [40, 50]          | 1 | 40      | 50 > 40        | i++
4    | [40, 50]          | 2 | 50      | 50 == 50       | FOUND at (node, 2)
```

**12.5.4 Insertion Operation**

**Numbered Steps:**
1. Search for the key to find the correct leaf where it should go
2. If the leaf has room (n &lt; m-1): insert key in sorted order
3. If the leaf is full:
   a. Split into two nodes (left and right), distributing keys evenly
   b. Promote the middle key to the parent
   c. If the parent is also full, repeat step 3 (split propagates upward)
   d. If the root splits, create a new root with the promoted key

**Pseudocode:**
```
function B_TREE_INSERT(root, key):
    if root.n == m-1:
        new_root = new Node()
        new_root.children[1] = root
        B_TREE_SPLIT_CHILD(new_root, 1)
        return B_TREE_INSERT_NONFULL(new_root, key)
    else:
        return B_TREE_INSERT_NONFULL(root, key)

function B_TREE_INSERT_NONFULL(node, key):
    i = node.n
    if node.is_leaf:
        while i >= 1 and key < node.keys[i]:
            node.keys[i+1] = node.keys[i]
            i--
        node.keys[i+1] = key
        node.n++
    else:
        while i >= 1 and key < node.keys[i]:
            i--
        i++
        if node.children[i].n == m-1:
            B_TREE_SPLIT_CHILD(node, i)
            if key > node.keys[i]:
                i++
        B_TREE_INSERT_NONFULL(node.children[i], key)

function B_TREE_SPLIT_CHILD(parent, i):
    child = parent.children[i]
    new_child = new Node()
    mid = ceil(m/2)
    new_child.is_leaf = child.is_leaf
    new_child.n = m - mid
    for j = 1 to m - mid:
        new_child.keys[j] = child.keys[mid + j]
    if not child.is_leaf:
        for j = 1 to m - mid + 1:
            new_child.children[j] = child.children[mid + j]
    child.n = mid - 1
    for j = parent.n + 1 downto i + 1:
        parent.children[j+1] = parent.children[j]
    parent.children[i+1] = new_child
    for j = parent.n downto i:
        parent.keys[j+1] = parent.keys[j]
    parent.keys[i] = child.keys[mid]
    parent.n++
```

**Dry Run Insert keys 10, 20, 30, 40, 50, 60 into empty B-Tree of order 5 (max 4 keys per node):**

```
Step 1: Insert 10
  Leaf: [10]

Step 2: Insert 20
  Leaf: [10, 20]

Step 3: Insert 30
  Leaf: [10, 20, 30]

Step 4: Insert 40
  Leaf: [10, 20, 30, 40]   (full at m-1=4)

Step 5: Insert 50
  Leaf full -> Split!
  Left:  [10, 20]    Right: [30, 40, 50]
  Promote 30 to new root
  Tree:
            [30]
           /    \
      [10,20]  [30,40,50]

Step 6: Insert 60
  Search: 60 > 30 -> go right
  Right leaf has room -> [30, 40, 50, 60]

Step 7: Insert 25
  Search: 25 < 30 -> go left
  Left leaf: [10, 20, 25]  (room, insert sorted)

Step 8: Insert 5
  Search: 5 < 30 -> go left
  Left leaf: [5, 10, 20, 25]  (full = 4)
  Split left leaf:
  Left:  [5, 10]    Right: [20, 25]
  Promote 20 to root:
            [20, 30]
           /    |    \
      [5,10]  [20,25] [30,40,50,60]
```

**12.5.5 Deletion Operation**

**Numbered Steps:**
1. Search for the key to delete
2. If found in an internal node:
   a. Replace with predecessor (max of left subtree) or successor (min of right subtree)
   b. Delete the predecessor/successor from the leaf
3. If found in a leaf:
   a. Remove the key
   b. If the node has >= ceil(m/2)-1 keys done
   c. If underflow:
      - Try to borrow a key from a sibling (redistribution)
      - If no sibling can spare, merge with a sibling
      - Merging may cause parent underflow, repeat upward

**Dry Run Delete from B-Tree:**
```
Start with:
                  [30]
                 /    \
          [10,20]    [30,40,50,60]  (order 5, min 2 keys)

Delete 60:
  Leaf: [30, 40, 50]  (still has >=2 keys, done)
  Tree:
                  [30]
                 /    \
          [10,20]    [30,40,50]

Delete 50:
  Leaf: [30, 40]  (still >=2, done)
  Tree:
                  [30]
                 /    \
          [10,20]    [30,40]

Delete 40:
  Leaf: [30]  (underflow! needs 2, has 1)
  Sibling [10,20] can spare
  Redistribute: parent key 30 goes down to right, 20 goes up to parent
  Tree:
                  [20]
                 /    \
          [10]        [30]
```

**12.5.6 B-Tree Implementation (C++)**

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

class BTreeNode {
public:
    std::vector<int> keys;
    std::vector<BTreeNode*> children;
    bool isLeaf;
    int t; // Minimum degree

    BTreeNode(int _t, bool _isLeaf) : t(_t), isLeaf(_isLeaf) {}

    void traverse() {
        int i;
        for (i = 0; i < keys.size(); i++) {
            if (!isLeaf) children[i]->traverse();
            std::cout << keys[i] << " ";
        }
        if (!isLeaf) children[i]->traverse();
    }

    BTreeNode* search(int key) {
        int i = 0;
        while (i < keys.size() && key > keys[i]) i++;
        if (i < keys.size() && keys[i] == key) return this;
        if (isLeaf) return nullptr;
        return children[i]->search(key);
    }

    void insertNonFull(int key) {
        int i = keys.size() - 1;
        if (isLeaf) {
            keys.push_back(0);
            while (i >= 0 && keys[i] > key) {
                keys[i + 1] = keys[i];
                i--;
            }
            keys[i + 1] = key;
        } else {
            while (i >= 0 && keys[i] > key) i--;
            i++;
            if (children[i]->keys.size() == 2 * t - 1) {
                splitChild(i, children[i]);
                if (keys[i] < key) i++;
            }
            children[i]->insertNonFull(key);
        }
    }

    void splitChild(int i, BTreeNode* y) {
        BTreeNode* z = new BTreeNode(y->t, y->isLeaf);
        z->keys.resize(t - 1);
        for (int j = 0; j < t - 1; j++)
            z->keys[j] = y->keys[j + t];
        if (!y->isLeaf) {
            z->children.resize(t);
            for (int j = 0; j < t; j++)
                z->children[j] = y->children[j + t];
        }
        y->keys.resize(t - 1);
        children.insert(children.begin() + i + 1, z);
        keys.insert(keys.begin() + i, y->keys[t - 1]);
    }
};

class BTree {
public:
    BTreeNode* root;
    int t;

    BTree(int _t) : t(_t) { root = new BTreeNode(t, true); }

    void insert(int key) {
        if (root->keys.size() == 2 * t - 1) {
            BTreeNode* newRoot = new BTreeNode(t, false);
            newRoot->children.push_back(root);
            newRoot->splitChild(0, root);
            int i = 0;
            if (newRoot->keys[0] < key) i++;
            newRoot->children[i]->insertNonFull(key);
            root = newRoot;
        } else {
            root->insertNonFull(key);
        }
    }

    BTreeNode* search(int key) { return root ? root->search(key) : nullptr; }
};
```

**12.5.7 B-Tree Implementation (Python)**

```python
class BTreeNode:
    def __init__(self, t, is_leaf):
        self.t = t
        self.is_leaf = is_leaf
        self.keys = []
        self.children = []

    def search(self, key):
        i = 0
        while i < len(self.keys) and key > self.keys[i]:
            i += 1
        if i < len(self.keys) and self.keys[i] == key:
            return (self, i)
        if self.is_leaf:
            return None
        return self.children[i].search(key)

    def insert_non_full(self, key):
        i = len(self.keys) - 1
        if self.is_leaf:
            self.keys.append(0)
            while i >= 0 and self.keys[i] > key:
                self.keys[i + 1] = self.keys[i]
                i -= 1
            self.keys[i + 1] = key
        else:
            while i >= 0 and self.keys[i] > key:
                i -= 1
            i += 1
            if len(self.children[i].keys) == 2 * self.t - 1:
                self.split_child(i, self.children[i])
                if self.keys[i] < key:
                    i += 1
            self.children[i].insert_non_full(key)

    def split_child(self, i, y):
        z = BTreeNode(y.t, y.is_leaf)
        z.keys = y.keys[self.t:]
        if not y.is_leaf:
            z.children = y.children[self.t:]
        y.keys = y.keys[:self.t - 1]
        if not y.is_leaf:
            y.children = y.children[:self.t]
        self.children.insert(i + 1, z)
        self.keys.insert(i, y.keys[self.t - 1] if self.t <= len(y.keys) else y.keys[-1])

class BTree:
    def __init__(self, t):
        self.t = t
        self.root = BTreeNode(t, True)

    def search(self, key):
        return self.root.search(key) if self.root else None

    def insert(self, key):
        root = self.root
        if len(root.keys) == 2 * self.t - 1:
            new_root = BTreeNode(self.t, False)
            new_root.children.append(root)
            new_root.split_child(0, root)
            i = 0
            if new_root.keys[0] < key:
                i += 1
            new_root.children[i].insert_non_full(key)
            self.root = new_root
        else:
            root.insert_non_full(key)
```

**12.5.8 Complexity Analysis**

| Operation | Time Complexity | Why |
|-----------|---------------|-----|
| **Search** | O(log_m n) = O(log n / log m) | Height &lt;= log_{ceil(m/2)} (n+1). With m=500, height ~3 for 125M keys. Each level is one I/O. |
| **Insert** | O(log_m n) | Search to leaf (log n), plus write modified nodes on path. Split propagates upward at most O(log n) times. |
| **Delete** | O(log_m n) | Search + underflow fixes (borrow/merge) propagate upward at most O(log n). |
| **Space** | O(n) | Each key stored once. Internal nodes add overhead: O(n / (m/2)) nodes approx O(n/m). |

**Why O(log_m n) not O(log_2 n)?**
B-Tree internal nodes hold hundreds of keys (node size approx disk page). Binary search within a node is in-memory (zero I/O cost). The real cost is the number of I/Os = tree height = log_m n. With m=500, log_500 1M ~ 2.3, vs log_2 1M ~ 20 -- a 7x improvement in I/O count.

**12.5.9 Advantages & Disadvantages**

| Advantages | Disadvantages |
|------------|-------------|
| Self-balancing automatically | Keys in internal nodes waste space (less fan-out per page) |
| Efficient for both equality and range queries | Range scan requires going up and down the tree (unlike B+Tree leaf links) |
| No reorganization needed (grows/shrinks dynamically) | More page splits due to data in internal nodes |
| Excellent disk I/O characteristics (node = page) | Slightly slower sequential access than B+Tree |
| Works well for both OLTP and OLAP workloads | Higher memory overhead per key |

**Edge Cases:**
- **Duplicate keys:** B-Tree typically stores duplicates by adding a unique suffix or using overflow pages
- **Very small keys (e.g., boolean):** Low fan-out utilization, B-Tree still works but bitmap better
- **Sequential inserts:** Cause many page splits (right-side splits), B+Tree handles this better with leaf linking

### 12.6 B+Tree Indexes

**Real-World Analogy:** A library with a card catalog system. The catalog drawers (internal nodes) tell you which aisle/shelf range to check. The actual book locations (leaf nodes) contain the final shelf number plus links to the next location. You go to one catalog find the range go to the aisle find the book follow the shelf link to the next book.

**12.6.1 Structure**

B+Tree is a variant of B-Tree with two key differences:
1. **All keys reside in the leaf nodes** -- internal nodes only contain routing keys
2. **Leaf nodes are linked** -- forming a sorted linked list for efficient range scans

```
B+Tree (order 4, leaf capacity 3):
Internal:            [50, 90]
                    /    |    \
Leaf:        [20, 35, 40] -> [50, 60, 75] -> [90, 100, 120]
                |      |         |             |
              Data   Data      Data          Data
```

**12.6.2 Key Properties**
- All leaves at same depth (balanced)
- Internal nodes contain routing keys + child pointers (no data)
- Leaf nodes contain all keys + data pointers (or PK references)
- Leaves form a singly/doubly linked list (sequence set)
- Node size matches disk page (4-16 KB) -> fan-out of 200-500
- Height: log_{fanout} n -> typically 3-4 levels for billions of rows

**12.6.3 Search Operation**

**Numbered Steps:**
1. Start at root
2. At each internal node, binary search for the smallest key >= search key
3. Follow the corresponding child pointer
4. Repeat until a leaf node is reached
5. Linear scan the leaf for the exact key
6. If found, return the data pointer; else key does not exist

**Pseudocode:**
```
function BPLUS_TREE_SEARCH(node, key):
    while not node.is_leaf:
        i = 1
        while i <= node.n and key >= node.keys[i]:
            i = i + 1
        node = node.children[i]
    // node is now a leaf
    for i = 1 to node.n:
        if node.keys[i] == key:
            return (node, i)
    return null
```

**Dry Run Search for key = 75:**
```
B+Tree structure:
Internal:                [50, 90]
                        /    |    \
Leaf:      L1:[20,35,40] -> L2:[50,60,75] -> L3:[90,100,120]

Step | Node Type      | Node Keys | key | Action
-----|---------------|-----------|-----|-------------------------------
1    | Internal (Root) | [50, 90]  | 75  | 75 < 90, but >= 50 -> child[2]
2    | Internal (could be deeper) | - | - | (skip in 2-level tree)
3    | Leaf L2       | [50,60,75] | 75  | Scan: 50->60->75 found at pos 3
```

**Range Search (WHERE key BETWEEN 60 AND 100):**
```
Step 1: Search for lower bound 60 -> reach leaf L2
Step 2: In L2, 60 <= key -> start collecting
Step 3: Collect 60, 75 from L2
Step 4: Follow leaf pointer L2 -> L3
Step 5: Collect 90, 100 from L3 (stop at 120 > 100)
Result: {60, 75, 90, 100} -- 4 I/Os for index search + sequential leaf reads
```

**12.6.4 Insertion Operation**

**Numbered Steps:**
1. Search to find the correct leaf node (same as search path)
2. If leaf has room: insert key in sorted order
3. If leaf is full:
   a. Split leaf into two leaves, redistribute keys evenly
   b. Copy the first key of the new leaf up to the parent as a routing key
   c. If parent is full, split propagates upward (internal node splits)
   d. If root splits, create new root, tree grows by one level

**Pseudocode:**
```
function BPLUS_TREE_INSERT(root, key):
    leaf = FIND_LEAF(root, key)
    if leaf has room:
        INSERT_IN_LEAF(leaf, key)
    else:
        new_leaf = SPLIT_LEAF(leaf, key)
        // leaf gets first half, new_leaf gets second half
        promote_key = new_leaf.keys[1]  // first key of new leaf
        INSERT_IN_PARENT(leaf, promote_key, new_leaf)

function INSERT_IN_PARENT(left_node, key, right_node):
    if parent is null:  // reached root
        create new root with key and children [left, right]
        return
    if parent has room:
        insert key and right_node pointer into parent
    else:
        split parent internal node (similar to B-Tree split)
        recursively insert new routing key upward
```

**Dry Run Insert keys 10, 20, 30, 40, 50 into B+Tree (leaf cap=3, internal cap=3):**

```
Step 1: Insert 10
  Leaf: [10]

Step 2: Insert 20
  Leaf: [10, 20]

Step 3: Insert 30
  Leaf: [10, 20, 30]  (full)

Step 4: Insert 40 -> leaf full, split!
  Leaf 1: [10, 20]    Leaf 2: [30, 40]
  Promote 30 to root (copy-up)
  Tree:
            [30]
           /    \
      [10,20]  [30,40]

Step 5: Insert 50
  50 > 30 -> go to right leaf
  Right leaf: [30, 40, 50] (full) -> split!
  Leaf 1: [30, 40]    Leaf 2: [50]
  Promote 50 to parent (copy-up)
  Parent full: [30, 50] (internal cap=3, room)
  Tree:
            [30, 50]
           /    |    \
      [10,20] [30,40] [50]
```

**12.6.5 Deletion Operation**

**Numbered Steps:**
1. Search to find the key in the leaf
2. Remove the key
3. If leaf has >= ceil((max+1)/2) keys done
4. If underflow:
   a. Try to borrow from a sibling (redistribution)
   b. If no sibling can spare, merge with a sibling
   c. Remove the routing key from parent
   d. If parent underflows, repeat upward

**12.6.6 B+Tree Implementation (C++)**

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

class BPlusTreeNode {
public:
    std::vector<int> keys;
    std::vector<BPlusTreeNode*> children;
    BPlusTreeNode* next;  // Link to next leaf
    bool isLeaf;
    int order;

    BPlusTreeNode(int _order, bool _isLeaf)
        : order(_order), isLeaf(_isLeaf), next(nullptr) {}

    void traverse() {
        if (isLeaf) {
            for (int k : keys) std::cout << k << " ";
            if (next) std::cout << " -> ";
        } else {
            for (size_t i = 0; i < children.size(); i++)
                children[i]->traverse();
        }
    }

    BPlusTreeNode* findLeaf(int key) {
        if (isLeaf) return this;
        size_t i = 0;
        while (i < keys.size() && key >= keys[i]) i++;
        return children[i]->findLeaf(key);
    }

    void insertInLeaf(int key) {
        auto it = std::lower_bound(keys.begin(), keys.end(), key);
        keys.insert(it, key);
    }
};

class BPlusTree {
public:
    BPlusTreeNode* root;
    int order;

    BPlusTree(int _order) : order(_order) {
        root = new BPlusTreeNode(order, true);
    }

    void insert(int key) {
        BPlusTreeNode* leaf = root->findLeaf(key);
        if (leaf->keys.size() < order - 1) {
            leaf->insertInLeaf(key);
        } else {
            BPlusTreeNode* newLeaf = new BPlusTreeNode(order, true);
            std::vector<int> allKeys = leaf->keys;
            allKeys.push_back(key);
            std::sort(allKeys.begin(), allKeys.end());

            leaf->keys.clear();
            newLeaf->keys.clear();
            int split = (allKeys.size() + 1) / 2;
            for (int i = 0; i < split; i++)
                leaf->keys.push_back(allKeys[i]);
            for (size_t i = split; i < allKeys.size(); i++)
                newLeaf->keys.push_back(allKeys[i]);

            newLeaf->next = leaf->next;
            leaf->next = newLeaf;

            int promoteKey = newLeaf->keys[0];
            insertInParent(leaf, promoteKey, newLeaf);
        }
    }

    void insertInParent(BPlusTreeNode* left, int key, BPlusTreeNode* right) {
        if (left == root) {
            BPlusTreeNode* newRoot = new BPlusTreeNode(order, false);
            newRoot->keys.push_back(key);
            newRoot->children.push_back(left);
            newRoot->children.push_back(right);
            root = newRoot;
            return;
        }
        // Find parent and insert (simplified -- production code searches upward)
    }

    BPlusTreeNode* search(int key) {
        BPlusTreeNode* leaf = root->findLeaf(key);
        for (int k : leaf->keys)
            if (k == key) return leaf;
        return nullptr;
    }
};
```

**12.6.7 B+Tree Implementation (Python)**

```python
class BPlusTreeNode:
    def __init__(self, order, is_leaf=True):
        self.order = order
        self.is_leaf = is_leaf
        self.keys = []
        self.children = []
        self.next = None  # link to next leaf for range scan

    def find_leaf(self, key):
        if self.is_leaf:
            return self
        i = 0
        while i < len(self.keys) and key >= self.keys[i]:
            i += 1
        return self.children[i].find_leaf(key)

    def insert_key_sorted(self, key):
        i = 0
        while i < len(self.keys) and self.keys[i] < key:
            i += 1
        self.keys.insert(i, key)


class BPlusTree:
    def __init__(self, order):
        self.order = order
        self.root = BPlusTreeNode(order, True)

    def search(self, key):
        leaf = self.root.find_leaf(key)
        return key in leaf.keys

    def insert(self, key):
        leaf = self.root.find_leaf(key)
        if len(leaf.keys) < self.order - 1:
            leaf.insert_key_sorted(key)
        else:
            new_leaf = BPlusTreeNode(self.order, True)
            all_keys = sorted(leaf.keys + [key])
            mid = len(all_keys) // 2
            leaf.keys = all_keys[:mid]
            new_leaf.keys = all_keys[mid:]
            new_leaf.next = leaf.next
            leaf.next = new_leaf
            promote_key = new_leaf.keys[0]
            self._insert_in_parent(leaf, promote_key, new_leaf)

    def _insert_in_parent(self, left, key, right):
        if left is self.root:
            new_root = BPlusTreeNode(self.order, False)
            new_root.keys = [key]
            new_root.children = [left, right]
            self.root = new_root
            return
        # Find parent and insert key+right into it
        # (simplified -- production code would walk from root)

    def range_query(self, low, high):
        result = []
        leaf = self.root.find_leaf(low)
        while leaf:
            for k in leaf.keys:
                if low <= k <= high:
                    result.append(k)
                elif k > high:
                    return result
            leaf = leaf.next
        return result
```

**12.6.8 Complexity Analysis**

| Operation | Time Complexity | Why |
|-----------|---------------|-----|
| **Search** | O(log_m n) | Tree height = log_{fanout} n. Each internal node visited once. Leaf has ~50% average occupancy. |
| **Insert** | O(log_m n) | Find leaf (log_m n) + leaf insert (O(1) if room, O(m) if split). Splits propagate &lt;= O(log_m n) times. |
| **Delete** | O(log_m n) | Find + remove + possible merge propagation. |
| **Range scan** | O(log_m n + k) | Find lower bound (log_m n) + follow leaf links for k results. Each leaf I/O retrieves ~page/2 keys. |
| **Space** | O(n) | n keys in leaves, O(n/m) internal nodes. |

**Why B+Tree over B-Tree?**
- **Range scans:** B+Tree leaves are linked -> sequential scan without back-tracking to parent. B-Tree requires traversing internal nodes.
- **Higher fan-out:** Internal nodes have no data pointers -> more keys per page -> shorter tree -> fewer I/Os.
- **Predictable leaf scans:** All data in leaves, all at same depth.

### 12.7 B-Tree vs B+Tree Comparison

| Feature | B-Tree | B+Tree |
|---------|--------|--------|
| **Data pointers** | In all nodes (internal + leaf) | Only in leaf nodes |
| **Internal nodes** | Store keys + data pointers | Store only routing keys |
| **Leaf nodes** | Store keys + data (not necessarily linked) | Store keys + data + linked list |
| **Fan-out** | Lower (data pointers take space) | Higher (routing only -> more keys per page) |
| **Tree height** | Taller (same page size, fewer keys) | Shorter (more keys per internal node) |
| **Range scan** | Must traverse internal nodes | Leaf-linked list -> sequential scan |
| **Point query** | Slightly faster (data may be in internal node) | Always reaches leaf (one extra level sometimes) |
| **Ordering** | Keys appear throughout the tree | All keys in leaves, sorted |
| **Space usage** | Higher (duplicate routing in internal) | Lower (no data in internal) |
| **Dominant use** | General-purpose | Database indexes (MySQL, PostgreSQL) |

**When to use B-Tree:**
- When the tree itself is small enough to fit in memory
- When point queries dominate and every I/O matters
- Embedded systems with smaller page sizes

**When to use B+Tree:**
- Disk-based databases (the dominant choice)
- Workloads with frequent range scans
- When you want maximum fan-out per page

### 12.8 B+Tree Order Calculation

**Order (m)** = maximum number of children per node. Typically determined by page size.

**Calculation for Disk-Based Design:**

Assume:
- Page size = 4096 bytes (4 KB)
- Key size = 8 bytes (e.g., BIGINT)
- Pointer size = 8 bytes (row ID or page pointer)

**Internal node entry size** = key + pointer = 16 bytes
**Internal node entries per page** = 4096 / 16 = 256
**Internal node fan-out (order)** = 256 (or 257 with 1 extra pointer)

**Leaf node entry size** = key + data pointer = 16 bytes
**Leaf node entries per page** = 4096 / 16 = 256

**Capacity by Tree Height (fan-out = 256):**

| Height (levels) | Records | I/Os for Search |
|----------------|---------|----------------|
| 0 (root = leaf) | 256 | 1 |
| 1 (root to leaves) | 256 x 256 = 65,536 | 2 |
| 2 (root to internal to leaves) | 256^3 = 16,777,216 | 3 |
| 3 | 256^4 = 4,294,967,296 | 4 |
| 4 | 256^5 = 1,099,511,627,776 | 5 |

**General formula:**
```
Maximum keys at height h = m^(h+1) - 1
Tree height for n keys = log_m (n) = ln(n) / ln(m)

For m = 500, n = 10^9:
  height = ln(10^9) / ln(500) = 20.7 / 6.2 = 3.3 -> 4 I/Os
```

**Practical insight:** With typical page sizes (8-16 KB) and key sizes (4-8 bytes), a B+Tree can index billions of rows in 3-4 I/Os.

### 12.9 ISAM (Indexed Sequential Access Method)

**Real-World Analogy:** A book's table of contents combined with a fixed appendix. You look up a chapter in the TOC (static top-level index), then the page range is fixed -- you can't insert new chapters without reprinting.

**12.9.1 Structure**

ISAM is a static index structure: the index levels are built once and remain fixed. Unlike B-Trees, ISAM does not dynamically rebalance.

```
ISAM Structure:
                    [100, 300, 500]          <- Master Index (static)
                   /      |       \
         [1..99] [100..299] [300..499] [500..999]  <- Cylinder Indexes
          |           |
     Overflow    Overflow
      Area        Area
```

**Key characteristics:**
- **Static:** Index is built once, not updated dynamically on insert
- **Sequential:** Data file is sorted by key
- **Overflow:** When inserting, new records go to an overflow area (chained to the original data page)
- **Non-balanced:** If overflow grows, performance degrades (linear search on chain)

**12.9.2 Operations**

**Search:**
1. Binary search the master index -> find cylinder index
2. Search cylinder index -> find track/block
3. Search within the block (and its overflow chain)

**Insert:**
1. Find the target block
2. If block has space, insert in order
3. If block is full, chain an overflow record (no split -- ISAM is static)

**12.9.3 ISAM vs B+Tree**

| Aspect | ISAM | B+Tree |
|--------|------|--------|
| **Structure** | Static (built once) | Dynamic (self-balancing) |
| **Insert** | Fast (no rebalance) but overflow degrades | O(log n) with splits |
| **Overflow** | Grows unbounded -> performance decay | No overflow (splits maintain structure) |
| **Index rebuild** | Periodic rebuild needed | Self-maintaining |
| **Range scan** | Sequential (fast until overflow degrades) | Leaf-linked list (always fast) |
| **Use case** | Read-only or append-mostly workloads | General-purpose OLTP/OLAP |

### 12.10 Hash Indexing

**Real-World Analogy:** Parking garage valet -- you hand over your keys, they give you a ticket with a slot number (hash). When you return, you give the ticket and go directly to slot 42. No searching or range queries ("find all cars parked between 10am and 11am" requires checking every slot).

**12.10.1 Overview**

Hash indexing applies a hash function h(K) -> bucket number. Each bucket can hold one or more records.

**Basic operations:**
- **Insert:** Compute h(key) -> bucket. If bucket has room, store there. Else, handle collision.
- **Search:** Compute h(key) -> bucket. Scan bucket for exact match. O(1) average.
- **Range query:** Not supported. Hash destroys ordering.

```sql
-- PostgreSQL hash index
CREATE INDEX idx_hash ON employees USING HASH(employee_id);
SELECT * FROM employees WHERE employee_id = 1001;  -- O(1)

-- Cannot use hash index for:
SELECT * FROM employees WHERE employee_id > 1000;  -- table scan
SELECT * FROM employees ORDER BY employee_id;      -- table scan
```

**12.10.2 Static Hashing**

Fixed number of buckets B. Collisions handled by chaining (each bucket -> linked list of overflow pages).

```
Hash Function: h(k) = k mod 7
Table with B = 7 buckets:
Bucket 0: [7] -> [14]
Bucket 1: [1] -> [8] -> [15]
Bucket 2: [2] -> [9]
Bucket 3: [3] -> [10]
Bucket 4: [4]
Bucket 5: [5]
Bucket 6: [6] -> [13]
```

**Problem:** As data grows, overflow chains lengthen. Buckets become unbalanced. Performance degrades from O(1) to O(n).

**12.10.3 Extendable Hashing**

Solves the growth problem by using a **directory** that doubles in size when a bucket overflows. Only the overflowing bucket is split.

**Structure:**
- Directory of 2^d pointers (d = global depth)
- Each directory entry points to a bucket
- Each bucket has a local depth d_local &lt;= d
- Hash function produces d bits -> directory index

**Extendable Hashing Implementation (Python):**

```python
class Bucket:
    def __init__(self, local_depth=1):
        self.local_depth = local_depth
        self.keys = []

    def is_full(self, bucket_size=2):
        return len(self.keys) >= bucket_size


class ExtendableHash:
    def __init__(self, bucket_size=2):
        self.bucket_size = bucket_size
        self.global_depth = 1
        self.directory = [Bucket(), Bucket()]

    def hash_key(self, key):
        return key % (2 ** self.global_depth)

    def find(self, key):
        bucket = self.directory[self.hash_key(key)]
        return key in bucket.keys

    def insert(self, key):
        idx = self.hash_key(key)
        bucket = self.directory[idx]
        if not bucket.is_full(self.bucket_size):
            bucket.keys.append(key)
            return
        if bucket.local_depth == self.global_depth:
            self._double_directory()
        self._split_bucket(idx, key)

    def _double_directory(self):
        self.directory *= 2
        self.global_depth += 1

    def _split_bucket(self, idx, key):
        old_bucket = self.directory[idx]
        new_local = old_bucket.local_depth + 1
        b1 = Bucket(new_local)
        b2 = Bucket(new_local)
        all_keys = old_bucket.keys + [key]
        for k in all_keys:
            if k % (2 ** new_local) == idx:
                b1.keys.append(k)
            else:
                b2.keys.append(k)
        step = 2 ** (self.global_depth - new_local)
        base = idx - (idx % (2 ** new_local))
        for i in range(0, 2 ** self.global_depth, step):
            if (i >> (self.global_depth - new_local)) == (base >> (self.global_depth - new_local)):
                if (i // step) % 2 == 0:
                    self.directory[i] = b1
                else:
                    self.directory[i] = b2
```

**12.10.4 Linear Hashing**

Handles growth without a directory. Buckets are added one at a time in a round-robin fashion.

**How it works:**
- Maintain pointer `next` indicating which bucket to split next
- Use two hash functions: h0(k) = k mod N, h1(k) = k mod 2N
- When any bucket overflows, split bucket at `next` (not the overflowing bucket)
- Increment `next` until all original N buckets are split, then double N and reset

```
Phase 1: N=4, next=0
  Bucket 0: [0, 4, 8] -> overflow -> split bucket 0
  Bucket 2: [2, 6]
  Bucket 1: [1, 5]
  Bucket 3: [3, 7]

After split: next=1, N=4
  Bucket 0: [0, 4]    (h0)
  Bucket 4: [8, 12]   (h1)
  Bucket 1: [1, 5]
  Bucket 2: [2, 6]
  Bucket 3: [3, 7]
```

**Advantages:** No directory overhead. Gradual reorganization -- no sudden latency spikes from directory doubling.

**12.10.5 Hash Index Collision Resolution (Dry Run)**

```
Hash function: h(k) = k mod 5
Table with 5 buckets, chaining for collisions

Insert: 10, 15, 22, 17, 25

Key | h(k) | Bucket | Action                     | Bucket Contents
10  | 0    | 0      | Empty -> insert             | B0: [10]
15  | 0    | 0      | Collision -> chain           | B0: [10] -> [15]
22  | 2    | 2      | Empty -> insert             | B2: [22]
17  | 2    | 2      | Collision -> chain           | B2: [22] -> [17]
25  | 0    | 0      | Collision -> chain           | B0: [10] -> [15] -> [25]

Search for 17:
  h(17) = 17 mod 5 = 2 -> Bucket 2
  Scan chain: 22 != 17, 17 = 17 -> found

Search for 99:
  h(99) = 99 mod 5 = 4 -> Bucket 4
  Bucket 4 empty -> not found
```

### 12.11 Hash vs B+Tree vs Bitmap Index Comparison

| Aspect | Hash Index | B+Tree Index | Bitmap Index |
|--------|-----------|-------------|-------------|
| **Equality lookup** | O(1) average | O(log_m n) | O(log n) + bit unpack |
| **Range query** | Not supported | O(log_m n + k) | Fast bitwise AND/OR |
| **ORDER BY** | Not supported | O(log_m n + k) (sorted walk) | Not supported |
| **GROUP BY** | Supported (hash agg) | Supported (sorted agg) | Supported |
| **Multi-column** | Single key per hash | Composite index | Multiple bitmaps AND |
| **Space** | Smallest | Moderate | Compact for low cardinality |
| **Concurrency** | Moderate (chain locks) | Excellent (B-link variants) | Poor (bitmap locks) |
| **Update cost** | Low | Moderate | High (rebuild bitmap) |
| **Cardinality limits** | None | None | Poor above ~1000 distinct values |
| **Best workload** | Key-value lookup | General-purpose OLTP | Data warehouse dimensions |
| **Example** | `WHERE pk = 42` | `WHERE date > '2024-01-01'` | `WHERE gender='M' AND dept=10` |

### 12.12 Bitmap Indexing

**Real-World Analogy:** A restaurant reservation seating chart. Each table (distinct value) has a row of seats (bitmap). You check who's at which table by looking at the column of lights -- AND two columns to find male diners at table 3.

**12.12.1 Structure**

For each distinct value V in a column C, store a bitmap of N bits (N = number of rows). Bit i = 1 if row i has value V for column C.

```
Table: employees (1M rows, gender column: M or F)
  gender = 'M' bitmap: 1011010010... (1M bits = 125 KB)
  gender = 'F' bitmap: 0100101101... (1M bits = 125 KB)

Row level:
  Row 1: gender='M'   -> M[0]=1, F[0]=0
  Row 2: gender='F'   -> M[1]=0, F[1]=1
  Row 3: gender='M'   -> M[2]=1, F[2]=0
```

**12.12.2 Operations**

```
Query: "Find male employees in department 10 who earn > 100K"
  M_bitmap  = [1 0 1 1 0 1 0 0 ...]
  Dept10_bitmap = [1 1 0 0 1 0 0 1 ...]
  Salary_bitmap = [0 1 1 0 1 0 1 0 ...]

  Result = M_bitmap AND Dept10_bitmap AND Salary_bitmap
         = [0 0 0 0 0 0 0 0 ...]   (fast CPU bitwise op)
```

**Performance:**
- AND/OR/NOT on 1M bits = ~0.01 ms (CPU-level bitwise operation)
- COUNT = popcount (CPU instruction) -- O(1) per bitmap
- Much faster than B+Tree index intersection for low-cardinality columns

**Bitmap Index Implementation (Python):**

```python
class BitmapIndex:
    def __init__(self, values):
        """values: list of distinct values for this column"""
        self.values = list(values)
        self.bitmaps = {v: bytearray() for v in self.values}

    def add_row(self, row_value):
        """Add one row's worth of bits"""
        for v in self.values:
            self.bitmaps[v].append(1 if row_value == v else 0)

    def query_eq(self, value):
        """Return rows where column = value"""
        if value not in self.bitmaps:
            return bytearray()
        return self.bitmaps[value]

    def query_and(self, bm1, bm2):
        """Bitwise AND of two bitmaps"""
        if len(bm1) != len(bm2):
            raise ValueError("Bitmap length mismatch")
        result = bytearray(len(bm1))
        for i in range(len(bm1)):
            result[i] = bm1[i] & bm2[i]
        return result

    def query_or(self, bm1, bm2):
        """Bitwise OR of two bitmaps"""
        result = bytearray(len(bm1))
        for i in range(len(bm1)):
            result[i] = bm1[i] | bm2[i]
        return result

    def query_count(self, bitmap):
        """Count 1-bits in a bitmap (population count)"""
        return sum(bin(b).count('1') for b in bitmap)

    def query_between(self, bitmap):
        """Return list of row indices where bitmap is 1"""
        indices = []
        for byte_idx, byte_val in enumerate(bitmap):
            for bit in range(8):
                if byte_val & (1 << bit):
                    indices.append(byte_idx * 8 + bit)
        return indices


# Example usage
bitmap_idx = BitmapIndex(['M', 'F'])
genders = ['M', 'F', 'M', 'M', 'F', 'M', 'F', 'F', 'M', 'F']
for g in genders:
    bitmap_idx.add_row(g)

male_bitmap = bitmap_idx.query_eq('M')
print(f"Male rows: {bitmap_idx.query_between(male_bitmap)}")
# Output: Male rows: [0, 2, 3, 5, 8]
```

**12.12.3 Bitmap Index Advantages & Disadvantages**

| Advantages | Disadvantages |
|------------|-------------|
| Extremely space-efficient for low cardinality (1 bit per row per value) | Space grows linearly with distinct values (bad for high cardinality) |
| Fast bitwise AND/OR/NOT operations (CPU-level) | Updates are expensive -- rebuilding bitmaps for many rows |
| Efficient COUNT (popcount instruction) | Not suitable for OLTP with frequent updates |
| Natural compression (run-length encoding for consecutive 0s/1s) | Lock contention on concurrent writes |
| Fast for multi-condition WHERE clauses | Less effective for range queries (requires conversion) |

**Edge Cases:**
- **High cardinality:** For columns like salary with 10K distinct values -> 10K bitmaps -> impractical
- **Bitmap compression:** Real systems (Oracle, PostgreSQL) use compressed bitmaps (BBC, Word-Aligned Hybrid)
- **Updates:** Changing gender from M to F = clear bit M, set bit F. If row IDs shift, all bitmaps must be updated

### 12.13 Function-Based Indexes (Expression Indexes)

**Real-World Analogy:** A restaurant menu organized by dietary tags. You can't easily find "gluten-free" options, so you create a secondary listing organized by dietary restriction (the function), even though the main menu is sorted by course.

**12.13.1 Overview**

A function-based index indexes the **result of an expression** rather than the raw column value.

```sql
-- Index on lowercased email
CREATE INDEX idx_lower_email ON customers(LOWER(email));

-- Query that uses the index:
SELECT * FROM customers WHERE LOWER(email) = 'alice@example.com';

-- Query that does NOT (different function):
SELECT * FROM customers WHERE UPPER(email) = 'ALICE@EXAMPLE.COM';

-- Multi-column expression index (PostgreSQL):
CREATE INDEX idx_total_price ON order_items((quantity * unit_price));

-- JSON field index (PostgreSQL):
CREATE INDEX idx_order_total ON orders(((items->>'total')::DECIMAL));
```

**12.13.2 When to Use**

- Case-insensitive searches: LOWER(name), UPPER(email)
- Date truncation: DATE_TRUNC('month', order_date)
- Computed columns: (salary + bonus), (price * quantity)
- JSON field extraction: (metadata->>'key')
- Substring matching (with specific patterns): SUBSTRING(name, 1, 3)

**12.13.3 Limitations**

- The query must use the **exact same expression** as the index definition
- Expression evaluation adds CPU cost on insert/update
- Not all DBMS support function-based indexes
- Statistics on expression values may be less accurate

### 12.14 Composite Indexes and Covering Indexes

**Real-World Analogy:** A phone book sorted by (last_name, first_name). You can quickly find "Smith, John" -- but you cannot easily find everyone named John. The leftmost prefix (last_name) is mandatory for efficient lookup.

**12.14.1 Composite Index Structure**

A composite index on columns (A, B, C) creates a B+Tree where keys are ordered lexicographically by A, then B, then C.

```
Composite Index on (dept_id, hire_date, salary):
Root:    [(1, 2020-01-01, 50000), (2, 2021-06-15, 70000), ...]
  |                   |                         |
Leaf:  (1,2019,...) -> (1,2020,...) -> (1,2021,...) -> (2,2020,...) -> (2,2021,...)
```

**12.14.2 The Leftmost Prefix Rule**

A composite index can be used for queries that filter on a **prefix** of the indexed columns (from left to right). You cannot skip a column.

```
Index: (A, B, C)

Usable queries:
  WHERE A = 1                         -> Uses first column
  WHERE A = 1 AND B = 2               -> Uses first two columns
  WHERE A = 1 AND B = 2 AND C = 3     -> Uses all three
  WHERE A = 1 AND C = 3               -> Uses A only (B skipped)
  WHERE A IN (1,2) AND B = 2          -> Uses A and B
  WHERE A > 1 AND B = 2               -> Uses A only (range on A)

NOT usable:
  WHERE B = 2                         -> Cannot use (leftmost missing)
  WHERE C = 3                         -> Cannot use
  WHERE B = 2 AND C = 3               -> Cannot use
```

**12.14.3 Column Order Strategy**

**Rule 1:** Equality conditions first, range conditions after
```
WHERE dept_id = 10 AND hire_date > '2024-01-01'
-> Index on (dept_id, hire_date)
```

**Rule 2:** High selectivity (more distinct values) first
```
Index on (gender, salary):
  gender has 2 values -> filters 50%
  salary has 10K values -> filters 0.01%

Better order: (salary, gender) -- salary filters more rows first
```

**Rule 3:** Consider specific query patterns
```
Common query: WHERE status = 'active' AND created_at > '2024-01-01'
  -> Index on (status, created_at) -- equality then range

Common query: WHERE customer_id = 42 ORDER BY order_date DESC
  -> Index on (customer_id, order_date DESC) -- filtering then ordering
```

**12.14.4 Covering Index (Index-Only Scan)**

A covering index contains **all columns** needed by a query. The DBMS can return results from the index alone.

```sql
CREATE INDEX idx_covering ON employees(dept_id, last_name, first_name, salary);

-- This query reads ONLY the index:
SELECT dept_id, last_name, first_name
FROM employees
WHERE dept_id = 10;
-- Plan: Index Only Scan (no table access needed)

-- This also uses only the index:
SELECT dept_id, salary
FROM employees
WHERE dept_id = 10 AND last_name LIKE 'S%';
-- All columns (dept_id, last_name, salary) are in the index
```

**Benefits of Covering Index:**
- Eliminates table access -> fewer I/Os
- Reduces buffer pool contention
- Particularly valuable for frequently repeated queries (hot queries)

**Cost:** Index becomes larger (more columns = more bytes per key). Write overhead increases.

**12.14.5 Composite Index Edge Cases**

- **Index on (A DESC, B ASC):** Mixed sort order -- useful for ORDER BY A DESC, B ASC
- **Very wide index:** More than 5-6 columns rarely useful (diminishing returns)
- **NULL handling:** DBMS place NULLs last or first depending on sort order
- **Index on (col1, col2) vs two single-column indexes:** The composite helps prefix queries plus queries with both columns. Two single-column indexes help queries with either column independently

### 12.15 Clustered vs Non-Clustered Index Comparison

| Aspect | Clustered Index | Non-Clustered Index |
|--------|----------------|---------------------|
| **Physical order** | Data physically sorted by index key | Index order independent of data order |
| **Count per table** | 1 (or 0, if heap) | Many (up to 999 in SQL Server) |
| **Leaf node content** | Full data row | Pointer to data (PK or RID) |
| **Range scan** | Sequential I/O -- very fast | Random I/O per row -- slower |
| **INSERT cost** | High -- may require page split/reorg | Lower -- append to separate structure |
| **UPDATE key** | Expensive -- may need to relocate row | Lower -- update pointer only |
| **Space** | No extra (data = index) | Extra (index is separate) |
| **Covering** | Always (leaf = data row) | Only if index includes all needed columns |
| **Fragmentation** | Page splits on insert | Less fragmentation |
| **Best for** | Range queries, PK lookups | Many different search paths |

**MySQL InnoDB Specifics:**
- Always has a clustered index (on PK, or first UNIQUE, or hidden 6-byte row ID)
- Secondary indexes store PK values as row pointers -> need two lookups
- PK size directly affects all secondary index sizes

**PostgreSQL Specifics:**
- Uses heap storage (no implicit clustered index)
- All indexes are non-clustered
- CLUSTER command physically reorders table to match an index (one-time operation, not maintained)
- Heap-only tuples (HOT) optimize updates

### 12.16 Index Selection

**When to Create an Index:**
- Columns frequently used in WHERE, JOIN, ORDER BY, GROUP BY
- Foreign key columns (accelerate JOINs)
- High-selectivity columns (many distinct values -> few rows per key)
- Large tables where full scans are slow
- Queries returning &lt; 5% of rows (index more efficient than scan)

**When NOT to Create an Index:**
- Small tables (< 1000 pages)
- Columns rarely used in queries
- Low-selectivity columns (boolean, status with 2-3 values)
- Heavy write workloads (index maintenance overhead)
- Columns frequently updated (index needs updating on every change)

```sql
-- Monitor index usage (PostgreSQL)
SELECT schemaname, tablename, indexname, idx_scan, idx_tup_read,
       idx_tup_fetch
FROM pg_stat_user_indexes
ORDER BY idx_scan;

-- Find unused indexes (PostgreSQL)
SELECT indexrelid::regclass, idx_scan
FROM pg_stat_user_indexes
WHERE idx_scan = 0 AND indexrelid NOT IN (
    SELECT indexrelid FROM pg_constraint
);
```

### 12.17 Index-Organized Tables (IOT)

Some databases (Oracle, MySQL InnoDB) store the table as a clustered index:
- The data IS the index
- The index IS the data

```sql
-- MySQL InnoDB automatically creates a clustered index on the PRIMARY KEY
CREATE TABLE employees (
    emp_id INTEGER PRIMARY KEY,  -- This IS the clustered index
    name VARCHAR(100),
    department_id INTEGER
);
-- Secondary indexes on name or department_id contain pointers to the primary key
```

> **One-Sentence Takeaway:** In index-organized tables (clustered indexes), the data IS the index -- secondary indexes store primary key pointers, adding an extra lookup step.

### 12.18 Partial Indexes

**Partial Index:** Indexes only a subset of rows.

```sql
CREATE INDEX idx_active_orders ON orders(order_id)
WHERE status NOT IN ('completed', 'cancelled');

SELECT * FROM orders WHERE status = 'pending';  -- Uses the partial index
```

> **One-Sentence Takeaway:** Partial indexes reduce storage and maintenance by indexing only relevant rows (WHERE clause).

### 12.19 B+Tree Order Calculation (Detailed)

**Step-by-step calculation for a typical database page (8 KB):**

```
Given:
  Page size = 8,192 bytes (8 KB)
  Key size = 8 bytes (BIGINT)
  Pointer size = 6 bytes (page ID)
  Per-entry overhead = 0 bytes (packed layout)

Internal node entry = key + child pointer = 8 + 6 = 14 bytes
Internal node entries per page = floor(8192 / 14) = 585
Internal node fan-out = 585 + 1 = 586 (one extra pointer)

Leaf node entry = key + row pointer = 8 + 6 = 14 bytes
Leaf node entries per page = floor(8192 / 14) = 585

Capacity at each level (fan-out = 586):
  Level 0 (leaf level): 585 entries
  Level 1: 586 x 585 = 342,810 entries
  Level 2: 586^2 x 585 approx 200,886,660 entries
  Level 3: 586^3 x 585 approx 117,719,582,760 entries

Keys indexed in 3 I/Os (height 3): ~200 million
Keys indexed in 4 I/Os (height 4): ~117 billion
```

**With overhead (70% fill factor):**

```
Typical occupancy: ~70% (due to splits and page utilization)
Effective entries per page: 585 x 0.70 approx 409

Level 0: 409
Level 1: 586 x 409 approx 239,674
Level 2: 586^2 x 409 approx 140,448,964
Level 3: 586^3 x 409 approx 82,303,092,904
```

This is why a table with 100M rows needs only 3 I/Os for a lookup -- 2 internal levels + 1 leaf.

### 12.20 Applications in Real Systems

**12.20.1 MySQL InnoDB**

- **Clustered index:** Automatically created on PRIMARY KEY. If no PK defined, uses first UNIQUE NOT NULL column. If none, creates hidden 6-byte row ID.
- **Secondary indexes:** Store PK value as row pointer. Lookup = secondary B+Tree -> PK -> clustered B+Tree.
- **Adaptive hash index:** InnoDB can autonomously build a hash index on frequently accessed pages of the B+Tree.
- **Change buffer:** Buffers secondary index changes when the page is not in memory -> merged later.
- **B+Tree page size:** Configurable (default 16 KB), controlled by innodb_page_size.

```sql
-- MySQL: View index cardinality
SHOW INDEX FROM employees;

-- Cardinality estimate
SELECT
    index_name,
    cardinality,
    (SELECT COUNT(*) FROM employees) AS table_rows,
    ROUND(cardinality / (SELECT COUNT(*) FROM employees) * 100, 2) AS selectivity_pct
FROM information_schema.statistics
WHERE table_name = 'employees';
```

**12.20.2 PostgreSQL**

- **Heap storage:** No implicit clustered index. All indexes are non-clustered.
- **B-Tree (not B+Tree):** PostgreSQL uses a variant of B-Tree (Lehman & Yao B-link tree) optimized for concurrent access.
- **Index types:** B-Tree (default), Hash, GiST, GIN, SP-GiST, BRIN.
- **Partial indexes:** Heavily used for performance optimization.
- **CLUSTER command:** One-time physical reordering but NOT maintained.
- **Index-only scans:** Supported through visibility maps (VM) -- checks if all tuples on a page are visible to all transactions.

```sql
-- PostgreSQL: CREATE INDEX with fill factor
CREATE INDEX idx_orders_date ON orders(order_date) WITH (fillfactor = 90);

-- Concurrent index build (no table lock)
CREATE INDEX CONCURRENTLY idx_orders_customer ON orders(customer_id);
```

**12.20.3 MongoDB**

- **Compound indexes:** Follow leftmost prefix rule similar to B+Tree.
- **Multikey indexes:** Index on array fields -- creates one entry per array element.
- **TTL indexes:** Automatically expire documents after a time interval.
- **Text indexes:** Full-text search indexes on string content.
- **Geospatial indexes:** 2dsphere and 2d for location queries.
- **WiredTiger storage engine:** Uses B-Tree with prefix compression.

```javascript
// MongoDB compound index
db.orders.createIndex({ customer_id: 1, order_date: -1 });

// MongoDB covered query (projection must exclude _id)
db.orders.find(
    { customer_id: 42 },
    { customer_id: 1, order_date: 1, _id: 0 }
).hint({ customer_id: 1, order_date: -1 });
```

### 12.21 Interview Corner

**Q1: When does a database NOT use an index, even though one exists?**

| Reason | Explanation |
|--------|-------------|
| **Low selectivity** | If index would return > 5-10% of rows, optimizer often chooses full scan |
| **Small table** | Full scan is faster than index traversal for small tables |
| **Function wrapping** | WHERE LOWER(name) = 'alice' can't use plain index on name |
| **Type mismatch** | WHERE varchar_col = 42 -> implicit cast prevents index use |
| **Leftmost prefix violation** | Composite index (A,B,C) with WHERE B = 1 |
| **OR conditions** | WHERE a = 1 OR b = 2 -- each leg may need separate index |
| **NOT IN / !=** | Negative conditions often trigger full scans |
| **Outdated statistics** | Planner doesn't know index is beneficial |
| **LIKE with leading %** | WHERE name LIKE '%smith%' cannot use B+Tree order |

**Q2: B-Tree vs Hash -- which one to choose?**

```
Choose Hash when:
  - Only equality lookups: WHERE pk = 42
  - No range queries, no ORDER BY
  - Key-value store pattern
  - E.g., cache lookups, ID lookups

Choose B-Tree/B+Tree when:
  - Range queries: WHERE date > '2024-01-01'
  - ORDER BY or GROUP BY
  - Composite indexes needed
  - LIKE prefix patterns: WHERE name LIKE 'Smi%'
  - General purpose (default choice)
```

**Q3: What is fill factor?**

Fill factor controls how full each B+Tree page is allowed to become before splitting.

```sql
CREATE INDEX idx_name ON table(col) WITH (fillfactor = 80);
```

- **Default:** Usually 90% (or 100% for read-only tables)
- **Lower (70-80%):** Leaves space for future inserts -> fewer page splits -> better write performance
- **Higher (100%):** Denser tree -> fewer levels -> better read performance at cost of more splits

**Q4: Index maintenance cost -- how much overhead?**

| Operation | Without Index | With 1 B+Tree Index | With 5 B+Tree Indexes |
|-----------|-------------|-------------------|----------------------|
| INSERT | O(1) page append | +O(log n) I/Os | +5 x O(log n) I/Os |
| UPDATE (key col) | O(1) update | +2 x O(log n) (delete+insert) | +10 x O(log n) |
| DELETE | O(1) mark | +O(log n) | +5 x O(log n) |
| Storage | Table size only | +50-100% table size | +250-500% table size |

**Rule of thumb:** Each additional index adds ~log n I/O to every write operation.

**Q5: Cardinality estimation and its impact on index selection**

The query optimizer uses column statistics to estimate how many rows each condition filters.

```sql
-- PostgreSQL: View column statistics
SELECT attname, n_distinct, most_common_vals, most_common_freqs
FROM pg_stats
WHERE tablename = 'employees';

-- Update statistics
ANALYZE employees;
```

- n_distinct = -1: All values unique (PK) -> high selectivity -> good for index
- n_distinct = 2: Boolean column -> low selectivity -> may not use index
- Most common values (MCV): Tells optimizer about data skew

**Q6: Index fragmentation -- what causes it and how to fix?**

```
Causes:
  - Page splits from insertions (leaves ~69% fill)
  - Deletions create empty space (ghost records)
  - Out-of-order inserts

Symptoms:
  - More pages read than necessary
  - Larger index size than data size
  - Slower range scans

Fix:
  -- PostgreSQL: Rebuild
  REINDEX INDEX idx_name;

  -- MySQL: Optimize
  OPTIMIZE TABLE table_name;

  -- SQL Server: Rebuild/Reorganize
  ALTER INDEX idx_name REBUILD;
```

**Q7: How does the DBMS decide between index scan and full table scan?**

The optimizer compares two costs:
1. **Index scan cost:** Tree traversal (height x random I/O cost) + leaf page reads
2. **Full scan cost:** Total pages x sequential I/O cost

**Break-even point:** When index would access > 5-25% of total pages (varies by DBMS).

**Q8: What is an index skip scan?**

An optimization that allows using a composite index even when the leftmost column is not filtered.

```sql
-- Index on (gender, salary)
-- Without skip scan, this query cannot use the index efficiently:
SELECT * FROM employees WHERE salary > 100000;

-- With skip scan (PostgreSQL, Oracle):
-- The DBMS internally iterates over distinct gender values ('M', 'F')
-- and does: WHERE gender = 'M' AND salary > 100000
--        UNION WHERE gender = 'F' AND salary > 100000
-- Effective if few distinct values in the leading column
```

### 12.22 Hash Index Dry Run -- Extendable Hashing with Collision Resolution

```
Setup: bucket size = 2 keys, global depth d = 1

Insert 4 (binary: 100):
  h(4) = last d=1 bits = 0 -> directory[0]
  Bucket at dir[0]: [] -> insert -> [4]
  Directory: [0->B0: [4], 1->B1: []]

Insert 12 (binary: 1100):
  h(12) = 0 -> directory[0]
  Bucket B0: [4] -> insert -> [4, 12]

Insert 8 (binary: 1000):
  h(8) = 0 -> directory[0]
  Bucket B0: [4, 12] -> full!
  local depth of B0 = 1 = global depth -> double directory
  d = 2
  Directory: [00, 01, 10, 11]
  Need d=3: triple collision on bits 00
  Double directory again to d=3:
  Directory: [000, 001, 010, 011, 100, 101, 110, 111]
  Now split B0 using last 3 bits:
  4 = 100 -> last 3 = 100
  12 = 1100 -> last 3 = 100
  8 = 1000 -> last 3 = 000

  B00 (local depth=3): [8] (last 3 = 000)
  B01 (local depth=3): [4, 12] (last 3 = 100)

  Directory entries:
  000 -> B00 (has 8)
  001 -> B1 (empty)
  010 -> B1
  011 -> B1
  100 -> B01 (has 4, 12)
  101 -> B1
  110 -> B1
  111 -> B1
```

### Examples

**Example 12.1: B+Tree Insertion Trace with Split Propagation**

Insert keys 1, 3, 5, 7, 9, 2, 4 into a B+Tree with leaf capacity = 2 and internal capacity = 2.

```
Step | Key | Action                          | Tree
1    | 1   | Insert in root leaf              | [1]
2    | 3   | Insert sorted                    | [1, 3]
3    | 5   | Leaf full -> split!              | Parent: [3]
     |     | L:[1] R:[3,5] promote 3          |       /    \
     |     |                                   |    [1]  [3,5]
4    | 7   | 7 > 3 -> right leaf               | [3]
     |     | Insert in right leaf              |  /    \
     |     |                                   | [1]  [3,5,7]
5    | 9   | 9 > 3 -> right leaf full -> split |   [3, 7]
     |     | R leaf: L:[3,5] R:[7,9] prom 7   |  /   |   \
     |     | Parent has room for 7             | [1] [3,5] [7,9]
6    | 2   | 2 < 3 -> left leaf                |   [3, 7]
     |     | Insert sorted in left leaf        |  /   |   \
     |     |                                   | [1,2][3,5][7,9]
7    | 4   | 4 > 3 -> middle leaf              |   [3, 7]
     |     | Middle full -> split!             |  /   |   \
     |     | L:[3,4] R:[5] prom 5 to parent   | [1,2][3,4][5] [7,9]
     |     | Parent full -> split parent!      |    [3, 5, 7]
     |     | New root: [5]                     |      [5]
     |     | L child: [3], R child: [7]        |     /    \
     |     |                                   |   [3]    [7]
     |     |                                   |  / | \   / | \
     |     |                                   |[1,2][3,4][5][7,9]
```

**Example 12.2: Index Selection for an E-Commerce App**

```sql
CREATE TABLE orders (
    order_id BIGINT PRIMARY KEY,
    customer_id INTEGER NOT NULL,
    order_date TIMESTAMP NOT NULL,
    status VARCHAR(20),
    total_amount DECIMAL(12,2),
    shipping_zip VARCHAR(10)
);

-- Query pattern 1: Customer's recent orders
CREATE INDEX idx_orders_customer_date ON orders(customer_id, order_date DESC);

-- Query pattern 2: Orders by status for fulfillment
CREATE INDEX idx_orders_pending ON orders(order_date, order_id)
WHERE status IN ('pending', 'processing');

-- Query pattern 3: Admin search by zip code
CREATE INDEX idx_orders_zip ON orders(shipping_zip);

-- Query pattern 4: Reporting daily totals
-- Consider a materialized view instead of indexes for aggregates
```

**Example 12.3: Analyzing Index Performance**

```sql
-- Before index: Full table scan
EXPLAIN ANALYZE SELECT * FROM orders WHERE customer_id = 42;
-- Seq Scan on orders (cost=0.00..17340.00 rows=1 width=120)
-- Actual time: 85.324..85.326 rows=5 loops=1

-- After index:
CREATE INDEX idx_orders_customer ON orders(customer_id);
EXPLAIN ANALYZE SELECT * FROM orders WHERE customer_id = 42;
-- Index Scan using idx_orders_customer on orders (cost=0.43..8.45 rows=5 width=120)
-- Actual time: 0.035..0.058 rows=5 loops=1
-- Improvement: 85ms to 0.05ms (1700x faster)
```

### 12.12 TypeScript B+ Tree Index Simulator

The code implements a minimal B+ Tree index with search, insert, and range scan capabilities.

```typescript
// ============================================================
// B+ Tree Index Simulator â€” TypeScript
// ============================================================

class BPlusTreeNode {
  keys: number[] = [];
  children: BPlusTreeNode[] = [];
  leaf = false;
  next?: BPlusTreeNode; // For leaf nodes: pointer to next sibling
  values?: number[];    // For leaf nodes: record IDs

  constructor(order: number) { this.order = order; }
  order: number;
}

class BPlusTree {
  private root: BPlusTreeNode;
  private order: number;

  constructor(order = 4) {
    this.order = order;
    this.root = new BPlusTreeNode(order);
    this.root.leaf = true;
    this.root.values = [];
  }

  // Search for a key and return value
  search(key: number): number | undefined {
    let node = this.root;
    while (!node.leaf) {
      let i = 0;
      while (i < node.keys.length && key >= node.keys[i]) i++;
      node = node.children[i];
    }
    const idx = node.keys.indexOf(key);
    return idx >= 0 ? node.values![idx] : undefined;
  }

  // Insert a key-value pair
  insert(key: number, value: number): void {
    const result = this.insertRecursive(this.root, key, value);
    if (result) {
      // Root was split â€” create new root
      const newRoot = new BPlusTreeNode(this.order);
      newRoot.keys = [result.key];
      newRoot.children = [this.root, result.right];
      newRoot.leaf = false;
      this.root = newRoot;
    }
  }

  private insertRecursive(node: BPlusTreeNode, key: number, value: number): { key: number; right: BPlusTreeNode } | null {
    if (node.leaf) {
      // Insert into leaf
      const idx = node.keys.findIndex(k => k > key);
      const pos = idx >= 0 ? idx : node.keys.length;
      node.keys.splice(pos, 0, key);
      node.values!.splice(pos, 0, value);
      // Split if full
      if (node.keys.length > this.order - 1) return this.splitLeaf(node);
      return null;
    }

    // Internal node â€” find child
    let i = 0;
    while (i < node.keys.length && key >= node.keys[i]) i++;
    const result = this.insertRecursive(node.children[i], key, value);
    if (result) {
      // Child was split â€” insert separator key
      const idx = node.keys.findIndex(k => k > result.key);
      const pos = idx >= 0 ? idx : node.keys.length;
      node.keys.splice(pos, 0, result.key);
      node.children.splice(pos + 1, 0, result.right);
      if (node.keys.length > this.order - 1) return this.splitInternal(node);
    }
    return null;
  }

  private splitLeaf(node: BPlusTreeNode): { key: number; right: BPlusTreeNode } {
    const mid = Math.floor(node.keys.length / 2);
    const right = new BPlusTreeNode(this.order);
    right.leaf = true;
    right.keys = node.keys.splice(mid);
    right.values = node.values!.splice(mid);
    right.next = node.next;
    node.next = right;
    return { key: right.keys[0], right };
  }

  private splitInternal(node: BPlusTreeNode): { key: number; right: BPlusTreeNode } {
    const mid = Math.floor(node.keys.length / 2);
    const key = node.keys[mid];
    const right = new BPlusTreeNode(this.order);
    right.leaf = false;
    right.keys = node.keys.splice(mid + 1);
    right.children = node.children.splice(mid + 1);
    node.keys.pop(); // Remove the promoted key
    return { key, right };
  }

  // Range scan: find all keys in [low, high]
  rangeScan(low: number, high: number): Array<{ key: number; value: number }> {
    const result: Array<{ key: number; value: number }> = [];
    let node = this.root;
    // Navigate to starting leaf
    while (!node.leaf) {
      let i = 0;
      while (i < node.keys.length && low >= node.keys[i]) i++;
      node = node.children[i];
    }
    // Scan leaf nodes
    while (node) {
      for (let i = 0; i < node.keys.length; i++) {
        if (node.keys[i] > high) return result;
        if (node.keys[i] >= low) result.push({ key: node.keys[i], value: node.values![i] });
      }
      node = node.next!;
    }
    return result;
  }

  print(): void {
    console.log('B+ Tree Structure (order=' + this.order + '):');
    const queue: { node: BPlusTreeNode; depth: number }[] = [{ node: this.root, depth: 0 }];
    let currentDepth = 0;
    let line = 'Depth 0: ';
    while (queue.length > 0) {
      const { node, depth } = queue.shift()!;
      if (depth > currentDepth) {
        console.log(line);
        currentDepth = depth;
        line = 'Depth ' + depth + ': ';
      }
      line += '[' + node.keys.join(',') + '] ';
      if (!node.leaf) {
        for (const child of node.children) queue.push({ node: child, depth: depth + 1 });
      }
    }
    console.log(line);
  }
}

// Demo
const tree = new BPlusTree(3);
const values = [10, 20, 5, 6, 12, 30, 7, 17];
values.forEach((v, i) => tree.insert(v, i));
tree.print();
console.log('\nSearch for 12: ' + (tree.search(12) !== undefined ? 'Found' : 'Not found'));
console.log('Range scan [5, 15]: ' + JSON.stringify(tree.rangeScan(5, 15)));
```

**Mermaid Diagram: Index Types Comparison**

```mermaid
flowchart TD
    subgraph "Index Types"
        B[B+ Tree Index<br/>O(log n) search<br/>Range scans efficient<br/>Ordered output] --> U[Use: General purpose<br/>Primary/Unique keys<br/>Range queries]
        H[Hash Index<br/>O(1) lookup<br/>No range scans<br/>Unordered output] --> U2[Use: Equality lookups<br/>Exact match queries<br/>In-memory caches]
        G[GiST/SP-GiST<br/>O(log n)<br/>Geometric search<br/>Custom operators] --> U3[Use: Geospatial data<br/>Full-text search<br/>Network addresses]
        F[Full-Text Index<br/>Inverted file<br/>Token-based<br/>Ranked results] --> U4[Use: Document search<br/>Text mining<br/>Search engine]
    end
```

### Additional Chapter Quiz Questions

11. The main advantage of a B+ Tree over a B-Tree is:
    a) Faster point lookups
    b) All keys are stored in leaves, enabling efficient range scans
    c) Less memory usage
    d) Simpler implementation

12. A hash index is most efficient for:
    a) Range queries (BETWEEN, >, <)
    b) Equality queries (=)
    c) Pattern matching queries (LIKE)
    d) ORDER BY queries

13. A composite index on (a, b, c) can be used for:
    a) All queries involving any of a, b, c
    b) Queries using a, or a and b, or a and b and c
    c) Only queries using all three columns
    d) Only the first column (a)

14. The fill factor of an index affects:
    a) Query results
    b) How much empty space is left in pages for future inserts
    c) The number of columns indexed
    d) The type of index

**Answers:** 11-b, 12-b, 13-b, 14-b

---

### Pro Tips

1. **Index the WHERE clause columns first** -- columns in WHERE, JOIN, and ORDER BY are the highest priority.
2. **Composite index column order matters enormously** -- put high-selectivity columns first.
3. **Don't over-index write-heavy tables** -- every index adds overhead to INSERT, UPDATE, DELETE.
4. **Clustered indexes are not always better** -- heap tables with non-clustered indexes suit write-heavy workloads.
5. **Use partial indexes for active/passive data patterns** -- if most queries touch WHERE is_active = TRUE.
6. **Monitor unused indexes** -- indexes never used consume write overhead and storage with zero benefit.
7. **Fill factor tuning** -- for tables with many inserts, lower fill factor (70-80%) reduces page splits.
8. **Covering indexes eliminate table access** -- the single biggest query optimization for critical queries.

### One-Sentence Takeaways

- **12.1:** Indexes are auxiliary data structures that speed up data retrieval at the cost of slower writes and additional storage.
- **12.2:** Ordered indexes (B-Tree/B+Tree) support range queries; hash indexes provide O(1) equality lookups.
- **12.3:** Dense indexes have one entry per row (larger, faster); sparse indexes have one entry per block (smaller, slower).
- **12.4:** Clustered indexes determine physical data order (one per table); non-clustered indexes store pointers to data.
- **12.5:** B-Trees store data in all nodes; B+Trees store data only in linked leaf nodes for efficient range scans.
- **12.6:** B-Trees and B+Trees both offer O(log_m n) search/insert/delete where m is the fan-out (typically 200-500).
- **12.7:** B+Tree higher fan-out (no data in internal nodes) means shorter trees and fewer I/Os than B-Tree.
- **12.8:** ISAM is a static index that requires periodic rebuild; B+Tree self-balances automatically.
- **12.9:** Hash indexes provide O(1) equality lookups but cannot support range queries or ORDER BY.
- **12.10:** Extendable hashing uses a directory that doubles on overflow; linear hashing splits buckets round-robin.
- **12.11:** Bitmap indexes use bit arrays per distinct value -- ideal for low-cardinality columns in data warehouses.
- **12.12:** Functional indexes store expression results like LOWER(email) or JSON extraction.
- **12.13:** Composite (multi-column) indexes follow the leftmost prefix rule -- high-selectivity columns first.
- **12.14:** A covering index includes all query columns, enabling index-only scans and eliminating table access.
- **12.15:** The leftmost prefix rule: composite index (A,B,C) helps queries on A, (A,B), and (A,B,C) but not B alone.
- **12.16:** Index selection should be driven by actual query patterns and performance measurements, not intuition.

### Concept Comparison Table

| Index Type | Lookup Complexity | Supports Range? | Space | Best For |
|-----------|------------------|-----------------|-------|----------|
| **B-Tree** | O(log_m n) | Yes | Moderate | General-purpose, ordering |
| **B+Tree** | O(log_m n) | Yes (excellent) | Moderate | Database indexes, range scans |
| **ISAM** | O(log n) | Yes | Low | Read-only/append workloads |
| **Hash (static)** | O(1) avg | No | Low | Equality lookups only |
| **Hash (extendable)** | O(1) avg | No | Low-Moderate | Growing key-value sets |
| **Bitmap** | Variable | Yes | Compact (low card) | Data warehouse dimensions |
| **Partial** | Depends | Depends | Low | Subset-of-rows queries |
| **Functional** | Depends | Depends | Moderate | Expression-based lookups |
| **Composite** | O(log_m n) | Leftmost prefix | Larger | Multi-column WHERE |

| Index Feature | Clustered | Non-Clustered (Secondary) |
|-------------|-----------|------------------------|
| **Physical order** | Matches index order | Independent of data order |
| **Count per table** | One | Many (up to hundreds) |
| **Range scan** | Very fast (sequential I/O) | Slower (random I/O per row) |
| **Inserts** | Can cause page splits | Less overhead |
| **Covering query** | Always (leaf = data row) | Only if all columns in index |
| **Size** | Same as table | Additional (index structure only) |

### Quick Reference

| Property | B+Tree | Hash Index | Bitmap Index | B-Tree |
|---------|--------|-----------|-------------|--------|
| **Equality search** | O(log_m n) | O(1) avg | Fast (low card) | O(log_m n) |
| **Range search** | O(log_m n + k) | Not supported | Fast (AND/OR) | O(log_m n + k) |
| **ORDER BY** | Fast (index order) | Not supported | Not typical | Fast (index order) |
| **Multi-column** | Yes (composite) | Single key | Yes (bitwise) | Yes (composite) |
| **Space** | Moderate | Small | Compact (low card) | Moderate |
| **Concurrent writes** | Excellent (B-link) | Moderate | Poor | Good |
| **Height (10^8 keys)** | ~3-4 levels | N/A | N/A | ~4-5 levels |
| **Implementation** | MySQL/PostgreSQL | Redis/MemSQL | Oracle DW | WiredTiger/PostgreSQL |

### Cross-Application Matrix

| Index Strategy | Applied In | Why It Matters |
|--------------|-----------|----------------|
| **B+Tree on FK columns** | All multi-table queries | Accelerates JOIN operations |
| **Composite Index (status, date)** | Reporting dashboards | Fast filtering by status then date range |
| **Partial Index (WHERE active=TRUE)** | User management systems | Only index active users for login queries |
| **Expression Index (LOWER(email))** | Authentication systems | Case-insensitive email login lookups |
| **Hash Index** | Lookup tables, cache keys | Fastest option for simple key-value lookups |
| **Bitmap Index** | Data warehouse fact tables | Efficient queries on dimension foreign keys |
| **Covering Index** | High-read OLTP | Avoids accessing the table entirely |
| **Extendable Hashing** | Dynamic hash tables | Grows without full rebuild |
| **B-Tree with prefix compression** | MongoDB WiredTiger | Reduces storage for compound indexes |

### Chapter Quiz

1. The search complexity of a B+ tree is:
   a) O(1)
   b) O(log_m n)
   c) O(n)
   d) O(n log n)

2. Which index type does NOT support range queries?
   a) B+Tree
   b) Hash
   c) Bitmap
   d) Composite B+Tree

3. A clustered index means:
   a) Multiple indexes are stored together
   b) The table data is physically ordered by the index key
   c) The index stores a pointer to the data
   d) The index covers all columns

4. How many clustered indexes can a table have?
   a) Zero or one
   b) Up to two
   c) As many as needed
   d) At least one

5. The most important factor when designing a composite index is:
   a) Index name
   b) Column order (high-selectivity first)
   c) Number of columns (at least 3)
   d) Data type of the first column

6. A partial index is useful when:
   a) Queries frequently filter on a subset of rows
   b) The table is very small
   c) Every column needs an index
   d) The database is read-only

7. Which index type is most space-efficient for low-cardinality columns?
   a) B+Tree
   b) Hash
   c) Bitmap
   d) Functional

8. A covering index is one that:
   a) Covers all tables in the database
   b) Contains all columns needed by a query, eliminating table access
   c) Is clustered
   d) Includes every column

9. In a B+Tree, internal nodes contain:
   a) Data pointers only
   b) Routing keys only
   c) Both keys and data
   d) No keys, only pointers

10. What does extendable hashing do when a bucket overflows?
    a) Doubles the entire hash table
    b) Splits only the overflowing bucket using a directory
    c) Uses chaining without splitting
    d) Rebuilds the entire index

11. The leftmost prefix rule states that:
    a) The first column of a composite index is always optional
    b) The index can be used starting from any column
    c) The index can be used only for queries that filter on a prefix of indexed columns
    d) Only the leftmost column matters

12. Fill factor controls:
    a) How many rows are indexed
    b) How full each B+Tree page is before splitting
    c) The key size
    d) The hash function complexity

**Answers:** 1-b, 2-b, 3-b, 4-a, 5-b, 6-a, 7-c, 8-b, 9-b, 10-b, 11-c, 12-b

### Summary

- Indexes are auxiliary structures that accelerate data retrieval at the cost of write overhead and storage.
- B-Trees store data pointers in all nodes; B+Trees store data only in linked leaf nodes.
- B+Tree is the dominant index structure, providing O(log_m n) search/insert/delete with high fan-out (200-500).
- Clustered indexes physically sort data (one per table); non-clustered indexes store pointers to data.
- Hash indexes provide O(1) equality lookups but cannot support range queries.
- Composite index column order matters: equality columns before range, high-selectivity first.
- The leftmost prefix rule determines which queries can use a composite index.
- Covering indexes include all query columns, enabling index-only scans.
- Bitmap indexes excel at low-cardinality columns using fast bitwise operations.
- Partial and functional indexes optimize specific query patterns.
- Extendable hashing doubles directories on overflow; linear hashing splits round-robin.
- Real systems: MySQL InnoDB uses B+Tree with clustered PK; PostgreSQL uses heap + B-Tree; MongoDB WiredTiger uses B-Tree with prefix compression.

### Exercises

#### Basic

1. Explain the difference between a clustered and non-clustered index. What are the trade-offs?

2. Why can B+Tree indexes support range queries (WHERE id BETWEEN 10 AND 100) but hash indexes cannot?

3. Given an INDEX on (state, city), which of the following queries can use the index effectively?
   a) WHERE state = 'CA' AND city = 'Los Angeles'
   b) WHERE city = 'Los Angeles'
   c) WHERE state = 'CA'
   d) WHERE state = 'CA' AND population > 100000

4. What is a covering index? How does it improve query performance?

5. What is the difference between a dense index and a sparse index? When would you use each?

#### Intermediate

6. Insert keys 5, 15, 25, 35, 45, 55 into a B+Tree with leaf capacity = 2 and internal capacity = 2. Show the tree after each insertion, including all splits.

7. For the composite index (department_id, hire_date, salary):
   - Which queries can use all three columns efficiently?
   - Which queries can use only two columns?
   - Which queries cannot use the index effectively?
   Explain the column order matters principle with concrete examples.

8. You have a table employees(emp_id, name, department, salary, hire_date). The most common query is:
   SELECT name, salary FROM employees
   WHERE department = 'Engineering' AND hire_date > '2025-01-01'
   ORDER BY salary DESC;
   Design an optimal index strategy. Justify your choice.

9. What is a bitmap index scan? In PostgreSQL, why might the optimizer choose a bitmap scan over an index scan?

10. Trace a B-Tree insert of keys 10, 20, 30, 40, 50, 60, 70 into an empty B-Tree of order 5 (max 4 keys per node). Show each step and all splits.

11. Given a B+Tree with page size 8 KB, key size 8 bytes, pointer size 6 bytes, calculate:
    - Maximum keys per internal node
    - Tree height for 10M keys
    - Number of I/Os for a point lookup

#### Advanced

12. Design an index strategy for a logging table that receives 10,000 INSERTs per second:
    - Queries: Find all errors in the last hour, Count warnings per day for the last month
    - Constraints: Minimal impact on write throughput
    - Consider: Partial indexes, time-based partitioning, B-Tree vs. BRIN indexes

13. For a product catalog with categories (~100 distinct values), prices (continuously varying), and active status (boolean):
    - Write queries that filter by category, price range, and status
    - Design composite indexes for each query pattern
    - Explain why you might also use partial indexes

14. Given the B-Tree variation factor: a typical B+Tree internal node might hold 500 keys (8-byte key + 8-byte pointer = 16 bytes, 8KB page). Calculate how many levels are needed for:
    - 1 million records
    - 1 billion records
    - 1 trillion records
    What does this tell you about the scalability of B+Tree indexes?

15. Implement an extendable hash index in Python with:
    - Bucket capacity of 3 keys
    - Dynamic directory doubling
    - Insert, search, and delete operations
    - Print the directory state after each insert

16. Compare and contrast ISAM with B+Tree indexes. Under what workload would ISAM outperform B+Tree? When would it fail?

17. For a table with 100M rows and 5 B+Tree indexes, calculate the additional I/O cost per INSERT. Assume tree height = 4 for each index.

18. Explain how MySQL InnoDB's secondary index lookup works step by step. Why does a large PRIMARY KEY (e.g., UUID) slow down all secondary indexes?

19. Given a workload of 80% reads and 20% writes on a 50M row table with 3 indexes:
    - Recommend a fill factor
    - Explain how fill factor affects read vs write performance
    - Describe the trade-off between lower and higher fill factors

20. When does the query optimizer choose a full table scan over an index scan? List at least 5 conditions and explain the cost-based decision process.
