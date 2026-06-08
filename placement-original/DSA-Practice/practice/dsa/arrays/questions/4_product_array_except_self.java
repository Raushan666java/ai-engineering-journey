package arrays.questions;

/*
 * 4. PRODUCT OF ARRAY EXCEPT SELF (LeetCode 238)
 *
 * Problem Statement:
 * Given an integer array nums, return an array answer such that answer[i] is equal to
 * the product of all the elements of nums except nums[i]. The product of any prefix or
 * suffix of nums is guaranteed to fit in a 32-bit integer. You must write an algorithm
 * that runs in O(n) time and without using the division operation.
 *
 * Conceptual Understanding:
 * - For each position i, compute product of all elements except nums[i]
 * - Cannot use division operator
 * - Time: O(n), Space: O(1) auxiliary (excluding output)
 * - Use prefix and suffix products
 * - Handle zeros carefully (if multiple zeros, all products are zero)
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1) auxiliary (O(n) for output)
 */

class ProductOfArrayExceptSelf4 {

    // Method 1: Prefix and suffix products (most efficient)
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int[] result = new int[n];

        // Calculate prefix products
        result[0] = 1;
        for (int i = 1; i < n; i++) {
            result[i] = result[i - 1] * nums[i - 1];
        }

        // Calculate suffix products and multiply with prefix
        int suffixProduct = 1;
        for (int i = n - 1; i >= 0; i--) {
            result[i] *= suffixProduct;
            suffixProduct *= nums[i];
        }

        return result;
    }

    // Method 2: Brute force (O(n²))
    public int[] productExceptSelfBruteForce(int[] nums) {
        int n = nums.length;
        int[] result = new int[n];

        for (int i = 0; i < n; i++) {
            int product = 1;
            for (int j = 0; j < n; j++) {
                if (i != j) {
                    product *= nums[j];
                }
            }
            result[i] = product;
        }

        return result;
    }

    // Method 3: Using division (not allowed in problem, but educational)
    public int[] productExceptSelfDivision(int[] nums) {
        int n = nums.length;
        int totalProduct = 1;
        int zeroCount = 0;
        int zeroIndex = -1;

        // Calculate total product and count zeros
        for (int i = 0; i < n; i++) {
            if (nums[i] == 0) {
                zeroCount++;
                zeroIndex = i;
            } else {
                totalProduct *= nums[i];
            }
        }

        int[] result = new int[n];

        if (zeroCount > 1) {
            // Multiple zeros - all products are zero
            return result;
        } else if (zeroCount == 1) {
            // One zero - only that position gets the product of others
            result[zeroIndex] = totalProduct;
            return result;
        } else {
            // No zeros - divide total product by each element
            for (int i = 0; i < n; i++) {
                result[i] = totalProduct / nums[i];
            }
            return result;
        }
    }

    // Method 4: Two separate arrays for prefix and suffix
    public int[] productExceptSelfTwoArrays(int[] nums) {
        int n = nums.length;
        int[] prefix = new int[n];
        int[] suffix = new int[n];
        int[] result = new int[n];

        // Calculate prefix products
        prefix[0] = 1;
        for (int i = 1; i < n; i++) {
            prefix[i] = prefix[i - 1] * nums[i - 1];
        }

        // Calculate suffix products
        suffix[n - 1] = 1;
        for (int i = n - 2; i >= 0; i--) {
            suffix[i] = suffix[i + 1] * nums[i + 1];
        }

        // Multiply prefix and suffix
        for (int i = 0; i < n; i++) {
            result[i] = prefix[i] * suffix[i];
        }

        return result;
    }

    // Method 5: Using logs (handle zeros separately)
    public int[] productExceptSelfLogs(int[] nums) {
        int n = nums.length;
        int[] result = new int[n];
        int zeroCount = 0;
        int zeroIndex = -1;

        // Count zeros and find zero position
        for (int i = 0; i < n; i++) {
            if (nums[i] == 0) {
                zeroCount++;
                zeroIndex = i;
            }
        }

        if (zeroCount > 1) {
            return result; // All zeros
        }

        if (zeroCount == 1) {
            // Calculate product of all non-zero elements
            int product = 1;
            for (int i = 0; i < n; i++) {
                if (i != zeroIndex) {
                    product *= nums[i];
                }
            }
            result[zeroIndex] = product;
            return result;
        }

        // No zeros - use logs
        double[] logs = new double[n];
        double sumLog = 0;

        for (int i = 0; i < n; i++) {
            logs[i] = Math.log(Math.abs(nums[i]));
            sumLog += logs[i];
        }

        for (int i = 0; i < n; i++) {
            double productLog = sumLog - logs[i];
            result[i] = (int) Math.round(Math.exp(productLog) * Math.signum(nums[i]));
        }

        return result;
    }

    // Method 6: Recursive approach (not efficient, educational)
    public int[] productExceptSelfRecursive(int[] nums) {
        int n = nums.length;
        int[] result = new int[n];
        productExceptSelfHelper(nums, result, 1, 0, n);
        return result;
    }

    private void productExceptSelfHelper(int[] nums, int[] result, int product, int index, int n) {
        if (index == n) {
            return;
        }

        result[index] = product;
        productExceptSelfHelper(nums, result, product * nums[index], index + 1, n);
    }

    // Method 7: Handle large numbers (with modulo)
    public int[] productExceptSelfModulo(int[] nums, int mod) {
        int n = nums.length;
        int[] result = new int[n];

        // Calculate prefix products with modulo
        result[0] = 1;
        for (int i = 1; i < n; i++) {
            result[i] = (int) ((long) result[i - 1] * nums[i - 1] % mod);
        }

        // Calculate suffix products and multiply with prefix
        int suffixProduct = 1;
        for (int i = n - 1; i >= 0; i--) {
            result[i] = (int) ((long) result[i] * suffixProduct % mod);
            suffixProduct = (int) ((long) suffixProduct * nums[i] % mod);
        }

        return result;
    }

    // Method 8: For sparse arrays (many zeros)
    public int[] productExceptSelfSparse(int[] nums) {
        int n = nums.length;
        int[] result = new int[n];

        // Count zeros and find their positions
        int zeroCount = 0;
        int zeroIndex = -1;

        for (int i = 0; i < n; i++) {
            if (nums[i] == 0) {
                zeroCount++;
                zeroIndex = i;
            }
        }

        if (zeroCount > 1) {
            return result; // All results are zero
        }

        if (zeroCount == 1) {
            // Calculate product of all non-zero elements
            long product = 1;
            for (int i = 0; i < n; i++) {
                if (i != zeroIndex) {
                    product *= nums[i];
                }
            }
            result[zeroIndex] = (int) product;
            return result;
        }

        // No zeros - use standard approach
        return productExceptSelf(nums);
    }

    // Method 9: Using streams (educational)
    public int[] productExceptSelfStreams(int[] nums) {
        int n = nums.length;
        int[] result = new int[n];

        // Calculate total product
        long totalProduct = java.util.Arrays.stream(nums).asLongStream().reduce(1, (a, b) -> a * b);

        // Handle zeros
        long zeroCount = java.util.Arrays.stream(nums).filter(x -> x == 0).count();

        if (zeroCount > 1) {
            return result;
        }

        if (zeroCount == 1) {
            int zeroIndex = -1;
            for (int i = 0; i < n; i++) {
                if (nums[i] == 0) {
                    zeroIndex = i;
                    break;
                }
            }
            long productWithoutZero = java.util.Arrays.stream(nums)
                    .filter(x -> x != 0)
                    .asLongStream()
                    .reduce(1, (a, b) -> a * b);
            result[zeroIndex] = (int) productWithoutZero;
            return result;
        }

        // No zeros
        for (int i = 0; i < n; i++) {
            result[i] = (int) (totalProduct / nums[i]);
        }

        return result;
    }

    // Method 10: Follow-up - can you solve it with O(1) space? (excluding output)
    public int[] productExceptSelfO1Space(int[] nums) {
        // This is the same as Method 1 - already O(1) auxiliary space
        return productExceptSelf(nums);
    }

    // Method 11: Handle overflow (return long array)
    public long[] productExceptSelfLong(int[] nums) {
        int n = nums.length;
        long[] result = new long[n];

        // Calculate prefix products
        result[0] = 1;
        for (int i = 1; i < n; i++) {
            result[i] = result[i - 1] * nums[i - 1];
        }

        // Calculate suffix products and multiply with prefix
        long suffixProduct = 1;
        for (int i = n - 1; i >= 0; i--) {
            result[i] *= suffixProduct;
            suffixProduct *= nums[i];
        }

        return result;
    }

    // Method 12: Maximum product except self
    public int[] maxProductExceptSelf(int[] nums) {
        int n = nums.length;
        int[] result = new int[n];

        // Find max and second max
        int max1 = Integer.MIN_VALUE;
        int max2 = Integer.MIN_VALUE;
        int min1 = Integer.MAX_VALUE;
        int min2 = Integer.MAX_VALUE;

        for (int num : nums) {
            if (num > max1) {
                max2 = max1;
                max1 = num;
            } else if (num > max2) {
                max2 = num;
            }

            if (num < min1) {
                min2 = min1;
                min1 = num;
            } else if (num < min2) {
                min2 = num;
            }
        }

        for (int i = 0; i < n; i++) {
            if (nums[i] == max1) {
                result[i] = max2;
            } else {
                result[i] = max1;
            }

            // Handle negative numbers (two negatives make positive)
            if (nums[i] < 0 && min1 < 0) {
                // Consider the product of two smallest negatives
                int negativeProduct = min1 * min2;
                if (negativeProduct > result[i]) {
                    result[i] = negativeProduct;
                }
            }
        }

        return result;
    }

    // Test cases
    public static void main(String[] args) {
        ProductOfArrayExceptSelf4 solution = new ProductOfArrayExceptSelf4();

        // Test Case 1: Basic case
        int[] nums1 = {1, 2, 3, 4};
        int[] result1 = solution.productExceptSelf(nums1);
        System.out.print("Result: ");
        for (int num : result1) {
            System.out.print(num + " ");
        }
        System.out.println(); // Expected: [24, 12, 8, 6]

        // Test Case 2: With zero
        int[] nums2 = {1, 2, 3, 0};
        int[] result2 = solution.productExceptSelf(nums2);
        System.out.print("With zero: ");
        for (int num : result2) {
            System.out.print(num + " ");
        }
        System.out.println(); // Expected: [0, 0, 0, 6]

        // Test Case 3: Multiple zeros
        int[] nums3 = {1, 0, 3, 0};
        int[] result3 = solution.productExceptSelf(nums3);
        System.out.print("Multiple zeros: ");
        for (int num : result3) {
            System.out.print(num + " ");
        }
        System.out.println(); // Expected: [0, 0, 0, 0]

        // Test Case 4: Negative numbers
        int[] nums4 = {-1, 1, 0, -3, 3};
        int[] result4 = solution.productExceptSelf(nums4);
        System.out.print("Negative numbers: ");
        for (int num : result4) {
            System.out.print(num + " ");
        }
        System.out.println(); // Expected: [0, 0, -9, 0, 0]

        // Test Case 5: Performance comparison
        int[] largeArray = new int[1000];
        for (int i = 0; i < largeArray.length; i++) {
            largeArray[i] = i + 1;
        }

        long startTime, endTime;

        // Optimal approach
        startTime = System.nanoTime();
        solution.productExceptSelf(largeArray.clone());
        endTime = System.nanoTime();
        System.out.println("\nOptimal approach: " + (endTime - startTime) / 1000000 + " ms");

        // Brute force approach (smaller array)
        int[] smallArray = {1, 2, 3, 4, 5};
        startTime = System.nanoTime();
        solution.productExceptSelfBruteForce(smallArray);
        endTime = System.nanoTime();
        System.out.println("Brute force: " + (endTime - startTime) / 1000000 + " ms");

        // Test Case 6: Edge cases
        System.out.println("\nEdge cases:");

        // Single element
        int[] single = {5};
        int[] singleResult = solution.productExceptSelf(single);
        System.out.println("Single element: " + singleResult[0]); // Expected: 1

        // Two elements
        int[] two = {2, 3};
        int[] twoResult = solution.productExceptSelf(two);
        System.out.println("Two elements: [" + twoResult[0] + ", " + twoResult[1] + "]"); // Expected: [3, 2]

        // All ones
        int[] ones = {1, 1, 1, 1};
        int[] onesResult = solution.productExceptSelf(ones);
        System.out.print("All ones: ");
        for (int num : onesResult) {
            System.out.print(num + " ");
        }
        System.out.println(); // Expected: [1, 1, 1, 1]

        // Test Case 7: Large numbers (overflow handling)
        long[] longResult = solution.productExceptSelfLong(new int[]{1, 2, 3, 4});
        System.out.print("Long result: ");
        for (long num : longResult) {
            System.out.print(num + " ");
        }
        System.out.println();

        // Test Case 8: Modulo operation
        int[] modResult = solution.productExceptSelfModulo(new int[]{1, 2, 3, 4}, 1000000007);
        System.out.print("Modulo result: ");
        for (int num : modResult) {
            System.out.print(num + " ");
        }
        System.out.println();

        // Test Case 9: Sparse array (many zeros)
        int[] sparse = {0, 1, 0, 2, 0, 3, 0};
        int[] sparseResult = solution.productExceptSelfSparse(sparse);
        System.out.print("Sparse array: ");
        for (int num : sparseResult) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}