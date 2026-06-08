# Recursion - Quick Concepts Guide

## Core Concepts

### What is Recursion?
Recursion is a programming technique where a function solves a problem by calling itself with a smaller version of the same problem.

### Key Components of Recursion
1. **Base Case**: The condition that stops the recursion
2. **Recursive Case**: The part where the function calls itself
3. **Progress**: Each recursive call must move toward the base case

### Example: Factorial
```java
public int factorial(int n) {
    // Base case
    if (n <= 1) {
        return 1;
    }
    // Recursive case
    return n * factorial(n - 1);
}
```

## Recursion Patterns

### 1. Linear Recursion
Single recursive call per function invocation.

```java
// Sum of array elements
public int sumArray(int[] arr, int n) {
    if (n <= 0) return 0;
    return arr[n-1] + sumArray(arr, n-1);
}

// Reverse string
public String reverseString(String str) {
    if (str.isEmpty()) return str;
    return reverseString(str.substring(1)) + str.charAt(0);
}
```

### 2. Tree Recursion
Multiple recursive calls, creating a tree of calls.

```java
// Fibonacci (inefficient)
public int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n-1) + fibonacci(n-2);
}

// Tower of Hanoi
public void towerOfHanoi(int n, char from, char to, char aux) {
    if (n == 1) {
        System.out.println("Move disk 1 from " + from + " to " + to);
        return;
    }
    towerOfHanoi(n-1, from, aux, to);
    System.out.println("Move disk " + n + " from " + from + " to " + to);
    towerOfHanoi(n-1, aux, to, from);
}
```

### 3. Backtracking
Try possibilities and backtrack when constraints fail.

```java
// Generate all subsets
public List<List<Integer>> subsets(int[] nums) {
    List<List<Integer>> result = new ArrayList<>();
    backtrack(result, new ArrayList<>(), nums, 0);
    return result;
}

private void backtrack(List<List<Integer>> result, List<Integer> temp, int[] nums, int start) {
    result.add(new ArrayList<>(temp));

    for (int i = start; i < nums.length; i++) {
        temp.add(nums[i]);
        backtrack(result, temp, nums, i + 1);
        temp.remove(temp.size() - 1);
    }
}
```

### 4. Divide and Conquer
Break problem into smaller subproblems.

```java
// Binary search
public int binarySearch(int[] arr, int target, int left, int right) {
    if (left > right) return -1;

    int mid = left + (right - left) / 2;

    if (arr[mid] == target) return mid;
    if (arr[mid] > target) {
        return binarySearch(arr, target, left, mid - 1);
    }
    return binarySearch(arr, target, mid + 1, right);
}
```

## Memoization and Dynamic Programming

### Memoization: Top-Down DP
Cache results of expensive function calls.

```java
// Fibonacci with memoization
public int fibonacciMemo(int n) {
    int[] memo = new int[n + 1];
    Arrays.fill(memo, -1);
    return fibHelper(n, memo);
}

private int fibHelper(int n, int[] memo) {
    if (n <= 1) return n;
    if (memo[n] != -1) return memo[n];

    memo[n] = fibHelper(n-1, memo) + fibHelper(n-2, memo);
    return memo[n];
}
```

### Tail Recursion
Recursive call is the last operation.

```java
// Tail recursive factorial
public int factorialTail(int n, int accumulator) {
    if (n <= 1) return accumulator;
    return factorialTail(n - 1, n * accumulator);
}

// Helper method
public int factorial(int n) {
    return factorialTail(n, 1);
}
```

## Recursion in Data Structures

### Tree Traversals
```java
// Inorder traversal
public void inorder(TreeNode node) {
    if (node == null) return;
    inorder(node.left);
    System.out.print(node.val + " ");
    inorder(node.right);
}

// Preorder traversal
public void preorder(TreeNode node) {
    if (node == null) return;
    System.out.print(node.val + " ");
    preorder(node.left);
    preorder(node.right);
}

// Postorder traversal
public void postorder(TreeNode node) {
    if (node == null) return;
    postorder(node.left);
    postorder(node.right);
    System.out.print(node.val + " ");
}
```

### Graph Traversals
```java
// DFS recursive
public void dfs(Graph graph, int vertex, boolean[] visited) {
    visited[vertex] = true;
    System.out.print(vertex + " ");

    for (int neighbor : graph.getNeighbors(vertex)) {
        if (!visited[neighbor]) {
            dfs(graph, neighbor, visited);
        }
    }
}
```

## Common Recursion Problems

### Combinatorial Problems
- Generate permutations
- Generate combinations
- Generate subsets
- Solve N-Queens

### String Problems
- Check palindrome
- Generate parentheses
- Word break
- Regular expression matching

### Array Problems
- Subset sum
- Partition problem
- Maximum subarray (divide and conquer)
- Quick sort

## Time and Space Complexity

### Time Complexity Analysis
- **Linear Recursion**: O(n)
- **Tree Recursion**: O(2^n) or O(n!)
- **With Memoization**: Often O(n)

### Space Complexity
- **Call Stack**: O(depth of recursion)
- **Memoization**: O(n) additional space
- **Backtracking**: O(depth) for recursion stack

## Recursion vs Iteration

### When to Use Recursion
- **Natural recursive structure** (trees, graphs)
- **Divide and conquer** problems
- **Backtracking** algorithms
- **Cleaner, more readable** code
- **Easier to implement** for complex problems

### When to Use Iteration
- **Performance critical** code
- **Limited stack space**
- **Tail recursive** problems (can be optimized)
- **Simple linear** problems

## Common Pitfalls

### Stack Overflow
```java
// Bad: Deep recursion
public int badFactorial(int n) {
    if (n <= 1) return 1;
    return n * badFactorial(n - 1); // Stack overflow for large n
}

// Good: Iterative
public int goodFactorial(int n) {
    int result = 1;
    for (int i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
```

### Missing Base Case
```java
// Bad: No base case
public int infiniteRecursion(int n) {
    return infiniteRecursion(n - 1); // Stack overflow
}
```

### Wrong Base Case
```java
// Bad: Wrong base case for factorial
public int wrongFactorial(int n) {
    if (n == 0) return 1;  // Should be n <= 1
    return n * wrongFactorial(n - 1);
}
```

## Optimization Techniques

### Memoization
Cache expensive function calls.

### Tail Recursion
Some languages optimize tail recursive calls.

### Iterative Conversion
Convert recursion to iteration when possible.

### Pruning
Cut off unnecessary recursive calls in backtracking.

## Interview Tips

### Problem-Solving Approach
1. **Identify base case(s)**
2. **Define recursive case**
3. **Ensure progress toward base case**
4. **Consider edge cases**
5. **Think about time/space complexity**

### Common Questions
- Factorial, Fibonacci
- Tower of Hanoi
- Tree traversals
- Backtracking problems
- Divide and conquer algorithms

### Red Flags
- No base case
- Infinite recursion
- Stack overflow potential
- Inefficient exponential time
- Not considering memoization

## Practice Problems by Difficulty

### Easy
- Factorial calculation
- String reversal
- Sum of digits
- Power calculation
- GCD calculation

### Medium
- Fibonacci with memoization
- Climbing stairs
- Generate subsets
- Permutations
- Valid parentheses

### Hard
- N-Queens problem
- Sudoku solver
- Regular expression matching
- Word search II
- Palindrome partitioning