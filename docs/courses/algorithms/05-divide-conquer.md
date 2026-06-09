# Chapter 5: Divide and Conquer

## Learning Objectives

By the end of this chapter, students will be able to:

1. Apply the divide-and-conquer paradigm to novel problems.
2. Solve the maximum subarray problem in \( O(n \log n) \) time.
3. Analyze Strassen's matrix multiplication and Karatsuba multiplication.
4. Implement the closest pair of points algorithm.

---

## Theory

### 5.1 Maximum Subarray Problem

**Problem:** Given an array \( A \) of \( n \) integers (which may be negative), find the contiguous subarray with the largest sum.

**Divide-and-conquer approach:** Divide the array at the midpoint. The maximum subarray lies entirely in the left half, entirely in the right half, or crosses the midpoint. The crossing case requires linear scan from the midpoint outward.

```
MaxCrossingSum(A, low, mid, high):
    leftSum = -inf; sum = 0
    for i = mid down to low:
        sum += A[i]
        leftSum = max(leftSum, sum)
    rightSum = -inf; sum = 0
    for i = mid+1 to high:
        sum += A[i]
        rightSum = max(rightSum, sum)
    return leftSum + rightSum

MaxSubarray(A, low, high):
    if low == high:
        return A[low]
    mid = (low + high) / 2
    left = MaxSubarray(A, low, mid)
    right = MaxSubarray(A, mid+1, high)
    cross = MaxCrossingSum(A, low, mid, high)
    return max(left, right, cross)
```

**Recurrence:** \( T(n) = 2T(n/2) + O(n) \), so \( T(n) = \Theta(n \log n) \).

**Note:** Kadane's algorithm solves this in \( O(n) \) time using dynamic programming, making it optimal.

### 5.2 Strassen's Matrix Multiplication

Standard matrix multiplication of two \( n \times n \) matrices requires \( O(n^3) \) operations.

Strassen's algorithm divides each matrix into four \( n/2 \times n/2 \) blocks:

\[
C = AB = \begin{bmatrix} A_{11} & A_{12} \\ A_{21} & A_{22} \end{bmatrix} \begin{bmatrix} B_{11} & B_{12} \\ B_{21} & B_{22} \end{bmatrix}
\]

Standard method computes 8 submatrix multiplications. Strassen computes 7:

\[
\begin{aligned}
P_1 &= A_{11}(B_{12} - B_{22}) \\
P_2 &= (A_{11} + A_{12})B_{22} \\
P_3 &= (A_{21} + A_{22})B_{11} \\
P_4 &= A_{22}(B_{21} - B_{11}) \\
P_5 &= (A_{11} + A_{22})(B_{11} + B_{22}) \\
P_6 &= (A_{12} - A_{22})(B_{21} + B_{22}) \\
P_7 &= (A_{11} - A_{21})(B_{11} + B_{12})
\end{aligned}
\]

Then reconstruct:

\[
\begin{aligned}
C_{11} &= P_5 + P_4 - P_2 + P_6 \\
C_{12} &= P_1 + P_2 \\
C_{21} &= P_3 + P_4 \\
C_{22} &= P_5 + P_1 - P_3 - P_7
\end{aligned}
\]

**Recurrence:** \( T(n) = 7T(n/2) + O(n^2) \). By the master theorem, \( \log_2 7 \approx 2.807 \), so \( T(n) = O(n^{2.807}) \).

### 5.3 Closest Pair of Points

**Problem:** Given \( n \) points in the plane, find the pair with the smallest Euclidean distance.

**Algorithm:**

1. Sort points by \( x \)-coordinate (preprocessing: \( O(n \log n) \)).
2. Recursively find the minimum distance \( \delta \) in the left and right halves.
3. Let \( \delta = \min(\delta_L, \delta_R) \).
4. Consider a strip of width \( 2\delta \) around the midline. Sort strip points by \( y \)-coordinate.
5. For each point in the strip, compare with at most 7 succeeding points (those within \( \delta \) in \( y \)).

**Recurrence:** \( T(n) = 2T(n/2) + O(n) = O(n \log n) \). (The \( O(n) \) factor accounts for merging the strip by \( y \)-coordinate using a global sort or merge.)

### 5.4 Karatsuba Multiplication

Standard multiplication of two \( n \)-digit numbers takes \( O(n^2) \) time using the grade-school algorithm. Karatsuba's algorithm improves this.

Write \( x = 10^{n/2}a + b \) and \( y = 10^{n/2}c + d \). Then:

\[
xy = 10^n ac + 10^{n/2}(ad + bc) + bd
\]

Naively computing \( ad + bc \) requires two multiplications. Karatsuba computes:

\[
z_2 = ac, \quad z_0 = bd, \quad z_1 = (a+b)(c+d) - z_2 - z_0
\]

Then \( xy = 10^n z_2 + 10^{n/2} z_1 + z_0 \).

**Recurrence:** \( T(n) = 3T(n/2) + O(n) \). By the master theorem, \( \log_2 3 \approx 1.585 \), so \( T(n) = O(n^{1.585}) \).

---

## Examples

### Example 5.1: Maximum Subarray in C++

```cpp
#include <vector>
#include <algorithm>
#include <climits>

int maxCrossingSum(const std::vector<int>& A, int low, int mid, int high) {
    int leftSum = INT_MIN, sum = 0;
    for (int i = mid; i >= low; --i) {
        sum += A[i];
        leftSum = std::max(leftSum, sum);
    }
    int rightSum = INT_MIN; sum = 0;
    for (int i = mid + 1; i <= high; ++i) {
        sum += A[i];
        rightSum = std::max(rightSum, sum);
    }
    return leftSum + rightSum;
}

int maxSubarray(const std::vector<int>& A, int low, int high) {
    if (low == high) return A[low];
    int mid = low + (high - low) / 2;
    int left = maxSubarray(A, low, mid);
    int right = maxSubarray(A, mid + 1, high);
    int cross = maxCrossingSum(A, low, mid, high);
    return std::max({left, right, cross});
}
```

**Walkthrough:** A = [-2, 1, -3, 4, -1, 2, 1, -5, 4]. Divide repeatedly; maximum subarray is [4, -1, 2, 1] with sum 6.

### Example 5.2: Closest Pair in C++

```cpp
#include <vector>
#include <cmath>
#include <algorithm>
#include <limits>

struct Point { double x, y; };

double distance(const Point& a, const Point& b) {
    double dx = a.x - b.x, dy = a.y - b.y;
    return std::sqrt(dx * dx + dy * dy);
}

double closestPairRec(std::vector<Point>& Px, int l, int r) {
    if (r - l <= 3) {
        double minDist = std::numeric_limits<double>::max();
        for (int i = l; i < r; ++i)
            for (int j = i + 1; j < r; ++j)
                minDist = std::min(minDist, distance(Px[i], Px[j]));
        return minDist;
    }
    int mid = (l + r) / 2;
    double midX = Px[mid].x;
    double dl = closestPairRec(Px, l, mid);
    double dr = closestPairRec(Px, mid, r);
    double d = std::min(dl, dr);
    std::vector<Point> strip;
    for (int i = l; i < r; ++i)
        if (std::abs(Px[i].x - midX) < d)
            strip.push_back(Px[i]);
    std::sort(strip.begin(), strip.end(),
              [](const Point& a, const Point& b) { return a.y < b.y; });
    for (size_t i = 0; i < strip.size(); ++i)
        for (size_t j = i + 1; j < strip.size() && (strip[j].y - strip[i].y) < d; ++j)
            d = std::min(d, distance(strip[i], strip[j]));
    return d;
}
```

---

## Summary

| Problem | Naive | Divide-and-Conquer | Optimal |
|---------|-------|-------------------|---------|
| Max subarray | \( O(n^2) \) | \( O(n \log n) \) | \( O(n) \) |
| Matrix multiplication | \( O(n^3) \) | \( O(n^{2.807}) \) | \( O(n^{2.372}) \) (theoretical) |
| Closest pair | \( O(n^2) \) | \( O(n \log n) \) | \( O(n \log n) \) |
| Integer multiplication | \( O(n^2) \) | \( O(n^{1.585}) \) | \( O(n \log n) \) (FFT-based) |

---

## Exercises

### Review Questions

1. Why does Strassen's algorithm need only 7 multiplications instead of 8?
2. Prove that at most 7 points can be in the \( \delta \times 2\delta \) rectangle in the closest pair algorithm.
3. Derive the recurrence for Karatsuba multiplication and solve it.

### Application Problems

4. Implement Kadane's algorithm and compare its performance with the divide-and-conquer maximum subarray.
5. Implement Strassen's algorithm for matrices of size \( 2^k \times 2^k \). Handle non-power-of-two sizes by padding with zeros.
6. Implement the closest pair algorithm and run it on randomly generated points. Verify the result with brute force.

### Challenge Problem

7. Design a divide-and-conquer algorithm for the **Skyline Problem**: given the positions and heights of buildings, compute the skyline silhouette. Analyze its complexity.
