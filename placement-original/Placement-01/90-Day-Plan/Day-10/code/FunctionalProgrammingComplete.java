/*
 * FUNCTIONAL PROGRAMMING - COMPLETE GUIDE
 * Day 10: Streams API, Lambda Expressions & Functional Programming
 * 
 * TABLE OF CONTENTS:
 * 1. Functional Programming Principles
 * 2. Optional Class
 * 3. Function Composition
 * 4. Currying and Partial Application
 * 5. Higher-Order Functions
 * 6. Immutability
 * 7. Pure Functions
 * 8. Recursion in Functional Style
 * 9. Real-World Functional Patterns
 * 10. Interview Questions
 */

import java.util.*;
import java.util.function.*;
import java.util.stream.*;

public class FunctionalProgrammingComplete {

    // ============================================================================
    // SECTION 1: FUNCTIONAL PROGRAMMING PRINCIPLES
    // ============================================================================
    
    /*
     * FUNCTIONAL PROGRAMMING (FP) CORE CONCEPTS:
     * 
     * 1. FIRST-CLASS FUNCTIONS:
     *    - Functions are values (can be assigned, passed, returned)
     * 
     * 2. PURE FUNCTIONS:
     *    - Same input always produces same output
     *    - No side effects (no external state modification)
     * 
     * 3. IMMUTABILITY:
     *    - Data cannot be changed after creation
     *    - Create new objects instead of modifying existing
     * 
     * 4. HIGHER-ORDER FUNCTIONS:
     *    - Functions that take functions as arguments
     *    - Functions that return functions
     * 
     * 5. FUNCTION COMPOSITION:
     *    - Combine simple functions to build complex ones
     * 
     * 6. DECLARATIVE vs IMPERATIVE:
     *    - WHAT to do, not HOW to do it
     */
    
    public static class FunctionalPrinciples {
        
        public static void demonstratePrinciples() {
            System.out.println("=== Functional Programming Principles ===");
            
            System.out.println("""
                1. FIRST-CLASS FUNCTIONS:
                   Functions as values, passed as arguments, returned from functions
                
                2. PURE FUNCTIONS:
                   No side effects, deterministic (same input → same output)
                
                3. IMMUTABILITY:
                   Data never changes, create new instead of modify
                
                4. HIGHER-ORDER FUNCTIONS:
                   Functions that work with other functions
                
                5. COMPOSITION:
                   Build complex behavior from simple functions
                
                6. DECLARATIVE:
                   Express WHAT, not HOW
                """);
        }
        
        public static void demonstrateFirstClassFunctions() {
            System.out.println("\n=== First-Class Functions ===");
            
            // Assign function to variable
            Function<Integer, Integer> square = x -> x * x;
            System.out.println("Square of 5: " + square.apply(5));
            
            // Pass function as argument
            int result = applyOperation(5, square);
            System.out.println("Applied: " + result);
            
            // Return function from function
            Function<Integer, Integer> multiplier = getMultiplier(10);
            System.out.println("10 * 5 = " + multiplier.apply(5));
            
            // Store functions in collection
            List<Function<Integer, Integer>> operations = Arrays.asList(
                x -> x + 1,
                x -> x * 2,
                x -> x * x
            );
            
            int value = 3;
            for (Function<Integer, Integer> op : operations) {
                value = op.apply(value);
            }
            System.out.println("Chained operations: 3 -> " + value);
        }
        
        private static int applyOperation(int value, Function<Integer, Integer> operation) {
            return operation.apply(value);
        }
        
        private static Function<Integer, Integer> getMultiplier(int factor) {
            return x -> x * factor;
        }
        
        public static void demonstratePureFunctions() {
            System.out.println("\n=== Pure vs Impure Functions ===");
            
            // PURE: Same input always gives same output, no side effects
            Function<Integer, Integer> pureAdd = x -> x + 10;
            System.out.println("Pure: 5 + 10 = " + pureAdd.apply(5));
            System.out.println("Pure: 5 + 10 = " + pureAdd.apply(5));  // Always same
            
            // IMPURE: Uses external state
            ImpureCounter counter = new ImpureCounter();
            System.out.println("Impure: " + counter.increment());  // 1
            System.out.println("Impure: " + counter.increment());  // 2 (different!)
            
            // PURE function benefits: testable, cacheable, parallelizable
            int cached = pureAdd.apply(5);  // Can cache result
        }
    }
    
    static class ImpureCounter {
        private int count = 0;
        public int increment() { return ++count; }  // Side effect!
    }

    // ============================================================================
    // SECTION 2: OPTIONAL CLASS
    // ============================================================================
    
    /*
     * OPTIONAL<T>:
     * - Container that may or may not contain a value
     * - Helps avoid NullPointerException
     * - Forces explicit handling of absent values
     * - Part of functional programming style
     * 
     * METHODS:
     * - of(T value): Create Optional with value (throws if null)
     * - ofNullable(T value): Create Optional, empty if null
     * - empty(): Create empty Optional
     * - isPresent(): Check if value present
     * - isEmpty(): Check if value absent (Java 11+)
     * - get(): Get value (throws if absent)
     * - orElse(T other): Get value or default
     * - orElseGet(Supplier<T>): Get value or compute default
     * - orElseThrow(): Throw exception if absent
     * - ifPresent(Consumer<T>): Execute action if present
     * - ifPresentOrElse(Consumer, Runnable): Execute action or alternative
     * - map(Function): Transform value if present
     * - flatMap(Function): Transform and flatten
     * - filter(Predicate): Filter value
     */
    
    public static class OptionalExamples {
        
        public static void demonstrateOptionalCreation() {
            System.out.println("\n=== Creating Optional ===");
            
            // of() - value must not be null
            Optional<String> opt1 = Optional.of("Hello");
            System.out.println("of: " + opt1.get());
            
            // ofNullable() - value can be null
            Optional<String> opt2 = Optional.ofNullable("World");
            System.out.println("ofNullable (present): " + opt2.get());
            
            Optional<String> opt3 = Optional.ofNullable(null);
            System.out.println("ofNullable (null): " + opt3.isEmpty());
            
            // empty() - explicitly empty
            Optional<String> opt4 = Optional.empty();
            System.out.println("empty: " + opt4.isEmpty());
            
            // of(null) would throw NullPointerException
            // Optional<String> bad = Optional.of(null);  // DON'T DO THIS!
        }
        
        public static void demonstrateOptionalChecking() {
            System.out.println("\n=== Checking Optional ===");
            
            Optional<String> present = Optional.of("Value");
            Optional<String> absent = Optional.empty();
            
            // isPresent() / isEmpty()
            System.out.println("present.isPresent(): " + present.isPresent());
            System.out.println("absent.isPresent(): " + absent.isPresent());
            System.out.println("absent.isEmpty(): " + absent.isEmpty());
            
            // BAD: Using isPresent() + get() defeats purpose
            if (present.isPresent()) {
                System.out.println("BAD style: " + present.get());
            }
            
            // GOOD: Use functional methods
            present.ifPresent(val -> System.out.println("GOOD style: " + val));
        }
        
        public static void demonstrateOptionalRetrieval() {
            System.out.println("\n=== Retrieving Values ===");
            
            Optional<String> present = Optional.of("Hello");
            Optional<String> absent = Optional.empty();
            
            // get() - throws if absent (USE WITH CAUTION!)
            System.out.println("get(): " + present.get());
            // absent.get();  // NoSuchElementException!
            
            // orElse() - provide default value
            String val1 = absent.orElse("Default");
            System.out.println("orElse: " + val1);
            
            // orElseGet() - compute default lazily
            String val2 = absent.orElseGet(() -> {
                System.out.println("Computing default...");
                return "Computed Default";
            });
            System.out.println("orElseGet: " + val2);
            
            // orElseThrow() - throw custom exception
            try {
                absent.orElseThrow(() -> new IllegalStateException("Value absent!"));
            } catch (IllegalStateException e) {
                System.out.println("Caught: " + e.getMessage());
            }
            
            // orElse vs orElseGet
            System.out.println("\norElse vs orElseGet:");
            present.orElse(expensiveDefault());         // ALWAYS called
            present.orElseGet(() -> expensiveDefault()); // Only if absent
        }
        
        private static String expensiveDefault() {
            System.out.println("Expensive computation!");
            return "Expensive";
        }
        
        public static void demonstrateOptionalActions() {
            System.out.println("\n=== Optional Actions ===");
            
            Optional<String> present = Optional.of("Value");
            Optional<String> absent = Optional.empty();
            
            // ifPresent() - execute if present
            present.ifPresent(val -> System.out.println("Present: " + val));
            absent.ifPresent(val -> System.out.println("Not executed"));
            
            // ifPresentOrElse() - execute if present, else alternative
            present.ifPresentOrElse(
                val -> System.out.println("Has value: " + val),
                () -> System.out.println("No value")
            );
            
            absent.ifPresentOrElse(
                val -> System.out.println("Has value: " + val),
                () -> System.out.println("No value - executed!")
            );
        }
        
        public static void demonstrateOptionalTransformation() {
            System.out.println("\n=== Optional Transformation ===");
            
            Optional<String> opt = Optional.of("hello");
            
            // map() - transform value
            Optional<String> upper = opt.map(String::toUpperCase);
            System.out.println("map: " + upper.get());
            
            // Chaining map
            Optional<Integer> length = opt
                .map(String::toUpperCase)
                .map(String::length);
            System.out.println("length: " + length.get());
            
            // map on empty
            Optional<String> empty = Optional.empty();
            Optional<String> mapped = empty.map(String::toUpperCase);
            System.out.println("map on empty: " + mapped.isEmpty());
            
            // filter() - keep value if matches predicate
            Optional<String> filtered = opt.filter(s -> s.length() > 3);
            System.out.println("filter (match): " + filtered.isPresent());
            
            Optional<String> filtered2 = opt.filter(s -> s.length() > 10);
            System.out.println("filter (no match): " + filtered2.isEmpty());
        }
        
        public static void demonstrateOptionalFlatMap() {
            System.out.println("\n=== Optional flatMap ===");
            
            Optional<Person> person = Optional.of(new Person("Alice", 
                Optional.of(new Address("New York"))));
            
            // Problem: map returns Optional<Optional<Address>>
            Optional<Optional<Address>> nestedOpt = person.map(Person::getAddress);
            
            // Solution: flatMap flattens to Optional<Address>
            Optional<Address> address = person.flatMap(Person::getAddress);
            System.out.println("Address present: " + address.isPresent());
            
            // Chaining flatMap
            Optional<String> city = person
                .flatMap(Person::getAddress)
                .map(Address::getCity);
            System.out.println("City: " + city.orElse("Unknown"));
            
            // Person without address
            Optional<Person> person2 = Optional.of(new Person("Bob", Optional.empty()));
            Optional<String> city2 = person2
                .flatMap(Person::getAddress)
                .map(Address::getCity);
            System.out.println("City2: " + city2.orElse("Unknown"));
        }
        
        public static void demonstrateOptionalRealWorld() {
            System.out.println("\n=== Optional Real-World Example ===");
            
            UserRepository repo = new UserRepository();
            
            // Find user and print email
            repo.findById(1)
                .map(User::getEmail)
                .map(String::toUpperCase)
                .ifPresentOrElse(
                    email -> System.out.println("Email: " + email),
                    () -> System.out.println("User not found")
                );
            
            // Get email or default
            String email = repo.findById(999)
                .map(User::getEmail)
                .orElse("no-email@example.com");
            System.out.println("Default email: " + email);
            
            // Chain multiple operations
            String result = repo.findById(1)
                .filter(u -> u.getAge() > 18)
                .map(User::getName)
                .map(String::toUpperCase)
                .orElse("UNKNOWN");
            System.out.println("Adult user: " + result);
        }
    }
    
    static class Person {
        private String name;
        private Optional<Address> address;
        
        public Person(String name, Optional<Address> address) {
            this.name = name;
            this.address = address;
        }
        
        public String getName() { return name; }
        public Optional<Address> getAddress() { return address; }
    }
    
    static class Address {
        private String city;
        
        public Address(String city) {
            this.city = city;
        }
        
        public String getCity() { return city; }
    }
    
    static class User {
        private int id;
        private String name;
        private String email;
        private int age;
        
        public User(int id, String name, String email, int age) {
            this.id = id;
            this.name = name;
            this.email = email;
            this.age = age;
        }
        
        public int getId() { return id; }
        public String getName() { return name; }
        public String getEmail() { return email; }
        public int getAge() { return age; }
    }
    
    static class UserRepository {
        private Map<Integer, User> users = Map.of(
            1, new User(1, "Alice", "alice@email.com", 25),
            2, new User(2, "Bob", "bob@email.com", 30)
        );
        
        public Optional<User> findById(int id) {
            return Optional.ofNullable(users.get(id));
        }
    }

    // ============================================================================
    // SECTION 3: FUNCTION COMPOSITION
    // ============================================================================
    
    public static class FunctionComposition {
        
        public static void demonstrateCompose() {
            System.out.println("\n=== Function Composition - compose() ===");
            
            Function<Integer, Integer> multiplyBy2 = x -> x * 2;
            Function<Integer, Integer> add10 = x -> x + 10;
            
            // compose: g.compose(f) = g(f(x))
            // First apply f, then g
            Function<Integer, Integer> composed = add10.compose(multiplyBy2);
            
            // (5 * 2) + 10 = 20
            System.out.println("compose: " + composed.apply(5));
            
            // Chaining multiple
            Function<Integer, Integer> complex = add10
                .compose(multiplyBy2)    // First: x * 2
                .compose(x -> x + 1);     // Before that: x + 1
            
            // ((5 + 1) * 2) + 10 = 22
            System.out.println("multiple compose: " + complex.apply(5));
        }
        
        public static void demonstrateAndThen() {
            System.out.println("\n=== Function Composition - andThen() ===");
            
            Function<Integer, Integer> multiplyBy2 = x -> x * 2;
            Function<Integer, Integer> add10 = x -> x + 10;
            
            // andThen: f.andThen(g) = g(f(x))
            // First apply f, then g
            Function<Integer, Integer> composed = multiplyBy2.andThen(add10);
            
            // (5 * 2) + 10 = 20
            System.out.println("andThen: " + composed.apply(5));
            
            // Chaining multiple
            Function<Integer, Integer> complex = multiplyBy2
                .andThen(add10)           // Then: + 10
                .andThen(x -> x * x);     // Then: square
            
            // ((5 * 2) + 10)^2 = 400
            System.out.println("multiple andThen: " + complex.apply(5));
        }
        
        public static void demonstrateComposeVsAndThen() {
            System.out.println("\n=== compose vs andThen ===");
            
            Function<String, String> trim = String::trim;
            Function<String, String> toUpper = String::toUpperCase;
            
            String input = "  hello  ";
            
            // compose: toUpper.compose(trim) = toUpper(trim(x))
            Function<String, String> composed1 = toUpper.compose(trim);
            System.out.println("compose: '" + composed1.apply(input) + "'");  // HELLO
            
            // andThen: trim.andThen(toUpper) = toUpper(trim(x))
            Function<String, String> composed2 = trim.andThen(toUpper);
            System.out.println("andThen: '" + composed2.apply(input) + "'");  // HELLO
            
            // Same result! Different order of writing
        }
        
        public static void demonstrateComplexPipeline() {
            System.out.println("\n=== Complex Function Pipeline ===");
            
            // Build text processing pipeline
            Function<String, String> pipeline = ((Function<String, String>) String::trim)
                .andThen(String::toLowerCase)
                .andThen(s -> s.replaceAll("[^a-z ]", ""))
                .andThen(s -> s.replaceAll("\\s+", " "));
            
            String input = "  Hello,   WORLD!!!  123  ";
            String output = pipeline.apply(input);
            System.out.println("Input: '" + input + "'");
            System.out.println("Output: '" + output + "'");
            
            // Reusable pipeline
            List<String> texts = Arrays.asList(
                "  Test123  ",
                "HELLO!!!",
                "Java   Programming  "
            );
            
            List<String> processed = texts.stream()
                .map(pipeline)
                .toList();
            System.out.println("Processed: " + processed);
        }
        
        public static void demonstratePredicateComposition() {
            System.out.println("\n=== Predicate Composition ===");
            
            Predicate<Integer> isPositive = n -> n > 0;
            Predicate<Integer> isEven = n -> n % 2 == 0;
            Predicate<Integer> lessThan100 = n -> n < 100;
            
            // and()
            Predicate<Integer> positiveEven = isPositive.and(isEven);
            System.out.println("4 is positive and even: " + positiveEven.test(4));
            System.out.println("-2 is positive and even: " + positiveEven.test(-2));
            
            // or()
            Predicate<Integer> positiveOrEven = isPositive.or(isEven);
            System.out.println("-2 is positive or even: " + positiveOrEven.test(-2));
            
            // negate()
            Predicate<Integer> notPositive = isPositive.negate();
            System.out.println("-5 is not positive: " + notPositive.test(-5));
            
            // Complex composition
            Predicate<Integer> complex = isPositive
                .and(isEven)
                .and(lessThan100);
            
            List<Integer> numbers = Arrays.asList(-10, 2, 50, 100, 150, 3);
            List<Integer> filtered = numbers.stream()
                .filter(complex)
                .toList();
            System.out.println("Filtered (positive, even, <100): " + filtered);
        }
        
        public static void demonstrateConsumerComposition() {
            System.out.println("\n=== Consumer Composition ===");
            
            Consumer<String> print = System.out::println;
            Consumer<String> log = s -> System.out.println("[LOG] " + s);
            Consumer<String> upper = s -> System.out.println("UPPER: " + s.toUpperCase());
            
            // andThen()
            Consumer<String> combined = print.andThen(log).andThen(upper);
            combined.accept("Hello");
        }
    }

    // ============================================================================
    // SECTION 4: CURRYING AND PARTIAL APPLICATION
    // ============================================================================
    
    /*
     * CURRYING:
     * - Transform function with multiple arguments into sequence of functions
     * - Each function takes one argument
     * - f(x, y, z) → f(x)(y)(z)
     * 
     * PARTIAL APPLICATION:
     * - Fix some arguments of function, create new function with fewer arguments
     * - f(x, y, z) with x=5 → g(y, z) where g(y, z) = f(5, y, z)
     */
    
    public static class CurryingExamples {
        
        public static void demonstrateCurrying() {
            System.out.println("\n=== Currying ===");
            
            // Normal function: (a, b, c) -> result
            TriFunction<Integer, Integer, Integer, Integer> add3 = (a, b, c) -> a + b + c;
            System.out.println("Normal: " + add3.apply(1, 2, 3));
            
            // Curried: a -> b -> c -> result
            Function<Integer, Function<Integer, Function<Integer, Integer>>> add3Curried = 
                a -> b -> c -> a + b + c;
            
            System.out.println("Curried: " + add3Curried.apply(1).apply(2).apply(3));
            
            // Partially apply
            Function<Integer, Function<Integer, Integer>> add1 = add3Curried.apply(1);
            Function<Integer, Integer> add1And2 = add1.apply(2);
            System.out.println("Partial: " + add1And2.apply(3));
        }
        
        public static void demonstratePartialApplication() {
            System.out.println("\n=== Partial Application ===");
            
            // Original function: (format, value) -> String
            BiFunction<String, Object, String> formatter = (format, value) -> 
                String.format(format, value);
            
            // Partial: fix format
            Function<Object, String> currencyFormatter = value -> 
                formatter.apply("$%.2f", value);
            
            Function<Object, String> percentFormatter = value -> 
                formatter.apply("%.1f%%", value);
            
            System.out.println("Currency: " + currencyFormatter.apply(42.5));
            System.out.println("Percent: " + percentFormatter.apply(87.3));
            
            // Another example: logger with fixed prefix
            BiFunction<String, String, String> logger = (prefix, message) -> 
                prefix + message;
            
            Function<String, String> errorLogger = message -> logger.apply("[ERROR] ", message);
            Function<String, String> infoLogger = message -> logger.apply("[INFO] ", message);
            
            System.out.println(errorLogger.apply("Something went wrong"));
            System.out.println(infoLogger.apply("Operation successful"));
        }
        
        public static void demonstrateRealWorldCurrying() {
            System.out.println("\n=== Real-World Currying ===");
            
            // Email validator with configurable domain
            Function<String, Predicate<String>> emailValidatorForDomain = domain ->
                email -> email.endsWith("@" + domain);
            
            Predicate<String> gmailValidator = emailValidatorForDomain.apply("gmail.com");
            Predicate<String> yahooValidator = emailValidatorForDomain.apply("yahoo.com");
            
            System.out.println("test@gmail.com is gmail: " + gmailValidator.test("test@gmail.com"));
            System.out.println("test@yahoo.com is gmail: " + gmailValidator.test("test@yahoo.com"));
            
            // Discount calculator
            Function<Double, Function<Double, Double>> discountCalculator = 
                discountPercent -> price -> price * (1 - discountPercent / 100);
            
            Function<Double, Double> tenPercentOff = discountCalculator.apply(10.0);
            Function<Double, Double> twentyPercentOff = discountCalculator.apply(20.0);
            
            System.out.println("$100 with 10% off: $" + tenPercentOff.apply(100.0));
            System.out.println("$100 with 20% off: $" + twentyPercentOff.apply(100.0));
        }
    }
    
    @FunctionalInterface
    interface TriFunction<A, B, C, R> {
        R apply(A a, B b, C c);
    }

    // ============================================================================
    // SECTION 5: HIGHER-ORDER FUNCTIONS
    // ============================================================================
    
    /*
     * HIGHER-ORDER FUNCTIONS:
     * - Functions that take functions as parameters
     * - Functions that return functions
     * - Most stream operations are higher-order: map, filter, reduce
     */
    
    public static class HigherOrderFunctions {
        
        public static void demonstrateHigherOrderBasics() {
            System.out.println("\n=== Higher-Order Functions ===");
            
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
            
            // applyToEach: higher-order function taking function as parameter
            applyToEach(numbers, x -> System.out.print(x * 2 + " "));
            System.out.println();
            
            applyToEach(numbers, x -> System.out.print(x * x + " "));
            System.out.println();
            
            // filterWith: higher-order function taking predicate
            List<Integer> evens = filterWith(numbers, x -> x % 2 == 0);
            System.out.println("Evens: " + evens);
            
            List<Integer> greaterThan3 = filterWith(numbers, x -> x > 3);
            System.out.println("Greater than 3: " + greaterThan3);
        }
        
        private static <T> void applyToEach(List<T> list, Consumer<T> action) {
            for (T item : list) {
                action.accept(item);
            }
        }
        
        private static <T> List<T> filterWith(List<T> list, Predicate<T> predicate) {
            List<T> result = new ArrayList<>();
            for (T item : list) {
                if (predicate.test(item)) {
                    result.add(item);
                }
            }
            return result;
        }
        
        public static void demonstrateFunctionReturning() {
            System.out.println("\n=== Functions Returning Functions ===");
            
            // Factory functions
            Function<Integer, Function<Integer, Integer>> multiplierFactory = 
                factor -> x -> x * factor;
            
            Function<Integer, Integer> times2 = multiplierFactory.apply(2);
            Function<Integer, Integer> times10 = multiplierFactory.apply(10);
            
            System.out.println("5 * 2 = " + times2.apply(5));
            System.out.println("5 * 10 = " + times10.apply(5));
            
            // Predicate factory
            Function<Integer, Predicate<Integer>> greaterThanFactory = 
                threshold -> x -> x > threshold;
            
            Predicate<Integer> greaterThan10 = greaterThanFactory.apply(10);
            Predicate<Integer> greaterThan50 = greaterThanFactory.apply(50);
            
            System.out.println("20 > 10: " + greaterThan10.test(20));
            System.out.println("20 > 50: " + greaterThan50.test(20));
        }
        
        public static void demonstrateCustomHigherOrder() {
            System.out.println("\n=== Custom Higher-Order Functions ===");
            
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
            
            // Custom map
            List<Integer> squared = map(numbers, x -> x * x);
            System.out.println("Squared: " + squared);
            
            // Custom reduce
            int sum = reduce(numbers, 0, (acc, x) -> acc + x);
            System.out.println("Sum: " + sum);
            
            int product = reduce(numbers, 1, (acc, x) -> acc * x);
            System.out.println("Product: " + product);
            
            // Custom compose
            Function<Integer, Integer> add1 = x -> x + 1;
            Function<Integer, Integer> times2 = x -> x * 2;
            Function<Integer, Integer> composed = compose(times2, add1);
            System.out.println("(5 + 1) * 2 = " + composed.apply(5));
        }
        
        private static <T, R> List<R> map(List<T> list, Function<T, R> mapper) {
            List<R> result = new ArrayList<>();
            for (T item : list) {
                result.add(mapper.apply(item));
            }
            return result;
        }
        
        private static <T> T reduce(List<T> list, T identity, BinaryOperator<T> accumulator) {
            T result = identity;
            for (T item : list) {
                result = accumulator.apply(result, item);
            }
            return result;
        }
        
        private static <A, B, C> Function<A, C> compose(
                Function<B, C> f, Function<A, B> g) {
            return x -> f.apply(g.apply(x));
        }
    }

    // ============================================================================
    // SECTION 6: IMMUTABILITY
    // ============================================================================
    
    public static class ImmutabilityExamples {
        
        public static void demonstrateImmutability() {
            System.out.println("\n=== Immutability ===");
            
            // MUTABLE: Can change state
            MutablePoint mutable = new MutablePoint(5, 10);
            System.out.println("Mutable original: " + mutable);
            mutable.setX(20);  // Changed!
            System.out.println("Mutable modified: " + mutable);
            
            // IMMUTABLE: Cannot change state
            ImmutablePoint immutable = new ImmutablePoint(5, 10);
            System.out.println("Immutable original: " + immutable);
            ImmutablePoint modified = immutable.withX(20);  // Creates new!
            System.out.println("Immutable original after withX: " + immutable);  // Unchanged
            System.out.println("Immutable new instance: " + modified);
        }
        
        public static void demonstrateImmutableCollections() {
            System.out.println("\n=== Immutable Collections ===");
            
            // Mutable list
            List<String> mutableList = new ArrayList<>(Arrays.asList("a", "b", "c"));
            mutableList.add("d");  // Can modify
            System.out.println("Mutable: " + mutableList);
            
            // Immutable list (Java 9+)
            List<String> immutableList = List.of("a", "b", "c");
            // immutableList.add("d");  // UnsupportedOperationException!
            System.out.println("Immutable: " + immutableList);
            
            // Creating modified version
            List<String> withD = Stream.concat(
                immutableList.stream(),
                Stream.of("d")
            ).toList();
            System.out.println("Original: " + immutableList);
            System.out.println("With D: " + withD);
        }
        
        public static void demonstrateImmutableBenefits() {
            System.out.println("\n=== Immutability Benefits ===");
            System.out.println("""
                BENEFITS:
                1. Thread-Safe: No synchronization needed
                2. Predictable: State never changes unexpectedly
                3. Cacheable: Safe to cache immutable objects
                4. No Defensive Copies: Can share freely
                5. Easier Testing: No hidden state changes
                6. Functional Style: Enables pure functions
                
                TRADE-OFFS:
                1. Performance: More object creation
                2. Memory: Multiple versions of objects
                3. Verbosity: More code for modifications
                
                USE WHEN:
                - Value objects (Date, Money, Point)
                - Keys in maps
                - Shared data
                - Multi-threaded environments
                """);
        }
    }
    
    static class MutablePoint {
        private int x, y;
        public MutablePoint(int x, int y) { this.x = x; this.y = y; }
        public void setX(int x) { this.x = x; }
        public void setY(int y) { this.y = y; }
        @Override
        public String toString() { return "(" + x + ", " + y + ")"; }
    }
    
    static class ImmutablePoint {
        private final int x, y;
        public ImmutablePoint(int x, int y) { this.x = x; this.y = y; }
        public int getX() { return x; }
        public int getY() { return y; }
        public ImmutablePoint withX(int newX) { return new ImmutablePoint(newX, y); }
        public ImmutablePoint withY(int newY) { return new ImmutablePoint(x, newY); }
        @Override
        public String toString() { return "(" + x + ", " + y + ")"; }
    }

    // ============================================================================
    // SECTION 7: PURE FUNCTIONS
    // ============================================================================
    
    public static class PureFunctionExamples {
        
        private static int impureCounter = 0;
        
        public static void demonstratePureVsImpure() {
            System.out.println("\n=== Pure vs Impure Functions ===");
            
            // PURE: Same input always gives same output, no side effects
            Function<Integer, Integer> pureSquare = x -> x * x;
            System.out.println("Pure 5^2: " + pureSquare.apply(5));  // Always 25
            System.out.println("Pure 5^2: " + pureSquare.apply(5));  // Always 25
            
            // IMPURE: Modifies external state
            Function<Integer, Integer> impureIncrement = x -> {
                impureCounter++;  // Side effect!
                return x + impureCounter;
            };
            System.out.println("Impure 5: " + impureIncrement.apply(5));  // 6
            System.out.println("Impure 5: " + impureIncrement.apply(5));  // 7 (different!)
            
            // IMPURE: Depends on external state
            Function<Integer, Integer> impureAdd = x -> x + impureCounter;
            System.out.println("Impure add 5: " + impureAdd.apply(5));  // Depends on counter
            
            // IMPURE: I/O operations
            Consumer<String> impurePrint = System.out::println;  // Side effect: output
        }
        
        public static void demonstratePureFunctionBenefits() {
            System.out.println("\n=== Pure Function Benefits ===");
            System.out.println("""
                PURE FUNCTIONS:
                1. Predictable: Same input → same output
                2. Testable: Easy to unit test
                3. Cacheable: Can memoize results
                4. Parallelizable: Safe to run in parallel
                5. Composable: Easy to combine
                6. Reusable: No hidden dependencies
                
                REQUIREMENTS:
                1. No external state modification
                2. No external state reading (except parameters)
                3. No I/O operations
                4. Deterministic (no random, time, etc.)
                """);
        }
        
        public static void demonstrateMemoization() {
            System.out.println("\n=== Memoization (Caching Pure Functions) ===");
            
            // Expensive pure function
            Function<Integer, Integer> expensiveFibonacci = new Function<>() {
                public Integer apply(Integer n) {
                    System.out.println("Computing fib(" + n + ")");
                    if (n <= 1) return n;
                    return apply(n - 1) + apply(n - 2);
                }
            };
            
            System.out.println("Without memoization:");
            System.out.println("fib(5) = " + expensiveFibonacci.apply(5));
            
            // Memoized version
            Function<Integer, Integer> memoizedFib = memoize(expensiveFibonacci);
            System.out.println("\nWith memoization:");
            System.out.println("fib(5) = " + memoizedFib.apply(5));
            System.out.println("fib(5) again = " + memoizedFib.apply(5));  // Cached!
        }
        
        private static <T, R> Function<T, R> memoize(Function<T, R> function) {
            Map<T, R> cache = new HashMap<>();
            return input -> cache.computeIfAbsent(input, function);
        }
    }

    // ============================================================================
    // SECTION 8: RECURSION IN FUNCTIONAL STYLE
    // ============================================================================
    
    public static class RecursionExamples {
        
        public static void demonstrateRecursion() {
            System.out.println("\n=== Functional Recursion ===");
            
            // Factorial
            Function<Integer, Integer> factorial = new Function<>() {
                public Integer apply(Integer n) {
                    return n <= 1 ? 1 : n * apply(n - 1);
                }
            };
            System.out.println("5! = " + factorial.apply(5));
            
            // Sum of list
            Function<List<Integer>, Integer> sum = new Function<>() {
                public Integer apply(List<Integer> list) {
                    if (list.isEmpty()) return 0;
                    return list.get(0) + apply(list.subList(1, list.size()));
                }
            };
            System.out.println("Sum: " + sum.apply(Arrays.asList(1, 2, 3, 4, 5)));
        }
        
        public static void demonstrateTailRecursion() {
            System.out.println("\n=== Tail Recursion ===");
            
            // Regular recursion (not tail)
            System.out.println("Regular factorial(5): " + factorial(5));
            
            // Tail recursion (accumulator pattern)
            System.out.println("Tail factorial(5): " + factorialTail(5, 1));
            
            System.out.println("""
                
                TAIL RECURSION:
                - Last operation is recursive call
                - Can be optimized to iteration by compiler
                - Java doesn't optimize tail recursion (unlike Scala)
                - Use iteration in Java for performance
                """);
        }
        
        private static int factorial(int n) {
            if (n <= 1) return 1;
            return n * factorial(n - 1);  // NOT tail recursive (multiply after return)
        }
        
        private static int factorialTail(int n, int accumulator) {
            if (n <= 1) return accumulator;
            return factorialTail(n - 1, n * accumulator);  // Tail recursive!
        }
    }

    // ============================================================================
    // SECTION 9: REAL-WORLD FUNCTIONAL PATTERNS
    // ============================================================================
    
    public static class RealWorldPatterns {
        
        public static void demonstrateValidationPipeline() {
            System.out.println("\n=== Validation Pipeline ===");
            
            Predicate<String> notNull = Objects::nonNull;
            Predicate<String> notEmpty = s -> !s.isEmpty();
            Predicate<String> validLength = s -> s.length() >= 3;
            Predicate<String> alphanumeric = s -> s.matches("[a-zA-Z0-9]+");
            
            Predicate<String> validUsername = notNull
                .and(notEmpty)
                .and(validLength)
                .and(alphanumeric);
            
            String[] usernames = {"abc123", "ab", "abc@123", null, ""};
            for (String username : usernames) {
                System.out.println(username + " valid: " + validUsername.test(username));
            }
        }
        
        public static void demonstrateDataTransformationPipeline() {
            System.out.println("\n=== Data Transformation Pipeline ===");
            
            List<Order> orders = Arrays.asList(
                new Order(1, "Alice", 100.0, "PENDING"),
                new Order(2, "Bob", 200.0, "COMPLETED"),
                new Order(3, "Alice", 50.0, "COMPLETED"),
                new Order(4, "Charlie", 300.0, "CANCELLED")
            );
            
            // Functional pipeline
            double totalCompleted = orders.stream()
                .filter(o -> o.getStatus().equals("COMPLETED"))
                .mapToDouble(Order::getAmount)
                .sum();
            
            System.out.println("Total completed: $" + totalCompleted);
            
            // Group and transform
            Map<String, Double> customerTotals = orders.stream()
                .filter(o -> o.getStatus().equals("COMPLETED"))
                .collect(java.util.stream.Collectors.groupingBy(
                    Order::getCustomer,
                    java.util.stream.Collectors.summingDouble(Order::getAmount)
                ));
            
            System.out.println("Customer totals: " + customerTotals);
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
    }

    // ============================================================================
    // SECTION 10: INTERVIEW QUESTIONS
    // ============================================================================
    
    public static class InterviewQuestions {
        
        public static void commonInterviewQuestions() {
            System.out.println("\n=== Interview Questions ===");
            System.out.println("""
                Q1: What is functional programming?
                A: Programming paradigm based on pure functions, immutability, and function composition.
                   Focuses on WHAT to compute, not HOW.
                
                Q2: What is Optional and why use it?
                A: Container for value that may be absent. Helps avoid NullPointerException and
                   forces explicit handling of absence. More functional than null checks.
                
                Q3: What is function composition?
                A: Combining simple functions to create complex ones. andThen() and compose() methods.
                   f.andThen(g) = g(f(x)), f.compose(g) = f(g(x))
                
                Q4: What is a pure function?
                A: Function that:
                   - Same input always gives same output (deterministic)
                   - No side effects (no external state modification, I/O)
                   Benefits: testable, cacheable, parallelizable
                
                Q5: What is immutability?
                A: Objects whose state cannot be modified after creation. Create new objects instead
                   of modifying existing. Benefits: thread-safe, predictable, cacheable.
                
                Q6: What is currying?
                A: Transform function with multiple parameters into sequence of single-parameter functions.
                   f(x, y) → f(x)(y). Enables partial application.
                
                Q7: What is a higher-order function?
                A: Function that takes function as parameter or returns function.
                   Examples: map, filter, reduce, compose.
                
                Q8: Difference between map() and flatMap() in Optional?
                A: map() transforms value (returns Optional<R>).
                   flatMap() transforms and flattens (avoids Optional<Optional<R>>).
                
                Q9: When to use orElse() vs orElseGet()?
                A: orElse() always evaluates default value (eager).
                   orElseGet() computes default only if absent (lazy).
                   Use orElseGet() for expensive computations.
                
                Q10: Benefits of functional programming in Java?
                A: - More concise code (less boilerplate)
                   - Easier to test (pure functions)
                   - Better parallelization (immutability, no side effects)
                   - More declarative (readable)
                   - Less bugs (immutability, type safety)
                """);
        }
    }

    // ============================================================================
    // MAIN METHOD
    // ============================================================================
    
    public static void main(String[] args) {
        System.out.println("╔════════════════════════════════════════════════════════════╗");
        System.out.println("║      FUNCTIONAL PROGRAMMING - COMPLETE GUIDE               ║");
        System.out.println("║         Day 10: Functional Programming                     ║");
        System.out.println("╚════════════════════════════════════════════════════════════╝");
        
        // Section 1
        FunctionalPrinciples.demonstratePrinciples();
        FunctionalPrinciples.demonstrateFirstClassFunctions();
        FunctionalPrinciples.demonstratePureFunctions();
        
        // Section 2
        OptionalExamples.demonstrateOptionalCreation();
        OptionalExamples.demonstrateOptionalChecking();
        OptionalExamples.demonstrateOptionalRetrieval();
        OptionalExamples.demonstrateOptionalActions();
        OptionalExamples.demonstrateOptionalTransformation();
        OptionalExamples.demonstrateOptionalFlatMap();
        OptionalExamples.demonstrateOptionalRealWorld();
        
        // Section 3
        FunctionComposition.demonstrateCompose();
        FunctionComposition.demonstrateAndThen();
        FunctionComposition.demonstrateComposeVsAndThen();
        FunctionComposition.demonstrateComplexPipeline();
        FunctionComposition.demonstratePredicateComposition();
        FunctionComposition.demonstrateConsumerComposition();
        
        // Section 4
        CurryingExamples.demonstrateCurrying();
        CurryingExamples.demonstratePartialApplication();
        CurryingExamples.demonstrateRealWorldCurrying();
        
        // Section 5
        HigherOrderFunctions.demonstrateHigherOrderBasics();
        HigherOrderFunctions.demonstrateFunctionReturning();
        HigherOrderFunctions.demonstrateCustomHigherOrder();
        
        // Section 6
        ImmutabilityExamples.demonstrateImmutability();
        ImmutabilityExamples.demonstrateImmutableCollections();
        ImmutabilityExamples.demonstrateImmutableBenefits();
        
        // Section 7
        PureFunctionExamples.demonstratePureVsImpure();
        PureFunctionExamples.demonstratePureFunctionBenefits();
        PureFunctionExamples.demonstrateMemoization();
        
        // Section 8
        RecursionExamples.demonstrateRecursion();
        RecursionExamples.demonstrateTailRecursion();
        
        // Section 9
        RealWorldPatterns.demonstrateValidationPipeline();
        RealWorldPatterns.demonstrateDataTransformationPipeline();
        
        // Section 10
        InterviewQuestions.commonInterviewQuestions();
        
        System.out.println("\n╔════════════════════════════════════════════════════════════╗");
        System.out.println("║      FUNCTIONAL PROGRAMMING GUIDE COMPLETE!                ║");
        System.out.println("╚════════════════════════════════════════════════════════════╝");
    }
}
