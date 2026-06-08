package bit_manipulation.questions;

/*
 * 5. NUMBER OF 1 BITS (LeetCode 191)
 *
 * Problem Statement:
 * Write a function that takes an unsigned integer and returns the number of '1' bits
 * it has (also known as the Hamming weight).
 * Note: Note that in some languages, such as Java, there is no unsigned integer type.
 * In this case, the input will be given as a signed integer type. It should not affect
 * your implementation, as the integer's internal binary representation is the same.
 *
 * Conceptual Understanding:
 * - Count the number of set bits (1s) in binary representation
 * - Brian Kernighan's algorithm: n & (n-1) clears lowest set bit
 * - Time: O(number of set bits), worst case O(32) = O(1)
 * - Space: O(1)
 * - More efficient than checking each bit individually
 * - Built-in Integer.bitCount() is also available
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

class NumberOf1Bits5 {

    // Method 1: Brian Kernighan's algorithm (most efficient)
    public int hammingWeight(int n) {
        int count = 0;

        while (n != 0) {
            n &= (n - 1); // Clear the lowest set bit
            count++;
        }

        return count;
    }

    // Method 2: Bit manipulation with loop
    public int hammingWeightLoop(int n) {
        int count = 0;

        for (int i = 0; i < 32; i++) {
            if ((n & 1) == 1) {
                count++;
            }
            n >>= 1;
        }

        return count;
    }

    // Method 3: Using Integer.bitCount()
    public int hammingWeightBuiltIn(int n) {
        return Integer.bitCount(n);
    }

    // Method 4: Using bit mask
    public int hammingWeightMask(int n) {
        int count = 0;
        int mask = 1;

        for (int i = 0; i < 32; i++) {
            if ((n & mask) != 0) {
                count++;
            }
            mask <<= 1;
        }

        return count;
    }

    // Method 5: Recursive approach
    public int hammingWeightRecursive(int n) {
        if (n == 0) return 0;

        // Add 1 if LSB is set, then recurse on n >> 1
        return (n & 1) + hammingWeightRecursive(n >>> 1);
    }

    // Method 6: Divide and conquer
    public int hammingWeightDivideConquer(int n) {
        n = (n & 0x55555555) + ((n >>> 1) & 0x55555555);
        n = (n & 0x33333333) + ((n >>> 2) & 0x33333333);
        n = (n & 0x0F0F0F0F) + ((n >>> 4) & 0x0F0F0F0F);
        n = (n & 0x00FF00FF) + ((n >>> 8) & 0x00FF00FF);
        n = (n & 0x0000FFFF) + ((n >>> 16) & 0x0000FFFF);

        return n;
    }

    // Method 7: Using lookup table
    private static final int[] LOOKUP = new int[256];

    static {
        for (int i = 0; i < 256; i++) {
            LOOKUP[i] = Integer.bitCount(i);
        }
    }

    public int hammingWeightLookup(int n) {
        return LOOKUP[n & 0xFF] +
               LOOKUP[(n >>> 8) & 0xFF] +
               LOOKUP[(n >>> 16) & 0xFF] +
               LOOKUP[(n >>> 24) & 0xFF];
    }

    // Method 8: String approach
    public int hammingWeightString(int n) {
        return Integer.toBinaryString(n).replace("0", "").length();
    }

    // Method 9: Using BigInteger
    public int hammingWeightBigInteger(int n) {
        java.math.BigInteger bigInt = java.math.BigInteger.valueOf(n & 0xFFFFFFFFL);
        return bigInt.bitCount();
    }

    // Method 10: Iterative with early termination
    public int hammingWeightEarlyTermination(int n) {
        int count = 0;

        while (n != 0) {
            if ((n & 1) == 1) {
                count++;
            }
            n >>>= 1; // Use unsigned shift
        }

        return count;
    }

    // Method 11: Using bit operations with multiplication
    public int hammingWeightMultiplication(int n) {
        // Multiply by a number that has alternating bits
        // This spreads the bits for counting
        n = n - ((n >>> 1) & 0x55555555);
        n = (n & 0x33333333) + ((n >>> 2) & 0x33333333);
        n = (n + (n >>> 4)) & 0x0F0F0F0F;
        n = n + (n >>> 8);
        n = n + (n >>> 16);
        n = n & 0x3F;

        return n;
    }

    // Method 12: Functional approach with streams
    public int hammingWeightStream(int n) {
        return (int) Integer.toBinaryString(n).chars()
                           .filter(ch -> ch == '1')
                           .count();
    }

    // Method 13: Using BitSet
    public int hammingWeightBitSet(int n) {
        java.util.BitSet bitSet = java.util.BitSet.valueOf(new long[]{n & 0xFFFFFFFFL});
        return bitSet.cardinality();
    }

    // Method 14: Count bits in groups of 4
    public int hammingWeightNibbles(int n) {
        int count = 0;

        for (int i = 0; i < 8; i++) {
            int nibble = n & 15;
            // Count bits in nibble: 0-4 bits
            count += ((nibble & 1) + ((nibble >>> 1) & 1) +
                     ((nibble >>> 2) & 1) + ((nibble >>> 3) & 1));
            n >>>= 4;
        }

        return count;
    }

    // Method 15: Optimized Kernighan's algorithm with unsigned shift
    public int hammingWeightOptimized(int n) {
        int count = 0;

        while (n != 0) {
            count++;
            n &= (n - 1);
        }

        return count;
    }

    // Helper method to print binary representation
    private static String toBinaryString(int n) {
        return String.format("%32s", Integer.toBinaryString(n)).replace(' ', '0');
    }

    // Test cases
    public static void main(String[] args) {
        NumberOf1Bits5 solution = new NumberOf1Bits5();

        // Test Case 1: Basic test
        int n1 = 11; // Binary: 1011
        System.out.println("Number: " + n1 + " (" + toBinaryString(n1) + ")");
        System.out.println("Hamming weight: " + solution.hammingWeight(n1)); // Expected: 3

        // Test Case 2: All zeros
        int n2 = 0;
        System.out.println("\nNumber: " + n2 + " (" + toBinaryString(n2) + ")");
        System.out.println("Hamming weight: " + solution.hammingWeight(n2)); // Expected: 0

        // Test Case 3: All ones
        int n3 = -1; // All 32 bits set
        System.out.println("\nNumber: " + n3 + " (" + toBinaryString(n3) + ")");
        System.out.println("Hamming weight: " + solution.hammingWeight(n3)); // Expected: 32

        // Test Case 4: Single bit set
        int n4 = 1;
        System.out.println("\nNumber: " + n4 + " (" + toBinaryString(n4) + ")");
        System.out.println("Hamming weight: " + solution.hammingWeight(n4)); // Expected: 1

        int n5 = Integer.MIN_VALUE; // MSB set
        System.out.println("\nNumber: " + n5 + " (" + toBinaryString(n5) + ")");
        System.out.println("Hamming weight: " + solution.hammingWeight(n5)); // Expected: 1

        // Test Case 5: Compare different approaches
        int testN = 0b11010100101100101101000010101100; // 15 ones
        System.out.println("\nComparing approaches for: " + toBinaryString(testN));

        int[] results = {
            solution.hammingWeight(testN),
            solution.hammingWeightLoop(testN),
            solution.hammingWeightBuiltIn(testN),
            solution.hammingWeightMask(testN),
            solution.hammingWeightRecursive(testN),
            solution.hammingWeightDivideConquer(testN),
            solution.hammingWeightLookup(testN),
            solution.hammingWeightMultiplication(testN)
        };

        String[] methodNames = {
            "Kernighan", "Loop", "Built-in", "Mask", "Recursive",
            "Divide&Conquer", "Lookup", "Multiplication"
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

        // Test Case 6: Performance comparison
        int largeN = 0xAAAAAAAA; // Alternating bits
        System.out.println("\nPerformance test with alternating bits:");

        long startTime, endTime;

        startTime = System.nanoTime();
        for (int i = 0; i < 100000; i++) {
            solution.hammingWeight(largeN);
        }
        endTime = System.nanoTime();
        System.out.println("Kernighan: " + (endTime - startTime) / 1000000 + " ms");

        startTime = System.nanoTime();
        for (int i = 0; i < 100000; i++) {
            solution.hammingWeightLoop(largeN);
        }
        endTime = System.nanoTime();
        System.out.println("Loop: " + (endTime - startTime) / 1000000 + " ms");

        startTime = System.nanoTime();
        for (int i = 0; i < 100000; i++) {
            solution.hammingWeightBuiltIn(largeN);
        }
        endTime = System.nanoTime();
        System.out.println("Built-in: " + (endTime - startTime) / 1000000 + " ms");

        // Test Case 7: Edge cases
        System.out.println("\nEdge cases:");
        System.out.println("0: " + solution.hammingWeight(0));
        System.out.println("1: " + solution.hammingWeight(1));
        System.out.println("-1: " + solution.hammingWeight(-1));
        System.out.println("Integer.MAX_VALUE: " + solution.hammingWeight(Integer.MAX_VALUE));
        System.out.println("Integer.MIN_VALUE: " + solution.hammingWeight(Integer.MIN_VALUE));
    }
}