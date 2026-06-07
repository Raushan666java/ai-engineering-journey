# Week 2: HashMap & Linked Lists

**Duration:** July 13-19, 2026 | **Hours:** 35

---

## HashMap Pattern

```python
# Most common pattern: count frequencies
def group_anagrams(strs: list[str]) -> list[list[str]]:
    groups = {}
    for s in strs:
        key = "".join(sorted(s))
        if key not in groups:
            groups[key] = []
        groups[key].append(s)
    return list(groups.values())

# Top K frequent
def top_k_frequent(nums: list[int], k: int) -> list[int]:
    count = {}
    for n in nums:
        count[n] = count.get(n, 0) + 1
    # Bucket sort or heap
    buckets = [[] for _ in range(len(nums) + 1)]
    for num, freq in count.items():
        buckets[freq].append(num)
    result = []
    for i in range(len(buckets) - 1, 0, -1):
        for num in buckets[i]:
            result.append(num)
            if len(result) == k:
                return result
```

## Linked List

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

# Reverse linked list
def reverse_list(head: ListNode | None) -> ListNode | None:
    prev = None
    curr = head
    while curr:
        next_node = curr.next
        curr.next = prev
        prev = curr
        curr = next_node
    return prev
```

## Daily Problems

| Day | Topic | Problems |
|-----|-------|----------|
| Mon | HashMap | Group Anagrams, Top K Frequent |
| Tue | HashMap | Valid Sudoku, Encode/Decode Strings |
| Wed | Linked List | Reverse List, Merge Two Lists |
| Thu | Linked List | Cycle Detection, Remove Nth Node |
| Fri | Linked List | Reorder List, Add Two Numbers |
| Sat | Review | HashMap + Linked List |
