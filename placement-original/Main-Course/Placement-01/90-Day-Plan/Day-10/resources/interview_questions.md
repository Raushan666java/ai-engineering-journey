# Streams and Lambda Expressions - Interview Questions

## 40 Essential Interview Questions with Answers

### Basic Concepts (1-10)

**Q1: What is a lambda expression in Java?**

A lambda expression is an anonymous function that can be treated as an instance of a functional interface. It provides a clear and concise way to represent one method interface using an expression.

Syntax: `(parameters) -> expression` or `(parameters) -> { statements; }`

**Q2: What is a functional interface?**

A functional interface is an interface with exactly one abstract method. It can have multiple default or static methods, but only one abstract method. Examples: `Runnable`, `Callable`, `Comparator`, `Predicate`, `Function`.

**Q3: What is the Stream API?**

The Stream API is a functional approach to processing collections of data introduced in Java 8. It allows declarative data manipulation through a pipeline of operations (filter, map, reduce, etc.).

**Q4: What is the difference between intermediate and terminal operations?**

- **Intermediate operations** return a Stream and are lazy (filter, map, flatMap, sorted, distinct)
- **Terminal operations** trigger execution and return non-Stream result (collect, forEach, reduce, count)

**Q5: What is lazy evaluation in streams?**

Lazy evaluation means intermediate operations are not executed until a terminal operation is invoked. This allows optimization - only necessary elements are processed.

```java
Stream<Integer> stream = numbers.stream()
    .filter(n -> n % 2 == 0)
    .map(n -> n * 2);  // Nothing executed yet

List<Integer> result = stream.collect(Collectors.toList());  // Now executed
```

**Q6: Can you reuse a stream after a terminal operation?**

No, streams can only be used once. After a terminal operation, the stream is consumed and cannot be reused. Attempting to reuse throws `IllegalStateException`.

**Q7: What is the difference between `map()` and `flatMap()`?**

- **map()**: One-to-one transformation. `Stream<T>` → `Stream<R>`
- **flatMap()**: One-to-many transformation, then flattens. `Stream<T>` → `Stream<Stream<R>>` → `Stream<R>`

```java
// map: List of lengths
List<Integer> lengths = words.stream()
    .map(String::length)
    .collect(Collectors.toList());

// flatMap: Flatten list of lists
List<Integer> flat = listOfLists.stream()
    .flatMap(List::stream)
    .collect(Collectors.toList());
```

**Q8: What are method references?**

Method references are shorthand notation for lambda expressions that only call a single method.

Types:
- Static: `Integer::parseInt`
- Instance (specific object): `str::toUpperCase`
- Instance (arbitrary object): `String::toUpperCase`
- Constructor: `ArrayList::new`

**Q9: What is the difference between `Collection` and `Stream`?**

- **Collection**: Data structure that stores elements
- **Stream**: Sequence of elements supporting functional operations, doesn't store data

**Q10: What is the purpose of `Optional`?**

`Optional<T>` is a container object representing presence or absence of a value, designed to reduce `NullPointerException` and make APIs clearer about potentially missing values.

### Intermediate Level (11-25)

**Q11: What is the difference between `findFirst()` and `findAny()`?**

- **findFirst()**: Returns first element in encounter order
- **findAny()**: Returns any element (faster in parallel streams, no order guarantee)

**Q12: How does `groupingBy()` work?**

`groupingBy()` groups elements by a classifier function into a `Map<K, List<V>>`.

```java
Map<String, List<Employee>> byDept = employees.stream()
    .collect(Collectors.groupingBy(Employee::getDepartment));
```

**Q13: What is the difference between `reduce()` and `collect()`?**

- **reduce()**: Combines elements into a single result using an accumulator function
- **collect()**: Accumulates elements into a mutable container (List, Set, Map)

**Q14: What is the difference between `Predicate` and `Function`?**

- **Predicate<T>**: Takes T, returns boolean (`test()` method) - for filtering
- **Function<T,R>**: Takes T, returns R (`apply()` method) - for transformation

**Q15: Can you throw checked exceptions from a lambda expression?**

Only if the functional interface's abstract method declares the exception. Otherwise, wrap in unchecked exception or handle within lambda.

**Q16: What is variable capture in lambda expressions?**

Lambda expressions can capture variables from the enclosing scope, but only if they are **effectively final** (not modified after initialization).

```java
int multiplier = 10;  // Effectively final
Function<Integer, Integer> f = x -> x * multiplier;  // OK

multiplier = 20;  // ERROR: Cannot modify captured variable
```

**Q17: What is the difference between `orElse()` and `orElseGet()`?**

- **orElse(T value)**: Always evaluates the default value
- **orElseGet(Supplier<T>)**: Only evaluates supplier if Optional is empty (lazy)

```java
optional.orElse(expensiveMethod());     // Always called
optional.orElseGet(() -> expensiveMethod());  // Only if empty
```

**Q18: What is `partitioningBy()`?**

A specialized form of `groupingBy()` that splits elements into two groups based on a predicate, returning `Map<Boolean, List<T>>`.

```java
Map<Boolean, List<Person>> partitioned = people.stream()
    .collect(Collectors.partitioningBy(p -> p.getAge() >= 18));
```

**Q19: What is the difference between `Stream.of()` and `Arrays.stream()`?**

- **Stream.of(T... values)**: Creates stream from varargs
- **Arrays.stream(T[] array)**: Creates stream from array

Both produce the same result for arrays:
```java
Stream<String> s1 = Stream.of("a", "b", "c");
Stream<String> s2 = Arrays.stream(new String[]{"a", "b", "c"});
```

**Q20: How do you create an infinite stream?**

Using `Stream.generate()` or `Stream.iterate()`:

```java
Stream<Double> random = Stream.generate(Math::random);
Stream<Integer> evens = Stream.iterate(0, n -> n + 2);

// Must use limit() to avoid infinite processing
random.limit(10).forEach(System.out::println);
```

**Q21: What is the purpose of `peek()`?**

`peek()` is an intermediate operation that performs an action on each element without modifying the stream. Useful for debugging.

```java
list.stream()
    .peek(e -> System.out.println("Original: " + e))
    .map(String::toUpperCase)
    .peek(e -> System.out.println("Uppercase: " + e))
    .collect(Collectors.toList());
```

**Q22: What are primitive streams?**

`IntStream`, `LongStream`, `DoubleStream` are specialized streams for primitives to avoid boxing/unboxing overhead.

```java
IntStream.range(1, 10)  // 1 to 9
IntStream.rangeClosed(1, 10)  // 1 to 10

int sum = numbers.stream()
    .mapToInt(Integer::intValue)
    .sum();
```

**Q23: What is the difference between `map()` and `mapToInt()`?**

- **map()**: Returns `Stream<R>`
- **mapToInt()**: Returns `IntStream` (primitive stream, avoids boxing)

**Q24: What is the difference between `anyMatch()`, `allMatch()`, and `noneMatch()`?**

- **anyMatch()**: Returns true if ANY element matches
- **allMatch()**: Returns true if ALL elements match
- **noneMatch()**: Returns true if NO elements match

**Q25: Can you modify a collection while streaming over it?**

No, it will throw `ConcurrentModificationException`. Streams operate on a snapshot or immutable view.

### Advanced Level (26-40)

**Q26: When should you use parallel streams?**

**Use when:**
- Large datasets (10,000+ elements)
- CPU-intensive operations
- Independent operations (no shared state)
- Stateless operations

**Avoid when:**
- Small datasets (overhead > benefit)
- I/O operations
- Operations with side effects
- Order-dependent operations

**Q27: What is the difference between `collect()` and `forEach()`?**

- **collect()**: Terminal operation that accumulates elements into a result container (functional, returns value)
- **forEach()**: Terminal operation for side effects (void, doesn't return anything)

**Q28: How do you handle exceptions in stream operations?**

Wrap in try-catch inside lambda or extract to method:

```java
// Option 1: Wrap in lambda
list.stream()
    .map(s -> {
        try {
            return Integer.parseInt(s);
        } catch (NumberFormatException e) {
            return 0;
        }
    })
    .collect(Collectors.toList());

// Option 2: Extract to method
list.stream()
    .map(this::parseOrDefault)
    .collect(Collectors.toList());

private Integer parseOrDefault(String s) {
    try {
        return Integer.parseInt(s);
    } catch (NumberFormatException e) {
        return 0;
    }
}
```

**Q29: What is `Collectors.collectingAndThen()`?**

Applies a finishing transformation to the result of a collector.

```java
List<Employee> top3 = employees.stream()
    .collect(Collectors.collectingAndThen(
        Collectors.toList(),
        list -> {
            list.sort(Comparator.comparing(Employee::getSalary).reversed());
            return list.subList(0, Math.min(3, list.size()));
        }
    ));
```

**Q30: What is the difference between `limit()` and `skip()`?**

- **limit(n)**: Takes first n elements
- **skip(n)**: Skips first n elements

```java
// Pagination
int page = 2, size = 10;
List<T> results = list.stream()
    .skip((page - 1) * size)
    .limit(size)
    .collect(Collectors.toList());
```

**Q31: Can you chain `flatMap()` operations?**

Yes, you can chain multiple `flatMap()` operations to flatten nested structures multiple levels deep.

```java
listOfListOfLists.stream()
    .flatMap(List::stream)
    .flatMap(List::stream)
    .collect(Collectors.toList());
```

**Q32: What is `joining()` collector?**

Concatenates stream elements into a single String.

```java
String result = words.stream()
    .collect(Collectors.joining());  // "helloworld"

String result = words.stream()
    .collect(Collectors.joining(", "));  // "hello, world"

String result = words.stream()
    .collect(Collectors.joining(", ", "[", "]"));  // "[hello, world]"
```

**Q33: How do you convert a stream to an array?**

Using `toArray()`:

```java
Object[] array = stream.toArray();
String[] array = stream.toArray(String[]::new);
Integer[] array = stream.toArray(Integer[]::new);
```

**Q34: What is the time complexity of `sorted()` in streams?**

O(n log n) - it uses a stable sort algorithm (typically TimSort).

**Q35: Can you create a custom collector?**

Yes, using `Collector.of()`:

```java
Collector<String, StringBuilder, String> collector = Collector.of(
    StringBuilder::new,              // Supplier
    StringBuilder::append,           // Accumulator
    StringBuilder::append,           // Combiner
    StringBuilder::toString          // Finisher
);
```

**Q36: What is the difference between sequential and parallel streams?**

- **Sequential**: Processes elements in a single thread, maintains order
- **Parallel**: Uses ForkJoinPool to process elements in multiple threads

```java
list.stream()            // Sequential
list.parallelStream()    // Parallel
```

**Q37: What happens if you don't call a terminal operation?**

Nothing - intermediate operations are lazy and won't execute without a terminal operation.

**Q38: Can `Optional` contain null?**

No. `Optional.of(null)` throws `NullPointerException`. Use `Optional.ofNullable(null)` which returns `Optional.empty()`.

**Q39: What is the difference between `filter()` and `Predicate.and()`?**

Both filter elements, but:
- **filter()**: Stream operation
- **Predicate.and()**: Predicate composition

```java
// Using filter
stream.filter(p1).filter(p2)

// Using Predicate composition
Predicate<T> combined = p1.and(p2);
stream.filter(combined)
```

**Q40: How do you find duplicates using streams?**

```java
Set<Integer> seen = new HashSet<>();
Set<Integer> duplicates = numbers.stream()
    .filter(n -> !seen.add(n))
    .collect(Collectors.toSet());
```

## Coding Questions

### Q1: Find sum of squares of even numbers
```java
int sum = numbers.stream()
    .filter(n -> n % 2 == 0)
    .map(n -> n * n)
    .reduce(0, Integer::sum);
```

### Q2: Group employees by department and count
```java
Map<String, Long> count = employees.stream()
    .collect(Collectors.groupingBy(
        Employee::getDepartment,
        Collectors.counting()
    ));
```

### Q3: Find longest word
```java
Optional<String> longest = words.stream()
    .max(Comparator.comparing(String::length));
```

### Q4: Flatten list of lists
```java
List<Integer> flat = listOfLists.stream()
    .flatMap(List::stream)
    .collect(Collectors.toList());
```

### Q5: Get unique skills from employees
```java
Set<String> skills = employees.stream()
    .flatMap(e -> e.getSkills().stream())
    .collect(Collectors.toSet());
```

## Key Takeaways for Interviews

✅ Understand lazy evaluation  
✅ Know difference between map/flatMap  
✅ Know intermediate vs terminal operations  
✅ Understand Optional and when to use it  
✅ Know when to use parallel streams  
✅ Be able to write common patterns (filter-map-collect, groupBy, reduce)  
✅ Understand functional interfaces (Predicate, Function, Consumer, Supplier)  
✅ Know method references syntax  
✅ Understand variable capture in lambdas  
✅ Be able to explain benefits over imperative code  
