/**
 * LEETCODE 104: MAXIMUM DEPTH OF BINARY TREE
 * Difficulty: Easy
 * 
 * Problem:
 * Given the root of a binary tree, return its maximum depth.
 * A binary tree's maximum depth is the number of nodes along the longest path
 * from the root node down to the farthest leaf node.
 * 
 * Example 1:
 * Input: root = [3,9,20,null,null,15,7]
 *        3
 *       / \
 *      9  20
 *        /  \
 *       15   7
 * Output: 3
 * 
 * Example 2:
 * Input: root = [1,null,2]
 * Output: 2
 * 
 * Constraints:
 * - Number of nodes: [0, 10^4]
 * - Node values: -100 <= Node.val <= 100
 * 
 * OOP Concepts Demonstrated:
 * - Class hierarchy (TreeNode class)
 * - Recursion with objects
 * - Object composition (tree structure)
 * - Method design for object traversal
 */

import java.util.*;

public class MaximumDepthBinaryTree {
    
    public static void main(String[] args) {
        System.out.println("╔═══════════════════════════════════════════════════════════╗");
        System.out.println("║      LEETCODE 104: MAXIMUM DEPTH OF BINARY TREE          ║");
        System.out.println("╚═══════════════════════════════════════════════════════════╝\n");
        
        runAllApproaches();
    }
    
    static void runAllApproaches() {
        // Test Case 1
        System.out.println("Test Case 1: [3,9,20,null,null,15,7]");
        TreeNode root1 = new TreeNode(3);
        root1.left = new TreeNode(9);
        root1.right = new TreeNode(20);
        root1.right.left = new TreeNode(15);
        root1.right.right = new TreeNode(7);
        
        System.out.println("Expected: 3");
        System.out.println("Approach 1 (Recursive DFS): " + approach1_RecursiveDFS(root1));
        System.out.println("Approach 2 (Iterative BFS): " + approach2_IterativeBFS(root1));
        System.out.println("Approach 3 (Iterative DFS): " + approach3_IterativeDFS(root1));
        
        // Test Case 2
        System.out.println("\nTest Case 2: [1,null,2]");
        TreeNode root2 = new TreeNode(1);
        root2.right = new TreeNode(2);
        
        System.out.println("Expected: 2");
        System.out.println("Approach 1 (Recursive DFS): " + approach1_RecursiveDFS(root2));
        System.out.println("Approach 2 (Iterative BFS): " + approach2_IterativeBFS(root2));
        System.out.println("Approach 3 (Iterative DFS): " + approach3_IterativeDFS(root2));
        
        // Test Case 3: Empty tree
        System.out.println("\nTest Case 3: []");
        TreeNode root3 = null;
        System.out.println("Expected: 0");
        System.out.println("Approach 1 (Recursive DFS): " + approach1_RecursiveDFS(root3));
        
        // Test Case 4: Single node
        System.out.println("\nTest Case 4: [1]");
        TreeNode root4 = new TreeNode(1);
        System.out.println("Expected: 1");
        System.out.println("Approach 1 (Recursive DFS): " + approach1_RecursiveDFS(root4));
        
        printComplexityAnalysis();
        printOOPConcepts();
    }
    
    // ============================================
    // APPROACH 1: RECURSIVE DFS (DEPTH-FIRST SEARCH)
    // ============================================
    
    /**
     * Approach 1: Recursive DFS
     * 
     * Intuition:
     * - Depth of tree = 1 + max(left subtree depth, right subtree depth)
     * - Base case: null node has depth 0
     * - Recursively calculate depth of left and right subtrees
     * - Return maximum + 1 (for current node)
     * 
     * Algorithm:
     * 1. If root is null, return 0
     * 2. Recursively get depth of left subtree
     * 3. Recursively get depth of right subtree
     * 4. Return max(left, right) + 1
     * 
     * Time Complexity: O(n) - visit each node once
     * Space Complexity: O(h) - recursion stack, h = height
     *                   Worst: O(n) for skewed tree
     *                   Best: O(log n) for balanced tree
     * 
     * OOP Concepts:
     * - Recursion with objects (TreeNode)
     * - Object null checking
     * - Accessing object fields (left, right)
     */
    static int approach1_RecursiveDFS(TreeNode root) {
        // Base case: empty tree
        if (root == null) {
            return 0;
        }
        
        // Recursive case
        int leftDepth = approach1_RecursiveDFS(root.left);
        int rightDepth = approach1_RecursiveDFS(root.right);
        
        return Math.max(leftDepth, rightDepth) + 1;
    }
    
    // ============================================
    // APPROACH 2: ITERATIVE BFS (BREADTH-FIRST SEARCH)
    // ============================================
    
    /**
     * Approach 2: Iterative BFS (Level Order Traversal)
     * 
     * Intuition:
     * - Process tree level by level
     * - Count number of levels = depth
     * - Use queue to track nodes at each level
     * 
     * Algorithm:
     * 1. If root is null, return 0
     * 2. Initialize queue with root
     * 3. Initialize depth = 0
     * 4. While queue not empty:
     *    a. Get current level size
     *    b. Process all nodes at current level
     *    c. Increment depth
     * 5. Return depth
     * 
     * Time Complexity: O(n) - visit each node once
     * Space Complexity: O(w) - queue size, w = max width
     *                   Worst: O(n) for last level in complete tree
     * 
     * OOP Concepts:
     * - Using Java Collections (Queue)
     * - Object-oriented queue operations
     * - Polymorphism (Queue interface, LinkedList implementation)
     */
    static int approach2_IterativeBFS(TreeNode root) {
        if (root == null) {
            return 0;
        }
        
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        int depth = 0;
        
        while (!queue.isEmpty()) {
            int levelSize = queue.size();
            
            // Process all nodes at current level
            for (int i = 0; i < levelSize; i++) {
                TreeNode node = queue.poll();
                
                if (node.left != null) {
                    queue.offer(node.left);
                }
                if (node.right != null) {
                    queue.offer(node.right);
                }
            }
            
            depth++;
        }
        
        return depth;
    }
    
    // ============================================
    // APPROACH 3: ITERATIVE DFS (USING STACK)
    // ============================================
    
    /**
     * Approach 3: Iterative DFS using Stack
     * 
     * Intuition:
     * - Simulate recursion using explicit stack
     * - Track both node and its depth
     * - Update maximum depth as we traverse
     * 
     * Algorithm:
     * 1. If root is null, return 0
     * 2. Create stack with (node, depth) pairs
     * 3. Initialize maxDepth = 0
     * 4. While stack not empty:
     *    a. Pop (node, depth) from stack
     *    b. Update maxDepth
     *    c. Push children with depth+1
     * 5. Return maxDepth
     * 
     * Time Complexity: O(n) - visit each node once
     * Space Complexity: O(h) - stack size, h = height
     *                   Worst: O(n) for skewed tree
     * 
     * OOP Concepts:
     * - Custom Pair class (encapsulation)
     * - Stack data structure
     * - Object composition (Pair contains TreeNode and Integer)
     */
    static int approach3_IterativeDFS(TreeNode root) {
        if (root == null) {
            return 0;
        }
        
        Stack<Pair> stack = new Stack<>();
        stack.push(new Pair(root, 1));
        int maxDepth = 0;
        
        while (!stack.isEmpty()) {
            Pair current = stack.pop();
            TreeNode node = current.node;
            int depth = current.depth;
            
            maxDepth = Math.max(maxDepth, depth);
            
            if (node.right != null) {
                stack.push(new Pair(node.right, depth + 1));
            }
            if (node.left != null) {
                stack.push(new Pair(node.left, depth + 1));
            }
        }
        
        return maxDepth;
    }
    
    // ============================================
    // HELPER CLASSES (OOP DESIGN)
    // ============================================
    
    /**
     * Pair class to store node and its depth
     * 
     * OOP Concepts Demonstrated:
     * - Encapsulation (bundling related data)
     * - Constructor for initialization
     * - Final fields for immutability
     */
    static class Pair {
        final TreeNode node;
        final int depth;
        
        Pair(TreeNode node, int depth) {
            this.node = node;
            this.depth = depth;
        }
    }
    
    // ============================================
    // COMPLEXITY ANALYSIS
    // ============================================
    
    static void printComplexityAnalysis() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("COMPLEXITY ANALYSIS");
        System.out.println("=".repeat(70));
        
        System.out.println("\n┌─────────────────────┬──────────────┬──────────────────┐");
        System.out.println("│ Approach            │ Time         │ Space            │");
        System.out.println("├─────────────────────┼──────────────┼──────────────────┤");
        System.out.println("│ 1. Recursive DFS    │ O(n)         │ O(h) stack       │");
        System.out.println("│ 2. Iterative BFS    │ O(n)         │ O(w) queue       │");
        System.out.println("│ 3. Iterative DFS    │ O(n)         │ O(h) stack       │");
        System.out.println("└─────────────────────┴──────────────┴──────────────────┘");
        
        System.out.println("\nWhere:");
        System.out.println("  n = total number of nodes");
        System.out.println("  h = height of tree");
        System.out.println("  w = maximum width of tree");
        
        System.out.println("\n⭐ Best Approach: Recursive DFS (Approach 1)");
        System.out.println("   - Cleanest and most intuitive");
        System.out.println("   - Natural tree traversal");
        System.out.println("   - Optimal time and space");
    }
    
    // ============================================
    // OOP CONCEPTS DEMONSTRATED
    // ============================================
    
    static void printOOPConcepts() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("OOP CONCEPTS DEMONSTRATED");
        System.out.println("=".repeat(70));
        
        System.out.println("\n1. CLASS HIERARCHY:");
        System.out.println("   - TreeNode class represents tree structure");
        System.out.println("   - Pair class encapsulates node-depth combination");
        
        System.out.println("\n2. ENCAPSULATION:");
        System.out.println("   - TreeNode fields (val, left, right)");
        System.out.println("   - Pair fields (node, depth)");
        System.out.println("   - Final fields for immutability");
        
        System.out.println("\n3. OBJECT COMPOSITION:");
        System.out.println("   - TreeNode contains left and right TreeNode objects");
        System.out.println("   - Pair contains TreeNode and Integer");
        System.out.println("   - Tree structure through object references");
        
        System.out.println("\n4. POLYMORPHISM:");
        System.out.println("   - Queue interface with LinkedList implementation");
        System.out.println("   - Collection framework usage");
        
        System.out.println("\n5. RECURSION WITH OBJECTS:");
        System.out.println("   - Recursive method calls on TreeNode objects");
        System.out.println("   - Object null checking");
        System.out.println("   - Traversing object graph recursively");
        
        System.out.println("\n6. CONSTRUCTOR USAGE:");
        System.out.println("   - TreeNode(int val) constructor");
        System.out.println("   - Pair(TreeNode, int) constructor");
        System.out.println("   - Object initialization patterns");
    }
}

// ============================================
// TREENODE CLASS DEFINITION
// ============================================

/**
 * TreeNode class represents a node in binary tree
 * 
 * OOP Concepts:
 * - Class with fields (instance variables)
 * - Constructor for initialization
 * - Self-referential class (contains TreeNode references)
 * - Building block for tree data structure
 */
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    
    TreeNode(int val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
    
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

/**
 * INTERVIEW TIPS:
 * 
 * 1. CLARIFICATION QUESTIONS:
 *    - Can tree be empty? (Yes, return 0)
 *    - Can tree have single node? (Yes, return 1)
 *    - Are there duplicate values? (Doesn't matter for depth)
 * 
 * 2. APPROACH SELECTION:
 *    - Prefer recursive for simplicity
 *    - Use BFS if need level information
 *    - Use iterative DFS if recursion stack is concern
 * 
 * 3. EDGE CASES:
 *    - Empty tree (null root)
 *    - Single node tree
 *    - Skewed tree (all left or all right)
 *    - Complete balanced tree
 * 
 * 4. OOP DISCUSSION POINTS:
 *    - TreeNode class design
 *    - Object composition in trees
 *    - Recursive methods on objects
 *    - Helper class design (Pair)
 * 
 * 5. FOLLOW-UP QUESTIONS:
 *    - Find minimum depth
 *    - Find diameter of tree
 *    - Check if tree is balanced
 *    - Level order traversal
 * 
 * 6. OPTIMIZATION:
 *    - Recursive is optimal for this problem
 *    - Cannot do better than O(n) time (must visit all nodes)
 *    - Space can't be better than O(h) (need to track path)
 */
