```java
/**
 * Java Basics - Problem Solving & Algorithms
 * Topic: Array Operations, String Manipulation, Mathematical Problems
 * Difficulty: Intermediate
 * Estimated Time: 60 minutes
 */

import java.util.*;
import java.util.stream.Collectors;

public class JavaBasicsProblems {

    // ==========================================
    // 1. ARRAY PROBLEMS
    // ==========================================

    /**
     * Problem 1: Find two numbers in array that add up to target
     * Time Complexity: O(n^2) - Brute force approach
     */
    public static int[] twoSumBruteForce(int[] nums, int target) {
        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    return new int[]{i, j};
                }
            }
        }
        throw new IllegalArgumentException("No two sum solution");
    }

    /**
     * Problem 1: Optimized two sum using HashMap
     * Time Complexity: O(n) - Single pass with hash table
     */
    public static int[] twoSumOptimized(int[] nums, int target) {
        Map<Integer, Integer> numToIndex = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (numToIndex.containsKey(complement)) {
                return new int[]{numToIndex.get(complement), i};
            }
            numToIndex.put(nums[i], i);
        }
        throw new IllegalArgumentException("No two sum solution");
    }

    /**
     * Problem 2: Remove duplicates from sorted array in-place
     * Returns the length of the array with unique elements
     */
    public static int removeDuplicates(int[] nums) {
        if (nums.length == 0) return 0;

        int uniqueIndex = 0;
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] != nums[uniqueIndex]) {
                uniqueIndex++;
                nums[uniqueIndex] = nums[i];
            }
        }
        return uniqueIndex + 1;
    }

    /**
     * Problem 3: Move all zeros to the end of array while maintaining relative order
     */
    public static void moveZeros(int[] nums) {
        int nonZeroIndex = 0;

        // Move all non-zero elements to the front
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != 0) {
                nums[nonZeroIndex++] = nums[i];
            }
        }

        // Fill the rest with zeros
        while (nonZeroIndex < nums.length) {
            nums[nonZeroIndex++] = 0;
        }
    }

    /**
     * Problem 4: Find the maximum product of two elements in array
     */
    public static int maxProduct(int[] nums) {
        if (nums.length < 2) {
            throw new IllegalArgumentException("Array must have at least 2 elements");
        }

        // Find two largest numbers
        int max1 = Integer.MIN_VALUE;
        int max2 = Integer.MIN_VALUE;

        // Find two smallest numbers (for negative case)
        int min1 = Integer.MAX_VALUE;
        int min2 = Integer.MAX_VALUE;

        for (int num : nums) {
            // Update maximums
            if (num > max1) {
                max2 = max1;
                max1 = num;
            } else if (num > max2) {
                max2 = num;
            }

            // Update minimums
            if (num < min1) {
                min2 = min1;
                min1 = num;
            } else if (num < min2) {
                min2 = num;
            }
        }

        // Return maximum of (max1 * max2) and (min1 * min2)
        return Math.max(max1 * max2, min1 * min2);
    }

    // ==========================================
    // 2. STRING PROBLEMS
    // ==========================================

    /**
     * Problem 5: Check if string is a palindrome
     */
    public static boolean isPalindrome(String s) {
        if (s == null) return false;

        // Remove non-alphanumeric characters and convert to lowercase
        String clean = s.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();

        int left = 0;
        int right = clean.length() - 1;

        while (left < right) {
            if (clean.charAt(left) != clean.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    /**
     * Problem 6: Find the longest common prefix in array of strings
     */
    public static String longestCommonPrefix(String[] strs) {
        if (strs == null || strs.length == 0) return "";

        // Start with first string as prefix
        String prefix = strs[0];

        for (int i = 1; i < strs.length; i++) {
            // While current string doesn't start with prefix, shorten prefix
            while (strs[i].indexOf(prefix) != 0) {
                prefix = prefix.substring(0, prefix.length() - 1);
                if (prefix.isEmpty()) return "";
            }
        }
        return prefix;
    }

    /**
     * Problem 7: Check if two strings are anagrams
     */
    public static boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) return false;

        // Using character count array
        int[] count = new int[26];

        for (char c : s.toCharArray()) {
            count[c - 'a']++;
        }

        for (char c : t.toCharArray()) {
            count[c - 'a']--;
        }

        for (int num : count) {
            if (num != 0) return false;
        }

        return true;
    }

    /**
     * Problem 8: Reverse words in a string
     */
    public static String reverseWords(String s) {
        if (s == null || s.trim().isEmpty()) return "";

        // Split by spaces and filter out empty strings
        String[] words = s.trim().split("\\s+");

        // Reverse the array
        int left = 0;
        int right = words.length - 1;
        while (left < right) {
            String temp = words[left];
            words[left] = words[right];
            words[right] = temp;
            left++;
            right--;
        }

        // Join with single space
        return String.join(" ", words);
    }

    /**
     * Problem 9: Count and say sequence
     * The count-and-say sequence is a sequence of digit strings defined by the recursive formula:
     * countAndSay(1) = "1"
     * countAndSay(n) = describe countAndSay(n-1)
     */
    public static String countAndSay(int n) {
        if (n == 1) return "1";

        String prev = countAndSay(n - 1);
        StringBuilder result = new StringBuilder();

        int count = 1;
        for (int i = 1; i < prev.length(); i++) {
            if (prev.charAt(i) == prev.charAt(i - 1)) {
                count++;
            } else {
                result.append(count).append(prev.charAt(i - 1));
                count = 1;
            }
        }

        // Append the last group
        result.append(count).append(prev.charAt(prev.length() - 1));

        return result.toString();
    }

    // ==========================================
    // 3. MATHEMATICAL PROBLEMS
    // ==========================================

    /**
     * Problem 10: Calculate power (x^n)
     * Time Complexity: O(log n) - Binary exponentiation
     */
    public static double myPow(double x, int n) {
        if (n == 0) return 1.0;

        // Handle negative exponents
        long exp = n; // Use long to handle Integer.MIN_VALUE
        if (exp < 0) {
            x = 1 / x;
            exp = -exp;
        }

        double result = 1.0;
        while (exp > 0) {
            if (exp % 2 == 1) {
                result *= x;
            }
            x *= x;
            exp /= 2;
        }

        return result;
    }

    /**
     * Problem 11: Find square root using binary search
     */
    public static int mySqrt(int x) {
        if (x == 0 || x == 1) return x;

        int left = 1;
        int right = x;
        int result = 0;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            long square = (long) mid * mid; // Use long to prevent overflow

            if (square == x) {
                return mid;
            } else if (square < x) {
                result = mid; // Update result as mid^2 <= x
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }

    /**
     * Problem 12: Check if number is a perfect square
     */
    public static boolean isPerfectSquare(int num) {
        if (num < 0) return false;
        if (num == 0 || num == 1) return true;

        long left = 1;
        long right = num;

        while (left <= right) {
            long mid = left + (right - left) / 2;
            long square = mid * mid;

            if (square == num) {
                return true;
            } else if (square < num) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return false;
    }

    /**
     * Problem 13: Generate Pascal's triangle up to n rows
     */
    public static List<List<Integer>> generatePascalsTriangle(int numRows) {
        List<List<Integer>> triangle = new ArrayList<>();

        for (int i = 0; i < numRows; i++) {
            List<Integer> row = new ArrayList<>();

            for (int j = 0; j <= i; j++) {
                if (j == 0 || j == i) {
                    row.add(1); // First and last elements are always 1
                } else {
                    // Sum of two elements from previous row
                    int sum = triangle.get(i - 1).get(j - 1) + triangle.get(i - 1).get(j);
                    row.add(sum);
                }
            }

            triangle.add(row);
        }

        return triangle;
    }

    // ==========================================
    // 4. SEARCHING AND SORTING PROBLEMS
    // ==========================================

    /**
     * Problem 14: Binary search implementation
     */
    public static int binarySearch(int[] nums, int target) {
        int left = 0;
        int right = nums.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return -1; // Target not found
    }

    /**
     * Problem 15: Find first and last position of element in sorted array
     */
    public static int[] searchRange(int[] nums, int target) {
        int[] result = {-1, -1};

        // Find first occurrence
        int left = 0;
        int right = nums.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] >= target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        if (left < nums.length && nums[left] == target) {
            result[0] = left;
        } else {
            return result; // Target not found
        }

        // Find last occurrence
        right = nums.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] <= target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        result[1] = right;
        return result;
    }

    /**
     * Problem 16: Merge two sorted arrays
     */
    public static void mergeSortedArrays(int[] nums1, int m, int[] nums2, int n) {
        // Start from the end of both arrays
        int i = m - 1; // Last element of nums1's valid part
        int j = n - 1; // Last element of nums2
        int k = m + n - 1; // Last position of nums1

        while (i >= 0 && j >= 0) {
            if (nums1[i] > nums2[j]) {
                nums1[k--] = nums1[i--];
            } else {
                nums1[k--] = nums2[j--];
            }
        }

        // Copy remaining elements from nums2 if any
        while (j >= 0) {
            nums1[k--] = nums2[j--];
        }
    }

    // ==========================================
    // 5. UTILITY METHODS FOR TESTING
    // ==========================================

    /**
     * Print array in formatted way
     */
    public static void printArray(int[] arr) {
        System.out.println(Arrays.toString(arr));
    }

    /**
     * Print 2D list (for Pascal's triangle)
     */
    public static void printTriangle(List<List<Integer>> triangle) {
        for (List<Integer> row : triangle) {
            System.out.println(row);
        }
    }

    // ==========================================
    // MAIN METHOD - TEST ALL PROBLEMS
    // ==========================================

    public static void main(String[] args) {
        System.out.println("==========================================");
        System.out.println("     JAVA BASICS PROBLEM SOLVING");
        System.out.println("==========================================\n");

        // Test Array Problems
        System.out.println("=== ARRAY PROBLEMS ===");

        // Two Sum
        int[] nums1 = {2, 7, 11, 15};
        int target1 = 9;
        System.out.println("Two Sum - Brute Force: " + Arrays.toString(twoSumBruteForce(nums1, target1)));
        System.out.println("Two Sum - Optimized: " + Arrays.toString(twoSumOptimized(nums1, target1)));

        // Remove Duplicates
        int[] nums2 = {1, 1, 2, 2, 3, 3, 3};
        System.out.println("Original array: " + Arrays.toString(nums2));
        int newLength = removeDuplicates(nums2);
        System.out.println("After removing duplicates (length " + newLength + "): " + Arrays.toString(Arrays.copyOf(nums2, newLength)));

        // Move Zeros
        int[] nums3 = {0, 1, 0, 3, 12};
        System.out.println("Before moving zeros: " + Arrays.toString(nums3));
        moveZeros(nums3);
        System.out.println("After moving zeros: " + Arrays.toString(nums3));

        // Max Product
        int[] nums4 = {1, 2, 3, 4};
        System.out.println("Max product of two elements: " + maxProduct(nums4));

        System.out.println();

        // Test String Problems
        System.out.println("=== STRING PROBLEMS ===");

        // Palindrome
        String[] palindromes = {"A man, a plan, a canal: Panama", "race a car", "abba", "hello"};
        for (String s : palindromes) {
            System.out.println("\"" + s + "\" is palindrome: " + isPalindrome(s));
        }

        // Longest Common Prefix
        String[][] strArrays = {
            {"flower", "flow", "flight"},
            {"dog", "racecar", "car"},
            {"apple", "ape", "april"}
        };
        for (String[] arr : strArrays) {
            System.out.println("LCP of " + Arrays.toString(arr) + ": \"" + longestCommonPrefix(arr) + "\"");
        }

        // Anagram
        System.out.println("Anagram check: \"listen\" and \"silent\": " + isAnagram("listen", "silent"));
        System.out.println("Anagram check: \"hello\" and \"world\": " + isAnagram("hello", "world"));

        // Reverse Words
        String sentence = "  the   sky    is   blue  ";
        System.out.println("Original: \"" + sentence + "\"");
        System.out.println("Reversed: \"" + reverseWords(sentence) + "\"");

        // Count and Say
        System.out.println("Count and Say sequence:");
        for (int i = 1; i <= 6; i++) {
            System.out.println("n=" + i + ": " + countAndSay(i));
        }

        System.out.println();

        // Test Mathematical Problems
        System.out.println("=== MATHEMATICAL PROBLEMS ===");

        // Power function
        System.out.println("2^10 = " + myPow(2, 10));
        System.out.println("3^-2 = " + myPow(3, -2));

        // Square root
        int[] sqrtTests = {0, 1, 4, 8, 9, 16, 25};
        for (int num : sqrtTests) {
            System.out.println("sqrt(" + num + ") = " + mySqrt(num));
        }

        // Perfect square
        int[] squareTests = {0, 1, 4, 8, 9, 16, 25};
        for (int num : squareTests) {
            System.out.println(num + " is perfect square: " + isPerfectSquare(num));
        }

        // Pascal's Triangle
        System.out.println("Pascal's Triangle (5 rows):");
        printTriangle(generatePascalsTriangle(5));

        System.out.println();

        // Test Searching Problems
        System.out.println("=== SEARCHING PROBLEMS ===");

        // Binary Search
        int[] sortedArray = {1, 3, 5, 7, 9, 11, 13, 15};
        System.out.println("Array: " + Arrays.toString(sortedArray));
        System.out.println("Binary search for 7: " + binarySearch(sortedArray, 7));
        System.out.println("Binary search for 4: " + binarySearch(sortedArray, 4));

        // Search Range
        int[] rangeArray = {5, 7, 7, 8, 8, 10};
        System.out.println("Array: " + Arrays.toString(rangeArray));
        System.out.println("Range of 8: " + Arrays.toString(searchRange(rangeArray, 8)));
        System.out.println("Range of 6: " + Arrays.toString(searchRange(rangeArray, 6)));

        // Merge Sorted Arrays
        int[] nums5 = {1, 2, 3, 0, 0, 0};
        int[] nums6 = {2, 5, 6};
        System.out.println("Before merge: nums1=" + Arrays.toString(nums5) + ", nums2=" + Arrays.toString(nums6));
        mergeSortedArrays(nums5, 3, nums6, 3);
        System.out.println("After merge: " + Arrays.toString(nums5));

        System.out.println("\n==========================================");
        System.out.println("        ALL TESTS COMPLETED");
        System.out.println("==========================================");
    }
}

/*
 * COMPILATION AND RUNNING INSTRUCTIONS:
 * ====================================
 *
 * 1. Save this file as: JavaBasicsProblems.java
 * 2. Compile: javac JavaBasicsProblems.java
 * 3. Run: java JavaBasicsProblems
 *
 * EXPECTED OUTPUT:
 * ===============
 * The program will test all implemented algorithms with various inputs
 * and display results for array operations, string manipulations,
 * mathematical calculations, and searching problems.
 *
 * KEY LEARNING POINTS:
 * ===================
 * 1. Time and space complexity analysis for different approaches
 * 2. Optimization techniques (HashMap for O(1) lookups, binary search)
 * 3. Edge case handling (empty arrays, null strings, overflow prevention)
 * 4. Algorithm design patterns (two pointers, sliding window, divide & conquer)
 * 5. Java standard library usage (Arrays, Collections, String methods)
 *
 * INTERVIEW PREPARATION:
 * =====================
 * - Practice explaining time/space complexity for each solution
 * - Know multiple approaches for the same problem
 * - Understand when to use different data structures
 * - Be able to write clean, bug-free code under time pressure
 * - Practice whiteboard coding for these problems
 *
 * DIFFICULTY BREAKDOWN:
 * ====================
 * Easy: Remove duplicates, move zeros, palindrome check, anagram check
 * Medium: Two sum (optimized), longest common prefix, reverse words
 * Hard: Count and say, search range, merge sorted arrays
 */