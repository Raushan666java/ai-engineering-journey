package bit_manipulation.questions;

/*
 * 9. SINGLE NUMBER II (LeetCode 137)
 *
 * Problem Statement:
 * Given an integer array nums where every element appears three times except for one,
 * which appears exactly once. Find the single element that appears only once.
 *
 * Conceptual Understanding:
 * - Every number appears 3 times except one appears once
 * - Bit manipulation: count bits modulo 3
 * - For each bit position, count how many numbers have that bit set
 * - If count % 3 == 1, set that bit in result
 * - Time: O(n * 32), Space: O(1)
 * - Can also use two variables to track bits appearing 1 and 2 times
 * - More efficient than hash map approach
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

class SingleNumberII9 {

    // Method 1: Bit manipulation with counting
    public int singleNumber(int[] nums) {
        int result = 0;

        // For each bit position
        for (int i = 0; i < 32; i++) {
            int count = 0;

            // Count how many numbers have this bit set
            for (int num : nums) {
                if ((num & (1 << i)) != 0) {
                    count++;
                }
            }

            // If count is not multiple of 3, set bit in result
            if (count % 3 == 1) {
                result |= (1 << i);
            }
        }

        return result;
    }

    // Method 2: Using two variables (ones and twos)
    public int singleNumberTwoVariables(int[] nums) {
        int ones = 0, twos = 0;

        for (int num : nums) {
            // Add to ones if not in twos
            ones = (ones ^ num) & ~twos;

            // Add to twos if in ones
            twos = (twos ^ num) & ~ones;
        }

        return ones;
    }

    // Method 3: HashMap approach
    public int singleNumberHashMap(int[] nums) {
        java.util.Map<Integer, Integer> count = new java.util.HashMap<>();

        for (int num : nums) {
            count.put(num, count.getOrDefault(num, 0) + 1);
        }

        for (java.util.Map.Entry<Integer, Integer> entry : count.entrySet()) {
            if (entry.getValue() == 1) {
                return entry.getKey();
            }
        }

        throw new RuntimeException("No single number found");
    }

    // Method 4: Sorting approach
    public int singleNumberSorting(int[] nums) {
        java.util.Arrays.sort(nums);

        for (int i = 0; i < nums.length - 1; i += 3) {
            if (nums[i] != nums[i + 1]) {
                return nums[i];
            }
        }

        // Last element is single
        return nums[nums.length - 1];
    }

    // Method 5: Using mathematical approach
    public int singleNumberMath(int[] nums) {
        java.util.Set<Integer> set = new java.util.HashSet<>();
        long sum = 0, uniqueSum = 0;

        for (int num : nums) {
            if (set.add(num)) {
                uniqueSum += num;
            }
            sum += num;
        }

        // sum = 3 * (sum of unique elements) - 2 * single element
        // So: single element = (3 * uniqueSum - sum) / 2
        return (int) ((3 * uniqueSum - sum) / 2);
    }

    // Method 6: Bit manipulation with array
    public int singleNumberBitArray(int[] nums) {
        int[] bits = new int[32];

        for (int num : nums) {
            for (int i = 0; i < 32; i++) {
                bits[i] += (num >> i) & 1;
                bits[i] %= 3;
            }
        }

        int result = 0;
        for (int i = 0; i < 32; i++) {
            if (bits[i] == 1) {
                result |= (1 << i);
            }
        }

        return result;
    }

    // Method 7: Using three variables
    public int singleNumberThreeVariables(int[] nums) {
        int ones = 0, twos = 0, threes = 0;

        for (int num : nums) {
            // Update threes
            threes = twos & num;
            // Update twos
            twos = (twos | (ones & num)) & ~threes;
            // Update ones
            ones = (ones | num) & ~threes & ~twos;
        }

        return ones;
    }

    // Method 8: Stream approach
    public int singleNumberStream(int[] nums) {
        return java.util.Arrays.stream(nums)
                              .boxed()
                              .collect(java.util.stream.Collectors.groupingBy(
                                  i -> i,
                                  java.util.stream.Collectors.counting()))
                              .entrySet()
                              .stream()
                              .filter(entry -> entry.getValue() == 1)
                              .map(java.util.Map.Entry::getKey)
                              .findFirst()
                              .orElseThrow(() -> new RuntimeException("No single number"));
    }

    // Method 9: Using frequency array
    public int singleNumberFrequencyArray(int[] nums) {
        // Find min and max to determine range
        int min = Integer.MAX_VALUE;
        int max = Integer.MIN_VALUE;

        for (int num : nums) {
            min = Math.min(min, num);
            max = Math.max(max, num);
        }

        if (max - min >= 1000000) {
            // Use HashMap for large range
            return singleNumberHashMap(nums);
        }

        int[] count = new int[max - min + 1];

        for (int num : nums) {
            count[num - min]++;
        }

        for (int i = 0; i < count.length; i++) {
            if (count[i] == 1) {
                return i + min;
            }
        }

        throw new RuntimeException("No single number found");
    }

    // Method 10: Recursive approach
    public int singleNumberRecursive(int[] nums) {
        return singleNumberRecursiveHelper(nums, 0, new int[32]);
    }

    private int singleNumberRecursiveHelper(int[] nums, int index, int[] bits) {
        if (index == nums.length) {
            int result = 0;
            for (int i = 0; i < 32; i++) {
                if (bits[i] % 3 == 1) {
                    result |= (1 << i);
                }
            }
            return result;
        }

        for (int i = 0; i < 32; i++) {
            bits[i] += (nums[index] >> i) & 1;
        }

        return singleNumberRecursiveHelper(nums, index + 1, bits);
    }

    // Method 11: Using BigInteger for arbitrary precision
    public int singleNumberBigInteger(int[] nums) {
        java.math.BigInteger result = java.math.BigInteger.ZERO;

        for (int i = 0; i < 32; i++) {
            int count = 0;
            for (int num : nums) {
                if ((num & (1 << i)) != 0) {
                    count++;
                }
            }
            if (count % 3 == 1) {
                result = result.setBit(i);
            }
        }

        return result.intValue();
    }

    // Method 12: Optimized bit manipulation
    public int singleNumberOptimized(int[] nums) {
        int result = 0;

        for (int i = 0; i < 32; i++) {
            int bitSum = 0;
            int mask = 1 << i;

            for (int num : nums) {
                if ((num & mask) != 0) {
                    bitSum++;
                }
            }

            // Set bit if count % 3 == 1
            if (bitSum % 3 == 1) {
                result |= mask;
            }
        }

        return result;
    }

    // Method 13: Using XOR with modifications
    public int singleNumberXORModified(int[] nums) {
        // This approach doesn't work directly for 3 duplicates
        // Need the proper bit counting approach
        return singleNumber(nums);
    }

    // Method 14: Count sort approach
    public int singleNumberCountSort(int[] nums) {
        java.util.List<Integer> list = new java.util.ArrayList<>();
        java.util.Map<Integer, Integer> count = new java.util.HashMap<>();

        for (int num : nums) {
            count.put(num, count.getOrDefault(num, 0) + 1);
            if (count.get(num) == 1) {
                list.add(num);
            } else if (count.get(num) == 3) {
                list.remove(Integer.valueOf(num));
            }
        }

        return list.get(0);
    }

    // Method 15: Using bit manipulation with mask
    public int singleNumberMask(int[] nums) {
        int result = 0;

        for (int i = 0; i < 32; i++) {
            int mask = 1 << i;
            int count = 0;

            for (int num : nums) {
                if ((num & mask) != 0) {
                    count++;
                }
            }

            if (count % 3 != 0) {
                result |= mask;
            }
        }

        return result;
    }

    // Test cases
    public static void main(String[] args) {
        SingleNumberII9 solution = new SingleNumberII9();

        // Test Case 1: Basic test
        int[] nums1 = {2, 2, 3, 2};
        System.out.println("Array: " + java.util.Arrays.toString(nums1));
        System.out.println("Single number: " + solution.singleNumber(nums1)); // Expected: 3

        // Test Case 2: Longer array
        int[] nums2 = {0, 1, 0, 1, 0, 1, 99};
        System.out.println("\nArray: " + java.util.Arrays.toString(nums2));
        System.out.println("Single number: " + solution.singleNumber(nums2)); // Expected: 99

        // Test Case 3: Negative numbers
        int[] nums3 = {-2, -2, 1, 1, -3, 1, -3, -3, -4, -2};
        System.out.println("\nArray: " + java.util.Arrays.toString(nums3));
        System.out.println("Single number: " + solution.singleNumber(nums3)); // Expected: -4

        // Test Case 4: Compare different approaches
        int[] testNums = {1, 1, 1, 2, 2, 2, 3};
        System.out.println("\nComparing approaches for: " + java.util.Arrays.toString(testNums));

        int[] results = {
            solution.singleNumber(testNums),
            solution.singleNumberTwoVariables(testNums),
            solution.singleNumberHashMap(testNums),
            solution.singleNumberSorting(testNums),
            solution.singleNumberBitArray(testNums),
            solution.singleNumberMask(testNums)
        };

        String[] methodNames = {
            "Bit Count", "Two Variables", "HashMap", "Sorting", "Bit Array", "Mask"
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

        // Test Case 5: Edge cases
        System.out.println("\nEdge cases:");
        int[] single = {42};
        System.out.println("Single element: " + solution.singleNumber(single)); // 42

        int[] allTriples = {1, 1, 1, 2, 2, 2, 3, 3, 3, 4};
        System.out.println("All triples plus one: " + solution.singleNumber(allTriples)); // 4

        // Test Case 6: Large numbers
        int[] nums6 = {Integer.MAX_VALUE, Integer.MAX_VALUE, Integer.MAX_VALUE, 0};
        System.out.println("Large numbers: " + solution.singleNumber(nums6)); // 0

        // Test Case 7: Performance comparison
        int[] perfArray = new int[3000];
        for (int i = 0; i < 3000; i += 3) {
            int val = i / 3;
            perfArray[i] = val;
            perfArray[i + 1] = val;
            perfArray[i + 2] = val;
        }
        perfArray[2999] = 1000; // Single number

        long startTime, endTime;

        startTime = System.nanoTime();
        for (int i = 0; i < 100; i++) {
            solution.singleNumber(perfArray);
        }
        endTime = System.nanoTime();
        System.out.println("\nBit count approach (100 runs): " + (endTime - startTime) / 1000000 + " ms");

        startTime = System.nanoTime();
        for (int i = 0; i < 100; i++) {
            solution.singleNumberTwoVariables(perfArray);
        }
        endTime = System.nanoTime();
        System.out.println("Two variables approach (100 runs): " + (endTime - startTime) / 1000000 + " ms");

        // Test Case 8: All zeros except one
        int[] nums8 = {0, 0, 0, 1};
        System.out.println("\nAll zeros except one: " + solution.singleNumber(nums8)); // 1

        // Test Case 9: Negative single number
        int[] nums9 = {-1, -1, -1, -2};
        System.out.println("Negative single: " + solution.singleNumber(nums9)); // -2
    }
}