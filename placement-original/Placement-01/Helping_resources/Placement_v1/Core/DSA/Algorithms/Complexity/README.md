# Algorithm Complexity Analysis

## Overview
Complexity analysis is the process of determining how the performance of an algorithm scales with input size. It helps us compare algorithms and predict their behavior on large inputs.

## Time Complexity

### Big O Notation
Describes the upper bound of an algorithm's running time in the worst case.

| Notation | Name | Example |
|----------|------|---------|
| O(1) | Constant | Array access, hash table lookup |
| O(log n) | Logarithmic | Binary search |
| O(n) | Linear | Linear search |
| O(n log n) | Linearithmic | Merge sort, quick sort (average) |
| O(n²) | Quadratic | Bubble sort, insertion sort |
| O(n³) | Cubic | Simple matrix multiplication |
| O(2ⁿ) | Exponential | Recursive Fibonacci, generating subsets |
| O(n!) | Factorial | Generating permutations |

### Common Growth Rates
![Complexity Growth](https://www.bigocheatsheet.com/img/big-o-complexity.png)

### Analysis Techniques
1. **Count operations**: Count the number of basic operations performed
2. **Recurrence relations**: For recursive algorithms
3. **Amortized analysis**: Average performance over a sequence of operations

## Space Complexity
Measures the amount of memory an algorithm uses relative to input size.

### Common Space Complexities
- **O(1)**: Constant space (in-place algorithms)
- **O(log n)**: Logarithmic space (many divide and conquer algorithms)
- **O(n)**: Linear space (storing input or output)
- **O(n²)**: Quadratic space (storing a matrix)

## Recurrence Relations and Master Theorem

### Master Theorem
For recurrence relations of the form: T(n) = aT(n/b) + f(n)
- a: number of subproblems
- b: factor by which problem size is reduced
- f(n): cost of dividing and combining

**Time Complexity**:
- **Case 1**: If f(n) = O(n^c) where c < log_b(a), then T(n) = Θ(n^(log_b(a)))
- **Case 2**: If f(n) = Θ(n^c) where c = log_b(a), then T(n) = Θ(n^c * log n)
- **Case 3**: If f(n) = Ω(n^c) where c > log_b(a), then T(n) = Θ(f(n))

### Common Recurrence Relations
- Binary Search: T(n) = T(n/2) + O(1) = O(log n)
- Merge Sort: T(n) = 2T(n/2) + O(n) = O(n log n)
- Quick Sort (average): T(n) = 2T(n/2) + O(n) = O(n log n)
- Quick Sort (worst): T(n) = T(n-1) + O(n) = O(n²)
- Strassen's Matrix Multiplication: T(n) = 7T(n/2) + O(n²) = O(n^log₂7)

## Analyzing Common Algorithms

### Searching Algorithms
- **Linear Search**: O(n)
- **Binary Search**: O(log n)
- **Hash Table Lookup**: O(1) average, O(n) worst case

### Sorting Algorithms
- **Bubble Sort**: O(n²)
- **Selection Sort**: O(n²)
- **Insertion Sort**: O(n²)
- **Merge Sort**: O(n log n)
- **Quick Sort**: O(n log n) average, O(n²) worst case
- **Heap Sort**: O(n log n)
- **Counting Sort**: O(n + k) where k is the range of input
- **Radix Sort**: O(d(n + k)) where d is the number of digits

### Graph Algorithms
- **BFS/DFS**: O(V + E)
- **Dijkstra's Algorithm**: O((V + E) log V) with binary heap
- **Bellman-Ford**: O(V * E)
- **Floyd-Warshall**: O(V³)
- **Kruskal's MST**: O(E log E)
- **Prim's MST**: O(E log V)

## Best Practices for Optimization

### Time Optimization
1. Choose appropriate data structures
2. Avoid nested loops when possible
3. Use memoization for overlapping subproblems
4. Prefer divide and conquer over brute force
5. Consider space-time tradeoffs

### Space Optimization
1. Use in-place algorithms when possible
2. Release memory when no longer needed
3. Use bit manipulation for compact representation
4. Consider iterative solutions instead of recursive ones

## Practical Considerations
- Constant factors matter in practice
- Hardware limitations (cache behavior, memory hierarchy)
- Input distribution can affect actual performance
- Optimize the common case

## Analysis Framework
1. Identify the input size parameter(s)
2. Identify the basic operation(s)
3. Determine the worst/average/best case
4. Set up a recurrence relation or count operations
5. Solve for the asymptotic complexity

## Common Pitfalls
- Focusing only on time complexity and ignoring space
- Ignoring constant factors for small inputs
- Incorrect analysis of recursive algorithms
- Not considering all operations (e.g., string concatenation)
- Assuming worst-case is always relevant