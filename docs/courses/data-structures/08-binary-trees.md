# Chapter 8: Binary Trees

## Learning Objectives

- Define binary trees and their terminology.
- Implement tree traversals (inorder, preorder, postorder, level-order).
- Derive tree properties from structural relations.
- Describe threaded binary trees.

## Theory

![Binary Trees, Traversals and BST](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/data-structures/ch05-trees-bst.png)

### Definitions

A **binary tree** is a hierarchical structure where each node has at most two children: left and right.

```
        A
       / \
      B   C
     / \   \
    D   E   F
```

**Terminology:**
- **Root**: the topmost node (A).
- **Leaf**: a node with no children (D, E, F).
- **Parent**: a node with at least one child (A is parent of B, C).
- **Child**: a node directly connected downward (B is a child of A).
- **Sibling**: nodes sharing the same parent (D and E are siblings).
- **Height**: the number of edges on the longest path from the node to a leaf.
- **Depth**: the number of edges from the root to the node.
- **Subtree**: a node and all its descendants.

### Properties

- Maximum number of nodes at level \( i \): \( 2^i \).
- Maximum number of nodes in a tree of height \( h \): \( 2^{h+1} - 1 \).
- For any binary tree, \( \text{leaves} = \text{internal nodes} + 1 \).
- A full binary tree has every node with 0 or 2 children.
- A complete binary tree has all levels filled except possibly the last, which is filled left to right.

### Traversals

| Traversal | Order | Visit Sequence (example tree) |
|-----------|-------|-------------------------------|
| Inorder | left, root, right | D, B, E, A, C, F |
| Preorder | root, left, right | A, B, D, E, C, F |
| Postorder | left, right, root | D, E, B, F, C, A |
| Level-order | top-to-bottom, left-to-right | A, B, C, D, E, F |

### Threaded Binary Trees

A threaded binary tree replaces null pointers with pointers to the inorder predecessor (left) or successor (right), enabling \( O(1) \) inorder traversal without a stack or recursion.

## Examples

### Example 1: Binary Tree Node and Traversals

```cpp
#include <iostream>
#include <queue>

template <typename T>
struct TreeNode {
    T data;
    TreeNode* left;
    TreeNode* right;

    TreeNode(const T& value) : data(value), left(nullptr), right(nullptr) {}
};

template <typename T>
class BinaryTree {
private:
    TreeNode<T>* root;

    void inorder(TreeNode<T>* node) const {
        if (!node) return;
        inorder(node->left);
        std::cout << node->data << " ";
        inorder(node->right);
    }

    void preorder(TreeNode<T>* node) const {
        if (!node) return;
        std::cout << node->data << " ";
        preorder(node->left);
        preorder(node->right);
    }

    void postorder(TreeNode<T>* node) const {
        if (!node) return;
        postorder(node->left);
        postorder(node->right);
        std::cout << node->data << " ";
    }

    void deleteTree(TreeNode<T>* node) {
        if (!node) return;
        deleteTree(node->left);
        deleteTree(node->right);
        delete node;
    }

public:
    BinaryTree() : root(nullptr) {}

    ~BinaryTree() { deleteTree(root); }

    void setRoot(TreeNode<T>* node) { root = node; }

    TreeNode<T>* getRoot() const { return root; }

    void inorder() const {
        std::cout << "Inorder: ";
        inorder(root);
        std::cout << "\n";
    }

    void preorder() const {
        std::cout << "Preorder: ";
        preorder(root);
        std::cout << "\n";
    }

    void postorder() const {
        std::cout << "Postorder: ";
        postorder(root);
        std::cout << "\n";
    }

    void levelOrder() const {
        std::cout << "Level-order: ";
        if (!root) return;
        std::queue<TreeNode<T>*> q;
        q.push(root);
        while (!q.empty()) {
            TreeNode<T>* node = q.front(); q.pop();
            std::cout << node->data << " ";
            if (node->left) q.push(node->left);
            if (node->right) q.push(node->right);
        }
        std::cout << "\n";
    }

    int height(TreeNode<T>* node) const {
        if (!node) return -1;
        return 1 + std::max(height(node->left), height(node->right));
    }

    int countNodes(TreeNode<T>* node) const {
        if (!node) return 0;
        return 1 + countNodes(node->left) + countNodes(node->right);
    }
};

int main() {
    BinaryTree<char> tree;
    auto* root = new TreeNode<char>('A');
    root->left = new TreeNode<char>('B');
    root->right = new TreeNode<char>('C');
    root->left->left = new TreeNode<char>('D');
    root->left->right = new TreeNode<char>('E');
    root->right->right = new TreeNode<char>('F');
    tree.setRoot(root);

    tree.inorder();
    tree.preorder();
    tree.postorder();
    tree.levelOrder();
    std::cout << "Height: " << tree.height(root) << "\n";
    std::cout << "Total nodes: " << tree.countNodes(root) << "\n";

    return 0;
}
```

**Output:**
```
Inorder: D B E A C F
Preorder: A B D E C F
Postorder: D E B F C A
Level-order: A B C D E F
Height: 2
Total nodes: 6
```

### Example 2: Iterative Inorder Traversal

```cpp
#include <iostream>
#include <stack>

// Iterative inorder using explicit stack
void inorderIterative(TreeNode<int>* root) {
    std::stack<TreeNode<int>*> st;
    TreeNode<int>* current = root;

    std::cout << "Iterative inorder: ";
    while (current || !st.empty()) {
        while (current) {
            st.push(current);
            current = current->left;
        }
        current = st.top(); st.pop();
        std::cout << current->data << " ";
        current = current->right;
    }
    std::cout << "\n";
}

int main() {
    // Build tree:   1
    //              / \
    //             2   3
    //            / \   \
    //           4   5   6
    auto* root = new TreeNode<int>(1);
    root->left = new TreeNode<int>(2);
    root->right = new TreeNode<int>(3);
    root->left->left = new TreeNode<int>(4);
    root->left->right = new TreeNode<int>(5);
    root->right->right = new TreeNode<int>(6);

    inorderIterative(root);
    return 0;
}
```

**Output:**
```
Iterative inorder: 4 2 5 1 3 6
```

### Example 3: Check if a Binary Tree is Full

```cpp
#include <iostream>

template <typename T>
bool isFullTree(TreeNode<T>* node) {
    if (!node) return true;
    // Leaf
    if (!node->left && !node->right) return true;
    // Must have both children
    if (node->left && node->right) {
        return isFullTree(node->left) && isFullTree(node->right);
    }
    return false; // one child only
}

int main() {
    auto* full = new TreeNode<int>(1);
    full->left = new TreeNode<int>(2);
    full->right = new TreeNode<int>(3);
    std::cout << "Is full tree: " << isFullTree(full) << "\n";

    auto* notFull = new TreeNode<int>(1);
    notFull->left = new TreeNode<int>(2);
    std::cout << "Is full tree: " << isFullTree(notFull) << "\n";

    return 0;
}
```

**Output:**
```
Is full tree: 1
Is full tree: 0
```

## ðŸ’¡ Pro Tips

- **Level-order (BFS) is iterative, not recursive**: Use a queue. While the queue is not empty, pop the front, process it, push its children. This is the natural way to visit nodes level by level.
- **Three traversals are all \(O(n)\)**: Each node is visited exactly once. The difference is the order, not the complexity. Choose the traversal that matches your processing need.
- **Reconstruct from traversals**: Given inorder + preorder (or inorder + postorder), you can uniquely reconstruct a binary tree. Inorder alone or preorder alone is insufficient.
- **Threaded trees eliminate recursion**: By reusing null right pointers as inorder successor links, a threaded binary tree can be traversed without recursion or an explicit stack â€” useful in memory-constrained environments.

## One-Sentence Takeaways

- Binary trees are hierarchical structures with at most two children per node.
- Inorder visits leftâ†’rootâ†’right; preorder visits rootâ†’leftâ†’right; postorder visits leftâ†’rightâ†’root.
- Level-order traversal uses a queue to process nodes by depth.
- Tree height is the longest path from root to leaf, computed recursively.
- Threaded trees reuse null pointers for efficient traversal without recursion.
- Serialization converts a tree to a string; deserialization reconstructs it.

## Concept Comparison Table

| Traversal | Order | Stack/Queue | Use Case |
|-----------|-------|-------------|----------|
| Preorder | root â†’ left â†’ right | Implicit (recursion) | Copy tree, prefix expression |
| Inorder | left â†’ root â†’ right | Implicit (recursion) | BST sorted output |
| Postorder | left â†’ right â†’ root | Implicit (recursion) | Delete tree, postfix expression |
| Level-order | By depth | Queue | BFS, shortest path in unweighted tree |

## Quick Reference: Binary Tree Properties

| Property | Formula | Example (n nodes) |
|----------|---------|-------------------|
| Max nodes at level \(i\) | \(2^i\) | Level 3: 8 nodes |
| Max nodes total (height h) | \(2^{h+1} - 1\) | Height 4: 31 nodes |
| Min height (full) | \(\lceil \log_2(n+1) \rceil - 1\) | 15 nodes: height 3 |
| Max height (degenerate) | \(n - 1\) | 15 nodes: height 14 |
| Leaves in full binary tree | \((n + 1) / 2\) | 15 nodes: 8 leaves |

## Cross-Application Matrix

| Task | Traversal | Why |
|------|-----------|-----|
| Print BST in sorted order | Inorder | Natural order property |
| Compute tree height | Postorder | Need subtree heights first |
| Serialize for reconstuction | Preorder + inorder | Both needed for unique reconstruction |
| Level-order print | BFS / level-order | Visually shows tree structure |
| Evaluate expression tree | Postorder | Operands before operator |
| Find deepest node | Level-order | Last node in BFS |

## Chapter Quiz

1. **What is the maximum number of nodes at level \(i\) of a binary tree?**
   - a) \(i\)
   - b) \(2^i\) âœ“
   - c) \(n/2\)
   - d) \(2^{i+1} - 1\)

2. **Which traversal visits root first?**
   - a) Inorder
   - b) Preorder âœ“
   - c) Postorder
   - d) Level-order

3. **Level-order traversal uses what data structure?**
   - a) Stack
   - b) Queue âœ“
   - c) Priority queue
   - d) Hash table

4. **Which two traversals uniquely reconstruct a binary tree?**
   - a) Preorder + postorder
   - b) Inorder + preorder âœ“
   - c) Inorder + level-order
   - d) Any two

5. **What does a threaded tree reuse?**
   - a) Node values
   - b) Null pointers âœ“
   - c) Leaf nodes
   - d) Memory allocator

**Answers:** 1-b, 2-b, 3-b, 4-b, 5-b

## Summary

- Binary trees are hierarchical structures with ordered children.
- Inorder traversal visits left, root, right; preorder visits root, left, right; postorder visits left, right, root.
- Level-order traversal uses a queue to visit nodes by level.
- Threaded binary trees reduce space overhead by reusing null pointers.
- Tree height and node count can be computed recursively.

## Exercises

### Review Questions

1. What is the relationship between leaves and internal nodes in a binary tree?
2. Why does inorder traversal of a BST produce sorted output?
3. How does a threaded binary tree improve traversal efficiency?

### Application Problems

4. Write a function to find the diameter (longest path between any two nodes) of a binary tree.
5. Implement a function to check if two binary trees are structurally identical.
6. Given the preorder and inorder traversals of a binary tree, reconstruct the tree.

### Challenge Problem

7. Implement a binary tree **serialization** function that converts the tree to a string, and a **deserialization** function that reconstructs it. Use level-order serialization with sentinel markers for null nodes.
