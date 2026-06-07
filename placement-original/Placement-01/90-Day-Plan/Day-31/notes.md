# Day 31 Notes

## Key Concepts Learned
- DP state definition and transitions
- Top-down memoization vs bottom-up tabulation
- Space optimized solutions (reduce from O(nW) to O(W) where possible)

## Important Formulas/Algorithms
- [Formula 1]
- [Formula 2]

## Code Snippets
```java
// Fibonacci memoization
static Map<Integer, Integer> memo = new HashMap<>();
public static int fibMemo(int n) { if (n<=1) return n; if (memo.containsKey(n)) return memo.get(n); int val = fibMemo(n-1)+fibMemo(n-2); memo.put(n,val); return val; }
```

## Questions & Doubts
- [Question 1]
- [Question 2]

## Mistakes Made
- [Mistake 1 and correction]
- [Mistake 2 and correction]

## Future Reference
- [Topic to revisit]
- [Concept to practice more]

## Personal Reflections
[How did the day go? What could be improved?]

## Action Items for Tomorrow
- Convert more DP problems to iterative tabulation
- Add JUnit tests to DP suite
- Optimize space for knapsack and verify correctness
