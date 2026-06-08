# Trees: Comprehensive Notes

## 1. Introduction to Trees

A tree is a hierarchical data structure consisting of nodes connected by edges. Each node contains a value and references to its child nodes.

### Key Characteristics
- Hierarchical structure with a root node
- Each node has 0 or more child nodes
- No cycles (acyclic graph)
- Each node (except the root) has exactly one parent
- Nodes with the same parent are called siblings

### Tree Terminology
- **Root**: The topmost node of the tree
- **Parent**: A node that has child nodes
- **Child**: A node directly connected to another node when moving away from the root
- **Leaf**: A node with no children
- **Internal Node**: A node with at least one child
- **Depth**: The length of the path from the root to the node
- **Height**: The length of the longest path from the node to a leaf
- **Level**: The generation of a node (root is at level 0)
- **Degree**: The number of children of a node
- **Forest**: A collection of disjoint trees

### Visual Representation
```
        A         ← Root
       / \
      B   C       ← Internal Nodes
     / \   \
    D   E   F     ← Leaf Nodes
```

## 2. Types of Trees

### Binary Tree
A tree in which each node has at most two children, referred to as the left child and the right child.

```java
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    
    TreeNode(int val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
```

### Binary Search Tree (BST)
A binary tree where the left subtree of a node contains only nodes with values less than the node's value, and the right subtree contains only nodes with values greater than the node's value.

```java
public class BST {
    TreeNode root;
    
    public void insert(int val) {
        root = insertRec(root, val);
    }
    
    private TreeNode insertRec(TreeNode root, int val) {
        if (root == null) {
            return new TreeNode(val);
        }
        
        if (val < root.val) {
            root.left = insertRec(root.left, val);
        } else if (val > root.val) {
            root.right = insertRec(root.right, val);
        }
        
        return root;
    }
    
    public boolean search(int val) {
        return searchRec(root, val);
    }
    
    private boolean searchRec(TreeNode root, int val) {
        if (root == null) {
            return false;
        }
        
        if (root.val == val) {
            return true;
        }
        
        if (val < root.val) {
            return searchRec(root.left, val);
        } else {
            return searchRec(root.right, val);
        }
    }
}
```

### AVL Tree
A self-balancing binary search tree where the difference between heights of left and right subtrees cannot be more than one for all nodes.

### Red-Black Tree
A self-balancing binary search tree with an extra bit of data per node denoting its color (red or black), used to ensure the tree remains balanced during insertions and deletions.

### B-Tree
A self-balancing tree data structure that maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time. Used in databases and file systems.

### Trie (Prefix Tree)
A tree-like data structure used to store a dynamic set of strings, where the keys are usually strings.

```java
class TrieNode {
    TrieNode[] children;
    boolean isEndOfWord;
    
    TrieNode() {
        children = new TrieNode[26]; // For lowercase English letters
        isEndOfWord = false;
    }
}

public class Trie {
    private TrieNode root;
    
    public Trie() {
        root = new TrieNode();
    }
    
    public void insert(String word) {
        TrieNode current = root;
        
        for (char c : word.toCharArray()) {
            int index = c - 'a';
            if (current.children[index] == null) {
                current.children[index] = new TrieNode();
            }
            current = current.children[index];
        }
        
        current.isEndOfWord = true;
    }
    
    public boolean search(String word) {
        TrieNode node = searchPrefix(word);
        return node != null && node.isEndOfWord;
    }
    
    public boolean startsWith(String prefix) {
        return searchPrefix(prefix) != null;
    }
    
    private TrieNode searchPrefix(String word) {
        TrieNode current = root;
        
        for (char c : word.toCharArray()) {
            int index = c - 'a';
            if (current.children[index] == null) {
                return null;
            }
            current = current.children[index];
        }
        
        return current;
    }
}
```

### Heap
A specialized tree-based data structure that satisfies the heap property. In a max heap, for any given node, the value of the node is greater than or equal to the values of its children. In a min heap, the value of the node is less than or equal to the values of its children.

```java
public class MinHeap {
    private int[] heap;
    private int size;
    private int capacity;
    
    public MinHeap(int capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.heap = new int[capacity];
    }
    
    private int parent(int i) {
        return (i - 1) / 2;
    }
    
    private int leftChild(int i) {
        return 2 * i + 1;
    }
    
    private int rightChild(int i) {
        return 2 * i + 2;
    }
    
    public void insert(int val) {
        if (size >= capacity) {
            throw new IllegalStateException("Heap is full");
        }
        
        // Insert at the end
        heap[size] = val;
        int current = size;
        size++;
        
        // Heapify up
        while (current > 0 && heap[current] < heap[parent(current)]) {
            swap(current, parent(current));
            current = parent(current);
        }
    }
    
    public int extractMin() {
        if (size <= 0) {
            throw new IllegalStateException("Heap is empty");
        }
        
        int min = heap[0];
        
        // Replace root with last element
        heap[0] = heap[size - 1];
        size--;
        
        // Heapify down
        heapify(0);
        
        return min;
    }
    
    private void heapify(int i) {
        int smallest = i;
        int left = leftChild(i);
        int right = rightChild(i);
        
        if (left < size && heap[left] < heap[smallest]) {
            smallest = left;
        }
        
        if (right < size && heap[right] < heap[smallest]) {
            smallest = right;
        }
        
        if (smallest != i) {
            swap(i, smallest);
            heapify(smallest);
        }
    }
    
    private void swap(int i, int j) {
        int temp = heap[i];
        heap[i] = heap[j];
        heap[j] = temp;
    }
}
```

## 3. Tree Traversals

### Depth-First Search (DFS)

#### Inorder Traversal (Left, Root, Right)
```java
public void inorderTraversal(TreeNode root) {
    if (root == null) {
        return;
    }
    
    inorderTraversal(root.left);
    System.out.print(root.val + " ");
    inorderTraversal(root.right);
}

// Iterative approach
public List<Integer> inorderTraversalIterative(TreeNode root) {
    List<Integer> result = new ArrayList<>();
    Stack<TreeNode> stack = new Stack<>();
    TreeNode current = root;
    
    while (current != null || !stack.isEmpty()) {
        // Reach the leftmost node
        while (current != null) {
            stack.push(current);
            current = current.left;
        }
        
        // Current is now null, pop from stack
        current = stack.pop();
        result.add(current.val);
        
        // Move to the right subtree
        current = current.right;
    }
    
    return result;
}
```

#### Preorder Traversal (Root, Left, Right)
```java
public void preorderTraversal(TreeNode root) {
    if (root == null) {
        return;
    }
    
    System.out.print(root.val + " ");
    preorderTraversal(root.left);
    preorderTraversal(root.right);
}

// Iterative approach
public List<Integer> preorderTraversalIterative(TreeNode root) {
    List<Integer> result = new ArrayList<>();
    if (root == null) {
        return result;
    }
    
    Stack<TreeNode> stack = new Stack<>();
    stack.push(root);
    
    while (!stack.isEmpty()) {
        TreeNode current = stack.pop();
        result.add(current.val);
        
        // Push right first so that left is processed first (LIFO)
        if (current.right != null) {
            stack.push(current.right);
        }
        if (current.left != null) {
            stack.push(current.left);
        }
    }
    
    return result;
}
```

#### Postorder Traversal (Left, Right, Root)
```java
public void postorderTraversal(TreeNode root) {
    if (root == null) {
        return;
    }
    
    postorderTraversal(root.left);
    postorderTraversal(root.right);
    System.out.print(root.val + " ");
}

// Iterative approach
public List<Integer> postorderTraversalIterative(TreeNode root) {
    LinkedList<Integer> result = new LinkedList<>();
    if (root == null) {
        return result;
    }
    
    Stack<TreeNode> stack = new Stack<>();
    stack.push(root);
    
    while (!stack.isEmpty()) {
        TreeNode current = stack.pop();
        result.addFirst(current.val); // Add to front
        
        // Push left first so that right is processed first in reverse
        if (current.left != null) {
            stack.push(current.left);
        }
        if (current.right != null) {
            stack.push(current.right);
        }
    }
    
    return result;
}
```

### Breadth-First Search (BFS)

#### Level Order Traversal
```java
public List<List<Integer>> levelOrderTraversal(TreeNode root) {
    List<List<Integer>> result = new ArrayList<>();
    if (root == null) {
        return result;
    }
    
    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);
    
    while (!queue.isEmpty()) {
        int levelSize = queue.size();
        List<Integer> currentLevel = new ArrayList<>();
        
        for (int i = 0; i < levelSize; i++) {
            TreeNode current = queue.poll();
            currentLevel.add(current.val);
            
            if (current.left != null) {
                queue.offer(current.left);
            }
            if (current.right != null) {
                queue.offer(current.right);
            }
        }
        
        result.add(currentLevel);
    }
    
    return result;
}
```

## 4. Binary Search Tree Operations

### Insertion
```java
public TreeNode insert(TreeNode root, int val) {
    if (root == null) {
        return new TreeNode(val);
    }
    
    if (val < root.val) {
        root.left = insert(root.left, val);
    } else if (val > root.val) {
        root.right = insert(root.right, val);
    }
    
    return root;
}
```

### Deletion
```java
public TreeNode delete(TreeNode root, int val) {
    if (root == null) {
        return null;
    }
    
    // Find the node to delete
    if (val < root.val) {
        root.left = delete(root.left, val);
    } else if (val > root.val) {
        root.right = delete(root.right, val);
    } else {
        // Case 1: Leaf node (no children)
        if (root.left == null && root.right == null) {
            return null;
        }
        // Case 2: One child
        else if (root.left == null) {
            return root.right;
        } else if (root.right == null) {
            return root.left;
        }
        // Case 3: Two children
        else {
            // Find the inorder successor (smallest in right subtree)
            root.val = findMin(root.right).val;
            // Delete the inorder successor
            root.right = delete(root.right, root.val);
        }
    }
    
    return root;
}

private TreeNode findMin(TreeNode root) {
    while (root.left != null) {
        root = root.left;
    }
    return root;
}
```

### Search
```java
public TreeNode search(TreeNode root, int val) {
    if (root == null || root.val == val) {
        return root;
    }
    
    if (val < root.val) {
        return search(root.left, val);
    } else {
        return search(root.right, val);
    }
}
```

### Find Minimum and Maximum
```java
public TreeNode findMin(TreeNode root) {
    if (root == null) {
        return null;
    }
    
    while (root.left != null) {
        root = root.left;
    }
    
    return root;
}

public TreeNode findMax(TreeNode root) {
    if (root == null) {
        return null;
    }
    
    while (root.right != null) {
        root = root.right;
    }
    
    return root;
}
```

## 5. Tree Properties and Operations

### Height of a Tree
```java
public int height(TreeNode root) {
    if (root == null) {
        return 0;
    }
    
    int leftHeight = height(root.left);
    int rightHeight = height(root.right);
    
    return Math.max(leftHeight, rightHeight) + 1;
}
```

### Size of a Tree (Number of Nodes)
```java
public int size(TreeNode root) {
    if (root == null) {
        return 0;
    }
    
    return size(root.left) + size(root.right) + 1;
}
```

### Check if a Binary Tree is a BST
```java
public boolean isBST(TreeNode root) {
    return isBSTUtil(root, Integer.MIN_VALUE, Integer.MAX_VALUE);
}

private boolean isBSTUtil(TreeNode root, int min, int max) {
    if (root == null) {
        return true;
    }
    
    if (root.val <= min || root.val >= max) {
        return false;
    }
    
    return isBSTUtil(root.left, min, root.val) && isBSTUtil(root.right, root.val, max);
}
```

### Lowest Common Ancestor (LCA)
```java
public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
    if (root == null) {
        return null;
    }
    
    // If either p or q is the root, then root is the LCA
    if (root == p || root == q) {
        return root;
    }
    
    // Look for LCA in left and right subtrees
    TreeNode leftLCA = lowestCommonAncestor(root.left, p, q);
    TreeNode rightLCA = lowestCommonAncestor(root.right, p, q);
    
    // If both left and right subtrees have one of p or q, then root is the LCA
    if (leftLCA != null && rightLCA != null) {
        return root;
    }
    
    // Otherwise, return the non-null value
    return (leftLCA != null) ? leftLCA : rightLCA;
}
```

### Diameter of a Binary Tree
```java
private int diameter = 0;

public int diameterOfBinaryTree(TreeNode root) {
    height(root);
    return diameter;
}

private int height(TreeNode root) {
    if (root == null) {
        return 0;
    }
    
    int leftHeight = height(root.left);
    int rightHeight = height(root.right);
    
    // Update diameter if the path going through the current node is longer
    diameter = Math.max(diameter, leftHeight + rightHeight);
    
    return Math.max(leftHeight, rightHeight) + 1;
}
```

### Balanced Binary Tree
```java
public boolean isBalanced(TreeNode root) {
    return checkHeight(root) != -1;
}

private int checkHeight(TreeNode root) {
    if (root == null) {
        return 0;
    }
    
    int leftHeight = checkHeight(root.left);
    if (leftHeight == -1) {
        return -1; // Left subtree is unbalanced
    }
    
    int rightHeight = checkHeight(root.right);
    if (rightHeight == -1) {
        return -1; // Right subtree is unbalanced
    }
    
    if (Math.abs(leftHeight - rightHeight) > 1) {
        return -1; // Current node is unbalanced
    }
    
    return Math.max(leftHeight, rightHeight) + 1;
}
```

## 6. Advanced Tree Concepts

### Segment Tree
A tree data structure used for storing information about intervals, or segments. It allows querying which of the stored segments contain a given point.

```java
public class SegmentTree {
    private int[] tree;
    private int n;
    
    public SegmentTree(int[] nums) {
        n = nums.length;
        // The size of the segment tree is 2*n - 1
        tree = new int[4 * n]; // 4*n is an upper bound
        buildTree(nums, 0, 0, n - 1);
    }
    
    private void buildTree(int[] nums, int treeIndex, int lo, int hi) {
        if (lo == hi) {
            tree[treeIndex] = nums[lo];
            return;
        }
        
        int mid = lo + (hi - lo) / 2;
        buildTree(nums, 2 * treeIndex + 1, lo, mid);
        buildTree(nums, 2 * treeIndex + 2, mid + 1, hi);
        
        tree[treeIndex] = tree[2 * treeIndex + 1] + tree[2 * treeIndex + 2];
    }
    
    public void update(int index, int val) {
        updateTree(0, 0, n - 1, index, val);
    }
    
    private void updateTree(int treeIndex, int lo, int hi, int index, int val) {
        if (lo == hi) {
            tree[treeIndex] = val;
            return;
        }
        
        int mid = lo + (hi - lo) / 2;
        if (index <= mid) {
            updateTree(2 * treeIndex + 1, lo, mid, index, val);
        } else {
            updateTree(2 * treeIndex + 2, mid + 1, hi, index, val);
        }
        
        tree[treeIndex] = tree[2 * treeIndex + 1] + tree[2 * treeIndex + 2];
    }
    
    public int sumRange(int left, int right) {
        return queryTree(0, 0, n - 1, left, right);
    }
    
    private int queryTree(int treeIndex, int lo, int hi, int i, int j) {
        // Total overlap
        if (lo >= i && hi <= j) {
            return tree[treeIndex];
        }
        
        // No overlap
        if (hi < i || lo > j) {
            return 0;
        }
        
        // Partial overlap
        int mid = lo + (hi - lo) / 2;
        return queryTree(2 * treeIndex + 1, lo, mid, i, j) + 
               queryTree(2 * treeIndex + 2, mid + 1, hi, i, j);
    }
}
```

### Fenwick Tree (Binary Indexed Tree)
A data structure that can efficiently update elements and calculate prefix sums in a table of numbers.

```java
public class FenwickTree {
    private int[] bit;
    private int n;
    
    public FenwickTree(int n) {
        this.n = n;
        bit = new int[n + 1];
    }
    
    public void update(int i, int val) {
        while (i <= n) {
            bit[i] += val;
            i += i & -i; // Add the least significant bit
        }
    }
    
    public int sum(int i) {
        int sum = 0;
        while (i > 0) {
            sum += bit[i];
            i -= i & -i; // Remove the least significant bit
        }
        return sum;
    }
    
    public int rangeSum(int i, int j) {
        return sum(j) - sum(i - 1);
    }
}
```

### Trie with Wildcard Search
```java
public class TrieWithWildcard {
    class TrieNode {
        TrieNode[] children;
        boolean isEndOfWord;
        
        TrieNode() {
            children = new TrieNode[26];
            isEndOfWord = false;
        }
    }
    
    private TrieNode root;
    
    public TrieWithWildcard() {
        root = new TrieNode();
    }
    
    public void insert(String word) {
        TrieNode current = root;
        
        for (char c : word.toCharArray()) {
            int index = c - 'a';
            if (current.children[index] == null) {
                current.children[index] = new TrieNode();
            }
            current = current.children[index];
        }
        
        current.isEndOfWord = true;
    }
    
    public boolean search(String word) {
        return searchHelper(root, word, 0);
    }
    
    private boolean searchHelper(TrieNode node, String word, int index) {
        if (index == word.length()) {
            return node.isEndOfWord;
        }
        
        char c = word.charAt(index);
        
        if (c == '.') {
            // Wildcard: try all possible characters
            for (int i = 0; i < 26; i++) {
                if (node.children[i] != null && searchHelper(node.children[i], word, index + 1)) {
                    return true;
                }
            }
            return false;
        } else {
            // Regular character
            int charIndex = c - 'a';
            return node.children[charIndex] != null && searchHelper(node.children[charIndex], word, index + 1);
        }
    }
}
```

## 7. Common Tree Problems and Patterns

### Pattern 1: DFS on Binary Tree
```java
// Path Sum: Check if there is a root-to-leaf path with sum equal to targetSum
public boolean hasPathSum(TreeNode root, int targetSum) {
    if (root == null) {
        return false;
    }
    
    // If it's a leaf node, check if the remaining sum is equal to the node's value
    if (root.left == null && root.right == null) {
        return targetSum == root.val;
    }
    
    // Recursively check left and right subtrees with reduced target sum
    return hasPathSum(root.left, targetSum - root.val) || 
           hasPathSum(root.right, targetSum - root.val);
}
```

### Pattern 2: BFS on Binary Tree
```java
// Right Side View: Return the values of the nodes you can see from the right side
public List<Integer> rightSideView(TreeNode root) {
    List<Integer> result = new ArrayList<>();
    if (root == null) {
        return result;
    }
    
    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);
    
    while (!queue.isEmpty()) {
        int levelSize = queue.size();
        
        for (int i = 0; i < levelSize; i++) {
            TreeNode current = queue.poll();
            
            // If it's the last node in the current level, add to result
            if (i == levelSize - 1) {
                result.add(current.val);
            }
            
            if (current.left != null) {
                queue.offer(current.left);
            }
            if (current.right != null) {
                queue.offer(current.right);
            }
        }
    }
    
    return result;
}
```

### Pattern 3: Tree Construction
```java
// Construct Binary Tree from Preorder and Inorder Traversal
public TreeNode buildTree(int[] preorder, int[] inorder) {
    return buildTreeHelper(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);
}

private TreeNode buildTreeHelper(int[] preorder, int preStart, int preEnd, int[] inorder, int inStart, int inEnd) {
    if (preStart > preEnd || inStart > inEnd) {
        return null;
    }
    
    // The first element in preorder is the root
    TreeNode root = new TreeNode(preorder[preStart]);
    
    // Find the position of the root in inorder
    int inRoot = 0;
    for (int i = inStart; i <= inEnd; i++) {
        if (inorder[i] == root.val) {
            inRoot = i;
            break;
        }
    }
    
    // Calculate the size of the left subtree
    int leftSize = inRoot - inStart;
    
    // Recursively build left and right subtrees
    root.left = buildTreeHelper(preorder, preStart + 1, preStart + leftSize, inorder, inStart, inRoot - 1);
    root.right = buildTreeHelper(preorder, preStart + leftSize + 1, preEnd, inorder, inRoot + 1, inEnd);
    
    return root;
}
```

### Pattern 4: Tree Serialization
```java
// Serialize and Deserialize Binary Tree
public class Codec {
    // Encodes a tree to a single string.
    public String serialize(TreeNode root) {
        if (root == null) {
            return "X,"; // Null marker
        }
        
        String leftSerialized = serialize(root.left);
        String rightSerialized = serialize(root.right);
        
        return root.val + "," + leftSerialized + rightSerialized;
    }
    
    // Decodes your encoded data to tree.
    public TreeNode deserialize(String data) {
        Queue<String> nodes = new LinkedList<>(Arrays.asList(data.split(",")));
        return deserializeHelper(nodes);
    }
    
    private TreeNode deserializeHelper(Queue<String> nodes) {
        String val = nodes.poll();
        
        if (val.equals("X")) {
            return null;
        }
        
        TreeNode node = new TreeNode(Integer.parseInt(val));
        node.left = deserializeHelper(nodes);
        node.right = deserializeHelper(nodes);
        
        return node;
    }
}
```

## 8. Time and Space Complexity

| Operation | Binary Search Tree (Average) | Binary Search Tree (Worst) | AVL Tree | Red-Black Tree |
|-----------|------------------------------|----------------------------|----------|----------------|
| Search    | O(log n)                     | O(n)                       | O(log n) | O(log n)       |
| Insert    | O(log n)                     | O(n)                       | O(log n) | O(log n)       |
| Delete    | O(log n)                     | O(n)                       | O(log n) | O(log n)       |
| Space     | O(n)                         | O(n)                       | O(n)     | O(n)           |

## 9. Best Practices

1. **Choose the right tree** for your use case:
   - BST for ordered data with few duplicates
   - AVL or Red-Black Tree for balanced operations
   - Trie for string operations
   - Heap for priority queue operations

2. **Consider edge cases**:
   - Empty tree
   - Single node tree
   - Skewed tree (all nodes to one side)
   - Complete binary tree

3. **Optimize traversals**:
   - Use iterative approaches for better space complexity
   - Choose the right traversal order based on the problem

4. **Balance considerations**:
   - Unbalanced trees can degrade to O(n) performance
   - Use self-balancing trees for performance-critical applications

5. **Memory management**:
   - Consider using object pools for trees with frequent insertions/deletions
   - Be mindful of recursion depth to avoid stack overflow

## 10. Learning Strategy for Trees

1. **Master the basics**:
   - Tree traversals (inorder, preorder, postorder, level order)
   - BST operations (insert, delete, search)
   - Tree properties (height, size, balanced)

2. **Understand common patterns**:
   - DFS for path-related problems
   - BFS for level-related problems
   - Recursion for tree traversal and construction

3. **Practice by category**:
   - Binary Tree problems
   - Binary Search Tree problems
   - Tree construction problems
   - Advanced tree problems (Trie, Segment Tree)

4. **Analyze solutions**:
   - Understand time and space complexity
   - Compare recursive vs iterative approaches

5. **Implement from scratch**:
   - Build different types of trees
   - Implement all basic operations
   - Solve tree-related problems

## Resources for Further Learning

1. **Books**:
   - "Introduction to Algorithms" by CLRS
   - "Cracking the Coding Interview" by Gayle Laakmann McDowell

2. **Online Platforms**:
   - LeetCode: Tree section
   - GeeksforGeeks: Tree data structure
   - HackerRank: Tree challenges

3. **YouTube Channels**:
   - [mycodeschool](https://www.youtube.com/user/mycodeschool)
   - [Back To Back SWE](https://www.youtube.com/channel/UCmJz2DV1a3yfgrR7GqRtUUA)
   - [Abdul Bari](https://www.youtube.com/channel/UCZCFT11CWBi3MHNlGf019nw)
   - [Striver (takeUforward)](https://www.youtube.com/c/takeUforward)

4. **Visualization Tools**:
   - [VisuAlgo](https://visualgo.net/en/bst)
   - [Algorithm Visualizer](https://algorithm-visualizer.org/)
   - [USFCA Visualization](https://www.cs.usfca.edu/~galles/visualization/BST.html)