package bit_manipulation.questions;

/*
 * 4. REVERSE BITS (LeetCode 190)
 *
 * Problem Statement:
 * Reverse bits of a given 32 bits unsigned integer.
 * Note: Note that in some languages, such as Java, there is no unsigned integer type.
 * In this case, both input and output will be given as a signed integer type.
 * They should not affect your implementation, as the integer's internal binary representation is the same.
 *
 * Conceptual Understanding:
 * - Reverse the binary representation of a 32-bit integer
 * - Bit manipulation: extract each bit and place in reverse position
 * - Can use bit operations or divide and conquer
 * - Time: O(1) since 32 bits, Space: O(1)
 * - Need to handle signed integers (two's complement)
 * - MSB becomes LSB and vice versa
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

class ReverseBits4 {

    // Method 1: Bit manipulation (iterative)
    public int reverseBits(int n) {
        int result = 0;

        for (int i = 0; i < 32; i++) {
            // Extract i-th bit from n
            int bit = (n >> i) & 1;

            // Place it at (31-i) position in result
            result |= (bit << (31 - i));
        }

        return result;
    }

    // Method 2: Using bit operations with accumulation
    public int reverseBitsAccumulate(int n) {
        int result = 0;

        for (int i = 0; i < 32; i++) {
            // Shift result left to make room for new bit
            result <<= 1;

            // Add the least significant bit of n
            result |= (n & 1);

            // Shift n right to process next bit
            n >>= 1;
        }

        return result;
    }

    // Method 3: Divide and conquer approach
    public int reverseBitsDivideConquer(int n) {
        // Reverse bytes first
        n = ((n & 0xFFFF0000) >>> 16) | ((n & 0x0000FFFF) << 16);
        // Reverse nibbles within bytes
        n = ((n & 0xFF00FF00) >>> 8) | ((n & 0x00FF00FF) << 8);
        // Reverse bits within nibbles
        n = ((n & 0xF0F0F0F0) >>> 4) | ((n & 0x0F0F0F0F) << 4);
        // Reverse bits within pairs
        n = ((n & 0xCCCCCCCC) >>> 2) | ((n & 0x33333333) << 2);
        // Reverse individual bits
        n = ((n & 0xAAAAAAAA) >>> 1) | ((n & 0x55555555) << 1);

        return n;
    }

    // Method 4: Using lookup table for bytes
    private static final int[] BYTE_REVERSE = new int[256];

    static {
        for (int i = 0; i < 256; i++) {
            BYTE_REVERSE[i] = reverseByte(i);
        }
    }

    private static int reverseByte(int b) {
        int result = 0;
        for (int i = 0; i < 8; i++) {
            result = (result << 1) | (b & 1);
            b >>= 1;
        }
        return result;
    }

    public int reverseBitsLookup(int n) {
        return (BYTE_REVERSE[(n >>> 24) & 0xFF] << 0) |
               (BYTE_REVERSE[(n >>> 16) & 0xFF] << 8) |
               (BYTE_REVERSE[(n >>> 8) & 0xFF] << 16) |
               (BYTE_REVERSE[(n >>> 0) & 0xFF] << 24);
    }

    // Method 5: Recursive approach
    public int reverseBitsRecursive(int n) {
        return reverseBitsRecursiveHelper(n, 32);
    }

    private int reverseBitsRecursiveHelper(int n, int bits) {
        if (bits == 0) return 0;

        // Take LSB and place it at MSB position for remaining bits
        return ((n & 1) << (bits - 1)) | reverseBitsRecursiveHelper(n >> 1, bits - 1);
    }

    // Method 6: Using Integer.reverse()
    public int reverseBitsBuiltIn(int n) {
        return Integer.reverse(n);
    }

    // Method 7: Bit by bit with mask
    public int reverseBitsMask(int n) {
        int result = 0;
        int mask = 1;

        for (int i = 0; i < 32; i++) {
            // Check if bit i is set in n
            if ((n & mask) != 0) {
                // Set bit (31-i) in result
                result |= (1 << (31 - i));
            }
            mask <<= 1;
        }

        return result;
    }

    // Method 8: Using string conversion (conceptual)
    public int reverseBitsString(int n) {
        String binary = String.format("%32s", Integer.toBinaryString(n)).replace(' ', '0');
        String reversed = new StringBuilder(binary).reverse().toString();
        return (int) Long.parseLong(reversed, 2);
    }

    // Method 9: Swapping bits in pairs
    public int reverseBitsSwapPairs(int n) {
        // Swap adjacent bits
        n = ((n & 0xAAAAAAAA) >>> 1) | ((n & 0x55555555) << 1);
        // Swap adjacent pairs
        n = ((n & 0xCCCCCCCC) >>> 2) | ((n & 0x33333333) << 2);
        // Swap adjacent nibbles
        n = ((n & 0xF0F0F0F0) >>> 4) | ((n & 0x0F0F0F0F) << 4);
        // Swap bytes
        n = ((n & 0xFF00FF00) >>> 8) | ((n & 0x00FF00FF) << 8);
        // Swap words
        n = ((n & 0xFFFF0000) >>> 16) | ((n & 0x0000FFFF) << 16);

        return n;
    }

    // Method 10: Using bit set operations
    public int reverseBitsBitSet(int n) {
        java.util.BitSet bitSet = new java.util.BitSet(32);

        // Set bits from n
        for (int i = 0; i < 32; i++) {
            if ((n & (1 << i)) != 0) {
                bitSet.set(31 - i);
            }
        }

        // Convert back to int
        int result = 0;
        for (int i = 0; i < 32; i++) {
            if (bitSet.get(i)) {
                result |= (1 << i);
            }
        }

        return result;
    }

    // Method 11: Using array to store bits
    public int reverseBitsArray(int n) {
        int[] bits = new int[32];

        // Extract all bits
        for (int i = 0; i < 32; i++) {
            bits[i] = (n >> i) & 1;
        }

        // Reverse the array
        int result = 0;
        for (int i = 0; i < 32; i++) {
            result |= (bits[i] << (31 - i));
        }

        return result;
    }

    // Method 12: Optimized iterative approach
    public int reverseBitsOptimized(int n) {
        int result = 0;

        // Process 4 bits at a time for better performance
        for (int i = 0; i < 8; i++) {
            // Extract 4 bits
            int bits4 = n & 15;
            n >>= 4;

            // Reverse 4 bits: 0->0, 1->8, 2->4, 3->12, etc.
            int reversed4 = ((bits4 & 1) << 3) |
                           ((bits4 & 2) << 1) |
                           ((bits4 & 4) >> 1) |
                           ((bits4 & 8) >> 3);

            result = (result << 4) | reversed4;
        }

        return result;
    }

    // Method 13: Using BigInteger (for conceptual understanding)
    public int reverseBitsBigInteger(int n) {
        java.math.BigInteger bigInt = java.math.BigInteger.valueOf(n & 0xFFFFFFFFL);
        String binary = bigInt.toString(2);

        // Pad to 32 bits
        binary = String.format("%32s", binary).replace(' ', '0');

        // Reverse
        String reversed = new StringBuilder(binary).reverse().toString();

        return new java.math.BigInteger(reversed, 2).intValue();
    }

    // Method 14: Functional approach with streams
    public int reverseBitsStream(int n) {
        return java.util.stream.IntStream.range(0, 32)
                                        .map(i -> ((n >> i) & 1) << (31 - i))
                                        .reduce(0, (a, b) -> a | b);
    }

    // Method 15: Using bit manipulation with loop unrolling
    public int reverseBitsUnrolled(int n) {
        n = ((n & 0xFFFF0000) >>> 16) | ((n & 0x0000FFFF) << 16);
        n = ((n & 0xFF00FF00) >>> 8) | ((n & 0x00FF00FF) << 8);
        n = ((n & 0xF0F0F0F0) >>> 4) | ((n & 0x0F0F0F0F) << 4);
        n = ((n & 0xCCCCCCCC) >>> 2) | ((n & 0x33333333) << 2);
        n = ((n & 0xAAAAAAAA) >>> 1) | ((n & 0x55555555) << 1);
        return n;
    }

    // Helper method to print binary representation
    private static String toBinaryString(int n) {
        return String.format("%32s", Integer.toBinaryString(n)).replace(' ', '0');
    }

    // Test cases
    public static void main(String[] args) {
        ReverseBits4 solution = new ReverseBits4();

        // Test Case 1: Basic test
        int n1 = 43261596; // Binary: 00000010100101000001111010011100
        int expected1 = 964176192; // Binary: 00111001011110000010100101000000

        System.out.println("Input: " + n1);
        System.out.println("Binary: " + toBinaryString(n1));
        System.out.println("Reversed: " + toBinaryString(solution.reverseBits(n1)));
        System.out.println("Expected: " + toBinaryString(expected1));
        System.out.println("Correct: " + (solution.reverseBits(n1) == expected1));

        // Test Case 2: All zeros
        int n2 = 0;
        System.out.println("\nAll zeros: " + solution.reverseBits(n2)); // 0

        // Test Case 3: All ones
        int n3 = -1; // All 32 bits set
        System.out.println("All ones: " + solution.reverseBits(n3)); // -1

        // Test Case 4: Single bit set
        int n4 = 1; // LSB set
        System.out.println("LSB set: " + toBinaryString(solution.reverseBits(n4))); // MSB set

        int n5 = Integer.MIN_VALUE; // MSB set
        System.out.println("MSB set: " + toBinaryString(solution.reverseBits(n5))); // LSB set

        // Test Case 5: Compare different approaches
        int testN = 0b11010100101100101101000010101100;
        System.out.println("\nComparing approaches for: " + toBinaryString(testN));

        int[] results = {
            solution.reverseBits(testN),
            solution.reverseBitsAccumulate(testN),
            solution.reverseBitsDivideConquer(testN),
            solution.reverseBitsLookup(testN),
            solution.reverseBitsBuiltIn(testN),
            solution.reverseBitsMask(testN),
            solution.reverseBitsSwapPairs(testN)
        };

        for (int i = 0; i < results.length; i++) {
            System.out.println("Method " + (i + 1) + ": " + toBinaryString(results[i]));
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

        // Test Case 6: Edge cases
        System.out.println("\nEdge cases:");
        System.out.println("0 reversed: " + solution.reverseBits(0));
        System.out.println("1 reversed: " + solution.reverseBits(1));
        System.out.println("-1 reversed: " + solution.reverseBits(-1));
        System.out.println("Integer.MAX_VALUE: " + toBinaryString(solution.reverseBits(Integer.MAX_VALUE)));
        System.out.println("Integer.MIN_VALUE: " + toBinaryString(solution.reverseBits(Integer.MIN_VALUE)));
    }
}