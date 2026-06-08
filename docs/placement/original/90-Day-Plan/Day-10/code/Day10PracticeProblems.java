/*
 * DAY 10 PRACTICE PROBLEMS
 * 30 Problems covering Streams API, Lambdas & Functional Programming
 * 
 * SECTIONS:
 * 1. Stream Basics (Problems 1-5)
 * 2. Intermediate Operations (Problems 6-10)
 * 3. Terminal Operations (Problems 11-15)
 * 4. Lambda Expressions (Problems 16-20)
 * 5. Functional Interfaces (Problems 21-25)
 * 6. Advanced Functional Programming (Problems 26-30)
 */

import java.util.*;
import java.util.function.*;
import java.util.stream.*;

public class Day10PracticeProblems {

    // ============================================================================
    // SECTION 1: STREAM BASICS (Problems 1-5)
    // ============================================================================
    
    // Problem 1: Convert list to stream, filter even numbers, collect to list
    public static List<Integer> filterEvenNumbers(List<Integer> numbers) {
        return numbers.stream()
            .filter(n -> n % 2 == 0)
            .collect(Collectors.toList());
    }
    
    // Problem 2: Get all names starting with 'A' from list of people
    public static List<String> getNamesStartingWithA(List<String> names) {
        return names.stream()
            .filter(name -> name.startsWith("A"))
            .collect(Collectors.toList());
    }
    
    // Problem 3: Convert list of strings to uppercase
    public static List<String> convertToUpperCase(List<String> strings) {
        return strings.stream()
            .map(String::toUpperCase)
            .collect(Collectors.toList());
    }
    
    // Problem 4: Get distinct elements from list
    public static List<Integer> getDistinctElements(List<Integer> numbers) {
        return numbers.stream()
            .distinct()
            .collect(Collectors.toList());
    }
    
    // Problem 5: Get first 5 elements from stream
    public static List<Integer> getFirstFive(List<Integer> numbers) {
        return numbers.stream()
            .limit(5)
            .collect(Collectors.toList());
    }

    // ============================================================================
    // SECTION 2: INTERMEDIATE OPERATIONS (Problems 6-10)
    // ============================================================================
    
    // Problem 6: Sort list in descending order
    public static List<Integer> sortDescending(List<Integer> numbers) {
        return numbers.stream()
            .sorted(Comparator.reverseOrder())
            .collect(Collectors.toList());
    }
    
    // Problem 7: FlatMap - Flatten list of lists
    public static List<Integer> flattenLists(List<List<Integer>> lists) {
        return lists.stream()
            .flatMap(List::stream)
            .collect(Collectors.toList());
    }
    
    // Problem 8: Skip first 3 elements and take next 5
    public static List<Integer> skipAndTake(List<Integer> numbers) {
        return numbers.stream()
            .skip(3)
            .limit(5)
            .collect(Collectors.toList());
    }
    
    // Problem 9: Map each number to its square
    public static List<Integer> squareNumbers(List<Integer> numbers) {
        return numbers.stream()
            .map(n -> n * n)
            .collect(Collectors.toList());
    }
    
    // Problem 10: Filter and map - Get squares of even numbers
    public static List<Integer> squaresOfEvenNumbers(List<Integer> numbers) {
        return numbers.stream()
            .filter(n -> n % 2 == 0)
            .map(n -> n * n)
            .collect(Collectors.toList());
    }

    // ============================================================================
    // SECTION 3: TERMINAL OPERATIONS (Problems 11-15)
    // ============================================================================
    
    // Problem 11: Find sum of all numbers using reduce
    public static int sumOfNumbers(List<Integer> numbers) {
        return numbers.stream()
            .reduce(0, Integer::sum);
    }
    
    // Problem 12: Find maximum number
    public static Optional<Integer> findMaximum(List<Integer> numbers) {
        return numbers.stream()
            .max(Integer::compareTo);
    }
    
    // Problem 13: Check if any number is greater than 100
    public static boolean anyGreaterThan100(List<Integer> numbers) {
        return numbers.stream()
            .anyMatch(n -> n > 100);
    }
    
    // Problem 14: Check if all numbers are positive
    public static boolean allPositive(List<Integer> numbers) {
        return numbers.stream()
            .allMatch(n -> n > 0);
    }
    
    // Problem 15: Count how many strings have length > 5
    public static long countLongStrings(List<String> strings) {
        return strings.stream()
            .filter(s -> s.length() > 5)
            .count();
    }

    // ============================================================================
    // SECTION 4: LAMBDA EXPRESSIONS (Problems 16-20)
    // ============================================================================
    
    // Problem 16: Sort list using custom comparator lambda
    public static List<String> sortByLength(List<String> strings) {
        return strings.stream()
            .sorted((s1, s2) -> Integer.compare(s1.length(), s2.length()))
            .collect(Collectors.toList());
    }
    
    // Problem 17: Filter using custom predicate lambda
    public static List<Integer> filterMultiplesOf3(List<Integer> numbers) {
        Predicate<Integer> isMultipleOf3 = n -> n % 3 == 0;
        return numbers.stream()
            .filter(isMultipleOf3)
            .collect(Collectors.toList());
    }
    
    // Problem 18: Transform using function lambda
    public static List<String> addPrefix(List<String> strings, String prefix) {
        Function<String, String> addPrefixFunc = s -> prefix + s;
        return strings.stream()
            .map(addPrefixFunc)
            .collect(Collectors.toList());
    }
    
    // Problem 19: Consumer lambda - print each element with index
    public static void printWithIndex(List<String> list) {
        IntStream.range(0, list.size())
            .forEach(i -> System.out.println(i + ": " + list.get(i)));
    }
    
    // Problem 20: BiFunction lambda - combine two lists
    public static List<String> combineLists(List<String> list1, List<String> list2) {
        BiFunction<List<String>, List<String>, List<String>> combiner = (l1, l2) -> 
            Stream.concat(l1.stream(), l2.stream()).collect(Collectors.toList());
        return combiner.apply(list1, list2);
    }

    // ============================================================================
    // SECTION 5: FUNCTIONAL INTERFACES (Problems 21-25)
    // ============================================================================
    
    // Problem 21: Use Predicate to filter words
    public static List<String> filterWords(List<String> words, Predicate<String> condition) {
        return words.stream()
            .filter(condition)
            .collect(Collectors.toList());
    }
    
    // Problem 22: Use Function to transform elements
    public static <T, R> List<R> transform(List<T> list, Function<T, R> transformer) {
        return list.stream()
            .map(transformer)
            .collect(Collectors.toList());
    }
    
    // Problem 23: Use Consumer to perform action on each element
    public static <T> void processEach(List<T> list, Consumer<T> action) {
        list.forEach(action);
    }
    
    // Problem 24: Use Supplier to generate list of values
    public static <T> List<T> generateList(Supplier<T> generator, int count) {
        return Stream.generate(generator)
            .limit(count)
            .collect(Collectors.toList());
    }
    
    // Problem 25: Use BinaryOperator to combine elements
    public static <T> Optional<T> combineAll(List<T> list, BinaryOperator<T> combiner) {
        return list.stream()
            .reduce(combiner);
    }

    // ============================================================================
    // SECTION 6: ADVANCED FUNCTIONAL PROGRAMMING (Problems 26-30)
    // ============================================================================
    
    // Problem 26: Group strings by their length
    public static Map<Integer, List<String>> groupByLength(List<String> strings) {
        return strings.stream()
            .collect(Collectors.groupingBy(String::length));
    }
    
    // Problem 27: Partition numbers into even and odd
    public static Map<Boolean, List<Integer>> partitionEvenOdd(List<Integer> numbers) {
        return numbers.stream()
            .collect(Collectors.partitioningBy(n -> n % 2 == 0));
    }
    
    // Problem 28: Find average of numbers using Optional
    public static OptionalDouble calculateAverage(List<Integer> numbers) {
        return numbers.stream()
            .mapToInt(Integer::intValue)
            .average();
    }
    
    // Problem 29: Implement method chaining with Optional
    public static Optional<String> processOptional(Optional<String> opt) {
        return opt
            .filter(s -> s.length() > 3)
            .map(String::toUpperCase)
            .map(s -> "Processed: " + s);
    }
    
    // Problem 30: Complex stream pipeline - word frequency counter
    public static Map<String, Long> wordFrequencyCounter(List<String> sentences) {
        return sentences.stream()
            .flatMap(sentence -> Arrays.stream(sentence.toLowerCase().split("\\s+")))
            .filter(word -> !word.isEmpty())
            .collect(Collectors.groupingBy(
                Function.identity(),
                Collectors.counting()
            ));
    }

    // ============================================================================
    // BONUS: ADVANCED PROBLEMS
    // ============================================================================
    
    // Bonus 1: Find second highest number
    public static Optional<Integer> findSecondHighest(List<Integer> numbers) {
        return numbers.stream()
            .distinct()
            .sorted(Comparator.reverseOrder())
            .skip(1)
            .findFirst();
    }
    
    // Bonus 2: Flatten and remove duplicates from nested lists
    public static List<Integer> flattenAndUnique(List<List<Integer>> nestedLists) {
        return nestedLists.stream()
            .flatMap(List::stream)
            .distinct()
            .sorted()
            .collect(Collectors.toList());
    }
    
    // Bonus 3: Find all unique characters in list of strings
    public static Set<Character> findUniqueCharacters(List<String> strings) {
        return strings.stream()
            .flatMapToInt(String::chars)
            .mapToObj(c -> (char) c)
            .collect(Collectors.toSet());
    }
    
    // Bonus 4: Get top N frequent elements
    public static List<String> topNFrequent(List<String> elements, int n) {
        return elements.stream()
            .collect(Collectors.groupingBy(
                Function.identity(),
                Collectors.counting()
            ))
            .entrySet().stream()
            .sorted(Map.Entry.<String, Long>comparingByValue().reversed())
            .limit(n)
            .map(Map.Entry::getKey)
            .collect(Collectors.toList());
    }
    
    // Bonus 5: Parallel stream for large dataset
    public static long parallelSum(List<Integer> numbers) {
        return numbers.parallelStream()
            .mapToLong(Integer::longValue)
            .sum();
    }

    // ============================================================================
    // TEST CASES
    // ============================================================================
    
    public static void main(String[] args) {
        System.out.println("╔═══════════════════════════════════════════════════════════════╗");
        System.out.println("║              DAY 10 PRACTICE PROBLEMS                         ║");
        System.out.println("║     Streams API, Lambdas & Functional Programming             ║");
        System.out.println("╚═══════════════════════════════════════════════════════════════╝\n");
        
        // Test data
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David", "Eve", "Anna");
        List<String> words = Arrays.asList("apple", "banana", "apricot", "cherry", "avocado");
        
        // Section 1: Stream Basics
        System.out.println("=== SECTION 1: STREAM BASICS ===");
        System.out.println("1. Even numbers: " + filterEvenNumbers(numbers));
        System.out.println("2. Names starting with A: " + getNamesStartingWithA(names));
        System.out.println("3. Uppercase: " + convertToUpperCase(Arrays.asList("hello", "world")));
        System.out.println("4. Distinct: " + getDistinctElements(Arrays.asList(1, 2, 2, 3, 3, 4)));
        System.out.println("5. First five: " + getFirstFive(numbers));
        
        // Section 2: Intermediate Operations
        System.out.println("\n=== SECTION 2: INTERMEDIATE OPERATIONS ===");
        System.out.println("6. Sort descending: " + sortDescending(Arrays.asList(5, 3, 8, 1, 9)));
        System.out.println("7. Flatten: " + flattenLists(Arrays.asList(
            Arrays.asList(1, 2),
            Arrays.asList(3, 4),
            Arrays.asList(5, 6)
        )));
        System.out.println("8. Skip and take: " + skipAndTake(numbers));
        System.out.println("9. Squares: " + squareNumbers(Arrays.asList(1, 2, 3, 4, 5)));
        System.out.println("10. Squares of evens: " + squaresOfEvenNumbers(numbers));
        
        // Section 3: Terminal Operations
        System.out.println("\n=== SECTION 3: TERMINAL OPERATIONS ===");
        System.out.println("11. Sum: " + sumOfNumbers(numbers));
        System.out.println("12. Maximum: " + findMaximum(numbers).orElse(0));
        System.out.println("13. Any > 100: " + anyGreaterThan100(numbers));
        System.out.println("14. All positive: " + allPositive(numbers));
        System.out.println("15. Long strings count: " + countLongStrings(words));
        
        // Section 4: Lambda Expressions
        System.out.println("\n=== SECTION 4: LAMBDA EXPRESSIONS ===");
        System.out.println("16. Sort by length: " + sortByLength(words));
        System.out.println("17. Multiples of 3: " + filterMultiplesOf3(numbers));
        System.out.println("18. Add prefix: " + addPrefix(Arrays.asList("one", "two"), "item-"));
        System.out.println("19. Print with index:");
        printWithIndex(Arrays.asList("A", "B", "C"));
        System.out.println("20. Combine lists: " + combineLists(
            Arrays.asList("a", "b"),
            Arrays.asList("c", "d")
        ));
        
        // Section 5: Functional Interfaces
        System.out.println("\n=== SECTION 5: FUNCTIONAL INTERFACES ===");
        System.out.println("21. Filter (length > 5): " + 
            filterWords(words, w -> w.length() > 5));
        System.out.println("22. Transform (length): " + 
            transform(words, String::length));
        System.out.print("23. Process each: ");
        processEach(Arrays.asList(1, 2, 3), n -> System.out.print(n * 2 + " "));
        System.out.println("\n24. Generate list: " + 
            generateList(() -> (int)(Math.random() * 100), 5));
        System.out.println("25. Combine all: " + 
            combineAll(Arrays.asList("Hello", " ", "World"), (a, b) -> a + b).orElse(""));
        
        // Section 6: Advanced
        System.out.println("\n=== SECTION 6: ADVANCED FUNCTIONAL PROGRAMMING ===");
        System.out.println("26. Group by length: " + groupByLength(words));
        System.out.println("27. Partition even/odd: " + partitionEvenOdd(numbers));
        System.out.println("28. Average: " + calculateAverage(numbers).orElse(0.0));
        System.out.println("29. Process optional: " + 
            processOptional(Optional.of("test")));
        
        List<String> sentences = Arrays.asList(
            "hello world",
            "hello java",
            "java streams"
        );
        System.out.println("30. Word frequency: " + wordFrequencyCounter(sentences));
        
        // Bonus problems
        System.out.println("\n=== BONUS PROBLEMS ===");
        System.out.println("Bonus 1: Second highest: " + 
            findSecondHighest(Arrays.asList(5, 3, 8, 1, 9, 8)).orElse(0));
        System.out.println("Bonus 2: Flatten unique: " + 
            flattenAndUnique(Arrays.asList(
                Arrays.asList(1, 2, 2),
                Arrays.asList(3, 1, 4)
            )));
        System.out.println("Bonus 3: Unique chars: " + 
            findUniqueCharacters(Arrays.asList("hello", "world")));
        System.out.println("Bonus 4: Top 2 frequent: " + 
            topNFrequent(Arrays.asList("a", "b", "a", "c", "a", "b"), 2));
        System.out.println("Bonus 5: Parallel sum: " + parallelSum(numbers));
        
        System.out.println("\n╔═══════════════════════════════════════════════════════════════╗");
        System.out.println("║                   ALL PROBLEMS COMPLETE!                      ║");
        System.out.println("╚═══════════════════════════════════════════════════════════════╝");
    }
}
