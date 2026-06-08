# Cycle Detection - Floyd's Algorithm

## Table of Contents
1. [Introduction](#introduction)
2. [Floyd's Algorithm Basics](#basics)
3. [Mathematical Proof](#proof)
4. [Applications](#applications)
5. [Step-by-Step Examples](#examples)
6. [Interview Questions](#interview)

---

## Introduction {#introduction}

### The Cycle Detection Problem

**Problem**: Given a linked list, determine if it contains a cycle (loop).

**Cycle**: A sequence of nodes where the last node points back to a previous node, creating a loop.

```
Example with cycle:
1 -> 2 -> 3 -> 4 -> 5
          ↑         |
          |_________|

Example without cycle:
1 -> 2 -> 3 -> 4 -> 5 -> null
```

### Why Important?

1. **Data Structure Integrity**: Detect corrupted linked lists
2. **Algorithm Analysis**: Identify infinite loops
3. **Graph Problems**: Cycle detection in graphs
4. **Array Problems**: Find duplicates using "array as linked list" trick

---

## Floyd's Algorithm Basics {#basics}

### The Tortoise and Hare

**Concept**: Use two pointers moving at different speeds:
- **Slow pointer** (tortoise): Moves 1 step at a time
- **Fast pointer** (hare): Moves 2 steps at a time

**Key Insight**: If there's a cycle, the fast pointer will eventually meet the slow pointer inside the cycle.

### Algorithm

```java
boolean hasCycle(ListNode head) {
    if (head == null || head.next == null) {
        return false;
    }
    
    ListNode slow = head;
    ListNode fast = head;
    
    while (fast != null && fast.next != null) {
        slow = slow.next;       // Move 1 step
        fast = fast.next.next;  // Move 2 steps
        
        if (slow == fast) {
            return true;  // Cycle detected
        }
    }
    
    return false;  // No cycle
}
```

### Why It Works

**If no cycle**:
- Fast pointer reaches end (null)
- Algorithm terminates

**If cycle exists**:
- Both pointers enter the cycle
- Fast pointer gains on slow pointer
- Eventually they meet

**Think of it as a race track**:
- If the track is circular (cycle), faster runner will lap slower runner
- If track has an end (no cycle), faster runner reaches finish first

---

## Mathematical Proof {#proof}

### Setup

Let's define:
- `x` = distance from head to cycle start
- `y` = distance from cycle start to meeting point
- `c` = cycle length

```
Head ... x ... Cycle Start ... y ... Meeting Point
                |                         |
                |_________c_______________|
```

### When They Meet

**Slow pointer traveled**: `x + y`

**Fast pointer traveled**: `x + y + nc` (where n = number of complete cycles)

Since fast is 2× slow:
```
2(x + y) = x + y + nc
2x + 2y = x + y + nc
x + y = nc
x = nc - y
```

**Important**: Distance from head to cycle start (`x`) equals distance from meeting point to cycle start (`nc - y`).

### Finding Cycle Start

After detecting cycle:
1. Reset slow pointer to head
2. Move both pointers one step at a time
3. They meet at cycle start

**Why?**
- Slow starts at head, needs `x` steps to reach cycle start
- Fast starts at meeting point, needs `nc - y` steps to reach cycle start
- Since `x = nc - y`, they meet at cycle start

```java
ListNode detectCycle(ListNode head) {
    // Phase 1: Detect cycle
    ListNode slow = head;
    ListNode fast = head;
    
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow == fast) {
            // Phase 2: Find cycle start
            slow = head;
            while (slow != fast) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow;  // Cycle start
        }
    }
    
    return null;  // No cycle
}
```

### Cycle Length

Once meeting point is found:
```java
int getCycleLength(ListNode meetingPoint) {
    int length = 1;
    ListNode temp = meetingPoint.next;
    
    while (temp != meetingPoint) {
        length++;
        temp = temp.next;
    }
    
    return length;
}
```

---

## Applications {#applications}

### 1. Linked List Cycle Detection

**Problem**: Detect cycle in linked list

**Solution**: Floyd's algorithm directly

**Time**: O(n)  
**Space**: O(1)

### 2. Find Duplicate in Array [1..n]

**Problem**: Array of n+1 integers from 1 to n, find duplicate

**Key Insight**: Treat array as linked list
- `nums[i]` is the "next" pointer
- Values are in range [1, n], so valid indices
- Duplicate creates a cycle

```java
int findDuplicate(int[] nums) {
    int slow = nums[0];
    int fast = nums[0];
    
    // Detect cycle
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow != fast);
    
    // Find cycle start (duplicate)
    slow = nums[0];
    while (slow != fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    
    return slow;
}
```

**Example**:
```
nums = [1, 3, 4, 2, 2]

Treat as linked list:
0 -> 1 -> 3 -> 2 -> 4 -> 2 (cycle!)
                    ↑____|

Duplicate is 2
```

### 3. Happy Number

**Problem**: Starting with any positive integer, replace it with sum of squares of its digits. Repeat. Happy if reaches 1.

**Key Insight**: Either reaches 1 or enters a cycle

```java
boolean isHappy(int n) {
    int slow = n;
    int fast = n;
    
    do {
        slow = sumOfSquares(slow);
        fast = sumOfSquares(sumOfSquares(fast));
    } while (slow != fast);
    
    return slow == 1;
}

int sumOfSquares(int n) {
    int sum = 0;
    while (n > 0) {
        int digit = n % 10;
        sum += digit * digit;
        n /= 10;
    }
    return sum;
}
```

**Example**:
```
n = 19
1² + 9² = 82
8² + 2² = 68
6² + 8² = 100
1² + 0² + 0² = 1  → Happy!

n = 2
2² = 4
4² = 16
1² + 6² = 37
3² + 7² = 58
5² + 8² = 89
8² + 9² = 145
1² + 4² + 5² = 42
4² + 2² = 20
2² + 0² = 4  → Cycle! Not happy.
```

### 4. Intersection of Two Linked Lists

**Variation**: Use similar two-pointer technique

```java
ListNode getIntersectionNode(ListNode headA, ListNode headB) {
    ListNode a = headA;
    ListNode b = headB;
    
    while (a != b) {
        a = (a == null) ? headB : a.next;
        b = (b == null) ? headA : b.next;
    }
    
    return a;  // Intersection or null
}
```

**Why it works**:
- If intersection exists, pointers travel same total distance
- Distance for both: `lenA + lenB - intersection length`

---

## Step-by-Step Examples {#examples}

### Example 1: Simple Cycle

```
List: 1 -> 2 -> 3 -> 4 -> 5
               ↑         |
               |_________|
```

**Step-by-step**:
```
Initial:     slow=1, fast=1

Step 1:      slow=2, fast=3
Step 2:      slow=3, fast=5
Step 3:      slow=4, fast=4  → MEET! Cycle detected

Find start:
Reset slow:  slow=1, fast=4
Step 1:      slow=2, fast=5
Step 2:      slow=3, fast=3  → Cycle starts at node 3
```

### Example 2: No Cycle

```
List: 1 -> 2 -> 3 -> 4 -> 5 -> null
```

**Step-by-step**:
```
Initial:     slow=1, fast=1

Step 1:      slow=2, fast=3
Step 2:      slow=3, fast=5
Step 3:      slow=4, fast=null  → No cycle
```

### Example 3: Find Duplicate

```
nums = [3, 1, 3, 4, 2]

Array as list:
0 -> 3 -> 4 -> 2 -> 3 (cycle!)
     ↑              |
     |______________|
```

**Step-by-step**:
```
Initial:     slow=3, fast=3

Step 1:      slow=4, fast=2
Step 2:      slow=2, fast=4
Step 3:      slow=3, fast=3  → MEET!

Find duplicate:
Reset slow:  slow=3, fast=3
Already equal → Duplicate is 3
```

---

## Interview Questions {#interview}

### Easy

1. **Linked List Cycle**
   - Detect if cycle exists
   - Solution: Floyd's algorithm

2. **Happy Number**
   - Detect cycle in sum of squares
   - Solution: Slow and fast pointers

### Medium

3. **Linked List Cycle II**
   - Find cycle start node
   - Solution: Two-phase Floyd's

4. **Find Duplicate Number**
   - Array [1..n] with duplicate
   - Solution: Array as linked list

5. **Intersection of Two Lists**
   - Find intersection node
   - Solution: Two-pointer variation

### Hard

6. **Circular Array Loop**
   - Detect cycle with direction constraint
   - Solution: Modified Floyd's

7. **Remove Loop in Linked List**
   - Detect and break cycle
   - Solution: Floyd's + break link

### Common Follow-ups

**Q: Why not use HashSet?**
- Floyd's: O(1) space
- HashSet: O(n) space
- Floyd's is more space-efficient

**Q: Can slow and fast start at different positions?**
- Yes, but typically start together for simplicity
- Still works if fast starts ahead

**Q: What if fast is 3 steps instead of 2?**
- Still works but might miss meeting point
- Could require multiple laps
- 2 is optimal (proven mathematically)

**Q: Time complexity?**
- O(n) where n is number of nodes
- At most 2n steps before meeting
- O(n) to find cycle start

**Q: Space complexity?**
- O(1) - only two pointers
- Big advantage over HashSet O(n)

---

## Comparison: Floyd's vs HashSet

| Aspect | Floyd's Algorithm | HashSet Approach |
|--------|-------------------|------------------|
| **Time** | O(n) | O(n) |
| **Space** | O(1) | O(n) |
| **Detect Cycle** | ✅ Yes | ✅ Yes |
| **Find Start** | ✅ Yes | ✅ Yes |
| **Cycle Length** | ✅ Yes | ✅ Yes |
| **Memory** | Minimal | High |
| **Suitable for** | Large lists | Small lists |

---

## Practice Problems

### Linked List Problems
1. Linked List Cycle (LeetCode 141)
2. Linked List Cycle II (LeetCode 142)
3. Intersection of Two Linked Lists (LeetCode 160)
4. Remove Linked List Elements
5. Palindrome Linked List

### Array Problems
6. Find the Duplicate Number (LeetCode 287)
7. Missing Number
8. Find All Duplicates in Array

### Other Applications
9. Happy Number (LeetCode 202)
10. Circular Array Loop (LeetCode 457)

---

## Key Takeaways

✅ **Two pointers** at different speeds detect cycles efficiently  
✅ **O(1) space** advantage over HashSet  
✅ **Mathematical proof** guarantees correctness  
✅ **Two phases**: Detect cycle, then find start  
✅ **Versatile**: Works for lists, arrays, sequences  
✅ **Meeting point** is not necessarily the cycle start  
✅ **Distance from head to start** = **distance from meeting to start**  
✅ **Optimal speed ratio** is 1:2 (slow:fast)

---

## Interview Tips

1. **Always check for null** before traversal
2. **Explain the analogy** (tortoise and hare on race track)
3. **Draw diagrams** to visualize pointer movement
4. **Mention space advantage** over HashSet
5. **Know the math** (x = nc - y)
6. **Handle edge cases**: Empty list, single node, no cycle
7. **Two-phase approach**: Detect first, then find details
8. **Array as list trick**: Powerful for duplicate problems

