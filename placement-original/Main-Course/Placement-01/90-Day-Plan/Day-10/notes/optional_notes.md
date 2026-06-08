# Optional Class - Comprehensive Notes

## Table of Contents
- [Introduction](#introduction)
- [Creating Optional](#creating-optional)
- [Retrieving Values](#retrieving-values)
- [Conditional Operations](#conditional-operations)
- [Transformations](#transformations)
- [Best Practices](#best-practices)

## Introduction

`Optional<T>` is a container object introduced in Java 8 to represent the **presence or absence** of a value. It's designed to reduce `NullPointerException` and make code more readable.

### Why Optional?

**Before Java 8:**
```java
public String getUserCity(String userId) {
    User user = findUser(userId);
    if (user != null) {
        Address address = user.getAddress();
        if (address != null) {
            return address.getCity();
        }
    }
    return "Unknown";
}
```

**With Optional:**
```java
public String getUserCity(String userId) {
    return findUser(userId)
        .flatMap(User::getAddress)
        .map(Address::getCity)
        .orElse("Unknown");
}
```

### Benefits
✅ Explicit handling of null  
✅ Avoid `NullPointerException`  
✅ More readable code  
✅ Functional composition  
✅ Better API design  

## Creating Optional

### 1. Optional.of(value)
Creates Optional with non-null value. Throws `NullPointerException` if value is null.

```java
Optional<String> optional = Optional.of("Hello");
System.out.println(optional.get());  // "Hello"

Optional<String> nullOptional = Optional.of(null);  // NullPointerException!
```

### 2. Optional.ofNullable(value)
Creates Optional that may contain null.

```java
Optional<String> optional = Optional.ofNullable("Hello");
System.out.println(optional.isPresent());  // true

Optional<String> empty = Optional.ofNullable(null);
System.out.println(empty.isPresent());  // false
```

### 3. Optional.empty()
Creates empty Optional.

```java
Optional<String> empty = Optional.empty();
System.out.println(empty.isPresent());  // false
```

## Retrieving Values

### 1. get()
Returns value if present, otherwise throws `NoSuchElementException`.

```java
Optional<String> optional = Optional.of("Hello");
String value = optional.get();  // "Hello"

Optional<String> empty = Optional.empty();
String value = empty.get();  // NoSuchElementException!
```

⚠️ **Avoid using get() alone** - always check with `isPresent()` first or use safer alternatives.

### 2. orElse(defaultValue)
Returns value if present, otherwise returns default.

```java
Optional<String> optional = Optional.of("Hello");
String value = optional.orElse("Default");  // "Hello"

Optional<String> empty = Optional.empty();
String value = empty.orElse("Default");  // "Default"
```

### 3. orElseGet(Supplier<T>)
Returns value if present, otherwise invokes supplier and returns result.

```java
Optional<String> empty = Optional.empty();
String value = empty.orElseGet(() -> "Computed Default");

// Advantage over orElse: supplier only called if Optional is empty
Optional<String> optional = Optional.of("Hello");
String value = optional.orElseGet(() -> {
    System.out.println("Computing default...");
    return "Default";
});  // "Computing default..." NOT printed
```

### 4. orElseThrow()
Returns value if present, otherwise throws exception.

```java
// Java 10+: No argument (throws NoSuchElementException)
String value = optional.orElseThrow();

// With custom exception
String value = optional.orElseThrow(() -> 
    new IllegalStateException("Value not found")
);
```

## Conditional Operations

### 1. isPresent()
Returns true if value is present.

```java
Optional<String> optional = Optional.of("Hello");
if (optional.isPresent()) {
    System.out.println(optional.get());
}
```

### 2. isEmpty() (Java 11+)
Returns true if value is absent.

```java
Optional<String> empty = Optional.empty();
if (empty.isEmpty()) {
    System.out.println("No value");
}
```

### 3. ifPresent(Consumer<T>)
Executes action if value is present.

```java
Optional<String> optional = Optional.of("Hello");
optional.ifPresent(value -> System.out.println(value));

// Common use case
userRepository.findById(id)
    .ifPresent(user -> System.out.println("Found: " + user.getName()));
```

### 4. ifPresentOrElse(Consumer<T>, Runnable) (Java 9+)
Executes action if present, otherwise runs empty action.

```java
optional.ifPresentOrElse(
    value -> System.out.println("Value: " + value),
    () -> System.out.println("No value")
);
```

## Transformations

### 1. map(Function<T,U>)
Transforms value if present.

```java
Optional<String> optional = Optional.of("hello");
Optional<String> upper = optional.map(String::toUpperCase);
System.out.println(upper.get());  // "HELLO"

Optional<String> empty = Optional.empty();
Optional<String> result = empty.map(String::toUpperCase);
System.out.println(result.isPresent());  // false
```

**Example: Extract property**
```java
Optional<User> user = findUser(id);
Optional<String> email = user.map(User::getEmail);
```

### 2. flatMap(Function<T, Optional<U>>)
Transforms value and flattens nested Optional.

```java
// Without flatMap (nested Optional)
Optional<Optional<String>> nested = optional.map(this::getAddress);

// With flatMap (flattened)
Optional<String> address = optional.flatMap(this::getAddress);
```

**Example: Chain optional operations**
```java
public class User {
    private Optional<Address> address;
    public Optional<Address> getAddress() { return address; }
}

public class Address {
    private String city;
    public String getCity() { return city; }
}

// Chain operations
Optional<User> user = findUser(id);
Optional<String> city = user
    .flatMap(User::getAddress)
    .map(Address::getCity);
```

### 3. filter(Predicate<T>)
Filters value based on predicate.

```java
Optional<String> optional = Optional.of("hello");

Optional<String> longWord = optional.filter(s -> s.length() > 10);
System.out.println(longWord.isPresent());  // false

Optional<String> shortWord = optional.filter(s -> s.length() <= 10);
System.out.println(shortWord.isPresent());  // true
```

**Example: Conditional retrieval**
```java
Optional<User> adult = findUser(id)
    .filter(user -> user.getAge() >= 18);
```

### 4. or(Supplier<Optional<T>>) (Java 9+)
Returns this Optional if present, otherwise returns supplier's Optional.

```java
Optional<String> optional = Optional.empty();
Optional<String> alternative = Optional.of("Alternative");

Optional<String> result = optional.or(() -> alternative);
System.out.println(result.get());  // "Alternative"
```

## Best Practices

### 1. Don't Use Optional for Fields
```java
// Bad
public class User {
    private Optional<String> email;  // Don't do this!
}

// Good
public class User {
    private String email;  // Can be null
    
    public Optional<String> getEmail() {
        return Optional.ofNullable(email);
    }
}
```

**Why?** Optional is not Serializable, adds unnecessary overhead.

### 2. Return Optional from Methods
```java
// Good: Clear API that may not return a value
public Optional<User> findUserById(String id) {
    User user = database.query(id);
    return Optional.ofNullable(user);
}

// Caller code
findUserById("123")
    .ifPresent(user -> System.out.println(user.getName()));
```

### 3. Don't Use Optional with Collections
```java
// Bad
public Optional<List<User>> getUsers() {
    return Optional.ofNullable(users);
}

// Good: Return empty collection instead
public List<User> getUsers() {
    return users != null ? users : Collections.emptyList();
}
```

### 4. Avoid get() Without isPresent()
```java
// Bad
if (optional.isPresent()) {
    String value = optional.get();
    // use value
}

// Good
optional.ifPresent(value -> {
    // use value
});

// Or
String value = optional.orElse("default");
```

### 5. Use orElseGet() for Expensive Defaults
```java
// Bad: default computed even if Optional has value
String value = optional.orElse(expensiveComputation());

// Good: default computed only if needed
String value = optional.orElseGet(() -> expensiveComputation());
```

### 6. Chain Optional Operations
```java
// Bad: Multiple null checks
String city = "Unknown";
if (user != null) {
    Address address = user.getAddress();
    if (address != null) {
        city = address.getCity();
    }
}

// Good: Optional chain
String city = Optional.ofNullable(user)
    .flatMap(User::getAddress)
    .map(Address::getCity)
    .orElse("Unknown");
```

### 7. Use filter for Conditional Logic
```java
// Bad
Optional<User> user = findUser(id);
if (user.isPresent() && user.get().getAge() >= 18) {
    // process adult user
}

// Good
findUser(id)
    .filter(u -> u.getAge() >= 18)
    .ifPresent(user -> {
        // process adult user
    });
```

## Common Patterns

### Pattern 1: Default Value
```java
String name = optional.orElse("Unknown");
String name = optional.orElseGet(() -> "Unknown");
```

### Pattern 2: Throw Exception if Absent
```java
User user = optional.orElseThrow(() -> 
    new UserNotFoundException("User not found")
);
```

### Pattern 3: Transform and Provide Default
```java
String upperName = optional
    .map(String::toUpperCase)
    .orElse("UNKNOWN");
```

### Pattern 4: Chain Optional Methods
```java
String result = findUser(id)
    .flatMap(User::getAddress)
    .map(Address::getCity)
    .filter(city -> !city.isEmpty())
    .orElse("No City");
```

### Pattern 5: Optional with Stream
```java
// Convert Optional to Stream (Java 9+)
Stream<String> stream = optional.stream();

// Example: Process only if present
List<String> result = users.stream()
    .map(User::getEmail)  // Returns Optional<String>
    .flatMap(Optional::stream)  // Flatten to Stream<String>
    .collect(Collectors.toList());
```

## Anti-Patterns to Avoid

### ❌ Using get() Without Check
```java
String value = optional.get();  // May throw exception!
```

### ❌ Optional as Method Parameter
```java
// Bad
public void process(Optional<String> value) { }

// Good
public void process(String value) {
    if (value != null) {
        // process
    }
}
```

### ❌ Optional in Collections
```java
// Bad
List<Optional<String>> list = new ArrayList<>();

// Good
List<String> list = new ArrayList<>();  // Can contain null
```

### ❌ Checking isPresent() Then get()
```java
// Bad
if (optional.isPresent()) {
    String value = optional.get();
    System.out.println(value);
}

// Good
optional.ifPresent(System.out::println);
```

## Interview Questions

**Q1: What is the purpose of Optional?**
- To explicitly represent absence of value and avoid `NullPointerException`.

**Q2: What's the difference between orElse and orElseGet?**
- `orElse`: Always evaluates default value
- `orElseGet`: Only evaluates supplier if Optional is empty (lazy)

**Q3: What's the difference between map and flatMap?**
- `map`: Returns `Optional<U>` when mapper returns `U`
- `flatMap`: Returns `Optional<U>` when mapper returns `Optional<U>` (avoids nesting)

**Q4: Can Optional contain null?**
- No, `Optional.of(null)` throws exception. Use `Optional.ofNullable(null)` which returns `Optional.empty()`.

**Q5: Should you use Optional for class fields?**
- No, use Optional only as return type from methods.

**Q6: What's the difference between Optional.empty() and Optional.ofNullable(null)?**
- Both create empty Optional. `empty()` is more explicit.

## Summary

### Creating Optional
- `Optional.of(value)` - Non-null value
- `Optional.ofNullable(value)` - May be null
- `Optional.empty()` - Empty Optional

### Retrieving Values
- `get()` - Get value (may throw exception)
- `orElse(default)` - Get value or default
- `orElseGet(supplier)` - Get value or compute default
- `orElseThrow()` - Get value or throw exception

### Conditional Operations
- `isPresent()` - Check if present
- `isEmpty()` - Check if empty (Java 11+)
- `ifPresent(consumer)` - Execute if present
- `ifPresentOrElse(consumer, runnable)` - Execute if present or else (Java 9+)

### Transformations
- `map(function)` - Transform value
- `flatMap(function)` - Transform and flatten
- `filter(predicate)` - Filter value
- `or(supplier)` - Alternative Optional (Java 9+)

### Best Practices
✅ Use as return type from methods  
✅ Use `orElse/orElseGet` instead of `isPresent/get`  
✅ Chain operations with `map/flatMap`  
✅ Use `filter` for conditional logic  
❌ Don't use for fields  
❌ Don't use in method parameters  
❌ Don't use with collections  

## Further Reading
- Java Optional API Documentation
- "Modern Java in Action" - Optional chapter
- "Effective Java" (3rd Edition) - Item 55: Return optionals judiciously
