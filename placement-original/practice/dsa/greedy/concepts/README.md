# GREEDY ALGORITHMS PRACTICE QUESTIONS

## Overview
Greedy algorithms make locally optimal choices at each step with the hope of finding a global optimum. They are efficient and often used for optimization problems.

## Difficulty Breakdown

### Easy Level (6 Questions)
1. **Assign Cookies** - Greedy assignment of cookies to children
2. **Lemonade Change** - Greedy change making simulation
3. **Gas Station** - Circular gas station problem with greedy choice
4. **Is Subsequence** - Greedy string matching
5. **Maximum Subarray** - Kadane's algorithm (greedy variant)
6. **Best Time to Buy and Sell Stock** - Single transaction stock problem

### Medium Level (4 Questions)
7. **Jump Game** - Greedy jump reachability
8. **Jump Game II** - Minimum jumps with greedy approach
9. **Task Scheduler** - CPU task scheduling with cooling periods
10. **Minimum Number of Arrows to Burst Balloons** - Interval scheduling

### Hard Level (4 Questions)
11. **Merge Intervals** - Interval merging with sorting
12. **Insert Interval** - Interval insertion with merging
13. **Non-overlapping Intervals** - Maximum non-overlapping intervals
14. **Meeting Rooms II** - Minimum meeting rooms using priority queue

## Key Concepts to Master

### Greedy Choice Property
- Making the locally optimal choice leads to globally optimal solution
- Prove that greedy choice is always safe

### Optimal Substructure
- Problem can be solved by combining optimal solutions of subproblems
- Overlapping subproblems can be solved efficiently

### Common Greedy Patterns
- Sorting first, then greedy selection
- Maintaining current state and making decisions
- Using priority queues for ordering
- Interval-based problems with sorting

## Time Complexity Analysis
- Most greedy algorithms: O(n log n) due to sorting
- Some achieve O(n) with careful implementation
- Space complexity usually O(1) or O(n)

## Practice Strategy
1. **Understand the Problem**: Identify if greedy approach works
2. **Prove Correctness**: Ensure greedy choice property holds
3. **Implement Efficiently**: Focus on optimal time/space complexity
4. **Edge Cases**: Test with empty inputs, single elements, duplicates
5. **Compare Approaches**: Sometimes DP might be needed instead

## Interview Tips
- Greedy problems often appear in coding interviews
- Explain why greedy works for the specific problem
- Be prepared to prove correctness if asked
- Know when greedy fails and DP is needed instead

## Recommended Order
1. Start with easy problems to understand basic greedy patterns
2. Move to medium problems involving sorting and state maintenance
3. Tackle hard problems with complex greedy strategies
4. Review all solutions and understand time/space trade-offs</content>
<parameter name="filePath">c:\xampp\htdocs\Placement\practice\dsa\greedy\README.md