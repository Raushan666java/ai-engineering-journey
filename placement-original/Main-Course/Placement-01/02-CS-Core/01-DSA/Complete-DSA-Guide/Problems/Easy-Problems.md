# 📘 LeetCode Easy Problems - Complete Collection

## 📊 **Problem Distribution by Topic**
- **Arrays**: 25 problems
- **Strings**: 20 problems  
- **Linked Lists**: 15 problems
- **Trees**: 20 problems
- **Hash Tables**: 20 problems
- **Math**: 15 problems
- **Two Pointers**: 10 problems
- **Others**: 45 problems

**Total**: 170 Easy Problems

---

## 🎯 **Must-Solve Top 50 Easy Problems**

### **Arrays (15 problems)** 📊

#### **1. Two Sum** - LC #1 ⭐⭐⭐⭐⭐
```python
def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []

# Companies: Amazon, Google, Apple, Facebook, Microsoft
# Pattern: Hash Map
# Time: O(n), Space: O(n)
# Follow-up: What if sorted? Use two pointers
```

#### **2. Best Time to Buy and Sell Stock** - LC #121 ⭐⭐⭐⭐
```python
def max_profit(prices):
    min_price = float('inf')
    max_profit = 0
    
    for price in prices:
        if price < min_price:
            min_price = price
        elif price - min_price > max_profit:
            max_profit = price - min_price
    
    return max_profit

# Companies: Amazon, Microsoft, Apple, Google
# Pattern: Single Pass
# Time: O(n), Space: O(1)
```

#### **3. Contains Duplicate** - LC #217 ⭐⭐⭐
```python
def contains_duplicate(nums):
    return len(nums) != len(set(nums))

# Alternative: O(1) space for sorted input
def contains_duplicate_sort(nums):
    nums.sort()
    for i in range(1, len(nums)):
        if nums[i] == nums[i-1]:
            return True
    return False

# Companies: Apple, Amazon, Microsoft
# Pattern: Hash Set / Sorting
```

#### **4. Maximum Subarray** - LC #53 ⭐⭐⭐⭐
```python
def max_subarray(nums):
    max_sum = current_sum = nums[0]
    
    for num in nums[1:]:
        current_sum = max(num, current_sum + num)
        max_sum = max(max_sum, current_sum)
    
    return max_sum

# Kadane's Algorithm
# Companies: Amazon, Microsoft, LinkedIn
# Pattern: Dynamic Programming
# Time: O(n), Space: O(1)
```

#### **5. Merge Sorted Array** - LC #88 ⭐⭐⭐
```python
def merge(nums1, m, nums2, n):
    # Start from the end
    i, j, k = m - 1, n - 1, m + n - 1
    
    while i >= 0 and j >= 0:
        if nums1[i] > nums2[j]:
            nums1[k] = nums1[i]
            i -= 1
        else:
            nums1[k] = nums2[j]
            j -= 1
        k -= 1
    
    # Copy remaining elements from nums2
    while j >= 0:
        nums1[k] = nums2[j]
        j -= 1
        k -= 1

# Companies: Facebook, Microsoft, Amazon
# Pattern: Two Pointers (from end)
# Time: O(m+n), Space: O(1)
```

### **Strings (10 problems)** 📝

#### **6. Valid Anagram** - LC #242 ⭐⭐⭐⭐
```python
def is_anagram(s, t):
    if len(s) != len(t):
        return False
    
    char_count = {}
    
    for char in s:
        char_count[char] = char_count.get(char, 0) + 1
    
    for char in t:
        if char not in char_count:
            return False
        char_count[char] -= 1
        if char_count[char] == 0:
            del char_count[char]
    
    return len(char_count) == 0

# Alternative: Using Counter
from collections import Counter
def is_anagram_counter(s, t):
    return Counter(s) == Counter(t)

# Companies: Amazon, Facebook, Microsoft
# Pattern: Character Counting
```

#### **7. Valid Palindrome** - LC #125 ⭐⭐⭐
```python
def is_palindrome(s):
    # Clean string
    cleaned = ''.join(c.lower() for c in s if c.isalnum())
    
    left, right = 0, len(cleaned) - 1
    while left < right:
        if cleaned[left] != cleaned[right]:
            return False
        left += 1
        right -= 1
    
    return True

# Space optimized - no extra string
def is_palindrome_optimized(s):
    left, right = 0, len(s) - 1
    
    while left < right:
        while left < right and not s[left].isalnum():
            left += 1
        while left < right and not s[right].isalnum():
            right -= 1
        
        if s[left].lower() != s[right].lower():
            return False
        
        left += 1
        right -= 1
    
    return True

# Companies: Microsoft, Apple, Facebook
# Pattern: Two Pointers
```

#### **8. First Unique Character** - LC #387 ⭐⭐⭐
```python
def first_uniq_char(s):
    char_count = {}
    
    # Count frequency
    for char in s:
        char_count[char] = char_count.get(char, 0) + 1
    
    # Find first unique
    for i, char in enumerate(s):
        if char_count[char] == 1:
            return i
    
    return -1

# Companies: Amazon, Microsoft, Google
# Pattern: Hash Map
# Time: O(n), Space: O(1) - at most 26 characters
```

#### **9. Valid Parentheses** - LC #20 ⭐⭐⭐⭐
```python
def is_valid(s):
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}
    
    for char in s:
        if char in mapping:
            if not stack or stack.pop() != mapping[char]:
                return False
        else:
            stack.append(char)
    
    return not stack

# Companies: Amazon, Microsoft, Facebook, Google
# Pattern: Stack
# Time: O(n), Space: O(n)
```

#### **10. Implement strStr()** - LC #28 ⭐⭐
```python
def str_str(haystack, needle):
    if not needle:
        return 0
    
    for i in range(len(haystack) - len(needle) + 1):
        if haystack[i:i+len(needle)] == needle:
            return i
    
    return -1

# KMP Algorithm (Advanced)
def str_str_kmp(haystack, needle):
    if not needle:
        return 0
    
    # Build failure function
    def build_failure_function(pattern):
        failure = [0] * len(pattern)
        j = 0
        
        for i in range(1, len(pattern)):
            while j > 0 and pattern[i] != pattern[j]:
                j = failure[j - 1]
            
            if pattern[i] == pattern[j]:
                j += 1
            
            failure[i] = j
        
        return failure
    
    failure = build_failure_function(needle)
    i = j = 0
    
    while i < len(haystack):
        if haystack[i] == needle[j]:
            i += 1
            j += 1
        
        if j == len(needle):
            return i - j
        elif i < len(haystack) and haystack[i] != needle[j]:
            if j != 0:
                j = failure[j - 1]
            else:
                i += 1
    
    return -1

# Companies: Facebook, Google, Amazon
# Pattern: String Matching
```

### **Linked Lists (8 problems)** 🔗

#### **11. Reverse Linked List** - LC #206 ⭐⭐⭐⭐
```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverse_list(head):
    prev = None
    current = head
    
    while current:
        next_temp = current.next
        current.next = prev
        prev = current
        current = next_temp
    
    return prev

# Recursive approach
def reverse_list_recursive(head):
    if not head or not head.next:
        return head
    
    new_head = reverse_list_recursive(head.next)
    head.next.next = head
    head.next = None
    
    return new_head

# Companies: Amazon, Microsoft, Apple, Facebook
# Pattern: Iterative/Recursive
# Time: O(n), Space: O(1)/O(n)
```

#### **12. Merge Two Sorted Lists** - LC #21 ⭐⭐⭐⭐
```python
def merge_two_lists(list1, list2):
    dummy = ListNode(0)
    current = dummy
    
    while list1 and list2:
        if list1.val <= list2.val:
            current.next = list1
            list1 = list1.next
        else:
            current.next = list2
            list2 = list2.next
        current = current.next
    
    # Append remaining nodes
    current.next = list1 or list2
    
    return dummy.next

# Recursive approach
def merge_two_lists_recursive(list1, list2):
    if not list1:
        return list2
    if not list2:
        return list1
    
    if list1.val <= list2.val:
        list1.next = merge_two_lists_recursive(list1.next, list2)
        return list1
    else:
        list2.next = merge_two_lists_recursive(list1, list2.next)
        return list2

# Companies: Amazon, Facebook, Microsoft
# Pattern: Two Pointers/Recursion
```

#### **13. Linked List Cycle** - LC #141 ⭐⭐⭐⭐
```python
def has_cycle(head):
    if not head or not head.next:
        return False
    
    slow = fast = head
    
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        
        if slow == fast:
            return True
    
    return False

# Companies: Amazon, Microsoft, Facebook
# Pattern: Fast & Slow Pointers (Floyd's Algorithm)
# Time: O(n), Space: O(1)
```

### **Trees (10 problems)** 🌳

#### **14. Maximum Depth of Binary Tree** - LC #104 ⭐⭐
```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def max_depth(root):
    if not root:
        return 0
    
    return max(max_depth(root.left), max_depth(root.right)) + 1

# Iterative BFS approach
from collections import deque

def max_depth_iterative(root):
    if not root:
        return 0
    
    queue = deque([(root, 1)])
    max_d = 0
    
    while queue:
        node, depth = queue.popleft()
        max_d = max(max_d, depth)
        
        if node.left:
            queue.append((node.left, depth + 1))
        if node.right:
            queue.append((node.right, depth + 1))
    
    return max_d

# Companies: LinkedIn, Amazon, Microsoft
# Pattern: Tree Traversal
```

#### **15. Same Tree** - LC #100 ⭐⭐
```python
def is_same_tree(p, q):
    if not p and not q:
        return True
    if not p or not q:
        return False
    
    return (p.val == q.val and 
            is_same_tree(p.left, q.left) and 
            is_same_tree(p.right, q.right))

# Iterative approach
def is_same_tree_iterative(p, q):
    stack = [(p, q)]
    
    while stack:
        node1, node2 = stack.pop()
        
        if not node1 and not node2:
            continue
        if not node1 or not node2:
            return False
        if node1.val != node2.val:
            return False
        
        stack.append((node1.left, node2.left))
        stack.append((node1.right, node2.right))
    
    return True

# Companies: Google, Amazon, Microsoft
# Pattern: Tree Comparison
```

#### **16. Invert Binary Tree** - LC #226 ⭐⭐⭐
```python
def invert_tree(root):
    if not root:
        return None
    
    # Swap children
    root.left, root.right = root.right, root.left
    
    # Recursively invert subtrees
    invert_tree(root.left)
    invert_tree(root.right)
    
    return root

# Iterative approach
def invert_tree_iterative(root):
    if not root:
        return None
    
    stack = [root]
    
    while stack:
        node = stack.pop()
        
        # Swap children
        node.left, node.right = node.right, node.left
        
        if node.left:
            stack.append(node.left)
        if node.right:
            stack.append(node.right)
    
    return root

# Companies: Google, Facebook, Amazon
# Pattern: Tree Modification
# Famous for: "Google: 90% of our engineers use the software you wrote (Homebrew), but you can't invert a binary tree on a whiteboard so f*** off."
```

---

## 📋 **Complete Easy Problems List (170 Total)**

### **Arrays (25 problems)**
1. Two Sum (LC #1) ⭐⭐⭐⭐⭐
2. Best Time to Buy and Sell Stock (LC #121) ⭐⭐⭐⭐
3. Contains Duplicate (LC #217) ⭐⭐⭐
4. Maximum Subarray (LC #53) ⭐⭐⭐⭐
5. Merge Sorted Array (LC #88) ⭐⭐⭐
6. Plus One (LC #66) ⭐⭐
7. Move Zeroes (LC #283) ⭐⭐⭐
8. Remove Duplicates from Sorted Array (LC #26) ⭐⭐
9. Remove Element (LC #27) ⭐⭐
10. Search Insert Position (LC #35) ⭐⭐
11. Majority Element (LC #169) ⭐⭐⭐
12. Pascal's Triangle (LC #118) ⭐⭐
13. Pascal's Triangle II (LC #119) ⭐⭐
14. Single Number (LC #136) ⭐⭐⭐
15. Intersection of Two Arrays II (LC #350) ⭐⭐
16. Valid Mountain Array (LC #941) ⭐⭐
17. Find All Numbers Disappeared in Array (LC #448) ⭐⭐⭐
18. Third Maximum Number (LC #414) ⭐⭐
19. Assign Cookies (LC #455) ⭐⭐
20. Array Partition I (LC #561) ⭐⭐
21. Reshape the Matrix (LC #566) ⭐⭐
22. Max Consecutive Ones (LC #485) ⭐⭐
23. Find Pivot Index (LC #724) ⭐⭐
24. Largest Number At Least Twice (LC #747) ⭐⭐
25. Shortest Unsorted Continuous Subarray (LC #581) ⭐⭐⭐

### **Strings (20 problems)**
1. Valid Anagram (LC #242) ⭐⭐⭐⭐
2. Valid Palindrome (LC #125) ⭐⭐⭐
3. First Unique Character (LC #387) ⭐⭐⭐
4. Valid Parentheses (LC #20) ⭐⭐⭐⭐
5. Implement strStr() (LC #28) ⭐⭐
6. Length of Last Word (LC #58) ⭐⭐
7. Reverse String (LC #344) ⭐⭐
8. Reverse Words in String III (LC #557) ⭐⭐
9. Detect Capital (LC #520) ⭐⭐
10. Student Attendance Record I (LC #551) ⭐⭐
11. Reverse Vowels of String (LC #345) ⭐⭐
12. Ransom Note (LC #383) ⭐⭐
13. First Bad Version (LC #278) ⭐⭐
14. Count and Say (LC #38) ⭐⭐
15. Longest Common Prefix (LC #14) ⭐⭐⭐
16. Roman to Integer (LC #13) ⭐⭐⭐
17. Valid Palindrome II (LC #680) ⭐⭐⭐
18. Jewels and Stones (LC #771) ⭐⭐
19. To Lower Case (LC #709) ⭐
20. Unique Morse Code Words (LC #804) ⭐⭐

### **Linked Lists (15 problems)**
1. Reverse Linked List (LC #206) ⭐⭐⭐⭐
2. Merge Two Sorted Lists (LC #21) ⭐⭐⭐⭐
3. Linked List Cycle (LC #141) ⭐⭐⭐⭐
4. Remove Linked List Elements (LC #203) ⭐⭐
5. Middle of Linked List (LC #876) ⭐⭐⭐
6. Palindrome Linked List (LC #234) ⭐⭐⭐
7. Intersection of Two Linked Lists (LC #160) ⭐⭐⭐
8. Remove Duplicates from Sorted List (LC #83) ⭐⭐
9. Convert Binary Number in Linked List (LC #1290) ⭐⭐
10. Delete Node in Linked List (LC #237) ⭐⭐
11. Design Linked List (LC #707) ⭐⭐⭐
12. Merge Nodes in Between Zeros (LC #2181) ⭐⭐
13. Maximum Twin Sum of Linked List (LC #2130) ⭐⭐
14. Swapping Nodes in Linked List (LC #1721) ⭐⭐
15. Design Hashset (LC #705) ⭐⭐

### **Trees (20 problems)**
1. Maximum Depth of Binary Tree (LC #104) ⭐⭐
2. Same Tree (LC #100) ⭐⭐
3. Invert Binary Tree (LC #226) ⭐⭐⭐
4. Symmetric Tree (LC #101) ⭐⭐⭐
5. Binary Tree Paths (LC #257) ⭐⭐
6. Sum of Left Leaves (LC #404) ⭐⭐
7. Path Sum (LC #112) ⭐⭐⭐
8. Minimum Depth of Binary Tree (LC #111) ⭐⭐
9. Balanced Binary Tree (LC #110) ⭐⭐⭐
10. Diameter of Binary Tree (LC #543) ⭐⭐⭐
11. Binary Tree Level Order Traversal II (LC #107) ⭐⭐
12. Average of Levels in Binary Tree (LC #637) ⭐⭐
13. Two Sum IV - Input is BST (LC #653) ⭐⭐
14. Lowest Common Ancestor of BST (LC #235) ⭐⭐⭐
15. Convert Sorted Array to BST (LC #108) ⭐⭐⭐
16. Search in BST (LC #700) ⭐⭐
17. Insert into BST (LC #701) ⭐⭐
18. Range Sum of BST (LC #938) ⭐⭐
19. Increasing Order Search Tree (LC #897) ⭐⭐
20. Merge Two Binary Trees (LC #617) ⭐⭐⭐

---

## 🎯 **Practice Strategy for Easy Problems**

### **Week 1-2: Foundation Building**
- Solve 5-7 problems daily
- Focus on Arrays and Strings
- Master basic patterns (Two Pointers, Hash Maps)

### **Week 3-4: Data Structures**
- Linked Lists and Trees
- 4-5 problems daily
- Understand traversal techniques

### **Week 5-6: Mixed Practice**
- All topics combined
- 3-4 problems daily
- Focus on speed and accuracy

### **Week 7-8: Company Focus**
- Solve company-specific easy problems
- Timed practice sessions
- Mock interview preparation

---

## 📊 **Difficulty Progression**

### **Beginner Path** (First 50 problems)
Start with these topics in order:
1. Arrays (basic operations)
2. Strings (simple manipulation)
3. Hash Tables (counting, lookup)
4. Two Pointers (basic patterns)

### **Intermediate Path** (Next 70 problems)
5. Linked Lists (basic operations)
6. Trees (traversal, basic properties)
7. Stacks/Queues (basic operations)
8. Binary Search (basic)

### **Advanced Easy** (Last 50 problems)
9. Tree algorithms (LCA, paths)
10. Graph basics (BFS/DFS)
11. Advanced array techniques
12. String algorithms

---

**🎯 Success Formula**: Solve consistently + Understand patterns + Code cleanly = Easy Problem Mastery!

**⏰ Time Target**: 10-15 minutes per easy problem in interviews
