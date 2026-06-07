# Week 2 — HashMap & Linked List

HashMap aur Linked List — yeh do patterns faang interviews mein sabse zyada poochhe jaate hain. HashMap O(1) lookup deta hai, Linked List pointer manipulation ka game hai. Dono milke LRU Cache jaise real-world problems solve karte hain.

---

## Group Anagrams (Medium)

```python
# Problem: Strings ko group karo jo anagrams hain
# Input: ["eat","tea","tan","ate","nat","bat"]
# Output: [["eat","tea","ate"],["tan","nat"],["bat"]]

from collections import defaultdict

def group_anagrams(strs: list[str]) -> list[list[str]]:
    groups = defaultdict(list)

    for s in strs:
        key = "".join(sorted(s))  # sorted string = unique anagram signature
        groups[key].append(s)

    return list(groups.values())

# Trace:
# "eat" -> sorted = "aet" -> groups["aet"] = ["eat"]
# "tea" -> sorted = "aet" -> groups["aet"] = ["eat", "tea"]
# "tan" -> sorted = "ant" -> groups["ant"] = ["tan"]
# "ate" -> sorted = "aet" -> groups["aet"] = ["eat", "tea", "ate"]
# "nat" -> sorted = "ant" -> groups["ant"] = ["tan", "nat"]
# "bat" -> sorted = "abt" -> groups["abt"] = ["bat"]
```

**Key Insight:** Sorted string sab anagrams ka same hota hai. Isko hash key banao.

---

## Top K Frequent Elements (Medium)

```python
# Problem: Top k most frequent elements return karo
# Input: nums = [1,1,1,2,2,3], k = 2
# Output: [1, 2]

from collections import Counter

def top_k_frequent(nums: list[int], k: int) -> list[int]:
    count = Counter(nums)           # {1:3, 2:2, 3:1}
    buckets = [[] for _ in range(len(nums) + 1)]

    for num, freq in count.items():
        buckets[freq].append(num)   # bucket index = frequency

    result = []
    for freq in range(len(buckets) - 1, 0, -1):
        for num in buckets[freq]:
            result.append(num)
            if len(result) == k:
                return result

# buckets: [[], [3], [2], [1], [], [], ...]
# freq=3 -> num=1 -> result=[1]
# freq=2 -> num=2 -> result=[1,2] -> len=k, return ✅
```

**Why Bucket Sort?** O(n) time, O(n) space. Heap bhi use kar sakte ho (O(n log k)), par bucket sort faster hai.

---

## Valid Sudoku (Medium)

```python
# Problem: Kya Sudoku board valid hai? (rows, cols, 3x3 boxes)
# Input: 9x9 board with digits "1"-"9" and "."

def is_valid_sudoku(board: list[list[str]]) -> bool:
    rows = [set() for _ in range(9)]
    cols = [set() for _ in range(9)]
    boxes = [set() for _ in range(9)]

    for r in range(9):
        for c in range(9):
            val = board[r][c]
            if val == ".":
                continue

            box_idx = (r // 3) * 3 + (c // 3)

            if val in rows[r] or val in cols[c] or val in boxes[box_idx]:
                return False

            rows[r].add(val)
            cols[c].add(val)
            boxes[box_idx].add(val)

    return True

# Trace for a conflict:
# r=0,c=0, val="5", box_idx=0
# rows[0]={}, cols[0]={}, boxes[0]={} -> add all
# r=0,c=2, val="5", box_idx=0
# "5" in rows[0]? Yes! -> return False ❌
```

**Box Index Formula:** `(r // 3) * 3 + (c // 3)` — box number 0 to 8.

---

## Reverse Linked List (Easy)

```python
# Problem: Linked list reverse karo
# Input: 1 -> 2 -> 3 -> 4 -> 5 -> None
# Output: 5 -> 4 -> 3 -> 2 -> 1 -> None

def reverse_list(head: ListNode | None) -> ListNode | None:
    prev = None
    curr = head

    while curr:
        next_temp = curr.next    # save next
        curr.next = prev         # reverse pointer
        prev = curr              # move prev forward
        curr = next_temp         # move curr forward

    return prev

# Trace:
# Initially: prev=None, curr=1
# Iter1: next=2, 1.next=None, prev=1, curr=2
# Iter2: next=3, 2.next=1,   prev=2, curr=3
# Iter3: next=4, 3.next=2,   prev=3, curr=4
# Iter4: next=5, 4.next=3,   prev=4, curr=5
# Iter5: next=None, 5.next=4, prev=5, curr=None
# Return prev=5 ✅
```

**Visual:** `prev ← curr → next` — har step mein arrow ulta kar do.

---

## Merge Two Sorted Lists (Easy)

```python
# Problem: Do sorted linked lists merge karo
# Input: 1->2->4, 1->3->4
# Output: 1->1->2->3->4->4

def merge_two_lists(list1: ListNode | None, list2: ListNode | None) -> ListNode | None:
    dummy = ListNode(0)    # dummy node — pointer template
    tail = dummy

    while list1 and list2:
        if list1.val < list2.val:
            tail.next = list1
            list1 = list1.next
        else:
            tail.next = list2
            list2 = list2.next
        tail = tail.next

    tail.next = list1 or list2  # jo bacha attach kar do

    return dummy.next

# Trace:
# dummy(0) -> 1(1) -> merge(1->2->4, 1->3->4):
# 1==1, pick list2: dummy->1(2)
# 1<3, pick list1: 1(2)->1(1), list1=2
# 2<3, pick list1: ->2, list1=4
# 3<4, pick list2: ->3, list2=4
# 4==4, pick list1: ->4, list1=None
# tail.next = list2(4) -> dummy->1->1->2->3->4->4 ✅
```

**Trick:** `dummy` node — linked list problems mein iska bahut use hota hai.

---

## Linked List Cycle (Easy)

```python
# Problem: Linked list mein cycle hai kya?
# Input: 3->2->0->-4->(back to 2)
# Output: True

def has_cycle(head: ListNode | None) -> bool:
    slow = fast = head

    while fast and fast.next:
        slow = slow.next          # 1 step
        fast = fast.next.next     # 2 steps
        if slow == fast:
            return True

    return False
```

**Floyd's Algorithm:** Fast runner slow runner ko kabhi na kabhi pakad lega agar cycle hai toh.

---

## Remove Nth Node From End (Medium)

```python
# Problem: Linked list se nth node from end remove karo
# Input: 1->2->3->4->5, n=2
# Output: 1->2->3->5

def remove_nth_from_end(head: ListNode | None, n: int) -> ListNode | None:
    dummy = ListNode(0, head)
    left = dummy
    right = head

    # right ko n steps aage badhao
    for _ in range(n):
        right = right.next

    # ab right ko end tak le jao, left saath chalega
    while right:
        left = left.next
        right = right.next

    # left.next = target node
    left.next = left.next.next

    return dummy.next

# Trace: n=2
# dummy(0)->1->2->3->4->5
# right ko 2 steps: right=3
# Loop: right=3, left=0 -> right=4, left=1 -> right=5, left=2 -> right=None, left=3
# left.next = 3.next = 5
# Result: dummy(0)->1->2->3->5 ✅
```

---

## Reorder List (Medium)

```python
# Problem: L0->Ln->L1->Ln-1->L2->... pattern mein reorder karo
# Input: 1->2->3->4
# Output: 1->4->2->3

def reorder_list(head: ListNode | None) -> None:
    # Step 1: Find middle — slow/fast
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    # Step 2: Reverse second half
    second = reverse_list(slow.next)
    slow.next = None
    # Step 3: Merge
    first = head
    while second:
        tmp1, tmp2 = first.next, second.next
        first.next = second
        second.next = tmp1
        first, second = tmp1, tmp2

# Trace: 1->2->3->4
# Step 1: slow=2, fast=4 (middle = 2)
# Step 2: reverse(3->4) -> 4->3
# Step 3: first=1, second=4
# 1->4, 4->2, first=2, second=3
# 2->3, 3->None
# Result: 1->4->2->3 ✅
```

**3-step pattern:** Middle dhundho → Second half reverse karo → Interleave merge karo.

---

## LRU Cache (Medium)

```python
# Problem: Fixed capacity cache — least recently used evict karo
# get(key) -> O(1), put(key, val) -> O(1)

from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache = OrderedDict()

    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1
        self.cache.move_to_end(key)  # recently used -> end
        return self.cache[key]

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.capacity:
            self.cache.popitem(last=False)  # remove LRU (front)

# Trace: capacity=2
# put(1,1) -> cache={1:1}
# put(2,2) -> cache={1:1, 2:2}
# get(1)   -> move 1 to end: {2:2, 1:1}, return 1
# put(3,3) -> cache={1:1, 2:2, 3:3} -> over capacity
#            popitem(last=False) removes {1:1}
#            cache={2:2, 3:3} ✅
```

**Interview Deep Dive:** Toh bhai interview mein bolenge — *"OrderedDict nahi use kar sakte, doubly linked list banao."* Yeh raha actual HashMap + DLL implementation:

```python
class ListNode:
    def __init__(self, key=0, val=0):
        self.key = key
        self.val = val
        self.prev = None
        self.next = None

class LRUCache:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache = {}  # key -> node
        self.head = ListNode()  # dummy head (MRU side)
        self.tail = ListNode()  # dummy tail (LRU side)
        self.head.next = self.tail
        self.tail.prev = self.head

    def _remove(self, node):
        node.prev.next = node.next
        node.next.prev = node.prev

    def _add_to_front(self, node):
        node.next = self.head.next
        node.prev = self.head
        self.head.next.prev = node
        self.head.next = node

    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1
        node = self.cache[key]
        self._remove(node)
        self._add_to_front(node)
        return node.val

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self._remove(self.cache[key])
        node = ListNode(key, value)
        self.cache[key] = node
        self._add_to_front(node)
        if len(self.cache) > self.capacity:
            lru = self.tail.prev
            self._remove(lru)
            del self.cache[lru.key]
```

---

## Ransom Note (Easy)

```python
# Problem: Kya magazine letters se ransom note bana sakte hain?
# Input: note = "aa", magazine = "aab"
# Output: True

from collections import Counter

def can_construct(ransom_note: str, magazine: str) -> bool:
    available = Counter(magazine)

    for ch in ransom_note:
        if available[ch] == 0:
            return False
        available[ch] -= 1

    return True

# Trace:
# magazine = "aab", available = {"a":2, "b":1}
# note = "aa"
# ch='a': available["a"]=2 -> 1
# ch='a': available["a"]=1 -> 0
# Done -> True ✅

# One-liner (pyi ka style):
def can_construct_oneliner(ransom_note: str, magazine: str) -> bool:
    return not Counter(ransom_note) - Counter(magazine)
```

---

## Week 2 Targets

- [ ] Group Anagrams — sorted string key pattern
- [ ] Top K Frequent Elements — HashMap + bucket sort
- [ ] Valid Sudoku — HashSet for rows/cols/boxes
- [ ] Reverse Linked List — iterative pointer reversal
- [ ] Merge Two Sorted Lists — dummy node pattern
- [ ] Linked List Cycle — Floyd's slow/fast pointer
- [ ] Remove Nth Node From End — two-pointer offset
- [ ] Reorder List — middle + reverse + merge
- [ ] LRU Cache — HashMap + doubly linked list
- [ ] Ransom Note — Counter subtraction

**Week 2 Flow:** HashMap key-value pairs mein maharat haasil karo → Linked List pointers ka game samjho → LRU mein dono combine karo.
