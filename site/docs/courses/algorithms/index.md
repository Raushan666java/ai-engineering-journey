---
id: index
slug: /algorithms
title: "CS 310: Design and Analysis of Algorithms"
sidebar_label: "CS 310: Design and Analysis of Algorithms"
sidebar_position: 19
---
# CS 310: Design and Analysis of Algorithms

**Course Overview:** A rigorous treatment of algorithm design, analysis, and correctness. Students will master asymptotic analysis, fundamental data structures, classic algorithmic paradigms, and the theoretical foundations of computational complexity.

**Prerequisites:** Discrete Mathematics, Data Structures, Programming in C++.

**Core Text:** Cormen, Leiserson, Rivest, Stein. *Introduction to Algorithms*, Fourth Edition. MIT Press, 2022.

**Grading:** Problem sets (40%), midterm examination (25%), final examination (35%).

---

## Course Philosophy

Algorithms are the bedrock of computer science. This course develops two complementary skills: the ability to **design** correct and efficient algorithms, and the ability to **analyze** them with mathematical rigor. Each chapter presents theoretical foundations, worked examples in C++, complexity analysis, and exercises spanning recall through research-level challenge problems.

---

## Chapter List

| # | Title | Topics |
|---|-------|--------|
| 1 | **Fundamentals of Analysis** | Asymptotic notation, recurrence relations, substitution method, master theorem, recursion trees, amortized analysis |
| 2 | **Searching** | Linear search, binary search, interpolation search, exponential search, ternary search |
| 3 | **Comparison-Based Sorting** | Merge sort, quick sort, heap sort, lower bound on comparison sorting |
| 4 | **Linear-Time Sorting** | Counting sort, radix sort, bucket sort, comparative analysis |
| 5 | **Divide and Conquer** | Maximum subarray, Strassen matrix multiplication, closest pair, Karatsuba multiplication |
| 6 | **Greedy Algorithms** | Activity selection, Huffman coding, fractional knapsack, job sequencing, canonical coin change |
| 7 | **Dynamic Programming: Foundations** | Memoization vs. tabulation, optimal substructure, overlapping subproblems, Fibonacci, rod cutting |
| 8 | **Dynamic Programming: Knapsack Problems** | 0/1 knapsack, unbounded knapsack, subset sum, equal partition, coin change, target sum |
| 9 | **Dynamic Programming: Sequences** | LCS, LIS (n^2 and n log n), edit distance, matrix chain multiplication, palindrome partitioning |
| 10 | **Dynamic Programming: Trees and Grids** | Tree DP (diameter, max path sum), grid DP (unique paths, min path sum), DP with bitmasking |
| 11 | **Graph Shortest Paths** | Dijkstra, Bellman-Ford, Floyd-Warshall, DAG shortest path, A* search |
| 12 | **Minimum Spanning Trees** | Kruskal (union-find), Prim (priority queue), Boruvka, applications |
| 13 | **Network Flow** | Max flow min cut, Ford-Fulkerson, Edmonds-Karp, Dinic, bipartite matching, assignment problem |
| 14 | **String Algorithms** | KMP, Rabin-Karp, Z-algorithm, Manacher, suffix array, LCP array |
| 15 | **NP-Completeness** | P, NP, NP-complete, NP-hard, reductions, Cook-Levin theorem, SAT, TSP, vertex cover, clique |
| 16 | **Approximation Algorithms** | Vertex cover 2-approximation, MST-based TSP, set cover, MAX-SAT |
| 17 | **Randomized Algorithms** | Quickselect, randomized quicksort, Miller-Rabin primality, Monte Carlo vs. Las Vegas |
| 18 | **Advanced Topics** | Online algorithms (paging, ski rental), streaming (reservoir sampling, Bloom filter), parallel algorithms |

---

## How to Read This Textbook

Each chapter follows a consistent structure:

1. **Learning Objectives** — The specific knowledge and skills to be gained.
2. **Theory** — Formal definitions, theorems, complexity analysis, and pseudocode.
3. **Examples** — Worked problems with full derivation and C++ implementations.
4. **Summary** — Concise recapitulation of key results.
5. **Exercises** — Three tiers: Review Questions (conceptual), Application Problems (coding and derivation), Challenge Problem (research-adjacent).

Code examples use modern C++ (C++17) with the Standard Template Library. Complexity bounds are stated in Big-Theta notation when tight bounds are known, and Big-O otherwise.

---

## Notation

| Symbol | Meaning |
|--------|---------|
| \( T(n) \) | Running time on input of size \( n \) |
| \( \Theta(g(n)) \) | Asymptotically tight bound |
| \( O(g(n)) \) | Asymptotic upper bound |
| \( \Omega(g(n)) \) | Asymptotic lower bound |
| \( \lg n \) | Base-2 logarithm |
| \( \log n \) | Base unspecified (context-dependent) |

---

## Reference Sheet: Common Recurrences

| Recurrence | Solution | Example |
|------------|----------|---------|
| \( T(n) = T(n-1) + O(1) \) | \( \Theta(n) \) | Sequential search |
| \( T(n) = T(n-1) + O(n) \) | \( \Theta(n^2) \) | Selection sort |
| \( T(n) = 2T(n/2) + O(n) \) | \( \Theta(n \log n) \) | Merge sort |
| \( T(n) = 2T(n/2) + O(1) \) | \( \Theta(n) \) | Tree traversal |
| \( T(n) = 2T(n/2) + O(n \log n) \) | \( \Theta(n \log^2 n) \) | Closest pair (naive) |
| \( T(n) = aT(n/b) + O(n^d) \) | Master theorem | General divide-and-conquer |
