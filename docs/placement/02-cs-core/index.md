<div class="module-hero">
  <div class="module-hero-icon">🖥️</div>
  <div class="module-hero-body">
    <h1>CS Core — Computer Science Ki Jaan</h1>
    <p>Placement interviews ka backbone. DSA, OS, DBMS, CN, CO, TOC — har company poochti hai. Is module mein 7 subjects ka comprehensive coverage hai.</p>
    <div class="module-hero-meta">
      <span>7 Subjects</span>
      <span>500+ Problems</span>
      <span>Interview Ready</span>
    </div>
  </div>
</div>

<div class="tip-banner">
  <span class="tip-badge">💡 TIP</span>
  Ye module placements ki jaan hai. Har subject ek pillar hai — ek bhi weak mat chhodo. Rozana 2-3 ghante CS Core ko do aur interview-ready ban jao. DSA + OS + DBMS + CN — ye 4 subjects toh har company mandatory poochti hai. Inhe pehle pakka karo!
</div>

<div class="roadmap-path">
  <div class="roadmap-step" data-step="1">
    <h4>DSA — Data Structures &amp; Algorithms</h4>
     <p>Arrays se DP tak, 500+ problems. Sabse important subject.</p>
  </div>
  <div class="roadmap-step" data-step="2">
    <h4>OS — Operating Systems</h4>
     <p>Process, Memory, Deadlocks, Virtualization, Security.</p>
  </div>
  <div class="roadmap-step" data-step="3">
    <h4>DBMS — Database Management Systems</h4>
     <p>SQL, Normalization, Transactions, NoSQL, CAP Theorem.</p>
  </div>
  <div class="roadmap-step" data-step="4">
    <h4>CN — Computer Networks</h4>
     <p>OSI, TCP/IP, Subnetting, Routing, Network Security.</p>
  </div>
  <div class="roadmap-step" data-step="5">
    <h4>COA — Computer Organization &amp; Architecture</h4>
    <p>Pipeline, Cache, Addressing Modes, Data Representation.</p>
  </div>
  <div class="roadmap-step" data-step="6">
    <h4>TOC — Theory of Computation</h4>
    <p>Automata, Grammars, Turing Machines, Chomsky Hierarchy basics.</p>
  </div>
  <div class="roadmap-step" data-step="7">
    <h4>SE — Software Engineering</h4>
     <p>SDLC, Testing, Design Patterns, CI/CD.</p>
  </div>
  <div class="roadmap-step" data-step="8">
    <h4>DS — Distributed Systems</h4>
    <p>CAP, Consensus, Scaling, Big Tech fundamental.</p>
  </div>
</div>

---

## DSA — Data Structures & Algorithms

### Detailed Topic Breakdown

<table class="table-dash">
<thead>
<tr><th>Chapter</th><th>Topic</th><th>Key Patterns</th><th>Problems</th></tr>
</thead>
<tbody>
<tr><td>1-2</td><td>Arrays &amp; Strings</td><td>Two Pointers, Sliding Window, Prefix/Suffix Arrays</td><td>50 (20E, 20M, 10H)</td></tr>
<tr><td>3</td><td>Linked Lists</td><td>Fast &amp; Slow Pointers, Reverse, Cycle Detection</td><td>25</td></tr>
<tr><td>4</td><td>Stacks &amp; Queues</td><td>Monotonic Stack, Expression Evaluation, BFS</td><td>25</td></tr>
<tr><td>5-6</td><td>Trees</td><td>Recursive Traversals, Level-order, BST Ops, Path Sum</td><td>40</td></tr>
<tr><td>7-8</td><td>Graphs</td><td>DFS/BFS, Dijkstra, Topological Sort, Union-Find, MST</td><td>40</td></tr>
<tr><td>9-10</td><td>Dynamic Programming</td><td>Memoization vs Tabulation, 1D/2D DP, LCS, KnapSack</td><td>40</td></tr>
<tr><td>11-12</td><td>Advanced</td><td>Tries, Segment Trees, BIT, Advanced Sorting</td><td>30</td></tr>
</tbody>
</table>

### Practice Target

- **Easy**: 150 problems
- **Medium**: 200 problems
- **Hard**: 100 problems
- **Total**: 500+ problems

### Core Patterns to Master

- **Two Pointers**: left-right, fast-slow — sorted arrays me gold mine
- **Sliding Window**: fixed size aur variable size — substring problems ka baap
- **Kadane's Algorithm**: Maximum Subarray sum — O(n) me khatam
- **Floyd's Algorithm**: cycle detection in linked lists
- **Recursive Tree Patterns**: inorder/preorder/postorder, BST se path sum tak
- **Union-Find**: graph me connected components aur cycle detection

### Reference PDFs

- **Handwritten DSA Notes**: Available in PDF References
- **DSA Summary**: Complete DSA Practice Summary (500+ problems mapped)

### Key Interview Questions

1. Find second largest element in array without sorting — O(n) approach
2. Detect cycle in linked list (Floyd's Algorithm) — implement slow/fast pointer
3. Longest substring without repeating characters — sliding window + hashmap
4. Two Sum problem — hashmap O(n) solution (classic!)
5. Merge two sorted linked lists — recursive ya iterative
6. Check if binary tree is BST — inorder traversal ya min/max range
7. Reverse a linked list in groups of K
8. Maximum subarray sum (Kadane's Algorithm)

### Code Examples for Each Data Structure

#### Array: Kadane's Algorithm & Rotate by K

```python
def max_subarray_sum(arr):
    max_ending_here = max_so_far = arr[0]
    for x in arr[1:]:
        max_ending_here = max(x, max_ending_here + x)
        max_so_far = max(max_so_far, max_ending_here)
    return max_so_far

def rotate(arr, k):
    k %= len(arr); arr.reverse()
    arr[:k] = reversed(arr[:k]); arr[k:] = reversed(arr[k:])
    return arr
```

#### Linked List: Reverse & Cycle Detection

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val; self.next = next

def reverse_list(head):
    prev, curr = None, head
    while curr:
        nxt = curr.next; curr.next = prev
        prev, curr = curr, nxt
    return prev

def has_cycle(head):
    slow = fast = head
    while fast and fast.next:
        slow, fast = slow.next, fast.next.next
        if slow == fast: return True
    return False
```

#### Stack: Next Greater Element

```python
def next_greater_element(nums):
    result, stack = [-1] * len(nums), []
    for i, val in enumerate(nums):
        while stack and nums[stack[-1]] < val:
            result[stack.pop()] = val
        stack.append(i)
    return result
```

#### Tree: BST Validation & LCA

```python
def is_valid_bst(root, lo=float('-inf'), hi=float('inf')):
    if not root: return True
    if root.val <= lo or root.val >= hi: return False
    return (is_valid_bst(root.left, lo, root.val) and
            is_valid_bst(root.right, root.val, hi))

def lca_bst(root, p, q):
    while root:
        if p.val < root.val and q.val < root.val: root = root.left
        elif p.val > root.val and q.val > root.val: root = root.right
        else: return root
```

#### Graph: DFS, BFS, Dijkstra

```python
def dfs(graph, start):
    visited, stack = set(), [start]
    while stack:
        node = stack.pop()
        if node not in visited:
            visited.add(node)
            stack.extend(n for n in graph[node] if n not in visited)
    return visited

def bfs(graph, start):
    from collections import deque
    visited, queue = {start}, deque([start])
    while queue:
        for n in graph[queue.popleft()]:
            if n not in visited: visited.add(n); queue.append(n)
    return visited

import heapq
def dijkstra(graph, start):
    dist = {node: float('inf') for node in graph}
    dist[start] = 0; pq = [(0, start)]
    while pq:
        d, node = heapq.heappop(pq)
        if d > dist[node]: continue
        for nbr, w in graph[node].items():
            nd = d + w
            if nd < dist[nbr]: dist[nbr] = nd; heapq.heappush(pq, (nd, nbr))
    return dist
```

#### DP: Fibonacci, LCS, 0/1 Knapsack

```python
# Top-down
def fib_memo(n, memo={}):
    if n in memo: return memo[n]
    if n <= 1: return n
    memo[n] = fib_memo(n-1, memo) + fib_memo(n-2, memo)
    return memo[n]

# Bottom-up
def fib_tab(n):
    if n <= 1: return n
    dp = [0]*(n+1); dp[1]=1
    for i in range(2, n+1): dp[i]=dp[i-1]+dp[i-2]
    return dp[n]

# LCS
def lcs(t1, t2):
    m, n = len(t1), len(t2)
    dp = [[0]*(n+1) for _ in range(m+1)]
    for i in range(1, m+1):
        for j in range(1, n+1):
            if t1[i-1]==t2[j-1]: dp[i][j]=1+dp[i-1][j-1]
            else: dp[i][j]=max(dp[i-1][j], dp[i][j-1])
    return dp[m][n]

# 0/1 Knapsack
def knapsack(weights, values, capacity):
    n = len(weights)
    dp = [[0]*(capacity+1) for _ in range(n+1)]
    for i in range(1, n+1):
        for w in range(1, capacity+1):
            if weights[i-1] <= w:
                dp[i][w] = max(values[i-1]+dp[i-1][w-weights[i-1]], dp[i-1][w])
            else: dp[i][w] = dp[i-1][w]
    return dp[n][capacity]
```

#### Trie, Heap, Union-Find, Sliding Window, Two Pointers

```python
class Trie:
    def __init__(self):
        self.children = {}; self.is_end = False
    def insert(self, word):
        node = self
        for ch in word:
            if ch not in node.children: node.children[ch] = Trie()
            node = node.children[ch]
        node.is_end = True
    def search(self, word):
        node = self
        for ch in word:
            if ch not in node.children: return False
            node = node.children[ch]
        return node.is_end

import heapq
def merge_k_sorted(lists):
    heap, result = [], []
    for i, lst in enumerate(lists):
        if lst: heapq.heappush(heap, (lst[0], i, 0))
    while heap:
        val, li, ei = heapq.heappop(heap); result.append(val)
        if ei+1 < len(lists[li]): heapq.heappush(heap, (lists[li][ei+1], li, ei+1))
    return result

class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n)); self.rank = [0]*n
    def find(self, x):
        if self.parent[x] != x: self.parent[x] = self.find(self.parent[x])
        return self.parent[x]
    def union(self, x, y):
        px, py = self.find(x), self.find(y)
        if px == py: return False
        if self.rank[px] < self.rank[py]: self.parent[px] = py
        elif self.rank[px] > self.rank[py]: self.parent[py] = px
        else: self.parent[py] = px; self.rank[px] += 1
        return True

def length_of_longest_substring(s):
    seen, left, max_len = {}, 0, 0
    for right, ch in enumerate(s):
        if ch in seen and seen[ch] >= left: left = seen[ch] + 1
        seen[ch] = right; max_len = max(max_len, right - left + 1)
    return max_len

def three_sum(nums):
    nums.sort(); result = []
    for i in range(len(nums)-2):
        if i > 0 and nums[i] == nums[i-1]: continue
        l, r = i+1, len(nums)-1
        while l < r:
            t = nums[i]+nums[l]+nums[r]
            if t < 0: l += 1
            elif t > 0: r -= 1
            else:
                result.append([nums[i], nums[l], nums[r]])
                while l < r and nums[l]==nums[l+1]: l+=1
                while l < r and nums[r]==nums[r-1]: r-=1
                l+=1; r-=1
    return result
```

### Time Complexity Cheat Sheet

| Data Struct | Access | Search | Insert | Delete |
|---|---|---|---|---|
| Array | O(1) | O(n) | O(n) | O(n) |
| Stack/Queue | O(n) | O(n) | O(1) | O(1) |
| Linked List | O(n) | O(n) | O(1) | O(1) |
| Hash Table | — | O(1)* | O(1)* | O(1)* |
| BST (avg) | O(log n) | O(log n) | O(log n) | O(log n) |
| BST (worst) | O(n) | O(n) | O(n) | O(n) |
| AVL/RB Tree | O(log n) | O(log n) | O(log n) | O(log n) |
| Heap | O(1) | O(n) | O(log n) | O(log n) |
| Trie | O(k) | O(k) | O(k) | O(k) |

*Avg case. *k* = key length.

| Sort | Best | Avg | Worst | Space | Stable |
|---|---|---|---|---|---|
| Quick | O(n log n) | O(n log n) | O(n²) | O(log n) | No |
| Merge | O(n log n) | O(n log n) | O(n log n) | O(n) | Yes |
| Heap | O(n log n) | O(n log n) | O(n log n) | O(1) | No |
| Insertion | O(n) | O(n²) | O(n²) | O(1) | Yes |
| Counting | O(n+k) | O(n+k) | O(n+k) | O(k) | Yes |

### 50 More Interview Questions

**Arrays & Strings (10):** 1. Missing number (XOR/sum formula). 2. Find duplicates (hashmap/Floyd's). 3. Product except self (left*right arrays). 4. Container with most water (two pointers). 5. Trapping rain water (left/right max). 6. Longest palindrome (expand around center). 7. String compression (count runs). 8. Valid anagram (freq array). 9. Group anagrams (sorted key). 10. First non-repeating (scan twice).

**Linked Lists (6):** 11. Find middle (slow/fast). 12. Remove nth from end (gap pointers). 13. Intersection (length diff). 14. Palindrome (reverse half). 15. Flatten multilevel (DFS). 16. Add two numbers (track carry).

**Stacks & Queues (4):** 17. Valid parentheses (stack). 18. Min stack (aux stack). 19. Eval RPN (stack, pop two). 20. Queue using stacks (two stacks).

**Trees (6):** 21. Max depth (recursive). 22. Symmetric tree (mirror check). 23. Path sum (target-root.val). 24. Zigzag level order (BFS + reverse flag). 25. Serialize/deserialize (BFS). 26. Kth smallest BST (inorder count).

**Graphs (6):** 27. Number of islands (DFS grid). 28. Clone graph (hashmap). 29. Course schedule (topo sort). 30. Word ladder (BFS). 31. Connected components (DFS/UF). 32. Alien dictionary (topo from char pairs).

**DP (8):** 33. Climbing stairs (fib). 34. Coin change (dp[i]=min(dp[i], dp[i-coin]+1)). 35. LIS (dp[i]=1+max(dp[j])). 36. Edit distance (2D DP). 37. Max product subarray (track min/max). 38. Word break (dp[i]=True if segment in dict). 39. House robber (dp[i]=max(dp[i-1], n[i]+dp[i-2])). 40. Unique paths (dp[i][j]=dp[i-1][j]+dp[i][j-1]).

**Misc (10):** 41. LRU cache (dll+hashmap). 42. Median from stream (two heaps). 43. Top K frequent (hashmap+min heap). 44. Sort colors (3 pointers). 45. Subarray sum = K (prefix+hashmap). 46. Sliding window max (deque). 47. Search rotated array (modified binary). 48. Pow(x,n) (binary expo). 49. Gas station (total>=cost, running sum). 50. Largest rectangle histogram (monotonic stack).

### Additional Code Examples

#### Merge Two Sorted Lists
```python
def merge_two_lists(l1, l2):
    dummy = ListNode(0); curr = dummy
    while l1 and l2:
        if l1.val < l2.val:
            curr.next = l1; l1 = l1.next
        else:
            curr.next = l2; l2 = l2.next
        curr = curr.next
    curr.next = l1 or l2
    return dummy.next
```

#### Valid Parentheses
```python
def is_valid(s):
    stack = []; pairs = {')': '(', ']': '[', '}': '{'}
    for ch in s:
        if ch in '([{':
            stack.append(ch)
        else:
            if not stack or stack.pop() != pairs[ch]:
                return False
    return not stack
```

#### Max Depth & Level Order Traversal
```python
def max_depth(root):
    if not root: return 0
    return 1 + max(max_depth(root.left), max_depth(root.right))

from collections import deque
def level_order(root):
    if not root: return []
    res, q = [], deque([root])
    while q:
        level = []
        for _ in range(len(q)):
            node = q.popleft()
            level.append(node.val)
            if node.left: q.append(node.left)
            if node.right: q.append(node.right)
        res.append(level)
    return res
```

#### Topological Sort (Kahn's Algorithm)
```python
from collections import deque
def topological_sort(num_courses, prerequisites):
    graph = [[] for _ in range(num_courses)]
    indegree = [0] * num_courses
    for course, prereq in prerequisites:
        graph[prereq].append(course)
        indegree[course] += 1
    q = deque([i for i in range(num_courses) if indegree[i] == 0])
    result = []
    while q:
        node = q.popleft()
        result.append(node)
        for neighbor in graph[node]:
            indegree[neighbor] -= 1
            if indegree[neighbor] == 0:
                q.append(neighbor)
    return result if len(result) == num_courses else []
```

#### Container With Most Water
```python
def max_area(height):
    left, right = 0, len(height) - 1
    max_water = 0
    while left < right:
        area = min(height[left], height[right]) * (right - left)
        max_water = max(max_water, area)
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
    return max_water
```

#### Binary Search in Rotated & First/Last Position
```python
def search_rotated(nums, target):
    l, r = 0, len(nums) - 1
    while l <= r:
        mid = (l + r) // 2
        if nums[mid] == target: return mid
        if nums[l] <= nums[mid]:
            if nums[l] <= target < nums[mid]: r = mid - 1
            else: l = mid + 1
        else:
            if nums[mid] < target <= nums[r]: l = mid + 1
            else: r = mid - 1
    return -1

def search_range(nums, target):
    def first():
        l, r = 0, len(nums) - 1
        while l <= r:
            m = (l + r) // 2
            if nums[m] < target: l = m + 1
            else: r = m - 1
        return l if l < len(nums) and nums[l] == target else -1
    def last():
        l, r = 0, len(nums) - 1
        while l <= r:
            m = (l + r) // 2
            if nums[m] <= target: l = m + 1
            else: r = m - 1
        return r if r >= 0 and nums[r] == target else -1
    return [first(), last()]
```

#### Trie with startsWith
```python
class Trie:
    def __init__(self):
        self.children = {}; self.is_end = False
    def insert(self, word):
        node = self
        for ch in word:
            if ch not in node.children: node.children[ch] = Trie()
            node = node.children[ch]
        node.is_end = True
    def search(self, word):
        node = self
        for ch in word:
            if ch not in node.children: return False
            node = node.children[ch]
        return node.is_end
    def starts_with(self, prefix):
        node = self
        for ch in prefix:
            if ch not in node.children: return False
            node = node.children[ch]
        return True
```

---

## OS — Operating Systems

### Detailed Topic Breakdown

<table class="table-dash">
<thead>
<tr><th>Phase</th><th>Modules</th><th>Key Concepts</th></tr>
</thead>
<tbody>
<tr><td>Phase 1: OS Foundations</td><td>OS Intro, System Architecture, Process Mgmt, Threading</td><td>System Calls, Process States, Context Switching, IPC</td></tr>
<tr><td>Phase 2: Core Concepts</td><td>CPU Scheduling, Process Sync, Deadlocks, Memory Mgmt</td><td>Scheduling Algorithms, Semaphores, Deadlock Prevention, Fragmentation</td></tr>
<tr><td>Phase 3: Advanced Memory &amp; Storage</td><td>Virtual Memory, File Systems, Storage Mgmt, I/O Systems</td><td>Demand Paging, Page Replacement, Disk Scheduling, RAID</td></tr>
<tr><td>Phase 4: Modern OS Concepts</td><td>Security, Distributed Systems, Virtualization, Modern Topics</td><td>Access Control, Distributed FS, Hypervisors, RTOS</td></tr>
</tbody>
</table>

### CPU Scheduling Algorithms

- **FCFS (First Come First Serve)** — non-preemptive, convoy effect
- **SJF (Shortest Job First)** — optimal avg waiting time, but starvation possible
- **Round Robin** — time quantum based, preemptive, fair
- **Priority Scheduling** — preemptive/non-preemptive, priority inversion issue

### Memory Management Deep-Dive

- **Paging**: logical address → page table → physical frame; no external fragmentation
- **Segmentation**: logical address → segment table → physical address; external fragmentation possible
- **Virtual Memory**: demand paging, page fault handling, thrashing
- **Page Replacement**: FIFO, Optimal, LRU, Clock algorithm
- **TLB**: translation lookaside buffer — speed booster for address translation

### Process Synchronization

- **Race Condition**: multiple processes access shared data concurrently
- **Critical Section Problem**: mutual exclusion, progress, bounded waiting
- **Semaphores**: counting vs binary — wait() and signal() operations
- **Mutex Locks**: simpler than semaphore, only one process at a time
- **Deadlock**: 4 necessary conditions (Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait)
- **Deadlock Handling**: Prevention, Avoidance (Banker's Algorithm), Detection & Recovery

### Key Interview Questions

1. Difference between process and thread — memory, context switch cost, communication
2. What is a deadlock? Explain 4 conditions with real-life example
3. FCFS vs SJF vs Round Robin — which is better and when?
4. Explain virtual memory and demand paging with example
5. What is thrashing? How to prevent it?
6. Producer-Consumer problem using semaphores — implement wait/signal
7. Difference between paging and segmentation
8. What are page replacement algorithms? Compare FIFO, LRU, Optimal
9. Banker's Algorithm — deadlock avoidance kaise kaam karta hai?
10. Explain TLB and how it speeds up memory access

### CPU Scheduling Code

```python
def fcfs(processes):
    # processes: [(pid, burst)] — sort by arrival
    processes.sort(key=lambda x: x[1])
    curr = sum_wt = sum_tat = 0
    for pid, bt in processes:
        sum_wt += curr; curr += bt; sum_tat += curr
    n = len(processes)
    return sum_wt/n, sum_tat/n

def round_robin(processes, quantum):
    from collections import deque
    # processes: [(pid, arrival, burst)]
    n = len(processes); rem = [p[2] for p in processes]
    curr = idx = tot_wt = tot_tat = done = 0
    q = deque(); processes.sort(key=lambda x: x[1])
    while done < n:
        while idx < n and processes[idx][1] <= curr:
            q.append(idx); idx += 1
        if not q: curr += 1; continue
        i = q.popleft()
        if rem[i] > quantum:
            curr += quantum; rem[i] -= quantum
            while idx < n and processes[idx][1] <= curr:
                q.append(idx); idx += 1
            q.append(i)
        else:
            curr += rem[i]
            tot_tat += curr - processes[i][1]
            tot_wt += curr - processes[i][1] - processes[i][2]
            rem[i] = 0; done += 1
    return tot_wt/n, tot_tat/n
```

### Synchronization Code

```python
from threading import Semaphore, Thread
import time
buffer, max_size = [], 5
mutex = Semaphore(1); empty = Semaphore(max_size); full = Semaphore(0)

def producer():
    for i in range(10):
        empty.acquire(); mutex.acquire()
        buffer.append(f"item-{i}"); print(f"Produced item-{i}")
        mutex.release(); full.release(); time.sleep(0.5)

def consumer():
    for _ in range(10):
        full.acquire(); mutex.acquire()
        item = buffer.pop(0); print(f"Consumed {item}")
        mutex.release(); empty.release(); time.sleep(1)

# Reader-Writers
read_count = 0; r_mutex = Semaphore(1); w_lock = Semaphore(1)
def reader(id):
    global read_count
    r_mutex.acquire(); read_count += 1
    if read_count == 1: w_lock.acquire()
    r_mutex.release()
    print(f"Reader {id} reading...")
    r_mutex.acquire(); read_count -= 1
    if read_count == 0: w_lock.release()
    r_mutex.release()
```

### Banker's Algorithm

```python
def is_safe(avail, max_d, alloc):
    n, m = len(alloc), len(avail)
    need = [[max_d[i][j]-alloc[i][j] for j in range(m)] for i in range(n)]
    work, finish, seq = avail[:], [False]*n, []
    while len(seq) < n:
        found = False
        for i in range(n):
            if not finish[i] and all(need[i][j] <= work[j] for j in range(m)):
                for j in range(m): work[j] += alloc[i][j]
                finish[i] = True; seq.append(i); found = True; break
        if not found: return False, []
    return True, seq
```

### Page Replacement Code

```python
def fifo(pages, frames):
    q, page_set, faults = [], set(), 0
    for p in pages:
        if p not in page_set:
            if len(q) == frames: page_set.remove(q.pop(0))
            q.append(p); page_set.add(p); faults += 1
    return faults

def lru(pages, frames):
    stack, page_set, faults = [], set(), 0
    for p in pages:
        if p not in page_set:
            if len(stack) == frames: page_set.remove(stack.pop(0))
            faults += 1
        else: stack.remove(p)
        stack.append(p); page_set.add(p)
    return faults
```

### Process State Diagram

```
         ┌──────────┐
         │   NEW    │  (process created)
         └────┬─────┘
              │ admitted
              ▼
         ┌──────────┐
    ┌───►│  READY   │◄──────────┐
    │    └────┬─────┘           │
    │         │ scheduler       │
    │         ▼                 │
    │    ┌──────────┐  I/O or   │
    │    │ RUNNING  │───event───►│
    │    └────┬─────┘           │
    │         │ exit            │
    │         ▼                 │
    │    ┌──────────┐           │
    │    │TERMINATED│           │
    │    └──────────┘           │
    │                           │
    │    ┌──────────┐           │
    └────┤ WAITING  ├───────────┘
         └──────────┘  (I/O done)
```

### Memory Allocation

```python
def first_fit(blocks, procs):
    alloc = [-1]*len(procs)
    for i, ps in enumerate(procs):
        for j, bs in enumerate(blocks):
            if bs >= ps: alloc[i]=j; blocks[j]-=ps; break
    return alloc

def best_fit(blocks, procs):
    alloc = [-1]*len(procs)
    for i, ps in enumerate(procs):
        best = min((j for j,bs in enumerate(blocks) if bs>=ps), key=lambda j: blocks[j], default=-1)
        if best != -1: alloc[i]=best; blocks[best]-=ps
    return alloc
```

### Thread vs Process Comparison

| Feature | Process | Thread |
|---|---|---|
| Address space | Separate | Shared |
| Context switch | Expensive (PCB, TLB flush) | Cheap (registers/PC) |
| Communication | IPC (pipes, sockets, shared mem) | Direct memory |
| Crash isolation | High (one crash doesn't affect others) | Low (entire process dies) |
| Resource overhead | High (PCB, heap, file descriptors) | Low (stack + thread ID) |
| Creation time | Slow | Fast |

**Java:** `new Thread(() -> {}).start()` | **Python:** `threading.Thread(target=fn).start()`

### 25 More Interview Questions

1. **Binary semaphore vs mutex?** — Mutex has ownership (same thread must release), priority inheritance
2. **Priority inversion?** — Low priority holds lock needed by high; inheritance temporarily boosts low
3. **Belady's anomaly?** — FIFO can have more page faults with MORE frames
4. **Copy-on-write?** — fork() shares pages, copies only when modified
5. **IPC mechanisms?** — Pipes, FIFO, Shared Memory, Message Queues, Sockets, Signals
6. **Thrashing?** — High page fault rate, low CPU; reduce degree of multiprogramming
7. **Zombie vs orphan process?** — Zombie: child done, parent didn't wait(); Orphan: parent died first
8. **Disk scheduling?** — FCFS, SSTF, SCAN, C-SCAN, LOOK, C-LOOK
9. **Internal vs external fragmentation?** — Internal: allocated > requested; External: scattered free chunks
10. **Spinlock?** — Thread busy-waits; good for very short waits
11. **Preemptive vs non-preemptive?** — OS can interrupt vs process voluntarily yields
12. **Convoy effect?** — Short processes waiting behind long one in FCFS
13. **System call flow?** — User mode → trap → kernel mode → execute → return
14. **Mode bit?** — 0=kernel, 1=user; protects OS
15. **Multilevel feedback queue?** — Processes move between queues; prevents starvation
16. **Monolithic vs microkernel?** — Monolithic: all in kernel; Microkernel: minimal kernel, services in user space
17. **Logical vs physical address?** — Logical: CPU-generated; Physical: actual RAM; MMU translates
18. **Demand paging?** — Page loaded only on reference; reduces memory/I/O
19. **Overlays?** — Process larger than RAM loads only needed parts (ancient)
20. **SRTF vs LRJF?** — Shortest/Longest remaining job first (preemptive SJF/LJF)
21. **Multilevel queue?** — Processes permanently in queues by type
22. **Loadable kernel modules?** — Dynamic device drivers/filesystems without recompiling
23. **Buddy system?** — Memory divided power-of-2 blocks; split/merge
24. **Starvation?** — Process indefinitely delayed by higher priority processes
25. **Difference between wait and signal?** — wait() decrements (block if 0), signal() increments (wake if blocked)

### Additional OS Code

#### SJF (Non-Preemptive) Scheduling
```python
def sjf(processes):
    n = len(processes); curr = 0; done = [False]*n
    sum_wt = sum_tat = 0; completed = 0
    while completed < n:
        idx = -1; min_bt = float('inf')
        for i in range(n):
            if not done[i] and processes[i][1] <= curr and processes[i][2] < min_bt:
                min_bt = processes[i][2]; idx = i
        if idx == -1: curr += 1; continue
        bt = processes[idx][2]; curr += bt
        sum_tat += curr - processes[idx][1]
        sum_wt += curr - processes[idx][1] - bt
        done[idx] = True; completed += 1
    return sum_wt/n, sum_tat/n
```

#### Priority Scheduling (Non-Preemptive)
```python
def priority_scheduling(processes):
    n = len(processes); curr = 0; done = [False]*n
    sum_wt = sum_tat = 0; completed = 0
    while completed < n:
        idx = -1; high = float('inf')
        for i in range(n):
            if not done[i] and processes[i][1] <= curr and processes[i][3] < high:
                high = processes[i][3]; idx = i
        if idx == -1: curr += 1; continue
        bt = processes[idx][2]; curr += bt
        sum_tat += curr - processes[idx][1]
        sum_wt += curr - processes[idx][1] - bt
        done[idx] = True; completed += 1
    return sum_wt/n, sum_tat/n
```

#### Dining Philosophers
```python
from threading import Semaphore, Thread
import time, random

class DiningPhilosophers:
    def __init__(self, n=5):
        self.forks = [Semaphore(1) for _ in range(n)]

    def eat(self, pid):
        left, right = pid, (pid + 1) % len(self.forks)
        if pid % 2 == 0:
            self.forks[left].acquire(); self.forks[right].acquire()
        else:
            self.forks[right].acquire(); self.forks[left].acquire()
        print(f"Philosopher {pid} eating...")
        time.sleep(random.uniform(0.1, 0.5))
        self.forks[left].release(); self.forks[right].release()
        print(f"Philosopher {pid} thinking...")

    def run(self, pid):
        for _ in range(3):
            self.eat(pid); time.sleep(random.uniform(0.1, 0.5))

dp = DiningPhilosophers(5)
threads = [Thread(target=dp.run, args=(i,)) for i in range(5)]
for t in threads: t.start()
for t in threads: t.join()
```

#### Optimal Page Replacement
```python
def optimal(pages, frames):
    page_set, faults = set(), 0
    for i, p in enumerate(pages):
        if p not in page_set:
            if len(page_set) == frames:
                furthest = -1; to_remove = -1
                for pp in page_set:
                    try: idx = pages[i+1:].index(pp)
                    except ValueError: idx = float('inf')
                    if idx > furthest: furthest = idx; to_remove = pp
                page_set.remove(to_remove)
            page_set.add(p); faults += 1
    return faults
```

#### Worst Fit Memory Allocation
```python
def worst_fit(blocks, procs):
    alloc = [-1]*len(procs)
    for i, ps in enumerate(procs):
        worst = -1; idx = -1
        for j, bs in enumerate(blocks):
            if bs >= ps and bs > worst: worst = bs; idx = j
        if idx != -1: alloc[i]=idx; blocks[idx]-=ps
    return alloc
```

---

## DBMS — Database Management Systems

### Detailed Topic Breakdown

<table class="table-dash">
<thead>
<tr><th>Section</th><th>Module</th><th>Core Concepts</th></tr>
</thead>
<tbody>
<tr><td>1-2</td><td>Database Fundamentals &amp; ER Modeling</td><td>DBMS vs File Systems, ER Diagrams, Entities/Attributes, Cardinality, Weak Entities</td></tr>
<tr><td>3-4</td><td>Relational Model &amp; SQL</td><td>Keys (Primary, Foreign, Candidate), DDL/DML/DCL/TCL, Joins, Subqueries, Window Functions</td></tr>
<tr><td>5-6</td><td>Normalization &amp; Schema Design</td><td>Functional Dependencies, 1NF → BCNF, Anomalies (Insert/Delete/Update), Denormalization</td></tr>
<tr><td>7-8</td><td>Transactions &amp; Concurrency</td><td>ACID Properties, Locking, Isolation Levels, Deadlock Detection, Log-based Recovery</td></tr>
</tbody>
</table>

### Normalization — Step by Step

- **1NF**: Atomic values, no repeating groups
- **2NF**: 1NF + no partial dependency on composite key
- **3NF**: 2NF + no transitive dependency
- **BCNF**: 3NF + every determinant is a candidate key
- **Real example (from source)**:
  ```
  Before: Student_Course(StudentID, StudentName, CourseID, CourseName, Grade, Instructor)
  After 3NF:
    Students(StudentID, StudentName)
    Courses(CourseID, CourseName, Instructor)
    Enrollments(StudentID, CourseID, Grade)
  ```

### ACID Properties Example

- **Atomicity**: All or nothing — transaction ya to fully execute, ya rollback
- **Consistency**: Valid state to valid state — integrity constraints maintain
- **Isolation**: Concurrent transactions don't interfere — serializable by default
- **Durability**: Committed changes persist — even after system crash

### SQL Practice: 50 Problems

<table class="table-dash">
<thead>
<tr><th>Level</th><th>Count</th><th>Examples</th></tr>
</thead>
<tbody>
<tr><td>Easy</td><td>20</td><td>SELECT, WHERE, ORDER BY, GROUP BY, HAVING, JOINs</td></tr>
<tr><td>Medium</td><td>20</td><td>Subquery (2nd highest salary), Self-join, Window Functions, Correlated Subqueries</td></tr>
<tr><td>Hard</td><td>10</td><td>Recursive CTE, Dynamic Pivot, Analytical Queries, Transaction Isolation</td></tr>
</tbody>
</table>

### NoSQL Overview

- **Document DB**: MongoDB — JSON-like documents, schema-less
- **Key-Value**: Redis — ultra-fast, caching queen
- **Column-Family**: Cassandra — write-heavy, high availability
- **Graph**: Neo4j — relationships-focused data
- **CAP Theorem**: Consistency, Availability, Partition Tolerance — pick any two

### Key Interview Questions

1. What is normalization? Explain 1NF, 2NF, 3NF, BCNF with example
2. ACID properties explain karo — real transaction example do
3. Write SQL to find second highest salary from Employee table
4. Difference between INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN
5. What are the anomalies in database design? Insertion, Deletion, Update anomalies explain karo
6. What is indexing? How does B-Tree index work?
7. Explain isolation levels in DBMS — Read Uncommitted to Serializable
8. What is the difference between 3NF and BCNF? Example do
9. How do you handle many-to-many relationships in a relational schema?
10. What is CAP theorem? Explain with MongoDB and RDBMS examples

### More SQL Queries

```sql
-- Employees earning more than their manager
SELECT e.name FROM employees e
JOIN employees m ON e.manager_id = m.id
WHERE e.salary > m.salary;

-- Dept-wise count with salary > 50000
SELECT d.name, COUNT(*) as high_earners
FROM departments d JOIN employees e ON d.id = e.dept_id
WHERE e.salary > 50000 GROUP BY d.name HAVING COUNT(*) > 5;

-- Nth highest salary (generic)
SELECT DISTINCT salary FROM employees e1
WHERE n = (SELECT COUNT(DISTINCT salary) FROM employees e2 WHERE e2.salary >= e1.salary);

-- Customers who never ordered
SELECT c.* FROM customers c LEFT JOIN orders o ON c.id = o.customer_id WHERE o.id IS NULL;

-- Running total
SELECT date, amount, SUM(amount) OVER (ORDER BY date) as running_total FROM sales;

-- Delete duplicate rows
DELETE FROM employees WHERE id NOT IN (SELECT MIN(id) FROM employees GROUP BY name, dept_id);
```

### Window Functions Deep-Dive

```sql
-- RANK vs DENSE_RANK vs ROW_NUMBER
SELECT name, dept, salary,
       ROW_NUMBER() OVER (PARTITION BY dept ORDER BY salary DESC) as rn,
       RANK()       OVER (PARTITION BY dept ORDER BY salary DESC) as rk,
       DENSE_RANK() OVER (PARTITION BY dept ORDER BY salary DESC) as dr
FROM employees;
-- ROW_NUMBER: 1,2,3,4 (no gaps, unique). RANK: 1,2,2,4 (gaps for ties). DENSE_RANK: 1,2,2,3 (no gaps)

-- LEAD/LAG for comparing with previous/next row
SELECT date, amount,
       LAG(amount, 1) OVER (ORDER BY date) as prev_day,
       LEAD(amount, 1) OVER (ORDER BY date) as next_day
FROM sales;

-- NTILE — divide into N groups
SELECT name, salary, NTILE(4) OVER (ORDER BY salary DESC) as quartile FROM employees;
```

### Indexing Strategies

**B+Tree**: Default in MySQL InnoDB/PostgreSQL. O(log n) search. Leaf nodes linked for range scans.
**Hash**: O(1) equality lookups, no range queries.
**Composite**: Leftmost prefix rule — index on (name, dept) works for `name` and `name+dept` but NOT `dept` alone.
**Covering Index**: Contains ALL query columns → index-only scan, no table access.
**When to index**: WHERE, JOIN, ORDER BY, GROUP BY columns. High cardinality = better.

### Query Optimization

- Use `EXPLAIN` — check `type`: ALL = full scan (bad), ref/index = good
- Avoid `SELECT *` — fetch only needed columns
- Index foreign keys used in JOINs
- Avoid functions in WHERE — `WHERE YEAR(date)=2023` → use range `WHERE date >= '2023-01-01'`
- Prefer `EXISTS` over `IN` for large subqueries
- Use `LIMIT` for pagination

### Transaction Isolation Levels & Anomalies

| Level | Dirty Read | Non-Repeat | Phantom |
|---|---|---|---|
| Read Uncommitted | Yes | Yes | Yes |
| Read Committed | No | Yes | Yes |
| Repeatable Read | No | No | Yes |
| Serializable | No | No | No |

**Dirty Read**: T1 reads uncommitted data from T2 (might rollback).
**Non-Repeatable**: Same query in T1 returns different values (T2 updated between).
**Phantom**: New rows appear in subsequent queries (T2 inserted rows).

### More Interview Questions

1. **Deadlock in DBMS?** — Wait-for graph detection, timeout-based prevention
2. **Log-based recovery?** — Undo (rollback uncommitted) + Redo (replay committed) via WAL
3. **View vs Materialized view?** — Virtual vs physically stored results
4. **TRUNCATE vs DELETE vs DROP?** — DDL/fast/no rollback vs DML/slow/rollback vs remove structure
5. **Stored procedure?** — Precompiled SQL, reusable, better performance
6. **Trigger?** — Auto-executes on INSERT/UPDATE/DELETE (BEFORE/AFTER)
7. **Clustered vs Non-clustered index?** — Data stored in index order vs separate structure
8. **Composite key?** — Primary key with multiple columns
9. **Foreign key?** — Ensures referential integrity
10. **Database sharding?** — Horizontal partition across servers (hash/range)
11. **Denormalization?** — Intentional redundancy for read performance
12. **Lock granularity?** — Row vs Page vs Table; trade-off concurrency vs overhead
13. **Two-phase locking (2PL)?** — Growing (acquire) + Shrinking (release); guarantees serializability
14. **Timestamp ordering?** — Assign timestamps to transactions; abort older on conflict
15. **Cursor?** — Iterate row-by-row (slow, avoid if possible)

### More SQL Practice Queries

```sql
-- Department-wise max salary
SELECT d.name, MAX(e.salary) as max_salary
FROM departments d JOIN employees e ON d.id = e.dept_id
GROUP BY d.name;

-- Students who take ALL required courses (double NOT EXISTS)
SELECT s.name FROM students s
WHERE NOT EXISTS (
    SELECT 1 FROM required_courses r
    WHERE NOT EXISTS (
        SELECT 1 FROM enrollments e
        WHERE e.student_id = s.id AND e.course_id = r.course_id
    )
);

-- Second highest salary using window function
SELECT DISTINCT salary FROM (
    SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) as rnk
    FROM employees
) ranked WHERE rnk = 2;

-- Moving average (last 7 days)
SELECT date, amount,
       AVG(amount) OVER (ORDER BY date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) as moving_avg_7d
FROM sales;

-- Employees with salary above dept average
SELECT e.name, e.salary, d.name as dept
FROM employees e JOIN departments d ON e.dept_id = d.id
WHERE e.salary > (
    SELECT AVG(e2.salary) FROM employees e2 WHERE e2.dept_id = e.dept_id
);

-- Find managers who earn less than their subordinates
SELECT m.name as manager, AVG(e.salary) as avg_sub_salary
FROM employees e JOIN employees m ON e.manager_id = m.id
GROUP BY m.id, m.name
HAVING AVG(e.salary) > m.salary;
```

---

## CN — Computer Networks

**Practice**: 500+ questions

### Detailed Topic Breakdown

<table class="table-dash">
<thead>
<tr><th>Module</th><th>Topics</th><th>Practice</th></tr>
</thead>
<tbody>
<tr><td>1: Network Fundamentals</td><td>Network Types (LAN/WAN/MAN), Topologies, Components</td><td>50 Q + 3 Labs</td></tr>
<tr><td>2: Physical Layer</td><td>Transmission Media, Signal Encoding, Multiplexing, Error Detection</td><td>60 Q + 4 Labs</td></tr>
<tr><td>3: Data Link Layer</td><td>Framing, Error Correction, Flow Control, MAC, Ethernet/WiFi</td><td>80 Q + 5 Labs</td></tr>
<tr><td>4: Network Layer</td><td>IP Addressing &amp; Subnetting, Routing, IPv4/IPv6, ICMP/ARP/DHCP</td><td>100 Q + 6 Labs</td></tr>
<tr><td>5: Transport Layer</td><td>TCP vs UDP, Port Numbers, Connection Mgmt, Congestion Control</td><td>70 Q + 4 Labs</td></tr>
<tr><td>6: Application Layer</td><td>HTTP/HTTPS, FTP, SMTP, DNS, Socket Programming</td><td>80 Q + 3 Labs</td></tr>
<tr><td>7: Network Security</td><td>Cryptography, SSL/TLS, VPN, Firewalls</td><td>60 Q + 2 Labs</td></tr>
</tbody>
</table>

### Top 20 Interview Topics (from source)

1. OSI vs TCP/IP Model — 7 layers vs 4 layers, comparison
2. TCP vs UDP — connection-oriented vs connectionless, reliability vs speed
3. IP Addressing & Subnetting — classful vs classless, CIDR
4. Routing Protocols — RIP (distance vector), OSPF (link state), BGP (path vector)
5. HTTP vs HTTPS — SSL/TLS encryption, port 80 vs 443
6. DNS Resolution Process — recursive vs iterative query
7. ARP Protocol — IP to MAC address mapping
8. Network Security — Firewall, VPN, Access Control Lists
9. Load Balancing — round-robin, least connections, weighted
10. CDN Working — edge servers, caching, latency reduction

### Key Interview Questions

1. Difference between OSI and TCP/IP model — layer-by-layer comparison
2. TCP 3-way handshake explain karo — SYN, SYN-ACK, ACK with states
3. What happens when you type google.com in browser? Full flow from DNS to HTTP
4. Explain IP subnetting — given IP 192.168.1.0/24, create 4 subnets
5. TCP vs UDP — examples of applications using each (HTTP uses TCP, DNS uses UDP, etc.)
6. What is ARP? How does it resolve IP to MAC address?
7. Difference between hub, switch, and router — collision domain vs broadcast domain
8. Explain sliding window protocol in TCP — flow control and congestion control
9. What are the different types of DNS records? A, AAAA, CNAME, MX, NS
10. How does SSL/TLS handshake work? Certificates, asymmetric to symmetric key exchange

### Subnetting Practice

**Problem 1**: 192.168.1.0/24 → 4 subnets
```
Need 2 extra bits (2²=4) → /26 → 255.255.255.192
Subnet 0: .0 -.63, Subnet 1: .64 -.127, Subnet 2: .128 -.191, Subnet 3: .192 -.255
Each: 64 addresses (62 usable)
```

**Problem 2**: 10.0.0.0/16 → 8 subnets, 2000 hosts each
```
Need 11 host bits (2¹¹=2048≥2000) → /21 → 255.255.248.0
Subnets: 10.0.0.0/21, 10.0.8.0/21, ... up to 10.0.56.0/21
```

**CIDR Quick Ref**: /30=4 addr (2 usable, point-to-point), /29=8, /28=16, /27=32, /26=64, /25=128, /24=256

### TCP 3-Way Handshake & 4-Way Termination

```
3-Way Handshake:
CLIENT(CLOSED)                        SERVER(LISTEN)
  │  SYN(seq=x)                          │
  │─────────────────────────────────────►│ SYN_RCVD
  │  SYN-ACK(seq=y, ack=x+1)            │
  │◄─────────────────────────────────────│
  │  ACK(seq=x+1, ack=y+1)              │
  │─────────────────────────────────────►│ ESTABLISHED

4-Way Termination:
CLIENT(ESTABLISHED)                    SERVER(ESTABLISHED)
  │  FIN(seq=u)                          │
  │─────────────────────────────────────►│ CLOSE_WAIT
  │  ACK(seq=v, ack=u+1)                │
  │◄─────────────────────────────────────│ FIN_WAIT_2
  │  FIN(seq=v)                          │
  │◄─────────────────────────────────────│ LAST_ACK
  │  ACK(seq=u+1, ack=v+1)              │
  │─────────────────────────────────────►│ CLOSED
  TIME_WAIT(2MSL) → CLOSED
```

### HTTP/1.1 vs HTTP/2 vs HTTP/3

| Feature | HTTP/1.1 | HTTP/2 | HTTP/3 |
|---|---|---|---|
| Transport | TCP | TCP | QUIC (UDP) |
| Multiplexing | No (HOL blocking) | Yes (streams) | Yes (no HOL) |
| Header compression | No | HPACK | QPACK |
| Server push | No | Yes | Yes |
| Connections | Multiple per domain | Single connection | Single |
| Latency | High (handshake+TLS) | Medium | Low (0-RTT) |

### DNS Resolution Step-by-Step

```
1. Browser checks local DNS cache
2. Checks /etc/hosts
3. Query → Recursive Resolver (ISP or 8.8.8.8)
   a. Root server → ".com TLD"
   b. .com TLD → "google.com NS"
   c. Authoritative NS → "142.250.183.78"
4. Resolver caches, returns to browser
5. Browser caches, initiates TCP:443
```

### Socket Programming

```python
# TCP Server
import socket
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.bind(('localhost', 8080)); s.listen(5)
while True:
    c, addr = s.accept()
    data = c.recv(1024).decode()
    c.send(f"Echo: {data}".encode()); c.close()

# TCP Client
c = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
c.connect(('localhost', 8080))
c.send(b"Hello"); print(c.recv(1024).decode()); c.close()
```

### Network Devices Comparison

| Device | Layer | Function | Collision Domain | Broadcast Domain |
|---|---|---|---|---|
| Hub | Physical (1) | Signal repeating | Single | Single |
| Switch | Data Link (2) | MAC forwarding | Per port | Single |
| Router | Network (3) | IP routing | Per port | Per port |
| Bridge | Data Link (2) | Segment connect | Per port | Single |

### 25 More Interview Questions

1. **Hub vs Switch?** — Hub: broadcast, shared bandwidth; Switch: MAC table, point-to-point, full-duplex
2. **VLAN?** — Virtual LAN, logically segments network, reduces broadcast domain
3. **NAT?** — Maps private IPs to public; conserves IPv4
4. **Traceroute?** — Incrementing TTL, each router replies ICMP Time Exceeded
5. **TCP/UDP checksum?** — TCP: mandatory + pseudo-header; UDP: optional in IPv4
6. **Congestion control algorithms?** — Slow Start (exponential), Congestion Avoidance (linear), Fast Retransmit, Fast Recovery
7. **Go-Back-N vs Selective Repeat?** — GBN: retransmits ALL from lost; SR: only lost packet
8. **DHCP?** — DORA: Discover → Offer → Request → Acknowledge
9. **ICMP?** — Error reporting (destination unreachable) + diagnostics (ping)
10. **Symmetric vs Asymmetric encryption?** — Sym: same key (AES); Asym: pub/priv key (RSA)
11. **SSL/TLS handshake?** — Client ciphers → Server cert → Key exchange → Session key (symmetric)
12. **Forward vs Reverse proxy?** — Forward: hides clients; Reverse: load balances servers
13. **MTU?** — Max Transmission Unit (1500 Ethernet); fragmentation if exceeded
14. **IPv4 vs IPv6?** — IPv4: 32-bit, ~4.3B; IPv6: 128-bit, huge space
15. **BGP?** — Path vector, AS_PATH attribute, connects ASes
16. **SDN?** — Separates control plane (centralized) from data plane
17. **QoS?** — Prioritizes traffic types (voice/video > bulk data)
18. **LAN vs WAN?** — Small area/high speed vs large area/leased lines
19. **Collision domain?** — Segment where collisions can occur (hub = single, switch = per port)
20. **Broadcast domain?** — Devices receiving broadcast frames (router breaks it)
21. **VPN?** — Encrypted tunnel over public internet
22. **TTL in IP?** — Limits packet lifetime, prevents loops
23. **CDN?** — Geographically distributed edge servers for cached content
24. **What port does DHCP use?** — 67 (server), 68 (client) — UDP
25. **What is the purpose of ARP?** — Resolves IP → MAC address; broadcasts "who has IP?"

---

## COA — Computer Organization & Architecture

No dedicated folder in source — concepts spread across reference docs. Ye subjects often OS ke saath padhe jaate hain.

### Core Topics

- **Von Neumann Architecture**: CPU, Memory, I/O — single bus, stored program concept
- **CPU Components**: ALU, Control Unit, Registers (PC, IR, MAR, MBR, AC)
- **Memory Hierarchy**: Register > Cache > RAM > Disk (speed cost tradeoff)
- **Cache Memory**: L1/L2/L3, mapping techniques (Direct, Associative, Set-Associative)
- **Pipelining**: 5-stage (IF, ID, EX, MEM, WB), hazards (Structural, Data, Control)
- **Data Representation**: 1's complement, 2's complement, IEEE 754 floating-point
- **Number Systems**: Binary, Octal, Hex, conversions, binary arithmetic
- **Addressing Modes**: Immediate, Direct, Indirect, Register, Indexed

### Key Interview Questions

1. Explain Von Neumann architecture with block diagram
2. What is pipelining? Explain 5-stage pipeline and hazards
3. Difference between RISC and CISC architectures
4. What is cache memory? Explain direct mapping vs associative mapping
5. How negative numbers are stored in memory — 2's complement explanation
6. Explain memory hierarchy and why is it hierarchical?
7. What are the different addressing modes in computer architecture?
8. Explain DMA (Direct Memory Access) — how does it speed up I/O?

### Pipeline Hazards

**1. Structural Hazard**: Resource conflict. Two stages need same hardware.
```
Inst 1: IF ID EX MEM WB
Inst 4:          IF --- EX   ← stall (MEM uses memory)
```
**Solution**: Separate I-cache and D-cache.

**2. Data Hazard (RAW)**:
```assembly
ADD R1, R2, R3   ; R1 = R2+R3
SUB R4, R1, R5   ; R1 not ready!
```
**Solutions**: Forwarding/bypassing (send ALU output directly), stalling (NOP), compiler reordering.

**3. Control Hazard (Branch)**: Pipeline fetches wrong instructions after branch.
**Solutions**: Branch prediction (static/dynamic), branch delay slot, speculative execution.

### Cache Mapping

**Address breakdown**: `| Tag | Index | Offset |`

**Direct Mapping**: Each memory block → exactly one cache line. Simple but high conflict misses.
- 8KB cache, 16B blocks, 512 lines. 32-bit addr: Tag=19b, Index=9b, Offset=4b

**Fully Associative**: Any block anywhere. Lowest conflict, expensive (comparator per line).

**Set-Associative**: Blocks map to a set, within set any line. 2-way/4-way. Best trade-off.

### IEEE 754 Example: 42.25

```
42 = 101010, 0.25 = 0.01 → 101010.01 = 1.0101001 × 2^5
Sign: 0, Exponent: 5+127=132=10000100, Mantissa: 01010010000000000000000
Result: 0 10000100 01010010000000000000000 = 0x42288000
```

### More Interview Questions

1. **SRAM vs DRAM?** — SRAM: faster, 6T/bit, cache; DRAM: slower, 1T+capacitor/bit, main memory
2. **Locality of reference?** — Temporal (recently accessed) + Spatial (nearby)
3. **Hardwired vs microprogrammed control?** — Fast/inflexible vs slow/flexible
4. **Amdahl's Law?** — Speedup = 1/((1-P)+P/S)
5. **Bus types?** — Data (bidirectional), Address (unidirectional), Control
6. **Interrupt?** — Signal pausing CPU; ISR handles it
7. **I/O mapped vs memory mapped I/O?** — Separate I/O space vs same address space
8. **Virtual memory?** — Maps virtual→physical; MMU handles; program larger than RAM

### RISC vs CISC Comparison

| Feature | RISC | CISC |
|---|---|---|
| Instruction set | Simple, fixed size (32-bit) | Complex, variable size |
| Instructions | Few (50-100) | Many (200-500+) |
| Addressing modes | Few (1-2) | Many (10-20) |
| Execution | Single cycle per instruction | Multiple cycles |
| Pipeline | Easy (uniform instructions) | Hard (variable formats) |
| Memory access | Load/Store only | Direct memory ops in ALU |
| Registers | Many (32-128) | Few (8-16) |
| Examples | ARM, MIPS, RISC-V | x86, x86-64 |
| Compiler complexity | High (optimizes for HW) | Lower (HW does heavy lifting) |
| Power efficiency | High | Low |

**RISC**: Simple HW, compiler handles complexity. ARM processors use RISC.
**CISC**: Complex HW, simpler assembly. x86/x64 use CISC.

---

## TOC — Theory of Computation

Topics spread across reference material. Placement perspective me ye basics kaafi hain.

### Core Topics

- **Automata Theory**: DFA, NFA, epsilon-NFA — state diagrams and conversions
- **Regular Languages**: Regular expressions, pumping lemma
- **Context Free Grammars**: CFG, derivation trees, ambiguity
- **Pushdown Automata**: PDA — NFA + stack
- **Turing Machines**: computational model, decidability, halting problem
- **Chomsky Hierarchy**: Type 0-3 grammars

### Key Interview Questions

1. Difference between DFA and NFA — conversion NFA to DFA
2. What is the pumping lemma for regular languages? Example use
3. Design a DFA that accepts strings ending with "01"
4. What is a Turing Machine? Define formally
5. What is the Halting Problem and why is it undecidable?
6. Explain Chomsky Hierarchy with examples of each type

### DFA Design Examples

**DFA ending with "01"**: States q0, q1, q2(accept)
```
q0 --0→ q1, q0 --1→ q0, q1 --0→ q1, q1 --1→ q2, q2 --0→ q1, q2 --1→ q0
```
"01"✓, "101"✓, "010"✗

**DFA starting with "10"**: q0→q1(on '1')→q4(accept, on '0'); all else→q3(dead)

### Regex → NFA (Thompson's Construction)

```
a|b:  → q0 --ε→ (a-NFA) --ε→ q5
         q0 --ε→ (b-NFA) --ε→ q5
a*:   → q0 --ε→ (a-NFA) with ε-loop back
ab:   → NFA(a) --ε→ NFA(b)
```

### Chomsky Hierarchy

| Type | Name | Automation | Example |
|---|---|---|---|
| Type 0 | Recursively Enumerable | Turing Machine | Any computable |
| Type 1 | Context-Sensitive | LBA | aⁿbⁿcⁿ |
| Type 2 | Context-Free | PDA | aⁿbⁿ, palindromes |
| Type 3 | Regular | FA | a*b* |

**Type 3**: `S → aS | bA | ε; A → bA | ε` → a*b*
**Type 2**: `S → aSb | ε` → aⁿbⁿ
**Type 1**: `S → aSBC | aBC; CB→BC; aB→ab; bB→bb; bC→bc; cC→cc` → aⁿbⁿcⁿ

### NFA to DFA Conversion Steps

**Step-by-step process**:
1. Start state of DFA = ε-closure of NFA start state
2. For each DFA state, compute transition on each input symbol:
   - Move = all NFA states reachable via that symbol
   - ε-closure(Move) = new DFA state
3. Repeat until no new states appear
4. DFA accepting states = any DFA state containing an NFA accepting state

**Example**: NFA for `a|b`

NFA: q0 --a--> q1 (accept), q0 --b--> q2 (accept), ε from start to q0

| DFA State | NFA States | on 'a' | on 'b' |
|---|---|---|---|
| {q0} | {q0} | {q1} | {q2} |
| {q1} | {q1} | {} | {} |
| {q2} | {q2} | {} | {} |
| {} | {} | {} | {} |

### Pumping Lemma for Regular Languages

**Statement**: For every regular language L, there exists a pumping length p such that any string s in L with |s| >= p can be split as s = xyz where:
- |xy| <= p
- |y| > 0
- xyⁿz is in L for all n >= 0

**Application**: Prove L = {aⁿbⁿ | n >= 0} is NOT regular
```
Assume L is regular with pumping length p
Take s = aᵖbᵖ (length 2p >= p)
y must contain only 'a's (since |xy| <= p)
Pumping y: xy²z = aᵖ⁺ᵏbᵖ — unequal a's and b's → not in L
Contradiction! L is not regular.
```

---

## SE — Software Engineering

### Detailed Topic Breakdown

<table class="table-dash">
<thead>
<tr><th>Module</th><th>Topics</th></tr>
</thead>
<tbody>
<tr><td>1: SDLC Models</td><td>Waterfall, Agile, Scrum, Kanban</td></tr>
<tr><td>2: Requirements &amp; Design</td><td>SRS, Functional vs Non-functional, System Architecture</td></tr>
<tr><td>3: Testing &amp; QA</td><td>TDD, BDD, Testing Levels (Unit, Integration, System)</td></tr>
<tr><td>4: Version Control &amp; Collaboration</td><td>Git, Branching, Code Review, CI/CD Pipeline</td></tr>
<tr><td>5: Project Management</td><td>Estimation, Risk Management, Stakeholder Management</td></tr>
<tr><td>6: Advanced Testing</td><td>Performance/Security Testing, Automation Frameworks</td></tr>
<tr><td>7: Design Patterns</td><td>Creational (Singleton, Factory), Structural (Adapter, Proxy), Behavioral (Observer, Strategy)</td></tr>
</tbody>
</table>

### Key Interview Questions

1. Waterfall vs Agile — kab kya use karna chahiye?
2. What is SDLC? Phases explain karo
3. Difference between functional and non-functional requirements
4. What are design patterns? Give example of Singleton pattern
5. What is TDD (Test-Driven Development)? Red-Green-Refactor cycle
6. Difference between verification and validation
7. What is CI/CD and why is it important?

### Agile vs Waterfall

| Aspect | Waterfall | Agile |
|---|---|---|
| Approach | Sequential, linear | Iterative, incremental |
| Requirements | Fixed upfront | Evolving |
| Delivery | Single at end | Frequent small releases |
| Testing | After dev phase | Continuous |
| Documentation | Heavy | Minimal |
| Change handling | Difficult, costly | Easy, expected |
| Best for | Regulated, fixed req | Startups, SaaS, mobile |

**Use Waterfall**: Clear requirements, regulatory, simple projects.
**Use Agile**: Uncertain requirements, fast-changing market, complex projects.

### Scrum Framework

**Roles**: Product Owner (backlog), Scrum Master (process), Dev Team (3-9, cross-functional).
**Events**: Sprint (1-4 weeks), Sprint Planning (2-4h), Daily Standup (15min), Sprint Review (1-2h), Retro (1-1.5h).
**Artifacts**: Product Backlog, Sprint Backlog, Increment.

### TDD Example (Red-Green-Refactor)

```python
# RED: Write failing test
def test_validate_password():
    assert validate_password("Password1") == True
    assert validate_password("Ab1") == False

# GREEN: Make it pass
def validate_password(pw):
    if len(pw) < 8: return False
    if not any(c.isdigit() for c in pw): return False
    if not any(c.isupper() for c in pw): return False
    return True

# REFACTOR: Improve
import re
def validate_password(pw):
    checks = [len(pw)>=8, re.search(r'\d', pw), re.search(r'[A-Z]', pw)]
    return all(checks)
```

### Design Pattern Code

**Singleton (thread-safe)**:
```python
import threading
class Singleton:
    _instance = None; _lock = threading.Lock()
    def __new__(cls):
        if cls._instance is None:
            with cls._lock:
                if cls._instance is None:
                    cls._instance = super().__new__(cls)
        return cls._instance
```

**Factory**:
```python
class ShapeFactory:
    def create(self, t):
        return {"circle": Circle, "square": Square}[t]()

class Observer:
    def __init__(self): self._obs = []
    def attach(self, o): self._obs.append(o)
    def notify(self, msg):
        for o in self._obs: o.update(msg)

class Strategy:
    def __init__(self, algo): self.algo = algo
    def execute(self, data): return self.algo(data)
```

### More Interview Questions

1. **Verification vs Validation?** — "Building product right" vs "Building right product"
2. **Technical debt?** — Shortcut code needing future refactoring
3. **Microservices?** — Loosely coupled, independently deployable services
4. **Black-box vs White-box testing?** — No internals knowledge vs code-structure based
5. **Regression testing?** — Retesting to ensure new changes broke nothing
6. **Unit vs Integration test?** — Single component vs component interaction
7. **Continuous integration?** — Frequent merges + automated builds/tests
8. **Bug vs Defect?** — Bug = code error; Defect = requirement deviation
9. **Maintenance types?** — Corrective, Adaptive, Perfective, Preventive
10. **SRS?** — Software Requirements Specification document
11. **Coupling vs Cohesion?** — Inter-module dependency (low=good) vs intra-module focus (high=good)
12. **Risk management?** — Identify → Analyze → Prioritize → Mitigate
13. **Smoke vs Sanity test?** — Broad critical functionality vs narrow focused
14. **SCM?** — Version control + change management for code/docs
15. **Forward vs Reverse engineering?** — Design→Code vs Code→Design

### Additional Design Patterns

**Adapter Pattern**:
```python
class EuropeanSocket:
    def voltage(self): return 230
class USPlug:
    def connect(self, voltage): return f"US plug running on {voltage}V"
class Adapter(EuropeanSocket):
    def __init__(self, device): self.device = device
    def plug_in(self): return self.device.connect(self.voltage())
```

**Decorator Pattern**:
```python
def log_execution(fn):
    def wrapper(*args, **kwargs):
        print(f"Calling {fn.__name__}")
        result = fn(*args, **kwargs)
        print(f"{fn.__name__} returned {result}")
        return result
    return wrapper

@log_execution
def add(a, b): return a + b
```

**MVC Pattern**: Model (data + logic), View (UI), Controller (input handling). Django = MTV, Rails = MVC.

**Repository Pattern**: Abstracts data access — `UserRepository.get_by_id(id)` instead of raw SQL. Easier mocking in tests.

---

## 🌐 DS — Distributed Systems (Big Tech Essential)

<div class="tip-banner">
  <span class="tip-badge">🔥 FUTURE PROOF</span>
  Distributed Systems <strong>har big tech company</strong> poochhti hai — Amazon, Google, Meta, Uber, Stripe. Scaling, CAP theorem, consistency models — ye concepts senior roles mein make-or-break hote hain.
</div>

**Why Distributed Systems for placements?** FAANG companies expect you to understand how systems work at scale. Even freshers with distributed systems knowledge stand out.

<div class="ds-grid">
  <div class="ds-card">
    <h4>🔄 CAP Theorem</h4>
    <p>Consistency vs Availability vs Partition Tolerance — sirf 2 choose kar sakte ho. Real-world systems kaise trade-off karte hain.</p>
    <div class="ds-meta">Foundation</div>
  </div>
  <div class="ds-card">
    <h4>📊 Consistency Models</h4>
    <p>Strong → Eventual → Causal → Read-your-writes. Har model ka use-case alag. Amazon Dynamo vs Google Spanner.</p>
    <div class="ds-meta">Core</div>
  </div>
  <div class="ds-card">
    <h4>🗳️ Consensus Algorithms</h4>
    <p>Paxos vs Raft — kaise multiple nodes agree karte hain. Leader election, log replication. Raft is interview favorite.</p>
    <div class="ds-meta">Advanced</div>
  </div>
  <div class="ds-card">
    <h4>🔗 Consistent Hashing</h4>
    <p>Cassandra, DynamoDB ki backbone. Add/remove nodes without major rehashing. Virtual nodes concept.</p>
    <div class="ds-meta">Core</div>
  </div>
  <div class="ds-card">
    <h4>📬 Gossip Protocol</h4>
    <p>Cassandra, Redis Cluster use karte hain. Node failure detection + metadata propagation. Epidemic style.</p>
    <div class="ds-meta">Advanced</div>
  </div>
  <div class="ds-card">
    <h4>🧩 Sharding & Partitioning</h4>
    <p>Horizontal sharding, vertical sharding, range vs hash-based. Rebalancing strategies. Database scaling ka answer.</p>
    <div class="ds-meta">Core</div>
  </div>
  <div class="ds-card">
    <h4>📦 Distributed Transactions</h4>
    <p>Two-Phase Commit (2PC), Three-Phase Commit (3PC), SAGA pattern. When to use which.</p>
    <div class="ds-meta">Advanced</div>
  </div>
  <div class="ds-card">
    <h4>🔍 Distributed Tracing</h4>
    <p>Jaeger, Zipkin — request ka flow multiple microservices across trace karo. Latency analysis.</p>
    <div class="ds-meta">Observability</div>
  </div>
</div>

### Key Interview Questions

1. **Explain CAP theorem** — Real-world example ke saath (CP: HBase, AP: Cassandra, CA: traditional RDBMS)
2. **Design a distributed key-value store** — Consistent hashing, replication, quorum
3. **Difference between Paxos and Raft** — Raft ka simpler leader-based approach
4. **How does DynamoDB achieve high availability?** — Eventually consistent reads, hinted handoff
5. **What is gossip protocol?** — Epidemic propagation, failure detection in Cassandra
6. **How to handle distributed transactions?** — 2PC vs SAGA pattern trade-offs
7. **Design a distributed rate limiter** — Sliding window, token bucket, distributed counters

### Resources
- **"Designing Data-Intensive Applications" (Martin Kleppmann)** — Distributed systems bible
- **MIT 6.824** — Distributed Systems course (YouTube)
- **System Design Interview (Alex Xu)** — Vol 1 & 2

### Raft Consensus Algorithm

**3 sub-problems**: Leader Election, Log Replication, Safety.

**Leader Election**:
- Followers have random timeout (150-300ms)
- Timeout → candidate → votes for self → RequestVote RPC to all
- Majority votes → leader for this term
- Leader sends heartbeats to prevent new elections

**Log Replication**:
```
Client → Leader → append to log → AppendEntries RPC to followers
Followers → append & ACK → majority ACK → leader commits → notify followers
```

**Safety**: At most 1 leader/term, leader never overwrites log, committed entries survive future leaders.

### Consistent Hashing Implementation

```python
import hashlib, bisect

class ConsistentHashRing:
    def __init__(self, nodes=None, vnodes=100):
        self.vnodes = vnodes; self.ring = {}; self.keys = []
        if nodes:
            for n in nodes: self.add_node(n)

    def _hash(self, k): return int(hashlib.md5(k.encode()).hexdigest(), 16)

    def add_node(self, node):
        for i in range(self.vnodes):
            h = self._hash(f"{node}:{i}")
            self.ring[h] = node; bisect.insort(self.keys, h)

    def remove_node(self, node):
        for i in range(self.vnodes):
            h = self._hash(f"{node}:{i}")
            del self.ring[h]; self.keys.remove(h)

    def get_node(self, key):
        if not self.ring: return None
        h = self._hash(key)
        idx = bisect.bisect_right(self.keys, h)
        return self.ring[self.keys[0 if idx==len(self.keys) else idx]]
```

**Key benefit**: Add/remove node remaps only K/N fraction of keys (vs mod-N which remaps ALL).

### Distributed Locking (Redlock)

```python
import time, uuid, redis

def acquire_lock(redis_nodes, resource, ttl=10000):
    lock_id = str(uuid.uuid4())
    start = int(time.time()*1000); acquired = 0
    for node in redis_nodes:
        try:
            if node.set(resource, lock_id, nx=True, px=ttl): acquired += 1
        except: continue
    elapsed = int(time.time()*1000) - start
    if acquired >= len(redis_nodes)//2+1 and elapsed < ttl: return lock_id
    for node in redis_nodes: node.delete(resource)
    return None

def release_lock(redis_nodes, resource, lock_id):
    script = """if redis.call("get",KEYS[1])==ARGV[1] then return redis.call("del",KEYS[1]) else return 0 end"""
    for node in redis_nodes: node.eval(script, 1, resource, lock_id)
```

### Leader Election

**Bully Algorithm**: Highest priority node initiates election. Sends ELECTION to higher nodes. If no response → becomes coordinator.

**Raft Election**: Random timeout → candidate → RequestVote → majority → leader. Periodic heartbeats maintain leadership.

**ZooKeeper/etcd**: Ephemeral sequential znodes; lowest sequence = leader. Session expiry triggers re-election.

### More Interview Questions with Answers

1. **CAP theorem in detail?** — During partition, choose C (HBase, MongoDB w/ write concern majority) or A (Cassandra, DynamoDB). CA is theoretical (no partition).
2. **Strong vs Eventual consistency?** — Strong: all reads return latest write (Spanner, ZooKeeper). Eventual: replicas converge over time (DNS, DynamoDB).
3. **Gossip protocol?** — Nodes periodically exchange info with random peer. Push/Pull/Push-Pull. O(log N) convergence. Used in Cassandra, Redis Cluster.
4. **SAGA pattern?** — Series of local transactions with compensating actions on failure. Choreography (event-driven) vs Orchestration (central coordinator).
5. **2PC vs 3PC?** — 2PC: Prepare→Commit, blocking if coordinator fails. 3PC: CanCommit→PreCommit→DoCommit, non-blocking but inconsistent under partition.
6. **Horizontal vs Vertical scaling?** — Vertical: more RAM/CPU (limited). Horizontal: more machines (fault-tolerant, unlimited).
7. **Logical clocks?** — Lamport: counter per event, causal ordering. Vector clocks: detect concurrent updates.
8. **DynamoDB HA?** — Replication across 3 AZs, quorum reads/writes, consistent hashing, hinted handoff, Merkle trees for anti-entropy.
9. **Distributed rate limiter?** — Token bucket + Redis sorted sets with Lua script for atomicity.
10. **Design KV store?** — Consistent hashing (partitioning) + replication (N=3) + quorum (R+W>N) + hinted handoff + Merkle tree anti-entropy.

11. **What is vector clock?** — (node, counter) pairs tracking causality. Used in Dynamo. Detect concurrent vs causal updates.
12. **CRDT vs OT?** — CRDT: conflict-free data types (merge commutative). OT: operational transform (Google Docs). CRDT simpler for P2P.
13. **Quorum in Dynamo?** — N=3 replicas, R=2 reads, W=2 writes. R+W>N guarantees strong consistency. Tune for latency vs durability.
14. **Hinted handoff?** — If replica unavailable, another node accepts write with HINT. When replica recovers, hint replayed. Ensures availability.
15. **Merkle tree anti-entropy?** — Each replica builds hash tree of its keys. Compare trees root-down. O(log n) sync instead of full compare.

---

## Checklist

- [ ] Arrays ke 50 problems (20E, 20M, 10H) khatam
- [ ] Linked Lists, Stacks, Queues, Trees ki practice kiya
- [ ] Graphs — DFS/BFS, Dijkstra, topological sort
- [ ] DP — memoization, tabulation, knapsack patterns mastered
- [ ] OS ke 4 phases complete — process, memory, storage, virtualization
- [ ] CPU Scheduling algorithms differentiate karte aata hai
- [ ] Deadlock handling — prevention, avoidance, detection sab clear
- [ ] SQL — DDL/DML/DCL, Joins, Subqueries, Window Functions practice
- [ ] Normalization 1NF → BCNF real example ke saath aata hai
- [ ] ACID properties and transaction isolation levels yaad hai
- [ ] CN ke 7 modules — physical layer se security tak cover
- [ ] OSI vs TCP/IP, subnetting, DNS resolution process aata hai
- [ ] COA — pipeline, cache, addressing modes basics clear
- [ ] SE — SDLC models, design patterns, testing types cover kiye
- [ ] DS — CAP theorem, consistency models, consensus algorithms cover kiye

## Quick Revision Tables

### Big-O Cheat Sheet

| DS | Access | Search | Insert | Delete |
|---|---|---|---|---|
| Array | O(1) | O(n) | O(n) | O(n) |
| Stack/Queue | O(n) | O(n) | O(1) | O(1) |
| Linked List | O(n) | O(n) | O(1) | O(1) |
| Hash Table* | — | O(1) | O(1) | O(1) |
| BST (avg) | O(log n) | O(log n) | O(log n) | O(log n) |
| AVL/RB | O(log n) | O(log n) | O(log n) | O(log n) |
| Heap | O(1) | O(n) | O(log n) | O(log n) |
| Trie | O(k) | O(k) | O(k) | O(k) |

*avg case. k=key length.

| Sort | Avg | Worst | Space | Stable |
|---|---|---|---|---|
| Quick | O(n log n) | O(n²) | O(log n) | No |
| Merge | O(n log n) | O(n log n) | O(n) | Yes |
| Heap | O(n log n) | O(n log n) | O(1) | No |
| Insertion | O(n²) | O(n²) | O(1) | Yes |

### OS — Scheduling Comparison

| Algo | Preemptive | Starvation | Convoy | Overhead |
|---|---|---|---|---|
| FCFS | No | No | Yes | Minimal |
| SJF | No | Yes | No | Moderate |
| SRTF | Yes | Yes | No | High |
| Round Robin | Yes | No | No | Moderate |
| Priority | Config | Yes | No | Moderate |

### DBMS — Normal Forms & Isolation

| Form | Condition |
|---|---|
| 1NF | Atomic values, no repeating groups |
| 2NF | 1NF + no partial dependency |
| 3NF | 2NF + no transitive dependency |
| BCNF | 3NF + every determinant is candidate key |

| Level | Dirty Read | Non-Repeat | Phantom |
|---|---|---|---|
| RU | Yes | Yes | Yes |
| RC | No | Yes | Yes |
| RR | No | No | Yes |
| Serializable | No | No | No |

### CN — OSI & TCP/IP

| Layer | Function | Protocols | PDU |
|---|---|---|---|
| App (7) | User interface | HTTP, SMTP, DNS | Data |
| Transport (4) | End-to-end | TCP, UDP | Segment |
| Network (3) | Routing | IP, ICMP, ARP | Packet |
| Data Link (2) | Framing, MAC | Ethernet, PPP | Frame |
| Physical (1) | Bits, signals | RJ45, Fiber | Bits |

Common ports: 20/21=FTP, 22=SSH, 25=SMTP, 53=DNS, 80=HTTP, 443=HTTPS, 3306=MySQL, 6379=Redis

### Process vs Thread

| Aspect | Process | Thread |
|---|---|---|
| Memory | Separate address space | Shared |
| Context switch | Expensive | Cheap |
| Communication | IPC (pipes, sockets) | Direct memory |
| Crash isolation | High | Low (entire process dies) |
| Creation | Slow (allocate resources) | Fast |

### TCP vs UDP

| Feature | TCP | UDP |
|---|---|---|
| Connection | Connection-oriented | Connectionless |
| Reliability | Reliable (ACK + retransmit) | Unreliable (best effort) |
| Ordering | Ordered (seq numbers) | No ordering |
| Flow control | Yes (sliding window) | None |
| Header | 20-60 bytes | 8 bytes |
| Speed | Slower | Faster |
| Use cases | HTTP, SMTP, FTP | DNS, VoIP, Gaming |

### Cache Mapping Techniques

| Feature | Direct Mapped | Fully Associative | Set-Associative (2-way) |
|---|---|---|---|
| Block → Cache line | One fixed line | Any line | One set (2 lines) |
| Tag comparison | 1 comparator | N comparators (all lines) | 2 comparators (per set) |
| Conflict misses | High (many blocks→same line) | None | Low |
| Hardware cost | Low | High (expensive) | Moderate |
| Hit time | Fast | Slow | Moderate |
| Address bits | Tag | Index | Offset | Tag | Offset | Tag | Set | Offset |
| Example | 8KB cache, 16B blocks: 19T, 9I, 4O | 8KB: 19T, 13O | 8KB, 2-way: 19T, 8S, 4O |

**Typical L1 cache**: 32KB, 64B blocks, 8-way set-associative. Best performance/cost tradeoff.

---

## 📂 Original Deep Content

Original CS Core module — 7 subjects with 200+ files covering everything in depth:

| Subject | Link |
|---------|------|
| DSA (500+ problems) | [original/02-CS-Core/DSA/](../original/02-CS-Core/DSA/) |
| Operating Systems | [original/02-CS-Core/OS/](../original/02-CS-Core/OS/) |
| DBMS | [original/02-CS-Core/DBMS/](../original/02-CS-Core/DBMS/) |
| Computer Networks | [original/02-CS-Core/CN/](../original/02-CS-Core/CN/) |
| COA | [original/02-CS-Core/COA/](../original/02-CS-Core/COA/) |
| Software Engineering | [original/02-CS-Core/SE/](../original/02-CS-Core/SE/) |
| Distributed Systems | [original/02-CS-Core/DS/](../original/02-CS-Core/DS/) |

---

## Notes

<div id="page-notes"></div>
