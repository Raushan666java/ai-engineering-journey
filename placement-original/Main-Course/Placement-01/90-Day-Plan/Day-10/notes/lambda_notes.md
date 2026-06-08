# Lambda Expressions - Comprehensive Notes

## Table of Contents
- [Introduction](#introduction)
- [Lambda Syntax](#lambda-syntax)
- [Functional Interfaces](#functional-interfaces)
- [Method References](#method-references)
- [Variable Capture](#variable-capture)
- [Best Practices](#best-practices)

## Introduction

Lambda expressions are a key feature introduced in Java 8 that enable **functional programming** in Java. They allow you to treat functionality as a method argument (passing behavior) and make code more concise and readable.

### Before Java 8 (Anonymous Inner Classes)
```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

// Filter even numbers - verbose!
List<Integer> evens = new ArrayList<>();
for (Integer n : numbers) {
    if (n % 2 == 0) {
        evens.add(n);
    }
}

// Or with anonymous inner class
Comparator<String> comparator = new Comparator<String>() {
    @Override
    public int compare(String s1, String s2) {
        return s1.compareTo(s2);
    }
};
```

### After Java 8 (Lambda Expressions)
```java
List<Integer> evens = numbers.stream()
    .filter(n -> n % 2 == 0)
    .collect(Collectors.toList());

Comparator<String> comparator = (s1, s2) -> s1.compareTo(s2);
// Or even simpler with method reference
Comparator<String> comparator = String::compareTo;
```

## Lambda Syntax

### Basic Syntax
```
(parameters) -> expression
(parameters) -> { statements; }
```

### Variations

**1. Zero Parameters**
```java
() -> System.out.println("Hello")
() -> 42
() -> { return "Hello World"; }
```

**2. One Parameter (parentheses optional)**
```java
x -> x * x
x -> System.out.println(x)
(x) -> x * x  // Parentheses are optional for single parameter
```

**3. Multiple Parameters (parentheses required)**
```java
(x, y) -> x + y
(x, y) -> { return x * y; }
(a, b, c) -> a + b + c
```

**4. Type Inference**
```java
// Types inferred by compiler
(x, y) -> x + y

// Types can be explicit
(Integer x, Integer y) -> x + y

// Mix not allowed - either all types or no types
// (x, Integer y) -> x + y  // ERROR
```

**5. Block Body**
```java
x -> {
    int result = x * 2;
    System.out.println(result);
    return result;
}
```

## Functional Interfaces

A functional interface has **exactly one abstract method**. Lambda expressions can only be used with functional interfaces.

### Built-in Functional Interfaces (java.util.function)

**1. Predicate<T>** - Test a condition
```java
@FunctionalInterface
public interface Predicate<T> {
    boolean test(T t);
}

Predicate<Integer> isEven = n -> n % 2 == 0;
System.out.println(isEven.test(4));  // true
```

**2. Function<T, R>** - Transform input to output
```java
@FunctionalInterface
public interface Function<T, R> {
    R apply(T t);
}

Function<String, Integer> length = s -> s.length();
System.out.println(length.apply("Hello"));  // 5
```

**3. Consumer<T>** - Consume input (void operation)
```java
@FunctionalInterface
public interface Consumer<T> {
    void accept(T t);
}

Consumer<String> print = s -> System.out.println(s);
print.accept("Hello");  // Prints "Hello"
```

**4. Supplier<T>** - Supply a value (no input)
```java
@FunctionalInterface
public interface Supplier<T> {
    T get();
}

Supplier<Double> random = () -> Math.random();
System.out.println(random.get());  // Random number
```

**5. BiFunction<T, U, R>** - Two inputs, one output
```java
@FunctionalInterface
public interface BiFunction<T, U, R> {
    R apply(T t, U u);
}

BiFunction<Integer, Integer, Integer> add = (a, b) -> a + b;
System.out.println(add.apply(2, 3));  // 5
```

**6. UnaryOperator<T>** - Same input and output type
```java
@FunctionalInterface
public interface UnaryOperator<T> extends Function<T, T> {
    // Inherits: T apply(T t)
}

UnaryOperator<Integer> square = x -> x * x;
System.out.println(square.apply(5));  // 25
```

**7. BinaryOperator<T>** - Two inputs of same type, same type output
```java
@FunctionalInterface
public interface BinaryOperator<T> extends BiFunction<T, T, T> {
    // Inherits: T apply(T t1, T t2)
}

BinaryOperator<Integer> multiply = (a, b) -> a * b;
System.out.println(multiply.apply(3, 4));  // 12
```

### Predicate Composition
```java
Predicate<Integer> isEven = n -> n % 2 == 0;
Predicate<Integer> isPositive = n -> n > 0;

// AND
Predicate<Integer> isPositiveEven = isEven.and(isPositive);
System.out.println(isPositiveEven.test(4));  // true

// OR
Predicate<Integer> isEvenOrPositive = isEven.or(isPositive);
System.out.println(isEvenOrPositive.test(3));  // true

// NEGATE
Predicate<Integer> isOdd = isEven.negate();
System.out.println(isOdd.test(3));  // true
```

### Function Composition
```java
Function<Integer, Integer> addOne = x -> x + 1;
Function<Integer, Integer> multiplyByTwo = x -> x * 2;

// andThen: f.andThen(g) == g(f(x))
Function<Integer, Integer> addThenMultiply = addOne.andThen(multiplyByTwo);
System.out.println(addThenMultiply.apply(3));  // (3 + 1) * 2 = 8

// compose: f.compose(g) == f(g(x))
Function<Integer, Integer> multiplyThenAdd = addOne.compose(multiplyByTwo);
System.out.println(multiplyThenAdd.apply(3));  // (3 * 2) + 1 = 7
```

## Method References

Method references are shorthand for lambda expressions that only call a single method.

### Syntax: `ClassName::methodName`

**1. Static Method Reference**
```java
// Lambda
Function<String, Integer> parser1 = s -> Integer.parseInt(s);

// Method reference
Function<String, Integer> parser2 = Integer::parseInt;
```

**2. Instance Method Reference (Specific Object)**
```java
String str = "Hello";

// Lambda
Supplier<String> upper1 = () -> str.toUpperCase();

// Method reference
Supplier<String> upper2 = str::toUpperCase;
```

**3. Instance Method Reference (Arbitrary Object)**
```java
// Lambda
Function<String, String> upper1 = s -> s.toUpperCase();

// Method reference
Function<String, String> upper2 = String::toUpperCase;
```

**4. Constructor Reference**
```java
// Lambda
Supplier<List<String>> list1 = () -> new ArrayList<>();

// Method reference
Supplier<List<String>> list2 = ArrayList::new;

// With parameter
Function<Integer, List<String>> listWithSize = ArrayList::new;
```

### Common Method References

```java
// Arrays.sort with method reference
String[] names = {"Charlie", "Alice", "Bob"};
Arrays.sort(names, String::compareTo);

// Stream operations
List<String> list = Arrays.asList("a", "b", "c");
list.forEach(System.out::println);

// Mapping
List<Integer> lengths = list.stream()
    .map(String::length)
    .collect(Collectors.toList());

// Filtering with method reference
List<String> nonEmpty = list.stream()
    .filter(String::isEmpty)  // Returns false for empty
    .collect(Collectors.toList());
```

## Variable Capture

Lambda expressions can access variables from the enclosing scope, but with restrictions.

### Effectively Final Variables

Lambda expressions can only capture variables that are **effectively final** (not modified after initialization).

```java
int multiplier = 10;  // Effectively final

Function<Integer, Integer> multiply = x -> x * multiplier;
System.out.println(multiply.apply(5));  // 50

// multiplier = 20;  // ERROR: Cannot modify captured variable
```

### Why Effectively Final?

**Thread Safety**: Lambda expressions can be executed on different threads. Allowing modification of captured variables could lead to race conditions.

```java
// This is OK
final int a = 10;
Runnable r = () -> System.out.println(a);

// This is NOT OK
int b = 10;
Runnable r2 = () -> System.out.println(b);
b = 20;  // ERROR: Lambda captured 'b', cannot modify
```

### Local Variables vs Instance Variables

```java
class Example {
    private int instanceVar = 10;
    
    public void method() {
        int localVar = 20;
        
        // Can capture instance variables (this is effectively final)
        Runnable r1 = () -> System.out.println(instanceVar);
        
        // Local variables must be effectively final
        Runnable r2 = () -> System.out.println(localVar);
        
        // Can modify instance variables
        instanceVar = 30;  // OK
        
        // Cannot modify local variables
        // localVar = 40;  // ERROR
    }
}
```

## Best Practices

### 1. Keep Lambdas Short and Simple
```java
// Good: Single line, clear intent
list.stream().filter(s -> s.length() > 5).collect(Collectors.toList());

// Bad: Too complex, use method instead
list.stream().filter(s -> {
    if (s == null) return false;
    if (s.isEmpty()) return false;
    return s.matches("[a-zA-Z]+");
}).collect(Collectors.toList());

// Better: Extract to method
list.stream().filter(this::isValidString).collect(Collectors.toList());

private boolean isValidString(String s) {
    return s != null && !s.isEmpty() && s.matches("[a-zA-Z]+");
}
```

### 2. Use Method References When Possible
```java
// Verbose
list.stream().map(s -> s.toUpperCase()).collect(Collectors.toList());

// Concise
list.stream().map(String::toUpperCase).collect(Collectors.toList());
```

### 3. Avoid Side Effects
```java
// Bad: Side effect (modifying external state)
List<String> result = new ArrayList<>();
list.stream().forEach(s -> result.add(s.toUpperCase()));

// Good: No side effects
List<String> result = list.stream()
    .map(String::toUpperCase)
    .collect(Collectors.toList());
```

### 4. Use Appropriate Functional Interface
```java
// Use existing interfaces when possible
Function<String, Integer> length = s -> s.length();  // Good

// Don't create custom interface when built-in exists
@FunctionalInterface
interface StringToInt {
    int convert(String s);
}
StringToInt length = s -> s.length();  // Unnecessary
```

### 5. Type Inference
```java
// Good: Let compiler infer types
BiFunction<Integer, Integer, Integer> add = (a, b) -> a + b;

// Unnecessary: Explicit types
BiFunction<Integer, Integer, Integer> add = (Integer a, Integer b) -> a + b;
```

## Common Interview Questions

**Q1: What is the difference between lambda expression and anonymous inner class?**
- Lambda: Only for functional interfaces, more concise, cannot have state
- Anonymous class: Can implement any interface, can have state and multiple methods

**Q2: Can a lambda expression modify local variables?**
- No, local variables must be effectively final

**Q3: What is the difference between `andThen` and `compose`?**
- `andThen`: Execute this function, then the next → `f.andThen(g)` = `g(f(x))`
- `compose`: Execute parameter function, then this → `f.compose(g)` = `f(g(x))`

**Q4: Can you throw checked exceptions from a lambda expression?**
- Only if the functional interface declares the exception in its abstract method
- Otherwise, wrap in unchecked exception or handle within lambda

## Summary

### Key Takeaways
1. **Lambda syntax**: `(parameters) -> expression`
2. **Functional interface**: Interface with single abstract method
3. **Method reference**: Shorthand for lambda calling one method
4. **Variable capture**: Only effectively final variables can be captured
5. **Built-in interfaces**: Predicate, Function, Consumer, Supplier, etc.

### When to Use Lambdas
✅ Short, simple operations  
✅ Stream API operations  
✅ Event handlers  
✅ Callbacks  
✅ Sorting comparators  

### When NOT to Use Lambdas
❌ Complex logic (extract to method)  
❌ Need state or multiple methods  
❌ Many lines of code  
❌ Side effects (prefer pure functions)  

## Further Reading
- Java 8 Streams API documentation
- Effective Java (Joshua Bloch) - Lambda chapter
- Functional Programming in Java (Venkat Subramaniam)
