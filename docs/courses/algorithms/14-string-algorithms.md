# Chapter 14: String Algorithms

## Learning Objectives

By the end of this chapter, students will be able to:

1. Implement and analyze KMP, Rabin-Karp, and Z-algorithm for pattern matching.
2. Use Manacher's algorithm to find all palindromic substrings in linear time.
3. Construct a suffix array and LCP array in \( O(n \log n) \) time.
4. Apply suffix arrays to solve substring queries, pattern matching, and string analysis.

---

## Theory

![String Algorithms Diagram](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/algorithms/ch14-string-algorithms.png)

### 14.1 Knuth-Morris-Pratt (KMP) Algorithm

**Problem:** Find all occurrences of a pattern \( P \) (length \( m \)) in a text \( T \) (length \( n \)).

**Key insight:** Build a failure function (prefix function) for the pattern. When a mismatch occurs, use the failure function to shift the pattern by the maximum safe amount without re-examining already-matched characters.

**Prefix function:** \( \pi[i] \) = the length of the longest proper prefix of \( P[0..i] \) that is also a suffix.

```
ComputePrefix(P):
    pi[0] = 0
    k = 0
    for i = 1 to m-1:
        while k > 0 and P[k] != P[i]:
            k = pi[k-1]
        if P[k] == P[i]:
            k++
        pi[i] = k
    return pi
```

```
KMP(T, P):
    pi = ComputePrefix(P)
    j = 0
    for i = 0 to n-1:
        while j > 0 and T[i] != P[j]:
            j = pi[j-1]
        if T[i] == P[j]:
            j++
        if j == m:
            report match at i - m + 1
            j = pi[j-1]
```

**Complexity:** \( O(n + m) \) time, \( O(m) \) space.

### 14.2 Rabin-Karp Algorithm

**Key insight:** Use hashing. Compute the hash of the pattern and hash of each sliding window of the text. Only compare character-by-character when hashes match (to handle collisions).

```
RabinKarp(T, P):
    m = len(P), n = len(T)
    hp = hash(P)
    ht = hash(T[0..m-1])
    for i = 0 to n-m:
        if ht == hp and T[i..i+m-1] == P:
            report match at i
        if i < n-m:
            update ht to hash of T[i+1..i+m]
```

**Rolling hash:** Compute \( h(s) = (s[0] \cdot d^{m-1} + s[1] \cdot d^{m-2} + \cdots + s[m-1]) \bmod q \). Update: \( h_{\text{new}} = (d(h_{\text{old}} - s[i] \cdot d^{m-1}) + s[i+m]) \bmod q \).

**Complexity:** Expected \( O(n + m) \), worst-case \( O(nm) \) (many hash collisions).

### 14.3 Z-Algorithm

**Z-array:** \( Z[i] \) is the length of the longest substring starting at \( i \) that is also a prefix of the string.

```
ComputeZ(S):
    n = len(S)
    Z[0] = 0
    l = 0, r = 0
    for i = 1 to n-1:
        if i <= r:
            Z[i] = min(r - i + 1, Z[i - l])
        while i + Z[i] < n and S[Z[i]] == S[i + Z[i]]:
            Z[i]++
        if i + Z[i] - 1 > r:
            l = i
            r = i + Z[i] - 1
    return Z
```

**Pattern matching with Z:** Concatenate \( P + \text{special char} + T \), compute Z-array. Whenever \( Z[i] = m \), a match is found at position \( i - m - 1 \) in the original text.

**Complexity:** \( O(n) \).

### 14.4 Manacher's Algorithm

**Problem:** Find all palindromic substrings in linear time.

**Key insight:** Use symmetry to avoid recomputation. Maintain the center and right boundary of the current rightmost palindrome.

```
Manacher(S):
    T = preprocess(S) with boundaries: "^#" + join(S, "#") + "$"
    P = array of size |T|, initialized to 0
    C = 0, R = 0
    for i = 1 to |T|-1:
        if i < R:
            P[i] = min(R - i, P[2*C - i])
        while T[i + P[i] + 1] == T[i - P[i] - 1]:
            P[i]++
        if i + P[i] > R:
            C = i
            R = i + P[i]
    // P[i] is the radius of palindrome centered at i
    return P
```

**Complexity:** \( O(n) \).

### 14.5 Suffix Array

**Definition 14.1.** A **suffix array** of a string \( S \) is an array of starting positions of all suffixes of \( S \) sorted lexicographically.

**Construction (prefix-doubling):**

```
BuildSuffixArray(S):
    n = len(S)
    sa = indices 0..n-1
    rank = S[i] (integer)
    k = 1
    while k < n:
        sort sa by (rank[i], rank[i+k])
        newRank[sa[0]] = 0
        for i = 1 to n-1:
            newRank[sa[i]] = newRank[sa[i-1]]
            if (rank[sa[i]], rank[sa[i]+k]) != (rank[sa[i-1]], rank[sa[i-1]+k]):
                newRank[sa[i]]++
        rank = newRank
        k *= 2
    return sa
```

**Complexity:** \( O(n \log n) \) time, \( O(n) \) space.

### 14.6 LCP Array

**Definition 14.2.** The **LCP array** stores the length of the longest common prefix between consecutive suffixes in the suffix array.

**Kasai's algorithm:**
```
BuildLCP(S, sa):
    n = len(S)
    rank[sa[i]] = i
    lcp = array of size n-1
    h = 0
    for i = 0 to n-1:
        if rank[i] > 0:
            j = sa[rank[i] - 1]
            while S[i+h] == S[j+h]: h++
            lcp[rank[i] - 1] = h
            if h > 0: h--
    return lcp
```

**Complexity:** \( O(n) \).

**Applications of suffix array + LCP:**
- Longest repeated substring: maximum LCP value.
- Number of distinct substrings: \( n(n+1)/2 - \sum \text{LCP}[i] \).
- Pattern matching: binary search on suffix array in \( O(m \log n) \).

---

## Examples

### Example 14.1: KMP in C++

```cpp
#include <vector>
#include <string>

std::vector<int> computePrefix(const std::string& P) {
    int m = static_cast<int>(P.size());
    std::vector<int> pi(m, 0);
    for (int i = 1, k = 0; i < m; ++i) {
        while (k > 0 && P[k] != P[i]) k = pi[k - 1];
        if (P[k] == P[i]) ++k;
        pi[i] = k;
    }
    return pi;
}

std::vector<int> kmp(const std::string& T, const std::string& P) {
    std::vector<int> matches;
    auto pi = computePrefix(P);
    int n = static_cast<int>(T.size());
    int m = static_cast<int>(P.size());
    for (int i = 0, j = 0; i < n; ++i) {
        while (j > 0 && T[i] != P[j]) j = pi[j - 1];
        if (T[i] == P[j]) ++j;
        if (j == m) {
            matches.push_back(i - m + 1);
            j = pi[j - 1];
        }
    }
    return matches;
}
```

**Walkthrough:** T = "ABABDABACDABABCABAB", P = "ABABCABAB". Compute pi = [0,0,1,2,0,1,2,3,4]. Matches at position 10.

### Example 14.2: Manacher's Algorithm

```cpp
#include <vector>
#include <string>
#include <algorithm>

std::vector<int> manacher(const std::string& S) {
    std::string T = "^#";
    for (char c : S) { T += c; T += '#'; }
    T += '$';
    int n = static_cast<int>(T.size());
    std::vector<int> P(n, 0);
    int C = 0, R = 0;
    for (int i = 1; i < n - 1; ++i) {
        if (i < R) P[i] = std::min(R - i, P[2 * C - i]);
        while (T[i + P[i] + 1] == T[i - P[i] - 1]) ++P[i];
        if (i + P[i] > R) { C = i; R = i + P[i]; }
    }
    return P; // P[i] is the palindrome radius at center i
}
```

---

## Summary

| Algorithm | Problem | Time | Space |
|-----------|---------|------|-------|
| KMP | Pattern matching | \( O(n+m) \) | \( O(m) \) |
| Rabin-Karp | Pattern matching (with hashing) | Expected \( O(n+m) \) | \( O(1) \) |
| Z-algorithm | Pattern matching | \( O(n) \) | \( O(n) \) |
| Manacher | Palindromic substrings | \( O(n) \) | \( O(n) \) |
| Suffix array | All suffix queries | \( O(n\log n) \) | \( O(n) \) |
| LCP array | Suffix queries | \( O(n) \) | \( O(n) \) |

---

## Exercises

### Review Questions

1. Explain the purpose of the prefix function in KMP.
2. How does Rabin-Karp handle hash collisions?
3. What is the relationship between the Z-array and the prefix function?

### Application Problems

4. Implement the Z-algorithm and use it for pattern matching.
5. Compute the number of distinct substrings of "BANANA" using the suffix array and LCP array.
6. Implement suffix array construction for a string of length 1000.
7. Find the longest palindrome in "babad" using Manacher's algorithm.

### Challenge Problem

8. Design an algorithm to find the **longest common substring** of two strings in \( O(n + m) \) time. Hint: concatenate the strings and use the suffix array + LCP array.
