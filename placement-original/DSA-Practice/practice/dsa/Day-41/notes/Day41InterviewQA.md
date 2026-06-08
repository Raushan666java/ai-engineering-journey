# Day 41 — String Dynamic Programming: Interview Q&A

## Table of Contents
1. [Longest Common Subsequence (LCS)](#1-longest-common-subsequence)
2. [Longest Common Substring](#2-longest-common-substring)
3. [Edit Distance](#3-edit-distance)
4. [Palindromic Problems](#4-palindromic-problems)
5. [Pattern Matching](#5-pattern-matching)
6. [Advanced String DP](#6-advanced-string-dp)
7. [Optimization Techniques](#7-optimization-techniques)
8. [Real-World Applications](#8-real-world-applications)

---

## 1. Longest Common Subsequence

### Q1: What is the difference between subsequence and substring?
**A:** A **subsequence** maintains relative order but doesn't need to be contiguous (e.g., "ACE" is a subsequence of "ABCDE"). A **substring** must be contiguous (e.g., "BCD" is a substring of "ABCDE", but "ACE" is not).

### Q2: What is the time complexity of the recursive LCS solution?
**A:** O(2^(m+n)) because each recursive call branches into two possibilities (include character or skip it), creating an exponential tree of calls.

### Q3: How does memoization improve LCS performance?
**A:** Memoization caches results of overlapping subproblems in a 2D array. This reduces time complexity from O(2^(m+n)) to O(m*n) by ensuring each subproblem is solved only once.

### Q4: Can you optimize LCS to O(n) space?
**A:** Yes, using rolling arrays. Since dp[i][j] only depends on dp[i-1][j-1], dp[i-1][j], and dp[i][j-1], we can maintain only two rows (previous and current), reducing space from O(m*n) to O(min(m,n)).

### Q5: How do you reconstruct the actual LCS from the DP table?
**A:** Start from dp[m][n] and trace back: if s1[i-1] == s2[j-1], include that character and move diagonally (i-1, j-1). Otherwise, move towards the larger value (either up or left).

### Q6: What is the LCS of "ABCDGH" and "AEDFHR"?
**A:** "ADH" (length 3). The DP table identifies that 'A', 'D', and 'H' appear in both strings in the same order.

### Q7: How is LCS used in version control systems like Git?
**A:** Git uses LCS-based diff algorithms (like Myers' algorithm) to find the minimum set of changes between file versions. Lines in common form the LCS, while differences are marked as insertions or deletions.

### Q8: Can LCS handle more than two strings?
**A:** Yes, but complexity increases exponentially. For k strings of length n, the DP table becomes k-dimensional with O(n^k) time and space complexity.

### Q9: What's the difference between LCS and SCS (Shortest Common Supersequence)?
**A:** LCS finds the longest sequence common to both strings. SCS finds the shortest string that contains both input strings as subsequences. Formula: SCS length = len1 + len2 - LCS length.

### Q10: When would you use LCS over edit distance?
**A:** LCS is better when you only care about common elements (e.g., finding shared DNA sequences). Edit distance is better when you need the minimum number of operations to transform one string into another.

---

## 2. Longest Common Substring

### Q11: How does Longest Common Substring differ from LCS?
**A:** LCS allows non-contiguous matches (subsequence), while Longest Common Substring requires a contiguous match. For example, in "ABCD" and "XBCY", LCS is "BC" (length 2) and so is the longest common substring.

### Q12: What's the DP recurrence for Longest Common Substring?
**A:** 
```
if s1[i-1] == s2[j-1]:
    dp[i][j] = dp[i-1][j-1] + 1
else:
    dp[i][j] = 0
maxLength = max of all dp[i][j]
```

### Q13: Can you use suffix arrays to find longest common substring?
**A:** Yes, build a suffix array for s1 + "#" + s2, then find the longest common prefix (LCP) between suffixes from different strings. Time: O((m+n) log(m+n)).

### Q14: How do you handle case-insensitive matching?
**A:** Convert both strings to lowercase before comparison: `s1.toLowerCase()` and `s2.toLowerCase()`. Adjust the DP comparison to ignore case differences.

### Q15: What's the space complexity of your longest common substring solution?
**A:** O(m*n) for the standard DP table. Can be optimized to O(n) using rolling arrays since we only need the previous row.

---

## 3. Edit Distance

### Q16: What three operations are allowed in edit distance?
**A:** 
1. **Insert** a character
2. **Delete** a character
3. **Replace** (substitute) a character
Each operation has a cost of 1.

### Q17: Explain the DP recurrence for edit distance.
**A:**
```
if s1[i-1] == s2[j-1]:
    dp[i][j] = dp[i-1][j-1]  // No operation needed
else:
    dp[i][j] = 1 + min(
        dp[i-1][j],      // Delete from s1
        dp[i][j-1],      // Insert into s1
        dp[i-1][j-1]     // Replace
    )
```

### Q18: What's the edit distance between "kitten" and "sitting"?
**A:** 3 operations:
1. Replace 'k' with 's' → "sitten"
2. Replace 'e' with 'i' → "sittin"
3. Insert 'g' → "sitting"

### Q19: How is edit distance used in spell checkers?
**A:** Spell checkers find words in the dictionary with the smallest edit distance from the misspelled word. Words with edit distance ≤ 2 are suggested as corrections.

### Q20: Can you handle weighted operations (different costs for insert/delete/replace)?
**A:** Yes, modify the recurrence to use operation-specific costs:
```
dp[i][j] = min(
    dp[i-1][j] + deleteCost,
    dp[i][j-1] + insertCost,
    dp[i-1][j-1] + replaceCost
)
```

### Q21: What's the relationship between edit distance and alignment in bioinformatics?
**A:** Edit distance is a special case of sequence alignment where all operations have equal cost. In bioinformatics, alignment uses scoring matrices (e.g., BLOSUM) with variable costs for different amino acid substitutions.

### Q22: How do you reconstruct the sequence of operations from the DP table?
**A:** Trace back from dp[m][n]: if dp[i][j] came from dp[i-1][j-1]+1, it's a replace; from dp[i-1][j]+1, it's a delete; from dp[i][j-1]+1, it's an insert.

---

## 4. Palindromic Problems

### Q23: What's the difference between Longest Palindromic Subsequence and Substring?
**A:** **Subsequence** allows non-contiguous characters (e.g., "bbbab" → "bbbb"). **Substring** requires contiguous characters (e.g., "babad" → "bab" or "aba").

### Q24: How do you find Longest Palindromic Subsequence using LCS?
**A:** LPS(s) = LCS(s, reverse(s)). For example, "character" reversed is "retcarahc", and their LCS is "carac" (length 5).

### Q25: Explain the expand-around-center approach for Longest Palindromic Substring.
**A:** For each position i:
1. Expand outward for odd-length palindromes (center at i)
2. Expand outward for even-length palindromes (center between i and i+1)
3. Track the longest palindrome found
Time: O(n²), Space: O(1).

### Q26: What is Manacher's Algorithm and its complexity?
**A:** Manacher's Algorithm finds the longest palindromic substring in O(n) time by exploiting palindrome symmetry. It uses previously computed palindrome radii to avoid redundant comparisons.

### Q27: How do you count all palindromic substrings in a string?
**A:** Use expand-around-center for each position. For each center, expand while characters match, incrementing the count for each valid palindrome. Time: O(n²).

### Q28: What's the minimum number of cuts needed to partition "aab" into palindromes?
**A:** 1 cut. "aa | b" gives two palindromes. The DP approach precomputes which substrings are palindromes, then finds the minimum cuts needed.

### Q29: How do you check if a string can be rearranged to form a palindrome?
**A:** Count character frequencies. For even-length strings, all characters must have even frequency. For odd-length, at most one character can have odd frequency.

### Q30: What's the longest palindromic subsequence of "agbdba"?
**A:** "abdba" (length 5). Remove 'g' to get this palindrome.

---

## 5. Pattern Matching

### Q31: What's the difference between wildcard matching and regex matching?
**A:** 
- **Wildcard:** '?' matches any single character, '*' matches any sequence
- **Regex:** '.' matches any single character, '*' matches zero or more of the preceding element (not any sequence)

### Q32: Explain the DP approach for wildcard matching.
**A:**
```
if pattern[j] == '*':
    dp[i][j] = dp[i][j-1] || dp[i-1][j]  // Match empty or one+ chars
elif pattern[j] == '?' or s[i] == pattern[j]:
    dp[i][j] = dp[i-1][j-1]
else:
    dp[i][j] = false
```

### Q33: How does '.*' in regex matching differ from '*' in wildcard?
**A:** In regex, '.*' means "zero or more of any character" (two symbols together). In wildcard, '*' alone means "any sequence". Regex '*' only modifies the preceding element.

### Q34: Can you optimize wildcard matching to O(1) space?
**A:** Not easily for worst-case scenarios, but you can use two pointers with backtracking. Maintain pointers for current position and last '*' position, backtrack if mismatch occurs.

### Q35: What's the time complexity of regex matching with DP?
**A:** O(m*n) where m is string length and n is pattern length. Each cell is computed once.

### Q36: How do you handle multiple consecutive '*' in wildcard matching?
**A:** Preprocess the pattern to collapse multiple '*' into a single '*', since "**" is equivalent to "*".

### Q37: Does "aa" match pattern "a*"?
**A:** 
- **Wildcard:** Yes, '*' matches 'a'
- **Regex:** No, 'a*' means "zero or more 'a's", so it only matches "", "a", "aa", "aaa", etc. as complete strings. "aa" requires pattern "a*" to match the first 'a' zero or more times and then the second 'a' explicitly, which doesn't work. Actually, with proper regex DP, "aa" does match "a*" because 'a*' can match multiple 'a's.

Wait, let me reconsider: In regex, "a*" means "zero or more occurrences of 'a'". So "aa" DOES match "a*" (two 'a's match "a*"). My mistake above.

### Q38: How do you test if two regex patterns are equivalent?
**A:** Convert both to finite automata (DFA) and check if they accept the same language. This is a complex problem; for simple patterns, test on exhaustive input sets.

---

## 6. Advanced String DP

### Q39: What is the Distinct Subsequences problem?
**A:** Count the number of distinct subsequences of string T in string S. For example, "rabbbit" contains 3 distinct subsequences of "rabbit".

### Q40: Explain the DP recurrence for Distinct Subsequences.
**A:**
```
if s[i-1] == t[j-1]:
    dp[i][j] = dp[i-1][j-1] + dp[i-1][j]
    // Include or exclude current character
else:
    dp[i][j] = dp[i-1][j]
    // Can't include, only exclude
```

### Q41: What is the Shortest Common Supersequence (SCS)?
**A:** The shortest string that contains both input strings as subsequences. Length = len(s1) + len(s2) - LCS_length.

### Q42: How do you reconstruct the actual SCS string?
**A:** Build the LCS DP table, then trace back: include characters from both strings, but include common characters (LCS) only once.

### Q43: What is Interleaving Strings problem?
**A:** Check if string s3 is formed by interleaving s1 and s2, where interleaving means alternating characters from s1 and s2 while preserving their order.

### Q44: How do you solve Interleaving Strings with DP?
**A:**
```
dp[i][j] = true if s3[0..i+j-1] is interleaving of s1[0..i-1] and s2[0..j-1]
dp[i][j] = (dp[i-1][j] && s1[i-1] == s3[i+j-1]) || 
           (dp[i][j-1] && s2[j-1] == s3[i+j-1])
```

### Q45: What is the Scramble String problem?
**A:** Check if s2 is a scrambled version of s1, where scrambling involves recursively dividing a string and optionally swapping the two halves.

### Q46: What's the time complexity of Scramble String DP?
**A:** O(n^4) where n is string length. The DP table is 3D (start1, start2, length), and for each state, we try all split points.

### Q47: How do you find the Longest Repeating Subsequence?
**A:** Similar to LCS, but compare the string with itself while ensuring i ≠ j (characters at different positions).

### Q48: What's the minimum window subsequence problem?
**A:** Find the minimum window in s1 that contains s2 as a subsequence. Use DP or two-pointer approach (forward pass to find subsequence, backward pass to shrink window).

---

## 7. Optimization Techniques

### Q49: How do you reduce space complexity from O(m*n) to O(n) in string DP?
**A:** Use rolling arrays. Since most string DP problems only depend on the previous row (or column), maintain only two rows: `prev` and `curr`. After processing each row, swap pointers.

### Q50: What is memoization vs tabulation?
**A:** 
- **Memoization (Top-down):** Start from the problem, recursively solve subproblems, cache results
- **Tabulation (Bottom-up):** Build a table iteratively from base cases to the final answer

### Q51: When should you use memoization over tabulation?
**A:** 
- When not all subproblems need to be solved (sparse DP)
- When the recursive structure is clearer and easier to implement
- Tabulation is generally faster due to better cache locality

### Q52: Can you parallelize string DP algorithms?
**A:** Yes, for algorithms that compute independent subproblems. For example, divide a large string into chunks and compute LCS for each pair in parallel, then merge results.

### Q53: How do you handle very long strings (e.g., DNA sequences > 1GB)?
**A:** 
1. Use divide-and-conquer (split strings into chunks)
2. Use Hirschberg's algorithm (O(n) space for LCS)
3. Use external memory algorithms (disk-based DP)

### Q54: What is Hirschberg's Algorithm?
**A:** An algorithm to compute LCS in O(n) space by dividing the problem in half, recursively computing LCS for each half, and merging results. Time: O(mn), Space: O(n).

### Q55: How do you avoid integer overflow when counting subsequences?
**A:** Use modular arithmetic. Compute dp[i][j] % MOD at each step, where MOD = 10^9 + 7 (a large prime).

### Q56: What are the cache optimization strategies for string DP?
**A:** 
1. **Row-major traversal:** Access memory contiguously
2. **Block processing:** Divide DP table into blocks that fit in cache
3. **Loop tiling:** Reorder loops to improve cache locality

---

## 8. Real-World Applications

### Q57: How is edit distance used in DNA sequence alignment?
**A:** Bioinformatics uses edit distance (with weighted operations) to align DNA/protein sequences, identify mutations, and measure evolutionary distance between species.

### Q58: Explain how Git uses diff algorithms.
**A:** Git uses Myers' diff algorithm (based on LCS) to find the minimum set of line insertions and deletions between file versions. This generates compact diffs for version control.

### Q59: How do plagiarism detectors use string matching?
**A:** They compute similarity scores using algorithms like LCS, edit distance, or Jaccard similarity on word/character n-grams. High similarity (e.g., > 80%) indicates potential plagiarism.

### Q60: How does autocorrect suggest spelling corrections?
**A:** Autocorrect computes edit distance between the misspelled word and dictionary words. Words with the smallest edit distance (typically ≤ 2) are suggested.

### Q61: How is LCS used in computational biology?
**A:** LCS identifies conserved regions in DNA/protein sequences, indicating functionally important areas. It's used in multiple sequence alignment and phylogenetic tree construction.

### Q62: Explain three-way merge in version control.
**A:** Three-way merge compares three versions: base, version1, and version2. It computes LCS(base, v1) and LCS(base, v2) to identify changes, then merges them. Conflicts occur when both versions modify the same section.

### Q63: How do code review tools generate diffs?
**A:** They use line-based or syntax-aware diff algorithms (AST-based) to highlight changes between code versions. This includes insertions (green), deletions (red), and modifications (yellow).

### Q64: What is fuzzy string matching and where is it used?
**A:** Fuzzy matching finds approximate matches using edit distance or similar metrics. Used in search engines, record linkage (deduplication), and data cleaning.

### Q65: How do video subtitle synchronization tools work?
**A:** They use LCS or edit distance to align subtitle text with audio transcripts, adjusting timestamps to match spoken dialogue.

### Q66: Explain how document versioning systems track changes.
**A:** They store deltas (diffs) between versions instead of full copies. LCS-based algorithms compute minimal changesets, saving storage and enabling efficient version retrieval.

### Q67: How is string DP used in data compression?
**A:** Algorithms like LZ77/LZ78 use longest match detection (similar to longest common substring) to find repeating patterns and replace them with references, achieving compression.

### Q68: What role does string matching play in cybersecurity?
**A:** Intrusion detection systems use pattern matching (regex, wildcard) to identify malicious patterns in network traffic or log files. String DP helps detect obfuscated attacks.

---

## 9. Interview Problem Solving

### Q69: How would you approach a new string DP problem in an interview?
**A:**
1. Identify if it's a subsequence, substring, or transformation problem
2. Define the DP state (what does dp[i][j] represent?)
3. Write the recurrence relation (base cases + transitions)
4. Determine time/space complexity
5. Optimize if needed (rolling arrays, memoization)

### Q70: Given two strings, how do you decide between LCS and edit distance?
**A:** 
- Use **LCS** if you need the longest common part (e.g., finding shared content)
- Use **edit distance** if you need the cost to transform one into the other (e.g., spell checking)

### Q71: How do you test your string DP implementation?
**A:**
1. **Edge cases:** Empty strings, single characters
2. **Equal strings:** Both strings identical
3. **No match:** Completely different strings
4. **Known examples:** Verify against hand-calculated results
5. **Stress test:** Large random strings

### Q72: What's a common mistake in implementing edit distance?
**A:** Forgetting to initialize base cases:
- dp[0][j] = j (insert j characters)
- dp[i][0] = i (delete i characters)

### Q73: How do you debug a failing string DP solution?
**A:**
1. Print the DP table to visualize incorrect values
2. Check base cases and boundary conditions
3. Verify recurrence relation with a small example
4. Test with edge cases (empty strings, single characters)

### Q74: What's the difference between 1D and 2D DP for string problems?
**A:** 
- **1D DP:** Used for single-string problems (e.g., longest increasing subsequence in a string)
- **2D DP:** Used for two-string comparisons (e.g., LCS, edit distance)

### Q75: How do you handle Unicode or multi-byte characters?
**A:** Use `.length()` for code units or `.codePointCount()` for actual characters in Java. Be aware of surrogate pairs and combining characters.

---

## 10. Advanced Topics

### Q76: What is the suffix tree and how does it relate to string DP?
**A:** A suffix tree stores all suffixes of a string in a compressed trie. It can solve LCS in O(m+n) time by finding the deepest common node between suffixes from two strings.

### Q77: Explain the Aho-Corasick algorithm.
**A:** An algorithm for multi-pattern matching. It builds a trie of patterns and processes the text in O(n + m + z) time, where n is text length, m is total pattern length, and z is matches found.

### Q78: What is the Z-algorithm and its use case?
**A:** Z-algorithm computes Z[i] = length of the longest substring starting at i that is also a prefix of the string. Used for pattern matching in O(n) time.

### Q79: How does KMP algorithm relate to string DP?
**A:** KMP uses a preprocessing step (computing the "failure function") that's similar to DP, storing the longest proper prefix that's also a suffix. This enables O(n) pattern matching.

### Q80: What is the difference between online and offline string algorithms?
**A:** 
- **Online:** Process string character-by-character (e.g., KMP)
- **Offline:** Require the entire string upfront (e.g., most DP algorithms)

### Q81: How do you solve string DP problems with constraints?
**A:** Add dimensions to the DP state. For example, if you have a budget constraint, use dp[i][j][budget] to track the constraint.

### Q82: What is the rolling hash technique and how does it help?
**A:** Rolling hash computes a hash of a substring in O(1) after O(n) preprocessing. Used in Rabin-Karp for fast pattern matching and in duplicate detection.

### Q83: How do you handle case-insensitive matching in string DP?
**A:** Convert both strings to lowercase before processing, or modify the comparison to ignore case differences.

### Q84: What's the complexity of finding all palindromic substrings?
**A:** O(n²) using expand-around-center or DP. Manacher's algorithm can find the longest in O(n), but counting all still requires O(n²).

### Q85: How do you find the longest common substring of more than two strings?
**A:** Build a generalized suffix tree for all strings, then find the deepest node with leaves from all strings. Time: O(total length of all strings).

---

## 11. Complexity Analysis

### Q86: What's the space-time tradeoff in string DP?
**A:** You can reduce space from O(m*n) to O(min(m,n)) using rolling arrays, but this sacrifices the ability to reconstruct the path without recomputation.

### Q87: Why is Manacher's algorithm O(n) while expand-around-center is O(n²)?
**A:** Manacher exploits palindrome symmetry to avoid redundant comparisons. Each position is visited at most twice (once during expansion, once when used as a mirror).

### Q88: What's the worst-case input for edit distance DP?
**A:** Two completely different strings require the full O(m*n) DP table to be computed, with no early termination possible.

### Q89: How does preprocessing improve pattern matching performance?
**A:** Algorithms like KMP and Aho-Corasick preprocess patterns to build lookup tables (failure function, trie), enabling O(n) text scanning instead of O(n*m).

### Q90: What's the space complexity of recursive memoization for LCS?
**A:** O(m*n) for the memoization table + O(m+n) for the recursion stack depth, totaling O(m*n).

---

## Summary

This Q&A covers 90 comprehensive questions across:
- **Fundamental algorithms:** LCS, LCS string, Edit Distance
- **Palindromic problems:** Subsequence, Substring, Partitioning
- **Pattern matching:** Wildcard, Regex
- **Advanced topics:** Distinct Subsequences, Scramble String, etc.
- **Optimizations:** Space reduction, parallelization
- **Real-world applications:** Version control, bioinformatics, spell checkers

These concepts form the foundation for solving string DP problems in technical interviews at top companies like Google, Amazon, Microsoft, and Facebook.
