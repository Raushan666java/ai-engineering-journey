// Day 2 Advanced Problems - Two-Pointer Technique
// Medium/Hard Level Problems

import java.util.*;

public class AdvancedProblems {

    // Problem 1: 3Sum (LeetCode #15) - Medium
    // Time: O(n²), Space: O(1) excluding result
    public List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        Arrays.sort(nums);

        for (int i = 0; i < nums.length - 2; i++) {
            // Skip duplicates for the first element
            if (i > 0 && nums[i] == nums[i - 1]) continue;

            int left = i + 1;
            int right = nums.length - 1;
            int target = -nums[i];

            while (left < right) {
                int sum = nums[left] + nums[right];

                if (sum == target) {
                    result.add(Arrays.asList(nums[i], nums[left], nums[right]));

                    // Skip duplicates for the second element
                    while (left < right && nums[left] == nums[left + 1]) left++;
                    // Skip duplicates for the third element
                    while (left < right && nums[right] == nums[right - 1]) right--;

                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
        return result;
    }

    // Problem 2: Container With Most Water (LeetCode #11) - Medium
    // Time: O(n), Space: O(1)
    public int maxArea(int[] height) {
        int maxArea = 0;
        int left = 0;
        int right = height.length - 1;

        while (left < right) {
            // Calculate area with current pointers
            int width = right - left;
            int currentHeight = Math.min(height[left], height[right]);
            int currentArea = width * currentHeight;
            maxArea = Math.max(maxArea, currentArea);

            // Move the pointer with smaller height
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
        return maxArea;
    }

    // Problem 3: Trapping Rain Water (LeetCode #42) - Hard
    // Time: O(n), Space: O(1) - Two Pointer Approach
    public int trap(int[] height) {
        if (height == null || height.length == 0) return 0;

        int left = 0, right = height.length - 1;
        int leftMax = 0, rightMax = 0;
        int totalWater = 0;

        while (left < right) {
            if (height[left] < height[right]) {
                if (height[left] >= leftMax) {
                    leftMax = height[left];
                } else {
                    totalWater += leftMax - height[left];
                }
                left++;
            } else {
                if (height[right] >= rightMax) {
                    rightMax = height[right];
                } else {
                    totalWater += rightMax - height[right];
                }
                right--;
            }
        }
        return totalWater;
    }

    // Additional Helper Methods for Understanding

    // Brute Force 3Sum (for comparison) - O(n³)
    public List<List<Integer>> threeSumBruteForce(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        Arrays.sort(nums); // Sort for easier duplicate handling

        for (int i = 0; i < nums.length - 2; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) continue;

            for (int j = i + 1; j < nums.length - 1; j++) {
                if (j > i + 1 && nums[j] == nums[j - 1]) continue;

                for (int k = j + 1; k < nums.length; k++) {
                    if (k > j + 1 && nums[k] == nums[k - 1]) continue;

                    if (nums[i] + nums[j] + nums[k] == 0) {
                        result.add(Arrays.asList(nums[i], nums[j], nums[k]));
                    }
                }
            }
        }
        return result;
    }

    // Container With Most Water - Brute Force (for comparison) - O(n²)
    public int maxAreaBruteForce(int[] height) {
        int maxArea = 0;
        for (int i = 0; i < height.length; i++) {
            for (int j = i + 1; j < height.length; j++) {
                int width = j - i;
                int currentHeight = Math.min(height[i], height[j]);
                int currentArea = width * currentHeight;
                maxArea = Math.max(maxArea, currentArea);
            }
        }
        return maxArea;
    }

    // Test all methods
    public static void main(String[] args) {
        AdvancedProblems solution = new AdvancedProblems();

        // Test Problem 1: 3Sum
        System.out.println("=== Problem 1: 3Sum ===");
        int[] nums1 = {-1, 0, 1, 2, -1, -4};
        List<List<Integer>> result1 = solution.threeSum(nums1);
        System.out.println("Input: " + Arrays.toString(nums1));
        System.out.println("3Sum combinations: " + result1);
        System.out.println();

        // Test Problem 2: Container With Most Water
        System.out.println("=== Problem 2: Container With Most Water ===");
        int[] height2 = {1, 8, 6, 2, 5, 4, 8, 3, 7};
        int result2 = solution.maxArea(height2);
        System.out.println("Height: " + Arrays.toString(height2));
        System.out.println("Maximum area: " + result2);

        // Compare with brute force
        int bruteResult2 = solution.maxAreaBruteForce(height2);
        System.out.println("Brute force result: " + bruteResult2);
        System.out.println("Results match: " + (result2 == bruteResult2));
        System.out.println();

        // Test Problem 3: Trapping Rain Water
        System.out.println("=== Problem 3: Trapping Rain Water ===");
        int[] height3 = {0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1};
        int result3 = solution.trap(height3);
        System.out.println("Height: " + Arrays.toString(height3));
        System.out.println("Trapped water: " + result3);
        System.out.println();

        // Performance Comparison for 3Sum
        System.out.println("=== Performance Comparison: 3Sum ===");
        int[] largeArray = generateRandomArray(20, -10, 10);
        System.out.println("Array size: " + largeArray.length);

        long startTime = System.nanoTime();
        List<List<Integer>> optimizedResult = solution.threeSum(largeArray);
        long optimizedTime = System.nanoTime() - startTime;

        startTime = System.nanoTime();
        List<List<Integer>> bruteResult = solution.threeSumBruteForce(largeArray);
        long bruteTime = System.nanoTime() - startTime;

        System.out.println("Optimized (Two Pointer): " + optimizedTime / 1000000 + " ms");
        System.out.println("Brute Force: " + bruteTime / 1000000 + " ms");
        System.out.println("Speedup: " + (double) bruteTime / optimizedTime + "x");
        System.out.println("Results match: " + optimizedResult.equals(bruteResult));
    }

    // Helper method to generate random array for testing
    private static int[] generateRandomArray(int size, int min, int max) {
        Random random = new Random();
        int[] arr = new int[size];
        for (int i = 0; i < size; i++) {
            arr[i] = random.nextInt(max - min + 1) + min;
        }
        return arr;
    }
}