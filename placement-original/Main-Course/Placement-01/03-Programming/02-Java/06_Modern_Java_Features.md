# 🚀 Modern Java Features (Java 8+) - Quick Study Notes

## 🎯 Learning Strategy
- **Functional Thinking**: Shift from imperative to functional programming
- **Pipeline Visualization**: Think of data flowing through operations
- **Practice Daily**: Use modern features in every coding exercise

## 1. Lambda Expressions

### Lambda Syntax
```java
// Traditional anonymous class
Runnable oldWay = new Runnable() {
    @Override
    public void run() {
        System.out.println("Hello World");
    }
};

// Lambda expression
Runnable newWay = () -> System.out.println("Hello World");

// Lambda with parameters
Comparator<String> oldComparator = new Comparator<String>() {
    @Override
    public int compare(String a, String b) {
        return a.compareTo(b);
    }
};

Comparator<String> newComparator = (a, b) -> a.compareTo(b);
// Or even shorter
Comparator<String> shortest = String::compareTo;
```

### Lambda Syntax Variations
```java
public class LambdaExamples {
    public void demonstrateLambdas() {
        // No parameters
        Runnable r1 = () -> System.out.println("No params");
        
        // One parameter (parentheses optional)
        Consumer<String> c1 = s -> System.out.println(s);
        Consumer<String> c2 = (s) -> System.out.println(s);
        
        // Multiple parameters
        BinaryOperator<Integer> add = (a, b) -> a + b;
        
        // Multiple statements (braces required)
        Consumer<String> multiLine = s -> {
            String upper = s.toUpperCase();
            System.out.println("Processing: " + upper);
        };
        
        // Return statement
        Function<String, Integer> length = s -> s.length();
        Function<String, Integer> lengthExplicit = s -> {
            return s.length();
        };
    }
}
```

### Functional Interfaces
```java
// Built-in functional interfaces
public class FunctionalInterfaceExamples {
    public void demonstrateInterfaces() {
        // Predicate<T> - takes T, returns boolean
        Predicate<String> isEmpty = s -> s.isEmpty();
        Predicate<Integer> isEven = n -> n % 2 == 0;
        
        // Function<T, R> - takes T, returns R
        Function<String, Integer> stringLength = s -> s.length();
        Function<Integer, String> intToString = i -> String.valueOf(i);
        
        // Consumer<T> - takes T, returns void
        Consumer<String> printer = s -> System.out.println(s);
        Consumer<List<String>> listPrinter = list -> list.forEach(System.out::println);
        
        // Supplier<T> - takes nothing, returns T
        Supplier<String> stringSupplier = () -> "Hello World";
        Supplier<Double> randomSupplier = () -> Math.random();
        
        // BinaryOperator<T> - takes two T, returns T
        BinaryOperator<Integer> add = (a, b) -> a + b;
        BinaryOperator<String> concat = (a, b) -> a + b;
        
        // UnaryOperator<T> - takes T, returns T
        UnaryOperator<String> toUpper = s -> s.toUpperCase();
        UnaryOperator<Integer> square = n -> n * n;
        
        // BiFunction<T, U, R> - takes T and U, returns R
        BiFunction<String, Integer, String> repeat = (str, count) -> str.repeat(count);
        
        // BiConsumer<T, U> - takes T and U, returns void
        BiConsumer<String, Integer> printPair = (s, i) -> System.out.println(s + ": " + i);
        
        // BiPredicate<T, U> - takes T and U, returns boolean
        BiPredicate<String, Integer> checkLength = (s, len) -> s.length() == len;
    }
    
    // Function composition
    public void functionComposition() {
        Function<Integer, Integer> multiplyBy2 = x -> x * 2;
        Function<Integer, Integer> add3 = x -> x + 3;
        
        // compose: apply the function passed as parameter first, then this function
        Function<Integer, Integer> add3ThenMultiplyBy2 = multiplyBy2.compose(add3);
        // Result: (5 + 3) * 2 = 16
        System.out.println(add3ThenMultiplyBy2.apply(5));
        
        // andThen: apply this function first, then the function passed as parameter
        Function<Integer, Integer> multiplyBy2ThenAdd3 = multiplyBy2.andThen(add3);
        // Result: (5 * 2) + 3 = 13
        System.out.println(multiplyBy2ThenAdd3.apply(5));
        
        // Predicate combination
        Predicate<String> isNotEmpty = s -> !s.isEmpty();
        Predicate<String> isLongEnough = s -> s.length() > 5;
        Predicate<String> isValid = isNotEmpty.and(isLongEnough);
        
        System.out.println(isValid.test("Hello World")); // true
        System.out.println(isValid.test("Hi")); // false
    }
}

// Custom functional interface
@FunctionalInterface
public interface Calculator {
    int calculate(int a, int b);
    
    // Default methods allowed
    default void printResult(int a, int b) {
        System.out.println("Result: " + calculate(a, b));
    }
}

// Usage
Calculator add = (a, b) -> a + b;
Calculator multiply = (a, b) -> a * b;
```

## 2. Method References

### Types of Method References
```java
public class MethodReferenceExamples {
    public void demonstrateMethodReferences() {
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
        
        // 1. Static method reference
        // Lambda: s -> Integer.parseInt(s)
        Function<String, Integer> parser = Integer::parseInt;
        
        // 2. Instance method reference of particular object
        String prefix = "Hello ";
        // Lambda: s -> prefix.concat(s)
        Function<String, String> greeter = prefix::concat;
        
        // 3. Instance method reference of arbitrary object
        // Lambda: s -> s.length()
        Function<String, Integer> lengthExtractor = String::length;
        
        // 4. Constructor reference
        // Lambda: () -> new ArrayList<>()
        Supplier<List<String>> listSupplier = ArrayList::new;
        // Lambda: size -> new ArrayList<>(size)
        Function<Integer, List<String>> listWithSize = ArrayList::new;
        
        // Usage examples
        names.stream()
             .map(String::toUpperCase)        // Method reference
             .forEach(System.out::println);   // Method reference
        
        // Equivalent with lambdas
        names.stream()
             .map(s -> s.toUpperCase())
             .forEach(s -> System.out.println(s));
    }
}
```

## 3. Stream API

### Stream Creation
```java
public class StreamCreationExamples {
    public void createStreams() {
        // From collections
        List<String> list = Arrays.asList("a", "b", "c");
        Stream<String> streamFromList = list.stream();
        
        // From arrays
        String[] array = {"x", "y", "z"};
        Stream<String> streamFromArray = Arrays.stream(array);
        
        // Using Stream.of()
        Stream<String> streamOf = Stream.of("1", "2", "3");
        
        // Empty stream
        Stream<String> emptyStream = Stream.empty();
        
        // Infinite streams
        Stream<Integer> infiniteStream = Stream.iterate(0, n -> n + 2);
        Stream<Double> randomStream = Stream.generate(Math::random);
        
        // Range streams
        IntStream range = IntStream.range(1, 5);        // 1,2,3,4
        IntStream rangeClosed = IntStream.rangeClosed(1, 5); // 1,2,3,4,5
        
        // From files
        try {
            Stream<String> lines = Files.lines(Paths.get("file.txt"));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

### Intermediate Operations
```java
public class IntermediateOperations {
    public void demonstrateOperations() {
        List<String> words = Arrays.asList("apple", "banana", "cherry", "date", "elderberry");
        
        // filter - keep elements matching predicate
        words.stream()
             .filter(s -> s.length() > 5)
             .forEach(System.out::println); // banana, cherry, elderberry
        
        // map - transform each element
        words.stream()
             .map(String::length)
             .forEach(System.out::println); // 5, 6, 6, 4, 10
        
        // flatMap - flatten nested structures
        List<List<String>> nestedList = Arrays.asList(
            Arrays.asList("a", "b"),
            Arrays.asList("c", "d", "e")
        );
        nestedList.stream()
                  .flatMap(List::stream)
                  .forEach(System.out::println); // a, b, c, d, e
        
        // distinct - remove duplicates
        Arrays.asList(1, 2, 2, 3, 3, 3)
              .stream()
              .distinct()
              .forEach(System.out::println); // 1, 2, 3
        
        // sorted - sort elements
        words.stream()
             .sorted()
             .forEach(System.out::println); // alphabetical order
        
        words.stream()
             .sorted(Comparator.comparing(String::length))
             .forEach(System.out::println); // by length
        
        // peek - perform action without consuming
        words.stream()
             .peek(s -> System.out.println("Processing: " + s))
             .map(String::toUpperCase)
             .forEach(System.out::println);
        
        // limit - take first n elements
        words.stream()
             .limit(3)
             .forEach(System.out::println);
        
        // skip - skip first n elements
        words.stream()
             .skip(2)
             .forEach(System.out::println);
    }
}
```

### Terminal Operations
```java
public class TerminalOperations {
    public void demonstrateTerminalOps() {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        
        // forEach - perform action on each element
        numbers.stream().forEach(System.out::println);
        
        // collect - collect to collection
        List<Integer> evenNumbers = numbers.stream()
                                          .filter(n -> n % 2 == 0)
                                          .collect(Collectors.toList());
        
        Set<Integer> uniqueNumbers = numbers.stream()
                                           .collect(Collectors.toSet());
        
        String joined = numbers.stream()
                              .map(String::valueOf)
                              .collect(Collectors.joining(", "));
        
        // reduce - combine elements
        Optional<Integer> sum = numbers.stream()
                                      .reduce((a, b) -> a + b);
        
        Integer sumWithIdentity = numbers.stream()
                                        .reduce(0, (a, b) -> a + b);
        
        Optional<Integer> max = numbers.stream()
                                      .reduce(Integer::max);
        
        // count - count elements
        long count = numbers.stream()
                           .filter(n -> n > 5)
                           .count();
        
        // anyMatch, allMatch, noneMatch
        boolean hasEven = numbers.stream().anyMatch(n -> n % 2 == 0);
        boolean allPositive = numbers.stream().allMatch(n -> n > 0);
        boolean noneNegative = numbers.stream().noneMatch(n -> n < 0);
        
        // findFirst, findAny
        Optional<Integer> first = numbers.stream()
                                        .filter(n -> n > 5)
                                        .findFirst();
        
        Optional<Integer> any = numbers.stream()
                                      .filter(n -> n > 5)
                                      .findAny();
        
        // min, max
        Optional<Integer> minimum = numbers.stream().min(Integer::compareTo);
        Optional<Integer> maximum = numbers.stream().max(Integer::compareTo);
    }
}
```

### Advanced Stream Operations
```java
public class AdvancedStreamOperations {
    public void advancedExamples() {
        List<Person> people = Arrays.asList(
            new Person("Alice", 25, "Engineer"),
            new Person("Bob", 30, "Manager"),
            new Person("Charlie", 35, "Engineer"),
            new Person("Diana", 28, "Designer")
        );
        
        // Grouping
        Map<String, List<Person>> byJob = people.stream()
            .collect(Collectors.groupingBy(Person::getJob));
        
        // Grouping with counting
        Map<String, Long> jobCounts = people.stream()
            .collect(Collectors.groupingBy(Person::getJob, Collectors.counting()));
        
        // Partitioning
        Map<Boolean, List<Person>> partitioned = people.stream()
            .collect(Collectors.partitioningBy(p -> p.getAge() > 30));
        
        // Custom collector
        String names = people.stream()
            .map(Person::getName)
            .collect(Collectors.joining(", ", "[", "]"));
        
        // Statistics
        IntSummaryStatistics ageStats = people.stream()
            .mapToInt(Person::getAge)
            .summaryStatistics();
        
        System.out.println("Average age: " + ageStats.getAverage());
        System.out.println("Max age: " + ageStats.getMax());
        
        // Parallel streams
        people.parallelStream()
              .filter(p -> p.getAge() > 25)
              .forEach(System.out::println);
    }
}

class Person {
    private String name;
    private int age;
    private String job;
    
    // Constructor, getters, toString...
}
```

## 4. Optional Class

### Optional Basics
```java
public class OptionalExamples {
    public void demonstrateOptional() {
        // Creating Optional
        Optional<String> empty = Optional.empty();
        Optional<String> nonEmpty = Optional.of("Hello");
        Optional<String> nullable = Optional.ofNullable(getString()); // might be null
        
        // Checking presence
        if (nonEmpty.isPresent()) {
            System.out.println(nonEmpty.get());
        }
        
        // Better approach - functional style
        nonEmpty.ifPresent(System.out::println);
        
        // Providing defaults
        String value1 = empty.orElse("Default Value");
        String value2 = empty.orElseGet(() -> "Computed Default");
        
        // Throwing exception if empty
        try {
            String value3 = empty.orElseThrow(() -> new RuntimeException("Value not found"));
        } catch (RuntimeException e) {
            System.out.println(e.getMessage());
        }
        
        // Transforming Optional
        Optional<Integer> length = nonEmpty.map(String::length);
        Optional<String> upper = nonEmpty.map(String::toUpperCase);
        
        // Filtering Optional
        Optional<String> filtered = nonEmpty.filter(s -> s.length() > 3);
        
        // FlatMap for nested Optionals
        Optional<Optional<String>> nested = Optional.of(Optional.of("Hello"));
        Optional<String> flattened = nested.flatMap(opt -> opt);
    }
    
    // Method that might return null
    private String getString() {
        return Math.random() > 0.5 ? "Hello" : null;
    }
    
    // Better approach - return Optional
    public Optional<String> findUserById(int id) {
        // Simulate database lookup
        if (id > 0) {
            return Optional.of("User" + id);
        }
        return Optional.empty();
    }
    
    // Usage
    public void useOptionalMethod() {
        findUserById(1)
            .map(String::toUpperCase)
            .filter(name -> name.length() > 3)
            .ifPresentOrElse(
                System.out::println,
                () -> System.out.println("User not found")
            );
    }
}
```

## 5. Date and Time API (Java 8)

### New Date/Time Classes
```java
import java.time.*;
import java.time.format.DateTimeFormatter;

public class DateTimeExamples {
    public void demonstrateDateTime() {
        // Current date and time
        LocalDate today = LocalDate.now();
        LocalTime now = LocalTime.now();
        LocalDateTime dateTime = LocalDateTime.now();
        ZonedDateTime zonedDateTime = ZonedDateTime.now();
        
        // Creating specific dates
        LocalDate specificDate = LocalDate.of(2023, Month.DECEMBER, 25);
        LocalTime specificTime = LocalTime.of(14, 30, 0);
        LocalDateTime specificDateTime = LocalDateTime.of(2023, 12, 25, 14, 30);
        
        // Parsing from strings
        LocalDate parsedDate = LocalDate.parse("2023-12-25");
        LocalTime parsedTime = LocalTime.parse("14:30:00");
        LocalDateTime parsedDateTime = LocalDateTime.parse("2023-12-25T14:30:00");
        
        // Formatting
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        String formattedDate = today.format(formatter);
        
        DateTimeFormatter timeFormatter = DateTimeFormatter.ofPattern("HH:mm:ss");
        String formattedTime = now.format(timeFormatter);
        
        // Date arithmetic
        LocalDate tomorrow = today.plusDays(1);
        LocalDate nextWeek = today.plusWeeks(1);
        LocalDate nextMonth = today.plusMonths(1);
        LocalDate nextYear = today.plusYears(1);
        
        LocalDate yesterday = today.minusDays(1);
        
        // Time arithmetic
        LocalTime laterTime = now.plusHours(2).plusMinutes(30);
        LocalTime earlierTime = now.minusHours(1);
        
        // Comparisons
        boolean isBefore = today.isBefore(tomorrow);
        boolean isAfter = today.isAfter(yesterday);
        boolean isEqual = today.equals(LocalDate.now());
        
        // Period and Duration
        LocalDate startDate = LocalDate.of(2023, 1, 1);
        LocalDate endDate = LocalDate.of(2023, 12, 31);
        Period period = Period.between(startDate, endDate);
        
        LocalTime startTime = LocalTime.of(9, 0);
        LocalTime endTime = LocalTime.of(17, 30);
        Duration duration = Duration.between(startTime, endTime);
        
        System.out.println("Period: " + period.getYears() + " years, " + 
                          period.getMonths() + " months, " + 
                          period.getDays() + " days");
        System.out.println("Duration: " + duration.toHours() + " hours");
        
        // Working with time zones
        ZoneId tokyoZone = ZoneId.of("Asia/Tokyo");
        ZonedDateTime tokyoTime = ZonedDateTime.now(tokyoZone);
        
        ZonedDateTime utcTime = ZonedDateTime.now(ZoneOffset.UTC);
        ZonedDateTime convertedTime = utcTime.withZoneSameInstant(tokyoZone);
    }
}
```

## 6. Java 9+ Features

### Java 9 Features
```java
// 1. Private methods in interfaces
public interface Java9Interface {
    private void privateMethod() {
        // Implementation details hidden from implementing classes
    }
    
    default void publicMethod() {
        privateMethod(); // Can call private method
    }
}

// 2. Factory methods for immutable collections
List<String> immutableList = List.of("one", "two", "three");
Set<Integer> immutableSet = Set.of(1, 2, 3);
Map<String, Integer> immutableMap = Map.of("one", 1, "two", 2);

// 3. Try-with-resources enhancement
BufferedReader reader = new BufferedReader(new FileReader("file.txt"));
try (reader) { // No need to redeclare
    // Use reader
}
```

### Java 10 Features
```java
// Local variable type inference with 'var'
var list = new ArrayList<String>(); // Inferred as ArrayList<String>
var map = Map.of("key", "value"); // Inferred as Map<String, String>
var number = 42; // Inferred as int

// Cannot use with:
// - Method parameters
// - Fields
// - Without initializers: var x; // ERROR
```

### Java 11+ Features
```java
// String methods
String str = "  Hello Java 11  ";
str.strip();      // Removes leading/trailing whitespace (Unicode-aware)
str.stripLeading(); // Removes leading whitespace
str.stripTrailing(); // Removes trailing whitespace
str.isBlank();    // Checks if string is empty or only whitespace
str.lines();      // Returns stream of lines
"Java".repeat(3); // "JavaJavaJava"

// Files convenience method
String content = Files.readString(Path.of("file.txt"));
Files.writeString(Path.of("output.txt"), "Content");

// HTTP Client (standardized in Java 11)
HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://example.com"))
    .build();
HttpResponse<String> response = client.send(request, 
    HttpResponse.BodyHandlers.ofString());
```

## 🧠 Quick Learning Techniques

### 1. Memory Aids
- **Lambda**: "Anonymous function with arrow (->)"
- **Stream**: "Data pipeline with operations"
- **Optional**: "Maybe container - might be empty"
- **Functional Interface**: "One abstract method only"

### 2. Stream Operations Flow
```
Source → Intermediate Operations → Terminal Operation
List   → filter, map, sorted    → collect, forEach
```

### 3. Common Patterns
```java
// Filter-Map-Collect pattern
list.stream()
    .filter(predicate)
    .map(transformer)
    .collect(Collectors.toList());

// Optional chain pattern
optional
    .filter(predicate)
    .map(transformer)
    .orElse(defaultValue);

// Method reference shortcuts
String::length          // s -> s.length()
System.out::println     // s -> System.out.println(s)
Integer::parseInt       // s -> Integer.parseInt(s)
ArrayList::new          // () -> new ArrayList<>()
```

## 📝 Practice Problems (40 minutes daily)

### Lambda & Stream Practice
1. Convert list of strings to uppercase using streams
2. Find all even numbers from a list and collect to set
3. Group list of objects by a property
4. Calculate average of numeric values using streams
5. Implement custom collector for specific aggregation

### Optional Practice
1. Refactor null-checking code to use Optional
2. Chain multiple Optional operations
3. Handle nested Optional scenarios
4. Create methods that return Optional instead of null

### Code Templates
```java
// Stream processing template
List<ResultType> result = sourceList.stream()
    .filter(item -> condition)
    .map(item -> transform(item))
    .sorted(Comparator.comparing(ResultType::getProperty))
    .collect(Collectors.toList());

// Optional handling template
return optionalValue
    .filter(value -> isValid(value))
    .map(value -> transform(value))
    .orElseThrow(() -> new CustomException("Value not found"));

// Grouping template
Map<KeyType, List<ValueType>> grouped = list.stream()
    .collect(Collectors.groupingBy(ValueType::getKey));

// Custom functional interface template
@FunctionalInterface
public interface CustomFunction<T, R> {
    R apply(T input) throws Exception;
    
    default CustomFunction<T, R> andThen(Function<R, R> after) {
        return input -> after.apply(apply(input));
    }
}
```

## 🎯 Daily Review Checklist
- [ ] Can write lambda expressions fluently
- [ ] Know all common functional interfaces
- [ ] Can chain stream operations effectively
- [ ] Understand when to use Optional
- [ ] Can work with new Date/Time API
- [ ] Know method reference syntax

## ⚡ Speed Learning Tips
1. **Think Functionally**: Focus on what to do, not how
2. **Pipeline Visualization**: Draw data flow diagrams
3. **Method Reference Practice**: Convert lambdas to method references
4. **Stream Chaining**: Practice complex stream operations daily
5. **Optional First**: Use Optional in all new code

## 🔗 Next Topic Preview
**I/O Operations & File Handling**: File I/O, NIO, Serialization, JSON processing