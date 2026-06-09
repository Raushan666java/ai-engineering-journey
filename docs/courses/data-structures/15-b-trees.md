# Chapter 15: B-Trees and B+ Trees

## Learning Objectives

- Define B-tree order, properties, and structure.
- Implement search, insertion, and deletion in B-trees.
- Describe B+ trees and their advantages for databases.
- Analyze B-tree height and complexity.

## Theory

### B-Tree Definition

A B-tree of **order m** is a balanced search tree satisfying:

1. Every node has at most \( m \) children.
2. Every internal node (except the root) has at least \( \lceil m/2 \rceil \) children.
3. The root has at least 2 children if it is not a leaf.
4. All leaves appear at the same level.
5. A non-leaf node with \( k \) children contains \( k-1 \) keys.

**Example (order 5):** Internal nodes have 2-4 keys and 3-5 children.

### Height Bound

The height \( h \) of a B-tree of order \( m \) with \( n \) keys satisfies:

\[ h \le \log_{\lceil m/2 \rceil} \frac{n+1}{2} \]

For \( m = 1000 \), even billions of keys require only a few levels.

### B-Tree Operations

**Search:** traverse from root to leaf, choosing the child between the appropriate pair of keys.

**Insert:** always at a leaf. If the leaf is full (has \( m-1 \) keys), split it: distribute keys between two nodes and promote the middle key to the parent.

**Delete:** more complex. If a node underflows (has fewer than \( \lceil m/2 \rceil - 1 \) keys), borrow from a sibling (redistribution) or merge with a sibling.

### B+ Trees

In a B+ tree:
- All keys are stored in the leaves.
- Internal nodes contain only routing keys (no data).
- Leaves are linked in a linked list for sequential traversal.
- This makes range queries efficient: find the first key, then follow leaf pointers.

## Examples

### Example 1: B-Tree Node and Search

```cpp
#include <iostream>
#include <vector>

const int ORDER = 5; // max children = 5, max keys = 4

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

    // Search for a key; returns node and position
    bool search(BTreeNode* node, int key, BTreeNode*& resultNode, int& pos) const {
        if (!node) return false;

        int i = 0;
        while (i < node->numKeys && key > node->keys[i]) ++i;

        if (i < node->numKeys && key == node->keys[i]) {
            resultNode = node;
            pos = i;
            return true;
        }

        if (node->isLeaf) return false;

        return search(node->children[i], key, resultNode, pos);
    }

    void traverse(BTreeNode* node) const {
        if (!node) return;
        for (int i = 0; i < node->numKeys; ++i) {
            if (!node->isLeaf) traverse(node->children[i]);
            std::cout << node->keys[i] << " ";
        }
        if (!node->isLeaf) traverse(node->children[node->numKeys]);
    }

    void splitChild(BTreeNode* parent, int idx, BTreeNode* child) {
        BTreeNode* newChild = new BTreeNode(child->isLeaf);
        newChild->numKeys = ORDER / 2;

        for (int i = 0; i < ORDER / 2; ++i) {
            newChild->keys[i] = child->keys[i + ORDER / 2];
        }

        if (!child->isLeaf) {
            for (int i = 0; i <= ORDER / 2; ++i) {
                newChild->children[i] = child->children[i + ORDER / 2];
            }
        }

        child->numKeys = ORDER / 2;

        for (int i = parent->numKeys; i > idx; --i) {
            parent->children[i + 1] = parent->children[i];
        }
        parent->children[idx + 1] = newChild;

        for (int i = parent->numKeys - 1; i >= idx; --i) {
            parent->keys[i + 1] = parent->keys[i];
        }
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

public:
    BTree() : root(nullptr) {}

    bool search(int key) const {
        BTreeNode* node = nullptr;
        int pos;
        return search(root, key, node, pos);
    }

    void traverse() const {
        traverse(root);
        std::cout << "\n";
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
};
```

### Example 2: B-Tree Driver

```cpp
#include "btree.h"

int main() {
    BTree t;

    // Insert keys 1-20
    for (int i = 1; i <= 20; ++i) t.insert(i);

    std::cout << "B-Tree traversal (sorted): ";
    t.traverse();

    std::cout << "Search 10: " << (t.search(10) ? "found" : "not found") << "\n";
    std::cout << "Search 25: " << (t.search(25) ? "found" : "not found") << "\n";

    return 0;
}
```

**Output:**
```
B-Tree traversal (sorted): 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
Search 10: found
Search 25: not found
```

### Example 3: B+ Tree — Leaf-Linked Structure Sketch

```cpp
#include <iostream>
#include <vector>

const int BPLUS_ORDER = 4;

struct BPlusLeaf {
    std::vector<int> keys;
    BPlusLeaf* next; // next leaf in sequence

    BPlusLeaf() : next(nullptr) {
        keys.reserve(BPLUS_ORDER);
    }

    bool isFull() const { return keys.size() >= BPLUS_ORDER; }
};

struct BPlusInternal {
    std::vector<int> keys;
    std::vector<BPlusInternal*> children;
    BPlusLeaf* firstLeaf; // for leaf-level access

    BPlusInternal() : firstLeaf(nullptr) {
        keys.reserve(BPLUS_ORDER);
        children.reserve(BPLUS_ORDER + 1);
    }
};

// Sequential scan using leaf pointers
void scanLeaves(BPlusLeaf* first) {
    BPlusLeaf* current = first;
    while (current) {
        for (int k : current->keys) {
            std::cout << k << " ";
        }
        current = current->next;
    }
    std::cout << "\n";
}
```

### Example 4: Database Indexing Analogy

```cpp
#include <iostream>

// Simulate a database index using B+ tree logic
struct IndexEntry {
    int key;
    int pageNumber; // disk page where the record is stored
};

int main() {
    std::cout << "B+ Tree Database Indexing Model\n";
    std::cout << "Order = 200, Height = 3\n";
    std::cout << "Max entries = (200)^3 = 8,000,000\n";
    std::cout << "Each lookup requires 3 disk reads (internal levels)\n";
    std::cout << "Range query: find start leaf, scan linked list\n";

    // Simulated lookup path
    int rootKeys[] = {100, 200, 300};
    int level1Keys[] = {50, 75};         // between root[0] and root[1]
    int leafKeys[] = {61, 62, 65, 68};   // target leaf
    int target = 65;

    std::cout << "Searching for key " << target << ":\n";
    std::cout << "  Level 2 (root): choose partition [" << rootKeys[0]
              << ", " << rootKeys[1] << ")\n";
    std::cout << "  Level 1: choose node with keys ";
    for (int k : level1Keys) std::cout << k << " ";
    std::cout << "\n";
    std::cout << "  Level 0 (leaf): found at page #"
              << (target % 5 + 100) << "\n";

    return 0;
}
```

**Output:**
```
B+ Tree Database Indexing Model
Order = 200, Height = 3
Max entries = (200)^3 = 8,000,000
Each lookup requires 3 disk reads (internal levels)
Range query: find start leaf, scan linked list
Searching for key 65:
  Level 2 (root): choose partition [100, 200)
  Level 1: choose node with keys 50 75
  Level 0 (leaf): found at page #105
```

## Summary

- B-trees are multi-way balanced trees designed for block-oriented storage.
- The branching factor (order) controls height; high order means very shallow trees.
- Splits propagate upward; merges prevent underflow.
- B+ trees store all data in leaves connected by a linked list, enabling efficient range scans.
- B-trees and B+ trees are the standard data structure for database indexes and file systems.

## Exercises

### Review Questions

1. Why does a B-tree have a minimum occupancy requirement (ceil(m/2) - 1 keys)?
2. How does the B+ tree leaf-linked structure benefit range queries?
3. What is the relationship between disk block size and B-tree order?

### Application Problems

4. Implement a B-tree deletion operation for a node with underflow (borrow and merge).
5. Write a function to compute the exact height of a B-tree given its order and number of keys.
6. Simulate a B+ tree range query: find all keys between \( low \) and \( high \).

### Challenge Problem

7. Implement a **B-link tree**, a variant that adds sibling pointers at every level for concurrency. Show how a search can start at the root and follow sibling links if a split is encountered mid-traversal.
