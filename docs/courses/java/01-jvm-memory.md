# JVM Architecture & Memory Management

> **Previous:** None (First Chapter) | **Next:** [Concurrency & Threading](./02-concurrency.md)

## Learning Objectives

By the end of this chapter, you will be able to:

- Explain the full lifecycle of a Java program from source code to execution
- Describe the JVM architecture including class loading, runtime data areas, and the execution engine
- Read and interpret JVM bytecode using `javap`
- Understand how the JIT compiler optimizes hot code paths
- Differentiate heap, stack, metaspace, and direct memory
- Explain the generational garbage collection hypothesis
- Compare and contrast Serial, Parallel, G1, ZGC, and Shenandoah garbage collectors
- Tune JVM memory and GC behavior using standard `-X` and `-XX` flags
- Diagnose and fix common memory leak patterns
- Analyze stack overflow errors and configure stack sizes
- Use heap dump analysis tools like MAT and jhat
- Configure the string pool and understand `intern()` behavior
- Apply JVM performance flags in production scenarios

## Prerequisites

- Basic Java syntax and object-oriented programming
- Familiarity with the command line

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|--------------------|
| JVM Architecture | Three subsystems: Class Loader, Runtime Data Areas, Execution Engine | Platform independence through bytecode abstraction |
| Class Loading | Delegation hierarchy: Bootstrap, Platform, Application | Custom ClassLoaders enable framework isolation |
| Memory Areas | Heap (shared), Stack (per-thread), Metaspace, Direct Memory | GC focuses on heap; stack frames hold method state |
| Garbage Collection | Generational hypothesis: most objects die young | Choose GC based on pause time vs throughput needs |
| JIT Compilation | Hot code paths compiled to native machine code | -XX flags control tiered compilation behavior |

## Chapter Roadmap

```mermaid
flowchart LR
    A[JVM Architecture] --> B[Class Loading]
    B --> C[Runtime Data Areas]
    C --> D[Bytecode & JIT]
    D --> E[Memory Deep Dive]
    E --> F[Garbage Collection]
    F --> G[GC Tuning & Flags]
    G --> H[Memory Leaks & Debugging]
```

> **Pro Tip:** Always start tuning with a clear goal — minimize pause time (G1/ZGC) or maximize throughput (Parallel). Guessing GC flags without metrics is cargo-cult optimization.

---

## 1. JVM Architecture Overview

The Java Virtual Machine is the cornerstone of Java's platform independence. It defines an abstract computing machine that executes Java bytecode regardless of the underlying hardware and operating system. Understanding the JVM is essential for writing performant, reliable Java applications.

The JVM consists of three major subsystems:

1. **Class Loader Subsystem** → loads, links, and initializes Java classes
2. **Runtime Data Areas** → the memory regions where the JVM stores data during execution
3. **Execution Engine** → interprets and compiles bytecode into native machine instructions

Let us examine each subsystem in depth with complete code examples.

![JVM Architecture & Memory Model](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/01-jvm-memory.png)

---

## 2. Class Loading Mechanism

Class loading is the process by which the JVM locates, loads, and prepares class files for execution. It follows a hierarchical, delegation-based model.

### 2.1 Built-in Class Loaders


The JVM provides three built-in class loaders arranged in a parent-child hierarchy:

| Class Loader | Loads From | Visible Classes |
|---|---|---|
| **Bootstrap Class Loader** | rt.jar, jrt:/java.base (JDK 9+) | Core Java APIs (java.lang.*, java.util.*) |
| **Platform Class Loader** (JDK 9+), formerly Extension Class Loader | jrt:/java.* modules | Platform APIs |
| **System Class Loader** (also Application Class Loader) | Classpath, -cp, module path | Application classes and libraries |

The delegation model: when a class loader receives a load request, it first delegates to its parent. Only if the parent cannot find the class does the child attempt to load it.

```java
package com.example.jvm.classloading;

public class ClassLoaderHierarchy {

    public static void main(String[] args) {
        ClassLoader appClassLoader = ClassLoaderHierarchy.class.getClassLoader();
        System.out.println("Application (System) Class Loader: " + appClassLoader);

        ClassLoader platformClassLoader = appClassLoader.getParent();
        System.out.println("Platform Class Loader: " + platformClassLoader);

        ClassLoader bootstrapClassLoader = platformClassLoader.getParent();
        System.out.println("Bootstrap Class Loader: " + bootstrapClassLoader);

        System.out.println("Is Bootstrap null? " + (bootstrapClassLoader == null));

        System.out.println("String class loader: " + String.class.getClassLoader());
        System.out.println("ArrayList class loader: " + java.util.ArrayList.class.getClassLoader());

        System.out.println("Our class loader name: " + appClassLoader.getName());
        System.out.println("Platform loader name: " + platformClassLoader.getName());

        if (appClassLoader instanceof java.net.URLClassLoader urlCL) {
            System.out.println("Classpath URLs:");
            for (java.net.URL url : urlCL.getURLs()) {
                System.out.println("  " + url);
            }
        }
    }
}
```

**Expected Output** (JDK 21+):

```
Application (System) Class Loader: jdk.internal.loader.ClassLoaders$AppClassLoader@...
Platform Class Loader: jdk.internal.loader.ClassLoaders$PlatformClassLoader@...
Bootstrap Class Loader: null
Is Bootstrap null? true
String class loader: null
ArrayList class loader: null
```

The Bootstrap class loader returns `null` because it is implemented natively and not represented as a Java object.

### 2.2 The Class Loading Lifecycle


Class loading follows three phases:

**Loading** → The class loader reads binary data from a `.class` file and creates a `Class<?>` object. The JVM identifies the class by its fully qualified name and the defining class loader.

**Linking** → Three sub-steps:
1. **Verification**: The bytecode verifier checks that the class file is structurally correct, valid Java bytecode, and does not violate type safety.
2. **Preparation**: Static fields are allocated with default values (zero, null, false). This is **not** the same as initialization.
3. **Resolution**: Symbolic references (e.g., CONSTANT_Class_info, CONSTANT_Methodref_info) are resolved to direct memory addresses.

**Initialization** → Static initializer blocks and static field assignments execute. This phase is triggered when the JVM encounters `new`, `getstatic`, `putstatic`, `invokestatic`, or `Class.forName()`.

The following code demonstrates the precise order of class initialization:

```java
package com.example.jvm.classloading;

class Parent {
    static {
        System.out.println("1. Parent static initializer");
    }

    {
        System.out.println("4. Parent instance initializer");
    }

    Parent() {
        System.out.println("5. Parent constructor");
    }
}

class Child extends Parent {
    static {
        System.out.println("2. Child static initializer");
    }

    static final String CONSTANT = extractConstant();

    private static String extractConstant() {
        System.out.println("3. Child static field initialized");
        return "CONSTANT_VALUE";
    }

    {
        System.out.println("6. Child instance initializer");
    }

    Child() {
        System.out.println("7. Child constructor");
    }
}

public class ClassInitializationOrder {

    public static void main(String[] args) {
        System.out.println("--- Creating first Child instance ---");
        Child first = new Child();

        System.out.println();
        System.out.println("--- Accessing Child.CONSTANT ---");
        System.out.println(Child.CONSTANT);

        System.out.println();
        System.out.println("--- Creating second Child instance ---");
        Child second = new Child();

        System.out.println();
        System.out.println("--- Using Class.forName ---");
        try {
            Class<?> loaded = Class.forName("com.example.jvm.classloading.Child");
            System.out.println("Class.forName returned: " + loaded.getName());
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
```

**Expected Output:**

```
--- Creating first Child instance ---
1. Parent static initializer
2. Child static initializer
3. Child static field initialized
4. Parent instance initializer
5. Parent constructor
6. Child instance initializer
7. Child constructor

--- Accessing Child.CONSTANT ---
CONSTANT_VALUE

--- Creating second Child instance ---
4. Parent instance initializer
5. Parent constructor
6. Child instance initializer
7. Child constructor
```

Observe: the second instance does **not** re-run static initializers → class initialization happens exactly once per class loader.

### 2.3 Custom Class Loader


Custom class loaders enable advanced scenarios: loading classes from encrypted bytecode, databases, networks, or implementing hot-reload. The only requirement is extending `java.lang.ClassLoader` and overriding `findClass()`.

The following example implements a class loader that decrypts class files on the fly:

```java
package com.example.jvm.classloading;

import java.io.ByteArrayOutputStream;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Path;

public class DecryptingClassLoader extends ClassLoader {

    private static final byte XOR_KEY = 0x5A;
    private final Path classPath;

    public DecryptingClassLoader(Path classPath, ClassLoader parent) {
        super(parent);
        this.classPath = classPath;
    }

    @Override
    protected Class<?> findClass(String name) throws ClassNotFoundException {
        try {
            String classFileName = name.replace('.', '/') + ".xor";
            Path filePath = classPath.resolve(classFileName);
            byte[] encryptedBytes = readFileBytes(filePath);
            byte[] decryptedBytes = decrypt(encryptedBytes);
            return defineClass(name, decryptedBytes, 0, decryptedBytes.length);
        } catch (IOException e) {
            throw new ClassNotFoundException("Cannot load class: " + name, e);
        }
    }

    private byte[] readFileBytes(Path path) throws IOException {
        try (InputStream is = new FileInputStream(path.toFile());
             ByteArrayOutputStream bos = new ByteArrayOutputStream()) {
            byte[] buffer = new byte[4096];
            int bytesRead;
            while ((bytesRead = is.read(buffer)) != -1) {
                bos.write(buffer, 0, bytesRead);
            }
            return bos.toByteArray();
        }
    }

    private byte[] decrypt(byte[] encrypted) {
        byte[] decrypted = new byte[encrypted.length];
        for (int i = 0; i < encrypted.length; i++) {
            decrypted[i] = (byte) (encrypted[i] ^ XOR_KEY);
        }
        return decrypted;
    }
}
```

A utility to encrypt class files for use with the DecryptingClassLoader:

```java
package com.example.jvm.classloading;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class EncryptClassFiles {

    private static final byte XOR_KEY = 0x5A;

    public static void main(String[] args) throws IOException {
        if (args.length < 2) {
            System.err.println("Usage: EncryptClassFiles <input-dir> <output-dir>");
            System.exit(1);
        }

        Path inputDir = Paths.get(args[0]);
        Path outputDir = Paths.get(args[1]);

        Files.walk(inputDir)
            .filter(p -> p.toString().endsWith(".class"))
            .forEach(classFile -> {
                Path relativePath = inputDir.relativize(classFile);
                Path outputPath = outputDir.resolve(
                    relativePath.toString().replace(".class", ".xor"));
                try {
                    Files.createDirectories(outputPath.getParent());
                    byte[] original = Files.readAllBytes(classFile);
                    byte[] encrypted = xorEncrypt(original);
                    Files.write(outputPath, encrypted);
                    System.out.println("Encrypted: " + classFile + " -> " + outputPath);
                } catch (IOException e) {
                    System.err.println("Failed: " + classFile + ": " + e.getMessage());
                }
            });
    }

    private static byte[] xorEncrypt(byte[] data) {
        byte[] result = new byte[data.length];
        for (int i = 0; i < data.length; i++) {
            result[i] = (byte) (data[i] ^ XOR_KEY);
        }
        return result;
    }
}

A practical HotSwapClassLoader that reloads classes when .class files change:

```java
package com.example.jvm.classloading;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

public class HotSwapClassLoader extends ClassLoader {

    private final Path classRoot;

    public HotSwapClassLoader(Path classRoot) {
        super(ClassLoader.getSystemClassLoader());
        this.classRoot = classRoot;
    }

    public Class&lt;?> loadClass(String name, boolean forceReload) throws ClassNotFoundException {
        if (!name.startsWith("com.example")) {
            return super.loadClass(name);
        }
        Path classFile = classRoot.resolve(name.replace('.', '/') + ".class");
        if (!Files.exists(classFile)) {
            return super.loadClass(name);
        }
        try {
            byte[] bytes = Files.readAllBytes(classFile);
            return defineClass(name, bytes, 0, bytes.length);
        } catch (IOException e) {
            throw new ClassNotFoundException(name, e);
        }
    }

    public void reloadIfChanged(String className) throws ClassNotFoundException {
        Path classFile = classRoot.resolve(className.replace('.', '/') + ".class");
        if (Files.exists(classFile)) {
            loadClass(className, true);
        }
    }
}
```

### 2.4 The Delegation Model in Practice


The parent-delegation model prevents multiple copies of the same class from existing when the parent class loader can fulfill the request:

```java
package com.example.jvm.classloading;

import java.net.URL;
import java.net.URLClassLoader;

public class DelegationDemo {

    public static void main(String[] args) throws Exception {
        URL classUrl = new java.io.File("target/classes").toURI().toURL();
        URL[] urls = new URL[]{classUrl};

        URLClassLoader loader1 = new URLClassLoader(urls, null);
        URLClassLoader loader2 = new URLClassLoader(urls, null);

        Class&lt;?> class1 = loader1.loadClass("com.example.jvm.classloading.SampleClass");
        Class&lt;?> class2 = loader2.loadClass("com.example.jvm.classloading.SampleClass");

        System.out.println("Are they the same class? " + (class1 == class2));
        System.out.println("Loader 1: " + class1.getClassLoader());
        System.out.println("Loader 2: " + class2.getClassLoader());
    }
}

class SampleClass {
    static {
        System.out.println("SampleClass initialized by: " + SampleClass.class.getClassLoader());
    }
}
```

---

## 3. Runtime Data Areas

The JVM divides memory into several runtime data areas during execution. Each serves a specific purpose and has its own lifecycle.

### 3.1 Overview


```
                    JVM Memory Model

           Thread Shared                    Thread Private
  +-----------------------+   +----------+   +----------+   +--------------+
  |     Method Area        |   |   Heap   |   |  Stack   |   |  PC Register |
  |  (Class metadata,      |   | (Young + |   | (Frames, |   |              |
  |   static vars,         |   |   Old)   |   |  locals) |   |              |
  |   constant pool)       |   |          |   |          |   |              |
  +-----------------------+   +----------+   +----------+   +--------------+
```

### 3.2 Method Area (Metaspace in JDK 8+)


The method area stores class-level information:
- Class metadata (name, modifiers, interfaces)
- Static variables
- Runtime constant pool
- Method bytecode
- Field information

In JDK 7 and earlier this was called **PermGen** (Permanent Generation). JDK 8 replaced it with **Metaspace**, which uses native memory (not heap) and grows dynamically.

```java
package com.example.jvm.runtime;

public class MethodAreaDemo {

    private static int staticCounter = 0;
    private static final String GREETING = "Hello from Method Area";

    static {
        System.out.println("Static initializer block stored in method area metadata");
        staticCounter = 42;
    }

    private final String instanceField = "Per-instance data stored in heap";

    public void demoMethod() {
        String local = "Local variable stored in stack frame";
        System.out.println(local);
    }

    public static void main(String[] args) {
        System.out.println("Static variable staticCounter = " + staticCounter);
        System.out.println("Static final GREETING = " + GREETING);

        MethodAreaDemo demo = new MethodAreaDemo();
        demo.demoMethod();

        System.out.println("\n--- Inspecting Method Area via MX Beans ---");
        java.lang.management.ClassLoadingMXBean clBean =
            java.lang.management.ManagementFactory.getClassLoadingMXBean();
        System.out.println("Total loaded classes: " + clBean.getTotalLoadedClassCount());
        System.out.println("Currently loaded: " + clBean.getLoadedClassCount());
        System.out.println("Unloaded classes: " + clBean.getUnloadedClassCount());
    }
}
```

### 3.3 The Heap


The heap is the largest memory area and stores all Java object instances and arrays. It is shared across all threads and is the primary focus of garbage collection.

Heap structure in HotSpot:

```
Heap
+-- Young Generation (Nursery)
|   +-- Eden Space (most objects allocated here)
|   +-- Survivor S0 (From)
|   +-- Survivor S1 (To)
+-- Old Generation (Tenured)
+-- Metaspace (JDK 8+) -- class metadata
```

The following program creates objects and observes heap behavior:

```java
package com.example.jvm.runtime;

import java.util.ArrayList;
import java.util.List;

public class HeapDemo {

    static class Allocation {
        private final byte[] data;
        Allocation(int size) { this.data = new byte[size]; }
    }

    public static void main(String[] args) throws Exception {
        System.out.println("=== Heap Allocation Demo ===");
        Runtime rt = Runtime.getRuntime();
        System.out.println("Max memory: " + rt.maxMemory() / 1024 / 1024 + " MB");
        System.out.println("Total memory: " + rt.totalMemory() / 1024 / 1024 + " MB");
        System.out.println("Free memory: " + rt.freeMemory() / 1024 / 1024 + " MB");

        List&lt;Allocation&gt; survivors = new ArrayList&lt;>();
        for (int i = 0; i &lt; 1000; i++) {
            survivors.add(new Allocation(1024 * 10));
        }

        System.out.println("\nAfter allocating 1000 x 10KB objects:");
        System.out.println("Total memory: " + rt.totalMemory() / 1024 / 1024 + " MB");
        System.out.println("Free memory: " + rt.freeMemory() / 1024 / 1024 + " MB");

        System.out.println("\nCalling System.gc()...");
        System.gc();
        Thread.sleep(1000);

        System.out.println("After GC:");
        System.out.println("Total memory: " + rt.totalMemory() / 1024 / 1024 + " MB");
        System.out.println("Free memory: " + rt.freeMemory() / 1024 / 1024 + " MB");

        System.out.println("\n=== Allocation Failure (OOM simulation) ===");
        try {
            List&lt;byte[]&gt; bigList = new ArrayList&lt;>();
            while (true) {
                bigList.add(new byte[1024 * 1024]);
            }
        } catch (OutOfMemoryError e) {
            System.out.println("OutOfMemoryError caught: " + e.getMessage());
        }
    }
}
```

### 3.4 Stack, PC Registers, and Native Method Stack


Each thread in the JVM has its own private stack, PC register, and native method stack.

**The Stack** stores stack frames. Each method call creates a new frame that contains:
- Local variables (including method parameters)
- Operand stack (for intermediate computation values)
- Frame data (constant pool resolution, exception handlers)

```java
package com.example.jvm.runtime;

public class StackFrameDemo {

    private static int depth = 0;

    public static void main(String[] args) {
        System.out.println("=== Stack Frame Inspection ===");
        int result = computeSum(3, 7);
        System.out.println("computeSum(3, 7) = " + result);

        System.out.println("\n=== Recursion to see frame growth ===");
        try { recurse(1); }
        catch (StackOverflowError e) {
            System.out.println("Stack overflow at depth: " + depth);
        }

        System.out.println("\n=== Stack trace of current thread ===");
        StackWalker walker = StackWalker.getInstance(StackWalker.Option.RETAIN_CLASS_REFERENCE);
        walker.forEach(frame -> {
            System.out.printf("  %s.%s (%s:%d)%n",
                frame.getClassName(), frame.getMethodName(),
                frame.getFileName(), frame.getLineNumber());
        });
    }

    private static int computeSum(int a, int b) {
        int sum = a + b;
        return sum;
    }

    private static void recurse(int n) {
        depth = n;
        int[] local = new int[10];
        recurse(n + 1);
    }
}
```

The **PC Register** stores the address of the currently executing bytecode instruction. Each thread has its own PC register. For native methods, the PC is undefined.

The **Native Method Stack** supports native method execution (C/C++ code via JNI). It operates outside the Java bytecode model.

### 3.5 Direct Memory


Direct memory is allocated outside the Java heap using `ByteBuffer.allocateDirect()`. It bypasses the heap and is managed directly by the operating system. This is critical for high-performance I/O because it reduces copying between Java and native buffers.

```java
package com.example.jvm.runtime;

import java.nio.ByteBuffer;

public class DirectMemoryDemo {

    private static final int ONE_MB = 1024 * 1024;

    public static void main(String[] args) {
        System.out.println("=== Direct Memory (Off-Heap) ===");

        ByteBuffer directBuf = ByteBuffer.allocateDirect(64 * ONE_MB);
        System.out.println("Allocated 64 MB direct buffer");
        System.out.println("Buffer capacity: " + directBuf.capacity() / ONE_MB + " MB");
        System.out.println("Buffer isDirect: " + directBuf.isDirect());

        for (int i = 0; i &lt; directBuf.capacity() / 4; i++) {
            directBuf.putInt(i);
        }
        directBuf.flip();
        System.out.println("First int after write: " + directBuf.getInt());

        int iterations = 100_000;

        ByteBuffer heapBuf = ByteBuffer.allocate(64 * ONE_MB);
        long start = System.nanoTime();
        for (int i = 0; i &lt; iterations; i++) {
            heapBuf.clear();
            heapBuf.putInt(42);
        }
        long end = System.nanoTime();
        System.out.println("\nHeap buffer write time: " + (end - start) / 1_000_000 + " ms");

        start = System.nanoTime();
        for (int i = 0; i &lt; iterations; i++) {
            directBuf.clear();
            directBuf.putInt(42);
        }
        end = System.nanoTime();
        System.out.println("Direct buffer write time: " + (end - start) / 1_000_000 + " ms");

        System.out.println("\nMax direct memory (default): "
            + sun.misc.VM.maxDirectMemory() / ONE_MB + " MB");
        System.out.println("Tune with: -XX:MaxDirectMemorySize");
    }
}
```

---

## 4. Bytecode Overview

Java bytecode is the intermediate representation of your program. The JVM's instruction set has 256 opcodes (over 200 assigned in modern JDK). Understanding bytecode helps you reason about performance, concurrency, and JIT compilation.

### 4.1 Examining Bytecode with javap


The `javap` tool disassembles class files. Consider this simple class:

```java
package com.example.jvm.bytecode;

public class SimpleMath {

    public int add(int a, int b) {
        int result = a + b;
        return result;
    }

    public static double calculateAverage(int[] values) {
        int sum = 0;
        for (int value : values) {
            sum += value;
        }
        return (double) sum / values.length;
    }

    public String greet(String name) {
        return "Hello, " + name;
    }

    public static void main(String[] args) {
        SimpleMath math = new SimpleMath();
        int sum = math.add(10, 20);
        System.out.println("Sum: " + sum);

        int[] data = {1, 2, 3, 4, 5};
        double avg = calculateAverage(data);
        System.out.println("Average: " + avg);

        String greeting = math.greet("World");
        System.out.println(greeting);
    }
}
```

Compile it then run: `javap -c -p -v com.example.jvm.bytecode.SimpleMath`

The output for the `add` method looks like:

```
public int add(int, int);
  Code:
      0: iload_1
      1: iload_2
      2: iadd
      3: istore_3
      4: iload_3
      5: ireturn

public static double calculateAverage(int[]);
  Code:
      0: iconst_0
      1: istore_1
      2: iconst_0
      3: istore_2
      4: iload_2
      5: aload_0
      6: arraylength
      7: if_icmpge 23
     10: iload_1
     11: aload_0
     12: iload_2
     13: iaload
     14: iadd
     15: istore_1
     16: iinc 2, 1
     19: goto 4
     23: iload_1
     24: i2d
     25: aload_0
     26: arraylength
     27: i2d
     28: ddiv
     29: dreturn
```

### 4.2 Key Bytecode Instructions


| Category | Instructions | Description |
|---|---|---|
| Load/Store | aload_n, iload_n, astore_n, istore_n | Move between locals and operand stack |
| Arithmetic | iadd, isub, imul, idiv, dadd, dsub, iinc | Operate on stack values |
| Object | new, getfield, putfield, getstatic, putstatic | Create/access objects and fields |
| Arrays | newarray, anewarray, iaload, iastore, aaload, aastore | Create/access arrays |
| Stack | dup, dup2, swap, pop | Rearrange operand stack |
| Control Flow | ifeq, ifne, if_icmpne, goto, tableswitch, lookupswitch | Branching and loops |
| Method Invocation | invokevirtual, invokespecial, invokestatic, invokeinterface, invokedynamic | Call methods |
| Return | ireturn, areturn, dreturn, return | Return values from methods |

### 4.3 Stack Frame Walkthrough


Consider the expression `result = a + b`. The JVM executes:

```
Step 1: iload_1      push local var 1 (a) onto operand stack
Step 2: iload_2      push local var 2 (b) onto operand stack
Step 3: iadd         pop a and b, compute a+b, push result
Step 4: istore_3     pop result into local var 3
```

After `istore_3`, the operand stack is empty:

```
Local Variables: [this, a, b, result]
Operand Stack: []
```

### 4.4 Invokedynamic and Lambda Bytecode


Lambda expressions in Java 8+ use `invokedynamic`, which enables runtime method dispatch that was impossible with older invoke instructions:

```java
package com.example.jvm.bytecode;

import java.util.function.Function;

public class LambdaBytecode {

    public static void main(String[] args) {
        Function&lt;String, String&gt; upper = s -> s.toUpperCase();
        System.out.println(upper.apply("hello"));

        Function&lt;String, Integer&gt; len = String::length;
        System.out.println(len.apply("world"));
    }
}
```

Running `javap -c -p -v LambdaBytecode` reveals `invokedynamic` instructions that defer method resolution to the first invocation, at which point the JVM calls a bootstrap method (BSM) to link the call site.


---

## 5. JIT Compilation

The JIT (Just-In-Time) compiler transforms bytecode into native machine code at runtime. It is the key performance enabler for the JVM.

### 5.1 Interpretation vs Compilation


When a method begins execution, the JVM starts in **interpreted mode** → reading bytecode instruction by instruction. This is slow but has zero startup delay. The JVM monitors which methods are called frequently (hotspot detection) and compiles those methods to native code.

```java
package com.example.jvm.jit;

public class JITDemo {

    public static long computeFactorial(int n) {
        long result = 1;
        for (int i = 2; i &lt;= n; i++) {
            result *= i;
        }
        return result;
    }

    public static void main(String[] args) {
        System.out.println("=== JIT Compilation Demo ===");
        System.out.println("Warm up: calling computeFactorial in a loop...");

        long start = System.nanoTime();
        for (int i = 0; i &lt; 200_000; i++) {
            computeFactorial(20);
        }
        long end = System.nanoTime();
        System.out.println("Warm-up time: " + (end - start) / 1_000_000 + " ms");

        start = System.nanoTime();
        for (int i = 0; i &lt; 200_000; i++) {
            computeFactorial(20);
        }
        end = System.nanoTime();
        System.out.println("After JIT time: " + (end - start) / 1_000_000 + " ms");

        var compileMXBean = java.lang.management.ManagementFactory.getCompilationMXBean();
        System.out.println("JIT compiler: " + compileMXBean.getName());
        System.out.println("Total compilation time: " + compileMXBean.getTotalCompilationTime() + " ms");
    }
}
```

### 5.2 Tiered Compilation


Since JDK 8 (and default since JDK 7u4), the JVM uses **tiered compilation** with five levels:

| Tier | Compiler | Description |
|---|---|---|
| 0 | Interpreter | Full bytecode interpretation |
| 1 | C1 (no profiling) | Simple C1 compilation, no profiling counters |
| 2 | C1 (light profiling) | C1 with limited profiling |
| 3 | C1 (full profiling) | C1 with full profiling for C2 |
| 4 | C2 | Maximum optimization; all profiling data available |

The JVM escalates methods through tiers based on invocation count and loop back-edge count. This balances startup speed (quick C1 compilation) with peak performance (C2 optimization).

### 5.3 Hotspot Detection


The JVM counts method invocations and loop iterations. When a threshold is crossed (default: 10,000 invocations for C1, 15,000 for C2), the method is queued for compilation.

```java
package com.example.jvm.jit;

public class HotspotDetection {

    private static final int ITERATIONS = 50_000;

    public static void main(String[] args) {
        System.out.println("Run with -XX:+PrintCompilation to see hotspot compilation\n");

        for (int i = 0; i &lt; ITERATIONS; i++) {
            hotMethod(i);
        }

        System.out.println("Done. Check -XX:+PrintCompilation output above.");
    }

    private static int hotMethod(int n) {
        int result = 0;
        for (int i = 0; i &lt; 100; i++) {
            if ((n + i) % 2 == 0) {
                result += (n * i) / (1 + (i % 10));
            } else {
                result -= (n - i) / (1 + (i % 5));
            }
        }
        return result;
    }
}
```

### 5.4 Inlining


Inlining replaces a method call with the method's body directly, eliminating call overhead and enabling further optimizations.

```java
package com.example.jvm.jit;

public class InliningDemo {

    public static void main(String[] args) {
        System.out.println("Run with -XX:+PrintInlining to see inlining decisions\n");

        int total = 0;
        for (int i = 0; i &lt; 100_000; i++) {
            total += processValue(i);
        }
        System.out.println("Result: " + total);
    }

    private static int processValue(int value) {
        return transform(value);
    }

    private static int transform(int x) {
        return x * x + 2 * x + 1;
    }
}
```

When run with `-XX:+UnlockDiagnosticVMOptions -XX:+PrintInlining`:

```
InliningDemo::processValue (3 bytes)
  @ 1   InliningDemo::transform (7 bytes)   inline (hot)
```

### 5.5 Escape Analysis


Escape analysis determines whether an object is accessible outside the method that created it. If an object does not escape, the JIT can:
1. **Stack-allocate** the object (no GC overhead)
2. **Scalar-replace** the object (split into individual fields)
3. **Eliminate synchronization** on non-escaping objects

```java
package com.example.jvm.jit;

import java.util.ArrayList;
import java.util.List;

public class EscapeAnalysisDemo {

    static class Point {
        private int x;
        private int y;
        Point(int x, int y) { this.x = x; this.y = y; }
        int distanceSquared() { return x * x + y * y; }
    }

    private static long computeSum(int size) {
        long sum = 0;
        for (int i = 0; i &lt; size; i++) {
            Point p = new Point(i, i + 1);
            sum += p.distanceSquared();
        }
        return sum;
    }

    private static List&lt;Point&gt; collectPoints(int size) {
        List&lt;Point&gt; points = new ArrayList&lt;>();
        for (int i = 0; i &lt; size; i++) {
            points.add(new Point(i, i + 1));
        }
        return points;
    }

    public static void main(String[] args) {
        System.out.println("=== Escape Analysis Demo ===\n");

        long sum = 0;
        for (int i = 0; i &lt; 20_000; i++) sum += computeSum(1000);

        long start = System.nanoTime();
        for (int i = 0; i &lt; 50_000; i++) sum += computeSum(1000);
        long eaEnabled = System.nanoTime() - start;
        System.out.println("Non-escaping allocation: " + eaEnabled / 1_000_000 + " ms");

        start = System.nanoTime();
        for (int i = 0; i &lt; 50_000; i++) sum += collectPoints(1000).size();
        long escaping = System.nanoTime() - start;
        System.out.println("Escaping allocation: " + escaping / 1_000_000 + " ms");

        System.out.println("\nRatio: " + String.format("%.2f", (double) escaping / eaEnabled)
            + "x slower when objects escape");
    }
}
```

### 5.6 On-Stack Replacement (OSR)


OSR replaces interpreted code with compiled code while a method is still executing in a loop. Without OSR, a hot loop inside a method would not benefit from compilation until the method returned.

```java
package com.example.jvm.jit;

public class OnStackReplacement {

    public static void main(String[] args) {
        System.out.println("=== On-Stack Replacement Demo ===\n");
        System.out.println("OSR allows the JVM to replace method bytecode\n"
            + "while the method is still running in a long loop.\n");

        long result = 0;
        long lastTime = System.nanoTime();

        for (int i = 0; i &lt; 500_000_000; i++) {
            result += compute(i);
            if (i > 0 && i % 100_000_000 == 0) {
                long now = System.nanoTime();
                long elapsedMs = (now - lastTime) / 1_000_000;
                System.out.println("  Iteration " + i + " completed in " + elapsedMs + " ms");
                lastTime = now;
            }
        }

        System.out.println("\nFinal result: " + result);
        System.out.println("If you saw iteration times drop, OSR worked correctly.");
    }

    private static int compute(int n) {
        int sum = 0;
        for (int i = 0; i &lt; 50; i++) {
            sum += (n * (i + 1)) / (1 + (n % 10));
            sum ^= (sum >>> 16);
            sum *= 0x45d9f3b;
        }
        return sum;
    }
}
```

### 5.7 C1 vs C2 Compiler


| Aspect | C1 (Client) | C2 (Server) |
|---|---|---|
| Optimization Level | Moderate | Aggressive |
| Compilation Speed | Fast | Slow |
| Code Quality | Good | Excellent |
| Profile Required | Light/None | Full profiling (from C1) |
| Use Case | Startup performance, GUI apps | Long-running server apps |
| Flag | -client (deprecated) | -server (default since JDK 8) |

Since tiered compilation is the default, you rarely choose C1 vs C2 explicitly. The JVM uses both.

### 5.8 Graal JIT Compiler


Graal is a high-performance JIT compiler written in Java. It is available as an experimental replacement for C2 starting in JDK 16+:

```java
package com.example.jvm.jit;

public class GraalJITDemo {

    public static void main(String[] args) {
        System.out.println("=== Graal JIT Compiler ===");
        System.out.println("Enable: -XX:+UnlockExperimentalVMOptions -XX:+UseJVMCICompiler\n");

        String compiler = System.getProperty("java.vm.name");
        String version = System.getProperty("java.version");
        System.out.println("JVM: " + compiler);
        System.out.println("Version: " + version);

        long result = 0;
        long start = System.nanoTime();
        for (int i = 0; i &lt; 100_000; i++) {
            result += heavyComputation(i, 200);
        }
        long end = System.nanoTime();
        System.out.println("\nHeavy computation result: " + result);
        System.out.println("Time: " + (end - start) / 1_000_000 + " ms");
    }

    private static int heavyComputation(int seed, int iterations) {
        int hash = seed;
        for (int i = 0; i &lt; iterations; i++) {
            hash = hash * 31 + i;
            hash ^= (hash &lt;< 13);
            hash ^= (hash >>> 17);
            hash ^= (hash &lt;< 5);
        }
        return hash;
    }
}
```

---

## 6. Memory Areas -- Deep Dive

### 6.1 Heap Layout Visualization


```java
package com.example.jvm.memory;

import java.util.ArrayList;
import java.util.List;

public class HeapLayoutDemo {

    private static final int SIZE = 1024 * 50;
    static class MediumObject {
        private byte[] payload = new byte[SIZE];
        private long id;
        MediumObject(long id) { this.id = id; }
    }

    public static void main(String[] args) throws Exception {
        System.out.println("=== Heap Generation Layout ===\n");

        List&lt;MediumObject&gt; young = new ArrayList&lt;>();
        for (int i = 0; i &lt; 20; i++) young.add(new MediumObject(i));
        printHeap("After Eden allocation");

        List&lt;MediumObject&gt; survivors = new ArrayList&lt;>();
        for (int i = 0; i &lt; 100; i++) {
            survivors.add(new MediumObject(i));
            new MediumObject(i + 1000);
        }
        printHeap("After allocation + discard");

        for (int i = 0; i &lt; 5; i++) { System.gc(); Thread.sleep(200); }
        printHeap("After GC cycles");

        System.out.println("\n--- Pool Details ---");
        for (var pool : java.lang.management.ManagementFactory.getMemoryPoolMXBeans()) {
            String name = pool.getName();
            if (name.contains("Heap") || name.contains("Young")
                || name.contains("Old") || name.contains("Eden")
                || name.contains("Survivor")) {
                var usage = pool.getUsage();
                System.out.printf("  %s: %d MB / %d MB%n", name,
                    usage.getUsed() / 1024 / 1024, usage.getMax() / 1024 / 1024);
            }
        }
    }

    private static void printHeap(String label) {
        Runtime rt = Runtime.getRuntime();
        long used = rt.totalMemory() - rt.freeMemory();
        System.out.println(label + ": " + used / 1024 / 1024 + " MB");
    }
}
```

### 6.2 Object Header and Memory Layout


Every Java object has a header containing the mark word (for GC, locks, identity hash) and the klass pointer (class reference).

```java
package com.example.jvm.memory;

import java.lang.reflect.Field;

public class ObjectMemoryLayout {

    private static final sun.misc.Unsafe UNSAFE;
    static {
        try {
            Field f = sun.misc.Unsafe.class.getDeclaredField("theUnsafe");
            f.setAccessible(true);
            UNSAFE = (sun.misc.Unsafe) f.get(null);
        } catch (Exception e) { throw new RuntimeException(e); }
    }

    static class Padded {
        byte a; long b; int c;
    }

    static class Compact {
        long b; int c; byte a;
    }

    public static void main(String[] args) {
        System.out.println("=== Object Memory Layout ===\n");
        System.out.println("--- Padded ---");
        System.out.println("  byte a offset: " + getOffset(Padded.class, "a"));
        System.out.println("  long b offset: " + getOffset(Padded.class, "b"));
        System.out.println("  int  c offset: " + getOffset(Padded.class, "c"));

        System.out.println("\n--- Compact ---");
        System.out.println("  long b offset: " + getOffset(Compact.class, "b"));
        System.out.println("  int  c offset: " + getOffset(Compact.class, "c"));
        System.out.println("  byte a offset: " + getOffset(Compact.class, "a"));

        System.out.println("\n--- Key Insight ---");
        System.out.println("Declare fields largest first to minimize padding:");
        System.out.println("  double/long > int/float > short/char > byte/boolean");
    }

    private static long getOffset(Class&lt;?> clazz, String fieldName) {
        try {
            Field f = clazz.getDeclaredField(fieldName);
            return UNSAFE.objectFieldOffset(f);
        } catch (NoSuchFieldException e) { throw new RuntimeException(e); }
    }
}
```

### 6.3 Metaspace


Metaspace (JDK 8+) replaces PermGen and stores class metadata. Unlike PermGen, Metaspace uses native memory and grows by default.

```java
package com.example.jvm.memory;

public class MetaspaceDemo {

    public static void main(String[] args) {
        System.out.println("=== Metaspace Demo ===\n");
        System.out.println("Metaspace stores class metadata in native memory.\n");

        System.out.println("--- Metaspace Usage ---");
        for (var pool : java.lang.management.ManagementFactory.getMemoryPoolMXBeans()) {
            String name = pool.getName();
            if (name.contains("Metaspace") || name.contains("Compressed Class Space")) {
                var usage = pool.getUsage();
                System.out.printf("  %s: %d KB / %d KB%n", name,
                    usage.getUsed() / 1024, usage.getMax() / 1024);
            }
        }

        System.out.println("\n--- Configuration ---");
        System.out.println("-XX:MetaspaceSize=21m");
        System.out.println("-XX:MaxMetaspaceSize=256m");
        System.out.println("-XX:MinMetaspaceFreeRatio=40");
        System.out.println("-XX:MaxMetaspaceFreeRatio=70\n");

        System.out.println("WARNING: Class loader leaks keep metaspace allocated.");
        System.out.println("Set MaxMetaspaceSize as a safety bound.");
    }
}
```

### 6.4 Thread Stack Layout


Each thread's stack contains frames, each frame holding local variables and an operand stack.

```java
package com.example.jvm.memory;

public class StackLayoutDemo {

    public static void main(String[] args) {
        System.out.println("=== Thread Stack Layout ===\n");
        System.out.println("Each frame contains:");
        System.out.println("  1. Local Variable Array (parameters + locals)");
        System.out.println("  2. Operand Stack (intermediate values)");
        System.out.println("  3. Frame Data (constant pool ref, exception table)\n");

        int a = 10;
        String b = "hello";
        double c = 3.14;
        long d = 100L;
        boolean e = true;

        System.out.println("--- Local Variable Slots in main() ---");
        System.out.println("  slot 0: args (String[])");
        System.out.println("  slot 1: a (int) = " + a);
        System.out.println("  slot 2: b (String ref) = " + b);
        System.out.println("  slot 3-4: c (double) = " + c);
        System.out.println("  slot 5-6: d (long) = " + d);
        System.out.println("  slot 7: e (boolean) = " + e);

        firstMethod();
        System.out.println("\nDefault stack size: ~1 MB per thread");
        System.out.println("Configure: -Xss256k");
    }

    private static void firstMethod() {
        int x = 100;
        System.out.println("firstMethod frame: x = " + x);
        secondMethod(x);
    }

    private static void secondMethod(int input) {
        int y = input * 2;
        String label = "second";
        System.out.println("secondMethod frame: y = " + y + ", label = " + label);
        thirdMethod(y);
    }

    private static void thirdMethod(int value) {
        long result = (long) value * value;
        System.out.println("thirdMethod frame: result = " + result);
        System.out.println("Returning, frames pop in LIFO order");
    }
}
```


---

## 7. Garbage Collection

### 7.1 The Generational Hypothesis


The generational hypothesis states that most objects die young. Empirical observation shows that ~95% of objects live for a very short time. JVM garbage collectors exploit this by dividing the heap into generations.

### 7.2 Basic GC Algorithms


**Mark-Sweep**: Identify live objects (mark), delete dead objects (sweep). Leaves memory fragmentation.

**Mark-Compact**: Mark live objects, then compact them into a contiguous block. Eliminates fragmentation but is costlier.

**Copying**: Divide space into two halves. Copy live objects from one side to the other. Used in Young Generation.

```java
package com.example.jvm.gc;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class GCAlgorithmsDemo {

    static class GCObject {
        private final byte[] payload;
        GCObject(long id, int size) { this.payload = new byte[size]; }
    }

    public static void main(String[] args) {
        System.out.println("=== GC Algorithms Visualization ===\n");

        System.out.println("--- Mark-Sweep ---");
        System.out.println("1. Mark: trace reachable objects from roots");
        System.out.println("2. Sweep: reclaim memory from unmarked objects");
        System.out.println("Result: free list of variable-size blocks");
        System.out.println("Problem: fragmentation over time\n");

        System.out.println("--- Copying Collection ---");
        System.out.println("Used in Young Generation (Eden + Survivor spaces)");
        System.out.println("1. Copy live objects from Eden + From-space to To-space");
        System.out.println("2. Compact by nature (contiguous copy)");
        System.out.println("3. Swap From/To labels\n");

        System.out.println("--- Mark-Compact ---");
        System.out.println("Used in Old Generation (with Serial/Old GC)");
        System.out.println("1. Mark all live objects");
        System.out.println("2. Compute new addresses (compact)");
        System.out.println("3. Update all references\n");

        List&lt;GCObject&gt; roots = new ArrayList&lt;>();
        Random rng = new Random(42);

        for (int cycle = 0; cycle &lt; 5; cycle++) {
            int count = 100_000 / (cycle + 1);
            for (int i = 0; i &lt; count; i++) {
                roots.add(new GCObject(i, 100 + rng.nextInt(900)));
            }
            for (int i = 0; i &lt; roots.size() / 2; i++) {
                roots.set(rng.nextInt(roots.size()), null);
            }
            roots.removeIf(java.util.Objects::isNull);
            System.out.println("Cycle " + cycle + ": " + roots.size() + " survivors");
        }
        System.out.println("\nMost objects died young (generational hypothesis).");
    }
}
```

### 7.3 Identifying Liveness (GC Roots)


The JVM uses **GC roots** as starting points for liveness analysis:

- Stack frames (local variables and parameters)
- Static fields
- JNI references
- Active threads

```java
package com.example.jvm.gc;

import java.lang.ref.WeakReference;

public class GCRootsDemo {

    private static GCRootsDemo staticRoot = new GCRootsDemo("static");
    private final String label;
    private GCRootsDemo child;
    GCRootsDemo(String label) { this.label = label; }
    void setChild(GCRootsDemo child) { this.child = child; }

    public static void main(String[] args) {
        System.out.println("=== GC Roots Analysis ===\n");

        GCRootsDemo localRoot = new GCRootsDemo("local");
        GCRootsDemo reachable = new GCRootsDemo("reachable");
        localRoot.setChild(reachable);
        new GCRootsDemo("unreachable");

        GCRootsDemo strongRef = new GCRootsDemo("weak-target");
        WeakReference&lt;GCRootsDemo&gt; weakRef = new WeakReference&lt;>(strongRef);
        System.out.println("Weak ref before nulling strong: " + weakRef.get().label);
        strongRef = null;

        System.gc();
        System.out.println("Weak ref after GC: " + weakRef.get());

        System.out.println("\nReachability States:");
        System.out.println("1. Strongly reachable: directly from root");
        System.out.println("2. Softly reachable: only via SoftReference");
        System.out.println("3. Weakly reachable: only via WeakReference");
        System.out.println("4. Phantom reachable: only via PhantomReference");
        System.out.println("5. Unreachable: no references at all\n");

        System.out.println("Active threads are always GC roots.");
        System.out.println("That is why ThreadLocal can cause memory leaks.");
    }
}
```

---

## 8. GC Implementations

### 8.1 Serial GC


The simplest collector: single-threaded, stop-the-world for both minor and major collections. Best for single-threaded applications, small heaps (< ~100 MB), and client-side apps.

```java
package com.example.jvm.gc;

import java.util.ArrayList;
import java.util.List;

public class SerialGCDemo {

    static class Allocation { byte[] data = new byte[1024 * 10]; }

    public static void main(String[] args) {
        System.out.println("=== Serial GC ===\n");
        System.out.println("Run: -XX:+UseSerialGC\n");
        System.out.println("Use cases:");
        System.out.println("  - Single-processor machines");
        System.out.println("  - Heap &lt; ~100 MB");
        System.out.println("  - Client-side apps\n");
        System.out.println("Characteristics:");
        System.out.println("  - Stop-the-world (all threads paused)");
        System.out.println("  - Minor GC: copying collector for Young Gen");
        System.out.println("  - Major GC: mark-compact for Old Gen");
        System.out.println("  - Single GC thread\n");

        List&lt;Allocation&gt; list = new ArrayList&lt;>();
        for (int i = 0; i &lt; 500; i++) list.add(new Allocation());
        for (int i = 0; i &lt; 200; i++) list.set(i, null);
        System.gc();
        System.out.println("GC events visible in -XX:+PrintGCDetails output.");
    }
}
```

### 8.2 Parallel GC (Throughput Collector)


Default in JDK 8. Uses multiple threads for both minor and major collections. Optimizes for throughput.

```java
package com.example.jvm.gc;

import java.util.concurrent.CountDownLatch;
import java.util.concurrent.atomic.LongAdder;

public class ParallelGCDemo {

    static class Task implements Runnable {
        private final LongAdder counter;
        private final CountDownLatch latch;
        Task(LongAdder c, CountDownLatch l) { counter = c; latch = l; }
        @Override
        public void run() {
            double[] data = new double[100_000];
            for (int i = 0; i &lt; data.length; i++) {
                data[i] = Math.sin(i) * Math.cos(i) * Math.tan(i);
                counter.increment();
            }
            latch.countDown();
        }
    }

    public static void main(String[] args) throws InterruptedException {
        System.out.println("=== Parallel (Throughput) GC ===\n");
        System.out.println("Run: -XX:+UseParallelGC\n");
        System.out.println("Use cases:");
        System.out.println("  - Batch processing");
        System.out.println("  - Science/engineering computations");
        System.out.println("  - Medium-to-large heaps (4-8 GB)\n");

        int numThreads = Runtime.getRuntime().availableProcessors();
        LongAdder totalOps = new LongAdder();
        CountDownLatch latch = new CountDownLatch(numThreads);

        long start = System.nanoTime();
        for (int i = 0; i &lt; numThreads; i++) new Thread(new Task(totalOps, latch)).start();
        latch.await();
        long end = System.nanoTime();
        System.out.println("Completed " + totalOps.sum() + " operations in "
            + (end - start) / 1_000_000 + " ms\n");

        System.out.println("Flags:");
        System.out.println("-XX:ParallelGCThreads=N");
        System.out.println("-XX:MaxGCPauseMillis=&lt;N>");
        System.out.println("-XX:GCTimeRatio=&lt;N>");
        System.out.println("-XX:+UseAdaptiveSizePolicy (ergonomics)");
    }
}
```

### 8.3 G1 GC


G1 (Garbage-First) is the default collector since JDK 9. It divides the heap into ~2048 fixed-size regions and collects the regions with the most garbage first.

```java
package com.example.jvm.gc;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

public class G1GCDemo {

    static class RegionObject {
        private final byte[] payload;
        RegionObject(int size) { this.payload = new byte[size]; }
    }

    static class Application {
        private final Map&lt;String, RegionObject&gt; cache = new ConcurrentHashMap&lt;>();
        private final Random rng = new Random(42);
        private long opCount = 0;

        void runIteration() {
            opCount++;
            for (int i = 0; i &lt; 100; i++) new RegionObject(100 + rng.nextInt(900));
            if (opCount % 10 == 0) cache.put(UUID.randomUUID().toString(), new RegionObject(1024));
            if (opCount % 100 == 0) {
                cache.put("p-" + (opCount / 100), new RegionObject(4096));
                if (cache.size() > 100) cache.remove(cache.keySet().iterator().next());
            }
        }
    }

    public static void main(String[] args) {
        System.out.println("=== G1 Garbage-First GC ===\n");
        System.out.println("Run: -XX:+UseG1GC\n");

        Application app = new Application();
        for (int i = 0; i &lt; 2000; i++) app.runIteration();
        System.out.println("Completed " + app.opCount + " operations\n");

        System.out.println("G1 Key Concepts:");
        System.out.println("1. Region-based (~2048 regions, 1-32 MB each)");
        System.out.println("2. Young/Old generation boundaries are dynamic");
        System.out.println("3. Collects regions with most garbage first");
        System.out.println("4. Concurrent marking phase (SATB)");
        System.out.println("5. Remembered Sets (RSets) track cross-region refs");
        System.out.println("6. Mixed Collections: young + old regions with most garbage");
        System.out.println("7. Humongous objects (>50% region) in dedicated regions\n");

        System.out.println("Flags:");
        System.out.println("-XX:MaxGCPauseMillis=200");
        System.out.println("-XX:G1HeapRegionSize=4m");
        System.out.println("-XX:InitiatingHeapOccupancyPercent=45");
        System.out.println("-XX:G1NewSizePercent=5");
        System.out.println("-XX:G1MaxNewSizePercent=60");
    }
}
```

### 8.4 ZGC


ZGC (JDK 15+, Production) is a low-latency collector designed for huge heaps (multi-terabyte) with sub-millisecond pause times.

```java
package com.example.jvm.gc;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class ZGCDemo {

    static class ZGCObject {
        private final byte[] payload;
        ZGCObject(int size) { this.payload = new byte[size]; }
    }

    public static void main(String[] args) {
        System.out.println("=== Z Garbage Collector ===\n");
        System.out.println("Enable: -XX:+UseZGC (JDK 15+)\n");

        System.out.println("ZGC Design Goals:");
        System.out.println("  - < 1 ms pause times");
        System.out.println("  - Handle multi-TB heaps");
        System.out.println("  - Pause time independent of heap size\n");

        System.out.println("ZGC Key Techniques:");
        System.out.println("1. Colored Pointers");
        System.out.println("   Uses unused bits in 64-bit pointers for state");
        System.out.println("   (Finalizable, Remapped, Marked0, Marked1)\n");
        System.out.println("2. Load Barriers");
        System.out.println("   Small code injected at object reference reads");
        System.out.println("   Check and update pointer color bits\n");
        System.out.println("3. Concurrent Relocation");
        System.out.println("   Moves objects while application runs\n");

        List&lt;ZGCObject&gt; roots = new ArrayList&lt;>();
        for (int i = 0; i &lt; 5000; i++) roots.add(new ZGCObject(1024 * 100));
        for (int i = 0; i &lt; 2500; i++) roots.set(i, null);
        roots.removeIf(Objects::isNull);
        System.out.println("Survivors: " + roots.size() + "\n");

        System.out.println("Flags:");
        System.out.println("-XX:+UseZGC");
        System.out.println("-XX:ConcGCThreads=N");
        System.out.println("-XX:SoftMaxHeapSize=&lt;size&gt;");
        System.out.println("-XX:ZAllocationSpikeTolerance=2.0\n");

        System.out.println("Limitations:");
        System.out.println("  - Heap &lt; 16 TB (64-bit pointer bit limitation)");
        System.out.println("  - No compressed OOPs (always 64-bit)");
        System.out.println("  - Not for heaps &lt; 512 MB");
        System.out.println("  - Higher CPU overhead");
    }
}
```

### 8.5 Shenandoah GC


Shenandoah (JDK 12+, OpenJDK; Oracle JDK 21+) is another low-pause collector using Brooks pointers.

```java
package com.example.jvm.gc;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class ShenandoahGCDemo {

    static class Payload {
        private final long[] data;
        Payload(int size) { this.data = new long[size]; }
    }

    public static void main(String[] args) {
        System.out.println("=== Shenandoah GC ===\n");
        System.out.println("Run: -XX:+UseShenandoahGC (OpenJDK 12+)\n");

        System.out.println("Key technique: Brooks Pointer");
        System.out.println("  Each object has a forward pointer field");
        System.out.println("  Updated atomically during relocation\n");

        System.out.println("Shenandoah GC Phases:");
        System.out.println("  1. Init Mark (STW, short)");
        System.out.println("  2. Concurrent Mark");
        System.out.println("  3. Final Mark (STW, short)");
        System.out.println("  4. Concurrent Cleanup");
        System.out.println("  5. Concurrent Evacuation");
        System.out.println("  6. Init Update Refs (STW)");
        System.out.println("  7. Concurrent Update Refs");
        System.out.println("  8. Final Update Refs (STW)\n");

        List&lt;Payload&gt; roots = new ArrayList&lt;>();
        Random rng = new Random(42);
        for (int cycle = 0; cycle &lt; 10; cycle++) {
            for (int i = 0; i &lt; 2000; i++) roots.add(new Payload(100 + rng.nextInt(500)));
            for (int i = 0; i &lt; 1000; i++) roots.set(rng.nextInt(roots.size()), null);
            roots.removeIf(java.util.Objects::isNull);
            System.out.println("Cycle " + cycle + ": " + roots.size() + " survivors");
        }

        System.out.println("\nFlags:");
        System.out.println("-XX:+UseShenandoahGC");
        System.out.println("-XX:ShenandoahGCHeuristics=adaptive");
        System.out.println("-XX:ShenandoahUncommitDelay=1000\n");

        System.out.println("Note: Shenandoah may not be available in all JDK distributions.");
        System.out.println("Oracle JDK requires JDK 21+; OpenJDK has it since JDK 12.");
    }
}
```

### 8.6 GC Comparison Summary


| Collector | Throughput | Pause Time | Heap Size | Concurrency |
|---|---|---|---|---|
| Serial | Low | High | < 100 MB | None |
| Parallel | High | Medium | < 8 GB | None |
| G1 | High | Low-Medium | 1-64 GB | Partial |
| ZGC | Medium | < 1 ms | 512 MB - 16 TB | Nearly all |
| Shenandoah | Medium | < 10 ms | 512 MB - 16 TB | Nearly all |

---

## 9. GC Tuning

### 9.1 Essential Flags


```java
package com.example.jvm.gc;

public class GCTuningFlags {

    public static void main(String[] args) {
        System.out.println("=== GC Tuning Flags ===\n");

        System.out.println("--- Heap Sizing ---");
        System.out.println("-Xms&lt;size&gt;          Initial heap (e.g., -Xms512m)");
        System.out.println("-Xmx&lt;size&gt;          Maximum heap (e.g., -Xmx4g)");
        System.out.println("-Xmn&lt;size&gt;          Young generation size");
        System.out.println("-XX:NewRatio=N      Young:Old ratio (default 2)");
        System.out.println("-XX:SurvivorRatio=N Eden:S0:S1 (default 8)\n");

        System.out.println("--- GC Selection ---");
        System.out.println("-XX:+UseSerialGC");
        System.out.println("-XX:+UseParallelGC (default JDK 8)");
        System.out.println("-XX:+UseG1GC (default JDK 9+)");
        System.out.println("-XX:+UseZGC");
        System.out.println("-XX:+UseShenandoahGC\n");

        System.out.println("--- GC Logging ---");
        System.out.println("-XX:+PrintGCDetails");
        System.out.println("-XX:+PrintGCDateStamps");
        System.out.println("-Xloggc:gc.log");
        System.out.println("JDK 9+: -Xlog:gc*:file=gc.log\n");

        System.out.println("--- G1 Specific ---");
        System.out.println("-XX:MaxGCPauseMillis=200");
        System.out.println("-XX:G1HeapRegionSize=4m");
        System.out.println("-XX:InitiatingHeapOccupancyPercent=45\n");

        System.out.println("--- ZGC Specific ---");
        System.out.println("-XX:ConcGCThreads=N");
        System.out.println("-XX:SoftMaxHeapSize=&lt;size&gt;\n");

        System.out.println("--- Diagnostics ---");
        System.out.println("-XX:+UnlockDiagnosticVMOptions");
        System.out.println("-XX:+PrintInlining");
        System.out.println("-XX:+PrintCompilation");
        System.out.println("-XX:+UnlockExperimentalVMOptions");
    }
}
```

### 9.2 GC Logging and Analysis


```java
package com.example.jvm.gc;

import java.util.ArrayList;
import java.util.List;

public class GCLoggingDemo {

    static class Alloc { private final byte[] data = new byte[1024 * 100]; }

    public static void main(String[] args) throws InterruptedException {
        System.out.println("=== GC Logging Demo ===\n");
        System.out.println("Run: -Xlog:gc*:file=gc.log\n");

        List&lt;Alloc&gt; roots = new ArrayList&lt;>();
        for (int cycle = 0; cycle &lt; 10; cycle++) {
            for (int i = 0; i &lt; 20; i++) roots.add(new Alloc());
            for (int i = 0; i &lt; 7 && !roots.isEmpty(); i++) roots.remove(roots.size() - 1);
            Thread.sleep(50);
        }

        System.out.println("Key metrics from GC logs:");
        System.out.println("  1. Pause duration (ms)");
        System.out.println("  2. Heap size before/after");
        System.out.println("  3. Young/Old generation sizes");
        System.out.println("  4. GC cause (Allocation Failure, System.gc(), etc.)\n");

        System.out.println("Sample log entry:");
        System.out.println("[2026-01-15T14:30:00.123][gc,info] GC(3) "
            + "Pause Young (Normal) 64M->12M(256M) 15.421ms\n");

        System.out.println("Analysis tools: GCeasy, GCViewer, Censum");
    }
}
```

### 9.3 Choosing the Right GC


```java
package com.example.jvm.gc;

public class GCSelection {

    public static void main(String[] args) {
        System.out.println("=== How to Choose a GC ===\n");

        System.out.println("Step 1: Define Requirements");
        System.out.println("  - Throughput target (ops/sec)");
        System.out.println("  - Pause time target (P99 &lt; 10 ms)");
        System.out.println("  - Heap budget (max memory)");
        System.out.println("  - Allocation rate (MB/sec)\n");

        System.out.println("Small Heap (< 1 GB), Single-threaded:");
        System.out.println("  -> Serial GC (-XX:+UseSerialGC)\n");

        System.out.println("Medium Heap (1-4 GB), Batch/Compute:");
        System.out.println("  -> Parallel GC (-XX:+UseParallelGC)\n");

        System.out.println("Large Heap (4-64 GB), General Server:");
        System.out.println("  -> G1 GC (default, -XX:+UseG1GC)\n");

        System.out.println("Very Large Heap (64 GB+), Low Latency:");
        System.out.println("  -> ZGC (-XX:+UseZGC)\n");

        System.out.println("Sub-10ms Pauses, Medium-Large Heap:");
        System.out.println("  -> Shenandoah (-XX:+UseShenandoahGC) or ZGC\n");

        for (var bean : java.lang.management.ManagementFactory.getGarbageCollectorMXBeans()) {
            System.out.println("Current: " + bean.getName()
                + " (" + bean.getCollectionCount() + " collections, "
                + bean.getCollectionTime() + " ms)");
        }
    }
}
```


---

## 10. Memory Leaks in Java

Java's garbage collection does not eliminate all memory leaks. A leak occurs when objects are no longer needed but remain reachable.

### 10.1 Classloader Leak


The most dangerous leak: holding references to classes prevents their ClassLoader from being GC'd.

```java
package com.example.jvm.leaks;

import java.net.URL;
import java.net.URLClassLoader;
import java.util.ArrayList;
import java.util.List;

public class ClassLoaderLeak {

    static class LeakedClass {}
    private static final List&lt;Class<?&gt;> LEAKED = new ArrayList&lt;>();

    public static void main(String[] args) throws Exception {
        System.out.println("=== ClassLoader Leak ===\n");
        System.out.println("Scenario: redeploying web apps in containers\n");
        System.out.println("Root cause: external reference to class object\n");

        for (int i = 0; i &lt; 10; i++) {
            URLClassLoader loader = new URLClassLoader(new URL[0],
                ClassLoader.getSystemClassLoader());
            Class&lt;?> clazz = loader.loadClass(
                "com.example.jvm.leaks.ClassLoaderLeak$LeakedClass");
            LEAKED.add(clazz);
            loader.close();
            System.out.println("Loaded " + clazz.getName()
                + " from loader #" + i);
        }
        System.out.println("\nPrevention:");
        System.out.println("  - Never store class objects in static collections");
        System.out.println("  - Use weak references for class metadata");
        System.out.println("  - Monitor -XX:+TraceClassLoading");
        System.out.println("  - Watch metaspace growth in monitoring tools\n");
        System.out.println("Real-world: PermGen/Metaspace leaks in Tomcat redeploys.");
    }
}
```

### 10.2 ThreadLocal Leak


ThreadLocal values are tied to thread lifecycle. In thread-pool environments, thread reuse keeps stale values alive.

```java
package com.example.jvm.leaks;

import java.util.concurrent.CountDownLatch;
import java.util.concurrent.Executors;
import java.util.concurrent.ThreadPoolExecutor;

public class ThreadLocalLeak {

    private static final ThreadLocal&lt;byte[]&gt; TL = ThreadLocal.withInitial(
        () -> new byte[1024 * 1024]); // 1 MB per thread

    public static void main(String[] args) throws InterruptedException {
        System.out.println("=== ThreadLocal Memory Leak ===\n");

        var pool = (ThreadPoolExecutor) Executors.newFixedThreadPool(10);
        int taskCount = 100;
        var latch = new CountDownLatch(taskCount);

        for (int i = 0; i &lt; taskCount; i++) {
            int taskId = i;
            pool.submit(() -> {
                TL.set(new byte[1024 * 1024]);
                byte[] data = TL.get();
                System.out.println("Task " + taskId
                    + " allocated " + data.length + " bytes");
                TL.remove(); // crucial!
                latch.countDown();
            });
        }
        latch.await();
        pool.shutdown();
        System.out.println("\nIf TL.remove() is NOT called: ");
        System.out.println("  ThreadLocal.Entry &lt;value&gt; references remain");
        System.out.println("  Thread lives in pool → 1 MB leak per thread");
        System.out.println("  Week-end: total leak = poolSize * 1 MB\n");
        System.out.println("Root cause: ThreadLocalMap Entry extends WeakReference");
        System.out.println("  Key is weak (WeakReference&lt;ThreadLocal&gt;), value is strong");
        System.out.println("  If TL itself is GC'd, leaked values live until thread reuse\n");
        System.out.println("Prevention:");
        System.out.println("  - Always call tl.remove() in finally block");
        System.out.println("  - Use try-with-resources pattern");
    }
}
```

### 10.3 Static Collection Leak


Accumulating objects in static collections is the simplest and most common leak pattern.

```java
package com.example.jvm.leaks;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class StaticCollectionLeak {

    private static final List&lt;String&gt; CACHE = new ArrayList&lt;>();
    private static final List&lt;String&gt; EVENT_LOG = new ArrayList&lt;>();

    static class EventProcessor {
        void process(String event) {
            EVENT_LOG.add(event); // unbounded growth
        }
    }

    public static void main(String[] args) {
        System.out.println("=== Static Collection Leak ===\n");
        System.out.println("Monitoring: jconsole / jvisualvm heap growth\n");

        for (int i = 0; i &lt; 10_000; i++) {
            CACHE.add(UUID.randomUUID().toString());
        }
        System.out.println("CACHE size: " + CACHE.size() + " (retained forever)\n");

        var processor = new EventProcessor();
        for (int i = 0; i &lt; 50_000; i++) {
            processor.process("event-" + i);
        }
        System.out.println("EVENT_LOG size: " + EVENT_LOG.size() + "\n");

        System.out.println("Patterns to avoid:");
        System.out.println("  1. Unbounded static collections");
        System.out.println("  2. Growing caches without eviction policy");
        System.out.println("  3. In-memory event logs for debugging\n");
        System.out.println("Solutions:");
        System.out.println("  - WeakHashMap or CacheBuilder");
        System.out.println("  - Bounded queues (ArrayBlockingQueue)");
        System.out.println("  - LRU caches (Caffeine, Guava)");
        System.out.println("  - Fixed-size ring buffers");
    }
}
```

### 10.4 String.intern() Leak (Pre-JDK 8u25)


Interned strings lived permanently in PermGen (pre-JDK 8) or the String Table.

```java
package com.example.jvm.leaks;

public class StringInternLeak {

    public static void main(String[] args) {
        System.out.println("=== String.intern() Leak (pre-JDK 8u25) ===\n");
        System.out.println("Before JDK 8u25, interned strings lived in PermGen.\n");

        String heap = new String("heap");
        String interned = heap.intern();

        if (heap == interned) {
            System.out.println("heap == interned (same object)");
        } else {
            System.out.println("heap != interned; interned is in the String Pool");
        }

        System.out.println("\nDemonstration:");
        int count = 100_000;
        String[] base = new String[count];
        for (int i = 0; i &lt; base.length; i++) {
            base[i] = new String("value-" + i).intern();
        }
        System.out.println("Interned " + count + " strings\n");

        System.out.println("String Pool implementation:");
        System.out.println("  - Hash table (fixed size, default 60013 buckets)");
        System.out.println("  - No eviction: entries live forever");
        System.out.println("  - Pre-JDK 8: PermGen (permanent leak)");
        System.out.println("  - JDK 8+: heap (still leak unless reclaimed)\n");
        System.out.println("Leak symptom: OutOfMemoryError: PermGen space\n");
        System.out.println("Prevention:");
        System.out.println("  - Avoid String.intern() for dynamic data");
        System.out.println("  - -XX:StringTableSize=N (increase bucket count)");
        System.out.println("  - Use HashSet&lt;String&gt; with explicit eviction");
    }
}
```

### 10.5 Listener and Callback Leaks


Forgotten listener registrations hold strong references to subscribers.

```java
package com.example.jvm.leaks;

import java.lang.ref.WeakReference;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

public class ListenerLeak {

    interface Listener { void onEvent(String e); }

    static class EventBus {
        private final List&lt;Listener&gt; strong = new CopyOnWriteArrayList&lt;>();
        private final List&lt;WeakReference<Listener&gt;> weak = new CopyOnWriteArrayList&lt;>();

        void registerStrong(Listener l) { strong.add(l); }
        void registerWeak(Listener l) { weak.add(new WeakReference&lt;>(l)); }
        void fire(String event) {
            for (Listener l : strong) l.onEvent(event);
            weak.removeIf(w -> w.get() == null);
            for (var w : weak) { Listener l = w.get(); if (l != null) l.onEvent(event); }
        }
    }

    public static void main(String[] args) {
        System.out.println("=== Listener Leak ===\n");

        EventBus bus = new EventBus();
        registerListeners(bus);

        System.gc();
        System.out.println("After GC, weak listeners are cleaned.");
        System.out.println("Strong listeners remain even if no other ref exists.\n");

        System.out.println("Prevention:");
        System.out.println("  1. Use WeakReference for listener lists");
        System.out.println("  2. Always unregister in cleanup() methods");
        System.out.println("  3. Use AutoCloseable pattern");
        System.out.println("  4. Consider WeakHashMap&lt;Listener, Boolean&gt;\n");
        System.out.println("Real-world: Android Activity leaks from anonymous listener classes");
    }

    static void registerListeners(EventBus bus) {
        for (int i = 0; i &lt; 5; i++) {
            int id = i;
            bus.registerStrong(e -> System.out.println("Strong listener " + id));
            bus.registerWeak(e -> System.out.println("Weak listener " + id));
        }
    }
}
```

### 10.6 Detecting Memory Leaks


```java
package com.example.jvm.leaks;

import javax.management.*;
import java.lang.management.*;

public class LeakDetector {

    public static void main(String[] args) throws Exception {
        System.out.println("=== Memory Leak Detection ===\n");

        var memMX = ManagementFactory.getMemoryMXBean();
        var heap = memMX.getHeapMemoryUsage();
        var nonHeap = memMX.getNonHeapMemoryUsage();

        System.out.println("Heap:");
        System.out.println("  Used:      " + heap.getUsed() / 1024 / 1024 + " MB");
        System.out.println("  Committed: " + heap.getCommitted() / 1024 / 1024 + " MB");
        System.out.println("  Max:       " + heap.getMax() / 1024 / 1024 + " MB");
        System.out.println("  Init:      " + heap.getInit() / 1024 / 1024 + " MB\n");

        System.out.println("Non-Heap (Metaspace+CodeCache+etc):");
        System.out.println("  Used:      " + nonHeap.getUsed() / 1024 / 1024 + " MB\n");

        System.out.println("Tools:");
        System.out.println("  1. jmap -histo:live &lt;pid&gt;     (heap histo)");
        System.out.println("  2. jmap -dump:live &lt;pid&gt;      (heap dump)");
        System.out.println("  3. jstat -gcutil &lt;pid&gt; 5s     (GC stats)");
        System.out.println("  4. jconsole / visualvm       (GUI)");
        System.out.println("  5. Eclipse MAT / JProfiler    (dump analysis)\n");

        System.out.println("Warning signs:");
        System.out.println("  - Increasing heap after Full GC");
        System.out.println("  - Class histogram never shrinks");
        System.out.println("  - Metaspace keeps growing");
        System.out.println("  - GC count increasing with same allocation rate");
    }
}
```

---

## 11. StackOverflowError

Stack overflows occur when a thread's call stack exceeds its allocated size.

```java
package com.example.jvm;

public class StackOverflowDemo {

    private long depth = 0;

    public void recurse() {
        depth++;
        int localA = 10;
        int localB = 20;
        int localC = localA + localB;
        recurse();
    }

    public void tailRecurse(int n, int acc) {
        if (n == 0) System.out.println("Result: " + acc);
        else tailRecurse(n - 1, acc + n);
    }

    public void deepRecursion() {
        try {
            recurse();
        } catch (StackOverflowError e) {
            System.out.println("Stack overflow at depth: " + depth);
        }
    }

    public static void infiniteLoop() {
        // No recursion, but an infinite loop that allocates stack frame locals
        for (int i = 0; ; i++) {
            long[] data = new long[1000];
        }
    }

    public static void main(String[] args) {
        System.out.println("=== StackOverflowError ===\n");

        StackOverflowDemo demo = new StackOverflowDemo();
        demo.deepRecursion();

        System.out.println("\nControlling stack size: -Xss&lt;size&gt;");
        System.out.println("Default: ~1 MB (platform-dependent)\n");

        System.out.println("Common causes:");
        System.out.println("  1. Infinite recursion (no base case)");
        System.out.println("  2. Deep recursion (many frames)");
        System.out.println("  3. Large local variables per frame");
        System.out.println("  4. Mutual recursion (A calls B calls A)");

        int stackKB = (int) (1024 * 1024);
        System.out.println("\nExample stack analysis:");
        System.out.println("  -Xss256k → ~800 frames ~32 bytes each");
        System.out.println("  -Xss2m   → ~6500 frames");
        System.out.println("  Each local variable: 4 or 8 bytes");
        System.out.println("  Each frame overhead: ~24 bytes\n");

        System.out.println("Prevention:");
        System.out.println("  - Increase -Xss (last resort)");
        System.out.println("  - Reduce local variable count");
        System.out.println("  - Convert recursion to iteration");
        System.out.println("  - Use tail recursion optimization");
        System.out.println("    (Note: Java does NOT perform tail-call optimization)");
    }
}
```

---

## 12. String Pool

The String Pool is a specialized hash table in the heap that caches string literals and interned strings.

```java
package com.example.jvm;

public class StringPoolDemo {

    public static void main(String[] args) {
        System.out.println("=== String Pool ===\n");

        // Literals go to pool
        String a = "hello";
        String b = "hello";
        System.out.println("Literal comparison: " + (a == b)); // true

        // new String() creates heap object, not in pool
        String c = new String("hello");
        System.out.println("new String() vs literal: " + (a == c)); // false

        // intern() returns pool reference
        String d = c.intern();
        System.out.println("intern() vs literal: " + (a == d)); // true

        // Concatenation of literals is compile-time constant
        String e = "hel" + "lo";
        System.out.println("Compile-time concat: " + (a == e)); // true

        // Concatenation with variable is NOT compile-time
        String suffix = "lo";
        String f = "hel" + suffix;
        System.out.println("Runtime concat: " + (a == f)); // false
        System.out.println("Runtime concat interned: " + (a == f.intern())); // true

        System.out.println("\nString Pool internals:");
        System.out.println("  - Hash table: default 60013 buckets");
        System.out.println("  - -XX:StringTableSize=N");
        System.out.println("  - No eviction policy");
        System.out.println("  - JDK 7+: heap (previously PermGen)\n");

        // Pool size comparison
        long startMem = Runtime.getRuntime().totalMemory()
            - Runtime.getRuntime().freeMemory();

        String[] poolFiller = new String[10_000];
        for (int i = 0; i &lt; poolFiller.length; i++) {
            poolFiller[i] = ("key-" + i).intern();
        }

        long endMem = Runtime.getRuntime().totalMemory()
            - Runtime.getRuntime().freeMemory();

        System.out.println("Memory used by 10,000 interned strings: ~"
            + (endMem - startMem) / 1024 + " KB\n");

        System.out.println("Best practices:");
        System.out.println("  - Use literals when possible");
        System.out.println("  - Avoid intern() on user/dynamic input");
        System.out.println("  - Increase StringTableSize if interning many strings");
        System.out.println("  - Compare with equals(), not == (unless interned)");
    }
}
```

---

## 13. Performance Flags

### 13.1 JIT Compilation Flags


```java
package com.example.jvm.flags;

import java.lang.management.ManagementFactory;

public class JITFlags {

    public static void main(String[] args) {
        System.out.println("=== JIT Compilation Flags ===\n");

        System.out.println("--- Tiered Compilation ---");
        System.out.println("-XX:+TieredCompilation (default since JDK 8)");
        System.out.println("-XX:TieredStopAtLevel=N (force specific tier)");
        System.out.println("-XX:-TieredCompilation (disable, C2 only after C1)\n");

        System.out.println("--- Method Inlining ---");
        System.out.println("-XX:MaxInlineSize=35 (default bytecode size ~35)");
        System.out.println("-XX:FreqInlineSize=325 (hot method size ~325)");
        System.out.println("-XX:+InlineSynchronizedMethods\n");

        System.out.println("--- Compilation Thresholds ---");
        System.out.println("-XX:CompileThreshold=10000 (C1: method entry counter)");
        System.out.println("-XX:CompileThresholdScaling=&lt;float&gt;");
        System.out.println("-XX:OnStackReplacePercentage=140 (OSR ratio)\n");

        System.out.println("--- ReservedCodeCacheSize ---");
        System.out.println("-XX:ReservedCodeCacheSize=240m (default)");
        System.out.println("-XX:InitialCodeCacheSize=160m\n");

        System.out.println("--- Print Compilation ---");
        System.out.println("-XX:+PrintCompilation (log compiled methods)");
        System.out.println("-XX:+UnlockDiagnosticVMOptions");
        System.out.println("-XX:+PrintInlining\n");

        for (var mx : ManagementFactory.getCompilationMXBeans()) {
            System.out.println("Current JIT: " + mx.getName()
                + " (" + mx.getTotalCompilationTime() + " ms)");
        }
    }
}
```

### 13.2 Memory Flags


```java
package com.example.jvm.flags;

public class MemoryFlags {

    public static void main(String[] args) {
        System.out.println("=== Memory Flags ===\n");

        System.out.println("--- Heap ---");
        System.out.println("-Xms&lt;size&gt;          -Xms4g");
        System.out.println("-Xmx&lt;size&gt;          -Xmx4g");
        System.out.println("-XX:+AlwaysPreTouch");
        System.out.println("-XX:+UseNUMA\n");

        System.out.println("--- Young Generation ---");
        System.out.println("-Xmn&lt;size&gt;          -Xmn2g");
        System.out.println("-XX:NewSize=&lt;size&gt;");
        System.out.println("-XX:MaxNewSize=&lt;size&gt;");
        System.out.println("-XX:NewRatio=N       NewRatio=2 → 1:2");
        System.out.println("-XX:SurvivorRatio=N  8 → eden:survivor = 8:1:1\n");

        System.out.println("--- Metaspace ---");
        System.out.println("-XX:MetaspaceSize=&lt;size&gt; (initial threshold)");
        System.out.println("-XX:MaxMetaspaceSize=&lt;size&gt;");
        System.out.println("-XX:CompressedClassSpaceSize=&lt;size&gt;");
        System.out.println("-XX:+UseCompressedClassPointers (default)\n");

        System.out.println("--- Direct Memory ---");
        System.out.println("-XX:MaxDirectMemorySize=&lt;size&gt;\n");

        System.out.println("--- Large Pages ---");
        System.out.println("-XX:+UseLargePages (Linux only)");
        System.out.println("-XX:LargePageSizeInBytes=2m\n");

        System.out.println("--- Compression ---");
        System.out.println("-XX:+UseCompressedOops (default, heap &lt; 32 GB)");
        System.out.println("-XX:ObjectAlignmentInBytes=8 (default)");
        System.out.println("Compressed OOPs convert to: heap_base + (offset &lt;< 3)");
    }
}
```

### 13.3 Complete Production JVM Flags Example


```java
package com.example.jvm.flags;

public class ProductionFlags {

    public static void main(String[] args) {
        System.out.println("=== Production JVM Flags (Example) ===\n");
        System.out.println("// --- Memory ---");
        System.out.println("-Xms4g");
        System.out.println("-Xmx4g");
        System.out.println("-Xmn2g");
        System.out.println("-XX:MetaspaceSize=256m");
        System.out.println("-XX:MaxMetaspaceSize=256m");
        System.out.println("-XX:+AlwaysPreTouch");
        System.out.println("-XX:+UseCompressedOops");
        System.out.println("-XX:+UseNUMA");
        System.out.println();
        System.out.println("// --- GC (G1) ---");
        System.out.println("-XX:+UseG1GC");
        System.out.println("-XX:MaxGCPauseMillis=200");
        System.out.println("-XX:G1HeapRegionSize=4m");
        System.out.println("-XX:InitiatingHeapOccupancyPercent=45");
        System.out.println("-XX:G1ReservePercent=15");
        System.out.println("-XX:G1NewSizePercent=5");
        System.out.println("-XX:G1MaxNewSizePercent=60");
        System.out.println("-XX:+UnlockExperimentalVMOptions");
        System.out.println("-XX:G1MixedGCLiveThresholdPercent=85");
        System.out.println();
        System.out.println("// --- GC Logging ---");
        System.out.println("-Xlog:gc*,gc+age=trace,safepoint:file=gc-%t.log:time,uptime");
        System.out.println();
        System.out.println("// --- JIT ---");
        System.out.println("-XX:ReservedCodeCacheSize=512m");
        System.out.println("-XX:+PrintCompilation");
        System.out.println();
        System.out.println("// --- Diagnostics ---");
        System.out.println("-XX:+UnlockDiagnosticVMOptions");
        System.out.println("-XX:+PrintInlining");
        System.out.println("-XX:+HeapDumpOnOutOfMemoryError");
        System.out.println("-XX:HeapDumpPath=/var/log/app/heapdump.hprof");
        System.out.println("-XX:ErrorFile=/var/log/app/hs_err_%p.log");
        System.out.println();
        System.out.println("// --- Security ---");
        System.out.println("-Djava.security.egd=file:/dev/./urandom");
        System.out.println("-Djava.security.debug=all");
    }
}
```

## Concept Comparison Table

| Concept | Definition | Key Distinction | Use Case |
|---------|-----------|-----------------|----------|
| JVM | Abstract computing machine executing bytecode | Platform-independent execution model | Write once, run anywhere |
| Class Loader | Loads .class files into memory | Delegation hierarchy prevents duplicate loading | Framework isolation (Tomcat, OSGi) |
| Heap | Shared runtime memory for objects | GC-managed, divided into generations | All object allocations |
| Stack | Per-thread memory for method frames | LIFO structure, holds locals + operand stack | Method invocation and return |
| Garbage Collector | Automatic memory reclamation | Different algorithms for different workloads | Throughput vs latency trade-off |

## Quick Reference

| Category | Key Concepts | Notes |
|----------|-------------|-------|
| **Memory Areas** | Heap, Stack, Metaspace, PC Register, Native Stack | Only heap is GC-managed |
| **GC Algorithms** | Serial, Parallel, G1, ZGC, Shenandoah | Choose by pause-time SLA |
| **Key Flags** | -Xms, -Xmx, -Xss, -XX:MetaspaceSize, -XX:+UseG1GC | Set -Xms = -Xmx to avoid resizing |
| **Diagnostic Tools** | jstat, jmap, jhat, MAT, jvisualvm | Always take heap dump before restart |
| **Class Loaders** | Bootstrap, Platform, Application, Custom | Custom loaders need careful native memory planning |

## Cross-Application Matrix

| Technique | Web Apps | Microservices | Big Data | Low-Latency Trading |
|-----------|----------|---------------|----------|---------------------|
| G1 GC | Primary choice for steady throughput | Default in containers | - | Too high latency |
| ZGC | Sub-10ms pause target | Good for critical services | - | Ideal for real-time |
| Custom ClassLoader | App server isolation | Plugin systems | UDF loading in Spark | - |
| Heap Dump Analysis | Memory leak debugging | OOM crash investigation | Large heap analysis | - |
| JIT Tuning | Startup vs peak perf trade-off | Container warmup | Long-running optimization | Profile-guided optimization |

## Chapter Quiz

1. What is the correct order of the class loader delegation model?
   - A) Application → Platform → Bootstrap
   - B) Bootstrap → Platform → Application
   - C) Application → Bootstrap → Platform
   - D) Platform → Application → Bootstrap

<details>
<summary>Answer</summary>
**B) Bootstrap → Platform → Application.** The delegation model is parent-first: a class loader delegates to its parent before attempting to load a class itself.
</details>

2. Which garbage collector is designed for sub-millisecond pause times?
   - A) Parallel GC
   - B) G1 GC
   - C) ZGC
   - D) Serial GC

<details>
<summary>Answer</summary>
**C) ZGC.** ZGC is a low-latency garbage collector designed for sub-millisecond pause times, regardless of heap size.
</details>

3. What happens when a method is called 10,000+ times in the JVM?
   - A) It is reinterpreted each time
   - B) It may be JIT-compiled to native code
   - C) The JVM throws an exception
   - D) It gets garbage collected

<details>
<summary>Answer</summary>
**B) It may be JIT-compiled to native code.** The JIT compiler monitors hot methods and compiles them to native machine code for better performance.
</details>

4. What is the primary difference between stack and heap memory?
   - A) Stack is slower than heap
   - B) Stack stores method frames per-thread; heap stores objects shared across threads
   - C) Heap is per-thread; stack is shared
   - D) There is no difference

<details>
<summary>Answer</summary>
**B) Stack stores method frames per-thread; heap stores objects shared across threads.** Each thread has its own stack, while the heap is shared among all threads.
</details>

5. Which JVM flag controls the initial heap size?
   - A) -Xms
   - B) -Xmx
   - C) -Xss
   - D) -XX:MaxMetaspaceSize

<details>
<summary>Answer</summary>
**A) -Xms.** The -Xms flag sets the initial heap size, while -Xmx sets the maximum heap size.
</details>

---

## 14. Summary

This chapter covered the JVM architecture and memory management in depth:

### Key Concepts


**JVM Architecture**: The JVM is a specification implemented by vendors (Oracle, IBM, GraalVM). It includes the class-loading subsystem (loading, linking, initialization), the runtime data areas (method area, heap, stack, PC registers, native stack), and the execution engine (interpreter, JIT compilers, GC).

**Class Loading**: Uses a hierarchical delegation model. The three built-in loaders are Bootstrap (rt.jar, JDK core), Extension/Platform (ext libraries), and Application (classpath). Custom loaders enable dynamic code loading, class reloading, and bytecode manipulation.

**Bytecode**: Platform-independent intermediate representation. Tools like `javap` disassemble `.class` files. Key instructions include `aload`, `getfield`, `invokevirtual`, `invokedynamic` (for lambdas). The stack-frame architecture stores local variables, operand stack, and frame data.

**JIT Compilation**: Hot methods transition from interpretation through profiling (tiers 0-3) to fully optimized native code (tier 4, C2). Key techniques include hot-spot detection, method inlining, escape analysis (stack allocation, lock elision, scalar replacement), on-stack replacement, and code cache management.

**Memory Areas**: The heap (young + old generations) stores all objects. The stack holds frames with local variables and partial results. Metaspace (native memory) stores class metadata. Direct memory is allocated outside the heap for NIO operations.

**Garbage Collection**: Driven by the generational hypothesis. Major algorithms include mark-sweep, mark-compact, and copying. GC roots include stack locals, statics, and JNI handles.

**GC Implementations**: Serial (single-thread, small heaps), Parallel (high throughput), G1 (default, region-based, mixed collections), ZGC (sub-millisecond, colored pointers), and Shenandoah (Brooks pointers, concurrent evacuation).

**Memory Leaks**: Common patterns include classloader leaks, ThreadLocal values in thread pools, unbounded static collections, interned strings, and unregistered listeners. Detection requires heap dump analysis (MAT, jprofiler) and monitoring (jstat, jconsole).

**Stack Overflow**: Caused by infinite or deep recursion, excessively large frames, or insufficient stack size (`-Xss`).

**String Pool**: Caches string literals and interned strings in a fixed-size hash table. Use `equals()` for comparison unless you control interning.

### JVM Evolution


| Feature | JDK Version |
|---|---|
| G1 GC (production) | 9 |
| Module System | 9 |
| ZGC (experimental) | 11 |
| ZGC (production) | 15 |
| Shenandoah (production, OpenJDK) | 12 |
| Shenandoah (Oracle JDK) | 21 |
| Graal JIT | 16+ (experimental) |
| Project Lilliput (compact headers) | TBD |
| Project Leyden (ahead-of-time) | TBD |

---

## 15. Exercises

### Review Questions

1. Explain the three main subsystems of the JVM architecture.

2. What is the delegation model in class loading? Why does it prevent class collision?

3. Describe the three phases of class loading: loading, linking, and initialization.

4. What is the difference between C1 and C2 compilers? When does each run?

5. Explain escape analysis. What three optimizations does it enable?

6. What is the generational hypothesis? How does it influence GC design?

7. Compare G1, ZGC, and Shenandoah GC. When would you choose each?

8. What is a GC root? List four types of GC roots.

9. How does ThreadLocal cause memory leaks in thread pools?

10. What is the String Pool? Why does `intern()` exist?

### Application Exercises


**Exercise 1: JIT Warmup Analysis**

Write a program that measures throughput of a math-intensive method over 5 million calls. Run with `-XX:+PrintCompilation` and observe compilation events.

```java
package com.example.jvm.exercises;

public class Exercise1_JITWarmup {

    public static double compute(double x, int n) {
        double result = 1.0;
        for (int i = 0; i &lt; n; i++) {
            result = result * x + Math.sin(result);
        }
        return result;
    }

    public static void main(String[] args) {
        long[] timings = new long[50];
        for (int batch = 0; batch &lt; 50; batch++) {
            long start = System.nanoTime();
            for (int i = 0; i &lt; 100_000; i++) {
                compute(i * 0.01, 100);
            }
            timings[batch] = System.nanoTime() - start;
        }
        for (int i = 0; i &lt; timings.length; i++) {
            System.out.println("Batch " + i + ": " + timings[i] / 1_000_000 + " ms");
        }
    }
}
```

Run with:
```
java -XX:+PrintCompilation -cp . com.example.jvm.exercises.Exercise1_JITWarmup
```

**Exercise 2: GC Comparison**

Write a program that allocates and discards objects in a loop. Run with Serial, Parallel, G1, and ZGC. Compare pause times and throughput.

```java
package com.example.jvm.exercises;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class Exercise2_GCComparison {

    static class Payload {
        long[] data;
        Payload() { data = new long[256]; }
    }

    public static void main(String[] args) {
        List&lt;Payload&gt; roots = new ArrayList&lt;>();
        Random rng = new Random(42);
        long start = System.currentTimeMillis();
        int totalAllocated = 0;

        while (System.currentTimeMillis() - start &lt; 10_000) {
            for (int i = 0; i &lt; 1000; i++) {
                roots.add(new Payload());
                totalAllocated++;
            }
            for (int i = 0; i &lt; 300; i++) {
                if (!roots.isEmpty()) roots.remove(rng.nextInt(roots.size()));
            }
        }
        System.out.println("Total allocated: " + totalAllocated);
        System.out.println("Survivors: " + roots.size());
        System.out.println("Run with each GC flag and compare RuntimeMXBean");
    }
}
```

Run with:
```
java -XX:+UseSerialGC -Xlog:gc*:file=gc-serial.log com.example.jvm.exercises.Exercise2_GCComparison
java -XX:+UseG1GC -Xlog:gc*:file=gc-g1.log com.example.jvm.exercises.Exercise2_GCComparison
# Compare logs using GCViewer
```

**Exercise 3: Memory Leak Detector**

Create a class that simulates a ThreadLocal leak. Use `jmap -histo:live` to detect the leaked objects before and after GC.

```java
package com.example.jvm.exercises;

import java.util.concurrent.*;

public class Exercise3_LeakDetector {

    static final ThreadLocal&lt;byte[]&gt; TL = ThreadLocal.withInitial(() -> null);

    public static void main(String[] args) throws Exception {
        var pool = Executors.newFixedThreadPool(10);
        for (int i = 0; i &lt; 100_000; i++) {
            pool.submit(() -> {
                TL.set(new byte[1024 * 100]); // 100 KB
                // Uncomment to fix: TL.remove();
                return null;
            });
        }
        pool.shutdown();
        pool.awaitTermination(10, TimeUnit.SECONDS);
        System.out.println("Take heap dump: jmap -dump:live,format=b,file=leak.hprof &lt;pid&gt;");
        Thread.sleep(60_000);
    }
}
```

### Challenge Exercises


**Challenge 1: Custom ClassLoader for Bytecode Encryption**

Build a custom ClassLoader that decrypts encrypted .class files before defining them. Include:
- AES encryption utility
- Custom ClassLoader that decrypts bytes
- Simple interface and implementation to demonstrate

(Reference the implementation in Section 2.4.)

**Challenge 2: GC Ergonomics Simulator**

Write a simulator that models GC behavior:
- Simulated heap with configurable young/old ratio
- Configurable allocation rate and object survival rate
- Calculates expected pause times and throughput
- Compare with real GC logs

**Challenge 3: String Pool Performance Test**

Benchmark string deduplication strategies:
1. `String.intern()` with large StringTable
2. `HashMap<String, String>` with periodic cleanup
3. Guava Interner
4. No deduplication (baseline)

Measure memory usage and throughput for 1 million strings.

**Challenge 4: Stack Overflow Analyzer**

Write a program that determines maximum recursion depth:
- Method with 0, 5, and 10 local variables
- Vary `-Xss` from 256k to 4m
- Plot depth vs stack size
- Derive per-frame overhead formula

---

*End of Chapter: JVM Architecture & Memory Management*
