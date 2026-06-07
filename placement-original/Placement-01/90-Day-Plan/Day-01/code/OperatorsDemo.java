/**
 * File: OperatorsDemo.java
 * Description: Demonstrates various operators in Java
 * Day: 1 of 90
 */
public class OperatorsDemo {
    public static void main(String[] args) {
        int a = 15, b = 4;
        
        // Arithmetic Operators
        System.out.println("=== Arithmetic Operators ===");
        System.out.println("a = " + a + ", b = " + b);
        System.out.println("a + b = " + (a + b));  // 19
        System.out.println("a - b = " + (a - b));  // 11
        System.out.println("a * b = " + (a * b));  // 60
        System.out.println("a / b = " + (a / b));  // 3 (integer division)
        System.out.println("a % b = " + (a % b));  // 3 (remainder)
        
        // Relational/Comparison Operators
        System.out.println("\n=== Relational Operators ===");
        System.out.println("a == b: " + (a == b));  // false
        System.out.println("a != b: " + (a != b));  // true
        System.out.println("a > b: " + (a > b));    // true
        System.out.println("a < b: " + (a < b));    // false
        System.out.println("a >= b: " + (a >= b));  // true
        System.out.println("a <= b: " + (a <= b));  // false
        
        // Logical Operators
        System.out.println("\n=== Logical Operators ===");
        boolean x = true, y = false;
        System.out.println("x = " + x + ", y = " + y);
        System.out.println("x && y: " + (x && y));  // false (AND)
        System.out.println("x || y: " + (x || y));  // true (OR)
        System.out.println("!x: " + (!x));          // false (NOT)
        System.out.println("!y: " + (!y));          // true (NOT)
        
        // Assignment Operators
        System.out.println("\n=== Assignment Operators ===");
        int num = 10;
        System.out.println("Initial num: " + num);
        num += 5;  // num = num + 5
        System.out.println("After num += 5: " + num);  // 15
        num -= 3;  // num = num - 3
        System.out.println("After num -= 3: " + num);  // 12
        num *= 2;  // num = num * 2
        System.out.println("After num *= 2: " + num);  // 24
        num /= 4;  // num = num / 4
        System.out.println("After num /= 4: " + num);  // 6
        num %= 4;  // num = num % 4
        System.out.println("After num %= 4: " + num);  // 2
        
        // Increment/Decrement Operators
        System.out.println("\n=== Increment/Decrement Operators ===");
        int count = 5;
        System.out.println("Initial count: " + count);
        System.out.println("count++: " + count++);  // prints 5, then increments to 6
        System.out.println("Current count: " + count);  // 6
        System.out.println("++count: " + ++count);  // increments to 7, then prints 7
        System.out.println("Current count: " + count);  // 7
        System.out.println("count--: " + count--);  // prints 7, then decrements to 6
        System.out.println("Current count: " + count);  // 6
        System.out.println("--count: " + --count);  // decrements to 5, then prints 5
        System.out.println("Current count: " + count);  // 5
        
        // Ternary Operator
        System.out.println("\n=== Ternary Operator ===");
        int max = (a > b) ? a : b;
        System.out.println("Max of " + a + " and " + b + ": " + max);
        
        int min = (a < b) ? a : b;
        System.out.println("Min of " + a + " and " + b + ": " + min);
        
        // Bitwise Operators (Bonus)
        System.out.println("\n=== Bitwise Operators (Bonus) ===");
        int p = 5;  // 0101 in binary
        int q = 3;  // 0011 in binary
        System.out.println("p = " + p + " (binary: " + Integer.toBinaryString(p) + ")");
        System.out.println("q = " + q + " (binary: " + Integer.toBinaryString(q) + ")");
        System.out.println("p & q: " + (p & q) + " (AND)");      // 1 (0001)
        System.out.println("p | q: " + (p | q) + " (OR)");       // 7 (0111)
        System.out.println("p ^ q: " + (p ^ q) + " (XOR)");      // 6 (0110)
        System.out.println("~p: " + (~p) + " (NOT)");            // -6
        System.out.println("p << 1: " + (p << 1) + " (Left Shift)");   // 10
        System.out.println("p >> 1: " + (p >> 1) + " (Right Shift)");  // 2
    }
}
