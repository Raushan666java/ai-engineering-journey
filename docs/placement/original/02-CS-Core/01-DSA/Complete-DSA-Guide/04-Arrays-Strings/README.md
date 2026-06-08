# 🎯 **Arrays & Strings - Complete Guide**

## 📚 **Table of Contents**
1. [Arrays Fundamentals](#arrays-fundamentals)
2. [String Fundamentals](#string-fundamentals)
3. [Essential Array Techniques](#array-techniques)
4. [Essential String Techniques](#string-techniques)
5. [Love Babbar's Array Problems](#love-babbar-arrays)
6. [Striver's Array Problems](#striver-arrays)
7. [Company-Wise Problems](#company-problems)
8. [Practice Problems by Difficulty](#practice-by-difficulty)
9. [Optimization Techniques](#optimization-techniques)
10. [Cheat Sheet](#cheat-sheet)

---

## 🔢 **Arrays Fundamentals** {#arrays-fundamentals}

### **What are Arrays?**
Arrays are linear data structures that store elements of the same data type in contiguous memory locations.

### **Key Properties**
```
✅ Fixed Size (in most languages)
✅ Random Access - O(1) access time
✅ Cache Friendly - elements stored contiguously
✅ Index-based access starting from 0
```

### **Basic Array Operations**

#### **1. Array Declaration and Initialization**
```python
# Python
arr = [1, 2, 3, 4, 5]           # List (dynamic array)
arr = [0] * n                   # Initialize with zeros
arr = list(range(1, 6))         # [1, 2, 3, 4, 5]

# Java
int[] arr = new int[5];         // Declaration
int[] arr = {1, 2, 3, 4, 5};    // Initialization
```

#### **2. Basic Operations**
```python
def array_operations():
    arr = [1, 2, 3, 4, 5]
    
    # Access - O(1)
    first = arr[0]
    last = arr[-1]  # Python only
    
    # Insertion - O(n) worst case
    arr.insert(2, 10)   # Insert 10 at index 2
    arr.append(6)       # Add at end - O(1) amortized
    
    # Deletion - O(n) worst case
    arr.remove(10)      # Remove first occurrence
    popped = arr.pop()  # Remove and return last element
    
    # Search - O(n)
    index = arr.index(3)        # Find index of element
    exists = 3 in arr           # Check if element exists
    
    # Update - O(1)
    arr[0] = 100
    
    return arr
```

### **Time Complexity Summary**
| Operation | Time Complexity | Notes |
|-----------|----------------|-------|
| Access | O(1) | Direct index access |
| Search | O(n) | Linear search |
| Insertion | O(n) | Need to shift elements |
| Deletion | O(n) | Need to shift elements |
| Append (end) | O(1) amortized | Dynamic arrays |

---

## 📝 **String Fundamentals** {#string-fundamentals}

### **What are Strings?**
Strings are sequences of characters, typically implemented as arrays of characters.

### **Key Properties**
```
✅ Immutable in many languages (Python, Java)
✅ Character array representation
✅ Various encoding schemes (ASCII, UTF-8)
✅ Rich built-in methods for manipulation
```

### **Basic String Operations**

#### **1. String Declaration and Basic Operations**
```python
def string_operations():
    s = "Hello World"
    
    # Access - O(1)
    first_char = s[0]           # 'H'
    last_char = s[-1]           # 'd'
    
    # Length - O(1)
    length = len(s)             # 11
    
    # Substring - O(k) where k is substring length
    substr = s[1:5]             # "ello"
    substr = s[:5]              # "Hello"
    substr = s[6:]              # "World"
    
    # Concatenation - O(n + m)
    new_str = s + " Python"     # "Hello World Python"
    
    # Case operations - O(n)
    upper = s.upper()           # "HELLO WORLD"
    lower = s.lower()           # "hello world"
    
    # Search - O(n)
    index = s.find("World")     # 6
    exists = "World" in s       # True
    
    # Split - O(n)
    words = s.split()           # ["Hello", "World"]
    
    return s
```

#### **2. String Traversal Patterns**
```python
# Pattern 1: Character by character
def traverse_string(s):
    for char in s:
        print(char)
    
    # With index
    for i, char in enumerate(s):
        print(f"Index {i}: {char}")

# Pattern 2: Two pointers
def two_pointer_traversal(s):
    left, right = 0, len(s) - 1
    while left < right:
        print(f"Left: {s[left]}, Right: {s[right]}")
        left += 1
        right -= 1

# Pattern 3: Sliding window
def sliding_window(s, window_size):
    for i in range(len(s) - window_size + 1):
        window = s[i:i + window_size]
        print(f"Window: {window}")
```

---

## 🎯 **Essential Array Techniques** {#array-techniques}

### **1. Two Pointers Technique**

#### **Problem: Two Sum in Sorted Array**
```python
def two_sum_sorted(arr, target):
    """
    Find two numbers that add up to target in sorted array
    Time: O(n), Space: O(1)
    """
    left, right = 0, len(arr) - 1
    
    while left < right:
        current_sum = arr[left] + arr[right]
        
        if current_sum == target:
            return [left, right]
        elif current_sum < target:
            left += 1
        else:
            right -= 1
    
    return [-1, -1]

# Example usage
arr = [1, 2, 3, 4, 6]
target = 6
result = two_sum_sorted(arr, target)  # [1, 3] -> arr[1] + arr[3] = 2 + 4 = 6
```

#### **Problem: Remove Duplicates from Sorted Array**
```python
def remove_duplicates(arr):
    """
    Remove duplicates in-place from sorted array
    Time: O(n), Space: O(1)
    """
    if not arr:
        return 0
    
    slow = 0
    for fast in range(1, len(arr)):
        if arr[fast] != arr[slow]:
            slow += 1
            arr[slow] = arr[fast]
    
    return slow + 1  # Length of array without duplicates

# Example
arr = [1, 1, 2, 2, 3, 4, 4, 5]
length = remove_duplicates(arr)
print(arr[:length])  # [1, 2, 3, 4, 5]
```

### **2. Sliding Window Technique**

#### **Problem: Maximum Sum Subarray of Size K**
```python
def max_sum_subarray_k(arr, k):
    """
    Find maximum sum of subarray of size k
    Time: O(n), Space: O(1)
    """
    if len(arr) < k:
        return -1
    
    # Calculate sum of first window
    window_sum = sum(arr[:k])
    max_sum = window_sum
    
    # Slide the window
    for i in range(k, len(arr)):
        window_sum = window_sum - arr[i - k] + arr[i]
        max_sum = max(max_sum, window_sum)
    
    return max_sum

# Example
arr = [1, 4, 2, 10, 23, 3, 1, 0, 20]
k = 4
result = max_sum_subarray_k(arr, k)  # 39 (10+23+3+1)
```

#### **Problem: Longest Substring Without Repeating Characters**
```python
def longest_unique_substring(s):
    """
    Find length of longest substring without repeating characters
    Time: O(n), Space: O(min(m, n)) where m is charset size
    """
    char_index = {}
    max_length = 0
    start = 0
    
    for end in range(len(s)):
        if s[end] in char_index and char_index[s[end]] >= start:
            start = char_index[s[end]] + 1
        
        char_index[s[end]] = end
        max_length = max(max_length, end - start + 1)
    
    return max_length

# Example
s = "abcabcbb"
result = longest_unique_substring(s)  # 3 ("abc")
```

### **3. Prefix Sum Technique**

#### **Problem: Range Sum Query**
```python
class PrefixSum:
    """
    Efficient range sum queries using prefix sum
    Preprocessing: O(n), Query: O(1)
    """
    def __init__(self, arr):
        self.prefix = [0]
        for num in arr:
            self.prefix.append(self.prefix[-1] + num)
    
    def range_sum(self, left, right):
        """Get sum of elements from index left to right (inclusive)"""
        return self.prefix[right + 1] - self.prefix[left]

# Example
arr = [1, 3, 5, 7, 9, 11]
ps = PrefixSum(arr)
result = ps.range_sum(1, 3)  # sum of [3, 5, 7] = 15
```

#### **Problem: Subarray Sum Equals K**
```python
def subarray_sum_k(arr, k):
    """
    Count number of subarrays with sum equal to k
    Time: O(n), Space: O(n)
    """
    count = 0
    prefix_sum = 0
    sum_count = {0: 1}  # prefix_sum -> frequency
    
    for num in arr:
        prefix_sum += num
        
        # Check if (prefix_sum - k) exists
        if prefix_sum - k in sum_count:
            count += sum_count[prefix_sum - k]
        
        # Add current prefix_sum to map
        sum_count[prefix_sum] = sum_count.get(prefix_sum, 0) + 1
    
    return count

# Example
arr = [1, 1, 1]
k = 2
result = subarray_sum_k(arr, k)  # 2 subarrays: [1,1] at indices (0,1) and (1,2)
```

### **4. Kadane's Algorithm (Maximum Subarray)**

```python
def kadane_algorithm(arr):
    """
    Find maximum sum of contiguous subarray
    Time: O(n), Space: O(1)
    """
    max_sum = arr[0]
    current_sum = arr[0]
    
    for i in range(1, len(arr)):
        current_sum = max(arr[i], current_sum + arr[i])
        max_sum = max(max_sum, current_sum)
    
    return max_sum

def kadane_with_indices(arr):
    """
    Return maximum sum and the subarray indices
    """
    max_sum = arr[0]
    current_sum = arr[0]
    start = 0
    end = 0
    temp_start = 0
    
    for i in range(1, len(arr)):
        if current_sum < 0:
            current_sum = arr[i]
            temp_start = i
        else:
            current_sum += arr[i]
        
        if current_sum > max_sum:
            max_sum = current_sum
            start = temp_start
            end = i
    
    return max_sum, start, end

# Example
arr = [-2, -3, 4, -1, -2, 1, 5, -3]
max_sum = kadane_algorithm(arr)  # 7 (subarray [4, -1, -2, 1, 5])
max_sum, start, end = kadane_with_indices(arr)  # 7, 2, 6
```

---

## 🔤 **Essential String Techniques** {#string-techniques}

### **1. String Matching Algorithms**

#### **KMP (Knuth-Morris-Pratt) Algorithm**
```python
def kmp_search(text, pattern):
    """
    Efficient string matching using KMP algorithm
    Time: O(n + m), Space: O(m)
    """
    def compute_lps(pattern):
        """Compute Longest Prefix Suffix array"""
        m = len(pattern)
        lps = [0] * m
        length = 0
        i = 1
        
        while i < m:
            if pattern[i] == pattern[length]:
                length += 1
                lps[i] = length
                i += 1
            else:
                if length != 0:
                    length = lps[length - 1]
                else:
                    lps[i] = 0
                    i += 1
        return lps
    
    n, m = len(text), len(pattern)
    lps = compute_lps(pattern)
    matches = []
    
    i = j = 0
    while i < n:
        if pattern[j] == text[i]:
            i += 1
            j += 1
        
        if j == m:
            matches.append(i - j)
            j = lps[j - 1]
        elif i < n and pattern[j] != text[i]:
            if j != 0:
                j = lps[j - 1]
            else:
                i += 1
    
    return matches

# Example
text = "ABABDABACDABABCABCABCABCABC"
pattern = "ABABCABCABCABC"
matches = kmp_search(text, pattern)  # [15]
```

### **2. Palindrome Algorithms**

#### **Check if String is Palindrome**
```python
def is_palindrome_basic(s):
    """Basic palindrome check"""
    return s == s[::-1]

def is_palindrome_optimized(s):
    """Optimized O(n/2) solution"""
    left, right = 0, len(s) - 1
    while left < right:
        if s[left] != s[right]:
            return False
        left += 1
        right -= 1
    return True

def is_palindrome_alphanumeric(s):
    """Check palindrome considering only alphanumeric characters"""
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

# Example
s = "A man, a plan, a canal: Panama"
result = is_palindrome_alphanumeric(s)  # True
```

#### **Longest Palindromic Substring**
```python
def longest_palindrome_expand_centers(s):
    """
    Find longest palindromic substring using expand around centers
    Time: O(n²), Space: O(1)
    """
    if not s:
        return ""
    
    start = 0
    max_len = 1
    
    def expand_around_center(left, right):
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        return right - left - 1
    
    for i in range(len(s)):
        # Odd length palindromes
        len1 = expand_around_center(i, i)
        # Even length palindromes
        len2 = expand_around_center(i, i + 1)
        
        current_max = max(len1, len2)
        if current_max > max_len:
            max_len = current_max
            start = i - (current_max - 1) // 2
    
    return s[start:start + max_len]

# Example
s = "babad"
result = longest_palindrome_expand_centers(s)  # "bab" or "aba"
```

### **3. Anagram Detection**

```python
def are_anagrams_sorting(s1, s2):
    """Check if strings are anagrams using sorting"""
    return sorted(s1) == sorted(s2)

def are_anagrams_frequency(s1, s2):
    """Check if strings are anagrams using character frequency"""
    if len(s1) != len(s2):
        return False
    
    char_count = {}
    
    # Count characters in s1
    for char in s1:
        char_count[char] = char_count.get(char, 0) + 1
    
    # Subtract characters in s2
    for char in s2:
        if char not in char_count:
            return False
        char_count[char] -= 1
        if char_count[char] == 0:
            del char_count[char]
    
    return len(char_count) == 0

def group_anagrams(strs):
    """Group strings that are anagrams of each other"""
    from collections import defaultdict
    
    anagram_groups = defaultdict(list)
    
    for s in strs:
        # Use sorted string as key
        key = ''.join(sorted(s))
        anagram_groups[key].append(s)
    
    return list(anagram_groups.values())

# Example
strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
groups = group_anagrams(strs)  # [["eat","tea","ate"], ["tan","nat"], ["bat"]]
```

---

## 💝 **Love Babbar's Array Problems** {#love-babbar-arrays}

### **Essential 50 Array Problems**

#### **1. Reverse the Array**
```python
def reverse_array(arr):
    """Multiple approaches to reverse array"""
    
    # Approach 1: Using extra space
    def reverse_extra_space(arr):
        return arr[::-1]
    
    # Approach 2: In-place reversal
    def reverse_in_place(arr):
        left, right = 0, len(arr) - 1
        while left < right:
            arr[left], arr[right] = arr[right], arr[left]
            left += 1
            right -= 1
        return arr
    
    # Approach 3: Recursive
    def reverse_recursive(arr, start, end):
        if start >= end:
            return arr
        arr[start], arr[end] = arr[end], arr[start]
        return reverse_recursive(arr, start + 1, end - 1)
    
    return reverse_in_place(arr.copy())

# Test
arr = [1, 2, 3, 4, 5]
print(reverse_array(arr))  # [5, 4, 3, 2, 1]
```

#### **2. Find Maximum and Minimum**
```python
def find_min_max(arr):
    """
    Find minimum and maximum in array with minimum comparisons
    Time: O(n), Comparisons: 3n/2 - 2
    """
    if len(arr) == 1:
        return arr[0], arr[0]
    
    if len(arr) == 2:
        return (min(arr), max(arr))
    
    # Process pairs
    if arr[0] > arr[1]:
        min_val, max_val = arr[1], arr[0]
    else:
        min_val, max_val = arr[0], arr[1]
    
    for i in range(2, len(arr) - 1, 2):
        if arr[i] > arr[i + 1]:
            current_min, current_max = arr[i + 1], arr[i]
        else:
            current_min, current_max = arr[i], arr[i + 1]
        
        min_val = min(min_val, current_min)
        max_val = max(max_val, current_max)
    
    # Handle odd length array
    if len(arr) % 2 == 1:
        min_val = min(min_val, arr[-1])
        max_val = max(max_val, arr[-1])
    
    return min_val, max_val

# Test
arr = [1000, 11, 445, 1, 330, 3000]
min_val, max_val = find_min_max(arr)  # 1, 3000
```

#### **3. Kth Smallest/Largest Element**
```python
def kth_element_quickselect(arr, k, find_smallest=True):
    """
    Find kth smallest/largest element using QuickSelect
    Average Time: O(n), Worst: O(n²)
    """
    def partition(arr, low, high):
        pivot = arr[high]
        i = low - 1
        
        for j in range(low, high):
            if arr[j] <= pivot:
                i += 1
                arr[i], arr[j] = arr[j], arr[i]
        
        arr[i + 1], arr[high] = arr[high], arr[i + 1]
        return i + 1
    
    def quickselect(arr, low, high, k):
        if low == high:
            return arr[low]
        
        pivot_index = partition(arr, low, high)
        
        if pivot_index == k:
            return arr[pivot_index]
        elif pivot_index > k:
            return quickselect(arr, low, pivot_index - 1, k)
        else:
            return quickselect(arr, pivot_index + 1, high, k)
    
    arr_copy = arr.copy()
    if find_smallest:
        return quickselect(arr_copy, 0, len(arr_copy) - 1, k - 1)
    else:
        return quickselect(arr_copy, 0, len(arr_copy) - 1, len(arr_copy) - k)

# Test
arr = [7, 10, 4, 3, 20, 15]
kth_smallest = kth_element_quickselect(arr, 3)  # 7 (3rd smallest)
kth_largest = kth_element_quickselect(arr, 3, False)  # 10 (3rd largest)
```

#### **4. Move Zeros to End**
```python
def move_zeros_to_end(arr):
    """
    Move all zeros to end while maintaining relative order
    Time: O(n), Space: O(1)
    """
    # Keep track of position for next non-zero element
    insert_pos = 0
    
    # Move all non-zero elements to front
    for i in range(len(arr)):
        if arr[i] != 0:
            arr[insert_pos] = arr[i]
            insert_pos += 1
    
    # Fill remaining positions with zeros
    while insert_pos < len(arr):
        arr[insert_pos] = 0
        insert_pos += 1
    
    return arr

def move_zeros_swap_version(arr):
    """Alternative version using swaps"""
    left = 0
    
    for right in range(len(arr)):
        if arr[right] != 0:
            arr[left], arr[right] = arr[right], arr[left]
            left += 1
    
    return arr

# Test
arr = [0, 1, 0, 3, 12]
result = move_zeros_to_end(arr)  # [1, 3, 12, 0, 0]
```

#### **5. Union and Intersection of Arrays**
```python
def array_union_intersection(arr1, arr2):
    """
    Find union and intersection of two arrays
    """
    
    def union_sorted_arrays(arr1, arr2):
        """Union of two sorted arrays - O(m + n)"""
        union = []
        i = j = 0
        
        while i < len(arr1) and j < len(arr2):
            if arr1[i] < arr2[j]:
                union.append(arr1[i])
                i += 1
            elif arr1[i] > arr2[j]:
                union.append(arr2[j])
                j += 1
            else:  # Equal elements
                union.append(arr1[i])
                i += 1
                j += 1
        
        # Add remaining elements
        while i < len(arr1):
            union.append(arr1[i])
            i += 1
        
        while j < len(arr2):
            union.append(arr2[j])
            j += 1
        
        return union
    
    def intersection_sorted_arrays(arr1, arr2):
        """Intersection of two sorted arrays - O(m + n)"""
        intersection = []
        i = j = 0
        
        while i < len(arr1) and j < len(arr2):
            if arr1[i] < arr2[j]:
                i += 1
            elif arr1[i] > arr2[j]:
                j += 1
            else:  # Equal elements
                intersection.append(arr1[i])
                i += 1
                j += 1
        
        return intersection
    
    def union_using_set(arr1, arr2):
        """Using set - O(m + n) average case"""
        return list(set(arr1) | set(arr2))
    
    def intersection_using_set(arr1, arr2):
        """Using set - O(m + n) average case"""
        return list(set(arr1) & set(arr2))
    
    # For sorted arrays
    arr1_sorted = sorted(arr1)
    arr2_sorted = sorted(arr2)
    
    union = union_sorted_arrays(arr1_sorted, arr2_sorted)
    intersection = intersection_sorted_arrays(arr1_sorted, arr2_sorted)
    
    return union, intersection

# Test
arr1 = [1, 3, 4, 6, 8]
arr2 = [4, 5, 6, 7, 8]
union, intersection = array_union_intersection(arr1, arr2)
# Union: [1, 3, 4, 5, 6, 7, 8]
# Intersection: [4, 6, 8]
```

---

## 🚀 **Striver's Array Problems** {#striver-arrays}

### **A2Z DSA Sheet - Arrays Section**

#### **1. Largest Element in Array**
```python
def find_largest_element(arr):
    """
    Multiple approaches to find largest element
    """
    
    # Approach 1: Using built-in function
    def using_builtin(arr):
        return max(arr) if arr else None
    
    # Approach 2: Linear scan
    def linear_scan(arr):
        if not arr:
            return None
        
        largest = arr[0]
        for i in range(1, len(arr)):
            if arr[i] > largest:
                largest = arr[i]
        return largest
    
    # Approach 3: Recursive
    def recursive_approach(arr, n):
        if n == 1:
            return arr[0]
        return max(arr[n-1], recursive_approach(arr, n-1))
    
    return linear_scan(arr)

# Test
arr = [1, 8, 7, 56, 90]
largest = find_largest_element(arr)  # 90
```

#### **2. Second Largest Element**
```python
def second_largest_element(arr):
    """
    Find second largest element in single pass
    Time: O(n), Space: O(1)
    """
    if len(arr) < 2:
        return None
    
    largest = second_largest = float('-inf')
    
    for num in arr:
        if num > largest:
            second_largest = largest
            largest = num
        elif num > second_largest and num != largest:
            second_largest = num
    
    return second_largest if second_largest != float('-inf') else None

def second_smallest_element(arr):
    """Find second smallest element"""
    if len(arr) < 2:
        return None
    
    smallest = second_smallest = float('inf')
    
    for num in arr:
        if num < smallest:
            second_smallest = smallest
            smallest = num
        elif num < second_smallest and num != smallest:
            second_smallest = num
    
    return second_smallest if second_smallest != float('inf') else None

# Test
arr = [1, 2, 4, 7, 7, 5]
second_largest = second_largest_element(arr)  # 5
second_smallest = second_smallest_element(arr)  # 2
```

#### **3. Check if Array is Sorted**
```python
def is_array_sorted(arr):
    """
    Check if array is sorted in non-decreasing order
    Time: O(n), Space: O(1)
    """
    for i in range(1, len(arr)):
        if arr[i] < arr[i-1]:
            return False
    return True

def is_array_sorted_and_rotated(arr):
    """
    Check if array is sorted and rotated
    Time: O(n), Space: O(1)
    """
    n = len(arr)
    rotation_count = 0
    
    for i in range(n):
        if arr[i] > arr[(i + 1) % n]:
            rotation_count += 1
        
        if rotation_count > 1:
            return False
    
    return True

# Test
arr1 = [1, 2, 3, 4, 5]
print(is_array_sorted(arr1))  # True

arr2 = [3, 4, 5, 1, 2]
print(is_array_sorted_and_rotated(arr2))  # True
```

#### **4. Rotate Array**
```python
def rotate_array_left(arr, k):
    """
    Rotate array to left by k positions
    Time: O(n), Space: O(1)
    """
    def reverse_array(arr, start, end):
        while start < end:
            arr[start], arr[end] = arr[end], arr[start]
            start += 1
            end -= 1
    
    n = len(arr)
    k = k % n  # Handle k > n
    
    # Reverse first k elements
    reverse_array(arr, 0, k - 1)
    # Reverse remaining elements
    reverse_array(arr, k, n - 1)
    # Reverse entire array
    reverse_array(arr, 0, n - 1)
    
    return arr

def rotate_array_right(arr, k):
    """Rotate array to right by k positions"""
    n = len(arr)
    k = k % n
    
    # Right rotation by k = Left rotation by (n-k)
    return rotate_array_left(arr, n - k)

# Test
arr = [1, 2, 3, 4, 5, 6, 7]
rotated = rotate_array_left(arr.copy(), 2)  # [3, 4, 5, 6, 7, 1, 2]
```

#### **5. Missing Number**
```python
def find_missing_number(arr, n):
    """
    Find missing number in array containing numbers 1 to n
    Multiple approaches
    """
    
    # Approach 1: Using sum formula
    def using_sum_formula(arr, n):
        expected_sum = n * (n + 1) // 2
        actual_sum = sum(arr)
        return expected_sum - actual_sum
    
    # Approach 2: Using XOR
    def using_xor(arr, n):
        xor1 = 0  # XOR of all array elements
        xor2 = 0  # XOR of all numbers from 1 to n
        
        for num in arr:
            xor1 ^= num
        
        for i in range(1, n + 1):
            xor2 ^= i
        
        return xor1 ^ xor2
    
    # Approach 3: Using binary search (if array is sorted)
    def using_binary_search(arr, n):
        if not arr:
            return 1
        
        left, right = 0, len(arr) - 1
        
        while left <= right:
            mid = (left + right) // 2
            
            # If arr[mid] = mid + 1, missing number is on right
            if arr[mid] == mid + 1:
                left = mid + 1
            else:
                right = mid - 1
        
        return left + 1
    
    return using_xor(arr, n)

# Test
arr = [1, 2, 4, 5]  # Missing 3
n = 5
missing = find_missing_number(arr, n)  # 3
```

---

## 🏢 **Company-Wise Problems** {#company-problems}

### **Google Arrays Problems**

#### **1. Container With Most Water**
```python
def max_area(height):
    """
    Find container with most water (two pointer approach)
    Time: O(n), Space: O(1)
    """
    left, right = 0, len(height) - 1
    max_water = 0
    
    while left < right:
        # Calculate current water area
        width = right - left
        current_height = min(height[left], height[right])
        current_water = width * current_height
        max_water = max(max_water, current_water)
        
        # Move pointer with smaller height
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
    
    return max_water

# Test
height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
result = max_area(height)  # 49
```

#### **2. 3Sum Problem**
```python
def three_sum(nums):
    """
    Find all unique triplets that sum to zero
    Time: O(n²), Space: O(1) excluding output
    """
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
                
                # Skip duplicates for second number
                while left < right and nums[left] == nums[left + 1]:
                    left += 1
                # Skip duplicates for third number
                while left < right and nums[right] == nums[right - 1]:
                    right -= 1
                
                left += 1
                right -= 1
            elif current_sum < 0:
                left += 1
            else:
                right -= 1
    
    return result

# Test
nums = [-1, 0, 1, 2, -1, -4]
triplets = three_sum(nums)  # [[-1, -1, 2], [-1, 0, 1]]
```

### **Amazon Arrays Problems**

#### **1. Product of Array Except Self**
```python
def product_except_self(nums):
    """
    Calculate product of array except self without division
    Time: O(n), Space: O(1) excluding output array
    """
    n = len(nums)
    result = [1] * n
    
    # Calculate left products
    for i in range(1, n):
        result[i] = result[i-1] * nums[i-1]
    
    # Calculate right products and multiply with left products
    right_product = 1
    for i in range(n-1, -1, -1):
        result[i] *= right_product
        right_product *= nums[i]
    
    return result

# Test
nums = [1, 2, 3, 4]
result = product_except_self(nums)  # [24, 12, 8, 6]
```

#### **2. Merge Intervals**
```python
def merge_intervals(intervals):
    """
    Merge overlapping intervals
    Time: O(n log n), Space: O(1)
    """
    if not intervals:
        return []
    
    # Sort intervals by start time
    intervals.sort(key=lambda x: x[0])
    merged = [intervals[0]]
    
    for current in intervals[1:]:
        last_merged = merged[-1]
        
        # If current interval overlaps with last merged interval
        if current[0] <= last_merged[1]:
            # Merge intervals
            last_merged[1] = max(last_merged[1], current[1])
        else:
            # Add non-overlapping interval
            merged.append(current)
    
    return merged

# Test
intervals = [[1,3],[2,6],[8,10],[15,18]]
merged = merge_intervals(intervals)  # [[1,6],[8,10],[15,18]]
```

---

## 📈 **Practice Problems by Difficulty** {#practice-by-difficulty}

### **Easy Level (50 Problems)**

#### **Array Easy Problems**
1. **Two Sum** - Find two numbers that add up to target
2. **Best Time to Buy and Sell Stock** - Maximum profit from single transaction
3. **Majority Element** - Element appearing more than n/2 times
4. **Plus One** - Add 1 to number represented as array
5. **Merge Sorted Array** - Merge two sorted arrays in-place

#### **String Easy Problems**
1. **Valid Palindrome** - Check if string is palindrome
2. **First Unique Character** - Find first non-repeating character
3. **Valid Anagram** - Check if two strings are anagrams
4. **Reverse String** - Reverse string in-place
5. **Implement strStr()** - Find needle in haystack

### **Medium Level (100 Problems)**

#### **Array Medium Problems**
1. **3Sum** - Find triplets that sum to zero
2. **Container With Most Water** - Maximum area problem
3. **Product of Array Except Self** - Without using division
4. **Spiral Matrix** - Traverse matrix in spiral order
5. **Rotate Image** - Rotate matrix 90 degrees clockwise

#### **String Medium Problems**
1. **Longest Substring Without Repeating Characters**
2. **Longest Palindromic Substring**
3. **Group Anagrams** - Group strings that are anagrams
4. **String to Integer (atoi)** - Implement atoi function
5. **Generate Parentheses** - Generate all valid parentheses

### **Hard Level (30 Problems)**

#### **Array Hard Problems**
1. **Median of Two Sorted Arrays** - Find median in O(log(min(m,n)))
2. **Trapping Rain Water** - Calculate trapped rainwater
3. **Maximum Rectangle** - Largest rectangle in binary matrix
4. **Sliding Window Maximum** - Maximum in each window of size k
5. **First Missing Positive** - Find smallest positive missing number

#### **String Hard Problems**
1. **Edit Distance** - Minimum operations to convert one string to another
2. **Regular Expression Matching** - Implement regex matching
3. **Wildcard Matching** - Implement wildcard pattern matching
4. **Minimum Window Substring** - Smallest window containing all characters
5. **Palindrome Pairs** - Find pairs that form palindromes

---

## ⚡ **Optimization Techniques** {#optimization-techniques}

### **Space Optimization Techniques**

#### **1. In-Place Algorithms**
```python
def remove_element_in_place(nums, val):
    """
    Remove all instances of val in-place
    Time: O(n), Space: O(1)
    """
    write_index = 0
    
    for read_index in range(len(nums)):
        if nums[read_index] != val:
            nums[write_index] = nums[read_index]
            write_index += 1
    
    return write_index  # New length
```

#### **2. Constant Space String Manipulation**
```python
def reverse_words_in_place(s):
    """
    Reverse words in string with O(1) extra space
    """
    s = list(s.strip())
    
    # Helper function to reverse portion of array
    def reverse(arr, start, end):
        while start < end:
            arr[start], arr[end] = arr[end], arr[start]
            start += 1
            end -= 1
    
    # Remove extra spaces
    def clean_spaces(arr):
        write = 0
        for read in range(len(arr)):
            if arr[read] != ' ':
                if write != 0:
                    arr[write] = ' '
                    write += 1
                while read < len(arr) and arr[read] != ' ':
                    arr[write] = arr[read]
                    write += 1
                    read += 1
            read += 1
        return write
    
    # Clean spaces and get new length
    new_length = clean_spaces(s)
    s = s[:new_length]
    
    # Reverse entire string
    reverse(s, 0, len(s) - 1)
    
    # Reverse each word
    start = 0
    for i in range(len(s) + 1):
        if i == len(s) or s[i] == ' ':
            reverse(s, start, i - 1)
            start = i + 1
    
    return ''.join(s)
```

### **Time Optimization Techniques**

#### **1. Using Hash Maps for O(1) Lookup**
```python
def two_sum_hash_map(nums, target):
    """
    Two sum using hash map for O(n) solution
    """
    num_to_index = {}
    
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_to_index:
            return [num_to_index[complement], i]
        num_to_index[num] = i
    
    return []
```

#### **2. Binary Search for Sorted Arrays**
```python
def search_insert_position(nums, target):
    """
    Find position to insert target in sorted array
    Time: O(log n)
    """
    left, right = 0, len(nums)
    
    while left < right:
        mid = left + (right - left) // 2
        if nums[mid] < target:
            left = mid + 1
        else:
            right = mid
    
    return left
```

---

## 📋 **Arrays & Strings Cheat Sheet** {#cheat-sheet}

### **Time Complexity Quick Reference**

| Operation | Array | Dynamic Array | String |
|-----------|-------|---------------|--------|
| Access | O(1) | O(1) | O(1) |
| Search | O(n) | O(n) | O(n) |
| Insertion | O(n) | O(1) amortized | O(n) |
| Deletion | O(n) | O(1) amortized | O(n) |
| Append | N/A | O(1) amortized | O(n) |

### **Common Patterns & Techniques**

#### **Two Pointers**
```python
# Template for two pointers
def two_pointer_technique(arr):
    left, right = 0, len(arr) - 1
    while left < right:
        # Process arr[left] and arr[right]
        if condition:
            left += 1
        else:
            right -= 1
```

#### **Sliding Window**
```python
# Template for sliding window
def sliding_window(arr, k):
    window_sum = sum(arr[:k])
    max_sum = window_sum
    
    for i in range(k, len(arr)):
        window_sum = window_sum - arr[i-k] + arr[i]
        max_sum = max(max_sum, window_sum)
    
    return max_sum
```

#### **Prefix Sum**
```python
# Template for prefix sum
def prefix_sum_technique(arr):
    prefix = [0]
    for num in arr:
        prefix.append(prefix[-1] + num)
    
    # Range sum from i to j: prefix[j+1] - prefix[i]
    return prefix
```

### **String Manipulation Tricks**

#### **Character Frequency**
```python
from collections import Counter

# Count character frequency
freq = Counter(string)

# Manual counting
freq = {}
for char in string:
    freq[char] = freq.get(char, 0) + 1
```

#### **String Comparison**
```python
# Check if strings are anagrams
def are_anagrams(s1, s2):
    return sorted(s1) == sorted(s2)

# Check if string is palindrome
def is_palindrome(s):
    return s == s[::-1]
```

### **Common Edge Cases**

✅ **Arrays:**
- Empty array
- Single element array
- All elements same
- Already sorted array
- Reverse sorted array

✅ **Strings:**
- Empty string
- Single character
- All characters same
- Case sensitivity
- Special characters and spaces

### **Optimization Checklist**

✅ **Before Coding:**
- Understand the problem completely
- Identify constraints and edge cases
- Think about time and space requirements

✅ **While Coding:**
- Use appropriate data structures
- Consider in-place modifications
- Handle edge cases

✅ **After Coding:**
- Test with sample inputs
- Analyze time and space complexity
- Look for further optimizations

---

## 🎯 **Next Steps**

### **Practice Resources**
1. **LeetCode** - Arrays & Strings sections
2. **GeeksforGeeks** - Array and String algorithms
3. **HackerRank** - Data Structures domain
4. **Codeforces** - Implementation problems

### **Advanced Topics to Explore**
1. **Advanced String Algorithms** - KMP, Z-algorithm, Suffix arrays
2. **Matrix Algorithms** - Sparse matrices, specialized operations
3. **Bit Manipulation** - Using bits for array problems
4. **Parallel Algorithms** - Multi-threaded array processing

---

*Master arrays and strings to build a strong foundation for all advanced data structures and algorithms!*
