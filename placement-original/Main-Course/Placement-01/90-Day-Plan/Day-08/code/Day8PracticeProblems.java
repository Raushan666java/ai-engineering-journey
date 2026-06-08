/**
 * DAY 8 PRACTICE PROBLEMS: INTERFACES, ABSTRACT CLASSES & EXCEPTIONS
 * 30 problems with full solutions and explanations.
 */

public class Day8PracticeProblems {
    public static void main(String[] args) {
        System.out.println("╔══════════════════════════════════════════════════════════╗");
        System.out.println("║ DAY 8: PRACTICE PROBLEMS - INTERFACES & EXCEPTIONS       ║");
        System.out.println("╚══════════════════════════════════════════════════════════╝\n");

        section1();
        section2();
        section3();
        section4();
        section5();
        section6();
    }

    static void section1() {
        System.out.println("=".repeat(70));
        System.out.println("SECTION 1: BASIC INTERFACE USAGE (Problems 1-5)");
        System.out.println("=".repeat(70));
        System.out.println("Problem 1: Implement Runnable class and run it");
        Runnable r = () -> System.out.println("Runnable running");
        r.run();

        System.out.println("\nProblem 2: Implement Comparator to sort Strings by length");
        java.util.List<String> list = new java.util.ArrayList<>(); list.add("a"); list.add("abc"); list.add("ab");
        list.sort((a,b) -> a.length() - b.length()); System.out.println(list);

        System.out.println("\nProblem 3: Default method in interface");
        HasDefault h = new HasDefault(){}; h.sayDefault();

        System.out.println("\nProblem 4: Marker interface (Serializable) check");
        java.io.Serializable s = "hello"; System.out.println(s instanceof java.io.Serializable);

        System.out.println("\nProblem 5: Multiple interfaces implemented");
        MultiToolP1 mt = new MultiToolP1(); mt.cut(); mt.drill(); mt.saw();
    }

    static void section2(){
        System.out.println("\n" + "=".repeat(70));
        System.out.println("SECTION 2: ABSTRACT CLASSES (Problems 6-10)");
        System.out.println("=".repeat(70));
        System.out.println("Problem 6: Abstract animal shelter");
        ShelterP6 shelter = new ShelterP6() { public void addAnimal(String a){ System.out.println("Added " + a); } public void list(){ System.out.println("Listing animals..."); } };
        shelter.addAnimal("Dog"); shelter.list();

        System.out.println("\nProblem 7: Template method with daily routine");
        DailyRoutineP7 routine = new DailyRoutineP7() { void morning(){ System.out.println("Morning done"); } void night(){ System.out.println("Night done"); } }; routine.day();

        System.out.println("\nProblem 8: Abstract base with fields");
        UserP8 user = new UserP8("user1"); user.show();

        System.out.println("\nProblem 9: Polymorphic storage for shapes");
        ShapeP9[] arr = { new CircleP9(3), new RectangleP9(2,3) }; for (ShapeP9 s : arr) s.calculateArea();

        System.out.println("\nProblem 10: Abstract class vs interface decision");
        System.out.println("Use abstract class for share implementation, interface for pure contract");
    }

    static void section3(){
        System.out.println("\n" + "=".repeat(70));
        System.out.println("SECTION 3: FUNCTIONAL INTERFACES (Problems 11-15)");
        System.out.println("=".repeat(70));

        System.out.println("Problem 11: Consumer lambda"); java.util.function.Consumer<String> c = x -> System.out.println("Got: " + x); c.accept("hello");
        System.out.println("\nProblem 12: Supplier lambda"); java.util.function.Supplier<Integer> sup = () -> 42; System.out.println(sup.get());
        System.out.println("\nProblem 13: Function lambda"); java.util.function.Function<Integer,Integer> f = x -> x*x; System.out.println(f.apply(5));
        System.out.println("\nProblem 14: Predicate lambda"); java.util.function.Predicate<Integer> p = x -> x>10; System.out.println(p.test(11));
        System.out.println("\nProblem 15: Custom functional interface for operations"); MathOpP15 op = (a,b)->a*b; System.out.println(op.apply(4,5));
    }

    static void section4(){
        System.out.println("\n" + "=".repeat(70));
        System.out.println("SECTION 4: EXCEPTIONS (16-20)");
        System.out.println("=".repeat(70));
        System.out.println("Problem 16: Checked exception handling (read file)");
        try { java.nio.file.Files.readAllBytes(java.nio.file.Paths.get("nonexist.txt")); } catch (java.io.IOException e) { System.out.println("caught: " + e.getMessage()); }

        System.out.println("\nProblem 17: Unchecked exception (NumberFormat)");
        try { Integer.parseInt("abc"); } catch (NumberFormatException e) { System.out.println("caught: " + e.getMessage()); }

        System.out.println("\nProblem 18: Custom exception");
        try { throw new BusinessExceptionP18("Business rule broken"); } catch (BusinessExceptionP18 e) { System.out.println("caught: " + e.getMessage()); }

        System.out.println("\nProblem 19: Throw and throws");
        try { methodThrows(true);} catch (Exception e) { System.out.println("caught: " + e.getMessage()); }

        System.out.println("\nProblem 20: try-with-resources");
        try (java.io.ByteArrayInputStream in = new java.io.ByteArrayInputStream(new byte[]{1})) { int b = in.read(); System.out.println(b); } catch (Exception e){}
    }

    static void section5(){
        System.out.println("\n" + "=".repeat(70));
        System.out.println("SECTION 5: POLYMORPHISM & INTERFACES (21-25)");
        System.out.println("=".repeat(70));

        System.out.println("Problem 21: Strategy pattern using interface");
        PaymentContextP21 ctx = new PaymentContextP21(new CreditCardStrP21()); ctx.execute(120); ctx.setStrategy(new PayPalStrP21()); ctx.execute(60);

        System.out.println("\nProblem 22: Observer pattern minimal");
        EventSourceP22 src = new EventSourceP22(); src.register(new ConsoleL22()); src.trigger("Event1");

        System.out.println("\nProblem 23: Adapter with interfaces");
        MediaPlayerP23 mp = new MediaAdapterP23(new AdvancedPlayerP23()); mp.play("mp3", "song.mp3");

        System.out.println("\nProblem 24: Template method with abstract class");
        GameTemplateP24 g = new ChessP24(); g.play();

        System.out.println("\nProblem 25: Multiple interface default clashes");
        DefaultClashP25 dc = new DefaultClashP25(); dc.say();
    }

    static void section6(){
        System.out.println("\n" + "=".repeat(70));
        System.out.println("SECTION 6: ADVANCED DESIGN (26-30)");
        System.out.println("=".repeat(70));

        System.out.println("Problem 26: Comparable vs Comparator");
        java.util.List<P26> items = new java.util.ArrayList<>(); items.add(new P26("a", 3)); items.add(new P26("b", 1)); java.util.Collections.sort(items); System.out.println(items);

        System.out.println("\nProblem 27: Functional interface in streams");
        java.util.List<Integer> nums = java.util.Arrays.asList(1,2,3,4); int sum=nums.stream().mapToInt(x->x).sum(); System.out.println(sum);

        System.out.println("\nProblem 28: Custom exception chaining");
        try { chain1(); } catch (Exception e) { System.out.println("Chained: " + e.getMessage()); e.getCause(); }

        System.out.println("\nProblem 29: Polymorphism with interface arrays");
        Runnable[] runs = { ()->System.out.println("run1"), ()->System.out.println("run2") }; for (Runnable rr : runs) rr.run();

        System.out.println("\nProblem 30: Best practice: Choose composition vs inheritance");
        System.out.println("When to prefer composition: change behavior at runtime, avoid tight coupling");
    }

    // Supporting methods/classes for exceptions
    static void methodThrows(boolean doThrow) throws Exception { if (doThrow) throw new Exception("forced"); }
    static void chain1() throws Exception { try { chain2(); } catch (Exception e) { throw new Exception("chain1", e); } }
    static void chain2() throws Exception { throw new Exception("chain2"); }

    // Some small helper classes
    interface HasDefault{ default void sayDefault(){ System.out.println("Said default"); } }
    class MultiToolP1 implements Cutter, Driller, Sawyer { public void cut(){} public void drill(){} public void saw(){} }
    interface Cutter{ void cut(); } interface Driller{ void drill(); } interface Sawyer{ void saw(); }

    abstract class ShelterP6{ abstract void addAnimal(String a); abstract void list(); }
    abstract class DailyRoutineP7{ final void day(){ morning(); night(); } abstract void morning(); abstract void night(); }
    class UserP8{ String id; UserP8(String id){ this.id=id; } void show(){ System.out.println("User id: " + id); } }
    abstract class ShapeP9{ abstract void calculateArea(); }
    class CircleP9 extends ShapeP9{ int r; CircleP9(int r){ this.r=r;} void calculateArea(){ System.out.println("Circle area: " + Math.PI*r*r); } }
    class RectangleP9 extends ShapeP9{ int a,b; RectangleP9(int a, int b){ this.a=a; this.b=b; } void calculateArea(){ System.out.println("Rect area: " + a*b); } }

    @FunctionalInterface interface MathOpP15{ int apply(int a, int b); }
    class BusinessExceptionP18 extends Exception { BusinessExceptionP18(String m){ super(m);} }

    // Problem 21 helpers
    interface PaymentStrategyP21{ void pay(double amt); }
    class CreditCardStrP21 implements PaymentStrategyP21{ public void pay(double a){ System.out.println("Card paid:"+a);}} class PayPalStrP21 implements PaymentStrategyP21{ public void pay(double a){ System.out.println("PayPal paid:"+a);} }
    class PaymentContextP21{ PaymentStrategyP21 s; PaymentContextP21(PaymentStrategyP21 s){ this.s=s;} void setStrategy(PaymentStrategyP21 s){ this.s=s; } void execute(double a){ s.pay(a);} }

    // Problem 22 helpers
    interface EventListenerP22{ void onEvent(String m);} class ConsoleL22 implements EventListenerP22{ public void onEvent(String m){ System.out.println("L22: " + m);} }
    class EventSourceP22{ java.util.List<EventListenerP22> list = new java.util.ArrayList<>(); void register(EventListenerP22 l){ list.add(l);} void unregister(EventListenerP22 l){ list.remove(l);} void trigger(String m){ for (EventListenerP22 l : list) l.onEvent(m);} }

    // Problem 23 helpers (adapter)
    interface MediaPlayerP23{ void play(String type, String file); }
    interface AdvancedPlayerP23{ void playAdvanced(String file); }
    class AdvancedPlayerP23 implements AdvancedPlayerP23{ public void playAdvanced(String file){ System.out.println("Playing advanced: " + file);} }
    class MediaAdapterP23 implements MediaPlayerP23{ AdvancedPlayerP23 adv; MediaAdapterP23(AdvancedPlayerP23 a){ this.adv=a; } public void play(String type, String file){ adv.playAdvanced(file);} }

    // Problem 24 template
    abstract class GameTemplateP24{ final void play(){ setup(); start(); end(); } abstract void setup(); abstract void start(); void end(){ System.out.println("done"); } }
    class ChessP24 extends GameTemplateP24{ void setup(){ System.out.println("Chess setup"); } void start(){ System.out.println("Chess started"); } }

    // Problem 25 defaults clash
    interface I1{ default void say(){ System.out.println("I1"); } } interface I2{ default void say(){ System.out.println("I2"); } } class DefaultClashP25 implements I1, I2{ public void say(){ I1.super.say(); System.out.println("resolved override"); } }

    // Problem 26 comparable
    static class P26 implements Comparable<P26>{ String s; int v; P26(String s,int v){ this.s=s; this.v=v; } public int compareTo(P26 o){ return this.v - o.v; } public String toString(){ return s+":"+v;} }

}
