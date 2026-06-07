# Day 49: Greedy Algorithms - Making Optimal Local Choices

## 📋 Overview
Master greedy algorithm techniques where local optimal choices lead to global optimal solutions. Learn when to apply greedy strategies, prove correctness, and distinguish between greedy and dynamic programming approaches.

## 🎯 Learning Objectives
- Understand greedy choice property and optimal substructure
- Master classic greedy algorithm patterns
- Learn proof techniques for greedy correctness
- Distinguish between greedy vs DP problems
- Apply greedy strategies to optimization problems
- Understand activity selection and interval scheduling

## 📚 Topics Covered

### 1. **Greedy Algorithm Fundamentals**
- Greedy choice property
- Optimal substructure
- Proof of correctness (exchange argument, staying ahead)
- When to use greedy vs DP

### 2. **Classic Greedy Problems**
- Activity selection problem
- Huffman coding
- Fractional knapsack
- Minimum spanning tree (Kruskal's, Prim's)
- Shortest path (Dijkstra's)

### 3. **Greedy Patterns**
- Sorting-based greedy
- Priority queue greedy
- Interval scheduling
- Two-pointer greedy
- Frequency-based greedy

### 4. **Greedy Strategy Types**
- Maximize earliest finish time
- Minimize maximum
- Maximize minimum
- Interval merging
- Task scheduling

## 💻 Problems (12 Total)

### Problem 1: Jump Game
**Difficulty**: Medium | **LeetCode**: #55
- **Description**: Determine if you can reach last index from first position
- **Approach 1**: Greedy (track farthest reachable position)
- **Approach 2**: DP (bottom-up)
- **Time Complexity**: O(n)
- **Space Complexity**: O(1)

### Problem 2: Jump Game II
**Difficulty**: Medium | **LeetCode**: #45
- **Description**: Find minimum jumps to reach last index
- **Approach**: Greedy BFS-like (track current and next reach)
- **Time Complexity**: O(n)
- **Space Complexity**: O(1)

### Problem 3: Gas Station
**Difficulty**: Medium | **LeetCode**: #134
- **Description**: Find starting gas station to complete circular route
- **Approach**: Single pass greedy with total and current gas tracking
- **Time Complexity**: O(n)
- **Space Complexity**: O(1)

### Problem 4: Task Scheduler
**Difficulty**: Medium | **LeetCode**: #621
- **Description**: Find minimum intervals to execute tasks with cooling time
- **Approach 1**: Priority queue simulation
- **Approach 2**: Math formula (max frequency calculation)
- **Time Complexity**: O(n)
- **Space Complexity**: O(1) - only 26 tasks

### Problem 5: Reorganize String
**Difficulty**: Medium | **LeetCode**: #767
- **Description**: Reorganize string so no adjacent characters are same
- **Approach**: Greedy with priority queue (most frequent first)
- **Time Complexity**: O(n log 26) = O(n)
- **Space Complexity**: O(1)

### Problem 6: Minimum Number of Arrows to Burst Balloons
**Difficulty**: Medium | **LeetCode**: #452
- **Description**: Find minimum arrows to burst all balloons
- **Approach**: Sort by end position, greedy interval scheduling
- **Time Complexity**: O(n log n)
- **Space Complexity**: O(1)

### Problem 7: Non-overlapping Intervals
**Difficulty**: Medium | **LeetCode**: #435
- **Description**: Find minimum intervals to remove for non-overlapping
- **Approach**: Sort by end time, greedy selection
- **Time Complexity**: O(n log n)
- **Space Complexity**: O(1)

### Problem 8: Partition Labels
**Difficulty**: Medium | **LeetCode**: #763
- **Description**: Partition string into maximum parts where each letter appears in at most one part
- **Approach**: Track last occurrence, extend partition greedily
- **Time Complexity**: O(n)
- **Space Complexity**: O(1)

### Problem 9: Queue Reconstruction by Height
**Difficulty**: Medium | **LeetCode**: #406
- **Description**: Reconstruct queue based on height and people in front
- **Approach**: Sort by height descending, then insert by k value
- **Time Complexity**: O(n²)
- **Space Complexity**: O(n)

### Problem 10: Assign Cookies
**Difficulty**: Easy | **LeetCode**: #455
- **Description**: Maximize number of content children with cookies
- **Approach**: Sort both arrays, greedy assignment
- **Time Complexity**: O(n log n)
- **Space Complexity**: O(1)

### Problem 11: Boats to Save People
**Difficulty**: Medium | **LeetCode**: #881
- **Description**: Find minimum boats to carry all people
- **Approach**: Two pointers (pair heaviest with lightest)
- **Time Complexity**: O(n log n)
- **Space Complexity**: O(1)

### Problem 12: Minimum Cost to Connect Sticks
**Difficulty**: Medium | **LeetCode**: #1167 (Premium)
- **Description**: Find minimum cost to connect all sticks
- **Approach**: Priority queue (always combine two smallest)
- **Time Complexity**: O(n log n)
- **Space Complexity**: O(n)

## 🔄 Complexity Analysis

| Problem | Time Complexity | Space Complexity | Pattern |
|---------|----------------|------------------|---------|
| Jump Game | O(n) | O(1) | Farthest Reach |
| Jump Game II | O(n) | O(1) | BFS-like |
| Gas Station | O(n) | O(1) | Single Pass |
| Task Scheduler | O(n) | O(1) | Frequency |
| Reorganize String | O(n log 26) | O(1) | Priority Queue |
| Burst Balloons | O(n log n) | O(1) | Interval Sort |
| Non-overlapping | O(n log n) | O(1) | Interval Sort |
| Partition Labels | O(n) | O(1) | Last Occurrence |
| Queue Reconstruction | O(n²) | O(n) | Sort + Insert |
| Assign Cookies | O(n log n) | O(1) | Two Pointer |
| Boats to Save | O(n log n) | O(1) | Two Pointer |
| Connect Sticks | O(n log n) | O(n) | Priority Queue |

## 💡 Key Patterns

### Pattern 1: Interval Scheduling (Sort by End Time)
```java
// Maximize non-overlapping intervals
Arrays.sort(intervals, (a, b) -> a[1] - b[1]); // Sort by end
int end = Integer.MIN_VALUE;
int count = 0;
for (int[] interval : intervals) {
    if (interval[0] >= end) {
        count++;
        end = interval[1];
    }
}
```

### Pattern 2: Two Pointer Greedy
```java
// Pair elements optimally
Arrays.sort(array);
int left = 0, right = array.length - 1;
while (left <= right) {
    if (canPair(array[left], array[right])) {
        left++;
        right--;
    } else {
        right--; // Or left++ depending on problem
    }
}
```

### Pattern 3: Frequency-Based Greedy
```java
// Process by frequency (most/least frequent first)
PriorityQueue<Character> pq = new PriorityQueue<>(
    (a, b) -> freq[b] - freq[a]
);
// Add to queue and process
```

### Pattern 4: Farthest Reach
```java
// Track maximum reachable position
int maxReach = 0;
for (int i = 0; i <= maxReach && i < n; i++) {
    maxReach = Math.max(maxReach, i + nums[i]);
}
```

## 🎓 Greedy vs Dynamic Programming

### When to Use Greedy
1. **Greedy Choice Property**: Local optimal choice leads to global optimal
2. **No need to reconsider**: Once decision made, never revise
3. **Optimal substructure**: Problem can be solved by combining optimal solutions of subproblems
4. **Examples**: Activity selection, Huffman coding, Dijkstra's

### When to Use DP
1. **Overlapping subproblems**: Same subproblems solved multiple times
2. **Need to explore all options**: Cannot commit to local choice
3. **Optimal substructure** with dependencies
4. **Examples**: 0/1 Knapsack, Longest Common Subsequence, Edit Distance

### Comparison Table
| Aspect | Greedy | Dynamic Programming |
|--------|--------|---------------------|
| Decision | Irrevocable | Can reconsider |
| Optimization | Local optimal → Global optimal | Explore all paths |
| Time | Usually faster (O(n log n)) | Usually slower (O(n²)) |
| Space | Usually O(1) | Usually O(n) or O(n²) |
| Proof | Exchange argument | Recurrence relation |

## 🚀 Proof Techniques

### 1. **Exchange Argument**
- Assume optimal solution different from greedy
- Show you can exchange to greedy without losing optimality
- Contradiction proves greedy correctness

### 2. **Staying Ahead**
- Show greedy solution "stays ahead" at each step
- Prove greedy never falls behind optimal
- Induction to complete proof

### 3. **Structural Proof**
- Show greedy choice is part of some optimal solution
- Reduce problem to smaller instance
- Use induction on problem size

## 🎓 Real-World Applications

### 1. **Operating Systems**
- CPU scheduling (Shortest Job First)
- Disk scheduling (SCAN algorithm)
- Memory management (page replacement)

### 2. **Networking**
- Routing algorithms (Dijkstra's shortest path)
- Bandwidth allocation
- Packet scheduling

### 3. **Compression**
- Huffman coding (file compression)
- Data encoding
- Video/audio compression

### 4. **Resource Allocation**
- Job scheduling
- Task assignment
- Load balancing

### 5. **Finance**
- Currency exchange (maximize profit)
- Stock trading strategies
- Resource investment

### 6. **Logistics**
- Vehicle routing
- Warehouse management
- Delivery optimization

## 🚀 Pro Tips

1. **Sort First**: Many greedy problems require sorting data
2. **Greedy Choice**: Identify what local choice leads to global optimal
3. **Prove Correctness**: Use exchange argument or staying ahead
4. **Check Counterexamples**: Test with edge cases
5. **Consider All Strategies**: Multiple greedy strategies may exist
6. **Interval Problems**: Usually sort by end time
7. **Priority Queue**: Useful for frequency-based problems
8. **Two Pointers**: Common for pairing/matching problems
9. **Track State**: Maintain necessary information (current position, capacity, etc.)
10. **Optimization Direction**: Maximize minimum or minimize maximum

## ⚠️ Common Pitfalls

1. **Wrong greedy choice**: Not all local optimal lead to global optimal
2. **Forgetting to sort**: Many problems require sorted input
3. **Wrong sort criteria**: Sort by start vs end time matters
4. **Not proving correctness**: Assuming greedy works without proof
5. **Ignoring edge cases**: Empty arrays, single elements
6. **Integer overflow**: When summing or comparing large numbers
7. **Confusing with DP**: Some problems look greedy but need DP
8. **Wrong optimization**: Maximizing when should minimize
9. **Breaking ties**: How to handle equal values
10. **Circular problems**: Gas station, task scheduler need special handling

## 📊 Optimization Techniques

### Time Optimization
- Use priority queue for O(log n) operations
- Sort once, use multiple times
- Two pointers instead of nested loops

### Space Optimization
- Count frequencies with array instead of HashMap
- Reuse input array for sorting
- Track only necessary state

### Code Simplification
- Clear greedy strategy stated upfront
- Meaningful variable names
- Comment proof sketch

## 🧪 Classic Greedy Algorithms

### 1. **Activity Selection**
```java
// Maximize number of non-overlapping activities
int activitySelection(int[] start, int[] end) {
    // Sort by end time
    int count = 1, lastEnd = end[0];
    for (int i = 1; i < start.length; i++) {
        if (start[i] >= lastEnd) {
            count++;
            lastEnd = end[i];
        }
    }
    return count;
}
```

### 2. **Fractional Knapsack**
```java
// Maximize value with weight constraint
double fractionalKnapsack(int[] weights, int[] values, int W) {
    // Sort by value/weight ratio
    double totalValue = 0;
    for (item : sortedItems) {
        if (W >= item.weight) {
            W -= item.weight;
            totalValue += item.value;
        } else {
            totalValue += item.value * (W / (double)item.weight);
            break;
        }
    }
    return totalValue;
}
```

### 3. **Huffman Coding**
```java
// Optimal prefix-free encoding
Node buildHuffmanTree(int[] freq) {
    PriorityQueue<Node> pq = new PriorityQueue<>();
    for (int f : freq) pq.offer(new Node(f));
    
    while (pq.size() > 1) {
        Node left = pq.poll();
        Node right = pq.poll();
        pq.offer(new Node(left.freq + right.freq, left, right));
    }
    return pq.poll();
}
```

## 📖 Resources
- **LeetCode**: Problems #55, #45, #134, #621, #767, #452, #435, #763, #406, #455, #881
- **GeeksforGeeks**: [Greedy Algorithms](https://www.geeksforgeeks.org/greedy-algorithms/)
- **YouTube**: "Greedy Algorithms" by Abdul Bari
- **Book**: "Algorithm Design" by Kleinberg & Tardos (Chapter 4)
- **Course**: MIT 6.006 - Introduction to Algorithms
- **Tutorial**: [Greedy Algorithm Visualization](https://visualgo.net/en/greedy)

## ✅ Practice Checklist

### Morning Session
- [ ] Learn greedy choice property
- [ ] Understand optimal substructure
- [ ] Study classic greedy problems
- [ ] Solve Jump Game
- [ ] Solve Jump Game II
- [ ] Solve Gas Station

### Afternoon Session
- [ ] Master sorting-based greedy
- [ ] Learn priority queue greedy
- [ ] Study interval-based greedy
- [ ] Understand greedy vs DP comparison
- [ ] Practice proof techniques

### Evening Session
- [ ] Solve Task Scheduler
- [ ] Solve Reorganize String
- [ ] Solve Minimum Number of Arrows
- [ ] Solve remaining 6 problems
- [ ] Complete HR interview practice
- [ ] Review greedy patterns

## 🎯 Success Criteria
- ✅ Understand greedy choice property
- ✅ Master proof techniques
- ✅ Solve all 12 problems
- ✅ Distinguish greedy vs DP
- ✅ Apply greedy to real-world problems
- ✅ Complete HR interview prep

## 🔜 Next Steps
- **Day 50**: Backtracking
- **Day 51**: Week 7 Assessment & Project Work

---
**Time Allocation**: 9 hours total
- Morning: 3 hours (Fundamentals & Basic Problems)
- Afternoon: 3 hours (Strategy Implementation & Comparison)
- Evening: 3 hours (Complex Problems & HR Interview)

**Goal**: Master greedy algorithms and make optimal local choices that lead to global solutions!
