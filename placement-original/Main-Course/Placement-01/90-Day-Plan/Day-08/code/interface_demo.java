/**
 * Day 8: Interfaces in Java
 * 
 * Topics Covered:
 * - Interface declaration and implementation
 * - Multiple interface implementation
 * - Default methods in interfaces (Java 8+)
 * - Static methods in interfaces
 * - Functional interfaces
 * - Interface vs Abstract class
 */

// Basic interface - Drawable
interface Drawable {
    // Abstract method (public abstract by default)
    void draw();
    
    // Default method (Java 8+)
    default void display() {
        System.out.println("Displaying drawable object");
    }
    
    // Static method (Java 8+)
    static void info() {
        System.out.println("Drawable interface: Represents objects that can be drawn");
    }
}

// Another interface - Movable
interface Movable {
    void move(int x, int y);
    
    default void reset() {
        move(0, 0);
        System.out.println("Position reset to origin");
    }
}

// Interface with constants
interface Resizable {
    // Constants (public static final by default)
    double MIN_SIZE = 1.0;
    double MAX_SIZE = 1000.0;
    
    void resize(double factor);
    
    default boolean isValidSize(double size) {
        return size >= MIN_SIZE && size <= MAX_SIZE;
    }
}

// Class implementing single interface
class Point implements Drawable {
    private int x, y;
    
    public Point(int x, int y) {
        this.x = x;
        this.y = y;
    }
    
    @Override
    public void draw() {
        System.out.println("Drawing point at (" + x + ", " + y + ")");
    }
    
    @Override
    public String toString() {
        return "Point(" + x + ", " + y + ")";
    }
}

// Class implementing multiple interfaces
class Shape2D implements Drawable, Movable, Resizable {
    private String name;
    private int x, y;
    private double size;
    
    public Shape2D(String name, int x, int y, double size) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.size = size;
    }
    
    @Override
    public void draw() {
        System.out.println("Drawing " + name + " at (" + x + ", " + y + 
                         ") with size " + size);
    }
    
    @Override
    public void move(int x, int y) {
        this.x = x;
        this.y = y;
        System.out.println(name + " moved to (" + x + ", " + y + ")");
    }
    
    @Override
    public void resize(double factor) {
        double newSize = size * factor;
        if (isValidSize(newSize)) {
            size = newSize;
            System.out.println(name + " resized to " + size);
        } else {
            System.out.println("Invalid size: " + newSize);
        }
    }
    
    // Can override default method
    @Override
    public void display() {
        System.out.println("Shape: " + name + " at (" + x + ", " + y + 
                         "), size: " + size);
    }
}

// Functional Interface (exactly one abstract method)
@FunctionalInterface
interface Calculator {
    int calculate(int a, int b);
    
    // Can have default methods
    default void printResult(int a, int b) {
        System.out.println("Result: " + calculate(a, b));
    }
    
    // Can have static methods
    static void displayInfo() {
        System.out.println("Calculator interface for arithmetic operations");
    }
}

// Implementing functional interface traditionally
class Addition implements Calculator {
    @Override
    public int calculate(int a, int b) {
        return a + b;
    }
}

// Interface extending other interfaces
interface Advanced3D extends Drawable, Movable {
    void rotateZ(double angle);
    
    default void performFullRotation() {
        rotateZ(360);
        System.out.println("Completed full rotation");
    }
}

// Class implementing extended interface
class Cube implements Advanced3D {
    private String name;
    private int x, y, z;
    private double angle;
    
    public Cube(String name) {
        this.name = name;
        this.x = this.y = this.z = 0;
        this.angle = 0;
    }
    
    @Override
    public void draw() {
        System.out.println("Drawing " + name + " at (" + x + ", " + y + ", " + z + 
                         ") rotated " + angle + " degrees");
    }
    
    @Override
    public void move(int x, int y) {
        this.x = x;
        this.y = y;
        System.out.println(name + " moved in 2D to (" + x + ", " + y + ")");
    }
    
    public void move3D(int x, int y, int z) {
        this.x = x;
        this.y = y;
        this.z = z;
        System.out.println(name + " moved in 3D to (" + x + ", " + y + ", " + z + ")");
    }
    
    @Override
    public void rotateZ(double angle) {
        this.angle = angle;
        System.out.println(name + " rotated to " + angle + " degrees");
    }
}

// Interface for comparison
interface Comparable2 {
    int compareTo(Object obj);
}

// Class implementing Comparable2
class Student implements Comparable2 {
    private String name;
    private int marks;
    
    public Student(String name, int marks) {
        this.name = name;
        this.marks = marks;
    }
    
    @Override
    public int compareTo(Object obj) {
        Student other = (Student) obj;
        return this.marks - other.marks;
    }
    
    @Override
    public String toString() {
        return name + " (" + marks + " marks)";
    }
    
    public int getMarks() { return marks; }
}

// Main class demonstrating interfaces
public class interface_demo {
    public static void main(String[] args) {
        System.out.println("=== Interface Demo ===\n");
        
        // 1. Single interface implementation
        System.out.println("1. Single Interface Implementation:");
        Point point = new Point(10, 20);
        point.draw();
        point.display(); // Default method
        Drawable.info(); // Static method
        System.out.println();
        
        // 2. Multiple interface implementation
        System.out.println("2. Multiple Interface Implementation:");
        Shape2D circle = new Shape2D("Circle", 50, 50, 10.0);
        circle.draw();
        circle.move(100, 100);
        circle.resize(1.5);
        circle.display(); // Overridden default method
        circle.reset(); // Default method from Movable
        System.out.println();
        
        // 3. Interface constants
        System.out.println("3. Interface Constants:");
        System.out.println("MIN_SIZE: " + Resizable.MIN_SIZE);
        System.out.println("MAX_SIZE: " + Resizable.MAX_SIZE);
        circle.resize(1000); // Test with max value
        circle.resize(0.0001); // Test with invalid value
        System.out.println();
        
        // 4. Functional Interface - Traditional implementation
        System.out.println("4. Functional Interface (Traditional):");
        Calculator add = new Addition();
        System.out.println("10 + 5 = " + add.calculate(10, 5));
        add.printResult(10, 5);
        Calculator.displayInfo();
        System.out.println();
        
        // 5. Functional Interface - Lambda expression
        System.out.println("5. Functional Interface (Lambda):");
        Calculator multiply = (a, b) -> a * b;
        System.out.println("10 * 5 = " + multiply.calculate(10, 5));
        multiply.printResult(10, 5);
        
        Calculator subtract = (a, b) -> a - b;
        System.out.println("10 - 5 = " + subtract.calculate(10, 5));
        
        Calculator divide = (a, b) -> a / b;
        System.out.println("10 / 5 = " + divide.calculate(10, 5));
        System.out.println();
        
        // 6. Interface extending multiple interfaces
        System.out.println("6. Extended Interface:");
        Cube cube = new Cube("MyCube");
        cube.draw();
        cube.move(10, 20);
        cube.move3D(10, 20, 30);
        cube.rotateZ(45);
        cube.performFullRotation(); // Default method
        System.out.println();
        
        // 7. Polymorphism with interfaces
        System.out.println("7. Polymorphism with Interfaces:");
        Drawable[] drawables = {
            new Point(5, 10),
            new Shape2D("Square", 20, 30, 5.0),
            new Cube("SmallCube")
        };
        
        System.out.println("Drawing all drawable objects:");
        for (Drawable d : drawables) {
            d.draw();
        }
        System.out.println();
        
        // 8. Interface type checking
        System.out.println("8. Interface Type Checking:");
        Shape2D shape = new Shape2D("Triangle", 0, 0, 8.0);
        System.out.println("shape instanceof Drawable: " + (shape instanceof Drawable));
        System.out.println("shape instanceof Movable: " + (shape instanceof Movable));
        System.out.println("shape instanceof Resizable: " + (shape instanceof Resizable));
        System.out.println();
        
        // 9. Comparable interface usage
        System.out.println("9. Comparable Interface:");
        Student[] students = {
            new Student("Alice", 85),
            new Student("Bob", 92),
            new Student("Charlie", 78),
            new Student("David", 95)
        };
        
        System.out.println("Students before sorting:");
        for (Student s : students) {
            System.out.println(s);
        }
        
        // Simple bubble sort using compareTo
        for (int i = 0; i < students.length - 1; i++) {
            for (int j = 0; j < students.length - 1 - i; j++) {
                if (students[j].compareTo(students[j + 1]) > 0) {
                    Student temp = students[j];
                    students[j] = students[j + 1];
                    students[j + 1] = temp;
                }
            }
        }
        
        System.out.println("\nStudents after sorting by marks:");
        for (Student s : students) {
            System.out.println(s);
        }
        System.out.println();
        
        // 10. Default method conflict resolution
        System.out.println("10. Default Method Behavior:");
        Shape2D rect = new Shape2D("Rectangle", 10, 10, 15.0);
        rect.display(); // Uses overridden version
        rect.reset();   // Uses Movable's default method
        System.out.println();
        
        System.out.println("=== Interface Demo Complete ===");
    }
}

/**
 * Interface Key Concepts:
 * 
 * 1. Interface Basics:
 *    - Blueprint/contract for classes
 *    - All methods public abstract by default (pre-Java 8)
 *    - All variables public static final by default
 *    - Cannot be instantiated
 *    - Supports multiple implementation
 * 
 * 2. Default Methods (Java 8+):
 *    - Provide implementation in interface
 *    - Allow interface evolution without breaking existing code
 *    - Can be overridden by implementing class
 *    - Syntax: default void methodName() { }
 * 
 * 3. Static Methods (Java 8+):
 *    - Utility methods in interface
 *    - Called using Interface.methodName()
 *    - Cannot be inherited or overridden
 *    - Syntax: static void methodName() { }
 * 
 * 4. Functional Interface:
 *    - Has exactly one abstract method
 *    - Can have multiple default/static methods
 *    - Used with lambda expressions
 *    - @FunctionalInterface annotation (optional)
 * 
 * 5. Multiple Interface Implementation:
 *    - Class can implement multiple interfaces
 *    - Solves multiple inheritance problem
 *    - Syntax: class MyClass implements Interface1, Interface2
 * 
 * 6. Interface Extending Interfaces:
 *    - Interface can extend multiple interfaces
 *    - Inherits all abstract methods
 *    - Syntax: interface A extends B, C
 * 
 * Interface vs Abstract Class:
 * 
 * Interface:
 * ✓ Multiple implementation
 * ✓ No state (only constants)
 * ✓ No constructors
 * ✓ All methods public
 * ✓ Use for "can-do" capability
 * ✓ Complete abstraction (pre-Java 8)
 * 
 * Abstract Class:
 * ✓ Single inheritance
 * ✓ Can have state (instance variables)
 * ✓ Can have constructors
 * ✓ Any access modifier
 * ✓ Use for "is-a" relationship
 * ✓ Partial implementation
 * 
 * When to Use Interface:
 * - Unrelated classes implement same behavior
 * - Multiple inheritance of type needed
 * - Specify behavior without implementation
 * - Take advantage of multiple implementation
 * 
 * Interview Questions:
 * 
 * Q: Can interface have constructors?
 * A: No, interfaces cannot be instantiated
 * 
 * Q: Can interface extend class?
 * A: No, only classes can extend classes
 * 
 * Q: Can class implement multiple interfaces?
 * A: Yes, that's the main advantage
 * 
 * Q: What if two interfaces have same default method?
 * A: Class must override the method to resolve conflict
 * 
 * Q: Can interface have private methods? (Java 9+)
 * A: Yes, private methods for code reuse in default methods
 * 
 * Q: Difference between abstract class and interface?
 * A: Abstract class: single inheritance, state, partial implementation
 *    Interface: multiple implementation, no state, contract only
 */
