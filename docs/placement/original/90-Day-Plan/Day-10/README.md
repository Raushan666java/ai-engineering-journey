# Day 10: Streams and Lambda Expressions

## Overview
Master Java 8's functional programming features - Lambda Expressions and Stream API. Transform how you write Java code from imperative to declarative style, making code more concise, readable, and maintainable.

**Date**: November 16, 2025  
**Focus**: Functional Programming in Java  
**Difficulty**: Intermediate to Advanced  
**Prerequisites**: Day 9 (Collections Framework), Day 8 (OOP - Interfaces)

---

## What You'll Learn Today

### 1. Lambda Expressions (Java 8+)
- Functional interfaces and single abstract methods
- Lambda syntax: parameters, arrow operator, body
- Method references (::) - static, instance, constructor
- Variable capture and effectively final
- Replacing anonymous inner classes

### 2. Stream API Fundamentals
- Stream creation: from collections, arrays, generators
- Intermediate vs terminal operations
- Stream pipeline execution (lazy evaluation)
- Sequential vs parallel streams

### 3. Stream Operations
**Intermediate** (lazy, returns stream):
- `filter()` - Select elements matching predicate
- `map()` - Transform elements
- `flatMap()` - Flatten nested structures
- `distinct()` - Remove duplicates
- `sorted()` - Order elements
- `limit()`, `skip()` - Pagination
- `peek()` - Debug/inspect elements

**Terminal** (eager, triggers execution):
- `forEach()` - Iterate and perform action
- `collect()` - Accumulate into collection
- `reduce()` - Combine elements
- `count()`, `min()`, `max()` - Aggregations
- `anyMatch()`, `allMatch()`, `noneMatch()` - Predicates
- `findFirst()`, `findAny()` - Short-circuit

### 4. Collectors
- `toList()`, `toSet()`, `toMap()`
- `groupingBy()` - Group elements
- `partitioningBy()` - Binary classification
- `joining()` - String concatenation
- `counting()`, `summingInt()`, `averagingDouble()`
- `maxBy()`, `minBy()` - With comparator
- Custom collectors

### 5. Advanced Patterns
- Optional API (avoiding null)
- Method reference types
- Stream pipelines for complex transformations
- Parallel streams and performance considerations

---

## Why This Matters

### Before Java 8 (Imperative)
```java
List<String> names = new ArrayList<>();
for (Person p : people) {
    if (p.getAge() > 18) {
        names.add(p.getName());
    }
}
Collections.sort(names);
```

### After Java 8 (Declarative)
```java
List<String> names = people.stream()
    .filter(p -> p.getAge() > 18)
    .map(Person::getName)
    .sorted()
    .collect(Collectors.toList());
```

**Benefits**:
- More readable and maintainable
- Less boilerplate code
- Built-in parallelization support
- Functional composition
- Less prone to bugs (immutability)

---

## File Structure

```
Day-10/
├── README.md (this file)
├── study_plan.md (9-hour learning schedule)
├── progress.md (track your progress)
├── code/
│   ├── lambda_basics.java (Lambda syntax, functional interfaces, method references)
│   ├── streams_basics.java (Stream creation, intermediate/terminal operations)
│   ├── stream_operations.java (filter, map, flatMap, reduce, collect)
│   ├── collectors_demo.java (Collectors API, groupingBy, partitioning)
│   └── practice_problems.java (10 real-world stream problems)
├── notes/
│   ├── lambda_notes.md (Lambda expressions deep dive)
│   ├── streams_notes.md (Stream API comprehensive guide)
│   └── optional_notes.md (Optional API for null safety)
└── resources/
    ├── streams_cheatsheet.md (Quick reference)
    ├── common_patterns.md (Stream recipes)
    └── interview_questions.md (40 interview Q&A)
```

---

## Learning Path

### Morning (3 hours): Lambda Foundations
1. **Lambda Basics** (1h)
   - Functional interfaces (@FunctionalInterface)
   - Lambda syntax variations
   - Predicate, Function, Consumer, Supplier
   
2. **Method References** (1h)
   - Static method references (Class::staticMethod)
   - Instance method references (object::instanceMethod)
   - Constructor references (Class::new)
   
3. **Practice** (1h)
   - Replace anonymous classes with lambdas
   - Write custom functional interfaces
   - Use built-in functional interfaces

### Afternoon (4 hours): Stream API Mastery
1. **Stream Basics** (1.5h)
   - Creating streams
   - Intermediate operations (filter, map, sorted)
   - Terminal operations (collect, forEach)
   
2. **Advanced Operations** (1.5h)
   - flatMap for nested collections
   - reduce for aggregations
   - Collectors: groupingBy, partitioningBy
   
3. **Real-World Problems** (1h)
   - Filter and transform collections
   - Group data by properties
   - Find statistics (sum, average, max)

### Evening (2 hours): Practice & Interview Prep
1. **Coding Practice** (1h)
   - Solve 5 stream-based problems
   - Refactor imperative code to streams
   
2. **Interview Preparation** (1h)
   - Review common stream patterns
   - Study interview questions
   - Practice explaining stream pipelines

---

## Key Concepts

### Functional Interfaces (Built-in)
```java
Predicate<T>      : T -> boolean        // test()
Function<T, R>    : T -> R              // apply()
Consumer<T>       : T -> void           // accept()
Supplier<T>       : () -> T             // get()
BiFunction<T,U,R> : (T, U) -> R         // apply()
UnaryOperator<T>  : T -> T              // apply()
BinaryOperator<T> : (T, T) -> T         // apply()
```

### Stream Pipeline Pattern
```
Source → Intermediate Operations → Terminal Operation
        (lazy, returns stream)     (eager, produces result)

Example:
list.stream()              // Source
    .filter(x -> x > 10)   // Intermediate
    .map(x -> x * 2)       // Intermediate
    .collect(toList());    // Terminal (triggers execution)
```

### Common Stream Patterns

**Filter + Map + Collect**:
```java
List<String> names = employees.stream()
    .filter(e -> e.getSalary() > 50000)
    .map(Employee::getName)
    .collect(Collectors.toList());
```

**GroupBy**:
```java
Map<String, List<Employee>> byDept = employees.stream()
    .collect(Collectors.groupingBy(Employee::getDepartment));
```

**Reduce**:
```java
int sum = numbers.stream()
    .reduce(0, Integer::sum);
```

**FlatMap** (flatten nested lists):
```java
List<String> allNames = departments.stream()
    .flatMap(d -> d.getEmployees().stream())
    .map(Employee::getName)
    .collect(Collectors.toList());
```

---

## Practice Problems (Covered Today)

1. **Filter and Transform**: Get names of employees with salary > 50k
2. **GroupBy**: Group employees by department
3. **Statistics**: Find average salary, max salary
4. **FlatMap**: Get all student names from all courses
5. **Partition**: Separate passing and failing students
6. **Reduce**: Calculate total sales
7. **Distinct**: Remove duplicate elements
8. **Sorting**: Sort employees by salary then name
9. **Optional**: Safe null handling
10. **Parallel Streams**: Performance comparison

---

## Time Complexity

| Operation | Complexity | Notes |
|-----------|------------|-------|
| filter() | O(n) | Processes each element |
| map() | O(n) | Transforms each element |
| sorted() | O(n log n) | Uses TimSort |
| distinct() | O(n) | Uses HashSet internally |
| limit(k) | O(k) | Short-circuits after k |
| reduce() | O(n) | Processes all elements |
| collect() | O(n) | Depends on collector |
| parallel() | O(n/p) | p = number of cores |

---

## Common Mistakes to Avoid

❌ **Reusing streams**:
```java
Stream<String> stream = list.stream();
stream.forEach(System.out::println);
stream.count();  // IllegalStateException - stream already used
```

❌ **Side effects in lambdas**:
```java
List<Integer> results = new ArrayList<>();
stream.forEach(x -> results.add(x));  // BAD - external mutation
```

❌ **Using parallel without testing**:
```java
list.parallelStream()  // May not be faster for small lists
```

✅ **Correct approach**:
```java
List<Integer> results = stream.collect(Collectors.toList());
```

---

## Interview Focus Areas

1. **Lambda syntax**: All variations (zero params, one param, multiple params, block body)
2. **Functional interfaces**: Predicate, Function, Consumer, Supplier
3. **Method references**: When and how to use
4. **Stream operations**: filter, map, flatMap, reduce, collect
5. **Collectors**: groupingBy, partitioningBy, joining
6. **Optional**: orElse, orElseGet, map, flatMap
7. **Parallel streams**: When to use, performance implications
8. **Real problems**: Solve common data transformation tasks

---

## Expected Outcomes

By the end of Day 10, you will:

✓ Write lambda expressions with confidence  
✓ Use method references appropriately  
✓ Build complex stream pipelines  
✓ Apply collectors for grouping and partitioning  
✓ Handle null safely with Optional  
✓ Solve real-world data transformation problems  
✓ Explain stream lazy evaluation  
✓ Know when to use parallel streams  

---

## Code Statistics

- **5 code files**: ~2,000 lines of functional Java
- **10 practice problems**: Real-world scenarios
- **40 interview questions**: With detailed answers
- **3 comprehensive notes**: Lambda, Streams, Optional
- **2 cheat sheets**: Quick reference guides

---

## Connection to Previous Days

- **Day 8 (OOP)**: Interfaces → Functional interfaces
- **Day 9 (Collections)**: Collections → Stream sources
- **Future**: Streams used in DSA, database queries, web APIs

---

## Quick Start

```bash
cd Day-10/code

# Compile all files
javac *.java

# Run examples
java lambda_basics
java streams_basics
java stream_operations
java collectors_demo
java practice_problems
```

---

## Success Criteria

### Must Complete
- [ ] Understand lambda syntax (all variations)
- [ ] Know 5+ built-in functional interfaces
- [ ] Write stream pipelines (filter, map, collect)
- [ ] Use Collectors.groupingBy()
- [ ] Solve 5 practice problems

### Should Complete
- [ ] Master method references
- [ ] Understand lazy evaluation
- [ ] Use flatMap for nested collections
- [ ] Apply reduce operations
- [ ] Handle Optional properly

### Bonus
- [ ] Parallel stream performance testing
- [ ] Custom collectors
- [ ] Advanced collector compositions
- [ ] Refactor Day 9 code to use streams

---

**Ready to transform your Java code with functional programming!** 🚀

**Estimated Time**: 9 hours  
**Difficulty**: ⭐⭐⭐⭐ (Intermediate-Advanced)  
**Interview Weight**: ⭐⭐⭐⭐⭐ (Very High - Java 8+ is standard now)
