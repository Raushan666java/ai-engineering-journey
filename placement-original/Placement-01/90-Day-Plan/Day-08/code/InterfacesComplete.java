/**
 * DAY 8: INTERFACES - COMPLETE GUIDE
 * 
 * Topics:
 * - What is an interface
 * - Difference between abstract classes and interfaces
 * - Interface members: abstract methods, default methods, static methods
 * - Multiple inheritance via interfaces
 * - Functional interfaces and lambdas
 * - Marker interfaces
 * - Best practices and use-cases
 */

public class InterfacesComplete {
    public static void main(String[] args) {
        System.out.println("╔══════════════════════════════════════════════════╗");
        System.out.println("║         DAY 8: INTERFACES - COMPLETE GUIDE       ║");
        System.out.println("╚══════════════════════════════════════════════════╝\n");

        demonstrateBasics();
        demonstrateDefaultStaticMethods();
        demonstrateMultipleInheritance();
        demonstrateFunctionalInterfaces();
        demonstrateMarkerInterface();
        demonstrateBestPractices();
    }

    static void demonstrateBasics() {
        System.out.println("\n--- INTERFACE BASICS ---");
        AnimalInterface dog = new DogInterface();
        dog.makeSound();
        System.out.println("\nInterfaces only define contracts, not implementations (prior to default methods)." );
    }

    static void demonstrateDefaultStaticMethods() {
        System.out.println("\n--- DEFAULT & STATIC METHODS ---");
        AnimalInterface dog = new DogInterface();
        dog.defaultBehavior();
        AnimalInterface.staticHelper();
    }

    static void demonstrateMultipleInheritance() {
        System.out.println("\n--- MULTIPLE INHERITANCE (via interfaces) ---");
        FlyingFish ff = new FlyingFish();
        ff.fly(); ff.swim();
    }

    static void demonstrateFunctionalInterfaces() {
        System.out.println("\n--- FUNCTIONAL INTERFACES & LAMBDAS ---");
        MathOp sum = (a, b) -> a + b;
        System.out.println("5 + 3 = " + sum.apply(5, 3));
    }

    static void demonstrateMarkerInterface() {
        System.out.println("\n--- MARKER INTERFACE ---");
        SerializableExample se = new SerializableExample();
        System.out.println("Is serializable: " + (se instanceof java.io.Serializable));
    }

    static void demonstrateBestPractices() {
        System.out.println("\n--- BEST PRACTICES ---");
        System.out.println("- Program to interfaces, not implementations.");
        System.out.println("- Use interfaces for behavioral contracts.");
        System.out.println("- Prefer composition over multiple interface inheritance when needed.");
    }
}

interface AnimalInterface {
    void makeSound();
    default void defaultBehavior(){ System.out.println("Default behavior from interface"); }
    static void staticHelper(){ System.out.println("Interface static helper"); }
}
class DogInterface implements AnimalInterface {
    public void makeSound(){ System.out.println("Dog: Woof!"); }
}

interface Flyable { void fly(); }
interface Swimmable { void swim(); }
class FlyingFish implements Flyable, Swimmable { public void fly(){ System.out.println("Flying fish: flying"); } public void swim(){ System.out.println("Flying fish: swimming"); }}

@FunctionalInterface
interface MathOp { int apply(int a, int b); }

class SerializableExample implements java.io.Serializable { private static final long serialVersionUID = 1L; }
