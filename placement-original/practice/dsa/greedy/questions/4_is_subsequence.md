# 4. IS SUBSEQUENCE (LeetCode 392)

## Problem Statement
Given two strings `s` and `t`, return `true` if `s` is a subsequence of `t`, or `false` otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

## Conceptual Understanding

### What is a Subsequence?
- **Order preserved**: Characters appear in same relative order
- **Not necessarily contiguous**: Can have gaps between characters
- **Can be empty**: Empty string is subsequence of any string

### Greedy Approach
- **Two pointers**: One for each string
- **Greedy matching**: Move both pointers when characters match
- **Always move t pointer**: To find next potential match

### Why Greedy Works?
1. **Optimal matching**: Each character in s must be found in order
2. **No backtracking needed**: Once matched, move forward
3. **Single pass**: Linear time solution

## Solution Approach

### Method 1: Two Pointers (Greedy)
```java
public boolean isSubsequence(String s, String t) {
    int i = 0, j = 0;  // i for s, j for t

    while (i < s.length() && j < t.length()) {
        if (s.charAt(i) == t.charAt(j)) {
            i++;  // Move s pointer when match found
        }
        j++;  // Always move t pointer
    }

    return i == s.length();  // All characters in s found
}
```

### Why This Works:
- **Greedy choice**: Match characters as soon as possible
- **Order preservation**: Only move s pointer on match
- **Early termination**: Stop when either string exhausted

## Time & Space Complexity
- **Time**: O(n + m) where n = len(s), m = len(t)
- **Space**: O(1) - no extra space used

## Edge Cases & Testing
```java
// Test Case 1: Basic subsequence
String s1 = "abc", t1 = "ahbgdc";  // true

// Test Case 2: Not a subsequence
String s2 = "axc", t2 = "ahbgdc";  // false

// Test Case 3: Empty s
String s3 = "", t3 = "abc";  // true

// Test Case 4: Empty t, non-empty s
String s4 = "a", t4 = "";  // false

// Test Case 5: Same strings
String s5 = "abc", t5 = "abc";  // true

// Test Case 6: Single character
String s6 = "a", t6 = "abc";  // true
```

## Alternative Approaches

### Method 2: Using IndexOf (Less Efficient)
```java
public boolean isSubsequenceIndexOf(String s, String t) {
    int index = -1;
    for (char c : s.toCharArray()) {
        index = t.indexOf(c, index + 1);
        if (index == -1) return false;
    }
    return true;
}
// Time: O(n * m) in worst case
```

### Method 3: Recursive (Not Recommended)
```java
public boolean isSubsequenceRecursive(String s, String t) {
    if (s.length() == 0) return true;
    if (t.length() == 0) return false;

    if (s.charAt(0) == t.charAt(0)) {
        return isSubsequenceRecursive(s.substring(1), t.substring(1));
    } else {
        return isSubsequenceRecursive(s, t.substring(1));
    }
}
// Time: O(2^n) in worst case - exponential!
```

## Key Insights
1. **Greedy matching**: No need to backtrack or try alternatives
2. **Two pointers**: Efficient way to track progress
3. **Order matters**: Must maintain relative positions
4. **Early exit**: Can return false as soon as mismatch detected

## Similar Problems
- **Longest Common Subsequence**: DP approach needed
- **Is Substring**: Contiguous characters required
- **Word Search**: 2D grid with backtracking

## Interview Tips
- Explain why two pointers work for this problem
- Discuss difference between subsequence and substring
- Mention the recursive approach and its inefficiency
- Consider edge cases with empty strings</content>
<parameter name="filePath">c:\xampp\htdocs\Placement\practice\dsa\greedy\questions\4_is_subsequence.md