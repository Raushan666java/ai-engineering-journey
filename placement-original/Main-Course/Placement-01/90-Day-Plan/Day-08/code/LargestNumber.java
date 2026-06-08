/**
 * LEETCODE 179: Largest Number
 * Problem: Given a list of non-negative integers, arrange them such that they form the largest number.
 * Approach: Use custom Comparator (string compare by concatenation) to sort descending.
 */

import java.util.*;

public class LargestNumber {
    public static void main(String[] args) {
        int[] nums = {3, 30, 34, 5, 9};
        System.out.println("Input: " + Arrays.toString(nums));
        System.out.println("Largest: " + largestNumber(nums));
    }

    static String largestNumber(int[] nums) {
        String[] arr = new String[nums.length];
        for (int i=0;i<nums.length;i++) arr[i] = String.valueOf(nums[i]);
        Arrays.sort(arr, (a,b) -> (b+a).compareTo(a+b));
        if (arr[0].equals("0")) return "0"; // all zeros
        StringBuilder sb = new StringBuilder();
        for (String s: arr) sb.append(s);
        return sb.toString();
    }
}
