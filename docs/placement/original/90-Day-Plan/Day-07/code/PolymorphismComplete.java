/**
 * DAY 7: POLYMORPHISM - COMPLETE GUIDE
 * 
 * What is Polymorphism?
 * - Poly = Many, Morphism = Forms
 * - Ability of objects to take many forms
 * - Same method behaves differently based on object type
 * - Foundation of flexible, extensible code
 * 
 * Types of Polymorphism:
 * 1. Compile-Time Polymorphism (Static) - Method Overloading
 * 2. Runtime Polymorphism (Dynamic) - Method Overriding
 * 
 * Topics Covered:
 * 1. What is Polymorphism & Types
 * 2. Method Overloading (Compile-time)
 * 3. Method Overriding (Runtime)
 * 4. Dynamic Method Dispatch
 * 5. Upcasting and Downcasting
 * 6. instanceof Operator
 * 7. Covariant Return Types
 * 8. Polymorphism with Interfaces (Preview)
 * 9. Real-World Polymorphism Examples
 * 10. Benefits and Best Practices
 */

public class PolymorphismComplete {
    
    public static void main(String[] args) {
        System.out.println("╔═══════════════════════════════════════════════════════════╗");
        System.out.println("║        DAY 7: POLYMORPHISM - COMPLETE GUIDE               ║");
        System.out.println("╚═══════════════════════════════════════════════════════════╝\n");
        
        demonstratePolymorphismIntro();
        demonstrateMethodOverloading();
        demonstrateMethodOverriding();
        demonstrateDynamicDispatch();
        demonstrateCasting();
        demonstrateInstanceof();
        demonstrateCovariantReturn();
        demonstrateRealWorldPolymorphism();
        demonstrateBenefits();
    }
    
    // ========================================
    // SECTION 1: POLYMORPHISM INTRODUCTION
    // ========================================
    
    static void demonstratePolymorphismIntro() {
        System.out.println("=".repeat(70));
        System.out.println("SECTION 1: WHAT IS POLYMORPHISM?");
        System.out.println("=".repeat(70));
        
        System.out.println("\n📚 Definition:");
        System.out.println("Polymorphism = Poly (many) + Morphism (forms)");
        System.out.println("The ability of objects to take many forms");
        
        System.out.println("\n🎯 Two Types:");
        System.out.println("1. COMPILE-TIME (Static) Polymorphism");
        System.out.println("   - Method Overloading");
        System.out.println("   - Operator Overloading (not in Java)");
        System.out.println("   - Resolved at compile time");
        
        System.out.println("\n2. RUNTIME (Dynamic) Polymorphism");
        System.out.println("   - Method Overriding");
        System.out.println("   - Dynamic method dispatch");
        System.out.println("   - Resolved at runtime");
        
        System.out.println("\n💡 Quick Example:");
        System.out.println("Parent ref = new Child();");
        System.out.println("ref.method();  // Calls Child's overridden method");
        
        System.out.println();
    }
    
    // ========================================
    // SECTION 2: METHOD OVERLOADING
    // ========================================
    
    static void demonstrateMethodOverloading() {
        System.out.println("=".repeat(70));
        System.out.println("SECTION 2: METHOD OVERLOADING (Compile-Time Polymorphism)");
        System.out.println("=".repeat(70));
        
        System.out.println("\n📚 Method Overloading:");
        System.out.println("- Same method name, different parameters");
        System.out.println("- Different parameter types OR number OR order");
        System.out.println("- Return type alone is NOT enough");
        System.out.println("- Resolved at compile time");
        
        System.out.println("\n📝 Rules:");
        System.out.println("✓ Different parameter count");
        System.out.println("✓ Different parameter types");
        System.out.println("✓ Different parameter order");
        System.out.println("✗ Return type difference only (NOT valid)");
        
        System.out.println("\n📝 Example - Calculator:");
        Calculator calc = new Calculator();
        System.out.println("5 + 3 = " + calc.add(5, 3));
        System.out.println("5.5 + 3.2 = " + calc.add(5.5, 3.2));
        System.out.println("5 + 3 + 7 = " + calc.add(5, 3, 7));
        System.out.println("\"Hello\" + \"World\" = " + calc.add("Hello", "World"));
        
        System.out.println("\n✨ Same method name (add), different parameter types!");
        System.out.println("   Compiler decides which method to call based on arguments");
        System.out.println();
    }
    
    // ========================================
    // SECTION 3: METHOD OVERRIDING
    // ========================================
    
    static void demonstrateMethodOverriding() {
        System.out.println("=".repeat(70));
        System.out.println("SECTION 3: METHOD OVERRIDING (Runtime Polymorphism)");
        System.out.println("=".repeat(70));
        
        System.out.println("\n📚 Method Overriding:");
        System.out.println("- Child class provides specific implementation");
        System.out.println("- Same method signature as parent");
        System.out.println("- @Override annotation recommended");
        System.out.println("- Enables runtime polymorphism");
        
        System.out.println("\n📝 Rules:");
        System.out.println("✓ Same method name");
        System.out.println("✓ Same parameters (count, type, order)");
        System.out.println("✓ Same or covariant return type");
        System.out.println("✓ Access level: same or more permissive");
        System.out.println("✗ Cannot override final methods");
        System.out.println("✗ Cannot override static methods");
        System.out.println("✗ Cannot override private methods");
        
        System.out.println("\n📝 Example - Animal Sounds:");
        AnimalPoly animal = new AnimalPoly();
        animal.makeSound();
        
        DogPoly dog = new DogPoly();
        dog.makeSound();  // Overridden
        
        CatPoly cat = new CatPoly();
        cat.makeSound();  // Overridden
        
        System.out.println("\n✨ Each animal makes its own sound!");
        System.out.println();
    }
    
    // ========================================
    // SECTION 4: DYNAMIC METHOD DISPATCH
    // ========================================
    
    static void demonstrateDynamicDispatch() {
        System.out.println("=".repeat(70));
        System.out.println("SECTION 4: DYNAMIC METHOD DISPATCH");
        System.out.println("=".repeat(70));
        
        System.out.println("\n📚 Dynamic Method Dispatch:");
        System.out.println("- Runtime polymorphism mechanism");
        System.out.println("- Parent reference, child object");
        System.out.println("- Method called is determined at RUNTIME");
        System.out.println("- Based on actual object type, not reference type");
        
        System.out.println("\n💡 Syntax:");
        System.out.println("Parent ref = new Child();");
        System.out.println("ref.method();  // Child's version called");
        
        System.out.println("\n📝 Example - Shape Polymorphism:");
        
        // Parent reference, child objects
        ShapePoly shape1 = new CirclePoly(5);
        ShapePoly shape2 = new RectanglePoly(4, 6);
        ShapePoly shape3 = new TrianglePoly(3, 4);
        
        System.out.println("Shape 1:");
        shape1.draw();
        shape1.calculateArea();
        
        System.out.println("\nShape 2:");
        shape2.draw();
        shape2.calculateArea();
        
        System.out.println("\nShape 3:");
        shape3.draw();
        shape3.calculateArea();
        
        System.out.println("\n✨ Same reference type (ShapePoly), different behaviors!");
        System.out.println("   JVM determines which method to call at runtime");
        
        System.out.println("\n📝 Example - Array of Animals:");
        AnimalPoly[] animals = {
            new DogPoly(),
            new CatPoly(),
            new BirdPoly()
        };
        
        System.out.println("\nAll animals making sounds:");
        for (AnimalPoly animal : animals) {
            animal.makeSound();  // Each calls its own version
        }
        
        System.out.println();
    }
    
    // ========================================
    // SECTION 5: UPCASTING AND DOWNCASTING
    // ========================================
    
    static void demonstrateCasting() {
        System.out.println("=".repeat(70));
        System.out.println("SECTION 5: UPCASTING AND DOWNCASTING");
        System.out.println("=".repeat(70));
        
        System.out.println("\n📚 UPCASTING (Implicit):");
        System.out.println("- Child object → Parent reference");
        System.out.println("- Automatic, no cast needed");
        System.out.println("- Safe operation");
        System.out.println("- Example: Animal animal = new Dog();");
        
        System.out.println("\n📝 Upcasting Example:");
        VehiclePoly vehicle = new CarPoly();  // Upcasting (implicit)
        vehicle.start();
        vehicle.stop();
        // vehicle.openTrunk();  // ✗ Not accessible (parent reference)
        
        System.out.println("\n📚 DOWNCASTING (Explicit):");
        System.out.println("- Parent reference → Child reference");
        System.out.println("- Manual cast required");
        System.out.println("- Can cause ClassCastException if wrong type");
        System.out.println("- Use instanceof to check first");
        System.out.println("- Example: Dog dog = (Dog) animal;");
        
        System.out.println("\n📝 Downcasting Example:");
        VehiclePoly v = new CarPoly();
        
        if (v instanceof CarPoly) {
            CarPoly c = (CarPoly) v;  // Downcasting (explicit)
            c.openTrunk();
        }
        
        System.out.println("\n⚠️ Unsafe Downcasting:");
        try {
            VehiclePoly v2 = new BikePoly();
            CarPoly c2 = (CarPoly) v2;  // ClassCastException!
        } catch (ClassCastException e) {
            System.out.println("Error: Cannot cast Bike to Car!");
        }
        
        System.out.println();
    }
    
    // ========================================
    // SECTION 6: INSTANCEOF OPERATOR
    // ========================================
    
    static void demonstrateInstanceof() {
        System.out.println("=".repeat(70));
        System.out.println("SECTION 6: INSTANCEOF OPERATOR");
        System.out.println("=".repeat(70));
        
        System.out.println("\n📚 instanceof Operator:");
        System.out.println("- Checks if object is instance of specific class");
        System.out.println("- Returns boolean (true/false)");
        System.out.println("- Safe type checking before casting");
        System.out.println("- Syntax: object instanceof ClassName");
        
        System.out.println("\n📝 Example:");
        AnimalPoly animal1 = new DogPoly();
        AnimalPoly animal2 = new CatPoly();
        
        System.out.println("animal1 instanceof DogPoly: " + (animal1 instanceof DogPoly));
        System.out.println("animal1 instanceof CatPoly: " + (animal1 instanceof CatPoly));
        System.out.println("animal1 instanceof AnimalPoly: " + (animal1 instanceof AnimalPoly));
        
        System.out.println("\n📝 Safe Downcasting with instanceof:");
        checkAndCallSpecificMethod(new DogPoly());
        checkAndCallSpecificMethod(new CatPoly());
        checkAndCallSpecificMethod(new BirdPoly());
        
        System.out.println();
    }
    
    static void checkAndCallSpecificMethod(AnimalPoly animal) {
        System.out.println("\nChecking animal type:");
        animal.makeSound();
        
        if (animal instanceof DogPoly) {
            DogPoly dog = (DogPoly) animal;
            dog.fetch();
        } else if (animal instanceof CatPoly) {
            CatPoly cat = (CatPoly) animal;
            cat.scratch();
        } else if (animal instanceof BirdPoly) {
            BirdPoly bird = (BirdPoly) animal;
            bird.fly();
        }
    }
    
    // ========================================
    // SECTION 7: COVARIANT RETURN TYPES
    // ========================================
    
    static void demonstrateCovariantReturn() {
        System.out.println("=".repeat(70));
        System.out.println("SECTION 7: COVARIANT RETURN TYPES");
        System.out.println("=".repeat(70));
        
        System.out.println("\n📚 Covariant Return Type:");
        System.out.println("- Overriding method can return subtype of parent's return type");
        System.out.println("- Introduced in Java 5");
        System.out.println("- More specific return type in child class");
        System.out.println("- Example: Parent returns Animal, Child returns Dog");
        
        System.out.println("\n📝 Example:");
        AnimalFactory factory1 = new AnimalFactory();
        AnimalPoly animal = factory1.createAnimal();
        animal.makeSound();
        
        System.out.println();
        DogFactory factory2 = new DogFactory();
        DogPoly dog = factory2.createAnimal();  // Returns DogPoly, not AnimalPoly
        dog.makeSound();
        dog.fetch();
        
        System.out.println("\n✨ Child method returns more specific type (DogPoly instead of AnimalPoly)");
        System.out.println();
    }
    
    // ========================================
    // SECTION 8: REAL-WORLD POLYMORPHISM
    // ========================================
    
    static void demonstrateRealWorldPolymorphism() {
        System.out.println("=".repeat(70));
        System.out.println("SECTION 8: REAL-WORLD POLYMORPHISM EXAMPLES");
        System.out.println("=".repeat(70));
        
        System.out.println("\n📝 Example 1 - Payment Processing:");
        PaymentProcessor[] payments = {
            new CreditCardPayment(),
            new PayPalPayment(),
            new BitcoinPayment()
        };
        
        for (PaymentProcessor payment : payments) {
            payment.processPayment(100.0);
            payment.generateReceipt();
            System.out.println();
        }
        
        System.out.println("📝 Example 2 - Notification System:");
        NotificationService[] notifications = {
            new EmailNotification(),
            new SMSNotification(),
            new PushNotification()
        };
        
        String message = "Hello, polymorphism!";
        for (NotificationService notif : notifications) {
            notif.send(message);
        }
        
        System.out.println("\n📝 Example 3 - File Exporters:");
        DataExporter[] exporters = {
            new PDFExporter(),
            new ExcelExporter(),
            new JSONExporter()
        };
        
        System.out.println();
        String[] data = {"Data1", "Data2", "Data3"};
        for (DataExporter exporter : exporters) {
            exporter.export(data);
        }
        
        System.out.println();
    }
    
    // ========================================
    // SECTION 9: BENEFITS AND BEST PRACTICES
    // ========================================
    
    static void demonstrateBenefits() {
        System.out.println("=".repeat(70));
        System.out.println("SECTION 9: BENEFITS AND BEST PRACTICES");
        System.out.println("=".repeat(70));
        
        System.out.println("\n🎯 Benefits of Polymorphism:");
        System.out.println("1. Code Reusability - Write once, use with multiple types");
        System.out.println("2. Flexibility - Easy to add new types");
        System.out.println("3. Maintainability - Changes in one place");
        System.out.println("4. Extensibility - Open for extension");
        System.out.println("5. Loose Coupling - Depend on abstractions");
        
        System.out.println("\n💡 Best Practices:");
        System.out.println("✓ Program to interface, not implementation");
        System.out.println("✓ Use @Override annotation");
        System.out.println("✓ Check with instanceof before downcasting");
        System.out.println("✓ Keep method signatures consistent");
        System.out.println("✓ Use polymorphism for related types");
        System.out.println("✗ Avoid excessive downcasting");
        System.out.println("✗ Don't override unrelated methods");
        
        System.out.println("\n🔥 When to Use:");
        System.out.println("- Different implementations of same behavior");
        System.out.println("- Plugin systems");
        System.out.println("- Strategy pattern");
        System.out.println("- Factory pattern");
        System.out.println("- Collections of related objects");
        
        System.out.println();
    }
}

// ============================================
// SECTION 2: METHOD OVERLOADING
// ============================================

class Calculator {
    // Overloaded add methods
    int add(int a, int b) {
        return a + b;
    }
    
    double add(double a, double b) {
        return a + b;
    }
    
    int add(int a, int b, int c) {
        return a + b + c;
    }
    
    String add(String a, String b) {
        return a + b;
    }
}

// ============================================
// SECTION 3 & 4: METHOD OVERRIDING & DYNAMIC DISPATCH
// ============================================

class AnimalPoly {
    void makeSound() {
        System.out.println("Animal makes a sound");
    }
}

class DogPoly extends AnimalPoly {
    @Override
    void makeSound() {
        System.out.println("Dog barks: Woof!");
    }
    
    void fetch() {
        System.out.println("Dog fetches the ball");
    }
}

class CatPoly extends AnimalPoly {
    @Override
    void makeSound() {
        System.out.println("Cat meows: Meow!");
    }
    
    void scratch() {
        System.out.println("Cat scratches the furniture");
    }
}

class BirdPoly extends AnimalPoly {
    @Override
    void makeSound() {
        System.out.println("Bird chirps: Chirp!");
    }
    
    void fly() {
        System.out.println("Bird flies in the sky");
    }
}

// Shape polymorphism
class ShapePoly {
    void draw() {
        System.out.println("Drawing a generic shape");
    }
    
    void calculateArea() {
        System.out.println("Area not defined");
    }
}

class CirclePoly extends ShapePoly {
    double radius;
    
    CirclePoly(double radius) {
        this.radius = radius;
    }
    
    @Override
    void draw() {
        System.out.println("Drawing a circle");
    }
    
    @Override
    void calculateArea() {
        System.out.println("Circle area: " + (Math.PI * radius * radius));
    }
}

class RectanglePoly extends ShapePoly {
    double length, width;
    
    RectanglePoly(double length, double width) {
        this.length = length;
        this.width = width;
    }
    
    @Override
    void draw() {
        System.out.println("Drawing a rectangle");
    }
    
    @Override
    void calculateArea() {
        System.out.println("Rectangle area: " + (length * width));
    }
}

class TrianglePoly extends ShapePoly {
    double base, height;
    
    TrianglePoly(double base, double height) {
        this.base = base;
        this.height = height;
    }
    
    @Override
    void draw() {
        System.out.println("Drawing a triangle");
    }
    
    @Override
    void calculateArea() {
        System.out.println("Triangle area: " + (0.5 * base * height));
    }
}

// ============================================
// SECTION 5: CASTING
// ============================================

class VehiclePoly {
    void start() {
        System.out.println("Vehicle starting...");
    }
    
    void stop() {
        System.out.println("Vehicle stopping...");
    }
}

class CarPoly extends VehiclePoly {
    void openTrunk() {
        System.out.println("Car trunk opened");
    }
}

class BikePoly extends VehiclePoly {
    void doWheelie() {
        System.out.println("Bike doing wheelie");
    }
}

// ============================================
// SECTION 7: COVARIANT RETURN TYPES
// ============================================

class AnimalFactory {
    AnimalPoly createAnimal() {
        return new AnimalPoly();
    }
}

class DogFactory extends AnimalFactory {
    @Override
    DogPoly createAnimal() {  // Covariant return type
        return new DogPoly();
    }
}

// ============================================
// SECTION 8: REAL-WORLD EXAMPLES
// ============================================

// Payment Processing
abstract class PaymentProcessor {
    abstract void processPayment(double amount);
    
    void generateReceipt() {
        System.out.println("Receipt generated");
    }
}

class CreditCardPayment extends PaymentProcessor {
    @Override
    void processPayment(double amount) {
        System.out.println("Processing Credit Card payment: $" + amount);
        System.out.println("Validating card...");
        System.out.println("Payment successful!");
    }
}

class PayPalPayment extends PaymentProcessor {
    @Override
    void processPayment(double amount) {
        System.out.println("Processing PayPal payment: $" + amount);
        System.out.println("Redirecting to PayPal...");
        System.out.println("Payment successful!");
    }
}

class BitcoinPayment extends PaymentProcessor {
    @Override
    void processPayment(double amount) {
        System.out.println("Processing Bitcoin payment: $" + amount);
        System.out.println("Generating wallet address...");
        System.out.println("Payment successful!");
    }
}

// Notification System
abstract class NotificationService {
    abstract void send(String message);
}

class EmailNotification extends NotificationService {
    @Override
    void send(String message) {
        System.out.println("📧 Email: " + message);
    }
}

class SMSNotification extends NotificationService {
    @Override
    void send(String message) {
        System.out.println("📱 SMS: " + message);
    }
}

class PushNotification extends NotificationService {
    @Override
    void send(String message) {
        System.out.println("🔔 Push: " + message);
    }
}

// Data Export System
abstract class DataExporter {
    abstract void export(String[] data);
}

class PDFExporter extends DataExporter {
    @Override
    void export(String[] data) {
        System.out.println("Exporting to PDF format...");
        for (String item : data) {
            System.out.println("  • " + item);
        }
        System.out.println("PDF export complete!");
    }
}

class ExcelExporter extends DataExporter {
    @Override
    void export(String[] data) {
        System.out.println("Exporting to Excel format...");
        for (String item : data) {
            System.out.println("  | " + item + " |");
        }
        System.out.println("Excel export complete!");
    }
}

class JSONExporter extends DataExporter {
    @Override
    void export(String[] data) {
        System.out.println("Exporting to JSON format...");
        System.out.print("[");
        for (int i = 0; i < data.length; i++) {
            System.out.print("\"" + data[i] + "\"");
            if (i < data.length - 1) System.out.print(", ");
        }
        System.out.println("]");
        System.out.println("JSON export complete!");
    }
}
