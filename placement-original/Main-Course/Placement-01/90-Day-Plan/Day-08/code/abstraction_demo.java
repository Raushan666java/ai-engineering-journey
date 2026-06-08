/**
 * Day 8: Abstraction with Abstract Classes
 * 
 * Topics Covered:
 * - Abstract classes with abstract keyword
 * - Abstract methods (no implementation)
 * - Concrete methods in abstract classes
 * - Template method pattern
 * - When to use abstract classes
 */

// Abstract base class - Shape
abstract class Shape {
    protected String color;
    protected boolean filled;
    
    // Constructor in abstract class
    public Shape(String color, boolean filled) {
        this.color = color;
        this.filled = filled;
    }
    
    // Abstract methods - must be implemented by subclasses
    public abstract double getArea();
    public abstract double getPerimeter();
    
    // Concrete method - provides default implementation
    public void displayInfo() {
        System.out.println("Shape: " + getClass().getSimpleName());
        System.out.println("Color: " + color);
        System.out.println("Filled: " + (filled ? "Yes" : "No"));
        System.out.println("Area: " + String.format("%.2f", getArea()));
        System.out.println("Perimeter: " + String.format("%.2f", getPerimeter()));
    }
    
    // Template method pattern - defines algorithm structure
    public final void draw() {
        System.out.println("\n--- Drawing " + getClass().getSimpleName() + " ---");
        prepareCanvas();
        drawShape();
        applyColor();
        finish();
    }
    
    // Steps in template method
    private void prepareCanvas() {
        System.out.println("1. Preparing canvas...");
    }
    
    // Abstract step - subclasses must implement
    protected abstract void drawShape();
    
    private void applyColor() {
        System.out.println("3. Applying color: " + color);
    }
    
    private void finish() {
        System.out.println("4. Finishing drawing");
    }
    
    // Getter methods
    public String getColor() { return color; }
    public boolean isFilled() { return filled; }
}

// Concrete class - Circle
class Circle extends Shape {
    private double radius;
    
    public Circle(String color, boolean filled, double radius) {
        super(color, filled);
        this.radius = radius;
    }
    
    // Implement abstract method
    @Override
    public double getArea() {
        return Math.PI * radius * radius;
    }
    
    // Implement abstract method
    @Override
    public double getPerimeter() {
        return 2 * Math.PI * radius;
    }
    
    // Implement abstract method from template
    @Override
    protected void drawShape() {
        System.out.println("2. Drawing circle with radius: " + radius);
    }
    
    public double getRadius() { return radius; }
}

// Concrete class - Rectangle
class Rectangle extends Shape {
    private double width;
    private double height;
    
    public Rectangle(String color, boolean filled, double width, double height) {
        super(color, filled);
        this.width = width;
        this.height = height;
    }
    
    @Override
    public double getArea() {
        return width * height;
    }
    
    @Override
    public double getPerimeter() {
        return 2 * (width + height);
    }
    
    @Override
    protected void drawShape() {
        System.out.println("2. Drawing rectangle: " + width + "x" + height);
    }
    
    public double getWidth() { return width; }
    public double getHeight() { return height; }
}

// Concrete class - Triangle
class Triangle extends Shape {
    private double side1, side2, side3;
    
    public Triangle(String color, boolean filled, double side1, double side2, double side3) {
        super(color, filled);
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    
    @Override
    public double getArea() {
        // Using Heron's formula
        double s = getPerimeter() / 2;
        return Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
    }
    
    @Override
    public double getPerimeter() {
        return side1 + side2 + side3;
    }
    
    @Override
    protected void drawShape() {
        System.out.println("2. Drawing triangle with sides: " + 
                         side1 + ", " + side2 + ", " + side3);
    }
}

// Abstract class demonstrating partial implementation
abstract class Employee {
    protected String name;
    protected int id;
    protected double baseSalary;
    
    public Employee(String name, int id, double baseSalary) {
        this.name = name;
        this.id = id;
        this.baseSalary = baseSalary;
    }
    
    // Abstract method - calculation varies by employee type
    public abstract double calculateSalary();
    
    // Abstract method - different for each type
    public abstract String getEmployeeType();
    
    // Concrete method - same for all employees
    public void displayDetails() {
        System.out.println("\n--- Employee Details ---");
        System.out.println("ID: " + id);
        System.out.println("Name: " + name);
        System.out.println("Type: " + getEmployeeType());
        System.out.println("Base Salary: $" + baseSalary);
        System.out.println("Total Salary: $" + calculateSalary());
    }
    
    // Template method for generating payslip
    public final void generatePayslip() {
        System.out.println("\n=== PAYSLIP ===");
        System.out.println("Employee: " + name);
        System.out.println("ID: " + id);
        System.out.println("Type: " + getEmployeeType());
        printSalaryBreakdown();
        System.out.println("Total: $" + calculateSalary());
        System.out.println("===============");
    }
    
    // Hook method - can be overridden by subclasses
    protected void printSalaryBreakdown() {
        System.out.println("Base Salary: $" + baseSalary);
    }
}

// Concrete Employee - FullTimeEmployee
class FullTimeEmployee extends Employee {
    private double bonus;
    private double benefits;
    
    public FullTimeEmployee(String name, int id, double baseSalary, 
                           double bonus, double benefits) {
        super(name, id, baseSalary);
        this.bonus = bonus;
        this.benefits = benefits;
    }
    
    @Override
    public double calculateSalary() {
        return baseSalary + bonus + benefits;
    }
    
    @Override
    public String getEmployeeType() {
        return "Full-Time";
    }
    
    @Override
    protected void printSalaryBreakdown() {
        super.printSalaryBreakdown();
        System.out.println("Bonus: $" + bonus);
        System.out.println("Benefits: $" + benefits);
    }
}

// Concrete Employee - ContractEmployee
class ContractEmployee extends Employee {
    private int hoursWorked;
    private double hourlyRate;
    
    public ContractEmployee(String name, int id, double baseSalary,
                          int hoursWorked, double hourlyRate) {
        super(name, id, baseSalary);
        this.hoursWorked = hoursWorked;
        this.hourlyRate = hourlyRate;
    }
    
    @Override
    public double calculateSalary() {
        return hoursWorked * hourlyRate;
    }
    
    @Override
    public String getEmployeeType() {
        return "Contract";
    }
    
    @Override
    protected void printSalaryBreakdown() {
        System.out.println("Hours Worked: " + hoursWorked);
        System.out.println("Hourly Rate: $" + hourlyRate);
    }
}

// Concrete Employee - Intern
class Intern extends Employee {
    private double stipend;
    
    public Intern(String name, int id, double stipend) {
        super(name, id, 0); // No base salary for interns
        this.stipend = stipend;
    }
    
    @Override
    public double calculateSalary() {
        return stipend;
    }
    
    @Override
    public String getEmployeeType() {
        return "Intern";
    }
    
    @Override
    protected void printSalaryBreakdown() {
        System.out.println("Monthly Stipend: $" + stipend);
    }
}

// Main class demonstrating abstraction
public class abstraction_demo {
    public static void main(String[] args) {
        System.out.println("=== Abstraction Demo ===\n");
        
        // 1. Creating concrete shapes from abstract class
        System.out.println("1. Abstract Shape Class:");
        // Shape shape = new Shape("Red", true); // ERROR: Cannot instantiate abstract class
        
        Circle circle = new Circle("Red", true, 5.0);
        Rectangle rectangle = new Rectangle("Blue", false, 4.0, 6.0);
        Triangle triangle = new Triangle("Green", true, 3.0, 4.0, 5.0);
        
        System.out.println("Circle created");
        System.out.println("Rectangle created");
        System.out.println("Triangle created\n");
        
        // 2. Polymorphic array of abstract type
        System.out.println("2. Polymorphic Shape Array:");
        Shape[] shapes = {circle, rectangle, triangle};
        
        for (Shape shape : shapes) {
            shape.displayInfo();
            System.out.println();
        }
        
        // 3. Template method pattern demonstration
        System.out.println("3. Template Method Pattern (draw):");
        circle.draw();
        rectangle.draw();
        triangle.draw();
        System.out.println();
        
        // 4. Abstract Employee class
        System.out.println("4. Abstract Employee Class:");
        FullTimeEmployee fte = new FullTimeEmployee("John Doe", 101, 5000, 1000, 500);
        ContractEmployee ce = new ContractEmployee("Jane Smith", 102, 0, 160, 50);
        Intern intern = new Intern("Bob Johnson", 103, 1000);
        
        // Polymorphic behavior
        Employee[] employees = {fte, ce, intern};
        
        for (Employee emp : employees) {
            emp.displayDetails();
        }
        System.out.println();
        
        // 5. Template method for payslip
        System.out.println("5. Generating Payslips (Template Method):");
        fte.generatePayslip();
        ce.generatePayslip();
        intern.generatePayslip();
        System.out.println();
        
        // 6. Calculating total payroll using abstraction
        System.out.println("6. Total Payroll Calculation:");
        double totalPayroll = 0;
        for (Employee emp : employees) {
            totalPayroll += emp.calculateSalary();
        }
        System.out.println("Total Payroll: $" + totalPayroll);
        System.out.println();
        
        // 7. Type checking with abstract classes
        System.out.println("7. Type Checking:");
        System.out.println("circle instanceof Shape: " + (circle instanceof Shape));
        System.out.println("circle instanceof Circle: " + (circle instanceof Circle));
        System.out.println("fte instanceof Employee: " + (fte instanceof Employee));
        System.out.println("fte instanceof FullTimeEmployee: " + (fte instanceof FullTimeEmployee));
        System.out.println();
        
        System.out.println("=== Abstraction Demo Complete ===");
    }
}

/**
 * Abstract Class Key Concepts:
 * 
 * 1. Abstract Class:
 *    - Declared with 'abstract' keyword
 *    - Cannot be instantiated
 *    - Can have both abstract and concrete methods
 *    - Can have constructors, fields, and regular methods
 * 
 * 2. Abstract Methods:
 *    - Declared without implementation (no body)
 *    - Must be implemented by concrete subclasses
 *    - Forces subclasses to provide specific implementation
 * 
 * 3. Template Method Pattern:
 *    - Define skeleton of algorithm in base class
 *    - Let subclasses implement specific steps
 *    - Use 'final' to prevent overriding template method
 *    - Common design pattern in OOP
 * 
 * 4. When to Use Abstract Classes:
 *    - Share code among closely related classes
 *    - Declare non-static, non-final fields
 *    - Provide partial implementation (some concrete methods)
 *    - Establish "is-a" relationship with shared behavior
 * 
 * 5. Abstract vs Concrete:
 *    - Abstract: Incomplete, must be extended
 *    - Concrete: Complete, can be instantiated
 * 
 * Advantages:
 * - Code reusability through partial implementation
 * - Enforce contract (abstract methods must be implemented)
 * - Reduce code duplication
 * - Support polymorphism
 * - Provide common interface for related classes
 * 
 * Interview Questions:
 * 
 * Q: Can abstract class have constructor?
 * A: Yes, called when concrete subclass is instantiated
 * 
 * Q: Can abstract class have final methods?
 * A: Yes, final methods cannot be overridden
 * 
 * Q: Can abstract class have static methods?
 * A: Yes, static methods are class-level
 * 
 * Q: Must all methods be abstract in abstract class?
 * A: No, can mix abstract and concrete methods
 * 
 * Q: Can abstract class implement interface?
 * A: Yes, can implement interface without implementing all methods
 * 
 * Abstract Class vs Interface:
 * 
 * Abstract Class:
 * - Single inheritance only
 * - Can have state (fields)
 * - Can have constructors
 * - Can have any access modifiers
 * - Partial implementation possible
 * - Use for "is-a" relationship
 * 
 * Interface:
 * - Multiple implementation allowed
 * - No state (only constants)
 * - No constructors
 * - All methods public by default
 * - No implementation (except default/static methods)
 * - Use for "can-do" capability
 */
