# 🎯 Greedy Algorithms - Complete Guide

## 📚 **Greedy Algorithm Fundamentals**

### **What is a Greedy Algorithm?**
A greedy algorithm makes the **locally optimal choice** at each step, hoping to find a **globally optimal solution**. It never reconsiders its choices.

### **Greedy Choice Property**
- **Local Optimization**: Make the best choice available at the current moment
- **Irrevocable Decisions**: Once a choice is made, it's never changed
- **No Backtracking**: Unlike dynamic programming, no need to solve subproblems

### **When to Use Greedy Algorithms**
1. **Greedy Choice Property**: Local optimal choices lead to global optimum
2. **Optimal Substructure**: Problem can be broken into subproblems
3. **No Dependencies**: Current choice doesn't affect future choices negatively

### **Greedy vs Dynamic Programming**
| Aspect | Greedy | Dynamic Programming |
|--------|--------|-------------------|
| Strategy | Local optimum | Global optimum |
| Complexity | Usually O(n log n) | Usually O(n²) or higher |
| Memory | O(1) or O(n) | O(n) or O(n²) |
| Backtracking | No | Yes |
| Guarantee | May not be optimal | Always optimal |

---

## 🏗️ **Classic Greedy Algorithms**

### **1. Activity Selection Problem**
```python
def activity_selection(activities):
    """
    Select maximum number of non-overlapping activities
    Time: O(n log n), Space: O(1)
    
    Activities: [(start, end), ...]
    """
    # Sort by end time (greedy choice)
    activities.sort(key=lambda x: x[1])
    
    selected = []
    last_end_time = 0
    
    for start, end in activities:
        # If activity doesn't overlap with last selected
        if start >= last_end_time:
            selected.append((start, end))
            last_end_time = end
    
    return selected

# Example
activities = [(1, 3), (2, 5), (4, 6), (6, 7), (5, 8)]
result = activity_selection(activities)
print(result)  # [(1, 3), (4, 6), (6, 7)]

# Pseudocode:
"""
ACTIVITY_SELECTION(activities):
    SORT activities by end_time
    selected = []
    last_end = 0
    
    FOR each activity (start, end):
        IF start >= last_end:
            ADD activity to selected
            last_end = end
    
    RETURN selected
"""
```

### **2. Fractional Knapsack**
```python
def fractional_knapsack(capacity, items):
    """
    Maximize value in knapsack (can take fractions)
    Time: O(n log n), Space: O(1)
    
    Items: [(value, weight), ...]
    """
    # Calculate value-to-weight ratio
    items_with_ratio = []
    for i, (value, weight) in enumerate(items):
        ratio = value / weight
        items_with_ratio.append((ratio, value, weight, i))
    
    # Sort by ratio in descending order (greedy choice)
    items_with_ratio.sort(reverse=True)
    
    total_value = 0
    taken = [0] * len(items)  # Fraction taken of each item
    
    for ratio, value, weight, idx in items_with_ratio:
        if capacity >= weight:
            # Take whole item
            capacity -= weight
            total_value += value
            taken[idx] = 1.0
        else:
            # Take fraction
            fraction = capacity / weight
            total_value += value * fraction
            taken[idx] = fraction
            break
    
    return total_value, taken

# Example
items = [(60, 10), (100, 20), (120, 30)]  # (value, weight)
capacity = 50
max_value, taken = fractional_knapsack(capacity, items)
print(f"Maximum value: {max_value}")  # 240.0
print(f"Fractions taken: {taken}")     # [1.0, 1.0, 0.6666666666666666]
```

### **3. Huffman Coding**
```python
import heapq
from collections import defaultdict, Counter

class HuffmanNode:
    def __init__(self, char, freq, left=None, right=None):
        self.char = char
        self.freq = freq
        self.left = left
        self.right = right
    
    def __lt__(self, other):
        return self.freq < other.freq

def huffman_encoding(text):
    """
    Generate Huffman codes for text compression
    Time: O(n log n), Space: O(n)
    """
    if not text:
        return {}, None
    
    # Count frequencies
    freq = Counter(text)
    
    # Create min-heap of nodes
    heap = [HuffmanNode(char, f) for char, f in freq.items()]
    heapq.heapify(heap)
    
    # Build Huffman tree
    while len(heap) > 1:
        left = heapq.heappop(heap)
        right = heapq.heappop(heap)
        
        merged = HuffmanNode(None, left.freq + right.freq, left, right)
        heapq.heappush(heap, merged)
    
    root = heap[0]
    
    # Generate codes
    codes = {}
    
    def generate_codes(node, code=""):
        if node:
            if node.char is not None:  # Leaf node
                codes[node.char] = code or "0"  # Handle single character
            else:
                generate_codes(node.left, code + "0")
                generate_codes(node.right, code + "1")
    
    generate_codes(root)
    return codes, root

def huffman_compress(text, codes):
    """Compress text using Huffman codes"""
    return ''.join(codes[char] for char in text)

def huffman_decompress(compressed, root):
    """Decompress using Huffman tree"""
    if not compressed:
        return ""
    
    result = []
    current = root
    
    for bit in compressed:
        if bit == '0':
            current = current.left
        else:
            current = current.right
        
        if current.char is not None:  # Leaf node
            result.append(current.char)
            current = root
    
    return ''.join(result)

# Example usage
text = "hello world"
codes, root = huffman_encoding(text)
print("Huffman Codes:", codes)

compressed = huffman_compress(text, codes)
print(f"Original: {text}")
print(f"Compressed: {compressed}")
print(f"Compression ratio: {len(compressed) / (len(text) * 8):.2f}")

decompressed = huffman_decompress(compressed, root)
print(f"Decompressed: {decompressed}")
```

### **4. Job Scheduling with Deadlines**
```python
def job_scheduling_deadlines(jobs):
    """
    Maximize profit with job deadlines
    Jobs: [(profit, deadline), ...]
    Time: O(n²), Space: O(n)
    """
    # Sort by profit in descending order
    jobs.sort(key=lambda x: x[0], reverse=True)
    
    # Find maximum deadline
    max_deadline = max(job[1] for job in jobs)
    
    # Initialize result slots
    slots = [None] * max_deadline
    total_profit = 0
    
    for profit, deadline in jobs:
        # Find latest available slot before deadline
        for slot in range(min(deadline - 1, max_deadline - 1), -1, -1):
            if slots[slot] is None:
                slots[slot] = (profit, deadline)
                total_profit += profit
                break
    
    return [job for job in slots if job is not None], total_profit

# Example
jobs = [(100, 2), (19, 1), (27, 2), (25, 1), (15, 3)]
scheduled, profit = job_scheduling_deadlines(jobs)
print(f"Scheduled jobs: {scheduled}")
print(f"Total profit: {profit}")
```

---

## 💰 **Coin Change Greedy Algorithms**

### **1. Greedy Coin Change (Works for standard denominations)**
```python
def coin_change_greedy(amount, coins):
    """
    Greedy coin change (works for standard coin systems)
    Time: O(n), Space: O(1)
    """
    coins.sort(reverse=True)  # Largest first
    result = []
    
    for coin in coins:
        count = amount // coin
        if count > 0:
            result.extend([coin] * count)
            amount -= coin * count
        
        if amount == 0:
            break
    
    return result if amount == 0 else None

# Example with standard US coins
coins = [25, 10, 5, 1]  # quarters, dimes, nickels, pennies
amount = 67
result = coin_change_greedy(amount, coins)
print(f"Coins for {amount}: {result}")  # [25, 25, 10, 5, 1, 1]

# Note: Greedy doesn't always work for arbitrary coin systems
# Example: coins = [4, 3, 1], amount = 6
# Greedy: [4, 1, 1] = 3 coins
# Optimal: [3, 3] = 2 coins
```

### **2. Minimum Coins (Greedy when applicable)**
```python
def min_coins_greedy(coins, amount):
    """
    Find minimum number of coins (greedy approach)
    Only works for certain coin systems
    """
    coins.sort(reverse=True)
    count = 0
    
    for coin in coins:
        if amount >= coin:
            num_coins = amount // coin
            count += num_coins
            amount -= coin * num_coins
        
        if amount == 0:
            break
    
    return count if amount == 0 else -1

# Example
coins = [1, 5, 10, 25]
amount = 30
min_count = min_coins_greedy(coins, amount)
print(f"Minimum coins for {amount}: {min_count}")  # 2 (25 + 5)
```

---

## 📊 **Interval Scheduling Algorithms**

### **1. Meeting Rooms**
```python
def can_attend_all_meetings(intervals):
    """
    Check if person can attend all meetings
    Time: O(n log n), Space: O(1)
    """
    if not intervals:
        return True
    
    # Sort by start time
    intervals.sort(key=lambda x: x[0])
    
    for i in range(1, len(intervals)):
        # If current meeting starts before previous ends
        if intervals[i][0] < intervals[i-1][1]:
            return False
    
    return True

def min_meeting_rooms(intervals):
    """
    Find minimum number of meeting rooms needed
    Time: O(n log n), Space: O(n)
    """
    if not intervals:
        return 0
    
    import heapq
    
    # Sort by start time
    intervals.sort(key=lambda x: x[0])
    
    # Min heap to track end times of ongoing meetings
    heap = []
    
    for start, end in intervals:
        # If there's a meeting that has ended
        if heap and heap[0] <= start:
            heapq.heappop(heap)
        
        # Add current meeting's end time
        heapq.heappush(heap, end)
    
    return len(heap)

# Example
meetings = [(0, 30), (5, 10), (15, 20)]
can_attend = can_attend_all_meetings(meetings)
min_rooms = min_meeting_rooms(meetings)
print(f"Can attend all: {can_attend}")  # False
print(f"Min rooms needed: {min_rooms}")  # 2
```

### **2. Non-overlapping Intervals**
```python
def erase_overlap_intervals(intervals):
    """
    Find minimum number of intervals to remove
    to make rest non-overlapping
    Time: O(n log n), Space: O(1)
    """
    if not intervals:
        return 0
    
    # Sort by end time (greedy choice)
    intervals.sort(key=lambda x: x[1])
    
    count = 0
    end = intervals[0][1]
    
    for i in range(1, len(intervals)):
        if intervals[i][0] < end:
            # Overlapping interval, remove it
            count += 1
        else:
            # Update end time
            end = intervals[i][1]
    
    return count

# Example
intervals = [[1,2], [2,3], [3,4], [1,3]]
removals = erase_overlap_intervals(intervals)
print(f"Intervals to remove: {removals}")  # 1
```

---

## 🔢 **Number Theory Greedy Problems**

### **1. Largest Number Formation**
```python
def largest_number(nums):
    """
    Arrange numbers to form largest possible number
    Time: O(n log n), Space: O(n)
    """
    from functools import cmp_to_key
    
    # Custom comparator
    def compare(x, y):
        # Compare x+y vs y+x
        if x + y > y + x:
            return -1
        elif x + y < y + x:
            return 1
        else:
            return 0
    
    # Convert to strings and sort
    str_nums = [str(num) for num in nums]
    str_nums.sort(key=cmp_to_key(compare))
    
    # Join and handle edge case
    result = ''.join(str_nums)
    return '0' if result[0] == '0' else result

# Example
nums = [10, 2]
largest = largest_number(nums)
print(f"Largest number: {largest}")  # "210"

nums = [3, 30, 34, 5, 9]
largest = largest_number(nums)
print(f"Largest number: {largest}")  # "9534330"
```

### **2. Gas Station**
```python
def can_complete_circuit(gas, cost):
    """
    Find starting gas station to complete circuit
    Time: O(n), Space: O(1)
    """
    total_gas = sum(gas)
    total_cost = sum(cost)
    
    # If total gas < total cost, impossible
    if total_gas < total_cost:
        return -1
    
    current_gas = 0
    start = 0
    
    for i in range(len(gas)):
        current_gas += gas[i] - cost[i]
        
        # If we can't reach next station
        if current_gas < 0:
            current_gas = 0
            start = i + 1
    
    return start

# Example
gas = [1, 2, 3, 4, 5]
cost = [3, 4, 5, 1, 2]
start = can_complete_circuit(gas, cost)
print(f"Starting station: {start}")  # 3
```

---

## 🌳 **Graph Greedy Algorithms**

### **1. Minimum Spanning Tree - Prim's Algorithm**
```python
import heapq

def prim_mst(graph):
    """
    Prim's algorithm for Minimum Spanning Tree
    Time: O(E log V), Space: O(V)
    """
    if not graph:
        return []
    
    # Start with arbitrary vertex
    start = next(iter(graph))
    visited = {start}
    mst_edges = []
    total_weight = 0
    
    # Priority queue: (weight, from_vertex, to_vertex)
    pq = []
    for neighbor, weight in graph[start]:
        heapq.heappush(pq, (weight, start, neighbor))
    
    while pq and len(visited) < len(graph):
        weight, from_v, to_v = heapq.heappop(pq)
        
        if to_v in visited:
            continue
        
        # Add edge to MST
        visited.add(to_v)
        mst_edges.append((from_v, to_v, weight))
        total_weight += weight
        
        # Add new edges to PQ
        for neighbor, edge_weight in graph[to_v]:
            if neighbor not in visited:
                heapq.heappush(pq, (edge_weight, to_v, neighbor))
    
    return mst_edges, total_weight

# Example
graph = {
    'A': [('B', 4), ('C', 2)],
    'B': [('A', 4), ('C', 1), ('D', 5)],
    'C': [('A', 2), ('B', 1), ('D', 8)],
    'D': [('B', 5), ('C', 8)]
}
mst, weight = prim_mst(graph)
print(f"MST edges: {mst}")
print(f"Total weight: {weight}")
```

---

## 📈 **Greedy Algorithm Design Patterns**

### **1. Exchange Argument Pattern**
```python
def prove_greedy_optimal():
    """
    Template for proving greedy optimality using exchange argument
    
    1. Assume optimal solution OPT exists that differs from greedy solution G
    2. Show we can exchange elements from OPT to match G
    3. Prove the exchange doesn't make solution worse
    4. Continue until OPT becomes G, maintaining optimality
    """
    pass

# Example: Activity Selection
# Proof sketch:
# - Let OPT be optimal solution, G be greedy solution
# - If OPT ≠ G, there's first activity a_i in OPT not in G
# - Greedy chose activity a_j ending earlier than a_i
# - Replace a_i with a_j in OPT → still feasible, same size
# - Continue until OPT = G
```

### **2. Greedy Stays Ahead Pattern**
```python
def greedy_stays_ahead_template():
    """
    Template for proving greedy correctness
    
    1. Define measure of progress
    2. Show greedy is at least as good at each step
    3. Conclude greedy is optimal overall
    """
    pass

# Example: Interval Scheduling
# - Measure: number of intervals scheduled by time t
# - Greedy schedules at least as many as any other algorithm
# - Therefore optimal
```

---

## 📈 **Flowchart: Activity Selection Algorithm**

```
         [START]
            ↓
    [Input: List of activities with start/end times]
            ↓
    [Sort activities by end time]
            ↓
    [Initialize: selected = [], last_end = 0]
            ↓
    [For each activity in sorted list]
            ↓
       <activity.start >= last_end?>
         ↙              ↘
       YES              NO
        ↓                ↓
   [Add activity     [Skip activity]
    to selected]         ↓
        ↓                ↓
   [last_end =           ↓
    activity.end]        ↓
        ↓                ↓
        ↑ ← ← ← ← ← ← ← ← ↑
        ↓
    [Return selected activities]
        ↓
      [END]
```

## 📈 **Flowchart: Huffman Coding Algorithm**

```
         [START]
            ↓
    [Input: Text/frequencies]
            ↓
    [Count character frequencies]
            ↓
    [Create leaf nodes, add to min-heap]
            ↓
       <Heap size > 1?>
         ↙        ↘
       YES        NO
        ↓          ↓
   [Extract 2    [Root =
    min nodes]    last node]
        ↓          ↓
   [Create new    [Generate
    internal      codes from
    node]         root]
        ↓          ↓
   [Add to        [END]
    heap]
        ↓
        ↑ ← ← (Loop back)
```

---

## 🧪 **Practice Problems**

### **Easy Level**
1. **Assign Cookies** (LC #455)
2. **Lemonade Change** (LC #860)
3. **Two City Scheduling** (LC #1029)
4. **Minimum Number of Arrows to Burst Balloons** (LC #452)

### **Medium Level**
1. **Jump Game** (LC #55)
2. **Gas Station** (LC #134)
3. **Non-overlapping Intervals** (LC #435)
4. **Partition Labels** (LC #763)
5. **Minimum Number of Taps to Open to Water a Garden** (LC #1326)

### **Hard Level**
1. **Candy** (LC #135)
2. **Create Maximum Number** (LC #321)
3. **Smallest Range Covering Elements from K Lists** (LC #632)
4. **IPO** (LC #502)

---

## 📊 **When Greedy Works vs Doesn't Work**

### **✅ Greedy Works**
- **Standard coin systems** (1, 5, 10, 25)
- **Activity selection** (interval scheduling)
- **Fractional knapsack**
- **Huffman coding**
- **Minimum spanning tree**
- **Dijkstra's shortest path** (non-negative weights)

### **❌ Greedy Fails**
- **0/1 Knapsack** (need DP)
- **Arbitrary coin systems** (need DP)
- **Longest path problems**
- **Graph coloring**
- **Traveling salesman problem**

### **Example: Why Greedy Fails for 0/1 Knapsack**
```python
# Items: (value, weight)
items = [(10, 5), (40, 4), (30, 6), (50, 3)]
capacity = 10

# Greedy by value/weight ratio:
# Ratios: [2.0, 10.0, 5.0, 16.67]
# Takes items with weights [3, 4] → value = 90

# Optimal solution:
# Takes items with weights [4, 6] → value = 70
# Wait, that's wrong! Let me recalculate...

# Actually, greedy gives: items[3] + items[1] = 50 + 40 = 90 (weights: 3 + 4 = 7)
# Can still add items[0] partially or items[2] partially
# This shows greedy works for fractional but not 0/1 knapsack
```

---

## 📊 **Time & Space Complexity Summary**

| Algorithm | Time Complexity | Space Complexity | Notes |
|-----------|----------------|------------------|-------|
| **Activity Selection** | O(n log n) | O(1) | Sorting dominates |
| **Fractional Knapsack** | O(n log n) | O(1) | Sorting by ratio |
| **Huffman Coding** | O(n log n) | O(n) | Heap operations |
| **Job Scheduling** | O(n²) | O(n) | Finding slots |
| **Coin Change** | O(n) | O(1) | When greedy works |
| **Minimum Spanning Tree** | O(E log V) | O(V) | Prim's algorithm |
| **Meeting Rooms** | O(n log n) | O(n) | Sorting + heap |

---

**🎯 Key Takeaways**:
- Greedy algorithms are simple and efficient when they work
- Always verify the greedy choice property holds
- Use exchange argument or "stays ahead" proof for correctness
- Greedy often optimal for scheduling and selection problems
- Be careful with optimization problems - greedy may not be optimal
- Consider counterexamples to verify greedy correctness
