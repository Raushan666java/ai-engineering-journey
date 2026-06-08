/**
 * Day 8: Polymorphism Demonstration
 * 
 * Topics Covered:
 * - Runtime polymorphism (method overriding)
 * - Compile-time polymorphism (method overloading)
 * - Dynamic method dispatch
 * - Upcasting and downcasting
 * - instanceof operator
 */

// Base class - Animal
class Animal {
    protected String name;
    protected int age;
    
    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Method to be overridden
    public void makeSound() {
        System.out.println(name + " makes a sound");
    }
    
    // Method to be overridden
    public void move() {
        System.out.println(name + " is moving");
    }
    
    // Method with return type
    public Animal reproduce() {
        System.out.println("Animal reproducing");
        return new Animal("Baby", 0);
    }
    
    public void displayInfo() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}

// Derived class - Dog
class Dog extends Animal {
    private String breed;
    
    public Dog(String name, int age, String breed) {
        super(name, age);
        this.breed = breed;
    }
    
    // Override makeSound - runtime polymorphism
    @Override
    public void makeSound() {
        System.out.println(name + " says: Woof! Woof!");
    }
    
    @Override
    public void move() {
        System.out.println(name + " runs on four legs");
    }
    
    // Covariant return type - can return Dog instead of Animal
    @Override
    public Dog reproduce() {
        System.out.println("Dog reproducing");
        return new Dog("Puppy", 0, this.breed);
    }
    
    // Dog-specific method
    public void fetch() {
        System.out.println(name + " is fetching the ball!");
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Breed: " + breed);
    }
}

// Derived class - Cat
class Cat extends Animal {
    private boolean indoor;
    
    public Cat(String name, int age, boolean indoor) {
        super(name, age);
        this.indoor = indoor;
    }
    
    @Override
    public void makeSound() {
        System.out.println(name + " says: Meow! Meow!");
    }
    
    @Override
    public void move() {
        System.out.println(name + " walks silently");
    }
    
    // Covariant return type
    @Override
    public Cat reproduce() {
        System.out.println("Cat reproducing");
        return new Cat("Kitten", 0, this.indoor);
    }
    
    // Cat-specific method
    public void scratch() {
        System.out.println(name + " is scratching!");
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Indoor: " + (indoor ? "Yes" : "No"));
    }
}

// Derived class - Bird
class Bird extends Animal {
    private double wingspan;
    
    public Bird(String name, int age, double wingspan) {
        super(name, age);
        this.wingspan = wingspan;
    }
    
    @Override
    public void makeSound() {
        System.out.println(name + " says: Tweet! Tweet!");
    }
    
    @Override
    public void move() {
        System.out.println(name + " flies with " + wingspan + "m wingspan");
    }
    
    @Override
    public Bird reproduce() {
        System.out.println("Bird reproducing");
        return new Bird("Chick", 0, wingspan * 0.5);
    }
    
    // Bird-specific method
    public void fly() {
        System.out.println(name + " is soaring in the sky!");
    }
}

// Class demonstrating compile-time polymorphism (method overloading)
class Calculator {
    // Method overloading - same name, different parameters
    public int add(int a, int b) {
        return a + b;
    }
    
    public double add(double a, double b) {
        return a + b;
    }
    
    public int add(int a, int b, int c) {
        return a + b + c;
    }
    
    public String add(String a, String b) {
        return a + b;
    }
}

// Main class demonstrating polymorphism
public class polymorphism_demo {
    public static void main(String[] args) {
        System.out.println("=== Polymorphism Demo ===\n");
        
        // 1. Runtime Polymorphism - Dynamic Method Dispatch
        System.out.println("1. Runtime Polymorphism (Dynamic Method Dispatch):");
        Animal animal1 = new Dog("Buddy", 5, "Golden Retriever");
        Animal animal2 = new Cat("Whiskers", 3, true);
        Animal animal3 = new Bird("Tweety", 2, 0.5);
        
        // Same method call, different behavior based on object type
        animal1.makeSound(); // Woof! Woof!
        animal2.makeSound(); // Meow! Meow!
        animal3.makeSound(); // Tweet! Tweet!
        System.out.println();
        
        // 2. Polymorphic Arrays
        System.out.println("2. Polymorphic Arrays:");
        Animal[] animals = {
            new Dog("Max", 4, "Labrador"),
            new Cat("Luna", 2, false),
            new Bird("Rio", 1, 0.6),
            new Dog("Rocky", 6, "Bulldog")
        };
        
        System.out.println("All animals making sounds:");
        for (Animal animal : animals) {
            animal.makeSound(); // Polymorphic call
        }
        System.out.println();
        
        System.out.println("All animals moving:");
        for (Animal animal : animals) {
            animal.move(); // Polymorphic call
        }
        System.out.println();
        
        // 3. Upcasting (Implicit and Safe)
        System.out.println("3. Upcasting (Implicit):");
        Dog dog = new Dog("Charlie", 3, "Beagle");
        Animal animalRef = dog; // Upcasting - implicit
        animalRef.makeSound(); // Calls Dog's makeSound
        // animalRef.fetch(); // ERROR: Cannot call Dog-specific methods
        System.out.println();
        
        // 4. Downcasting (Explicit, needs instanceof check)
        System.out.println("4. Downcasting (Explicit):");
        Animal genericAnimal = new Dog("Daisy", 2, "Poodle");
        
        // Safe downcasting with instanceof
        if (genericAnimal instanceof Dog) {
            Dog specificDog = (Dog) genericAnimal; // Downcasting
            specificDog.fetch(); // Now can call Dog-specific methods
            specificDog.makeSound();
        }
        
        // Unsafe downcasting example (commented to avoid exception)
        // Cat cat = (Cat) genericAnimal; // ClassCastException!
        System.out.println();
        
        // 5. instanceof Operator
        System.out.println("5. instanceof Operator:");
        Animal testAnimal = new Cat("Mittens", 4, true);
        
        System.out.println("testAnimal instanceof Animal: " + (testAnimal instanceof Animal));
        System.out.println("testAnimal instanceof Cat: " + (testAnimal instanceof Cat));
        System.out.println("testAnimal instanceof Dog: " + (testAnimal instanceof Dog));
        System.out.println();
        
        // 6. Type-specific operations using instanceof
        System.out.println("6. Type-Specific Operations:");
        performAnimalActions(new Dog("Rover", 5, "German Shepherd"));
        performAnimalActions(new Cat("Shadow", 3, true));
        performAnimalActions(new Bird("Polly", 2, 0.4));
        System.out.println();
        
        // 7. Covariant Return Types
        System.out.println("7. Covariant Return Types:");
        Dog parentDog = new Dog("Mother", 5, "Retriever");
        Cat parentCat = new Cat("MamaCat", 4, true);
        
        Dog baby1 = parentDog.reproduce(); // Returns Dog
        Cat baby2 = parentCat.reproduce(); // Returns Cat
        
        baby1.makeSound();
        baby2.makeSound();
        System.out.println();
        
        // 8. Compile-time Polymorphism (Method Overloading)
        System.out.println("8. Compile-time Polymorphism (Method Overloading):");
        Calculator calc = new Calculator();
        
        System.out.println("add(5, 3) = " + calc.add(5, 3));
        System.out.println("add(5.5, 3.2) = " + calc.add(5.5, 3.2));
        System.out.println("add(1, 2, 3) = " + calc.add(1, 2, 3));
        System.out.println("add(\"Hello\", \"World\") = " + calc.add("Hello", "World"));
        System.out.println();
        
        // 9. Polymorphic behavior in method parameters
        System.out.println("9. Polymorphic Method Parameters:");
        describeAnimal(new Dog("Fido", 4, "Terrier"));
        describeAnimal(new Cat("Garfield", 5, false));
        describeAnimal(new Bird("Eagle", 3, 2.0));
        System.out.println();
        
        System.out.println("=== Polymorphism Demo Complete ===");
    }
    
    // Method accepting Animal type - works with all subclasses
    public static void performAnimalActions(Animal animal) {
        System.out.println("\n--- Performing actions for: " + animal.name + " ---");
        animal.makeSound();
        animal.move();
        
        // Type-specific actions
        if (animal instanceof Dog) {
            Dog dog = (Dog) animal;
            dog.fetch();
        } else if (animal instanceof Cat) {
            Cat cat = (Cat) animal;
            cat.scratch();
        } else if (animal instanceof Bird) {
            Bird bird = (Bird) animal;
            bird.fly();
        }
    }
    
    // Polymorphic method parameter
    public static void describeAnimal(Animal animal) {
        System.out.println("\nDescribing animal:");
        animal.displayInfo();
        animal.makeSound();
    }
}

/**
 * Key Polymorphism Concepts:
 * 
 * 1. Runtime Polymorphism (Method Overriding):
 *    - Method resolution happens at runtime
 *    - Based on actual object type, not reference type
 *    - Also called dynamic method dispatch
 * 
 * 2. Compile-time Polymorphism (Method Overloading):
 *    - Method resolution happens at compile time
 *    - Based on method signature (name + parameters)
 *    - Same method name, different parameters
 * 
 * 3. Upcasting:
 *    - Converting subclass reference to superclass reference
 *    - Implicit and always safe
 *    - Loses access to subclass-specific methods
 * 
 * 4. Downcasting:
 *    - Converting superclass reference to subclass reference
 *    - Explicit and requires instanceof check
 *    - Can throw ClassCastException if wrong type
 * 
 * 5. Dynamic Method Dispatch:
 *    - JVM decides which method to call at runtime
 *    - Based on actual object type, not reference type
 *    - Enables flexible, extensible code
 * 
 * 6. Covariant Return Type:
 *    - Override method can return subtype of parent's return type
 *    - Introduced in Java 5
 *    - More specific return type allowed
 * 
 * Interview Questions:
 * Q: Difference between overloading and overriding?
 * A: Overloading = compile-time, same name different parameters
 *    Overriding = runtime, subclass provides specific implementation
 * 
 * Q: Can you overload main method?
 * A: Yes, but JVM calls public static void main(String[] args)
 * 
 * Q: Can you override static methods?
 * A: No, static methods are hidden, not overridden
 * 
 * Q: Can you override private methods?
 * A: No, private methods are not visible to subclasses
 * 
 * Benefits of Polymorphism:
 * - Code reusability
 * - Flexibility and extensibility
 * - Loose coupling
 * - Easy maintenance
 * - Supports open-closed principle (open for extension, closed for modification)
 */
