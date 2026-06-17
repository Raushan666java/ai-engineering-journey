# Chapter 9: Binary Search Trees

## Learning Objectives

- Define the Binary Search Tree (BST) invariant.
- Implement search, insertion, and deletion.
- Implement min, max, successor, and predecessor.
- Analyze the complexity of BST operations.

## Theory

![Binary Search Tree Flowchart](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/data-structures/ch09-bst.png)

### BST Invariant

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
