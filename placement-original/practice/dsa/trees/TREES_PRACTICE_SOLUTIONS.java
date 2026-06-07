package practice.dsa.trees;

/**
 * TREES PRACTICE SOLUTIONS
 * Complete collection of tree problems with solutions
 * Difficulty: Easy → Medium → Hard
 */

import java.util.*;

// Tree Node class
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) { val = x; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

public class TREES_PRACTICE_SOLUTIONS {

    // ==========================================
    // EASY LEVEL PROBLEMS
    // ==========================================

    /**
     * Problem 1: Maximum Depth of Binary Tree
     * Time: O(n), Space: O(h) - h is height of tree
     */
    public static int maxDepth(TreeNode root) {
        if (root == null) return 0;
        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
    }

    /**
     * Problem 2: Same Tree
     * Time: O(n), Space: O(h)
     */
    public static boolean isSameTree(TreeNode p, TreeNode q) {
        if (p == null && q == null) return true;
        if (p == null || q == null) return false;
        if (p.val != q.val) return false;
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }

    /**
     * Problem 3: Invert Binary Tree
     * Time: O(n), Space: O(h)
     */
    public static TreeNode invertTree(TreeNode root) {
        if (root == null) return null;

        TreeNode temp = root.left;
        root.left = root.right;
        root.right = temp;

        invertTree(root.left);
        invertTree(root.right);
        return root;
    }

    /**
     * Problem 4: Symmetric Tree
     * Time: O(n), Space: O(h)
     */
    public static boolean isSymmetric(TreeNode root) {
        return isMirror(root, root);
    }

    private static boolean isMirror(TreeNode t1, TreeNode t2) {
        if (t1 == null && t2 == null) return true;
        if (t1 == null || t2 == null) return false;
        return (t1.val == t2.val)
            && isMirror(t1.right, t2.left)
            && isMirror(t1.left, t2.right);
    }

    /**
     * Problem 5: Path Sum
     * Time: O(n), Space: O(h)
     */
    public static boolean hasPathSum(TreeNode root, int targetSum) {
        if (root == null) return false;
        if (root.left == null && root.right == null) {
            return root.val == targetSum;
        }
        return hasPathSum(root.left, targetSum - root.val) ||
               hasPathSum(root.right, targetSum - root.val);
    }

    /**
     * Problem 6: Binary Tree Paths
     * Time: O(n), Space: O(h)
     */
    public static List<String> binaryTreePaths(TreeNode root) {
        List<String> paths = new ArrayList<>();
        if (root != null) {
            binaryTreePathsHelper(root, "", paths);
        }
        return paths;
    }

    private static void binaryTreePathsHelper(TreeNode node, String path, List<String> paths) {
        path += node.val;
        if (node.left == null && node.right == null) {
            paths.add(path);
        } else {
            path += "->";
            if (node.left != null) {
                binaryTreePathsHelper(node.left, path, paths);
            }
            if (node.right != null) {
                binaryTreePathsHelper(node.right, path, paths);
            }
        }
    }

    // ==========================================
    // MEDIUM LEVEL PROBLEMS
    // ==========================================

    /**
     * Problem 7: Binary Tree Level Order Traversal
     * Time: O(n), Space: O(w) - w is maximum width
     */
    public static List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();
        if (root == null) return result;

        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);

        while (!queue.isEmpty()) {
            int levelSize = queue.size();
            List<Integer> level = new ArrayList<>();

            for (int i = 0; i < levelSize; i++) {
                TreeNode node = queue.poll();
                level.add(node.val);

                if (node.left != null) queue.offer(node.left);
                if (node.right != null) queue.offer(node.right);
            }
            result.add(level);
        }
        return result;
    }

    /**
     * Problem 8: Validate Binary Search Tree
     * Time: O(n), Space: O(h)
     */
    public static boolean isValidBST(TreeNode root) {
        return isValidBSTHelper(root, null, null);
    }

    private static boolean isValidBSTHelper(TreeNode node, Integer min, Integer max) {
        if (node == null) return true;
        if ((min != null && node.val <= min) || (max != null && node.val >= max)) {
            return false;
        }
        return isValidBSTHelper(node.left, min, node.val) &&
               isValidBSTHelper(node.right, node.val, max);
    }

    /**
     * Problem 9: Lowest Common Ancestor of a Binary Search Tree
     * Time: O(h), Space: O(1)
     */
    public static TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if (root == null) return null;

        // If both p and q are greater than root, LCA is in right subtree
        if (p.val > root.val && q.val > root.val) {
            return lowestCommonAncestor(root.right, p, q);
        }
        // If both p and q are lesser than root, LCA is in left subtree
        if (p.val < root.val && q.val < root.val) {
            return lowestCommonAncestor(root.left, p, q);
        }
        // We have found the split point, i.e. the LCA node
        return root;
    }

    /**
     * Problem 10: Kth Smallest Element in a BST
     * Time: O(h + k), Space: O(h)
     */
    public static int kthSmallest(TreeNode root, int k) {
        Stack<TreeNode> stack = new Stack<>();
        TreeNode curr = root;
        int count = 0;

        while (curr != null || !stack.isEmpty()) {
            while (curr != null) {
                stack.push(curr);
                curr = curr.left;
            }

            curr = stack.pop();
            count++;
            if (count == k) return curr.val;

            curr = curr.right;
        }
        return -1; // Should not reach here if k is valid
    }

    // ==========================================
    // HARD LEVEL PROBLEMS
    // ==========================================

    /**
     * Problem 11: Binary Tree Maximum Path Sum
     * Time: O(n), Space: O(h)
     */
    private static int maxPathSum = Integer.MIN_VALUE;

    public static int maxPathSum(TreeNode root) {
        maxPathSum = Integer.MIN_VALUE;
        maxPathSumHelper(root);
        return maxPathSum;
    }

    private static int maxPathSumHelper(TreeNode node) {
        if (node == null) return 0;

        int left = Math.max(0, maxPathSumHelper(node.left));
        int right = Math.max(0, maxPathSumHelper(node.right));

        int currentPathSum = node.val + left + right;
        maxPathSum = Math.max(maxPathSum, currentPathSum);

        return node.val + Math.max(left, right);
    }

    /**
     * Problem 12: Serialize and Deserialize Binary Tree
     * Time: O(n), Space: O(n)
     */
    public static class Codec {

        // Encodes a tree to a single string.
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

        // Decodes your encoded data to tree.
        public TreeNode deserialize(String data) {
            String[] nodes = data.split(",");
            int[] index = {0};
            return deserializeHelper(nodes, index);
        }

        private TreeNode deserializeHelper(String[] nodes, int[] index) {
            if (nodes[index[0]].equals("null")) {
                index[0]++;
                return null;
            }

            TreeNode node = new TreeNode(Integer.parseInt(nodes[index[0]]));
            index[0]++;
            node.left = deserializeHelper(nodes, index);
            node.right = deserializeHelper(nodes, index);
            return node;
        }
    }

    /**
     * Problem 13: Binary Tree Right Side View
     * Time: O(n), Space: O(w)
     */
    public static List<Integer> rightSideView(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        if (root == null) return result;

        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);

        while (!queue.isEmpty()) {
            int levelSize = queue.size();

            for (int i = 0; i < levelSize; i++) {
                TreeNode node = queue.poll();

                // Add the last node of each level to result
                if (i == levelSize - 1) {
                    result.add(node.val);
                }

                if (node.left != null) queue.offer(node.left);
                if (node.right != null) queue.offer(node.right);
            }
        }
        return result;
    }

    /**
     * Problem 14: Count Complete Tree Nodes
     * Time: O(log n * log n), Space: O(log n)
     */
    public static int countNodes(TreeNode root) {
        if (root == null) return 0;

        int leftHeight = getHeight(root.left);
        int rightHeight = getHeight(root.right);

        if (leftHeight == rightHeight) {
            // Left subtree is complete
            return (1 << leftHeight) + countNodes(root.right);
        } else {
            // Right subtree is complete
            return (1 << rightHeight) + countNodes(root.left);
        }
    }

    private static int getHeight(TreeNode node) {
        if (node == null) return 0;
        return 1 + getHeight(node.left);
    }

    // ==========================================
    // UTILITY METHODS
    // ==========================================

    public static void printTree(TreeNode root) {
        printTreeHelper(root, 0);
    }

    private static void printTreeHelper(TreeNode node, int level) {
        if (node == null) return;

        printTreeHelper(node.right, level + 1);

        for (int i = 0; i < level; i++) {
            System.out.print("    ");
        }
        System.out.println(node.val);

        printTreeHelper(node.left, level + 1);
    }

    public static TreeNode createTree(Integer[] arr) {
        if (arr.length == 0 || arr[0] == null) return null;

        TreeNode root = new TreeNode(arr[0]);
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);

        int i = 1;
        while (i < arr.length) {
            TreeNode curr = queue.poll();

            if (arr[i] != null) {
                curr.left = new TreeNode(arr[i]);
                queue.offer(curr.left);
            }
            i++;

            if (i < arr.length && arr[i] != null) {
                curr.right = new TreeNode(arr[i]);
                queue.offer(curr.right);
            }
            i++;
        }
        return root;
    }

    // ==========================================
    // TEST METHODS
    // ==========================================

    public static void main(String[] args) {
        System.out.println("=== TREES PRACTICE SOLUTIONS ===\n");

        // Test Maximum Depth of Binary Tree
        System.out.println("1. Maximum Depth of Binary Tree");
        TreeNode tree1 = createTree(new Integer[]{3, 9, 20, null, null, 15, 7});
        System.out.println("Tree:");
        printTree(tree1);
        System.out.println("Max Depth: " + maxDepth(tree1));
        System.out.println();

        // Test Same Tree
        System.out.println("2. Same Tree");
        TreeNode tree2a = createTree(new Integer[]{1, 2, 3});
        TreeNode tree2b = createTree(new Integer[]{1, 2, 3});
        System.out.println("Tree A:");
        printTree(tree2a);
        System.out.println("Tree B:");
        printTree(tree2b);
        System.out.println("Are Same: " + isSameTree(tree2a, tree2b));
        System.out.println();

        // Test Invert Binary Tree
        System.out.println("3. Invert Binary Tree");
        TreeNode tree3 = createTree(new Integer[]{4, 2, 7, 1, 3, 6, 9});
        System.out.println("Original Tree:");
        printTree(tree3);
        TreeNode inverted = invertTree(tree3);
        System.out.println("Inverted Tree:");
        printTree(inverted);
        System.out.println();

        // Test Symmetric Tree
        System.out.println("4. Symmetric Tree");
        TreeNode tree4 = createTree(new Integer[]{1, 2, 2, 3, 4, 4, 3});
        System.out.println("Tree:");
        printTree(tree4);
        System.out.println("Is Symmetric: " + isSymmetric(tree4));
        System.out.println();

        // Test Binary Tree Level Order Traversal
        System.out.println("5. Binary Tree Level Order Traversal");
        TreeNode tree5 = createTree(new Integer[]{3, 9, 20, null, null, 15, 7});
        System.out.println("Tree:");
        printTree(tree5);
        List<List<Integer>> levels = levelOrder(tree5);
        System.out.println("Level Order: " + levels);
        System.out.println();

        // Test Validate Binary Search Tree
        System.out.println("6. Validate Binary Search Tree");
        TreeNode bst = createTree(new Integer[]{2, 1, 3});
        System.out.println("Tree:");
        printTree(bst);
        System.out.println("Is Valid BST: " + isValidBST(bst));
        System.out.println();

        // Test Binary Tree Maximum Path Sum
        System.out.println("7. Binary Tree Maximum Path Sum");
        TreeNode tree7 = createTree(new Integer[]{-10, 9, 20, null, null, 15, 7});
        System.out.println("Tree:");
        printTree(tree7);
        System.out.println("Max Path Sum: " + maxPathSum(tree7));
        System.out.println();

        // Test Serialize and Deserialize Binary Tree
        System.out.println("8. Serialize and Deserialize Binary Tree");
        TreeNode tree8 = createTree(new Integer[]{1, 2, 3, null, null, 4, 5});
        Codec codec = new Codec();
        String serialized = codec.serialize(tree8);
        System.out.println("Serialized: " + serialized);
        TreeNode deserialized = codec.deserialize(serialized);
        System.out.println("Deserialized Tree:");
        printTree(deserialized);
    }
}