package heaps.questions;

/*
 * 3. KTH LARGEST ELEMENT (LeetCode 215)
 *
 * Problem Statement:
 * Given an integer array nums and an integer k, return the kth largest element in the array.
 * Note that it is the kth largest element in the sorted order, not the kth distinct element.
 *
 * Conceptual Understanding:
 * - Find the k-th largest element in an unsorted array
 * - Multiple approaches: sort and find, use heap, quick select
 * - Heap approach: maintain min-heap of size k for largest elements
 * - Quick select: partition-based algorithm, average O(n) time
 * - Sorting: O(n log n) time, simple but not optimal
 * - Key insight: for k largest, use min-heap; for k smallest, use max-heap
 *
 * Time Complexity: O(n log k) heap, O(n) quick select average, O(n log n) sort
 * Space Complexity: O(k) heap, O(1) quick select, O(1) sort
 */

import java.util.PriorityQueue;
import java.util.Arrays;
import java.util.Random;

class KthLargestElement3 {

    // Method 1: Using Min Heap (Priority Queue)
    public int findKthLargest(int[] nums, int k) {
        if (nums == null || nums.length == 0 || k <= 0 || k > nums.length) {
            throw new IllegalArgumentException("Invalid input");
        }

        // Min heap to keep track of k largest elements
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();

        for (int num : nums) {
            minHeap.offer(num);

            // If heap size exceeds k, remove smallest element
            if (minHeap.size() > k) {
                minHeap.poll();
            }
        }

        // Root of heap is the k-th largest element
        return minHeap.peek();
    }

    // Method 2: Using Max Heap (for k smallest)
    public int findKthSmallest(int[] nums, int k) {
        if (nums == null || nums.length == 0 || k <= 0 || k > nums.length) {
            throw new IllegalArgumentException("Invalid input");
        }

        // Max heap to keep track of k smallest elements
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a, b) -> b - a);

        for (int num : nums) {
            maxHeap.offer(num);

            // If heap size exceeds k, remove largest element
            if (maxHeap.size() > k) {
                maxHeap.poll();
            }
        }

        return maxHeap.peek();
    }

    // Method 3: Using Sorting
    public int findKthLargestSort(int[] nums, int k) {
        if (nums == null || nums.length == 0 || k <= 0 || k > nums.length) {
            throw new IllegalArgumentException("Invalid input");
        }

        Arrays.sort(nums);
        // k-th largest is at index n-k
        return nums[nums.length - k];
    }

    // Method 4: Quick Select Algorithm (average O(n) time)
    public int findKthLargestQuickSelect(int[] nums, int k) {
        if (nums == null || nums.length == 0 || k <= 0 || k > nums.length) {
            throw new IllegalArgumentException("Invalid input");
        }

        // Convert k-th largest to k-th smallest in sorted array
        // k-th largest = (n-k+1)-th smallest
        return quickSelect(nums, 0, nums.length - 1, nums.length - k);
    }

    private int quickSelect(int[] nums, int left, int right, int k) {
        if (left == right) {
            return nums[left];
        }

        // Random pivot for better average performance
        Random rand = new Random();
        int pivotIndex = left + rand.nextInt(right - left + 1);

        // Partition around pivot
        pivotIndex = partition(nums, left, right, pivotIndex);

        if (k == pivotIndex) {
            return nums[k];
        } else if (k < pivotIndex) {
            return quickSelect(nums, left, pivotIndex - 1, k);
        } else {
            return quickSelect(nums, pivotIndex + 1, right, k);
        }
    }

    private int partition(int[] nums, int left, int right, int pivotIndex) {
        int pivotValue = nums[pivotIndex];
        swap(nums, pivotIndex, right); // Move pivot to end

        int storeIndex = left;

        // Move all elements smaller than pivot to the left
        for (int i = left; i < right; i++) {
            if (nums[i] < pivotValue) {
                swap(nums, i, storeIndex);
                storeIndex++;
            }
        }

        // Move pivot to its final place
        swap(nums, storeIndex, right);
        return storeIndex;
    }

    // Method 5: Quick Select with median-of-three pivot
    public int findKthLargestMedianPivot(int[] nums, int k) {
        if (nums == null || nums.length == 0 || k <= 0 || k > nums.length) {
            throw new IllegalArgumentException("Invalid input");
        }

        return quickSelectMedian(nums, 0, nums.length - 1, nums.length - k);
    }

    private int quickSelectMedian(int[] nums, int left, int right, int k) {
        if (left == right) {
            return nums[left];
        }

        // Choose median-of-three as pivot
        int pivotIndex = medianOfThree(nums, left, right);

        pivotIndex = partition(nums, left, right, pivotIndex);

        if (k == pivotIndex) {
            return nums[k];
        } else if (k < pivotIndex) {
            return quickSelectMedian(nums, left, pivotIndex - 1, k);
        } else {
            return quickSelectMedian(nums, pivotIndex + 1, right, k);
        }
    }

    private int medianOfThree(int[] nums, int left, int right) {
        int mid = left + (right - left) / 2;

        if (nums[left] > nums[mid]) {
            swap(nums, left, mid);
        }
        if (nums[left] > nums[right]) {
            swap(nums, left, right);
        }
        if (nums[mid] > nums[right]) {
            swap(nums, mid, right);
        }

        return mid; // Return median index
    }

    // Method 6: Using counting sort for small range
    public int findKthLargestCounting(int[] nums, int k) {
        if (nums == null || nums.length == 0 || k <= 0 || k > nums.length) {
            throw new IllegalArgumentException("Invalid input");
        }

        // Find min and max to determine range
        int min = Arrays.stream(nums).min().getAsInt();
        int max = Arrays.stream(nums).max().getAsInt();

        // Use counting sort
        int[] count = new int[max - min + 1];

        for (int num : nums) {
            count[num - min]++;
        }

        // Find k-th largest
        int remaining = k;
        for (int i = count.length - 1; i >= 0; i--) {
            remaining -= count[i];
            if (remaining <= 0) {
                return i + min;
            }
        }

        throw new RuntimeException("Should not reach here");
    }

    // Method 7: Find all k largest elements
    public int[] findKLargest(int[] nums, int k) {
        if (nums == null || nums.length == 0 || k <= 0 || k > nums.length) {
            throw new IllegalArgumentException("Invalid input");
        }

        PriorityQueue<Integer> minHeap = new PriorityQueue<>();

        for (int num : nums) {
            minHeap.offer(num);
            if (minHeap.size() > k) {
                minHeap.poll();
            }
        }

        // Extract all elements from heap
        int[] result = new int[k];
        for (int i = k - 1; i >= 0; i--) {
            result[i] = minHeap.poll();
        }

        return result;
    }

    // Method 8: Find k-th largest with duplicates handling
    public int findKthLargestWithDuplicates(int[] nums, int k) {
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();

        for (int num : nums) {
            minHeap.offer(num);
            if (minHeap.size() > k) {
                minHeap.poll();
            }
        }

        return minHeap.peek();
    }

    // Method 9: Using Java's built-in PriorityQueue
    public int findKthLargestBuiltIn(int[] nums, int k) {
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        for (int num : nums) {
            pq.add(num);
            if (pq.size() > k) {
                pq.poll();
            }
        }
        return pq.peek();
    }

    // Method 10: Find k-th largest in stream (online algorithm)
    static class KthLargestStream {
        private PriorityQueue<Integer> minHeap;
        private int k;

        public KthLargestStream(int k, int[] nums) {
            this.k = k;
            minHeap = new PriorityQueue<>();

            for (int num : nums) {
                add(num);
            }
        }

        public int add(int val) {
            minHeap.offer(val);
            if (minHeap.size() > k) {
                minHeap.poll();
            }
            return minHeap.peek();
        }
    }

    // Helper method to swap elements
    private void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    // Test cases
    public static void main(String[] args) {
        KthLargestElement3 solution = new KthLargestElement3();
        int[] nums = {3, 2, 1, 5, 6, 4};
        int k = 2;

        // Test Case 1: Basic heap approach
        System.out.println("Array: " + Arrays.toString(nums));
        System.out.println(k + "th largest (heap): " + solution.findKthLargest(nums.clone(), k));

        // Test Case 2: Sorting approach
        System.out.println(k + "th largest (sort): " + solution.findKthLargestSort(nums.clone(), k));

        // Test Case 3: Quick select
        System.out.println(k + "th largest (quick select): " + solution.findKthLargestQuickSelect(nums.clone(), k));

        // Test Case 4: Median pivot quick select
        System.out.println(k + "th largest (median pivot): " + solution.findKthLargestMedianPivot(nums.clone(), k));

        // Test Case 5: Find k-th smallest
        System.out.println(k + "th smallest: " + solution.findKthSmallest(nums.clone(), k));

        // Test Case 6: Find all k largest
        int[] kLargest = solution.findKLargest(nums.clone(), k);
        System.out.println("All " + k + " largest: " + Arrays.toString(kLargest));

        // Test Case 7: Counting sort (for small range)
        int[] smallRange = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        System.out.println("3rd largest (counting): " + solution.findKthLargestCounting(smallRange, 3));

        // Test Case 8: Stream processing
        KthLargestStream kthLargest = new KthLargestStream(3, new int[]{4, 5, 8, 2});
        System.out.println("Initial 3rd largest: " + kthLargest.add(3)); // Should be 4
        System.out.println("After adding 5: " + kthLargest.add(5));     // Should be 5
        System.out.println("After adding 10: " + kthLargest.add(10));   // Should be 5
        System.out.println("After adding 9: " + kthLargest.add(9));     // Should be 8
        System.out.println("After adding 4: " + kthLargest.add(4));     // Should be 8

        // Test Case 9: Edge cases
        int[] single = {5};
        System.out.println("Single element, 1st largest: " + solution.findKthLargest(single, 1));

        int[] duplicates = {3, 3, 3, 3, 3};
        System.out.println("Duplicates, 2nd largest: " + solution.findKthLargest(duplicates, 2));

        int[] sorted = {1, 2, 3, 4, 5};
        System.out.println("Sorted array, 3rd largest: " + solution.findKthLargest(sorted, 3));
    }
}