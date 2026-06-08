# 🔤 Strings - Complete Question Set (Love Babbar + Striver)
## Total: 49 Questions with Java Solutions & Theory

---

## 📋 Theory & Patterns

### Key Patterns:
1. **Two Pointers** - Palindromes, character matching
2. **Sliding Window** - Substring problems, anagrams
3. **Dynamic Programming** - Edit distance, LCS, palindromes
4. **Pattern Matching** - KMP, Rabin-Karp algorithms
5. **Hashing** - Frequency maps, character counting
6. **Stack** - Expression evaluation, balanced parentheses

### Important String Algorithms:
- **KMP (Knuth-Morris-Pratt)** - Pattern searching in O(n+m)
- **Rabin-Karp** - Rolling hash for pattern matching
- **Manacher's Algorithm** - All palindromes in O(n)
- **Z-Algorithm** - Pattern matching and preprocessing

---

## 💡 Love Babbar String Questions (47-75)

### 47. Reverse a String
**Problem**: Reverse characters in a string  
**Difficulty**: Easy  
**Pattern**: Two Pointers

```java
public String reverseString(String s) {
    char[] arr = s.toCharArray();
    int left = 0, right = arr.length - 1;
    
    while (left < right) {
        char temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    
    return new String(arr);
}

// Using StringBuilder (more efficient for Java)
public String reverseStringBuilder(String s) {
    return new StringBuilder(s).reverse().toString();
}
```
**Time**: O(n), **Space**: O(1)

---

### 48. Check if String is Palindrome
**Problem**: Check if string reads same forwards and backwards  
**Difficulty**: Easy  
**Pattern**: Two Pointers

```java
public boolean isPalindrome(String s) {
    // Remove non-alphanumeric and convert to lowercase
    s = s.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
    
    int left = 0, right = s.length() - 1;
    
    while (left < right) {
        if (s.charAt(left) != s.charAt(right)) {
            return false;
        }
        left++;
        right--;
    }
    
    return true;
}

// More efficient - check without creating new string
public boolean isPalindromeEfficient(String s) {
    int left = 0, right = s.length() - 1;
    
    while (left < right) {
        while (left < right && !Character.isAlphaNumeric(s.charAt(left))) {
            left++;
        }
        while (left < right && !Character.isAlphaNumeric(s.charAt(right))) {
            right--;
        }
        
        if (Character.toLowerCase(s.charAt(left)) != Character.toLowerCase(s.charAt(right))) {
            return false;
        }
        
        left++;
        right--;
    }
    
    return true;
}
```
**Time**: O(n), **Space**: O(1)

---

### 49. Find Duplicate Characters
**Problem**: Find all duplicate characters in string  
**Difficulty**: Easy  
**Pattern**: Hashing

```java
import java.util.*;

public void findDuplicates(String str) {
    Map<Character, Integer> freq = new HashMap<>();
    
    // Count frequency of each character
    for (char c : str.toCharArray()) {
        freq.put(c, freq.getOrDefault(c, 0) + 1);
    }
    
    System.out.println("Duplicate characters:");
    for (Map.Entry<Character, Integer> entry : freq.entrySet()) {
        if (entry.getValue() > 1) {
            System.out.println(entry.getKey() + " appears " + entry.getValue() + " times");
        }
    }
}

// Using array for ASCII characters (more efficient)
public void findDuplicatesArray(String str) {
    int[] freq = new int[256]; // ASCII characters
    
    for (char c : str.toCharArray()) {
        freq[c]++;
    }
    
    System.out.println("Duplicate characters:");
    for (int i = 0; i < 256; i++) {
        if (freq[i] > 1) {
            System.out.println((char)i + " appears " + freq[i] + " times");
        }
    }
}
```
**Time**: O(n), **Space**: O(1) for ASCII

---

### 50. Check if Strings are Rotations
**Problem**: Check if one string is rotation of another  
**Difficulty**: Medium  
**Pattern**: String Concatenation

```java
public boolean areRotations(String s1, String s2) {
    // Check if lengths are same and not empty
    if (s1.length() != s2.length() || s1.length() == 0) {
        return false;
    }
    
    // Concatenate s1 with itself
    String concatenated = s1 + s1;
    
    // If s2 is rotation of s1, it will be substring of concatenated
    return concatenated.contains(s2);
}

// Using KMP for better complexity analysis
public boolean areRotationsKMP(String s1, String s2) {
    if (s1.length() != s2.length() || s1.length() == 0) {
        return false;
    }
    
    String concatenated = s1 + s1;
    return kmpSearch(concatenated, s2) != -1;
}

private int kmpSearch(String text, String pattern) {
    int[] lps = computeLPS(pattern);
    int i = 0, j = 0;
    
    while (i < text.length()) {
        if (text.charAt(i) == pattern.charAt(j)) {
            i++;
            j++;
        }
        
        if (j == pattern.length()) {
            return i - j; // Found at index i-j
        } else if (i < text.length() && text.charAt(i) != pattern.charAt(j)) {
            if (j != 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }
    
    return -1; // Not found
}

private int[] computeLPS(String pattern) {
    int[] lps = new int[pattern.length()];
    int len = 0, i = 1;
    
    while (i < pattern.length()) {
        if (pattern.charAt(i) == pattern.charAt(len)) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len != 0) {
                len = lps[len - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
    
    return lps;
}
```
**Time**: O(n), **Space**: O(n)

---

### 51. Check if String is Shuffle
**Problem**: Check if third string is shuffle of two strings  
**Difficulty**: Medium  
**Pattern**: Dynamic Programming

```java
public boolean isInterleave(String s1, String s2, String s3) {
    int m = s1.length(), n = s2.length(), l = s3.length();
    
    if (m + n != l) return false;
    
    // dp[i][j] represents if s3[0...i+j-1] is interleaving of s1[0...i-1] and s2[0...j-1]
    boolean[][] dp = new boolean[m + 1][n + 1];
    
    dp[0][0] = true;
    
    // Fill first row (only s2 characters)
    for (int j = 1; j <= n; j++) {
        dp[0][j] = dp[0][j-1] && (s2.charAt(j-1) == s3.charAt(j-1));
    }
    
    // Fill first column (only s1 characters)
    for (int i = 1; i <= m; i++) {
        dp[i][0] = dp[i-1][0] && (s1.charAt(i-1) == s3.charAt(i-1));
    }
    
    // Fill rest of the table
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            dp[i][j] = (dp[i-1][j] && s1.charAt(i-1) == s3.charAt(i+j-1)) ||
                       (dp[i][j-1] && s2.charAt(j-1) == s3.charAt(i+j-1));
        }
    }
    
    return dp[m][n];
}

// Space optimized version
public boolean isInterleaveOptimized(String s1, String s2, String s3) {
    int m = s1.length(), n = s2.length(), l = s3.length();
    
    if (m + n != l) return false;
    
    boolean[] dp = new boolean[n + 1];
    dp[0] = true;
    
    // Fill first row
    for (int j = 1; j <= n; j++) {
        dp[j] = dp[j-1] && (s2.charAt(j-1) == s3.charAt(j-1));
    }
    
    // Fill remaining rows
    for (int i = 1; i <= m; i++) {
        dp[0] = dp[0] && (s1.charAt(i-1) == s3.charAt(i-1));
        
        for (int j = 1; j <= n; j++) {
            dp[j] = (dp[j] && s1.charAt(i-1) == s3.charAt(i+j-1)) ||
                    (dp[j-1] && s2.charAt(j-1) == s3.charAt(i+j-1));
        }
    }
    
    return dp[n];
}
```
**Time**: O(m×n), **Space**: O(n) optimized

---

### 52. Count and Say
**Problem**: Generate nth term of count-and-say sequence  
**Difficulty**: Medium  
**Pattern**: String Building

```java
public String countAndSay(int n) {
    String result = "1";
    
    for (int i = 1; i < n; i++) {
        result = getNext(result);
    }
    
    return result;
}

private String getNext(String s) {
    StringBuilder sb = new StringBuilder();
    int count = 1;
    char current = s.charAt(0);
    
    for (int i = 1; i < s.length(); i++) {
        if (s.charAt(i) == current) {
            count++;
        } else {
            sb.append(count).append(current);
            current = s.charAt(i);
            count = 1;
        }
    }
    
    // Append the last group
    sb.append(count).append(current);
    
    return sb.toString();
}
```
**Time**: O(n × L) where L is length of string, **Space**: O(L)

---

### 53. Longest Palindromic Substring
**Problem**: Find longest palindromic substring  
**Difficulty**: Medium  
**Pattern**: Expand Around Centers

```java
public String longestPalindrome(String s) {
    if (s == null || s.length() == 0) return "";
    
    int start = 0, maxLen = 1;
    
    for (int i = 0; i < s.length(); i++) {
        // Check for odd length palindromes
        int len1 = expandAroundCenter(s, i, i);
        // Check for even length palindromes
        int len2 = expandAroundCenter(s, i, i + 1);
        
        int len = Math.max(len1, len2);
        
        if (len > maxLen) {
            maxLen = len;
            start = i - (len - 1) / 2;
        }
    }
    
    return s.substring(start, start + maxLen);
}

private int expandAroundCenter(String s, int left, int right) {
    while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
        left--;
        right++;
    }
    return right - left - 1;
}

// Using Manacher's Algorithm - O(n)
public String longestPalindromeManacher(String s) {
    if (s == null || s.length() == 0) return "";
    
    // Preprocess string: "abc" -> "^#a#b#c#$"
    StringBuilder sb = new StringBuilder();
    sb.append("^#");
    for (char c : s.toCharArray()) {
        sb.append(c).append("#");
    }
    sb.append("$");
    
    String T = sb.toString();
    int n = T.length();
    int[] P = new int[n]; // P[i] = length of palindrome centered at i
    int center = 0, right = 0;
    
    for (int i = 1; i < n - 1; i++) {
        int mirror = 2 * center - i;
        
        if (i < right) {
            P[i] = Math.min(right - i, P[mirror]);
        }
        
        // Try to expand palindrome centered at i
        while (T.charAt(i + (1 + P[i])) == T.charAt(i - (1 + P[i]))) {
            P[i]++;
        }
        
        // If palindrome centered at i extends past right, adjust center and right
        if (i + P[i] > right) {
            center = i;
            right = i + P[i];
        }
    }
    
    // Find the longest palindrome
    int maxLen = 0, centerIndex = 0;
    for (int i = 1; i < n - 1; i++) {
        if (P[i] > maxLen) {
            maxLen = P[i];
            centerIndex = i;
        }
    }
    
    int start = (centerIndex - maxLen) / 2;
    return s.substring(start, start + maxLen);
}
```
**Time**: O(n²) expand, O(n) Manacher, **Space**: O(1) or O(n)

---

### 54. Longest Repeating Subsequence
**Problem**: Find length of longest repeating subsequence  
**Difficulty**: Medium  
**Pattern**: Dynamic Programming

```java
public int longestRepeatingSubsequence(String str) {
    int n = str.length();
    
    // dp[i][j] = LRS of str[0...i-1] and str[0...j-1]
    int[][] dp = new int[n + 1][n + 1];
    
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n; j++) {
            // If characters match and indices are different
            if (str.charAt(i-1) == str.charAt(j-1) && i != j) {
                dp[i][j] = 1 + dp[i-1][j-1];
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    
    return dp[n][n];
}

// Space optimized version
public int longestRepeatingSubsequenceOptimized(String str) {
    int n = str.length();
    int[] prev = new int[n + 1];
    int[] curr = new int[n + 1];
    
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n; j++) {
            if (str.charAt(i-1) == str.charAt(j-1) && i != j) {
                curr[j] = 1 + prev[j-1];
            } else {
                curr[j] = Math.max(prev[j], curr[j-1]);
            }
        }
        prev = curr.clone();
    }
    
    return curr[n];
}
```
**Time**: O(n²), **Space**: O(n²) or O(n) optimized

---

### 55. Print All Subsequences of String
**Problem**: Generate all subsequences of a string  
**Difficulty**: Medium  
**Pattern**: Recursion/Backtracking

```java
import java.util.*;

public List<String> generateSubsequences(String str) {
    List<String> result = new ArrayList<>();
    generateSubsequencesHelper(str, 0, "", result);
    return result;
}

private void generateSubsequencesHelper(String str, int index, String current, List<String> result) {
    // Base case: reached end of string
    if (index == str.length()) {
        result.add(current);
        return;
    }
    
    // Exclude current character
    generateSubsequencesHelper(str, index + 1, current, result);
    
    // Include current character
    generateSubsequencesHelper(str, index + 1, current + str.charAt(index), result);
}

// Iterative approach using bit manipulation
public List<String> generateSubsequencesIterative(String str) {
    List<String> result = new ArrayList<>();
    int n = str.length();
    
    // Generate all numbers from 0 to 2^n - 1
    for (int i = 0; i < (1 << n); i++) {
        StringBuilder sb = new StringBuilder();
        
        for (int j = 0; j < n; j++) {
            // If jth bit is set, include jth character
            if ((i & (1 << j)) != 0) {
                sb.append(str.charAt(j));
            }
        }
        
        result.add(sb.toString());
    }
    
    return result;
}
```
**Time**: O(2^n × n), **Space**: O(2^n × n)

---

### 56. Print All Permutations of String
**Problem**: Generate all permutations of a string  
**Difficulty**: Medium  
**Pattern**: Backtracking

```java
import java.util.*;

public List<String> permute(String str) {
    List<String> result = new ArrayList<>();
    char[] chars = str.toCharArray();
    Arrays.sort(chars); // Sort to handle duplicates properly
    boolean[] used = new boolean[chars.length];
    
    backtrack(chars, used, new StringBuilder(), result);
    return result;
}

private void backtrack(char[] chars, boolean[] used, StringBuilder current, List<String> result) {
    if (current.length() == chars.length) {
        result.add(current.toString());
        return;
    }
    
    for (int i = 0; i < chars.length; i++) {
        // Skip used characters
        if (used[i]) continue;
        
        // Skip duplicates: if chars[i] == chars[i-1] and chars[i-1] is not used
        if (i > 0 && chars[i] == chars[i-1] && !used[i-1]) continue;
        
        used[i] = true;
        current.append(chars[i]);
        
        backtrack(chars, used, current, result);
        
        // Backtrack
        current.deleteCharAt(current.length() - 1);
        used[i] = false;
    }
}

// Alternative: Heap's algorithm for permutations
public List<String> permuteHeaps(String str) {
    List<String> result = new ArrayList<>();
    char[] chars = str.toCharArray();
    heapsAlgorithm(chars, chars.length, result);
    return result;
}

private void heapsAlgorithm(char[] chars, int n, List<String> result) {
    if (n == 1) {
        result.add(new String(chars));
        return;
    }
    
    for (int i = 0; i < n; i++) {
        heapsAlgorithm(chars, n - 1, result);
        
        if (n % 2 == 1) {
            swap(chars, 0, n - 1);
        } else {
            swap(chars, i, n - 1);
        }
    }
}

private void swap(char[] chars, int i, int j) {
    char temp = chars[i];
    chars[i] = chars[j];
    chars[j] = temp;
}
```
**Time**: O(n! × n), **Space**: O(n)

---

### 57. Split Binary String into Equal 0s and 1s
**Problem**: Split string into maximum balanced substrings  
**Difficulty**: Medium  
**Pattern**: Balance Counting

```java
public int balancedStringSplit(String s) {
    int count = 0;
    int balance = 0;
    
    for (char c : s.toCharArray()) {
        if (c == 'L') {
            balance++;
        } else { // c == 'R'
            balance--;
        }
        
        if (balance == 0) {
            count++;
        }
    }
    
    return count;
}

// For binary string with 0s and 1s
public int maxBalancedSubstrings(String s) {
    int count = 0;
    int balance = 0;
    
    for (char c : s.toCharArray()) {
        if (c == '0') {
            balance--;
        } else { // c == '1'
            balance++;
        }
        
        if (balance == 0) {
            count++;
        }
    }
    
    return count;
}
```
**Time**: O(n), **Space**: O(1)

---

### 58. Word Wrap Problem
**Problem**: Arrange words to minimize raggedness  
**Difficulty**: Hard  
**Pattern**: Dynamic Programming

```java
public int wordWrap(int[] words, int k) {
    int n = words.length;
    int[] dp = new int[n];
    Arrays.fill(dp, Integer.MAX_VALUE);
    
    for (int i = 0; i < n; i++) {
        int lineLength = 0;
        
        for (int j = i; j < n; j++) {
            lineLength += words[j];
            
            if (lineLength > k) break;
            
            int cost;
            if (j == n - 1) {
                cost = 0; // Last line has no penalty
            } else {
                int spaces = k - lineLength;
                cost = spaces * spaces;
            }
            
            if (i == 0) {
                dp[j] = cost;
            } else if (dp[i-1] != Integer.MAX_VALUE) {
                dp[j] = Math.min(dp[j], dp[i-1] + cost);
            }
            
            lineLength++; // Add space for next word
        }
    }
    
    return dp[n-1];
}

// To also return the arrangement
public class WordWrapResult {
    int cost;
    List<List<String>> arrangement;
    
    public WordWrapResult(int cost, List<List<String>> arrangement) {
        this.cost = cost;
        this.arrangement = arrangement;
    }
}

public WordWrapResult wordWrapWithArrangement(String[] words, int k) {
    int n = words.length;
    int[] dp = new int[n];
    int[] parent = new int[n];
    Arrays.fill(dp, Integer.MAX_VALUE);
    Arrays.fill(parent, -1);
    
    for (int i = 0; i < n; i++) {
        int lineLength = 0;
        
        for (int j = i; j < n; j++) {
            lineLength += words[j].length();
            
            if (lineLength > k) break;
            
            int cost;
            if (j == n - 1) {
                cost = 0;
            } else {
                int spaces = k - lineLength;
                cost = spaces * spaces;
            }
            
            int totalCost = (i == 0) ? cost : 
                           (dp[i-1] == Integer.MAX_VALUE ? Integer.MAX_VALUE : dp[i-1] + cost);
            
            if (totalCost < dp[j]) {
                dp[j] = totalCost;
                parent[j] = i;
            }
            
            lineLength++; // Add space for next word
        }
    }
    
    // Reconstruct arrangement
    List<List<String>> arrangement = new ArrayList<>();
    int i = n - 1;
    
    while (i >= 0) {
        int start = parent[i];
        List<String> line = new ArrayList<>();
        
        for (int j = start; j <= i; j++) {
            line.add(words[j]);
        }
        
        arrangement.add(0, line);
        i = start - 1;
    }
    
    return new WordWrapResult(dp[n-1], arrangement);
}
```
**Time**: O(n²), **Space**: O(n)

---

### 59. Edit Distance (Levenshtein Distance)
**Problem**: Minimum operations to convert one string to another  
**Difficulty**: Hard  
**Pattern**: Dynamic Programming

```java
public int minDistance(String word1, String word2) {
    int m = word1.length(), n = word2.length();
    
    // dp[i][j] = min operations to convert word1[0...i-1] to word2[0...j-1]
    int[][] dp = new int[m + 1][n + 1];
    
    // Base cases
    for (int i = 0; i <= m; i++) {
        dp[i][0] = i; // Delete all characters
    }
    
    for (int j = 0; j <= n; j++) {
        dp[0][j] = j; // Insert all characters
    }
    
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (word1.charAt(i-1) == word2.charAt(j-1)) {
                dp[i][j] = dp[i-1][j-1]; // No operation needed
            } else {
                dp[i][j] = 1 + Math.min(
                    dp[i-1][j],    // Delete
                    Math.min(
                        dp[i][j-1],    // Insert
                        dp[i-1][j-1]   // Replace
                    )
                );
            }
        }
    }
    
    return dp[m][n];
}

// Space optimized version
public int minDistanceOptimized(String word1, String word2) {
    int m = word1.length(), n = word2.length();
    
    // Use only two rows
    int[] prev = new int[n + 1];
    int[] curr = new int[n + 1];
    
    // Initialize first row
    for (int j = 0; j <= n; j++) {
        prev[j] = j;
    }
    
    for (int i = 1; i <= m; i++) {
        curr[0] = i;
        
        for (int j = 1; j <= n; j++) {
            if (word1.charAt(i-1) == word2.charAt(j-1)) {
                curr[j] = prev[j-1];
            } else {
                curr[j] = 1 + Math.min(prev[j], Math.min(curr[j-1], prev[j-1]));
            }
        }
        
        // Swap arrays
        int[] temp = prev;
        prev = curr;
        curr = temp;
    }
    
    return prev[n];
}
```
**Time**: O(m×n), **Space**: O(n) optimized

---

### 60. Find Next Greater Element for Each Character
**Problem**: Find next greater character for each position  
**Difficulty**: Medium  
**Pattern**: Stack

```java
import java.util.*;

public String nextGreaterElement(String s) {
    char[] result = s.toCharArray();
    Stack<Integer> stack = new Stack<>();
    
    for (int i = 0; i < s.length(); i++) {
        while (!stack.isEmpty() && s.charAt(stack.peek()) < s.charAt(i)) {
            int index = stack.pop();
            result[index] = s.charAt(i);
        }
        stack.push(i);
    }
    
    // Characters with no greater element
    while (!stack.isEmpty()) {
        result[stack.pop()] = '?';
    }
    
    return new String(result);
}

// For circular array (next greater in circular manner)
public String nextGreaterElementCircular(String s) {
    int n = s.length();
    char[] result = new char[n];
    Arrays.fill(result, '?');
    Stack<Integer> stack = new Stack<>();
    
    // Process array twice for circular effect
    for (int i = 0; i < 2 * n; i++) {
        int index = i % n;
        
        while (!stack.isEmpty() && s.charAt(stack.peek()) < s.charAt(index)) {
            result[stack.pop()] = s.charAt(index);
        }
        
        if (i < n) {
            stack.push(index);
        }
    }
    
    return new String(result);
}
```
**Time**: O(n), **Space**: O(n)

---

## 🚀 Striver String Questions

### S1. Longest Common Subsequence
**Problem**: Find length of longest common subsequence  
**Difficulty**: Medium  
**Pattern**: Dynamic Programming

```java
public int longestCommonSubsequence(String text1, String text2) {
    int m = text1.length(), n = text2.length();
    int[][] dp = new int[m + 1][n + 1];
    
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (text1.charAt(i-1) == text2.charAt(j-1)) {
                dp[i][j] = 1 + dp[i-1][j-1];
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    
    return dp[m][n];
}
```
**Time**: O(m×n), **Space**: O(m×n)

---

### S2. Longest Palindromic Subsequence
**Problem**: Find length of longest palindromic subsequence  
**Difficulty**: Medium  
**Pattern**: Dynamic Programming

```java
public int longestPalindromeSubseq(String s) {
    int n = s.length();
    int[][] dp = new int[n][n];
    
    // Every single character is a palindrome of length 1
    for (int i = 0; i < n; i++) {
        dp[i][i] = 1;
    }
    
    // Fill table for substrings of length 2 to n
    for (int len = 2; len <= n; len++) {
        for (int i = 0; i <= n - len; i++) {
            int j = i + len - 1;
            
            if (s.charAt(i) == s.charAt(j)) {
                dp[i][j] = 2 + dp[i+1][j-1];
            } else {
                dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1]);
            }
        }
    }
    
    return dp[0][n-1];
}
```
**Time**: O(n²), **Space**: O(n²)

---

## 📈 Summary

### Key String Algorithms Mastered:
1. **KMP Algorithm** - Linear time pattern matching
2. **Dynamic Programming** - LCS, edit distance, palindromes
3. **Two Pointers** - Palindrome checking, character matching
4. **Sliding Window** - Substring problems with constraints
5. **Stack-based** - Expression evaluation, next greater element

### Important Patterns:
- **Frequency Counting** - Use HashMap or array for character counts
- **Substring Generation** - Sliding window with various constraints
- **Palindrome Detection** - Expand around centers or DP
- **String Transformation** - Edit distance, word break problems

### Next Steps:
- Practice more string DP problems
- Learn advanced string algorithms (Suffix Arrays, Z-Algorithm)
- Move to Linked Lists and Tree problems

---
*This completes all major string problems with detailed Java solutions and theory explanations.*
