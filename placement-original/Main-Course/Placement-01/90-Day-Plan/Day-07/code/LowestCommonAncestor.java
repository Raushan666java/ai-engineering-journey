/**
 * LEETCODE 236: Lowest Common Ancestor of a Binary Tree
 * Difficulty: Medium
 * 
 * Problem:
 * Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
 * The lowest common ancestor is defined between two nodes p and q as the lowest node
 * in T that has both p and q as descendants (where we allow a node to be a descendant of itself).
 * 
 * Approaches:
 * 1. Recursive DFS (one-pass) - O(n)
 * 2. Parent map + ancestor set (iterative) - O(n)
 * 3. Path comparison using two paths (find paths from root) - O(n)
 * 
 * OOP Concepts:
 * - TreeNode class
 * - Use of recursion and object references
 * - Using helper methods and encapsulation
 */

import java.util.*;

public class LowestCommonAncestor {
    public static void main(String[] args) {
        System.out.println("╔═══════════════════════════════════════════════════════════╗");
        System.out.println("║     LEETCODE 236: LOWEST COMMON ANCESTOR (Binary Tree)     ║");
        System.out.println("╚═══════════════════════════════════════════════════════════╝\n");

        // Build test tree: [3,5,1,6,2,0,8,null,null,7,4]
        TreeNode root = new TreeNode(3);
        root.left = new TreeNode(5);
        root.right = new TreeNode(1);
        root.left.left = new TreeNode(6);
        root.left.right = new TreeNode(2);
        root.left.right.left = new TreeNode(7);
        root.left.right.right = new TreeNode(4);
        root.right.left = new TreeNode(0);
        root.right.right = new TreeNode(8);

        TreeNode p = root.left;          // Node 5
        TreeNode q = root.left.right.right; // Node 4

        System.out.println("Expected LCA: 5");
        System.out.println("Approach 1 (Recursive): " + approach1_recursive(root, p, q).val);
        System.out.println("Approach 2 (Parent map + ancestor set): " + approach2_parentMap(root, p, q).val);
        System.out.println("Approach 3 (Find paths): " + approach3_findPaths(root, p, q).val);

        printComplexity();
        printOOPNotes();
    }

    // ============================================
    // Approach 1: Recursive one-pass
    // ============================================
    static TreeNode approach1_recursive(TreeNode root, TreeNode p, TreeNode q) {
        // Base case
        if (root == null || root == p || root == q) return root;
        
        TreeNode left = approach1_recursive(root.left, p, q);
        TreeNode right = approach1_recursive(root.right, p, q);
        
        if (left != null && right != null) return root; // p and q found in different subtrees
        return left != null ? left : right;
    }

    // ============================================
    // Approach 2: Parent map + ancestor set (iterative)
    // ============================================
    static TreeNode approach2_parentMap(TreeNode root, TreeNode p, TreeNode q) {
        Map<TreeNode, TreeNode> parent = new HashMap<>();
        Stack<TreeNode> stack = new Stack<>();
        parent.put(root, null);
        stack.push(root);

        // Iterate until both p and q have parents
        while (!parent.containsKey(p) || !parent.containsKey(q)) {
            TreeNode node = stack.pop();
            if (node.left != null) { parent.put(node.left, node); stack.push(node.left); }
            if (node.right != null) { parent.put(node.right, node); stack.push(node.right); }
        }

        Set<TreeNode> ancestors = new HashSet<>();
        while (p != null) { ancestors.add(p); p = parent.get(p); }

        while (!ancestors.contains(q)) q = parent.get(q);
        return q;
    }

    // ============================================
    // Approach 3: Find path from root to each node, then compare
    // ============================================
    static TreeNode approach3_findPaths(TreeNode root, TreeNode p, TreeNode q) {
        List<TreeNode> pathP = new ArrayList<>();
        List<TreeNode> pathQ = new ArrayList<>();
        findPath(root, p, new ArrayList<>(), pathP);
        findPath(root, q, new ArrayList<>(), pathQ);
        
        int i = 0; TreeNode last = null;
        while (i < pathP.size() && i < pathQ.size() && pathP.get(i) == pathQ.get(i)) {
            last = pathP.get(i);
            i++;
        }
        return last;
    }

    static boolean findPath(TreeNode root, TreeNode target, List<TreeNode> curr, List<TreeNode> out) {
        if (root == null) return false;
        curr.add(root);
        if (root == target) { out.addAll(curr); return true; }
        if (findPath(root.left, target, curr, out) || findPath(root.right, target, curr, out)) return true;
        curr.remove(curr.size() - 1);
        return false;
    }

    static void printComplexity() {
        System.out.println("\nComplexity:");
        System.out.println("Approach 1: Time O(n), Space O(h) recursion");
        System.out.println("Approach 2: Time O(n), Space O(n) parent map");
        System.out.println("Approach 3: Time O(n), Space O(n) path storage");
    }

    static void printOOPNotes() {
        System.out.println("\nOOP Notes:");
        System.out.println("- TreeNode class encapsulates node data and left/right references");
        System.out.println("- Helper methods are used (findPath, recursive LCA) for readability");
        System.out.println("- Use of collections (Map, Stack, List) demonstrates composition and polymorphism");
    }
}

class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int val) { this.val = val; }
}
