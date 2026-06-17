# Chapter 6: Greedy Algorithms

## Learning Objectives

By the end of this chapter, students will be able to:

1. Understand the greedy paradigm and the conditions under which it produces optimal solutions.
2. Implement activity selection, Huffman coding, fractional knapsack, job sequencing, and canonical coin change.
3. Prove the optimality of greedy algorithms using the exchange argument.
4. Distinguish between problems solvable by greedy algorithms and those requiring dynamic programming.

---

## Theory

![Greedy Algorithms Diagram](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/algorithms/ch06-greedy.png)

### 6.1 The Greedy Paradigm

A greedy algorithm makes the locally optimal choice at each step, hoping that local optima lead to a global optimum. For many problems this approach fails, but for problems that exhibit **optimal substructure** and the **greedy-choice property**, it yields optimal solutions.

**Greedy-choice property:** A globally optimal solution can be reached by making a locally optimal (greedy) choice.

**Optimal substructure:** An optimal solution to the problem contains optimal solutions to subproblems.

**Exchange argument (proof technique):** Show that any optimal solution can be transformed into the greedy solution without worsening the objective.

### 6.2 Activity Selection

**Problem:** Given \( n \) activities with start times \( s_i \) and finish times \( f_i \), select the maximum number of non-overlapping activities.

**Greedy strategy:** Always select the activity with the earliest finish time that does not conflict with previously selected activities.

```
ActivitySelection(s, f, n):
    Sort activities by finish time
    selected = [0]
    lastFinish = f[0]
    for i = 1 to n-1:
        if s[i] >= lastFinish:
            selected.push(i)
            lastFinish = f[i]
    return selected
```

**Proof of optimality (exchange argument):** Let \( A \) be the greedy solution and \( O \) be any optimal solution. Let the first activity in \( A \) be \( a_1 \) (earliest finish) and the first in \( O \) be \( o_1 \). Since \( f_{a_1} \le f_{o_1} \), we can replace \( o_1 \) with \( a_1 \) in \( O \), yielding another optimal solution. By induction, \( A \) is optimal.

**Complexity:** \( O(n \log n) \) due to sorting.

### 6.3 Huffman Coding

**Problem:** Given a set of characters with frequencies, construct a binary prefix code that minimizes the total number of bits.

**Greedy strategy:** At each step, merge the two characters (or subtrees) with the smallest frequencies.

```
Huffman(C):
    Q = min-priority queue of characters by frequency
    for i = 1 to |C| - 1:
        z = new node
        z.left = ExtractMin(Q)
        z.right = ExtractMin(Q)
        z.freq = z.left.freq + z.right.freq
        Insert(Q, z)
    return ExtractMin(Q)
```

**Correctness:** Huffman's algorithm produces an optimal prefix code. The proof uses the exchange argument: an optimal code tree has the two lowest-frequency characters as siblings at the deepest level.

**Complexity:** \( O(n \log n) \).

### 6.4 Fractional Knapsack

**Problem:** Given items with weights and values, and a knapsack capacity \( W \), maximize the value of items placed in the knapsack. Items can be taken fractionally.

**Greedy strategy:** Sort items by value-to-weight ratio \( v_i / w_i \) in decreasing order. Take as much as possible of the highest-ratio item, then the next, etc.

```
FractionalKnapsack(items, W):
    Sort items by v_i / w_i descending
    totalValue = 0
    for each item in sorted order:
        if W >= item.weight:
            totalValue += item.value
            W -= item.weight
        else:
            totalValue += item.value * (W / item.weight)
            break
    return totalValue
```

**Complexity:** \( O(n \log n) \).

**Contrast with 0/1 knapsack:** The fractional knapsack problem is solvable by a greedy algorithm, while the 0/1 knapsack problem requires dynamic programming. The difference lies in the ability to take fractions of items.

### 6.5 Job Sequencing with Deadlines

**Problem:** Given \( n \) jobs, each with a deadline \( d_i \) and profit \( p_i \), each job takes one unit of time. Schedule jobs to maximize total profit.

**Greedy strategy:** Sort jobs by profit descending. For each job, assign it to the latest available time slot before its deadline.

```
JobSequencing(jobs, n):
    Sort jobs by profit descending
    result = array of size maxDeadline, initialized to -1
    totalProfit = 0
    for each job in sorted order:
        for t = min(d_i, maxDeadline) - 1 down to 0:
            if result[t] == -1:
                result[t] = job
                totalProfit += p_i
                break
    return result, totalProfit
```

**Complexity:** \( O(n^2) \) naive, \( O(n \log n) \) with union-find optimization.

### 6.6 Canonical Coin Change

**Problem:** Given coin denominations \( d_1 > d_2 > \cdots > d_k = 1 \), make change for amount \( A \) using the minimum number of coins.

**Greedy strategy:** Repeatedly take the largest denomination that does not exceed the remaining amount.

For **canonical coin systems** (including USD: 25, 10, 5, 1), the greedy algorithm yields optimal solutions. For non-canonical systems (e.g., 1, 3, 4), greedy may fail.

**Complexity:** \( O(k) \).

---

## Examples

### Example 6.1: Activity Selection in C++

```cpp
#include <vector>
#include <algorithm>

struct Activity { int start, finish; };

std::vector<int> activitySelection(std::vector<Activity>& acts) {
    std::sort(acts.begin(), acts.end(),
              [](const Activity& a, const Activity& b) {
                  return a.finish < b.finish;
              });
    std::vector<int> selected = {0};
    int lastFinish = acts[0].finish;
    for (size_t i = 1; i < acts.size(); ++i) {
        if (acts[i].start >= lastFinish) {
            selected.push_back(static_cast<int>(i));
            lastFinish = acts[i].finish;
        }
    }
    return selected;
}
```

**Walkthrough:** Activities: (1,4), (3,5), (0,6), (5,7), (3,8), (5,9), (6,10), (8,11), (8,12), (2,13), (12,14). Sorted by finish: (1,4), (3,5), (0,6), (5,7), (3,8), (5,9), (6,10), (8,11), (8,12), (2,13), (12,14). Selected: (1,4), (5,7), (8,11), (12,14). Count = 4.

### Example 6.2: Huffman Coding

**Input:** Characters with frequencies: A:45, B:13, C:12, D:16, E:9, F:5.

**Steps:**

1. Merge E(9) and F(5): node X = 14.
2. Merge C(12) and B(13): node Y = 25.
3. Merge X(14) and D(16): node Z = 30.
4. Merge Y(25) and Z(30): node W = 55.
5. Merge A(45) and W(55): root = 100.

**Codes:** A:0, B:101, C:100, D:111, E:1101, F:1100. Total bits: \( 45 \cdot 1 + 13 \cdot 3 + 12 \cdot 3 + 16 \cdot 3 + 9 \cdot 4 + 5 \cdot 4 = 224 \).

### Example 6.3: Non-Canonical Coin Change

**Problem:** Denominations 1, 3, 4. Make change for 6.

**Greedy:** 4 + 1 + 1 = 3 coins.

**Optimal:** 3 + 3 = 2 coins.

The greedy algorithm fails because the coin system is non-canonical.

---

## Summary

- The greedy paradigm works when the greedy-choice property and optimal substructure hold.
- Exchange arguments provide a systematic method for proving greedy optimality.
- Activity selection and Huffman coding are canonical examples of correct greedy algorithms.
- Fractional knapsack is greedy-solvable; 0/1 knapsack is not.
- Greedy coin change requires the coin system to be canonical.

---

## Exercises

### Review Questions

1. State the greedy-choice property. Give an example of a problem that satisfies it.
2. Explain why fractional knapsack admits a greedy solution but 0/1 knapsack does not.
3. Construct a set of activities where selecting the shortest-duration activity first would fail.

### Application Problems

4. Implement Huffman coding in C++ and encode a sample string. Compute the compression ratio.
5. Implement the job sequencing algorithm with union-find optimization and prove its \( O(n \log n) \) bound.
6. Determine whether the coin system 1, 5, 10, 25 is canonical. Prove your answer.
7. Given intervals with weights, find a maximum-weight non-overlapping subset. Show that the greedy earliest-finish-time-first strategy is not optimal.

### Challenge Problem

8. Design a greedy algorithm for the **Minimum Spanning Tree** problem (Prim's algorithm). Prove its optimality using a cut property. Compare with the MST presented in Chapter 12.
