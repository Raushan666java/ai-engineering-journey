/**
 * Day 47: Binary Search Advanced - Mastering Search Space Optimization
 * 
 * This file contains comprehensive implementations covering:
 * 1. Find First and Last Position of Element
 * 2. Search in Rotated Sorted Array
 * 3. Find Peak Element
 * 4. Median of Two Sorted Arrays
 * 5. Kth Smallest Element in Sorted Matrix
 * 6. Split Array Largest Sum
 * 7. Sqrt(x) - Integer Square Root
 * 8. Find Minimum in Rotated Sorted Array
 * 9. Search a 2D Matrix II
 * 10. Capacity to Ship Packages Within D Days
 * 11. Koko Eating Bananas
 * 12. Minimum Time to Complete Trips
 * 
 * Each problem includes:
 * - Multiple solution approaches
 * - Detailed complexity analysis
 * - Comprehensive test cases
 * - Pattern explanations
 * 
 * @author Placement Preparation
 * @version 1.0
 */

package dsa.day47;

import java.util.*;

public class BinarySearchAdvanced {
    
    // ==================== PROBLEM 1: FIND FIRST AND LAST POSITION ====================
    
    /**
     * Problem 1: Find First and Last Position of Element in Sorted Array
     * 
     * Given sorted array, find starting and ending position of target value.
     * If target not found, return [-1, -1].
     * 
     * Example:
     * Input: nums = [5,7,7,8,8,10], target = 8
     * Output: [3,4]
     * 
     * LeetCode #34
     * 
     * Time: O(log n), Space: O(1)
     */
    public static int[] searchRange(int[] nums, int target) {
        int[] result = {-1, -1};
        
        // Find first occurrence
        result[0] = findBoundary(nums, target, true);
        
        // If first occurrence not found, no need to find last
        if (result[0] == -1) {
            return result;
        }
        
        // Find last occurrence
        result[1] = findBoundary(nums, target, false);
        
        return result;
    }
    
    private static int findBoundary(int[] nums, int target, boolean findFirst) {
        int left = 0, right = nums.length - 1;
        int result = -1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] == target) {
                result = mid;
                if (findFirst) {
                    right = mid - 1; // Continue searching left
                } else {
                    left = mid + 1; // Continue searching right
                }
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return result;
    }
    
    // ==================== PROBLEM 2: SEARCH IN ROTATED SORTED ARRAY ====================
    
    /**
     * Problem 2: Search in Rotated Sorted Array
     * 
     * Search target in rotated sorted array (no duplicates).
     * Original array sorted in ascending order, rotated at unknown pivot.
     * 
     * Example:
     * Input: nums = [4,5,6,7,0,1,2], target = 0
     * Output: 4
     * 
     * LeetCode #33
     * 
     * Time: O(log n), Space: O(1)
     */
    public static int searchRotated(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] == target) {
                return mid;
            }
            
            // Determine which half is sorted
            if (nums[left] <= nums[mid]) {
                // Left half is sorted
                if (nums[left] <= target && target < nums[mid]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else {
                // Right half is sorted
                if (nums[mid] < target && target <= nums[right]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }
        
        return -1;
    }
    
    /**
     * Search in Rotated Sorted Array II (with duplicates)
     * LeetCode #81
     * 
     * Time: O(log n) average, O(n) worst case
     */
    public static boolean searchRotatedDuplicates(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] == target) {
                return true;
            }
            
            // Handle duplicates
            if (nums[left] == nums[mid] && nums[mid] == nums[right]) {
                left++;
                right--;
                continue;
            }
            
            // Determine which half is sorted
            if (nums[left] <= nums[mid]) {
                if (nums[left] <= target && target < nums[mid]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else {
                if (nums[mid] < target && target <= nums[right]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }
        
        return false;
    }
    
    // ==================== PROBLEM 3: FIND PEAK ELEMENT ====================
    
    /**
     * Problem 3: Find Peak Element
     * 
     * Peak element is greater than its neighbors.
     * Assume nums[-1] = nums[n] = -∞.
     * 
     * Example:
     * Input: nums = [1,2,3,1]
     * Output: 2 (index of peak element 3)
     * 
     * LeetCode #162
     * 
     * Time: O(log n), Space: O(1)
     */
    public static int findPeakElement(int[] nums) {
        int left = 0, right = nums.length - 1;
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] > nums[mid + 1]) {
                // Peak is on left side (including mid)
                right = mid;
            } else {
                // Peak is on right side
                left = mid + 1;
            }
        }
        
        return left;
    }
    
    // ==================== PROBLEM 4: MEDIAN OF TWO SORTED ARRAYS ====================
    
    /**
     * Problem 4: Median of Two Sorted Arrays
     * 
     * Find median of two sorted arrays in O(log(min(m,n))).
     * 
     * Example:
     * Input: nums1 = [1,3], nums2 = [2]
     * Output: 2.0
     * 
     * Input: nums1 = [1,2], nums2 = [3,4]
     * Output: 2.5
     * 
     * LeetCode #4
     * 
     * Time: O(log(min(m,n))), Space: O(1)
     */
    public static double findMedianSortedArrays(int[] nums1, int[] nums2) {
        // Ensure nums1 is smaller array
        if (nums1.length > nums2.length) {
            return findMedianSortedArrays(nums2, nums1);
        }
        
        int m = nums1.length, n = nums2.length;
        int left = 0, right = m;
        
        while (left <= right) {
            // Partition indices
            int partition1 = (left + right) / 2;
            int partition2 = (m + n + 1) / 2 - partition1;
            
            // Handle edge cases
            int maxLeft1 = (partition1 == 0) ? Integer.MIN_VALUE : nums1[partition1 - 1];
            int minRight1 = (partition1 == m) ? Integer.MAX_VALUE : nums1[partition1];
            
            int maxLeft2 = (partition2 == 0) ? Integer.MIN_VALUE : nums2[partition2 - 1];
            int minRight2 = (partition2 == n) ? Integer.MAX_VALUE : nums2[partition2];
            
            // Check if partition is correct
            if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
                // Found correct partition
                if ((m + n) % 2 == 0) {
                    return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2.0;
                } else {
                    return Math.max(maxLeft1, maxLeft2);
                }
            } else if (maxLeft1 > minRight2) {
                // Move left in nums1
                right = partition1 - 1;
            } else {
                // Move right in nums1
                left = partition1 + 1;
            }
        }
        
        throw new IllegalArgumentException("Input arrays are not sorted");
    }
    
    // ==================== PROBLEM 5: KTH SMALLEST IN SORTED MATRIX ====================
    
    /**
     * Problem 5: Kth Smallest Element in a Sorted Matrix
     * 
     * n x n matrix where each row and column is sorted in ascending order.
     * Find kth smallest element.
     * 
     * Example:
     * Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
     * Output: 13
     * 
     * LeetCode #378
     * 
     * Time: O(n * log(max-min)), Space: O(1)
     */
    public static int kthSmallest(int[][] matrix, int k) {
        int n = matrix.length;
        int left = matrix[0][0];
        int right = matrix[n - 1][n - 1];
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            
            // Count elements <= mid
            int count = countLessEqual(matrix, mid);
            
            if (count < k) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        
        return left;
    }
    
    private static int countLessEqual(int[][] matrix, int target) {
        int n = matrix.length;
        int count = 0;
        int row = n - 1, col = 0;
        
        // Start from bottom-left corner
        while (row >= 0 && col < n) {
            if (matrix[row][col] <= target) {
                count += row + 1; // All elements in this column up to row
                col++;
            } else {
                row--;
            }
        }
        
        return count;
    }
    
    // ==================== PROBLEM 6: SPLIT ARRAY LARGEST SUM ====================
    
    /**
     * Problem 6: Split Array Largest Sum
     * 
     * Split array into k non-empty continuous subarrays.
     * Minimize the largest sum among these subarrays.
     * 
     * Example:
     * Input: nums = [7,2,5,10,8], k = 2
     * Output: 18
     * Explanation: Split into [7,2,5] and [10,8]. Largest sum is 18.
     * 
     * LeetCode #410
     * 
     * Time: O(n * log(sum)), Space: O(1)
     */
    public static int splitArray(int[] nums, int k) {
        int left = 0, right = 0;
        
        // left = max element, right = sum of all elements
        for (int num : nums) {
            left = Math.max(left, num);
            right += num;
        }
        
        int result = right;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            // Check if we can split with max sum = mid
            if (canSplit(nums, k, mid)) {
                result = mid;
                right = mid - 1; // Try smaller max sum
            } else {
                left = mid + 1;
            }
        }
        
        return result;
    }
    
    private static boolean canSplit(int[] nums, int k, int maxSum) {
        int subarrays = 1;
        int currentSum = 0;
        
        for (int num : nums) {
            if (currentSum + num > maxSum) {
                subarrays++;
                currentSum = num;
                
                if (subarrays > k) {
                    return false;
                }
            } else {
                currentSum += num;
            }
        }
        
        return true;
    }
    
    // ==================== PROBLEM 7: SQRT(X) ====================
    
    /**
     * Problem 7: Sqrt(x)
     * 
     * Compute and return the square root of x (floor value).
     * 
     * Example:
     * Input: x = 8
     * Output: 2 (sqrt(8) = 2.828...)
     * 
     * LeetCode #69
     * 
     * Time: O(log x), Space: O(1)
     */
    public static int mySqrt(int x) {
        if (x < 2) return x;
        
        long left = 1, right = x / 2;
        long result = 1;
        
        while (left <= right) {
            long mid = left + (right - left) / 2;
            long square = mid * mid;
            
            if (square == x) {
                return (int) mid;
            } else if (square < x) {
                result = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return (int) result;
    }
    
    /**
     * Sqrt with precision (double)
     * 
     * Time: O(log(x/precision)), Space: O(1)
     */
    public static double sqrtPrecision(double x, double precision) {
        if (x < 0) throw new IllegalArgumentException("Cannot compute sqrt of negative");
        if (x == 0) return 0;
        
        double left = 0, right = x;
        if (x < 1) right = 1;
        
        while (right - left > precision) {
            double mid = left + (right - left) / 2;
            double square = mid * mid;
            
            if (square <= x) {
                left = mid;
            } else {
                right = mid;
            }
        }
        
        return left;
    }
    
    // ==================== PROBLEM 8: FIND MINIMUM IN ROTATED ARRAY ====================
    
    /**
     * Problem 8: Find Minimum in Rotated Sorted Array
     * 
     * Array originally sorted, then rotated at unknown pivot.
     * Find minimum element.
     * 
     * Example:
     * Input: nums = [3,4,5,1,2]
     * Output: 1
     * 
     * LeetCode #153
     * 
     * Time: O(log n), Space: O(1)
     */
    public static int findMin(int[] nums) {
        int left = 0, right = nums.length - 1;
        
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
    
    /**
     * Find Minimum in Rotated Sorted Array II (with duplicates)
     * LeetCode #154
     * 
     * Time: O(log n) average, O(n) worst case
     */
    public static int findMinDuplicates(int[] nums) {
        int left = 0, right = nums.length - 1;
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] > nums[right]) {
                left = mid + 1;
            } else if (nums[mid] < nums[right]) {
                right = mid;
            } else {
                // nums[mid] == nums[right], cannot determine, reduce search space
                right--;
            }
        }
        
        return nums[left];
    }
    
    // ==================== PROBLEM 9: SEARCH 2D MATRIX II ====================
    
    /**
     * Problem 9: Search a 2D Matrix II
     * 
     * Matrix sorted row-wise and column-wise.
     * Search for target value.
     * 
     * Example:
     * Input: matrix = [[1,4,7,11],[2,5,8,12],[3,6,9,16],[10,13,14,17]], target = 5
     * Output: true
     * 
     * LeetCode #240
     * 
     * Time: O(m + n), Space: O(1)
     */
    public static boolean searchMatrix(int[][] matrix, int target) {
        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return false;
        }
        
        int m = matrix.length, n = matrix[0].length;
        int row = 0, col = n - 1; // Start from top-right corner
        
        while (row < m && col >= 0) {
            if (matrix[row][col] == target) {
                return true;
            } else if (matrix[row][col] > target) {
                col--; // Move left
            } else {
                row++; // Move down
            }
        }
        
        return false;
    }
    
    // ==================== PROBLEM 10: CAPACITY TO SHIP PACKAGES ====================
    
    /**
     * Problem 10: Capacity To Ship Packages Within D Days
     * 
     * Given array of package weights and number of days.
     * Find minimum ship capacity to ship all packages within D days.
     * Packages must be shipped in order.
     * 
     * Example:
     * Input: weights = [1,2,3,4,5,6,7,8,9,10], days = 5
     * Output: 15
     * 
     * LeetCode #1011
     * 
     * Time: O(n * log(sum)), Space: O(1)
     */
    public static int shipWithinDays(int[] weights, int days) {
        int left = 0, right = 0;
        
        // left = max weight, right = sum of all weights
        for (int weight : weights) {
            left = Math.max(left, weight);
            right += weight;
        }
        
        int result = right;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            // Check if we can ship with capacity = mid
            if (canShip(weights, days, mid)) {
                result = mid;
                right = mid - 1; // Try smaller capacity
            } else {
                left = mid + 1;
            }
        }
        
        return result;
    }
    
    private static boolean canShip(int[] weights, int days, int capacity) {
        int daysNeeded = 1;
        int currentWeight = 0;
        
        for (int weight : weights) {
            if (currentWeight + weight > capacity) {
                daysNeeded++;
                currentWeight = weight;
                
                if (daysNeeded > days) {
                    return false;
                }
            } else {
                currentWeight += weight;
            }
        }
        
        return true;
    }
    
    // ==================== PROBLEM 11: KOKO EATING BANANAS ====================
    
    /**
     * Problem 11: Koko Eating Bananas
     * 
     * Koko can eat k bananas per hour.
     * Find minimum k such that she can finish all piles within h hours.
     * 
     * Example:
     * Input: piles = [3,6,7,11], h = 8
     * Output: 4
     * 
     * LeetCode #875
     * 
     * Time: O(n * log(max)), Space: O(1)
     */
    public static int minEatingSpeed(int[] piles, int h) {
        int left = 1, right = 0;
        
        // right = maximum pile size
        for (int pile : piles) {
            right = Math.max(right, pile);
        }
        
        int result = right;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            // Check if Koko can finish with speed = mid
            if (canFinish(piles, h, mid)) {
                result = mid;
                right = mid - 1; // Try slower speed
            } else {
                left = mid + 1;
            }
        }
        
        return result;
    }
    
    private static boolean canFinish(int[] piles, int h, int speed) {
        long hoursNeeded = 0;
        
        for (int pile : piles) {
            hoursNeeded += (pile + speed - 1) / speed; // Ceiling division
            
            if (hoursNeeded > h) {
                return false;
            }
        }
        
        return true;
    }
    
    // ==================== PROBLEM 12: MINIMUM TIME TO COMPLETE TRIPS ====================
    
    /**
     * Problem 12: Minimum Time to Complete Trips
     * 
     * Given array time where time[i] is time for ith bus to complete one trip.
     * Find minimum time to complete totalTrips.
     * 
     * Example:
     * Input: time = [1,2,3], totalTrips = 5
     * Output: 3
     * Explanation: At time 3:
     * - Bus 0: 3 trips
     * - Bus 1: 1 trip
     * - Bus 2: 1 trip
     * Total: 5 trips
     * 
     * LeetCode #2187
     * 
     * Time: O(n * log(max*totalTrips)), Space: O(1)
     */
    public static long minimumTime(int[] time, int totalTrips) {
        long left = 1;
        long right = (long) Arrays.stream(time).min().getAsInt() * totalTrips;
        long result = right;
        
        while (left <= right) {
            long mid = left + (right - left) / 2;
            
            // Check if we can complete totalTrips in mid time
            if (canCompleteTrips(time, totalTrips, mid)) {
                result = mid;
                right = mid - 1; // Try less time
            } else {
                left = mid + 1;
            }
        }
        
        return result;
    }
    
    private static boolean canCompleteTrips(int[] time, int totalTrips, long givenTime) {
        long trips = 0;
        
        for (int t : time) {
            trips += givenTime / t;
            
            if (trips >= totalTrips) {
                return true;
            }
        }
        
        return false;
    }
    
    // ==================== ADDITIONAL: ADVANCED BINARY SEARCH TECHNIQUES ====================
    
    /**
     * Ternary Search - For finding maximum/minimum of unimodal function
     * 
     * Time: O(log n), Space: O(1)
     */
    public static int ternarySearch(int[] arr) {
        int left = 0, right = arr.length - 1;
        
        while (right - left > 2) {
            int mid1 = left + (right - left) / 3;
            int mid2 = right - (right - left) / 3;
            
            if (arr[mid1] < arr[mid2]) {
                left = mid1;
            } else {
                right = mid2;
            }
        }
        
        // Check remaining elements
        int maxIdx = left;
        for (int i = left + 1; i <= right; i++) {
            if (arr[i] > arr[maxIdx]) {
                maxIdx = i;
            }
        }
        
        return maxIdx;
    }
    
    /**
     * Exponential Search - For unbounded/infinite arrays
     * 
     * Time: O(log n), Space: O(1)
     */
    public static int exponentialSearch(int[] arr, int target) {
        if (arr[0] == target) return 0;
        
        int i = 1;
        while (i < arr.length && arr[i] <= target) {
            i *= 2;
        }
        
        // Binary search in range [i/2, min(i, length-1)]
        return binarySearchRange(arr, target, i / 2, Math.min(i, arr.length - 1));
    }
    
    private static int binarySearchRange(int[] arr, int target, int left, int right) {
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (arr[mid] == target) return mid;
            if (arr[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return -1;
    }
    
    // ==================== TEST CASES ====================
    
    public static void main(String[] args) {
        System.out.println("=== DAY 47: BINARY SEARCH ADVANCED - 12 PROBLEMS ===\n");
        
        // Problem 1: Find First and Last Position
        System.out.println("Problem 1: Find First and Last Position");
        int[] nums1 = {5, 7, 7, 8, 8, 10};
        System.out.println("Input: [5,7,7,8,8,10], target=8");
        System.out.println("Output: " + Arrays.toString(searchRange(nums1, 8)));
        System.out.println("Expected: [3,4]\n");
        
        // Problem 2: Search in Rotated Sorted Array
        System.out.println("Problem 2: Search in Rotated Sorted Array");
        int[] nums2 = {4, 5, 6, 7, 0, 1, 2};
        System.out.println("Input: [4,5,6,7,0,1,2], target=0");
        System.out.println("Output: " + searchRotated(nums2, 0));
        System.out.println("Expected: 4\n");
        
        // Problem 3: Find Peak Element
        System.out.println("Problem 3: Find Peak Element");
        int[] nums3 = {1, 2, 3, 1};
        System.out.println("Input: [1,2,3,1]");
        System.out.println("Output: " + findPeakElement(nums3));
        System.out.println("Expected: 2 (peak element 3 at index 2)\n");
        
        // Problem 4: Median of Two Sorted Arrays
        System.out.println("Problem 4: Median of Two Sorted Arrays");
        int[] nums4a = {1, 3};
        int[] nums4b = {2};
        System.out.println("Input: nums1=[1,3], nums2=[2]");
        System.out.println("Output: " + findMedianSortedArrays(nums4a, nums4b));
        System.out.println("Expected: 2.0\n");
        
        // Problem 5: Kth Smallest Element in Sorted Matrix
        System.out.println("Problem 5: Kth Smallest Element in Sorted Matrix");
        int[][] matrix = {{1, 5, 9}, {10, 11, 13}, {12, 13, 15}};
        System.out.println("Input: matrix=[[1,5,9],[10,11,13],[12,13,15]], k=8");
        System.out.println("Output: " + kthSmallest(matrix, 8));
        System.out.println("Expected: 13\n");
        
        // Problem 6: Split Array Largest Sum
        System.out.println("Problem 6: Split Array Largest Sum");
        int[] nums6 = {7, 2, 5, 10, 8};
        System.out.println("Input: [7,2,5,10,8], k=2");
        System.out.println("Output: " + splitArray(nums6, 2));
        System.out.println("Expected: 18 (split [7,2,5] and [10,8])\n");
        
        // Problem 7: Sqrt(x)
        System.out.println("Problem 7: Sqrt(x)");
        System.out.println("Input: x=8");
        System.out.println("Output: " + mySqrt(8));
        System.out.println("Expected: 2\n");
        
        System.out.println("Sqrt with precision:");
        System.out.println("Input: x=8, precision=0.0001");
        System.out.printf("Output: %.4f%n", sqrtPrecision(8, 0.0001));
        System.out.println("Expected: ~2.8284\n");
        
        // Problem 8: Find Minimum in Rotated Sorted Array
        System.out.println("Problem 8: Find Minimum in Rotated Sorted Array");
        int[] nums8 = {3, 4, 5, 1, 2};
        System.out.println("Input: [3,4,5,1,2]");
        System.out.println("Output: " + findMin(nums8));
        System.out.println("Expected: 1\n");
        
        // Problem 9: Search 2D Matrix II
        System.out.println("Problem 9: Search 2D Matrix II");
        int[][] matrix9 = {{1, 4, 7, 11}, {2, 5, 8, 12}, {3, 6, 9, 16}, {10, 13, 14, 17}};
        System.out.println("Input: matrix, target=5");
        System.out.println("Output: " + searchMatrix(matrix9, 5));
        System.out.println("Expected: true\n");
        
        // Problem 10: Capacity to Ship Packages
        System.out.println("Problem 10: Capacity to Ship Packages Within D Days");
        int[] weights = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        System.out.println("Input: [1,2,3,4,5,6,7,8,9,10], days=5");
        System.out.println("Output: " + shipWithinDays(weights, 5));
        System.out.println("Expected: 15\n");
        
        // Problem 11: Koko Eating Bananas
        System.out.println("Problem 11: Koko Eating Bananas");
        int[] piles = {3, 6, 7, 11};
        System.out.println("Input: piles=[3,6,7,11], h=8");
        System.out.println("Output: " + minEatingSpeed(piles, 8));
        System.out.println("Expected: 4\n");
        
        // Problem 12: Minimum Time to Complete Trips
        System.out.println("Problem 12: Minimum Time to Complete Trips");
        int[] time = {1, 2, 3};
        System.out.println("Input: time=[1,2,3], totalTrips=5");
        System.out.println("Output: " + minimumTime(time, 5));
        System.out.println("Expected: 3\n");
        
        // Advanced techniques
        System.out.println("=== ADVANCED TECHNIQUES ===\n");
        
        System.out.println("Ternary Search (find maximum):");
        int[] unimodal = {1, 3, 5, 7, 9, 8, 6, 4, 2};
        System.out.println("Input: [1,3,5,7,9,8,6,4,2]");
        System.out.println("Peak index: " + ternarySearch(unimodal));
        System.out.println("Expected: 4 (element 9)\n");
        
        System.out.println("Exponential Search:");
        int[] sorted = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 30};
        System.out.println("Input: sorted array, target=7");
        System.out.println("Output: " + exponentialSearch(sorted, 7));
        System.out.println("Expected: 6\n");
        
        System.out.println("\n=== ALL BINARY SEARCH PROBLEMS COMPLETED ===");
        System.out.println("Master these patterns for efficient searching!");
        System.out.println("Next: Bit Manipulation (Day 48)");
    }
}
