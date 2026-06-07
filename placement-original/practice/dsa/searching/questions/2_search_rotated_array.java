package searching.questions;

/*
 * 2. SEARCH IN ROTATED SORTED ARRAY (LeetCode 33)
 *
 * Problem Statement:
 * There is an integer array nums sorted in ascending order (with distinct values).
 * Prior to being passed to your function, nums is possibly rotated at an unknown pivot
 * index k (1 <= k < nums.length) such that the resulting array is
 * [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
 * For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
 * Given the array nums after the possible rotation and an integer target,
 * return the index of target if it is in nums, or -1 if it is not in nums.
 *
 * Conceptual Understanding:
 * - Array is sorted but rotated at some pivot point
 * - Two sorted subarrays: left portion and right portion
 * - Need to determine which portion is sorted and search accordingly
 * - Use binary search with additional logic to handle rotation
 * - Key insight: one half will always be sorted
 *
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

class SearchRotatedArray2 {

    // Method 1: Standard Binary Search for Rotated Array
    public int search(int[] nums, int target) {
        int left = 0;
        int right = nums.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (nums[mid] == target) {
                return mid;
            }

            // Check if left half is sorted
            if (nums[left] <= nums[mid]) {
                // Left half is sorted
                if (target >= nums[left] && target < nums[mid]) {
                    // Target is in left half
                    right = mid - 1;
                } else {
                    // Target is in right half
                    left = mid + 1;
                }
            } else {
                // Right half is sorted
                if (target > nums[mid] && target <= nums[right]) {
                    // Target is in right half
                    left = mid + 1;
                } else {
                    // Target is in left half
                    right = mid - 1;
                }
            }
        }

        return -1; // Target not found
    }

    // Method 2: Find Minimum Element (Pivot) First, Then Binary Search
    public int searchWithPivot(int[] nums, int target) {
        int pivot = findPivot(nums);

        if (pivot == -1) {
            // Array is not rotated, do normal binary search
            return binarySearch(nums, 0, nums.length - 1, target);
        }

        // If target is at pivot
        if (nums[pivot] == target) {
            return pivot;
        }

        // If target is greater than first element, search left half
        if (target >= nums[0]) {
            return binarySearch(nums, 0, pivot - 1, target);
        } else {
            // Search right half
            return binarySearch(nums, pivot + 1, nums.length - 1, target);
        }
    }

    private int findPivot(int[] nums) {
        int left = 0;
        int right = nums.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            // Check if mid is pivot
            if (mid < right && nums[mid] > nums[mid + 1]) {
                return mid;
            }
            if (mid > left && nums[mid] < nums[mid - 1]) {
                return mid - 1;
            }

            // Decide which half to search
            if (nums[mid] >= nums[left]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return -1; // No pivot found (array not rotated)
    }

    private int binarySearch(int[] nums, int left, int right, int target) {
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

        return -1;
    }

    // Method 3: Handle Duplicates (LeetCode 81)
    public boolean searchWithDuplicates(int[] nums, int target) {
        int left = 0;
        int right = nums.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (nums[mid] == target) {
                return true;
            }

            // Handle duplicates: when nums[left] == nums[mid] == nums[right]
            if (nums[left] == nums[mid] && nums[mid] == nums[right]) {
                left++;
                right--;
                continue;
            }

            // Check if left half is sorted
            if (nums[left] <= nums[mid]) {
                // Left half is sorted
                if (target >= nums[left] && target < nums[mid]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else {
                // Right half is sorted
                if (target > nums[mid] && target <= nums[right]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }

        return false;
    }

    // Method 4: Find Rotation Count
    public int findRotationCount(int[] nums) {
        int pivot = findPivot(nums);
        return pivot == -1 ? 0 : pivot + 1;
    }

    // Method 5: Find Minimum in Rotated Sorted Array (LeetCode 153)
    public int findMin(int[] nums) {
        int left = 0;
        int right = nums.length - 1;

        while (left < right) {
            int mid = left + (right - left) / 2;

            if (nums[mid] > nums[right]) {
                // Minimum is in right half
                left = mid + 1;
            } else {
                // Minimum is in left half (including mid)
                right = mid;
            }
        }

        return nums[left];
    }

    // Method 6: Find Maximum in Rotated Sorted Array
    public int findMax(int[] nums) {
        int left = 0;
        int right = nums.length - 1;

        while (left < right) {
            int mid = left + (right - left) / 2;

            if (nums[mid] < nums[left]) {
                // Maximum is in left half
                right = mid - 1;
            } else {
                // Maximum is in right half (including mid)
                left = mid;
            }
        }

        return nums[left];
    }

    // Test cases
    public static void main(String[] args) {
        SearchRotatedArray2 solution = new SearchRotatedArray2();

        // Test Case 1: Basic rotated array
        int[] nums1 = {4, 5, 6, 7, 0, 1, 2};
        System.out.println("Search 0 in [4,5,6,7,0,1,2]: " + solution.search(nums1, 0)); // Expected: 4
        System.out.println("Search 3 in [4,5,6,7,0,1,2]: " + solution.search(nums1, 3)); // Expected: -1

        // Test Case 2: Search with pivot method
        System.out.println("Search with pivot 0: " + solution.searchWithPivot(nums1, 0)); // Expected: 4

        // Test Case 3: Array with duplicates
        int[] nums2 = {2, 5, 6, 0, 0, 1, 2};
        System.out.println("Search 0 in duplicates: " + solution.searchWithDuplicates(nums2, 0)); // Expected: true
        System.out.println("Search 3 in duplicates: " + solution.searchWithDuplicates(nums2, 3)); // Expected: false

        // Test Case 4: Rotation count
        System.out.println("Rotation count: " + solution.findRotationCount(nums1)); // Expected: 4

        // Test Case 5: Find min and max
        System.out.println("Min in rotated: " + solution.findMin(nums1)); // Expected: 0
        System.out.println("Max in rotated: " + solution.findMax(nums1)); // Expected: 7

        // Test Case 6: Not rotated array
        int[] nums3 = {1, 2, 3, 4, 5};
        System.out.println("Search 3 in sorted: " + solution.search(nums3, 3)); // Expected: 2
        System.out.println("Rotation count (not rotated): " + solution.findRotationCount(nums3)); // Expected: 0
    }
}