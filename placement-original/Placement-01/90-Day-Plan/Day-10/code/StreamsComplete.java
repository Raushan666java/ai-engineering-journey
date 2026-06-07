/*
 * STREAMS API - COMPLETE GUIDE
 * Day 10: Streams API, Lambda Expressions & Functional Programming
 * 
 * TABLE OF CONTENTS:
 * 1. Introduction to Streams
 * 2. Creating Streams
 * 3. Intermediate Operations (map, filter, flatMap, distinct, sorted, peek, limit, skip)
 * 4. Terminal Operations (forEach, collect, reduce, count, min, max, anyMatch, allMatch, noneMatch)
 * 5. Collectors
 * 6. Parallel Streams
 * 7. Stream Pipelines
 * 8. Performance Considerations
 * 9. Real-World Use Cases
 * 10. Interview Questions
 */

import java.util.*;
import java.util.stream.*;
import java.util.function.*;
import java.nio.file.*;
import java.io.IOException;

public class StreamsComplete {

    // ============================================================================
    // SECTION 1: INTRODUCTION TO STREAMS
    // ============================================================================
    
    /*
     * WHAT IS A STREAM?
     * - A stream is a sequence of elements supporting sequential and parallel aggregate operations
     * - Streams don't store elements; they compute elements on-demand (lazy evaluation)
     * - Stream operations are either intermediate (return Stream) or terminal (produce result)
     * - A stream can only be consumed ONCE - after terminal operation, stream is closed
     * 
     * STREAM vs COLLECTION:
     * Collection:
     *   - Stores data
     *   - Eager computation
     *   - Can be traversed multiple times
     *   - External iteration (for loops)
     * 
     * Stream:
     *   - Doesn't store data (views data from source)
     *   - Lazy computation (only when needed)
     *   - Can be traversed ONLY ONCE
     *   - Internal iteration (handled by library)
     * 
     * STREAM PIPELINE:
     * Source → Intermediate Operations (0 or more) → Terminal Operation (exactly 1)
     * 
     * Example: 
     * list.stream()              // Source
     *     .filter(x -> x > 10)   // Intermediate
     *     .map(x -> x * 2)       // Intermediate
     *     .collect(toList());    // Terminal
     */
    
    public static class StreamIntroduction {
        
        public static void demonstrateStreamBasics() {
            System.out.println("=== Stream Basics ===");
            
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
            
            // Traditional approach (imperative)
            List<Integer> evenDoubled = new ArrayList<>();
            for (Integer num : numbers) {
                if (num % 2 == 0) {
                    evenDoubled.add(num * 2);
                }
            }
            System.out.println("Traditional: " + evenDoubled);
            
            // Stream approach (declarative)
            List<Integer> evenDoubledStream = numbers.stream()
                .filter(n -> n % 2 == 0)    // Keep only even numbers
                .map(n -> n * 2)             // Double each number
                .collect(Collectors.toList()); // Collect to list
            System.out.println("Stream: " + evenDoubledStream);
            
            // Stream can only be used ONCE
            Stream<Integer> stream = numbers.stream();
            stream.forEach(System.out::print); // Consumes stream
            System.out.println();
            // stream.forEach(System.out::print); // ERROR! Stream already consumed
        }
        
        public static void demonstrateLazyEvaluation() {
            System.out.println("\n=== Lazy Evaluation ===");
            
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8);
            
            // Intermediate operations are LAZY - only execute when terminal operation is called
            Stream<Integer> stream = numbers.stream()
                .filter(n -> {
                    System.out.println("Filter: " + n);
                    return n % 2 == 0;
                })
                .map(n -> {
                    System.out.println("Map: " + n);
                    return n * 2;
                });
            
            System.out.println("Stream created, but nothing executed yet!");
            System.out.println("Now calling terminal operation:");
            
            List<Integer> result = stream.collect(Collectors.toList()); // Terminal operation triggers execution
            System.out.println("Result: " + result);
        }
    }

    // ============================================================================
    // SECTION 2: CREATING STREAMS
    // ============================================================================
    
    public static class StreamCreation {
        
        public static void demonstrateStreamCreation() {
            System.out.println("\n=== Creating Streams ===");
            
            // 1. From Collection
            List<String> list = Arrays.asList("a", "b", "c");
            Stream<String> streamFromList = list.stream();
            System.out.println("From List: " + streamFromList.collect(Collectors.toList()));
            
            // 2. From Array
            String[] array = {"x", "y", "z"};
            Stream<String> streamFromArray = Arrays.stream(array);
            System.out.println("From Array: " + streamFromArray.collect(Collectors.toList()));
            
            // 3. Stream.of()
            Stream<Integer> streamOf = Stream.of(1, 2, 3, 4, 5);
            System.out.println("Stream.of: " + streamOf.collect(Collectors.toList()));
            
            // 4. Stream.builder()
            Stream<String> streamBuilder = Stream.<String>builder()
                .add("one")
                .add("two")
                .add("three")
                .build();
            System.out.println("Stream.builder: " + streamBuilder.collect(Collectors.toList()));
            
            // 5. Stream.generate() - infinite stream
            Stream<Double> randomNumbers = Stream.generate(Math::random)
                .limit(5); // Must limit infinite streams!
            System.out.println("Stream.generate (random): " + randomNumbers.collect(Collectors.toList()));
            
            // 6. Stream.iterate() - infinite stream
            Stream<Integer> evenNumbers = Stream.iterate(0, n -> n + 2)
                .limit(10);
            System.out.println("Stream.iterate (even): " + evenNumbers.collect(Collectors.toList()));
            
            // 7. IntStream, LongStream, DoubleStream (primitive streams)
            IntStream intStream = IntStream.range(1, 6); // 1 to 5 (exclusive end)
            System.out.println("IntStream.range: " + intStream.boxed().collect(Collectors.toList()));
            
            IntStream intStreamClosed = IntStream.rangeClosed(1, 5); // 1 to 5 (inclusive end)
            System.out.println("IntStream.rangeClosed: " + intStreamClosed.boxed().collect(Collectors.toList()));
            
            // 8. From String
            IntStream charStream = "Hello".chars();
            System.out.println("String.chars: " + charStream.mapToObj(c -> (char) c).collect(Collectors.toList()));
            
            // 9. Empty Stream
            Stream<String> emptyStream = Stream.empty();
            System.out.println("Empty stream count: " + emptyStream.count());
            
            // 10. Parallel Stream
            Stream<Integer> parallelStream = list.stream().parallel();
            System.out.println("Parallel stream: " + parallelStream.isParallel());
        }
    }

    // ============================================================================
    // SECTION 3: INTERMEDIATE OPERATIONS
    // ============================================================================
    
    /*
     * INTERMEDIATE OPERATIONS:
     * - Return a new Stream (allow chaining)
     * - Are LAZY (not executed until terminal operation)
     * - Stateless vs Stateful:
     *   - Stateless: filter, map, flatMap, peek (process elements independently)
     *   - Stateful: distinct, sorted, limit, skip (may need to see all elements)
     */
    
    public static class IntermediateOperations {
        
        // 1. FILTER - select elements based on predicate
        public static void demonstrateFilter() {
            System.out.println("\n=== filter() ===");
            
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
            
            // Filter even numbers
            List<Integer> evenNumbers = numbers.stream()
                .filter(n -> n % 2 == 0)
                .collect(Collectors.toList());
            System.out.println("Even numbers: " + evenNumbers);
            
            // Multiple filters (can chain)
            List<Integer> result = numbers.stream()
                .filter(n -> n % 2 == 0)  // Even
                .filter(n -> n > 5)        // Greater than 5
                .collect(Collectors.toList());
            System.out.println("Even and > 5: " + result);
            
            // Filter with complex objects
            List<Person> people = Arrays.asList(
                new Person("Alice", 25),
                new Person("Bob", 30),
                new Person("Charlie", 35),
                new Person("David", 28)
            );
            
            List<Person> over30 = people.stream()
                .filter(p -> p.getAge() > 30)
                .collect(Collectors.toList());
            System.out.println("People over 30: " + over30);
        }
        
        // 2. MAP - transform each element
        public static void demonstrateMap() {
            System.out.println("\n=== map() ===");
            
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
            
            // Square each number
            List<Integer> squared = numbers.stream()
                .map(n -> n * n)
                .collect(Collectors.toList());
            System.out.println("Squared: " + squared);
            
            // Convert to String
            List<String> strings = numbers.stream()
                .map(n -> "Number: " + n)
                .collect(Collectors.toList());
            System.out.println("Strings: " + strings);
            
            // Extract property from objects
            List<Person> people = Arrays.asList(
                new Person("Alice", 25),
                new Person("Bob", 30),
                new Person("Charlie", 35)
            );
            
            List<String> names = people.stream()
                .map(Person::getName)  // Method reference
                .collect(Collectors.toList());
            System.out.println("Names: " + names);
            
            List<Integer> ages = people.stream()
                .map(Person::getAge)
                .collect(Collectors.toList());
            System.out.println("Ages: " + ages);
            
            // Chaining map operations
            List<String> upperNames = people.stream()
                .map(Person::getName)
                .map(String::toUpperCase)
                .collect(Collectors.toList());
            System.out.println("Upper names: " + upperNames);
        }
        
        // 3. FLATMAP - flatten nested structures
        public static void demonstrateFlatMap() {
            System.out.println("\n=== flatMap() ===");
            
            // Flatten list of lists
            List<List<Integer>> nestedList = Arrays.asList(
                Arrays.asList(1, 2, 3),
                Arrays.asList(4, 5, 6),
                Arrays.asList(7, 8, 9)
            );
            
            // map would give Stream<List<Integer>>
            // flatMap flattens to Stream<Integer>
            List<Integer> flattened = nestedList.stream()
                .flatMap(list -> list.stream())
                .collect(Collectors.toList());
            System.out.println("Flattened: " + flattened);
            
            // Flatten array of arrays
            String[][] arrayOfArrays = {
                {"a", "b"},
                {"c", "d"},
                {"e", "f"}
            };
            
            List<String> flattenedArrays = Arrays.stream(arrayOfArrays)
                .flatMap(Arrays::stream)
                .collect(Collectors.toList());
            System.out.println("Flattened arrays: " + flattenedArrays);
            
            // Split strings and flatten
            List<String> sentences = Arrays.asList(
                "Hello World",
                "Java Streams",
                "Functional Programming"
            );
            
            List<String> words = sentences.stream()
                .flatMap(s -> Arrays.stream(s.split(" ")))
                .collect(Collectors.toList());
            System.out.println("All words: " + words);
            
            // Unique characters from list of strings
            List<String> words2 = Arrays.asList("Hello", "World");
            List<String> uniqueChars = words2.stream()
                .flatMap(word -> Arrays.stream(word.split("")))
                .distinct()
                .collect(Collectors.toList());
            System.out.println("Unique chars: " + uniqueChars);
        }
        
        // 4. DISTINCT - remove duplicates
        public static void demonstrateDistinct() {
            System.out.println("\n=== distinct() ===");
            
            List<Integer> numbers = Arrays.asList(1, 2, 2, 3, 3, 3, 4, 5, 5);
            List<Integer> unique = numbers.stream()
                .distinct()
                .collect(Collectors.toList());
            System.out.println("Unique numbers: " + unique);
            
            // Distinct uses equals() and hashCode()
            List<Person> people = Arrays.asList(
                new Person("Alice", 25),
                new Person("Bob", 30),
                new Person("Alice", 25),  // Duplicate
                new Person("Charlie", 35)
            );
            
            List<Person> uniquePeople = people.stream()
                .distinct()
                .collect(Collectors.toList());
            System.out.println("Unique people: " + uniquePeople);
        }
        
        // 5. SORTED - sort elements
        public static void demonstrateSorted() {
            System.out.println("\n=== sorted() ===");
            
            List<Integer> numbers = Arrays.asList(5, 3, 8, 1, 9, 2);
            
            // Natural order (ascending)
            List<Integer> sortedAsc = numbers.stream()
                .sorted()
                .collect(Collectors.toList());
            System.out.println("Sorted ascending: " + sortedAsc);
            
            // Descending order
            List<Integer> sortedDesc = numbers.stream()
                .sorted(Comparator.reverseOrder())
                .collect(Collectors.toList());
            System.out.println("Sorted descending: " + sortedDesc);
            
            // Sort objects by property
            List<Person> people = Arrays.asList(
                new Person("Charlie", 35),
                new Person("Alice", 25),
                new Person("Bob", 30)
            );
            
            // Sort by name
            List<Person> sortedByName = people.stream()
                .sorted(Comparator.comparing(Person::getName))
                .collect(Collectors.toList());
            System.out.println("Sorted by name: " + sortedByName);
            
            // Sort by age
            List<Person> sortedByAge = people.stream()
                .sorted(Comparator.comparing(Person::getAge))
                .collect(Collectors.toList());
            System.out.println("Sorted by age: " + sortedByAge);
            
            // Sort by age descending
            List<Person> sortedByAgeDesc = people.stream()
                .sorted(Comparator.comparing(Person::getAge).reversed())
                .collect(Collectors.toList());
            System.out.println("Sorted by age desc: " + sortedByAgeDesc);
            
            // Multi-level sorting (age then name)
            List<Person> multiSort = people.stream()
                .sorted(Comparator.comparing(Person::getAge)
                    .thenComparing(Person::getName))
                .collect(Collectors.toList());
            System.out.println("Multi-level sort: " + multiSort);
        }
        
        // 6. PEEK - perform action without consuming stream (debugging)
        public static void demonstratePeek() {
            System.out.println("\n=== peek() ===");
            
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
            
            // Peek for debugging pipeline
            List<Integer> result = numbers.stream()
                .peek(n -> System.out.println("Original: " + n))
                .filter(n -> n % 2 == 0)
                .peek(n -> System.out.println("After filter: " + n))
                .map(n -> n * 2)
                .peek(n -> System.out.println("After map: " + n))
                .collect(Collectors.toList());
            
            System.out.println("Final result: " + result);
        }
        
        // 7. LIMIT - truncate stream to max size
        public static void demonstrateLimit() {
            System.out.println("\n=== limit() ===");
            
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
            
            // Take first 5 elements
            List<Integer> first5 = numbers.stream()
                .limit(5)
                .collect(Collectors.toList());
            System.out.println("First 5: " + first5);
            
            // Limit infinite stream
            List<Integer> first10Even = Stream.iterate(0, n -> n + 2)
                .limit(10)
                .collect(Collectors.toList());
            System.out.println("First 10 even: " + first10Even);
        }
        
        // 8. SKIP - skip first N elements
        public static void demonstrateSkip() {
            System.out.println("\n=== skip() ===");
            
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
            
            // Skip first 5 elements
            List<Integer> afterSkip = numbers.stream()
                .skip(5)
                .collect(Collectors.toList());
            System.out.println("After skip 5: " + afterSkip);
            
            // Pagination: skip and limit
            int pageSize = 3;
            int pageNumber = 2; // 0-based
            List<Integer> page = numbers.stream()
                .skip(pageNumber * pageSize)
                .limit(pageSize)
                .collect(Collectors.toList());
            System.out.println("Page 2 (size 3): " + page);
        }
    }

    // ============================================================================
    // SECTION 4: TERMINAL OPERATIONS
    // ============================================================================
    
    /*
     * TERMINAL OPERATIONS:
     * - Produce a result or side-effect
     * - Close the stream (cannot be used again)
     * - Trigger execution of intermediate operations
     */
    
    public static class TerminalOperations {
        
        // 1. FOREACH - iterate and perform action
        public static void demonstrateForEach() {
            System.out.println("\n=== forEach() ===");
            
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
            
            // Print each element
            numbers.stream().forEach(System.out::println);
            
            // forEach with custom action
            numbers.stream().forEach(n -> {
                int squared = n * n;
                System.out.println(n + " squared = " + squared);
            });
            
            // forEachOrdered - maintains order (important for parallel streams)
            numbers.parallelStream()
                .forEachOrdered(System.out::println); // Ordered
        }
        
        // 2. COLLECT - accumulate elements into collection
        public static void demonstrateCollect() {
            System.out.println("\n=== collect() ===");
            
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
            
            // Collect to List
            List<Integer> list = numbers.stream()
                .filter(n -> n % 2 == 0)
                .collect(Collectors.toList());
            System.out.println("List: " + list);
            
            // Collect to Set
            Set<Integer> set = numbers.stream()
                .collect(Collectors.toSet());
            System.out.println("Set: " + set);
            
            // Collect to specific collection type
            LinkedList<Integer> linkedList = numbers.stream()
                .collect(Collectors.toCollection(LinkedList::new));
            System.out.println("LinkedList: " + linkedList);
            
            // Collect to TreeSet (sorted)
            TreeSet<Integer> treeSet = numbers.stream()
                .collect(Collectors.toCollection(TreeSet::new));
            System.out.println("TreeSet: " + treeSet);
        }
        
        // 3. REDUCE - combine elements to single value
        public static void demonstrateReduce() {
            System.out.println("\n=== reduce() ===");
            
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
            
            // Sum (identity, accumulator)
            int sum = numbers.stream()
                .reduce(0, (a, b) -> a + b);
            System.out.println("Sum: " + sum);
            
            // Sum using Integer::sum method reference
            int sum2 = numbers.stream()
                .reduce(0, Integer::sum);
            System.out.println("Sum (method ref): " + sum2);
            
            // Product
            int product = numbers.stream()
                .reduce(1, (a, b) -> a * b);
            System.out.println("Product: " + product);
            
            // Max (no identity - returns Optional)
            Optional<Integer> max = numbers.stream()
                .reduce((a, b) -> a > b ? a : b);
            System.out.println("Max: " + max.orElse(0));
            
            // Max using Integer::max
            Optional<Integer> max2 = numbers.stream()
                .reduce(Integer::max);
            System.out.println("Max (method ref): " + max2.orElse(0));
            
            // String concatenation
            List<String> words = Arrays.asList("Hello", " ", "World");
            String concatenated = words.stream()
                .reduce("", (s1, s2) -> s1 + s2);
            System.out.println("Concatenated: " + concatenated);
            
            // Complex reduction - sum of ages
            List<Person> people = Arrays.asList(
                new Person("Alice", 25),
                new Person("Bob", 30),
                new Person("Charlie", 35)
            );
            
            int totalAge = people.stream()
                .map(Person::getAge)
                .reduce(0, Integer::sum);
            System.out.println("Total age: " + totalAge);
        }
        
        // 4. COUNT - count elements
        public static void demonstrateCount() {
            System.out.println("\n=== count() ===");
            
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
            
            long count = numbers.stream()
                .filter(n -> n % 2 == 0)
                .count();
            System.out.println("Even count: " + count);
            
            List<String> words = Arrays.asList("apple", "banana", "avocado", "cherry");
            long countA = words.stream()
                .filter(w -> w.startsWith("a"))
                .count();
            System.out.println("Words starting with 'a': " + countA);
        }
        
        // 5. MIN/MAX - find minimum/maximum
        public static void demonstrateMinMax() {
            System.out.println("\n=== min() / max() ===");
            
            List<Integer> numbers = Arrays.asList(5, 3, 8, 1, 9, 2);
            
            // Min
            Optional<Integer> min = numbers.stream()
                .min(Integer::compareTo);
            System.out.println("Min: " + min.orElse(0));
            
            // Max
            Optional<Integer> max = numbers.stream()
                .max(Integer::compareTo);
            System.out.println("Max: " + max.orElse(0));
            
            // Min/Max with objects
            List<Person> people = Arrays.asList(
                new Person("Alice", 25),
                new Person("Bob", 30),
                new Person("Charlie", 35)
            );
            
            Optional<Person> youngest = people.stream()
                .min(Comparator.comparing(Person::getAge));
            System.out.println("Youngest: " + youngest.orElse(null));
            
            Optional<Person> oldest = people.stream()
                .max(Comparator.comparing(Person::getAge));
            System.out.println("Oldest: " + oldest.orElse(null));
        }
        
        // 6. ANYMATCH / ALLMATCH / NONEMATCH - predicate matching
        public static void demonstrateMatching() {
            System.out.println("\n=== anyMatch() / allMatch() / noneMatch() ===");
            
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
            
            // anyMatch - at least one element matches
            boolean hasEven = numbers.stream()
                .anyMatch(n -> n % 2 == 0);
            System.out.println("Has even: " + hasEven);
            
            // allMatch - all elements match
            boolean allPositive = numbers.stream()
                .allMatch(n -> n > 0);
            System.out.println("All positive: " + allPositive);
            
            // noneMatch - no elements match
            boolean noneNegative = numbers.stream()
                .noneMatch(n -> n < 0);
            System.out.println("None negative: " + noneNegative);
            
            // Short-circuit evaluation
            boolean result = Stream.iterate(1, n -> n + 1)
                .peek(n -> System.out.println("Testing: " + n))
                .anyMatch(n -> n > 5); // Stops at 6
            System.out.println("Result: " + result);
        }
        
        // 7. FINDFIRST / FINDANY - find element
        public static void demonstrateFind() {
            System.out.println("\n=== findFirst() / findAny() ===");
            
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
            
            // findFirst - first element
            Optional<Integer> first = numbers.stream()
                .filter(n -> n % 2 == 0)
                .findFirst();
            System.out.println("First even: " + first.orElse(0));
            
            // findAny - any element (useful for parallel streams)
            Optional<Integer> any = numbers.stream()
                .filter(n -> n % 2 == 0)
                .findAny();
            System.out.println("Any even: " + any.orElse(0));
            
            // findAny with parallel stream (may return different element each time)
            Optional<Integer> anyParallel = numbers.parallelStream()
                .filter(n -> n % 2 == 0)
                .findAny();
            System.out.println("Any even (parallel): " + anyParallel.orElse(0));
        }
        
        // 8. TOARRAY - convert to array
        public static void demonstrateToArray() {
            System.out.println("\n=== toArray() ===");
            
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
            
            // To Object array
            Object[] objArray = numbers.stream().toArray();
            System.out.println("Object array: " + Arrays.toString(objArray));
            
            // To typed array
            Integer[] intArray = numbers.stream().toArray(Integer[]::new);
            System.out.println("Integer array: " + Arrays.toString(intArray));
            
            // With transformation
            String[] stringArray = numbers.stream()
                .map(n -> "Num: " + n)
                .toArray(String[]::new);
            System.out.println("String array: " + Arrays.toString(stringArray));
        }
    }

    // ============================================================================
    // SECTION 5: COLLECTORS
    // ============================================================================
    
    public static class CollectorsExamples {
        
        public static void demonstrateBasicCollectors() {
            System.out.println("\n=== Basic Collectors ===");
            
            List<Person> people = Arrays.asList(
                new Person("Alice", 25),
                new Person("Bob", 30),
                new Person("Charlie", 35),
                new Person("David", 30),
                new Person("Eve", 25)
            );
            
            // toList, toSet, toCollection
            List<String> namesList = people.stream()
                .map(Person::getName)
                .collect(Collectors.toList());
            System.out.println("Names list: " + namesList);
            
            Set<Integer> agesSet = people.stream()
                .map(Person::getAge)
                .collect(Collectors.toSet());
            System.out.println("Ages set: " + agesSet);
            
            // toMap
            Map<String, Integer> nameAgeMap = people.stream()
                .collect(Collectors.toMap(
                    Person::getName,  // Key mapper
                    Person::getAge    // Value mapper
                ));
            System.out.println("Name-Age map: " + nameAgeMap);
            
            // toMap with duplicate key handling
            Map<Integer, String> ageNameMap = people.stream()
                .collect(Collectors.toMap(
                    Person::getAge,
                    Person::getName,
                    (name1, name2) -> name1 + ", " + name2  // Merge function
                ));
            System.out.println("Age-Name map: " + ageNameMap);
        }
        
        public static void demonstrateGroupingBy() {
            System.out.println("\n=== groupingBy ===");
            
            List<Person> people = Arrays.asList(
                new Person("Alice", 25),
                new Person("Bob", 30),
                new Person("Charlie", 35),
                new Person("David", 30),
                new Person("Eve", 25)
            );
            
            // Group by age
            Map<Integer, List<Person>> byAge = people.stream()
                .collect(Collectors.groupingBy(Person::getAge));
            System.out.println("Grouped by age: " + byAge);
            
            // Group by age, collect names only
            Map<Integer, List<String>> ageToNames = people.stream()
                .collect(Collectors.groupingBy(
                    Person::getAge,
                    Collectors.mapping(Person::getName, Collectors.toList())
                ));
            System.out.println("Age to names: " + ageToNames);
            
            // Group by age, count per group
            Map<Integer, Long> ageCount = people.stream()
                .collect(Collectors.groupingBy(
                    Person::getAge,
                    Collectors.counting()
                ));
            System.out.println("Age count: " + ageCount);
            
            // Multi-level grouping
            List<String> words = Arrays.asList("apple", "apricot", "banana", "cherry", "avocado");
            Map<Character, Map<Integer, List<String>>> grouped = words.stream()
                .collect(Collectors.groupingBy(
                    w -> w.charAt(0),  // First letter
                    Collectors.groupingBy(String::length)  // Then by length
                ));
            System.out.println("Multi-level grouping: " + grouped);
        }
        
        public static void demonstratePartitioningBy() {
            System.out.println("\n=== partitioningBy ===");
            
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
            
            // Partition into even/odd
            Map<Boolean, List<Integer>> evenOdd = numbers.stream()
                .collect(Collectors.partitioningBy(n -> n % 2 == 0));
            System.out.println("Even: " + evenOdd.get(true));
            System.out.println("Odd: " + evenOdd.get(false));
            
            List<Person> people = Arrays.asList(
                new Person("Alice", 25),
                new Person("Bob", 30),
                new Person("Charlie", 35)
            );
            
            // Partition by age > 30
            Map<Boolean, List<Person>> agePartition = people.stream()
                .collect(Collectors.partitioningBy(p -> p.getAge() > 30));
            System.out.println("Over 30: " + agePartition.get(true));
            System.out.println("30 or under: " + agePartition.get(false));
        }
        
        public static void demonstrateJoining() {
            System.out.println("\n=== joining ===");
            
            List<String> words = Arrays.asList("Hello", "World", "Java", "Streams");
            
            // Simple joining
            String joined = words.stream()
                .collect(Collectors.joining());
            System.out.println("Joined: " + joined);
            
            // Joining with delimiter
            String joinedComma = words.stream()
                .collect(Collectors.joining(", "));
            System.out.println("Joined with comma: " + joinedComma);
            
            // Joining with prefix, delimiter, suffix
            String joinedBrackets = words.stream()
                .collect(Collectors.joining(", ", "[", "]"));
            System.out.println("Joined with brackets: " + joinedBrackets);
            
            // Join person names
            List<Person> people = Arrays.asList(
                new Person("Alice", 25),
                new Person("Bob", 30),
                new Person("Charlie", 35)
            );
            
            String names = people.stream()
                .map(Person::getName)
                .collect(Collectors.joining(", ", "Names: ", "."));
            System.out.println(names);
        }
        
        public static void demonstrateSummarizingCollectors() {
            System.out.println("\n=== Summarizing Collectors ===");
            
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
            
            // Counting
            long count = numbers.stream()
                .collect(Collectors.counting());
            System.out.println("Count: " + count);
            
            // Summing
            int sum = numbers.stream()
                .collect(Collectors.summingInt(Integer::intValue));
            System.out.println("Sum: " + sum);
            
            // Averaging
            double avg = numbers.stream()
                .collect(Collectors.averagingInt(Integer::intValue));
            System.out.println("Average: " + avg);
            
            // Summarizing statistics
            IntSummaryStatistics stats = numbers.stream()
                .collect(Collectors.summarizingInt(Integer::intValue));
            System.out.println("Statistics: " + stats);
            System.out.println("  Count: " + stats.getCount());
            System.out.println("  Sum: " + stats.getSum());
            System.out.println("  Min: " + stats.getMin());
            System.out.println("  Max: " + stats.getMax());
            System.out.println("  Average: " + stats.getAverage());
            
            // With Person objects
            List<Person> people = Arrays.asList(
                new Person("Alice", 25),
                new Person("Bob", 30),
                new Person("Charlie", 35)
            );
            
            IntSummaryStatistics ageStats = people.stream()
                .collect(Collectors.summarizingInt(Person::getAge));
            System.out.println("Age statistics: " + ageStats);
        }
    }

    // ============================================================================
    // SECTION 6: PARALLEL STREAMS
    // ============================================================================
    
    public static class ParallelStreamsExamples {
        
        public static void demonstrateParallelBasics() {
            System.out.println("\n=== Parallel Streams Basics ===");
            
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8);
            
            // Sequential stream
            System.out.println("Sequential:");
            numbers.stream()
                .map(n -> {
                    System.out.println("Mapping " + n + " on " + Thread.currentThread().getName());
                    return n * 2;
                })
                .forEach(n -> System.out.println("Result: " + n));
            
            // Parallel stream
            System.out.println("\nParallel:");
            numbers.parallelStream()
                .map(n -> {
                    System.out.println("Mapping " + n + " on " + Thread.currentThread().getName());
                    return n * 2;
                })
                .forEach(n -> System.out.println("Result: " + n));
        }
        
        public static void demonstrateParallelPerformance() {
            System.out.println("\n=== Parallel Performance ===");
            
            List<Integer> numbers = IntStream.rangeClosed(1, 1000000)
                .boxed()
                .collect(Collectors.toList());
            
            // Sequential
            long startSeq = System.currentTimeMillis();
            long sumSeq = numbers.stream()
                .mapToLong(Integer::longValue)
                .sum();
            long endSeq = System.currentTimeMillis();
            System.out.println("Sequential sum: " + sumSeq + " in " + (endSeq - startSeq) + "ms");
            
            // Parallel
            long startPar = System.currentTimeMillis();
            long sumPar = numbers.parallelStream()
                .mapToLong(Integer::longValue)
                .sum();
            long endPar = System.currentTimeMillis();
            System.out.println("Parallel sum: " + sumPar + " in " + (endPar - startPar) + "ms");
        }
        
        public static void demonstrateParallelPitfalls() {
            System.out.println("\n=== Parallel Streams Pitfalls ===");
            
            // PITFALL 1: Shared mutable state (WRONG!)
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
            List<Integer> results = new ArrayList<>(); // Shared mutable state
            
            // This is NOT thread-safe!
            // numbers.parallelStream().forEach(results::add); // Race condition!
            
            // CORRECT: Use collect
            List<Integer> correctResults = numbers.parallelStream()
                .collect(Collectors.toList());
            System.out.println("Correct parallel collection: " + correctResults);
            
            // PITFALL 2: Order sensitivity
            System.out.println("\nOrder with sequential:");
            numbers.stream()
                .forEach(n -> System.out.print(n + " "));
            
            System.out.println("\nOrder with parallel:");
            numbers.parallelStream()
                .forEach(n -> System.out.print(n + " "));
            
            System.out.println("\nOrder with parallel + forEachOrdered:");
            numbers.parallelStream()
                .forEachOrdered(n -> System.out.print(n + " "));
            System.out.println();
            
            // PITFALL 3: Boxing overhead
            // Parallel streams with boxing can be slower!
            // Use primitive streams (IntStream, LongStream, DoubleStream)
        }
        
        public static void demonstrateWhenToUseParallel() {
            System.out.println("\n=== When to Use Parallel Streams ===");
            System.out.println("""
                USE PARALLEL STREAMS when:
                1. Large data set (>10,000 elements typically)
                2. Computationally expensive operations
                3. No shared mutable state
                4. Order doesn't matter (or use forEachOrdered)
                5. Operations are stateless and independent
                
                AVOID PARALLEL STREAMS when:
                1. Small data set (overhead > benefit)
                2. I/O operations (database, file, network)
                3. Shared mutable state
                4. Order matters and can't use forEachOrdered
                5. Boxing/unboxing overhead
                
                ALWAYS MEASURE! Parallel ≠ Faster automatically
                """);
        }
    }

    // ============================================================================
    // SECTION 7: STREAM PIPELINES
    // ============================================================================
    
    public static class StreamPipelines {
        
        public static void demonstrateComplexPipeline() {
            System.out.println("\n=== Complex Stream Pipeline ===");
            
            List<Transaction> transactions = Arrays.asList(
                new Transaction("Alice", 2020, 1000),
                new Transaction("Bob", 2021, 2000),
                new Transaction("Charlie", 2020, 1500),
                new Transaction("Alice", 2021, 3000),
                new Transaction("Bob", 2020, 500),
                new Transaction("Charlie", 2021, 2500)
            );
            
            // Find total value of transactions in 2021, grouped by trader, sorted by value
            Map<String, Integer> result = transactions.stream()
                .filter(t -> t.getYear() == 2021)        // Only 2021
                .collect(Collectors.groupingBy(
                    Transaction::getTrader,               // Group by trader
                    Collectors.summingInt(Transaction::getValue)  // Sum values
                ))
                .entrySet().stream()                      // Stream of entries
                .sorted(Map.Entry.<String, Integer>comparingByValue().reversed())  // Sort by value desc
                .collect(Collectors.toMap(
                    Map.Entry::getKey,
                    Map.Entry::getValue,
                    (e1, e2) -> e1,
                    LinkedHashMap::new                    // Maintain order
                ));
            
            System.out.println("2021 transactions by trader (sorted): " + result);
        }
        
        public static void demonstratePipelineOptimization() {
            System.out.println("\n=== Pipeline Optimization ===");
            
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
            
            // SUBOPTIMAL: filter twice
            long count1 = numbers.stream()
                .filter(n -> n % 2 == 0)
                .filter(n -> n > 5)
                .count();
            
            // BETTER: combine filters
            long count2 = numbers.stream()
                .filter(n -> n % 2 == 0 && n > 5)
                .count();
            
            System.out.println("Both give same result: " + count1 + " = " + count2);
            
            // SUBOPTIMAL: multiple maps
            List<String> result1 = numbers.stream()
                .map(n -> n * 2)
                .map(n -> n + 10)
                .map(String::valueOf)
                .collect(Collectors.toList());
            
            // BETTER: combine maps
            List<String> result2 = numbers.stream()
                .map(n -> String.valueOf(n * 2 + 10))
                .collect(Collectors.toList());
            
            System.out.println("Both give same result: " + result1.equals(result2));
            
            // Use limit() early to avoid unnecessary processing
            String firstEven = numbers.stream()
                .filter(n -> n % 2 == 0)
                .limit(1)  // Stop after finding first
                .map(String::valueOf)
                .findFirst()
                .orElse("");
            System.out.println("First even: " + firstEven);
        }
    }

    // ============================================================================
    // SECTION 8: PERFORMANCE CONSIDERATIONS
    // ============================================================================
    
    public static class PerformanceConsiderations {
        
        public static void demonstratePerformanceTips() {
            System.out.println("\n=== Performance Tips ===");
            System.out.println("""
                1. USE PRIMITIVE STREAMS:
                   - IntStream, LongStream, DoubleStream avoid boxing
                   - Use mapToInt(), mapToLong(), mapToDouble()
                
                2. AVOID UNNECESSARY BOXING:
                   - Stream<Integer> vs IntStream
                   - Boxing/unboxing is expensive
                
                3. USE APPROPRIATE TERMINAL OPERATIONS:
                   - sum() instead of reduce() for numbers
                   - count() instead of collect().size()
                
                4. LIMIT EARLY:
                   - Use limit() to avoid processing unnecessary elements
                   - Use findFirst() instead of collecting all and taking first
                
                5. USE PARALLEL WISELY:
                   - Only for large datasets and CPU-intensive operations
                   - Measure before assuming it's faster
                
                6. AVOID STATEFUL OPERATIONS:
                   - sorted(), distinct() need to see all elements
                   - Can break parallelism benefits
                
                7. REUSE STREAMS? NO!
                   - Streams are single-use
                   - Create new stream if needed again
                """);
        }
        
        public static void demonstratePrimitiveStreams() {
            System.out.println("\n=== Primitive Streams ===");
            
            // SLOW: Boxing overhead
            long sumBoxed = Stream.iterate(1, n -> n + 1)
                .limit(1000000)
                .reduce(0, Integer::sum);  // Boxing Integer <-> int
            
            // FAST: No boxing
            long sumPrimitive = IntStream.rangeClosed(1, 1000000)
                .sum();  // Primitive operations
            
            System.out.println("Both equal: " + (sumBoxed == sumPrimitive));
            
            // Primitive stream specialized methods
            IntStream intStream = IntStream.of(1, 2, 3, 4, 5);
            System.out.println("Sum: " + intStream.sum());
            
            IntStream intStream2 = IntStream.of(1, 2, 3, 4, 5);
            System.out.println("Average: " + intStream2.average().orElse(0));
            
            IntStream intStream3 = IntStream.of(1, 2, 3, 4, 5);
            System.out.println("Max: " + intStream3.max().orElse(0));
            
            // Converting between primitive and object streams
            IntStream primitiveStream = IntStream.range(1, 6);
            Stream<Integer> objectStream = primitiveStream.boxed();
            
            Stream<Integer> objStream = Stream.of(1, 2, 3, 4, 5);
            IntStream primStream = objStream.mapToInt(Integer::intValue);
        }
    }

    // ============================================================================
    // SECTION 9: REAL-WORLD USE CASES
    // ============================================================================
    
    public static class RealWorldUseCases {
        
        // Use Case 1: Data Processing Pipeline
        public static void processEmployeeData() {
            System.out.println("\n=== Employee Data Processing ===");
            
            List<Employee> employees = Arrays.asList(
                new Employee("Alice", "Engineering", 80000),
                new Employee("Bob", "Engineering", 90000),
                new Employee("Charlie", "Sales", 70000),
                new Employee("David", "Sales", 75000),
                new Employee("Eve", "HR", 65000)
            );
            
            // Average salary by department
            Map<String, Double> avgSalaryByDept = employees.stream()
                .collect(Collectors.groupingBy(
                    Employee::getDepartment,
                    Collectors.averagingDouble(Employee::getSalary)
                ));
            System.out.println("Avg salary by dept: " + avgSalaryByDept);
            
            // Highest paid employee per department
            Map<String, Optional<Employee>> highestPaidByDept = employees.stream()
                .collect(Collectors.groupingBy(
                    Employee::getDepartment,
                    Collectors.maxBy(Comparator.comparing(Employee::getSalary))
                ));
            System.out.println("Highest paid by dept: " + highestPaidByDept);
            
            // Total salary budget
            double totalSalary = employees.stream()
                .mapToDouble(Employee::getSalary)
                .sum();
            System.out.println("Total salary budget: $" + totalSalary);
            
            // Employees earning above average
            double avgSalary = employees.stream()
                .mapToDouble(Employee::getSalary)
                .average()
                .orElse(0);
            
            List<String> aboveAverage = employees.stream()
                .filter(e -> e.getSalary() > avgSalary)
                .map(Employee::getName)
                .collect(Collectors.toList());
            System.out.println("Above average earners: " + aboveAverage);
        }
        
        // Use Case 2: Text Processing
        public static void processText() {
            System.out.println("\n=== Text Processing ===");
            
            String text = "Java Streams are powerful. Streams make code concise. Use Streams wisely.";
            
            // Word frequency
            Map<String, Long> wordFrequency = Arrays.stream(text.toLowerCase().split("\\W+"))
                .filter(w -> !w.isEmpty())
                .collect(Collectors.groupingBy(
                    Function.identity(),
                    Collectors.counting()
                ));
            System.out.println("Word frequency: " + wordFrequency);
            
            // Top 3 most frequent words
            List<Map.Entry<String, Long>> top3 = wordFrequency.entrySet().stream()
                .sorted(Map.Entry.<String, Long>comparingByValue().reversed())
                .limit(3)
                .collect(Collectors.toList());
            System.out.println("Top 3 words: " + top3);
            
            // Unique words count
            long uniqueWords = Arrays.stream(text.toLowerCase().split("\\W+"))
                .filter(w -> !w.isEmpty())
                .distinct()
                .count();
            System.out.println("Unique words: " + uniqueWords);
        }
        
        // Use Case 3: Database-style Queries
        public static void databaseStyleQueries() {
            System.out.println("\n=== Database-Style Queries ===");
            
            List<Order> orders = Arrays.asList(
                new Order(1, "Alice", 100.0, "COMPLETED"),
                new Order(2, "Bob", 200.0, "PENDING"),
                new Order(3, "Alice", 150.0, "COMPLETED"),
                new Order(4, "Charlie", 300.0, "COMPLETED"),
                new Order(5, "Bob", 50.0, "CANCELLED")
            );
            
            // SELECT customer, SUM(amount) FROM orders WHERE status = 'COMPLETED' GROUP BY customer
            Map<String, Double> completedOrdersByCustomer = orders.stream()
                .filter(o -> o.getStatus().equals("COMPLETED"))
                .collect(Collectors.groupingBy(
                    Order::getCustomer,
                    Collectors.summingDouble(Order::getAmount)
                ));
            System.out.println("Completed orders by customer: " + completedOrdersByCustomer);
            
            // SELECT * FROM orders WHERE amount > 100 ORDER BY amount DESC LIMIT 3
            List<Order> topExpensive = orders.stream()
                .filter(o -> o.getAmount() > 100)
                .sorted(Comparator.comparing(Order::getAmount).reversed())
                .limit(3)
                .collect(Collectors.toList());
            System.out.println("Top expensive orders: " + topExpensive);
            
            // SELECT COUNT(*), AVG(amount) FROM orders WHERE status = 'COMPLETED'
            DoubleSummaryStatistics stats = orders.stream()
                .filter(o -> o.getStatus().equals("COMPLETED"))
                .mapToDouble(Order::getAmount)
                .summaryStatistics();
            System.out.println("Completed orders stats: count=" + stats.getCount() + ", avg=" + stats.getAverage());
        }
    }

    // ============================================================================
    // SECTION 10: INTERVIEW QUESTIONS
    // ============================================================================
    
    public static class InterviewQuestions {
        
        public static void commonInterviewQuestions() {
            System.out.println("\n=== Common Interview Questions ===");
            System.out.println("""
                Q1: What is the difference between Collection and Stream?
                A: Collection stores elements; Stream processes elements. Collection can be traversed 
                   multiple times; Stream only once. Collection uses external iteration; Stream uses 
                   internal iteration.
                
                Q2: What is lazy evaluation in streams?
                A: Intermediate operations are not executed until a terminal operation is called.
                   This allows optimization and avoids unnecessary computation.
                
                Q3: Can you reuse a stream?
                A: No! A stream can only be consumed once. After a terminal operation, the stream
                   is closed and cannot be used again.
                
                Q4: What is the difference between map() and flatMap()?
                A: map() transforms each element to another element (1-to-1).
                   flatMap() transforms each element to a stream and flattens all streams (1-to-many).
                
                Q5: What is the difference between findFirst() and findAny()?
                A: findFirst() returns the first element (deterministic).
                   findAny() returns any element (non-deterministic, faster in parallel streams).
                
                Q6: What is the difference between intermediate and terminal operations?
                A: Intermediate operations return Stream and are lazy (filter, map, sorted).
                   Terminal operations return result and trigger execution (collect, forEach, reduce).
                
                Q7: When should you use parallel streams?
                A: Use for large datasets (>10K elements), CPU-intensive operations, stateless operations,
                   and when order doesn't matter. Always measure performance!
                
                Q8: What is the difference between Collection.stream() and Collection.parallelStream()?
                A: stream() creates sequential stream; parallelStream() creates parallel stream that
                   divides work among multiple threads.
                
                Q9: What are primitive streams and why use them?
                A: IntStream, LongStream, DoubleStream avoid boxing/unboxing overhead and provide
                   specialized methods like sum(), average(), max().
                
                Q10: How do you handle infinite streams?
                A: Use limit() or other short-circuiting operations (findFirst, anyMatch) to prevent
                    infinite processing.
                """);
        }
    }

    // ============================================================================
    // HELPER CLASSES
    // ============================================================================
    
    static class Person {
        private String name;
        private int age;
        
        public Person(String name, int age) {
            this.name = name;
            this.age = age;
        }
        
        public String getName() { return name; }
        public int getAge() { return age; }
        
        @Override
        public String toString() {
            return name + "(" + age + ")";
        }
        
        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;
            Person person = (Person) o;
            return age == person.age && Objects.equals(name, person.name);
        }
        
        @Override
        public int hashCode() {
            return Objects.hash(name, age);
        }
    }
    
    static class Transaction {
        private String trader;
        private int year;
        private int value;
        
        public Transaction(String trader, int year, int value) {
            this.trader = trader;
            this.year = year;
            this.value = value;
        }
        
        public String getTrader() { return trader; }
        public int getYear() { return year; }
        public int getValue() { return value; }
        
        @Override
        public String toString() {
            return trader + "-" + year + "-" + value;
        }
    }
    
    static class Employee {
        private String name;
        private String department;
        private double salary;
        
        public Employee(String name, String department, double salary) {
            this.name = name;
            this.department = department;
            this.salary = salary;
        }
        
        public String getName() { return name; }
        public String getDepartment() { return department; }
        public double getSalary() { return salary; }
        
        @Override
        public String toString() {
            return name + "(" + department + ", $" + salary + ")";
        }
    }
    
    static class Order {
        private int id;
        private String customer;
        private double amount;
        private String status;
        
        public Order(int id, String customer, double amount, String status) {
            this.id = id;
            this.customer = customer;
            this.amount = amount;
            this.status = status;
        }
        
        public int getId() { return id; }
        public String getCustomer() { return customer; }
        public double getAmount() { return amount; }
        public String getStatus() { return status; }
        
        @Override
        public String toString() {
            return "Order{id=" + id + ", customer='" + customer + "', amount=" + amount + ", status='" + status + "'}";
        }
    }

    // ============================================================================
    // MAIN METHOD - RUN ALL DEMONSTRATIONS
    // ============================================================================
    
    public static void main(String[] args) {
        System.out.println("╔════════════════════════════════════════════════════════════╗");
        System.out.println("║         STREAMS API - COMPLETE GUIDE                       ║");
        System.out.println("║         Day 10: Functional Programming                     ║");
        System.out.println("╚════════════════════════════════════════════════════════════╝");
        
        // Section 1: Introduction
        StreamIntroduction.demonstrateStreamBasics();
        StreamIntroduction.demonstrateLazyEvaluation();
        
        // Section 2: Creating Streams
        StreamCreation.demonstrateStreamCreation();
        
        // Section 3: Intermediate Operations
        IntermediateOperations.demonstrateFilter();
        IntermediateOperations.demonstrateMap();
        IntermediateOperations.demonstrateFlatMap();
        IntermediateOperations.demonstrateDistinct();
        IntermediateOperations.demonstrateSorted();
        IntermediateOperations.demonstratePeek();
        IntermediateOperations.demonstrateLimit();
        IntermediateOperations.demonstrateSkip();
        
        // Section 4: Terminal Operations
        TerminalOperations.demonstrateForEach();
        TerminalOperations.demonstrateCollect();
        TerminalOperations.demonstrateReduce();
        TerminalOperations.demonstrateCount();
        TerminalOperations.demonstrateMinMax();
        TerminalOperations.demonstrateMatching();
        TerminalOperations.demonstrateFind();
        TerminalOperations.demonstrateToArray();
        
        // Section 5: Collectors
        CollectorsExamples.demonstrateBasicCollectors();
        CollectorsExamples.demonstrateGroupingBy();
        CollectorsExamples.demonstratePartitioningBy();
        CollectorsExamples.demonstrateJoining();
        CollectorsExamples.demonstrateSummarizingCollectors();
        
        // Section 6: Parallel Streams
        ParallelStreamsExamples.demonstrateParallelBasics();
        ParallelStreamsExamples.demonstrateParallelPerformance();
        ParallelStreamsExamples.demonstrateParallelPitfalls();
        ParallelStreamsExamples.demonstrateWhenToUseParallel();
        
        // Section 7: Stream Pipelines
        StreamPipelines.demonstrateComplexPipeline();
        StreamPipelines.demonstratePipelineOptimization();
        
        // Section 8: Performance
        PerformanceConsiderations.demonstratePerformanceTips();
        PerformanceConsiderations.demonstratePrimitiveStreams();
        
        // Section 9: Real-World Use Cases
        RealWorldUseCases.processEmployeeData();
        RealWorldUseCases.processText();
        RealWorldUseCases.databaseStyleQueries();
        
        // Section 10: Interview Questions
        InterviewQuestions.commonInterviewQuestions();
        
        System.out.println("\n╔════════════════════════════════════════════════════════════╗");
        System.out.println("║         STREAMS API GUIDE COMPLETE!                        ║");
        System.out.println("╚════════════════════════════════════════════════════════════╝");
    }
}
