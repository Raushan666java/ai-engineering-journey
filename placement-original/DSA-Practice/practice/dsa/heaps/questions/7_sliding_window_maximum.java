package heaps.questions;

/*
 * 7. SLIDING WINDOW MAXIMUM (LeetCode 239)
 *
 * Problem Statement:
 * You are given an array of integers nums, there is a sliding window of size k which is moving
 * from the very left of the array to the very right. You can only see the k numbers in the window.
 * Each time the sliding window moves right by one position, return the max sliding window.
 *
 * Conceptual Understanding:
 * - Find maximum in each window of size k as window slides
 * - Multiple approaches: brute force, deque, heap
 * - Deque approach: maintain decreasing order, O(n) time
 * - Heap approach: max-heap with lazy deletion, O(n log n) time
 * - Key insight: deque stores indices, removes elements out of window or smaller than current
 * - Maintain deque with useful elements only
 *
 * Time Complexity: O(n) deque, O(n log n) heap, O(n*k) brute force
 * Space Complexity: O(k) deque, O(n) heap
 */

import java.util.*;

class SlidingWindowMaximum7 {

    // Method 1: Using Deque (Optimal - O(n) time)
    public int[] maxSlidingWindow(int[] nums, int k) {
        if (nums == null || nums.length == 0 || k <= 0) {
            return new int[0];
        }

        int n = nums.length;
        int[] result = new int[n - k + 1];

        // Deque stores indices, maintaining decreasing order of values
        Deque<Integer> deque = new LinkedList<>();

        for (int i = 0; i < n; i++) {
            // Remove elements outside the current window
            while (!deque.isEmpty() && deque.peekFirst() < i - k + 1) {
                deque.pollFirst();
            }

            // Remove elements smaller than current element (they won't be maximum)
            while (!deque.isEmpty() && nums[deque.peekLast()] <= nums[i]) {
                deque.pollLast();
            }

            // Add current element index
            deque.offerLast(i);

            // Add to result when window is complete
            if (i >= k - 1) {
                result[i - k + 1] = nums[deque.peekFirst()];
            }
        }

        return result;
    }

    // Method 2: Using Max Heap (Priority Queue)
    public int[] maxSlidingWindowHeap(int[] nums, int k) {
        if (nums == null || nums.length == 0 || k <= 0) {
            return new int[0];
        }

        int n = nums.length;
        int[] result = new int[n - k + 1];

        // Max heap with custom class to store value and index
        PriorityQueue<int[]> maxHeap = new PriorityQueue<>((a, b) -> b[0] - a[0]);

        for (int i = 0; i < n; i++) {
            // Add current element
            maxHeap.offer(new int[]{nums[i], i});

            // Remove elements outside current window
            while (!maxHeap.isEmpty() && maxHeap.peek()[1] <= i - k) {
                maxHeap.poll();
            }

            // Add to result when window is complete
            if (i >= k - 1) {
                result[i - k + 1] = maxHeap.peek()[0];
            }
        }

        return result;
    }

    // Method 3: Brute Force (O(n*k) time)
    public int[] maxSlidingWindowBrute(int[] nums, int k) {
        if (nums == null || nums.length == 0 || k <= 0) {
            return new int[0];
        }

        int n = nums.length;
        int[] result = new int[n - k + 1];

        for (int i = 0; i <= n - k; i++) {
            int max = Integer.MIN_VALUE;
            for (int j = i; j < i + k; j++) {
                max = Math.max(max, nums[j]);
            }
            result[i] = max;
        }

        return result;
    }

    // Method 4: Using TreeMap (for educational purposes)
    public int[] maxSlidingWindowTreeMap(int[] nums, int k) {
        if (nums == null || nums.length == 0 || k <= 0) {
            return new int[0];
        }

        int n = nums.length;
        int[] result = new int[n - k + 1];

        // TreeMap to maintain sorted order with frequencies
        TreeMap<Integer, Integer> window = new TreeMap<>();

        for (int i = 0; i < n; i++) {
            // Add current element
            window.put(nums[i], window.getOrDefault(nums[i], 0) + 1);

            // Remove element going out of window
            if (i >= k) {
                int removeVal = nums[i - k];
                window.put(removeVal, window.get(removeVal) - 1);
                if (window.get(removeVal) == 0) {
                    window.remove(removeVal);
                }
            }

            // Add to result when window is complete
            if (i >= k - 1) {
                result[i - k + 1] = window.lastKey();
            }
        }

        return result;
    }

    // Method 5: Segment Tree approach (advanced)
    static class SegmentTree {
        private int[] tree;
        private int n;

        public SegmentTree(int[] nums) {
            n = nums.length;
            tree = new int[4 * n];
            build(nums, 0, 0, n - 1);
        }

        private void build(int[] nums, int node, int start, int end) {
            if (start == end) {
                tree[node] = nums[start];
                return;
            }

            int mid = (start + end) / 2;
            build(nums, 2 * node + 1, start, mid);
            build(nums, 2 * node + 2, mid + 1, end);
            tree[node] = Math.max(tree[2 * node + 1], tree[2 * node + 2]);
        }

        public int query(int left, int right) {
            return query(0, 0, n - 1, left, right);
        }

        private int query(int node, int start, int end, int left, int right) {
            if (right < start || end < left) {
                return Integer.MIN_VALUE;
            }

            if (left <= start && end <= right) {
                return tree[node];
            }

            int mid = (start + end) / 2;
            int p1 = query(2 * node + 1, start, mid, left, right);
            int p2 = query(2 * node + 2, mid + 1, end, left, right);
            return Math.max(p1, p2);
        }
    }

    public int[] maxSlidingWindowSegmentTree(int[] nums, int k) {
        if (nums == null || nums.length == 0 || k <= 0) {
            return new int[0];
        }

        SegmentTree st = new SegmentTree(nums);
        int n = nums.length;
        int[] result = new int[n - k + 1];

        for (int i = 0; i <= n - k; i++) {
            result[i] = st.query(i, i + k - 1);
        }

        return result;
    }

    // Method 6: Sparse Table approach (preprocessing)
    static class SparseTable {
        private int[][] st;
        private int[] log;

        public SparseTable(int[] nums) {
            int n = nums.length;
            int maxLog = (int) (Math.log(n) / Math.log(2)) + 1;
            st = new int[n][maxLog];
            log = new int[n + 1];

            // Precompute log values
            log[1] = 0;
            for (int i = 2; i <= n; i++) {
                log[i] = log[i / 2] + 1;
            }

            // Build sparse table
            for (int i = 0; i < n; i++) {
                st[i][0] = nums[i];
            }

            for (int j = 1; j < maxLog; j++) {
                for (int i = 0; i + (1 << j) <= n; i++) {
                    st[i][j] = Math.max(st[i][j - 1], st[i + (1 << (j - 1))][j - 1]);
                }
            }
        }

        public int query(int left, int right) {
            int length = right - left + 1;
            int k = log[length];
            return Math.max(st[left][k], st[right - (1 << k) + 1][k]);
        }
    }

    public int[] maxSlidingWindowSparseTable(int[] nums, int k) {
        if (nums == null || nums.length == 0 || k <= 0) {
            return new int[0];
        }

        SparseTable st = new SparseTable(nums);
        int n = nums.length;
        int[] result = new int[n - k + 1];

        for (int i = 0; i <= n - k; i++) {
            result[i] = st.query(i, i + k - 1);
        }

        return result;
    }

    // Method 7: Two pass approach (find max from left and right)
    public int[] maxSlidingWindowTwoPass(int[] nums, int k) {
        if (nums == null || nums.length == 0 || k <= 0) {
            return new int[0];
        }

        int n = nums.length;
        int[] result = new int[n - k + 1];

        // Left pass: max from left to right
        int[] leftMax = new int[n];
        leftMax[0] = nums[0];
        for (int i = 1; i < n; i++) {
            leftMax[i] = (i % k == 0) ? nums[i] : Math.max(leftMax[i - 1], nums[i]);
        }

        // Right pass: max from right to left
        int[] rightMax = new int[n];
        rightMax[n - 1] = nums[n - 1];
        for (int i = n - 2; i >= 0; i--) {
            rightMax[i] = (i % k == k - 1) ? nums[i] : Math.max(rightMax[i + 1], nums[i]);
        }

        // Combine results
        for (int i = 0; i <= n - k; i++) {
            result[i] = Math.max(rightMax[i], leftMax[i + k - 1]);
        }

        return result;
    }

    // Method 8: Custom Deque implementation
    static class CustomDeque {
        private Deque<Integer> deque;

        public CustomDeque() {
            deque = new LinkedList<>();
        }

        public void add(int index, int[] nums) {
            // Remove elements smaller than current
            while (!deque.isEmpty() && nums[deque.peekLast()] <= nums[index]) {
                deque.pollLast();
            }
            deque.offerLast(index);
        }

        public void remove(int windowStart) {
            // Remove elements outside window
            while (!deque.isEmpty() && deque.peekFirst() < windowStart) {
                deque.pollFirst();
            }
        }

        public int getMax(int[] nums) {
            return nums[deque.peekFirst()];
        }

        public boolean isEmpty() {
            return deque.isEmpty();
        }
    }

    public int[] maxSlidingWindowCustomDeque(int[] nums, int k) {
        if (nums == null || nums.length == 0 || k <= 0) {
            return new int[0];
        }

        int n = nums.length;
        int[] result = new int[n - k + 1];
        CustomDeque cd = new CustomDeque();

        for (int i = 0; i < n; i++) {
            cd.add(i, nums);

            if (i >= k - 1) {
                cd.remove(i - k + 1);
                result[i - k + 1] = cd.getMax(nums);
            }
        }

        return result;
    }

    // Method 9: Handle edge cases
    public int[] maxSlidingWindowEdgeCases(int[] nums, int k) {
        if (nums == null || nums.length == 0) {
            return new int[0];
        }

        if (k <= 0) {
            return new int[0];
        }

        if (k == 1) {
            return Arrays.copyOf(nums, nums.length);
        }

        if (k >= nums.length) {
            int max = Arrays.stream(nums).max().getAsInt();
            return new int[]{max};
        }

        return maxSlidingWindow(nums, k);
    }

    // Method 10: Get all window maximums with indices
    public List<int[]> maxSlidingWindowWithIndices(int[] nums, int k) {
        if (nums == null || nums.length == 0 || k <= 0) {
            return new ArrayList<>();
        }

        List<int[]> result = new ArrayList<>();
        Deque<Integer> deque = new LinkedList<>();

        for (int i = 0; i < nums.length; i++) {
            // Remove out of window
            while (!deque.isEmpty() && deque.peekFirst() < i - k + 1) {
                deque.pollFirst();
            }

            // Remove smaller elements
            while (!deque.isEmpty() && nums[deque.peekLast()] <= nums[i]) {
                deque.pollLast();
            }

            deque.offerLast(i);

            // Add to result
            if (i >= k - 1) {
                int windowStart = i - k + 1;
                int maxIndex = deque.peekFirst();
                result.add(new int[]{windowStart, maxIndex, nums[maxIndex]});
            }
        }

        return result;
    }

    // Method 11: Count operations for analysis
    public static class OperationCount {
        int comparisons = 0;
        int additions = 0;
        int removals = 0;

        @Override
        public String toString() {
            return String.format("Comparisons: %d, Additions: %d, Removals: %d",
                               comparisons, additions, removals);
        }
    }

    public int[] maxSlidingWindowWithCount(int[] nums, int k, OperationCount count) {
        if (nums == null || nums.length == 0 || k <= 0) {
            return new int[0];
        }

        int n = nums.length;
        int[] result = new int[n - k + 1];
        Deque<Integer> deque = new LinkedList<>();

        for (int i = 0; i < n; i++) {
            // Remove out of window
            while (!deque.isEmpty() && deque.peekFirst() < i - k + 1) {
                deque.pollFirst();
                count.removals++;
            }

            // Remove smaller elements
            while (!deque.isEmpty() && nums[deque.peekLast()] <= nums[i]) {
                deque.pollLast();
                count.comparisons++;
                count.removals++;
            }

            if (!deque.isEmpty()) {
                count.comparisons++;
            }

            deque.offerLast(i);
            count.additions++;

            if (i >= k - 1) {
                result[i - k + 1] = nums[deque.peekFirst()];
            }
        }

        return result;
    }

    // Method 12: Performance comparison
    public static class PerformanceResult {
        String method;
        long timeMs;
        int[] result;

        public PerformanceResult(String method, long timeMs, int[] result) {
            this.method = method;
            this.timeMs = timeMs;
            this.result = result;
        }

        @Override
        public String toString() {
            return String.format("%s: %d ms", method, timeMs);
        }
    }

    public List<PerformanceResult> comparePerformance(int[] nums, int k) {
        List<PerformanceResult> results = new ArrayList<>();

        // Deque method
        long start = System.nanoTime();
        int[] dequeResult = maxSlidingWindow(nums.clone(), k);
        long dequeTime = (System.nanoTime() - start) / 1_000_000;
        results.add(new PerformanceResult("Deque", dequeTime, dequeResult));

        // Heap method
        start = System.nanoTime();
        int[] heapResult = maxSlidingWindowHeap(nums.clone(), k);
        long heapTime = (System.nanoTime() - start) / 1_000_000;
        results.add(new PerformanceResult("Heap", heapTime, heapResult));

        // Brute force
        start = System.nanoTime();
        int[] bruteResult = maxSlidingWindowBrute(nums.clone(), k);
        long bruteTime = (System.nanoTime() - start) / 1_000_000;
        results.add(new PerformanceResult("Brute Force", bruteTime, bruteResult));

        return results;
    }

    // Test cases
    public static void main(String[] args) {
        SlidingWindowMaximum7 solution = new SlidingWindowMaximum7();
        int[] nums = {1, 3, -1, -3, 5, 3, 6, 7};
        int k = 3;

        // Test Case 1: Deque approach
        System.out.println("Array: " + Arrays.toString(nums));
        System.out.println("Window size k = " + k);
        int[] result1 = solution.maxSlidingWindow(nums, k);
        System.out.println("Sliding window maximums (Deque): " + Arrays.toString(result1));

        // Test Case 2: Heap approach
        int[] result2 = solution.maxSlidingWindowHeap(nums, k);
        System.out.println("Sliding window maximums (Heap): " + Arrays.toString(result2));

        // Test Case 3: Brute force
        int[] result3 = solution.maxSlidingWindowBrute(nums, k);
        System.out.println("Sliding window maximums (Brute): " + Arrays.toString(result3));

        // Test Case 4: Segment tree
        int[] result4 = solution.maxSlidingWindowSegmentTree(nums, k);
        System.out.println("Sliding window maximums (Segment Tree): " + Arrays.toString(result4));

        // Test Case 5: Sparse table
        int[] result5 = solution.maxSlidingWindowSparseTable(nums, k);
        System.out.println("Sliding window maximums (Sparse Table): " + Arrays.toString(result5));

        // Test Case 6: Two pass
        int[] result6 = solution.maxSlidingWindowTwoPass(nums, k);
        System.out.println("Sliding window maximums (Two Pass): " + Arrays.toString(result6));

        // Test Case 7: With indices
        List<int[]> withIndices = solution.maxSlidingWindowWithIndices(nums, k);
        System.out.println("With indices (start, maxIndex, maxValue):");
        for (int[] info : withIndices) {
            System.out.println("  Window [" + info[0] + ".." + (info[0] + k - 1) + "]: max at index " + info[1] + " = " + info[2]);
        }

        // Test Case 8: Operation count
        OperationCount count = new OperationCount();
        solution.maxSlidingWindowWithCount(nums, k, count);
        System.out.println("Operations: " + count);

        // Test Case 9: Performance comparison
        System.out.println("\nPerformance comparison:");
        int[] largeArray = new int[10000];
        Random rand = new Random();
        for (int i = 0; i < largeArray.length; i++) {
            largeArray[i] = rand.nextInt(1000);
        }

        List<PerformanceResult> perfResults = solution.comparePerformance(largeArray, 100);
        for (PerformanceResult result : perfResults) {
            System.out.println(result);
        }

        // Test Case 10: Edge cases
        System.out.println("\nEdge cases:");

        // k = 1
        int[] k1Result = solution.maxSlidingWindowEdgeCases(nums, 1);
        System.out.println("k=1: " + Arrays.toString(k1Result));

        // k = n
        int[] knResult = solution.maxSlidingWindowEdgeCases(nums, nums.length);
        System.out.println("k=n: " + Arrays.toString(knResult));

        // Empty array
        int[] emptyResult = solution.maxSlidingWindowEdgeCases(new int[0], 3);
        System.out.println("Empty array: " + Arrays.toString(emptyResult));

        // Single element
        int[] singleResult = solution.maxSlidingWindowEdgeCases(new int[]{5}, 1);
        System.out.println("Single element: " + Arrays.toString(singleResult));

        // Test Case 11: All same elements
        int[] sameElements = {3, 3, 3, 3, 3};
        int[] sameResult = solution.maxSlidingWindow(sameElements, 2);
        System.out.println("All same elements: " + Arrays.toString(sameResult));

        // Test Case 12: Decreasing order
        int[] decreasing = {9, 8, 7, 6, 5, 4, 3, 2, 1};
        int[] decResult = solution.maxSlidingWindow(decreasing, 3);
        System.out.println("Decreasing order: " + Arrays.toString(decResult));
    }
}