# Module 7: Algorithms and Complexity Complete Guide
## 📚 Comprehensive Algorithm Analysis for Computer Science

### 🎯 Module Overview
- **Duration**: 4 weeks (60 hours)
- **Difficulty**: Advanced
- **Prerequisites**: All previous modules, basic programming
- **Applications**: Algorithm design, performance analysis, complexity theory

## 📋 Learning Objectives
- Master algorithm analysis techniques
- Understand computational complexity classes
- Apply divide-and-conquer strategies
- Implement dynamic programming solutions
- Analyze greedy algorithms
- Solve NP-complete problems

## ⏱️ Topic 1: Algorithm Analysis Fundamentals

### 1.1 Time Complexity Analysis
```
Big O Notation: f(n) = O(g(n)) if ∃c,n₀ such that f(n) ≤ c·g(n) for n ≥ n₀

Common Complexities:
- O(1): Constant time
- O(log n): Logarithmic time
- O(n): Linear time
- O(n log n): Linearithmic time
- O(n²): Quadratic time
- O(n³): Cubic time
- O(2ⁿ): Exponential time
- O(n!): Factorial time

Analysis Techniques:
1. Count basic operations
2. Identify loops and recursion
3. Apply master theorem for recurrences
4. Use substitution method
5. Apply recursion tree method
```

### 1.2 Space Complexity Analysis
```
Space Complexity: Amount of memory used by algorithm

Types:
- Auxiliary Space: Extra space used by algorithm
- Space Complexity: Auxiliary space + input space

Examples:
- Iterative algorithms: O(1) auxiliary space
- Recursive algorithms: O(depth) auxiliary space
- Dynamic programming: O(subproblems) space
```

### 1.3 Recurrence Relations
```
Master Theorem: T(n) = aT(n/b) + f(n)

Case 1: f(n) = O(n^(log_b(a) - ε)) → T(n) = Θ(n^log_b(a))
Case 2: f(n) = Θ(n^log_b(a)) → T(n) = Θ(n^log_b(a) log n)
Case 3: f(n) = Ω(n^(log_b(a) + ε)) → T(n) = Θ(f(n))

Examples:
- T(n) = 2T(n/2) + O(n) → T(n) = O(n log n) [Merge Sort]
- T(n) = T(n-1) + O(1) → T(n) = O(n) [Linear Search]
- T(n) = T(n-1) + O(n) → T(n) = O(n²) [Selection Sort]
```

## 🔄 Topic 2: Divide and Conquer

### 2.1 Divide and Conquer Strategy
```
Algorithm Pattern:
1. Divide: Break problem into smaller subproblems
2. Conquer: Solve subproblems recursively
3. Combine: Merge solutions to solve original problem

Examples:
- Merge Sort: T(n) = 2T(n/2) + O(n)
- Quick Sort: T(n) = 2T(n/2) + O(n) average case
- Binary Search: T(n) = T(n/2) + O(1)
- Strassen's Matrix Multiplication: T(n) = 7T(n/2) + O(n²)
```

### 2.2 Classic Divide and Conquer Algorithms
```python
def merge_sort(arr):
    """Merge Sort: O(n log n) time, O(n) space"""
    if len(arr) <= 1:
        return arr
    
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    result.extend(left[i:])
    result.extend(right[j:])
    return result

def quick_sort(arr, low=0, high=None):
    """Quick Sort: O(n log n) average, O(n²) worst"""
    if high is None:
        high = len(arr) - 1
    
    if low < high:
        pi = partition(arr, low, high)
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)

def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    
    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1

def binary_search(arr, target, low=0, high=None):
    """Binary Search: O(log n) time, O(1) space"""
    if high is None:
        high = len(arr) - 1
    
    if low <= high:
        mid = (low + high) // 2
        
        if arr[mid] == target:
            return mid
        elif arr[mid] > target:
            return binary_search(arr, target, low, mid - 1)
        else:
            return binary_search(arr, target, mid + 1, high)
    
    return -1
```

## 💎 Topic 3: Dynamic Programming

### 3.1 Dynamic Programming Principles
```
Key Characteristics:
1. Optimal Substructure: Optimal solution contains optimal solutions to subproblems
2. Overlapping Subproblems: Same subproblems solved multiple times

Approaches:
1. Top-down (Memoization): Recursive with caching
2. Bottom-up (Tabulation): Iterative table filling

Steps:
1. Define subproblems
2. Write recurrence relation
3. Identify base cases
4. Determine computation order
5. Implement solution
```

### 3.2 Classic DP Problems
```python
def fibonacci_dp(n):
    """Fibonacci with DP: O(n) time, O(n) space"""
    if n <= 1:
        return n
    
    dp = [0] * (n + 1)
    dp[1] = 1
    
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    
    return dp[n]

def longest_common_subsequence(text1, text2):
    """LCS: O(mn) time, O(mn) space"""
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i-1] == text2[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    
    return dp[m][n]

def knapsack_01(weights, values, capacity):
    """0/1 Knapsack: O(nW) time, O(nW) space"""
    n = len(weights)
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]
    
    for i in range(1, n + 1):
        for w in range(capacity + 1):
            if weights[i-1] <= w:
                dp[i][w] = max(
                    values[i-1] + dp[i-1][w - weights[i-1]],
                    dp[i-1][w]
                )
            else:
                dp[i][w] = dp[i-1][w]
    
    return dp[n][capacity]

def edit_distance(word1, word2):
    """Edit Distance: O(mn) time, O(mn) space"""
    m, n = len(word1), len(word2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    # Initialize base cases
    for i in range(m + 1):
        dp[i][0] = i
    for j in range(n + 1):
        dp[0][j] = j
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i-1] == word2[j-1]:
                dp[i][j] = dp[i-1][j-1]
            else:
                dp[i][j] = 1 + min(
                    dp[i-1][j],    # deletion
                    dp[i][j-1],    # insertion
                    dp[i-1][j-1]   # substitution
                )
    
    return dp[m][n]
```

## 🎯 Topic 4: Greedy Algorithms

### 4.1 Greedy Strategy
```
Greedy Choice Property: Locally optimal choice leads to globally optimal solution

Steps:
1. Make greedy choice
2. Reduce to subproblem
3. Solve subproblem recursively
4. Combine solutions

Proving Correctness:
1. Greedy choice property
2. Optimal substructure
3. Mathematical induction
```

### 4.2 Classic Greedy Algorithms
```python
def activity_selection(start, finish):
    """Activity Selection: O(n log n) time"""
    n = len(start)
    activities = list(range(n))
    activities.sort(key=lambda i: finish[i])
    
    selected = [activities[0]]
    last_finish = finish[activities[0]]
    
    for i in range(1, n):
        if start[activities[i]] >= last_finish:
            selected.append(activities[i])
            last_finish = finish[activities[i]]
    
    return selected

def fractional_knapsack(weights, values, capacity):
    """Fractional Knapsack: O(n log n) time"""
    n = len(weights)
    items = [(values[i]/weights[i], weights[i], values[i]) for i in range(n)]
    items.sort(reverse=True)
    
    total_value = 0
    for ratio, weight, value in items:
        if capacity >= weight:
            capacity -= weight
            total_value += value
        else:
            total_value += ratio * capacity
            break
    
    return total_value

def huffman_coding(frequencies):
    """Huffman Coding: O(n log n) time"""
    import heapq
    
    heap = [[freq, i, ""] for i, freq in enumerate(frequencies)]
    heapq.heapify(heap)
    
    while len(heap) > 1:
        lo = heapq.heappop(heap)
        hi = heapq.heappop(heap)
        
        for pair in lo[1:]:
            if isinstance(pair, str):
                pair = "0" + pair
        for pair in hi[1:]:
            if isinstance(pair, str):
                pair = "1" + pair
        
        heapq.heappush(heap, [lo[0] + hi[0]] + lo[1:] + hi[1:])
    
    return heap[0]

class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n
    
    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]
    
    def union(self, x, y):
        px, py = self.find(x), self.find(y)
        if px == py:
            return False
        if self.rank[px] < self.rank[py]:
            px, py = py, px
        self.parent[py] = px
        if self.rank[px] == self.rank[py]:
            self.rank[px] += 1
        return True

def kruskal_mst(edges, n):
    """Kruskal's MST: O(E log E) time"""
    edges.sort()
    uf = UnionFind(n)
    mst = []
    
    for weight, u, v in edges:
        if uf.union(u, v):
            mst.append((weight, u, v))
            if len(mst) == n - 1:
                break
    
    return mst
```

## 🧮 Topic 5: Complexity Classes

### 5.1 Computational Complexity Theory
```
Complexity Classes:
- P: Problems solvable in polynomial time
- NP: Problems verifiable in polynomial time
- NP-Complete: Hardest problems in NP
- NP-Hard: At least as hard as NP-Complete problems
- PSPACE: Problems solvable in polynomial space
- EXPTIME: Problems solvable in exponential time

P vs NP Problem:
- Open question: Does P = NP?
- Most believe P ≠ NP
- Clay Millennium Problem ($1M prize)
```

### 5.2 NP-Complete Problems
```
Classic NP-Complete Problems:
1. Boolean Satisfiability (SAT)
2. 3-SAT
3. Traveling Salesman Problem (TSP)
4. Hamiltonian Path/Cycle
5. Vertex Cover
6. Clique Problem
7. Independent Set
8. Graph Coloring
9. Subset Sum
10. Partition Problem

Proving NP-Completeness:
1. Show problem is in NP
2. Reduce known NP-Complete problem to it
3. Reduction must be polynomial time
```

### 5.3 Approximation Algorithms
```python
def vertex_cover_approximation(edges, n):
    """2-approximation for Vertex Cover"""
    cover = set()
    remaining_edges = edges.copy()
    
    while remaining_edges:
        u, v = remaining_edges.pop()
        cover.add(u)
        cover.add(v)
        
        # Remove all edges incident to u or v
        remaining_edges = [(x, y) for x, y in remaining_edges 
                          if x not in {u, v} and y not in {u, v}]
    
    return cover

def tsp_nearest_neighbor(distances):
    """Nearest Neighbor TSP Heuristic"""
    n = len(distances)
    visited = [False] * n
    tour = [0]
    visited[0] = True
    total_distance = 0
    
    current = 0
    for _ in range(n - 1):
        nearest = -1
        min_dist = float('inf')
        
        for next_city in range(n):
            if not visited[next_city] and distances[current][next_city] < min_dist:
                min_dist = distances[current][next_city]
                nearest = next_city
        
        tour.append(nearest)
        visited[nearest] = True
        total_distance += min_dist
        current = nearest
    
    # Return to start
    total_distance += distances[current][0]
    tour.append(0)
    
    return tour, total_distance

def knapsack_greedy_approximation(weights, values, capacity):
    """Greedy approximation for 0/1 Knapsack"""
    n = len(weights)
    items = [(values[i]/weights[i], i) for i in range(n)]
    items.sort(reverse=True)
    
    total_value = 0
    total_weight = 0
    selected = []
    
    for ratio, i in items:
        if total_weight + weights[i] <= capacity:
            selected.append(i)
            total_value += values[i]
            total_weight += weights[i]
    
    return selected, total_value
```

## 🖥️ Topic 6: Advanced Algorithm Techniques

### 6.1 Backtracking
```python
def n_queens(n):
    """N-Queens using backtracking"""
    def is_safe(board, row, col):
        # Check column
        for i in range(row):
            if board[i][col] == 1:
                return False
        
        # Check diagonals
        for i, j in zip(range(row-1, -1, -1), range(col-1, -1, -1)):
            if board[i][j] == 1:
                return False
        
        for i, j in zip(range(row-1, -1, -1), range(col+1, n)):
            if board[i][j] == 1:
                return False
        
        return True
    
    def solve(board, row):
        if row >= n:
            return True
        
        for col in range(n):
            if is_safe(board, row, col):
                board[row][col] = 1
                if solve(board, row + 1):
                    return True
                board[row][col] = 0
        
        return False
    
    board = [[0] * n for _ in range(n)]
    if solve(board, 0):
        return board
    return None

def sudoku_solver(board):
    """Sudoku solver using backtracking"""
    def is_valid(board, row, col, num):
        # Check row
        for j in range(9):
            if board[row][j] == num:
                return False
        
        # Check column
        for i in range(9):
            if board[i][col] == num:
                return False
        
        # Check 3x3 box
        start_row, start_col = 3 * (row // 3), 3 * (col // 3)
        for i in range(3):
            for j in range(3):
                if board[start_row + i][start_col + j] == num:
                    return False
        
        return True
    
    def solve():
        for i in range(9):
            for j in range(9):
                if board[i][j] == 0:
                    for num in range(1, 10):
                        if is_valid(board, i, j, num):
                            board[i][j] = num
                            if solve():
                                return True
                            board[i][j] = 0
                    return False
        return True
    
    return solve()
```

### 6.2 Branch and Bound
```python
def tsp_branch_and_bound(distances):
    """TSP using Branch and Bound"""
    n = len(distances)
    
    def calculate_bound(path, visited):
        bound = 0
        
        # Add cost of current path
        for i in range(len(path) - 1):
            bound += distances[path[i]][path[i+1]]
        
        # Add minimum outgoing edge for each unvisited vertex
        for i in range(n):
            if i not in visited:
                min_edge = min(distances[i][j] for j in range(n) if j != i)
                bound += min_edge
        
        return bound
    
    best_cost = float('inf')
    best_path = None
    
    def branch_and_bound(path, visited, current_cost):
        nonlocal best_cost, best_path
        
        if len(path) == n:
            # Complete tour
            total_cost = current_cost + distances[path[-1]][path[0]]
            if total_cost < best_cost:
                best_cost = total_cost
                best_path = path + [path[0]]
            return
        
        for next_city in range(n):
            if next_city not in visited:
                new_path = path + [next_city]
                new_visited = visited | {next_city}
                new_cost = current_cost + distances[path[-1]][next_city]
                
                # Calculate bound
                bound = calculate_bound(new_path, new_visited)
                
                if bound < best_cost:
                    branch_and_bound(new_path, new_visited, new_cost)
    
    # Start from city 0
    branch_and_bound([0], {0}, 0)
    return best_path, best_cost
```

## 📝 Practice Problems (300+ Problems)

### Algorithm Analysis (1-75)
1. Analyze time complexity of nested loops
2. Solve recurrence T(n) = 3T(n/4) + O(n²)
3. Compare space complexity of iterative vs recursive algorithms
4. Prove Big O notation properties
5. Analyze amortized complexity

### Divide and Conquer (76-125)
26. Implement Strassen's matrix multiplication
27. Find maximum subarray sum (Kadane's algorithm)
28. Implement closest pair of points algorithm
29. Design divide-and-conquer for finding kth smallest element
30. Analyze complexity of merge sort variants

### Dynamic Programming (126-175)
51. Solve coin change problem with minimum coins
52. Implement longest increasing subsequence
53. Solve matrix chain multiplication
54. Design DP solution for palindrome partitioning
55. Optimize space complexity of DP solutions

### Greedy Algorithms (176-225)
76. Prove correctness of activity selection
77. Implement Dijkstra's shortest path algorithm
78. Solve job scheduling with deadlines
79. Design greedy algorithm for interval scheduling
80. Analyze when greedy approach fails

### Complexity Theory (226-275)
101. Prove problem is NP-Complete
102. Design approximation algorithm with known ratio
103. Analyze P vs NP implications
104. Implement SAT solver
105. Study complexity of graph problems

### Advanced Techniques (276-300)
126. Implement A* search algorithm
127. Design parallel algorithm for sorting
128. Analyze randomized algorithm complexity
129. Implement genetic algorithm
130. Study quantum algorithm basics

## 🧪 Programming Labs

### Lab 1: Algorithm Analyzer
```python
import time
import matplotlib.pyplot as plt
import numpy as np

class AlgorithmAnalyzer:
    def __init__(self):
        self.results = {}
    
    def time_algorithm(self, algorithm, inputs, name):
        """Time algorithm on different input sizes"""
        times = []
        sizes = []
        
        for input_data in inputs:
            start_time = time.time()
            algorithm(input_data)
            end_time = time.time()
            
            times.append(end_time - start_time)
            sizes.append(len(input_data) if hasattr(input_data, '__len__') else input_data)
        
        self.results[name] = (sizes, times)
        return sizes, times
    
    def plot_complexity(self, algorithm_names):
        """Plot time complexity comparison"""
        plt.figure(figsize=(12, 8))
        
        for name in algorithm_names:
            if name in self.results:
                sizes, times = self.results[name]
                plt.plot(sizes, times, marker='o', label=name)
        
        plt.xlabel('Input Size')
        plt.ylabel('Time (seconds)')
        plt.title('Algorithm Time Complexity Comparison')
        plt.legend()
        plt.grid(True)
        plt.show()
    
    def theoretical_complexity(self, n_values, complexity_func, name):
        """Plot theoretical complexity"""
        theoretical_times = [complexity_func(n) for n in n_values]
        plt.plot(n_values, theoretical_times, '--', label=f'{name} (theoretical)')
```

### Lab 2: DP Problem Solver
```python
class DPSolver:
    def __init__(self):
        self.memo = {}
    
    def solve_with_memoization(self, problem_func, *args):
        """Generic memoization wrapper"""
        key = (problem_func.__name__, args)
        if key not in self.memo:
            self.memo[key] = problem_func(*args)
        return self.memo[key]
    
    def visualize_dp_table(self, dp_table, problem_name):
        """Visualize DP table"""
        import seaborn as sns
        plt.figure(figsize=(10, 8))
        sns.heatmap(dp_table, annot=True, cmap='viridis')
        plt.title(f'{problem_name} DP Table')
        plt.show()
    
    def trace_solution(self, dp_table, trace_func):
        """Trace back optimal solution"""
        return trace_func(dp_table)
```

### Lab 3: Complexity Class Analyzer
```python
class ComplexityAnalyzer:
    def __init__(self):
        self.problems = {}
    
    def add_problem(self, name, solver, verifier, complexity_class):
        """Add problem with solver and verifier"""
        self.problems[name] = {
            'solver': solver,
            'verifier': verifier,
            'class': complexity_class
        }
    
    def verify_solution(self, problem_name, instance, solution):
        """Verify solution to problem instance"""
        if problem_name in self.problems:
            verifier = self.problems[problem_name]['verifier']
            return verifier(instance, solution)
        return False
    
    def benchmark_solver(self, problem_name, instances):
        """Benchmark solver on multiple instances"""
        if problem_name not in self.problems:
            return None
        
        solver = self.problems[problem_name]['solver']
        times = []
        
        for instance in instances:
            start_time = time.time()
            solution = solver(instance)
            end_time = time.time()
            
            times.append(end_time - start_time)
        
        return times
    
    def analyze_scalability(self, problem_name, size_generator, max_size):
        """Analyze how solver scales with input size"""
        sizes = []
        times = []
        
        for size in range(1, max_size + 1):
            instance = size_generator(size)
            start_time = time.time()
            
            try:
                self.problems[problem_name]['solver'](instance)
                end_time = time.time()
                
                sizes.append(size)
                times.append(end_time - start_time)
            except:
                break
        
        return sizes, times
```

## 🎯 Assessment and Evaluation

### Quiz Questions (40 questions)
1. What is the time complexity of merge sort and why?
2. Explain the difference between P and NP complexity classes
3. When should you use dynamic programming vs greedy algorithms?
4. How do you prove an algorithm is correct?
5. What is the master theorem and when do you apply it?

### Programming Assignments
1. Implement and analyze sorting algorithms
2. Build dynamic programming solution library
3. Create NP-complete problem solver
4. Develop algorithm visualization tool

### Major Project: Algorithm Competition Platform
Build a platform for algorithm competitions that includes:
- Problem statement parser
- Solution submission system
- Automated testing and scoring
- Performance analysis tools
- Complexity class categorization

## 📚 Resources and References

### Textbooks
- "Introduction to Algorithms" by Cormen, Leiserson, Rivest, Stein
- "Algorithm Design" by Jon Kleinberg and Éva Tardos
- "Computers and Intractability" by Garey and Johnson

### Online Resources
- [LeetCode](https://leetcode.com/) - Algorithm practice
- [Codeforces](https://codeforces.com/) - Competitive programming
- [Algorithm Visualizer](https://algorithm-visualizer.org/)

## 🏆 Learning Outcomes
After completing this module, you will:
- Master algorithm analysis and complexity theory
- Implement efficient algorithms for complex problems
- Understand computational limits and NP-completeness
- Design approximation algorithms for hard problems
- Analyze and optimize algorithm performance
- Score 95%+ on algorithm and complexity problems
- Be prepared for advanced computer science topics

**Course Complete!** 🎉