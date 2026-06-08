import java.util.HashMap;
import java.util.Map;

/**
 * LeetCode #13: Roman to Integer
 * Difficulty: Easy
 * Day: 1 of 90
 * 
 * Problem: Convert a Roman numeral to an integer.
 * 
 * Roman Symbols:
 * I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000
 * 
 * Special Cases (Subtraction):
 * IV = 4, IX = 9, XL = 40, XC = 90, CD = 400, CM = 900
 * 
 * Approach 1: HashMap + Left-to-Right
 * Approach 2: Switch + Right-to-Left - CLEANER
 */

// ========== APPROACH 1: HASHMAP + LEFT-TO-RIGHT ==========
class SolutionHashMap {
    /**
     * Time Complexity: O(n) - where n is length of string
     * Space Complexity: O(1) - HashMap has fixed 7 entries
     * 
     * Logic: If current value < next value: subtract, else: add
     */
    public int romanToInt(String s) {
        // Create HashMap for Roman to Integer mapping
        Map<Character, Integer> map = new HashMap<>();
        map.put('I', 1);
        map.put('V', 5);
        map.put('X', 10);
        map.put('L', 50);
        map.put('C', 100);
        map.put('D', 500);
        map.put('M', 1000);
        
        int result = 0;
        
        for (int i = 0; i < s.length(); i++) {
            int current = map.get(s.charAt(i));
            
            // If not last character and current < next, subtract
            if (i < s.length() - 1 && current < map.get(s.charAt(i + 1))) {
                result -= current;
            } else {
                result += current;
            }
        }
        
        return result;
    }
}

// ========== APPROACH 2: SWITCH + RIGHT-TO-LEFT ==========
class SolutionSwitch {
    /**
     * Time Complexity: O(n)
     * Space Complexity: O(1)
     * 
     * Logic: Traverse right to left, compare with previous value
     */
    public int romanToInt(String s) {
        int result = 0;
        int prevValue = 0;
        
        // Traverse from right to left
        for (int i = s.length() - 1; i >= 0; i--) {
            int currentValue = getValue(s.charAt(i));
            
            // If current < previous: subtract (e.g., IV)
            // Otherwise: add
            if (currentValue < prevValue) {
                result -= currentValue;
            } else {
                result += currentValue;
            }
            
            prevValue = currentValue;
        }
        
        return result;
    }
    
    private int getValue(char c) {
        switch (c) {
            case 'I': return 1;
            case 'V': return 5;
            case 'X': return 10;
            case 'L': return 50;
            case 'C': return 100;
            case 'D': return 500;
            case 'M': return 1000;
            default: return 0;
        }
    }
}

// ========== TEST PROGRAM ==========
public class RomanToInteger {
    public static void main(String[] args) {
        System.out.println("========== LEETCODE #13: ROMAN TO INTEGER ==========\n");
        
        SolutionHashMap hashMapSol = new SolutionHashMap();
        SolutionSwitch switchSol = new SolutionSwitch();
        
        // Test cases
        System.out.println("Roman         HashMap  Switch   Expected  Status");
        System.out.println("------------  -------  -------  --------  ------");
        
        runTest(hashMapSol, switchSol, "III", 3);
        runTest(hashMapSol, switchSol, "IV", 4);
        runTest(hashMapSol, switchSol, "IX", 9);
        runTest(hashMapSol, switchSol, "LVIII", 58);
        runTest(hashMapSol, switchSol, "MCMXCIV", 1994);
        runTest(hashMapSol, switchSol, "MMXXIV", 2024);
        runTest(hashMapSol, switchSol, "MMMCMXCIX", 3999);
        runTest(hashMapSol, switchSol, "CDXLIV", 444);
        runTest(hashMapSol, switchSol, "DCXXI", 621);
        
        System.out.println("\n========== DRY RUN EXAMPLES ==========");
        dryRunLeftToRight("MCMXCIV");
        dryRunRightToLeft("MCMXCIV");
    }
    
    static void runTest(SolutionHashMap hashMap, SolutionSwitch switchSol, 
                        String roman, int expected) {
        int result1 = hashMap.romanToInt(roman);
        int result2 = switchSol.romanToInt(roman);
        boolean pass = (result1 == expected && result2 == expected);
        String status = pass ? "✅ PASS" : "❌ FAIL";
        
        System.out.printf("%-12s  %-7d  %-7d  %-8d  %s%n", 
                          roman, result1, result2, expected, status);
    }
    
    static void dryRunLeftToRight(String s) {
        System.out.println("\n=== Left-to-Right Dry Run: " + s + " ===");
        System.out.println("i  Char  Current  Next  Action      Result");
        System.out.println("-  ----  -------  ----  ----------  ------");
        
        Map<Character, Integer> map = new HashMap<>();
        map.put('I', 1); map.put('V', 5); map.put('X', 10); map.put('L', 50);
        map.put('C', 100); map.put('D', 500); map.put('M', 1000);
        
        int result = 0;
        for (int i = 0; i < s.length(); i++) {
            int current = map.get(s.charAt(i));
            String action;
            
            if (i < s.length() - 1) {
                int next = map.get(s.charAt(i + 1));
                if (current < next) {
                    result -= current;
                    action = "Subtract " + current;
                } else {
                    result += current;
                    action = "Add " + current;
                }
                System.out.printf("%-2d %-4c %-7d  %-4d  %-11s %-6d%n", 
                                  i, s.charAt(i), current, next, action, result);
            } else {
                result += current;
                action = "Add " + current;
                System.out.printf("%-2d %-4c %-7d  %-4s  %-11s %-6d%n", 
                                  i, s.charAt(i), current, "-", action, result);
            }
        }
        System.out.println("\nFinal Result: " + result);
    }
    
    static void dryRunRightToLeft(String s) {
        System.out.println("\n=== Right-to-Left Dry Run: " + s + " ===");
        System.out.println("i  Char  Current  Prev  Action      Result");
        System.out.println("-  ----  -------  ----  ----------  ------");
        
        int result = 0;
        int prevValue = 0;
        
        for (int i = s.length() - 1; i >= 0; i--) {
            int currentValue = getValue(s.charAt(i));
            String action;
            
            if (currentValue < prevValue) {
                result -= currentValue;
                action = "Subtract " + currentValue;
            } else {
                result += currentValue;
                action = "Add " + currentValue;
            }
            
            System.out.printf("%-2d %-4c %-7d  %-4d  %-11s %-6d%n", 
                              i, s.charAt(i), currentValue, prevValue, action, result);
            prevValue = currentValue;
        }
        System.out.println("\nFinal Result: " + result);
    }
    
    static int getValue(char c) {
        switch (c) {
            case 'I': return 1;
            case 'V': return 5;
            case 'X': return 10;
            case 'L': return 50;
            case 'C': return 100;
            case 'D': return 500;
            case 'M': return 1000;
            default: return 0;
        }
    }
}

/*
Sample Output:
========== LEETCODE #13: ROMAN TO INTEGER ==========

Roman         HashMap  Switch   Expected  Status
------------  -------  -------  --------  ------
III           3        3        3         ✅ PASS
IV            4        4        4         ✅ PASS
IX            9        9        9         ✅ PASS
LVIII         58       58       58        ✅ PASS
MCMXCIV       1994     1994     1994      ✅ PASS
MMXXIV        2024     2024     2024      ✅ PASS
MMMCMXCIX     3999     3999     3999      ✅ PASS
CDXLIV        444      444      444       ✅ PASS
DCXXI         621      621      621       ✅ PASS

========== DRY RUN EXAMPLES ==========

=== Left-to-Right Dry Run: MCMXCIV ===
i  Char  Current  Next  Action      Result
-  ----  -------  ----  ----------  ------
0  M     1000     100   Add 1000    1000  
1  C     100      1000  Subtract 100 900   
2  M     1000     10    Add 1000    1900  
3  X     10       100   Subtract 10 1890  
4  C     100      1     Add 100     1990  
5  I     1        5     Subtract 1  1989  
6  V     5        -     Add 5       1994  

Final Result: 1994
*/
