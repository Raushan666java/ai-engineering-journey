/*
 * LAMBDA EXPRESSIONS - COMPLETE GUIDE
 * Day 10: Streams API, Lambda Expressions & Functional Programming
 * 
 * TABLE OF CONTENTS:
 * 1. Introduction to Lambda Expressions
 * 2. Lambda Syntax Variations
 * 3. Functional Interfaces
 * 4. Method References
 * 5. Constructor References
 * 6. Variable Capture and Scope
 * 7. Built-in Functional Interfaces (Predicate, Function, Consumer, Supplier)
 * 8. Lambda Best Practices
 * 9. Real-World Examples
 * 10. Interview Questions
 */

import java.util.*;
import java.util.function.*;

public class LambdasComplete {

    // ============================================================================
    // SECTION 1: INTRODUCTION TO LAMBDA EXPRESSIONS
    // ============================================================================
    
    /*
     * WHAT IS A LAMBDA EXPRESSION?
     * - Anonymous function (function without name)
     * - Can be passed as argument or stored in variable
     * - Concise syntax for implementing functional interfaces
     * - Enables functional programming in Java
     * 
     * SYNTAX:
     * (parameters) -> expression
     * (parameters) -> { statements; }
     * 
     * BEFORE JAVA 8 (Anonymous Inner Class):
     * Comparator<String> comp = new Comparator<String>() {
     *     @Override
     *     public int compare(String s1, String s2) {
     *         return s1.compareTo(s2);
     *     }
     * };
     * 
     * AFTER JAVA 8 (Lambda):
     * Comparator<String> comp = (s1, s2) -> s1.compareTo(s2);
     */
    
    public static class LambdaIntroduction {
        
        public static void demonstrateBeforeAfter() {
            System.out.println("=== Before vs After Lambda ===");
            
            List<String> names = Arrays.asList("Charlie", "Alice", "Bob");
            
            // BEFORE: Anonymous inner class
            Collections.sort(names, new Comparator<String>() {
                @Override
                public int compare(String s1, String s2) {
                    return s1.compareTo(s2);
                }
            });
            System.out.println("Sorted (anonymous class): " + names);
            
            // AFTER: Lambda expression
            names = Arrays.asList("Charlie", "Alice", "Bob");
            Collections.sort(names, (s1, s2) -> s1.compareTo(s2));
            System.out.println("Sorted (lambda): " + names);
            
            // Even more concise with method reference
            names = Arrays.asList("Charlie", "Alice", "Bob");
            Collections.sort(names, String::compareTo);
            System.out.println("Sorted (method ref): " + names);
        }
        
        public static void demonstrateLambdaBasics() {
            System.out.println("\n=== Lambda Basics ===");
            
            // Lambda with Runnable
            Runnable r1 = () -> System.out.println("Hello from lambda!");
            r1.run();
            
            // Lambda with single parameter
            Consumer<String> printer = s -> System.out.println("Value: " + s);
            printer.accept("Test");
            
            // Lambda with multiple parameters
            BiFunction<Integer, Integer, Integer> add = (a, b) -> a + b;
            System.out.println("5 + 3 = " + add.apply(5, 3));
            
            // Lambda with block body
            BiFunction<Integer, Integer, Integer> multiply = (a, b) -> {
                System.out.println("Multiplying " + a + " * " + b);
                return a * b;
            };
            System.out.println("Result: " + multiply.apply(4, 5));
        }
    }

    // ============================================================================
    // SECTION 2: LAMBDA SYNTAX VARIATIONS
    // ============================================================================
    
    public static class LambdaSyntax {
        
        public static void demonstrateSyntaxVariations() {
            System.out.println("\n=== Lambda Syntax Variations ===");
            
            // 1. No parameters
            Runnable r1 = () -> System.out.println("No params");
            r1.run();
            
            // 2. Single parameter - parentheses optional
            Consumer<String> c1 = s -> System.out.println(s);        // No parentheses
            Consumer<String> c2 = (s) -> System.out.println(s);      // With parentheses
            c1.accept("Test1");
            
            // 3. Single parameter with type
            Consumer<String> c3 = (String s) -> System.out.println(s);
            c3.accept("Test2");
            
            // 4. Multiple parameters - parentheses required
            BiFunction<Integer, Integer, Integer> add = (a, b) -> a + b;
            System.out.println("Add: " + add.apply(3, 4));
            
            // 5. Multiple parameters with types
            BiFunction<Integer, Integer, Integer> subtract = (Integer a, Integer b) -> a - b;
            System.out.println("Subtract: " + subtract.apply(10, 3));
            
            // 6. Single expression - no braces, implicit return
            Function<Integer, Integer> square1 = x -> x * x;
            System.out.println("Square: " + square1.apply(5));
            
            // 7. Multiple statements - braces required, explicit return
            Function<Integer, Integer> square2 = x -> {
                int result = x * x;
                System.out.println(x + " squared = " + result);
                return result;
            };
            System.out.println("Result: " + square2.apply(6));
            
            // 8. Void return type - no return statement
            Consumer<String> printer = s -> {
                String upper = s.toUpperCase();
                System.out.println("Upper: " + upper);
            };
            printer.accept("hello");
        }
        
        public static void demonstrateTypeInference() {
            System.out.println("\n=== Type Inference ===");
            
            // Compiler infers parameter types from context
            BiFunction<String, String, Integer> compare1 = (s1, s2) -> s1.compareTo(s2);
            System.out.println("Inferred types: " + compare1.apply("b", "a"));
            
            // Explicit types (usually not needed)
            BiFunction<String, String, Integer> compare2 = (String s1, String s2) -> s1.compareTo(s2);
            System.out.println("Explicit types: " + compare2.apply("b", "a"));
            
            // Type inference with generic methods
            List<String> list = Arrays.asList("one", "two", "three");
            list.forEach(s -> System.out.println(s.toUpperCase())); // Compiler knows s is String
        }
    }

    // ============================================================================
    // SECTION 3: FUNCTIONAL INTERFACES
    // ============================================================================
    
    /*
     * FUNCTIONAL INTERFACE:
     * - Interface with exactly ONE abstract method (SAM - Single Abstract Method)
     * - Can have default and static methods
     * - @FunctionalInterface annotation (optional but recommended)
     * - Lambda expressions implement functional interfaces
     */
    
    @FunctionalInterface
    interface Calculator {
        int calculate(int a, int b);
        
        // Can have default methods
        default int square(int x) {
            return x * x;
        }
        
        // Can have static methods
        static int cube(int x) {
            return x * x * x;
        }
    }
    
    @FunctionalInterface
    interface StringProcessor {
        String process(String input);
    }
    
    @FunctionalInterface
    interface Validator<T> {
        boolean validate(T value);
    }
    
    public static class FunctionalInterfaceExamples {
        
        public static void demonstrateCustomFunctionalInterface() {
            System.out.println("\n=== Custom Functional Interface ===");
            
            // Lambda implementing Calculator
            Calculator add = (a, b) -> a + b;
            Calculator subtract = (a, b) -> a - b;
            Calculator multiply = (a, b) -> a * b;
            Calculator divide = (a, b) -> b != 0 ? a / b : 0;
            
            System.out.println("5 + 3 = " + add.calculate(5, 3));
            System.out.println("5 - 3 = " + subtract.calculate(5, 3));
            System.out.println("5 * 3 = " + multiply.calculate(5, 3));
            System.out.println("10 / 2 = " + divide.calculate(10, 2));
            
            // Using default method
            System.out.println("Square of 5: " + add.square(5));
            
            // Using static method
            System.out.println("Cube of 3: " + Calculator.cube(3));
        }
        
        public static void demonstrateStringProcessor() {
            System.out.println("\n=== StringProcessor Interface ===");
            
            StringProcessor toUpper = s -> s.toUpperCase();
            StringProcessor toLower = s -> s.toLowerCase();
            StringProcessor reverse = s -> new StringBuilder(s).reverse().toString();
            StringProcessor removeSpaces = s -> s.replaceAll("\\s+", "");
            
            String input = "Hello World";
            System.out.println("Original: " + input);
            System.out.println("Upper: " + toUpper.process(input));
            System.out.println("Lower: " + toLower.process(input));
            System.out.println("Reverse: " + reverse.process(input));
            System.out.println("No spaces: " + removeSpaces.process(input));
        }
        
        public static void demonstrateGenericValidator() {
            System.out.println("\n=== Generic Validator ===");
            
            Validator<Integer> isPositive = n -> n > 0;
            Validator<Integer> isEven = n -> n % 2 == 0;
            Validator<String> isNotEmpty = s -> s != null && !s.isEmpty();
            Validator<String> isEmail = s -> s.matches("^[A-Za-z0-9+_.-]+@(.+)$");
            
            System.out.println("5 is positive: " + isPositive.validate(5));
            System.out.println("-3 is positive: " + isPositive.validate(-3));
            System.out.println("4 is even: " + isEven.validate(4));
            System.out.println("'hello' is not empty: " + isNotEmpty.validate("hello"));
            System.out.println("'test@email.com' is email: " + isEmail.validate("test@email.com"));
        }
    }

    // ============================================================================
    // SECTION 4: METHOD REFERENCES
    // ============================================================================
    
    /*
     * METHOD REFERENCES:
     * - Shorthand syntax for lambda that calls a single method
     * - Four types:
     *   1. Static method: ClassName::staticMethod
     *   2. Instance method of object: object::instanceMethod
     *   3. Instance method of type: ClassName::instanceMethod
     *   4. Constructor: ClassName::new
     * 
     * Lambda: s -> System.out.println(s)
     * Method Reference: System.out::println
     */
    
    public static class MethodReferenceExamples {
        
        public static void demonstrateStaticMethodReference() {
            System.out.println("\n=== Static Method Reference ===");
            
            List<Integer> numbers = Arrays.asList(-3, -1, 0, 1, 2, 3);
            
            // Lambda
            List<Integer> absolute1 = numbers.stream()
                .map(n -> Math.abs(n))
                .toList();
            System.out.println("Lambda: " + absolute1);
            
            // Static method reference
            List<Integer> absolute2 = numbers.stream()
                .map(Math::abs)  // Math::abs refers to Math.abs(int)
                .toList();
            System.out.println("Method ref: " + absolute2);
            
            // Another example
            List<String> strings = Arrays.asList("1", "2", "3", "4", "5");
            
            // Lambda
            List<Integer> parsed1 = strings.stream()
                .map(s -> Integer.parseInt(s))
                .toList();
            System.out.println("Parsed (lambda): " + parsed1);
            
            // Method reference
            List<Integer> parsed2 = strings.stream()
                .map(Integer::parseInt)
                .toList();
            System.out.println("Parsed (method ref): " + parsed2);
        }
        
        public static void demonstrateInstanceMethodOfObject() {
            System.out.println("\n=== Instance Method of Object ===");
            
            String prefix = "Number: ";
            
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
            
            // Lambda
            numbers.forEach(n -> System.out.println(prefix + n));
            
            // Method reference to instance method of specific object
            PrinterService printer = new PrinterService("Value: ");
            numbers.forEach(printer::print);  // Calls printer.print(n) for each n
        }
        
        public static void demonstrateInstanceMethodOfType() {
            System.out.println("\n=== Instance Method of Type ===");
            
            List<String> words = Arrays.asList("hello", "world", "java", "lambda");
            
            // Lambda: s -> s.toUpperCase()
            List<String> upper1 = words.stream()
                .map(s -> s.toUpperCase())
                .toList();
            System.out.println("Lambda: " + upper1);
            
            // Method reference: String::toUpperCase
            // Calls toUpperCase() on each String instance
            List<String> upper2 = words.stream()
                .map(String::toUpperCase)
                .toList();
            System.out.println("Method ref: " + upper2);
            
            // Another example: String::length
            List<Integer> lengths = words.stream()
                .map(String::length)
                .toList();
            System.out.println("Lengths: " + lengths);
            
            // Sorting example
            List<String> names = Arrays.asList("Charlie", "Alice", "Bob");
            names.sort(String::compareToIgnoreCase);  // Calls s1.compareToIgnoreCase(s2)
            System.out.println("Sorted: " + names);
        }
        
        public static void demonstrateComparison() {
            System.out.println("\n=== Method Reference Comparison ===");
            
            List<String> words = Arrays.asList("apple", "banana", "cherry");
            
            // 1. Lambda with block
            words.forEach(w -> {
                System.out.println("Word: " + w);
            });
            
            // 2. Lambda with expression
            words.forEach(w -> System.out.println(w));
            
            // 3. Method reference (most concise)
            words.forEach(System.out::println);
        }
    }
    
    static class PrinterService {
        private String prefix;
        
        public PrinterService(String prefix) {
            this.prefix = prefix;
        }
        
        public void print(Object obj) {
            System.out.println(prefix + obj);
        }
    }

    // ============================================================================
    // SECTION 5: CONSTRUCTOR REFERENCES
    // ============================================================================
    
    public static class ConstructorReferenceExamples {
        
        public static void demonstrateConstructorReference() {
            System.out.println("\n=== Constructor Reference ===");
            
            // Lambda creating new objects
            Supplier<Person> personCreator1 = () -> new Person();
            Person p1 = personCreator1.get();
            System.out.println("Lambda: " + p1);
            
            // Constructor reference (no args)
            Supplier<Person> personCreator2 = Person::new;
            Person p2 = personCreator2.get();
            System.out.println("Constructor ref: " + p2);
            
            // Constructor with arguments
            BiFunction<String, Integer, Person> personFactory = Person::new;
            Person p3 = personFactory.apply("Alice", 25);
            System.out.println("With args: " + p3);
            
            // Creating list of objects
            List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
            
            // Lambda
            List<Person> people1 = names.stream()
                .map(name -> new Person(name, 0))
                .toList();
            System.out.println("People (lambda): " + people1);
            
            // Method reference (if constructor matches)
            Function<String, Person> personMaker = name -> new Person(name, 0);
            List<Person> people2 = names.stream()
                .map(personMaker)
                .toList();
            System.out.println("People (function): " + people2);
        }
        
        public static void demonstrateArrayConstructorReference() {
            System.out.println("\n=== Array Constructor Reference ===");
            
            List<String> words = Arrays.asList("one", "two", "three");
            
            // Lambda creating array
            String[] array1 = words.stream()
                .toArray(size -> new String[size]);
            System.out.println("Lambda: " + Arrays.toString(array1));
            
            // Array constructor reference
            String[] array2 = words.stream()
                .toArray(String[]::new);
            System.out.println("Constructor ref: " + Arrays.toString(array2));
        }
    }
    
    static class Person {
        private String name;
        private int age;
        
        public Person() {
            this("Unknown", 0);
        }
        
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
    }

    // ============================================================================
    // SECTION 6: VARIABLE CAPTURE AND SCOPE
    // ============================================================================
    
    public static class VariableCaptureExamples {
        
        public static void demonstrateVariableCapture() {
            System.out.println("\n=== Variable Capture ===");
            
            int factor = 10;  // Effectively final
            
            // Lambda can access local variables if they are effectively final
            Function<Integer, Integer> multiplier = n -> n * factor;
            System.out.println("5 * 10 = " + multiplier.apply(5));
            
            // This would cause compilation error:
            // factor = 20;  // ERROR! Cannot modify captured variable
            
            // Lambda can access instance variables
            VariableCaptureDemo demo = new VariableCaptureDemo(100);
            demo.demonstrate();
        }
        
        public static void demonstrateEffectivelyFinal() {
            System.out.println("\n=== Effectively Final ===");
            
            int x = 10;
            // x is effectively final (not modified after initialization)
            
            Runnable r = () -> System.out.println("x = " + x);
            r.run();
            
            // This would make x NOT effectively final:
            // x = 20;  // ERROR! Lambda cannot capture modified variable
            
            // Workaround: Use array or AtomicInteger
            final int[] arr = {10};
            Runnable r2 = () -> System.out.println("arr[0] = " + arr[0]);
            r2.run();
            arr[0] = 20;  // OK! Array reference is final, not contents
            r2.run();
        }
        
        public static void demonstrateScopeRules() {
            System.out.println("\n=== Scope Rules ===");
            
            int x = 10;
            
            Consumer<Integer> consumer = (x2) -> {  // Parameter name can differ
                System.out.println("Parameter: " + x2);
                System.out.println("Outer variable: " + x);
            };
            consumer.accept(20);
            
            // This would cause compilation error:
            // Consumer<Integer> bad = (x) -> { ... };  // ERROR! Cannot shadow outer variable
        }
    }
    
    static class VariableCaptureDemo {
        private int instanceVar;
        
        public VariableCaptureDemo(int instanceVar) {
            this.instanceVar = instanceVar;
        }
        
        public void demonstrate() {
            int localVar = 50;
            
            // Lambda can access instance variables (can be modified)
            Runnable r1 = () -> {
                System.out.println("Instance var: " + instanceVar);
                instanceVar += 10;  // OK! Can modify instance variables
            };
            r1.run();
            System.out.println("After modification: " + instanceVar);
            
            // Lambda can access effectively final local variables
            Runnable r2 = () -> {
                System.out.println("Local var: " + localVar);
                // localVar += 10;  // ERROR! Cannot modify captured local variable
            };
            r2.run();
        }
    }

    // ============================================================================
    // SECTION 7: BUILT-IN FUNCTIONAL INTERFACES
    // ============================================================================
    
    /*
     * COMMON FUNCTIONAL INTERFACES (java.util.function):
     * 
     * 1. Predicate<T>:     T -> boolean      (test)
     * 2. Function<T, R>:   T -> R            (apply)
     * 3. Consumer<T>:      T -> void         (accept)
     * 4. Supplier<T>:      () -> T           (get)
     * 5. UnaryOperator<T>: T -> T            (apply) - extends Function
     * 6. BinaryOperator<T>: (T, T) -> T      (apply) - extends BiFunction
     * 7. BiPredicate<T, U>: (T, U) -> boolean (test)
     * 8. BiFunction<T, U, R>: (T, U) -> R    (apply)
     * 9. BiConsumer<T, U>: (T, U) -> void    (accept)
     */
    
    public static class BuiltInFunctionalInterfaces {
        
        public static void demonstratePredicate() {
            System.out.println("\n=== Predicate<T> ===");
            
            Predicate<Integer> isPositive = n -> n > 0;
            Predicate<Integer> isEven = n -> n % 2 == 0;
            Predicate<String> isLongString = s -> s.length() > 5;
            
            System.out.println("5 is positive: " + isPositive.test(5));
            System.out.println("-3 is positive: " + isPositive.test(-3));
            System.out.println("4 is even: " + isEven.test(4));
            
            // Predicate composition
            Predicate<Integer> isPositiveEven = isPositive.and(isEven);
            System.out.println("4 is positive and even: " + isPositiveEven.test(4));
            System.out.println("-2 is positive and even: " + isPositiveEven.test(-2));
            
            Predicate<Integer> isPositiveOrEven = isPositive.or(isEven);
            System.out.println("-2 is positive or even: " + isPositiveOrEven.test(-2));
            
            Predicate<Integer> isNotPositive = isPositive.negate();
            System.out.println("5 is not positive: " + isNotPositive.test(5));
            
            // Using with collections
            List<Integer> numbers = Arrays.asList(-3, -1, 0, 1, 2, 3, 4, 5);
            List<Integer> positiveNumbers = numbers.stream()
                .filter(isPositive)
                .toList();
            System.out.println("Positive numbers: " + positiveNumbers);
        }
        
        public static void demonstrateFunction() {
            System.out.println("\n=== Function<T, R> ===");
            
            Function<Integer, Integer> square = n -> n * n;
            Function<Integer, String> intToString = n -> "Number: " + n;
            Function<String, Integer> stringLength = String::length;
            
            System.out.println("Square of 5: " + square.apply(5));
            System.out.println("Int to String: " + intToString.apply(42));
            System.out.println("Length of 'hello': " + stringLength.apply("hello"));
            
            // Function composition: andThen
            Function<Integer, Integer> addTen = n -> n + 10;
            Function<Integer, Integer> multiplyTwo = n -> n * 2;
            Function<Integer, Integer> combined = addTen.andThen(multiplyTwo);
            System.out.println("(5 + 10) * 2 = " + combined.apply(5));  // 30
            
            // Function composition: compose
            Function<Integer, Integer> combined2 = addTen.compose(multiplyTwo);
            System.out.println("(5 * 2) + 10 = " + combined2.apply(5));  // 20
            
            // Using with collections
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
            List<Integer> squared = numbers.stream()
                .map(square)
                .toList();
            System.out.println("Squared: " + squared);
        }
        
        public static void demonstrateConsumer() {
            System.out.println("\n=== Consumer<T> ===");
            
            Consumer<String> printer = s -> System.out.println("Value: " + s);
            Consumer<Integer> numberPrinter = n -> System.out.println("Number: " + n);
            
            printer.accept("Hello");
            numberPrinter.accept(42);
            
            // Consumer chaining: andThen
            Consumer<String> upperPrinter = s -> System.out.println("Upper: " + s.toUpperCase());
            Consumer<String> combined = printer.andThen(upperPrinter);
            combined.accept("test");
            
            // Using with collections
            List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
            names.forEach(printer);
            
            // BiConsumer
            BiConsumer<String, Integer> personPrinter = (name, age) -> 
                System.out.println(name + " is " + age + " years old");
            personPrinter.accept("Alice", 25);
        }
        
        public static void demonstrateSupplier() {
            System.out.println("\n=== Supplier<T> ===");
            
            Supplier<Double> randomSupplier = Math::random;
            Supplier<String> messageSupplier = () -> "Hello from Supplier";
            Supplier<List<Integer>> listSupplier = () -> Arrays.asList(1, 2, 3);
            
            System.out.println("Random: " + randomSupplier.get());
            System.out.println("Message: " + messageSupplier.get());
            System.out.println("List: " + listSupplier.get());
            
            // Lazy initialization
            Supplier<ExpensiveObject> lazyInit = ExpensiveObject::new;
            System.out.println("Supplier created (object NOT created yet)");
            ExpensiveObject obj = lazyInit.get();  // Now object is created
            System.out.println("Object created: " + obj);
        }
        
        public static void demonstrateUnaryOperator() {
            System.out.println("\n=== UnaryOperator<T> ===");
            
            UnaryOperator<Integer> square = n -> n * n;
            UnaryOperator<String> toUpper = String::toUpperCase;
            
            System.out.println("Square of 5: " + square.apply(5));
            System.out.println("Upper: " + toUpper.apply("hello"));
            
            // Using replaceAll
            List<String> words = new ArrayList<>(Arrays.asList("hello", "world", "java"));
            words.replaceAll(toUpper);
            System.out.println("Words: " + words);
        }
        
        public static void demonstrateBinaryOperator() {
            System.out.println("\n=== BinaryOperator<T> ===");
            
            BinaryOperator<Integer> add = (a, b) -> a + b;
            BinaryOperator<Integer> max = (a, b) -> a > b ? a : b;
            BinaryOperator<String> concat = (s1, s2) -> s1 + s2;
            
            System.out.println("5 + 3 = " + add.apply(5, 3));
            System.out.println("Max(5, 8) = " + max.apply(5, 8));
            System.out.println("Concat: " + concat.apply("Hello", "World"));
            
            // Using with reduce
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
            int sum = numbers.stream().reduce(0, add);
            System.out.println("Sum: " + sum);
            
            int maximum = numbers.stream().reduce(Integer.MIN_VALUE, max);
            System.out.println("Maximum: " + maximum);
        }
    }
    
    static class ExpensiveObject {
        public ExpensiveObject() {
            System.out.println("Creating expensive object...");
            try {
                Thread.sleep(100);  // Simulate expensive creation
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        
        @Override
        public String toString() {
            return "ExpensiveObject";
        }
    }

    // ============================================================================
    // SECTION 8: LAMBDA BEST PRACTICES
    // ============================================================================
    
    public static class LambdaBestPractices {
        
        public static void demonstrateBestPractices() {
            System.out.println("\n=== Lambda Best Practices ===");
            
            System.out.println("""
                BEST PRACTICES:
                
                1. KEEP IT SHORT:
                   - Lambda should be 1-3 lines max
                   - If longer, extract to method
                   
                   BAD:  list.forEach(item -> {
                           // 20 lines of code
                         });
                   
                   GOOD: list.forEach(this::processItem);
                
                2. USE METHOD REFERENCES:
                   - More readable than lambda
                   
                   BAD:  list.forEach(s -> System.out.println(s));
                   GOOD: list.forEach(System.out::println);
                
                3. PREFER STANDARD FUNCTIONAL INTERFACES:
                   - Use Predicate, Function, Consumer, etc.
                   - Don't create custom interfaces if standard ones work
                
                4. AVOID SIDE EFFECTS:
                   - Lambda should be pure (no external state modification)
                   
                   BAD:  list.forEach(item -> total += item); // Modifies external state
                   GOOD: int total = list.stream().mapToInt(Integer::intValue).sum();
                
                5. USE APPROPRIATE NAMES:
                   - Single letter for obvious cases (s, n, x)
                   - Descriptive names for complex cases
                   
                   OK:   list.forEach(s -> process(s));
                   GOOD: employees.forEach(employee -> process(employee));
                
                6. DON'T OVERUSE:
                   - If lambda is complex, use named method
                   - If used multiple times, extract to variable
                
                7. BE CAREFUL WITH EXCEPTIONS:
                   - Checked exceptions not allowed in lambda
                   - Wrap in try-catch or use custom functional interface
                
                8. THINK ABOUT NULL:
                   - Lambda doesn't protect against null
                   - Use Optional or null checks
                """);
        }
        
        public static void demonstrateGoodVsBad() {
            System.out.println("\n=== Good vs Bad Examples ===");
            
            List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David");
            
            // BAD: Too complex lambda
            // names.forEach(name -> {
            //     String processed = name.toUpperCase();
            //     String reversed = new StringBuilder(processed).reverse().toString();
            //     System.out.println("Processed: " + reversed);
            // });
            
            // GOOD: Extract to method
            names.forEach(LambdaBestPractices::processName);
        }
        
        private static void processName(String name) {
            String processed = name.toUpperCase();
            String reversed = new StringBuilder(processed).reverse().toString();
            System.out.println("Processed: " + reversed);
        }
    }

    // ============================================================================
    // SECTION 9: REAL-WORLD EXAMPLES
    // ============================================================================
    
    public static class RealWorldExamples {
        
        public static void eventHandlingExample() {
            System.out.println("\n=== Event Handling (GUI) ===");
            
            // Before Java 8
            // button.addActionListener(new ActionListener() {
            //     public void actionPerformed(ActionEvent e) {
            //         System.out.println("Button clicked!");
            //     }
            // });
            
            // After Java 8
            // button.addActionListener(e -> System.out.println("Button clicked!"));
            
            System.out.println("Lambda makes event handlers much more concise!");
        }
        
        public static void dataProcessingExample() {
            System.out.println("\n=== Data Processing Pipeline ===");
            
            List<Employee> employees = Arrays.asList(
                new Employee("Alice", 50000),
                new Employee("Bob", 60000),
                new Employee("Charlie", 55000),
                new Employee("David", 70000)
            );
            
            // Complex data processing with lambdas
            double avgHighSalary = employees.stream()
                .filter(e -> e.getSalary() > 55000)
                .mapToDouble(Employee::getSalary)
                .average()
                .orElse(0);
            
            System.out.println("Average high salary: $" + avgHighSalary);
            
            // Group by salary range
            Map<String, List<Employee>> byRange = employees.stream()
                .collect(java.util.stream.Collectors.groupingBy(e -> {
                    if (e.getSalary() < 55000) return "Low";
                    else if (e.getSalary() < 65000) return "Medium";
                    else return "High";
                }));
            
            System.out.println("By salary range: " + byRange);
        }
        
        public static void strategyPatternExample() {
            System.out.println("\n=== Strategy Pattern with Lambda ===");
            
            // Before: Need separate classes for each strategy
            // Now: Can pass lambda directly
            
            List<Integer> numbers = Arrays.asList(5, 3, 8, 1, 9, 2);
            
            // Different sorting strategies
            System.out.print("Natural order: ");
            sortAndPrint(numbers, (a, b) -> a - b);
            
            System.out.print("Reverse order: ");
            sortAndPrint(numbers, (a, b) -> b - a);
            
            System.out.print("By absolute value: ");
            sortAndPrint(Arrays.asList(-5, 3, -8, 1, 9, -2), 
                (a, b) -> Math.abs(a) - Math.abs(b));
        }
        
        private static void sortAndPrint(List<Integer> list, Comparator<Integer> strategy) {
            List<Integer> sorted = new ArrayList<>(list);
            sorted.sort(strategy);
            System.out.println(sorted);
        }
    }
    
    static class Employee {
        private String name;
        private double salary;
        
        public Employee(String name, double salary) {
            this.name = name;
            this.salary = salary;
        }
        
        public String getName() { return name; }
        public double getSalary() { return salary; }
        
        @Override
        public String toString() {
            return name + "($" + salary + ")";
        }
    }

    // ============================================================================
    // SECTION 10: INTERVIEW QUESTIONS
    // ============================================================================
    
    public static class InterviewQuestions {
        
        public static void commonInterviewQuestions() {
            System.out.println("\n=== Common Interview Questions ===");
            System.out.println("""
                Q1: What is a lambda expression?
                A: An anonymous function that can be passed as argument or assigned to variable.
                   Provides concise syntax for implementing functional interfaces.
                
                Q2: What is a functional interface?
                A: Interface with exactly one abstract method (SAM). Can have default and static methods.
                   Lambda expressions implement functional interfaces.
                
                Q3: What is @FunctionalInterface annotation?
                A: Optional annotation that ensures interface has exactly one abstract method.
                   Compiler error if multiple abstract methods.
                
                Q4: Difference between lambda and anonymous inner class?
                A: - Lambda is more concise
                   - Lambda can only implement functional interface; anonymous class can extend/implement any
                   - Lambda doesn't create new scope ('this' refers to enclosing class)
                   - Lambda is more efficient (no new class file, uses invokedynamic)
                
                Q5: What are method references?
                A: Shorthand for lambda that calls single method. Four types:
                   - Static: ClassName::staticMethod
                   - Instance of object: object::instanceMethod
                   - Instance of type: ClassName::instanceMethod
                   - Constructor: ClassName::new
                
                Q6: Can lambda modify local variables?
                A: No! Can only access effectively final variables (not modified after initialization).
                   Can modify instance variables and array/object contents.
                
                Q7: What are effectively final variables?
                A: Variables that are not declared final but never modified after initialization.
                   Lambda can capture effectively final variables.
                
                Q8: Common functional interfaces?
                A: - Predicate<T>: T -> boolean
                   - Function<T,R>: T -> R
                   - Consumer<T>: T -> void
                   - Supplier<T>: () -> T
                   - UnaryOperator<T>: T -> T
                   - BinaryOperator<T>: (T,T) -> T
                
                Q9: Can lambda throw checked exceptions?
                A: Not directly! Must either:
                   - Wrap in try-catch inside lambda
                   - Create custom functional interface with throws clause
                   - Use wrapper method
                
                Q10: When to use lambda vs method reference?
                A: Use method reference when lambda just calls single method (more readable).
                   Use lambda when need additional logic or multiple statements.
                """);
        }
    }

    // ============================================================================
    // MAIN METHOD - RUN ALL DEMONSTRATIONS
    // ============================================================================
    
    public static void main(String[] args) {
        System.out.println("╔════════════════════════════════════════════════════════════╗");
        System.out.println("║         LAMBDA EXPRESSIONS - COMPLETE GUIDE                ║");
        System.out.println("║         Day 10: Functional Programming                     ║");
        System.out.println("╚════════════════════════════════════════════════════════════╝");
        
        // Section 1: Introduction
        LambdaIntroduction.demonstrateBeforeAfter();
        LambdaIntroduction.demonstrateLambdaBasics();
        
        // Section 2: Syntax
        LambdaSyntax.demonstrateSyntaxVariations();
        LambdaSyntax.demonstrateTypeInference();
        
        // Section 3: Functional Interfaces
        FunctionalInterfaceExamples.demonstrateCustomFunctionalInterface();
        FunctionalInterfaceExamples.demonstrateStringProcessor();
        FunctionalInterfaceExamples.demonstrateGenericValidator();
        
        // Section 4: Method References
        MethodReferenceExamples.demonstrateStaticMethodReference();
        MethodReferenceExamples.demonstrateInstanceMethodOfObject();
        MethodReferenceExamples.demonstrateInstanceMethodOfType();
        MethodReferenceExamples.demonstrateComparison();
        
        // Section 5: Constructor References
        ConstructorReferenceExamples.demonstrateConstructorReference();
        ConstructorReferenceExamples.demonstrateArrayConstructorReference();
        
        // Section 6: Variable Capture
        VariableCaptureExamples.demonstrateVariableCapture();
        VariableCaptureExamples.demonstrateEffectivelyFinal();
        VariableCaptureExamples.demonstrateScopeRules();
        
        // Section 7: Built-in Functional Interfaces
        BuiltInFunctionalInterfaces.demonstratePredicate();
        BuiltInFunctionalInterfaces.demonstrateFunction();
        BuiltInFunctionalInterfaces.demonstrateConsumer();
        BuiltInFunctionalInterfaces.demonstrateSupplier();
        BuiltInFunctionalInterfaces.demonstrateUnaryOperator();
        BuiltInFunctionalInterfaces.demonstrateBinaryOperator();
        
        // Section 8: Best Practices
        LambdaBestPractices.demonstrateBestPractices();
        LambdaBestPractices.demonstrateGoodVsBad();
        
        // Section 9: Real-World Examples
        RealWorldExamples.eventHandlingExample();
        RealWorldExamples.dataProcessingExample();
        RealWorldExamples.strategyPatternExample();
        
        // Section 10: Interview Questions
        InterviewQuestions.commonInterviewQuestions();
        
        System.out.println("\n╔════════════════════════════════════════════════════════════╗");
        System.out.println("║         LAMBDA EXPRESSIONS GUIDE COMPLETE!                 ║");
        System.out.println("╚════════════════════════════════════════════════════════════╝");
    }
}
