package bit_manipulation.questions;

/*
 * 2. POWER OF TWO (LeetCode 231)
 *
 * Problem Statement:
 * Given an integer n, return true if it is a power of two. Otherwise, return false.
 * An integer n is a power of two, if there exists an integer x such that n == 2^x.
 *
 * Conceptual Understanding:
 * - Powers of two in binary: 1, 10, 100, 1000, 10000, etc.
 * - Only one bit is set in binary representation
 * - n & (n-1) == 0 for powers of two (clears the lowest set bit)
 * - n > 0 is required (2^0 = 1, negative powers not integers)
 * - Time: O(1), Space: O(1)
 * - Bit manipulation is most efficient approach
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

class PowerOfTwo2 {

    // Method 1: Bit manipulation (most efficient)
    public boolean isPowerOfTwo(int n) {
        if (n <= 0) return false;
        return (n & (n - 1)) == 0;
    }

    // Method 2: Bit manipulation with loop
    public boolean isPowerOfTwoLoop(int n) {
        if (n <= 0) return false;

        // Count set bits
        int count = 0;
        while (n > 0) {
            count += n & 1;
            n >>= 1;
            if (count > 1) return false;
        }

        return count == 1;
    }

    // Method 3: Using Integer.bitCount()
    public boolean isPowerOfTwoBitCount(int n) {
        if (n <= 0) return false;
        return Integer.bitCount(n) == 1;
    }

    // Method 4: Mathematical approach (log)
    public boolean isPowerOfTwoLog(int n) {
        if (n <= 0) return false;

        double log = Math.log(n) / Math.log(2);
        return log == (int) log;
    }

    // Method 5: Recursive approach
    public boolean isPowerOfTwoRecursive(int n) {
        if (n <= 0) return false;
        if (n == 1) return true;
        if (n % 2 != 0) return false;
        return isPowerOfTwoRecursive(n / 2);
    }

    // Method 6: Iterative division
    public boolean isPowerOfTwoDivision(int n) {
        if (n <= 0) return false;

        while (n % 2 == 0) {
            n /= 2;
        }

        return n == 1;
    }

    // Method 7: Using highest one bit
    public boolean isPowerOfTwoHighestOneBit(int n) {
        if (n <= 0) return false;
        int highestOneBit = Integer.highestOneBit(n);
        return n == highestOneBit;
    }

    // Method 8: Using lowest one bit
    public boolean isPowerOfTwoLowestOneBit(int n) {
        if (n <= 0) return false;
        int lowestOneBit = Integer.lowestOneBit(n);
        return n == lowestOneBit;
    }

    // Method 9: Bit manipulation with mask
    public boolean isPowerOfTwoMask(int n) {
        if (n <= 0) return false;

        // Check if n is power of 2 by checking all powers
        int[] powersOfTwo = {1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024,
                           2048, 4096, 8192, 16384, 32768, 65536, 131072,
                           262144, 524288, 1048576, 2097152, 4194304,
                           8388608, 16777216, 33554432, 67108864,
                           134217728, 268435456, 536870912, 1073741824};

        for (int power : powersOfTwo) {
            if (n == power) return true;
        }

        return false;
    }

    // Method 10: String approach (binary representation)
    public boolean isPowerOfTwoString(int n) {
        if (n <= 0) return false;
        String binary = Integer.toBinaryString(n);
        return binary.chars().filter(ch -> ch == '1').count() == 1;
    }

    // Method 11: Using multiplication
    public boolean isPowerOfTwoMultiply(int n) {
        if (n <= 0) return false;

        long power = 1;
        while (power < n) {
            power *= 2;
            if (power == n) return true;
        }

        return power == n;
    }

    // Method 12: Bit manipulation with complement
    public boolean isPowerOfTwoComplement(int n) {
        if (n <= 0) return false;
        return (n & -n) == n;
    }

    // Method 13: Check if n & (n-1) == 0 with additional checks
    public boolean isPowerOfTwoDetailed(int n) {
        if (n <= 0) return false;

        // n & (n-1) clears the lowest set bit
        // For power of 2, only one bit is set, so result should be 0
        return (n & (n - 1)) == 0;
    }

    // Method 14: Using switch statement (for small n)
    public boolean isPowerOfTwoSwitch(int n) {
        switch (n) {
            case 1: case 2: case 4: case 8: case 16: case 32: case 64:
            case 128: case 256: case 512: case 1024: case 2048: case 4096:
            case 8192: case 16384: case 32768: case 65536: case 131072:
            case 262144: case 524288: case 1048576: case 2097152:
            case 4194304: case 8388608: case 16777216: case 33554432:
            case 67108864: case 134217728: case 268435456: case 536870912:
            case 1073741824:
                return true;
            default:
                return false;
        }
    }

    // Method 15: Using BigInteger for large numbers (conceptual)
    public boolean isPowerOfTwoBigInteger(int n) {
        if (n <= 0) return false;

        java.math.BigInteger bigN = java.math.BigInteger.valueOf(n);
        java.math.BigInteger two = java.math.BigInteger.valueOf(2);

        // Keep dividing by 2 until we can't
        while (bigN.mod(two).equals(java.math.BigInteger.ZERO)) {
            bigN = bigN.divide(two);
        }

        return bigN.equals(java.math.BigInteger.ONE);
    }

    // Test cases
    public static void main(String[] args) {
        PowerOfTwo2 solution = new PowerOfTwo2();

        // Test Case 1: Basic powers of two
        System.out.println("1 is power of 2: " + solution.isPowerOfTwo(1)); // true
        System.out.println("2 is power of 2: " + solution.isPowerOfTwo(2)); // true
        System.out.println("4 is power of 2: " + solution.isPowerOfTwo(4)); // true
        System.out.println("8 is power of 2: " + solution.isPowerOfTwo(8)); // true
        System.out.println("16 is power of 2: " + solution.isPowerOfTwo(16)); // true

        // Test Case 2: Non-powers of two
        System.out.println("3 is power of 2: " + solution.isPowerOfTwo(3)); // false
        System.out.println("6 is power of 2: " + solution.isPowerOfTwo(6)); // false
        System.out.println("9 is power of 2: " + solution.isPowerOfTwo(9)); // false
        System.out.println("10 is power of 2: " + solution.isPowerOfTwo(10)); // false

        // Test Case 3: Edge cases
        System.out.println("0 is power of 2: " + solution.isPowerOfTwo(0)); // false
        System.out.println("-1 is power of 2: " + solution.isPowerOfTwo(-1)); // false
        System.out.println("-2 is power of 2: " + solution.isPowerOfTwo(-2)); // false

        // Test Case 4: Large powers of two
        System.out.println("1073741824 is power of 2: " + solution.isPowerOfTwo(1073741824)); // true (2^30)

        // Test Case 5: Different approaches
        int testNum = 32;
        System.out.println("\nTesting different approaches for " + testNum + ":");
        System.out.println("Bit manipulation: " + solution.isPowerOfTwo(testNum));
        System.out.println("Loop: " + solution.isPowerOfTwoLoop(testNum));
        System.out.println("Bit count: " + solution.isPowerOfTwoBitCount(testNum));
        System.out.println("Log: " + solution.isPowerOfTwoLog(testNum));
        System.out.println("Recursive: " + solution.isPowerOfTwoRecursive(testNum));
        System.out.println("Division: " + solution.isPowerOfTwoDivision(testNum));
        System.out.println("Highest one bit: " + solution.isPowerOfTwoHighestOneBit(testNum));
        System.out.println("Lowest one bit: " + solution.isPowerOfTwoLowestOneBit(testNum));
        System.out.println("String: " + solution.isPowerOfTwoString(testNum));
        System.out.println("Complement: " + solution.isPowerOfTwoComplement(testNum));
    }
}