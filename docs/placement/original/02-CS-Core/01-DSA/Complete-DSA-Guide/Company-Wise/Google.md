# 🔍 Google DSA Problems Collection

## 📊 **Problem Distribution**
- **Total Problems**: 120+
- **Easy**: 35 problems (29%)
- **Medium**: 65 problems (54%) 
- **Hard**: 20 problems (17%)

---

## 🎯 **Google's Focus Areas**

### **Top Priority Topics** (70% of problems)
1. **Arrays & Strings** (25 problems)
2. **Trees & Graphs** (30 problems)  
3. **Dynamic Programming** (20 problems)
4. **Sorting & Searching** (15 problems)

### **Secondary Topics** (30% of problems)
1. **Hash Tables** (10 problems)
2. **Linked Lists** (8 problems)
3. **Stacks & Queues** (7 problems)
4. **Advanced DS** (5 problems)

---

## 🏆 **Google's Most Asked Problems**

### **Arrays & Strings** ⭐⭐⭐⭐⭐

#### **1. Two Sum** (LeetCode #1) - Easy
```python
def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []

# Google Interview Frequency: Very High
# Follow-up: What if array is sorted? (Two pointers)
# Follow-up: What if we need all pairs? (Modified approach)
```

#### **2. Container With Most Water** (LeetCode #11) - Medium
```python
def max_area(height):
    left, right = 0, len(height) - 1
    max_water = 0
    
    while left < right:
        width = right - left
        current_height = min(height[left], height[right])
        max_water = max(max_water, width * current_height)
        
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
    
    return max_water

# Google Interview Notes:
# - Often asked in phone screens
# - Explain why greedy approach works
# - Discuss time complexity optimization
```

#### **3. Longest Substring Without Repeating Characters** (LeetCode #3) - Medium
```python
def length_of_longest_substring(s):
    char_map = {}
    left = 0
    max_length = 0
    
    for right, char in enumerate(s):
        if char in char_map and char_map[char] >= left:
            left = char_map[char] + 1
        
        char_map[char] = right
        max_length = max(max_length, right - left + 1)
    
    return max_length

# Google Follow-ups:
# - Handle Unicode characters
# - Memory-efficient for very long strings
# - Parallel processing approach
```

#### **4. Group Anagrams** (LeetCode #49) - Medium
```python
def group_anagrams(strs):
    from collections import defaultdict
    
    anagram_groups = defaultdict(list)
    
    for s in strs:
        # Sort characters as key
        key = ''.join(sorted(s))
        anagram_groups[key].append(s)
    
    return list(anagram_groups.values())

# Alternative: Character count as key
def group_anagrams_optimized(strs):
    from collections import defaultdict
    
    anagram_groups = defaultdict(list)
    
    for s in strs:
        count = [0] * 26
        for char in s:
            count[ord(char) - ord('a')] += 1
        
        key = tuple(count)
        anagram_groups[key].append(s)
    
    return list(anagram_groups.values())

# Google Interview Notes:
# - Discuss both sorting and counting approaches
# - Handle edge cases (empty strings, single character)
# - Scale considerations for large datasets
```

### **Trees & Binary Search** ⭐⭐⭐⭐⭐

#### **5. Binary Tree Maximum Path Sum** (LeetCode #124) - Hard
```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def max_path_sum(root):
    def max_gain(node):
        nonlocal max_sum
        if not node:
            return 0
        
        # Maximum gain from left and right subtrees
        left_gain = max(max_gain(node.left), 0)
        right_gain = max(max_gain(node.right), 0)
        
        # Price of new path through current node
        current_max = node.val + left_gain + right_gain
        max_sum = max(max_sum, current_max)
        
        # Return max gain if we continue path through parent
        return node.val + max(left_gain, right_gain)
    
    max_sum = float('-inf')
    max_gain(root)
    return max_sum

# Google Interview Focus:
# - Explain recursive thinking
# - Handle negative values correctly
# - Discuss tree traversal strategies
```

#### **6. Serialize and Deserialize Binary Tree** (LeetCode #297) - Hard
```python
class Codec:
    def serialize(self, root):
        def preorder(node):
            if not node:
                vals.append('#')
            else:
                vals.append(str(node.val))
                preorder(node.left)
                preorder(node.right)
        
        vals = []
        preorder(root)
        return ','.join(vals)
    
    def deserialize(self, data):
        def build_tree():
            val = next(vals)
            if val == '#':
                return None
            
            node = TreeNode(int(val))
            node.left = build_tree()
            node.right = build_tree()
            return node
        
        vals = iter(data.split(','))
        return build_tree()

# Google Interview Notes:
# - Multiple serialization methods (preorder, level-order)
# - Handle large trees efficiently
# - Discuss space complexity trade-offs
```

### **Dynamic Programming** ⭐⭐⭐⭐

#### **7. Word Break** (LeetCode #139) - Medium
```python
def word_break(s, word_dict):
    word_set = set(word_dict)
    dp = [False] * (len(s) + 1)
    dp[0] = True
    
    for i in range(1, len(s) + 1):
        for j in range(i):
            if dp[j] and s[j:i] in word_set:
                dp[i] = True
                break
    
    return dp[len(s)]

# Optimized with Trie
class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_word = False

def word_break_trie(s, word_dict):
    # Build Trie
    root = TrieNode()
    for word in word_dict:
        node = root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_word = True
    
    dp = [False] * (len(s) + 1)
    dp[0] = True
    
    for i in range(len(s)):
        if not dp[i]:
            continue
        
        node = root
        for j in range(i, len(s)):
            char = s[j]
            if char not in node.children:
                break
            
            node = node.children[char]
            if node.is_word:
                dp[j + 1] = True
    
    return dp[len(s)]

# Google Interview Focus:
# - Both DP and Trie solutions
# - Space optimization techniques
# - Return actual word breakdown (follow-up)
```

### **Graph Algorithms** ⭐⭐⭐⭐

#### **8. Number of Islands** (LeetCode #200) - Medium
```python
def num_islands(grid):
    if not grid or not grid[0]:
        return 0
    
    rows, cols = len(grid), len(grid[0])
    islands = 0
    
    def dfs(r, c):
        if (r < 0 or r >= rows or c < 0 or c >= cols or 
            grid[r][c] != '1'):
            return
        
        grid[r][c] = '0'  # Mark as visited
        
        # Explore all 4 directions
        directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]
        for dr, dc in directions:
            dfs(r + dr, c + dc)
    
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':
                islands += 1
                dfs(r, c)
    
    return islands

# BFS Alternative
from collections import deque

def num_islands_bfs(grid):
    if not grid or not grid[0]:
        return 0
    
    rows, cols = len(grid), len(grid[0])
    islands = 0
    
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':
                islands += 1
                queue = deque([(r, c)])
                grid[r][c] = '0'
                
                while queue:
                    curr_r, curr_c = queue.popleft()
                    directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]
                    
                    for dr, dc in directions:
                        nr, nc = curr_r + dr, curr_c + dc
                        if (0 <= nr < rows and 0 <= nc < cols and 
                            grid[nr][nc] == '1'):
                            queue.append((nr, nc))
                            grid[nr][nc] = '0'
    
    return islands

# Google Interview Notes:
# - Discuss both DFS and BFS approaches
# - Handle edge cases (empty grid, single cell)
# - Follow-up: Count island sizes, largest island
```

---

## 📈 **Google Interview Patterns**

### **Pattern 1: System Design Thinking**
Google often asks how to scale algorithms:
```python
# Example: Two Sum for large datasets
# 1. Single machine optimization
# 2. Distributed processing
# 3. Memory vs computation trade-offs
# 4. Real-time vs batch processing
```

### **Pattern 2: Follow-up Questions**
Common Google follow-ups:
- "What if the input is very large?"
- "How would you handle this in a distributed system?"
- "Can you optimize for space?"
- "What about streaming data?"

### **Pattern 3: Code Quality Focus**
Google emphasizes:
- Clean, readable code
- Proper error handling
- Edge case consideration
- Time/space complexity analysis

---

## 🎯 **Google-Specific Preparation Strategy**

### **Week 1-2: Core Algorithms**
- Master binary search variations
- Tree traversal algorithms (DFS, BFS)
- Graph algorithms (topological sort, shortest path)
- Dynamic programming patterns

### **Week 3-4: Advanced Topics**
- System design fundamentals
- Scaling algorithms
- Memory optimization
- Parallel processing concepts

### **Week 5-6: Mock Interviews**
- Practice explaining solutions clearly
- Handle follow-up questions
- Optimize code iteratively
- Discuss trade-offs

---

## 📋 **Google's Complete Problem List**

### **Arrays (12 problems)**
1. Two Sum (Easy) ⭐⭐⭐⭐⭐
2. Container With Most Water (Medium) ⭐⭐⭐⭐⭐
3. 3Sum (Medium) ⭐⭐⭐⭐
4. Product of Array Except Self (Medium) ⭐⭐⭐⭐
5. Maximum Subarray (Easy) ⭐⭐⭐
6. Search in Rotated Sorted Array (Medium) ⭐⭐⭐
7. Find Minimum in Rotated Sorted Array (Medium) ⭐⭐⭐
8. Best Time to Buy and Sell Stock (Easy) ⭐⭐⭐
9. Trapping Rain Water (Hard) ⭐⭐⭐⭐⭐
10. Sliding Window Maximum (Hard) ⭐⭐⭐⭐
11. Median of Two Sorted Arrays (Hard) ⭐⭐⭐⭐⭐
12. First Missing Positive (Hard) ⭐⭐⭐

### **Strings (8 problems)**
1. Longest Substring Without Repeating Characters (Medium) ⭐⭐⭐⭐⭐
2. Group Anagrams (Medium) ⭐⭐⭐⭐
3. Valid Palindrome (Easy) ⭐⭐⭐
4. Longest Palindromic Substring (Medium) ⭐⭐⭐⭐
5. String to Integer (atoi) (Medium) ⭐⭐⭐
6. Implement strStr() (Easy) ⭐⭐
7. Valid Parentheses (Easy) ⭐⭐⭐
8. Generate Parentheses (Medium) ⭐⭐⭐⭐

### **Trees (15 problems)**
1. Binary Tree Maximum Path Sum (Hard) ⭐⭐⭐⭐⭐
2. Serialize and Deserialize Binary Tree (Hard) ⭐⭐⭐⭐⭐
3. Lowest Common Ancestor of Binary Tree (Medium) ⭐⭐⭐⭐
4. Binary Tree Level Order Traversal (Medium) ⭐⭐⭐
5. Validate Binary Search Tree (Medium) ⭐⭐⭐⭐
6. Symmetric Tree (Easy) ⭐⭐⭐
7. Maximum Depth of Binary Tree (Easy) ⭐⭐
8. Same Tree (Easy) ⭐⭐
9. Invert Binary Tree (Easy) ⭐⭐⭐
10. Binary Tree Zigzag Level Order Traversal (Medium) ⭐⭐⭐
11. Construct Binary Tree from Preorder and Inorder (Medium) ⭐⭐⭐⭐
12. Path Sum II (Medium) ⭐⭐⭐
13. Flatten Binary Tree to Linked List (Medium) ⭐⭐⭐
14. Populating Next Right Pointers (Medium) ⭐⭐⭐
15. Binary Tree Right Side View (Medium) ⭐⭐⭐

---

## 🏆 **Success Tips for Google Interviews**

### **Before the Interview**
1. **Practice on Google Docs** - Most Google interviews use Google Docs
2. **Study Google's Engineering Culture** - Understand their values
3. **Prepare System Design** - Even for SWE roles, basic understanding helps
4. **Mock Interviews** - Practice with Googlers if possible

### **During the Interview**
1. **Think Out Loud** - Explain your thought process
2. **Ask Clarifying Questions** - Show you understand requirements
3. **Start Simple** - Build complexity gradually
4. **Optimize Iteratively** - Show different approaches
5. **Test Your Code** - Walk through examples

### **Google-Specific Behaviors**
- **"Googleyness"** - Collaboration, intellectual humility
- **Technical Excellence** - Deep understanding of fundamentals
- **Problem Solving** - Structured approach to complex problems
- **Leadership** - Even junior roles show leadership potential

---

**🎯 Final Tip**: Google values depth over breadth. Master fewer topics thoroughly rather than knowing many topics superficially!
