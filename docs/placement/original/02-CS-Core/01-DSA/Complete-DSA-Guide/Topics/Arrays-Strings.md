# 📊 Arrays & Strings - Complete Guide

## 📚 **Theory & Concepts**

### **1. Arrays Fundamentals**

#### **Core Concepts**
```
- Memory Layout: Contiguous memory allocation
- Access Time: O(1) random access by index
- Cache Efficiency: Better due to spatial locality
- Size: Fixed in static arrays, dynamic in resizable arrays
```

#### **Array Operations Complexity**
| Operation | Static Array | Dynamic Array |
|-----------|-------------|---------------|
| Access by index | O(1) | O(1) |
| Search (unsorted) | O(n) | O(n) |
| Search (sorted) | O(log n) | O(log n) |
| Insert at end | O(1) | O(1) amortized |
| Insert at middle | O(n) | O(n) |
| Delete at end | O(1) | O(1) |
| Delete at middle | O(n) | O(n) |

### **2. Strings Fundamentals**

#### **String Representation**
```
- Character Arrays: Null-terminated in C/C++
- Immutable Objects: Java, Python, JavaScript
- Mutable: StringBuilder/StringBuffer in Java
- Unicode Support: UTF-8, UTF-16 encoding
```

---

## 🎯 **Key Patterns & Techniques**

### **1. Two Pointers Technique**

#### **Pattern 1: Opposite Direction**
```python
def reverse_array(arr):
    left, right = 0, len(arr) - 1
    while left < right:
        arr[left], arr[right] = arr[right], arr[left]
        left += 1
        right -= 1
    return arr

# Time: O(n), Space: O(1)
```

#### **Pattern 2: Same Direction (Fast & Slow)**
```python
def remove_duplicates(arr):
    if not arr:
        return 0
    
    slow = 0
    for fast in range(1, len(arr)):
        if arr[fast] != arr[slow]:
            slow += 1
            arr[slow] = arr[fast]
    
    return slow + 1  # Length of unique elements
```

#### **Pattern 3: Two Sum in Sorted Array**
```python
def two_sum_sorted(arr, target):
    left, right = 0, len(arr) - 1
    
    while left < right:
        current_sum = arr[left] + arr[right]
        if current_sum == target:
            return [left, right]
        elif current_sum < target:
            left += 1
        else:
            right -= 1
    
    return [-1, -1]  # Not found
```

### **2. Sliding Window Technique**

#### **Fixed Size Window**
```python
def max_sum_subarray(arr, k):
    if len(arr) < k:
        return -1
    
    # Calculate sum of first window
    window_sum = sum(arr[:k])
    max_sum = window_sum
    
    # Slide the window
    for i in range(k, len(arr)):
        window_sum = window_sum - arr[i-k] + arr[i]
        max_sum = max(max_sum, window_sum)
    
    return max_sum

# Time: O(n), Space: O(1)
```

#### **Variable Size Window**
```python
def longest_substring_without_repeating(s):
    seen = set()
    left = 0
    max_length = 0
    
    for right in range(len(s)):
        while s[right] in seen:
            seen.remove(s[left])
            left += 1
        
        seen.add(s[right])
        max_length = max(max_length, right - left + 1)
    
    return max_length
```

### **3. Prefix Sum Technique**

```python
def build_prefix_sum(arr):
    prefix = [0] * (len(arr) + 1)
    for i in range(len(arr)):
        prefix[i + 1] = prefix[i] + arr[i]
    return prefix

def range_sum_query(prefix, left, right):
    # Sum from index left to right (inclusive)
    return prefix[right + 1] - prefix[left]

# Usage
arr = [1, 3, 5, 7, 9]
prefix = build_prefix_sum(arr)
print(range_sum_query(prefix, 1, 3))  # Sum of [3, 5, 7] = 15
```

---

## 💻 **Essential Problems by Difficulty**

### **Easy Problems (25 Total)**

#### **1. Two Sum** ⭐⭐⭐⭐⭐
```python
# LeetCode #1 - Two Sum
def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []

# Companies: Amazon, Google, Apple, Facebook
# Pattern: Hash Map
# Time: O(n), Space: O(n)
```

#### **2. Best Time to Buy and Sell Stock** ⭐⭐⭐⭐
```python
# LeetCode #121
def max_profit(prices):
    min_price = float('inf')
    max_profit = 0
    
    for price in prices:
        if price < min_price:
            min_price = price
        elif price - min_price > max_profit:
            max_profit = price - min_price
    
    return max_profit

# Companies: Amazon, Microsoft, Apple
# Pattern: Single Pass
# Time: O(n), Space: O(1)
```

#### **3. Contains Duplicate** ⭐⭐⭐
```python
# LeetCode #217
def contains_duplicate(nums):
    return len(nums) != len(set(nums))

# Alternative O(1) space approach for sorted array
def contains_duplicate_sorted(nums):
    nums.sort()
    for i in range(1, len(nums)):
        if nums[i] == nums[i-1]:
            return True
    return False

# Companies: Apple, Amazon
# Pattern: Hash Set / Sorting
```

#### **4. Valid Anagram** ⭐⭐⭐⭐
```python
# LeetCode #242
def is_anagram(s, t):
    if len(s) != len(t):
        return False
    
    char_count = {}
    
    # Count characters in s
    for char in s:
        char_count[char] = char_count.get(char, 0) + 1
    
    # Subtract counts for t
    for char in t:
        if char not in char_count:
            return False
        char_count[char] -= 1
        if char_count[char] == 0:
            del char_count[char]
    
    return len(char_count) == 0

# Companies: Amazon, Facebook, Microsoft
# Pattern: Character Counting
```

#### **5. Valid Palindrome** ⭐⭐⭐
```python
# LeetCode #125
def is_palindrome(s):
    # Clean string: only alphanumeric, lowercase
    cleaned = ''.join(c.lower() for c in s if c.isalnum())
    
    left, right = 0, len(cleaned) - 1
    while left < right:
        if cleaned[left] != cleaned[right]:
            return False
        left += 1
        right -= 1
    
    return True

# Companies: Microsoft, Apple, Facebook
# Pattern: Two Pointers
```

### **Medium Problems (35 Total)**

#### **1. 3Sum** ⭐⭐⭐⭐⭐
```python
# LeetCode #15
def three_sum(nums):
    nums.sort()
    result = []
    
    for i in range(len(nums) - 2):
        # Skip duplicates for first number
        if i > 0 and nums[i] == nums[i-1]:
            continue
        
        left, right = i + 1, len(nums) - 1
        
        while left < right:
            current_sum = nums[i] + nums[left] + nums[right]
            
            if current_sum == 0:
                result.append([nums[i], nums[left], nums[right]])
                
                # Skip duplicates
                while left < right and nums[left] == nums[left + 1]:
                    left += 1
                while left < right and nums[right] == nums[right - 1]:
                    right -= 1
                
                left += 1
                right -= 1
            elif current_sum < 0:
                left += 1
            else:
                right -= 1
    
    return result

# Companies: Amazon, Facebook, Microsoft, Apple
# Pattern: Two Pointers + Sorting
# Time: O(n²), Space: O(1)
```

#### **2. Container With Most Water** ⭐⭐⭐⭐⭐
```python
# LeetCode #11
def max_area(height):
    left, right = 0, len(height) - 1
    max_water = 0
    
    while left < right:
        # Calculate current area
        width = right - left
        current_height = min(height[left], height[right])
        current_area = width * current_height
        max_water = max(max_water, current_area)
        
        # Move pointer with smaller height
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
    
    return max_water

# Companies: Amazon, Google, Facebook
# Pattern: Two Pointers (Greedy)
# Time: O(n), Space: O(1)
```

#### **3. Product of Array Except Self** ⭐⭐⭐⭐⭐
```python
# LeetCode #238
def product_except_self(nums):
    n = len(nums)
    result = [1] * n
    
    # Forward pass: left products
    for i in range(1, n):
        result[i] = result[i-1] * nums[i-1]
    
    # Backward pass: right products
    right_product = 1
    for i in range(n-1, -1, -1):
        result[i] *= right_product
        right_product *= nums[i]
    
    return result

# Companies: Amazon, Facebook, Apple, Microsoft
# Pattern: Prefix/Suffix Arrays
# Time: O(n), Space: O(1) excluding output
```

#### **4. Longest Substring Without Repeating Characters** ⭐⭐⭐⭐⭐
```python
# LeetCode #3
def length_of_longest_substring(s):
    char_set = set()
    left = 0
    max_length = 0
    
    for right in range(len(s)):
        while s[right] in char_set:
            char_set.remove(s[left])
            left += 1
        
        char_set.add(s[right])
        max_length = max(max_length, right - left + 1)
    
    return max_length

# Companies: Amazon, Google, Microsoft, Apple
# Pattern: Sliding Window
# Time: O(n), Space: O(min(m,n)) where m is charset size
```

### **Hard Problems (15 Total)**

#### **1. Median of Two Sorted Arrays** ⭐⭐⭐⭐⭐
```python
# LeetCode #4
def find_median_sorted_arrays(nums1, nums2):
    # Ensure nums1 is smaller
    if len(nums1) > len(nums2):
        nums1, nums2 = nums2, nums1
    
    m, n = len(nums1), len(nums2)
    left, right = 0, m
    
    while left <= right:
        partition1 = (left + right) // 2
        partition2 = (m + n + 1) // 2 - partition1
        
        # Handle edge cases
        max_left1 = float('-inf') if partition1 == 0 else nums1[partition1 - 1]
        min_right1 = float('inf') if partition1 == m else nums1[partition1]
        
        max_left2 = float('-inf') if partition2 == 0 else nums2[partition2 - 1]
        min_right2 = float('inf') if partition2 == n else nums2[partition2]
        
        if max_left1 <= min_right2 and max_left2 <= min_right1:
            # Found correct partition
            if (m + n) % 2 == 0:
                return (max(max_left1, max_left2) + min(min_right1, min_right2)) / 2
            else:
                return max(max_left1, max_left2)
        elif max_left1 > min_right2:
            right = partition1 - 1
        else:
            left = partition1 + 1
    
    raise ValueError("Input arrays are not sorted")

# Companies: Google, Amazon, Microsoft
# Pattern: Binary Search
# Time: O(log(min(m,n))), Space: O(1)
```

#### **2. Trapping Rain Water** ⭐⭐⭐⭐⭐
```python
# LeetCode #42
def trap(height):
    if not height:
        return 0
    
    left, right = 0, len(height) - 1
    left_max, right_max = 0, 0
    water = 0
    
    while left < right:
        if height[left] < height[right]:
            if height[left] >= left_max:
                left_max = height[left]
            else:
                water += left_max - height[left]
            left += 1
        else:
            if height[right] >= right_max:
                right_max = height[right]
            else:
                water += right_max - height[right]
            right -= 1
    
    return water

# Companies: Amazon, Google, Facebook, Apple
# Pattern: Two Pointers
# Time: O(n), Space: O(1)
```

---

## 📋 **Quick Reference Cheat Sheet**

### **Array Patterns**
```python
# Pattern 1: Two Pointers
left, right = 0, len(arr) - 1
while left < right:
    # Process arr[left] and arr[right]
    # Move pointers based on condition

# Pattern 2: Sliding Window
left = 0
for right in range(len(arr)):
    # Expand window
    while condition_violated:
        # Shrink window
        left += 1
    # Update result

# Pattern 3: Prefix Sum
prefix = [0]
for num in arr:
    prefix.append(prefix[-1] + num)

# Pattern 4: Hash Map for Two Sum variants
seen = {}
for i, num in enumerate(arr):
    complement = target - num
    if complement in seen:
        return [seen[complement], i]
    seen[num] = i
```

### **String Patterns**
```python
# Pattern 1: Character Count
from collections import Counter
count = Counter(s)

# Pattern 2: Palindrome Check
def is_palindrome(s):
    return s == s[::-1]

# Pattern 3: Anagram Check
def is_anagram(s1, s2):
    return sorted(s1) == sorted(s2)

# Pattern 4: Substring Search
def find_pattern(text, pattern):
    for i in range(len(text) - len(pattern) + 1):
        if text[i:i+len(pattern)] == pattern:
            return i
    return -1
```

---

## 🏢 **Company-Specific Focus**

### **Google** 🔍
**Most Asked**: Two Sum, Container with Water, 3Sum, Trapping Rain Water
**Focus Areas**: Array manipulation, String algorithms, Two pointers

### **Amazon** 📦  
**Most Asked**: Two Sum, Best Time to Buy Stock, Product Array, 3Sum
**Focus Areas**: Basic array operations, Optimization problems

### **Microsoft** 🖥️
**Most Asked**: Valid Palindrome, Anagram, String matching
**Focus Areas**: String processing, Array searching

### **Apple** 🍎
**Most Asked**: Contains Duplicate, Two Sum variants
**Focus Areas**: Hash tables, Array fundamentals

---

## ⏰ **Time Complexity Quick Guide**

| Algorithm | Best | Average | Worst | Space |
|-----------|------|---------|-------|-------|
| Two Pointers | O(n) | O(n) | O(n) | O(1) |
| Sliding Window | O(n) | O(n) | O(n) | O(1) |
| Hash Map Lookup | O(1) | O(1) | O(n) | O(n) |
| Sorting + Two Pointers | O(n log n) | O(n log n) | O(n log n) | O(1) |
| Prefix Sum Build | O(n) | O(n) | O(n) | O(n) |
| Prefix Sum Query | O(1) | O(1) | O(1) | O(1) |

---

**🎯 Practice Schedule**: Solve 2-3 array problems daily, focus on different patterns each week.
