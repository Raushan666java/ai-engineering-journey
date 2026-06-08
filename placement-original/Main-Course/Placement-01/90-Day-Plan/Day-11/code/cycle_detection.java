/**
 * Day 11: Cycle Detection - Floyd's Algorithm
 * 
 * Topics Covered:
 * - Floyd's Cycle Detection (Tortoise and Hare)
 * - Finding cycle start point
 * - Calculating cycle length
 * - Detecting intersection in linked lists
 * - Applications in linked lists and arrays
 */

import java.util.*;

public class cycle_detection {
    public static void main(String[] args) {
        System.out.println("=== Cycle Detection - Floyd's Algorithm ===\n");
        
        // ============ BASIC CYCLE DETECTION ============
        
        // 1. Detect cycle in linked list
        System.out.println("1. Detect Cycle in Linked List:");
        
        // Create list with cycle: 1 -> 2 -> 3 -> 4 -> 5
        //                                  ^         |
        //                                  |_________|
        ListNode head1 = createCyclicList(5, 2);  // Cycle starts at position 2
        
        boolean hasCycle1 = hasCycle(head1);
        System.out.println("List 1 has cycle: " + hasCycle1);
        
        // Create list without cycle
        ListNode head2 = createList(5);
        boolean hasCycle2 = hasCycle(head2);
        System.out.println("List 2 has cycle: " + hasCycle2);
        System.out.println();
        
        // 2. Find cycle start node
        System.out.println("2. Find Cycle Start:");
        
        ListNode cycleStart = detectCycle(head1);
        if (cycleStart != null) {
            System.out.println("Cycle starts at node: " + cycleStart.val);
        } else {
            System.out.println("No cycle detected");
        }
        
        cycleStart = detectCycle(head2);
        if (cycleStart != null) {
            System.out.println("Cycle starts at node: " + cycleStart.val);
        } else {
            System.out.println("No cycle in list 2");
        }
        System.out.println();
        
        // 3. Calculate cycle length
        System.out.println("3. Calculate Cycle Length:");
        
        int cycleLen = getCycleLength(head1);
        System.out.println("Cycle length in list 1: " + cycleLen);
        
        cycleLen = getCycleLength(head2);
        System.out.println("Cycle length in list 2: " + cycleLen);
        System.out.println();
        
        // ============ INTERSECTION PROBLEMS ============
        
        // 4. Find intersection of two linked lists
        System.out.println("4. Find Intersection of Two Lists:");
        
        // Create intersecting lists
        //   List A: 1 -> 2 -> 3 \
        //                         -> 6 -> 7 -> 8
        //   List B: 4 -> 5 -------/
        
        ListNode intersection = new ListNode(6);
        intersection.next = new ListNode(7);
        intersection.next.next = new ListNode(8);
        
        ListNode headA = new ListNode(1);
        headA.next = new ListNode(2);
        headA.next.next = new ListNode(3);
        headA.next.next.next = intersection;
        
        ListNode headB = new ListNode(4);
        headB.next = new ListNode(5);
        headB.next.next = intersection;
        
        ListNode intersectNode = getIntersectionNode(headA, headB);
        if (intersectNode != null) {
            System.out.println("Intersection at node: " + intersectNode.val);
        } else {
            System.out.println("No intersection");
        }
        System.out.println();
        
        // 5. Floyd's algorithm variations
        System.out.println("5. Floyd's Algorithm Step-by-Step:");
        
        ListNode cycleList = createCyclicList(6, 3);
        demonstrateFloyd(cycleList);
        System.out.println();
        
        // ============ ARRAY-BASED CYCLE DETECTION ============
        
        // 6. Find duplicate in array (1 to n)
        System.out.println("6. Find Duplicate in Array [1..n]:");
        
        int[] nums1 = {1, 3, 4, 2, 2};
        int duplicate = findDuplicate(nums1);
        System.out.println("Array: " + Arrays.toString(nums1));
        System.out.println("Duplicate: " + duplicate);
        System.out.println();
        
        // 7. Find all duplicates in array
        System.out.println("7. Find All Duplicates:");
        
        int[] nums2 = {4, 3, 2, 7, 8, 2, 3, 1};
        List<Integer> allDuplicates = findAllDuplicates(nums2);
        System.out.println("Array: " + Arrays.toString(nums2));
        System.out.println("All duplicates: " + allDuplicates);
        System.out.println();
        
        // ============ ADVANCED APPLICATIONS ============
        
        // 8. Happy Number
        System.out.println("8. Happy Number (Cycle Detection):");
        
        int n1 = 19;
        boolean isHappy1 = isHappy(n1);
        System.out.println(n1 + " is happy: " + isHappy1);
        
        int n2 = 2;
        boolean isHappy2 = isHappy(n2);
        System.out.println(n2 + " is happy: " + isHappy2);
        System.out.println();
        
        // 9. Circular Array Loop
        System.out.println("9. Circular Array Loop:");
        
        int[] arr1 = {2, -1, 1, 2, 2};
        boolean hasLoop1 = circularArrayLoop(arr1);
        System.out.println("Array: " + Arrays.toString(arr1));
        System.out.println("Has circular loop: " + hasLoop1);
        
        int[] arr2 = {-1, 2};
        boolean hasLoop2 = circularArrayLoop(arr2);
        System.out.println("Array: " + Arrays.toString(arr2));
        System.out.println("Has circular loop: " + hasLoop2);
        System.out.println();
        
        // 10. Remove cycle from linked list
        System.out.println("10. Remove Cycle from Linked List:");
        
        ListNode cycleHead = createCyclicList(5, 2);
        System.out.println("Before: Has cycle = " + hasCycle(cycleHead));
        
        removeCycle(cycleHead);
        System.out.println("After removing cycle: Has cycle = " + hasCycle(cycleHead));
        System.out.println();
        
        // ============ PERFORMANCE ANALYSIS ============
        
        // 11. Performance comparison
        System.out.println("11. Performance Comparison:");
        
        System.out.println("Floyd's Algorithm:");
        System.out.println("  Time Complexity: O(n)");
        System.out.println("  Space Complexity: O(1)");
        System.out.println("  Two pointers: slow (1 step), fast (2 steps)");
        
        System.out.println("\nHashSet Approach:");
        System.out.println("  Time Complexity: O(n)");
        System.out.println("  Space Complexity: O(n)");
        System.out.println("  Store visited nodes");
        System.out.println();
        
        // 12. Cycle detection using HashSet (alternative)
        System.out.println("12. HashSet Approach (Alternative):");
        
        ListNode testHead = createCyclicList(4, 1);
        boolean hasCycleHash = hasCycleHashSet(testHead);
        System.out.println("Cycle detected using HashSet: " + hasCycleHash);
        
        System.out.println("\n=== Cycle Detection Complete ===");
    }
    
    // ============ CORE ALGORITHMS ============
    
    // Floyd's Cycle Detection - Basic
    static boolean hasCycle(ListNode head) {
        if (head == null || head.next == null) {
            return false;
        }
        
        ListNode slow = head;
        ListNode fast = head;
        
        while (fast != null && fast.next != null) {
            slow = slow.next;           // Move 1 step
            fast = fast.next.next;      // Move 2 steps
            
            if (slow == fast) {         // Cycle detected
                return true;
            }
        }
        
        return false;
    }
    
    // Find cycle start node
    static ListNode detectCycle(ListNode head) {
        if (head == null || head.next == null) {
            return null;
        }
        
        // Phase 1: Detect cycle
        ListNode slow = head;
        ListNode fast = head;
        boolean hasCycle = false;
        
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            
            if (slow == fast) {
                hasCycle = true;
                break;
            }
        }
        
        if (!hasCycle) {
            return null;
        }
        
        // Phase 2: Find cycle start
        slow = head;
        while (slow != fast) {
            slow = slow.next;
            fast = fast.next;
        }
        
        return slow;
    }
    
    // Calculate cycle length
    static int getCycleLength(ListNode head) {
        if (head == null || head.next == null) {
            return 0;
        }
        
        // Detect cycle
        ListNode slow = head;
        ListNode fast = head;
        
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            
            if (slow == fast) {
                // Count nodes in cycle
                int length = 1;
                ListNode temp = slow.next;
                
                while (temp != slow) {
                    length++;
                    temp = temp.next;
                }
                
                return length;
            }
        }
        
        return 0;
    }
    
    // Find intersection node
    static ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        if (headA == null || headB == null) {
            return null;
        }
        
        ListNode a = headA;
        ListNode b = headB;
        
        // When a reaches end, redirect to headB
        // When b reaches end, redirect to headA
        // They will meet at intersection or null
        while (a != b) {
            a = (a == null) ? headB : a.next;
            b = (b == null) ? headA : b.next;
        }
        
        return a;
    }
    
    // Find duplicate in array [1..n]
    static int findDuplicate(int[] nums) {
        // Treat array as linked list
        // nums[i] is the next node
        
        int slow = nums[0];
        int fast = nums[0];
        
        // Phase 1: Detect cycle
        do {
            slow = nums[slow];
            fast = nums[nums[fast]];
        } while (slow != fast);
        
        // Phase 2: Find cycle start (duplicate)
        slow = nums[0];
        while (slow != fast) {
            slow = nums[slow];
            fast = nums[fast];
        }
        
        return slow;
    }
    
    // Happy number
    static boolean isHappy(int n) {
        int slow = n;
        int fast = n;
        
        do {
            slow = sumOfSquares(slow);
            fast = sumOfSquares(sumOfSquares(fast));
        } while (slow != fast);
        
        return slow == 1;
    }
    
    static int sumOfSquares(int n) {
        int sum = 0;
        while (n > 0) {
            int digit = n % 10;
            sum += digit * digit;
            n /= 10;
        }
        return sum;
    }
    
    // Circular array loop
    static boolean circularArrayLoop(int[] nums) {
        int n = nums.length;
        
        for (int i = 0; i < n; i++) {
            boolean isForward = nums[i] > 0;
            int slow = i, fast = i;
            
            do {
                slow = getNext(nums, slow);
                fast = getNext(nums, fast);
                if (fast != -1) {
                    fast = getNext(nums, fast);
                }
            } while (slow != -1 && fast != -1 && slow != fast);
            
            if (slow != -1 && slow == fast) {
                return true;
            }
        }
        
        return false;
    }
    
    static int getNext(int[] nums, int index) {
        int n = nums.length;
        int next = (index + nums[index]) % n;
        if (next < 0) next += n;
        
        // Check if direction changes
        if ((nums[index] > 0) != (nums[next] > 0)) {
            return -1;
        }
        
        // Check if single element loop
        if (next == index) {
            return -1;
        }
        
        return next;
    }
    
    // Remove cycle
    static void removeCycle(ListNode head) {
        ListNode cycleNode = detectCycle(head);
        
        if (cycleNode == null) {
            return;
        }
        
        // Find the last node in cycle
        ListNode temp = cycleNode;
        while (temp.next != cycleNode) {
            temp = temp.next;
        }
        
        temp.next = null;  // Break the cycle
    }
    
    // HashSet approach (alternative)
    static boolean hasCycleHashSet(ListNode head) {
        HashSet<ListNode> visited = new HashSet<>();
        
        ListNode curr = head;
        while (curr != null) {
            if (visited.contains(curr)) {
                return true;
            }
            visited.add(curr);
            curr = curr.next;
        }
        
        return false;
    }
    
    // Find all duplicates
    static List<Integer> findAllDuplicates(int[] nums) {
        List<Integer> result = new ArrayList<>();
        
        for (int i = 0; i < nums.length; i++) {
            int index = Math.abs(nums[i]) - 1;
            
            if (nums[index] < 0) {
                result.add(index + 1);
            } else {
                nums[index] = -nums[index];
            }
        }
        
        // Restore array
        for (int i = 0; i < nums.length; i++) {
            nums[i] = Math.abs(nums[i]);
        }
        
        return result;
    }
    
    // ============ HELPER METHODS ============
    
    // Demonstrate Floyd's algorithm
    static void demonstrateFloyd(ListNode head) {
        System.out.println("Step-by-step Floyd's Algorithm:");
        
        ListNode slow = head;
        ListNode fast = head;
        int step = 0;
        
        System.out.println("Phase 1: Detect cycle");
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            step++;
            
            System.out.println("  Step " + step + ": slow at " + slow.val + 
                             ", fast at " + fast.val);
            
            if (slow == fast) {
                System.out.println("  Cycle detected!");
                break;
            }
        }
        
        if (slow != fast) {
            System.out.println("  No cycle");
            return;
        }
        
        System.out.println("\nPhase 2: Find cycle start");
        slow = head;
        step = 0;
        
        while (slow != fast) {
            slow = slow.next;
            fast = fast.next;
            step++;
            System.out.println("  Step " + step + ": slow at " + slow.val + 
                             ", fast at " + fast.val);
        }
        
        System.out.println("  Cycle starts at: " + slow.val);
    }
    
    // Create linked list
    static ListNode createList(int n) {
        ListNode dummy = new ListNode(0);
        ListNode curr = dummy;
        
        for (int i = 1; i <= n; i++) {
            curr.next = new ListNode(i);
            curr = curr.next;
        }
        
        return dummy.next;
    }
    
    // Create cyclic linked list
    static ListNode createCyclicList(int n, int pos) {
        ListNode head = createList(n);
        
        if (pos < 0) {
            return head;
        }
        
        // Find node at position pos
        ListNode cycleStart = head;
        for (int i = 0; i < pos; i++) {
            cycleStart = cycleStart.next;
        }
        
        // Find last node
        ListNode tail = head;
        while (tail.next != null) {
            tail = tail.next;
        }
        
        // Create cycle
        tail.next = cycleStart;
        
        return head;
    }
}

// ListNode class
class ListNode {
    int val;
    ListNode next;
    
    ListNode(int val) {
        this.val = val;
        this.next = null;
    }
}

/**
 * Key Concepts:
 * 
 * FLOYD'S ALGORITHM (TORTOISE AND HARE):
 * - Two pointers: slow (1 step) and fast (2 steps)
 * - If cycle exists, they will meet inside the cycle
 * - Time: O(n), Space: O(1)
 * 
 * FINDING CYCLE START:
 * - After detecting cycle, reset slow to head
 * - Move both slow and fast one step at a time
 * - They meet at the cycle start
 * 
 * WHY IT WORKS:
 * - Let distance to cycle start = x
 * - Let distance from cycle start to meeting point = y
 * - Let cycle length = c
 * - When they meet: slow traveled x + y
 * - fast traveled x + y + nc (n cycles)
 * - Since fast is 2x slow: 2(x + y) = x + y + nc
 * - Therefore: x + y = nc
 * - So x = nc - y (distance from meeting to start)
 * 
 * APPLICATIONS:
 * 1. Linked List Cycle Detection
 * 2. Finding Duplicate in Array [1..n]
 * 3. Happy Number
 * 4. Circular Array Loop
 * 5. Finding Intersection of Two Lists
 * 
 * TIME COMPLEXITY:
 * - Detection: O(n)
 * - Finding start: O(n)
 * - Finding length: O(n)
 * - Overall: O(n)
 * 
 * SPACE COMPLEXITY:
 * - O(1) - only two pointers
 * 
 * ADVANTAGES OVER HASHSET:
 * - Constant space O(1) vs O(n)
 * - No extra data structure needed
 * - Works with limited memory
 * 
 * Best Practices:
 * - Check for null before traversal
 * - Handle edge cases (empty, single node)
 * - Two-phase approach: detect then find
 * - Can be applied to arrays treating indices as pointers
 */
