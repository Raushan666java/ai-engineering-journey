/**
 * Day 4: Strings & Methods - Complete Guide
 * File: methods_basics.java
 * Purpose: Learn method creation, overloading, and parameter passing
 *
 * Topics Covered:
 * - Method declaration and definition
 * - Method overloading
 * - Parameter passing (primitive vs reference)
 * - Return types and void methods
 * - Method scope and visibility
 * - Static vs instance methods
 * - Method best practices
 */

public class methods_basics {

    // Class variables for demonstration
    private static int staticCounter = 0;
    private int instanceCounter = 0;

    public static void main(String[] args) {
        System.out.println("=== METHODS BASICS - DAY 4 ===\n");

        // 1. BASIC METHOD CALLS
        demonstrateBasicMethods();

        // 2. METHOD OVERLOADING
        demonstrateMethodOverloading();

        // 3. PARAMETER PASSING
        demonstrateParameterPassing();

        // 4. RETURN TYPES
        demonstrateReturnTypes();

        // 5. STATIC VS INSTANCE METHODS
        demonstrateStaticVsInstance();

        // 6. METHOD SCOPE AND VISIBILITY
        demonstrateScopeAndVisibility();

        // 7. PRACTICAL EXAMPLES
        demonstratePracticalExamples();
    }

    /**
     * Demonstrates basic method calls
     */
    public static void demonstrateBasicMethods() {
        System.out.println("1. BASIC METHOD CALLS");
        System.out.println("---------------------");

        // Void methods (no return value)
        greet();
        greet("Alice");
        greet("Bob", 25);

        // Methods with return values
        int sum = add(5, 3);
        System.out.println("5 + 3 = " + sum);

        double average = calculateAverage(10, 20, 30);
        System.out.println("Average of 10, 20, 30 = " + average);

        // Method chaining
        String result = processString("hello world").toUpperCase();
        System.out.println("Processed string: " + result);

        System.out.println();
    }

    /**
     * Demonstrates method overloading
     */
    public static void demonstrateMethodOverloading() {
        System.out.println("2. METHOD OVERLOADING");
        System.out.println("----------------------");

        Calculator calc = new Calculator();

        // Same method name, different parameters
        System.out.println("add(int, int): " + calc.add(5, 3));
        System.out.println("add(double, double): " + calc.add(5.5, 3.2));
        System.out.println("add(int, int, int): " + calc.add(1, 2, 3));
        System.out.println("add(String, String): " + calc.add("Hello ", "World"));

        // Display method overloading
        Display display = new Display();
        display.show(42);
        display.show("Hello World");
        display.show(3.14, 2);
        display.show(true);

        System.out.println();
    }

    /**
     * Demonstrates parameter passing concepts
     */
    public static void demonstrateParameterPassing() {
        System.out.println("3. PARAMETER PASSING");
        System.out.println("--------------------");

        // Primitive parameters (pass by value)
        int num = 10;
        System.out.println("Before modifyPrimitive: num = " + num);
        modifyPrimitive(num);
        System.out.println("After modifyPrimitive: num = " + num);

        // Reference parameters (pass by value of reference)
        int[] array = {1, 2, 3};
        System.out.println("Before modifyArray: array[0] = " + array[0]);
        modifyArray(array);
        System.out.println("After modifyArray: array[0] = " + array[0]);

        // Object parameters
        StringBuilder sb = new StringBuilder("Hello");
        System.out.println("Before modifyStringBuilder: " + sb);
        modifyStringBuilder(sb);
        System.out.println("After modifyStringBuilder: " + sb);

        // Immutable objects (String)
        String str = "Hello";
        System.out.println("Before modifyString: " + str);
        modifyString(str);
        System.out.println("After modifyString: " + str);

        System.out.println();
    }

    /**
     * Demonstrates different return types
     */
    public static void demonstrateReturnTypes() {
        System.out.println("4. RETURN TYPES");
        System.out.println("----------------");

        // Primitive return types
        int intResult = getRandomInt();
        double doubleResult = getRandomDouble();
        boolean boolResult = isEven(4);

        System.out.println("Random int: " + intResult);
        System.out.println("Random double: " + doubleResult);
        System.out.println("Is 4 even? " + boolResult);

        // Reference return types
        String strResult = getGreeting("Alice");
        int[] arrayResult = getFibonacciArray(5);
        Calculator calcResult = createCalculator();

        System.out.println("Greeting: " + strResult);
        System.out.println("Fibonacci array: " + java.util.Arrays.toString(arrayResult));
        System.out.println("Calculator result: " + calcResult.add(10, 5));

        // Void methods (implicitly return nothing)
        printMessage("This method returns nothing");

        System.out.println();
    }

    /**
     * Demonstrates static vs instance methods
     */
    public static void demonstrateStaticVsInstance() {
        System.out.println("5. STATIC VS INSTANCE METHODS");
        System.out.println("-----------------------------");

        // Static methods - called on class
        System.out.println("Static counter before: " + methods_basics.staticCounter);
        incrementStaticCounter();
        incrementStaticCounter();
        System.out.println("Static counter after: " + methods_basics.staticCounter);

        // Instance methods - called on objects
        methods_basics obj1 = new methods_basics();
        methods_basics obj2 = new methods_basics();

        System.out.println("obj1 instance counter: " + obj1.instanceCounter);
        System.out.println("obj2 instance counter: " + obj2.instanceCounter);

        obj1.incrementInstanceCounter();
        obj1.incrementInstanceCounter();
        obj2.incrementInstanceCounter();

        System.out.println("After increments:");
        System.out.println("obj1 instance counter: " + obj1.instanceCounter);
        System.out.println("obj2 instance counter: " + obj2.instanceCounter);

        // Static methods can be called without object
        System.out.println("Static method result: " + staticMethod());

        // Instance methods require object
        System.out.println("Instance method result: " + obj1.instanceMethod());

        System.out.println();
    }

    /**
     * Demonstrates method scope and visibility
     */
    public static void demonstrateScopeAndVisibility() {
        System.out.println("6. METHOD SCOPE AND VISIBILITY");
        System.out.println("-------------------------------");

        // Local variables
        int localVar = 10;
        System.out.println("Local variable: " + localVar);

        // Method parameters
        demonstrateScopeHelper("parameter");

        // Block scope
        {
            int blockVar = 20;
            System.out.println("Block variable: " + blockVar);
        }
        // blockVar is not accessible here

        // Method visibility
        VisibilityDemo demo = new VisibilityDemo();
        demo.publicMethod();    // Accessible everywhere
        demo.protectedMethod(); // Accessible in same package
        demo.packageMethod();   // Accessible in same package
        // demo.privateMethod(); // Not accessible outside class

        System.out.println();
    }

    /**
     * Practical examples combining method concepts
     */
    public static void demonstratePracticalExamples() {
        System.out.println("7. PRACTICAL EXAMPLES");
        System.out.println("---------------------");

        // Example 1: Math utilities
        System.out.println("Math utilities:");
        System.out.println("Factorial of 5: " + factorial(5));
        System.out.println("Is 17 prime? " + isPrime(17));
        System.out.println("GCD of 48 and 18: " + gcd(48, 18));

        // Example 2: String utilities
        System.out.println("\nString utilities:");
        String text = "Hello World";
        System.out.println("Reverse: " + reverseString(text));
        System.out.println("Is palindrome? " + isPalindrome(text));
        System.out.println("Word count: " + countWords(text));

        // Example 3: Array utilities
        System.out.println("\nArray utilities:");
        int[] numbers = {3, 1, 4, 1, 5, 9, 2, 6};
        System.out.println("Original: " + java.util.Arrays.toString(numbers));
        System.out.println("Max: " + findMax(numbers));
        System.out.println("Sum: " + calculateSum(numbers));
        System.out.println("Average: " + calculateArrayAverage(numbers));

        // Example 4: Validation methods
        System.out.println("\nValidation methods:");
        String email = "user@example.com";
        String phone = "123-456-7890";
        System.out.println("Valid email? " + isValidEmail(email));
        System.out.println("Valid phone? " + isValidPhone(phone));

        System.out.println();
    }

    // ===== BASIC METHODS =====

    // Void method with no parameters
    public static void greet() {
        System.out.println("Hello, World!");
    }

    // Void method with one parameter
    public static void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }

    // Void method with multiple parameters
    public static void greet(String name, int age) {
        System.out.println("Hello, " + name + "! You are " + age + " years old.");
    }

    // Method with return value
    public static int add(int a, int b) {
        return a + b;
    }

    // Method with multiple parameters and return value
    public static double calculateAverage(int... numbers) {
        if (numbers.length == 0) return 0;
        int sum = 0;
        for (int num : numbers) {
            sum += num;
        }
        return (double) sum / numbers.length;
    }

    // Method returning String
    public static String processString(String input) {
        return input.trim().toLowerCase();
    }

    // ===== PARAMETER PASSING METHODS =====

    public static void modifyPrimitive(int num) {
        num = 999; // This change doesn't affect the original
        System.out.println("Inside modifyPrimitive: num = " + num);
    }

    public static void modifyArray(int[] arr) {
        arr[0] = 999; // This change affects the original array
        System.out.println("Inside modifyArray: arr[0] = " + arr[0]);
    }

    public static void modifyStringBuilder(StringBuilder sb) {
        sb.append(" Modified"); // This change affects the original object
        System.out.println("Inside modifyStringBuilder: " + sb);
    }

    public static void modifyString(String str) {
        str = str + " Modified"; // This creates a new string, doesn't affect original
        System.out.println("Inside modifyString: " + str);
    }

    // ===== RETURN TYPE METHODS =====

    public static int getRandomInt() {
        return (int) (Math.random() * 100);
    }

    public static double getRandomDouble() {
        return Math.random();
    }

    public static boolean isEven(int num) {
        return num % 2 == 0;
    }

    public static String getGreeting(String name) {
        return "Hello, " + name + "! Welcome to Java methods.";
    }

    public static int[] getFibonacciArray(int n) {
        int[] fib = new int[n];
        if (n > 0) fib[0] = 0;
        if (n > 1) fib[1] = 1;
        for (int i = 2; i < n; i++) {
            fib[i] = fib[i-1] + fib[i-2];
        }
        return fib;
    }

    public static Calculator createCalculator() {
        return new Calculator();
    }

    public static void printMessage(String message) {
        System.out.println("Message: " + message);
    }

    // ===== STATIC VS INSTANCE METHODS =====

    public static void incrementStaticCounter() {
        staticCounter++;
    }

    public void incrementInstanceCounter() {
        instanceCounter++;
    }

    public static String staticMethod() {
        return "This is a static method";
    }

    public String instanceMethod() {
        return "This is an instance method of object with counter: " + instanceCounter;
    }

    // ===== SCOPE HELPER =====

    public static void demonstrateScopeHelper(String param) {
        System.out.println("Parameter: " + param);
        String localVar = "local";
        System.out.println("Local variable: " + localVar);
    }

    // ===== PRACTICAL UTILITY METHODS =====

    public static long factorial(int n) {
        if (n <= 1) return 1;
        return n * factorial(n - 1);
    }

    public static boolean isPrime(int n) {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 == 0 || n % 3 == 0) return false;
        for (int i = 5; i * i <= n; i += 6) {
            if (n % i == 0 || n % (i + 2) == 0) return false;
        }
        return true;
    }

    public static int gcd(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    public static String reverseString(String str) {
        return new StringBuilder(str).reverse().toString();
    }

    public static boolean isPalindrome(String str) {
        String clean = str.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
        return clean.equals(new StringBuilder(clean).reverse().toString());
    }

    public static int countWords(String text) {
        if (text == null || text.trim().isEmpty()) return 0;
        return text.trim().split("\\s+").length;
    }

    public static int findMax(int[] arr) {
        if (arr.length == 0) return Integer.MIN_VALUE;
        int max = arr[0];
        for (int num : arr) {
            if (num > max) max = num;
        }
        return max;
    }

    public static int calculateSum(int[] arr) {
        int sum = 0;
        for (int num : arr) {
            sum += num;
        }
        return sum;
    }

    public static double calculateArrayAverage(int[] arr) {
        if (arr.length == 0) return 0;
        return (double) calculateSum(arr) / arr.length;
    }

    public static boolean isValidEmail(String email) {
        return email.matches("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}");
    }

    public static boolean isValidPhone(String phone) {
        return phone.matches("\\d{3}-\\d{3}-\\d{4}");
    }
}

// ===== SUPPORTING CLASSES =====

class Calculator {
    // Method overloading examples
    public int add(int a, int b) {
        return a + b;
    }

    public double add(double a, double b) {
        return a + b;
    }

    public int add(int a, int b, int c) {
        return a + b + c;
    }

    public String add(String a, String b) {
        return a + b;
    }
}

class Display {
    // Method overloading for display
    public void show(int value) {
        System.out.println("Integer: " + value);
    }

    public void show(String value) {
        System.out.println("String: " + value);
    }

    public void show(double value, int decimals) {
        System.out.printf("Double (%.1f): %." + decimals + "f%n", value, value);
    }

    public void show(boolean value) {
        System.out.println("Boolean: " + value);
    }
}

class VisibilityDemo {
    public void publicMethod() {
        System.out.println("This is a public method");
    }

    protected void protectedMethod() {
        System.out.println("This is a protected method");
    }

    void packageMethod() {
        System.out.println("This is a package-private method");
    }

    private void privateMethod() {
        System.out.println("This is a private method");
    }
}