package bit_manipulation.questions;

/*
 * 6. MISSING NUMBER (LeetCode 268)
 *
 * Problem Statement:
 * Given an array nums containing n distinct numbers in the range [0, n],
 * return the only number in the range that is missing from the array.
 *
 * Conceptual Understanding:
 * - XOR approach: XOR all numbers from 0 to n, then XOR with array elements
 * - XOR is associative and commutative: a ^ a = 0, a ^ 0 = a
 * - Missing number will be the only one not cancelled out
 * - Time: O(n), Space: O(1)
 * - Mathematical approach: sum formula, but XOR is better (no overflow)
 * - Bit manipulation gives elegant solution
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

class MissingNumber6 {

    // Method 1: XOR approach (most efficient)
    public int missingNumber(int[] nums) {
        int n = nums.length;
        int xor = 0;

        // XOR all numbers from 0 to n
        for (int i = 0; i <= n; i++) {
            xor ^= i;
        }

        // XOR with all array elements
        for (int num : nums) {
            xor ^= num;
        }

        return xor;
    }

    // Method 2: XOR in single loop
    public int missingNumberXORSingle(int[] nums) {
        int n = nums.length;
        int xor = n; // Start with n since 0 to n-1 are in array, n is missing initially

        for (int i = 0; i < n; i++) {
            xor ^= i ^ nums[i];
        }

        return xor;
    }

    // Method 3: Mathematical approach (sum)
    public int missingNumberSum(int[] nums) {
        int n = nums.length;
        long expectedSum = (long) n * (n + 1) / 2;
        long actualSum = 0;

        for (int num : nums) {
            actualSum += num;
        }

        return (int) (expectedSum - actualSum);
    }

    // Method 4: Using HashSet
    public int missingNumberHashSet(int[] nums) {
        java.util.Set<Integer> set = new java.util.HashSet<>();

        for (int num : nums) {
            set.add(num);
        }

        for (int i = 0; i <= nums.length; i++) {
            if (!set.contains(i)) {
                return i;
            }
        }

        return -1; // Should not reach here
    }

    // Method 5: Sort and find gap
    public int missingNumberSort(int[] nums) {
        java.util.Arrays.sort(nums);

        // Check if 0 is missing
        if (nums[0] != 0) return 0;

        // Check if n is missing
        if (nums[nums.length - 1] != nums.length) return nums.length;

        // Find the gap
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] != nums[i - 1] + 1) {
                return nums[i - 1] + 1;
            }
        }

        return -1; // Should not reach here
    }

    // Method 6: Bit manipulation with counting
    public int missingNumberBitCount(int[] nums) {
        int n = nums.length;
        int[] count = new int[n + 1];

        // Count occurrences
        for (int num : nums) {
            if (num < n + 1) {
                count[num]++;
            }
        }

        // Find missing number
        for (int i = 0; i <= n; i++) {
            if (count[i] == 0) {
                return i;
            }
        }

        return -1;
    }

    // Method 7: Using boolean array
    public int missingNumberBoolean(int[] nums) {
        int n = nums.length;
        boolean[] present = new boolean[n + 1];

        for (int num : nums) {
            present[num] = true;
        }

        for (int i = 0; i <= n; i++) {
            if (!present[i]) {
                return i;
            }
        }

        return -1;
    }

    // Method 8: XOR with indices
    public int missingNumberXORIndices(int[] nums) {
        int xor = 0;

        for (int i = 0; i < nums.length; i++) {
            xor ^= (i ^ nums[i]);
        }

        // XOR with n (since range is 0 to n)
        xor ^= nums.length;

        return xor;
    }

    // Method 9: Mathematical with long to avoid overflow
    public int missingNumberMathLong(int[] nums) {
        long n = nums.length;
        long expectedSum = n * (n + 1) / 2;
        long actualSum = 0;

        for (int num : nums) {
            actualSum += num;
        }

        return (int) (expectedSum - actualSum);
    }

    // Method 10: Using streams
    public int missingNumberStream(int[] nums) {
        int n = nums.length;
        java.util.Set<Integer> set = java.util.Arrays.stream(nums)
                                                    .boxed()
                                                    .collect(java.util.stream.Collectors.toSet());

        return java.util.stream.IntStream.rangeClosed(0, n)
                                        .filter(i -> !set.contains(i))
                                        .findFirst()
                                        .orElse(-1);
    }

    // Method 11: Binary search approach (after sorting)
    public int missingNumberBinarySearch(int[] nums) {
        java.util.Arrays.sort(nums);
        int left = 0, right = nums.length;

        while (left < right) {
            int mid = left + (right - left) / 2;

            if (nums[mid] > mid) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left;
    }

    // Method 12: XOR with cumulative XOR
    public int missingNumberCumulativeXOR(int[] nums) {
        int xor = 0;
        int n = nums.length;

        // XOR from 0 to n
        for (int i = 0; i <= n; i++) {
            xor ^= i;
        }

        // XOR with array elements
        for (int num : nums) {
            xor ^= num;
        }

        return xor;
    }

    // Method 13: Using ArrayList for dynamic check
    public int missingNumberArrayList(int[] nums) {
        java.util.List<Integer> list = new java.util.ArrayList<>();
        for (int num : nums) {
            list.add(num);
        }

        for (int i = 0; i <= nums.length; i++) {
            if (!list.contains(i)) {
                return i;
            }
        }

        return -1;
    }

    // Method 14: Bit manipulation with bit sets
    public int missingNumberBitSet(int[] nums) {
        java.util.BitSet bitSet = new java.util.BitSet(nums.length + 1);

        for (int num : nums) {
            bitSet.set(num);
        }

        for (int i = 0; i <= nums.length; i++) {
            if (!bitSet.get(i)) {
                return i;
            }
        }

        return -1;
    }

    // Method 15: Optimized XOR with early termination concept
    public int missingNumberOptimized(int[] nums) {
        int result = nums.length;

        for (int i = 0; i < nums.length; i++) {
            result ^= i;
            result ^= nums[i];
        }

        return result;
    }

    // Test cases
    public static void main(String[] args) {
        MissingNumber6 solution = new MissingNumber6();

        // Test Case 1: Basic test
        int[] nums1 = {3, 0, 1};
        System.out.println("Array: " + java.util.Arrays.toString(nums1));
        System.out.println("Missing number: " + solution.missingNumber(nums1)); // Expected: 2

        // Test Case 2: Missing at beginning
        int[] nums2 = {1, 2, 3};
        System.out.println("\nArray: " + java.util.Arrays.toString(nums2));
        System.out.println("Missing number: " + solution.missingNumber(nums2)); // Expected: 0

        // Test Case 3: Missing at end
        int[] nums3 = {0, 1, 2};
        System.out.println("\nArray: " + java.util.Arrays.toString(nums3));
        System.out.println("Missing number: " + solution.missingNumber(nums3)); // Expected: 3

        // Test Case 4: Single element missing 0
        int[] nums4 = {1};
        System.out.println("\nArray: " + java.util.Arrays.toString(nums4));
        System.out.println("Missing number: " + solution.missingNumber(nums4)); // Expected: 0

        // Test Case 5: Single element missing 1
        int[] nums5 = {0};
        System.out.println("\nArray: " + java.util.Arrays.toString(nums5));
        System.out.println("Missing number: " + solution.missingNumber(nums5)); // Expected: 1

        // Test Case 6: Compare different approaches
        int[] testNums = {9, 6, 4, 2, 3, 5, 7, 0, 1};
        System.out.println("\nComparing approaches for: " + java.util.Arrays.toString(testNums));

        int[] results = {
            solution.missingNumber(testNums),
            solution.missingNumberXORSingle(testNums),
            solution.missingNumberSum(testNums),
            solution.missingNumberHashSet(testNums),
            solution.missingNumberSort(testNums),
            solution.missingNumberBinarySearch(testNums),
            solution.missingNumberOptimized(testNums)
        };

        String[] methodNames = {
            "XOR", "XOR Single", "Sum", "HashSet", "Sort", "Binary Search", "Optimized"
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

        // Test Case 7: Edge cases
        System.out.println("\nEdge cases:");
        System.out.println("Empty array: " + solution.missingNumber(new int[]{})); // 0
        System.out.println("Single 0: " + solution.missingNumber(new int[]{0})); // 1
        System.out.println("0,1,2,4: " + solution.missingNumber(new int[]{0, 1, 2, 4})); // 3

        // Test Case 8: Large array
        int[] largeArray = new int[1000];
        for (int i = 0; i < 1000; i++) {
            largeArray[i] = i + 1; // Missing 0
        }
        System.out.println("Large array (missing 0): " + solution.missingNumber(largeArray));

        // Test Case 9: Performance comparison
        int[] perfArray = new int[10000];
        for (int i = 0; i < 10000; i++) {
            perfArray[i] = i + 1; // Missing 0
        }

        long startTime, endTime;

        startTime = System.nanoTime();
        for (int i = 0; i < 1000; i++) {
            solution.missingNumber(perfArray);
        }
        endTime = System.nanoTime();
        System.out.println("\nXOR approach (1000 runs): " + (endTime - startTime) / 1000000 + " ms");

        startTime = System.nanoTime();
        for (int i = 0; i < 1000; i++) {
            solution.missingNumberSum(perfArray);
        }
        endTime = System.nanoTime();
        System.out.println("Sum approach (1000 runs): " + (endTime - startTime) / 1000000 + " ms");
    }
}