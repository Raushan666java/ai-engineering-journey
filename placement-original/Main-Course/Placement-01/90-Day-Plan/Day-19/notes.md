# Day 19 Quick Reference: Greedy Algorithms

## ✅ Greedy Fundamentals
- Greedy choice: make the best local choice at each step
- Correctness requires demonstrating that local choices lead to global optimality (or counterexample otherwise)

## 🔁 Greedy Algorithms Template
1. Sort the items by the key (end-time, start-time, ratio(value/weight), profit)
2. Iterate through sorted list and pick items that satisfy constraints
3. Use greedy data structures (priority queues) for some variations

## ✨ Common Greedy Patterns
- **Interval Scheduling/Activity Selection:** sort by end time and pick the next activity whose start >= last end
- **Merge Intervals:** sort by start time and merge overlapping intervals
- **Fractional Knapsack:** sort by value/weight ratio and fill capacity
- **Job Sequencing with Deadlines:** sort by profit and assign slots greedily
- **Min Arrows/Balloons:** sort by end coordinate and track current limit
- **Assign Cookies:** sort children greediness and cookies sizes

## 🔧 Greedy Snippets
### Activity selection
```java
int[][] sorted = ...; sort by end time;
int count = 0; int last = -inf;
for intervals: if (interval.start >= last) {select; last = interval.end;}
```

### Fractional Knapsack
```java
sort by val/weight descending;
for item: if (capacity >= wt) take full else take partial and break;
```

### Job sequencing with deadlines
```java
sort by profit desc; for each job try to place it at the latest available slot <= deadline
```

## ⚠️ Common Pitfalls
- Greedy fails if the problem doesn't satisfy greedy-choice property (e.g., coin-change on non-canonical systems)
- Forget to sort by correct key (end vs start vs ratio)
- Off-by-one errors when checking intervals
- Use of greedy where DP/other algorithms are necessary

## ✅ Quick Checklist for Interviews
- Identify if greedy is appropriate: Are there local choices that can be proven optimal?
- Choose correct sorting key and data structure
- Outline proof or justification quickly
- Provide counterexample if greedy fails and propose alternative (DP/Backtracking)

**Practice:** Do LC 455, 435, 452, 406, 767 and create counterexamples where greedy is wrong.
