/*
 * LEETCODE #49: Group Anagrams (Stream API Version)
 * Difficulty: Medium
 * 
 * Problem: Given an array of strings strs, group the anagrams together.
 * 
 * Example 1:
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 * 
 * Example 2:
 * Input: strs = [""]
 * Output: [[""]]
 * 
 * Example 3:
 * Input: strs = ["a"]
 * Output: [["a"]]
 * 
 * This version demonstrates STREAM API and FUNCTIONAL PROGRAMMING approaches.
 */

import java.util.*;
import java.util.function.*;
import java.util.stream.*;

public class GroupAnagramsStreams {

    // ============================================================================
    // APPROACH 1: Stream + Sorted String Key (Classic Functional)
    // Time: O(n * k log k), Space: O(n * k)
    // Most straightforward and readable
    // ============================================================================
    
    public static List<List<String>> groupAnagrams_StreamSort(String[] strs) {
        return Arrays.stream(strs)
            .collect(Collectors.groupingBy(
                str -> {
                    char[] chars = str.toCharArray();
                    Arrays.sort(chars);
                    return new String(chars);
                }
            ))
            .values().stream()
            .collect(Collectors.toList());
    }

    // ============================================================================
    // APPROACH 2: Stream + Character Count Key (OPTIMAL)
    // Time: O(n * k), Space: O(n * k)
    // OPTIMAL - No sorting needed, purely functional
    // ============================================================================
    
    public static List<List<String>> groupAnagrams_StreamCharCount(String[] strs) {
        Function<String, String> charCountKey = str -> {
            int[] count = new int[26];
            str.chars().forEach(c -> count[c - 'a']++);
            return Arrays.toString(count);
        };
        
        return Arrays.stream(strs)
            .collect(Collectors.groupingBy(charCountKey))
            .values().stream()
            .collect(Collectors.toList());
    }

    // ============================================================================
    // APPROACH 3: Stream + Prime Product Key (Mathematical)
    // Time: O(n * k), Space: O(n * k)
    // Elegant mathematical approach using prime factorization
    // ============================================================================
    
    private static final int[] PRIMES = {
        2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
        73, 79, 83, 89, 97, 101
    };
    
    public static List<List<String>> groupAnagrams_StreamPrime(String[] strs) {
        Function<String, Long> primeProductKey = str -> 
            str.chars()
                .mapToLong(c -> PRIMES[c - 'a'])
                .reduce(1L, (a, b) -> a * b);
        
        return Arrays.stream(strs)
            .collect(Collectors.groupingBy(primeProductKey))
            .values().stream()
            .collect(Collectors.toList());
    }

    // ============================================================================
    // APPROACH 4: Stream + Custom Key Builder (Optimized)
    // Time: O(n * k), Space: O(n * k)
    // Custom key building with streams
    // ============================================================================
    
    public static List<List<String>> groupAnagrams_StreamCustomKey(String[] strs) {
        Function<String, String> customKey = str -> {
            return str.chars()
                .sorted()
                .collect(
                    StringBuilder::new,
                    StringBuilder::appendCodePoint,
                    StringBuilder::append
                )
                .toString();
        };
        
        return Arrays.stream(strs)
            .collect(Collectors.groupingBy(customKey))
            .values().stream()
            .collect(Collectors.toList());
    }

    // ============================================================================
    // APPROACH 5: Parallel Stream (For Large Datasets)
    // Time: O(n * k), Space: O(n * k)
    // Best for multi-core processing of large datasets
    // ============================================================================
    
    public static List<List<String>> groupAnagrams_ParallelStream(String[] strs) {
        Function<String, String> sortedKey = str -> 
            str.chars()
                .sorted()
                .collect(
                    StringBuilder::new,
                    StringBuilder::appendCodePoint,
                    StringBuilder::append
                )
                .toString();
        
        return Arrays.stream(strs)
            .parallel()
            .collect(Collectors.groupingByConcurrent(sortedKey))
            .values().stream()
            .collect(Collectors.toList());
    }

    // ============================================================================
    // APPROACH 6: Stream with Frequency Map (Functional)
    // Time: O(n * k), Space: O(n * k)
    // Using frequency map as key
    // ============================================================================
    
    public static List<List<String>> groupAnagrams_StreamFrequencyMap(String[] strs) {
        Function<String, Map<Character, Long>> frequencyMapKey = str ->
            str.chars()
                .mapToObj(c -> (char) c)
                .collect(Collectors.groupingBy(
                    Function.identity(),
                    Collectors.counting()
                ));
        
        return Arrays.stream(strs)
            .collect(Collectors.groupingBy(
                str -> frequencyMapKey.apply(str).toString()
            ))
            .values().stream()
            .collect(Collectors.toList());
    }

    // ============================================================================
    // APPROACH 7: Stream + Collectors.toMap (Alternative Collection)
    // Time: O(n * k log k), Space: O(n * k)
    // Different collection strategy
    // ============================================================================
    
    public static List<List<String>> groupAnagrams_StreamToMap(String[] strs) {
        Function<String, String> sortKey = str -> 
            Stream.of(str.split(""))
                .sorted()
                .collect(Collectors.joining());
        
        Map<String, List<String>> result = new HashMap<>();
        
        Arrays.stream(strs).forEach(str -> {
            String key = sortKey.apply(str);
            result.computeIfAbsent(key, k -> new ArrayList<>()).add(str);
        });
        
        return new ArrayList<>(result.values());
    }

    // ============================================================================
    // FUNCTIONAL PROGRAMMING PATTERNS DEMONSTRATED
    // ============================================================================
    
    public static class FunctionalPatterns {
        
        // 1. Function Composition
        public static void demonstrateFunctionComposition() {
            System.out.println("\n=== Function Composition ===");
            
            Function<String, String> trim = String::trim;
            Function<String, String> toLowerCase = String::toLowerCase;
            Function<String, String> removeSpaces = s -> s.replaceAll("\\s+", "");
            
            // Compose functions
            Function<String, String> normalize = trim
                .andThen(toLowerCase)
                .andThen(removeSpaces);
            
            String input = "  Hello World  ";
            System.out.println("Input: '" + input + "'");
            System.out.println("Output: '" + normalize.apply(input) + "'");
        }
        
        // 2. Higher-Order Functions
        public static <T, K> Map<K, List<T>> groupBy(List<T> list, Function<T, K> keyExtractor) {
            return list.stream()
                .collect(Collectors.groupingBy(keyExtractor));
        }
        
        // 3. Currying
        public static Function<String, Function<String, Boolean>> createAnagramChecker() {
            Function<String, String> sortString = str -> 
                str.chars()
                    .sorted()
                    .collect(
                        StringBuilder::new,
                        StringBuilder::appendCodePoint,
                        StringBuilder::append
                    )
                    .toString();
            
            return str1 -> str2 -> 
                sortString.apply(str1).equals(sortString.apply(str2));
        }
        
        // 4. Partial Application
        public static Predicate<String> createLengthFilter(int minLength) {
            return str -> str.length() >= minLength;
        }
        
        // 5. Custom Collector Example
        public static Collector<String, ?, Map<String, List<String>>> anagramGroupingCollector() {
            return Collectors.groupingBy(str -> {
                char[] chars = str.toCharArray();
                Arrays.sort(chars);
                return new String(chars);
            });
        }
    }

    // ============================================================================
    // STREAM API ADVANCED TECHNIQUES
    // ============================================================================
    
    public static class StreamTechniques {
        
        // Technique 1: Stream Pipelining
        public static List<String> processPipeline(String[] strs) {
            return Arrays.stream(strs)
                .filter(s -> s.length() > 2)           // Filter short strings
                .map(String::toLowerCase)               // Convert to lowercase
                .distinct()                             // Remove duplicates
                .sorted()                               // Sort alphabetically
                .collect(Collectors.toList());
        }
        
        // Technique 2: Custom Reduction
        public static String concatenateWithDelimiter(String[] strs, String delimiter) {
            return Arrays.stream(strs)
                .reduce((a, b) -> a + delimiter + b)
                .orElse("");
        }
        
        // Technique 3: Partitioning
        public static Map<Boolean, List<String>> partitionByLength(String[] strs, int threshold) {
            return Arrays.stream(strs)
                .collect(Collectors.partitioningBy(
                    s -> s.length() > threshold
                ));
        }
        
        // Technique 4: Multi-level Grouping
        public static Map<Integer, Map<Character, List<String>>> multiLevelGroup(String[] strs) {
            return Arrays.stream(strs)
                .collect(Collectors.groupingBy(
                    String::length,                          // Group by length
                    Collectors.groupingBy(s -> s.charAt(0))  // Then by first char
                ));
        }
        
        // Technique 5: Stream with Optional
        public static Optional<String> findLongestAnagram(String[] strs, String target) {
            Function<String, String> sortKey = str -> 
                str.chars().sorted().collect(
                    StringBuilder::new,
                    StringBuilder::appendCodePoint,
                    StringBuilder::append
                ).toString();
            
            String targetKey = sortKey.apply(target);
            
            return Arrays.stream(strs)
                .filter(s -> sortKey.apply(s).equals(targetKey))
                .max(Comparator.comparingInt(String::length));
        }
    }

    // ============================================================================
    // COMPLEXITY ANALYSIS
    // ============================================================================
    
    public static void printComplexityAnalysis() {
        System.out.println("""
            ╔═══════════════════════════════════════════════════════════════════╗
            ║              COMPLEXITY ANALYSIS - Group Anagrams                 ║
            ╠═══════════════════════════════════════════════════════════════════╣
            ║ Approach                    │ Time         │ Space │ Best For     ║
            ╠═══════════════════════════════════════════════════════════════════╣
            ║ 1. Stream + Sorted Key      │ O(n*k log k) │ O(nk) │ Readability  ║
            ║ 2. Stream + Char Count      │ O(n*k)       │ O(nk) │ OPTIMAL      ║
            ║ 3. Stream + Prime Product   │ O(n*k)       │ O(nk) │ Mathematical ║
            ║ 4. Stream + Custom Key      │ O(n*k log k) │ O(nk) │ Flexibility  ║
            ║ 5. Parallel Stream          │ O(n*k)       │ O(nk) │ Large data   ║
            ║ 6. Stream + Frequency Map   │ O(n*k)       │ O(nk) │ Detailed key ║
            ║ 7. Stream + toMap           │ O(n*k log k) │ O(nk) │ Alternative  ║
            ╚═══════════════════════════════════════════════════════════════════╝
            
            where n = number of strings, k = maximum length of string
            
            STREAM API CONCEPTS USED:
            1. Arrays.stream() - Convert array to stream
            2. collect(Collectors.groupingBy()) - Group by key
            3. map() / mapToObj() - Transform elements
            4. filter() - Select elements
            5. sorted() - Sort stream
            6. reduce() - Combine elements
            7. parallel() - Parallel processing
            8. forEach() - Iterate with side effects
            9. chars() - Get IntStream of characters
            10. Collectors.* - Various collection strategies
            
            FUNCTIONAL PROGRAMMING CONCEPTS:
            1. Function as first-class citizen
            2. Lambda expressions
            3. Method references
            4. Function composition (andThen, compose)
            5. Higher-order functions
            6. Immutability
            7. Declarative style
            8. Stream pipelining
            9. Optional handling
            10. Currying and partial application
            """);
    }

    // ============================================================================
    // TEST CASES
    // ============================================================================
    
    public static void main(String[] args) {
        System.out.println("╔═══════════════════════════════════════════════════════════════╗");
        System.out.println("║        LEETCODE #49: Group Anagrams (Stream API)             ║");
        System.out.println("╚═══════════════════════════════════════════════════════════════╝\n");
        
        // Test cases
        String[][] testCases = {
            {"eat", "tea", "tan", "ate", "nat", "bat"},
            {""},
            {"a"},
            {"abc", "bca", "cab", "xyz", "zyx", "yxz"}
        };
        
        for (int i = 0; i < testCases.length; i++) {
            String[] strs = testCases[i];
            
            System.out.println("Test Case " + (i + 1) + ":");
            System.out.println("Input: " + Arrays.toString(strs));
            
            System.out.println("\nApproach 1 (Stream + Sort):      " + 
                groupAnagrams_StreamSort(strs));
            
            System.out.println("Approach 2 (Stream + CharCount): " + 
                groupAnagrams_StreamCharCount(strs));
            
            System.out.println("Approach 3 (Stream + Prime):     " + 
                groupAnagrams_StreamPrime(strs));
            
            System.out.println("Approach 4 (Stream + Custom):    " + 
                groupAnagrams_StreamCustomKey(strs));
            
            System.out.println("Approach 5 (Parallel Stream):    " + 
                groupAnagrams_ParallelStream(strs));
            
            System.out.println("Approach 6 (Stream + FreqMap):   " + 
                groupAnagrams_StreamFrequencyMap(strs));
            
            System.out.println("Approach 7 (Stream + toMap):     " + 
                groupAnagrams_StreamToMap(strs));
            
            System.out.println("\n" + "=".repeat(65) + "\n");
        }
        
        printComplexityAnalysis();
        
        // Demonstrate functional patterns
        System.out.println("\n╔═══════════════════════════════════════════════════════════════╗");
        System.out.println("║           FUNCTIONAL PROGRAMMING DEMONSTRATIONS               ║");
        System.out.println("╚═══════════════════════════════════════════════════════════════╝");
        
        FunctionalPatterns.demonstrateFunctionComposition();
        
        System.out.println("\n=== Higher-Order Function ===");
        List<String> words = Arrays.asList("apple", "banana", "apricot", "cherry");
        Map<Character, List<String>> grouped = FunctionalPatterns.groupBy(
            words,
            s -> s.charAt(0)
        );
        System.out.println("Grouped by first letter: " + grouped);
        
        System.out.println("\n=== Currying ===");
        Function<String, Function<String, Boolean>> anagramChecker = 
            FunctionalPatterns.createAnagramChecker();
        Function<String, Boolean> eatChecker = anagramChecker.apply("eat");
        System.out.println("'tea' is anagram of 'eat': " + eatChecker.apply("tea"));
        System.out.println("'bat' is anagram of 'eat': " + eatChecker.apply("bat"));
        
        System.out.println("\n=== Partial Application ===");
        Predicate<String> minLength3 = FunctionalPatterns.createLengthFilter(3);
        List<String> filtered = words.stream()
            .filter(minLength3)
            .collect(Collectors.toList());
        System.out.println("Words with length >= 3: " + filtered);
        
        // Demonstrate stream techniques
        System.out.println("\n╔═══════════════════════════════════════════════════════════════╗");
        System.out.println("║              ADVANCED STREAM TECHNIQUES                       ║");
        System.out.println("╚═══════════════════════════════════════════════════════════════╝");
        
        String[] sampleData = {"apple", "BANANA", "apple", "Cherry", "date", "BANANA"};
        
        System.out.println("\n=== Stream Pipeline ===");
        System.out.println("Processed: " + StreamTechniques.processPipeline(sampleData));
        
        System.out.println("\n=== Custom Reduction ===");
        System.out.println("Concatenated: " + 
            StreamTechniques.concatenateWithDelimiter(sampleData, " | "));
        
        System.out.println("\n=== Partitioning ===");
        Map<Boolean, List<String>> partitioned = 
            StreamTechniques.partitionByLength(sampleData, 5);
        System.out.println("Short (<=5): " + partitioned.get(false));
        System.out.println("Long (>5): " + partitioned.get(true));
        
        System.out.println("\n=== Multi-level Grouping ===");
        Map<Integer, Map<Character, List<String>>> multiGrouped = 
            StreamTechniques.multiLevelGroup(sampleData);
        System.out.println("Multi-grouped: " + multiGrouped);
        
        System.out.println("\n=== Optional with Stream ===");
        Optional<String> longest = StreamTechniques.findLongestAnagram(
            new String[]{"eat", "tea", "ates", "eats"},
            "eat"
        );
        System.out.println("Longest anagram of 'eat': " + longest.orElse("none"));
        
        System.out.println("\n╔═══════════════════════════════════════════════════════════════╗");
        System.out.println("║                      COMPLETE!                                ║");
        System.out.println("╚═══════════════════════════════════════════════════════════════╝");
    }
}
