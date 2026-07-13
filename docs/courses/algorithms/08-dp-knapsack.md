# Chapter 8: Dynamic Programming — Knapsack Problems

> **Prerequisites:** [Chapter 7: Dynamic Programming — Foundations](./07-dp-intro.md) — DP properties, recurrence design, tabulation | **Next:** [Chapter 9: Dynamic Programming — Sequences](./09-dp-sequences.md) — From resource allocation to string and sequence patterns

## Learning Objectives

By the end of this chapter, students will be able to:

<!-- Image Gallery -->
<div style="display:flex;flex-wrap:wrap;gap:4px;margin:16px 0;padding:12px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;">
<a href="../../../assets/images/lessons/algorithms/08-dp-knapsack/hero.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/algorithms/08-dp-knapsack/hero.svg" alt="Chapter Banner: Chapter 8: Dynamic Programming — Knapsack Problems" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/algorithms/08-dp-knapsack/handwritten-notes.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/algorithms/08-dp-knapsack/handwritten-notes.svg" alt="Handwritten Notes: Chapter 8: Dynamic Programming — Knapsack Problems" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/algorithms/08-dp-knapsack/sticky-notes.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/algorithms/08-dp-knapsack/sticky-notes.svg" alt="Sticky Notes: Chapter 8: Dynamic Programming — Knapsack Problems" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/algorithms/08-dp-knapsack/visual-explanation.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/algorithms/08-dp-knapsack/visual-explanation.svg" alt="Visual Explanation: Chapter 8: Dynamic Programming — Knapsack Problems" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/algorithms/08-dp-knapsack/architecture.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/algorithms/08-dp-knapsack/architecture.svg" alt="Architecture: Chapter 8: Dynamic Programming — Knapsack Problems" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/algorithms/08-dp-knapsack/workflow.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/algorithms/08-dp-knapsack/workflow.svg" alt="Workflow: Chapter 8: Dynamic Programming — Knapsack Problems" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/algorithms/08-dp-knapsack/mindmap.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/algorithms/08-dp-knapsack/mindmap.svg" alt="Mind Map: Chapter 8: Dynamic Programming — Knapsack Problems" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/algorithms/08-dp-knapsack/comparison.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/algorithms/08-dp-knapsack/comparison.svg" alt="Comparison: Chapter 8: Dynamic Programming — Knapsack Problems" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/algorithms/08-dp-knapsack/cheatsheet.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/algorithms/08-dp-knapsack/cheatsheet.svg" alt="Cheat Sheet: Chapter 8: Dynamic Programming — Knapsack Problems" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/algorithms/08-dp-knapsack/interview-quiz.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/algorithms/08-dp-knapsack/interview-quiz.svg" alt="Quiz Card: Chapter 8: Dynamic Programming — Knapsack Problems" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
<a href="../../../assets/images/lessons/algorithms/08-dp-knapsack/social-card.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/lessons/algorithms/08-dp-knapsack/social-card.svg" alt="Social Card: Chapter 8: Dynamic Programming — Knapsack Problems" width="18%" style="margin:2px;border:1px solid #e2e8f0;border-radius:6px;">
</a>
</div>
<!-- End Image Gallery -->


1. Solve 0/1 knapsack, unbounded knapsack, and subset sum using DP.
2. Distinguish between 0/1 and unbounded knapsack and adapt the recurrence accordingly.
3. Apply DP to the partition equal subset sum and target sum problems.
4. Optimize space usage from \( O(nW) \) to \( O(W) \).
5. Identify which knapsack variant fits a given real-world problem.

---

## Why Knapsack Problems Matter

Imagine you are shipping goods in a truck with a weight limit. Each item has a weight and a profit. Which items do you load to maximize profit without breaking the axle? This is the **knapsack problem** — and it shows up everywhere:

| Real-World Scenario | Knapsack Analogy |
|---------------------|------------------|
| **Budget allocation** — \( n \) projects with cost & ROI, limited capital | Each project is an item. Invest or skip (0/1). |
| **Cargo loading** — planes, ships, trucks with weight/volume limits | Maximize freight value within capacity (0/1). |
| **Inventory restocking** — order any quantity of each product up to warehouse capacity | Each product can be ordered multiple times (unbounded). |
| **Cloud resource provisioning** — VMs of different sizes and costs | Choose VM types to meet workload within budget (bounded). |
| **Raw material cutting** — cut steel rods of fixed length into saleable pieces | Cut any number of each piece size (unbounded). |

Knapsack problems are the gateway to understanding **resource-constrained optimization**. Every knapsack variant teaches a different DP pattern: 0/1 teaches item-or-skip decisions, unbounded teaches unlimited reuse, and fractional teaches greedy optimality. Mastering these patterns unlocks solutions to hundreds of interview and real-world problems.

---

### Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| 0/1 Knapsack | max(skip, take) — backward capacity loop | The classic DP for item selection with capacity constraint |
| Fractional Knapsack | Greedy by value/weight ratio | Optimal when items are divisible |
| Bounded Knapsack | Multiple copies per item, expand to 0/1 | Generalization between 0/1 and unbounded |
| Space Optimization | 1D array, iterate capacity backward | \( O(W) \) space, but loses reconstruction ability |
| Unbounded Knapsack | Same recurrence but forward capacity loop | Direction difference = item can be reused |
| Subset Sum | Boolean DP for reachable sums | Foundation for many NP-hard reductions |
| Equal Partition | Reduce to subset sum with target = total/2 | Classic "can you split equally" problem |
| Coin Change | min(1 + dp[c - coin]) — forward loop | Unbounded min-coin variation |
| Target Sum | Reduce to subset sum via math transform | Sign assignment counting problem |

### Chapter Roadmap

```mermaid
flowchart LR
    A[Knapsack Problems] --> B[0/1 Knapsack]
    A --> C[Fractional Knapsack<br/>(Greedy)]
    A --> D[Bounded Knapsack]
    A --> E[Unbounded Knapsack]
    A --> F[Subset Sum]
    B --> G[Backward loop 1D]
    B --> H[2D DP table]
    C --> I[Greedy by value/weight ratio]
    D --> J[Item limits + 0/1 expansion]
    E --> K[Forward loop 1D]
    E --> L[Coin Change]
    F --> M[Boolean DP]
    F --> N[Equal Partition]
    F --> O[Target Sum]
```

---

## Theory

![DP Knapsack Diagram](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/algorithms/ch08-dp-knapsack.png)

---

### 8.1 0/1 Knapsack

<a href="../../../assets/images/diagrams/algorithms/08-dp-knapsack/8-1-0-1-knapsack-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/algorithms/08-dp-knapsack/8-1-0-1-knapsack-handwritten.svg" alt="Handwritten: 8.1 0/1 Knapsack" width="30%">
</a>
<a href="../../../assets/images/diagrams/algorithms/08-dp-knapsack/8-1-0-1-knapsack-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/algorithms/08-dp-knapsack/8-1-0-1-knapsack-diagram.svg" alt="Diagram: 8.1 0/1 Knapsack" width="30%">
</a>
<a href="../../../assets/images/diagrams/algorithms/08-dp-knapsack/8-1-0-1-knapsack-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/algorithms/08-dp-knapsack/8-1-0-1-knapsack-sticky.svg" alt="Sticky Note: 8.1 0/1 Knapsack" width="30%">
</a>


**Real-World Analogy:** You are a hiker packing a backpack with a 5 kg limit. You have a tent (1 kg, $10), sleeping bag (2 kg, $15), stove (3 kg, $40), and water filter (4 kg, $55). Each item can be taken at most once. Which combination gives the most value without exceeding 5 kg? The answer is the water filter ($55) + tent ($10) = 5 kg, $65. DP finds this optimum.

#### Problem Definition

Given \( n \) items, each with weight \( w_i \) and value \( v_i \), and a knapsack capacity \( W \), select a subset of items to maximize total value without exceeding capacity. Each item can be taken at most once (0/1 decision).

#### Algorithm Steps

1. Create a 2D DP table \( dp[n+1][W+1] \) initialized to 0.
2. For each item \( i \) from 1 to \( n \):
   - For each capacity \( c \) from 1 to \( W \):
     - If \( w_i > c \): item cannot fit → \( dp[i][c] = dp[i-1][c] \)
     - Else: \( dp[i][c] = \max(dp[i-1][c], \; v_i + dp[i-1][c - w_i]) \)
3. Return \( dp[n][W] \) — the maximum value achievable.

#### Recurrence

\[
dp[i][c] = \begin{cases}
0 & \text{if } i = 0 \text{ or } c = 0 \\
dp[i-1][c] & \text{if } w_i > c \\
\max(dp[i-1][c], \; v_i + dp[i-1][c - w_i]) & \text{otherwise}
\end{cases}
\]

**Why this works:** At each item \( i \) and capacity \( c \), we have two choices — skip the item (keep value from previous row at same capacity) or take it (add its value to best value for remaining capacity from previous row). The max picks the better option. The previous row guarantees each item is used at most once.

#### Pseudocode

```
Knapsack01(n, W, w, v):
    dp = 2D array of size (n+1) x (W+1), initialized to 0
    for i = 1 to n:
        for c = 1 to W:
            if w[i] > c:
                dp[i][c] = dp[i-1][c]
            else:
                dp[i][c] = max(dp[i-1][c], v[i] + dp[i-1][c - w[i]])
    return dp[n][W]
```

#### Step-by-Step Dry Run with 2D DP Table

**Input:** Items = [(1, 10), (2, 15), (3, 40), (4, 55)], \( W = 5 \)

Initialize: row 0 and column 0 are all 0.

| \( dp[i][c] \) | c=0 | c=1 | c=2 | c=3 | c=4 | c=5 |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **i=0** (none) | 0 | 0 | 0 | 0 | 0 | 0 |
| **i=1** (1,10) | 0 | **10** | **10** | **10** | **10** | **10** |
| **i=2** (2,15) | 0 | 10 | **15** | **25** | **25** | **25** |
| **i=3** (3,40) | 0 | 10 | 15 | **40** | **50** | **55** |
| **i=4** (4,55) | 0 | 10 | 15 | 40 | **55** | **65** |

**Key computations:**

- \( dp[1][1] \): w=1 ≤ 1 → max(0, 10+0) = **10**
- \( dp[2][3] \): w=2 ≤ 3 → max(10, 15+10) = **25**
- \( dp[3][5] \): w=3 ≤ 5 → max(25, 40+15) = **55**
- \( dp[4][5] \): w=4 ≤ 5 → max(55, 55+10) = **65**

**Result:** 65. **Items selected:** Water filter (4 kg, $55) + Tent (1 kg, $10) = 5 kg, $65.

#### C++ Implementation

```cpp
#include <vector>
#include <algorithm>

int knapsack01(const std::vector<int>& w, const std::vector<int>& v, int W) {
    int n = static_cast<int>(w.size());
    std::vector<std::vector<int>> dp(n + 1, std::vector<int>(W + 1, 0));

    for (int i = 1; i <= n; ++i) {
        for (int c = 1; c <= W; ++c) {
            if (w[i - 1] > c) {
                dp[i][c] = dp[i - 1][c];
            } else {
                dp[i][c] = std::max(dp[i - 1][c],
                                    v[i - 1] + dp[i - 1][c - w[i - 1]]);
            }
        }
    }
    return dp[n][W];
}
```

#### Python Implementation

```python
def knapsack01(weights: list[int], values: list[int], W: int) -> int:
    n = len(weights)
    dp = [[0] * (W + 1) for _ in range(n + 1)]

    for i in range(1, n + 1):
        for c in range(1, W + 1):
            if weights[i - 1] > c:
                dp[i][c] = dp[i - 1][c]
            else:
                dp[i][c] = max(dp[i - 1][c],
                               values[i - 1] + dp[i - 1][c - weights[i - 1]])
    return dp[n][W]
```

#### Java Implementation

```java
public class Knapsack01 {
    public static int knapsack01(int[] weights, int[] values, int W) {
        int n = weights.length;
        int[][] dp = new int[n + 1][W + 1];

        for (int i = 1; i <= n; i++) {
            for (int c = 1; c <= W; c++) {
                if (weights[i - 1] > c) {
                    dp[i][c] = dp[i - 1][c];
                } else {
                    dp[i][c] = Math.max(dp[i - 1][c],
                                        values[i - 1] + dp[i - 1][c - weights[i - 1]]);
                }
            }
        }
        return dp[n][W];
    }
}
```

#### Complexity Analysis

| Aspect | Complexity | Why |
|--------|-----------|-----|
| **Time** | \( O(nW) \) | Double loop: \( n \) items × \( W \) capacity slots. Each subproblem solved in \( O(1) \). Pseudo-polynomial because \( W \) is a numeric value, not input size in bits. |
| **Space** | \( O(nW) \) | 2D table stores \( (n+1)(W+1) \) integers. |

**Why pseudo-polynomial?** Input size is \( O(n \log W) \) (weights + capacity in bits), but runtime is \( O(nW) \) which is exponential in the bit-length of \( W \).

#### Space Optimization (1D Array)

The recurrence reads only from the previous row. Replace the 2D table with a 1D array by iterating capacity **backward**:

```
Knapsack01_1D(n, W, w, v):
    dp = array of size W+1, initialized to 0
    for i = 1 to n:
        for c = W down to w[i]:
            dp[c] = max(dp[c], v[i] + dp[c - w[i]])
    return dp[W]
```

**Why backward?** Reading \( dp[c - w_i] \) from the right ensures we read the value from the **previous iteration** (without the current item), preventing reuse. Forward would read the current item's value, allowing multiple uses — exactly what unbounded knapsack wants.

```cpp
int knapsack01_1D(const std::vector<int>& w, const std::vector<int>& v, int W) {
    int n = static_cast<int>(w.size());
    std::vector<int> dp(W + 1, 0);
    for (int i = 0; i < n; ++i) {
        for (int c = W; c >= w[i]; --c) {
            dp[c] = std::max(dp[c], v[i] + dp[c - w[i]]);
        }
    }
    return dp[W];
}
```

#### Advantages & Disadvantages

| Advantages | Disadvantages |
|-----------|--------------|
| Simple recurrence, easy to implement | \( O(nW) \) is pseudo-polynomial — slow for large \( W \) |
| 1D space optimization is straightforward | Cannot reconstruct selected items with 1D alone |
| Foundation for all other knapsack variants | Only handles at-most-once per item |

#### Edge Cases

| Case | Example | Behavior |
|------|---------|----------|
| Zero capacity | \( W = 0 \) | Returns 0 — no items can fit |
| No items | \( n = 0 \) | Returns 0 — nothing to choose |
| Item heavier than capacity | \( w_i > W \) | Item is always skipped |
| All items too heavy | All \( w_i > W \) | Returns 0 |
| Single item fits | One item with \( w_1 \le W \) | Returns \( v_1 \) |

> **Pro Tip:** The backward loop in 0/1 knapsack is the single most important implementation detail. Backward = each item used at most once. Forward = items can be reused.
>
> **Remember:** The 1D space optimization loses the ability to reconstruct *which* items were selected. Keep the 2D table if reconstruction is needed.

**One-Sentence Takeaway:** 0/1 knapsack uses \( dp[i][c] = \max(dp[i-1][c], v_i + dp[i-1][c - w_i]) \) with backward capacity iteration to ensure each item is used at most once.

---

### 8.2 Fractional Knapsack (Greedy)

<a href="../../../assets/images/diagrams/algorithms/08-dp-knapsack/8-2-fractional-knapsack-greedy-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/algorithms/08-dp-knapsack/8-2-fractional-knapsack-greedy-handwritten.svg" alt="Handwritten: 8.2 Fractional Knapsack (Greedy)" width="30%">
</a>
<a href="../../../assets/images/diagrams/algorithms/08-dp-knapsack/8-2-fractional-knapsack-greedy-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/algorithms/08-dp-knapsack/8-2-fractional-knapsack-greedy-diagram.svg" alt="Diagram: 8.2 Fractional Knapsack (Greedy)" width="30%">
</a>
<a href="../../../assets/images/diagrams/algorithms/08-dp-knapsack/8-2-fractional-knapsack-greedy-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/algorithms/08-dp-knapsack/8-2-fractional-knapsack-greedy-sticky.svg" alt="Sticky Note: 8.2 Fractional Knapsack (Greedy)" width="30%">
</a>


> **Note:** This is a **greedy** algorithm, not DP. It is included because it is the only knapsack variant solvable in polynomial time and is the counterpoint that motivates why 0/1 needs DP.

**Real-World Analogy:** At a bulk food market, you can take any amount of rice, beans, or flour — you do not need whole bags. Just scoop what you need.

#### Problem Definition

Given \( n \) items, each with weight \( w_i \) and value \( v_i \), and capacity \( W \), maximize total value where **fractions of items can be taken**.

#### Algorithm Steps

1. Compute ratio \( r_i = v_i / w_i \) for each item.
2. Sort items by \( r_i \) descending.
3. Initialize total value = 0, remaining capacity = \( W \).
4. For each item in sorted order:
   - If item fits entirely: take it fully, subtract weight.
   - Else: take fraction \( remaining / w_i \), add proportional value, stop.
5. Return total value.

#### Pseudocode

```
FractionalKnapsack(n, W, w, v):
    items = list of (w[i], v[i], v[i]/w[i])
    sort items by ratio descending
    totalValue = 0
    for each item in items:
        if W >= item.w:
            totalValue += item.v
            W -= item.w
        else:
            totalValue += item.v * (W / item.w)
            break
    return totalValue
```

#### Step-by-Step Dry Run

**Input:** Items = [(5, 30), (10, 40), (15, 45), (20, 100)], \( W = 30 \)

| Item | Weight | Value | Ratio |
|:----:|:------:|:-----:|:-----:|
| A | 5 | 30 | 6.0 |
| B | 20 | 100 | 5.0 |
| C | 10 | 40 | 4.0 |
| D | 15 | 45 | 3.0 |

Sorted: A(6.0), B(5.0), C(4.0), D(3.0)

1. Take **A** fully: value = 30, remaining = 25
2. Take **B** fully: value = 130, remaining = 5
3. Take \( \frac{5}{10} = 0.5 \) of **C**: value = 130 + 20 = 150

**Result:** 150. Items: A (full), B (full), C (half).

#### C++ Implementation

```cpp
#include <vector>
#include <algorithm>

struct Item { double weight, value; };

double fractionalKnapsack(std::vector<Item>& items, int W) {
    std::sort(items.begin(), items.end(),
        [](const Item& a, const Item& b) {
            return (a.value / a.weight) > (b.value / b.weight);
        });

    double totalValue = 0.0;
    for (const auto& item : items) {
        if (W >= item.weight) {
            totalValue += item.value;
            W -= item.weight;
        } else {
            totalValue += item.value * (W / item.weight);
            break;
        }
    }
    return totalValue;
}
```

#### Python Implementation

```python
def fractional_knapsack(weights: list[int], values: list[int], W: int) -> float:
    items = [(values[i] / weights[i], weights[i], values[i]) for i in range(len(weights))]
    items.sort(reverse=True)

    total_value = 0.0
    for ratio, weight, value in items:
        if W >= weight:
            total_value += value
            W -= weight
        else:
            total_value += value * (W / weight)
            break
    return total_value
```

#### Java Implementation

```java
import java.util.Arrays;

class FractionalKnapsack {
    public static double fractionalKnapsack(int[] weights, int[] values, int W) {
        int n = weights.length;
        double[][] items = new double[n][3];

        for (int i = 0; i < n; i++) {
            items[i][0] = (double) values[i] / weights[i];
            items[i][1] = weights[i];
            items[i][2] = values[i];
        }

        Arrays.sort(items, (a, b) -> Double.compare(b[0], a[0]));

        double totalValue = 0;
        for (double[] item : items) {
            if (W >= item[1]) {
                totalValue += item[2];
                W -= item[1];
            } else {
                totalValue += item[2] * (W / item[1]);
                break;
            }
        }
        return totalValue;
    }
}
```

#### Complexity Analysis

| Aspect | Complexity | Why |
|--------|-----------|-----|
| **Time** | \( O(n \log n) \) | Sorting dominates; selection loop is \( O(n) \). |
| **Space** | \( O(1) \) or \( O(n) \) | In-place sort uses \( O(1) \); storing ratios uses \( O(n) \). |

**Why greedy is optimal:** Taking a fraction of a higher-ratio item always yields more value per unit weight than any lower-ratio item. The exchange argument proves optimality.

#### Advantages & Disadvantages

| Advantages | Disadvantages |
|-----------|--------------|
| Polynomial time \( O(n \log n) \) | Items must be divisible |
| Simple greedy, easy to prove correct | Fails for 0/1 (indivisible items) |

#### Edge Cases

| Case | Behavior |
|------|----------|
| Capacity fits all items | Takes everything fully |
| Single item larger than capacity | Takes fraction |
| Zero capacity | Returns 0 |

> **Pro Tip:** Fractional knapsack is the only knapsack variant solvable in polynomial time. When an interviewer asks "why can't we use greedy for 0/1 knapsack?", the answer is that indivisibility breaks the exchange argument.

**One-Sentence Takeaway:** Fractional knapsack uses greedy by value/weight ratio because items are divisible, achieving \( O(n \log n) \) — the only polynomial knapsack variant.

---

### 8.3 Bounded Knapsack

<a href="../../../assets/images/diagrams/algorithms/08-dp-knapsack/8-3-bounded-knapsack-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/algorithms/08-dp-knapsack/8-3-bounded-knapsack-handwritten.svg" alt="Handwritten: 8.3 Bounded Knapsack" width="30%">
</a>
<a href="../../../assets/images/diagrams/algorithms/08-dp-knapsack/8-3-bounded-knapsack-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/algorithms/08-dp-knapsack/8-3-bounded-knapsack-diagram.svg" alt="Diagram: 8.3 Bounded Knapsack" width="30%">
</a>
<a href="../../../assets/images/diagrams/algorithms/08-dp-knapsack/8-3-bounded-knapsack-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/algorithms/08-dp-knapsack/8-3-bounded-knapsack-sticky.svg" alt="Sticky Note: 8.3 Bounded Knapsack" width="30%">
</a>


**Real-World Analogy:** A warehouse can store 100 pallets. You have TVs (2 pallets, $500 profit, 5 available), Phones (1 pallet, $200, 10 available), and Laptops (3 pallets, $800, 2 available). Each product has limited stock. How many of each do you store?

#### Problem Definition

Given \( n \) item types, each with weight \( w_i \), value \( v_i \), and **count limit** \( k_i \), maximize total value without exceeding capacity \( W \). Each type can be used up to \( k_i \) times.

#### Algorithm Steps (Binary Splitting)

1. For each item type with limit \( k_i \), decompose \( k_i \) into binary powers: \( 1, 2, 4, \ldots, 2^p \), plus remainder.
2. Create new items: weight = \( w_i \times \text{count} \), value = \( v_i \times \text{count} \).
3. Run standard 0/1 knapsack on the expanded item list.
4. Return \( dp[W] \).

**Why binary splitting works:** Any number \( k \) can be represented as a sum of \( O(\log k) \) powers of two plus remainder. This reduces \( k \) identical items to \( O(\log k) \) groups without losing any combination.

#### Pseudocode

```
BoundedKnapsack(n, W, w, v, k):
    newW = [], newV = []
    for i = 1 to n:
        count = k[i]
        p = 1
        while count > 0:
            take = min(p, count)
            newW.append(w[i] * take)
            newV.append(v[i] * take)
            count -= take
            p *= 2

    dp = array of size W+1, initialized to 0
    for i = 0 to len(newW)-1:
        for c = W down to newW[i]:
            dp[c] = max(dp[c], newV[i] + dp[c - newW[i]])
    return dp[W]
```

#### Step-by-Step Dry Run

**Input:** Items = [(2, 5, limit=3), (3, 8, limit=2)], \( W = 7 \)

**Binary splitting:**
- Item 1 (w=2, v=5, k=3): 3 = 1 + 2 → groups: (2,5), (4,10)
- Item 2 (w=3, v=8, k=2): 2 = 1 + 1 → groups: (3,8), (3,8)

New items: [(2,5), (4,10), (3,8), (3,8)]

**0/1 DP trace (1D array):**
- After (2,5): dp = [0,0,5,5,5,5,5,5]
- After (4,10): dp = [0,0,5,5,10,10,15,15]
- After (3,8): dp = [0,0,5,8,10,13,15,18]
- After (3,8): dp = [0,0,5,8,10,13,16,18]

**Result:** dp[7] = 18. Selection: 2 × item 1 (4 wt, $10) + 1 × item 2 (3 wt, $8) = 7 wt, $18.

#### C++ Implementation

```cpp
#include <vector>
#include <algorithm>

int boundedKnapsack(const std::vector<int>& w, const std::vector<int>& v,
                    const std::vector<int>& k, int W) {
    std::vector<int> nw, nv;
    for (size_t i = 0; i < w.size(); ++i) {
        int count = k[i], p = 1;
        while (count > 0) {
            int take = std::min(p, count);
            nw.push_back(w[i] * take);
            nv.push_back(v[i] * take);
            count -= take;
            p *= 2;
        }
    }

    std::vector<int> dp(W + 1, 0);
    for (size_t i = 0; i < nw.size(); ++i)
        for (int c = W; c >= nw[i]; --c)
            dp[c] = std::max(dp[c], nv[i] + dp[c - nw[i]]);
    return dp[W];
}
```

#### Python Implementation

```python
def bounded_knapsack(weights: list[int], values: list[int],
                     limits: list[int], W: int) -> int:
    new_weights, new_values = [], []
    for i, limit in enumerate(limits):
        count, p = limit, 1
        while count > 0:
            take = min(p, count)
            new_weights.append(weights[i] * take)
            new_values.append(values[i] * take)
            count -= take
            p *= 2

    dp = [0] * (W + 1)
    for i in range(len(new_weights)):
        for c in range(W, new_weights[i] - 1, -1):
            dp[c] = max(dp[c], new_values[i] + dp[c - new_weights[i]])
    return dp[W]
```

#### Java Implementation

```java
import java.util.ArrayList;

public class BoundedKnapsack {
    public static int boundedKnapsack(int[] weights, int[] values,
                                       int[] limits, int W) {
        ArrayList<Integer> nw = new ArrayList<>();
        ArrayList<Integer> nv = new ArrayList<>();

        for (int i = 0; i < weights.length; i++) {
            int count = limits[i], p = 1;
            while (count > 0) {
                int take = Math.min(p, count);
                nw.add(weights[i] * take);
                nv.add(values[i] * take);
                count -= take;
                p *= 2;
            }
        }

        int[] dp = new int[W + 1];
        for (int i = 0; i < nw.size(); i++)
            for (int c = W; c >= nw.get(i); c--)
                dp[c] = Math.max(dp[c], nv.get(i) + dp[c - nw.get(i)]);
        return dp[W];
    }
}
```

#### Complexity Analysis

| Aspect | Complexity | Why |
|--------|-----------|-----|
| **Time** | \( O(W \cdot \sum \log k_i) \) | Binary splitting creates \( O(\sum \log k_i) \) items; 0/1 DP runs in \( O(\text{expanded\_items} \times W) \). |
| **Space** | \( O(W + \sum \log k_i) \) | DP array plus expanded items list. |

#### Advantages & Disadvantages

| Advantages | Disadvantages |
|-----------|--------------|
| Handles limited-quantity items realistically | Binary splitting adds complexity |
| Generalizes both 0/1 (k=1) and unbounded (k=∞) | Without splitting, naive \( O(nWK) \) is too slow |

#### Edge Cases

| Case | Behavior |
|------|----------|
| limit = 1 for all | Degrades to 0/1 knapsack |
| limit = ∞ (very large) | Degrades to unbounded knapsack |
| Zero limit | Item type is ignored |
| W = 0 | Returns 0 |

> **Pro Tip:** Bounded knapsack with binary splitting is a common interview optimization. The key insight: any number of identical items can be encoded as \( O(\log k) \) powers-of-two groups.

**One-Sentence Takeaway:** Bounded knapsack generalizes 0/1 and unbounded by adding per-item limits, solvable efficiently via binary splitting into \( O(\log k_i) \) groups per item type.

---

### 8.4 Unbounded Knapsack

<a href="../../../assets/images/diagrams/algorithms/08-dp-knapsack/8-4-unbounded-knapsack-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/algorithms/08-dp-knapsack/8-4-unbounded-knapsack-handwritten.svg" alt="Handwritten: 8.4 Unbounded Knapsack" width="30%">
</a>
<a href="../../../assets/images/diagrams/algorithms/08-dp-knapsack/8-4-unbounded-knapsack-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/algorithms/08-dp-knapsack/8-4-unbounded-knapsack-diagram.svg" alt="Diagram: 8.4 Unbounded Knapsack" width="30%">
</a>
<a href="../../../assets/images/diagrams/algorithms/08-dp-knapsack/8-4-unbounded-knapsack-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/algorithms/08-dp-knapsack/8-4-unbounded-knapsack-sticky.svg" alt="Sticky Note: 8.4 Unbounded Knapsack" width="30%">
</a>


**Real-World Analogy:** You run a smoothie shop with unlimited stock of bananas ($0.50 each, 1 min prep), protein powder ($2.00 scoop, 30 sec), and spinach ($0.75 bunch, 20 sec). With 5 minutes before lunch rush, how many of each do you use to maximize profit per smoothie? Unlimited stock means any quantity of each ingredient.

#### Problem Definition

Same as 0/1 knapsack, but each item can be taken **any number of times** (unlimited supply).

#### Algorithm Steps

1. Initialize 1D DP array of size \( W + 1 \) with zeros.
2. For each capacity \( c \) from 1 to \( W \):
   - For each item \( i \) from 1 to \( n \):
     - If \( w_i \le c \): \( dp[c] = \max(dp[c], \; v_i + dp[c - w_i]) \)
3. Return \( dp[W] \).

#### Recurrence

\[
dp[c] = \max_{i: w_i \le c} (v_i + dp[c - w_i])
\]

**Key difference:** The capacity loop goes **forward**. This lets \( dp[c - w_i] \) already include the current item, enabling unlimited reuse.

#### Pseudocode

```
UnboundedKnapsack(n, W, w, v):
    dp = array of size W+1, initialized to 0
    for c = 1 to W:
        for i = 1 to n:
            if w[i] <= c:
                dp[c] = max(dp[c], v[i] + dp[c - w[i]])
    return dp[W]
```

#### Step-by-Step Dry Run

**Input:** Items = [(2, 3), (3, 5)], \( W = 7 \)

| c | dp[c] computation | Value |
|:-:|:---|:-----:|
| 0 | Initialize | 0 |
| 1 | No item fits | 0 |
| 2 | max(0, 3+dp[0]=3) | **3** |
| 3 | max(0, 3+dp[1]=3, 5+dp[0]=5) | **5** |
| 4 | max(0, 3+dp[2]=6, 5+dp[1]=5) | **6** |
| 5 | max(0, 3+dp[3]=8, 5+dp[2]=8) | **8** |
| 6 | max(0, 3+dp[4]=9, 5+dp[3]=10) | **10** |
| 7 | max(0, 3+dp[5]=11, 5+dp[4]=11) | **11** |

**Result:** 11. Selection: (3,5) + (2,3) + (2,3) = 7 weight.

#### C++ Implementation

```cpp
#include <vector>
#include <algorithm>

int unboundedKnapsack(const std::vector<int>& w,
                      const std::vector<int>& v, int W) {
    int n = static_cast<int>(w.size());
    std::vector<int> dp(W + 1, 0);

    for (int c = 1; c <= W; ++c) {
        for (int i = 0; i < n; ++i) {
            if (w[i] <= c) {
                dp[c] = std::max(dp[c], v[i] + dp[c - w[i]]);
            }
        }
    }
    return dp[W];
}
```

#### Python Implementation

```python
def unbounded_knapsack(weights: list[int], values: list[int], W: int) -> int:
    dp = [0] * (W + 1)

    for c in range(1, W + 1):
        for i in range(len(weights)):
            if weights[i] <= c:
                dp[c] = max(dp[c], values[i] + dp[c - weights[i]])
    return dp[W]
```

#### Java Implementation

```java
public class UnboundedKnapsack {
    public static int unboundedKnapsack(int[] weights, int[] values, int W) {
        int n = weights.length;
        int[] dp = new int[W + 1];

        for (int c = 1; c <= W; c++) {
            for (int i = 0; i < n; i++) {
                if (weights[i] <= c) {
                    dp[c] = Math.max(dp[c], values[i] + dp[c - weights[i]]);
                }
            }
        }
        return dp[W];
    }
}
```

#### Complexity Analysis

| Aspect | Complexity | Why |
|--------|-----------|-----|
| **Time** | \( O(nW) \) | For each capacity, try each item. Same total work as 0/1. |
| **Space** | \( O(W) \) | Only one 1D array. Can't drop below \( O(W) \). |

#### Advantages & Disadvantages

| Advantages | Disadvantages |
|-----------|--------------|
| Forward loop directly captures unbounded reuse | \( O(nW) \) is still pseudo-polynomial |
| 1D array is already space-optimal | Cannot reconstruct selected items |

#### Edge Cases

| Case | Behavior |
|------|----------|
| W = 0 | Returns 0 |
| All items heavier than W | Returns 0 |
| Single item | Returns \( v \times \lfloor W / w \rfloor \) |

> **Pro Tip:** The forward/backward loop direction is the universal tell for 0/1 vs unbounded. Backward = 0/1 (each item once). Forward = unbounded (item can be reused). This applies to ALL knapsack variants.
>
> **Warning:** Unbounded knapsack has the same \( O(nW) \) complexity as 0/1, but can feel slower in practice because the forward loop may process more states.

**One-Sentence Takeaway:** Unbounded knapsack allows unlimited reuse of each item simply by changing the capacity loop from backward to forward.

---

### 8.5 Subset Sum

<a href="../../../assets/images/diagrams/algorithms/08-dp-knapsack/8-5-subset-sum-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/algorithms/08-dp-knapsack/8-5-subset-sum-handwritten.svg" alt="Handwritten: 8.5 Subset Sum" width="30%">
</a>
<a href="../../../assets/images/diagrams/algorithms/08-dp-knapsack/8-5-subset-sum-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/algorithms/08-dp-knapsack/8-5-subset-sum-diagram.svg" alt="Diagram: 8.5 Subset Sum" width="30%">
</a>
<a href="../../../assets/images/diagrams/algorithms/08-dp-knapsack/8-5-subset-sum-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/algorithms/08-dp-knapsack/8-5-subset-sum-sticky.svg" alt="Sticky Note: 8.5 Subset Sum" width="30%">
</a>


**Real-World Analogy:** A cashier needs to give exactly $17 in change using $2, $3, $5, and $7 bills (each at most once). Is it possible?

#### Problem Definition

Given a set of integers \( A \) and a target sum \( S \), determine whether there exists a subset summing to exactly \( S \). This is a boolean 0/1 knapsack where "value" = "weight."

#### Algorithm Steps

1. Initialize boolean DP array of size \( S + 1 \), set \( dp[0] = \) true.
2. For each element \( x \) in \( A \):
   - For sum \( s \) from \( S \) down to \( x \):
     - \( dp[s] = dp[s] \;\text{OR}\; dp[s - x] \)
3. Return \( dp[S] \).

#### Recurrence

\[
dp[i][s] = dp[i-1][s] \;\lor\; dp[i-1][s - A[i]]
\]

#### Pseudocode

```
SubsetSum(A, n, S):
    dp = boolean array of size S+1, dp[0] = true
    for i = 1 to n:
        for s = S down to A[i]:
            dp[s] = dp[s] || dp[s - A[i]]
    return dp[S]
```

#### Step-by-Step Dry Run

**Input:** \( A = [2, 3, 4, 7], S = 9 \)

Initialize: dp = [T, F, F, F, F, F, F, F, F, F]

| Element | Loop \( s \) | Updated dp |
|:-------:|:-----------|:-----------|
| Start | — | [T, F, F, F, F, F, F, F, F, F] |
| **2** | 9→2 | [T, F, **T**, F, F, F, F, F, F, F] |
| **3** | 9→3 | [T, F, T, **T**, F, **T**, F, F, F, F] |
| **4** | 9→4 | [T, F, T, T, **T**, T, **T**, F, **T**, F] |
| **7** | 9→7 | [T, F, T, T, T, T, T, **T**, T, **T**] |

**Result:** dp[9] = true. Subset: {2, 3, 4} = 9, or {2, 7} = 9.

#### C++ Implementation

```cpp
#include <vector>

bool subsetSum(const std::vector<int>& A, int S) {
    std::vector<bool> dp(S + 1, false);
    dp[0] = true;

    for (int x : A) {
        for (int s = S; s >= x; --s) {
            if (dp[s - x]) dp[s] = true;
        }
    }
    return dp[S];
}
```

#### Python Implementation

```python
def subset_sum(arr: list[int], target: int) -> bool:
    dp = [False] * (target + 1)
    dp[0] = True

    for x in arr:
        for s in range(target, x - 1, -1):
            if dp[s - x]:
                dp[s] = True
    return dp[target]
```

#### Java Implementation

```java
public class SubsetSum {
    public static boolean subsetSum(int[] arr, int S) {
        boolean[] dp = new boolean[S + 1];
        dp[0] = true;

        for (int x : arr)
            for (int s = S; s >= x; s--)
                if (dp[s - x]) dp[s] = true;
        return dp[S];
    }
}
```

#### Complexity Analysis

| Aspect | Complexity | Why |
|--------|-----------|-----|
| **Time** | \( O(nS) \) | \( n \) elements × \( S \) capacity. Each cell is \( O(1) \) boolean OR. |
| **Space** | \( O(S) \) | Boolean array. Bitset reduces 8×: `dp |= (dp << x)` |

#### Advantages & Disadvantages

| Advantages | Disadvantages |
|-----------|--------------|
| Simple boolean DP, easy to understand | \( O(nS) \) is impractical for large \( S \) |
| Bitset optimization reduces space/time 8× | Cannot reconstruct subset with 1D bitset |

#### Edge Cases

| Case | Behavior |
|------|----------|
| S = 0 | Always true (empty subset) |
| All elements > S | Returns false |
| S = sum of all | True |

> **Pro Tip:** Subset sum uses backward loop (0/1 style). The boolean DP tracks reachable sums, not values.
>
> **Warning:** When \( S \) is large (\( 10^6 \)), \( O(nS) \) is impractical. For small \( n \) but large \( S \), use meet-in-the-middle.

**One-Sentence Takeaway:** Subset sum is a boolean 0/1 knapsack variant answering reachability using \( O(nS) \) time and \( O(S) \) space.

---

### 8.6 Equal Partition Subset Sum

<a href="../../../assets/images/diagrams/algorithms/08-dp-knapsack/8-6-equal-partition-subset-sum-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/algorithms/08-dp-knapsack/8-6-equal-partition-subset-sum-handwritten.svg" alt="Handwritten: 8.6 Equal Partition Subset Sum" width="30%">
</a>
<a href="../../../assets/images/diagrams/algorithms/08-dp-knapsack/8-6-equal-partition-subset-sum-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/algorithms/08-dp-knapsack/8-6-equal-partition-subset-sum-diagram.svg" alt="Diagram: 8.6 Equal Partition Subset Sum" width="30%">
</a>
<a href="../../../assets/images/diagrams/algorithms/08-dp-knapsack/8-6-equal-partition-subset-sum-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/algorithms/08-dp-knapsack/8-6-equal-partition-subset-sum-sticky.svg" alt="Sticky Note: 8.6 Equal Partition Subset Sum" width="30%">
</a>


**Real-World Analogy:** Two siblings inherit valuables — can they split so each gets exactly half the total value?

#### Problem Definition

Given an integer array, determine if it can be partitioned into two subsets with equal sum.

#### Algorithm Steps

1. Compute total sum. If odd → return false.
2. Target = total / 2.
3. Run subset sum DP.

#### Reduction

\[
\text{EqualPartition}(A) \equiv \text{SubsetSum}(A, \text{total} / 2)
\]

#### Step-by-Step Dry Run

**Input:** \( A = [1, 5, 11, 5] \)

Total = 22, even. Target = 11.

Run subset sum DP for target 11:

| Element | Reachable sums |
|:-------:|:--------------|
| 1 | 0, 1 |
| 5 | 0, 1, 5, 6 |
| 11 | 0, 1, 5, 6, 11, 12 |
| 5 | 0, 1, 5, 6, 10, 11, 12, 16, 17 |

**Result:** dp[11] = true. Partition: {1, 5, 5} and {11}.

#### C++ Implementation

```cpp
#include <vector>
#include <numeric>

bool canPartition(const std::vector<int>& nums) {
    int total = std::accumulate(nums.begin(), nums.end(), 0);
    if (total % 2 != 0) return false;
    return subsetSum(nums, total / 2);
}
```

#### Python Implementation

```python
def can_partition(nums: list[int]) -> bool:
    total = sum(nums)
    if total % 2 != 0:
        return False
    return subset_sum(nums, total // 2)
```

#### Java Implementation

```java
public class EqualPartition {
    public static boolean canPartition(int[] nums) {
        int total = 0;
        for (int x : nums) total += x;
        if (total % 2 != 0) return false;
        return subsetSum(nums, total / 2);
    }
}
```

#### Complexity Analysis

| Aspect | Complexity | Why |
|--------|-----------|-----|
| **Time** | \( O(nT) \) where \( T = \text{total} / 2 \) | Same as subset sum. |
| **Space** | \( O(T) \) | Boolean array. |

**Why odd-total early exit:** Integer partition requires two equal integer halves. An odd total is impossible to split equally. This \( O(1) \) filter avoids massive DP.

#### Advantages & Disadvantages

| Advantages | Disadvantages |
|-----------|--------------|
| Trivial reduction to subset sum | Pseudo-polynomial (grows with sum) |
| Odd-total filter catches ~50% of random inputs | Cannot handle negative numbers |

#### Edge Cases

| Case | Behavior |
|------|----------|
| Odd total | Returns false immediately |
| Empty array | Total = 0, target = 0 → true |
| All zeros | Total = 0 → true |

> **Pro Tip:** Equal partition is an immediate "if odd total → false" filter. No need to run DP if the total is odd.

**One-Sentence Takeaway:** Equal partition reduces to subset sum with target = total/2; the odd-total early exit rejects impossible cases instantly.

---

### 8.7 Coin Change (Minimum Coins)

<a href="../../../assets/images/diagrams/algorithms/08-dp-knapsack/8-7-coin-change-minimum-coins-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/algorithms/08-dp-knapsack/8-7-coin-change-minimum-coins-handwritten.svg" alt="Handwritten: 8.7 Coin Change (Minimum Coins)" width="30%">
</a>
<a href="../../../assets/images/diagrams/algorithms/08-dp-knapsack/8-7-coin-change-minimum-coins-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/algorithms/08-dp-knapsack/8-7-coin-change-minimum-coins-diagram.svg" alt="Diagram: 8.7 Coin Change (Minimum Coins)" width="30%">
</a>
<a href="../../../assets/images/diagrams/algorithms/08-dp-knapsack/8-7-coin-change-minimum-coins-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/algorithms/08-dp-knapsack/8-7-coin-change-minimum-coins-sticky.svg" alt="Sticky Note: 8.7 Coin Change (Minimum Coins)" width="30%">
</a>


**Real-World Analogy:** A vending machine needs to return $0.87 using quarters (25¢), dimes (10¢), nickels (5¢), and pennies (1¢). What is the minimum number of coins?

#### Problem Definition

Given coin denominations \( C \) and amount \( A \), find the minimum coins needed. Each coin is unlimited. Return -1 if impossible.

#### Algorithm Steps

1. Initialize DP array of size \( A + 1 \) with INF.
2. Set \( dp[0] = 0 \).
3. For each amount \( c \) from 1 to \( A \):
   - For each coin:
     - If \( coin \le c \): \( dp[c] = \min(dp[c], \; 1 + dp[c - coin]) \)
4. Return \( dp[A] \) if not INF, else -1.

#### Recurrence

\[
dp[c] = \min_{i: coin_i \le c} (1 + dp[c - coin_i])
\]

**Why unbounded:** Forward loop ensures unlimited coin reuse. Min instead of max because we minimize count.

#### Pseudocode

```python
CoinChange(coins, n, amount):
    dp = array of size amount+1, initialized to INF
    dp[0] = 0
    for c = 1 to amount:
        for i = 1 to n:
            if coins[i] <= c:
                dp[c] = min(dp[c], 1 + dp[c - coins[i]])
    return dp[amount] if dp[amount] != INF else -1
```

#### Step-by-Step Dry Run

**Input:** Coins = [1, 3, 4], Amount = 6

Initialize: dp = [0, INF, INF, INF, INF, INF, INF]

| Amount | Consider coins | dp[c] |
|:------:|:---------------|:-----:|
| 0 | — | 0 |
| 1 | 1: 1+dp[0]=1 | **1** |
| 2 | 1: 1+dp[1]=2 | **2** |
| 3 | 1: 1+dp[2]=3, 3: 1+dp[0]=1 | **1** (coin 3) |
| 4 | 1: 1+dp[3]=2, 3: 1+dp[1]=2, 4: 1+dp[0]=1 | **1** (coin 4) |
| 5 | 1: 1+dp[4]=2, 3: 1+dp[2]=3, 4: 1+dp[1]=2 | **2** (1+4) |
| 6 | 1: 1+dp[5]=3, 3: 1+dp[3]=2, 4: 1+dp[2]=3 | **2** (3+3) |

**Result:** dp[6] = 2. Solution: 3¢ + 3¢.

#### C++ Implementation

```cpp
#include <vector>
#include <algorithm>
#include <climits>

int coinChange(const std::vector<int>& coins, int amount) {
    std::vector<int> dp(amount + 1, INT_MAX);
    dp[0] = 0;

    for (int c = 1; c <= amount; ++c) {
        for (int coin : coins) {
            if (coin <= c && dp[c - coin] != INT_MAX) {
                dp[c] = std::min(dp[c], 1 + dp[c - coin]);
            }
        }
    }
    return dp[amount] == INT_MAX ? -1 : dp[amount];
}
```

#### Python Implementation

```python
def coin_change(coins: list[int], amount: int) -> int:
    INF = float('inf')
    dp = [INF] * (amount + 1)
    dp[0] = 0

    for c in range(1, amount + 1):
        for coin in coins:
            if coin <= c:
                dp[c] = min(dp[c], 1 + dp[c - coin])

    return -1 if dp[amount] == INF else dp[amount]
```

#### Java Implementation

```java
import java.util.Arrays;

public class CoinChange {
    public static int coinChange(int[] coins, int amount) {
        int[] dp = new int[amount + 1];
        Arrays.fill(dp, Integer.MAX_VALUE);
        dp[0] = 0;

        for (int c = 1; c <= amount; c++)
            for (int coin : coins)
                if (coin <= c && dp[c - coin] != Integer.MAX_VALUE)
                    dp[c] = Math.min(dp[c], 1 + dp[c - coin]);

        return dp[amount] == Integer.MAX_VALUE ? -1 : dp[amount];
    }
}
```

#### Complexity Analysis

| Aspect | Complexity | Why |
|--------|-----------|-----|
| **Time** | \( O(nA) \) | \( n \) coins × \( A \) amount. Each cell checks all coins. |
| **Space** | \( O(A) \) | Integer array of size \( A + 1 \). |

#### Advantages & Disadvantages

| Advantages | Disadvantages |
|-----------|--------------|
| Handles arbitrary denominations | INF sentinel must be handled carefully |
| Forward loop models unlimited coins | \( O(nA) \) slow for large amounts |

#### Edge Cases

| Case | Behavior |
|------|----------|
| amount = 0 | Returns 0 |
| No coins | Returns -1 |
| No combination possible | Returns -1 |

> **Pro Tip:** Coin change (min coins) uses forward loop (unbounded). For "number of ways," replace min with sum and set \( dp[0] = 1 \).
>
> **Warning:** Use a large sentinel (\( > \) amount) for INF and always check \( dp[c - coin] \neq \text{INF} \) before comparing.

**One-Sentence Takeaway:** Coin change finds minimum coins using forward-loop unbounded DP with INF sentinel for impossible amounts.

---

### 8.8 Target Sum

<a href="../../../assets/images/diagrams/algorithms/08-dp-knapsack/8-8-target-sum-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/algorithms/08-dp-knapsack/8-8-target-sum-handwritten.svg" alt="Handwritten: 8.8 Target Sum" width="30%">
</a>
<a href="../../../assets/images/diagrams/algorithms/08-dp-knapsack/8-8-target-sum-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/algorithms/08-dp-knapsack/8-8-target-sum-diagram.svg" alt="Diagram: 8.8 Target Sum" width="30%">
</a>
<a href="../../../assets/images/diagrams/algorithms/08-dp-knapsack/8-8-target-sum-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/algorithms/08-dp-knapsack/8-8-target-sum-sticky.svg" alt="Sticky Note: 8.8 Target Sum" width="30%">
</a>


**Real-World Analogy:** In a voting system, each voter supports (+1) or opposes (-1) a proposition. Given the vote counts, can the final margin be exactly \( S \)? How many voting patterns achieve this margin?

#### Problem Definition

Given an array of integers and a target \( S \), assign \( + \) or \( - \) signs to each element to achieve the target. Count the number of valid assignments.

#### Reduction to Subset Sum

Let \( P \) be elements with \( + \) sign, \( N \) with \( - \) sign:
\[
\text{sum}(P) - \text{sum}(N) = S,\quad \text{sum}(P) + \text{sum}(N) = \text{total}
\]
\[
\therefore\; 2 \cdot \text{sum}(P) = \text{total} + S,\quad \text{sum}(P) = \frac{\text{total} + S}{2}
\]

Count subsets summing to \( (\text{total} + S) / 2 \). If odd or \( |S| > \) total, return 0.

#### Algorithm Steps

1. Compute total. If \( (\text{total} + S) \) odd → return 0.
2. Target = \( (\text{total} + S) / 2 \). If target &lt; 0 → return 0.
3. Run counting subset sum: \( dp[s] = dp[s] + dp[s - x] \), backward loop.

#### Step-by-Step Dry Run

**Input:** \( A = [1, 1, 1, 1, 1], S = 3 \)

Total = 5, (5+3) = 8, even. Target = 4.

Initialize: dp = [1, 0, 0, 0, 0]

| Element | dp |
|:-------:|:---|
| Start | [1, 0, 0, 0, 0] |
| 1 | [1, 1, 0, 0, 0] |
| 1 | [1, 2, 1, 0, 0] |
| 1 | [1, 3, 3, 1, 0] |
| 1 | [1, 4, 6, 4, 1] |
| 1 | [1, 5, 10, 10, 5] |

**Result:** dp[4] = 5. There are 5 ways (choose 4 out of 5 elements to be positive).

#### C++ Implementation

```cpp
#include <vector>
#include <numeric>
#include <cstdlib>

int findTargetSumWays(const std::vector<int>& nums, int S) {
    int total = std::accumulate(nums.begin(), nums.end(), 0);
    if ((total + S) % 2 != 0 || std::abs(S) > total) return 0;

    int target = (total + S) / 2;
    if (target < 0) return 0;

    std::vector<int> dp(target + 1, 0);
    dp[0] = 1;

    for (int x : nums)
        for (int s = target; s >= x; --s)
            dp[s] += dp[s - x];

    return dp[target];
}
```

#### Python Implementation

```python
def find_target_sum_ways(nums: list[int], target: int) -> int:
    total = sum(nums)
    if (total + target) % 2 != 0 or abs(target) > total:
        return 0

    s = (total + target) // 2
    if s < 0:
        return 0

    dp = [0] * (s + 1)
    dp[0] = 1

    for x in nums:
        for c in range(s, x - 1, -1):
            dp[c] += dp[c - x]

    return dp[s]
```

#### Java Implementation

```java
public class TargetSum {
    public static int findTargetSumWays(int[] nums, int S) {
        int total = 0;
        for (int x : nums) total += x;

        if ((total + S) % 2 != 0 || Math.abs(S) > total) return 0;

        int target = (total + S) / 2;
        if (target < 0) return 0;

        int[] dp = new int[target + 1];
        dp[0] = 1;

        for (int x : nums)
            for (int s = target; s >= x; s--)
                dp[s] += dp[s - x];

        return dp[target];
    }
}
```

#### Complexity Analysis

| Aspect | Complexity | Why |
|--------|-----------|-----|
| **Time** | \( O(nT) \) where \( T = (\text{total} + S) / 2 \) | Counting subset sum. |
| **Space** | \( O(T) \) | Integer array. |

**Why counting uses + instead of OR:** We count ways, not just feasibility. Each new way to reach sum \( s \) via element \( x \) adds the ways to reach \( s - x \).

#### Advantages & Disadvantages

| Advantages | Disadvantages |
|-----------|--------------|
| Clever reduction transforms sign assignment to subset sum | Requires math insight |
| Same efficient DP | Pseudo-polynomial |

#### Edge Cases

| Case | Behavior |
|------|----------|
| (total + S) odd | Return 0 |
| \( |S| > \) total | Return 0 |
| Empty array, S = 0 | Return 1 |

> **Pro Tip:** Target sum is a clever reduction. Assign + elements to set P and - to set N, solve \( 2 \cdot \text{sum}(P) = \text{total} + S \).
>
> **Remember:** Target sum is a **counting** problem. Use sum DP (\( dp[c] \mathrel{+}= dp[c - v] \)) instead of boolean or max.

**One-Sentence Takeaway:** Target sum reduces to counting subsets with sum \( (\text{total} + S) / 2 \), transforming sign-assignment into a knapsack counting variant.

---

## Knapsack Family Comparison

| Variant | Item Reuse | Algorithm | Time | Space | Key Property |
|---------|-----------|-----------|------|-------|-------------|
| **Fractional** | Divisible | Greedy (sort by ratio) | \( O(n \log n) \) | \( O(1) \) | Only polynomial variant |
| **0/1** | At most once | DP, backward loop | \( O(nW) \) | \( O(W) \) | Classic item selection |
| **Bounded** | Up to \( k_i \) times | Binary splitting → 0/1 DP | \( O(W \sum \log k_i) \) | \( O(W) \) | Generalizes 0/1 & unbounded |
| **Unbounded** | Unlimited | DP, forward loop | \( O(nW) \) | \( O(W) \) | Unlimited item reuse |

**Which variant to use when:**

| Scenario | Variant | Why |
|----------|---------|-----|
| Items are divisible (sand, grain) | Fractional | Greedy works, polynomial time |
| Items are unique, once each | 0/1 | The default choice |
| Items have limited stock | Bounded | Binary splitting for efficiency |
| Items have infinite supply | Unbounded | Forward loop captures reuse |
| "Can we make exact sum X?" | Subset Sum | Boolean DP, 0/1 constraints |
| "Split equally?" | Equal Partition | Subset sum with target = total/2 |
| "Minimum units to make amount?" | Coin Change | Unbounded min-count DP |
| "How many sign assignments?" | Target Sum | Reduce to counting subset sum |

---

## Interview Corner

Classic interview problems that reduce to knapsack:

### Problem 1: Partition Equal Subset Sum (LeetCode 416)

> Given an array `nums`, return `true` if it can be split into two subsets with equal sum.

```cpp
bool canPartition(std::vector<int>& nums) {
    int total = std::accumulate(nums.begin(), nums.end(), 0);
    if (total % 2 != 0) return false;
    return subsetSum(nums, total / 2);
}
```

**Time:** \( O(n \cdot \text{total}/2) \), **Space:** \( O(\text{total}/2) \)

### Problem 2: Target Sum (LeetCode 494)

> Count ways to assign + or - signs to make sum equal to target.

```cpp
int findTargetSumWays(std::vector<int>& nums, int S) {
    int total = std::accumulate(nums.begin(), nums.end(), 0);
    if ((total + S) % 2 != 0 || std::abs(S) > total) return 0;
    int target = (total + S) / 2;
    std::vector<int> dp(target + 1, 0);
    dp[0] = 1;
    for (int x : nums)
        for (int s = target; s >= x; --s)
            dp[s] += dp[s - x];
    return dp[target];
}
```

### Problem 3: Coin Change 2 — Number of Ways (LeetCode 518)

> Count ways to make amount with unlimited coins.

```cpp
int change(int amount, std::vector<int>& coins) {
    std::vector<int> dp(amount + 1, 0);
    dp[0] = 1;
    for (int coin : coins)
        for (int c = coin; c <= amount; ++c)
            dp[c] += dp[c - coin];
    return dp[amount];
}
```

**Forward loop** = unbounded. **Outer coins, inner amount** = combinations (not permutations).

### Problem 4: Ones and Zeroes (LeetCode 474)

> Given binary strings and limits \( m \) (0s) and \( n \) (1s), find largest subset.

```cpp
int findMaxForm(std::vector<std::string>& strs, int m, int n) {
    std::vector<std::vector<int>> dp(m + 1, std::vector<int>(n + 1, 0));
    for (const auto& s : strs) {
        int zeros = std::count(s.begin(), s.end(), '0');
        int ones = s.size() - zeros;
        for (int z = m; z >= zeros; --z)
            for (int o = n; o >= ones; --o)
                dp[z][o] = std::max(dp[z][o], 1 + dp[z - zeros][o - ones]);
    }
    return dp[m][n];
}
```

**Time:** \( O(l \cdot m \cdot n) \), **Space:** \( O(m \cdot n) \)

---

## Applications in Real Systems

### Resource Allocation & Cloud Computing

Cloud providers (AWS, Azure, GCP) use knapsack algorithms for **VM instance placement**. Given server capacity and VM requests with different resource profiles, the scheduler decides placement — a multi-dimensional 0/1 knapsack.

```
Server:  64 CPUs, 256 GB RAM, 10 TB SSD
VMs:     t2.micro (1 CPU, 1 GB) = $0.0116/hr
         t2.small (1 CPU, 2 GB) = $0.023/hr
         t2.medium (2 CPU, 4 GB) = $0.0464/hr
```

### Cryptography

The **Merkle-Hellman knapsack cryptosystem** (1978) was based on subset sum (NP-complete). The private key uses a superincreasing sequence (easy), and the public key disguises it via modular multiplication. Though broken by Shamir in 1984, it was the first public-key cryptosystem after RSA.

### Cutting Stock Problem

Paper mills, steel plants, and textile manufacturers face the **cutting stock problem**: cut raw rolls of fixed width into smaller rolls to minimize waste. This is a bounded/unbounded knapsack depending on available raw material.

```
Raw roll: 100 inches
Orders:   25 in (100 rolls), 30 in (75 rolls), 15 in (200 rolls)
Goal:     Minimize raw rolls used (minimize waste)
```

### Portfolio Optimization

Financial portfolio selection restricts total investment capital (capacity). Each asset has a cost (weight) and expected return (value). Fractional shares → fractional knapsack. Whole shares only → 0/1 knapsack.

### Logistics & Supply Chain

Shipping companies (FedEx, UPS, Maersk) load containers, trucks, and cargo planes by solving knapsack-constrained optimization: maximize shipment value given weight and volume limits.

### Dynamic Programming Framework

```
Subset Sum (boolean)
    ↓
0/1 Knapsack (max value) ← Backward loop ← Counter ← Target Sum (counting)
    ↓               ↓
    Bounded (binary split → 0/1)
    ↓
    Unbounded (forward loop)
        ↓
    Coin Change (min)
        ↓
    Coin Change 2 (ways)
```

> **Pro Tip:** When facing a new problem, ask: (1) Can items be reused? → Forward or backward. (2) Maximize, minimize, count, or check? → max, min, sum, or boolean. (3) Item limits? → 0/1, bounded (with split), or unbounded.

---

### Concept Comparison Table

| Concept | State Definition | Loop Direction | Recurrence | Uses Each Item |
|---------|-----------------|---------------|------------|----------------|
| 0/1 Knapsack | \( dp[c] = \) max value at capacity \( c \) | Backward | max(skip, \( v_i + dp[c - w_i] \)) | At most once |
| Fractional Knapsack | Greedy by ratio | N/A | Take by decreasing \( v_i / w_i \) | Divisible |
| Bounded Knapsack | Max value with item limits | Backward + binary split | max(skip, \( v_i \times t + dp[c - w_i \times t] \)) | Up to \( k_i \) |
| Unbounded Knapsack | \( dp[c] = \) max value at capacity \( c \) | Forward | max(skip, \( v_i + dp[c - w_i] \)) | Unlimited |
| Subset Sum | \( dp[s] = \) is sum \( s \) reachable | Backward | \( dp[s] \;\text{OR}\; dp[s - v_i] \) | At most once |
| Coin Change | \( dp[c] = \) min coins for amount \( c \) | Forward | min(1 + \( dp[c - \text{coin}] \)) | Unlimited |
| Target Sum | \( dp[s] = \) ways to reach sum \( s \) | Backward | \( dp[s] + dp[s - v_i] \) | At most once |

### Quick Reference

| Category | Key Points |
|----------|------------|
| **0/1 Knapsack** | Backward loop, each item once, max value over capacity constraint |
| **Fractional Knapsack** | Greedy by value/weight ratio, only polynomial variant |
| **Bounded Knapsack** | Binary splitting reduces \( k \) copies to \( \log k \) groups |
| **Unbounded** | Forward loop = item reuse, same core recurrence |
| **Subset Sum** | Boolean DP, backward loop, checks reachability not value |
| **Coin Change** | Forward loop, min instead of max, INF sentinel for unreachable |
| **Target Sum** | Math reduce to subset sum counting, odd-total filter |
| **Space Optimization** | 1D always possible, but reconstruction requires 2D table |

### Cross-Application Matrix

| Problem | DSA Interviews | Competitive Programming | System Design | Real-World |
|---------|---------------|----------------------|---------------|------------|
| 0/1 Knapsack | Very common — resource allocation | Standard optimization | Budget allocation | Cargo loading, portfolio selection |
| Fractional Knapsack | Common — greedy comparison | Sorting-based warm-up | Resource scaling | Divisible resource allocation |
| Bounded Knapsack | Less common | Advanced optimization | Inventory systems | Warehouse stocking |
| Unbounded Knapsack | Less common | Coin change variants | Resource scaling | Inventory management |
| Subset Sum | Common — reduction problems | Meet-in-the-middle for large \( S \) | Capacity planning | Payment systems |
| Coin Change | Very common — warm-up to hard | Core CP DP problem | Denomination systems | Vending machines, ATMs |
| Target Sum | Occasionally asked | Counting DP problems | N/A | Sign assignment, opinion polling |

---

## Summary

| Problem | Recurrence Type | Time | Space |
|---------|----------------|------|-------|
| 0/1 knapsack | \( \max(\text{skip}, \text{take}) \), backward loop | \( O(nW) \) | \( O(W) \) |
| Fractional knapsack (greedy) | Sort by \( v_i / w_i \) | \( O(n \log n) \) | \( O(1) \) |
| Bounded knapsack | Binary split → 0/1 DP | \( O(W \sum \log k_i) \) | \( O(W) \) |
| Unbounded knapsack | \( \max(\text{skip}, \text{take}) \), forward loop | \( O(nW) \) | \( O(W) \) |
| Subset sum | \( \lor(\text{skip}, \text{take}) \), backward loop | \( O(nS) \) | \( O(S) \) |
| Coin change (min) | \( \min(1 + dp[c - w_i]) \), forward loop | \( O(nA) \) | \( O(A) \) |
| Target sum | Reduce to subset sum (counting) | \( O(nS) \) | \( O(S) \) |

---

## Exercises

### Chapter Quiz

**Q1.** Why does 0/1 knapsack use a backward loop in the 1D space-optimized version?

- A) To improve cache locality
- B) To prevent using an item more than once (reads from previous row)
- C) To process items in decreasing value order
- D) To avoid integer overflow

<details>
<summary>Answer&lt;/summary&gt;
B) Backward iteration reads \( dp[c - w[i]] \) from the previous row (without the current item), ensuring each item is used at most once.
</details>

**Q2.** What is the first check in equal partition subset sum?

- A) Is the array sorted?
- B) Is the total sum odd?
- C) Is the largest element greater than half the total?
- D) Is there at least one element?

<details>
<summary>Answer&lt;/summary&gt;
B) If total sum is odd, equal partition is impossible — return false immediately without running DP.
</details>

**Q3.** Which recurrence correctly defines coin change (minimum coins)?

- A) \( dp[c] = \min(dp[c], dp[c-1] + 1) \)
- B) \( dp[c] = \min(dp[c], 1 + dp[c - \text{coin}]) \)
- C) \( dp[c] = \max(dp[c], 1 + dp[c - \text{coin}]) \)
- D) \( dp[c] = dp[c] + dp[c - \text{coin}] \)

<details>
<summary>Answer&lt;/summary&gt;
B) \( dp[c] = \min(dp[c], 1 + dp[c - \text{coin}]) \) — add one coin to the optimal solution for the remaining amount.
</details>

**Q4.** What is the time complexity of fractional knapsack?

- A) \( O(n) \)
- B) \( O(n \log n) \)
- C) \( O(nW) \)
- D) \( O(2^n) \)

<details>
<summary>Answer&lt;/summary&gt;
B) \( O(n \log n) \) — sorting dominates; selection loop is \( O(n) \).
</details>

**Q5.** What does binary splitting achieve in bounded knapsack?

- A) Divides items into equal halves
- B) Reduces \( k_i \) copies to \( O(\log k_i) \) groups
- C) Splits capacity into binary powers
- D) Converts bounded to unbounded

<details>
<summary>Answer&lt;/summary&gt;
B) Binary splitting decomposes any count \( k \) into \( \lfloor \log_2 k \rfloor + 1 \) powers-of-two groups, enabling 0/1 DP to simulate any quantity from 1 to \( k \).
</details>

---

## Exercises

### Review Questions

1. Why does 0/1 knapsack DP iterate capacity backward while unbounded knapsack iterates forward?
2. Can the space-optimized 1D approach reconstruct which items are selected? How?
3. Reduce target sum to subset sum. Show the derivation.
4. Explain why binary splitting works for bounded knapsack. Prove any integer \( k \) can be formed using \( \{1, 2, 4, \ldots, 2^p, r\} \).
5. Why can fractional knapsack use greedy while 0/1 cannot?

### Application Problems

6. Implement 0/1 knapsack with reconstruction of the selected items.
7. Solve the unbounded knapsack: denominations [2, 3, 5] with values [3, 4, 6], capacity 10.
8. Given coins [1, 3, 4] and amount 6, use coin change DP to find minimum coins.
9. Determine if [1, 5, 11, 5] can be partitioned equally. Show the DP table.
10. Implement bounded knapsack: items (2, 5, limit=3), (3, 8, limit=2), W=7. Show binary splitting steps.

### Challenge Problem

11. Generalize 0/1 knapsack to **multiple knapsacks**: given \( k \) knapsacks with capacities \( W_1, \ldots, W_k \), maximize total value. Design a DP algorithm and analyze its complexity.
12. Solve the **subset sum counting** problem: given an array, count subsets that sum to exactly \( S \). How does the DP differ from boolean subset sum?
13. Design a DP for **3-partition**: can an array be partitioned into three subsets with equal sum?
