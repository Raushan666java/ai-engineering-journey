package bit_manipulation.questions;

/*
 * 10. SINGLE NUMBER III (LeetCode 260)
 *
 * Problem Statement:
 * Given an integer array nums, in which exactly two elements appear only once
 * and all the other elements appear exactly twice. Find the two elements that
 * appear only once.
 *
 * Conceptual Understanding:
 * - Two numbers appear once, others appear twice
 * - XOR all elements: result is XOR of two single numbers
 * - Find rightmost set bit in XOR result (differing bit)
 * - Divide numbers into two groups based on this bit
 * - XOR within each group gives the two single numbers
 * - Time: O(n), Space: O(1)
 * - Bit manipulation gives elegant solution
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

class SingleNumberIII10 {

    // Method 1: XOR approach (most efficient)
    public int[] singleNumber(int[] nums) {
        // Get XOR of all elements (XOR of two single numbers)
        int xor = 0;
        for (int num : nums) {
            xor ^= num;
        }

        // Find rightmost set bit (differing bit between two numbers)
        int rightmostSetBit = xor & -xor;

        // Divide numbers into two groups and XOR within each group
        int x = 0, y = 0;
        for (int num : nums) {
            if ((num & rightmostSetBit) != 0) {
                x ^= num;
            } else {
                y ^= num;
            }
        }

        return new int[]{x, y};
    }

    // Method 2: HashMap approach
    public int[] singleNumberHashMap(int[] nums) {
        java.util.Map<Integer, Integer> count = new java.util.HashMap<>();

        for (int num : nums) {
            count.put(num, count.getOrDefault(num, 0) + 1);
        }

        java.util.List<Integer> result = new java.util.ArrayList<>();
        for (java.util.Map.Entry<Integer, Integer> entry : count.entrySet()) {
            if (entry.getValue() == 1) {
                result.add(entry.getKey());
            }
        }

        return result.stream().mapToInt(Integer::intValue).toArray();
    }

    // Method 3: Sorting approach
    public int[] singleNumberSorting(int[] nums) {
        java.util.Arrays.sort(nums);

        java.util.List<Integer> result = new java.util.ArrayList<>();
        for (int i = 0; i < nums.length; i++) {
            if (i == 0 && nums[i] != nums[i + 1]) {
                result.add(nums[i]);
            } else if (i == nums.length - 1 && nums[i] != nums[i - 1]) {
                result.add(nums[i]);
            } else if (i > 0 && i < nums.length - 1 &&
                      nums[i] != nums[i - 1] && nums[i] != nums[i + 1]) {
                result.add(nums[i]);
            }
        }

        return result.stream().mapToInt(Integer::intValue).toArray();
    }

    // Method 4: Using HashSet
    public int[] singleNumberHashSet(int[] nums) {
        java.util.Set<Integer> set = new java.util.HashSet<>();
        java.util.Set<Integer> singles = new java.util.HashSet<>();

        for (int num : nums) {
            if (!set.add(num)) {
                // Already exists, remove from singles if present
                singles.remove(num);
            } else {
                singles.add(num);
            }
        }

        return singles.stream().mapToInt(Integer::intValue).toArray();
    }

    // Method 5: Bit manipulation with counting
    public int[] singleNumberBitCount(int[] nums) {
        int[] result = new int[2];
        int index = 0;

        for (int i = 0; i < 32; i++) {
            int count = 0;
            int mask = 1 << i;

            for (int num : nums) {
                if ((num & mask) != 0) {
                    count++;
                }
            }

            // If count is odd, this bit is set in one of the single numbers
            if (count % 2 == 1) {
                result[index] |= mask;
                index = (index + 1) % 2;
            }
        }

        return result;
    }

    // Method 6: Mathematical approach (not recommended for this problem)
    public int[] singleNumberMath(int[] nums) {
        // This approach is complex and not efficient for finding two numbers
        // Better to use XOR approach
        return singleNumber(nums);
    }

    // Method 7: Using streams
    public int[] singleNumberStream(int[] nums) {
        return java.util.Arrays.stream(nums)
                              .boxed()
                              .collect(java.util.stream.Collectors.groupingBy(
                                  i -> i,
                                  java.util.stream.Collectors.counting()))
                              .entrySet()
                              .stream()
                              .filter(entry -> entry.getValue() == 1)
                              .map(java.util.Map.Entry::getKey)
                              .mapToInt(Integer::intValue)
                              .toArray();
    }

    // Method 8: XOR with different approach
    public int[] singleNumberXORAlt(int[] nums) {
        int xor = 0;
        for (int num : nums) {
            xor ^= num;
        }

        // Find any set bit
        int setBit = xor & ~(xor - 1);

        int x = 0, y = 0;
        for (int num : nums) {
            if ((num & setBit) != 0) {
                x ^= num;
            } else {
                y ^= num;
            }
        }

        return new int[]{x, y};
    }

    // Method 9: Using frequency array
    public int[] singleNumberFrequencyArray(int[] nums) {
        // Find min and max
        int min = Integer.MAX_VALUE;
        int max = Integer.MIN_VALUE;

        for (int num : nums) {
            min = Math.min(min, num);
            max = Math.max(max, num);
        }

        int[] count = new int[max - min + 1];
        java.util.List<Integer> result = new java.util.ArrayList<>();

        for (int num : nums) {
            count[num - min]++;
        }

        for (int i = 0; i < count.length; i++) {
            if (count[i] == 1) {
                result.add(i + min);
            }
        }

        return result.stream().mapToInt(Integer::intValue).toArray();
    }

    // Method 10: Recursive approach
    public int[] singleNumberRecursive(int[] nums) {
        return singleNumberRecursiveHelper(nums, 0, 0, 0);
    }

    private int[] singleNumberRecursiveHelper(int[] nums, int index, int xor, int rightmostSetBit) {
        if (index == nums.length) {
            int x = 0, y = 0;
            for (int num : nums) {
                if ((num & rightmostSetBit) != 0) {
                    x ^= num;
                } else {
                    y ^= num;
                }
            }
            return new int[]{x, y};
        }

        int newXor = xor ^ nums[index];
        int newRightmostSetBit = (index == nums.length - 1) ? (newXor & -newXor) : rightmostSetBit;

        return singleNumberRecursiveHelper(nums, index + 1, newXor, newRightmostSetBit);
    }

    // Method 11: Using two passes
    public int[] singleNumberTwoPasses(int[] nums) {
        // First pass: find XOR of two singles
        int xor = 0;
        for (int num : nums) {
            xor ^= num;
        }

        // Second pass: divide and conquer
        int rightmostSetBit = xor & -xor;
        int[] result = new int[2];

        for (int num : nums) {
            if ((num & rightmostSetBit) != 0) {
                result[0] ^= num;
            } else {
                result[1] ^= num;
            }
        }

        return result;
    }

    // Method 12: Bit manipulation with mask
    public int[] singleNumberMask(int[] nums) {
        int xor = 0;
        for (int num : nums) {
            xor ^= num;
        }

        // Find the mask
        int mask = xor & -xor;

        int a = 0, b = 0;
        for (int num : nums) {
            if ((num & mask) != 0) {
                a ^= num;
            } else {
                b ^= num;
            }
        }

        return new int[]{a, b};
    }

    // Method 13: Using ArrayList
    public int[] singleNumberArrayList(int[] nums) {
        java.util.List<Integer> list = new java.util.ArrayList<>();
        java.util.Map<Integer, Integer> count = new java.util.HashMap<>();

        for (int num : nums) {
            count.put(num, count.getOrDefault(num, 0) + 1);
        }

        for (int num : nums) {
            if (count.get(num) == 1 && !list.contains(num)) {
                list.add(num);
            }
        }

        return list.stream().mapToInt(Integer::intValue).toArray();
    }

    // Method 14: Optimized XOR
    public int[] singleNumberOptimized(int[] nums) {
        int xor = 0;
        for (int num : nums) {
            xor ^= num;
        }

        // Get rightmost set bit
        int diffBit = xor & ~(xor - 1);

        int x = 0, y = 0;
        for (int num : nums) {
            if ((num & diffBit) != 0) {
                x ^= num;
            } else {
                y ^= num;
            }
        }

        return new int[]{x, y};
    }

    // Method 15: Using bit set
    public int[] singleNumberBitSet(int[] nums) {
        java.util.BitSet bitSet = new java.util.BitSet();

        for (int num : nums) {
            if (bitSet.get(Math.abs(num))) {
                bitSet.clear(Math.abs(num));
            } else {
                bitSet.set(Math.abs(num));
            }
        }

        java.util.List<Integer> result = new java.util.ArrayList<>();
        for (int i = bitSet.nextSetBit(0); i >= 0; i = bitSet.nextSetBit(i + 1)) {
            result.add(i);
            if (result.size() == 2) break;
        }

        return result.stream().mapToInt(Integer::intValue).toArray();
    }

    // Helper method to print array
    private static void printArray(int[] arr) {
        System.out.print("[");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i]);
            if (i < arr.length - 1) System.out.print(", ");
        }
        System.out.println("]");
    }

    // Test cases
    public static void main(String[] args) {
        SingleNumberIII10 solution = new SingleNumberIII10();

        // Test Case 1: Basic test
        int[] nums1 = {1, 2, 1, 3, 2, 5};
        System.out.println("Array: " + java.util.Arrays.toString(nums1));
        System.out.print("Single numbers: ");
        printArray(solution.singleNumber(nums1)); // Expected: [3, 5] or [5, 3]

        // Test Case 2: Negative numbers
        int[] nums2 = {-1, 0, 1, 0, 1, 2};
        System.out.println("\nArray: " + java.util.Arrays.toString(nums2));
        System.out.print("Single numbers: ");
        printArray(solution.singleNumber(nums2)); // Expected: [-1, 2] or [2, -1]

        // Test Case 3: Large numbers
        int[] nums3 = {Integer.MAX_VALUE, 0, Integer.MAX_VALUE, 1, 0, 2};
        System.out.println("\nArray: " + java.util.Arrays.toString(nums3));
        System.out.print("Single numbers: ");
        printArray(solution.singleNumber(nums3)); // Expected: [1, 2] or [2, 1]

        // Test Case 4: Compare different approaches
        int[] testNums = {4, 1, 2, 1, 2, 3};
        System.out.println("\nComparing approaches for: " + java.util.Arrays.toString(testNums));

        int[][] results = {
            solution.singleNumber(testNums),
            solution.singleNumberHashMap(testNums),
            solution.singleNumberSorting(testNums),
            solution.singleNumberHashSet(testNums),
            solution.singleNumberXORAlt(testNums),
            solution.singleNumberTwoPasses(testNums)
        };

        String[] methodNames = {
            "XOR", "HashMap", "Sorting", "HashSet", "XOR Alt", "Two Passes"
        };

        for (int i = 0; i < results.length; i++) {
            System.out.print(methodNames[i] + ": ");
            printArray(results[i]);
        }

        // Test Case 5: Edge cases
        System.out.println("\nEdge cases:");
        int[] nums5 = {1, 2};
        System.out.print("Two elements: ");
        printArray(solution.singleNumber(nums5)); // [1, 2] or [2, 1]

        int[] nums6 = {0, 1, 0, 2, 1, 3};
        System.out.print("With zero: ");
        printArray(solution.singleNumber(nums6)); // [2, 3] or [3, 2]

        // Test Case 6: Same number appearing twice as singles (invalid input)
        // This would be invalid input as per problem statement

        // Test Case 7: Performance comparison
        int[] perfArray = new int[2000];
        for (int i = 0; i < 2000; i += 2) {
            int val = i / 2;
            perfArray[i] = val;
            perfArray[i + 1] = val;
        }
        // Add two single numbers
        perfArray[1998] = 1000;
        perfArray[1999] = 1001;

        long startTime, endTime;

        startTime = System.nanoTime();
        for (int i = 0; i < 1000; i++) {
            solution.singleNumber(perfArray);
        }
        endTime = System.nanoTime();
        System.out.println("\nXOR approach (1000 runs): " + (endTime - startTime) / 1000000 + " ms");

        startTime = System.nanoTime();
        for (int i = 0; i < 1000; i++) {
            solution.singleNumberHashMap(perfArray);
        }
        endTime = System.nanoTime();
        System.out.println("HashMap approach (1000 runs): " + (endTime - startTime) / 1000000 + " ms");

        // Test Case 8: All pairs except two singles
        int[] nums8 = {1, 1, 2, 2, 3, 4};
        System.out.print("\nAll pairs except two: ");
        printArray(solution.singleNumber(nums8)); // [3, 4] or [4, 3]

        // Test Case 9: Negative and positive
        int[] nums9 = {-5, -3, -5, -3, -1, 1};
        System.out.print("Negative and positive: ");
        printArray(solution.singleNumber(nums9)); // [-1, 1] or [1, -1]
    }
}