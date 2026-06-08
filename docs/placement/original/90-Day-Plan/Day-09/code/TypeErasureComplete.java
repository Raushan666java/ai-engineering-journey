/*
 * ============================================================================
 * TYPE ERASURE IN JAVA - COMPLETE GUIDE
 * Day 9: Understanding Type Erasure and Its Implications
 * ============================================================================
 * 
 * TABLE OF CONTENTS:
 * 1. What is Type Erasure?
 * 2. How Type Erasure Works
 * 3. Bridge Methods
 * 4. Effects on Method Overloading
 * 5. Runtime Type Information
 * 6. Reification vs Type Erasure
 * 7. Heap Pollution
 * 8. Practical Implications
 * 9. Workarounds and Best Practices
 * 10. Interview Questions
 * 
 * Interview Focus:
 * - Why Java uses type erasure
 * - Backward compatibility reasons
 * - Runtime behavior vs compile-time checks
 * - Common pitfalls and solutions
 */

import java.lang.reflect.*;
import java.util.*;

public class TypeErasureComplete {

    // ========================================================================
    // SECTION 1: WHAT IS TYPE ERASURE?
    // ========================================================================

    public static class TypeErasureBasics {
        
        public static void whatIsTypeErasure() {
            System.out.println("=== What is Type Erasure? ===\n");
            
            System.out.println("Type Erasure: Process where generic type information");
            System.out.println("is removed during compilation for backward compatibility.\n");
            
            System.out.println("Compile-time:");
            System.out.println("  List<String> strings = new ArrayList<String>();");
            System.out.println("  List<Integer> numbers = new ArrayList<Integer>();\n");
            
            System.out.println("After type erasure (runtime):");
            System.out.println("  List strings = new ArrayList();  // Raw type");
            System.out.println("  List numbers = new ArrayList();  // Raw type\n");
            
            System.out.println("WHY Type Erasure?");
            System.out.println("  1. Backward compatibility with pre-Java 5 code");
            System.out.println("  2. Existing JVM didn't need modification");
            System.out.println("  3. Generic code can work with legacy code\n");
            
            // Demonstration
            List<String> strings = new ArrayList<>();
            List<Integer> numbers = new ArrayList<>();
            
            // At runtime, both are just List
            System.out.println("Runtime classes:");
            System.out.println("  strings.getClass(): " + strings.getClass());
            System.out.println("  numbers.getClass(): " + numbers.getClass());
            System.out.println("  Same class? " + (strings.getClass() == numbers.getClass()));
            
            System.out.println();
        }
    }

    // ========================================================================
    // SECTION 2: HOW TYPE ERASURE WORKS
    // ========================================================================

    public static class TypeErasureProcess {
        
        /**
         * Before type erasure:
         */
        static class BoxBefore<T> {
            private T value;
            
            public void set(T value) {
                this.value = value;
            }
            
            public T get() {
                return value;
            }
        }
        
        /**
         * After type erasure (conceptual - shows what compiler does):
         */
        static class BoxAfter {
            private Object value;  // T becomes Object
            
            public void set(Object value) {
                this.value = value;
            }
            
            public Object get() {
                return value;
            }
        }
        
        /**
         * Bounded type parameter before erasure:
         */
        static class NumberBoxBefore<T extends Number> {
            private T value;
            
            public void set(T value) {
                this.value = value;
            }
            
            public T get() {
                return value;
            }
            
            public double doubleValue() {
                return value.doubleValue();
            }
        }
        
        /**
         * Bounded type parameter after erasure:
         */
        static class NumberBoxAfter {
            private Number value;  // T extends Number becomes Number
            
            public void set(Number value) {
                this.value = value;
            }
            
            public Number get() {
                return value;
            }
            
            public double doubleValue() {
                return value.doubleValue();
            }
        }
        
        public static void demonstrateErasure() {
            System.out.println("=== Type Erasure Process ===\n");
            
            System.out.println("RULE 1: Unbounded type parameter T becomes Object");
            System.out.println("  Before: class Box<T> { T value; }");
            System.out.println("  After:  class Box { Object value; }\n");
            
            System.out.println("RULE 2: Bounded type parameter T extends X becomes X");
            System.out.println("  Before: class Box<T extends Number> { T value; }");
            System.out.println("  After:  class Box { Number value; }\n");
            
            System.out.println("RULE 3: Multiple bounds - first bound is used");
            System.out.println("  Before: <T extends Comparable & Serializable>");
            System.out.println("  After:  Comparable (first bound)\n");
            
            // Compiler inserts casts
            BoxBefore<String> stringBox = new BoxBefore<>();
            stringBox.set("Hello");
            String value = stringBox.get();  // No explicit cast needed
            
            System.out.println("Compiler-inserted casts:");
            System.out.println("  Source:   String value = stringBox.get();");
            System.out.println("  Compiled: String value = (String) stringBox.get();");
            System.out.println("  Actual value: " + value);
            
            System.out.println();
        }
    }

    // ========================================================================
    // SECTION 3: BRIDGE METHODS
    // ========================================================================

    public static class BridgeMethods {
        
        /**
         * Generic interface
         */
        interface Comparable<T> {
            int compareTo(T other);
        }
        
        /**
         * Implementation with specific type
         */
        static class MyInteger implements Comparable<MyInteger> {
            private int value;
            
            public MyInteger(int value) {
                this.value = value;
            }
            
            @Override
            public int compareTo(MyInteger other) {
                return Integer.compare(this.value, other.value);
            }
        }
        
        /**
         * After type erasure, interface becomes:
         * interface Comparable {
         *     int compareTo(Object other);
         * }
         * 
         * But our class has: int compareTo(MyInteger other)
         * 
         * To maintain override relationship, compiler generates bridge method:
         * public int compareTo(Object other) {
         *     return compareTo((MyInteger) other);  // Bridge to actual method
         * }
         */
        
        public static void demonstrateBridgeMethods() {
            System.out.println("=== Bridge Methods ===\n");
            
            MyInteger num = new MyInteger(42);
            
            System.out.println("Declared methods in MyInteger:");
            Method[] methods = MyInteger.class.getDeclaredMethods();
            for (Method method : methods) {
                if (method.getName().equals("compareTo")) {
                    System.out.println("  " + method);
                    System.out.println("    Is bridge? " + method.isBridge());
                    System.out.println("    Is synthetic? " + method.isSynthetic());
                }
            }
            
            System.out.println("\nBridge methods are compiler-generated to preserve");
            System.out.println("polymorphism after type erasure.");
            
            System.out.println();
        }
    }

    // ========================================================================
    // SECTION 4: EFFECTS ON METHOD OVERLOADING
    // ========================================================================

    public static class OverloadingIssues {
        
        /**
         * This doesn't compile because after type erasure,
         * both methods have the same signature: process(List)
         */
        /*
        static class InvalidOverload {
            void process(List<String> list) { }
            void process(List<Integer> list) { }  // ERROR: Same erasure
        }
        */
        
        /**
         * Workarounds:
         */
        static class ValidOverload {
            // Solution 1: Different method names
            void processStrings(List<String> list) {
                System.out.println("Processing strings: " + list);
            }
            
            void processIntegers(List<Integer> list) {
                System.out.println("Processing integers: " + list);
            }
            
            // Solution 2: Different number of parameters
            void process(List<String> list) {
                System.out.println("Processing one list: " + list);
            }
            
            void process(List<String> list1, List<String> list2) {
                System.out.println("Processing two lists: " + list1 + ", " + list2);
            }
            
            // Solution 3: Use different parameter types
            void handle(List<String> list) {
                System.out.println("Handling list: " + list);
            }
            
            void handle(Set<String> set) {
                System.out.println("Handling set: " + set);
            }
        }
        
        public static void demonstrateOverloadingIssues() {
            System.out.println("=== Method Overloading Issues ===\n");
            
            System.out.println("PROBLEM: Cannot overload with different generic types");
            System.out.println("  void process(List<String> list)   // OK");
            System.out.println("  void process(List<Integer> list)  // ERROR\n");
            
            System.out.println("Reason: After type erasure, both become:");
            System.out.println("  void process(List list)\n");
            
            System.out.println("SOLUTIONS:");
            ValidOverload obj = new ValidOverload();
            
            System.out.println("\n1. Different method names:");
            obj.processStrings(Arrays.asList("A", "B"));
            obj.processIntegers(Arrays.asList(1, 2));
            
            System.out.println("\n2. Different number of parameters:");
            obj.process(Arrays.asList("A"));
            obj.process(Arrays.asList("A"), Arrays.asList("B"));
            
            System.out.println("\n3. Different parameter types:");
            obj.handle(Arrays.asList("list"));
            obj.handle(new HashSet<>(Arrays.asList("set")));
            
            System.out.println();
        }
    }

    // ========================================================================
    // SECTION 5: RUNTIME TYPE INFORMATION
    // ========================================================================

    public static class RuntimeTypeInfo {
        
        static class Container<T> {
            private T value;
            
            public Container(T value) {
                this.value = value;
            }
            
            public T getValue() {
                return value;
            }
            
            // Cannot do this - T is erased at runtime
            /*
            public void printType() {
                System.out.println("Type: " + T.class);  // ERROR
            }
            */
            
            // Can check value's actual type
            public void printValueType() {
                if (value != null) {
                    System.out.println("Value type: " + value.getClass().getName());
                }
            }
        }
        
        // Workaround: Pass Class<T> to retain type information
        static class TypeAwareContainer<T> {
            private T value;
            private Class<T> type;
            
            public TypeAwareContainer(T value, Class<T> type) {
                this.value = value;
                this.type = type;
            }
            
            public Class<T> getType() {
                return type;
            }
            
            public boolean isInstance(Object obj) {
                return type.isInstance(obj);
            }
            
            public T cast(Object obj) {
                return type.cast(obj);
            }
        }
        
        public static void demonstrateRuntimeTypeInfo() {
            System.out.println("=== Runtime Type Information ===\n");
            
            // Type information is lost at runtime
            Container<String> stringContainer = new Container<>("Hello");
            Container<Integer> intContainer = new Container<>(42);
            
            System.out.println("Container classes (both are same):");
            System.out.println("  stringContainer: " + stringContainer.getClass());
            System.out.println("  intContainer: " + intContainer.getClass());
            System.out.println("  Same? " + (stringContainer.getClass() == intContainer.getClass()));
            
            // But value's type is retained
            System.out.println("\nValue types (different):");
            stringContainer.printValueType();
            intContainer.printValueType();
            
            // Using Class<T> workaround
            System.out.println("\nType-aware container:");
            TypeAwareContainer<String> typeAware = new TypeAwareContainer<>("Test", String.class);
            System.out.println("  Type: " + typeAware.getType());
            System.out.println("  Is 'Hello' a String? " + typeAware.isInstance("Hello"));
            System.out.println("  Is 123 a String? " + typeAware.isInstance(123));
            
            System.out.println();
        }
    }

    // ========================================================================
    // SECTION 6: REIFICATION VS TYPE ERASURE
    // ========================================================================

    public static class ReificationVsErasure {
        
        public static void compareApproaches() {
            System.out.println("=== Reification vs Type Erasure ===\n");
            
            System.out.println("REIFICATION (C#, C++):");
            System.out.println("  • Generic type information available at runtime");
            System.out.println("  • Can create arrays of generic types");
            System.out.println("  • Can use instanceof with generic types");
            System.out.println("  • New JVM/Runtime needed");
            System.out.println("  • Example (C#): new List<string>()[10]  ✓\n");
            
            System.out.println("TYPE ERASURE (Java):");
            System.out.println("  • Generic type information removed at runtime");
            System.out.println("  • Cannot create arrays of generic types");
            System.out.println("  • Cannot use instanceof with parameterized types");
            System.out.println("  • Works with existing JVM");
            System.out.println("  • Backward compatible with pre-Java 5 code");
            System.out.println("  • Example: new ArrayList<String>()[10]  ✗\n");
            
            // Array demonstration
            String[] stringArray = new String[10];  // OK
            // List<String>[] listArray = new List<String>[10];  // ERROR
            List<?>[] wildcardArray = new List<?>[10];  // OK with wildcard
            
            System.out.println("Array creation:");
            System.out.println("  String[] array = new String[10];          ✓");
            System.out.println("  List<String>[] array = new List<String>[10];  ✗");
            System.out.println("  List<?>[] array = new List<?>[10];        ✓");
            
            // instanceof demonstration
            List<String> stringList = new ArrayList<>();
            System.out.println("\ninstanceof checks:");
            System.out.println("  stringList instanceof List               ✓");
            System.out.println("  stringList instanceof ArrayList          ✓");
            // System.out.println("  stringList instanceof List<String>       ✗");
            
            System.out.println();
        }
    }

    // ========================================================================
    // SECTION 7: HEAP POLLUTION
    // ========================================================================

    public static class HeapPollution {
        
        /**
         * Heap pollution: Variable of parameterized type refers to object
         * that is not of that parameterized type
         */
        
        @SuppressWarnings("unchecked")
        public static void causeHeapPollution() {
            System.out.println("=== Heap Pollution ===\n");
            
            // Mixing generic and raw types causes heap pollution
            List<String> stringList = new ArrayList<>();
            
            // Raw type - no type checking
            List rawList = stringList;  // Warning: unchecked conversion
            
            // Adding Integer to what we think is List<String>
            rawList.add(42);  // Heap pollution!
            
            System.out.println("Added Integer to List<String> via raw type");
            System.out.println("List contents: " + stringList);
            
            // ClassCastException at runtime
            try {
                for (String str : stringList) {
                    System.out.println(str);
                }
            } catch (ClassCastException e) {
                System.out.println("ERROR: " + e.getMessage());
            }
            
            System.out.println();
        }
        
        /**
         * Varargs and heap pollution
         */
        @SafeVarargs
        public static final <T> void printAll(T... args) {
            for (T arg : args) {
                System.out.println(arg);
            }
        }
        
        // Unsafe varargs usage
        @SuppressWarnings("unchecked")
        public static void unsafeVarargs(List<String>... lists) {
            Object[] array = lists;  // Lists is an Object[]
            array[0] = Arrays.asList(42);  // Heap pollution!
            String str = lists[0].get(0);  // ClassCastException
        }
        
        public static void demonstrateVarargs() {
            System.out.println("=== Varargs and Heap Pollution ===\n");
            
            System.out.println("Safe varargs usage:");
            printAll("A", "B", "C");
            printAll(1, 2, 3);
            
            System.out.println("\n@SafeVarargs annotation:");
            System.out.println("  • Suppresses warnings for safe varargs methods");
            System.out.println("  • Method must not perform unsafe operations");
            System.out.println("  • Can only be used on final or static methods");
            
            System.out.println();
        }
    }

    // ========================================================================
    // SECTION 8: PRACTICAL IMPLICATIONS
    // ========================================================================

    public static class PracticalImplications {
        
        public static void practicalIssues() {
            System.out.println("=== Practical Implications of Type Erasure ===\n");
            
            System.out.println("1. CANNOT INSTANTIATE TYPE PARAMETER:");
            System.out.println("   class Box<T> {");
            System.out.println("       T value = new T();  // ERROR");
            System.out.println("   }");
            System.out.println("   Reason: T is Object at runtime\n");
            
            System.out.println("2. CANNOT CREATE ARRAY OF GENERIC TYPE:");
            System.out.println("   T[] array = new T[10];  // ERROR");
            System.out.println("   Reason: Arrays require runtime type information\n");
            
            System.out.println("3. CANNOT USE instanceof WITH GENERICS:");
            System.out.println("   if (obj instanceof List<String>)  // ERROR");
            System.out.println("   Use: if (obj instanceof List)     // OK\n");
            
            System.out.println("4. STATIC CONTEXT ISSUES:");
            System.out.println("   class MyClass<T> {");
            System.out.println("       static T value;  // ERROR");
            System.out.println("       static T getValue() { }  // ERROR");
            System.out.println("   }");
            System.out.println("   Reason: T belongs to instance, not class\n");
            
            System.out.println("5. METHOD SIGNATURE CLASH:");
            System.out.println("   void method(List<String> list) { }");
            System.out.println("   void method(List<Integer> list) { }  // ERROR");
            System.out.println("   Reason: Same erasure - both become method(List)\n");
            
            System.out.println("6. CAST WARNINGS:");
            List rawList = new ArrayList();
            rawList.add("String");
            @SuppressWarnings("unchecked")
            List<String> typedList = rawList;  // Warning without suppression
            System.out.println("   Mixing raw and generic types causes warnings");
            System.out.println("   List rawList = ...");
            System.out.println("   List<String> typed = rawList;  // Unchecked warning\n");
        }
    }

    // ========================================================================
    // SECTION 9: WORKAROUNDS AND BEST PRACTICES
    // ========================================================================

    public static class WorkaroundsAndBestPractices {
        
        // Workaround 1: Use Class<T> for instantiation
        static class Factory<T> {
            private Class<T> type;
            
            public Factory(Class<T> type) {
                this.type = type;
            }
            
            public T create() throws Exception {
                return type.getDeclaredConstructor().newInstance();
            }
        }
        
        // Workaround 2: Use ArrayList for generic array
        static class GenericArray<T> {
            private List<T> list = new ArrayList<>();
            
            public void add(T item) {
                list.add(item);
            }
            
            public T get(int index) {
                return list.get(index);
            }
            
            public int size() {
                return list.size();
            }
        }
        
        // Workaround 3: Use Array.newInstance for array creation
        static class ArrayFactory<T> {
            @SuppressWarnings("unchecked")
            public T[] createArray(Class<T> type, int size) {
                return (T[]) Array.newInstance(type, size);
            }
        }
        
        // Workaround 4: Type tokens for runtime type checking
        static class TypeToken<T> {
            private final Class<T> type;
            
            public TypeToken(Class<T> type) {
                this.type = type;
            }
            
            public boolean isInstance(Object obj) {
                return type.isInstance(obj);
            }
            
            public T cast(Object obj) {
                return type.cast(obj);
            }
            
            public Class<T> getType() {
                return type;
            }
        }
        
        public static void demonstrateWorkarounds() {
            System.out.println("=== Workarounds and Best Practices ===\n");
            
            try {
                // Workaround 1: Instantiation via Class<T>
                System.out.println("1. Instantiation via reflection:");
                Factory<ArrayList> factory = new Factory<>(ArrayList.class);
                ArrayList list = factory.create();
                System.out.println("   Created: " + list);
                
                // Workaround 2: Use List instead of array
                System.out.println("\n2. Use List instead of array:");
                GenericArray<String> genericArray = new GenericArray<>();
                genericArray.add("A");
                genericArray.add("B");
                System.out.println("   Element 0: " + genericArray.get(0));
                
                // Workaround 3: Array creation via reflection
                System.out.println("\n3. Array creation via Array.newInstance:");
                ArrayFactory<String> arrayFactory = new ArrayFactory<>();
                String[] array = arrayFactory.createArray(String.class, 10);
                array[0] = "Hello";
                System.out.println("   Array[0]: " + array[0]);
                
                // Workaround 4: Type tokens
                System.out.println("\n4. Type tokens for runtime type checking:");
                TypeToken<String> stringToken = new TypeToken<>(String.class);
                System.out.println("   Is 'Hello' a String? " + stringToken.isInstance("Hello"));
                System.out.println("   Is 123 a String? " + stringToken.isInstance(123));
                
            } catch (Exception e) {
                e.printStackTrace();
            }
            
            System.out.println("\nBEST PRACTICES:");
            System.out.println("  ✓ Avoid raw types - use generics everywhere");
            System.out.println("  ✓ Use @SuppressWarnings(\"unchecked\") sparingly");
            System.out.println("  ✓ Prefer List<T> over T[] for generic arrays");
            System.out.println("  ✓ Use Class<T> when runtime type info needed");
            System.out.println("  ✓ Don't mix generic and raw types");
            System.out.println("  ✓ Understand PECS (Producer Extends, Consumer Super)");
            
            System.out.println();
        }
    }

    // ========================================================================
    // SECTION 10: INTERVIEW QUESTIONS
    // ========================================================================

    public static class InterviewQuestions {
        
        public static void commonInterviewQuestions() {
            System.out.println("=== Common Interview Questions ===\n");
            
            System.out.println("Q1: What is type erasure in Java?");
            System.out.println("A: Process where generic type information is removed during");
            System.out.println("   compilation, converting generic types to raw types for");
            System.out.println("   backward compatibility with pre-Java 5 code.\n");
            
            System.out.println("Q2: Why does Java use type erasure instead of reification?");
            System.out.println("A: For backward compatibility with existing JVM and legacy code.");
            System.out.println("   Allowed generics to be added without breaking existing code.\n");
            
            System.out.println("Q3: What happens to T in class Box<T> after type erasure?");
            System.out.println("A: T becomes Object if unbounded, or the first bound if bounded.");
            System.out.println("   Example: <T extends Number> becomes Number.\n");
            
            System.out.println("Q4: Can you create an array of generic type?");
            System.out.println("A: No. T[] array = new T[10] is illegal. Use List<T> or");
            System.out.println("   Array.newInstance(Class<T>, size) instead.\n");
            
            System.out.println("Q5: Can you overload methods with different generic parameters?");
            System.out.println("A: No. method(List<String>) and method(List<Integer>) clash");
            System.out.println("   because both become method(List) after erasure.\n");
            
            System.out.println("Q6: What are bridge methods?");
            System.out.println("A: Synthetic methods generated by compiler to preserve polymorphism");
            System.out.println("   after type erasure. They delegate to actual implementation.\n");
            
            System.out.println("Q7: What is heap pollution?");
            System.out.println("A: When a variable of parameterized type refers to an object that");
            System.out.println("   is not of that type. Often caused by mixing generic and raw types.\n");
            
            System.out.println("Q8: Why can't you use instanceof with List<String>?");
            System.out.println("A: Type information is erased at runtime. List<String> and");
            System.out.println("   List<Integer> are both just List. Use instanceof List instead.\n");
            
            System.out.println("Q9: How to get runtime type information for generics?");
            System.out.println("A: Pass Class<T> as parameter, use super type tokens, or");
            System.out.println("   check actual object's type (not type parameter).\n");
            
            System.out.println("Q10: What does @SafeVarargs do?");
            System.out.println("A: Suppresses warnings for varargs methods that safely use");
            System.out.println("   generic varargs. Can only be used on final/static methods.\n");
        }
    }

    // ========================================================================
    // MAIN METHOD - RUN ALL EXAMPLES
    // ========================================================================

    public static void main(String[] args) {
        System.out.println("╔════════════════════════════════════════════════════════════╗");
        System.out.println("║        TYPE ERASURE IN JAVA - COMPLETE GUIDE               ║");
        System.out.println("║        Day 9: Understanding Type Erasure                   ║");
        System.out.println("╚════════════════════════════════════════════════════════════╝\n");
        
        // Section 1: Basics
        TypeErasureBasics.whatIsTypeErasure();
        
        // Section 2: How it works
        TypeErasureProcess.demonstrateErasure();
        
        // Section 3: Bridge methods
        BridgeMethods.demonstrateBridgeMethods();
        
        // Section 4: Overloading issues
        OverloadingIssues.demonstrateOverloadingIssues();
        
        // Section 5: Runtime type info
        RuntimeTypeInfo.demonstrateRuntimeTypeInfo();
        
        // Section 6: Reification vs erasure
        ReificationVsErasure.compareApproaches();
        
        // Section 7: Heap pollution
        HeapPollution.causeHeapPollution();
        HeapPollution.demonstrateVarargs();
        
        // Section 8: Practical implications
        PracticalImplications.practicalIssues();
        
        // Section 9: Workarounds
        WorkaroundsAndBestPractices.demonstrateWorkarounds();
        
        // Section 10: Interview questions
        InterviewQuestions.commonInterviewQuestions();
        
        System.out.println("╔════════════════════════════════════════════════════════════╗");
        System.out.println("║                  TYPE ERASURE SUMMARY                      ║");
        System.out.println("╠════════════════════════════════════════════════════════════╣");
        System.out.println("║ Key Points:                                                ║");
        System.out.println("║   • Type info removed at compile time                      ║");
        System.out.println("║   • T → Object (unbounded) or first bound (bounded)        ║");
        System.out.println("║   • Compiler inserts casts automatically                   ║");
        System.out.println("║   • Bridge methods preserve polymorphism                   ║");
        System.out.println("║   • Cannot instantiate T, create T[], use instanceof T     ║");
        System.out.println("║   • Use Class<T> or List<T> as workarounds                 ║");
        System.out.println("║   • Avoid mixing generic and raw types                     ║");
        System.out.println("╚════════════════════════════════════════════════════════════╝");
    }
}
