# Streams API - Comprehensive Notes

## Table of Contents
- [Introduction](#introduction)
- [Stream Basics](#stream-basics)
- [Creating Streams](#creating-streams)
- [Intermediate Operations](#intermediate-operations)
- [Terminal Operations](#terminal-operations)
- [Collectors](#collectors)
- [Parallel Streams](#parallel-streams)
- [Best Practices](#best-practices)

## Introduction

The Stream API, introduced in Java 8, provides a functional approach to processing collections of data. It allows you to write cleaner, more declarative code for data manipulation.

### Key Characteristics
- **Not a data structure**: Streams don't store data, they operate on data sources
- **Functional**: Operations don't modify the source
- **Lazy**: Intermediate operations are not executed until a terminal operation is invoked
- **Possibly unbounded**: Can work with infinite streams
- **Consumable**: Can only be used once

### Benefits
✅ More readable code  
✅ Better performance with parallel processing  
✅ Reduced boilerplate  
✅ Functional programming style  
✅ Easy to parallelize  

## Stream Basics

### Stream Pipeline Structure
```
Source → Intermediate Operations → Terminal Operation
```

Example:
```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

List<Integer> result = numbers.stream()           // Source
    .filter(n -> n % 2 == 0)                       // Intermediate
    .map(n -> n * 2)                               // Intermediate
    .collect(Collectors.toList());                 // Terminal
```

### Lazy Evaluation

Intermediate operations are **lazy** - they don't execute until a terminal operation is called.

```java
Stream<Integer> stream = numbers.stream()
    .filter(n -> {
        System.out.println("Filtering: " + n);
        return n % 2 == 0;
    })
    .map(n -> {
        System.out.println("Mapping: " + n);
        return n * 2;
    });

System.out.println("Stream created, no output yet");

// Terminal operation triggers execution
List<Integer> result = stream.collect(Collectors.toList());
// Now you see filtering and mapping output
```

## Creating Streams

### 1. From Collections
```java
List<String> list = Arrays.asList("a", "b", "c");
Stream<String> stream = list.stream();

Set<Integer> set = new HashSet<>(Arrays.asList(1, 2, 3));
Stream<Integer> stream = set.stream();

Map<String, Integer> map = new HashMap<>();
Stream<Map.Entry<String, Integer>> stream = map.entrySet().stream();
Stream<String> keys = map.keySet().stream();
Stream<Integer> values = map.values().stream();
```

### 2. From Arrays
```java
String[] array = {"a", "b", "c"};
Stream<String> stream = Arrays.stream(array);

int[] numbers = {1, 2, 3, 4, 5};
IntStream intStream = Arrays.stream(numbers);
```

### 3. Using Stream.of()
```java
Stream<String> stream = Stream.of("a", "b", "c");
Stream<Integer> stream = Stream.of(1, 2, 3, 4, 5);
Stream<String> empty = Stream.empty();
```

### 4. Infinite Streams

**Stream.generate()** - Supply values
```java
Stream<Double> random = Stream.generate(Math::random);
random.limit(10).forEach(System.out::println);

Stream<String> hellos = Stream.generate(() -> "Hello");
hellos.limit(5).forEach(System.out::println);
```

**Stream.iterate()** - Generate sequence
```java
// Even numbers: 0, 2, 4, 6, 8...
Stream<Integer> evens = Stream.iterate(0, n -> n + 2);
evens.limit(10).forEach(System.out::println);

// Fibonacci
Stream<long[]> fibonacci = Stream.iterate(
    new long[]{0, 1}, 
    f -> new long[]{f[1], f[0] + f[1]}
);
fibonacci.limit(10)
    .map(f -> f[0])
    .forEach(System.out::println);
```

### 5. Primitive Streams
```java
// IntStream
IntStream.range(1, 5);        // 1, 2, 3, 4 (exclusive end)
IntStream.rangeClosed(1, 5);  // 1, 2, 3, 4, 5 (inclusive)

// LongStream
LongStream.range(1L, 100L);

// DoubleStream
DoubleStream.of(1.0, 2.0, 3.0);
```

### 6. From Files
```java
// Read lines from file
Stream<String> lines = Files.lines(Paths.get("file.txt"));

// List files in directory
Stream<Path> files = Files.list(Paths.get("/path/to/dir"));
```

## Intermediate Operations

These operations return a new Stream and are lazy (not executed until terminal operation).

### filter(Predicate<T>)
Select elements that match a condition.

```java
Stream<T> filter(Predicate<? super T> predicate)

// Example
List<Integer> evens = numbers.stream()
    .filter(n -> n % 2 == 0)
    .collect(Collectors.toList());
```

### map(Function<T,R>)
Transform each element.

```java
<R> Stream<R> map(Function<? super T, ? extends R> mapper)

// Example
List<String> words = Arrays.asList("java", "python");
List<Integer> lengths = words.stream()
    .map(String::length)
    .collect(Collectors.toList());
// [4, 6]
```

### flatMap(Function<T, Stream<R>>)
Transform each element to a stream, then flatten all streams into one.

```java
<R> Stream<R> flatMap(Function<? super T, ? extends Stream<? extends R>> mapper)

// Example: Flatten list of lists
List<List<Integer>> listOfLists = Arrays.asList(
    Arrays.asList(1, 2), 
    Arrays.asList(3, 4)
);

List<Integer> flattened = listOfLists.stream()
    .flatMap(List::stream)
    .collect(Collectors.toList());
// [1, 2, 3, 4]

// Example: Split strings into words
List<String> sentences = Arrays.asList("Hello World", "Java Streams");
List<String> words = sentences.stream()
    .flatMap(s -> Arrays.stream(s.split(" ")))
    .collect(Collectors.toList());
// ["Hello", "World", "Java", "Streams"]
```

### distinct()
Remove duplicates.

```java
Stream<T> distinct()

// Example
List<Integer> unique = Arrays.asList(1, 2, 2, 3, 3, 3).stream()
    .distinct()
    .collect(Collectors.toList());
// [1, 2, 3]
```

### sorted()
Sort elements.

```java
Stream<T> sorted()
Stream<T> sorted(Comparator<? super T> comparator)

// Natural order
List<Integer> sorted = numbers.stream()
    .sorted()
    .collect(Collectors.toList());

// Custom comparator
List<String> sorted = words.stream()
    .sorted(Comparator.comparing(String::length))
    .collect(Collectors.toList());

// Reverse order
List<Integer> reversed = numbers.stream()
    .sorted(Comparator.reverseOrder())
    .collect(Collectors.toList());
```

### limit(n) and skip(n)
Pagination operations.

```java
Stream<T> limit(long maxSize)
Stream<T> skip(long n)

// First 5 elements
List<Integer> first5 = numbers.stream()
    .limit(5)
    .collect(Collectors.toList());

// Skip first 5, take next 5 (page 2)
List<Integer> page2 = numbers.stream()
    .skip(5)
    .limit(5)
    .collect(Collectors.toList());
```

### peek(Consumer<T>)
Perform an action without modifying the stream (useful for debugging).

```java
Stream<T> peek(Consumer<? super T> action)

// Example: Debug stream pipeline
List<Integer> result = numbers.stream()
    .peek(n -> System.out.println("Original: " + n))
    .filter(n -> n % 2 == 0)
    .peek(n -> System.out.println("Filtered: " + n))
    .map(n -> n * 2)
    .peek(n -> System.out.println("Mapped: " + n))
    .collect(Collectors.toList());
```

## Terminal Operations

These operations trigger stream execution and produce a result.

### forEach(Consumer<T>)
Perform an action for each element.

```java
void forEach(Consumer<? super T> action)

numbers.stream().forEach(System.out::println);
```

### collect(Collector)
Accumulate elements into a collection or other result.

```java
<R, A> R collect(Collector<? super T, A, R> collector)

List<Integer> list = stream.collect(Collectors.toList());
Set<Integer> set = stream.collect(Collectors.toSet());
String joined = stream.collect(Collectors.joining(", "));
```

### reduce(BinaryOperator<T>)
Combine elements into a single result.

```java
Optional<T> reduce(BinaryOperator<T> accumulator)
T reduce(T identity, BinaryOperator<T> accumulator)

// Sum
int sum = numbers.stream().reduce(0, Integer::sum);

// Product
int product = numbers.stream().reduce(1, (a, b) -> a * b);

// Max
Optional<Integer> max = numbers.stream().reduce(Integer::max);
```

### count()
Count elements.

```java
long count()

long count = numbers.stream().filter(n -> n > 5).count();
```

### min() and max()
Find minimum/maximum element.

```java
Optional<T> min(Comparator<? super T> comparator)
Optional<T> max(Comparator<? super T> comparator)

Optional<Integer> min = numbers.stream().min(Integer::compareTo);
Optional<Integer> max = numbers.stream().max(Integer::compareTo);
```

### anyMatch(), allMatch(), noneMatch()
Test elements against a predicate.

```java
boolean anyMatch(Predicate<? super T> predicate)
boolean allMatch(Predicate<? super T> predicate)
boolean noneMatch(Predicate<? super T> predicate)

boolean hasEven = numbers.stream().anyMatch(n -> n % 2 == 0);
boolean allPositive = numbers.stream().allMatch(n -> n > 0);
boolean noNegative = numbers.stream().noneMatch(n -> n < 0);
```

### findFirst() and findAny()
Find an element.

```java
Optional<T> findFirst()
Optional<T> findAny()

Optional<Integer> first = numbers.stream()
    .filter(n -> n > 5)
    .findFirst();

// findAny() is useful in parallel streams (faster)
Optional<Integer> any = numbers.parallelStream()
    .filter(n -> n > 5)
    .findAny();
```

### toArray()
Convert stream to array.

```java
Object[] toArray()
<A> A[] toArray(IntFunction<A[]> generator)

Integer[] array = numbers.stream().toArray(Integer[]::new);
```

## Collectors

The Collectors class provides common reduction operations.

### Basic Collectors
```java
// To List
List<T> list = stream.collect(Collectors.toList());

// To Set
Set<T> set = stream.collect(Collectors.toSet());

// To Map
Map<K, V> map = stream.collect(Collectors.toMap(
    keyMapper, 
    valueMapper
));

// Join strings
String joined = stream.collect(Collectors.joining(", "));
```

### Grouping
```java
// Group by
Map<K, List<V>> grouped = stream.collect(
    Collectors.groupingBy(classifier)
);

// Example: Group employees by department
Map<String, List<Employee>> byDept = employees.stream()
    .collect(Collectors.groupingBy(Employee::getDepartment));
```

### Partitioning
```java
// Partition into two groups (true/false)
Map<Boolean, List<T>> partitioned = stream.collect(
    Collectors.partitioningBy(predicate)
);

// Example: Partition by age
Map<Boolean, List<Person>> partitioned = people.stream()
    .collect(Collectors.partitioningBy(p -> p.getAge() >= 18));
```

### Statistical Collectors
```java
// Count
long count = stream.collect(Collectors.counting());

// Sum
double sum = stream.collect(Collectors.summingDouble(mapper));

// Average
double avg = stream.collect(Collectors.averagingDouble(mapper));

// Statistics summary
DoubleSummaryStatistics stats = stream
    .collect(Collectors.summarizingDouble(mapper));
```

## Parallel Streams

Parallel streams process elements concurrently using multiple threads.

### Creating Parallel Streams
```java
// From collection
Stream<T> parallelStream = collection.parallelStream();

// Convert sequential to parallel
Stream<T> parallel = stream.parallel();

// Convert parallel to sequential
Stream<T> sequential = parallelStream.sequential();
```

### When to Use Parallel Streams

**Good Use Cases:**
✅ Large datasets (10,000+ elements)  
✅ CPU-intensive operations  
✅ Independent operations (no shared state)  
✅ Stateless operations  

**Bad Use Cases:**
❌ Small datasets (overhead > benefit)  
❌ I/O operations (disk, network)  
❌ Operations with side effects  
❌ Order-dependent operations  

### Example
```java
// Sequential
long sum = numbers.stream()
    .mapToLong(Long::valueOf)
    .sum();

// Parallel (faster for large datasets)
long sum = numbers.parallelStream()
    .mapToLong(Long::valueOf)
    .sum();
```

## Best Practices

### 1. Prefer Streams for Clarity
```java
// Imperative (hard to read)
List<String> result = new ArrayList<>();
for (String s : list) {
    if (s.length() > 3) {
        result.add(s.toUpperCase());
    }
}

// Declarative (clear intent)
List<String> result = list.stream()
    .filter(s -> s.length() > 3)
    .map(String::toUpperCase)
    .collect(Collectors.toList());
```

### 2. Avoid Side Effects
```java
// Bad: Modifying external state
List<String> result = new ArrayList<>();
list.stream().forEach(s -> result.add(s));  // Side effect!

// Good: Use collect
List<String> result = list.stream().collect(Collectors.toList());
```

### 3. Use Primitive Streams
```java
// Bad: Boxing overhead
int sum = numbers.stream()
    .reduce(0, Integer::sum);

// Good: No boxing
int sum = numbers.stream()
    .mapToInt(Integer::intValue)
    .sum();
```

### 4. Short-Circuit Operations
```java
// Use findFirst/findAny for early termination
Optional<Integer> first = numbers.stream()
    .filter(n -> n > 100)
    .findFirst();  // Stops when first match found

// Use limit
List<Integer> first10 = numbers.stream()
    .limit(10)
    .collect(Collectors.toList());
```

### 5. Don't Reuse Streams
```java
// Bad
Stream<String> stream = list.stream();
stream.forEach(System.out::println);
stream.count();  // IllegalStateException!

// Good
list.stream().forEach(System.out::println);
list.stream().count();
```

## Time Complexity

| Operation | Complexity |
|-----------|------------|
| filter | O(n) |
| map | O(n) |
| flatMap | O(n*m) |
| distinct | O(n) |
| sorted | O(n log n) |
| limit(k) | O(k) |
| count | O(n) |
| collect | O(n) |
| reduce | O(n) |

## Common Patterns

### Pattern 1: Filter-Map-Collect
```java
List<Integer> result = list.stream()
    .filter(predicate)
    .map(transformer)
    .collect(Collectors.toList());
```

### Pattern 2: GroupBy
```java
Map<K, List<V>> grouped = list.stream()
    .collect(Collectors.groupingBy(classifier));
```

### Pattern 3: FlatMap-Distinct
```java
List<T> unique = listOfLists.stream()
    .flatMap(List::stream)
    .distinct()
    .collect(Collectors.toList());
```

### Pattern 4: Reduce-Sum
```java
int total = numbers.stream()
    .reduce(0, Integer::sum);
```

## Interview Questions

**Q1: What is the difference between map and flatMap?**
- `map`: One-to-one transformation (Stream<T> → Stream<R>)
- `flatMap`: One-to-many transformation, then flatten (Stream<T> → Stream<R>)

**Q2: Can you reuse a stream?**
- No, streams can only be used once. After terminal operation, stream is closed.

**Q3: What is lazy evaluation?**
- Intermediate operations are not executed until a terminal operation is invoked.

**Q4: When should you use parallel streams?**
- Large datasets (10k+ elements), CPU-intensive operations, independent operations.

**Q5: What is the difference between findFirst and findAny?**
- `findFirst`: Returns first element in encounter order
- `findAny`: Returns any element (faster in parallel streams, no order guarantee)

## Summary

✅ Streams enable functional-style operations on data  
✅ Stream pipeline: Source → Intermediate → Terminal  
✅ Intermediate operations are lazy  
✅ Terminal operations trigger execution  
✅ Use method references for cleaner code  
✅ Avoid side effects  
✅ Parallel streams for large datasets  
✅ Streams are single-use only  

## Further Reading
- Java Stream API Documentation
- "Modern Java in Action" book
- "Java 8 Lambdas" by Richard Warburton
