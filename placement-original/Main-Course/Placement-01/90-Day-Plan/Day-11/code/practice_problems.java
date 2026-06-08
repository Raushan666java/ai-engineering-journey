/**
 * Day 11: Practice Problems
 * 
 * Comprehensive practice combining:
 * - HashMap and HashSet operations
 * - Cycle detection (Floyd's algorithm)
 * - Hashing patterns
 * - Real-world applications
 */

import java.util.*;

public class practice_problems {
    public static void main(String[] args) {
        System.out.println("=== Day 11 Practice Problems ===\n");
        
        // Problem 1: Design HashMap
        System.out.println("Problem 1: Design HashMap");
        testDesignHashMap();
        System.out.println();
        
        // Problem 2: Design HashSet
        System.out.println("Problem 2: Design HashSet");
        testDesignHashSet();
        System.out.println();
        
        // Problem 3: LRU Cache
        System.out.println("Problem 3: LRU Cache");
        testLRUCache();
        System.out.println();
        
        // Problem 4: Copy List with Random Pointer
        System.out.println("Problem 4: Copy List with Random Pointer");
        testCopyRandomList();
        System.out.println();
        
        // Problem 5: Four Sum
        System.out.println("Problem 5: Four Sum");
        testFourSum();
        System.out.println();
        
        // Problem 6: Top K Frequent Elements
        System.out.println("Problem 6: Top K Frequent Elements");
        testTopKFrequent();
        System.out.println();
        
        // Problem 7: Linked List Cycle II
        System.out.println("Problem 7: Linked List Cycle II (Start)");
        testLinkedListCycleII();
        System.out.println();
        
        // Problem 8: Intersection of Two Linked Lists
        System.out.println("Problem 8: Intersection of Two Lists");
        testIntersection();
        System.out.println();
        
        // Problem 9: Palindrome Linked List
        System.out.println("Problem 9: Palindrome Linked List");
        testPalindromeList();
        System.out.println();
        
        // Problem 10: Find Duplicate Number
        System.out.println("Problem 10: Find Duplicate Number");
        testFindDuplicate();
        System.out.println();
        
        System.out.println("=== All Problems Complete ===");
    }
    
    // ============ PROBLEM 1: DESIGN HASHMAP ============
    
    static void testDesignHashMap() {
        MyHashMap map = new MyHashMap();
        map.put(1, 1);
        map.put(2, 2);
        System.out.println("get(1): " + map.get(1));  // 1
        System.out.println("get(3): " + map.get(3));  // -1
        map.put(2, 1);  // Update
        System.out.println("get(2): " + map.get(2));  // 1
        map.remove(2);
        System.out.println("get(2): " + map.get(2));  // -1
    }
    
    static class MyHashMap {
        private static final int SIZE = 1000;
        private List<int[]>[] buckets;
        
        public MyHashMap() {
            buckets = new LinkedList[SIZE];
        }
        
        public void put(int key, int value) {
            int index = key % SIZE;
            
            if (buckets[index] == null) {
                buckets[index] = new LinkedList<>();
            }
            
            for (int[] pair : buckets[index]) {
                if (pair[0] == key) {
                    pair[1] = value;
                    return;
                }
            }
            
            buckets[index].add(new int[]{key, value});
        }
        
        public int get(int key) {
            int index = key % SIZE;
            
            if (buckets[index] == null) {
                return -1;
            }
            
            for (int[] pair : buckets[index]) {
                if (pair[0] == key) {
                    return pair[1];
                }
            }
            
            return -1;
        }
        
        public void remove(int key) {
            int index = key % SIZE;
            
            if (buckets[index] == null) {
                return;
            }
            
            buckets[index].removeIf(pair -> pair[0] == key);
        }
    }
    
    // ============ PROBLEM 2: DESIGN HASHSET ============
    
    static void testDesignHashSet() {
        MyHashSet set = new MyHashSet();
        set.add(1);
        set.add(2);
        System.out.println("contains(1): " + set.contains(1));  // true
        System.out.println("contains(3): " + set.contains(3));  // false
        set.add(2);
        System.out.println("contains(2): " + set.contains(2));  // true
        set.remove(2);
        System.out.println("contains(2): " + set.contains(2));  // false
    }
    
    static class MyHashSet {
        private static final int SIZE = 1000;
        private List<Integer>[] buckets;
        
        public MyHashSet() {
            buckets = new LinkedList[SIZE];
        }
        
        public void add(int key) {
            int index = key % SIZE;
            
            if (buckets[index] == null) {
                buckets[index] = new LinkedList<>();
            }
            
            if (!buckets[index].contains(key)) {
                buckets[index].add(key);
            }
        }
        
        public void remove(int key) {
            int index = key % SIZE;
            
            if (buckets[index] != null) {
                buckets[index].remove(Integer.valueOf(key));
            }
        }
        
        public boolean contains(int key) {
            int index = key % SIZE;
            
            if (buckets[index] == null) {
                return false;
            }
            
            return buckets[index].contains(key);
        }
    }
    
    // ============ PROBLEM 3: LRU CACHE ============
    
    static void testLRUCache() {
        LRUCache cache = new LRUCache(2);
        cache.put(1, 1);
        cache.put(2, 2);
        System.out.println("get(1): " + cache.get(1));     // 1
        cache.put(3, 3);  // Evicts key 2
        System.out.println("get(2): " + cache.get(2));     // -1
        cache.put(4, 4);  // Evicts key 1
        System.out.println("get(1): " + cache.get(1));     // -1
        System.out.println("get(3): " + cache.get(3));     // 3
        System.out.println("get(4): " + cache.get(4));     // 4
    }
    
    static class LRUCache {
        class Node {
            int key, value;
            Node prev, next;
            
            Node(int key, int value) {
                this.key = key;
                this.value = value;
            }
        }
        
        private int capacity;
        private Map<Integer, Node> map;
        private Node head, tail;
        
        public LRUCache(int capacity) {
            this.capacity = capacity;
            this.map = new HashMap<>();
            
            head = new Node(0, 0);
            tail = new Node(0, 0);
            head.next = tail;
            tail.prev = head;
        }
        
        public int get(int key) {
            if (!map.containsKey(key)) {
                return -1;
            }
            
            Node node = map.get(key);
            remove(node);
            add(node);
            
            return node.value;
        }
        
        public void put(int key, int value) {
            if (map.containsKey(key)) {
                remove(map.get(key));
            }
            
            Node node = new Node(key, value);
            add(node);
            map.put(key, node);
            
            if (map.size() > capacity) {
                Node lru = tail.prev;
                remove(lru);
                map.remove(lru.key);
            }
        }
        
        private void add(Node node) {
            Node next = head.next;
            head.next = node;
            node.prev = head;
            node.next = next;
            next.prev = node;
        }
        
        private void remove(Node node) {
            node.prev.next = node.next;
            node.next.prev = node.prev;
        }
    }
    
    // ============ PROBLEM 4: COPY LIST WITH RANDOM POINTER ============
    
    static void testCopyRandomList() {
        RandomNode head = new RandomNode(1);
        head.next = new RandomNode(2);
        head.next.next = new RandomNode(3);
        
        head.random = head.next.next;
        head.next.random = head;
        head.next.next.random = head.next;
        
        RandomNode copy = copyRandomList(head);
        
        System.out.println("Original list created and copied");
        System.out.println("Copy successful: " + (copy != head));
        System.out.println("Random pointers preserved: " + 
                         (copy.random.val == head.random.val));
    }
    
    static class RandomNode {
        int val;
        RandomNode next;
        RandomNode random;
        
        RandomNode(int val) {
            this.val = val;
        }
    }
    
    static RandomNode copyRandomList(RandomNode head) {
        if (head == null) return null;
        
        Map<RandomNode, RandomNode> map = new HashMap<>();
        
        // First pass: create nodes
        RandomNode curr = head;
        while (curr != null) {
            map.put(curr, new RandomNode(curr.val));
            curr = curr.next;
        }
        
        // Second pass: connect pointers
        curr = head;
        while (curr != null) {
            map.get(curr).next = map.get(curr.next);
            map.get(curr).random = map.get(curr.random);
            curr = curr.next;
        }
        
        return map.get(head);
    }
    
    // ============ PROBLEM 5: FOUR SUM ============
    
    static void testFourSum() {
        int[] nums = {1, 0, -1, 0, -2, 2};
        int target = 0;
        List<List<Integer>> result = fourSum(nums, target);
        
        System.out.println("Array: " + Arrays.toString(nums));
        System.out.println("Target: " + target);
        System.out.println("Four sum combinations:");
        for (List<Integer> quad : result) {
            System.out.println("  " + quad);
        }
    }
    
    static List<List<Integer>> fourSum(int[] nums, int target) {
        List<List<Integer>> result = new ArrayList<>();
        Arrays.sort(nums);
        
        for (int i = 0; i < nums.length - 3; i++) {
            if (i > 0 && nums[i] == nums[i-1]) continue;
            
            for (int j = i + 1; j < nums.length - 2; j++) {
                if (j > i + 1 && nums[j] == nums[j-1]) continue;
                
                int left = j + 1;
                int right = nums.length - 1;
                
                while (left < right) {
                    long sum = (long)nums[i] + nums[j] + nums[left] + nums[right];
                    
                    if (sum == target) {
                        result.add(Arrays.asList(nums[i], nums[j], nums[left], nums[right]));
                        
                        while (left < right && nums[left] == nums[left+1]) left++;
                        while (left < right && nums[right] == nums[right-1]) right--;
                        
                        left++;
                        right--;
                    } else if (sum < target) {
                        left++;
                    } else {
                        right--;
                    }
                }
            }
        }
        
        return result;
    }
    
    // ============ PROBLEM 6: TOP K FREQUENT ============
    
    static void testTopKFrequent() {
        int[] nums = {1, 1, 1, 2, 2, 3};
        int k = 2;
        int[] result = topKFrequent(nums, k);
        
        System.out.println("Array: " + Arrays.toString(nums));
        System.out.println("K: " + k);
        System.out.println("Top " + k + " frequent: " + Arrays.toString(result));
    }
    
    static int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> freq = new HashMap<>();
        
        for (int num : nums) {
            freq.put(num, freq.getOrDefault(num, 0) + 1);
        }
        
        PriorityQueue<Map.Entry<Integer, Integer>> pq = new PriorityQueue<>(
            (a, b) -> b.getValue() - a.getValue()
        );
        
        pq.addAll(freq.entrySet());
        
        int[] result = new int[k];
        for (int i = 0; i < k; i++) {
            result[i] = pq.poll().getKey();
        }
        
        return result;
    }
    
    // ============ PROBLEM 7: LINKED LIST CYCLE II ============
    
    static void testLinkedListCycleII() {
        SimpleNode head = new SimpleNode(3);
        head.next = new SimpleNode(2);
        head.next.next = new SimpleNode(0);
        head.next.next.next = new SimpleNode(-4);
        head.next.next.next.next = head.next;  // Cycle
        
        SimpleNode cycleStart = detectCycle(head);
        System.out.println("Cycle starts at node: " + cycleStart.val);
    }
    
    static class SimpleNode {
        int val;
        SimpleNode next;
        
        SimpleNode(int val) {
            this.val = val;
        }
    }
    
    static SimpleNode detectCycle(SimpleNode head) {
        if (head == null || head.next == null) return null;
        
        SimpleNode slow = head;
        SimpleNode fast = head;
        
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            
            if (slow == fast) {
                slow = head;
                while (slow != fast) {
                    slow = slow.next;
                    fast = fast.next;
                }
                return slow;
            }
        }
        
        return null;
    }
    
    // ============ PROBLEM 8: INTERSECTION ============
    
    static void testIntersection() {
        SimpleNode intersection = new SimpleNode(8);
        intersection.next = new SimpleNode(4);
        intersection.next.next = new SimpleNode(5);
        
        SimpleNode headA = new SimpleNode(4);
        headA.next = new SimpleNode(1);
        headA.next.next = intersection;
        
        SimpleNode headB = new SimpleNode(5);
        headB.next = new SimpleNode(6);
        headB.next.next = new SimpleNode(1);
        headB.next.next.next = intersection;
        
        SimpleNode result = getIntersection(headA, headB);
        System.out.println("Intersection at: " + result.val);
    }
    
    static SimpleNode getIntersection(SimpleNode headA, SimpleNode headB) {
        if (headA == null || headB == null) return null;
        
        SimpleNode a = headA;
        SimpleNode b = headB;
        
        while (a != b) {
            a = (a == null) ? headB : a.next;
            b = (b == null) ? headA : b.next;
        }
        
        return a;
    }
    
    // ============ PROBLEM 9: PALINDROME LIST ============
    
    static void testPalindromeList() {
        SimpleNode head1 = new SimpleNode(1);
        head1.next = new SimpleNode(2);
        head1.next.next = new SimpleNode(2);
        head1.next.next.next = new SimpleNode(1);
        
        System.out.println("List [1,2,2,1] is palindrome: " + isPalindrome(head1));
        
        SimpleNode head2 = new SimpleNode(1);
        head2.next = new SimpleNode(2);
        
        System.out.println("List [1,2] is palindrome: " + isPalindrome(head2));
    }
    
    static boolean isPalindrome(SimpleNode head) {
        if (head == null || head.next == null) return true;
        
        // Find middle
        SimpleNode slow = head;
        SimpleNode fast = head;
        
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        
        // Reverse second half
        SimpleNode prev = null;
        while (slow != null) {
            SimpleNode next = slow.next;
            slow.next = prev;
            prev = slow;
            slow = next;
        }
        
        // Compare
        SimpleNode left = head;
        SimpleNode right = prev;
        
        while (right != null) {
            if (left.val != right.val) return false;
            left = left.next;
            right = right.next;
        }
        
        return true;
    }
    
    // ============ PROBLEM 10: FIND DUPLICATE ============
    
    static void testFindDuplicate() {
        int[] nums = {1, 3, 4, 2, 2};
        int duplicate = findDuplicate(nums);
        
        System.out.println("Array: " + Arrays.toString(nums));
        System.out.println("Duplicate: " + duplicate);
    }
    
    static int findDuplicate(int[] nums) {
        int slow = nums[0];
        int fast = nums[0];
        
        do {
            slow = nums[slow];
            fast = nums[nums[fast]];
        } while (slow != fast);
        
        slow = nums[0];
        while (slow != fast) {
            slow = nums[slow];
            fast = nums[fast];
        }
        
        return slow;
    }
}

/**
 * Problem Categories:
 * 
 * 1. DESIGN PROBLEMS:
 *    - HashMap implementation
 *    - HashSet implementation
 *    - LRU Cache
 * 
 * 2. CYCLE DETECTION:
 *    - Linked list cycle
 *    - Find duplicate
 *    - Palindrome check
 * 
 * 3. HASHING PATTERNS:
 *    - Four Sum
 *    - Top K Frequent
 *    - Copy with random pointer
 * 
 * 4. LINKED LIST:
 *    - Intersection
 *    - Palindrome
 *    - Cycle detection
 * 
 * Key Techniques:
 * - Floyd's algorithm (slow/fast pointers)
 * - HashMap for O(1) lookups
 * - Frequency counting
 * - Sliding window
 * - Two pointers
 * 
 * Time Complexities:
 * - HashMap operations: O(1) average
 * - Floyd's cycle: O(n)
 * - Two pointers: O(n)
 * - Sorting: O(n log n)
 * 
 * Space Complexities:
 * - HashMap storage: O(n)
 * - Floyd's algorithm: O(1)
 * - In-place operations: O(1)
 */
