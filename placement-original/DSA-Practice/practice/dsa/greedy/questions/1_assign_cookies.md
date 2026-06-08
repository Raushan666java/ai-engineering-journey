# 1. ASSIGN COOKIES (LeetCode 455)

## Problem Statement
Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.

Each child `i` has a greed factor `g[i]`, which is the minimum size of a cookie that the child will be content with; and each cookie `j` has a size `s[j]`. If `s[j] >= g[i]`, we can assign the cookie `j` to the child `i`, and the child `i` will be content.

Your goal is to maximize the number of your content children and output the maximum number.

## Conceptual Understanding

### What is Greedy Choice Here?
- We want to satisfy as many children as possible
- Each child needs a cookie of minimum size `g[i]`
- Each cookie can only be used once
- **Greedy Choice**: Give the smallest possible cookie that satisfies each child

### Why Does This Work?
1. **Sort both arrays**: Children by greed factor, cookies by size
2. **Two pointers approach**: Try to satisfy children starting from least greedy
3. **Greedy property**: By satisfying the least demanding children first, we save larger cookies for more demanding children

### Algorithm Steps:
1. Sort children by greed factor (ascending)
2. Sort cookies by size (ascending)
3. Use two pointers to match cookies to children
4. Count satisfied children

## Solution Approach

### Method 1: Two Pointers (Greedy)
```java
public int findContentChildren(int[] g, int[] s) {
    Arrays.sort(g);  // Sort children by greed factor
    Arrays.sort(s);  // Sort cookies by size
    
    int childIndex = 0;
    int cookieIndex = 0;
    
    while (childIndex < g.length && cookieIndex < s.length) {
        // If current cookie can satisfy current child
        if (s[cookieIndex] >= g[childIndex]) {
            childIndex++;  // Move to next child
        }
        // Always move to next cookie (whether used or not)
        cookieIndex++;
    }
    
    return childIndex;  // Number of satisfied children
}
```

### Why This Works:
- **Sorted order**: Smallest greed factors first, smallest cookies first
- **Greedy matching**: Try smallest available cookie for each child
- **Optimal assignment**: This maximizes the number of satisfied children

## Time & Space Complexity
- **Time**: O(n log n + m log m) for sorting, O(n + m) for traversal
- **Space**: O(1) extra space (sorting can be in-place)

## Edge Cases & Testing
```java
// Test Case 1: Basic case
int[] g1 = {1, 2, 3}, s1 = {1, 1};  // Result: 1

// Test Case 2: All children can be satisfied
int[] g2 = {1, 2}, s2 = {1, 2, 3};  // Result: 2

// Test Case 3: No children can be satisfied
int[] g3 = {3, 4}, s3 = {1, 2};  // Result: 0

// Test Case 4: Empty arrays
int[] g4 = {}, s4 = {1, 2, 3};  // Result: 0
```

## Alternative Approaches

### Method 2: Brute Force (Inefficient)
```java
public int findContentChildrenBrute(int[] g, int[] s) {
    Arrays.sort(g);
    Arrays.sort(s);
    
    int count = 0;
    boolean[] used = new boolean[s.length];
    
    for (int greed : g) {
        for (int i = 0; i < s.length; i++) {
            if (!used[i] && s[i] >= greed) {
                used[i] = true;
                count++;
                break;
            }
        }
    }
    return count;
}
// Time: O(n*m), Space: O(m) - Inefficient for large inputs
```

## Key Insights
1. **Greedy choice property holds** because assigning smallest possible cookie to least greedy child is optimal
2. **Sorting is crucial** for the greedy approach to work
3. **Two pointers** make it efficient by avoiding nested loops
4. **Always move cookie pointer** regardless of whether cookie was used

## Similar Problems
- **Fractional Knapsack**: Similar greedy with sorting by ratio
- **Activity Selection**: Sort by end time, greedy selection
- **Jump Game**: Greedy reachability check

## Interview Tips
- Explain why sorting both arrays is necessary
- Prove that the greedy choice leads to optimal solution
- Discuss time complexity trade-offs
- Mention the brute force approach and why it's inefficient</content>
<parameter name="filePath">c:\xampp\htdocs\Placement\practice\dsa\greedy\1_assign_cookies.md