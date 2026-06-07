package bit_manipulation.questions;

/*
 * 1. SINGLE NUMBER (LeetCode 136)
 *
 * Problem Statement:
 * Given a non-empty array of integers nums, every element appears twice except for one.
 * Find that single one. You must implement a solution with a linear runtime complexity
 * and use only constant extra space.
 *
 * Conceptual Understanding:
 * - XOR operation: a ^ a = 0, a ^ 0 = a, a ^ b ^ a = b
 * - XOR is commutative and associative
 * - XORing all elements: pairs cancel out, single element remains
 * - Time: O(n), Space: O(1)
 * - Works because XOR is its own inverse
 * - No need to sort or use extra space
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

class SingleNumber1 {

    // Method 1: XOR Approach
    public int singleNumber(int[] nums) {
        int result = 0;
        for (int num : nums) {
            result ^= num;
        }
        return result;
    }

    // Method 2: Using HashMap (extra space)
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

    // Method 3: Using HashSet (extra space)
    public int singleNumberHashSet(int[] nums) {
        java.util.Set<Integer> set = new java.util.HashSet<>();

        for (int num : nums) {
            if (!set.add(num)) {
                set.remove(num);
            }
        }

        return set.iterator().next();
    }

    // Method 4: Mathematical approach (sum)
    public int singleNumberMath(int[] nums) {
        java.util.Set<Integer> set = new java.util.HashSet<>();
        long sum = 0;
        long uniqueSum = 0;

        for (int num : nums) {
            if (set.add(num)) {
                uniqueSum += num;
            }
            sum += num;
        }

        // sum = 2 * (sum of unique elements) - single element
        // So: single element = 2 * uniqueSum - sum
        return (int) (2 * uniqueSum - sum);
    }

    // Method 5: Bit manipulation with counting
    public int singleNumberBitCount(int[] nums) {
        int result = 0;

        // For each bit position
        for (int i = 0; i < 32; i++) {
            int bitSum = 0;

            // Count how many numbers have this bit set
            for (int num : nums) {
                if ((num & (1 << i)) != 0) {
                    bitSum++;
                }
            }

            // If count is odd, set this bit in result
            if (bitSum % 2 == 1) {
                result |= (1 << i);
            }
        }

        return result;
    }

    // Method 6: Find single number in array where every element appears k times
    public int singleNumberKTimes(int[] nums, int k) {
        int result = 0;

        // For each bit position
        for (int i = 0; i < 32; i++) {
            int bitCount = 0;

            // Count numbers with this bit set
            for (int num : nums) {
                if ((num & (1 << i)) != 0) {
                    bitCount++;
                }
            }

            // If count is not multiple of k, set bit in result
            if (bitCount % k != 0) {
                result |= (1 << i);
            }
        }

        return result;
    }

    // Method 7: Find two single numbers (every element appears twice except two)
    public int[] singleNumberTwo(int[] nums) {
        // Get XOR of all elements (gives XOR of two single numbers)
        int xor = 0;
        for (int num : nums) {
            xor ^= num;
        }

        // Find rightmost set bit (differing bit between two numbers)
        int rightmostSetBit = xor & -xor;

        // Divide numbers into two groups based on this bit
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

    // Method 8: Find single number in array where every element appears three times
    public int singleNumberThree(int[] nums) {
        int ones = 0, twos = 0;

        for (int num : nums) {
            // Add to ones if not in twos
            ones = (ones ^ num) & ~twos;

            // Add to twos if in ones
            twos = (twos ^ num) & ~ones;
        }

        return ones;
    }

    // Method 9: Using sorting
    public int singleNumberSorting(int[] nums) {
        java.util.Arrays.sort(nums);

        for (int i = 0; i < nums.length - 1; i += 2) {
            if (nums[i] != nums[i + 1]) {
                return nums[i];
            }
        }

        // Last element is single
        return nums[nums.length - 1];
    }

    // Method 10: Stream approach (Java 8+)
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

    // Method 11: Recursive XOR
    public int singleNumberRecursive(int[] nums) {
        return singleNumberRecursiveHelper(nums, 0, nums.length - 1);
    }

    private int singleNumberRecursiveHelper(int[] nums, int start, int end) {
        if (start == end) {
            return nums[start];
        }

        int mid = start + (end - start) / 2;

        // XOR left and right halves
        int leftXor = singleNumberRecursiveHelper(nums, start, mid);
        int rightXor = singleNumberRecursiveHelper(nums, mid + 1, end);

        return leftXor ^ rightXor;
    }

    // Method 12: Count occurrences with array
    public int singleNumberCountArray(int[] nums) {
        // Find min and max to determine range
        int min = Integer.MAX_VALUE;
        int max = Integer.MIN_VALUE;

        for (int num : nums) {
            min = Math.min(min, num);
            max = Math.max(max, num);
        }

        // Use count array
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

    // Test cases
    public static void main(String[] args) {
        SingleNumber1 solution = new SingleNumber1();
        int[] nums = {2, 2, 1};

        // Test Case 1: Basic XOR approach
        System.out.println("XOR approach: " + solution.singleNumber(nums)); // Expected: 1

        // Test Case 2: HashMap approach
        System.out.println("HashMap approach: " + solution.singleNumberHashMap(nums)); // Expected: 1

        // Test Case 3: HashSet approach
        System.out.println("HashSet approach: " + solution.singleNumberHashSet(nums)); // Expected: 1

        // Test Case 4: Mathematical approach
        System.out.println("Math approach: " + solution.singleNumberMath(nums)); // Expected: 1

        // Test Case 5: Bit counting approach
        System.out.println("Bit count approach: " + solution.singleNumberBitCount(nums)); // Expected: 1

        // Test Case 6: Two single numbers
        int[] numsTwo = {1, 2, 1, 3, 2, 5};
        int[] resultTwo = solution.singleNumberTwo(numsTwo);
        System.out.println("Two singles: " + resultTwo[0] + ", " + resultTwo[1]); // Expected: 3, 5

        // Test Case 7: Every element appears three times except one
        int[] numsThree = {0, 1, 0, 1, 0, 1, 99};
        System.out.println("Three times: " + solution.singleNumberThree(numsThree)); // Expected: 99

        // Test Case 8: Sorting approach
        System.out.println("Sorting approach: " + solution.singleNumberSorting(nums)); // Expected: 1

        // Test Case 9: Edge cases
        int[] single = {42};
        System.out.println("Single element: " + solution.singleNumber(single)); // Expected: 42

        int[] empty = {};
        try {
            solution.singleNumber(empty);
        } catch (Exception e) {
            System.out.println("Empty array: " + e.getMessage());
        }

        int[] allPairs = {1, 1, 2, 2, 3, 3, 4, 4, 5};
        System.out.println("All pairs: " + solution.singleNumber(allPairs)); // Expected: 5

        // Test Case 10: Negative numbers
        int[] negatives = {-1, -1, -2};
        System.out.println("Negatives: " + solution.singleNumber(negatives)); // Expected: -2
    }
}