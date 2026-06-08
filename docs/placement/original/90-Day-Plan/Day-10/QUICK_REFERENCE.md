# QUICK REFERENCE - DAY 10
**Streams API, Lambda Expressions & Functional Programming**

---

## 🚀 **STREAM OPERATIONS CHEAT SHEET**

### **Creating Streams**

```java
// From Collection
List<String> list = Arrays.asList("a", "b", "c");
Stream<String> stream = list.stream();

// From Array
String[] array = {"a", "b", "c"};
Stream<String> stream = Arrays.stream(array);

// Stream.of()
Stream<String> stream = Stream.of("a", "b", "c");

// Stream.generate() - Infinite
Stream<Double> randoms = Stream.generate(Math::random);

// Stream.iterate() - Infinite
Stream<Integer> nums = Stream.iterate(0, n -> n + 2); // 0,2,4,6...

// Primitive Streams
IntStream intStream = IntStream.range(1, 100);
LongStream longStream = LongStream.rangeClosed(1, 100);
DoubleStream doubleStream = DoubleStream.of(1.0, 2.0, 3.0);

// From String
IntStream chars = "hello".chars();

// Empty Stream
Stream<String> empty = Stream.empty();
```

---

## 🔧 **INTERMEDIATE OPERATIONS**

| Operation | Syntax | Description | Example |
|-----------|--------|-------------|---------|
| **filter** | `filter(Predicate<T>)` | Select elements | `stream.filter(x -> x > 5)` |
| **map** | `map(Function<T,R>)` | Transform elements | `stream.map(String::toUpperCase)` |
| **flatMap** | `flatMap(Function<T,Stream<R>>)` | Flatten nested | `stream.flatMap(List::stream)` |
| **distinct** | `distinct()` | Remove duplicates | `stream.distinct()` |
| **sorted** | `sorted()` / `sorted(Comparator)` | Sort elements | `stream.sorted(Comparator.reverseOrder())` |
| **peek** | `peek(Consumer<T>)` | Debug/log | `stream.peek(System.out::println)` |
| **limit** | `limit(long n)` | Take first n | `stream.limit(10)` |
| **skip** | `skip(long n)` | Skip first n | `stream.skip(5)` |

```java
// Examples
List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

nums.stream()
    .filter(n -> n % 2 == 0)           // 2,4,6,8,10
    .map(n -> n * n)                   // 4,16,36,64,100
    .sorted(Comparator.reverseOrder()) // 100,64,36,16,4
    .limit(3)                          // 100,64,36
    .forEach(System.out::println);
```

---

## ✅ **TERMINAL OPERATIONS**

| Operation | Return Type | Description | Example |
|-----------|-------------|-------------|---------|
| **forEach** | `void` | Iterate elements | `stream.forEach(System.out::println)` |
| **collect** | `R` | Collect to collection | `stream.collect(Collectors.toList())` |
| **reduce** | `Optional<T>` / `T` | Combine to single value | `stream.reduce(0, Integer::sum)` |
| **count** | `long` | Count elements | `stream.count()` |
| **min** | `Optional<T>` | Find minimum | `stream.min(Comparator.naturalOrder())` |
| **max** | `Optional<T>` | Find maximum | `stream.max(Comparator.naturalOrder())` |
| **anyMatch** | `boolean` | Any element matches | `stream.anyMatch(x -> x > 100)` |
| **allMatch** | `boolean` | All elements match | `stream.allMatch(x -> x > 0)` |
| **noneMatch** | `boolean` | No elements match | `stream.noneMatch(x -> x < 0)` |
| **findFirst** | `Optional<T>` | First element | `stream.findFirst()` |
| **findAny** | `Optional<T>` | Any element | `stream.findAny()` |
| **toArray** | `Object[]` / `A[]` | Convert to array | `stream.toArray(String[]::new)` |

```java
// Examples
int sum = nums.stream()
    .filter(n -> n % 2 == 0)
    .reduce(0, Integer::sum);  // Sum of even numbers

Optional<Integer> max = nums.stream()
    .max(Comparator.naturalOrder());

boolean hasEven = nums.stream()
    .anyMatch(n -> n % 2 == 0);
```

---

## 📦 **COLLECTORS**

```java
// Basic Collectors
List<T> list = stream.collect(Collectors.toList());
Set<T> set = stream.collect(Collectors.toSet());
Map<K,V> map = stream.collect(Collectors.toMap(keyMapper, valueMapper));

// Joining
String result = stream.collect(Collectors.joining());
String csv = stream.collect(Collectors.joining(", "));
String formatted = stream.collect(Collectors.joining(", ", "[", "]"));

// Grouping
Map<K, List<V>> grouped = stream.collect(
    Collectors.groupingBy(classifier)
);

// Multi-level Grouping
Map<K1, Map<K2, List<V>>> multilevel = stream.collect(
    Collectors.groupingBy(
        classifier1,
        Collectors.groupingBy(classifier2)
    )
);

// Partitioning (Boolean Key)
Map<Boolean, List<T>> partitioned = stream.collect(
    Collectors.partitioningBy(predicate)
);

// Counting
Map<K, Long> counts = stream.collect(
    Collectors.groupingBy(classifier, Collectors.counting())
);

// Summarizing
IntSummaryStatistics stats = stream.collect(
    Collectors.summarizingInt(ToIntFunction)
);
// stats.getCount(), getSum(), getMin(), getMax(), getAverage()

// Example: Employee Processing
Map<String, Double> avgSalaryByDept = employees.stream()
    .collect(Collectors.groupingBy(
        Employee::getDepartment,
        Collectors.averagingDouble(Employee::getSalary)
    ));
```

---

## 🔥 **LAMBDA SYNTAX REFERENCE**

### **8 Syntax Variations**

```java
// 1. No parameters
Runnable r = () -> System.out.println("Hello");

// 2. Single parameter (no parentheses)
Consumer<String> c1 = s -> System.out.println(s);

// 3. Single parameter (with parentheses)
Consumer<String> c2 = (s) -> System.out.println(s);

// 4. Single parameter with type
Consumer<String> c3 = (String s) -> System.out.println(s);

// 5. Multiple parameters
Comparator<String> comp1 = (s1, s2) -> s1.compareTo(s2);

// 6. Multiple parameters with types
Comparator<String> comp2 = (String s1, String s2) -> s1.compareTo(s2);

// 7. Single expression (implicit return)
Function<Integer, Integer> square = x -> x * x;

// 8. Block body (explicit return)
Function<Integer, Integer> cube = x -> {
    int result = x * x * x;
    return result;
};
```

### **Lambda Best Practices**

✅ **DO:**
- Keep lambdas short (1-3 lines)
- Use method references when possible
- Use standard functional interfaces
- Make lambdas stateless

❌ **DON'T:**
- Create side effects
- Modify external variables
- Use checked exceptions (without wrapper)
- Overuse lambdas (readability matters)

---

## 🎯 **FUNCTIONAL INTERFACES**

### **Standard Functional Interfaces**

| Interface | Input | Output | Method | Use Case |
|-----------|-------|--------|--------|----------|
| **Predicate<T>** | T | boolean | `test(T)` | Filtering |
| **Function<T,R>** | T | R | `apply(T)` | Transformation |
| **Consumer<T>** | T | void | `accept(T)` | Processing |
| **Supplier<T>** | none | T | `get()` | Lazy generation |
| **UnaryOperator<T>** | T | T | `apply(T)` | Same-type transform |
| **BinaryOperator<T>** | T,T | T | `apply(T,T)` | Combining values |
| **BiPredicate<T,U>** | T,U | boolean | `test(T,U)` | Binary testing |
| **BiFunction<T,U,R>** | T,U | R | `apply(T,U)` | Binary transform |
| **BiConsumer<T,U>** | T,U | void | `accept(T,U)` | Binary processing |

```java
// Examples
Predicate<Integer> isEven = n -> n % 2 == 0;
Function<String, Integer> length = String::length;
Consumer<String> print = System.out::println;
Supplier<Double> random = Math::random;
UnaryOperator<Integer> square = x -> x * x;
BinaryOperator<Integer> add = (a, b) -> a + b;
```

### **Composition Methods**

```java
// Predicate composition
Predicate<Integer> isEven = n -> n % 2 == 0;
Predicate<Integer> greaterThan10 = n -> n > 10;
Predicate<Integer> evenAndGreat = isEven.and(greaterThan10);
Predicate<Integer> evenOrGreat = isEven.or(greaterThan10);
Predicate<Integer> notEven = isEven.negate();

// Function composition
Function<Integer, Integer> multiplyBy2 = x -> x * 2;
Function<Integer, Integer> add10 = x -> x + 10;
Function<Integer, Integer> combined1 = multiplyBy2.andThen(add10); // (x*2)+10
Function<Integer, Integer> combined2 = add10.compose(multiplyBy2); // (x*2)+10

// Consumer composition
Consumer<String> c1 = s -> System.out.println("First: " + s);
Consumer<String> c2 = s -> System.out.println("Second: " + s);
Consumer<String> both = c1.andThen(c2);
```

---

## 📎 **METHOD REFERENCES**

### **4 Types**

```java
// 1. Static Method Reference
Function<String, Integer> parseInt = Integer::parseInt;
// Equivalent: s -> Integer.parseInt(s)

// 2. Instance Method of Particular Object
String prefix = "Hello, ";
Function<String, String> greeter = prefix::concat;
// Equivalent: s -> prefix.concat(s)

// 3. Instance Method of Arbitrary Object of Type
Function<String, String> upper = String::toUpperCase;
// Equivalent: s -> s.toUpperCase()

Comparator<String> comp = String::compareToIgnoreCase;
// Equivalent: (s1, s2) -> s1.compareToIgnoreCase(s2)

// 4. Constructor Reference
Supplier<List<String>> listFactory = ArrayList::new;
// Equivalent: () -> new ArrayList<>()

Function<Integer, int[]> arrayFactory = int[]::new;
// Equivalent: size -> new int[size]
```

---

## 🎁 **OPTIONAL CLASS**

### **Creation**

```java
Optional<String> opt1 = Optional.of("value");           // Throws NPE if null
Optional<String> opt2 = Optional.ofNullable(value);     // Allows null
Optional<String> opt3 = Optional.empty();               // Explicit empty
```

### **Checking**

```java
if (opt.isPresent()) { ... }   // Has value?
if (opt.isEmpty()) { ... }     // Empty? (Java 11+)
```

### **Retrieving**

```java
String value = opt.get();                          // Throws if empty
String value = opt.orElse("default");              // Default if empty
String value = opt.orElseGet(() -> compute());     // Lazy default
String value = opt.orElseThrow();                  // Throw if empty
String value = opt.orElseThrow(MyException::new);  // Custom exception
```

### **Actions**

```java
opt.ifPresent(v -> System.out.println(v));
opt.ifPresentOrElse(
    v -> System.out.println(v),
    () -> System.out.println("Empty")
);
```

### **Transformation**

```java
Optional<Integer> len = opt.map(String::length);
Optional<String> filtered = opt.filter(s -> s.length() > 5);
Optional<String> flatMapped = opt.flatMap(this::findById);
```

### **Common Patterns**

```java
// Pattern 1: orElse for default
String name = findUser(id)
    .map(User::getName)
    .orElse("Unknown");

// Pattern 2: orElseThrow for required
User user = findUser(id)
    .orElseThrow(() -> new UserNotFoundException(id));

// Pattern 3: ifPresent for side effects
findUser(id).ifPresent(user -> sendEmail(user));

// Pattern 4: filter + map
String email = findUser(id)
    .filter(User::isActive)
    .map(User::getEmail)
    .orElse("no-email@example.com");
```

---

## 🔄 **COMMON PATTERNS**

### **Filtering**

```java
// Filter even numbers
List<Integer> evens = nums.stream()
    .filter(n -> n % 2 == 0)
    .collect(Collectors.toList());

// Filter by multiple conditions
List<Person> adults = persons.stream()
    .filter(p -> p.getAge() >= 18)
    .filter(p -> p.isActive())
    .collect(Collectors.toList());
```

### **Mapping**

```java
// Transform to different type
List<String> names = persons.stream()
    .map(Person::getName)
    .collect(Collectors.toList());

// Chain transformations
List<String> upperNames = persons.stream()
    .map(Person::getName)
    .map(String::toUpperCase)
    .collect(Collectors.toList());
```

### **Reducing**

```java
// Sum
int sum = nums.stream()
    .reduce(0, Integer::sum);

// Product
int product = nums.stream()
    .reduce(1, (a, b) -> a * b);

// Concatenate
String concatenated = words.stream()
    .reduce("", (a, b) -> a + b);

// Custom reduction
Person oldest = persons.stream()
    .reduce((p1, p2) -> p1.getAge() > p2.getAge() ? p1 : p2)
    .orElse(null);
```

### **Grouping**

```java
// Group by property
Map<String, List<Person>> byCity = persons.stream()
    .collect(Collectors.groupingBy(Person::getCity));

// Count by property
Map<String, Long> countByCity = persons.stream()
    .collect(Collectors.groupingBy(
        Person::getCity,
        Collectors.counting()
    ));

// Average by property
Map<String, Double> avgAgeByCity = persons.stream()
    .collect(Collectors.groupingBy(
        Person::getCity,
        Collectors.averagingInt(Person::getAge)
    ));
```

### **Finding**

```java
// Find first match
Optional<Person> first = persons.stream()
    .filter(p -> p.getAge() > 18)
    .findFirst();

// Find any match (parallel-friendly)
Optional<Person> any = persons.stream()
    .filter(p -> p.getAge() > 18)
    .findAny();

// Check existence
boolean hasAdults = persons.stream()
    .anyMatch(p -> p.getAge() >= 18);

boolean allAdults = persons.stream()
    .allMatch(p -> p.getAge() >= 18);
```

---

## ⚡ **COMPLEXITY REFERENCE**

### **Stream Operations**

| Operation | Time | Space | Type |
|-----------|------|-------|------|
| filter | O(n) | O(1) | Intermediate |
| map | O(n) | O(1) | Intermediate |
| flatMap | O(n×m) | O(m) | Intermediate |
| sorted | O(n log n) | O(n) | Intermediate |
| distinct | O(n) | O(n) | Intermediate |
| limit | O(k) | O(1) | Intermediate |
| skip | O(k) | O(1) | Intermediate |
| collect | O(n) | O(n) | Terminal |
| reduce | O(n) | O(1) | Terminal |
| forEach | O(n) | O(1) | Terminal |

### **Collectors**

| Collector | Time | Space |
|-----------|------|-------|
| toList() | O(n) | O(n) |
| toSet() | O(n) | O(n) |
| toMap() | O(n) | O(n) |
| groupingBy() | O(n) | O(n) |
| partitioningBy() | O(n) | O(n) |
| joining() | O(n) | O(n) |
| counting() | O(n) | O(1) |

---

## 🎯 **WHEN TO USE WHAT**

### **Parallel vs Sequential**

**Use Parallel When:**
- Large datasets (>10,000 elements)
- CPU-intensive operations
- Stateless operations
- Independent elements

**Avoid Parallel When:**
- Small datasets
- I/O operations
- Stateful operations (e.g., sorted())
- Order matters

```java
// Parallel
long sum = bigList.parallelStream()
    .mapToLong(BigInteger::longValue)
    .sum();
```

### **orElse vs orElseGet**

```java
// ❌ Always computes default (expensive)
String name = optional.orElse(computeExpensiveDefault());

// ✅ Computes only if absent (lazy)
String name = optional.orElseGet(() -> computeExpensiveDefault());
```

### **map vs flatMap**

```java
// Use map for 1-to-1 transformation
Stream<Integer> lengths = words.stream()
    .map(String::length);

// Use flatMap for 1-to-many transformation
Stream<Character> chars = words.stream()
    .flatMap(word -> word.chars().mapToObj(c -> (char) c));
```

---

## 🏆 **QUICK WINS**

### **Top 10 Most Used Patterns**

1. `list.stream().filter(...).collect(toList())`
2. `list.stream().map(...).collect(toList())`
3. `list.stream().filter(...).map(...).collect(toList())`
4. `list.stream().collect(groupingBy(...))`
5. `list.stream().sorted().collect(toList())`
6. `list.stream().distinct().collect(toList())`
7. `list.stream().anyMatch(...)`
8. `list.stream().reduce(...)`
9. `optional.map(...).orElse(...)`
10. `list.stream().flatMap(...).collect(toList())`

---

*Print this reference for quick lookup during coding sessions!*
