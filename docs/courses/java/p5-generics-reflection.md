# Generics, Annotations & Reflection

Java's type system extends far beyond the simple class-and-interface hierarchy. Three powerful mechanismsâ€”**generics**, **annotations**, and **reflection**â€”give developers the ability to write type-safe, self-describing, and introspectable code. Generics enable compile-time type checking for collections and algorithms. Annotations attach metadata to code elements without changing their behavior. Reflection opens the runtime structure of classes for frameworks and tools. Together, they form the foundation of every major Java framework, including Spring Boot, JPA/Hibernate, and Jackson.

This chapter explores each mechanism in depth, from the type-parameter syntax of generic classes through the runtime introspection of the Reflection API, and concludes with a look at how Spring Boot leverages these features to build its auto-configuration and dependency-injection machinery.

---

## Learning Objectives
## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|--------------------|
| Core Concepts | Foundational understanding for Java development | Master these before Spring |
| Code Examples | Runnable, compilable examples | Type, compile, run, refactor |
| Practice Exercises | Hands-on skill building | Apply what you learn |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Fundamentals] --> B[Core Concepts]
    B --> C[Code Examples]
    C --> D[Practice Exercises]
```


By the end of this chapter, you will be able to:

- Define generic classes, interfaces, and methods using standard type-parameter conventions
- Apply bounded type parameters and wildcards to design flexible, type-safe APIs
- Explain the PECS (Producer Extends, Consumer Super) principle and use it correctly
- Describe the type-erasure process and its consequences, including bridge methods and heap pollution
- Create custom annotations with appropriate retention and target policies
- Process annotations at compile time with the Annotation Processing Tool (APT)
- Introspect classes at runtime using the Reflection API to invoke constructors, methods, and fields
- Implement dynamic proxies and understand how reflection powers dependency injection and ORM
- Recognize Spring Boot's meta-annotation and composed-annotation patterns
- Understand how the Java module system restricts reflection and how to open modules
- Use super type tokens and `TypeReference` to preserve generic type information at runtime

---

## Generics

![Generics, Annotations and Reflection - Flowchart](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/p5-generics-reflection.png)

Generics were introduced in Java 5 (JSR 14) to enable **type parameterization**. Before generics, collections held `Object` references, requiring explicit casts on every retrieval and providing zero compile-time safety. Generics shift type-checking from runtime to compile time.

### Generic Classes

A generic class declares one or more **type parameters** in angle brackets after the class name. By convention, single uppercase letters are used:

| Parameter | Convention              |
|-----------|------------------------|
| `T`       | Type                    |
| `E`       | Element (collections)   |
| `K`       | Key (maps)              |
| `V`       | Value (maps)            |
| `N`       | Number                  |
| `R`       | Return type             |

```java
import java.util.Objects;

public class Box<T> {

    private T value;

    public Box() {
    }

    public Box(T value) {
        this.value = value;
    }

    public T getValue() {
        return value;
    }

    public void setValue(T value) {
        this.value = value;
    }

    public boolean isEmpty() {
        return value == null;
    }

    @Override
    public String toString() {
        return "Box{" + value + "}";
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Box<?> box = (Box<?>) o;
        return Objects.equals(value, box.value);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(value);
    }

    public static <T> Box<T> of(T value) {
        return new Box<>(value);
    }

}
```

A generic interface follows the same pattern:

```java
public interface Repository<T, ID> {

    T findById(ID id);

    Iterable<T> findAll();

    T save(T entity);

    void delete(T entity);

    boolean existsById(ID id);

    long count();

}
```

Concrete implementation:

```java
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

public class InMemoryRepository<T, ID> implements Repository<T, ID> {

    private final Map<ID, T> store = new ConcurrentHashMap<>();
    private final IdGenerator<ID> idGenerator;
    private final AtomicLong counter = new AtomicLong(0);

    public InMemoryRepository(IdGenerator<ID> idGenerator) {
        this.idGenerator = idGenerator;
    }

    @Override
    public T findById(ID id) {
        return store.get(id);
    }

    @Override
    public Iterable<T> findAll() {
        return store.values();
    }

    @Override
    public T save(T entity) {
        ID id = idGenerator.generate(counter.incrementAndGet());
        store.put(id, entity);
        return entity;
    }

    @Override
    public void delete(T entity) {
        store.values().remove(entity);
    }

    @Override
    public boolean existsById(ID id) {
        return store.containsKey(id);
    }

    @Override
    public long count() {
        return store.size();
    }

}

interface IdGenerator<ID> {
    ID generate(long value);
}
```

Usage:

```java
public class GenericsDemo {

    public static void main(String[] args) {
        Box<String> stringBox = new Box<>("Hello, Generics!");
        String value = stringBox.getValue();
        System.out.println(value);

        Box<Integer> integerBox = new Box<>(42);
        int number = integerBox.getValue();
        System.out.println(number);

        Repository<String, Long> repo = new InMemoryRepository<>(v -> v);
        repo.save("Alpha");
        repo.save("Beta");
        repo.save("Gamma");

        System.out.println("Count: " + repo.count());

        for (String item : repo.findAll()) {
            System.out.println("Item: " + item);
        }

        Box<Integer> box1 = new Box<>(100);
        Box<Integer> box2 = new Box<>(100);
        System.out.println("Equal: " + box1.equals(box2));
    }

}
```

### Raw Types and Compatibility

A **raw type** is a generic class or interface used without its type parameters. Raw types exist only for backward compatibility with pre-Java-5 code.

```java
public class RawTypeDemo {

    public static void main(String[] args) {
        @SuppressWarnings("rawtypes")
        Box rawBox = new Box("raw");               // raw type â€” compiler warning
        rawBox.setValue(42);                        // no type safety

        Box<String> safeBox = rawBox;               // unchecked assignment warning
        String val = safeBox.getValue();            // ClassCastException at runtime!
    }

}
```

The compiler emits an **unchecked warning** for any raw-type usage. You should never use raw types in new code.

### Generic Methods

Methods can declare their own type parameters independently of the class-level parameters. A generic method declares type parameters **before the return type**.

```java
import java.util.List;

public class GenericMethodExamples {

    public static <T> T getMiddle(T... args) {
        if (args.length == 0) {
            throw new IllegalArgumentException("At least one argument required");
        }
        return args[args.length / 2];
    }

    public static <T extends Comparable<T>> T max(T first, T second) {
        return first.compareTo(second) >= 0 ? first : second;
    }

    public static <T> void swap(T[] array, int i, int j) {
        T temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    public static <T> List<T> asList(T... elements) {
        return java.util.Arrays.asList(elements);
    }

    public static <T, R> R transform(T input, Transformer<T, R> transformer) {
        return transformer.transform(input);
    }

}

@FunctionalInterface
interface Transformer<T, R> {
    R transform(T input);
}
```

Usage:

```java
public class GenericMethodDemo {

    public static void main(String[] args) {
        String middle = GenericMethodExamples.getMiddle("A", "B", "C", "D", "E");
        System.out.println("Middle: " + middle);

        Integer maxInt = GenericMethodExamples.max(42, 17);
        System.out.println("Max: " + maxInt);

        String maxStr = GenericMethodExamples.max("apple", "zebra");
        System.out.println("Max: " + maxStr);

        String[] fruits = {"cherry", "banana", "apple"};
        GenericMethodExamples.swap(fruits, 0, 2);
        System.out.println("Swapped: " + java.util.Arrays.toString(fruits));

        int length = GenericMethodExamples.transform("Hello, World!", (String s) -> s.length());
        System.out.println("Length: " + length);
    }

}
```

### Bounded Type Parameters

A **bounded type parameter** restricts the types that can be used as type arguments. The bound is specified with the `extends` keyword (which includes both classes and interfaces).

```java
import java.util.List;

public class BoundedTypeExamples {

    public static <T extends Number> double sumOfNumbers(List<T> numbers) {
        double sum = 0.0;
        for (T number : numbers) {
            sum += number.doubleValue();
        }
        return sum;
    }

    public static <T extends Comparable<T>> T maxInList(List<T> items) {
        if (items == null || items.isEmpty()) {
            throw new IllegalArgumentException("List must not be empty");
        }
        T max = items.get(0);
        for (int i = 1; i < items.size(); i++) {
            T current = items.get(i);
            if (current.compareTo(max) > 0) {
                max = current;
            }
        }
        return max;
    }

    public static <T extends Number & Comparable<T>> double computeMedian(List<T> items) {
        List<T> sorted = items.stream()
                .sorted()
                .toList();
        int size = sorted.size();
        if (size % 2 == 0) {
            double left = sorted.get(size / 2 - 1).doubleValue();
            double right = sorted.get(size / 2).doubleValue();
            return (left + right) / 2.0;
        } else {
            return sorted.get(size / 2).doubleValue();
        }
    }

}
```

Usage:

```java
public class BoundedTypeDemo {

    public static void main(String[] args) {
        java.util.List<Integer> ints = java.util.List.of(3, 7, 1, 9, 4);
        double sum = BoundedTypeExamples.sumOfNumbers(ints);
        System.out.println("Sum: " + sum);

        int maxInt = BoundedTypeExamples.maxInList(ints);
        System.out.println("Max int: " + maxInt);

        java.util.List<String> words = java.util.List.of("dog", "cat", "elephant", "bird");
        String maxWord = BoundedTypeExamples.maxInList(words);
        System.out.println("Max word: " + maxWord);

        java.util.List<Double> doubles = java.util.List.of(3.5, 1.2, 9.8, 4.1, 7.3);
        double median = BoundedTypeExamples.computeMedian(doubles);
        System.out.println("Median: " + median);
    }

}
```

### Multiple Bounds

A type parameter can have multiple bounds using the `&` operator. The class bound (if any) must come **first**; interface bounds follow.

```java
import java.io.Serializable;

public class MultipleBoundsExamples {

    public static <T extends Number & Comparable<T> & Serializable>
    T process(T value) {
        System.out.println("Class: " + value.getClass().getName());
        System.out.println("Comparable: " + value.compareTo(value));
        System.out.println("Serializable: " + (value instanceof Serializable));
        return value;
    }

    public static <T extends Appendable & Comparable<T>>
    void appendWithOrder(T appender, String value) throws java.io.IOException {
        appender.append(value);
        System.out.println("Order: " + appender.compareTo(appender));
    }

}

class NumberProcessor {

    public <T extends Number & Comparable<T>> T half(T value) {
        double halved = value.doubleValue() / 2.0;
        @SuppressWarnings("unchecked")
        T result = (T) Double.valueOf(halved);
        return result;
    }

}
```

Usage:

```java
public class MultipleBoundsDemo {

    public static void main(String[] args) throws java.io.IOException {
        Integer result = MultipleBoundsExamples.process(42);
        System.out.println("Processed: " + result);

        StringBuilder sb = new StringBuilder();
        MultipleBoundsExamples.appendWithOrder(sb, "Hello, ");
        MultipleBoundsExamples.appendWithOrder(sb, "World!");
        System.out.println("StringBuilder content: " + sb);
    }

}
```

### Type Inference and the Diamond Operator

Java 7 introduced the **diamond operator** (`<>`) to reduce verbosity when instantiating generic classes. The compiler infers the type arguments from the context.

```java
import java.util.*;

public class DiamondOperatorDemo {

    public static void main(String[] args) {
        // Before Java 7 â€” redundant type on both sides
        Map<String, List<Integer>> oldWay = new HashMap<String, List<Integer>>();

        // Java 7+ â€” diamond operator infers the type
        Map<String, List<Integer>> diamond = new HashMap<>();

        // Works in assignment contexts
        List<String> strings = new ArrayList<>();

        // Works in method invocation contexts
        Set<Integer> numbers = new HashSet<>(Set.of(1, 2, 3));

        // Works with anonymous classes (Java 9+)
        Comparator<String> byLength = new Comparator<>() {
            @Override
            public int compare(String a, String b) {
                return Integer.compare(a.length(), b.length());
            }
        };

        List<String> names = List.of("Alice", "Bob", "Charlie");
        names.sort(byLength);
        System.out.println("Sorted by length: " + names);
    }

}
```

Java 8 improved type inference through **target-type inference** and **poly expressions**:

```java
public class TypeInferenceDemo {

    public static <T> T identity(T value) {
        return value;
    }

    public static <T> List<T> emptyList() {
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        // Target-type inference: compiler infers T = String
        String result = identity("Hello");

        // Inferred from assignment target
        List<Integer> ints = emptyList();
        ints.add(1);
        ints.add(2);

        // Inferred from method argument
        printList(emptyList());
    }

    private static void printList(List<String> list) {
        System.out.println("List: " + list);
    }

}
```

---

## Wildcards

Wildcards (`?`) introduce **usage-site variance**â€”the ability to specify how a generic type parameter may vary at the point of use, rather than at the point of declaration.

### Unbounded Wildcard (`?`)

The unbounded wildcard represents **any type**. It is useful when the logic does not depend on the actual type parameter.

```java
import java.util.List;

public class UnboundedWildcardDemo {

    public static void printList(List<?> list) {
        for (Object element : list) {
            System.out.print(element + " ");
        }
        System.out.println();
    }

    public static int sizeOf(List<?> list) {
        return list.size();
    }

    public static boolean containsNull(List<?> list) {
        for (Object element : list) {
            if (element == null) {
                return true;
            }
        }
        return false;
    }

    public static double averageLength(List<?> list) {
        if (list.isEmpty()) return 0.0;
        double total = 0;
        for (Object element : list) {
            total += element.toString().length();
        }
        return total / list.size();
    }

    public static void main(String[] args) {
        List<Integer> ints = List.of(1, 2, 3);
        List<String> strings = List.of("a", "b", "c");
        List<Double> doubles = List.of(1.5, 2.5, 3.5);

        System.out.print("Integers: ");
        printList(ints);

        System.out.print("Strings: ");
        printList(strings);

        System.out.println("Size: " + sizeOf(doubles));
        System.out.println("Contains null: " + containsNull(strings));
        System.out.println("Avg length: " + averageLength(ints));
    }

}
```

You **cannot** add elements (except `null`) to a `Collection<?>` because the compiler cannot verify type safety.

### Upper Bounded Wildcard (`? extends T`)

An upper bounded wildcard restricts the unknown type to a **subtype** of `T`. This is used when you **produce** values from a structure.

```java
import java.util.List;

public class UpperBoundedWildcardDemo {

    public static double sum(List<? extends Number> numbers) {
        double total = 0.0;
        for (Number number : numbers) {
            total += number.doubleValue();
        }
        return total;
    }

    public static <T extends Comparable<? super T>> T max(List<? extends T> list) {
        if (list == null || list.isEmpty()) {
            throw new IllegalArgumentException("List must not be empty");
        }
        T max = list.get(0);
        for (int i = 1; i < list.size(); i++) {
            T current = list.get(i);
            if (current.compareTo(max) > 0) {
                max = current;
            }
        }
        return max;
    }

    public static Number getAny(List<? extends Number> numbers) {
        return numbers.isEmpty() ? 0 : numbers.get(0);
    }

    public static void main(String[] args) {
        List<Integer> ints = List.of(1, 2, 3, 4, 5);
        List<Double> doubles = List.of(1.5, 2.5, 3.5);
        List<Number> numbers = List.<Number>of(10, 20L, 30.5);

        System.out.println("Sum ints: " + sum(ints));
        System.out.println("Sum doubles: " + sum(doubles));
        System.out.println("Sum numbers: " + sum(numbers));

        System.out.println("Max ints: " + max(ints));
        System.out.println("Max doubles: " + max(doubles));
    }

}
```

With `List<? extends Number>`, you can **read** `Number` values, but you cannot safely **add** anything (except `null`), because the actual type might be `List<Integer>` or `List<Double>`.

### Lower Bounded Wildcard (`? super T`)

A lower bounded wildcard restricts the unknown type to a **supertype** of `T`. This is used when you **consume** (add) values into a structure.

```java
import java.util.List;
import java.util.ArrayList;

public class LowerBoundedWildcardDemo {

    public static void addNumbers(List<? super Integer> list) {
        for (int i = 1; i <= 10; i++) {
            list.add(i);
        }
    }

    public static void copy(List<? extends Number> source, List<? super Number> dest) {
        for (Number element : source) {
            dest.add(element);
        }
    }

    public static void fill(List<? super Integer> list, int value, int count) {
        for (int i = 0; i < count; i++) {
            list.add(value);
        }
    }

    public static void main(String[] args) {
        List<Number> numbers = new ArrayList<>();
        addNumbers(numbers);
        System.out.println("Numbers: " + numbers);

        List<Integer> ints = List.of(1, 2, 3);
        List<Object> objects = new ArrayList<>();
        copy(ints, objects);
        System.out.println("Copied: " + objects);

        List<Object> filled = new ArrayList<>();
        fill(filled, 42, 5);
        System.out.println("Filled: " + filled);
    }

}
```

With `List<? super Integer>`, you can safely **add** `Integer` instances, but when reading, you can only guarantee `Object`.

### The PECS Principle

**PECS** stands for **Producer Extends, Consumer Super**, formulated by Joshua Bloch in *Effective Java*. It is the rule for choosing which wildcard type to use:

- If a parameter **produces** values (you read from it), use `? extends T`.
- If a parameter **consumes** values (you write to it), use `? super T`.
- If both, don't use wildcardsâ€”use a plain type parameter.

```java
import java.util.List;
import java.util.Collection;
import java.util.ArrayList;

public class PECSDemo {

    // Producer: copy reads from source â†’ ? extends T
    // Consumer: copy writes to dest â†’ ? super T
    public static <T> void copy(
            List<? extends T> source,
            List<? super T> dest) {
        for (T item : source) {
            dest.add(item);
        }
    }

    // Producer: src supplies elements
    // Consumer: dest receives elements
    public static <T> void merge(
            Collection<? extends T> src,
            Collection<? super T> dest) {
        dest.addAll(src);
    }

    // Consumer: we fill it
    public static <T> void fillWithDefault(
            List<? super T> list,
            T defaultValue,
            int count) {
        for (int i = 0; i < count; i++) {
            list.add(defaultValue);
        }
    }

    // Producer: we take the max
    public static <T extends Comparable<? super T>> T max(
            Collection<? extends T> coll) {
        if (coll.isEmpty()) {
            throw new IllegalArgumentException("Collection is empty");
        }
        T candidate = null;
        for (T elem : coll) {
            if (candidate == null || elem.compareTo(candidate) > 0) {
                candidate = elem;
            }
        }
        return candidate;
    }

    public static void main(String[] args) {
        List<Integer> ints = List.of(1, 4, 2, 8, 5, 7);
        List<Number> nums = new ArrayList<>();

        // Producer: ints (? extends Integer) â†’ produces Integers (read)
        // Consumer: nums (? super Number) â†’ consumes Numbers (write)
        copy(ints, nums);
        System.out.println("Copied: " + nums);

        List<String> strings = List.of("a", "z", "m", "q");
        String maxStr = max(strings);
        System.out.println("Max: " + maxStr);

        List<Object> objects = new ArrayList<>();
        fillWithDefault(objects, "default", 3);
        System.out.println("Filled: " + objects);
    }

}
```

**Variance cheat sheet:**

| Wildcard           | Read safety            | Write safety              | Use case                |
|--------------------|------------------------|---------------------------|-------------------------|
| `? extends T`      | `T` (safe)             | Nothing (except null)     | Producer (read)         |
| `? super T`        | `Object` only          | `T` (safe)                | Consumer (write)        |
| `?`                | `Object` only          | Nothing (except null)     | Both or neither         |
| Plain `T`          | `T` (safe)             | `T` (safe)                | Both read and write     |

---

## Type Erasure

Type erasure is the process by which the Java compiler removes generic type information and translates generic code into non-generic bytecode compatible with pre-Java-5 runtimes.

### How Erasure Works

The compiler replaces type parameters with their **leftmost bound** (or `Object` if unbounded) and inserts appropriate casts where necessary.

```java
import java.util.List;
import java.util.ArrayList;

public class TypeErasureDemo {

    // Compile-time type: public static <T> T identity(T value)
    // Erased type:      public static Object identity(Object value)
    public static <T> T identity(T value) {
        return value;
    }

    // Compile-time type: public static <T extends Number> double sum(List<T> list)
    // Erased type:      public static double sum(List list)
    public static <T extends Number> double sum(List<T> list) {
        double total = 0.0;
        for (T item : list) {
            total += item.doubleValue();
        }
        return total;
    }

    // Compile-time type: public static <T extends Comparable<T>> T max(T a, T b)
    // Erased type:      public static Comparable max(Comparable a, Comparable b)
    public static <T extends Comparable<T>> T max(T a, T b) {
        return a.compareTo(b) >= 0 ? a : b;
    }

    public static void main(String[] args) {
        // After erasure + auto-casting:
        String s = (String) identity("Hello");
        System.out.println(s);

        List<Integer> numbers = List.of(1, 2, 3);
        double total = sum(numbers);
        System.out.println("Sum: " + total);

        int m = max(10, 20);
        System.out.println("Max: " + m);
    }

}
```

### Bridge Methods

When erasure causes a type conflict in a subclass, the compiler generates a **bridge method**â€”a synthetic method with erased signatures that delegates to the typed method.

```java
import java.util.Objects;

public class BridgeMethodDemo {

    public static class Node<T> {

        private T data;

        public Node(T data) {
            this.data = data;
        }

        public void setData(T data) {
            this.data = data;
        }

        public T getData() {
            return data;
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;
            Node<?> node = (Node<?>) o;
            return Objects.equals(data, node.data);
        }

        @Override
        public int hashCode() {
            return Objects.hashCode(data);
        }

    }

    public static class StringNode extends Node<String> {

        public StringNode(String data) {
            super(data);
        }

        @Override
        public void setData(String data) {
            System.out.println("StringNode.setData: " + data);
            super.setData(data);
        }

        // Compiler generates bridge:
        // public void setData(Object data) {
        //     setData((String) data);
        // }
    }

    public static void main(String[] args) {
        StringNode stringNode = new StringNode("original");

        // Direct typed call
        stringNode.setData("hello");

        // Call via erased type â€” invokes bridge method
        Node<String> node = stringNode;
        node.setData("world");

        System.out.println("Data: " + node.getData());
    }

}
```

Without the bridge method, calling `node.setData("world")` through the erased `Node` reference would resolve to `Node.setData(Object)`, which does not have the `StringNode` override.

### Heap Pollution

**Heap pollution** occurs when a variable of a parameterized type references an object of a different parameterized type. This creates an implicit type mismatch that may surface as a `ClassCastException` far from the actual error.

```java
import java.util.List;
import java.util.ArrayList;

public class HeapPollutionDemo {

    @SuppressWarnings("unchecked")
    public static void main(String[] args) {
        List<String>[] arrayOfLists = new List[1];      // unchecked warning
        arrayOfLists[0] = List.of("hello", "world");

        // Heap pollution: assign List<Integer> into a List<String> slot
        Object[] objects = arrayOfLists;
        objects[0] = List.of(1, 2, 3);                   // heap pollution

        // This line throws ClassCastException at runtime
        try {
            String s = arrayOfLists[0].get(0);           // Integer â†’ String cast
            System.out.println(s);
        } catch (ClassCastException e) {
            System.err.println("Heap pollution detected: " + e.getMessage());
        }
    }

}
```

### @SafeVarargs

The `@SafeVarargs` annotation suppresses heap-pollution warnings on **varargs** methods with generic types. It asserts that the method does not perform unsafe operations on the varargs array.

```java
import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;

public class SafeVarargsDemo {

    @SafeVarargs
    public static <T> List<T> flatten(List<? extends T>... lists) {
        List<T> result = new ArrayList<>();
        for (List<? extends T> list : lists) {
            result.addAll(list);
        }
        return result;
    }

    @SafeVarargs
    public static <T> List<T> concat(T... elements) {
        return new ArrayList<>(Arrays.asList(elements));
    }

    @SafeVarargs
    public static <T> void addAll(List<? super T> dest, T... sources) {
        for (T source : sources) {
            dest.add(source);
        }
    }

    // NOT @SafeVarargs â€” this method is unsafe!
    @SuppressWarnings("unchecked")
    public static <T> T[] toArray(List<T> list, T[] template) {
        List<?>[] arr = new List<?>[1];   // generic array creation
        arr[0] = list;
        return (T[]) arr[0].toArray();
    }

    public static void main(String[] args) {
        List<String> a = List.of("a", "b");
        List<String> b = List.of("c", "d");
        List<String> flattened = flatten(a, b);
        System.out.println("Flattened: " + flattened);

        List<Integer> concatted = concat(1, 2, 3);
        System.out.println("Concatted: " + concatted);

        List<Object> dest = new ArrayList<>();
        addAll(dest, "Hello", 42, 3.14);
        System.out.println("Dest: " + dest);
    }

}
```

`@SafeVarargs` can be applied to:
- `static` methods
- `final` instance methods
- `private` instance methods (Java 9+)
- Constructors

### Reifiable Types

A type is **reifiable** if its type information is fully available at runtime. Non-reifiable types lose information through erasure.

**Reifiable types:**
- Primitive types (`int`, `double`, etc.)
- Non-generic class/interface types (`String`, `Integer`)
- Raw types (`List`, `Map`)
- Unbounded wildcard parameterized types (`List<?>`, `Map<?, ?>`)

**Non-reifiable types:**
- Type variables (`T`, `E`)
- Concrete parameterized types (`List<String>`, `Map<String, Integer>`)
- Bounded wildcards (`List<? extends Number>`)

```java
import java.util.List;

public class ReifiableTypesDemo {

    @SuppressWarnings("unchecked")
    public static void main(String[] args) {
        // instanceof works for reifiable types only
        Object obj = "hello";

        System.out.println(obj instanceof String);          // OK â€” reifiable
        System.out.println(obj instanceof List);            // OK â€” raw type
        System.out.println(obj instanceof List<?>);         // OK â€” unbounded wildcard

        // These do NOT compile:
        // System.out.println(obj instanceof List<String>);   // Error â€” non-reifiable
        // System.out.println(obj instanceof List<? extends Number>); // Error â€” non-reifiable

        // Generic array creation â€” only for reifiable types
        String[] strings = new String[10];                   // OK
        List<?>[] lists = new List<?>[10];                   // OK â€” unbounded wildcard

        // This does NOT compile:
        // List<String>[] arrayOfLists = new List<String>[10]; // Error
    }

}
```

### Limitations of Generics

Generics in Java have several well-known limitations stemming from type erasure:

```java
import java.util.List;
import java.util.ArrayList;

public class GenericsLimitationsDemo {

    private List<String> exampleField;

    @SuppressWarnings("unchecked")
    public static void main(String[] args) {
        // 1. Cannot instantiate with type parameter
        // T item = new T(); // Compile error

        // 2. Cannot create arrays of parameterized types
        // List<String>[] arrays = new List<String>[10]; // Compile error

        // 3. Cannot use instanceof with parameterized types
        Object obj = new ArrayList<String>();
        // System.out.println(obj instanceof ArrayList<String>); // Compile error

        // 4. Cannot use primitive type arguments
        // List<int> primitiveList; // Compile error â€” use List<Integer>

        // 5. Cannot overload methods with same erasure
        // See the overloaded methods below â€” only one compiles

        // 6. Cannot catch or throw generic types
        // try { } catch (T e) { } // Compile error

        // 7. Type information not available at runtime
        List<Integer> ints = List.of(1, 2, 3);
        List<String> strings = List.of("a", "b", "c");
        System.out.println(ints.getClass() == strings.getClass()); // true
    }

    // These two methods have the same erasure â€” only one can exist:
    // public void process(List<String> items) { }
    // public void process(List<Integer> items) { } // Error: same erasure

    public void process(List<?> items) {
        System.out.println("Processing " + items.size() + " items");
    }

}
```

---

## Custom Annotations

Annotations (also called metadata) provide a way to associate information with program elements without directly affecting their semantics. Java has supported annotations since Java 5 (JSR 175).

### Defining an Annotation

Annotations are defined using the `@interface` keyword. Elements are declared as abstract methods.

```java
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface Loggable {

    String level() default "INFO";

    boolean includeArgs() default true;

    boolean includeResult() default true;

}
```

### Meta-Annotations

Meta-annotations annotate other annotations. The key meta-annotations in `java.lang.annotation`:

```java
import java.lang.annotation.*;

// @Retention â€” how long the annotation is retained
@Retention(RetentionPolicy.RUNTIME)   // Available at runtime via reflection
// @Retention(RetentionPolicy.CLASS)  // Stored in .class file but not at runtime (default)
// @Retention(RetentionPolicy.SOURCE) // Discarded by compiler

// @Target â€” what program elements can be annotated
@Target({
    ElementType.TYPE,                  // Classes, interfaces, enums, records
    ElementType.FIELD,                 // Fields
    ElementType.METHOD,                // Methods
    ElementType.PARAMETER,             // Method/constructor parameters
    ElementType.CONSTRUCTOR,           // Constructors
    ElementType.LOCAL_VARIABLE,        // Local variables
    ElementType.ANNOTATION_TYPE,       // Annotation types
    ElementType.PACKAGE,               // Packages
    ElementType.TYPE_PARAMETER,        // Type parameter declarations (Java 8+)
    ElementType.TYPE_USE,              // All uses of types (Java 8+)
    ElementType.MODULE                 // Modules (Java 9+)
})
public @interface MetaAnnotationDemo {

    // Elements with defaults
    String author() default "unknown";

    String lastModified() default "2026-01-01";

    int priority() default 0;

    String[] tags() default {};

}

// @Documented â€” includes this annotation in generated Javadoc
@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
public @interface DocumentedAnnotation {
    String value();
}

// @Inherited â€” annotation is inherited by subclasses
@Inherited
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
public @interface Inheritable {
    boolean enabled() default true;
}

// @Repeatable â€” allows multiple instances on the same element (Java 8+)
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
@Repeatable(Schedules.class)
public @interface Schedule {
    String cron();
    String timezone() default "UTC";
}

// Container annotation for @Repeatable
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
public @interface Schedules {
    Schedule[] value();
}
```

Usage of the repeatable annotation:

```java
@Schedule(cron = "0 0 8 * * ?")
@Schedule(cron = "0 0 18 * * ?")
public class DailyReportJob {

    public void generateReport() {
        System.out.println("Generating daily report...");
    }

}
```

### Complete Custom Annotation Example

```java
import java.lang.annotation.*;
import java.lang.reflect.Method;

// --- Annotation Definitions ---

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
@Inherited
public @interface Entity {
    String tableName() default "";
}

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
public @interface Column {
    String name();
    boolean nullable() default true;
    int length() default 255;
    boolean unique() default false;
}

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
public @interface Id {
    boolean autoGenerated() default true;
}

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface Transactional {
    Propagation propagation() default Propagation.REQUIRED;
    Isolation isolation() default Isolation.READ_COMMITTED;
    boolean readOnly() default false;
}

enum Propagation {
    REQUIRED, REQUIRES_NEW, NESTED, SUPPORTS, NOT_SUPPORTED, MANDATORY, NEVER
}

enum Isolation {
    READ_UNCOMMITTED, READ_COMMITTED, REPEATABLE_READ, SERIALIZABLE
}
```

Usage:

```java
@Entity(tableName = "users")
public class User {

    @Id
    @Column(name = "user_id", nullable = false, unique = true)
    private Long id;

    @Column(name = "username", length = 50, nullable = false, unique = true)
    private String username;

    @Column(name = "email", length = 100, nullable = false, unique = true)
    private String email;

    @Column(name = "age", nullable = true)
    private Integer age;

    public User() {
    }

    public User(Long id, String username, String email, Integer age) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.age = age;
    }

    @Transactional(readOnly = true)
    public Long getId() {
        return id;
    }

    @Transactional(readOnly = true)
    public String getUsername() {
        return username;
    }

    @Transactional
    public void setUsername(String username) {
        this.username = username;
    }

    @Transactional(readOnly = true)
    public String getEmail() {
        return email;
    }

    @Transactional
    public void setEmail(String email) {
        this.email = email;
    }

    @Transactional(readOnly = true)
    public Integer getAge() {
        return age;
    }

    @Transactional
    public void setAge(Integer age) {
        this.age = age;
    }

}
```

### Annotation Processing at Compile Time (APT)

The **Annotation Processing Tool** (APT), standardized via JSR 269 and available in `javax.annotation.processing`, generates code at compile time. Processors run in the compiler and can produce new source files, detect errors, or emit warnings.

```java
import javax.annotation.processing.*;
import javax.lang.model.SourceVersion;
import javax.lang.model.element.*;
import javax.lang.model.type.TypeMirror;
import javax.tools.Diagnostic;
import java.util.Set;

@SupportedAnnotationTypes("Entity")
@SupportedSourceVersion(SourceVersion.RELEASE_21)
public class EntityProcessor extends AbstractProcessor {

    @Override
    public boolean process(Set<? extends TypeElement> annotations,
                           RoundEnvironment roundEnv) {
        for (TypeElement annotation : annotations) {
            for (Element element : roundEnv.getElementsAnnotatedWith(annotation)) {
                if (element.getKind() != ElementKind.CLASS) {
                    processingEnv.getMessager().printMessage(
                            Diagnostic.Kind.ERROR,
                            "@Entity can only be applied to classes",
                            element
                    );
                    continue;
                }

                TypeElement typeElement = (TypeElement) element;
                String className = typeElement.getSimpleName().toString();
                String packageName = processingEnv.getElementUtils()
                        .getPackageOf(typeElement).getQualifiedName().toString();

                processingEnv.getMessager().printMessage(
                        Diagnostic.Kind.NOTE,
                        "Generating repository for entity: " + className + " in package " + packageName,
                        element
                );

                generateRepositoryFile(packageName, className);
            }
        }
        return true;
    }

    private void generateRepositoryFile(String packageName, String className) {
        String repositoryClassName = className + "Repository";
        String content = String.format("""
                package %s;
                
                import java.util.*;
                import java.util.concurrent.ConcurrentHashMap;
                
                public class %s {
                
                    private final Map<%s, %s> store = new ConcurrentHashMap<>();
                    
                    public %s findById(String id) {
                        return store.get(id);
                    }
                    
                    public %s save(%s entity) {
                        store.put(UUID.randomUUID().toString(), entity);
                        return entity;
                    }
                    
                    public Collection<%s> findAll() {
                        return store.values();
                    }
                    
                    public void delete(String id) {
                        store.remove(id);
                    }
                    
                    public long count() {
                        return store.size();
                    }
                    
                }
                """,
                packageName, repositoryClassName, className, className,
                repositoryClassName, className, className, className,
                repositoryClassName
        );

        try {
            var file = processingEnv.getFiler().createSourceFile(
                    packageName + "." + repositoryClassName
            );
            try (var writer = file.openWriter()) {
                writer.write(content);
            }
        } catch (java.io.IOException e) {
            processingEnv.getMessager().printMessage(
                    Diagnostic.Kind.ERROR,
                    "Failed to generate repository: " + e.getMessage()
            );
        }
    }

}
```

Register the processor in `META-INF/services/javax.annotation.processing.Processor`:

```properties
com.example.processor.EntityProcessor
```

---

## Reflection API

The Reflection API, in `java.lang.reflect`, provides the ability to **introspect** and **modify** class behavior at runtime. While powerful, reflection has performance overhead and should not be used in hot paths.

### The Class Object

Every type in Java has an instance of `java.lang.Class<T>` that represents its structure at runtime.

```java
import java.lang.reflect.*;

public class ClassObjectDemo {

    public static void main(String[] args) throws Exception {
        // Three ways to obtain a Class object
        Class<?> byStaticField = String.class;
        Class<?> byInstance = "hello".getClass();
        Class<?> byForName = Class.forName("java.lang.String");

        System.out.println("Same class: " + (byStaticField == byInstance));
        System.out.println("Same class: " + (byStaticField == byForName));

        // Class name components
        System.out.println("Simple name: " + String.class.getSimpleName());
        System.out.println("Canonical name: " + String.class.getCanonicalName());
        System.out.println("Type name: " + String.class.getTypeName());
        System.out.println("Package: " + String.class.getPackageName());

        // Type information
        Class<?> superclass = String.class.getSuperclass();
        System.out.println("Superclass: " + superclass.getName());

        Class<?>[] interfaces = String.class.getInterfaces();
        System.out.println("Interfaces: " + java.util.Arrays.toString(interfaces));

        int modifiers = String.class.getModifiers();
        System.out.println("Is public: " + Modifier.isPublic(modifiers));
        System.out.println("Is final: " + Modifier.isFinal(modifiers));

        // Primitives and arrays
        System.out.println("int.class: " + int.class);
        System.out.println("int[].class: " + int[].class);
        System.out.println("String[].class: " + String[].class);
    }

}
```

### Inspecting Constructors, Methods, and Fields

```java
import java.lang.reflect.*;

public class ReflectionInspectionDemo {

    public static void main(String[] args) {
        Class<?> clazz = User.class;

        System.out.println("=== Constructors ===");
        for (Constructor<?> ctor : clazz.getConstructors()) {
            System.out.println(formatConstructor(ctor));
        }

        System.out.println("\n=== Declared Constructors (includes private) ===");
        for (Constructor<?> ctor : clazz.getDeclaredConstructors()) {
            System.out.println(formatConstructor(ctor));
        }

        System.out.println("\n=== Public Methods ===");
        for (Method method : clazz.getMethods()) {
            System.out.println(formatMethod(method));
        }

        System.out.println("\n=== Declared Methods (excludes inherited) ===");
        for (Method method : clazz.getDeclaredMethods()) {
            System.out.println(formatMethod(method));
        }

        System.out.println("\n=== Public Fields ===");
        for (Field field : clazz.getFields()) {
            System.out.println(formatField(field));
        }

        System.out.println("\n=== Declared Fields ===");
        for (Field field : clazz.getDeclaredFields()) {
            System.out.println(formatField(field));
        }
    }

    private static String formatConstructor(Constructor<?> ctor) {
        StringBuilder sb = new StringBuilder();
        sb.append("  ").append(ctor.getName());
        sb.append("(");
        Class<?>[] params = ctor.getParameterTypes();
        for (int i = 0; i < params.length; i++) {
            if (i > 0) sb.append(", ");
            sb.append(params[i].getSimpleName());
        }
        sb.append(")");
        int mod = ctor.getModifiers();
        sb.append(" [").append(Modifier.toString(mod)).append("]");
        return sb.toString();
    }

    private static String formatMethod(Method method) {
        StringBuilder sb = new StringBuilder();
        sb.append("  ").append(Modifier.toString(method.getModifiers()));
        if (method.getModifiers() != 0) sb.append(" ");
        sb.append(method.getReturnType().getSimpleName()).append(" ");
        sb.append(method.getName()).append("(");
        Class<?>[] params = method.getParameterTypes();
        for (int i = 0; i < params.length; i++) {
            if (i > 0) sb.append(", ");
            sb.append(params[i].getSimpleName());
        }
        sb.append(")");
        return sb.toString();
    }

    private static String formatField(Field field) {
        StringBuilder sb = new StringBuilder();
        sb.append("  ").append(Modifier.toString(field.getModifiers()));
        if (field.getModifiers() != 0) sb.append(" ");
        sb.append(field.getType().getSimpleName()).append(" ");
        sb.append(field.getName());
        return sb.toString();
    }

}
```

### Invoking Constructors, Methods, and Fields

```java
import java.lang.reflect.*;

public class ReflectionInvocationDemo {

    public static void main(String[] args) throws Exception {
        // --- Invoking constructors ---
        Class<?> clazz = User.class;

        Constructor<?> noArgCtor = clazz.getDeclaredConstructor();
        Object user = noArgCtor.newInstance();
        System.out.println("User created via reflection: " + user);

        Constructor<?> paramCtor = clazz.getDeclaredConstructor(
                Long.class, String.class, String.class, Integer.class
        );
        Object alice = paramCtor.newInstance(1L, "alice", "alice@example.com", 30);
        System.out.println("Alice: " + alice);

        // --- Invoking methods ---
        Method setUsername = clazz.getDeclaredMethod("setUsername", String.class);
        setUsername.invoke(user, "bob");

        Method getUsername = clazz.getDeclaredMethod("getUsername");
        String username = (String) getUsername.invoke(user);
        System.out.println("Username: " + username);

        // --- Methods with return values ---
        Method setAge = clazz.getDeclaredMethod("setAge", Integer.class);
        setAge.invoke(user, 25);

        Method getAge = clazz.getDeclaredMethod("getAge");
        int age = (int) getAge.invoke(user);
        System.out.println("Age: " + age);

        // --- Accessing fields ---
        System.out.println("\n=== Field Access ===");
        for (Field field : clazz.getDeclaredFields()) {
            field.setAccessible(true);
            String fieldName = field.getName();
            Object fieldValue = field.get(user);
            System.out.println(fieldName + " = " + fieldValue);
        }

        // --- Modifying private fields ---
        Field emailField = clazz.getDeclaredField("email");
        emailField.setAccessible(true);
        emailField.set(user, "bob@example.com");

        Method getEmail = clazz.getDeclaredMethod("getEmail");
        String email = (String) getEmail.invoke(user);
        System.out.println("Updated email: " + email);

        // --- Working with annotations on methods ---
        System.out.println("\n=== Annotations on Methods ===");
        for (Method method : clazz.getDeclaredMethods()) {
            Transactional tx = method.getAnnotation(Transactional.class);
            if (tx != null) {
                System.out.println(method.getName()
                        + " â€” propagation: " + tx.propagation()
                        + ", readOnly: " + tx.readOnly());
            }
        }
    }

}
```

### Runtime Annotation Access

Annotations with `@Retention(RetentionPolicy.RUNTIME)` can be inspected at runtime using the Reflection API.

```java
import java.lang.reflect.*;
import java.util.*;

public class RuntimeAnnotationAccessDemo {

    public static void main(String[] args) {
        Class<?> clazz = User.class;

        // --- Class-level annotations ---
        System.out.println("=== Class Annotations ===");
        Entity entity = clazz.getAnnotation(Entity.class);
        if (entity != null) {
            System.out.println("Table: " +
                    (entity.tableName().isEmpty()
                            ? clazz.getSimpleName()
                            : entity.tableName()));
        }

        // Get all annotations
        System.out.println("\nAll annotations on " + clazz.getSimpleName() + ":");
        for (java.lang.annotation.Annotation ann : clazz.getAnnotations()) {
            System.out.println("  @" + ann.annotationType().getSimpleName());
        }

        // --- Field-level annotations ---
        System.out.println("\n=== Field Annotations ===");
        Map<String, String> columnMappings = new LinkedHashMap<>();
        String idField = null;

        for (Field field : clazz.getDeclaredFields()) {
            Id id = field.getAnnotation(Id.class);
            Column column = field.getAnnotation(Column.class);

            if (id != null) {
                idField = field.getName();
                System.out.println("@Id on " + field.getName()
                        + " (auto: " + id.autoGenerated() + ")");
            }

            if (column != null) {
                columnMappings.put(field.getName(), column.name());
                System.out.println("@" + Column.class.getSimpleName()
                        + " on " + field.getName()
                        + " â†’ column '" + column.name() + "'"
                        + " (nullable: " + column.nullable()
                        + ", length: " + column.length()
                        + ", unique: " + column.unique() + ")");
            }
        }

        // --- Method-level annotations ---
        System.out.println("\n=== Method Annotations ===");
        for (Method method : clazz.getDeclaredMethods()) {
            Transactional tx = method.getAnnotation(Transactional.class);
            if (tx != null) {
                System.out.println("@" + Transactional.class.getSimpleName()
                        + " on " + method.getName()
                        + " (propagation: " + tx.propagation()
                        + ", isolation: " + tx.isolation()
                        + ", readOnly: " + tx.readOnly() + ")");
            }
        }

        System.out.println("\nColumn mappings: " + columnMappings);
        System.out.println("ID field: " + idField);
    }

}
```

---

## Reflection Patterns

### Dynamic Proxies

A **dynamic proxy** implements one or more interfaces at runtime by delegating method calls to an `InvocationHandler`. This is the foundation of AOP in Spring (declarative transactions, caching, security).

```java
import java.lang.reflect.*;

public interface Service {

    String process(String input);

    int calculate(int a, int b);

}

public class RealService implements Service {

    @Override
    public String process(String input) {
        return "Processed: " + input.toUpperCase();
    }

    @Override
    public int calculate(int a, int b) {
        return a + b;
    }

}

public class LoggingInvocationHandler implements InvocationHandler {

    private final Object target;

    public LoggingInvocationHandler(Object target) {
        this.target = target;
    }

    @Override
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        String methodName = method.getName();
        System.out.println("[LOG] Entering: " + methodName
                + " with args: " + java.util.Arrays.toString(args));

        long start = System.nanoTime();
        try {
            Object result = method.invoke(target, args);
            long elapsed = (System.nanoTime() - start) / 1_000_000;
            System.out.println("[LOG] Exiting: " + methodName
                    + " result: " + result
                    + " (" + elapsed + "ms)");
            return result;
        } catch (InvocationTargetException e) {
            System.out.println("[LOG] Error in " + methodName
                    + ": " + e.getTargetException().getMessage());
            throw e.getTargetException();
        }
    }

    @SuppressWarnings("unchecked")
    public static <T> T createProxy(T target, Class<T> interfaceClass) {
        return (T) Proxy.newProxyInstance(
                interfaceClass.getClassLoader(),
                new Class<?>[]{interfaceClass},
                new LoggingInvocationHandler(target)
        );
    }

}

public class TransactionalInvocationHandler implements InvocationHandler {

    private final Object target;

    public TransactionalInvocationHandler(Object target) {
        this.target = target;
    }

    @Override
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        Transactional tx = method.getAnnotation(Transactional.class);
        if (tx != null) {
            System.out.println("[TX] Beginning transaction"
                    + " (propagation: " + tx.propagation()
                    + ", readOnly: " + tx.readOnly() + ")");
            try {
                Object result = method.invoke(target, args);
                System.out.println("[TX] Committing transaction");
                return result;
            } catch (Exception e) {
                System.out.println("[TX] Rolling back transaction due to: " + e.getMessage());
                throw e.getCause() != null ? e.getCause() : e;
            }
        } else {
            return method.invoke(target, args);
        }
    }

    @SuppressWarnings("unchecked")
    public static <T> T createProxy(T target, Class<T> interfaceClass) {
        return (T) Proxy.newProxyInstance(
                interfaceClass.getClassLoader(),
                new Class<?>[]{interfaceClass},
                new TransactionalInvocationHandler(target)
        );
    }

}
```

Usage:

```java
public class DynamicProxyDemo {

    public static void main(String[] args) {
        RealService realService = new RealService();

        // Logging proxy
        Service loggedService = LoggingInvocationHandler.createProxy(
                realService, Service.class
        );
        System.out.println("=== Logging Proxy ===");
        String result = loggedService.process("hello world");
        int sum = loggedService.calculate(10, 20);

        System.out.println();

        // Transactional proxy
        Service transactionalService = TransactionalInvocationHandler.createProxy(
                realService, Service.class
        );
        System.out.println("=== Transactional Proxy ===");
        transactionalService.process("tx test");
    }

}
```

### Dependency Injection via Reflection

A minimal DI container that scans for annotated fields and injects dependencies:

```java
import java.lang.annotation.*;
import java.lang.reflect.*;
import java.util.*;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
public @interface Inject {
}

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
public @interface Component {
    String name() default "";
}

@Component
public class Logger {

    public void info(String message) {
        System.out.println("[INFO] " + message);
    }

}

@Component
public class OrderRepository {

    private final List<String> orders = new ArrayList<>();

    public void save(String order) {
        orders.add(order);
        System.out.println("Saved order: " + order);
    }

    public List<String> findAll() {
        return new ArrayList<>(orders);
    }

}

@Component
public class OrderService {

    @Inject
    private Logger logger;

    @Inject
    private OrderRepository orderRepository;

    public void placeOrder(String item) {
        logger.info("Placing order for: " + item);
        orderRepository.save(item);
    }

    public List<String> getOrders() {
        return orderRepository.findAll();
    }

}

public class SimpleDiContainer {

    private final Map<Class<?>, Object> beans = new HashMap<>();

    public void register(Class<?>... componentClasses) throws Exception {
        for (Class<?> clazz : componentClasses) {
            Object instance = clazz.getDeclaredConstructor().newInstance();
            beans.put(clazz, instance);
        }
    }

    public <T> T getBean(Class<T> clazz) {
        return clazz.cast(beans.get(clazz));
    }

    public void injectDependencies() throws Exception {
        for (Object bean : beans.values()) {
            Class<?> clazz = bean.getClass();
            for (Field field : clazz.getDeclaredFields()) {
                if (field.isAnnotationPresent(Inject.class)) {
                    Class<?> fieldType = field.getType();
                    Object dependency = beans.get(fieldType);
                    if (dependency == null) {
                        throw new RuntimeException(
                                "No bean of type " + fieldType.getName()
                                        + " found for injection into " + clazz.getName()
                        );
                    }
                    field.setAccessible(true);
                    field.set(bean, dependency);
                }
            }
        }
    }

    public static void main(String[] args) throws Exception {
        SimpleDiContainer container = new SimpleDiContainer();
        container.register(Logger.class, OrderRepository.class, OrderService.class);
        container.injectDependencies();

        OrderService orderService = container.getBean(OrderService.class);
        orderService.placeOrder("Laptop");
        orderService.placeOrder("Mouse");

        System.out.println("All orders: " + orderService.getOrders());
    }

}
```

### ORM Mapping via Reflection

A simple ORM mapper that reads annotations and generates SQL:

```java
import java.lang.reflect.*;
import java.util.*;
import java.util.stream.*;

public class SimpleOrmMapper {

    public String generateInsert(Object entity) throws Exception {
        Class<?> clazz = entity.getClass();
        Entity entityAnn = clazz.getAnnotation(Entity.class);
        String tableName = entityAnn.tableName().isEmpty()
                ? clazz.getSimpleName().toLowerCase()
                : entityAnn.tableName();

        List<String> columns = new ArrayList<>();
        List<String> values = new ArrayList<>();

        for (Field field : clazz.getDeclaredFields()) {
            Column column = field.getAnnotation(Column.class);
            if (column == null) continue;

            field.setAccessible(true);
            Object value = field.get(entity);

            columns.add(column.name());
            if (value == null) {
                values.add("NULL");
            } else if (value instanceof String || value instanceof Enum) {
                values.add("'" + value.toString().replace("'", "''") + "'");
            } else if (value instanceof Number || value instanceof Boolean) {
                values.add(value.toString());
            } else {
                values.add("'" + value.toString() + "'");
            }
        }

        String columnList = String.join(", ", columns);
        String valueList = String.join(", ", values);

        return "INSERT INTO " + tableName
                + " (" + columnList + ") VALUES (" + valueList + ");";
    }

    public String generateSelectById(Class<?> clazz, Object idValue) {
        Entity entityAnn = clazz.getAnnotation(Entity.class);
        String tableName = entityAnn.tableName().isEmpty()
                ? clazz.getSimpleName().toLowerCase()
                : entityAnn.tableName();

        String idColumn = null;
        for (Field field : clazz.getDeclaredFields()) {
            if (field.isAnnotationPresent(Id.class)) {
                Column column = field.getAnnotation(Column.class);
                idColumn = (column != null) ? column.name() : field.getName();
                break;
            }
        }

        if (idColumn == null) {
            throw new RuntimeException("No @Id field found in " + clazz.getSimpleName());
        }

        String idFormatted = (idValue instanceof String)
                ? "'" + idValue + "'"
                : idValue.toString();

        return "SELECT * FROM " + tableName + " WHERE " + idColumn + " = " + idFormatted + ";";
    }

    public <T> T mapToEntity(Class<T> clazz, Map<String, Object> row) throws Exception {
        Constructor<T> ctor = clazz.getDeclaredConstructor();
        T entity = ctor.newInstance();

        for (Field field : clazz.getDeclaredFields()) {
            Column column = field.getAnnotation(Column.class);
            if (column == null) continue;

            field.setAccessible(true);
            Object value = row.get(column.name());
            if (value != null) {
                field.set(entity, convertValue(value, field.getType()));
            }
        }

        return entity;
    }

    @SuppressWarnings("unchecked")
    private Object convertValue(Object value, Class<?> targetType) {
        if (targetType.isInstance(value)) return value;
        if (targetType == Integer.class || targetType == int.class) {
            return ((Number) value).intValue();
        }
        if (targetType == Long.class || targetType == long.class) {
            return ((Number) value).longValue();
        }
        if (targetType == Double.class || targetType == double.class) {
            return ((Number) value).doubleValue();
        }
        if (targetType == Boolean.class || targetType == boolean.class) {
            return Boolean.valueOf(value.toString());
        }
        if (targetType == String.class) {
            return value.toString();
        }
        return value;
    }

    public static void main(String[] args) throws Exception {
        SimpleOrmMapper mapper = new SimpleOrmMapper();

        User user = new User(1L, "jane", "jane@example.com", 28);

        String insertSQL = mapper.generateInsert(user);
        System.out.println("Generated INSERT:");
        System.out.println(insertSQL);

        String selectSQL = mapper.generateSelectById(User.class, 1L);
        System.out.println("\nGenerated SELECT:");
        System.out.println(selectSQL);

        Map<String, Object> row = new LinkedHashMap<>();
        row.put("user_id", 2L);
        row.put("username", "john");
        row.put("email", "john@example.com");
        row.put("age", 35);

        User mapped = mapper.mapToEntity(User.class, row);
        System.out.println("\nMapped entity:");
        System.out.println("  ID: " + mapped.getId());
        System.out.println("  Username: " + mapped.getUsername());
        System.out.println("  Email: " + mapped.getEmail());
        System.out.println("  Age: " + mapped.getAge());
    }

}
```

---

## Annotations in Spring Boot

Spring Boot makes extensive use of annotations for configuration, dependency injection, and component discovery.

### Stereotype Annotations

```java
// @Component â€” generic stereotype for any Spring-managed bean
@Component
public class GenericComponent {

    public String execute() {
        return "Generic component executed";
    }

}

// @Service â€” specialization of @Component for service-layer classes
@Service
public class UserService {

    public String getUserName(Long id) {
        return "User-" + id;
    }

}

// @Repository â€” specialization for persistence-layer classes
// Adds automatic persistence exception translation
@Repository
public class JdbcUserRepository {

    public User findById(Long id) {
        // In real code, would query a database
        return new User(id, "found", "found@example.com", 25);
    }

}

// @Controller â€” specialization for web-layer classes (MVC)
@Controller
public class UserController {

    @GetMapping("/users/{id}")
    public String getUser(@PathVariable Long id) {
        return "user-detail";
    }

}

// @RestController â€” convenience combination of @Controller + @ResponseBody
// @RestController
// public class ApiUserController {
//
//     @GetMapping("/api/users/{id}")
//     public User getUser(@PathVariable Long id) {
//         return new User(id, "api-user", "api@example.com", 30);
//     }
//
// }
```

### @Autowired

```java
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

@Service
public class AutowiredDemoService {

    // Field injection
    @Autowired
    private UserRepository userRepository;

    // Constructor injection â€” preferred approach in modern Spring
    private final NotificationService notificationService;

    public AutowiredDemoService(NotificationService notificationService) {
        this.notificationService = notificationService;
    }

    // Setter injection
    private AuditService auditService;

    @Autowired
    public void setAuditService(AuditService auditService) {
        this.auditService = auditService;
    }

    // Qualifier-based disambiguation
    @Autowired
    @Qualifier("primaryCache")
    private CacheManager cacheManager;

    // Optional dependency
    @Autowired(required = false)
    private MetricsCollector metricsCollector;

    public void performAction(Long userId) {
        User user = userRepository.findById(userId);
        notificationService.notify(user);
        auditService.log("Action performed by user: " + userId);
    }

}
```

### Meta-Annotations and Composed Annotations

Spring heavily uses **meta-annotations**â€”annotations that are themselves annotated with other annotations. This enables **composed annotations** where a single annotation encapsulates multiple behaviors.

```java
import org.springframework.stereotype.Component;
import org.springframework.core.annotation.AliasFor;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RestController;
import java.lang.annotation.*;

// --- Meta-annotation basics ---

// @RestController is itself a composed annotation:
// @Target(ElementType.TYPE)
// @Retention(RetentionPolicy.RUNTIME)
// @Documented
// @Controller
// @ResponseBody
// public @interface RestController {
//     @AliasFor(annotation = Controller.class)
//     String value() default "";
// }

// Creating a custom composed annotation
@Component
@Transactional
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
public @interface ServiceWithTransaction {

    @AliasFor(annotation = Component.class, attribute = "value")
    String beanName() default "";

    @AliasFor(annotation = Transactional.class, attribute = "readOnly")
    boolean readOnly() default false;

}

// Usage
@ServiceWithTransaction(beanName = "orderMgmt", readOnly = false)
public class OrderManagementService {

    public void createOrder(String item) {
        System.out.println("Creating order for: " + item);
    }

}

// --- Conditional annotations ---
// Spring's @Conditional family uses annotations extensively:
//
// @ConditionalOnClass(name = "org.postgresql.Driver")
// @ConditionalOnProperty(name = "app.feature.x.enabled", havingValue = "true")
// @ConditionalOnMissingBean(DataSource.class)
// These are meta-annotations processed by the auto-configuration engine.

// --- @AliasFor example ---
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
public @interface FeatureFlag {

    @AliasFor("name")
    String value() default "";

    @AliasFor("value")
    String name() default "";

    boolean enabled() default true;

}

@FeatureFlag(name = "dark-mode", enabled = true)
public class DarkModeConfig {

    public boolean isDarkMode() {
        return true;
    }

}

```

### How Spring Processes Annotations

Spring uses the Reflection API combined with the `ASM` bytecode library to discover and process annotations:

1. **Classpath scanning**: `ClassPathScanningCandidateComponentProvider` scans packages for classes annotated with `@Component` (and its meta-annotations).
2. **Bean post-processing**: `BeanPostProcessor` implementations (like `AutowiredAnnotationBeanPostProcessor`) use reflection to inject dependencies into fields annotated with `@Autowired`, `@Inject`, or `@Value`.
3. **AOP proxies**: When a bean is annotated with `@Transactional` or `@Cacheable`, Spring wraps it in a dynamic proxy.
4. **Auto-configuration**: `@ConditionalOnClass`, `@ConditionalOnMissingBean`, etc., are evaluated at startup using reflection to decide which beans to register.

```java
import org.springframework.context.annotation.ClassPathScanningCandidateComponentProvider;
import org.springframework.core.type.filter.AnnotationTypeFilter;
import org.springframework.stereotype.Component;

public class SpringAnnotationProcessingSimulation {

    public static void main(String[] args) {
        // This simulates how Spring detects annotated components
        ClassPathScanningCandidateComponentProvider scanner =
                new ClassPathScanningCandidateComponentProvider(false);

        scanner.addIncludeFilter(new AnnotationTypeFilter(Component.class));

        var beans = scanner.findCandidateComponents("com.example");
        System.out.println("Discovered " + beans.size() + " components:");
        for (var bean : beans) {
            System.out.println("  - " + bean.getBeanClassName());
        }
    }

}
```

---

## Module System Impact on Reflection

Java 9 introduced the **Java Platform Module System** (JPMS), which adds strong encapsulation. By default, reflection cannot access **private** members of types in other modules.

### The `opens` Directive

A module must explicitly allow runtime access with the `opens` directive:

```java
// module-info.java â€” module declaration

module com.example.myapp {
    // Opens specific packages for reflection
    opens com.example.myapp.model;
    opens com.example.myapp.service;

    // Opens a package for reflection only by specific modules
    opens com.example.myapp.internal to com.example.framework;

    // Opens all packages in the module (use sparingly)
    // open module com.example.myapp {
    //     requires spring.core;
    //     requires spring.beans;
    // }
}
```

### Command-Line Workaround: `--add-opens`

For frameworks that need to reflect on internal JDK types, use JVM flags:

```java
// --add-opens module/package=reflecting.module
//
// java --add-opens java.base/java.lang=ALL-UNNAMED \
//      --add-opens java.base/java.util=ALL-UNNAMED \
//      -jar myapp.jar
```

### Reflection Under the Module System

```java
import java.lang.reflect.*;

public class ModuleReflectionDemo {

    public static void main(String[] args) throws Exception {
        // Check if a class is in a named module
        Class<?> stringClass = String.class;
        Module stringModule = stringClass.getModule();
        System.out.println("String module: " + stringModule.getName());
        System.out.println("String module is named: " + stringModule.isNamed());

        // Open module â€” all packages are fully accessible via reflection
        // @SuppressWarnings("unchecked")
        // Class<OpenModuleClass> clazz = (Class<OpenModuleClass>)
        //         Class.forName("com.example.openmodule.OpenModuleClass");
        // for (Method method : clazz.getDeclaredMethods()) {
        //     method.setAccessible(true); // Works because module is open
        // }

        // Non-open module â€” reflection is restricted
        Class<?> systemClass = Class.forName("java.lang.reflect.Proxy");
        try {
            // This will throw InaccessibleObjectException in recent JDKs
            // for packages not opened for reflection
            for (Field field : systemClass.getDeclaredFields()) {
                field.setAccessible(true);
                System.out.println("Field: " + field.getName());
            }
        } catch (InaccessibleObjectException e) {
            System.out.println("Cannot access fields: " + e.getMessage());
        }
    }

}
```

---

## Type Tokens

Due to erasure, generic type information is lost at runtime. **Type tokens** capture that information as `Class<?>` references until you need a reified form. **Super type tokens** go further: they capture concrete parameterized types by exploiting the fact that the generic superclass information is stored in bytecode.

### Super Type Token Pattern (Gson `TypeToken`)

```java
import java.lang.reflect.*;
import java.util.*;

public abstract class TypeReference<T> {

    private final Type type;

    @SuppressWarnings("unchecked")
    protected TypeReference() {
        Type superclass = getClass().getGenericSuperclass();
        if (superclass instanceof Class<?>) {
            throw new RuntimeException("Missing type parameter: "
                    + "specify a concrete type like new TypeReference<List<String>>() {}");
        }
        this.type = ((ParameterizedType) superclass).getActualTypeArguments()[0];
    }

    public Type getType() {
        return type;
    }

    @Override
    public boolean equals(Object o) {
        return (o instanceof TypeReference<?> tr)
                && type.equals(tr.type);
    }

    @Override
    public int hashCode() {
        return type.hashCode();
    }

    @Override
    public String toString() {
        return type.toString();
    }

    public Class<?> getRawType() {
        if (type instanceof ParameterizedType pt) {
            return (Class<?>) pt.getRawType();
        }
        return (Class<?>) type;
    }

    public Type[] getActualTypeArguments() {
        if (type instanceof ParameterizedType pt) {
            return pt.getActualTypeArguments();
        }
        return new Type[0];
    }

}

public class SuperTypeTokenDemo {

    private static final Map<TypeReference<?>, Object> registry = new HashMap<>();

    public static <T> void register(TypeReference<T> ref, T instance) {
        registry.put(ref, instance);
    }

    @SuppressWarnings("unchecked")
    public static <T> T get(TypeReference<T> ref) {
        return (T) registry.get(ref);
    }

    public static void main(String[] args) throws Exception {
        // Captures List<String> at runtime via anonymous subclass
        TypeReference<List<String>> stringListRef = new TypeReference<>() {};
        System.out.println("Type: " + stringListRef.getType());
        System.out.println("Raw type: " + stringListRef.getRawType());
        System.out.println("Type args: " + Arrays.toString(stringListRef.getActualTypeArguments()));

        // Register instances by their parameterized type
        register(new TypeReference<List<String>>() {}, List.of("a", "b", "c"));
        register(new TypeReference<Map<Integer, String>>() {}, Map.of(1, "one", 2, "two"));

        // Retrieve with full type safety
        List<String> strings = get(new TypeReference<List<String>>() {});
        System.out.println("Strings: " + strings);

        Map<Integer, String> map = get(new TypeReference<Map<Integer, String>>() {});
        System.out.println("Map: " + map);

        // These are distinct types â€” won't conflict
        register(new TypeReference<List<Integer>>() {}, List.of(1, 2, 3));
        List<Integer> ints = get(new TypeReference<List<Integer>>() {});
        System.out.println("Integers: " + ints);

        // Demonstrate that parameterized types are preserved
        System.out.println("\n=== Type Preservation ===");
        showTypeInfo(new TypeReference<List<Set<String>>>() {});
        showTypeInfo(new TypeReference<Map<String, List<Integer>>>() {});
    }

    private static void showTypeInfo(TypeReference<?> ref) {
        System.out.println("Type: " + ref.getType());
        System.out.println("  Raw: " + ref.getRawType());
        for (int i = 0; i < ref.getActualTypeArguments().length; i++) {
            Type arg = ref.getActualTypeArguments()[i];
            System.out.println("  Arg " + i + ": " + arg
                    + " (class: " + arg.getClass().getName() + ")");
        }
    }

}
```

### Jackson's TypeReference

Jackson provides `com.fasterxml.jackson.core.type.TypeReference` with the same pattern:

```java
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.*;

public class JacksonTypeReferenceDemo {

    public static void main(String[] args) throws Exception {
        ObjectMapper mapper = new ObjectMapper();

        String json = """
                [
                    {"id": 1, "name": "Alice"},
                    {"id": 2, "name": "Bob"}
                ]
                """;

        // Without TypeReference â€” returns List<Map> (raw types)
        List<Map<String, Object>> raw = mapper.readValue(
                json, List.class
        );
        System.out.println("Raw type: " + raw.getClass());

        // With TypeReference â€” preserves generic type
        List<User> users = mapper.readValue(
                json,
                new TypeReference<List<User>>() {}
        );
        System.out.println("Users: " + users);
        System.out.println("User class: " + users.get(0).getClass().getName());

        // Complex nested generics
        String complexJson = """
                {
                    "results": [
                        {"id": 10, "name": "Charlie"},
                        {"id": 20, "name": "Diana"}
                    ],
                    "totalCount": 2,
                    "page": 1
                }
                """;

        var pageResult = mapper.readValue(
                complexJson,
                new TypeReference<PageResult<User>>() {}
        );
        System.out.println("Page: " + pageResult.results()
                + ", total: " + pageResult.totalCount()
                + ", page: " + pageResult.page());
    }

    record PageResult<T>(
            List<T> results,
            int totalCount,
            int page
    ) {}

}
```

### Generic DAO with TypeReference

```java
import java.lang.reflect.*;
import java.util.*;

public abstract class GenericDao<T, ID> {

    private final Class<T> entityClass;
    private final Map<ID, T> store = new LinkedHashMap<>();

    @SuppressWarnings("unchecked")
    protected GenericDao() {
        Type superclass = getClass().getGenericSuperclass();
        if (superclass instanceof ParameterizedType pt) {
            this.entityClass = (Class<T>) pt.getActualTypeArguments()[0];
        } else {
            throw new RuntimeException("Missing type parameter for GenericDao");
        }
    }

    public Class<T> getEntityClass() {
        return entityClass;
    }

    public T save(ID id, T entity) {
        store.put(id, entity);
        return entity;
    }

    public Optional<T> findById(ID id) {
        return Optional.ofNullable(store.get(id));
    }

    public List<T> findAll() {
        return new ArrayList<>(store.values());
    }

    public void delete(ID id) {
        store.remove(id);
    }

    public long count() {
        return store.size();
    }

    public static void main(String[] args) {
        GenericDao<User, Long> userDao = new GenericDao<>() {};
        System.out.println("Entity class: " + userDao.getEntityClass().getName());

        userDao.save(1L, new User(1L, "alice", "alice@example.com", 25));
        userDao.save(2L, new User(2L, "bob", "bob@example.com", 30));

        userDao.findById(1L).ifPresent(u ->
                System.out.println("Found: " + u.getUsername())
        );

        System.out.println("All users: " + userDao.findAll().size());
    }

}
```

---

## Summary

This chapter covered three deeply interconnected mechanisms that define advanced Java programming.

**Generics** provide compile-time type safety for collections, algorithms, and data structures. Type parameters (`T`, `E`, `K`, `V`) allow classes and methods to operate on types specified by the caller. Bounded type parameters (`<T extends Comparable<T>>`) and multiple bounds (`<T extends A & B>`) constrain the types that can be used. Wildcards introduce usage-site variance: `? extends T` for producers, `? super T` for consumersâ€”the fundamental PECS principle. Type erasure removes generic information at compile time, inserting casts and generating bridge methods as needed. This erasure imposes limitations: no generic array creation, no `instanceof` with parameterized types, and potential heap pollution, which `@SafeVarargs` helps mitigate.

**Annotations** attach metadata to Java code elements. Custom annotations are defined with `@interface` and controlled by meta-annotations: `@Retention` (when available), `@Target` (where applicable), `@Documented` (Javadoc inclusion), `@Inherited` (subclass propagation), and `@Repeatable` (multiple instances). Annotation processing can occur at compile time via APT (JSR 269) or at runtime via reflection.

**Reflection** enables runtime inspection and invocation of constructors, methods, and fields. The `Class` object is the entry point, and `java.lang.reflect` provides the tools for introspection. Dynamic proxies (`Proxy.newProxyInstance`, `InvocationHandler`) delegate interface calls, forming the basis of AOP and declarative transactions. Spring Boot builds on all three: stereotype annotations (`@Component`, `@Service`, `@Repository`, `@Controller`) mark beans for auto-discovery, meta-annotations compose behavior, and reflection powers dependency injection and auto-configuration.

The Java module system (JPMS) restricts reflection by default, requiring `opens` directives or `--add-opens` flags for reflective access. Super type tokens (`TypeReference`) overcome erasure to preserve concrete parameterized types at runtime, essential for frameworks like Jackson and Gson.

Together, generics, annotations, and reflection form a triad that enables the framework-driven development model of modern Java: generics provide safety, annotations provide intent, and reflection provides the machinery to interpret and act on that intent at runtime.

---

> **Pro Tip:** Type every code example yourself â€” muscle memory for Java syntax is built through active practice, not passive reading.

> **Remember:** Understanding the "why" behind Java language features is more important than memorizing syntax.

## Concept Comparison Table

| Concept | Definition | Key Distinction | Use Case |
|---------|-----------|-----------------|----------|
| Primitives | Value types stored on stack | Fixed size, pass by value | Performance-critical code |
| Reference Types | Object instances on heap | Variable size, pass by reference | Complex data structures |
| Immutable | Cannot change after creation | Thread-safe, cacheable | DTOs, keys, configuration |

## Quick Reference

| Category | Key Points | Common Pitfalls |
|----------|-----------|----------------|
| **Syntax** | Java is case-sensitive, class-based, statically typed | Missing semicolons, case errors |
| **Types** | 8 primitives, object wrappers, String | Autoboxing overhead in loops |
| **Control Flow** | if/else, switch (arrow/yield), loops, break/continue | Switch fall-through without break |

## Cross-Application Matrix

| Feature | Web Apps | Microservices | Batch | Mobile |
|---------|----------|---------------|-------|--------|
| Records | DTOs | API contracts | Data pipelines | Data classes |
| Pattern Matching | Type-safe visitors | Request routing | Event classification | State handling |
| Switch Expressions | Request dispatch | Error code mapping | Status transitions | Navigation |

## Chapter Quiz

1. Which is NOT a valid Java primitive type?
   - A) int
   - B) boolean
   - C) string
   - D) char

<details>
<summary>Answer</summary>
**C) string.** String is a reference type (java.lang.String), not a primitive.
</details>

2. What is the default value of a boolean field in a class?
   - A) true
   - B) false
   - C) null
   - D) undefined

<details>
<summary>Answer</summary>
**B) false.** Class fields are initialized to default values.
</details>

3. Which keyword prevents a method from being overridden?
   - A) static
   - B) final
   - C) private
   - D) abstract

<details>
<summary>Answer</summary>
**B) final.** A final method cannot be overridden by subclasses.
</details>

## Exercises

### Review Questions

1. What is the difference between a generic class and a generic method? When would you use each?

2. Explain what happens during type erasure for the method `<T extends Comparable<T>> T max(T a, T b)`. What is the erased signature?

3. What is a bridge method and when does the compiler generate one?

4. What is the difference between `List<?>` and `List<Object>`? Can you add elements to either?

5. State the PECS principle and give one example of a correct use for each wildcard type.

6. What meta-annotations control annotation behavior? What does each do?

7. How does the `@Repeatable` annotation work? What is the container annotation?

8. What are the three ways to obtain a `Class<?>` object in Java?

9. What is the difference between `getMethods()` and `getDeclaredMethods()` on a `Class` object?

10. How does a dynamic proxy work? What are the key components?

11. Why do frameworks need `--add-opens` flags with modern JDK versions?

12. What problem do super type tokens solve that ordinary `Class<?>` objects cannot?

### Application Problems

13. **Generic Stack**: Implement a generic `Stack<T>` class with `push`, `pop`, `peek`, `isEmpty`, and `size` methods. Ensure it is type-safe and does not leak its internal array type.

14. **Wildcard Utility**: Write a utility class `Collections2` with a static method `copy` that copies elements from a source collection to a destination collection using appropriate wildcards.

15. **Annotation Processor**: Create a `@NotNull` annotation that can be applied to method parameters. Write an annotation processor that emits a compile-time error for any method parameter annotated with `@NotNull` that is a primitive type.

16. **Reflective Object Printer**: Write a method `printObject(Object obj)` that uses reflection to print all non-null field names and values of an object, including inherited fields.

17. **Spring-Style Proxy**: Create a `@Cacheable` annotation and an `InvocationHandler` that caches return values of annotated methods based on their arguments. Demonstrate with a `FibonacciService`.

18. **Generic Repository**: Using the super type token pattern, create a `GenericRepository<T, ID>` base class that knows its entity type at runtime and can generate type-safe queries.

### Challenge Problems

19. **Minimal DI Container**: Build a complete dependency injection container that:
    - Scans a given package for classes annotated with `@Component`
    - Discovers `@Inject`-annotated fields and constructors
    - Resolves the dependency graph (including circular dependency detection)
    - Supports `@Qualifier` for disambiguation
    - Creates and returns fully wired instances

20. **Object-Relational Mapper**: Implement a mini ORM that:
    - Uses `@Entity`, `@Table`, `@Column`, `@Id`, and `@GeneratedValue` annotations
    - Generates `CREATE TABLE` SQL from annotated classes
    - Persists objects as JSON for simplicity (instead of a real database)
    - Supports basic CRUD operations via reflection
    - Handles inheritance with `@MappedSuperclass`

21. **Generic Type-safe Builder**: Implement a generic builder pattern that:
    - Uses a type-safe step builder (prevents calling `build()` before required fields are set)
    - Preserves generic type information at runtime
    - Uses bounded type parameters to ensure compile-time safety
    - Example: `PersonBuilder.name("Alice").age(30).build()` where `age` is optional but `name` is required

22. **AOP Framework Simulation**: Build a small AOP framework that:
    - Defines `@Before`, `@After`, and `@Around` advice annotations
    - Uses dynamic proxies to weave advice around methods
    - Supports pointcut expressions via a `@Pointcut` annotation
    - Can compose multiple aspects on the same target

23. **Module-Aware Plugin System**: Create a plugin system that:
    - Loads plugin JARs from a directory at runtime
    - Uses JPMS to isolate plugins in separate modules
    - Opens specific service interfaces for reflection
    - Discovers plugin implementations via a `@Plugin` annotation
    - Allows plugins to contribute new endpoints to a REST API
