/**
 * DAY 6: CLASSES AND OBJECTS - COMPLETE GUIDE
 * 
 * Object-Oriented Programming (OOP) Fundamentals
 * 
 * Topics Covered:
 * 1. What are Classes and Objects
 * 2. Class Declaration and Structure
 * 3. Instance Variables (Fields)
 * 4. Methods in Classes
 * 5. Creating Objects
 * 6. Accessing Members
 * 7. Multiple Objects
 * 8. Object References
 * 9. Null References
 * 10. Real-World Examples
 */

public class ClassesAndObjectsComplete {
    
    public static void main(String[] args) {
        System.out.println("╔═══════════════════════════════════════════════════╗");
        System.out.println("║   DAY 6: CLASSES AND OBJECTS - COMPLETE GUIDE     ║");
        System.out.println("╚═══════════════════════════════════════════════════╝\n");
        
        // Run all sections
        section1_WhatAreClassesAndObjects();
        section2_ClassDeclaration();
        section3_InstanceVariables();
        section4_MethodsInClasses();
        section5_CreatingObjects();
        section6_AccessingMembers();
        section7_MultipleObjects();
        section8_ObjectReferences();
        section9_NullReferences();
        section10_RealWorldExamples();
    }
    
    // ============================================
    // SECTION 1: WHAT ARE CLASSES AND OBJECTS
    // ============================================
    static void section1_WhatAreClassesAndObjects() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("SECTION 1: WHAT ARE CLASSES AND OBJECTS");
        System.out.println("=".repeat(70));
        
        System.out.println("\n📖 CLASS:");
        System.out.println("- A blueprint/template for creating objects");
        System.out.println("- Defines properties (variables) and behaviors (methods)");
        System.out.println("- Like a cookie cutter - defines the shape");
        
        System.out.println("\n📖 OBJECT:");
        System.out.println("- An instance of a class");
        System.out.println("- An actual entity created from the blueprint");
        System.out.println("- Like a cookie - created from the cookie cutter");
        
        System.out.println("\n💡 Real-World Analogy:");
        System.out.println("┌─────────────────────────────────────────────────┐");
        System.out.println("│ CLASS: Car Blueprint                            │");
        System.out.println("│   - Properties: color, brand, model, speed      │");
        System.out.println("│   - Behaviors: accelerate(), brake(), honk()    │");
        System.out.println("├─────────────────────────────────────────────────┤");
        System.out.println("│ OBJECTS: Actual Cars                            │");
        System.out.println("│   - car1: Red Toyota Camry, speed=0            │");
        System.out.println("│   - car2: Blue Honda Civic, speed=0            │");
        System.out.println("│   - car3: Black BMW M3, speed=0                │");
        System.out.println("└─────────────────────────────────────────────────┘");
        
        System.out.println("\n🎯 Why Use Classes?");
        System.out.println("✅ Code Organization - Group related data and functions");
        System.out.println("✅ Reusability - Create multiple objects from one class");
        System.out.println("✅ Encapsulation - Bundle data with methods that operate on it");
        System.out.println("✅ Abstraction - Hide complex implementation details");
        System.out.println("✅ Real-world Modeling - Represent real entities in code");
    }
    
    // ============================================
    // SECTION 2: CLASS DECLARATION AND STRUCTURE
    // ============================================
    static void section2_ClassDeclaration() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("SECTION 2: CLASS DECLARATION AND STRUCTURE");
        System.out.println("=".repeat(70));
        
        System.out.println("\n📋 Basic Class Syntax:");
        System.out.println("┌────────────────────────────────────────────┐");
        System.out.println("│ accessModifier class ClassName {           │");
        System.out.println("│     // Instance variables (fields)         │");
        System.out.println("│     dataType variable1;                    │");
        System.out.println("│     dataType variable2;                    │");
        System.out.println("│                                            │");
        System.out.println("│     // Methods (behaviors)                 │");
        System.out.println("│     returnType methodName() {              │");
        System.out.println("│         // method body                     │");
        System.out.println("│     }                                      │");
        System.out.println("│ }                                          │");
        System.out.println("└────────────────────────────────────────────┘");
        
        System.out.println("\n📝 Example: Simple Person Class");
        // Demonstration of Person class
        SimplePerson person = new SimplePerson();
        person.name = "Alice";
        person.age = 25;
        person.displayInfo();
        
        System.out.println("\n📌 Class Naming Conventions:");
        System.out.println("✅ Use PascalCase (capitalize first letter of each word)");
        System.out.println("   Examples: Person, BankAccount, StudentRecord");
        System.out.println("✅ Use nouns (classes represent things)");
        System.out.println("✅ Be descriptive and meaningful");
        System.out.println("❌ Don't use: person, bank_account, student");
    }
    
    // ============================================
    // SECTION 3: INSTANCE VARIABLES (FIELDS)
    // ============================================
    static void section3_InstanceVariables() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("SECTION 3: INSTANCE VARIABLES (FIELDS)");
        System.out.println("=".repeat(70));
        
        System.out.println("\n📖 Instance Variables:");
        System.out.println("- Variables declared inside a class but outside methods");
        System.out.println("- Each object has its own copy of instance variables");
        System.out.println("- Define the state/properties of an object");
        
        System.out.println("\n💡 Example: Book Class with Instance Variables");
        Book book1 = new Book();
        book1.title = "Clean Code";
        book1.author = "Robert C. Martin";
        book1.pages = 464;
        book1.price = 29.99;
        
        Book book2 = new Book();
        book2.title = "Effective Java";
        book2.author = "Joshua Bloch";
        book2.pages = 416;
        book2.price = 39.99;
        
        System.out.println("\nBook 1:");
        book1.displayInfo();
        
        System.out.println("\nBook 2:");
        book2.displayInfo();
        
        System.out.println("\n🎯 Key Points:");
        System.out.println("✅ Each object has separate copies of instance variables");
        System.out.println("✅ Changing book1.title does NOT affect book2.title");
        System.out.println("✅ Instance variables have default values if not initialized");
        System.out.println("   - Numbers: 0");
        System.out.println("   - Boolean: false");
        System.out.println("   - Objects: null");
    }
    
    // ============================================
    // SECTION 4: METHODS IN CLASSES
    // ============================================
    static void section4_MethodsInClasses() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("SECTION 4: METHODS IN CLASSES");
        System.out.println("=".repeat(70));
        
        System.out.println("\n📖 Instance Methods:");
        System.out.println("- Functions defined inside a class");
        System.out.println("- Operate on instance variables");
        System.out.println("- Define the behavior of objects");
        
        System.out.println("\n💡 Example: Calculator Class");
        Calculator calc = new Calculator();
        calc.value = 10;
        
        System.out.println("Initial value: " + calc.value);
        calc.add(5);
        System.out.println("After add(5): " + calc.value);
        calc.multiply(3);
        System.out.println("After multiply(3): " + calc.value);
        calc.reset();
        System.out.println("After reset(): " + calc.value);
        
        System.out.println("\n📝 Types of Methods:");
        System.out.println("1. Accessor (Getter) - Return value of instance variable");
        System.out.println("2. Mutator (Setter) - Modify instance variable");
        System.out.println("3. Utility - Perform operations using instance variables");
        System.out.println("4. Display - Show object state");
    }
    
    // ============================================
    // SECTION 5: CREATING OBJECTS
    // ============================================
    static void section5_CreatingObjects() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("SECTION 5: CREATING OBJECTS");
        System.out.println("=".repeat(70));
        
        System.out.println("\n📋 Object Creation Syntax:");
        System.out.println("ClassName objectName = new ClassName();");
        System.out.println("   │          │          │       │");
        System.out.println("   │          │          │       └─ Constructor call");
        System.out.println("   │          │          └─ 'new' keyword (allocate memory)");
        System.out.println("   │          └─ Object reference variable");
        System.out.println("   └─ Class type");
        
        System.out.println("\n💡 Three Steps of Object Creation:");
        
        System.out.println("\n1. Declaration:");
        System.out.println("   Student student;  // Creates reference, no object yet");
        
        System.out.println("\n2. Instantiation:");
        System.out.println("   new Student();  // Creates object in memory");
        
        System.out.println("\n3. Initialization:");
        System.out.println("   student = new Student();  // Assign object to reference");
        
        System.out.println("\n✅ Combined (Most Common):");
        System.out.println("   Student student = new Student();");
        
        System.out.println("\n📝 Example: Creating Multiple Students");
        Student s1 = new Student();
        s1.name = "Alice";
        s1.rollNumber = 101;
        s1.grade = 'A';
        
        Student s2 = new Student();
        s2.name = "Bob";
        s2.rollNumber = 102;
        s2.grade = 'B';
        
        Student s3 = new Student();
        s3.name = "Charlie";
        s3.rollNumber = 103;
        s3.grade = 'A';
        
        System.out.println("\nStudent 1: " + s1.name + ", Roll: " + s1.rollNumber + ", Grade: " + s1.grade);
        System.out.println("Student 2: " + s2.name + ", Roll: " + s2.rollNumber + ", Grade: " + s2.grade);
        System.out.println("Student 3: " + s3.name + ", Roll: " + s3.rollNumber + ", Grade: " + s3.grade);
    }
    
    // ============================================
    // SECTION 6: ACCESSING MEMBERS
    // ============================================
    static void section6_AccessingMembers() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("SECTION 6: ACCESSING MEMBERS");
        System.out.println("=".repeat(70));
        
        System.out.println("\n📋 Dot Operator (.):");
        System.out.println("Used to access instance variables and methods");
        System.out.println("Syntax: objectName.memberName");
        
        System.out.println("\n💡 Example: Rectangle Class");
        Rectangle rect = new Rectangle();
        
        // Accessing and setting instance variables
        rect.length = 10.5;
        rect.width = 5.5;
        
        // Accessing methods
        double area = rect.calculateArea();
        double perimeter = rect.calculatePerimeter();
        
        System.out.println("Rectangle Dimensions: " + rect.length + " x " + rect.width);
        System.out.println("Area: " + area);
        System.out.println("Perimeter: " + perimeter);
        
        // Method chaining possible if methods return 'this'
        System.out.println("\n📝 Different Ways to Access:");
        Rectangle r = new Rectangle();
        r.length = 8;           // Direct field access
        r.width = 4;
        r.displayInfo();        // Method call
        
        System.out.println("\n⚠️ Access Rules:");
        System.out.println("✅ Can access public members from anywhere");
        System.out.println("❌ Cannot access private members from outside class");
        System.out.println("✅ Can access package-private from same package");
    }
    
    // ============================================
    // SECTION 7: MULTIPLE OBJECTS
    // ============================================
    static void section7_MultipleObjects() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("SECTION 7: MULTIPLE OBJECTS");
        System.out.println("=".repeat(70));
        
        System.out.println("\n📖 Independence of Objects:");
        System.out.println("- Each object has its own copy of instance variables");
        System.out.println("- Modifying one object doesn't affect others");
        
        System.out.println("\n💡 Example: Multiple Bank Accounts");
        BankAccount account1 = new BankAccount();
        account1.accountNumber = "ACC001";
        account1.holderName = "John Doe";
        account1.balance = 1000.0;
        
        BankAccount account2 = new BankAccount();
        account2.accountNumber = "ACC002";
        account2.holderName = "Jane Smith";
        account2.balance = 5000.0;
        
        BankAccount account3 = new BankAccount();
        account3.accountNumber = "ACC003";
        account3.holderName = "Bob Johnson";
        account3.balance = 2500.0;
        
        System.out.println("\n📊 All Accounts:");
        account1.displayInfo();
        account2.displayInfo();
        account3.displayInfo();
        
        System.out.println("\n💰 Performing Transactions:");
        account1.deposit(500);
        account2.withdraw(1000);
        account3.deposit(1500);
        
        System.out.println("\n📊 After Transactions:");
        account1.displayInfo();
        account2.displayInfo();
        account3.displayInfo();
        
        System.out.println("\n🎯 Key Observation:");
        System.out.println("✅ account1.deposit(500) only affects account1");
        System.out.println("✅ account2 and account3 remain unchanged");
        System.out.println("✅ Each object maintains its own state");
    }
    
    // ============================================
    // SECTION 8: OBJECT REFERENCES
    // ============================================
    static void section8_ObjectReferences() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("SECTION 8: OBJECT REFERENCES");
        System.out.println("=".repeat(70));
        
        System.out.println("\n📖 Understanding References:");
        System.out.println("- Variables don't store objects directly");
        System.out.println("- They store references (memory addresses) to objects");
        System.out.println("- Like a pointer to where the object lives in memory");
        
        System.out.println("\n💡 Example: Reference Assignment");
        Point p1 = new Point();
        p1.x = 10;
        p1.y = 20;
        
        System.out.println("p1: (" + p1.x + ", " + p1.y + ")");
        
        // p2 references the same object as p1
        Point p2 = p1;
        System.out.println("p2: (" + p2.x + ", " + p2.y + ")");
        
        // Modifying through p2 affects p1 (same object!)
        p2.x = 50;
        p2.y = 60;
        
        System.out.println("\nAfter modifying p2:");
        System.out.println("p1: (" + p1.x + ", " + p1.y + ")");  // Changed!
        System.out.println("p2: (" + p2.x + ", " + p2.y + ")");
        
        System.out.println("\n🎯 Memory Diagram:");
        System.out.println("┌──────────┐       ┌──────────────┐");
        System.out.println("│ p1 (ref) │──────>│ Point Object │");
        System.out.println("└──────────┘   │   │  x: 50       │");
        System.out.println("┌──────────┐   │   │  y: 60       │");
        System.out.println("│ p2 (ref) │───┘   └──────────────┘");
        System.out.println("└──────────┘");
        System.out.println("Both p1 and p2 point to the SAME object!");
        
        System.out.println("\n💡 Creating Separate Objects:");
        Point p3 = new Point();
        p3.x = 10;
        p3.y = 20;
        
        Point p4 = new Point();
        p4.x = 10;
        p4.y = 20;
        
        p4.x = 100;
        
        System.out.println("p3: (" + p3.x + ", " + p3.y + ")");  // Unchanged
        System.out.println("p4: (" + p4.x + ", " + p4.y + ")");  // Changed
        
        System.out.println("\n⚠️ Important:");
        System.out.println("✅ Assignment (=) copies the reference, not the object");
        System.out.println("✅ To create a copy, use 'new' to create a new object");
    }
    
    // ============================================
    // SECTION 9: NULL REFERENCES
    // ============================================
    static void section9_NullReferences() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("SECTION 9: NULL REFERENCES");
        System.out.println("=".repeat(70));
        
        System.out.println("\n📖 What is null?");
        System.out.println("- Special value indicating 'no object'");
        System.out.println("- Default value for object reference variables");
        System.out.println("- Like an empty box - declared but not pointing to anything");
        
        System.out.println("\n💡 Example: Null Reference");
        Car car1 = null;  // Declared but no object created
        System.out.println("car1: " + car1);
        
        // This would cause NullPointerException:
        // car1.brand = "Toyota";  // ❌ ERROR!
        
        System.out.println("\n✅ Safe Usage:");
        if (car1 == null) {
            System.out.println("car1 is null, creating new Car object");
            car1 = new Car();
        }
        
        car1.brand = "Toyota";
        car1.model = "Camry";
        car1.displayInfo();
        
        System.out.println("\n📝 Null Checking Pattern:");
        Car car2 = null;
        
        // Always check before using
        if (car2 != null) {
            car2.displayInfo();
        } else {
            System.out.println("car2 is null!");
        }
        
        System.out.println("\n⚠️ Common NullPointerException Scenarios:");
        System.out.println("❌ Calling method on null: null.method()");
        System.out.println("❌ Accessing field on null: null.field");
        System.out.println("❌ Array element is null: array[0].method()");
        
        System.out.println("\n✅ Best Practices:");
        System.out.println("✅ Always initialize objects before use");
        System.out.println("✅ Check for null before accessing members");
        System.out.println("✅ Use meaningful defaults instead of null when possible");
    }
    
    // ============================================
    // SECTION 10: REAL-WORLD EXAMPLES
    // ============================================
    static void section10_RealWorldExamples() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("SECTION 10: REAL-WORLD EXAMPLES");
        System.out.println("=".repeat(70));
        
        System.out.println("\n💡 Example 1: E-Commerce Product");
        Product product1 = new Product();
        product1.id = "PRD001";
        product1.name = "Laptop";
        product1.price = 999.99;
        product1.stock = 50;
        
        product1.displayInfo();
        product1.purchase(2);
        product1.displayInfo();
        
        System.out.println("\n💡 Example 2: Employee Management");
        Employee emp1 = new Employee();
        emp1.id = "EMP001";
        emp1.name = "Alice Johnson";
        emp1.department = "Engineering";
        emp1.salary = 75000;
        
        Employee emp2 = new Employee();
        emp2.id = "EMP002";
        emp2.name = "Bob Smith";
        emp2.department = "Marketing";
        emp2.salary = 65000;
        
        emp1.displayInfo();
        emp2.displayInfo();
        
        emp1.giveRaise(10);  // 10% raise
        System.out.println("\nAfter raise:");
        emp1.displayInfo();
        
        System.out.println("\n💡 Example 3: Library System");
        LibraryBook book1 = new LibraryBook();
        book1.isbn = "978-0134685991";
        book1.title = "Effective Java";
        book1.author = "Joshua Bloch";
        book1.isAvailable = true;
        
        book1.displayInfo();
        book1.borrowBook();
        book1.displayInfo();
        book1.returnBook();
        book1.displayInfo();
        
        System.out.println("\n🎯 Real-World Benefits:");
        System.out.println("✅ Models real entities (Products, Employees, Books)");
        System.out.println("✅ Encapsulates related data and behavior");
        System.out.println("✅ Easy to maintain and extend");
        System.out.println("✅ Reusable across application");
        System.out.println("✅ Mirrors business logic");
    }
}

// ============================================
// HELPER CLASSES
// ============================================

class SimplePerson {
    String name;
    int age;
    
    void displayInfo() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}

class Book {
    String title;
    String author;
    int pages;
    double price;
    
    void displayInfo() {
        System.out.println("Title: " + title);
        System.out.println("Author: " + author);
        System.out.println("Pages: " + pages);
        System.out.println("Price: $" + price);
    }
}

class Calculator {
    int value;
    
    void add(int n) {
        value += n;
    }
    
    void multiply(int n) {
        value *= n;
    }
    
    void reset() {
        value = 0;
    }
}

class Student {
    String name;
    int rollNumber;
    char grade;
}

class Rectangle {
    double length;
    double width;
    
    double calculateArea() {
        return length * width;
    }
    
    double calculatePerimeter() {
        return 2 * (length + width);
    }
    
    void displayInfo() {
        System.out.println("Rectangle: " + length + " x " + width);
        System.out.println("Area: " + calculateArea());
        System.out.println("Perimeter: " + calculatePerimeter());
    }
}

class BankAccount {
    String accountNumber;
    String holderName;
    double balance;
    
    void deposit(double amount) {
        balance += amount;
        System.out.println("Deposited $" + amount + " to " + accountNumber);
    }
    
    void withdraw(double amount) {
        if (balance >= amount) {
            balance -= amount;
            System.out.println("Withdrew $" + amount + " from " + accountNumber);
        } else {
            System.out.println("Insufficient balance!");
        }
    }
    
    void displayInfo() {
        System.out.println("Account: " + accountNumber + 
                         ", Holder: " + holderName + 
                         ", Balance: $" + balance);
    }
}

class Point {
    int x;
    int y;
}

class Car {
    String brand;
    String model;
    int year;
    
    void displayInfo() {
        System.out.println("Car: " + brand + " " + model + " (" + year + ")");
    }
}

class Product {
    String id;
    String name;
    double price;
    int stock;
    
    void displayInfo() {
        System.out.println("Product ID: " + id);
        System.out.println("Name: " + name);
        System.out.println("Price: $" + price);
        System.out.println("Stock: " + stock);
    }
    
    void purchase(int quantity) {
        if (stock >= quantity) {
            stock -= quantity;
            System.out.println("Purchased " + quantity + " units");
        } else {
            System.out.println("Insufficient stock!");
        }
    }
}

class Employee {
    String id;
    String name;
    String department;
    double salary;
    
    void displayInfo() {
        System.out.println("ID: " + id + ", Name: " + name + 
                         ", Dept: " + department + ", Salary: $" + salary);
    }
    
    void giveRaise(double percentage) {
        salary += salary * (percentage / 100);
        System.out.println(name + " received " + percentage + "% raise");
    }
}

class LibraryBook {
    String isbn;
    String title;
    String author;
    boolean isAvailable;
    
    void displayInfo() {
        System.out.println("ISBN: " + isbn + ", Title: " + title + 
                         ", Available: " + isAvailable);
    }
    
    void borrowBook() {
        if (isAvailable) {
            isAvailable = false;
            System.out.println("Book borrowed: " + title);
        } else {
            System.out.println("Book not available");
        }
    }
    
    void returnBook() {
        isAvailable = true;
        System.out.println("Book returned: " + title);
    }
}
