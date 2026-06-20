# Chapter 9: Binary Search Trees

> **Previous:** [Chapter 8: Binary Trees](./08-binary-trees.md) | **Next:** [Heaps](./10-heaps.md)

## Learning Objectives

- Define the Binary Search Tree (BST) invariant.
- Implement search, insertion, and deletion.
- Implement min, max, successor, and predecessor.
- Analyze the complexity of BST operations.

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| BST Invariant | Left < root < right for all nodes | Enables O(log n) average search |
| Insert/Search | Compare key, descend left or right | Recursive or iterative both O(h) |
| Deletion (3 cases) | Leaf, one child, two children | Two-child case uses successor swap |
| Successor/Predecessor | Min of right subtree or ancestor | Useful for ordered traversal |
| Complexity | O(log n) average, O(n) worst | Balanced tree guarantees O(log n) |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Binary Search Tree] --> B[BST Invariant]
    B --> C[Search / Insert O(log n)]
    C --> D[Successor / Predecessor]
    D --> E[Deletion: 3 Cases]
    E --> F[Complexity Analysis]
    F --> G[Applications: Dictionary, Index]
```

## Theory

![Binary Search Tree Flowchart](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/data-structures/ch09-bst.png)

### BST Invariant

> **Remember:** The BST property applies to all nodes in the subtree, not just direct children - a node's left descendant cannot exceed the root even if it is the right child of the left child.

For any node with key \( k \):
- All keys in the left subtree are **less than** \( k \).
- All keys in the right subtree are **greater than** \( k \).

Duplicate keys may be handled by convention (left includes less-than-or-equal, or by storing a count).

```
        50
       /  \
     30    70
    /  \   / \
   20  40 60  80
```

### BST Operations and Complexity

| Operation | Average | Worst (unbalanced) |
|-----------|---------|-------------------|
| Search | \( O(\log n) \) | \( O(n) \) |
| Insert | \( O(\log n) \) | \( O(n) \) |
| Delete | \( O(\log n) \) | \( O(n) \) |
| Min / Max | \( O(h) \) | \( O(n) \) |
| Successor / Predecessor | \( O(h) \) | \( O(n) \) |

### Successor

The successor of node \( x \) is the node with the smallest key greater than \( x \):
1. If \( x \) has a right subtree, successor is the minimum of that subtree.
2. Otherwise, move up until finding an ancestor that is a left child of its parent.

### Deletion (Three Cases)

1. **Leaf**: remove the node directly.
2. **One child**: replace the node with its child.
3. **Two children**: replace with the inorder successor (or predecessor), then delete the successor.

> **One-Sentence Takeaway:** BSTs enable O(log n) average-case search by maintaining the left < root < right invariant - but sorted input creates degenerate O(n) trees that require balancing.

## Examples

### Example 1: BST Implementation

```cpp
#include <iostream>

template <typename T>
struct BSTNode {
    T data;
    BSTNode* left;
    BSTNode* right;

    BSTNode(const T& value) : data(value), left(nullptr), right(nullptr) {}
};

template <typename T>
class BST {
private:
    BSTNode<T>* root;

    BSTNode<T>* insert(BSTNode<T>* node, const T& value) {
        if (!node) return new BSTNode<T>(value);
        if (value < node->data)
            node->left = insert(node->left, value);
        else if (value > node->data)
            node->right = insert(node->right, value);
        // else: duplicate, ignore
        return node;
    }

    bool search(BSTNode<T>* node, const T& value) const {
        if (!node) return false;
        if (value == node->data) return true;
        if (value < node->data) return search(node->left, value);
        return search(node->right, value);
    }

    BSTNode<T>* findMin(BSTNode<T>* node) const {
        while (node && node->left) node = node->left;
        return node;
    }

    BSTNode<T>* findMax(BSTNode<T>* node) const {
        while (node && node->right) node = node->right;
        return node;
    }

    BSTNode<T>* remove(BSTNode<T>* node, const T& value) {
        if (!node) return nullptr;

        if (value < node->data) {
            node->left = remove(node->left, value);
        } else if (value > node->data) {
            node->right = remove(node->right, value);
        } else {
            // Case 1: leaf
            if (!node->left && !node->right) {
                delete node;
                return nullptr;
            }
            // Case 2: one child
            if (!node->left) {
                BSTNode<T>* temp = node->right;
                delete node;
                return temp;
            }
            if (!node->right) {
                BSTNode<T>* temp = node->left;
                delete node;
                return temp;
            }
            // Case 3: two children
            BSTNode<T>* successor = findMin(node->right);
            node->data = successor->data;
            node->right = remove(node->right, successor->data);
        }
        return node;
    }

    void inorder(BSTNode<T>* node) const {
        if (!node) return;
        inorder(node->left);
        std::cout << node->data << " ";
        inorder(node->right);
    }

    void destroy(BSTNode<T>* node) {
        if (!node) return;
        destroy(node->left);
        destroy(node->right);
        delete node;
    }

public:
    BST() : root(nullptr) {}
    ~BST() { destroy(root); }

    void insert(const T& value) { root = insert(root, value); }

    bool search(const T& value) const { return search(root, value); }

    void remove(const T& value) { root = remove(root, value); }

    T min() const {
        BSTNode<T>* node = findMin(root);
        if (!node) throw std::out_of_range("Tree is empty");
        return node->data;
    }

    T max() const {
        BSTNode<T>* node = findMax(root);
        if (!node) throw std::out_of_range("Tree is empty");
        return node->data;
    }

    void inorder() const {
        inorder(root);
        std::cout << "\n";
    }
};
```

### Example 2: Driver Program

```cpp
#include "bst.h"

int main() {
    BST<int> bst;
    int values[] = {50, 30, 70, 20, 40, 60, 80};

    for (int v : values) bst.insert(v);

    std::cout << "Inorder traversal (sorted): ";
    bst.inorder();

    std::cout << "Min: " << bst.min() << "\n";
    std::cout << "Max: " << bst.max() << "\n";

    std::cout << "Search 40: " << (bst.search(40) ? "found" : "not found") << "\n";
    std::cout << "Search 55: " << (bst.search(55) ? "found" : "not found") << "\n";

    bst.remove(20);
    std::cout << "After removing 20: ";
    bst.inorder();

    bst.remove(30);
    std::cout << "After removing 30: ";
    bst.inorder();

    bst.remove(50);
    std::cout << "After removing 50: ";
    bst.inorder();

    return 0;
}
```

**Output:**
```
Inorder traversal (sorted): 20 30 40 50 60 70 80
Min: 20
Max: 80
Search 40: found
Search 55: not found
After removing 20: 30 40 50 60 70 80
After removing 30: 40 50 60 70 80
After removing 50: 40 60 70 80
```

### Example 3: Successor and Predecessor

```cpp
#include <iostream>

template <typename T>
BSTNode<T>* successor(BSTNode<T>* root, BSTNode<T>* target) {
    if (target->right) {
        BSTNode<T>* current = target->right;
        while (current->left) current = current->left;
        return current;
    }

    BSTNode<T>* succ = nullptr;
    BSTNode<T>* current = root;
    while (current && current != target) {
        if (target->data < current->data) {
            succ = current;
            current = current->left;
        } else {
            current = current->right;
        }
    }
    return succ;
}

template <typename T>
BSTNode<T>* predecessor(BSTNode<T>* root, BSTNode<T>* target) {
    if (target->left) {
        BSTNode<T>* current = target->left;
        while (current->right) current = current->right;
        return current;
    }

    BSTNode<T>* pred = nullptr;
    BSTNode<T>* current = root;
    while (current && current != target) {
        if (target->data > current->data) {
            pred = current;
            current = current->right;
        } else {
            current = current->left;
        }
    }
    return pred;
}

int main() {
    auto* root = new BSTNode<int>(50);
    root->left = new BSTNode<int>(30);
    root->right = new BSTNode<int>(70);
    root->left->left = new BSTNode<int>(20);
    root->left->right = new BSTNode<int>(40);
    root->right->left = new BSTNode<int>(60);
    root->right->right = new BSTNode<int>(80);

    auto* succ = successor(root, root->right->left); // successor of 60
    if (succ) std::cout << "Successor of 60: " << succ->data << "\n";

    auto* pred = predecessor(root, root->right); // predecessor of 70
    if (pred) std::cout << "Predecessor of 70: " << pred->data << "\n";

    return 0;
}
```

**Output:**
```
Successor of 60: 70
Predecessor of 70: 60
```

> **One-Sentence Takeaway:** The three deletion cases (leaf, one child, two children) are fundamental - master the two-child case where you replace with the inorder successor.

## ðŸ’¡ Pro Tips

> **Pro Tip:** When implementing BST deletion, always draw the tree first. The two-child case is the most error-prone - remember you are moving the successor's value, not the successor node itself.

- **Inorder traversal of a BST is always sorted**: This is the BST invariant. Use it to verify correctness â€” if inorder is not sorted, the BST property is violated.
- **Sorted array â†’ balanced BST in \(O(n)\)**: Pick the middle element as root, recursively build left from the left half, right from the right half. This guarantees height \(\lceil \log n \rceil\).
- **Lowest common ancestor in BST is simpler than in binary trees**: Walk from root; the LCA is the first node whose value lies between the two target values (or equals one of them).
- **Treaps combine BST with heap priorities**: Each node has a key (BST order) and a random priority (heap order). This gives a balanced tree with high probability without explicit rotations.

## One-Sentence Takeaways

- BST property: left subtree < root < right subtree for all nodes.
- Search, insert, and delete average \(O(\log n)\); worst case \(O(n)\) for degenerate trees.
- Inorder traversal of a BST yields sorted order.
- Deletion of a node with two children uses the inorder successor (or predecessor).
- Sorted array can be converted to a balanced BST in \(O(n)\).
- Validation of BST requires checking the allowed value range \((min, max)\) per node.

## Concept Comparison Table

| Feature | Binary Tree | BST | Balanced BST (AVL) |
|---------|-------------|-----|-------------------|
| Ordering | None | Left < root < right | Left < root < right |
| Search | \(O(n)\) | \(O(\log n)\) avg | \(O(\log n)\) guaranteed |
| Insert | \(O(1)\) | \(O(\log n)\) avg | \(O(\log n)\) |
| Delete | \(O(n)\) | \(O(\log n)\) avg | \(O(\log n)\) |
| Height bound | None | \(n\) worst | \(1.44 \log n\) |
| Rotation needed | No | No | Yes |

## Quick Reference: BST Operations

| Operation | Average | Worst Case | Algorithm |
|-----------|---------|------------|-----------|
| Search | \(O(\log n)\) | \(O(n)\) | Compare key, go left/right |
| Insert | \(O(\log n)\) | \(O(n)\) | Search to leaf, attach |
| Delete (leaf) | \(O(\log n)\) | \(O(n)\) | Simply remove |
| Delete (1 child) | \(O(\log n)\) | \(O(n)\) | Bypass node |
| Delete (2 children) | \(O(\log n)\) | \(O(n)\) | Replace with inorder successor |
| Inorder | \(O(n)\) | \(O(n)\) | Left â†’ root â†’ right |

## Cross-Application Matrix

| Application | Why BST |
|-------------|---------|
| Dictionary / symbol table | Fast lookup by key, sorted iteration |
| Database index | Range queries: find all keys between a and b |
| Ordered statistics | k-th smallest element (with subtree size) |
| Priority queue | Not ideal â€” heap is simpler |
| Autocomplete | TST or trie preferred over BST |
| Set implementation | Sorted set operations (union, intersection) |

## Chapter Quiz

1. **What is the BST invariant?**
   - a) All nodes on the left are smaller than root; all on right larger âœ“
   - b) Root is always the largest
   - c) Tree is always balanced
   - d) Every node has two children

2. **Worst-case BST search complexity?**
   - a) \(O(1)\)
   - b) \(O(\log n)\)
   - c) \(O(n)\) âœ“
   - d) \(O(n^2)\)

3. **What traversal of a BST yields sorted order?**
   - a) Preorder
   - b) Inorder âœ“
   - c) Postorder
   - d) Level-order

4. **Deletion of a node with two children uses:**
   - a) Inorder successor âœ“
   - b) Level-order predecessor
   - c) Random node
   - d) Tree rotation

5. **How to build a balanced BST from a sorted array?**
   - a) Insert in order
   - b) Pick middle as root, recursively âœ“
   - c) Reverse order insertion
   - d) Use heap construction

**Answers:** 1-a, 2-c, 3-b, 4-a, 5-b

## Summary

- BSTs maintain order: left < root < right.
- Average-case complexity is \( O(\log n) \) for search, insert, delete.
- Worst-case \( O(n) \) occurs when the tree becomes a chain (sorted insertion).
- Deletion of a node with two children uses the inorder successor.

## Exercises

### Review Questions

1. Prove that an inorder traversal of a BST yields sorted order.
2. What causes a BST to become unbalanced? Give a construction sequence that produces a degenerate tree.
3. Explain the three cases of BST deletion.

### Application Problems

4. Write a function to check if a given binary tree satisfies the BST invariant.
5. Find the lowest common ancestor of two given nodes in a BST.
6. Implement a function that converts a sorted array into a height-balanced BST.

### Challenge Problem

7. Implement a **Treap** (Tree + Heap), where each node has a key and a randomly assigned priority. Show that this yields a balanced BST in expectation.
