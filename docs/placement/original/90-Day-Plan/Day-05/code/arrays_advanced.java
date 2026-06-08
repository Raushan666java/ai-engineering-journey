/**
 * Day 5 - Arrays Advanced
 * Algorithms: binary search (custom), two-pointer, sliding window, rotate array
 */

import java.util.*;

public class arrays_advanced {

    public static void main(String[] args) {
        System.out.println("=== ARRAYS ADVANCED - DAY 5 ===\n");

        demonstrateBinarySearch();
        demonstrateTwoPointer();
        demonstrateSlidingWindowFixed();
        demonstrateSlidingWindowVariable();
        demonstrateRotate();
    }

    public static void demonstrateBinarySearch() {
        System.out.println("1. BINARY SEARCH (custom)");
        int[] arr = {1, 3, 5, 7, 9, 11};
        System.out.println("arr: " + Arrays.toString(arr));
        System.out.println("index of 7: " + binarySearch(arr, 7));
        System.out.println("index of 4: " + binarySearch(arr, 4));
        System.out.println();
    }

    // Custom binary search (returns index or -1)
    public static int binarySearch(int[] arr, int x) {
        int lo = 0, hi = arr.length - 1;
        while (lo <= hi) {
            int mid = lo + (hi - lo) / 2;
            if (arr[mid] == x) return mid;
            else if (arr[mid] < x) lo = mid + 1;
            else hi = mid - 1;
        }
        return -1;
    }

    public static void demonstrateTwoPointer() {
        System.out.println("2. TWO POINTER TECHNIQUE");
        int[] arr = {1, 2, 3, 4, 5, 6};
        int target = 7;
        System.out.println("arr: " + Arrays.toString(arr));
        System.out.println("pair with sum 7: " + Arrays.toString(twoSumSorted(arr, target)));
        System.out.println();
    }

    // Two-sum for sorted array
    public static int[] twoSumSorted(int[] arr, int target) {
        int l = 0, r = arr.length - 1;
        while (l < r) {
            int sum = arr[l] + arr[r];
            if (sum == target) return new int[]{l, r};
            if (sum < target) l++; else r--;
        }
        return new int[]{-1, -1};
    }

    public static void demonstrateSlidingWindowFixed() {
        System.out.println("3. SLIDING WINDOW - FIXED SIZE");
        int[] arr = {1, 3, 2, 6, -1, 4, 1, 8, 2};
        int k = 3;
        System.out.println("arr: " + Arrays.toString(arr));
        System.out.println("max of every subArray with size 3: " + Arrays.toString(maxOfWindows(arr, k)));
        System.out.println();
    }

    public static int[] maxOfWindows(int[] arr, int k) {
        if (k > arr.length) return new int[0];
        Deque<Integer> dq = new LinkedList<>();
        int[] res = new int[arr.length - k + 1];
        int ri = 0;
        for (int i = 0; i < arr.length; i++) {
            while (!dq.isEmpty() && dq.peek() < i - k + 1) dq.poll();
            while (!dq.isEmpty() && arr[dq.peekLast()] < arr[i]) dq.pollLast();
            dq.offer(i);
            if (i >= k - 1) res[ri++] = arr[dq.peek()];
        }
        return res;
    }

    public static void demonstrateSlidingWindowVariable() {
        System.out.println("4. SLIDING WINDOW - VARIABLE SIZE (subarray sum target)");
        int[] arr = {2, 1, 3, 2, 4};
        int target = 7;
        System.out.println("arr: " + Arrays.toString(arr));
        System.out.println("subarray with sum 7: " + Arrays.toString(subarrayWithSum(arr, target))); // first match
        System.out.println();
    }

    public static int[] subarrayWithSum(int[] arr, int target) {
        int l = 0, sum = 0;
        for (int r = 0; r < arr.length; r++) {
            sum += arr[r];
            while (sum > target && l <= r) {
                sum -= arr[l++];
            }
            if (sum == target) return new int[]{l, r};
        }
        return new int[]{-1, -1};
    }

    public static void demonstrateRotate() {
        System.out.println("5. ROTATE ARRAY (in-place)");
        int[] arr = {1, 2, 3, 4, 5};
        rotate(arr, 2);
        System.out.println("rotated by 2: " + Arrays.toString(arr));
        System.out.println();
    }

    public static void rotate(int[] arr, int k) {
        k = k % arr.length;
        reverse(arr, 0, arr.length - 1);
        reverse(arr, 0, k - 1);
        reverse(arr, k, arr.length - 1);
    }

    private static void reverse(int[] arr, int start, int end) {
        while (start < end) {
            int tmp = arr[start];
            arr[start] = arr[end];
            arr[end] = tmp;
            start++; end--;
        }
    }
}
