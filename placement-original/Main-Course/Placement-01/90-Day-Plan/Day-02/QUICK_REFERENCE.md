# Day 2 Quick Reference - Operators & Control Flow

## 🔧 Operators Cheat Sheet

### Arithmetic Operators
```java
int a = 10, b = 3;
a + b   // 13 (Addition)
a - b   // 7  (Subtraction)
a * b   // 30 (Multiplication)
a / b   // 3  (Division - integer)
a % b   // 1  (Modulus - remainder)
```

### Relational Operators
```java
a == b  // false (Equal to)
a != b  // true  (Not equal to)
a > b   // true  (Greater than)
a < b   // false (Less than)
a >= b  // true  (Greater than or equal to)
a <= b  // false (Less than or equal to)
```

### Logical Operators
```java
true && false  // false (AND - both must be true)
true || false  // true  (OR - at least one must be true)
!true          // false (NOT - negates)

// Short-circuit evaluation
if (a != 0 && b/a > 2) { }  // Safe: checks a != 0 first
```

### Bitwise Operators
```java
5 & 3   // 1  (0101 & 0011 = 0001)
5 | 3   // 7  (0101 | 0011 = 0111)
5 ^ 3   // 6  (0101 ^ 0011 = 0110)
~5      // -6 (NOT - inverts bits)
5 << 1  // 10 (Left shift - multiply by 2)
5 >> 1  // 2  (Right shift - divide by 2)
```

### Assignment Operators
```java
int x = 10;
x += 5;   // x = x + 5  → 15
x -= 3;   // x = x - 3  → 12
x *= 2;   // x = x * 2  → 24
x /= 4;   // x = x / 4  → 6
x %= 4;   // x = x % 4  → 2
```

### Unary Operators
```java
int x = 5;
++x;  // Pre-increment:  x becomes 6, returns 6
x++;  // Post-increment: returns 6, then x becomes 7
--x;  // Pre-decrement:  x becomes 6, returns 6
x--;  // Post-decrement: returns 6, then x becomes 5
```

### Ternary Operator
```java
// Syntax: condition ? valueIfTrue : valueIfFalse
int max = (a > b) ? a : b;
String status = (age >= 18) ? "Adult" : "Minor";

// Nested ternary
int largest = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
```

### Operator Precedence (High to Low)
```
1. Postfix:         x++, x--
2. Unary:           ++x, --x, +, -, !
3. Multiplicative:  *, /, %
4. Additive:        +, -
5. Shift:           <<, >>, >>>
6. Relational:      <, >, <=, >=
7. Equality:        ==, !=
8. Bitwise AND:     &
9. Bitwise XOR:     ^
10. Bitwise OR:     |
11. Logical AND:    &&
12. Logical OR:     ||
13. Ternary:        ? :
14. Assignment:     =, +=, -=, *=, /=, %=
```

---

## 🔀 Control Flow Cheat Sheet

### if Statement
```java
if (condition) {
    // Execute if condition is true
}
```

### if-else Statement
```java
if (condition) {
    // Execute if true
} else {
    // Execute if false
}
```

### if-else-if Ladder
```java
if (marks >= 90) {
    grade = 'A';
} else if (marks >= 80) {
    grade = 'B';
} else if (marks >= 70) {
    grade = 'C';
} else {
    grade = 'F';
}
```

### Nested if-else
```java
if (age >= 18) {
    if (hasLicense) {
        System.out.println("Can drive");
    } else {
        System.out.println("Get license first");
    }
} else {
    System.out.println("Too young");
}
```

### switch Statement
```java
switch (day) {
    case 1:
        System.out.println("Monday");
        break;
    case 2:
        System.out.println("Tuesday");
        break;
    // ... more cases
    default:
        System.out.println("Invalid day");
}
```

### switch with Fall-through
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
    // ... etc
}
```

---

## 💡 Common Patterns

### Pattern 1: Find Maximum of Three Numbers
```java
int max = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
// OR using if-else
if (a > b && a > c) max = a;
else if (b > c) max = b;
else max = c;
```

### Pattern 2: Check Range
```java
if (x >= 1 && x <= 10) {
    System.out.println("In range");
}
```

### Pattern 3: Multiple Conditions
```java
if (age >= 18 && hasID && !isBanned) {
    System.out.println("Access granted");
}
```

### Pattern 4: Swap Without Temp
```java
a = a + b;
b = a - b;
a = a - b;
// OR using XOR
a = a ^ b;
b = a ^ b;
a = a ^ b;
```

### Pattern 5: Check Even/Odd
```java
boolean isEven = (num % 2 == 0);
// OR
if ((num & 1) == 0) {
    System.out.println("Even");  // Bitwise approach
}
```

### Pattern 6: Absolute Value
```java
int abs = (num < 0) ? -num : num;
```

### Pattern 7: Grade Calculator
```java
char grade = (marks >= 90) ? 'A' :
             (marks >= 80) ? 'B' :
             (marks >= 70) ? 'C' :
             (marks >= 60) ? 'D' : 'F';
```

### Pattern 8: Leap Year Check
```java
boolean isLeap = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
```

### Pattern 9: Character Type Check
```java
if (ch >= 'a' && ch <= 'z') {
    System.out.println("Lowercase");
} else if (ch >= 'A' && ch <= 'Z') {
    System.out.println("Uppercase");
} else if (ch >= '0' && ch <= '9') {
    System.out.println("Digit");
}
```

### Pattern 10: Menu-Driven Structure
```java
System.out.println("1. Option 1");
System.out.println("2. Option 2");
int choice = scanner.nextInt();

switch (choice) {
    case 1: method1(); break;
    case 2: method2(); break;
    default: System.out.println("Invalid");
}
```

---

## 🎯 Interview Quick Answers

### Q1: Difference between `&` and `&&`?
- `&` is bitwise AND, evaluates both operands always
- `&&` is logical AND, short-circuits (stops if first is false)

### Q2: Difference between `++i` and `i++`?
- `++i`: Pre-increment, increments first then returns value
- `i++`: Post-increment, returns value then increments

### Q3: When to use switch vs if-else?
- **switch**: Multiple exact value checks, cleaner for many cases
- **if-else**: Range checks, complex conditions, boolean expressions

### Q4: Can switch work with strings?
- Yes, from Java 7 onwards strings are supported in switch

### Q5: What is short-circuit evaluation?
- In `&&`: If first is false, second isn't evaluated
- In `||`: If first is true, second isn't evaluated

---

## 📝 Code Templates

### Template 1: Input Validator
```java
Scanner sc = new Scanner(System.in);
int num;
while (true) {
    try {
        System.out.print("Enter number: ");
        num = sc.nextInt();
        if (num > 0) break;
        System.out.println("Enter positive number!");
    } catch (Exception e) {
        System.out.println("Invalid input!");
        sc.nextLine(); // Clear buffer
    }
}
```

### Template 2: Simple Calculator
```java
System.out.print("Enter operator (+,-,*,/): ");
char op = sc.next().charAt(0);
System.out.print("Enter two numbers: ");
double a = sc.nextDouble();
double b = sc.nextDouble();

double result;
switch (op) {
    case '+': result = a + b; break;
    case '-': result = a - b; break;
    case '*': result = a * b; break;
    case '/': 
        if (b != 0) result = a / b;
        else { System.out.println("Error!"); return; }
        break;
    default:
        System.out.println("Invalid operator!");
        return;
}
System.out.println("Result: " + result);
```

### Template 3: Grade Calculator
```java
int marks = 85;
char grade;

if (marks >= 90) grade = 'A';
else if (marks >= 80) grade = 'B';
else if (marks >= 70) grade = 'C';
else if (marks >= 60) grade = 'D';
else grade = 'F';

System.out.println("Grade: " + grade);
```

---

## 🐛 Common Mistakes to Avoid

```java
// ❌ WRONG: Assignment in condition
if (x = 5) { }  // Should be x == 5

// ✅ CORRECT
if (x == 5) { }

// ❌ WRONG: Comparing strings with ==
if (str1 == str2) { }

// ✅ CORRECT
if (str1.equals(str2)) { }

// ❌ WRONG: Missing break in switch
switch (x) {
    case 1: doSomething();  // Falls through to case 2!
    case 2: doSomethingElse(); break;
}

// ✅ CORRECT
switch (x) {
    case 1: doSomething(); break;
    case 2: doSomethingElse(); break;
}

// ❌ WRONG: Division by zero
int result = a / b;  // Crashes if b is 0

// ✅ CORRECT
if (b != 0) {
    int result = a / b;
} else {
    System.out.println("Cannot divide by zero!");
}
```

---

## 🚀 Quick Practice Challenges

Try solving these in under 5 minutes each:

1. Find largest of three numbers
2. Check if year is leap year
3. Convert Celsius to Fahrenheit
4. Check if number is palindrome
5. Swap two numbers without temp variable
6. Calculate simple interest
7. Check if triangle is valid
8. Find grade from percentage
9. Check if character is vowel
10. Count digits in a number

---

**Print this and keep it handy for quick reference!** 📄
