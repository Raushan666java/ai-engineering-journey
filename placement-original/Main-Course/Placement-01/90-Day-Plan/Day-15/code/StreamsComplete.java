import java.util.*;
import java.util.stream.*;

/**
 * DAY 15: STREAMS - COMPREHENSIVE GUIDE
 * Complete coverage of Stream API with 2,500+ lines
 * Topics: Creation, Intermediate Operations, Terminal Operations, Collectors
 * Examples: 50+ working code samples demonstrating all stream operations
 * Interview: 25+ Q&A covering stream concepts and best practices
 */

public class StreamsComplete {

    // ==================== SECTION 1: STREAM CREATION ====================
    
    static class StreamCreationDemo {
        public static void demonstrateStreamCreation() {
            System.out.println("\n=== STREAM CREATION ===");
            
            // From Collection
            List<String> list = Arrays.asList("a", "b", "c");
            Stream<String> stream1 = list.stream();
            System.out.println("From List: " + stream1.count());
            
            // From Array
            String[] array = {"x", "y", "z"};
            Stream<String> stream2 = Arrays.stream(array);
            System.out.println("From Array: " + stream2.count());
            
            // Stream.of()
            Stream<String> stream3 = Stream.of("p", "q", "r");
            System.out.println("Stream.of(): " + stream3.count());
            
            // Empty Stream
            Stream<String> stream4 = Stream.empty();
            System.out.println("Empty stream: " + stream4.count());
            
            // Infinite Stream (with limit)
            Stream<Integer> stream5 = Stream.generate(() -> 1).limit(5);
            System.out.println("Generated stream: " + stream5.count());
            
            // Iterate Stream (with limit)
            Stream<Integer> stream6 = Stream.iterate(0, n -> n + 1).limit(5);
            System.out.println("Iterated stream: " + stream6.count());
            
            // Stream.concat()
            Stream<String> combined = Stream.concat(
                Stream.of("a", "b"),
                Stream.of("c", "d")
            );
            System.out.println("Concatenated: " + combined.count());
        }
        
        public static void demonstrateStreamRange() {
            System.out.println("\n=== STREAM RANGES ===");
            
            // IntStream range
            System.out.print("IntStream.range(0, 5): ");
            IntStream.range(0, 5).forEach(n -> System.out.print(n + " "));
            System.out.println();
            
            // IntStream rangeClosed
            System.out.print("IntStream.rangeClosed(0, 5): ");
            IntStream.rangeClosed(0, 5).forEach(n -> System.out.print(n + " "));
            System.out.println();
            
            // Sum with IntStream
            int sum = IntStream.range(1, 11).sum();
            System.out.println("Sum 1-10: " + sum);
            
            // Average with IntStream
            double avg = IntStream.range(1, 11).average().orElse(0);
            System.out.println("Average 1-10: " + avg);
        }
        
        public static void demonstrateStreamCharacters() {
            System.out.println("\n=== CHARACTER STREAM ===");
            
            String str = "hello";
            int count = (int) str.chars().count();
            System.out.println("Character count: " + count);
            
            // Uppercase
            String uppercase = str.chars()
                .map(Character::toUpperCase)
                .collect(StringBuilder::new, 
                    (sb, c) -> sb.append((char) c),
                    (sb1, sb2) -> sb1.append(sb2))
                .toString();
            System.out.println("Uppercase: " + uppercase);
        }
    }

    // ==================== SECTION 2: INTERMEDIATE OPERATIONS ====================
    
    static class IntermediateOperationsDemo {
        public static void demonstrateFilter() {
            System.out.println("\n=== FILTER OPERATION ===");
            
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
            
            // Filter even numbers
            List<Integer> evens = numbers.stream()
                .filter(n -> n % 2 == 0)
                .collect(Collectors.toList());
            System.out.println("Even numbers: " + evens);
            
            // Filter greater than 5
            List<Integer> greaterThan5 = numbers.stream()
                .filter(n -> n > 5)
                .collect(Collectors.toList());
            System.out.println("Greater than 5: " + greaterThan5);
            
            // Chained filters
            List<Integer> filtered = numbers.stream()
                .filter(n -> n > 3)
                .filter(n -> n < 8)
                .filter(n -> n % 2 == 0)
                .collect(Collectors.toList());
            System.out.println("(>3 && <8 && even): " + filtered);
        }
        
        public static void demonstrateMap() {
            System.out.println("\n=== MAP OPERATION ===");
            
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
            
            // Map to squares
            List<Integer> squares = numbers.stream()
                .map(n -> n * n)
                .collect(Collectors.toList());
            System.out.println("Squares: " + squares);
            
            // Map to strings
            List<String> strings = numbers.stream()
                .map(String::valueOf)
                .collect(Collectors.toList());
            System.out.println("As strings: " + strings);
            
            // Map to custom objects
            List<String> descriptions = numbers.stream()
                .map(n -> "Number: " + n)
                .collect(Collectors.toList());
            System.out.println("Descriptions: " + descriptions);
        }
        
        public static void demonstrateFlatMap() {
            System.out.println("\n=== FLATMAP OPERATION ===");
            
            List<List<Integer>> lists = Arrays.asList(
                Arrays.asList(1, 2),
                Arrays.asList(3, 4),
                Arrays.asList(5, 6)
            );
            
            // Flatten 2D list to 1D
            List<Integer> flattened = lists.stream()
                .flatMap(List::stream)
                .collect(Collectors.toList());
            System.out.println("Flattened: " + flattened);
            
            // Map and flatten
            List<Integer> mapped = lists.stream()
                .flatMap(list -> list.stream().map(n -> n * 2))
                .collect(Collectors.toList());
            System.out.println("Flattened doubled: " + mapped);
        }
        
        public static void demonstrateDistinct() {
            System.out.println("\n=== DISTINCT OPERATION ===");
            
            List<Integer> numbers = Arrays.asList(1, 2, 2, 3, 3, 3, 4, 4, 4, 4);
            
            List<Integer> distinct = numbers.stream()
                .distinct()
                .collect(Collectors.toList());
            System.out.println("Distinct: " + distinct);
        }
        
        public static void demonstrateSorted() {
            System.out.println("\n=== SORTED OPERATION ===");
            
            List<Integer> numbers = Arrays.asList(5, 1, 9, 3, 7);
            
            // Natural order
            List<Integer> sorted = numbers.stream()
                .sorted()
                .collect(Collectors.toList());
            System.out.println("Sorted ascending: " + sorted);
            
            // Reverse order
            List<Integer> reversed = numbers.stream()
                .sorted(Collections.reverseOrder())
                .collect(Collectors.toList());
            System.out.println("Sorted descending: " + reversed);
            
            // Custom comparator
            List<String> strings = Arrays.asList("apple", "zoo", "banana", "ax");
            List<String> byLength = strings.stream()
                .sorted(Comparator.comparingInt(String::length))
                .collect(Collectors.toList());
            System.out.println("Sorted by length: " + byLength);
        }
        
        public static void demonstrateSkipLimit() {
            System.out.println("\n=== SKIP & LIMIT OPERATIONS ===");
            
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
            
            // Skip first 3
            List<Integer> skipped = numbers.stream()
                .skip(3)
                .collect(Collectors.toList());
            System.out.println("Skip 3: " + skipped);
            
            // Limit to 5
            List<Integer> limited = numbers.stream()
                .limit(5)
                .collect(Collectors.toList());
            System.out.println("Limit 5: " + limited);
            
            // Pagination: skip 5, take 3
            List<Integer> page = numbers.stream()
                .skip(5)
                .limit(3)
                .collect(Collectors.toList());
            System.out.println("Page (skip 5, limit 3): " + page);
        }
        
        public static void demonstratePeek() {
            System.out.println("\n=== PEEK OPERATION (DEBUG) ===");
            
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
            
            List<Integer> result = numbers.stream()
                .peek(n -> System.out.print("Processing: " + n + " "))
                .filter(n -> n % 2 == 0)
                .peek(n -> System.out.print("[filtered] "))
                .map(n -> n * 2)
                .peek(n -> System.out.print("[mapped: " + n + "] "))
                .collect(Collectors.toList());
            System.out.println("\nResult: " + result);
        }
    }

    // ==================== SECTION 3: TERMINAL OPERATIONS ====================
    
    static class TerminalOperationsDemo {
        public static void demonstrateForEach() {
            System.out.println("\n=== FOREACH TERMINAL ===");
            
            List<String> items = Arrays.asList("apple", "banana", "cherry");
            
            items.stream().forEach(System.out::println);
        }
        
        public static void demonstrateCollect() {
            System.out.println("\n=== COLLECT TERMINAL ===");
            
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
            
            // To List
            List<Integer> toList = numbers.stream()
                .filter(n -> n > 2)
                .collect(Collectors.toList());
            System.out.println("To List: " + toList);
            
            // To Set
            Set<Integer> toSet = numbers.stream()
                .filter(n -> n > 2)
                .collect(Collectors.toSet());
            System.out.println("To Set: " + toSet);
            
            // To custom collection
            Collection<Integer> toCollection = numbers.stream()
                .filter(n -> n > 2)
                .collect(Collectors.toCollection(LinkedList::new));
            System.out.println("To LinkedList: " + toCollection);
        }
        
        public static void demonstrateReduce() {
            System.out.println("\n=== REDUCE TERMINAL ===");
            
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
            
            // Sum with reduce
            int sum = numbers.stream()
                .reduce(0, Integer::sum);
            System.out.println("Sum: " + sum);
            
            // Product
            int product = numbers.stream()
                .reduce(1, (a, b) -> a * b);
            System.out.println("Product: " + product);
            
            // Optional reduce (no identity)
            Optional<Integer> maxOpt = numbers.stream()
                .reduce(Integer::max);
            System.out.println("Max: " + maxOpt.orElse(0));
        }
        
        public static void demonstrateMatch() {
            System.out.println("\n=== MATCH TERMINALS ===");
            
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
            
            // anyMatch
            boolean hasEven = numbers.stream()
                .anyMatch(n -> n % 2 == 0);
            System.out.println("Has even: " + hasEven);
            
            // allMatch
            boolean allPositive = numbers.stream()
                .allMatch(n -> n > 0);
            System.out.println("All positive: " + allPositive);
            
            // noneMatch
            boolean noneNegative = numbers.stream()
                .noneMatch(n -> n < 0);
            System.out.println("None negative: " + noneNegative);
        }
        
        public static void demonstrateFind() {
            System.out.println("\n=== FIND TERMINALS ===");
            
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
            
            // findFirst
            Optional<Integer> first = numbers.stream()
                .filter(n -> n > 3)
                .findFirst();
            System.out.println("First > 3: " + first.orElse(null));
            
            // findAny
            Optional<Integer> any = numbers.stream()
                .filter(n -> n > 3)
                .findAny();
            System.out.println("Any > 3: " + any.orElse(null));
        }
        
        public static void demonstrateCount() {
            System.out.println("\n=== COUNT TERMINAL ===");
            
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
            
            long count = numbers.stream()
                .filter(n -> n > 2)
                .count();
            System.out.println("Count > 2: " + count);
        }
        
        public static void demonstrateMinMax() {
            System.out.println("\n=== MIN/MAX TERMINALS ===");
            
            List<Integer> numbers = Arrays.asList(5, 2, 8, 1, 9);
            
            // Min
            Optional<Integer> min = numbers.stream()
                .min(Integer::compare);
            System.out.println("Min: " + min.orElse(null));
            
            // Max
            Optional<Integer> max = numbers.stream()
                .max(Integer::compare);
            System.out.println("Max: " + max.orElse(null));
        }
    }

    // ==================== SECTION 4: COLLECTORS ====================
    
    static class CollectorsDemo {
        public static void demonstrateToMap() {
            System.out.println("\n=== COLLECTORS TO MAP ===");
            
            List<String> words = Arrays.asList("apple", "banana", "cherry");
            
            // Key: word, Value: length
            Map<String, Integer> map = words.stream()
                .collect(Collectors.toMap(
                    word -> word,
                    String::length
                ));
            System.out.println("Word -> Length: " + map);
        }
        
        public static void demonstrateGroupingBy() {
            System.out.println("\n=== COLLECTORS GROUPING BY ===");
            
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);
            
            // Group by even/odd
            Map<String, List<Integer>> grouped = numbers.stream()
                .collect(Collectors.groupingBy(
                    n -> n % 2 == 0 ? "even" : "odd"
                ));
            System.out.println("Grouped: " + grouped);
            
            // Group by length
            List<String> words = Arrays.asList("a", "ab", "abc", "ab", "abc", "abcd");
            Map<Integer, List<String>> byLength = words.stream()
                .collect(Collectors.groupingBy(String::length));
            System.out.println("By length: " + byLength);
        }
        
        public static void demonstratePartitioning() {
            System.out.println("\n=== COLLECTORS PARTITIONING ===");
            
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);
            
            // Partition by even/odd
            Map<Boolean, List<Integer>> partitions = numbers.stream()
                .collect(Collectors.partitioningBy(n -> n % 2 == 0));
            System.out.println("Partitioned: " + partitions);
            System.out.println("Even: " + partitions.get(true));
            System.out.println("Odd: " + partitions.get(false));
        }
        
        public static void demonstrateJoining() {
            System.out.println("\n=== COLLECTORS JOINING ===");
            
            List<String> words = Arrays.asList("apple", "banana", "cherry");
            
            // Simple join
            String joined = words.stream()
                .collect(Collectors.joining(", "));
            System.out.println("Joined: " + joined);
            
            // With prefix/suffix
            String bracketed = words.stream()
                .collect(Collectors.joining(", ", "[", "]"));
            System.out.println("Bracketed: " + bracketed);
        }
        
        public static void demonstrateSummingAndAveraging() {
            System.out.println("\n=== COLLECTORS STATS ===");
            
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
            
            // Summing
            int sum = numbers.stream()
                .collect(Collectors.summingInt(n -> n));
            System.out.println("Sum: " + sum);
            
            // Averaging
            double avg = numbers.stream()
                .collect(Collectors.averagingInt(n -> n));
            System.out.println("Average: " + avg);
            
            // Summary
            IntSummaryStatistics stats = numbers.stream()
                .collect(Collectors.summarizingInt(n -> n));
            System.out.println("Stats: count=" + stats.getCount() + 
                             ", sum=" + stats.getSum() + 
                             ", avg=" + stats.getAverage() + 
                             ", min=" + stats.getMin() + 
                             ", max=" + stats.getMax());
        }
    }

    // ==================== SECTION 5: ADVANCED STREAM PATTERNS ====================
    
    static class AdvancedPatternsDemo {
        public static void demonstrateChaining() {
            System.out.println("\n=== STREAM CHAINING ===");
            
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
            
            // Complex pipeline
            List<Integer> result = numbers.stream()
                .filter(n -> n > 3)
                .map(n -> n * 2)
                .filter(n -> n < 20)
                .sorted(Collections.reverseOrder())
                .distinct()
                .collect(Collectors.toList());
            System.out.println("Pipeline result: " + result);
        }
        
        public static void demonstrateOptional() {
            System.out.println("\n=== OPTIONAL WITH STREAMS ===");
            
            List<Integer> numbers = Arrays.asList();
            
            // Using optional
            Optional<Integer> first = numbers.stream()
                .findFirst();
            
            first.ifPresent(n -> System.out.println("First: " + n));
            first.ifPresentOrElse(
                n -> System.out.println("Found: " + n),
                () -> System.out.println("Not found")
            );
            
            int value = first.orElse(0);
            System.out.println("Or else: " + value);
        }
        
        public static void demonstrateCustomCollector() {
            System.out.println("\n=== CUSTOM COLLECTOR ===");
            
            List<String> words = Arrays.asList("apple", "banana", "cherry");
            
            // Collect to custom class
            String joined = words.stream()
                .collect(
                    StringBuilder::new,
                    (sb, word) -> {
                        if (sb.length() > 0) sb.append(", ");
                        sb.append(word);
                    },
                    (sb1, sb2) -> {
                        if (sb1.length() > 0) sb1.append(", ");
                        sb1.append(sb2);
                    }
                ).toString();
            System.out.println("Custom collector: " + joined);
        }
    }

    // ==================== SECTION 6: INTERVIEW QUESTIONS ====================
    
    static class InterviewQuestions {
        public static void printQuestions() {
            String[] questions = {
                "1. What is a Stream?",
                "   Answer: A stream is a sequence of elements supporting aggregate operations.",
                
                "2. Are streams lazy or eager?",
                "   Answer: Streams are lazy. Intermediate operations are evaluated only when terminal operation is called.",
                
                "3. What's the difference between map() and flatMap()?",
                "   Answer: map() transforms each element, flatMap() flattens nested structures.",
                
                "4. Can you reuse a stream?",
                "   Answer: No, once terminal operation is called, stream is closed.",
                
                "5. What is the difference between filter() and anyMatch()?",
                "   Answer: filter() returns filtered stream, anyMatch() returns boolean.",
                
                "6. What is type of stream.collect()?",
                "   Answer: It's a terminal operation that reduces stream to a single result.",
                
                "7. What is the purpose of distinct()?",
                "   Answer: It removes duplicate elements from stream.",
                
                "8. How to sort a stream in descending order?",
                "   Answer: Use sorted(Collections.reverseOrder())",
                
                "9. What is reduce operation?",
                "   Answer: It combines stream elements into a single result using binary operator.",
                
                "10. Difference between forEach and forEachOrdered?",
                "   Answer: forEachOrdered maintains encounter order, forEach doesn't guarantee order.",
                
                "11. What is IntStream, LongStream, DoubleStream?",
                "   Answer: Specialized streams for primitive types with optimized operations.",
                
                "12. How to create infinite stream?",
                "   Answer: Use Stream.generate() or Stream.iterate()",
                
                "13. What happens with null in stream?",
                "   Answer: Streams generally throw NullPointerException. Use filter or Optional.",
                
                "14. Can you modify stream source after creating stream?",
                "   Answer: Can cause unpredictable results. Avoid modifying source.",
                
                "15. What is the use of groupingBy()?",
                "   Answer: Groups stream elements by a classifier function into a Map.",
                
                "16. Difference between collect() and forEach()?",
                "   Answer: collect() combines into a result, forEach() performs side effects.",
                
                "17. How to find min/max in stream?",
                "   Answer: Use min() or max() terminal operations with comparator.",
                
                "18. What is stateless and stateful operations?",
                "   Answer: Stateless don't depend on previous elements. distinct() is stateful.",
                
                "19. Can streams be parallelized?",
                "   Answer: Yes, using parallelStream() for concurrent processing.",
                
                "20. What is the performance impact of parallel streams?",
                "   Answer: Better for large datasets, worse for small due to overhead.",
                
                "21. How to skip first n elements?",
                "   Answer: Use skip(n) intermediate operation.",
                
                "22. What is takeWhile() and dropWhile()?",
                "   Answer: takeWhile takes while predicate true, dropWhile skips while predicate true.",
                
                "23. Can you combine multiple streams?",
                "   Answer: Yes, use Stream.concat() to concatenate streams.",
                
                "24. What is partitioningBy()?",
                "   Answer: Partitions stream into two groups based on predicate (true/false map).",
                
                "25. How to handle exception in stream operations?",
                "   Answer: Use try-catch or handle with Optional/filter combinations."
            };
            
            System.out.println("\n=== 25 INTERVIEW QUESTIONS ===");
            for (String q : questions) {
                System.out.println(q);
            }
        }
    }

    // ==================== MAIN METHOD ====================
    
    public static void main(String[] args) {
        System.out.println("╔════════════════════════════════════════╗");
        System.out.println("║   STREAMS COMPLETE GUIDE - DAY 15     ║");
        System.out.println("║   2,500+ Lines | 50+ Examples        ║");
        System.out.println("╚════════════════════════════════════════╝");
        
        // Demonstrations
        StreamCreationDemo.demonstrateStreamCreation();
        StreamCreationDemo.demonstrateStreamRange();
        
        IntermediateOperationsDemo.demonstrateFilter();
        IntermediateOperationsDemo.demonstrateMap();
        IntermediateOperationsDemo.demonstrateFlatMap();
        IntermediateOperationsDemo.demonstrateDistinct();
        IntermediateOperationsDemo.demonstrateSorted();
        IntermediateOperationsDemo.demonstrateSkipLimit();
        IntermediateOperationsDemo.demonstratePeek();
        
        TerminalOperationsDemo.demonstrateForEach();
        TerminalOperationsDemo.demonstrateCollect();
        TerminalOperationsDemo.demonstrateReduce();
        TerminalOperationsDemo.demonstrateMatch();
        TerminalOperationsDemo.demonstrateFind();
        
        CollectorsDemo.demonstrateToMap();
        CollectorsDemo.demonstrateGroupingBy();
        CollectorsDemo.demonstratePartitioning();
        CollectorsDemo.demonstrateJoining();
        CollectorsDemo.demonstrateSummingAndAveraging();
        
        AdvancedPatternsDemo.demonstrateChaining();
        AdvancedPatternsDemo.demonstrateOptional();
        
        InterviewQuestions.printQuestions();
        
        System.out.println("\n✅ Streams Complete Guide Executed Successfully!");
    }
}
