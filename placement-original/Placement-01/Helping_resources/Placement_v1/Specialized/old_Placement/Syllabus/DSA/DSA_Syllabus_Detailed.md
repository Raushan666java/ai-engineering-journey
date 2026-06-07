# 🚀 Data Structures & Algorithms - Complete Syllabus
*Duration: 16 weeks | Target: 400+ problems*

## Week 1-2: Fundamentals & Complexity Analysis 🟢

### Time & Space Complexity
**Theory (3 days)**
- Big-O, Big-Ω, Big-Θ notation with mathematical proofs
- Master theorem for divide-and-conquer recurrences
- Amortized analysis techniques
- Space-time tradeoff examples

**Practice Problems (4 days)**
```
Easy: Calculate complexity of nested loops
Medium: Analyze recursive algorithms
Hard: Optimize space complexity
```

### Arrays & Basic Math
**Core Concepts (4 days)**
- Memory layout: contiguous allocation, cache locality
- 1D operations: insert O(n), delete O(n), search O(n)/O(log n)
- 2D arrays: row-major vs column-major storage
- Prefix sums, difference arrays, sparse arrays

**String Fundamentals (3 days)**
- ASCII vs Unicode encoding
- String immutability, StringBuilder optimization
- Pattern matching: KMP, Rabin-Karp algorithms
- Trie data structure for string storage

**Essential Problems (20 problems)**
```
Arrays:
- Two Sum, Three Sum, Four Sum
- Maximum Subarray (Kadane's Algorithm)
- Rotate Array, Remove Duplicates
- Merge Sorted Arrays, Find Missing Number

Strings:
- Valid Anagram, Group Anagrams
- Longest Substring Without Repeating Characters
- Valid Parentheses, Longest Palindromic Substring
- Implement strStr(), String to Integer (atoi)
```

## Week 3-4: Linear Data Structures 🟡

### Linked Lists
**Implementation Details (5 days)**
```java
// Singly Linked List Node
class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

// Doubly Linked List Node
class DListNode {
    int val;
    DListNode prev, next;
    DListNode(int val) { this.val = val; }
}
```

**Advanced Operations**
- Fast/slow pointer technique (Floyd's algorithm)
- Dummy node usage for edge cases
- In-place reversal techniques
- Merge operations with sorted lists

**Core Problems (25 problems)**
```
Basic Operations:
- Reverse Linked List (iterative & recursive)
- Merge Two Sorted Lists
- Remove Nth Node From End
- Linked List Cycle I & II

Advanced:
- Copy List with Random Pointer
- Flatten Multilevel Doubly Linked List
- LRU Cache Implementation
- Add Two Numbers (linked list representation)
```

### Stacks & Queues
**Stack Applications (4 days)**
- Function call management
- Expression evaluation (infix, postfix, prefix)
- Backtracking state management
- Monotonic stack for next/previous greater elements

**Queue Variations (3 days)**
- Circular queue implementation
- Priority queue using heaps
- Deque (double-ended queue)
- Queue using stacks and vice versa

**Essential Problems (20 problems)**
```
Stack:
- Valid Parentheses, Generate Parentheses
- Daily Temperatures, Next Greater Element
- Largest Rectangle in Histogram
- Min Stack, Evaluate Reverse Polish Notation

Queue:
- Implement Queue using Stacks
- Sliding Window Maximum
- Design Circular Queue
- First Unique Character in String
```

## Week 5-7: Trees & Hierarchical Structures 🟠

### Binary Trees
**Traversal Mastery (4 days)**
```python
# Recursive Traversals
def inorder(root):
    if not root: return []
    return inorder(root.left) + [root.val] + inorder(root.right)

# Iterative with Stack
def inorder_iterative(root):
    result, stack = [], []
    current = root
    while stack or current:
        while current:
            stack.append(current)
            current = current.left
        current = stack.pop()
        result.append(current.val)
        current = current.right
    return result
```

**Tree Properties & Construction (5 days)**
- Height, depth, diameter calculations
- Balanced tree detection and balancing
- Tree construction from traversals
- Serialization and deserialization

**Binary Search Trees (5 days)**
- BST property validation
- Insert, delete, search operations
- Inorder successor/predecessor
- Convert BST to sorted array/linked list

**Advanced Trees (7 days)**
- AVL trees: rotations, balancing factor
- Red-Black trees: properties, operations
- Segment trees: range queries, lazy propagation
- Fenwick trees (Binary Indexed Trees)

**Tree Problems (40 problems)**
```
Basic:
- Maximum Depth, Minimum Depth
- Same Tree, Symmetric Tree
- Path Sum, Path Sum II
- Binary Tree Level Order Traversal

BST:
- Validate Binary Search Tree
- Kth Smallest Element in BST
- Lowest Common Ancestor in BST
- Convert Sorted Array to BST

Advanced:
- Serialize/Deserialize Binary Tree
- Binary Tree Maximum Path Sum
- Construct Tree from Preorder/Inorder
- Flatten Binary Tree to Linked List
```

### Heaps & Priority Queues
**Heap Implementation (3 days)**
```java
class MinHeap {
    private int[] heap;
    private int size;
    
    public void insert(int val) {
        heap[size] = val;
        heapifyUp(size++);
    }
    
    public int extractMin() {
        int min = heap[0];
        heap[0] = heap[--size];
        heapifyDown(0);
        return min;
    }
}
```

**Applications (4 days)**
- Top K problems
- Median finding in stream
- Merge K sorted arrays/lists
- Task scheduling with priorities

**Heap Problems (15 problems)**
```
- Kth Largest Element in Array
- Top K Frequent Elements
- Merge k Sorted Lists
- Find Median from Data Stream
- Meeting Rooms II
- Ugly Number II
```

## Week 8-9: Graphs & Advanced Structures 🔴

### Graph Representation & Traversals
**Implementation (3 days)**
```python
# Adjacency List
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    # ...
}

# Adjacency Matrix
matrix = [[0, 1, 1, 0],
          [1, 0, 0, 1],
          [1, 0, 0, 1],
          [0, 1, 1, 0]]
```

**BFS & DFS Applications (4 days)**
- Connected components
- Bipartite graph detection
- Cycle detection in directed/undirected graphs
- Topological sorting

**Shortest Path Algorithms (5 days)**
- Dijkstra's algorithm with priority queue
- Bellman-Ford for negative weights
- Floyd-Warshall for all pairs
- A* algorithm for heuristic search

**Advanced Graph Algorithms (2 days)**
- Minimum Spanning Tree: Kruskal's, Prim's
- Strongly Connected Components: Kosaraju's
- Network flow: Ford-Fulkerson

**Graph Problems (30 problems)**
```
Traversal:
- Number of Islands
- Clone Graph
- Course Schedule I & II
- Word Ladder

Shortest Path:
- Network Delay Time
- Cheapest Flights Within K Stops
- Shortest Path in Binary Matrix

Advanced:
- Critical Connections in Network
- Accounts Merge
- Alien Dictionary
```

### Hashing & Hash Tables
**Hash Function Design (2 days)**
- Division, multiplication, universal hashing
- Collision resolution: chaining vs open addressing
- Load factor and rehashing strategies

**Advanced Hashing (3 days)**
- Rolling hash for string matching
- Consistent hashing for distributed systems
- Bloom filters for membership testing

**Hashing Problems (20 problems)**
```
- Two Sum, Four Sum II
- Group Anagrams
- Longest Consecutive Sequence
- Subarray Sum Equals K
- LRU Cache, LFU Cache
- Design HashMap, HashSet
```

## Week 10-12: Dynamic Programming & Advanced Techniques 🔴

### Dynamic Programming Patterns
**1D DP (4 days)**
```python
# Fibonacci with memoization
def fib_memo(n, memo={}):
    if n in memo: return memo[n]
    if n <= 1: return n
    memo[n] = fib_memo(n-1, memo) + fib_memo(n-2, memo)
    return memo[n]

# Fibonacci with tabulation
def fib_tab(n):
    if n <= 1: return n
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]
```

**2D DP (5 days)**
- Grid path problems
- Longest Common Subsequence/Substring
- Edit distance algorithms
- Knapsack variations

**Advanced DP (5 days)**
- State machine DP
- Digit DP
- Tree DP
- Bitmask DP

**DP Problems (35 problems)**
```
1D DP:
- Climbing Stairs, House Robber
- Coin Change, Coin Change II
- Longest Increasing Subsequence
- Maximum Product Subarray

2D DP:
- Unique Paths, Minimum Path Sum
- Longest Common Subsequence
- Edit Distance, Distinct Subsequences
- Regular Expression Matching

Advanced:
- Best Time to Buy/Sell Stock (all variations)
- Palindrome Partitioning II
- Burst Balloons, Stone Game
```

### Sliding Window & Two Pointers
**Techniques (3 days)**
- Fixed size window
- Variable size window
- Two pointers: same/opposite direction

**Problems (15 problems)**
```
- Longest Substring Without Repeating Characters
- Minimum Window Substring
- Container With Most Water
- 3Sum, 3Sum Closest
- Trapping Rain Water
```

### Backtracking
**Framework (2 days)**
```python
def backtrack(path, choices):
    if is_valid_solution(path):
        result.append(path[:])
        return
    
    for choice in choices:
        if is_valid_choice(choice):
            path.append(choice)
            backtrack(path, updated_choices)
            path.pop()  # backtrack
```

**Problems (20 problems)**
```
- Generate Parentheses
- Letter Combinations of Phone Number
- Permutations, Permutations II
- Combinations, Combination Sum
- N-Queens, Sudoku Solver
- Word Search, Word Search II
```

## Week 13-16: Advanced Algorithms & Interview Prep 🔴

### Greedy Algorithms
**Theory & Applications (3 days)**
- Greedy choice property
- Optimal substructure
- Activity selection, fractional knapsack
- Huffman coding algorithm

**Problems (15 problems)**
```
- Jump Game, Jump Game II
- Gas Station, Candy
- Meeting Rooms, Interval Scheduling
- Minimum Number of Arrows
```

### Bit Manipulation
**Bitwise Operations (2 days)**
```python
# Common bit operations
def set_bit(n, i): return n | (1 << i)
def clear_bit(n, i): return n & ~(1 << i)
def toggle_bit(n, i): return n ^ (1 << i)
def check_bit(n, i): return (n & (1 << i)) != 0
```

**Problems (12 problems)**
```
- Single Number I, II, III
- Power of Two, Power of Four
- Counting Bits, Hamming Distance
- Maximum XOR of Two Numbers
```

### Advanced Data Structures
**Union-Find (2 days)**
```python
class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank = [0] * n
    
    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]
    
    def union(self, x, y):
        px, py = self.find(x), self.find(y)
        if px == py: return
        if self.rank[px] < self.rank[py]:
            self.parent[px] = py
        elif self.rank[px] > self.rank[py]:
            self.parent[py] = px
        else:
            self.parent[py] = px
            self.rank[px] += 1
```

**Trie (2 days)**
```python
class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False

class Trie:
    def __init__(self):
        self.root = TrieNode()
    
    def insert(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end = True
```

### Interview Preparation (Week 15-16)
**Mock Interview Schedule**
- Day 1-2: Array & String problems
- Day 3-4: Linked List & Stack/Queue
- Day 5-6: Tree & Graph problems
- Day 7-8: DP & Advanced techniques
- Day 9-10: System design integration
- Day 11-14: Company-specific practice

**Problem Categories by Company**
```
Google: Graph algorithms, DP, system design
Amazon: Trees, arrays, leadership principles
Microsoft: DP, graphs, behavioral questions
Facebook: Arrays, strings, product sense
Apple: System design, algorithms, culture fit
```

## Resources & Tools

### Books
- "Introduction to Algorithms" by CLRS
- "Algorithm Design Manual" by Skiena
- "Cracking the Coding Interview" by McDowell

### Online Platforms
- **LeetCode**: Primary practice (Premium recommended)
- **GeeksforGeeks**: Concept explanations
- **HackerRank**: Contest practice
- **Codeforces**: Competitive programming

### YouTube Channels
- Abdul Bari (Algorithms)
- Tushar Roy (DP & Graphs)
- Back To Back SWE (Interview prep)

### Practice Schedule
```
Week 1-4: 2 problems/day (easy-medium)
Week 5-8: 3 problems/day (medium focus)
Week 9-12: 3-4 problems/day (medium-hard)
Week 13-16: 4-5 problems/day (interview simulation)
```

## Success Metrics
- **Total Problems**: 400+ solved
- **Easy**: 150 problems (80%+ accuracy)
- **Medium**: 200 problems (70%+ accuracy)  
- **Hard**: 50 problems (50%+ accuracy)
- **Mock Interviews**: 25+ sessions
- **Contest Rating**: 1400+ on LeetCode