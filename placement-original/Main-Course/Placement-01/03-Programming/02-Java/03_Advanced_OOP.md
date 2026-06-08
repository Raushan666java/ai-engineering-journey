# 🚀 Advanced OOP - Quick Study Notes

## 🎯 Learning Strategy
- **Compare & Contrast**: Always compare similar concepts
- **Interface First**: Think about what you need, then implement
- **Exception Scenarios**: Think of what can go wrong

## 1. Interfaces

### Interface Basics
```java
// Interface definition
public interface Drawable {
    // All methods are public and abstract by default
    void draw();
    void resize(double factor);
    
    // Default method (Java 8+)
    default void display() {
        System.out.println("Displaying the drawable object");
    }
    
    // Static method (Java 8+)
    static void info() {
        System.out.println("This is a drawable interface");
    }
    
    // Constants (public, static, final by default)
    int MAX_SIZE = 1000;
}

// Implementation
public class Circle implements Drawable {
    private double radius;
    
    @Override
    public void draw() {
        System.out.println("Drawing a circle with radius: " + radius);
    }
    
    @Override
    public void resize(double factor) {
        radius *= factor;
    }
}
```

### Interface Evolution in Java
```java
// Java 8 additions
public interface ModernInterface {
    // Abstract method (as before)
    void abstractMethod();
    
    // Default method - provides implementation in interface
    default void defaultMethod() {
        System.out.println("Default implementation");
    }
    
    // Static method - belongs to interface, not instances
    static void staticMethod() {
        System.out.println("Static method in interface");
    }
}

// Java 9 additions
public interface Java9Interface {
    // Private methods - for code reuse within interface
    private void privateHelper() {
        System.out.println("Private helper method");
    }
    
    // Private static methods
    private static void privateStaticHelper() {
        System.out.println("Private static helper");
    }
    
    // Using private method in default method
    default void usePrivateMethod() {
        privateHelper();
        privateStaticHelper();
    }
}
```

### Multiple Interface Implementation
```java
public interface Flyable {
    void fly();
}

public interface Swimmable {
    void swim();
}

// A class can implement multiple interfaces
public class Duck implements Flyable, Swimmable {
    @Override
    public void fly() {
        System.out.println("Duck is flying");
    }
    
    @Override
    public void swim() {
        System.out.println("Duck is swimming");
    }
}
```

### Memory Trick
**Interface = Contract** (What must be done, not how)

## 2. Abstract Classes

### Abstract Class Definition
```java
public abstract class Animal {
    // Instance variables
    protected String name;
    protected int age;
    
    // Constructor
    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Abstract method (must be implemented by subclasses)
    public abstract void makeSound();
    public abstract void move();
    
    // Concrete method (can be used by subclasses)
    public void eat() {
        System.out.println(name + " is eating");
    }
    
    public void sleep() {
        System.out.println(name + " is sleeping");
    }
}

// Concrete subclass
public class Dog extends Animal {
    private String breed;
    
    public Dog(String name, int age, String breed) {
        super(name, age); // Call parent constructor
        this.breed = breed;
    }
    
    @Override
    public void makeSound() {
        System.out.println(name + " barks: Woof!");
    }
    
    @Override
    public void move() {
        System.out.println(name + " runs on four legs");
    }
}
```

### Abstract Class vs Interface
| Abstract Class | Interface |
|----------------|-----------|
| Can have constructors | No constructors |
| Can have instance variables | Only constants |
| Can have concrete methods | Only abstract methods (before Java 8) |
| Single inheritance | Multiple inheritance |
| Use `extends` | Use `implements` |
| Can have final, non-final, static, non-static variables | Variables are implicitly public, static, final |
| Abstract methods must be declared with abstract keyword | All methods are implicitly abstract (pre-Java 8) |
| Can have access modifiers for methods, properties | All methods are implicitly public |

### When to Use Which?
```
Use Abstract Class when:
- You want to share code among related classes
- You expect subclasses to have many common methods or fields
- You want to declare non-static or non-final fields
- You need access control for methods (private, protected)

Use Interface when:
- You expect unrelated classes to implement your interface
- You want to specify behavior but not implementation
- You want a class to be able to implement multiple behaviors
- You are designing for API stability with default methods
```

## 3. Exception Handling

### Exception Hierarchy
```java
// Throwable
//   ├── Error (System errors - don't catch)
//   └── Exception
//       ├── RuntimeException (Unchecked)
//       │   ├── NullPointerException
//       │   ├── ArrayIndexOutOfBoundsException
//       │   └── IllegalArgumentException
//       └── Checked Exceptions
//           ├── IOException
//           ├── SQLException
//           └── ClassNotFoundException
```

### Try-Catch-Finally
```java
public class ExceptionExample {
    public void readFile(String filename) {
        FileReader file = null;
        try {
            file = new FileReader(filename);
            // Code that might throw exception
            int data = file.read();
            System.out.println("Data: " + data);
            
        } catch (FileNotFoundException e) {
            System.out.println("File not found: " + e.getMessage());
        } catch (IOException e) {
            System.out.println("IO Error: " + e.getMessage());
        } finally {
            // Always executes (cleanup code)
            try {
                if (file != null) {
                    file.close();
                }
            } catch (IOException e) {
                System.out.println("Error closing file");
            }
        }
    }
}
```

### Try-with-Resources (Java 7+)
```java
public void readFileModern(String filename) {
    try (FileReader file = new FileReader(filename);
         BufferedReader reader = new BufferedReader(file)) {
        
        String line = reader.readLine();
        System.out.println(line);
        
    } catch (IOException e) {
        System.out.println("Error: " + e.getMessage());
    }
    // Resources automatically closed
}
```

### Custom Exceptions
```java
// Custom checked exception
public class InsufficientFundsException extends Exception {
    private double amount;
    
    public InsufficientFundsException(double amount) {
        super("Insufficient funds: " + amount);
        this.amount = amount;
    }
    
    // Constructor with cause
    public InsufficientFundsException(double amount, Throwable cause) {
        super("Insufficient funds: " + amount, cause);
        this.amount = amount;
    }
    
    public double getAmount() {
        return amount;
    }
}

// Custom unchecked exception
public class InvalidAccountException extends RuntimeException {
    private String accountId;
    
    public InvalidAccountException(String accountId) {
        super("Invalid account: " + accountId);
        this.accountId = accountId;
    }
    
    public String getAccountId() {
        return accountId;
    }
}

// Usage
public class BankAccount {
    private double balance;
    private String accountId;
    
    public void withdraw(double amount) throws InsufficientFundsException {
        if (accountId == null) {
            throw new InvalidAccountException("null"); // Unchecked
        }
        
        if (amount > balance) {
            throw new InsufficientFundsException(amount - balance); // Checked
        }
        balance -= amount;
    }
}
```

### Exception Handling Best Practices
```java
public class ExceptionBestPractices {
    
    // 1. Catch specific exceptions
    public void goodPractice() {
        try {
            // risky code
        } catch (FileNotFoundException e) {
            // handle file not found
        } catch (IOException e) {
            // handle other IO issues
        }
    }
    
    // 2. Don't catch Exception (too generic)
    public void badPractice() {
        try {
            // risky code
        } catch (Exception e) { // Too generic!
            // handle everything
        }
    }
    
    // 3. Use finally for cleanup
    public void cleanupExample() {
        Connection conn = null;
        try {
            conn = getConnection();
            // use connection
        } catch (SQLException e) {
            // handle error
        } finally {
            if (conn != null) {
                try {
                    conn.close();
                } catch (SQLException e) {
                    // log error
                }
            }
        }
    }
}
```

## 4. Method Overriding Rules

### Override Rules
```java
public class Parent {
    public void method1() { }
    protected void method2() { }
    void method3() { }
    
    public final void finalMethod() { } // Cannot be overridden
    public static void staticMethod() { } // Cannot be overridden
}

public class Child extends Parent {
    @Override
    public void method1() { } // Same or more accessible
    
    @Override
    public void method2() { } // Can increase visibility
    
    // @Override
    // private void method2() { } // ERROR: Cannot reduce visibility
    
    @Override
    protected void method3() { } // Can increase from default to protected
    
    // Cannot override final or static methods
}
```

### Covariant Return Types
```java
public class Animal {
    public Animal reproduce() {
        return new Animal();
    }
}

public class Dog extends Animal {
    @Override
    public Dog reproduce() { // Covariant return type
        return new Dog();
    }
}
```

## 5. Super Keyword

### Super Usage
```java
public class Vehicle {
    protected String brand;
    protected int year;
    
    public Vehicle(String brand, int year) {
        this.brand = brand;
        this.year = year;
    }
    
    public void start() {
        System.out.println("Vehicle is starting");
    }
}

public class Car extends Vehicle {
    private int doors;
    
    public Car(String brand, int year, int doors) {
        super(brand, year); // Call parent constructor
        this.doors = doors;
    }
    
    @Override
    public void start() {
        super.start(); // Call parent method
        System.out.println("Car engine is running");
    }
    
    public void displayInfo() {
        System.out.println("Brand: " + super.brand); // Access parent field
    }
}
```

## 🧠 Quick Learning Techniques

### 1. Memory Aids
- **Interface**: "I CAN DO" (contract of capabilities)
- **Abstract**: "INCOMPLETE" (some methods not implemented)
- **Exception**: "WHAT IF" (what if something goes wrong)

### 2. Decision Tree
```
Need multiple inheritance? → Use Interface
Need some common implementation? → Use Abstract Class
Need to handle errors? → Use Exception Handling
```

### 3. Common Patterns
```java
// Template for interface implementation
public class MyClass implements Interface1, Interface2 {
    @Override
    public void method1() { /* implementation */ }
    
    @Override
    public void method2() { /* implementation */ }
}

// Template for exception handling
public returnType methodName() throws ExceptionType {
    try {
        // risky code
        return result;
    } catch (SpecificException e) {
        // handle specific case
        throw new CustomException("Custom message", e);
    } finally {
        // cleanup
    }
}
```

## 📝 Practice Problems (25 minutes daily)

### Interface Practice
1. Create `Shape` interface with `area()` and `perimeter()` methods
2. Implement for `Rectangle`, `Circle`, `Triangle`
3. Create `Comparable` interface for custom sorting

### Abstract Class Practice
1. Create abstract `Employee` class with concrete and abstract methods
2. Implement `Manager` and `Developer` subclasses
3. Design abstract `Game` class with common game logic

### Exception Handling Practice
1. Create custom exceptions for banking operations
2. Implement file reading with proper exception handling
3. Design validation methods that throw appropriate exceptions

### Code Templates
```java
// Interface template
public interface InterfaceName {
    returnType methodName(parameters);
    
    default returnType defaultMethod() {
        // default implementation
    }
}

// Abstract class template
public abstract class AbstractClassName {
    protected dataType field;
    
    public AbstractClassName(parameters) {
        // constructor
    }
    
    public abstract returnType abstractMethod();
    
    public returnType concreteMethod() {
        // implementation
    }
}

// Exception handling template
public returnType methodName() throws ExceptionType {
    try {
        // code that might throw exception
    } catch (SpecificException e) {
        // handle specific exception
    } catch (GeneralException e) {
        // handle general exception
    } finally {
        // cleanup code
    }
}
```

## 🎯 Daily Review Checklist
- [ ] Can design and implement interfaces correctly
- [ ] Understand when to use abstract classes vs interfaces
- [ ] Can handle exceptions properly with try-catch-finally
- [ ] Know method overriding rules and restrictions
- [ ] Can create custom exceptions
- [ ] Understand super keyword usage

## ⚡ Speed Learning Tips
1. **Real Scenarios**: Think of real-world contracts (interfaces)
2. **Error Thinking**: Always consider what can go wrong
3. **Code Comparison**: Compare abstract class vs interface side by side
4. **Exception Hierarchy**: Draw the exception tree
5. **Override Practice**: Practice method overriding rules daily

## 🔗 Next Topic Preview
**Collections Framework**: ArrayList, HashMap, generics, iterators