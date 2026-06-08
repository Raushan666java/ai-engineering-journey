import java.util.Scanner;

public class JavaOperators {
    public static void main(String[] args) {
        System.out.println("=== Java Operators Demonstration ===\n");

        // Arithmetic Operators
        System.out.println("1. ARITHMETIC OPERATORS");
        int a = 10, b = 3;
        System.out.println("a = " + a + ", b = " + b);
        System.out.println("a + b = " + (a + b));  // Addition
        System.out.println("a - b = " + (a - b));  // Subtraction
        System.out.println("a * b = " + (a * b));  // Multiplication
        System.out.println("a / b = " + (a / b));  // Division (integer)
        System.out.println("a % b = " + (a % b));  // Modulo
        System.out.println();

        // Relational Operators
        System.out.println("2. RELATIONAL OPERATORS");
        System.out.println("a == b: " + (a == b));  // Equal to
        System.out.println("a != b: " + (a != b));  // Not equal to
        System.out.println("a > b: " + (a > b));    // Greater than
        System.out.println("a < b: " + (a < b));    // Less than
        System.out.println("a >= b: " + (a >= b));  // Greater than or equal
        System.out.println("a <= b: " + (a <= b));  // Less than or equal
        System.out.println();

        // Logical Operators
        System.out.println("3. LOGICAL OPERATORS");
        boolean x = true, y = false;
        System.out.println("x = " + x + ", y = " + y);
        System.out.println("x && y: " + (x && y));  // Logical AND
        System.out.println("x || y: " + (x || y));  // Logical OR
        System.out.println("!x: " + (!x));          // Logical NOT
        System.out.println("!y: " + (!y));          // Logical NOT
        System.out.println();

        // Bitwise Operators
        System.out.println("4. BITWISE OPERATORS");
        int p = 12, q = 10;  // 12 = 1100, 10 = 1010 in binary
        System.out.println("p = " + p + " (binary: 1100)");
        System.out.println("q = " + q + " (binary: 1010)");
        System.out.println("p & q = " + (p & q) + " (bitwise AND)");   // 1000 = 8
        System.out.println("p | q = " + (p | q) + " (bitwise OR)");    // 1110 = 14
        System.out.println("p ^ q = " + (p ^ q) + " (bitwise XOR)");   // 0110 = 6
        System.out.println("~p = " + (~p) + " (bitwise NOT)");         // Inverted bits
        System.out.println("p << 1 = " + (p << 1) + " (left shift)");  // 24
        System.out.println("p >> 1 = " + (p >> 1) + " (right shift)"); // 6
        System.out.println();

        // Assignment Operators
        System.out.println("5. ASSIGNMENT OPERATORS");
        int num = 10;
        System.out.println("Initial value: num = " + num);
        num += 5;  // num = num + 5
        System.out.println("After num += 5: " + num);
        num -= 3;  // num = num - 3
        System.out.println("After num -= 3: " + num);
        num *= 2;  // num = num * 2
        System.out.println("After num *= 2: " + num);
        num /= 4;  // num = num / 4
        System.out.println("After num /= 4: " + num);
        num %= 3;  // num = num % 3
        System.out.println("After num %= 3: " + num);
        System.out.println();

        // Ternary Operator
        System.out.println("6. TERNARY OPERATOR");
        int age = 20;
        String status = (age >= 18) ? "Adult" : "Minor";
        System.out.println("Age: " + age + " -> Status: " + status);

        int max = (a > b) ? a : b;
        System.out.println("Maximum of " + a + " and " + b + " is: " + max);
        System.out.println();

        // Operator Precedence Demonstration
        System.out.println("7. OPERATOR PRECEDENCE");
        int result1 = 2 + 3 * 4;     // Multiplication before addition
        int result2 = (2 + 3) * 4;   // Parentheses change precedence
        System.out.println("2 + 3 * 4 = " + result1);
        System.out.println("(2 + 3) * 4 = " + result2);

        boolean complex = (a > 5) && (b < 10) || (a == 10);
        System.out.println("(a > 5) && (b < 10) || (a == 10) = " + complex);
        System.out.println();

        // Practical Examples
        System.out.println("8. PRACTICAL EXAMPLES");

        // Even/Odd check
        int number = 15;
        String evenOdd = (number % 2 == 0) ? "Even" : "Odd";
        System.out.println(number + " is " + evenOdd);

        // Grade classification
        int score = 85;
        String grade = (score >= 90) ? "A" :
                      (score >= 80) ? "B" :
                      (score >= 70) ? "C" :
                      (score >= 60) ? "D" : "F";
        System.out.println("Score: " + score + " -> Grade: " + grade);

        // Bitwise operations for permissions
        int permissions = 0b111;  // Read, Write, Execute
        boolean canRead = (permissions & 0b100) != 0;
        boolean canWrite = (permissions & 0b010) != 0;
        boolean canExecute = (permissions & 0b001) != 0;
        System.out.println("Permissions: " + Integer.toBinaryString(permissions));
        System.out.println("Can Read: " + canRead);
        System.out.println("Can Write: " + canWrite);
        System.out.println("Can Execute: " + canExecute);
    }
}