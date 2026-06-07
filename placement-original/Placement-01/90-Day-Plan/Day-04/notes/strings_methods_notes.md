# Day 4: Strings & Methods - Study Notes

## 📋 Overview
**Date:** Day 4 of 90-Day Placement Plan
**Focus:** String manipulation and method fundamentals
**Duration:** 9 hours (Morning: Theory, Afternoon: Practice, Evening: Projects)

---

## 🔤 STRING FUNDAMENTALS

### String Class Characteristics
- **Immutable**: Once created, cannot be changed
- **Thread-safe**: Can be shared between threads safely
- **Memory efficient**: String pool for reuse
- **Final class**: Cannot be extended

### String Creation Methods
```java
// Method 1: String literals (uses string pool)
String s1 = "Hello";
String s2 = "Hello"; // Same object as s1

// Method 2: new keyword (creates new object)
String s3 = new String("Hello"); // Different object

// Method 3: Converting other types
String s4 = String.valueOf(123);
String s5 = Integer.toString(456);
```

### String Pool vs Heap
- **String Pool**: Special memory area for string literals
- **Heap**: Regular memory for `new String()` objects
- **Interning**: `intern()` method moves string to pool

---

## 🛠️ STRING METHODS

### Basic Operations
```java
String str = "Hello World";

// Length
int len = str.length(); // 11

// Character access
char first = str.charAt(0); // 'H'
char last = str.charAt(len - 1); // 'd'

// Substring
String sub1 = str.substring(6); // "World"
String sub2 = str.substring(0, 5); // "Hello"

// Case conversion
String upper = str.toUpperCase(); // "HELLO WORLD"
String lower = str.toLowerCase(); // "hello world"
```

### Search & Replace
```java
String str = "Hello World Hello";

// Index of character/word
int index1 = str.indexOf('o'); // 4
int index2 = str.indexOf("World"); // 6
int index3 = str.lastIndexOf('o'); // 14

// Contains
boolean hasWorld = str.contains("World"); // true

// Replace
String replaced1 = str.replace('o', '0'); // "Hell0 W0rld Hell0"
String replaced2 = str.replace("Hello", "Hi"); // "Hi World Hi"
String replaced3 = str.replaceAll("\\s", "_"); // "Hello_World_Hello"
```

### Comparison Methods
```java
String s1 = "Hello";
String s2 = "hello";
String s3 = "Hello";

// Equality (case-sensitive)
boolean eq1 = s1.equals(s2); // false
boolean eq2 = s1.equals(s3); // true

// Case-insensitive comparison
boolean eq3 = s1.equalsIgnoreCase(s2); // true

// Lexicographical comparison
int cmp1 = s1.compareTo(s2); // negative (H < h)
int cmp2 = s1.compareTo(s3); // 0 (equal)
int cmp3 = s2.compareTo(s1); // positive (h > H)
```

### Splitting & Joining
```java
String csv = "apple,banana,orange";

// Split
String[] fruits = csv.split(","); // ["apple", "banana", "orange"]

// Split with limit
String[] limited = csv.split(",", 2); // ["apple", "banana,orange"]

// Join (Java 8+)
String joined = String.join("-", fruits); // "apple-banana-orange"
String csvAgain = String.join(",", fruits); // "apple,banana,orange"
```

---

## 🔧 STRINGBUILDER CLASS

### Why StringBuilder?
- **Mutable**: Can modify contents
- **Efficient**: For multiple concatenations
- **Thread-safe alternative**: StringBuffer
- **Better performance**: No new object creation

### Basic Operations
```java
// Create StringBuilder
StringBuilder sb = new StringBuilder(); // capacity 16
StringBuilder sb2 = new StringBuilder(50); // capacity 50
StringBuilder sb3 = new StringBuilder("Hello"); // with initial content

// Append (add to end)
sb.append("Hello");
sb.append(" ");
sb.append("World"); // "Hello World"

// Insert at position
sb.insert(6, "Beautiful "); // "Hello Beautiful World"

// Replace substring
sb.replace(6, 16, "Amazing"); // "Hello Amazing World"

// Delete characters
sb.delete(6, 13); // "Hello World"

// Delete single character
sb.deleteCharAt(5); // "HelloWorld"

// Reverse
sb.reverse(); // "dlroWolleH"

// Convert to String
String result = sb.toString();
```

### Performance Comparison
```java
// Inefficient (creates 10000 objects)
String result = "";
for (int i = 0; i < 10000; i++) {
    result += i; // Creates new String each time
}

// Efficient (modifies same object)
StringBuilder sb = new StringBuilder();
for (int i = 0; i < 10000; i++) {
    sb.append(i); // Modifies existing object
}
String result = sb.toString();
```

---

## 🎯 METHOD FUNDAMENTALS

### Method Declaration Syntax
```java
[access_modifier] [static] return_type method_name(parameters) {
    // method body
    return value; // if return_type is not void
}
```

### Method Components
- **Access Modifier**: public, private, protected, default
- **Static**: Class method (vs instance method)
- **Return Type**: void, primitive, or reference type
- **Method Name**: Identifier following naming conventions
- **Parameters**: Input values (optional)
- **Method Body**: Implementation logic

### Method Examples
```java
// Void method, no parameters
public void greet() {
    System.out.println("Hello!");
}

// Return method, no parameters
public int getRandomNumber() {
    return (int) (Math.random() * 100);
}

// Void method with parameters
public void greet(String name) {
    System.out.println("Hello, " + name + "!");
}

// Return method with parameters
public int add(int a, int b) {
    return a + b;
}
```

---

## 🔄 METHOD OVERLOADING

### What is Overloading?
- **Same method name**, different parameters
- **Same class**, different signatures
- **Compile-time polymorphism**
- **Return type can be different**

### Overloading Rules
```java
class Calculator {
    // Different number of parameters
    public int add(int a, int b) {
        return a + b;
    }

    public int add(int a, int b, int c) {
        return a + b + c;
    }

    // Different parameter types
    public double add(double a, double b) {
        return a + b;
    }

    // Different parameter order (not recommended)
    public void display(int value) {
        System.out.println("Integer: " + value);
    }

    public void display(String value) {
        System.out.println("String: " + value);
    }
}
```

### Method Resolution
- **Exact match** first
- **Widening conversion** (int → long → double)
- **Autoboxing** (int → Integer)
- **Varargs** last resort

---

## 📊 PARAMETER PASSING

### Primitive Types (Pass by Value)
```java
public static void modifyPrimitive(int num) {
    num = 999; // Changes local copy only
}

public static void main(String[] args) {
    int x = 10;
    modifyPrimitive(x);
    System.out.println(x); // Still 10
}
```

### Reference Types (Pass by Value of Reference)
```java
public static void modifyArray(int[] arr) {
    arr[0] = 999; // Changes original array
}

public static void main(String[] args) {
    int[] numbers = {1, 2, 3};
    modifyArray(numbers);
    System.out.println(numbers[0]); // 999
}
```

### Immutable Objects (String)
```java
public static void modifyString(String str) {
    str = str + " Modified"; // Creates new String
}

public static void main(String[] args) {
    String text = "Hello";
    modifyString(text);
    System.out.println(text); // Still "Hello"
}
```

---

## 🔒 STATIC VS INSTANCE METHODS

### Static Methods
- **Belong to class**, not objects
- **Called using class name**: `Math.sqrt(4)`
- **Cannot access instance variables**
- **Memory efficient** (no object needed)
- **Used for utility functions**

### Instance Methods
- **Belong to objects**
- **Called on object instances**: `obj.method()`
- **Can access instance variables**
- **Need object to exist**

### Example
```java
class Counter {
    private static int staticCount = 0;
    private int instanceCount = 0;

    public static void incrementStatic() {
        staticCount++; // Can access static variables
        // instanceCount++; // ERROR: Cannot access instance variables
    }

    public void incrementInstance() {
        instanceCount++; // Can access instance variables
        staticCount++; // Can also access static variables
    }
}
```

---

## 🎨 PRACTICAL PATTERNS

### Utility Class Pattern
```java
public class StringUtils {
    private StringUtils() {} // Prevent instantiation

    public static boolean isEmpty(String str) {
        return str == null || str.trim().isEmpty();
    }

    public static String capitalize(String str) {
        if (isEmpty(str)) return str;
        return str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();
    }
}
```

### Builder Pattern with StringBuilder
```java
public class QueryBuilder {
    private StringBuilder query = new StringBuilder();

    public QueryBuilder select(String columns) {
        query.append("SELECT ").append(columns);
        return this;
    }

    public QueryBuilder from(String table) {
        query.append(" FROM ").append(table);
        return this;
    }

    public QueryBuilder where(String condition) {
        query.append(" WHERE ").append(condition);
        return this;
    }

    public String build() {
        return query.toString();
    }
}

// Usage
String sql = new QueryBuilder()
    .select("*")
    .from("users")
    .where("age > 18")
    .build();
```

---

## 🚀 INTERVIEW TIPS

### Common String Questions
1. **String vs StringBuilder**: When to use each?
2. **String immutability**: Why and implications?
3. **String pool**: How it works, intern() method
4. **String comparison**: equals() vs ==

### Common Method Questions
1. **Method overloading**: Rules and resolution
2. **Pass by value**: Primitive vs reference behavior
3. **Static vs instance**: When to use each
4. **Method signatures**: What constitutes overloading

### Performance Considerations
- Use StringBuilder for multiple concatenations
- String.intern() for memory optimization
- Avoid unnecessary object creation
- Consider StringBuilder capacity for large strings

### Best Practices
- Use meaningful method names
- Keep methods focused (single responsibility)
- Use appropriate access modifiers
- Document complex methods
- Handle null parameters gracefully

---

## 📝 QUICK REFERENCE

### String Methods Cheat Sheet
```java
// Creation
String s1 = "literal";
String s2 = new String("constructor");
String s3 = String.valueOf(obj);

// Basic operations
int len = str.length();
char c = str.charAt(index);
String sub = str.substring(start, end);

// Search & replace
int index = str.indexOf(search);
boolean contains = str.contains(search);
String replaced = str.replace(old, new);

// Comparison
boolean equal = str.equals(other);
int compare = str.compareTo(other);

// Case conversion
String upper = str.toUpperCase();
String lower = str.toLowerCase();

// Splitting & joining
String[] parts = str.split(delimiter);
String joined = String.join(delimiter, parts);
```

### StringBuilder Methods
```java
// Creation
StringBuilder sb = new StringBuilder();
StringBuilder sb2 = new StringBuilder(capacity);
StringBuilder sb3 = new StringBuilder(initial);

// Modification
sb.append(data);
sb.insert(offset, data);
sb.replace(start, end, str);
sb.delete(start, end);
sb.deleteCharAt(index);

// Utility
sb.reverse();
sb.setLength(newLength);
String result = sb.toString();
```

### Method Declaration Template
```java
[public/private/protected] [static] return_type method_name(
    [type param1, type param2, ...]
) [throws exceptions] {
    // method body
    [return value;]
}
```

---

## 🎯 PRACTICE PROBLEMS SUMMARY

### Basic Problems (1-4)
1. **String Reversal**: Implement reverse without built-in methods
2. **Vowel Counter**: Count vowels in string (case-insensitive)
3. **Calculator Class**: Method overloading for different operations
4. **Word Finder**: Find longest word in string array

### Intermediate Problems (5-8)
5. **Palindrome Checker**: Handle case and punctuation
6. **String Compression**: Run-length encoding
7. **Grade Calculator**: Variable arguments (varargs)
8. **Word Capitalizer**: Title case conversion

### Advanced Problems (9-12)
9. **Anagram Detector**: Character frequency comparison
10. **Pattern Matching**: Substring search algorithms
11. **Student Processor**: Object arrays and method calls
12. **Text Processor**: Multiple string operations combined

---

## 🔗 FURTHER READING

### Official Documentation
- [Java String API](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/String.html)
- [Java StringBuilder API](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/StringBuilder.html)
- [Java Methods Tutorial](https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html)

### Recommended Books
- "Effective Java" by Joshua Bloch
- "Java: A Beginner's Guide" by Herbert Schildt
- "Head First Java" by Kathy Sierra

### Online Resources
- GeeksforGeeks String tutorials
- HackerRank Java practice problems
- LeetCode string algorithm challenges

---

## ✅ DAY 4 COMPLETION CHECKLIST

- [ ] String creation methods (literals, new, conversion)
- [ ] String immutability and string pool concepts
- [ ] All String class methods (length, charAt, substring, etc.)
- [ ] StringBuilder vs String performance comparison
- [ ] StringBuilder operations (append, insert, replace, delete)
- [ ] Method declaration syntax and components
- [ ] Method overloading rules and examples
- [ ] Parameter passing (primitive vs reference)
- [ ] Static vs instance methods
- [ ] Method scope and visibility
- [ ] All practice problems solved and tested
- [ ] String utilities library created
- [ ] Code examples run and debugged
- [ ] Study notes reviewed and understood
- [ ] Interview questions prepared

**Next Day Preview**: Day 5 - Arrays & Collections (Arrays, ArrayList, HashMap, algorithms)