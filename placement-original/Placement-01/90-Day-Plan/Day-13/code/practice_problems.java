import java.util.*;

public class practice_problems {
    
    /* DAY 13 PRACTICE PROBLEMS - Advanced Trees & Heaps
     * 
     * HEAP PROBLEMS:
     * 1. Kth Largest Element in Array (LC 215) - Medium
     * 2. Top K Frequent Elements (LC 347) - Medium
     * 3. Find Median from Data Stream (LC 295) - Hard
     * 4. Merge K Sorted Lists (LC 23) - Hard
     * 5. K Closest Points to Origin (LC 973) - Medium
     * 
     * AVL TREE PROBLEMS:
     * 6. Implement AVL Tree Insert
     * 7. Implement AVL Tree Delete
     * 8. Check if Binary Tree is Balanced (LC 110) - Easy
     * 9. Convert Sorted Array to AVL Tree
     * 10. Validate if Tree is AVL Tree
     * 
     * ADVANCED PROBLEMS:
     * 11. Sliding Window Maximum (LC 239) - Hard
     * 12. Task Scheduler (LC 621) - Medium
     * 13. Reorganize String (LC 767) - Medium
     * 14. Find K Pairs with Smallest Sums (LC 373) - Medium
     * 15. Minimum Cost to Connect Sticks (LC 1167) - Medium
     */
    
    // Template: Kth Largest using Min Heap
    static int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        for (int num : nums) {
            minHeap.offer(num);
            if (minHeap.size() > k) {
                minHeap.poll();
            }
        }
        return minHeap.peek();
    }
    
    // Template: Check AVL Balance
    static class TreeNode {
        int val;
        TreeNode left, right;
        TreeNode(int x) { val = x; }
    }
    
    static int checkHeight(TreeNode root) {
        if (root == null) return 0;
        
        int leftHeight = checkHeight(root.left);
        if (leftHeight == -1) return -1;
        
        int rightHeight = checkHeight(root.right);
        if (rightHeight == -1) return -1;
        
        if (Math.abs(leftHeight - rightHeight) > 1) return -1;
        
        return Math.max(leftHeight, rightHeight) + 1;
    }
    
    static boolean isBalanced(TreeNode root) {
        return checkHeight(root) != -1;
    }
    
    public static void main(String[] args) {
        System.out.println("=== Day 13 Practice Problems ===\n");
        
        // Test Kth Largest
        int[] nums = {3, 2, 1, 5, 6, 4};
        System.out.println("Kth Largest Example:");
        System.out.println("Array: " + Arrays.toString(nums));
        System.out.println("2nd largest: " + findKthLargest(nums, 2));
        System.out.println();
        
        // Test Balanced Tree
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        System.out.println("Is tree balanced? " + isBalanced(root));
        System.out.println();
        
        System.out.println("Implement remaining 13 problems for complete practice!");
    }
}
