/**
 * Complete Operators Reference - Day 2
 * All Java operators with detailed examples
 */

public class OperatorsComplete {
    public static void main(String[] args) {
        System.out.println("========================================");
        System.out.println("   COMPLETE JAVA OPERATORS GUIDE");
        System.out.println("========================================\n");
        
        // 1. ARITHMETIC OPERATORS
        arithmeticOperators();
        
        // 2. RELATIONAL OPERATORS
        relationalOperators();
        
        // 3. LOGICAL OPERATORS
        logicalOperators();
        
        // 4. BITWISE OPERATORS
        bitwiseOperators();
        
        // 5. ASSIGNMENT OPERATORS
        assignmentOperators();
        
        // 6. UNARY OPERATORS
        unaryOperators();
        
        // 7. TERNARY OPERATOR
        ternaryOperator();
        
        // 8. OPERATOR PRECEDENCE
        operatorPrecedence();
    }
    
    // ========== 1. ARITHMETIC OPERATORS ==========
    static void arithmeticOperators() {
        System.out.println("=== 1. ARITHMETIC OPERATORS ===\n");
        
        int a = 17, b = 5;
        System.out.println("a = " + a + ", b = " + b);
        
        System.out.println("\nBasic Operations:");
        System.out.println("a + b = " + (a + b));    // 22 (Addition)
        System.out.println("a - b = " + (a - b));    // 12 (Subtraction)
        System.out.println("a * b = " + (a * b));    // 85 (Multiplication)
        System.out.println("a / b = " + (a / b));    // 3  (Integer Division)
        System.out.println("a % b = " + (a % b));    // 2  (Modulus/Remainder)
        
        System.out.println("\nFloating Point Division:");
        System.out.println("(double)a / b = " + ((double)a / b));  // 3.4
        
        System.out.println("\nIncrement/Decrement:");
        int x = 10;
        System.out.println("x = " + x);
        System.out.println("x++ = " + (x++));  // 10 (post-increment, returns then increments)
        System.out.println("x = " + x);        // 11
        System.out.println("++x = " + (++x));  // 12 (pre-increment, increments then returns)
        System.out.println("x-- = " + (x--));  // 12 (post-decrement)
        System.out.println("x = " + x);        // 11
        System.out.println("--x = " + (--x));  // 10 (pre-decrement)
        
        System.out.println("\n" + "=".repeat(40) + "\n");
    }
    
    // ========== 2. RELATIONAL OPERATORS ==========
    static void relationalOperators() {
        System.out.println("=== 2. RELATIONAL OPERATORS ===\n");
        
        int a = 10, b = 20, c = 10;
        System.out.println("a = " + a + ", b = " + b + ", c = " + c);
        
        System.out.println("\nComparisons:");
        System.out.println("a == b: " + (a == b));  // false (Equal to)
        System.out.println("a == c: " + (a == c));  // true
        System.out.println("a != b: " + (a != b));  // true  (Not equal)
        System.out.println("a > b:  " + (a > b));   // false (Greater than)
        System.out.println("a < b:  " + (a < b));   // true  (Less than)
        System.out.println("a >= c: " + (a >= c));  // true  (Greater or equal)
        System.out.println("a <= b: " + (a <= b));  // true  (Less or equal)
        
        System.out.println("\nString Comparison (Wrong Way):");
        String s1 = "Hello";
        String s2 = "Hello";
        String s3 = new String("Hello");
        System.out.println("s1 == s2: " + (s1 == s2));     // true (same reference)
        System.out.println("s1 == s3: " + (s1 == s3));     // false (different reference)
        System.out.println("s1.equals(s3): " + s1.equals(s3));  // true (correct way)
        
        System.out.println("\n" + "=".repeat(40) + "\n");
    }
    
    // ========== 3. LOGICAL OPERATORS ==========
    static void logicalOperators() {
        System.out.println("=== 3. LOGICAL OPERATORS ===\n");
        
        boolean a = true, b = false;
        System.out.println("a = " + a + ", b = " + b);
        
        System.out.println("\nLogical Operations:");
        System.out.println("a && b:  " + (a && b));   // false (AND - both must be true)
        System.out.println("a || b:  " + (a || b));   // true  (OR - at least one true)
        System.out.println("!a:      " + (!a));       // false (NOT - inverts)
        System.out.println("!b:      " + (!b));       // true
        
        System.out.println("\nTruth Table:");
        System.out.println("true  && true  = " + (true && true));    // true
        System.out.println("true  && false = " + (true && false));   // false
        System.out.println("false && true  = " + (false && true));   // false
        System.out.println("false && false = " + (false && false));  // false
        System.out.println();
        System.out.println("true  || true  = " + (true || true));    // true
        System.out.println("true  || false = " + (true || false));   // true
        System.out.println("false || true  = " + (false || true));   // true
        System.out.println("false || false = " + (false || false));  // false
        
        System.out.println("\nShort-Circuit Evaluation:");
        int x = 5;
        // && short-circuits if first is false (doesn't evaluate second)
        boolean result1 = (x < 0) && (++x > 0);
        System.out.println("After (x < 0) && (++x > 0): x = " + x);  // x still 5
        
        // || short-circuits if first is true (doesn't evaluate second)
        boolean result2 = (x > 0) || (++x > 0);
        System.out.println("After (x > 0) || (++x > 0): x = " + x);  // x still 5
        
        System.out.println("\n" + "=".repeat(40) + "\n");
    }
    
    // ========== 4. BITWISE OPERATORS ==========
    static void bitwiseOperators() {
        System.out.println("=== 4. BITWISE OPERATORS ===\n");
        
        int a = 5;  // 0101 in binary
        int b = 3;  // 0011 in binary
        
        System.out.println("a = " + a + " (binary: " + Integer.toBinaryString(a) + ")");
        System.out.println("b = " + b + " (binary: " + Integer.toBinaryString(b) + ")");
        
        System.out.println("\nBitwise Operations:");
        System.out.println("a & b  = " + (a & b) + " (AND:  " + Integer.toBinaryString(a & b) + ")");   // 1 (0001)
        System.out.println("a | b  = " + (a | b) + " (OR:   " + Integer.toBinaryString(a | b) + ")");   // 7 (0111)
        System.out.println("a ^ b  = " + (a ^ b) + " (XOR:  " + Integer.toBinaryString(a ^ b) + ")");   // 6 (0110)
        System.out.println("~a     = " + (~a) + " (NOT:  " + Integer.toBinaryString(~a) + ")");         // -6
        System.out.println("a << 1 = " + (a << 1) + " (Left Shift:  " + Integer.toBinaryString(a << 1) + ")");  // 10
        System.out.println("a >> 1 = " + (a >> 1) + " (Right Shift: " + Integer.toBinaryString(a >> 1) + ")"); // 2
        System.out.println("a >>> 1 = " + (a >>> 1) + " (Unsigned Right Shift)");  // 2
        
        System.out.println("\nPractical Uses:");
        System.out.println("Check if odd: " + a + " & 1 = " + (a & 1));  // 1 if odd, 0 if even
        System.out.println("Multiply by 2: " + a + " << 1 = " + (a << 1));
        System.out.println("Divide by 2: " + a + " >> 1 = " + (a >> 1));
        System.out.println("Swap without temp: using XOR");
        int x = 10, y = 20;
        System.out.println("Before: x=" + x + ", y=" + y);
        x = x ^ y;
        y = x ^ y;
        x = x ^ y;
        System.out.println("After:  x=" + x + ", y=" + y);
        
        System.out.println("\n" + "=".repeat(40) + "\n");
    }
    
    // ========== 5. ASSIGNMENT OPERATORS ==========
    static void assignmentOperators() {
        System.out.println("=== 5. ASSIGNMENT OPERATORS ===\n");
        
        int x = 10;
        System.out.println("Initial x = " + x);
        
        System.out.println("\nCompound Assignments:");
        x += 5;  // x = x + 5
        System.out.println("After x += 5:  x = " + x);   // 15
        
        x -= 3;  // x = x - 3
        System.out.println("After x -= 3:  x = " + x);   // 12
        
        x *= 2;  // x = x * 2
        System.out.println("After x *= 2:  x = " + x);   // 24
        
        x /= 4;  // x = x / 4
        System.out.println("After x /= 4:  x = " + x);   // 6
        
        x %= 4;  // x = x % 4
        System.out.println("After x %= 4:  x = " + x);   // 2
        
        System.out.println("\nBitwise Compound Assignments:");
        x = 5;
        x &= 3;  // x = x & 3
        System.out.println("5 &= 3:  x = " + x);   // 1
        
        x = 5;
        x |= 3;  // x = x | 3
        System.out.println("5 |= 3:  x = " + x);   // 7
        
        x = 5;
        x ^= 3;  // x = x ^ 3
        System.out.println("5 ^= 3:  x = " + x);   // 6
        
        x = 5;
        x <<= 2;  // x = x << 2
        System.out.println("5 <<= 2: x = " + x);   // 20
        
        x = 20;
        x >>= 2;  // x = x >> 2
        System.out.println("20 >>= 2: x = " + x);  // 5
        
        System.out.println("\n" + "=".repeat(40) + "\n");
    }
    
    // ========== 6. UNARY OPERATORS ==========
    static void unaryOperators() {
        System.out.println("=== 6. UNARY OPERATORS ===\n");
        
        int x = 10;
        System.out.println("x = " + x);
        
        System.out.println("\nUnary Operators:");
        System.out.println("+x  = " + (+x));   // 10 (Unary plus)
        System.out.println("-x  = " + (-x));   // -10 (Unary minus)
        System.out.println("++x = " + (++x));  // 11 (Pre-increment)
        System.out.println("x++ = " + (x++));  // 11 (Post-increment)
        System.out.println("x   = " + x);      // 12
        System.out.println("--x = " + (--x));  // 11 (Pre-decrement)
        System.out.println("x-- = " + (x--));  // 11 (Post-decrement)
        System.out.println("x   = " + x);      // 10
        
        boolean flag = true;
        System.out.println("\n!flag = " + (!flag));  // false (Logical NOT)
        
        System.out.println("\nType Cast (Unary):");
        double d = 3.14;
        int i = (int) d;
        System.out.println("(int)3.14 = " + i);  // 3
        
        System.out.println("\n" + "=".repeat(40) + "\n");
    }
    
    // ========== 7. TERNARY OPERATOR ==========
    static void ternaryOperator() {
        System.out.println("=== 7. TERNARY OPERATOR ===\n");
        
        System.out.println("Syntax: condition ? valueIfTrue : valueIfFalse");
        
        int a = 10, b = 20;
        int max = (a > b) ? a : b;
        System.out.println("\nMax of " + a + " and " + b + ": " + max);
        
        int min = (a < b) ? a : b;
        System.out.println("Min of " + a + " and " + b + ": " + min);
        
        String result = (a > b) ? "a is greater" : "b is greater or equal";
        System.out.println(result);
        
        // Nested ternary
        int num = 0;
        String type = (num > 0) ? "Positive" : (num < 0) ? "Negative" : "Zero";
        System.out.println("\n" + num + " is: " + type);
        
        // Find max of 3 numbers
        int x = 5, y = 10, z = 7;
        int maxOfThree = (x > y) ? ((x > z) ? x : z) : ((y > z) ? y : z);
        System.out.println("Max of " + x + ", " + y + ", " + z + ": " + maxOfThree);
        
        System.out.println("\n" + "=".repeat(40) + "\n");
    }
    
    // ========== 8. OPERATOR PRECEDENCE ==========
    static void operatorPrecedence() {
        System.out.println("=== 8. OPERATOR PRECEDENCE ===\n");
        
        System.out.println("Operator Precedence (Highest to Lowest):");
        System.out.println("1. Postfix:        expr++, expr--");
        System.out.println("2. Unary:          ++expr, --expr, +expr, -expr, ~, !");
        System.out.println("3. Multiplicative: *, /, %");
        System.out.println("4. Additive:       +, -");
        System.out.println("5. Shift:          <<, >>, >>>");
        System.out.println("6. Relational:     <, >, <=, >=, instanceof");
        System.out.println("7. Equality:       ==, !=");
        System.out.println("8. Bitwise AND:    &");
        System.out.println("9. Bitwise XOR:    ^");
        System.out.println("10. Bitwise OR:    |");
        System.out.println("11. Logical AND:   &&");
        System.out.println("12. Logical OR:    ||");
        System.out.println("13. Ternary:       ?:");
        System.out.println("14. Assignment:    =, +=, -=, *=, /=, %=, &=, ^=, |=, <<=, >>=, >>>=");
        
        System.out.println("\nExamples:");
        int result1 = 2 + 3 * 4;  // * has higher precedence than +
        System.out.println("2 + 3 * 4 = " + result1);  // 14, not 20
        
        int result2 = (2 + 3) * 4;  // Parentheses override precedence
        System.out.println("(2 + 3) * 4 = " + result2);  // 20
        
        boolean result3 = 5 > 3 && 10 < 20;  // Relational before logical
        System.out.println("5 > 3 && 10 < 20 = " + result3);  // true
        
        int x = 5;
        int result4 = x++ * 2;  // Postfix has higher precedence
        System.out.println("x++ * 2 (x=5) = " + result4 + ", x = " + x);  // 10, x=6
        
        System.out.println("\n" + "=".repeat(40));
    }
}
