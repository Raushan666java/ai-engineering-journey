/**
 * Day 10: Lambda Expressions Basics
 * 
 * Topics Covered:
 * - Lambda syntax variations
 * - Functional interfaces (@FunctionalInterface)
 * - Built-in functional interfaces (Predicate, Function, Consumer, Supplier)
 * - Method references (static, instance, constructor)
 * - Variable capture and effectively final
 */

import java.util.*;
import java.util.function.*;

public class lambda_basics {
    public static void main(String[] args) {
        System.out.println("=== Lambda Expressions Basics ===\n");
        
        // ============ LAMBDA SYNTAX ============
        
        // 1. Lambda Syntax Variations
        System.out.println("1. Lambda Syntax Variations:");
        
        // Zero parameters
        Runnable r1 = () -> System.out.println("No parameters");
        r1.run();
        
        // One parameter (parentheses optional)
        Consumer<String> c1 = s -> System.out.println("One param: " + s);
        Consumer<String> c2 = (s) -> System.out.println("One param with parens: " + s);
        c1.accept("Hello");
        
        // Multiple parameters
        BiFunction<Integer, Integer, Integer> add = (a, b) -> a + b;
        System.out.println("Add: " + add.apply(5, 3));
        
        // Block body (with return)
        BiFunction<Integer, Integer, Integer> multiply = (a, b) -> {
            int result = a * b;
            return result;
        };
        System.out.println("Multiply: " + multiply.apply(5, 3));
        System.out.println();
        
        // 2. Before vs After Lambda
        System.out.println("2. Before vs After Lambda:");
        
        // BEFORE Java 8 - Anonymous inner class
        Comparator<String> beforeComparator = new Comparator<String>() {
            @Override
            public int compare(String s1, String s2) {
                return s1.length() - s2.length();
            }
        };
        
        // AFTER Java 8 - Lambda
        Comparator<String> afterComparator = (s1, s2) -> s1.length() - s2.length();
        
        List<String> words = Arrays.asList("Java", "Python", "C", "JavaScript");
        words.sort(afterComparator);
        System.out.println("Sorted by length: " + words);
        System.out.println();
        
        // ============ FUNCTIONAL INTERFACES ============
        
        // 3. Predicate<T> - Takes T, returns boolean
        System.out.println("3. Predicate<T> (test):");
        Predicate<Integer> isEven = n -> n % 2 == 0;
        Predicate<Integer> isPositive = n -> n > 0;
        
        System.out.println("10 is even: " + isEven.test(10));
        System.out.println("7 is even: " + isEven.test(7));
        
        // Predicate composition (and, or, negate)
        Predicate<Integer> isEvenAndPositive = isEven.and(isPositive);
        System.out.println("-4 is even and positive: " + isEvenAndPositive.test(-4));
        System.out.println("6 is even and positive: " + isEvenAndPositive.test(6));
        
        Predicate<Integer> isOdd = isEven.negate();
        System.out.println("7 is odd: " + isOdd.test(7));
        System.out.println();
        
        // 4. Function<T, R> - Takes T, returns R
        System.out.println("4. Function<T, R> (apply):");
        Function<String, Integer> stringLength = s -> s.length();
        Function<Integer, Integer> square = n -> n * n;
        
        System.out.println("Length of 'Hello': " + stringLength.apply("Hello"));
        System.out.println("Square of 5: " + square.apply(5));
        
        // Function composition (andThen, compose)
        Function<String, Integer> lengthSquared = stringLength.andThen(square);
        System.out.println("Length of 'Java' squared: " + lengthSquared.apply("Java"));
        
        Function<Integer, String> intToString = n -> "Number: " + n;
        Function<Integer, String> squareToString = square.andThen(intToString);
        System.out.println(squareToString.apply(5));
        System.out.println();
        
        // 5. Consumer<T> - Takes T, returns void
        System.out.println("5. Consumer<T> (accept):");
        Consumer<String> print = s -> System.out.println("  " + s);
        Consumer<String> printUpperCase = s -> System.out.println("  " + s.toUpperCase());
        
        print.accept("Hello Consumer");
        
        // Consumer chaining (andThen)
        Consumer<String> printBoth = print.andThen(printUpperCase);
        printBoth.accept("chained");
        
        // Use with forEach
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
        names.forEach(print);
        System.out.println();
        
        // 6. Supplier<T> - Takes nothing, returns T
        System.out.println("6. Supplier<T> (get):");
        Supplier<Double> randomSupplier = () -> Math.random();
        Supplier<String> greetingSupplier = () -> "Hello from Supplier";
        
        System.out.println("Random: " + randomSupplier.get());
        System.out.println(greetingSupplier.get());
        
        // Lazy evaluation example
        System.out.println("Lazy supplier (not called yet)");
        Supplier<String> expensiveOperation = () -> {
            System.out.println("  Executing expensive operation...");
            return "Result";
        };
        // Not executed until get() is called
        System.out.println("Now calling get():");
        System.out.println("  " + expensiveOperation.get());
        System.out.println();
        
        // 7. BiFunction<T, U, R> - Takes T and U, returns R
        System.out.println("7. BiFunction<T, U, R>:");
        BiFunction<String, String, String> concat = (s1, s2) -> s1 + " " + s2;
        BiFunction<Integer, Integer, Integer> max = (a, b) -> a > b ? a : b;
        
        System.out.println(concat.apply("Hello", "World"));
        System.out.println("Max of 5 and 10: " + max.apply(5, 10));
        System.out.println();
        
        // 8. UnaryOperator<T> - Function<T, T>
        System.out.println("8. UnaryOperator<T>:");
        UnaryOperator<Integer> increment = n -> n + 1;
        UnaryOperator<String> toUpper = String::toUpperCase;
        
        System.out.println("Increment 5: " + increment.apply(5));
        System.out.println("To upper: " + toUpper.apply("hello"));
        System.out.println();
        
        // 9. BinaryOperator<T> - BiFunction<T, T, T>
        System.out.println("9. BinaryOperator<T>:");
        BinaryOperator<Integer> sum = (a, b) -> a + b;
        BinaryOperator<String> longerString = (s1, s2) -> s1.length() > s2.length() ? s1 : s2;
        
        System.out.println("Sum: " + sum.apply(10, 20));
        System.out.println("Longer: " + longerString.apply("Java", "Python"));
        System.out.println();
        
        // ============ METHOD REFERENCES ============
        
        // 10. Static Method Reference (Class::staticMethod)
        System.out.println("10. Static Method Reference:");
        
        Function<String, Integer> parseInt1 = s -> Integer.parseInt(s);
        Function<String, Integer> parseInt2 = Integer::parseInt;
        
        System.out.println("Parse '123': " + parseInt2.apply("123"));
        
        BiFunction<Integer, Integer, Integer> maxRef = Math::max;
        System.out.println("Max: " + maxRef.apply(10, 20));
        System.out.println();
        
        // 11. Instance Method Reference (object::instanceMethod)
        System.out.println("11. Instance Method Reference:");
        
        String prefix = "Hello ";
        Function<String, String> addPrefix1 = s -> prefix.concat(s);
        Function<String, String> addPrefix2 = prefix::concat;
        
        System.out.println(addPrefix2.apply("World"));
        
        List<String> list = Arrays.asList("Apple", "Banana", "Cherry");
        Consumer<String> printer = System.out::println;
        list.forEach(printer);
        System.out.println();
        
        // 12. Instance Method Reference (Class::instanceMethod)
        System.out.println("12. Instance Method on Class Type:");
        
        Function<String, String> toUpperCase1 = s -> s.toUpperCase();
        Function<String, String> toUpperCase2 = String::toUpperCase;
        
        System.out.println(toUpperCase2.apply("hello"));
        
        Comparator<String> compareIgnoreCase = String::compareToIgnoreCase;
        System.out.println("Compare: " + compareIgnoreCase.compare("Apple", "APPLE"));
        System.out.println();
        
        // 13. Constructor Reference (Class::new)
        System.out.println("13. Constructor Reference:");
        
        Supplier<List<String>> listSupplier1 = () -> new ArrayList<>();
        Supplier<List<String>> listSupplier2 = ArrayList::new;
        
        List<String> newList = listSupplier2.get();
        newList.add("Item");
        System.out.println("New list: " + newList);
        
        Function<Integer, List<String>> sizedList = ArrayList::new;
        List<String> list10 = sizedList.apply(10);
        System.out.println("List with capacity 10 created");
        System.out.println();
        
        // 14. Custom Functional Interface
        System.out.println("14. Custom Functional Interface:");
        
        @FunctionalInterface
        interface Calculator {
            int calculate(int a, int b);
            
            // Default and static methods allowed
            default void printResult(int result) {
                System.out.println("  Result: " + result);
            }
        }
        
        Calculator addition = (a, b) -> a + b;
        Calculator subtraction = (a, b) -> a - b;
        Calculator multiplication = (a, b) -> a * b;
        
        int result1 = addition.calculate(10, 5);
        addition.printResult(result1);
        
        int result2 = subtraction.calculate(10, 5);
        subtraction.printResult(result2);
        System.out.println();
        
        // 15. Variable Capture (Effectively Final)
        System.out.println("15. Variable Capture:");
        
        int baseValue = 10;  // Effectively final
        Function<Integer, Integer> addBase = x -> x + baseValue;
        
        System.out.println("5 + base(10): " + addBase.apply(5));
        
        // baseValue = 20;  // ERROR - must be effectively final
        
        // Mutable object (reference is final, but object state can change)
        final List<String> items = new ArrayList<>();
        Consumer<String> addItem = item -> items.add(item);
        
        addItem.accept("Item 1");
        addItem.accept("Item 2");
        System.out.println("Items: " + items);
        System.out.println();
        
        // 16. Practical Examples
        System.out.println("16. Practical Examples:");
        
        // Filter list using Predicate
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        Predicate<Integer> isEvenNumber = n -> n % 2 == 0;
        
        System.out.println("Original: " + numbers);
        numbers.removeIf(isEvenNumber.negate());  // Keep only even
        System.out.println("Even numbers: " + numbers);
        
        // Transform list using Function
        List<String> upperWords = Arrays.asList("java", "python", "javascript");
        upperWords.replaceAll(String::toUpperCase);
        System.out.println("Upper case: " + upperWords);
        
        // Sort with Comparator
        List<Person> people = Arrays.asList(
            new Person("Alice", 30),
            new Person("Bob", 25),
            new Person("Charlie", 30),
            new Person("David", 25)
        );
        
        Comparator<Person> byAge = Comparator.comparingInt(Person::getAge);
        Comparator<Person> byName = Comparator.comparing(Person::getName);
        Comparator<Person> byAgeThenName = byAge.thenComparing(byName);
        
        people.sort(byAgeThenName);
        System.out.println("Sorted people: " + people);
        
        System.out.println("\n=== Lambda Basics Complete ===");
    }
}

// Helper class
class Person {
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
}

/**
 * Key Concepts:
 * 
 * LAMBDA SYNTAX:
 * - Zero params: () -> expression
 * - One param: x -> expression OR (x) -> expression
 * - Multiple params: (x, y) -> expression
 * - Block body: (x, y) -> { statements; return result; }
 * 
 * FUNCTIONAL INTERFACES (Single Abstract Method):
 * - @FunctionalInterface annotation (optional but recommended)
 * - Can have default and static methods
 * - Lambda provides implementation of the single abstract method
 * 
 * BUILT-IN FUNCTIONAL INTERFACES:
 * 
 * Predicate<T>:
 * - Method: boolean test(T t)
 * - Use: Filtering, conditions
 * - Example: n -> n > 0
 * 
 * Function<T, R>:
 * - Method: R apply(T t)
 * - Use: Transformations
 * - Example: s -> s.length()
 * 
 * Consumer<T>:
 * - Method: void accept(T t)
 * - Use: Side effects, printing
 * - Example: s -> System.out.println(s)
 * 
 * Supplier<T>:
 * - Method: T get()
 * - Use: Lazy evaluation, factories
 * - Example: () -> new ArrayList<>()
 * 
 * BiFunction<T, U, R>:
 * - Method: R apply(T t, U u)
 * - Use: Two-argument transformations
 * - Example: (a, b) -> a + b
 * 
 * UnaryOperator<T>:
 * - Extends Function<T, T>
 * - Use: Same type transformations
 * - Example: n -> n * 2
 * 
 * BinaryOperator<T>:
 * - Extends BiFunction<T, T, T>
 * - Use: Same type operations
 * - Example: (a, b) -> a + b
 * 
 * METHOD REFERENCES:
 * 
 * Static method:
 * - Syntax: Class::staticMethod
 * - Example: Integer::parseInt
 * - Equivalent: s -> Integer.parseInt(s)
 * 
 * Instance method on object:
 * - Syntax: object::instanceMethod
 * - Example: System.out::println
 * - Equivalent: s -> System.out.println(s)
 * 
 * Instance method on class type:
 * - Syntax: Class::instanceMethod
 * - Example: String::toUpperCase
 * - Equivalent: s -> s.toUpperCase()
 * 
 * Constructor:
 * - Syntax: Class::new
 * - Example: ArrayList::new
 * - Equivalent: () -> new ArrayList<>()
 * 
 * VARIABLE CAPTURE:
 * - Local variables must be effectively final
 * - Can access instance/static variables
 * - Reference must be final, but object state can change
 * 
 * COMPOSITION:
 * - Predicate: and(), or(), negate()
 * - Function: andThen(), compose()
 * - Consumer: andThen()
 * - Comparator: thenComparing()
 * 
 * WHEN TO USE LAMBDA VS METHOD REFERENCE:
 * - Lambda: Custom logic, multiple statements
 * - Method reference: Direct method call (cleaner)
 * 
 * Interview Tips:
 * - Know all functional interface signatures
 * - Understand effectively final requirement
 * - Be able to convert anonymous class to lambda
 * - Know when to use method references
 * - Understand lambda capture and scope
 */
