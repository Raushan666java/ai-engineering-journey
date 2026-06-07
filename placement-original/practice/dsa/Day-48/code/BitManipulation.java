/**
 * Day 48: Bit Manipulation - Mastering Binary Operations
 * 
 * This file contains comprehensive implementations covering:
 * 1. Number of 1 Bits (Hamming Weight)
 * 2. Reverse Bits
 * 3. Single Number
 * 4. Single Number II
 * 5. Bitwise AND of Numbers Range
 * 6. Maximum XOR of Two Numbers in Array
 * 7. Power of Two
 * 8. Missing Number
 * 9. Sum of Two Integers
 * 10. Subsets (Bitmask Approach)
 * 11. Gray Code
 * 12. Minimum Flips to Make OR Equal to Target
 * 
 * Each problem includes:
 * - Multiple solution approaches
 * - Detailed complexity analysis
 * - Comprehensive test cases
 * - Bit manipulation patterns
 * 
 * @author Placement Preparation
 * @version 1.0
 */

package dsa.day48;

import java.util.*;

public class BitManipulation {
    
    // ==================== PROBLEM 1: NUMBER OF 1 BITS (HAMMING WEIGHT) ====================
    
    /**
     * Problem 1: Number of 1 Bits (Hamming Weight)
     * 
     * Count the number of 1 bits in an unsigned integer.
     * 
     * Example:
     * Input: n = 11 (binary: 1011)
     * Output: 3
     * 
     * LeetCode #191
     */
    
    /**
     * Approach 1: Loop and Check Each Bit
     * Time: O(32) = O(1), Space: O(1)
     */
    public static int hammingWeight1(int n) {
        int count = 0;
        for (int i = 0; i < 32; i++) {
            if ((n & (1 << i)) != 0) {
                count++;
            }
        }
        return count;
    }
    
    /**
     * Approach 2: Brian Kernighan's Algorithm (Optimal)
     * n & (n-1) removes the rightmost set bit
     * Time: O(k) where k = number of set bits, Space: O(1)
     */
    public static int hammingWeight2(int n) {
        int count = 0;
        while (n != 0) {
            n &= (n - 1); // Remove rightmost set bit
            count++;
        }
        return count;
    }
    
    /**
     * Approach 3: Using Integer.bitCount() (Built-in)
     * Time: O(1), Space: O(1)
     */
    public static int hammingWeight3(int n) {
        return Integer.bitCount(n);
    }
    
    // ==================== PROBLEM 2: REVERSE BITS ====================
    
    /**
     * Problem 2: Reverse Bits
     * 
     * Reverse bits of a 32-bit unsigned integer.
     * 
     * Example:
     * Input: n = 43261596 (00000010100101000001111010011100)
     * Output: 964176192 (00111001011110000010100101000000)
     * 
     * LeetCode #190
     */
    
    /**
     * Approach 1: Bit by Bit
     * Time: O(32) = O(1), Space: O(1)
     */
    public static int reverseBits1(int n) {
        int result = 0;
        for (int i = 0; i < 32; i++) {
            result <<= 1; // Shift result left
            result |= (n & 1); // Add rightmost bit of n
            n >>= 1; // Shift n right
        }
        return result;
    }
    
    /**
     * Approach 2: Divide and Conquer (Optimized)
     * Time: O(1), Space: O(1)
     */
    public static int reverseBits2(int n) {
        // Swap adjacent bits
        n = ((n & 0xaaaaaaaa) >>> 1) | ((n & 0x55555555) << 1);
        // Swap adjacent pairs
        n = ((n & 0xcccccccc) >>> 2) | ((n & 0x33333333) << 2);
        // Swap adjacent nibbles
        n = ((n & 0xf0f0f0f0) >>> 4) | ((n & 0x0f0f0f0f) << 4);
        // Swap adjacent bytes
        n = ((n & 0xff00ff00) >>> 8) | ((n & 0x00ff00ff) << 8);
        // Swap halves
        n = (n >>> 16) | (n << 16);
        return n;
    }
    
    // ==================== PROBLEM 3: SINGLE NUMBER ====================
    
    /**
     * Problem 3: Single Number
     * 
     * Given array where every element appears twice except one.
     * Find that single element.
     * 
     * Example:
     * Input: nums = [2,2,1]
     * Output: 1
     * 
     * LeetCode #136
     * 
     * Time: O(n), Space: O(1)
     */
    public static int singleNumber(int[] nums) {
        int result = 0;
        for (int num : nums) {
            result ^= num; // XOR cancels out duplicates
        }
        return result;
    }
    
    // ==================== PROBLEM 4: SINGLE NUMBER II ====================
    
    /**
     * Problem 4: Single Number II
     * 
     * Given array where every element appears three times except one.
     * Find that single element.
     * 
     * Example:
     * Input: nums = [2,2,3,2]
     * Output: 3
     * 
     * LeetCode #137
     */
    
    /**
     * Approach 1: Count Bits at Each Position
     * Time: O(32n) = O(n), Space: O(1)
     */
    public static int singleNumber2_1(int[] nums) {
        int result = 0;
        for (int i = 0; i < 32; i++) {
            int count = 0;
            for (int num : nums) {
                if ((num & (1 << i)) != 0) {
                    count++;
                }
            }
            if (count % 3 != 0) {
                result |= (1 << i);
            }
        }
        return result;
    }
    
    /**
     * Approach 2: State Machine (Ones and Twos)
     * ones: bits that appeared once
     * twos: bits that appeared twice
     * When bit appears 3rd time, reset both
     * 
     * Time: O(n), Space: O(1)
     */
    public static int singleNumber2_2(int[] nums) {
        int ones = 0, twos = 0;
        
        for (int num : nums) {
            // Update twos with bits that were in ones and now in num
            twos |= (ones & num);
            
            // Update ones with XOR
            ones ^= num;
            
            // Remove bits that appeared 3 times
            int threes = ones & twos;
            ones &= ~threes;
            twos &= ~threes;
        }
        
        return ones;
    }
    
    // ==================== PROBLEM 5: BITWISE AND OF NUMBERS RANGE ====================
    
    /**
     * Problem 5: Bitwise AND of Numbers Range
     * 
     * Given range [left, right], return bitwise AND of all numbers in range.
     * 
     * Example:
     * Input: left = 5, right = 7
     * Output: 4
     * Explanation: 5 & 6 & 7 = 4
     * 
     * LeetCode #201
     */
    
    /**
     * Approach 1: Find Common Prefix
     * Time: O(log n), Space: O(1)
     */
    public static int rangeBitwiseAnd1(int left, int right) {
        int shift = 0;
        // Find common prefix by right shifting both numbers
        while (left < right) {
            left >>= 1;
            right >>= 1;
            shift++;
        }
        return left << shift;
    }
    
    /**
     * Approach 2: Brian Kernighan's Algorithm
     * Time: O(log n), Space: O(1)
     */
    public static int rangeBitwiseAnd2(int left, int right) {
        // Remove rightmost bit from right until it's <= left
        while (right > left) {
            right &= (right - 1);
        }
        return right;
    }
    
    // ==================== PROBLEM 6: MAXIMUM XOR OF TWO NUMBERS ====================
    
    /**
     * Problem 6: Maximum XOR of Two Numbers in Array
     * 
     * Find maximum XOR of any two numbers in array.
     * 
     * Example:
     * Input: nums = [3,10,5,25,2,8]
     * Output: 28
     * Explanation: 5 XOR 25 = 28
     * 
     * LeetCode #421
     */
    
    /**
     * Approach 1: Brute Force
     * Time: O(n²), Space: O(1)
     */
    public static int findMaximumXOR1(int[] nums) {
        int maxXOR = 0;
        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                maxXOR = Math.max(maxXOR, nums[i] ^ nums[j]);
            }
        }
        return maxXOR;
    }
    
    /**
     * Approach 2: Trie-based (Optimal)
     * Build binary trie and find maximum XOR
     * Time: O(n * 32), Space: O(n * 32)
     */
    public static int findMaximumXOR2(int[] nums) {
        TrieNode root = new TrieNode();
        
        // Insert all numbers into trie
        for (int num : nums) {
            TrieNode node = root;
            for (int i = 31; i >= 0; i--) {
                int bit = (num >> i) & 1;
                if (node.children[bit] == null) {
                    node.children[bit] = new TrieNode();
                }
                node = node.children[bit];
            }
        }
        
        int maxXOR = 0;
        
        // For each number, find maximum XOR
        for (int num : nums) {
            TrieNode node = root;
            int currentXOR = 0;
            
            for (int i = 31; i >= 0; i--) {
                int bit = (num >> i) & 1;
                int toggledBit = 1 - bit;
                
                // Try to go opposite direction for maximum XOR
                if (node.children[toggledBit] != null) {
                    currentXOR |= (1 << i);
                    node = node.children[toggledBit];
                } else {
                    node = node.children[bit];
                }
            }
            
            maxXOR = Math.max(maxXOR, currentXOR);
        }
        
        return maxXOR;
    }
    
    static class TrieNode {
        TrieNode[] children = new TrieNode[2]; // 0 and 1
    }
    
    // ==================== PROBLEM 7: POWER OF TWO ====================
    
    /**
     * Problem 7: Power of Two
     * 
     * Check if integer is a power of two.
     * 
     * Example:
     * Input: n = 16
     * Output: true
     * 
     * LeetCode #231
     */
    
    /**
     * Approach 1: Bit Manipulation Trick
     * Power of 2 has only one bit set
     * n & (n-1) removes rightmost bit, should become 0
     * 
     * Time: O(1), Space: O(1)
     */
    public static boolean isPowerOfTwo1(int n) {
        return n > 0 && (n & (n - 1)) == 0;
    }
    
    /**
     * Approach 2: Count Set Bits
     * Time: O(log n), Space: O(1)
     */
    public static boolean isPowerOfTwo2(int n) {
        return n > 0 && Integer.bitCount(n) == 1;
    }
    
    // ==================== PROBLEM 8: MISSING NUMBER ====================
    
    /**
     * Problem 8: Missing Number
     * 
     * Given array containing n distinct numbers from [0, n].
     * Find the missing number.
     * 
     * Example:
     * Input: nums = [3,0,1]
     * Output: 2
     * 
     * LeetCode #268
     */
    
    /**
     * Approach 1: XOR (Optimal)
     * XOR all indices and values, duplicates cancel out
     * Time: O(n), Space: O(1)
     */
    public static int missingNumber1(int[] nums) {
        int xor = nums.length;
        for (int i = 0; i < nums.length; i++) {
            xor ^= i ^ nums[i];
        }
        return xor;
    }
    
    /**
     * Approach 2: Sum Formula
     * Time: O(n), Space: O(1)
     */
    public static int missingNumber2(int[] nums) {
        int n = nums.length;
        int expectedSum = n * (n + 1) / 2;
        int actualSum = 0;
        for (int num : nums) {
            actualSum += num;
        }
        return expectedSum - actualSum;
    }
    
    // ==================== PROBLEM 9: SUM OF TWO INTEGERS ====================
    
    /**
     * Problem 9: Sum of Two Integers
     * 
     * Calculate sum of two integers without using + or - operators.
     * 
     * Example:
     * Input: a = 1, b = 2
     * Output: 3
     * 
     * LeetCode #371
     * 
     * Time: O(log max(a,b)), Space: O(1)
     */
    public static int getSum(int a, int b) {
        while (b != 0) {
            int carry = (a & b) << 1; // Calculate carry
            a = a ^ b; // Sum without carry
            b = carry; // Update b with carry
        }
        return a;
    }
    
    // ==================== PROBLEM 10: SUBSETS (BITMASK APPROACH) ====================
    
    /**
     * Problem 10: Subsets using Bit Manipulation
     * 
     * Generate all subsets of a set using bitmasks.
     * 
     * Example:
     * Input: nums = [1,2,3]
     * Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
     * 
     * LeetCode #78
     * 
     * Time: O(n * 2^n), Space: O(1) excluding output
     */
    public static List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        int n = nums.length;
        int totalSubsets = 1 << n; // 2^n subsets
        
        for (int mask = 0; mask < totalSubsets; mask++) {
            List<Integer> subset = new ArrayList<>();
            for (int i = 0; i < n; i++) {
                // Check if i-th bit is set in mask
                if ((mask & (1 << i)) != 0) {
                    subset.add(nums[i]);
                }
            }
            result.add(subset);
        }
        
        return result;
    }
    
    // ==================== PROBLEM 11: GRAY CODE ====================
    
    /**
     * Problem 11: Gray Code
     * 
     * Generate n-bit Gray code sequence.
     * Gray code: sequence where adjacent values differ by exactly one bit.
     * 
     * Example:
     * Input: n = 2
     * Output: [0,1,3,2]
     * Explanation: 00, 01, 11, 10
     * 
     * LeetCode #89
     */
    
    /**
     * Approach 1: Formula-based (i ^ (i >> 1))
     * Time: O(2^n), Space: O(1) excluding output
     */
    public static List<Integer> grayCode1(int n) {
        List<Integer> result = new ArrayList<>();
        int size = 1 << n; // 2^n
        
        for (int i = 0; i < size; i++) {
            result.add(i ^ (i >> 1)); // Gray code formula
        }
        
        return result;
    }
    
    /**
     * Approach 2: Reflection Method
     * Time: O(2^n), Space: O(1) excluding output
     */
    public static List<Integer> grayCode2(int n) {
        List<Integer> result = new ArrayList<>();
        result.add(0);
        
        for (int i = 0; i < n; i++) {
            int size = result.size();
            int mask = 1 << i;
            
            // Add reflected values with i-th bit set
            for (int j = size - 1; j >= 0; j--) {
                result.add(result.get(j) | mask);
            }
        }
        
        return result;
    }
    
    // ==================== PROBLEM 12: MINIMUM FLIPS TO MAKE OR EQUAL ====================
    
    /**
     * Problem 12: Minimum Flips to Make a OR b Equal to c
     * 
     * Find minimum number of bit flips to make (a OR b) == c.
     * 
     * Example:
     * Input: a = 2, b = 6, c = 5
     * Output: 3
     * Explanation:
     * a = 010
     * b = 110
     * c = 101
     * 
     * LeetCode #1318
     * 
     * Time: O(log max(a,b,c)), Space: O(1)
     */
    public static int minFlips(int a, int b, int c) {
        int flips = 0;
        
        for (int i = 0; i < 32; i++) {
            int bitA = (a >> i) & 1;
            int bitB = (b >> i) & 1;
            int bitC = (c >> i) & 1;
            
            if (bitC == 0) {
                // Both bitA and bitB must be 0
                flips += bitA + bitB;
            } else {
                // At least one of bitA or bitB must be 1
                if (bitA == 0 && bitB == 0) {
                    flips++;
                }
            }
        }
        
        return flips;
    }
    
    // ==================== ADDITIONAL: BIT MANIPULATION UTILITIES ====================
    
    /**
     * Check if i-th bit is set
     */
    public static boolean isBitSet(int n, int i) {
        return (n & (1 << i)) != 0;
    }
    
    /**
     * Set i-th bit
     */
    public static int setBit(int n, int i) {
        return n | (1 << i);
    }
    
    /**
     * Clear i-th bit
     */
    public static int clearBit(int n, int i) {
        return n & ~(1 << i);
    }
    
    /**
     * Toggle i-th bit
     */
    public static int toggleBit(int n, int i) {
        return n ^ (1 << i);
    }
    
    /**
     * Get rightmost set bit
     */
    public static int getRightmostSetBit(int n) {
        return n & (-n);
    }
    
    /**
     * Turn off rightmost set bit
     */
    public static int turnOffRightmostSetBit(int n) {
        return n & (n - 1);
    }
    
    /**
     * Check if number is power of 4
     */
    public static boolean isPowerOfFour(int n) {
        // Must be power of 2 and have bit at even position
        return n > 0 && (n & (n - 1)) == 0 && (n & 0x55555555) != 0;
    }
    
    /**
     * Swap two numbers without temp variable
     */
    public static void swapWithoutTemp(int a, int b) {
        System.out.println("Before: a = " + a + ", b = " + b);
        a = a ^ b;
        b = a ^ b; // b = (a ^ b) ^ b = a
        a = a ^ b; // a = (a ^ b) ^ a = b
        System.out.println("After: a = " + a + ", b = " + b);
    }
    
    /**
     * Count total set bits from 1 to n
     */
    public static int countTotalSetBits(int n) {
        int count = 0;
        for (int i = 1; i <= n; i++) {
            count += Integer.bitCount(i);
        }
        return count;
    }
    
    /**
     * Find position of rightmost set bit (1-indexed)
     */
    public static int positionOfRightmostSetBit(int n) {
        if (n == 0) return -1;
        int pos = 1;
        while ((n & 1) == 0) {
            n >>= 1;
            pos++;
        }
        return pos;
    }
    
    // ==================== TEST CASES ====================
    
    public static void main(String[] args) {
        System.out.println("=== DAY 48: BIT MANIPULATION - 12 PROBLEMS ===\n");
        
        // Problem 1: Number of 1 Bits
        System.out.println("Problem 1: Number of 1 Bits (Hamming Weight)");
        System.out.println("Input: n=11 (binary: 1011)");
        System.out.println("Approach 1 (Loop): " + hammingWeight1(11));
        System.out.println("Approach 2 (Brian Kernighan): " + hammingWeight2(11));
        System.out.println("Approach 3 (Built-in): " + hammingWeight3(11));
        System.out.println("Expected: 3\n");
        
        // Problem 2: Reverse Bits
        System.out.println("Problem 2: Reverse Bits");
        int n2 = 43261596;
        System.out.println("Input: " + n2);
        System.out.println("Approach 1 (Bit by Bit): " + reverseBits1(n2));
        System.out.println("Approach 2 (Divide & Conquer): " + reverseBits2(n2));
        System.out.println("Expected: 964176192\n");
        
        // Problem 3: Single Number
        System.out.println("Problem 3: Single Number");
        int[] nums3 = {2, 2, 1};
        System.out.println("Input: [2,2,1]");
        System.out.println("Output: " + singleNumber(nums3));
        System.out.println("Expected: 1\n");
        
        // Problem 4: Single Number II
        System.out.println("Problem 4: Single Number II");
        int[] nums4 = {2, 2, 3, 2};
        System.out.println("Input: [2,2,3,2]");
        System.out.println("Approach 1 (Count Bits): " + singleNumber2_1(nums4));
        System.out.println("Approach 2 (State Machine): " + singleNumber2_2(nums4));
        System.out.println("Expected: 3\n");
        
        // Problem 5: Bitwise AND of Numbers Range
        System.out.println("Problem 5: Bitwise AND of Numbers Range");
        System.out.println("Input: left=5, right=7");
        System.out.println("Approach 1 (Common Prefix): " + rangeBitwiseAnd1(5, 7));
        System.out.println("Approach 2 (Brian Kernighan): " + rangeBitwiseAnd2(5, 7));
        System.out.println("Expected: 4\n");
        
        // Problem 6: Maximum XOR of Two Numbers
        System.out.println("Problem 6: Maximum XOR of Two Numbers");
        int[] nums6 = {3, 10, 5, 25, 2, 8};
        System.out.println("Input: [3,10,5,25,2,8]");
        System.out.println("Approach 1 (Brute Force): " + findMaximumXOR1(nums6));
        System.out.println("Approach 2 (Trie): " + findMaximumXOR2(nums6));
        System.out.println("Expected: 28 (5 XOR 25)\n");
        
        // Problem 7: Power of Two
        System.out.println("Problem 7: Power of Two");
        System.out.println("Input: n=16");
        System.out.println("Approach 1 (Bit Trick): " + isPowerOfTwo1(16));
        System.out.println("Approach 2 (Count Bits): " + isPowerOfTwo2(16));
        System.out.println("Expected: true\n");
        
        // Problem 8: Missing Number
        System.out.println("Problem 8: Missing Number");
        int[] nums8 = {3, 0, 1};
        System.out.println("Input: [3,0,1]");
        System.out.println("Approach 1 (XOR): " + missingNumber1(nums8));
        System.out.println("Approach 2 (Sum): " + missingNumber2(nums8));
        System.out.println("Expected: 2\n");
        
        // Problem 9: Sum of Two Integers
        System.out.println("Problem 9: Sum of Two Integers");
        System.out.println("Input: a=1, b=2");
        System.out.println("Output: " + getSum(1, 2));
        System.out.println("Expected: 3\n");
        
        // Problem 10: Subsets
        System.out.println("Problem 10: Subsets (Bitmask Approach)");
        int[] nums10 = {1, 2, 3};
        System.out.println("Input: [1,2,3]");
        System.out.println("Output: " + subsets(nums10));
        System.out.println("Expected: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]\n");
        
        // Problem 11: Gray Code
        System.out.println("Problem 11: Gray Code");
        System.out.println("Input: n=2");
        System.out.println("Approach 1 (Formula): " + grayCode1(2));
        System.out.println("Approach 2 (Reflection): " + grayCode2(2));
        System.out.println("Expected: [0,1,3,2]\n");
        
        // Problem 12: Minimum Flips
        System.out.println("Problem 12: Minimum Flips to Make OR Equal");
        System.out.println("Input: a=2, b=6, c=5");
        System.out.println("Output: " + minFlips(2, 6, 5));
        System.out.println("Expected: 3\n");
        
        // Additional Utilities
        System.out.println("=== ADDITIONAL BIT MANIPULATION UTILITIES ===\n");
        
        System.out.println("Bit Operations on n=10 (binary: 1010):");
        System.out.println("Check 1st bit set: " + isBitSet(10, 1));
        System.out.println("Set 0th bit: " + setBit(10, 0) + " (binary: 1011)");
        System.out.println("Clear 1st bit: " + clearBit(10, 1) + " (binary: 1000)");
        System.out.println("Toggle 2nd bit: " + toggleBit(10, 2) + " (binary: 1110)");
        System.out.println();
        
        System.out.println("Rightmost set bit of 12 (binary: 1100): " + getRightmostSetBit(12));
        System.out.println("Turn off rightmost set bit of 12: " + turnOffRightmostSetBit(12));
        System.out.println();
        
        System.out.println("Is 16 power of 4? " + isPowerOfFour(16));
        System.out.println("Is 8 power of 4? " + isPowerOfFour(8));
        System.out.println();
        
        System.out.println("Swap without temp:");
        swapWithoutTemp(5, 10);
        System.out.println();
        
        System.out.println("Total set bits from 1 to 5: " + countTotalSetBits(5));
        System.out.println("Position of rightmost set bit in 12 (1100): " + positionOfRightmostSetBit(12));
        
        System.out.println("\n=== ALL BIT MANIPULATION PROBLEMS COMPLETED ===");
        System.out.println("Master these techniques for efficient problem solving!");
        System.out.println("Next: Greedy Algorithms (Day 49)");
    }
}
