# Inheritance Concepts

## What is Inheritance?

Inheritance is a fundamental OOP concept where a new class (child/subclass) is created from an existing class (parent/superclass). The child class inherits all accessible members (fields and methods) from the parent class.

## Key Benefits
- **Code Reusability**: Avoid writing duplicate code
- **Extensibility**: Easily add new features to existing classes
- **Polymorphism**: Enables runtime polymorphism through method overriding
- **Maintenance**: Changes in parent class automatically reflect in child classes

## Syntax
```java
class Parent {
    // Parent class members
}

class Child extends Parent {
    // Child class members + inherited members
}
```

## Constructor Chaining
- Constructors are not inherited
- Child constructor must call parent constructor (explicitly or implicitly)
- Use `super()` to call parent constructor
- `super()` must be the first statement in child constructor

```java
class Parent {
    Parent(String name) {
        System.out.println("Parent: " + name);
    }
}

class Child extends Parent {
    Child(String name) {
        super(name); // Call parent constructor
        System.out.println("Child: " + name);
    }
}
```

## Method Overriding
- Child class provides specific implementation of parent's method
- Same method signature (name, parameters, return type)
- Use `@Override` annotation (recommended)
- Cannot override private, static, or final methods

### Overriding Rules:
1. **Same signature**: Method name and parameters must match
2. **Access modifier**: Cannot reduce visibility (public → private not allowed)
3. **Return type**: Must be same or covariant (subtype)
4. **Exceptions**: Cannot throw broader checked exceptions

```java
class Parent {
    public void display() {
        System.out.println("Parent display");
    }
}

class Child extends Parent {
    @Override
    public void display() {
        System.out.println("Child display");
    }
}
```

## Access Modifiers in Inheritance

| Modifier | Same Class | Same Package | Subclass (Different Package) | Other Classes |
|----------|-----------|--------------|------------------------------|---------------|
| private | ✓ | ✗ | ✗ | ✗ |
| default | ✓ | ✓ | ✗ | ✗ |
| protected | ✓ | ✓ | ✓ | ✗ |
| public | ✓ | ✓ | ✓ | ✓ |

## The `super` Keyword

### Usage:
1. **Call parent constructor**: `super(args)`
2. **Access parent method**: `super.methodName()`
3. **Access parent field**: `super.fieldName`

```java
class Child extends Parent {
    @Override
    public void display() {
        super.display(); // Call parent's display
        System.out.println("Additional child logic");
    }
}
```

## Types of Inheritance in Java

### 1. Single Inheritance ✓
```java
class A { }
class B extends A { }
```

### 2. Multilevel Inheritance ✓
```java
class A { }
class B extends A { }
class C extends B { }
```

### 3. Hierarchical Inheritance ✓
```java
class A { }
class B extends A { }
class C extends A { }
```

### 4. Multiple Inheritance ✗ (Not supported with classes)
```java
// class C extends A, B { } // ERROR!
// Use interfaces instead
```

### 5. Hybrid Inheritance ✗ (Not supported with classes)
```java
// Combination of multiple types
// Not allowed in Java (diamond problem)
```

## Object Class
- Every class implicitly extends `Object` if no parent specified
- Object class methods:
  - `toString()`: String representation
  - `equals(Object obj)`: Object comparison
  - `hashCode()`: Hash code for object
  - `clone()`: Create copy
  - `finalize()`: Called before garbage collection

## Covariant Return Types
- Override method can return subtype of parent's return type
- Introduced in Java 5

```java
class Animal {
    Animal reproduce() {
        return new Animal();
    }
}

class Dog extends Animal {
    @Override
    Dog reproduce() { // Covariant return type
        return new Dog();
    }
}
```

## Final Keyword in Inheritance

### Final Class
```java
final class FinalClass {
    // Cannot be inherited
}
```

### Final Method
```java
class Parent {
    final void method() {
        // Cannot be overridden
    }
}
```

### Final Variable
```java
class Example {
    final int CONSTANT = 100; // Cannot be changed
}
```

## Interview Questions

### Q: Can constructors be inherited?
**A:** No, constructors are not inherited. Child class must define its own constructor and can call parent constructor using `super()`.

### Q: Can private members be inherited?
**A:** Private members are not accessible in child class, but they are part of child object (exist in memory).

### Q: Can static methods be overridden?
**A:** No, static methods are hidden, not overridden. They are bound at compile-time.

### Q: What is the diamond problem?
**A:** Occurs when a class inherits from two classes that have the same method. Java avoids this by not allowing multiple inheritance with classes (uses interfaces instead).

### Q: Difference between method overloading and overriding?
**A:** 
- **Overloading**: Same name, different parameters (compile-time)
- **Overriding**: Same signature, different implementation (runtime)

### Q: Can you reduce access when overriding?
**A:** No, you can only increase or maintain visibility. (public → protected not allowed)

### Q: What happens if parent and child have same variable?
**A:** Variable hiding occurs (not overriding). Variable is accessed based on reference type, not object type.

## Best Practices

1. **Favor composition over inheritance**: Use "has-a" instead of "is-a" when possible
2. **Use @Override**: Always use annotation for clarity and compile-time checking
3. **Keep inheritance hierarchies shallow**: Avoid deep inheritance trees
4. **Design for inheritance or prohibit it**: Document how to extend or make class final
5. **Don't override equals without hashCode**: Always override both together
6. **Use super wisely**: Call parent methods when you need to extend behavior

## Common Mistakes

1. Forgetting to call `super()` in constructor
2. Reducing access modifier when overriding
3. Confusing method hiding (static) with overriding
4. Not using `@Override` annotation
5. Creating deep inheritance hierarchies
6. Violating Liskov Substitution Principle

## Real-World Examples

```java
// GUI Components
class Component { }
class Container extends Component { }
class Panel extends Container { }

// Exception Hierarchy
class Throwable { }
class Exception extends Throwable { }
class RuntimeException extends Exception { }
class NullPointerException extends RuntimeException { }

// Collections
class AbstractCollection { }
class AbstractList extends AbstractCollection { }
class ArrayList extends AbstractList { }
```
