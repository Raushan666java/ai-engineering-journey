ï»¿# Chapter 10: Data Structures & Algorithms Ã¢â€ â€™ GATE CS Preparation

---


## Chapter at a Glance

| Aspect | Details |
|--------|---------|
| Total Questions | 15-22 marks |
| Topics | Arrays, Linked lists, Trees, Graphs, Sorting, DP, Greedy |
| Difficulty | Moderate to High |
| Weightage | 18-22% of GATE CS paper |
| Key Skills | Algorithm analysis, Problem-solving, Optimization |

## Roadmap

```mermaid
flowchart LR
    A[Arrays] --> B[Linked Lists]
    B --> C[Stacks & Queues]
    C --> D[Trees]
    D --> E[Graphs]
    E --> F[Sorting]
    F --> G[Searching]
    G --> H[DP & Greedy]
    H --> I[Algo Analysis]
```

## Concept Comparison

| Concept | Key Insight | Practical Takeaway |
|--------|-------------|-------------------|

| Feature | Arrays | Linked Lists |
|--- |--- |--- |
| Memory allocation | Contiguous | Dynamic (scattered) |
| Random access | O(1) | O(n) |
| Insert/Delete at start | O(n) | O(1) |
| Insert/Delete at end | O(1) | O(n) or O(1) with tail |
| Memory overhead | Low (data only) | High (data + pointer) |
| Cache friendliness | High (spatial locality) | Low |

## Quick Reference

| Term | Definition |
|--- |--- |
| Time Complexity | Running time as function of input size |
| Space Complexity | Memory usage as function of input size |
| Big-O | Upper bound on growth rate |
| Omega | Lower bound |
| Theta | Tight bound |
| Recurrence | Equation defining recursive algorithm time |

## Pro Tips & Reminders

> **Pro Tip:** For algorithm analysis, practice recurrence relation solving using Master Theorem - it saves precious exam time.
>
> **Remember:** Graph algorithms (DFS/BFS, MST, Shortest Path) and Dynamic Programming are the highest weightage topics in GATE CS.


## Topic Weightage Table (GATE 2010ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“2025)

![Data Structures and Algorithms Overview](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms.png)

| Topic | Avg Marks | 2025 | 2024 | 2023 | 2022 | 2021 | 2020 | 2019 | 2018 | 2017 | 2016 | 2015 |
|-------|-----------|------|------|------|------|------|------|------|------|------|------|------|
| Complexity Analysis | 3ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“5 | 4 | 3 | 5 | 4 | 3 | 5 | 3 | 4 | 5 | 3 | 4 |
| Arrays & Matrices | 2ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“4 | 3 | 2 | 3 | 2 | 4 | 2 | 3 | 2 | 2 | 3 | 2 |
| Linked Lists | 1ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“3 | 2 | 1 | 2 | 1 | 2 | 2 | 1 | 3 | 2 | 1 | 2 |
| Stacks & Queues | 2ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“4 | 3 | 4 | 2 | 3 | 2 | 3 | 4 | 2 | 3 | 4 | 2 |
| Trees (BST, AVL, B/B+) | 5ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“8 | 6 | 7 | 8 | 5 | 7 | 6 | 5 | 8 | 6 | 7 | 5 |
| Heaps & Heap Sort | 2ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“4 | 3 | 2 | 4 | 3 | 2 | 3 | 2 | 4 | 3 | 2 | 3 |
| Graphs | 6ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“10 | 8 | 7 | 9 | 10 | 6 | 8 | 7 | 6 | 9 | 8 | 7 |
| Sorting | 3ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“5 | 4 | 3 | 5 | 4 | 3 | 4 | 5 | 3 | 4 | 5 | 3 |
| Searching & Hashing | 2ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“4 | 3 | 4 | 2 | 3 | 4 | 2 | 3 | 4 | 2 | 3 | 4 |

---

## 1. Complexity Analysis

### 1.1 Asymptotic Notations

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/1-1-asymptotic-notations-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/1-1-asymptotic-notations-handwritten.svg" alt="Handwritten: 1.1 Asymptotic Notations" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/1-1-asymptotic-notations-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/1-1-asymptotic-notations-diagram.svg" alt="Diagram: 1.1 Asymptotic Notations" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/1-1-asymptotic-notations-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/1-1-asymptotic-notations-sticky.svg" alt="Sticky Note: 1.1 Asymptotic Notations" width="30%">
</a>


| Notation | Definition | Intuition |
|----------|-----------|-----------|
| **O(g(n))** | { f(n) \| ÃƒÂ¢Ã‹â€ Ã†â€™ c > 0, nÃƒÂ¢Ã¢â‚¬Å¡Ã¢â€šÂ¬ > 0 such that 0 ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â¤ f(n) ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â¤ cÃƒâ€šÃ‚Â·g(n) ÃƒÂ¢Ã‹â€ Ã¢â€šÂ¬ n ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â¥ nÃƒÂ¢Ã¢â‚¬Å¡Ã¢â€šÂ¬ } | Upper bound |
| **ÃƒÅ½Ã‚Â©(g(n))** | { f(n) \| ÃƒÂ¢Ã‹â€ Ã†â€™ c > 0, nÃƒÂ¢Ã¢â‚¬Å¡Ã¢â€šÂ¬ > 0 such that 0 ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â¤ cÃƒâ€šÃ‚Â·g(n) ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â¤ f(n) ÃƒÂ¢Ã‹â€ Ã¢â€šÂ¬ n ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â¥ nÃƒÂ¢Ã¢â‚¬Å¡Ã¢â€šÂ¬ } | Lower bound |
| **ÃƒÅ½Ã‹Å“(g(n))** | { f(n) \| ÃƒÂ¢Ã‹â€ Ã†â€™ cÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â�, cÃƒÂ¢Ã¢â‚¬Å¡Ã¢â‚¬Å¡ > 0, nÃƒÂ¢Ã¢â‚¬Å¡Ã¢â€šÂ¬ > 0 such that cÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â�Ãƒâ€šÃ‚Â·g(n) ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â¤ f(n) ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â¤ cÃƒÂ¢Ã¢â‚¬Å¡Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â·g(n) ÃƒÂ¢Ã‹â€ Ã¢â€šÂ¬ n ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â¥ nÃƒÂ¢Ã¢â‚¬Å¡Ã¢â€šÂ¬ } | Tight bound |
| **o(g(n))** | { f(n) \| ÃƒÂ¢Ã‹â€ Ã¢â€šÂ¬ c > 0, ÃƒÂ¢Ã‹â€ Ã†â€™ nÃƒÂ¢Ã¢â‚¬Å¡Ã¢â€šÂ¬ > 0 such that 0 ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â¤ f(n) &lt; cÃƒâ€šÃ‚Â·g(n) ÃƒÂ¢Ã‹â€ Ã¢â€šÂ¬ n ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â¥ nÃƒÂ¢Ã¢â‚¬Å¡Ã¢â€šÂ¬ } | Loose upper |
| **ÃƒÂ�Ã¢â‚¬Â°(g(n))** | { f(n) \| ÃƒÂ¢Ã‹â€ Ã¢â€šÂ¬ c > 0, ÃƒÂ¢Ã‹â€ Ã†â€™ nÃƒÂ¢Ã¢â‚¬Å¡Ã¢â€šÂ¬ > 0 such that 0 ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â¤ cÃƒâ€šÃ‚Â·g(n) &lt; f(n) ÃƒÂ¢Ã‹â€ Ã¢â€šÂ¬ n ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â¥ nÃƒÂ¢Ã¢â‚¬Å¡Ã¢â€šÂ¬ } | Loose lower |

**Properties:**
- Transitive: f(n) = O(g(n)) and g(n) = O(h(n)) Ã¢â€¡â€™ f(n) = O(h(n))
- Reflexive: f(n) = O(f(n))
- Symmetric for ÃƒÅ½Ã‹Å“ only: f(n) = ÃƒÅ½Ã‹Å“(g(n)) Ã¢â€¡â€� g(n) = ÃƒÅ½Ã‹Å“(f(n))
- Addition: fÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â�(n) + fÃƒÂ¢Ã¢â‚¬Å¡Ã¢â‚¬Å¡(n) = O(max(fÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â�(n), fÃƒÂ¢Ã¢â‚¬Å¡Ã¢â‚¬Å¡(n)))
- Multiplication: fÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â�(n) Ãƒâ€šÃ‚Â· fÃƒÂ¢Ã¢â‚¬Å¡Ã¢â‚¬Å¡(n) = O(fÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â�(n) Ãƒâ€šÃ‚Â· fÃƒÂ¢Ã¢â‚¬Å¡Ã¢â‚¬Å¡(n))

**Common Functions (ordered by growth rate):**
O(1) &lt; O(log log n) < O(log n) < O((log n)Ãƒâ€šÃ‚Â²) < O(ÃƒÂ¢Ã‹â€ Ã…Â¡n) < O(n) < O(n log n) < O(nÃƒâ€šÃ‚Â²) < O(nÃƒâ€šÃ‚Â³) < O(2ÃƒÂ¢Ã‚Â�Ã‚Â¿) < O(n!) < O(nÃƒÂ¢Ã‚Â�Ã‚Â¿)

### 1.2 Recurrence Relations

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/1-2-recurrence-relations-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/1-2-recurrence-relations-handwritten.svg" alt="Handwritten: 1.2 Recurrence Relations" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/1-2-recurrence-relations-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/1-2-recurrence-relations-diagram.svg" alt="Diagram: 1.2 Recurrence Relations" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/1-2-recurrence-relations-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/1-2-recurrence-relations-sticky.svg" alt="Sticky Note: 1.2 Recurrence Relations" width="30%">
</a>


**Substitution Method:** Guess the form, prove by induction.

**Recurrence Tree Method:** Expand recurrence into a tree, sum costs per level.

**Master Theorem:** For T(n) = aÃƒâ€šÃ‚Â·T(n/b) + f(n), a ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â¥ 1, b > 1:

| Case | Condition | Solution |
|------|-----------|----------|
| 1 | f(n) = O(n^{log_b a ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ ÃƒÅ½Ã‚Âµ}) for ÃƒÅ½Ã‚Âµ > 0 | T(n) = ÃƒÅ½Ã‹Å“(n^{log_b a}) |
| 2 | f(n) = ÃƒÅ½Ã‹Å“(n^{log_b a}Ãƒâ€šÃ‚Â·log^k n) for k ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â¥ 0 | T(n) = ÃƒÅ½Ã‹Å“(n^{log_b a}Ãƒâ€šÃ‚Â·log^{k+1} n) |
| 3 | f(n) = ÃƒÅ½Ã‚Â©(n^{log_b a + ÃƒÅ½Ã‚Âµ}) for ÃƒÅ½Ã‚Âµ > 0 AND aÃƒâ€šÃ‚Â·f(n/b) ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â¤ cÃƒâ€šÃ‚Â·f(n) for c &lt; 1 | T(n) = ÃƒÅ½Ã‹Å“(f(n)) |

**Common Recurrences:**

| Recurrence | Algorithm | Complexity |
|------------|-----------|------------|
| T(n) = T(nÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1) + 1 | n! | ÃƒÅ½Ã‹Å“(n) |
| T(n) = T(nÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1) + n | Selection sort | ÃƒÅ½Ã‹Å“(nÃƒâ€šÃ‚Â²) |
| T(n) = 2T(nÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1) + 1 | Tower of Hanoi | ÃƒÅ½Ã‹Å“(2ÃƒÂ¢Ã‚Â�Ã‚Â¿) |
| T(n) = T(n/2) + 1 | Binary search | ÃƒÅ½Ã‹Å“(log n) |
| T(n) = T(n/2) + n | Ã¢â€ â€™ | ÃƒÅ½Ã‹Å“(n) |
| T(n) = 2T(n/2) + n | Merge sort | ÃƒÅ½Ã‹Å“(n log n) |
| T(n) = 2T(n/2) + 1 | Tree traversal | ÃƒÅ½Ã‹Å“(n) |
| T(n) = 2T(n/2) + nÃƒâ€šÃ‚Â² | Ã¢â€ â€™ | ÃƒÅ½Ã‹Å“(nÃƒâ€šÃ‚Â²) |
| T(n) = 7T(n/2) + nÃƒâ€šÃ‚Â² | Strassen's MM | ÃƒÅ½Ã‹Å“(n^{logÃƒÂ¢Ã¢â‚¬Å¡Ã¢â‚¬Å¡7}) ÃƒÂ¢Ã¢â‚¬Â°Ã‹â€  ÃƒÅ½Ã‹Å“(n^{2.81}) |

### 1.3 Amortized Analysis

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/1-3-amortized-analysis-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/1-3-amortized-analysis-handwritten.svg" alt="Handwritten: 1.3 Amortized Analysis" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/1-3-amortized-analysis-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/1-3-amortized-analysis-diagram.svg" alt="Diagram: 1.3 Amortized Analysis" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/1-3-amortized-analysis-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/1-3-amortized-analysis-sticky.svg" alt="Sticky Note: 1.3 Amortized Analysis" width="30%">
</a>


**Aggregate Method:** Compute total cost of n operations, divide by n.

**Accounting Method:** Assign different amortized costs; credit accumulates for expensive ops.

**Potential Method:** Define potential function ÃƒÅ½Ã‚Â¦(DÃƒÂ¡Ã‚ÂµÃ‚Â¢). Amortized cost = actual cost + ÃƒÅ½Ã‚Â¦(DÃƒÂ¡Ã‚ÂµÃ‚Â¢) ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ ÃƒÅ½Ã‚Â¦(D_{iÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1}).

**Example Ã¢â€ â€™ Dynamic Array (table doubling):**
- Actual cost of push: O(1) (most), O(n) (when resizing)
- Amortized cost: O(1) per push
- Aggregate: n pushes cost O(n), so amortized = O(1)

---

## 2. Arrays

### 2.1 Representation in Memory

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/2-1-representation-in-memory-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/2-1-representation-in-memory-handwritten.svg" alt="Handwritten: 2.1 Representation in Memory" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/2-1-representation-in-memory-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/2-1-representation-in-memory-diagram.svg" alt="Diagram: 2.1 Representation in Memory" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/2-1-representation-in-memory-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/2-1-representation-in-memory-sticky.svg" alt="Sticky Note: 2.1 Representation in Memory" width="30%">
</a>


**Row-major order (C/C++):** Address(A[i][j]) = Base + (i ÃƒÆ’Ã¢â‚¬â€� n + j) ÃƒÆ’Ã¢â‚¬â€� size

**Column-major order (Fortran):** Address(A[i][j]) = Base + (j ÃƒÆ’Ã¢â‚¬â€� m + i) ÃƒÆ’Ã¢â‚¬â€� size

**For n-dimensional array A[dÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â�][dÃƒÂ¢Ã¢â‚¬Å¡Ã¢â‚¬Å¡]...[dÃƒÂ¢Ã¢â‚¬Å¡Ã¢â€žÂ¢]:**
- Address = Base + ÃƒÅ½Ã‚Â£_{k=1}^{n} (iÃƒÂ¢Ã¢â‚¬Å¡Ã¢â‚¬â€œ ÃƒÆ’Ã¢â‚¬â€� ÃƒÅ½Ã‚Â _{t=k+1}^{n} dÃƒÂ¢Ã¢â‚¬Å¡Ã…â€œ) ÃƒÆ’Ã¢â‚¬â€� size

### 2.2 Sparse Matrices

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/2-2-sparse-matrices-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/2-2-sparse-matrices-handwritten.svg" alt="Handwritten: 2.2 Sparse Matrices" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/2-2-sparse-matrices-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/2-2-sparse-matrices-diagram.svg" alt="Diagram: 2.2 Sparse Matrices" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/2-2-sparse-matrices-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/2-2-sparse-matrices-sticky.svg" alt="Sticky Note: 2.2 Sparse Matrices" width="30%">
</a>


**Definition:** Matrix with mostly zero entries (nnz &lt;< m ÃƒÆ’Ã¢â‚¬â€� n).

**Representations:**

| Method | Storage | Description |
|--------|---------|-------------|
| Coordinate (COO) | O(nnz ÃƒÆ’Ã¢â‚¬â€� 3) | (row, col, value) triples |
| CSR (Compressed Sparse Row) | O(nnz ÃƒÆ’Ã¢â‚¬â€� 2 + m + 1) | value[], col_index[], row_ptr[] |
| CSC (Compressed Sparse Column) | O(nnz ÃƒÆ’Ã¢â‚¬â€� 2 + n + 1) | value[], row_index[], col_ptr[] |

**CSR Example:**
```
Matrix:
[1 0 2]
[0 3 0]
[4 0 5]

values    = [1, 2, 3, 4, 5]
col_index = [0, 2, 1, 0, 2]
row_ptr   = [0, 2, 3, 5]
```

### 2.3 GATE-Related Array Formulas

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/2-3-gate-related-array-formulas-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/2-3-gate-related-array-formulas-handwritten.svg" alt="Handwritten: 2.3 GATE-Related Array Formulas" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/2-3-gate-related-array-formulas-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/2-3-gate-related-array-formulas-diagram.svg" alt="Diagram: 2.3 GATE-Related Array Formulas" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/2-3-gate-related-array-formulas-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/2-3-gate-related-array-formulas-sticky.svg" alt="Sticky Note: 2.3 GATE-Related Array Formulas" width="30%">
</a>


**2D array A[m][n] stored row-major:**
- A[i][j] = Base + (i ÃƒÆ’Ã¢â‚¬â€� n + j) ÃƒÆ’Ã¢â‚¬â€� element_size

**2D array A[m][n] stored column-major:**
- A[i][j] = Base + (j ÃƒÆ’Ã¢â‚¬â€� m + i) ÃƒÆ’Ã¢â‚¬â€� element_size

**Triangular matrix (lower) in 1D array:**
- Index of A[i][j] (i ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â¥ j) = i(i+1)/2 + j
- Total size = n(n+1)/2

---

## 3. Linked Lists

### 3.1 Types

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/3-1-types-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/3-1-types-handwritten.svg" alt="Handwritten: 3.1 Types" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/3-1-types-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/3-1-types-diagram.svg" alt="Diagram: 3.1 Types" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/3-1-types-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/3-1-types-sticky.svg" alt="Sticky Note: 3.1 Types" width="30%">
</a>


| Type | Node Structure | Memory | Traversal |
|------|---------------|--------|-----------|
| Singly | data + next | O(n) | Forward only |
| Doubly | prev + data + next | O(2n) | Both directions |
| Circular (Singly) | data + next (last Ã¢â€ â€™ head) | O(n) | Continuous |
| Circular (Doubly) | prev + data + next (circular) | O(2n) | Both, continuous |
| XOR List | data + (prev ÃƒÂ¢Ã…Â Ã¢â‚¬Â¢ next) | O(n) (compressed) | Both (XOR trick) |

### 3.2 Operations Complexity

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/3-2-operations-complexity-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/3-2-operations-complexity-handwritten.svg" alt="Handwritten: 3.2 Operations Complexity" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/3-2-operations-complexity-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/3-2-operations-complexity-diagram.svg" alt="Diagram: 3.2 Operations Complexity" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/3-2-operations-complexity-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/3-2-operations-complexity-sticky.svg" alt="Sticky Note: 3.2 Operations Complexity" width="30%">
</a>


| Operation | Singly | Doubly | Circular |
|-----------|--------|--------|----------|
| Insert at head | O(1) | O(1) | O(1) |
| Insert at tail | O(n) | O(1) (with tail ptr) | O(1) |
| Delete at head | O(1) | O(1) | O(1) |
| Delete at tail | O(n) | O(1) | O(n) |
| Search | O(n) | O(n) | O(n) |

### 3.3 Floyd's Cycle Detection (Tortoise & Hare)

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/3-3-floyd-s-cycle-detection-tortoise-hare-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/3-3-floyd-s-cycle-detection-tortoise-hare-handwritten.svg" alt="Handwritten: 3.3 Floyd's Cycle Detection (Tortoise & Hare)" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/3-3-floyd-s-cycle-detection-tortoise-hare-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/3-3-floyd-s-cycle-detection-tortoise-hare-diagram.svg" alt="Diagram: 3.3 Floyd's Cycle Detection (Tortoise & Hare)" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/3-3-floyd-s-cycle-detection-tortoise-hare-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/3-3-floyd-s-cycle-detection-tortoise-hare-sticky.svg" alt="Sticky Note: 3.3 Floyd's Cycle Detection (Tortoise & Hare)" width="30%">
</a>


```
function hasCycle(head):
    slow = fast = head
    while fast ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â  null and fast.next ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â  null:
        slow = slow.next
        fast = fast.next.next
        if slow == fast: return True
    return False
```

**To find start of cycle:**
1. Detect meeting point p
2. Move slow to head, keep fast at p
3. Both move 1 step at a time Ã¢â€ â€™ meet at cycle start

**Proof:** Let cycle length = L, head-to-cycle-start = k. When slow enters cycle, fast is k ahead. They meet at distance (L ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ k mod L) from cycle start. Resetting one pointer to head and moving both at speed 1 gives meeting at cycle start after exactly k steps.

---

## 4. Stacks & Queues

### 4.1 Stack Operations

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/4-1-stack-operations-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/4-1-stack-operations-handwritten.svg" alt="Handwritten: 4.1 Stack Operations" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/4-1-stack-operations-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/4-1-stack-operations-diagram.svg" alt="Diagram: 4.1 Stack Operations" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/4-1-stack-operations-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/4-1-stack-operations-sticky.svg" alt="Sticky Note: 4.1 Stack Operations" width="30%">
</a>


| Operation | Array | Linked List |
|-----------|-------|-------------|
| push(x) | O(1) (amortized) | O(1) |
| pop() | O(1) | O(1) |
| peek() | O(1) | O(1) |
| isEmpty() | O(1) | O(1) |

### 4.2 Queue Operations

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/4-2-queue-operations-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/4-2-queue-operations-handwritten.svg" alt="Handwritten: 4.2 Queue Operations" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/4-2-queue-operations-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/4-2-queue-operations-diagram.svg" alt="Diagram: 4.2 Queue Operations" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/4-2-queue-operations-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/4-2-queue-operations-sticky.svg" alt="Sticky Note: 4.2 Queue Operations" width="30%">
</a>


| Operation | Array (Circular) | Linked List |
|-----------|------------------|-------------|
| enqueue(x) | O(1) | O(1) |
| dequeue() | O(1) | O(1) |
| front() | O(1) | O(1) |

**Circular Queue:** rear = (rear + 1) mod SIZE; front = (front + 1) mod SIZE

**Two-stack queue:** enqueue = push to s1; dequeue = if s2 empty, pop all s1Ã¢â€ â€™s2, then pop s2.

### 4.3 Applications

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/4-3-applications-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/4-3-applications-handwritten.svg" alt="Handwritten: 4.3 Applications" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/4-3-applications-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/4-3-applications-diagram.svg" alt="Diagram: 4.3 Applications" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/4-3-applications-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/4-3-applications-sticky.svg" alt="Sticky Note: 4.3 Applications" width="30%">
</a>


**Parenthesis Matching:**
```
function isValid(s):
    stack = []
    for c in s:
        if c in '([{': stack.push(c)
        else: if stack.isEmpty() or !match(stack.pop(), c): return False
    return stack.isEmpty()
```

**Infix to Postfix (Shunting Yard):**
- Operands Ã¢â€ â€™ output directly
- Operators: pop while stack top has ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â¥ precedence (left-assoc) or > (right-assoc), then push
- '(' Ã¢â€ â€™ push; ')' Ã¢â€ â€™ pop until '('

**Postfix Evaluation:**
```
for each token:
    if token is operand: push(token)
    else: b = pop(), a = pop(), push(a op b)
return pop()
```

### 4.4 Expression Conversion Summary

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/4-4-expression-conversion-summary-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/4-4-expression-conversion-summary-handwritten.svg" alt="Handwritten: 4.4 Expression Conversion Summary" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/4-4-expression-conversion-summary-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/4-4-expression-conversion-summary-diagram.svg" alt="Diagram: 4.4 Expression Conversion Summary" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/4-4-expression-conversion-summary-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/4-4-expression-conversion-summary-sticky.svg" alt="Sticky Note: 4.4 Expression Conversion Summary" width="30%">
</a>


| Expression | Order | Example |
|------------|-------|---------|
| Infix | operand operator operand | A + B ÃƒÆ’Ã¢â‚¬â€� C |
| Prefix | operator operand operand | + A ÃƒÆ’Ã¢â‚¬â€� B C |
| Postfix | operand operand operator | A B C ÃƒÆ’Ã¢â‚¬â€� + |

**Evaluation direction:** Postfix uses a single stack. Prefix can be evaluated right-to-left.

---

## 5. Trees

### 5.1 Binary Tree Terminologies

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-1-binary-tree-terminologies-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-1-binary-tree-terminologies-handwritten.svg" alt="Handwritten: 5.1 Binary Tree Terminologies" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-1-binary-tree-terminologies-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-1-binary-tree-terminologies-diagram.svg" alt="Diagram: 5.1 Binary Tree Terminologies" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-1-binary-tree-terminologies-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-1-binary-tree-terminologies-sticky.svg" alt="Sticky Note: 5.1 Binary Tree Terminologies" width="30%">
</a>


| Property | Formula |
|----------|---------|
| Max nodes at level i | 2ÃƒÂ¢Ã‚Â�Ã‚Â± |
| Max nodes in tree of height h | 2ÃƒÅ Ã‚Â°ÃƒÂ¢Ã‚Â�Ã‚ÂºÃƒâ€šÃ‚Â¹ ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ 1 |
| Min height for n nodes | ÃƒÂ¢Ã…â€™Ã‹â€ logÃƒÂ¢Ã¢â‚¬Å¡Ã¢â‚¬Å¡(n+1)ÃƒÂ¢Ã…â€™Ã¢â‚¬Â° ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ 1 |
| For n nodes, leaf count L | L = I + 1 (I = internal nodes with degree 2) |
| Full binary tree | Every node has 0 or 2 children |
| Complete binary tree | All levels full except possibly last, left-packed |
| Perfect binary tree | All levels completely full |

### 5.2 Binary Tree Traversals

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-2-binary-tree-traversals-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-2-binary-tree-traversals-handwritten.svg" alt="Handwritten: 5.2 Binary Tree Traversals" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-2-binary-tree-traversals-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-2-binary-tree-traversals-diagram.svg" alt="Diagram: 5.2 Binary Tree Traversals" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-2-binary-tree-traversals-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-2-binary-tree-traversals-sticky.svg" alt="Sticky Note: 5.2 Binary Tree Traversals" width="30%">
</a>


| Traversal | Order | Use Case |
|-----------|-------|----------|
| Preorder | Root Ã¢â€ â€™ Left Ã¢â€ â€™ Right | Copy tree, serialize |
| Inorder | Left Ã¢â€ â€™ Root Ã¢â€ â€™ Right | BST sort |
| Postorder | Left Ã¢â€ â€™ Right Ã¢â€ â€™ Root | Delete tree, expression eval |
| Level-order | BFS by level | Min height, shortest path |

**From traversals:** Inorder + (preorder/postorder) Ã¢â€ â€™ unique tree. Only inorder alone Ã¢â€ â€™ no.

**Morris Traversal (Threaded, O(1) space):**
```
function morrisInorder(root):
    curr = root
    while curr ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â  null:
        if curr.left == null:
            visit(curr); curr = curr.right
        else:
            pred = curr.left
            while pred.right ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â  null and pred.right ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â  curr:
                pred = pred.right
            if pred.right == null:
                pred.right = curr; curr = curr.left
            else:
                pred.right = null; visit(curr); curr = curr.right
```

### 5.3 Binary Search Tree

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-3-binary-search-tree-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-3-binary-search-tree-handwritten.svg" alt="Handwritten: 5.3 Binary Search Tree" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-3-binary-search-tree-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-3-binary-search-tree-diagram.svg" alt="Diagram: 5.3 Binary Search Tree" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-3-binary-search-tree-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-3-binary-search-tree-sticky.svg" alt="Sticky Note: 5.3 Binary Search Tree" width="30%">
</a>


**Operations and complexity (average / worst):**

| Operation | Average | Worst (skewed) |
|-----------|---------|----------------|
| Search | O(log n) | O(n) |
| Insert | O(log n) | O(n) |
| Delete | O(log n) | O(n) |

**BST Deletion cases:**
1. Leaf: remove directly
2. One child: replace with child
3. Two children: replace with inorder successor (or predecessor), then delete it

**Inorder predecessor:** max of left subtree
**Inorder successor:** min of right subtree

### 5.4 Important Tree Problems

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-4-important-tree-problems-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-4-important-tree-problems-handwritten.svg" alt="Handwritten: 5.4 Important Tree Problems" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-4-important-tree-problems-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-4-important-tree-problems-diagram.svg" alt="Diagram: 5.4 Important Tree Problems" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-4-important-tree-problems-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-4-important-tree-problems-sticky.svg" alt="Sticky Note: 5.4 Important Tree Problems" width="30%">
</a>


**Diameter of a Binary Tree:** Longest path between any two nodes (may not pass through root).

```
function diameter(root):
    max_diameter = 0
    function height(node):
        if node == null: return 0
        L = height(node.left)
        R = height(node.right)
        max_diameter = max(max_diameter, L + R)
        return 1 + max(L, R)
    height(root)
    return max_diameter
```

**Lowest Common Ancestor (LCA):**
```
function lca(root, p, q):
    if root == null or root == p or root == q: return root
    L = lca(root.left, p, q)
    R = lca(root.right, p, q)
    if L and R: return root
    return L if L != null else R
```

**Maximum Path Sum:** Similar to diameter, but sum instead of count.

### 5.5 Threaded Binary Tree

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-5-threaded-binary-tree-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-5-threaded-binary-tree-handwritten.svg" alt="Handwritten: 5.5 Threaded Binary Tree" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-5-threaded-binary-tree-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-5-threaded-binary-tree-diagram.svg" alt="Diagram: 5.5 Threaded Binary Tree" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-5-threaded-binary-tree-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-5-threaded-binary-tree-sticky.svg" alt="Sticky Note: 5.5 Threaded Binary Tree" width="30%">
</a>


**One-way threading:** Right null pointers point to inorder successor.
**Two-way threading:** Left null pointers point to inorder predecessor.

**Advantage:** Traversal without stack or recursion (O(1) space).

### 5.6 Expression Trees

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-6-expression-trees-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-6-expression-trees-handwritten.svg" alt="Handwritten: 5.6 Expression Trees" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-6-expression-trees-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-6-expression-trees-diagram.svg" alt="Diagram: 5.6 Expression Trees" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-6-expression-trees-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-6-expression-trees-sticky.svg" alt="Sticky Note: 5.6 Expression Trees" width="30%">
</a>


- Leaf nodes = operands
- Internal nodes = operators
- Inorder traversal = infix expression (with parentheses for precedence)
- Preorder = prefix expression
- Postorder = postfix expression

### 5.7 AVL Trees

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-7-avl-trees-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-7-avl-trees-handwritten.svg" alt="Handwritten: 5.7 AVL Trees" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-7-avl-trees-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-7-avl-trees-diagram.svg" alt="Diagram: 5.7 AVL Trees" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-7-avl-trees-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-7-avl-trees-sticky.svg" alt="Sticky Note: 5.7 AVL Trees" width="30%">
</a>


**Balance Factor:** bf(node) = height(left) ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ height(right) ÃƒÂ¢Ã‹â€ Ã‹â€  {ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1, 0, 1}

**Rotations:**

| Case | Pattern | Rotation |
|------|---------|----------|
| LL | Left-Left | Right rotate on unbalanced node |
| RR | Right-Right | Left rotate on unbalanced node |
| LR | Left-Right | Left rotate on left child, then right rotate on node |
| RL | Right-Left | Right rotate on right child, then left rotate on node |

**Complexity:** Search O(log n), Insert O(log n), Delete O(log n)

**Minimum nodes in AVL tree of height h:** N(h) = N(hÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1) + N(hÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢2) + 1, N(0) = 1, N(1) = 2

### 5.8 B-Trees and B+ Trees

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-8-b-trees-and-b-trees-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-8-b-trees-and-b-trees-handwritten.svg" alt="Handwritten: 5.8 B-Trees and B+ Trees" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-8-b-trees-and-b-trees-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-8-b-trees-and-b-trees-diagram.svg" alt="Diagram: 5.8 B-Trees and B+ Trees" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-8-b-trees-and-b-trees-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-8-b-trees-and-b-trees-sticky.svg" alt="Sticky Note: 5.8 B-Trees and B+ Trees" width="30%">
</a>


**B-Tree of order m:**
- Root: 1 to 2m keys
- Internal nodes: m to 2m keys (except root)
- All leaves at same depth
- Each internal node with k keys has k+1 children
- Search/Insert/Delete: O(log_m n)

**B+ Tree:**
- Internal nodes: only keys (routers), no data pointers
- Leaves: all keys + data pointers, linked sequentially
- Better cache performance, efficient range queries (leaf linked list)

### 5.9 Red-Black Trees

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-9-red-black-trees-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-9-red-black-trees-handwritten.svg" alt="Handwritten: 5.9 Red-Black Trees" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-9-red-black-trees-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-9-red-black-trees-diagram.svg" alt="Diagram: 5.9 Red-Black Trees" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-9-red-black-trees-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-9-red-black-trees-sticky.svg" alt="Sticky Note: 5.9 Red-Black Trees" width="30%">
</a>


**Properties:**
1. Every node is red or black
2. Root is black
3. Leaves (null) are black
4. Red node cannot have red child (no two consecutive reds)
5. All paths from root to leaf have same #black nodes (black-height)

**Operations:** Search O(log n), Insert O(log n), Delete O(log n)

**Insertion fix-up:** Depending on uncle's color and relative position, perform rotations and color flips.

**Black-height:** bh(x) = number of black nodes on path from x to leaf (excluding x). Tree height ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â¤ 2 ÃƒÆ’Ã¢â‚¬â€� black-height.

**2-3-4 tree correspondence:** Every Red-Black tree corresponds to a 2-3-4 tree.

### 5.10 Tries

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-10-tries-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-10-tries-handwritten.svg" alt="Handwritten: 5.10 Tries" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-10-tries-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-10-tries-diagram.svg" alt="Diagram: 5.10 Tries" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-10-tries-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/5-10-tries-sticky.svg" alt="Sticky Note: 5.10 Tries" width="30%">
</a>


**Trie (Prefix Tree):**
- n-ary tree for string storage/retrieval
- Insert: O(|s|) where |s| = string length
- Search: O(|s|)
- Prefix search: O(|prefix|) + O(number of completions)
- Space: O(ÃƒÅ½Ã‚Â£ total chars)

**Compressed Trie (Radix Tree / Patricia Trie):** Compress chains of single-child nodes.

---

## 6. Heaps

### 6.1 Binary Heap

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/6-1-binary-heap-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/6-1-binary-heap-handwritten.svg" alt="Handwritten: 6.1 Binary Heap" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/6-1-binary-heap-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/6-1-binary-heap-diagram.svg" alt="Diagram: 6.1 Binary Heap" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/6-1-binary-heap-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/6-1-binary-heap-sticky.svg" alt="Sticky Note: 6.1 Binary Heap" width="30%">
</a>


| Property | Min-Heap | Max-Heap |
|----------|----------|----------|
| Root | Minimum element | Maximum element |
| Parent of i | ÃƒÂ¢Ã…â€™Ã…Â (iÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1)/2ÃƒÂ¢Ã…â€™Ã¢â‚¬Â¹ | Same |
| Left child of i | 2i + 1 | Same |
| Right child of i | 2i + 2 | Same |
| A[parent] ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â¤ A[child] | Yes | No |
| A[parent] ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â¥ A[child] | No | Yes |

### 6.2 Operations

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/6-2-operations-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/6-2-operations-handwritten.svg" alt="Handwritten: 6.2 Operations" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/6-2-operations-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/6-2-operations-diagram.svg" alt="Diagram: 6.2 Operations" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/6-2-operations-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/6-2-operations-sticky.svg" alt="Sticky Note: 6.2 Operations" width="30%">
</a>


| Operation | Complexity | Description |
|-----------|------------|-------------|
| buildHeap() | O(n) | Bottom-up heapify |
| insert(x) | O(log n) | Bubble-up |
| extractMin() | O(log n) | Swap root with last, bubble-down |
| getMin() | O(1) | Return root |
| decreaseKey(i, val) | O(log n) | Bubble-up from i |
| delete(i) | O(log n) | decreaseKey to -ÃƒÂ¢Ã‹â€ Ã…Â¾, extractMin |

**Build heap proof:** Sum of heights of nodes = n ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ (number of leaves at levels except last) = O(n)

### 6.3 Heap Sort

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/6-3-heap-sort-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/6-3-heap-sort-handwritten.svg" alt="Handwritten: 6.3 Heap Sort" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/6-3-heap-sort-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/6-3-heap-sort-diagram.svg" alt="Diagram: 6.3 Heap Sort" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/6-3-heap-sort-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/6-3-heap-sort-sticky.svg" alt="Sticky Note: 6.3 Heap Sort" width="30%">
</a>


```
function heapSort(arr):
    buildMaxHeap(arr)
    for i = n-1 down to 1:
        swap(arr[0], arr[i])
        heapSize--
        maxHeapify(arr, 0)
```

**Complexity:** O(n log n)
**Space:** O(1) in-place
**Stability:** NOT stable
**Not adaptive** Ã¢â€ â€™ always O(n log n)

### 6.4 Priority Queue

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/6-4-priority-queue-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/6-4-priority-queue-handwritten.svg" alt="Handwritten: 6.4 Priority Queue" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/6-4-priority-queue-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/6-4-priority-queue-diagram.svg" alt="Diagram: 6.4 Priority Queue" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/6-4-priority-queue-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/6-4-priority-queue-sticky.svg" alt="Sticky Note: 6.4 Priority Queue" width="30%">
</a>


| Implementation | insert | extractMin | decreaseKey | Union |
|----------------|--------|------------|-------------|-------|
| Binary Heap | O(log n) | O(log n) | O(log n) | O(n) |
| Binomial Heap | O(log n) | O(log n) | O(log n) | O(log n) |
| Fibonacci Heap | O(1) | O(log n) amortized | O(1) amortized | O(1) |

---

## 7. Graphs

### 7.1 Representations

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/7-1-representations-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/7-1-representations-handwritten.svg" alt="Handwritten: 7.1 Representations" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/7-1-representations-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/7-1-representations-diagram.svg" alt="Diagram: 7.1 Representations" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/7-1-representations-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/7-1-representations-sticky.svg" alt="Sticky Note: 7.1 Representations" width="30%">
</a>


| Representation | Space | Edge Check | Neighbors | Add Edge |
|----------------|-------|------------|-----------|----------|
| Adjacency Matrix | O(VÃƒâ€šÃ‚Â²) | O(1) | O(V) | O(1) |
| Adjacency List | O(V + E) | O(deg(v)) | O(deg(v)) | O(1) |
| Edge List | O(E) | O(E) | O(E) | O(1) |

**When to use what:**
- Dense graph (E ÃƒÂ¢Ã¢â‚¬Â°Ã‹â€  VÃƒâ€šÃ‚Â²) Ã¢â€ â€™ Adjacency Matrix
- Sparse graph (E &lt;< VÃƒâ€šÃ‚Â²) Ã¢â€ â€™ Adjacency List

### 7.2 BFS (Breadth-First Search)

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/7-2-bfs-breadth-first-search-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/7-2-bfs-breadth-first-search-handwritten.svg" alt="Handwritten: 7.2 BFS (Breadth-First Search)" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/7-2-bfs-breadth-first-search-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/7-2-bfs-breadth-first-search-diagram.svg" alt="Diagram: 7.2 BFS (Breadth-First Search)" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/7-2-bfs-breadth-first-search-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/7-2-bfs-breadth-first-search-sticky.svg" alt="Sticky Note: 7.2 BFS (Breadth-First Search)" width="30%">
</a>


```
function bfs(start):
    visited = {start}; queue = [start]
    while queue not empty:
        v = queue.dequeue()
        for u in adjacency[v]:
            if u not in visited:
                visited.add(u)
                queue.enqueue(u)
                parent[u] = v
```

**Properties:**
- Finds shortest path in unweighted graph
- Complexity: O(V + E)
- BFS tree has shortest path from source to all reachable nodes
- Uses queue

### 7.3 DFS (Depth-First Search)

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/7-3-dfs-depth-first-search-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/7-3-dfs-depth-first-search-handwritten.svg" alt="Handwritten: 7.3 DFS (Depth-First Search)" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/7-3-dfs-depth-first-search-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/7-3-dfs-depth-first-search-diagram.svg" alt="Diagram: 7.3 DFS (Depth-First Search)" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/7-3-dfs-depth-first-search-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/7-3-dfs-depth-first-search-sticky.svg" alt="Sticky Note: 7.3 DFS (Depth-First Search)" width="30%">
</a>


```
function dfs(start):
    visited.add(start)
    for u in adjacency[start]:
        if u not in visited:
            parent[u] = start
            dfs(u)
```

**Properties:**
- Complexity: O(V + E)
- Uses stack (recursion or explicit)
- Produces DFS forest with tree, back, forward, and cross edges

**Edge classification:**
| Edge | Condition |
|------|-----------|
| Tree | v is first discovered from u |
| Back | v is ancestor of u (cycle detection) |
| Forward | v is descendant of u (already visited) |
| Cross | None of the above |

**Applications:**
- Cycle detection (back edge exists) Ã¢â€ â€™ O(V + E)
- Topological sort (reverse of finish times)
- Strongly connected components

### 7.4 Topological Sort

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/7-4-topological-sort-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/7-4-topological-sort-handwritten.svg" alt="Handwritten: 7.4 Topological Sort" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/7-4-topological-sort-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/7-4-topological-sort-diagram.svg" alt="Diagram: 7.4 Topological Sort" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/7-4-topological-sort-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/7-4-topological-sort-sticky.svg" alt="Sticky Note: 7.4 Topological Sort" width="30%">
</a>


**Definition:** Linear ordering of DAG vertices such that for every edge uÃ¢â€ â€™v, u appears before v.

**Kahn's algorithm (BFS-based):**
```
function topologicalSort(graph):
    inDegree = computeInDegrees(graph)
    queue = [v for v in vertices if inDegree[v] == 0]
    result = []
    while queue not empty:
        v = queue.dequeue(); result.append(v)
        for u in adjacency[v]:
            inDegree[u]--
            if inDegree[u] == 0: queue.enqueue(u)
    return result if len(result) == V else "Cycle detected"
```

**DFS-based:** Perform DFS, append to list on finish (exit time), reverse at end.

**Complexity:** O(V + E)

### 7.5 Minimum Spanning Tree

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/7-5-minimum-spanning-tree-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/7-5-minimum-spanning-tree-handwritten.svg" alt="Handwritten: 7.5 Minimum Spanning Tree" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/7-5-minimum-spanning-tree-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/7-5-minimum-spanning-tree-diagram.svg" alt="Diagram: 7.5 Minimum Spanning Tree" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/7-5-minimum-spanning-tree-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/7-5-minimum-spanning-tree-sticky.svg" alt="Sticky Note: 7.5 Minimum Spanning Tree" width="30%">
</a>


**Definition:** Subset of edges connecting all vertices with minimum total weight.

| Algorithm | Strategy | Complexity | Data Structure |
|-----------|----------|------------|----------------|
| Prim's | Grow single tree | O((V+E) log V) | Binary heap (priority queue) |
| Kruskal's | Add smallest safe edges | O(E log V) | Union-Find (DSU) |

**Prim's Algorithm:**
```
function prim(graph, start):
    priorityQueue = [(0, start)]  // (weight, vertex)
    visited = set()
    total = 0
    while priorityQueue not empty:
        w, v = pq.extractMin()
        if v in visited: continue
        visited.add(v); total += w
        for (u, w2) in adjacency[v]:
            if u not in visited: pq.insert((w2, u))
    return total
```

**Kruskal's Algorithm:**
```
function kruskal(edges, V):
    sort(edges by weight)
    dsu = UnionFind(V)
    mst = []
    for (u, v, w) in edges:
        if dsu.find(u) != dsu.find(v):
            dsu.union(u, v)
            mst.append((u, v, w))
    return mst
```

### 7.6 Shortest Path Algorithms

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/7-6-shortest-path-algorithms-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/7-6-shortest-path-algorithms-handwritten.svg" alt="Handwritten: 7.6 Shortest Path Algorithms" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/7-6-shortest-path-algorithms-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/7-6-shortest-path-algorithms-diagram.svg" alt="Diagram: 7.6 Shortest Path Algorithms" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/7-6-shortest-path-algorithms-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/7-6-shortest-path-algorithms-sticky.svg" alt="Sticky Note: 7.6 Shortest Path Algorithms" width="30%">
</a>


| Algorithm | Type | Complexity | Limitation |
|-----------|------|------------|------------|
| Dijkstra | Single-source | O((V+E) log V) | No negative edges |
| Bellman-Ford | Single-source | O(VE) | Handles negative, detects cycles |
| Floyd-Warshall | All-pairs | O(VÃƒâ€šÃ‚Â³) | Handles negative, no neg cycles |
| DAG Shortest Path | Single-source (DAG) | O(V+E) | Works only on DAGs |

**Dijkstra's Algorithm:**
```
function dijkstra(graph, start):
    dist = [ÃƒÂ¢Ã‹â€ Ã…Â¾] * V; dist[start] = 0
    pq = [(0, start)]
    while pq not empty:
        d, v = pq.extractMin()
        if d > dist[v]: continue
        for (u, w) in adjacency[v]:
            if dist[v] + w < dist[u]:
                dist[u] = dist[v] + w
                pq.insert((dist[u], u))
    return dist
```

**Bellman-Ford Algorithm:**
```
function bellmanFord(edges, V, start):
    dist = [ÃƒÂ¢Ã‹â€ Ã…Â¾] * V; dist[start] = 0
    for i in range(V-1):
        for (u, v, w) in edges:
            if dist[u] != ÃƒÂ¢Ã‹â€ Ã…Â¾ and dist[u] + w < dist[v]:
                dist[v] = dist[u] + w
    // Vth iteration for negative cycle detection
    for (u, v, w) in edges:
        if dist[u] != ÃƒÂ¢Ã‹â€ Ã…Â¾ and dist[u] + w < dist[v]:
            return "Negative cycle"
    return dist
```

### 7.7 Strongly Connected Components

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/7-7-strongly-connected-components-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/7-7-strongly-connected-components-handwritten.svg" alt="Handwritten: 7.7 Strongly Connected Components" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/7-7-strongly-connected-components-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/7-7-strongly-connected-components-diagram.svg" alt="Diagram: 7.7 Strongly Connected Components" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/7-7-strongly-connected-components-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/7-7-strongly-connected-components-sticky.svg" alt="Sticky Note: 7.7 Strongly Connected Components" width="30%">
</a>


**Kosaraju's Algorithm:**
1. Perform DFS on original graph, record finish times
2. Compute transpose (reverse all edges)
3. Perform DFS on transposed graph in decreasing finish time order
4. Each DFS tree = one SCC

**Tarjan's Algorithm:**
- Single DFS using low-link values and a stack
- Complexity: O(V + E)

**Applications:** Condensation graphs, 2-SAT, dependency analysis.

### 7.8 Union-Find (Disjoint Set Union)

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/7-8-union-find-disjoint-set-union-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/7-8-union-find-disjoint-set-union-handwritten.svg" alt="Handwritten: 7.8 Union-Find (Disjoint Set Union)" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/7-8-union-find-disjoint-set-union-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/7-8-union-find-disjoint-set-union-diagram.svg" alt="Diagram: 7.8 Union-Find (Disjoint Set Union)" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/7-8-union-find-disjoint-set-union-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/7-8-union-find-disjoint-set-union-sticky.svg" alt="Sticky Note: 7.8 Union-Find (Disjoint Set Union)" width="30%">
</a>


```
class UnionFind:
    parent = [i for i in range(n)]
    rank = [0] * n

    function find(x):
        if parent[x] != x:
            parent[x] = find(parent[x])  // path compression
        return parent[x]

    function union(x, y):
        px, py = find(x), find(y)
        if px == py: return False
        if rank[px] < rank[py]: parent[px] = py  // union by rank
        elif rank[px] > rank[py]: parent[py] = px
        else: parent[py] = px; rank[px]++
        return True
```

**Complexity:** O(ÃƒÅ½Ã‚Â±(n)) per operation where ÃƒÅ½Ã‚Â± is inverse Ackermann function (essentially O(1)).

---

## 8. Sorting

### 8.1 Comparison Sorts Ã¢â€ â€™ Complexity Summary

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/8-1-comparison-sorts-complexity-summary-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/8-1-comparison-sorts-complexity-summary-handwritten.svg" alt="Handwritten: 8.1 Comparison Sorts Ã¢â€ â€™ Complexity Summary" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/8-1-comparison-sorts-complexity-summary-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/8-1-comparison-sorts-complexity-summary-diagram.svg" alt="Diagram: 8.1 Comparison Sorts Ã¢â€ â€™ Complexity Summary" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/8-1-comparison-sorts-complexity-summary-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/8-1-comparison-sorts-complexity-summary-sticky.svg" alt="Sticky Note: 8.1 Comparison Sorts Ã¢â€ â€™ Complexity Summary" width="30%">
</a>


| Algorithm | Best | Average | Worst | Space | Stable | In-place | Adaptive |
|-----------|------|---------|-------|-------|--------|----------|----------|
| Bubble | O(n) | O(nÃƒâ€šÃ‚Â²) | O(nÃƒâ€šÃ‚Â²) | O(1) | Yes | Yes | Yes |
| Insertion | O(n) | O(nÃƒâ€šÃ‚Â²) | O(nÃƒâ€šÃ‚Â²) | O(1) | Yes | Yes | Yes |
| Selection | O(nÃƒâ€šÃ‚Â²) | O(nÃƒâ€šÃ‚Â²) | O(nÃƒâ€šÃ‚Â²) | O(1) | No | Yes | No |
| Merge | O(n log n) | O(n log n) | O(n log n) | O(n) | Yes | No | No |
| Quick | O(n log n) | O(n log n) | O(nÃƒâ€šÃ‚Â²) | O(log n) | No | Yes | No |
| Heap | O(n log n) | O(n log n) | O(n log n) | O(1) | No | Yes | No |
| Shell | O(n log n) | O(n^{4/3}) | O(n^{3/2}) | O(1) | No | Yes | Yes |
| Timsort | O(n) | O(n log n) | O(n log n) | O(n) | Yes | Yes | Yes |

**Comparison-based sort lower bound:** ÃƒÅ½Ã‚Â©(n log n) Ã¢â€ â€™ proven by decision tree with n! leaves.

### 8.2 Quick Sort Details

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/8-2-quick-sort-details-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/8-2-quick-sort-details-handwritten.svg" alt="Handwritten: 8.2 Quick Sort Details" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/8-2-quick-sort-details-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/8-2-quick-sort-details-diagram.svg" alt="Diagram: 8.2 Quick Sort Details" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/8-2-quick-sort-details-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/8-2-quick-sort-details-sticky.svg" alt="Sticky Note: 8.2 Quick Sort Details" width="30%">
</a>


```
function quickSort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        quickSort(arr, low, pi-1)
        quickSort(arr, pi+1, high)

function partition(arr, low, high):  // Lomuto
    pivot = arr[high]
    i = low - 1
    for j = low to high-1:
        if arr[j] <= pivot: i++; swap(arr[i], arr[j])
    swap(arr[i+1], arr[high])
    return i+1
```

**Hoare Partition:**
```
function partition(arr, low, high):
    pivot = arr[low]; i = low-1; j = high+1
    while True:
        do i++ while arr[i] < pivot
        do j-- while arr[j] > pivot
        if i >= j: return j
        swap(arr[i], arr[j])
```

**Worst case:** Already sorted or reverse sorted (Lomuto with last/first pivot). Avoided by:
- Random pivot
- Median-of-three pivot selection

### 8.3 Merge Sort Details

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/8-3-merge-sort-details-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/8-3-merge-sort-details-handwritten.svg" alt="Handwritten: 8.3 Merge Sort Details" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/8-3-merge-sort-details-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/8-3-merge-sort-details-diagram.svg" alt="Diagram: 8.3 Merge Sort Details" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/8-3-merge-sort-details-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/8-3-merge-sort-details-sticky.svg" alt="Sticky Note: 8.3 Merge Sort Details" width="30%">
</a>


```
function mergeSort(arr, left, right):
    if left < right:
        mid = left + (right-left)/2
        mergeSort(arr, left, mid)
        mergeSort(arr, mid+1, right)
        merge(arr, left, mid, right)
```

**In-place merge:** O(n log n) with O(1) space possible but more complex.

### 8.4 Non-Comparison Sorts

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/8-4-non-comparison-sorts-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/8-4-non-comparison-sorts-handwritten.svg" alt="Handwritten: 8.4 Non-Comparison Sorts" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/8-4-non-comparison-sorts-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/8-4-non-comparison-sorts-diagram.svg" alt="Diagram: 8.4 Non-Comparison Sorts" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/8-4-non-comparison-sorts-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/8-4-non-comparison-sorts-sticky.svg" alt="Sticky Note: 8.4 Non-Comparison Sorts" width="30%">
</a>


| Algorithm | Type | Complexity | Space | Stable | Constraint |
|-----------|------|------------|-------|--------|------------|
| Counting Sort | Integer | O(n + k) | O(k) | Yes | Integer range k |
| Radix Sort | Integer | O(dÃƒâ€šÃ‚Â·(n + b)) | O(n + b) | Yes | d digits, base b |
| Bucket Sort | Float | O(n + k) avg | O(n) | Yes | Uniform distribution |

**Counting Sort:**
1. Count occurrences of each value (array of size k)
2. Compute prefix sums (positions)
3. Build output in reverse to maintain stability

**Radix Sort:**
- LSD first: sort by least significant digit up to most significant
- Each pass uses a stable sort (usually Counting Sort)
- Complexity: O(dÃƒâ€šÃ‚Â·(n + b)) where d = #digits, b = base

### 8.5 Stability and In-Place Properties

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/8-5-stability-and-in-place-properties-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/8-5-stability-and-in-place-properties-handwritten.svg" alt="Handwritten: 8.5 Stability and In-Place Properties" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/8-5-stability-and-in-place-properties-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/8-5-stability-and-in-place-properties-diagram.svg" alt="Diagram: 8.5 Stability and In-Place Properties" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/8-5-stability-and-in-place-properties-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/8-5-stability-and-in-place-properties-sticky.svg" alt="Sticky Note: 8.5 Stability and In-Place Properties" width="30%">
</a>


| Sorting | Stable? | In-Place? | GATE Trap |
|---------|---------|-----------|-----------|
| Bubble | Yes | Yes | Ã¢â€ â€™ |
| Insertion | Yes | Yes | Ã¢â€ â€™ |
| Selection | No | Yes | Often asked: not stable |
| Merge | Yes | No (needs O(n) aux) | In-place variant is O(n logÃƒâ€šÃ‚Â² n) |
| Quick | No | Yes (recursive stack) | Lomuto not stable; Hoare also not stable |
| Heap | No | Yes | Ã¢â€ â€™ |
| Counting | Yes | No (needs O(k)) | Ã¢â€ â€™ |
| Radix | Yes | No | Stable inner sort is critical |

---

## 9. Searching

### 9.1 Linear Search

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/9-1-linear-search-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/9-1-linear-search-handwritten.svg" alt="Handwritten: 9.1 Linear Search" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/9-1-linear-search-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/9-1-linear-search-diagram.svg" alt="Diagram: 9.1 Linear Search" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/9-1-linear-search-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/9-1-linear-search-sticky.svg" alt="Sticky Note: 9.1 Linear Search" width="30%">
</a>


- Complexity: O(n)
- Space: O(1)
- Works on unsorted data

### 9.2 Binary Search

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/9-2-binary-search-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/9-2-binary-search-handwritten.svg" alt="Handwritten: 9.2 Binary Search" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/9-2-binary-search-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/9-2-binary-search-diagram.svg" alt="Diagram: 9.2 Binary Search" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/9-2-binary-search-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/9-2-binary-search-sticky.svg" alt="Sticky Note: 9.2 Binary Search" width="30%">
</a>


```
function binarySearch(arr, target):
    left = 0; right = len(arr)-1
    while left <= right:
        mid = left + (right-left)//2
        if arr[mid] == target: return mid
        if arr[mid] < target: left = mid+1
        else: right = mid-1
    return -1
```

- Complexity: O(log n)
- Space: O(1) iterative, O(log n) recursive
- Requires sorted array

### 9.3 Interpolation Search

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/9-3-interpolation-search-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/9-3-interpolation-search-handwritten.svg" alt="Handwritten: 9.3 Interpolation Search" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/9-3-interpolation-search-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/9-3-interpolation-search-diagram.svg" alt="Diagram: 9.3 Interpolation Search" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/9-3-interpolation-search-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/9-3-interpolation-search-sticky.svg" alt="Sticky Note: 9.3 Interpolation Search" width="30%">
</a>


```
function interpolationSearch(arr, target):
    left = 0; right = len(arr)-1
    while left <= right and target >= arr[left] and target <= arr[right]:
        pos = left + ((target-arr[left]) * (right-left)) // (arr[right]-arr[left])
        if arr[pos] == target: return pos
        if arr[pos] < target: left = pos+1
        else: right = pos-1
    return -1
```

- Best: O(log log n) for uniformly distributed data
- Worst: O(n)
- Requires sorted array with uniform distribution

### 9.4 Ternary Search

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/9-4-ternary-search-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/9-4-ternary-search-handwritten.svg" alt="Handwritten: 9.4 Ternary Search" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/9-4-ternary-search-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/9-4-ternary-search-diagram.svg" alt="Diagram: 9.4 Ternary Search" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/9-4-ternary-search-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/9-4-ternary-search-sticky.svg" alt="Sticky Note: 9.4 Ternary Search" width="30%">
</a>


- Divide array into 3 parts, compare target with two midpoints
- Complexity: O(logÃƒÂ¢Ã¢â‚¬Å¡Ã†â€™ n) Ã¢â€ â€™ same as binary search asymptotically (worse constant)
- Used for unimodal functions (finding maximum/minimum of a bitonic sequence)

---

## 10. Hashing

### 10.1 Hash Functions

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/10-1-hash-functions-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/10-1-hash-functions-handwritten.svg" alt="Handwritten: 10.1 Hash Functions" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/10-1-hash-functions-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/10-1-hash-functions-diagram.svg" alt="Diagram: 10.1 Hash Functions" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/10-1-hash-functions-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/10-1-hash-functions-sticky.svg" alt="Sticky Note: 10.1 Hash Functions" width="30%">
</a>


Good hash function properties: deterministic, uniform distribution, fast computation.

**Common hash functions:**
- Division method: h(k) = k mod m (avoid m = 2ÃƒÂ¡Ã‚ÂµÃ¢â‚¬â€œ Ã¢â€ â€™ use prime)
- Multiplication method: h(k) = ÃƒÂ¢Ã…â€™Ã…Â mÃƒâ€šÃ‚Â·(kÃƒâ€šÃ‚Â·A mod 1)ÃƒÂ¢Ã…â€™Ã¢â‚¬Â¹ where A ÃƒÂ¢Ã¢â‚¬Â°Ã‹â€  (ÃƒÂ¢Ã‹â€ Ã…Â¡5ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1)/2
- Universal hashing: h(k) = ((aÃƒâ€šÃ‚Â·k + b) mod p) mod m

### 10.2 Collision Resolution

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/10-2-collision-resolution-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/10-2-collision-resolution-handwritten.svg" alt="Handwritten: 10.2 Collision Resolution" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/10-2-collision-resolution-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/10-2-collision-resolution-diagram.svg" alt="Diagram: 10.2 Collision Resolution" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/10-2-collision-resolution-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/10-2-collision-resolution-sticky.svg" alt="Sticky Note: 10.2 Collision Resolution" width="30%">
</a>


**Chaining:**
- Each slot holds linked list of keys
- Load factor ÃƒÅ½Ã‚Â± = n/m
- Expected search: O(1 + ÃƒÅ½Ã‚Â±)
- Worst case: O(n) (all keys hash to same slot)

**Open Addressing:**
- All keys stored in table slots directly
- Load factor ÃƒÅ½Ã‚Â± < 1
- Probe sequence determines search path

| Probing | Sequence | Primary Clustering | Secondary Clustering |
|---------|----------|-------------------|---------------------|
| Linear | h(k,i) = (hÃƒÂ¢Ã¢â€šÂ¬Ã‚Â²(k) + i) mod m | Yes | N/A |
| Quadratic | h(k,i) = (hÃƒÂ¢Ã¢â€šÂ¬Ã‚Â²(k) + cÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â�i + cÃƒÂ¢Ã¢â‚¬Å¡Ã¢â‚¬Å¡iÃƒâ€šÃ‚Â²) mod m | No | Yes |
| Double | h(k,i) = (hÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â�(k) + iÃƒâ€šÃ‚Â·hÃƒÂ¢Ã¢â‚¬Å¡Ã¢â‚¬Å¡(k)) mod m | No | No |

**Linear probing average search time:** Ãƒâ€šÃ‚Â½(1 + 1/(1ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ÃƒÅ½Ã‚Â±)) for successful, Ãƒâ€šÃ‚Â½(1 + 1/(1ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ÃƒÅ½Ã‚Â±)Ãƒâ€šÃ‚Â²) for unsuccessful.

### 10.3 Rehashing

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/10-3-rehashing-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/10-3-rehashing-handwritten.svg" alt="Handwritten: 10.3 Rehashing" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/10-3-rehashing-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/10-3-rehashing-diagram.svg" alt="Diagram: 10.3 Rehashing" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/10-3-rehashing-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/10-3-rehashing-sticky.svg" alt="Sticky Note: 10.3 Rehashing" width="30%">
</a>


When load factor exceeds threshold (typically 0.75):
1. Allocate new table (usually 2ÃƒÆ’Ã¢â‚¬â€� size)
2. Recompute hash for every key
3. Insert into new table
- Complexity: O(n) per rehash, amortized O(1) per insertion

### 10.4 Perfect Hashing

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/10-4-perfect-hashing-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/10-4-perfect-hashing-handwritten.svg" alt="Handwritten: 10.4 Perfect Hashing" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/10-4-perfect-hashing-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/10-4-perfect-hashing-diagram.svg" alt="Diagram: 10.4 Perfect Hashing" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/10-4-perfect-hashing-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/10-4-perfect-hashing-sticky.svg" alt="Sticky Note: 10.4 Perfect Hashing" width="30%">
</a>


- No collisions (static key set)
- Two-level scheme: first hash maps to slot, second-level per-slot hash is perfect
- Expected O(n) space

---

## 11. GATE Previous Year Questions (PYQs)

### Arrays

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/arrays-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/arrays-handwritten.svg" alt="Handwritten: Arrays" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/arrays-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/arrays-diagram.svg" alt="Diagram: Arrays" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/arrays-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/arrays-sticky.svg" alt="Sticky Note: Arrays" width="30%">
</a>


**A1** [GATE 2015, 1 mark, Arrays] An array A[10][20] is stored in row-major order. Base address = 100, element size = 2 bytes. Address of A[5][10] is:

- (A) 300 (B) 310 (C) 320 (D) 330

**Answer:** B. A[5][10] = 100 + (5ÃƒÆ’Ã¢â‚¬â€�20 + 10)ÃƒÆ’Ã¢â‚¬â€�2 = 100 + 110ÃƒÆ’Ã¢â‚¬â€�2 = 100 + 220 = 320.

**A2** [GATE 2017, 2 marks, Arrays] A lower triangular matrix L[n][n] is stored in 1D array of size n(n+1)/2. Index of L[i][j] (i ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â¥ j) in 1D array (0-indexed) is:

- (A) i(iÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1)/2 + j (B) i(i+1)/2 + j (C) i(iÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1)/2 + jÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1 (D) i(i+1)/2 + jÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1

**Answer:** C. For 1-indexed: i(iÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1)/2 + j. For 0-indexed: i(i+1)/2 + j.

### Linked Lists

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/linked-lists-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/linked-lists-handwritten.svg" alt="Handwritten: Linked Lists" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/linked-lists-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/linked-lists-diagram.svg" alt="Diagram: Linked Lists" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/linked-lists-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/linked-lists-sticky.svg" alt="Sticky Note: Linked Lists" width="30%">
</a>


**A3** [GATE 2016, 2 marks, Linked Lists] What is the worst-case time for inserting an element at the tail of a singly linked list with a head pointer?

- (A) O(1) (B) O(log n) (C) O(n) (D) O(nÃƒâ€šÃ‚Â²)

**Answer:** C. Without tail pointer, we traverse to end Ã¢â€ â€™ O(n).

**A4** [GATE 2018, 2 marks, Linked Lists] Floyd's cycle detection algorithm uses two pointers moving at speeds 1 and 2. If the list has a cycle, they will always meet. What is the minimum number of steps before meeting?

- (A) O(n) (B) O(nÃƒâ€šÃ‚Â²) (C) O(ÃƒÂ¢Ã‹â€ Ã…Â¡n) (D) O(n log n)

**Answer:** A. In worst case O(n), and guaranteed to detect cycle in O(n) time.

**A5** [GATE 2020, 2 marks, Linked Lists] Let P be a singly linked list. Let Q be the pointer to an intermediate node (not last). Deleting Q from P can be done in:

- (A) O(1) time (B) O(n) time (C) O(log n) time (D) O(nÃƒâ€šÃ‚Â²) time

**Answer:** A. Copy next node's data to Q, then delete next node.

### Stacks & Queues

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/stacks-queues-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/stacks-queues-handwritten.svg" alt="Handwritten: Stacks & Queues" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/stacks-queues-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/stacks-queues-diagram.svg" alt="Diagram: Stacks & Queues" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/stacks-queues-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/stacks-queues-sticky.svg" alt="Sticky Note: Stacks & Queues" width="30%">
</a>


**A6** [GATE 2016, 2 marks, Stacks] A stack is implemented with an array of size N. What is the worst-case time for N push operations?

- (A) O(N) (B) O(N log N) (C) O(NÃƒâ€šÃ‚Â²) (D) O(2ÃƒÂ¡Ã‚Â´Ã‚Âº)

**Answer:** A. Each push is O(1), total O(N). If dynamic array with doubling: O(N) amortized.

**A7** [GATE 2019, 2 marks, Stacks] The postfix expression for (A + B) ÃƒÆ’Ã¢â‚¬â€� (C ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ D) is:

- (A) AB+CDÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬â€� (B) AB+CDÃƒÆ’Ã¢â‚¬â€�ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ (C) +ABÃƒÆ’Ã¢â‚¬â€�ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢CD (D) ÃƒÆ’Ã¢â‚¬â€�+ABÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢CD

**Answer:** A. Infix: (A+B)ÃƒÆ’Ã¢â‚¬â€�(CÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢D); Postfix: AB+CDÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬â€�.

**A8** [GATE 2021, 2 marks, Queues] A circular queue has size 5. front = 2, rear = 4 (0-indexed). How many elements are in the queue?

- (A) 2 (B) 3 (C) 4 (D) 5

**Answer:** B. Number of elements = (rear ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ front + size) mod size = (4 ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ 2 + 5) mod 5 = 2. Wait: actually 3: positions 2, 3, 4 Ã¢â€ â€™ rear ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ front + 1 = 3.

**A9** [GATE 2017, 2 marks, Stacks] Evaluate postfix: 2 3 4 ÃƒÆ’Ã¢â‚¬â€� + 5 ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢. Result:

- (A) 5 (B) 9 (C) 11 (D) 15

**Answer:** B. Stack: push 2, push 3, push 4 Ã¢â€ â€™ pop 4, pop 3 Ã¢â€ â€™ 3ÃƒÆ’Ã¢â‚¬â€�4=12 push Ã¢â€ â€™ pop 12, pop 2 Ã¢â€ â€™ 2+12=14 push Ã¢â€ â€™ push 5 Ã¢â€ â€™ pop 5, pop 14 Ã¢â€ â€™ 14ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢5=9.

### Trees

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/trees-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/trees-handwritten.svg" alt="Handwritten: Trees" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/trees-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/trees-diagram.svg" alt="Diagram: Trees" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/trees-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/trees-sticky.svg" alt="Sticky Note: Trees" width="30%">
</a>


**A10** [GATE 2015, 1 mark, Trees] Number of structurally different binary trees with 3 nodes:

- (A) 2 (B) 3 (C) 5 (D) 6

**Answer:** C. Catalan number CÃƒÂ¢Ã¢â‚¬Å¡Ã†â€™ = (2n)!/((n+1)!n!) = 5.

**A11** [GATE 2014, 2 marks, BST] Preorder traversal of BST: 50, 30, 20, 40, 70, 60, 80. Postorder traversal is:

- (A) 20, 40, 30, 60, 80, 70, 50 (B) 20, 40, 30, 60, 80, 70, 50
- (C) 20, 40, 30, 60, 80, 70, 50 (D) 80, 60, 40, 20, 30, 50, 70

**Answer:** A. BST: root=50. Left subtree has 30 as root with 20 left, 40 right. Right subtree has 70 as root with 60 left, 80 right. Postorder: LRN Ã¢â€ â€™ 20, 40, 30, 60, 80, 70, 50.

**A12** [GATE 2017, 2 marks, AVL] Insert 43, 55, 67, 83, 94, 71 into empty AVL tree. How many rotations needed for 94?

- (A) 0 (B) 1 (C) 2 (D) 3

**Answer:** B. After 43, 55, 67 (RR rotation), 83, 94: inserting 94 causes imbalance requiring one left rotation.

**A13** [GATE 2018, 2 marks, B-Tree] A B-Tree of order 4 (max 3 keys). Minimum number of nodes for height 3 (root at height 0):

- (A) 7 (B) 8 (C) 15 (D) 16

**Answer:** A. Each node (except root) min keys = ÃƒÂ¢Ã…â€™Ã‹â€ m/2ÃƒÂ¢Ã…â€™Ã¢â‚¬Â°ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1 = 1. Root min = 1. Level 0: 1 node. Level 1: 2 nodes. Level 2: 4 nodes. Total = 7.

**A14** [GATE 2020, 2 marks, BST] Inorder predecessor of a node in BST is:

- (A) max of left subtree (B) min of left subtree (C) max of right subtree (D) min of right subtree

**Answer:** A. Inorder predecessor = maximum element in left subtree.

**A15** [GATE 2019, 2 marks, Red-Black Tree] Which of the following is NOT a valid Red-Black tree property?

- (A) Root is black (B) Red node cannot have red child (C) All leaves are black (D) Every internal node has exactly 2 children

**Answer:** D. Red-Black trees don't require every internal node to have exactly 2 children.

**A16** [GATE 2022, 2 marks, Trees] The height of a binary tree with n nodes in the worst case is:

- (A) O(log n) (B) O(n) (C) O(n log n) (D) O(nÃƒâ€šÃ‚Â²)

**Answer:** B. Skewed tree: height = nÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1 = O(n).

**A17** [GATE 2016, 2 marks, Trees] The number of leaf nodes in a complete binary tree with n nodes is:

- (A) ÃƒÂ¢Ã…â€™Ã…Â n/2ÃƒÂ¢Ã…â€™Ã¢â‚¬Â¹ (B) ÃƒÂ¢Ã…â€™Ã‹â€ n/2ÃƒÂ¢Ã…â€™Ã¢â‚¬Â° (C) nÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1 (D) logÃƒÂ¢Ã¢â‚¬Å¡Ã¢â‚¬Å¡(n+1)

**Answer:** B. Leaves = ÃƒÂ¢Ã…â€™Ã‹â€ n/2ÃƒÂ¢Ã…â€™Ã¢â‚¬Â° for complete binary tree.

### Heaps

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/heaps-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/heaps-handwritten.svg" alt="Handwritten: Heaps" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/heaps-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/heaps-diagram.svg" alt="Diagram: Heaps" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/heaps-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/heaps-sticky.svg" alt="Sticky Note: Heaps" width="30%">
</a>


**A18** [GATE 2015, 2 marks, Heaps] In a min-heap with n elements, the 7th smallest element can be found in:

- (A) O(1) (B) O(log n) (C) O(n) (D) O(n log n)

**Answer:** A. The 7th smallest is at one of the first 7 positions (depth ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â¤ 2). Extract min 7 times Ã¢â€ â€™ O(7 log n) but the question asks about finding Ã¢â€ â€™ the element is guaranteed within first 7 positions.

**A19** [GATE 2017, 2 marks, Heaps] Array [12, 10, 15, 8, 9, 14, 13, 6, 7]. Is this a max-heap?

- (A) Yes (B) No, violates at index 1 (C) No, violates at index 2 (D) No, violates at index 3

**Answer:** B. Index 1 (value 10): children at 3 (15) > 10. Violation.

**A20** [GATE 2020, 2 marks, Heap Sort] Which of the following is true about Heap Sort?

- (A) Stable and in-place (B) Not stable but in-place (C) Stable but not in-place (D) Neither stable nor in-place

**Answer:** B. Heap sort is in-place but not stable.

### Graphs

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/graphs-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/graphs-handwritten.svg" alt="Handwritten: Graphs" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/graphs-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/graphs-diagram.svg" alt="Diagram: Graphs" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/graphs-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/graphs-sticky.svg" alt="Sticky Note: Graphs" width="30%">
</a>


**A21** [GATE 2015, 2 marks, BFS/DFS] BFS of an undirected graph with V vertices and E edges has complexity:

- (A) O(VÃƒâ€šÃ‚Â²) (B) O(E log V) (C) O(V + E) (D) O(VE)

**Answer:** C. BFS using adjacency list is O(V + E).

**A22** [GATE 2016, 2 marks, Topological Sort] Which of the following is true for a DAG with topological sort?

- (A) At least one vertex has indegree 0 (B) Every DAG has unique topological sort
- (C) All edges go from lower to higher order (D) Both A and C

**Answer:** D. Every DAG has at least one source (indegree 0). Topological order ensures all edges go forward.

**A23** [GATE 2017, 2 marks, Dijkstra] Dijkstra's algorithm fails when:

- (A) Graph has negative weight edges (B) Graph has cycles
- (C) Graph is unweighted (D) Graph is directed

**Answer:** A. Dijkstra fails with negative weight edges (may not maintain optimal substructure).

**A24** [GATE 2018, 2 marks, Kruskal] Kruskal's algorithm finds MST in:

- (A) O(VÃƒâ€šÃ‚Â²) (B) O(E log V) (C) O(V log E) (D) O(VE)

**Answer:** B. Sorting edges O(E log E) = O(E log V) plus DSU operations O(EÃƒâ€šÃ‚Â·ÃƒÅ½Ã‚Â±(V)).

**A25** [GATE 2019, 2 marks, Floyd-Warshall] Floyd-Warshall all-pairs shortest path complexity:

- (A) O(VÃƒâ€šÃ‚Â²) (B) O(VÃƒâ€šÃ‚Â³) (C) O(VE) (D) O(E log V)

**Answer:** B. Three nested loops Ã¢â€ â€™ O(VÃƒâ€šÃ‚Â³).

**A26** [GATE 2021, 2 marks, Bellman-Ford] Bellman-Ford for V vertices, E edges. Number of relaxations:

- (A) VÃƒÆ’Ã¢â‚¬â€�E (B) (VÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1)ÃƒÆ’Ã¢â‚¬â€�E (C) VÃƒâ€šÃ‚Â² (D) VEÃƒâ€šÃ‚Â²

**Answer:** B. VÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1 iterations, each relaxing all E edges: (VÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1)Ãƒâ€šÃ‚Â·E.

**A27** [GATE 2022, 1 mark, SCC] Number of strongly connected components in a DAG with V vertices:

- (A) 1 (B) V (C) ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â¤ V (D) depends on edges

**Answer:** B. Every vertex in a DAG is its own SCC (no cycles). So = V.

**A28** [GATE 2014, 2 marks, Prim] Prim's algorithm with adjacency matrix has complexity:

- (A) O(VÃƒâ€šÃ‚Â²) (B) O(E log V) (C) O(V log V) (D) O(VE)

**Answer:** A. With adjacency matrix, each extract-min scans V vertices Ã¢â€ â€™ O(VÃƒâ€šÃ‚Â²).

### Sorting

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/sorting-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/sorting-handwritten.svg" alt="Handwritten: Sorting" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/sorting-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/sorting-diagram.svg" alt="Diagram: Sorting" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/sorting-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/sorting-sticky.svg" alt="Sticky Note: Sorting" width="30%">
</a>


**A29** [GATE 2015, 1 mark, Sorting] Which sorting algorithm has best-case O(n)?

- (A) Merge sort (B) Heap sort (C) Quick sort (D) Insertion sort

**Answer:** D. Insertion sort is adaptive Ã¢â€ â€™ O(n) when input is already sorted.

**A30** [GATE 2016, 2 marks, Sorting] Which of the following is O(n log n) in worst case?

- (A) Quick sort (B) Insertion sort (C) Merge sort (D) Selection sort

**Answer:** C. Quick sort worst is O(nÃƒâ€šÃ‚Â²). Merge sort is always O(n log n).

**A31** [GATE 2017, 2 marks, Sorting] Number of swaps in selection sort for array descending [5,4,3,2,1] sorted ascending:

- (A) 2 (B) 3 (C) 4 (D) 5

**Answer:** C. nÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1 = 4 swaps (each selects min and swaps to correct position).

**A32** [GATE 2018, 2 marks, Counting Sort] Counting sort complexity is O(n + k). The value k represents:

- (A) Number of distinct keys (B) Range of input values
- (C) Number of elements (D) Number of passes

**Answer:** B. k is the range of input values (max ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ min + 1).

**A33** [GATE 2019, 2 marks, Sorting Stability] Which of these is NOT stable?

- (A) Bubble sort (B) Insertion sort (C) Merge sort (D) Quick sort

**Answer:** D. Quick sort is not stable. Bubble, Insertion, Merge are stable.

**A34** [GATE 2020, 2 marks, Radix Sort] Radix sort uses which sort internally for each digit pass?

- (A) Quick sort (B) Heap sort (C) Counting sort (D) Insertion sort

**Answer:** C. Counting sort is the typical stable sort used for each digit pass in Radix sort.

**A35** [GATE 2021, 2 marks, Quick Sort] Worst-case time for Quick sort is O(nÃƒâ€šÃ‚Â²). Which pivot choice causes this for sorted input?

- (A) First element (B) Random element (C) Median-of-three (D) Last element

**Answer:** A or D (for L-R ordered). Both first and last pivot cause O(nÃƒâ€šÃ‚Â²) on sorted arrays for Lomuto partition.

### Searching & Hashing

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/searching-hashing-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/searching-hashing-handwritten.svg" alt="Handwritten: Searching & Hashing" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/searching-hashing-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/searching-hashing-diagram.svg" alt="Diagram: Searching & Hashing" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/searching-hashing-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/searching-hashing-sticky.svg" alt="Sticky Note: Searching & Hashing" width="30%">
</a>


**A36** [GATE 2015, 2 marks, Binary Search] Binary search on a sorted array of n elements. Worst case comparisons:

- (A) n (B) log n (C) n/2 (D) nÃƒâ€šÃ‚Â²

**Answer:** B. ÃƒÅ½Ã‹Å“(log n) comparisons.

**A37** [GATE 2016, 2 marks, Hashing] Hash table size = 10, h(k) = k mod 10. Insert keys 12, 22, 32, 42, 52 using linear probing. How many collisions?

- (A) 2 (B) 3 (C) 4 (D) 5

**Answer:** C. 12 Ã¢â€ â€™ slot 2. 22 Ã¢â€ â€™ slot 2 (collision) Ã¢â€ â€™ slot 3. 32 Ã¢â€ â€™ slot 2 (collision) Ã¢â€ â€™ slot 3 (collision) Ã¢â€ â€™ slot 4. 42 Ã¢â€ â€™ ... Ã¢â€ â€™ slot 5. 52 Ã¢â€ â€™ ... Ã¢â€ â€™ slot 6. Total collisions = 4.

**A38** [GATE 2018, 2 marks, Hashing] Load factor ÃƒÅ½Ã‚Â± = 0.75. Expected probes in successful search with linear probing:

- (A) Ãƒâ€šÃ‚Â½(1 + 1/(1ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ÃƒÅ½Ã‚Â±)) (B) Ãƒâ€šÃ‚Â½(1 + 1/(1ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ÃƒÅ½Ã‚Â±)Ãƒâ€šÃ‚Â²) (C) ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ln(1ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ÃƒÅ½Ã‚Â±)/ÃƒÅ½Ã‚Â± (D) 1/(1ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ÃƒÅ½Ã‚Â±)

**Answer:** A. For linear probing, successful search ÃƒÂ¢Ã¢â‚¬Â°Ã‹â€  Ãƒâ€šÃ‚Â½(1 + 1/(1ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ÃƒÅ½Ã‚Â±)). With ÃƒÅ½Ã‚Â± = 0.75: ÃƒÂ¢Ã¢â‚¬Â°Ã‹â€  2.5 probes.

**A39** [GATE 2020, 2 marks, Hashing] Double hashing: h(k) = k mod 11, hÃƒÂ¢Ã¢â‚¬Å¡Ã¢â‚¬Å¡(k) = 1 + (k mod 7). Probe sequence for key 38:

- (A) 5, 9, 2, ... (B) 5, 8, 0, ... (C) 5, 10, 4, ... (D) 5, 1, 8, ...

**Answer:** C. h(38) = 38 mod 11 = 5. hÃƒÂ¢Ã¢â‚¬Å¡Ã¢â‚¬Å¡(38) = 1 + (38 mod 7) = 1 + 3 = 4. Probe: 5, 9, 2, ...

### Complexity Analysis

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/complexity-analysis-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/complexity-analysis-handwritten.svg" alt="Handwritten: Complexity Analysis" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/complexity-analysis-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/complexity-analysis-diagram.svg" alt="Diagram: Complexity Analysis" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/complexity-analysis-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/complexity-analysis-sticky.svg" alt="Sticky Note: Complexity Analysis" width="30%">
</a>


**A40** [GATE 2015, 2 marks, Recurrence] T(n) = 2T(n/2) + n. T(1) = 1. T(n) = ?

- (A) ÃƒÅ½Ã‹Å“(n) (B) ÃƒÅ½Ã‹Å“(n log n) (C) ÃƒÅ½Ã‹Å“(nÃƒâ€šÃ‚Â²) (D) ÃƒÅ½Ã‹Å“(log n)

**Answer:** B. Master theorem case 2: a=2, b=2, log_b a = 1, f(n)=n = nÃƒâ€šÃ‚Â¹Ãƒâ€šÃ‚Â·logÃƒÂ¢Ã‚Â�Ã‚Â° n Ã¢â€ â€™ T(n) = ÃƒÅ½Ã‹Å“(n log n).

**A41** [GATE 2016, 1 mark, Recurrence] T(n) = T(nÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1) + n. T(1) = 1. T(n) = ?

- (A) ÃƒÅ½Ã‹Å“(n) (B) ÃƒÅ½Ã‹Å“(nÃƒâ€šÃ‚Â²) (C) ÃƒÅ½Ã‹Å“(n log n) (D) ÃƒÅ½Ã‹Å“(2ÃƒÂ¢Ã‚Â�Ã‚Â¿)

**Answer:** B. Summation: 1 + 2 + 3 + ... + n = n(n+1)/2 = ÃƒÅ½Ã‹Å“(nÃƒâ€šÃ‚Â²).

**A42** [GATE 2017, 2 marks, Complexity] f(n) = nÃƒâ€šÃ‚Â², g(n) = n^{logÃƒÂ¢Ã¢â‚¬Å¡Ã¢â‚¬Å¡7}. Which is true?

- (A) f = O(g) (B) f = ÃƒÅ½Ã‚Â©(g) (C) f = ÃƒÅ½Ã‹Å“(g) (D) None

**Answer:** A. n^{logÃƒÂ¢Ã¢â‚¬Å¡Ã¢â‚¬Å¡7} ÃƒÂ¢Ã¢â‚¬Â°Ã‹â€  n^{2.81}. nÃƒâ€šÃ‚Â² = O(n^{2.81}).

**A43** [GATE 2018, 2 marks, Complexity] Which notation expresses tightest upper bound?

- (A) O (B) ÃƒÅ½Ã‚Â© (C) ÃƒÅ½Ã‹Å“ (D) o

**Answer:** A. O gives upper bound. ÃƒÅ½Ã‹Å“ gives tight bound but O is the standard for worst-case complexity.

**A44** [GATE 2020, 2 marks, Recurrence] T(n) = 3T(n/4) + n log n. Solve:

- (A) ÃƒÅ½Ã‹Å“(n^{logÃƒÂ¢Ã¢â‚¬Å¡Ã¢â‚¬Å¾3}) (B) ÃƒÅ½Ã‹Å“(n log n) (C) ÃƒÅ½Ã‹Å“(nÃƒâ€šÃ‚Â² log n) (D) ÃƒÅ½Ã‹Å“(n^{logÃƒÂ¢Ã¢â‚¬Å¡Ã†â€™4})

**Answer:** B. a=3, b=4, log_b a = logÃƒÂ¢Ã¢â‚¬Å¡Ã¢â‚¬Å¾3 ÃƒÂ¢Ã¢â‚¬Â°Ã‹â€  0.792. f(n) = n log n = ÃƒÅ½Ã‚Â©(n^{0.792+ÃƒÅ½Ã‚Âµ}). Check regularity: aÃƒâ€šÃ‚Â·f(n/b) = 3Ãƒâ€šÃ‚Â·(n/4)Ãƒâ€šÃ‚Â·log(n/4) = 0.75Ãƒâ€šÃ‚Â·nÃƒâ€šÃ‚Â·log(n/4) ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â¤ cÃƒâ€šÃ‚Â·nÃƒâ€šÃ‚Â·log n for c &lt; 1. So Case 3: ÃƒÅ½Ã‹Å“(n log n).

**A45** [GATE 2021, 2 marks, Complexity] Let f(n) = O(g(n)). Then log f(n) = O(log g(n)) if:

- (A) f(n) ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â¥ 1 and g(n) ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â¥ 2 (B) f(n) ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â¥ 0 and g(n) ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â¥ 1
- (C) f(n) ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â¤ 0 and g(n) ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â¤ 1 (D) Always

**Answer:** A. Need f(n) ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â¥ 1 and g(n) ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â¥ 2 for log to be defined and monotonic.

### Mixed

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/mixed-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/mixed-handwritten.svg" alt="Handwritten: Mixed" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/mixed-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/mixed-diagram.svg" alt="Diagram: Mixed" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/mixed-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/mixed-sticky.svg" alt="Sticky Note: Mixed" width="30%">
</a>


**A46** [GATE 2022, 2 marks, Trees] A strictly binary tree (every node has 0 or 2 children) with n leaves has how many internal nodes?

- (A) nÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1 (B) n (C) n+1 (D) 2n

**Answer:** A. For a full binary tree: I = L ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ 1 = n ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ 1.

**A47** [GATE 2023, 2 marks, Graphs] In an undirected graph G with n vertices, if every vertex has degree at least ÃƒÅ½Ã‚Â´, the graph is connected if:

- (A) ÃƒÅ½Ã‚Â´ ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â¥ n/2 (B) ÃƒÅ½Ã‚Â´ ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â¥ (nÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1)/2 (C) ÃƒÅ½Ã‚Â´ ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â¥ nÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1 (D) ÃƒÅ½Ã‚Â´ ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â¥ 2

**Answer:** B. Dirac's theorem: if ÃƒÅ½Ã‚Â´ ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â¥ n/2, graph is Hamiltonian (stronger). For connectivity: ÃƒÅ½Ã‚Â´ ÃƒÂ¢Ã¢â‚¬Â°Ã‚Â¥ (nÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1)/2.

**A48** [GATE 2023, 1 mark, Sorting] Which of the following sorts is NOT in-place?

- (A) Insertion sort (B) Selection sort (C) Merge sort (D) Quick sort

**Answer:** C. Merge sort requires O(n) auxiliary space. All others are in-place.

**A49** [GATE 2024, 2 marks, Hashing] A hash table of size 10 uses double hashing: hÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â�(k) = k mod 10, hÃƒÂ¢Ã¢â‚¬Å¡Ã¢â‚¬Å¡(k) = 7 ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ (k mod 7). Insert keys 89, 18, 49, 58, 79. After all insertions, what is the load factor?

- (A) 0.3 (B) 0.5 (C) 0.7 (D) 0.9

**Answer:** B. 5 elements / 10 slots = 0.5.

**A50** [GATE 2024, 2 marks, Complexity] T(n) = 2T(ÃƒÂ¢Ã‹â€ Ã…Â¡n) + log n. Solve:

- (A) ÃƒÅ½Ã‹Å“(log n) (B) ÃƒÅ½Ã‹Å“(logÃƒâ€šÃ‚Â² n) (C) ÃƒÅ½Ã‹Å“(ÃƒÂ¢Ã‹â€ Ã…Â¡n) (D) ÃƒÅ½Ã‹Å“(log nÃƒâ€šÃ‚Â·log log n)

**Answer:** B. Let n = 2ÃƒÂ¡Ã‚ÂµÃ‚Â�. T(2ÃƒÂ¡Ã‚ÂµÃ‚Â�) = 2T(2^{m/2}) + m. S(m) = T(2ÃƒÂ¡Ã‚ÂµÃ‚Â�). S(m) = 2S(m/2) + m Ã¢â€ â€™ ÃƒÅ½Ã‹Å“(m log m) = ÃƒÅ½Ã‹Å“(log nÃƒâ€šÃ‚Â·log log n). Wait: Master theorem: a=2, b=2, S(m) = 2S(m/2) + m Ã¢â€ â€™ Case 2: ÃƒÅ½Ã‹Å“(m log m) = ÃƒÅ½Ã‹Å“(log nÃƒâ€šÃ‚Â·log log n).

**A51** [GATE 2025, 2 marks, Graph] Which graph algorithm uses a stack as its primary data structure?

- (A) BFS (B) DFS (C) Dijkstra (D) Prim

**Answer:** B. DFS uses stack (recursion or explicit). BFS uses queue.

**A52** [GATE 2025, 2 marks, Sorting] The number of comparisons in merge sort for merging two sorted lists of size m and n is:

- (A) m + n ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ 1 (B) m + n (C) max(m, n) (D) min(m, n)

**Answer:** A. In worst case, m + n ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ 1 comparisons until one list exhausts.

**A53** [GATE 2025, 1 mark, Trees] Which traversal gives non-decreasing order in BST?

- (A) Preorder (B) Inorder (C) Postorder (D) Level-order

**Answer:** B. Inorder traversal of BST yields elements in sorted (non-decreasing) order.

**A54** [GATE 2025, 2 marks, Heaps] Building a max-heap from an array of n elements takes:

- (A) O(n) (B) O(n log n) (C) O(log n) (D) O(nÃƒâ€šÃ‚Â²)

**Answer:** A. buildHeap() runs in O(n) time (tight bound).

---

## 12. GATE Traps: Detailed Analysis

### Trap 1: Complexity of Recursive Functions

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/trap-1-complexity-of-recursive-functions-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/trap-1-complexity-of-recursive-functions-handwritten.svg" alt="Handwritten: Trap 1: Complexity of Recursive Functions" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/trap-1-complexity-of-recursive-functions-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/trap-1-complexity-of-recursive-functions-diagram.svg" alt="Diagram: Trap 1: Complexity of Recursive Functions" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/trap-1-complexity-of-recursive-functions-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/trap-1-complexity-of-recursive-functions-sticky.svg" alt="Sticky Note: Trap 1: Complexity of Recursive Functions" width="30%">
</a>


**Common errors:**
- Applying Master theorem incorrectly (wrong a, b values)
- Forgetting that T(n) = T(nÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1) + ... is NOT Master theorem solvable
- Misidentifying f(n) for divide-and-conquer recurrences

**Examples:**
| Recurrence | Trap | Correct |
|------------|------|---------|
| T(n) = 2T(n/2) + n | Think O(n) | O(n log n) Ã¢â€ â€™ Master case 2 |
| T(n) = T(n/2) + n | Think O(log n) | O(n) Ã¢â€ â€™ Master case 3 |
| T(n) = 2T(ÃƒÂ¢Ã‹â€ Ã…Â¡n) + log n | Try n directly | Let n=2ÃƒÂ¡Ã‚ÂµÃ‚Â�, get ÃƒÅ½Ã‹Å“(log nÃƒâ€šÃ‚Â·log log n) |
| T(n) = 3T(n/3) + n/2 | Think O(n) | O(n log n) Ã¢â€ â€™ Master case 2 |
| T(n) = T(nÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1) + 1/n | Think O(n) | O(log n) Ã¢â€ â€™ Harmonic series |

### Trap 2: BST Deletion

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/trap-2-bst-deletion-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/trap-2-bst-deletion-handwritten.svg" alt="Handwritten: Trap 2: BST Deletion" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/trap-2-bst-deletion-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/trap-2-bst-deletion-diagram.svg" alt="Diagram: Trap 2: BST Deletion" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/trap-2-bst-deletion-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/trap-2-bst-deletion-sticky.svg" alt="Sticky Note: Trap 2: BST Deletion" width="30%">
</a>


- **Two-child deletion:** Replace with inorder successor (or predecessor). Do NOT replace with just any child.
- **Inorder successor:** Minimum of right subtree (leftmost node).
- **Effect on structure:** After deletion, BST property must be maintained.
- **Complexity:** O(h) where h = height.

### Trap 3: Graph Algorithm Correctness

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/trap-3-graph-algorithm-correctness-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/trap-3-graph-algorithm-correctness-handwritten.svg" alt="Handwritten: Trap 3: Graph Algorithm Correctness" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/trap-3-graph-algorithm-correctness-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/trap-3-graph-algorithm-correctness-diagram.svg" alt="Diagram: Trap 3: Graph Algorithm Correctness" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/trap-3-graph-algorithm-correctness-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/trap-3-graph-algorithm-correctness-sticky.svg" alt="Sticky Note: Trap 3: Graph Algorithm Correctness" width="30%">
</a>


| Algorithm | Fails When | Why |
|-----------|-----------|-----|
| Dijkstra | Negative edges | Greedy: once a node is finalized, distance won't change |
| BFS for shortest path | Weighted graph | BFS assumes all edges weight 1 |
| Kruskal's/Prim's | Directed graph | MST definitions apply to undirected graphs |
| Bellman-Ford | Negative cycles | No shortest path exists (can detect, not compute) |
| Floyd-Warshall | Negative cycles | Distance becomes ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ÃƒÂ¢Ã‹â€ Ã…Â¾ |

### Trap 4: Hash Table Probing Sequences

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/trap-4-hash-table-probing-sequences-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/trap-4-hash-table-probing-sequences-handwritten.svg" alt="Handwritten: Trap 4: Hash Table Probing Sequences" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/trap-4-hash-table-probing-sequences-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/trap-4-hash-table-probing-sequences-diagram.svg" alt="Diagram: Trap 4: Hash Table Probing Sequences" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/trap-4-hash-table-probing-sequences-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/trap-4-hash-table-probing-sequences-sticky.svg" alt="Sticky Note: Trap 4: Hash Table Probing Sequences" width="30%">
</a>


- **Linear probing:** Primary clustering Ã¢â€ â€™ long runs of occupied slots
- **Quadratic probing:** Secondary clustering Ã¢â€ â€™ keys with same initial hash follow same probe sequence
- **Double hashing:** Best Ã¢â€ â€™ two independent hash functions
- **GATE trick:** Calculate probe sequence for a given key; determine if insertion succeeds

**Common question pattern:** "Key x cannot be inserted due to infinite loop" Ã¢â€ â€™ check if probe sequence covers all slots (depends on m being prime for quadratic probing).

### Trap 5: Sorting Stability and In-Place

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/trap-5-sorting-stability-and-in-place-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/trap-5-sorting-stability-and-in-place-handwritten.svg" alt="Handwritten: Trap 5: Sorting Stability and In-Place" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/trap-5-sorting-stability-and-in-place-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/trap-5-sorting-stability-and-in-place-diagram.svg" alt="Diagram: Trap 5: Sorting Stability and In-Place" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/trap-5-sorting-stability-and-in-place-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/trap-5-sorting-stability-and-in-place-sticky.svg" alt="Sticky Note: Trap 5: Sorting Stability and In-Place" width="30%">
</a>


| Statement | Truth | Reason |
|-----------|-------|--------|
| Quick sort is stable | FALSE | Partition swaps break relative order |
| Selection sort is stable | FALSE | Swapping non-adjacent elements breaks order |
| Merge sort is stable | TRUE | Merge preserves left-array-first tiebreak |
| Counting sort is stable | TRUE | Reverse traversal preserves order |
| Heap sort is in-place | TRUE | Sorts within array, only O(1) extra space |
| Merge sort is in-place | FALSE | Requires O(n) auxiliary array |

### Trap 6: MST Edge Weights

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/trap-6-mst-edge-weights-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/trap-6-mst-edge-weights-handwritten.svg" alt="Handwritten: Trap 6: MST Edge Weights" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/trap-6-mst-edge-weights-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/trap-6-mst-edge-weights-diagram.svg" alt="Diagram: Trap 6: MST Edge Weights" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/trap-6-mst-edge-weights-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/trap-6-mst-edge-weights-sticky.svg" alt="Sticky Note: Trap 6: MST Edge Weights" width="30%">
</a>


- **Unique MST:** If all edge weights are distinct Ã¢â€ â€™ MST is unique
- **Non-unique MST:** If edges have equal weights Ã¢â€ â€™ multiple MSTs possible
- **Lightest edge:** Not necessarily in every MST (if it creates a cycle with lighter alternatives)
- **Heaviest edge in a cycle:** Never in any MST (cycle property)

### Trap 7: Asymptotic Growth Subtleties

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/trap-7-asymptotic-growth-subtleties-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/trap-7-asymptotic-growth-subtleties-handwritten.svg" alt="Handwritten: Trap 7: Asymptotic Growth Subtleties" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/trap-7-asymptotic-growth-subtleties-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/trap-7-asymptotic-growth-subtleties-diagram.svg" alt="Diagram: Trap 7: Asymptotic Growth Subtleties" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/trap-7-asymptotic-growth-subtleties-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/trap-7-asymptotic-growth-subtleties-sticky.svg" alt="Sticky Note: Trap 7: Asymptotic Growth Subtleties" width="30%">
</a>


- n^{log n} vs 2^{ÃƒÂ¢Ã‹â€ Ã…Â¡n}: Take log of both: (log n)Ãƒâ€šÃ‚Â² vs ÃƒÂ¢Ã‹â€ Ã…Â¡nÃƒâ€šÃ‚Â·log 2. Since (log n)Ãƒâ€šÃ‚Â² = o(ÃƒÂ¢Ã‹â€ Ã…Â¡n), we get n^{log n} = o(2^{ÃƒÂ¢Ã‹â€ Ã…Â¡n})
- (log n)^{log n} vs n/log n: Take log: log log n Ãƒâ€šÃ‚Â· log n vs log n ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ log log n. First = ÃƒÅ½Ã‹Å“(log nÃƒâ€šÃ‚Â·log log n), second = ÃƒÅ½Ã‹Å“(log n). So (log n)^{log n} = ÃƒÂ�Ã¢â‚¬Â°(n/log n)
- log(n!) = ÃƒÅ½Ã‹Å“(n log n) via Stirling's approximation
- n^{1/n} Ã¢â€ â€™ 1 as n Ã¢â€ â€™ ÃƒÂ¢Ã‹â€ Ã…Â¾

---

## 13. Complexity Cheat Sheet

### 13.1 Common Algorithm Complexities

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/13-1-common-algorithm-complexities-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/13-1-common-algorithm-complexities-handwritten.svg" alt="Handwritten: 13.1 Common Algorithm Complexities" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/13-1-common-algorithm-complexities-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/13-1-common-algorithm-complexities-diagram.svg" alt="Diagram: 13.1 Common Algorithm Complexities" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/13-1-common-algorithm-complexities-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/13-1-common-algorithm-complexities-sticky.svg" alt="Sticky Note: 13.1 Common Algorithm Complexities" width="30%">
</a>


| Algorithm | Time | Space |
|-----------|------|-------|
| Binary Search | O(log n) | O(1) |
| Quick Select (avg) | O(n) | O(1) |
| Median of Medians | O(n) | O(log n) |
| Tower of Hanoi | O(2ÃƒÂ¢Ã‚Â�Ã‚Â¿) | O(n) |
| Fibonacci (naive) | O(ÃƒÂ�Ã¢â‚¬Â ÃƒÂ¢Ã‚Â�Ã‚Â¿) | O(n) |
| Fibonacci (DP) | O(n) | O(1) |
| Matrix Multiplication (naive) | O(nÃƒâ€šÃ‚Â³) | O(nÃƒâ€šÃ‚Â²) |
| Strassen's MM | O(n^{2.81}) | O(nÃƒâ€šÃ‚Â²) |
| Dijkstra (binary heap) | O((V+E) log V) | O(V) |
| Bellman-Ford | O(VE) | O(V) |
| Floyd-Warshall | O(VÃƒâ€šÃ‚Â³) | O(VÃƒâ€šÃ‚Â²) |
| Prim's (adj matrix) | O(VÃƒâ€šÃ‚Â²) | O(V) |
| Kruskal's | O(E log V) | O(V) |
| Topological Sort | O(V+E) | O(V) |
| Kosaraju's SCC | O(V+E) | O(V) |
| Tarjan's SCC | O(V+E) | O(V) |
| Knuth-Morris-Pratt | O(n+m) | O(m) |
| Rabin-Karp | O(n+m) avg | O(1) |
| BFS/DFS | O(V+E) | O(V) |

### 13.2 Data Structure Complexities

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/13-2-data-structure-complexities-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/13-2-data-structure-complexities-handwritten.svg" alt="Handwritten: 13.2 Data Structure Complexities" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/13-2-data-structure-complexities-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/13-2-data-structure-complexities-diagram.svg" alt="Diagram: 13.2 Data Structure Complexities" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/13-2-data-structure-complexities-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/13-2-data-structure-complexities-sticky.svg" alt="Sticky Note: 13.2 Data Structure Complexities" width="30%">
</a>


| Data Structure | Access | Search | Insert | Delete | Space |
|----------------|--------|--------|--------|--------|-------|
| Array | O(1) | O(n) | O(n) | O(n) | O(n) |
| Stack | O(n) | O(n) | O(1) | O(1) | O(n) |
| Queue | O(n) | O(n) | O(1) | O(1) | O(n) |
| Singly Linked List | O(n) | O(n) | O(1)* | O(1)* | O(n) |
| Doubly Linked List | O(n) | O(n) | O(1) | O(1) | O(n) |
| Binary Search Tree (avg) | O(log n) | O(log n) | O(log n) | O(log n) | O(n) |
| Binary Search Tree (worst) | O(n) | O(n) | O(n) | O(n) | O(n) |
| AVL / Red-Black Tree | O(log n) | O(log n) | O(log n) | O(log n) | O(n) |
| B-Tree | O(log n) | O(log n) | O(log n) | O(log n) | O(n) |
| B+ Tree | O(log n) | O(log n) | O(log n) | O(log n) | O(n) |
| Hash Table (avg) | N/A | O(1) | O(1) | O(1) | O(n) |
| Hash Table (worst) | N/A | O(n) | O(n) | O(n) | O(n) |
| Min-Heap | O(1) (min) | O(n) | O(log n) | O(log n) | O(n) |
| Trie | O(|s|) | O(|s|) | O(|s|) | O(|s|) | O(ÃƒÅ½Ã‚Â£|sÃƒÂ¡Ã‚ÂµÃ‚Â¢|) |

*At head (given pointer). Tail insert in singly linked = O(n).

---

## 14. Recurrence Relation Quick Reference

### 14.1 Master Theorem Ã¢â€ â€™ Detailed Cases

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/14-1-master-theorem-detailed-cases-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/14-1-master-theorem-detailed-cases-handwritten.svg" alt="Handwritten: 14.1 Master Theorem Ã¢â€ â€™ Detailed Cases" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/14-1-master-theorem-detailed-cases-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/14-1-master-theorem-detailed-cases-diagram.svg" alt="Diagram: 14.1 Master Theorem Ã¢â€ â€™ Detailed Cases" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/14-1-master-theorem-detailed-cases-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/14-1-master-theorem-detailed-cases-sticky.svg" alt="Sticky Note: 14.1 Master Theorem Ã¢â€ â€™ Detailed Cases" width="30%">
</a>


Given T(n) = aÃƒâ€šÃ‚Â·T(n/b) + f(n), compare f(n) with n^{log_b a}:

**Case 1 (Leaf-heavy):** f(n) = O(n^{log_b a ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ ÃƒÅ½Ã‚Âµ})
- T(n) = ÃƒÅ½Ã‹Å“(n^{log_b a})
- Example: T(n) = 2T(n/2) + 1 Ã¢â€ â€™ ÃƒÅ½Ã‹Å“(n)

**Case 2 (Equal):** f(n) = ÃƒÅ½Ã‹Å“(n^{log_b a}Ãƒâ€šÃ‚Â·log^k n)
- T(n) = ÃƒÅ½Ã‹Å“(n^{log_b a}Ãƒâ€šÃ‚Â·log^{k+1} n)
- Example: T(n) = 2T(n/2) + n Ã¢â€ â€™ ÃƒÅ½Ã‹Å“(n log n)
- Example: T(n) = 2T(n/2) + n log n Ã¢â€ â€™ ÃƒÅ½Ã‹Å“(n logÃƒâ€šÃ‚Â² n)

**Case 3 (Root-heavy):** f(n) = ÃƒÅ½Ã‚Â©(n^{log_b a + ÃƒÅ½Ã‚Âµ}) + regularity
- T(n) = ÃƒÅ½Ã‹Å“(f(n))
- Example: T(n) = T(n/2) + n Ã¢â€ â€™ ÃƒÅ½Ã‹Å“(n)

### 14.2 Extended Master Theorem

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/14-2-extended-master-theorem-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/14-2-extended-master-theorem-handwritten.svg" alt="Handwritten: 14.2 Extended Master Theorem" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/14-2-extended-master-theorem-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/14-2-extended-master-theorem-diagram.svg" alt="Diagram: 14.2 Extended Master Theorem" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/14-2-extended-master-theorem-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/14-2-extended-master-theorem-sticky.svg" alt="Sticky Note: 14.2 Extended Master Theorem" width="30%">
</a>


For T(n) = ÃƒÅ½Ã‚Â£_{i=1}^{k} a_iÃƒâ€šÃ‚Â·T(n/b_i) + f(n):
- Find p such that ÃƒÅ½Ã‚Â£ a_i / b_i^p = 1
- T(n) = ÃƒÅ½Ã‹Å“(n^pÃƒâ€šÃ‚Â·(1 + ÃƒÂ¢Ã‹â€ Ã‚Â«ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â�ÃƒÂ¢Ã‚Â�Ã‚Â¿ f(u)/u^{p+1} du))

### 14.3 Akra-Bazzi Method

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/14-3-akra-bazzi-method-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/14-3-akra-bazzi-method-handwritten.svg" alt="Handwritten: 14.3 Akra-Bazzi Method" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/14-3-akra-bazzi-method-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/14-3-akra-bazzi-method-diagram.svg" alt="Diagram: 14.3 Akra-Bazzi Method" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/14-3-akra-bazzi-method-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/14-3-akra-bazzi-method-sticky.svg" alt="Sticky Note: 14.3 Akra-Bazzi Method" width="30%">
</a>


For T(n) = ÃƒÅ½Ã‚Â£ a_iÃƒâ€šÃ‚Â·T(b_iÃƒâ€šÃ‚Â·n + h_i(n)) + g(n):
1. Find p: ÃƒÅ½Ã‚Â£ a_iÃƒâ€šÃ‚Â·b_i^p = 1
2. T(n) = ÃƒÅ½Ã‹Å“(n^pÃƒâ€šÃ‚Â·(1 + ÃƒÂ¢Ã‹â€ Ã‚Â«ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â�ÃƒÂ¢Ã‚Â�Ã‚Â¿ g(u)/u^{p+1} du))

### 14.4 Special Recurrences

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/14-4-special-recurrences-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/14-4-special-recurrences-handwritten.svg" alt="Handwritten: 14.4 Special Recurrences" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/14-4-special-recurrences-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/14-4-special-recurrences-diagram.svg" alt="Diagram: 14.4 Special Recurrences" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/14-4-special-recurrences-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/14-4-special-recurrences-sticky.svg" alt="Sticky Note: 14.4 Special Recurrences" width="30%">
</a>


| Recurrence | Method | Result |
|------------|--------|--------|
| T(n) = T(nÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1) + n | Unrolling | ÃƒÅ½Ã‹Å“(nÃƒâ€šÃ‚Â²) |
| T(n) = T(nÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1) + 1 | Unrolling | ÃƒÅ½Ã‹Å“(n) |
| T(n) = T(nÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1) + log n | Unrolling | ÃƒÅ½Ã‹Å“(n log n) |
| T(n) = T(nÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢2) + 1 | Unrolling | ÃƒÅ½Ã‹Å“(n) |
| T(n) = 2T(nÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1) + 1 | Unrolling | ÃƒÅ½Ã‹Å“(2ÃƒÂ¢Ã‚Â�Ã‚Â¿) |
| T(n) = T(ÃƒÂ¢Ã‹â€ Ã…Â¡n) + 1 | Change var | ÃƒÅ½Ã‹Å“(log log n) |
| T(n) = 2T(ÃƒÂ¢Ã‹â€ Ã…Â¡n) + log n | Change var | ÃƒÅ½Ã‹Å“(log nÃƒâ€šÃ‚Â·log log n) |
| T(n) = T(n/2) + T(n/2) + 1 | Master | ÃƒÅ½Ã‹Å“(n) |
| T(n) = 3T(n/2) + nÃƒâ€šÃ‚Â² | Master case 3 | ÃƒÅ½Ã‹Å“(nÃƒâ€šÃ‚Â²) |
| T(n) = 4T(n/2) + nÃƒâ€šÃ‚Â² | Master case 2 | ÃƒÅ½Ã‹Å“(nÃƒâ€šÃ‚Â² log n) |

### 14.5 Generating Functions for Recurrences

<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/14-5-generating-functions-for-recurrences-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/14-5-generating-functions-for-recurrences-handwritten.svg" alt="Handwritten: 14.5 Generating Functions for Recurrences" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/14-5-generating-functions-for-recurrences-diagram.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/14-5-generating-functions-for-recurrences-diagram.svg" alt="Diagram: 14.5 Generating Functions for Recurrences" width="30%">
</a>
<a href="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/14-5-generating-functions-for-recurrences-sticky.svg" target="_blank" rel="noopener">
  <img src="../../assets/images/diagrams/gate-cs-preparation/10-data-structures-algorithms/14-5-generating-functions-for-recurrences-sticky.svg" alt="Sticky Note: 14.5 Generating Functions for Recurrences" width="30%">
</a>


Fibonacci: F(n) = F(nÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢1) + F(nÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢2)
- Characteristic: xÃƒâ€šÃ‚Â² ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ x ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ 1 = 0
- Roots: ÃƒÂ�Ã¢â‚¬Â  = (1 + ÃƒÂ¢Ã‹â€ Ã…Â¡5)/2, ÃƒÂ�Ã‹â€  = (1 ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ ÃƒÂ¢Ã‹â€ Ã…Â¡5)/2
- Closed form: F(n) = (ÃƒÂ�Ã¢â‚¬Â ÃƒÂ¢Ã‚Â�Ã‚Â¿ ÃƒÂ¢Ã‹â€ Ã¢â‚¬â„¢ ÃƒÂ�Ã‹â€ ÃƒÂ¢Ã‚Â�Ã‚Â¿)/ÃƒÂ¢Ã‹â€ Ã…Â¡5 Ã¢â€ â€™ exponential growth O(ÃƒÂ�Ã¢â‚¬Â ÃƒÂ¢Ã‚Â�Ã‚Â¿)

---

## 15. GATE Exam Strategy for DSA

**Priority order by weight:**
1. **Graphs** (6ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“10 marks) Ã¢â€ â€™ BFS/DFS, MST algorithms, shortest paths, topological sort
2. **Trees** (5ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“8 marks) Ã¢â€ â€™ BST operations, AVL rotations, B/B+ tree properties, traversals
3. **Sorting** (3ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“5 marks) Ã¢â€ â€™ Complexity, stability, in-place, non-comparison sorts
4. **Complexity Analysis** (3ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“5 marks) Ã¢â€ â€™ Master theorem, recurrence solving, asymptotic notations
5. **Hashing** (2ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“4 marks) Ã¢â€ â€™ Probing sequences, load factor, rehashing
6. **Stacks & Queues** (2ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“4 marks) Ã¢â€ â€™ Expression evaluation, postfix/prefix/infix conversion
7. **Heaps** (2ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“4 marks) Ã¢â€ â€™ Heapify, heap sort, priority queue
8. **Arrays** (2ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“4 marks) Ã¢â€ â€™ Address calculation, sparse matrices
9. **Linked Lists** (1ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“3 marks) Ã¢â€ â€™ Operations, cycle detection
10. **Searching** (1ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“2 marks) Ã¢â€ â€™ Binary search, interpolation search

**Key formulas to memorize:**
- Catalan number: CÃƒÂ¢Ã¢â‚¬Å¡Ã¢â€žÂ¢ = (2n)!/((n+1)!n!)
- Sum of first n: n(n+1)/2
- Sum of squares: n(n+1)(2n+1)/6
- Sum of cubes: [n(n+1)/2]Ãƒâ€šÃ‚Â²
- log a^b = bÃƒâ€šÃ‚Â·log a
- log_a b = log_c b / log_c a
- a^{log_b c} = c^{log_b a}

**Time management:**
- 1-mark questions: ~2 minutes
- 2-mark questions: ~4 minutes
- Skip after 5 minutes of no progress
- Numerical answer type (NAT): double-check calculation

---

*End of Chapter 10 -> Data Structures & Algorithms for GATE CS. Target: 1200-2000 lines covering all GATE-relevant DSA topics with 50+ PYQs (2010-2025), complexity cheat sheet, recurrence reference, and trap analysis.*

---

## Summary

Data Structures & Algorithms (DSA) carries the highest weight in GATE CS (10-14 marks, ~12% of the paper) and covers arrays, linked lists, stacks, queues, trees (BST, AVL, B/B+ trees), graphs (BFS, DFS, MST algorithms Ã¢â‚¬â€� Kruskal, Prim; shortest paths Ã¢â‚¬â€� Dijkstra, Bellman-Ford, Floyd-Warshall), sorting (comparison-based and non-comparison, stability, in-place), searching (binary search, interpolation search), hashing (open/closed addressing, probing, load factor), and asymptotic complexity analysis (Big-O, Master theorem, recurrence solving). Graph algorithms (6-10 marks) and trees (5-8 marks) are the highest-weight topics, followed by sorting complexity analysis (3-5 marks) and hashing (2-4 marks). The key to success is choosing the right data structure for each operation Ã¢â‚¬â€� understanding trade-offs between insertion, deletion, search, and space complexity across different structures. The Master theorem for solving recurrences T(n) = aT(n/b) + f(n) is essential for complexity analysis of recursive algorithms. GATE questions often ask about underlying algorithm invariants and edge cases rather than straightforward implementation.

```mermaid
flowchart TD
    A[Data Structures & Algorithms] --> B[Linear Structures]
    A --> C[Trees]
    A --> D[Graphs]
    A --> E[Sorting & Searching]
    A --> F[Hashing]
    B --> B1[Arrays, Linked Lists]
    B --> B2[Stacks, Queues]
    C --> C1[BST, AVL, Red-Black]
    C --> C2[B/B+ Trees, Heaps]
    D --> D1[BFS, DFS, Topological Sort]
    D --> D2[MST: Kruskal, Prim]
    D --> D3[Shortest Paths]
    E --> E1[Quick, Merge, Heap Sort]
    E --> E2[Binary Search, Interpolation]
    F --> F1[Chaining, Open Addressing]
```

## TypeScript Implementations

```typescript
/**
 * BinarySearchTreeOps Ã¢â‚¬â€� BST Operations Suite
 * -----------------------------------------------
 * Implements BST construction, search, insertion, deletion,
 * traversals, and balancing check (for AVL-style height balance).
 */
class TreeNode {
  constructor(
    public value: number,
    public left: TreeNode | null = null,
    public right: TreeNode | null = null
  ) {}
}

class BinarySearchTreeOps {
  private root: TreeNode | null = null;

  insert(value: number): void {
    this.root = this.insertNode(this.root, value);
  }

  private insertNode(node: TreeNode | null, value: number): TreeNode {
    if (!node) return new TreeNode(value);
    if (value < node.value) {
      node.left = this.insertNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.insertNode(node.right, value);
    }
    return node;
  }

  search(value: number): boolean {
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      current = value < current.value ? current.left : current.right;
    }
    return false;
  }

  delete(value: number): void {
    this.root = this.deleteNode(this.root, value);
  }

  private deleteNode(node: TreeNode | null, value: number): TreeNode | null {
    if (!node) return null;
    if (value < node.value) {
      node.left = this.deleteNode(node.left, value);
      return node;
    }
    if (value > node.value) {
      node.right = this.deleteNode(node.right, value);
      return node;
    }
    // Node to delete found
    if (!node.left) return node.right;
    if (!node.right) return node.left;
    // Two children: find inorder successor
    const successor = this.findMin(node.right);
    node.value = successor.value;
    node.right = this.deleteNode(node.right, successor.value);
    return node;
  }

  private findMin(node: TreeNode): TreeNode {
    let current = node;
    while (current.left) current = current.left;
    return current;
  }

  /** Inorder traversal Ã¢â‚¬â€� returns sorted array */
  inorder(): number[] {
    const result: number[] = [];
    this.inorderTraversal(this.root, result);
    return result;
  }

  private inorderTraversal(node: TreeNode | null, result: number[]): void {
    if (!node) return;
    this.inorderTraversal(node.left, result);
    result.push(node.value);
    this.inorderTraversal(node.right, result);
  }

  /** Level-order traversal (BFS) */
  levelOrder(): number[][] {
    if (!this.root) return [];
    const result: number[][] = [];
    let queue: TreeNode[] = [this.root];
    while (queue.length > 0) {
      const level: number[] = [];
      const nextQueue: TreeNode[] = [];
      for (const node of queue) {
        level.push(node.value);
        if (node.left) nextQueue.push(node.left);
        if (node.right) nextQueue.push(node.right);
      }
      result.push(level);
      queue = nextQueue;
    }
    return result;
  }

  /** Check if the tree is height-balanced (AVL condition) */
  isBalanced(): boolean {
    return this.checkBalance(this.root) !== -1;
  }

  private checkBalance(node: TreeNode | null): number {
    if (!node) return 0;
    const left = this.checkBalance(node.left);
    if (left === -1) return -1;
    const right = this.checkBalance(node.right);
    if (right === -1) return -1;
    if (Math.abs(left - right) > 1) return -1;
    return Math.max(left, right) + 1;
  }

  /** Find the lowest common ancestor */
  findLCA(a: number, b: number): number | null {
    const lca = this.findLCANode(this.root, a, b);
    return lca ? lca.value : null;
  }

  private findLCANode(
    node: TreeNode | null,
    a: number,
    b: number
  ): TreeNode | null {
    if (!node) return null;
    if (node.value === a || node.value === b) return node;
    const left = this.findLCANode(node.left, a, b);
    const right = this.findLCANode(node.right, a, b);
    if (left && right) return node;
    return left || right;
  }

  print(): string {
    const levels = this.levelOrder();
    let out = 'BST Level Order:\n';
    for (let i = 0; i < levels.length; i++) {
      out += `  Level ${i}: [${levels[i].join(', ')}]\n`;
    }
    return out;
  }
}

// Example
const bst = new BinarySearchTreeOps();
[50, 30, 70, 20, 40, 60, 80, 35, 45].forEach(v => bst.insert(v));
console.log(bst.print());
console.log('Inorder:', bst.inorder().join(', '));
console.log('Search 40:', bst.search(40));
console.log('Search 100:', bst.search(100));
console.log('Is balanced:', bst.isBalanced());
console.log('LCA of 20,40:', bst.findLCA(20, 40));
bst.delete(30);
console.log('After deleting 30, inorder:', bst.inorder().join(', '));
```

## Chapter Quiz

**5 Multiple Choice Questions**

| Q# | Question | Options | Answer |
|:--:|---------|---------|:------:|
| 1 | The worst-case time complexity of Quicksort is: | A) O(n log n), B) O(nÃ‚Â²), C) O(n), D) O(log n) | **B** |
| 2 | Which traversal of a BST yields sorted order? | A) Preorder, B) Inorder, C) Postorder, D) Level order | **B** |
| 3 | Minimum nodes in an AVL tree of height h is: | A) F_{h+2} - 1 (Fibonacci), B) 2^h - 1, C) h + 1, D) 2h | **A** |
| 4 | Kruskal's MST algorithm has time complexity: | A) O(VÃ‚Â²), B) O(E log V), C) O(V+E), D) O(E log E) | **D** |
| 5 | A full binary tree with n internal nodes has how many leaves? | A) n, B) n+1, C) 2n, D) n-1 | **B** |

## Exercises

**5 Practice Problems**

<details>
<summary><strong>Exercise 1:</strong> Recurrence Solving</summary>
<p>Solve T(n) = 2T(n/2) + nÃ‚Â² using the Master theorem.</p>
<p><strong>Solution:</strong> a=2, b=2, f(n)=nÃ‚Â². log_b(a)=1. n^1 vs nÃ‚Â² Ã¢â€ â€™ case 3: f(n) = ÃŽÂ©(n^{1+ÃŽÂµ}), and af(n/b) = 2(n/2)Ã‚Â² = nÃ‚Â²/2 Ã¢â€°Â¤ cnÃ‚Â² for c=0.5 < 1. T(n) = ÃŽËœ(nÃ‚Â²).</p>
</details>

<details>
<summary><strong>Exercise 2:</strong> Tree Reconstruction</summary>
<p>Preorder: ABDECF, Inorder: DBEAFC. Reconstruct the binary tree.</p>
<p><strong>Solution:</strong> Root A (from preorder). Inorder splits: left={DBE}, right={FC}. Preorder left: BDE Ã¢â€ â€™ B is left child. Inorder: DBE Ã¢â€ â€™ D left, E right of B. Preorder right: CF Ã¢â€ â€™ C is right child. Inorder: FC Ã¢â€ â€™ F left of C. Tree: A(B(D,E), C(F,null)).</p>
</details>

<details>
<summary><strong>Exercise 3:</strong> Shortest Path</summary>
<p>Graph edges: A-B(4), A-C(2), B-C(1), B-D(5), C-D(8), C-E(10), D-E(2), D-F(6), E-F(3). Find shortest path A to F.</p>
<p><strong>Solution:</strong> Dijkstra: A(0)Ã¢â€ â€™C(2)Ã¢â€ â€™B(3)Ã¢â€ â€™D(8)Ã¢â€ â€™E(10)Ã¢â€ â€™F(13). Path: A-C-B-D-E-F = 2+1+5+2+3=13.</p>
</details>

<details>
<summary><strong>Exercise 4:</strong> Hashing with Linear Probing</summary>
<p>Insert 12,22,32,42,52 into table size 10 with h(k)=k mod 10, linear probing. Count total collisions.</p>
<p><strong>Solution:</strong> 12(h=2):0, 22(h=2):1(c)Ã¢â€ â€™3, 32(h=2):2(c)Ã¢â€ â€™4, 42(h=2):3(c)Ã¢â€ â€™5, 52(h=2):4(c)Ã¢â€ â€™6. Collisions: 0+1+2+3+4=10.</p>
</details>

<details>
<summary><strong>Exercise 5:</strong> Postfix Evaluation</summary>
<p>Evaluate: 5 3 + 8 2 - * 4 /</p>
<p><strong>Solution:</strong> Push 5,3 Ã¢â€ â€™ pop 3,5 = 5+3=8 Ã¢â€ â€™ push 8. Push 8,2 Ã¢â€ â€™ pop 2,8 = 8-2=6 Ã¢â€ â€™ push 6. Pop 6,8 = 8*6=48 Ã¢â€ â€™ push 48. Push 4 Ã¢â€ â€™ pop 4,48 = 48/4=12. Result: 12.</p>
</details>

---

*End of Chapter 10 Ã¢â‚¬â€� Data Structures & Algorithms for GATE CS. Extended with summary, TypeScript implementations, quiz, and exercises.* Ã¢â€ â€™ Data Structures & Algorithms for GATE CS. Target: 1200ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“2000 lines covering all GATE-relevant DSA topics with 50+ PYQs (2010ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“2025), complexity cheat sheet, recurrence reference, and trap analysis.*
