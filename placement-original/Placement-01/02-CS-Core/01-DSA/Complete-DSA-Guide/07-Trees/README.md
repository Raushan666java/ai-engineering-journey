# Trees

## Table of Contents
- [Introduction](#introduction)
- [1. Binary Trees](#1-binary-trees)
- [2. Binary Tree Traversals](#2-binary-tree-traversals)
- [3. Binary Tree Types](#3-binary-tree-types)
- [4. Tree Construction](#4-tree-construction)
- [5. Tree Operations](#5-tree-operations)
- [6. Common Tree Problems](#6-common-tree-problems)
- [7. Advanced Tree Concepts](#7-advanced-tree-concepts)
- [8. Practice Problems](#8-practice-problems)
- [9. Resources](#9-resources)

## Introduction

A tree is a hierarchical data structure consisting of nodes connected by edges. Each tree has a root node, and every node (except the root) has exactly one parent node. Trees are widely used to represent hierarchical relationships, file systems, organization structures, and more.

**Key Properties of Trees:**
- No cycles (acyclic)
- Connected (all nodes can be reached from the root)
- N nodes connected by exactly N-1 edges

**Tree Terminology:**
- **Root**: Top node of the tree, has no parent
- **Node**: Element of a tree containing data and references to other nodes
- **Edge**: Connection between two nodes
- **Parent**: Node with children
- **Child**: Node that has a parent
- **Leaf/Terminal**: Node with no children
- **Sibling**: Nodes sharing the same parent
- **Ancestor**: Node reachable by repeated proceeding from child to parent
- **Descendant**: Node reachable by repeated proceeding from parent to child
- **Level**: Distance from the root (root is at level 0)
- **Height**: Maximum level of any node (height of a leaf is 0)
- **Depth**: Distance of a node from the root
- **Subtree**: Tree formed by a node and its descendants

## 1. Binary Trees

A binary tree is a tree where each node has at most two children, referred to as the left child and the right child.

### 1.1 Binary Tree Node Structure
```cpp
// C++
struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    
    // Constructor
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};
```

```python
# Python
class TreeNode:
    def __init__(self, val=0):
        self.val = val
        self.left = None
        self.right = None
```

### 1.2 Basic Binary Tree Implementation
```cpp
class BinaryTree {
private:
    TreeNode* root;
    
    // Helper function for recursive insertion
    TreeNode* insertRecursive(TreeNode* root, int val) {
        if (!root) {
            return new TreeNode(val);
        }
        
        if (val < root->val) {
            root->left = insertRecursive(root->left, val);
        } else if (val > root->val) {
            root->right = insertRecursive(root->right, val);
        }
        
        return root;
    }
    
    // Helper function for inorder traversal
    void inorderTraversal(TreeNode* node, vector<int>& result) {
        if (!node) return;
        
        inorderTraversal(node->left, result);
        result.push_back(node->val);
        inorderTraversal(node->right, result);
    }
    
    // Helper function to delete the tree
    void destroyTree(TreeNode* node) {
        if (!node) return;
        
        destroyTree(node->left);
        destroyTree(node->right);
        delete node;
    }
    
public:
    BinaryTree() : root(nullptr) {}
    
    ~BinaryTree() {
        destroyTree(root);
    }
    
    void insert(int val) {
        root = insertRecursive(root, val);
    }
    
    vector<int> inorder() {
        vector<int> result;
        inorderTraversal(root, result);
        return result;
    }
    
    TreeNode* getRoot() {
        return root;
    }
};
```

## 2. Binary Tree Traversals

Tree traversals are methods to visit each node in the tree exactly once. The order of visiting nodes determines the type of traversal.

### 2.1 Depth-First Traversals

#### 2.1.1 Inorder Traversal (Left-Root-Right)
```cpp
// Recursive
void inorder(TreeNode* root, vector<int>& result) {
    if (!root) return;
    inorder(root->left, result);
    result.push_back(root->val);
    inorder(root->right, result);
}

// Iterative
vector<int> inorderIterative(TreeNode* root) {
    vector<int> result;
    stack<TreeNode*> s;
    TreeNode* current = root;
    
    while (current || !s.empty()) {
        // Reach the leftmost node
        while (current) {
            s.push(current);
            current = current->left;
        }
        
        // Current is now null, pop from stack
        current = s.top();
        s.pop();
        
        // Add the node value
        result.push_back(current->val);
        
        // Process right subtree
        current = current->right;
    }
    
    return result;
}
```

#### 2.1.2 Preorder Traversal (Root-Left-Right)
```cpp
// Recursive
void preorder(TreeNode* root, vector<int>& result) {
    if (!root) return;
    result.push_back(root->val);
    preorder(root->left, result);
    preorder(root->right, result);
}

// Iterative
vector<int> preorderIterative(TreeNode* root) {
    vector<int> result;
    if (!root) return result;
    
    stack<TreeNode*> s;
    s.push(root);
    
    while (!s.empty()) {
        TreeNode* node = s.top();
        s.pop();
        
        result.push_back(node->val);
        
        // Push right child first (so left is processed first)
        if (node->right) s.push(node->right);
        if (node->left) s.push(node->left);
    }
    
    return result;
}
```

#### 2.1.3 Postorder Traversal (Left-Right-Root)
```cpp
// Recursive
void postorder(TreeNode* root, vector<int>& result) {
    if (!root) return;
    postorder(root->left, result);
    postorder(root->right, result);
    result.push_back(root->val);
}

// Iterative (using two stacks)
vector<int> postorderIterative(TreeNode* root) {
    vector<int> result;
    if (!root) return result;
    
    stack<TreeNode*> s1, s2;
    s1.push(root);
    
    while (!s1.empty()) {
        TreeNode* node = s1.top();
        s1.pop();
        s2.push(node);
        
        // Push left first (so right is processed first in final result)
        if (node->left) s1.push(node->left);
        if (node->right) s1.push(node->right);
    }
    
    // s2 now has nodes in postorder
    while (!s2.empty()) {
        result.push_back(s2.top()->val);
        s2.pop();
    }
    
    return result;
}
```

### 2.2 Breadth-First Traversal (Level Order)
```cpp
// Level order traversal
vector<vector<int>> levelOrder(TreeNode* root) {
    vector<vector<int>> result;
    if (!root) return result;
    
    queue<TreeNode*> q;
    q.push(root);
    
    while (!q.empty()) {
        int levelSize = q.size();
        vector<int> currentLevel;
        
        for (int i = 0; i < levelSize; i++) {
            TreeNode* node = q.front();
            q.pop();
            
            currentLevel.push_back(node->val);
            
            if (node->left) q.push(node->left);
            if (node->right) q.push(node->right);
        }
        
        result.push_back(currentLevel);
    }
    
    return result;
}
```

### 2.3 Morris Traversal (Inorder without Stack or Recursion)
```cpp
vector<int> morrisInorder(TreeNode* root) {
    vector<int> result;
    TreeNode* current = root;
    
    while (current) {
        // If left child doesn't exist
        if (!current->left) {
            result.push_back(current->val);
            current = current->right;
        } else {
            // Find the inorder predecessor
            TreeNode* predecessor = current->left;
            while (predecessor->right && predecessor->right != current) {
                predecessor = predecessor->right;
            }
            
            // Make current as right child of its inorder predecessor
            if (!predecessor->right) {
                predecessor->right = current;
                current = current->left;
            } else {
                // Revert the changes and visit current node
                predecessor->right = nullptr;
                result.push_back(current->val);
                current = current->right;
            }
        }
    }
    
    return result;
}
```

## 3. Binary Tree Types

### 3.1 Full Binary Tree
- Each node has either 0 or 2 children (no nodes with only one child)
- Number of nodes: 2h+1 - 1 (where h is height)

### 3.2 Complete Binary Tree
- All levels except possibly the last are completely filled
- Last level has all nodes as left as possible
- Used in Heap data structure
- Number of nodes: Between 2^h and 2^(h+1) - 1

### 3.3 Perfect Binary Tree
- All internal nodes have exactly 2 children and all leaf nodes are at the same level
- Number of nodes: 2^(h+1) - 1

### 3.4 Balanced Binary Tree
- Height difference between left and right subtrees of any node is not more than 1
- Example: AVL Tree, Red-Black Tree

### 3.5 Degenerate (Skewed) Tree
- Each parent node has only one child (essentially a linked list)
- Can be left-skewed or right-skewed

## 4. Tree Construction

### 4.1 Construct Binary Tree from Traversals

#### 4.1.1 From Inorder and Preorder
```cpp
TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {
    unordered_map<int, int> inMap;
    for (int i = 0; i < inorder.size(); i++) {
        inMap[inorder[i]] = i;
    }
    
    return buildTreeHelper(preorder, 0, preorder.size() - 1, inorder, 0, inorder.size() - 1, inMap);
}

TreeNode* buildTreeHelper(vector<int>& preorder, int preStart, int preEnd, 
                           vector<int>& inorder, int inStart, int inEnd, 
                           unordered_map<int, int>& inMap) {
    if (preStart > preEnd || inStart > inEnd) return nullptr;
    
    TreeNode* root = new TreeNode(preorder[preStart]);
    
    int inRoot = inMap[root->val];
    int numsLeft = inRoot - inStart;
    
    root->left = buildTreeHelper(preorder, preStart + 1, preStart + numsLeft, 
                                 inorder, inStart, inRoot - 1, inMap);
    
    root->right = buildTreeHelper(preorder, preStart + numsLeft + 1, preEnd, 
                                  inorder, inRoot + 1, inEnd, inMap);
    
    return root;
}
```

#### 4.1.2 From Inorder and Postorder
```cpp
TreeNode* buildTree(vector<int>& inorder, vector<int>& postorder) {
    unordered_map<int, int> inMap;
    for (int i = 0; i < inorder.size(); i++) {
        inMap[inorder[i]] = i;
    }
    
    return buildTreeHelper(inorder, 0, inorder.size() - 1, postorder, 0, postorder.size() - 1, inMap);
}

TreeNode* buildTreeHelper(vector<int>& inorder, int inStart, int inEnd, 
                           vector<int>& postorder, int postStart, int postEnd, 
                           unordered_map<int, int>& inMap) {
    if (inStart > inEnd || postStart > postEnd) return nullptr;
    
    TreeNode* root = new TreeNode(postorder[postEnd]);
    
    int inRoot = inMap[root->val];
    int numsLeft = inRoot - inStart;
    
    root->left = buildTreeHelper(inorder, inStart, inRoot - 1, 
                                 postorder, postStart, postStart + numsLeft - 1, inMap);
    
    root->right = buildTreeHelper(inorder, inRoot + 1, inEnd, 
                                  postorder, postStart + numsLeft, postEnd - 1, inMap);
    
    return root;
}
```

### 4.2 Serialize and Deserialize Binary Tree
```cpp
// Serialize binary tree to a string
string serialize(TreeNode* root) {
    if (!root) return "null,";
    
    string result = to_string(root->val) + ",";
    result += serialize(root->left);
    result += serialize(root->right);
    
    return result;
}

// Deserialize string to binary tree
TreeNode* deserialize(string data) {
    stringstream ss(data);
    return deserializeHelper(ss);
}

TreeNode* deserializeHelper(stringstream& ss) {
    string val;
    getline(ss, val, ',');
    
    if (val == "null") return nullptr;
    
    TreeNode* root = new TreeNode(stoi(val));
    root->left = deserializeHelper(ss);
    root->right = deserializeHelper(ss);
    
    return root;
}
```

## 5. Tree Operations

### 5.1 Tree Height
```cpp
int height(TreeNode* root) {
    if (!root) return 0;
    return 1 + max(height(root->left), height(root->right));
}
```

### 5.2 Tree Size (Number of Nodes)
```cpp
int size(TreeNode* root) {
    if (!root) return 0;
    return 1 + size(root->left) + size(root->right);
}
```

### 5.3 Check if Tree is Balanced
```cpp
bool isBalanced(TreeNode* root) {
    return checkHeight(root) != -1;
}

int checkHeight(TreeNode* root) {
    if (!root) return 0;
    
    int leftHeight = checkHeight(root->left);
    if (leftHeight == -1) return -1;
    
    int rightHeight = checkHeight(root->right);
    if (rightHeight == -1) return -1;
    
    if (abs(leftHeight - rightHeight) > 1) return -1;
    
    return 1 + max(leftHeight, rightHeight);
}
```

### 5.4 Lowest Common Ancestor (LCA)
```cpp
TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
    if (!root) return nullptr;
    if (root == p || root == q) return root;
    
    TreeNode* left = lowestCommonAncestor(root->left, p, q);
    TreeNode* right = lowestCommonAncestor(root->right, p, q);
    
    if (left && right) return root;
    return left ? left : right;
}
```

### 5.5 Diameter of Binary Tree
```cpp
int diameterOfBinaryTree(TreeNode* root) {
    int diameter = 0;
    height(root, diameter);
    return diameter;
}

int height(TreeNode* root, int& diameter) {
    if (!root) return 0;
    
    int leftHeight = height(root->left, diameter);
    int rightHeight = height(root->right, diameter);
    
    // Update diameter if needed
    diameter = max(diameter, leftHeight + rightHeight);
    
    return 1 + max(leftHeight, rightHeight);
}
```

## 6. Common Tree Problems

### 6.1 Path Sum
```cpp
bool hasPathSum(TreeNode* root, int targetSum) {
    if (!root) return false;
    
    // If leaf node and sum matches
    if (!root->left && !root->right) {
        return root->val == targetSum;
    }
    
    // Recursively check left and right subtrees with reduced target
    return hasPathSum(root->left, targetSum - root->val) || 
           hasPathSum(root->right, targetSum - root->val);
}
```

### 6.2 Maximum Path Sum
```cpp
int maxPathSum(TreeNode* root) {
    int maxSum = INT_MIN;
    maxPathSumHelper(root, maxSum);
    return maxSum;
}

int maxPathSumHelper(TreeNode* root, int& maxSum) {
    if (!root) return 0;
    
    // Calculate left and right path sums
    int leftSum = max(0, maxPathSumHelper(root->left, maxSum));
    int rightSum = max(0, maxPathSumHelper(root->right, maxSum));
    
    // Update maxSum if path through this node is greater
    maxSum = max(maxSum, leftSum + rightSum + root->val);
    
    // Return max path sum starting from this node
    return max(leftSum, rightSum) + root->val;
}
```

### 6.3 Level Order Zigzag Traversal
```cpp
vector<vector<int>> zigzagLevelOrder(TreeNode* root) {
    vector<vector<int>> result;
    if (!root) return result;
    
    queue<TreeNode*> q;
    q.push(root);
    bool leftToRight = true;
    
    while (!q.empty()) {
        int levelSize = q.size();
        vector<int> currentLevel(levelSize);
        
        for (int i = 0; i < levelSize; i++) {
            TreeNode* node = q.front();
            q.pop();
            
            // Determine position based on zigzag direction
            int index = leftToRight ? i : levelSize - 1 - i;
            currentLevel[index] = node->val;
            
            if (node->left) q.push(node->left);
            if (node->right) q.push(node->right);
        }
        
        result.push_back(currentLevel);
        leftToRight = !leftToRight;
    }
    
    return result;
}
```

### 6.4 Symmetric Tree
```cpp
bool isSymmetric(TreeNode* root) {
    if (!root) return true;
    return isMirror(root->left, root->right);
}

bool isMirror(TreeNode* left, TreeNode* right) {
    if (!left && !right) return true;
    if (!left || !right) return false;
    
    return (left->val == right->val) &&
           isMirror(left->left, right->right) &&
           isMirror(left->right, right->left);
}
```

### 6.5 Flatten Binary Tree to Linked List
```cpp
void flatten(TreeNode* root) {
    if (!root) return;
    
    // Flatten left and right subtrees
    flatten(root->left);
    flatten(root->right);
    
    // Save original right subtree
    TreeNode* right = root->right;
    
    // Move left subtree to right
    root->right = root->left;
    root->left = nullptr;
    
    // Find the end of the new right subtree and attach the original right subtree
    TreeNode* current = root;
    while (current->right) {
        current = current->right;
    }
    current->right = right;
}
```

## 7. Advanced Tree Concepts

### 7.1 Segment Trees
- Used for range queries and updates
- Each node represents a segment of the array
- Allows queries and updates in O(log n) time
- Common operations: Range sum, minimum, maximum

```cpp
class SegmentTree {
private:
    vector<int> tree;
    vector<int> arr;
    int n;
    
    void build(int node, int start, int end) {
        if (start == end) {
            tree[node] = arr[start];
            return;
        }
        
        int mid = (start + end) / 2;
        build(2 * node, start, mid);
        build(2 * node + 1, mid + 1, end);
        
        tree[node] = tree[2 * node] + tree[2 * node + 1]; // For sum query
    }
    
    int query(int node, int start, int end, int left, int right) {
        if (start > right || end < left) return 0; // No overlap
        
        if (start >= left && end <= right) return tree[node]; // Total overlap
        
        int mid = (start + end) / 2;
        int leftSum = query(2 * node, start, mid, left, right);
        int rightSum = query(2 * node + 1, mid + 1, end, left, right);
        
        return leftSum + rightSum;
    }
    
    void update(int node, int start, int end, int idx, int val) {
        if (start == end) {
            arr[idx] = val;
            tree[node] = val;
            return;
        }
        
        int mid = (start + end) / 2;
        if (idx <= mid) {
            update(2 * node, start, mid, idx, val);
        } else {
            update(2 * node + 1, mid + 1, end, idx, val);
        }
        
        tree[node] = tree[2 * node] + tree[2 * node + 1];
    }
    
public:
    SegmentTree(vector<int>& nums) {
        arr = nums;
        n = arr.size();
        tree.resize(4 * n); // Size is typically 4 * n for safety
        build(1, 0, n - 1);
    }
    
    int rangeSum(int left, int right) {
        return query(1, 0, n - 1, left, right);
    }
    
    void updateValue(int idx, int val) {
        update(1, 0, n - 1, idx, val);
    }
};
```

### 7.2 Binary Indexed Tree (Fenwick Tree)
- Efficient data structure for dynamic cumulative frequency tables
- Allows prefix sums and point updates in O(log n) time
- More space-efficient than segment trees

```cpp
class BinaryIndexedTree {
private:
    vector<int> bit;
    int n;
    
public:
    BinaryIndexedTree(int size) {
        n = size + 1;
        bit.resize(n, 0);
    }
    
    BinaryIndexedTree(vector<int>& nums) {
        n = nums.size() + 1;
        bit.resize(n, 0);
        
        for (int i = 0; i < nums.size(); i++) {
            update(i, nums[i]);
        }
    }
    
    void update(int idx, int val) {
        idx++; // 1-based indexing
        while (idx < n) {
            bit[idx] += val;
            idx += (idx & -idx); // Add the last set bit
        }
    }
    
    int getSum(int idx) {
        idx++; // 1-based indexing
        int sum = 0;
        while (idx > 0) {
            sum += bit[idx];
            idx -= (idx & -idx); // Remove the last set bit
        }
        return sum;
    }
    
    int rangeSum(int left, int right) {
        return getSum(right) - getSum(left - 1);
    }
};
```

### 7.3 Trie (Prefix Tree)
- Tree-like data structure for efficient retrieval of strings
- Each node represents a character
- Common operations: Insert, search, prefix search

```cpp
class TrieNode {
public:
    bool isEndOfWord;
    TrieNode* children[26]; // For lowercase English letters
    
    TrieNode() {
        isEndOfWord = false;
        for (int i = 0; i < 26; i++) {
            children[i] = nullptr;
        }
    }
};

class Trie {
private:
    TrieNode* root;
    
public:
    Trie() {
        root = new TrieNode();
    }
    
    void insert(string word) {
        TrieNode* current = root;
        
        for (char c : word) {
            int index = c - 'a';
            if (!current->children[index]) {
                current->children[index] = new TrieNode();
            }
            current = current->children[index];
        }
        
        current->isEndOfWord = true;
    }
    
    bool search(string word) {
        TrieNode* node = findNode(word);
        return node && node->isEndOfWord;
    }
    
    bool startsWith(string prefix) {
        return findNode(prefix) != nullptr;
    }
    
    TrieNode* findNode(string prefix) {
        TrieNode* current = root;
        
        for (char c : prefix) {
            int index = c - 'a';
            if (!current->children[index]) {
                return nullptr;
            }
            current = current->children[index];
        }
        
        return current;
    }
    
    ~Trie() {
        deleteTrie(root);
    }
    
    void deleteTrie(TrieNode* node) {
        if (!node) return;
        
        for (int i = 0; i < 26; i++) {
            if (node->children[i]) {
                deleteTrie(node->children[i]);
            }
        }
        
        delete node;
    }
};
```

### 7.4 Multi-way Trees
- N-ary trees where each node can have more than two children
- Used in B-trees, B+ trees, and file systems

```cpp
class Node {
public:
    int val;
    vector<Node*> children;
    
    Node(int _val) : val(_val) {}
};

// Level order traversal for N-ary tree
vector<vector<int>> levelOrderNary(Node* root) {
    vector<vector<int>> result;
    if (!root) return result;
    
    queue<Node*> q;
    q.push(root);
    
    while (!q.empty()) {
        int levelSize = q.size();
        vector<int> currentLevel;
        
        for (int i = 0; i < levelSize; i++) {
            Node* node = q.front();
            q.pop();
            
            currentLevel.push_back(node->val);
            
            for (Node* child : node->children) {
                if (child) q.push(child);
            }
        }
        
        result.push_back(currentLevel);
    }
    
    return result;
}
```

## 8. Practice Problems

### 8.1 Easy Problems
1. [LeetCode 94: Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/)
2. [LeetCode 144: Binary Tree Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/)
3. [LeetCode 145: Binary Tree Postorder Traversal](https://leetcode.com/problems/binary-tree-postorder-traversal/)
4. [LeetCode 104: Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)
5. [LeetCode 101: Symmetric Tree](https://leetcode.com/problems/symmetric-tree/)
6. [LeetCode 112: Path Sum](https://leetcode.com/problems/path-sum/)
7. [LeetCode 226: Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/)
8. [LeetCode 617: Merge Two Binary Trees](https://leetcode.com/problems/merge-two-binary-trees/)
9. [LeetCode 543: Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/)
10. [LeetCode 110: Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/)

### 8.2 Medium Problems
1. [LeetCode 102: Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)
2. [LeetCode 105: Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)
3. [LeetCode 106: Construct Binary Tree from Inorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/)
4. [LeetCode 236: Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)
5. [LeetCode 98: Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/)
6. [LeetCode 114: Flatten Binary Tree to Linked List](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/)
7. [LeetCode 129: Sum Root to Leaf Numbers](https://leetcode.com/problems/sum-root-to-leaf-numbers/)
8. [LeetCode 173: Binary Search Tree Iterator](https://leetcode.com/problems/binary-search-tree-iterator/)
9. [LeetCode 199: Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/)
10. [LeetCode 337: House Robber III](https://leetcode.com/problems/house-robber-iii/)

### 8.3 Hard Problems
1. [LeetCode 124: Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/)
2. [LeetCode 297: Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/)
3. [LeetCode 968: Binary Tree Cameras](https://leetcode.com/problems/binary-tree-cameras/)
4. [LeetCode 99: Recover Binary Search Tree](https://leetcode.com/problems/recover-binary-search-tree/)
5. [LeetCode 1028: Recover a Tree From Preorder Traversal](https://leetcode.com/problems/recover-a-tree-from-preorder-traversal/)

## 9. Resources

### 9.1 Books
- "Introduction to Algorithms" by Cormen, Leiserson, Rivest, and Stein (CLRS)
- "Algorithms" by Robert Sedgewick and Kevin Wayne
- "The Algorithm Design Manual" by Steven S. Skiena

### 9.2 Online Resources
- [GeeksforGeeks: Tree Data Structure](https://www.geeksforgeeks.org/tree-data-structure/)
- [Visualgo: Binary Tree/BST Visualization](https://visualgo.net/en/bst)
- [CS Dojo: Binary Tree Traversal on YouTube](https://www.youtube.com/watch?v=9RHO6jU--GU)

### 9.3 Practice Platforms
- [LeetCode Tree Problems](https://leetcode.com/tag/tree/)
- [HackerRank Trees](https://www.hackerrank.com/domains/data-structures?filters%5Bsubdomains%5D%5B%5D=trees)
- [InterviewBit: Trees](https://www.interviewbit.com/courses/programming/topics/trees/)

---

## Key Takeaways

1. **Versatile Data Structure**: Trees model hierarchical data and are fundamental to many algorithms and applications.
2. **Traversal Mastery**: Understanding different traversal methods is crucial for solving tree problems.
3. **Problem-Solving Patterns**: Recursive approaches are commonly used with trees, often with pre/in/post-order patterns.
4. **Advanced Trees**: Specialized trees like segment trees, tries, and Fenwick trees solve specific problem domains efficiently.
5. **Common Techniques**: Height/depth calculation, path finding, and tree construction are essential skills.

## Love Babbar & Striver Sheet Problems (Trees)

### Love Babbar Sheet (Trees)
1. [Level order traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)
2. [Reverse Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal-ii/)
3. [Height of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)
4. [Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/)
5. [Mirror of a Binary Tree](https://leetcode.com/problems/invert-binary-tree/)
6. [Left View of Binary Tree](https://practice.geeksforgeeks.org/problems/left-view-of-binary-tree/1)
7. [Right View of Binary Tree](https://leetcode.com/problems/binary-tree-right-side-view/)
8. [ZigZag Tree Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/)
9. [Check if a tree is Balanced](https://leetcode.com/problems/balanced-binary-tree/)
10. [Lowest Common Ancestor](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)

### Striver SDE Sheet (Trees)
1. [Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/)
2. [Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/)
3. [Postorder Traversal](https://leetcode.com/problems/binary-tree-postorder-traversal/)
4. [Morris Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/)
5. [Left View of Binary Tree](https://practice.geeksforgeeks.org/problems/left-view-of-binary-tree/1)
6. [Bottom View of Binary Tree](https://practice.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1)
7. [Top View of Binary Tree](https://practice.geeksforgeeks.org/problems/top-view-of-binary-tree/1)
8. [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/)
9. [Construct Binary Tree from Inorder and Preorder](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)
10. [Symmetric Binary Tree](https://leetcode.com/problems/symmetric-tree/)
