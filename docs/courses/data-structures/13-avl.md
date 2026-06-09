# Chapter 13: AVL Trees

## Learning Objectives

- Define balance factor and AVL invariant.
- Implement LL, RR, LR, and RL rotations.
- Implement insertion and deletion with rebalancing.
- Analyze AVL tree height guarantees.

## Theory

### AVL Invariant

An **AVL tree** is a self-balancing BST named after Adelson-Velsky and Landis. The balance factor of any node is:

\[ \text{balance} = \text{height(left)} - \text{height(right)} \]

The AVL invariant requires \( \text{balance} \in \{-1, 0, 1\} \) for every node.

### Height Guarantee

The height of an AVL tree is bounded by \( h < 2 \log_2 (n+1) \). This guarantees \( O(\log n) \) search, insert, and delete.

### Rotations

When an insertion or deletion violates the balance invariant, rotations restore balance.

| Case | Pattern | Rotation |
|------|---------|----------|
| LL | insertion in left child's left subtree | Right rotate at grandparent |
| RR | insertion in right child's right subtree | Left rotate at grandparent |
| LR | insertion in left child's right subtree | Left rotate at child, then right rotate at grandparent |
| RL | insertion in right child's left subtree | Right rotate at child, then left rotate at grandparent |

```
LL Case (Right Rotation):
    z (balance=2)         y
   / \                   / \
  y   T3       =>       x   z
 / \                       / \
x  T2                     T2 T3

RR Case (Left Rotation):
  z (balance=-2)          y
 / \                     / \
T1  y          =>       z   x
   / \                 / \
  T2  x               T1 T2
```

## Examples

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

## Summary

- AVL trees maintain height balance via the balance factor (-1, 0, 1).
- Four rotation patterns (LL, RR, LR, RL) restore balance after modifications.
- Height is strictly \( O(\log n) \), guaranteeing logarithmic operations.
- Deletion rebalancing may require multiple rotations up the path.

## Exercises

### Review Questions

1. What is the balance factor, and what values does the AVL invariant permit?
2. What is the maximum height of an AVL tree with 1000 nodes?
3. Why does deletion in an AVL tree require checking balance at every ancestor?

### Application Problems

4. Draw the AVL tree resulting from inserting 1, 2, 3, 4, 5, 6, 7 in order. Show each rotation.
5. Implement a function that prints the balance factor of every node in an AVL tree.
6. Write a program that counts the number of rotations performed during a sequence of insertions.

### Challenge Problem

7. Implement an **AVL tree with parent pointers** in each node. Show how successor, predecessor, and rebalancing after deletion can use parent pointers for \( O(\log n) \) upward traversal.
