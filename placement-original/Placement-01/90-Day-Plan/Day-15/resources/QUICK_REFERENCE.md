# DAY 15: QUICK REFERENCE - CHEAT SHEETS

## 🚀 STREAM OPERATIONS CHEAT SHEET

### Stream Creation Methods
```java
// From collections
List<String> list = Arrays.asList("a", "b", "c");
list.stream()              // Sequential
list.parallelStream()      // Parallel

// From arrays
int[] arr = {1, 2, 3};
Arrays.stream(arr)

// Direct creation
Stream.of("a", "b", "c")
Stream.empty()

// Infinite streams
Stream.generate(() -> 1).limit(5)
Stream.iterate(0, n -> n+1).limit(5)

// From strings
"hello".chars()

// Merging
Stream.concat(stream1, stream2)

// Numeric ranges
IntStream.range(0, 5)          // 0-4
IntStream.rangeClosed(0, 5)    // 0-5
```

### Stream Pipeline Pattern
```java
collection
  .stream()                     // Creation
  .filter(predicate)            // Intermediate
  .map(function)                // Intermediate
  .distinct()                   // Intermediate
  .sorted()                     // Intermediate
  .forEach(action)              // Terminal
```

### Intermediate Operations (Lazy)
```java
// Filtering & Transformation
.filter(p -> p.age > 18)           // Keep matching
.map(s -> s.toUpperCase())         // Transform each
.flatMap(s -> s.chars())           // Flatten and transform

// Ordering & Distinctness
.distinct()                         // Remove duplicates
.sorted()                          // Natural order
.sorted(comparator)                // Custom order
.sorted(Comparator.reverseOrder()) // Reverse

// Limiting & Skipping
.limit(n)                          // Take first n
.skip(n)                           // Skip first n

// Debugging
.peek(System.out::println)         // Side effect (don't modify)
```

### Terminal Operations (Eager)
```java
// Collection
.collect(Collectors.toList())
.collect(Collectors.toSet())
.collect(Collectors.joining(", "))

// Iteration
.forEach(System.out::println)

// Reduction
.reduce(0, Integer::sum)           // Sum
.reduce((a, b) -> a > b ? a : b)  // Max

// Matching
.anyMatch(p -> p > 10)    // Any true?
.allMatch(p -> p > 0)     // All true?
.noneMatch(p -> p < 0)    // None true?

// Finding
.findFirst()
.findAny()

// Statistics
.count()
.min(comparator)
.max(comparator)
```

### Collectors Guide
```java
// Basic Collections
toList()                    // List<T>
toSet()                     // Set<T>
toCollection(LinkedList::new) // Specific collection

// Mapping
toMap(key, value)
toMap(key, value, mergeFunc)

// Grouping (partition by classifier)
groupingBy(Person::getCity)
groupingBy(Person::getCity, Collectors.counting())
groupingBy(Person::getAge, TreeMap::new, toList())

// Partitioning (only 2 groups: true/false)
partitioningBy(p -> p.age > 18)
partitioningBy(p -> p.age > 18, toList())

// String Operations
joining()           // "a, b, c"
joining(", ")       // "a, b, c"
joining(", ", "[", "]")  // "[a, b, c]"

// Statistics
summingInt(Person::getAge)
averagingInt(Person::getAge)
summarizingInt(Person::getAge)  // IntSummaryStatistics
```

---

## 🔧 LAMBDA EXPRESSIONS CHEAT SHEET

### Lambda Syntax Forms
```java
// No parameters
() -> expression
() -> { statements; return value; }

// Single parameter
x -> expression
x -> { statements; return value; }

// Multiple parameters
(x, y) -> expression
(x, y) -> { statements; return value; }

// Type annotations (optional)
(String x, int y) -> expression
```

### Lambda Examples
```java
// Functional Interface Examples
Function<Integer, Integer> square = x -> x * x;
square.apply(5)  // 25

Predicate<Integer> isEven = n -> n % 2 == 0;
isEven.test(4)   // true

Consumer<String> print = s -> System.out.println(s);
print.accept("hello");

Supplier<List> listSupplier = () -> new ArrayList<>();
listSupplier.get()

BiFunction<Integer, Integer, Integer> add = (a, b) -> a + b;
add.apply(5, 3)  // 8
```

### Variable Capture
```java
// ✅ CORRECT: Effectively final
int x = 10;
Function<Integer, Integer> f = n -> n + x;  // x is not modified

// ❌ WRONG: Variable modified
int x = 10;
x = 20;  // Error: x is not effectively final
Function<Integer, Integer> f = n -> n + x;

// ✅ CORRECT: Use explicit final
final int x = 10;
Function<Integer, Integer> f = n -> n + x;
```

### Common Lambda Patterns
```java
// Filtering
list.stream().filter(x -> x > 5)

// Mapping
list.stream().map(x -> x * 2)

// Sorting
list.sort((a, b) -> a.getName().compareTo(b.getName()))

// Iterating
list.forEach(x -> System.out.println(x))

// Removing
list.removeIf(x -> x < 0)

// Replacing
list.replaceAll(x -> x * 2)
```

---

## 🎯 FUNCTIONAL INTERFACES QUICK GUIDE

### Core 8 Functional Interfaces
```java
// 1. Consumer<T> - Accept and process
Consumer<String> print = s -> System.out.println(s);
print.accept("hello");

// 2. Supplier<T> - Generate/provide
Supplier<Integer> random = () -> new Random().nextInt();
int val = random.get();

// 3. Function<T, R> - Transform T to R
Function<String, Integer> getLength = String::length;
int len = getLength.apply("hello");

// 4. Predicate<T> - Test/filter
Predicate<Integer> isPositive = n -> n > 0;
boolean result = isPositive.test(5);

// 5. BiConsumer<T, U> - Two-argument consumer
BiConsumer<String, Integer> printRepeat = (s, n) -> {
    for (int i = 0; i < n; i++) System.out.println(s);
};
printRepeat.accept("hi", 3);

// 6. BiFunction<T, U, R> - Two-argument function
BiFunction<Integer, Integer, Integer> add = (a, b) -> a + b;
int result = add.apply(5, 3);

// 7. UnaryOperator<T> - T to T transformation
UnaryOperator<Integer> double_it = x -> x * 2;
int result = double_it.apply(5);

// 8. BinaryOperator<T> - T, T to T combination
BinaryOperator<Integer> max_of = (a, b) -> a > b ? a : b;
int result = max_of.apply(5, 3);
```

### Functional Interface Composition
```java
// Function composition: andThen and compose
Function<Integer, Integer> times2 = x -> x * 2;
Function<Integer, Integer> plus10 = x -> x + 10;

// andThen: f then g (left to right)
Function<Integer, Integer> f1 = times2.andThen(plus10);
f1.apply(5);  // (5*2) + 10 = 20

// compose: g then f (right to left)
Function<Integer, Integer> f2 = plus10.compose(times2);
f2.apply(5);  // (5*2) + 10 = 20

// Predicate composition
Predicate<Integer> isEven = n -> n % 2 == 0;
Predicate<Integer> isPositive = n -> n > 0;
Predicate<Integer> both = isEven.and(isPositive);
boolean result = both.test(4);  // true
```

---

## 📍 METHOD REFERENCES CHEAT SHEET

### 4 Types of Method References

#### 1. Static Method Reference
```java
// Syntax: ClassName::staticMethod
Function<String, Integer> parse = Integer::parseInt;
int num = parse.apply("123");  // 123

// More examples
Function<Integer, String> toString = String::valueOf;
Consumer<Integer> print = System.out::println;

// Equivalent lambda
Function<String, Integer> parse = s -> Integer.parseInt(s);
```

#### 2. Instance Method Reference
```java
// Syntax: instance::instanceMethod
String str = "hello";
Supplier<Integer> getLen = str::length;
int len = getLen.get();  // 5

// More examples
Consumer<String> print = System.out::println;
Function<String, Boolean> isEmpty = String::isEmpty;
BiFunction<String, String, Boolean> equals = String::equals;

// Equivalent lambda
Supplier<Integer> getLen = () -> str.length();
```

#### 3. Constructor Reference
```java
// Syntax: ClassName::new
Supplier<ArrayList> supplier = ArrayList::new;
ArrayList list = supplier.get();

// With arguments
Function<String, Integer> parseInt = Integer::new;
int num = parseInt.apply("123");

// Equivalent lambda
Supplier<ArrayList> supplier = () -> new ArrayList();
```

#### 4. Array Constructor Reference
```java
// Syntax: Type[]::new
Function<Integer, int[]> intArray = int[]::new;
int[] arr = intArray.apply(5);  // Array of 5 elements

// In streams
int[] primes = stream.toArray(int[]::new);
```

### Common Method Reference Patterns
```java
// Collection operations
list.sort(Comparator.naturalOrder())    // int::compare
list.forEach(System.out::println)        // void

// Stream operations
stream.map(String::toUpperCase)
stream.map(Object::toString)
stream.map(Integer::parseInt)
stream.sorted(String::compareTo)
stream.collect(Collectors.toCollection(ArrayList::new))
```

---

## ⚡ PARALLEL STREAMS CHEAT SHEET

### Creating Parallel Streams
```java
// Direct creation
list.parallelStream()

// From existing stream
stream.parallel()

// Check status
boolean isParallel = stream.isParallel();
```

### Performance Guidelines
```java
// Small dataset (< 1000 elements) - Use sequential
List<Integer> small = List.of(1, 2, 3, 4, 5);
small.stream().filter(...)  // ✅ Faster

// Large dataset (> 10000 elements) - Consider parallel
List<Integer> large = /* 100,000 elements */;
large.parallelStream().filter(...)  // ✅ Faster

// CPU-intensive operations - Use parallel
stream.parallelStream()
  .map(x -> expensiveCalculation(x))  // ✅ Parallel good

// I/O-intensive operations - Avoid parallel
stream.parallelStream()
  .map(x -> readFile(x))  // ❌ Thread blocking
```

### Thread Safety
```java
// ✅ SAFE: Stateless operations
parallelStream()
  .filter(x -> x > 10)           // Stateless
  .map(x -> x * 2)               // Stateless

// ❌ UNSAFE: Mutable state
List<Integer> result = new ArrayList<>();
parallelStream()
  .forEach(x -> result.add(x));  // Race condition!

// ✅ SAFE: Use collectors
parallelStream()
  .collect(Collectors.toList())  // Thread-safe

// ✅ SAFE: Concurrent collectors
parallelStream()
  .collect(Collectors.groupingByConcurrent(x -> x % 2))
```

### ForkJoinPool Control
```java
// Default ForkJoinPool
parallelStream()  // Uses Runtime.getRuntime().availableProcessors() threads

// Custom ForkJoinPool (advanced)
ForkJoinPool pool = new ForkJoinPool(4);  // 4 threads
pool.invoke(/* ForkJoinTask */);

// Common pool control
System.setProperty("java.util.concurrent.ForkJoinPool.common.parallelism", "4");
```

### When to Use Parallel
```
✅ Use parallel when:
  - Dataset: 10,000+ elements
  - Operation: CPU-intensive
  - Stateless operations
  - No I/O blocking

❌ Avoid parallel for:
  - Small datasets (< 1000)
  - I/O-intensive operations
  - Side effects/mutable state
  - Sequential dependencies
```

---

## 🎁 OPTIONAL API CHEAT SHEET

### Creating Optionals
```java
Optional<String> opt1 = Optional.of("value");           // Non-null
Optional<String> opt2 = Optional.empty();               // Empty
Optional<String> opt3 = Optional.ofNullable(value);     // Nullable
```

### Extracting Values
```java
String val1 = optional.get();                           // Throws if empty
String val2 = optional.orElse("default");               // Default if empty
String val3 = optional.orElseThrow(() -> new Exception()); // Throw if empty
String val4 = optional.orElseGet(() -> computeDefault()); // Lazy default
```

### Optional Operations
```java
// Check if present
if (optional.isPresent()) { ... }
if (optional.isEmpty()) { ... }

// Execute if present
optional.ifPresent(v -> System.out.println(v));
optional.ifPresentOrElse(
  v -> System.out.println(v),
  () -> System.out.println("empty")
);

// Transform value
Optional<Integer> len = optional.map(String::length);
Optional<Integer> parsed = optional.flatMap(s -> tryParse(s));

// Filter
Optional<String> filtered = optional.filter(s -> s.length() > 5);

// Alternative (Java 9+)
Optional<String> alt = optional.or(() -> Optional.of("backup"));

// Stream conversion (Java 9+)
Stream<String> stream = optional.stream();
```

### Optional with Streams
```java
// Old way: filter + map + get
stream
  .filter(Optional::isPresent)
  .map(Optional::get)

// New way: flatMap
stream
  .flatMap(Optional::stream)
```

### Optional Best Practices
```java
// ✅ GOOD: Handle empty case
Optional<String> result = Optional.of(value)
  .map(String::toUpperCase)
  .orElse("UNKNOWN");

// ❌ BAD: Calling get() without checking
String val = optional.get();  // Might throw

// ✅ GOOD: Use orElse variants
String val = optional.orElse("default");

// ✅ GOOD: Chain operations
optional
  .map(Person::getName)
  .flatMap(PersonService::findByName)
  .ifPresent(System.out::println);
```

---

## 🛡️ EXCEPTION HANDLING CHEAT SHEET

### Try-with-Resources (Java 7+)
```java
// Auto-closes FileReader and BufferedReader
try (FileReader fr = new FileReader("file.txt");
     BufferedReader br = new BufferedReader(fr)) {
    String line;
    while ((line = br.readLine()) != null) {
        System.out.println(line);
    }
} catch (IOException e) {
    e.printStackTrace();
}
```

### Multi-Catch (Java 7+)
```java
try {
    // code
} catch (ArithmeticException | NumberFormatException e) {
    // Handle multiple exception types
    System.out.println("Error: " + e.getMessage());
}
```

### Exception Hierarchy
```
Throwable
├── Error (System errors)
│   ├── OutOfMemoryError
│   └── StackOverflowError
└── Exception
    ├── Checked (must catch/declare)
    │   ├── IOException
    │   ├── SQLException
    │   └── ClassNotFoundException
    └── Runtime (unchecked, optional)
        ├── NullPointerException
        ├── ArrayIndexOutOfBoundsException
        ├── ArithmeticException
        └── NoSuchElementException
```

### Custom Exception
```java
// Checked exception
class InvalidAgeException extends Exception {
    public InvalidAgeException(String message) {
        super(message);
    }
    
    public InvalidAgeException(String message, Throwable cause) {
        super(message, cause);
    }
}

// Usage
if (age < 0) {
    throw new InvalidAgeException("Age cannot be negative");
}
```

### Functional Error Handling
```java
// Result<T> type pattern
static class Result<T> {
    private final T value;
    private final Exception error;
    
    public static <T> Result<T> success(T value) {
        return new Result<>(value, null);
    }
    
    public static <T> Result<T> failure(Exception error) {
        return new Result<>(null, error);
    }
}

// Usage
Result<Integer> result = parseInteger("123");
result.getOrElse(-1);
```

---

## 📋 QUICK DECISION TREE

### Should I use Stream?
```
Is it a collection/array?
├─ Yes → .stream()
└─ No → Stream.of() or specific stream

Should it be parallel?
├─ Small dataset (< 1000) → No
├─ I/O operation → No
└─ Large + CPU-intensive → Maybe

Which terminal operation?
├─ Need result → collect()
├─ Check condition → anyMatch/allMatch
├─ Get single element → findFirst/findAny
├─ Just iterate → forEach()
└─ Combine values → reduce()

Use map or flatMap?
├─ 1-to-1 transformation → map()
└─ 1-to-many flattening → flatMap()
```

### Should I use Optional?
```
Return value that might be null?
├─ Yes → Optional<T>
└─ No → Just return T

Chaining multiple operations?
├─ Yes → Use map/flatMap
└─ No → Use orElse

Know what to do if empty?
├─ Yes → orElse() or similar
└─ No → ifPresentOrElse()
```

---

## ⏱️ PERFORMANCE TIPS

```java
// ✅ Prefer filter + map
stream.filter(...).map(...)

// ❌ Avoid collecting intermediate results
stream.filter(...).collect(toList()).stream().map(...)

// ✅ Use appropriate collectors
stream.collect(Collectors.toList())

// ❌ Don't collect just to count
int count = stream.collect(Collectors.toList()).size();
stream.count()  // ✅ Use count()

// ✅ Short-circuit operations
stream.limit(10)
stream.findFirst()

// ✅ Lazy evaluation means
filter().map().filter()  // Only evaluated at terminal

// ✅ Use forEach for side effects
stream.forEach(System.out::println)

// ❌ Avoid terminal ops in parallel
parallelStream().forEach(System.out::println)  // ❌ Order lost
parallelStream().forEachOrdered(...)  // ✅ Ordered but slower
```

---

**Last Updated**: Day 15
**For**: Java Placement Preparation
**Difficulty**: Quick Reference (Beginner-Advanced)
