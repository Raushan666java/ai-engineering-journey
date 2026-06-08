# Polymorphism in Java

## What is Polymorphism?

**Polymorphism** (Greek: "many forms") is the ability of an object to take many forms. In Java, it allows objects of different types to be accessed through the same interface.

## Types of Polymorphism

### 1. Compile-Time Polymorphism (Static Binding)
- Resolved during compilation
- Also called **method overloading** or **static polymorphism**
- Achieved through method overloading and operator overloading (not in Java)

### 2. Runtime Polymorphism (Dynamic Binding)
- Resolved during runtime
- Also called **method overriding** or **dynamic polymorphism**
- Achieved through method overriding and interfaces

---

## Compile-Time Polymorphism

### Method Overloading
Same method name with different parameters in the same class.

```java
class Calculator {
    int add(int a, int b) {
        return a + b;
    }
    
    double add(double a, double b) {
        return a + b;
    }
    
    int add(int a, int b, int c) {
        return a + b + c;
    }
}
```

### Overloading Rules:
1. **Different parameters**: Number, type, or order must differ
2. **Return type alone**: Cannot overload based on return type only
3. **Access modifiers**: Can have different access modifiers
4. **Exceptions**: Can throw different exceptions

### Constructor Overloading
```java
class Person {
    String name;
    int age;
    
    Person() {
        this.name = "Unknown";
        this.age = 0;
    }
    
    Person(String name) {
        this.name = name;
        this.age = 0;
    }
    
    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
```

---

## Runtime Polymorphism

### Method Overriding
Child class provides specific implementation of parent's method.

```java
class Animal {
    void makeSound() {
        System.out.println("Animal makes sound");
    }
}

class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println("Dog barks");
    }
}

class Cat extends Animal {
    @Override
    void makeSound() {
        System.out.println("Cat meows");
    }
}
```

### Dynamic Method Dispatch
JVM decides which method to call at runtime based on object type, not reference type.

```java
Animal animal1 = new Dog();    // Upcasting
Animal animal2 = new Cat();    // Upcasting

animal1.makeSound(); // Output: Dog barks (runtime decision)
animal2.makeSound(); // Output: Cat meows (runtime decision)
```

---

## Upcasting and Downcasting

### Upcasting (Implicit)
Converting subclass reference to superclass reference. Always safe.

```java
Dog dog = new Dog();
Animal animal = dog; // Upcasting (implicit)
```

**Characteristics:**
- Automatic and safe
- Lose access to subclass-specific methods
- Polymorphic behavior retained

### Downcasting (Explicit)
Converting superclass reference to subclass reference. Requires explicit cast and instanceof check.

```java
Animal animal = new Dog();

// Safe downcasting
if (animal instanceof Dog) {
    Dog dog = (Dog) animal; // Downcasting
    dog.fetch(); // Now can call Dog-specific methods
}
```

**Risks:**
- Can throw `ClassCastException` if types don't match
- Must use `instanceof` to check type before casting

```java
Animal animal = new Cat();
Dog dog = (Dog) animal; // ClassCastException at runtime!
```

---

## The instanceof Operator

Checks if an object is an instance of a specific class or implements an interface.

```java
Animal animal = new Dog();

System.out.println(animal instanceof Dog);    // true
System.out.println(animal instanceof Animal); // true
System.out.println(animal instanceof Object); // true
System.out.println(animal instanceof Cat);    // false
```

### Usage Pattern:
```java
public void processAnimal(Animal animal) {
    if (animal instanceof Dog) {
        Dog dog = (Dog) animal;
        dog.fetch();
    } else if (animal instanceof Cat) {
        Cat cat = (Cat) animal;
        cat.scratch();
    }
}
```

---

## Polymorphic Collections

```java
List<Animal> animals = new ArrayList<>();
animals.add(new Dog());
animals.add(new Cat());
animals.add(new Bird());

for (Animal animal : animals) {
    animal.makeSound(); // Polymorphic behavior
}
```

---

## Benefits of Polymorphism

1. **Flexibility**: Write code that works with parent class but accepts any child class
2. **Extensibility**: Easy to add new classes without modifying existing code
3. **Code Reusability**: One interface, multiple implementations
4. **Loose Coupling**: Reduce dependencies between components
5. **Maintainability**: Changes in child classes don't affect parent interface

---

## Polymorphism vs Method Overloading vs Method Overriding

| Feature | Overloading | Overriding |
|---------|-------------|------------|
| **Binding** | Compile-time | Runtime |
| **Scope** | Same class | Parent-child classes |
| **Parameters** | Must differ | Must be same |
| **Return type** | Can differ | Must be same/covariant |
| **Access** | Can differ | Cannot reduce |
| **Static methods** | Can overload | Cannot override (hidden) |
| **Performance** | Faster | Slightly slower |

---

## Covariant Return Types

Override method can return a subtype of the parent's return type.

```java
class Animal {
    Animal getAnimal() {
        return new Animal();
    }
}

class Dog extends Animal {
    @Override
    Dog getAnimal() { // Covariant return type
        return new Dog();
    }
}
```

---

## Rules for Method Overriding

1. **Same signature**: Name and parameters must match exactly
2. **Access modifier**: Cannot reduce visibility
   - ✓ protected → public
   - ✗ public → protected
3. **Return type**: Must be same or covariant
4. **Exceptions**: 
   - Cannot throw new or broader checked exceptions
   - Can throw unchecked exceptions
5. **final methods**: Cannot be overridden
6. **static methods**: Cannot be overridden (method hiding instead)
7. **private methods**: Not visible to override

---

## Static Method Hiding vs Overriding

```java
class Parent {
    static void method() {
        System.out.println("Parent static");
    }
}

class Child extends Parent {
    static void method() { // Hiding, not overriding
        System.out.println("Child static");
    }
}

Parent p = new Child();
p.method(); // Output: "Parent static" (based on reference type)
```

**Key Difference:**
- **Instance methods**: Overridden (based on object type)
- **Static methods**: Hidden (based on reference type)

---

## Interview Questions

### Q: Difference between compile-time and runtime polymorphism?
**A:** 
- **Compile-time**: Method overloading, resolved during compilation
- **Runtime**: Method overriding, resolved during execution

### Q: Can we override static methods?
**A:** No, static methods are hidden, not overridden. They belong to the class, not the object.

### Q: Can we overload main method?
**A:** Yes, but JVM only calls `public static void main(String[] args)`.

### Q: What is dynamic method dispatch?
**A:** JVM decides which method to call at runtime based on actual object type, enabling runtime polymorphism.

### Q: Why is polymorphism useful?
**A:** Enables writing flexible, extensible code that works with parent class but accepts any child class.

### Q: Can we override private methods?
**A:** No, private methods are not visible to child classes.

### Q: What happens if return types differ in overriding?
**A:** Compilation error, unless the return type is covariant (subtype).

### Q: Can constructor be overridden?
**A:** No, constructors cannot be inherited or overridden. They can be overloaded.

---

## Best Practices

1. **Use @Override annotation**: Catch errors at compile-time
2. **Program to interface**: Use parent type for references
3. **Follow Liskov Substitution Principle**: Child should be usable wherever parent is expected
4. **Avoid excessive downcasting**: Design to avoid need for frequent casts
5. **Use instanceof carefully**: Too many checks indicate poor design
6. **Keep methods overridable**: Don't make methods final unless necessary
7. **Document polymorphic behavior**: Explain how child classes should override

---

## Common Mistakes

1. Confusing method hiding with overriding
2. Not using `@Override` annotation
3. Changing method signature while intending to override
4. Unsafe downcasting without `instanceof` check
5. Overriding equals() without hashCode()
6. Making everything final (preventing extensibility)
7. Not understanding reference type vs object type

---

## Real-World Examples

### Collections Framework
```java
List<String> list1 = new ArrayList<>();  // ArrayList implementation
List<String> list2 = new LinkedList<>(); // LinkedList implementation
// Both work through List interface
```

### JDBC
```java
Connection conn = DriverManager.getConnection(url);
// Returns different Connection implementations based on driver
```

### GUI Components
```java
Component c = new Button();    // Button is a Component
c = new TextField();           // TextField is a Component
c = new Label();               // Label is a Component
```

### Exception Handling
```java
try {
    // code
} catch (Exception e) {  // Catches all exceptions polymorphically
    e.printStackTrace();
}
```

---

## Summary

**Polymorphism** is the cornerstone of OOP, enabling:
- **Flexibility**: One interface, many implementations
- **Extensibility**: Add new types without modifying existing code
- **Maintainability**: Changes localized to specific implementations

**Key Forms:**
- **Compile-time**: Method overloading (static binding)
- **Runtime**: Method overriding (dynamic binding)

**Remember:** Reference type determines what's accessible, object type determines what's executed.
