import java.util.HashMap;
import java.util.Map;

/**
 * LeetCode #1: Two Sum
 * Difficulty: Easy
 * Day: 1 of 90
 * 
 * Problem: Given an array of integers nums and an integer target, return indices 
 * of the two numbers such that they add up to target.
 * 
 * Approach 1: Brute Force O(n²)
 * Approach 2: HashMap O(n) - OPTIMAL
 */

// ========== APPROACH 1: BRUTE FORCE ==========
class SolutionBruteForce {
    /**
     * Time Complexity: O(n²) - nested loops
     * Space Complexity: O(1) - no extra space
     */
    public int[] twoSum(int[] nums, int target) {
        // Check every possible pair
        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    return new int[] {i, j};
                }
            }
        }
        return new int[] {};  // No solution found
    }
}

// ========== APPROACH 2: HASHMAP (OPTIMAL) ==========
class SolutionOptimal {
    /**
     * Time Complexity: O(n) - single pass through array
     * Space Complexity: O(n) - HashMap storage
     * 
     * Logic:
     * - For each number, calculate complement = target - current number
     * - Check if complement exists in HashMap
     * - If yes, return indices
     * - If no, store current number and its index in HashMap
     */
    public int[] twoSum(int[] nums, int target) {
        // HashMap to store: <number, index>
        Map<Integer, Integer> map = new HashMap<>();
        
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            
            // Check if complement exists in map
            if (map.containsKey(complement)) {
                return new int[] {map.get(complement), i};
            }
            
            // Store current number and its index
            map.put(nums[i], i);
        }
        
        return new int[] {};  // No solution
    }
}

// ========== TEST PROGRAM ==========
public class TwoSum {
    public static void main(String[] args) {
        System.out.println("========== LEETCODE #1: TWO SUM ==========\n");
        
        SolutionBruteForce bruteSol = new SolutionBruteForce();
        SolutionOptimal optimalSol = new SolutionOptimal();
        
        // Test cases
        runTest(bruteSol, optimalSol, new int[]{2,7,11,15}, 9, "Test 1");
        runTest(bruteSol, optimalSol, new int[]{3,2,4}, 6, "Test 2");
        runTest(bruteSol, optimalSol, new int[]{3,3}, 6, "Test 3");
        runTest(bruteSol, optimalSol, new int[]{-1,-2,-3,-4,-5}, -8, "Test 4");
        runTest(bruteSol, optimalSol, new int[]{0,4,3,0}, 0, "Test 5");
    }
    
    static void runTest(SolutionBruteForce brute, SolutionOptimal optimal, 
                        int[] nums, int target, String testName) {
        System.out.println("========== " + testName + " ==========");
        System.out.print("Input: nums = [");
        for (int i = 0; i < nums.length; i++) {
            System.out.print(nums[i]);
            if (i < nums.length - 1) System.out.print(",");
        }
        System.out.println("], target = " + target);
        
        // Brute Force
        int[] result1 = brute.twoSum(nums, target);
        System.out.println("Brute Force: [" + result1[0] + ", " + result1[1] + "]");
        System.out.println("  Values: " + nums[result1[0]] + " + " + nums[result1[1]] + " = " + target);
        
        // Optimal
        int[] result2 = optimal.twoSum(nums, target);
        System.out.println("HashMap:     [" + result2[0] + ", " + result2[1] + "]");
        System.out.println("  Values: " + nums[result2[0]] + " + " + nums[result2[1]] + " = " + target);
        
        // Verify
        boolean correct = (nums[result1[0]] + nums[result1[1]] == target) &&
                         (nums[result2[0]] + nums[result2[1]] == target);
        System.out.println("Status: " + (correct ? "✅ PASS" : "❌ FAIL"));
        System.out.println();
    }
}

/*
Expected Output:
========== LEETCODE #1: TWO SUM ==========

========== Test 1 ==========
Input: nums = [2,7,11,15], target = 9
Brute Force: [0, 1]
  Values: 2 + 7 = 9
HashMap:     [0, 1]
  Values: 2 + 7 = 9
Status: ✅ PASS

========== Test 2 ==========
Input: nums = [3,2,4], target = 6
Brute Force: [1, 2]
  Values: 2 + 4 = 6
HashMap:     [1, 2]
  Values: 2 + 4 = 6
Status: ✅ PASS

========== Test 3 ==========
Input: nums = [3,3], target = 6
Brute Force: [0, 1]
  Values: 3 + 3 = 6
HashMap:     [0, 1]
  Values: 3 + 3 = 6
Status: ✅ PASS
*/
