# Chapter 9: Dynamic Programming — Sequences

## Learning Objectives

By the end of this chapter, students will be able to:

1. Compute the longest common subsequence (LCS) and reconstruct the sequence.
2. Compute the longest increasing subsequence (LIS) in both \( O(n^2) \) and \( O(n \log n) \) time.
3. Compute the edit distance (Levenshtein distance) between two strings.
4. Solve matrix chain multiplication and palindrome partitioning using DP.

---

## Theory

![DP Sequences Diagram](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/algorithms/ch09-dp-sequences.png)

### 9.1 Longest Common Subsequence (LCS)

**Problem:** Given two strings \( X \) and \( Y \), find the longest subsequence that appears in both. A subsequence is obtained by deleting characters (not necessarily contiguous).

**Recurrence:** Let \( dp[i][j] \) be the length of LCS of \( X[1..i] \) and \( Y[1..j] \).

\[
dp[i][j] = \begin{cases}
0 & \text{if } i=0 \text{ or } j=0 \\
dp[i-1][j-1] + 1 & \text{if } X[i] = Y[j] \\
\max(dp[i-1][j], dp[i][j-1]) & \text{if } X[i] \neq Y[j]
\end{cases}
\]

**Algorithm:**
```
LCS(X, Y, m, n):
    dp = 2D array of size (m+1) x (n+1)
    for i = 1 to m:
        for j = 1 to n:
            if X[i] == Y[j]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    return dp[m][n]
```

**Reconstruction:** Trace back from \( dp[m][n] \). If characters match, include the character and move diagonally. Otherwise, move in the direction of the larger value.

**Complexity:** \( O(mn) \) time, \( O(mn) \) space (can be optimized to \( O(\min(m,n)) \) for length only).

### 9.2 Longest Increasing Subsequence (LIS)

**Problem:** Given an array \( A \), find the length of the longest strictly increasing subsequence.

#### \( O(n^2) \) DP:

\[
dp[i] = 1 + \max_{j < i, A[j] < A[i]} dp[j]
\]

```
LIS_n2(A, n):
    dp = array of size n, all 1
    for i = 1 to n-1:
        for j = 0 to i-1:
            if A[j] < A[i]:
                dp[i] = max(dp[i], 1 + dp[j])
    return max(dp)
```

#### \( O(n \log n) \) DP (patience sorting):

Maintain an array \( tails \) where \( tails[k] \) is the smallest possible last element of an increasing subsequence of length \( k+1 \).

```
LIS_nlogn(A, n):
    tails = empty array
    for x in A:
        i = lower_bound(tails, x)
        if i == len(tails):
            tails.append(x)
        else:
            tails[i] = x
    return len(tails)
```

**Proof of correctness:** By induction, \( tails \) is always sorted, and each element is the smallest possible tail for its length.

### 9.3 Edit Distance (Levenshtein Distance)

**Problem:** Given two strings \( X \) and \( Y \), find the minimum number of operations (insert, delete, replace) to transform \( X \) into \( Y \).

**Recurrence:** Let \( dp[i][j] \) be the edit distance between \( X[1..i] \) and \( Y[1..j] \).

\[
dp[i][j] = \begin{cases}
i & \text{if } j = 0 \\
j & \text{if } i = 0 \\
dp[i-1][j-1] & \text{if } X[i] = Y[j] \\
1 + \min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) & \text{if } X[i] \neq Y[j]
\end{cases}
\]

The three cases correspond to: delete \( X[i] \), insert \( Y[j] \), or replace \( X[i] \) with \( Y[j] \).

**Complexity:** \( O(mn) \) time, \( O(mn) \) space.

### 9.4 Matrix Chain Multiplication

**Problem:** Given matrices \( A_1, A_2, \ldots, A_n \) with dimensions \( p_0 \times p_1, p_1 \times p_2, \ldots, p_{n-1} \times p_n \), find the parenthesization that minimizes the total number of scalar multiplications.

**Recurrence:** Let \( dp[i][j] \) be the minimum cost to multiply matrices \( A_i \) through \( A_j \).

\[
dp[i][j] = \begin{cases}
0 & \text{if } i = j \\
\min_{i \le k < j} (dp[i][k] + dp[k+1][j] + p_{i-1} \cdot p_k \cdot p_j) & \text{otherwise}
\end{cases}
\]

**Algorithm:**
```
MatrixChain(p, n):
    dp = 2D array of size n x n, initialized to 0
    for L = 2 to n:           // chain length
        for i = 1 to n - L + 1:
            j = i + L - 1
            dp[i][j] = inf
            for k = i to j - 1:
                cost = dp[i][k] + dp[k+1][j] + p[i-1] * p[k] * p[j]
                if cost < dp[i][j]:
                    dp[i][j] = cost
    return dp[1][n-1]
```

**Complexity:** \( O(n^3) \) time, \( O(n^2) \) space.

### 9.5 Palindrome Partitioning

**Problem:** Given a string \( S \), partition it into substrings such that every substring is a palindrome. Find the minimum number of cuts needed.

**Recurrence:** Let \( dp[i] \) be the minimum cuts for the prefix \( S[0..i] \). Let \( isPal[i][j] \) be true if \( S[i..j] \) is a palindrome.

\[
dp[i] = \begin{cases}
0 & \text{if } S[0..i] \text{ is a palindrome} \\
\min_{0 \le j < i, S[j+1..i] \text{ is palindrome}} (dp[j] + 1) & \text{otherwise}
\end{cases}
\]

Precompute palindrome information using DP: \( isPal[i][j] = (S[i] == S[j]) \land (j - i < 2 \lor isPal[i+1][j-1]) \).

**Complexity:** \( O(n^2) \) time, \( O(n^2) \) space.

---

## Examples

### Example 9.1: LCS in C++

```cpp
#include <string>
#include <vector>
#include <algorithm>

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
    // Reconstruction
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

**Walkthrough:** X = "ABCBDAB", Y = "BDCABA". LCS = "BCBA" or "BDAB", length 4.

### Example 9.2: LIS in \( O(n \log n) \)

```cpp
#include <vector>
#include <algorithm>

int lis(const std::vector<int>& A) {
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
```

**Walkthrough:** A = [10, 9, 2, 5, 3, 7, 101, 18]. tails evolves: [10], [9], [2], [2,5], [2,3], [2,3,7], [2,3,7,101], [2,3,7,18]. LIS = 4.

### Example 9.3: Edit Distance

```cpp
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

---

## Summary

- LCS uses a 2D DP on string prefixes; reconstruction requires traceback.
- LIS has an elegant \( O(n \log n) \) solution using patience sorting.
- Edit distance generalizes LCS by allowing insert, delete, and replace operations.
- Matrix chain multiplication optimizes parenthesization over interval DP.
- Palindrome partitioning precomputes palindrome substrings and applies 1D DP.

---

## Exercises

### Review Questions

1. How does the recurrence for edit distance change if you add a transpose operation?
2. Why is the optimal LIS solution \( O(n \log n) \) and not \( O(n^2) \)?
3. Prove that the tails array in LIS is always strictly increasing.

### Application Problems

4. Implement edit distance with reconstruction of the edit operations.
5. Solve LIS on the array [3, 10, 2, 1, 20] using both \( O(n^2) \) and \( O(n \log n) \) methods.
6. Find the optimal parenthesization for matrices with dimensions [5, 4, 6, 2, 7].
7. Compute the minimum cuts for palindrome partitioning of the string "ababbbabbababa".

### Challenge Problem

8. Design an algorithm for the **shortest common supersequence** (SCS): given strings X and Y, find the shortest string Z such that X and Y are subsequences of Z. Show how to derive the solution from LCS.
