# 🌳 Trees - Quick Concepts & Practice

## 🎯 Quick Concepts

### **Definition**
- Hierarchical data structure
- Root node with child nodes
- No cycles, connected graph

### **Types**
- **Binary Tree:** Max 2 children per node
- **Binary Search Tree:** Left < Root < Right
- **Balanced Tree:** AVL, Red-Black
- **Heap:** Min-heap, Max-heap

### **Traversal Methods**
- **DFS:** Preorder, Inorder, Postorder
- **BFS:** Level order traversal
- **Morris:** Inorder without stack/recursion

### **Time Complexities**
- **Access/Search:** O(log n) for BST, O(n) for BT
- **Insert/Delete:** O(log n) for BST, O(n) for BT
- **Traversal:** O(n) for all

### **Common Patterns**
1. **Recursion:** Most tree problems
2. **DFS Stack:** Iterative traversal
3. **BFS Queue:** Level order
4. **Parent Pointers:** LCA, Path problems

---

## 🧠 Practice Questions

### **Easy Level**

#### 1. Maximum Depth
**Problem:** Find maximum depth of binary tree
```java
public int maxDepth(TreeNode root) {
    if(root == null) return 0;
    int left = maxDepth(root.left);
    int right = maxDepth(root.right);
    return Math.max(left, right) + 1;
}
```

#### 2. Same Tree
**Problem:** Check if two trees are identical
```java
public boolean isSameTree(TreeNode p, TreeNode q) {
    if(p == null && q == null) return true;
    if(p == null || q == null) return false;
    if(p.val != q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
```

#### 3. Invert Binary Tree
**Problem:** Mirror the binary tree
```java
public TreeNode invertTree(TreeNode root) {
    if(root == null) return null;
    TreeNode left = invertTree(root.left);
    TreeNode right = invertTree(root.right);
    root.left = right;
    root.right = left;
    return root;
}
```

### **Medium Level**

#### 4. Lowest Common Ancestor
**Problem:** Find LCA of two nodes in BST
```java
public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
    if(root == null) return null;
    if(root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q);
    }
    if(root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q);
    }
    return root;
}
```

#### 5. Validate BST
**Problem:** Check if tree is valid BST
```java
public boolean isValidBST(TreeNode root) {
    return isValidBST(root, null, null);
}

private boolean isValidBST(TreeNode node, Integer min, Integer max) {
    if(node == null) return true;
    if((min != null && node.val <= min) || (max != null && node.val >= max)) {
        return false;
    }
    return isValidBST(node.left, min, node.val) && 
           isValidBST(node.right, node.val, max);
}
```

### **Hard Level**

#### 6. Serialize and Deserialize
**Problem:** Convert tree to string and back
```java
// Encodes a tree to a single string.
public String serialize(TreeNode root) {
    StringBuilder sb = new StringBuilder();
    serializeHelper(root, sb);
    return sb.toString();
}

private void serializeHelper(TreeNode node, StringBuilder sb) {
    if(node == null) {
        sb.append("null,");
        return;
    }
    sb.append(node.val).append(",");
    serializeHelper(node.left, sb);
    serializeHelper(node.right, sb);
}

// Decodes your encoded data to tree.
public TreeNode deserialize(String data) {
    String[] nodes = data.split(",");
    return deserializeHelper(new int[]{0}, nodes);
}

private TreeNode deserializeHelper(int[] index, String[] nodes) {
    if(nodes[index[0]].equals("null")) {
        index[0]++;
        return null;
    }
    TreeNode node = new TreeNode(Integer.parseInt(nodes[index[0]++]));
    node.left = deserializeHelper(index, nodes);
    node.right = deserializeHelper(index, nodes);
    return node;
}
```

---

## 📈 Important Tree Algorithms

### **Tree Traversals**
```java
// Preorder: Root -> Left -> Right
public void preorder(TreeNode root) {
    if(root == null) return;
    System.out.print(root.val + " ");
    preorder(root.left);
    preorder(root.right);
}

// Inorder: Left -> Root -> Right
public void inorder(TreeNode root) {
    if(root == null) return;
    inorder(root.left);
    System.out.print(root.val + " ");
    inorder(root.right);
}

// Postorder: Left -> Right -> Root
public void postorder(TreeNode root) {
    if(root == null) return;
    postorder(root.left);
    postorder(root.right);
    System.out.print(root.val + " ");
}

// Level Order (BFS)
public void levelOrder(TreeNode root) {
    if(root == null) return;
    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);
    while(!queue.isEmpty()) {
        TreeNode node = queue.poll();
        System.out.print(node.val + " ");
        if(node.left != null) queue.offer(node.left);
        if(node.right != null) queue.offer(node.right);
    }
}
```

### **Binary Search Tree Operations**
```java
// Search in BST
public TreeNode searchBST(TreeNode root, int val) {
    if(root == null || root.val == val) return root;
    if(val < root.val) return searchBST(root.left, val);
    return searchBST(root.right, val);
}

// Insert in BST
public TreeNode insertIntoBST(TreeNode root, int val) {
    if(root == null) return new TreeNode(val);
    if(val < root.val) root.left = insertIntoBST(root.left, val);
    else root.right = insertIntoBST(root.right, val);
    return root;
}

// Delete in BST
public TreeNode deleteNode(TreeNode root, int key) {
    if(root == null) return null;
    if(key < root.val) root.left = deleteNode(root.left, key);
    else if(key > root.val) root.right = deleteNode(root.right, key);
    else {
        if(root.left == null) return root.right;
        if(root.right == null) return root.left;
        // Find inorder successor
        TreeNode successor = findMin(root.right);
        root.val = successor.val;
        root.right = deleteNode(root.right, successor.val);
    }
    return root;
}
```

---

## 🎯 Practice Tips

1. **Recursion Base Cases:**
   - Null node checks
   - Single node trees
   - Leaf nodes

2. **Traversal Choice:**
   - Inorder for BST (sorted order)
   - Preorder for copying tree
   - Postorder for deletion
   - Level order for breadth-first

3. **Edge Cases:**
   - Empty tree
   - Single node
   - Left/right skewed trees
   - Complete binary tree

4. **Time/Space Analysis:**
   - Recursion stack space
   - Iterative vs recursive
   - Balanced vs unbalanced

---

## 📚 Recommended Problems
- LeetCode: 94, 95, 96, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 116, 117, 124, 129, 144, 145, 173, 199, 222, 226, 230, 235, 236, 257, 297, 314, 331, 337, 404, 429, 437, 449, 450, 501, 508, 513, 515, 530, 538, 543, 545, 563, 572, 606, 617, 623, 637, 653, 654, 655, 662, 663, 666, 669, 671, 687, 700, 701, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999