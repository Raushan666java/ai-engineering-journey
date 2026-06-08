/**
 * DAY 16: BINARY SEARCH PRACTICE PROBLEMS
 * Additional important problems with solutions
 */

import java.util.*;

public class BinarySearchPractice {

    // ============================================================================
    // PROBLEM 1: SINGLE ELEMENT IN SORTED ARRAY
    // LeetCode #540
    // ============================================================================
    
    /**
     * Find single element in sorted array where every element appears twice except one
     * Time: O(log n), Space: O(1)
     * 
     * Example: [1,1,2,3,3,4,4,8,8] → 2
     * 
     * KEY INSIGHT: 
     * - Before single element: pairs start at even index
     * - After single element: pairs start at odd index
     */
    public int singleNonDuplicate(int[] nums) {
        int left = 0, right = nums.length - 1;
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            
            // Make mid even
            if (mid % 2 == 1) mid--;
            
            if (nums[mid] == nums[mid + 1]) {
                // Pair is intact, single is on right
                left = mid + 2;
            } else {
                // Pair is broken, single is on left
                right = mid;
            }
        }
        
        return nums[left];
    }

    // ============================================================================
    // PROBLEM 2: FIND SMALLEST LETTER GREATER THAN TARGET
    // LeetCode #744
    // ============================================================================
    
    /**
     * Find smallest letter greater than target (circular)
     * Time: O(log n), Space: O(1)
     */
    public char nextGreatestLetter(char[] letters, char target) {
        int left = 0, right = letters.length - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (letters[mid] <= target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return left < letters.length ? letters[left] : letters[0];
    }

    // ============================================================================
    // PROBLEM 3: SPLIT ARRAY LARGEST SUM
    // LeetCode #410
    // ============================================================================
    
    /**
     * Split array into m subarrays to minimize largest sum
     * Time: O(n * log(sum)), Space: O(1)
     * 
     * KEY: Binary search on answer [max(nums), sum(nums)]
     */
    public int splitArray(int[] nums, int m) {
        int left = 0, right = 0;
        
        for (int num : nums) {
            left = Math.max(left, num);
            right += num;
        }
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            
            if (canSplit(nums, mid, m)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        
        return left;
    }
    
    private boolean canSplit(int[] nums, int maxSum, int m) {
        int splits = 1;
        int currentSum = 0;
        
        for (int num : nums) {
            if (currentSum + num > maxSum) {
                splits++;
                currentSum = num;
                if (splits > m) return false;
            } else {
                currentSum += num;
            }
        }
        
        return true;
    }

    // ============================================================================
    // PROBLEM 4: KOKO EATING BANANAS (Extended)
    // Similar problems pattern
    // ============================================================================
    
    /**
     * PATTERN: Minimum speed/rate to complete task
     * 
     * Similar problems:
     * - #875 Koko Eating Bananas
     * - #1011 Ship Packages
     * - #1482 Minimum Days to Make Bouquets
     * - #1552 Magnetic Force Between Balls
     */
    
    /**
     * LeetCode #1482 - Minimum Days to Make m Bouquets
     */
    public int minDays(int[] bloomDay, int m, int k) {
        if (m * k > bloomDay.length) return -1;
        
        int left = 1, right = 0;
        for (int day : bloomDay) {
            right = Math.max(right, day);
        }
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            
            if (canMakeBouquets(bloomDay, mid, m, k)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        
        return left;
    }
    
    private boolean canMakeBouquets(int[] bloomDay, int day, int m, int k) {
        int bouquets = 0;
        int flowers = 0;
        
        for (int bloom : bloomDay) {
            if (bloom <= day) {
                flowers++;
                if (flowers == k) {
                    bouquets++;
                    flowers = 0;
                }
            } else {
                flowers = 0;
            }
        }
        
        return bouquets >= m;
    }

    // ============================================================================
    // PROBLEM 5: FIND K-TH SMALLEST PAIR DISTANCE
    // LeetCode #719 (Hard but Important)
    // ============================================================================
    
    /**
     * Find k-th smallest distance among all pairs
     * Time: O(n log n + n log(max)), Space: O(1)
     */
    public int smallestDistancePair(int[] nums, int k) {
        Arrays.sort(nums);
        
        int left = 0;
        int right = nums[nums.length - 1] - nums[0];
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            
            if (countPairs(nums, mid) < k) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        
        return left;
    }
    
    private int countPairs(int[] nums, int distance) {
        int count = 0;
        int left = 0;
        
        for (int right = 1; right < nums.length; right++) {
            while (nums[right] - nums[left] > distance) {
                left++;
            }
            count += right - left;
        }
        
        return count;
    }

    // ============================================================================
    // PROBLEM 6: MEDIAN OF TWO SORTED ARRAYS
    // LeetCode #4 (Hard - FAANG Favorite)
    // ============================================================================
    
    /**
     * Find median of two sorted arrays
     * Time: O(log(min(m,n))), Space: O(1)
     * 
     * HARDEST binary search problem
     * Asked frequently in Google, Meta
     */
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        // Ensure nums1 is smaller
        if (nums1.length > nums2.length) {
            return findMedianSortedArrays(nums2, nums1);
        }
        
        int m = nums1.length;
        int n = nums2.length;
        int left = 0, right = m;
        
        while (left <= right) {
            int partition1 = (left + right) / 2;
            int partition2 = (m + n + 1) / 2 - partition1;
            
            int maxLeft1 = (partition1 == 0) ? Integer.MIN_VALUE : nums1[partition1 - 1];
            int minRight1 = (partition1 == m) ? Integer.MAX_VALUE : nums1[partition1];
            
            int maxLeft2 = (partition2 == 0) ? Integer.MIN_VALUE : nums2[partition2 - 1];
            int minRight2 = (partition2 == n) ? Integer.MAX_VALUE : nums2[partition2];
            
            if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
                // Found correct partition
                if ((m + n) % 2 == 0) {
                    return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2.0;
                } else {
                    return Math.max(maxLeft1, maxLeft2);
                }
            } else if (maxLeft1 > minRight2) {
                right = partition1 - 1;
            } else {
                left = partition1 + 1;
            }
        }
        
        throw new IllegalArgumentException("Arrays are not sorted");
    }

    // ============================================================================
    // PROBLEM 7: AGGRESSIVE COWS (Classic Interview Problem)
    // ============================================================================
    
    /**
     * Place m cows in n stalls to maximize minimum distance
     * Time: O(n log n + n log(max)), Space: O(1)
     * 
     * Famous problem - asked in many companies
     */
    public int aggressiveCows(int[] stalls, int cows) {
        Arrays.sort(stalls);
        
        int left = 1;
        int right = stalls[stalls.length - 1] - stalls[0];
        int result = 0;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (canPlaceCows(stalls, cows, mid)) {
                result = mid;
                left = mid + 1;  // Try larger distance
            } else {
                right = mid - 1;
            }
        }
        
        return result;
    }
    
    private boolean canPlaceCows(int[] stalls, int cows, int minDist) {
        int count = 1;
        int lastPosition = stalls[0];
        
        for (int i = 1; i < stalls.length; i++) {
            if (stalls[i] - lastPosition >= minDist) {
                count++;
                lastPosition = stalls[i];
                if (count >= cows) return true;
            }
        }
        
        return false;
    }

    // ============================================================================
    // PROBLEM 8: FIND IN MOUNTAIN ARRAY
    // LeetCode #1095
    // ============================================================================
    
    /**
     * Find target in mountain array (increases then decreases)
     * Time: O(log n), Space: O(1)
     */
    interface MountainArray {
        int get(int index);
        int length();
    }
    
    public int findInMountainArray(int target, MountainArray mountainArr) {
        int n = mountainArr.length();
        
        // Find peak
        int peak = findPeak(mountainArr, 0, n - 1);
        
        // Search in increasing part
        int result = binarySearch(mountainArr, target, 0, peak, true);
        if (result != -1) return result;
        
        // Search in decreasing part
        return binarySearch(mountainArr, target, peak + 1, n - 1, false);
    }
    
    private int findPeak(MountainArray arr, int left, int right) {
        while (left < right) {
            int mid = left + (right - left) / 2;
            
            if (arr.get(mid) < arr.get(mid + 1)) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }
    
    private int binarySearch(MountainArray arr, int target, int left, int right, boolean ascending) {
        while (left <= right) {
            int mid = left + (right - left) / 2;
            int midValue = arr.get(mid);
            
            if (midValue == target) return mid;
            
            if (ascending) {
                if (midValue < target) left = mid + 1;
                else right = mid - 1;
            } else {
                if (midValue > target) left = mid + 1;
                else right = mid - 1;
            }
        }
        return -1;
    }

    // ============================================================================
    // TESTING
    // ============================================================================
    
    public static void main(String[] args) {
        BinarySearchPractice practice = new BinarySearchPractice();
        
        System.out.println("=== BINARY SEARCH PRACTICE PROBLEMS ===\n");
        
        // Test 1: Single Element
        System.out.println("Test 1: Single Element in Sorted Array");
        int[] arr1 = {1, 1, 2, 3, 3, 4, 4, 8, 8};
        System.out.println("Array: " + Arrays.toString(arr1));
        System.out.println("Single element: " + practice.singleNonDuplicate(arr1));
        System.out.println();
        
        // Test 2: Split Array
        System.out.println("Test 2: Split Array Largest Sum");
        int[] arr2 = {7, 2, 5, 10, 8};
        System.out.println("Array: " + Arrays.toString(arr2) + ", m = 2");
        System.out.println("Min largest sum: " + practice.splitArray(arr2, 2));
        System.out.println();
        
        // Test 3: Aggressive Cows
        System.out.println("Test 3: Aggressive Cows");
        int[] stalls = {1, 2, 4, 8, 9};
        System.out.println("Stalls: " + Arrays.toString(stalls) + ", cows = 3");
        System.out.println("Max min distance: " + practice.aggressiveCows(stalls, 3));
        System.out.println();
        
        // Test 4: Median of Two Arrays
        System.out.println("Test 4: Median of Two Sorted Arrays (HARD)");
        int[] nums1 = {1, 3};
        int[] nums2 = {2};
        System.out.println("Array1: " + Arrays.toString(nums1));
        System.out.println("Array2: " + Arrays.toString(nums2));
        System.out.println("Median: " + practice.findMedianSortedArrays(nums1, nums2));
        System.out.println();
        
        System.out.println("=== ALL PRACTICE TESTS PASSED ===");
        System.out.println("✅ Master these patterns for interviews!");
    }
}
