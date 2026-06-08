package arrays.questions;

/*
 * 9. ROTATE ARRAY (LeetCode 189)
 *
 * Problem Statement:
 * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
 *
 * Conceptual Understanding:
 * - Rotate array to right by k positions
 * - Elements that fall off end move to beginning
 * - Time: O(n), Space: O(1) using reversal
 * - Alternative: O(n*k) naive, O(n) with extra space
 * - Use three reversals: reverse all, reverse first k, reverse rest
 * - Handle k > n by k = k % n
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

class RotateArray9 {

    // Method 1: Three reversals (most efficient)
    public void rotate(int[] nums, int k) {
        int n = nums.length;
        k = k % n; // Handle k > n

        if (k == 0) return;

        // Reverse entire array
        reverse(nums, 0, n - 1);

        // Reverse first k elements
        reverse(nums, 0, k - 1);

        // Reverse remaining elements
        reverse(nums, k, n - 1);
    }

    private void reverse(int[] nums, int start, int end) {
        while (start < end) {
            int temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }

    // Method 2: Using extra space
    public void rotateWithSpace(int[] nums, int k) {
        int n = nums.length;
        k = k % n;

        if (k == 0) return;

        int[] temp = new int[n];

        // Copy last k elements to front
        for (int i = 0; i < k; i++) {
            temp[i] = nums[n - k + i];
        }

        // Copy first n-k elements after k
        for (int i = 0; i < n - k; i++) {
            temp[k + i] = nums[i];
        }

        // Copy back to original
        System.arraycopy(temp, 0, nums, 0, n);
    }

    // Method 3: Cyclic replacement
    public void rotateCyclic(int[] nums, int k) {
        int n = nums.length;
        k = k % n;

        if (k == 0) return;

        int count = 0;
        for (int start = 0; count < n; start++) {
            int current = start;
            int prev = nums[start];

            do {
                int next = (current + k) % n;
                int temp = nums[next];
                nums[next] = prev;
                prev = temp;
                current = next;
                count++;
            } while (start != current);
        }
    }

    // Method 4: Naive approach (O(n*k))
    public void rotateNaive(int[] nums, int k) {
        int n = nums.length;
        k = k % n;

        for (int i = 0; i < k; i++) {
            int last = nums[n - 1];
            for (int j = n - 1; j > 0; j--) {
                nums[j] = nums[j - 1];
            }
            nums[0] = last;
        }
    }

    // Method 5: Using collections (educational)
    public void rotateCollections(int[] nums, int k) {
        int n = nums.length;
        k = k % n;

        if (k == 0) return;

        java.util.List<Integer> list = new java.util.ArrayList<>();
        for (int num : nums) {
            list.add(num);
        }

        // Rotate the list
        java.util.Collections.rotate(list, k);

        for (int i = 0; i < n; i++) {
            nums[i] = list.get(i);
        }
    }

    // Method 6: Left rotate
    public void rotateLeft(int[] nums, int k) {
        int n = nums.length;
        k = k % n;

        if (k == 0) return;

        // Reverse entire array
        reverse(nums, 0, n - 1);

        // Reverse first n-k elements
        reverse(nums, 0, n - k - 1);

        // Reverse last k elements
        reverse(nums, n - k, n - 1);
    }

    // Method 7: Rotate by one position multiple times
    public void rotateByOne(int[] nums, int k) {
        int n = nums.length;
        k = k % n;

        for (int i = 0; i < k; i++) {
            rotateRightByOne(nums);
        }
    }

    private void rotateRightByOne(int[] nums) {
        int last = nums[nums.length - 1];
        for (int i = nums.length - 1; i > 0; i--) {
            nums[i] = nums[i - 1];
        }
        nums[0] = last;
    }

    // Method 8: Block swap algorithm
    public void rotateBlockSwap(int[] nums, int k) {
        int n = nums.length;
        k = k % n;

        if (k == 0) return;

        blockSwap(nums, 0, n - k - 1, n - 1);
    }

    private void blockSwap(int[] nums, int start1, int end1, int end2) {
        int len1 = end1 - start1 + 1;
        int len2 = end2 - end1;

        if (len1 == len2) {
            swapBlocks(nums, start1, end1 + 1, len1);
            return;
        }

        if (len1 < len2) {
            swapBlocks(nums, start1, end2 - len1 + 1, len1);
            blockSwap(nums, start1, end1, end2 - len1);
        } else {
            swapBlocks(nums, start1, end1 + 1, len2);
            blockSwap(nums, start1 + len2, end1 + len2, end2);
        }
    }

    private void swapBlocks(int[] nums, int start1, int start2, int len) {
        for (int i = 0; i < len; i++) {
            int temp = nums[start1 + i];
            nums[start1 + i] = nums[start2 + i];
            nums[start2 + i] = temp;
        }
    }

    // Method 9: Juggling algorithm (variation of cyclic)
    public void rotateJuggling(int[] nums, int k) {
        int n = nums.length;
        k = k % n;

        if (k == 0) return;

        int gcd = gcd(n, k);

        for (int i = 0; i < gcd; i++) {
            int temp = nums[i];
            int j = i;

            while (true) {
                int d = (j + k) % n;
                if (d == i) break;
                nums[j] = nums[d];
                j = d;
            }

            nums[j] = temp;
        }
    }

    private int gcd(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    // Method 10: Rotate matrix (2D array)
    public void rotateMatrix(int[][] matrix) {
        int n = matrix.length;

        // Transpose
        for (int i = 0; i < n; i++) {
            for (int j = i; j < n; j++) {
                int temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }

        // Reverse each row
        for (int i = 0; i < n; i++) {
            reverseArray(matrix[i]);
        }
    }

    private void reverseArray(int[] arr) {
        int start = 0, end = arr.length - 1;
        while (start < end) {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }

    // Method 11: Rotate string
    public String rotateString(String s, int k) {
        if (s == null || s.length() == 0) return s;

        k = k % s.length();
        if (k == 0) return s;

        return s.substring(s.length() - k) + s.substring(0, s.length() - k);
    }

    // Method 12: Rotate linked list
    public class ListNode {
        int val;
        ListNode next;
        ListNode(int val) { this.val = val; }
    }

    public ListNode rotateList(ListNode head, int k) {
        if (head == null || head.next == null || k == 0) return head;

        // Find length
        ListNode current = head;
        int length = 1;
        while (current.next != null) {
            current = current.next;
            length++;
        }

        k = k % length;
        if (k == 0) return head;

        // Make it circular
        current.next = head;

        // Find new tail
        ListNode newTail = head;
        for (int i = 0; i < length - k - 1; i++) {
            newTail = newTail.next;
        }

        // New head
        ListNode newHead = newTail.next;

        // Break the circle
        newTail.next = null;

        return newHead;
    }

    // Method 13: Rotate array left by k
    public void rotateLeftByK(int[] nums, int k) {
        rotateLeft(nums, k);
    }

    // Method 14: Find minimum in rotated sorted array
    public int findMinInRotated(int[] nums) {
        int left = 0, right = nums.length - 1;

        while (left < right) {
            int mid = left + (right - left) / 2;

            if (nums[mid] > nums[right]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return nums[left];
    }

    // Method 15: Search in rotated sorted array
    public int searchInRotated(int[] nums, int target) {
        int left = 0, right = nums.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (nums[mid] == target) {
                return mid;
            }

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

        return -1;
    }

    // Test cases
    public static void main(String[] args) {
        RotateArray9 solution = new RotateArray9();

        // Test Case 1: Basic rotation
        int[] nums1 = {1, 2, 3, 4, 5, 6, 7};
        solution.rotate(nums1, 3);
        System.out.print("Rotated by 3: ");
        for (int num : nums1) {
            System.out.print(num + " ");
        }
        System.out.println(); // Expected: [5, 6, 7, 1, 2, 3, 4]

        // Test Case 2: Rotate by array length
        int[] nums2 = {1, 2, 3, 4};
        solution.rotate(nums2, 4);
        System.out.print("Rotated by length: ");
        for (int num : nums2) {
            System.out.print(num + " ");
        }
        System.out.println(); // Expected: [1, 2, 3, 4]

        // Test Case 3: Rotate by 0
        int[] nums3 = {1, 2, 3};
        solution.rotate(nums3, 0);
        System.out.print("Rotated by 0: ");
        for (int num : nums3) {
            System.out.print(num + " ");
        }
        System.out.println(); // Expected: [1, 2, 3]

        // Test Case 4: Single element
        int[] nums4 = {5};
        solution.rotate(nums4, 2);
        System.out.println("Single element: " + nums4[0]); // Expected: 5

        // Test Case 5: Performance comparison
        int[] largeArray = new int[10000];
        for (int i = 0; i < 10000; i++) {
            largeArray[i] = i;
        }

        long startTime, endTime;

        // Three reversals
        int[] test1 = largeArray.clone();
        startTime = System.nanoTime();
        solution.rotate(test1, 5000);
        endTime = System.nanoTime();
        System.out.println("\nThree reversals: " + (endTime - startTime) / 1000000 + " ms");

        // Cyclic replacement
        int[] test2 = largeArray.clone();
        startTime = System.nanoTime();
        solution.rotateCyclic(test2, 5000);
        endTime = System.nanoTime();
        System.out.println("Cyclic replacement: " + (endTime - startTime) / 1000000 + " ms");

        // Test Case 6: Left rotation
        int[] nums6 = {1, 2, 3, 4, 5};
        solution.rotateLeft(nums6, 2);
        System.out.print("Left rotate by 2: ");
        for (int num : nums6) {
            System.out.print(num + " ");
        }
        System.out.println(); // Expected: [3, 4, 5, 1, 2]

        // Test Case 7: Rotate string
        String rotated = solution.rotateString("abcdef", 2);
        System.out.println("Rotated string: " + rotated); // Expected: "efabcd"

        // Test Case 8: Matrix rotation
        int[][] matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
        solution.rotateMatrix(matrix);
        System.out.println("Rotated matrix:");
        for (int[] row : matrix) {
            for (int num : row) {
                System.out.print(num + " ");
            }
            System.out.println();
        }
        // Expected:
        // 7 4 1
        // 8 5 2
        // 9 6 3

        // Test Case 9: Find min in rotated array
        int[] rotatedArray = {4, 5, 6, 7, 0, 1, 2};
        int min = solution.findMinInRotated(rotatedArray);
        System.out.println("Min in rotated array: " + min); // Expected: 0

        // Test Case 10: Search in rotated array
        int index = solution.searchInRotated(rotatedArray, 5);
        System.out.println("Index of 5: " + index); // Expected: 1

        // Test Case 11: Edge cases
        System.out.println("\nEdge cases:");

        // Empty array
        int[] empty = {};
        solution.rotate(empty, 3);
        System.out.println("Empty array: " + java.util.Arrays.toString(empty));

        // Null array (would cause NPE, so we skip)
        System.out.println("Null array: would cause exception");

        // Large k
        int[] largeK = {1, 2, 3};
        solution.rotate(largeK, 1000000);
        System.out.print("Large k: ");
        for (int num : largeK) {
            System.out.print(num + " ");
        }
        System.out.println();

        // Negative numbers
        int[] negNums = {-1, -2, -3, -4};
        solution.rotate(negNums, 2);
        System.out.print("Negative numbers: ");
        for (int num : negNums) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}