# Day 9 Study Plan
## Collections, Generics & Type Erasure - 9 Hour Schedule

---

## ⏰ **Time Allocation Overview**

| Phase | Duration | Topics |
|-------|----------|--------|
| Morning Session | 4 hours | Collections Framework |
| Afternoon Session | 2.5 hours | Generics & Type Erasure |
| Evening Session | 2.5 hours | LeetCode & Practice |
| **Total** | **9 hours** | **Complete Day 9** |

---

## 🌅 **Morning Session: Collections Framework (4 hours)**

### **Hour 1: List Implementations (9:00 AM - 10:00 AM)**

**Objective:** Master ArrayList, LinkedList, Vector, and Stack

**Study Materials:**
- Read: CollectionsComplete.java - Sections 1-2 (List Interface)
- Focus: Time complexity, when to use each

**Activities:**
- [ ] Run ListExamples.arrayListDemo() - Observe O(1) access
- [ ] Run ListExamples.linkedListDemo() - See O(1) end operations
- [ ] Run ListExamples.vectorDemo() - Understand synchronization
- [ ] Compare performance: listPerformanceComparison()

**Key Concepts to Master:**
- ArrayList: Dynamic array, capacity growth (1.5x)
- LinkedList: Doubly-linked list, Deque interface
- Vector: Synchronized, legacy, capacity doubles
- When to use ArrayList vs LinkedList

**Practice:** 
- Try Practice Problems 6-10 (List operations)
- Reverse, rotate, median, merge, partition

**Break:** 5 minutes

---

### **Hour 2: Set Implementations (10:05 AM - 11:05 AM)**

**Objective:** Understand HashSet, LinkedHashSet, TreeSet

**Study Materials:**
- Read: CollectionsComplete.java - Section 3 (Set Interface)

**Activities:**
- [ ] Run SetExamples.hashSetDemo() - No duplicates, no order
- [ ] Run SetExamples.linkedHashSetDemo() - Insertion order
- [ ] Run SetExamples.treeSetDemo() - Sorted, NavigableSet
- [ ] Run SetExamples.treeSetWithComparator() - Custom ordering

**Key Concepts:**
- HashSet: Hash table, O(1) operations
- LinkedHashSet: HashSet + linked list
- TreeSet: Red-black tree, O(log n), sorted
- NavigableSet methods: first, last, higher, lower

**Practice:**
- Try Practice Problems 3-4 (Intersection, Union)
- Use HashSet operations

**Break:** 10 minutes

---

### **Hour 3: Queue, Deque, PriorityQueue (11:15 AM - 12:15 PM)**

**Objective:** Master queue implementations and heap operations

**Study Materials:**
- Read: CollectionsComplete.java - Section 4 (Queue Interface)

**Activities:**
- [ ] Run QueueExamples.priorityQueueDemo() - Min/max heap
- [ ] Run QueueExamples.priorityQueueCustomObjects() - Comparator
- [ ] Run QueueExamples.arrayDequeDemo() - Stack and queue

**Key Concepts:**
- PriorityQueue: Heap, O(log n) operations
- Min-heap vs max-heap (Collections.reverseOrder())
- ArrayDeque: Faster than LinkedList for stack/queue
- When to use PriorityQueue vs TreeSet

**Practice:**
- Problems 16-20 (Queue and PriorityQueue)
- Stack using queue, Kth largest, task scheduler

**Break:** 15 minutes (Lunch prep)

---

### **Hour 4: Map Implementations (12:30 PM - 1:30 PM)**

**Objective:** Master HashMap, LinkedHashMap, TreeMap

**Study Materials:**
- Read: CollectionsComplete.java - Section 5 (Map Interface)

**Activities:**
- [ ] Run MapExamples.hashMapDemo() - put, get, compute methods
- [ ] Run MapExamples.mapIteration() - All iteration techniques
- [ ] Run MapExamples.linkedHashMapDemo() - LRU cache
- [ ] Run MapExamples.treeMapDemo() - Sorted keys, NavigableMap

**Key Concepts:**
- HashMap: O(1) operations, null key allowed
- LinkedHashMap: Insertion/access order, LRU cache
- TreeMap: O(log n), sorted by keys
- Map methods: getOrDefault, putIfAbsent, computeIfAbsent, merge

**Practice:**
- Problems 5, 11-15 (Frequency map, anagrams, LRU cache)

**Break:** 30 minutes (Lunch)

---

## 🌤️ **Afternoon Session: Generics & Type Erasure (2.5 hours)**

### **Hour 5: Generics Fundamentals (2:00 PM - 3:00 PM)**

**Objective:** Understand generics syntax and benefits

**Study Materials:**
- Read: GenericsComplete.java - Sections 1-3

**Activities:**
- [ ] Run WithoutGenerics vs withGenerics - See type safety
- [ ] Run GenericClassExamples.genericClassDemo()
- [ ] Run GenericMethodExamples.genericMethodDemo()
- [ ] Create your own generic Box class

**Key Concepts:**
- Why generics? Type safety at compile time
- Generic classes: Box&lt;T&gt;, Pair&lt;K, V&gt;
- Generic methods: &lt;T&gt; before return type
- Type inference and diamond operator &lt;&gt;

**Practice:**
- Problems 21-25 (Generic swap, min, Pair, Stack, filter)

**Break:** 10 minutes

---

### **Hour 6: Bounded Types & Wildcards (3:10 PM - 4:10 PM)**

**Objective:** Master bounded type parameters and wildcards

**Study Materials:**
- Read: GenericsComplete.java - Sections 4-5

**Activities:**
- [ ] Run BoundedTypeParameterExamples.boundedTypeDemo()
- [ ] Run WildcardExamples.wildcardDemo()
- [ ] Run WildcardExamples.pecsExplanation() - **CRITICAL**
- [ ] Practice PECS examples

**Key Concepts:**
- Bounded types: T extends Number
- Multiple bounds: T extends Number & Comparable&lt;T&gt;
- Wildcards: ?, ? extends T, ? super T
- **PECS**: Producer Extends, Consumer Super

**Practice:**
- Problems 26-28 (Wildcard sum, add integers, copy)

**Break:** 5 minutes

---

### **Hour 7: Type Erasure (4:15 PM - 4:45 PM)**

**Objective:** Understand type erasure and its implications

**Study Materials:**
- Read: TypeErasureComplete.java - All sections

**Activities:**
- [ ] Run TypeErasureBasics.whatIsTypeErasure()
- [ ] Run TypeErasureProcess.demonstrateErasure()
- [ ] Run OverloadingIssues.demonstrateOverloadingIssues()
- [ ] Run RestrictionsExamples.restrictionsDemo()

**Key Concepts:**
- Type erasure: T → Object (or first bound)
- Bridge methods for polymorphism
- 7 major restrictions (no T[], no instanceof, etc.)
- Workarounds: Class&lt;T&gt;, List&lt;T&gt; instead of T[]

**Practice:**
- Problems 29-30 (Type-safe map, multiple bounds)

**Break:** 15 minutes

---

## 🌆 **Evening Session: LeetCode & Practice (2.5 hours)**

### **Hour 8: LeetCode Problem Solving (5:00 PM - 6:30 PM)**

**Objective:** Solve LeetCode problems with multiple approaches

#### **Part 1: Top K Frequent Elements (45 min)**
- [ ] Read problem statement and examples
- [ ] Implement Min-Heap approach (optimal for interviews)
- [ ] Implement Bucket Sort (optimal O(n) solution)
- [ ] Compare all 5 approaches
- [ ] Understand when to use each approach

**Key Learning:**
- HashMap for frequency counting
- PriorityQueue with custom Comparator
- Bucket sort for O(n) solution
- Trade-offs: time vs space

#### **Part 2: Group Anagrams (45 min)**
- [ ] Read problem and understand anagram concept
- [ ] Implement Sorted Key approach
- [ ] Implement Character Count approach (optimal)
- [ ] Compare all 5 approaches
- [ ] Practice with test cases

**Key Learning:**
- HashMap&lt;String, List&lt;String&gt;&gt; nested generics
- Sorted string as key
- Character count optimization
- computeIfAbsent() for clean code

**Break:** 10 minutes

---

### **Hour 9: Practice Problems & Design Pattern (6:40 PM - 8:10 PM)**

**Objective:** Solidify concepts through practice

#### **Part 1: Quick Practice (40 min)**
- [ ] Complete any remaining practice problems
- [ ] Focus on areas you found challenging
- [ ] Re-run examples that were unclear
- [ ] Test edge cases

**Suggested Problems:**
- If weak on Lists: Problems 6-10
- If weak on Maps: Problems 11-15
- If weak on Generics: Problems 21-25
- If weak on Wildcards: Problems 26-28

#### **Part 2: Design Pattern Study (30 min)**
- [ ] Read GenericRepositoryPattern.java
- [ ] Run the demo
- [ ] Understand benefits of generic repository
- [ ] Study Specification pattern for queries
- [ ] Think of real-world applications

**Key Learning:**
- Repository&lt;T, ID&gt; interface
- Type-safe data access layer
- Specification pattern for complex queries
- Benefits in enterprise applications

#### **Part 3: Review & Quiz (20 min)**
- [ ] Review QUICK_REFERENCE.md
- [ ] Test yourself on performance complexities
- [ ] Explain PECS to yourself
- [ ] List type erasure restrictions
- [ ] Review when to use which collection

**Self-Quiz Questions:**
1. When to use ArrayList vs LinkedList?
2. HashMap vs TreeMap performance?
3. Explain PECS with example
4. What is type erasure?
5. Can we create generic arrays? Why not?
6. Top K Frequent - best approach?
7. LRU Cache implementation?
8. Difference between ? extends and ? super?
9. Why use PriorityQueue for Kth largest?
10. Generic repository pattern benefits?

---

## 📝 **End of Day Checklist**

### **Concepts Mastered:**
- [ ] Know time complexity of all collection operations
- [ ] Understand when to use each collection type
- [ ] Can write generic classes and methods
- [ ] Understand bounded type parameters
- [ ] Master PECS principle (Producer Extends, Consumer Super)
- [ ] Know type erasure implications and restrictions
- [ ] Can solve Top K Frequent with multiple approaches
- [ ] Can solve Group Anagrams optimally
- [ ] Understand generic repository pattern
- [ ] Completed 30 practice problems

### **Files to Review Tomorrow:**
- [ ] QUICK_REFERENCE.md - Quick revision
- [ ] DAY_9_COMPLETE_SUMMARY.md - Overall view
- [ ] Practice problems you found challenging

---

## 🎯 **Success Metrics**

**You've successfully completed Day 9 if you can:**
1. ✅ Explain time complexity of ArrayList.add() and LinkedList.get()
2. ✅ Choose correct collection for a given use case
3. ✅ Write a generic method with bounded type parameters
4. ✅ Explain and apply PECS principle
5. ✅ List 5 type erasure restrictions
6. ✅ Solve Top K Frequent in O(n) using bucket sort
7. ✅ Solve Group Anagrams in O(n*k) using character count
8. ✅ Implement LRU Cache using LinkedHashMap
9. ✅ Explain when to use wildcard vs type parameter
10. ✅ Complete all 30 practice problems

---

## 💡 **Tips for Effective Learning**

1. **Don't Rush**: Spend adequate time on each section
2. **Run Code**: Execute every example, observe output
3. **Take Notes**: Write down key insights
4. **Practice**: Do problems immediately after theory
5. **Understand, Don't Memorize**: Focus on "why" not just "what"
6. **Ask Questions**: Note unclear concepts for review
7. **Take Breaks**: 5-15 min breaks prevent burnout
8. **Review**: Spend last 20 min reviewing the day
9. **Sleep Well**: Consolidates learning
10. **Next Day**: Quick 15-min review before Day 10

---

## 📚 **Additional Resources (Optional)**

- Oracle Java Collections Tutorial
- Effective Java by Joshua Bloch (Chapters on Generics)
- Java Generics and Collections by Maurice Naftalin

---

**Study Schedule Status:** ✅ Ready to Execute  
**Estimated Completion:** 9 hours of focused study  
**Difficulty Level:** Medium to Hard  
**Interview Readiness:** High after completion  

*"Collections and Generics are the backbone of Java programming. Master them, and you master Java!"*
