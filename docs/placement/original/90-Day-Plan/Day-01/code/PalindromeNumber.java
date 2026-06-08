/**
 * LeetCode #9: Palindrome Number
 * Difficulty: Easy
 * Day: 1 of 90
 * 
 * Problem: Given an integer x, return true if x is a palindrome, and false otherwise.
 * 
 * Approach 1: String Conversion O(n)
 * Approach 2: Mathematical O(log n) - OPTIMAL (No String)
 */

// ========== APPROACH 1: STRING CONVERSION ==========
class SolutionString {
    /**
     * Time Complexity: O(n) - where n is number of digits
     * Space Complexity: O(n) - string storage
     */
    public boolean isPalindrome(int x) {
        // Negative numbers are not palindromes
        if (x < 0) return false;
        
        // Convert to string
        String str = String.valueOf(x);
        
        // Use two pointers
        int left = 0;
        int right = str.length() - 1;
        
        while (left < right) {
            if (str.charAt(left) != str.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        
        return true;
    }
}

// ========== APPROACH 2: MATHEMATICAL (NO STRING) ==========
class SolutionMath {
    /**
     * Time Complexity: O(log n) - where n is the value of x
     * Space Complexity: O(1) - constant space
     * 
     * Logic:
     * - Negative numbers: NOT palindrome
     * - Numbers ending in 0: NOT palindrome (except 0 itself)
     * - Reverse second half and compare with first half
     */
    public boolean isPalindrome(int x) {
        // Negative numbers and numbers ending in 0 (except 0) are not palindromes
        if (x < 0 || (x % 10 == 0 && x != 0)) {
            return false;
        }
        
        int reversedHalf = 0;
        
        // Reverse second half of the number
        while (x > reversedHalf) {
            reversedHalf = reversedHalf * 10 + x % 10;
            x /= 10;
        }
        
        // For even length: x == reversedHalf
        // For odd length: x == reversedHalf / 10 (middle digit doesn't matter)
        return x == reversedHalf || x == reversedHalf / 10;
    }
}

// ========== TEST PROGRAM ==========
public class PalindromeNumber {
    public static void main(String[] args) {
        System.out.println("========== LEETCODE #9: PALINDROME NUMBER ==========\n");
        
        SolutionString stringSol = new SolutionString();
        SolutionMath mathSol = new SolutionMath();
        
        // Test cases
        System.out.println("Test#  Input      String  Math    Expected  Status");
        System.out.println("-----  ------     ------  -----   --------  ------");
        
        runTest(stringSol, mathSol, 121, true, "1");
        runTest(stringSol, mathSol, -121, false, "2");
        runTest(stringSol, mathSol, 10, false, "3");
        runTest(stringSol, mathSol, 0, true, "4");
        runTest(stringSol, mathSol, 12321, true, "5");
        runTest(stringSol, mathSol, 1221, true, "6");
        runTest(stringSol, mathSol, 12345, false, "7");
        runTest(stringSol, mathSol, 9, true, "8");
        runTest(stringSol, mathSol, 1000021, false, "9");
        
        System.out.println("\n========== DRY RUN EXAMPLE ==========");
        dryRun(12321);
        dryRun(1221);
    }
    
    static void runTest(SolutionString stringSol, SolutionMath mathSol, 
                        int x, boolean expected, String testNum) {
        boolean result1 = stringSol.isPalindrome(x);
        boolean result2 = mathSol.isPalindrome(x);
        boolean pass = (result1 == expected && result2 == expected);
        String status = pass ? "✅ PASS" : "❌ FAIL";
        
        System.out.printf("%-6s %-10d %-7s %-7s %-9s %s%n", 
                          testNum, x, result1, result2, expected, status);
    }
    
    static void dryRun(int x) {
        System.out.println("\nDry Run for x = " + x + ":");
        System.out.println("Step  x        reversedHalf  Comparison");
        System.out.println("----  ------   ------------  ----------");
        
        if (x < 0 || (x % 10 == 0 && x != 0)) {
            System.out.println("Quick return: NOT palindrome");
            return;
        }
        
        int originalX = x;
        int reversedHalf = 0;
        int step = 0;
        
        System.out.printf("%-4d  %-8d %-12d (Initial)%n", step++, x, reversedHalf);
        
        while (x > reversedHalf) {
            reversedHalf = reversedHalf * 10 + x % 10;
            x /= 10;
            System.out.printf("%-4d  %-8d %-12d%n", step++, x, reversedHalf);
        }
        
        boolean isPalin = (x == reversedHalf || x == reversedHalf / 10);
        System.out.println("\nFinal check:");
        System.out.println("  x = " + x);
        System.out.println("  reversedHalf = " + reversedHalf);
        System.out.println("  reversedHalf / 10 = " + reversedHalf / 10);
        System.out.println("  Result: " + (isPalin ? "PALINDROME ✅" : "NOT PALINDROME ❌"));
    }
}

/*
Sample Output:
========== LEETCODE #9: PALINDROME NUMBER ==========

Test#  Input      String  Math    Expected  Status
-----  ------     ------  -----   --------  ------
1      121        true    true    true      ✅ PASS
2      -121       false   false   false     ✅ PASS
3      10         false   false   false     ✅ PASS
4      0          true    true    true      ✅ PASS
5      12321      true    true    true      ✅ PASS
6      1221       true    true    true      ✅ PASS
7      12345      false   false   false     ✅ PASS
8      9          true    true    true      ✅ PASS
9      1000021    false   false   false     ✅ PASS

========== DRY RUN EXAMPLE ==========

Dry Run for x = 12321:
Step  x        reversedHalf  Comparison
----  ------   ------------  ----------
0     12321    0             (Initial)
1     1232     1
2     123      12
3     12       123

Final check:
  x = 12
  reversedHalf = 123
  reversedHalf / 10 = 12
  Result: PALINDROME ✅
*/
