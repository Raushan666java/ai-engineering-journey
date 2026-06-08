package searching.questions;

/*
 * 1. BINARY SEARCH (LeetCode 704)
 *
 * Problem Statement:
 * Given an array of integers nums which is sorted in ascending order, and an integer target,
 * write a function to search target in nums. If target exists, then return its index.
 * Otherwise, return -1.
 *
 * Conceptual Understanding:
 * - Divide and conquer algorithm for sorted arrays
 * - Compare target with middle element
 * - Eliminate half of search space each iteration
 * - Continue until target found or search space exhausted
 * - Key: array must be sorted for binary search to work
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1) iterative, O(log n) recursive
 */

class BinarySearch1 {

    // Method 1: Iterative Binary Search
    public int search(int[] nums, int target) {
        int left = 0;
        int right = nums.length - 1;

        while (left <= right) {
            // Calculate mid to avoid integer overflow
            int mid = left + (right - left) / 2;

            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] < target) {
                // Search right half
                left = mid + 1;
            } else {
                // Search left half
                right = mid - 1;
            }
        }

        return -1; // Target not found
    }

    // Method 2: Recursive Binary Search
    public int searchRecursive(int[] nums, int target) {
        return binarySearchHelper(nums, target, 0, nums.length - 1);
    }

    private int binarySearchHelper(int[] nums, int target, int left, int right) {
        if (left > right) {
            return -1; // Base case: not found
        }

        int mid = left + (right - left) / 2;

        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] < target) {
            return binarySearchHelper(nums, target, mid + 1, right);
        } else {
            return binarySearchHelper(nums, target, left, mid - 1);
        }
    }

    // Method 3: Find First Occurrence
    public int findFirst(int[] nums, int target) {
        int left = 0;
        int right = nums.length - 1;
        int result = -1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (nums[mid] == target) {
                result = mid;
                right = mid - 1; // Continue searching left for first occurrence
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }

    // Method 4: Find Last Occurrence
    public int findLast(int[] nums, int target) {
        int left = 0;
        int right = nums.length - 1;
        int result = -1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (nums[mid] == target) {
                result = mid;
                left = mid + 1; // Continue searching right for last occurrence
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }

    // Method 5: Search Insert Position (LeetCode 35)
    public int searchInsert(int[] nums, int target) {
        int left = 0;
        int right = nums.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return left; // Insert position
    }

    // Method 6: Count Occurrences
    public int countOccurrences(int[] nums, int target) {
        int first = findFirst(nums, target);
        if (first == -1) {
            return 0;
        }

        int last = findLast(nums, target);
        return last - first + 1;
    }

    // Method 7: Find Peak Element (LeetCode 162)
    public int findPeakElement(int[] nums) {
        int left = 0;
        int right = nums.length - 1;

        while (left < right) {
            int mid = left + (right - left) / 2;

            if (nums[mid] < nums[mid + 1]) {
                left = mid + 1; // Peak is on right side
            } else {
                right = mid; // Peak is on left side or at mid
            }
        }

        return left; // Peak element index
    }

    // Method 8: Square Root (LeetCode 69)
    public int mySqrt(int x) {
        if (x == 0 || x == 1) {
            return x;
        }

        int left = 1;
        int right = x;
        int result = 0;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            long square = (long) mid * mid; // Prevent overflow

            if (square == x) {
                return mid;
            } else if (square < x) {
                result = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }

    // Test cases
    public static void main(String[] args) {
        BinarySearch1 solution = new BinarySearch1();
        int[] nums = {-1, 0, 3, 5, 9, 12};

        // Test Case 1: Target exists
        System.out.println("Search 9: " + solution.search(nums, 9)); // Expected: 4
        System.out.println("Search 2: " + solution.search(nums, 2)); // Expected: -1

        // Test Case 2: Recursive search
        System.out.println("Recursive search 9: " + solution.searchRecursive(nums, 9)); // Expected: 4

        // Test Case 3: First and last occurrence
        int[] duplicates = {1, 2, 2, 2, 3, 4, 5};
        System.out.println("First 2: " + solution.findFirst(duplicates, 2)); // Expected: 1
        System.out.println("Last 2: " + solution.findLast(duplicates, 2));   // Expected: 3
        System.out.println("Count 2: " + solution.countOccurrences(duplicates, 2)); // Expected: 3

        // Test Case 4: Search insert position
        int[] insertNums = {1, 3, 5, 6};
        System.out.println("Insert 5: " + solution.searchInsert(insertNums, 5)); // Expected: 2
        System.out.println("Insert 2: " + solution.searchInsert(insertNums, 2)); // Expected: 1
        System.out.println("Insert 7: " + solution.searchInsert(insertNums, 7)); // Expected: 4

        // Test Case 5: Peak element
        int[] peakNums = {1, 2, 3, 1};
        System.out.println("Peak: " + solution.findPeakElement(peakNums)); // Expected: 2

        // Test Case 6: Square root
        System.out.println("Sqrt(4): " + solution.mySqrt(4)); // Expected: 2
        System.out.println("Sqrt(8): " + solution.mySqrt(8)); // Expected: 2
    }
}