# DSA Coding Problem Bank for Placement Interviews

> **75 curated problems** â€” Arrays, Strings, Linked Lists, Trees, Dynamic Programming, Graphs, Stack/Queue/Heap, Searching & Sorting, and Miscellaneous. Every solution includes a complete, compilable Java class with `main` method, complexity analysis, and company tags.

---

## Arrays

### Q1: Two Sum

**Problem:** Given an array of integers `nums` and an integer `target`, return indices of the two numbers that add up to `target`. You may assume exactly one solution, and you may not use the same element twice.

**Difficulty:** Easy

**Companies:** Amazon Â· Google Â· Microsoft Â· Apple Â· Meta Â· Bloomberg Â· Uber

```java
import java.util.HashMap;
import java.util.Map;

public class TwoSum {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[]{map.get(complement), i};
            }
            map.put(nums[i], i);
        }
        return new int[]{-1, -1};
    }

    public static void main(String[] args) {
        TwoSum solver = new TwoSum();
        int[] nums = {2, 7, 11, 15};
        int target = 9;
        int[] result = solver.twoSum(nums, target);
        System.out.println("Indices: [" + result[0] + "," + result[1] + "]");
    }
}
```

- **Time:** O(n) â€” single pass with hashmap
- **Space:** O(n) â€” map stores up to n elements

---

### Q2: Best Time to Buy and Sell Stock

**Problem:** You are given an array `prices` where `prices[i]` is the price of a given stock on day `i`. You want to maximize profit by choosing a single day to buy and a different day in the future to sell. Return the maximum profit. If no profit possible, return 0.

**Difficulty:** Easy

**Companies:** Amazon Â· Microsoft Â· Meta Â· Bloomberg Â· Google Â· Goldman Sachs Â· Uber Â· JP Morgan

```java
public class BestTimeToBuyAndSellStock {
    public int maxProfit(int[] prices) {
        int minPrice = Integer.MAX_VALUE;
        int maxProfit = 0;
        for (int price : prices) {
            if (price < minPrice) {
                minPrice = price;
            } else if (price - minPrice > maxProfit) {
                maxProfit = price - minPrice;
            }
        }
        return maxProfit;
    }

    public static void main(String[] args) {
        BestTimeToBuyAndSellStock solver = new BestTimeToBuyAndSellStock();
        int[] prices = {7, 1, 5, 3, 6, 4};
        System.out.println("Max profit: " + solver.maxProfit(prices));
    }
}
```

- **Time:** O(n) â€” single pass
- **Space:** O(1)

---

### Q3: Product of Array Except Self

**Problem:** Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all elements of `nums` except `nums[i]`. You must solve it **without division** in O(n) time.

**Difficulty:** Medium

**Companies:** Amazon Â· Meta Â· Microsoft Â· Apple Â· Uber Â· Google Â· Adobe

```java
import java.util.Arrays;

public class ProductOfArrayExceptSelf {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int[] answer = new int[n];
        answer[0] = 1;
        for (int i = 1; i < n; i++) {
            answer[i] = answer[i - 1] * nums[i - 1];
        }
        int rightProduct = 1;
        for (int i = n - 1; i >= 0; i--) {
            answer[i] *= rightProduct;
            rightProduct *= nums[i];
        }
        return answer;
    }

    public static void main(String[] args) {
        ProductOfArrayExceptSelf solver = new ProductOfArrayExceptSelf();
        int[] nums = {1, 2, 3, 4};
        int[] result = solver.productExceptSelf(nums);
        System.out.println("Result: " + Arrays.toString(result));
    }
}
```

- **Time:** O(n)
- **Space:** O(1) excluding output array

---

### Q4: Maximum Subarray (Kadane's Algorithm)

**Problem:** Given an integer array `nums`, find the contiguous subarray (containing at least one number) with the largest sum and return its sum.

**Difficulty:** Medium

**Companies:** Amazon Â· Microsoft Â· Google Â· LinkedIn Â· Apple Â· Meta Â· Bloomberg

```java
public class MaximumSubarray {
    public int maxSubArray(int[] nums) {
        int currentSum = nums[0];
        int maxSum = nums[0];
        for (int i = 1; i < nums.length; i++) {
            currentSum = Math.max(nums[i], currentSum + nums[i]);
            maxSum = Math.max(maxSum, currentSum);
        }
        return maxSum;
    }

    public static void main(String[] args) {
        MaximumSubarray solver = new MaximumSubarray();
        int[] nums = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
        System.out.println("Maximum subarray sum: " + solver.maxSubArray(nums));
    }
}
```

- **Time:** O(n)
- **Space:** O(1)

---

### Q5: Find Minimum in Rotated Sorted Array

**Problem:** Suppose an array of length `n` sorted in ascending order is rotated between 1 and `n` times. Find the minimum element in O(log n) time.

**Difficulty:** Medium

**Companies:** Microsoft Â· Amazon Â· Google Â· Uber Â· Bloomberg Â· Meta Â· Oracle

```java
public class FindMinimumInRotatedSortedArray {
    public int findMin(int[] nums) {
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

    public static void main(String[] args) {
        FindMinimumInRotatedSortedArray solver = new FindMinimumInRotatedSortedArray();
        int[] nums = {3, 4, 5, 1, 2};
        System.out.println("Minimum: " + solver.findMin(nums));
    }
}
```

- **Time:** O(log n) â€” binary search
- **Space:** O(1)

---

### Q6: Container With Most Water

**Problem:** Given an integer array `height` of length `n`, find two lines that together with the x-axis form a container that holds the most water. Return the maximum amount of water.

**Difficulty:** Medium

**Companies:** Amazon Â· Google Â· Meta Â· Apple Â· Adobe Â· Microsoft Â· Bloomberg

```java
public class ContainerWithMostWater {
    public int maxArea(int[] height) {
        int left = 0, right = height.length - 1;
        int maxArea = 0;
        while (left < right) {
            int area = Math.min(height[left], height[right]) * (right - left);
            maxArea = Math.max(maxArea, area);
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
        return maxArea;
    }

    public static void main(String[] args) {
        ContainerWithMostWater solver = new ContainerWithMostWater();
        int[] height = {1, 8, 6, 2, 5, 4, 8, 3, 7};
        System.out.println("Max area: " + solver.maxArea(height));
    }
}
```

- **Time:** O(n) â€” two-pointer sweep
- **Space:** O(1)

---

### Q7: 3Sum

**Problem:** Given an integer array `nums`, return all triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, `j != k`, and `nums[i] + nums[j] + nums[k] == 0`. No duplicate triplets.

**Difficulty:** Medium

**Companies:** Amazon Â· Meta Â· Microsoft Â· Google Â· Apple Â· Bloomberg Â· Netflix

```java
import java.util.*;

public class ThreeSum {
    public List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> result = new ArrayList<>();
        for (int i = 0; i < nums.length - 2; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) continue;
            int left = i + 1, right = nums.length - 1;
            while (left < right) {
                int sum = nums[i] + nums[left] + nums[right];
                if (sum == 0) {
                    result.add(Arrays.asList(nums[i], nums[left], nums[right]));
                    while (left < right && nums[left] == nums[left + 1]) left++;
                    while (left < right && nums[right] == nums[right - 1]) right--;
                    left++; right--;
                } else if (sum < 0) {
                    left++;
                } else {
                    right--;
                }
            }
        }
        return result;
    }

    public static void main(String[] args) {
        ThreeSum solver = new ThreeSum();
        int[] nums = {-1, 0, 1, 2, -1, -4};
        List<List<Integer>> result = solver.threeSum(nums);
        System.out.println("Triplets: " + result);
    }
}
```

- **Time:** O(nÂ²)
- **Space:** O(1) excluding output

---

### Q8: Merge Intervals

**Problem:** Given an array of intervals where `intervals[i] = [startáµ¢, endáµ¢]`, merge all overlapping intervals and return an array of non-overlapping intervals covering all input intervals.

**Difficulty:** Medium

**Companies:** Amazon Â· Google Â· Microsoft Â· Bloomberg Â· Uber Â· Meta Â· Cisco

```java
import java.util.*;

public class MergeIntervals {
    public int[][] merge(int[][] intervals) {
        if (intervals.length == 0) return new int[0][];
        Arrays.sort(intervals, (a, b) -> a[0] - b[0]);
        List<int[]> merged = new ArrayList<>();
        int[] current = intervals[0];
        merged.add(current);
        for (int[] interval : intervals) {
            if (interval[0] <= current[1]) {
                current[1] = Math.max(current[1], interval[1]);
            } else {
                current = interval;
                merged.add(current);
            }
        }
        return merged.toArray(new int[merged.size()][]);
    }

    public static void main(String[] args) {
        MergeIntervals solver = new MergeIntervals();
        int[][] intervals = {{1, 3}, {2, 6}, {8, 10}, {15, 18}};
        int[][] result = solver.merge(intervals);
        System.out.println("Merged: " + Arrays.deepToString(result));
    }
}
```

- **Time:** O(n log n) â€” dominated by sorting
- **Space:** O(n) for output

---

### Q9: Next Permutation

**Problem:** Implement next permutation, which rearranges numbers into the lexicographically next greater permutation. If no such arrangement exists, rearrange into the lowest possible order (sorted ascending).

**Difficulty:** Medium

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Bloomberg Â· Apple Â· Goldman Sachs

```java
import java.util.Arrays;

public class NextPermutation {
    public void nextPermutation(int[] nums) {
        int i = nums.length - 2;
        while (i >= 0 && nums[i] >= nums[i + 1]) i--;
        if (i >= 0) {
            int j = nums.length - 1;
            while (nums[j] <= nums[i]) j--;
            swap(nums, i, j);
        }
        reverse(nums, i + 1, nums.length - 1);
    }

    private void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    private void reverse(int[] nums, int start, int end) {
        while (start < end) {
            swap(nums, start++, end--);
        }
    }

    public static void main(String[] args) {
        NextPermutation solver = new NextPermutation();
        int[] nums = {1, 2, 3};
        solver.nextPermutation(nums);
        System.out.println("Next permutation: " + Arrays.toString(nums));
    }
}
```

- **Time:** O(n)
- **Space:** O(1)

---

### Q10: Sort Colors (Dutch National Flag)

**Problem:** Given an array `nums` with `n` objects colored red (0), white (1), or blue (2), sort them **in-place** so that same colors are adjacent. Do it in one pass with constant space.

**Difficulty:** Medium

**Companies:** Amazon Â· Microsoft Â· Google Â· Meta Â· Apple Â· Adobe Â· Walmart

```java
import java.util.Arrays;

public class SortColors {
    public void sortColors(int[] nums) {
        int low = 0, mid = 0, high = nums.length - 1;
        while (mid <= high) {
            if (nums[mid] == 0) {
                swap(nums, low++, mid++);
            } else if (nums[mid] == 1) {
                mid++;
            } else {
                swap(nums, mid, high--);
            }
        }
    }

    private void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }

    public static void main(String[] args) {
        SortColors solver = new SortColors();
        int[] nums = {2, 0, 2, 1, 1, 0};
        solver.sortColors(nums);
        System.out.println("Sorted: " + Arrays.toString(nums));
    }
}
```

- **Time:** O(n) â€” one pass
- **Space:** O(1)

---

### Q11: Subarray Sum Equals K

**Problem:** Given an array of integers `nums` and an integer `k`, return the total number of contiguous subarrays whose sum equals `k`.

**Difficulty:** Medium

**Companies:** Amazon Â· Google Â· Meta Â· Microsoft Â· Apple Â· Bloomberg Â· Netflix

```java
import java.util.HashMap;
import java.util.Map;

public class SubarraySumEqualsK {
    public int subarraySum(int[] nums, int k) {
        Map<Integer, Integer> prefixSumMap = new HashMap<>();
        prefixSumMap.put(0, 1);
        int sum = 0, count = 0;
        for (int num : nums) {
            sum += num;
            if (prefixSumMap.containsKey(sum - k)) {
                count += prefixSumMap.get(sum - k);
            }
            prefixSumMap.put(sum, prefixSumMap.getOrDefault(sum, 0) + 1);
        }
        return count;
    }

    public static void main(String[] args) {
        SubarraySumEqualsK solver = new SubarraySumEqualsK();
        int[] nums = {1, 1, 1};
        int k = 2;
        System.out.println("Count: " + solver.subarraySum(nums, k));
    }
}
```

- **Time:** O(n)
- **Space:** O(n)

---

### Q12: First Missing Positive

**Problem:** Given an unsorted integer array `nums`, return the smallest positive integer that does not appear in it. Must run in O(n) time and O(1) space.

**Difficulty:** Hard

**Companies:** Amazon Â· Google Â· Microsoft Â· Apple Â· Meta Â· Adobe Â· Oracle

```java
public class FirstMissingPositive {
    public int firstMissingPositive(int[] nums) {
        int n = nums.length;
        for (int i = 0; i < n; i++) {
            while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] != nums[i]) {
                int temp = nums[nums[i] - 1];
                nums[nums[i] - 1] = nums[i];
                nums[i] = temp;
            }
        }
        for (int i = 0; i < n; i++) {
            if (nums[i] != i + 1) return i + 1;
        }
        return n + 1;
    }

    public static void main(String[] args) {
        FirstMissingPositive solver = new FirstMissingPositive();
        int[] nums = {3, 4, -1, 1};
        System.out.println("First missing positive: " + solver.firstMissingPositive(nums));
    }
}
```

- **Time:** O(n)
- **Space:** O(1)

---

## Strings

### Q13: Longest Substring Without Repeating Characters

**Problem:** Given a string `s`, find the length of the longest substring without repeating characters.

**Difficulty:** Medium

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· Bloomberg Â· Intel

```java
import java.util.HashMap;
import java.util.Map;

public class LongestSubstringWithoutRepeating {
    public int lengthOfLongestSubstring(String s) {
        Map<Character, Integer> map = new HashMap<>();
        int left = 0, maxLen = 0;
        for (int right = 0; right < s.length(); right++) {
            char c = s.charAt(right);
            if (map.containsKey(c) && map.get(c) >= left) {
                left = map.get(c) + 1;
            }
            map.put(c, right);
            maxLen = Math.max(maxLen, right - left + 1);
        }
        return maxLen;
    }

    public static void main(String[] args) {
        LongestSubstringWithoutRepeating solver = new LongestSubstringWithoutRepeating();
        String s = "abcabcbb";
        System.out.println("Longest substring length: " + solver.lengthOfLongestSubstring(s));
    }
}
```

- **Time:** O(n)
- **Space:** O(min(m, n)) â€” m = charset size

---

### Q14: Valid Anagram

**Problem:** Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.

**Difficulty:** Easy

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· Bloomberg Â· Nvidia

```java
import java.util.Arrays;

public class ValidAnagram {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) return false;
        int[] freq = new int[26];
        for (int i = 0; i < s.length(); i++) {
            freq[s.charAt(i) - 'a']++;
            freq[t.charAt(i) - 'a']--;
        }
        for (int count : freq) {
            if (count != 0) return false;
        }
        return true;
    }

    public static void main(String[] args) {
        ValidAnagram solver = new ValidAnagram();
        System.out.println("anagram vs nagaram: " + solver.isAnagram("anagram", "nagaram"));
        System.out.println("rat vs car: " + solver.isAnagram("rat", "car"));
    }
}
```

- **Time:** O(n)
- **Space:** O(1) â€” fixed 26-size array

---

### Q15: Longest Palindromic Substring

**Problem:** Given a string `s`, return the longest palindromic substring in `s`.

**Difficulty:** Medium

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· Bloomberg Â· PayPal

```java
public class LongestPalindromicSubstring {
    private int start = 0, maxLen = 0;

    public String longestPalindrome(String s) {
        if (s == null || s.length() < 2) return s;
        for (int i = 0; i < s.length(); i++) {
            expand(s, i, i);
            expand(s, i, i + 1);
        }
        return s.substring(start, start + maxLen);
    }

    private void expand(String s, int left, int right) {
        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            left--;
            right++;
        }
        int len = right - left - 1;
        if (len > maxLen) {
            maxLen = len;
            start = left + 1;
        }
    }

    public static void main(String[] args) {
        LongestPalindromicSubstring solver = new LongestPalindromicSubstring();
        String s = "babad";
        System.out.println("Longest palindrome: " + solver.longestPalindrome(s));
    }
}
```

- **Time:** O(nÂ²) â€” expands from each center
- **Space:** O(1)

---

### Q16: Group Anagrams

**Problem:** Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.

**Difficulty:** Medium

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Bloomberg Â· Apple Â· Cisco

```java
import java.util.*;

public class GroupAnagrams {
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> map = new HashMap<>();
        for (String s : strs) {
            char[] arr = s.toCharArray();
            Arrays.sort(arr);
            String key = new String(arr);
            map.computeIfAbsent(key, k -> new ArrayList<>()).add(s);
        }
        return new ArrayList<>(map.values());
    }

    public static void main(String[] args) {
        GroupAnagrams solver = new GroupAnagrams();
        String[] strs = {"eat", "tea", "tan", "ate", "nat", "bat"};
        List<List<String>> result = solver.groupAnagrams(strs);
        System.out.println("Groups: " + result);
    }
}
```

- **Time:** O(n Â· k log k) â€” n = words, k = avg word length
- **Space:** O(n Â· k)

---

### Q17: Valid Parentheses

**Problem:** Given a string `s` containing just the characters `(`, `)`, `{`, `}`, `[`, `]`, determine if the input string is valid. Open brackets must be closed by the same type in the correct order.

**Difficulty:** Easy

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· LinkedIn Â· Apple Â· Salesforce

```java
import java.util.ArrayDeque;
import java.util.Deque;
import java.util.Map;

public class ValidParentheses {
    public boolean isValid(String s) {
        Deque<Character> stack = new ArrayDeque<>();
        Map<Character, Character> map = Map.of(')', '(', '}', '{', ']', '[');
        for (char c : s.toCharArray()) {
            if (map.containsKey(c)) {
                if (stack.isEmpty() || stack.pop() != map.get(c)) return false;
            } else {
                stack.push(c);
            }
        }
        return stack.isEmpty();
    }

    public static void main(String[] args) {
        ValidParentheses solver = new ValidParentheses();
        System.out.println("()[]{}: " + solver.isValid("()[]{}"));
        System.out.println("([)]: " + solver.isValid("([)]"));
    }
}
```

- **Time:** O(n)
- **Space:** O(n)

---

### Q18: Count and Say

**Problem:** The count-and-say sequence is a sequence of digit strings defined by: `countAndSay(1) = "1"`. For n > 1, `countAndSay(n)` is the run-length encoding of `countAndSay(n-1)`. Return the nth term.

**Difficulty:** Medium

**Companies:** Amazon Â· Meta Â· Microsoft Â· Apple Â· Google Â· Bloomberg Â· Goldman Sachs Â· JP Morgan

```java
public class CountAndSay {
    public String countAndSay(int n) {
        String result = "1";
        for (int i = 2; i <= n; i++) {
            StringBuilder sb = new StringBuilder();
            int count = 1;
            for (int j = 1; j < result.length(); j++) {
                if (result.charAt(j) == result.charAt(j - 1)) {
                    count++;
                } else {
                    sb.append(count).append(result.charAt(j - 1));
                    count = 1;
                }
            }
            sb.append(count).append(result.charAt(result.length() - 1));
            result = sb.toString();
        }
        return result;
    }

    public static void main(String[] args) {
        CountAndSay solver = new CountAndSay();
        for (int i = 1; i <= 5; i++) {
            System.out.println("n=" + i + ": " + solver.countAndSay(i));
        }
    }
}
```

- **Time:** O(2â¿) â€” length grows exponentially
- **Space:** O(2â¿)

---

### Q19: Implement strStr() / IndexOf

**Problem:** Given two strings `haystack` and `needle`, return the index of the first occurrence of `needle` in `haystack`, or -1 if not found.

**Difficulty:** Easy

**Companies:** Amazon Â· Microsoft Â· Apple Â· Meta Â· Google Â· Bloomberg Â· Salesforce

```java
public class ImplementStrStr {
    public int strStr(String haystack, String needle) {
        if (needle.isEmpty()) return 0;
        int n = haystack.length(), m = needle.length();
        for (int i = 0; i <= n - m; i++) {
            int j = 0;
            while (j < m && haystack.charAt(i + j) == needle.charAt(j)) {
                j++;
            }
            if (j == m) return i;
        }
        return -1;
    }

    public static void main(String[] args) {
        ImplementStrStr solver = new ImplementStrStr();
        System.out.println("Index of 'll' in 'hello': " + solver.strStr("hello", "ll"));
        System.out.println("Index of 'bba' in 'aaaa': " + solver.strStr("aaaa", "bba"));
    }
}
```

- **Time:** O(nÂ·m) worst-case; average O(n + m)
- **Space:** O(1)

---

### Q20: String to Integer (atoi)

**Problem:** Implement `myAtoi(string s)` which converts a string to a 32-bit signed integer. Skip leading whitespace, handle +/- sign, read digits, clamp to [âˆ’2Â³Â¹, 2Â³Â¹âˆ’1].

**Difficulty:** Medium

**Companies:** Amazon Â· Microsoft Â· Meta Â· Apple Â· Google Â· Bloomberg Â· IBM

```java
public class StringToInteger {
    public int myAtoi(String s) {
        int i = 0, sign = 1, total = 0;
        if (s.length() == 0) return 0;
        while (i < s.length() && s.charAt(i) == ' ') i++;
        if (i < s.length() && (s.charAt(i) == '+' || s.charAt(i) == '-')) {
            sign = (s.charAt(i) == '-') ? -1 : 1;
            i++;
        }
        while (i < s.length() && Character.isDigit(s.charAt(i))) {
            int digit = s.charAt(i) - '0';
            if (total > (Integer.MAX_VALUE - digit) / 10) {
                return sign == 1 ? Integer.MAX_VALUE : Integer.MIN_VALUE;
            }
            total = total * 10 + digit;
            i++;
        }
        return total * sign;
    }

    public static void main(String[] args) {
        StringToInteger solver = new StringToInteger();
        System.out.println("'42' -> " + solver.myAtoi("42"));
        System.out.println("'   -42' -> " + solver.myAtoi("   -42"));
        System.out.println("'4193 with words' -> " + solver.myAtoi("4193 with words"));
    }
}
```

- **Time:** O(n)
- **Space:** O(1)

---

## Linked Lists

### Q21: Reverse a Linked List

**Problem:** Given the head of a singly linked list, reverse the list and return the new head.

**Difficulty:** Easy

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· Bloomberg Â· Nvidia

```java
public class ReverseLinkedList {
    static class ListNode {
        int val;
        ListNode next;
        ListNode(int val) { this.val = val; }
    }

    public ListNode reverseList(ListNode head) {
        ListNode prev = null, current = head;
        while (current != null) {
            ListNode nextTemp = current.next;
            current.next = prev;
            prev = current;
            current = nextTemp;
        }
        return prev;
    }

    public static void main(String[] args) {
        ListNode head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        head.next.next.next = new ListNode(4);
        head.next.next.next.next = new ListNode(5);
        ReverseLinkedList solver = new ReverseLinkedList();
        ListNode reversed = solver.reverseList(head);
        System.out.print("Reversed: ");
        while (reversed != null) {
            System.out.print(reversed.val + " ");
            reversed = reversed.next;
        }
        System.out.println();
    }
}
```

- **Time:** O(n)
- **Space:** O(1)

---

### Q22: Detect Cycle in Linked List

**Problem:** Given `head` of a linked list, determine if it has a cycle. A cycle occurs when a node's `next` pointer connects back to an earlier node.

**Difficulty:** Easy

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· Bloomberg Â· Oracle

```java
public class LinkedListCycle {
    static class ListNode {
        int val;
        ListNode next;
        ListNode(int val) { this.val = val; }
    }

    public boolean hasCycle(ListNode head) {
        ListNode slow = head, fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) return true;
        }
        return false;
    }

    public static void main(String[] args) {
        ListNode head = new ListNode(3);
        head.next = new ListNode(2);
        head.next.next = new ListNode(0);
        head.next.next.next = new ListNode(-4);
        head.next.next.next.next = head.next;
        LinkedListCycle solver = new LinkedListCycle();
        System.out.println("Has cycle: " + solver.hasCycle(head));
    }
}
```

- **Time:** O(n)
- **Space:** O(1)

---

### Q23: Merge Two Sorted Lists

**Problem:** Merge two sorted linked lists into one sorted list. The new list should be made by splicing together the nodes of the first two lists.

**Difficulty:** Easy

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· PayPal Â· Adobe

```java
public class MergeTwoSortedLists {
    static class ListNode {
        int val;
        ListNode next;
        ListNode(int val) { this.val = val; }
    }

    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode dummy = new ListNode(0);
        ListNode current = dummy;
        while (list1 != null && list2 != null) {
            if (list1.val <= list2.val) {
                current.next = list1;
                list1 = list1.next;
            } else {
                current.next = list2;
                list2 = list2.next;
            }
            current = current.next;
        }
        current.next = (list1 != null) ? list1 : list2;
        return dummy.next;
    }

    public static void main(String[] args) {
        ListNode l1 = new ListNode(1);
        l1.next = new ListNode(2); l1.next.next = new ListNode(4);
        ListNode l2 = new ListNode(1);
        l2.next = new ListNode(3); l2.next.next = new ListNode(4);
        MergeTwoSortedLists solver = new MergeTwoSortedLists();
        ListNode merged = solver.mergeTwoLists(l1, l2);
        System.out.print("Merged: ");
        while (merged != null) {
            System.out.print(merged.val + " ");
            merged = merged.next;
        }
        System.out.println();
    }
}
```

- **Time:** O(n + m)
- **Space:** O(1)

---

### Q24: Remove Nth Node From End

**Problem:** Given the head of a linked list, remove the nth node from the end and return the head.

**Difficulty:** Medium

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· Bloomberg Â· Intel

```java
public class RemoveNthFromEnd {
    static class ListNode {
        int val;
        ListNode next;
        ListNode(int val) { this.val = val; }
    }

    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode first = dummy, second = dummy;
        for (int i = 0; i <= n; i++) first = first.next;
        while (first != null) {
            first = first.next;
            second = second.next;
        }
        second.next = second.next.next;
        return dummy.next;
    }

    public static void main(String[] args) {
        ListNode head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        head.next.next.next = new ListNode(4);
        head.next.next.next.next = new ListNode(5);
        RemoveNthFromEnd solver = new RemoveNthFromEnd();
        ListNode result = solver.removeNthFromEnd(head, 2);
        System.out.print("After removal: ");
        while (result != null) {
            System.out.print(result.val + " ");
            result = result.next;
        }
        System.out.println();
    }
}
```

- **Time:** O(n)
- **Space:** O(1)

---

### Q25: Find Middle of Linked List

**Problem:** Given the head of a singly linked list, return the middle node. If there are two middle nodes, return the second one.

**Difficulty:** Easy

**Companies:** Amazon Â· Google Â· Microsoft Â· Apple Â· Meta Â· Cisco Â· Adobe

```java
public class MiddleOfLinkedList {
    static class ListNode {
        int val;
        ListNode next;
        ListNode(int val) { this.val = val; }
    }

    public ListNode middleNode(ListNode head) {
        ListNode slow = head, fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    public static void main(String[] args) {
        ListNode head = new ListNode(1);
        head.next = new ListNode(2);
        head.next.next = new ListNode(3);
        head.next.next.next = new ListNode(4);
        head.next.next.next.next = new ListNode(5);
        MiddleOfLinkedList solver = new MiddleOfLinkedList();
        ListNode middle = solver.middleNode(head);
        System.out.println("Middle node value: " + middle.val);
    }
}
```

- **Time:** O(n)
- **Space:** O(1)

---

### Q26: Add Two Numbers

**Problem:** You are given two non-empty linked lists representing two non-negative integers. The digits are stored in **reverse order**. Add the two numbers and return the sum as a linked list.

**Difficulty:** Medium

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· Bloomberg Â· Uber

```java
public class AddTwoNumbers {
    static class ListNode {
        int val;
        ListNode next;
        ListNode(int val) { this.val = val; }
    }

    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode(0);
        ListNode current = dummy;
        int carry = 0;
        while (l1 != null || l2 != null || carry != 0) {
            int sum = carry;
            if (l1 != null) { sum += l1.val; l1 = l1.next; }
            if (l2 != null) { sum += l2.val; l2 = l2.next; }
            carry = sum / 10;
            current.next = new ListNode(sum % 10);
            current = current.next;
        }
        return dummy.next;
    }

    public static void main(String[] args) {
        ListNode l1 = new ListNode(2);
        l1.next = new ListNode(4); l1.next.next = new ListNode(3);
        ListNode l2 = new ListNode(5);
        l2.next = new ListNode(6); l2.next.next = new ListNode(4);
        AddTwoNumbers solver = new AddTwoNumbers();
        ListNode result = solver.addTwoNumbers(l1, l2);
        System.out.print("Sum: ");
        while (result != null) {
            System.out.print(result.val + " ");
            result = result.next;
        }
        System.out.println();
    }
}
```

- **Time:** O(max(m, n))
- **Space:** O(max(m, n))

---

### Q27: Intersection of Two Linked Lists

**Problem:** Given the heads of two singly linked lists, return the node at which they intersect. If no intersection, return null.

**Difficulty:** Easy

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· Walmart Â· Adobe

```java
public class IntersectionOfTwoLinkedLists {
    static class ListNode {
        int val;
        ListNode next;
        ListNode(int val) { this.val = val; }
    }

    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        if (headA == null || headB == null) return null;
        ListNode a = headA, b = headB;
        while (a != b) {
            a = (a == null) ? headB : a.next;
            b = (b == null) ? headA : b.next;
        }
        return a;
    }

    public static void main(String[] args) {
        ListNode common = new ListNode(8);
        common.next = new ListNode(4); common.next.next = new ListNode(5);
        ListNode headA = new ListNode(4);
        headA.next = new ListNode(1); headA.next.next = common;
        ListNode headB = new ListNode(5);
        headB.next = new ListNode(6); headB.next.next = new ListNode(1); headB.next.next.next = common;
        IntersectionOfTwoLinkedLists solver = new IntersectionOfTwoLinkedLists();
        ListNode intersect = solver.getIntersectionNode(headA, headB);
        System.out.println("Intersection node value: " + (intersect != null ? intersect.val : "null"));
    }
}
```

- **Time:** O(n + m)
- **Space:** O(1)

---

### Q28: LRU Cache

**Problem:** Design a data structure that follows the Least Recently Used (LRU) cache constraints. Implement `LRUCache` with O(1) `get` and `put`.

**Difficulty:** Medium

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· Netflix Â· PayPal

```java
import java.util.HashMap;
import java.util.Map;

public class LRUCache {
    static class Node {
        int key, value;
        Node prev, next;
        Node(int key, int value) { this.key = key; this.value = value; }
    }

    private final int capacity;
    private final Map<Integer, Node> map = new HashMap<>();
    private final Node head = new Node(0, 0);
    private final Node tail = new Node(0, 0);

    public LRUCache(int capacity) {
        this.capacity = capacity;
        head.next = tail;
        tail.prev = head;
    }

    public int get(int key) {
        Node node = map.get(key);
        if (node == null) return -1;
        moveToHead(node);
        return node.value;
    }

    public void put(int key, int value) {
        Node node = map.get(key);
        if (node != null) {
            node.value = value;
            moveToHead(node);
            return;
        }
        if (map.size() == capacity) {
            Node lru = tail.prev;
            removeNode(lru);
            map.remove(lru.key);
        }
        Node newNode = new Node(key, value);
        map.put(key, newNode);
        addToHead(newNode);
    }

    private void addToHead(Node node) {
        node.next = head.next;
        node.prev = head;
        head.next.prev = node;
        head.next = node;
    }

    private void removeNode(Node node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    private void moveToHead(Node node) {
        removeNode(node);
        addToHead(node);
    }

    public static void main(String[] args) {
        LRUCache cache = new LRUCache(2);
        cache.put(1, 1);
        cache.put(2, 2);
        System.out.println("get(1) = " + cache.get(1));
        cache.put(3, 3);
        System.out.println("get(2) = " + cache.get(2));
        cache.put(4, 4);
        System.out.println("get(1) = " + cache.get(1));
        System.out.println("get(3) = " + cache.get(3));
        System.out.println("get(4) = " + cache.get(4));
    }
}
```

- **Time:** O(1) for both get and put
- **Space:** O(capacity)

---

## Trees

### Q29: Maximum Depth of Binary Tree

**Problem:** Given the `root` of a binary tree, return its maximum depth. A binary tree's maximum depth is the number of nodes along the longest root-to-leaf path.

**Difficulty:** Easy

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· Bloomberg Â· IBM

```java
public class MaximumDepthOfBinaryTree {
    static class TreeNode {
        int val;
        TreeNode left, right;
        TreeNode(int val) { this.val = val; }
    }

    public int maxDepth(TreeNode root) {
        if (root == null) return 0;
        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(3);
        root.left = new TreeNode(9);
        root.right = new TreeNode(20);
        root.right.left = new TreeNode(15);
        root.right.right = new TreeNode(7);
        MaximumDepthOfBinaryTree solver = new MaximumDepthOfBinaryTree();
        System.out.println("Max depth: " + solver.maxDepth(root));
    }
}
```

- **Time:** O(n)
- **Space:** O(n) worst (skewed), O(log n) balanced

---

### Q30: Invert Binary Tree

**Problem:** Given the `root` of a binary tree, invert the tree and return its root.

**Difficulty:** Easy

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· Salesforce Â· Uber

```java
public class InvertBinaryTree {
    static class TreeNode {
        int val;
        TreeNode left, right;
        TreeNode(int val) { this.val = val; }
    }

    public TreeNode invertTree(TreeNode root) {
        if (root == null) return null;
        TreeNode temp = root.left;
        root.left = invertTree(root.right);
        root.right = invertTree(temp);
        return root;
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(4);
        root.left = new TreeNode(2); root.right = new TreeNode(7);
        root.left.left = new TreeNode(1); root.left.right = new TreeNode(3);
        root.right.left = new TreeNode(6); root.right.right = new TreeNode(9);
        InvertBinaryTree solver = new InvertBinaryTree();
        TreeNode inverted = solver.invertTree(root);
        System.out.println("Root: " + inverted.val + ", Left: " + inverted.left.val + ", Right: " + inverted.right.val);
    }
}
```

- **Time:** O(n)
- **Space:** O(n)

---

### Q31: Validate Binary Search Tree

**Problem:** Given the `root` of a binary tree, determine if it is a valid BST. A valid BST has: left subtree values < node value, right subtree values > node value, and both subtrees recursively valid.

**Difficulty:** Medium

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· Bloomberg Â· Nvidia

```java
public class ValidateBST {
    static class TreeNode {
        int val;
        TreeNode left, right;
        TreeNode(int val) { this.val = val; }
    }

    public boolean isValidBST(TreeNode root) {
        return validate(root, null, null);
    }

    private boolean validate(TreeNode node, Integer low, Integer high) {
        if (node == null) return true;
        if ((low != null && node.val <= low) || (high != null && node.val >= high)) return false;
        return validate(node.left, low, node.val) && validate(node.right, node.val, high);
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(2);
        root.left = new TreeNode(1);
        root.right = new TreeNode(3);
        ValidateBST solver = new ValidateBST();
        System.out.println("Is valid BST: " + solver.isValidBST(root));
    }
}
```

- **Time:** O(n)
- **Space:** O(n)

---

### Q32: Binary Tree Level Order Traversal

**Problem:** Given the `root` of a binary tree, return the level order traversal of its nodes' values (left to right, level by level).

**Difficulty:** Medium

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· Bloomberg Â· Intel

```java
import java.util.*;

public class LevelOrderTraversal {
    static class TreeNode {
        int val;
        TreeNode left, right;
        TreeNode(int val) { this.val = val; }
    }

    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();
        if (root == null) return result;
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        while (!queue.isEmpty()) {
            int size = queue.size();
            List<Integer> level = new ArrayList<>();
            for (int i = 0; i < size; i++) {
                TreeNode node = queue.poll();
                level.add(node.val);
                if (node.left != null) queue.offer(node.left);
                if (node.right != null) queue.offer(node.right);
            }
            result.add(level);
        }
        return result;
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(3);
        root.left = new TreeNode(9);
        root.right = new TreeNode(20);
        root.right.left = new TreeNode(15);
        root.right.right = new TreeNode(7);
        LevelOrderTraversal solver = new LevelOrderTraversal();
        System.out.println("Level order: " + solver.levelOrder(root));
    }
}
```

- **Time:** O(n)
- **Space:** O(n)

---

### Q33: Serialize and Deserialize Binary Tree

**Problem:** Design an algorithm to serialize a binary tree into a string and deserialize the string back into the tree.

**Difficulty:** Hard

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· Goldman Sachs Â· Uber Â· JP Morgan

```java
import java.util.*;

public class SerializeDeserializeBT {
    static class TreeNode {
        int val;
        TreeNode left, right;
        TreeNode(int val) { this.val = val; }
    }

    public String serialize(TreeNode root) {
        StringBuilder sb = new StringBuilder();
        serializeHelper(root, sb);
        return sb.toString();
    }

    private void serializeHelper(TreeNode root, StringBuilder sb) {
        if (root == null) {
            sb.append("null,");
            return;
        }
        sb.append(root.val).append(",");
        serializeHelper(root.left, sb);
        serializeHelper(root.right, sb);
    }

    public TreeNode deserialize(String data) {
        Queue<String> nodes = new LinkedList<>(Arrays.asList(data.split(",")));
        return deserializeHelper(nodes);
    }

    private TreeNode deserializeHelper(Queue<String> nodes) {
        String val = nodes.poll();
        if (val.equals("null")) return null;
        TreeNode node = new TreeNode(Integer.parseInt(val));
        node.left = deserializeHelper(nodes);
        node.right = deserializeHelper(nodes);
        return node;
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.right.left = new TreeNode(4);
        root.right.right = new TreeNode(5);
        SerializeDeserializeBT codec = new SerializeDeserializeBT();
        String serialized = codec.serialize(root);
        System.out.println("Serialized: " + serialized);
        TreeNode deserialized = codec.deserialize(serialized);
        System.out.println("Deserialized root: " + deserialized.val);
    }
}
```

- **Time:** O(n)
- **Space:** O(n)

---

### Q34: Lowest Common Ancestor of BST

**Problem:** Given a BST, find the lowest common ancestor (LCA) of two given nodes. The LCA is the lowest node that has both p and q as descendants.

**Difficulty:** Medium

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· Bloomberg Â· Cisco

```java
public class LowestCommonAncestorBST {
    static class TreeNode {
        int val;
        TreeNode left, right;
        TreeNode(int val) { this.val = val; }
    }

    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        while (root != null) {
            if (p.val < root.val && q.val < root.val) {
                root = root.left;
            } else if (p.val > root.val && q.val > root.val) {
                root = root.right;
            } else {
                return root;
            }
        }
        return null;
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(6);
        root.left = new TreeNode(2); root.right = new TreeNode(8);
        root.left.left = new TreeNode(0); root.left.right = new TreeNode(4);
        root.left.right.left = new TreeNode(3); root.left.right.right = new TreeNode(5);
        root.right.left = new TreeNode(7); root.right.right = new TreeNode(9);
        LowestCommonAncestorBST solver = new LowestCommonAncestorBST();
        TreeNode lca = solver.lowestCommonAncestor(root, root.left, root.right);
        System.out.println("LCA of 2 and 8: " + lca.val);
    }
}
```

- **Time:** O(h) where h = tree height
- **Space:** O(1)

---

### Q35: Diameter of Binary Tree

**Problem:** Given the `root` of a binary tree, return the length of the diameter. The diameter is the longest path between any two nodes, measured by the number of edges.

**Difficulty:** Easy

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· Oracle Â· Adobe

```java
public class DiameterOfBinaryTree {
    static class TreeNode {
        int val;
        TreeNode left, right;
        TreeNode(int val) { this.val = val; }
    }

    private int diameter = 0;

    public int diameterOfBinaryTree(TreeNode root) {
        height(root);
        return diameter;
    }

    private int height(TreeNode root) {
        if (root == null) return 0;
        int leftHeight = height(root.left);
        int rightHeight = height(root.right);
        diameter = Math.max(diameter, leftHeight + rightHeight);
        return 1 + Math.max(leftHeight, rightHeight);
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);
        DiameterOfBinaryTree solver = new DiameterOfBinaryTree();
        System.out.println("Diameter: " + solver.diameterOfBinaryTree(root));
    }
}
```

- **Time:** O(n)
- **Space:** O(n)

---

### Q36: Balanced Binary Tree

**Problem:** Given a binary tree, determine if it is height-balanced. A height-balanced tree is one where the depth difference between left and right subtrees is at most 1 for every node.

**Difficulty:** Easy

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· Bloomberg Â· Walmart

```java
public class BalancedBinaryTree {
    static class TreeNode {
        int val;
        TreeNode left, right;
        TreeNode(int val) { this.val = val; }
    }

    public boolean isBalanced(TreeNode root) {
        return checkHeight(root) != -1;
    }

    private int checkHeight(TreeNode root) {
        if (root == null) return 0;
        int left = checkHeight(root.left);
        if (left == -1) return -1;
        int right = checkHeight(root.right);
        if (right == -1) return -1;
        if (Math.abs(left - right) > 1) return -1;
        return 1 + Math.max(left, right);
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(3);
        root.left = new TreeNode(9);
        root.right = new TreeNode(20);
        root.right.left = new TreeNode(15);
        root.right.right = new TreeNode(7);
        BalancedBinaryTree solver = new BalancedBinaryTree();
        System.out.println("Is balanced: " + solver.isBalanced(root));
    }
}
```

- **Time:** O(n)
- **Space:** O(n)

---

### Q37: Symmetric Tree

**Problem:** Given the `root` of a binary tree, check whether it is symmetric (mirror of itself about its center).

**Difficulty:** Easy

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· PayPal Â· Adobe

```java
public class SymmetricTree {
    static class TreeNode {
        int val;
        TreeNode left, right;
        TreeNode(int val) { this.val = val; }
    }

    public boolean isSymmetric(TreeNode root) {
        return root == null || isMirror(root.left, root.right);
    }

    private boolean isMirror(TreeNode t1, TreeNode t2) {
        if (t1 == null && t2 == null) return true;
        if (t1 == null || t2 == null) return false;
        return t1.val == t2.val
            && isMirror(t1.left, t2.right)
            && isMirror(t1.right, t2.left);
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2); root.right = new TreeNode(2);
        root.left.left = new TreeNode(3); root.right.right = new TreeNode(3);
        root.left.right = new TreeNode(4); root.right.left = new TreeNode(4);
        SymmetricTree solver = new SymmetricTree();
        System.out.println("Is symmetric: " + solver.isSymmetric(root));
    }
}
```

- **Time:** O(n)
- **Space:** O(n)

---

### Q38: Binary Tree Right Side View

**Problem:** Given the `root` of a binary tree, imagine yourself standing on the **right side** of it. Return the values of the nodes you can see ordered from top to bottom.

**Difficulty:** Medium

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· IBM Â· Adobe

```java
import java.util.*;

public class BinaryTreeRightSideView {
    static class TreeNode {
        int val;
        TreeNode left, right;
        TreeNode(int val) { this.val = val; }
    }

    public List<Integer> rightSideView(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        if (root == null) return result;
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        while (!queue.isEmpty()) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                TreeNode node = queue.poll();
                if (i == size - 1) result.add(node.val);
                if (node.left != null) queue.offer(node.left);
                if (node.right != null) queue.offer(node.right);
            }
        }
        return result;
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.right = new TreeNode(5);
        root.right.right = new TreeNode(4);
        BinaryTreeRightSideView solver = new BinaryTreeRightSideView();
        System.out.println("Right side view: " + solver.rightSideView(root));
    }
}
```

- **Time:** O(n)
- **Space:** O(n)

---

## Dynamic Programming

### Q39: Climbing Stairs

**Problem:** You are climbing a staircase with `n` steps. Each time you can climb 1 or 2 steps. Return the number of distinct ways to reach the top.

**Difficulty:** Easy

**Companies:** Amazon Â· Google Â· Microsoft Â· Apple Â· Meta Â· Bloomberg Â· Nvidia

```java
public class ClimbingStairs {
    public int climbStairs(int n) {
        if (n <= 2) return n;
        int first = 1, second = 2;
        for (int i = 3; i <= n; i++) {
            int third = first + second;
            first = second;
            second = third;
        }
        return second;
    }

    public static void main(String[] args) {
        ClimbingStairs solver = new ClimbingStairs();
        System.out.println("Ways for n=5: " + solver.climbStairs(5));
    }
}
```

- **Time:** O(n)
- **Space:** O(1)

---

### Q40: Coin Change

**Problem:** You are given an integer array `coins` representing different denominations and an integer `amount`. Return the fewest number of coins needed to make up that amount. If impossible, return -1.

**Difficulty:** Medium

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· Salesforce Â· Uber

```java
import java.util.Arrays;

public class CoinChange {
    public int coinChange(int[] coins, int amount) {
        int[] dp = new int[amount + 1];
        Arrays.fill(dp, amount + 1);
        dp[0] = 0;
        for (int i = 1; i <= amount; i++) {
            for (int coin : coins) {
                if (coin <= i) {
                    dp[i] = Math.min(dp[i], dp[i - coin] + 1);
                }
            }
        }
        return dp[amount] > amount ? -1 : dp[amount];
    }

    public static void main(String[] args) {
        CoinChange solver = new CoinChange();
        int[] coins = {1, 2, 5};
        System.out.println("Min coins for 11: " + solver.coinChange(coins, 11));
    }
}
```

- **Time:** O(amount Ã— n) â€” n = number of coin types
- **Space:** O(amount)

---

### Q41: Longest Increasing Subsequence

**Problem:** Given an integer array `nums`, return the length of the longest strictly increasing subsequence.

**Difficulty:** Medium

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· Bloomberg Â· Intel

```java
import java.util.Arrays;

public class LongestIncreasingSubsequence {
    public int lengthOfLIS(int[] nums) {
        int[] tails = new int[nums.length];
        int size = 0;
        for (int num : nums) {
            int i = Arrays.binarySearch(tails, 0, size, num);
            if (i < 0) i = -(i + 1);
            tails[i] = num;
            if (i == size) size++;
        }
        return size;
    }

    public static void main(String[] args) {
        LongestIncreasingSubsequence solver = new LongestIncreasingSubsequence();
        int[] nums = {10, 9, 2, 5, 3, 7, 101, 18};
        System.out.println("LIS length: " + solver.lengthOfLIS(nums));
    }
}
```

- **Time:** O(n log n) â€” binary search on tails
- **Space:** O(n)

---

### Q42: Longest Common Subsequence

**Problem:** Given two strings `text1` and `text2`, return the length of their longest common subsequence.

**Difficulty:** Medium

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· Netflix Â· Adobe

```java
public class LongestCommonSubsequence {
    public int longestCommonSubsequence(String text1, String text2) {
        int m = text1.length(), n = text2.length();
        int[][] dp = new int[m + 1][n + 1];
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (text1.charAt(i - 1) == text2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }
        return dp[m][n];
    }

    public static void main(String[] args) {
        LongestCommonSubsequence solver = new LongestCommonSubsequence();
        System.out.println("LCS of 'abcde' and 'ace': " + solver.longestCommonSubsequence("abcde", "ace"));
    }
}
```

- **Time:** O(mÂ·n)
- **Space:** O(mÂ·n)

---

### Q43: 0/1 Knapsack

**Problem:** Given `n` items each with a weight `w[i]` and value `v[i]`, and a knapsack capacity `W`, find the maximum value you can achieve by selecting items (each item at most once).

**Difficulty:** Medium

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· Cisco Â· Uber

```java
public class Knapsack01 {
    public int knapsack(int W, int[] wt, int[] val) {
        int n = val.length;
        int[][] dp = new int[n + 1][W + 1];
        for (int i = 1; i <= n; i++) {
            for (int w = 1; w <= W; w++) {
                if (wt[i - 1] <= w) {
                    dp[i][w] = Math.max(val[i - 1] + dp[i - 1][w - wt[i - 1]], dp[i - 1][w]);
                } else {
                    dp[i][w] = dp[i - 1][w];
                }
            }
        }
        return dp[n][W];
    }

    public static void main(String[] args) {
        Knapsack01 solver = new Knapsack01();
        int[] val = {60, 100, 120};
        int[] wt = {10, 20, 30};
        int W = 50;
        System.out.println("Max value: " + solver.knapsack(W, wt, val));
    }
}
```

- **Time:** O(n Â· W)
- **Space:** O(n Â· W) â€” can be optimized to O(W)

---

### Q44: Edit Distance

**Problem:** Given two strings `word1` and `word2`, return the minimum number of operations (insert, delete, replace) required to convert `word1` to `word2`.

**Difficulty:** Medium

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· Goldman Sachs Â· Uber Â· JP Morgan

```java
public class EditDistance {
    public int minDistance(String word1, String word2) {
        int m = word1.length(), n = word2.length();
        int[][] dp = new int[m + 1][n + 1];
        for (int i = 0; i <= m; i++) dp[i][0] = i;
        for (int j = 0; j <= n; j++) dp[0][j] = j;
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    dp[i][j] = 1 + Math.min(dp[i - 1][j - 1],
                                   Math.min(dp[i - 1][j], dp[i][j - 1]));
                }
            }
        }
        return dp[m][n];
    }

    public static void main(String[] args) {
        EditDistance solver = new EditDistance();
        System.out.println("Edit distance 'horse' -> 'ros': " + solver.minDistance("horse", "ros"));
    }
}
```

- **Time:** O(mÂ·n)
- **Space:** O(mÂ·n) â€” can be optimized to O(min(m,n))

---

### Q45: House Robber

**Problem:** Given an integer array `nums` representing the amount of money of each house, determine the max amount you can rob without robbing adjacent houses.

**Difficulty:** Medium

**Companies:** Amazon Â· Google Â· Microsoft Â· Apple Â· Meta Â· IBM Â· Adobe

```java
public class HouseRobber {
    public int rob(int[] nums) {
        if (nums.length == 0) return 0;
        if (nums.length == 1) return nums[0];
        int prev2 = nums[0];
        int prev1 = Math.max(nums[0], nums[1]);
        for (int i = 2; i < nums.length; i++) {
            int current = Math.max(prev1, nums[i] + prev2);
            prev2 = prev1;
            prev1 = current;
        }
        return prev1;
    }

    public static void main(String[] args) {
        HouseRobber solver = new HouseRobber();
        int[] nums = {2, 7, 9, 3, 1};
        System.out.println("Max rob: " + solver.rob(nums));
    }
}
```

- **Time:** O(n)
- **Space:** O(1)

---

### Q46: Maximum Product Subarray

**Problem:** Given an integer array `nums`, find a contiguous non-empty subarray with the largest product, and return the product.

**Difficulty:** Medium

**Companies:** Amazon Â· Google Â· Microsoft Â· LinkedIn Â· Meta Â· Apple Â· Walmart

```java
public class MaximumProductSubarray {
    public int maxProduct(int[] nums) {
        int maxProd = nums[0], minProd = nums[0], result = nums[0];
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] < 0) {
                int temp = maxProd;
                maxProd = minProd;
                minProd = temp;
            }
            maxProd = Math.max(nums[i], maxProd * nums[i]);
            minProd = Math.min(nums[i], minProd * nums[i]);
            result = Math.max(result, maxProd);
        }
        return result;
    }

    public static void main(String[] args) {
        MaximumProductSubarray solver = new MaximumProductSubarray();
        int[] nums = {2, 3, -2, 4};
        System.out.println("Max product: " + solver.maxProduct(nums));
    }
}
```

- **Time:** O(n)
- **Space:** O(1)

---

### Q47: Word Break

**Problem:** Given a string `s` and a dictionary `wordDict`, return `true` if `s` can be segmented into space-separated sequences of dictionary words.

**Difficulty:** Medium

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· PayPal Â· Uber

```java
import java.util.*;

public class WordBreak {
    public boolean wordBreak(String s, List<String> wordDict) {
        Set<String> dict = new HashSet<>(wordDict);
        boolean[] dp = new boolean[s.length() + 1];
        dp[0] = true;
        for (int i = 1; i <= s.length(); i++) {
            for (int j = 0; j < i; j++) {
                if (dp[j] && dict.contains(s.substring(j, i))) {
                    dp[i] = true;
                    break;
                }
            }
        }
        return dp[s.length()];
    }

    public static void main(String[] args) {
        WordBreak solver = new WordBreak();
        List<String> dict = Arrays.asList("leet", "code");
        System.out.println("'leetcode' can be segmented: " + solver.wordBreak("leetcode", dict));
    }
}
```

- **Time:** O(nÂ³) â€” substring is O(n)
- **Space:** O(n)

---

### Q48: Palindromic Substrings

**Problem:** Given a string `s`, return the number of palindromic substrings in it. A substring is a contiguous sequence of characters.

**Difficulty:** Medium

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· Oracle Â· Adobe

```java
public class PalindromicSubstrings {
    private int count = 0;

    public int countSubstrings(String s) {
        for (int i = 0; i < s.length(); i++) {
            expand(s, i, i);
            expand(s, i, i + 1);
        }
        return count;
    }

    private void expand(String s, int left, int right) {
        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            count++;
            left--;
            right++;
        }
    }

    public static void main(String[] args) {
        PalindromicSubstrings solver = new PalindromicSubstrings();
        System.out.println("Palindromic substrings in 'abc': " + solver.countSubstrings("abc"));
        System.out.println("Palindromic substrings in 'aaa': " + solver.countSubstrings("aaa"));
    }
}
```

- **Time:** O(nÂ²)
- **Space:** O(1)

---

### Q49: Unique Paths

**Problem:** A robot is at top-left corner of an `m Ã— n` grid. It can only move down or right. How many unique paths to bottom-right corner?

**Difficulty:** Medium

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· Bloomberg Â· Nvidia

```java
public class UniquePaths {
    public int uniquePaths(int m, int n) {
        int[][] dp = new int[m][n];
        for (int i = 0; i < m; i++) dp[i][0] = 1;
        for (int j = 0; j < n; j++) dp[0][j] = 1;
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
        return dp[m - 1][n - 1];
    }

    public static void main(String[] args) {
        UniquePaths solver = new UniquePaths();
        System.out.println("Unique paths for 3x7: " + solver.uniquePaths(3, 7));
    }
}
```

- **Time:** O(mÂ·n)
- **Space:** O(mÂ·n) â€” can be O(n)

---

### Q50: Partition Equal Subset Sum

**Problem:** Given a non-empty array `nums` containing only positive integers, check if it can be partitioned into two subsets with equal sum.

**Difficulty:** Medium

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· Salesforce Â· Adobe

```java
public class PartitionEqualSubsetSum {
    public boolean canPartition(int[] nums) {
        int total = 0;
        for (int num : nums) total += num;
        if (total % 2 != 0) return false;
        int target = total / 2;
        boolean[] dp = new boolean[target + 1];
        dp[0] = true;
        for (int num : nums) {
            for (int i = target; i >= num; i--) {
                dp[i] = dp[i] || dp[i - num];
            }
        }
        return dp[target];
    }

    public static void main(String[] args) {
        PartitionEqualSubsetSum solver = new PartitionEqualSubsetSum();
        int[] nums = {1, 5, 11, 5};
        System.out.println("Can partition: " + solver.canPartition(nums));
    }
}
```

- **Time:** O(n Â· target) where target = total/2
- **Space:** O(target)

---

## Graphs

### Q51: Clone Graph

**Problem:** Given a reference of a node in a connected undirected graph, return a deep copy of the graph.

**Difficulty:** Medium

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· Netflix Â· Uber

```java
import java.util.*;

public class CloneGraph {
    static class Node {
        int val;
        List<Node> neighbors;
        Node(int val) {
            this.val = val;
            neighbors = new ArrayList<>();
        }
    }

    private Map<Node, Node> visited = new HashMap<>();

    public Node cloneGraph(Node node) {
        if (node == null) return null;
        if (visited.containsKey(node)) return visited.get(node);
        Node copy = new Node(node.val);
        visited.put(node, copy);
        for (Node neighbor : node.neighbors) {
            copy.neighbors.add(cloneGraph(neighbor));
        }
        return copy;
    }

    public static void main(String[] args) {
        Node n1 = new Node(1);
        Node n2 = new Node(2);
        Node n3 = new Node(3);
        Node n4 = new Node(4);
        n1.neighbors.addAll(Arrays.asList(n2, n4));
        n2.neighbors.addAll(Arrays.asList(n1, n3));
        n3.neighbors.addAll(Arrays.asList(n2, n4));
        n4.neighbors.addAll(Arrays.asList(n1, n3));
        CloneGraph solver = new CloneGraph();
        Node cloned = solver.cloneGraph(n1);
        System.out.println("Cloned node " + cloned.val + " has neighbors: "
            + cloned.neighbors.stream().map(n -> String.valueOf(n.val)).reduce((a,b)->a+","+b).orElse(""));
    }
}
```

- **Time:** O(V + E)
- **Space:** O(V)

---

### Q52: Number of Islands

**Problem:** Given an `m Ã— n` 2D grid of `'1'` (land) and `'0'` (water), return the number of islands. An island is surrounded by water and formed by connecting adjacent lands horizontally or vertically.

**Difficulty:** Medium

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· Bloomberg Â· Intel

```java
public class NumberOfIslands {
    public int numIslands(char[][] grid) {
        if (grid == null || grid.length == 0) return 0;
        int count = 0;
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                if (grid[i][j] == '1') {
                    count++;
                    dfs(grid, i, j);
                }
            }
        }
        return count;
    }

    private void dfs(char[][] grid, int i, int j) {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] == '0') return;
        grid[i][j] = '0';
        dfs(grid, i + 1, j);
        dfs(grid, i - 1, j);
        dfs(grid, i, j + 1);
        dfs(grid, i, j - 1);
    }

    public static void main(String[] args) {
        NumberOfIslands solver = new NumberOfIslands();
        char[][] grid = {
            {'1','1','1','1','0'},
            {'1','1','0','1','0'},
            {'1','1','0','0','0'},
            {'0','0','0','0','0'}
        };
        System.out.println("Number of islands: " + solver.numIslands(grid));
    }
}
```

- **Time:** O(mÂ·n)
- **Space:** O(mÂ·n) worst-case recursion

---

### Q53: Course Schedule (Topological Sort)

**Problem:** There are `numCourses` courses labeled from 0 to numCourses-1. Given prerequisites `[a, b]` meaning to take `a` you must first take `b`, determine if it's possible to finish all courses.

**Difficulty:** Medium

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· Cisco Â· Adobe

```java
import java.util.*;

public class CourseSchedule {
    public boolean canFinish(int numCourses, int[][] prerequisites) {
        List<Integer>[] graph = new ArrayList[numCourses];
        int[] inDegree = new int[numCourses];
        for (int i = 0; i < numCourses; i++) graph[i] = new ArrayList<>();
        for (int[] p : prerequisites) {
            graph[p[1]].add(p[0]);
            inDegree[p[0]]++;
        }
        Queue<Integer> queue = new LinkedList<>();
        for (int i = 0; i < numCourses; i++) {
            if (inDegree[i] == 0) queue.offer(i);
        }
        int count = 0;
        while (!queue.isEmpty()) {
            int course = queue.poll();
            count++;
            for (int next : graph[course]) {
                if (--inDegree[next] == 0) queue.offer(next);
            }
        }
        return count == numCourses;
    }

    public static void main(String[] args) {
        CourseSchedule solver = new CourseSchedule();
        int[][] prereqs = {{1, 0}};
        System.out.println("Can finish 2 courses: " + solver.canFinish(2, prereqs));
    }
}
```

- **Time:** O(V + E)
- **Space:** O(V + E)

---

### Q54: Graph Valid Tree

**Problem:** Given `n` nodes labeled from 0 to n-1 and a list of undirected edges, determine if these edges form a valid tree (connected and acyclic).

**Difficulty:** Medium

**Companies:** Amazon Â· Google Â· LinkedIn Â· Microsoft Â· Meta Â· Apple Â· PayPal

```java
import java.util.*;

public class GraphValidTree {
    public boolean validTree(int n, int[][] edges) {
        if (edges.length != n - 1) return false;
        List<Integer>[] graph = new ArrayList[n];
        for (int i = 0; i < n; i++) graph[i] = new ArrayList<>();
        for (int[] e : edges) {
            graph[e[0]].add(e[1]);
            graph[e[1]].add(e[0]);
        }
        boolean[] visited = new boolean[n];
        Queue<Integer> queue = new LinkedList<>();
        queue.offer(0);
        visited[0] = true;
        int count = 0;
        while (!queue.isEmpty()) {
            int node = queue.poll();
            count++;
            for (int next : graph[node]) {
                if (!visited[next]) {
                    visited[next] = true;
                    queue.offer(next);
                }
            }
        }
        return count == n;
    }

    public static void main(String[] args) {
        GraphValidTree solver = new GraphValidTree();
        int[][] edges = {{0, 1}, {0, 2}, {0, 3}, {1, 4}};
        System.out.println("Valid tree (n=5): " + solver.validTree(5, edges));
    }
}
```

- **Time:** O(V + E)
- **Space:** O(V + E)

---

### Q55: Word Ladder

**Problem:** Given `beginWord`, `endWord`, and a `wordList`, return the length of the shortest transformation sequence from `beginWord` to `endWord` where each step changes exactly one letter and each intermediate word exists in `wordList`.

**Difficulty:** Hard

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· IBM Â· Uber

```java
import java.util.*;

public class WordLadder {
    public int ladderLength(String beginWord, String endWord, List<String> wordList) {
        Set<String> dict = new HashSet<>(wordList);
        if (!dict.contains(endWord)) return 0;
        Queue<String> queue = new LinkedList<>();
        queue.offer(beginWord);
        int level = 1;
        while (!queue.isEmpty()) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                char[] word = queue.poll().toCharArray();
                for (int j = 0; j < word.length; j++) {
                    char original = word[j];
                    for (char c = 'a'; c <= 'z'; c++) {
                        word[j] = c;
                        String next = new String(word);
                        if (next.equals(endWord)) return level + 1;
                        if (dict.contains(next)) {
                            dict.remove(next);
                            queue.offer(next);
                        }
                    }
                    word[j] = original;
                }
            }
            level++;
        }
        return 0;
    }

    public static void main(String[] args) {
        WordLadder solver = new WordLadder();
        List<String> wordList = Arrays.asList("hot", "dot", "dog", "lot", "log", "cog");
        System.out.println("Ladder length: " + solver.ladderLength("hit", "cog", wordList));
    }
}
```

- **Time:** O(MÂ² Â· N) â€” M = word length, N = dictionary size
- **Space:** O(M Â· N)

---

### Q56: Pacific Atlantic Water Flow

**Problem:** Given an `m Ã— n` matrix of heights, water flows from a cell to neighbors with equal or lower height. Return all cells where water can flow to both the Pacific (top/left edges) and Atlantic (bottom/right edges) oceans.

**Difficulty:** Medium

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· Walmart Â· Uber

```java
import java.util.*;

public class PacificAtlanticWaterFlow {
    public List<List<Integer>> pacificAtlantic(int[][] heights) {
        int m = heights.length, n = heights[0].length;
        boolean[][] pacific = new boolean[m][n];
        boolean[][] atlantic = new boolean[m][n];
        for (int i = 0; i < m; i++) {
            dfs(heights, pacific, i, 0, Integer.MIN_VALUE);
            dfs(heights, atlantic, i, n - 1, Integer.MIN_VALUE);
        }
        for (int j = 0; j < n; j++) {
            dfs(heights, pacific, 0, j, Integer.MIN_VALUE);
            dfs(heights, atlantic, m - 1, j, Integer.MIN_VALUE);
        }
        List<List<Integer>> result = new ArrayList<>();
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (pacific[i][j] && atlantic[i][j]) {
                    result.add(Arrays.asList(i, j));
                }
            }
        }
        return result;
    }

    private void dfs(int[][] heights, boolean[][] ocean, int i, int j, int prevHeight) {
        if (i < 0 || i >= heights.length || j < 0 || j >= heights[0].length) return;
        if (ocean[i][j] || heights[i][j] < prevHeight) return;
        ocean[i][j] = true;
        int h = heights[i][j];
        dfs(heights, ocean, i + 1, j, h);
        dfs(heights, ocean, i - 1, j, h);
        dfs(heights, ocean, i, j + 1, h);
        dfs(heights, ocean, i, j - 1, h);
    }

    public static void main(String[] args) {
        PacificAtlanticWaterFlow solver = new PacificAtlanticWaterFlow();
        int[][] heights = {
            {1, 2, 2, 3, 5},
            {3, 2, 3, 4, 4},
            {2, 4, 5, 3, 1},
            {6, 7, 1, 4, 5},
            {5, 1, 1, 2, 4}
        };
        System.out.println("Cells: " + solver.pacificAtlantic(heights));
    }
}
```

- **Time:** O(mÂ·n)
- **Space:** O(mÂ·n)

---

### Q57: Alien Dictionary

**Problem:** Given a sorted dictionary of an alien language (array of words), find the order of letters in the alien language.

**Difficulty:** Hard

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· Bloomberg Â· Nvidia

```java
import java.util.*;

public class AlienDictionary {
    public String alienOrder(String[] words) {
        Map<Character, Set<Character>> graph = new HashMap<>();
        Map<Character, Integer> inDegree = new HashMap<>();
        for (String w : words) {
            for (char c : w.toCharArray()) {
                graph.putIfAbsent(c, new HashSet<>());
                inDegree.putIfAbsent(c, 0);
            }
        }
        for (int i = 0; i < words.length - 1; i++) {
            String w1 = words[i], w2 = words[i + 1];
            int minLen = Math.min(w1.length(), w2.length());
            if (w1.length() > w2.length() && w1.startsWith(w2)) return "";
            for (int j = 0; j < minLen; j++) {
                char c1 = w1.charAt(j), c2 = w2.charAt(j);
                if (c1 != c2) {
                    if (!graph.get(c1).contains(c2)) {
                        graph.get(c1).add(c2);
                        inDegree.put(c2, inDegree.get(c2) + 1);
                    }
                    break;
                }
            }
        }
        Queue<Character> queue = new LinkedList<>();
        for (char c : inDegree.keySet()) {
            if (inDegree.get(c) == 0) queue.offer(c);
        }
        StringBuilder sb = new StringBuilder();
        while (!queue.isEmpty()) {
            char c = queue.poll();
            sb.append(c);
            for (char next : graph.get(c)) {
                inDegree.put(next, inDegree.get(next) - 1);
                if (inDegree.get(next) == 0) queue.offer(next);
            }
        }
        return sb.length() == inDegree.size() ? sb.toString() : "";
    }

    public static void main(String[] args) {
        AlienDictionary solver = new AlienDictionary();
        String[] words = {"wrt", "wrf", "er", "ett", "rftt"};
        System.out.println("Alien order: " + solver.alienOrder(words));
    }
}
```

- **Time:** O(C) â€” C = total characters
- **Space:** O(1) â€” max 26 letters

---

### Q58: Cheapest Flights Within K Stops

**Problem:** Find the cheapest price from `src` to `dst` with at most `k` stops. Given `n` cities and flights `[from, to, price]`.

**Difficulty:** Medium

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· Oracle Â· Uber

```java
import java.util.*;

public class CheapestFlightsWithinKStops {
    public int findCheapestPrice(int n, int[][] flights, int src, int dst, int k) {
        Map<Integer, List<int[]>> graph = new HashMap<>();
        for (int[] f : flights) {
            graph.computeIfAbsent(f[0], x -> new ArrayList<>()).add(new int[]{f[1], f[2]});
        }
        int[] dist = new int[n];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[src] = 0;
        Queue<int[]> queue = new PriorityQueue<>(Comparator.comparingInt(a -> a[1]));
        queue.offer(new int[]{src, 0, 0});
        while (!queue.isEmpty()) {
            int[] cur = queue.poll();
            int city = cur[0], price = cur[1], stops = cur[2];
            if (city == dst) return price;
            if (stops > k) continue;
            if (!graph.containsKey(city)) continue;
            for (int[] next : graph.get(city)) {
                int newPrice = price + next[1];
                if (newPrice < dist[next[0]]) {
                    dist[next[0]] = newPrice;
                    queue.offer(new int[]{next[0], newPrice, stops + 1});
                }
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        CheapestFlightsWithinKStops solver = new CheapestFlightsWithinKStops();
        int[][] flights = {{0, 1, 100}, {1, 2, 100}, {2, 0, 100}, {1, 3, 600}, {2, 3, 200}};
        System.out.println("Cheapest price: " + solver.findCheapestPrice(4, flights, 0, 3, 1));
    }
}
```

- **Time:** O(VÂ² log V) worst-case with Dijkstra
- **Space:** O(V + E)

---

## Stack / Queue / Heap

### Q59: Min Stack

**Problem:** Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

**Difficulty:** Medium

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· Bloomberg Â· Adobe

```java
import java.util.ArrayDeque;
import java.util.Deque;

public class MinStack {
    private Deque<Integer> stack = new ArrayDeque<>();
    private Deque<Integer> minStack = new ArrayDeque<>();

    public void push(int val) {
        stack.push(val);
        if (minStack.isEmpty() || val <= minStack.peek()) {
            minStack.push(val);
        }
    }

    public void pop() {
        if (stack.pop().equals(minStack.peek())) {
            minStack.pop();
        }
    }

    public int top() {
        return stack.peek();
    }

    public int getMin() {
        return minStack.peek();
    }

    public static void main(String[] args) {
        MinStack minStack = new MinStack();
        minStack.push(-2);
        minStack.push(0);
        minStack.push(-3);
        System.out.println("getMin: " + minStack.getMin());
        minStack.pop();
        System.out.println("top: " + minStack.top());
        System.out.println("getMin: " + minStack.getMin());
    }
}
```

- **Time:** O(1) for all operations
- **Space:** O(n)

---

### Q60: Daily Temperatures

**Problem:** Given an array of integers `temperatures`, return an array `answer` such that `answer[i]` is the number of days you have to wait after the ith day to get a warmer temperature.

**Difficulty:** Medium

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· Cisco Â· Adobe

```java
import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.Deque;

public class DailyTemperatures {
    public int[] dailyTemperatures(int[] temperatures) {
        int n = temperatures.length;
        int[] answer = new int[n];
        Deque<Integer> stack = new ArrayDeque<>();
        for (int i = 0; i < n; i++) {
            while (!stack.isEmpty() && temperatures[i] > temperatures[stack.peek()]) {
                int idx = stack.pop();
                answer[idx] = i - idx;
            }
            stack.push(i);
        }
        return answer;
    }

    public static void main(String[] args) {
        DailyTemperatures solver = new DailyTemperatures();
        int[] temps = {73, 74, 75, 71, 69, 72, 76, 73};
        int[] result = solver.dailyTemperatures(temps);
        System.out.println("Answer: " + Arrays.toString(result));
    }
}
```

- **Time:** O(n)
- **Space:** O(n)

---

### Q61: Kth Largest Element in an Array

**Problem:** Given an integer array `nums` and an integer `k`, return the káµ—Ê° largest element in the array (not k distinct elements, just the káµ—Ê° largest by value).

**Difficulty:** Medium

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· Salesforce Â· Adobe

```java
import java.util.PriorityQueue;

public class KthLargestElement {
    public int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> minHeap = new PriorityQueue<>(k);
        for (int num : nums) {
            minHeap.offer(num);
            if (minHeap.size() > k) minHeap.poll();
        }
        return minHeap.peek();
    }

    public static void main(String[] args) {
        KthLargestElement solver = new KthLargestElement();
        int[] nums = {3, 2, 1, 5, 6, 4};
        System.out.println("3rd largest: " + solver.findKthLargest(nums, 3));
    }
}
```

- **Time:** O(n log k)
- **Space:** O(k) â€” heap size

---

### Q62: Find Median from Data Stream

**Problem:** Implement a data structure supporting `addNum(int num)` and `findMedian()` returning the median of all added elements.

**Difficulty:** Hard

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· Goldman Sachs Â· Uber Â· JP Morgan

```java
import java.util.PriorityQueue;

public class MedianFinder {
    private PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a, b) -> b - a);
    private PriorityQueue<Integer> minHeap = new PriorityQueue<>();

    public void addNum(int num) {
        maxHeap.offer(num);
        minHeap.offer(maxHeap.poll());
        if (minHeap.size() > maxHeap.size()) {
            maxHeap.offer(minHeap.poll());
        }
    }

    public double findMedian() {
        if (maxHeap.size() > minHeap.size()) return maxHeap.peek();
        return (maxHeap.peek() + minHeap.peek()) / 2.0;
    }

    public static void main(String[] args) {
        MedianFinder mf = new MedianFinder();
        mf.addNum(1);
        mf.addNum(2);
        System.out.println("Median: " + mf.findMedian());
        mf.addNum(3);
        System.out.println("Median: " + mf.findMedian());
    }
}
```

- **Time:** O(log n) add, O(1) find
- **Space:** O(n)

---

### Q63: Top K Frequent Elements

**Problem:** Given an integer array `nums` and an integer `k`, return the k most frequent elements.

**Difficulty:** Medium

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· Bloomberg Â· Cisco

```java
import java.util.*;

public class TopKFrequentElements {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> freq = new HashMap<>();
        for (int num : nums) freq.put(num, freq.getOrDefault(num, 0) + 1);
        PriorityQueue<Map.Entry<Integer, Integer>> minHeap =
            new PriorityQueue<>(Comparator.comparingInt(Map.Entry::getValue));
        for (Map.Entry<Integer, Integer> entry : freq.entrySet()) {
            minHeap.offer(entry);
            if (minHeap.size() > k) minHeap.poll();
        }
        int[] result = new int[k];
        for (int i = k - 1; i >= 0; i--) result[i] = minHeap.poll().getKey();
        return result;
    }

    public static void main(String[] args) {
        TopKFrequentElements solver = new TopKFrequentElements();
        int[] nums = {1, 1, 1, 2, 2, 3};
        int[] result = solver.topKFrequent(nums, 2);
        System.out.println("Top k: " + Arrays.toString(result));
    }
}
```

- **Time:** O(n log k)
- **Space:** O(n + k)

---

### Q64: Largest Rectangle in Histogram

**Problem:** Given an array `heights` representing bar heights in a histogram (each bar width=1), return the area of the largest rectangle in the histogram.

**Difficulty:** Hard

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· Intel Â· Adobe

```java
import java.util.ArrayDeque;
import java.util.Deque;

public class LargestRectangleInHistogram {
    public int largestRectangleArea(int[] heights) {
        Deque<Integer> stack = new ArrayDeque<>();
        int maxArea = 0;
        for (int i = 0; i <= heights.length; i++) {
            int h = (i == heights.length) ? 0 : heights[i];
            while (!stack.isEmpty() && h < heights[stack.peek()]) {
                int height = heights[stack.pop()];
                int width = stack.isEmpty() ? i : i - stack.peek() - 1;
                maxArea = Math.max(maxArea, height * width);
            }
            stack.push(i);
        }
        return maxArea;
    }

    public static void main(String[] args) {
        LargestRectangleInHistogram solver = new LargestRectangleInHistogram();
        int[] heights = {2, 1, 5, 6, 2, 3};
        System.out.println("Largest area: " + solver.largestRectangleArea(heights));
    }
}
```

- **Time:** O(n)
- **Space:** O(n)

---

### Q65: Sliding Window Maximum

**Problem:** Given an array `nums` and a sliding window of size `k`, find the maximum element in each window.

**Difficulty:** Hard

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· IBM Â· Uber

```java
import java.util.*;

public class SlidingWindowMaximum {
    public int[] maxSlidingWindow(int[] nums, int k) {
        if (nums.length == 0 || k == 0) return new int[0];
        int[] result = new int[nums.length - k + 1];
        Deque<Integer> deque = new ArrayDeque<>();
        for (int i = 0; i < nums.length; i++) {
            while (!deque.isEmpty() && deque.peekFirst() < i - k + 1) deque.pollFirst();
            while (!deque.isEmpty() && nums[deque.peekLast()] < nums[i]) deque.pollLast();
            deque.offerLast(i);
            if (i >= k - 1) result[i - k + 1] = nums[deque.peekFirst()];
        }
        return result;
    }

    public static void main(String[] args) {
        SlidingWindowMaximum solver = new SlidingWindowMaximum();
        int[] nums = {1, 3, -1, -3, 5, 3, 6, 7};
        int[] result = solver.maxSlidingWindow(nums, 3);
        System.out.println("Maxima: " + Arrays.toString(result));
    }
}
```

- **Time:** O(n)
- **Space:** O(k)

---

## Searching & Sorting

### Q66: Binary Search (First and Last Position)

**Problem:** Given a sorted array of integers `nums` and a target, find the starting and ending position of the target. Return `[-1, -1]` if not found.

**Difficulty:** Medium

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· Bloomberg Â· Intel

```java
import java.util.Arrays;

public class BinarySearchFirstLast {
    public int[] searchRange(int[] nums, int target) {
        int[] result = {-1, -1};
        int left = findBound(nums, target, true);
        if (left == nums.length || nums[left] != target) return result;
        result[0] = left;
        result[1] = findBound(nums, target, false) - 1;
        return result;
    }

    private int findBound(int[] nums, int target, boolean isFirst) {
        int left = 0, right = nums.length;
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] > target || (isFirst && nums[mid] == target)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }

    public static void main(String[] args) {
        BinarySearchFirstLast solver = new BinarySearchFirstLast();
        int[] nums = {5, 7, 7, 8, 8, 10};
        int[] result = solver.searchRange(nums, 8);
        System.out.println("Range: " + Arrays.toString(result));
    }
}
```

- **Time:** O(log n)
- **Space:** O(1)

---

### Q67: Search in Rotated Sorted Array

**Problem:** There is an integer array `nums` sorted in ascending order (with distinct values), possibly rotated at an unknown pivot. Search for a target, return index or -1. Must run in O(log n).

**Difficulty:** Medium

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· Oracle Â· Uber

```java
public class SearchInRotatedSortedArray {
    public int search(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] == target) return mid;
            if (nums[left] <= nums[mid]) {
                if (target >= nums[left] && target < nums[mid]) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else {
                if (target > nums[mid] && target <= nums[right]) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        SearchInRotatedSortedArray solver = new SearchInRotatedSortedArray();
        int[] nums = {4, 5, 6, 7, 0, 1, 2};
        System.out.println("Index of 0: " + solver.search(nums, 0));
    }
}
```

- **Time:** O(log n)
- **Space:** O(1)

---

### Q68: Kth Smallest Element in a Sorted Matrix

**Problem:** Given an `n Ã— n` matrix where each row and column is sorted, find the káµ—Ê° smallest element.

**Difficulty:** Medium

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· PayPal Â· Adobe

```java
import java.util.PriorityQueue;

public class KthSmallestInSortedMatrix {
    public int kthSmallest(int[][] matrix, int k) {
        int n = matrix.length;
        PriorityQueue<int[]> minHeap = new PriorityQueue<>((a, b) -> a[0] - b[0]);
        for (int j = 0; j < n; j++) minHeap.offer(new int[]{matrix[0][j], 0, j});
        for (int i = 0; i < k - 1; i++) {
            int[] cur = minHeap.poll();
            int r = cur[1], c = cur[2];
            if (r + 1 < n) minHeap.offer(new int[]{matrix[r + 1][c], r + 1, c});
        }
        return minHeap.poll()[0];
    }

    public static void main(String[] args) {
        KthSmallestInSortedMatrix solver = new KthSmallestInSortedMatrix();
        int[][] matrix = {
            {1, 5, 9},
            {10, 11, 13},
            {12, 13, 15}
        };
        System.out.println("8th smallest: " + solver.kthSmallest(matrix, 8));
    }
}
```

- **Time:** O(k log n)
- **Space:** O(n)

---

### Q69: Find Peak Element

**Problem:** A peak element is an element strictly greater than its neighbors. Given an integer array `nums`, find a peak element and return its index. The array may contain multiple peaks; return any. Must be O(log n).

**Difficulty:** Medium

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· Bloomberg Â· Nvidia

```java
public class FindPeakElement {
    public int findPeakElement(int[] nums) {
        int left = 0, right = nums.length - 1;
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] > nums[mid + 1]) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }

    public static void main(String[] args) {
        FindPeakElement solver = new FindPeakElement();
        int[] nums = {1, 2, 3, 1};
        System.out.println("Peak index: " + solver.findPeakElement(nums));
    }
}
```

- **Time:** O(log n)
- **Space:** O(1)

---

### Q70: Merge Sorted Array

**Problem:** You are given two integer arrays `nums1` (size m + n) and `nums2` (size n), sorted in ascending order. Merge `nums2` into `nums1` in-place (use the extra space at the end of `nums1`).

**Difficulty:** Easy

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· Walmart Â· Adobe

```java
import java.util.Arrays;

public class MergeSortedArray {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int i = m - 1, j = n - 1, k = m + n - 1;
        while (j >= 0) {
            if (i >= 0 && nums1[i] > nums2[j]) {
                nums1[k--] = nums1[i--];
            } else {
                nums1[k--] = nums2[j--];
            }
        }
    }

    public static void main(String[] args) {
        MergeSortedArray solver = new MergeSortedArray();
        int[] nums1 = {1, 2, 3, 0, 0, 0};
        int[] nums2 = {2, 5, 6};
        solver.merge(nums1, 3, nums2, 3);
        System.out.println("Merged: " + Arrays.toString(nums1));
    }
}
```

- **Time:** O(m + n)
- **Space:** O(1)

---

## Miscellaneous

### Q71: Roman to Integer

**Problem:** Given a valid Roman numeral string, convert it to an integer. Roman numerals use I=1, V=5, X=10, L=50, C=100, D=500, M=1000, with subtractive notation (IV=4, IX=9, XL=40, etc.).

**Difficulty:** Easy

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· Bloomberg Â· Adobe

```java
import java.util.Map;

public class RomanToInteger {
    public int romanToInt(String s) {
        Map<Character, Integer> map = Map.of(
            'I', 1, 'V', 5, 'X', 10, 'L', 50,
            'C', 100, 'D', 500, 'M', 1000
        );
        int total = 0, prev = 0;
        for (int i = s.length() - 1; i >= 0; i--) {
            int curr = map.get(s.charAt(i));
            if (curr < prev) {
                total -= curr;
            } else {
                total += curr;
            }
            prev = curr;
        }
        return total;
    }

    public static void main(String[] args) {
        RomanToInteger solver = new RomanToInteger();
        System.out.println("MCMXCIV = " + solver.romanToInt("MCMXCIV"));
        System.out.println("LVIII = " + solver.romanToInt("LVIII"));
    }
}
```

- **Time:** O(n)
- **Space:** O(1)

---

### Q72: Excel Sheet Column Number

**Problem:** Given a string `columnTitle` (like "A", "AB", "ZY"), return its corresponding column number. A â†’ 1, B â†’ 2, ..., Z â†’ 26, AA â†’ 27, AB â†’ 28.

**Difficulty:** Easy

**Companies:** Amazon Â· Google Â· Microsoft Â· Meta Â· Apple Â· Oracle Â· Adobe

```java
public class ExcelSheetColumnNumber {
    public int titleToNumber(String columnTitle) {
        int result = 0;
        for (char c : columnTitle.toCharArray()) {
            result = result * 26 + (c - 'A' + 1);
        }
        return result;
    }

    public static void main(String[] args) {
        ExcelSheetColumnNumber solver = new ExcelSheetColumnNumber();
        System.out.println("A -> " + solver.titleToNumber("A"));
        System.out.println("AB -> " + solver.titleToNumber("AB"));
        System.out.println("ZY -> " + solver.titleToNumber("ZY"));
    }
}
```

- **Time:** O(n)
- **Space:** O(1)

---

### Q73: Happy Number

**Problem:** A happy number is defined by the following process: Starting with any positive integer, replace it by the sum of squares of its digits, and repeat until it equals 1 (it is happy) or loops endlessly in a cycle that does not include 1. Return true if n is a happy number.

**Difficulty:** Easy

**Companies:** Amazon Â· Google Â· Microsoft Â· Apple Â· Meta Â· Bloomberg Â· Nvidia

```java
import java.util.HashSet;
import java.util.Set;

public class HappyNumber {
    public boolean isHappy(int n) {
        Set<Integer> seen = new HashSet<>();
        while (n != 1 && seen.add(n)) {
            int sum = 0;
            while (n > 0) {
                int digit = n % 10;
                sum += digit * digit;
                n /= 10;
            }
            n = sum;
        }
        return n == 1;
    }

    public static void main(String[] args) {
        HappyNumber solver = new HappyNumber();
        System.out.println("19 is happy: " + solver.isHappy(19));
        System.out.println("2 is happy: " + solver.isHappy(2));
    }
}
```

- **Time:** O(log n) â€” digit count shrinks fast
- **Space:** O(log n)

---

### Q74: Power of Three (Without Loop/Recursion)

**Problem:** Given an integer `n`, return `true` if it is a power of three. Solve without loops or recursion.

**Difficulty:** Easy

**Companies:** Google Â· Amazon Â· Microsoft Â· Apple Â· Meta Â· Bloomberg Â· Adobe

```java
public class PowerOfThree {
    public boolean isPowerOfThree(int n) {
        return n > 0 && 1162261467 % n == 0;
    }

    public static void main(String[] args) {
        PowerOfThree solver = new PowerOfThree();
        System.out.println("27 is power of three: " + solver.isPowerOfThree(27));
        System.out.println("0 is power of three: " + solver.isPowerOfThree(0));
        System.out.println("45 is power of three: " + solver.isPowerOfThree(45));
    }
}
```

- **Time:** O(1)
- **Space:** O(1)

> **Explanation:** 1162261467 = 3Â¹â¹, the largest power of three that fits in a 32-bit signed integer. Any power of three divides this number.

---

### Q75: Fizz Buzz

**Problem:** Given an integer `n`, return a string array answer (1-indexed) where:
- `answer[i] = "FizzBuzz"` if i is divisible by 3 and 5
- `answer[i] = "Fizz"` if i is divisible by 3
- `answer[i] = "Buzz"` if i is divisible by 5
- `answer[i] = i` as a string otherwise

**Difficulty:** Easy

**Companies:** Amazon Â· Google Â· Microsoft Â· Apple Â· Meta Â· Bloomberg Â· Adobe

```java
import java.util.*;

public class FizzBuzz {
    public List<String> fizzBuzz(int n) {
        List<String> result = new ArrayList<>();
        for (int i = 1; i <= n; i++) {
            if (i % 15 == 0) {
                result.add("FizzBuzz");
            } else if (i % 3 == 0) {
                result.add("Fizz");
            } else if (i % 5 == 0) {
                result.add("Buzz");
            } else {
                result.add(String.valueOf(i));
            }
        }
        return result;
    }

    public static void main(String[] args) {
        FizzBuzz solver = new FizzBuzz();
        System.out.println("FizzBuzz(15): " + solver.fizzBuzz(15));
    }
}
```

- **Time:** O(n)
- **Space:** O(n)

---

## Company Index

| Company | Problem Numbers |
|---------|----------------|
| Amazon | 1–75 |
| Google | 1–75 |
| Microsoft | 1–75 |
| Meta | 1–75 |
| Apple | 1–75 |
| Bloomberg | 1, 2, 4, 5, 6, 7, 8, 9, 11, 13, 14, 15, 16, 18, 19, 20, 21, 22, 24, 26, 28, 29, 31, 32, 34, 36, 37, 39, 41, 49, 52, 57, 59, 63, 66, 69, 71, 73, 74, 75 |
| Uber | 1, 2, 3, 5, 8, 12, 24, 26, 28, 30, 33, 40, 41, 43, 44, 47, 51, 55, 56, 57, 58, 62, 65, 67 |
| Adobe | 3, 6, 10, 12, 23, 25, 27, 35, 36, 37, 38, 42, 45, 48, 50, 53, 59, 60, 61, 63, 64, 68, 70, 71, 72, 74, 75 |
| LinkedIn | 4, 17, 46, 54 |
| Netflix | 7, 11, 28, 42, 51 |
| Goldman Sachs | 2, 9, 18, 33, 44, 62 |
| Oracle | 5, 12, 22, 35, 48, 58, 67 |
| IBM | 20, 29, 38, 55, 65 |
| Salesforce | 17, 19, 30, 40, 50, 61 |
| Intel | 13, 24, 32, 41, 52, 64, 66 |
| Cisco | 8, 16, 25, 34, 43, 53, 60, 63 |
| Nvidia | 14, 21, 31, 39, 49, 57, 69, 73 |
| Walmart | 10, 27, 36, 46, 56, 70 |
| PayPal | 15, 23, 28, 37, 47, 54, 68 |
| JP Morgan | 2, 18, 33, 44, 62 |

> **End of DSA Problem Bank.** All 75 solutions include complete, compilable Java code with `main` methods. Practice each problem by first attempting without looking at the solution, then reviewing the approach and complexity analysis.
