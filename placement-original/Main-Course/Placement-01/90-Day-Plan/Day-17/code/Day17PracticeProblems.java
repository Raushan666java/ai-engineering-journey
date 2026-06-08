/**
 * DAY 17 - ADVANCED JAVA FEATURES
 * Day17PracticeProblems.java
 * 
 * Comprehensive practice problems covering:
 * - Lambda Expressions (8 problems)
 * - Streams API (8 problems)
 * - Optional API (8 problems)
 * - Module System (8 problems)
 * - Advanced Patterns (8 problems)
 * 
 * Total: 40+ problems with complete solutions
 */

import java.util.*;
import java.util.stream.*;
import java.util.function.*;

public class Day17PracticeProblems {

    // ============================================================
    // SECTION 1: LAMBDA EXPRESSIONS (8 problems)
    // ============================================================

    static class LambdaProblems {
        
        // Problem 1: Create functional interface and implement with lambda
        static void problem1() {
            @FunctionalInterface
            interface Adder {
                int add(int a, int b);
            }
            
            Adder adder = (a, b) -> a + b;
            System.out.println("Problem 1 - Lambda adder: 5 + 3 = " + 
                adder.add(5, 3));
        }
        
        // Problem 2: Method reference vs Lambda
        static void problem2() {
            List<String> words = Arrays.asList("apple", "banana", "cherry");
            
            // Using lambda
            words.forEach(w -> System.out.println("Lambda: " + w));
            
            // Using method reference
            System.out.println("Problem 2 - Method references:");
            words.forEach(System.out::println);
        }
        
        // Problem 3: Variable capture and closure
        static void problem3() {
            int factor = 2;
            Function<Integer, Integer> multiply = x -> x * factor;
            
            System.out.println("Problem 3 - Variable capture:");
            System.out.println("Multiply 10 by factor 2: " + 
                multiply.apply(10));
        }
        
        // Problem 4: Filter with predicate lambda
        static void problem4() {
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8);
            Predicate<Integer> isEven = n -> n % 2 == 0;
            
            List<Integer> evens = numbers.stream()
                                        .filter(isEven)
                                        .toList();
            System.out.println("Problem 4 - Filter evens: " + evens);
        }
        
        // Problem 5: Functional composition
        static void problem5() {
            Function<Integer, Integer> square = x -> x * x;
            Function<Integer, Integer> addTen = x -> x + 10;
            
            Function<Integer, Integer> composed = 
                square.andThen(addTen);
            
            System.out.println("Problem 5 - Composition (3^2 + 10): " + 
                composed.apply(3));
        }
        
        // Problem 6: Consumer with lambda
        static void problem6() {
            List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
            Consumer<String> printWithPrefix = 
                name -> System.out.println("  Name: " + name);
            
            System.out.println("Problem 6 - Consumer with lambda:");
            names.forEach(printWithPrefix);
        }
        
        // Problem 7: BiFunction with lambda
        static void problem7() {
            BiFunction<String, String, String> combine = 
                (first, second) -> first + " " + second;
            
            String fullName = combine.apply("John", "Doe");
            System.out.println("Problem 7 - BiFunction result: " + fullName);
        }
        
        // Problem 8: Constructor reference
        static void problem8() {
            class Person {
                String name;
                int age;
                Person(String name, int age) {
                    this.name = name;
                    this.age = age;
                }
                @Override
                public String toString() {
                    return name + "(" + age + ")";
                }
            }
            
            BiFunction<String, Integer, Person> constructor = 
                Person::new;
            Person p = constructor.apply("David", 28);
            System.out.println("Problem 8 - Constructor reference: " + p);
        }
    }

    // ============================================================
    // SECTION 2: STREAMS API (8 problems)
    // ============================================================

    static class StreamProblems {
        
        // Problem 9: Filter and map stream
        static void problem9() {
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8);
            
            List<Integer> result = numbers.stream()
                                         .filter(n -> n % 2 == 0)
                                         .map(n -> n * 2)
                                         .toList();
            System.out.println("Problem 9 - Even numbers doubled: " + result);
        }
        
        // Problem 10: FlatMap for nested structures
        static void problem10() {
            List<List<Integer>> lists = Arrays.asList(
                Arrays.asList(1, 2),
                Arrays.asList(3, 4),
                Arrays.asList(5, 6)
            );
            
            List<Integer> flattened = lists.stream()
                                          .flatMap(List::stream)
                                          .toList();
            System.out.println("Problem 10 - Flattened: " + flattened);
        }
        
        // Problem 11: Reduce for aggregation
        static void problem11() {
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
            
            int sum = numbers.stream()
                            .reduce(0, (a, b) -> a + b);
            int product = numbers.stream()
                                .reduce(1, (a, b) -> a * b);
            
            System.out.println("Problem 11 - Sum: " + sum + 
                ", Product: " + product);
        }
        
        // Problem 12: Collectors.groupingBy
        static void problem12() {
            List<String> words = Arrays.asList(
                "apple", "apricot", "banana", "blueberry", "cherry"
            );
            
            Map<Character, List<String>> grouped = words.stream()
                .collect(Collectors.groupingBy(w -> w.charAt(0)));
            System.out.println("Problem 12 - Grouped by first letter: " + 
                grouped);
        }
        
        // Problem 13: Distinct and sorted
        static void problem13() {
            List<Integer> numbers = Arrays.asList(
                1, 2, 2, 3, 3, 3, 4, 4, 4, 4
            );
            
            List<Integer> result = numbers.stream()
                                         .distinct()
                                         .sorted()
                                         .toList();
            System.out.println("Problem 13 - Distinct sorted: " + result);
        }
        
        // Problem 14: Collectors.joining strings
        static void problem14() {
            List<String> words = Arrays.asList("Hello", "World", "Java");
            
            String joined = words.stream()
                                .collect(Collectors.joining(", "));
            System.out.println("Problem 14 - Joined: " + joined);
        }
        
        // Problem 15: Stream with limit and skip
        static void problem15() {
            List<Integer> numbers = Arrays.asList(
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10
            );
            
            List<Integer> result = numbers.stream()
                                         .skip(2)
                                         .limit(5)
                                         .toList();
            System.out.println("Problem 15 - Skip 2, limit 5: " + result);
        }
        
        // Problem 16: Collectors.summarizingInt
        static void problem16() {
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
            
            IntSummaryStatistics stats = numbers.stream()
                .collect(Collectors.summarizingInt(Integer::intValue));
            
            System.out.println("Problem 16 - Stats: count=" + 
                stats.getCount() + ", avg=" + stats.getAverage() + 
                ", max=" + stats.getMax());
        }
    }

    // ============================================================
    // SECTION 3: OPTIONAL API (8 problems)
    // ============================================================

    static class OptionalProblems {
        
        // Problem 17: Optional.of vs Optional.ofNullable
        static void problem17() {
            String value = "Present";
            Optional<String> opt1 = Optional.of(value);
            
            String nullValue = null;
            Optional<String> opt2 = Optional.ofNullable(nullValue);
            
            System.out.println("Problem 17 - Optional.of: " + opt1 + 
                ", ofNullable(null): " + opt2);
        }
        
        // Problem 18: Optional.map and filter
        static void problem18() {
            Optional<String> name = Optional.of("Alice");
            
            Optional<Integer> length = name.filter(n -> n.length() > 2)
                                          .map(String::length);
            System.out.println("Problem 18 - Filtered and mapped: " + length);
        }
        
        // Problem 19: Optional.flatMap for chaining
        static void problem19() {
            Optional<String> username = Optional.of("john");
            
            Optional<String> email = username.flatMap(u -> 
                Optional.of(u + "@example.com")
            );
            System.out.println("Problem 19 - FlatMap result: " + email);
        }
        
        // Problem 20: Optional.orElse and orElseGet
        static void problem20() {
            Optional<String> empty = Optional.empty();
            
            String result1 = empty.orElse("Default");
            String result2 = empty.orElseGet(() -> "Computed");
            
            System.out.println("Problem 20 - orElse: " + result1 + 
                ", orElseGet: " + result2);
        }
        
        // Problem 21: Optional in stream
        static void problem21() {
            List<Optional<String>> optionals = Arrays.asList(
                Optional.of("A"),
                Optional.empty(),
                Optional.of("B"),
                Optional.empty(),
                Optional.of("C")
            );
            
            List<String> values = optionals.stream()
                                          .flatMap(Optional::stream)
                                          .toList();
            System.out.println("Problem 21 - Stream from optionals: " + 
                values);
        }
        
        // Problem 22: Optional with multiple conditions
        static void problem22() {
            Optional<Integer> age = Optional.of(25);
            
            Optional<String> status = age.filter(a -> a >= 18)
                                        .filter(a -> a < 65)
                                        .map(a -> "Working age");
            
            System.out.println("Problem 22 - Age status: " + 
                status.orElse("Not working age"));
        }
        
        // Problem 23: Optional.ifPresentOrElse
        static void problem23() {
            Optional<String> value = Optional.of("Found");
            
            value.ifPresentOrElse(
                v -> System.out.println("Problem 23 - Present: " + v),
                () -> System.out.println("Empty")
            );
        }
        
        // Problem 24: Combining multiple Optionals
        static void problem24() {
            Optional<String> firstName = Optional.of("John");
            Optional<String> lastName = Optional.of("Doe");
            
            Optional<String> fullName = firstName.flatMap(f -> 
                lastName.map(l -> f + " " + l)
            );
            System.out.println("Problem 24 - Full name: " + 
                fullName.orElse("Unknown"));
        }
    }

    // ============================================================
    // SECTION 4: MODULE SYSTEM (8 problems)
    // ============================================================

    static class ModuleSystemProblems {
        
        // Problem 25: Examine current module
        static void problem25() {
            Module current = Day17PracticeProblems.class.getModule();
            System.out.println("Problem 25 - Current module: " + 
                current.getName() + ", Named: " + current.isNamed());
        }
        
        // Problem 26: List platform modules
        static void problem26() {
            System.out.println("Problem 26 - Platform modules (first 5):");
            ModuleLayer.boot()
                      .modules()
                      .stream()
                      .map(Module::getName)
                      .sorted()
                      .limit(5)
                      .forEach(name -> System.out.println("  " + name));
        }
        
        // Problem 27: Module descriptor information
        static void problem27() {
            Module java_base = ModuleLayer.boot()
                .findModule("java.base")
                .orElse(null);
            
            if (java_base != null) {
                System.out.println("Problem 27 - java.base:");
                System.out.println("  Packages: " + 
                    java_base.getPackages().size());
            }
        }
        
        // Problem 28: Check module accessibility
        static void problem28() {
            Module current = Day17PracticeProblems.class.getModule();
            Module java_base = ModuleLayer.boot()
                .findModule("java.base")
                .orElse(null);
            
            if (java_base != null) {
                System.out.println("Problem 28 - Module accessibility:");
                System.out.println("  Can access java.base: " + 
                    current.canUse(java_base));
            }
        }
        
        // Problem 29: Module configuration concepts
        static void problem29() {
            System.out.println("Problem 29 - Module configuration:");
            System.out.println("  module-info.java structure:");
            System.out.println("    - requires <module>");
            System.out.println("    - requires transitive <module>");
            System.out.println("    - exports <package>");
            System.out.println("    - opens <package>");
            System.out.println("    - provides <interface> with <impl>");
            System.out.println("    - uses <interface>");
        }
        
        // Problem 30: Module versioning
        static void problem30() {
            Package pkg = Day17PracticeProblems.class.getPackage();
            String implVersion = pkg.getImplementationVersion();
            String specVersion = pkg.getSpecificationVersion();
            
            System.out.println("Problem 30 - Versioning:");
            System.out.println("  Implementation: " + implVersion);
            System.out.println("  Specification: " + specVersion);
        }
        
        // Problem 31: Automatic vs named modules
        static void problem31() {
            System.out.println("Problem 31 - Module types:");
            System.out.println("  Named modules:");
            System.out.println("    - Have module-info.java");
            System.out.println("    - Explicit dependencies");
            System.out.println("  Automatic modules:");
            System.out.println("    - .jar on module-path");
            System.out.println("    - Auto-generated module name");
            System.out.println("  Unnamed modules:");
            System.out.println("    - Code on --class-path");
        }
        
        // Problem 32: Module layer concepts
        static void problem32() {
            ModuleLayer boot = ModuleLayer.boot();
            System.out.println("Problem 32 - Module layer:");
            System.out.println("  Boot modules count: " + 
                boot.modules().size());
            System.out.println("  Is boot layer: " + 
                boot.equals(ModuleLayer.boot()));
        }
    }

    // ============================================================
    // SECTION 5: ADVANCED PATTERNS (8 problems)
    // ============================================================

    static class AdvancedPatterns {
        
        // Problem 33: Stream and Optional combination
        static void problem33() {
            List<Optional<Integer>> values = Arrays.asList(
                Optional.of(1),
                Optional.empty(),
                Optional.of(2),
                Optional.of(3)
            );
            
            int sum = values.stream()
                           .flatMap(Optional::stream)
                           .reduce(0, Integer::sum);
            System.out.println("Problem 33 - Stream/Optional sum: " + sum);
        }
        
        // Problem 34: Lambda with exception handling
        static void problem34() {
            List<String> numbers = Arrays.asList("1", "2", "abc", "4");
            
            List<Integer> parsed = numbers.stream()
                .mapMulti((str, consumer) -> {
                    try {
                        consumer.accept(Integer.parseInt(str));
                    } catch (NumberFormatException e) {
                        // Skip invalid
                    }
                })
                .toList();
            System.out.println("Problem 34 - Parsed: " + parsed);
        }
        
        // Problem 35: Parallel streams
        static void problem35() {
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
            
            long sum = numbers.parallelStream()
                             .map(n -> n * n)
                             .reduce(0L, Long::sum);
            System.out.println("Problem 35 - Parallel sum of squares: " + 
                sum);
        }
        
        // Problem 36: Functional builder pattern
        static void problem36() {
            class Person {
                String name;
                int age;
                String email;
                
                Person(String name, int age, String email) {
                    this.name = name;
                    this.age = age;
                    this.email = email;
                }
                
                @Override
                public String toString() {
                    return name + ", " + age + ", " + email;
                }
            }
            
            Function<String, Function<Integer, Function<String, Person>>> 
                builder = name -> age -> email -> new Person(name, age, email);
            
            Person p = builder.apply("Alice").apply(28)
                             .apply("alice@email.com");
            System.out.println("Problem 36 - Built: " + p);
        }
        
        // Problem 37: Stream collectors to custom object
        static void problem37() {
            List<String> words = Arrays.asList("apple", "banana", "cherry");
            
            Map<Integer, List<String>> grouped = words.stream()
                .collect(Collectors.groupingBy(String::length));
            System.out.println("Problem 37 - Words by length: " + grouped);
        }
        
        // Problem 38: Complex stream pipeline
        static void problem38() {
            List<Integer> numbers = Arrays.asList(
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10
            );
            
            Map<Boolean, List<Integer>> result = numbers.stream()
                .filter(n -> n > 2)
                .map(n -> n * 2)
                .collect(Collectors.partitioningBy(n -> n > 10));
            
            System.out.println("Problem 38 - Partitioned: " + result);
        }
        
        // Problem 39: Lambda with stateful operations
        static void problem39() {
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
            
            class Counter {
                int count = 0;
            }
            Counter counter = new Counter();
            
            List<Integer> withIndex = numbers.stream()
                .map(n -> n + (counter.count++))
                .toList();
            System.out.println("Problem 39 - With index: " + withIndex);
        }
        
        // Problem 40: Combining lambdas and method references
        static void problem40() {
            List<String> words = Arrays.asList(
                "apple", "banana", "cherry", "apricot"
            );
            
            String result = words.stream()
                                .filter(w -> w.startsWith("a"))
                                .map(String::toUpperCase)
                                .collect(Collectors.joining(", "));
            System.out.println("Problem 40 - A-words: " + result);
        }
    }

    // ============================================================
    // MAIN EXECUTION
    // ============================================================

    public static void main(String[] args) {
        System.out.println("╔══════════════════════════════════════════════════════════╗");
        System.out.println("║     DAY 17: ADVANCED JAVA FEATURES - PRACTICE PROBLEMS   ║");
        System.out.println("╚══════════════════════════════════════════════════════════╝");
        
        System.out.println("\n--- LAMBDA EXPRESSIONS (Problems 1-8) ---");
        LambdaProblems.problem1();
        LambdaProblems.problem2();
        LambdaProblems.problem3();
        LambdaProblems.problem4();
        LambdaProblems.problem5();
        LambdaProblems.problem6();
        LambdaProblems.problem7();
        LambdaProblems.problem8();
        
        System.out.println("\n--- STREAMS API (Problems 9-16) ---");
        StreamProblems.problem9();
        StreamProblems.problem10();
        StreamProblems.problem11();
        StreamProblems.problem12();
        StreamProblems.problem13();
        StreamProblems.problem14();
        StreamProblems.problem15();
        StreamProblems.problem16();
        
        System.out.println("\n--- OPTIONAL API (Problems 17-24) ---");
        OptionalProblems.problem17();
        OptionalProblems.problem18();
        OptionalProblems.problem19();
        OptionalProblems.problem20();
        OptionalProblems.problem21();
        OptionalProblems.problem22();
        OptionalProblems.problem23();
        OptionalProblems.problem24();
        
        System.out.println("\n--- MODULE SYSTEM (Problems 25-32) ---");
        ModuleSystemProblems.problem25();
        ModuleSystemProblems.problem26();
        ModuleSystemProblems.problem27();
        ModuleSystemProblems.problem28();
        ModuleSystemProblems.problem29();
        ModuleSystemProblems.problem30();
        ModuleSystemProblems.problem31();
        ModuleSystemProblems.problem32();
        
        System.out.println("\n--- ADVANCED PATTERNS (Problems 33-40) ---");
        AdvancedPatterns.problem33();
        AdvancedPatterns.problem34();
        AdvancedPatterns.problem35();
        AdvancedPatterns.problem36();
        AdvancedPatterns.problem37();
        AdvancedPatterns.problem38();
        AdvancedPatterns.problem39();
        AdvancedPatterns.problem40();
        
        System.out.println("\n╔══════════════════════════════════════════════════════════╗");
        System.out.println("║  40+ PRACTICE PROBLEMS SOLVED SUCCESSFULLY              ║");
        System.out.println("║  ALL ADVANCED JAVA FEATURES DEMONSTRATED                ║");
        System.out.println("╚══════════════════════════════════════════════════════════╝");
    }
}
