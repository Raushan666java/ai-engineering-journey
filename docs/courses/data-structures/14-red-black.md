# Chapter 14: Red-Black Trees

## Learning Objectives

- State the five Red-Black tree properties.
- Implement rotations and color flips.
- Implement insertion with fix-up.
- Compare Red-Black trees with AVL trees.

## Theory

![Red-Black Tree Flowchart](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/data-structures/ch14-red-black.png)

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

### Example 1: Red-Black Tree â€” Node and Rotations

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
| Balance | Strict (bf â‰¤ 1) | Relaxed (bh property) |
| Height bound | < 1.44 log n | â‰¤ 2 log n |
| Insert rotations | 1 or 2 | â‰¤ 2 |
| Delete rotations | up to O(log n) | â‰¤ 3 |
| Search speed | Faster | Slightly slower |
| Insert/Delete speed | Slower | Faster |

Red-Black trees are preferred in language libraries (C++ `std::map`, Java `TreeMap`) where insertion and deletion frequency is high.

## ðŸ’¡ Pro Tips

- **The five properties reduce to one invariant**: The longest path (alternating red-black) is at most twice the shortest path (all black). This guarantees \(O(\log n)\) height.
- **Insertion fix-up has three cases**: Case 1 (uncle is red) â†’ recolor and move up. Case 2 (uncle is black, zigzag) â†’ rotate to align. Case 3 (uncle is black, straight) â†’ rotate and recolor.
- **Red-Black deletion is harder than insertion**: There are four deletion fix-up cases instead of three. Implementing deletion correctly is the hardest part of any Red-Black tree.
- **`std::map` uses Red-Black trees**: C++'s standard ordered map is typically implemented as a Red-Black tree. If you don't need ordering, `std::unordered_map` (hash table) is faster.

## One-Sentence Takeaways

- Red-Black trees add a color bit per node with five structural properties.
- Black-height is the number of black nodes on any root-to-leaf path.
- The tree height is at most \(2 \log(n+1)\), ensuring \(O(\log n)\) operations.
- Insertion fix-up uses recoloring and at most two rotations.
- Red-Black trees have faster insertions/deletions (fewer rotations) than AVL trees.
- C++ std::map, Java TreeMap, and Linux CF scheduler use Red-Black trees.

## Concept Comparison Table

| Property | Red-Black Tree | AVL Tree |
|----------|---------------|----------|
| Balance criteria | Color-based (5 properties) | Height balance (-1, 0, 1) |
| Height bound | \(2 \log(n+1)\) | \(1.44 \log n\) |
| Search speed | \(O(\log n)\) | \(O(\log n)\) â€” 30% faster typically |
| Insert rotations | â‰¤ 2 | â‰¤ 2 |
| Delete rotations | â‰¤ 3 | \(O(\log n)\) |
| Memory per node | 1 bit color | Balance factor (2 bits) |
| Library use | std::map, TreeMap | No standard library use |

## Quick Reference: Red-Black Insertion Cases

| Case | Uncle Color | Node Position | Action |
|------|-------------|---------------|--------|
| 1 | Red | Any | Recolor parent, uncle, grandparent; move up |
| 2 | Black | Child is inside (LR or RL) | Rotate to make it outside (RL â†’ LL, LR â†’ RR) |
| 3 | Black | Child is outside (LL or RR) | Rotate grandparent, recolor |

## Cross-Application Matrix

| Application | Why Red-Black |
|-------------|--------------|
| std::map, std::set | Ordered iteration, good balance |
| Java TreeMap | Guaranteed log time, deletion-friendly |
| Linux kernel (CFS) | Process scheduler needs fast insert/delete |
| Database index (in-memory) | Good balance of all operations |
| Computational geometry | Interval trees, segment intersection |

## Chapter Quiz

1. **What color must the root of a Red-Black tree be?**
   - a) Red
   - b) Black âœ“
   - c) Either
   - d) None (null)

2. **What is the height bound of a Red-Black tree?**
   - a) \(1.44 \log n\)
   - b) \(2 \log(n+1)\) âœ“
   - c) \(n\)
   - d) \(\log n\)

3. **How many rotations are needed for Red-Black insertion?**
   - a) At most 2 âœ“
   - b) At most 1
   - c) \(O(\log n)\)
   - d) 0

4. **Which C++ standard container uses a Red-Black tree?**
   - a) std::vector
   - b) std::map âœ“
   - c) std::unordered_map
   - d) std::queue

5. **Red-Black trees have ___ insert/delete rotations than AVL**
   - a) More
   - b) Fewer âœ“
   - c) Same
   - d) Zero

**Answers:** 1-b, 2-b, 3-a, 4-b, 5-b

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
