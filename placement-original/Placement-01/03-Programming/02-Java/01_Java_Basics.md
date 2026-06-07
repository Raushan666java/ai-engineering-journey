# ☕ Java Basics - Quick Study Notes

## 🎯 Learning Strategy
- **Active Recall**: Test yourself after each section
- **Spaced Repetition**: Review daily for 3 days, then weekly
- **Code-First**: Write code for every concept immediately

## 1. Java Environment & Setup

### Key Points
```java
// Java execution process
Source Code (.java) → Compiler (javac) → Bytecode (.class) → JVM → Machine Code
```

**Quick Commands:**
```bash
javac HelloWorld.java  # Compile
java HelloWorld        # Run
java -version          # Check Java version
javadoc HelloWorld.java # Generate documentation
```

### JDK vs JRE vs JVM
```
JDK (Java Development Kit):
  - Complete development package
  - Includes JRE + development tools
  - Contains: compiler, debugger, documentation tools

JRE (Java Runtime Environment):
  - Needed to run Java applications
  - Contains: JVM + libraries + other components

JVM (Java Virtual Machine):
  - Executes Java bytecode
  - Platform-dependent (different for each OS)
  - Provides memory management and security
```

### Memory Trick
**WORA**: Write Once, Run Anywhere (Java's platform independence)

## 2. Variables & Data Types

### Primitive Types (8 total)
```java
// Memory sizes (bytes): 1-2-4-8 pattern
byte b = 127;        // 1 byte (-128 to 127)
short s = 32767;     // 2 bytes (-32K to 32K)
int i = 2147483647;  // 4 bytes (-2B to 2B)
long l = 9223372036854775807L; // 8 bytes

float f = 3.14f;     // 4 bytes (6-7 decimal digits)
double d = 3.14159;  // 8 bytes (15-16 decimal digits)

char c = 'A';        // 2 bytes (Unicode)
boolean flag = true; // 1 bit (true/false)
```

### Type Casting
```java
// Implicit casting (widening - no data loss)
byte b = 100;
int i = b;    // byte → int
long l = i;   // int → long
float f = l;  // long → float
double d = f; // float → double

// Explicit casting (narrowing - possible data loss)
double d = 100.99;
float f = (float) d;  // double → float
long l = (long) f;    // float → long
int i = (int) l;      // long → int
byte b = (byte) i;    // int → byte
```

### Quick Memory Technique
**"Byte Short Int Long, Float Double Char Boolean"** - Remember in pairs!

## 3. Operators

### Arithmetic Operators
```java
int a = 10, b = 3;
System.out.println(a + b);  // 13 (Addition)
System.out.println(a - b);  // 7  (Subtraction)
System.out.println(a * b);  // 30 (Multiplication)
System.out.println(a / b);  // 3  (Division - integer)
System.out.println(a % b);  // 1  (Modulus - remainder)
```

### Comparison & Logical
```java
// Comparison: == != < > <= >=
// Logical: && || ! (AND, OR, NOT)
boolean result = (a > b) && (a != 0); // true
```

### Bitwise & Assignment Operators
```java
// Bitwise: & | ^ ~ << >> >>>
int x = 5;  // 101 in binary
int y = 3;  // 011 in binary
System.out.println(x & y);  // 1 (AND: 001)
System.out.println(x | y);  // 7 (OR: 111)
System.out.println(x ^ y);  // 6 (XOR: 110)
System.out.println(~x);     // -6 (NOT)
System.out.println(x << 1); // 10 (Left shift: 1010)

// Assignment: += -= *= /= %= &= |= ^= <<= >>= >>>=
int z = 10;
z += 5;  // Same as: z = z + 5
```

### Quick Trick
**Increment/Decrement:**
- `++i` (pre): increment first, then use
- `i++` (post): use first, then increment

## 4. Control Structures

### If-Else Pattern
```java
if (condition1) {
    // code
} else if (condition2) {
    // code
} else {
    // default
}
```

### Switch Statement
```java
switch (variable) {
    case value1:
        // code
        break;
    case value2:
        // code
        break;
    default:
        // default code
}
```

### Loops Quick Reference
```java
// For loop - when you know iterations
for (int i = 0; i < n; i++) { }

// While loop - condition-based
while (condition) { }

// Do-while - execute at least once
do { } while (condition);

// Enhanced for loop - for collections
for (int num : array) { }
```

## 5. Arrays

### Declaration & Initialization
```java
// Method 1: Declare then initialize
int[] arr = new int[5];
arr[0] = 10;

// Method 2: Declare and initialize together
int[] arr = {1, 2, 3, 4, 5};

// Method 3: Using new keyword
int[] arr = new int[]{1, 2, 3, 4, 5};
```

### 2D Arrays
```java
int[][] matrix = new int[3][4];  // 3 rows, 4 columns
int[][] matrix = {{1,2}, {3,4}, {5,6}};
```

### Array Operations
```java
int[] arr = {5, 2, 8, 1, 9};
Arrays.sort(arr);           // Sort array
int index = Arrays.binarySearch(arr, 8); // Binary search (array must be sorted)
String str = Arrays.toString(arr);       // Convert to string
Arrays.fill(arr, 0);        // Fill array with value
int[] copy = Arrays.copyOf(arr, arr.length); // Create copy
boolean equal = Arrays.equals(arr, copy);    // Compare arrays
```

### Common Array Algorithms
```java
// Find maximum value
int max = arr[0];
for (int i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
}

// Calculate sum
int sum = 0;
for (int num : arr) {
    sum += num;
}

// Check if array contains value
boolean contains = false;
for (int num : arr) {
    if (num == target) {
        contains = true;
        break;
    }
}
```

## 6. Strings

### String Creation
```java
String s1 = "Hello";           // String literal (String pool)
String s2 = new String("Hello"); // New object (Heap)
```

### Important String Methods
```java
String str = "Hello World";
str.length();              // 11
str.charAt(0);            // 'H'
str.substring(0, 5);      // "Hello"
str.indexOf("World");     // 6
str.toLowerCase();        // "hello world"
str.toUpperCase();        // "HELLO WORLD"
str.trim();              // Remove leading/trailing spaces
str.split(" ");          // Split into array
str.replace("Hello", "Hi"); // "Hi World"
str.startsWith("Hello");  // true
str.endsWith("World");    // true
str.contains("lo Wo");    // true
str.isEmpty();            // false
"  text  ".strip();       // "text" (Java 11+)
```

### String vs StringBuilder vs StringBuffer
```java
// String - Immutable, thread-safe
String s = "Hello";
s += " World"; // Creates new object

// StringBuilder - Mutable, not thread-safe, faster
StringBuilder sb = new StringBuilder("Hello");
sb.append(" World"); // Modifies existing object

// StringBuffer - Mutable, thread-safe, slower
StringBuffer sbf = new StringBuffer("Hello");
sbf.append(" World");
```

## 🧠 Quick Learning Techniques

### 1. Acronyms & Memory Aids
- **BODMAS**: Brackets, Orders, Division, Multiplication, Addition, Subtraction
- **PEMDAS**: Parentheses, Exponents, Multiplication, Division, Addition, Subtraction

### 2. Pattern Recognition
```java
// Loop patterns to memorize
for (int i = 0; i < n; i++)      // 0 to n-1
for (int i = 1; i <= n; i++)     // 1 to n
for (int i = n-1; i >= 0; i--)   // n-1 to 0 (reverse)
```

### 3. Common Mistakes to Avoid
- Using `=` instead of `==` for comparison
- Array index out of bounds (remember 0-based indexing)
- Forgetting `break` in switch statements
- Infinite loops (check loop conditions)

### 4. Java Naming Conventions
```java
// Classes: PascalCase (start with uppercase)
public class MyClass { }

// Methods and variables: camelCase (start with lowercase)
public void myMethod() { }
int myVariable = 10;

// Constants: UPPER_SNAKE_CASE
public static final int MAX_SIZE = 100;

// Packages: all lowercase
package com.example.myapp;
```

### 5. Memory Management
```
// Stack vs Heap
Stack: Stores primitive types and references
       Method call frames
       Local variables
       Fixed size, faster access

Heap:  Stores objects and arrays
       Dynamic size
       Garbage collected
       Shared across threads
```

## 📝 Practice Problems (15 minutes daily)

### Easy Level
1. Print numbers 1 to 100
   ```java
   // Solution
   for (int i = 1; i <= 100; i++) {
       System.out.println(i);
   }
   ```

2. Find largest of 3 numbers
   ```java
   // Solution
   int a = 10, b = 20, c = 15;
   int max = a;
   if (b > max) max = b;
   if (c > max) max = c;
   System.out.println("Largest: " + max);
   ```

3. Check if number is even/odd
   ```java
   // Solution
   int num = 7;
   if (num % 2 == 0) {
       System.out.println(num + " is even");
   } else {
       System.out.println(num + " is odd");
   }
   ```

4. Calculate factorial
   ```java
   // Solution
   int n = 5;
   int factorial = 1;
   for (int i = 1; i <= n; i++) {
       factorial *= i;
   }
   System.out.println(n + "! = " + factorial);
   ```

5. Reverse a string
   ```java
   // Solution
   String str = "Hello";
   StringBuilder reversed = new StringBuilder(str).reverse();
   System.out.println(reversed); // olleH
   
   // Alternative without StringBuilder
   char[] chars = str.toCharArray();
   for (int i = 0, j = chars.length - 1; i < j; i++, j--) {
       char temp = chars[i];
       chars[i] = chars[j];
       chars[j] = temp;
   }
   System.out.println(new String(chars)); // olleH
   ```

### Code Templates
```java
// Input template
Scanner sc = new Scanner(System.in);
int n = sc.nextInt();
String str = sc.nextLine();

// Array processing template
int[] arr = new int[n];
for (int i = 0; i < n; i++) {
    arr[i] = sc.nextInt();
}

// String processing template
String str = "example";
for (char c : str.toCharArray()) {
    // process each character
}
```

## 🎯 Daily Review Checklist
- [ ] Can declare and initialize variables correctly
- [ ] Understand operator precedence
- [ ] Can write all 3 types of loops
- [ ] Know array declaration methods
- [ ] Understand String immutability
- [ ] Can solve 2-3 basic problems

## 📚 Self-Assessment Quiz

1. What is the output of `System.out.println(10 / 3);`?
   - A) 3.33
   - B) 3
   - C) 3.0
   - D) Error

2. Which of these is NOT a primitive data type?
   - A) String
   - B) char
   - C) boolean
   - D) byte

3. What happens when you try to access `arr[5]` in an array of size 5?
   - A) Returns null
   - B) Returns 0
   - C) ArrayIndexOutOfBoundsException
   - D) Compiles but unpredictable behavior

4. Which statement about String is correct?
   - A) Strings are mutable
   - B) String concatenation is efficient in loops
   - C) String literals with same value share memory
   - D) String equals() compares memory references

5. What is the correct way to read an integer from console?
   - A) `int n = System.in.read();`
   - B) `int n = System.in.readInt();`
   - C) `int n = new Scanner(System.in).nextInt();`
   - D) `int n = Console.readInt();`

**Answers:** 1-B, 2-A, 3-C, 4-C, 5-C

## ⚡ Speed Learning Tips
1. **Code Daily**: 30 minutes minimum
2. **Explain Concepts**: Teach someone else
3. **Use IDE**: IntelliJ/Eclipse for auto-completion
4. **Debug Practice**: Use debugger to understand flow
5. **Error Analysis**: Read and understand error messages

## 7. Methods

### Method Declaration
```java
// Method syntax
returnType methodName(parameterType parameterName) {
    // method body
    return value; // if returnType is not void
}

// Example methods
public static int add(int a, int b) {
    return a + b;
}

private void printMessage(String message) {
    System.out.println(message);
}

// Method overloading - same name, different parameters
public double calculate(int x) { return x * 2.0; }
public double calculate(double x) { return x * 2.0; }
public double calculate(int x, int y) { return x + y; }
```

## 8. Basic Input/Output

### Console I/O
```java
// Input using Scanner
import java.util.Scanner;

Scanner scanner = new Scanner(System.in);

System.out.print("Enter your name: ");
String name = scanner.nextLine();

System.out.print("Enter your age: ");
int age = scanner.nextInt();
scanner.nextLine(); // consume newline

// Output
System.out.println("Hello, " + name + "!"); // with newline
System.out.print("You are " + age + " years old."); // without newline

// Close scanner when done
scanner.close();
```

### File I/O (Basic)
```java
// Reading from file
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

try (BufferedReader reader = new BufferedReader(new FileReader("file.txt"))) {
    String line;
    while ((line = reader.readLine()) != null) {
        System.out.println(line);
    }
} catch (IOException e) {
    e.printStackTrace();
}

// Writing to file
import java.io.BufferedWriter;
import java.io.FileWriter;

try (BufferedWriter writer = new BufferedWriter(new FileWriter("output.txt"))) {
    writer.write("Hello, World!");
    writer.newLine();
    writer.write("Java I/O Example");
} catch (IOException e) {
    e.printStackTrace();
}
```

## 9. Exception Handling Basics

```java
// Try-catch structure
try {
    // Code that might throw an exception
    int result = 10 / 0; // ArithmeticException
} catch (ArithmeticException e) {
    // Handle specific exception
    System.out.println("Cannot divide by zero: " + e.getMessage());
} catch (Exception e) {
    // Handle any other exception
    System.out.println("Error: " + e.getMessage());
} finally {
    // Always executed, regardless of exception
    System.out.println("This always runs");
}

// Try-with-resources (Java 7+)
try (Scanner scanner = new Scanner(System.in)) {
    // Scanner automatically closed
    int number = scanner.nextInt();
} catch (Exception e) {
    e.printStackTrace();
}
```

### Exception Hierarchy
```
Throwable
├── Error (System errors - don't catch)
│   ├── OutOfMemoryError
│   └── StackOverflowError
└── Exception
    ├── RuntimeException (Unchecked)
    │   ├── NullPointerException
    │   ├── ArrayIndexOutOfBoundsException
    │   ├── ArithmeticException
    │   └── IllegalArgumentException
    └── Checked Exceptions
        ├── IOException
        ├── SQLException
        └── ClassNotFoundException
```

### Common Exceptions
```java
// NullPointerException
String str = null;
int length = str.length(); // NPE

// ArrayIndexOutOfBoundsException
int[] arr = new int[5];
int value = arr[10]; // AIOOBE

// ArithmeticException
int result = 10 / 0; // AE

// NumberFormatException
int num = Integer.parseInt("abc"); // NFE
```

## 10. Wrapper Classes

```java
// Primitive types vs Wrapper classes
int primitiveInt = 42;
Integer wrappedInt = Integer.valueOf(42); // Boxing

// Auto-boxing and unboxing (Java 5+)
Integer num = 100;  // Auto-boxing
int value = num;    // Auto-unboxing

// Useful methods in wrapper classes
Integer.parseInt("123");       // String to int
Integer.toString(123);        // int to String
Integer.valueOf("123", 16);   // Hex string to int
Character.isDigit('8');       // true
Character.isLetter('A');      // true
Boolean.parseBoolean("true"); // String to boolean
```

### Wrapper Class Caching
```java
Integer a = 127;
Integer b = 127;
System.out.println(a == b);      // true (cached -128 to 127)

Integer c = 128;
Integer d = 128;
System.out.println(c == d);      // false (outside cache range)

System.out.println(c.equals(d)); // true (compares values)
```

## 🔗 Next Topic Preview
**Object-Oriented Programming**: Classes, Objects, Methods, Constructors