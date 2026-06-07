/*
 * 7. JUMP GAME (LeetCode 55)
 *
 * Problem Statement:
 * You are given an integer array nums. You are initially positioned at the array's first index,
 * and each element in the array represents your maximum jump length at that position.
 * Return true if you can reach the last index, or false otherwise.
 *
 * Conceptual Understanding:
 * - Greedy algorithm to find if we can reach the end
 * - Track the farthest position we can reach so far
 * - At each position, update the maximum reachable position
 * - If we can reach beyond or at the last index, return true
 *
 * Key Insight: We don't need to track all possible paths, just the maximum reachable position
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

public class JumpGame {

    // Method 1: Greedy Approach - Track maximum reachable position
    public boolean canJump(int[] nums) {
        if (nums == null || nums.length == 0) {
            return true;
        }

        int maxReach = 0;  // Farthest position we can reach

        for (int i = 0; i < nums.length; i++) {
            // If current position is beyond our reach, we can't proceed
            if (i > maxReach) {
                return false;
            }

            // Update maximum reachable position
            maxReach = Math.max(maxReach, i + nums[i]);

            // If we can reach the end, return true
            if (maxReach >= nums.length - 1) {
                return true;
            }
        }

        return true;  // If we complete the loop, we can reach the end
    }

    // Method 2: Alternative implementation with same logic
    public boolean canJumpAlternative(int[] nums) {
        if (nums == null || nums.length <= 1) {
            return true;
        }

        int farthest = 0;
        int currentEnd = 0;

        for (int i = 0; i < nums.length - 1; i++) {
            // Update farthest we can reach
            farthest = Math.max(farthest, i + nums[i]);

            // If we reach the end of current range
            if (i == currentEnd) {
                currentEnd = farthest;

                // If we can reach beyond the end
                if (currentEnd >= nums.length - 1) {
                    return true;
                }
            }
        }

        return farthest >= nums.length - 1;
    }

    // Method 3: Backtracking (Exponential time - for comparison)
    public boolean canJumpBacktracking(int[] nums) {
        return canJumpFromPosition(0, nums);
    }

    private boolean canJumpFromPosition(int position, int[] nums) {
        if (position == nums.length - 1) {
            return true;
        }

        int furthestJump = Math.min(position + nums[position], nums.length - 1);

        for (int nextPosition = position + 1; nextPosition <= furthestJump; nextPosition++) {
            if (canJumpFromPosition(nextPosition, nums)) {
                return true;
            }
        }

        return false;
    }

    // Method 4: Dynamic Programming (O(n²) time)
    public boolean canJumpDP(int[] nums) {
        if (nums == null || nums.length <= 1) {
            return true;
        }

        boolean[] canReach = new boolean[nums.length];
        canReach[0] = true;

        for (int i = 0; i < nums.length; i++) {
            if (canReach[i]) {
                int maxJump = Math.min(i + nums[i], nums.length - 1);
                for (int j = i + 1; j <= maxJump; j++) {
                    canReach[j] = true;
                }
            }
        }

        return canReach[nums.length - 1];
    }

    // Test cases
    public static void main(String[] args) {
        JumpGame solution = new JumpGame();

        // Test Case 1: Can reach end
        int[] nums1 = {2, 3, 1, 1, 4};
        System.out.println("Test 1: " + solution.canJump(nums1)); // Expected: true

        // Test Case 2: Cannot reach end
        int[] nums2 = {3, 2, 1, 0, 4};
        System.out.println("Test 2: " + solution.canJump(nums2)); // Expected: false

        // Test Case 3: Single element
        int[] nums3 = {0};
        System.out.println("Test 3: " + solution.canJump(nums3)); // Expected: true

        // Test Case 4: Empty array
        int[] nums4 = {};
        System.out.println("Test 4: " + solution.canJump(nums4)); // Expected: true

        // Test Case 5: All zeros except first
        int[] nums5 = {1, 0, 0, 0};
        System.out.println("Test 5: " + solution.canJump(nums5)); // Expected: false

        // Test Case 6: Large jumps
        int[] nums6 = {5, 0, 0, 0, 0, 1};
        System.out.println("Test 6: " + solution.canJump(nums6)); // Expected: true
    }
}