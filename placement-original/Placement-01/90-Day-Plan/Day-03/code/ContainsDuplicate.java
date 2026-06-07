/**
 * LeetCode #217 - Contains Duplicate
 * Difficulty: Easy
 * 
 * Problem: Given an integer array nums, return true if any value appears 
 * at least twice in the array, and return false if every element is distinct.
 * 
 * Examples:
 * Input: nums = [1,2,3,1]
 * Output: true
 * 
 * Input: nums = [1,2,3,4]
 * Output: false
 * 
 * Input: nums = [1,1,1,3,3,4,3,2,4,2]
 * Output: true
 */

import java.util.*;

public class ContainsDuplicate {
    
    public static void main(String[] args) {
        System.out.println("╔════════════════════════════════════╗");
        System.out.println("║  LeetCode #217: Contains Duplicate ║");
        System.out.println("╚════════════════════════════════════╝\n");
        
        // Test cases
        int[][] testCases = {
            {1, 2, 3, 1},
            {1, 2, 3, 4},
            {1, 1, 1, 3, 3, 4, 3, 2, 4, 2}
        };
        
        for (int i = 0; i < testCases.length; i++) {
            System.out.println("Test Case " + (i + 1) + ": " + Arrays.toString(testCases[i]));
            
            System.out.println("Approach 1 (Brute Force): " + 
                             containsDuplicate_BruteForce(testCases[i]));
            System.out.println("Approach 2 (Sorting): " + 
                             containsDuplicate_Sorting(testCases[i].clone()));
            System.out.println("Approach 3 (HashSet): " + 
                             containsDuplicate_HashSet(testCases[i]));
            System.out.println();
        }
        
        // Performance comparison
        performanceComparison();
    }
    
    /**
     * APPROACH 1: Brute Force
     * Compare every element with every other element
     * 
     * Time Complexity: O(n²)
     * Space Complexity: O(1)
     * 
     * ✅ Pros: No extra space needed
     * ❌ Cons: Very slow for large arrays
     */
    public static boolean containsDuplicate_BruteForce(int[] nums) {
        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[i] == nums[j]) {
                    return true;  // Found duplicate
                }
            }
        }
        return false;  // No duplicates found
    }
    
    /**
     * APPROACH 2: Sorting
     * Sort the array, then check adjacent elements
     * 
     * Time Complexity: O(n log n) - due to sorting
     * Space Complexity: O(1) or O(n) depending on sorting algorithm
     * 
     * ✅ Pros: Faster than brute force, reasonable space
     * ❌ Cons: Modifies original array (need to clone if immutability required)
     */
    public static boolean containsDuplicate_Sorting(int[] nums) {
        // Sort the array
        Arrays.sort(nums);
        
        // Check adjacent elements
        for (int i = 0; i < nums.length - 1; i++) {
            if (nums[i] == nums[i + 1]) {
                return true;  // Found duplicate
            }
        }
        return false;  // No duplicates found
    }
    
    /**
     * APPROACH 3: HashSet (OPTIMAL)
     * Use HashSet to track seen elements
     * 
     * Time Complexity: O(n) - single pass through array
     * Space Complexity: O(n) - HashSet storage
     * 
     * ✅ Pros: Fastest approach, single pass
     * ❌ Cons: Uses extra space
     * 
     * This is the BEST approach for interviews!
     */
    public static boolean containsDuplicate_HashSet(int[] nums) {
        HashSet<Integer> seen = new HashSet<>();
        
        for (int num : nums) {
            // If element already in set, we found a duplicate
            if (seen.contains(num)) {
                return true;
            }
            // Otherwise, add to set
            seen.add(num);
        }
        
        return false;  // No duplicates found
    }
    
    /**
     * BONUS: Using Set size comparison
     * Convert array to Set and compare sizes
     */
    public static boolean containsDuplicate_SetSize(int[] nums) {
        Set<Integer> uniqueSet = new HashSet<>();
        for (int num : nums) {
            uniqueSet.add(num);
        }
        // If set size < array length, there were duplicates
        return uniqueSet.size() < nums.length;
    }
    
    /**
     * Performance comparison with large dataset
     */
    public static void performanceComparison() {
        System.out.println("=".repeat(50));
        System.out.println("PERFORMANCE COMPARISON");
        System.out.println("=".repeat(50));
        
        // Create test array with 10,000 elements
        int[] largeArray = new int[10000];
        for (int i = 0; i < largeArray.length; i++) {
            largeArray[i] = i;
        }
        largeArray[9999] = 5000;  // Add one duplicate at end
        
        // Test Brute Force (commented out - too slow)
        // long start1 = System.nanoTime();
        // containsDuplicate_BruteForce(largeArray);
        // long time1 = System.nanoTime() - start1;
        // System.out.println("Brute Force: " + time1/1000000 + " ms");
        
        // Test Sorting
        long start2 = System.nanoTime();
        containsDuplicate_Sorting(largeArray.clone());
        long time2 = System.nanoTime() - start2;
        System.out.println("Sorting:     " + time2/1000000.0 + " ms");
        
        // Test HashSet
        long start3 = System.nanoTime();
        containsDuplicate_HashSet(largeArray);
        long time3 = System.nanoTime() - start3;
        System.out.println("HashSet:     " + time3/1000000.0 + " ms");
        
        System.out.println("\n✅ HashSet is the fastest!");
    }
    
    /**
     * INTERVIEW TIPS:
     * 
     * 1. ALWAYS clarify constraints:
     *    - Array size?
     *    - Value range?
     *    - Can we modify input?
     * 
     * 2. Mention trade-offs:
     *    - Brute Force: O(n²) time, O(1) space
     *    - Sorting: O(n log n) time, O(1) space
     *    - HashSet: O(n) time, O(n) space
     * 
     * 3. Start with brute force, then optimize
     * 
     * 4. HashSet is usually the best answer for this problem
     * 
     * 5. Follow-up questions to expect:
     *    - What if we can't use extra space?
     *    - What if array is already sorted?
     *    - Can you find the duplicate element?
     */
}
