# 🚀 **DAY 6: HASHING FUNDAMENTALS & JAVA COLLECTIONS**
## Complete Study Plan for Day 6 of 90-Day Placement Preparation

---

## 📅 **DAY 6 OVERVIEW**
**Date**: December 6, 2025  
**Focus**: Hashing Techniques + Java Collections Framework  
**Total Study Time**: 9 hours  
**Target**: Master hash-based data structures and efficient lookup operations  

---

## 🕐 **MORNING SESSION (6:00 AM - 9:00 AM)**

### **6:00 AM - 7:30 AM: DSA - Hashing Theory & Implementation (1.5 hours)**

#### 📚 **Learning Objectives**
- Understand hash functions and collision resolution
- Learn when to use hashing for O(1) lookups
- Master HashMap, HashSet implementation patterns
- Analyze space-time tradeoffs in hashing

#### **Study Resources**
- **GeeksforGeeks**: [Hashing Data Structure](https://www.geeksforgeeks.org/hashing-data-structure/)
- **Video**: [Hashing Concepts by Abdul Bari](https://www.youtube.com/watch?v=KyUTuwz_b7Q) (25 min)
- **Video**: [HashMap Internal Working](https://www.youtube.com/watch?v=c3RVW3KGIIE) (20 min)

**📝 Key Concepts:**
```
✅ Hash Function:
   - Converts key to array index
   - Should be deterministic
   - Should minimize collisions
   - Example: h(key) = key % table_size

✅ Collision Resolution:
   1. Chaining (Linked List at each index)
   2. Open Addressing (Linear/Quadratic Probing)
   3. Double Hashing

✅ Time Complexity:
   - Insert: O(1) average, O(n) worst case
   - Search: O(1) average, O(n) worst case
   - Delete: O(1) average, O(n) worst case

✅ Load Factor:
   - λ = n / m (elements / buckets)
   - Java HashMap default: 0.75
   - Rehashing when load factor exceeded
```

**Basic Hash Table Implementation:**
```java
import java.util.*;

class HashTable {
    private class Entry {
        int key;
        String value;
        Entry next;
        
        Entry(int key, String value) {
            this.key = key;
            this.value = value;
            this.next = null;
        }
    }
    
    private Entry[] buckets;
    private int capacity;
    private int size;
    private static final float LOAD_FACTOR = 0.75f;
    
    public HashTable(int capacity) {
        this.capacity = capacity;
        this.buckets = new Entry[capacity];
        this.size = 0;
    }
    
    // Hash function
    private int hash(int key) {
        return Math.abs(key) % capacity;
    }
    
    // Put operation
    public void put(int key, String value) {
        if ((float)size / capacity >= LOAD_FACTOR) {
            resize();
        }
        
        int index = hash(key);
        Entry head = buckets[index];
        
        // Check if key exists, update value
        Entry current = head;
        while (current != null) {
            if (current.key == key) {
                current.value = value;
                return;
            }
            current = current.next;
        }
        
        // Add new entry at beginning (chaining)
        Entry newEntry = new Entry(key, value);
        newEntry.next = head;
        buckets[index] = newEntry;
        size++;
    }
    
    // Get operation
    public String get(int key) {
        int index = hash(key);
        Entry current = buckets[index];
        
        while (current != null) {
            if (current.key == key) {
                return current.value;
            }
            current = current.next;
        }
        return null;  // Key not found
    }
    
    // Remove operation
    public void remove(int key) {
        int index = hash(key);
        Entry current = buckets[index];
        Entry prev = null;
        
        while (current != null) {
            if (current.key == key) {
                if (prev == null) {
                    buckets[index] = current.next;
                } else {
                    prev.next = current.next;
                }
                size--;
                return;
            }
            prev = current;
            current = current.next;
        }
    }
    
    // Resize and rehash
    private void resize() {
        Entry[] oldBuckets = buckets;
        capacity *= 2;
        buckets = new Entry[capacity];
        size = 0;
        
        for (Entry head : oldBuckets) {
            Entry current = head;
            while (current != null) {
                put(current.key, current.value);
                current = current.next;
            }
        }
    }
    
    public int size() {
        return size;
    }
    
    public boolean containsKey(int key) {
        return get(key) != null;
    }
}
```

**🎯 Practice Questions:**
```
1. How does Java HashMap handle collisions?
2. What happens when load factor exceeds 0.75?
3. Why is rehashing necessary?
4. When to use HashMap vs TreeMap vs LinkedHashMap?
```

---

### **7:30 AM - 9:00 AM: Java Collections Framework Deep Dive (1.5 hours)**

#### 📚 **Learning Objectives**
- Master Java Collections hierarchy
- Understand List, Set, Map interfaces
- Learn when to use ArrayList vs LinkedList
- Implement HashMap and HashSet operations

#### **Study Resources**
- **Oracle Docs**: [Java Collections Tutorial](https://docs.oracle.com/javase/tutorial/collections/)
- **Video**: [Collections Framework by Telusko](https://www.youtube.com/watch?v=rzA7UJ-hQn4) (30 min)
- **GeeksforGeeks**: [Java Collections Framework](https://www.geeksforgeeks.org/collections-in-java-2/)

**📝 Collections Hierarchy:**
```
Collection Interface
├── List Interface (Ordered, Allows Duplicates)
│   ├── ArrayList (Dynamic Array)
│   ├── LinkedList (Doubly Linked List)
│   └── Vector (Synchronized ArrayList)
│
├── Set Interface (No Duplicates)
│   ├── HashSet (Unordered, O(1) operations)
│   ├── LinkedHashSet (Insertion order maintained)
│   └── TreeSet (Sorted, O(log n) operations)
│
└── Queue Interface (FIFO)
    ├── PriorityQueue (Heap-based)
    └── Deque (Double-ended queue)

Map Interface (Key-Value Pairs)
├── HashMap (Unordered, O(1) operations)
├── LinkedHashMap (Insertion order maintained)
├── TreeMap (Sorted by keys, O(log n))
└── Hashtable (Synchronized HashMap - Legacy)
```

**🔵 ArrayList vs LinkedList:**
```java
import java.util.*;

class ListComparison {
    public static void main(String[] args) {
        // ArrayList - Dynamic array implementation
        List<String> arrayList = new ArrayList<>();
        arrayList.add("Apple");      // O(1) amortized
        arrayList.add("Banana");
        arrayList.add("Cherry");
        arrayList.get(0);            // O(1) access
        arrayList.remove(1);         // O(n) removal
        
        // ArrayList Best For:
        // ✅ Random access
        // ✅ Iteration
        // ❌ Frequent insertions/deletions in middle
        
        // LinkedList - Doubly linked list implementation
        List<String> linkedList = new LinkedList<>();
        linkedList.add("Apple");     // O(1) at ends
        linkedList.add("Banana");
        linkedList.get(0);           // O(n) access
        linkedList.remove(1);        // O(n) removal
        
        // LinkedList Best For:
        // ✅ Frequent insertions/deletions
        // ✅ Queue/Deque operations
        // ❌ Random access
        
        System.out.println("ArrayList: " + arrayList);
        System.out.println("LinkedList: " + linkedList);
    }
}
```

**🔵 HashMap Deep Dive:**
```java
import java.util.*;

class HashMapOperations {
    public static void main(String[] args) {
        // Creating HashMap
        Map<String, Integer> map = new HashMap<>();
        
        // Basic Operations
        map.put("Alice", 25);         // O(1) insert
        map.put("Bob", 30);
        map.put("Charlie", 35);
        
        // Accessing elements
        int age = map.get("Alice");   // O(1) retrieval
        System.out.println("Alice's age: " + age);
        
        // Check existence
        boolean hasKey = map.containsKey("Bob");        // O(1)
        boolean hasValue = map.containsValue(30);       // O(n)
        
        // Remove element
        map.remove("Charlie");        // O(1)
        
        // Size and empty check
        int size = map.size();
        boolean isEmpty = map.isEmpty();
        
        // Iteration Methods
        
        // Method 1: Using entrySet() - MOST EFFICIENT
        System.out.println("\n1. Using entrySet():");
        for (Map.Entry<String, Integer> entry : map.entrySet()) {
            System.out.println(entry.getKey() + " -> " + entry.getValue());
        }
        
        // Method 2: Using keySet()
        System.out.println("\n2. Using keySet():");
        for (String key : map.keySet()) {
            System.out.println(key + " -> " + map.get(key));
        }
        
        // Method 3: Using values()
        System.out.println("\n3. Using values():");
        for (Integer value : map.values()) {
            System.out.println("Value: " + value);
        }
        
        // Method 4: Using forEach() - Java 8+
        System.out.println("\n4. Using forEach():");
        map.forEach((key, value) -> 
            System.out.println(key + " -> " + value)
        );
        
        // Advanced Operations
        map.putIfAbsent("David", 40);  // Only if key doesn't exist
        map.getOrDefault("Eve", 0);    // Default value if key absent
        map.replace("Alice", 26);      // Replace existing value
        
        // Compute methods
        map.computeIfAbsent("Frank", k -> k.length() * 10);
        map.computeIfPresent("Alice", (k, v) -> v + 1);
        map.compute("Bob", (k, v) -> v == null ? 1 : v + 1);
        
        // Merge method
        map.merge("Alice", 1, (oldVal, newVal) -> oldVal + newVal);
    }
}
```

**🔵 HashSet Operations:**
```java
import java.util.*;

class HashSetOperations {
    public static void main(String[] args) {
        // Creating HashSet
        Set<Integer> set = new HashSet<>();
        
        // Adding elements
        set.add(10);          // O(1)
        set.add(20);
        set.add(30);
        set.add(10);          // Duplicate - won't be added
        
        System.out.println("Set: " + set);  // [10, 20, 30]
        
        // Check existence
        boolean contains = set.contains(20);  // O(1)
        
        // Remove element
        set.remove(20);       // O(1)
        
        // Size
        int size = set.size();
        
        // Iteration
        for (int num : set) {
            System.out.println(num);
        }
        
        // Set operations
        Set<Integer> set1 = new HashSet<>(Arrays.asList(1, 2, 3, 4));
        Set<Integer> set2 = new HashSet<>(Arrays.asList(3, 4, 5, 6));
        
        // Union
        Set<Integer> union = new HashSet<>(set1);
        union.addAll(set2);
        System.out.println("Union: " + union);  // [1, 2, 3, 4, 5, 6]
        
        // Intersection
        Set<Integer> intersection = new HashSet<>(set1);
        intersection.retainAll(set2);
        System.out.println("Intersection: " + intersection);  // [3, 4]
        
        // Difference
        Set<Integer> difference = new HashSet<>(set1);
        difference.removeAll(set2);
        System.out.println("Difference: " + difference);  // [1, 2]
    }
}
```

**Collections Utility Methods:**
```java
import java.util.*;

class CollectionsUtility {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>(Arrays.asList(5, 2, 8, 1, 9));
        
        // Sorting
        Collections.sort(list);                    // Ascending
        Collections.sort(list, Collections.reverseOrder());  // Descending
        
        // Searching
        int index = Collections.binarySearch(list, 5);  // List must be sorted
        
        // Shuffling
        Collections.shuffle(list);
        
        // Reversing
        Collections.reverse(list);
        
        // Min and Max
        int min = Collections.min(list);
        int max = Collections.max(list);
        
        // Frequency
        int frequency = Collections.frequency(list, 5);
        
        // Fill
        Collections.fill(list, 0);  // Fill with 0
        
        // Copy
        List<Integer> dest = new ArrayList<>(Collections.nCopies(list.size(), 0));
        Collections.copy(dest, list);
    }
}
```

---

## 🌅 **AFTERNOON SESSION (2:00 PM - 5:00 PM)**

### **2:00 PM - 3:30 PM: HashMap Implementation & LeetCode Practice (1.5 hours)**

#### 🎯 **Problem 1: Two Sum (Using HashMap)**
**LeetCode #1** | **Difficulty**: Easy | **Time**: 20 min

**Problem Statement:**
```
Given an array of integers nums and an integer target, return indices 
of the two numbers such that they add up to target.

Example:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: nums[0] + nums[1] == 9, so return [0, 1]
```

**Solution with HashMap:**
```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        // HashMap to store: value -> index
        Map<Integer, Integer> map = new HashMap<>();
        
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            
            // Check if complement exists in map
            if (map.containsKey(complement)) {
                return new int[] {map.get(complement), i};
            }
            
            // Add current number to map
            map.put(nums[i], i);
        }
        
        return new int[] {};  // No solution found
    }
}

// Time Complexity: O(n)
// Space Complexity: O(n)
```

**Dry Run:**
```
nums = [2, 7, 11, 15], target = 9

i=0: nums[0]=2, complement=7
     map is empty, add {2: 0}
     
i=1: nums[1]=7, complement=2
     map.containsKey(2)=true
     return [0, 1] ✓
```

---

#### 🎯 **Problem 2: Contains Duplicate II**
**LeetCode #219** | **Difficulty**: Easy | **Time**: 20 min

**Problem Statement:**
```
Given an array of integers and an integer k, return true if there are 
two distinct indices i and j such that nums[i] == nums[j] and 
abs(i - j) <= k.

Example:
Input: nums = [1,2,3,1], k = 3
Output: true
```

**Solution:**
```java
class Solution {
    public boolean containsNearbyDuplicate(int[] nums, int k) {
        // HashMap: value -> most recent index
        Map<Integer, Integer> map = new HashMap<>();
        
        for (int i = 0; i < nums.length; i++) {
            // If number seen before
            if (map.containsKey(nums[i])) {
                int prevIndex = map.get(nums[i]);
                
                // Check if within k distance
                if (i - prevIndex <= k) {
                    return true;
                }
            }
            
            // Update most recent index
            map.put(nums[i], i);
        }
        
        return false;
    }
}

// Time Complexity: O(n)
// Space Complexity: O(min(n, k))
```

**Alternative Solution (Using HashSet - Sliding Window):**
```java
class Solution {
    public boolean containsNearbyDuplicate(int[] nums, int k) {
        Set<Integer> window = new HashSet<>();
        
        for (int i = 0; i < nums.length; i++) {
            // If duplicate in current window
            if (window.contains(nums[i])) {
                return true;
            }
            
            // Add current element
            window.add(nums[i]);
            
            // Maintain window size of k
            if (window.size() > k) {
                window.remove(nums[i - k]);
            }
        }
        
        return false;
    }
}

// Time Complexity: O(n)
// Space Complexity: O(min(n, k))
```

---

#### 🎯 **Problem 3: Happy Number**
**LeetCode #202** | **Difficulty**: Easy | **Time**: 25 min

**Problem Statement:**
```
A happy number is defined as:
- Starting with any positive integer, replace the number by the sum of 
  the squares of its digits.
- Repeat until the number equals 1 (happy), or loops endlessly in a cycle.

Example:
Input: n = 19
Output: true

19 → 1² + 9² = 82
82 → 8² + 2² = 68
68 → 6² + 8² = 100
100 → 1² + 0² + 0² = 1 ✓
```

**Solution:**
```java
class Solution {
    public boolean isHappy(int n) {
        // HashSet to detect cycles
        Set<Integer> seen = new HashSet<>();
        
        while (n != 1 && !seen.contains(n)) {
            seen.add(n);
            n = getNext(n);
        }
        
        return n == 1;
    }
    
    private int getNext(int n) {
        int totalSum = 0;
        
        while (n > 0) {
            int digit = n % 10;
            totalSum += digit * digit;
            n /= 10;
        }
        
        return totalSum;
    }
}

// Time Complexity: O(log n) - limited by number of digits
// Space Complexity: O(log n) - for the set
```

**Floyd's Cycle Detection (Space Optimized):**
```java
class Solution {
    public boolean isHappy(int n) {
        int slow = n;
        int fast = getNext(n);
        
        // Floyd's cycle detection
        while (fast != 1 && slow != fast) {
            slow = getNext(slow);
            fast = getNext(getNext(fast));
        }
        
        return fast == 1;
    }
    
    private int getNext(int n) {
        int totalSum = 0;
        while (n > 0) {
            int digit = n % 10;
            totalSum += digit * digit;
            n /= 10;
        }
        return totalSum;
    }
}

// Time Complexity: O(log n)
// Space Complexity: O(1) - No extra space!
```

---

#### 🎯 **Problem 4: Group Anagrams**
**LeetCode #49** | **Difficulty**: Medium | **Time**: 25 min

**Problem Statement:**
```
Given an array of strings, group anagrams together.

Example:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
```

**Solution:**
```java
class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        // HashMap: sorted string -> list of anagrams
        Map<String, List<String>> map = new HashMap<>();
        
        for (String str : strs) {
            // Sort string to use as key
            char[] chars = str.toCharArray();
            Arrays.sort(chars);
            String key = new String(chars);
            
            // Add to corresponding group
            if (!map.containsKey(key)) {
                map.put(key, new ArrayList<>());
            }
            map.get(key).add(str);
        }
        
        // Return all groups
        return new ArrayList<>(map.values());
    }
}

// Time Complexity: O(n * k log k) where n = strs.length, k = max string length
// Space Complexity: O(n * k)
```

**Optimized Solution (Character Count as Key):**
```java
class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> map = new HashMap<>();
        
        for (String str : strs) {
            // Create character count array
            int[] count = new int[26];
            for (char c : str.toCharArray()) {
                count[c - 'a']++;
            }
            
            // Convert count array to key
            StringBuilder keyBuilder = new StringBuilder();
            for (int i = 0; i < 26; i++) {
                if (count[i] > 0) {
                    keyBuilder.append((char)('a' + i));
                    keyBuilder.append(count[i]);
                }
            }
            String key = keyBuilder.toString();
            
            // Add to group
            map.computeIfAbsent(key, k -> new ArrayList<>()).add(str);
        }
        
        return new ArrayList<>(map.values());
    }
}

// Time Complexity: O(n * k) - Better than sorting!
// Space Complexity: O(n * k)
```

---

### **3:30 PM - 5:00 PM: Java Exception Handling & Advanced Problems (1.5 hours)**

#### 📚 **Java Exception Handling**

**Exception Hierarchy:**
```
Throwable
├── Error (JVM errors - not caught)
│   ├── OutOfMemoryError
│   ├── StackOverflowError
│   └── VirtualMachineError
│
└── Exception
    ├── RuntimeException (Unchecked)
    │   ├── NullPointerException
    │   ├── ArrayIndexOutOfBoundsException
    │   ├── ArithmeticException
    │   └── IllegalArgumentException
    │
    └── IOException (Checked)
        ├── FileNotFoundException
        ├── SQLException
        └── ClassNotFoundException
```

**Basic Exception Handling:**
```java
public class ExceptionHandlingBasics {
    public static void main(String[] args) {
        // try-catch block
        try {
            int result = 10 / 0;  // ArithmeticException
        } catch (ArithmeticException e) {
            System.out.println("Error: Division by zero");
            System.out.println("Message: " + e.getMessage());
            e.printStackTrace();
        }
        
        // Multiple catch blocks
        try {
            int[] arr = new int[5];
            arr[10] = 50;  // ArrayIndexOutOfBoundsException
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Array index out of bounds");
        } catch (Exception e) {
            System.out.println("Generic exception");
        }
        
        // try-catch-finally
        try {
            System.out.println("Try block");
            int result = 10 / 2;
        } catch (Exception e) {
            System.out.println("Catch block");
        } finally {
            System.out.println("Finally always executes");
            // Used for cleanup: close files, connections
        }
    }
}
```

**Throwing Exceptions:**
```java
public class ThrowingExceptions {
    // Method that throws checked exception
    public static void readFile(String filename) throws IOException {
        if (filename == null) {
            throw new IllegalArgumentException("Filename cannot be null");
        }
        // File reading logic...
    }
    
    // Custom exception
    static class InvalidAgeException extends Exception {
        public InvalidAgeException(String message) {
            super(message);
        }
    }
    
    public static void validateAge(int age) throws InvalidAgeException {
        if (age < 0 || age > 150) {
            throw new InvalidAgeException("Invalid age: " + age);
        }
    }
    
    public static void main(String[] args) {
        try {
            validateAge(200);
        } catch (InvalidAgeException e) {
            System.out.println(e.getMessage());
        }
    }
}
```

**Try-with-resources (Java 7+):**
```java
import java.io.*;

public class TryWithResources {
    public static void main(String[] args) {
        // Automatically closes resources
        try (BufferedReader br = new BufferedReader(new FileReader("file.txt"))) {
            String line;
            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        // No need for finally block to close reader!
    }
}
```

---

#### 🎯 **Problem 5: Longest Consecutive Sequence**
**LeetCode #128** | **Difficulty**: Medium | **Time**: 30 min

**Problem Statement:**
```
Given an unsorted array of integers, find the length of the longest 
consecutive elements sequence.

Example:
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive sequence is [1, 2, 3, 4]
```

**Solution:**
```java
class Solution {
    public int longestConsecutive(int[] nums) {
        if (nums.length == 0) return 0;
        
        // Add all numbers to HashSet for O(1) lookup
        Set<Integer> numSet = new HashSet<>();
        for (int num : nums) {
            numSet.add(num);
        }
        
        int maxLength = 0;
        
        // Check each number
        for (int num : numSet) {
            // Only start counting if this is the beginning of a sequence
            if (!numSet.contains(num - 1)) {
                int currentNum = num;
                int currentLength = 1;
                
                // Count consecutive numbers
                while (numSet.contains(currentNum + 1)) {
                    currentNum++;
                    currentLength++;
                }
                
                maxLength = Math.max(maxLength, currentLength);
            }
        }
        
        return maxLength;
    }
}

// Time Complexity: O(n)
// Space Complexity: O(n)
```

**Dry Run:**
```
nums = [100, 4, 200, 1, 3, 2]
numSet = {100, 4, 200, 1, 3, 2}

num = 100: no 99, start sequence → 100 (length 1)
num = 4: has 3, skip (not start)
num = 200: no 199, start sequence → 200 (length 1)
num = 1: no 0, start sequence → 1,2,3,4 (length 4) ✓
num = 3: has 2, skip
num = 2: has 1, skip

maxLength = 4
```

---

#### 🎯 **Problem 6: Subarray Sum Equals K**
**LeetCode #560** | **Difficulty**: Medium | **Time**: 30 min

**Problem Statement:**
```
Given an array of integers and an integer k, return the total number 
of subarrays whose sum equals k.

Example:
Input: nums = [1,1,1], k = 2
Output: 2
Explanation: Subarrays [1,1] appear twice
```

**Solution using HashMap (Prefix Sum):**
```java
class Solution {
    public int subarraySum(int[] nums, int k) {
        // HashMap: prefix sum -> frequency
        Map<Integer, Integer> prefixSumCount = new HashMap<>();
        prefixSumCount.put(0, 1);  // Base case: sum 0 occurs once
        
        int currentSum = 0;
        int count = 0;
        
        for (int num : nums) {
            currentSum += num;
            
            // Check if (currentSum - k) exists
            // If yes, we found subarray(s) with sum k
            int target = currentSum - k;
            if (prefixSumCount.containsKey(target)) {
                count += prefixSumCount.get(target);
            }
            
            // Add current sum to map
            prefixSumCount.put(currentSum, 
                prefixSumCount.getOrDefault(currentSum, 0) + 1);
        }
        
        return count;
    }
}

// Time Complexity: O(n)
// Space Complexity: O(n)
```

**Explanation:**
```
If currentSum - k exists in map, it means:
  sum[0...i] - sum[0...j] = k
  → sum[j+1...i] = k

Example: nums = [1, 2, 3], k = 3

i=0: num=1, sum=1
     target = 1-3 = -2 (not in map)
     map = {0:1, 1:1}

i=1: num=2, sum=3
     target = 3-3 = 0 (in map! count++)
     map = {0:1, 1:1, 3:1}
     
i=2: num=3, sum=6
     target = 6-3 = 3 (in map! count++)
     map = {0:1, 1:1, 3:1, 6:1}

count = 2 (subarrays: [1,2] and [3])
```

---

## 🌆 **EVENING SESSION (7:00 PM - 10:00 PM)**

### **7:00 PM - 8:30 PM: Advanced Hashing Problems (1.5 hours)**

#### 🎯 **Problem 7: Top K Frequent Elements**
**LeetCode #347** | **Difficulty**: Medium | **Time**: 25 min

**Problem Statement:**
```
Given an integer array nums and an integer k, return the k most 
frequent elements.

Example:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
```

**Solution 1: HashMap + Heap:**
```java
class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        // Count frequencies
        Map<Integer, Integer> freqMap = new HashMap<>();
        for (int num : nums) {
            freqMap.put(num, freqMap.getOrDefault(num, 0) + 1);
        }
        
        // Min heap based on frequency
        PriorityQueue<Integer> heap = new PriorityQueue<>(
            (a, b) -> freqMap.get(a) - freqMap.get(b)
        );
        
        // Keep k elements in heap
        for (int num : freqMap.keySet()) {
            heap.offer(num);
            if (heap.size() > k) {
                heap.poll();
            }
        }
        
        // Extract elements from heap
        int[] result = new int[k];
        for (int i = 0; i < k; i++) {
            result[i] = heap.poll();
        }
        
        return result;
    }
}

// Time Complexity: O(n log k)
// Space Complexity: O(n)
```

**Solution 2: Bucket Sort (Optimal):**
```java
class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        // Count frequencies
        Map<Integer, Integer> freqMap = new HashMap<>();
        for (int num : nums) {
            freqMap.put(num, freqMap.getOrDefault(num, 0) + 1);
        }
        
        // Bucket sort: index = frequency
        List<Integer>[] buckets = new List[nums.length + 1];
        for (int i = 0; i <= nums.length; i++) {
            buckets[i] = new ArrayList<>();
        }
        
        // Place numbers in buckets
        for (int num : freqMap.keySet()) {
            int freq = freqMap.get(num);
            buckets[freq].add(num);
        }
        
        // Collect top k from highest frequency
        int[] result = new int[k];
        int index = 0;
        
        for (int i = buckets.length - 1; i >= 0 && index < k; i--) {
            for (int num : buckets[i]) {
                result[index++] = num;
                if (index == k) return result;
            }
        }
        
        return result;
    }
}

// Time Complexity: O(n)
// Space Complexity: O(n)
```

---

#### 🎯 **Problem 8: Valid Sudoku**
**LeetCode #36** | **Difficulty**: Medium | **Time**: 30 min

**Problem Statement:**
```
Determine if a 9x9 Sudoku board is valid.

Rules:
1. Each row must contain digits 1-9 without repetition
2. Each column must contain digits 1-9 without repetition
3. Each 3x3 sub-box must contain digits 1-9 without repetition
```

**Solution:**
```java
class Solution {
    public boolean isValidSudoku(char[][] board) {
        // HashSets to track seen numbers
        Set<String> seen = new HashSet<>();
        
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                char num = board[i][j];
                
                if (num != '.') {
                    // Create unique identifiers
                    String row = num + " in row " + i;
                    String col = num + " in col " + j;
                    String box = num + " in box " + (i/3) + "-" + (j/3);
                    
                    // Check if already seen
                    if (!seen.add(row) || !seen.add(col) || !seen.add(box)) {
                        return false;
                    }
                }
            }
        }
        
        return true;
    }
}

// Time Complexity: O(1) - Fixed 9x9 board
// Space Complexity: O(1) - Fixed size set
```

**Alternative Solution (Using Arrays):**
```java
class Solution {
    public boolean isValidSudoku(char[][] board) {
        // Track seen numbers using boolean arrays
        boolean[][] rows = new boolean[9][9];
        boolean[][] cols = new boolean[9][9];
        boolean[][] boxes = new boolean[9][9];
        
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                if (board[i][j] != '.') {
                    int num = board[i][j] - '1';  // Convert to 0-8
                    int boxIndex = (i / 3) * 3 + (j / 3);
                    
                    if (rows[i][num] || cols[j][num] || boxes[boxIndex][num]) {
                        return false;
                    }
                    
                    rows[i][num] = true;
                    cols[j][num] = true;
                    boxes[boxIndex][num] = true;
                }
            }
        }
        
        return true;
    }
}
```

---

#### 🎯 **Problem 9: Isomorphic Strings**
**LeetCode #205** | **Difficulty**: Easy | **Time**: 20 min

**Problem Statement:**
```
Two strings are isomorphic if characters in s can be replaced to get t.

Example:
Input: s = "egg", t = "add"
Output: true

Input: s = "foo", t = "bar"
Output: false
```

**Solution:**
```java
class Solution {
    public boolean isIsomorphic(String s, String t) {
        if (s.length() != t.length()) return false;
        
        // Two maps for bidirectional mapping
        Map<Character, Character> sToT = new HashMap<>();
        Map<Character, Character> tToS = new HashMap<>();
        
        for (int i = 0; i < s.length(); i++) {
            char c1 = s.charAt(i);
            char c2 = t.charAt(i);
            
            // Check s -> t mapping
            if (sToT.containsKey(c1)) {
                if (sToT.get(c1) != c2) {
                    return false;
                }
            } else {
                sToT.put(c1, c2);
            }
            
            // Check t -> s mapping
            if (tToS.containsKey(c2)) {
                if (tToS.get(c2) != c1) {
                    return false;
                }
            } else {
                tToS.put(c2, c1);
            }
        }
        
        return true;
    }
}

// Time Complexity: O(n)
// Space Complexity: O(1) - At most 256 characters
```

---

### **8:30 PM - 9:30 PM: SQL Basics & Joins (1 hour)**

#### 📚 **SQL Fundamentals**

**DDL (Data Definition Language):**
```sql
-- CREATE: Create new table
CREATE TABLE Students (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    age INT,
    email VARCHAR(100) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ALTER: Modify table structure
ALTER TABLE Students ADD COLUMN phone VARCHAR(15);
ALTER TABLE Students DROP COLUMN age;
ALTER TABLE Students MODIFY COLUMN name VARCHAR(100);

-- DROP: Delete table
DROP TABLE Students;

-- TRUNCATE: Delete all rows (faster than DELETE)
TRUNCATE TABLE Students;
```

**DML (Data Manipulation Language):**
```sql
-- INSERT: Add new rows
INSERT INTO Students (id, name, email) 
VALUES (1, 'Alice', 'alice@email.com');

INSERT INTO Students (id, name, email) VALUES 
    (2, 'Bob', 'bob@email.com'),
    (3, 'Charlie', 'charlie@email.com');

-- UPDATE: Modify existing rows
UPDATE Students 
SET email = 'newalice@email.com' 
WHERE id = 1;

-- DELETE: Remove rows
DELETE FROM Students WHERE id = 3;

-- SELECT: Retrieve data
SELECT * FROM Students;
SELECT name, email FROM Students WHERE id > 1;
```

**Basic Queries:**
```sql
-- WHERE clause
SELECT * FROM Students WHERE age > 20;
SELECT * FROM Students WHERE name LIKE 'A%';
SELECT * FROM Students WHERE age BETWEEN 18 AND 25;
SELECT * FROM Students WHERE email IN ('alice@email.com', 'bob@email.com');

-- ORDER BY
SELECT * FROM Students ORDER BY name ASC;
SELECT * FROM Students ORDER BY age DESC, name ASC;

-- LIMIT
SELECT * FROM Students LIMIT 10;
SELECT * FROM Students LIMIT 10 OFFSET 20;  -- Skip first 20

-- DISTINCT
SELECT DISTINCT age FROM Students;

-- Aggregate Functions
SELECT COUNT(*) FROM Students;
SELECT AVG(age) FROM Students;
SELECT MAX(age), MIN(age) FROM Students;
SELECT SUM(salary) FROM Employees;

-- GROUP BY
SELECT age, COUNT(*) as count 
FROM Students 
GROUP BY age;

SELECT department, AVG(salary) as avg_salary
FROM Employees
GROUP BY department
HAVING AVG(salary) > 50000;
```

**SQL Joins:**
```sql
-- Sample Tables
CREATE TABLE Employees (
    emp_id INT PRIMARY KEY,
    name VARCHAR(50),
    dept_id INT
);

CREATE TABLE Departments (
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(50)
);

-- INNER JOIN: Returns matching rows from both tables
SELECT e.name, d.dept_name
FROM Employees e
INNER JOIN Departments d ON e.dept_id = d.dept_id;

-- LEFT JOIN: All rows from left table + matching from right
SELECT e.name, d.dept_name
FROM Employees e
LEFT JOIN Departments d ON e.dept_id = d.dept_id;

-- RIGHT JOIN: All rows from right table + matching from left
SELECT e.name, d.dept_name
FROM Employees e
RIGHT JOIN Departments d ON e.dept_id = d.dept_id;

-- FULL OUTER JOIN: All rows from both tables
SELECT e.name, d.dept_name
FROM Employees e
FULL OUTER JOIN Departments d ON e.dept_id = d.dept_id;

-- CROSS JOIN: Cartesian product
SELECT e.name, d.dept_name
FROM Employees e
CROSS JOIN Departments d;

-- SELF JOIN
SELECT e1.name as Employee, e2.name as Manager
FROM Employees e1
JOIN Employees e2 ON e1.manager_id = e2.emp_id;
```

---

### **9:30 PM - 10:00 PM: Review & Progress Tracking (30 min)**

#### ✅ **Daily Achievement Checklist**

**DSA Progress:**
- [ ] Hashing concepts and collision resolution understood
- [ ] Hash table implementation completed
- [ ] HashMap vs HashSet usage clear
- [ ] 9 LeetCode problems solved:
  - [ ] Two Sum (HashMap approach)
  - [ ] Contains Duplicate II
  - [ ] Happy Number
  - [ ] Group Anagrams
  - [ ] Longest Consecutive Sequence
  - [ ] Subarray Sum Equals K
  - [ ] Top K Frequent Elements
  - [ ] Valid Sudoku
  - [ ] Isomorphic Strings

**Java Progress:**
- [ ] Collections Framework hierarchy learned
- [ ] ArrayList vs LinkedList comparison done
- [ ] HashMap implementation and methods mastered
- [ ] HashSet operations practiced
- [ ] Exception handling basics covered
- [ ] try-catch-finally blocks understood
- [ ] Custom exceptions created

**Database Progress:**
- [ ] SQL DDL commands (CREATE, ALTER, DROP) learned
- [ ] SQL DML commands (INSERT, UPDATE, DELETE) practiced
- [ ] Basic queries with WHERE, ORDER BY mastered
- [ ] Aggregate functions (COUNT, AVG, MAX, MIN, SUM) used
- [ ] GROUP BY and HAVING clauses understood
- [ ] SQL Joins (INNER, LEFT, RIGHT, FULL) learned

---

#### 📊 **Performance Metrics**

**Time Complexity Mastery:**
```
✅ Hash Table Operations: O(1) average case
✅ Two Sum with HashMap: O(n) vs O(n²) brute force
✅ Longest Consecutive: O(n) with HashSet
✅ Top K Frequent: O(n) with bucket sort
```

**Code Quality Checklist:**
- [ ] Proper variable naming conventions used
- [ ] Code commented for clarity
- [ ] Edge cases handled (null, empty arrays)
- [ ] Time/space complexity analyzed
- [ ] Alternative solutions considered

---

#### 📝 **Key Takeaways**

1. **When to Use Hashing:**
   - Need O(1) lookup/insertion
   - Checking duplicates
   - Frequency counting
   - Two-element problems (Two Sum pattern)

2. **HashMap vs HashSet:**
   - HashMap: Key-value pairs, use when tracking associations
   - HashSet: Unique elements only, use for membership tests

3. **Collections Framework:**
   - List: When order matters and duplicates allowed
   - Set: When uniqueness matters
   - Map: When key-value associations needed

4. **Exception Handling:**
   - Use specific exceptions over generic Exception
   - Always clean up resources in finally or try-with-resources
   - Create custom exceptions for domain-specific errors

5. **SQL Basics:**
   - DDL for structure, DML for data
   - Joins to combine related data
   - Aggregate functions for analytics

---

#### 🎯 **Tomorrow's Preview: Day 7**
**Focus**: Linked List Fundamentals + Java Generics

**Topics:**
- Singly Linked List implementation
- Doubly Linked List
- Fast & Slow pointer technique
- Java Generics and Type Parameters
- SQL Subqueries and Advanced Joins

**Problems to Prepare:**
- Reverse Linked List
- Detect Cycle in Linked List
- Merge Two Sorted Lists
- Remove Nth Node From End

---

#### 💡 **Study Tips for Tomorrow**

1. **Visualization**: Draw linked list diagrams while solving
2. **Pointer Practice**: Focus on pointer manipulation carefully
3. **Edge Cases**: Empty list, single node, two nodes
4. **Generics**: Understand type safety and type erasure

---

## 📚 **Additional Resources**

### **Video Resources:**
1. [HashMap Internal Working](https://www.youtube.com/watch?v=c3RVW3KGIIE) - Tech Dose
2. [Hashing Complete Playlist](https://www.youtube.com/playlist?list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma) - Striver
3. [Java Collections Framework](https://www.youtube.com/watch?v=rzA7UJ-hQn4) - Telusko
4. [Exception Handling in Java](https://www.youtube.com/watch?v=1XAfapkBQjk) - Telusko

### **Reading Materials:**
1. [Java Collections Tutorial](https://docs.oracle.com/javase/tutorial/collections/)
2. [Hashing - GeeksforGeeks](https://www.geeksforgeeks.org/hashing-data-structure/)
3. [HashMap vs Hashtable vs ConcurrentHashMap](https://www.geeksforgeeks.org/differences-between-hashmap-and-hashtable-in-java/)
4. [SQL Tutorial - W3Schools](https://www.w3schools.com/sql/)

### **Practice Platforms:**
1. **LeetCode**: Hash Table tag - 150+ problems
2. **HackerRank**: Java Collections & SQL challenges
3. **InterviewBit**: Hashing section
4. **SQLZoo**: Interactive SQL tutorials

---

## 🎓 **Self-Assessment Questions**

1. What is the time complexity of HashMap operations in worst case?
2. How does Java HashMap handle collisions?
3. When would you use LinkedHashMap over HashMap?
4. What is the difference between fail-fast and fail-safe iterators?
5. Explain the difference between checked and unchecked exceptions.
6. What is the purpose of the finally block?
7. Write a query to find the second highest salary.
8. Explain the difference between INNER JOIN and LEFT JOIN.

---

## ✨ **Motivational Note**

> "Hashing is not just about speed—it's about smart problem-solving. Today you learned how to transform brute force O(n²) solutions into elegant O(n) algorithms. Every problem you solve makes you a better engineer. Keep going! 🚀"

---

**End of Day 6 Study Plan**  
**Total Problems Solved Today**: 9  
**Cumulative Problems**: 54  
**Days Completed**: 6 / 90  

**Tomorrow**: Linked Lists & Generics 🔗  
**Stay consistent, stay focused!** 💪

---
