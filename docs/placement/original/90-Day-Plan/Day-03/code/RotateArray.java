/**
 * LeetCode #189 - Rotate Array
 * Difficulty: Medium
 * 
 * Problem: Given an integer array nums, rotate the array to the right by k steps,
 * where k is non-negative.
 * 
 * Examples:
 * Input: nums = [1,2,3,4,5,6,7], k = 3
 * Output: [5,6,7,1,2,3,4]
 * Explanation:
 * rotate 1 steps to the right: [7,1,2,3,4,5,6]
 * rotate 2 steps to the right: [6,7,1,2,3,4,5]
 * rotate 3 steps to the right: [5,6,7,1,2,3,4]
 * 
 * Input: nums = [-1,-100,3,99], k = 2
 * Output: [3,99,-1,-100]
 */

import java.util.Arrays;

public class RotateArray {
    
    public static void main(String[] args) {
        System.out.println("╔════════════════════════════════════╗");
        System.out.println("║  LeetCode #189: Rotate Array      ║");
        System.out.println("╚════════════════════════════════════╝\n");
        
        // Test cases
        testCase1();
        testCase2();
        testCase3();
        
        // Detailed walkthrough
        detailedWalkthrough();
        
        // Performance comparison
        performanceComparison();
    }
    
    static void testCase1() {
        System.out.println("TEST CASE 1:");
        int[] nums = {1, 2, 3, 4, 5, 6, 7};
        int k = 3;
        System.out.println("Original: " + Arrays.toString(nums));
        System.out.println("Rotate by: " + k);
        
        rotate_Optimal(nums.clone(), k);
        System.out.println();
    }
    
    static void testCase2() {
        System.out.println("TEST CASE 2:");
        int[] nums = {-1, -100, 3, 99};
        int k = 2;
        System.out.println("Original: " + Arrays.toString(nums));
        System.out.println("Rotate by: " + k);
        
        rotate_Optimal(nums.clone(), k);
        System.out.println();
    }
    
    static void testCase3() {
        System.out.println("TEST CASE 3 (k > array length):");
        int[] nums = {1, 2, 3};
        int k = 5;  // Same as k = 2 (5 % 3 = 2)
        System.out.println("Original: " + Arrays.toString(nums));
        System.out.println("Rotate by: " + k + " (effectively " + (k % nums.length) + ")");
        
        rotate_Optimal(nums.clone(), k);
        System.out.println();
    }
    
    /**
     * APPROACH 1: Using Extra Array
     * Create new array and place elements at rotated positions
     * 
     * Time Complexity: O(n)
     * Space Complexity: O(n) - extra array
     * 
     * ✅ Pros: Simple and intuitive
     * ❌ Cons: Uses extra space
     */
    public static void rotate_ExtraArray(int[] nums, int k) {
        int n = nums.length;
        k = k % n;  // Handle k > n
        
        int[] result = new int[n];
        
        // Place last k elements at beginning
        for (int i = 0; i < k; i++) {
            result[i] = nums[n - k + i];
        }
        
        // Place first n-k elements after
        for (int i = 0; i < n - k; i++) {
            result[k + i] = nums[i];
        }
        
        // Copy back to original array
        for (int i = 0; i < n; i++) {
            nums[i] = result[i];
        }
        
        System.out.println("Result (Extra Array): " + Arrays.toString(nums));
    }
    
    /**
     * APPROACH 2: Rotate One by One
     * Rotate array one position at a time, k times
     * 
     * Time Complexity: O(n * k)
     * Space Complexity: O(1)
     * 
     * ❌ Cons: Very slow for large k
     */
    public static void rotate_OneByOne(int[] nums, int k) {
        k = k % nums.length;
        
        for (int i = 0; i < k; i++) {
            rotateByOne(nums);
        }
        
        System.out.println("Result (One by One): " + Arrays.toString(nums));
    }
    
    // Helper: rotate array by one position
    private static void rotateByOne(int[] nums) {
        int last = nums[nums.length - 1];
        for (int i = nums.length - 1; i > 0; i--) {
            nums[i] = nums[i - 1];
        }
        nums[0] = last;
    }
    
    /**
     * APPROACH 3: Using Reverse (OPTIMAL) ⭐
     * Reverse portions of array to achieve rotation
     * 
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     * 
     * Algorithm:
     * 1. Reverse entire array
     * 2. Reverse first k elements
     * 3. Reverse remaining n-k elements
     * 
     * Example: [1,2,3,4,5,6,7], k=3
     * Step 1: Reverse all → [7,6,5,4,3,2,1]
     * Step 2: Reverse first 3 → [5,6,7,4,3,2,1]
     * Step 3: Reverse last 4 → [5,6,7,1,2,3,4] ✅
     * 
     * ✅ This is the BEST approach - O(n) time, O(1) space!
     */
    public static void rotate_Optimal(int[] nums, int k) {
        int n = nums.length;
        k = k % n;  // Handle k > n
        
        // Step 1: Reverse entire array
        reverse(nums, 0, n - 1);
        
        // Step 2: Reverse first k elements
        reverse(nums, 0, k - 1);
        
        // Step 3: Reverse remaining elements
        reverse(nums, k, n - 1);
        
        System.out.println("Result (Optimal): " + Arrays.toString(nums));
    }
    
    // Helper: reverse array from index start to end
    private static void reverse(int[] nums, int start, int end) {
        while (start < end) {
            int temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }
    
    /**
     * APPROACH 4: Cyclic Replacements
     * Advanced O(1) space solution
     * 
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     */
    public static void rotate_Cyclic(int[] nums, int k) {
        int n = nums.length;
        k = k % n;
        
        int count = 0;  // Number of elements moved
        
        for (int start = 0; count < n; start++) {
            int current = start;
            int prev = nums[start];
            
            do {
                int next = (current + k) % n;
                int temp = nums[next];
                nums[next] = prev;
                prev = temp;
                current = next;
                count++;
            } while (start != current);
        }
        
        System.out.println("Result (Cyclic): " + Arrays.toString(nums));
    }
    
    /**
     * Detailed walkthrough showing each step
     */
    public static void detailedWalkthrough() {
        System.out.println("=".repeat(50));
        System.out.println("DETAILED WALKTHROUGH - REVERSE APPROACH");
        System.out.println("=".repeat(50));
        
        int[] nums = {1, 2, 3, 4, 5, 6, 7};
        int k = 3;
        
        System.out.println("Original array: " + Arrays.toString(nums));
        System.out.println("Rotate by: " + k + "\n");
        
        // Step 1: Reverse entire array
        reverse(nums, 0, nums.length - 1);
        System.out.println("Step 1 - Reverse all: " + Arrays.toString(nums));
        
        // Step 2: Reverse first k elements
        reverse(nums, 0, k - 1);
        System.out.println("Step 2 - Reverse first " + k + ": " + Arrays.toString(nums));
        
        // Step 3: Reverse remaining elements
        reverse(nums, k, nums.length - 1);
        System.out.println("Step 3 - Reverse remaining: " + Arrays.toString(nums));
        
        System.out.println("\n✅ Final result: " + Arrays.toString(nums));
        System.out.println();
    }
    
    /**
     * Performance comparison
     */
    public static void performanceComparison() {
        System.out.println("=".repeat(50));
        System.out.println("PERFORMANCE COMPARISON");
        System.out.println("=".repeat(50));
        
        int size = 100000;
        int k = 50000;
        
        // Test Extra Array approach
        int[] arr1 = new int[size];
        for (int i = 0; i < size; i++) arr1[i] = i;
        
        long start1 = System.nanoTime();
        rotate_ExtraArray(arr1, k);
        long time1 = System.nanoTime() - start1;
        
        // Test Optimal approach
        int[] arr2 = new int[size];
        for (int i = 0; i < size; i++) arr2[i] = i;
        
        long start2 = System.nanoTime();
        rotate_Optimal(arr2, k);
        long time2 = System.nanoTime() - start2;
        
        System.out.println("Array size: " + size);
        System.out.println("Rotation: " + k);
        System.out.println("\nExtra Array: " + time1/1000000.0 + " ms");
        System.out.println("Optimal (Reverse): " + time2/1000000.0 + " ms");
        
        // Verify both give same result
        boolean same = Arrays.equals(arr1, arr2);
        System.out.println("\n✅ Both approaches give same result: " + same);
    }
    
    /**
     * INTERVIEW TIPS:
     * 
     * 1. Handle edge cases:
     *    - k = 0 (no rotation)
     *    - k >= n (use k % n)
     *    - Empty array or single element
     * 
     * 2. Approach progression:
     *    - Start with extra array (simple)
     *    - Mention it uses O(n) space
     *    - Optimize to reverse approach (O(1) space)
     * 
     * 3. Explain reverse approach clearly:
     *    - Use example to show how it works
     *    - Explain why reversing works
     * 
     * 4. Key insight: 
     *    Rotating right by k is same as:
     *    - Taking last k elements to front
     *    - Which is achieved by 3 reversals
     * 
     * 5. Related problems:
     *    - Rotate left instead of right
     *    - Rotate 2D matrix
     *    - Circular array rotation
     * 
     * 6. Complexity analysis:
     *    - Extra array: O(n) time, O(n) space
     *    - Reverse: O(n) time, O(1) space ⭐ BEST
     * 
     * 7. Common mistakes:
     *    - Forgetting to use k % n
     *    - Off-by-one errors in reverse indices
     *    - Not handling empty array
     */
}
