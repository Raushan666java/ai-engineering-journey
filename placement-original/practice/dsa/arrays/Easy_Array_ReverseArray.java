// package practice.dsa.arrays;

import java.util.Arrays;

/**
 * Problem: Reverse an Array
 * 
 * Given an array, reverse the elements in-place.
 * 
 * Example:
 * Input: arr = [1, 2, 3, 4, 5]
 * Output: [5, 4, 3, 2, 1]
 * 
 * Company Tags: Amazon, Microsoft, Adobe
 * Difficulty: Easy
 */
public class Easy_Array_ReverseArray {
    
    /**
     * Approach 1: Two Pointer
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     */
    public static void reverseArray(int[] arr) {
        int left = 0;
        int right = arr.length - 1;
        
        while (left < right) {
            // Swap elements
            int temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            
            left++;
            right--;
        }
    }
    
    /**
     * Approach 2: Using recursion
     * Time Complexity: O(n)
     * Space Complexity: O(n) - due to recursion stack
     */
    public static void reverseArrayRecursive(int[] arr, int start, int end) {
        if (start >= end) {
            return;
        }
        
        // Swap
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        
        // Recursive call
        reverseArrayRecursive(arr, start + 1, end - 1);
    }
    
    public static void main(String[] args) {
        // Test Case 1
        int[] arr1 = {1, 2, 3, 4, 5};
        System.out.println("Original Array: " + Arrays.toString(arr1));
        reverseArray(arr1);
        System.out.println("Reversed Array: " + Arrays.toString(arr1));
        
        // Test Case 2
        int[] arr2 = {10, 20, 30, 40, 50, 60};
        System.out.println("\nOriginal Array: " + Arrays.toString(arr2));
        reverseArrayRecursive(arr2, 0, arr2.length - 1);
        System.out.println("Reversed Array (Recursive): " + Arrays.toString(arr2));
        
        // Test Case 3 - Single element
        int[] arr3 = {100};
        System.out.println("\nOriginal Array: " + Arrays.toString(arr3));
        reverseArray(arr3);
        System.out.println("Reversed Array: " + Arrays.toString(arr3));
    }
}

/**
 * Key Learnings:
 * 1. Two-pointer technique is efficient for in-place reversal
 * 2. Always check for edge cases (empty, single element)
 * 3. Iterative approach is better than recursive (no stack overflow risk)
 */
