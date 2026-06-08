
/**
 * ARRAYS PRACTICE SOLUTIONS
 * Complete collection of array problems with solutions
 * Difficulty: Easy → Medium → Hard
 */
public class ARRAYS_PRACTICE_SOLUTIONS {

    // ==========================================
    // EASY LEVEL PROBLEMS
    // ==========================================

    /**
     * Problem 1: Two Sum
     * Find two numbers that add up to target
     * Time: O(n), Space: O(n)
     */
    public static int[] twoSum(int[] nums, int target) {
        java.util.Map<Integer, Integer> map = new java.util.HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[]{map.get(complement), i};
            }
            map.put(nums[i], i);
        }
        return new int[]{-1, -1};
    }

    /**
     * Problem 2: Reverse Array In-Place
     * Time: O(n), Space: O(1)
     */
    public static void reverseArray(int[] arr) {
        int left = 0, right = arr.length - 1;
        while (left < right) {
            int temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }

    /**
     * Problem 3: Find Maximum Element
     * Time: O(n), Space: O(1)
     */
    public static int findMax(int[] arr) {
        if (arr.length == 0) return Integer.MIN_VALUE;
        int max = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) max = arr[i];
        }
        return max;
    }

    /**
     * Problem 4: Find Second Largest Element
     * Time: O(n), Space: O(1)
     */
    public static int findSecondMax(int[] arr) {
        if (arr.length < 2) return Integer.MIN_VALUE;

        int max = Integer.MIN_VALUE;
        int secondMax = Integer.MIN_VALUE;

        for (int num : arr) {
            if (num > max) {
                secondMax = max;
                max = num;
            } else if (num > secondMax && num != max) {
                secondMax = num;
            }
        }
        return secondMax;
    }

    /**
     * Problem 5: Move Zeros to End
     * Time: O(n), Space: O(1)
     */
    public static void moveZeros(int[] arr) {
        int nonZeroIndex = 0;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] != 0) {
                arr[nonZeroIndex++] = arr[i];
            }
        }
        while (nonZeroIndex < arr.length) {
            arr[nonZeroIndex++] = 0;
        }
    }

    /**
     * Problem 6: Remove Duplicates from Sorted Array
     * Time: O(n), Space: O(1)
     */
    public static int removeDuplicates(int[] arr) {
        if (arr.length == 0) return 0;
        int uniqueIndex = 0;
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] != arr[uniqueIndex]) {
                uniqueIndex++;
                arr[uniqueIndex] = arr[i];
            }
        }
        return uniqueIndex + 1;
    }

    // ==========================================
    // MEDIUM LEVEL PROBLEMS
    // ==========================================

    /**
     * Problem 7: Three Sum
     * Find all unique triplets that sum to zero
     * Time: O(n²), Space: O(1) excluding result
     */
    public static java.util.List<java.util.List<Integer>> threeSum(int[] nums) {
        java.util.Arrays.sort(nums);
        java.util.List<java.util.List<Integer>> result = new java.util.ArrayList<>();

        for (int i = 0; i < nums.length - 2; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) continue;

            int left = i + 1, right = nums.length - 1;
            while (left < right) {
                int sum = nums[i] + nums[left] + nums[right];
                if (sum == 0) {
                    result.add(java.util.Arrays.asList(nums[i], nums[left], nums[right]));
                    while (left < right && nums[left] == nums[left + 1]) left++;
                    while (left < right && nums[right] == nums[right - 1]) right--;
                    left++;
                    right--;
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }
        return result;
    }

    /**
     * Problem 8: Container With Most Water
     * Time: O(n), Space: O(1)
     */
    public static int maxArea(int[] height) {
        int maxArea = 0;
        int left = 0, right = height.length - 1;

        while (left < right) {
            int area = Math.min(height[left], height[right]) * (right - left);
            maxArea = Math.max(maxArea, area);

            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
        return maxArea;
    }

    /**
     * Problem 9: Product of Array Except Self
     * Time: O(n), Space: O(1) excluding output
     */
    public static int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int[] result = new int[n];

        // Calculate left products
        result[0] = 1;
        for (int i = 1; i < n; i++) {
            result[i] = result[i - 1] * nums[i - 1];
        }

        // Calculate right products and multiply
        int rightProduct = 1;
        for (int i = n - 1; i >= 0; i--) {
            result[i] *= rightProduct;
            rightProduct *= nums[i];
        }

        return result;
    }

    /**
     * Problem 10: Next Permutation
     * Time: O(n), Space: O(1)
     */
    public static void nextPermutation(int[] nums) {
        int n = nums.length;
        int i = n - 2;

        // Find first decreasing element from right
        while (i >= 0 && nums[i] >= nums[i + 1]) {
            i--;
        }

        if (i >= 0) {
            // Find smallest element larger than nums[i] from right
            int j = n - 1;
            while (j >= 0 && nums[j] <= nums[i]) {
                j--;
            }
            swap(nums, i, j);
        }

        // Reverse the suffix
        reverse(nums, i + 1, n - 1);
    }

    private static void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    private static void reverse(int[] nums, int start, int end) {
        while (start < end) {
            swap(nums, start, end);
            start++;
            end--;
        }
    }

    // ==========================================
    // HARD LEVEL PROBLEMS
    // ==========================================

    /**
     * Problem 11: Trapping Rain Water
     * Time: O(n), Space: O(1)
     */
    public static int trap(int[] height) {
        int n = height.length;
        if (n == 0) return 0;

        int left = 0, right = n - 1;
        int leftMax = 0, rightMax = 0;
        int trappedWater = 0;

        while (left < right) {
            if (height[left] < height[right]) {
                if (height[left] >= leftMax) {
                    leftMax = height[left];
                } else {
                    trappedWater += leftMax - height[left];
                }
                left++;
            } else {
                if (height[right] >= rightMax) {
                    rightMax = height[right];
                } else {
                    trappedWater += rightMax - height[right];
                }
                right--;
            }
        }
        return trappedWater;
    }

    /**
     * Problem 12: Median of Two Sorted Arrays
     * Time: O(log(min(m,n))), Space: O(1)
     */
    public static double findMedianSortedArrays(int[] nums1, int[] nums2) {
        if (nums1.length > nums2.length) {
            return findMedianSortedArrays(nums2, nums1);
        }

        int m = nums1.length, n = nums2.length;
        int total = m + n;
        int half = (total + 1) / 2;

        int left = 0, right = m;
        while (left <= right) {
            int i = left + (right - left) / 2;
            int j = half - i;

            int nums1Left = (i > 0) ? nums1[i - 1] : Integer.MIN_VALUE;
            int nums1Right = (i < m) ? nums1[i] : Integer.MAX_VALUE;
            int nums2Left = (j > 0) ? nums2[j - 1] : Integer.MIN_VALUE;
            int nums2Right = (j < n) ? nums2[j] : Integer.MAX_VALUE;

            if (nums1Left <= nums2Right && nums2Left <= nums1Right) {
                if (total % 2 == 1) {
                    return Math.max(nums1Left, nums2Left);
                } else {
                    return (Math.max(nums1Left, nums2Left) + Math.min(nums1Right, nums2Right)) / 2.0;
                }
            } else if (nums1Left > nums2Right) {
                right = i - 1;
            } else {
                left = i + 1;
            }
        }
        return 0.0;
    }

    /**
     * Problem 13: First Missing Positive
     * Time: O(n), Space: O(1)
     */
    public static int firstMissingPositive(int[] nums) {
        int n = nums.length;

        // Place each number in its correct position
        for (int i = 0; i < n; i++) {
            while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] != nums[i]) {
                swap(nums, i, nums[i] - 1);
            }
        }

        // Find first missing positive
        for (int i = 0; i < n; i++) {
            if (nums[i] != i + 1) {
                return i + 1;
            }
        }

        return n + 1;
    }

    /**
     * Problem 14: Sliding Window Maximum
     * Time: O(n), Space: O(k)
     */
    public static int[] maxSlidingWindow(int[] nums, int k) {
        if (nums == null || nums.length == 0) return new int[0];

        int n = nums.length;
        int[] result = new int[n - k + 1];
        java.util.Deque<Integer> deque = new java.util.LinkedList<>();

        for (int i = 0; i < n; i++) {
            // Remove elements outside current window
            while (!deque.isEmpty() && deque.peekFirst() < i - k + 1) {
                deque.pollFirst();
            }

            // Remove smaller elements from back
            while (!deque.isEmpty() && nums[deque.peekLast()] <= nums[i]) {
                deque.pollLast();
            }

            deque.offerLast(i);

            // Add to result when window is complete
            if (i >= k - 1) {
                result[i - k + 1] = nums[deque.peekFirst()];
            }
        }

        return result;
    }

    // ==========================================
    // UTILITY METHODS
    // ==========================================

    public static void printArray(int[] arr) {
        System.out.print("[");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i]);
            if (i < arr.length - 1) System.out.print(", ");
        }
        System.out.println("]");
    }

    public static void printArray(int[] arr, String label) {
        System.out.print(label + ": ");
        printArray(arr);
    }

    // ==========================================
    // TEST METHODS
    // ==========================================

    public static void main(String[] args) {
        System.out.println("=== ARRAYS PRACTICE SOLUTIONS ===\n");

        // Test Two Sum
        System.out.println("1. Two Sum");
        int[] nums1 = {2, 7, 11, 15};
        int[] result1 = twoSum(nums1, 9);
        System.out.println("Input: [2,7,11,15], target=9");
        System.out.println("Output: [" + result1[0] + ", " + result1[1] + "]\n");

        // Test Reverse Array
        System.out.println("2. Reverse Array");
        int[] arr2 = {1, 2, 3, 4, 5};
        System.out.print("Original: ");
        printArray(arr2);
        reverseArray(arr2);
        System.out.print("Reversed: ");
        printArray(arr2);
        System.out.println();

        // Test Three Sum
        System.out.println("3. Three Sum");
        int[] nums3 = {-1, 0, 1, 2, -1, -4};
        java.util.List<java.util.List<Integer>> result3 = threeSum(nums3);
        System.out.println("Input: [-1,0,1,2,-1,-4]");
        System.out.println("Output: " + result3 + "\n");

        // Test Container With Most Water
        System.out.println("4. Container With Most Water");
        int[] height4 = {1, 8, 6, 2, 5, 4, 8, 3, 7};
        int result4 = maxArea(height4);
        System.out.println("Input: [1,8,6,2,5,4,8,3,7]");
        System.out.println("Max Area: " + result4 + "\n");

        // Test Trapping Rain Water
        System.out.println("5. Trapping Rain Water");
        int[] height5 = {0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1};
        int result5 = trap(height5);
        System.out.println("Input: [0,1,0,2,1,0,1,3,2,1,2,1]");
        System.out.println("Trapped Water: " + result5 + "\n");

        // Test Sliding Window Maximum
        System.out.println("6. Sliding Window Maximum");
        int[] nums6 = {1, 3, -1, -3, 5, 3, 6, 7};
        int[] result6 = maxSlidingWindow(nums6, 3);
        System.out.println("Input: [1,3,-1,-3,5,3,6,7], k=3");
        printArray(result6, "Max in each window");
    }
}