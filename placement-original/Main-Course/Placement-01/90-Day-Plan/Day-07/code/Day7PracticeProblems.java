/**
 * DAY 7 PRACTICE PROBLEMS: INHERITANCE & POLYMORPHISM
 * 30 problems with complete solutions and explanations.
 * Focus: Inheritance, polymorphism, overriding, casting, abstract classes, interfaces
 */

public class Day7PracticeProblems {
    public static void main(String[] args) {
        System.out.println("╔═══════════════════════════════════════════════════════════╗");
        System.out.println("║  DAY 7: PRACTICE PROBLEMS - INHERITANCE & POLYMORPHISM    ║");
        System.out.println("╚═══════════════════════════════════════════════════════════╝\n");

        runSection1();
        runSection2();
        runSection3();
        runSection4();
        runSection5();
        runSection6();
    }

    static void runSection1() {
        System.out.println("=".repeat(70));
        System.out.println("SECTION 1: BASIC INHERITANCE (Problems 1-5)");
        System.out.println("=".repeat(70));

        // 1. Create base class Person and derived Student, show inheritance of fields and methods
        System.out.println("Problem 1: Person / Student Inheritance");
        StudentP1 s1 = new StudentP1("Alice", 20, "S001");
        s1.display();

        
        // 2. Vehicle -> Car, Motorcycle examples
        System.out.println("\nProblem 2: Vehicle Inheritance");
        CarP2 car = new CarP2();
        car.start();
        car.stop();
        car.openTrunk();

        MotorcycleP2 bike = new MotorcycleP2();
        bike.start();
        bike.stop();
        bike.doWheelie();

        // 3. Implement a base class Shape and derive Circle with additional radius
        System.out.println("\nProblem 3: Shape -> Circle");
        CircleP3 c = new CircleP3(5);
        c.draw();
        c.calculateArea();

        // 4. Employee base class with derived Manager
        System.out.println("\nProblem 4: Employee -> Manager");
        ManagerP4 m = new ManagerP4("Bob", 35, "M001", 90000, "IT");
        m.displayManager();

        // 5. Simple inheritance chain: A -> B -> C
        System.out.println("\nProblem 5: Multi-level Inheritance (A -> B -> C)");
        CClassP5 cobj = new CClassP5();
        cobj.methodA();
        cobj.methodB();
        cobj.methodC();
    }

    static void runSection2() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("SECTION 2: CONSTRUCTORS & SUPER (Problems 6-10)");
        System.out.println("=".repeat(70));

        // 6. Parent has constructors, child calls super()
        System.out.println("Problem 6: Constructor chaining with super()");
        ChildP6 ch = new ChildP6("ChildName", 10);
        ch.display();

        // 7. Default parent constructor absence
        System.out.println("\nProblem 7: Parent without default constructor");
        try {
            FaultyChildP7 f = new FaultyChildP7("Fail");
            f.display();
        } catch (Exception e) {
            System.out.println("Expected error: " + e.getMessage());
        }

        // 8. Copy constructor demonstration in inheritance
        System.out.println("\nProblem 8: Copy constructor behavior");
        CopyParentP8 p8 = new CopyParentP8("Original");
        CopyChildP8 child8 = new CopyChildP8(p8, "ChildCopy");
        child8.display();

        // 9. Using super() to set base fields
        System.out.println("\nProblem 9: Using super to initialize base class fields");
        AdvancedChildP9 ac = new AdvancedChildP9("ParentAlpha", 40, "C102");
        ac.display();

        // 10. Constructor ordering verification
        System.out.println("\nProblem 10: Constructor execution order");
        OrderChildP10 oc = new OrderChildP10();
        oc.display();
    }

    static void runSection3() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("SECTION 3: METHOD OVERRIDING & @Override (Problems 11-15)");
        System.out.println("=".repeat(70));

        // 11. Override method and call super.method()
        System.out.println("Problem 11: Overriding with super.method()");
        SubP11 sp11 = new SubP11();
        sp11.display();

        // 12. Check access modifiers with overriding
        System.out.println("\nProblem 12: Access levels while overriding");
        OverParentP12 op = new OverParentP12();
        OverChildP12 oc12 = new OverChildP12();
        System.out.println("Parent method call:");
        op.show();
        System.out.println("Child method call:");
        oc12.show();

        // 13. final method cannot be overridden
        System.out.println("\nProblem 13: Trying to override final method (explain)");
        FinalExP13 fe = new FinalExP13();
        fe.finalMethod();

        // 14. static method hiding vs overriding
        System.out.println("\nProblem 14: Static method hiding");
        StaticParentP14 sp14 = new StaticParentP14();
        StaticChildP14 sc14 = new StaticChildP14();
        sp14.print();
        sc14.print();

        // 15. Covariant return type demonstration
        System.out.println("\nProblem 15: Covariant return type");
        AnimalFactoryP15 af1 = new AnimalFactoryP15();
        AnimalP15 a = af1.createAnimal();
        a.makeSound();
        AnimalFactoryP15 df = new DogFactoryP15();
        DogP15 dp = (DogP15) df.createAnimal();
        dp.makeSound();
    }

    static void runSection4() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("SECTION 4: POLYMORPHISM & DYNAMIC DISPATCH (Problems 16-20)");
        System.out.println("=".repeat(70));

        // 16. Parent reference points to child object
        System.out.println("Problem 16: Parent reference to child object");
        ParentP16 p = new ChildP16();
        p.say();

        // 17. Runtime dispatch with collection of base type
        System.out.println("\nProblem 17: Runtime polymorphism in arrays");
        AnimalPP[] arr = {new DogPP(), new CatPP(), new BirdPP()};
        for (AnimalPP an : arr) an.makeSound();

        // 18. Demonstrate strategy pattern using polymorphism
        System.out.println("\nProblem 18: Strategy pattern example");
        PaymentContext ctx = new PaymentContext(new CreditCardStrategy());
        ctx.execute(120);
        ctx.setStrategy(new PayPalStrategy());
        ctx.execute(50);

        // 19. Notification polymorphism example
        System.out.println("\nProblem 19: Notification system polymorphism");
        NotificationServiceP19[] notifs = {new EmailNotifP19(), new SMSNotifP19(), new PushNotifP19()};
        for (NotificationServiceP19 n : notifs) n.send("Polymorphism rocks!");

        // 20. Plugin-like system using polymorphism
        System.out.println("\nProblem 20: Plugin architecture with polymorphism");
        Plugin[] plugins = {new PluginA(), new PluginB()};
        for (Plugin plugin : plugins) plugin.run();
    }

    static void runSection5() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("SECTION 5: CASTING & INSTANCEOF (Problems 21-25)");
        System.out.println("=".repeat(70));

        // 21. Upcasting and downcasting safe use
        System.out.println("Problem 21: Safe upcasting and downcasting");
        ParentP21 parent = new ChildP21();  // upcasting
        if (parent instanceof ChildP21) {
            ChildP21 child = (ChildP21) parent; // safe downcast
            child.childMethod();
        }

        // 22. Unsafe cast detection
        System.out.println("\nProblem 22: Unsafe cast detection");
        try {
            ParentP21 p2 = new ParentP21();
            ChildP21 c2 = (ChildP21) p2; // will throw ClassCastException
            c2.childMethod();
        } catch (ClassCastException e) {
            System.out.println("Caught expected ClassCastException");
        }

        // 23. instanceof with interfaces
        System.out.println("\nProblem 23: instanceof with interfaces");
        Runnable r = new RunnableJob();
        if (r instanceof Runnable) r.run();

        // 24. Polymorphic equals() implementation
        System.out.println("\nProblem 24: Overriding equals with polymorphism");
        PersonEquals p1 = new PersonEquals("Alice");
        PersonEquals p2 = new PersonEquals("Alice");
        System.out.println("p1.equals(p2): " + p1.equals(p2));

        // 25. Using instanceof with class hierarchies
        System.out.println("\nProblem 25: instanceof in complex hierarchy");
        AnimalHard ah = new DogHard();
        if (ah instanceof DogHard) ((DogHard) ah).fetch();
    }

    static void runSection6() {
        System.out.println("\n" + "=".repeat(70));
        System.out.println("SECTION 6: ABSTRACT CLASSES & INTERFACES (Problems 26-30)");
        System.out.println("=".repeat(70));

        // 26. Abstract class: Shape with area method
        System.out.println("Problem 26: Abstract Class (Shape)");
        ShapeAbstract s1 = new CircleAbstract(7);
        s1.calculateArea();

        // 27. Implementing Multiple interfaces
        System.out.println("\nProblem 27: Interface implementation");
        MultiTool m = new MultiTool();
        m.cut(); m.drill(); m.saw();

        // 28. Functional interface & lambda (shortcut polymorphism)
        System.out.println("\nProblem 28: Functional Interface with lambda");
        MathOperation add = (a, b) -> a + b;
        System.out.println("5 + 3 = " + add.apply(5, 3));

        // 29. Template Method Pattern using abstract class
        System.out.println("\nProblem 29: Template Method pattern");
        GameTemplate g = new ChessGame();
        g.play();

        // 30. Adapter / Bridge pattern using interfaces for composition
        System.out.println("\nProblem 30: Adapter/Bridge pattern using interfaces");
        MediaPlayer mp = new MediaAdapter(new AdvancedMediaPlayerAdapter());
        mp.play("mp3", "song.mp3");
    }
}

// ============================================
// Problem Solutions: Section 1 classes
// ============================================

// Problem 1
class PersonP1 { String name; int age; void display(){ System.out.println("Person: " + name + ", Age: " + age); } }
class StudentP1 extends PersonP1 { String studentId; StudentP1(String n, int a, String id){ name=n; age=a; studentId=id;} void display(){ System.out.println("Student: " + name + ", Age: " + age + ", ID: " + studentId); } }

// Problem 2
class VehicleP2{ void start(){ System.out.println("Vehicle starting..."); } void stop(){ System.out.println("Vehicle stopping..."); }}
class CarP2 extends VehicleP2{ void openTrunk(){ System.out.println("Trunk opened"); }}
class MotorcycleP2 extends VehicleP2{ void doWheelie(){ System.out.println("Wheelie!"); }}

// Problem 3
class ShapeP3{ void draw(){ System.out.println("Generic Shape"); } void calculateArea(){ System.out.println("Undefined"); }}
class CircleP3 extends ShapeP3{ double r; CircleP3(double r){ this.r=r; } @Override void draw(){ System.out.println("Drawing circle"); } @Override void calculateArea(){ System.out.println("Area: " + Math.PI * r * r); }}

// Problem 4
class EmployeeP4{ String name; int age; String id; double salary; EmployeeP4(String name, int age, String id, double salary){ this.name=name; this.age=age; this.id=id; this.salary=salary; } void display(){ System.out.println(name + " (" + id + ") - $" + salary);} }
class ManagerP4 extends EmployeeP4{ String dept; ManagerP4(String name, int age, String id, double salary, String dept){ super(name, age, id, salary); this.dept = dept; } void displayManager(){ display(); System.out.println("Dept: " + dept); }}

// Problem 5: A -> B -> C
class AClassP5{ void methodA(){ System.out.println("A method"); }}
class BClassP5 extends AClassP5{ void methodB(){ System.out.println("B method"); }}
class CClassP5 extends BClassP5{ void methodC(){ System.out.println("C method"); }}

// ============================================
// Section 2: Constructors & super
// ============================================
class ParentP6{ ParentP6(String name){ System.out.println("Parent created: " + name); }}
class ChildP6 extends ParentP6{ int x; ChildP6(String name, int x){ super(name); this.x=x; System.out.println("Child created"); } void display(){ System.out.println("Child x=" + x); }}

// Problem 7: Parent without default constructor
class NoDefaultParentP7{ NoDefaultParentP7(String name){ System.out.println("Parent has param constructor"); }}
class FaultyChildP7 extends NoDefaultParentP7{ FaultyChildP7(String name){ super(name); System.out.println("Faulty child created"); } void display(){ System.out.println("display"); }}

// Problem 8: Copy constructor demonstration
class CopyParentP8 { String val; CopyParentP8(String v){ this.val=v; } }
class CopyChildP8 extends CopyParentP8 { String extra; CopyChildP8(CopyParentP8 p, String extra){ super(p.val); this.extra = extra; } void display(){ System.out.println("CopyChild: " + val + ", Extra: " + extra); }}

// Problem 9
class BaseP9{ String name; int age; BaseP9(String name, int age){ this.name=name; this.age=age; }}
class AdvancedChildP9 extends BaseP9{ String code; AdvancedChildP9(String name, int age, String code){ super(name, age); this.code=code; } void display(){ System.out.println("Name: " + name + ", Age: " + age + ", Code: " + code);} }

// Problem 10
class OrderParentP10 { OrderParentP10(){ System.out.println("Parent constructor"); }}
class OrderChildP10 extends OrderParentP10 { OrderChildP10(){ System.out.println("Child constructor"); } void display(){ System.out.println("Constructors executed"); }}

// ============================================
// Section 3: Overriding examples
// ============================================
class SuperP11{ void display(){ System.out.println("Super display"); }}
class SubP11 extends SuperP11{ @Override void display(){ super.display(); System.out.println("Sub display"); }}

// Access and overriding
class OverParentP12{ void show(){ System.out.println("Parent show"); }}
class OverChildP12 extends OverParentP12{ @Override public void show(){ System.out.println("Child show"); }}

// Final method sample
class FinalExP13{ final void finalMethod(){ System.out.println("Final method can't be overridden"); }}

// Static hiding
class StaticParentP14{ static void print(){ System.out.println("Parent static"); }}
class StaticChildP14 extends StaticParentP14{ static void print(){ System.out.println("Child static"); }}

// Covariant return types
class AnimalP15{ void makeSound(){ System.out.println("Generic Animal"); }}
class DogP15 extends AnimalP15{ @Override void makeSound(){ System.out.println("Bark"); } void wag(){ System.out.println("Wagging tail"); }}
class AnimalFactoryP15{ AnimalP15 createAnimal(){ return new AnimalP15(); }}
class DogFactoryP15 extends AnimalFactoryP15{ @Override DogP15 createAnimal(){ return new DogP15(); }}

// ============================================
// Section 4: Polymorphism
// ============================================
class ParentP16{ void say(){ System.out.println("Parent says hi"); }}
class ChildP16 extends ParentP16{ @Override void say(){ System.out.println("Child says hi"); }}

// Runtime polymorphism with animals
class AnimalPP{ void makeSound(){ System.out.println("Animal sound"); }}
class DogPP extends AnimalPP{ @Override void makeSound(){ System.out.println("Dog barks"); }}
class CatPP extends AnimalPP{ @Override void makeSound(){ System.out.println("Cat meows"); }}
class BirdPP extends AnimalPP{ @Override void makeSound(){ System.out.println("Bird chirps"); }}

// Strategy Pattern
interface PaymentStrategy { void pay(double amount); }
class CreditCardStrategy implements PaymentStrategy{ public void pay(double amount){ System.out.println("Paid by card: $" + amount);} }
class PayPalStrategy implements PaymentStrategy{ public void pay(double amount){ System.out.println("Paid by PayPal: $" + amount);} }
class PaymentContext { PaymentStrategy strategy; PaymentContext(PaymentStrategy s){ this.strategy = s;} void setStrategy(PaymentStrategy s){ this.strategy = s; } void execute(double amount){ strategy.pay(amount); } }

// Notification polymorphism
interface NotificationServiceP19 { void send(String message); }
class EmailNotifP19 implements NotificationServiceP19{ public void send(String message){ System.out.println("Email: " + message);} }
class SMSNotifP19 implements NotificationServiceP19{ public void send(String message){ System.out.println("SMS: " + message);} }
class PushNotifP19 implements NotificationServiceP19{ public void send(String message){ System.out.println("Push: " + message);} }

// Plugin
interface Plugin{ void run(); }
class PluginA implements Plugin{ public void run(){ System.out.println("Plugin A running..."); }}
class PluginB implements Plugin{ public void run(){ System.out.println("Plugin B running..."); }}

// ============================================
// Section 5: Casting & instanceof examples
// ============================================
class ParentP21{ void parentMethod(){ System.out.println("Parent method"); }}
class ChildP21 extends ParentP21{ void childMethod(){ System.out.println("Child method"); }}

// Runnable job
class RunnableJob implements Runnable{ public void run(){ System.out.println("Runnable job running"); }}

// Equals override
class PersonEquals{ String name; PersonEquals(String n){ name = n; } @Override public boolean equals(Object o){ if (!(o instanceof PersonEquals)) return false; PersonEquals p = (PersonEquals) o; return p.name.equals(this.name); }}

class AnimalHard{ void makeSound(){} }
class DogHard extends AnimalHard{ void fetch(){ System.out.println("Dog fetches"); } }

// ============================================
// Section 6: Abstract classes & interfaces
// ============================================
abstract class ShapeAbstract{ abstract void calculateArea(); }
class CircleAbstract extends ShapeAbstract{ double r; CircleAbstract(double r){ this.r=r;} @Override void calculateArea(){ System.out.println("Abstract Circle area: " + Math.PI*r*r);} }

interface Cutter{ void cut(); }
interface Driller{ void drill(); }
interface Sawyer{ void saw(); }
class MultiTool implements Cutter, Driller, Sawyer{ public void cut(){ System.out.println("Cutting"); } public void drill(){ System.out.println("Drilling"); } public void saw(){ System.out.println("Sawing"); } }

// Functional interface
@FunctionalInterface interface MathOperation{ int apply(int a, int b); }

// Template method pattern
abstract class GameTemplate{ final void play(){ setup(); start(); end(); } abstract void setup(); abstract void start(); void end(){ System.out.println("Game finished"); } }
class ChessGame extends GameTemplate{ void setup(){ System.out.println("Chess setup"); } void start(){ System.out.println("Chess started"); }}

// Adapter / Bridge
interface MediaPlayer{ void play(String type, String fileName); }
interface AdvancedMediaPlayer{ void playAdvanced(String fileName);} 
class AdvancedMediaPlayerAdapter implements AdvancedMediaPlayer{ public void playAdvanced(String fileName){ System.out.println("Advanced playing: " + fileName);} }
class MediaAdapter implements MediaPlayer{ AdvancedMediaPlayer advanced; MediaAdapter(AdvancedMediaPlayer adv){ this.advanced = adv; } public void play(String type, String fileName){ advanced.playAdvanced(fileName); } }
