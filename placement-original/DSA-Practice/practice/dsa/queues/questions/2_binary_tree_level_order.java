package queues.questions;

/*
 * 2. BINARY TREE LEVEL ORDER TRAVERSAL (LeetCode 102)
 *
 * Problem Statement:
 * Given the root of a binary tree, return the level order traversal of its nodes' values.
 * (i.e., from left to right, level by level).
 *
 * Conceptual Understanding:
 * - Use BFS (Breadth-First Search) with a queue
 * - Process nodes level by level
 * - For each level, collect all node values before moving to next level
 * - Queue ensures we process nodes in correct order
 *
 * Time Complexity: O(n) where n is number of nodes
 * Space Complexity: O(w) where w is maximum width of tree
 */

import java.util.*;

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) { val = x; }
}

class BinaryTreeLevelOrder2 {

    // Method 1: BFS with queue
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

            // Process all nodes at current level
            for (int i = 0; i < levelSize; i++) {
                TreeNode node = queue.poll();
                currentLevel.add(node.val);

                // Add children to queue
                if (node.left != null) {
                    queue.offer(node.left);
                }
                if (node.right != null) {
                    queue.offer(node.right);
                }
            }

            result.add(currentLevel);
        }

        return result;
    }

    // Method 2: DFS with level tracking
    public List<List<Integer>> levelOrderDFS(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();
        dfsHelper(root, 0, result);
        return result;
    }

    private void dfsHelper(TreeNode node, int level, List<List<Integer>> result) {
        if (node == null) {
            return;
        }

        // Add new level if needed
        if (result.size() == level) {
            result.add(new ArrayList<>());
        }

        // Add current node to its level
        result.get(level).add(node.val);

        // Process children
        dfsHelper(node.left, level + 1, result);
        dfsHelper(node.right, level + 1, result);
    }

    // Method 3: BFS with null markers (alternative)
    public List<List<Integer>> levelOrderNullMarkers(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();

        if (root == null) {
            return result;
        }

        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        queue.offer(null); // Level separator

        List<Integer> currentLevel = new ArrayList<>();

        while (!queue.isEmpty()) {
            TreeNode node = queue.poll();

            if (node == null) {
                // End of level
                result.add(new ArrayList<>(currentLevel));
                currentLevel.clear();

                if (!queue.isEmpty()) {
                    queue.offer(null); // Add separator for next level
                }
            } else {
                currentLevel.add(node.val);

                if (node.left != null) queue.offer(node.left);
                if (node.right != null) queue.offer(node.right);
            }
        }

        return result;
    }

    // Method 4: Iterative with two queues
    public List<List<Integer>> levelOrderTwoQueues(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();

        if (root == null) {
            return result;
        }

        Queue<TreeNode> currentLevel = new LinkedList<>();
        Queue<TreeNode> nextLevel = new LinkedList<>();

        currentLevel.offer(root);

        while (!currentLevel.isEmpty()) {
            List<Integer> levelValues = new ArrayList<>();

            // Process current level
            while (!currentLevel.isEmpty()) {
                TreeNode node = currentLevel.poll();
                levelValues.add(node.val);

                // Add children to next level
                if (node.left != null) nextLevel.offer(node.left);
                if (node.right != null) nextLevel.offer(node.right);
            }

            result.add(levelValues);

            // Swap queues
            Queue<TreeNode> temp = currentLevel;
            currentLevel = nextLevel;
            nextLevel = temp;
        }

        return result;
    }

    // Test cases
    public static void main(String[] args) {
        BinaryTreeLevelOrder2 solution = new BinaryTreeLevelOrder2();

        // Create test tree: [3,9,20,null,null,15,7]
        TreeNode root = new TreeNode(3);
        root.left = new TreeNode(9);
        root.right = new TreeNode(20);
        root.right.left = new TreeNode(15);
        root.right.right = new TreeNode(7);

        List<List<Integer>> result = solution.levelOrder(root);
        System.out.println("Level Order: " + result);
        // Expected: [[3], [9, 20], [15, 7]]

        // Test empty tree
        List<List<Integer>> emptyResult = solution.levelOrder(null);
        System.out.println("Empty Tree: " + emptyResult);
        // Expected: []

        // Test single node
        TreeNode single = new TreeNode(1);
        List<List<Integer>> singleResult = solution.levelOrder(single);
        System.out.println("Single Node: " + singleResult);
        // Expected: [[1]]
    }
}