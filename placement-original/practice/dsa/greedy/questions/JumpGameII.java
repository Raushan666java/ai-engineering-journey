/*
 * 8. JUMP GAME II (LeetCode 45)
 *
 * Problem Statement:
 * Given an array of non-negative integers nums, you are initially positioned at the first index
 * of the array. Each element in the array represents your maximum jump length at that position.
 * Your goal is to reach the last index in the minimum number of jumps.
 * You can assume that you can always reach the last index.
 *
 * Conceptual Understanding:
 * - Greedy algorithm to find minimum jumps to reach end
 * - Use BFS-like approach but greedy: always jump to position that gives maximum reach
 * - Track current end of range and farthest we can reach
 * - Increment jump count when we reach current end
 *
 * Key Insight: At each step, choose the position that maximizes our future reach
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

public class JumpGameII {

    // Method 1: Greedy Approach - BFS style but greedy
    public int jump(int[] nums) {
        if (nums == null || nums.length <= 1) {
            return 0;
        }

        int jumps = 0;          // Number of jumps made
        int currentEnd = 0;     // End of current jump range
        int farthest = 0;       // Farthest position we can reach

        for (int i = 0; i < nums.length - 1; i++) {
            // Update farthest we can reach from current position
            farthest = Math.max(farthest, i + nums[i]);

            // If we reach the end of current jump range
            if (i == currentEnd) {
                jumps++;                    // Make a jump
                currentEnd = farthest;      // Update current end to farthest

                // If we can reach the end, no more jumps needed
                if (currentEnd >= nums.length - 1) {
                    break;
                }
            }
        }

        return jumps;
    }

    // Method 2: Alternative implementation with same logic
    public int jumpAlternative(int[] nums) {
        if (nums == null || nums.length <= 1) {
            return 0;
        }

        int jumps = 0;
        int maxReach = 0;      // Maximum reachable position
        int currentMax = 0;    // Current maximum reachable in current jump

        for (int i = 0; i < nums.length - 1; i++) {
            maxReach = Math.max(maxReach, i + nums[i]);

            // When we reach the current maximum
            if (i == currentMax) {
                jumps++;
                currentMax = maxReach;

                // Early termination
                if (currentMax >= nums.length - 1) {
                    break;
                }
            }
        }

        return jumps;
    }

    // Method 3: Dynamic Programming (O(n²) time)
    public int jumpDP(int[] nums) {
        if (nums == null || nums.length <= 1) {
            return 0;
        }

        int[] minJumps = new int[nums.length];
        // Initialize with maximum possible jumps
        for (int i = 1; i < nums.length; i++) {
            minJumps[i] = Integer.MAX_VALUE;
        }

        for (int i = 0; i < nums.length; i++) {
            if (minJumps[i] != Integer.MAX_VALUE) {
                int maxJump = Math.min(i + nums[i], nums.length - 1);

                for (int j = i + 1; j <= maxJump; j++) {
                    minJumps[j] = Math.min(minJumps[j], minJumps[i] + 1);
                }
            }
        }

        return minJumps[nums.length - 1];
    }

    // Method 4: BFS Approach (O(n) time, O(n) space)
    public int jumpBFS(int[] nums) {
        if (nums == null || nums.length <= 1) {
            return 0;
        }

        int jumps = 0;
        int left = 0, right = 0;

        while (right < nums.length - 1) {
            int farthest = 0;

            // Find the farthest we can reach from current range
            for (int i = left; i <= right; i++) {
                farthest = Math.max(farthest, i + nums[i]);
            }

            left = right + 1;
            right = farthest;
            jumps++;

            // If we can reach the end
            if (right >= nums.length - 1) {
                break;
            }
        }

        return jumps;
    }

    // Test cases
    public static void main(String[] args) {
        JumpGameII solution = new JumpGameII();

        // Test Case 1: Standard case
        int[] nums1 = {2, 3, 1, 1, 4};
        System.out.println("Test 1: " + solution.jump(nums1)); // Expected: 2

        // Test Case 2: Minimum jumps
        int[] nums2 = {2, 3, 0, 1, 4};
        System.out.println("Test 2: " + solution.jump(nums2)); // Expected: 2

        // Test Case 3: Single element
        int[] nums3 = {0};
        System.out.println("Test 3: " + solution.jump(nums3)); // Expected: 0

        // Test Case 4: Large jumps
        int[] nums4 = {1, 2, 3};
        System.out.println("Test 4: " + solution.jump(nums4)); // Expected: 2

        // Test Case 5: All ones
        int[] nums5 = {1, 1, 1, 1};
        System.out.println("Test 5: " + solution.jump(nums5)); // Expected: 3

        // Test Case 6: Optimal path
        int[] nums6 = {5, 0, 0, 0, 0, 1};
        System.out.println("Test 6: " + solution.jump(nums6)); // Expected: 1
    }
}