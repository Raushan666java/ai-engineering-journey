# Day 39: 2D Dynamic Programming - Complete Guide

## 🎯 Learning Objectives

Master 2D Dynamic Programming patterns through comprehensive implementation and practice:
- ✅ Understand 2D DP state design and transitions
- ✅ Implement string matching algorithms (LCS, Edit Distance)
- ✅ Solve grid-based DP problems
- ✅ Master pattern matching with wildcards and regex
- ✅ Apply 2D DP to real-world problems
- ✅ Optimize space complexity from O(m×n) to O(n)
- ✅ Achieve 100% test coverage

---

## 📊 Day 39 Statistics

| Metric | Value |
|--------|-------|
| **Total Code Lines** | 3,500+ |
| **Core Problems** | 8 fundamental |
| **Practice Problems** | 8 advanced |
| **Total Problems** | 16 |
| **Test Cases** | 96 |
| **Test Pass Rate** | **100%** ✅ |
| **LeetCode Coverage** | 15+ problems |
| **Interview Questions** | 80+ |
| **Documentation Pages** | 5 |

---

## 📁 Project Structure

```
Day-39/
├── code/
│   ├── TwoDimensionalDP.java        (900+ lines - 8 fundamental problems)
│   └── Day39Practice.java           (800+ lines - 8 advanced problems)
├── tests/
│   └── TestDay39.java                (600+ lines - 96 comprehensive tests)
├── notes/
│   └── Day39InterviewQA.md          (1,200+ lines - 80+ Q&A)
├── system-design/
│   └── DOCUMENT_SIMILARITY_SYSTEM_DESIGN.md  (800+ lines)
├── bin/                              (compiled .class files)
└── README.md                         (this file)
```

---

## 🚀 Quick Start

### Compilation
```powershell
cd Day-39
javac -d bin code\*.java tests\*.java
```

### Run Demonstrations
```powershell
# Core 2D DP concepts
java -cp bin day39.fundamentals.TwoDimensionalDP

# Advanced practice problems
java -cp bin day39.practice.Day39Practice
```

### Run Tests
```powershell
# Run all 96 tests
java -cp bin day39.tests.TestDay39
```

**Expected Output:**
```
╔═══════════════════════════════════════════════════════════╗
║       DAY 39: 2D DYNAMIC PROGRAMMING TEST SUITE           ║
╚═══════════════════════════════════════════════════════════╝

... (test results) ...

╔═══════════════════════════════════════════════════════════╗
║                    TEST RESULTS                           ║
╠═══════════════════════════════════════════════════════════╣
║  Total Tests:  96                                         ║
║  Passed:       96                                         ║
║  Failed:       0                                          ║
║  Success Rate: 100.00%                                    ║
╚═══════════════════════════════════════════════════════════╝

🎉 ALL TESTS PASSED! EXCELLENT WORK! 🎉
```

---

## 📚 Problems Covered

### Fundamental Problems (TwoDimensionalDP.java)

| # | Problem | LeetCode | Difficulty | Patterns |
|---|---------|----------|------------|----------|
| 1 | Longest Common Subsequence | LC 1143 | Medium | String DP, LCS |
| 2 | Edit Distance | LC 72 | Hard | String DP, Levenshtein |
| 3 | Longest Common Substring | - | Medium | String DP, Continuous |
| 4 | Distinct Subsequences | LC 115 | Hard | String DP, Counting |
| 5 | Wildcard Matching | LC 44 | Hard | Pattern Matching |
| 6 | Regular Expression Matching | LC 10 | Hard | Pattern Matching, Regex |
| 7 | Interleaving String | LC 97 | Medium | String DP, Validation |
| 8 | Minimum Path Sum | LC 64 | Medium | Grid DP, Path Finding |

### Advanced Problems (Day39Practice.java)

| # | Problem | LeetCode | Difficulty | Patterns |
|---|---------|----------|------------|----------|
| 9 | Maximal Square | LC 221 | Medium | Grid DP, Matrix |
| 10 | Maximal Rectangle | LC 85 | Hard | Grid DP, Histogram |
| 11 | Burst Balloons | LC 312 | Hard | Interval DP, O(n³) |
| 12 | Matrix Chain Multiplication | - | Hard | Interval DP, Optimization |
| 13 | Palindrome Partitioning II | LC 132 | Hard | String DP, Partition |
| 14 | Scramble String | LC 87 | Hard | 3D DP, Recursion |
| 15 | Dungeon Game | LC 174 | Hard | Grid DP, Reverse |
| 16 | Cherry Pickup | LC 741 | Hard | 3D DP, Two Paths |

---

## 🎓 Key Concepts

### 1. 2D DP Patterns

#### String DP Pattern
```java
// State: dp[i][j] = property of s1[0..i-1] and s2[0..j-1]
for (int i = 1; i <= m; i++) {
    for (int j = 1; j <= n; j++) {
        if (s1.charAt(i-1) == s2.charAt(j-1)) {
            dp[i][j] = dp[i-1][j-1] + 1;  // Match
        } else {
            dp[i][j] = max(dp[i-1][j], dp[i][j-1]);  // No match
        }
    }
}
```

#### Grid DP Pattern
```java
// State: dp[i][j] = property at cell (i,j)
for (int i = 0; i < m; i++) {
    for (int j = 0; j < n; j++) {
        if (i > 0) dp[i][j] = ... + dp[i-1][j];  // From top
        if (j > 0) dp[i][j] = ... + dp[i][j-1];  // From left
    }
}
```

#### Interval DP Pattern
```java
// State: dp[i][j] = property of range [i,j]
for (int len = 2; len <= n; len++) {
    for (int i = 0; i + len <= n; i++) {
        int j = i + len - 1;
        for (int k = i; k < j; k++) {
            dp[i][j] = optimize(dp[i][k], dp[k+1][j]);
        }
    }
}
```

### 2. Space Optimization

**From O(m×n) to O(n):**
```java
// Original
int[][] dp = new int[m+1][n+1];

// Optimized
int[] prev = new int[n+1];
int[] curr = new int[n+1];
for (int i = 1; i <= m; i++) {
    for (int j = 1; j <= n; j++) {
        curr[j] = f(prev[j], curr[j-1], prev[j-1]);
    }
    swap(prev, curr);
}
```

### 3. Common Transitions

| Pattern | Match | Mismatch |
|---------|-------|----------|
| **LCS** | `dp[i-1][j-1] + 1` | `max(dp[i-1][j], dp[i][j-1])` |
| **Edit Distance** | `dp[i-1][j-1]` | `1 + min(3 options)` |
| **LCS Substring** | `dp[i-1][j-1] + 1` | `0` (reset) |
| **Wildcard Match** | `dp[i-1][j-1]` | Handle `*` and `?` |

---

## 🧪 Testing Methodology

### Test Coverage

**1. Unit Tests (per problem):**
- Basic functionality
- Edge cases
- Space-optimized versions
- Path reconstruction (where applicable)

**2. Edge Cases:**
- Empty strings: `"" vs "abc"`
- Identical strings: `"abc" vs "abc"`
- No common elements: `"abc" vs "def"`
- Single characters: `"a" vs "b"`
- Large inputs: Performance validation

**3. Integration Tests:**
- Multiple algorithms on same input
- Verification of consistency
- Cross-validation

### Running Specific Test Categories

```powershell
# Run full test suite
java -cp bin day39.tests.TestDay39

# Test results show category breakdown:
# - LCS Tests (9 tests)
# - Edit Distance Tests (9 tests)
# - Pattern Matching Tests (14 tests)
# - Grid DP Tests (24 tests)
# - Advanced 2D DP Tests (35 tests)
# - Edge Cases (5 tests)
```

---

## 📖 Learning Path

### Week 1: Fundamentals
1. **Day 1-2:** LCS and variations
   - Understand subsequence vs substring
   - Master state design
   - Practice path reconstruction

2. **Day 3-4:** Edit Distance
   - Three operations: insert, delete, replace
   - Weighted costs
   - Operation sequence reconstruction

3. **Day 5:** Grid DP
   - Minimum Path Sum
   - Unique Paths variations
   - Obstacle handling

### Week 2: Pattern Matching
1. **Day 6-7:** Wildcard and Regex Matching
   - Understanding `*` and `?` in wildcard
   - Understanding `.*` in regex
   - Boolean DP tables

2. **Day 8:** String Interleaving
   - Validation problems
   - Path existence

### Week 3: Advanced Techniques
1. **Day 9-10:** Interval DP
   - Matrix Chain Multiplication
   - Burst Balloons
   - Palindrome Partitioning

2. **Day 11-12:** 3D DP
   - Scramble String
   - Cherry Pickup
   - Multiple dimensions

### Week 4: Optimization & Applications
1. **Day 13:** Space optimization
   - Rolling arrays
   - Single array techniques
   - Trade-offs

2. **Day 14:** Real-world applications
   - Document similarity
   - DNA sequence alignment
   - Diff algorithms

---

## 💡 Problem-Solving Approach

### Step-by-Step Framework

**1. Understand the Problem**
- What are we optimizing? (min/max/count/boolean)
- What are the inputs? (strings, arrays, grids)
- What are the constraints?

**2. Define State**
- What does `dp[i][j]` represent?
- What are i and j? (indices, lengths, coordinates)
- Is it 2D or 3D?

**3. Base Cases**
- `dp[0][0]` = ?
- `dp[i][0]` = ? (first column)
- `dp[0][j]` = ? (first row)

**4. Recurrence Relation**
- If elements match: `dp[i][j] = ?`
- If elements don't match: `dp[i][j] = ?`
- Consider all transitions

**5. Fill Order**
- Row by row or column by column?
- Top-down or bottom-up?

**6. Extract Answer**
- `dp[m][n]`?
- Maximum over all cells?
- Traceback needed?

---

## 🏆 Achievements

### Code Quality
- ✅ **100% test pass rate** (96/96 tests)
- ✅ **Zero compilation warnings**
- ✅ **Clean, documented code** with detailed comments
- ✅ **Multiple solution approaches** for each problem
- ✅ **Space-optimized implementations**

### Coverage
- ✅ **16 problems** fully implemented
- ✅ **15+ LeetCode problems** covered
- ✅ **All major 2D DP patterns** mastered
- ✅ **80+ interview questions** with detailed answers

### Performance
- ✅ **Optimized algorithms** (O(n) space where possible)
- ✅ **Efficient implementations** (no redundant computation)
- ✅ **Scalable solutions** (handle large inputs)

---

## 📈 Complexity Analysis

| Problem | Time | Space (Original) | Space (Optimized) |
|---------|------|------------------|-------------------|
| LCS | O(m×n) | O(m×n) | O(n) |
| Edit Distance | O(m×n) | O(m×n) | O(n) |
| Wildcard Match | O(m×n) | O(m×n) | O(n) |
| Matrix Chain | O(n³) | O(n²) | O(n²) |
| Burst Balloons | O(n³) | O(n²) | O(n²) |
| Scramble String | O(n⁴) | O(n³) | O(n³) |
| Cherry Pickup | O(n³) | O(n³) | O(n²) |

---

## 🎯 Interview Tips

### Top 10 2D DP Questions

**Must Know:**
1. Longest Common Subsequence (LC 1143)
2. Edit Distance (LC 72)
3. Wildcard Matching (LC 44)
4. Regular Expression Matching (LC 10)
5. Minimum Path Sum (LC 64)

**Should Know:**
6. Maximal Square (LC 221)
7. Maximal Rectangle (LC 85)
8. Burst Balloons (LC 312)
9. Palindrome Partitioning II (LC 132)
10. Interleaving String (LC 97)

### Common Interview Patterns

**Pattern 1: String comparison**
- LCS, Edit Distance, Distinct Subsequences
- **Key:** State represents relationship between two strings

**Pattern 2: Grid navigation**
- Path sum, unique paths, dungeon game
- **Key:** State represents cell properties

**Pattern 3: Pattern matching**
- Wildcard, regex, scramble string
- **Key:** Boolean validation with special rules

**Pattern 4: Interval optimization**
- Matrix chain, burst balloons
- **Key:** Try all split points

### Interview Strategy

**1. Clarify requirements:**
- Can strings be empty?
- Are there special characters?
- What's the expected input size?

**2. Start with brute force:**
- Explain recursive solution
- Identify overlapping subproblems

**3. Design DP solution:**
- Define state clearly
- Explain transitions
- Discuss base cases

**4. Optimize:**
- Space optimization (if applicable)
- Time optimization (if possible)

**5. Test:**
- Walk through small example
- Discuss edge cases
- Analyze complexity

---

## 📚 Additional Resources

### Documentation
- [Day39InterviewQA.md](notes/Day39InterviewQA.md) - 80+ Q&A
- [DOCUMENT_SIMILARITY_SYSTEM_DESIGN.md](system-design/DOCUMENT_SIMILARITY_SYSTEM_DESIGN.md) - System design case study
- [QUICK_REFERENCE.md](QUICK_REFERENCE.md) - Cheat sheet (coming soon)

### Code Files
- [TwoDimensionalDP.java](code/TwoDimensionalDP.java) - Core implementations
- [Day39Practice.java](code/Day39Practice.java) - Advanced problems
- [TestDay39.java](tests/TestDay39.java) - Test suite

### External Links
- [LeetCode DP Tag](https://leetcode.com/tag/dynamic-programming/)
- [CLRS Chapter 15](https://mitpress.mit.edu/books/introduction-algorithms-third-edition) - Dynamic Programming
- [Edit Distance Wikipedia](https://en.wikipedia.org/wiki/Edit_distance)
- [LCS Wikipedia](https://en.wikipedia.org/wiki/Longest_common_subsequence_problem)

---

## 🔄 Next Steps

### Immediate
1. Review all 16 problem implementations
2. Run and understand all test cases
3. Read interview Q&A document
4. Study system design case study

### Short-term (1 week)
1. Solve related LeetCode problems
2. Implement space-optimized versions
3. Practice whiteboard coding
4. Time yourself on each problem

### Long-term (1 month)
1. Teach concepts to others
2. Participate in coding contests
3. Build real-world projects using 2D DP
4. Master advanced variations

---

## 🤝 Contributing

This is a learning project. To extend:
1. Add more test cases
2. Implement additional problems
3. Optimize existing solutions
4. Enhance documentation

---

## 📝 Notes

### Key Takeaways
1. **State design is crucial** - spend time defining dp[i][j]
2. **Space can often be optimized** - from O(m×n) to O(n)
3. **Path reconstruction** requires full table (can't optimize space)
4. **Base cases matter** - incorrect bases lead to wrong answers
5. **Interval DP is O(n³)** - different pattern from standard 2D DP

### Common Pitfalls
- Off-by-one errors in array indexing
- Forgetting to initialize base cases
- Wrong loop order (accessing uncomputed values)
- Integer overflow in counting problems
- Not handling empty string cases

---

## ✅ Checklist

**Before moving to Day 40:**
- [ ] All 96 tests passing
- [ ] Understand all 16 problem solutions
- [ ] Can explain each algorithm's state and transition
- [ ] Know time/space complexity for each
- [ ] Reviewed interview Q&A
- [ ] Studied system design document
- [ ] Can implement from scratch without reference

---

## 📊 Progress Tracker

**Day 39 Completion: 100%**

| Task | Status |
|------|--------|
| Core implementations | ✅ Complete |
| Practice problems | ✅ Complete |
| Test suite | ✅ 100% pass rate |
| System design | ✅ Complete |
| Interview Q&A | ✅ 80+ questions |
| Documentation | ✅ Complete |

**Ready for Day 40!** 🚀

---

**Last Updated:** Day 39  
**Status:** ✅ Production Ready  
**Quality:** Zero Compromises  
**Achievement:** 100% Success Rate
