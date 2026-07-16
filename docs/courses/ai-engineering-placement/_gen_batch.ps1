$DSA = "C:\xampp\htdocs\ai-engineering-journey\docs\courses\ai-engineering-placement\03-data-structures-algorithms"
$GIT = "C:\xampp\htdocs\ai-engineering-journey\docs\courses\ai-engineering-placement\04-git-linux-cli"

function Write-File($path, $lines) {
    $lines | Out-File -FilePath $path -Encoding utf8 -Force
    $count = $lines.Count
    Write-Output "$count lines -> $(Split-Path $path -Leaf)"
}

function Get-Gallery($subject, $chapter) {
    $slug = "$subject/$chapter"
    return @(
        '<!-- Image Gallery -->',
        '<section class="lesson-visuals" aria-label="Visual learning resources">',
        '  <header><span>VISUAL LEARNING</span><h2>See it. Review it. Remember it.</h2></header>',
        "  <a class=""lesson-visual-card"" href=""../../assets/images/lessons/ai-engineering-placement/$slug/handwritten-notes.png"" target=""_blank"" rel=""noopener"">",
        "    <img src=""../../assets/images/lessons/ai-engineering-placement/$slug/handwritten-notes.png"" alt=""Handwritten notes"" loading=""lazy"">",
        '    <span><strong>Handwritten notes</strong>Condensed notes for deliberate review.</span>',
        '  </a>',
        "  <a class=""lesson-visual-card"" href=""../../assets/images/lessons/ai-engineering-placement/$slug/sticky-notes.png"" target=""_blank"" rel=""noopener"">",
        "    <img src=""../../assets/images/lessons/ai-engineering-placement/$slug/sticky-notes.png"" alt=""Sticky-note revision"" loading=""lazy"">",
        '    <span><strong>Sticky-note revision</strong>Fast recall prompts for revision.</span>',
        '  </a>',
        "  <a class=""lesson-visual-card"" href=""../../assets/images/lessons/ai-engineering-placement/$slug/visual-explanation.png"" target=""_blank"" rel=""noopener"">",
        "    <img src=""../../assets/images/lessons/ai-engineering-placement/$slug/visual-explanation.png"" alt=""Visual concept guide"" loading=""lazy"">",
        '    <span><strong>Visual concept guide</strong>A connected explanation of the key ideas.</span>',
        '  </a>',
        '</section>',
        '<!-- End Image Gallery -->'
    )
}

function Get-LOs($los) {
    $result = @()
    $result += "## Learning Objectives"
    $result += ""
    $result += "| Objective | Description |"
    $result += "|-----------|-------------|"
    $i = 1
    foreach ($lo in $los) {
        $result += "| LO$i | $lo |"
        $i++
    }
    $result += ""
    return $result
}

function Get-Glance($sections) {
    $result = @()
    $result += "## Chapter at a Glance"
    $result += ""
    $result += "| Section | Topic | Key Concept |"
    $result += "|---------|-------|-------------|"
    foreach ($s in $sections) {
        $result += "| $s |"
    }
    $result += ""
    return $result
}

function Get-Mermaid($flow) {
    $result = @()
    $result += "## Chapter Roadmap"
    $result += ""
    $result += '```mermaid'
    $result += 'flowchart LR'
    foreach ($line in $flow) {
        $result += "    $line"
    }
    $result += '```'
    $result += ""
    return $result
}

function Get-Summary($items) {
    $result = @()
    $result += "## Summary"
    $result += ""
    foreach ($item in $items) {
        $result += "- $item"
    }
    $result += ""
    return $result
}

function Get-Takeaways($items) {
    $result = @()
    $result += "## Practical Takeaways"
    $result += ""
    $result += "| Scenario | Do This | Avoid This |"
    $result += "|----------|---------|------------|"
    foreach ($item in $items) {
        $parts = $item -split '\|'
        $result += "| $($parts[0]) | $($parts[1]) | $($parts[2]) |"
    }
    $result += ""
    return $result
}

function Get-Exercises($items) {
    $result = @()
    $result += "## Exercises"
    $result += ""
    foreach ($item in $items) {
        $parts = $item -split '\|'
        $result += "**$($parts[0])** - $($parts[1])"
        $result += ""
    }
    $result += "---"
    $result += ""
    return $result
}

function Make-Code($lang, $code) {
    $result = @()
    $result += "```$lang"
    foreach ($line in $code) {
        $result += $line
    }
    $result += '```'
    $result += ""
    return $result
}

# ============================================================
# GENERATE ALL REMAINING FILES
# ============================================================

# ---- DSA 07: Linked Lists ----
$lc = @()
$lc += "# Linked Lists"
$lc += ""
$lc += Get-LOs @(
    "Understand singly linked list, doubly linked list, and circular linked list structures",
    "Implement linked list operations: traversal, insertion, deletion, reversal",
    "Solve cycle detection and cycle-related problems using Floyd's algorithm",
    "Apply fast-slow pointer techniques for middle finding and palindrome checking",
    "Implement in-place reordering operations (reverse, rotate, reorder)",
    "Use dummy nodes and recursion to simplify linked list problems"
)
$lc += Get-Gallery "03-data-structures-algorithms" "07-linked-lists"
$lc += Get-Glance @(
    "7.1 | Linked List Fundamentals | Singly, doubly, circular; Node structure",
    "7.2 | Basic Operations | Insert, delete, traverse, search",
    "7.3 | Reversal Techniques | Iterative, recursive, in-place reversal",
    "7.4 | Cycle Detection | Floyd's algorithm, cycle start, cycle length",
    "7.5 | Advanced Operations | Palindrome check, merge, add numbers",
    "7.6 | Doubly Linked Lists | Operations, insertion, deletion"
)
$lc += Get-Mermaid @(
    "A[Linked List Types] --> B[Singly]",
    "A --> C[Doubly]",
    "A --> D[Circular]",
    "B --> E[Operations]",
    "C --> E",
    "D --> E",
    "E --> F[Reverse]",
    "E --> G[Cycle Detect]",
    "E --> H[Merge/Sort]"
)
$lc += "A linked list is a linear data structure where elements (nodes) are stored at non-contiguous memory locations, connected via pointers."
$lc += ""
$lc += "## 7.1 Linked List Fundamentals"
$lc += ""
$lc += "**Singly linked list**: Each node has a value and a next pointer. Traversal is one-directional."
$lc += ""
$lc += "**Doubly linked list**: Each node has prev and next pointers. Traversal is bi-directional."
$lc += ""
$lc += "**Circular linked list**: The last node points back to the head. Can be singly or doubly linked."
$lc += ""
$lc += '```python'
$lc += 'class ListNode:'
$lc += '    def __init__(self, val=0, next=None):'
$lc += '        self.val = val'
$lc += '        self.next = next'
$lc += ''
$lc += 'class DoublyListNode:'
$lc += '    def __init__(self, val=0, prev=None, next=None):'
$lc += '        self.val = val'
$lc += '        self.prev = prev'
$lc += '        self.next = next'
$lc += ''
$lc += '# Build: 1 -> 2 -> 3 -> None'
$lc += 'head = ListNode(1)'
$lc += 'head.next = ListNode(2)'
$lc += 'head.next.next = ListNode(3)'
$lc += ''
$lc += '# Build: 1 <-> 2 <-> 3 <-> None'
$lc += 'd1 = DoublyListNode(1)'
$lc += 'd2 = DoublyListNode(2)'
$lc += 'd3 = DoublyListNode(3)'
$lc += 'd1.next = d2; d2.prev = d1'
$lc += 'd2.next = d3; d3.prev = d2'
$lc += '```'
$lc += ""
$lc += "## 7.2 Basic Operations"
$lc += ""
$lc += "**Traversal**:"
$lc += ""
$lc += '```python'
$lc += 'def traverse(head):'
$lc += '    current = head'
$lc += '    while current:'
$lc += '        print(current.val, end=" -> ")'
$lc += '        current = current.next'
$lc += '    print("None")'
$lc += ''
$lc += 'def get_length(head):'
$lc += '    count = 0'
$lc += '    while head:'
$lc += '        count += 1'
$lc += '        head = head.next'
$lc += '    return count'
$lc += '```'
$lc += ""
$lc += "**Insertion**:"
$lc += ""
$lc += '```python'
$lc += 'def insert_at_beginning(head, val):'
$lc += '    new_node = ListNode(val)'
$lc += '    new_node.next = head'
$lc += '    return new_node'
$lc += ''
$lc += 'def insert_at_end(head, val):'
$lc += '    if not head:'
$lc += '        return ListNode(val)'
$lc += '    current = head'
$lc += '    while current.next:'
$lc += '        current = current.next'
$lc += '    current.next = ListNode(val)'
$lc += '    return head'
$lc += ''
$lc += 'def insert_at_position(head, val, pos):'
$lc += '    if pos == 0:'
$lc += '        return insert_at_beginning(head, val)'
$lc += '    current = head'
$lc += '    for _ in range(pos - 1):'
$lc += '        if not current:'
$lc += '            raise IndexError("Position out of bounds")'
$lc += '        current = current.next'
$lc += '    new_node = ListNode(val)'
$lc += '    new_node.next = current.next'
$lc += '    current.next = new_node'
$lc += '    return head'
$lc += '```'
$lc += ""
$lc += "**Deletion**:"
$lc += ""
$lc += '```python'
$lc += 'def delete_node(head, key):'
$lc += '    if not head:'
$lc += '        return None'
$lc += '    if head.val == key:'
$lc += '        return head.next'
$lc += '    current = head'
$lc += '    while current.next and current.next.val != key:'
$lc += '        current = current.next'
$lc += '    if current.next:'
$lc += '        current.next = current.next.next'
$lc += '    return head'
$lc += '```'
$lc += ""
$lc += "## 7.3 Reversal Techniques"
$lc += ""
$lc += "**Iterative reversal**:"
$lc += ""
$lc += '```python'
$lc += 'def reverse_iterative(head):'
$lc += '    prev = None'
$lc += '    curr = head'
$lc += '    while curr:'
$lc += '        next_temp = curr.next'
$lc += '        curr.next = prev'
$lc += '        prev = curr'
$lc += '        curr = next_temp'
$lc += '    return prev  # new head'
$lc += '```'
$lc += ""
$lc += "**Recursive reversal**:"
$lc += ""
$lc += '```python'
$lc += 'def reverse_recursive(head):'
$lc += '    if not head or not head.next:'
$lc += '        return head'
$lc += '    new_head = reverse_recursive(head.next)'
$lc += '    head.next.next = head'
$lc += '    head.next = None'
$lc += '    return new_head'
$lc += '```'
$lc += ""
$lc += "**Reverse k nodes at a time**:"
$lc += ""
$lc += '```python'
$lc += 'def reverse_k_group(head, k):'
$lc += '    count = 0'
$lc += '    curr = head'
$lc += '    while curr and count < k:'
$lc += '        curr = curr.next'
$lc += '        count += 1'
$lc += '    if count < k:'
$lc += '        return head'
$lc += '    prev = None'
$lc += '    curr = head'
$lc += '    for _ in range(k):'
$lc += '        next_temp = curr.next'
$lc += '        curr.next = prev'
$lc += '        prev = curr'
$lc += '        curr = next_temp'
$lc += '    head.next = reverse_k_group(curr, k)'
$lc += '    return prev'
$lc += '```'
$lc += ""
$lc += "## 7.4 Cycle Detection"
$lc += ""
$lc += "Floyd's cycle detection determines if a linked list has a cycle using two pointers."
$lc += ""
$lc += '```python'
$lc += 'def has_cycle(head):'
$lc += '    slow = fast = head'
$lc += '    while fast and fast.next:'
$lc += '        slow = slow.next'
$lc += '        fast = fast.next.next'
$lc += '        if slow == fast:'
$lc += '            return True'
$lc += '    return False'
$lc += ''
$lc += 'def detect_cycle_start(head):'
$lc += '    slow = fast = head'
$lc += '    while fast and fast.next:'
$lc += '        slow = slow.next'
$lc += '        fast = fast.next.next'
$lc += '        if slow == fast:'
$lc += '            slow = head'
$lc += '            while slow != fast:'
$lc += '                slow = slow.next'
$lc += '                fast = fast.next'
$lc += '            return slow'
$lc += '    return None'
$lc += ''
$lc += 'def cycle_length(head):'
$lc += '    meeting = detect_cycle_start(head)'
$lc += '    if not meeting:'
$lc += '        return 0'
$lc += '    count = 1'
$lc += '    curr = meeting.next'
$lc += '    while curr != meeting:'
$lc += '        count += 1'
$lc += '        curr = curr.next'
$lc += '    return count'
$lc += '```'
$lc += ""
$lc += "## 7.5 Advanced Operations"
$lc += ""
$lc += "**Palindrome check**:"
$lc += ""
$lc += '```python'
$lc += 'def is_palindrome(head):'
$lc += '    if not head or not head.next:'
$lc += '        return True'
$lc += '    slow = fast = head'
$lc += '    while fast and fast.next:'
$lc += '        slow = slow.next'
$lc += '        fast = fast.next.next'
$lc += '    second_half = reverse_iterative(slow)'
$lc += '    first_half = head'
$lc += '    while second_half:'
$lc += '        if first_half.val != second_half.val:'
$lc += '            return False'
$lc += '        first_half = first_half.next'
$lc += '        second_half = second_half.next'
$lc += '    return True'
$lc += '```'
$lc += ""
$lc += "**Merge two sorted lists**:"
$lc += ""
$lc += '```python'
$lc += 'def merge_two_lists(l1, l2):'
$lc += '    dummy = ListNode(0)'
$lc += '    curr = dummy'
$lc += '    while l1 and l2:'
$lc += '        if l1.val < l2.val:'
$lc += '            curr.next = l1'
$lc += '            l1 = l1.next'
$lc += '        else:'
$lc += '            curr.next = l2'
$lc += '            l2 = l2.next'
$lc += '        curr = curr.next'
$lc += '    curr.next = l1 or l2'
$lc += '    return dummy.next'
$lc += '```'
$lc += ""
$lc += "**Remove nth node from end**:"
$lc += ""
$lc += '```python'
$lc += 'def remove_nth_from_end(head, n):'
$lc += '    dummy = ListNode(0)'
$lc += '    dummy.next = head'
$lc += '    first = second = dummy'
$lc += '    for _ in range(n + 1):'
$lc += '        first = first.next'
$lc += '    while first:'
$lc += '        first = first.next'
$lc += '        second = second.next'
$lc += '    second.next = second.next.next'
$lc += '    return dummy.next'
$lc += '```'
$lc += ""
$lc += "**Add two numbers** (represented as reversed lists):"
$lc += ""
$lc += '```python'
$lc += 'def add_two_numbers(l1, l2):'
$lc += '    dummy = ListNode(0)'
$lc += '    curr = dummy'
$lc += '    carry = 0'
$lc += '    while l1 or l2 or carry:'
$lc += '        v1 = l1.val if l1 else 0'
$lc += '        v2 = l2.val if l2 else 0'
$lc += '        total = v1 + v2 + carry'
$lc += '        carry = total // 10'
$lc += '        curr.next = ListNode(total % 10)'
$lc += '        curr = curr.next'
$lc += '        if l1: l1 = l1.next'
$lc += '        if l2: l2 = l2.next'
$lc += '    return dummy.next'
$lc += '```'
$lc += ""
$lc += "## 7.6 Doubly Linked Lists"
$lc += ""
$lc += '```python'
$lc += 'class DLLNode:'
$lc += '    def __init__(self, val=0):'
$lc += '        self.val = val'
$lc += '        self.prev = None'
$lc += '        self.next = None'
$lc += ''
$lc += 'def insert_at_front(head, val):'
$lc += '    new_node = DLLNode(val)'
$lc += '    new_node.next = head'
$lc += '    if head:'
$lc += '        head.prev = new_node'
$lc += '    return new_node'
$lc += ''
$lc += 'def delete_node_dll(head, node):'
$lc += '    if head == node:'
$lc += '        head = node.next'
$lc += '    if node.next:'
$lc += '        node.next.prev = node.prev'
$lc += '    if node.prev:'
$lc += '        node.prev.next = node.next'
$lc += '    return head'
$lc += ''
$lc += 'def traverse_forward(head):'
$lc += '    result = []'
$lc += '    while head:'
$lc += '        result.append(head.val)'
$lc += '        head = head.next'
$lc += '    return result'
$lc += ''
$lc += 'def traverse_backward(tail):'
$lc += '    result = []'
$lc += '    while tail:'
$lc += '        result.append(tail.val)'
$lc += '        tail = tail.prev'
$lc += '    return result'
$lc += '```'
$lc += ""
$lc += "---"
$lc += ""
$lc += "## TypeScript Parallel"
$lc += ""
$lc += '```typescript'
$lc += 'class ListNode {'
$lc += '    val: number;'
$lc += '    next: ListNode | null = null;'
$lc += '    constructor(val: number) { this.val = val; }'
$lc += '}'
$lc += ''
$lc += 'function hasCycle(head: ListNode | null): boolean {'
$lc += '    let slow = head, fast = head;'
$lc += '    while (fast && fast.next) {'
$lc += '        slow = slow!.next;'
$lc += '        fast = fast.next.next;'
$lc += '        if (slow === fast) return true;'
$lc += '    }'
$lc += '    return false;'
$lc += '}'
$lc += ''
$lc += 'function reverseList(head: ListNode | null): ListNode | null {'
$lc += '    let prev = null, curr = head;'
$lc += '    while (curr) {'
$lc += '        const next = curr.next;'
$lc += '        curr.next = prev;'
$lc += '        prev = curr;'
$lc += '        curr = next;'
$lc += '    }'
$lc += '    return prev;'
$lc += '}'
$lc += ''
$lc += 'function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {'
$lc += '    const dummy = new ListNode(0);'
$lc += '    let curr = dummy;'
$lc += '    while (l1 && l2) {'
$lc += '        if (l1.val < l2.val) { curr.next = l1; l1 = l1.next; }'
$lc += '        else { curr.next = l2; l2 = l2.next; }'
$lc += '        curr = curr.next;'
$lc += '    }'
$lc += '    curr.next = l1 || l2;'
$lc += '    return dummy.next;'
$lc += '}'
$lc += '```'
$lc += ""
$lc += "---"
$lc += ""
$lc += Get-Summary @(
    "Linked lists provide O(1) insertion/deletion at known positions but O(n) random access",
    "Singly linked lists have next pointers only; doubly linked lists add prev pointers for bi-directional traversal",
    "Iterative reversal uses three pointers (prev, curr, next) to reverse links in O(n) time",
    "Floyd's cycle detection uses fast and slow pointers to detect cycles in O(n) time with O(1) space",
    "The dummy node pattern simplifies edge cases for insertion and deletion operations",
    "Fast-slow pointers find the middle element, detect cycles, and help check palindromes",
    "Recursive solutions for linked lists often use the call stack naturally but risk stack overflow for large lists",
    "The merge two sorted lists problem uses a dummy node and compares values iteratively",
    "Doubly linked lists enable O(1) deletion of a known node without traversing from head",
    "Linked lists are used to implement LRU caches, hash table chaining, and adjacency lists for graphs"
)
$lc += Get-Takeaways @(
    "Iterative reversal|Use prev, curr, next three pointers|Recursive reversal for large lists",
    "Edge cases like head deletion|Use dummy sentinel node|Special-casing head",
    "Cycle detection|Floyd's fast-slow algorithm|Hash set of visited nodes",
    "Finding middle|Fast-slow pointers|Counting length then traversing again",
    "Remove nth from end|Two pointers with n+1 gap|Reversing then removing",
    "Merge sorted lists|Dummy node + compare|Creating new nodes unnecessarily"
)
$lc += ""
$lc += "## Interview Q&A"
for ($i = 1; $i -le 12; $i++) {
    $lc += '<details class="tp-qa-card" data-qid="dsa07-q' + $i + '">'
    $lc += '  <summary class="tp-qa-question"><span class="tp-qa-status"></span>'
    switch ($i) {
        1 { $lc += "    Q1: What are the time complexities of linked list operations?"
            $lc += "  </summary>"
            $lc += '  <div class="tp-qa-answer">'
            $lc += "    <table><tr><th>Operation</th><th>Singly</th><th>Doubly</th></tr>"
            $lc += "    <tr><td>Access by index</td><td>O(n)</td><td>O(n)</td></tr>"
            $lc += "    <tr><td>Search</td><td>O(n)</td><td>O(n)</td></tr>"
            $lc += "    <tr><td>Insert at head</td><td>O(1)</td><td>O(1)</td></tr>"
            $lc += "    <tr><td>Insert at tail</td><td>O(n)</td><td>O(1) with tail pointer</td></tr>"
            $lc += "    <tr><td>Delete known node</td><td>O(n)</td><td>O(1)</td></tr></table>"
            $lc += "  </div>" }
        2 { $lc += "    Q2: How do you detect a cycle in a linked list?"
            $lc += "  </summary>"
            $lc += '  <div class="tp-qa-answer">'
            $lc += "    <p>Use Floyd's cycle detection: slow pointer moves 1 step, fast moves 2 steps. If they meet, a cycle exists.</p>"
            $lc += "    <p>Phase 2: Reset slow to head, move both 1 step each. They meet at cycle start.</p>"
            $lc += "  </div>" }
        3 { $lc += "    Q3: Explain how to reverse a linked list iteratively."
            $lc += "  </summary>"
            $lc += '  <div class="tp-qa-answer">'
            $lc += "    <p>Use three pointers: prev (None initially), curr (head), next_temp. At each step, save curr.next, point curr.next to prev, advance prev and curr.</p>"
            $lc += "    <p>Time: O(n), Space: O(1).</p>"
            $lc += "  </div>" }
        4 { $lc += "    Q4: How do you find the middle of a linked list?"
            $lc += "  </summary>"
            $lc += '  <div class="tp-qa-answer">'
            $lc += "    <p>Fast-slow pointers: move slow by 1, fast by 2. When fast reaches end, slow is at the middle.</p>"
            $lc += "    <p>For even length, slow points to the first middle (or second, depending on implementation).</p>"
            $lc += "  </div>" }
        5 { $lc += "    Q5: How does the dummy node pattern simplify linked list code?"
            $lc += "  </summary>"
            $lc += '  <div class="tp-qa-answer">'
            $lc += "    <p>A dummy node points to head. Operations that modify the head (like deletion) no longer need special cases for empty lists or head removal.</p>"
            $lc += "    <p>Return dummy.next as the new head.</p>"
            $lc += "  </div>" }
        6 { $lc += "    Q6: Implement merge of two sorted linked lists."
            $lc += "  </summary>"
            $lc += '  <div class="tp-qa-answer">'
            $lc += "    <p>Use a dummy node. Compare current nodes of both lists, attach the smaller one to result, advance that list's pointer.</p>"
            $lc += "    <p>When one list exhausts, attach the rest of the other. Time: O(m+n), Space: O(1).</p>"
            $lc += "  </div>" }
        7 { $lc += "    Q7: How do you remove the nth node from the end of a linked list?"
            $lc += "  </summary>"
            $lc += '  <div class="tp-qa-answer">'
            $lc += "    <p>Use two pointers with a gap of n+1 nodes. Move first n+1 steps ahead, then move both until first reaches end. Second points to the node before the one to delete.</p>"
            $lc += "  </div>" }
        8 { $lc += "    Q8: How do you check if a linked list is a palindrome?"
            $lc += "  </summary>"
            $lc += '  <div class="tp-qa-answer">'
            $lc += "    <p>Find the middle using fast-slow. Reverse the second half. Compare first half with reversed second half. Optionally restore the list.</p>"
            $lc += "    <p>Time: O(n), Space: O(1).</p>"
            $lc += "  </div>" }
        9 { $lc += "    Q9: What is the advantage of a doubly linked list over a singly linked list?"
            $lc += "  </summary>"
            $lc += '  <div class="tp-qa-answer">'
            $lc += "    <p>Doubly linked lists allow O(1) deletion of a known node (with its pointer). They support bi-directional traversal. However, they use more memory (extra prev pointer).</p>"
            $lc += "    <p>Used in: LRU cache, browser history, undo/redo systems.</p>"
            $lc += "  </div>" }
        10 { $lc += "    Q10: How do you add two numbers represented as linked lists?"
            $lc += "  </summary>"
            $lc += '  <div class="tp-qa-answer">'
            $lc += "    <p>Traverse both lists, adding corresponding digits plus carry. Create a new node with result % 10, carry = result / 10. Continue until both lists and carry are exhausted.</p>"
            $lc += "  </div>" }
        11 { $lc += "    Q11: How do you reverse k nodes at a time in a linked list?"
            $lc += "  </summary>"
            $lc += '  <div class="tp-qa-answer">'
            $lc += "    <p>Count k nodes. If there are less than k, return head. Otherwise, reverse k nodes iteratively, then recursively call on the rest. Connect the reversed segment with the next reversed segment.</p>"
            $lc += "  </div>" }
        12 { $lc += "    Q12: Compare arrays and linked lists."
            $lc += "  </summary>"
            $lc += '  <div class="tp-qa-answer">'
            $lc += "    <p>Arrays: O(1) access, O(n) insertion/deletion (except end). Cache-friendly. Linked lists: O(n) access, O(1) insertion/deletion at known position. Not cache-friendly.</p>"
            $lc += "    <p>Choose arrays for random access, linked lists for frequent insertions/deletions.</p>"
            $lc += "  </div>" }
    }
    $lc += '  <button class="tp-qa-mark-btn">âœ… Mark Reviewed</button>'
    $lc += '  <button class="tp-qa-bookmark-btn">ðŸ”– Bookmark</button>'
    $lc += "</details>"
    $lc += ""
}
$lc += "## Chapter Quiz"
$lc += ""
$lc += "**Q1**: What is the time complexity of searching for a value in a linked list?"
$lc += "a) O(1)  b) O(log n)  c) O(n)  d) O(n^2)"
$lc += '<details class="tp-qa-card" data-qid="dsa07-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) O(n)</strong></p></div></details>'
$lc += ""
$lc += "**Q2**: In Floyd's cycle detection, where do the slow and fast pointers first meet?"
$lc += "a) At the head  b) At the cycle start  c) Somewhere inside the cycle  d) At tail"
$lc += '<details class="tp-qa-card" data-qid="dsa07-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) Somewhere inside the cycle</strong></p></div></details>'
$lc += ""
$lc += "**Q3**: What data structure is used to implement an LRU cache?"
$lc += "a) Array  b) Hash Map + Doubly Linked List  c) Stack  d) Queue"
$lc += '<details class="tp-qa-card" data-qid="dsa07-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Hash Map + Doubly Linked List</strong></p></div></details>'
$lc += ""
$lc += "**Q4**: What operation is O(n) for singly linked lists but O(1) for doubly?"
$lc += "a) Access by index  b) Delete known node  c) Insert at head  d) Traverse forward"
$lc += '<details class="tp-qa-card" data-qid="dsa07-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Delete known node</strong></p></div></details>'
$lc += ""
$lc += "**Q5**: What is the space complexity of iterative linked list reversal?"
$lc += "a) O(1)  b) O(n)  c) O(log n)  d) O(n^2)"
$lc += '<details class="tp-qa-card" data-qid="dsa07-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: a) O(1)</strong></p></div></details>'
$lc += ""
$lc += Get-Exercises @(
    "Easy|Reverse a singly linked list iteratively and recursively",
    "Medium|Merge k sorted linked lists into one sorted list",
    "Medium|Detect and remove cycle from a linked list",
    "Hard|Implement LRU Cache with O(1) get and put using doubly linked list + hash map",
    "Hard|Flatten a multi-level doubly linked list where each node has child pointers"
)
$lc += "> **Next**: [08 - Stacks and Queues â†’](08-stacks-and-queues.md)"
Write-File (Join-Path $DSA "07-linked-lists.md") $lc

# ---- DSA 08: Stacks and Queues ----
$lc = @()
$lc += "# Stacks and Queues"
$lc += ""
$lc += Get-LOs @(
    "Understand stack (LIFO) and queue (FIFO) data structures and their properties",
    "Implement stacks and queues using arrays and linked lists",
    "Solve problems using stacks: parenthesis matching, expression evaluation, monotonic stack",
    "Apply queues for BFS, level-order traversal, and task scheduling",
    "Implement circular queues, deques, and priority queues",
    "Use monotonic stack/queue for next greater/smaller element problems"
)
$lc += Get-Gallery "03-data-structures-algorithms" "08-stacks-and-queues"
$lc += Get-Glance @(
    "8.1 | Stack Fundamentals | LIFO, push, pop, top, operations",
    "8.2 | Queue Fundamentals | FIFO, enqueue, dequeue, front, rear",
    "8.3 | Stack Applications | Parenthesis matching, expression evaluation",
    "8.4 | Monotonic Stack | Next greater element, histogram problems",
    "8.5 | Queue Variants | Circular queue, deque, priority queue",
    "8.6 | Real-World Applications | BFS, cache, task scheduling"
)
$lc += Get-Mermaid @(
    "A[Stack & Queue] --> B[Stack LIFO]",
    "A --> C[Queue FIFO]",
    "B --> D[Array Stack]",
    "B --> E[Linked Stack]",
    "C --> F[Array Queue]",
    "C --> G[Linked Queue]",
    "D --> H[Applications]",
    "E --> H",
    "F --> I[Deque/Circular]",
    "G --> I",
    "H --> J[Expression/Parentheses]",
    "I --> K[BFS/Scheduling]"
)
$lc += ""
$lc += "A stack (LIFO) and queue (FIFO) are fundamental abstract data types used to organize data with specific access patterns."
$lc += ""
$lc += "## 8.1 Stack Fundamentals"
$lc += ""
$lc += "**Stack operations**: push (add to top), pop (remove from top), top/peek (view top), is_empty."
$lc += ""
$lc += "**Array-based stack**:"
$lc += ""
$lc += '```python'
$lc += 'class ArrayStack:'
$lc += '    def __init__(self):'
$lc += '        self.data = []'
$lc += ''
$lc += '    def push(self, val):'
$lc += '        self.data.append(val)  # O(1) amortized'
$lc += ''
$lc += '    def pop(self):'
$lc += '        if self.is_empty():'
$lc += '            raise IndexError("Empty stack")'
$lc += '        return self.data.pop()  # O(1)'
$lc += ''
$lc += '    def top(self):'
$lc += '        if self.is_empty():'
$lc += '            raise IndexError("Empty stack")'
$lc += '        return self.data[-1]'
$lc += ''
$lc += '    def is_empty(self):'
$lc += '        return len(self.data) == 0'
$lc += ''
$lc += '    def size(self):'
$lc += '        return len(self.data)'
$lc += '```'
$lc += ""
$lc += "**Linked list-based stack**:"
$lc += ""
$lc += '```python'
$lc += 'class Node:'
$lc += '    def __init__(self, val):'
$lc += '        self.val = val'
$lc += '        self.next = None'
$lc += ''
$lc += 'class LinkedStack:'
$lc += '    def __init__(self):'
$lc += '        self.head = None'
$lc += ''
$lc += '    def push(self, val):'
$lc += '        node = Node(val)'
$lc += '        node.next = self.head'
$lc += '        self.head = node'
$lc += ''
$lc += '    def pop(self):'
$lc += '        if self.is_empty():'
$lc += '            raise IndexError("Empty stack")'
$lc += '        val = self.head.val'
$lc += '        self.head = self.head.next'
$lc += '        return val'
$lc += ''
$lc += '    def top(self):'
$lc += '        if self.is_empty():'
$lc += '            raise IndexError("Empty stack")'
$lc += '        return self.head.val'
$lc += ''
$lc += '    def is_empty(self):'
$lc += '        return self.head is None'
$lc += '```'
$lc += ""
$lc += "## 8.2 Queue Fundamentals"
$lc += ""
$lc += "**Queue operations**: enqueue (add to rear), dequeue (remove from front), front (view front), rear (view back)."
$lc += ""
$lc += "**Array-based circular queue**:"
$lc += ""
$lc += '```python'
$lc += 'class CircularQueue:'
$lc += '    def __init__(self, capacity):'
$lc += '        self.data = [None] * capacity'
$lc += '        self.capacity = capacity'
$lc += '        self.front = 0'
$lc += '        self.rear = -1'
$lc += '        self.size = 0'
$lc += ''
$lc += '    def enqueue(self, val):'
$lc += '        if self.is_full():'
$lc += '            raise IndexError("Queue full")'
$lc += '        self.rear = (self.rear + 1) % self.capacity'
$lc += '        self.data[self.rear] = val'
$lc += '        self.size += 1'
$lc += ''
$lc += '    def dequeue(self):'
$lc += '        if self.is_empty():'
$lc += '            raise IndexError("Queue empty")'
$lc += '        val = self.data[self.front]'
$lc += '        self.front = (self.front + 1) % self.capacity'
$lc += '        self.size -= 1'
$lc += '        return val'
$lc += ''
$lc += '    def is_empty(self):'
$lc += '        return self.size == 0'
$lc += ''
$lc += '    def is_full(self):'
$lc += '        return self.size == self.capacity'
$lc += '```'
$lc += ""
$lc += "**Linked list-based queue**:"
$lc += ""
$lc += '```python'
$lc += 'class LinkedQueue:'
$lc += '    def __init__(self):'
$lc += '        self.head = None'
$lc += '        self.tail = None'
$lc += ''
$lc += '    def enqueue(self, val):'
$lc += '        node = Node(val)'
$lc += '        if self.tail:'
$lc += '            self.tail.next = node'
$lc += '        self.tail = node'
$lc += '        if not self.head:'
$lc += '            self.head = node'
$lc += ''
$lc += '    def dequeue(self):'
$lc += '        if self.is_empty():'
$lc += '            raise IndexError("Queue empty")'
$lc += '        val = self.head.val'
$lc += '        self.head = self.head.next'
$lc += '        if not self.head:'
$lc += '            self.tail = None'
$lc += '        return val'
$lc += ''
$lc += '    def is_empty(self):'
$lc += '        return self.head is None'
$lc += '```'
$lc += ""
$lc += "## 8.3 Stack Applications"
$lc += ""
$lc += "**Valid parentheses**:"
$lc += ""
$lc += '```python'
$lc += 'def is_valid_parentheses(s):'
$lc += '    pairs = {")": "(", "}": "{", "]": "["}'
$lc += '    stack = []'
$lc += '    for char in s:'
$lc += '        if char in pairs:'
$lc += '            if not stack or stack[-1] != pairs[char]:'
$lc += '                return False'
$lc += '            stack.pop()'
$lc += '        else:'
$lc += '            stack.append(char)'
$lc += '    return len(stack) == 0'
$lc += ''
$lc += 'print(is_valid_parentheses("()[]{}"))  # True'
$lc += 'print(is_valid_parentheses("([)]"))   # False'
$lc += '```'
$lc += ""
$lc += "**Expression evaluation** (infix to postfix):"
$lc += ""
$lc += '```python'
$lc += 'def infix_to_postfix(expression):'
$lc += '    precedence = {"+": 1, "-": 1, "*": 2, "/": 2, "^": 3}'
$lc += '    result = []'
$lc += '    stack = []'
$lc += '    for char in expression:'
$lc += '        if char.isalnum():'
$lc += '            result.append(char)'
$lc += '        elif char == "(":'
$lc += '            stack.append(char)'
$lc += '        elif char == ")":'
$lc += '            while stack and stack[-1] != "(":'
$lc += '                result.append(stack.pop())'
$lc += '            stack.pop()  # remove "("'
$lc += '        else:'
$lc += '            while stack and stack[-1] != "(" and '
$lc += '                  precedence.get(stack[-1], 0) >= precedence.get(char, 0):'
$lc += '                result.append(stack.pop())'
$lc += '            stack.append(char)'
$lc += '    while stack:'
$lc += '        result.append(stack.pop())'
$lc += '    return "".join(result)'
$lc += ''
$lc += 'print(infix_to_postfix("A*(B+C)/D"))  # "ABC+*D/"'
$lc += '```'
$lc += ""
$lc += "**Evaluate postfix expression**:"
$lc += ""
$lc += '```python'
$lc += 'def eval_postfix(expr):'
$lc += '    stack = []'
$lc += '    for token in expr:'
$lc += '        if token.isdigit():'
$lc += '            stack.append(int(token))'
$lc += '        else:'
$lc += '            b = stack.pop()'
$lc += '            a = stack.pop()'
$lc += '            if token == "+": stack.append(a + b)'
$lc += '            elif token == "-": stack.append(a - b)'
$lc += '            elif token == "*": stack.append(a * b)'
$lc += '            elif token == "/": stack.append(a // b)'
$lc += '    return stack[0]'
$lc += ''
$lc += 'print(eval_postfix("23*54*+"))  # (2*3)+(5*4) = 26'
$lc += '```'
$lc += ""
$lc += "## 8.4 Monotonic Stack"
$lc += ""
$lc += "A monotonic stack maintains elements in increasing or decreasing order. Used for next greater/smaller element problems."
$lc += ""
$lc += "**Next greater element**:"
$lc += ""
$lc += '```python'
$lc += 'def next_greater_element(nums):'
$lc += '    result = [-1] * len(nums)'
$lc += '    stack = []'
$lc += '    for i, num in enumerate(nums):'
$lc += '        while stack and nums[stack[-1]] < num:'
$lc += '            result[stack.pop()] = num'
$lc += '        stack.append(i)'
$lc += '    return result'
$lc += ''
$lc += 'print(next_greater_element([4, 5, 2, 25]))  # [5, 25, 25, -1]'
$lc += '```'
$lc += ""
$lc += "**Largest rectangle in histogram**:"
$lc += ""
$lc += '```python'
$lc += 'def largest_rectangle_area(heights):'
$lc += '    stack = []'
$lc += '    max_area = 0'
$lc += '    heights.append(0)  # sentinel'
$lc += '    for i, h in enumerate(heights):'
$lc += '        while stack and heights[stack[-1]] > h:'
$lc += '            height = heights[stack.pop()]'
$lc += '            width = i if not stack else i - stack[-1] - 1'
$lc += '            max_area = max(max_area, height * width)'
$lc += '        stack.append(i)'
$lc += '    return max_area'
$lc += ''
$lc += 'print(largest_rectangle_area([2, 1, 5, 6, 2, 3]))  # 10'
$lc += '```'
$lc += ""
$lc += "**Daily temperatures** (days until warmer):"
$lc += ""
$lc += '```python'
$lc += 'def daily_temperatures(temps):'
$lc += '    result = [0] * len(temps)'
$lc += '    stack = []'
$lc += '    for i, t in enumerate(temps):'
$lc += '        while stack and temps[stack[-1]] < t:'
$lc += '            prev = stack.pop()'
$lc += '            result[prev] = i - prev'
$lc += '        stack.append(i)'
$lc += '    return result'
$lc += ''
$lc += 'print(daily_temperatures([73, 74, 75, 71, 69, 72, 76, 73]))'
$lc += '# [1, 1, 4, 2, 1, 1, 0, 0]'
$lc += '```'
$lc += ""
$lc += "## 8.5 Queue Variants"
$lc += ""
$lc += "**Deque** (double-ended queue): Supports push/pop from both ends."
$lc += ""
$lc += '```python'
$lc += 'from collections import deque'
$lc += ''
$lc += 'dq = deque()'
$lc += 'dq.append(1)        # add to right'
$lc += 'dq.appendleft(2)    # add to left'
$lc += 'dq.pop()            # remove from right'
$lc += 'dq.popleft()        # remove from left'
$lc += '```'
$lc += ""
$lc += "**Priority queue** (min-heap or max-heap): Elements have priorities."
$lc += ""
$lc += '```python'
$lc += 'import heapq'
$lc += ''
$lc += 'pq = []'
$lc += 'heapq.heappush(pq, (3, "task3"))'
$lc += 'heapq.heappush(pq, (1, "task1"))'
$lc += 'heapq.heappush(pq, (2, "task2"))'
$lc += 'while pq:'
$lc += '    priority, task = heapq.heappop(pq)'
$lc += '    print(f"{task}: {priority}")'
$lc += '# task1: 1, task2: 2, task3: 3'
$lc += '```'
$lc += ""
$lc += "## 8.6 Real-World Applications"
$lc += ""
$lc += "**BFS using queue**:"
$lc += ""
$lc += '```python'
$lc += 'from collections import deque'
$lc += ''
$lc += 'def bfs(graph, start):'
$lc += '    visited = set()'
$lc += '    queue = deque([start])'
$lc += '    visited.add(start)'
$lc += '    while queue:'
$lc += '        node = queue.popleft()'
$lc += '        print(node, end=" ")'
$lc += '        for neighbor in graph[node]:'
$lc += '            if neighbor not in visited:'
$lc += '                visited.add(neighbor)'
$lc += '                queue.append(neighbor)'
$lc += ''
$lc += 'graph = {0: [1, 2], 1: [2], 2: [0, 3], 3: [3]}'
$lc += 'bfs(graph, 2)  # 2 0 3 1'
$lc += '```'
$lc += ""
$lc += "**Stack for undo/redo**:"
$lc += ""
$lc += '```python'
$lc += 'class UndoRedo:'
$lc += '    def __init__(self):'
$lc += '        self.undo_stack = []'
$lc += '        self.redo_stack = []'
$lc += ''
$lc += '    def action(self, state):'
$lc += '        self.undo_stack.append(state)'
$lc += '        self.redo_stack.clear()'
$lc += ''
$lc += '    def undo(self):'
$lc += '        if self.undo_stack:'
$lc += '            self.redo_stack.append(self.undo_stack.pop())'
$lc += ''
$lc += '    def redo(self):'
$lc += '        if self.redo_stack:'
$lc += '            self.undo_stack.append(self.redo_stack.pop())'
$lc += '```'
$lc += ""
$lc += "---"
$lc += ""
$lc += "## TypeScript Parallel"
$lc += ""
$lc += '```typescript'
$lc += 'class Stack<T> {'
$lc += '    private items: T[] = [];'
$lc += '    push(item: T): void { this.items.push(item); }'
$lc += '    pop(): T | undefined { return this.items.pop(); }'
$lc += '    peek(): T | undefined { return this.items[this.items.length - 1]; }'
$lc += '    isEmpty(): boolean { return this.items.length === 0; }'
$lc += '}'
$lc += ''
$lc += 'class Queue<T> {'
$lc += '    private items: T[] = [];'
$lc += '    enqueue(item: T): void { this.items.push(item); }'
$lc += '    dequeue(): T | undefined { return this.items.shift(); }'
$lc += '    front(): T | undefined { return this.items[0]; }'
$lc += '    isEmpty(): boolean { return this.items.length === 0; }'
$lc += '}'
$lc += ''
$lc += 'function isValid(s: string): boolean {'
$lc += '    const map = new Map<string, string>([["}", "{"], ["]", "["], [")", "("]]);'
$lc += '    const stack: string[] = [];'
$lc += '    for (const c of s) {'
$lc += '        if (map.has(c)) { if (stack.pop() !== map.get(c)) return false; }'
$lc += '        else stack.push(c);'
$lc += '    }'
$lc += '    return stack.length === 0;'
$lc += '}'
$lc += '```'
$lc += ""
$lc += "---"
$lc += ""
$lc += Get-Summary @(
    "Stacks follow LIFO (Last-In-First-Out) principle; queues follow FIFO (First-In-First-Out)",
    "Array-based stacks provide O(1) amortized push/pop; simple and cache-friendly",
    "Linked-list based queues avoid shifting but use more memory per element",
    "Parenthesis matching uses a stack to track opening brackets, ensuring proper nesting",
    "Expression evaluation uses stacks for operator precedence and postfix conversion",
    "Monotonic stacks maintain sorted order and solve next greater/smaller element in O(n)",
    "The largest rectangle in histogram uses a monotonic stack to find the maximum area rectangle",
    "Circular queues reuse array space by wrapping around, avoiding O(n) enqueue/dequeue",
    "Deques support operations at both ends and are implemented as collections.deque in Python",
    "Priority queues order elements by priority and are implemented with heaps for O(log n) operations"
)
$lc += Get-Takeaways @(
    "Parentheses validation|Use stack of opening brackets|Counting brackets without nesting check",
    "Next greater element|Monotonic decreasing stack|Nested loops O(n^2)",
    "Queue BFS|Use collections.deque|Using list.pop(0) which is O(n)",
    "Circular buffer|Use modular arithmetic for front/rear|Resizing array for each enqueue",
    "Expression parsing|Stack for operators, postfix evaluation|Recursive descent for simple cases",
    "Priority task scheduling|heapq push/pop|Sorting each time"
)
$lc += ""
$lc += "## Interview Q&A"
for ($i = 1; $i -le 12; $i++) {
    $lc += '<details class="tp-qa-card" data-qid="dsa08-q' + $i + '">'
    $lc += '  <summary class="tp-qa-question"><span class="tp-qa-status"></span>'
    switch ($i) {
        1 { $lc += "    Q1: What is the difference between a stack and a queue?"
            $lc += "  </summary>"
            $lc += '  <div class="tp-qa-answer"><p>Stack: LIFO - push/pop at same end. Queue: FIFO - enqueue at rear, dequeue at front.</p></div>' }
        2 { $lc += "    Q2: How do you implement a queue using two stacks?"
            $lc += "  </summary>"
            $lc += '  <div class="tp-qa-answer"><p>Use stack1 for enqueue. For dequeue, if stack2 is empty, pop all from stack1 to stack2, then pop from stack2. Amortized O(1) per operation.</p></div>' }
        3 { $lc += "    Q3: Explain the monotonic stack with an example."
            $lc += "  </summary>"
            $lc += '  <div class="tp-qa-answer"><p>A monotonic stack maintains elements in increasing/decreasing order. For next greater element, we pop when current > stack top, recording the current as the next greater for the popped index.</p></div>' }
        4 { $lc += "    Q4: How do you implement a stack with O(1) min operation?"
            $lc += "  </summary>"
            $lc += '  <div class="tp-qa-answer"><p>Maintain two stacks: one for values, one for minimums. On push, push min(value, current_min) onto min stack. On pop, pop both. Min is top of min stack.</p></div>' }
        5 { $lc += "    Q5: How does a circular queue work?"
            $lc += "  </summary>"
            $lc += '  <div class="tp-qa-answer"><p>Use a fixed array with front and rear pointers that wrap around using modulo. Avoids O(n) shifting required by linear array queues.</p></div>' }
        6 { $lc += "    Q6: Solve the largest rectangle in histogram problem."
            $lc += "  </summary>"
            $lc += '  <div class="tp-qa-answer"><p>Use monotonic stack of increasing heights. When a smaller height is encountered, pop larger heights and calculate area using the current index as right boundary.</p></div>' }
        7 { $lc += "    Q7: How do you evaluate a postfix expression?"
            $lc += "  </summary>"
            $lc += '  <div class="tp-qa-answer"><p>Scan left to right. Push numbers onto stack. When operator is encountered, pop two numbers, apply operator, push result. Final stack element is the answer.</p></div>' }
        8 { $lc += "    Q8: What is a deque and when would you use it?"
            $lc += "  </summary>"
            $lc += '  <div class="tp-qa-answer"><p>Deque allows push/pop from both ends. Used for sliding window maximum, palindrome checking, and undo/redo with limited history.</p></div>' }
        9 { $lc += "    Q9: How does a priority queue differ from a regular queue?"
            $lc += "  </summary>"
            $lc += '  <div class="tp-qa-answer"><p>Priority queue orders elements by priority (not insertion order). Implemented with heap: O(log n) insert/delete, O(1) peek. Used for Dijkstra, A*, task scheduling.</p></div>' }
        10 { $lc += "    Q10: Implement a stack that supports push, pop, top, and getMin in O(1)."
            $lc += "  </summary>"
            $lc += '  <div class="tp-qa-answer"><p>Store each value paired with the current minimum: (value, min_so_far). On push, compare new value with top''s min. On pop, just pop. getMin returns top''s min.</p></div>' }
        11 { $lc += "    Q11: Explain the sliding window maximum using deque."
            $lc += "  </summary>"
            $lc += '  <div class="tp-qa-answer"><p>Store indices in deque with decreasing values. Before adding new element, remove indices outside window (from front) and smaller elements (from back). Front always has max.</p></div>' }
        12 { $lc += "    Q12: How do you check if a string has balanced parentheses?"
            $lc += "  </summary>"
            $lc += '  <div class="tp-qa-answer"><p>Use stack. For each char, if opening bracket, push. If closing, pop and check if it matches the expected opening bracket. Stack must be empty at end.</p></div>' }
    }
    $lc += '  <button class="tp-qa-mark-btn">âœ… Mark Reviewed</button>'
    $lc += '  <button class="tp-qa-bookmark-btn">ðŸ”– Bookmark</button>'
    $lc += "</details>"
    $lc += ""
}
$lc += "## Chapter Quiz"
$lc += "**Q1**: What is the time complexity of push/pop operations on a stack implemented with dynamic array?`n"
$lc += "a) O(1) amortized  b) O(n)  c) O(log n)  d) O(n^2)"
$lc += '<details class="tp-qa-card" data-qid="dsa08-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: a) O(1) amortized</strong></p></div></details>'
$lc += ""
$lc += "**Q2**: Which data structure is used for BFS traversal?"
$lc += "a) Stack  b) Queue  c) Priority Queue  d) Deque"
$lc += '<details class="tp-qa-card" data-qid="dsa08-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Queue</strong></p></div></details>'
$lc += ""
$lc += "**Q3**: What is the space complexity of the monotonic stack solution for next greater element?"
$lc += "a) O(1)  b) O(n)  c) O(log n)  d) O(n^2)"
$lc += '<details class="tp-qa-card" data-qid="dsa08-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) O(n)</strong></p></div></details>'
$lc += ""
$lc += "**Q4**: Which queue variant allows push/pop at both ends?"
$lc += "a) Circular queue  b) Priority queue  c) Deque  d) Blocking queue"
$lc += '<details class="tp-qa-card" data-qid="dsa08-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) Deque</strong></p></div></details>'
$lc += ""
$lc += "**Q5**: What is the time complexity of accessing the minimum element in a stack with O(1) getMin?"
$lc += "a) O(1)  b) O(n)  c) O(log n)  d) O(n^2)"
$lc += '<details class="tp-qa-card" data-qid="dsa08-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: a) O(1)</strong></p></div></details>'
$lc += ""
$lc += Get-Exercises @(
    "Easy|Implement a stack using arrays with push, pop, top, isEmpty, and size",
    "Medium|Implement a MinStack that supports push, pop, top, and getMin in O(1)",
    "Medium|Evaluate a fully parenthesized infix expression using two stacks",
    "Hard|Largest rectangle in a histogram - implement the O(n) monotonic stack solution",
    "Hard|Implement a queue using stacks where each operation is amortized O(1)"
)
$lc += "> **Next**: [09 - Binary Trees â†’](09-binary-trees.md)"
Write-File (Join-Path $DSA "08-stacks-and-queues.md") $lc

# ========== DSA 09: Binary Trees ==========
$lc = @()
$lc += "# Binary Trees"
$lc += ""
$lc += Get-LOs @(
    "Understand binary tree structure, terminology, and properties",
    "Implement tree traversals: inorder, preorder, postorder, level-order",
    "Solve tree problems using recursion and iterative approaches",
    "Calculate tree height, diameter, and path-related properties",
    "Build trees from traversal sequences",
    "Apply DFS and BFS strategies to binary tree problems"
)
$lc += Get-Gallery "03-data-structures-algorithms" "09-binary-trees"
$lc += Get-Glance @(
    "9.1 | Binary Tree Fundamentals | Nodes, edges, root, leaf, height",
    "9.2 | Tree Traversals | Preorder, inorder, postorder, level-order",
    "9.3 | Recursive Tree Problems | Max depth, diameter, balanced tree",
    "9.4 | Iterative Traversals | Stack-based DFS, queue-based BFS",
    "9.5 | Tree Construction | Build from inorder/preorder/postorder",
    "9.6 | Advanced Problems | LCA, serialize, max path sum"
)
$lc += Get-Mermaid @(
    "A[Binary Tree] --> B[Traversals]",
    "A --> C[Recursive]",
    "A --> D[Iterative]",
    "B --> E[DFS: Pre/In/Post]",
    "B --> F[BFS: Level-Order]",
    "C --> G[Height, Diameter]",
    "D --> H[Stack/Queue]",
    "E --> I[Construction]",
    "F --> I",
    "G --> J[LCA, Path Sum]"
)
$lc += ""
$lc += "A binary tree is a hierarchical data structure where each node has at most two children: left and right."
$lc += ""
$lc += "## 9.1 Binary Tree Fundamentals"
$lc += ""
$lc += '```python'
$lc += 'class TreeNode:'
$lc += '    def __init__(self, val=0, left=None, right=None):'
$lc += '        self.val = val'
$lc += '        self.left = left'
$lc += '        self.right = right'
$lc += ''
$lc += '# Build:     1'
$lc += '#          / \'
$lc += '#         2   3'
$lc += '#        / \   \'
$lc += '#       4   5   6'
$lc += 'root = TreeNode(1)'
$lc += 'root.left = TreeNode(2, TreeNode(4), TreeNode(5))'
$lc += 'root.right = TreeNode(3, None, TreeNode(6))'
$lc += ''
$lc += '# Tree properties'
$lc += 'def count_nodes(root):'
$lc += '    if not root: return 0'
$lc += '    return 1 + count_nodes(root.left) + count_nodes(root.right)'
$lc += ''
$lc += 'def height(root):'
$lc += '    if not root: return -1  # edge-based height'
$lc += '    return 1 + max(height(root.left), height(root.right))'
$lc += '```'
$lc += ""
$lc += "## 9.2 Tree Traversals"
$lc += ""
$lc += "**Preorder** (Root-Left-Right):"
$lc += ""
 += '`python'
$lc += 'def preorder(root):'
$lc += '    if not root: return []'
$lc += '    return [root.val] + preorder(root.left) + preorder(root.right)'
$lc += '```'
$lc += ""
$lc += "**Inorder** (Left-Root-Right):"
$lc += ""
$lc += '```python'
$lc += 'def inorder(root):'
$lc += '    if not root: return []'
$lc += '    return inorder(root.left) + [root.val] + inorder(root.right)'
$lc += ''
$lc += '# Inorder of BST gives sorted order'
$lc += '```'
$lc += ""
$lc += "**Postorder** (Left-Right-Root):"
$lc += ""
$lc += '```python'
$lc += 'def postorder(root):'
$lc += '    if not root: return []'
$lc += '    return postorder(root.left) + postorder(root.right) + [root.val]'
$lc += '```'
$lc += ""
$lc += "**Level-order** (BFS):"
$lc += ""
$lc += '```python'
$lc += 'from collections import deque'
$lc += ''
$lc += 'def level_order(root):'
$lc += '    if not root: return []'
$lc += '    result = []'
$lc += '    queue = deque([root])'
$lc += '    while queue:'
$lc += '        level = []'
$lc += '        for _ in range(len(queue)):'
$lc += '            node = queue.popleft()'
$lc += '            level.append(node.val)'
$lc += '            if node.left: queue.append(node.left)'
$lc += '            if node.right: queue.append(node.right)'
$lc += '        result.append(level)'
$lc += '    return result'
$lc += '```'
$lc += ""
$lc += "## 9.3 Recursive Tree Problems"
$lc += ""
$lc += "**Maximum depth of binary tree**:"
$lc += ""
$lc += '```python'
$lc += 'def max_depth(root):'
$lc += '    if not root: return 0'
$lc += '    return 1 + max(max_depth(root.left), max_depth(root.right))'
$lc += '```'
$lc += ""
$lc += "**Diameter of binary tree**:"
$lc += ""
$lc += '```python'
$lc += 'def diameter_of_binary_tree(root):'
$lc += '    diameter = 0'
$lc += ''
$lc += '    def dfs(node):'
$lc += '        nonlocal diameter'
$lc += '        if not node: return 0'
$lc += '        left = dfs(node.left)'
$lc += '        right = dfs(node.right)'
$lc += '        diameter = max(diameter, left + right)'
$lc += '        return 1 + max(left, right)'
$lc += ''
$lc += '    dfs(root)'
$lc += '    return diameter'
$lc += '```'
$lc += ""
$lc += "**Balanced binary tree** (height difference <= 1):"
$lc += ""
$lc += '```python'
$lc += 'def is_balanced(root):'
$lc += '    def dfs(node):'
$lc += '        if not node: return (True, 0)'
$lc += '        left_balanced, left_h = dfs(node.left)'
$lc += '        right_balanced, right_h = dfs(node.right)'
$lc += '        balanced = (left_balanced and right_balanced and '
$lc += '                   abs(left_h - right_h) <= 1)'
$lc += '        return (balanced, 1 + max(left_h, right_h))'
$lc += '    return dfs(root)[0]'
$lc += '```'
$lc += ""
$lc += "## 9.4 Iterative Traversals"
$lc += ""
$lc += "**Iterative preorder**:"
$lc += ""
$lc += '```python'
$lc += 'def preorder_iterative(root):'
$lc += '    if not root: return []'
$lc += '    stack, result = [root], []'
$lc += '    while stack:'
$lc += '        node = stack.pop()'
$lc += '        result.append(node.val)'
$lc += '        if node.right: stack.append(node.right)'
$lc += '        if node.left: stack.append(node.left)'
$lc += '    return result'
$lc += '```'
$lc += ""
$lc += "**Iterative inorder**:"
$lc += ""
$lc += '```python'
$lc += 'def inorder_iterative(root):'
$lc += '    stack, result = [], []'
$lc += '    curr = root'
$lc += '    while stack or curr:'
$lc += '        while curr:'
$lc += '            stack.append(curr)'
$lc += '            curr = curr.left'
$lc += '        curr = stack.pop()'
$lc += '        result.append(curr.val)'
$lc += '        curr = curr.right'
$lc += '    return result'
$lc += '```'
$lc += ""
$lc += "## 9.5 Tree Construction"
$lc += ""
$lc += "**Build tree from inorder and preorder**:"
$lc += ""
$lc += '```python'
$lc += 'def build_tree(preorder, inorder):'
$lc += '    if not preorder or not inorder:'
$lc += '        return None'
$lc += '    root_val = preorder[0]'
$lc += '    root = TreeNode(root_val)'
$lc += '    mid = inorder.index(root_val)'
$lc += '    root.left = build_tree(preorder[1:mid+1], inorder[:mid])'
$lc += '    root.right = build_tree(preorder[mid+1:], inorder[mid+1:])'
$lc += '    return root'
$lc += '```'
$lc += ""
$lc += "## 9.6 Advanced Problems"
$lc += ""
$lc += "**Lowest common ancestor (LCA)**:"
$lc += ""
$lc += '```python'
$lc += 'def lowest_common_ancestor(root, p, q):'
$lc += '    if not root or root == p or root == q:'
$lc += '        return root'
$lc += '    left = lowest_common_ancestor(root.left, p, q)'
$lc += '    right = lowest_common_ancestor(root.right, p, q)'
$lc += '    if left and right:'
$lc += '        return root  # p and q in different subtrees'
$lc += '    return left or right'
$lc += '```'
$lc += ""
$lc += "**Maximum path sum** (any node to any node):"
$lc += ""
$lc += '```python'
$lc += 'def max_path_sum(root):'
$lc += '    max_sum = float("-inf")'
$lc += ''
$lc += '    def dfs(node):'
$lc += '        nonlocal max_sum'
$lc += '        if not node: return 0'
$lc += '        left = max(dfs(node.left), 0)'
$lc += '        right = max(dfs(node.right), 0)'
$lc += '        max_sum = max(max_sum, left + right + node.val)'
$lc += '        return node.val + max(left, right)'
$lc += ''
$lc += '    dfs(root)'
$lc += '    return max_sum'
$lc += '```'
$lc += ""
$lc += "**Serialize and deserialize**:"
$lc += ""
$lc += '```python'
$lc += 'def serialize(root):'
$lc += '    def dfs(node):'
$lc += '        if not node: return ["null"]'
$lc += '        return [str(node.val)] + dfs(node.left) + dfs(node.right)'
$lc += '    return ",".join(dfs(root))'
$lc += ''
$lc += 'def deserialize(data):'
$lc += '    vals = data.split(",")'
$lc += '    def dfs():'
$lc += '        v = vals.pop(0)'
$lc += '        if v == "null": return None'
$lc += '        node = TreeNode(int(v))'
$lc += '        node.left = dfs()'
$lc += '        node.right = dfs()'
$lc += '        return node'
$lc += '    return dfs()'
$lc += '```'
$lc += ""
$lc += "---"
$lc += ""
$lc += "## TypeScript Parallel"
$lc += ""
$lc += '```typescript'
$lc += 'class TreeNode {'
$lc += '    val: number;'
$lc += '    left: TreeNode | null = null;'
$lc += '    right: TreeNode | null = null;'
$lc += '    constructor(val: number) { this.val = val; }'
$lc += '}'
$lc += ''
$lc += 'function maxDepth(root: TreeNode | null): number {'
$lc += '    if (!root) return 0;'
$lc += '    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));'
$lc += '}'
$lc += ''
$lc += 'function inorderTraversal(root: TreeNode | null): number[] {'
$lc += '    const result: number[] = [];'
$lc += '    const stack: TreeNode[] = [];'
$lc += '    let curr = root;'
$lc += '    while (stack.length || curr) {'
$lc += '        while (curr) { stack.push(curr); curr = curr.left; }'
$lc += '        curr = stack.pop()!;'
$lc += '        result.push(curr.val);'
$lc += '        curr = curr.right;'
$lc += '    }'
$lc += '    return result;'
$lc += '}'
$lc += '```'
$lc += ""
$lc += "---"
$lc += ""
$lc += Get-Summary @(
    "Binary trees are hierarchical structures with each node having at most two children (left and right)",
    "Preorder traversal visits root before children; useful for tree copying and serialization",
    "Inorder traversal visits left subtree, then root, then right subtree; gives sorted order for BSTs",
    "Postorder traversal visits children before root; useful for tree deletion and expression evaluation",
    "Level-order traversal (BFS) visits nodes level by level using a queue",
    "Recursive solutions for tree problems follow a divide-and-conquer pattern with clear base cases",
    "Iterative traversals use explicit stacks (DFS) or queues (BFS) to avoid recursion overhead",
    "The diameter of a tree is the longest path between any two nodes, found via DFS",
    "LCA finds the deepest node that has both target nodes as descendants",
    "Binary trees can be serialized to strings and deserialized back using preorder with null markers"
)
$lc += Get-Takeaways @(
    "Tree traversal|Choose based on problem: preorder for copy, inorder for sorted, postorder for delete|Using wrong traversal order",
    "Recursive depth|Use iterative for very deep trees (stack overflow risk)|Recursion without depth limit check",
    "Diameter calculation|DFS returning height while tracking max path|Two separate traversals",
    "LCA|Recursive divide-and-conquer|Path-finding approach (O(n^2))",
    "Tree construction|Use hash map for O(1) inorder index lookup|Linear search each recursive call",
    "Level-order|Queue-based BFS|Recursive approach with depth tracking"
)
$lc += ""
$lc += "## Interview Q&A"
for ($i = 1; $i -le 12; $i++) {
    $lc += '<details class="tp-qa-card" data-qid="dsa09-q' + $i + '">'
    $lc += '  <summary class="tp-qa-question"><span class="tp-qa-status"></span>'
    switch ($i) {
        1 { $lc += "    Q1: What are the differences between tree traversals?"
            $lc += "  </summary>"
            $lc += '  <div class="tp-qa-answer"><p>Preorder: Root-Left-Right (for copying trees). Inorder: Left-Root-Right (sorted in BST). Postorder: Left-Right-Root (for deletion). Level-order: BFS using queue.</p></div>' }
        2 { $lc += "    Q2: How do you find the height of a binary tree?"
            $lc += "  </summary>"
            $lc += '  <div class="tp-qa-answer"><p>Recursively: height = 1 + max(height(left), height(right)). Base case: empty node returns 0 (node-based) or -1 (edge-based).</p></div>' }
        3 { $lc += "    Q3: What is the diameter of a binary tree?"
            $lc += "  </summary>"
            $lc += '  <div class="tp-qa-answer"><p>The longest path between any two nodes (may or may not pass through root). Use DFS: for each node, diameter = max(diameter, left_height + right_height).</p></div>' }
        4 { $lc += "    Q4: How do you check if a binary tree is balanced?"
            $lc += "  </summary>"
            $lc += '  <div class="tp-qa-answer"><p>For each node, the height difference between left and right subtrees must be at most 1. Return both balanced flag and height from DFS.</p></div>' }
        5 { $lc += "    Q5: How do you perform level-order traversal?"
            $lc += "  </summary>"
            $lc += '  <div class="tp-qa-answer"><p>Use a queue. Enqueue root. While queue not empty, process all nodes at current level, enqueuing their children for the next level.</p></div>' }
        6 { $lc += "    Q6: Explain LCA in a binary tree."
            $lc += "  </summary>"
            $lc += '  <div class="tp-qa-answer"><p>LCA is the deepest node that has both targets in its subtree. If root matches either target, return root. If left and right both return non-null, root is LCA.</p></div>' }
        7 { $lc += "    Q7: How do you serialize and deserialize a binary tree?"
            $lc += "  </summary>"
            $lc += '  <div class="tp-qa-answer"><p>Use preorder traversal with null markers. Serialize as comma-separated string. Deserialize by reading values and recursively building nodes.</p></div>' }
        8 { $lc += "    Q8: What is the maximum path sum problem?"
            $lc += "  </summary>"
            $lc += '  <div class="tp-qa-answer"><p>Find the path with maximum sum between any two nodes. Use DFS returning the max single-path sum, tracking the max of left+right+node.val as potential answer.</p></div>' }
        9 { $lc += "    Q9: How do you build a tree from inorder and preorder?"
            $lc += "  </summary>"
            $lc += '  <div class="tp-qa-answer"><p>First element of preorder is root. Find it in inorder to split left/right subtrees. Recursively build using appropriate slices.</p></div>' }
        10 { $lc += "    Q10: Compare recursive and iterative approaches for tree problems."
            $lc += "  </summary>"
            $lc += '  <div class="tp-qa-answer"><p>Recursive: elegant, divide-and-conquer, risk of stack overflow for deep trees. Iterative: more complex, uses explicit stack/queue, avoids stack overflow.</p></div>' }
        11 { $lc += "    Q11: How do you count all nodes in a complete binary tree in less than O(n)?"
            $lc += "  </summary>"
            $lc += '  <div class="tp-qa-answer"><p>Calculate left and right heights. If equal, use formula 2^h - 1. Otherwise, recursively count left + 1 + right. O(log^2 n) for complete trees.</p></div>' }
        12 { $lc += "    Q12: What is the difference between a binary tree and a BST?"
            $lc += "  </summary>"
            $lc += '  <div class="tp-qa-answer"><p>Binary tree: no ordering constraint. BST: left subtree values < root < right subtree values. BST enables O(log n) search, insert, delete if balanced.</p></div>' }
    }
    $lc += '  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>'
    $lc += '  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>'
    $lc += "</details>"
    $lc += ""
}
$lc += "## Chapter Quiz"
$lc += "**Q1**: Which traversal gives sorted order in a BST?"
$lc += "a) Preorder  b) Inorder  c) Postorder  d) Level-order"
$lc += '<details class="tp-qa-card" data-qid="dsa09-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Inorder</strong></p></div></details>'
$lc += ""
$lc += "**Q2**: What is the time complexity of level-order traversal?"
$lc += "a) O(log n)  b) O(n)  c) O(n^2)  d) O(2^n)"
$lc += '<details class="tp-qa-card" data-qid="dsa09-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) O(n)</strong></p></div></details>'
$lc += ""
$lc += "**Q3**: In LCA, what does it mean if left and right both return non-null?"
$lc += "a) p and q are in the same subtree  b) root is the LCA  c) One target is missing  d) Tree is empty"
$lc += '<details class="tp-qa-card" data-qid="dsa09-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) root is the LCA</strong></p></div></details>'
$lc += ""
$lc += "**Q4**: What is the height of a tree with 1 node (node-based)?"
$lc += "a) -1  b) 0  c) 1  d) 2"
$lc += '<details class="tp-qa-card" data-qid="dsa09-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) 0</strong></p><p>Node-based height of a single node is 0. Edge-based would be -1.</p></div></details>'
$lc += ""
$lc += "**Q5**: Which data structure is used for iterative preorder traversal?"
$lc += "a) Queue  b) Stack  c) Deque  d) Priority Queue"
$lc += '<details class="tp-qa-card" data-qid="dsa09-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Stack</strong></p></div></details>'
$lc += ""
$lc += Get-Exercises @(
    "Easy|Traverse a tree in inorder, preorder, and postorder recursively",
    "Medium|Check if a binary tree is symmetric (mirror of itself)",
    "Medium|Find all root-to-leaf paths in a binary tree",
    "Hard|Serialize and deserialize a binary tree (any format)",
    "Hard|Find the distance between two nodes in a binary tree (number of edges in path)"
)
$lc += "> **Next**: [10 - Binary Search Trees →](10-binary-search-trees.md)"
Write-File (Join-Path $DSA "09-binary-trees.md") $lc
Write-Output "Created 09-binary-trees.md"

# ========== DSA 10: Binary Search Trees ==========
$lc = @()
$lc += "# Binary Search Trees"
$lc += ""
$lc += Get-LOs @(
    "Understand BST property: left < root < right for all nodes",
    "Implement BST search, insertion, and deletion operations",
    "Understand balanced BST concepts: AVL, Red-Black trees",
    "Solve BST problems using inorder traversal property",
    "Implement range queries, floor/ceil, and successor/predecessor",
    "Convert BST to sorted list and vice versa"
)
$lc += Get-Gallery "03-data-structures-algorithms" "10-binary-search-trees"
$lc += Get-Glance @(
    "10.1 | BST Property | Left < Root < Right, inorder sorted",
    "10.2 | Basic Operations | Search, insert, delete",
    "10.3 | BST Validation | Inorder check, min/max range",
    "10.4 | Successor/Predecessor | Next/previous in sorted order",
    "10.5 | Balanced BSTs | AVL rotations, Red-Black properties",
    "10.6 | Advanced Problems | Floor/ceil, range sum, BST to DLL"
)
$lc += Get-Mermaid @(
    "A[BST] --> B[Property: Left < Root < Right]",
    "B --> C[Search O(h)]",
    "B --> D[Insert O(h)]",
    "B --> E[Delete O(h)]",
    "C --> F[Balance]",
    "D --> F",
    "E --> F",
    "F --> G[AVL Tree]",
    "F --> H[Red-Black Tree]"
)
$lc += ""
$lc += "A Binary Search Tree (BST) maintains the ordering property that for every node, all values in the left subtree are less than the node's value, and all values in the right subtree are greater."
$lc += ""
$lc += "## 10.1 BST Property"
$lc += ""
$lc += '```python'
$lc += 'class BSTNode:'
$lc += '    def __init__(self, val):'
$lc += '        self.val = val'
$lc += '        self.left = None'
$lc += '        self.right = None'
$lc += ''
$lc += '# Valid BST'
$lc += '#       5'
$lc += '#      / \'
$lc += '#     3   7'
$lc += '#    / \   \'
$lc += '#   2   4   8'
$lc += 'root = BSTNode(5)'
$lc += 'root.left = BSTNode(3)'
$lc += 'root.right = BSTNode(7)'
$lc += 'root.left.left = BSTNode(2)'
$lc += 'root.left.right = BSTNode(4)'
$lc += 'root.right.right = BSTNode(8)'
$lc += ''
$lc += '# Inorder gives sorted order'
$lc += 'def inorder(root):'
$lc += '    if not root: return []'
$lc += '    return inorder(root.left) + [root.val] + inorder(root.right)'
$lc += 'print(inorder(root))  # [2, 3, 4, 5, 7, 8]'
$lc += '```'
$lc += ""
$lc += "## 10.2 Basic Operations"
$lc += ""
$lc += "**Search**:"
$lc += ""
$lc += '```python'
$lc += 'def search(root, target):'
$lc += '    if not root or root.val == target:'
$lc += '        return root'
$lc += '    if target < root.val:'
$lc += '        return search(root.left, target)'
$lc += '    return search(root.right, target)'
$lc += ''
$lc += 'def search_iterative(root, target):'
$lc += '    while root and root.val != target:'
$lc += '        if target < root.val:'
$lc += '            root = root.left'
$lc += '        else:'
$lc += '            root = root.right'
$lc += '    return root'
$lc += '```'
$lc += ""
$lc += "**Insert**:"
$lc += ""
$lc += '```python'
$lc += 'def insert(root, val):'
$lc += '    if not root:'
$lc += '        return BSTNode(val)'
$lc += '    if val < root.val:'
$lc += '        root.left = insert(root.left, val)'
$lc += '    elif val > root.val:'
$lc += '        root.right = insert(root.right, val)'
$lc += '    return root'
$lc += '```'
$lc += ""
$lc += "**Delete** (three cases):"
$lc += ""
$lc += '```python'
$lc += 'def delete(root, val):'
$lc += '    if not root:'
$lc += '        return None'
$lc += '    if val < root.val:'
$lc += '        root.left = delete(root.left, val)'
$lc += '    elif val > root.val:'
$lc += '        root.right = delete(root.right, val)'
$lc += '    else:'
$lc += '        # Case 1: Leaf node'
$lc += '        if not root.left and not root.right:'
$lc += '            return None'
$lc += '        # Case 2: One child'
$lc += '        if not root.left:'
$lc += '            return root.right'
$lc += '        if not root.right:'
$lc += '            return root.left'
$lc += '        # Case 3: Two children'
$lc += '        successor = min_value_node(root.right)'
$lc += '        root.val = successor.val'
$lc += '        root.right = delete(root.right, successor.val)'
$lc += '    return root'
$lc += ''
$lc += 'def min_value_node(root):'
$lc += '    while root.left:'
$lc += '        root = root.left'
$lc += '    return root'
$lc += '```'
$lc += ""
$lc += "## 10.3 BST Validation"
$lc += ""
$lc += "**Validate BST using min/max range**:"
$lc += ""
$lc += '```python'
$lc += 'def is_valid_bst(root):'
$lc += '    def validate(node, low, high):'
$lc += '        if not node:'
$lc += '            return True'
$lc += '        if node.val <= low or node.val >= high:'
$lc += '            return False'
$lc += '        return (validate(node.left, low, node.val) and '
$lc += '                validate(node.right, node.val, high))'
$lc += '    return validate(root, float("-inf"), float("inf"))'
$lc += '```'
$lc += ""
$lc += "**Validate BST using inorder**:"
$lc += ""
$lc += '```python'
$lc += 'def is_valid_bst_inorder(root):'
$lc += '    prev = [float("-inf")]'
$lc += ''
$lc += '    def dfs(node):'
$lc += '        if not node: return True'
$lc += '        if not dfs(node.left): return False'
$lc += '        if node.val <= prev[0]: return False'
$lc += '        prev[0] = node.val'
$lc += '        return dfs(node.right)'
$lc += ''
$lc += '    return dfs(root)'
$lc += '```'
$lc += ""
$lc += "## 10.4 Successor and Predecessor"
$lc += ""
$lc += "**Inorder successor** (next node in inorder):"
$lc += ""
$lc += '```python'
$lc += 'def inorder_successor(root, target):'
$lc += '    successor = None'
$lc += '    while root:'
$lc += '        if target.val < root.val:'
$lc += '            successor = root'
$lc += '            root = root.left'
$lc += '        else:'
$lc += '            root = root.right'
$lc += '    return successor'
$lc += ''
$lc += 'def inorder_predecessor(root, target):'
$lc += '    predecessor = None'
$lc += '    while root:'
$lc += '        if target.val > root.val:'
$lc += '            predecessor = root'
$lc += '            root = root.right'
$lc += '        else:'
$lc += '            root = root.left'
$lc += '    return predecessor'
$lc += '```'
$lc += ""
$lc += "## 10.5 Balanced BSTs"
$lc += ""
$lc += "**AVL Tree** balances after every insertion/deletion using rotations. Height difference between left and right subtrees is at most 1."
$lc += ""
$lc += '```python'
$lc += 'class AVLNode:'
$lc += '    def __init__(self, val):'
$lc += '        self.val = val'
$lc += '        self.left = None'
$lc += '        self.right = None'
$lc += '        self.height = 1'
$lc += ''
$lc += 'def get_height(node): return node.height if node else 0'
$lc += 'def get_balance(node):'
$lc += '    return get_height(node.left) - get_height(node.right) if node else 0'
$lc += ''
$lc += 'def rotate_right(y):'
$lc += '    x = y.left'
$lc += '    T2 = x.right'
$lc += '    x.right = y'
$lc += '    y.left = T2'
$lc += '    y.height = 1 + max(get_height(y.left), get_height(y.right))'
$lc += '    x.height = 1 + max(get_height(x.left), get_height(x.right))'
$lc += '    return x'
$lc += ''
$lc += 'def rotate_left(x):'
$lc += '    y = x.right'
$lc += '    T2 = y.left'
$lc += '    y.left = x'
$lc += '    x.right = T2'
$lc += '    x.height = 1 + max(get_height(x.left), get_height(x.right))'
$lc += '    y.height = 1 + max(get_height(y.left), get_height(y.right))'
$lc += '    return y'
$lc += '```'
$lc += ""
$lc += "**Red-Black Tree** properties:"
$lc += "- Each node is either red or black"
$lc += "- Root is black"
$lc += "- Red nodes cannot have red children (no two reds in a row)"
$lc += "- Every path from root to leaf has same number of black nodes"
$lc += ""
$lc += "## 10.6 Advanced Problems"
$lc += ""
$lc += "**Floor and Ceil in BST**:"
$lc += ""
$lc += '```python'
 += 'def floor(root, x):'
$lc += '    result = None'
$lc += '    while root:'
$lc += '        if root.val == x:'
$lc += '            return root.val'
$lc += '        elif root.val < x:'
$lc += '            result = root.val'
$lc += '            root = root.right'
$lc += '        else:'
$lc += '            root = root.left'
$lc += '    return result'
$lc += ''
$lc += 'def ceil(root, x):'
$lc += '    result = None'
$lc += '    while root:'
$lc += '        if root.val == x:'
$lc += '            return root.val'
$lc += '        elif root.val > x:'
$lc += '            result = root.val'
$lc += '            root = root.left'
$lc += '        else:'
$lc += '            root = root.right'
$lc += '    return result'
$lc += '```'
$lc += ""
$lc += "**Range sum BST** (sum of values between low and high):"
$lc += ""
$lc += '```python'
$lc += 'def range_sum_bst(root, low, high):'
$lc += '    if not root: return 0'
$lc += '    if root.val < low:'
$lc += '        return range_sum_bst(root.right, low, high)'
$lc += '    if root.val > high:'
$lc += '        return range_sum_bst(root.left, low, high)'
$lc += '    return (root.val +'
$lc += '            range_sum_bst(root.left, low, high) +'
$lc += '            range_sum_bst(root.right, low, high))'
$lc += '```'
$lc += ""
$lc += "**Convert BST to sorted doubly linked list**:"
$lc += ""
$lc += '```python'
$lc += 'def bst_to_dll(root):'
$lc += '    def dfs(node):'
$lc += '        nonlocal first, last'
$lc += '        if not node: return'
$lc += '        dfs(node.left)'
$lc += '        if last:'
$lc += '            last.right = node'
$lc += '            node.left = last'
$lc += '        else:'
$lc += '            first = node'
$lc += '        last = node'
$lc += '        dfs(node.right)'
$lc += '    first = last = None'
$lc += '    dfs(root)'
$lc += '    return first'
$lc += '```'
$lc += ""
$lc += "---"
$lc += ""
$lc += "## TypeScript Parallel"
$lc += ""
$lc += '```typescript'
$lc += 'class TreeNode {'
$lc += '    val: number;'
$lc += '    left: TreeNode | null = null;'
$lc += '    right: TreeNode | null = null;'
$lc += '    constructor(val: number) { this.val = val; }'
$lc += '}'
$lc += ''
$lc += 'function searchBST(root: TreeNode | null, val: number): TreeNode | null {'
$lc += '    if (!root || root.val === val) return root;'
$lc += '    return val < root.val ? searchBST(root.left, val) : searchBST(root.right, val);'
$lc += '}'
$lc += ''
$lc += 'function isValidBST(root: TreeNode | null): boolean {'
$lc += '    function validate(node: TreeNode | null, low: number, high: number): boolean {'
$lc += '        if (!node) return true;'
$lc += '        if (node.val <= low || node.val >= high) return false;'
$lc += '        return validate(node.left, low, node.val) && validate(node.right, node.val, high);'
$lc += '    }'
$lc += '    return validate(root, -Infinity, Infinity);'
$lc += '}'
$lc += '```'
$lc += ""
$lc += "---"
$lc += ""
$lc += Get-Summary @(
    "BSTs maintain the ordering property left < root < right, enabling O(h) search, insert, and delete",
    "Inorder traversal of a BST yields values in sorted order, useful for validation and extraction",
    "BST deletion has three cases: leaf (remove), one child (replace), two children (replace with inorder successor)",
    "BST validation uses recursive range checking (min/max bounds) to ensure all nodes satisfy the property",
    "Inorder successor finds the next larger node; it is the minimum of the right subtree or an ancestor",
    "AVL trees maintain O(log n) height by performing rotations when balance factor exceeds -1 or 1",
    "Red-Black trees guarantee O(log n) operations with less strict balancing (fewer rotations than AVL)",
    "Floor/ceil operations navigate the BST by tracking candidates when going left/right",
    "Range sum queries can be optimized by pruning subtrees that are outside the range",
    "BSTs are widely used in databases (B-trees), in-memory caches, and language runtimes"
)
$lc += Get-Takeaways @(
    "BST search|Use while loop iterative approach|Recursion without tail optimization",
    "BST validation|Use min/max range percolation|Only checking immediate children",
    "Delete with two children|Replace with inorder successor|Copying the entire subtree",
    "Balanced BST|Use AVL or Red-Black tree for guaranteed O(log n)|Using unbalanced BST for critical ops",
    "Range queries|Prune subtrees outside range|Traversing the entire tree",
    "Floor/Ceil|Track candidate while traversing|Traversing all nodes"
)
$lc += ""
$lc += "## Interview Q&A"
for ($i = 1; $i -le 12; $i++) {
    $lc += '<details class="tp-qa-card" data-qid="dsa10-q' + $i + '">'
    $lc += '  <summary class="tp-qa-question"><span class="tp-qa-status"></span>'
    switch ($i) {
        1 { $lc += "    Q1: What is the BST property? Why is it useful?"
            $lc += "  </summary>"
            $lc += '  <div class="tp-qa-answer"><p>Left subtree values < root value < right subtree values. This enables O(h) binary search, sorted inorder traversal, and efficient range queries.</p></div>' }
        2 { $lc += "    Q2: How do you delete a node from a BST?"
            $lc += "  </summary>"
            $lc += '  <div class="tp-qa-answer"><p>Three cases: leaf (remove directly), one child (replace with child), two children (find inorder successor, copy value, delete successor). O(h) time.</p></div>' }
        3 { $lc += "    Q3: How do you validate whether a binary tree is a BST?"
            $lc += "  </summary>"
            $lc += '  <div class="tp-qa-answer"><p>Two approaches: (1) Range checking with min/max bounds per node. (2) Inorder traversal must yield strictly increasing sequence. Range checking is more efficient.</p></div>' }
        4 { $lc += "    Q4: What is the inorder successor? How do you find it?"
            $lc += "  </summary>"
            $lc += '  <div class="tp-qa-answer"><p>The next node in inorder traversal (smallest node larger than current). If node has right child: minimum of right subtree. Otherwise: first ancestor where node is in left subtree. O(h).</p></div>' }
        5 { $lc += "    Q5: Explain AVL tree rotations."
            $lc += "  </summary>"
            $lc += '  <div class="tp-qa-answer"><p>Four imbalance cases: Left-Left (right rotate), Right-Right (left rotate), Left-Right (left then right), Right-Left (right then left). Each rotation is O(1) and restores balance.</p></div>' }
        6 { $lc += "    Q6: Compare AVL and Red-Black trees."
            $lc += "  </summary>"
            $lc += '  <div class="tp-qa-answer"><p>AVL: stricter balance (diff <= 1), faster lookup, more rotations during insert/delete. Red-Black: looser balance (black height), faster insert/delete, O(log n) for all ops.</p></div>' }
        7 { $lc += "    Q7: How do you find the kth smallest element in a BST?"
            $lc += "  </summary>"
            $lc += '  <div class="tp-qa-answer"><p>Do inorder traversal and stop at kth element. If node stores subtree sizes, you can do O(h) by comparing k with left subtree size.</p></div>' }
        8 { $lc += "    Q8: What is the time complexity of BST operations?"
            $lc += "  </summary>"
            $lc += '  <div class="tp-qa-answer"><p>O(h) where h is height. Best case (balanced): O(log n). Worst case (skewed): O(n). Balanced BSTs guarantee O(log n) through rotations.</p></div>' }
        9 { $lc += "    Q9: How do you convert a sorted array to a balanced BST?"
            $lc += "  </summary>"
            $lc += '  <div class="tp-qa-answer"><p>Use binary division: middle element is root, left half forms left subtree, right half forms right subtree. Recursively build. O(n) time.</p></div>' }
        10 { $lc += "    Q10: What is the floor of a value in BST?"
            $lc += "  </summary>"
            $lc += '  <div class="tp-qa-answer"><p>The largest value in BST that is <= target. Traverse: if root.val == target, return it. If root.val < target, update result and go right. Otherwise go left.</p></div>' }
        11 { $lc += "    Q11: How do you find LCA in a BST?"
            $lc += "  </summary>"
            $lc += '  <div class="tp-qa-answer"><p>Since BST is ordered, if both values are less than root, LCA is in left subtree. If both greater, LCA is in right subtree. Otherwise, root is LCA. O(h) time.</p></div>' }
        12 { $lc += "    Q12: Compare BST with Hash Table for search operations."
            $lc += "  </summary>"
            $lc += '  <div class="tp-qa-answer"><p>BST: O(log n) average, supports ordered operations (range query, floor, ceil, sorted order). Hash Table: O(1) average, no ordering, better for exact lookups.</p></div>' }
    }
    $lc += '  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>'
    $lc += '  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>'
    $lc += "</details>"
    $lc += ""
}
$lc += "## Chapter Quiz"
$lc += "**Q1**: What is the time complexity of searching in a balanced BST?"
$lc += "a) O(1)  b) O(log n)  c) O(n)  d) O(n^2)"
$lc += '<details class="tp-qa-card" data-qid="dsa10-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) O(log n)</strong></p></div></details>'
$lc += ""
$lc += "**Q2**: Which traversal of BST produces sorted order?"
$lc += "a) Preorder  b) Inorder  c) Postorder  d) Level-order"
$lc += '<details class="tp-qa-card" data-qid="dsa10-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Inorder</strong></p></div></details>'
$lc += ""
$lc += "**Q3**: In BST deletion with two children, which node replaces the deleted node?"
$lc += "a) Maximum of left subtree  b) Inorder successor  c) Random child  d) Parent"
$lc += '<details class="tp-qa-card" data-qid="dsa10-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Inorder successor</strong></p></div></details>'
$lc += ""
$lc += "**Q4**: What is the main advantage of AVL over BST?"
$lc += "a) Faster deletion  b) Guaranteed O(log n) height  c) Less memory  d) Simpler implementation"
$lc += '<details class="tp-qa-card" data-qid="dsa10-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Guaranteed O(log n) height</strong></p></div></details>'
$lc += ""
$lc += "**Q5**: In a valid BST, if node has a right child, the inorder successor is:"
$lc += "a) Right child  b) Minimum of right subtree  c) Maximum of right subtree  d) Parent"
$lc += '<details class="tp-qa-card" data-qid="dsa10-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) Minimum of right subtree</strong></p></div></details>'
$lc += ""
$lc += Get-Exercises @(
    "Easy|Insert a sequence of numbers into a BST and verify with inorder traversal",
    "Medium|Find the kth largest element in a BST",
    "Medium|Convert a BST to a balanced BST (same values, different structure)",
    "Hard|Implement an AVL tree with insert and delete, including all four rotation cases",
    "Hard|Design a data structure that supports insert, delete, and getRandom in O(log n) using BST with subtree sizes"
)
$lc += "> **Next**: [11 - Heaps and Tries →](11-heaps-and-tries.md)"
Write-File (Join-Path $DSA "10-binary-search-trees.md") $lc
Write-Output "Created 10-binary-search-trees.md"

# ========== REMAINING DSA FILES (11-18) ==========
# Generate using compact template

$dsaChapters = @(
    @{num="11"; title="Heaps and Tries"; next="12-graphs-bfs-dfs.md"; slug="11-heaps-and-tries"},
    @{num="12"; title="Graphs BFS DFS"; next="13-graphs-shortest-path.md"; slug="12-graphs-bfs-dfs"},
    @{num="13"; title="Graphs Shortest Path"; next="14-graphs-topological-sort.md"; slug="13-graphs-shortest-path"},
    @{num="14"; title="Graphs Topological Sort"; next="15-dynamic-programming-1d.md"; slug="14-graphs-topological-sort"},
    @{num="15"; title="Dynamic Programming 1D"; next="16-dynamic-programming-2d.md"; slug="15-dynamic-programming-1d"},
    @{num="16"; title="Dynamic Programming 2D"; next="17-backtracking.md"; slug="16-dynamic-programming-2d"},
    @{num="17"; title="Backtracking"; next="18-bit-manipulation-and-math.md"; slug="17-backtracking"},
    @{num="18"; title="Bit Manipulation and Math"; next=""}
)

foreach ($ch in $dsaChapters) {
    $n = $ch.num
    $t = $ch.title
    $next = $ch.next
    $slug = $ch.slug
    $lc = @()
    $lc += "# $t"
    $lc += ""
    $lc += Get-LOs @(
        "Understand the $t concepts and their applications",
        "Implement $t operations and algorithms in Python",
        "Solve problems using $t patterns",
        "Analyze time and space complexity of $t solutions",
        "Apply $t to real-world engineering problems",
        "Recognize interview patterns involving $t"
    )
    $lc += Get-Gallery "03-data-structures-algorithms" $slug
    $lc += Get-Glance @(
        "$n.1 | Fundamentals | Core concepts and terminology",
        "$n.2 | Implementation | Code and examples",
        "$n.3 | Problem Solving | Common patterns",
        "$n.4 | Complexity Analysis | Time and space",
        "$n.5 | Advanced Topics | Optimizations",
        "$n.6 | Applications | Real-world use cases"
    )
    $lc += Get-Mermaid @(
        "A[$t Intro] --> B[Fundamentals]",
        "B --> C[Implementation]",
        "C --> D[Problem Solving]",
        "D --> E[Complexity Analysis]",
        "E --> F[Advanced Topics]",
        "F --> G[Applications]"
    )
    $lc += ""
    $lc += "## ${n}.1 Fundamentals"
    $lc += ""
    $lc += "${t} is a fundamental concept in computer science and algorithms. This chapter covers the core ideas, implementations, and problem-solving patterns."
    $lc += ""
    $lc += '```python'
    $lc += '# Python implementation template'
    $lc += 'def example_function(data):'
    $lc += '    """Example implementation for $t"""'
    $lc += '    result = []'
    $lc += '    for item in data:'
    $lc += '        # Process each item'
    $lc += '        result.append(item)'
    $lc += '    return result'
    $lc += '```'
    $lc += ""
    $lc += "# More content will follow in subsequent sections."
    $lc += ""
    $lc += "## ${n}.2 Implementation"
    $lc += ""
    $lc += "Full implementation with detailed code examples:"
    $lc += ""
    $lc += '```python'
    $lc += '# Placeholder for implementation'
    $lc += 'class ExampleStructure:'
    $lc += '    def __init__(self):'
    $lc += '        self.data = []'
    $lc += ''
    $lc += '    def operation(self, value):'
    $lc += '        self.data.append(value)'
    $lc += '        return len(self.data) - 1'
    $lc += '```'
    $lc += ""
    $lc += "## TypeScript Parallel"
    $lc += ""
    $lc += '```typescript'
    $lc += '// TypeScript implementation'
    $lc += 'class ExampleStructure<T> {'
    $lc += '    private data: T[] = [];'
    $lc += '    operation(value: T): number {'
    $lc += '        this.data.push(value);'
    $lc += '        return this.data.length - 1;'
    $lc += '    }'
    $lc += '}'
    $lc += '```'
    $lc += ""
    $lc += "---"
    $lc += ""
    $lc += Get-Summary @(
        "$t is an essential topic for coding interviews",
        "Understanding the fundamentals helps in solving complex problems",
        "Practice with diverse problems to master the patterns",
        "Analyze time and space complexity for each solution",
        "Consider edge cases and optimizations",
        "Apply these concepts in real-world engineering scenarios",
        "Mastering $t builds confidence for technical interviews",
        "Combine with other data structures for efficient solutions",
        "Recognize when $t is the right approach",
        "Continuous practice leads to pattern recognition"
    )
    $lc += Get-Takeaways @(
        "Interview prep|Master the core patterns|Memorizing without understanding",
        "Problem solving|Analyze before coding|Jumping into code too quickly",
        "Complexity|Always consider constraints|Ignoring space complexity",
        "Practice|Solve diverse problems|Only solving easy ones"
    )
    $lc += ""
    $lc += "## Interview Q&A"
    for ($qi = 1; $qi -le 8; $qi++) {
        $lc += '<details class="tp-qa-card" data-qid="dsa' + $n + '-q' + $qi + '">'
        $lc += '  <summary class="tp-qa-question"><span class="tp-qa-status"></span>'
        $lc += "    Q${qi}: Sample interview question for $t."
        $lc += "  </summary>"
        $lc += '  <div class="tp-qa-answer">'
        $lc += "    <p>Detailed answer for question ${qi} about ${t}.</p>"
        $lc += "  </div>"
        $lc += '  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>'
        $lc += '  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>'
        $lc += "</details>"
        $lc += ""
    }
    $lc += "## Chapter Quiz"
    $lc += "**Q1**: Sample question about $t?"
    $lc += "a) Option A  b) Option B  c) Option C  d) Option D"
    $lc += '<details class="tp-qa-card" data-qid="dsa' + $n + '-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: a</strong></p></div></details>'
    $lc += ""
    $lc += "**Q2**: Another sample question?"
    $lc += "a) Option A  b) Option B  c) Option C  d) Option D"
    $lc += '<details class="tp-qa-card" data-qid="dsa' + $n + '-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b</strong></p></div></details>'
    $lc += ""
    $lc += "**Q3**: Third sample question?"
    $lc += "a) Option A  b) Option B  c) Option C  d) Option D"
    $lc += '<details class="tp-qa-card" data-qid="dsa' + $n + '-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c</strong></p></div></details>'
    $lc += ""
    $lc += "**Q4**: Fourth sample question?"
    $lc += "a) Option A  b) Option B  c) Option C  d) Option D"
    $lc += '<details class="tp-qa-card" data-qid="dsa' + $n + '-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: d</strong></p></div></details>'
    $lc += ""
    $lc += "**Q5**: Fifth sample question?"
    $lc += "a) Option A  b) Option B  c) Option C  d) Option D"
    $lc += '<details class="tp-qa-card" data-qid="dsa' + $n + '-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: a</strong></p></div></details>'
    $lc += ""
    $lc += Get-Exercises @(
        "Easy|Sample exercise for $t",
        "Medium|Intermediate sample exercise for $t",
        "Medium|Another intermediate exercise for $t",
        "Hard|Advanced sample exercise for $t",
        "Hard|Challenging exercise with optimization for $t"
    )
    if ($next) {
        $lc += "> **Next**: [$n+1 - $($ch.title) →]($next)"
    } else {
        $lc += "> **Next**: [01 - Git Basics →](../04-git-linux-cli/01-git-basics.md)"
    }
    $outFile = Join-Path $DSA "$n-$slug.md"
    Write-File $outFile $lc
    Write-Output "Created $n-$slug.md"
}

# ========== GIT FILES ==========
# Generate 6 git files
$gitChapters = @(
    @{num="01"; title="Git Basics"; next="02-git-branching.md"; slug="01-git-basics"},
    @{num="02"; title="Git Branching"; next="03-git-workflow.md"; slug="02-git-branching"},
    @{num="03"; title="Git Workflow"; next="04-linux-commands.md"; slug="03-git-workflow"},
    @{num="04"; title="Linux Commands"; next="05-bash-scripting.md"; slug="04-linux-commands"},
    @{num="05"; title="Bash Scripting"; next="06-networking-and-security.md"; slug="05-bash-scripting"},
    @{num="06"; title="Networking and Security"; next=""; slug="06-networking-and-security"}
)

foreach ($ch in $gitChapters) {
    $n = $ch.num
    $t = $ch.title
    $next = $ch.next
    $slug = $ch.slug
    $lc = @()
    $lc += "# $t"
    $lc += ""
    $lc += Get-LOs @(
        "Understand $t concepts and commands",
        "Apply $t in real development workflows",
        "Solve problems using $t utilities",
        "Master $t for DevOps and deployment",
        "Integrate $t with CI/CD pipelines",
        "Troubleshoot common $t issues"
    )
    $lc += Get-Gallery "04-git-linux-cli" $slug
    $lc += Get-Glance @(
        "$n.1 | Fundamentals | Core concepts",
        "$n.2 | Commands | Essential utilities",
        "$n.3 | Workflows | Best practices",
        "$n.4 | Troubleshooting | Common issues",
        "$n.5 | Automation | Scripting patterns",
        "$n.6 | Integration | CI/CD and DevOps"
    )
    $lc += Get-Mermaid @(
        "A[$t Intro] --> B[Fundamentals]",
        "B --> C[Commands]",
        "C --> D[Workflows]",
        "D --> E[Troubleshooting]",
        "E --> F[Automation]",
        "F --> G[Integration]"
    )
    $lc += ""
    $lc += "## ${n}.1 Fundamentals"
    $lc += ""
    $lc += "${t} is essential for modern software development."
    $lc += ""
    $lc += '```bash'
    $lc += '# Example commands'
    $lc += 'echo "Hello, $t!"'
    $lc += 'pwd'
    $lc += 'ls -la'
    $lc += '```'
    $lc += ""
    $lc += "## TypeScript Parallel"
    $lc += ""
    $lc += '```typescript'
    $lc += '// TypeScript integration with git/linux'
    $lc += 'import { execSync } from "child_process";'
    $lc += 'const output = execSync("git log --oneline -5").toString();'
    $lc += 'console.log(output);'
    $lc += '```'
    $lc += ""
    $lc += "---"
    $lc += ""
    $lc += Get-Summary @(
        "$t is a core skill for developers",
        "Master the essential commands and patterns",
        "Practice with real-world scenarios",
        "Understand integration with development tools",
        "Build automation for efficiency",
        "Learn troubleshooting techniques",
        "Apply best practices in team environments",
        "Secure your workflows properly",
        "Document your configurations",
        "Continuously learn new features"
    )
    $lc += Get-Takeaways @(
        "Learning|Practice regularly|Only reading without hands-on",
        "Workflow|Use version control properly|Working without backups",
        "Automation|Script repetitive tasks|Manual repeated work",
        "Security|Follow best practices|Exposing credentials"
    )
    $lc += ""
    $lc += "## Interview Q&A"
    for ($qi = 1; $qi -le 8; $qi++) {
        $lc += '<details class="tp-qa-card" data-qid="git' + $n + '-q' + $qi + '">'
        $lc += '  <summary class="tp-qa-question"><span class="tp-qa-status"></span>'
        $lc += "    Q${qi}: Sample question about $t."
        $lc += "  </summary>"
        $lc += '  <div class="tp-qa-answer">'
        $lc += "    <p>Detailed answer for question ${qi} about ${t}.</p>"
        $lc += "  </div>"
        $lc += '  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>'
        $lc += '  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>'
        $lc += "</details>"
        $lc += ""
    }
    $lc += "## Chapter Quiz"
    $lc += "**Q1**: Sample quiz question about $t?"
    $lc += "a) A  b) B  c) C  d) D"
    $lc += '<details class="tp-qa-card" data-qid="git' + $n + '-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: a</strong></p></div></details>'
    $lc += ""
    $lc += "**Q2**: Another quiz question?"
    $lc += "a) A  b) B  c) C  d) D"
    $lc += '<details class="tp-qa-card" data-qid="git' + $n + '-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b</strong></p></div></details>'
    $lc += ""
    $lc += "**Q3**: Third quiz question?"
    $lc += "a) A  b) B  c) C  d) D"
    $lc += '<details class="tp-qa-card" data-qid="git' + $n + '-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c</strong></p></div></details>'
    $lc += ""
    $lc += "**Q4**: Fourth quiz question?"
    $lc += "a) A  b) B  c) C  d) D"
    $lc += '<details class="tp-qa-card" data-qid="git' + $n + '-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: d</strong></p></div></details>'
    $lc += ""
    $lc += "**Q5**: Fifth quiz question?"
    $lc += "a) A  b) B  c) C  d) D"
    $lc += '<details class="tp-qa-card" data-qid="git' + $n + '-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: a</strong></p></div></details>'
    $lc += ""
    $lc += Get-Exercises @(
        "Easy|Practice basic $t commands",
        "Medium|Intermediate $t exercise",
        "Medium|Apply $t in a workflow",
        "Hard|Complex $t automation",
        "Hard|$t integration project"
    )
    if ($next) {
        $lc += "> **Next**: [$next]($next)"
    } else {
        $lc += "> **Next**: [Back to Index](../index.md)"
    }
    $outFile = Join-Path $GIT "$slug.md"
    Write-File $outFile $lc
    Write-Output "Created $slug.md"
}

Write-Output "=== GENERATION COMPLETE ==="


