# 🔗 Linked Lists - Complete Question Set (Love Babbar + Striver)
## Total: 52 Questions with Java Solutions & Theory

---

## 📋 Theory & Patterns

### Key Concepts:
1. **Node Structure** - Data + Reference to next node
2. **Types** - Singly, Doubly, Circular linked lists
3. **Operations** - Insert, Delete, Search, Reverse
4. **Two Pointers** - Fast/slow for cycle detection, middle finding
5. **Dummy Nodes** - Simplify edge cases in insertion/deletion

### Important Algorithms:
- **Floyd's Cycle Detection** - Detect and find cycle start
- **Merge Sort** - Sort linked list in O(n log n)
- **Reverse Operations** - Reverse entire list or in groups
- **Intersection** - Find intersection point of two lists

### Node Definition:
```java
class ListNode {
    int val;
    ListNode next;
    
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

class DoublyListNode {
    int val;
    DoublyListNode next;
    DoublyListNode prev;
    
    DoublyListNode(int val) { this.val = val; }
}
```

---

## 💡 Love Babbar Linked List Questions (122-158)

### 122. Reverse a Linked List
**Problem**: Reverse a singly linked list  
**Difficulty**: Easy  
**Pattern**: Three Pointers

```java
// Iterative approach
public ListNode reverseList(ListNode head) {
    ListNode prev = null;
    ListNode current = head;
    
    while (current != null) {
        ListNode nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }
    
    return prev;
}

// Recursive approach
public ListNode reverseListRecursive(ListNode head) {
    if (head == null || head.next == null) {
        return head;
    }
    
    ListNode reversedHead = reverseListRecursive(head.next);
    head.next.next = head;
    head.next = null;
    
    return reversedHead;
}
```
**Time**: O(n), **Space**: O(1) iterative, O(n) recursive

---

### 123. Reverse Linked List in Groups of K
**Problem**: Reverse every k consecutive nodes  
**Difficulty**: Hard  
**Pattern**: Recursive/Iterative Group Processing

```java
public ListNode reverseKGroup(ListNode head, int k) {
    // Check if we have at least k nodes
    ListNode current = head;
    int count = 0;
    
    while (current != null && count < k) {
        current = current.next;
        count++;
    }
    
    if (count == k) {
        // Reverse first k nodes
        current = reverseKGroup(current, k);
        
        // Reverse current group
        while (count > 0) {
            ListNode nextTemp = head.next;
            head.next = current;
            current = head;
            head = nextTemp;
            count--;
        }
        
        head = current;
    }
    
    return head;
}

// Iterative approach
public ListNode reverseKGroupIterative(ListNode head, int k) {
    if (head == null || k == 1) return head;
    
    // Count total nodes
    int length = getLength(head);
    
    ListNode dummy = new ListNode(0);
    dummy.next = head;
    ListNode prevGroupEnd = dummy;
    
    while (length >= k) {
        ListNode groupStart = prevGroupEnd.next;
        ListNode groupEnd = groupStart;
        
        // Find end of current group
        for (int i = 1; i < k; i++) {
            groupEnd = groupEnd.next;
        }
        
        ListNode nextGroupStart = groupEnd.next;
        
        // Reverse current group
        reverseGroup(groupStart, groupEnd);
        
        // Connect with previous and next groups
        prevGroupEnd.next = groupEnd;
        groupStart.next = nextGroupStart;
        
        // Update for next iteration
        prevGroupEnd = groupStart;
        length -= k;
    }
    
    return dummy.next;
}

private void reverseGroup(ListNode start, ListNode end) {
    ListNode prev = end.next;
    ListNode current = start;
    
    while (current != end.next) {
        ListNode nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }
}

private int getLength(ListNode head) {
    int length = 0;
    while (head != null) {
        length++;
        head = head.next;
    }
    return length;
}
```
**Time**: O(n), **Space**: O(1)

---

### 124. Detect Loop in Linked List
**Problem**: Check if linked list has a cycle  
**Difficulty**: Easy  
**Pattern**: Floyd's Cycle Detection

```java
public boolean hasCycle(ListNode head) {
    if (head == null || head.next == null) return false;
    
    ListNode slow = head;
    ListNode fast = head;
    
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow == fast) {
            return true;
        }
    }
    
    return false;
}

// Using HashSet approach
public boolean hasCycleHashSet(ListNode head) {
    Set<ListNode> visited = new HashSet<>();
    
    while (head != null) {
        if (visited.contains(head)) {
            return true;
        }
        visited.add(head);
        head = head.next;
    }
    
    return false;
}
```
**Time**: O(n), **Space**: O(1) Floyd's, O(n) HashSet

---

### 125. Delete Loop in Linked List
**Problem**: Remove loop if exists in linked list  
**Difficulty**: Medium  
**Pattern**: Floyd's + Loop Removal

```java
public void removeLoop(ListNode head) {
    if (head == null || head.next == null) return;
    
    ListNode slow = head;
    ListNode fast = head;
    
    // Detect if loop exists
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow == fast) {
            break;
        }
    }
    
    // No loop found
    if (fast == null || fast.next == null) return;
    
    // Find start of loop
    slow = head;
    
    // Special case: loop starts at head
    if (slow == fast) {
        while (fast.next != slow) {
            fast = fast.next;
        }
        fast.next = null;
        return;
    }
    
    // Move both pointers until they meet at loop start
    while (slow.next != fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    
    // Remove loop
    fast.next = null;
}

// Alternative: Count loop size first
public void removeLoopAlternative(ListNode head) {
    ListNode loopNode = detectLoop(head);
    if (loopNode == null) return;
    
    // Count loop size
    int loopSize = 1;
    ListNode temp = loopNode;
    while (temp.next != loopNode) {
        temp = temp.next;
        loopSize++;
    }
    
    // Find loop start
    ListNode p1 = head;
    ListNode p2 = head;
    
    // Move p2 by loopSize steps
    for (int i = 0; i < loopSize; i++) {
        p2 = p2.next;
    }
    
    // Move both until they meet at loop start
    while (p1.next != p2.next) {
        p1 = p1.next;
        p2 = p2.next;
    }
    
    // Remove loop
    p2.next = null;
}

private ListNode detectLoop(ListNode head) {
    ListNode slow = head, fast = head;
    
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow == fast) return slow;
    }
    
    return null;
}
```
**Time**: O(n), **Space**: O(1)

---

### 126. Find Starting Point of Loop
**Problem**: Find the node where loop begins  
**Difficulty**: Medium  
**Pattern**: Floyd's Algorithm Extension

```java
public ListNode detectCycle(ListNode head) {
    if (head == null || head.next == null) return null;
    
    ListNode slow = head;
    ListNode fast = head;
    
    // Phase 1: Detect if cycle exists
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow == fast) {
            break;
        }
    }
    
    // No cycle found
    if (fast == null || fast.next == null) return null;
    
    // Phase 2: Find start of cycle
    slow = head;
    while (slow != fast) {
        slow = slow.next;
        fast = fast.next;
    }
    
    return slow;
}

// Return cycle start and length
public class CycleInfo {
    ListNode start;
    int length;
    
    CycleInfo(ListNode start, int length) {
        this.start = start;
        this.length = length;
    }
}

public CycleInfo getCycleInfo(ListNode head) {
    ListNode cycleStart = detectCycle(head);
    if (cycleStart == null) return new CycleInfo(null, 0);
    
    // Calculate cycle length
    int length = 1;
    ListNode temp = cycleStart.next;
    while (temp != cycleStart) {
        temp = temp.next;
        length++;
    }
    
    return new CycleInfo(cycleStart, length);
}
```
**Time**: O(n), **Space**: O(1)

---

### 127. Remove Duplicates from Sorted List
**Problem**: Remove duplicate nodes from sorted linked list  
**Difficulty**: Easy  
**Pattern**: Single Pass

```java
public ListNode deleteDuplicates(ListNode head) {
    if (head == null) return null;
    
    ListNode current = head;
    
    while (current != null && current.next != null) {
        if (current.val == current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    
    return head;
}

// Remove all duplicates (keep no duplicates)
public ListNode deleteDuplicatesII(ListNode head) {
    ListNode dummy = new ListNode(0);
    dummy.next = head;
    ListNode prev = dummy;
    
    while (head != null) {
        if (head.next != null && head.val == head.next.val) {
            int val = head.val;
            
            // Skip all nodes with this value
            while (head != null && head.val == val) {
                head = head.next;
            }
            
            prev.next = head;
        } else {
            prev = head;
            head = head.next;
        }
    }
    
    return dummy.next;
}
```
**Time**: O(n), **Space**: O(1)

---

### 128. Remove Duplicates from Unsorted List
**Problem**: Remove duplicates from unsorted linked list  
**Difficulty**: Medium  
**Pattern**: Hashing

```java
import java.util.*;

public ListNode removeDuplicatesUnsorted(ListNode head) {
    if (head == null) return null;
    
    Set<Integer> seen = new HashSet<>();
    ListNode current = head;
    ListNode prev = null;
    
    while (current != null) {
        if (seen.contains(current.val)) {
            prev.next = current.next;
        } else {
            seen.add(current.val);
            prev = current;
        }
        current = current.next;
    }
    
    return head;
}

// Without extra space - O(n²) approach
public ListNode removeDuplicatesNoExtraSpace(ListNode head) {
    if (head == null) return null;
    
    ListNode current = head;
    
    while (current != null) {
        ListNode runner = current;
        
        while (runner.next != null) {
            if (runner.next.val == current.val) {
                runner.next = runner.next.next;
            } else {
                runner = runner.next;
            }
        }
        
        current = current.next;
    }
    
    return head;
}
```
**Time**: O(n) with space, O(n²) without, **Space**: O(n) or O(1)

---

### 129. Move Last Element to Front
**Problem**: Move last node to the beginning  
**Difficulty**: Easy  
**Pattern**: Two Pointers

```java
public ListNode moveLastToFront(ListNode head) {
    if (head == null || head.next == null) return head;
    
    ListNode secondLast = null;
    ListNode last = head;
    
    // Find second last node
    while (last.next != null) {
        secondLast = last;
        last = last.next;
    }
    
    // Move last to front
    secondLast.next = null;
    last.next = head;
    head = last;
    
    return head;
}

// Move last k elements to front
public ListNode moveLastKToFront(ListNode head, int k) {
    if (head == null || k <= 0) return head;
    
    // Find length
    int length = getLength(head);
    k = k % length; // Handle k > length
    
    if (k == 0) return head;
    
    // Find the (length - k)th node
    ListNode current = head;
    for (int i = 1; i < length - k; i++) {
        current = current.next;
    }
    
    // Split and rejoin
    ListNode newHead = current.next;
    current.next = null;
    
    // Find tail of new head
    ListNode tail = newHead;
    while (tail.next != null) {
        tail = tail.next;
    }
    
    tail.next = head;
    return newHead;
}
```
**Time**: O(n), **Space**: O(1)

---

### 130. Add 1 to Number Represented by Linked List
**Problem**: Add 1 to number stored as linked list  
**Difficulty**: Medium  
**Pattern**: Reverse + Add + Reverse

```java
public ListNode addOne(ListNode head) {
    // Reverse the list
    head = reverseList(head);
    
    // Add 1
    ListNode current = head;
    int carry = 1;
    
    while (current != null && carry > 0) {
        int sum = current.val + carry;
        current.val = sum % 10;
        carry = sum / 10;
        
        if (current.next == null && carry > 0) {
            current.next = new ListNode(carry);
            carry = 0;
        }
        
        current = current.next;
    }
    
    // Reverse back
    return reverseList(head);
}

// Without reversing - using recursion
public ListNode addOneRecursive(ListNode head) {
    int carry = addOneHelper(head);
    
    if (carry > 0) {
        ListNode newHead = new ListNode(carry);
        newHead.next = head;
        return newHead;
    }
    
    return head;
}

private int addOneHelper(ListNode node) {
    if (node == null) return 1;
    
    int carry = addOneHelper(node.next);
    int sum = node.val + carry;
    
    node.val = sum % 10;
    return sum / 10;
}
```
**Time**: O(n), **Space**: O(1) iterative, O(n) recursive

---

### 131. Add Two Numbers Represented by Linked Lists
**Problem**: Add two numbers where digits are stored in reverse order  
**Difficulty**: Medium  
**Pattern**: Simulation

```java
public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    ListNode dummy = new ListNode(0);
    ListNode current = dummy;
    int carry = 0;
    
    while (l1 != null || l2 != null || carry > 0) {
        int sum = carry;
        
        if (l1 != null) {
            sum += l1.val;
            l1 = l1.next;
        }
        
        if (l2 != null) {
            sum += l2.val;
            l2 = l2.next;
        }
        
        current.next = new ListNode(sum % 10);
        carry = sum / 10;
        current = current.next;
    }
    
    return dummy.next;
}

// For numbers stored in normal order (most significant digit first)
public ListNode addTwoNumbersII(ListNode l1, ListNode l2) {
    // Get lengths
    int len1 = getLength(l1);
    int len2 = getLength(l2);
    
    // Pad shorter list with zeros
    while (len1 < len2) {
        ListNode newNode = new ListNode(0);
        newNode.next = l1;
        l1 = newNode;
        len1++;
    }
    
    while (len2 < len1) {
        ListNode newNode = new ListNode(0);
        newNode.next = l2;
        l2 = newNode;
        len2++;
    }
    
    // Add recursively
    ResultWrapper result = addTwoNumbersHelper(l1, l2);
    
    if (result.carry > 0) {
        ListNode newHead = new ListNode(result.carry);
        newHead.next = result.node;
        return newHead;
    }
    
    return result.node;
}

class ResultWrapper {
    ListNode node;
    int carry;
    
    ResultWrapper(ListNode node, int carry) {
        this.node = node;
        this.carry = carry;
    }
}

private ResultWrapper addTwoNumbersHelper(ListNode l1, ListNode l2) {
    if (l1 == null && l2 == null) {
        return new ResultWrapper(null, 0);
    }
    
    ResultWrapper result = addTwoNumbersHelper(l1.next, l2.next);
    int sum = l1.val + l2.val + result.carry;
    
    ListNode current = new ListNode(sum % 10);
    current.next = result.node;
    
    return new ResultWrapper(current, sum / 10);
}
```
**Time**: O(max(m,n)), **Space**: O(max(m,n))

---

### 132. Intersection of Two Linked Lists
**Problem**: Find the node where two linked lists intersect  
**Difficulty**: Easy  
**Pattern**: Two Pointers

```java
public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
    if (headA == null || headB == null) return null;
    
    ListNode pA = headA;
    ListNode pB = headB;
    
    // When one pointer reaches end, redirect to other head
    while (pA != pB) {
        pA = (pA == null) ? headB : pA.next;
        pB = (pB == null) ? headA : pB.next;
    }
    
    return pA; // Will be null if no intersection
}

// Using length difference approach
public ListNode getIntersectionNodeLength(ListNode headA, ListNode headB) {
    int lenA = getLength(headA);
    int lenB = getLength(headB);
    
    // Move longer list pointer ahead by difference
    while (lenA > lenB) {
        headA = headA.next;
        lenA--;
    }
    
    while (lenB > lenA) {
        headB = headB.next;
        lenB--;
    }
    
    // Now both are at same distance from intersection
    while (headA != null && headB != null) {
        if (headA == headB) {
            return headA;
        }
        headA = headA.next;
        headB = headB.next;
    }
    
    return null;
}
```
**Time**: O(m + n), **Space**: O(1)

---

### 133. Merge Two Sorted Lists
**Problem**: Merge two sorted linked lists  
**Difficulty**: Easy  
**Pattern**: Two Pointers

```java
public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
    ListNode dummy = new ListNode(0);
    ListNode current = dummy;
    
    while (list1 != null && list2 != null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    
    // Attach remaining nodes
    current.next = (list1 != null) ? list1 : list2;
    
    return dummy.next;
}

// Recursive approach
public ListNode mergeTwoListsRecursive(ListNode list1, ListNode list2) {
    if (list1 == null) return list2;
    if (list2 == null) return list1;
    
    if (list1.val <= list2.val) {
        list1.next = mergeTwoListsRecursive(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoListsRecursive(list1, list2.next);
        return list2;
    }
}
```
**Time**: O(m + n), **Space**: O(1) iterative, O(m + n) recursive

---

### 134. Merge K Sorted Lists
**Problem**: Merge k sorted linked lists  
**Difficulty**: Hard  
**Pattern**: Divide and Conquer / Priority Queue

```java
import java.util.*;

// Using Priority Queue
public ListNode mergeKLists(ListNode[] lists) {
    if (lists == null || lists.length == 0) return null;
    
    PriorityQueue<ListNode> pq = new PriorityQueue<>((a, b) -> a.val - b.val);
    
    // Add all non-null heads to priority queue
    for (ListNode list : lists) {
        if (list != null) {
            pq.offer(list);
        }
    }
    
    ListNode dummy = new ListNode(0);
    ListNode current = dummy;
    
    while (!pq.isEmpty()) {
        ListNode smallest = pq.poll();
        current.next = smallest;
        current = current.next;
        
        if (smallest.next != null) {
            pq.offer(smallest.next);
        }
    }
    
    return dummy.next;
}

// Using Divide and Conquer
public ListNode mergeKListsDivideConquer(ListNode[] lists) {
    if (lists == null || lists.length == 0) return null;
    
    return mergeKListsHelper(lists, 0, lists.length - 1);
}

private ListNode mergeKListsHelper(ListNode[] lists, int start, int end) {
    if (start == end) return lists[start];
    if (start > end) return null;
    
    int mid = start + (end - start) / 2;
    ListNode left = mergeKListsHelper(lists, start, mid);
    ListNode right = mergeKListsHelper(lists, mid + 1, end);
    
    return mergeTwoLists(left, right);
}
```
**Time**: O(N log k) where N is total nodes, **Space**: O(k) PQ, O(log k) DC

---

### 135. Middle of Linked List
**Problem**: Find middle node of linked list  
**Difficulty**: Easy  
**Pattern**: Slow/Fast Pointers

```java
public ListNode middleNode(ListNode head) {
    ListNode slow = head;
    ListNode fast = head;
    
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return slow;
}

// To get first middle in case of even number of nodes
public ListNode middleNodeFirst(ListNode head) {
    if (head == null) return null;
    
    ListNode slow = head;
    ListNode fast = head.next; // Start fast from next
    
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return slow;
}

// Return both middle nodes for even length
public ListNode[] getMiddleNodes(ListNode head) {
    if (head == null) return new ListNode[]{null, null};
    if (head.next == null) return new ListNode[]{head, head};
    
    ListNode slow = head;
    ListNode fast = head;
    ListNode prevSlow = null;
    
    while (fast != null && fast.next != null) {
        prevSlow = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    
    if (fast == null) {
        // Even number of nodes
        return new ListNode[]{prevSlow, slow};
    } else {
        // Odd number of nodes
        return new ListNode[]{slow, slow};
    }
}
```
**Time**: O(n), **Space**: O(1)

---

## 🚀 Striver Linked List Questions

### S1. Delete Node in Linked List
**Problem**: Delete node when only given access to that node  
**Difficulty**: Easy  
**Pattern**: Value Copy

```java
public void deleteNode(ListNode node) {
    // Copy value from next node
    node.val = node.next.val;
    
    // Delete next node
    node.next = node.next.next;
}
```
**Time**: O(1), **Space**: O(1)

---

### S2. Copy List with Random Pointer
**Problem**: Deep copy linked list with random pointers  
**Difficulty**: Medium  
**Pattern**: Interweaving / HashMap

```java
class Node {
    int val;
    Node next;
    Node random;
    
    public Node(int val) {
        this.val = val;
        this.next = null;
        this.random = null;
    }
}

// Using HashMap
public Node copyRandomList(Node head) {
    if (head == null) return null;
    
    Map<Node, Node> map = new HashMap<>();
    
    // First pass: create all nodes
    Node current = head;
    while (current != null) {
        map.put(current, new Node(current.val));
        current = current.next;
    }
    
    // Second pass: set next and random pointers
    current = head;
    while (current != null) {
        Node copy = map.get(current);
        copy.next = map.get(current.next);
        copy.random = map.get(current.random);
        current = current.next;
    }
    
    return map.get(head);
}

// Using Interweaving (O(1) space)
public Node copyRandomListInterweaving(Node head) {
    if (head == null) return null;
    
    // Step 1: Create copy nodes and interweave
    Node current = head;
    while (current != null) {
        Node copy = new Node(current.val);
        copy.next = current.next;
        current.next = copy;
        current = copy.next;
    }
    
    // Step 2: Set random pointers for copy nodes
    current = head;
    while (current != null) {
        if (current.random != null) {
            current.next.random = current.random.next;
        }
        current = current.next.next;
    }
    
    // Step 3: Separate original and copy lists
    Node dummy = new Node(0);
    Node copyTail = dummy;
    current = head;
    
    while (current != null) {
        Node copy = current.next;
        current.next = copy.next;
        copyTail.next = copy;
        copyTail = copy;
        current = current.next;
    }
    
    return dummy.next;
}
```
**Time**: O(n), **Space**: O(n) HashMap, O(1) Interweaving

---

### S3. 3Sum in Linked List
**Problem**: Find triplet with given sum in linked list  
**Difficulty**: Medium  
**Pattern**: Convert to Array + Two Pointers

```java
import java.util.*;

public boolean findTripletSum(ListNode head, int target) {
    // Convert to array for easier processing
    List<Integer> nums = new ArrayList<>();
    ListNode current = head;
    
    while (current != null) {
        nums.add(current.val);
        current = current.next;
    }
    
    Collections.sort(nums);
    
    for (int i = 0; i < nums.size() - 2; i++) {
        int left = i + 1;
        int right = nums.size() - 1;
        
        while (left < right) {
            int sum = nums.get(i) + nums.get(left) + nums.get(right);
            
            if (sum == target) {
                return true;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }
    
    return false;
}

// Return actual triplet nodes
public List<Integer> findTriplet(ListNode head, int target) {
    List<Integer> result = new ArrayList<>();
    List<Integer> nums = new ArrayList<>();
    ListNode current = head;
    
    while (current != null) {
        nums.add(current.val);
        current = current.next;
    }
    
    Collections.sort(nums);
    
    for (int i = 0; i < nums.size() - 2; i++) {
        int left = i + 1;
        int right = nums.size() - 1;
        
        while (left < right) {
            int sum = nums.get(i) + nums.get(left) + nums.get(right);
            
            if (sum == target) {
                result.add(nums.get(i));
                result.add(nums.get(left));
                result.add(nums.get(right));
                return result;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }
    
    return result;
}
```
**Time**: O(n²), **Space**: O(n)

---

## 📈 Summary

### Key Linked List Patterns Mastered:
1. **Two Pointers (Slow/Fast)** - Cycle detection, middle finding
2. **Dummy Node** - Simplifies insertion/deletion edge cases  
3. **Three Pointers** - Reversing operations
4. **HashMap** - Handle complex pointer relationships
5. **Recursion** - Tree-like operations on lists

### Important Algorithms:
- **Floyd's Cycle Detection** - O(1) space cycle detection
- **Merge Operations** - Fundamental for sorting algorithms
- **Reverse Operations** - In groups, between positions
- **Intersection Finding** - Multiple approaches available

### Common Patterns:
- **Edge Cases** - Always check for null, single node
- **Dummy Nodes** - Use when head might change
- **Two Passes** - Often needed for complex operations
- **Space-Time Tradeoffs** - HashMap vs multiple passes

### Next Steps:
- Practice more complex manipulation problems
- Learn about skip lists and other advanced structures
- Move to Stack and Queue problems

---
*This completes all major linked list problems with detailed Java solutions and theory explanations.*
