package arrays.questions;

/*
 * 6. MERGE SORTED ARRAY (LeetCode 88)
 *
 * Problem Statement:
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
 * and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
 * Merge nums2 into nums1 as one sorted array. The first m elements of nums1 are the elements
 * that should be merged, and the last n elements are set to 0 and should be ignored.
 * nums1 has a size of m + n, so it has enough space to hold additional elements from nums2.
 *
 * Conceptual Understanding:
 * - Merge two sorted arrays in-place
 * - nums1 has enough space (size m+n)
 * - First m elements of nums1 are valid, last n are ignored (usually 0s)
 * - Time: O(m+n), Space: O(1)
 * - Start from end to avoid overwriting
 * - Three pointers: i for nums1, j for nums2, k for merged position
 *
 * Time Complexity: O(m+n)
 * Space Complexity: O(1)
 */

class MergeSortedArray6 {

    // Method 1: Three pointers from end (most efficient)
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int i = m - 1; // Last element of nums1's valid part
        int j = n - 1; // Last element of nums2
        int k = m + n - 1; // Last position in nums1

        // Merge from the end
        while (i >= 0 && j >= 0) {
            if (nums1[i] > nums2[j]) {
                nums1[k--] = nums1[i--];
            } else {
                nums1[k--] = nums2[j--];
            }
        }

        // Copy remaining elements from nums2 (if any)
        while (j >= 0) {
            nums1[k--] = nums2[j--];
        }

        // No need to copy remaining from nums1 as they're already in place
    }

    // Method 2: Two pointers with extra space
    public void mergeWithExtraSpace(int[] nums1, int m, int[] nums2, int n) {
        int[] temp = new int[m];
        System.arraycopy(nums1, 0, temp, 0, m);

        int i = 0, j = 0, k = 0;

        while (i < m && j < n) {
            if (temp[i] <= nums2[j]) {
                nums1[k++] = temp[i++];
            } else {
                nums1[k++] = nums2[j++];
            }
        }

        // Copy remaining elements
        while (i < m) {
            nums1[k++] = temp[i++];
        }
        while (j < n) {
            nums1[k++] = nums2[j++];
        }
    }

    // Method 3: Using System.arraycopy
    public void mergeWithArrayCopy(int[] nums1, int m, int[] nums2, int n) {
        System.arraycopy(nums2, 0, nums1, m, n);

        // Sort the entire array
        java.util.Arrays.sort(nums1);
    }

    // Method 4: Recursive merge (educational)
    public void mergeRecursive(int[] nums1, int m, int[] nums2, int n) {
        mergeHelper(nums1, 0, m - 1, nums2, 0, n - 1, nums1, 0);
    }

    private void mergeHelper(int[] nums1, int start1, int end1, int[] nums2, int start2, int end2, int[] result, int resultStart) {
        if (start1 > end1 && start2 > end2) {
            return;
        }

        if (start1 > end1) {
            // Copy remaining from nums2
            System.arraycopy(nums2, start2, result, resultStart, end2 - start2 + 1);
            return;
        }

        if (start2 > end2) {
            // Copy remaining from nums1
            System.arraycopy(nums1, start1, result, resultStart, end1 - start1 + 1);
            return;
        }

        if (nums1[start1] <= nums2[start2]) {
            result[resultStart] = nums1[start1];
            mergeHelper(nums1, start1 + 1, end1, nums2, start2, end2, result, resultStart + 1);
        } else {
            result[resultStart] = nums2[start2];
            mergeHelper(nums1, start1, end1, nums2, start2 + 1, end2, result, resultStart + 1);
        }
    }

    // Method 5: Using insertion sort approach
    public void mergeInsertion(int[] nums1, int m, int[] nums2, int n) {
        // Copy nums2 to end of nums1
        for (int i = 0; i < n; i++) {
            nums1[m + i] = nums2[i];
        }

        // Insertion sort
        for (int i = 1; i < m + n; i++) {
            int key = nums1[i];
            int j = i - 1;

            while (j >= 0 && nums1[j] > key) {
                nums1[j + 1] = nums1[j];
                j--;
            }
            nums1[j + 1] = key;
        }
    }

    // Method 6: Merge in-place without extra space (same as Method 1)
    public void mergeInPlace(int[] nums1, int m, int[] nums2, int n) {
        merge(nums1, m, nums2, n);
    }

    // Method 7: Handle duplicates properly
    public void mergeWithDuplicates(int[] nums1, int m, int[] nums2, int n) {
        // Same as standard merge - duplicates are handled naturally
        merge(nums1, m, nums2, n);
    }

    // Method 8: Merge k sorted arrays (generalization)
    public int[] mergeKSortedArrays(int[][] arrays) {
        if (arrays == null || arrays.length == 0) {
            return new int[0];
        }

        java.util.PriorityQueue<int[]> pq = new java.util.PriorityQueue<>(
            (a, b) -> Integer.compare(a[0], b[0])
        );

        int totalSize = 0;
        for (int[] array : arrays) {
            totalSize += array.length;
        }

        int[] result = new int[totalSize];
        int resultIndex = 0;

        // Add first element of each array to priority queue
        for (int i = 0; i < arrays.length; i++) {
            if (arrays[i].length > 0) {
                pq.offer(new int[]{arrays[i][0], i, 0}); // value, arrayIndex, elementIndex
            }
        }

        while (!pq.isEmpty()) {
            int[] current = pq.poll();
            result[resultIndex++] = current[0];

            int arrayIndex = current[1];
            int elementIndex = current[2];

            if (elementIndex + 1 < arrays[arrayIndex].length) {
                pq.offer(new int[]{arrays[arrayIndex][elementIndex + 1], arrayIndex, elementIndex + 1});
            }
        }

        return result;
    }

    // Method 9: Merge with custom comparator
    public void mergeWithComparator(int[] nums1, int m, int[] nums2, int n, java.util.Comparator<Integer> comparator) {
        int i = m - 1;
        int j = n - 1;
        int k = m + n - 1;

        while (i >= 0 && j >= 0) {
            if (comparator.compare(nums1[i], nums2[j]) >= 0) {
                nums1[k--] = nums1[i--];
            } else {
                nums1[k--] = nums2[j--];
            }
        }

        while (j >= 0) {
            nums1[k--] = nums2[j--];
        }
    }

    // Method 10: Merge intervals (related problem)
    public int[][] mergeIntervals(int[][] intervals) {
        if (intervals == null || intervals.length <= 1) {
            return intervals;
        }

        // Sort by start time
        java.util.Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));

        java.util.List<int[]> result = new java.util.ArrayList<>();
        int[] current = intervals[0];

        for (int i = 1; i < intervals.length; i++) {
            if (current[1] >= intervals[i][0]) {
                // Overlap - merge
                current[1] = Math.max(current[1], intervals[i][1]);
            } else {
                // No overlap - add current to result
                result.add(current);
                current = intervals[i];
            }
        }

        result.add(current);
        return result.toArray(new int[result.size()][]);
    }

    // Method 11: Merge two sorted linked lists (related)
    public class ListNode {
        int val;
        ListNode next;
        ListNode(int val) { this.val = val; }
    }

    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        if (l1 == null) return l2;
        if (l2 == null) return l1;

        if (l1.val <= l2.val) {
            l1.next = mergeTwoLists(l1.next, l2);
            return l1;
        } else {
            l2.next = mergeTwoLists(l1, l2.next);
            return l2;
        }
    }

    // Method 12: Iterative merge of linked lists
    public ListNode mergeTwoListsIterative(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode(0);
        ListNode current = dummy;

        while (l1 != null && l2 != null) {
            if (l1.val <= l2.val) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }

        if (l1 != null) {
            current.next = l1;
        }
        if (l2 != null) {
            current.next = l2;
        }

        return dummy.next;
    }

    // Test cases
    public static void main(String[] args) {
        MergeSortedArray6 solution = new MergeSortedArray6();

        // Test Case 1: Basic merge
        int[] nums1_1 = {1, 2, 3, 0, 0, 0};
        int[] nums2_1 = {2, 5, 6};
        solution.merge(nums1_1, 3, nums2_1, 3);
        System.out.print("Merged: ");
        for (int num : nums1_1) {
            System.out.print(num + " ");
        }
        System.out.println(); // Expected: [1, 2, 2, 3, 5, 6]

        // Test Case 2: nums1 has larger elements
        int[] nums1_2 = {4, 5, 6, 0, 0, 0};
        int[] nums2_2 = {1, 2, 3};
        solution.merge(nums1_2, 3, nums2_2, 3);
        System.out.print("Merged: ");
        for (int num : nums1_2) {
            System.out.print(num + " ");
        }
        System.out.println(); // Expected: [1, 2, 3, 4, 5, 6]

        // Test Case 3: Empty nums2
        int[] nums1_3 = {1, 2, 3};
        int[] nums2_3 = {};
        solution.merge(nums1_3, 3, nums2_3, 0);
        System.out.print("Merged: ");
        for (int num : nums1_3) {
            System.out.print(num + " ");
        }
        System.out.println(); // Expected: [1, 2, 3]

        // Test Case 4: Empty nums1
        int[] nums1_4 = {0, 0, 0};
        int[] nums2_4 = {1, 2, 3};
        solution.merge(nums1_4, 0, nums2_4, 3);
        System.out.print("Merged: ");
        for (int num : nums1_4) {
            System.out.print(num + " ");
        }
        System.out.println(); // Expected: [1, 2, 3]

        // Test Case 5: Performance comparison
        int[] large1 = new int[5000];
        int[] large2 = new int[5000];

        for (int i = 0; i < 5000; i++) {
            large1[i] = i * 2;
            large2[i] = i * 2 + 1;
        }

        long startTime, endTime;

        // Optimal merge
        int[] test1 = new int[10000];
        System.arraycopy(large1, 0, test1, 0, 5000);
        startTime = System.nanoTime();
        solution.merge(test1, 5000, large2, 5000);
        endTime = System.nanoTime();
        System.out.println("\nOptimal merge: " + (endTime - startTime) / 1000000 + " ms");

        // With extra space
        int[] test2 = new int[10000];
        System.arraycopy(large1, 0, test2, 0, 5000);
        startTime = System.nanoTime();
        solution.mergeWithExtraSpace(test2, 5000, large2, 5000);
        endTime = System.nanoTime();
        System.out.println("With extra space: " + (endTime - startTime) / 1000000 + " ms");

        // Test Case 6: With duplicates
        int[] nums1_6 = {1, 3, 5, 0, 0, 0};
        int[] nums2_6 = {2, 3, 4};
        solution.merge(nums1_6, 3, nums2_6, 3);
        System.out.print("With duplicates: ");
        for (int num : nums1_6) {
            System.out.print(num + " ");
        }
        System.out.println(); // Expected: [1, 2, 3, 3, 4, 5]

        // Test Case 7: Merge k sorted arrays
        int[][] kArrays = {{1, 4, 7}, {2, 5, 8}, {3, 6, 9}};
        int[] mergedK = solution.mergeKSortedArrays(kArrays);
        System.out.print("Merged k arrays: ");
        for (int num : mergedK) {
            System.out.print(num + " ");
        }
        System.out.println(); // Expected: [1, 2, 3, 4, 5, 6, 7, 8, 9]

        // Test Case 8: Merge intervals
        int[][] intervals = {{1, 3}, {2, 6}, {8, 10}, {15, 18}};
        int[][] mergedIntervals = solution.mergeIntervals(intervals);
        System.out.println("Merged intervals:");
        for (int[] interval : mergedIntervals) {
            System.out.println("[" + interval[0] + ", " + interval[1] + "]");
        }

        // Test Case 9: Edge cases
        System.out.println("\nEdge cases:");

        // Single elements
        int[] single1 = {1, 0};
        int[] single2 = {2};
        solution.merge(single1, 1, single2, 1);
        System.out.println("Single elements: [" + single1[0] + ", " + single1[1] + "]");

        // Large numbers
        int[] largeNums1 = {1000000, 0, 0};
        int[] largeNums2 = {500000, 1500000};
        solution.merge(largeNums1, 1, largeNums2, 2);
        System.out.print("Large numbers: ");
        for (int num : largeNums1) {
            System.out.print(num + " ");
        }
        System.out.println();

        // Test Case 10: Negative numbers
        int[] neg1 = {-3, -1, 0, 0, 0};
        int[] neg2 = {-2, 1, 2};
        solution.merge(neg1, 2, neg2, 3);
        System.out.print("Negative numbers: ");
        for (int num : neg1) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}