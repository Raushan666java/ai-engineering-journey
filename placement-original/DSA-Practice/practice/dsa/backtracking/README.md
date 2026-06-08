# Backtracking

## Overview
Backtracking is a general algorithmic technique that considers searching every possible combination in order to solve a computational problem. It's particularly useful for solving constraint satisfaction problems and optimization problems where we need to find all (or some) solutions to a problem.

## Key Concepts
- **Backtracking Algorithm**: Systematic way of trying out different sequences of decisions
- **State Space Tree**: Tree representation of all possible solutions
- **Pruning**: Eliminating branches that won't lead to solutions
- **Constraint Satisfaction**: Problems where we need to satisfy certain conditions

## Difficulty Breakdown

### Easy Problems (Beginner)
1. **Generate Parentheses** - Basic backtracking with constraints
2. **Letter Combinations of Phone Number** - Mapping and combination generation
3. **Combination Sum** - Finding combinations that sum to target
4. **Permutations** - Generating all permutations of array

### Medium Problems (Intermediate)
5. **Subsets II** - Handling duplicates in subset generation
6. **Combination Sum II** - Unique combinations with duplicates
7. **Word Search** - 2D grid path finding
8. **Palindrome Partitioning** - String partitioning with palindrome constraint
9. **Restore IP Addresses** - String manipulation with IP constraints
10. **N-Queens** - Classic constraint satisfaction problem

### Hard Problems (Advanced)
11. **Sudoku Solver** - Complex constraint satisfaction
12. **Word Break II** - Dynamic programming with backtracking
13. **Expression Add Operators** - Mathematical expression generation
14. **Remove Invalid Parentheses** - String manipulation with validation

## Learning Progression

### Phase 1: Fundamentals
- Understand backtracking template
- Master recursion and state management
- Learn pruning techniques

### Phase 2: Pattern Recognition
- Combination generation problems
- Permutation problems
- Subset problems

### Phase 3: Constraint Satisfaction
- N-Queens and similar problems
- Sudoku and puzzle solving
- Path finding with constraints

### Phase 4: Optimization
- Word break problems
- Expression evaluation
- Advanced string manipulation

## Common Patterns

### 1. Combination Generation
```java
void backtrack(int start, List<Integer> current, int[] nums) {
    result.add(new ArrayList<>(current));

    for (int i = start; i < nums.length; i++) {
        current.add(nums[i]);
        backtrack(i + 1, current, nums);
        current.remove(current.size() - 1);
    }
}
```

### 2. Permutation Generation
```java
void backtrack(List<Integer> current, boolean[] used, int[] nums) {
    if (current.size() == nums.length) {
        result.add(new ArrayList<>(current));
        return;
    }

    for (int i = 0; i < nums.length; i++) {
        if (used[i]) continue;
        used[i] = true;
        current.add(nums[i]);
        backtrack(current, used, nums);
        current.remove(current.size() - 1);
        used[i] = false;
    }
}
```

### 3. Constraint Satisfaction
```java
boolean isValid(int row, int col, char[][] board) {
    // Check constraints
    return valid;
}

void backtrack(int pos, char[][] board) {
    if (pos == totalPositions) {
        // Found solution
        return;
    }

    int row = pos / n, col = pos % n;
    for (char num : possibilities) {
        if (isValid(row, col, board)) {
            board[row][col] = num;
            backtrack(pos + 1, board);
            board[row][col] = '.'; // backtrack
        }
    }
}
```

## Time Complexity Analysis

### Combination Problems: O(2^n)
- Each element can be included or excluded
- Total combinations: 2^n

### Permutation Problems: O(n!)
- All possible arrangements of n elements
- Factorial time complexity

### Constraint Satisfaction: Variable
- Depends on constraints and pruning
- Can range from O(n!) to O(1) with good pruning

## Space Complexity
- **Recursion Stack**: O(n) for depth
- **Result Storage**: O(2^n) or O(n!) in worst case
- **State Tracking**: O(n) for used arrays, current paths

## Interview Tips

### 1. Template Recognition
- Look for problems asking for "all possible", "generate", "find combinations"
- Keywords: subsets, permutations, combinations, arrangements

### 2. State Management
- Use lists/arrays to track current path
- Use boolean arrays to track used elements
- Consider immutable state for cleaner code

### 3. Pruning Techniques
- Early termination when constraints violated
- Skip duplicates in sorted arrays
- Use bounding functions for optimization problems

### 4. Result Collection
- Deep copy results before adding to final list
- Consider returning early for single solution problems
- Use StringBuilder for string construction

### 5. Edge Cases
- Empty input arrays
- Single element arrays
- Arrays with duplicates
- Target sums that are impossible

## Common Mistakes

### 1. Forgetting to Backtrack
```java
// Wrong
current.add(nums[i]);
backtrack(i + 1, current, nums);
// Missing: current.remove(current.size() - 1);
```

### 2. Not Handling Duplicates
```java
// Wrong - generates duplicates
for (int i = start; i < nums.length; i++) {
    // No duplicate check
}
```

### 3. Incorrect Base Case
```java
// Wrong - off-by-one error
if (current.size() == nums.length + 1) {
    result.add(new ArrayList<>(current));
}
```

## Practice Strategy

1. **Start Simple**: Master basic combination/subset generation
2. **Add Constraints**: Move to problems with additional constraints
3. **Handle Duplicates**: Learn deduplication techniques
4. **2D Problems**: Practice grid-based backtracking
5. **String Problems**: Master string manipulation with backtracking
6. **Optimization**: Combine with DP for complex problems

## Related Topics
- **Recursion**: Foundation of backtracking
- **Dynamic Programming**: Often combined with backtracking
- **Graph Algorithms**: DFS with backtracking
- **String Algorithms**: Pattern matching with backtracking

## Resources
- [Backtracking Template](https://leetcode.com/discuss/general-discussion/215402/backtracking-template)
- [Permutations and Combinations](https://www.mathsisfun.com/combinatorics/combinations-permutations.html)
- [Constraint Satisfaction Problems](https://en.wikipedia.org/wiki/Constraint_satisfaction_problem)