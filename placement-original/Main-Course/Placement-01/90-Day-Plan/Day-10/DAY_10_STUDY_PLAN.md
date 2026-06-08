# DAY 10 STUDY PLAN
**Streams API, Lambda Expressions & Functional Programming**

---

## 📋 **OVERVIEW**

**Total Time:** 9 Hours  
**Difficulty:** Advanced ⭐⭐⭐⭐⭐  
**Prerequisites:** Java Basics, OOP, Collections  
**Goal:** Master functional programming in Java

---

## ⏰ **9-HOUR DETAILED SCHEDULE**

---

### **MORNING SESSION (4 hours) - Streams API**

#### **Hour 1: Stream Fundamentals (9:00 AM - 10:00 AM)**

- [ ] **Read:** StreamsComplete.java - Introduction section
  - What is a Stream?
  - Stream vs Collection comparison
  - Lazy evaluation concept
  - Stream pipeline structure

- [ ] **Practice:** Stream Creation (15 minutes)
  ```java
  // Try all 10 creation methods
  - Collection.stream()
  - Arrays.stream()
  - Stream.of()
  - Stream.builder()
  - Stream.generate()
  - Stream.iterate()
  - IntStream.range()
  - String.chars()
  - Stream.empty()
  - parallelStream()
  ```

- [ ] **Checkpoint:** Can you create streams in 5 different ways?

---

#### **Hour 2: Intermediate Operations (10:00 AM - 11:00 AM)**

- [ ] **Read:** StreamsComplete.java - Intermediate Operations
  - filter() - Selection
  - map() - Transformation
  - flatMap() - Flattening
  - distinct() - Uniqueness
  - sorted() - Ordering
  - peek() - Debugging
  - limit() & skip() - Slicing

- [ ] **Practice:** Day10PracticeProblems.java - Section 1 & 2
  - Problems 1-10 (Stream Basics + Intermediate Ops)
  - Focus on chaining operations

- [ ] **Exercise:** Create a complex pipeline
  ```java
  List<Integer> result = numbers.stream()
      .filter(n -> n % 2 == 0)
      .map(n -> n * n)
      .distinct()
      .sorted(Comparator.reverseOrder())
      .limit(10)
      .collect(Collectors.toList());
  ```

- [ ] **Checkpoint:** Can you chain 5+ operations correctly?

---

#### **Hour 3: Terminal Operations & Collectors (11:00 AM - 12:00 PM)**

- [ ] **Read:** StreamsComplete.java - Terminal Operations & Collectors
  - forEach() - Iteration
  - collect() - Accumulation
  - reduce() - Reduction
  - count(), min(), max() - Statistics
  - anyMatch(), allMatch(), noneMatch() - Testing
  - findFirst(), findAny() - Finding
  - toArray() - Conversion

- [ ] **Study:** Collectors in detail
  - toList(), toSet(), toMap()
  - groupingBy() - Critical for interviews
  - partitioningBy() - Binary grouping
  - joining() - String concatenation
  - counting(), summing, averaging

- [ ] **Practice:** Day10PracticeProblems.java - Section 3
  - Problems 11-15 (Terminal Operations)
  - Focus on reduce() patterns

- [ ] **Checkpoint:** Understand groupingBy() thoroughly

---

#### **Hour 4: Parallel Streams & Performance (12:00 PM - 1:00 PM)**

- [ ] **Read:** StreamsComplete.java - Parallel Streams & Performance
  - When to use parallel streams
  - Performance comparison
  - Common pitfalls (shared mutable state, order sensitivity)
  - Primitive streams (IntStream, LongStream, DoubleStream)

- [ ] **Practice:** Compare parallel vs sequential
  ```java
  // Sequential
  long sum1 = bigList.stream()
      .mapToLong(Integer::longValue)
      .sum();
  
  // Parallel
  long sum2 = bigList.parallelStream()
      .mapToLong(Integer::longValue)
      .sum();
  ```

- [ ] **Review:** Real-World Use Cases in StreamsComplete.java
  - Employee data processing
  - Text processing and analysis
  - Database-style queries

- [ ] **Checkpoint:** Know when parallel streams improve performance

---

### **BREAK (1:00 PM - 2:00 PM)** 🍽️

---

### **AFTERNOON SESSION (2.5 hours) - Lambda Expressions**

#### **Hour 5: Lambda Syntax & Method References (2:00 PM - 3:00 PM)**

- [ ] **Read:** LambdasComplete.java - Introduction & Syntax
  - Before vs After Java 8
  - 8 syntax variations
  - Type inference

- [ ] **Practice:** Write lambdas in different forms
  ```java
  // All equivalent:
  Comparator<String> c1 = (s1, s2) -> s1.compareTo(s2);
  Comparator<String> c2 = (String s1, String s2) -> s1.compareTo(s2);
  Comparator<String> c3 = String::compareTo;
  ```

- [ ] **Study:** Method References (4 types)
  - Static: `ClassName::staticMethod`
  - Instance of object: `object::instanceMethod`
  - Instance of type: `ClassName::instanceMethod`
  - Constructor: `ClassName::new`

- [ ] **Practice:** Convert lambdas to method references
  ```java
  // Lambda
  list.stream().map(s -> s.toUpperCase())
  
  // Method Reference
  list.stream().map(String::toUpperCase)
  ```

- [ ] **Checkpoint:** Comfortable with method reference syntax?

---

#### **Hour 6: Functional Interfaces (3:00 PM - 4:00 PM)**

- [ ] **Read:** LambdasComplete.java - Functional Interfaces
  - @FunctionalInterface annotation
  - Built-in interfaces:
    - Predicate<T>: T → boolean
    - Function<T,R>: T → R
    - Consumer<T>: T → void
    - Supplier<T>: () → T
    - UnaryOperator<T>: T → T
    - BinaryOperator<T>: (T,T) → T

- [ ] **Study:** Composition methods
  - Predicate: and(), or(), negate()
  - Function: andThen(), compose()
  - Consumer: andThen()

- [ ] **Practice:** Day10PracticeProblems.java - Section 4 & 5
  - Problems 16-25 (Lambdas + Functional Interfaces)

- [ ] **Exercise:** Create custom functional interface
  ```java
  @FunctionalInterface
  interface Validator<T> {
      boolean validate(T value);
      
      default Validator<T> and(Validator<T> other) {
          return value -> this.validate(value) && other.validate(value);
      }
  }
  ```

- [ ] **Checkpoint:** Can you use all 6 standard interfaces?

---

#### **Hour 7: Variable Capture & Best Practices (4:00 PM - 4:30 PM)**

- [ ] **Read:** LambdasComplete.java - Variable Capture & Best Practices
  - Effectively final concept
  - Scope rules
  - Lambda best practices (8 guidelines)

- [ ] **Study:** Common mistakes
  ```java
  // ❌ Cannot modify captured variable
  int count = 0;
  list.forEach(item -> count++); // Error!
  
  // ✅ Use wrapper
  AtomicInteger count = new AtomicInteger(0);
  list.forEach(item -> count.incrementAndGet());
  ```

- [ ] **Review:** Real-World Examples in LambdasComplete.java
  - Event handling
  - Data processing pipeline
  - Strategy pattern with lambdas

- [ ] **Checkpoint:** Understand effectively final rule

---

### **BREAK (4:30 PM - 5:00 PM)** ☕

---

### **EVENING SESSION (2.5 hours) - Functional Programming**

#### **Hour 8: Optional & Function Composition (5:00 PM - 6:00 PM)**

- [ ] **Read:** FunctionalProgrammingComplete.java - Optional & Composition
  - Creating Optional (of, ofNullable, empty)
  - Checking (isPresent, isEmpty)
  - Retrieving (get, orElse, orElseGet, orElseThrow)
  - Transforming (map, filter, flatMap)

- [ ] **Practice:** Optional patterns
  ```java
  // Pattern 1: Default value
  String name = findUser(id)
      .map(User::getName)
      .orElse("Unknown");
  
  // Pattern 2: Exception throwing
  User user = findUser(id)
      .orElseThrow(() -> new UserNotFoundException(id));
  
  // Pattern 3: Chaining
  String email = findUser(id)
      .filter(User::isActive)
      .map(User::getEmail)
      .orElse("no-email@example.com");
  ```

- [ ] **Study:** Function Composition
  - compose(): g.compose(f) = g(f(x))
  - andThen(): f.andThen(g) = g(f(x))

- [ ] **Exercise:** Build complex pipeline
  ```java
  Function<String, String> pipeline = 
      trim.andThen(toLowerCase).andThen(removeSpecialChars);
  ```

- [ ] **Checkpoint:** Master Optional chaining

---

#### **Hour 9: Advanced FP Concepts (6:00 PM - 7:00 PM)**

- [ ] **Read:** FunctionalProgrammingComplete.java - Advanced Topics
  - Pure functions vs impure
  - Immutability patterns
  - Higher-order functions
  - Currying and partial application
  - Function memoization

- [ ] **Practice:** Day10PracticeProblems.java - Section 6 & Bonus
  - Problems 26-35 (Advanced + Bonus)

- [ ] **Study:** Functional Design Patterns
  - Read FunctionalDesignPatterns.java
  - Focus on: Strategy, Chain of Responsibility, Decorator

- [ ] **Review:** Real-World Functional Patterns
  - Validation pipelines
  - Data transformation pipelines

- [ ] **Checkpoint:** Understand pure function benefits

---

### **PRACTICE & REVIEW (7:00 PM - 7:30 PM)**

#### **LeetCode Time**

- [ ] **Problem 1:** TopKFrequentElementsStreams.java
  - Study all 7 approaches
  - Focus on Stream + Bucket Sort (optimal)
  - Understand groupingBy() with counting()
  - Practice without IDE

- [ ] **Problem 2:** GroupAnagramsStreams.java
  - Study all 7 approaches
  - Focus on Stream + Char Count (optimal)
  - Understand custom key functions
  - Practice without IDE

- [ ] **Checkpoint:** Can you solve both problems in 30 minutes?

---

## ✅ **END-OF-DAY CHECKLIST**

### **Knowledge Verification**

- [ ] Can you explain lazy evaluation?
- [ ] Can you create streams in 5+ ways?
- [ ] Can you chain 10+ stream operations?
- [ ] Do you know difference between map() and flatMap()?
- [ ] Can you use groupingBy() correctly?
- [ ] Do you understand parallel stream pitfalls?
- [ ] Can you write lambdas in 5+ syntax variations?
- [ ] Can you use method references (4 types)?
- [ ] Do you know all 6 standard functional interfaces?
- [ ] Can you compose functions with andThen/compose?
- [ ] Do you understand effectively final concept?
- [ ] Can you use Optional correctly (not .get())?
- [ ] Do you know difference between orElse() and orElseGet()?
- [ ] Can you explain pure functions?
- [ ] Do you understand function currying?

### **Practice Verification**

- [ ] Completed all 30 main practice problems
- [ ] Attempted all 5 bonus problems
- [ ] Solved LeetCode #347 with streams
- [ ] Solved LeetCode #49 with streams
- [ ] Created custom functional interfaces
- [ ] Built complex stream pipelines
- [ ] Implemented functional design patterns

### **Code Review**

- [ ] All practice solutions compile without errors
- [ ] Used appropriate stream operations
- [ ] Avoided common mistakes (get() on Optional, shared mutable state)
- [ ] Applied best practices (short lambdas, method references)

---

## 📊 **SUCCESS METRICS**

### **Minimum Goals (Beginner)**
- ✅ Understand stream pipeline concept
- ✅ Use filter, map, collect
- ✅ Write basic lambdas
- ✅ Solve 15+ practice problems

### **Target Goals (Intermediate)**
- ✅ Master all stream operations
- ✅ Use groupingBy() correctly
- ✅ Write lambdas with method references
- ✅ Use Optional properly
- ✅ Solve 25+ practice problems
- ✅ Solve 1 LeetCode problem

### **Stretch Goals (Advanced)**
- ✅ Master parallel streams
- ✅ Implement custom collectors
- ✅ Master function composition
- ✅ Implement functional design patterns
- ✅ Solve all 35 practice problems
- ✅ Solve both LeetCode problems
- ✅ Optimize with primitive streams

---

## 🎯 **INTERVIEW PREPARATION**

### **Must Practice Questions**

1. **Stream API (10 questions)**
   - What is a Stream? How is it different from Collection?
   - Explain lazy evaluation in streams
   - Can you reuse a stream? Why or why not?
   - Difference between map() and flatMap()?
   - Difference between findFirst() and findAny()?
   - When to use parallel streams?
   - What are intermediate vs terminal operations?
   - How does groupingBy() work?
   - What are primitive streams? Why use them?
   - How to handle infinite streams?

2. **Lambda Expressions (5 questions)**
   - What is a lambda expression?
   - What is a functional interface?
   - What are method references? Give 4 types
   - What is "effectively final"?
   - Lambda vs anonymous inner class differences?

3. **Functional Programming (5 questions)**
   - What is Optional? How to use it properly?
   - Difference between orElse() and orElseGet()?
   - What is function composition?
   - What is a pure function?
   - What is currying?

### **Coding Exercises**

- [ ] Filter and transform collection in one pipeline
- [ ] Group by property and calculate statistics
- [ ] Flatten nested collections with flatMap
- [ ] Find top N elements using streams
- [ ] Implement custom collector
- [ ] Chain multiple Optional operations
- [ ] Compose functions with andThen/compose
- [ ] Implement functional design pattern (Strategy)

---

## 📖 **RECOMMENDED READING ORDER**

1. **Start Here:** QUICK_REFERENCE.md (30 min)
2. **Core Concepts:**
   - StreamsComplete.java (90 min)
   - LambdasComplete.java (60 min)
   - FunctionalProgrammingComplete.java (60 min)
3. **Problem Solving:**
   - TopKFrequentElementsStreams.java (30 min)
   - GroupAnagramsStreams.java (30 min)
4. **Design:**
   - FunctionalDesignPatterns.java (45 min)
5. **Practice:**
   - Day10PracticeProblems.java (120 min)
6. **Review:**
   - DAY_10_COMPLETE_SUMMARY.md (30 min)

---

## 🔄 **SPACED REPETITION SCHEDULE**

### **Day 11 (Tomorrow)**
- [ ] Review QUICK_REFERENCE.md (10 min)
- [ ] Solve 5 random practice problems (30 min)

### **Day 13 (In 3 days)**
- [ ] Solve LeetCode #347 again without looking (20 min)
- [ ] Review Optional patterns (15 min)

### **Day 17 (In 7 days)**
- [ ] Solve LeetCode #49 again without looking (20 min)
- [ ] Review functional design patterns (20 min)

### **Day 24 (In 14 days)**
- [ ] Solve 10 random practice problems (60 min)
- [ ] Review interview questions (30 min)

### **Day 40 (In 30 days)**
- [ ] Complete Day 10 assessment (90 min)
- [ ] Identify weak areas and review

---

## 💡 **TIPS FOR SUCCESS**

### **Learning Strategies**

1. **Active Coding:** Type all examples yourself
2. **Experiment:** Modify code and observe changes
3. **Debug:** Use peek() to understand stream pipelines
4. **Compare:** Try multiple approaches for same problem
5. **Teach:** Explain concepts to someone else (rubber duck debugging)

### **Common Pitfalls to Avoid**

❌ **Don't:**
- Use .get() on Optional without checking
- Modify external variables in lambdas
- Use parallel streams for small datasets
- Reuse streams (they're single-use)
- Overuse streams for simple tasks

✅ **Do:**
- Use orElse/orElseGet on Optional
- Keep lambdas stateless
- Use sequential streams by default
- Create new streams for each operation
- Use streams for clarity, not always for performance

### **When You're Stuck**

1. Read error message carefully
2. Check QUICK_REFERENCE.md
3. Review relevant section in core files
4. Try simpler version first
5. Break complex pipeline into steps
6. Use peek() to debug
7. Review interview questions section

---

## 🏆 **COMPLETION CRITERIA**

You've successfully completed Day 10 when you can:

- ✅ Write complex stream pipelines without referring to docs
- ✅ Explain the difference between intermediate and terminal operations
- ✅ Use groupingBy() and partitioningBy() correctly
- ✅ Write lambdas using method references
- ✅ Use Optional without calling .get()
- ✅ Compose functions with andThen/compose
- ✅ Solve stream-based problems in interviews
- ✅ Implement functional design patterns
- ✅ Optimize with primitive streams and parallel streams
- ✅ Explain when to use functional programming

---

## 📅 **NEXT STEPS**

**Day 11 Preview:** Multithreading & Concurrency
- Thread creation and lifecycle
- Synchronization mechanisms
- Concurrent collections
- ExecutorService and thread pools
- CompletableFuture
- Common concurrency patterns

**Preparation:**
- Review Java threading basics
- Understand race conditions
- Read about volatile keyword

---

*Consistency is key! Complete one section at a time and practice daily.*

**Good luck on your functional programming journey! 🚀**
