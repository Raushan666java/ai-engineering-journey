# GREEDY ALGORITHMS - QUICK CONCEPTS

## What are Greedy Algorithms?

Greedy algorithms make the **locally optimal choice** at each step with the hope that this choice will lead to a **globally optimal solution**. They are called "greedy" because they always choose the best option available at the current moment.

### Key Characteristics:
- **Efficient**: Often run in O(n log n) or better
- **Simple**: Easy to understand and implement
- **Optimal**: Work for problems with greedy choice property
- **Local Decisions**: Make choices without considering future consequences

## Core Principles

### 1. Greedy Choice Property
The problem exhibits that a globally optimal solution can be arrived at by making a locally optimal choice.

### 2. Optimal Substructure
An optimal solution to the problem contains optimal solutions to subproblems.

## Common Greedy Patterns

### Pattern 1: Sort First, Then Greedy
```java
// Example: Assign Cookies
public int findContentChildren(int[] g, int[] s) {
    Arrays.sort(g);  // Sort children by greed factor
    Arrays.sort(s);  // Sort cookies by size

    int i = 0, j = 0;
    while (i < g.length && j < s.length) {
        if (s[j] >= g[i]) {  // Greedy choice: assign cookie if it satisfies
            i++;
        }
        j++;
    }
    return i;
}
```

### Pattern 2: Maintain Current State
```java
// Example: Gas Station
public int canCompleteCircuit(int[] gas, int[] cost) {
    int totalGas = 0, totalCost = 0, start = 0, tank = 0;

    for (int i = 0; i < gas.length; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
        tank += gas[i] - cost[i];

        if (tank < 0) {  // Greedy: reset when tank goes negative
            start = i + 1;
            tank = 0;
        }
    }
    return totalGas >= totalCost ? start : -1;
}
```

### Pattern 3: Priority Queue for Ordering
```java
// Example: Task Scheduler
public int leastInterval(char[] tasks, int n) {
    int[] freq = new int[26];
    for (char task : tasks) freq[task - 'A']++;

    PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a, b) -> b - a);
    for (int f : freq) if (f > 0) maxHeap.offer(f);

    int cycles = 0;
    while (!maxHeap.isEmpty()) {
        List<Integer> temp = new ArrayList<>();
        for (int i = 0; i <= n; i++) {  // Process n+1 tasks
            if (!maxHeap.isEmpty()) {
                temp.add(maxHeap.poll() - 1);
            }
        }
        for (int t : temp) {
            if (t > 0) maxHeap.offer(t);
        }
        cycles += maxHeap.isEmpty() ? temp.size() : n + 1;
    }
    return cycles;
}
```

## Classic Greedy Problems

### 1. Activity Selection Problem
**Problem**: Select maximum number of non-overlapping activities
**Greedy Choice**: Always pick the activity that finishes earliest

```java
public int activitySelection(int[] start, int[] end) {
    // Sort activities by finish time
    Arrays.sort(end);  // Sort by end times

    int count = 1;
    int lastEnd = end[0];

    for (int i = 1; i < end.length; i++) {
        if (start[i] >= lastEnd) {  // Greedy choice
            count++;
            lastEnd = end[i];
        }
    }
    return count;
}
```

### 2. Fractional Knapsack
**Problem**: Maximize value with weight constraint (items can be fractional)
**Greedy Choice**: Take items with highest value-to-weight ratio first

```java
public double fractionalKnapsack(int[] weights, int[] values, int capacity) {
    Item[] items = new Item[weights.length];
    for (int i = 0; i < weights.length; i++) {
        items[i] = new Item(weights[i], values[i]);
    }

    // Sort by value/weight ratio (descending)
    Arrays.sort(items, (a, b) -> Double.compare(b.ratio, a.ratio));

    double totalValue = 0;
    for (Item item : items) {
        if (capacity >= item.weight) {
            totalValue += item.value;
            capacity -= item.weight;
        } else {
            totalValue += item.value * ((double) capacity / item.weight);
            break;
        }
    }
    return totalValue;
}
```

### 3. Huffman Coding
**Problem**: Build optimal prefix codes for data compression
**Greedy Choice**: Combine two smallest frequency nodes

```java
public void buildHuffmanTree(int[] frequencies) {
    PriorityQueue<Node> pq = new PriorityQueue<>((a, b) -> a.freq - b.freq);

    // Create leaf nodes
    for (int freq : frequencies) {
        pq.offer(new Node(freq));
    }

    // Build tree by combining smallest frequencies
    while (pq.size() > 1) {
        Node left = pq.poll();
        Node right = pq.poll();
        Node parent = new Node(left.freq + right.freq);
        parent.left = left;
        parent.right = right;
        pq.offer(parent);
    }
}
```

## When Greedy Works vs When It Doesn't

### ✅ Greedy Works:
- **Activity Selection**: Locally optimal (earliest finish) leads to global optimum
- **Fractional Knapsack**: Value-to-weight ratio gives optimal solution
- **Dijkstra's Algorithm**: Shortest path has greedy choice property
- **Kruskal's MST**: Minimum edge weight selection

### ❌ Greedy Fails:
- **0/1 Knapsack**: Cannot take fractional items - need DP
- **Coin Change (unlimited coins)**: Greedy may not give minimum coins
- **Longest Increasing Subsequence**: Need DP, not greedy

## Time Complexity Analysis

| Algorithm | Time Complexity | Space Complexity |
|-----------|----------------|------------------|
| Simple Greedy (no sort) | O(n) | O(1) |
| Greedy with sorting | O(n log n) | O(n) |
| Greedy with heap | O(n log k) | O(k) |
| Interval problems | O(n log n) | O(n) |

## Implementation Tips

### 1. Always Sort First
Most greedy problems require sorting the input first:
```java
Arrays.sort(array);  // Sort in ascending order
Arrays.sort(array, Collections.reverseOrder());  // Descending
Arrays.sort(array, (a, b) -> a[1] - b[1]);  // Sort by second element
```

### 2. Use Appropriate Data Structures
```java
// For frequency counting
Map<Character, Integer> freq = new HashMap<>();

// For priority ordering
PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a, b) -> b - a);
PriorityQueue<Integer> minHeap = new PriorityQueue<>();

// For interval problems
Arrays.sort(intervals, (a, b) -> a[1] - b[1]);  // Sort by end time
```

### 3. Handle Edge Cases
```java
// Empty input
if (array == null || array.length == 0) return 0;

// Single element
if (array.length == 1) return array[0];

// Negative numbers
// Zero values
// Duplicate values
```

## Common Mistakes to Avoid

### 1. Not Proving Greedy Choice Property
Always verify that the locally optimal choice leads to globally optimal solution.

### 2. Wrong Sorting Order
Make sure you're sorting in the correct order for the greedy choice.

### 3. Not Considering All Cases
Test with edge cases: empty arrays, single elements, all same values, etc.

### 4. Confusing Greedy with DP
Know when to use greedy vs when DP is required.

## Practice Problems by Difficulty

### Easy:
1. Assign Cookies (455)
2. Lemonade Change (860)
3. Gas Station (134)
4. Is Subsequence (392)
5. Best Time to Buy/Sell Stock (121)
6. Maximum Subarray (53)

### Medium:
7. Jump Game (55)
8. Jump Game II (45)
9. Task Scheduler (621)
10. Minimum Arrows to Burst Balloons (452)

### Hard:
11. Merge Intervals (56)
12. Insert Interval (57)
13. Non-overlapping Intervals (435)
14. Meeting Rooms II (253)

## Interview Preparation Tips

1. **Explain Your Approach**: Always explain why greedy works for this problem
2. **Prove Correctness**: Be ready to prove the greedy choice property
3. **Time Complexity**: Know the time and space complexity of your solution
4. **Alternative Approaches**: Mention when DP would be needed instead
5. **Edge Cases**: Test your solution with various edge cases

## Summary

Greedy algorithms are powerful tools for optimization problems where:
- **Greedy choice property** holds
- **Optimal substructure** exists
- Local optimal choices lead to global optimum

Master the common patterns:
- Sort first, then greedy select
- Maintain current state
- Use priority queues for ordering
- Handle intervals with sorting

Practice regularly and always verify that greedy is the correct approach for each problem!</content>
<parameter name="filePath">c:\xampp\htdocs\Placement\practice\dsa\greedy\QUICK_CONCEPTS.md