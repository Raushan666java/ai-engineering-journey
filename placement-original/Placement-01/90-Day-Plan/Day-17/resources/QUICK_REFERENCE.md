# DAY 17: QUICK REFERENCE GUIDE

## 🚀 LAMBDA EXPRESSIONS - QUICK SYNTAX

### Creation Patterns
```java
// No parameters
() -> expression

// Single parameter (optional parentheses)
x -> expression
(x) -> expression

// Multiple parameters
(a, b) -> expression
(int a, int b) -> a + b

// With statements
x -> { statement1; statement2; return result; }

// With types
(int x, int y) -> x + y
```

### Functional Interface Examples
```java
Runnable r = () -> System.out.println("Run");
Consumer<String> c = s -> System.out.println(s);
Function<Integer, Integer> f = x -> x * 2;
Predicate<Integer> p = x -> x > 0;
BiFunction<Integer, Integer, Integer> bf = (a, b) -> a + b;
Supplier<String> s = () -> "Hello";
```

### Method References
```java
String::toUpperCase           // Instance method
Integer::parseInt             // Static method
Person::new                   // Constructor
System.out::println           // Instance method on object
String[]::new                 // Array constructor
```

---

## 📦 STREAMS API - OPERATIONS CHEAT SHEET

### Creation
```java
collection.stream()
Arrays.stream(array)
Stream.of(item1, item2, item3)
Stream.empty()
Stream.generate(() -> Math.random()).limit(5)
Stream.iterate(0, n -> n + 1).limit(10)
IntStream.range(1, 10)
IntStream.rangeClosed(1, 10)
```

### Intermediate Operations
```java
.filter(p -> condition)
.map(x -> transform)
.flatMap(x -> stream)
.distinct()
.sorted()
.sorted(Comparator.reverseOrder())
.limit(5)
.skip(2)
.peek(x -> System.out.println(x))
```

### Terminal Operations
```java
.forEach(System.out::println)
.count()
.collect(Collectors.toList())
.reduce((a, b) -> a + b)
.min(Comparator.naturalOrder())
.max(Comparator.naturalOrder())
.findFirst()
.findAny()
.anyMatch(p -> condition)
.allMatch(p -> condition)
.noneMatch(p -> condition)
.toArray()
```

### Collectors
```java
Collectors.toList()
Collectors.toSet()
Collectors.toMap(keyFunc, valueFunc)
Collectors.joining(", ")
Collectors.groupingBy(function)
Collectors.partitioningBy(predicate)
Collectors.summarizingInt(mapper)
Collectors.counting()
Collectors.minBy(comparator)
Collectors.maxBy(comparator)
```

### Common Patterns
```java
// Filter and map
list.stream()
    .filter(x -> x > 5)
    .map(x -> x * 2)
    .toList()

// Group by
list.stream()
    .collect(Collectors.groupingBy(function))

// Reduce
list.stream()
    .reduce(0, (a, b) -> a + b)

// Parallel
list.parallelStream()
    .filter(x -> x > 5)
    .collect(Collectors.toList())
```

---

## 🔍 OPTIONAL API - QUICK REFERENCE

### Creation
```java
Optional.of(value)                    // Non-null value
Optional.empty()                      // Empty Optional
Optional.ofNullable(maybeNull)       // Possibly null value
```

### Presence Checking
```java
opt.isPresent()      // true if value present
opt.isEmpty()        // true if empty
opt.ifPresent(x -> action)
opt.ifPresentOrElse(action, emptyAction)
```

### Value Retrieval
```java
opt.get()                    // Throws if empty
opt.orElse(defaultValue)     // Returns default if empty
opt.orElseGet(() -> compute) // Lazy default
opt.orElseThrow()            // Throws exception
opt.orElseThrow(Exception::new)
```

### Transformation
```java
opt.map(x -> transform)      // Transform value
opt.flatMap(x -> opt2)       // Chain Optionals
opt.filter(x -> condition)   // Conditional Optional
opt.or(() -> alternative)    // Alternative Optional
```

### Stream Integration
```java
// Convert to stream
opt.stream()

// Use in stream
list.stream()
    .map(Optional::ofNullable)
    .flatMap(Optional::stream)
    .toList()

// Combine multiple
opt1.flatMap(v1 -> 
    opt2.map(v2 -> combine(v1, v2)))
```

### Best Practices
```java
// ✓ Good: Use in return types
Optional<User> findUser(String id) { ... }

// ✓ Good: Transform values
user.map(User::getEmail).orElse("no-email")

// ✓ Good: Stream integration
list.stream()
    .map(Optional::ofNullable)
    .flatMap(Optional::stream)

// ✗ Bad: Use in method parameters
void process(Optional<String> opt) { ... }

// ✗ Bad: Wrap Optional
Optional<Optional<String>> wrapped

// ✗ Bad: Use .get() without checking
String value = opt.get(); // May throw
```

---

## 🏗️ MODULE SYSTEM - CONFIGURATION GUIDE

### Basic module-info.java
```java
module com.example.app {
    requires java.base;
    exports com.example.app.api;
}
```

### Complete module-info.java
```java
module com.example.app {
    // Dependencies
    requires java.base;
    requires transitive java.sql;
    requires static java.desktop;
    
    // Public API
    exports com.example.api;
    exports com.example.models;
    
    // Qualified exports
    exports com.example.impl to com.example.test;
    
    // Reflection access
    opens com.example.impl;
    opens com.example.config to com.example.framework;
    
    // Service provider
    provides com.example.api.Service
        with com.example.impl.ServiceImpl;
    
    // Service consumer
    uses com.example.api.Plugin;
}
```

### Requires Variants
```java
requires java.logging;              // Direct
requires transitive java.sql;       // Transitive (visible to users)
requires static java.desktop;       // Optional at runtime
requires static transitive java.base; // Optional and transitive
```

### Module Structure
```
src/
  module-info.java
  com/
    example/
      api/
        Service.java
      impl/
        ServiceImpl.java
      models/
        Data.java
```

### Command Line Execution
```bash
# Compile
javac --module-source-path src -d out src/module-info.java

# Run
java -p out -m com.example.app

# With reflection
java --add-opens java.base/java.lang=ALL-UNNAMED -p out -m com.example.app
```

### Module Names Best Practices
```
✓ com.example.app          - reverse domain + app
✓ com.example.app.api      - main API
✓ com.example.app.impl     - internal
✗ MyApp                    - not hierarchical
✗ app                      - too generic
```

---

## 🎯 COMMON PATTERNS & IDIOMS

### Stream Pipeline
```java
data.stream()
    .filter(x -> x.isValid())
    .map(x -> x.transform())
    .collect(Collectors.toList())
```

### Optional Chaining
```java
findUser(id)
    .filter(u -> u.isActive())
    .map(User::getEmail)
    .orElse("no-email@example.com")
```

### Function Composition
```java
Function<Integer, Integer> square = x -> x * x;
Function<Integer, Integer> addTen = x -> x + 10;
Function<Integer, Integer> composed = square.andThen(addTen);

// Result: (5 * 5) + 10 = 35
composed.apply(5)
```

### Parallel Optimization
```java
largeList.parallelStream()
    .filter(x -> expensiveOperation(x))
    .map(x -> transform(x))
    .collect(Collectors.toList())
```

### Service Provider Pattern
```java
// API module
provides com.example.api.Logger
    with com.example.impl.ConsoleLogger;

// Usage
ServiceLoader.load(Logger.class)
    .findFirst()
    .ifPresent(logger -> logger.log("message"))
```

---

## ⚠️ COMMON MISTAKES

❌ **Lambda mistakes**
```java
// Wrong: Missing arrow
(x, y) { return x + y; }

// Wrong: Mixing syntax
x -> { return x + x; }  // remove braces or return
```

❌ **Stream mistakes**
```java
// Wrong: Reusing stream
Stream<Integer> s = list.stream();
s.forEach(System.out::println);
s.forEach(System.out::println); // ERROR

// Wrong: Modifying stream source
List<Integer> list = Arrays.asList(1, 2, 3);
list.stream().filter(x -> {
    list.add(x);  // Concurrent modification
    return true;
}).toList();
```

❌ **Optional mistakes**
```java
// Wrong: Using .get() without checking
String value = opt.get(); // May throw

// Wrong: Nested Optional
Optional<Optional<String>> nested

// Wrong: Use in parameters
void process(Optional<String> opt) { ... }
```

❌ **Module mistakes**
```java
// Wrong: Circular dependencies
// Module A requires B
// Module B requires A

// Wrong: Split packages
// Module 1 exports com.example.utils
// Module 2 exports com.example.utils

// Wrong: Non-exported access
Optional<String> field = value; // Can't access non-exported types
```

---

## 📚 QUICK DECISION GUIDE

| Need | Use |
|------|-----|
| Simple action | Lambda with Runnable |
| Transform data | Stream.map() |
| Filter collection | Stream.filter() |
| Group elements | Collectors.groupingBy() |
| Aggregate values | Stream.reduce() |
| Handle nulls | Optional |
| Optional default | .orElse() or .orElseGet() |
| Count elements | .count() |
| Find element | .findFirst() or .findAny() |
| Check condition | .anyMatch(), .allMatch() |
| Organize code | Module system |
| Hide implementation | exports + requires |
| Plugin system | provides-uses pattern |
| Performance | Parallel streams |

---

## 🔗 COMPOSITION PATTERNS

### Function Chain
```java
Function<String, Integer> length = String::length;
Function<Integer, Integer> square = x -> x * x;
Function<String, Integer> composed = 
    length.andThen(square);

composed.apply("hello") // 5 * 5 = 25
```

### Predicate Combination
```java
Predicate<Integer> greaterThan5 = x -> x > 5;
Predicate<Integer> lessThan20 = x -> x < 20;

Predicate<Integer> combined = greaterThan5.and(lessThan20);

combined.test(10) // true
combined.test(25) // false
```

### Stream to Stream
```java
list.stream()
    .map(x -> x.split(","))
    .flatMap(Arrays::stream)
    .distinct()
    .toList()
```

### Exception Handling
```java
// Wrap exception in Optional
Optional<Integer> parseInt(String s) {
    try {
        return Optional.of(Integer.parseInt(s));
    } catch (NumberFormatException e) {
        return Optional.empty();
    }
}
```

