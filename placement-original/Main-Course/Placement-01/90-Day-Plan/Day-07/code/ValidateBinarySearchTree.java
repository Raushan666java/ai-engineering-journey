/**
 * LEETCODE 98: VALIDATE BINARY SEARCH TREE
 * Difficulty: Medium
 * 
 * Problem:
 * Determine if a binary tree is a valid binary search tree (BST).
 * Rules:
 * - Left subtree values < node.value
 * - Right subtree values > node.value
 * - Both left and right subtrees must also be BSTs
 * 
 * Approaches:
 * 1. Recursive with bounds (min/max) (recommended)
 * 2. Iterative in-order traversal (BST in-order is strictly increasing)
 * 3. Recursive with node passing
 * 
 * OOP Concepts:
 * - TreeNode class
 * - Helper recursive methods
 * - Encapsulation & clarity
 */

import java.util.*;

public class ValidateBinarySearchTree {
    public static void main(String[] args) {
        System.out.println("╔═══════════════════════════════════════════════════════════╗");
        System.out.println("║       LEETCODE 98: VALIDATE BINARY SEARCH TREE           ║");
        System.out.println("╚═══════════════════════════════════════════════════════════╝\n");

        // Test cases
        TreeNode root1 = new TreeNode(2);
        root1.left = new TreeNode(1);
        root1.right = new TreeNode(3);
        System.out.println("Expected true: " + approach1_recursiveBounds(root1));

        TreeNode root2 = new TreeNode(5);
        root2.left = new TreeNode(1);
        root2.right = new TreeNode(4);
        root2.right.left = new TreeNode(3);
        root2.right.right = new TreeNode(6);
        System.out.println("Expected false: " + approach1_recursiveBounds(root2));

        System.out.println("Approach 2 in-order: " + approach2_inorder(root1));
        System.out.println("Approach 2 in-order: " + approach2_inorder(root2));

        printComplexity();
    }

    // Approach 1: recursive with bounds
    static boolean approach1_recursiveBounds(TreeNode root) {
        return validate(root, Long.MIN_VALUE, Long.MAX_VALUE);
    }
    static boolean validate(TreeNode node, long low, long high) {
        if (node == null) return true;
        if (node.val <= low || node.val >= high) return false;
        return validate(node.left, low, node.val) && validate(node.right, node.val, high);
    }

    // Approach 2: in-order
    static boolean approach2_inorder(TreeNode root) {
        Stack<TreeNode> stack = new Stack<>();
        TreeNode curr = root;
        long prev = Long.MIN_VALUE;
        while (curr != null || !stack.isEmpty()) {
            while (curr != null) { stack.push(curr); curr = curr.left; }
            curr = stack.pop();
            if (curr.val <= prev) return false;
            prev = curr.val;
            curr = curr.right;
        }
        return true;
    }

    static void printComplexity() {
        System.out.println("\nComplexity:");
        System.out.println("Recursive bounds: Time O(n), Space O(h)");
        System.out.println("In-order iterative: Time O(n), Space O(h)");
    }
}

class TreeNode { int val; TreeNode left, right; TreeNode(int v) { val = v; }}
