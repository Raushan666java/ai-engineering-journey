# 🎨 Java OOPs - Quick Concepts & Practice

## 🎯 Quick Concepts

### **Four Pillars of OOP**
1. **Encapsulation:** Data hiding and bundling
2. **Inheritance:** Acquiring properties of parent class
3. **Polymorphism:** Same method, different behaviors
4. **Abstraction:** Hiding implementation details

### **Access Modifiers**
- **public:** Accessible everywhere
- **private:** Accessible only within class
- **protected:** Accessible within package and subclasses
- **default:** Accessible within package

### **Class vs Object**
- **Class:** Blueprint/template
- **Object:** Instance of class

### **Types of Inheritance**
- **Single:** One parent, one child
- **Multi-level:** Grandparent -> Parent -> Child
- **Hierarchical:** One parent, multiple children
- **Multiple:** Multiple parents (via interfaces)

---

## 🧠 Practice Questions

### **Easy Level**

#### 1. Class and Object Basics
```java
// Student class
class Student {
    // Instance variables
    private String name;
    private int rollNumber;
    private double marks;
    
    // Constructor
    public Student(String name, int rollNumber, double marks) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.marks = marks;
    }
    
    // Default constructor
    public Student() {
        this.name = "Unknown";
        this.rollNumber = 0;
        this.marks = 0.0;
    }
    
    // Getter methods
    public String getName() {
        return name;
    }
    
    public int getRollNumber() {
        return rollNumber;
    }
    
    public double getMarks() {
        return marks;
    }
    
    // Setter methods
    public void setName(String name) {
        this.name = name;
    }
    
    public void setMarks(double marks) {
        if(marks >= 0 && marks <= 100) {
            this.marks = marks;
        }
    }
    
    // Display method
    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Roll Number: " + rollNumber);
        System.out.println("Marks: " + marks);
    }
}

// Main class
public class StudentDemo {
    public static void main(String[] args) {
        // Creating objects
        Student student1 = new Student("John Doe", 101, 85.5);
        Student student2 = new Student();
        
        // Using methods
        System.out.println("Student 1 Information:");
        student1.displayInfo();
        
        System.out.println("\nStudent 2 Information:");
        student2.displayInfo();
        
        // Using getters and setters
        student2.setName("Jane Smith");
        student2.setMarks(92.3);
        
        System.out.println("\nUpdated Student 2 Information:");
        System.out.println("Name: " + student2.getName());
        System.out.println("Marks: " + student2.getMarks());
    }
}
```

#### 2. Static Members
```java
class Calculator {
    // Static variable
    private static int operationCount = 0;
    
    // Static constant
    public static final double PI = 3.14159;
    
    // Instance variables
    private double result;
    
    // Static method
    public static int getOperationCount() {
        return operationCount;
    }
    
    // Static method
    public static double getPI() {
        return PI;
    }
    
    // Instance methods
    public double add(double a, double b) {
        operationCount++;
        result = a + b;
        return result;
    }
    
    public double subtract(double a, double b) {
        operationCount++;
        result = a - b;
        return result;
    }
    
    public double multiply(double a, double b) {
        operationCount++;
        result = a * b;
        return result;
    }
    
    public double divide(double a, double b) {
        operationCount++;
        if(b != 0) {
            result = a / b;
            return result;
        } else {
            System.out.println("Error: Division by zero!");
            return 0;
        }
    }
    
    public double getResult() {
        return result;
    }
}

public class StaticDemo {
    public static void main(String[] args) {
        // Accessing static members without creating object
        System.out.println("PI value: " + Calculator.getPI());
        System.out.println("Initial operation count: " + Calculator.getOperationCount());
        
        // Creating calculator objects
        Calculator calc1 = new Calculator();
        Calculator calc2 = new Calculator();
        
        // Performing operations
        System.out.println("Calc1 - Addition: " + calc1.add(10, 5));
        System.out.println("Calc2 - Multiplication: " + calc2.multiply(4, 3));
        System.out.println("Calc1 - Division: " + calc1.divide(20, 4));
        
        // Static variable shared across all objects
        System.out.println("Total operations performed: " + Calculator.getOperationCount());
    }
}
```

### **Medium Level**

#### 3. Inheritance Example
```java
// Base class
class Employee {
    protected String name;
    protected int id;
    protected double salary;
    
    public Employee(String name, int id, double salary) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }
    
    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("ID: " + id);
        System.out.println("Salary: $" + salary);
    }
    
    public double calculateBonus() {
        return salary * 0.1; // 10% bonus
    }
}

// Derived class - Manager
class Manager extends Employee {
    private String department;
    private int teamSize;
    
    public Manager(String name, int id, double salary, String department, int teamSize) {
        super(name, id, salary);
        this.department = department;
        this.teamSize = teamSize;
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Department: " + department);
        System.out.println("Team Size: " + teamSize);
        System.out.println("Role: Manager");
    }
    
    @Override
    public double calculateBonus() {
        return salary * 0.2; // 20% bonus for managers
    }
    
    public void manageTeam() {
        System.out.println(name + " is managing a team of " + teamSize + " people in " + department);
    }
}

// Derived class - Developer
class Developer extends Employee {
    private String programmingLanguage;
    private String level; // Junior, Senior
    
    public Developer(String name, int id, double salary, String language, String level) {
        super(name, id, salary);
        this.programmingLanguage = language;
        this.level = level;
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Programming Language: " + programmingLanguage);
        System.out.println("Level: " + level);
        System.out.println("Role: Developer");
    }
    
    @Override
    public double calculateBonus() {
        return level.equals("Senior") ? salary * 0.15 : salary * 0.12;
    }
    
    public void writeCode() {
        System.out.println(name + " is writing code in " + programmingLanguage);
    }
}

public class InheritanceDemo {
    public static void main(String[] args) {
        // Creating different types of employees
        Manager manager = new Manager("Alice Johnson", 1001, 80000, "Engineering", 8);
        Developer seniorDev = new Developer("Bob Smith", 1002, 70000, "Java", "Senior");
        Developer juniorDev = new Developer("Charlie Brown", 1003, 50000, "Python", "Junior");
        
        // Displaying information and calculating bonuses
        System.out.println("=== Manager Information ===");
        manager.displayInfo();
        System.out.println("Bonus: $" + manager.calculateBonus());
        manager.manageTeam();
        
        System.out.println("\n=== Senior Developer Information ===");
        seniorDev.displayInfo();
        System.out.println("Bonus: $" + seniorDev.calculateBonus());
        seniorDev.writeCode();
        
        System.out.println("\n=== Junior Developer Information ===");
        juniorDev.displayInfo();
        System.out.println("Bonus: $" + juniorDev.calculateBonus());
        juniorDev.writeCode();
        
        // Polymorphism - same method, different behavior
        System.out.println("\n=== Polymorphism Demo ===");
        Employee[] employees = {manager, seniorDev, juniorDev};
        for(Employee emp : employees) {
            System.out.println(emp.name + "'s bonus: $" + emp.calculateBonus());
        }
    }
}
```

#### 4. Polymorphism Example
```java
// Shape interface
interface Shape {
    double calculateArea();
    double calculatePerimeter();
    void displayInfo();
}

// Circle class
class Circle implements Shape {
    private double radius;
    
    public Circle(double radius) {
        this.radius = radius;
    }
    
    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }
    
    @Override
    public double calculatePerimeter() {
        return 2 * Math.PI * radius;
    }
    
    @Override
    public void displayInfo() {
        System.out.println("Circle with radius: " + radius);
        System.out.println("Area: " + String.format("%.2f", calculateArea()));
        System.out.println("Perimeter: " + String.format("%.2f", calculatePerimeter()));
    }
}

// Rectangle class
class Rectangle implements Shape {
    private double length;
    private double width;
    
    public Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }
    
    @Override
    public double calculateArea() {
        return length * width;
    }
    
    @Override
    public double calculatePerimeter() {
        return 2 * (length + width);
    }
    
    @Override
    public void displayInfo() {
        System.out.println("Rectangle with dimensions: " + length + " x " + width);
        System.out.println("Area: " + calculateArea());
        System.out.println("Perimeter: " + calculatePerimeter());
    }
}

// Triangle class
class Triangle implements Shape {
    private double side1;
    private double side2;
    private double side3;
    
    public Triangle(double side1, double side2, double side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    
    @Override
    public double calculateArea() {
        // Using Heron's formula
        double s = (side1 + side2 + side3) / 2;
        return Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
    }
    
    @Override
    public double calculatePerimeter() {
        return side1 + side2 + side3;
    }
    
    @Override
    public void displayInfo() {
        System.out.println("Triangle with sides: " + side1 + ", " + side2 + ", " + side3);
        System.out.println("Area: " + String.format("%.2f", calculateArea()));
        System.out.println("Perimeter: " + calculatePerimeter());
    }
}

public class PolymorphismDemo {
    public static void main(String[] args) {
        // Creating different shapes
        Shape circle = new Circle(5.0);
        Shape rectangle = new Rectangle(4.0, 6.0);
        Shape triangle = new Triangle(3.0, 4.0, 5.0);
        
        // Array of shapes demonstrating polymorphism
        Shape[] shapes = {circle, rectangle, triangle};
        
        System.out.println("=== Shape Information ===");
        for(int i = 0; i < shapes.length; i++) {
            System.out.println("\nShape " + (i + 1) + ":");
            shapes[i].displayInfo();
        }
        
        // Calculating total area
        double totalArea = 0;
        for(Shape shape : shapes) {
            totalArea += shape.calculateArea();
        }
        System.out.println("\nTotal area of all shapes: " + String.format("%.2f", totalArea));
    }
}
```

### **Hard Level**

#### 5. Abstract Class and Interface
```java
// Abstract class
abstract class Vehicle {
    protected String brand;
    protected String model;
    protected int year;
    
    public Vehicle(String brand, String model, int year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    
    // Abstract methods
    public abstract void start();
    public abstract void stop();
    public abstract double calculateFuelEfficiency();
    
    // Concrete method
    public void displayInfo() {
        System.out.println("Brand: " + brand);
        System.out.println("Model: " + model);
        System.out.println("Year: " + year);
    }
    
    // Getter methods
    public String getBrand() {
        return brand;
    }
    
    public String getModel() {
        return model;
    }
    
    public int getYear() {
        return year;
    }
}

// Interface for electric vehicles
interface ElectricVehicle {
    void chargeBattery();
    double getBatteryLevel();
    double getRange();
}

// Interface for fuel vehicles
interface FuelVehicle {
    void refuel();
    double getFuelLevel();
    String getFuelType();
}

// Car class extending Vehicle and implementing ElectricVehicle
class ElectricCar extends Vehicle implements ElectricVehicle {
    private double batteryCapacity; // kWh
    private double currentBatteryLevel; // percentage
    private double efficiency; // km/kWh
    
    public ElectricCar(String brand, String model, int year, double batteryCapacity, double efficiency) {
        super(brand, model, year);
        this.batteryCapacity = batteryCapacity;
        this.currentBatteryLevel = 100.0; // Fully charged initially
        this.efficiency = efficiency;
    }
    
    @Override
    public void start() {
        if(currentBatteryLevel > 10) {
            System.out.println(brand + " " + model + " electric car started!");
        } else {
            System.out.println("Battery too low! Please charge first.");
        }
    }
    
    @Override
    public void stop() {
        System.out.println(brand + " " + model + " electric car stopped.");
    }
    
    @Override
    public double calculateFuelEfficiency() {
        return efficiency; // km/kWh
    }
    
    @Override
    public void chargeBattery() {
        System.out.println("Charging " + brand + " " + model + "...");
        currentBatteryLevel = 100.0;
        System.out.println("Battery fully charged!");
    }
    
    @Override
    public double getBatteryLevel() {
        return currentBatteryLevel;
    }
    
    @Override
    public double getRange() {
        return (currentBatteryLevel / 100) * batteryCapacity * efficiency;
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Type: Electric Car");
        System.out.println("Battery Capacity: " + batteryCapacity + " kWh");
        System.out.println("Current Battery Level: " + currentBatteryLevel + "%");
        System.out.println("Range: " + String.format("%.1f", getRange()) + " km");
        System.out.println("Efficiency: " + efficiency + " km/kWh");
    }
}

// Motorcycle class extending Vehicle and implementing FuelVehicle
class Motorcycle extends Vehicle implements FuelVehicle {
    private double fuelCapacity; // liters
    private double currentFuelLevel; // percentage
    private String fuelType;
    private double efficiency; // km/liter
    
    public Motorcycle(String brand, String model, int year, double fuelCapacity, String fuelType, double efficiency) {
        super(brand, model, year);
        this.fuelCapacity = fuelCapacity;
        this.currentFuelLevel = 100.0; // Full tank initially
        this.fuelType = fuelType;
        this.efficiency = efficiency;
    }
    
    @Override
    public void start() {
        if(currentFuelLevel > 5) {
            System.out.println(brand + " " + model + " motorcycle started!");
        } else {
            System.out.println("Fuel too low! Please refuel first.");
        }
    }
    
    @Override
    public void stop() {
        System.out.println(brand + " " + model + " motorcycle stopped.");
    }
    
    @Override
    public double calculateFuelEfficiency() {
        return efficiency; // km/liter
    }
    
    @Override
    public void refuel() {
        System.out.println("Refueling " + brand + " " + model + " with " + fuelType + "...");
        currentFuelLevel = 100.0;
        System.out.println("Tank full!");
    }
    
    @Override
    public double getFuelLevel() {
        return currentFuelLevel;
    }
    
    @Override
    public String getFuelType() {
        return fuelType;
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Type: Motorcycle");
        System.out.println("Fuel Capacity: " + fuelCapacity + " liters");
        System.out.println("Current Fuel Level: " + currentFuelLevel + "%");
        System.out.println("Fuel Type: " + fuelType);
        System.out.println("Efficiency: " + efficiency + " km/liter");
    }
}

public class AbstractInterfaceDemo {
    public static void main(String[] args) {
        // Creating vehicles
        ElectricCar tesla = new ElectricCar("Tesla", "Model S", 2023, 100.0, 5.0);
        Motorcycle harley = new Motorcycle("Harley-Davidson", "Sportster", 2022, 11.8, "Petrol", 20.0);
        
        // Array of vehicles demonstrating polymorphism
        Vehicle[] vehicles = {tesla, harley};
        
        System.out.println("=== Vehicle Information ===");
        for(Vehicle vehicle : vehicles) {
            System.out.println("\n--- " + vehicle.getBrand() + " " + vehicle.getModel() + " ---");
            vehicle.displayInfo();
            vehicle.start();
            System.out.println("Fuel Efficiency: " + vehicle.calculateFuelEfficiency());
            vehicle.stop();
        }
        
        // Demonstrating interface-specific methods
        System.out.println("\n=== Interface-Specific Operations ===");
        
        // Electric vehicle operations
        System.out.println("\nElectric Car Operations:");
        System.out.println("Battery Level: " + tesla.getBatteryLevel() + "%");
        System.out.println("Range: " + String.format("%.1f", tesla.getRange()) + " km");
        tesla.chargeBattery();
        
        // Fuel vehicle operations
        System.out.println("\nMotorcycle Operations:");
        System.out.println("Fuel Level: " + harley.getFuelLevel() + "%");
        System.out.println("Fuel Type: " + harley.getFuelType());
        harley.refuel();
    }
}
```

---

## 📈 Important OOPs Concepts

### **Method Overloading vs Overriding**
```java
class Calculator {
    // Method Overloading (Compile-time polymorphism)
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

class Animal {
    public void makeSound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    // Method Overriding (Runtime polymorphism)
    @Override
    public void makeSound() {
        System.out.println("Dog barks");
    }
}
```

### **this and super Keywords**
```java
class Parent {
    protected String name;
    
    public Parent(String name) {
        this.name = name;
    }
    
    public void display() {
        System.out.println("Parent name: " + name);
    }
}

class Child extends Parent {
    private int age;
    
    public Child(String name, int age) {
        super(name); // Call parent constructor
        this.age = age;
    }
    
    @Override
    public void display() {
        super.display(); // Call parent method
        System.out.println("Child age: " + this.age);
    }
}
```

---

## 🎯 Practice Tips

1. **Encapsulation:**
   - Make instance variables private
   - Provide public getter/setter methods
   - Validate data in setters

2. **Inheritance:**
   - Use 'extends' for class inheritance
   - Use 'implements' for interface implementation
   - Avoid deep inheritance hierarchies

3. **Polymorphism:**
   - Method overriding for runtime polymorphism
   - Method overloading for compile-time polymorphism
   - Use parent class references for flexibility

4. **Abstraction:**
   - Abstract classes for partial abstraction
   - Interfaces for complete abstraction
   - Choose based on requirements

5. **Design Principles:**
   - Single Responsibility Principle
   - Open-Closed Principle
   - Liskov Substitution Principle
   - Interface Segregation Principle
   - Dependency Inversion Principle

---

## 📚 Recommended Practice Topics
1. **Bank Account System** - Classes, inheritance, encapsulation
2. **Shape Hierarchy** - Abstract classes, polymorphism
3. **Library Management** - Interfaces, collections
4. **Employee Management** - Full OOP concepts
5. **Vehicle Rental System** - Multiple inheritance via interfaces
6. **Online Shopping Cart** - Composition, aggregation
7. **University Management** - Complex inheritance hierarchy
8. **Hospital Management** - Abstract classes and interfaces
9. **Traffic Light System** - Enum, state pattern
10. **File System** - Composite pattern