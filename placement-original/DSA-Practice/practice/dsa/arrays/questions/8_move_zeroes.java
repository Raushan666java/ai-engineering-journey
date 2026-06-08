package arrays.questions;

/*
 * 8. MOVE ZEROES (LeetCode 283)
 *
 * Problem Statement:
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative
 * order of the non-zero elements. Note that you must do this in-place without making a copy
 * of the array.
 *
 * Conceptual Understanding:
 * - Move all zeros to end while preserving non-zero order
 * - In-place operation (no extra space)
 * - Relative order of non-zeros must be maintained
 * - Time: O(n), Space: O(1)
 * - Two pointers: slow for non-zeros, fast for traversal
 * - Alternative: Count zeros and shift elements
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

class MoveZeroes8 {

    // Method 1: Two pointers (most efficient)
    public void moveZeroes(int[] nums) {
        int nonZeroIndex = 0;

        // Move all non-zero elements to the front
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != 0) {
                nums[nonZeroIndex++] = nums[i];
            }
        }

        // Fill the rest with zeros
        for (int i = nonZeroIndex; i < nums.length; i++) {
            nums[i] = 0;
        }
    }

    // Method 2: Optimized two pointers (single pass with swap)
    public void moveZeroesOptimized(int[] nums) {
        int lastNonZeroIndex = 0;

        // Move non-zeros to front, zeros to end
        for (int current = 0; current < nums.length; current++) {
            if (nums[current] != 0) {
                // Swap with last non-zero position
                int temp = nums[lastNonZeroIndex];
                nums[lastNonZeroIndex] = nums[current];
                nums[current] = temp;
                lastNonZeroIndex++;
            }
        }
    }

    // Method 3: Using extra space (not in-place)
    public void moveZeroesWithSpace(int[] nums) {
        int[] temp = new int[nums.length];
        int index = 0;

        // Copy non-zeros first
        for (int num : nums) {
            if (num != 0) {
                temp[index++] = num;
            }
        }

        // Copy back to original array
        System.arraycopy(temp, 0, nums, 0, nums.length);
    }

    // Method 4: Bubble sort approach (inefficient)
    public void moveZeroesBubble(int[] nums) {
        boolean swapped;
        do {
            swapped = false;
            for (int i = 0; i < nums.length - 1; i++) {
                if (nums[i] == 0 && nums[i + 1] != 0) {
                    // Swap
                    int temp = nums[i];
                    nums[i] = nums[i + 1];
                    nums[i + 1] = temp;
                    swapped = true;
                }
            }
        } while (swapped);
    }

    // Method 5: Count zeros and shift
    public void moveZeroesCount(int[] nums) {
        int zeroCount = 0;

        // Count zeros
        for (int num : nums) {
            if (num == 0) {
                zeroCount++;
            }
        }

        // Shift non-zeros to front
        int index = 0;
        for (int num : nums) {
            if (num != 0) {
                nums[index++] = num;
            }
        }

        // Fill end with zeros
        while (zeroCount > 0) {
            nums[index++] = 0;
            zeroCount--;
        }
    }

    // Method 6: Using streams (educational, not in-place)
    public int[] moveZeroesStreams(int[] nums) {
        java.util.List<Integer> nonZeros = java.util.Arrays.stream(nums)
                .filter(x -> x != 0)
                .boxed()
                .collect(java.util.ArrayList::new, java.util.ArrayList::add, java.util.ArrayList::addAll);

        java.util.List<Integer> zeros = java.util.Arrays.stream(nums)
                .filter(x -> x == 0)
                .boxed()
                .collect(java.util.ArrayList::new, java.util.ArrayList::add, java.util.ArrayList::addAll);

        nonZeros.addAll(zeros);
        return nonZeros.stream().mapToInt(Integer::intValue).toArray();
    }

    // Method 7: Move specific value (generalization)
    public void moveElementToEnd(int[] nums, int target) {
        int nonTargetIndex = 0;

        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != target) {
                nums[nonTargetIndex++] = nums[i];
            }
        }

        for (int i = nonTargetIndex; i < nums.length; i++) {
            nums[i] = target;
        }
    }

    // Method 8: Move zeros to front
    public void moveZeroesToFront(int[] nums) {
        int zeroIndex = nums.length - 1;

        for (int i = nums.length - 1; i >= 0; i--) {
            if (nums[i] != 0) {
                nums[zeroIndex--] = nums[i];
            }
        }

        for (int i = 0; i <= zeroIndex; i++) {
            nums[i] = 0;
        }
    }

    // Method 9: Stable move (preserve relative order of zeros too)
    public void moveZeroesStable(int[] nums) {
        // Same as Method 1 - already stable
        moveZeroes(nums);
    }

    // Method 10: Handle multiple target values
    public void moveMultipleToEnd(int[] nums, int[] targets) {
        java.util.Set<Integer> targetSet = new java.util.HashSet<>();
        for (int target : targets) {
            targetSet.add(target);
        }

        int nonTargetIndex = 0;

        for (int i = 0; i < nums.length; i++) {
            if (!targetSet.contains(nums[i])) {
                nums[nonTargetIndex++] = nums[i];
            }
        }

        // Fill with first target value (or could cycle through targets)
        for (int i = nonTargetIndex; i < nums.length; i++) {
            nums[i] = targets[0];
        }
    }

    // Method 11: Move zeros but keep positions relative
    public void moveZeroesPreservePositions(int[] nums) {
        // This is the same as the original requirement
        moveZeroes(nums);
    }

    // Method 12: Count operations
    public int countMoves(int[] nums) {
        int moves = 0;
        int zeroCount = 0;

        for (int num : nums) {
            if (num == 0) {
                zeroCount++;
            } else {
                moves += zeroCount; // Each non-zero moves past all zeros before it
            }
        }

        return moves;
    }

    // Method 13: Move zeros with minimum swaps
    public void moveZeroesMinSwaps(int[] nums) {
        int nonZeroIndex = 0;

        for (int current = 0; current < nums.length; current++) {
            if (nums[current] != 0) {
                if (current != nonZeroIndex) {
                    // Swap
                    int temp = nums[nonZeroIndex];
                    nums[nonZeroIndex] = nums[current];
                    nums[current] = temp;
                }
                nonZeroIndex++;
            }
        }
    }

    // Method 14: Recursive approach (educational)
    public void moveZeroesRecursive(int[] nums) {
        moveZeroesHelper(nums, 0, 0);
    }

    private void moveZeroesHelper(int[] nums, int current, int nonZeroCount) {
        if (current == nums.length) {
            // Fill remaining with zeros
            for (int i = nonZeroCount; i < nums.length; i++) {
                nums[i] = 0;
            }
            return;
        }

        if (nums[current] != 0) {
            nums[nonZeroCount] = nums[current];
            moveZeroesHelper(nums, current + 1, nonZeroCount + 1);
        } else {
            moveZeroesHelper(nums, current + 1, nonZeroCount);
        }
    }

    // Method 15: Handle large arrays efficiently
    public void moveZeroesLargeArray(int[] nums) {
        // Same as Method 1 - already efficient for large arrays
        moveZeroes(nums);
    }

    // Test cases
    public static void main(String[] args) {
        MoveZeroes8 solution = new MoveZeroes8();

        // Test Case 1: Basic case
        int[] nums1 = {0, 1, 0, 3, 12};
        solution.moveZeroes(nums1);
        System.out.print("Moved zeros: ");
        for (int num : nums1) {
            System.out.print(num + " ");
        }
        System.out.println(); // Expected: [1, 3, 12, 0, 0]

        // Test Case 2: No zeros
        int[] nums2 = {1, 2, 3, 4};
        solution.moveZeroes(nums2);
        System.out.print("No zeros: ");
        for (int num : nums2) {
            System.out.print(num + " ");
        }
        System.out.println(); // Expected: [1, 2, 3, 4]

        // Test Case 3: All zeros
        int[] nums3 = {0, 0, 0, 0};
        solution.moveZeroes(nums3);
        System.out.print("All zeros: ");
        for (int num : nums3) {
            System.out.print(num + " ");
        }
        System.out.println(); // Expected: [0, 0, 0, 0]

        // Test Case 4: Single element
        int[] nums4 = {0};
        solution.moveZeroes(nums4);
        System.out.println("Single zero: " + nums4[0]); // Expected: 0

        // Test Case 5: Performance comparison
        int[] largeArray = new int[10000];
        for (int i = 0; i < 10000; i++) {
            largeArray[i] = (i % 10 == 0) ? 0 : i; // Every 10th element is zero
        }

        long startTime, endTime;

        // Two pointers approach
        int[] test1 = largeArray.clone();
        startTime = System.nanoTime();
        solution.moveZeroes(test1);
        endTime = System.nanoTime();
        System.out.println("\nTwo pointers: " + (endTime - startTime) / 1000000 + " ms");

        // Optimized swap approach
        int[] test2 = largeArray.clone();
        startTime = System.nanoTime();
        solution.moveZeroesOptimized(test2);
        endTime = System.nanoTime();
        System.out.println("Optimized swap: " + (endTime - startTime) / 1000000 + " ms");

        // Test Case 6: Move specific element
        int[] nums6 = {1, 2, 3, 2, 4, 2};
        solution.moveElementToEnd(nums6, 2);
        System.out.print("Move 2s to end: ");
        for (int num : nums6) {
            System.out.print(num + " ");
        }
        System.out.println(); // Expected: [1, 3, 4, 2, 2, 2]

        // Test Case 7: Move zeros to front
        int[] nums7 = {1, 0, 2, 0, 3};
        solution.moveZeroesToFront(nums7);
        System.out.print("Zeros to front: ");
        for (int num : nums7) {
            System.out.print(num + " ");
        }
        System.out.println(); // Expected: [0, 0, 1, 2, 3]

        // Test Case 8: Count moves
        int[] nums8 = {0, 1, 0, 3, 12};
        int moves = solution.countMoves(nums8.clone());
        System.out.println("Moves needed: " + moves); // Expected: 2

        // Test Case 9: Multiple targets
        int[] nums9 = {1, 2, 3, 2, 4, 0};
        solution.moveMultipleToEnd(nums9, new int[]{0, 2});
        System.out.print("Move 0s and 2s to end: ");
        for (int num : nums9) {
            System.out.print(num + " ");
        }
        System.out.println(); // Expected: [1, 3, 4, 0, 0, 0]

        // Test Case 10: Edge cases
        System.out.println("\nEdge cases:");

        // Empty array
        int[] empty = {};
        solution.moveZeroes(empty);
        System.out.println("Empty array: " + java.util.Arrays.toString(empty));

        // Large numbers
        int[] largeNums = {1000000, 0, 2000000, 0, 3000000};
        solution.moveZeroes(largeNums);
        System.out.print("Large numbers: ");
        for (int num : largeNums) {
            System.out.print(num + " ");
        }
        System.out.println();

        // Negative numbers
        int[] negNums = {-1, 0, -2, 0, -3};
        solution.moveZeroes(negNums);
        System.out.print("Negative numbers: ");
        for (int num : negNums) {
            System.out.print(num + " ");
        }
        System.out.println();

        // Test Case 11: Recursive approach
        int[] nums11 = {0, 1, 0, 3, 12};
        solution.moveZeroesRecursive(nums11);
        System.out.print("Recursive: ");
        for (int num : nums11) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}