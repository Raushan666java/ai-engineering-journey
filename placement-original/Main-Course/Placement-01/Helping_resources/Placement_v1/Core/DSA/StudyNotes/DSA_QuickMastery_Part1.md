# 🚀 DSA Quick Mastery Guide - Part 1: Learning Strategy & Arrays

## 🧠 Optimal Learning Method

### 1. **Spaced Repetition System**
- Study each topic once
- Review after 1 day, 3 days, 7 days, and 14 days
- Use flashcards for key concepts and patterns

### 2. **Pattern Recognition Approach**
- Group similar problems by pattern
- Master the pattern, not individual problems
- Apply pattern variations to new problems

### 3. **Implementation-First Learning**
- Code every concept immediately
- Start with brute force, then optimize
- Focus on edge cases and time/space complexity

### 4. **Active Recall Practice**
- Solve problems without looking at solutions
- Explain your approach out loud (Feynman Technique)
- Teach concepts to reinforce understanding

## 📊 DSA Topic Roadmap

### Week 1-2: Arrays & Strings
### Week 3: Linked Lists, Stacks & Queues
### Week 4-5: Trees & Graphs
### Week 6: Sorting & Searching
### Week 7-8: Dynamic Programming & Greedy

---

# 📚 TOPIC 1: ARRAYS & STRINGS

## Core Concepts

### Arrays Fundamentals
```java
// Declaration and initialization
int[] arr = new int[5];
int[] arr = {1, 2, 3, 4, 5};

// Time Complexities
// Access: O(1)
// Search: O(n) - unsorted, O(log n) - sorted
// Insert/Delete: O(n)
```

### Key Array Techniques

#### 1. Two Pointer Technique
```java
// Example: Two Sum (sorted array)
public int[] twoSum(int[] nums, int target) {
    int left = 0, right = nums.length - 1;
    while (left < right) {
        int sum = nums[left] + nums[right];
        if (sum == target) return new int[]{left, right};
        if (sum < target) left++;
        else right--;
    }
    return new int[]{-1, -1};
}
```

#### 2. Sliding Window
```java
// Fixed-size window: Max sum subarray of size k
public int maxSumSubarray(int[] nums, int k) {
    int maxSum = 0, windowSum = 0;
    for (int i = 0; i < nums.length; i++) {
        windowSum += nums[i];
        if (i >= k - 1) {
            maxSum = Math.max(maxSum, windowSum);
            windowSum -= nums[i - (k - 1)]; // Remove leftmost element
        }
    }
    return maxSum;
}

// Variable-size window: Smallest subarray with sum >= target
public int minSubArrayLen(int target, int[] nums) {
    int left = 0, sum = 0, minLen = Integer.MAX_VALUE;
    for (int right = 0; right < nums.length; right++) {
        sum += nums[right];
        while (sum >= target) {
            minLen = Math.min(minLen, right - left + 1);
            sum -= nums[left++];
        }
    }
    return minLen == Integer.MAX_VALUE ? 0 : minLen;
}
```

#### 3. Prefix Sum
```java
// Build prefix sum array
int[] prefixSum = new int[nums.length + 1];
for (int i = 0; i < nums.length; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i];
}

// Range sum query: sum of elements from index i to j
int rangeSum = prefixSum[j + 1] - prefixSum[i];
```

#### 4. Kadane's Algorithm
```java
// Maximum Subarray Sum
public int maxSubArray(int[] nums) {
    int maxSoFar = nums[0], maxEndingHere = nums[0];
    for (int i = 1; i < nums.length; i++) {
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    return maxSoFar;
}
```

### String Techniques

#### 1. String Manipulation
```java
// String vs StringBuilder
String s = "";
for (int i = 0; i < n; i++) {
    s += i; // O(n²) - creates new string each time
}

StringBuilder sb = new StringBuilder();
for (int i = 0; i < n; i++) {
    sb.append(i); // O(n) - modifies in place
}
String result = sb.toString();
```

#### 2. String Matching
```java
// Check if string contains pattern
boolean contains = s.indexOf(pattern) != -1;

// KMP Algorithm for pattern matching - O(n+m)
public int[] computeLPS(String pattern) {
    int[] lps = new int[pattern.length()];
    int len = 0, i = 1;
    while (i < pattern.length()) {
        if (pattern.charAt(i) == pattern.charAt(len)) {
            lps[i++] = ++len;
        } else if (len > 0) {
            len = lps[len - 1];
        } else {
            lps[i++] = 0;
        }
    }
    return lps;
}
```

## 🎯 Problem Patterns & Solutions

### Pattern 1: Two Sum Pattern
```java
// Two Sum - HashMap approach O(n)
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

// Three Sum - Sort + Two Pointers O(n²)
public List<List<Integer>> threeSum(int[] nums) {
    Arrays.sort(nums);
    List<List<Integer>> result = new ArrayList<>();
    for (int i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] == nums[i-1]) continue; // Skip duplicates
        int left = i + 1, right = nums.length - 1;
        while (left < right) {
            int sum = nums[i] + nums[left] + nums[right];
            if (sum < 0) left++;
            else if (sum > 0) right--;
            else {
                result.add(Arrays.asList(nums[i], nums[left], nums[right]));
                while (left < right && nums[left] == nums[left+1]) left++; // Skip duplicates
                while (left < right && nums[right] == nums[right-1]) right--; // Skip duplicates
                left++; right--;
            }
        }
    }
    return result;
}
```

### Pattern 2: Sliding Window Pattern
```java
// Longest Substring Without Repeating Characters
public int lengthOfLongestSubstring(String s) {
    Map<Character, Integer> charIndex = new HashMap<>();
    int maxLength = 0, left = 0;
    for (int right = 0; right < s.length(); right++) {
        char c = s.charAt(right);
        if (charIndex.containsKey(c)) {
            left = Math.max(left, charIndex.get(c) + 1);
        }
        charIndex.put(c, right);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}
```

## 🔄 Quick Revision Questions

### Easy Level
1. Find the maximum element in an array
2. Check if array contains duplicates
3. Reverse a string
4. Valid anagram check
5. Merge two sorted arrays

### Medium Level
1. Maximum subarray sum (Kadane's)
2. Container with most water
3. Longest palindromic substring
4. Rotate matrix by 90 degrees
5. Next permutation