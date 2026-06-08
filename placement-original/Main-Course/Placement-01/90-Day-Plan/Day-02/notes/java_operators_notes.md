# Java Operators & Control Flow Study Notes
**Day 2: 90-Day Placement Preparation**

---

## 📚 Table of Contents
1. [Java Operators](#java-operators)
2. [Operator Precedence](#operator-precedence)
3. [Control Flow Statements](#control-flow-statements)
4. [Common Patterns](#common-patterns)
5. [Best Practices](#best-practices)
6. [Interview Questions](#interview-questions)

---

## 🔢 Java Operators

### 1. Arithmetic Operators
```java
// Basic arithmetic
+   // Addition
-   // Subtraction
*   // Multiplication
/   // Division (integer division for int types)
/   // Floating point division for float/double types
%   // Modulus (remainder)

// Increment/Decrement
++  // Increment by 1 (pre/post)
--  // Decrement by 1 (pre/post)

// Compound assignment
+=  // Add and assign
-=  // Subtract and assign
*=  // Multiply and assign
/=  // Divide and assign
%=  // Modulus and assign
```

**Key Points:**
- Integer division truncates decimal part: `5/2 = 2`
- Use floating point for decimal results: `5.0/2 = 2.5`
- Pre-increment: `++x` (increment then use)
- Post-increment: `x++` (use then increment)

### 2. Relational Operators
```java
==  // Equal to
!=  // Not equal to
>   // Greater than
<   // Less than
>=  // Greater than or equal to
<=  // Less than or equal to
```

**Key Points:**
- Compare values, return boolean
- Don't confuse `==` (comparison) with `=` (assignment)
- Works with all primitive types and objects (but compares references for objects)

### 3. Logical Operators
```java
&&  // Logical AND (short-circuit)
||  // Logical OR (short-circuit)
!   // Logical NOT
```

**Truth Table:**
```
A     B     A && B    A || B    !A
true  true   true     true     false
true  false  false    true     false
false true   false    true     true
false false  false    false    true
```

**Key Points:**
- Short-circuit evaluation: `&&` stops if first operand is false
- `||` stops if first operand is true
- Use parentheses for complex expressions

### 4. Bitwise Operators
```java
&   // Bitwise AND
|   // Bitwise OR
^   // Bitwise XOR
~   // Bitwise NOT (complement)
<<  // Left shift
>>  // Right shift (signed)
>>> // Right shift (unsigned)
```

**Examples:**
```java
int a = 12;  // Binary: 1100
int b = 10;  // Binary: 1010

a & b;  // 8  (1000)
a | b;  // 14 (1110)
a ^ b;  // 6  (0110)
~a;     // -13 (bitwise complement)
a << 2; // 48 (110000)
a >> 2; // 3  (0011)
```

### 5. Assignment Operators
```java
=   // Simple assignment
+=  // Add and assign: x += y → x = x + y
-=  // Subtract and assign
*=  // Multiply and assign
/=  // Divide and assign
%=  // Modulus and assign
&=  // Bitwise AND and assign
|=  // Bitwise OR and assign
^=  // Bitwise XOR and assign
<<= // Left shift and assign
>>= // Right shift and assign
>>>= // Unsigned right shift and assign
```

### 6. Other Operators
```java
? :     // Ternary operator: condition ? true_value : false_value
instanceof  // Type checking operator
```

---

## 📊 Operator Precedence

### Precedence Order (Highest to Lowest):
1. **Postfix**: `expr++ expr--`
2. **Unary**: `++expr --expr +expr -expr ~ !`
3. **Multiplicative**: `* / %`
4. **Additive**: `+ -`
5. **Shift**: `<< >> >>>`
6. **Relational**: `< > <= >= instanceof`
7. **Equality**: `== !=`
8. **Bitwise AND**: `&`
9. **Bitwise XOR**: `^`
10. **Bitwise OR**: `|`
11. **Logical AND**: `&&`
12. **Logical OR**: `||`
13. **Ternary**: `? :`
14. **Assignment**: `= += -= *= /= %= &= ^= |= <<= >>= >>>=`

### Memory Aid:
**Please Excuse My Dear Aunt Sally** (but for programming):
- **P**arentheses (use them!)
- **E**xponential (powers, but not in Java)
- **M**ultiplication, **D**ivision, **M**odulus
- **A**ddition, **S**ubtraction
- **S**hift operators
- **R**elational operators
- **E**quality operators
- **B**itwise operators (&, ^, |)
- **L**ogical operators (&&, ||)
- **T**ernary operator
- **A**ssignment operators

---

## 🎯 Control Flow Statements

### 1. if-else Statement
```java
// Simple if
if (condition) {
    // code to execute if condition is true
}

// if-else
if (condition) {
    // true block
} else {
    // false block
}

// if-else-if ladder
if (condition1) {
    // code for condition1
} else if (condition2) {
    // code for condition2
} else {
    // default code
}
```

### 2. switch Statement
```java
switch (expression) {
    case value1:
        // code for value1
        break;
    case value2:
        // code for value2
        break;
    default:
        // default code
        break;
}
```

**Key Points:**
- Expression must be int, char, short, byte, String, or enum
- Cases must be compile-time constants
- `break` prevents fall-through to next case
- `default` is optional but recommended

### 3. Ternary Operator
```java
// Syntax: condition ? true_expression : false_expression

int max = (a > b) ? a : b;
String result = (score >= 60) ? "Pass" : "Fail";
int abs = (num < 0) ? -num : num;
```

**Best Practices:**
- Use for simple assignments
- Avoid nested ternary operators (hard to read)
- Parentheses around conditions improve readability

---

## 🔄 Common Patterns

### 1. Range Checking
```java
// Check if number is in range [min, max]
if (num >= min && num <= max) {
    // number is in range
}

// Check if character is alphabet
if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
    // character is alphabet
}
```

### 2. Multiple Conditions
```java
// AND conditions
if (age >= 18 && hasLicense && !isSuspended) {
    // can drive
}

// OR conditions
if (day.equals("Saturday") || day.equals("Sunday")) {
    // it's weekend
}
```

### 3. Nested Conditions
```java
if (userType.equals("admin")) {
    if (password.equals("admin123")) {
        // admin login successful
    } else {
        // wrong password
    }
} else if (userType.equals("user")) {
    if (password.equals("user123")) {
        // user login successful
    } else {
        // wrong password
    }
} else {
    // invalid user type
}
```

### 4. Switch with Multiple Cases
```java
switch (month) {
    case 12:
    case 1:
    case 2:
        season = "Winter";
        break;
    case 3:
    case 4:
    case 5:
        season = "Spring";
        break;
    // ... other cases
}
```

---

## ✅ Best Practices

### Operator Usage
1. **Use parentheses** for complex expressions to avoid precedence issues
2. **Be careful with integer division** - use floating point when needed
3. **Don't confuse `==` with `=`** - common beginner mistake
4. **Use compound assignment** for cleaner code: `x += 5` instead of `x = x + 5`

### Control Flow
1. **Always use braces** `{}` even for single statements
2. **Don't forget `break` in switch** cases (unless intentional fall-through)
3. **Use meaningful variable names** in conditions
4. **Keep conditions simple** - extract complex logic to methods

### Readability
1. **Add comments** for complex conditions
2. **Use whitespace** to separate logical sections
3. **Consistent indentation** for nested structures
4. **Descriptive variable names** instead of single letters

### Performance
1. **Short-circuit evaluation** - put likely false conditions first in AND
2. **Put likely true conditions first** in OR operations
3. **Use switch for multiple constant comparisons** (faster than if-else chain)
4. **Avoid unnecessary computations** in conditions

---

## 🎯 Interview Questions

### Basic Questions
1. **What is the difference between `==` and `.equals()`?**
   - `==` compares references/values, `.equals()` compares content

2. **Explain operator precedence with an example**
   - Multiplication before addition: `2 + 3 * 4 = 14`, not 20

3. **When to use switch vs if-else?**
   - Switch for multiple constant values, if-else for ranges/conditions

### Tricky Questions
1. **What will this print?**
   ```java
   int x = 5;
   System.out.println(x++ + ++x);
   ```
   Answer: 12 (5 + 7 = 12)

2. **Short-circuit evaluation:**
   ```java
   if (false && someMethod()) {
       // someMethod() is never called
   }
   ```

3. **Integer overflow:**
   ```java
   int max = Integer.MAX_VALUE;
   System.out.println(max + 1); // Prints negative number
   ```

### Problem-Solving Questions
1. **FizzBuzz with operators:**
   ```java
   for (int i = 1; i <= 100; i++) {
       System.out.println(
           (i % 3 == 0 && i % 5 == 0) ? "FizzBuzz" :
           (i % 3 == 0) ? "Fizz" :
           (i % 5 == 0) ? "Buzz" : i
       );
   }
   ```

2. **Bit manipulation for permissions:**
   ```java
   int permissions = 0;
   final int READ = 1, WRITE = 2, EXECUTE = 4;

   // Grant permissions
   permissions |= READ | WRITE;  // Set bits

   // Check permissions
   if ((permissions & READ) != 0) { /* can read */ }
   if ((permissions & WRITE) != 0) { /* can write */ }
   ```

---

## 🐛 Common Bugs & Fixes

### 1. Assignment in Condition
```java
// Bug
if (x = 5) { // Always true, assigns 5 to x

// Fix
if (x == 5) { // Compares x with 5
```

### 2. Missing Break in Switch
```java
// Bug
switch (day) {
    case 1: System.out.println("Monday");
    case 2: System.out.println("Tuesday"); // This also executes
    case 3: System.out.println("Wednesday");
}

// Fix
switch (day) {
    case 1: System.out.println("Monday"); break;
    case 2: System.out.println("Tuesday"); break;
    case 3: System.out.println("Wednesday"); break;
}
```

### 3. Integer Division
```java
// Bug
double average = (a + b) / 2; // Integer division if a,b are int

// Fix
double average = (a + b) / 2.0; // Force floating point division
```

### 4. Logical Operator Precedence
```java
// Bug
if (a && b || c) // && has higher precedence than ||

// May not work as intended
if (a && (b || c)) // Clear precedence with parentheses
```

---

## 📈 Practice Exercises

### Easy
1. Check if a number is even or odd
2. Find maximum of three numbers
3. Check if character is vowel or consonant
4. Simple calculator with switch
5. Grade calculator with if-else

### Medium
1. Leap year checker
2. Triangle type identifier
3. Electricity bill calculator
4. Menu-driven program
5. Complex number classifier

### Hard
1. Date validation
2. Complex business logic with nested conditions
3. Bit manipulation problems
4. Multi-level menu system
5. State machine implementation

---

## 🎯 Key Takeaways

1. **Master operator precedence** - use parentheses when unsure
2. **Understand short-circuit evaluation** - order conditions wisely
3. **Use switch for multiple constants** - more efficient and readable
4. **Always use braces** - prevents dangling else problems
5. **Test edge cases** - boundary conditions often cause bugs
6. **Keep conditions simple** - complex logic belongs in methods
7. **Comment complex expressions** - future you will thank you
8. **Practice daily** - operators and control flow are fundamental

**Remember:** These concepts form the foundation of all programming logic. Master them well, and you'll find complex problems much easier to solve! 🚀