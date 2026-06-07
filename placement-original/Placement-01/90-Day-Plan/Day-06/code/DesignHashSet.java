/**
 * LeetCode #705: DESIGN HASHSET - DAY 6
 * Difficulty: Easy
 * 
 * Problem:
 * Design a HashSet without using any built-in hash table libraries.
 * 
 * Implement MyHashSet class:
 * - void add(key) Inserts the value key into the HashSet.
 * - bool contains(key) Returns whether the value key exists in the HashSet or not.
 * - void remove(key) Removes the value key in the HashSet. If key does not exist, do nothing.
 * 
 * Example 1:
 * Input:
 * ["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"]
 * [[], [1], [2], [1], [3], [2], [2], [2], [2]]
 * Output:
 * [null, null, null, true, false, null, true, null, false]
 * 
 * Constraints:
 * - 0 <= key <= 10^6
 * - At most 10^4 calls will be made to add, remove, and contains.
 */

public class DesignHashSet {
    
    public static void main(String[] args) {
        System.out.println("╔═══════════════════════════════════════════╗");
        System.out.println("║   LeetCode #705: DESIGN HASHSET          ║");
        System.out.println("║   Difficulty: Easy                        ║");
        System.out.println("╚═══════════════════════════════════════════╝\n");
        
        // Test all approaches
        testHashSet();
        performanceComparison();
        printInterviewTips();
    }
    
    static void testHashSet() {
        System.out.println("=".repeat(70));
        System.out.println("TESTING HASHSET IMPLEMENTATIONS");
        System.out.println("=".repeat(70));
        
        // Test Approach 1: Array-based
        System.out.println("\n💡 Approach 1: Array-Based HashSet");
        MyHashSet1 set1 = new MyHashSet1();
        set1.add(1);
        set1.add(2);
        System.out.println("After add(1), add(2):");
        System.out.println("contains(1): " + set1.contains(1));
        System.out.println("contains(3): " + set1.contains(3));
        set1.add(2);
        System.out.println("After add(2) again:");
        System.out.println("contains(2): " + set1.contains(2));
        set1.remove(2);
        System.out.println("After remove(2):");
        System.out.println("contains(2): " + set1.contains(2));
        
        // Test Approach 2: Linked List
        System.out.println("\n💡 Approach 2: Linked List HashSet");
        MyHashSet2 set2 = new MyHashSet2();
        set2.add(1);
        set2.add(2);
        System.out.println("contains(1): " + set2.contains(1));
        System.out.println("contains(3): " + set2.contains(3));
        set2.remove(1);
        System.out.println("After remove(1):");
        System.out.println("contains(1): " + set2.contains(1));
        
        // Test Approach 3: Hash Table with Chaining
        System.out.println("\n💡 Approach 3: Hash Table with Chaining");
        MyHashSet3 set3 = new MyHashSet3();
        set3.add(1);
        set3.add(2);
        set3.add(1000);
        System.out.println("contains(1): " + set3.contains(1));
        System.out.println("contains(1000): " + set3.contains(1000));
        set3.remove(1);
        System.out.println("After remove(1):");
        System.out.println("contains(1): " + set3.contains(1));
    }
    
    static void performanceComparison() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("PERFORMANCE COMPARISON");
        System.out.println("=".repeat(70));
        
        System.out.println("\n╔════════════════════════╦═══════════╦═══════════╦═══════════╗");
        System.out.println("║      Approach          ║    Add    ║  Contains ║  Remove   ║");
        System.out.println("╠════════════════════════╬═══════════╬═══════════╬═══════════╣");
        System.out.println("║ Array-Based            ║   O(1)    ║   O(1)    ║   O(1)    ║");
        System.out.println("║ Linked List            ║   O(n)    ║   O(n)    ║   O(n)    ║");
        System.out.println("║ Hash Table (Chaining)⭐║   O(1)    ║   O(1)    ║   O(1)    ║");
        System.out.println("╚════════════════════════╩═══════════╩═══════════╩═══════════╝");
        
        System.out.println("\n╔════════════════════════╦═══════════════╗");
        System.out.println("║      Approach          ║ Space         ║");
        System.out.println("╠════════════════════════╬═══════════════╣");
        System.out.println("║ Array-Based            ║ O(10^6) HUGE! ║");
        System.out.println("║ Linked List            ║ O(n) - actual ║");
        System.out.println("║ Hash Table (Chaining)⭐║ O(n) optimal  ║");
        System.out.println("╚════════════════════════╩═══════════════╝");
        
        System.out.println("\n🎯 Trade-offs:");
        System.out.println("Array: Fast but wastes memory for sparse data");
        System.out.println("List: Slow but simple");
        System.out.println("Hash Table: Fast AND space-efficient ⭐ BEST");
    }
    
    static void printInterviewTips() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("INTERVIEW TIPS & TRICKS");
        System.out.println("=".repeat(70));
        
        System.out.println("\n💡 Problem-Solving Approach:");
        
        System.out.println("\n1. Understand requirements:");
        System.out.println("   - Need add, remove, contains");
        System.out.println("   - Keys are integers 0 to 10^6");
        System.out.println("   - No built-in hash table");
        
        System.out.println("\n2. Consider simple approach first:");
        System.out.println("   - Boolean array of size 10^6");
        System.out.println("   - Works but wastes space");
        
        System.out.println("\n3. Optimize with hashing:");
        System.out.println("   - Use hash function: key % bucketSize");
        System.out.println("   - Handle collisions with chaining");
        System.out.println("   - Balance time vs space");
        
        System.out.println("\n📝 Key Concepts to Mention:");
        System.out.println("✅ Hash function distributes keys uniformly");
        System.out.println("✅ Chaining handles collisions");
        System.out.println("✅ Load factor affects performance");
        System.out.println("✅ Prime number bucket size reduces collisions");
        
        System.out.println("\n🎯 Follow-up Questions:");
        System.out.println("Q: How to handle collisions?");
        System.out.println("A: Chaining (linked lists) or open addressing");
        
        System.out.println("\nQ: What's a good bucket size?");
        System.out.println("A: Prime number near sqrt(max_keys) for uniform distribution");
        
        System.out.println("\nQ: Time complexity?");
        System.out.println("A: O(1) average for all operations with good hash function");
        
        System.out.println("\n⭐ Best Solution:");
        System.out.println("Hash table with chaining - O(1) time, O(n) space");
    }
}

// ============================================
// APPROACH 1: ARRAY-BASED HASHSET
// Time: O(1), Space: O(10^6)
// ============================================
/**
 * Simple Array-Based Implementation
 * 
 * Algorithm:
 * - Use boolean array of size 10^6 + 1
 * - array[key] = true means key exists
 * - Direct indexing for O(1) operations
 * 
 * Pros:
 * + Very simple implementation
 * + O(1) for all operations
 * 
 * Cons:
 * - Wastes memory (10^6 booleans even for few elements)
 * - Not practical for large key ranges
 * 
 * ⚠️ Use only when key range is small
 */
class MyHashSet1 {
    private boolean[] data;
    
    public MyHashSet1() {
        data = new boolean[1000001];  // 0 to 10^6
    }
    
    public void add(int key) {
        data[key] = true;
    }
    
    public void remove(int key) {
        data[key] = false;
    }
    
    public boolean contains(int key) {
        return data[key];
    }
}

// ============================================
// APPROACH 2: LINKED LIST
// Time: O(n), Space: O(n)
// ============================================
/**
 * Linked List Implementation
 * 
 * Algorithm:
 * - Store all keys in a linked list
 * - Search linearly for operations
 * 
 * Pros:
 * + Simple to implement
 * + Space-efficient (only stores actual elements)
 * 
 * Cons:
 * - O(n) time complexity for all operations
 * - Not efficient for large datasets
 * 
 * ⚠️ Good for learning, not for production
 */
class MyHashSet2 {
    private Node head;
    
    private static class Node {
        int key;
        Node next;
        
        Node(int key) {
            this.key = key;
        }
    }
    
    public MyHashSet2() {
        head = null;
    }
    
    public void add(int key) {
        if (contains(key)) return;
        
        Node newNode = new Node(key);
        newNode.next = head;
        head = newNode;
    }
    
    public void remove(int key) {
        if (head == null) return;
        
        if (head.key == key) {
            head = head.next;
            return;
        }
        
        Node curr = head;
        while (curr.next != null) {
            if (curr.next.key == key) {
                curr.next = curr.next.next;
                return;
            }
            curr = curr.next;
        }
    }
    
    public boolean contains(int key) {
        Node curr = head;
        while (curr != null) {
            if (curr.key == key) return true;
            curr = curr.next;
        }
        return false;
    }
}

// ============================================
// APPROACH 3: HASH TABLE WITH CHAINING (BEST)
// Time: O(1) average, Space: O(n)
// ============================================
/**
 * Hash Table with Chaining
 * 
 * Algorithm:
 * - Use array of linked lists (buckets)
 * - Hash function: key % bucketSize
 * - Chain colliding keys in same bucket
 * 
 * Example (bucketSize = 5):
 * key = 1: hash = 1 % 5 = 1 → bucket[1]
 * key = 6: hash = 6 % 5 = 1 → bucket[1] (collision!)
 * key = 11: hash = 11 % 5 = 1 → bucket[1] (collision!)
 * 
 * bucket[1]: 1 → 6 → 11 → null
 * 
 * Bucket Size:
 * - Too small: many collisions, long chains
 * - Too large: wasted space
 * - Good: prime number near sqrt(max_keys)
 * 
 * Why Prime?
 * - Better key distribution
 * - Reduces clustering
 * 
 * Time Complexity: O(n/bucketSize) = O(1) average
 * Space Complexity: O(bucketSize + n)
 * 
 * ✅ BEST SOLUTION - Balance of time and space
 */
class MyHashSet3 {
    private static final int BUCKET_SIZE = 769;  // Prime number
    private LinkedList[] buckets;
    
    private static class LinkedList {
        Node head;
        
        static class Node {
            int key;
            Node next;
            
            Node(int key) {
                this.key = key;
            }
        }
        
        void add(int key) {
            if (contains(key)) return;
            
            Node newNode = new Node(key);
            newNode.next = head;
            head = newNode;
        }
        
        void remove(int key) {
            if (head == null) return;
            
            if (head.key == key) {
                head = head.next;
                return;
            }
            
            Node curr = head;
            while (curr.next != null) {
                if (curr.next.key == key) {
                    curr.next = curr.next.next;
                    return;
                }
                curr = curr.next;
            }
        }
        
        boolean contains(int key) {
            Node curr = head;
            while (curr != null) {
                if (curr.key == key) return true;
                curr = curr.next;
            }
            return false;
        }
    }
    
    public MyHashSet3() {
        buckets = new LinkedList[BUCKET_SIZE];
        for (int i = 0; i < BUCKET_SIZE; i++) {
            buckets[i] = new LinkedList();
        }
    }
    
    private int hash(int key) {
        return key % BUCKET_SIZE;
    }
    
    public void add(int key) {
        int index = hash(key);
        buckets[index].add(key);
    }
    
    public void remove(int key) {
        int index = hash(key);
        buckets[index].remove(key);
    }
    
    public boolean contains(int key) {
        int index = hash(key);
        return buckets[index].contains(key);
    }
}
