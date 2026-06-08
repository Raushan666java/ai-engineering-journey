# Day 11: HashMap, HashSet & Cycle Detection

## 📚 Overview

Day 11 focuses on **Hash-based Data Structures** and **Cycle Detection Algorithms**. These are fundamental concepts for efficient data storage, retrieval, and graph/linked list algorithms commonly tested in technical interviews.

### Topics Covered
1. **HashMap** - Key-value pair storage with O(1) operations
2. **HashSet** - Unique element storage with O(1) operations
3. **Hashing Concepts** - Hash functions, collisions, load factor
4. **Cycle Detection** - Floyd's Tortoise and Hare algorithm
5. **Hash-based Problem Solving** - Frequency counting, duplicates, anagrams

## 🎯 Learning Objectives

By the end of Day 11, you will be able to:

### HashMap & HashSet
- [ ] Understand how hash tables work internally
- [ ] Implement HashMap operations (put, get, remove)
- [ ] Use HashSet for uniqueness and deduplication
- [ ] Handle hash collisions (chaining vs open addressing)
- [ ] Calculate and optimize load factor
- [ ] Solve problems using hash-based approaches

### Cycle Detection
- [ ] Implement Floyd's Cycle Detection Algorithm
- [ ] Detect cycles in linked lists
- [ ] Find cycle start point
- [ ] Calculate cycle length
- [ ] Apply cycle detection to various problems

### Problem-Solving
- [ ] Use HashMap for frequency counting
- [ ] Detect duplicates efficiently
- [ ] Find anagrams using hashing
- [ ] Implement two-sum pattern
- [ ] Solve intersection and union problems

## 📁 File Structure

```
Day-11/
├── README.md (this file)
├── study_plan.md (9-hour learning schedule)
├── progress.md (track your progress)
├── code/
│   ├── hashmap_basics.java (HashMap operations & internals)
│   ├── hashset_operations.java (HashSet usage & patterns)
│   ├── cycle_detection.java (Floyd's algorithm & variations)
│   ├── hashing_problems.java (Common hash-based problems)
│   └── practice_problems.java (10 comprehensive problems)
├── notes/
│   ├── hashing_notes.md (Complete hashing guide)
│   ├── cycle_detection_notes.md (Cycle algorithms guide)
│   └── complexity_notes.md (Time/space complexity analysis)
└── resources/
    ├── hashing_cheatsheet.md (Quick reference)
    ├── common_patterns.md (Hash-based patterns)
    └── interview_questions.md (50 interview Q&A)
```

## 🔑 Key Concepts

### 1. HashMap Fundamentals

**What is HashMap?**
- Hash table implementation of Map interface
- Stores key-value pairs
- Allows null key (one) and null values
- Not synchronized (not thread-safe)
- No guaranteed order

**Internal Working:**
```java
// HashMap structure
- Array of Node<K,V>[] buckets
- Each bucket is a linked list (or tree in Java 8+)
- Hash function determines bucket index
- Collisions handled by chaining
```

**Time Complexity:**
- `put(key, value)`: O(1) average, O(n) worst case
- `get(key)`: O(1) average, O(n) worst case
- `remove(key)`: O(1) average, O(n) worst case
- `containsKey(key)`: O(1) average

**Key Operations:**
```java
HashMap<String, Integer> map = new HashMap<>();
map.put("Alice", 25);          // Add/Update
int age = map.get("Alice");    // Retrieve
map.remove("Alice");           // Delete
boolean has = map.containsKey("Alice");  // Check existence
```

### 2. HashSet Fundamentals

**What is HashSet?**
- Hash table implementation of Set interface
- Stores unique elements only
- Backed by HashMap internally
- No duplicate elements
- No guaranteed order

**Time Complexity:**
- `add(element)`: O(1) average
- `remove(element)`: O(1) average
- `contains(element)`: O(1) average

**Key Operations:**
```java
HashSet<Integer> set = new HashSet<>();
set.add(5);                    // Add element
set.remove(5);                 // Remove element
boolean has = set.contains(5); // Check existence
```

### 3. Hashing Concepts

**Hash Function:**
- Converts key to integer (hash code)
- Determines bucket index: `index = hashCode(key) % bucketSize`
- Good hash function: uniform distribution, fast computation

**Collision Handling:**
1. **Chaining**: Store colliding elements in linked list
2. **Open Addressing**: Find next empty slot (linear probing, quadratic probing)

**Load Factor:**
- `loadFactor = numberOfEntries / bucketSize`
- Default in Java: 0.75
- Resize (rehashing) when load factor exceeded
- Trade-off: memory vs performance

### 4. Floyd's Cycle Detection Algorithm

**Tortoise and Hare (Two Pointers):**
- Slow pointer moves 1 step at a time
- Fast pointer moves 2 steps at a time
- If there's a cycle, they will meet inside the cycle

**Algorithm:**
```java
boolean hasCycle(ListNode head) {
    ListNode slow = head, fast = head;
    
    while (fast != null && fast.next != null) {
        slow = slow.next;          // Move 1 step
        fast = fast.next.next;     // Move 2 steps
        
        if (slow == fast) {
            return true;  // Cycle detected
        }
    }
    return false;  // No cycle
}
```

**Finding Cycle Start:**
```java
ListNode detectCycleStart(ListNode head) {
    // Phase 1: Detect cycle
    ListNode slow = head, fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) break;
    }
    
    if (fast == null || fast.next == null) return null;
    
    // Phase 2: Find start
    slow = head;
    while (slow != fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;  // Cycle start node
}
```

**Time Complexity:** O(n)  
**Space Complexity:** O(1)

## 💡 Common Patterns

### Pattern 1: Frequency Counting
```java
Map<Character, Integer> freq = new HashMap<>();
for (char c : str.toCharArray()) {
    freq.put(c, freq.getOrDefault(c, 0) + 1);
}
```

### Pattern 2: Two Sum Pattern
```java
Map<Integer, Integer> map = new HashMap<>();
for (int i = 0; i < nums.length; i++) {
    int complement = target - nums[i];
    if (map.containsKey(complement)) {
        return new int[]{map.get(complement), i};
    }
    map.put(nums[i], i);
}
```

### Pattern 3: Anagram Detection
```java
String getSignature(String s) {
    char[] chars = s.toCharArray();
    Arrays.sort(chars);
    return new String(chars);
}

Map<String, List<String>> groups = new HashMap<>();
for (String word : words) {
    String sig = getSignature(word);
    groups.computeIfAbsent(sig, k -> new ArrayList<>()).add(word);
}
```

### Pattern 4: Cycle Detection
```java
ListNode slow = head, fast = head;
while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) return true;  // Cycle found
}
return false;
```

## 📊 Time Complexity Comparison

| Operation | HashMap | TreeMap | LinkedHashMap |
|-----------|---------|---------|---------------|
| get | O(1) | O(log n) | O(1) |
| put | O(1) | O(log n) | O(1) |
| remove | O(1) | O(log n) | O(1) |
| containsKey | O(1) | O(log n) | O(1) |
| Ordering | None | Sorted | Insertion |

| Operation | HashSet | TreeSet | LinkedHashSet |
|-----------|---------|---------|---------------|
| add | O(1) | O(log n) | O(1) |
| remove | O(1) | O(log n) | O(1) |
| contains | O(1) | O(log n) | O(1) |
| Ordering | None | Sorted | Insertion |

## 🎯 Interview Focus Areas

### HashMap/HashSet Questions
1. How does HashMap work internally?
2. What happens during collision?
3. What is load factor and rehashing?
4. Difference between HashMap and HashSet?
5. When to use HashMap vs TreeMap?
6. How to make HashMap thread-safe?

### Cycle Detection Questions
1. How does Floyd's algorithm work?
2. Why does fast pointer move 2 steps?
3. How to find cycle start point?
4. How to find cycle length?
5. Can we use hashing for cycle detection?
6. Time and space complexity?

### Problem-Solving
1. Two Sum / Three Sum variants
2. Group Anagrams
3. Longest Substring Without Repeating Characters
4. First Non-Repeating Character
5. Linked List Cycle detection
6. Intersection of Two Linked Lists
7. Find Duplicate Number
8. Valid Sudoku
9. LRU Cache implementation
10. Design HashMap

## 🔧 Prerequisites

Before starting Day 11, ensure you have completed:
- ✅ Day 9: Collections Framework (List, Set, Map basics)
- ✅ Day 10: Streams and Lambda Expressions
- ✅ Basic understanding of arrays and linked lists

## 🚀 Getting Started

### Step 1: Morning Session (3 hours)
Start with `hashmap_basics.java` to understand HashMap internals, then move to `hashset_operations.java` for practical usage.

### Step 2: Afternoon Session (3 hours)
Study `cycle_detection.java` to master Floyd's algorithm, then practice with `hashing_problems.java`.

### Step 3: Evening Session (3 hours)
Solve all 10 problems in `practice_problems.java` and review interview questions.

## 📝 Practice Problems (10 Total)

1. **Two Sum** - Find two numbers that sum to target
2. **Group Anagrams** - Group strings that are anagrams
3. **First Non-Repeating Character** - Find first unique char
4. **Longest Substring Without Repeating** - Sliding window + HashMap
5. **Linked List Cycle** - Detect cycle using Floyd's algorithm
6. **Cycle Start Point** - Find where cycle begins
7. **Intersection of Two Arrays** - Use HashSet for intersection
8. **Valid Anagram** - Check if two strings are anagrams
9. **Top K Frequent Elements** - Use HashMap + priority queue
10. **Design HashMap** - Implement basic HashMap from scratch

## 🎓 Learning Resources

### Code Files
- `hashmap_basics.java` - HashMap operations, collisions, load factor
- `hashset_operations.java` - HashSet usage, deduplication
- `cycle_detection.java` - Floyd's algorithm and variations
- `hashing_problems.java` - Common hash-based problems
- `practice_problems.java` - 10 comprehensive problems

### Notes
- `hashing_notes.md` - Complete guide to hashing and hash tables
- `cycle_detection_notes.md` - Floyd's algorithm detailed explanation
- `complexity_notes.md` - Time/space analysis for all operations

### Resources
- `hashing_cheatsheet.md` - Quick reference for HashMap/HashSet
- `common_patterns.md` - Hash-based problem-solving patterns
- `interview_questions.md` - 50 interview questions with answers

## ✅ Success Criteria

You've successfully completed Day 11 when you can:
- [ ] Explain how HashMap works internally
- [ ] Implement basic HashMap operations
- [ ] Use HashSet effectively for uniqueness problems
- [ ] Implement Floyd's Cycle Detection Algorithm
- [ ] Find cycle start point in linked list
- [ ] Solve two-sum pattern problems
- [ ] Detect anagrams using hashing
- [ ] Implement frequency counting
- [ ] Answer 30+ interview questions confidently
- [ ] Solve all 10 practice problems

## 🔗 Related Topics

**Previous Days:**
- Day 9: Collections Framework
- Day 10: Streams and Lambda Expressions

**Next Days:**
- Day 12: TreeMap, TreeSet (Sorted collections)
- Day 13: Exception Handling
- Day 14: File I/O and Serialization

## 📈 Difficulty Level

**Beginner-Friendly:** ⭐⭐⭐☆☆ (3/5)

HashMap and HashSet are fundamental concepts that become intuitive with practice. Cycle detection requires understanding two-pointer technique but is straightforward once you grasp the concept.

---

**Ready to start? Open `study_plan.md` for your 9-hour structured learning plan!**

*Last Updated: November 18, 2025*
