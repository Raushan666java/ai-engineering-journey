# 🌲 Binary Search Trees (BST) - Complete Question Set (Love Babbar + Striver)
## Total: 37 Questions with Java Solutions & Theory

---

## 📋 Theory & Patterns

### BST Properties:
1. **Left Subtree** - All values < root
2. **Right Subtree** - All values > root  
3. **Inorder Traversal** - Gives sorted sequence
4. **Search/Insert/Delete** - O(log n) average, O(n) worst
5. **Self-Balancing** - AVL, Red-Black trees maintain O(log n)

### Key Operations:
- **Search** - Compare and go left/right
- **Insert** - Find position and add new node
- **Delete** - Three cases: leaf, one child, two children
- **Validation** - Check BST property recursively
- **LCA** - Use BST property for efficient finding

### BST Node Definition:
```java
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
```

---

## 💡 Love Babbar BST Questions (294-315)

### 294. Search in BST
**Problem**: Search for a value in BST  
**Difficulty**: Easy  
**Pattern**: Recursive/Iterative Search

```java
public TreeNode searchBST(TreeNode root, int val) {
    if (root == null || root.val == val) {
        return root;
    }
    
    if (val < root.val) {
        return searchBST(root.left, val);
    } else {
        return searchBST(root.right, val);
    }
}

// Iterative approach
public TreeNode searchBSTIterative(TreeNode root, int val) {
    while (root != null && root.val != val) {
        root = (val < root.val) ? root.left : root.right;
    }
    return root;
}

// Check if value exists
public boolean contains(TreeNode root, int val) {
    return searchBST(root, val) != null;
}
```
**Time**: O(log n) average, O(n) worst, **Space**: O(h)

---

### 295. Insert into BST
**Problem**: Insert a value into BST  
**Difficulty**: Medium  
**Pattern**: Recursive Insertion

```java
public TreeNode insertIntoBST(TreeNode root, int val) {
    if (root == null) {
        return new TreeNode(val);
    }
    
    if (val < root.val) {
        root.left = insertIntoBST(root.left, val);
    } else {
        root.right = insertIntoBST(root.right, val);
    }
    
    return root;
}

// Iterative approach
public TreeNode insertIntoBSTIterative(TreeNode root, int val) {
    if (root == null) return new TreeNode(val);
    
    TreeNode current = root;
    TreeNode parent = null;
    
    while (current != null) {
        parent = current;
        if (val < current.val) {
            current = current.left;
        } else {
            current = current.right;
        }
    }
    
    if (val < parent.val) {
        parent.left = new TreeNode(val);
    } else {
        parent.right = new TreeNode(val);
    }
    
    return root;
}
```
**Time**: O(log n) average, O(n) worst, **Space**: O(h)

---

### 296. Delete Node in BST
**Problem**: Delete a node from BST  
**Difficulty**: Medium  
**Pattern**: Three Cases Handling

```java
public TreeNode deleteNode(TreeNode root, int key) {
    if (root == null) return null;
    
    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } else {
        // Node to be deleted found
        
        // Case 1: Leaf node
        if (root.left == null && root.right == null) {
            return null;
        }
        
        // Case 2: One child
        if (root.left == null) {
            return root.right;
        } else if (root.right == null) {
            return root.left;
        }
        
        // Case 3: Two children
        // Find inorder successor (smallest in right subtree)
        TreeNode successor = findMin(root.right);
        root.val = successor.val;
        root.right = deleteNode(root.right, successor.val);
    }
    
    return root;
}

private TreeNode findMin(TreeNode node) {
    while (node.left != null) {
        node = node.left;
    }
    return node;
}

// Alternative: Find inorder predecessor
public TreeNode deleteNodePredecessor(TreeNode root, int key) {
    if (root == null) return null;
    
    if (key < root.val) {
        root.left = deleteNodePredecessor(root.left, key);
    } else if (key > root.val) {
        root.right = deleteNodePredecessor(root.right, key);
    } else {
        if (root.left == null) return root.right;
        if (root.right == null) return root.left;
        
        // Find inorder predecessor (largest in left subtree)
        TreeNode predecessor = findMax(root.left);
        root.val = predecessor.val;
        root.left = deleteNodePredecessor(root.left, predecessor.val);
    }
    
    return root;
}

private TreeNode findMax(TreeNode node) {
    while (node.right != null) {
        node = node.right;
    }
    return node;
}
```
**Time**: O(log n) average, O(n) worst, **Space**: O(h)

---

### 297. Validate BST
**Problem**: Check if tree is valid BST  
**Difficulty**: Medium  
**Pattern**: Inorder/Range Validation

```java
public boolean isValidBST(TreeNode root) {
    return isValidBSTHelper(root, Long.MIN_VALUE, Long.MAX_VALUE);
}

private boolean isValidBSTHelper(TreeNode node, long minVal, long maxVal) {
    if (node == null) return true;
    
    if (node.val <= minVal || node.val >= maxVal) {
        return false;
    }
    
    return isValidBSTHelper(node.left, minVal, node.val) &&
           isValidBSTHelper(node.right, node.val, maxVal);
}

// Using inorder traversal
public boolean isValidBSTInorder(TreeNode root) {
    List<Integer> inorder = new ArrayList<>();
    inorderTraversal(root, inorder);
    
    for (int i = 1; i < inorder.size(); i++) {
        if (inorder.get(i) <= inorder.get(i - 1)) {
            return false;
        }
    }
    
    return true;
}

private void inorderTraversal(TreeNode node, List<Integer> inorder) {
    if (node == null) return;
    
    inorderTraversal(node.left, inorder);
    inorder.add(node.val);
    inorderTraversal(node.right, inorder);
}

// Space optimized inorder
private TreeNode prevNode = null;

public boolean isValidBSTOptimized(TreeNode root) {
    prevNode = null;
    return inorderCheck(root);
}

private boolean inorderCheck(TreeNode node) {
    if (node == null) return true;
    
    if (!inorderCheck(node.left)) return false;
    
    if (prevNode != null && prevNode.val >= node.val) {
        return false;
    }
    prevNode = node;
    
    return inorderCheck(node.right);
}
```
**Time**: O(n), **Space**: O(h)

---

### 298. LCA in BST
**Problem**: Find Lowest Common Ancestor in BST  
**Difficulty**: Easy  
**Pattern**: BST Property Usage

```java
public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
    if (root == null) return null;
    
    int rootVal = root.val;
    int pVal = p.val;
    int qVal = q.val;
    
    if (pVal > rootVal && qVal > rootVal) {
        return lowestCommonAncestor(root.right, p, q);
    } else if (pVal < rootVal && qVal < rootVal) {
        return lowestCommonAncestor(root.left, p, q);
    } else {
        return root;
    }
}

// Iterative approach
public TreeNode lowestCommonAncestorIterative(TreeNode root, TreeNode p, TreeNode q) {
    int pVal = p.val;
    int qVal = q.val;
    
    TreeNode node = root;
    while (node != null) {
        int nodeVal = node.val;
        
        if (pVal > nodeVal && qVal > nodeVal) {
            node = node.right;
        } else if (pVal < nodeVal && qVal < nodeVal) {
            node = node.left;
        } else {
            return node;
        }
    }
    
    return null;
}
```
**Time**: O(h), **Space**: O(1) iterative, O(h) recursive

---

### 299. Convert Sorted Array to BST
**Problem**: Build balanced BST from sorted array  
**Difficulty**: Easy  
**Pattern**: Divide and Conquer

```java
public TreeNode sortedArrayToBST(int[] nums) {
    return sortedArrayToBSTHelper(nums, 0, nums.length - 1);
}

private TreeNode sortedArrayToBSTHelper(int[] nums, int left, int right) {
    if (left > right) return null;
    
    int mid = left + (right - left) / 2;
    TreeNode root = new TreeNode(nums[mid]);
    
    root.left = sortedArrayToBSTHelper(nums, left, mid - 1);
    root.right = sortedArrayToBSTHelper(nums, mid + 1, right);
    
    return root;
}

// Convert sorted linked list to BST
public TreeNode sortedListToBST(ListNode head) {
    if (head == null) return null;
    
    return sortedListToBSTHelper(head, null);
}

private TreeNode sortedListToBSTHelper(ListNode head, ListNode tail) {
    if (head == tail) return null;
    
    ListNode slow = head;
    ListNode fast = head;
    
    // Find middle
    while (fast != tail && fast.next != tail) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    TreeNode root = new TreeNode(slow.val);
    root.left = sortedListToBSTHelper(head, slow);
    root.right = sortedListToBSTHelper(slow.next, tail);
    
    return root;
}
```
**Time**: O(n), **Space**: O(log n)

---

### 300. BST Iterator
**Problem**: Implement iterator for BST inorder traversal  
**Difficulty**: Medium  
**Pattern**: Stack-based Iteration

```java
import java.util.*;

class BSTIterator {
    private Stack<TreeNode> stack;
    
    public BSTIterator(TreeNode root) {
        stack = new Stack<>();
        pushAllLeft(root);
    }
    
    public int next() {
        TreeNode node = stack.pop();
        pushAllLeft(node.right);
        return node.val;
    }
    
    public boolean hasNext() {
        return !stack.isEmpty();
    }
    
    private void pushAllLeft(TreeNode node) {
        while (node != null) {
            stack.push(node);
            node = node.left;
        }
    }
}

// Two pointer BST iterator
class BSTIteratorTwoPointer {
    private List<Integer> inorderList;
    private int pointer;
    
    public BSTIteratorTwoPointer(TreeNode root) {
        inorderList = new ArrayList<>();
        pointer = 0;
        inorderTraversal(root);
    }
    
    private void inorderTraversal(TreeNode node) {
        if (node == null) return;
        
        inorderTraversal(node.left);
        inorderList.add(node.val);
        inorderTraversal(node.right);
    }
    
    public int next() {
        return inorderList.get(pointer++);
    }
    
    public boolean hasNext() {
        return pointer < inorderList.size();
    }
}
```
**Time**: O(1) amortized next(), **Space**: O(h)

---

### 301. Two Sum in BST
**Problem**: Find if pair with given sum exists in BST  
**Difficulty**: Easy  
**Pattern**: Two Pointers/HashSet

```java
import java.util.*;

public boolean findTarget(TreeNode root, int k) {
    Set<Integer> set = new HashSet<>();
    return findTargetHelper(root, k, set);
}

private boolean findTargetHelper(TreeNode node, int k, Set<Integer> set) {
    if (node == null) return false;
    
    if (set.contains(k - node.val)) {
        return true;
    }
    
    set.add(node.val);
    
    return findTargetHelper(node.left, k, set) || 
           findTargetHelper(node.right, k, set);
}

// Using inorder traversal + two pointers
public boolean findTargetTwoPointers(TreeNode root, int k) {
    List<Integer> inorder = new ArrayList<>();
    inorderTraversal(root, inorder);
    
    int left = 0, right = inorder.size() - 1;
    
    while (left < right) {
        int sum = inorder.get(left) + inorder.get(right);
        
        if (sum == k) {
            return true;
        } else if (sum < k) {
            left++;
        } else {
            right--;
        }
    }
    
    return false;
}

private void inorderTraversal(TreeNode node, List<Integer> inorder) {
    if (node == null) return;
    
    inorderTraversal(node.left, inorder);
    inorder.add(node.val);
    inorderTraversal(node.right, inorder);
}
```
**Time**: O(n), **Space**: O(n)

---

### 302. Kth Smallest Element in BST
**Problem**: Find kth smallest element in BST  
**Difficulty**: Medium  
**Pattern**: Inorder Traversal

```java
public int kthSmallest(TreeNode root, int k) {
    int[] result = new int[2]; // [count, value]
    kthSmallestHelper(root, k, result);
    return result[1];
}

private void kthSmallestHelper(TreeNode node, int k, int[] result) {
    if (node == null || result[0] >= k) return;
    
    kthSmallestHelper(node.left, k, result);
    
    result[0]++;
    if (result[0] == k) {
        result[1] = node.val;
        return;
    }
    
    kthSmallestHelper(node.right, k, result);
}

// Iterative approach
public int kthSmallestIterative(TreeNode root, int k) {
    Stack<TreeNode> stack = new Stack<>();
    TreeNode current = root;
    
    while (current != null || !stack.isEmpty()) {
        while (current != null) {
            stack.push(current);
            current = current.left;
        }
        
        current = stack.pop();
        k--;
        
        if (k == 0) {
            return current.val;
        }
        
        current = current.right;
    }
    
    return -1; // Should not reach here if k is valid
}

// If frequent kth queries, maintain node count
class TreeNodeWithCount {
    int val;
    int count; // Number of nodes in subtree
    TreeNodeWithCount left, right;
    
    TreeNodeWithCount(int val) {
        this.val = val;
        this.count = 1;
    }
}

public int kthSmallestWithCount(TreeNodeWithCount root, int k) {
    int leftCount = (root.left != null) ? root.left.count : 0;
    
    if (k <= leftCount) {
        return kthSmallestWithCount(root.left, k);
    } else if (k > leftCount + 1) {
        return kthSmallestWithCount(root.right, k - leftCount - 1);
    } else {
        return root.val;
    }
}
```
**Time**: O(h + k), **Space**: O(h)

---

### 303. Recover BST
**Problem**: Fix BST where two nodes are swapped  
**Difficulty**: Hard  
**Pattern**: Inorder with Anomaly Detection

```java
private TreeNode first = null;
private TreeNode second = null;
private TreeNode prev = null;

public void recoverTree(TreeNode root) {
    first = second = prev = null;
    inorderTraversal(root);
    
    // Swap the values
    int temp = first.val;
    first.val = second.val;
    second.val = temp;
}

private void inorderTraversal(TreeNode node) {
    if (node == null) return;
    
    inorderTraversal(node.left);
    
    if (prev != null && prev.val > node.val) {
        if (first == null) {
            first = prev;
        }
        second = node;
    }
    prev = node;
    
    inorderTraversal(node.right);
}

// Morris traversal for O(1) space
public void recoverTreeMorris(TreeNode root) {
    TreeNode first = null, second = null, prev = null;
    TreeNode current = root;
    
    while (current != null) {
        if (current.left == null) {
            // Process current node
            if (prev != null && prev.val > current.val) {
                if (first == null) first = prev;
                second = current;
            }
            prev = current;
            current = current.right;
        } else {
            TreeNode predecessor = current.left;
            while (predecessor.right != null && predecessor.right != current) {
                predecessor = predecessor.right;
            }
            
            if (predecessor.right == null) {
                predecessor.right = current;
                current = current.left;
            } else {
                predecessor.right = null;
                
                // Process current node
                if (prev != null && prev.val > current.val) {
                    if (first == null) first = prev;
                    second = current;
                }
                prev = current;
                current = current.right;
            }
        }
    }
    
    // Swap values
    if (first != null && second != null) {
        int temp = first.val;
        first.val = second.val;
        second.val = temp;
    }
}
```
**Time**: O(n), **Space**: O(h) recursive, O(1) Morris

---

## 🚀 Striver BST Questions

### S1. Ceil in BST
**Problem**: Find smallest element >= given value  
**Difficulty**: Easy  
**Pattern**: Modified Search

```java
public int findCeil(TreeNode root, int key) {
    int ceil = -1;
    
    while (root != null) {
        if (root.val == key) {
            return root.val;
        } else if (root.val > key) {
            ceil = root.val;
            root = root.left;
        } else {
            root = root.right;
        }
    }
    
    return ceil;
}

// Recursive approach
public int findCeilRecursive(TreeNode root, int key) {
    if (root == null) return -1;
    
    if (root.val == key) return root.val;
    
    if (root.val < key) {
        return findCeilRecursive(root.right, key);
    }
    
    int leftCeil = findCeilRecursive(root.left, key);
    return (leftCeil != -1) ? leftCeil : root.val;
}
```
**Time**: O(h), **Space**: O(1) iterative, O(h) recursive

---

### S2. Floor in BST
**Problem**: Find largest element <= given value  
**Difficulty**: Easy  
**Pattern**: Modified Search

```java
public int findFloor(TreeNode root, int key) {
    int floor = -1;
    
    while (root != null) {
        if (root.val == key) {
            return root.val;
        } else if (root.val < key) {
            floor = root.val;
            root = root.right;
        } else {
            root = root.left;
        }
    }
    
    return floor;
}

// Recursive approach
public int findFloorRecursive(TreeNode root, int key) {
    if (root == null) return -1;
    
    if (root.val == key) return root.val;
    
    if (root.val > key) {
        return findFloorRecursive(root.left, key);
    }
    
    int rightFloor = findFloorRecursive(root.right, key);
    return (rightFloor != -1) ? rightFloor : root.val;
}
```
**Time**: O(h), **Space**: O(1) iterative, O(h) recursive

---

### S3. Construct BST from Preorder
**Problem**: Build BST from preorder traversal  
**Difficulty**: Medium  
**Pattern**: Range-based Construction

```java
public TreeNode bstFromPreorder(int[] preorder) {
    return bstFromPreorderHelper(preorder, new int[]{0}, Integer.MIN_VALUE, Integer.MAX_VALUE);
}

private TreeNode bstFromPreorderHelper(int[] preorder, int[] index, int minVal, int maxVal) {
    if (index[0] >= preorder.length) return null;
    
    int val = preorder[index[0]];
    
    if (val < minVal || val > maxVal) return null;
    
    index[0]++;
    TreeNode root = new TreeNode(val);
    
    root.left = bstFromPreorderHelper(preorder, index, minVal, val);
    root.right = bstFromPreorderHelper(preorder, index, val, maxVal);
    
    return root;
}

// Using stack approach
public TreeNode bstFromPreorderStack(int[] preorder) {
    if (preorder.length == 0) return null;
    
    Stack<TreeNode> stack = new Stack<>();
    TreeNode root = new TreeNode(preorder[0]);
    stack.push(root);
    
    for (int i = 1; i < preorder.length; i++) {
        TreeNode current = new TreeNode(preorder[i]);
        TreeNode parent = null;
        
        while (!stack.isEmpty() && stack.peek().val < current.val) {
            parent = stack.pop();
        }
        
        if (parent != null) {
            parent.right = current;
        } else {
            stack.peek().left = current;
        }
        
        stack.push(current);
    }
    
    return root;
}
```
**Time**: O(n), **Space**: O(n)

---

### S4. Inorder Successor in BST
**Problem**: Find next node in inorder traversal  
**Difficulty**: Medium  
**Pattern**: BST Property + Parent Tracking

```java
public TreeNode inorderSuccessor(TreeNode root, TreeNode p) {
    TreeNode successor = null;
    
    while (root != null) {
        if (p.val >= root.val) {
            root = root.right;
        } else {
            successor = root;
            root = root.left;
        }
    }
    
    return successor;
}

// If nodes have parent pointers
class TreeNodeWithParent {
    int val;
    TreeNodeWithParent left, right, parent;
    
    TreeNodeWithParent(int val) {
        this.val = val;
    }
}

public TreeNodeWithParent inorderSuccessorWithParent(TreeNodeWithParent p) {
    // Case 1: Right subtree exists
    if (p.right != null) {
        TreeNodeWithParent current = p.right;
        while (current.left != null) {
            current = current.left;
        }
        return current;
    }
    
    // Case 2: Go up until we find a node that is left child of its parent
    TreeNodeWithParent current = p;
    while (current.parent != null && current == current.parent.right) {
        current = current.parent;
    }
    
    return current.parent;
}

// Inorder predecessor
public TreeNode inorderPredecessor(TreeNode root, TreeNode p) {
    TreeNode predecessor = null;
    
    while (root != null) {
        if (p.val <= root.val) {
            root = root.left;
        } else {
            predecessor = root;
            root = root.right;
        }
    }
    
    return predecessor;
}
```
**Time**: O(h), **Space**: O(1)

---

### S5. BST from Inorder
**Problem**: Construct any BST from sorted inorder  
**Difficulty**: Easy  
**Pattern**: Divide and Conquer

```java
public TreeNode constructBSTFromInorder(int[] inorder) {
    return constructBSTHelper(inorder, 0, inorder.length - 1);
}

private TreeNode constructBSTHelper(int[] inorder, int start, int end) {
    if (start > end) return null;
    
    int mid = start + (end - start) / 2;
    TreeNode root = new TreeNode(inorder[mid]);
    
    root.left = constructBSTHelper(inorder, start, mid - 1);
    root.right = constructBSTHelper(inorder, mid + 1, end);
    
    return root;
}

// Construct balanced BST with minimum height
public TreeNode constructBalancedBST(int[] inorder) {
    return constructBSTHelper(inorder, 0, inorder.length - 1);
}
```
**Time**: O(n), **Space**: O(log n)

---

## 📈 Summary

### Key BST Patterns Mastered:
1. **Search Operations** - Recursive and iterative approaches
2. **Insertion/Deletion** - Maintaining BST property
3. **Validation** - Range checking and inorder verification
4. **Construction** - From sorted arrays and traversals
5. **Iterator Pattern** - Stack-based inorder iteration

### Important Algorithms:
- **BST Property Usage** - Left < Root < Right for efficient operations
- **Inorder Traversal** - Always gives sorted sequence
- **Range Validation** - For BST validation with min/max bounds
- **Morris Traversal** - O(1) space tree traversal

### Common Patterns:
- **Binary Search Logic** - Compare and go left/right
- **Three Cases for Deletion** - Leaf, one child, two children
- **Stack for Iteration** - Simulating recursion
- **Range Tracking** - For validation and construction

### Performance Considerations:
- **Balanced Trees** - O(log n) operations vs O(n) for skewed
- **Space Optimization** - Iterative vs recursive approaches
- **Cache Locality** - Tree structure affects memory access
- **Self-Balancing** - AVL, Red-Black for guaranteed performance

### Next Steps:
- Learn about self-balancing BSTs (AVL, Red-Black)
- Practice with more complex BST problems
- Move to Heap and Priority Queue problems
- Study Graph algorithms

---
*This completes all major BST problems with detailed Java solutions and comprehensive theory explanations.*
