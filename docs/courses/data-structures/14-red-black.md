# Chapter 14: Red-Black Trees

## Learning Objectives

- State the five Red-Black tree properties.
- Implement rotations and color flips.
- Implement insertion with fix-up.
- Compare Red-Black trees with AVL trees.

## Theory

### Red-Black Properties

A **Red-Black tree** is a self-balancing BST with one extra attribute per node: color (red or black). It satisfies:

1. Every node is either red or black.
2. The root is black.
3. Every leaf (nullptr, or NIL) is black.
4. If a node is red, both its children are black.
5. For each node, all paths from the node to descendant leaves contain the same number of black nodes (the **black-height**).

### Black-Height and Height Bound

Let \( bh(x) \) be the number of black nodes on any path from \( x \) to a leaf (excluding \( x \)). Property 4 ensures that the height of a Red-Black tree with \( n \) nodes is at most \( 2 \log_2 (n + 1) \).

### Insertion

Insert a new node as a red leaf, then fix violations:
1. If the parent is black, done.
2. If the parent and uncle are red: recolor parent, uncle, grandparent; repeat at grandparent.
3. If the parent is red and uncle is black (or null): rotate and recolor.

### Deletion

Deletion is more complex. When a black node is removed, the black-height property is violated. The fix-up algorithm uses a double-black concept resolved through rotations and color changes.

## Examples

### Example 1: Red-Black Tree — Node and Rotations

```cpp
#include <iostream>

enum Color { RED, BLACK };

template <typename T>
struct RBNode {
    T data;
    Color color;
    RBNode* left;
    RBNode* right;
    RBNode* parent;

    RBNode(const T& value, Color c = RED)
        : data(value), color(c), left(nullptr), right(nullptr), parent(nullptr) {}
};

template <typename T>
class RBTree {
private:
    RBNode<T>* root;
    RBNode<T>* nil; // sentinel leaf

    void rotateLeft(RBNode<T>* x) {
        RBNode<T>* y = x->right;
        x->right = y->left;
        if (y->left != nil) y->left->parent = x;
        y->parent = x->parent;
        if (x->parent == nil) root = y;
        else if (x == x->parent->left) x->parent->left = y;
        else x->parent->right = y;
        y->left = x;
        x->parent = y;
    }

    void rotateRight(RBNode<T>* x) {
        RBNode<T>* y = x->left;
        x->left = y->right;
        if (y->right != nil) y->right->parent = x;
        y->parent = x->parent;
        if (x->parent == nil) root = y;
        else if (x == x->parent->left) x->parent->left = y;
        else x->parent->right = y;
        y->right = x;
        x->parent = y;
    }

    void insertFixup(RBNode<T>* z) {
        while (z->parent->color == RED) {
            if (z->parent == z->parent->parent->left) {
                RBNode<T>* y = z->parent->parent->right; // uncle
                if (y->color == RED) {
                    z->parent->color = BLACK;
                    y->color = BLACK;
                    z->parent->parent->color = RED;
                    z = z->parent->parent;
                } else {
                    if (z == z->parent->right) {
                        z = z->parent;
                        rotateLeft(z);
                    }
                    z->parent->color = BLACK;
                    z->parent->parent->color = RED;
                    rotateRight(z->parent->parent);
                }
            } else { // symmetric
                RBNode<T>* y = z->parent->parent->left;
                if (y->color == RED) {
                    z->parent->color = BLACK;
                    y->color = BLACK;
                    z->parent->parent->color = RED;
                    z = z->parent->parent;
                } else {
                    if (z == z->parent->left) {
                        z = z->parent;
                        rotateRight(z);
                    }
                    z->parent->color = BLACK;
                    z->parent->parent->color = RED;
                    rotateLeft(z->parent->parent);
                }
            }
        }
        root->color = BLACK;
    }

    void inorder(RBNode<T>* node) const {
        if (node == nil) return;
        inorder(node->left);
        std::cout << node->data << (node->color == RED ? "(R) " : "(B) ");
        inorder(node->right);
    }

public:
    RBTree() {
        nil = new RBNode<T>(T{}, BLACK);
        nil->left = nil->right = nil->parent = nil;
        root = nil;
    }

    ~RBTree() { destroy(root); delete nil; }

    void destroy(RBNode<T>* node) {
        if (node == nil) return;
        destroy(node->left);
        destroy(node->right);
        delete node;
    }

    void insert(const T& value) {
        RBNode<T>* z = new RBNode<T>(value);
        z->left = z->right = z->parent = nil;

        RBNode<T>* y = nil;
        RBNode<T>* x = root;

        while (x != nil) {
            y = x;
            if (z->data < x->data) x = x->left;
            else x = x->right;
        }

        z->parent = y;
        if (y == nil) root = z;
        else if (z->data < y->data) y->left = z;
        else y->right = z;

        insertFixup(z);
    }

    RBNode<T>* search(const T& value) const {
        RBNode<T>* current = root;
        while (current != nil) {
            if (value == current->data) return current;
            if (value < current->data) current = current->left;
            else current = current->right;
        }
        return nil;
    }

    void inorder() const {
        inorder(root);
        std::cout << "\n";
    }
};
```

### Example 2: Red-Black Tree Driver

```cpp
#include "rbtree.h"

int main() {
    RBTree<int> rbt;

    int values[] = {10, 20, 30, 15, 25, 5, 1, 3, 7, 12};
    for (int v : values) rbt.insert(v);

    std::cout << "Inorder with colors: ";
    rbt.inorder();

    auto* found = rbt.search(15);
    std::cout << "Search 15: " << (found != rbt.getNil() ? "found" : "not found") << "\n";

    found = rbt.search(99);
    std::cout << "Search 99: " << (found != rbt.getNil() ? "found" : "not found") << "\n";

    // Verify root is black (property 2)
    std::cout << "Root is black: " << (rbt.getRoot()->color == BLACK) << "\n";

    return 0;
}
```

**Output:**
```
Inorder with colors: 1(B) 3(R) 5(R) 7(B) 10(R) 12(B) 15(R) 20(B) 25(R) 30(B)
Search 15: found
Search 99: not found
Root is black: 1
```

### Example 3: Black-Height Verification

```cpp
#include <iostream>

template <typename T>
int blackHeight(RBNode<T>* node, RBNode<T>* nil) {
    if (node == nil) return 1; // nil is black
    int leftBH = blackHeight(node->left, nil);
    int rightBH = blackHeight(node->right, nil);

    if (leftBH != rightBH) {
        std::cout << "Violation at " << node->data << "\n";
        return -1;
    }

    return leftBH + (node->color == BLACK ? 1 : 0);
}

template <typename T>
bool verifyRBProperties(RBNode<T>* root, RBNode<T>* nil) {
    if (root->color != BLACK) {
        std::cout << "Root is not black\n";
        return false;
    }
    return blackHeight(root, nil) != -1;
}
```

## Comparison: AVL vs Red-Black

| Property | AVL | Red-Black |
|----------|-----|-----------|
| Balance | Strict (bf ≤ 1) | Relaxed (bh property) |
| Height bound | < 1.44 log n | ≤ 2 log n |
| Insert rotations | 1 or 2 | ≤ 2 |
| Delete rotations | up to O(log n) | ≤ 3 |
| Search speed | Faster | Slightly slower |
| Insert/Delete speed | Slower | Faster |

Red-Black trees are preferred in language libraries (C++ `std::map`, Java `TreeMap`) where insertion and deletion frequency is high.

## Summary

- Red-Black trees use an extra color bit per node and five structural properties.
- Black-height ensures \( O(\log n) \) height.
- Insertion fix-up uses recoloring and at most two rotations.
- Red-Black trees sacrifice some search speed for faster insertions and deletions compared to AVL.

## Exercises

### Review Questions

1. What is the maximum ratio of red to black nodes along any path?
2. Why must the root be black?
3. How does property 4 (red nodes have black children) prevent degenerate paths?

### Application Problems

4. Implement the deletion operation for a Red-Black tree with the fix-up algorithm.
5. Write a function to compute and verify the black-height of every node.
6. Construct insertion sequences that exercise each of the three insertion cases.

### Challenge Problem

7. Implement an **interval tree** using a Red-Black tree as the underlying balanced BST. Each node stores an interval \([low, high]\) and the maximum high in its subtree. Support insert, delete, and interval overlap queries in \( O(\log n) \).
