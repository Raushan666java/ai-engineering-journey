/**
 * Day 10: Streams API Basics
 * 
 * Topics Covered:
 * - Creating streams (from collections, arrays, generators)
 * - Intermediate operations (filter, map, sorted, distinct, limit, skip)
 * - Terminal operations (forEach, collect, count, reduce)
 * - Stream pipeline execution (lazy evaluation)
 * - Sequential vs parallel streams
 */

import java.util.*;
import java.util.stream.*;

public class streams_basics {
    public static void main(String[] args) {
        System.out.println("=== Streams API Basics ===\n");
        
        // ============ CREATING STREAMS ============
        
        // 1. Stream from Collection
        System.out.println("1. Creating Streams:");
        
        List<String> list = Arrays.asList("Apple", "Banana", "Cherry");
        Stream<String> stream1 = list.stream();
        System.out.println("From list: " + stream1.count());
        
        Set<Integer> set = new HashSet<>(Arrays.asList(1, 2, 3, 4, 5));
        Stream<Integer> stream2 = set.stream();
        System.out.println("From set: " + stream2.count());
        System.out.println();
        
        // 2. Stream from Array
        System.out.println("2. Stream from Array:");
        String[] array = {"Java", "Python", "JavaScript"};
        Stream<String> stream3 = Arrays.stream(array);
        stream3.forEach(s -> System.out.println("  " + s));
        
        int[] numbers = {1, 2, 3, 4, 5};
        IntStream intStream = Arrays.stream(numbers);
        System.out.println("  Sum: " + intStream.sum());
        System.out.println();
        
        // 3. Stream.of()
        System.out.println("3. Stream.of():");
        Stream<String> stream4 = Stream.of("One", "Two", "Three");
        stream4.forEach(s -> System.out.println("  " + s));
        System.out.println();
        
        // 4. Stream.generate() - Infinite stream
        System.out.println("4. Stream.generate() (infinite):");
        Stream<Double> randomStream = Stream.generate(Math::random);
        randomStream.limit(5).forEach(n -> System.out.println("  Random: " + n));
        System.out.println();
        
        // 5. Stream.iterate() - Infinite stream with seed
        System.out.println("5. Stream.iterate():");
        Stream<Integer> evenNumbers = Stream.iterate(0, n -> n + 2);
        evenNumbers.limit(10).forEach(n -> System.out.print(n + " "));
        System.out.println("\n");
        
        // 6. IntStream.range() and rangeClosed()
        System.out.println("6. IntStream.range():");
        IntStream.range(1, 5).forEach(n -> System.out.print(n + " "));  // 1 2 3 4
        System.out.println();
        IntStream.rangeClosed(1, 5).forEach(n -> System.out.print(n + " "));  // 1 2 3 4 5
        System.out.println("\n");
        
        // ============ INTERMEDIATE OPERATIONS (LAZY) ============
        
        // 7. filter() - Select elements
        System.out.println("7. filter():");
        List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        
        List<Integer> evenNums = nums.stream()
            .filter(n -> n % 2 == 0)
            .collect(Collectors.toList());
        
        System.out.println("Original: " + nums);
        System.out.println("Even numbers: " + evenNums);
        System.out.println();
        
        // 8. map() - Transform elements
        System.out.println("8. map():");
        List<String> words = Arrays.asList("java", "python", "javascript");
        
        List<String> upperWords = words.stream()
            .map(String::toUpperCase)
            .collect(Collectors.toList());
        
        List<Integer> lengths = words.stream()
            .map(String::length)
            .collect(Collectors.toList());
        
        System.out.println("Original: " + words);
        System.out.println("Upper case: " + upperWords);
        System.out.println("Lengths: " + lengths);
        System.out.println();
        
        // 9. sorted() - Order elements
        System.out.println("9. sorted():");
        List<Integer> unsorted = Arrays.asList(5, 2, 8, 1, 9, 3);
        
        List<Integer> sorted = unsorted.stream()
            .sorted()
            .collect(Collectors.toList());
        
        List<Integer> reverseSorted = unsorted.stream()
            .sorted(Comparator.reverseOrder())
            .collect(Collectors.toList());
        
        System.out.println("Original: " + unsorted);
        System.out.println("Sorted: " + sorted);
        System.out.println("Reverse sorted: " + reverseSorted);
        System.out.println();
        
        // 10. distinct() - Remove duplicates
        System.out.println("10. distinct():");
        List<Integer> withDuplicates = Arrays.asList(1, 2, 2, 3, 3, 3, 4, 5, 5);
        
        List<Integer> unique = withDuplicates.stream()
            .distinct()
            .collect(Collectors.toList());
        
        System.out.println("With duplicates: " + withDuplicates);
        System.out.println("Unique: " + unique);
        System.out.println();
        
        // 11. limit() and skip() - Pagination
        System.out.println("11. limit() and skip():");
        List<Integer> range = IntStream.rangeClosed(1, 20)
            .boxed()
            .collect(Collectors.toList());
        
        List<Integer> first5 = range.stream()
            .limit(5)
            .collect(Collectors.toList());
        
        List<Integer> skip5 = range.stream()
            .skip(5)
            .collect(Collectors.toList());
        
        List<Integer> page2 = range.stream()
            .skip(5)
            .limit(5)
            .collect(Collectors.toList());
        
        System.out.println("First 5: " + first5);
        System.out.println("Skip 5: " + skip5);
        System.out.println("Page 2 (skip 5, take 5): " + page2);
        System.out.println();
        
        // 12. peek() - Debug/inspect
        System.out.println("12. peek() (debug):");
        List<Integer> result = nums.stream()
            .filter(n -> n % 2 == 0)
            .peek(n -> System.out.println("  Filtered: " + n))
            .map(n -> n * 2)
            .peek(n -> System.out.println("  Mapped: " + n))
            .collect(Collectors.toList());
        
        System.out.println("Final result: " + result);
        System.out.println();
        
        // ============ TERMINAL OPERATIONS (EAGER) ============
        
        // 13. forEach() - Iterate
        System.out.println("13. forEach():");
        words.stream().forEach(w -> System.out.println("  " + w));
        System.out.println();
        
        // 14. collect() - Accumulate into collection
        System.out.println("14. collect():");
        
        List<String> collected = words.stream()
            .map(String::toUpperCase)
            .collect(Collectors.toList());
        System.out.println("To List: " + collected);
        
        Set<String> collectedSet = words.stream()
            .collect(Collectors.toSet());
        System.out.println("To Set: " + collectedSet);
        System.out.println();
        
        // 15. count() - Count elements
        System.out.println("15. count():");
        long count = nums.stream()
            .filter(n -> n > 5)
            .count();
        System.out.println("Numbers > 5: " + count);
        System.out.println();
        
        // 16. min() and max() - Find extremes
        System.out.println("16. min() and max():");
        Optional<Integer> min = nums.stream().min(Integer::compareTo);
        Optional<Integer> max = nums.stream().max(Integer::compareTo);
        
        System.out.println("Min: " + min.orElse(0));
        System.out.println("Max: " + max.orElse(0));
        System.out.println();
        
        // 17. reduce() - Combine elements
        System.out.println("17. reduce():");
        
        // Sum using reduce
        int sum = nums.stream()
            .reduce(0, (a, b) -> a + b);
        System.out.println("Sum: " + sum);
        
        // Or using Integer::sum
        int sum2 = nums.stream()
            .reduce(0, Integer::sum);
        System.out.println("Sum (method ref): " + sum2);
        
        // Product
        int product = nums.stream()
            .reduce(1, (a, b) -> a * b);
        System.out.println("Product: " + product);
        
        // Max using reduce
        Optional<Integer> maxReduced = nums.stream()
            .reduce(Integer::max);
        System.out.println("Max (reduce): " + maxReduced.orElse(0));
        System.out.println();
        
        // 18. anyMatch(), allMatch(), noneMatch()
        System.out.println("18. Matching operations:");
        List<Integer> numbers2 = Arrays.asList(2, 4, 6, 8, 10);
        
        boolean anyEven = numbers2.stream().anyMatch(n -> n % 2 == 0);
        boolean allEven = numbers2.stream().allMatch(n -> n % 2 == 0);
        boolean noneOdd = numbers2.stream().noneMatch(n -> n % 2 != 0);
        
        System.out.println("Numbers: " + numbers2);
        System.out.println("Any even: " + anyEven);
        System.out.println("All even: " + allEven);
        System.out.println("None odd: " + noneOdd);
        System.out.println();
        
        // 19. findFirst() and findAny()
        System.out.println("19. findFirst() and findAny():");
        Optional<Integer> first = nums.stream()
            .filter(n -> n > 5)
            .findFirst();
        
        Optional<Integer> any = nums.stream()
            .filter(n -> n > 5)
            .findAny();
        
        System.out.println("First > 5: " + first.orElse(-1));
        System.out.println("Any > 5: " + any.orElse(-1));
        System.out.println();
        
        // ============ CHAINING OPERATIONS ============
        
        // 20. Complex Stream Pipeline
        System.out.println("20. Complex Stream Pipeline:");
        
        List<Employee> employees = Arrays.asList(
            new Employee("Alice", 30, 75000, "IT"),
            new Employee("Bob", 25, 60000, "HR"),
            new Employee("Charlie", 35, 90000, "IT"),
            new Employee("David", 28, 70000, "IT"),
            new Employee("Eve", 32, 80000, "HR")
        );
        
        // Get names of IT employees with salary > 70k, sorted by name
        List<String> itHighEarners = employees.stream()
            .filter(e -> e.getDepartment().equals("IT"))
            .filter(e -> e.getSalary() > 70000)
            .map(Employee::getName)
            .sorted()
            .collect(Collectors.toList());
        
        System.out.println("IT employees earning > 70k: " + itHighEarners);
        System.out.println();
        
        // 21. Lazy Evaluation Demo
        System.out.println("21. Lazy Evaluation:");
        System.out.println("Creating stream (no output yet)...");
        
        Stream<Integer> lazyStream = nums.stream()
            .filter(n -> {
                System.out.println("  Filtering: " + n);
                return n % 2 == 0;
            })
            .map(n -> {
                System.out.println("  Mapping: " + n);
                return n * 2;
            });
        
        System.out.println("Stream created (operations not executed yet)");
        System.out.println("Now calling terminal operation (collect):");
        
        List<Integer> lazyResult = lazyStream.collect(Collectors.toList());
        System.out.println("Result: " + lazyResult);
        System.out.println();
        
        // 22. Stream Reuse (ERROR)
        System.out.println("22. Stream Reuse (demonstration):");
        Stream<String> stream = words.stream();
        System.out.println("Count: " + stream.count());
        
        try {
            System.out.println("Trying to reuse stream...");
            stream.forEach(System.out::println);  // ERROR
        } catch (IllegalStateException e) {
            System.out.println("ERROR: " + e.getMessage());
        }
        System.out.println("Streams can only be used once!\n");
        
        // 23. Parallel Streams
        System.out.println("23. Parallel Streams:");
        
        List<Integer> largeList = IntStream.rangeClosed(1, 1000)
            .boxed()
            .collect(Collectors.toList());
        
        // Sequential
        long startSeq = System.currentTimeMillis();
        int sumSeq = largeList.stream()
            .mapToInt(Integer::intValue)
            .sum();
        long endSeq = System.currentTimeMillis();
        
        // Parallel
        long startPar = System.currentTimeMillis();
        int sumPar = largeList.parallelStream()
            .mapToInt(Integer::intValue)
            .sum();
        long endPar = System.currentTimeMillis();
        
        System.out.println("Sequential sum: " + sumSeq + " (Time: " + (endSeq - startSeq) + "ms)");
        System.out.println("Parallel sum: " + sumPar + " (Time: " + (endPar - startPar) + "ms)");
        
        System.out.println("\n=== Streams Basics Complete ===");
    }
}

// Helper class
class Employee {
    private String name;
    private int age;
    private double salary;
    private String department;
    
    public Employee(String name, int age, double salary, String department) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.department = department;
    }
    
    public String getName() { return name; }
    public int getAge() { return age; }
    public double getSalary() { return salary; }
    public String getDepartment() { return department; }
    
    @Override
    public String toString() {
        return name + "(" + age + ", $" + salary + ", " + department + ")";
    }
}

/**
 * Key Concepts:
 * 
 * STREAM CREATION:
 * - collection.stream() - From any Collection
 * - Arrays.stream(array) - From array
 * - Stream.of(elements) - From varargs
 * - Stream.generate(supplier) - Infinite stream
 * - Stream.iterate(seed, unaryOp) - Infinite stream with seed
 * - IntStream.range(start, end) - Primitive stream
 * 
 * INTERMEDIATE OPERATIONS (Return Stream):
 * - filter(Predicate) - Select elements
 * - map(Function) - Transform elements
 * - flatMap(Function) - Flatten nested streams
 * - distinct() - Remove duplicates
 * - sorted() - Order elements
 * - sorted(Comparator) - Custom ordering
 * - limit(n) - Take first n elements
 * - skip(n) - Skip first n elements
 * - peek(Consumer) - Debug/inspect (side effect)
 * 
 * TERMINAL OPERATIONS (Trigger Execution):
 * - forEach(Consumer) - Iterate
 * - collect(Collector) - Accumulate to collection
 * - reduce(identity, BinaryOp) - Combine elements
 * - count() - Count elements
 * - min(Comparator), max(Comparator) - Find extremes
 * - anyMatch(Predicate) - Any element matches
 * - allMatch(Predicate) - All elements match
 * - noneMatch(Predicate) - No elements match
 * - findFirst() - First element (Optional)
 * - findAny() - Any element (Optional)
 * - toArray() - Convert to array
 * 
 * LAZY EVALUATION:
 * - Intermediate operations are lazy (not executed immediately)
 * - Terminal operation triggers execution
 * - Optimization: only process needed elements
 * 
 * STREAM CHARACTERISTICS:
 * - Single-use: Cannot reuse stream after terminal operation
 * - No storage: Operates on source (collection, array, etc.)
 * - Functional: Operations don't modify source
 * - Possibly infinite: generate(), iterate()
 * - Can be parallelized: parallelStream()
 * 
 * SEQUENTIAL VS PARALLEL:
 * - sequential(): Default, single thread
 * - parallel(): Multiple threads, may not be faster for small data
 * - Use parallel for CPU-intensive operations on large data
 * 
 * PRIMITIVE STREAMS:
 * - IntStream, LongStream, DoubleStream
 * - Methods: sum(), average(), max(), min()
 * - Boxing/Unboxing: boxed(), mapToInt(), mapToDouble()
 * 
 * BEST PRACTICES:
 * - Use method references when possible
 * - Avoid side effects in lambda expressions
 * - Don't reuse streams
 * - Test parallel streams before using (may be slower)
 * - Use primitive streams to avoid boxing overhead
 * 
 * Interview Tips:
 * - Know difference between intermediate and terminal operations
 * - Explain lazy evaluation
 * - Understand stream cannot be reused
 * - Know when to use parallel streams
 * - Be able to chain multiple operations
 */
