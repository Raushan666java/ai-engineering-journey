# Algorithm Design Frameworks

## Overview
Algorithm design frameworks provide structured approaches to solving computational problems. Understanding these frameworks helps in identifying patterns and applying appropriate techniques to new problems.

## Common Algorithm Design Frameworks

### 1. Divide and Conquer
**Approach**: Break problem into smaller subproblems, solve them independently, and combine their solutions.

**Framework**:
```java
public T divideAndConquer(Problem problem) {
    // Base case
    if (problem.size() <= threshold) {
        return solveDirectly(problem);
    }
    
    // Divide
    Problem[] subproblems = divide(problem);
    
    // Conquer (recursive calls)
    T[] subresults = new T[subproblems.length];
    for (int i = 0; i < subproblems.length; i++) {
        subresults[i] = divideAndConquer(subproblems[i]);
    }
    
    // Combine
    return combine(subresults);
}
```

**Examples**: Binary Search, Merge Sort, Quick Sort, Strassen's Matrix Multiplication

### 2. Dynamic Programming
**Approach**: Break problem into overlapping subproblems, solve each subproblem once, and store the solutions.

**Framework**:
```java
// Top-down (Memoization)
public T memoization(Problem problem, Map<Problem, T> memo) {
    // Check if already solved
    if (memo.containsKey(problem)) {
        return memo.get(problem);
    }
    
    // Base case
    if (isBaseCase(problem)) {
        return solveBaseCase(problem);
    }
    
    // Recursive case
    T result = solveFromSubproblems(problem, memo);
    memo.put(problem, result);
    return result;
}

// Bottom-up (Tabulation)
public T tabulation(Problem problem) {
    T[] dp = initializeTable(problem);
    
    // Fill table in bottom-up manner
    for (int i = 0; i < dp.length; i++) {
        dp[i] = computeFromPrevious(dp, i);
    }
    
    return dp[dp.length - 1];
}
```

**Examples**: Fibonacci, Knapsack, Longest Common Subsequence, Edit Distance

### 3. Greedy Algorithms
**Approach**: Make locally optimal choices at each step with the hope of finding a global optimum.

**Framework**:
```java
public Solution greedy(Problem problem) {
    Solution solution = new Solution();
    
    while (!problem.isSolved()) {
        // Select best choice at current step
        Choice bestChoice = selectBestChoice(problem);
        
        // Apply the choice
        solution.add(bestChoice);
        problem.apply(bestChoice);
    }
    
    return solution;
}
```

**Examples**: Activity Selection, Huffman Coding, Dijkstra's Algorithm, Kruskal's Algorithm

### 4. Backtracking
**Approach**: Build solutions incrementally and abandon a path when it's determined that it cannot lead to a valid solution.

**Framework**:
```java
public void backtrack(State state, List<Solution> solutions) {
    if (isGoalState(state)) {
        solutions.add(new Solution(state));
        return;
    }
    
    for (Choice choice : getPossibleChoices(state)) {
        if (isValid(state, choice)) {
            // Make choice
            state.apply(choice);
            
            // Recurse
            backtrack(state, solutions);
            
            // Undo choice (backtrack)
            state.undo(choice);
        }
    }
}
```

**Examples**: N-Queens, Sudoku Solver, Permutations, Combination Sum

### 5. Branch and Bound
**Approach**: Systematically search the solution space while using bounds to prune branches that cannot lead to optimal solutions.

**Framework**:
```java
public Solution branchAndBound(Problem problem) {
    PriorityQueue<Node> queue = new PriorityQueue<>((a, b) -> a.bound - b.bound);
    queue.add(new Node(problem.initialState()));
    Solution bestSolution = null;
    
    while (!queue.isEmpty()) {
        Node node = queue.poll();
        
        // Prune if this branch cannot lead to better solution
        if (bestSolution != null && node.bound >= bestSolution.cost) {
            continue;
        }
        
        if (node.isComplete()) {
            // Update best solution if needed
            if (bestSolution == null || node.cost < bestSolution.cost) {
                bestSolution = new Solution(node);
            }
        } else {
            // Branch: generate child nodes
            for (Choice choice : node.getPossibleChoices()) {
                Node child = new Node(node, choice);
                queue.add(child);
            }
        }
    }
    
    return bestSolution;
}
```

**Examples**: Traveling Salesman Problem, Assignment Problem, Knapsack Problem

### 6. Sliding Window
**Approach**: Maintain a "window" that slides through the data, expanding or contracting to find optimal subarrays or substrings.

**Framework**:
```java
public Result slidingWindow(Array arr) {
    int left = 0;
    Result result = new Result();
    
    for (int right = 0; right < arr.length; right++) {
        // Add element at right pointer
        addToWindow(arr[right]);
        
        // Shrink window from left if needed
        while (windowNeedsShrinking()) {
            removeFromWindow(arr[left]);
            left++;
        }
        
        // Update result
        updateResult(result);
    }
    
    return result;
}
```

**Examples**: Maximum Sum Subarray of Size K, Longest Substring Without Repeating Characters

### 7. Two Pointers
**Approach**: Use two pointers to traverse the data structure, often moving in opposite directions or at different speeds.

**Framework**:
```java
public Result twoPointers(Array arr) {
    int left = 0;
    int right = arr.length - 1;
    Result result = new Result();
    
    while (left < right) {
        // Process current elements
        Result currentResult = process(arr[left], arr[right]);
        
        // Update result if needed
        result.updateIfBetter(currentResult);
        
        // Move pointers
        if (shouldMoveLeft(arr[left], arr[right])) {
            left++;
        } else {
            right--;
        }
    }
    
    return result;
}
```

**Examples**: Two Sum, Container With Most Water, Palindrome Check

## Selecting the Right Framework

### Decision Factors
1. **Problem characteristics**: Overlapping subproblems, optimal substructure, etc.
2. **Input size**: Some algorithms are more efficient for large inputs
3. **Required optimality**: Exact solution vs. approximation
4. **Constraints**: Time and space limitations

### Framework Selection Guide
- **Overlapping subproblems + Optimal substructure**: Dynamic Programming
- **Problem can be broken into independent subproblems**: Divide and Conquer
- **Locally optimal choices lead to global optimum**: Greedy
- **Need to explore all possible solutions**: Backtracking
- **Optimization problem with pruning opportunities**: Branch and Bound
- **Subarray/substring problems**: Sliding Window
- **Sorted array operations**: Two Pointers

## Hybrid Approaches
Many complex problems require combining multiple frameworks:
- Dynamic Programming + Greedy
- Divide and Conquer + Dynamic Programming
- Backtracking with Branch and Bound pruning

## Framework Implementation Tips
1. **Identify the core problem structure** before selecting a framework
2. **Start with a naive solution** and then optimize
3. **Draw examples** to visualize the algorithm's behavior
4. **Test with edge cases** to ensure correctness
5. **Analyze complexity** to verify efficiency