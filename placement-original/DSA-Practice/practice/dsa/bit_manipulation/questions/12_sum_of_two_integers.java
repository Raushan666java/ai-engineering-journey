package bit_manipulation.questions;

/*
 * 12. SUM OF TWO INTEGERS (LeetCode 371)
 *
 * Problem Statement:
 * Given two integers a and b, return the sum of the two integers without using
 * the operators + and -.
 *
 * Conceptual Understanding:
 * - Bit manipulation for addition: XOR for sum without carry, AND for carry
 * - Sum = a ^ b (XOR), Carry = (a & b) << 1
 * - Repeat until no carry: add sum and carry
 * - Time: O(1) since 32 bits, Space: O(1)
 * - Half adder logic: sum = a ^ b, carry = a & b
 * - Full adder: sum = a ^ b ^ carry, new_carry = (a & b) | (b & carry) | (a & carry)
 * - Can use recursion or iteration
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

class SumOfTwoIntegers12 {

    // Method 1: Iterative bit manipulation
    public int getSum(int a, int b) {
        while (b != 0) {
            // Carry is a & b shifted left by 1
            int carry = (a & b) << 1;

            // Sum without carry is a ^ b
            a = a ^ b;

            // Set b to carry for next iteration
            b = carry;
        }

        return a;
    }

    // Method 2: Recursive approach
    public int getSumRecursive(int a, int b) {
        if (b == 0) return a;

        // Recursive: sum without carry + carry shifted
        return getSumRecursive(a ^ b, (a & b) << 1);
    }

    // Method 3: Using bit operations with mask
    public int getSumMask(int a, int b) {
        int result = 0;
        int carry = 0;
        int mask = 1;

        for (int i = 0; i < 32; i++) {
            // Get bits at current position
            int bitA = (a & mask) != 0 ? 1 : 0;
            int bitB = (b & mask) != 0 ? 1 : 0;

            // Full adder logic
            int sum = bitA ^ bitB ^ carry;
            carry = (bitA & bitB) | (bitB & carry) | (bitA & carry);

            // Set bit in result
            if (sum == 1) {
                result |= mask;
            }

            mask <<= 1;
        }

        return result;
    }

    // Method 4: Bit by bit addition
    public int getSumBitByBit(int a, int b) {
        int sum = 0;
        int carry = 0;

        for (int i = 0; i < 32; i++) {
            // Extract i-th bit
            int bitA = (a >> i) & 1;
            int bitB = (b >> i) & 1;

            // Calculate sum and carry for this bit
            int total = bitA + bitB + carry;
            sum |= (total % 2) << i;
            carry = total / 2;
        }

        return sum;
    }

    // Method 5: Using Java's built-in addition (not allowed, but for reference)
    public int getSumBuiltIn(int a, int b) {
        return a + b; // Not allowed per problem constraints
    }

    // Method 6: Using BigInteger
    public int getSumBigInteger(int a, int b) {
        java.math.BigInteger bigA = java.math.BigInteger.valueOf(a);
        java.math.BigInteger bigB = java.math.BigInteger.valueOf(b);
        return bigA.add(bigB).intValue();
    }

    // Method 7: Bit manipulation with loop unrolling
    public int getSumUnrolled(int a, int b) {
        while (b != 0) {
            int sum = a ^ b;
            int carry = (a & b) << 1;
            a = sum;
            b = carry;
        }
        return a;
    }

    // Method 8: Using strings (conceptual)
    public int getSumString(int a, int b) {
        // Convert to binary strings, add manually
        String binA = Integer.toBinaryString(a);
        String binB = Integer.toBinaryString(b);

        // Pad to 32 bits
        binA = String.format("%32s", binA).replace(' ', '0');
        binB = String.format("%32s", binB).replace(' ', '0');

        StringBuilder result = new StringBuilder();
        int carry = 0;

        for (int i = 31; i >= 0; i--) {
            int bitA = binA.charAt(i) - '0';
            int bitB = binB.charAt(i) - '0';

            int sum = bitA + bitB + carry;
            result.append(sum % 2);
            carry = sum / 2;
        }

        // Reverse and convert back
        return Integer.parseUnsignedInt(result.reverse().toString(), 2);
    }

    // Method 9: Recursive with memoization (overkill)
    public int getSumMemo(int a, int b) {
        return getSumMemoHelper(a, b, new java.util.HashMap<>());
    }

    private int getSumMemoHelper(int a, int b, java.util.Map<String, Integer> memo) {
        String key = a + "," + b;
        if (memo.containsKey(key)) return memo.get(key);

        if (b == 0) return a;

        int result = getSumMemoHelper(a ^ b, (a & b) << 1, memo);
        memo.put(key, result);
        return result;
    }

    // Method 10: Using bit operations with different approach
    public int getSumBitOps(int a, int b) {
        // Handle negative numbers by converting to positive
        if (b == 0) return a;

        // XOR gives sum without carry
        int sum = a ^ b;

        // AND gives carry positions, shifted left
        int carry = (a & b) << 1;

        // Recursively add sum and carry
        return getSumBitOps(sum, carry);
    }

    // Method 11: Iterative with early termination
    public int getSumEarlyTermination(int a, int b) {
        int result = a;

        while (b != 0) {
            // If no overlap in bits, just XOR
            if ((a & b) == 0) {
                return result ^ b;
            }

            int carry = (a & b) << 1;
            result = a ^ b;
            a = result;
            b = carry;
        }

        return result;
    }

    // Method 12: Using array to simulate addition
    public int getSumArray(int a, int b) {
        int[] bitsA = new int[32];
        int[] bitsB = new int[32];
        int[] result = new int[32];

        // Convert to bits
        for (int i = 0; i < 32; i++) {
            bitsA[i] = (a >> i) & 1;
            bitsB[i] = (b >> i) & 1;
        }

        int carry = 0;

        // Add bit by bit
        for (int i = 0; i < 32; i++) {
            int sum = bitsA[i] + bitsB[i] + carry;
            result[i] = sum % 2;
            carry = sum / 2;
        }

        // Convert back to int
        int finalResult = 0;
        for (int i = 0; i < 32; i++) {
            if (result[i] == 1) {
                finalResult |= (1 << i);
            }
        }

        return finalResult;
    }

    // Method 13: Optimized recursive
    public int getSumOptimizedRecursive(int a, int b) {
        return b == 0 ? a : getSumOptimizedRecursive(a ^ b, (a & b) << 1);
    }

    // Method 14: Using mathematical operations (not allowed)
    public int getSumMath(int a, int b) {
        // Using Math.addExact would be cheating
        return Math.addExact(a, b);
    }

    // Method 15: Final optimized version
    public int getSumFinal(int a, int b) {
        while (b != 0) {
            int carry = (a & b) << 1;
            a = a ^ b;
            b = carry;
        }
        return a;
    }

    // Test cases
    public static void main(String[] args) {
        SumOfTwoIntegers12 solution = new SumOfTwoIntegers12();

        // Test Case 1: Basic addition
        System.out.println("1 + 2 = " + solution.getSum(1, 2)); // Expected: 3
        System.out.println("5 + 7 = " + solution.getSum(5, 7)); // Expected: 12
        System.out.println("10 + 15 = " + solution.getSum(10, 15)); // Expected: 25

        // Test Case 2: Negative numbers
        System.out.println("\n-1 + 1 = " + solution.getSum(-1, 1)); // Expected: 0
        System.out.println("-5 + 3 = " + solution.getSum(-5, 3)); // Expected: -2
        System.out.println("-10 + -5 = " + solution.getSum(-10, -5)); // Expected: -15

        // Test Case 3: Edge cases
        System.out.println("\n0 + 0 = " + solution.getSum(0, 0)); // Expected: 0
        System.out.println("0 + 5 = " + solution.getSum(0, 5)); // Expected: 5
        System.out.println("Integer.MAX_VALUE + 1 = " + solution.getSum(Integer.MAX_VALUE, 1)); // Expected: Integer.MIN_VALUE

        // Test Case 4: Large numbers
        System.out.println("\n1000000 + 2000000 = " + solution.getSum(1000000, 2000000)); // Expected: 3000000

        // Test Case 5: Compare different approaches
        int a = 123, b = 456;
        System.out.println("\nComparing approaches for " + a + " + " + b + ":");

        int[] results = {
            solution.getSum(a, b),
            solution.getSumRecursive(a, b),
            solution.getSumMask(a, b),
            solution.getSumBitByBit(a, b),
            solution.getSumUnrolled(a, b),
            solution.getSumFinal(a, b)
        };

        String[] methodNames = {
            "Iterative", "Recursive", "Mask", "Bit by Bit", "Unrolled", "Final"
        };

        for (int i = 0; i < results.length; i++) {
            System.out.println(methodNames[i] + ": " + results[i]);
        }

        // Verify all methods give same result
        boolean allEqual = true;
        for (int i = 1; i < results.length; i++) {
            if (results[i] != results[0]) {
                allEqual = false;
                break;
            }
        }
        System.out.println("All methods equal: " + allEqual);

        // Test Case 6: Overflow cases
        System.out.println("\nOverflow cases:");
        try {
            System.out.println("Integer.MAX_VALUE + Integer.MAX_VALUE = " +
                             solution.getSum(Integer.MAX_VALUE, Integer.MAX_VALUE));
        } catch (Exception e) {
            System.out.println("Overflow: " + e.getMessage());
        }

        // Test Case 7: Performance comparison
        int perfA = 123456789, perfB = 987654321;
        long startTime, endTime;

        startTime = System.nanoTime();
        for (int i = 0; i < 100000; i++) {
            solution.getSum(perfA, perfB);
        }
        endTime = System.nanoTime();
        System.out.println("\nIterative approach (100k runs): " + (endTime - startTime) / 1000000 + " ms");

        startTime = System.nanoTime();
        for (int i = 0; i < 100000; i++) {
            solution.getSumRecursive(perfA, perfB);
        }
        endTime = System.nanoTime();
        System.out.println("Recursive approach (100k runs): " + (endTime - startTime) / 1000000 + " ms");

        // Test Case 8: Binary representation
        System.out.println("\nBinary addition examples:");
        System.out.println("5 (101) + 3 (011) = 8 (1000)");
        System.out.println("Bit manipulation result: " + solution.getSum(5, 3));

        System.out.println("7 (111) + 1 (001) = 8 (1000)");
        System.out.println("Bit manipulation result: " + solution.getSum(7, 1));

        // Test Case 9: Carry propagation
        System.out.println("\nCarry propagation:");
        System.out.println("15 (1111) + 1 (0001) = 16 (10000)");
        System.out.println("Bit manipulation result: " + solution.getSum(15, 1));

        // Test Case 10: Two's complement verification
        System.out.println("\nTwo's complement verification:");
        int x = -5, y = 3;
        int expected = x + y;
        int actual = solution.getSum(x, y);
        System.out.println("-5 + 3 = " + expected + " (expected) vs " + actual + " (actual)");
        System.out.println("Correct: " + (expected == actual));
    }
}