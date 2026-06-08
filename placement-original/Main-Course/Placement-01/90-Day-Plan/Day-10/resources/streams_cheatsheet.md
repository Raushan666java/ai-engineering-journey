# Streams API Quick Reference Cheatsheet

## Stream Creation

```java
// From Collection
List<String> list = Arrays.asList("a", "b", "c");
Stream<String> stream = list.stream();
Stream<String> parallel = list.parallelStream();

// From Array
String[] array = {"a", "b", "c"};
Stream<String> stream = Arrays.stream(array);

// From Values
Stream<String> stream = Stream.of("a", "b", "c");
Stream<String> empty = Stream.empty();

// Infinite Streams
Stream<Double> random = Stream.generate(Math::random);
Stream<Integer> evens = Stream.iterate(0, n -> n + 2);

// Primitive Streams
IntStream numbers = IntStream.range(1, 10);          // 1 to 9
IntStream numbers = IntStream.rangeClosed(1, 10);    // 1 to 10
```

## Intermediate Operations (Return Stream, Lazy)

```java
// filter - Select elements
stream.filter(n -> n % 2 == 0)

// map - Transform elements
stream.map(String::toUpperCase)
stream.map(s -> s.length())

// flatMap - Flatten nested structures
listOfLists.stream().flatMap(List::stream)
sentences.stream().flatMap(s -> Arrays.stream(s.split(" ")))

// distinct - Remove duplicates
stream.distinct()

// sorted - Sort elements
stream.sorted()
stream.sorted(Comparator.reverseOrder())
stream.sorted(Comparator.comparing(Person::getAge))

// limit - Take first n elements
stream.limit(10)

// skip - Skip first n elements
stream.skip(5)

// peek - Debug/inspect (side effect)
stream.peek(System.out::println)
```

## Terminal Operations (Trigger Execution)

```java
// forEach - Iterate
stream.forEach(System.out::println)

// collect - Accumulate to collection
stream.collect(Collectors.toList())
stream.collect(Collectors.toSet())
stream.collect(Collectors.joining(", "))

// reduce - Combine elements
stream.reduce(0, Integer::sum)
stream.reduce(1, (a, b) -> a * b)
stream.reduce(Integer::max)

// count - Count elements
long count = stream.count()

// min/max - Find extremes
Optional<Integer> min = stream.min(Integer::compareTo)
Optional<Integer> max = stream.max(Integer::compareTo)

// anyMatch/allMatch/noneMatch - Test elements
boolean hasEven = stream.anyMatch(n -> n % 2 == 0)
boolean allPositive = stream.allMatch(n -> n > 0)
boolean noNegative = stream.noneMatch(n -> n < 0)

// findFirst/findAny - Find element
Optional<Integer> first = stream.findFirst()
Optional<Integer> any = stream.findAny()

// toArray - Convert to array
Integer[] array = stream.toArray(Integer[]::new)
```

## Collectors

```java
// Basic Collections
Collectors.toList()
Collectors.toSet()
Collectors.toCollection(ArrayList::new)

// To Map
Collectors.toMap(keyMapper, valueMapper)
Collectors.toMap(k -> k, v -> v, (v1, v2) -> v1)  // With merge function

// Joining Strings
Collectors.joining()                    // Concatenate
Collectors.joining(", ")                // With delimiter
Collectors.joining(", ", "[", "]")      // With prefix/suffix

// Grouping
Collectors.groupingBy(classifier)
Collectors.groupingBy(Person::getDept, Collectors.counting())
Collectors.groupingBy(Person::getDept, Collectors.toList())

// Partitioning (Boolean grouping)
Collectors.partitioningBy(predicate)
Collectors.partitioningBy(p -> p.getAge() >= 18)

// Counting
Collectors.counting()

// Summing
Collectors.summingInt(mapper)
Collectors.summingDouble(mapper)
Collectors.summingLong(mapper)

// Averaging
Collectors.averagingInt(mapper)
Collectors.averagingDouble(mapper)

// Statistics
Collectors.summarizingInt(mapper)
Collectors.summarizingDouble(mapper)

// Min/Max
Collectors.minBy(comparator)
Collectors.maxBy(comparator)

// Mapping
Collectors.mapping(mapper, downstream)

// Filtering (Java 9+)
Collectors.filtering(predicate, downstream)

// FlatMapping (Java 9+)
Collectors.flatMapping(mapper, downstream)

// Collecting and Then
Collectors.collectingAndThen(downstream, finisher)
```

## Common Patterns

### Filter-Map-Collect
```java
List<String> result = list.stream()
    .filter(s -> s.length() > 3)
    .map(String::toUpperCase)
    .collect(Collectors.toList());
```

### GroupBy
```java
Map<String, List<Employee>> byDept = employees.stream()
    .collect(Collectors.groupingBy(Employee::getDepartment));
```

### GroupBy with Counting
```java
Map<String, Long> countByDept = employees.stream()
    .collect(Collectors.groupingBy(
        Employee::getDepartment,
        Collectors.counting()
    ));
```

### GroupBy with Summing
```java
Map<String, Double> totalSalaryByDept = employees.stream()
    .collect(Collectors.groupingBy(
        Employee::getDepartment,
        Collectors.summingDouble(Employee::getSalary)
    ));
```

### Partition and Process
```java
Map<Boolean, List<Person>> partition = people.stream()
    .collect(Collectors.partitioningBy(p -> p.getAge() >= 18));

List<Person> adults = partition.get(true);
List<Person> minors = partition.get(false);
```

### FlatMap to Flatten
```java
List<String> allWords = sentences.stream()
    .flatMap(s -> Arrays.stream(s.split(" ")))
    .collect(Collectors.toList());
```

### Reduce for Aggregation
```java
int sum = numbers.stream().reduce(0, Integer::sum);
int product = numbers.stream().reduce(1, (a, b) -> a * b);
Optional<Integer> max = numbers.stream().reduce(Integer::max);
```

### Find Top N
```java
List<Employee> top3 = employees.stream()
    .sorted(Comparator.comparing(Employee::getSalary).reversed())
    .limit(3)
    .collect(Collectors.toList());
```

### Statistics
```java
DoubleSummaryStatistics stats = employees.stream()
    .collect(Collectors.summarizingDouble(Employee::getSalary));

System.out.println("Count: " + stats.getCount());
System.out.println("Sum: " + stats.getSum());
System.out.println("Min: " + stats.getMin());
System.out.println("Max: " + stats.getMax());
System.out.println("Average: " + stats.getAverage());
```

## Primitive Streams

```java
// IntStream
IntStream.range(1, 10)          // 1 to 9
IntStream.rangeClosed(1, 10)    // 1 to 10
IntStream.of(1, 2, 3, 4, 5)

// Operations
int sum = intStream.sum();
OptionalDouble avg = intStream.average();
OptionalInt max = intStream.max();
OptionalInt min = intStream.min();
int count = intStream.count();

// Boxing/Unboxing
Stream<Integer> boxed = intStream.boxed();
IntStream unboxed = stream.mapToInt(Integer::intValue);

// LongStream, DoubleStream
LongStream.range(1L, 100L);
DoubleStream.of(1.0, 2.0, 3.0);
```

## Parallel Streams

```java
// Create parallel stream
Stream<T> parallel = collection.parallelStream();
Stream<T> parallel = stream.parallel();

// Convert to sequential
Stream<T> sequential = parallelStream.sequential();

// Example
long sum = numbers.parallelStream()
    .mapToLong(Long::valueOf)
    .sum();
```

## Optional

```java
// Creation
Optional<String> optional = Optional.of("value");
Optional<String> nullable = Optional.ofNullable(maybeNull);
Optional<String> empty = Optional.empty();

// Check presence
boolean present = optional.isPresent();
boolean empty = optional.isEmpty();  // Java 11+

// Get value
String value = optional.get();                          // May throw
String value = optional.orElse("default");
String value = optional.orElseGet(() -> "computed");
String value = optional.orElseThrow();

// Conditional action
optional.ifPresent(v -> System.out.println(v));
optional.ifPresentOrElse(                               // Java 9+
    v -> System.out.println(v),
    () -> System.out.println("empty")
);

// Transform
Optional<Integer> length = optional.map(String::length);
Optional<String> address = user.flatMap(User::getAddress);

// Filter
Optional<String> longString = optional.filter(s -> s.length() > 10);

// Alternative
Optional<String> alt = optional.or(() -> Optional.of("alternative"));  // Java 9+
```

## Lambda Expressions

```java
// Syntax
() -> expression
(x) -> expression
x -> expression                    // Single parameter, parens optional
(x, y) -> expression
(x, y) -> { statements; }

// Functional Interfaces
Predicate<Integer> isEven = n -> n % 2 == 0;
Function<String, Integer> length = s -> s.length();
Consumer<String> print = s -> System.out.println(s);
Supplier<Double> random = () -> Math.random();

// Method References
Function<String, Integer> parser = Integer::parseInt;      // Static
Function<String, String> upper = String::toUpperCase;      // Instance
Supplier<List<String>> list = ArrayList::new;              // Constructor
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
| skip(k) | O(k) |
| count | O(n) |
| collect | O(n) |
| reduce | O(n) |
| anyMatch/allMatch | O(n) worst case |
| findFirst/findAny | O(1) to O(n) |

## Best Practices

✅ **Use method references** when possible  
✅ **Prefer streams** for clarity and readability  
✅ **Use primitive streams** (IntStream, etc.) to avoid boxing  
✅ **Avoid side effects** in lambda expressions  
✅ **Use parallel streams** for large datasets and CPU-intensive operations  
✅ **Short-circuit operations** with findFirst, findAny, limit  

❌ **Don't reuse streams** (they can only be used once)  
❌ **Don't use parallel streams** for small data or I/O operations  
❌ **Don't modify external state** inside stream operations  
❌ **Don't use get()** on Optional without checking  

## Common Mistakes

```java
// ❌ Reusing stream
Stream<String> stream = list.stream();
stream.forEach(System.out::println);
stream.count();  // IllegalStateException!

// ✅ Create new stream
list.stream().forEach(System.out::println);
list.stream().count();

// ❌ Side effects
List<String> result = new ArrayList<>();
list.stream().forEach(s -> result.add(s));

// ✅ Use collect
List<String> result = list.stream().collect(Collectors.toList());

// ❌ Unsafe get()
String value = optional.get();

// ✅ Safe retrieval
String value = optional.orElse("default");
optional.ifPresent(v -> System.out.println(v));
```

## Quick Examples

```java
// Filter even numbers and square them
List<Integer> result = numbers.stream()
    .filter(n -> n % 2 == 0)
    .map(n -> n * n)
    .collect(Collectors.toList());

// Group employees by department
Map<String, List<Employee>> grouped = employees.stream()
    .collect(Collectors.groupingBy(Employee::getDept));

// Find longest word
Optional<String> longest = words.stream()
    .max(Comparator.comparing(String::length));

// Calculate total salary
double total = employees.stream()
    .mapToDouble(Employee::getSalary)
    .sum();

// Get unique skills from all employees
Set<String> skills = employees.stream()
    .flatMap(e -> e.getSkills().stream())
    .collect(Collectors.toSet());
```

---

**Remember:** Streams are powerful but should be used judiciously. For simple loops, traditional iteration might be clearer. Use streams when they make code more readable and maintainable.
