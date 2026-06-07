# Day 50: Backtracking - Exploring All Possible Solutions

## 📋 Overview
Master backtracking algorithm techniques for exploring solution space through systematic trial and error. Learn state space trees, pruning strategies, and when to apply backtracking for combinatorial problems.

## 🎯 Learning Objectives
- Understand backtracking fundamentals and state space trees
- Master recursive backtracking patterns
- Learn pruning techniques for optimization
- Distinguish backtracking from brute force
- Apply backtracking to combinatorial problems
- Understand constraint satisfaction problems

## 📚 Topics Covered

### 1. **Backtracking Fundamentals**
- State space tree exploration
- Depth-first search with backtracking
- Choice, constraint, and goal concept
- Difference from brute force
- When to use backtracking

### 2. **Backtracking Patterns**
- Subset generation (powerset)
- Permutations and combinations
- Board problems (N-Queens, Sudoku)
- Path finding (maze, word search)
- Partition problems

### 3. **Optimization Techniques**
- Pruning invalid branches early
- Constraint checking
- Memoization with backtracking
- Iterative vs recursive approaches
- Space optimization

### 4. **Problem Categories**
- Combination problems
- Permutation problems
- Board placement problems
- Path finding problems
- Parsing problems

## 💻 Problems (12 Total)

### Problem 1: Subsets
**Difficulty**: Medium | **LeetCode**: #78
- **Description**: Generate all possible subsets (power set)
- **Approach 1**: Backtracking (include/exclude choice)
- **Approach 2**: Iterative (bit manipulation)
- **Time Complexity**: O(n * 2^n)
- **Space Complexity**: O(n) recursion depth

### Problem 2: Subsets II
**Difficulty**: Medium | **LeetCode**: #90
- **Description**: Generate all subsets with duplicates handled
- **Approach**: Backtracking with sorting and skip duplicates
- **Time Complexity**: O(n * 2^n)
- **Space Complexity**: O(n)

### Problem 3: Permutations
**Difficulty**: Medium | **LeetCode**: #46
- **Description**: Generate all permutations of distinct integers
- **Approach 1**: Backtracking with used array
- **Approach 2**: Backtracking with swapping
- **Time Complexity**: O(n * n!)
- **Space Complexity**: O(n)

### Problem 4: Permutations II
**Difficulty**: Medium | **LeetCode**: #47
- **Description**: Generate all unique permutations with duplicates
- **Approach**: Backtracking with frequency map
- **Time Complexity**: O(n * n!)
- **Space Complexity**: O(n)

### Problem 5: Combination Sum
**Difficulty**: Medium | **LeetCode**: #39
- **Description**: Find all combinations that sum to target (reuse allowed)
- **Approach**: Backtracking with index tracking
- **Time Complexity**: O(n^(T/M)) where T=target, M=min candidate
- **Space Complexity**: O(T/M)

### Problem 6: Combination Sum II
**Difficulty**: Medium | **LeetCode**: #40
- **Description**: Find combinations that sum to target (no reuse)
- **Approach**: Backtracking with sorting and duplicate skipping
- **Time Complexity**: O(2^n)
- **Space Complexity**: O(n)

### Problem 7: N-Queens
**Difficulty**: Hard | **LeetCode**: #51
- **Description**: Place N queens on N×N board with no attacks
- **Approach**: Backtracking with column/diagonal tracking
- **Time Complexity**: O(N!)
- **Space Complexity**: O(N²)

### Problem 8: N-Queens II
**Difficulty**: Hard | **LeetCode**: #52
- **Description**: Count distinct N-Queens solutions
- **Approach**: Optimized backtracking with bit manipulation
- **Time Complexity**: O(N!)
- **Space Complexity**: O(N)

### Problem 9: Word Search
**Difficulty**: Medium | **LeetCode**: #79
- **Description**: Find if word exists in 2D board
- **Approach**: Backtracking with DFS and visited tracking
- **Time Complexity**: O(m * n * 4^L) where L=word length
- **Space Complexity**: O(L)

### Problem 10: Palindrome Partitioning
**Difficulty**: Medium | **LeetCode**: #131
- **Description**: Partition string into palindromic substrings
- **Approach**: Backtracking with palindrome checking
- **Time Complexity**: O(n * 2^n)
- **Space Complexity**: O(n)

### Problem 11: Letter Combinations of Phone Number
**Difficulty**: Medium | **LeetCode**: #17
- **Description**: Generate all letter combinations from digits
- **Approach**: Backtracking with digit-to-letters mapping
- **Time Complexity**: O(4^n * n) where n=digits length
- **Space Complexity**: O(n)

### Problem 12: Generate Parentheses
**Difficulty**: Medium | **LeetCode**: #22
- **Description**: Generate all valid parentheses combinations
- **Approach**: Backtracking with open/close count tracking
- **Time Complexity**: O(4^n / √n) - Catalan number
- **Space Complexity**: O(n)

## 🔄 Complexity Analysis

| Problem | Time Complexity | Space Complexity | Pattern |
|---------|----------------|------------------|---------|
| Subsets | O(n * 2^n) | O(n) | Include/Exclude |
| Subsets II | O(n * 2^n) | O(n) | Skip Duplicates |
| Permutations | O(n * n!) | O(n) | Swap/Unswap |
| Permutations II | O(n * n!) | O(n) | Frequency Map |
| Combination Sum | O(n^(T/M)) | O(T/M) | Reuse Allowed |
| Combination Sum II | O(2^n) | O(n) | No Reuse |
| N-Queens | O(N!) | O(N²) | Board Placement |
| N-Queens II | O(N!) | O(N) | Count Only |
| Word Search | O(m*n*4^L) | O(L) | Grid DFS |
| Palindrome Partition | O(n * 2^n) | O(n) | String Partition |
| Letter Combinations | O(4^n * n) | O(n) | Digit Mapping |
| Generate Parentheses | O(4^n/√n) | O(n) | Balance Check |

## 💡 Key Patterns

### Pattern 1: Subset Generation (Include/Exclude)
```java
void backtrack(int[] nums, int index, List<Integer> current, List<List<Integer>> result) {
    result.add(new ArrayList<>(current));
    
    for (int i = index; i < nums.length; i++) {
        current.add(nums[i]);           // Include
        backtrack(nums, i + 1, current, result);
        current.remove(current.size() - 1); // Exclude (backtrack)
    }
}
```

### Pattern 2: Permutation (Swap/Unswap)
```java
void backtrack(int[] nums, int start, List<List<Integer>> result) {
    if (start == nums.length) {
        result.add(toList(nums));
        return;
    }
    
    for (int i = start; i < nums.length; i++) {
        swap(nums, start, i);           // Choose
        backtrack(nums, start + 1, result);
        swap(nums, start, i);           // Unchoose (backtrack)
    }
}
```

### Pattern 3: Combination Sum (Target Tracking)
```java
void backtrack(int[] candidates, int target, int start, 
               List<Integer> current, List<List<Integer>> result) {
    if (target == 0) {
        result.add(new ArrayList<>(current));
        return;
    }
    if (target < 0) return;
    
    for (int i = start; i < candidates.length; i++) {
        current.add(candidates[i]);
        backtrack(candidates, target - candidates[i], i, current, result);
        current.remove(current.size() - 1);
    }
}
```

### Pattern 4: Board Problems (N-Queens)
```java
void backtrack(int row, boolean[] cols, boolean[] diag1, boolean[] diag2, 
               char[][] board, List<List<String>> result) {
    if (row == board.length) {
        result.add(construct(board));
        return;
    }
    
    for (int col = 0; col < board.length; col++) {
        if (!cols[col] && !diag1[row - col + n] && !diag2[row + col]) {
            board[row][col] = 'Q';
            cols[col] = diag1[row - col + n] = diag2[row + col] = true;
            
            backtrack(row + 1, cols, diag1, diag2, board, result);
            
            board[row][col] = '.';
            cols[col] = diag1[row - col + n] = diag2[row + col] = false;
        }
    }
}
```

## 🎓 Backtracking vs Other Techniques

### Backtracking vs Brute Force
| Aspect | Backtracking | Brute Force |
|--------|-------------|-------------|
| Exploration | Prunes invalid branches | Explores all possibilities |
| Efficiency | Better with constraints | No optimization |
| Early termination | Yes | No |
| Space | Less (pruning) | More (all paths) |

### Backtracking vs Dynamic Programming
| Aspect | Backtracking | DP |
|--------|-------------|-----|
| Goal | Find all solutions | Find optimal solution |
| Overlapping subproblems | No | Yes |
| Memoization | Rare | Common |
| Time | Exponential | Polynomial (usually) |

### Backtracking vs Greedy
| Aspect | Backtracking | Greedy |
|--------|-------------|--------|
| Exploration | All paths | Single path |
| Optimality | Guarantees all solutions | May miss optimal |
| Undo decisions | Yes | No |
| Time | Exponential | Polynomial |

## 🚀 Optimization Techniques

### 1. **Early Pruning**
```java
// Prune when remaining sum cannot reach target
if (currentSum + remaining < target) return;

// Prune when current path exceeds target
if (currentSum > target) return;
```

### 2. **Constraint Checking Before Recursion**
```java
// Check constraint before making recursive call
if (isValid(choice)) {
    makeChoice();
    backtrack();
    undoChoice();
}
```

### 3. **Sorting for Duplicate Handling**
```java
Arrays.sort(nums);
for (int i = start; i < nums.length; i++) {
    if (i > start && nums[i] == nums[i-1]) continue; // Skip duplicates
    // ... backtrack
}
```

### 4. **Bit Manipulation for State**
```java
// Use bits to track column/diagonal occupancy in N-Queens
int colMask = 0, diag1Mask = 0, diag2Mask = 0;
// Set/unset bits instead of boolean arrays
```

## 🎓 Real-World Applications

### 1. **Constraint Satisfaction Problems**
- Sudoku solver
- Crossword puzzle
- Map coloring
- Schedule optimization

### 2. **Combinatorial Optimization**
- Traveling salesman problem
- Knapsack problem variants
- Job scheduling
- Resource allocation

### 3. **Game AI**
- Chess move generation
- Tic-tac-toe solver
- Puzzle solving
- Path finding in games

### 4. **Natural Language Processing**
- Parsing algorithms
- Grammar checking
- Sentence generation
- Word segmentation

### 5. **Bioinformatics**
- Sequence alignment
- Protein folding
- Gene prediction
- Motif finding

### 6. **Circuit Design**
- Component placement
- Wire routing
- Logic optimization
- Timing analysis

## 🚀 Pro Tips

1. **Base Case First**: Always define clear base case before recursion
2. **Choose-Explore-Unchoose**: Classic backtracking pattern
3. **Prune Early**: Check constraints before recursive call
4. **Avoid Duplicates**: Sort and skip when handling duplicates
5. **Track State**: Use boolean arrays or sets for visited tracking
6. **Copy Solutions**: Create new list when adding to results
7. **Index Management**: Be careful with start index in combinations
8. **Space Optimization**: Reuse data structures when possible
9. **Iterative Alternative**: Consider iterative approach for simple cases
10. **Visualize Tree**: Draw state space tree for complex problems

## ⚠️ Common Pitfalls

1. **Forgetting to backtrack**: Not undoing choices
2. **Shallow copy**: Adding reference instead of new list
3. **Wrong base case**: Missing or incorrect termination condition
4. **Index confusion**: Off-by-one errors in loops
5. **Duplicate solutions**: Not handling duplicates properly
6. **Infinite recursion**: No progress toward base case
7. **Wrong constraint check**: Checking after instead of before recursion
8. **Modifying input**: Accidentally changing original array
9. **Stack overflow**: Too deep recursion without pruning
10. **Wrong loop bounds**: Starting from wrong index

## 📊 Time Complexity Patterns

### Subset Problems: O(2^n)
- Each element has 2 choices: include or exclude
- Total combinations: 2^n

### Permutation Problems: O(n!)
- First position: n choices
- Second position: n-1 choices
- Total: n × (n-1) × ... × 1 = n!

### Combination Problems: O(C(n,k))
- Choose k elements from n
- Combinations: n! / (k! × (n-k)!)

### Board Problems: O(N!)
- N-Queens: Place N queens in N rows
- Each row has decreasing valid positions

## 🧪 Backtracking Template

### Generic Backtracking Template
```java
void backtrack(State state, List<Solution> result) {
    // Base case: Found a valid solution
    if (isGoal(state)) {
        result.add(new Solution(state));
        return;
    }
    
    // Try all possible choices
    for (Choice choice : getChoices(state)) {
        // Prune invalid choices
        if (!isValid(choice, state)) continue;
        
        // Make choice
        makeChoice(choice, state);
        
        // Recurse
        backtrack(state, result);
        
        // Undo choice (backtrack)
        undoChoice(choice, state);
    }
}
```

### Subset Template
```java
void generateSubsets(int[] nums, int index, List<Integer> current, 
                     List<List<Integer>> result) {
    result.add(new ArrayList<>(current));
    
    for (int i = index; i < nums.length; i++) {
        current.add(nums[i]);
        generateSubsets(nums, i + 1, current, result);
        current.remove(current.size() - 1);
    }
}
```

### Permutation Template
```java
void generatePermutations(int[] nums, boolean[] used, List<Integer> current,
                          List<List<Integer>> result) {
    if (current.size() == nums.length) {
        result.add(new ArrayList<>(current));
        return;
    }
    
    for (int i = 0; i < nums.length; i++) {
        if (used[i]) continue;
        
        used[i] = true;
        current.add(nums[i]);
        generatePermutations(nums, used, current, result);
        current.remove(current.size() - 1);
        used[i] = false;
    }
}
```

## 📖 Resources
- **LeetCode**: Problems #78, #90, #46, #47, #39, #40, #51, #52, #79, #131, #17, #22
- **GeeksforGeeks**: [Backtracking Algorithms](https://www.geeksforgeeks.org/backtracking-algorithms/)
- **YouTube**: "Backtracking" by take U forward
- **Book**: "Introduction to Algorithms" by CLRS (Chapter 8)
- **Course**: Abdul Bari's Algorithm Playlist
- **Visualizer**: [Algorithm Visualizer](https://algorithm-visualizer.org/backtracking/n-queens-problem)

## ✅ Practice Checklist

### Morning Session
- [ ] Learn backtracking fundamentals
- [ ] Understand state space trees
- [ ] Master pruning techniques
- [ ] Solve Subsets
- [ ] Solve Subsets II
- [ ] Solve Permutations

### Afternoon Session
- [ ] Study recursive backtracking patterns
- [ ] Learn iterative alternatives
- [ ] Practice memory optimization
- [ ] Study board problems
- [ ] Understand constraint satisfaction

### Evening Session
- [ ] Solve N-Queens
- [ ] Solve Word Search
- [ ] Solve Combination Sum
- [ ] Solve remaining 6 problems
- [ ] Complete full mock interview
- [ ] Review backtracking patterns

## 🎯 Success Criteria
- ✅ Understand backtracking fundamentals
- ✅ Master state space tree exploration
- ✅ Solve all 12 problems
- ✅ Apply pruning techniques effectively
- ✅ Distinguish backtracking from brute force
- ✅ Complete full mock interview

## 🔜 Next Steps
- **Day 51**: Week 7 Assessment & Project Work
- **Week 8**: System Design & Advanced Topics

---
**Time Allocation**: 9 hours total
- Morning: 3 hours (Fundamentals & Basic Problems)
- Afternoon: 3 hours (Implementation & Advanced Patterns)
- Evening: 3 hours (Complex Problems & Mock Interview)

**Goal**: Master backtracking for exploring all possible solutions efficiently!
