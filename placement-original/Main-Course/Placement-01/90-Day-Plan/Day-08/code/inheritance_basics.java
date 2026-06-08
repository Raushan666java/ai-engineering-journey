/**
 * Day 8: Inheritance Basics
 * 
 * Topics Covered:
 * - Single inheritance with extends keyword
 * - Constructor chaining with super()
 * - Method overriding with @Override
 * - Protected access modifier
 * - Object class methods (toString, equals)
 */

// Base class - Vehicle
class Vehicle {
    protected String brand;
    protected int year;
    protected double price;
    
    // Constructor
    public Vehicle(String brand, int year, double price) {
        this.brand = brand;
        this.year = year;
        this.price = price;
        System.out.println("Vehicle constructor called");
    }
    
    // Method to display vehicle info
    public void displayInfo() {
        System.out.println("Brand: " + brand);
        System.out.println("Year: " + year);
        System.out.println("Price: $" + price);
    }
    
    // Method to start vehicle
    public void start() {
        System.out.println(brand + " is starting...");
    }
    
    // Method to stop vehicle
    public void stop() {
        System.out.println(brand + " is stopping...");
    }
    
    // Override toString from Object class
    @Override
    public String toString() {
        return brand + " (" + year + ") - $" + price;
    }
}

// Derived class - Car extends Vehicle
class Car extends Vehicle {
    protected int doors;
    protected String fuelType;
    
    // Constructor with super() call
    public Car(String brand, int year, double price, int doors, String fuelType) {
        super(brand, year, price); // Call parent constructor
        this.doors = doors;
        this.fuelType = fuelType;
        System.out.println("Car constructor called");
    }
    
    // Override displayInfo method
    @Override
    public void displayInfo() {
        super.displayInfo(); // Call parent method
        System.out.println("Doors: " + doors);
        System.out.println("Fuel Type: " + fuelType);
    }
    
    // Override start method
    @Override
    public void start() {
        System.out.println("Checking fuel level...");
        super.start();
        System.out.println("Car engine running smoothly");
    }
    
    // Car-specific method
    public void honk() {
        System.out.println("Beep beep!");
    }
    
    // Override toString
    @Override
    public String toString() {
        return super.toString() + " | " + doors + " doors, " + fuelType;
    }
}

// Further derived class - SportsCar extends Car
class SportsCar extends Car {
    private int topSpeed;
    private boolean turboEnabled;
    
    // Constructor with chained super() calls
    public SportsCar(String brand, int year, double price, int doors, 
                     String fuelType, int topSpeed, boolean turboEnabled) {
        super(brand, year, price, doors, fuelType); // Call Car constructor
        this.topSpeed = topSpeed;
        this.turboEnabled = turboEnabled;
        System.out.println("SportsCar constructor called");
    }
    
    // Override displayInfo - three levels of inheritance
    @Override
    public void displayInfo() {
        super.displayInfo(); // Call Car's displayInfo
        System.out.println("Top Speed: " + topSpeed + " mph");
        System.out.println("Turbo: " + (turboEnabled ? "Enabled" : "Disabled"));
    }
    
    // Override start method
    @Override
    public void start() {
        System.out.println("Sports car starting sequence initiated...");
        super.start();
        if (turboEnabled) {
            System.out.println("TURBO ENGAGED!");
        }
    }
    
    // SportsCar-specific method
    public void activateTurbo() {
        if (!turboEnabled) {
            turboEnabled = true;
            System.out.println("Turbo activated! Speed boost enabled!");
        } else {
            System.out.println("Turbo already active!");
        }
    }
    
    // Override toString
    @Override
    public String toString() {
        return super.toString() + " | Top Speed: " + topSpeed + " mph";
    }
    
    // Override equals method from Object class
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        
        SportsCar other = (SportsCar) obj;
        return this.brand.equals(other.brand) && 
               this.year == other.year && 
               this.topSpeed == other.topSpeed;
    }
    
    // Override hashCode (should override together with equals)
    @Override
    public int hashCode() {
        int result = brand.hashCode();
        result = 31 * result + year;
        result = 31 * result + topSpeed;
        return result;
    }
}

// Demonstrating protected access
class Motorcycle extends Vehicle {
    private int engineCC;
    
    public Motorcycle(String brand, int year, double price, int engineCC) {
        super(brand, year, price);
        this.engineCC = engineCC;
    }
    
    // Can access protected members from parent
    public void showProtectedAccess() {
        System.out.println("Accessing protected members:");
        System.out.println("Brand: " + brand); // Protected access
        System.out.println("Year: " + year);   // Protected access
        System.out.println("Price: " + price); // Protected access
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Engine: " + engineCC + "cc");
    }
}

// Main class to demonstrate inheritance
public class inheritance_basics {
    public static void main(String[] args) {
        System.out.println("=== Inheritance Basics Demo ===\n");
        
        // 1. Creating Vehicle object
        System.out.println("1. Creating a Vehicle:");
        Vehicle vehicle = new Vehicle("Generic", 2020, 15000);
        vehicle.displayInfo();
        vehicle.start();
        vehicle.stop();
        System.out.println();
        
        // 2. Creating Car object - constructor chaining
        System.out.println("2. Creating a Car (constructor chaining):");
        Car car = new Car("Toyota", 2022, 25000, 4, "Hybrid");
        car.displayInfo();
        car.start();
        car.honk();
        car.stop();
        System.out.println();
        
        // 3. Creating SportsCar object - three-level inheritance
        System.out.println("3. Creating a SportsCar (three-level inheritance):");
        SportsCar sportsCar = new SportsCar("Ferrari", 2023, 250000, 2, "Petrol", 
                                           220, false);
        sportsCar.displayInfo();
        System.out.println();
        
        // 4. Method overriding demonstration
        System.out.println("4. Method Overriding:");
        sportsCar.start();
        sportsCar.activateTurbo();
        sportsCar.start(); // Start again with turbo enabled
        System.out.println();
        
        // 5. toString() method demonstration
        System.out.println("5. toString() Method:");
        System.out.println("Vehicle: " + vehicle);
        System.out.println("Car: " + car);
        System.out.println("SportsCar: " + sportsCar);
        System.out.println();
        
        // 6. equals() and hashCode() demonstration
        System.out.println("6. equals() and hashCode():");
        SportsCar sc1 = new SportsCar("Ferrari", 2023, 250000, 2, "Petrol", 220, false);
        SportsCar sc2 = new SportsCar("Ferrari", 2023, 260000, 2, "Petrol", 220, true);
        SportsCar sc3 = new SportsCar("Lamborghini", 2023, 270000, 2, "Petrol", 230, false);
        
        System.out.println("sc1 equals sc2: " + sc1.equals(sc2)); // True (same brand, year, speed)
        System.out.println("sc1 equals sc3: " + sc1.equals(sc3)); // False (different brand)
        System.out.println("sc1 hashCode: " + sc1.hashCode());
        System.out.println("sc2 hashCode: " + sc2.hashCode());
        System.out.println();
        
        // 7. Protected access demonstration
        System.out.println("7. Protected Access:");
        Motorcycle motorcycle = new Motorcycle("Harley", 2021, 18000, 1200);
        motorcycle.showProtectedAccess();
        System.out.println();
        
        // 8. Type checking with instanceof
        System.out.println("8. Type Checking with instanceof:");
        System.out.println("sportsCar instanceof SportsCar: " + (sportsCar instanceof SportsCar));
        System.out.println("sportsCar instanceof Car: " + (sportsCar instanceof Car));
        System.out.println("sportsCar instanceof Vehicle: " + (sportsCar instanceof Vehicle));
        System.out.println("sportsCar instanceof Object: " + (sportsCar instanceof Object));
        System.out.println("car instanceof SportsCar: " + (car instanceof SportsCar)); // False
        System.out.println();
        
        // 9. Accessing inherited methods
        System.out.println("9. Inherited Methods:");
        sportsCar.honk(); // Inherited from Car
        sportsCar.stop(); // Inherited from Vehicle
        System.out.println();
        
        System.out.println("=== Inheritance Demo Complete ===");
    }
}

/**
 * Key Concepts Demonstrated:
 * 
 * 1. Single Inheritance:
 *    - Vehicle → Car → SportsCar (three-level hierarchy)
 *    - Each child inherits all accessible members from parent
 * 
 * 2. Constructor Chaining:
 *    - super() calls parent constructor
 *    - Must be first statement in constructor
 *    - Constructors execute from parent to child
 * 
 * 3. Method Overriding:
 *    - Child class provides specific implementation
 *    - @Override annotation ensures correct signature
 *    - Can call parent method with super.methodName()
 * 
 * 4. Access Modifiers:
 *    - protected: accessible in subclasses
 *    - private: not accessible in subclasses
 *    - public: accessible everywhere
 * 
 * 5. Object Class Methods:
 *    - toString() for string representation
 *    - equals() for object comparison
 *    - hashCode() must be consistent with equals()
 * 
 * 6. instanceof Operator:
 *    - Checks object type at runtime
 *    - Returns true for object's class and all parent classes
 * 
 * Interview Notes:
 * - Java supports only single inheritance (one parent class)
 * - All classes implicitly extend Object if no parent specified
 * - Constructors are not inherited but can be called with super()
 * - Cannot override private, static, or final methods
 * - Cannot reduce visibility when overriding (public → protected not allowed)
 */
