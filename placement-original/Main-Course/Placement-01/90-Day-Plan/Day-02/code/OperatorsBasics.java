/**
 * Day 2: Java Operators & Control Flow
 * File: operators_basics.java
 * Topic: Complete Java Operators Mastery
 * Author: Placement Preparation System
 */

public class OperatorsBasics {

    public static void main(String[] args) {
        System.out.println("=== JAVA OPERATORS MASTERY ===\n");

        // Section 1: Arithmetic Operators
        demonstrateArithmeticOperators();

        // Section 2: Relational & Logical Operators
        demonstrateRelationalLogicalOperators();

        // Section 3: Bitwise & Advanced Operators
        demonstrateBitwiseAdvancedOperators();

        // Section 4: Operator Precedence Examples
        demonstrateOperatorPrecedence();

        // Section 5: Practical Applications
        demonstratePracticalApplications();
    }

    /**
     * Section 1: Arithmetic Operators
     * Covers: +, -, *, /, %, ++, --, +=, -=, *=, /=, %=
     */
    public static void demonstrateArithmeticOperators() {
        System.out.println("1. ARITHMETIC OPERATORS");
        System.out.println("========================");

        int a = 10, b = 3;
        double x = 10.5, y = 3.0;

        // Basic arithmetic
        System.out.println("Basic Arithmetic:");
        System.out.println("a = " + a + ", b = " + b);
        System.out.println("a + b = " + (a + b));    // Addition
        System.out.println("a - b = " + (a - b));    // Subtraction
        System.out.println("a * b = " + (a * b));    // Multiplication
        System.out.println("a / b = " + (a / b));    // Integer division
        System.out.println("a % b = " + (a % b));    // Modulus

        // Floating point division
        System.out.println("\nFloating Point Division:");
        System.out.println("x = " + x + ", y = " + y);
        System.out.println("x / y = " + (x / y));    // Floating point division

        // Increment/Decrement operators
        System.out.println("\nIncrement/Decrement Operators:");
        int counter = 5;
        System.out.println("Original counter: " + counter);
        System.out.println("counter++ (post-increment): " + counter++); // Post-increment
        System.out.println("After post-increment: " + counter);
        System.out.println("++counter (pre-increment): " + ++counter); // Pre-increment
        System.out.println("counter-- (post-decrement): " + counter--); // Post-decrement
        System.out.println("--counter (pre-decrement): " + --counter); // Pre-decrement

        // Compound assignment operators
        System.out.println("\nCompound Assignment Operators:");
        int num = 10;
        System.out.println("Original num: " + num);
        num += 5;  System.out.println("num += 5: " + num);   // num = num + 5
        num -= 3;  System.out.println("num -= 3: " + num);   // num = num - 3
        num *= 2;  System.out.println("num *= 2: " + num);   // num = num * 2
        num /= 4;  System.out.println("num /= 4: " + num);   // num = num / 4
        num %= 3;  System.out.println("num %= 3: " + num);   // num = num % 3

        System.out.println();
    }

    /**
     * Section 2: Relational & Logical Operators
     * Covers: ==, !=, <, >, <=, >=, &&, ||, !
     */
    public static void demonstrateRelationalLogicalOperators() {
        System.out.println("2. RELATIONAL & LOGICAL OPERATORS");
        System.out.println("===================================");

        int p = 10, q = 20, r = 10;
        boolean flag1 = true, flag2 = false;

        // Relational operators
        System.out.println("Relational Operators:");
        System.out.println("p = " + p + ", q = " + q + ", r = " + r);
        System.out.println("p == r: " + (p == r));     // Equal to
        System.out.println("p != q: " + (p != q));     // Not equal to
        System.out.println("p < q: " + (p < q));       // Less than
        System.out.println("p > q: " + (p > q));       // Greater than
        System.out.println("p <= r: " + (p <= r));     // Less than or equal
        System.out.println("q >= r: " + (q >= r));     // Greater than or equal

        // Logical operators
        System.out.println("\nLogical Operators:");
        System.out.println("flag1 = " + flag1 + ", flag2 = " + flag2);
        System.out.println("flag1 && flag2: " + (flag1 && flag2));  // AND
        System.out.println("flag1 || flag2: " + (flag1 || flag2));  // OR
        System.out.println("!flag1: " + (!flag1));                  // NOT
        System.out.println("!flag2: " + (!flag2));                  // NOT

        // Complex boolean expressions
        System.out.println("\nComplex Boolean Expressions:");
        int age = 25;
        boolean hasLicense = true;
        boolean isStudent = false;

        boolean canDrive = (age >= 18) && hasLicense;
        boolean needsDiscount = (age < 25) || isStudent;
        boolean isEligible = canDrive && !isStudent;

        System.out.println("Age: " + age + ", Has License: " + hasLicense + ", Is Student: " + isStudent);
        System.out.println("Can Drive: " + canDrive);
        System.out.println("Needs Discount: " + needsDiscount);
        System.out.println("Is Eligible: " + isEligible);

        // Short-circuit evaluation demonstration
        System.out.println("\nShort-Circuit Evaluation:");
        boolean result1 = (p < q) && (q < 30);  // Both conditions evaluated
        boolean result2 = (p > q) && (q < 30);  // Second condition not evaluated
        System.out.println("(p < q) && (q < 30): " + result1);
        System.out.println("(p > q) && (q < 30): " + result2);

        System.out.println();
    }

    /**
     * Section 3: Bitwise & Advanced Operators
     * Covers: &, |, ^, ~, <<, >>, >>>, ?:
     */
    public static void demonstrateBitwiseAdvancedOperators() {
        System.out.println("3. BITWISE & ADVANCED OPERATORS");
        System.out.println("================================");

        int num1 = 12;  // Binary: 1100
        int num2 = 10;  // Binary: 1010

        System.out.println("Bitwise Operations:");
        System.out.println("num1 = " + num1 + " (binary: " + Integer.toBinaryString(num1) + ")");
        System.out.println("num2 = " + num2 + " (binary: " + Integer.toBinaryString(num2) + ")");

        System.out.println("num1 & num2: " + (num1 & num2) + " (AND)");      // Bitwise AND
        System.out.println("num1 | num2: " + (num1 | num2) + " (OR)");       // Bitwise OR
        System.out.println("num1 ^ num2: " + (num1 ^ num2) + " (XOR)");      // Bitwise XOR
        System.out.println("~num1: " + (~num1) + " (NOT)");                  // Bitwise NOT

        // Shift operators
        System.out.println("\nShift Operations:");
        int value = 16;  // Binary: 10000
        System.out.println("value = " + value + " (binary: " + Integer.toBinaryString(value) + ")");
        System.out.println("value << 2: " + (value << 2) + " (left shift)");  // Left shift
        System.out.println("value >> 2: " + (value >> 2) + " (right shift)"); // Right shift
        System.out.println("value >>> 2: " + (value >>> 2) + " (unsigned right shift)"); // Unsigned right shift

        // Ternary operator
        System.out.println("\nTernary Operator:");
        int a = 10, b = 20;
        int max = (a > b) ? a : b;
        String result = (a % 2 == 0) ? "Even" : "Odd";
        System.out.println("a = " + a + ", b = " + b);
        System.out.println("Maximum: " + max);
        System.out.println("a is: " + result);

        // instanceof operator
        System.out.println("\ninstanceof Operator:");
        String str = "Hello";
        Integer num = 42;
        Object obj = str;

        System.out.println("str instanceof String: " + (str instanceof String));
        System.out.println("num instanceof Integer: " + (num instanceof Integer));
        System.out.println("obj instanceof String: " + (obj instanceof String));
        System.out.println("num instanceof Number: " + (num instanceof Number));

        System.out.println();
    }

    /**
     * Section 4: Operator Precedence Examples
     * Demonstrates operator precedence rules
     */
    public static void demonstrateOperatorPrecedence() {
        System.out.println("4. OPERATOR PRECEDENCE EXAMPLES");
        System.out.println("===============================");

        int a = 5, b = 10, c = 15;

        // Precedence examples
        System.out.println("Variables: a = " + a + ", b = " + b + ", c = " + c);

        // Multiplication before addition
        int result1 = a + b * c;        // b * c first, then + a
        System.out.println("a + b * c = " + result1 + " (multiplication first)");

        // Parentheses override precedence
        int result2 = (a + b) * c;      // a + b first, then * c
        System.out.println("(a + b) * c = " + result2 + " (parentheses first)");

        // Complex expression
        boolean complex = a < b && b < c || a == 5;
        System.out.println("a < b && b < c || a == 5 = " + complex);

        // Bitwise vs logical
        int bitwise = a & b | c;        // & before |
        System.out.println("a & b | c = " + bitwise + " (& before |)");

        // Assignment precedence
        int x = 5;
        x += x *= 2;  // Right to left: x *= 2 first, then x += result
        System.out.println("x += x *= 2 (x starts as 5): x = " + x);

        System.out.println();
    }

    /**
     * Section 5: Practical Applications
     * Real-world usage examples
     */
    public static void demonstratePracticalApplications() {
        System.out.println("5. PRACTICAL APPLICATIONS");
        System.out.println("=========================");

        // Temperature conversion
        System.out.println("Temperature Conversion:");
        double celsius = 25.0;
        double fahrenheit = (celsius * 9/5) + 32;
        System.out.println(celsius + "°C = " + fahrenheit + "°F");

        // Time calculations
        System.out.println("\nTime Calculations:");
        int totalMinutes = 125;
        int hours = totalMinutes / 60;
        int minutes = totalMinutes % 60;
        System.out.println(totalMinutes + " minutes = " + hours + " hours and " + minutes + " minutes");

        // Bit manipulation for permissions
        System.out.println("\nBit Manipulation (Permissions):");
        int READ = 1, WRITE = 2, EXECUTE = 4;
        int userPermissions = READ | WRITE;  // User has read and write
        System.out.println("User permissions: " + Integer.toBinaryString(userPermissions));
        System.out.println("Can read: " + ((userPermissions & READ) != 0));
        System.out.println("Can write: " + ((userPermissions & WRITE) != 0));
        System.out.println("Can execute: " + ((userPermissions & EXECUTE) != 0));

        // Range checking
        System.out.println("\nRange Checking:");
        int score = 85;
        String grade = (score >= 90) ? "A" :
                      (score >= 80) ? "B" :
                      (score >= 70) ? "C" :
                      (score >= 60) ? "D" : "F";
        System.out.println("Score: " + score + " → Grade: " + grade);

        // Number properties
        System.out.println("\nNumber Properties:");
        int number = 42;
        boolean isEven = (number % 2 == 0);
        boolean isPositive = (number > 0);
        boolean isMultipleOf7 = (number % 7 == 0);
        System.out.println(number + " is even: " + isEven);
        System.out.println(number + " is positive: " + isPositive);
        System.out.println(number + " is multiple of 7: " + isMultipleOf7);

        System.out.println("\n=== OPERATORS MASTERY COMPLETE ===");
    }
}