# 🔄 Day 17: Recursion & Backtracking - World-Class Resources

## 🎓 Top Video Resources

### 1. Abdul Bari - Recursion Mastery ⭐⭐⭐⭐⭐
- **Recursion**: https://youtu.be/kx6DfrYfWnQ (30 min)
- **Backtracking**: https://youtu.be/DKCbsiDBN6c (15 min)
- **N-Queens**: https://youtu.be/xFv_Hl4B83A (35 min)
- **Best for**: Understanding recursion tree

### 2. Back To Back SWE - Backtracking Patterns ⭐⭐⭐⭐⭐
- **Complete Playlist**: https://youtube.com/playlist?list=PLiQ766zSC5jM2OKVr8sooOuGgZkvnOCTI
- **Interview Focus**: Real FAANG questions
- **Code Quality**: Production-level solutions

### 3. Aditya Verma - Recursion Playlist ⭐⭐⭐⭐⭐
**Most Popular Indian YouTuber for Recursion**
- **Complete Playlist**: https://youtube.com/playlist?list=PL_z_8CaSLPWeT1ffjiImo0sYTcnLzo-wY
- **Identification Technique**: When to use recursion
- **Best for**: Indian placement exams

### 4. take U forward (Striver) ⭐⭐⭐⭐⭐
- **Recursion Playlist**: https://youtube.com/playlist?list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9
- **25+ Problems**: From basic to advanced
- **Highly Recommended**: For placements

## 📚 LeetCode Problems (MUST SOLVE)

### EASY (Foundation)
1. **#509 - Fibonacci Number**
2. **#70 - Climbing Stairs**
3. **#206 - Reverse Linked List** (Recursive)

### MEDIUM (Core Backtracking) 🔥
4. **#46 - Permutations** [⭐⭐⭐ MOST ASKED]
   - Asked in 50+ companies
   - Foundation of backtracking
   
5. **#78 - Subsets** [⭐⭐⭐ Pattern Master]
   - Subset pattern foundation
   - Google, Amazon, Meta
   
6. **#39 - Combination Sum** [⭐⭐ Amazon Favorite]
   
7. **#22 - Generate Parentheses** [⭐⭐ Google Loves This]
   
8. **#79 - Word Search** [⭐⭐ Microsoft Common]
   
9. **#17 - Letter Combinations of Phone** [⭐ Meta]
   
10. **#51 - N-Queens** [🔥 Classic - Must Know]

## 🎯 Striver's Recursion Sheet
**COMPLETE THIS**: https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/

**Recursion Section (15 problems)**
- Print all subsequences
- Generate all subsets (Power Set)
- Print all permutations
- Combination Sum I & II
- Subset Sum I & II
- Palindrome Partitioning
- Word Break
- N-Queens
- Sudoku Solver
- M-Coloring Problem
- Rat in a Maze
- Word Search

## 📖 Templates & Patterns

### Backtracking Template
```java
void backtrack(List<Solution> result, Solution current, Data input) {
    // Base case
    if (isComplete(current)) {
        result.add(new Solution(current));
        return;
    }
    
    // Try all choices
    for (Choice choice : getChoices(current, input)) {
        // Make choice
        current.add(choice);
        
        // Recurse
        backtrack(result, current, input);
        
        // Undo choice (backtrack)
        current.remove(choice);
    }
}
```

### Subset Pattern
```java
void subsets(int[] nums, int start, List<Integer> current, List<List<Integer>> result) {
    result.add(new ArrayList<>(current));
    
    for (int i = start; i < nums.length; i++) {
        current.add(nums[i]);
        subsets(nums, i + 1, current, result);
        current.remove(current.size() - 1);
    }
}
```

### Permutation Pattern
```java
void permute(int[] nums, List<Integer> current, boolean[] used, List<List<Integer>> result) {
    if (current.size() == nums.length) {
        result.add(new ArrayList<>(current));
        return;
    }
    
    for (int i = 0; i < nums.length; i++) {
        if (used[i]) continue;
        
        used[i] = true;
        current.add(nums[i]);
        permute(nums, current, used, result);
        current.remove(current.size() - 1);
        used[i] = false;
    }
}
```

## 🏆 Success Metrics
- [ ] Understand recursion tree
- [ ] Master backtracking template
- [ ] Solve 10 LeetCode problems
- [ ] Can explain to others

**ROI**: Backtracking in 25% of interviews!
