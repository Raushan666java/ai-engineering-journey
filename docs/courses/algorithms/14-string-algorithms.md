# Chapter 14: String Algorithms

> **Prerequisites:** [Chapter 13: Network Flow](./13-graph-flow.md) — Algorithm design techniques, complexity analysis | **Next:** [Chapter 15: NP-Completeness](./15-np-completeness.md) — From efficient algorithms to hardness theory

## Learning Objectives

By the end of this chapter, students will be able to:

<!-- Image Gallery -->
<section class="lesson-visuals" aria-label="Visual learning resources">
  <header><span>VISUAL LEARNING</span><h2>See it. Review it. Remember it.</h2></header>
  <a class="lesson-visual-card" href="../../../assets/images/lessons/algorithms/14-string-algorithms/handwritten-notes.svg" target="_blank" rel="noopener">
    <img src="../../../assets/images/lessons/algorithms/14-string-algorithms/handwritten-notes.svg" alt="Handwritten notes" loading="lazy">
    <span><strong>Handwritten notes</strong>Condensed notes for deliberate review.</span>
  </a>
  <a class="lesson-visual-card" href="../../../assets/images/lessons/algorithms/14-string-algorithms/sticky-notes.svg" target="_blank" rel="noopener">
    <img src="../../../assets/images/lessons/algorithms/14-string-algorithms/sticky-notes.svg" alt="Sticky-note revision" loading="lazy">
    <span><strong>Sticky-note revision</strong>Fast recall prompts for revision.</span>
  </a>
  <a class="lesson-visual-card" href="../../../assets/images/lessons/algorithms/14-string-algorithms/visual-explanation.svg" target="_blank" rel="noopener">
    <img src="../../../assets/images/lessons/algorithms/14-string-algorithms/visual-explanation.svg" alt="Visual concept guide" loading="lazy">
    <span><strong>Visual concept guide</strong>A connected explanation of the key ideas.</span>
  </a>
</section>
<!-- End Image Gallery -->


1. Implement and analyze KMP, Rabin-Karp, and Z-algorithm for pattern matching.
2. Use Manacher's algorithm to find all palindromic substrings in linear time.
3. Construct a suffix array and LCP array in \( O(n \log n) \) time.
4. Apply suffix arrays to solve substring queries, pattern matching, and string analysis.
5. Implement the Aho-Corasick automaton for multi-pattern matching.
6. Analyze trade-offs between string algorithms and choose the right one for a given problem.

---

## Why String Algorithms Matter

**Every second, billions of strings are searched.** When you press Ctrl+F in a document, your browser scans thousands of characters in milliseconds. When BLAST searches a DNA database, it aligns 3 billion base pairs against your query. When your phone autocorrects "teh" to "the", it computes edit distance instantly.

String algorithms are the invisible engine behind:
- **Search engines** — Google indexes trillions of web pages using suffix structures
- **Bioinformatics** — Finding a gene in the human genome is a pattern-matching problem on a string of length 3.2 billion
- **Spell checkers & autocomplete** — Tries and edit distance power every text input field
- **Intrusion detection systems** — Snort and Suricata match thousands of attack signatures against every packet
- **Plagiarism detection** — Turnitin uses suffix arrays to find substring overlaps between documents
- **Compression** — gzip uses the LZ77 algorithm, which is fundamentally a string-matching problem

**Real-world analogy:** You're looking for a specific sentence in a 500-page book. The naive approach is to scan every page word-by-word — at worst, you read the whole book every time. A better approach is the index at the back (like a suffix array): you look up the first word, and it tells you every page that word appears on. Even better is knowing patterns in the language itself — like KMP's prefix function, which tells you "if this word doesn't match, you can skip ahead by exactly this much because you've already read enough to know."

This chapter transforms the simple act of "finding a string in another string" from O(n²) brute force into O(n) elegance.

---

### Chapter at a Glance


| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| Naive Pattern Search | Brute-force sliding window | O(nm) baseline; understand why we need better |
| KMP | Prefix function avoids re-scanning | O(n+m) linear time pattern matching |
| Rabin-Karp | Rolling hash comparison | O(n+m) average; hash collisions can break worst case |
| Z-Algorithm | Z-array for pattern matching | Simpler than KMP for some variants |
| Aho-Corasick | Trie + failure links = multi-pattern KMP | O(n) for any number of patterns |
| Suffix Array | Sorted suffixes via doubling + radix | O(n log n) build; O(m log n) pattern search |
| LCP Array | Longest common prefix between adjacent suffixes | Enables O(m + log n) pattern matching |
| Manacher | Mirror property of palindromes | O(n) to find all palindromes |

### Chapter Roadmap


```mermaid
flowchart LR
    A[String Algorithms] --> B[Pattern Matching]
    A --> C[Palindrome]
    A --> D[Suffix Structures]
    A --> E[Multi-Pattern]
    B --> F[Naive O(nm)]
    B --> G[KMP O(n+m)]
    B --> H[Rabin-Karp O(n+m) avg]
    B --> I[Z-Algorithm O(n)]
    C --> J[Manacher O(n)]
    D --> K[Suffix Array O(n log n)]
    D --> L[LCP Array O(n)]
    E --> M[Aho-Corasick O(n)]
```

---

![String Algorithms Diagram](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/algorithms/ch14-string-algorithms.png)

## 14.1 Naive Pattern Search

**Real-world analogy:** You have a key (the pattern) and a long row of locks (the text). You try the key at the first lock, then the second, then the third — at each position, you check whether every tumbler aligns. If the key doesn't fit at position i, you move to i+1 and try again.

### How It Works


Given text \(T[0..n-1]\) and pattern \(P[0..m-1]\), slide the pattern over the text one position at a time. At each shift \(s\), compare \(T[s..s+m-1]\) with \(P[0..m-1]\) character by character.

### Algorithm Steps


1. Let \(n = \text{len}(T)\), \(m = \text{len}(P)\).
2. For each shift \(s\) from 0 to \(n-m\):
   a. Set \(j = 0\)
   b. While \(j &lt; m\) and \(T[s+j] == P[j]\): increment \(j\)
   c. If \(j == m\): report match at position \(s\)

### Pseudocode


```
NaiveSearch(T, P):
    n = len(T), m = len(P)
    for s = 0 to n - m:
        j = 0
        while j < m and T[s + j] == P[j]:
            j = j + 1
        if j == m:
            print "Match at position", s
```

### Dry Run


**Text:** `ABABDABACDABABCABAB` (n=18)  
**Pattern:** `ABABCABAB` (m=9)

| Shift | Comparison Sequence | Result |
|-------|--------------------|--------|
| 0 | A=A✓ B=B✓ A=A✓ B=B✓ A=A✓ B=B✓ A=A✓ B≠C✗ | Fail at T[7] |
| 1 | B≠A✗ | Fail at T[1] |
| 2 | A=A✓ B=B✓ A=A✓ B=B✓ A=A✓ B=B✓ A=A✓ B≠C✗ | Fail at T[9] |
| 3 | B≠A✗ | Fail at T[3] |
| 4 | D≠A✗ | Fail at T[4] |
| 5 | A=A✓ B=B✓ A=A✓ C≠B✗ | Fail at T[7] |
| 6 | B≠A✗ | Fail at T[6] |
| 7 | A=A✓ C≠B✗ | Fail at T[8] |
| 8 | C≠A✗ | Fail at T[8] |
| 9 | D≠A✗ | Fail at T[9] |
| 10 | A=A✓ B=B✓ A=A✓ B=B✓ C=C✓ A=A✓ B=B✓ A=A✓ B=B✓ | **Match at 10** |

### Implementations


```cpp
// C++
#include <vector>
#include <string>

std::vector<int> naiveSearch(const std::string& T, const std::string& P) {
    std::vector<int> matches;
    int n = T.size(), m = P.size();
    for (int s = 0; s <= n - m; ++s) {
        int j = 0;
        while (j < m && T[s + j] == P[j]) ++j;
        if (j == m) matches.push_back(s);
    }
    return matches;
}
```

```python
# Python
def naive_search(T: str, P: str) -> list[int]:
    n, m = len(T), len(P)
    matches = []
    for s in range(n - m + 1):
        j = 0
        while j < m and T[s + j] == P[j]:
            j += 1
        if j == m:
            matches.append(s)
    return matches
```

```java
// Java
import java.util.ArrayList;
import java.util.List;

public static List<Integer> naiveSearch(String T, String P) {
    List<Integer> matches = new ArrayList<>();
    int n = T.length(), m = P.length();
    for (int s = 0; s <= n - m; s++) {
        int j = 0;
        while (j < m && T.charAt(s + j) == P.charAt(j)) j++;
        if (j == m) matches.add(s);
    }
    return matches;
}
```

### Complexity Analysis


| Case | Comparisons | Why |
|------|-------------|-----|
| Best | \( \Omega(n) \) | Pattern mismatches at first character of every shift |
| Worst | \( O(nm) \) | Each shift matches \( m-1 \) characters then fails (e.g., T="AAAAAB", P="AAAAB") |
| Average | \( \Theta(n) \) | Random text has very low probability of multiple consecutive matches |

**Time:** \(O(nm)\) worst-case. For each of \(n-m+1 \approx n\) shifts, we compare up to \(m\) characters.

**Space:** \(O(1)\) — only loop counters.

### Advantages & Disadvantages


| Advantages | Disadvantages |
|------------|---------------|
| Simple to implement and understand | O(nm) worst-case is too slow for large texts |
| No preprocessing required | Re-examines already-matched characters |
| Works with any alphabet | No early termination for long partial matches |
| No extra memory needed | Impractical for n > 10⁵ |

### Edge Cases


| Case | T | P | Expected |
|------|---|---|----------|
| Empty text | "" | "abc" | No matches |
| Pattern longer than text | "ab" | "abcde" | No matches |
| Pattern not found | "abcdef" | "xyz" | No matches |
| All same characters | "AAAAAA" | "AAA" | Matches at 0,1,2,3 |
| Overlapping patterns | "AAAA" | "AA" | Matches at 0,1,2 |
| Exact match | "abc" | "abc" | Match at 0 |

---

## 14.2 Knuth-Morris-Pratt (KMP) Algorithm

**Real-world analogy:** You're reading a book and searching for the word "needle." When you get to "needless," you realize "needle" doesn't match — but you already know the text reads "needl-." Instead of going back to the 'e' and starting over, you skip ahead to where the next possible match could begin, because "needl-" shares a suffix with the prefix "needle."

### The Key Insight


The **prefix function** (also called the failure function) \(\pi[i]\) stores the length of the longest proper prefix of \(P[0..i]\) that is also a suffix of \(P[0..i]\). When a mismatch occurs at position \(j\) in the pattern, the prefix function tells us how far to shift: the next comparison starts at \(\pi[j-1]\) instead of 0.

### Steps to Compute Prefix Function


1. Initialize \(\pi[0] = 0\), \(k = 0\).
2. For each \(i\) from 1 to \(m-1\):
   a. While \(k > 0\) and \(P[k] \neq P[i]\): set \(k = \pi[k-1]\)
   b. If \(P[k] == P[i]\): increment \(k\)
   c. Set \(\pi[i] = k\)

### Steps for KMP Matching


1. Compute \(\pi\) array from the pattern.
2. Initialize \(j = 0\) (pattern index).
3. For each \(i\) from 0 to \(n-1\) (text index):
   a. While \(j > 0\) and \(T[i] \neq P[j]\): set \(j = \pi[j-1]\)
   b. If \(T[i] == P[j]\): increment \(j\)
   c. If \(j == m\): report match at \(i-m+1\), set \(j = \pi[j-1]\)

### Pseudocode


```
ComputePrefix(P):
    m = len(P)
    pi[0] = 0
    k = 0
    for i = 1 to m-1:
        while k > 0 and P[k] != P[i]:
            k = pi[k-1]
        if P[k] == P[i]:
            k = k + 1
        pi[i] = k
    return pi

KMP(T, P):
    pi = ComputePrefix(P)
    j = 0
    for i = 0 to n-1:
        while j > 0 and T[i] != P[j]:
            j = pi[j-1]
        if T[i] == P[j]:
            j = j + 1
        if j == m:
            print "Match at", i - m + 1
            j = pi[j-1]
```

### Dry Run — Prefix Function


**Pattern:** `ABCABD` (m=6)

| i | P[i] | k (before) | while loop | P[k]==P[i]? | k (after) | \(\pi[i]\) |
|---|------|-----------|------------|-------------|-----------|-----------|
| 0 | A | – | – | – | 0 | 0 |
| 1 | B | 0 | skip | A≠B | 0 | 0 |
| 2 | C | 0 | skip | A≠C | 0 | 0 |
| 3 | A | 0 | skip | A==A✓ | 1 | 1 |
| 4 | B | 1 | skip | B==B✓ | 2 | 2 |
| 5 | D | 2 | while: k=\(\pi\)[1]=0 | A≠D | 0 | 0 |

**Result:** \(\pi = [0, 0, 0, 1, 2, 0]\)

### Dry Run — Matching Phase


**Text:** `ABCABCABD` (n=9), **Pattern:** `ABCABD` (m=6), \(\pi = [0,0,0,1,2,0]\)

| i | T[i] | j (before) | T[i]==P[j]? | j (after) | Action |
|---|------|-----------|-------------|-----------|--------|
| 0 | A | 0 | A==A✓ | 1 | advance |
| 1 | B | 1 | B==B✓ | 2 | advance |
| 2 | C | 2 | C==C✓ | 3 | advance |
| 3 | A | 3 | A==A✓ | 4 | advance |
| 4 | B | 4 | B==B✓ | 5 | advance |
| 5 | C | 5 | C≠D✗ → j=\(\pi\)[4]=2 | 2 | fallback |
| 5 | C | 2 | C==C✓ | 3 | advance |
| 6 | A | 3 | A==A✓ | 4 | advance |
| 7 | B | 4 | B==B✓ | 5 | advance |
| 8 | D | 5 | D==D✓ | 6 | **Match at 3** |

### Implementations


```cpp
// C++
#include <vector>
#include <string>

std::vector<int> computePrefix(const std::string& P) {
    int m = P.size();
    std::vector<int> pi(m, 0);
    for (int i = 1, k = 0; i < m; ++i) {
        while (k > 0 && P[k] != P[i])
            k = pi[k - 1];
        if (P[k] == P[i]) ++k;
        pi[i] = k;
    }
    return pi;
}

std::vector<int> kmp(const std::string& T, const std::string& P) {
    std::vector<int> matches;
    auto pi = computePrefix(P);
    int n = T.size(), m = P.size();
    for (int i = 0, j = 0; i < n; ++i) {
        while (j > 0 && T[i] != P[j])
            j = pi[j - 1];
        if (T[i] == P[j]) ++j;
        if (j == m) {
            matches.push_back(i - m + 1);
            j = pi[j - 1];
        }
    }
    return matches;
}
```

```python
# Python
def compute_prefix(P: str) -> list[int]:
    m = len(P)
    pi = [0] * m
    k = 0
    for i in range(1, m):
        while k > 0 and P[k] != P[i]:
            k = pi[k - 1]
        if P[k] == P[i]:
            k += 1
        pi[i] = k
    return pi

def kmp(T: str, P: str) -> list[int]:
    pi = compute_prefix(P)
    matches = []
    j = 0
    for i, ch in enumerate(T):
        while j > 0 and ch != P[j]:
            j = pi[j - 1]
        if ch == P[j]:
            j += 1
        if j == len(P):
            matches.append(i - len(P) + 1)
            j = pi[j - 1]
    return matches
```

```java
// Java
import java.util.ArrayList;
import java.util.List;

public static int[] computePrefix(String P) {
    int m = P.length();
    int[] pi = new int[m];
    for (int i = 1, k = 0; i < m; i++) {
        while (k > 0 && P.charAt(k) != P.charAt(i))
            k = pi[k - 1];
        if (P.charAt(k) == P.charAt(i)) k++;
        pi[i] = k;
    }
    return pi;
}

public static List<Integer> kmp(String T, String P) {
    int[] pi = computePrefix(P);
    List<Integer> matches = new ArrayList<>();
    int n = T.length(), m = P.length();
    for (int i = 0, j = 0; i < n; i++) {
        while (j > 0 && T.charAt(i) != P.charAt(j))
            j = pi[j - 1];
        if (T.charAt(i) == P.charAt(j)) j++;
        if (j == m) {
            matches.add(i - m + 1);
            j = pi[j - 1];
        }
    }
    return matches;
}
```

### Complexity Analysis


| Phase | Time | Why |
|-------|------|-----|
| Prefix computation | \(O(m)\) | Each iteration of the while loop decreases \(k\), and \(k\) increases at most \(m\) times total |
| Matching | \(O(n)\) | The text pointer \(i\) never decreases; \(j\) decreases only via \(\pi\) |
| **Total** | **\(O(n + m)\)** | The pattern and text are each scanned exactly once |

**Space:** \(O(m)\) for the prefix array.

### Advantages & Disadvantages


| Advantages | Disadvantages |
|------------|---------------|
| Guaranteed O(n+m) time | Complex to understand and debug |
| Text pointer never backtracks | Requires O(m) extra space |
| No hash collisions to worry about | Harder to implement correctly than Rabin-Karp |
| Excellent for streaming/searching large texts | Only handles single-pattern search |

### Edge Cases


| Case | T | P | Behavior |
|------|---|---|----------|
| Empty text | "" | "abc" | Matching loop runs 0 times, no matches |
| Pattern longer | "ab" | "abcde" | j never reaches m, no matches |
| All same chars | "AAAA" | "AA" | \(\pi = [0,1]\); matches at 0,1,2 |
| Overlapping | "ABABA" | "ABA" | \(\pi = [0,0,1]\); matches at 0,2 |
| Single char | "abcabc" | "a" | \(\pi = [0]\); matches at 0,3 |

> **Pro Tip:** KMP's prefix function (pi array) encodes the "border" of each prefix — the longest proper prefix that is also a suffix. This is the key to O(n+m) performance because it never backtracks in the text.
>
> **Remember:** The prefix function is computed on the pattern alone before matching begins. The matching phase runs in O(n) time by always advancing the text pointer.

**One-Sentence Takeaway:** KMP achieves O(n+m) pattern matching by computing a prefix function on the pattern that encodes how far to shift on mismatch without re-examining matched text.

---

## 14.3 Rabin-Karp Algorithm

**Real-world analogy:** You're looking for a specific fingerprint in a database. Instead of comparing every ridge detail (which is slow), you compute a hash of the fingerprint and only do a detailed comparison when the hash matches. As you slide through the database, you update the hash incrementally instead of recomputing from scratch.

### The Key Insight


Use a **rolling hash** to compute the hash of each text window in O(1) time from the previous window's hash. Only perform character-by-character comparison when hashes match.

### Algorithm Steps


1. Compute \(hp = \text{hash}(P)\) using base \(d\) and modulus \(q\).
2. Compute \(ht = \text{hash}(T[0..m-1])\).
3. For each window starting at \(i\) from 0 to \(n-m\):
   a. If \(ht == hp\) and \(T[i..i+m-1] == P\): report match.
   b. If \(i &lt; n-m\): update \(ht\) to the hash of \(T[i+1..i+m]\).

### Rolling Hash Formula


\( h(s) = (s[0] \cdot d^{m-1} + s[1] \cdot d^{m-2} + \cdots + s[m-1]) \bmod q \)

Update: \( h_{\text{new}} = (d \cdot (h_{\text{old}} - T[i] \cdot d^{m-1}) + T[i+m]) \bmod q \)

### Pseudocode


```
RabinKarp(T, P):
    d = 256, q = large prime
    m = len(P), n = len(T)
    hp = 0, ht = 0, h = 1
    for i = 0 to m-2:
        h = (h * d) % q
    for i = 0 to m-1:
        hp = (d * hp + P[i]) % q
        ht = (d * ht + T[i]) % q
    for i = 0 to n-m:
        if hp == ht:
            if T[i..i+m-1] == P:
                print "Match at", i
        if i < n-m:
            ht = (d * (ht - T[i] * h) + T[i+m]) % q
            if ht < 0: ht += q
```

### Dry Run


**Text:** `CCABCA` (n=6), **Pattern:** `ABC` (m=3)  
Let \(d = 10, q = 13\) for simplicity (using character values A=1, B=2, C=3)

**Pattern hash:** \( hp = (1 \cdot 10^2 + 2 \cdot 10^1 + 3 \cdot 10^0) \bmod 13 = (100 + 20 + 3) \bmod 13 = 123 \bmod 13 = 6 \)

| i | Window | Hash | hp==ht? | char match? | Result |
|---|--------|------|---------|-------------|--------|
| 0 | CCA | \((3\cdot100+3\cdot10+1)\bmod13 = 331\bmod13 = 6\) | Yes | CCA≠ABC | No match |
| 1 | CAB | \(10\cdot(6-3\cdot10)+2)\bmod13 = (-238)\bmod13 = 9\) | No | – | No match |
| 2 | ABC | \(10\cdot(9-3\cdot10)+3)\bmod13 = (-177)\bmod13 = 6\) | Yes | ABC==ABC✓ | **Match at 2** |
| 3 | BCA | \(10\cdot(6-1\cdot10)+1)\bmod13 = (-39)\bmod13 = 0\) | No | – | No match |

### Implementations


```cpp
// C++
#include <vector>
#include <string>

std::vector<int> rabinKarp(const std::string& T, const std::string& P) {
    int d = 256, q = 101;
    int m = P.size(), n = T.size();
    std::vector<int> matches;
    int hp = 0, ht = 0, h = 1;
    for (int i = 0; i < m - 1; ++i) h = (h * d) % q;
    for (int i = 0; i < m; ++i) {
        hp = (d * hp + P[i]) % q;
        ht = (d * ht + T[i]) % q;
    }
    for (int i = 0; i <= n - m; ++i) {
        if (hp == ht) {
            int j = 0;
            while (j < m && T[i + j] == P[j]) ++j;
            if (j == m) matches.push_back(i);
        }
        if (i < n - m) {
            ht = (d * (ht - T[i] * h) + T[i + m]) % q;
            if (ht < 0) ht += q;
        }
    }
    return matches;
}
```

```python
# Python
def rabin_karp(T: str, P: str) -> list[int]:
    d, q = 256, 101
    m, n = len(P), len(T)
    matches = []
    h = pow(d, m - 1, q)
    hp = ht = 0
    for i in range(m):
        hp = (d * hp + ord(P[i])) % q
        ht = (d * ht + ord(T[i])) % q
    for i in range(n - m + 1):
        if hp == ht:
            if T[i:i + m] == P:
                matches.append(i)
        if i < n - m:
            ht = (d * (ht - ord(T[i]) * h) + ord(T[i + m])) % q
    return matches
```

```java
// Java
import java.util.ArrayList;
import java.util.List;

public static List<Integer> rabinKarp(String T, String P) {
    int d = 256, q = 101;
    int m = P.length(), n = T.length();
    List<Integer> matches = new ArrayList<>();
    int hp = 0, ht = 0, h = 1;
    for (int i = 0; i < m - 1; i++) h = (h * d) % q;
    for (int i = 0; i < m; i++) {
        hp = (d * hp + P.charAt(i)) % q;
        ht = (d * ht + T.charAt(i)) % q;
    }
    for (int i = 0; i <= n - m; i++) {
        if (hp == ht) {
            int j = 0;
            while (j < m && T.charAt(i + j) == P.charAt(j)) j++;
            if (j == m) matches.add(i);
        }
        if (i < n - m) {
            ht = (d * (ht - T.charAt(i) * h) + T.charAt(i + m)) % q;
            if (ht < 0) ht += q;
        }
    }
    return matches;
}
```

### Complexity Analysis


| Case | Time | Why |
|------|------|-----|
| Best | \(O(n + m)\) | Hash never matches (or rarely matches) without actual pattern match |
| Worst | \(O(nm)\) | Every window's hash collides with pattern hash, forcing full comparison |
| Average | \(O(n + m)\) | With a good hash function and large prime modulus, collisions are rare |

**Space:** \(O(1)\) — only a few integer variables.

### Advantages & Disadvantages


| Advantages | Disadvantages |
|------------|---------------|
| Expected linear time | Worst-case O(nm) with bad hash |
| \(O(1)\) extra space | Requires careful modulo arithmetic |
| Easily extends to **multiple patterns** | Hash collisions need character verification |
| Ideal for plagiarism detection (rolling hash of phrases) | Choosing d and q affects collision probability |

### Edge Cases


| Case | Behavior |
|------|----------|
| Empty pattern | Handle separately (match at every position) |
| Pattern longer than text | Loop condition \(n-m\) negative; handle upfront |
| All same characters | Hash works fine; no extra collisions |
| Hash collision | Character verification catches false positives |
| Very large texts | Use 64-bit mod or double hashing to reduce collision risk |

> **Pro Tip:** Use a large prime modulus (e.g., \(10^9+7\)) and a random base to minimize hash collisions. Double hashing or a rolling checksum eliminates worst-case collisions entirely.
>
> **Warning:** The worst-case O(nm) occurs when all window hashes collide with the pattern hash. Always do a character-by-character verification when hashes match.

**One-Sentence Takeaway:** Rabin-Karp uses rolling hash for O(n+m) expected-time pattern matching with worst-case O(nm) when hash collisions are frequent.

---

## 14.4 Z-Algorithm

**Real-world analogy:** You have a song and want to find every time the chorus repeats. The Z-algorithm is like building a table that says, "Starting at each position in the song, the next N notes are identical to the first N notes of the song." When that N equals the length of the chorus, you've found a match.

### The Key Insight


The **Z-array** \(Z[i]\) stores the length of the longest substring starting at position \(i\) that matches the prefix of the string. For pattern matching, concatenate \(P + \text{separator} + T\), compute the Z-array, and every \(Z[i] = m\) indicates a match.

### Algorithm Steps


1. Initialize \(Z[0] = 0\), \(l = r = 0\).
2. For each \(i\) from 1 to \(n-1\):
   a. If \(i \le r\): \(Z[i] = \min(r - i + 1, Z[i - l])\)
   b. While \(i + Z[i] &lt; n\) and \(S[Z[i]] == S[i + Z[i]]\): increment \(Z[i]\)
   c. If \(i + Z[i] - 1 > r\): set \(l = i\), \(r = i + Z[i] - 1\)

### Pseudocode


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

**Pattern matching:** Concatenate \(P + \$ + T\), compute Z-array. Every \(Z[i] = m\) means a match at position \(i - m - 1\) in the original text.

### Dry Run


**Pattern:** `aab` (m=3), **Text:** `aabaab`  
**Concatenated S:** `aab$aabaab`

| i | S[i] | i≤r? | Z[i] init | While expansion | Z[i] final | l | r |
|---|------|------|-----------|-----------------|------------|---|---|
| 0 | a | – | 0 | – | 0 | 0 | 0 |
| 1 | a | 1>0=✗ | 0 | S[1]==S[0] ✓, S[2]==S[1] ✓, S[3]≠S[2] ✗ | 2 | 1 | 2 |
| 2 | b | 2>2=✗ | 0 | S[2]≠S[0] ✗ | 0 | 1 | 2 |
| 3 | $ | 3>2=✗ | 0 | S[3]≠S[0] ✗ | 0 | 1 | 2 |
| 4 | a | 4>2=✗ | 0 | S[4]==S[0] ✓, S[5]==S[1] ✓, S[6]==S[2] ✓, S[7]≠S[3] ✗ | 3 | 4 | 6 |
| 5 | a | 5≤6=✓ | min(2, Z[1]=2)=2 | S[7]≠S[2] ✗ | 2 | 4 | 6 |
| 6 | b | 6≤6=✓ | min(1, Z[2]=0)=0 | S[6]≠S[0] ✗ | 0 | 4 | 6 |
| 7 | a | 7>6=✗ | 0 | S[7]==S[0] ✓, S[8]==S[1] ✓, end | 2 | 7 | 8 |
| 8 | a | 8≤8=✓ | min(1, Z[1]=2)=1 | end | 1 | 7 | 8 |

**Matches:** \(Z[4] = 3 = m\) → match at \(4 - 3 - 1 = 0\).  
\(Z[4] = 3\) → match at position 0 in original text. Indeed, "aab" is at position 0 and 3 in "aabaab".

### Implementations


```cpp
// C++
#include <vector>
#include <string>

std::vector<int> computeZ(const std::string& S) {
    int n = S.size();
    std::vector<int> Z(n, 0);
    int l = 0, r = 0;
    for (int i = 1; i < n; ++i) {
        if (i <= r)
            Z[i] = std::min(r - i + 1, Z[i - l]);
        while (i + Z[i] < n && S[Z[i]] == S[i + Z[i]])
            ++Z[i];
        if (i + Z[i] - 1 > r) {
            l = i;
            r = i + Z[i] - 1;
        }
    }
    return Z;
}

std::vector<int> zMatch(const std::string& T, const std::string& P) {
    std::string S = P + "$" + T;
    auto Z = computeZ(S);
    std::vector<int> matches;
    int m = P.size();
    for (int i = m + 1; i < (int)Z.size(); ++i)
        if (Z[i] == m) matches.push_back(i - m - 1);
    return matches;
}
```

```python
# Python
def compute_z(S: str) -> list[int]:
    n = len(S)
    Z = [0] * n
    l = r = 0
    for i in range(1, n):
        if i <= r:
            Z[i] = min(r - i + 1, Z[i - l])
        while i + Z[i] < n and S[Z[i]] == S[i + Z[i]]:
            Z[i] += 1
        if i + Z[i] - 1 > r:
            l, r = i, i + Z[i] - 1
    return Z

def z_match(T: str, P: str) -> list[int]:
    S = P + "$" + T
    Z = compute_z(S)
    m = len(P)
    return [i - m - 1 for i in range(m + 1, len(Z)) if Z[i] == m]
```

```java
// Java
import java.util.ArrayList;
import java.util.List;

public static int[] computeZ(String S) {
    int n = S.length();
    int[] Z = new int[n];
    int l = 0, r = 0;
    for (int i = 1; i < n; i++) {
        if (i <= r)
            Z[i] = Math.min(r - i + 1, Z[i - l]);
        while (i + Z[i] < n && S.charAt(Z[i]) == S.charAt(i + Z[i]))
            Z[i]++;
        if (i + Z[i] - 1 > r) {
            l = i;
            r = i + Z[i] - 1;
        }
    }
    return Z;
}

public static List<Integer> zMatch(String T, String P) {
    String S = P + "$" + T;
    int[] Z = computeZ(S);
    List<Integer> matches = new ArrayList<>();
    int m = P.length();
    for (int i = m + 1; i < Z.length; i++)
        if (Z[i] == m) matches.add(i - m - 1);
    return matches;
}
```

### Complexity Analysis


| Phase | Time | Why |
|-------|------|-----|
| Z-array computation | \(O(n)\) | The while loop advances the \(r\) boundary; \(r\) only increases, total increments ≤ \(n\) |
| Pattern matching | \(O(n + m)\) | One Z-array pass with O(1) checks per position |
| **Total** | **\(O(n + m)\)** | Linear in the length of the concatenated string |

**Space:** \(O(n + m)\) for the Z-array and concatenated string.

### Advantages & Disadvantages


| Advantages | Disadvantages |
|------------|---------------|
| Simple, clean implementation | Requires O(n) extra space |
| Single linear-time pass | Separtor character must not appear in P or T |
| Easy to reason about correctness | Concatenated string doubles memory |
| Works well for pattern matching and string analysis | Not as well-known as KMP in interview settings |

### Edge Cases


| Case | Behavior |
|------|----------|
| Empty pattern | Treat as always matched |
| Pattern longer than text | No \(Z[i] = m\) found |
| Separator in text | Must use a character not in the alphabet |
| Single character | Z is always 0 or 1 |
| All same characters | Z values grow linearly; works correctly |

> **Pro Tip:** The Z-algorithm is simpler to implement than KMP for pattern matching — just concatenate P + "$" + T, compute the Z-array, and look for Z[i] = len(P). The separator character must not appear in either string.
>
> **Remember:** The Z-algorithm's linear time comes from maintaining the [l, r] interval of the rightmost matching prefix — it never recomputes matches inside this window.

**One-Sentence Takeaway:** The Z-algorithm computes the longest prefix match at each position in O(n) by maintaining the rightmost matching window [l, r].

---

## 14.5 Aho-Corasick Algorithm

**Real-world analogy:** You're a security guard monitoring a building with 1000 "banned items" on your list. Instead of searching for each item one at a time (which would take 1000 passes), you build a single master checklist. As you walk through the building, you check off items from the master list in one continuous sweep. Aho-Corasick does the same for strings: it searches for **all patterns simultaneously** in a single pass.

### The Key Insight


Build a **trie** of all patterns, then add **failure links** (like KMP's prefix function but extended to a tree). Failure links redirect mismatches to the longest proper suffix that is also a prefix of some pattern. The result is an automaton that processes the text in \(O(n)\) time, regardless of how many patterns exist.

### Algorithm Steps


**Phase 1: Build Trie**
1. Create a root node.
2. For each pattern, traverse the trie character by character, creating new nodes as needed.
3. Mark nodes that correspond to the end of a pattern.

**Phase 2: Add Failure Links (BFS)**
1. Root's direct children have failure = root.
2. For each node in BFS order:
   a. For each child \(c\) of the current node:
      i. Let \(fail = \text{failure}(\text{current})\).
      ii. While \(fail \neq \text{root}\) and \(fail\) has no child \(c\): \(fail = \text{failure}(fail)\).
      iii. If \(fail\) has child \(c\): \(\text{failure}(c) = \text{child}(fail, c)\); else \(\text{failure}(c) = \text{root}\).
      iv. Merge output links: if \(\text{failure}(c)\) is a pattern end, add that pattern to \(c\)'s outputs.

**Phase 3: Search**
1. Start at root.
2. For each character in the text:
   a. While current node has no child for this character: follow failure link.
   b. If a child exists, move to it.
   c. Check for matches at the current node (including via output links).

### Pseudocode


```
BuildTrie(patterns):
    root = new Node()
    for each pattern in patterns:
        node = root
        for each char c in pattern:
            if node has no child c:
                node.child[c] = new Node()
            node = node.child[c]
        node.output.add(pattern)
    return root

BuildFailureLinks(root):
    queue = empty
    for each child c of root:
        c.fail = root
        queue.push(c)
    while queue not empty:
        current = queue.pop()
        for each (char c, child) in current.children:
            fail = current.fail
            while fail != root and c not in fail.children:
                fail = fail.fail
            if c in fail.children:
                child.fail = fail.children[c]
            else:
                child.fail = root
            child.output.addAll(child.fail.output)
            queue.push(child)

AhoCorasickSearch(T, root):
    node = root
    for i = 0 to len(T)-1:
        while node != root and T[i] not in node.children:
            node = node.fail
        if T[i] in node.children:
            node = node.children[T[i]]
        for each pattern in node.output:
            print "Match of", pattern, "at", i - len(pattern) + 1
```

### Dry Run


**Patterns:** `ab`, `bc` **Text:** `abcab`

**Step 1: Build Trie**

```
root → 'a' → 'b'*   (pattern "ab" ends at node_ab)
root → 'b' → 'c'*   (pattern "bc" ends at node_bc)
```

**Step 2: Build Failure Links**

| Node | Failure | Why |
|------|---------|-----|
| root | root | default |
| node_a | root | depth 1, root has no failure |
| node_b | root | depth 1 |
| node_ab | node_b | failure(node_a)=root, root has child 'b' → node_b |
| node_bc | root | failure(node_b)=root, root has no child 'c' |

**Step 3: Search**

| i | T[i] | node (before) | Transition | node (after) | Match |
|---|------|---------------|------------|--------------|-------|
| 0 | a | root | root→a (exists) | node_a | – |
| 1 | b | node_a | a→b (exists) | node_ab | **"ab" at 0** |
| 2 | c | node_ab | ab has no c, fail=node_b, b→c (exists) | node_bc | **"bc" at 1** |
| 3 | a | node_bc | bc has no a, fail=root, root→a (exists) | node_a | – |
| 4 | b | node_a | a→b (exists) | node_ab | **"ab" at 3** |

Matches found: "ab" at positions 0 and 3, "bc" at position 1.

### Implementations


```cpp
// C++
#include <queue>
#include <vector>
#include <string>
#include <unordered_map>

struct Node {
    std::unordered_map<char, Node*> children;
    Node* fail = nullptr;
    std::vector<std::string> output;
};

Node* buildTrie(const std::vector<std::string>& patterns) {
    Node* root = new Node();
    for (const auto& p : patterns) {
        Node* node = root;
        for (char c : p) {
            if (!node->children.count(c))
                node->children[c] = new Node();
            node = node->children[c];
        }
        node->output.push_back(p);
    }
    return root;
}

void buildFailureLinks(Node* root) {
    std::queue<Node*> q;
    for (auto& [c, child] : root->children) {
        child->fail = root;
        q.push(child);
    }
    while (!q.empty()) {
        Node* cur = q.front(); q.pop();
        for (auto& [c, child] : cur->children) {
            Node* fail = cur->fail;
            while (fail != root && !fail->children.count(c))
                fail = fail->fail;
            if (fail->children.count(c))
                child->fail = fail->children[c];
            else
                child->fail = root;
            for (const auto& p : child->fail->output)
                child->output.push_back(p);
            q.push(child);
        }
    }
}
```

```python
# Python
from collections import deque

class Node:
    def __init__(self):
        self.children = {}
        self.fail = None
        self.output = []

def build_trie(patterns: list[str]) -> Node:
    root = Node()
    for p in patterns:
        node = root
        for c in p:
            if c not in node.children:
                node.children[c] = Node()
            node = node.children[c]
        node.output.append(p)
    return root

def build_failure_links(root: Node) -> None:
    q = deque()
    for child in root.children.values():
        child.fail = root
        q.append(child)
    while q:
        cur = q.popleft()
        for c, child in cur.children.items():
            fail = cur.fail
            while fail and c not in fail.children:
                fail = fail.fail
            child.fail = fail.children[c] if fail and c in fail.children else root
            if child.fail:
                child.output.extend(child.fail.output)
            q.append(child)

def aho_corasick_search(T: str, root: Node) -> list[tuple[int, str]]:
    matches = []
    node = root
    for i, ch in enumerate(T):
        while node != root and ch not in node.children:
            node = node.fail
        if ch in node.children:
            node = node.children[ch]
        for p in node.output:
            matches.append((i - len(p) + 1, p))
    return matches
```

```java
// Java
import java.util.*;

class Node {
    Map<Character, Node> children = new HashMap<>();
    Node fail;
    List<String> output = new ArrayList<>();
}

class AhoCorasick {
    Node root = new Node();

    public void buildTrie(String[] patterns) {
        for (String p : patterns) {
            Node node = root;
            for (char c : p.toCharArray()) {
                node.children.putIfAbsent(c, new Node());
                node = node.children.get(c);
            }
            node.output.add(p);
        }
    }

    public void buildFailureLinks() {
        Queue<Node> q = new LinkedList<>();
        for (Node child : root.children.values()) {
            child.fail = root;
            q.add(child);
        }
        while (!q.isEmpty()) {
            Node cur = q.poll();
            for (Map.Entry<Character, Node> e : cur.children.entrySet()) {
                char c = e.getKey();
                Node child = e.getValue();
                Node fail = cur.fail;
                while (fail != root && !fail.children.containsKey(c))
                    fail = fail.fail;
                child.fail = fail.children.getOrDefault(c, root);
                child.output.addAll(child.fail.output);
                q.add(child);
            }
        }
    }
}
```

### Complexity Analysis


| Phase | Time | Why |
|-------|------|-----|
| Trie building | \(O(\sum m_i)\) | Sum of lengths of all patterns |
| Failure links | \(O(\sum m_i)\) | Each node visited once via BFS; while loops amortize |
| Search | \(O(n + \text{matches})\) | Each text character traverses the automaton in amortized O(1) |
| **Total** | **\(O(n + \sum m_i + \text{matches})\)** | Linear in total input size |

**Space:** \(O(\sum m_i \cdot |\Sigma|)\) for the trie, where \(|\Sigma|\) is alphabet size.

### Advantages & Disadvantages


| Advantages | Disadvantages |
|------------|---------------|
| Searches ALL patterns in one pass | Complex to implement from scratch |
| Linear time regardless of pattern count | Large memory footprint for large alphabets |
| Extension of KMP intuition to multiple patterns | Overkill for single-pattern search |
| Used in real IDS/IPS systems (Snort, Suricata) | Output link handling can be tricky |

### Edge Cases


| Case | Behavior |
|------|----------|
| Empty pattern list | Only the root node exists; no matches found |
| Patterns that are substrings of other patterns | Output links catch the shorter pattern |
| Empty text | No text to traverse; returns empty |
| All patterns identical | Trie collapses them; output list has duplicates |
| Overlapping patterns (e.g., "aa", "a") | Both matched correctly at each position |

**One-Sentence Takeaway:** Aho-Corasick extends KMP's failure function to a trie of multiple patterns, enabling simultaneous search for all patterns in a single linear-time pass through the text.

---

## 14.6 Suffix Array & Trie

**Real-world analogy:** A dictionary's index at the back lists every word alphabetically with page numbers. A suffix array is like that index for every suffix of a string: it lists all suffixes in sorted order. Once you have this index, you can binary search for any substring in \(O(m \log n)\), and the LCP array supercharges it to \(O(m + \log n)\).

### Suffix Array


**Definition:** A **suffix array** of string \(S\) is an array of starting positions of all suffixes of \(S\) sorted lexicographically.

**Example:** \(S = \text{"banana"}\)

| Suffix | Start |
|--------|-------|
| a | 5 |
| ana | 3 |
| anana | 1 |
| banana | 0 |
| na | 4 |
| nana | 2 |

Suffix Array: \(SA = [5, 3, 1, 0, 4, 2]\)

### Prefix-Doubling Construction


**Idea:** Sort suffixes by the first \(2^k\) characters, doubling \(k\) each iteration. After \(k \ge \log n\) rounds, all suffixes are uniquely sorted.

#### Steps

1. Initialize rank as the character value at each position.
2. For \(k = 1, 2, 4, \ldots\) until \(k \ge n\):
   a. Sort indices by \((rank[i], rank[i+k])\).
   b. Assign new ranks: same rank for equal pairs.
   c. If all ranks are unique, stop.

#### Pseudocode

```
BuildSuffixArray(S):
    n = len(S)
    sa = [0, 1, ..., n-1]
    rank = [ord(S[i]) for i in range(n)]
    k = 1
    while k < n:
        sort sa by (rank[i], rank[i+k])
        newRank[sa[0]] = 0
        for i = 1 to n-1:
            prev = (rank[sa[i-1]], rank[sa[i-1]+k] if sa[i-1]+k < n else -1)
            cur = (rank[sa[i]], rank[sa[i]+k] if sa[i]+k < n else -1)
            newRank[sa[i]] = newRank[sa[i-1]] + (prev != cur ? 1 : 0)
        rank = newRank
        k *= 2
    return sa
```

#### Dry Run: S = "banana"

**Initial:**
- sa = [0, 1, 2, 3, 4, 5]
- rank = [98, 97, 110, 97, 110, 97] (ASCII: b=98, a=97, n=110)

**k=1: Sort by (rank[i], rank[i+1])**
- (98,97) → i=0 | (97,110) → i=1 | (110,97) → i=2 | (97,110) → i=3 | (110,97) → i=4 | (97,-1) → i=5

After sorting: sa = [5, 1, 3, 0, 2, 4]
New ranks: [3, 1, 2, 1, 2, 0]

**k=2: Sort by (rank[i], rank[i+2])**
- i=0: (3,2) | i=1: (1,2) | i=2: (2,0) | i=3: (1,-1) | i=4: (2,-1) | i=5: (0,-1)

After sorting: sa = [5, 3, 1, 0, 4, 2]
New ranks: [3, 2, 4, 1, 4, 0]

**k=4: All ranks unique → done**

Final SA = [5, 3, 1, 0, 4, 2]

### LCP Array (Kasai's Algorithm)


**Definition:** LCP[i] = longest common prefix between suffixes at SA[i] and SA[i+1].

#### Steps

1. Compute rank array: \(rank[SA[i]] = i\).
2. Initialize \(h = 0\).
3. For each suffix starting at \(i\) (in original order):
   a. If \(rank[i] > 0\):
      i. Let \(j = SA[rank[i] - 1]\) (previous suffix in sorted order).
      ii. While \(S[i+h] == S[j+h]\): increment \(h\).
      iii. Set \(LCP[rank[i] - 1] = h\).
      iv. If \(h > 0\): decrement \(h\).

#### Dry Run: SA = [5, 3, 1, 0, 4, 2], S = "banana"

Rank: rank[5]=0, rank[3]=1, rank[1]=2, rank[0]=3, rank[4]=4, rank[2]=5

| i (S index) | rank[i] | j = SA[rank-1] | Compare | h | LCP |
|------------|---------|---------------|---------|---|-----|
| 0 | 3 | SA[2]=1 | "banana" vs "anana": 0 | 0 | 0 |
| 1 | 2 | SA[1]=3 | "anana" vs "ana": "ana"=3 | 3 | 2 (LCP[1]=3) |
| 2 | 5 | SA[4]=4 | "nana" vs "na": "na"=2 | 2 | 4 (LCP[4]=2) |
| 3 | 1 | SA[0]=5 | "ana" vs "a": "a"=1 | 1 | 0 (LCP[0]=1) |
| 4 | 4 | SA[3]=0 | "na" vs "banana": 0 | 0 | 3 (LCP[3]=0) |
| 5 | 0 | – | – | – | – |

LCP = [1, 3, 0, 0, 2]

### Applications


| Problem | Solution |
|---------|----------|
| Longest repeated substring | Max value in LCP array |
| Number of distinct substrings | \(n(n+1)/2 - \sum LCP\) |
| Pattern matching | Binary search on SA: \(O(m \log n)\) |
| Longest common prefix of two suffixes | Range minimum query on LCP array |

### Implementations


```cpp
// C++ Suffix Array (prefix-doubling)
#include <vector>
#include <string>
#include <algorithm>

std::vector<int> buildSuffixArray(const std::string& S) {
    int n = S.size();
    std::vector<int> sa(n), rank(n), tmp(n);
    for (int i = 0; i < n; ++i) sa[i] = i, rank[i] = S[i];
    for (int k = 1; k < n; k *= 2) {
        auto cmp = [&](int a, int b) {
            if (rank[a] != rank[b]) return rank[a] < rank[b];
            int ra = a + k < n ? rank[a + k] : -1;
            int rb = b + k < n ? rank[b + k] : -1;
            return ra < rb;
        };
        std::sort(sa.begin(), sa.end(), cmp);
        tmp[sa[0]] = 0;
        for (int i = 1; i < n; ++i)
            tmp[sa[i]] = tmp[sa[i - 1]] + cmp(sa[i - 1], sa[i]);
        rank = tmp;
    }
    return sa;
}
```

```python
# Python
def build_suffix_array(S: str) -> list[int]:
    n = len(S)
    sa = list(range(n))
    rank = [ord(c) for c in S]
    k = 1
    while k < n:
        sa.sort(key=lambda i: (rank[i], rank[i + k] if i + k < n else -1))
        tmp = [0] * n
        for i in range(1, n):
            prev = (rank[sa[i - 1]], rank[sa[i - 1] + k] if sa[i - 1] + k < n else -1)
            cur = (rank[sa[i]], rank[sa[i] + k] if sa[i] + k < n else -1)
            tmp[sa[i]] = tmp[sa[i - 1]] + (prev != cur)
        rank = tmp
        k *= 2
    return sa

def build_lcp(S: str, sa: list[int]) -> list[int]:
    n = len(S)
    rank = [0] * n
    for i, pos in enumerate(sa):
        rank[pos] = i
    lcp = [0] * (n - 1)
    h = 0
    for i in range(n):
        if rank[i] > 0:
            j = sa[rank[i] - 1]
            while i + h < n and j + h < n and S[i + h] == S[j + h]:
                h += 1
            lcp[rank[i] - 1] = h
            if h: h -= 1
    return lcp
```

```java
// Java
import java.util.*;

public static int[] buildSuffixArray(String S) {
    int n = S.length();
    Integer[] sa = new Integer[n];
    int[] rank = new int[n];
    for (int i = 0; i < n; i++) { sa[i] = i; rank[i] = S.charAt(i); }
    for (int k = 1; k < n; k *= 2) {
        int kk = k;
        int[] r = rank.clone();
        Arrays.sort(sa, (a, b) -> {
            if (r[a] != r[b]) return r[a] - r[b];
            int ra = a + kk < n ? r[a + kk] : -1;
            int rb = b + kk < n ? r[b + kk] : -1;
            return ra - rb;
        });
        int[] tmp = new int[n];
        tmp[sa[0]] = 0;
        for (int i = 1; i < n; i++) {
            int prevA = sa[i - 1], prevB = sa[i];
            int curA = r[prevA], curB = r[prevB];
            int nextA = prevA + kk < n ? r[prevA + kk] : -1;
            int nextB = prevB + kk < n ? r[prevB + kk] : -1;
            tmp[sa[i]] = tmp[sa[i - 1]] + (curA != curB || nextA != nextB ? 1 : 0);
        }
        rank = tmp;
    }
    return Arrays.stream(sa).mapToInt(i -> i).toArray();
}
```

### Complexity Analysis


| Operation | Time | Why |
|-----------|------|-----|
| Build SA | \(O(n \log n)\) | \(\log n\) sorting rounds, each \(O(n \log n)\) (or \(O(n)\) with radix sort) |
| Build LCP | \(O(n)\) | Each character compared at most once total |
| Pattern matching (binary search) | \(O(m \log n)\) | \(\log n\) steps, each comparing up to \(m\) characters |
| Pattern matching (with LCP) | \(O(m + \log n)\) | LCP accelerates comparison to O(1) amortized |

**Space:** \(O(n)\) for SA, LCP, and rank arrays.

### Advantages & Disadvantages


| Advantages | Disadvantages |
|------------|---------------|
| Solves dozens of string problems after one build | Construction is more complex than KMP |
| Pattern matching without per-match O(m) scanning | O(n log n) build time (vs O(n) for KMP) |
| LCP array enables substring counting and analysis | Large memory (3 arrays of size n) |
| Works with arbitrary alphabets | Overkill for single-pattern search |

### Edge Cases


| Case | Behavior |
|------|----------|
| Single character string | SA = [0]; no LCP entries |
| All same characters | SA = [n-1, ..., 0]; LCP entries have decreasing values |
| Empty string | Handle separately; building SA on empty string is undefined |
| String with unique characters | SA sorted by characters directly; stops after k=1 |

**One-Sentence Takeaway:** The suffix array sorts all suffixes of a string in O(n log n), enabling efficient substring queries, pattern matching, and string analysis when combined with the LCP array.

---

## 14.7 Manacher's Algorithm

**Problem:** Find all palindromic substrings in linear time.

**Key insight:** Use symmetry to avoid recomputation. Maintain the center and right boundary of the current rightmost palindrome. When expanding, use the mirror palindrome's radius to skip already-known matches.

### Pseudocode


```
Manacher(S):
    T = "^#" + join(S, "#") + "$"
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

### Implementation


```cpp
// C++
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
    return P;
}
```

```python
# Python
def manacher(S: str) -> list[int]:
    T = "^#" + "#".join(S) + "#$"
    n = len(T)
    P = [0] * n
    C = R = 0
    for i in range(1, n - 1):
        if i < R:
            P[i] = min(R - i, P[2 * C - i])
        while T[i + P[i] + 1] == T[i - P[i] - 1]:
            P[i] += 1
        if i + P[i] > R:
            C, R = i, i + P[i]
    return P  # P[i] is palindrome radius at center i
```

```java
// Java
public static int[] manacher(String S) {
    StringBuilder sb = new StringBuilder("^#");
    for (char c : S.toCharArray()) { sb.append(c); sb.append('#'); }
    sb.append('$');
    String T = sb.toString();
    int n = T.length();
    int[] P = new int[n];
    int C = 0, R = 0;
    for (int i = 1; i < n - 1; i++) {
        if (i < R) P[i] = Math.min(R - i, P[2 * C - i]);
        while (T.charAt(i + P[i] + 1) == T.charAt(i - P[i] - 1)) P[i]++;
        if (i + P[i] > R) { C = i; R = i + P[i]; }
    }
    return P;
}
```

### Complexity Analysis


**Time:** \(O(n)\) — the while loop expands the rightmost palindrome boundary \(R\), which only increases. Each expansion corresponds to a unique center.

**Space:** \(O(n)\) for the transformed string and radius array.

### Advantages & Disadvantages


| Advantages | Disadvantages |
|------------|---------------|
| Finds ALL palindromes in O(n) | Trickier to understand and implement correctly |
| Uses palindrome symmetry property | Requires preprocessing with separators |
| Single pass through transformed string | Only solves palindrome problems |

> **Pro Tip:** Manacher's algorithm is the crown jewel of palindrome algorithms — it uses mirror symmetry to reduce O(n²) naive expansion to O(n). The transformed string with '#' separators ensures all palindromes (even-length) have a distinct center.

---

## String Algorithm Comparison

| Algorithm | Type | Time | Space | Best For | Multiple Patterns? | Linear? |
|-----------|------|------|-------|----------|-------------------|---------|
| Naive Search | Sliding window | O(nm) | O(1) | Tiny inputs, learning | No | No |
| KMP | Border-based | O(n+m) | O(m) | Single pattern, large text | No | Yes |
| Rabin-Karp | Rolling hash | O(n+m) exp | O(1) | Multiple patterns, plagiarism detection | Yes (avg) | Expected |
| Z-Algorithm | Interval-based | O(n+m) | O(n+m) | Simpler KMP alternative | No | Yes |
| Aho-Corasick | Trie automaton | O(n+∑m) | O(∑m·Σ) | Multiple patterns, IDS | Yes | Yes |
| Suffix Array + LCP | Sorted suffixes | O(n log n) build | O(n) | Many queries on static text | Yes | Build only |
| Manacher | Mirror symmetry | O(n) | O(n) | Palindrome problems | N/A | Yes |

---

## Interview Corner

### 1. Longest Palindromic Substring


**Problem:** Given a string S, find the longest substring that is a palindrome.

**Approaches:**
- **Expand around center (O(n²), O(1)):** For each center, expand outward while the substring is a palindrome. Handle both odd and even length palindromes.
- **Manacher (O(n), O(n)):** Use the Manacher algorithm described above.

**Algorithm (Expand around center):**
1. For each index \(i\) in the string:
   a. Expand around center \(i\) for odd-length palindromes.
   b. Expand around center \(i\) and \(i+1\) for even-length palindromes.
2. Track the longest palindrome found.

```
LongestPalindrome(S):
    start = 0, maxLen = 1
    for i = 0 to n-1:
        len1 = expand(S, i, i)       // odd
        len2 = expand(S, i, i+1)     // even
        len = max(len1, len2)
        if len > maxLen:
            start = i - (len-1)/2
            maxLen = len
    return S[start..start+maxLen-1]
```

**Complexity:** O(n²) time, O(1) space.

### 2. Longest Common Prefix (LCP) of an Array of Strings


**Problem:** Given an array of strings, find the longest common prefix among all strings.

**Approaches:**
- **Horizontal scanning:** Compare strings one by one, reducing the common prefix.
- **Vertical scanning:** Compare characters at the same position across all strings.
- **Binary search:** Binary search on prefix length; all strings must have that prefix.
- **Trie:** Build a trie and find the deepest node with degree 1.

**Algorithm (Vertical scanning):**
```
LongestCommonPrefix(strs):
    if strs is empty: return ""
    for i = 0 to len(strs[0])-1:
        c = strs[0][i]
        for j = 1 to len(strs)-1:
            if i == len(strs[j]) or strs[j][i] != c:
                return strs[0][0..i-1]
    return strs[0]
```

**Complexity:** O(S) where S = sum of all characters in all strings. Space: O(1).

### 3. Wildcard Pattern Matching


**Problem:** Implement wildcard pattern matching with support for '?' (matches any single character) and '\*' (matches any sequence of characters).

**Approach (Two-pointer greedy):**
- Use two pointers \(i\) (text) and \(j\) (pattern).
- Track the last '\*' position in pattern and the corresponding text position.
- When '\*' is matched, try matching zero characters first, then expand on backtrack.

```
WildcardMatch(T, P):
    i = 0, j = 0, star = -1, match = 0
    while i < n:
        if j < m and (P[j] == '?' or P[j] == T[i]):
            i++, j++
        elif j < m and P[j] == '*':
            star = j, match = i, j++
        elif star != -1:
            j = star + 1, match++, i = match
        else:
            return false
    while j < m and P[j] == '*': j++
    return j == m
```

**Complexity:** O(n + m) time, O(1) space.

---

## Applications in Real Systems

### Ctrl+F in Browsers and Editors


Every browser's "Find in Page" feature implements some form of pattern matching:
- **Chrome** uses a modified version of Boyer-Moore for single-pattern search in the renderer process.
- **VS Code** uses KMP-like algorithms for its search across large files.
- **grep** uses Boyer-Moore for single-pattern search and Aho-Corasick for multi-pattern (`grep -e`).

The key requirement is interactivity: results must appear while the user types, which demands sub-50ms search for files up to 1MB.

### Bioinformatics — DNA Pattern Search


DNA is a string over {A, C, G, T} with length ~3.2 billion for the human genome:
- **BLAST** (Basic Local Alignment Search Tool) uses a seed-and-extend approach: find short exact matches (seeds), then extend them.
- **Bowtie** uses a **Burrows-Wheeler Transform** (based on suffix arrays) to align reads to a reference genome in O(m) time.
- **Suffix arrays** are used to build genome indexes for rapid querying.

Example: Searching for the gene `BRCA1` (~125k base pairs) in the human genome using naive search would take ~10 trillion comparisons. With suffix arrays, it takes microseconds.

### Network Intrusion Detection Systems (NIDS)


Snort and Suricata match network packets against thousands of attack signatures:
- **Aho-Corasick** is the primary algorithm used — it matches all signatures in a single pass over the packet payload.
- Multi-pattern matching is critical because a single packet might match 10+ rules.
- Performance requirement: process packets at line rate (1-100 Gbps) without dropping packets.

**Real numbers:** Snort 3's Aho-Corasick implementation matches ~40,000 patterns against a 1500-byte packet in ~2μs on modern hardware.

### Plagiarism Detection


- **MOSS** (Measure of Software Similarity) uses **document fingerprinting** with rolling hashes (Rabin-Karp style). It selects a subset of hashes (e.g., those where the hash mod some value = 0) as fingerprints.
- **Turnitin** compares documents using suffix arrays and LCP to find the longest common substrings between papers.

### Search Engine Indexing


- Google's **PageRank** doesn't use string algorithms directly, but its **inverted index** is built using suffix structures.
- **Autocomplete** uses a **Trie** (prefix tree): as the user types each character, the trie is traversed to suggest completions.
- **Spelling correction** uses **edit distance** (Levenshtein distance) combined with BK-trees or tries.

---

### Concept Comparison Table

| Algorithm | Core Idea | Time | Space | Key Feature |
|-----------|-----------|------|-------|-------------|
| Naive | Brute-force sliding window | O(nm) | O(1) | Simple baseline |
| KMP | Prefix function (borders) | O(n+m) | O(m) | No backtracking in text |
| Rabin-Karp | Rolling hash | O(n+m) exp | O(1) | Multiple pattern search |
| Z-Algorithm | Z-array window [l,r] | O(n) | O(n) | Simpler than KMP |
| Aho-Corasick | Trie + failure links | O(n+∑m) | O(∑m·Σ) | Multi-pattern search |
| Manacher | Palindrome symmetry | O(n) | O(n) | All palindromes |
| Suffix Array | Doubling + sort ranks | O(n log n) | O(n) | Versatile string queries |
| LCP Array | Kasai's linear algorithm | O(n) | O(n) | Enables substring queries |

### Quick Reference

| Category | Key Points |
|----------|------------|
| **KMP** | Prefix function avoids rematching; O(n+m) |
| **Rabin-Karp** | Rolling hash with modulo; hash collision degrades to O(nm) |
| **Z-Algorithm** | Linear via [l,r] interval; concat P + $ + T for matching |
| **Aho-Corasick** | Trie + BFS failure links; search all patterns in one pass |
| **Manacher** | Symmetry reduces redundant expansion; use # separators |
| **Suffix Array** | Prefix-doubling O(n log n); use LCP for full power |
| **Key Application** | LCP → longest repeated substring, distinct substrings |

### Cross-Application Matrix

| Algorithm | DSA Interviews | Competitive Programming | System Design | Real-World |
|-----------|---------------|----------------------|---------------|------------|
| Naive | Rare | Never | N/A | Teaching only |
| KMP | Common | String matching | N/A | Word processors |
| Rabin-Karp | Common | Multiple pattern search | Plagiarism detection | Search engines |
| Z-Algorithm | Occasionally | Simpler KMP alternative | N/A | Bioinformatics |
| Aho-Corasick | Occasionally | Multi-pattern problems | IDS/IPS | Snort, Suricata |
| Manacher | Occasionally | Palindrome problems | N/A | NLP |
| Suffix Array | Advanced | Core technique | Genome indexing | Bioinformatics |

---

## Summary

| Algorithm | Problem | Time | Space |
|-----------|---------|------|-------|
| Naive Search | Pattern matching | \(O(nm)\) | \(O(1)\) |
| KMP | Pattern matching | \(O(n+m)\) | \(O(m)\) |
| Rabin-Karp | Pattern matching (with hashing) | Expected \(O(n+m)\) | \(O(1)\) |
| Z-Algorithm | Pattern matching | \(O(n)\) | \(O(n)\) |
| Aho-Corasick | Multi-pattern matching | \(O(n + \sum m)\) | \(O(\sum m \cdot \|\Sigma\|)\) |
| Manacher | Palindromic substrings | \(O(n)\) | \(O(n)\) |
| Suffix Array | All suffix queries | \(O(n\log n)\) | \(O(n)\) |
| LCP Array | Suffix queries | \(O(n)\) | \(O(n)\) |

---

## Exercises

### Review Questions

1. Explain the purpose of the prefix function in KMP.
2. How does Rabin-Karp handle hash collisions?
3. What is the relationship between the Z-array and the prefix function?
4. How does Aho-Corasick extend KMP to multiple patterns?
5. Why is the LCP array necessary for the full power of suffix arrays?

### Application Problems

6. Implement the Z-algorithm and use it for pattern matching.
7. Compute the number of distinct substrings of "BANANA" using the suffix array and LCP array.
8. Implement suffix array construction for a string of length 1000.
9. Find the longest palindrome in "babad" using Manacher's algorithm.
10. Build an Aho-Corasick automaton for patterns {"cat", "car", "bat"} and search in text "concatenated cardboard battery".
11. Given T = "ABCABCABCABC" and P = "ABCABC", compare the number of comparisons made by Naive Search vs KMP.

### Challenge Problems

12. Design an algorithm to find the **longest common substring** of two strings in \(O(n + m)\) time. Hint: concatenate the strings and use the suffix array + LCP array.
13. Implement a **regex-like matcher** that supports '?' (single char wildcard) and '*' (multi-char wildcard) using dynamic programming.
14. Use KMP to implement the `strstr()` function in C (without using the built-in version).
15. Given a string S, find all unique palindromic substrings using Manacher's algorithm.

---

### Chapter Quiz

**Q1.** What is the key idea behind KMP's linear time guarantee?

- A) Rolling hash
- B) The prefix function that avoids re-examining matched characters
- C) Using binary search on the pattern
- D) Preprocessing the text instead of the pattern

<details>
<summary>Answer&lt;/summary&gt;
B) The prefix function (pi) encodes borders — when a mismatch occurs, we shift by the border length without going back in the text.
</details>

**Q2.** What is the worst-case time complexity of naive Rabin-Karp?

- A) O(n+m)
- B) O(nm)
- C) O(n²)
- D) O(n log n)

<details>
<summary>Answer&lt;/summary&gt;
B) O(nm) when many hash collisions force full character-by-character comparison.
</details>

**Q3.** What application does the LCP array enable that the suffix array alone cannot?

- A) Lexicographic sorting
- B) Longest common prefix queries between any two suffixes
- C) Pattern matching
- D) Finding the longest suffix

<details>
<summary>Answer&lt;/summary&gt;
B) The LCP array enables O(1) longest common prefix queries between consecutive sorted suffixes, which unlocks distinct substrings counting and substring search.
</details>

**Q4.** Which algorithm is best suited for detecting all occurrences of 10,000 attack patterns in a network packet?

- A) KMP
- B) Rabin-Karp
- C) Aho-Corasick
- D) Suffix Array

<details>
<summary>Answer&lt;/summary&gt;
C) Aho-Corasick — it matches all patterns in a single linear pass, making it ideal for IDS/IPS applications.
</details>

**Q5.** In the Z-algorithm, what does Z[i] represent?

- A) The length of the longest suffix ending at i
- B) The length of the longest substring starting at i that matches a prefix of the string
- C) The position of the first mismatch at i
- D) The length of the longest palindrome centered at i

<details>
<summary>Answer&lt;/summary&gt;
B) Z[i] is the length of the longest substring starting at position i that is also a prefix of the string.
</details>

**Q6.** What is the time complexity to build a suffix array using prefix doubling?

- A) O(n)
- B) O(n log n)
- C) O(n²)
- D) O(n² log n)

<details>
<summary>Answer&lt;/summary&gt;
B) O(n log n) — each doubling round requires sorting n elements, and there are log n rounds.
</details>

**Q7.** For the string "AAAA", how many distinct substrings does it have?

- A) 10
- B) 4
- C) 5
- D) 6

<details>
<summary>Answer&lt;/summary&gt;
B) 4 — "A", "AA", "AAA", "AAAA". Using the formula \(n(n+1)/2 - \sum LCP\): \(10 - (1+2+1) = 4\).
</details>

**Q8.** In Aho-Corasick, what is the purpose of failure links?

- A) To mark the end of a pattern
- B) To redirect the search when a mismatch occurs to the longest proper suffix that has a match
- C) To count the number of patterns found
- D) To store the hash of each pattern

<details>
<summary>Answer&lt;/summary&gt;
B) Failure links redirect the automaton on mismatch to the longest proper suffix of the current prefix that is also a prefix of some pattern — analogous to KMP's prefix function.
</details>

> **Next:** Chapter 15 explores NP-Completeness — the boundary between tractable and intractable problems, and how to recognize problems that likely have no efficient solution.
