/**
 * DAY 6: CONSTRUCTORS - COMPLETE GUIDE
 * 
 * Constructors are special methods used to initialize objects
 * 
 * Topics Covered:
 * 1. What are Constructors
 * 2. Default Constructor
 * 3. Parameterized Constructor
 * 4. Constructor Overloading
 * 5. 'this' Keyword
 * 6. Constructor Chaining
 * 7. Copy Constructor
 * 8. Constructor vs Methods
 * 9. Common Patterns
 * 10. Best Practices
 */

public class ConstructorsComplete {
    
    public static void main(String[] args) {
        System.out.println("╔═══════════════════════════════════════════════════╗");
        System.out.println("║   DAY 6: CONSTRUCTORS - COMPLETE GUIDE            ║");
        System.out.println("╚═══════════════════════════════════════════════════╝\n");
        
        // Run all sections
        section1_WhatAreConstructors();
        section2_DefaultConstructor();
        section3_ParameterizedConstructor();
        section4_ConstructorOverloading();
        section5_ThisKeyword();
        section6_ConstructorChaining();
        section7_CopyConstructor();
        section8_ConstructorVsMethods();
        section9_CommonPatterns();
        section10_BestPractices();
    }
    
    // ============================================
    // SECTION 1: WHAT ARE CONSTRUCTORS
    // ============================================
    static void section1_WhatAreConstructors() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("SECTION 1: WHAT ARE CONSTRUCTORS");
        System.out.println("=".repeat(70));
        
        System.out.println("\n📖 CONSTRUCTOR:");
        System.out.println("- Special method called when object is created");
        System.out.println("- Used to initialize object's state");
        System.out.println("- Same name as class");
        System.out.println("- No return type (not even void)");
        System.out.println("- Automatically called with 'new' keyword");
        
        System.out.println("\n📋 Constructor Syntax:");
        System.out.println("┌────────────────────────────────────────┐");
        System.out.println("│ class ClassName {                      │");
        System.out.println("│     // Constructor                     │");
        System.out.println("│     ClassName() {                      │");
        System.out.println("│         // initialization code         │");
        System.out.println("│     }                                  │");
        System.out.println("│ }                                      │");
        System.out.println("└────────────────────────────────────────┘");
        
        System.out.println("\n💡 Why Use Constructors?");
        System.out.println("✅ Ensure objects are properly initialized");
        System.out.println("✅ Set initial values for instance variables");
        System.out.println("✅ Perform setup operations");
        System.out.println("✅ Validate data before object creation");
        System.out.println("✅ Make code cleaner and more maintainable");
        
        System.out.println("\n🎯 Key Characteristics:");
        System.out.println("1. Name must match class name exactly");
        System.out.println("2. No return type (not even void)");
        System.out.println("3. Can be overloaded (multiple constructors)");
        System.out.println("4. Cannot be inherited");
        System.out.println("5. Cannot be abstract, static, or final");
    }
    
    // ============================================
    // SECTION 2: DEFAULT CONSTRUCTOR
    // ============================================
    static void section2_DefaultConstructor() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("SECTION 2: DEFAULT CONSTRUCTOR");
        System.out.println("=".repeat(70));
        
        System.out.println("\n📖 Default Constructor:");
        System.out.println("- Constructor with no parameters");
        System.out.println("- If you don't write any constructor, Java provides one");
        System.out.println("- Java's default constructor initializes fields to default values");
        
        System.out.println("\n💡 Example: Box with Default Constructor");
        Box1 box1 = new Box1();  // Calls default constructor
        box1.displayInfo();
        
        System.out.println("\n📝 Default Values:");
        System.out.println("int, double, etc. → 0");
        System.out.println("boolean → false");
        System.out.println("Object references → null");
        
        System.out.println("\n✅ Custom Default Constructor:");
        Box2 box2 = new Box2();  // Calls our custom default constructor
        box2.displayInfo();
        
        System.out.println("\n⚠️ Important:");
        System.out.println("✅ If you write ANY constructor, Java won't provide default");
        System.out.println("✅ You must explicitly write no-arg constructor if needed");
    }
    
    // ============================================
    // SECTION 3: PARAMETERIZED CONSTRUCTOR
    // ============================================
    static void section3_ParameterizedConstructor() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("SECTION 3: PARAMETERIZED CONSTRUCTOR");
        System.out.println("=".repeat(70));
        
        System.out.println("\n📖 Parameterized Constructor:");
        System.out.println("- Constructor that accepts parameters");
        System.out.println("- Used to initialize object with specific values");
        System.out.println("- More flexible than default constructor");
        
        System.out.println("\n💡 Example: Person with Parameterized Constructor");
        Person p1 = new Person("Alice", 25);
        Person p2 = new Person("Bob", 30);
        Person p3 = new Person("Charlie", 35);
        
        p1.displayInfo();
        p2.displayInfo();
        p3.displayInfo();
        
        System.out.println("\n📝 Benefits:");
        System.out.println("✅ Initialize object in one line");
        System.out.println("✅ No need to set each field separately");
        System.out.println("✅ Ensures required data is provided");
        System.out.println("✅ Cleaner and more readable code");
        
        System.out.println("\n💡 Example: BankAccount");
        BankAccount acc1 = new BankAccount("ACC001", "John Doe", 1000.0);
        BankAccount acc2 = new BankAccount("ACC002", "Jane Smith", 5000.0);
        
        acc1.displayInfo();
        acc2.displayInfo();
    }
    
    // ============================================
    // SECTION 4: CONSTRUCTOR OVERLOADING
    // ============================================
    static void section4_ConstructorOverloading() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("SECTION 4: CONSTRUCTOR OVERLOADING");
        System.out.println("=".repeat(70));
        
        System.out.println("\n📖 Constructor Overloading:");
        System.out.println("- Multiple constructors with different parameters");
        System.out.println("- Same name but different parameter lists");
        System.out.println("- Provides flexibility in object creation");
        
        System.out.println("\n💡 Example: Book with Multiple Constructors");
        
        // Using different constructors
        Book b1 = new Book();  // Default
        Book b2 = new Book("Clean Code");  // Title only
        Book b3 = new Book("Effective Java", "Joshua Bloch");  // Title + Author
        Book b4 = new Book("Design Patterns", "Gang of Four", 395);  // All fields
        
        System.out.println("\nBook 1 (default):");
        b1.displayInfo();
        
        System.out.println("\nBook 2 (title only):");
        b2.displayInfo();
        
        System.out.println("\nBook 3 (title + author):");
        b3.displayInfo();
        
        System.out.println("\nBook 4 (all fields):");
        b4.displayInfo();
        
        System.out.println("\n🎯 Benefits:");
        System.out.println("✅ Flexibility - different ways to create objects");
        System.out.println("✅ Convenience - use simplest constructor needed");
        System.out.println("✅ Default values - provide sensible defaults");
    }
    
    // ============================================
    // SECTION 5: 'this' KEYWORD
    // ============================================
    static void section5_ThisKeyword() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("SECTION 5: 'this' KEYWORD");
        System.out.println("=".repeat(70));
        
        System.out.println("\n📖 'this' Keyword:");
        System.out.println("- Refers to current object");
        System.out.println("- Used to distinguish between instance and local variables");
        System.out.println("- Can call other constructors");
        
        System.out.println("\n💡 Use Case 1: Resolve Naming Conflicts");
        Employee emp = new Employee("E001", "Alice", 75000);
        emp.displayInfo();
        
        System.out.println("\n📋 Without 'this':");
        System.out.println("class Employee {");
        System.out.println("    String id;");
        System.out.println("    Employee(String empId) {  // Different name");
        System.out.println("        id = empId;");
        System.out.println("    }");
        System.out.println("}");
        
        System.out.println("\n📋 With 'this':");
        System.out.println("class Employee {");
        System.out.println("    String id;");
        System.out.println("    Employee(String id) {  // Same name!");
        System.out.println("        this.id = id;  // this.id = instance, id = parameter");
        System.out.println("    }");
        System.out.println("}");
        
        System.out.println("\n✅ Benefits of 'this':");
        System.out.println("✅ Parameters can have same names as fields");
        System.out.println("✅ More readable - clear what each variable is");
        System.out.println("✅ IDE auto-completion works better");
    }
    
    // ============================================
    // SECTION 6: CONSTRUCTOR CHAINING
    // ============================================
    static void section6_ConstructorChaining() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("SECTION 6: CONSTRUCTOR CHAINING");
        System.out.println("=".repeat(70));
        
        System.out.println("\n📖 Constructor Chaining:");
        System.out.println("- One constructor calling another");
        System.out.println("- Uses 'this(...)' syntax");
        System.out.println("- Must be first statement in constructor");
        System.out.println("- Reduces code duplication");
        
        System.out.println("\n💡 Example: Rectangle with Constructor Chaining");
        
        Rectangle r1 = new Rectangle();  // Default: 1x1
        Rectangle r2 = new Rectangle(5);  // Square: 5x5
        Rectangle r3 = new Rectangle(10, 20);  // Rectangle: 10x20
        
        r1.displayInfo();
        r2.displayInfo();
        r3.displayInfo();
        
        System.out.println("\n📋 How it Works:");
        System.out.println("Rectangle() calls this(1, 1)");
        System.out.println("Rectangle(side) calls this(side, side)");
        System.out.println("Rectangle(l, w) is the main constructor");
        
        System.out.println("\n🎯 Benefits:");
        System.out.println("✅ Code reuse - don't repeat initialization logic");
        System.out.println("✅ Maintainability - change one place, affects all");
        System.out.println("✅ Consistency - all paths go through main constructor");
        
        System.out.println("\n💡 Example: Student with Chaining");
        Student s1 = new Student("Alice");
        Student s2 = new Student("Bob", 101);
        Student s3 = new Student("Charlie", 102, 'A');
        
        s1.displayInfo();
        s2.displayInfo();
        s3.displayInfo();
    }
    
    // ============================================
    // SECTION 7: COPY CONSTRUCTOR
    // ============================================
    static void section7_CopyConstructor() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("SECTION 7: COPY CONSTRUCTOR");
        System.out.println("=".repeat(70));
        
        System.out.println("\n📖 Copy Constructor:");
        System.out.println("- Creates new object as copy of existing object");
        System.out.println("- Takes object of same class as parameter");
        System.out.println("- Creates deep copy of object");
        
        System.out.println("\n💡 Example: Point Copy Constructor");
        Point original = new Point(10, 20);
        Point copy = new Point(original);  // Copy constructor
        
        System.out.println("Original: (" + original.x + ", " + original.y + ")");
        System.out.println("Copy: (" + copy.x + ", " + copy.y + ")");
        
        // Modify copy
        copy.x = 100;
        copy.y = 200;
        
        System.out.println("\nAfter modifying copy:");
        System.out.println("Original: (" + original.x + ", " + original.y + ")");  // Unchanged!
        System.out.println("Copy: (" + copy.x + ", " + copy.y + ")");
        
        System.out.println("\n📝 Implementation:");
        System.out.println("class Point {");
        System.out.println("    int x, y;");
        System.out.println("    ");
        System.out.println("    // Copy constructor");
        System.out.println("    Point(Point other) {");
        System.out.println("        this.x = other.x;");
        System.out.println("        this.y = other.y;");
        System.out.println("    }");
        System.out.println("}");
        
        System.out.println("\n🎯 Use Cases:");
        System.out.println("✅ Create independent copy of object");
        System.out.println("✅ Avoid shared references");
        System.out.println("✅ Implement clone() method");
        System.out.println("✅ Pass objects by value semantics");
    }
    
    // ============================================
    // SECTION 8: CONSTRUCTOR VS METHODS
    // ============================================
    static void section8_ConstructorVsMethods() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("SECTION 8: CONSTRUCTOR VS METHODS");
        System.out.println("=".repeat(70));
        
        System.out.println("\n╔═══════════════════════╦═════════════════════╦═══════════════════╗");
        System.out.println("║      Feature          ║    Constructor      ║      Method       ║");
        System.out.println("╠═══════════════════════╬═════════════════════╬═══════════════════╣");
        System.out.println("║ Name                  ║ Same as class       ║ Any valid name    ║");
        System.out.println("║ Return Type           ║ No return type      ║ Must have type    ║");
        System.out.println("║ Called                ║ Automatically (new) ║ Explicitly        ║");
        System.out.println("║ Purpose               ║ Initialize object   ║ Perform operation ║");
        System.out.println("║ Inheritance           ║ Not inherited       ║ Inherited         ║");
        System.out.println("║ this() / super()      ║ Yes (1st statement) ║ Not allowed       ║");
        System.out.println("║ Can be static         ║ No                  ║ Yes               ║");
        System.out.println("║ Can be final          ║ No                  ║ Yes               ║");
        System.out.println("║ Can be abstract       ║ No                  ║ Yes               ║");
        System.out.println("╚═══════════════════════╩═════════════════════╩═══════════════════╝");
        
        System.out.println("\n💡 Example Comparison:");
        Demo demo = new Demo();  // Constructor called
        demo.initialize();       // Method called
        
        System.out.println("\n📝 Constructor:");
        System.out.println("Demo() {  // No return type, same name as class");
        System.out.println("    System.out.println(\"Constructor called\");");
        System.out.println("}");
        
        System.out.println("\n📝 Method:");
        System.out.println("void initialize() {  // Has return type, any name");
        System.out.println("    System.out.println(\"Method called\");");
        System.out.println("}");
    }
    
    // ============================================
    // SECTION 9: COMMON PATTERNS
    // ============================================
    static void section9_CommonPatterns() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("SECTION 9: COMMON PATTERNS");
        System.out.println("=".repeat(70));
        
        System.out.println("\n💡 Pattern 1: Builder Pattern (Constructor Alternative)");
        Car car = new Car.Builder()
            .setBrand("Toyota")
            .setModel("Camry")
            .setYear(2024)
            .setColor("Blue")
            .build();
        car.displayInfo();
        
        System.out.println("\n💡 Pattern 2: Default Values Pattern");
        Configuration config1 = new Configuration();  // All defaults
        Configuration config2 = new Configuration("CustomApp");  // Custom name
        
        config1.displayInfo();
        config2.displayInfo();
        
        System.out.println("\n💡 Pattern 3: Validation in Constructor");
        try {
            Age validAge = new Age(25);  // Valid
            System.out.println("Valid age created: " + validAge.getValue());
            
            Age invalidAge = new Age(-5);  // Invalid - throws exception
        } catch (IllegalArgumentException e) {
            System.out.println("Error: " + e.getMessage());
        }
        
        System.out.println("\n💡 Pattern 4: Immutable Object Pattern");
        ImmutablePerson person = new ImmutablePerson("Alice", 25);
        person.displayInfo();
        // person.name = "Bob";  // ❌ Cannot modify - fields are final
        
        System.out.println("\n🎯 When to Use Each Pattern:");
        System.out.println("✅ Builder: Many optional parameters");
        System.out.println("✅ Defaults: Few required fields, many optional");
        System.out.println("✅ Validation: Data integrity is critical");
        System.out.println("✅ Immutable: Thread-safe, value objects");
    }
    
    // ============================================
    // SECTION 10: BEST PRACTICES
    // ============================================
    static void section10_BestPractices() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("SECTION 10: BEST PRACTICES");
        System.out.println("=".repeat(70));
        
        System.out.println("\n✅ DO:");
        System.out.println("1. Keep constructors simple - just initialize fields");
        System.out.println("2. Use 'this' for clarity when parameter names match fields");
        System.out.println("3. Provide multiple constructors for flexibility");
        System.out.println("4. Use constructor chaining to avoid duplication");
        System.out.println("5. Validate parameters in constructor");
        System.out.println("6. Initialize all fields in constructor");
        System.out.println("7. Make fields final if object should be immutable");
        
        System.out.println("\n❌ DON'T:");
        System.out.println("1. Perform heavy computations in constructor");
        System.out.println("2. Call overridable methods from constructor");
        System.out.println("3. Allow objects to be created in invalid state");
        System.out.println("4. Have too many parameters (use Builder pattern)");
        System.out.println("5. Throw exceptions from constructor (if possible)");
        System.out.println("6. Have side effects beyond initialization");
        
        System.out.println("\n📝 Good Example:");
        System.out.println("public class Person {");
        System.out.println("    private final String name;  // final = immutable");
        System.out.println("    private final int age;");
        System.out.println("    ");
        System.out.println("    public Person(String name, int age) {");
        System.out.println("        if (name == null || name.isEmpty()) {");
        System.out.println("            throw new IllegalArgumentException(\"Name required\");");
        System.out.println("        }");
        System.out.println("        if (age < 0 || age > 150) {");
        System.out.println("            throw new IllegalArgumentException(\"Invalid age\");");
        System.out.println("        }");
        System.out.println("        this.name = name;");
        System.out.println("        this.age = age;");
        System.out.println("    }");
        System.out.println("}");
        
        System.out.println("\n🎯 Interview Tips:");
        System.out.println("✅ Explain constructor purpose clearly");
        System.out.println("✅ Know difference between constructor and method");
        System.out.println("✅ Understand 'this' keyword usage");
        System.out.println("✅ Be able to write constructor chaining");
        System.out.println("✅ Explain when Java provides default constructor");
    }
}

// ============================================
// HELPER CLASSES
// ============================================

class Box1 {
    int length;
    int width;
    int height;
    // Java provides default constructor
    
    void displayInfo() {
        System.out.println("Box1 dimensions: " + length + "x" + width + "x" + height);
    }
}

class Box2 {
    int length;
    int width;
    int height;
    
    // Custom default constructor
    Box2() {
        length = 10;
        width = 10;
        height = 10;
        System.out.println("Box2 created with default dimensions");
    }
    
    void displayInfo() {
        System.out.println("Box2 dimensions: " + length + "x" + width + "x" + height);
    }
}

class Person {
    String name;
    int age;
    
    // Parameterized constructor
    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    void displayInfo() {
        System.out.println("Person: " + name + ", Age: " + age);
    }
}

class BankAccount {
    String accountNumber;
    String holderName;
    double balance;
    
    BankAccount(String accountNumber, String holderName, double balance) {
        this.accountNumber = accountNumber;
        this.holderName = holderName;
        this.balance = balance;
    }
    
    void displayInfo() {
        System.out.println("Account: " + accountNumber + 
                         ", Holder: " + holderName + 
                         ", Balance: $" + balance);
    }
}

class Book {
    String title;
    String author;
    int pages;
    
    // Constructor overloading
    Book() {
        this.title = "Unknown";
        this.author = "Unknown";
        this.pages = 0;
    }
    
    Book(String title) {
        this.title = title;
        this.author = "Unknown";
        this.pages = 0;
    }
    
    Book(String title, String author) {
        this.title = title;
        this.author = author;
        this.pages = 0;
    }
    
    Book(String title, String author, int pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    
    void displayInfo() {
        System.out.println("Title: " + title + ", Author: " + author + ", Pages: " + pages);
    }
}

class Employee {
    String id;
    String name;
    double salary;
    
    Employee(String id, String name, double salary) {
        this.id = id;        // this.id (instance) = id (parameter)
        this.name = name;    // 'this' disambiguates
        this.salary = salary;
    }
    
    void displayInfo() {
        System.out.println("ID: " + id + ", Name: " + name + ", Salary: $" + salary);
    }
}

class Rectangle {
    double length;
    double width;
    
    // Constructor chaining
    Rectangle() {
        this(1, 1);  // Calls Rectangle(double, double)
    }
    
    Rectangle(double side) {
        this(side, side);  // Calls Rectangle(double, double)
    }
    
    Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }
    
    void displayInfo() {
        System.out.println("Rectangle: " + length + " x " + width + 
                         ", Area: " + (length * width));
    }
}

class Student {
    String name;
    int rollNumber;
    char grade;
    
    Student(String name) {
        this(name, 0, 'F');
    }
    
    Student(String name, int rollNumber) {
        this(name, rollNumber, 'F');
    }
    
    Student(String name, int rollNumber, char grade) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.grade = grade;
    }
    
    void displayInfo() {
        System.out.println("Student: " + name + ", Roll: " + rollNumber + ", Grade: " + grade);
    }
}

class Point {
    int x;
    int y;
    
    Point(int x, int y) {
        this.x = x;
        this.y = y;
    }
    
    // Copy constructor
    Point(Point other) {
        this.x = other.x;
        this.y = other.y;
    }
}

class Demo {
    Demo() {
        System.out.println("Constructor called");
    }
    
    void initialize() {
        System.out.println("Method called");
    }
}

class Car {
    String brand;
    String model;
    int year;
    String color;
    
    private Car(Builder builder) {
        this.brand = builder.brand;
        this.model = builder.model;
        this.year = builder.year;
        this.color = builder.color;
    }
    
    void displayInfo() {
        System.out.println("Car: " + brand + " " + model + " " + year + " (" + color + ")");
    }
    
    static class Builder {
        private String brand = "";
        private String model = "";
        private int year = 2024;
        private String color = "Black";
        
        Builder setBrand(String brand) {
            this.brand = brand;
            return this;
        }
        
        Builder setModel(String model) {
            this.model = model;
            return this;
        }
        
        Builder setYear(int year) {
            this.year = year;
            return this;
        }
        
        Builder setColor(String color) {
            this.color = color;
            return this;
        }
        
        Car build() {
            return new Car(this);
        }
    }
}

class Configuration {
    String appName;
    int maxUsers;
    boolean debugMode;
    
    Configuration() {
        this("DefaultApp");
    }
    
    Configuration(String appName) {
        this.appName = appName;
        this.maxUsers = 100;
        this.debugMode = false;
    }
    
    void displayInfo() {
        System.out.println("Config: " + appName + ", MaxUsers: " + maxUsers + 
                         ", Debug: " + debugMode);
    }
}

class Age {
    private int value;
    
    Age(int value) {
        if (value < 0 || value > 150) {
            throw new IllegalArgumentException("Age must be between 0 and 150");
        }
        this.value = value;
    }
    
    int getValue() {
        return value;
    }
}

class ImmutablePerson {
    private final String name;  // final = cannot change
    private final int age;
    
    ImmutablePerson(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    void displayInfo() {
        System.out.println("Immutable Person: " + name + ", Age: " + age);
    }
}
