package bit_manipulation.questions;

/*
 * 3. COUNTING BITS (LeetCode 338)
 *
 * Problem Statement:
 * Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n),
 * ans[i] is the number of 1's in the binary representation of i.
 *
 * Conceptual Understanding:
 * - Count set bits (population count) for each number from 0 to n
 * - Dynamic programming approach: dp[i] = dp[i/2] + (i % 2)
 * - Bit manipulation: use n & (n-1) to clear lowest set bit
 * - Time: O(n), Space: O(n) for result array
 * - DP approach is most efficient for large n
 * - Each number's bit count relates to its half and LSB
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

class CountingBits3 {

    // Method 1: Dynamic Programming (most efficient)
    public int[] countBits(int n) {
        int[] ans = new int[n + 1];

        for (int i = 1; i <= n; i++) {
            // dp[i] = dp[i/2] + (i % 2)
            // i/2 gives the number with the highest bit removed
            // i % 2 gives the value of the lowest bit
            ans[i] = ans[i >> 1] + (i & 1);
        }

        return ans;
    }

    // Method 2: Bit manipulation with loop
    public int[] countBitsLoop(int n) {
        int[] ans = new int[n + 1];

        for (int i = 0; i <= n; i++) {
            int count = 0;
            int num = i;

            while (num > 0) {
                count += num & 1;
                num >>= 1;
            }

            ans[i] = count;
        }

        return ans;
    }

    // Method 3: Using Integer.bitCount()
    public int[] countBitsBuiltIn(int n) {
        int[] ans = new int[n + 1];

        for (int i = 0; i <= n; i++) {
            ans[i] = Integer.bitCount(i);
        }

        return ans;
    }

    // Method 4: Bit manipulation with Brian Kernighan's algorithm
    public int[] countBitsKernighan(int n) {
        int[] ans = new int[n + 1];

        for (int i = 0; i <= n; i++) {
            int count = 0;
            int num = i;

            // Brian Kernighan's algorithm: clears lowest set bit
            while (num > 0) {
                num &= (num - 1);
                count++;
            }

            ans[i] = count;
        }

        return ans;
    }

    // Method 5: Recursive approach
    public int[] countBitsRecursive(int n) {
        int[] ans = new int[n + 1];
        countBitsRecursiveHelper(ans, n);
        return ans;
    }

    private void countBitsRecursiveHelper(int[] ans, int n) {
        if (n == 0) {
            ans[0] = 0;
            return;
        }

        countBitsRecursiveHelper(ans, n - 1);
        // Use DP relationship
        ans[n] = ans[n >> 1] + (n & 1);
    }

    // Method 6: Using lookup table (for small n)
    public int[] countBitsLookup(int n) {
        if (n >= 256) {
            return countBits(n); // Fallback to DP for large n
        }

        int[] ans = new int[n + 1];
        int[] lookup = new int[256];

        // Precompute for 0-255
        for (int i = 0; i < 256; i++) {
            lookup[i] = Integer.bitCount(i);
        }

        for (int i = 0; i <= n; i++) {
            ans[i] = lookup[i];
        }

        return ans;
    }

    // Method 7: Parallel bit counting (conceptual)
    public int[] countBitsParallel(int n) {
        int[] ans = new int[n + 1];

        // Parallel counting using bit operations
        for (int i = 0; i <= n; i++) {
            int count = i;

            // Count bits in parallel
            count = count - ((count >>> 1) & 0x55555555);
            count = (count & 0x33333333) + ((count >>> 2) & 0x33333333);
            count = (count + (count >>> 4)) & 0x0F0F0F0F;
            count = count + (count >>> 8);
            count = count + (count >>> 16);
            count = count & 0x3F;

            ans[i] = count;
        }

        return ans;
    }

    // Method 8: String approach
    public int[] countBitsString(int n) {
        int[] ans = new int[n + 1];

        for (int i = 0; i <= n; i++) {
            String binary = Integer.toBinaryString(i);
            ans[i] = (int) binary.chars().filter(ch -> ch == '1').count();
        }

        return ans;
    }

    // Method 9: Using bit manipulation with mask
    public int[] countBitsMask(int n) {
        int[] ans = new int[n + 1];

        for (int i = 0; i <= n; i++) {
            int count = 0;
            int mask = 1;

            for (int j = 0; j < 32; j++) {
                if ((i & mask) != 0) {
                    count++;
                }
                mask <<= 1;
            }

            ans[i] = count;
        }

        return ans;
    }

    // Method 10: DP with even/odd optimization
    public int[] countBitsEvenOdd(int n) {
        int[] ans = new int[n + 1];

        for (int i = 1; i <= n; i++) {
            if (i % 2 == 0) {
                // Even number: same bits as i/2
                ans[i] = ans[i / 2];
            } else {
                // Odd number: one more bit than i/2
                ans[i] = ans[i / 2] + 1;
            }
        }

        return ans;
    }

    // Method 11: Iterative DP with space optimization concept
    public int[] countBitsIterativeDP(int n) {
        int[] ans = new int[n + 1];

        // Base cases
        if (n >= 0) ans[0] = 0;
        if (n >= 1) ans[1] = 1;

        int currentPower = 1;

        for (int i = 2; i <= n; i++) {
            if (i == currentPower * 2) {
                currentPower = i;
            }

            // Copy from previous power of 2 range
            int offset = i - currentPower;
            ans[i] = ans[offset] + 1;
        }

        return ans;
    }

    // Method 12: Using Java 8 streams
    public int[] countBitsStream(int n) {
        return java.util.stream.IntStream.rangeClosed(0, n)
                                        .map(Integer::bitCount)
                                        .toArray();
    }

    // Method 13: Count bits for each number individually (naive)
    public int[] countBitsNaive(int n) {
        int[] ans = new int[n + 1];

        for (int i = 0; i <= n; i++) {
            ans[i] = countBitsForNumber(i);
        }

        return ans;
    }

    private int countBitsForNumber(int num) {
        int count = 0;
        while (num > 0) {
            if ((num & 1) == 1) {
                count++;
            }
            num >>= 1;
        }
        return count;
    }

    // Method 14: Using divide and conquer approach
    public int[] countBitsDivideConquer(int n) {
        int[] ans = new int[n + 1];

        for (int i = 0; i <= n; i++) {
            ans[i] = countBitsDivideConquerHelper(i);
        }

        return ans;
    }

    private int countBitsDivideConquerHelper(int n) {
        if (n == 0) return 0;
        if (n == 1) return 1;

        int mid = n / 2;
        int left = countBitsDivideConquerHelper(mid);
        int right = countBitsDivideConquerHelper(n - mid - 1);

        return left + right + (n % 2);
    }

    // Method 15: Optimized DP with O(n) time and O(1) extra space (besides result)
    public int[] countBitsOptimized(int n) {
        int[] ans = new int[n + 1];

        for (int i = 0; i <= n; i++) {
            // Most efficient: dp[i] = dp[i >> 1] + (i & 1)
            ans[i] = ans[i >> 1] + (i & 1);
        }

        return ans;
    }

    // Helper method to print array
    private static void printArray(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }

    // Test cases
    public static void main(String[] args) {
        CountingBits3 solution = new CountingBits3();

        // Test Case 1: Small n
        int n1 = 5;
        System.out.println("Counting bits for n = " + n1 + ":");
        printArray(solution.countBits(n1)); // Expected: [0, 1, 1, 2, 1, 2, 2]

        // Test Case 2: Larger n
        int n2 = 10;
        System.out.println("\nCounting bits for n = " + n2 + ":");
        printArray(solution.countBits(n2)); // Expected: [0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3]

        // Test Case 3: Edge cases
        System.out.println("\nEdge cases:");
        printArray(solution.countBits(0)); // [0]
        printArray(solution.countBits(1)); // [0, 1]

        // Test Case 4: Different approaches comparison
        int testN = 8;
        System.out.println("\nComparing approaches for n = " + testN + ":");

        int[] dp = solution.countBits(testN);
        int[] loop = solution.countBitsLoop(testN);
        int[] builtin = solution.countBitsBuiltIn(testN);
        int[] kernighan = solution.countBitsKernighan(testN);

        System.out.println("DP:        " + java.util.Arrays.toString(dp));
        System.out.println("Loop:      " + java.util.Arrays.toString(loop));
        System.out.println("Built-in:  " + java.util.Arrays.toString(builtin));
        System.out.println("Kernighan: " + java.util.Arrays.toString(kernighan));

        // Verify all approaches give same result
        boolean allEqual = java.util.Arrays.equals(dp, loop) &&
                          java.util.Arrays.equals(dp, builtin) &&
                          java.util.Arrays.equals(dp, kernighan);

        System.out.println("All approaches equal: " + allEqual);

        // Test Case 5: Performance test for larger n
        int largeN = 1000;
        long startTime = System.nanoTime();
        solution.countBits(largeN);
        long endTime = System.nanoTime();
        System.out.println("\nDP approach for n=" + largeN + " took: " +
                          (endTime - startTime) / 1000000 + " ms");
    }
}