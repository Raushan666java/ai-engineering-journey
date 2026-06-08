# String Algorithms

## Overview
String algorithms are specialized algorithms designed to process and manipulate strings efficiently. These algorithms are fundamental to many applications including text processing, pattern matching, data compression, and bioinformatics.

## Basic String Operations

### 1. String Reversal
Reverse a string.

```java
public String reverse(String s) {
    char[] chars = s.toCharArray();
    int left = 0, right = chars.length - 1;
    
    while (left < right) {
        char temp = chars[left];
        chars[left] = chars[right];
        chars[right] = temp;
        left++;
        right--;
    }
    
    return new String(chars);
}
```

### 2. Check Palindrome
Check if a string is a palindrome (reads the same forward and backward).

```java
public boolean isPalindrome(String s) {
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
```

### 3. Anagram Check
Check if two strings are anagrams (contain the same characters with the same frequencies).

```java
public boolean areAnagrams(String s1, String s2) {
    if (s1.length() != s2.length()) {
        return false;
    }
    
    int[] count = new int[26]; // Assuming lowercase English letters
    
    for (int i = 0; i < s1.length(); i++) {
        count[s1.charAt(i) - 'a']++;
        count[s2.charAt(i) - 'a']--;
    }
    
    for (int c : count) {
        if (c != 0) {
            return false;
        }
    }
    
    return true;
}
```

## Pattern Matching Algorithms

### 1. Naive Pattern Matching
Search for occurrences of a pattern in a text using a simple sliding window approach.

```java
public List<Integer> naivePatternMatch(String text, String pattern) {
    List<Integer> matches = new ArrayList<>();
    int n = text.length();
    int m = pattern.length();
    
    for (int i = 0; i <= n - m; i++) {
        int j;
        for (j = 0; j < m; j++) {
            if (text.charAt(i + j) != pattern.charAt(j)) {
                break;
            }
        }
        
        if (j == m) {
            matches.add(i);
        }
    }
    
    return matches;
}
```

**Time Complexity**: O(n*m) where n is the length of the text and m is the length of the pattern.

### 2. Knuth-Morris-Pratt (KMP) Algorithm
An efficient string matching algorithm that uses information about the pattern to avoid unnecessary comparisons.

```java
public List<Integer> kmpSearch(String text, String pattern) {
    List<Integer> matches = new ArrayList<>();
    int n = text.length();
    int m = pattern.length();
    
    if (m == 0) return matches;
    
    // Compute LPS (Longest Proper Prefix which is also Suffix) array
    int[] lps = computeLPSArray(pattern);
    
    int i = 0; // Index for text
    int j = 0; // Index for pattern
    
    while (i < n) {
        if (pattern.charAt(j) == text.charAt(i)) {
            i++;
            j++;
        }
        
        if (j == m) {
            matches.add(i - j);
            j = lps[j - 1];
        } else if (i < n && pattern.charAt(j) != text.charAt(i)) {
            if (j != 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }
    
    return matches;
}

private int[] computeLPSArray(String pattern) {
    int m = pattern.length();
    int[] lps = new int[m];
    
    int len = 0;
    int i = 1;
    
    while (i < m) {
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

**Time Complexity**: O(n + m) where n is the length of the text and m is the length of the pattern.

### 3. Rabin-Karp Algorithm
A string matching algorithm that uses hashing to find patterns in strings.

```java
public List<Integer> rabinKarpSearch(String text, String pattern) {
    List<Integer> matches = new ArrayList<>();
    int n = text.length();
    int m = pattern.length();
    
    if (m == 0 || m > n) return matches;
    
    // Prime number for hash calculation
    int prime = 101;
    
    // Calculate hash value for pattern and first window of text
    int patternHash = 0;
    int textHash = 0;
    int h = 1;
    
    // The value of h would be pow(d, m-1) % prime
    for (int i = 0; i < m - 1; i++) {
        h = (h * 256) % prime;
    }
    
    // Calculate initial hash values
    for (int i = 0; i < m; i++) {
        patternHash = (256 * patternHash + pattern.charAt(i)) % prime;
        textHash = (256 * textHash + text.charAt(i)) % prime;
    }
    
    // Slide the pattern over text one by one
    for (int i = 0; i <= n - m; i++) {
        // Check if hash values match
        if (patternHash == textHash) {
            // Check characters one by one
            boolean match = true;
            for (int j = 0; j < m; j++) {
                if (text.charAt(i + j) != pattern.charAt(j)) {
                    match = false;
                    break;
                }
            }
            
            if (match) {
                matches.add(i);
            }
        }
        
        // Calculate hash value for next window
        if (i < n - m) {
            textHash = (256 * (textHash - text.charAt(i) * h) + text.charAt(i + m)) % prime;
            
            // Make sure hash value is positive
            if (textHash < 0) {
                textHash += prime;
            }
        }
    }
    
    return matches;
}
```

**Time Complexity**: O(n*m) worst case, but O(n+m) on average with a good hash function.

### 4. Boyer-Moore Algorithm
A string searching algorithm that uses information about the pattern to skip portions of the text.

```java
public List<Integer> boyerMooreSearch(String text, String pattern) {
    List<Integer> matches = new ArrayList<>();
    int n = text.length();
    int m = pattern.length();
    
    if (m == 0 || m > n) return matches;
    
    // Preprocessing: Bad Character Heuristic
    int[] badChar = new int[256]; // Assuming ASCII characters
    Arrays.fill(badChar, -1);
    
    for (int i = 0; i < m; i++) {
        badChar[pattern.charAt(i)] = i;
    }
    
    int s = 0; // Shift of the pattern with respect to text
    
    while (s <= (n - m)) {
        int j = m - 1;
        
        // Keep reducing j while characters match
        while (j >= 0 && pattern.charAt(j) == text.charAt(s + j)) {
            j--;
        }
        
        // If the pattern is present at current shift
        if (j < 0) {
            matches.add(s);
            
            // Shift the pattern so that the next character in text aligns with the last occurrence of it in pattern
            s += (s + m < n) ? m - badChar[text.charAt(s + m)] : 1;
        } else {
            // Shift the pattern so that the bad character in text aligns with the last occurrence of it in pattern
            s += Math.max(1, j - badChar[text.charAt(s + j)]);
        }
    }
    
    return matches;
}
```

**Time Complexity**: O(n*m) worst case, but often much better in practice, especially for large alphabets.

## String Processing Algorithms

### 1. Longest Common Prefix
Find the longest common prefix string amongst an array of strings.

```java
public String longestCommonPrefix(String[] strs) {
    if (strs == null || strs.length == 0) {
        return "";
    }
    
    String prefix = strs[0];
    
    for (int i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) != 0) {
            prefix = prefix.substring(0, prefix.length() - 1);
            if (prefix.isEmpty()) {
                return "";
            }
        }
    }
    
    return prefix;
}
```

### 2. Longest Palindromic Substring
Find the longest substring that is a palindrome.

```java
public String longestPalindrome(String s) {
    if (s == null || s.length() < 1) {
        return "";
    }
    
    int start = 0, end = 0;
    
    for (int i = 0; i < s.length(); i++) {
        // Expand around center for odd length palindromes
        int len1 = expandAroundCenter(s, i, i);
        // Expand around center for even length palindromes
        int len2 = expandAroundCenter(s, i, i + 1);
        
        int len = Math.max(len1, len2);
        
        if (len > end - start) {
            start = i - (len - 1) / 2;
            end = i + len / 2;
        }
    }
    
    return s.substring(start, end + 1);
}

private int expandAroundCenter(String s, int left, int right) {
    while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
        left--;
        right++;
    }
    
    return right - left - 1;
}
```

### 3. String Compression
Perform basic string compression using the counts of repeated characters.

```java
public String compress(String s) {
    if (s == null || s.length() <= 1) {
        return s;
    }
    
    StringBuilder compressed = new StringBuilder();
    int count = 1;
    char current = s.charAt(0);
    
    for (int i = 1; i < s.length(); i++) {
        if (s.charAt(i) == current) {
            count++;
        } else {
            compressed.append(current);
            if (count > 1) {
                compressed.append(count);
            }
            current = s.charAt(i);
            count = 1;
        }
    }
    
    // Don't forget the last character
    compressed.append(current);
    if (count > 1) {
        compressed.append(count);
    }
    
    return compressed.length() < s.length() ? compressed.toString() : s;
}
```

### 4. Edit Distance (Levenshtein Distance)
Calculate the minimum number of operations required to convert one string to another.

```java
public int minDistance(String word1, String word2) {
    int m = word1.length();
    int n = word2.length();
    
    // Create a table to store results of subproblems
    int[][] dp = new int[m + 1][n + 1];
    
    // Fill dp table
    for (int i = 0; i <= m; i++) {
        for (int j = 0; j <= n; j++) {
            // If first string is empty, insert all characters of second string
            if (i == 0) {
                dp[i][j] = j;
            }
            // If second string is empty, remove all characters of first string
            else if (j == 0) {
                dp[i][j] = i;
            }
            // If last characters are the same, ignore the last character
            else if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
                dp[i][j] = dp[i - 1][j - 1];
            }
            // If last characters are different, consider all operations
            else {
                dp[i][j] = 1 + Math.min(
                    dp[i - 1][j],      // Delete
                    Math.min(
                        dp[i][j - 1],  // Insert
                        dp[i - 1][j - 1] // Replace
                    )
                );
            }
        }
    }
    
    return dp[m][n];
}
```

## Advanced String Algorithms

### 1. Suffix Array
A sorted array of all suffixes of a string.

```java
public int[] buildSuffixArray(String s) {
    int n = s.length();
    
    // Create suffix array
    Integer[] suffixArray = new Integer[n];
    for (int i = 0; i < n; i++) {
        suffixArray[i] = i;
    }
    
    // Sort suffixes
    Arrays.sort(suffixArray, (a, b) -> s.substring(a).compareTo(s.substring(b)));
    
    // Convert to primitive int array
    int[] result = new int[n];
    for (int i = 0; i < n; i++) {
        result[i] = suffixArray[i];
    }
    
    return result;
}
```

### 2. Suffix Tree
A compressed trie containing all suffixes of a string.

```java
// Note: Suffix trees are complex data structures.
// This is a simplified representation using a Trie-like structure.
class SuffixTreeNode {
    Map<Character, SuffixTreeNode> children;
    int start;
    int end;
    
    public SuffixTreeNode() {
        children = new HashMap<>();
        start = -1;
        end = -1;
    }
}

public SuffixTreeNode buildSuffixTree(String s) {
    SuffixTreeNode root = new SuffixTreeNode();
    
    for (int i = 0; i < s.length(); i++) {
        insertSuffix(root, s, i);
    }
    
    return root;
}

private void insertSuffix(SuffixTreeNode root, String s, int start) {
    SuffixTreeNode current = root;
    
    for (int i = start; i < s.length(); i++) {
        char c = s.charAt(i);
        
        if (!current.children.containsKey(c)) {
            current.children.put(c, new SuffixTreeNode());
        }
        
        current = current.children.get(c);
    }
    
    current.start = start;
    current.end = s.length() - 1;
}
```

### 3. Longest Common Subsequence
Find the longest subsequence common to two strings.

```java
public String longestCommonSubsequence(String text1, String text2) {
    int m = text1.length();
    int n = text2.length();
    
    // Create a table to store lengths of LCS
    int[][] dp = new int[m + 1][n + 1];
    
    // Fill dp table
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (text1.charAt(i - 1) == text2.charAt(j - 1)) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    
    // Reconstruct the LCS
    StringBuilder lcs = new StringBuilder();
    int i = m, j = n;
    
    while (i > 0 && j > 0) {
        if (text1.charAt(i - 1) == text2.charAt(j - 1)) {
            lcs.append(text1.charAt(i - 1));
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            i--;
        } else {
            j--;
        }
    }
    
    return lcs.reverse().toString();
}
```

### 4. Z Algorithm
Linear time pattern matching algorithm.

```java
public List<Integer> zAlgorithm(String text, String pattern) {
    List<Integer> matches = new ArrayList<>();
    String concat = pattern + "$" + text;
    int n = concat.length();
    int[] Z = new int[n];
    
    // Compute Z array
    int left = 0, right = 0;
    for (int i = 1; i < n; i++) {
        if (i > right) {
            left = right = i;
            while (right < n && concat.charAt(right - left) == concat.charAt(right)) {
                right++;
            }
            Z[i] = right - left;
            right--;
        } else {
            int k = i - left;
            if (Z[k] < right - i + 1) {
                Z[i] = Z[k];
            } else {
                left = i;
                while (right < n && concat.charAt(right - left) == concat.charAt(right)) {
                    right++;
                }
                Z[i] = right - left;
                right--;
            }
        }
    }
    
    // Find matches
    int patternLength = pattern.length();
    for (int i = 0; i < n; i++) {
        if (Z[i] == patternLength) {
            matches.add(i - patternLength - 1);
        }
    }
    
    return matches;
}
```

### 5. Manacher's Algorithm
Find the longest palindromic substring in linear time.

```java
public String longestPalindromeManacher(String s) {
    if (s == null || s.length() < 1) {
        return "";
    }
    
    // Preprocess the string to handle even length palindromes
    StringBuilder sb = new StringBuilder();
    sb.append('#');
    for (char c : s.toCharArray()) {
        sb.append(c).append('#');
    }
    String t = sb.toString();
    
    int n = t.length();
    int[] p = new int[n]; // p[i] = radius of palindrome centered at i
    int center = 0, right = 0;
    
    for (int i = 0; i < n; i++) {
        if (right > i) {
            p[i] = Math.min(right - i, p[2 * center - i]);
        }
        
        // Expand around center i
        while (i + p[i] + 1 < n && i - p[i] - 1 >= 0 && 
               t.charAt(i + p[i] + 1) == t.charAt(i - p[i] - 1)) {
            p[i]++;
        }
        
        // Update center and right boundary if needed
        if (i + p[i] > right) {
            center = i;
            right = i + p[i];
        }
    }
    
    // Find the maximum palindrome length and its center
    int maxLen = 0, centerIndex = 0;
    for (int i = 0; i < n; i++) {
        if (p[i] > maxLen) {
            maxLen = p[i];
            centerIndex = i;
        }
    }
    
    // Extract the palindrome
    int start = (centerIndex - maxLen) / 2;
    return s.substring(start, start + maxLen);
}
```

## String Algorithms in Practice

### 1. Trie (Prefix Tree)
A tree-like data structure used to store a dynamic set of strings.

```java
class TrieNode {
    TrieNode[] children;
    boolean isEndOfWord;
    
    public TrieNode() {
        children = new TrieNode[26]; // Assuming lowercase English letters
        isEndOfWord = false;
    }
}

public class Trie {
    private TrieNode root;
    
    public Trie() {
        root = new TrieNode();
    }
    
    // Insert a word into the trie
    public void insert(String word) {
        TrieNode current = root;
        
        for (char c : word.toCharArray()) {
            int index = c - 'a';
            if (current.children[index] == null) {
                current.children[index] = new TrieNode();
            }
            current = current.children[index];
        }
        
        current.isEndOfWord = true;
    }
    
    // Search for a word in the trie
    public boolean search(String word) {
        TrieNode node = searchPrefix(word);
        return node != null && node.isEndOfWord;
    }
    
    // Check if there is any word in the trie that starts with the given prefix
    public boolean startsWith(String prefix) {
        return searchPrefix(prefix) != null;
    }
    
    private TrieNode searchPrefix(String word) {
        TrieNode current = root;
        
        for (char c : word.toCharArray()) {
            int index = c - 'a';
            if (current.children[index] == null) {
                return null;
            }
            current = current.children[index];
        }
        
        return current;
    }
}
```

### 2. Aho-Corasick Algorithm
An efficient string matching algorithm that can find multiple patterns in a text simultaneously.

```java
// Note: This is a simplified version of the Aho-Corasick algorithm
class AhoCorasick {
    class TrieNode {
        TrieNode[] children;
        boolean isEndOfWord;
        String word;
        TrieNode fail;
        
        public TrieNode() {
            children = new TrieNode[26]; // Assuming lowercase English letters
            isEndOfWord = false;
            word = null;
            fail = null;
        }
    }
    
    private TrieNode root;
    
    public AhoCorasick(String[] patterns) {
        root = new TrieNode();
        
        // Build trie
        for (String pattern : patterns) {
            insert(pattern);
        }
        
        // Build failure function
        buildFailureFunction();
    }
    
    private void insert(String word) {
        TrieNode current = root;
        
        for (char c : word.toCharArray()) {
            int index = c - 'a';
            if (current.children[index] == null) {
                current.children[index] = new TrieNode();
            }
            current = current.children[index];
        }
        
        current.isEndOfWord = true;
        current.word = word;
    }
    
    private void buildFailureFunction() {
        Queue<TrieNode> queue = new LinkedList<>();
        
        // Set failure for depth 1 nodes to root
        for (int i = 0; i < 26; i++) {
            if (root.children[i] != null) {
                root.children[i].fail = root;
                queue.offer(root.children[i]);
            }
        }
        
        // BFS to set failure function for all nodes
        while (!queue.isEmpty()) {
            TrieNode current = queue.poll();
            
            for (int i = 0; i < 26; i++) {
                if (current.children[i] != null) {
                    TrieNode child = current.children[i];
                    TrieNode failNode = current.fail;
                    
                    while (failNode != null && failNode.children[i] == null) {
                        failNode = failNode.fail;
                    }
                    
                    if (failNode == null) {
                        child.fail = root;
                    } else {
                        child.fail = failNode.children[i];
                    }
                    
                    queue.offer(child);
                }
            }
        }
    }
    
    public List<String> search(String text) {
        List<String> result = new ArrayList<>();
        TrieNode current = root;
        
        for (int i = 0; i < text.length(); i++) {
            char c = text.charAt(i);
            int index = c - 'a';
            
            // If current state doesn't have a valid transition, follow failure links
            while (current != root && current.children[index] == null) {
                current = current.fail;
            }
            
            if (current.children[index] != null) {
                current = current.children[index];
            }
            
            // Check for matches at the current state
            TrieNode temp = current;
            while (temp != root) {
                if (temp.isEndOfWord) {
                    result.add(temp.word);
                }
                temp = temp.fail;
            }
        }
        
        return result;
    }
}
```

## Practice Problems

1. [Valid Anagram](https://leetcode.com/problems/valid-anagram/)
2. [Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/)
3. [Implement strStr()](https://leetcode.com/problems/implement-strstr/)
4. [String to Integer (atoi)](https://leetcode.com/problems/string-to-integer-atoi/)
5. [Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/)
6. [Group Anagrams](https://leetcode.com/problems/group-anagrams/)
7. [Edit Distance](https://leetcode.com/problems/edit-distance/)
8. [Regular Expression Matching](https://leetcode.com/problems/regular-expression-matching/)
9. [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
10. [Word Break](https://leetcode.com/problems/word-break/)