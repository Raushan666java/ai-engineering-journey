/**
 * Day 46: Segment Tree & Fenwick Tree - Advanced Range Query Optimization
 * 
 * This file contains comprehensive implementations covering:
 * 1. Segment Tree (Range Sum, Range Min/Max)
 * 2. Fenwick Tree (Binary Indexed Tree)
 * 3. Lazy Propagation Segment Tree
 * 4. 2D Fenwick Tree
 * 5. Range Sum Query - Mutable
 * 6. Count of Smaller Numbers After Self
 * 7. Range Sum Query 2D - Mutable
 * 8. Count of Range Sum
 * 9. Falling Squares
 * 10. Longest Increasing Subsequence II
 * 
 * Each problem includes:
 * - Multiple solution approaches
 * - Detailed complexity analysis
 * - Comprehensive test cases
 * - Real-world applications
 * 
 * @author Placement Preparation
 * @version 1.0
 */

package dsa.day46;

import java.util.*;

public class SegmentTreeFenwickTree {
    
    // ==================== PROBLEM 1: RANGE SUM QUERY - MUTABLE ====================
    
    /**
     * Problem 1: Range Sum Query - Mutable
     * 
     * Implement NumArray class with:
     * - update(index, val): Update nums[index] = val
     * - sumRange(left, right): Return sum of nums[left..right]
     * 
     * LeetCode #307
     * 
     * Time: O(log n) for both operations
     * Space: O(n)
     */
    
    // Approach 1: Segment Tree
    static class NumArraySegmentTree {
        private int[] tree;
        private int n;
        
        public NumArraySegmentTree(int[] nums) {
            n = nums.length;
            tree = new int[4 * n];
            if (n > 0) {
                buildTree(nums, 0, 0, n - 1);
            }
        }
        
        private void buildTree(int[] nums, int node, int start, int end) {
            if (start == end) {
                tree[node] = nums[start];
                return;
            }
            
            int mid = start + (end - start) / 2;
            int leftChild = 2 * node + 1;
            int rightChild = 2 * node + 2;
            
            buildTree(nums, leftChild, start, mid);
            buildTree(nums, rightChild, mid + 1, end);
            
            tree[node] = tree[leftChild] + tree[rightChild];
        }
        
        public void update(int index, int val) {
            updateTree(0, 0, n - 1, index, val);
        }
        
        private void updateTree(int node, int start, int end, int idx, int val) {
            if (start == end) {
                tree[node] = val;
                return;
            }
            
            int mid = start + (end - start) / 2;
            int leftChild = 2 * node + 1;
            int rightChild = 2 * node + 2;
            
            if (idx <= mid) {
                updateTree(leftChild, start, mid, idx, val);
            } else {
                updateTree(rightChild, mid + 1, end, idx, val);
            }
            
            tree[node] = tree[leftChild] + tree[rightChild];
        }
        
        public int sumRange(int left, int right) {
            return queryTree(0, 0, n - 1, left, right);
        }
        
        private int queryTree(int node, int start, int end, int l, int r) {
            // No overlap
            if (r < start || end < l) {
                return 0;
            }
            
            // Complete overlap
            if (l <= start && end <= r) {
                return tree[node];
            }
            
            // Partial overlap
            int mid = start + (end - start) / 2;
            int leftSum = queryTree(2 * node + 1, start, mid, l, r);
            int rightSum = queryTree(2 * node + 2, mid + 1, end, l, r);
            
            return leftSum + rightSum;
        }
    }
    
    // Approach 2: Fenwick Tree (Binary Indexed Tree)
    static class NumArrayFenwickTree {
        private int[] nums;
        private int[] tree;
        private int n;
        
        public NumArrayFenwickTree(int[] nums) {
            this.nums = nums.clone();
            n = nums.length;
            tree = new int[n + 1];
            
            // Build Fenwick tree
            for (int i = 0; i < n; i++) {
                updateBIT(i, nums[i]);
            }
        }
        
        private void updateBIT(int index, int delta) {
            index++; // 1-indexed
            while (index <= n) {
                tree[index] += delta;
                index += index & (-index); // Add last set bit
            }
        }
        
        public void update(int index, int val) {
            int delta = val - nums[index];
            nums[index] = val;
            updateBIT(index, delta);
        }
        
        private int queryBIT(int index) {
            index++; // 1-indexed
            int sum = 0;
            while (index > 0) {
                sum += tree[index];
                index -= index & (-index); // Remove last set bit
            }
            return sum;
        }
        
        public int sumRange(int left, int right) {
            return queryBIT(right) - (left > 0 ? queryBIT(left - 1) : 0);
        }
    }
    
    // ==================== PROBLEM 2: RANGE MINIMUM QUERY ====================
    
    /**
     * Problem 2: Range Minimum Query
     * 
     * Support:
     * - update(index, val): Update array[index] = val
     * - rangeMin(left, right): Return minimum in range [left, right]
     * 
     * Time: O(log n) for both operations
     * Space: O(n)
     */
    static class RangeMinQuery {
        private int[] tree;
        private int n;
        
        public RangeMinQuery(int[] nums) {
            n = nums.length;
            tree = new int[4 * n];
            if (n > 0) {
                buildTree(nums, 0, 0, n - 1);
            }
        }
        
        private void buildTree(int[] nums, int node, int start, int end) {
            if (start == end) {
                tree[node] = nums[start];
                return;
            }
            
            int mid = start + (end - start) / 2;
            buildTree(nums, 2 * node + 1, start, mid);
            buildTree(nums, 2 * node + 2, mid + 1, end);
            
            tree[node] = Math.min(tree[2 * node + 1], tree[2 * node + 2]);
        }
        
        public void update(int index, int val) {
            updateTree(0, 0, n - 1, index, val);
        }
        
        private void updateTree(int node, int start, int end, int idx, int val) {
            if (start == end) {
                tree[node] = val;
                return;
            }
            
            int mid = start + (end - start) / 2;
            if (idx <= mid) {
                updateTree(2 * node + 1, start, mid, idx, val);
            } else {
                updateTree(2 * node + 2, mid + 1, end, idx, val);
            }
            
            tree[node] = Math.min(tree[2 * node + 1], tree[2 * node + 2]);
        }
        
        public int rangeMin(int left, int right) {
            return queryTree(0, 0, n - 1, left, right);
        }
        
        private int queryTree(int node, int start, int end, int l, int r) {
            if (r < start || end < l) {
                return Integer.MAX_VALUE;
            }
            
            if (l <= start && end <= r) {
                return tree[node];
            }
            
            int mid = start + (end - start) / 2;
            int leftMin = queryTree(2 * node + 1, start, mid, l, r);
            int rightMin = queryTree(2 * node + 2, mid + 1, end, l, r);
            
            return Math.min(leftMin, rightMin);
        }
    }
    
    // ==================== PROBLEM 3: COUNT OF SMALLER NUMBERS AFTER SELF ====================
    
    /**
     * Problem 3: Count of Smaller Numbers After Self
     * 
     * For each nums[i], count how many nums[j] where j > i and nums[j] < nums[i].
     * 
     * Example:
     * Input: nums = [5,2,6,1]
     * Output: [2,1,1,0]
     * Explanation: For 5: 2 and 1 are smaller; For 2: 1 is smaller; For 6: 1 is smaller; For 1: none
     * 
     * LeetCode #315
     * 
     * Time: O(n log n), Space: O(n)
     */
    
    // Approach 1: Fenwick Tree with Coordinate Compression
    public static List<Integer> countSmaller(int[] nums) {
        int n = nums.length;
        List<Integer> result = new ArrayList<>(Collections.nCopies(n, 0));
        
        // Coordinate compression
        int[] sorted = nums.clone();
        Arrays.sort(sorted);
        Map<Integer, Integer> compressed = new HashMap<>();
        for (int i = 0; i < n; i++) {
            compressed.put(sorted[i], i + 1); // 1-indexed
        }
        
        FenwickTreeHelper bit = new FenwickTreeHelper(n);
        
        // Process from right to left
        for (int i = n - 1; i >= 0; i--) {
            int rank = compressed.get(nums[i]);
            result.set(i, bit.query(rank - 1)); // Count smaller
            bit.update(rank, 1); // Add current element
        }
        
        return result;
    }
    
    static class FenwickTreeHelper {
        private int[] tree;
        private int n;
        
        FenwickTreeHelper(int size) {
            n = size;
            tree = new int[n + 1];
        }
        
        void update(int i, int delta) {
            while (i <= n) {
                tree[i] += delta;
                i += i & (-i);
            }
        }
        
        int query(int i) {
            int sum = 0;
            while (i > 0) {
                sum += tree[i];
                i -= i & (-i);
            }
            return sum;
        }
    }
    
    // Approach 2: Merge Sort (Alternative)
    public static List<Integer> countSmallerMergeSort(int[] nums) {
        int n = nums.length;
        int[] result = new int[n];
        int[] indices = new int[n];
        
        for (int i = 0; i < n; i++) {
            indices[i] = i;
        }
        
        mergeSortCount(nums, indices, result, 0, n - 1);
        
        List<Integer> resultList = new ArrayList<>();
        for (int count : result) {
            resultList.add(count);
        }
        return resultList;
    }
    
    private static void mergeSortCount(int[] nums, int[] indices, int[] result, 
                                       int left, int right) {
        if (left >= right) return;
        
        int mid = left + (right - left) / 2;
        mergeSortCount(nums, indices, result, left, mid);
        mergeSortCount(nums, indices, result, mid + 1, right);
        
        merge(nums, indices, result, left, mid, right);
    }
    
    private static void merge(int[] nums, int[] indices, int[] result, 
                              int left, int mid, int right) {
        int[] temp = new int[right - left + 1];
        int i = left, j = mid + 1, k = 0;
        int rightCount = 0;
        
        while (i <= mid && j <= right) {
            if (nums[indices[j]] < nums[indices[i]]) {
                rightCount++;
                temp[k++] = indices[j++];
            } else {
                result[indices[i]] += rightCount;
                temp[k++] = indices[i++];
            }
        }
        
        while (i <= mid) {
            result[indices[i]] += rightCount;
            temp[k++] = indices[i++];
        }
        
        while (j <= right) {
            temp[k++] = indices[j++];
        }
        
        System.arraycopy(temp, 0, indices, left, temp.length);
    }
    
    // ==================== PROBLEM 4: RANGE SUM QUERY 2D - MUTABLE ====================
    
    /**
     * Problem 4: Range Sum Query 2D - Mutable
     * 
     * Implement NumMatrix class:
     * - update(row, col, val): Update matrix[row][col] = val
     * - sumRegion(r1, c1, r2, c2): Return sum of rectangle
     * 
     * LeetCode #308
     * 
     * Time: O(log m * log n) for both operations
     * Space: O(m * n)
     */
    static class NumMatrix {
        private int[][] matrix;
        private int[][] tree;
        private int m, n;
        
        public NumMatrix(int[][] matrix) {
            if (matrix.length == 0 || matrix[0].length == 0) return;
            
            this.m = matrix.length;
            this.n = matrix[0].length;
            this.matrix = new int[m][n];
            this.tree = new int[m + 1][n + 1];
            
            for (int i = 0; i < m; i++) {
                for (int j = 0; j < n; j++) {
                    update(i, j, matrix[i][j]);
                }
            }
        }
        
        public void update(int row, int col, int val) {
            if (m == 0 || n == 0) return;
            
            int delta = val - matrix[row][col];
            matrix[row][col] = val;
            
            for (int i = row + 1; i <= m; i += i & (-i)) {
                for (int j = col + 1; j <= n; j += j & (-j)) {
                    tree[i][j] += delta;
                }
            }
        }
        
        public int sumRegion(int row1, int col1, int row2, int col2) {
            if (m == 0 || n == 0) return 0;
            
            return query(row2, col2) 
                 - query(row1 - 1, col2) 
                 - query(row2, col1 - 1) 
                 + query(row1 - 1, col1 - 1);
        }
        
        private int query(int row, int col) {
            if (row < 0 || col < 0) return 0;
            
            int sum = 0;
            for (int i = row + 1; i > 0; i -= i & (-i)) {
                for (int j = col + 1; j > 0; j -= j & (-j)) {
                    sum += tree[i][j];
                }
            }
            return sum;
        }
    }
    
    // ==================== PROBLEM 5: COUNT OF RANGE SUM ====================
    
    /**
     * Problem 5: Count of Range Sum
     * 
     * Given array nums, return count of range sums in [lower, upper].
     * Range sum S(i, j) = sum of elements nums[i..j] where 0 <= i <= j < n.
     * 
     * Example:
     * Input: nums = [-2,5,-1], lower = -2, upper = 2
     * Output: 3
     * Explanation: Ranges are [0,0], [2,2], [0,2]
     * 
     * LeetCode #327
     * 
     * Time: O(n log n), Space: O(n)
     */
    public static int countRangeSum(int[] nums, int lower, int upper) {
        int n = nums.length;
        long[] prefixSum = new long[n + 1];
        
        for (int i = 0; i < n; i++) {
            prefixSum[i + 1] = prefixSum[i] + nums[i];
        }
        
        return countRangeSumHelper(prefixSum, 0, n, lower, upper);
    }
    
    private static int countRangeSumHelper(long[] sums, int left, int right, 
                                           int lower, int upper) {
        if (right - left <= 1) return 0;
        
        int mid = left + (right - left) / 2;
        int count = countRangeSumHelper(sums, left, mid, lower, upper) +
                    countRangeSumHelper(sums, mid, right, lower, upper);
        
        // Count valid ranges crossing mid
        int j = mid, k = mid, t = mid;
        long[] temp = new long[right - left];
        int p = 0;
        
        for (int i = left; i < mid; i++) {
            // Find range [j, k) where sums[k] - sums[i] is in [lower, upper]
            while (j < right && sums[j] - sums[i] < lower) j++;
            while (k < right && sums[k] - sums[i] <= upper) k++;
            count += k - j;
            
            // Merge for sorting
            while (t < right && sums[t] < sums[i]) {
                temp[p++] = sums[t++];
            }
            temp[p++] = sums[i];
        }
        
        System.arraycopy(temp, 0, sums, left, p);
        
        return count;
    }
    
    // ==================== PROBLEM 6: SEGMENT TREE WITH LAZY PROPAGATION ====================
    
    /**
     * Segment Tree with Lazy Propagation
     * 
     * Supports:
     * - Range update: Add value to all elements in range
     * - Range query: Get sum of range
     * 
     * Time: O(log n) for both operations
     * Space: O(n)
     */
    static class LazySegmentTree {
        private long[] tree;
        private long[] lazy;
        private int n;
        
        public LazySegmentTree(int[] nums) {
            n = nums.length;
            tree = new long[4 * n];
            lazy = new long[4 * n];
            if (n > 0) {
                build(nums, 0, 0, n - 1);
            }
        }
        
        private void build(int[] nums, int node, int start, int end) {
            if (start == end) {
                tree[node] = nums[start];
                return;
            }
            
            int mid = start + (end - start) / 2;
            build(nums, 2 * node + 1, start, mid);
            build(nums, 2 * node + 2, mid + 1, end);
            tree[node] = tree[2 * node + 1] + tree[2 * node + 2];
        }
        
        private void push(int node, int start, int end) {
            if (lazy[node] != 0) {
                tree[node] += (end - start + 1) * lazy[node];
                
                if (start != end) {
                    lazy[2 * node + 1] += lazy[node];
                    lazy[2 * node + 2] += lazy[node];
                }
                
                lazy[node] = 0;
            }
        }
        
        public void rangeUpdate(int left, int right, int val) {
            updateRange(0, 0, n - 1, left, right, val);
        }
        
        private void updateRange(int node, int start, int end, int l, int r, int val) {
            push(node, start, end);
            
            if (r < start || end < l) return;
            
            if (l <= start && end <= r) {
                lazy[node] += val;
                push(node, start, end);
                return;
            }
            
            int mid = start + (end - start) / 2;
            updateRange(2 * node + 1, start, mid, l, r, val);
            updateRange(2 * node + 2, mid + 1, end, l, r, val);
            
            push(2 * node + 1, start, mid);
            push(2 * node + 2, mid + 1, end);
            
            tree[node] = tree[2 * node + 1] + tree[2 * node + 2];
        }
        
        public long rangeQuery(int left, int right) {
            return queryRange(0, 0, n - 1, left, right);
        }
        
        private long queryRange(int node, int start, int end, int l, int r) {
            if (r < start || end < l) return 0;
            
            push(node, start, end);
            
            if (l <= start && end <= r) {
                return tree[node];
            }
            
            int mid = start + (end - start) / 2;
            long leftSum = queryRange(2 * node + 1, start, mid, l, r);
            long rightSum = queryRange(2 * node + 2, mid + 1, end, l, r);
            
            return leftSum + rightSum;
        }
    }
    
    // ==================== PROBLEM 7: LONGEST INCREASING SUBSEQUENCE II ====================
    
    /**
     * Problem 7: Longest Increasing Subsequence II
     * 
     * Find length of longest strictly increasing subsequence where
     * for consecutive elements nums[i] and nums[j]: nums[j] - nums[i] <= k
     * 
     * Example:
     * Input: nums = [4,2,1,4,3,4,5,8,15], k = 3
     * Output: 5
     * Explanation: [1,3,4,5,8]
     * 
     * LeetCode #2407
     * 
     * Time: O(n log m) where m = max(nums)
     * Space: O(m)
     */
    public static int lengthOfLIS(int[] nums, int k) {
        int maxVal = 0;
        for (int num : nums) {
            maxVal = Math.max(maxVal, num);
        }
        
        SegmentTreeMax segTree = new SegmentTreeMax(maxVal + 1);
        
        for (int num : nums) {
            // Query max LIS ending in range [num-k, num-1]
            int left = Math.max(1, num - k);
            int right = num - 1;
            int maxLIS = segTree.rangeMax(left, right);
            
            // Update LIS ending at num
            segTree.update(num, maxLIS + 1);
        }
        
        return segTree.rangeMax(1, maxVal);
    }
    
    static class SegmentTreeMax {
        private int[] tree;
        private int n;
        
        SegmentTreeMax(int size) {
            n = size;
            tree = new int[4 * n];
        }
        
        void update(int index, int val) {
            updateTree(0, 0, n - 1, index, val);
        }
        
        private void updateTree(int node, int start, int end, int idx, int val) {
            if (start == end) {
                tree[node] = Math.max(tree[node], val);
                return;
            }
            
            int mid = start + (end - start) / 2;
            if (idx <= mid) {
                updateTree(2 * node + 1, start, mid, idx, val);
            } else {
                updateTree(2 * node + 2, mid + 1, end, idx, val);
            }
            
            tree[node] = Math.max(tree[2 * node + 1], tree[2 * node + 2]);
        }
        
        int rangeMax(int left, int right) {
            return queryTree(0, 0, n - 1, left, right);
        }
        
        private int queryTree(int node, int start, int end, int l, int r) {
            if (r < start || end < l) return 0;
            if (l <= start && end <= r) return tree[node];
            
            int mid = start + (end - start) / 2;
            int leftMax = queryTree(2 * node + 1, start, mid, l, r);
            int rightMax = queryTree(2 * node + 2, mid + 1, end, l, r);
            
            return Math.max(leftMax, rightMax);
        }
    }
    
    // ==================== PROBLEM 8: FALLING SQUARES ====================
    
    /**
     * Problem 8: Falling Squares
     * 
     * Squares fall one at a time onto x-axis. Return list of max heights after each square.
     * 
     * Example:
     * Input: positions = [[1,2],[2,3],[6,1]]
     * Output: [2,5,5]
     * 
     * LeetCode #699
     * 
     * Time: O(n² log n), Space: O(n)
     */
    public static List<Integer> fallingSquares(int[][] positions) {
        List<Integer> result = new ArrayList<>();
        List<int[]> intervals = new ArrayList<>();
        
        int maxHeight = 0;
        
        for (int[] pos : positions) {
            int left = pos[0];
            int size = pos[1];
            int right = left + size;
            
            // Find max height in overlapping range
            int baseHeight = 0;
            for (int[] interval : intervals) {
                int l = interval[0], r = interval[1], h = interval[2];
                if (left < r && right > l) {
                    baseHeight = Math.max(baseHeight, h);
                }
            }
            
            int newHeight = baseHeight + size;
            intervals.add(new int[]{left, right, newHeight});
            maxHeight = Math.max(maxHeight, newHeight);
            result.add(maxHeight);
        }
        
        return result;
    }
    
    // ==================== TEST CASES ====================
    
    public static void main(String[] args) {
        System.out.println("=== DAY 46: SEGMENT TREE & FENWICK TREE - 10 PROBLEMS ===\n");
        
        // Problem 1: Range Sum Query - Mutable (Segment Tree)
        System.out.println("Problem 1a: Range Sum Query - Mutable (Segment Tree)");
        int[] nums1 = {1, 3, 5};
        NumArraySegmentTree numArray1 = new NumArraySegmentTree(nums1);
        System.out.println("Initial array: [1,3,5]");
        System.out.println("sumRange(0, 2): " + numArray1.sumRange(0, 2)); // 9
        numArray1.update(1, 2);
        System.out.println("After update(1, 2)");
        System.out.println("sumRange(0, 2): " + numArray1.sumRange(0, 2)); // 8
        System.out.println();
        
        // Problem 1b: Range Sum Query - Mutable (Fenwick Tree)
        System.out.println("Problem 1b: Range Sum Query - Mutable (Fenwick Tree)");
        int[] nums2 = {1, 3, 5};
        NumArrayFenwickTree numArray2 = new NumArrayFenwickTree(nums2);
        System.out.println("Initial array: [1,3,5]");
        System.out.println("sumRange(0, 2): " + numArray2.sumRange(0, 2)); // 9
        numArray2.update(1, 2);
        System.out.println("After update(1, 2)");
        System.out.println("sumRange(0, 2): " + numArray2.sumRange(0, 2)); // 8
        System.out.println();
        
        // Problem 2: Range Minimum Query
        System.out.println("Problem 2: Range Minimum Query");
        int[] nums3 = {2, 5, 1, 7, 3};
        RangeMinQuery rmq = new RangeMinQuery(nums3);
        System.out.println("Array: [2,5,1,7,3]");
        System.out.println("rangeMin(1, 3): " + rmq.rangeMin(1, 3)); // 1
        rmq.update(2, 4);
        System.out.println("After update(2, 4)");
        System.out.println("rangeMin(1, 3): " + rmq.rangeMin(1, 3)); // 4
        System.out.println();
        
        // Problem 3: Count of Smaller Numbers After Self
        System.out.println("Problem 3: Count of Smaller Numbers After Self");
        int[] nums4 = {5, 2, 6, 1};
        System.out.println("Input: [5,2,6,1]");
        System.out.println("Output (BIT): " + countSmaller(nums4));
        System.out.println("Output (MergeSort): " + countSmallerMergeSort(nums4));
        System.out.println("Expected: [2,1,1,0]\n");
        
        // Problem 4: Range Sum Query 2D - Mutable
        System.out.println("Problem 4: Range Sum Query 2D - Mutable");
        int[][] matrix = {{3, 0, 1, 4, 2}, {5, 6, 3, 2, 1}, {1, 2, 0, 1, 5}, 
                          {4, 1, 0, 1, 7}, {1, 0, 3, 0, 5}};
        NumMatrix numMatrix = new NumMatrix(matrix);
        System.out.println("sumRegion(2,1,4,3): " + numMatrix.sumRegion(2, 1, 4, 3)); // 8
        numMatrix.update(3, 2, 2);
        System.out.println("After update(3,2,2)");
        System.out.println("sumRegion(2,1,4,3): " + numMatrix.sumRegion(2, 1, 4, 3)); // 10
        System.out.println();
        
        // Problem 5: Count of Range Sum
        System.out.println("Problem 5: Count of Range Sum");
        int[] nums5 = {-2, 5, -1};
        System.out.println("Input: [-2,5,-1], lower=-2, upper=2");
        System.out.println("Output: " + countRangeSum(nums5, -2, 2));
        System.out.println("Expected: 3\n");
        
        // Problem 6: Lazy Segment Tree
        System.out.println("Problem 6: Segment Tree with Lazy Propagation");
        int[] nums6 = {1, 2, 3, 4, 5};
        LazySegmentTree lazyTree = new LazySegmentTree(nums6);
        System.out.println("Initial array: [1,2,3,4,5]");
        System.out.println("rangeQuery(0, 4): " + lazyTree.rangeQuery(0, 4)); // 15
        lazyTree.rangeUpdate(1, 3, 2);
        System.out.println("After rangeUpdate(1,3,2): add 2 to indices 1-3");
        System.out.println("rangeQuery(0, 4): " + lazyTree.rangeQuery(0, 4)); // 21
        System.out.println("rangeQuery(1, 3): " + lazyTree.rangeQuery(1, 3)); // 15
        System.out.println();
        
        // Problem 7: Longest Increasing Subsequence II
        System.out.println("Problem 7: Longest Increasing Subsequence II");
        int[] nums7 = {4, 2, 1, 4, 3, 4, 5, 8, 15};
        int k = 3;
        System.out.println("Input: [4,2,1,4,3,4,5,8,15], k=3");
        System.out.println("Output: " + lengthOfLIS(nums7, k));
        System.out.println("Expected: 5 (subsequence: [1,3,4,5,8])\n");
        
        // Problem 8: Falling Squares
        System.out.println("Problem 8: Falling Squares");
        int[][] positions = {{1, 2}, {2, 3}, {6, 1}};
        System.out.println("Input: [[1,2],[2,3],[6,1]]");
        System.out.println("Output: " + fallingSquares(positions));
        System.out.println("Expected: [2,5,5]\n");
        
        // Performance comparison
        System.out.println("=== PERFORMANCE COMPARISON ===");
        System.out.println("Segment Tree:");
        System.out.println("  - Space: O(4n)");
        System.out.println("  - Build: O(n)");
        System.out.println("  - Query/Update: O(log n)");
        System.out.println("  - Supports: Sum, Min, Max, GCD, etc.");
        System.out.println("  - Range Updates: Yes (with lazy propagation)");
        System.out.println();
        System.out.println("Fenwick Tree (BIT):");
        System.out.println("  - Space: O(n)");
        System.out.println("  - Build: O(n log n) or O(n) optimized");
        System.out.println("  - Query/Update: O(log n)");
        System.out.println("  - Supports: Sum, XOR (invertible operations)");
        System.out.println("  - Range Updates: Not directly (requires difference array)");
        System.out.println();
        
        System.out.println("\n=== ALL SEGMENT TREE & FENWICK TREE PROBLEMS COMPLETED ===");
        System.out.println("Master these data structures for efficient range queries!");
        System.out.println("Next: Binary Search Advanced (Day 47)");
    }
}
