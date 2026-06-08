# 🚀 Day 1: Java Environment Setup & Programming Fundamentals

## 📅 Date: Day 1 of 90
## 🎯 Today's Focus: Complete Java Setup + Basic Programming + First LeetCode Problems
## ⏱️ Total Time: 9 hours (3 sessions)

---

## 🎯 DAILY OBJECTIVES

By the end of today, you will:
- ✅ Install and configure complete Java development environment (JDK 17+, IDE, Git)
- ✅ Master Java fundamentals: data types, variables, operators, I/O
- ✅ Solve 3 easy LeetCode problems with multiple approaches
- ✅ Understand Big O notation and time complexity analysis
- ✅ Create GitHub repository and push first code
- ✅ Build practical Java programs (Calculator, Pattern Programs)

---

## 📚 TOPICS COVERED

### Programming Concepts
- Java syntax and structure
- Data types (primitive & reference)
- Variables and constants
- Operators (arithmetic, relational, logical, bitwise)
- Input/Output with Scanner
- Type casting and conversion

### LeetCode Problems
1. **Two Sum** (Easy) - Array, HashMap
2. **Palindrome Number** (Easy) - Math, String
3. **Roman to Integer** (Easy) - HashMap, String

### CS Fundamentals
- Time Complexity (Big O notation)
- Space Complexity basics
- Algorithm efficiency analysis

---

## ⏰ DAILY SCHEDULE

### 🌅 **Morning Session (6:00 AM - 9:00 AM) - 3 hours**

---

#### **6:00 - 7:00 AM: Complete Java Development Environment Setup**

**🎯 Objectives:**
- Install JDK 17 LTS
- Set up IntelliJ IDEA Community Edition
- Configure Git & GitHub
- Verify complete installation

**📥 Installation Steps:**

**1️⃣ Install Java JDK 17 (LTS)**

```bash
# Windows Installation:
# Step 1: Download JDK
Visit: https://www.oracle.com/java/technologies/downloads/#java17
Download: jdk-17_windows-x64_bin.exe

# Step 2: Install JDK
- Run the installer
- Installation path: C:\Program Files\Java\jdk-17
- Complete installation

# Step 3: Set Environment Variables
# Windows:
1. Open System Properties (Win + Pause/Break)
2. Click "Advanced system settings"
3. Click "Environment Variables"

# Add JAVA_HOME:
Variable name: JAVA_HOME
Variable value: C:\Program Files\Java\jdk-17

# Update PATH:
Add to Path: %JAVA_HOME%\bin

# Step 4: Verify Installation
# Open new Command Prompt/PowerShell:
java -version
# Output: java version "17.x.x"

javac -version  
# Output: javac 17.x.x
```

**2️⃣ Install IntelliJ IDEA Community Edition**

```bash
# Download from: https://www.jetbrains.com/idea/download/
# Choose: Community Edition (Free)

# Installation:
1. Run IntelliJ-IDEA-Community-xxxx.exe
2. Follow installation wizard
3. Create desktop shortcut
4. Associate .java files

# First Launch Configuration:
1. Choose Dark/Light theme
2. Skip plugins for now
3. Create New Project → Java → JDK 17
4. Project name: "Day01-Java-Basics"
5. Click "Create"
```

**Alternative: VS Code Setup** (If preferred)

```bash
# Download VS Code: https://code.visualstudio.com/

# Install Required Extensions:
1. Extension Pack for Java (Microsoft)
2. Debugger for Java
3. Maven for Java
4. Java Test Runner

# Configure:
Ctrl+Shift+P → "Java: Configure Java Runtime"
Select JDK 17 path
```

**3️⃣ Install and Configure Git**

```bash
# Download Git: https://git-scm.com/download/win

# Installation:
- Use default settings
- Choose editor: VS Code or Vim
- PATH environment: Git from command line and 3rd party

# Configure Git:
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Verify:
git --version
# Output: git version 2.x.x
```

**4️⃣ Create GitHub Account & Repository**

```bash
# 1. Create GitHub account: https://github.com/signup

# 2. Create new repository:
Repository name: 90-Days-Placement-Prep
Description: My 90-day journey to crack technical interviews
Visibility: Public
Initialize: Add README.md
Add .gitignore: Java

# 3. Clone repository locally:
cd c:\xampp\htdocs\
git clone https://github.com/YOUR_USERNAME/90-Days-Placement-Prep.git
cd 90-Days-Placement-Prep

# 4. Create Day-01 folder:
mkdir Day-01
cd Day-01
```

**✅ Verification Checklist:**

```bash
# Run these commands to verify setup:
java -version          # Should show: java version "17.x.x"
javac -version         # Should show: javac 17.x.x
git --version          # Should show: git version 2.x.x
echo %JAVA_HOME%       # Should show: C:\Program Files\Java\jdk-17
```

**🎉 Congratulations!** Your Java development environment is ready!

---

#### **7:00 - 8:00 AM: Java Programming Fundamentals - Theory**

**📖 Topics to Learn:**

**1️⃣ Java Program Structure**

```java
// Basic Java Program Structure
public class HelloWorld {
    // main method - entry point of Java program
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}

// Explanation:
// - public: Access modifier (accessible everywhere)
// - class: Blueprint for objects
// - static: Can be called without creating object
// - void: Returns nothing
// - main: Entry point method
// - String[] args: Command line arguments
```

**2️⃣ Data Types in Java**

```java
// Primitive Data Types (8 types)

// Integer Types:
byte myByte = 127;           // 8-bit  (-128 to 127)
short myShort = 32000;       // 16-bit (-32,768 to 32,767)
int myInt = 2147483647;      // 32-bit (-2^31 to 2^31-1) - MOST USED
long myLong = 9223372036854775807L; // 64-bit (add 'L' suffix)

// Floating-Point Types:
float myFloat = 3.14f;       // 32-bit (add 'f' suffix)
double myDouble = 3.14159;   // 64-bit - MOST USED

// Character Type:
char myChar = 'A';           // 16-bit Unicode character

// Boolean Type:
boolean myBoolean = true;    // true or false only

// Reference Types:
String myString = "Hello";   // Sequence of characters (object)
int[] myArray = {1, 2, 3};   // Array (object)
```

**📊 Data Type Size Chart:**

| Type    | Size    | Range                          | Default |
|---------|---------|--------------------------------|---------|
| byte    | 8 bits  | -128 to 127                   | 0       |
| short   | 16 bits | -32,768 to 32,767             | 0       |
| int     | 32 bits | -2³¹ to 2³¹-1                 | 0       |
| long    | 64 bits | -2⁶³ to 2⁶³-1                 | 0L      |
| float   | 32 bits | ~±3.4E+38 (6-7 digits)        | 0.0f    |
| double  | 64 bits | ~±1.7E+308 (15 digits)        | 0.0d    |
| char    | 16 bits | 0 to 65,535 (Unicode)         | '\u0000'|
| boolean | 1 bit   | true or false                 | false   |

**3️⃣ Variables and Constants**

```java
// Variables - can be changed
int age = 25;
age = 26;  // OK - can reassign

// Constants - cannot be changed (use 'final' keyword)
final double PI = 3.14159;
// PI = 3.14;  // ERROR - cannot reassign

// Naming Conventions:
int studentAge;        // camelCase for variables
final int MAX_SIZE = 100;  // UPPER_CASE for constants
```

**4️⃣ Operators in Java**

```java
// 1. Arithmetic Operators
int a = 10, b = 3;
int sum = a + b;       // 13 (Addition)
int diff = a - b;      // 7  (Subtraction)
int product = a * b;   // 30 (Multiplication)
int quotient = a / b;  // 3  (Division - integer division)
int remainder = a % b; // 1  (Modulus - remainder)

// 2. Relational/Comparison Operators (return boolean)
boolean isEqual = (a == b);      // false (Equal to)
boolean notEqual = (a != b);     // true  (Not equal)
boolean greater = (a > b);       // true  (Greater than)
boolean less = (a < b);          // false (Less than)
boolean greaterEq = (a >= b);    // true  (Greater or equal)
boolean lessEq = (a <= b);       // false (Less or equal)

// 3. Logical Operators
boolean x = true, y = false;
boolean and = x && y;  // false (AND - both must be true)
boolean or = x || y;   // true  (OR - at least one true)
boolean not = !x;      // false (NOT - inverts value)

// 4. Assignment Operators
int num = 10;
num += 5;  // num = num + 5  → 15
num -= 3;  // num = num - 3  → 12
num *= 2;  // num = num * 2  → 24
num /= 4;  // num = num / 4  → 6
num %= 4;  // num = num % 4  → 2

// 5. Increment/Decrement Operators
int count = 5;
count++;   // count = count + 1 → 6 (post-increment)
++count;   // count = count + 1 → 7 (pre-increment)
count--;   // count = count - 1 → 6 (post-decrement)
--count;   // count = count - 1 → 5 (pre-decrement)

// Difference between pre and post:
int i = 5;
int j = i++;  // j = 5, i = 6 (assign first, then increment)
int k = ++i;  // k = 7, i = 7 (increment first, then assign)

// 6. Ternary Operator (conditional)
int max = (a > b) ? a : b;  // If a>b, max=a, else max=b
// Equivalent to:
// if (a > b) max = a;
// else max = b;
```

**5️⃣ Type Casting**

```java
// Implicit Casting (Widening) - Automatic
int myInt = 100;
double myDouble = myInt;  // int → double (OK, no data loss)
// byte → short → int → long → float → double

// Explicit Casting (Narrowing) - Manual
double pi = 3.14159;
int approximatePi = (int) pi;  // 3 (loses decimal part)

// Common Casting Examples:
int x = 10;
int y = 3;
double result = (double) x / y;  // 3.333... (cast one operand)
// Without casting: x / y = 3 (integer division)

// String to Number:
String str = "123";
int num = Integer.parseInt(str);     // String → int
double dNum = Double.parseDouble("3.14");  // String → double

// Number to String:
int number = 456;
String text = String.valueOf(number);  // int → String
// or
String text2 = Integer.toString(number);
```

**6️⃣ Input/Output in Java**

```java
import java.util.Scanner;

public class InputOutput {
    public static void main(String[] args) {
        // Create Scanner object for input
        Scanner scanner = new Scanner(System.in);
        
        // Reading different types of input:
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();  // Read entire line
        
        System.out.print("Enter your age: ");
        int age = scanner.nextInt();       // Read integer
        
        System.out.print("Enter your GPA: ");
        double gpa = scanner.nextDouble(); // Read double
        
        // Output
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("GPA: " + gpa);
        
        // Formatted output:
        System.out.printf("Hello %s, you are %d years old with GPA %.2f%n", 
                          name, age, gpa);
        
        // Close scanner (good practice)
        scanner.close();
    }
}

// Common Scanner methods:
// next()        - Reads next token (word)
// nextLine()    - Reads entire line
// nextInt()     - Reads integer
// nextDouble()  - Reads double
// nextBoolean() - Reads boolean
// nextLong()    - Reads long
```

**📝 Key Takeaways:**
- Java is **strongly typed** - must declare type for variables
- **Primitive types** stored directly, **Reference types** store memory address
- Use **Scanner** for user input
- **Type casting** converts between data types
- **Operators** perform operations on data

---

#### **8:00 - 9:00 AM: Hands-On Practice - Basic Java Programs**

**🛠️ Task 1: Create Basic Java Programs**

**Program 1: HelloWorld.java**
```java
/**
 * File: HelloWorld.java
 * Description: First Java program - prints greeting
 */
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        System.out.println("Welcome to 90 Days Placement Preparation!");
        System.out.println("Let's master Java and DSA together!");
    }
}

// Compile and Run:
// javac HelloWorld.java
// java HelloWorld
```

**Program 2: DataTypesDemo.java**
```java
/**
 * File: DataTypesDemo.java
 * Description: Demonstrates all primitive data types
 */
public class DataTypesDemo {
    public static void main(String[] args) {
        // Integer types
        byte byteVal = 127;
        short shortVal = 32000;
        int intVal = 2147483647;
        long longVal = 9223372036854775807L;
        
        // Floating-point types
        float floatVal = 3.14f;
        double doubleVal = 3.141592653589793;
        
        // Character and Boolean
        char charVal = 'A';
        boolean boolVal = true;
        
        // Display all values
        System.out.println("Byte: " + byteVal);
        System.out.println("Short: " + shortVal);
        System.out.println("Int: " + intVal);
        System.out.println("Long: " + longVal);
        System.out.println("Float: " + floatVal);
        System.out.println("Double: " + doubleVal);
        System.out.println("Char: " + charVal);
        System.out.println("Boolean: " + boolVal);
        
        // Print sizes
        System.out.println("\nData Type Sizes:");
        System.out.println("byte: " + Byte.BYTES + " bytes");
        System.out.println("short: " + Short.BYTES + " bytes");
        System.out.println("int: " + Integer.BYTES + " bytes");
        System.out.println("long: " + Long.BYTES + " bytes");
        System.out.println("float: " + Float.BYTES + " bytes");
        System.out.println("double: " + Double.BYTES + " bytes");
    }
}
```

**Program 3: OperatorsDemo.java**
```java
/**
 * File: OperatorsDemo.java
 * Description: Demonstrates various operators in Java
 */
public class OperatorsDemo {
    public static void main(String[] args) {
        int a = 15, b = 4;
        
        // Arithmetic Operators
        System.out.println("=== Arithmetic Operators ===");
        System.out.println("a + b = " + (a + b));  // 19
        System.out.println("a - b = " + (a - b));  // 11
        System.out.println("a * b = " + (a * b));  // 60
        System.out.println("a / b = " + (a / b));  // 3
        System.out.println("a % b = " + (a % b));  // 3
        
        // Relational Operators
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
        System.out.println("x && y: " + (x && y));  // false
        System.out.println("x || y: " + (x || y));  // true
        System.out.println("!x: " + (!x));          // false
        
        // Increment/Decrement
        System.out.println("\n=== Increment/Decrement ===");
        int count = 10;
        System.out.println("count: " + count);      // 10
        System.out.println("count++: " + count++);  // 10 (post-increment)
        System.out.println("count: " + count);      // 11
        System.out.println("++count: " + ++count);  // 12 (pre-increment)
        System.out.println("count: " + count);      // 12
        
        // Ternary Operator
        System.out.println("\n=== Ternary Operator ===");
        int max = (a > b) ? a : b;
        System.out.println("Max of " + a + " and " + b + ": " + max);
    }
}
```

**Program 4: UserInputDemo.java**
```java
import java.util.Scanner;

/**
 * File: UserInputDemo.java
 * Description: Takes user input and performs calculations
 */
public class UserInputDemo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // Get user information
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();
        
        System.out.print("Enter your age: ");
        int age = scanner.nextInt();
        
        System.out.print("Enter your height in meters: ");
        double height = scanner.nextDouble();
        
        // Display information
        System.out.println("\n=== Your Information ===");
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Height: " + height + "m");
        
        // Calculate birth year (approximate)
        int currentYear = 2025;
        int birthYear = currentYear - age;
        System.out.println("Approximate Birth Year: " + birthYear);
        
        // Check if adult
        boolean isAdult = age >= 18;
        System.out.println("Adult: " + isAdult);
        
        scanner.close();
    }
}
```

**Program 5: SimpleCalculator.java**
```java
import java.util.Scanner;

/**
 * File: SimpleCalculator.java
 * Description: Basic calculator with +, -, *, / operations
 */
public class SimpleCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("=== Simple Calculator ===");
        
        // Get first number
        System.out.print("Enter first number: ");
        double num1 = scanner.nextDouble();
        
        // Get operator
        System.out.print("Enter operator (+, -, *, /): ");
        char operator = scanner.next().charAt(0);
        
        // Get second number
        System.out.print("Enter second number: ");
        double num2 = scanner.nextDouble();
        
        // Perform calculation
        double result;
        
        if (operator == '+') {
            result = num1 + num2;
            System.out.println("Result: " + num1 + " + " + num2 + " = " + result);
        } else if (operator == '-') {
            result = num1 - num2;
            System.out.println("Result: " + num1 + " - " + num2 + " = " + result);
        } else if (operator == '*') {
            result = num1 * num2;
            System.out.println("Result: " + num1 + " * " + num2 + " = " + result);
        } else if (operator == '/') {
            if (num2 != 0) {
                result = num1 / num2;
                System.out.println("Result: " + num1 + " / " + num2 + " = " + result);
            } else {
                System.out.println("Error: Division by zero!");
            }
        } else {
            System.out.println("Error: Invalid operator!");
        }
        
        scanner.close();
    }
}
```

**🎯 Task: Create and Run All 5 Programs**

1. Create `Day-01` folder in your project
2. Create each `.java` file
3. Compile: `javac ProgramName.java`
4. Run: `java ProgramName`
5. Test each program with different inputs

---

### ☀️ **Afternoon Session (12:00 PM - 3:00 PM) - 3 hours**

---

#### **12:00 - 1:30 PM: LeetCode Problem Solving**

**🎯 Objective:** Solve 3 Easy LeetCode problems using multiple approaches

---

**Problem 1: Two Sum** ⭐ (LeetCode #1 - Easy)

**Problem Statement:**
```
Given an array of integers nums and an integer target, return indices of 
the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you 
may not use the same element twice.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: nums[0] + nums[1] == 9, so return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:
- 2 <= nums.length <= 10^4
- -10^9 <= nums[i] <= 10^9
- -10^9 <= target <= 10^9
- Only one valid answer exists.
```

**Approach 1: Brute Force (Nested Loop)**
```java
/**
 * Approach: Check all pairs
 * Time Complexity: O(n²) - nested loops
 * Space Complexity: O(1) - no extra space
 * 
 * Logic:
 * - For each element, check all elements after it
 * - If sum equals target, return indices
 */
class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Check every possible pair
        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    return new int[] {i, j};
                }
            }
        }
        // No solution found (won't reach here based on problem constraints)
        return new int[] {};
    }
}

// Test the solution:
public class TwoSumBruteForce {
    public static void main(String[] args) {
        Solution sol = new Solution();
        
        // Test Case 1
        int[] nums1 = {2, 7, 11, 15};
        int target1 = 9;
        int[] result1 = sol.twoSum(nums1, target1);
        System.out.println("Test 1: [" + result1[0] + ", " + result1[1] + "]");  // [0, 1]
        
        // Test Case 2
        int[] nums2 = {3, 2, 4};
        int target2 = 6;
        int[] result2 = sol.twoSum(nums2, target2);
        System.out.println("Test 2: [" + result2[0] + ", " + result2[1] + "]");  // [1, 2]
        
        // Test Case 3
        int[] nums3 = {3, 3};
        int target3 = 6;
        int[] result3 = sol.twoSum(nums3, target3);
        System.out.println("Test 3: [" + result3[0] + ", " + result3[1] + "]");  // [0, 1]
    }
}
```

**Approach 2: HashMap (Optimal)**
```java
import java.util.HashMap;
import java.util.Map;

/**
 * Approach: Use HashMap to store complement
 * Time Complexity: O(n) - single pass through array
 * Space Complexity: O(n) - HashMap storage
 * 
 * Logic:
 * - For each number, calculate complement = target - current number
 * - Check if complement exists in HashMap
 * - If yes, return indices
 * - If no, store current number and its index in HashMap
 * 
 * Example: nums = [2,7,11,15], target = 9
 * i=0: num=2, complement=7, map={}, add {2:0}
 * i=1: num=7, complement=2, map={2:0}, found! return [0,1]
 */
class Solution {
    public int[] twoSum(int[] nums, int target) {
        // HashMap to store: <number, index>
        Map<Integer, Integer> map = new HashMap<>();
        
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            
            // Check if complement exists in map
            if (map.containsKey(complement)) {
                return new int[] {map.get(complement), i};
            }
            
            // Store current number and its index
            map.put(nums[i], i);
        }
        
        return new int[] {};  // No solution
    }
}

// Complete test program:
public class TwoSumOptimal {
    public static void main(String[] args) {
        Solution sol = new Solution();
        
        // Test with various cases
        testCase(sol, new int[]{2,7,11,15}, 9, "Test 1");
        testCase(sol, new int[]{3,2,4}, 6, "Test 2");
        testCase(sol, new int[]{3,3}, 6, "Test 3");
        testCase(sol, new int[]{-1,-2,-3,-4,-5}, -8, "Test 4");
        testCase(sol, new int[]{0,4,3,0}, 0, "Test 5");
    }
    
    static void testCase(Solution sol, int[] nums, int target, String testName) {
        int[] result = sol.twoSum(nums, target);
        System.out.print(testName + ": Input = [");
        for (int i = 0; i < nums.length; i++) {
            System.out.print(nums[i]);
            if (i < nums.length - 1) System.out.print(",");
        }
        System.out.println("], target = " + target);
        System.out.println("Output: [" + result[0] + ", " + result[1] + "]");
        System.out.println("Values: " + nums[result[0]] + " + " + nums[result[1]] + " = " + target);
        System.out.println();
    }
}
```

**📊 Complexity Comparison:**

| Approach    | Time Complexity | Space Complexity | Better For             |
|-------------|-----------------|------------------|------------------------|
| Brute Force | O(n²)          | O(1)             | Small arrays           |
| HashMap     | O(n)           | O(n)             | Large arrays (optimal) |

**💡 Key Learning:**
- HashMap trading space for time
- One-pass solution vs two-pass
- Complement pattern: `target - current = needed`

---

**Problem 2: Palindrome Number** ⭐ (LeetCode #9 - Easy)

**Problem Statement:**
```
Given an integer x, return true if x is a palindrome, and false otherwise.

Example 1:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-.

Example 3:
Input: x = 10
Output: false
Explanation: Reads 01 from right to left, which is not same as 10.

Constraints:
- -2^31 <= x <= 2^31 - 1

Follow up: Can you solve it without converting to string?
```

**Approach 1: String Conversion**
```java
/**
 * Approach: Convert to string and compare
 * Time Complexity: O(n) - where n is number of digits
 * Space Complexity: O(n) - string storage
 */
class Solution {
    public boolean isPalindrome(int x) {
        // Negative numbers are not palindromes
        if (x < 0) return false;
        
        // Convert to string
        String str = String.valueOf(x);
        
        // Use two pointers
        int left = 0;
        int right = str.length() - 1;
        
        while (left < right) {
            if (str.charAt(left) != str.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }
        
        return true;
    }
}
```

**Approach 2: Mathematical (No String) - OPTIMAL**
```java
/**
 * Approach: Reverse half of the number
 * Time Complexity: O(log n) - where n is the value of x
 * Space Complexity: O(1) - constant space
 * 
 * Logic:
 * - Negative numbers: NOT palindrome
 * - Numbers ending in 0: NOT palindrome (except 0 itself)
 * - Reverse second half and compare with first half
 * 
 * Example: x = 12321
 * Step 1: x=12321, reversed=0
 * Step 2: x=1232, reversed=1
 * Step 3: x=123, reversed=12
 * Step 4: x=12, reversed=123
 * Stop when x <= reversed
 * Compare: x (12) == reversed/10 (12) → true
 */
class Solution {
    public boolean isPalindrome(int x) {
        // Negative numbers and numbers ending in 0 (except 0) are not palindromes
        if (x < 0 || (x % 10 == 0 && x != 0)) {
            return false;
        }
        
        int reversedHalf = 0;
        
        // Reverse second half of the number
        while (x > reversedHalf) {
            reversedHalf = reversedHalf * 10 + x % 10;
            x /= 10;
        }
        
        // For even length: x == reversedHalf
        // For odd length: x == reversedHalf / 10 (middle digit doesn't matter)
        return x == reversedHalf || x == reversedHalf / 10;
    }
}

// Complete test program:
public class PalindromeNumber {
    public static void main(String[] args) {
        Solution sol = new Solution();
        
        // Test cases
        testCase(sol, 121, true);
        testCase(sol, -121, false);
        testCase(sol, 10, false);
        testCase(sol, 0, true);
        testCase(sol, 12321, true);
        testCase(sol, 1221, true);
        testCase(sol, 12345, false);
    }
    
    static void testCase(Solution sol, int x, boolean expected) {
        boolean result = sol.isPalindrome(x);
        String status = (result == expected) ? "✓ PASS" : "✗ FAIL";
        System.out.printf("%s | Input: %-6d | Output: %-5s | Expected: %-5s%n", 
                          status, x, result, expected);
    }
}
```

**🔍 Dry Run Example: x = 12321**
```
Initial: x = 12321, reversedHalf = 0

Iteration 1:
  reversedHalf = 0 * 10 + 12321 % 10 = 0 + 1 = 1
  x = 12321 / 10 = 1232
  State: x = 1232, reversedHalf = 1

Iteration 2:
  reversedHalf = 1 * 10 + 1232 % 10 = 10 + 2 = 12
  x = 1232 / 10 = 123
  State: x = 123, reversedHalf = 12

Iteration 3:
  reversedHalf = 12 * 10 + 123 % 10 = 120 + 3 = 123
  x = 123 / 10 = 12
  State: x = 12, reversedHalf = 123

Stop (x <= reversedHalf)

Check: x == reversedHalf / 10
       12 == 123 / 10
       12 == 12  ✓ TRUE

Result: Palindrome!
```

---

**Problem 3: Roman to Integer** ⭐ (LeetCode #13 - Easy)

**Problem Statement:**
```
Roman numerals are represented by seven different symbols:

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

Roman numerals are usually written largest to smallest from left to right.
However, there are special cases:
- I before V or X: IV (4), IX (9)
- X before L or C: XL (40), XC (90)
- C before D or M: CD (400), CM (900)

Given a roman numeral, convert it to an integer.

Example 1:
Input: s = "III"
Output: 3

Example 2:
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

Example 3:
Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90, IV = 4.

Constraints:
- 1 <= s.length <= 15
- s contains only ('I', 'V', 'X', 'L', 'C', 'D', 'M')
- It is guaranteed that s is a valid roman numeral in range [1, 3999]
```

**Approach 1: HashMap + Left-to-Right Scan**
```java
import java.util.HashMap;
import java.util.Map;

/**
 * Approach: Use HashMap and compare adjacent characters
 * Time Complexity: O(n) - where n is length of string
 * Space Complexity: O(1) - HashMap has fixed 7 entries
 * 
 * Logic:
 * - If current value < next value: subtract current (e.g., IV = -1 + 5 = 4)
 * - Otherwise: add current value
 * 
 * Example: "MCMXCIV" = 1994
 * M(1000) + C(100<M, so -100) + M(1000) + X(10<C, so -10) + C(100) + I(1<V, so -1) + V(5)
 * = 1000 - 100 + 1000 - 10 + 100 - 1 + 5 = 1994
 */
class Solution {
    public int romanToInt(String s) {
        // Create HashMap for Roman to Integer mapping
        Map<Character, Integer> map = new HashMap<>();
        map.put('I', 1);
        map.put('V', 5);
        map.put('X', 10);
        map.put('L', 50);
        map.put('C', 100);
        map.put('D', 500);
        map.put('M', 1000);
        
        int result = 0;
        
        for (int i = 0; i < s.length(); i++) {
            int current = map.get(s.charAt(i));
            
            // If not last character and current < next, subtract
            if (i < s.length() - 1 && current < map.get(s.charAt(i + 1))) {
                result -= current;
            } else {
                result += current;
            }
        }
        
        return result;
    }
}
```

**Approach 2: Switch Statement (Cleaner)**
```java
/**
 * Approach: Use switch for mapping + comparison logic
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
class Solution {
    public int romanToInt(String s) {
        int result = 0;
        int prevValue = 0;
        
        // Traverse from right to left
        for (int i = s.length() - 1; i >= 0; i--) {
            int currentValue = getValue(s.charAt(i));
            
            // If current < previous: subtract (e.g., IV)
            // Otherwise: add
            if (currentValue < prevValue) {
                result -= currentValue;
            } else {
                result += currentValue;
            }
            
            prevValue = currentValue;
        }
        
        return result;
    }
    
    private int getValue(char c) {
        switch (c) {
            case 'I': return 1;
            case 'V': return 5;
            case 'X': return 10;
            case 'L': return 50;
            case 'C': return 100;
            case 'D': return 500;
            case 'M': return 1000;
            default: return 0;
        }
    }
}

// Complete test program:
public class RomanToInteger {
    public static void main(String[] args) {
        Solution sol = new Solution();
        
        // Test cases
        testCase(sol, "III", 3);
        testCase(sol, "IV", 4);
        testCase(sol, "IX", 9);
        testCase(sol, "LVIII", 58);
        testCase(sol, "MCMXCIV", 1994);
        testCase(sol, "MMXXIV", 2024);
        testCase(sol, "MMMCMXCIX", 3999);
    }
    
    static void testCase(Solution sol, String roman, int expected) {
        int result = sol.romanToInt(roman);
        String status = (result == expected) ? "✓ PASS" : "✗ FAIL";
        System.out.printf("%s | Input: %-12s | Output: %-4d | Expected: %-4d%n", 
                          status, roman, result, expected);
    }
}
```

**🔍 Dry Run: "MCMXCIV" → 1994 (right to left)**
```
String: M  C  M  X  C  I  V
Index:  0  1  2  3  4  5  6

Start from right (i=6):
i=6: V → value=5,  prev=0   → 5>=0  → add 5    → result=5,    prev=5
i=5: I → value=1,  prev=5   → 1<5   → sub 1    → result=4,    prev=1
i=4: C → value=100, prev=1  → 100>=1 → add 100  → result=104,  prev=100
i=3: X → value=10, prev=100 → 10<100 → sub 10   → result=94,   prev=10
i=2: M → value=1000,prev=10 → 1000>=10→ add 1000→ result=1094, prev=1000
i=1: C → value=100,prev=1000→ 100<1000→ sub 100 → result=994,  prev=100
i=0: M → value=1000,prev=100→ 1000>=100→add 1000→ result=1994, prev=1000

Final result: 1994 ✓
```

**💡 Key Patterns:**
1. **Subtraction Rule**: Current < Next → Subtract current
2. **Addition Rule**: Current >= Next → Add current
3. **HashMap vs Switch**: Both work, switch is slightly faster

---

#### **1:30 - 3:00 PM: Time Complexity & Big O Notation**

**📖 Theory: Algorithm Complexity Analysis**

**🎯 What is Time Complexity?**

Time complexity measures how the runtime of an algorithm grows as the input size increases.

**Big O Notation** - Describes worst-case scenario (upper bound)

**Common Time Complexities (Best to Worst):**

| Notation    | Name          | Example                          | Speed    |
|-------------|---------------|----------------------------------|----------|
| O(1)        | Constant      | Array access, HashMap lookup     | Fastest  |
| O(log n)    | Logarithmic   | Binary search                    | Fast     |
| O(n)        | Linear        | Single loop, array traversal     | Moderate |
| O(n log n)  | Linearithmic  | Merge sort, quick sort           | Moderate |
| O(n²)       | Quadratic     | Nested loops, bubble sort        | Slow     |
| O(n³)       | Cubic         | Triple nested loops              | Slower   |
| O(2ⁿ)       | Exponential   | Recursive Fibonacci              | Very Slow|
| O(n!)       | Factorial     | Permutations                     | Slowest  |

**📊 Growth Visualization:**
```
n=10        n=100       n=1000
O(1):       1           1           1            ← Best
O(log n):   3           7           10
O(n):       10          100         1000
O(n log n): 30          700         10000
O(n²):      100         10000       1000000      ← Avoid
O(2ⁿ):      1024        huge        impossible   ← Never use
```

**🔍 How to Calculate Time Complexity:**

**Rule 1: Drop Constants**
```java
// O(2n) → O(n)
for (int i = 0; i < n; i++) { }  // O(n)
for (int i = 0; i < n; i++) { }  // O(n)
// Total: O(n + n) = O(2n) = O(n)
```

**Rule 2: Drop Non-Dominant Terms**
```java
// O(n² + n) → O(n²)
for (int i = 0; i < n; i++) {        // O(n)
    for (int j = 0; j < n; j++) { }  // O(n)
}
for (int i = 0; i < n; i++) { }      // O(n)
// Total: O(n²) + O(n) = O(n² + n) = O(n²)
```

**Rule 3: Different Inputs → Different Variables**
```java
// O(a + b), NOT O(n)
for (int i = 0; i < a.length; i++) { }  // O(a)
for (int i = 0; i < b.length; i++) { }  // O(b)
// Total: O(a + b)
```

**Rule 4: Nested Loops → Multiplication**
```java
// O(a * b)
for (int i = 0; i < a.length; i++) {        // O(a)
    for (int j = 0; j < b.length; j++) { }  // O(b)
}
// Total: O(a × b)
```

**📝 Examples from Today's Problems:**

**Two Sum - Brute Force:**
```java
for (int i = 0; i < nums.length; i++) {         // n iterations
    for (int j = i + 1; j < nums.length; j++) { // n iterations
        if (nums[i] + nums[j] == target) { }
    }
}
// Time: O(n²) - nested loops
// Space: O(1) - no extra space
```

**Two Sum - HashMap:**
```java
for (int i = 0; i < nums.length; i++) {  // n iterations
    if (map.containsKey(complement)) { } // O(1) HashMap lookup
    map.put(nums[i], i);                 // O(1) HashMap insert
}
// Time: O(n) - single loop, O(1) operations inside
// Space: O(n) - HashMap stores n elements
```

**Palindrome Number:**
```java
while (x > reversedHalf) {  // log₁₀(n) iterations (digits)
    reversedHalf = reversedHalf * 10 + x % 10;
    x /= 10;
}
// Time: O(log n) - dividing by 10 each iteration
// Space: O(1) - only few variables
```

**Roman to Integer:**
```java
for (int i = 0; i < s.length(); i++) {  // n iterations
    // O(1) operations inside
}
// Time: O(n) - where n is string length
// Space: O(1) - fixed HashMap size (7 entries)
```

**🎯 Practice: Calculate Complexity**

```java
// Example 1:
void printArray(int[] arr) {
    for (int i = 0; i < arr.length; i++) {
        System.out.println(arr[i]);
    }
}
// Answer: O(n) - single loop through array

// Example 2:
int findMax(int[] arr) {
    int max = arr[0];                    // O(1)
    for (int i = 1; i < arr.length; i++) { // O(n)
        if (arr[i] > max) {              // O(1)
            max = arr[i];                // O(1)
        }
    }
    return max;                          // O(1)
}
// Answer: O(n) - dominated by loop

// Example 3:
void bubbleSort(int[] arr) {
    for (int i = 0; i < arr.length; i++) {       // O(n)
        for (int j = 0; j < arr.length - 1; j++) { // O(n)
            if (arr[j] > arr[j + 1]) {           // O(1)
                // swap
            }
        }
    }
}
// Answer: O(n²) - nested loops

// Example 4:
int binarySearch(int[] arr, int target) {
    int left = 0, right = arr.length - 1;
    while (left <= right) {              // O(log n)
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
// Answer: O(log n) - halving search space each iteration
```

**💡 Key Takeaways:**
- Always analyze worst-case scenario
- Consider both time AND space complexity
- Choose optimal algorithm for problem size
- O(n) vs O(n²) makes HUGE difference for large inputs

---

### 🌙 **Evening Session (7:00 PM - 10:00 PM) - 3 hours**

---

#### **7:00 - 8:00 PM: Create GitHub Repository & Push Code**

**🎯 Objective:** Version control setup and first commit

**Step-by-Step Git Workflow:**

**1. Initialize Local Repository**
```bash
# Navigate to your project folder
cd c:\xampp\htdocs\90-Days-Placement-Prep

# Initialize Git repository
git init

# Check status
git status
```

**2. Create .gitignore File**
```bash
# Create .gitignore file for Java
# File: .gitignore

# Compiled class files
*.class

# Package Files
*.jar
*.war
*.ear

# IDE specific files
.idea/
*.iml
.vscode/
*.swp
*.swo
*~

# OS specific
.DS_Store
Thumbs.db

# Build directories
out/
build/
target/
bin/

# Logs
*.log
```

**3. Add and Commit Files**
```bash
# Create README.md
echo "# 90 Days Placement Preparation Journey" > README.md
echo "" >> README.md
echo "## Day 1: Java Basics & LeetCode Problems" >> README.md
echo "- Setup Java Development Environment" >> README.md
echo "- Solved 3 LeetCode problems" >> README.md
echo "- Learned time complexity basics" >> README.md

# Stage all files
git add .

# Commit with message
git commit -m "Day 1: Java setup and first LeetCode problems"

# View commit history
git log --oneline
```

**4. Create GitHub Repository**
```bash
# 1. Go to: https://github.com/new
# 2. Repository name: 90-Days-Placement-Prep
# 3. Description: "My journey to crack technical interviews"
# 4. Public repository
# 5. DO NOT initialize with README (we already have local files)
# 6. Click "Create repository"
```

**5. Connect Local to Remote & Push**
```bash
# Add remote origin (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/90-Days-Placement-Prep.git

# Verify remote
git remote -v

# Push to GitHub
git branch -M main
git push -u origin main

# Enter GitHub credentials when prompted
```

**6. Organize Day-01 Folder Structure**
```bash
# Create organized structure
mkdir Day-01
cd Day-01

# Copy all today's Java files to Day-01
# Create subdirectories
mkdir theory
mkdir leetcode
mkdir practice

# Move files to appropriate folders
# theory/: DataTypesDemo.java, OperatorsDemo.java
# leetcode/: TwoSum.java, PalindromeNumber.java, RomanToInteger.java
# practice/: HelloWorld.java, SimpleCalculator.java, UserInputDemo.java

# Create Day-01 README
echo "# Day 1: Java Setup & Fundamentals" > README.md
echo "" >> README.md
echo "## Topics Covered" >> README.md
echo "- Java Environment Setup" >> README.md
echo "- Data Types & Operators" >> README.md
echo "- LeetCode: Two Sum, Palindrome Number, Roman to Integer" >> README.md
```

**7. Commit Day-01 Changes**
```bash
# Stage changes
git add Day-01/

# Commit
git commit -m "Day 1: Organize code into folders"

# Push to GitHub
git push origin main
```

**✅ Verification:**
- Visit: https://github.com/YOUR_USERNAME/90-Days-Placement-Prep
- You should see all your files and commits!

---

#### **8:00 - 9:30 PM: Build Pattern Printing Programs**

**🎯 Objective:** Practice loops and logic building

**Pattern 1: Right Triangle**
```java
/**
 * Pattern: Right Triangle
 *     *
 *     **
 *     ***
 *     ****
 *     *****
 */
public class Pattern1_RightTriangle {
    public static void main(String[] args) {
        int n = 5;
        
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
```

**Pattern 2: Inverted Right Triangle**
```java
/**
 * Pattern: Inverted Right Triangle
 *     *****
 *     ****
 *     ***
 *     **
 *     *
 */
public class Pattern2_InvertedTriangle {
    public static void main(String[] args) {
        int n = 5;
        
        for (int i = n; i >= 1; i--) {
            for (int j = 1; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
```

**Pattern 3: Pyramid**
```java
/**
 * Pattern: Pyramid
 *         *
 *        ***
 *       *****
 *      *******
 *     *********
 */
public class Pattern3_Pyramid {
    public static void main(String[] args) {
        int n = 5;
        
        for (int i = 1; i <= n; i++) {
            // Print spaces
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
            }
            // Print stars
            for (int k = 1; k <= 2 * i - 1; k++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
```

**Pattern 4: Diamond**
```java
/**
 * Pattern: Diamond
 *         *
 *        ***
 *       *****
 *      *******
 *     *********
 *      *******
 *       *****
 *        ***
 *         *
 */
public class Pattern4_Diamond {
    public static void main(String[] args) {
        int n = 5;
        
        // Upper half (pyramid)
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
            }
            for (int k = 1; k <= 2 * i - 1; k++) {
                System.out.print("*");
            }
            System.out.println();
        }
        
        // Lower half (inverted pyramid)
        for (int i = n - 1; i >= 1; i--) {
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
            }
            for (int k = 1; k <= 2 * i - 1; k++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
```

**Pattern 5: Number Triangle**
```java
/**
 * Pattern: Number Triangle
 *     1
 *     12
 *     123
 *     1234
 *     12345
 */
public class Pattern5_NumberTriangle {
    public static void main(String[] args) {
        int n = 5;
        
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(j);
            }
            System.out.println();
        }
    }
}
```

**Pattern 6: Floyd's Triangle**
```java
/**
 * Pattern: Floyd's Triangle
 *     1
 *     2 3
 *     4 5 6
 *     7 8 9 10
 *     11 12 13 14 15
 */
public class Pattern6_FloydsTriangle {
    public static void main(String[] args) {
        int n = 5;
        int num = 1;
        
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(num + " ");
                num++;
            }
            System.out.println();
        }
    }
}
```

**Pattern 7: Hollow Rectangle**
```java
/**
 * Pattern: Hollow Rectangle
 *     *****
 *     *   *
 *     *   *
 *     *****
 */
public class Pattern7_HollowRectangle {
    public static void main(String[] args) {
        int rows = 4;
        int cols = 5;
        
        for (int i = 1; i <= rows; i++) {
            for (int j = 1; j <= cols; j++) {
                // Print * for borders, space for inside
                if (i == 1 || i == rows || j == 1 || j == cols) {
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
    }
}
```

**🎯 Challenge: Create All Patterns**
1. Type each pattern program
2. Compile and run
3. Understand the logic (nested loops)
4. Try modifying n to see different sizes
5. Commit to GitHub

---

#### **9:30 - 10:00 PM: Day Review & Documentation**

**📝 Create Day-01 Summary Document**

```markdown
# Day 1 Summary - Java Setup & Fundamentals

## ✅ Completed Tasks

### 1. Environment Setup
- ✅ Installed JDK 17
- ✅ Setup IntelliJ IDEA Community Edition
- ✅ Configured Git & GitHub
- ✅ Created GitHub repository

### 2. Java Fundamentals Learned
- ✅ Program structure and syntax
- ✅ Data types (8 primitive types)
- ✅ Variables and constants
- ✅ Operators (arithmetic, relational, logical, etc.)
- ✅ Type casting
- ✅ Input/Output with Scanner

### 3. LeetCode Problems Solved (3/3)
- ✅ Two Sum (#1) - Array, HashMap
  - Brute Force: O(n²)
  - Optimal: O(n) using HashMap
- ✅ Palindrome Number (#9) - Math
  - String approach: O(n)
  - Math approach: O(log n)
- ✅ Roman to Integer (#13) - String, HashMap
  - Single pass: O(n)

### 4. Programs Created
- ✅ HelloWorld.java
- ✅ DataTypesDemo.java
- ✅ OperatorsDemo.java
- ✅ UserInputDemo.java
- ✅ SimpleCalculator.java
- ✅ 7 Pattern printing programs

### 5. CS Fundamentals
- ✅ Big O notation
- ✅ Time complexity analysis
- ✅ Space complexity basics

## 📊 Statistics
- ⏱️ Study Time: 9 hours
- 💻 Programs Written: 15+
- 🎯 LeetCode Solved: 3/3
- 📚 Concepts Covered: 15+

## 🎯 Key Learnings
1. HashMap provides O(1) lookup vs O(n) linear search
2. Always consider space-time tradeoff
3. Mathematical solutions often beat string manipulation
4. Pattern problems build loop logic and thinking

## 💡 Tomorrow's Plan (Day 2)
- Control flow statements (if-else, switch, loops)
- Arrays in depth
- More LeetCode problems (arrays)
- Start learning sorting basics

## 🔗 Resources Used
- Oracle Java Documentation
- LeetCode
- GitHub

---

**Completed on:** [Today's Date]
**Commit Hash:** [Git commit hash]
**Feeling:** Excited and motivated! 🚀
```

**Save this as:** `Day-01/SUMMARY.md`

**Final Git Push:**
```bash
# Stage all changes
git add .

# Commit
git commit -m "Day 1 Complete: Summary and all programs"

# Push
git push origin main
```

---

## 🎉 **DAY 1 COMPLETE!**

### ✅ Achievement Unlocked
- 🏆 Setup complete development environment
- 🏆 Learned Java fundamentals
- 🏆 Solved 3 LeetCode problems
- 🏆 Created GitHub repository
- 🏆 Wrote 15+ Java programs
- 🏆 Mastered Big O notation basics

### 📊 Progress
```
Day 1/90 ████████████████████░░░░░░░░░░░░░░░░░░░ 1.1%
```

### 💪 Motivational Quote
> "The journey of a thousand miles begins with a single step."
> — Lao Tzu

**You've taken your first step towards becoming a skilled software engineer!**

---

## 📚 Additional Resources

### Must-Watch Videos
1. **Java Basics:** https://www.youtube.com/watch?v=eIrMbAQSU34
2. **Big O Notation:** https://www.youtube.com/watch?v=v4cd1O4zkGw
3. **Git & GitHub:** https://www.youtube.com/watch?v=RGOj5yH7evk

### Reading Material
1. **Oracle Java Tutorials:** https://docs.oracle.com/javase/tutorial/
2. **LeetCode Patterns:** https://leetcode.com/discuss/general-discussion/460599/
3. **Big O Cheat Sheet:** https://www.bigocheatsheet.com/

### Practice Platforms
1. **LeetCode:** https://leetcode.com/
2. **HackerRank:** https://www.hackerrank.com/domains/java
3. **CodeChef:** https://www.codechef.com/

---

## 🗓️ Tomorrow Preview: Day 2

### Topics:
- Control Flow: if-else, switch-case, loops
- Arrays: 1D and 2D arrays
- String manipulation
- LeetCode: Array problems

### Get Ready For:
- More complex problem solving
- Array two-pointer technique
- Building on today's foundation

---

**🎯 Reminder:** Review today's code before sleep. Repetition strengthens learning!

**Good night and see you tomorrow! 💤**

---

*Last Updated: Day 1 - [Current Date]*
*GitHub: [Your Repository Link]*

**2. Install IDE (Choose one)**

**Option A: IntelliJ IDEA Community (Recommended)**
- Download from: https://www.jetbrains.com/idea/download/
- Install Community Edition (Free)
- Benefits: Smart code completion, debugging, refactoring

**Option B: VS Code with Java Extension Pack**
- Download VS Code: https://code.visualstudio.com/
- Install Extension Pack for Java (by Microsoft)
- Lightweight and versatile

**3. Install Git**
```bash
# Download Git: https://git-scm.com/downloads
# Verify installation:
git --version

# Configure Git:
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

**4. Create GitHub Account**
- Sign up at: https://github.com
- Create repository: "90-day-placement-prep"
- Clone locally or initialize new project

#### 7:00 - 8:00 AM: Java Programming Basics - Theory
**Topics to Cover:**
- Java program structure and syntax
- Data types: primitive (int, double, char, boolean) and reference (String)
- Variables: declaration, initialization, naming conventions
- Basic operators: arithmetic, relational, logical
- Input/Output: Scanner class, System.out.println()
- Comments: single-line (//) and multi-line (/* */)

**Study Resources:**
- 📖 Read: Java Basics - https://www.geeksforgeeks.org/java-programming-basics/
- 🎥 Watch: "Java Tutorial for Beginners" by Programming with Mosh (first 1 hour)
- 📖 Oracle Java Tutorials: https://docs.oracle.com/javase/tutorial/

**Key Concepts:**

```java
// 1. Basic Program Structure
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}

// 2. Data Types
int age = 25;                    // 32-bit integer
long population = 7000000000L;   // 64-bit integer
float price = 19.99f;            // 32-bit floating point
double pi = 3.14159265359;       // 64-bit floating point
char grade = 'A';                // Single character
boolean isStudent = true;        // true or false
String name = "John Doe";        // String (object)

// 3. Variable Naming Conventions (camelCase)
int studentAge;        // ✓ Good
int student_age;       // ✗ Avoid (use in constants only)
int STUDENT_AGE;       // ✓ Constants (final variables)

// 4. Operators
int a = 10, b = 3;
System.out.println(a + b);   // 13 (Addition)
System.out.println(a - b);   // 7  (Subtraction)
System.out.println(a * b);   // 30 (Multiplication)
System.out.println(a / b);   // 3  (Integer division)
System.out.println(a % b);   // 1  (Modulus/Remainder)

// Relational operators
System.out.println(a > b);   // true
System.out.println(a == b);  // false
System.out.println(a != b);  // true

// 5. Input from User
import java.util.Scanner;
Scanner scanner = new Scanner(System.in);
System.out.print("Enter your name: ");
String userName = scanner.nextLine();
System.out.println("Hello, " + userName + "!");
```

#### 8:00 - 9:00 AM: Hands-On Java Practice
**Exercises:** Create these programs in IntelliJ IDEA

**Exercise 1: Hello World**
```java
// File: HelloWorld.java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Java World!");
        System.out.println("Welcome to 90-Day Placement Preparation!");
    }
}
```

**Exercise 2: Variables and Data Types**
```java
// File: DataTypesDemo.java
public class DataTypesDemo {
    public static void main(String[] args) {
        // Primitive data types
        byte age = 25;              // -128 to 127
        short year = 2024;          // -32,768 to 32,767
        int population = 1000000;   // ~2 billion range
        long distance = 93000000L;  // Large numbers
        
        float price = 99.99f;       // 6-7 decimal digits
        double pi = 3.14159265359;  // 15-16 decimal digits
        
        char grade = 'A';
        boolean isPassed = true;
        
        // Reference type
        String name = "Java Developer";
        
        // Print all values
        System.out.println("Age: " + age);
        System.out.println("Year: " + year);
        System.out.println("Population: " + population);
        System.out.println("Distance: " + distance);
        System.out.println("Price: $" + price);
        System.out.println("Pi: " + pi);
        System.out.println("Grade: " + grade);
        System.out.println("Passed: " + isPassed);
        System.out.println("Name: " + name);
    }
}
```

**Exercise 3: Basic Calculator**
```java
// File: BasicCalculator.java
public class BasicCalculator {
    public static void main(String[] args) {
        int num1 = 15;
        int num2 = 4;
        
        System.out.println("Number 1: " + num1);
        System.out.println("Number 2: " + num2);
        System.out.println("-------------------");
        System.out.println("Addition: " + (num1 + num2));
        System.out.println("Subtraction: " + (num1 - num2));
        System.out.println("Multiplication: " + (num1 * num2));
        System.out.println("Division: " + (num1 / num2));
        System.out.println("Modulus: " + (num1 % num2));
        
        // Floating point division
        double result = (double) num1 / num2;
        System.out.println("Exact Division: " + result);
    }
}
```

**Exercise 4: User Input**
```java
// File: UserInput.java
import java.util.Scanner;

public class UserInput {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();
        
        System.out.print("Enter your age: ");
        int age = scanner.nextInt();
        
        System.out.print("Enter your GPA: ");
        double gpa = scanner.nextDouble();
        
        System.out.println("\n--- Your Details ---");
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("GPA: " + gpa);
        
        scanner.close();
    }
}
```

---

### 🌞 Afternoon Session (2:00 PM - 5:00 PM) - 3 hours

#### 2:00 - 3:30 PM: LeetCode Practice - Easy Problems

**Problem 1: Two Sum (LeetCode #1)** ⭐ EASY
- **Link**: https://leetcode.com/problems/two-sum/
- **Difficulty**: Easy
- **Time to Solve**: 30-40 minutes

**Problem Description:**
Given an array of integers `nums` and an integer `target`, return indices of the two numbers that add up to `target`.

**Example:**
```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: nums[0] + nums[1] = 2 + 7 = 9
```

**Solution Approach 1: Brute Force**
```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Check every pair of numbers
        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    return new int[]{i, j};
                }
            }
        }
        return new int[]{};  // No solution found
    }
}
// Time Complexity: O(n²) - nested loops
// Space Complexity: O(1) - constant extra space
```

**Solution Approach 2: HashMap (Optimal)**
```java
import java.util.HashMap;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> map = new HashMap<>();
        
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            
            // Check if complement exists in map
            if (map.containsKey(complement)) {
                return new int[]{map.get(complement), i};
            }
            
            // Store current number and its index
            map.put(nums[i], i);
        }
        
        return new int[]{};  // No solution
    }
}
// Time Complexity: O(n) - single pass
// Space Complexity: O(n) - HashMap storage
```

**Key Learnings:**
- HashMap for O(1) lookup
- Trade-off: Space vs Time complexity
- Always consider optimal solution after brute force

**Problem 2: Simple Interest Calculator**
```python
# Calculate simple interest
principal = float(input("Enter principal amount: "))
rate = float(input("Enter rate of interest: "))
time = float(input("Enter time period (years): "))

simple_interest = (principal * rate * time) / 100
total_amount = principal + simple_interest

print(f"Simple Interest: ${simple_interest}")
print(f"Total Amount: ${total_amount}")
```

**Problem 3: Area Calculator**
```python
# Calculate area of different shapes
import math

# Circle
radius = float(input("Enter radius of circle: "))
circle_area = math.pi * radius ** 2
print(f"Circle Area: {circle_area:.2f}")

# Rectangle
length = float(input("Enter length of rectangle: "))
width = float(input("Enter width of rectangle: "))
rectangle_area = length * width
print(f"Rectangle Area: {rectangle_area:.2f}")

# Triangle
base = float(input("Enter base of triangle: "))
height = float(input("Enter height of triangle: "))
triangle_area = 0.5 * base * height
print(f"Triangle Area: {triangle_area:.2f}")
```

**Problem 4: Swap Two Numbers**
```python
# Method 1: Using temporary variable
a = 10
b = 20
print(f"Before swap: a = {a}, b = {b}")
temp = a
a = b
b = temp
print(f"After swap: a = {a}, b = {b}")

# Method 2: Without temporary variable
a = 10
b = 20
print(f"Before swap: a = {a}, b = {b}")
a, b = b, a
print(f"After swap: a = {a}, b = {b}")
```

**Problem 5: Even or Odd Checker**
```python
number = int(input("Enter a number: "))
if number % 2 == 0:
    print(f"{number} is Even")
else:
    print(f"{number} is Odd")
```

#### 3:30 - 4:30 PM: Git & GitHub Setup

**Tasks:**
1. Install Git
2. Configure Git:
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

3. Create GitHub account (if not exists)
4. Create repository: `90-day-ml-journey`
5. Initialize local repository:
```bash
cd 90-day-ml-journey
git init
git add .
git commit -m "Day 1: Initial setup and Python basics"
git branch -M main
git remote add origin https://github.com/yourusername/90-day-ml-journey.git
git push -u origin main
```

#### 4:30 - 5:00 PM: Documentation
Create README.md:
```markdown
# 90-Day ML Journey

## Day 1: Python Fundamentals
- ✅ Environment setup complete
- ✅ Python basics learned
- ✅ First programs written
- ✅ Git repository initialized

### Skills Learned
- Python installation and setup
- Variables and data types
- Basic operators
- Input/output operations
- String manipulation

### Programs Created
1. Basic calculator
2. Temperature converter
3. Simple interest calculator
4. Area calculator
5. Number swap program

### Next: Day 2 - Control Flow & Conditionals
```

---

### Evening Session (7:00 PM - 10:00 PM)

#### 7:00 - 8:30 PM: Mini Project - Personal Info Manager

**Project: Create a simple personal information manager**

```python
"""
Personal Information Manager
Day 1 Mini Project
"""

print("=" * 50)
print("PERSONAL INFORMATION MANAGER")
print("=" * 50)

# Collect information
first_name = input("\nEnter your first name: ")
last_name = input("Enter your last name: ")
age = int(input("Enter your age: "))
email = input("Enter your email: ")
phone = input("Enter your phone number: ")
city = input("Enter your city: ")
country = input("Enter your country: ")

# Calculate birth year (approximate)
current_year = 2025
birth_year = current_year - age

# Display formatted information
print("\n" + "=" * 50)
print("YOUR PROFILE")
print("=" * 50)
print(f"\nFull Name: {first_name} {last_name}")
print(f"Age: {age} years old (Born: ~{birth_year})")
print(f"Email: {email}")
print(f"Phone: {phone}")
print(f"Location: {city}, {country}")
print(f"\nUsername Suggestion: {first_name.lower()}{birth_year}")
print(f"Initials: {first_name[0].upper()}.{last_name[0].upper()}.")

# Save to file
with open("my_profile.txt", "w") as f:
    f.write("PERSONAL PROFILE\n")
    f.write("=" * 50 + "\n")
    f.write(f"Full Name: {first_name} {last_name}\n")
    f.write(f"Age: {age} years old\n")
    f.write(f"Email: {email}\n")
    f.write(f"Phone: {phone}\n")
    f.write(f"Location: {city}, {country}\n")

print("\n✓ Profile saved to 'my_profile.txt'")
print("=" * 50)
```

#### 8:30 - 9:30 PM: Review & Consolidation

**Review Checklist:**
- [ ] Python installed and working
- [ ] VS Code configured with Python extension
- [ ] Virtual environment created and activated
- [ ] Git configured and repository created
- [ ] All 5 practice problems completed
- [ ] Mini project working correctly
- [ ] Code pushed to GitHub

**Key Concepts Mastered:**
1. Variables and assignment
2. Data types (int, float, str, bool)
3. Operators (arithmetic, comparison)
4. Input/output operations
5. String operations and formatting
6. Type conversion
7. Comments and documentation
8. File operations (basic)

**Common Mistakes to Avoid:**
- Forgetting to convert input() to int/float
- Mixing up = (assignment) and == (comparison)
- Not activating virtual environment
- Forgetting to commit and push to GitHub

#### 9:30 - 10:00 PM: Day 2 Preparation

**Tomorrow's Topics:**
- Control flow (if-else-elif)
- Comparison and logical operators
- Nested conditions
- Ternary operator

**Pre-read:**
- Python conditionals documentation
- Boolean logic refresher

**Prepare:**
- [ ] Read about if-else statements
- [ ] Watch: "Python If-Else" tutorial (bookmark)
- [ ] Set goals for Day 2
- [ ] Plan tomorrow's schedule

---

## 📊 Daily Metrics

### Time Spent
- Setup & Installation: 1 hour
- Theory & Learning: 2 hours
- Practice Problems: 2.5 hours
- Project Work: 1.5 hours
- Git & Documentation: 1 hour
- Review: 1 hour
**Total: 9 hours**

### Problems Solved
- ✅ Temperature Converter
- ✅ Simple Interest Calculator
- ✅ Area Calculator
- ✅ Number Swap
- ✅ Even/Odd Checker
- ✅ Personal Info Manager (Project)
**Total: 6 programs**

### Skills Acquired
- [x] Python environment setup
- [x] Basic syntax and variables
- [x] Data types and conversion
- [x] Input/output operations
- [x] String manipulation
- [x] Basic file operations
- [x] Git version control basics

---

## 📝 Notes & Reflections

### What Went Well
- Successfully set up complete development environment
- Understood Python basics quickly
- All programs executed without errors
- Git repository created and code committed

### Challenges Faced
- Virtual environment activation (resolved)
- Understanding string formatting (f-strings vs format())
- Git push authentication (used personal access token)

### Key Takeaways
1. Python syntax is clean and readable
2. Variables don't need type declaration
3. Input always returns string - need conversion
4. F-strings are powerful for formatting
5. Git workflow: add → commit → push

### Questions for Further Study
- How do functions work in Python?
- What are lists and how to use them?
- How to handle errors gracefully?
- What are modules and how to import them?

---

## 🎯 Tomorrow's Goals

**Day 2 Objectives:**
- Master if-else-elif statements
- Learn logical operators (and, or, not)
- Practice nested conditions
- Solve 10 conditional problems
- Build a grade calculator

**Preparation:**
- [ ] Review today's code
- [ ] Set up Day-02 folder
- [ ] Bookmark learning resources
- [ ] Get good rest (7-8 hours sleep)

---

## ✅ Day 1 Completion Checklist

- [x] Python 3.11+ installed
- [x] Virtual environment created
- [x] VS Code configured
- [x] Git and GitHub setup complete
- [x] 5 practice problems solved
- [x] Mini project completed
- [x] Code committed to GitHub
- [x] Documentation written
- [x] Daily progress tracked
- [x] Day 2 prepared

**Day 1 Status: ✅ COMPLETED**

---

**Daily Quote:** *"The journey of a thousand miles begins with a single step."* - Lao Tzu

**You've completed Day 1! Great job! 🎉**

**Tomorrow, we dive into control flow and decision making. Keep up the momentum! 💪**
