# Common Stream Patterns

## 1. Filter-Map-Collect Pattern
**Use Case:** Select and transform elements

```java
List<String> result = list.stream()
    .filter(predicate)
    .map(transformer)
    .collect(Collectors.toList());

// Example: Get uppercase names of adults
List<String> adultNames = people.stream()
    .filter(p -> p.getAge() >= 18)
    .map(Person::getName)
    .map(String::toUpperCase)
    .collect(Collectors.toList());
```

## 2. GroupBy Pattern
**Use Case:** Group elements by a classifier

```java
Map<K, List<V>> grouped = list.stream()
    .collect(Collectors.groupingBy(classifier));

// Example: Group employees by department
Map<String, List<Employee>> byDept = employees.stream()
    .collect(Collectors.groupingBy(Employee::getDepartment));

// With downstream collector
Map<String, Long> countByDept = employees.stream()
    .collect(Collectors.groupingBy(
        Employee::getDepartment,
        Collectors.counting()
    ));
```

## 3. FlatMap Pattern
**Use Case:** Flatten nested structures

```java
List<R> flattened = list.stream()
    .flatMap(element -> element.getCollection().stream())
    .collect(Collectors.toList());

// Example: Get all skills from all employees
Set<String> allSkills = employees.stream()
    .flatMap(e -> e.getSkills().stream())
    .collect(Collectors.toSet());

// Example: Split sentences into words
List<String> words = sentences.stream()
    .flatMap(s -> Arrays.stream(s.split(" ")))
    .collect(Collectors.toList());
```

## 4. Reduce Pattern
**Use Case:** Aggregate values into single result

```java
T result = stream.reduce(identity, accumulator);

// Example: Sum
int sum = numbers.stream().reduce(0, Integer::sum);

// Example: Product
int product = numbers.stream().reduce(1, (a, b) -> a * b);

// Example: Max
Optional<Integer> max = numbers.stream().reduce(Integer::max);

// Example: Concatenate strings
String combined = words.stream()
    .reduce("", (a, b) -> a + " " + b);
```

## 5. Partition Pattern
**Use Case:** Split into two groups based on predicate

```java
Map<Boolean, List<T>> partitioned = stream
    .collect(Collectors.partitioningBy(predicate));

// Example: Separate adults and minors
Map<Boolean, List<Person>> partitioned = people.stream()
    .collect(Collectors.partitioningBy(p -> p.getAge() >= 18));

List<Person> adults = partitioned.get(true);
List<Person> minors = partitioned.get(false);
```

## 6. Top N Pattern
**Use Case:** Find top/bottom N elements

```java
List<T> topN = stream
    .sorted(comparator)
    .limit(n)
    .collect(Collectors.toList());

// Example: Top 3 earners
List<Employee> top3 = employees.stream()
    .sorted(Comparator.comparing(Employee::getSalary).reversed())
    .limit(3)
    .collect(Collectors.toList());
```

## 7. Distinct-Sorted Pattern
**Use Case:** Remove duplicates and sort

```java
List<T> result = stream
    .distinct()
    .sorted()
    .collect(Collectors.toList());

// Example
List<String> uniqueSorted = words.stream()
    .distinct()
    .sorted()
    .collect(Collectors.toList());
```

## 8. Optional Chain Pattern
**Use Case:** Safely navigate nested objects

```java
Optional<R> result = optional
    .flatMap(obj -> obj.getOptionalProperty())
    .map(prop -> prop.getValue())
    .filter(predicate)
    .orElse(defaultValue);

// Example: Get user's city
String city = findUser(id)
    .flatMap(User::getAddress)
    .map(Address::getCity)
    .orElse("Unknown");
```

## 9. Statistics Pattern
**Use Case:** Calculate statistics (sum, avg, min, max, count)

```java
DoubleSummaryStatistics stats = stream
    .collect(Collectors.summarizingDouble(mapper));

// Example: Salary statistics
DoubleSummaryStatistics salaryStats = employees.stream()
    .collect(Collectors.summarizingDouble(Employee::getSalary));

System.out.println("Count: " + stats.getCount());
System.out.println("Sum: " + stats.getSum());
System.out.println("Min: " + stats.getMin());
System.out.println("Max: " + stats.getMax());
System.out.println("Average: " + stats.getAverage());
```

## 10. Multi-Level Grouping Pattern
**Use Case:** Group by multiple criteria

```java
Map<K1, Map<K2, List<V>>> multiLevel = stream
    .collect(Collectors.groupingBy(
        classifier1,
        Collectors.groupingBy(classifier2)
    ));

// Example: Group by department, then by age range
Map<String, Map<String, List<Employee>>> grouped = employees.stream()
    .collect(Collectors.groupingBy(
        Employee::getDepartment,
        Collectors.groupingBy(e -> e.getAge() < 30 ? "Junior" : "Senior")
    ));
```

## 11. Joining Strings Pattern
**Use Case:** Concatenate strings with delimiter

```java
String result = stream.collect(Collectors.joining(delimiter));

// Example: Join names with comma
String names = people.stream()
    .map(Person::getName)
    .collect(Collectors.joining(", "));

// With prefix and suffix
String formatted = people.stream()
    .map(Person::getName)
    .collect(Collectors.joining(", ", "[", "]"));
```

## 12. Converting Collections Pattern
**Use Case:** Convert between collection types

```java
// List to Set
Set<T> set = list.stream().collect(Collectors.toSet());

// List to Map
Map<K, V> map = list.stream()
    .collect(Collectors.toMap(keyMapper, valueMapper));

// Array to List
List<T> list = Arrays.stream(array).collect(Collectors.toList());
```

## 13. Conditional Processing Pattern
**Use Case:** Process elements based on condition

```java
// Filter then process
list.stream()
    .filter(predicate)
    .forEach(action);

// Or with Optional
list.stream()
    .filter(predicate)
    .findFirst()
    .ifPresent(action);

// Example: Process only adults
people.stream()
    .filter(p -> p.getAge() >= 18)
    .forEach(p -> sendEmail(p));
```

## 14. Parallel Processing Pattern
**Use Case:** Speed up processing of large datasets

```java
// Sequential
long sum = numbers.stream()
    .mapToLong(Long::valueOf)
    .sum();

// Parallel
long sum = numbers.parallelStream()
    .mapToLong(Long::valueOf)
    .sum();

// Or convert to parallel
Stream<T> parallel = stream.parallel();
```

## 15. Mapping to Different Type Pattern
**Use Case:** Extract or transform to different type

```java
List<R> result = list.stream()
    .map(mapper)
    .collect(Collectors.toList());

// Example: Get email addresses
List<String> emails = users.stream()
    .map(User::getEmail)
    .collect(Collectors.toList());

// Example: Create DTOs
List<UserDTO> dtos = users.stream()
    .map(user -> new UserDTO(user.getName(), user.getEmail()))
    .collect(Collectors.toList());
```

## Real-World Examples

### Example 1: Process Orders
```java
// Calculate total revenue from completed orders
double totalRevenue = orders.stream()
    .filter(o -> o.getStatus().equals("COMPLETED"))
    .mapToDouble(Order::getAmount)
    .sum();
```

### Example 2: Find Duplicates
```java
// Find duplicate elements in list
Set<String> seen = new HashSet<>();
Set<String> duplicates = list.stream()
    .filter(e -> !seen.add(e))
    .collect(Collectors.toSet());
```

### Example 3: Word Frequency
```java
// Count word frequency
Map<String, Long> wordCount = sentences.stream()
    .flatMap(s -> Arrays.stream(s.split(" ")))
    .collect(Collectors.groupingBy(
        word -> word.toLowerCase(),
        Collectors.counting()
    ));
```

### Example 4: Data Transformation Pipeline
```java
// Transform, filter, group, and aggregate
Map<String, Double> avgSalaryByDept = employees.stream()
    .filter(e -> e.getSalary() > 50000)
    .collect(Collectors.groupingBy(
        Employee::getDepartment,
        Collectors.averagingDouble(Employee::getSalary)
    ));
```

### Example 5: Paginated Results
```java
// Get page 3 (10 items per page)
int page = 3;
int pageSize = 10;

List<T> results = list.stream()
    .skip((page - 1) * pageSize)
    .limit(pageSize)
    .collect(Collectors.toList());
```

## Performance Tips

1. **Filter early**: Place filter operations early in the pipeline
2. **Use primitive streams**: IntStream, LongStream to avoid boxing
3. **Parallel for large data**: Use parallelStream() for CPU-intensive operations on large datasets
4. **Short-circuit**: Use findFirst(), findAny(), anyMatch() when you don't need all results
5. **Avoid stateful operations**: Don't modify external state inside stream operations

## Anti-Patterns to Avoid

❌ **Reusing streams**
```java
Stream<String> stream = list.stream();
stream.forEach(System.out::println);
stream.count();  // ERROR: Stream already operated upon
```

❌ **Side effects**
```java
List<String> result = new ArrayList<>();
list.stream().forEach(s -> result.add(s));  // Bad
```

❌ **Unnecessary boxing**
```java
list.stream().map(Integer::valueOf).sum();  // Bad
list.stream().mapToInt(Integer::intValue).sum();  // Good
```

❌ **Complex lambdas**
```java
// If lambda is too complex, extract to method
list.stream().filter(s -> {
    // 20 lines of code...
});  // Bad - extract to method
```
