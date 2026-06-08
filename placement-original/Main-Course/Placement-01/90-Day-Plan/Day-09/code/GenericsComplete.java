/*
 * ============================================================================
 * JAVA GENERICS - COMPLETE GUIDE
 * Day 9: Generics and Type Safety
 * ============================================================================
 * 
 * TABLE OF CONTENTS:
 * 1. Why Generics? Type Safety Benefits
 * 2. Generic Classes
 * 3. Generic Methods
 * 4. Bounded Type Parameters
 * 5. Wildcards (?, extends, super)
 * 6. Generic Interfaces
 * 7. Multiple Type Parameters
 * 8. Generic Constructors
 * 9. Type Inference (Diamond Operator)
 * 10. Restrictions and Limitations
 * 11. Real-world Design Patterns with Generics
 * 
 * Interview Focus:
 * - PECS principle (Producer Extends, Consumer Super)
 * - Type erasure implications
 * - Wildcard use cases
 * - Generic method syntax
 */

import java.util.*;
import java.io.*;

public class GenericsComplete {

    // ========================================================================
    // SECTION 1: WHY GENERICS? TYPE SAFETY BENEFITS
    // ========================================================================

    public static class WithoutGenerics {
        
        public static void problemsWithoutGenerics() {
            System.out.println("=== Problems Without Generics ===");
            
            // Before Java 5: No type safety
            List list = new ArrayList();  // Raw type
            list.add("String");
            list.add(100);  // Can add any type - no compile error
            list.add(new Date());
            
            // Runtime error - ClassCastException
            try {
                for (Object obj : list) {
                    String str = (String) obj;  // Unsafe cast
                    System.out.println(str);
                }
            } catch (ClassCastException e) {
                System.out.println("ERROR: " + e.getMessage());
            }
            
            System.out.println();
        }
        
        public static void withGenerics() {
            System.out.println("=== Solution With Generics ===");
            
            // With generics: Type safety at compile time
            List<String> list = new ArrayList<>();
            list.add("String");
            // list.add(100);  // Compile error - type mismatch
            // list.add(new Date());  // Compile error
            
            // No casting needed, type-safe
            for (String str : list) {
                System.out.println(str);
            }
            
            System.out.println("✓ Type safety guaranteed at compile time\n");
        }
    }

    // ========================================================================
    // SECTION 2: GENERIC CLASSES
    // ========================================================================

    /**
     * Generic Box class - single type parameter
     * T = Type parameter (can be any letter, but T, E, K, V are conventional)
     */
    static class Box<T> {
        private T value;
        
        public Box(T value) {
            this.value = value;
        }
        
        public T getValue() {
            return value;
        }
        
        public void setValue(T value) {
            this.value = value;
        }
        
        @Override
        public String toString() {
            return "Box[" + value + "]";
        }
    }
    
    /**
     * Generic Pair class - two type parameters
     */
    static class Pair<K, V> {
        private K key;
        private V value;
        
        public Pair(K key, V value) {
            this.key = key;
            this.value = value;
        }
        
        public K getKey() { return key; }
        public V getValue() { return value; }
        
        @Override
        public String toString() {
            return "(" + key + ", " + value + ")";
        }
    }
    
    /**
     * Generic Triple class - three type parameters
     */
    static class Triple<A, B, C> {
        private A first;
        private B second;
        private C third;
        
        public Triple(A first, B second, C third) {
            this.first = first;
            this.second = second;
            this.third = third;
        }
        
        public A getFirst() { return first; }
        public B getSecond() { return second; }
        public C getThird() { return third; }
        
        @Override
        public String toString() {
            return "(" + first + ", " + second + ", " + third + ")";
        }
    }
    
    public static class GenericClassExamples {
        
        public static void genericClassDemo() {
            System.out.println("=== Generic Class Demo ===");
            
            // Box with String
            Box<String> stringBox = new Box<>("Hello");
            System.out.println("String box: " + stringBox);
            
            // Box with Integer
            Box<Integer> intBox = new Box<>(42);
            System.out.println("Integer box: " + intBox);
            
            // Box with custom object
            Box<List<String>> listBox = new Box<>(Arrays.asList("A", "B", "C"));
            System.out.println("List box: " + listBox);
            
            // Pair examples
            Pair<String, Integer> pair1 = new Pair<>("Age", 25);
            System.out.println("Pair: " + pair1);
            
            Pair<Integer, String> pair2 = new Pair<>(1, "First");
            System.out.println("Pair: " + pair2);
            
            // Triple example
            Triple<String, Integer, Double> triple = new Triple<>("Score", 95, 3.8);
            System.out.println("Triple: " + triple);
            
            System.out.println();
        }
    }

    // ========================================================================
    // SECTION 3: GENERIC METHODS
    // ========================================================================

    public static class GenericMethodExamples {
        
        // Generic method - type parameter before return type
        public static <T> void printArray(T[] array) {
            System.out.print("[");
            for (int i = 0; i < array.length; i++) {
                System.out.print(array[i]);
                if (i < array.length - 1) System.out.print(", ");
            }
            System.out.println("]");
        }
        
        // Generic method with return type
        public static <T> T getMiddleElement(T[] array) {
            if (array == null || array.length == 0) {
                return null;
            }
            return array[array.length / 2];
        }
        
        // Generic method with multiple type parameters
        public static <K, V> Map<K, V> createMap(K[] keys, V[] values) {
            if (keys.length != values.length) {
                throw new IllegalArgumentException("Arrays must have same length");
            }
            
            Map<K, V> map = new HashMap<>();
            for (int i = 0; i < keys.length; i++) {
                map.put(keys[i], values[i]);
            }
            return map;
        }
        
        // Generic method with bounded type parameter
        public static <T extends Comparable<T>> T findMax(T[] array) {
            if (array == null || array.length == 0) {
                return null;
            }
            
            T max = array[0];
            for (int i = 1; i < array.length; i++) {
                if (array[i].compareTo(max) > 0) {
                    max = array[i];
                }
            }
            return max;
        }
        
        // Generic method in non-generic class
        public static <E> List<E> arrayToList(E[] array) {
            List<E> list = new ArrayList<>();
            for (E element : array) {
                list.add(element);
            }
            return list;
        }
        
        public static void genericMethodDemo() {
            System.out.println("=== Generic Method Demo ===");
            
            // Print different types of arrays
            Integer[] intArray = {1, 2, 3, 4, 5};
            String[] stringArray = {"A", "B", "C"};
            Double[] doubleArray = {1.1, 2.2, 3.3};
            
            System.out.print("Integer array: ");
            printArray(intArray);
            
            System.out.print("String array: ");
            printArray(stringArray);
            
            System.out.print("Double array: ");
            printArray(doubleArray);
            
            // Get middle element
            System.out.println("\nMiddle of intArray: " + getMiddleElement(intArray));
            System.out.println("Middle of stringArray: " + getMiddleElement(stringArray));
            
            // Create map
            String[] keys = {"A", "B", "C"};
            Integer[] values = {1, 2, 3};
            Map<String, Integer> map = createMap(keys, values);
            System.out.println("\nCreated map: " + map);
            
            // Find max
            System.out.println("\nMax of intArray: " + findMax(intArray));
            System.out.println("Max of stringArray: " + findMax(stringArray));
            
            // Array to list
            List<Integer> list = arrayToList(intArray);
            System.out.println("\nArray to list: " + list);
            
            System.out.println();
        }
    }

    // ========================================================================
    // SECTION 4: BOUNDED TYPE PARAMETERS
    // ========================================================================

    /**
     * Upper bounded type parameter: T extends Number
     * Restricts T to Number and its subclasses
     */
    static class NumberBox<T extends Number> {
        private T value;
        
        public NumberBox(T value) {
            this.value = value;
        }
        
        public double doubleValue() {
            return value.doubleValue();  // Can call Number methods
        }
        
        public T getValue() {
            return value;
        }
    }
    
    /**
     * Multiple bounds: T extends Class & Interface1 & Interface2
     */
    static class ComparableBox<T extends Number & Comparable<T>> {
        private T value;
        
        public ComparableBox(T value) {
            this.value = value;
        }
        
        public boolean isGreaterThan(T other) {
            return value.compareTo(other) > 0;  // Can call Comparable methods
        }
        
        public double doubleValue() {
            return value.doubleValue();  // Can call Number methods
        }
    }
    
    public static class BoundedTypeParameterExamples {
        
        // Method with upper bounded type parameter
        public static <T extends Comparable<T>> int compare(T t1, T t2) {
            return t1.compareTo(t2);
        }
        
        // Method with multiple bounds
        public static <T extends Number & Comparable<T>> T max(T a, T b) {
            return a.compareTo(b) > 0 ? a : b;
        }
        
        public static void boundedTypeDemo() {
            System.out.println("=== Bounded Type Parameters Demo ===");
            
            // NumberBox accepts Number and subclasses
            NumberBox<Integer> intBox = new NumberBox<>(42);
            NumberBox<Double> doubleBox = new NumberBox<>(3.14);
            // NumberBox<String> stringBox = new NumberBox<>("Error");  // Compile error
            
            System.out.println("Integer box value: " + intBox.doubleValue());
            System.out.println("Double box value: " + doubleBox.doubleValue());
            
            // ComparableBox with multiple bounds
            ComparableBox<Integer> compBox1 = new ComparableBox<>(10);
            ComparableBox<Integer> compBox2 = new ComparableBox<>(20);
            
            System.out.println("\n10 > 20? " + compBox1.isGreaterThan(20));
            System.out.println("20 > 10? " + compBox2.isGreaterThan(10));
            
            // Compare method
            System.out.println("\nCompare 'apple' and 'banana': " + compare("apple", "banana"));
            System.out.println("Compare 10 and 20: " + compare(10, 20));
            
            // Max method
            System.out.println("\nMax of 10 and 20: " + max(10, 20));
            System.out.println("Max of 3.14 and 2.71: " + max(3.14, 2.71));
            
            System.out.println();
        }
    }

    // ========================================================================
    // SECTION 5: WILDCARDS (?, extends, super)
    // ========================================================================

    public static class WildcardExamples {
        
        // Unbounded wildcard: List<?>
        // Read-only access, can accept any type
        public static void printList(List<?> list) {
            for (Object obj : list) {
                System.out.print(obj + " ");
            }
            System.out.println();
        }
        
        // Upper bounded wildcard: List<? extends Number>
        // Producer: can read as Number, cannot add (except null)
        public static double sumOfList(List<? extends Number> list) {
            double sum = 0.0;
            for (Number num : list) {
                sum += num.doubleValue();
            }
            return sum;
        }
        
        // Lower bounded wildcard: List<? super Integer>
        // Consumer: can add Integer and subclasses, read as Object
        public static void addNumbers(List<? super Integer> list) {
            for (int i = 1; i <= 5; i++) {
                list.add(i);  // Can add Integer
            }
        }
        
        // PECS: Producer Extends, Consumer Super
        public static <T> void copy(List<? extends T> source, List<? super T> dest) {
            for (T item : source) {
                dest.add(item);
            }
        }
        
        public static void wildcardDemo() {
            System.out.println("=== Wildcard Demo ===");
            
            // Unbounded wildcard
            List<String> stringList = Arrays.asList("A", "B", "C");
            List<Integer> intList = Arrays.asList(1, 2, 3);
            
            System.out.print("String list: ");
            printList(stringList);
            
            System.out.print("Integer list: ");
            printList(intList);
            
            // Upper bounded wildcard (Producer Extends)
            List<Integer> integers = Arrays.asList(1, 2, 3, 4, 5);
            List<Double> doubles = Arrays.asList(1.1, 2.2, 3.3);
            
            System.out.println("\nSum of integers: " + sumOfList(integers));
            System.out.println("Sum of doubles: " + sumOfList(doubles));
            
            // Lower bounded wildcard (Consumer Super)
            List<Number> numbers = new ArrayList<>();
            List<Object> objects = new ArrayList<>();
            
            addNumbers(numbers);  // List<Number> is super of Integer
            addNumbers(objects);  // List<Object> is super of Integer
            
            System.out.println("\nNumbers after adding: " + numbers);
            System.out.println("Objects after adding: " + objects);
            
            // PECS example
            List<Integer> source = Arrays.asList(10, 20, 30);
            List<Number> destination = new ArrayList<>();
            
            copy(source, destination);
            System.out.println("\nCopied to destination: " + destination);
            
            System.out.println();
        }
        
        public static void pecsExplanation() {
            System.out.println("=== PECS Principle Explanation ===");
            System.out.println("Producer Extends, Consumer Super\n");
            
            System.out.println("? extends T (Upper bounded):");
            System.out.println("  - Use when you READ from a structure (Producer)");
            System.out.println("  - Can read as T, but cannot add (type safety)");
            System.out.println("  - Example: List<? extends Number> can be List<Integer>, List<Double>");
            System.out.println("  - You can read Numbers, but can't add (could be List<Integer>)\n");
            
            System.out.println("? super T (Lower bounded):");
            System.out.println("  - Use when you WRITE to a structure (Consumer)");
            System.out.println("  - Can add T and subclasses, but read only as Object");
            System.out.println("  - Example: List<? super Integer> can be List<Number>, List<Object>");
            System.out.println("  - You can add Integers, but read only as Object\n");
            
            System.out.println("Real-world example:");
            System.out.println("  public static <T> void copy(");
            System.out.println("      List<? extends T> source,    // Producer - we read from it");
            System.out.println("      List<? super T> dest          // Consumer - we write to it");
            System.out.println("  )");
            System.out.println();
        }
    }

    // ========================================================================
    // SECTION 6: GENERIC INTERFACES
    // ========================================================================

    /**
     * Generic interface
     */
    interface Container<T> {
        void add(T item);
        T get(int index);
        int size();
    }
    
    /**
     * Implementation of generic interface
     */
    static class SimpleContainer<T> implements Container<T> {
        private List<T> items = new ArrayList<>();
        
        @Override
        public void add(T item) {
            items.add(item);
        }
        
        @Override
        public T get(int index) {
            return items.get(index);
        }
        
        @Override
        public int size() {
            return items.size();
        }
    }
    
    /**
     * Generic interface with multiple type parameters
     */
    interface Transformer<I, O> {
        O transform(I input);
    }
    
    /**
     * String to Integer transformer
     */
    static class StringToIntegerTransformer implements Transformer<String, Integer> {
        @Override
        public Integer transform(String input) {
            return Integer.parseInt(input);
        }
    }
    
    public static class GenericInterfaceExamples {
        
        public static void genericInterfaceDemo() {
            System.out.println("=== Generic Interface Demo ===");
            
            // Container interface
            Container<String> stringContainer = new SimpleContainer<>();
            stringContainer.add("Hello");
            stringContainer.add("World");
            
            System.out.println("String container:");
            for (int i = 0; i < stringContainer.size(); i++) {
                System.out.println("  " + stringContainer.get(i));
            }
            
            Container<Integer> intContainer = new SimpleContainer<>();
            intContainer.add(1);
            intContainer.add(2);
            intContainer.add(3);
            
            System.out.println("\nInteger container:");
            for (int i = 0; i < intContainer.size(); i++) {
                System.out.println("  " + intContainer.get(i));
            }
            
            // Transformer interface
            Transformer<String, Integer> transformer = new StringToIntegerTransformer();
            Integer result = transformer.transform("123");
            System.out.println("\nTransformed '123' to: " + result);
            
            // Lambda with generic interface
            Transformer<String, String> upperCaseTransformer = String::toUpperCase;
            String upper = upperCaseTransformer.transform("hello");
            System.out.println("Transformed 'hello' to: " + upper);
            
            System.out.println();
        }
    }

    // ========================================================================
    // SECTION 7: TYPE INFERENCE AND DIAMOND OPERATOR
    // ========================================================================

    public static class TypeInferenceExamples {
        
        public static void typeInferenceDemo() {
            System.out.println("=== Type Inference Demo ===");
            
            // Before Java 7: Verbose
            List<String> list1 = new ArrayList<String>();
            Map<String, List<Integer>> map1 = new HashMap<String, List<Integer>>();
            
            // Java 7+: Diamond operator <>
            List<String> list2 = new ArrayList<>();
            Map<String, List<Integer>> map2 = new HashMap<>();
            
            System.out.println("✓ Diamond operator reduces verbosity");
            
            // Type inference in generic methods
            List<String> list = Arrays.asList("A", "B", "C");  // Type inferred
            
            // Explicit type argument (when needed)
            List<String> emptyList = Collections.<String>emptyList();
            
            // Type witness (rare cases)
            List<Integer> numbers = GenericMethodExamples.<Integer>arrayToList(
                new Integer[]{1, 2, 3}
            );
            
            System.out.println("Numbers: " + numbers);
            System.out.println();
        }
    }

    // ========================================================================
    // SECTION 8: RESTRICTIONS AND LIMITATIONS
    // ========================================================================

    public static class RestrictionsExamples {
        
        public static void restrictionsDemo() {
            System.out.println("=== Generic Restrictions and Limitations ===\n");
            
            System.out.println("1. Cannot instantiate generic types:");
            System.out.println("   // T t = new T();  // Compile error");
            System.out.println("   Reason: Type erasure - T becomes Object at runtime\n");
            
            System.out.println("2. Cannot create arrays of generic types:");
            System.out.println("   // List<String>[] array = new List<String>[10];  // Error");
            System.out.println("   Reason: Array covariance + type erasure = unsafe\n");
            
            System.out.println("3. Cannot use primitives as type arguments:");
            System.out.println("   // List<int> numbers;  // Error");
            System.out.println("   Solution: Use wrapper classes (List<Integer>)\n");
            
            System.out.println("4. Cannot create static fields of type parameter:");
            System.out.println("   class MyClass<T> {");
            System.out.println("       // private static T field;  // Error");
            System.out.println("   }");
            System.out.println("   Reason: Static belongs to class, not instance\n");
            
            System.out.println("5. Cannot use instanceof with generic types:");
            System.out.println("   // if (obj instanceof List<String>)  // Error");
            System.out.println("   Solution: if (obj instanceof List)  // OK\n");
            
            System.out.println("6. Cannot catch or throw generic exceptions:");
            System.out.println("   // class MyException<T> extends Exception  // Error");
            System.out.println("   Reason: Type erasure in catch clauses\n");
            
            System.out.println("7. Cannot overload with different generic parameters:");
            System.out.println("   // void method(List<String> list)");
            System.out.println("   // void method(List<Integer> list)  // Error");
            System.out.println("   Reason: Both become method(List) after erasure\n");
            
            // Valid workarounds
            System.out.println("WORKAROUNDS:");
            
            // Workaround 1: Use Class<T> to instantiate
            System.out.println("\n1. Instantiation via reflection:");
            demonstrateReflectionInstantiation();
            
            // Workaround 2: Wildcard for arrays
            System.out.println("\n2. Arrays with wildcards:");
            List<?>[] arrayOfLists = new List<?>[10];  // OK
            System.out.println("   List<?>[] arrayOfLists = new List<?>[10];  // OK");
            
            System.out.println();
        }
        
        private static <T> T createInstance(Class<T> clazz) {
            try {
                return clazz.getDeclaredConstructor().newInstance();
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        }
        
        private static void demonstrateReflectionInstantiation() {
            String str = createInstance(String.class);
            ArrayList<Integer> list = createInstance(ArrayList.class);
            System.out.println("   Created String: " + str);
            System.out.println("   Created ArrayList: " + list);
        }
    }

    // ========================================================================
    // SECTION 9: REAL-WORLD DESIGN PATTERNS WITH GENERICS
    // ========================================================================

    /**
     * Generic Repository Pattern
     */
    interface Repository<T, ID> {
        void save(T entity);
        T findById(ID id);
        List<T> findAll();
        void delete(ID id);
    }
    
    static class InMemoryRepository<T, ID> implements Repository<T, ID> {
        private Map<ID, T> storage = new HashMap<>();
        
        @Override
        public void save(T entity) {
            // Simplified: assume entity has getId() method
            storage.put((ID) entity.hashCode(), entity);
        }
        
        @Override
        public T findById(ID id) {
            return storage.get(id);
        }
        
        @Override
        public List<T> findAll() {
            return new ArrayList<>(storage.values());
        }
        
        @Override
        public void delete(ID id) {
            storage.remove(id);
        }
    }
    
    /**
     * Generic Builder Pattern
     */
    static class GenericBuilder<T> {
        private Class<T> type;
        private Map<String, Object> properties = new HashMap<>();
        
        public GenericBuilder(Class<T> type) {
            this.type = type;
        }
        
        public GenericBuilder<T> with(String propertyName, Object value) {
            properties.put(propertyName, value);
            return this;
        }
        
        public T build() {
            try {
                T instance = type.getDeclaredConstructor().newInstance();
                // Simplified: would use reflection to set properties
                return instance;
            } catch (Exception e) {
                throw new RuntimeException("Failed to build", e);
            }
        }
    }
    
    /**
     * Generic Factory Pattern
     */
    interface Factory<T> {
        T create();
    }
    
    static class ListFactory<E> implements Factory<List<E>> {
        @Override
        public List<E> create() {
            return new ArrayList<>();
        }
    }
    
    /**
     * Generic Singleton Holder
     */
    static class SingletonHolder<T> {
        private T instance;
        private Factory<T> factory;
        
        public SingletonHolder(Factory<T> factory) {
            this.factory = factory;
        }
        
        public synchronized T getInstance() {
            if (instance == null) {
                instance = factory.create();
            }
            return instance;
        }
    }
    
    public static class DesignPatternExamples {
        
        public static void designPatternsDemo() {
            System.out.println("=== Design Patterns with Generics ===");
            
            // Repository pattern
            System.out.println("Repository Pattern:");
            Repository<String, Integer> stringRepo = new InMemoryRepository<>();
            stringRepo.save("Hello");
            stringRepo.save("World");
            System.out.println("  All strings: " + stringRepo.findAll());
            
            // Builder pattern
            System.out.println("\nBuilder Pattern:");
            GenericBuilder<ArrayList> builder = new GenericBuilder<>(ArrayList.class);
            ArrayList list = builder.build();
            System.out.println("  Built list: " + list);
            
            // Factory pattern
            System.out.println("\nFactory Pattern:");
            Factory<List<String>> listFactory = new ListFactory<>();
            List<String> newList = listFactory.create();
            newList.add("Created by factory");
            System.out.println("  Factory-created list: " + newList);
            
            // Singleton holder
            System.out.println("\nSingleton Holder:");
            SingletonHolder<List<Integer>> holder = new SingletonHolder<>(ArrayList::new);
            List<Integer> singleton1 = holder.getInstance();
            List<Integer> singleton2 = holder.getInstance();
            System.out.println("  Same instance? " + (singleton1 == singleton2));
            
            System.out.println();
        }
    }

    // ========================================================================
    // SECTION 10: ADVANCED GENERIC TECHNIQUES
    // ========================================================================

    /**
     * Recursive type bounds - common in Fluent APIs
     */
    static class FluentBuilder<T extends FluentBuilder<T>> {
        protected String name;
        protected int value;
        
        @SuppressWarnings("unchecked")
        public T withName(String name) {
            this.name = name;
            return (T) this;
        }
        
        @SuppressWarnings("unchecked")
        public T withValue(int value) {
            this.value = value;
            return (T) this;
        }
        
        @Override
        public String toString() {
            return "FluentBuilder[name=" + name + ", value=" + value + "]";
        }
    }
    
    static class ExtendedBuilder extends FluentBuilder<ExtendedBuilder> {
        private boolean flag;
        
        public ExtendedBuilder withFlag(boolean flag) {
            this.flag = flag;
            return this;
        }
        
        @Override
        public String toString() {
            return "ExtendedBuilder[name=" + name + ", value=" + value + ", flag=" + flag + "]";
        }
    }
    
    /**
     * Type-safe heterogeneous container
     */
    static class Favorites {
        private Map<Class<?>, Object> favorites = new HashMap<>();
        
        public <T> void putFavorite(Class<T> type, T instance) {
            favorites.put(type, type.cast(instance));
        }
        
        public <T> T getFavorite(Class<T> type) {
            return type.cast(favorites.get(type));
        }
    }
    
    public static class AdvancedTechniquesExamples {
        
        public static void advancedTechniquesDemo() {
            System.out.println("=== Advanced Generic Techniques ===");
            
            // Recursive type bounds
            System.out.println("Recursive Type Bounds (Fluent API):");
            ExtendedBuilder builder = new ExtendedBuilder()
                .withName("Test")
                .withValue(100)
                .withFlag(true);
            System.out.println("  " + builder);
            
            // Type-safe heterogeneous container
            System.out.println("\nType-Safe Heterogeneous Container:");
            Favorites favorites = new Favorites();
            favorites.putFavorite(String.class, "Java");
            favorites.putFavorite(Integer.class, 42);
            favorites.putFavorite(Class.class, Favorites.class);
            
            String favString = favorites.getFavorite(String.class);
            Integer favInt = favorites.getFavorite(Integer.class);
            Class<?> favClass = favorites.getFavorite(Class.class);
            
            System.out.println("  Favorite String: " + favString);
            System.out.println("  Favorite Integer: " + favInt);
            System.out.println("  Favorite Class: " + favClass);
            
            System.out.println();
        }
    }

    // ========================================================================
    // MAIN METHOD - RUN ALL EXAMPLES
    // ========================================================================

    public static void main(String[] args) {
        System.out.println("╔════════════════════════════════════════════════════════════╗");
        System.out.println("║          JAVA GENERICS - COMPLETE GUIDE                    ║");
        System.out.println("║          Day 9: Type Safety and Generic Programming        ║");
        System.out.println("╚════════════════════════════════════════════════════════════╝\n");
        
        // Section 1: Why Generics
        WithoutGenerics.problemsWithoutGenerics();
        WithoutGenerics.withGenerics();
        
        // Section 2: Generic Classes
        GenericClassExamples.genericClassDemo();
        
        // Section 3: Generic Methods
        GenericMethodExamples.genericMethodDemo();
        
        // Section 4: Bounded Type Parameters
        BoundedTypeParameterExamples.boundedTypeDemo();
        
        // Section 5: Wildcards
        WildcardExamples.wildcardDemo();
        WildcardExamples.pecsExplanation();
        
        // Section 6: Generic Interfaces
        GenericInterfaceExamples.genericInterfaceDemo();
        
        // Section 7: Type Inference
        TypeInferenceExamples.typeInferenceDemo();
        
        // Section 8: Restrictions
        RestrictionsExamples.restrictionsDemo();
        
        // Section 9: Design Patterns
        DesignPatternExamples.designPatternsDemo();
        
        // Section 10: Advanced Techniques
        AdvancedTechniquesExamples.advancedTechniquesDemo();
        
        System.out.println("╔════════════════════════════════════════════════════════════╗");
        System.out.println("║                    GENERICS SUMMARY                        ║");
        System.out.println("╠════════════════════════════════════════════════════════════╣");
        System.out.println("║ Benefits:                                                  ║");
        System.out.println("║   ✓ Type safety at compile time                           ║");
        System.out.println("║   ✓ No casting needed                                      ║");
        System.out.println("║   ✓ Code reusability                                       ║");
        System.out.println("║   ✓ Stronger type checks                                   ║");
        System.out.println("║                                                            ║");
        System.out.println("║ Key Concepts:                                              ║");
        System.out.println("║   • Generic classes/methods/interfaces                     ║");
        System.out.println("║   • Bounded type parameters (extends)                      ║");
        System.out.println("║   • Wildcards (?, extends, super)                          ║");
        System.out.println("║   • PECS: Producer Extends, Consumer Super                 ║");
        System.out.println("║   • Type erasure implications                              ║");
        System.out.println("╚════════════════════════════════════════════════════════════╝");
    }
}
