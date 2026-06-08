# Tree Practice Questions

## Easy Level Questions

### 1. Maximum Depth of Binary Tree
**Problem:** Find the maximum depth (height) of a binary tree.

**Example:**
```
Input:
    3
   / \
  9  20
    /  \
   15   7
Output: 3
```

**Approach:**
1. Use recursion to calculate the height of the tree
2. The height of an empty tree is 0
3. The height of a non-empty tree is 1 + the maximum of the heights of its left and right subtrees

**Solution:**
```java
public int maxDepth(TreeNode root) {
    if (root == null) {
        return 0;
    }
    
    int leftDepth = maxDepth(root.left);
    int rightDepth = maxDepth(root.right);
    
    return Math.max(leftDepth, rightDepth) + 1;
}
```

**Time Complexity:** O(n) where n is the number of nodes in the tree  
**Space Complexity:** O(h) where h is the height of the tree (due to recursion stack)

### 2. Invert Binary Tree
**Problem:** Invert a binary tree (mirror it).

**Example:**
```
Input:
     4
   /   \
  2     7
 / \   / \
1   3 6   9

Output:
     4
   /   \
  7     2
 / \   / \
9   6 3   1
```

**Approach:**
1. Use recursion to invert the tree
2. For each node, swap its left and right children
3. Recursively invert the left and right subtrees

**Solution:**
```java
public TreeNode invertTree(TreeNode root) {
    if (root == null) {
        return null;
    }
    
    // Swap the children
    TreeNode temp = root.left;
    root.left = root.right;
    root.right = temp;
    
    // Recursively invert the subtrees
    invertTree(root.left);
    invertTree(root.right);
    
    return root;
}
```

**Time Complexity:** O(n) where n is the number of nodes in the tree  
**Space Complexity:** O(h) where h is the height of the tree (due to recursion stack)

### 3. Same Tree
**Problem:** Check if two binary trees are identical.

**Example:**
```
Input:
Tree 1:   1      Tree 2:   1
         / \             / \
        2   3           2   3
Output: true
```

**Approach:**
1. Use recursion to compare the trees
2. Two trees are identical if:
   - Both are null, or
   - Both have the same value and their left and right subtrees are identical

**Solution:**
```java
public boolean isSameTree(TreeNode p, TreeNode q) {
    // If both trees are empty, they are identical
    if (p == null && q == null) {
        return true;
    }
    
    // If one tree is empty and the other is not, they are not identical
    if (p == null || q == null) {
        return false;
    }
    
    // Check if the current nodes have the same value and their subtrees are identical
    return (p.val == q.val) && 
           isSameTree(p.left, q.left) && 
           isSameTree(p.right, q.right);
}
```

**Time Complexity:** O(n) where n is the number of nodes in the smaller tree  
**Space Complexity:** O(h) where h is the height of the tree (due to recursion stack)

### 4. Path Sum
**Problem:** Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

**Example:**
```
Input:
      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
sum = 22
Output: true (5 + 4 + 11 + 2 = 22)
```

**Approach:**
1. Use recursion to check if there is a path with the given sum
2. For each node, subtract its value from the sum
3. If we reach a leaf node and the remaining sum is 0, return true
4. Otherwise, recursively check the left and right subtrees

**Solution:**
```java
public boolean hasPathSum(TreeNode root, int sum) {
    if (root == null) {
        return false;
    }
    
    // If it's a leaf node, check if the remaining sum equals the node's value
    if (root.left == null && root.right == null) {
        return sum == root.val;
    }
    
    // Recursively check the left and right subtrees with the reduced sum
    return hasPathSum(root.left, sum - root.val) || 
           hasPathSum(root.right, sum - root.val);
}
```

**Time Complexity:** O(n) where n is the number of nodes in the tree  
**Space Complexity:** O(h) where h is the height of the tree (due to recursion stack)

### 5. Symmetric Tree
**Problem:** Check if a binary tree is symmetric (mirror image of itself).

**Example:**
```
Input:
    1
   / \
  2   2
 / \ / \
3  4 4  3
Output: true
```

**Approach:**
1. A tree is symmetric if its left subtree is a mirror reflection of its right subtree
2. Use recursion to check if two subtrees are mirrors of each other
3. Two subtrees are mirrors if:
   - Their root values are the same
   - The left subtree of one is the mirror of the right subtree of the other

**Solution:**
```java
public boolean isSymmetric(TreeNode root) {
    if (root == null) {
        return true;
    }
    
    return isMirror(root.left, root.right);
}

private boolean isMirror(TreeNode left, TreeNode right) {
    // If both subtrees are empty, they are mirrors
    if (left == null && right == null) {
        return true;
    }
    
    // If one subtree is empty and the other is not, they are not mirrors
    if (left == null || right == null) {
        return false;
    }
    
    // Check if the values are the same and the subtrees are mirrors
    return (left.val == right.val) && 
           isMirror(left.left, right.right) && 
           isMirror(left.right, right.left);
}
```

**Time Complexity:** O(n) where n is the number of nodes in the tree  
**Space Complexity:** O(h) where h is the height of the tree (due to recursion stack)

## Medium Level Questions

### 6. Binary Tree Level Order Traversal
**Problem:** Given a binary tree, return the level order traversal of its nodes' values (i.e., from left to right, level by level).

**Example:**
```
Input:
    3
   / \
  9  20
    /  \
   15   7
Output: [[3], [9, 20], [15, 7]]
```

**Approach:**
1. Use BFS (Breadth-First Search) with a queue
2. For each level, process all nodes at that level before moving to the next level
3. Keep track of the level size to separate levels in the result

**Solution:**
```java
public List<List<Integer>> levelOrder(TreeNode root) {
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

**Time Complexity:** O(n) where n is the number of nodes in the tree  
**Space Complexity:** O(n) in the worst case (for a complete binary tree, the last level can have n/2 nodes)

### 7. Validate Binary Search Tree
**Problem:** Determine if a binary tree is a valid binary search tree (BST).

**Example:**
```
Input:
    2
   / \
  1   3
Output: true

Input:
    5
   / \
  1   4
     / \
    3   6
Output: false (The value 3 is less than 5 but is in the right subtree)
```

**Approach:**
1. Use recursion with range checking
2. For each node, check if its value is within the valid range
3. For the left subtree, the upper bound is the parent's value
4. For the right subtree, the lower bound is the parent's value

**Solution:**
```java
public boolean isValidBST(TreeNode root) {
    return isValidBST(root, Long.MIN_VALUE, Long.MAX_VALUE);
}

private boolean isValidBST(TreeNode root, long minVal, long maxVal) {
    if (root == null) {
        return true;
    }
    
    // Check if the current node's value is within the valid range
    if (root.val <= minVal || root.val >= maxVal) {
        return false;
    }
    
    // Recursively check the left and right subtrees with updated ranges
    return isValidBST(root.left, minVal, root.val) && 
           isValidBST(root.right, root.val, maxVal);
}
```

**Time Complexity:** O(n) where n is the number of nodes in the tree  
**Space Complexity:** O(h) where h is the height of the tree (due to recursion stack)

### 8. Lowest Common Ancestor of a Binary Tree
**Problem:** Find the lowest common ancestor (LCA) of two given nodes in a binary tree.

**Example:**
```
Input:
        3
       / \
      5   1
     / \ / \
    6  2 0  8
      / \
     7   4
p = 5, q = 1
Output: 3

p = 5, q = 4
Output: 5
```

**Approach:**
1. Use recursion to find the LCA
2. If the current node is one of the target nodes, it is the LCA
3. Recursively search for the nodes in the left and right subtrees
4. If both nodes are found in different subtrees, the current node is the LCA
5. If both nodes are found in the same subtree, the LCA is in that subtree

**Solution:**
```java
public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
    if (root == null || root == p || root == q) {
        return root;
    }
    
    TreeNode left = lowestCommonAncestor(root.left, p, q);
    TreeNode right = lowestCommonAncestor(root.right, p, q);
    
    // If both left and right are non-null, root is the LCA
    if (left != null && right != null) {
        return root;
    }
    
    // Otherwise, return the non-null value
    return (left != null) ? left : right;
}
```

**Time Complexity:** O(n) where n is the number of nodes in the tree  
**Space Complexity:** O(h) where h is the height of the tree (due to recursion stack)

### 9. Binary Tree Right Side View
**Problem:** Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

**Example:**
```
Input:
    1
   / \
  2   3
   \   \
    5   4
Output: [1, 3, 4]
```

**Approach:**
1. Use BFS (level order traversal)
2. For each level, add the rightmost node's value to the result
3. Process nodes from left to right, so the last node processed at each level is the rightmost node

**Solution:**
```java
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

**Time Complexity:** O(n) where n is the number of nodes in the tree  
**Space Complexity:** O(d) where d is the maximum width of the tree

### 10. Construct Binary Tree from Preorder and Inorder Traversal
**Problem:** Given preorder and inorder traversal of a tree, construct the binary tree.

**Example:**
```
Input:
preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
Output:
    3
   / \
  9  20
    /  \
   15   7
```

**Approach:**
1. The first element in preorder is the root
2. Find the position of the root in inorder to determine the size of left and right subtrees
3. Recursively build the left and right subtrees

**Solution:**
```java
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

**Time Complexity:** O(n) where n is the number of nodes in the tree  
**Space Complexity:** O(n) for the recursion stack and the map to store inorder indices

## Hard Level Questions

### 11. Serialize and Deserialize Binary Tree
**Problem:** Design an algorithm to serialize and deserialize a binary tree.

**Example:**
```
Input:
    1
   / \
  2   3
     / \
    4   5
Output: Serialized string representation of the tree
```

**Approach:**
1. For serialization, use preorder traversal and mark null nodes with a special character
2. For deserialization, reconstruct the tree using the preorder sequence

**Solution:**
```java
public class Codec {
    private static final String NULL_MARKER = "X";
    private static final String SEPARATOR = ",";
    
    // Encodes a tree to a single string.
    public String serialize(TreeNode root) {
        StringBuilder sb = new StringBuilder();
        serializeHelper(root, sb);
        return sb.toString();
    }
    
    private void serializeHelper(TreeNode root, StringBuilder sb) {
        if (root == null) {
            sb.append(NULL_MARKER).append(SEPARATOR);
            return;
        }
        
        sb.append(root.val).append(SEPARATOR);
        serializeHelper(root.left, sb);
        serializeHelper(root.right, sb);
    }
    
    // Decodes your encoded data to tree.
    public TreeNode deserialize(String data) {
        Queue<String> nodes = new LinkedList<>(Arrays.asList(data.split(SEPARATOR)));
        return deserializeHelper(nodes);
    }
    
    private TreeNode deserializeHelper(Queue<String> nodes) {
        String val = nodes.poll();
        
        if (val.equals(NULL_MARKER)) {
            return null;
        }
        
        TreeNode root = new TreeNode(Integer.parseInt(val));
        root.left = deserializeHelper(nodes);
        root.right = deserializeHelper(nodes);
        
        return root;
    }
}
```

**Time Complexity:** O(n) for both serialization and deserialization, where n is the number of nodes in the tree  
**Space Complexity:** O(n) for both operations

### 12. Binary Tree Maximum Path Sum
**Problem:** Find the maximum path sum in a binary tree. The path may start and end at any node in the tree.

**Example:**
```
Input:
    1
   / \
  2   3
Output: 6 (1 + 2 + 3)

Input:
   -10
   / \
  9  20
    /  \
   15   7
Output: 42 (20 + 15 + 7)
```

**Approach:**
1. Use recursion to find the maximum path sum
2. For each node, calculate the maximum path sum that includes the node
3. Update the global maximum path sum
4. Return the maximum path sum that can be extended to the parent

**Solution:**
```java
public class Solution {
    private int maxSum = Integer.MIN_VALUE;
    
    public int maxPathSum(TreeNode root) {
        maxGain(root);
        return maxSum;
    }
    
    private int maxGain(TreeNode node) {
        if (node == null) {
            return 0;
        }
        
        // Calculate the maximum path sum for left and right subtrees
        // If the path sum is negative, we don't include it
        int leftGain = Math.max(maxGain(node.left), 0);
        int rightGain = Math.max(maxGain(node.right), 0);
        
        // Calculate the maximum path sum that includes the current node
        int pathSum = node.val + leftGain + rightGain;
        
        // Update the global maximum path sum
        maxSum = Math.max(maxSum, pathSum);
        
        // Return the maximum path sum that can be extended to the parent
        return node.val + Math.max(leftGain, rightGain);
    }
}
```

**Time Complexity:** O(n) where n is the number of nodes in the tree  
**Space Complexity:** O(h) where h is the height of the tree (due to recursion stack)

### 13. Recover Binary Search Tree
**Problem:** Two elements of a binary search tree (BST) are swapped by mistake. Recover the tree without changing its structure.

**Example:**
```
Input:
    1
   /
  3
   \
    2
Output:
    3
   /
  1
   \
    2
```

**Approach:**
1. Perform an inorder traversal of the BST
2. In a correct BST, inorder traversal should give nodes in ascending order
3. Find the two nodes that are out of order
4. Swap the values of these two nodes

**Solution:**
```java
public class Solution {
    private TreeNode first = null;
    private TreeNode second = null;
    private TreeNode prev = new TreeNode(Integer.MIN_VALUE);
    
    public void recoverTree(TreeNode root) {
        // Find the two swapped nodes
        inorder(root);
        
        // Swap the values
        int temp = first.val;
        first.val = second.val;
        second.val = temp;
    }
    
    private void inorder(TreeNode root) {
        if (root == null) {
            return;
        }
        
        inorder(root.left);
        
        // Check if the current node is out of order
        if (first == null && prev.val > root.val) {
            first = prev;
        }
        
        if (first != null && prev.val > root.val) {
            second = root;
        }
        
        prev = root;
        
        inorder(root.right);
    }
}
```

**Time Complexity:** O(n) where n is the number of nodes in the tree  
**Space Complexity:** O(h) where h is the height of the tree (due to recursion stack)

### 14. Count of Smaller Numbers After Self
**Problem:** Given an integer array nums, return a new counts array. The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].

**Example:**
```
Input: nums = [5,2,6,1]
Output: [2,1,1,0]
Explanation:
To the right of 5 there are 2 smaller elements (2 and 1).
To the right of 2 there is only 1 smaller element (1).
To the right of 6 there is 1 smaller element (1).
To the right of 1 there is 0 smaller element.
```

**Approach:**
1. Use a Binary Search Tree (BST) to keep track of the count of smaller elements
2. Process the array from right to left
3. For each element, insert it into the BST and count the number of nodes smaller than it

**Solution:**
```java
public class Solution {
    private class Node {
        int val;
        int count; // Number of nodes in the left subtree
        int dup;   // Number of duplicates
        Node left;
        Node right;
        
        Node(int val) {
            this.val = val;
            this.count = 0;
            this.dup = 1;
        }
    }
    
    public List<Integer> countSmaller(int[] nums) {
        Integer[] result = new Integer[nums.length];
        Node root = null;
        
        // Process the array from right to left
        for (int i = nums.length - 1; i >= 0; i--) {
            root = insert(root, nums[i], result, i, 0);
        }
        
        return Arrays.asList(result);
    }
    
    private Node insert(Node root, int val, Integer[] result, int index, int count) {
        if (root == null) {
            root = new Node(val);
            result[index] = count;
            return root;
        }
        
        if (root.val == val) {
            root.dup++;
            result[index] = count + root.count;
            return root;
        } else if (val < root.val) {
            root.count++;
            root.left = insert(root.left, val, result, index, count);
        } else {
            root.right = insert(root.right, val, result, index, count + root.count + root.dup);
        }
        
        return root;
    }
}
```

**Time Complexity:** O(n log n) on average, O(n²) in the worst case where n is the length of the array  
**Space Complexity:** O(n) for the BST

### 15. Vertical Order Traversal of a Binary Tree
**Problem:** Given a binary tree, return the vertical order traversal of its nodes values.

**Example:**
```
Input:
    3
   / \
  9  20
    /  \
   15   7
Output: [[9], [3, 15], [20], [7]]
```

**Approach:**
1. Assign a horizontal distance to each node (root has distance 0, left child has distance-1, right child has distance+1)
2. Use BFS to traverse the tree level by level
3. Group nodes by their horizontal distance
4. Sort nodes with the same horizontal distance by their values

**Solution:**
```java
public class Solution {
    public List<List<Integer>> verticalTraversal(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();
        if (root == null) {
            return result;
        }
        
        // Map to store nodes at each horizontal distance
        Map<Integer, List<int[]>> map = new TreeMap<>();
        
        // Queue for BFS
        Queue<Object[]> queue = new LinkedList<>();
        queue.offer(new Object[]{root, 0, 0}); // [node, horizontal distance, level]
        
        while (!queue.isEmpty()) {
            Object[] curr = queue.poll();
            TreeNode node = (TreeNode) curr[0];
            int hd = (int) curr[1];
            int level = (int) curr[2];
            
            // Add node to the map
            if (!map.containsKey(hd)) {
                map.put(hd, new ArrayList<>());
            }
            map.get(hd).add(new int[]{node.val, level});
            
            // Add children to the queue
            if (node.left != null) {
                queue.offer(new Object[]{node.left, hd - 1, level + 1});
            }
            if (node.right != null) {
                queue.offer(new Object[]{node.right, hd + 1, level + 1});
            }
        }
        
        // Sort nodes at each horizontal distance by level and value
        for (List<int[]> nodes : map.values()) {
            nodes.sort((a, b) -> {
                if (a[1] != b[1]) {
                    return a[1] - b[1]; // Sort by level
                }
                return a[0] - b[0]; // Sort by value
            });
            
            List<Integer> values = new ArrayList<>();
            for (int[] node : nodes) {
                values.add(node[0]);
            }
            result.add(values);
        }
        
        return result;
    }
}
```

**Time Complexity:** O(n log n) where n is the number of nodes in the tree  
**Space Complexity:** O(n) for the queue and the map

## Learning Strategy for Tree Problems

1. **Master the traversals**: Inorder, preorder, postorder, level order
2. **Understand recursion**: Most tree problems can be solved recursively
3. **Learn common patterns**:
   - DFS for path-related problems
   - BFS for level-related problems
   - Bottom-up recursion for problems that require information from subtrees
   - Top-down recursion for problems that pass information down the tree
4. **Practice by category**:
   - Binary Tree problems
   - Binary Search Tree problems
   - Tree construction problems
   - Advanced tree problems (Trie, Segment Tree)
5. **Implement from scratch**: Don't memorize solutions, understand the approach

## Additional Resources

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