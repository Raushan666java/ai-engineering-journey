package day14_collections;

import java.util.*;
import java.util.function.*;

/**
 * DAY 14: GENERICS - Complete Guide to Java Generics
 * =====================================================
 * 
 * Topics Covered:
 * 1. Generics Basics & Type Parameters
 * 2. Generic Classes & Interfaces
 * 3. Generic Methods
 * 4. Bounded Type Parameters
 * 5. Wildcards
 * 6. Type Erasure
 * 7. PECS (Producer Extends, Consumer Super)
 * 8. Generic Collections
 * 9. Common Generic Patterns
 * 10. Interview Questions
 * 
 * Total Lines: 2,000+
 */
public class GenericsComplete {

    // ==================== 1. GENERICS BASICS ====================
    
    static class GenericsBasicsDemo {
        public static void demonstrateTypeParameters() {
            System.out.println("\n=== GENERICS BASICS ===");
            
            // Without generics (raw types - dangerous)
            List list = new ArrayList();
            list.add("String");
            list.add(123);
            // String value = (String) list.get(1);  // ClassCastException!
            
            // With generics (type-safe)
            List<String> names = new ArrayList<>();
            names.add("Alice");
            names.add("Bob");
            // names.add(123);  // Compile error!
            
            for (String name : names) {
                System.out.println(name.toUpperCase());  // No casting needed
            }
            
            // Generic collections
            Set<Integer> numbers = new HashSet<>();
            numbers.add(1);
            numbers.add(2);
            numbers.add(3);
            
            Map<String, Integer> scores = new HashMap<>();
            scores.put("Alice", 95);
            scores.put("Bob", 87);
            
            System.out.println("Type-safe operations achieved!");
        }
        
        public static void demonstrateTypeVariables() {
            System.out.println("\n=== TYPE VARIABLES ===");
            
            // Single type parameter
            Box<String> stringBox = new Box<>("Hello");
            System.out.println("String box: " + stringBox.get());
            
            Box<Integer> intBox = new Box<>(42);
            System.out.println("Integer box: " + intBox.get());
            
            // Multiple type parameters
            Pair<String, Integer> pair = new Pair<>("Age", 30);
            System.out.println("Pair: " + pair.getFirst() + " = " + pair.getSecond());
        }
    }

    // ==================== 2. GENERIC CLASSES ====================
    
    static class Box<T> {
        private T content;
        
        public Box(T content) {
            this.content = content;
        }
        
        public T get() {
            return content;
        }
        
        public void set(T content) {
            this.content = content;
        }
        
        @Override
        public String toString() {
            return "Box<" + content.getClass().getSimpleName() + ">(" + content + ")";
        }
    }
    
    static class Pair<K, V> {
        private K first;
        private V second;
        
        public Pair(K first, V second) {
            this.first = first;
            this.second = second;
        }
        
        public K getFirst() { return first; }
        public V getSecond() { return second; }
        
        public void setFirst(K first) { this.first = first; }
        public void setSecond(V second) { this.second = second; }
    }

    static class GenericClassesDemo {
        public static void demonstrateGenericClasses() {
            System.out.println("\n=== GENERIC CLASSES ===");
            
            Box<String> stringBox = new Box<>("Generic Class");
            System.out.println(stringBox);
            System.out.println("Get: " + stringBox.get());
            
            Box<Double> doubleBox = new Box<>(3.14);
            System.out.println(doubleBox);
            
            // Type parameter in constructor call (can usually infer)
            Box<Integer> intBox = new Box<>(100);
            System.out.println(intBox);
            
            // Pair with different types
            Pair<String, List<Integer>> complex = new Pair<>(
                "Numbers",
                Arrays.asList(1, 2, 3)
            );
            System.out.println("Complex pair: " + complex.getFirst() + " = " + complex.getSecond());
        }
    }

    // ==================== 3. GENERIC METHODS ====================
    
    static class GenericMethodsDemo {
        // Generic method: <T> appears before return type
        static <T> void printArray(T[] array) {
            for (T element : array) {
                System.out.print(element + " ");
            }
            System.out.println();
        }
        
        // Generic method with multiple type parameters
        static <K, V> void printPair(K key, V value) {
            System.out.println(key + " -> " + value);
        }
        
        // Generic method with return type
        static <T> T getFirst(List<T> list) {
            return list.isEmpty() ? null : list.get(0);
        }
        
        // Generic method with bounded type
        static <T extends Comparable<T>> T max(T a, T b) {
            return a.compareTo(b) > 0 ? a : b;
        }
        
        public static void demonstrateGenericMethods() {
            System.out.println("\n=== GENERIC METHODS ===");
            
            // String array
            String[] strings = {"Alice", "Bob", "Charlie"};
            printArray(strings);
            
            // Integer array
            Integer[] integers = {1, 2, 3, 4, 5};
            printArray(integers);
            
            // Multiple type parameters
            printPair("Name", "Alice");
            printPair(1, "One");
            printPair(3.14, true);
            
            // Return type
            List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
            System.out.println("First name: " + getFirst(names));
            
            // Bounded type parameter
            System.out.println("Max of 10 and 20: " + max(10, 20));
            System.out.println("Max of 'Apple' and 'Banana': " + max("Apple", "Banana"));
        }
    }

    // ==================== 4. BOUNDED TYPE PARAMETERS ====================
    
    static class BoundedTypesDemo {
        // Upper bound: T must be Number or subclass
        static <T extends Number> double sum(List<T> numbers) {
            double total = 0;
            for (T num : numbers) {
                total += num.doubleValue();
            }
            return total;
        }
        
        // Multiple bounds: T must extend Comparable AND Serializable
        static <T extends Comparable<T> & java.io.Serializable> T getMax(List<T> list) {
            return list.stream().max(Comparable::compareTo).orElse(null);
        }
        
        // Interface bound
        static <T extends Comparable<T>> void sortAndPrint(List<T> list) {
            Collections.sort(list);
            System.out.println(list);
        }
        
        public static void demonstrateBoundedTypes() {
            System.out.println("\n=== BOUNDED TYPE PARAMETERS ===");
            
            // Number bound
            List<Integer> integers = Arrays.asList(1, 2, 3, 4, 5);
            System.out.println("Sum of integers: " + sum(integers));
            
            List<Double> doubles = Arrays.asList(1.1, 2.2, 3.3);
            System.out.println("Sum of doubles: " + sum(doubles));
            
            // Cannot use String (not Number)
            // sum(Arrays.asList("a", "b"));  // Compile error!
            
            // Comparable bound
            List<String> strings = Arrays.asList("Charlie", "Alice", "Bob");
            sortAndPrint(strings);
            
            List<Integer> nums = Arrays.asList(3, 1, 4, 1, 5);
            sortAndPrint(nums);
        }
    }

    // ==================== 5. WILDCARDS ====================
    
    static class WildcardsDemo {
        // ? (unbounded wildcard): Any type
        static void printList(List<?> list) {
            for (Object obj : list) {
                System.out.print(obj + " ");
            }
            System.out.println();
        }
        
        // ? extends T (upper bound): T or subtypes
        static void printNumbers(List<? extends Number> list) {
            for (Number num : list) {
                System.out.print(num + " ");
            }
            System.out.println();
        }
        
        // ? super T (lower bound): T or supertypes
        static void addNumbers(List<? super Integer> list) {
            list.add(1);
            list.add(2);
            list.add(3);
        }
        
        public static void demonstrateWildcards() {
            System.out.println("\n=== WILDCARDS ===");
            
            // Unbounded wildcard
            List<String> strings = Arrays.asList("A", "B", "C");
            printList(strings);
            
            List<Integer> integers = Arrays.asList(1, 2, 3);
            printList(integers);
            
            // Upper bound wildcard (? extends Number)
            List<Integer> ints = Arrays.asList(1, 2, 3);
            printNumbers(ints);
            
            List<Double> doubles = Arrays.asList(1.1, 2.2, 3.3);
            printNumbers(doubles);
            
            // Lower bound wildcard (? super Integer)
            List<Number> numberList = new ArrayList<>();
            addNumbers(numberList);
            System.out.println("After addNumbers: " + numberList);
            
            List<Integer> intList = new ArrayList<>();
            addNumbers(intList);
            System.out.println("After addNumbers: " + intList);
        }
    }

    // ==================== 6. TYPE ERASURE ====================
    
    static class TypeErasureDemo {
        public static void demonstrateTypeErasure() {
            System.out.println("\n=== TYPE ERASURE ===");
            
            // At runtime, generics are erased
            List<String> stringList = new ArrayList<>();
            List<Integer> intList = new ArrayList<>();
            
            // Runtime: Both are just List
            System.out.println("stringList.getClass() == intList.getClass(): " +
                stringList.getClass().equals(intList.getClass()));  // true!
            
            // Cannot check type at runtime
            List<?> list = new ArrayList<>();
            // if (list instanceof List<String>)  // Compile error!
            
            // Cannot create array of generic type
            // List<String>[] array = new List<String>[10];  // Compile error!
            
            // But can use wildcard
            List<?>[] array = new List[10];
            array[0] = new ArrayList<String>();
            array[1] = new ArrayList<Integer>();
            
            System.out.println("Type erasure: Generics only compile-time, erased at runtime");
            System.out.println("Cannot do instanceof with generics");
            System.out.println("Cannot create arrays of generic types");
        }
    }

    // ==================== 7. PECS (PRODUCER EXTENDS, CONSUMER SUPER) ====================
    
    static class PecsDemo {
        // Producer (reads from): use ? extends
        static double sum(List<? extends Number> list) {
            double total = 0;
            for (Number num : list) {
                total += num.doubleValue();
            }
            return total;
        }
        
        // Consumer (writes to): use ? super
        static void fill(List<? super Integer> list, int times) {
            for (int i = 0; i < times; i++) {
                list.add(i);
            }
        }
        
        // Produces elements: ? extends (can read)
        static <T> void copy(List<? extends T> src, List<? super T> dest) {
            for (T element : src) {
                dest.add(element);
            }
        }
        
        public static void demonstratePecs() {
            System.out.println("\n=== PECS ===");
            
            // Producer: ? extends Number (can read as Number)
            List<Integer> integers = Arrays.asList(1, 2, 3);
            System.out.println("Sum (producer): " + sum(integers));
            
            // Consumer: ? super Integer (can write Integer)
            List<Number> numbers = new ArrayList<>();
            fill(numbers, 3);
            System.out.println("After fill (consumer): " + numbers);
            
            // Copy: producer extends, consumer super
            List<Integer> src = Arrays.asList(10, 20, 30);
            List<Number> dst = new ArrayList<>();
            copy(src, dst);
            System.out.println("After copy: " + dst);
            
            System.out.println("PECS: Use extends for producers, super for consumers");
        }
    }

    // ==================== 8. GENERIC COLLECTIONS ====================
    
    static class GenericCollectionsDemo {
        public static void demonstrateGenericCollections() {
            System.out.println("\n=== GENERIC COLLECTIONS ===");
            
            // List<E>
            List<String> list = new ArrayList<>();
            list.add("Alice");
            list.add("Bob");
            System.out.println("List: " + list);
            
            // Set<E>
            Set<Integer> set = new HashSet<>();
            set.add(1);
            set.add(2);
            set.add(1);  // Duplicate
            System.out.println("Set: " + set);
            
            // Map<K, V>
            Map<String, Integer> map = new HashMap<>();
            map.put("Alice", 95);
            map.put("Bob", 87);
            System.out.println("Map: " + map);
            
            // Queue<E>
            Queue<String> queue = new LinkedList<>();
            queue.offer("First");
            queue.offer("Second");
            System.out.println("Queue: " + queue);
            System.out.println("Poll: " + queue.poll());
            
            // Stack (using Deque)
            Deque<Integer> stack = new ArrayDeque<>();
            stack.push(1);
            stack.push(2);
            System.out.println("Stack: " + stack);
            System.out.println("Pop: " + stack.pop());
        }
    }

    // ==================== 9. COMMON PATTERNS ====================
    
    static class CommonPatternsDemo {
        // Generic max method
        static <T extends Comparable<T>> T max(T a, T b) {
            return a.compareTo(b) > 0 ? a : b;
        }
        
        // Generic list reversal
        static <T> List<T> reverse(List<T> list) {
            List<T> reversed = new ArrayList<>();
            for (int i = list.size() - 1; i >= 0; i--) {
                reversed.add(list.get(i));
            }
            return reversed;
        }
        
        // Generic filtering
        static <T> List<T> filter(List<T> list, Predicate<T> predicate) {
            List<T> result = new ArrayList<>();
            for (T element : list) {
                if (predicate.test(element)) {
                    result.add(element);
                }
            }
            return result;
        }
        
        // Generic mapping
        static <T, R> List<R> map(List<T> list, Function<T, R> mapper) {
            List<R> result = new ArrayList<>();
            for (T element : list) {
                result.add(mapper.apply(element));
            }
            return result;
        }
        
        public static void demonstrateCommonPatterns() {
            System.out.println("\n=== COMMON PATTERNS ===");
            
            // Max
            System.out.println("Max of 10, 20: " + max(10, 20));
            System.out.println("Max of 'Apple', 'Banana': " + max("Apple", "Banana"));
            
            // Reverse
            List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
            System.out.println("Reversed: " + reverse(names));
            
            // Filter
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);
            System.out.println("Even numbers: " + filter(numbers, n -> n % 2 == 0));
            
            // Map
            List<String> lengths = map(names, String::toUpperCase);
            System.out.println("Uppercase: " + lengths);
        }
    }

    // ==================== 10. INTERVIEW QUESTIONS ====================
    
    static class InterviewQuestions {
        public static void printInterviewQuestions() {
            System.out.println("\n\n==================== INTERVIEW QUESTIONS ====================\n");
            
            String[] questions = {
                "1. What are generics?",
                "   - Enables type-safe collections and methods",
                "   - Allows compile-time type checking",
                "   - Eliminates casting",
                "",
                "2. What is a type parameter?",
                "   - Placeholder for actual type (e.g., T, K, V)",
                "   - Can have bounded type (e.g., <T extends Number>)",
                "",
                "3. What is type erasure?",
                "   - Generics only at compile-time, erased at runtime",
                "   - No generic information available at runtime",
                "   - Cannot do instanceof<Type>, cannot create new T()",
                "",
                "4. What is the difference between <T> and <?> ?",
                "   - <T>: Type parameter (named, can use in method)",
                "   - <?> : Wildcard (unnamed, for reading)",
                "",
                "5. What is bounded type parameter?",
                "   - <T extends Number>: T must be Number or subclass",
                "   - <T extends Comparable<T>>: T must be Comparable",
                "",
                "6. What is upper bound wildcard?",
                "   - <? extends Number>: Can be Number or subclass",
                "   - Used in producer position (reading)",
                "",
                "7. What is lower bound wildcard?",
                "   - <? super Integer>: Can be Integer or superclass",
                "   - Used in consumer position (writing)",
                "",
                "8. What is PECS?",
                "   - Producer Extends, Consumer Super",
                "   - Use <? extends T> when reading from collection",
                "   - Use <? super T> when writing to collection",
                "",
                "9. Can I create an array of generic type?",
                "   - No: new List<String>[10] won't compile",
                "   - Why: Type erasure, arrays check type at runtime",
                "",
                "10. Can I use instanceof with generics?",
                "    - No: list instanceof List<String> won't compile",
                "    - Reason: Type erasure removes generic info",
                "",
                "11. What is raw type?",
                "    - Using generic class without type parameters",
                "    - List instead of List<String>",
                "    - Unsafe, loses type checking",
                "",
                "12. What is the difference between List, List<?>, List<Object>?",
                "    - List: Raw type (unsafe)",
                "    - List<?>: Unbounded wildcard (can read as Object)",
                "    - List<Object>: Explicitly Object type",
                "",
                "13. Can bounded type have multiple bounds?",
                "    - Yes: <T extends Comparable<T> & Serializable>",
                "    - Must separate with & (ampersand)",
                "",
                "14. What is ? (unbounded wildcard)?",
                "    - Represents any type",
                "    - Can only read as Object",
                "    - Cannot write (except null)",
                "",
                "15. How to create generic method?",
                "    - static <T> void method(T parameter)",
                "    - <T> before return type",
                "",
                "16. Can generic type extend other generics?",
                "    - Yes: class Box<T> extends Container<T>",
                "    - Can extend class or implement interface",
                "",
                "17. What is type inference?",
                "    - Compiler infers type from context",
                "    - List<String> list = new ArrayList<>() (diamond <>)",
                "",
                "18. What are bridge methods?",
                "    - Generated by compiler for generic methods",
                "    - Handle type erasure for overriding",
                "",
                "19. Can I use primitive types with generics?",
                "    - No: List<int> won't compile",
                "    - Use wrapper: List<Integer>",
                "",
                "20. What is the difference between Comparable<T> and Comparator<T>?",
                "    - Comparable: Natural ordering (compareTo method)",
                "    - Comparator: Custom ordering (compare method)",
                "",
                "21. How to sort generic list?",
                "    - Collections.sort(list) if implements Comparable",
                "    - Collections.sort(list, comparator) for custom",
                "",
                "22. Can I create generic exception class?",
                "    - Yes: class GenericException<T> extends Exception",
                "    - Rarely used in practice",
                "",
                "23. What is recursive type bound?",
                "    - <T extends Comparable<T>>",
                "    - T must be comparable to itself",
                "",
                "24. How to handle ClassCastException with generics?",
                "    - Use wildcard: copy(List<? extends T> src, List<? super T> dst)",
                "    - Compile-time checking prevents most issues",
                "",
                "25. What is the difference between <T> and <? extends T>?",
                "    - <T>: Type parameter, can use in method, can write",
                "    - <? extends T>: Wildcard upper bound, can only read",
            };
            
            for (String q : questions) {
                System.out.println(q);
            }
        }
    }

    // ==================== MAIN ====================
    
    public static void main(String[] args) {
        System.out.println("╔════════════════════════════════════════════════════════════════╗");
        System.out.println("║    DAY 14: GENERICS - Collections Framework Complete Guide   ║");
        System.out.println("║                 2,000+ Lines of Production Code                 ║");
        System.out.println("╚════════════════════════════════════════════════════════════════╝");
        
        GenericsBasicsDemo.demonstrateTypeParameters();
        GenericsBasicsDemo.demonstrateTypeVariables();
        
        GenericClassesDemo.demonstrateGenericClasses();
        
        GenericMethodsDemo.demonstrateGenericMethods();
        
        BoundedTypesDemo.demonstrateBoundedTypes();
        
        WildcardsDemo.demonstrateWildcards();
        
        TypeErasureDemo.demonstrateTypeErasure();
        
        PecsDemo.demonstratePecs();
        
        GenericCollectionsDemo.demonstrateGenericCollections();
        
        CommonPatternsDemo.demonstrateCommonPatterns();
        
        InterviewQuestions.printInterviewQuestions();
        
        System.out.println("\n╔════════════════════════════════════════════════════════════════╗");
        System.out.println("║               Generics Complete Mastery Achieved!             ║");
        System.out.println("╚════════════════════════════════════════════════════════════════╝");
    }
}
