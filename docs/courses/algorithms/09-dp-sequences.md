# Chapter 9: Dynamic Programming — Sequences

> **Prerequisites:** [Chapter 8: Dynamic Programming — Knapsack Problems](./08-dp-knapsack.md) — 2D DP tables, recurrence design | **Next:** [Chapter 10: Dynamic Programming — Trees & Grids](./10-dp-trees-grids.md) — DP on non-linear structures

## Learning Objectives

By the end of this chapter, students will be able to:

1. Compute the longest common subsequence (LCS) and reconstruct the sequence.
2. Compute the longest increasing subsequence (LIS) in both \( O(n^2) \) and \( O(n \log n) \) time.
3. Compute the edit distance (Levenshtein distance) between two strings.
4. Solve matrix chain multiplication and palindrome partitioning using DP.

---

## Why Sequence DP Matters

Sequence DP problems model real-world tasks where order matters. When a spell checker suggests "receive" instead of "recieve", it uses edit distance — the minimum characters to insert, delete, or replace. When GitHub highlights lines added and removed in a pull request, it runs LCS (longest common subsequence) under the hood. When biologists align two DNA strands to find evolutionary mutations, they use sequence alignment DP — the same recurrence as edit distance, generalized with scoring matrices.

Without sequence DP, every comparison of two ordered sequences would require exponential brute force. The core insight — that the optimal solution for prefixes builds on optimal solutions for smaller prefixes — turns an \( O(3^{m+n}) \) problem into \( O(mn) \).

---

### Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| LCS | dp[i][j] based on character match | 2D DP for comparing two sequences |
| LIS | Can reduce to patience sorting | O(n log n) via binary search on tails |
| Edit Distance | Min of insert/delete/replace | Foundation of spell checking and bioinformatics |
| Matrix Chain | Parenthesization order affects cost | dp[i][j] = min over all split points k |
| Palindrome | Expand from center or DP intervals | Two approaches: O(n²) or O(n³) |

### Chapter Roadmap

```mermaid
flowchart LR
    A[Sequence DP] --> B[Two-Sequence LCS]
    A --> C[Single-Sequence LIS]
    A --> D[Edit Distance]
    A --> E[Matrix Chain]
    A --> F[Palindrome Partitioning]
    B --> G[dp[i][j] match/mismatch]
    C --> H[O(n log n) patience sort]
    D --> I[insert/delete/replace ops]
    E --> J[dp[i][j] = min over k]
    F --> K[interval DP]
```

## Theory

![DP Sequences Diagram](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/algorithms/ch09-dp-sequences.png)

### 9.1 Longest Common Subsequence (LCS)

**Problem:** Given two strings \( X \) and \( Y \), find the longest subsequence that appears in both. A subsequence is obtained by deleting characters (not necessarily contiguous).

**Real-World Analogy:** Version control systems (git diff) compute the longest set of lines that remain unchanged between two file versions. The changed lines are everything else — insertions and deletions around the common core. Bioinformatics uses the same idea to compare DNA sequences: "ACTG" vs "ACG" shares the subsequence "ACG".

#### Algorithm Steps

1. Create a 2D DP table `dp` of size `(m+1) × (n+1)` initialized to 0, where `m = len(X)` and `n = len(Y)`.
2. Loop `i` from 1 to `m` and `j` from 1 to `n`:
   - If `X[i-1] == Y[j-1]`, set `dp[i][j] = dp[i-1][j-1] + 1` (character matches, extend the subsequence).
   - Else, set `dp[i][j] = max(dp[i-1][j], dp[i][j-1])` (take the best from the row above or column left).
3. Return `dp[m][n]` as the length of the LCS.
4. To reconstruct the actual subsequence, trace back from `dp[m][n]`:
   - If `X[i-1] == Y[j-1]`, include this character and move diagonally to `(i-1, j-1)`.
   - Else, move in the direction of the larger value (up if `dp[i-1][j] > dp[i][j-1]`, else left).
   - Reverse the collected characters.

#### Pseudocode

```
LCS(X, Y, m, n):
    dp = 2D array of size (m+1) x (n+1), all 0
    for i = 1 to m:
        for j = 1 to n:
            if X[i-1] == Y[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    return dp[m][n]

RECONSTRUCT(X, Y, dp, m, n):
    seq = empty list
    i = m, j = n
    while i > 0 and j > 0:
        if X[i-1] == Y[j-1]:
            seq.prepend(X[i-1])
            i--, j--
        else if dp[i-1][j] > dp[i][j-1]:
            i--
        else:
            j--
    return seq
```

#### Step-by-Step Dry Run

X = "ABCBDAB" (m = 7), Y = "BDCABA" (n = 6)

**Initial DP table** (all zeros):

| | Ø | B | D | C | A | B | A |
|---|---|---|---|---|---|---|---|
| **Ø** | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **A** | 0 | 0 | 0 | 0 | 1 | 1 | 1 |
| **B** | 0 | 1 | 1 | 1 | 1 | 2 | 2 |
| **C** | 0 | 1 | 1 | 2 | 2 | 2 | 2 |
| **B** | 0 | 1 | 1 | 2 | 2 | 3 | 3 |
| **D** | 0 | 1 | 2 | 2 | 2 | 3 | 3 |
| **A** | 0 | 1 | 2 | 2 | 3 | 3 | 4 |
| **B** | 0 | 1 | 2 | 2 | 3 | 4 | 4 |

**How each cell is computed:**

- `i=1 (A), j=1 (B)`: A≠B → dp[1][1] = max(0,0) = 0
- `i=1 (A), j=4 (A)`: A=A → dp[1][4] = dp[0][3] + 1 = 1
- `i=2 (B), j=1 (B)`: B=B → dp[2][1] = dp[1][0] + 1 = 1
- `i=2 (B), j=5 (B)`: B=B → dp[2][5] = dp[1][4] + 1 = 2
- `i=4 (B), j=5 (B)`: B=B → dp[4][5] = dp[3][4] + 1 = 3
- `i=6 (A), j=4 (A)`: A=A → dp[6][4] = dp[5][3] + 1 = 3
- `i=6 (A), j=6 (A)`: A=A → dp[6][6] = dp[5][5] + 1 = 4
- `i=7 (B), j=5 (B)`: B=B → dp[7][5] = dp[6][4] + 1 = 4

**Reconstruction traceback from (7,6):**
dp[7][6]=4 → (7,5): B≠A, dp[6][5]=3 &lt; dp[7][6]=4 → j-- → (7,5): B=B → take 'B', i=6, j=4
dp[6][4]=3 → (6,4): A=A → take 'A', i=5, j=3
dp[5][3]=2 → (5,3): D≠C, dp[4][3]=1 &lt; dp[5][3]=2 → j-- → (5,2): D≠B, dp[4][2]=1 < dp[5][2]=2 → j-- → (5,1): D≠B, dp[4][1]=1 = dp[5][1]=1 → j-- → (5,0): stop
Backtrack from dp[4][1]: (4,1): B=B → take 'B', i=3, j=0 → stop

LCS = "BCAB" (or alternatively "BCBA" through different equal choices — both length 4).

**Note:** There are multiple optimal LCS strings of length 4: "BCAB", "BCBA", "BDAB".

#### C++ Implementation

```cpp
#include <string>
#include <vector>
#include <algorithm>
#include <iostream>

std::string lcs(const std::string& X, const std::string& Y) {
    int m = static_cast<int>(X.size());
    int n = static_cast<int>(Y.size());
    std::vector<std::vector<int>> dp(m + 1, std::vector<int>(n + 1, 0));
    for (int i = 1; i <= m; ++i) {
        for (int j = 1; j <= n; ++j) {
            if (X[i-1] == Y[j-1])
                dp[i][j] = dp[i-1][j-1] + 1;
            else
                dp[i][j] = std::max(dp[i-1][j], dp[i][j-1]);
        }
    }
    std::string result;
    int i = m, j = n;
    while (i > 0 && j > 0) {
        if (X[i-1] == Y[j-1]) {
            result.push_back(X[i-1]);
            --i; --j;
        } else if (dp[i-1][j] > dp[i][j-1]) {
            --i;
        } else {
            --j;
        }
    }
    std::reverse(result.begin(), result.end());
    return result;
}
```

#### Python Implementation

```python
def lcs(X: str, Y: str) -> str:
    m, n = len(X), len(Y)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if X[i - 1] == Y[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
    i, j = m, n
    result = []
    while i > 0 and j > 0:
        if X[i - 1] == Y[j - 1]:
            result.append(X[i - 1])
            i -= 1; j -= 1
        elif dp[i - 1][j] > dp[i][j - 1]:
            i -= 1
        else:
            j -= 1
    return ''.join(reversed(result))
```

#### Java Implementation

```java
public static String lcs(String X, String Y) {
    int m = X.length(), n = Y.length();
    int[][] dp = new int[m + 1][n + 1];
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (X.charAt(i - 1) == Y.charAt(j - 1))
                dp[i][j] = dp[i - 1][j - 1] + 1;
            else
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
    }
    StringBuilder sb = new StringBuilder();
    int i = m, j = n;
    while (i > 0 && j > 0) {
        if (X.charAt(i - 1) == Y.charAt(j - 1)) {
            sb.append(X.charAt(i - 1));
            i--; j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            i--;
        } else {
            j--;
        }
    }
    return sb.reverse().toString();
}
```

#### Complexity Analysis — With WHY

- **Time: O(mn)** — Each of the (m+1)×(n+1) cells is computed exactly once with O(1) work per cell. This is optimal because the LCS problem has Ω(mn) possible prefix pairs to consider.
- **Space: O(mn)** — The full 2D table stores (m+1)×(n+1) integers. Each cell depends on three neighbors (top, left, diagonal), so a full table is needed for reconstruction.
- **Why not faster?** LCS is in the class of sequence alignment problems with a known Ω(mn) lower bound in the comparison model. No sub-quadratic algorithm exists for arbitrary alphabets.

#### Space Optimization

To compute only the **length** (not the subsequence), we only need two rows at a time because `dp[i][j]` depends only on `dp[i-1][j]`, `dp[i][j-1]`, and `dp[i-1][j-1]`:

```
LCS_LENGTH_OPT(X, Y, m, n):
    prev = array of size n+1, all 0
    for i = 1 to m:
        curr = array of size n+1, all 0
        for j = 1 to n:
            if X[i-1] == Y[j-1]:
                curr[j] = prev[j-1] + 1
            else:
                curr[j] = max(prev[j], curr[j-1])
        prev = curr
    return prev[n]
```

**Time: O(mn), Space: O(n)** — Only two rows of length n+1 are kept, reducing O(mn) space to O(n).

#### Advantages & Disadvantages

| Advantages | Disadvantages |
|------------|---------------|
| Simple recurrence, easy to implement | O(mn) space with full table |
| Parallelizable row-by-row | Cannot reconstruct sequence easily with space-optimized version |
| Handles arbitrary-length strings | Not efficient for very long strings (>10⁵ characters) |
| Foundation for many variants (diff, alignment) | Only finds one optimal solution when multiple exist |

#### Edge Cases

| Input | LCS Length | LCS | Explanation |
|-------|-----------|-----|-------------|
| X="", Y="ABC" | 0 | "" | One string empty |
| X="A", Y="A" | 1 | "A" | Single character match |
| X="A", Y="B" | 0 | "" | Single character mismatch |
| X="AAA", Y="AA" | 2 | "AA" | Repeated characters |
| X="ABC", Y="DEF" | 0 | "" | No common characters |
| X="ABC", Y="ABC" | 3 | "ABC" | Identical strings |
| X="ABC", Y="CBA" | 1 | "B" or "A" or "C" | Reversed string |

---

### 9.2 Longest Increasing Subsequence (LIS)

**Problem:** Given an array \( A \), find the length of the longest strictly increasing subsequence. Elements need not be contiguous.

**Real-World Analogy:** In the card game patience (solitaire), you arrange cards into piles where each pile is decreasing. The number of piles equals the length of the LIS. In finance, LIS models the longest uptrend in a stock price — finding the maximum number of days the price can increase in sequence without requiring consecutive days.

#### \( O(n^2) \) DP Approach

This is the simpler, intuitive DP.

##### Algorithm Steps

1. Initialize `dp[i] = 1` for all i (each element alone is a subsequence of length 1).
2. For each `i` from 1 to n-1:
   - For each `j` from 0 to i-1:
     - If `A[j] < A[i]`, update `dp[i] = max(dp[i], 1 + dp[j])`.
3. Return `max(dp)` as the LIS length.

##### Pseudocode

```
LIS_N2(A, n):
    dp = array of size n, initialized to 1
    for i = 1 to n-1:
        for j = 0 to i-1:
            if A[j] < A[i]:
                dp[i] = max(dp[i], 1 + dp[j])
    return max(dp)
```

##### Step-by-Step Dry Run

A = [10, 9, 2, 5, 3, 7, 101, 18]

| i | A[i] | j | A[j] &lt; A[i]? | dp[i] before | dp[i] after |
|---|------|---|--------------|--------------|-------------|
| 0 | 10 | — | — | 1 | 1 |
| 1 | 9 | 0 | 10&lt;9? No | 1 | 1 |
| 2 | 2 | 0,1 | 10&lt;2? No, 9<2? No | 1 | 1 |
| 3 | 5 | 0,1,2 | 10&lt;5? No, 9<5? No, 2<5? Yes → dp[3]=max(1,1+dp[2])=max(1,2)=2 | 1 | 2 |
| 4 | 3 | 0,1,2,3 | 10&lt;3? No, 9<3? No, 2<3? Yes → dp[4]=max(1,1+1)=2, 5<3? No | 1 | 2 |
| 5 | 7 | 0-4 | 2&lt;7 → dp[5]=max(1,1+1)=2, 5<7 → max(2,1+2)=3, 3<7 → max(3,1+2)=3 | 1 | 3 |
| 6 | 101 | 0-5 | 7&lt;101 → dp[6]=max(1,1+3)=4 | 1 | 4 |
| 7 | 18 | 0-6 | 7&lt;18 → max(1,1+3)=4, 101<18? No | 1 | 4 |

Final `dp = [1, 1, 1, 2, 2, 3, 4, 4]`, LIS length = 4.

#### \( O(n \log n) \) — Patience Sorting

Maintain an array `tails` where `tails[k]` is the smallest possible last element of an increasing subsequence of length `k+1`. The array `tails` is always sorted.

##### Algorithm Steps

1. Initialize an empty array `tails`.
2. For each element `x` in `A`:
   - Use binary search (`lower_bound`) to find the first position `i` where `tails[i] >= x`.
   - If `i` equals the length of `tails`, append `x` (a new longer subsequence is possible).
   - Otherwise, replace `tails[i]` with `x` (maintaining the smallest possible tail for this length).
3. Return `len(tails)`.

##### Pseudocode

```
LIS_NLOGN(A, n):
    tails = empty array
    for x in A:
        i = lower_bound(tails, x)
        if i == len(tails):
            tails.append(x)
        else:
            tails[i] = x
    return len(tails)
```

##### Step-by-Step Dry Run

A = [10, 9, 2, 5, 3, 7, 101, 18]

| x | binary search on tails | action | tails after |
|---|----------------------|--------|------------|
| 10 | [] → i=0 = len | append 10 | [10] |
| 9 | lower_bound([10], 9) → 0 &lt; len | replace tails[0]=9 | [9] |
| 2 | lower_bound([9], 2) → 0 &lt; len | replace tails[0]=2 | [2] |
| 5 | lower_bound([2], 5) → 1 = len | append 5 | [2, 5] |
| 3 | lower_bound([2,5], 3) → 1 &lt; len | replace tails[1]=3 | [2, 3] |
| 7 | lower_bound([2,3], 7) → 2 = len | append 7 | [2, 3, 7] |
| 101 | lower_bound([2,3,7], 101) → 3 = len | append 101 | [2, 3, 7, 101] |
| 18 | lower_bound([2,3,7,101], 18) → 3 &lt; len | replace tails[3]=18 | [2, 3, 7, 18] |

LIS length = 4.

**Key insight:** `tails` is **not** the actual LIS sequence. `[2, 3, 7, 18]` is not a subsequence of A. It represents the smallest possible tails for each length.

#### C++ Implementation

```cpp
#include <vector>
#include <algorithm>

int lisLength(const std::vector<int>& A) {
    std::vector<int> tails;
    for (int x : A) {
        auto it = std::lower_bound(tails.begin(), tails.end(), x);
        if (it == tails.end())
            tails.push_back(x);
        else
            *it = x;
    }
    return static_cast<int>(tails.size());
}

// O(n^2) version — also reconstructs the subsequence
std::vector<int> lisSubsequence(const std::vector<int>& A) {
    int n = static_cast<int>(A.size());
    std::vector<int> dp(n, 1), prev(n, -1);
    for (int i = 1; i < n; ++i) {
        for (int j = 0; j < i; ++j) {
            if (A[j] < A[i] && dp[j] + 1 > dp[i]) {
                dp[i] = dp[j] + 1;
                prev[i] = j;
            }
        }
    }
    int pos = static_cast<int>(std::max_element(dp.begin(), dp.end()) - dp.begin());
    std::vector<int> result;
    while (pos != -1) {
        result.push_back(A[pos]);
        pos = prev[pos];
    }
    std::reverse(result.begin(), result.end());
    return result;
}
```

#### Python Implementation

```python
import bisect

def lis_length(A):
    tails = []
    for x in A:
        i = bisect.bisect_left(tails, x)
        if i == len(tails):
            tails.append(x)
        else:
            tails[i] = x
    return len(tails)

def lis_subsequence(A):
    n = len(A)
    dp = [1] * n
    prev = [-1] * n
    for i in range(1, n):
        for j in range(i):
            if A[j] < A[i] and dp[j] + 1 > dp[i]:
                dp[i] = dp[j] + 1
                prev[i] = j
    pos = max(range(n), key=lambda i: dp[i])
    result = []
    while pos != -1:
        result.append(A[pos])
        pos = prev[pos]
    return list(reversed(result))
```

#### Java Implementation

```java
import java.util.*;

public static int lisLength(int[] A) {
    List<Integer> tails = new ArrayList<>();
    for (int x : A) {
        int i = Collections.binarySearch(tails, x);
        if (i < 0) i = -(i + 1);
        if (i == tails.size())
            tails.add(x);
        else
            tails.set(i, x);
    }
    return tails.size();
}

public static List<Integer> lisSubsequence(int[] A) {
    int n = A.length;
    int[] dp = new int[n], prev = new int[n];
    Arrays.fill(dp, 1);
    Arrays.fill(prev, -1);
    for (int i = 1; i < n; i++) {
        for (int j = 0; j < i; j++) {
            if (A[j] < A[i] && dp[j] + 1 > dp[i]) {
                dp[i] = dp[j] + 1;
                prev[i] = j;
            }
        }
    }
    int pos = 0;
    for (int i = 1; i < n; i++)
        if (dp[i] > dp[pos]) pos = i;
    List<Integer> result = new ArrayList<>();
    while (pos != -1) {
        result.add(A[pos]);
        pos = prev[pos];
    }
    Collections.reverse(result);
    return result;
}
```

#### Complexity Analysis — With WHY

- **O(n²) time:** For each of n elements, scan up to n previous elements — total O(n²) comparisons. A[0..i-1] must each be checked because LIS ending at i can extend any previous subsequence.
- **O(n log n) time:** Binary search on the tails array (size ≤ n) for each of n elements gives O(log n) per element. The tails array stays sorted by construction — each replacement preserves sorted order, enabling binary search.
- **Why binary search works:** `tails` is monotonically increasing (strictly, for strictly increasing subsequences). Every replacement either extends the array (keeping it sorted) or replaces a value that keeps it sorted. This is provable by induction.
- **Space:** O(n) for both versions — dp array or tails array.

#### Space Optimization

The O(n²) DP naturally uses O(n) space (single dp array). No further optimization needed.

For the O(n log n) approach, O(n) space is already optimal.

#### Advantages & Disadvantages

| Approach | Advantages | Disadvantages |
|----------|------------|---------------|
| **O(n²) DP** | Simple, intuitive, easy to reconstruct subsequence | Slow for n > 10⁴ |
| **O(n log n)** | Fast, handles n up to 10⁶ | Harder to understand; `tails` is not the actual subsequence |
| Both | Handle all input types | Only find **strictly** increasing; non-decreasing requires `upper_bound` |

#### Edge Cases

| Input | LIS Length | Explanation |
|-------|-----------|-------------|
| [] | 0 | Empty array |
| [5] | 1 | Single element |
| [5, 5, 5] | 1 | All equal (strictly increasing not satisfied) |
| [5, 4, 3, 2, 1] | 1 | Strictly decreasing |
| [1, 2, 3, 4, 5] | 5 | Already sorted |
| [3, 1, 2] | 2 | [1, 2] |
| [1, 3, 6, 7, 9, 4, 10, 5, 6] | 6 | [1, 3, 4, 5, 6] or [1, 3, 6, 7, 9, 10] |

---

### 9.3 Edit Distance (Levenshtein Distance)

**Problem:** Given two strings \( X \) and \( Y \), find the minimum number of operations (insert, delete, replace) to transform \( X \) into \( Y \).

**Real-World Analogy:** Spell checkers suggest "accommodate" when you type "acommodate" — the edit distance is 1 (insert one 'c'). Autocorrect on smartphones uses edit distance to rank candidate corrections. In computational biology, the Needleman-Wunsch algorithm generalizes edit distance to align DNA sequences with affine gap penalties, enabling scientists to quantify evolutionary divergence between species.

#### Algorithm Steps

1. Create a 2D DP table `dp` of size `(m+1) × (n+1)`.
2. **Initialize base cases:** `dp[i][0] = i` (cost to delete i characters from X), `dp[0][j] = j` (cost to insert j characters into X).
3. Loop `i` from 1 to `m` and `j` from 1 to `n`:
   - If `X[i-1] == Y[j-1]`, `dp[i][j] = dp[i-1][j-1]` (no operation needed).
   - Else, `dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])`:
     - `dp[i-1][j] + 1` → delete X[i-1] (or equivalently insert into Y)
     - `dp[i][j-1] + 1` → insert Y[j-1] into X
     - `dp[i-1][j-1] + 1` → replace X[i-1] with Y[j-1]
4. Return `dp[m][n]`.

#### Pseudocode

```
EDIT_DISTANCE(X, Y, m, n):
    dp = 2D array of size (m+1) x (n+1)
    for i = 0 to m: dp[i][0] = i
    for j = 0 to n: dp[0][j] = j
    for i = 1 to m:
        for j = 1 to n:
            if X[i-1] == Y[j-1]:
                dp[i][j] = dp[i-1][j-1]
            else:
                dp[i][j] = 1 + min(dp[i-1][j],     // delete
                                    dp[i][j-1],     // insert
                                    dp[i-1][j-1])   // replace
    return dp[m][n]
```

#### Step-by-Step Dry Run

X = "CAT" (m = 3), Y = "CAR" (n = 3)

**Initial DP table:**

| | Ø | C | A | R |
|---|---|---|---|---|
| **Ø** | 0 | 1 | 2 | 3 |
| **C** | 1 | | | |
| **A** | 2 | | | |
| **T** | 3 | | | |

**Filling the table:**

- `i=1 (C), j=1 (C)`: C=C → dp[1][1] = dp[0][0] = 0
- `i=1 (C), j=2 (A)`: C≠A → min(dp[0][2]=2, dp[1][1]=0, dp[0][1]=1) + 1 = 1 (replace C→CA? Actually delete C and insert A: dp[1][2] = 1)
- `i=1 (C), j=3 (R)`: C≠R → min(dp[0][3]=3, dp[1][2]=1, dp[0][2]=2) + 1 = 2
- `i=2 (A), j=1 (C)`: A≠C → min(dp[1][1]=0, dp[2][0]=2, dp[1][0]=1) + 1 = 1
- `i=2 (A), j=2 (A)`: A=A → dp[2][2] = dp[1][1] = 0
- `i=2 (A), j=3 (R)`: A≠R → min(dp[1][3]=2, dp[2][2]=0, dp[1][2]=1) + 1 = 1
- `i=3 (T), j=1 (C)`: T≠C → min(dp[2][1]=1, dp[3][0]=3, dp[2][0]=2) + 1 = 2
- `i=3 (T), j=2 (A)`: T≠A → min(dp[2][2]=0, dp[3][1]=2, dp[2][1]=1) + 1 = 1
- `i=3 (T), j=3 (R)`: T≠R → min(dp[2][3]=1, dp[3][2]=1, dp[2][2]=0) + 1 = 1

**Final DP table:**

| | Ø | C | A | R |
|---|---|---|---|---|
| **Ø** | 0 | 1 | 2 | 3 |
| **C** | 1 | 0 | 1 | 2 |
| **A** | 2 | 1 | 0 | 1 |
| **T** | 3 | 2 | 1 | 1 |

Edit Distance = dp[3][3] = 1 (replace 'T' with 'R': CAT → CAR).

**Another example:** X = "SUNDAY", Y = "SATURDAY"

**Final DP table:**

| | Ø | S | A | T | U | R | D | A | Y |
|---|---|---|---|---|---|---|---|---|---|
| **Ø** | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
| **S** | 1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| **U** | 2 | 1 | 1 | 2 | 2 | 3 | 4 | 5 | 6 |
| **N** | 3 | 2 | 2 | 2 | 3 | 3 | 4 | 5 | 6 |
| **D** | 4 | 3 | 3 | 3 | 3 | 4 | 3 | 4 | 5 |
| **A** | 5 | 4 | 3 | 4 | 4 | 4 | 4 | 3 | 4 |
| **Y** | 6 | 5 | 4 | 4 | 5 | 5 | 5 | 4 | 3 |

Edit Distance = 3 (insert 'A' after S, insert 'T' after A, replace 'N' with 'R'... or equivalent sequence).

#### C++ Implementation

```cpp
#include <string>
#include <vector>
#include <algorithm>

int editDistance(const std::string& X, const std::string& Y) {
    int m = static_cast<int>(X.size());
    int n = static_cast<int>(Y.size());
    std::vector<std::vector<int>> dp(m + 1, std::vector<int>(n + 1));
    for (int i = 0; i <= m; ++i) dp[i][0] = i;
    for (int j = 0; j <= n; ++j) dp[0][j] = j;
    for (int i = 1; i <= m; ++i) {
        for (int j = 1; j <= n; ++j) {
            if (X[i-1] == Y[j-1])
                dp[i][j] = dp[i-1][j-1];
            else
                dp[i][j] = 1 + std::min({dp[i-1][j], dp[i][j-1], dp[i-1][j-1]});
        }
    }
    return dp[m][n];
}
```

#### Python Implementation

```python
def edit_distance(X: str, Y: str) -> int:
    m, n = len(X), len(Y)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(m + 1): dp[i][0] = i
    for j in range(n + 1): dp[0][j] = j
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if X[i - 1] == Y[j - 1]:
                dp[i][j] = dp[i - 1][j - 1]
            else:
                dp[i][j] = 1 + min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])
    return dp[m][n]
```

#### Java Implementation

```java
public static int editDistance(String X, String Y) {
    int m = X.length(), n = Y.length();
    int[][] dp = new int[m + 1][n + 1];
    for (int i = 0; i <= m; i++) dp[i][0] = i;
    for (int j = 0; j <= n; j++) dp[0][j] = j;
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (X.charAt(i - 1) == Y.charAt(j - 1))
                dp[i][j] = dp[i - 1][j - 1];
            else
                dp[i][j] = 1 + Math.min(dp[i - 1][j],
                            Math.min(dp[i][j - 1], dp[i - 1][j - 1]));
        }
    }
    return dp[m][n];
}
```

#### Complexity Analysis — With WHY

- **Time: O(mn)** — Each cell in the (m+1)×(n+1) table requires O(1) work (a comparison and up to three lookups). This is optimal because any algorithm must at least consider each pair of prefix positions.
- **Space: O(mn)** for the full table. **O(n)** with 2-row optimization.
- **Why three operations?** Delete, insert, and replace are the minimal set that can transform any string into any other. Remove any operation and some strings become unreachable (e.g., without replace, "CAT"→"CAR" requires 2 operations instead of 1).

#### Space Optimization

Same 2-row technique as LCS:

```
EDIT_DISTANCE_OPT(X, Y, m, n):
    prev = array of size n+1, prev[j] = j
    for i = 1 to m:
        curr = array of size n+1
        curr[0] = i
        for j = 1 to n:
            if X[i-1] == Y[j-1]:
                curr[j] = prev[j-1]
            else:
                curr[j] = 1 + min(prev[j], curr[j-1], prev[j-1])
        prev = curr
    return prev[n]
```

**Time: O(mn), Space: O(n).** Only two rows are kept — the previous row and the current row being filled.

#### Advantages & Disadvantages

| Advantages | Disadvantages |
|------------|---------------|
| Simple, symmetric recurrence | O(mn) can be slow for long strings |
| Easy to extend (different costs per operation) | Doesn't capture block moves (transpositions need Damerau-Levenshtein) |
| Handles arbitrary strings | Full reconstruction needs full table |
| Foundation for bioinformatics alignment | Space-optimized version loses traceback info |

#### Edge Cases

| Input | Distance | Explanation |
|-------|----------|-------------|
| X="", Y="ABC" | 3 | Insert all characters |
| X="", Y="" | 0 | Both empty |
| X="A", Y="A" | 0 | Already equal |
| X="A", Y="B" | 1 | Replace |
| X="ABC", Y="ABC" | 0 | Identical |
| X="ABC", Y="CBA" | 2 | Reverse: replace B→B? Actually A↔C → delete A, insert C, delete C, insert A... min=2 (replace A↔C, keep B) |
| X="KITTEN", Y="SITTING" | 3 | Replace K→S, replace E→I, insert G |

---

### 9.4 Matrix Chain Multiplication

**Problem:** Given matrices \( A_1, A_2, \ldots, A_n \) with dimensions \( p_0 \times p_1, p_1 \times p_2, \ldots, p_{n-1} \times p_n \), find the parenthesization that minimizes scalar multiplications.

**Real-World Analogy:** When a deep learning framework multiplies a sequence of weight matrices and input tensors, the order of multiplication dramatically affects computation speed. For example, multiplying a 10×100 matrix by a 100×5 matrix by a 5×50 matrix costs 7500 multiplications if grouped as (10×100 × 100×5) × 5×50, but 75,000 if grouped as 10×100 × (100×5 × 5×50) — a 10× difference. Compilers use this optimization for tensor operations.

#### Algorithm Steps

1. Let `p[0..n]` be the dimensions where matrix `A_i` has dimensions `p[i-1] × p[i]`.
2. Create a 2D DP table `dp` of size `n × n` initialized to 0, and a `split` table for reconstruction.
3. Loop over chain length `L` from 2 to n (subproblem size):
   - For each `i` from 1 to `n - L + 1`:
     - Set `j = i + L - 1` (end of this chain).
     - Set `dp[i][j] = ∞`.
     - For each split point `k` from `i` to `j-1`:
       - Compute `cost = dp[i][k] + dp[k+1][j] + p[i-1] * p[k] * p[j]`.
       - If `cost < dp[i][j]`, update `dp[i][j] = cost` and record `split[i][j] = k`.
4. Return `dp[1][n-1]`.

#### Pseudocode

```
MATRIX_CHAIN(p, n):
    dp = 2D array of size n x n, all 0
    split = 2D array of size n x n, all 0
    for L = 2 to n:
        for i = 1 to n - L + 1:
            j = i + L - 1
            dp[i][j] = INF
            for k = i to j - 1:
                cost = dp[i][k] + dp[k+1][j] + p[i-1] * p[k] * p[j]
                if cost < dp[i][j]:
                    dp[i][j] = cost
                    split[i][j] = k
    return dp[1][n-1]

PRINT_PARENS(split, i, j):
    if i == j:
        print "A" + i
    else:
        print "("
        PRINT_PARENS(split, i, split[i][j])
        PRINT_PARENS(split, split[i][j] + 1, j)
        print ")"
```

#### Step-by-Step Dry Run

Dimensions `p = [5, 4, 6, 2, 7]` → matrices: A₁(5×4), A₂(4×6), A₃(6×2), A₄(2×7), n=4.

**Chain length L=2:**

| (i,j) | k=1 | k=2 | k=3 | dp[i][j] |
|-------|-----|-----|-----|----------|
| (1,2) | 0+0+5·4·6=120 | — | — | 120 |
| (2,3) | — | 0+0+4·6·2=48 | — | 48 |
| (3,4) | — | — | 0+0+6·2·7=84 | 84 |

**Chain length L=3:**

- (1,3): i=1, j=3
  - k=1: dp[1][1]+dp[2][3] + p[0]·p[1]·p[3] = 0 + 48 + 5·4·2 = 40 + 48 ... wait: 0 + 48 + 5·4·2 = 48 + 40 = 88
  - k=2: dp[1][2]+dp[3][3] + p[0]·p[2]·p[3] = 120 + 0 + 5·6·2 = 120 + 60 = 180
  - min = 88, split = 1

- (2,4): i=2, j=4
  - k=2: dp[2][2]+dp[3][4] + p[1]·p[2]·p[4] = 0 + 84 + 4·6·7 = 84 + 168 = 252
  - k=3: dp[2][3]+dp[4][4] + p[1]·p[3]·p[4] = 48 + 0 + 4·2·7 = 48 + 56 = 104
  - min = 104, split = 3

**Chain length L=4:**

- (1,4): i=1, j=4
  - k=1: dp[1][1]+dp[2][4] + p[0]·p[1]·p[4] = 0 + 104 + 5·4·7 = 104 + 140 = 244
  - k=2: dp[1][2]+dp[3][4] + p[0]·p[2]·p[4] = 120 + 84 + 5·6·7 = 204 + 210 = 414
  - k=3: dp[1][3]+dp[4][4] + p[0]·p[3]·p[4] = 88 + 0 + 5·2·7 = 88 + 70 = 158
  - min = 158, split = 3

**Final DP table:**

| | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| **1** | 0 | 120 | 88 | 158 |
| **2** | — | 0 | 48 | 104 |
| **3** | — | — | 0 | 84 |
| **4** | — | — | — | 0 |

Minimum cost = 158 multiplications. Parenthesization: `(A₁ × (A₂ × A₃)) × A₄` at split=3 for (1,4), and within (2,4) at split=3 → `(A₁ × (A₂ × A₃)) × A₄`.

#### C++ Implementation

```cpp
#include <vector>
#include <climits>
#include <string>

std::pair<int, std::string> matrixChainOrder(const std::vector<int>& p) {
    int n = static_cast<int>(p.size()) - 1;
    std::vector<std::vector<int>> dp(n + 1, std::vector<int>(n + 1, 0));
    std::vector<std::vector<int>> split(n + 1, std::vector<int>(n + 1, 0));
    for (int L = 2; L <= n; ++L) {
        for (int i = 1; i <= n - L + 1; ++i) {
            int j = i + L - 1;
            dp[i][j] = INT_MAX;
            for (int k = i; k < j; ++k) {
                int cost = dp[i][k] + dp[k+1][j] + p[i-1] * p[k] * p[j];
                if (cost < dp[i][j]) {
                    dp[i][j] = cost;
                    split[i][j] = k;
                }
            }
        }
    }
    return {dp[1][n], ""}; // reconstruction separate
}
```

#### Python Implementation

```python
def matrix_chain_order(p):
    n = len(p) - 1
    dp = [[0] * (n + 1) for _ in range(n + 1)]
    split = [[0] * (n + 1) for _ in range(n + 1)]
    for L in range(2, n + 1):
        for i in range(1, n - L + 2):
            j = i + L - 1
            dp[i][j] = float('inf')
            for k in range(i, j):
                cost = dp[i][k] + dp[k + 1][j] + p[i - 1] * p[k] * p[j]
                if cost < dp[i][j]:
                    dp[i][j] = cost
                    split[i][j] = k
    return dp[1][n], split

def print_parens(split, i, j):
    if i == j:
        return f"A{i}"
    k = split[i][j]
    return f"({print_parens(split, i, k)} × {print_parens(split, k + 1, j)})"
```

#### Java Implementation

```java
public static int matrixChainOrder(int[] p) {
    int n = p.length - 1;
    int[][] dp = new int[n + 1][n + 1];
    for (int L = 2; L <= n; L++) {
        for (int i = 1; i <= n - L + 1; i++) {
            int j = i + L - 1;
            dp[i][j] = Integer.MAX_VALUE;
            for (int k = i; k < j; k++) {
                int cost = dp[i][k] + dp[k + 1][j] + p[i - 1] * p[k] * p[j];
                if (cost < dp[i][j])
                    dp[i][j] = cost;
            }
        }
    }
    return dp[1][n];
}
```

#### Complexity Analysis — With WHY

- **Time: O(n³)** — Three nested loops: chain length L (n iterations), start index i (n iterations per L), split point k (up to n iterations). Total ≈ Σ_{L=2}^{n} (n-L+1)·(L-1) = O(n³).
- **Space: O(n²)** — The dp table stores n×n entries. The split table also O(n²) for reconstruction.
- **Why O(n³)?** Each subproblem (i,j) tries all possible split points k between i and j-1. There are O(n²) subproblems × O(n) splits each = O(n³). This is optimal for general matrix chains.
- **Chu-Liu-Edmonds lower bound:** No algorithm can do better than O(n²) because the output itself (split choices) is O(n²) entries.

#### Space Optimization

The dp table can't be compressed to O(n) easily because interval DP needs all subproblem lengths. However, we only need one split table for reconstruction — the dp table can be stored as-is.

#### Advantages & Disadvantages

| Advantages | Disadvantages |
|------------|---------------|
| Optimal parenthesization (not a heuristic) | O(n³) time is slow for large n |
| Reconstruction is straightforward | Only works for standard multiplication (not Strassen's O(n^2.81)) |
| Canonical interval DP problem | No practical early termination |
| Extends to tensor optimization | Requires all dimension sizes as input |

#### Edge Cases

| Input | Result | Explanation |
|-------|--------|-------------|
| p=[5, 4] | 0 | Single matrix, no multiplication needed |
| p=[5, 4, 6] | 120 | Only two matrices, one option |
| p=[5, 4, 6, 2] | 88 | Three matrices, better to group (A₁(A₂A₃)) |
| p=[10, 20, 30, 40, 30] | 30000 | Standard textbook example |
| p=[1, 1, 1, 1] | 3 | Four identity-like matrices |

---

### 9.5 Palindrome Partitioning

**Problem:** Given a string \( S \), partition it into substrings such that every substring is a palindrome. Find the minimum number of cuts needed.

**Real-World Analogy:** NLP pipelines split text into meaningful chunks. Palindrome partitioning models problems where you must segment a sequence into valid substrings — like splitting a compound word ("longest") into dictionary words ("long", "est") or aligning phonemes in speech recognition.

#### Algorithm Steps

**Step 1 — Precompute palindrome table:**

1. Create a boolean 2D table `isPal` of size `n × n`.
2. For `i` from 0 to n-1, set `isPal[i][i] = true` (single characters are palindromes).
3. For `L` from 2 to n (substring length):
   - For `i` from 0 to `n-L`:
     - `j = i + L - 1`.
     - If `S[i] == S[j]` and (`j - i < 2` or `isPal[i+1][j-1]`), then `isPal[i][j] = true`.

**Step 2 — Minimum cuts DP:**

4. Create 1D array `dp` of size n, initialized to `INF`.
5. For `i` from 0 to n-1:
   - If `isPal[0][i]` is true, set `dp[i] = 0` (no cut needed for a palindrome prefix).
   - Else, for `j` from 0 to i-1:
     - If `isPal[j+1][i]` is true, update `dp[i] = min(dp[i], dp[j] + 1)`.
6. Return `dp[n-1]`.

#### Pseudocode

```
PALINDROME_PARTITION(S, n):
    isPal = 2D boolean array of size n x n
    for i = 0 to n-1: isPal[i][i] = true
    for L = 2 to n:
        for i = 0 to n - L:
            j = i + L - 1
            if S[i] == S[j] and (j - i < 2 or isPal[i+1][j-1]):
                isPal[i][j] = true

    dp = array of size n, all INF
    for i = 0 to n-1:
        if isPal[0][i]:
            dp[i] = 0
        else:
            for j = 0 to i-1:
                if isPal[j+1][i]:
                    dp[i] = min(dp[i], dp[j] + 1)
    return dp[n-1]
```

#### Step-by-Step Dry Run

S = "ababbbabbababa" (n=14) — simplified as S = "aab" (n=3) for illustration.

**Step 1 — Palindrome table for S = "aab":**

| i\j | 0 (a) | 1 (a) | 2 (b) |
|-----|-------|-------|-------|
| 0 (a) | true | true | false |
| 1 (a) | — | true | false |
| 2 (b) | — | — | true |

Computations:
- isPal[0][0]=true, isPal[1][1]=true, isPal[2][2]=true
- L=2: i=0,j=1: S[0]=a=S[1]=a, j-i=1&lt;2 → isPal[0][1]=true
- L=2: i=1,j=2: S[1]=a≠S[2]=b → isPal[1][2]=false
- L=3: i=0,j=2: S[0]=a≠S[2]=b → isPal[0][2]=false

**Step 2 — Minimum cuts for S = "aab":**
- i=0: isPal[0][0]=true → dp[0]=0
- i=1: isPal[0][1]=true → dp[1]=0
- i=2: isPal[0][2]=false → check:
  - j=0: isPal[1][2]=false → skip
  - j=1: isPal[2][2]=true → dp[2]=min(INF, dp[1]+1) = min(INF, 0+1) = 1
  
Minimum cuts = 1. Partition: "aa" | "b".

**Full example:** S = "ababbbabbababa"

Palindrome table preprocessing identifies all palindromic substrings:
- Single characters: all 14
- Length 2: "bb" at positions (3,4), (5,6), (8,9), etc.
- Length 3: "aba" at (0,2), (2,4), etc.
- Length 5: "ababa" at (0,4), etc.

DP then finds the optimal cuts using these precomputed palindromes.

#### C++ Implementation

```cpp
#include <string>
#include <vector>
#include <algorithm>
#include <climits>

int minPalindromePartition(const std::string& S) {
    int n = static_cast<int>(S.size());
    std::vector<std::vector<bool>> isPal(n, std::vector<bool>(n, false));
    for (int i = 0; i < n; ++i) isPal[i][i] = true;
    for (int L = 2; L <= n; ++L) {
        for (int i = 0; i <= n - L; ++i) {
            int j = i + L - 1;
            if (S[i] == S[j] && (j - i < 2 || isPal[i+1][j-1]))
                isPal[i][j] = true;
        }
    }
    std::vector<int> dp(n, INT_MAX);
    for (int i = 0; i < n; ++i) {
        if (isPal[0][i]) {
            dp[i] = 0;
        } else {
            for (int j = 0; j < i; ++j) {
                if (isPal[j+1][i])
                    dp[i] = std::min(dp[i], dp[j] + 1);
            }
        }
    }
    return dp[n-1];
}
```

#### Python Implementation

```python
def min_palindrome_partition(S: str) -> int:
    n = len(S)
    isPal = [[False] * n for _ in range(n)]
    for i in range(n):
        isPal[i][i] = True
    for L in range(2, n + 1):
        for i in range(n - L + 1):
            j = i + L - 1
            if S[i] == S[j] and (j - i < 2 or isPal[i + 1][j - 1]):
                isPal[i][j] = True
    dp = [float('inf')] * n
    for i in range(n):
        if isPal[0][i]:
            dp[i] = 0
        else:
            for j in range(i):
                if isPal[j + 1][i]:
                    dp[i] = min(dp[i], dp[j] + 1)
    return dp[-1]
```

#### Java Implementation

```java
public static int minPalindromePartition(String S) {
    int n = S.length();
    boolean[][] isPal = new boolean[n][n];
    for (int i = 0; i < n; i++) isPal[i][i] = true;
    for (int L = 2; L <= n; L++) {
        for (int i = 0; i <= n - L; i++) {
            int j = i + L - 1;
            if (S.charAt(i) == S.charAt(j) && (j - i < 2 || isPal[i+1][j-1]))
                isPal[i][j] = true;
        }
    }
    int[] dp = new int[n];
    for (int i = 0; i < n; i++) {
        if (isPal[0][i]) {
            dp[i] = 0;
        } else {
            dp[i] = Integer.MAX_VALUE;
            for (int j = 0; j < i; j++) {
                if (isPal[j+1][i])
                    dp[i] = Math.min(dp[i], dp[j] + 1);
            }
        }
    }
    return dp[n-1];
}
```

#### Complexity Analysis — With WHY

- **Time: O(n²)** — Palindrome precomputation is O(n²) (nested loops over substring lengths and start positions). The cuts DP is also O(n²) (each i checks all j &lt; i). Combined: O(n²).
- **Space: O(n²)** — The palindrome table isO(n²) boolean entries. Without precomputation, checking isPal inside the cut loop would be O(n³) — the precomputation is essential.
- **Why O(n²) and not O(n³)?** The palindrome expansion uses the recurrence `isPal[i][j]` = `(S[i] == S[j]) && isPal[i+1][j-1]` — this is O(1) per substring, avoiding the naive O(n³) expand-from-center approach.

#### Space Optimization

The palindrome table can be computed on-the-fly using two-pointer expansion from each center (O(n²) time, O(1) space per check), but this makes the cuts DP O(n³) again. An alternative: use expand-around-center to fill isPal in O(n²) with O(n²) space is standard.

A more memory-efficient approach:

```
PALINDROME_MIN_CUTS(S, n):
    dp = array of size n, all INF
    for i = 0 to n-1:
        // odd-length palindrome centered at i
        for l = i, r = i; l >= 0 && r < n && S[l] == S[r]; l--, r++:
            dp[r] = min(dp[r], (l == 0 ? 0 : dp[l-1] + 1))
        // even-length palindrome centered between i-1 and i
        for l = i-1, r = i; l >= 0 && r < n && S[l] == S[r]; l--, r++:
            dp[r] = min(dp[r], (l == 0 ? 0 : dp[l-1] + 1))
    return dp[n-1]
```

**Time: O(n²), Space: O(n)** — Eliminates the isPal table entirely.

#### Advantages & Disadvantages

| Advantages | Disadvantages |
|------------|---------------|
| Clean separation of palindrome detection and cuts | O(n²) space for the standard approach |
| O(n²) time is optimal | Doesn't enumerate all partitions (only count) |
| Easy to reconstruct partitions | No early termination for tight bounds |
| 1D cuts DP is reusable for other segmentation problems | Works best for well-structured strings |

#### Edge Cases

| Input | Min Cuts | Partition | Explanation |
|-------|----------|-----------|-------------|
| "" | 0 | "" | Empty string |
| "a" | 0 | "a" | Single character |
| "aa" | 0 | "aa" | Already a palindrome |
| "ab" | 1 | "a"\|"b" | Two single-character palindromes |
| "aba" | 0 | "aba" | Palindrome |
| "abac" | 1 | "aba"\|"c" or "a"\|"bac"? Actually "aba"\|"c" = 1 cut |
| "abcde" | 4 | "a"\|"b"\|"c"\|"d"\|"e" | No palindromic substrings longer than 1 |

---

## Sequence DP Patterns

Sequence DP problems follow recurring structural patterns. Recognizing the pattern helps you derive the recurrence quickly.

### Pattern 1: Two-Sequence Comparison

**When to use:** Two sequences (strings, arrays) need to be compared or aligned.

**Template:**
- State: `dp[i][j]` = answer for prefixes of length i and j
- Transition: Compare `A[i-1]` and `B[j-1]` → match or mismatch
- Base: `dp[0][j]` and `dp[i][0]` = function of i or j

**Problems:** LCS, Edit Distance, Shortest Common Supersequence, Wildcard Matching, Regular Expression Matching

### Pattern 2: Single-Sequence Partitioning

**When to use:** One sequence needs to be partitioned into valid segments.

**Template:**
- State: `dp[i]` = answer for prefix of length i
- Transition: Check all cut points `j < i` where `S[j+1..i]` forms a valid segment
- Base: `dp[0]` = 0 (empty prefix)

**Problems:** Palindrome Partitioning, Word Break, Decode Ways, Integer Break

### Pattern 3: Interval DP (Chain)

**When to use:** Combine adjacent elements in a sequence where order of combination affects cost.

**Template:**
- State: `dp[i][j]` = answer for subarray `A[i..j]`
- Transition: Try all split points `k` between `i` and `j`
- Loop order: By length L from 2 to n
- Base: `dp[i][i]` = 0 or 1 (single element)
- Merge cost: often involves `A[i-1] * A[k] * A[j]` or similar dimension-based formula

**Problems:** Matrix Chain Multiplication, Burst Balloons, Stone Game, Optimal BST

### Pattern 4: Subsequence within a Single Sequence

**When to use:** Extract a subsequence (not necessarily contiguous) satisfying a property.

**Template:**
- State: `dp[i]` = best value for subsequence ending at position i
- Transition: Scan all `j < i`, check if `A[j]` can precede `A[i]`
- Complexity: O(n²) base, can sometimes optimize to O(n log n) with binary search

**Problems:** LIS, Longest Bitonic Subsequence, Maximum Sum Increasing Subsequence

| Pattern | State | Example | Complexity |
|---------|-------|---------|------------|
| Two-Sequence | dp[i][j] | LCS, Edit Distance | O(mn) |
| Single-Sequence Partition | dp[i] | Palindrome Partition, Word Break | O(n²) |
| Interval DP | dp[i][j] by length | Matrix Chain, Burst Balloons | O(n³) |
| Subsequence | dp[i] | LIS O(n²) / O(n log n) | O(n²)/O(n log n) |

---

## Interview Corner

### LIS in O(n log n) — The Patience Sorting Trick

This is the single most important optimization to know for sequence DP interviews.

```cpp
#include <algorithm>
#include <vector>

int lengthOfLIS(std::vector<int>& nums) {
    std::vector<int> tails;
    for (int x : nums) {
        auto it = std::lower_bound(tails.begin(), tails.end(), x);
        if (it == tails.end())
            tails.push_back(x);
        else
            *it = x;
    }
    return tails.size();
}
```

**Why it works:** The tails array maintains the invariant that `tails[k]` is the smallest possible last element of an increasing subsequence of length k+1. Since tails is always strictly increasing (proved by induction), binary search works in O(log n).

**Variation — Non-decreasing:** Use `upper_bound` (C++) or `bisect_right` (Python) instead of `lower_bound` / `bisect_left`.

**Variation — Maximum Sum Increasing Subsequence:** Use O(n²) DP with `dp[i] = A[i] + max(dp[j])` for `A[j] < A[i]`.

### Shortest Common Supersequence (SCS)

**Problem:** Given strings X and Y, find the shortest string Z such that X and Y are subsequences of Z.

**Relation to LCS:** `len(SCS) = len(X) + len(Y) - len(LCS(X, Y))`. The supersequence merges both strings, keeping the LCS characters once.

**Example:** X = "AGGTAB", Y = "GXTXAYB". LCS = "GTAB" (length 4). SCS length = 6 + 7 - 4 = 9. SCS = "AGXGTXAYB".

**Reconstruction:**
- Walk through both strings and the LCS simultaneously.
- When characters match, take one copy.
- When they differ, include the character from whichever string we're not aligning.

```python
def shortest_common_supersequence(X, Y):
    m, n = len(X), len(Y)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if X[i - 1] == Y[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
    # LCS length = dp[m][n]
    # Build SCS
    i, j = m, n
    result = []
    while i > 0 and j > 0:
        if X[i - 1] == Y[j - 1]:
            result.append(X[i - 1])
            i -= 1; j -= 1
        elif dp[i - 1][j] > dp[i][j - 1]:
            result.append(X[i - 1])
            i -= 1
        else:
            result.append(Y[j - 1])
            j -= 1
    while i > 0: result.append(X[i - 1]); i -= 1
    while j > 0: result.append(Y[j - 1]); j -= 1
    return ''.join(reversed(result))
```

### Longest Palindromic Subsequence (LPS)

**Problem:** Find the longest subsequence (not necessarily contiguous) of a string that is a palindrome.

**Key insight:** LPS of S = LCS of S and reverse(S). This reduces LPS to LCS.

**Example:** S = "BBABCBCAB" → reverse = "BACBCBABB" → LCS length = 7 ("BABCBCB" or "BBABCBB").

**Direct DP approach** (without reverse):
- State: `dp[i][j]` = LPS length in S[i..j]
- If `S[i] == S[j]`, then `dp[i][j] = dp[i+1][j-1] + 2` (match outer characters)
- Else, `dp[i][j] = max(dp[i+1][j], dp[i][j-1])`
- Base: `dp[i][i]` = 1

```python
def longest_palindromic_subsequence(S):
    n = len(S)
    dp = [[0] * n for _ in range(n)]
    for i in range(n - 1, -1, -1):
        dp[i][i] = 1
        for j in range(i + 1, n):
            if S[i] == S[j]:
                dp[i][j] = dp[i + 1][j - 1] + 2
            else:
                dp[i][j] = max(dp[i + 1][j], dp[i][j - 1])
    return dp[0][n - 1]
```

**Space complexity:** O(n²) time, O(n²) space. Can be optimized to O(n) space with 2-row technique.

### Common Interview Question Table

| Problem | Pattern | Technique | Key Insight |
|---------|---------|-----------|-------------|
| LIS length | Subsequence DP | Patience sort | tails array, binary search, O(n log n) |
| Max sum increasing subsequence | Subsequence DP | O(n²) DP | dp[i] = A[i] + max(dp[j]) for A[j] &lt; A[i] |
| Edit distance | Two-sequence | Standard DP | min(insert, delete, replace) |
| Shortest common supersequence | Two-sequence | LCS derivative | len = m + n - LCS |
| Longest palindromic subsequence | Interval DP | LCS(S, reverse(S)) | Or interval DP expanding from center |
| Wildcard matching | Two-sequence | DP with states | Handle *, ? special cases |
| Word break | Partition DP | DP with hash set | dp[i] = OR over dp[j] && wordDict.contains(S[j:i]) |
| Longest bitonic subsequence | Subsequence | Two-pass LIS | LIS from left + LIS from right |

---

## Applications in Real Systems

### Git Diff (Edit Distance Variant)

Git's `diff` algorithm (Myers algorithm) computes the shortest edit script between two files. It's a generalization of LCS where each line is a character.

**How it works:**
1. Read both files line by line.
2. Compute LCS of the line sequences (hashing lines for O(1) comparison).
3. Lines in the LCS are unchanged; everything else is a deletion (from file A) or insertion (into file B).

```python
# Simplified diff using LCS
def simple_diff(a_lines, b_lines):
    a_hashes = [hash(line) for line in a_lines]
    b_hashes = [hash(line) for line in b_lines]
    lcs_seq = lcs(a_hashes, b_hashes)  # returns hash sequence
    # Walk and diff
    result = []
    i = j = 0
    for h in lcs_seq:
        while a_hashes[i] != h:
            result.append(f"- {a_lines[i]}"); i += 1
        while b_hashes[j] != h:
            result.append(f"+ {b_lines[j]}"); j += 1
        result.append(f"  {a_lines[i]}"); i += 1; j += 1
    while i < len(a_lines):
        result.append(f"- {a_lines[i]}"); i += 1
    while j < len(b_lines):
        result.append(f"+ {b_lines[j]}"); j += 1
    return '\n'.join(result)
```

Git also offers patience diff, histogram diff, and minimal diff — all built on LCS/edit distance variants. GitHub uses these to display familiar green/red line highlights.

### Bioinformatics (LCS for DNA Alignment)

DNA sequences are strings over {A, C, G, T}. The **Needleman-Wunsch algorithm** (1970) generalizes LCS for global sequence alignment.

**Scoring model:**
- Match: +1 (or positive score from substitution matrix like BLOSUM62 for proteins)
- Mismatch: -1 (or negative score)
- Gap (insert/delete): -2 (gap penalty)

**Recurrence (generalized):**

```
dp[i][j] = max(
    dp[i-1][j-1] + score(X[i], Y[j]),  // match or mismatch
    dp[i-1][j] + gap_penalty,           // gap in Y
    dp[i][j-1] + gap_penalty            // gap in X
)
```

**Real use:** The Human Genome Project used sequence alignment to compare genomes across species. When scientists say "humans share 98% of DNA with chimpanzees", that percentage comes from a global sequence alignment algorithm.

The **Smith-Waterman algorithm** (local alignment) modifies this to find the best-aligning substring pair (score never goes below 0) — used to find conserved functional regions.

### Plagiarism Detection

MOSS (Measure Of Software Similarity) and JPlag detect code plagiarism using sequence comparison.

**How it works:**
1. Tokenize source code into a sequence of "tokens" (keywords, operators, identifiers mapped to normalized symbols).
2. Run LCS or edit distance on token sequences between all pairs of submissions.
3. Reports suspicious matches ranked by similarity score.

**Why LCS and not string matching:** Renaming variables (a→b, x→y) changes the literal text but not the tokenized pattern `IDENT ASSIGN IDENT PLUS IDENT SEMI`. LCS on the tokenized sequence catches this.

**Adaptation:** Plagiarism detectors often use **running-Karp-Rabin matching** and **winnowing** for efficiency (fingerprinting subsets of matched fingerprints), but the foundation remains sequence alignment.

### Other Real-World Systems

| System | Algorithm Used | Purpose |
|--------|---------------|---------|
| Google Search Suggestions | Edit Distance | Correct typos in queries |
| Unix `diff` | Myers (LCS) | Line-by-line file comparison |
| Autocorrect (iOS, Android) | Levenshtein Distance | Rank word suggestions |
| NCBI BLAST | Smith-Waterman (local alignment) | DNA/protein database search |
| Microsoft Word Grammar Checker | Edit Distance + Rules | Detect and correct errors |
| PlagScan, TurnItIn | LCS / Winnowing | Document similarity detection |
| RNA secondary structure prediction | Nussinov (interval DP) | Predict base-pair folding |

---

### Concept Comparison Table

| Problem | DP Dimension | State | Recurrence Pattern | Complexity |
|---------|-------------|-------|-------------------|------------|
| LCS | 2D (i,j) | dp[i][j] = LCS length | match → +1 diagonal, mismatch → max neighbors | O(mn) |
| LIS | 1D (i) | dp[i] = LIS ending at i | dp[i] = 1 + max dp[j] where A[j] &lt; A[i] | O(n²) / O(n log n) |
| Edit Distance | 2D (i,j) | dp[i][j] = min ops | min(insert, delete, replace) = base+1 | O(mn) |
| Matrix Chain | 2D interval | dp[i][j] = min cost at split k | min over k of dp[i][k] + dp[k+1][j] + cost | O(n³) |
| Palindrome Partition | 1D (i) | dp[i] = min cuts for prefix | dp[j] + 1 if S[j+1..i] is palindrome | O(n²) |
| SCS | 2D (i,j) | dp[i][j] = supersequence length | +1 from LCS: m + n - LCS | O(mn) |
| LPS | 2D (i,j) | dp[i][j] = LPS length in S[i..j] | match → +2, no match → max split | O(n²) |

### Quick Reference

| Category | Key Points |
|----------|------------|
| **Two-Sequence DP** | LCS, Edit Distance, SCS — 2D table, O(mn) time |
| **Single-Sequence DP** | LIS — 1D or patience sorting, O(n log n) |
| **Interval DP** | Matrix Chain, LPS — loop by length L, then start i |
| **Precomputation** | Palindrome Partition — compute isPal first, then 1D cut DP |
| **Reconstruction** | LCS and Matrix Chain need separate traceback logic |
| **Space Optimization** | LCS, Edit Distance: 2 rows → O(n). LIS: already O(n). |
| **Common Pitfall** | Forgetting base cases (empty strings, single elements) |
| **Interview Favorite** | LIS O(n log n), Edit Distance traceback |
| **Pattern Matching** | Two-Sequence vs Interval vs Partition vs Subsequence |

### Cross-Application Matrix

| Problem | DSA Interviews | Competitive Programming | System Design | Real-World |
|---------|---------------|----------------------|---------------|------------|
| LCS | Common — diff algorithms | String DP variations | Version control diffs | Git diff, bioinformatics |
| LIS | Very common — patience sort | Greedy + binary search | Priority queues | Stock trading, scheduling |
| Edit Distance | Common — spell check | Edit distance variants | Autocorrect systems | Spell checkers, DNA alignment |
| Matrix Chain | Occasionally asked | Interval DP problems | Query optimization | Compiler optimization |
| Palindrome Partition | Common — string DP | Palindrome problems | Text processing | String analysis, NLP |
| SCS | Moderate | Rare standalone | Merge/join operations | Genome assembly |
| LPS | Common | Moderate | Text analysis | Bioinformatics |

---

## Summary

- LCS uses a 2D DP on string prefixes; reconstruction requires traceback. LCS length can be computed in O(n) space.
- LIS has an elegant \( O(n \log n) \) solution using patience sorting with binary search on a tails array.
- Edit distance generalizes LCS by allowing insert, delete, and replace operations with flexible cost models.
- Matrix chain multiplication optimizes parenthesization over interval DP by iterating chain lengths.
- Palindrome partitioning precomputes palindrome substrings and applies 1D DP for minimum cuts.
- Sequence DP follows four main patterns: Two-Sequence, Single-Sequence Partition, Interval, and Subsequence.
- Interview cornerstones: LIS O(n log n), LPS from LCS(S, reverse(S)), SCS length formula.
- Real-world applications span git diff, bioinformatics sequence alignment, spell checkers, and plagiarism detection.

---

## Exercises

### Chapter Quiz

**Q1.** What data structure does O(n log n) LIS use?

- A) A hash set
- B) A sorted tails array with binary search
- C) A max-heap
- D) A queue

<details>
<summary>Answer&lt;/summary&gt;
B) The tails array stores the smallest possible last element for each subsequence length; binary search finds insertion position.
</details>

**Q2.** What is the edit distance recurrence's three operations?

- A) Insert, delete, replace
- B) Add, remove, swap
- C) Copy, paste, cut
- D) Push, pop, shift

<details>
<summary>Answer&lt;/summary&gt;
A) Insert (add character), delete (remove character), replace (substitute one character for another).
</details>

**Q3.** In matrix chain multiplication, the cost of splitting at k is:

- A) dp[i][k] + dp[k+1][j]
- B) dp[i][k] + dp[k+1][j] + p[i-1]·p[k]·p[j]
- C) dp[i][k] + p[i-1]·p[j]
- D) dp[k][j] + dp[i][k-1]

<details>
<summary>Answer&lt;/summary&gt;
B) The total cost is the left subproblem (A_i..A_k) + right subproblem (A_{k+1}..A_j) + the cost of multiplying the two resulting matrices (p[i-1] × p[k] × p[j]).
</details>

**Q4.** What is the formula for shortest common supersequence length in terms of LCS?

- A) len(X) + len(Y) - LCS(X, Y)
- B) len(X) + len(Y) + LCS(X, Y)
- C) max(len(X), len(Y))
- D) len(X) + len(Y)

<details>
<summary>Answer&lt;/summary&gt;
A) SCS length = m + n - LCS length, because LCS characters appear once and the rest from each string are added.
</details>

**Q5.** Which pattern does Burst Balloons follow?

- A) Two-sequence DP
- B) Interval DP
- C) Single-sequence partition DP
- D) Subsequence DP

<details>
<summary>Answer&lt;/summary&gt;
B) Burst Balloons is an interval DP problem where dp[i][j] considers the last balloon to burst in the range, similar to matrix chain multiplication.
</details>

### Review Questions

1. How does the recurrence for edit distance change if you add a transpose operation (swap adjacent characters)?
2. Why is the optimal LIS solution \( O(n \log n) \) and not \( O(n^2) \)?
3. Prove that the tails array in LIS is always strictly increasing.
4. Explain why space optimization for LCS (2 rows) loses reconstruction capability.
5. How would you modify LIS to find the longest **non-decreasing** subsequence (allow equals)?

### Application Problems

6. Implement edit distance with reconstruction of the edit operations (not just the count).
7. Solve LIS on the array [3, 10, 2, 1, 20] using both \( O(n^2) \) and \( O(n \log n) \) methods.
8. Find the optimal parenthesization for matrices with dimensions [5, 4, 6, 2, 7].
9. Compute the minimum cuts for palindrome partitioning of the string "ababbbabbababa".
10. Write a function that computes the LCS space-optimized (O(n) space) returning only the length.

### Challenge Problem

11. Design an algorithm for the **shortest common supersequence** (SCS): given strings X and Y, find the shortest string Z such that X and Y are subsequences of Z. Show how to derive the solution from LCS and implement reconstruction.

12. **LIS reconstruction in O(n log n):** While the standard patience algorithm only finds the LIS length, extend it to reconstruct the actual subsequence by storing predecessor indices. Hint: maintain `parent` and `sequence_pos` arrays alongside `tails`.

13. **Edit distance with affine gap penalties:** In bioinformatics, opening a gap costs more than extending one. Modify the edit distance recurrence to support separate gap-open and gap-extend penalties.
