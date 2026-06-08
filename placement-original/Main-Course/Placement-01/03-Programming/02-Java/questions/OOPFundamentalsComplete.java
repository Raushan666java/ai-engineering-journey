```java
/**
 * OOP Fundamentals - Complete Implementation
 * Topic: Classes, Objects, Inheritance, Polymorphism, Encapsulation
 * Difficulty: Intermediate
 * Estimated Time: 75 minutes
 */

import java.util.*;
import java.time.LocalDate;
import java.time.Period;

// ==========================================
// 1. BASIC CLASS AND OBJECT CONCEPTS
// ==========================================

/**
 * Person class demonstrating basic OOP concepts
 */
class Person {
    // Instance variables (fields)
    private String name;
    private int age;
    private String email;

    // Static variable (shared by all instances)
    private static int personCount = 0;

    // Constructor
    public Person(String name, int age, String email) {
        this.name = name;
        this.age = age;
        this.email = email;
        personCount++;
    }

    // Default constructor
    public Person() {
        this("Unknown", 0, "unknown@example.com");
    }

    // Copy constructor
    public Person(Person other) {
        this(other.name, other.age, other.email);
    }

    // Getter methods (Encapsulation)
    public String getName() { return name; }
    public int getAge() { return age; }
    public String getEmail() { return email; }
    public static int getPersonCount() { return personCount; }

    // Setter methods with validation
    public void setName(String name) {
        if (name != null && !name.trim().isEmpty()) {
            this.name = name;
        }
    }

    public void setAge(int age) {
        if (age >= 0 && age <= 150) {
            this.age = age;
        }
    }

    public void setEmail(String email) {
        if (email != null && email.contains("@")) {
            this.email = email;
        }
    }

    // Instance methods
    public void introduce() {
        System.out.println("Hi, I'm " + name + ", " + age + " years old.");
    }

    public boolean isAdult() {
        return age >= 18;
    }

    public void celebrateBirthday() {
        age++;
        System.out.println("Happy Birthday " + name + "! You are now " + age + " years old.");
    }

    // Override toString method
    @Override
    public String toString() {
        return String.format("Person{name='%s', age=%d, email='%s'}", name, age, email);
    }

    // Override equals method
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;

        Person person = (Person) obj;
        return age == person.age &&
               Objects.equals(name, person.name) &&
               Objects.equals(email, person.email);
    }

    // Override hashCode method
    @Override
    public int hashCode() {
        return Objects.hash(name, age, email);
    }
}

// ==========================================
// 2. INHERITANCE HIERARCHY
// ==========================================

/**
 * Employee class extending Person - Single Inheritance
 */
class Employee extends Person {
    private String employeeId;
    private String department;
    private double salary;
    private LocalDate hireDate;

    public Employee(String name, int age, String email, String employeeId,
                   String department, double salary) {
        super(name, age, email); // Call parent constructor
        this.employeeId = employeeId;
        this.department = department;
        this.salary = salary;
        this.hireDate = LocalDate.now();
    }

    // Getters
    public String getEmployeeId() { return employeeId; }
    public String getDepartment() { return department; }
    public double getSalary() { return salary; }
    public LocalDate getHireDate() { return hireDate; }

    // Setters
    public void setDepartment(String department) {
        this.department = department;
    }

    public void setSalary(double salary) {
        if (salary >= 0) {
            this.salary = salary;
        }
    }

    // Method overriding (Polymorphism)
    @Override
    public void introduce() {
        System.out.println("Hi, I'm " + getName() + ", a " + department +
                          " employee (ID: " + employeeId + ").");
    }

    // Additional methods
    public int getYearsOfService() {
        return Period.between(hireDate, LocalDate.now()).getYears();
    }

    public void giveRaise(double percentage) {
        if (percentage > 0) {
            salary += salary * (percentage / 100);
            System.out.println(getName() + " received a " + percentage +
                             "% raise. New salary: $" + String.format("%.2f", salary));
        }
    }

    public double calculateAnnualBonus() {
        return salary * 0.1; // 10% bonus
    }

    @Override
    public String toString() {
        return String.format("Employee{name='%s', id='%s', dept='%s', salary=%.2f}",
                           getName(), employeeId, department, salary);
    }
}

/**
 * Manager class extending Employee - Multi-level Inheritance
 */
class Manager extends Employee {
    private List<Employee> subordinates;
    private double bonusPercentage;

    public Manager(String name, int age, String email, String employeeId,
                  double salary, double bonusPercentage) {
        super(name, age, email, employeeId, "Management", salary);
        this.subordinates = new ArrayList<>();
        this.bonusPercentage = bonusPercentage;
    }

    public void addSubordinate(Employee employee) {
        if (employee != null && !subordinates.contains(employee)) {
            subordinates.add(employee);
            System.out.println(employee.getName() + " is now reporting to " + getName());
        }
    }

    public void removeSubordinate(Employee employee) {
        if (subordinates.remove(employee)) {
            System.out.println(employee.getName() + " no longer reports to " + getName());
        }
    }

    public List<Employee> getSubordinates() {
        return new ArrayList<>(subordinates); // Return copy to prevent external modification
    }

    public int getTeamSize() {
        return subordinates.size();
    }

    @Override
    public void introduce() {
        System.out.println("Hi, I'm " + getName() + ", a Manager overseeing " +
                          getTeamSize() + " employees.");
    }

    @Override
    public double calculateAnnualBonus() {
        return getSalary() * (bonusPercentage / 100); // Manager-specific bonus
    }

    public void conductPerformanceReview() {
        System.out.println(getName() + " is conducting performance reviews for " +
                          getTeamSize() + " team members.");
        for (Employee emp : subordinates) {
            System.out.println("- Reviewing " + emp.getName() + " (" + emp.getDepartment() + ")");
        }
    }
}

// ==========================================
// 3. POLYMORPHISM EXAMPLES
// ==========================================

/**
 * Abstract Shape class demonstrating abstraction and polymorphism
 */
abstract class Shape {
    protected String color;
    protected boolean filled;

    public Shape() {
        this.color = "white";
        this.filled = false;
    }

    public Shape(String color, boolean filled) {
        this.color = color;
        this.filled = filled;
    }

    // Abstract methods (must be implemented by subclasses)
    public abstract double getArea();
    public abstract double getPerimeter();

    // Concrete methods
    public String getColor() { return color; }
    public void setColor(String color) { this.color = color; }
    public boolean isFilled() { return filled; }
    public void setFilled(boolean filled) { this.filled = filled; }

    @Override
    public String toString() {
        return String.format("Shape[color=%s, filled=%s]", color, filled);
    }
}

/**
 * Circle class extending Shape
 */
class Circle extends Shape {
    private double radius;

    public Circle() {
        super();
        this.radius = 1.0;
    }

    public Circle(double radius) {
        super();
        this.radius = radius;
    }

    public Circle(double radius, String color, boolean filled) {
        super(color, filled);
        this.radius = radius;
    }

    public double getRadius() { return radius; }
    public void setRadius(double radius) {
        if (radius > 0) {
            this.radius = radius;
        }
    }

    @Override
    public double getArea() {
        return Math.PI * radius * radius;
    }

    @Override
    public double getPerimeter() {
        return 2 * Math.PI * radius;
    }

    @Override
    public String toString() {
        return String.format("Circle[radius=%.2f, %s]", radius, super.toString());
    }
}

/**
 * Rectangle class extending Shape
 */
class Rectangle extends Shape {
    private double width;
    private double length;

    public Rectangle() {
        super();
        this.width = 1.0;
        this.length = 1.0;
    }

    public Rectangle(double width, double length) {
        super();
        this.width = width;
        this.length = length;
    }

    public Rectangle(double width, double length, String color, boolean filled) {
        super(color, filled);
        this.width = width;
        this.length = length;
    }

    public double getWidth() { return width; }
    public void setWidth(double width) {
        if (width > 0) {
            this.width = width;
        }
    }

    public double getLength() { return length; }
    public void setLength(double length) {
        if (length > 0) {
            this.length = length;
        }
    }

    @Override
    public double getArea() {
        return width * length;
    }

    @Override
    public double getPerimeter() {
        return 2 * (width + length);
    }

    @Override
    public String toString() {
        return String.format("Rectangle[width=%.2f, length=%.2f, %s]", width, length, super.toString());
    }
}

/**
 * Triangle class extending Shape
 */
class Triangle extends Shape {
    private double side1;
    private double side2;
    private double side3;

    public Triangle(double side1, double side2, double side3) {
        super();
        if (isValidTriangle(side1, side2, side3)) {
            this.side1 = side1;
            this.side2 = side2;
            this.side3 = side3;
        } else {
            // Default to equilateral triangle
            this.side1 = this.side2 = this.side3 = 1.0;
        }
    }

    public Triangle(double side1, double side2, double side3, String color, boolean filled) {
        super(color, filled);
        if (isValidTriangle(side1, side2, side3)) {
            this.side1 = side1;
            this.side2 = side2;
            this.side3 = side3;
        } else {
            this.side1 = this.side2 = this.side3 = 1.0;
        }
    }

    private boolean isValidTriangle(double a, double b, double c) {
        return a + b > c && a + c > b && b + c > a;
    }

    public double getSide1() { return side1; }
    public double getSide2() { return side2; }
    public double getSide3() { return side3; }

    @Override
    public double getArea() {
        // Heron's formula
        double s = (side1 + side2 + side3) / 2;
        return Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
    }

    @Override
    public double getPerimeter() {
        return side1 + side2 + side3;
    }

    @Override
    public String toString() {
        return String.format("Triangle[sides=%.2f,%.2f,%.2f, %s]",
                           side1, side2, side3, super.toString());
    }
}

// ==========================================
// 4. INTERFACE EXAMPLES
// ==========================================

/**
 * Drawable interface demonstrating interface implementation
 */
interface Drawable {
    void draw();
    default void erase() {
        System.out.println("Erasing the drawing...");
    }
}

/**
 * Resizable interface
 */
interface Resizable {
    void resize(double factor);
}

/**
 * ColoredShape interface extending multiple interfaces
 */
interface ColoredShape extends Drawable, Resizable {
    String getColor();
    void setColor(String color);
}

/**
 * Enhanced Circle implementing ColoredShape
 */
class ColoredCircle extends Circle implements ColoredShape {
    public ColoredCircle(double radius, String color) {
        super(radius, color, true);
    }

    @Override
    public void draw() {
        System.out.println("Drawing a " + getColor() + " circle with radius " + getRadius());
    }

    @Override
    public void resize(double factor) {
        setRadius(getRadius() * factor);
        System.out.println("Circle resized by factor " + factor + ". New radius: " + getRadius());
    }

    @Override
    public String getColor() {
        return super.getColor();
    }

    @Override
    public void setColor(String color) {
        super.setColor(color);
    }
}

// ==========================================
// 5. COMPOSITION EXAMPLE
// ==========================================

/**
 * Engine class for composition example
 */
class Engine {
    private String type;
    private int horsepower;

    public Engine(String type, int horsepower) {
        this.type = type;
        this.horsepower = horsepower;
    }

    public void start() {
        System.out.println("Engine started: " + type + " (" + horsepower + " HP)");
    }

    public void stop() {
        System.out.println("Engine stopped");
    }

    public String getType() { return type; }
    public int getHorsepower() { return horsepower; }
}

/**
 * Car class demonstrating composition over inheritance
 */
class Car {
    private String model;
    private Engine engine; // Composition
    private List<Person> passengers;

    public Car(String model, Engine engine) {
        this.model = model;
        this.engine = engine;
        this.passengers = new ArrayList<>();
    }

    public void start() {
        System.out.println("Starting " + model + "...");
        engine.start();
    }

    public void stop() {
        engine.stop();
        System.out.println(model + " stopped");
    }

    public void addPassenger(Person person) {
        if (passengers.size() < 5) { // Max 5 passengers
            passengers.add(person);
            System.out.println(person.getName() + " boarded the " + model);
        } else {
            System.out.println("Car is full!");
        }
    }

    public void removePassenger(Person person) {
        if (passengers.remove(person)) {
            System.out.println(person.getName() + " exited the " + model);
        }
    }

    public void listPassengers() {
        System.out.println("Passengers in " + model + ":");
        for (Person p : passengers) {
            System.out.println("- " + p.getName());
        }
    }

    public String getModel() { return model; }
    public Engine getEngine() { return engine; }
}

// ==========================================
// 6. UTILITY CLASSES AND DEMONSTRATIONS
// ==========================================

/**
 * Shape utility class with static methods
 */
class ShapeUtils {
    public static double getTotalArea(Shape[] shapes) {
        double total = 0;
        for (Shape shape : shapes) {
            total += shape.getArea();
        }
        return total;
    }

    public static Shape getLargestShape(Shape[] shapes) {
        if (shapes.length == 0) return null;

        Shape largest = shapes[0];
        for (int i = 1; i < shapes.length; i++) {
            if (shapes[i].getArea() > largest.getArea()) {
                largest = shapes[i];
            }
        }
        return largest;
    }

    public static void printShapeInfo(Shape shape) {
        System.out.println("Shape: " + shape);
        System.out.println("Area: " + String.format("%.2f", shape.getArea()));
        System.out.println("Perimeter: " + String.format("%.2f", shape.getPerimeter()));
        System.out.println();
    }
}

/**
 * Company class demonstrating complex relationships
 */
class Company {
    private String name;
    private List<Employee> employees;
    private List<Manager> managers;

    public Company(String name) {
        this.name = name;
        this.employees = new ArrayList<>();
        this.managers = new ArrayList<>();
    }

    public void hireEmployee(Employee employee) {
        employees.add(employee);
        System.out.println(employee.getName() + " hired at " + name);
    }

    public void hireManager(Manager manager) {
        managers.add(manager);
        employees.add(manager); // Manager is also an employee
        System.out.println("Manager " + manager.getName() + " hired at " + name);
    }

    public void listAllEmployees() {
        System.out.println("Employees at " + name + ":");
        for (Employee emp : employees) {
            System.out.println("- " + emp);
        }
    }

    public void listManagers() {
        System.out.println("Managers at " + name + ":");
        for (Manager mgr : managers) {
            System.out.println("- " + mgr + " (Team size: " + mgr.getTeamSize() + ")");
        }
    }

    public double getTotalSalaryExpense() {
        double total = 0;
        for (Employee emp : employees) {
            total += emp.getSalary();
        }
        return total;
    }
}

// ==========================================
// MAIN METHOD - DEMONSTRATE ALL CONCEPTS
// ==========================================

public class OOPFundamentalsComplete {
    public static void main(String[] args) {
        System.out.println("==========================================");
        System.out.println("        OOP FUNDAMENTALS COMPLETE");
        System.out.println("==========================================\n");

        // ==========================================
        // 1. BASIC CLASS AND OBJECT DEMO
        // ==========================================
        System.out.println("=== BASIC CLASS AND OBJECT DEMO ===");

        Person person1 = new Person("Alice Johnson", 30, "alice@example.com");
        Person person2 = new Person("Bob Smith", 25, "bob@example.com");
        Person person3 = new Person(person1); // Copy constructor

        person1.introduce();
        person2.introduce();
        System.out.println("Total persons created: " + Person.getPersonCount());
        System.out.println("Person1: " + person1);
        System.out.println("Person3 (copy of Person1): " + person3);
        System.out.println("Are they equal? " + person1.equals(person3));
        System.out.println();

        // ==========================================
        // 2. INHERITANCE DEMO
        // ==========================================
        System.out.println("=== INHERITANCE DEMO ===");

        Employee emp1 = new Employee("Charlie Brown", 28, "charlie@company.com",
                                   "EMP001", "Engineering", 75000.0);
        Employee emp2 = new Employee("Diana Prince", 32, "diana@company.com",
                                   "EMP002", "Design", 70000.0);

        Manager mgr1 = new Manager("Eve Wilson", 35, "eve@company.com",
                                 "MGR001", 95000.0, 15.0);

        emp1.introduce();
        mgr1.introduce();

        // Polymorphism - same method, different behavior
        Person[] people = {emp1, mgr1};
        System.out.println("Polymorphism demonstration:");
        for (Person p : people) {
            p.introduce();
        }

        // Manager specific operations
        mgr1.addSubordinate(emp1);
        mgr1.addSubordinate(emp2);
        System.out.println("Manager's team size: " + mgr1.getTeamSize());
        mgr1.conductPerformanceReview();

        // Employee operations
        emp1.giveRaise(5.0);
        System.out.println("Manager bonus: $" + String.format("%.2f", mgr1.calculateAnnualBonus()));
        System.out.println();

        // ==========================================
        // 3. POLYMORPHISM WITH SHAPES
        // ==========================================
        System.out.println("=== POLYMORPHISM WITH SHAPES ===");

        Shape[] shapes = {
            new Circle(5.0, "red", true),
            new Rectangle(4.0, 6.0, "blue", false),
            new Triangle(3.0, 4.0, 5.0, "green", true),
            new Circle(3.0)
        };

        System.out.println("Shape information:");
        for (Shape shape : shapes) {
            ShapeUtils.printShapeInfo(shape);
        }

        System.out.println("Total area of all shapes: " + String.format("%.2f", ShapeUtils.getTotalArea(shapes)));
        Shape largest = ShapeUtils.getLargestShape(shapes);
        System.out.println("Largest shape: " + largest);
        System.out.println();

        // ==========================================
        // 4. INTERFACE DEMO
        // ==========================================
        System.out.println("=== INTERFACE DEMO ===");

        ColoredCircle coloredCircle = new ColoredCircle(4.0, "purple");
        coloredCircle.draw();
        coloredCircle.resize(1.5);
        coloredCircle.draw();
        coloredCircle.erase(); // Default method from interface
        System.out.println();

        // ==========================================
        // 5. COMPOSITION DEMO
        // ==========================================
        System.out.println("=== COMPOSITION DEMO ===");

        Engine v8Engine = new Engine("V8", 450);
        Car sportsCar = new Car("Ferrari 488", v8Engine);

        sportsCar.start();
        sportsCar.addPassenger(person1);
        sportsCar.addPassenger(person2);
        sportsCar.listPassengers();
        sportsCar.stop();
        System.out.println();

        // ==========================================
        // 6. COMPLEX RELATIONSHIPS DEMO
        // ==========================================
        System.out.println("=== COMPLEX RELATIONSHIPS DEMO ===");

        Company techCorp = new Company("TechCorp");

        // Hire employees and managers
        techCorp.hireEmployee(emp1);
        techCorp.hireEmployee(emp2);
        techCorp.hireManager(mgr1);

        techCorp.listAllEmployees();
        System.out.println();
        techCorp.listManagers();
        System.out.println("Total salary expense: $" + String.format("%.2f", techCorp.getTotalSalaryExpense()));

        System.out.println("\n==========================================");
        System.out.println("        ALL OOP CONCEPTS DEMONSTRATED");
        System.out.println("==========================================");
    }
}

/*
 * COMPILATION AND RUNNING INSTRUCTIONS:
 * ====================================
 *
 * 1. Save this file as: OOPFundamentalsComplete.java
 * 2. Compile: javac OOPFundamentalsComplete.java
 * 3. Run: java OOPFundamentalsComplete
 *
 * EXPECTED OUTPUT:
 * ===============
 * The program demonstrates all OOP concepts including:
 * - Class creation and object instantiation
 * - Encapsulation with getters/setters
 * - Inheritance hierarchy (Person -> Employee -> Manager)
 * - Polymorphism (method overriding, shape calculations)
 * - Abstraction (abstract Shape class)
 * - Interfaces (Drawable, Resizable, ColoredShape)
 * - Composition (Car with Engine)
 * - Complex object relationships (Company with employees/managers)
 *
 * KEY LEARNING POINTS:
 * ===================
 * 1. Four pillars of OOP: Encapsulation, Inheritance, Polymorphism, Abstraction
 * 2. When to use inheritance vs composition
 * 3. Method overriding vs method overloading
 * 4. Abstract classes vs interfaces
 * 5. Proper encapsulation and data hiding
 * 6. Polymorphic behavior in collections and method parameters
 *
 * INTERVIEW PREPARATION:
 * =====================
 * - Explain the differences between various OOP concepts
 * - Design class hierarchies for real-world problems
 * - Understand when to use abstract classes vs interfaces
 * - Know the implications of inheritance (tight coupling)
 * - Be able to implement design patterns using OOP principles
 *
 * COMMON INTERVIEW QUESTIONS:
 * ==========================
 * - What is the difference between abstract class and interface?
 * - When would you use composition over inheritance?
 * - How does polymorphism work in Java?
 * - What is encapsulation and why is it important?
 * - How do you prevent inheritance in Java?
 */