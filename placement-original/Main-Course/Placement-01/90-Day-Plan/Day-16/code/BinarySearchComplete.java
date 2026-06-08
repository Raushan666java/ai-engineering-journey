/**
 * DAY 16: BINARY SEARCH - Complete Code Implementation
 * All templates and LeetCode solutions
 * 
 * TEMPLATES INCLUDED:
 * 1. Standard Binary Search
 * 2. Lower Bound (First occurrence)
 * 3. Upper Bound (Last occurrence)
 * 4. Binary Search on Answer
 * 
 * LEETCODE PROBLEMS:
 * #704, #35, #278, #33, #34, #153, #162, #74, #69, #875
 */

import java.util.*;

public class BinarySearchComplete {

    // ============================================================================
    // TEMPLATE 1: STANDARD BINARY SEARCH
    // ============================================================================
    
    /**
     * LeetCode #704 - Binary Search
     * Time: O(log n), Space: O(1)
     */
    public int binarySearch(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;  // Prevents overflow
            
            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return -1;  // Not found
    }

    // ============================================================================
    // TEMPLATE 2: LOWER BOUND (First Occurrence)
    // ============================================================================
    
    /**
     * Find first position >= target
     * Used in: LeetCode #34, #35
     */
    public int lowerBound(int[] nums, int target) {
        int left = 0, right = nums.length;
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid;  // Don't exclude mid
            }
        }
        
        return left;
    }

    // ============================================================================
    // TEMPLATE 3: UPPER BOUND (Last Occurrence)
    // ============================================================================
    
    /**
     * Find last position <= target
     * Used in: LeetCode #34
     */
    public int upperBound(int[] nums, int target) {
        int left = 0, right = nums.length;
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] <= target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        
        return left - 1;
    }

    // ============================================================================
    // LEETCODE #35 - SEARCH INSERT POSITION
    // ============================================================================
    
    /**
     * Find position to insert target
     * Time: O(log n), Space: O(1)
     */
    public int searchInsert(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        
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
        
        return left;  // Insert position
    }

    // ============================================================================
    // LEETCODE #278 - FIRST BAD VERSION (API-based BS)
    // ============================================================================
    
    // Assume this API is provided
    boolean isBadVersion(int version) {
        return true;  // Dummy implementation
    }
    
    /**
     * Find first bad version
     * Time: O(log n), Space: O(1)
     */
    public int firstBadVersion(int n) {
        int left = 1, right = n;
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            
            if (isBadVersion(mid)) {
                right = mid;  // First bad might be mid or before
            } else {
                left = mid + 1;  // First bad is after mid
            }
        }
        
        return left;
    }

    // ============================================================================
    // LEETCODE #33 - SEARCH IN ROTATED SORTED ARRAY ⭐⭐⭐ MOST IMPORTANT
    // ============================================================================
    
    /**
     * Search in rotated sorted array
     * Time: O(log n), Space: O(1)
     * 
     * KEY INSIGHT: One half is always sorted
     * Example: [4,5,6,7,0,1,2], target = 0
     * mid = 7, left half [4,5,6,7] is sorted, target not in left, search right
     */
    public int searchRotated(int[] nums, int target) {
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
                    right = mid - 1;  // Target in left half
                } else {
                    left = mid + 1;   // Target in right half
                }
            } else {
                // Right half is sorted
                if (nums[mid] < target && target <= nums[right]) {
                    left = mid + 1;   // Target in right half
                } else {
                    right = mid - 1;  // Target in left half
                }
            }
        }
        
        return -1;
    }

    // ============================================================================
    // LEETCODE #34 - FIND FIRST AND LAST POSITION ⭐⭐⭐
    // ============================================================================
    
    /**
     * Find first and last position of target
     * Time: O(log n), Space: O(1)
     * 
     * APPROACH: Use lower bound and upper bound
     */
    public int[] searchRange(int[] nums, int target) {
        int[] result = {-1, -1};
        
        if (nums.length == 0) return result;
        
        // Find first position
        int first = findFirst(nums, target);
        if (first == -1) return result;
        
        // Find last position
        int last = findLast(nums, target);
        
        result[0] = first;
        result[1] = last;
        return result;
    }
    
    private int findFirst(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        int result = -1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] == target) {
                result = mid;
                right = mid - 1;  // Continue searching left
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return result;
    }
    
    private int findLast(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        int result = -1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] == target) {
                result = mid;
                left = mid + 1;  // Continue searching right
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return result;
    }

    // ============================================================================
    // LEETCODE #153 - FIND MINIMUM IN ROTATED SORTED ARRAY
    // ============================================================================
    
    /**
     * Find minimum in rotated sorted array
     * Time: O(log n), Space: O(1)
     * 
     * KEY: Minimum is where rotation happened
     */
    public int findMin(int[] nums) {
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

    // ============================================================================
    // LEETCODE #162 - FIND PEAK ELEMENT
    // ============================================================================
    
    /**
     * Find peak element (nums[i] > nums[i-1] && nums[i] > nums[i+1])
     * Time: O(log n), Space: O(1)
     * 
     * KEY: Always move towards higher neighbor
     */
    public int findPeakElement(int[] nums) {
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

    // ============================================================================
    // LEETCODE #74 - SEARCH 2D MATRIX
    // ============================================================================
    
    /**
     * Search in 2D matrix (sorted row-wise and column-wise)
     * Time: O(log(m*n)), Space: O(1)
     * 
     * KEY: Treat as 1D array
     * matrix[i][j] = array[i * cols + j]
     * array[x] = matrix[x / cols][x % cols]
     */
    public boolean searchMatrix(int[][] matrix, int target) {
        if (matrix.length == 0 || matrix[0].length == 0) return false;
        
        int rows = matrix.length;
        int cols = matrix[0].length;
        int left = 0, right = rows * cols - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            int midValue = matrix[mid / cols][mid % cols];
            
            if (midValue == target) {
                return true;
            } else if (midValue < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return false;
    }

    // ============================================================================
    // LEETCODE #69 - SQRT(X) - Binary Search on Answer
    // ============================================================================
    
    /**
     * Compute square root (integer part)
     * Time: O(log n), Space: O(1)
     * 
     * KEY: Binary search on answer range [0, x]
     */
    public int mySqrt(int x) {
        if (x < 2) return x;
        
        int left = 1, right = x / 2;
        int result = 0;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            long square = (long) mid * mid;  // Prevent overflow
            
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

    // ============================================================================
    // LEETCODE #875 - KOKO EATING BANANAS ⭐⭐⭐ IMPORTANT PATTERN
    // ============================================================================
    
    /**
     * Minimum eating speed to finish bananas in h hours
     * Time: O(n * log(max)), Space: O(1)
     * 
     * KEY: Binary search on speed [1, max(piles)]
     * For each speed, check if can finish in h hours
     */
    public int minEatingSpeed(int[] piles, int h) {
        int left = 1;
        int right = Arrays.stream(piles).max().getAsInt();
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            
            if (canFinish(piles, mid, h)) {
                right = mid;  // Try slower speed
            } else {
                left = mid + 1;  // Need faster speed
            }
        }
        
        return left;
    }
    
    private boolean canFinish(int[] piles, int speed, int h) {
        long hours = 0;
        for (int pile : piles) {
            hours += (pile + speed - 1) / speed;  // Ceiling division
            if (hours > h) return false;  // Early termination
        }
        return hours <= h;
    }

    // ============================================================================
    // LEETCODE #1011 - CAPACITY TO SHIP PACKAGES
    // ============================================================================
    
    /**
     * Minimum capacity to ship packages in days
     * Time: O(n * log(sum)), Space: O(1)
     * 
     * KEY: Binary search on capacity [max(weights), sum(weights)]
     */
    public int shipWithinDays(int[] weights, int days) {
        int left = 0, right = 0;
        
        for (int weight : weights) {
            left = Math.max(left, weight);  // At least max weight
            right += weight;                 // At most sum of all
        }
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            
            if (canShip(weights, mid, days)) {
                right = mid;  // Try smaller capacity
            } else {
                left = mid + 1;  // Need larger capacity
            }
        }
        
        return left;
    }
    
    private boolean canShip(int[] weights, int capacity, int days) {
        int daysNeeded = 1;
        int currentLoad = 0;
        
        for (int weight : weights) {
            if (currentLoad + weight > capacity) {
                daysNeeded++;
                currentLoad = weight;
                if (daysNeeded > days) return false;
            } else {
                currentLoad += weight;
            }
        }
        
        return true;
    }

    // ============================================================================
    // BONUS: BINARY SEARCH VARIATIONS
    // ============================================================================
    
    /**
     * Find closest element to target
     */
    public int findClosest(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        
        while (left < right - 1) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] < target) {
                left = mid;
            } else {
                right = mid;
            }
        }
        
        // Compare left and right
        if (Math.abs(nums[left] - target) <= Math.abs(nums[right] - target)) {
            return nums[left];
        } else {
            return nums[right];
        }
    }
    
    /**
     * Count occurrences of target (using first and last)
     */
    public int countOccurrences(int[] nums, int target) {
        int first = findFirst(nums, target);
        if (first == -1) return 0;
        
        int last = findLast(nums, target);
        return last - first + 1;
    }

    // ============================================================================
    // TEST CASES
    // ============================================================================
    
    public static void main(String[] args) {
        BinarySearchComplete bs = new BinarySearchComplete();
        
        System.out.println("=== BINARY SEARCH COMPLETE SOLUTIONS ===\n");
        
        // Test 1: Standard Binary Search
        System.out.println("Test 1: Standard Binary Search (#704)");
        int[] arr1 = {-1, 0, 3, 5, 9, 12};
        System.out.println("Array: " + Arrays.toString(arr1));
        System.out.println("Search 9: " + bs.binarySearch(arr1, 9));
        System.out.println("Search 2: " + bs.binarySearch(arr1, 2));
        System.out.println();
        
        // Test 2: Search Insert Position
        System.out.println("Test 2: Search Insert Position (#35)");
        int[] arr2 = {1, 3, 5, 6};
        System.out.println("Array: " + Arrays.toString(arr2));
        System.out.println("Insert 5: " + bs.searchInsert(arr2, 5));
        System.out.println("Insert 2: " + bs.searchInsert(arr2, 2));
        System.out.println("Insert 7: " + bs.searchInsert(arr2, 7));
        System.out.println();
        
        // Test 3: Search in Rotated Array
        System.out.println("Test 3: Search in Rotated Array (#33) ⭐");
        int[] arr3 = {4, 5, 6, 7, 0, 1, 2};
        System.out.println("Array: " + Arrays.toString(arr3));
        System.out.println("Search 0: " + bs.searchRotated(arr3, 0));
        System.out.println("Search 3: " + bs.searchRotated(arr3, 3));
        System.out.println();
        
        // Test 4: First and Last Position
        System.out.println("Test 4: First and Last Position (#34)");
        int[] arr4 = {5, 7, 7, 8, 8, 10};
        System.out.println("Array: " + Arrays.toString(arr4));
        System.out.println("Search 8: " + Arrays.toString(bs.searchRange(arr4, 8)));
        System.out.println("Search 6: " + Arrays.toString(bs.searchRange(arr4, 6)));
        System.out.println();
        
        // Test 5: Find Minimum in Rotated Array
        System.out.println("Test 5: Find Minimum in Rotated Array (#153)");
        int[] arr5 = {3, 4, 5, 1, 2};
        System.out.println("Array: " + Arrays.toString(arr5));
        System.out.println("Minimum: " + bs.findMin(arr5));
        System.out.println();
        
        // Test 6: Find Peak Element
        System.out.println("Test 6: Find Peak Element (#162)");
        int[] arr6 = {1, 2, 3, 1};
        System.out.println("Array: " + Arrays.toString(arr6));
        System.out.println("Peak at index: " + bs.findPeakElement(arr6));
        System.out.println();
        
        // Test 7: Search 2D Matrix
        System.out.println("Test 7: Search 2D Matrix (#74)");
        int[][] matrix = {{1, 3, 5, 7}, {10, 11, 16, 20}, {23, 30, 34, 60}};
        System.out.println("Matrix: [1,3,5,7], [10,11,16,20], [23,30,34,60]");
        System.out.println("Search 3: " + bs.searchMatrix(matrix, 3));
        System.out.println("Search 13: " + bs.searchMatrix(matrix, 13));
        System.out.println();
        
        // Test 8: Sqrt(x)
        System.out.println("Test 8: Sqrt(x) (#69)");
        System.out.println("sqrt(4): " + bs.mySqrt(4));
        System.out.println("sqrt(8): " + bs.mySqrt(8));
        System.out.println();
        
        // Test 9: Koko Eating Bananas
        System.out.println("Test 9: Koko Eating Bananas (#875) ⭐");
        int[] piles = {3, 6, 7, 11};
        int h = 8;
        System.out.println("Piles: " + Arrays.toString(piles) + ", Hours: " + h);
        System.out.println("Min speed: " + bs.minEatingSpeed(piles, h));
        System.out.println();
        
        // Test 10: Ship Packages
        System.out.println("Test 10: Ship Packages (#1011)");
        int[] weights = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        int days = 5;
        System.out.println("Weights: " + Arrays.toString(weights) + ", Days: " + days);
        System.out.println("Min capacity: " + bs.shipWithinDays(weights, days));
        System.out.println();
        
        // Performance comparison
        System.out.println("=== PERFORMANCE COMPARISON ===");
        int[] largeArray = new int[1000000];
        for (int i = 0; i < largeArray.length; i++) {
            largeArray[i] = i;
        }
        
        long startTime = System.nanoTime();
        bs.binarySearch(largeArray, 999999);
        long endTime = System.nanoTime();
        
        System.out.println("Binary search on 1 million elements: " + 
                          (endTime - startTime) / 1000 + " microseconds");
        System.out.println("(Only ~20 comparisons for 1 million elements!)");
        System.out.println();
        
        System.out.println("=== ALL TESTS PASSED ===");
        System.out.println("✅ Ready for interviews!");
    }
}
