# DAY 25 - ADVANCED ALGORITHMS & DATA STRUCTURES
## Complete Summary & Learning Guide

---

## 📚 **OVERVIEW**

Day 25 represents the pinnacle of algorithmic knowledge, covering the most advanced data structures and algorithms used in competitive programming and technical interviews at top tech companies.

### **Topics Covered**

1. **Advanced Tree Structures** (40% of content)
   - Segment Trees with Lazy Propagation
   - Fenwick Trees (Binary Indexed Trees)
   - Advanced Trie Operations
   - Self-Balancing BSTs (AVL, Red-Black)
   - Suffix Arrays and Suffix Trees

2. **Graph Algorithms** (25% of content)
   - Network Flow (Ford-Fulkerson, Edmond-Karp, Dinic's)
   - Bipartite Matching (Hungarian Algorithm)
   - Strongly Connected Components (Kosaraju, Tarjan)
   - Articulation Points & Bridges
   - Eulerian & Hamiltonian Paths

3. **String Algorithms** (15% of content)
   - KMP Pattern Matching
   - Z-Algorithm
   - Manacher's Algorithm (Palindromes)
   - Aho-Corasick (Multi-Pattern Matching)
   - Rabin-Karp & Rolling Hash

4. **Advanced Dynamic Programming** (15% of content)
   - Bitmask DP (TSP, Assignment)
   - Digit DP
   - Tree DP
   - SOS (Sum over Subsets) DP
   - Convex Hull Trick
   - Game Theory DP

5. **Computational Geometry & Math** (5% of content)
   - Convex Hull (Graham Scan)
   - Line Intersection & Closest Pair
   - Fast Fourier Transform (FFT)
   - Number Theory (Sieve, Modular Arithmetic)
   - Matrix Operations

---

## 🎯 **LEARNING OBJECTIVES**

By the end of Day 25, you will:

### **Knowledge Goals**
- ✅ Master advanced tree data structures (Segment Tree, Fenwick Tree)
- ✅ Understand network flow algorithms and their applications
- ✅ Implement efficient string matching algorithms
- ✅ Apply advanced DP techniques to complex problems
- ✅ Solve computational geometry problems

### **Skill Goals**
- ✅ Choose optimal data structure for given constraints
- ✅ Implement complex algorithms with correct edge cases
- ✅ Optimize solutions using advanced techniques
- ✅ Debug and test intricate algorithms
- ✅ Explain trade-offs between different approaches

### **Interview Readiness**
- ✅ Solve Google/Facebook/Amazon hard-level problems
- ✅ Implement production-quality code
- ✅ Analyze time/space complexity accurately
- ✅ Discuss real-world applications confidently

---

## 📖 **DETAILED CONTENT BREAKDOWN**

### **1. ADVANCED TREE STRUCTURES (6,000+ lines)**

#### **A. Segment Tree**
**File:** `AdvancedTreeAlgorithms.java`

**What You'll Learn:**
```
✓ Segment Tree Construction - O(n)
✓ Point Updates - O(log n)
✓ Range Queries - O(log n)
✓ Lazy Propagation for Range Updates - O(log n)
✓ Applications: RMQ, RSQ, Range GCD
```

**Key Implementation:**
```java
// Segment Tree with Lazy Propagation
class SegmentTree {
    long[] tree, lazy;
    
    // Build in O(n)
    void build(int[] arr, int node, int start, int end);
    
    // Query range [l, r] in O(log n)
    long query(int l, int r);
    
    // Update range [l, r] in O(log n)
    void updateRange(int l, int r, long val);
}
```

**Real-World Applications:**
- Database range queries
- Map/reduce operations
- Game development (collision detection)
- Computational biology (sequence analysis)

#### **B. Fenwick Tree (BIT)**
**What You'll Learn:**
```
✓ Fenwick Tree Construction - O(n log n)
✓ Point Updates - O(log n)
✓ Prefix Sum Queries - O(log n)
✓ 2D Fenwick Tree
✓ Range Updates using difference array
```

**Key Operations:**
```java
class FenwickTree {
    long[] tree;
    
    void update(int i, long delta) {
        while (i <= n) {
            tree[i] += delta;
            i += i & (-i);  // Add last set bit
        }
    }
    
    long query(int i) {
        long sum = 0;
        while (i > 0) {
            sum += tree[i];
            i -= i & (-i);  // Remove last set bit
        }
        return sum;
    }
}
```

**When to Choose:**
| Feature | Segment Tree | Fenwick Tree |
|---------|-------------|--------------|
| Memory | 4n | n |
| Operations | Any associative | Invertible only |
| Implementation | Complex | Simple |
| Range Updates | Native support | Needs difference array |
| Speed | Slower | Faster |

#### **C. Advanced Trie**
**What You'll Learn:**
```
✓ Trie with Delete Operation
✓ Autocomplete Implementation
✓ Longest Common Prefix (LCP)
✓ XOR Trie for Maximum XOR
✓ Compressed Trie (Patricia Trie)
```

**Applications:**
- Search engines (autocomplete)
- IP routing (longest prefix match)
- Spell checkers
- DNA sequence analysis

---

### **2. GRAPH ALGORITHMS (5,500+ lines)**

#### **A. Network Flow**
**File:** `AdvancedGraphAlgorithms.java`

**Algorithms Covered:**
1. **Ford-Fulkerson** - O(E * max_flow)
2. **Edmond-Karp** - O(V * E²)
3. **Dinic's Algorithm** - O(V² * E)

**Key Concepts:**
```java
// Maximum Flow Template
class MaxFlow {
    int[][] capacity, flow;
    
    int fordFulkerson(int source, int sink) {
        int maxFlow = 0;
        while (bfs(source, sink)) {
            // Find augmenting path
            // Update flow
            maxFlow += pathFlow;
        }
        return maxFlow;
    }
}
```

**Min-Cut Max-Flow Theorem:**
```
Maximum Flow = Minimum Cut Capacity

Applications:
✓ Network routing optimization
✓ Image segmentation
✓ Airline scheduling
✓ Project selection
```

#### **B. Bipartite Matching**
**What You'll Learn:**
```
✓ Maximum Bipartite Matching - O(V * E)
✓ Hungarian Algorithm - O(n³)
✓ Hopcroft-Karp - O(E * √V)
✓ Applications in job assignment
```

**Real-World Problems:**
- Medical residency matching
- Online advertising (ad-slot matching)
- Resource allocation
- Course scheduling

#### **C. Strongly Connected Components**
**Algorithms:**
1. **Kosaraju's Algorithm** - O(V + E)
   - Two DFS passes
   - Easy to implement
   
2. **Tarjan's Algorithm** - O(V + E)
   - Single DFS pass
   - More efficient

**Applications:**
- Web page ranking
- Deadlock detection
- Social network analysis
- Compiler optimization

---

### **3. STRING ALGORITHMS (5,000+ lines)**

#### **A. Pattern Matching**
**File:** `AdvancedStringAlgorithms.java`

**Algorithms Comparison:**

| Algorithm | Time | Space | Best For |
|-----------|------|-------|----------|
| KMP | O(n+m) | O(m) | Single pattern |
| Z-Algorithm | O(n+m) | O(n+m) | String analysis |
| Rabin-Karp | O(n+m) | O(1) | Multiple patterns |
| Aho-Corasick | O(n+m+z) | O(m*σ) | Dictionary matching |
| Boyer-Moore | O(n/m) | O(σ) | Long patterns |

**σ = alphabet size, z = matches**

#### **B. KMP Algorithm**
**Why O(n + m)?**
```java
// Key insight: LPS array prevents backtracking in text
int[] lps = computeLPS(pattern);

while (i < n) {
    if (match) advance both pointers;
    else if (j > 0) j = lps[j-1];  // Smart backtrack
    else i++;
}

// i never decreases → O(n)
// j backtracking bounded by forward movement → O(m)
// Total: O(n + m)
```

#### **C. Manacher's Algorithm**
**Longest Palindrome in O(n):**
```java
// Preprocessing: "babad" → "^#b#a#b#a#d#$"
// Add sentinels and separators

// Key: Mirror property
if (i < right) {
    p[i] = min(p[mirror], right - i);
}

// Expand only when necessary
while (s[i + p[i] + 1] == s[i - p[i] - 1]) {
    p[i]++;
}
```

**Why Linear?**
- Each position expanded at most once
- Right boundary only moves forward
- Mirror property skips redundant work

---

### **4. ADVANCED DYNAMIC PROGRAMMING (6,500+ lines)**

#### **A. Bitmask DP**
**File:** `AdvancedDynamicProgramming.java`

**When to Use:**
- Small n (≤ 20-25)
- Track subset of elements
- Permutation problems

**Classic Problem: TSP**
```java
// State: dp[mask][city] = min cost to visit cities in mask, end at city
int tsp(int mask, int city) {
    if (mask == (1 << n) - 1) return dist[city][0];
    
    if (dp[mask][city] != -1) return dp[mask][city];
    
    int ans = INF;
    for (int next = 0; next < n; next++) {
        if ((mask & (1 << next)) == 0) {
            ans = min(ans, dist[city][next] + 
                          tsp(mask | (1 << next), next));
        }
    }
    
    return dp[mask][city] = ans;
}
```

**Bit Operations Cheat Sheet:**
```java
Check bit i:    (mask & (1 << i)) != 0
Set bit i:      mask | (1 << i)
Clear bit i:    mask & ~(1 << i)
Toggle bit i:   mask ^ (1 << i)
Count bits:     Integer.bitCount(mask)
Iterate subsets: for(int s=mask; s>0; s=(s-1)&mask)
```

#### **B. Digit DP**
**Template for Range Counting:**
```java
long solve(String num, int pos, int sum, boolean tight) {
    if (pos == num.length()) return sum == target ? 1 : 0;
    
    if (memo[pos][sum][tight] != -1) return memo[pos][sum][tight];
    
    int limit = tight ? (num[pos] - '0') : 9;
    long count = 0;
    
    for (int digit = 0; digit <= limit; digit++) {
        count += solve(num, pos + 1, sum + digit,
                       tight && (digit == limit));
    }
    
    return memo[pos][sum][tight] = count;
}
```

**Common Problems:**
1. Count numbers with digit sum = K
2. Count numbers divisible by K
3. Armstrong numbers in range
4. Numbers without consecutive digits

#### **C. SOS DP (Sum over Subsets)**
**Why O(n * 2^n)?**
```java
// For each mask, sum all its submasks
// Naive: O(3^n) - each element in/out/ignored
// SOS DP: O(n * 2^n)

long[] sosDP(long[] arr) {
    long[] dp = arr.clone();
    
    for (int i = 0; i < n; i++) {
        for (int mask = 0; mask < (1 << n); mask++) {
            if ((mask & (1 << i)) != 0) {
                dp[mask] += dp[mask ^ (1 << i)];
            }
        }
    }
    
    return dp;
}
```

**Applications:**
- Count pairs with AND = 0
- Fast subset convolution
- Mobius transform

---

### **5. COMPUTATIONAL GEOMETRY (3,000+ lines)**

#### **A. Convex Hull**
**Algorithms:**

1. **Graham Scan** - O(n log n)
   ```java
   1. Find bottom-most point
   2. Sort by polar angle
   3. Maintain stack for convex hull
   4. Pop while making right turn
   ```

2. **Jarvis March** - O(n * h)
   ```java
   1. Start from leftmost point
   2. Find next point with smallest angle
   3. Repeat until back to start
   ```

**When to Choose:**
- Graham: General purpose, always O(n log n)
- Jarvis: When hull size h is small

#### **B. Number Theory**
**Sieve of Eratosthenes:**
```java
boolean[] sieve(int n) {
    boolean[] prime = new boolean[n + 1];
    Arrays.fill(prime, true);
    
    for (int p = 2; p * p <= n; p++) {
        if (prime[p]) {
            for (int i = p * p; i <= n; i += p) {
                prime[i] = false;
            }
        }
    }
    return prime;
}
```

**Modular Arithmetic:**
```java
// Fast Exponentiation: a^b mod m
long modPow(long a, long b, long m) {
    long res = 1;
    a %= m;
    while (b > 0) {
        if (b & 1) res = (res * a) % m;
        a = (a * a) % m;
        b >>= 1;
    }
    return res;
}

// Modular Inverse: a^-1 mod m
long modInv(long a, long m) {
    return modPow(a, m - 2, m);  // Fermat's Little Theorem
}
```

---

## 🎓 **PRACTICE PROBLEMS (60+ Problems)**

### **Difficulty Distribution**
- **Easy:** 15 problems (Warmup)
- **Medium:** 30 problems (Interview Level)
- **Hard:** 15 problems (Competitive Programming)

### **Problem Categories**

#### **Segment Tree (10 problems)**
1. Range Sum Query with Point Updates
2. Range Minimum Query with Range Updates
3. Count Inversions in Array
4. Maximum Subarray Sum in Range
5. 2D Range Sum Query
6. Range GCD Query
7. Kth Smallest in Range
8. Count of Range Sum
9. Persistent Segment Tree Queries
10. Merge Sort Tree Applications

#### **Graph (15 problems)**
11. Maximum Bipartite Matching (Job Assignment)
12. Find Bridges (Critical Connections)
13. Shortest Path in DAG
14. Course Schedule IV (Reachability)
15. Connected Components (Union-Find)
16. Network Flow Applications
17. Minimum Cut Problems
18. Eulerian Path/Circuit
19. Hamiltonian Path Count
20. Strongly Connected Components
21. Articulation Points Detection
22. Graph Coloring
23. Traveling Salesman Problem
24. Chinese Postman Problem
25. Maximum Flow Variants

#### **String (15 problems)**
26. Implement strStr() (KMP)
27. Longest Palindromic Substring
28. Find All Anagrams
29. Minimum Window Substring
30. Character Replacement
31. Pattern Matching with Wildcards
32. Regular Expression Matching
33. Shortest Palindrome
34. Multiple Pattern Matching
35. Longest Repeating Substring
36. Distinct Palindromic Subsequences
37. Edit Distance
38. Wildcard Matching
39. String Compression
40. Longest Common Substring

#### **Advanced DP (20 problems)**
41. Partition Equal Subset Sum
42. Longest Increasing Subsequence
43. Russian Doll Envelopes
44. Count Palindromic Subsequences
45. Burst Balloons
46. Optimal Binary Search Tree
47. Matrix Chain Multiplication
48. Palindrome Partitioning
49. Distinct Subsequences
50. Interleaving String
51. Edit Distance Variants
52. Stone Game Variations
53. Job Scheduling with Profit
54. Paint Fence Ways
55. Subset Sum Count
56. Rod Cutting
57. Egg Drop
58. Box Stacking
59. Building Bridges
60. Minimum Cost Path

---

## 💡 **INTERVIEW QUESTIONS (150+ Q&A)**

### **Categories**

#### **Conceptual (50 questions)**
- What is X and when to use it?
- Compare X vs Y algorithms
- Explain time/space complexity
- Discuss trade-offs

#### **Implementation (50 questions)**
- Implement X algorithm
- Optimize given code
- Handle edge cases
- Debug complex scenarios

#### **Problem-Solving (50 questions)**
- Given problem, choose approach
- Apply X to solve Y
- Modify algorithm for constraints
- Real-world applications

### **Sample Questions**

**Q: When would you choose Segment Tree over Fenwick Tree?**
```
Answer:
Choose Segment Tree when:
✓ Need min/max/GCD queries (non-invertible operations)
✓ Need range updates with lazy propagation
✓ Complex queries (multiple operations)

Choose Fenwick Tree when:
✓ Only sum/XOR queries (invertible operations)
✓ Memory constrained
✓ Simple implementation preferred
```

**Q: Explain why KMP is O(n + m)**
```
Answer:
- Text pointer i never decreases → at most n comparisons
- Pattern pointer j backtracking bounded by LPS array
- Total forward movement of j ≤ m
- Each backtrack j = lps[j-1] reduces j but never past 0
- Combined: O(n) + O(m) = O(n + m)
```

---

## 📊 **COMPLEXITY REFERENCE**

### **Data Structure Operations**

| Structure | Build | Update | Query | Space |
|-----------|-------|--------|-------|-------|
| Segment Tree | O(n) | O(log n) | O(log n) | O(4n) |
| Fenwick Tree | O(n log n) | O(log n) | O(log n) | O(n) |
| Trie | O(mk) | O(k) | O(k) | O(mk×σ) |
| AVL Tree | O(n log n) | O(log n) | O(log n) | O(n) |

**k = string length, σ = alphabet size**

### **Algorithm Complexities**

| Algorithm | Time | Space | Use Case |
|-----------|------|-------|----------|
| KMP | O(n+m) | O(m) | Single pattern |
| Manacher | O(n) | O(n) | Palindromes |
| FFT | O(n log n) | O(n) | Polynomial mult |
| Max Flow | O(VE²) | O(V²) | Network flow |
| Convex Hull | O(n log n) | O(n) | Geometry |
| TSP | O(n²×2ⁿ) | O(n×2ⁿ) | Bitmask DP |

---

## 🚀 **RECOMMENDED LEARNING PATH**

### **Week 1: Advanced Trees**
- Day 1-2: Segment Trees (basic + lazy)
- Day 3: Fenwick Trees
- Day 4: Trie variants
- Day 5: AVL & Red-Black Trees
- Practice: 15 problems

### **Week 2: Graph Algorithms**
- Day 1-2: Network Flow
- Day 3: Bipartite Matching
- Day 4: SCC & Bridges
- Day 5: Eulerian/Hamiltonian
- Practice: 20 problems

### **Week 3: Strings & DP**
- Day 1-2: KMP, Z, Manacher
- Day 3: Aho-Corasick, Rabin-Karp
- Day 4-5: Bitmask, Digit, Tree DP
- Practice: 25 problems

---

## 📝 **NOTES & TIPS**

### **Implementation Tips**

1. **Segment Tree:**
   - Always allocate 4n space
   - Use 0-based or 1-based indexing consistently
   - Test lazy propagation thoroughly

2. **Graph Algorithms:**
   - Use adjacency list for sparse graphs
   - Handle disconnected components
   - Check for cycles in directed graphs

3. **String Algorithms:**
   - Watch for off-by-one errors
   - Handle empty strings
   - Test with single character

4. **DP:**
   - Identify state clearly
   - Start with brute force
   - Add memoization
   - Optimize to tabulation

### **Common Pitfalls**

❌ **Segment Tree:** Forgetting to push lazy values
❌ **Fenwick:** Using 0-based indexing (should be 1-based)
❌ **KMP:** Not handling pattern at end of text
❌ **Bitmask DP:** Integer overflow with large n
❌ **Convex Hull:** Not handling collinear points

---

## 🎯 **SUCCESS METRICS**

### **Day 25 Completion Checklist**

- [ ] Implemented all 5 core algorithms
- [ ] Solved 20+ practice problems
- [ ] Completed 30+ interview questions
- [ ] Understood all complexity analyses
- [ ] Can explain trade-offs between approaches
- [ ] Built at least 2 complete solutions from scratch
- [ ] Tested edge cases thoroughly
- [ ] Reviewed and understood all code

### **Mastery Indicators**
- ✅ Can choose optimal data structure for problem
- ✅ Implement complex algorithms without reference
- ✅ Explain algorithms to others clearly
- ✅ Debug intricate issues quickly
- ✅ Optimize solutions independently

---

## 🔗 **NEXT STEPS**

After completing Day 25:

1. **Practice Platforms:**
   - LeetCode Hard problems
   - Codeforces Div 1
   - Google Code Jam
   - TopCoder SRMs

2. **Advanced Topics:**
   - Heavy-Light Decomposition
   - Link-Cut Trees
   - Persistent Data Structures
   - Advanced Number Theory

3. **Interview Preparation:**
   - Mock interviews
   - System design
   - Behavioral questions

---

**Total Content:** 25,000+ lines of production-ready code
**Total Problems:** 60+ fully solved
**Total Q&A:** 150+ comprehensive answers

**Estimated Study Time:** 40-60 hours for complete mastery

---

*Congratulations on reaching this advanced level! 🎉*
*Continue practicing and you'll be ready for any technical interview!*
