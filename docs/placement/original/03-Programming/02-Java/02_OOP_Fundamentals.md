# 🏗️ Object-Oriented Programming - Quick Study Notes

## 🎯 Learning Strategy
- **Visualize**: Draw class diagrams for every concept
- **Real-world Examples**: Connect every concept to real objects
- **Code Practice**: Create 3-4 classes daily

## 1. Classes and Objects

### Class Definition Template
```java
public class Student {
    // Instance variables (attributes)
    private String name;
    private int age;
    private double marks;
    
    // Constructor
    public Student(String name, int age, double marks) {
        this.name = name;
        this.age = age;
        this.marks = marks;
    }
    
    // Methods (behavior)
    public void displayInfo() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
    
    // Getters and Setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
}
```

### Object Creation
```java
// Creating objects
Student s1 = new Student("John", 20, 85.5);
Student s2 = new Student("Alice", 19, 92.0);

// Using objects
s1.displayInfo();
s1.setName("Johnny");
```

### Memory Trick
**Class = Blueprint, Object = House built from blueprint**

## 2. Constructors

### Types of Constructors
```java
public class Car {
    private String brand;
    private String model;
    private int year;
    
    // 1. Default Constructor
    public Car() {
        this.brand = "Unknown";
        this.model = "Unknown";
        this.year = 2023;
    }
    
    // 2. Parameterized Constructor
    public Car(String brand, String model, int year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    
    // 3. Copy Constructor
    public Car(Car other) {
        this.brand = other.brand;
        this.model = other.model;
        this.year = other.year;
    }
}
```

### Constructor Rules
- Same name as class
- No return type
- Called automatically when object is created
- Can be overloaded

## 3. The Four Pillars of OOP

### 1. Encapsulation
```java
public class BankAccount {
    private double balance; // Private - hidden from outside
    
    // Public methods to access private data
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }
    
    public double getBalance() {
        return balance;
    }
    
    // Private helper method
    private boolean isValidAmount(double amount) {
        return amount > 0;
    }
}
```

**Memory Aid**: **"Data Hiding + Methods to Access"**

### 2. Inheritance
```java
// Parent class (Superclass)
public class Animal {
    protected String name;
    protected int age;
    
    // Constructor in parent class
    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public void eat() {
        System.out.println(name + " is eating");
    }
    
    public void sleep() {
        System.out.println(name + " is sleeping");
    }
}

// Child class (Subclass)
public class Dog extends Animal {
    private String breed;
    
    public Dog(String name, int age, String breed) {
        super(name, age);  // Call parent constructor
        this.breed = breed;
    }
    
    // Additional method specific to Dog
    public void bark() {
        System.out.println(name + " is barking");
    }
    
    // Override parent method
    @Override
    public void eat() {
        System.out.println(name + " is eating dog food");
    }
}
```

### Types of Inheritance
```
1. Single Inheritance: Class B extends Class A
2. Multilevel Inheritance: Class C extends Class B extends Class A
3. Hierarchical Inheritance: Class B, Class C both extend Class A
4. Multiple Inheritance: Not supported for classes (only through interfaces)
```

**Memory Aid**: **"IS-A Relationship"** (Dog IS-A Animal)

### 3. Polymorphism
```java
// Method Overloading (Compile-time Polymorphism)
public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
    
    public double add(double a, double b) {
        return a + b;
    }
    
    public int add(int a, int b, int c) {
        return a + b + c;
    }
}

// Method Overriding (Runtime Polymorphism)
Animal animal1 = new Dog("Buddy", 3, "Golden Retriever");
Animal animal2 = new Cat("Whiskers", 2, "Persian");

animal1.eat(); // Calls Dog's eat method
animal2.eat(); // Calls Cat's eat method
```

**Memory Aid**: **"One Interface, Multiple Forms"**

### 4. Abstraction
```java
// Abstract class
public abstract class Shape {
    protected String color;
    
    // Abstract method (must be implemented by subclasses)
    public abstract double calculateArea();
    
    // Concrete method (can be used by subclasses)
    public void displayColor() {
        System.out.println("Color: " + color);
    }
}

// Concrete class
public class Circle extends Shape {
    private double radius;
    
    public Circle(double radius, String color) {
        this.radius = radius;
        this.color = color;
    }
    
    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }
}
```

**Memory Aid**: **"Hide Implementation, Show Interface"**

## 4. Access Modifiers

### Visibility Chart
```java
public class AccessExample {
    public int publicVar;       // Accessible everywhere
    protected int protectedVar; // Same package + subclasses
    int defaultVar;            // Same package only
    private int privateVar;    // Same class only
    
    public void publicMethod() { }
    protected void protectedMethod() { }
    void defaultMethod() { }
    private void privateMethod() { }
}
```

### Memory Trick
**"Public > Protected > Default > Private"** (Decreasing visibility)

## 5. Static Keyword

### Static Variables and Methods
```java
public class Counter {
    private static int count = 0; // Shared by all objects
    private int instanceId;       // Unique to each object
    
    public Counter() {
        count++;                  // Increment shared counter
        instanceId = count;       // Assign unique ID
    }
    
    public static int getCount() {
        return count;             // Static method
    }
    
    public int getInstanceId() {
        return instanceId;        // Instance method
    }
}

// Usage
Counter c1 = new Counter();
Counter c2 = new Counter();
System.out.println(Counter.getCount()); // 2 (accessed via class name)
```

### Static Rules
- Static belongs to class, not object
- Can access static members directly
- Cannot access instance members from static context
- Static methods cannot be overridden

## 6. Final Keyword

### Final Usage
```java
public class FinalExample {
    // Final variable (constant)
    public static final double PI = 3.14159;
    
    // Final method (cannot be overridden)
    public final void displayMessage() {
        System.out.println("This method cannot be overridden");
    }
}

// Final class (cannot be extended)
public final class ImmutableClass {
    private final String value;
    
    public ImmutableClass(String value) {
        this.value = value;
    }
    
    public String getValue() {
        return value;
    }
}
```

### Final Rules
```java
// 1. Final variables
final int MAX_USERS = 100;  // Must be initialized when declared
final int MIN_USERS;        // Or in constructor (blank final variable)

// 2. Final parameters
public void process(final int value) {
    // value++; // Error: cannot modify final parameter
}

// 3. Final references
final StringBuilder sb = new StringBuilder("Hello");
// sb = new StringBuilder("World"); // Error: cannot reassign
sb.append(" World");  // OK: can modify object state
```

## 🧠 Quick Learning Techniques

### 1. Real-World Analogies
- **Class**: Cookie cutter template
- **Object**: Actual cookies made from template
- **Inheritance**: Child inheriting traits from parents
- **Encapsulation**: Medicine capsule (contents hidden)
- **Polymorphism**: Same person acting as student, son, employee

### 2. Code Patterns to Memorize
```java
// Standard class template
public class ClassName {
    private dataType fieldName;
    
    public ClassName(parameters) {
        // constructor
    }
    
    public returnType methodName(parameters) {
        // method body
    }
    
    public dataType getFieldName() { return fieldName; }
    public void setFieldName(dataType fieldName) { this.fieldName = fieldName; }
}
```

### 3. Common Interview Questions
1. **Difference between method overloading and overriding?**
   - Overloading: Same method name, different parameters, in same class
   - Overriding: Same method signature, in parent and child classes

2. **Can we override static methods?** (No)
   - Static methods belong to class, not instance
   - Can be hidden, not overridden

3. **Can we overload constructors?** (Yes)
   - Different parameter lists for different initialization needs

4. **What is the use of super keyword?**
   - Call parent constructor: `super()`
   - Access parent methods: `super.methodName()`
   - Access parent fields: `super.fieldName`

5. **Difference between abstract class and interface?**
   - Abstract class: can have constructors, instance variables, concrete methods
   - Interface: only constants, abstract methods, default methods (Java 8+)
   - Class can extend only one abstract class but implement multiple interfaces

## 📝 Practice Problems (20 minutes daily)

### Easy Level
1. Create Employee class with salary calculation
2. Implement Student class with grade calculation
3. Create Vehicle hierarchy (Car, Bike extending Vehicle)
4. Design BankAccount with deposit/withdraw methods
5. Implement Calculator with method overloading

### Code Templates
```java
// Inheritance template
public class Parent {
    protected dataType field;
    public void commonMethod() { }
}

public class Child extends Parent {
    private dataType childField;
    
    @Override
    public void commonMethod() {
        super.commonMethod(); // Call parent method
        // Additional child-specific code
    }
}

// Encapsulation template
public class EncapsulatedClass {
    private dataType field;
    
    public dataType getField() { return field; }
    public void setField(dataType field) {
        if (isValid(field)) {
            this.field = field;
        }
    }
    
    private boolean isValid(dataType field) {
        // validation logic
        return true;
    }
}
```

## 🎯 Daily Review Checklist
- [ ] Can create classes with proper encapsulation
- [ ] Understand inheritance and method overriding
- [ ] Know difference between static and instance members
- [ ] Can implement polymorphism correctly
- [ ] Understand access modifier visibility
- [ ] Can solve OOP design problems

## ⚡ Speed Learning Tips
1. **Draw Diagrams**: Visualize class relationships
2. **Real Examples**: Map every concept to real-world objects
3. **Code Daily**: Create 2-3 classes every day
4. **Explain Aloud**: Teach concepts to someone else
5. **Pattern Recognition**: Identify common OOP patterns

## 🔗 Next Topic Preview
**Advanced OOP**: Interfaces, Abstract Classes, Exception Handling