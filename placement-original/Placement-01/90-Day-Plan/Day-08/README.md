# Day 8: OOP - Inheritance, Polymorphism & Abstraction

## 🎯 Learning Objectives
By the end of Day 8, you will:
- Master inheritance and the "is-a" relationship
- Understand method overriding and dynamic method dispatch
- Implement polymorphism with interfaces and abstract classes
- Use abstraction to hide implementation details
- Apply SOLID principles in OOP design

## 📚 Topics Covered

### 1. Inheritance Fundamentals
- Single inheritance in Java
- `extends` keyword and superclass/subclass relationship
- Constructor chaining with `super()`
- Method overriding with `@Override`
- Access modifiers in inheritance (protected, private, public)

### 2. Polymorphism
- Compile-time polymorphism (method overloading)
- Runtime polymorphism (method overriding)
- Dynamic method dispatch
- Upcasting and downcasting
- `instanceof` operator

### 3. Abstraction
- Abstract classes with `abstract` keyword
- Abstract methods vs concrete methods
- When to use abstract classes
- Template method pattern

### 4. Interfaces
- Interface declaration and implementation
- Multiple interface implementation
- Default and static methods in interfaces (Java 8+)
- Functional interfaces
- Interface vs abstract class

### 5. Advanced OOP Concepts
- `final` keyword (classes, methods, variables)
- Object class methods (toString, equals, hashCode)
- Composition vs inheritance
- SOLID principles overview

## 🗂️ File Structure
```
Day-08/
├── code/
│   ├── inheritance_basics.java       # Single inheritance, super, method overriding
│   ├── polymorphism_demo.java        # Runtime polymorphism, dynamic dispatch
│   ├── abstraction_demo.java         # Abstract classes and methods
│   ├── interface_demo.java           # Interface implementation, default methods
│   └── practice_problems.java        # 6 OOP practice problems
├── notes/
│   ├── inheritance_notes.md          # Inheritance concepts and examples
│   ├── polymorphism_notes.md         # Polymorphism types and usage
│   ├── abstraction_notes.md          # Abstraction principles
│   └── best_practices.md             # OOP design best practices
├── resources/
│   ├── oop_cheatsheet.md             # Quick reference for OOP concepts
│   ├── solid_principles.md           # SOLID principles explained
│   └── interview_questions.md        # Common OOP interview questions
├── study_plan.md                      # Detailed 9-hour study schedule
├── progress.md                        # Daily progress tracker
└── README.md                          # This file
```

## 💻 Code Examples Overview

### inheritance_basics.java
- Vehicle → Car → SportsCar hierarchy
- Constructor chaining demonstration
- Method overriding with @Override
- Protected member access
- super keyword usage

### polymorphism_demo.java
- Animal → Dog, Cat, Bird hierarchy
- Dynamic method dispatch
- Upcasting and downcasting
- instanceof checks
- Polymorphic arrays

### abstraction_demo.java
- Abstract Shape class
- Circle, Rectangle implementations
- Template method pattern
- Abstract methods for area and perimeter

### interface_demo.java
- Drawable, Movable interfaces
- Multiple interface implementation
- Default methods in interfaces
- Functional interface example

### practice_problems.java
1. Employee hierarchy (Employee → Manager → Director)
2. Banking system (Account → SavingsAccount, CheckingAccount)
3. Shape calculator with polymorphism
4. Payment processor with interfaces
5. Vehicle rental system
6. Animal sounds with abstraction

## 📖 Study Plan
See [study_plan.md](study_plan.md) for the detailed 9-hour schedule:
- **Morning (3 hours)**: Inheritance theory, constructor chaining
- **Afternoon (4 hours)**: Polymorphism, abstraction, interfaces implementation
- **Evening (2 hours)**: Practice problems and interview prep

## 🎓 Key Concepts to Master

### Inheritance
- **Purpose**: Code reuse and establishing "is-a" relationships
- **Syntax**: `class Child extends Parent {}`
- **Constructor chaining**: Use `super()` to call parent constructor
- **Method overriding**: Child class provides specific implementation

### Polymorphism
- **Compile-time**: Method overloading (same name, different parameters)
- **Runtime**: Method overriding (dynamic method dispatch)
- **Benefit**: Write flexible, extensible code

### Abstraction
- **Abstract class**: Cannot be instantiated, may have abstract methods
- **Abstract method**: Declared without implementation
- **Purpose**: Define contract while hiding implementation

### Interfaces
- **Pure abstraction**: All methods are abstract by default (pre-Java 8)
- **Multiple inheritance**: Class can implement multiple interfaces
- **Default methods**: Provide implementation in interface (Java 8+)

## 🔑 Interview Tips
1. **Inheritance vs Composition**: Favor composition over inheritance (flexibility)
2. **Interface vs Abstract Class**: 
   - Use interface for "can-do" relationships
   - Use abstract class for "is-a" relationships with shared code
3. **Method Overriding Rules**: 
   - Same signature as parent method
   - Cannot reduce visibility
   - Covariant return types allowed
4. **SOLID Principles**: Be ready to explain each principle with examples

## ✅ Success Criteria
- [ ] Understand inheritance hierarchy and constructor chaining
- [ ] Implement polymorphism with method overriding
- [ ] Create abstract classes with abstract methods
- [ ] Implement multiple interfaces in a class
- [ ] Solve 6 OOP practice problems
- [ ] Explain the difference between abstract class and interface
- [ ] Apply SOLID principles in code design

## 🔗 Related Topics
- **Previous**: Day 7 - File I/O & Serialization
- **Next**: Day 9 - Collections Framework Deep Dive
- **Related**: Day 15 - Design Patterns

## 📚 Additional Resources
- Oracle Java OOP Tutorial
- Effective Java (Joshua Bloch) - Items on inheritance
- Head First Object-Oriented Analysis & Design
- Clean Code (Robert C. Martin) - Classes chapter

## 🎯 Daily Challenge
Design a library management system using inheritance, polymorphism, and interfaces:
- Create Book, Magazine, DVD classes
- Implement Borrowable interface
- Use abstract LibraryItem class
- Apply polymorphism for different item types

---
**Estimated Time**: 9 hours (3h theory + 4h practice + 2h problems)  
**Difficulty**: ⭐⭐⭐⭐ (Medium-High)  
**Prerequisites**: Days 1-7 (Java basics, classes, methods)
