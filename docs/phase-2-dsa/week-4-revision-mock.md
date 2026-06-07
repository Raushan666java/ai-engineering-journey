# Week 4: Revision & Mock

**Duration:** July 27 - August 2, 2026 | **Hours:** 35

**Goal:** Solidify all 60 problems, mock interviews

---

## Plan

### Day 1-2: Binary Search

```python
def binary_search(nums: list[int], target: int) -> int:
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
```

**Problems:** Binary Search, Search Rotated Array, Find Minimum

### Day 3-5: Revision

- Redo all problems you got wrong
- Practice explaining solutions out loud
- Write clean code — no revisiting to fix

### Day 6: Mock Interview

- Timer: 45 minutes
- 2 problems (1 Easy + 1 Medium)
- Explain approach BEFORE coding
- Write clean, working code
- No running/debugging

### Day 7: REST

## Final Check

- [ ] 60+ problems solved
- [ ] Arrays: Two pointer, sliding window
- [ ] HashMap: Frequency, lookup patterns
- [ ] Linked List: Reverse, cycle detection
- [ ] Stack/Queue: LIFO/FIFO patterns
- [ ] Trees: DFS, BFS, recursion
- [ ] Binary Search: O(log n) patterns
