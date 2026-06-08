// Day 2 LeetCode Solutions - Two-Pointer Technique
// Basic Problems - Easy Level

import java.util.Arrays;

public class LeetCodeDay2 {

    // Problem 1: Squares of a Sorted Array (LeetCode #977)
    // Time: O(n), Space: O(n)
    public int[] sortedSquares(int[] nums) {
        int n = nums.length;
        int[] result = new int[n];
        int left = 0, right = n - 1;
        int index = n - 1;

        while (left <= right) {
            int leftSquare = nums[left] * nums[left];
            int rightSquare = nums[right] * nums[right];

            if (leftSquare > rightSquare) {
                result[index] = leftSquare;
                left++;
            } else {
                result[index] = rightSquare;
                right--;
            }
            index--;
        }
        return result;
    }

    // Problem 2: Move Zeroes (LeetCode #283)
    // Time: O(n), Space: O(1)
    public void moveZeroes(int[] nums) {
        int nonZeroIndex = 0;

        // Move all non-zero elements to the front
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != 0) {
                nums[nonZeroIndex] = nums[i];
                nonZeroIndex++;
            }
        }

        // Fill the rest with zeroes
        for (int i = nonZeroIndex; i < nums.length; i++) {
            nums[i] = 0;
        }
    }

    // Problem 3: Remove Element (LeetCode #27)
    // Time: O(n), Space: O(1)
    public int removeElement(int[] nums, int val) {
        int k = 0; // Pointer for next position to place non-val element

        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != val) {
                nums[k] = nums[i];
                k++;
            }
        }
        return k;
    }

    // Problem 4: Valid Palindrome (LeetCode #125)
    // Time: O(n), Space: O(1)
    public boolean isPalindrome(String s) {
        if (s == null || s.length() == 0) return true;

        int left = 0, right = s.length() - 1;

        while (left < right) {
            // Skip non-alphanumeric characters from left
            while (left < right && !Character.isLetterOrDigit(s.charAt(left))) {
                left++;
            }
            // Skip non-alphanumeric characters from right
            while (left < right && !Character.isLetterOrDigit(s.charAt(right))) {
                right--;
            }

            // Compare characters (case insensitive)
            if (Character.toLowerCase(s.charAt(left)) != Character.toLowerCase(s.charAt(right))) {
                return false;
            }

            left++;
            right--;
        }
        return true;
    }

    // Problem 5: Merge Sorted Array (LeetCode #88)
    // Time: O(m+n), Space: O(1)
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int p1 = m - 1;     // Pointer for nums1
        int p2 = n - 1;     // Pointer for nums2
        int p = m + n - 1;  // Pointer for merged array

        // Merge from the end
        while (p1 >= 0 && p2 >= 0) {
            if (nums1[p1] > nums2[p2]) {
                nums1[p] = nums1[p1];
                p1--;
            } else {
                nums1[p] = nums2[p2];
                p2--;
            }
            p--;
        }

        // Copy remaining elements from nums2
        while (p2 >= 0) {
            nums1[p] = nums2[p2];
            p2--;
            p--;
        }
    }

    // Test all methods
    public static void main(String[] args) {
        LeetCodeDay2 solution = new LeetCodeDay2();

        // Test Problem 1: Squares of a Sorted Array
        System.out.println("=== Problem 1: Squares of a Sorted Array ===");
        int[] nums1 = {-4, -1, 0, 3, 10};
        int[] result1 = solution.sortedSquares(nums1);
        System.out.println("Input: " + Arrays.toString(nums1));
        System.out.println("Output: " + Arrays.toString(result1));
        System.out.println();

        // Test Problem 2: Move Zeroes
        System.out.println("=== Problem 2: Move Zeroes ===");
        int[] nums2 = {0, 1, 0, 3, 12};
        System.out.println("Input: " + Arrays.toString(nums2));
        solution.moveZeroes(nums2);
        System.out.println("Output: " + Arrays.toString(nums2));
        System.out.println();

        // Test Problem 3: Remove Element
        System.out.println("=== Problem 3: Remove Element ===");
        int[] nums3 = {3, 2, 2, 3};
        int val = 3;
        int length = solution.removeElement(nums3, val);
        System.out.println("Input: " + Arrays.toString(new int[]{3, 2, 2, 3}));
        System.out.println("Remove " + val + ": " + Arrays.toString(Arrays.copyOf(nums3, length)));
        System.out.println("New length: " + length);
        System.out.println();

        // Test Problem 4: Valid Palindrome
        System.out.println("=== Problem 4: Valid Palindrome ===");
        String[] testStrings = {"A man, a plan, a canal: Panama", "race a car", " ", ""};
        for (String test : testStrings) {
            boolean isPal = solution.isPalindrome(test);
            System.out.println("\"" + test + "\" -> " + isPal);
        }
        System.out.println();

        // Test Problem 5: Merge Sorted Array
        System.out.println("=== Problem 5: Merge Sorted Array ===");
        int[] nums1_5 = {1, 2, 3, 0, 0, 0};
        int[] nums2_5 = {2, 5, 6};
        int m = 3, n = 3;
        System.out.println("nums1: " + Arrays.toString(Arrays.copyOf(nums1_5, m)));
        System.out.println("nums2: " + Arrays.toString(nums2_5));
        solution.merge(nums1_5, m, nums2_5, n);
        System.out.println("Merged: " + Arrays.toString(nums1_5));
    }
}