<!-- Clear Language: Keep sentences under 50 words -->
﻿# Sliding Window

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Understand fixed-size and variable-size sliding window patterns |
| LO2 | Implement sliding window for maximum/minimum subarray problems |
| LO3 | Solve substring problems using character frequency windows |
| LO4 | Apply sliding window to find longest/shortest valid subarrays |
| LO5 | Optimize nested loop solutions to O(n) using the sliding window technique |
| LO6 | Identify when sliding window is applicable (contiguous, monotonic condition) |

## Introduction

Linked lists form the backbone of many advanced data structures like stacks, queues, and graphs. Mastering pointer manipulation and linked list algorithms is a classic interview topic that tests your understanding of memory and data organization.

## Prerequisites

- Basic programming
- Understanding of pointers/references


## Theory

Understanding sliding window is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how sliding window works in practice.

### Key Concepts

- **Core Principle**: The foundational idea behind sliding window
- **How It Works**: The mechanism and process involved
- **Why It Matters**: Relevance to AI engineering and real-world applications
- **Trade-offs**: Advantages and limitations to consider

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 4.1 | Fixed-Size Window | Maximum sum subarray of size k |
| 4.2 | Variable-Size Window | Longest substring without repeating chars |
| 4.3 | Condition-Based Window | Minimum window substring |
| 4.4 | Monotonic Queue + Window | Sliding window maximum |
| 4.5 | Two-Pointer Variant | Subarray product less than k |
| 4.6 | Advanced Patterns | Count of subarrays with condition |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Sliding Window Intro] --> B[Fixed-Size]
    A --> C[Variable-Size]
    B --> D[Max/Min Subarray]
    C --> E[Longest Shortest Substring]
    D --> F[Monotonic Queue]
    E --> F
    F --> G[Practice Problems]
```text

## 4.1 Fixed-Size Window

Fixed-size sliding window moves a window of constant size k across the array, updating the result at each position.

**Maximum sum subarray of size k**:

```python
def max_sum_fixed_window(arr, k):
    if len(arr) < k:
        return None
    window_sum = sum(arr[:k])
    max_sum = window_sum
    for i in range(k, len(arr)):
        window_sum += arr[i] - arr[i - k]
        max_sum = max(max_sum, window_sum)
    return max_sum

print(max_sum_fixed_window([2, 1, 5, 1, 3, 2], 3))  # 9 (5+1+3)
```text

**First negative integer in every window of size k**:

```python
from collections import deque

def first_negative_in_window(arr, k):
    result = []
    negatives = deque()
    for i in range(k):
        if arr[i] < 0:
            negatives.append(i)
    result.append(arr[negatives[0]] if negatives else 0)
    for i in range(k, len(arr)):
        while negatives and negatives[0] <= i - k:
            negatives.popleft()
        if arr[i] < 0:
            negatives.append(i)
        result.append(arr[negatives[0]] if negatives else 0)
    return result

print(first_negative_in_window([12, -1, -7, 8, -15, 30, 16, 28], 3))
```text

**Count occurrences of anagram in a string**:

```python
def count_anagram_occurrences(text, pattern):
    m, n = len(pattern), len(text)
    if m > n:
        return 0
    p_count = [0] * 26
    w_count = [0] * 26
    count = 0
    for c in pattern:
        p_count[ord(c) - ord('a')] += 1
    for i in range(m):
        w_count[ord(text[i]) - ord('a')] += 1
    if p_count == w_count:
        count += 1
    for i in range(m, n):
        w_count[ord(text[i - m]) - ord('a')] -= 1
        w_count[ord(text[i]) - ord('a')] += 1
        if p_count == w_count:
            count += 1
    return count

print(count_anagram_occurrences("cbaebabacd", "abc"))  # 2
```text

---

## 4.2 Variable-Size Window

Variable-size window expands right pointer and contracts left pointer based on conditions.

**Longest substring without repeating characters**:

```python
def longest_substring_no_repeat(s):
    char_set = set()
    left = max_len = 0
    for right, char in enumerate(s):
        while char in char_set:
            char_set.remove(s[left])
            left += 1
        char_set.add(char)
        max_len = max(max_len, right - left + 1)
    return max_len

print(longest_substring_no_repeat("abcabcbb"))  # 3 ("abc")
print(longest_substring_no_repeat("bbbbb"))     # 1 ("b")
print(longest_substring_no_repeat("pwwkew"))    # 3 ("wke")
```text

**Longest substring with at most k distinct characters**:

```python
from collections import defaultdict

def longest_substring_k_distinct(s, k):
    if k == 0:
        return 0
    char_count = defaultdict(int)
    left = max_len = 0
    for right, char in enumerate(s):
        char_count[char] += 1
        while len(char_count) > k:
            left_char = s[left]
            char_count[left_char] -= 1
            if char_count[left_char] == 0:
                del char_count[left_char]
            left += 1
        max_len = max(max_len, right - left + 1)
    return max_len

print(longest_substring_k_distinct("eceba", 2))  # 3 ("ece")
print(longest_substring_k_distinct("aa", 1))     # 2 ("aa")
```text

---

## 4.3 Condition-Based Window

**Minimum window substring**: Find minimum window containing all characters of a pattern.

```python
from collections import defaultdict

def min_window_substring(s, t):
    if not s or not t:
        return ""
    target_count = defaultdict(int)
    for c in t:
        target_count[c] += 1
    required = len(target_count)
    formed = 0
    window_count = defaultdict(int)
    left = 0
    min_len = float('inf')
    min_left = 0
    for right, char in enumerate(s):
        window_count[char] += 1
        if char in target_count and window_count[char] == target_count[char]:
            formed += 1
        while left <= right and formed == required:
            if right - left + 1 < min_len:
                min_len = right - left + 1
                min_left = left
            left_char = s[left]
            window_count[left_char] -= 1
            if left_char in target_count and window_count[left_char] < target_count[left_char]:
                formed -= 1
            left += 1
    return "" if min_len == float('inf') else s[min_left:min_left + min_len]

print(min_window_substring("ADOBECODEBANC", "ABC"))  # "BANC"
```text

**Subarray with sum at least target**:

```python
def min_subarray_len(target, nums):
    left = curr_sum = 0
    min_len = float('inf')
    for right, num in enumerate(nums):
        curr_sum += num
        while curr_sum >= target:
            min_len = min(min_len, right - left + 1)
            curr_sum -= nums[left]
            left += 1
    return 0 if min_len == float('inf') else min_len

print(min_subarray_len(7, [2, 3, 1, 2, 4, 3]))  # 2 ([4, 3])
```text

---

## 4.4 Monotonic Queue + Window

**Sliding window maximum**: Use deque to maintain candidate maximums.

```python
from collections import deque

def max_sliding_window(nums, k):
    if not nums or k == 0:
        return []
    dq = deque()
    result = []
    for i, num in enumerate(nums):
        while dq and dq[0] < i - k + 1:
            dq.popleft()
        while dq and nums[dq[-1]] <= num:
            dq.pop()
        dq.append(i)
        if i >= k - 1:
            result.append(nums[dq[0]])
    return result

print(max_sliding_window([1, 3, -1, -3, 5, 3, 6, 7], 3))
# [3, 3, 5, 5, 6, 7]
```text

**Sliding window minimum**:

```python
def min_sliding_window(nums, k):
    if not nums or k == 0:
        return []
    dq = deque()
    result = []
    for i, num in enumerate(nums):
        while dq and dq[0] < i - k + 1:
            dq.popleft()
        while dq and nums[dq[-1]] >= num:
            dq.pop()
        dq.append(i)
        if i >= k - 1:
            result.append(nums[dq[0]])
    return result

print(min_sliding_window([1, 3, -1, -3, 5, 3, 6, 7], 3))

## [-1, -3, -3, -3, 3, 3]
```text

```mermaid
flowchart TD
    subgraph "Monotonic Queue Window"
        A[Element arrives] --> B{Deque empty?}
        B -->|Yes| C[Push index]
        B -->|No| D{New element > deque back?}
        D -->|Yes| E[Pop back]
        E --> D
        D -->|No| F[Push index]
        C --> G{Window complete?}
        F --> G
        G -->|Yes| H[Record deque front]
        G -->|No| I[Continue]
        H --> I
    end
```text

---

## 4.5 Two-Pointer Variant

**Number of subarrays with product less than k**:

```python
def num_subarray_product_less_than_k(nums, k):
    if k <= 1:
        return 0
    left = 0
    product = 1
    count = 0
    for right, num in enumerate(nums):
        product *= num
        while product >= k and left <= right:
            product //= nums[left]
            left += 1
        count += right - left + 1
    return count

print(num_subarray_product_less_than_k([10, 5, 2, 6], 100))  # 8
```text

**Count number of nice subarrays** (odd numbers count = k):

```python
def number_of_subarrays_with_odd_k(nums, k):
    def at_most_k_odds(k):
        if k < 0:
            return 0
        left = count = odd_count = 0
        for right, num in enumerate(nums):
            if num % 2 == 1:
                odd_count += 1
            while odd_count > k:
                if nums[left] % 2 == 1:
                    odd_count -= 1
                left += 1
            count += right - left + 1
        return count
    return at_most_k_odds(k) - at_most_k_odds(k - 1)

print(number_of_subarrays_with_odd_k([1, 1, 2, 1, 1], 3))  # 2
```text

**Fruits into baskets**:

```python
def total_fruit(fruits):
    basket = {}
    left = max_count = 0
    for right, fruit in enumerate(fruits):
        basket[fruit] = basket.get(fruit, 0) + 1
        while len(basket) > 2:
            basket[fruits[left]] -= 1
            if basket[fruits[left]] == 0:
                del basket[fruits[left]]
            left += 1
        max_count = max(max_count, right - left + 1)
    return max_count

print(total_fruit([1, 2, 1, 2, 3]))  # 4
```text

**Binary subarrays with sum = goal**:

```python
def num_subarrays_with_sum(nums, goal):
    def at_most_sum(k):
        if k < 0:
            return 0
        left = count = curr_sum = 0
        for right, num in enumerate(nums):
            curr_sum += num
            while curr_sum > k:
                curr_sum -= nums[left]
                left += 1
            count += right - left + 1
        return count
    return at_most_sum(goal) - at_most_sum(goal - 1)

print(num_subarrays_with_sum([1, 0, 1, 0, 1], 2))  # 4
```text

---

## 4.6 Advanced Patterns

**Count complete subarrays with all distinct elements**:

```python
def count_complete_subarrays(nums):
    distinct_count = len(set(nums))
    freq = defaultdict(int)
    left = count = 0
    for right, num in enumerate(nums):
        freq[num] += 1
        while len(freq) == distinct_count:
            count += len(nums) - right
            freq[nums[left]] -= 1
            if freq[nums[left]] == 0:
                del freq[nums[left]]
            left += 1
    return count

print(count_complete_subarrays([1, 3, 1, 2, 2]))  # 4
```text

**Maximum length of subarray with equal 0s and 1s**:

```python
def find_max_length(nums):
    prefix_sum = 0
    first_occurrence = {0: -1}
    max_len = 0
    for i, num in enumerate(nums):
        prefix_sum += 1 if num == 1 else -1
        if prefix_sum in first_occurrence:
            max_len = max(max_len, i - first_occurrence[prefix_sum])
        else:
            first_occurrence[prefix_sum] = i
    return max_len

print(find_max_length([0, 1, 0, 1]))  # 4
```text

**Minimum operations to reduce X to zero**:

```python
def min_operations(nums, x):
    target = sum(nums) - x
    if target == 0:
        return len(nums)
    if target < 0:
        return -1
    left = curr_sum = max_len = 0
    found = False
    for right, num in enumerate(nums):
        curr_sum += num
        while curr_sum > target and left <= right:
            curr_sum -= nums[left]
            left += 1
        if curr_sum == target:
            found = True
            max_len = max(max_len, right - left + 1)
    return len(nums) - max_len if found else -1

print(min_operations([3, 2, 20, 1, 1, 3], 10))  # 5
```text

```mermaid
flowchart TD
    subgraph "Sliding Window Patterns"
        A[Fixed Size k] --> B[Sum, Average, Max/Min]
        C[Variable - At Most k] --> D[Distinct, Product, Sum]
        E[Variable - Exactly k] --> F[Using atMost(k) - atMost(k-1)]
        G[Variable - Minimum] --> H[Shrink while condition met]
    end
```text

---

## TypeScript Parallel

TypeScript implementation of sliding window patterns:

```typescript
function maxSumFixed(arr: number[], k: number): number {
    let windowSum = arr.slice(0, k).reduce((a, b) => a + b, 0);
    let maxSum = windowSum;
    for (let i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
}

function longestSubstringNoRepeat(s: string): number {
    const set = new Set<string>();
    let left = 0, maxLen = 0;
    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]); left++;
        }
        set.add(s[right]);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}
```text

---

## Summary

- Sliding window transforms O(n�) nested loops into O(n) single pass by maintaining a window that expands and contracts
- Fixed-size windows maintain constant length k; variable-size windows adjust based on conditions
- The sliding window technique applies only to contiguous subarray/substring problems with monotonic conditions
- Deque-based monotonic queue solves sliding window maximum/minimum in O(n) by maintaining candidate indices
- The "at most k" technique converts "exactly k" problems into two sliding window calls: atMost(k) - atMost(k-1)
- For substring problems, maintaining character frequency counts enables O(1) condition checks per step
- The minimum window substring problem requires tracking "formed" conditions vs "required" conditions
- Sliding window product problems require special handling for zeros (product resets)
- The technique is not applicable when the condition is not monotonic (e.g., subarray with sum = k in unsorted arrays with negatives)
- Space complexity is typically O(alphabet size) or O(k) for window storage, rarely O(n)

## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| Maximum sum of subarray size k | Fixed window � add right, subtract left | Computing sum for each subarray from scratch |
| Longest substring without repeats | Variable window with set for chars in window | Checking all substrings O(n�) |
| Minimum window containing pattern | Expand right, shrink left when valid | Brute-force checking all windows |
| Sliding window maximum | Deque monotonic queue | Recomputing max each window O(nk) |
| Count subarrays with sum = k | Convert to atMost(k) - atMost(k-1) | Complex sliding with hash map for negative numbers |
| Product less than k | Variable window, divide left when product >= k | Using sum-based approach for product |

## Interview Q&A

<details class="tp-qa-card" data-qid="dsa04-q1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q1: Explain the sliding window technique and when it should be used.
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Sliding window</strong> is a technique for solving subarray/substring problems in O(n) time by maintaining a contiguous window and adjusting its boundaries.</p>
    <p><strong>When to use</strong>:</p>
    <ul>
      <li>The problem involves a <strong>contiguous</strong> subarray/substring</li>
      <li>The condition is <strong>monotonic</strong> � if a window satisfies the condition, any smaller window (or larger) also satisfies it</li>
      <li>You can compute the answer from the window's state efficiently</li>
    </ul>
    <p><strong>Types</strong>: Fixed size (k given), Variable size (expand/contract), Two pointers.</p>
  </div>
  <button class="tp-qa-mark-btn">? Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="dsa04-q2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q2: Implement the longest substring without repeating characters using sliding window.
  </summary>
  <div class="tp-qa-answer">
    <pre><code>def longest_substring_no_repeat(s):
    char_set = set()
    left = 0
    max_len = 0
    for right, char in enumerate(s):
        while char in char_set:
            char_set.remove(s[left])
            left += 1
        char_set.add(char)
        max_len = max(max_len, right - left + 1)
    return max_len</code></pre>
    <p><strong>Optimization</strong>: Use a dictionary mapping character to its last index to skip directly:</p>
    <pre><code>def optimized(s):
    last_seen = {}
    left = max_len = 0
    for right, char in enumerate(s):
        if char in last_seen and last_seen[char] >= left:
            left = last_seen[char] + 1
        last_seen[char] = right
        max_len = max(max_len, right - left + 1)
    return max_len</code></pre>
  </div>
  <button class="tp-qa-mark-btn">? Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="dsa04-q3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q3: Explain the minimum window substring problem. How does the algorithm track when a window is valid?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Problem</strong>: Given string s and pattern t, find the minimum window in s containing all characters of t.</p>
    <p><strong>Algorithm</strong>: Count characters in pattern t (target counts). Expand right pointer, updating window counts. Track <code>formed</code> � number of characters meeting their target count. When <code>formed == required</code>, shrink from left to minimize window. Update result when smaller window found.</p>
    <p><strong>Complexity</strong>: O(n) time (each character visited twice), O(k) space for character counts.</p>
  </div>
  <button class="tp-qa-mark-btn">? Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="dsa04-q4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q4: How do you find the maximum element in every sliding window of size k in O(n) time?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Solution</strong>: Use a <strong>deque that stores indices</strong> in decreasing order of values. The deque front always holds the index of the maximum in the current window. When a new element arrives, we remove all smaller elements from the back (they can never be the max while this new element exists).</p>
    <p><strong>Complexity</strong>: O(n) � each element is pushed and popped at most once.</p>
  </div>
  <button class="tp-qa-mark-btn">? Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="dsa04-q5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q5: What is the "at most k" technique and how does it help solve "exactly k" problems?
  </summary>
  <div class="tp-qa-answer">
    <p>The <strong>"at most k"</strong> technique converts "exactly k" problems into two sliding window calls:</p>
    <pre><code>def exactly_k(nums, k):
    return at_most_k(nums, k) - at_most_k(nums, k - 1)</code></pre>
    <p><strong>Why this works</strong>: Counting "at most k" is easier with sliding window because the condition is monotonic � if a window is valid for "at most k", any sub-window is also valid. But "exactly k" isn't monotonic.</p>
    <p><strong>Examples</strong>: Subarrays with exactly k odd numbers, subarrays with sum exactly equal to goal (binary array), subarrays with exactly k distinct integers.</p>
  </div>
  <button class="tp-qa-mark-btn">? Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="dsa04-q6">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q6: How do you count the number of subarrays with product less than k?
  </summary>
  <div class="tp-qa-answer">
    <pre><code>def num_subarray_product_less_than_k(nums, k):
    if k <= 1:
        return 0
    left = 0
    product = 1
    count = 0
    for right, num in enumerate(nums):
        product *= num
        while product >= k and left <= right:
            product //= nums[left]
            left += 1
        count += right - left + 1
    return count</code></pre>
    <p><strong>Key insight</strong>: When product >= k, we divide by leftmost elements until product < k. At that point, every subarray ending at current right starting from left to right is valid.</p>
  </div>
  <button class="tp-qa-mark-btn">? Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="dsa04-q7">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q7: Find the longest substring with at most k distinct characters.
  </summary>
  <div class="tp-qa-answer">
    <pre><code>from collections import defaultdict

def longest_substring_k_distinct(s, k):
    if k == 0:
        return 0
    char_count = defaultdict(int)
    left = max_len = 0
    for right, char in enumerate(s):
        char_count[char] += 1
        while len(char_count) > k:
            left_char = s[left]
            char_count[left_char] -= 1
            if char_count[left_char] == 0:
                del char_count[left_char]
            left += 1
        max_len = max(max_len, right - left + 1)
    return max_len</code></pre>
    <p><strong>Key insight</strong>: The sliding window expands right until we have more than k distinct characters, then shrinks from left until we're back to at most k distinct characters.</p>
  </div>
  <button class="tp-qa-mark-btn">? Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="dsa04-q8">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q8: How do you find the longest subarray with equal 0s and 1s?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Insight</strong>: Treat 0 as -1. The problem becomes finding the longest subarray with sum 0. Use prefix sum and a hash map storing the first occurrence of each prefix sum.</p>
    <pre><code>def find_max_length(nums):
    prefix_sum = 0
    first_occurrence = {0: -1}
    max_len = 0
    for i, num in enumerate(nums):
        prefix_sum += 1 if num == 1 else -1
        if prefix_sum in first_occurrence:
            max_len = max(max_len, i - first_occurrence[prefix_sum])
        else:
            first_occurrence[prefix_sum] = i
    return max_len</code></pre>
    <p><strong>Complexity</strong>: O(n) time, O(n) space.</p>
  </div>
  <button class="tp-qa-mark-btn">? Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="dsa04-q9">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q9: Explain the "minimum operations to reduce X to zero" problem.
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Problem</strong>: Remove elements from either end of an array so the sum of removed elements equals X. Minimize number of operations.</p>
    <p><strong>Insight</strong>: Instead of finding prefix + suffix sum = X, find the longest contiguous subarray with sum = total - X. The answer is n - len(that subarray).</p>
    <p><strong>Complexity</strong>: O(n) time, O(1) space.</p>
  </div>
  <button class="tp-qa-mark-btn">? Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="dsa04-q10">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q10: What problems cannot be solved with the sliding window technique?
  </summary>
  <div class="tp-qa-answer">
    <p>Sliding window does NOT work when:</p>
    <ul>
      <li>The condition is <strong>not monotonic</strong> � e.g., subarray sum = k in arrays with negative numbers (once sum exceeds k, we might still need to add more elements)</li>
      <li>The problem involves <strong>non-contiguous</strong> elements � e.g., subsequence problems</li>
      <li>The problem requires <strong>reordering</strong> elements � e.g., sorting-based problems</li>
      <li>The window state cannot be <strong>efficiently updated</strong> when sliding � e.g., median of each window requires O(log k) update using heaps</li>
    </ul>
    <p>For non-monotonic conditions, consider prefix sum + hash map or other techniques.</p>
  </div>
  <button class="tp-qa-mark-btn">? Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="dsa04-q11">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q11: Compare the fixed-size and variable-size sliding window approaches.
  </summary>
  <div class="tp-qa-answer">
    <table>
      <tr><th>Property</th><th>Fixed-Size</th><th>Variable-Size</th></tr>
      <tr><td>Window length</td><td>Always k</td><td>Changes as needed</td></tr>
      <tr><td>Update pattern</td><td>Add right, subtract left</td><td>Expand right, shrink left</td></tr>
      <tr><td>Condition</td><td>Window size is the constraint</td><td>Window content must satisfy condition</td></tr>
      <tr><td>Result type</td><td>Max/min/average of windows</td><td>Max/min length of valid windows</td></tr>
      <tr><td>Example</td><td>Maximum sum of subarray size k</td><td>Longest substring without repeats</td></tr>
    </table>
  </div>
  <button class="tp-qa-mark-btn">? Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="dsa04-q12">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q12: How do you count occurrences of an anagram in a string using sliding window?
  </summary>
  <div class="tp-qa-answer">
    <pre><code>def count_anagram_occurrences(text, pattern):
    m, n = len(pattern), len(text)
    if m > n:
        return 0
    p_count = [0] * 26
    w_count = [0] * 26
    count = 0
    for c in pattern:
        p_count[ord(c) - ord('a')] += 1
    for i in range(m):
        w_count[ord(text[i]) - ord('a')] += 1
    if p_count == w_count:
        count += 1
    for i in range(m, n):
        w_count[ord(text[i - m]) - ord('a')] -= 1
        w_count[ord(text[i]) - ord('a')] += 1
        if p_count == w_count:
            count += 1
    return count</code></pre>
    <p><strong>Key insight</strong>: Maintain character counts in the current window. Slide the window by removing leftmost character count and adding new character count. Compare with pattern's character counts.</p>
  </div>
  <button class="tp-qa-mark-btn">? Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>

## Chapter Quiz

**Q1**: What is the time complexity of the sliding window maximum using deque?

a) O(n log k)
b) O(n)
c) O(nk)
d) O(k)

<details class="tp-qa-card" data-qid="dsa04-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) O(n)</strong></p><p>Each element is pushed and popped at most once, giving O(n) total.</p></div></details>

**Q2**: Which technique is used to convert "exactly k" to "at most k" sliding window problems?

a) atMost(k) - atMost(k-1)
b) atMost(k) + atMost(k-1)
c) atMost(k) * atMost(k-1)
d) atLeast(k) - atMost(k)

<details class="tp-qa-card" data-qid="dsa04-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: a) atMost(k) - atMost(k-1)</strong></p><p>Since exactly k = atMost(k) - atMost(k-1), this conversion enables sliding window solutions for "exactly k" problems.</p></div></details>

**Q3**: In the minimum window substring problem, what does the "formed" counter track?

a) Number of characters in the window
b) Number of distinct characters that have met their required count
c) Total characters in the pattern
d) Length of the current window

<details class="tp-qa-card" data-qid="dsa04-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Number of distinct characters that have met their required count</strong></p><p>formed tracks how many distinct characters from the pattern have reached or exceeded their required count in the current window.</p></div></details>

**Q4**: What data structure is used for O(n) sliding window maximum?

a) Stack
b) Queue
c) Deque
d) Priority Queue

<details class="tp-qa-card" data-qid="dsa04-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) Deque</strong></p><p>A deque maintains indices in decreasing order of values, giving O(1) access to the maximum and O(1) amortized for adding/removing elements.</p></div></details>

**Q5**: Which of these problems CANNOT be solved with a standard sliding window?

a) Maximum sum subarray of size k
b) Longest substring without repeating characters
c) Subarray sum equals k (with negative numbers)
d) Minimum window substring

<details class="tp-qa-card" data-qid="dsa04-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) Subarray sum equals k (with negative numbers)</strong></p><p>With negative numbers, the sum is not monotonic � adding elements can decrease the sum, so sliding window cannot guarantee correctness.</p></div></details>

## Exercises

**Easy** � Given an array of positive integers and a target sum, find the minimum length of a contiguous subarray whose sum is at least the target.

**Medium** � Given a string s and a string p, find all start indices of p's anagrams in s using sliding window.

**Medium** � Implement a function that finds the maximum sum of any subarray of size k in a circular array (where the subarray can wrap around from end to start).

**Hard** � Implement a sliding window median � find the median of each window of size k in an array. Achieve O(n log k) using two heaps.

**Hard** � Given an array of integers and an integer k, find the length of the longest subarray whose sum is at most k. Then generalize to subarray product at most k.

---


## Common Mistakes

1. Losing reference to remaining list during traversal
2. Not handling edge cases (empty list, single node)
3. Forgetting to update head/tail pointers
4. Infinite loops from incorrect cycle detection
5. Not using dummy nodes for simplification

## Revision Notes

- Singly linked: O(1) insert/delete at head
- Doubly linked: O1 insert/delete with reference
- Fast/slow pointer for cycle detection
- Dummy node simplifies edge cases
- Reversing a linked list is O(n) time O(1) space

## Placement Section

### Top 10 Interview Questions

#### Google Style
1. Explain the time and space trade-offs of data structures algorithms. When would you choose one approach over another?
2. Design a system that efficiently handles data structures algorithms at scale (millions of requests/second).

#### Amazon Style
1. Tell me about a time you had to optimize a system related to data structures algorithms. What was your approach and what was the result?
2. How would you explain data structures algorithms to a non-technical stakeholder?

#### Microsoft Style
1. How does data structures algorithms integrate with enterprise systems and cloud architectures?
2. What are the security implications of data structures algorithms?

#### NVIDIA Style
1. How would you optimize data structures algorithms for GPU-accelerated computing?
2. What parallel processing patterns apply to data structures algorithms?

#### AI Startup Style
1. How would you implement data structures algorithms in a cost-effective, scalable way for a startup?
2. What's the fastest way to prototype a solution using data structures algorithms?

### Resume Tips
- **Technical Skills**: List data structures algorithms under relevant technical skills
- **Project Description**: "Implemented data structures algorithms to [specific outcome], reducing [metric] by [X]%"
- **Keywords**: Include data structures algorithms in your skills section for ATS optimization

### Interview Day Checklist
- [ ] Review core concepts of data structures algorithms
- [ ] Practice 3-5 problems related to data structures algorithms
- [ ] Prepare 2 real-world examples of using data structures algorithms
- [ ] Know the time/space complexity of common data structures algorithms operations
- [ ] Have questions ready about how the company uses data structures algorithms> **Next**: [05 � Two Pointers ?](05-two-pointers.md)


## Difficulty Level

**Level**: Intermediate
**Estimated Study Time**: 30-45 minutes
**Prerequisites**: Complete understanding of previous modules recommended

## Tips & Tricks

**Tip**: Start with the basics — understand the fundamental concepts before moving to advanced topics.

**Tip**: Practice actively — don't just read, implement the code examples yourself.

**Tip**: Connect to prior knowledge — relate new concepts to what you learned in previous modules.

**Pro Tip**: Focus on understanding, not memorizing — understand why things work, not just how.

**Pro Tip**: Review regularly — revisit key concepts after a few days to reinforce learning.

## Memory Tricks

- **Acronym Method**: Create acronyms for lists of concepts
- **Visualization**: Draw diagrams to visualize abstract concepts
- **Teach someone else**: Explaining concepts to others reinforces your understanding
- **Connect to real-world**: Relate technical concepts to everyday experiences
- **Chunking**: Break complex topics into smaller, manageable pieces

## Further Reading

- Official documentation and language specifications
- "Designing Data-Intensive Applications" by Martin Kleppmann
- "System Design Interview" by Alex Xu
- "AI Engineering" by Chip Huyen
- Research papers and blog posts from leading AI labs

## Related Topics

- How this connects to Data Structures & Algorithms fundamentals
- Prerequisites for advanced topics in this module
- Real-world applications in AI engineering systems
- Interview questions that test deep understanding

## FAQs

**Q: How long does it take to master sliding window?
**A**: With consistent practice, 2-4 weeks for basic proficiency, 2-3 months for advanced mastery.

**Q: Do I need to memorize all the details?
**A**: Focus on understanding the core principles. Details can be looked up, but understanding cannot.

**Q: What's the best way to practice?
**A**: Implement the code examples, then modify them to solve different problems. Build small projects.

**Q: How often should I review this material?
**A**: Review after 1 day, 3 days, 1 week, and 1 month for long-term retention.

## Important Notes

> **Note**: Understanding the fundamentals is more important than memorizing syntax.

> **Note**: Don't skip the exercises — they reinforce critical concepts.

> **Note**: This topic frequently appears in technical interviews at top companies.

> **Note**: In real systems, these concepts are used daily by AI engineers.

## Historical Context

The Evolution of this technology reflects decades of research and practical engineering experience.

Understanding the evolution of sliding window helps appreciate why current approaches exist. These concepts have been developed over decades of computer science research and practical engineering experience.

## Coding Standards

- Follow consistent naming conventions (camelCase for variables, PascalCase for types)
- Add clear comments explaining complex logic
- Keep functions focused on a single responsibility
- Write self-documenting code with meaningful names
- Handle errors gracefully and provide informative messages

**Best Practice**: Follow language-specific style guides (PEP 8 for Python, ESLint for TypeScript).

## Security Considerations

- **Input Validation**: Always validate and sanitize inputs
- **Error Handling**: Don't expose internal details in error messages
- **Resource Limits**: Set appropriate limits to prevent denial of service
- **Authentication**: Ensure proper authentication and authorization
- **Data Protection**: Handle sensitive data according to security best practices

## ML Intuition

For AI engineering, understanding sliding window at an intuitive level is crucial. Think of it as building mental models that help you reason about system behavior, debug issues, and make architectural decisions.

## Analogies

Think of sliding window like learning a new language — start with basic vocabulary (fundamentals), then learn grammar (rules), and finally practice conversation (application). The more you practice, the more natural it becomes.

## Capstone Project Link

**Project**: Apply sliding window concepts in a mini-project
**Goal**: Build a small application that demonstrates understanding of core principles
**Duration**: 2-4 hours
**Outcome**: Working implementation with documentation

## Flashcards

**Card 1**: What is the core concept of sliding window?
**Answer**: The fundamental principle that enables efficient and scalable systems.

**Card 2**: When would you apply sliding window in real systems?
**Answer**: When building production AI systems that require reliability, scalability, and maintainability.

**Card 3**: What are the common pitfalls to avoid?
**Answer**: Over-engineering, ignoring edge cases, and not considering production requirements.

## Study Plan

**Day 1**: Read theory and review examples (12 minutes)
**Day 2**: Complete exercises and practice (12 minutes)
**Day 3**: Review flashcards and take quiz (6 minutes)

## Research References

- Academic papers and conference proceedings (NeurIPS, ICML, ICLR)
- Industry whitepapers from leading AI companies
- Technical blogs from Google, Meta, OpenAI, Anthropic
- Open-source implementations and documentation

## Fine-Tuning Notes

When applying sliding window to specific use cases, consider:
- Adapting general principles to your specific domain
- Performance optimization for your target hardware
- Cost considerations for production deployment
- Monitoring and observability in production

## Open-Source Tools

- **LangChain**: Framework for building LLM-powered applications
- **LlamaIndex**: Data framework for connecting LLMs with external data
- **Hugging Face Transformers**: State-of-the-art ML models and datasets
- **Weights & Biases**: Experiment tracking and model evaluation
- **MLflow**: Open-source platform for ML lifecycle management
- **Prometheus + Grafana**: Monitoring and observability stack

## Debugging Guide

**Common Issues**:
- Check input validation and data types
- Verify API keys and authentication
- Monitor resource usage (CPU, memory, GPU)
- Review error logs for stack traces

**Debugging Steps**:
1. Reproduce the issue with minimal input
2. Add logging at key points
3. Check external dependencies
4. Verify configuration settings
5. Test with known-good inputs

## Mock Interview Section

**Quick Fire Questions**:
1. What is the core concept of Data Structures & Algorithms?
2. When would you use this in production?
3. What are the trade-offs?
4. How does this scale?
5. What are common pitfalls?

**Follow-up Questions**:
- How would you optimize this for 10x scale?
- What monitoring would you add?
- How would you test this in production?

## Optimized Implementation

For production systems, consider:
- **Caching**: Cache frequent computations and API responses
- **Batching**: Process multiple items together for efficiency
- **Async/Await**: Use non-blocking I/O for concurrent operations
- **Connection Pooling**: Reuse database and API connections
- **Lazy Loading**: Load resources only when needed

## References

- Official documentation and language specifications
- "Designing Data-Intensive Applications" by Martin Kleppmann
- "System Design Interview" by Alex Xu
- "AI Engineering" by Chip Huyen
- Research papers from NeurIPS, ICML, ICLR
- Industry blogs from Google, Meta, OpenAI, Anthropic

## Evaluation Metrics

**Model Evaluation**:
- Accuracy, Precision, Recall, F1-Score
- BLEU, ROUGE for text generation
- Latency, Throughput, Cost per inference

**System Evaluation**:
- End-to-end latency (p50, p95, p99)
- Error rate and availability
- Resource utilization (CPU, memory, GPU)

## Real-World Examples

**Industry Applications**:
- Google: Search ranking, translation, autocomplete
- Amazon: Product recommendations, Alexa, fraud detection
- Netflix: Content recommendations, personalization
- Tesla: Autonomous driving, computer vision
- OpenAI: ChatGPT, DALL-E, Codex

## Next Topic

After mastering Data Structures & Algorithms, continue to the next module in the curriculum to build upon these foundations and deepen your AI engineering expertise.