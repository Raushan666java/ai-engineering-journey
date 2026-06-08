/**
 * DAY 7: INHERITANCE - COMPLETE GUIDE
 * 
 * What is Inheritance?
 * - Mechanism where one class acquires properties and behaviors of another class
 * - "IS-A" relationship (Dog IS-A Animal)
 * - Code reusability and extensibility
 * - Foundation of polymorphism
 * 
 * Terminology:
 * - Parent Class / Base Class / Super Class: Class being inherited FROM
 * - Child Class / Derived Class / Sub Class: Class that inherits
 * 
 * Topics Covered:
 * 1. What is Inheritance & Why Use It
 * 2. Single Inheritance (extends keyword)
 * 3. Method Inheritance
 * 4. Field Inheritance
 * 5. Constructor in Inheritance
 * 6. super Keyword
 * 7. Method Overriding
 * 8. Access Modifiers in Inheritance
 * 9. IS-A vs HAS-A Relationship
 * 10. Real-World Inheritance Hierarchies
 */

public class InheritanceComplete {
    
    public static void main(String[] args) {
        System.out.println("╔═══════════════════════════════════════════════════════════╗");
        System.out.println("║          DAY 7: INHERITANCE - COMPLETE GUIDE              ║");
        System.out.println("╚═══════════════════════════════════════════════════════════╝\n");
        
        demonstrateBasicInheritance();
        demonstrateMethodInheritance();
        demonstrateFieldInheritance();
        demonstrateConstructorInheritance();
        demonstrateSuperKeyword();
        demonstrateMethodOverriding();
        demonstrateAccessModifiers();
        demonstrateISAvsHASA();
        demonstrateRealWorldHierarchies();
    }
    
    // ========================================
    // SECTION 1: WHAT IS INHERITANCE
    // ========================================
    
    static void demonstrateBasicInheritance() {
        System.out.println("=".repeat(70));
        System.out.println("SECTION 1: BASIC INHERITANCE");
        System.out.println("=".repeat(70));
        
        System.out.println("\n📚 What is Inheritance?");
        System.out.println("Inheritance is a mechanism in Java that allows one class to");
        System.out.println("acquire the properties (fields) and behaviors (methods) of another class.");
        
        System.out.println("\n🎯 Why Use Inheritance?");
        System.out.println("1. Code Reusability - Write once, use in multiple classes");
        System.out.println("2. Method Overriding - Runtime polymorphism");
        System.out.println("3. Extensibility - Easy to add new features");
        System.out.println("4. Organization - Logical class hierarchy");
        
        System.out.println("\n💡 Syntax:");
        System.out.println("class Parent { }");
        System.out.println("class Child extends Parent { }");
        
        System.out.println("\n📝 Example:");
        Animal animal = new Animal();
        animal.eat();
        animal.sleep();
        
        System.out.println();
        Dog dog = new Dog();
        dog.eat();    // Inherited from Animal
        dog.sleep();  // Inherited from Animal
        dog.bark();   // Own method
        
        System.out.println("\n✨ Dog inherits eat() and sleep() from Animal!");
        System.out.println("   Dog IS-A Animal (Inheritance relationship)");
        
        System.out.println();
    }
    
    // ========================================
    // SECTION 2: METHOD INHERITANCE
    // ========================================
    
    static void demonstrateMethodInheritance() {
        System.out.println("=".repeat(70));
        System.out.println("SECTION 2: METHOD INHERITANCE");
        System.out.println("=".repeat(70));
        
        System.out.println("\n📚 Child class inherits all public/protected methods from parent");
        
        System.out.println("\n📝 Example - Vehicle Hierarchy:");
        Car car = new Car();
        car.start();      // Inherited from Vehicle
        car.stop();       // Inherited from Vehicle
        car.openTrunk();  // Own method
        
        System.out.println();
        Motorcycle bike = new Motorcycle();
        bike.start();        // Inherited from Vehicle
        bike.stop();         // Inherited from Vehicle
        bike.doWheelie();    // Own method
        
        System.out.println("\n✨ Both Car and Motorcycle inherit start() and stop() from Vehicle");
        System.out.println();
    }
    
    // ========================================
    // SECTION 3: FIELD INHERITANCE
    // ========================================
    
    static void demonstrateFieldInheritance() {
        System.out.println("=".repeat(70));
        System.out.println("SECTION 3: FIELD INHERITANCE");
        System.out.println("=".repeat(70));
        
        System.out.println("\n📚 Child class inherits all accessible fields from parent");
        
        System.out.println("\n📝 Example:");
        Student student = new Student();
        student.name = "Alice";     // Inherited from Person
        student.age = 20;           // Inherited from Person
        student.studentId = "S001"; // Own field
        student.gpa = 3.8;          // Own field
        
        student.displayInfo();
        
        System.out.println("\n✨ Student has access to Person's fields (name, age)");
        System.out.println("   Plus its own fields (studentId, gpa)");
        System.out.println();
    }
    
    // ========================================
    // SECTION 4: CONSTRUCTOR IN INHERITANCE
    // ========================================
    
    static void demonstrateConstructorInheritance() {
        System.out.println("=".repeat(70));
        System.out.println("SECTION 4: CONSTRUCTOR IN INHERITANCE");
        System.out.println("=".repeat(70));
        
        System.out.println("\n📚 Important Rules:");
        System.out.println("1. Constructors are NOT inherited");
        System.out.println("2. Parent constructor is always called FIRST");
        System.out.println("3. If not explicit, Java calls parent's no-arg constructor");
        System.out.println("4. Use super() to call parent constructor explicitly");
        
        System.out.println("\n📝 Example - Constructor Chain:");
        Employee emp = new Employee("Alice", 25, "E001", 75000);
        
        System.out.println("\nObject created successfully!");
        emp.displayEmployeeInfo();
        
        System.out.println("\n✨ Constructor execution order:");
        System.out.println("   1. Person constructor (parent)");
        System.out.println("   2. Employee constructor (child)");
        System.out.println();
    }
    
    // ========================================
    // SECTION 5: SUPER KEYWORD
    // ========================================
    
    static void demonstrateSuperKeyword() {
        System.out.println("=".repeat(70));
        System.out.println("SECTION 5: SUPER KEYWORD");
        System.out.println("=".repeat(70));
        
        System.out.println("\n📚 Uses of 'super' keyword:");
        System.out.println("1. Call parent class constructor: super(args)");
        System.out.println("2. Access parent class field: super.fieldName");
        System.out.println("3. Call parent class method: super.methodName()");
        
        System.out.println("\n📝 Example 1 - super() for Constructor:");
        Manager manager = new Manager("Bob", 35, "M001", 95000, "IT");
        manager.displayManagerInfo();
        
        System.out.println("\n📝 Example 2 - super.field:");
        SuperFieldChild sfc = new SuperFieldChild();
        sfc.display();
        
        System.out.println("\n📝 Example 3 - super.method():");
        SuperMethodChild smc = new SuperMethodChild();
        smc.display();
        
        System.out.println();
    }
    
    // ========================================
    // SECTION 6: METHOD OVERRIDING
    // ========================================
    
    static void demonstrateMethodOverriding() {
        System.out.println("=".repeat(70));
        System.out.println("SECTION 6: METHOD OVERRIDING");
        System.out.println("=".repeat(70));
        
        System.out.println("\n📚 Method Overriding:");
        System.out.println("- Child class provides specific implementation of parent's method");
        System.out.println("- Same method signature (name, parameters, return type)");
        System.out.println("- @Override annotation (recommended)");
        System.out.println("- Runtime polymorphism foundation");
        
        System.out.println("\n📝 Rules:");
        System.out.println("✓ Same method name");
        System.out.println("✓ Same parameters");
        System.out.println("✓ Same or covariant return type");
        System.out.println("✓ Cannot reduce access level (public → private ✗)");
        System.out.println("✓ Cannot override final methods");
        System.out.println("✓ Cannot override static methods (hiding, not overriding)");
        
        System.out.println("\n📝 Example - Shape Hierarchy:");
        Shape shape1 = new Shape();
        shape1.draw();
        shape1.calculateArea();
        
        System.out.println();
        CircleShape circle = new CircleShape(5);
        circle.draw();           // Overridden
        circle.calculateArea();  // Overridden
        
        System.out.println();
        RectangleShape rectangle = new RectangleShape(4, 6);
        rectangle.draw();           // Overridden
        rectangle.calculateArea();  // Overridden
        
        System.out.println("\n✨ Each shape provides its own implementation of draw() and calculateArea()");
        System.out.println();
    }
    
    // ========================================
    // SECTION 7: ACCESS MODIFIERS IN INHERITANCE
    // ========================================
    
    static void demonstrateAccessModifiers() {
        System.out.println("=".repeat(70));
        System.out.println("SECTION 7: ACCESS MODIFIERS IN INHERITANCE");
        System.out.println("=".repeat(70));
        
        System.out.println("\n📚 Access Levels (Most → Least accessible):");
        System.out.println("┌─────────────┬─────────┬─────────┬──────────┬───────────┐");
        System.out.println("│ Modifier    │ Class   │ Package │ Subclass │ World     │");
        System.out.println("├─────────────┼─────────┼─────────┼──────────┼───────────┤");
        System.out.println("│ public      │   ✓     │    ✓    │    ✓     │     ✓     │");
        System.out.println("│ protected   │   ✓     │    ✓    │    ✓     │     ✗     │");
        System.out.println("│ (default)   │   ✓     │    ✓    │    ✗     │     ✗     │");
        System.out.println("│ private     │   ✓     │    ✗    │    ✗     │     ✗     │");
        System.out.println("└─────────────┴─────────┴─────────┴──────────┴───────────┘");
        
        System.out.println("\n💡 Key Points:");
        System.out.println("- public: Accessible everywhere");
        System.out.println("- protected: Accessible in subclass (even different package)");
        System.out.println("- default: Package-private (same package only)");
        System.out.println("- private: Class-private (NOT inherited)");
        
        System.out.println("\n📝 Example:");
        AccessChild ac = new AccessChild();
        ac.accessMembers();
        
        System.out.println();
    }
    
    // ========================================
    // SECTION 8: IS-A vs HAS-A RELATIONSHIP
    // ========================================
    
    static void demonstrateISAvsHASA() {
        System.out.println("=".repeat(70));
        System.out.println("SECTION 8: IS-A vs HAS-A RELATIONSHIP");
        System.out.println("=".repeat(70));
        
        System.out.println("\n📚 IS-A Relationship (Inheritance):");
        System.out.println("- Dog IS-A Animal");
        System.out.println("- Car IS-A Vehicle");
        System.out.println("- Manager IS-A Employee");
        System.out.println("- Use: extends keyword");
        
        System.out.println("\n📚 HAS-A Relationship (Composition):");
        System.out.println("- Car HAS-A Engine");
        System.out.println("- Person HAS-A Address");
        System.out.println("- School HAS-A Teacher");
        System.out.println("- Use: Instance variable of another class");
        
        System.out.println("\n📝 Example - IS-A:");
        Laptop laptop = new Laptop();
        laptop.powerOn();     // From Computer (IS-A)
        laptop.openLid();     // Own method
        
        System.out.println("\n📝 Example - HAS-A:");
        CarWithEngine car = new CarWithEngine();
        car.start();
        car.displayEngineInfo();
        
        System.out.println("\n💡 When to use which?");
        System.out.println("IS-A (Inheritance): When child is a specialized version of parent");
        System.out.println("HAS-A (Composition): When class contains another class as component");
        System.out.println();
    }
    
    // ========================================
    // SECTION 9: REAL-WORLD HIERARCHIES
    // ========================================
    
    static void demonstrateRealWorldHierarchies() {
        System.out.println("=".repeat(70));
        System.out.println("SECTION 9: REAL-WORLD INHERITANCE HIERARCHIES");
        System.out.println("=".repeat(70));
        
        System.out.println("\n📝 Example 1 - Banking System:");
        SavingsAccount savings = new SavingsAccount("SA001", "Alice", 10000, 4.5);
        savings.deposit(5000);
        savings.calculateInterest();
        savings.displayInfo();
        
        System.out.println();
        CurrentAccount current = new CurrentAccount("CA001", "Bob", 20000, 50000);
        current.withdraw(25000);
        current.displayInfo();
        
        System.out.println("\n📝 Example 2 - E-commerce:");
        PhysicalProduct phone = new PhysicalProduct("P001", "iPhone 15", 999.99, 0.5, 150, 75, 10);
        phone.displayProductInfo();
        phone.calculateShipping();
        
        System.out.println();
        DigitalProduct ebook = new DigitalProduct("D001", "Java Guide", 29.99, 15.5, "PDF");
        ebook.displayProductInfo();
        ebook.download();
        
        System.out.println("\n📝 Example 3 - Game Characters:");
        Warrior warrior = new Warrior("Conan", 100, 50);
        warrior.displayStats();
        warrior.attack();
        warrior.rage();
        
        System.out.println();
        Mage mage = new Mage("Gandalf", 80, 30);
        mage.displayStats();
        mage.attack();
        mage.castSpell();
        
        System.out.println("\n✨ Inheritance creates natural, logical hierarchies!");
        System.out.println();
    }
}

// ============================================
// SECTION 1: BASIC INHERITANCE CLASSES
// ============================================

class Animal {
    void eat() {
        System.out.println("Animal is eating...");
    }
    
    void sleep() {
        System.out.println("Animal is sleeping...");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Dog is barking: Woof!");
    }
}

// ============================================
// SECTION 2: METHOD INHERITANCE CLASSES
// ============================================

class Vehicle {
    void start() {
        System.out.println("Vehicle is starting...");
    }
    
    void stop() {
        System.out.println("Vehicle is stopping...");
    }
}

class Car extends Vehicle {
    void openTrunk() {
        System.out.println("Car trunk is opening...");
    }
}

class Motorcycle extends Vehicle {
    void doWheelie() {
        System.out.println("Motorcycle is doing a wheelie!");
    }
}

// ============================================
// SECTION 3: FIELD INHERITANCE CLASSES
// ============================================

class Person {
    String name;
    int age;
    
    void displayBasicInfo() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}

class Student extends Person {
    String studentId;
    double gpa;
    
    void displayInfo() {
        System.out.println("Student ID: " + studentId);
        System.out.println("Name: " + name);        // Inherited
        System.out.println("Age: " + age);          // Inherited
        System.out.println("GPA: " + gpa);
    }
}

// ============================================
// SECTION 4: CONSTRUCTOR INHERITANCE CLASSES
// ============================================

class Employee extends Person {
    String employeeId;
    double salary;
    
    Employee(String name, int age, String empId, double salary) {
        // Parent constructor called automatically (default)
        // Or call explicitly: super();
        this.name = name;
        this.age = age;
        this.employeeId = empId;
        this.salary = salary;
        System.out.println("Employee constructor called");
    }
    
    void displayEmployeeInfo() {
        System.out.println("ID: " + employeeId + ", Name: " + name + 
                         ", Age: " + age + ", Salary: $" + salary);
    }
}

// ============================================
// SECTION 5: SUPER KEYWORD CLASSES
// ============================================

class Manager extends Employee {
    String department;
    
    Manager(String name, int age, String empId, double salary, String dept) {
        super(name, age, empId, salary);  // Call parent constructor
        this.department = dept;
        System.out.println("Manager constructor called");
    }
    
    void displayManagerInfo() {
        System.out.println("Manager: " + name + " (" + employeeId + ")");
        System.out.println("Department: " + department + ", Salary: $" + salary);
    }
}

// super.field example
class SuperFieldParent {
    String message = "Parent message";
}

class SuperFieldChild extends SuperFieldParent {
    String message = "Child message";
    
    void display() {
        System.out.println("Child message: " + message);
        System.out.println("Parent message: " + super.message);
    }
}

// super.method() example
class SuperMethodParent {
    void display() {
        System.out.println("Parent display method");
    }
}

class SuperMethodChild extends SuperMethodParent {
    @Override
    void display() {
        super.display();  // Call parent method
        System.out.println("Child display method");
    }
}

// ============================================
// SECTION 6: METHOD OVERRIDING CLASSES
// ============================================

class Shape {
    void draw() {
        System.out.println("Drawing a generic shape");
    }
    
    void calculateArea() {
        System.out.println("Area calculation not implemented");
    }
}

class CircleShape extends Shape {
    double radius;
    
    CircleShape(double radius) {
        this.radius = radius;
    }
    
    @Override
    void draw() {
        System.out.println("Drawing a circle with radius: " + radius);
    }
    
    @Override
    void calculateArea() {
        double area = Math.PI * radius * radius;
        System.out.println("Circle area: " + area);
    }
}

class RectangleShape extends Shape {
    double length, width;
    
    RectangleShape(double length, double width) {
        this.length = length;
        this.width = width;
    }
    
    @Override
    void draw() {
        System.out.println("Drawing a rectangle: " + length + " x " + width);
    }
    
    @Override
    void calculateArea() {
        double area = length * width;
        System.out.println("Rectangle area: " + area);
    }
}

// ============================================
// SECTION 7: ACCESS MODIFIERS CLASSES
// ============================================

class AccessParent {
    public String publicField = "Public";
    protected String protectedField = "Protected";
    String defaultField = "Default";
    private String privateField = "Private";
    
    public void publicMethod() { }
    protected void protectedMethod() { }
    void defaultMethod() { }
    private void privateMethod() { }
}

class AccessChild extends AccessParent {
    void accessMembers() {
        System.out.println("Accessible in child class:");
        System.out.println("✓ public: " + publicField);
        System.out.println("✓ protected: " + protectedField);
        System.out.println("✓ default: " + defaultField);
        // System.out.println("✗ private: " + privateField);  // NOT accessible
        
        publicMethod();
        protectedMethod();
        defaultMethod();
        // privateMethod();  // NOT accessible
    }
}

// ============================================
// SECTION 8: IS-A vs HAS-A CLASSES
// ============================================

// IS-A Example
class Computer {
    void powerOn() {
        System.out.println("Computer is powering on...");
    }
}

class Laptop extends Computer {  // Laptop IS-A Computer
    void openLid() {
        System.out.println("Laptop lid opened");
    }
}

// HAS-A Example
class Engine {
    String type;
    int horsepower;
    
    Engine(String type, int hp) {
        this.type = type;
        this.horsepower = hp;
    }
    
    void displayInfo() {
        System.out.println("Engine: " + type + ", " + horsepower + "HP");
    }
}

class CarWithEngine {  // Car HAS-A Engine
    Engine engine;  // Composition
    
    CarWithEngine() {
        engine = new Engine("V6", 300);
    }
    
    void start() {
        System.out.println("Car starting with engine...");
    }
    
    void displayEngineInfo() {
        engine.displayInfo();
    }
}

// ============================================
// SECTION 9: REAL-WORLD HIERARCHIES
// ============================================

// Banking System
class BankAccount {
    protected String accountNumber;
    protected String holderName;
    protected double balance;
    
    BankAccount(String accNum, String name, double balance) {
        this.accountNumber = accNum;
        this.holderName = name;
        this.balance = balance;
    }
    
    void deposit(double amount) {
        balance += amount;
        System.out.println("Deposited: $" + amount);
    }
    
    void withdraw(double amount) {
        if (balance >= amount) {
            balance -= amount;
            System.out.println("Withdrawn: $" + amount);
        } else {
            System.out.println("Insufficient balance!");
        }
    }
    
    void displayInfo() {
        System.out.println("Account: " + accountNumber + ", Holder: " + holderName + 
                         ", Balance: $" + balance);
    }
}

class SavingsAccount extends BankAccount {
    private double interestRate;
    
    SavingsAccount(String accNum, String name, double balance, double rate) {
        super(accNum, name, balance);
        this.interestRate = rate;
    }
    
    void calculateInterest() {
        double interest = balance * interestRate / 100;
        System.out.println("Interest earned: $" + interest);
        balance += interest;
    }
}

class CurrentAccount extends BankAccount {
    private double overdraftLimit;
    
    CurrentAccount(String accNum, String name, double balance, double limit) {
        super(accNum, name, balance);
        this.overdraftLimit = limit;
    }
    
    @Override
    void withdraw(double amount) {
        if (balance + overdraftLimit >= amount) {
            balance -= amount;
            System.out.println("Withdrawn: $" + amount);
        } else {
            System.out.println("Exceeds overdraft limit!");
        }
    }
}

// E-commerce System
class Product {
    protected String productId;
    protected String name;
    protected double price;
    
    Product(String id, String name, double price) {
        this.productId = id;
        this.name = name;
        this.price = price;
    }
    
    void displayProductInfo() {
        System.out.println("Product: " + productId + " - " + name + " ($" + price + ")");
    }
}

class PhysicalProduct extends Product {
    private double weight;
    private double length, width, height;
    
    PhysicalProduct(String id, String name, double price, double weight,
                   double l, double w, double h) {
        super(id, name, price);
        this.weight = weight;
        this.length = l;
        this.width = w;
        this.height = h;
    }
    
    void calculateShipping() {
        double volumetricWeight = (length * width * height) / 5000;
        double shippingCost = Math.max(weight, volumetricWeight) * 10;
        System.out.println("Shipping cost: $" + shippingCost);
    }
}

class DigitalProduct extends Product {
    private double fileSizeMB;
    private String format;
    
    DigitalProduct(String id, String name, double price, double sizeMB, String format) {
        super(id, name, price);
        this.fileSizeMB = sizeMB;
        this.format = format;
    }
    
    void download() {
        System.out.println("Downloading " + name + " (" + fileSizeMB + "MB, " + format + ")...");
    }
}

// Game Characters
class GameCharacter {
    protected String name;
    protected int health;
    protected int attackPower;
    
    GameCharacter(String name, int health, int attack) {
        this.name = name;
        this.health = health;
        this.attackPower = attack;
    }
    
    void displayStats() {
        System.out.println(name + " - Health: " + health + ", Attack: " + attackPower);
    }
    
    void attack() {
        System.out.println(name + " attacks with " + attackPower + " damage!");
    }
}

class Warrior extends GameCharacter {
    Warrior(String name, int health, int attack) {
        super(name, health, attack);
    }
    
    void rage() {
        attackPower *= 2;
        System.out.println(name + " activates RAGE! Attack doubled to " + attackPower);
    }
}

class Mage extends GameCharacter {
    Mage(String name, int health, int attack) {
        super(name, health, attack);
    }
    
    void castSpell() {
        System.out.println(name + " casts powerful spell! Magic damage: " + (attackPower * 3));
    }
}
