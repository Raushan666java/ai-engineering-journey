# Week 1 — Arrays & Strings

## Two Sum — Explained

```python
# Problem: Array mein 2 numbers dhundho jo target sum dein
# Input: [2, 7, 11, 15], target = 9
# Output: [0, 1]  (2 + 7 = 9)

# Optimal O(n) — HashMap use karo
def two_sum(nums: list[int], target: int) -> list[int]:
    seen = {}

    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i

    return []

# Trace: nums = [2, 7, 11, 15], target = 9
# i=0, num=2, complement=7, seen={}, 7 not in seen, seen={2:0}
# i=1, num=7, complement=2, 2 in seen! return [0, 1] ✅
```

## Best Time to Buy and Sell Stock

```python
# Problem: Maximum profit dhundho
# Input: [7, 1, 5, 3, 6, 4]
# Output: 5  (buy at 1, sell at 6)

def max_profit(prices: list[int]) -> int:
    min_price = float('inf')
    max_profit = 0

    for price in prices:
        if price < min_price:
            min_price = price
        elif price - min_price > max_profit:
            max_profit = price - min_price

    return max_profit

# Trace:
# price=7: min=7, profit=0
# price=1: min=1, profit=0
# price=5: min=1, profit=4
# price=3: min=1, profit=4
# price=6: min=1, profit=5 ✅
```

## Maximum Subarray (Kadane's Algorithm)

```python
# Problem: Largest sum subarray dhundho
# Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
# Output: 6  ([4, -1, 2, 1])

def max_subarray(nums: list[int]) -> int:
    max_sum = nums[0]
    current_sum = nums[0]

    for num in nums[1:]:
        current_sum = max(num, current_sum + num)
        max_sum = max(max_sum, current_sum)

    return max_sum
```

## Contains Duplicate

```python
# Problem: Koi duplicate element hai?
# Input: [1, 2, 3, 1]
# Output: True

def contains_duplicate(nums: list[int]) -> bool:
    seen = set()
    for num in nums:
        if num in seen:
            return True
        seen.add(num)
    return False
```

## Valid Anagram

```python
# Problem: Kya s1 aur s2 anagram hain?
# Input: s1 = "anagram", s2 = "nagaram"
# Output: True

def is_anagram(s: str, t: str) -> bool:
    if len(s) != len(t):
        return False
    counts = {}
    for c in s:
        counts[c] = counts.get(c, 0) + 1
    for c in t:
        if c not in counts or counts[c] == 0:
            return False
        counts[c] -= 1
    return True

# Simpler:
def is_anagram_simple(s: str, t: str) -> bool:
    from collections import Counter
    return Counter(s) == Counter(t)
```

## Move Zeroes

```python
# Problem: Saare zeroes end mein shift karo, order maintain
# Input: [0, 1, 0, 3, 12]
# Output: [1, 3, 12, 0, 0]

def move_zeroes(nums: list[int]) -> None:
    pos = 0
    for i in range(len(nums)):
        if nums[i] != 0:
            nums[pos], nums[i] = nums[i], nums[pos]
            pos += 1
```

## Week 1 Targets

- [ ] Two Sum — O(n) HashMap approach
- [ ] Buy/Sell Stock — single pass
- [ ] Contains Duplicate — HashSet
- [ ] Maximum Subarray — Kadane's
- [ ] Move Zeroes — Two Pointer
- [ ] Valid Anagram — HashMap/Counter
- [ ] Valid Palindrome — Two Pointer
- [ ] 3Sum — Two Pointer
- [ ] Product of Array Except Self — Prefix/Suffix
- [ ] Merge Intervals — Sorting
