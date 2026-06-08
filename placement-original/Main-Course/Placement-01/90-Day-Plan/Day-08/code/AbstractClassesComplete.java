/**
 * DAY 8: ABSTRACT CLASSES - COMPLETE GUIDE
 * 
 * Topics:
 * - What is an abstract class
 * - When to use abstract classes vs interfaces
 * - Abstract methods, concrete methods in abstract classes
 * - Template Method Pattern
 * - Abstract class with fields and constructors
 */

public class AbstractClassesComplete {
    public static void main(String[] args) {
        System.out.println("╔══════════════════════════════════════════════════╗");
        System.out.println("║        DAY 8: ABSTRACT CLASSES - COMPLETE GUIDE  ║");
        System.out.println("╚══════════════════════════════════════════════════╝\n");

        demonstrateAbstractBasics();
        demonstrateTemplateMethod();
        demonstrateConstructorAndFields();
        demonstrateUsageGuidelines();
    }

    static void demonstrateAbstractBasics(){
        AnimalBase dog = new DogBase("Fido");
        dog.makeSound();
        dog.describe();
    }

    static void demonstrateTemplateMethod(){
        System.out.println("\n--- Template Method Pattern ---");
        GameAbstract chess = new ChessGameAbstract();
        chess.play();
    }

    static void demonstrateConstructorAndFields(){
        System.out.println("\n--- Constructors & Fields in Abstract Classes ---");
        BaseWithFields bwf = new WithFields("BaseName");
        bwf.show();
    }

    static void demonstrateUsageGuidelines(){
        System.out.println("\n--- Usage Guidelines ---");
        System.out.println("- Use abstract classes when sharing implementation or state across subclasses.");
        System.out.println("- Use interfaces for behavioral contracts without state (but interfaces can have default methods now).");
    }
}

abstract class AnimalBase {
    protected String name;
    AnimalBase(String name){ this.name = name; }
    abstract void makeSound();
    void describe(){ System.out.println("Animal: " + name); }
}
class DogBase extends AnimalBase{ DogBase(String name){ super(name);} @Override void makeSound(){ System.out.println(name + " says Woof!"); } }

abstract class GameAbstract {
    // Template: setup -> start -> end
    final void play(){ setup(); start(); end(); }
    abstract void setup();
    abstract void start();
    void end(){ System.out.println("Game finished"); }
}
class ChessGameAbstract extends GameAbstract{ void setup(){ System.out.println("Chess: setup pieces"); } void start(){ System.out.println("Chess: start game"); } }

abstract class BaseWithFields {
    protected String id;
    BaseWithFields(String id){ this.id = id; }
    void show(){ System.out.println("BaseWithFields id = " + id); }
}
class WithFields extends BaseWithFields{ WithFields(String id){ super(id); } }
