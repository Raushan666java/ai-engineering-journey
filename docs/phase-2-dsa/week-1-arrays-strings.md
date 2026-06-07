# Week 1: Arrays & Strings

**Duration:** July 6-12, 2026 | **Hours:** 35

---

## Key Concepts

### Time Complexity

| Notation | Name | Example |
|----------|------|---------|
| O(1) | Constant | Array access `arr[i]` |
| O(log n) | Logarithmic | Binary search |
| O(n) | Linear | Single loop |
| O(n log n) | Linearithmic | Sorting |
| O(n²) | Quadratic | Nested loops |

### Two Pointer Technique

```python
def two_sum_sorted(nums: list[int], target: int) -> list[int]:
    left, right = 0, len(nums) - 1
    while left < right:
        curr = nums[left] + nums[right]
        if curr == target:
            return [left, right]
        elif curr < target:
            left += 1
        else:
            right -= 1
    return []
```

### Sliding Window

```python
def max_sum_subarray(nums: list[int], k: int) -> int:
    window_sum = sum(nums[:k])
    max_sum = window_sum
    
    for i in range(k, len(nums)):
        window_sum += nums[i] - nums[i - k]
        max_sum = max(max_sum, window_sum)
    
    return max_sum
```

## Daily Problems

| Day | Problems | Difficulty |
|-----|----------|------------|
| Mon | Two Sum, Contains Duplicate | Easy |
| Tue | Best Time to Buy/Sell Stock, Valid Anagram | Easy |
| Wed | Maximum Subarray, Move Zeroes | Easy |
| Thu | 3Sum, Product of Array Except Self | Medium |
| Fri | Maximum Product Subarray, Longest Substring | Medium |
| Sat | Review + Extra practice | Mixed |
| Sun | REST | — |

## Patterns

1. **Two Sum** → Hashmap for O(1) lookup
2. **Anagram** → Sort or count characters
3. **Subarray** → Sliding window or prefix sum
4. **Duplicate** → Hashset

## Resources

- [Neetcode Arrays](https://neetcode.io)
- [Visualgo](https://visualgo.net) — visualize algorithms
