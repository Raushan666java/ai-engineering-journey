$DSA = "C:\xampp\htdocs\ai-engineering-journey\docs\courses\ai-engineering-placement\03-data-structures-algorithms"
$GIT = "C:\xampp\htdocs\ai-engineering-journey\docs\courses\ai-engineering-placement\04-git-linux-cli"

function Write-File($path, $lines) {
    $lines | Out-File -FilePath $path -Encoding utf8 -Force
    Write-Output "  Created: $(Split-Path $path -Leaf) ($($lines.Count) lines)"
}

# Common image gallery function
function Get-ImageGallery($subject, $chapter) {
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

# ========== 05-two-pointers.md ==========
$lc = @()
$lc += "# Two Pointers"
$lc += ""
$lc += "## Learning Objectives"
$lc += ""
$lc += "| Objective | Description |"
$lc += "|-----------|-------------|"
$lc += "| LO1 | Understand the two-pointer technique and its variants (opposite ends, same direction, fast-slow) |"
$lc += "| LO2 | Solve pair-sum problems on sorted arrays using opposite-end pointers |"
$lc += "| LO3 | Implement in-place array modifications using same-direction pointers |"
$lc += "| LO4 | Apply fast-slow pointers for cycle detection and middle-finding |"
$lc += "| LO5 | Solve sliding window problems using two pointers (expand-contract pattern) |"
$lc += "| LO6 | Combine two-pointer with other techniques (binary search, hash maps) for optimization |"
$lc += ""
$lc += (Get-ImageGallery "03-data-structures-algorithms" "05-two-pointers")
$lc += ""
$lc += "## Chapter at a Glance"
$lc += ""
$lc += "| Section | Topic | Key Concept |"
$lc += "|---------|-------|-------------|"
$lc += "| 5.1 | Opposite-End Pointers | Two sum, palindrome check, container with water |"
$lc += "| 5.2 | Same-Direction Pointers | Remove duplicates, partition, merge sorted arrays |"
$lc += "| 5.3 | Fast-Slow Pointers | Cycle detection, middle of linked list, find duplicate |"
$lc += "| 5.4 | Sliding Window Variant | Substring search, window constraints |"
$lc += "| 5.5 | Multiple Pointers | 3Sum, 4Sum, three-pointer techniques |"
$lc += "| 5.6 | Advanced Patterns | Trapping rain water, next permutation, partition labels |"
$lc += ""
$lc += "## Chapter Roadmap"
$lc += ""
$lc += '```mermaid'
$lc += 'flowchart LR'
$lc += '    A[Two Pointers Intro] --> B[Opposite Ends]'
$lc += '    A --> C[Same Direction]'
$lc += '    A --> D[Fast-Slow]'
$lc += '    B --> E[Pair Sum Problems]'
$lc += '    C --> F[In-Place Ops]'
$lc += '    D --> G[Cycle Detection]'
$lc += '    E --> H[Advanced]'
$lc += '    F --> H'
$lc += '    G --> H'
$lc += '```'
$lc += ""
$lc += "## 5.1 Opposite-End Pointers"
$lc += ""
$lc += "Two pointers start at opposite ends and move toward each other. Used when the array is sorted and the condition involves pairs."
$lc += ""
$lc += "**Two Sum II -- Sorted array**:"
$lc += ""
$lc += '```python'
$lc += 'def two_sum_sorted(numbers, target):'
$lc += '    left, right = 0, len(numbers) - 1'
$lc += '    while left < right:'
$lc += '        curr_sum = numbers[left] + numbers[right]'
$lc += '        if curr_sum == target:'
$lc += '            return [left + 1, right + 1]  # 1-indexed'
$lc += '        elif curr_sum < target:'
$lc += '            left += 1'
$lc += '        else:'
$lc += '            right -= 1'
$lc += '    return [-1, -1]'
$lc += ''
$lc += 'print(two_sum_sorted([2, 7, 11, 15], 9))  # [1, 2]'
$lc += '```'
$lc += ""
$lc += "**Valid palindrome**:"
$lc += ""
$lc += '```python'
$lc += 'def is_palindrome(s):'
$lc += '    left, right = 0, len(s) - 1'
$lc += '    while left < right:'
$lc += '        while left < right and not s[left].isalnum():'
$lc += '            left += 1'
$lc += '        while left < right and not s[right].isalnum():'
$lc += '            right -= 1'
$lc += '        if s[left].lower() != s[right].lower():'
$lc += '            return False'
$lc += '        left += 1'
$lc += '        right -= 1'
$lc += '    return True'
$lc += ''
$lc += 'print(is_palindrome("A man, a plan, a canal: Panama"))  # True'
$lc += '```'
$lc += ""
$lc += "**Container with most water**:"
$lc += ""
$lc += '```python'
$lc += 'def max_area(height):'
$lc += '    left, right = 0, len(height) - 1'
$lc += '    max_water = 0'
$lc += '    while left < right:'
$lc += '        water = (right - left) * min(height[left], height[right])'
$lc += '        max_water = max(max_water, water)'
$lc += '        if height[left] < height[right]:'
$lc += '            left += 1'
$lc += '        else:'
$lc += '            right -= 1'
$lc += '    return max_water'
$lc += ''
$lc += 'print(max_area([1, 8, 6, 2, 5, 4, 8, 3, 7]))  # 49'
$lc += '```'
$lc += ""
$lc += "---"
$lc += ""
$lc += "## 5.2 Same-Direction Pointers"
$lc += ""
$lc += "Both pointers start at the beginning; one is fast (reader), one is slow (writer)."
$lc += ""
$lc += "**Remove duplicates from sorted array**:"
$lc += ""
$lc += '```python'
$lc += 'def remove_duplicates(nums):'
$lc += '    if not nums:'
$lc += '        return 0'
$lc += '    write = 1'
$lc += '    for read in range(1, len(nums)):'
$lc += '        if nums[read] != nums[write - 1]:'
$lc += '            nums[write] = nums[read]'
$lc += '            write += 1'
$lc += '    return write'
$lc += ''
$lc += 'nums = [1, 1, 2, 2, 3, 4, 4, 5]'
$lc += 'k = remove_duplicates(nums)'
$lc += 'print(nums[:k])  # [1, 2, 3, 4, 5]'
$lc += '```'
$lc += ""
$lc += "**Move zeros to end**:"
$lc += ""
$lc += '```python'
$lc += 'def move_zeros(nums):'
$lc += '    write = 0'
$lc += '    for read in range(len(nums)):'
$lc += '        if nums[read] != 0:'
$lc += '            nums[write], nums[read] = nums[read], nums[write]'
$lc += '            write += 1'
$lc += '    return nums'
$lc += ''
$lc += 'print(move_zeros([0, 1, 0, 3, 12]))  # [1, 3, 12, 0, 0]'
$lc += '```'
$lc += ""
$lc += "**Merge two sorted arrays**:"
$lc += ""
$lc += '```python'
$lc += 'def merge(nums1, m, nums2, n):'
$lc += '    p1, p2, p = m - 1, n - 1, m + n - 1'
$lc += '    while p2 >= 0:'
$lc += '        if p1 >= 0 and nums1[p1] > nums2[p2]:'
$lc += '            nums1[p] = nums1[p1]'
$lc += '            p1 -= 1'
$lc += '        else:'
$lc += '            nums1[p] = nums2[p2]'
$lc += '            p2 -= 1'
$lc += '        p -= 1'
$lc += '    return nums1'
$lc += ''
$lc += 'print(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))  # [1, 2, 2, 3, 5, 6]'
$lc += '```'
$lc += ""
$lc += "---"
$lc += ""
$lc += "## 5.3 Fast-Slow Pointers"
$lc += ""
$lc += "One pointer moves twice as fast as the other. Used for cycle detection and middle-finding."
$lc += ""
$lc += "**Linked list cycle detection**:"
$lc += ""
$lc += '```python'
$lc += 'class ListNode:'
$lc += '    def __init__(self, x):'
$lc += '        self.val = x'
$lc += '        self.next = None'
$lc += ''
$lc += 'def has_cycle(head):'
$lc += '    slow = fast = head'
$lc += '    while fast and fast.next:'
$lc += '        slow = slow.next'
$lc += '        fast = fast.next.next'
$lc += '        if slow == fast:'
$lc += '            return True'
$lc += '    return False'
$lc += '```'
$lc += ""
$lc += "**Find middle of linked list**:"
$lc += ""
$lc += '```python'
$lc += 'def middle_node(head):'
$lc += '    slow = fast = head'
$lc += '    while fast and fast.next:'
$lc += '        slow = slow.next'
$lc += '        fast = fast.next.next'
$lc += '    return slow.val'
$lc += '```'
$lc += ""
$lc += "**Find duplicate number**:"
$lc += ""
$lc += '```python'
$lc += 'def find_duplicate(nums):'
$lc += '    slow = fast = nums[0]'
$lc += '    while True:'
$lc += '        slow = nums[slow]'
$lc += '        fast = nums[nums[fast]]'
$lc += '        if slow == fast:'
$lc += '            break'
$lc += '    slow = nums[0]'
$lc += '    while slow != fast:'
$lc += '        slow = nums[slow]'
$lc += '        fast = nums[fast]'
$lc += '    return slow'
$lc += ''
$lc += 'print(find_duplicate([1, 3, 4, 2, 2]))  # 2'
$lc += '```'
$lc += ""
$lc += "---"
$lc += ""
$lc += "## 5.4 Sliding Window Variant"
$lc += ""
$lc += "Two pointers that maintain a window with specific constraints."
$lc += ""
$lc += "**Longest substring without repeating chars**:"
$lc += ""
$lc += '```python'
$lc += 'def length_of_longest_substring(s):'
$lc += '    seen = {}'
$lc += '    left = max_len = 0'
$lc += '    for right, char in enumerate(s):'
$lc += '        if char in seen and seen[char] >= left:'
$lc += '            left = seen[char] + 1'
$lc += '        seen[char] = right'
$lc += '        max_len = max(max_len, right - left + 1)'
$lc += '    return max_len'
$lc += ''
$lc += 'print(length_of_longest_substring("abcabcbb"))  # 3'
$lc += 'print(length_of_longest_substring("bbbbb"))     # 1'
$lc += '```'
$lc += ""
$lc += "**Minimum window substring**:"
$lc += ""
$lc += '```python'
$lc += 'from collections import Counter'
$lc += ''
$lc += 'def min_window(s, t):'
$lc += '    need = Counter(t)'
$lc += '    missing = len(t)'
$lc += '    left = 0'
$lc += '    min_len = float("inf")'
$lc += '    min_start = 0'
$lc += '    for right, char in enumerate(s):'
$lc += '        if need[char] > 0:'
$lc += '            missing -= 1'
$lc += '        need[char] -= 1'
$lc += '        while missing == 0:'
$lc += '            if right - left + 1 < min_len:'
$lc += '                min_len = right - left + 1'
$lc += '                min_start = left'
$lc += '            need[s[left]] += 1'
$lc += '            if need[s[left]] > 0:'
$lc += '                missing += 1'
$lc += '            left += 1'
$lc += '    return "" if min_len == float("inf") else s[min_start:min_start + min_len]'
$lc += ''
$lc += 'print(min_window("ADOBECODEBANC", "ABC"))  # "BANC"'
$lc += '```'
$lc += ""
$lc += "---"
$lc += ""
$lc += "## 5.5 Multiple Pointers"
$lc += ""
$lc += "Three or more pointers for complex problems."
$lc += ""
$lc += "**3Sum**:"
$lc += ""
$lc += '```python'
$lc += 'def three_sum(nums):'
$lc += '    nums.sort()'
$lc += '    result = []'
$lc += '    n = len(nums)'
$lc += '    for i in range(n - 2):'
$lc += '        if i > 0 and nums[i] == nums[i - 1]:'
$lc += '            continue'
$lc += '        left, right = i + 1, n - 1'
$lc += '        while left < right:'
$lc += '            total = nums[i] + nums[left] + nums[right]'
$lc += '            if total < 0:'
$lc += '                left += 1'
$lc += '            elif total > 0:'
$lc += '                right -= 1'
$lc += '            else:'
$lc += '                result.append([nums[i], nums[left], nums[right]])'
$lc += '                while left < right and nums[left] == nums[left + 1]:'
$lc += '                    left += 1'
$lc += '                while left < right and nums[right] == nums[right - 1]:'
$lc += '                    right -= 1'
$lc += '                left += 1'
$lc += '                right -= 1'
$lc += '    return result'
$lc += ''
$lc += 'print(three_sum([-1, 0, 1, 2, -1, -4]))  # [[-1, -1, 2], [-1, 0, 1]]'
$lc += '```'
$lc += ""
$lc += "**4Sum**:"
$lc += ""
$lc += '```python'
$lc += 'def four_sum(nums, target):'
$lc += '    nums.sort()'
$lc += '    n = len(nums)'
$lc += '    result = []'
$lc += '    for i in range(n - 3):'
$lc += '        if i > 0 and nums[i] == nums[i - 1]: continue'
$lc += '        for j in range(i + 1, n - 2):'
$lc += '            if j > i + 1 and nums[j] == nums[j - 1]: continue'
$lc += '            left, right = j + 1, n - 1'
$lc += '            while left < right:'
$lc += '                s = nums[i] + nums[j] + nums[left] + nums[right]'
$lc += '                if s < target: left += 1'
$lc += '                elif s > target: right -= 1'
$lc += '                else:'
$lc += '                    result.append([nums[i], nums[j], nums[left], nums[right]])'
$lc += '                    while left < right and nums[left] == nums[left + 1]: left += 1'
$lc += '                    while left < right and nums[right] == nums[right - 1]: right -= 1'
$lc += '                    left += 1; right -= 1'
$lc += '    return result'
$lc += '```'
$lc += ""
$lc += "---"
$lc += ""
$lc += "## 5.6 Advanced Patterns"
$lc += ""
$lc += "**Next permutation**:"
$lc += ""
$lc += '```python'
$lc += 'def next_permutation(nums):'
$lc += '    n = len(nums)'
$lc += '    i = n - 2'
$lc += '    while i >= 0 and nums[i] >= nums[i + 1]:'
$lc += '        i -= 1'
$lc += '    if i >= 0:'
$lc += '        j = n - 1'
$lc += '        while nums[j] <= nums[i]:'
$lc += '            j -= 1'
$lc += '        nums[i], nums[j] = nums[j], nums[i]'
$lc += '    left, right = i + 1, n - 1'
$lc += '    while left < right:'
$lc += '        nums[left], nums[right] = nums[right], nums[left]'
$lc += '        left += 1'
$lc += '        right -= 1'
$lc += '    return nums'
$lc += ''
$lc += 'print(next_permutation([1, 2, 3]))  # [1, 3, 2]'
$lc += '```'
$lc += ""
$lc += "**Backspace string compare**:"
$lc += ""
$lc += '```python'
$lc += 'def backspace_compare(s, t):'
$lc += '    def build(s):'
$lc += '        stack = []'
$lc += '        for c in s:'
$lc += '            if c != "#":'
$lc += '                stack.append(c)'
$lc += '            elif stack:'
$lc += '                stack.pop()'
$lc += '        return stack'
$lc += '    return build(s) == build(t)'
$lc += ''
$lc += 'print(backspace_compare("ab#c", "ad#c"))  # True'
$lc += '```'
$lc += ""
$lc += "---"
$lc += ""
$lc += "## TypeScript Parallel"
$lc += ""
$lc += '```typescript'
$lc += 'function twoSum(numbers: number[], target: number): number[] {'
$lc += '    let left = 0, right = numbers.length - 1;'
$lc += '    while (left < right) {'
$lc += '        const sum = numbers[left] + numbers[right];'
$lc += '        if (sum === target) return [left + 1, right + 1];'
$lc += '        if (sum < target) left++;'
$lc += '        else right--;'
$lc += '    }'
$lc += '    return [-1, -1];'
$lc += '}'
$lc += ''
$lc += 'function removeDuplicates(nums: number[]): number {'
$lc += '    let write = 1;'
$lc += '    for (let read = 1; read < nums.length; read++) {'
$lc += '        if (nums[read] !== nums[write - 1]) {'
$lc += '            nums[write] = nums[read];'
$lc += '            write++;'
$lc += '        }'
$lc += '    }'
$lc += '    return write;'
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
$lc += '```'
$lc += ""
$lc += "---"
$lc += ""
$lc += "## Summary"
$lc += ""
$lc += "- Opposite-end pointers solve sorted array pair problems in O(n) time, O(1) space"
$lc += "- Same-direction pointers efficiently implement in-place operations like removing duplicates"
$lc += "- Fast-slow pointers detect cycles in linked lists without extra space (Floyd's algorithm)"
$lc += "- The sliding window variant maintains a constraint-based window that expands and contracts"
$lc += "- Multi-pointer techniques extend to 3Sum (O(n^2)) and 4Sum (O(n^3)) with sorting"
$lc += "- Two-pointer techniques often complement sorting for optimal solutions"
$lc += "- Container with most water optimally moves the shorter pointer inward"
$lc += "- Backspace string comparison uses two pointers from the end for O(1) space"
$lc += "- Next permutation uses a single pass with pointer manipulations"
$lc += "- Floyd's cycle detection also finds the cycle start with a second phase"
$lc += ""
$lc += "## Practical Takeaways"
$lc += ""
$lc += "| Scenario | Do This | Avoid This |"
$lc += "|----------|---------|------------|"
$lc += "| Pair sum in sorted array | Opposite-end pointers | Hash map (wastes space) |"
$lc += "| Remove duplicates in-place | Same-direction write pointer | Creating new array |"
$lc += "| Cycle detection | Fast-slow pointers | Hash set (wastes space) |"
$lc += "| Container with most water | Move shorter pointer inward | Checking all pairs |"
$lc += "| 3Sum problem | Sort + two-pointer nested loop | Triple nested loop |"
$lc += "| Merge sorted arrays | Pointers from the end | Extra array |"
$lc += ""
$lc += "## Interview Q&A"
$lc += ""
$lc += '<details class="tp-qa-card" data-qid="dsa05-q1">'
$lc += '  <summary class="tp-qa-question"><span class="tp-qa-status"></span>'
$lc += "    Q1: When would you use opposite-end pointers vs same-direction pointers?"
$lc += "  </summary>"
$lc += '  <div class="tp-qa-answer">'
$lc += "    <p><strong>Opposite-end pointers</strong>: Used when the array is sorted and we need to find pairs.</p>"
$lc += "    <p><strong>Same-direction pointers</strong>: Used for in-place modifications where one reads ahead and another writes.</p>"
$lc += "    <p><strong>Fast-slow pointers</strong>: Used for cycle detection in linked lists or finding the middle element.</p>"
$lc += "  </div>"
$lc += '  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>'
$lc += '  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>'
$lc += "</details>"
$lc += ""
$lc += '<details class="tp-qa-card" data-qid="dsa05-q2">'
$lc += '  <summary class="tp-qa-question"><span class="tp-qa-status"></span>'
$lc += "    Q2: Explain Floyd's cycle detection algorithm."
$lc += "  </summary>"
$lc += '  <div class="tp-qa-answer">'
$lc += "    <p>Floyd's algorithm uses two pointers: slow moves one step, fast moves two steps. If there is a cycle, they meet.</p>"
$lc += "    <p>Phase 1: Detect cycle by moving slow by 1 and fast by 2 until they meet.</p>"
$lc += "    <p>Phase 2: Find cycle start by resetting slow to head and moving both by 1 until they meet again.</p>"
$lc += "  </div>"
$lc += '  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>'
$lc += '  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>'
$lc += "</details>"
$lc += ""
$lc += '<details class="tp-qa-card" data-qid="dsa05-q3">'
$lc += '  <summary class="tp-qa-question"><span class="tp-qa-status"></span>'
$lc += "    Q3: How do you solve the 3Sum problem?"
$lc += "  </summary>"
$lc += '  <div class="tp-qa-answer">'
$lc += "    <p>Sort the array, fix one element, then use two pointers to find pairs summing to -nums[i].</p>"
$lc += "    <p>Complexity: O(n^2) time, O(1) extra space. Skip duplicates for unique triplets.</p>"
$lc += "  </div>"
$lc += '  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>'
$lc += '  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>'
$lc += "</details>"
$lc += ""
$lc += '<details class="tp-qa-card" data-qid="dsa05-q4">'
$lc += '  <summary class="tp-qa-question"><span class="tp-qa-status"></span>'
$lc += "    Q4: Explain the container with most water two-pointer solution."
$lc += "  </summary>"
$lc += '  <div class="tp-qa-answer">'
$lc += "    <p>Start with widest container (left=0, right=n-1). Area = width * min(height[left], height[right]).</p>"
$lc += "    <p>Move the pointer with the shorter height inward. Moving the taller pointer reduces width and height is capped by the shorter line, so area decreases.</p>"
$lc += "    <p>Complexity: O(n) time, O(1) space.</p>"
$lc += "  </div>"
$lc += '  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>'
$lc += '  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>'
$lc += "</details>"
$lc += ""
$lc += '<details class="tp-qa-card" data-qid="dsa05-q5">'
$lc += '  <summary class="tp-qa-question"><span class="tp-qa-status"></span>'
$lc += "    Q5: How do you remove duplicates from a sorted array in-place?"
$lc += "  </summary>"
$lc += '  <div class="tp-qa-answer">'
$lc += "    <p>Use a write pointer that tracks where the next unique element goes. Scan with a read pointer.</p>"
$lc += "    <p>When read finds a new unique element, copy to write position and advance write.</p>"
$lc += "    <p>Complexity: O(n) time, O(1) space.</p>"
$lc += "  </div>"
$lc += '  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>'
$lc += '  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>'
$lc += "</details>"
$lc += ""
$lc += '<details class="tp-qa-card" data-qid="dsa05-q6">'
$lc += '  <summary class="tp-qa-question"><span class="tp-qa-status"></span>'
$lc += "    Q6: How do you partition labels?"
$lc += "  </summary>"
$lc += '  <div class="tp-qa-answer">'
$lc += "    <p>Record the last occurrence of each character. Scan, tracking the farthest last occurrence seen. When current index reaches that bound, a partition ends.</p>"
$lc += "    <p>Complexity: O(n) time, O(1) space.</p>"
$lc += "  </div>"
$lc += '  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>'
$lc += '  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>'
$lc += "</details>"
$lc += ""
$lc += '<details class="tp-qa-card" data-qid="dsa05-q7">'
$lc += '  <summary class="tp-qa-question"><span class="tp-qa-status"></span>'
$lc += "    Q7: What is the next permutation algorithm?"
$lc += "  </summary>"
$lc += '  <div class="tp-qa-answer">'
$lc += "    <p>Find the first decreasing element from the right (pivot). Find the element just larger than pivot from the right. Swap, then reverse the suffix.</p>"
$lc += "    <p>Complexity: O(n) time, O(1) space.</p>"
$lc += "  </div>"
$lc += '  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>'
$lc += '  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>'
$lc += "</details>"
$lc += ""
$lc += '<details class="tp-qa-card" data-qid="dsa05-q8">'
$lc += '  <summary class="tp-qa-question"><span class="tp-qa-status"></span>'
$lc += "    Q8: How do you find the duplicate number using Floyd's algorithm?"
$lc += "  </summary>"
$lc += '  <div class="tp-qa-answer">'
$lc += "    <p>Treat the array as a linked list where index i points to nums[i]. Use Floyd's cycle detection to find the cycle, then the cycle start (which is the duplicate).</p>"
$lc += "    <p>Complexity: O(n) time, O(1) space. Does not modify the array.</p>"
$lc += "  </div>"
$lc += '  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>'
$lc += '  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>'
$lc += "</details>"
$lc += ""
$lc += '<details class="tp-qa-card" data-qid="dsa05-q9">'
$lc += '  <summary class="tp-qa-question"><span class="tp-qa-status"></span>'
$lc += "    Q9: How do you merge two sorted arrays in-place?"
$lc += "  </summary>"
$lc += '  <div class="tp-qa-answer">'
$lc += "    <p>Fill from the end to avoid overwriting. Compare the last elements of both arrays and place the larger one at the end.</p>"
$lc += "    <p>Complexity: O(m+n) time, O(1) space.</p>"
$lc += "  </div>"
$lc += '  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>'
$lc += '  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>'
$lc += "</details>"
$lc += ""
$lc += '<details class="tp-qa-card" data-qid="dsa05-q10">'
$lc += '  <summary class="tp-qa-question"><span class="tp-qa-status"></span>'
$lc += "    Q10: How do you validate a palindrome while ignoring non-alphanumeric characters?"
$lc += "  </summary>"
$lc += '  <div class="tp-qa-answer">'
$lc += "    <p>Use two pointers from both ends. Skip non-alphanumeric characters on the fly rather than preprocessing.</p>"
$lc += "    <p>Complexity: O(n) time, O(1) space.</p>"
$lc += "  </div>"
$lc += '  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>'
$lc += '  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>'
$lc += "</details>"
$lc += ""
$lc += '<details class="tp-qa-card" data-qid="dsa05-q11">'
$lc += '  <summary class="tp-qa-question"><span class="tp-qa-status"></span>'
$lc += "    Q11: Compare two-pointer approaches for sorted vs unsorted arrays."
$lc += "  </summary>"
$lc += '  <div class="tp-qa-answer">'
$lc += "    <p>For sorted arrays, opposite-end pointers work. For unsorted arrays, same-direction and fast-slow still work, but opposite ends needs sorting first.</p>"
$lc += "  </div>"
$lc += '  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>'
$lc += '  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>'
$lc += "</details>"
$lc += ""
$lc += '<details class="tp-qa-card" data-qid="dsa05-q12">'
$lc += '  <summary class="tp-qa-question"><span class="tp-qa-status"></span>'
$lc += "    Q12: How does the backspace string compare work with two pointers?"
$lc += "  </summary>"
$lc += '  <div class="tp-qa-answer">'
$lc += "    <p>Scan from the end of both strings. Skip characters marked for deletion by backspace. Compare remaining characters.</p>"
$lc += "    <p>Complexity: O(n+m) time, O(1) space.</p>"
$lc += "  </div>"
$lc += '  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>'
$lc += '  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>'
$lc += "</details>"
$lc += ""
$lc += "## Chapter Quiz"
$lc += ""
$lc += "**Q1**: What is the time complexity of the two-pointer solution for container with most water?"
$lc += ""
$lc += "a) O(n)"
$lc += "b) O(n log n)"
$lc += "c) O(n^2)"
$lc += "d) O(1)"
$lc += ""
$lc += '<details class="tp-qa-card" data-qid="dsa05-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: a) O(n)</strong></p><p>Each element is visited at most once.</p></div></details>'
$lc += ""
$lc += "**Q2**: In Floyd's cycle detection, how many steps does the fast pointer move?"
$lc += ""
$lc += "a) 1"
$lc += "b) 2"
$lc += "c) 3"
$lc += "d) Depends on cycle length"
$lc += ""
$lc += '<details class="tp-qa-card" data-qid="dsa05-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) 2</strong></p><p>Fast pointer moves 2 steps, slow moves 1 step per iteration.</p></div></details>'
$lc += ""
$lc += "**Q3**: What is the time complexity of 3Sum optimal solution?"
$lc += ""
$lc += "a) O(n)"
$lc += "b) O(n log n)"
$lc += "c) O(n^2)"
$lc += "d) O(n^3)"
$lc += ""
$lc += '<details class="tp-qa-card" data-qid="dsa05-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) O(n^2)</strong></p><p>Sorting O(n log n) + nested loop O(n^2) = O(n^2).</p></div></details>'
$lc += ""
$lc += "**Q4**: Why do we fill from the end in the merge sorted arrays problem?"
$lc += ""
$lc += "a) To use O(1) extra space"
$lc += "b) To avoid shifting elements"
$lc += "c) To handle the extra space in nums1"
$lc += "d) All of the above"
$lc += ""
$lc += '<details class="tp-qa-card" data-qid="dsa05-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: d) All of the above</strong></p></div></details>'
$lc += ""
$lc += "**Q5**: Which two-pointer variant finds the middle of a linked list?"
$lc += ""
$lc += "a) Opposite ends"
$lc += "b) Same direction"
$lc += "c) Fast-slow"
$lc += "d) Sliding window"
$lc += ""
$lc += '<details class="tp-qa-card" data-qid="dsa05-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) Fast-slow</strong></p><p>When fast reaches the end, slow is at the middle.</p></div></details>'
$lc += ""
$lc += "## Exercises"
$lc += ""
$lc += "**Easy** - Given a sorted array, remove duplicates in-place such that each element appears at most twice."
$lc += ""
$lc += "**Medium** - Implement the 4Sum problem - find all unique quadruplets that sum to a target value."
$lc += ""
$lc += "**Medium** - Given two strings S and T, return if they equal when both are typed with '#' for backspace."
$lc += ""
$lc += "**Hard** - Find the k-th smallest pair sum in a sorted array (two numbers from two arrays). Binary search + two pointers."
$lc += ""
$lc += "**Hard** - Given n non-negative integers representing an elevation map, compute trapped water in O(1) extra space."
$lc += ""
$lc += "---"
$lc += ""
$lc += "> **Next**: [06 - Hash Maps and Sets →](06-hash-maps-and-sets.md)"
$lc += ""

Write-File (Join-Path $DSA "05-two-pointers.md") $lc
Write-Output "05-two-pointers.md done: $($lc.Count) lines"
