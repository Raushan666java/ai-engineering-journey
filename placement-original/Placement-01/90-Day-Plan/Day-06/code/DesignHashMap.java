/**
 * LeetCode #706: DESIGN HASHMAP - DAY 6
 * Difficulty: Easy
 * 
 * Problem:
 * Design a HashMap without using any built-in hash table libraries.
 * 
 * Implement MyHashMap class:
 * - MyHashMap() initializes the object with an empty map.
 * - void put(int key, int value) inserts a (key, value) pair into the HashMap.
 *   If the key already exists, update the corresponding value.
 * - int get(int key) returns the value to which the specified key is mapped,
 *   or -1 if this map contains no mapping for the key.
 * - void remove(int key) removes the key and its corresponding value if the map
 *   contains the mapping for the key.
 * 
 * Example 1:
 * Input:
 * ["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"]
 * [[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]
 * Output:
 * [null, null, null, 1, -1, null, 1, null, -1]
 * 
 * Constraints:
 * - 0 <= key, value <= 10^6
 * - At most 10^4 calls will be made to put, get, and remove.
 */

public class DesignHashMap {
    
    public static void main(String[] args) {
        System.out.println("╔═══════════════════════════════════════════╗");
        System.out.println("║   LeetCode #706: DESIGN HASHMAP          ║");
        System.out.println("║   Difficulty: Easy                        ║");
        System.out.println("╚═══════════════════════════════════════════╝\n");
        
        // Test all approaches
        testHashMap();
        demonstrateHashCollisions();
        performanceComparison();
        printInterviewTips();
    }
    
    static void testHashMap() {
        System.out.println("=".repeat(70));
        System.out.println("TESTING HASHMAP IMPLEMENTATIONS");
        System.out.println("=".repeat(70));
        
        // Test Approach 1: Array-based
        System.out.println("\n💡 Approach 1: Array-Based HashMap");
        MyHashMap1 map1 = new MyHashMap1();
        map1.put(1, 100);
        map1.put(2, 200);
        System.out.println("After put(1, 100), put(2, 200):");
        System.out.println("get(1): " + map1.get(1));
        System.out.println("get(3): " + map1.get(3));
        map1.put(2, 300);  // Update existing
        System.out.println("After put(2, 300) - update:");
        System.out.println("get(2): " + map1.get(2));
        map1.remove(2);
        System.out.println("After remove(2):");
        System.out.println("get(2): " + map1.get(2));
        
        // Test Approach 2: Hash Table with Chaining
        System.out.println("\n💡 Approach 2: Hash Table with Chaining");
        MyHashMap2 map2 = new MyHashMap2();
        map2.put(1, 100);
        map2.put(2, 200);
        map2.put(1000, 500);  // Will collide with bucket
        System.out.println("get(1): " + map2.get(1));
        System.out.println("get(2): " + map2.get(2));
        System.out.println("get(1000): " + map2.get(1000));
        map2.put(1, 999);  // Update
        System.out.println("After put(1, 999):");
        System.out.println("get(1): " + map2.get(1));
        
        // Test Approach 3: Optimized with better hash
        System.out.println("\n💡 Approach 3: Optimized Hash Table");
        MyHashMap3 map3 = new MyHashMap3();
        map3.put(1, 100);
        map3.put(2, 200);
        System.out.println("get(1): " + map3.get(1));
        System.out.println("get(2): " + map3.get(2));
    }
    
    static void demonstrateHashCollisions() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("HASH COLLISION DEMONSTRATION");
        System.out.println("=".repeat(70));
        
        System.out.println("\n📊 Example: BucketSize = 10");
        System.out.println("┌──────┬──────────┬──────────────────────────────┐");
        System.out.println("│ Key  │ Hash(%)  │ Bucket                       │");
        System.out.println("├──────┼──────────┼──────────────────────────────┤");
        int[] keys = {1, 11, 21, 5, 15, 25};
        for (int key : keys) {
            int hash = key % 10;
            System.out.printf("│ %4d │    %d     │ bucket[%d]                   │%n", key, hash, hash);
        }
        System.out.println("└──────┴──────────┴──────────────────────────────┘");
        
        System.out.println("\n🔗 Bucket Structure After Insertions:");
        System.out.println("bucket[1]: (1,val1) → (11,val11) → (21,val21) → null");
        System.out.println("bucket[5]: (5,val5) → (15,val15) → (25,val25) → null");
        
        System.out.println("\n💡 Collision Resolution:");
        System.out.println("✅ Chaining: Store colliding entries in linked list");
        System.out.println("✅ Each bucket is a linked list of (key, value) pairs");
        System.out.println("✅ Search within bucket to find exact key");
        
        System.out.println("\n📈 Load Factor = n / bucketSize");
        System.out.println("- Low load factor: Fast but wastes space");
        System.out.println("- High load factor: Space-efficient but slower");
        System.out.println("- Optimal: 0.75 (Java's HashMap default)");
    }
    
    static void performanceComparison() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("PERFORMANCE COMPARISON");
        System.out.println("=".repeat(70));
        
        System.out.println("\n╔════════════════════════╦═══════════╦═══════════╦═══════════╗");
        System.out.println("║      Approach          ║    Put    ║    Get    ║  Remove   ║");
        System.out.println("╠════════════════════════╬═══════════╬═══════════╬═══════════╣");
        System.out.println("║ Array-Based            ║   O(1)    ║   O(1)    ║   O(1)    ║");
        System.out.println("║ Hash Table (Chaining)⭐║   O(1)    ║   O(1)    ║   O(1)    ║");
        System.out.println("║ With Poor Hash         ║   O(n)    ║   O(n)    ║   O(n)    ║");
        System.out.println("╚════════════════════════╩═══════════╩═══════════╩═══════════╝");
        
        System.out.println("\n╔════════════════════════╦════════════════════╗");
        System.out.println("║      Approach          ║ Space Complexity   ║");
        System.out.println("╠════════════════════════╬════════════════════╣");
        System.out.println("║ Array-Based            ║ O(10^6) - HUGE!    ║");
        System.out.println("║ Hash Table (Chaining)⭐║ O(buckets + n)     ║");
        System.out.println("╚════════════════════════╩════════════════════╝");
        
        System.out.println("\n🎯 Best Practices:");
        System.out.println("✅ Use prime bucket size for better distribution");
        System.out.println("✅ Keep load factor around 0.75");
        System.out.println("✅ Resize when load factor exceeds threshold");
        System.out.println("✅ Use good hash function to minimize collisions");
    }
    
    static void printInterviewTips() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("INTERVIEW TIPS & TRICKS");
        System.out.println("=".repeat(70));
        
        System.out.println("\n💡 Problem-Solving Approach:");
        
        System.out.println("\n1. Clarify requirements:");
        System.out.println("   - Key and value ranges (0 to 10^6)");
        System.out.println("   - Operations needed (put, get, remove)");
        System.out.println("   - Performance expectations");
        
        System.out.println("\n2. Start with simple solution:");
        System.out.println("   - Array of size 10^6");
        System.out.println("   - Mention space issue");
        
        System.out.println("\n3. Optimize with hashing:");
        System.out.println("   - Smaller array (buckets)");
        System.out.println("   - Hash function: key % bucketSize");
        System.out.println("   - Handle collisions with chaining");
        
        System.out.println("\n4. Explain hash table components:");
        System.out.println("   - Buckets (array of linked lists)");
        System.out.println("   - Hash function (maps key to bucket)");
        System.out.println("   - Collision resolution (chaining)");
        
        System.out.println("\n📝 Key Concepts to Mention:");
        System.out.println("✅ Hash function distributes keys uniformly");
        System.out.println("✅ Chaining stores colliding entries");
        System.out.println("✅ Time: O(1) average, O(n) worst case");
        System.out.println("✅ Space: O(bucketSize + n)");
        
        System.out.println("\n🎯 Common Interview Questions:");
        
        System.out.println("\nQ: Why use prime number for bucket size?");
        System.out.println("A: Better key distribution, reduces clustering");
        
        System.out.println("\nQ: How to handle collisions?");
        System.out.println("A: Chaining (linked list) or open addressing (probing)");
        
        System.out.println("\nQ: When to resize hash table?");
        System.out.println("A: When load factor > 0.75, double size and rehash");
        
        System.out.println("\nQ: Difference from HashSet?");
        System.out.println("A: HashMap stores key-value pairs, HashSet only keys");
        
        System.out.println("\n⭐ Best Solution Template:");
        System.out.println("- Array of linked lists (buckets)");
        System.out.println("- Hash function: key % PRIME_SIZE");
        System.out.println("- Node stores (key, value) pair");
        System.out.println("- O(1) average time, O(n) space");
    }
}

// ============================================
// APPROACH 1: ARRAY-BASED HASHMAP
// Time: O(1), Space: O(10^6)
// ============================================
/**
 * Simple Array-Based Implementation
 * 
 * Algorithm:
 * - Use array of size 10^6 + 1
 * - array[key] stores the value
 * - Use -1 to indicate key doesn't exist
 * 
 * Pros:
 * + Very simple
 * + O(1) for all operations
 * 
 * Cons:
 * - Wastes huge memory
 * - Not practical for sparse data
 * 
 * ⚠️ Only for small key ranges
 */
class MyHashMap1 {
    private int[] data;
    private static final int NOT_FOUND = -1;
    
    public MyHashMap1() {
        data = new int[1000001];
        for (int i = 0; i < data.length; i++) {
            data[i] = NOT_FOUND;
        }
    }
    
    public void put(int key, int value) {
        data[key] = value;
    }
    
    public int get(int key) {
        return data[key];
    }
    
    public void remove(int key) {
        data[key] = NOT_FOUND;
    }
}

// ============================================
// APPROACH 2: HASH TABLE WITH CHAINING (BEST)
// Time: O(1) average, Space: O(n)
// ============================================
/**
 * Hash Table with Chaining Implementation
 * 
 * Algorithm:
 * - Array of linked lists (buckets)
 * - Each node stores (key, value) pair
 * - Hash function: key % bucketSize
 * - Collision: add to linked list in same bucket
 * 
 * Structure:
 * buckets[0]: (k1,v1) → (k2,v2) → null
 * buckets[1]: (k3,v3) → null
 * buckets[2]: null
 * ...
 * 
 * Operations:
 * - put(key, value):
 *   1. Find bucket: hash(key)
 *   2. Search list for key
 *   3. If found: update value
 *   4. Else: add new node at head
 * 
 * - get(key):
 *   1. Find bucket: hash(key)
 *   2. Search list for key
 *   3. Return value or -1
 * 
 * - remove(key):
 *   1. Find bucket: hash(key)
 *   2. Search and remove node
 * 
 * Time Complexity:
 * - Average: O(1) - assuming good distribution
 * - Worst: O(n) - all keys in one bucket
 * 
 * Space Complexity: O(bucketSize + n)
 * 
 * ✅ BEST SOLUTION - Balanced time and space
 */
class MyHashMap2 {
    private static final int BUCKET_SIZE = 769;  // Prime number
    private LinkedList[] buckets;
    
    private static class LinkedList {
        Node head;
        
        static class Node {
            int key;
            int value;
            Node next;
            
            Node(int key, int value) {
                this.key = key;
                this.value = value;
            }
        }
        
        void put(int key, int value) {
            // Search for existing key
            Node curr = head;
            while (curr != null) {
                if (curr.key == key) {
                    curr.value = value;  // Update
                    return;
                }
                curr = curr.next;
            }
            
            // Add new node at head
            Node newNode = new Node(key, value);
            newNode.next = head;
            head = newNode;
        }
        
        int get(int key) {
            Node curr = head;
            while (curr != null) {
                if (curr.key == key) {
                    return curr.value;
                }
                curr = curr.next;
            }
            return -1;  // Not found
        }
        
        void remove(int key) {
            if (head == null) return;
            
            // Check head
            if (head.key == key) {
                head = head.next;
                return;
            }
            
            // Check rest
            Node curr = head;
            while (curr.next != null) {
                if (curr.next.key == key) {
                    curr.next = curr.next.next;
                    return;
                }
                curr = curr.next;
            }
        }
    }
    
    public MyHashMap2() {
        buckets = new LinkedList[BUCKET_SIZE];
        for (int i = 0; i < BUCKET_SIZE; i++) {
            buckets[i] = new LinkedList();
        }
    }
    
    private int hash(int key) {
        return key % BUCKET_SIZE;
    }
    
    public void put(int key, int value) {
        int index = hash(key);
        buckets[index].put(key, value);
    }
    
    public int get(int key) {
        int index = hash(key);
        return buckets[index].get(key);
    }
    
    public void remove(int key) {
        int index = hash(key);
        buckets[index].remove(key);
    }
}

// ============================================
// APPROACH 3: OPTIMIZED WITH BETTER HASHING
// Time: O(1) average, Space: O(n)
// ============================================
/**
 * Optimized Hash Table - Two-Level Hashing
 * 
 * Algorithm:
 * - First level: key / 1000 (1000 buckets)
 * - Second level: key % 1000 (sub-buckets)
 * - Reduces collision probability
 * 
 * Example:
 * key = 12345
 * - First hash: 12345 / 1000 = 12
 * - Second hash: 12345 % 1000 = 345
 * - Store at buckets[12][345]
 * 
 * Pros:
 * + Better distribution
 * + Less collisions
 * 
 * Cons:
 * - More complex
 * - Slightly more space
 * 
 * ✅ Good for interview - shows advanced thinking
 */
class MyHashMap3 {
    private static final int BUCKET_COUNT = 1000;
    private static final int SUB_BUCKET_COUNT = 1001;  // Prime
    
    private Integer[][] buckets;
    
    public MyHashMap3() {
        buckets = new Integer[BUCKET_COUNT][];
    }
    
    private int hash1(int key) {
        return key / BUCKET_COUNT;
    }
    
    private int hash2(int key) {
        return key % SUB_BUCKET_COUNT;
    }
    
    public void put(int key, int value) {
        int bucket = hash1(key);
        int subBucket = hash2(key);
        
        // Lazy initialization
        if (buckets[bucket] == null) {
            buckets[bucket] = new Integer[SUB_BUCKET_COUNT];
        }
        
        buckets[bucket][subBucket] = value;
    }
    
    public int get(int key) {
        int bucket = hash1(key);
        int subBucket = hash2(key);
        
        if (buckets[bucket] == null) {
            return -1;
        }
        
        Integer value = buckets[bucket][subBucket];
        return value == null ? -1 : value;
    }
    
    public void remove(int key) {
        int bucket = hash1(key);
        int subBucket = hash2(key);
        
        if (buckets[bucket] != null) {
            buckets[bucket][subBucket] = null;
        }
    }
}
