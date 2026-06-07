# Week 4 — Binary Search & Revision

Binary search sirf sorted arrays mein nahi chalti. Jab bhi "kya yeh possible hai?" ka answer **monotonic** ho (False...False...True...True), binary search lag sakti hai. Week 4 mein naye patterns seekho + purani problems revise karo + mock test do.

---

## Binary Search (Easy)

```python
# Problem: Sorted array mein target dhundho
# Input: [-1,0,3,5,9,12], target=9
# Output: 4

def binary_search(nums: list[int], target: int) -> int:
    left, right = 0, len(nums) - 1

    while left <= right:
        mid = left + (right - left) // 2   # overflow se bachne ka tareeka

        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1

# Trace: [-1,0,3,5,9,12], target=9
# left=0, right=5, mid=2, nums[2]=3 < 9 -> left=3
# left=3, right=5, mid=4, nums[4]=9 == 9 -> return 4 ✅
```

**Templates:** `left <= right` ka matlab hai poora array search karo. `left < right` tab use karo jab guarantee ho ki element exists karta hai.

---

## Search in Rotated Sorted Array (Medium)

```python
# Problem: Rotated sorted array mein target dhundho
# Input: nums = [4,5,6,7,0,1,2], target = 0
# Output: 4

def search_rotated(nums: list[int], target: int) -> int:
    left, right = 0, len(nums) - 1

    while left <= right:
        mid = left + (right - left) // 2

        if nums[mid] == target:
            return mid

        # Left half sorted hai?
        if nums[left] <= nums[mid]:
            if nums[left] <= target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        else:  # Right half sorted hai
            if nums[mid] < target <= nums[right]:
                left = mid + 1
            else:
                right = mid - 1

    return -1

# Trace: [4,5,6,7,0,1,2], target=0
# left=0, right=6, mid=3, nums[3]=7, 7!=0
# left=0<=7=mid -> left half sorted
# 0 in [4,7)? No -> left=4
# left=4, right=6, mid=5, nums[5]=1, 1!=0
# left=4<=1=mid -> left half sorted
# 0 in [0,1)? Yes -> right=4
# left=4, right=4, mid=4, nums[4]=0 == 0 -> return 4 ✅
```

**Key Insight:** Mid nikalne ke baad, ek half toh sorted hi hoga. Decide karo ki target us half mein hai ya nahi.

---

## Find Minimum in Rotated Sorted Array (Medium)

```python
# Problem: Rotated array mein minimum dhundho
# Input: [3,4,5,1,2]
# Output: 1

def find_min(nums: list[int]) -> int:
    left, right = 0, len(nums) - 1

    while left < right:
        mid = left + (right - left) // 2

        if nums[mid] > nums[right]:
            # Mid right se bada hai → pivot right mein hai
            left = mid + 1
        else:
            # Mid right se chhota/pivot left mein
            right = mid

    return nums[left]

# Trace: [3,4,5,1,2]
# left=0, right=4, mid=2, nums[2]=5 > nums[4]=2 -> left=3
# left=3, right=4, mid=3, nums[3]=1 < nums[4]=2 -> right=3
# left=3, right=3 -> exit, return nums[3]=1 ✅
```

**Difference from Search Rotated:** Yahaan sirf minimum chahiye. Array always non-empty hai toh `left < right` use karo.

---

## Koko Eating Bananas (Medium)

```python
# Problem: Koko ko saare bananas k khane mein min speed chahiye
# Input: piles = [3,6,7,11], h = 8
# Output: 4

import math

def min_eating_speed(piles: list[int], h: int) -> int:
    left, right = 1, max(piles)

    def can_eat_all(speed: int) -> bool:
        hours = 0
        for p in piles:
            hours += math.ceil(p / speed)
        return hours <= h

    while left < right:
        mid = left + (right - left) // 2

        if can_eat_all(mid):
            right = mid    # possible hai, aur kam try karo
        else:
            left = mid + 1 # nahi ho raha, speed badhao

    return left

# Trace: piles=[3,6,7,11], h=8
# left=1, right=11, mid=6
#   can_eat_all(6)? ceil(3/6)+ceil(6/6)+ceil(7/6)+ceil(11/6)
#                 = 1+1+2+2 = 6 <= 8 -> True, right=6
# left=1, right=6, mid=3
#   can_eat_all(3)? 1+2+3+4=10 > 8 -> False, left=4
# left=4, right=6, mid=5
#   can_eat_all(5)? 1+2+2+3=8 <= 8 -> True, right=5
# left=4, right=5, mid=4
#   can_eat_all(4)? 1+2+2+3=8 <= 8 -> True, right=4
# left=4, right=4 -> return 4 ✅
```

**Pattern:** Jab bhi "minimum X such that condition Y" — binary search on answer. `can_eat_all` monotonic hai: speed badhegi toh hours kam honge.

---

## Time Based Key-Value Store (Medium)

```python
# Problem: Key ke different timestamps ke values store karo, get(timestamp) nearest previous value de
# Input:
#   set("foo", "bar", 1)
#   get("foo", 1) -> "bar"
#   get("foo", 3) -> "bar" (timestamp 1 <= 3)
#   set("foo", "bar2", 4)
#   get("foo", 4) -> "bar2"
#   get("foo", 5) -> "bar2"

from collections import defaultdict

class TimeMap:
    def __init__(self):
        self.store = defaultdict(list)  # key -> [(timestamp, value)]

    def set(self, key: str, value: str, timestamp: int) -> None:
        self.store[key].append((timestamp, value))

    def get(self, key: str, timestamp: int) -> str:
        if key not in self.store:
            return ""

        arr = self.store[key]

        # Binary search — nearest previous timestamp dhundho
        left, right = 0, len(arr) - 1

        if timestamp < arr[left][0]:
            return ""

        while left <= right:
            mid = left + (right - left) // 2

            if arr[mid][0] == timestamp:
                return arr[mid][1]
            elif arr[mid][0] < timestamp:
                left = mid + 1
            else:
                right = mid - 1

        # right = nearest previous index
        return arr[right][1]

# Trace:
# set("foo","bar",1) -> store["foo"] = [(1,"bar")]
# get("foo",3):
#   arr=[(1,"bar")], left=0, right=0, mid=0
#   1 < 3 -> left=1
#   left > right -> exit, return arr[0][1] = "bar" ✅
# set("foo","bar2",4) -> store["foo"] = [(1,"bar"),(4,"bar2")]
# get("foo",3):
#   arr=[(1,"bar"),(4,"bar2")]
#   left=0, right=1, mid=0, 1<3 -> left=1
#   left=1, right=1, mid=1, 4>3 -> right=0
#   left>right -> exit, return arr[0][1] = "bar" ✅
```

**Why Binary Search?** Timestamps strictly increasing aate hain. Sorted array mein binary search natural choice hai.

---

## Revision — Weak Problems from Weeks 1-3

### Step 1: Diagnose Weak Areas

Apni progress check karo. Week 1-3 ke problems list mein se mark karo:

| Status | Meaning | Action |
|--------|---------|--------|
| 🟢 Could solve alone without hints | Strong | Skip |
| 🟡 Needed hint but got it | Okay | Do 1 more |
| 🔴 Couldn't solve / took >45 min | Weak | Redo 3-5 times |

### Step 2: Redo Strategy

Weak problems ke liye:
1. Solution dekho — code copy mat karo, logic samjho
2. Blank page par code likho without looking
3. Agar fail ho — dobra dekho, fir blank page par likho
4. 3 clear runs hone tak repeat karo

### Step 3: Must-Redo Problems

```
🔴 Arrays:    3Sum, Product of Array Except Self, Longest Substring
🔴 HashMap:   LRU Cache, Group Anagrams
🔴 LinkedList: Reorder List
🔴 Trees:     Validate BST, Kth Smallest
🔴 Stack:     Daily Temperatures
```

---

## Pattern Review Summary

### Two Pointer

```python
# Use when: Sorted array, pair/triplet dhundhna ho
# Template:
left, right = 0, len(arr) - 1
while left < right:
    s = arr[left] + arr[right]
    if s == target: return [left, right]
    elif s < target: left += 1
    else: right -= 1

# Problems: Two Sum II, 3Sum, Remove Nth Node, Container With Most Water
```

### Sliding Window

```python
# Use when: Contiguous subarray/substring ka koi property check karni ho
# Template:
left = 0
for right in range(len(arr)):
    # window expand karo
    while window_invalid():
        # window shrink karo
        left += 1
    # update result

# Problems: Best Time to Buy/Sell, Longest Substring Without Repeating, Max Sum Subarray
```

### Kadane's Algorithm

```python
# Use when: Maximum subarray sum / product
# Template:
current = arr[0]
best = arr[0]
for num in arr[1:]:
    current = max(num, current + num)   # ya min for product
    best = max(best, current)

# Problems: Maximum Subarray, Maximum Product Subarray
```

### HashMap Counter

```python
# Use when: Frequency count, lookup optimization, duplicate detection
# Template:
from collections import Counter, defaultdict
counts = Counter(arr)                  # frequency
groups = defaultdict(list)            # grouping
seen = {}                             # value -> index mapping

# Problems: Two Sum, Valid Anagram, Group Anagrams, Top K Frequent
```

### Fast & Slow (Floyd's)

```python
# Use when: Cycle detection, middle of linked list
# Template:
slow = fast = head
while fast and fast.next:
    slow = slow.next
    fast = fast.next.next
    if slow == fast:  # cycle!

# Problems: Linked List Cycle, Find Duplicate Number, Happy Number, Middle of LL
```

### Binary Search on Answer

```python
# Use when: "Minimum X such that condition Y"
# Template:
def feasible(x):
    pass  # monotonic function

left, right = min_possible, max_possible
while left < right:
    mid = left + (right - left) // 2
    if feasible(mid):
        right = mid
    else:
        left = mid + 1
return left

# Problems: Koko Eating Bananas, Capacity To Ship Packages, Split Array Largest Sum
```

---

## Mock Test — 5 Problems in 2 Hours

### Rules

```
⏱️  Time: 2 hours
📝  5 problems (2 Easy, 2 Medium, 1 Medium-Hard)
❌  No internet — sirf local Python environment
📋  Write on paper first, then code
✅  Target: 3/5 correct
```

### Mock Set 1

| # | Problem | Difficulty | Pattern | Time Limit |
|---|---------|------------|---------|------------|
| 1 | Valid Palindrome | Easy | Two Pointer | 15 min |
| 2 | Maximum Depth of Binary Tree | Easy | DFS | 10 min |
| 3 | Group Anagrams | Medium | HashMap | 20 min |
| 4 | Daily Temperatures | Medium | Monotonic Stack | 25 min |
| 5 | Search in Rotated Array | Medium | Binary Search | 30 min |

### Mock Set 2 (Alternative)

| # | Problem | Difficulty | Pattern | Time Limit |
|---|---------|------------|---------|------------|
| 1 | Contains Duplicate | Easy | HashSet | 10 min |
| 2 | Reverse Linked List | Easy | Pointer | 15 min |
| 3 | LRU Cache | Medium | HashMap+DLL | 35 min |
| 4 | Kth Smallest in BST | Medium | Inorder | 20 min |
| 5 | Koko Eating Bananas | Medium | Binary Search | 25 min |

### Mock Instructions

```
1. ⏰ Time start karo -> problems kholo
2. Har problem par 5 min socho BEFORE coding
3. Brute force likh do pehle (20% marks)
4. Toh optimize karo (80% marks)
5. Edge cases check karo: empty array, single element, negative, overflow
6. Time bach gaya toh optimize yaa test cases likho
```

---

## Week 4 Targets

- [ ] Binary Search — classic template `left <= right`
- [ ] Search in Rotated Array — sorted half identification
- [ ] Find Minimum in Rotated Array — `nums[mid] > nums[right]` check
- [ ] Koko Eating Bananas — binary search on answer pattern
- [ ] Time Based Key-Value Store — binary search on timestamps
- [ ] Revision of weak problems from weeks 1-3
- [ ] Pattern review — Two Pointer, Sliding Window, Kadane's
- [ ] Mock test — 5 problems in 2 hours
- [ ] Pattern cheat sheet memorize karo
- [ ] Phase 2 complete celebrate karo! 🎉

---

## Phase 2 Complete Checklist

```
Week 1: Arrays & Strings     [  ] 15 problems
Week 2: HashMap & LinkedList [  ] 15 problems
Week 3: Trees & Stack        [  ] 15 problems
Week 4: Binary Search & Rev  [  ] 15 problems
-------------------------------------------
Total: 60 problems           [  ]

Next: Phase 3 — AI Engineering
      LangChain, embeddings, RAG, agents
      DSA parallel practice continue rahega
```

**Bhai, 60 problems ho gayi.** Zyada nahi, par quality practice hai. Ab AI Engineering fundamentals mein jump karo — DSA ka jo muscle memory bana hai, woh system design aur debugging mein kaam aayega. 🚀
