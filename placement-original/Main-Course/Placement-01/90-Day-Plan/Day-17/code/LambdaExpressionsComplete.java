/**
 * DAY 17 - ADVANCED JAVA FEATURES
 * LambdaExpressionsComplete.java
 * 
 * Comprehensive guide to Lambda Expressions and functional programming
 * in Java (Java 8+ features with practical examples)
 * 
 * Topics:
 * 1. Lambda Syntax and Basics
 * 2. Functional Interfaces
 * 3. Method References
 * 4. Variable Capture
 * 5. Lambda Best Practices
 * 
 * Examples: 50+
 * Interview Q&A: 25
 */

public class LambdaExpressionsComplete {

    // ============================================================
    // SECTION 1: LAMBDA SYNTAX FUNDAMENTALS
    // ============================================================

    /**
     * Basic Lambda Syntax:
     * (parameters) -> expression
     * (parameters) -> { statements; }
     */
    public static class LambdaSyntax {
        
        // Example 1: No parameters
        static Runnable noParam = () -> System.out.println("Hello Lambda");
        
        // Example 2: Single parameter (no parentheses needed)
        static java.util.function.Consumer<String> singleParam = 
            message -> System.out.println(message);
        
        // Example 3: Single parameter (with parentheses)
        static java.util.function.Consumer<String> singleParamParen = 
            (message) -> System.out.println(message);
        
        // Example 4: Multiple parameters
        static java.util.function.BiFunction<Integer, Integer, Integer> multiParam = 
            (a, b) -> a + b;
        
        // Example 5: Lambda with explicit types
        static java.util.function.BiFunction<Integer, Integer, Integer> withTypes = 
            (Integer a, Integer b) -> a * b;
        
        // Example 6: Single statement body
        static java.util.function.Function<Integer, Integer> square = 
            x -> x * x;
        
        // Example 7: Multiple statement body (requires braces)
        static java.util.function.Function<Integer, Integer> complex = x -> {
            int result = x * x;
            result += x;
            return result;
        };
        
        // Example 8: Lambda with variable declaration
        static java.util.function.Predicate<Integer> isPositive = 
            num -> num > 0;
        
        // Example 9: Lambda returning boolean
        static java.util.function.BiPredicate<String, String> equals = 
            (s1, s2) -> s1.equals(s2);
        
        // Example 10: Lambda for list filtering
        java.util.List<Integer> numbers = java.util.Arrays.asList(1, 2, 3, 4, 5);
        java.util.List<Integer> evens = 
            numbers.stream().filter(n -> n % 2 == 0).toList();

        public static void demonstrateSyntax() {
            System.out.println("\n=== LAMBDA SYNTAX DEMONSTRATIONS ===");
            
            // No parameters
            noParam.run();
            
            // Single parameter
            singleParam.accept("Single parameter lambda");
            
            // Multiple parameters
            Integer sum = multiParam.apply(5, 3);
            System.out.println("Sum of 5 + 3 = " + sum);
            
            // With explicit types
            Integer product = withTypes.apply(4, 7);
            System.out.println("Product of 4 * 7 = " + product);
            
            // Square function
            System.out.println("Square of 6 = " + square.apply(6));
            
            // Complex lambda
            System.out.println("Complex function with x=5: " + complex.apply(5));
            
            // Predicate
            System.out.println("Is 5 positive? " + isPositive.test(5));
            System.out.println("Is -3 positive? " + isPositive.test(-3));
        }
    }

    // ============================================================
    // SECTION 2: FUNCTIONAL INTERFACES
    // ============================================================

    /**
     * Functional Interface: Interface with exactly ONE abstract method
     * Lambda expressions can only implement functional interfaces
     */
    
    @FunctionalInterface
    interface Calculator {
        int calculate(int a, int b);
    }
    
    @FunctionalInterface
    interface StringTransformer {
        String transform(String input);
    }
    
    @FunctionalInterface
    interface Validator<T> {
        boolean isValid(T value);
    }
    
    public static class FunctionalInterfaceDemo {
        
        // Example 11: Using custom functional interface
        static Calculator add = (a, b) -> a + b;
        static Calculator subtract = (a, b) -> a - b;
        static Calculator multiply = (a, b) -> a * b;
        static Calculator divide = (a, b) -> a / b;
        
        // Example 12: StringTransformer
        static StringTransformer toUpperCase = str -> str.toUpperCase();
        static StringTransformer reverse = str -> 
            new StringBuilder(str).reverse().toString();
        static StringTransformer addExclamation = str -> str + "!";
        
        // Example 13: Generic validator
        static Validator<Integer> positiveValidator = x -> x > 0;
        static Validator<String> emailValidator = 
            email -> email.contains("@") && email.contains(".");
        static Validator<String> lengthValidator = 
            str -> str.length() >= 5;
        
        // Example 14: Higher-order function (returns lambda)
        static Calculator createMultiplier(int factor) {
            return (a, b) -> (a + b) * factor;
        }
        
        // Example 15: Function composition
        static StringTransformer chain(StringTransformer first, 
                                      StringTransformer second) {
            return input -> second.transform(first.transform(input));
        }
        
        // Example 16: Conditional lambda
        static <T> boolean validateWithMultiple(T value, 
                                                java.util.List<Validator<T>> validators) {
            return validators.stream().allMatch(v -> v.isValid(value));
        }

        public static void demonstrateFunctionalInterfaces() {
            System.out.println("\n=== FUNCTIONAL INTERFACE DEMONSTRATIONS ===");
            
            // Calculator examples
            System.out.println("5 + 3 = " + add.calculate(5, 3));
            System.out.println("10 - 4 = " + subtract.calculate(10, 4));
            System.out.println("6 * 7 = " + multiply.calculate(6, 7));
            System.out.println("20 / 4 = " + divide.calculate(20, 4));
            
            // StringTransformer examples
            String text = "hello";
            System.out.println("Uppercase: " + toUpperCase.transform(text));
            System.out.println("Reversed: " + reverse.transform(text));
            System.out.println("With exclamation: " + addExclamation.transform(text));
            
            // Validator examples
            System.out.println("Is 10 positive? " + positiveValidator.isValid(10));
            System.out.println("Is -5 positive? " + positiveValidator.isValid(-5));
            System.out.println("Is 'test@example.com' valid email? " + 
                emailValidator.isValid("test@example.com"));
            System.out.println("Is 'hello' >= 5 chars? " + 
                lengthValidator.isValid("hello"));
            
            // Higher-order function
            Calculator multiplier = createMultiplier(2);
            System.out.println("(5 + 3) * 2 = " + multiplier.calculate(5, 3));
            
            // Function composition
            StringTransformer combined = chain(
                str -> str + " World",
                str -> str.toUpperCase()
            );
            System.out.println("Composed: " + combined.transform("hello"));
            
            // Multiple validators
            java.util.List<Validator<String>> stringValidators = 
                java.util.Arrays.asList(lengthValidator, emailValidator);
            System.out.println("Validate 'test@email.com': " + 
                validateWithMultiple("test@email.com", stringValidators));
        }
    }

    // ============================================================
    // SECTION 3: BUILT-IN FUNCTIONAL INTERFACES
    // ============================================================

    /**
     * Java provides built-in functional interfaces in java.util.function:
     * - Function<T, R>: T -> R
     * - BiFunction<T, U, R>: (T, U) -> R
     * - Predicate<T>: T -> boolean
     * - BiPredicate<T, U>: (T, U) -> boolean
     * - Consumer<T>: T -> void
     * - BiConsumer<T, U>: (T, U) -> void
     * - Supplier<T>: void -> T
     * - UnaryOperator<T>: T -> T
     * - BinaryOperator<T>: (T, T) -> T
     */
    
    public static class BuiltInFunctionalInterfaces {
        
        // Example 17: Function interface
        static java.util.function.Function<String, Integer> stringLength = 
            s -> s.length();
        
        static java.util.function.Function<Integer, Integer> doubleValue = 
            x -> x * 2;
        
        // Example 18: BiFunction
        static java.util.function.BiFunction<Integer, Integer, String> format = 
            (a, b) -> String.format("a=%d, b=%d, sum=%d", a, b, a + b);
        
        // Example 19: Predicate
        static java.util.function.Predicate<String> isNotEmpty = 
            s -> !s.isEmpty();
        
        static java.util.function.Predicate<Integer> isEven = 
            x -> x % 2 == 0;
        
        // Example 20: BiPredicate
        static java.util.function.BiPredicate<Integer, Integer> isGreater = 
            (a, b) -> a > b;
        
        // Example 21: Consumer
        static java.util.function.Consumer<String> printFormatted = 
            s -> System.out.println("[Output] " + s);
        
        // Example 22: BiConsumer
        static java.util.function.BiConsumer<String, Integer> printWithCount = 
            (s, count) -> System.out.println(s + " (count=" + count + ")");
        
        // Example 23: Supplier
        static java.util.function.Supplier<String> randomMessage = () -> {
            java.util.Random rand = new java.util.Random();
            String[] messages = {"Hello", "Hi", "Hey", "Greetings"};
            return messages[rand.nextInt(messages.length)];
        };
        
        // Example 24: UnaryOperator
        static java.util.function.UnaryOperator<Integer> increment = 
            x -> x + 1;
        
        // Example 25: BinaryOperator
        static java.util.function.BinaryOperator<Integer> max = 
            (a, b) -> Math.max(a, b);
        
        // Example 26: Function composition
        static java.util.function.Function<String, String> pipeline = 
            stringLength.andThen(Object::toString)
                       .andThen(s -> "Length: " + s);
        
        // Example 27: Predicate composition
        static java.util.function.Predicate<String> longString = 
            s -> s.length() > 5;
        
        static java.util.function.Predicate<String> validString = 
            isNotEmpty.and(longString);

        public static void demonstrateBuiltInInterfaces() {
            System.out.println("\n=== BUILT-IN FUNCTIONAL INTERFACES ===");
            
            // Function
            System.out.println("Length of 'hello': " + stringLength.apply("hello"));
            System.out.println("Double of 5: " + doubleValue.apply(5));
            
            // BiFunction
            System.out.println("Format: " + format.apply(3, 7));
            
            // Predicate
            System.out.println("Is 'hello' not empty? " + isNotEmpty.test("hello"));
            System.out.println("Is 4 even? " + isEven.test(4));
            System.out.println("Is 5 even? " + isEven.test(5));
            
            // BiPredicate
            System.out.println("Is 10 > 5? " + isGreater.test(10, 5));
            System.out.println("Is 3 > 8? " + isGreater.test(3, 8));
            
            // Consumer
            printFormatted.accept("This is a test");
            
            // BiConsumer
            printWithCount.accept("Items", 5);
            
            // Supplier
            System.out.println("Random message: " + randomMessage.get());
            
            // UnaryOperator
            System.out.println("Increment 10: " + increment.apply(10));
            
            // BinaryOperator
            System.out.println("Max of 15 and 8: " + max.apply(15, 8));
            
            // Function composition
            System.out.println("Pipeline result: " + pipeline.apply("test"));
            
            // Predicate composition
            System.out.println("Is 'hello' valid? " + validString.test("hello"));
            System.out.println("Is 'hi' valid? " + validString.test("hi"));
        }
    }

    // ============================================================
    // SECTION 4: METHOD REFERENCES
    // ============================================================

    /**
     * Method References: Shorthand for lambdas that call existing methods
     * Syntax: ClassName::methodName
     * 
     * Types:
     * - Static method: ClassName::staticMethod
     * - Instance method: object::instanceMethod
     * - Constructor: ClassName::new
     * - Array constructor: Type[]::new
     */
    
    public static class MethodReferenceDemo {
        
        static class Person {
            String name;
            int age;
            
            Person(String name, int age) {
                this.name = name;
                this.age = age;
            }
            
            @Override
            public String toString() {
                return "Person{" + "name='" + name + '\'' + ", age=" + age + '}';
            }
            
            void introduce() {
                System.out.println("Hello, I am " + name);
            }
        }
        
        // Example 28: Static method reference
        static java.util.function.Function<String, Integer> parseInteger = 
            Integer::parseInt;
        
        // Example 29: Instance method reference
        static java.util.function.Consumer<Person> greetPerson = 
            Person::introduce;
        
        // Example 30: String methods as references
        static java.util.function.Function<String, String> toUpper = 
            String::toUpperCase;
        
        static java.util.function.Function<String, String> toLowerCase = 
            String::toLowerCase;
        
        static java.util.function.Function<String, Integer> stringLength = 
            String::length;
        
        // Example 31: Constructor reference
        static java.util.function.BiFunction<String, Integer, Person> personConstructor = 
            Person::new;
        
        // Example 32: Array constructor reference
        static java.util.function.IntFunction<String[]> stringArrayCreator = 
            String[]::new;
        
        // Example 33: Stream with method references
        static void demonstrateStreamMethods() {
            java.util.List<String> words = 
                java.util.Arrays.asList("hello", "world", "java", "lambda");
            
            // Using method reference in stream
            words.stream()
                 .map(String::toUpperCase)
                 .forEach(System.out::println);
        }
        
        // Example 34: Sorted with method reference
        static void demonstrateSortingWithReference() {
            java.util.List<Integer> numbers = 
                java.util.Arrays.asList(3, 1, 4, 1, 5, 9, 2, 6);
            
            numbers.stream()
                   .sorted()
                   .forEach(System.out::print);
        }
        
        // Example 35: ForEach with method reference
        static void demonstrateForEachWithReference() {
            java.util.List<Person> people = java.util.Arrays.asList(
                new Person("Alice", 28),
                new Person("Bob", 35),
                new Person("Charlie", 24)
            );
            
            people.forEach(Person::introduce);
        }

        public static void demonstrateMethodReferences() {
            System.out.println("\n=== METHOD REFERENCE DEMONSTRATIONS ===");
            
            // Static method reference
            System.out.println("Parse '42': " + parseInteger.apply("42"));
            
            // Instance method reference
            Person p = new Person("Alice", 28);
            greetPerson.accept(p);
            
            // String methods
            System.out.println("Uppercase: " + toUpper.apply("hello"));
            System.out.println("Lowercase: " + toLowerCase.apply("WORLD"));
            System.out.println("Length: " + stringLength.apply("java"));
            
            // Constructor reference
            Person newPerson = personConstructor.apply("David", 30);
            System.out.println("Created: " + newPerson);
            
            // Array constructor
            String[] arr = stringArrayCreator.apply(5);
            System.out.println("Array length: " + arr.length);
            
            // Stream with method references
            System.out.println("Stream mapping to uppercase:");
            demonstrateStreamMethods();
            
            System.out.println("\nSorted numbers:");
            demonstrateSortingWithReference();
            System.out.println();
            
            System.out.println("ForEach with method reference:");
            demonstrateForEachWithReference();
        }
    }

    // ============================================================
    // SECTION 5: VARIABLE CAPTURE IN LAMBDAS
    // ============================================================

    /**
     * Variable Capture: Lambdas can access variables from enclosing scope
     * 
     * Rules:
     * - Local variables must be effectively final (not modified)
     * - Instance/static variables can be modified
     * - Captured variables create closure
     */
    
    public static class VariableCaptureDemo {
        
        // Instance variable - can be modified
        private static int instanceCounter = 0;
        
        public static void demonstrateVariableCapture() {
            System.out.println("\n=== VARIABLE CAPTURE DEMONSTRATIONS ===");
            
            // Example 36: Final local variable
            final int multiplier = 5;
            java.util.function.Function<Integer, Integer> multiply = 
                x -> x * multiplier;  // Captures multiplier
            System.out.println("5 * 5 = " + multiply.apply(5));
            
            // Example 37: Effectively final variable (not explicitly final)
            int offset = 10;
            java.util.function.Function<Integer, Integer> addOffset = 
                x -> x + offset;  // Captures offset
            System.out.println("5 + 10 = " + addOffset.apply(5));
            
            // Example 38: Multiple captured variables
            int base = 100;
            int rate = 2;
            java.util.function.Function<Integer, Integer> calculate = 
                x -> base + (x * rate);
            System.out.println("100 + (3 * 2) = " + calculate.apply(3));
            
            // Example 39: Captured in list of lambdas
            java.util.List<java.util.function.IntFunction<Integer>> multipliers = 
                new java.util.ArrayList<>();
            for (int i = 1; i <= 5; i++) {
                final int factor = i;  // Must be final for capture
                multipliers.add(x -> x * factor);
            }
            System.out.println("Multipliers applied to 10:");
            for (int i = 0; i < multipliers.size(); i++) {
                System.out.println("  Factor " + (i + 1) + ": " + 
                    multipliers.get(i).apply(10));
            }
            
            // Example 40: Instance variable capture
            java.util.function.Consumer<Integer> incrementCounter = 
                x -> instanceCounter += x;
            incrementCounter.accept(5);
            incrementCounter.accept(3);
            System.out.println("Instance counter: " + instanceCounter);
            
            // Example 41: Array capture (arrays are mutable)
            int[] result = {0};  // Wrap in array for modification
            java.util.function.Consumer<Integer> accumulate = 
                x -> result[0] += x;
            accumulate.accept(1);
            accumulate.accept(2);
            accumulate.accept(3);
            System.out.println("Accumulated sum: " + result[0]);
            
            // Example 42: Capturing "this"
            VariableCaptureDemo demo = new VariableCaptureDemo();
            java.util.function.Consumer<String> printWithContext = 
                msg -> System.out.println("[" + demo.getClass().getSimpleName() + 
                    "] " + msg);
            printWithContext.accept("Using 'this' capture");
        }
    }

    // ============================================================
    // SECTION 6: LAMBDA BEST PRACTICES
    // ============================================================

    public static class LambdaBestPractices {
        
        // Example 43: Clear, readable lambda
        static java.util.function.Predicate<Integer> isAdult = 
            age -> age >= 18;
        
        // Example 44: Extract complex logic to method
        static boolean isValidUser(String username, String email) {
            return !username.isEmpty() && email.contains("@");
        }
        
        static java.util.function.BiPredicate<String, String> validateUser = 
            LambdaBestPractices::isValidUser;
        
        // Example 45: Use method reference when possible
        static java.util.function.Consumer<String> print = 
            System.out::println;  // Better than: s -> System.out.println(s)
        
        // Example 46: Keep lambdas short
        java.util.List<Integer> numbers = java.util.Arrays.asList(1, 2, 3, 4, 5);
        
        // Good: Short, clear lambda
        java.util.List<Integer> evens = 
            numbers.stream()
                   .filter(n -> n % 2 == 0)
                   .toList();
        
        // Example 47: Use descriptive variable names
        java.util.function.BiFunction<Integer, Integer, String> formatCoordinates = 
            (x, y) -> "(" + x + ", " + y + ")";
        
        // Example 48: Error handling in lambda
        static java.util.function.Function<String, Integer> safeParseInt = 
            s -> {
                try {
                    return Integer.parseInt(s);
                } catch (NumberFormatException e) {
                    System.out.println("Invalid number: " + s);
                    return 0;
                }
            };
        
        // Example 49: Chaining operations
        static void demonstrateChaining() {
            java.util.List<String> words = 
                java.util.Arrays.asList("hello", "world", "java", "lambda", "streams");
            
            words.stream()
                 .filter(w -> w.length() > 4)
                 .map(String::toUpperCase)
                 .sorted()
                 .forEach(System.out::println);
        }
        
        // Example 50: Avoid side effects in lambdas
        static void demonstrateAvoidingSideEffects() {
            java.util.List<Integer> numbers = 
                java.util.Arrays.asList(1, 2, 3, 4, 5);
            
            // Good: Transformation without side effects
            java.util.List<Integer> doubled = 
                numbers.stream()
                       .map(n -> n * 2)
                       .toList();
            
            System.out.println("Doubled: " + doubled);
        }

        public static void demonstrateBestPractices() {
            System.out.println("\n=== LAMBDA BEST PRACTICES ===");
            
            // Clear lambda
            System.out.println("Is 25 adult? " + isAdult.test(25));
            
            // Extracted logic
            System.out.println("Valid user? " + validateUser.test("john", "john@email.com"));
            
            // Method reference
            print.accept("Using method reference");
            
            // Format coordinates
            System.out.println("Coordinates: " + formatCoordinates.apply(10, 20));
            
            // Safe parsing
            System.out.println("Parsed '42': " + safeParseInt.apply("42"));
            System.out.println("Parsed 'abc': " + safeParseInt.apply("abc"));
            
            // Chaining operations
            System.out.println("Filtered and sorted words:");
            demonstrateChaining();
            
            // Avoiding side effects
            demonstrateAvoidingSideEffects();
        }
    }

    // ============================================================
    // INTERVIEW QUESTIONS & ANSWERS
    // ============================================================

    /**
     * Q1: What is a lambda expression?
     * A: A lambda is an anonymous function - a short block of code that
     *    takes parameters and returns a value. Introduced in Java 8.
     * 
     * Q2: What is a functional interface?
     * A: An interface with exactly one abstract method. Lambda expressions
     *    can only be used to implement functional interfaces.
     * 
     * Q3: What are the three parts of a lambda expression?
     * A: Parameters, arrow (->), and body (expression or statements).
     * 
     * Q4: Why use method references instead of lambdas?
     * A: Method references are more readable and concise when calling
     *    existing methods.
     * 
     * Q5: Can lambdas access local variables?
     * A: Yes, but only effectively final variables (not modified).
     * 
     * Q6: What is a closure in Java?
     * A: When a lambda captures variables from its enclosing scope,
     *    creating a closure that preserves those values.
     * 
     * Q7: What is the difference between Predicate and Function?
     * A: Predicate<T> returns boolean; Function<T,R> transforms T to R.
     * 
     * Q8: Can you use 'this' in a lambda?
     * A: Yes, 'this' refers to the enclosing class instance.
     * 
     * Q9: What is @FunctionalInterface annotation?
     * A: Marker annotation that indicates interface has exactly one
     *    abstract method (compile-time check).
     * 
     * Q10: Can lambdas modify captured variables?
     * A: No, only instance/static variables can be modified in lambdas.
     * 
     * Q11: What's the advantage of lambdas over anonymous classes?
     * A: More concise, readable syntax; less boilerplate code.
     * 
     * Q12: Can you have a lambda with no parameters?
     * A: Yes, use empty parentheses: () -> expression
     * 
     * Q13: What does 'effectively final' mean?
     * A: A variable that isn't declared final but is never assigned
     *    after initialization.
     * 
     * Q14: Can lambdas throw checked exceptions?
     * A: Only if the functional interface declares them in throws clause.
     * 
     * Q15: What is method reference chaining?
     * A: Not directly chainable; use andThen() or compose() on Functions.
     * 
     * Q16: What types of method references exist?
     * A: Static method, instance method, constructor, and array constructor.
     * 
     * Q17: Can you store lambdas in variables?
     * A: Yes, in variables of functional interface type.
     * 
     * Q18: What is the scope of lambda variables?
     * A: Local to the lambda body; separate from surrounding scope.
     * 
     * Q19: Can lambdas be recursive?
     * A: Indirectly yes, by storing in variable and calling recursively.
     * 
     * Q20: When should you NOT use lambdas?
     * A: When code is complex, requires multiple methods, or is hard to read.
     * 
     * Q21: What is currying with lambdas?
     * A: Converting multi-parameter function to chain of single-parameter
     *    functions: (a,b) -> result becomes a -> (b -> result)
     * 
     * Q22: How do lambdas compare to functional programming in other languages?
     * A: Similar to JavaScript/Python arrow functions; Java's version
     *    limited to functional interfaces.
     * 
     * Q23: What happens if lambda captures variable then it changes?
     * A: Compile error - variables must be effectively final.
     * 
     * Q24: Can you override Object methods in lambdas?
     * A: No, lambdas cannot override equals(), hashCode(), toString().
     * 
     * Q25: What's the performance difference: lambda vs anonymous class?
     * A: Lambdas are generally faster (less overhead) than anonymous classes.
     */

    public static void main(String[] args) {
        System.out.println("╔══════════════════════════════════════════════════════════╗");
        System.out.println("║  DAY 17: ADVANCED JAVA FEATURES - LAMBDA EXPRESSIONS    ║");
        System.out.println("╚══════════════════════════════════════════════════════════╝");
        
        LambdaSyntax.demonstrateSyntax();
        FunctionalInterfaceDemo.demonstrateFunctionalInterfaces();
        BuiltInFunctionalInterfaces.demonstrateBuiltInInterfaces();
        MethodReferenceDemo.demonstrateMethodReferences();
        VariableCaptureDemo.demonstrateVariableCapture();
        LambdaBestPractices.demonstrateBestPractices();
        
        System.out.println("\n╔══════════════════════════════════════════════════════════╗");
        System.out.println("║  50+ LAMBDA EXPRESSIONS DEMONSTRATED SUCCESSFULLY       ║");
        System.out.println("║  100% Interview Q&A Coverage (25 Questions)             ║");
        System.out.println("╚══════════════════════════════════════════════════════════╝");
    }
}
