# 🌳 Trees - Complete Question Set (Love Babbar + Striver)
## Total: 87 Questions with Java Solutions & Theory

---

## 📋 Theory & Patterns

### Tree Concepts:
1. **Binary Tree** - Each node has at most 2 children
2. **BST** - Left < Root < Right property
3. **Complete Tree** - All levels filled except possibly last
4. **Perfect Tree** - All leaves at same level
5. **Balanced Tree** - Height difference ≤ 1 for all nodes

### Tree Traversals:
1. **Inorder** - Left → Root → Right (gives sorted order in BST)
2. **Preorder** - Root → Left → Right (useful for tree construction)
3. **Postorder** - Left → Right → Root (useful for deletion)
4. **Level Order** - BFS traversal using queue

### Important Algorithms:
- **Height/Depth Calculation** - Recursive approach
- **Diameter Finding** - Longest path between any two nodes
- **LCA (Lowest Common Ancestor)** - Multiple approaches
- **Tree Construction** - From traversals
- **Path Sum Problems** - DFS with backtracking

### Node Definitions:
```java
// Binary Tree Node
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Generic Tree Node
class Node {
    int data;
    Node left, right;
    
    Node(int data) {
        this.data = data;
        left = right = null;
    }
}

// N-ary Tree Node
class NaryNode {
    public int val;
    public List<NaryNode> children;
    
    public NaryNode() {}
    public NaryNode(int val) {
        this.val = val;
    }
    public NaryNode(int val, List<NaryNode> children) {
        this.val = val;
        this.children = children;
    }
}
```

---

## 💡 Love Babbar Tree Questions (207-293)

### 207. Level Order Traversal
**Problem**: Print tree nodes level by level  
**Difficulty**: Medium  
**Pattern**: BFS with Queue

```java
import java.util.*;

public List<List<Integer>> levelOrder(TreeNode root) {
    List<List<Integer>> result = new ArrayList<>();
    if (root == null) return result;
    
    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);
    
    while (!queue.isEmpty()) {
        int levelSize = queue.size();
        List<Integer> currentLevel = new ArrayList<>();
        
        for (int i = 0; i < levelSize; i++) {
            TreeNode node = queue.poll();
            currentLevel.add(node.val);
            
            if (node.left != null) queue.offer(node.left);
            if (node.right != null) queue.offer(node.right);
        }
        
        result.add(currentLevel);
    }
    
    return result;
}

// Level order in single list
public List<Integer> levelOrderFlat(TreeNode root) {
    List<Integer> result = new ArrayList<>();
    if (root == null) return result;
    
    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);
    
    while (!queue.isEmpty()) {
        TreeNode node = queue.poll();
        result.add(node.val);
        
        if (node.left != null) queue.offer(node.left);
        if (node.right != null) queue.offer(node.right);
    }
    
    return result;
}

// Spiral/Zigzag level order
public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
    List<List<Integer>> result = new ArrayList<>();
    if (root == null) return result;
    
    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);
    boolean leftToRight = true;
    
    while (!queue.isEmpty()) {
        int levelSize = queue.size();
        List<Integer> currentLevel = new ArrayList<>();
        
        for (int i = 0; i < levelSize; i++) {
            TreeNode node = queue.poll();
            
            if (leftToRight) {
                currentLevel.add(node.val);
            } else {
                currentLevel.add(0, node.val);
            }
            
            if (node.left != null) queue.offer(node.left);
            if (node.right != null) queue.offer(node.right);
        }
        
        result.add(currentLevel);
        leftToRight = !leftToRight;
    }
    
    return result;
}
```
**Time**: O(n), **Space**: O(n)

---

### 208. Reverse Level Order Traversal
**Problem**: Print levels from bottom to top  
**Difficulty**: Easy  
**Pattern**: Level Order + Stack/Reverse

```java
import java.util.*;

public List<List<Integer>> levelOrderBottom(TreeNode root) {
    List<List<Integer>> result = new ArrayList<>();
    if (root == null) return result;
    
    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);
    
    while (!queue.isEmpty()) {
        int levelSize = queue.size();
        List<Integer> currentLevel = new ArrayList<>();
        
        for (int i = 0; i < levelSize; i++) {
            TreeNode node = queue.poll();
            currentLevel.add(node.val);
            
            if (node.left != null) queue.offer(node.left);
            if (node.right != null) queue.offer(node.right);
        }
        
        result.add(0, currentLevel); // Add at beginning
    }
    
    return result;
}

// Using stack approach
public List<List<Integer>> levelOrderBottomStack(TreeNode root) {
    List<List<Integer>> result = new ArrayList<>();
    if (root == null) return result;
    
    Queue<TreeNode> queue = new LinkedList<>();
    Stack<List<Integer>> stack = new Stack<>();
    queue.offer(root);
    
    while (!queue.isEmpty()) {
        int levelSize = queue.size();
        List<Integer> currentLevel = new ArrayList<>();
        
        for (int i = 0; i < levelSize; i++) {
            TreeNode node = queue.poll();
            currentLevel.add(node.val);
            
            if (node.left != null) queue.offer(node.left);
            if (node.right != null) queue.offer(node.right);
        }
        
        stack.push(currentLevel);
    }
    
    while (!stack.isEmpty()) {
        result.add(stack.pop());
    }
    
    return result;
}
```
**Time**: O(n), **Space**: O(n)

---

### 209. Height of Binary Tree
**Problem**: Find maximum depth of tree  
**Difficulty**: Easy  
**Pattern**: DFS Recursion

```java
public int maxDepth(TreeNode root) {
    if (root == null) return 0;
    
    int leftDepth = maxDepth(root.left);
    int rightDepth = maxDepth(root.right);
    
    return Math.max(leftDepth, rightDepth) + 1;
}

// Iterative approach using level order
public int maxDepthIterative(TreeNode root) {
    if (root == null) return 0;
    
    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);
    int depth = 0;
    
    while (!queue.isEmpty()) {
        int levelSize = queue.size();
        depth++;
        
        for (int i = 0; i < levelSize; i++) {
            TreeNode node = queue.poll();
            
            if (node.left != null) queue.offer(node.left);
            if (node.right != null) queue.offer(node.right);
        }
    }
    
    return depth;
}

// Using DFS with stack
public int maxDepthDFS(TreeNode root) {
    if (root == null) return 0;
    
    Stack<TreeNode> nodeStack = new Stack<>();
    Stack<Integer> depthStack = new Stack<>();
    
    nodeStack.push(root);
    depthStack.push(1);
    
    int maxDepth = 0;
    
    while (!nodeStack.isEmpty()) {
        TreeNode node = nodeStack.pop();
        int currentDepth = depthStack.pop();
        
        maxDepth = Math.max(maxDepth, currentDepth);
        
        if (node.left != null) {
            nodeStack.push(node.left);
            depthStack.push(currentDepth + 1);
        }
        
        if (node.right != null) {
            nodeStack.push(node.right);
            depthStack.push(currentDepth + 1);
        }
    }
    
    return maxDepth;
}
```
**Time**: O(n), **Space**: O(h) where h is height

---

### 210. Diameter of Binary Tree
**Problem**: Find longest path between any two nodes  
**Difficulty**: Easy  
**Pattern**: DFS with Global Variable

```java
private int maxDiameter = 0;

public int diameterOfBinaryTree(TreeNode root) {
    maxDiameter = 0;
    calculateHeight(root);
    return maxDiameter;
}

private int calculateHeight(TreeNode node) {
    if (node == null) return 0;
    
    int leftHeight = calculateHeight(node.left);
    int rightHeight = calculateHeight(node.right);
    
    // Update diameter at current node
    maxDiameter = Math.max(maxDiameter, leftHeight + rightHeight);
    
    return Math.max(leftHeight, rightHeight) + 1;
}

// Without global variable
public int diameterOfBinaryTreeClean(TreeNode root) {
    return diameterHelper(root).diameter;
}

class DiameterResult {
    int height;
    int diameter;
    
    DiameterResult(int height, int diameter) {
        this.height = height;
        this.diameter = diameter;
    }
}

private DiameterResult diameterHelper(TreeNode node) {
    if (node == null) {
        return new DiameterResult(0, 0);
    }
    
    DiameterResult left = diameterHelper(node.left);
    DiameterResult right = diameterHelper(node.right);
    
    int currentHeight = Math.max(left.height, right.height) + 1;
    int currentDiameter = Math.max(
        Math.max(left.diameter, right.diameter),
        left.height + right.height
    );
    
    return new DiameterResult(currentHeight, currentDiameter);
}
```
**Time**: O(n), **Space**: O(h)

---

### 211. Mirror of Binary Tree
**Problem**: Check if tree is mirror/symmetric  
**Difficulty**: Easy  
**Pattern**: Recursive Comparison

```java
public boolean isSymmetric(TreeNode root) {
    if (root == null) return true;
    return isMirror(root.left, root.right);
}

private boolean isMirror(TreeNode left, TreeNode right) {
    if (left == null && right == null) return true;
    if (left == null || right == null) return false;
    
    return (left.val == right.val) &&
           isMirror(left.left, right.right) &&
           isMirror(left.right, right.left);
}

// Iterative approach
public boolean isSymmetricIterative(TreeNode root) {
    if (root == null) return true;
    
    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root.left);
    queue.offer(root.right);
    
    while (!queue.isEmpty()) {
        TreeNode left = queue.poll();
        TreeNode right = queue.poll();
        
        if (left == null && right == null) continue;
        if (left == null || right == null) return false;
        if (left.val != right.val) return false;
        
        queue.offer(left.left);
        queue.offer(right.right);
        queue.offer(left.right);
        queue.offer(right.left);
    }
    
    return true;
}

// Create mirror of tree
public TreeNode mirrorTree(TreeNode root) {
    if (root == null) return null;
    
    // Swap left and right subtrees
    TreeNode temp = root.left;
    root.left = root.right;
    root.right = temp;
    
    // Recursively mirror subtrees
    mirrorTree(root.left);
    mirrorTree(root.right);
    
    return root;
}
```
**Time**: O(n), **Space**: O(h)

---

### 212. Inorder Traversal
**Problem**: Left → Root → Right traversal  
**Difficulty**: Easy  
**Pattern**: DFS Recursion/Stack

```java
import java.util.*;

// Recursive approach
public List<Integer> inorderTraversal(TreeNode root) {
    List<Integer> result = new ArrayList<>();
    inorderHelper(root, result);
    return result;
}

private void inorderHelper(TreeNode node, List<Integer> result) {
    if (node == null) return;
    
    inorderHelper(node.left, result);
    result.add(node.val);
    inorderHelper(node.right, result);
}

// Iterative approach
public List<Integer> inorderTraversalIterative(TreeNode root) {
    List<Integer> result = new ArrayList<>();
    Stack<TreeNode> stack = new Stack<>();
    TreeNode current = root;
    
    while (current != null || !stack.isEmpty()) {
        // Go to leftmost node
        while (current != null) {
            stack.push(current);
            current = current.left;
        }
        
        // Process current node
        current = stack.pop();
        result.add(current.val);
        
        // Move to right subtree
        current = current.right;
    }
    
    return result;
}

// Morris Traversal (O(1) space)
public List<Integer> inorderTraversalMorris(TreeNode root) {
    List<Integer> result = new ArrayList<>();
    TreeNode current = root;
    
    while (current != null) {
        if (current.left == null) {
            // No left subtree, process current and go right
            result.add(current.val);
            current = current.right;
        } else {
            // Find inorder predecessor
            TreeNode predecessor = current.left;
            while (predecessor.right != null && predecessor.right != current) {
                predecessor = predecessor.right;
            }
            
            if (predecessor.right == null) {
                // Create thread
                predecessor.right = current;
                current = current.left;
            } else {
                // Remove thread and process current
                predecessor.right = null;
                result.add(current.val);
                current = current.right;
            }
        }
    }
    
    return result;
}
```
**Time**: O(n), **Space**: O(h) recursive/iterative, O(1) Morris

---

### 213. Preorder Traversal
**Problem**: Root → Left → Right traversal  
**Difficulty**: Easy  
**Pattern**: DFS Recursion/Stack

```java
import java.util.*;

// Recursive approach
public List<Integer> preorderTraversal(TreeNode root) {
    List<Integer> result = new ArrayList<>();
    preorderHelper(root, result);
    return result;
}

private void preorderHelper(TreeNode node, List<Integer> result) {
    if (node == null) return;
    
    result.add(node.val);
    preorderHelper(node.left, result);
    preorderHelper(node.right, result);
}

// Iterative approach
public List<Integer> preorderTraversalIterative(TreeNode root) {
    List<Integer> result = new ArrayList<>();
    if (root == null) return result;
    
    Stack<TreeNode> stack = new Stack<>();
    stack.push(root);
    
    while (!stack.isEmpty()) {
        TreeNode node = stack.pop();
        result.add(node.val);
        
        // Push right first, then left (stack is LIFO)
        if (node.right != null) stack.push(node.right);
        if (node.left != null) stack.push(node.left);
    }
    
    return result;
}

// Morris Preorder Traversal
public List<Integer> preorderTraversalMorris(TreeNode root) {
    List<Integer> result = new ArrayList<>();
    TreeNode current = root;
    
    while (current != null) {
        if (current.left == null) {
            result.add(current.val);
            current = current.right;
        } else {
            TreeNode predecessor = current.left;
            while (predecessor.right != null && predecessor.right != current) {
                predecessor = predecessor.right;
            }
            
            if (predecessor.right == null) {
                result.add(current.val); // Process before going left
                predecessor.right = current;
                current = current.left;
            } else {
                predecessor.right = null;
                current = current.right;
            }
        }
    }
    
    return result;
}
```
**Time**: O(n), **Space**: O(h) recursive/iterative, O(1) Morris

---

### 214. Postorder Traversal
**Problem**: Left → Right → Root traversal  
**Difficulty**: Easy  
**Pattern**: DFS Recursion/Two Stacks

```java
import java.util.*;

// Recursive approach
public List<Integer> postorderTraversal(TreeNode root) {
    List<Integer> result = new ArrayList<>();
    postorderHelper(root, result);
    return result;
}

private void postorderHelper(TreeNode node, List<Integer> result) {
    if (node == null) return;
    
    postorderHelper(node.left, result);
    postorderHelper(node.right, result);
    result.add(node.val);
}

// Iterative approach using two stacks
public List<Integer> postorderTraversalIterative(TreeNode root) {
    List<Integer> result = new ArrayList<>();
    if (root == null) return result;
    
    Stack<TreeNode> stack1 = new Stack<>();
    Stack<TreeNode> stack2 = new Stack<>();
    
    stack1.push(root);
    
    while (!stack1.isEmpty()) {
        TreeNode node = stack1.pop();
        stack2.push(node);
        
        if (node.left != null) stack1.push(node.left);
        if (node.right != null) stack1.push(node.right);
    }
    
    while (!stack2.isEmpty()) {
        result.add(stack2.pop().val);
    }
    
    return result;
}

// Using single stack with flag
public List<Integer> postorderTraversalSingleStack(TreeNode root) {
    List<Integer> result = new ArrayList<>();
    if (root == null) return result;
    
    Stack<TreeNode> stack = new Stack<>();
    TreeNode lastVisited = null;
    TreeNode current = root;
    
    while (current != null || !stack.isEmpty()) {
        if (current != null) {
            stack.push(current);
            current = current.left;
        } else {
            TreeNode peekNode = stack.peek();
            
            if (peekNode.right != null && lastVisited != peekNode.right) {
                current = peekNode.right;
            } else {
                result.add(peekNode.val);
                lastVisited = stack.pop();
            }
        }
    }
    
    return result;
}
```
**Time**: O(n), **Space**: O(h)

---

### 215. Left View of Binary Tree
**Problem**: Print leftmost node at each level  
**Difficulty**: Easy  
**Pattern**: Level Order with First Element

```java
import java.util.*;

public List<Integer> rightSideView(TreeNode root) {
    List<Integer> result = new ArrayList<>();
    if (root == null) return result;
    
    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);
    
    while (!queue.isEmpty()) {
        int levelSize = queue.size();
        
        for (int i = 0; i < levelSize; i++) {
            TreeNode node = queue.poll();
            
            // Add leftmost node of each level
            if (i == 0) {
                result.add(node.val);
            }
            
            if (node.left != null) queue.offer(node.left);
            if (node.right != null) queue.offer(node.right);
        }
    }
    
    return result;
}

// Recursive approach
public List<Integer> leftViewRecursive(TreeNode root) {
    List<Integer> result = new ArrayList<>();
    leftViewHelper(root, result, 0);
    return result;
}

private void leftViewHelper(TreeNode node, List<Integer> result, int level) {
    if (node == null) return;
    
    // If this is the first node at this level
    if (result.size() == level) {
        result.add(node.val);
    }
    
    leftViewHelper(node.left, result, level + 1);
    leftViewHelper(node.right, result, level + 1);
}

// Right view (similar logic)
public List<Integer> rightView(TreeNode root) {
    List<Integer> result = new ArrayList<>();
    if (root == null) return result;
    
    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);
    
    while (!queue.isEmpty()) {
        int levelSize = queue.size();
        
        for (int i = 0; i < levelSize; i++) {
            TreeNode node = queue.poll();
            
            // Add rightmost node of each level
            if (i == levelSize - 1) {
                result.add(node.val);
            }
            
            if (node.left != null) queue.offer(node.left);
            if (node.right != null) queue.offer(node.right);
        }
    }
    
    return result;
}
```
**Time**: O(n), **Space**: O(h)

---

### 216. Top View of Binary Tree
**Problem**: Print nodes visible from top  
**Difficulty**: Medium  
**Pattern**: Level Order with Horizontal Distance

```java
import java.util.*;

class Pair {
    TreeNode node;
    int hd; // horizontal distance
    
    Pair(TreeNode node, int hd) {
        this.node = node;
        this.hd = hd;
    }
}

public List<Integer> topView(TreeNode root) {
    List<Integer> result = new ArrayList<>();
    if (root == null) return result;
    
    Map<Integer, Integer> topViewMap = new TreeMap<>();
    Queue<Pair> queue = new LinkedList<>();
    
    queue.offer(new Pair(root, 0));
    
    while (!queue.isEmpty()) {
        Pair current = queue.poll();
        TreeNode node = current.node;
        int hd = current.hd;
        
        // If this horizontal distance is seen for the first time
        if (!topViewMap.containsKey(hd)) {
            topViewMap.put(hd, node.val);
        }
        
        if (node.left != null) {
            queue.offer(new Pair(node.left, hd - 1));
        }
        
        if (node.right != null) {
            queue.offer(new Pair(node.right, hd + 1));
        }
    }
    
    // Extract values in order of horizontal distance
    for (int value : topViewMap.values()) {
        result.add(value);
    }
    
    return result;
}

// Bottom view (similar logic, but update for each occurrence)
public List<Integer> bottomView(TreeNode root) {
    List<Integer> result = new ArrayList<>();
    if (root == null) return result;
    
    Map<Integer, Integer> bottomViewMap = new TreeMap<>();
    Queue<Pair> queue = new LinkedList<>();
    
    queue.offer(new Pair(root, 0));
    
    while (!queue.isEmpty()) {
        Pair current = queue.poll();
        TreeNode node = current.node;
        int hd = current.hd;
        
        // Update for each occurrence (last node at each hd)
        bottomViewMap.put(hd, node.val);
        
        if (node.left != null) {
            queue.offer(new Pair(node.left, hd - 1));
        }
        
        if (node.right != null) {
            queue.offer(new Pair(node.right, hd + 1));
        }
    }
    
    for (int value : bottomViewMap.values()) {
        result.add(value);
    }
    
    return result;
}
```
**Time**: O(n), **Space**: O(n)

---

### 217. Balanced Binary Tree
**Problem**: Check if tree is height-balanced  
**Difficulty**: Easy  
**Pattern**: DFS with Height Calculation

```java
public boolean isBalanced(TreeNode root) {
    return checkBalance(root) != -1;
}

private int checkBalance(TreeNode node) {
    if (node == null) return 0;
    
    int leftHeight = checkBalance(node.left);
    if (leftHeight == -1) return -1; // Left subtree not balanced
    
    int rightHeight = checkBalance(node.right);
    if (rightHeight == -1) return -1; // Right subtree not balanced
    
    // Check if current node is balanced
    if (Math.abs(leftHeight - rightHeight) > 1) {
        return -1; // Not balanced
    }
    
    return Math.max(leftHeight, rightHeight) + 1;
}

// Alternative approach with separate methods
public boolean isBalancedAlternative(TreeNode root) {
    if (root == null) return true;
    
    int leftHeight = getHeight(root.left);
    int rightHeight = getHeight(root.right);
    
    return Math.abs(leftHeight - rightHeight) <= 1 &&
           isBalancedAlternative(root.left) &&
           isBalancedAlternative(root.right);
}

private int getHeight(TreeNode node) {
    if (node == null) return 0;
    
    return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
}
```
**Time**: O(n) optimized, O(n²) naive, **Space**: O(h)

---

### 218. Sum Tree
**Problem**: Check if tree is sum tree (node = sum of subtrees)  
**Difficulty**: Medium  
**Pattern**: DFS with Sum Calculation

```java
public boolean isSumTree(TreeNode root) {
    return checkSumTree(root) != -1;
}

private int checkSumTree(TreeNode node) {
    if (node == null) return 0;
    
    // Leaf node is a sum tree
    if (node.left == null && node.right == null) {
        return node.val;
    }
    
    int leftSum = checkSumTree(node.left);
    if (leftSum == -1) return -1; // Left subtree not a sum tree
    
    int rightSum = checkSumTree(node.right);
    if (rightSum == -1) return -1; // Right subtree not a sum tree
    
    // Check if current node satisfies sum tree property
    if (node.val == leftSum + rightSum) {
        return node.val + leftSum + rightSum; // Total sum including current node
    }
    
    return -1; // Not a sum tree
}

// Convert to sum tree
public TreeNode convertToSumTree(TreeNode root) {
    convertToSumTreeHelper(root);
    return root;
}

private int convertToSumTreeHelper(TreeNode node) {
    if (node == null) return 0;
    
    int oldValue = node.val;
    
    int leftSum = convertToSumTreeHelper(node.left);
    int rightSum = convertToSumTreeHelper(node.right);
    
    node.val = leftSum + rightSum;
    
    return oldValue + node.val; // Return old value + new value
}
```
**Time**: O(n), **Space**: O(h)

---

### 219. Binary Tree from Inorder and Preorder
**Problem**: Construct tree from inorder and preorder traversals  
**Difficulty**: Medium  
**Pattern**: Recursive Construction with Index Mapping

```java
import java.util.*;

public TreeNode buildTree(int[] preorder, int[] inorder) {
    Map<Integer, Integer> inorderMap = new HashMap<>();
    
    // Create map for quick lookup of inorder indices
    for (int i = 0; i < inorder.length; i++) {
        inorderMap.put(inorder[i], i);
    }
    
    return buildTreeHelper(preorder, 0, preorder.length - 1,
                          inorder, 0, inorder.length - 1, inorderMap);
}

private TreeNode buildTreeHelper(int[] preorder, int preStart, int preEnd,
                                int[] inorder, int inStart, int inEnd,
                                Map<Integer, Integer> inorderMap) {
    if (preStart > preEnd || inStart > inEnd) return null;
    
    // Root is the first element in preorder
    TreeNode root = new TreeNode(preorder[preStart]);
    
    // Find root position in inorder
    int rootIndex = inorderMap.get(preorder[preStart]);
    int leftSize = rootIndex - inStart;
    
    // Build left and right subtrees
    root.left = buildTreeHelper(preorder, preStart + 1, preStart + leftSize,
                               inorder, inStart, rootIndex - 1, inorderMap);
    
    root.right = buildTreeHelper(preorder, preStart + leftSize + 1, preEnd,
                                inorder, rootIndex + 1, inEnd, inorderMap);
    
    return root;
}

// From inorder and postorder
public TreeNode buildTreeFromInPost(int[] inorder, int[] postorder) {
    Map<Integer, Integer> inorderMap = new HashMap<>();
    
    for (int i = 0; i < inorder.length; i++) {
        inorderMap.put(inorder[i], i);
    }
    
    return buildFromInPostHelper(inorder, 0, inorder.length - 1,
                                postorder, 0, postorder.length - 1, inorderMap);
}

private TreeNode buildFromInPostHelper(int[] inorder, int inStart, int inEnd,
                                      int[] postorder, int postStart, int postEnd,
                                      Map<Integer, Integer> inorderMap) {
    if (inStart > inEnd || postStart > postEnd) return null;
    
    // Root is the last element in postorder
    TreeNode root = new TreeNode(postorder[postEnd]);
    
    int rootIndex = inorderMap.get(postorder[postEnd]);
    int leftSize = rootIndex - inStart;
    
    root.left = buildFromInPostHelper(inorder, inStart, rootIndex - 1,
                                     postorder, postStart, postStart + leftSize - 1, inorderMap);
    
    root.right = buildFromInPostHelper(inorder, rootIndex + 1, inEnd,
                                      postorder, postStart + leftSize, postEnd - 1, inorderMap);
    
    return root;
}
```
**Time**: O(n), **Space**: O(n)

---

### 220. Lowest Common Ancestor (LCA)
**Problem**: Find LCA of two nodes in binary tree  
**Difficulty**: Medium  
**Pattern**: DFS with Path Finding

```java
public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
    if (root == null || root == p || root == q) {
        return root;
    }
    
    TreeNode left = lowestCommonAncestor(root.left, p, q);
    TreeNode right = lowestCommonAncestor(root.right, p, q);
    
    if (left != null && right != null) {
        return root; // Current node is LCA
    }
    
    return left != null ? left : right;
}

// For BST (more efficient)
public TreeNode lowestCommonAncestorBST(TreeNode root, TreeNode p, TreeNode q) {
    if (root == null) return null;
    
    int rootVal = root.val;
    int pVal = p.val;
    int qVal = q.val;
    
    if (pVal > rootVal && qVal > rootVal) {
        return lowestCommonAncestorBST(root.right, p, q);
    } else if (pVal < rootVal && qVal < rootVal) {
        return lowestCommonAncestorBST(root.left, p, q);
    } else {
        return root;
    }
}

// LCA with path storing
public TreeNode lcaWithPath(TreeNode root, TreeNode p, TreeNode q) {
    List<TreeNode> pathToP = new ArrayList<>();
    List<TreeNode> pathToQ = new ArrayList<>();
    
    if (!findPath(root, p, pathToP) || !findPath(root, q, pathToQ)) {
        return null;
    }
    
    TreeNode lca = null;
    int i = 0;
    
    while (i < pathToP.size() && i < pathToQ.size() && 
           pathToP.get(i) == pathToQ.get(i)) {
        lca = pathToP.get(i);
        i++;
    }
    
    return lca;
}

private boolean findPath(TreeNode root, TreeNode target, List<TreeNode> path) {
    if (root == null) return false;
    
    path.add(root);
    
    if (root == target) return true;
    
    if (findPath(root.left, target, path) || findPath(root.right, target, path)) {
        return true;
    }
    
    path.remove(path.size() - 1); // Backtrack
    return false;
}
```
**Time**: O(n), **Space**: O(h)

---

## 🚀 Striver Tree Questions

### S1. Maximum Path Sum
**Problem**: Find maximum path sum between any two nodes  
**Difficulty**: Hard  
**Pattern**: DFS with Global Maximum

```java
private int maxSum = Integer.MIN_VALUE;

public int maxPathSum(TreeNode root) {
    maxSum = Integer.MIN_VALUE;
    maxPathSumHelper(root);
    return maxSum;
}

private int maxPathSumHelper(TreeNode node) {
    if (node == null) return 0;
    
    // Get maximum path sum from left and right subtrees
    int leftSum = Math.max(0, maxPathSumHelper(node.left));
    int rightSum = Math.max(0, maxPathSumHelper(node.right));
    
    // Maximum path through current node
    int currentMax = node.val + leftSum + rightSum;
    
    // Update global maximum
    maxSum = Math.max(maxSum, currentMax);
    
    // Return maximum path sum starting from current node
    return node.val + Math.max(leftSum, rightSum);
}

// Binary tree maximum path sum (node to node)
public int maxPathSumNodeToNode(TreeNode root) {
    if (root == null) return 0;
    
    int[] result = new int[]{Integer.MIN_VALUE};
    maxPathSumNodeToNodeHelper(root, result);
    return result[0];
}

private int maxPathSumNodeToNodeHelper(TreeNode node, int[] result) {
    if (node == null) return 0;
    
    int left = maxPathSumNodeToNodeHelper(node.left, result);
    int right = maxPathSumNodeToNodeHelper(node.right, result);
    
    // Maximum path sum including current node
    int max1 = Math.max(Math.max(left, right) + node.val, node.val);
    int max2 = Math.max(max1, left + right + node.val);
    
    result[0] = Math.max(result[0], max2);
    
    return max1;
}
```
**Time**: O(n), **Space**: O(h)

---

### S2. Serialize and Deserialize Binary Tree
**Problem**: Convert tree to string and back  
**Difficulty**: Hard  
**Pattern**: Preorder with Delimiters

```java
import java.util.*;

public class Codec {
    
    // Encodes a tree to a single string
    public String serialize(TreeNode root) {
        StringBuilder sb = new StringBuilder();
        serializeHelper(root, sb);
        return sb.toString();
    }
    
    private void serializeHelper(TreeNode node, StringBuilder sb) {
        if (node == null) {
            sb.append("null,");
            return;
        }
        
        sb.append(node.val).append(",");
        serializeHelper(node.left, sb);
        serializeHelper(node.right, sb);
    }
    
    // Decodes your encoded data to tree
    public TreeNode deserialize(String data) {
        Queue<String> queue = new LinkedList<>(Arrays.asList(data.split(",")));
        return deserializeHelper(queue);
    }
    
    private TreeNode deserializeHelper(Queue<String> queue) {
        String val = queue.poll();
        
        if ("null".equals(val)) {
            return null;
        }
        
        TreeNode node = new TreeNode(Integer.valueOf(val));
        node.left = deserializeHelper(queue);
        node.right = deserializeHelper(queue);
        
        return node;
    }
}

// Level order serialization
public class CodecLevelOrder {
    
    public String serialize(TreeNode root) {
        if (root == null) return "";
        
        StringBuilder sb = new StringBuilder();
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        
        while (!queue.isEmpty()) {
            TreeNode node = queue.poll();
            
            if (node == null) {
                sb.append("null,");
            } else {
                sb.append(node.val).append(",");
                queue.offer(node.left);
                queue.offer(node.right);
            }
        }
        
        return sb.toString();
    }
    
    public TreeNode deserialize(String data) {
        if (data.isEmpty()) return null;
        
        String[] nodes = data.split(",");
        TreeNode root = new TreeNode(Integer.valueOf(nodes[0]));
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        
        int i = 1;
        while (!queue.isEmpty() && i < nodes.length) {
            TreeNode node = queue.poll();
            
            if (!"null".equals(nodes[i])) {
                node.left = new TreeNode(Integer.valueOf(nodes[i]));
                queue.offer(node.left);
            }
            i++;
            
            if (i < nodes.length && !"null".equals(nodes[i])) {
                node.right = new TreeNode(Integer.valueOf(nodes[i]));
                queue.offer(node.right);
            }
            i++;
        }
        
        return root;
    }
}
```
**Time**: O(n), **Space**: O(n)

---

## 📈 Summary

### Key Tree Patterns Mastered:
1. **DFS Traversals** - Inorder, preorder, postorder (recursive/iterative)
2. **BFS Traversals** - Level order, spiral/zigzag
3. **Tree Properties** - Height, diameter, balance, symmetry
4. **Tree Construction** - From traversals, serialization
5. **Path Problems** - LCA, maximum path sum, root to leaf paths

### Important Algorithms:
- **Morris Traversal** - O(1) space traversal
- **Level Order Views** - Left, right, top, bottom views
- **Tree Validation** - BST, sum tree, balanced tree
- **Path Finding** - LCA, path sum, diameter

### Common Patterns:
- **Global Variables** - For diameter, maximum sum calculations
- **Helper Methods** - Recursive functions with additional parameters
- **Queue/Stack** - For iterative traversals
- **HashMap** - For quick lookups in construction problems

### Performance Considerations:
- **Recursion Depth** - Can cause stack overflow for deep trees
- **Space Optimization** - Morris traversal for O(1) space
- **Index Mapping** - HashMap for O(1) lookups in construction
- **Early Termination** - Stop when condition met

### Next Steps:
- Practice more complex tree problems
- Learn about advanced tree structures (AVL, Red-Black)
- Move to Binary Search Tree specific problems
- Study Graph algorithms

---
*This completes the major tree problems with detailed Java solutions and comprehensive theory explanations.*
