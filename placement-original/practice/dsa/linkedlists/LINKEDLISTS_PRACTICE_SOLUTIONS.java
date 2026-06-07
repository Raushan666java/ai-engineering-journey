package practice.dsa.linkedlists;

/**
 * LINKED LISTS PRACTICE SOLUTIONS
 * Complete collection of linked list problems with solutions
 * Difficulty: Easy → Medium → Hard
 */

// Node class for linked list
class ListNode {
    int val;
    ListNode next;
    ListNode(int x) { val = x; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

public class LINKEDLISTS_PRACTICE_SOLUTIONS {

    // ==========================================
    // EASY LEVEL PROBLEMS
    // ==========================================

    /**
     * Problem 1: Reverse Linked List (Iterative)
     * Time: O(n), Space: O(1)
     */
    public static ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;

        while (curr != null) {
            ListNode nextTemp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextTemp;
        }
        return prev;
    }

    /**
     * Problem 2: Merge Two Sorted Lists
     * Time: O(n + m), Space: O(1)
     */
    public static ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode dummy = new ListNode(0);
        ListNode curr = dummy;

        while (list1 != null && list2 != null) {
            if (list1.val < list2.val) {
                curr.next = list1;
                list1 = list1.next;
            } else {
                curr.next = list2;
                list2 = list2.next;
            }
            curr = curr.next;
        }

        curr.next = (list1 != null) ? list1 : list2;
        return dummy.next;
    }

    /**
     * Problem 3: Remove Duplicates from Sorted List
     * Time: O(n), Space: O(1)
     */
    public static ListNode deleteDuplicates(ListNode head) {
        ListNode curr = head;

        while (curr != null && curr.next != null) {
            if (curr.val == curr.next.val) {
                curr.next = curr.next.next;
            } else {
                curr = curr.next;
            }
        }
        return head;
    }

    /**
     * Problem 4: Middle of the Linked List
     * Time: O(n), Space: O(1)
     */
    public static ListNode middleNode(ListNode head) {
        ListNode slow = head, fast = head;

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    /**
     * Problem 5: Linked List Cycle Detection
     * Time: O(n), Space: O(1)
     */
    public static boolean hasCycle(ListNode head) {
        if (head == null) return false;

        ListNode slow = head, fast = head.next;
        while (slow != fast) {
            if (fast == null || fast.next == null) return false;
            slow = slow.next;
            fast = fast.next.next;
        }
        return true;
    }

    /**
     * Problem 6: Intersection of Two Linked Lists
     * Time: O(n + m), Space: O(1)
     */
    public static ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        if (headA == null || headB == null) return null;

        ListNode a = headA, b = headB;

        while (a != b) {
            a = (a == null) ? headB : a.next;
            b = (b == null) ? headA : b.next;
        }
        return a;
    }

    // ==========================================
    // MEDIUM LEVEL PROBLEMS
    // ==========================================

    /**
     * Problem 7: Add Two Numbers
     * Time: O(max(m,n)), Space: O(max(m,n))
     */
    public static ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode(0);
        ListNode curr = dummy;
        int carry = 0;

        while (l1 != null || l2 != null || carry != 0) {
            int sum = carry;
            if (l1 != null) {
                sum += l1.val;
                l1 = l1.next;
            }
            if (l2 != null) {
                sum += l2.val;
                l2 = l2.next;
            }

            carry = sum / 10;
            curr.next = new ListNode(sum % 10);
            curr = curr.next;
        }
        return dummy.next;
    }

    /**
     * Problem 8: Remove Nth Node From End of List
     * Time: O(n), Space: O(1)
     */
    public static ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode first = dummy, second = dummy;

        // Advance first pointer by n+1 steps
        for (int i = 0; i <= n; i++) {
            first = first.next;
        }

        // Move both pointers until first reaches end
        while (first != null) {
            first = first.next;
            second = second.next;
        }

        // Remove the nth node
        second.next = second.next.next;
        return dummy.next;
    }

    /**
     * Problem 9: Rotate List
     * Time: O(n), Space: O(1)
     */
    public static ListNode rotateRight(ListNode head, int k) {
        if (head == null || head.next == null || k == 0) return head;

        // Get length and make circular
        ListNode curr = head;
        int length = 1;
        while (curr.next != null) {
            curr = curr.next;
            length++;
        }
        curr.next = head;

        // Find new head
        k = k % length;
        int stepsToNewHead = length - k;
        ListNode newTail = head;
        for (int i = 1; i < stepsToNewHead; i++) {
            newTail = newTail.next;
        }

        ListNode newHead = newTail.next;
        newTail.next = null;

        return newHead;
    }

    /**
     * Problem 10: Partition List
     * Time: O(n), Space: O(1)
     */
    public static ListNode partition(ListNode head, int x) {
        ListNode beforeHead = new ListNode(0);
        ListNode afterHead = new ListNode(0);
        ListNode before = beforeHead;
        ListNode after = afterHead;

        while (head != null) {
            if (head.val < x) {
                before.next = head;
                before = before.next;
            } else {
                after.next = head;
                after = after.next;
            }
            head = head.next;
        }

        after.next = null;
        before.next = afterHead.next;
        return beforeHead.next;
    }

    // ==========================================
    // HARD LEVEL PROBLEMS
    // ==========================================

    /**
     * Problem 11: Merge K Sorted Lists
     * Time: O(n log k), Space: O(1)
     */
    public static ListNode mergeKLists(ListNode[] lists) {
        if (lists == null || lists.length == 0) return null;

        int interval = 1;
        int n = lists.length;

        while (interval < n) {
            for (int i = 0; i < n - interval; i += interval * 2) {
                lists[i] = mergeTwoLists(lists[i], lists[i + interval]);
            }
            interval *= 2;
        }
        return lists[0];
    }

    /**
     * Problem 12: Reverse Nodes in k-Group
     * Time: O(n), Space: O(1)
     */
    public static ListNode reverseKGroup(ListNode head, int k) {
        if (head == null || k == 1) return head;

        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode prevGroupEnd = dummy;

        while (true) {
            // Find kth node
            ListNode kth = prevGroupEnd;
            for (int i = 0; i < k; i++) {
                kth = kth.next;
                if (kth == null) return dummy.next;
            }

            // Reverse k nodes
            ListNode groupStart = prevGroupEnd.next;
            ListNode nextGroupStart = kth.next;

            // Reverse the group
            ListNode prev = nextGroupStart;
            ListNode curr = groupStart;

            while (curr != nextGroupStart) {
                ListNode temp = curr.next;
                curr.next = prev;
                prev = curr;
                curr = temp;
            }

            // Connect with previous group
            prevGroupEnd.next = kth;
            prevGroupEnd = groupStart;
        }
    }

    /**
     * Problem 13: Copy List with Random Pointer
     * Time: O(n), Space: O(1)
     */
    static class Node {
        int val;
        Node next;
        Node random;
        Node(int val) { this.val = val; }
    }

    public static Node copyRandomList(Node head) {
        if (head == null) return null;

        // Step 1: Create copy nodes interleaved with original nodes
        Node curr = head;
        while (curr != null) {
            Node copy = new Node(curr.val);
            copy.next = curr.next;
            curr.next = copy;
            curr = copy.next;
        }

        // Step 2: Set random pointers for copy nodes
        curr = head;
        while (curr != null) {
            if (curr.random != null) {
                curr.next.random = curr.random.next;
            }
            curr = curr.next.next;
        }

        // Step 3: Separate the two lists
        curr = head;
        Node copyHead = head.next;
        Node copyCurr = copyHead;

        while (curr != null) {
            curr.next = curr.next.next;
            if (copyCurr.next != null) {
                copyCurr.next = copyCurr.next.next;
            }
            curr = curr.next;
            copyCurr = copyCurr.next;
        }

        return copyHead;
    }

    /**
     * Problem 14: LRU Cache
     * Time: O(1) for get and put, Space: O(capacity)
     */
    static class LRUCache {
        private java.util.Map<Integer, Node> cache;
        private int capacity;
        private Node head, tail;

        static class Node {
            int key, value;
            Node prev, next;
            Node(int key, int value) {
                this.key = key;
                this.value = value;
            }
        }

        public LRUCache(int capacity) {
            this.capacity = capacity;
            cache = new java.util.HashMap<>();
            head = new Node(0, 0);
            tail = new Node(0, 0);
            head.next = tail;
            tail.prev = head;
        }

        public int get(int key) {
            if (!cache.containsKey(key)) return -1;
            Node node = cache.get(key);
            remove(node);
            addToFront(node);
            return node.value;
        }

        public void put(int key, int value) {
            if (cache.containsKey(key)) {
                Node node = cache.get(key);
                node.value = value;
                remove(node);
                addToFront(node);
            } else {
                if (cache.size() == capacity) {
                    Node lru = tail.prev;
                    remove(lru);
                    cache.remove(lru.key);
                }
                Node node = new Node(key, value);
                cache.put(key, node);
                addToFront(node);
            }
        }

        private void remove(Node node) {
            node.prev.next = node.next;
            node.next.prev = node.prev;
        }

        private void addToFront(Node node) {
            node.next = head.next;
            node.prev = head;
            head.next.prev = node;
            head.next = node;
        }
    }

    // ==========================================
    // UTILITY METHODS
    // ==========================================

    public static void printList(ListNode head) {
        ListNode curr = head;
        System.out.print("[");
        while (curr != null) {
            System.out.print(curr.val);
            if (curr.next != null) System.out.print(" -> ");
            curr = curr.next;
        }
        System.out.println("]");
    }

    public static ListNode createList(int[] arr) {
        if (arr.length == 0) return null;
        ListNode head = new ListNode(arr[0]);
        ListNode curr = head;
        for (int i = 1; i < arr.length; i++) {
            curr.next = new ListNode(arr[i]);
            curr = curr.next;
        }
        return head;
    }

    // ==========================================
    // TEST METHODS
    // ==========================================

    public static void main(String[] args) {
        System.out.println("=== LINKED LISTS PRACTICE SOLUTIONS ===\n");

        // Test Reverse Linked List
        System.out.println("1. Reverse Linked List");
        ListNode list1 = createList(new int[]{1, 2, 3, 4, 5});
        System.out.print("Original: ");
        printList(list1);
        ListNode reversed = reverseList(list1);
        System.out.print("Reversed: ");
        printList(reversed);
        System.out.println();

        // Test Merge Two Sorted Lists
        System.out.println("2. Merge Two Sorted Lists");
        ListNode list2a = createList(new int[]{1, 2, 4});
        ListNode list2b = createList(new int[]{1, 3, 4});
        System.out.print("List1: ");
        printList(list2a);
        System.out.print("List2: ");
        printList(list2b);
        ListNode merged = mergeTwoLists(list2a, list2b);
        System.out.print("Merged: ");
        printList(merged);
        System.out.println();

        // Test Remove Duplicates from Sorted List
        System.out.println("3. Remove Duplicates from Sorted List");
        ListNode list3 = createList(new int[]{1, 1, 2, 3, 3});
        System.out.print("Original: ");
        printList(list3);
        ListNode deduped = deleteDuplicates(list3);
        System.out.print("Deduped: ");
        printList(deduped);
        System.out.println();

        // Test Middle of the Linked List
        System.out.println("4. Middle of the Linked List");
        ListNode list4 = createList(new int[]{1, 2, 3, 4, 5});
        System.out.print("List: ");
        printList(list4);
        ListNode middle = middleNode(list4);
        System.out.println("Middle value: " + middle.val);
        System.out.println();

        // Test Add Two Numbers
        System.out.println("5. Add Two Numbers");
        ListNode num1 = createList(new int[]{2, 4, 3});
        ListNode num2 = createList(new int[]{5, 6, 4});
        System.out.print("Number 1: ");
        printList(num1);
        System.out.print("Number 2: ");
        printList(num2);
        ListNode sum = addTwoNumbers(num1, num2);
        System.out.print("Sum: ");
        printList(sum);
        System.out.println();

        // Test LRU Cache
        System.out.println("6. LRU Cache");
        LRUCache cache = new LRUCache(2);
        cache.put(1, 1);
        cache.put(2, 2);
        System.out.println("Get 1: " + cache.get(1));    // returns 1
        cache.put(3, 3);    // evicts key 2
        System.out.println("Get 2: " + cache.get(2));    // returns -1 (not found)
        cache.put(4, 4);    // evicts key 1
        System.out.println("Get 1: " + cache.get(1));    // returns -1 (not found)
        System.out.println("Get 3: " + cache.get(3));    // returns 3
        System.out.println("Get 4: " + cache.get(4));    // returns 4
    }
}