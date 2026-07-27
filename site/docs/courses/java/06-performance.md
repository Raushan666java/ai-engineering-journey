---
id: 06-performance
slug: /java/06-performance
title: "Performance Tuning & Profiling"
sidebar_label: "Performance Tuning & Profiling"
sidebar_position: 6
---
# Performance Tuning & Profiling

> **Previous:** [Functional Programming in Practice](./05-functional-deep.md) | **Next:** [Maven Deep Dive](./07-maven.md)

Performance is a feature. In production Java applications, performance problems manifest as high latency, low throughput, excessive CPU, memory leaks, and cascading failures. Solving them requires a systematic approach: **measure**, **identify the bottleneck**, **fix**, and **verify**. This chapter covers the tools, techniques, and JVM internals you need to diagnose and eliminate performance problems in Java and Spring Boot applications.

The chapter is organized into nine sections. Sections 1--4 cover **diagnostic tools**: profilers, heap analyzers, thread dump analysis, and GC log analysis. Section 5 covers **benchmarking with JMH**. Sections 6--8 cover **anti-patterns, code-level optimizations, and JVM tuning**. Section 9 covers **Spring-Boot-specific performance** techniques.

---

## Learning Objectives

By the end of this chapter, you will be able to:

<!-- Image Gallery -->
<section class="lesson-visuals" aria-label="Visual learning resources">
  <header><span>VISUAL LEARNING</span><h2>See it. Review it. Remember it.</h2></header>
  <a class="lesson-visual-card" href="../../assets/images/lessons/java/06-performance/handwritten-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/java/06-performance/handwritten-notes.png" alt="Handwritten notes" loading="lazy">
    <span><strong>Handwritten notes</strong>Condensed notes for deliberate review.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/java/06-performance/sticky-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/java/06-performance/sticky-notes.png" alt="Sticky-note revision" loading="lazy">
    <span><strong>Sticky-note revision</strong>Fast recall prompts for revision.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/java/06-performance/visual-explanation.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/java/06-performance/visual-explanation.png" alt="Visual concept guide" loading="lazy">
    <span><strong>Visual concept guide</strong>A connected explanation of the key ideas.</span>
  </a>
</section>
<!-- End Image Gallery -->


- Use Java Mission Control (JMC) with Flight Recorder to capture and analyze JVM events
- Profile CPU and memory with async-profiler, VisualVM, JProfiler, YourKit, and IntelliJ profiler
- Analyze heap dumps with Eclipse MAT: dominator tree, leak suspect report, GC roots, OQL
- Understand shallow heap vs retained heap and interpret the results
- Capture and analyze thread dumps via `jstack` to detect deadlocks, contention, and CPU hotspots
- Read JVM GC logs and evaluate GC pause times, allocation rates, and promotion rates
- Write correct microbenchmarks with JMH including `@Benchmark`, `@State`, `Blackhole`, and profiler integration
- Identify and fix common performance anti-patterns: auto-boxing loops, string concatenation in loops, excessive synchronization, N+1 queries, connection pool leaks, and unintentional object retention
- Apply JVM tuning flags for heap sizing, GC selection, and memory layout
- Configure Spring Boot for better startup and runtime performance via lazy initialization, connection pool tuning, AOT, graceful shutdown, and virtual threads

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|--------------------|
| Profiling Tools | JFR, async-profiler, VisualVM, MAT | Always start with JFR — <1% overhead |
| Heap Analysis | MAT dominator tree, leak suspect, OQL | Retained heap reveals true memory cost |
| Thread Dumps | jstack analysis for deadlocks and contention | Look for BLOCKED threads and lock owners |
| GC Log Analysis | Pause time, allocation rate, promotion rate | GC tuning is a trade-off: throughput vs latency |
| JMH Benchmarking | Annotation-based microbenchmarks | Warmup, Blackhole, and dead code elimination matter |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Profiling Tools] --> B[Heap Analysis]
    B --> C[Thread Dump Analysis]
    C --> D[GC Log Analysis]
    D --> E[JMH Benchmarking]
    E --> F[Anti-Patterns]
    F --> G[Code Optimization]
    G --> H[JVM Tuning]
    H --> I[Spring Boot Performance]
```

> **Warning:** Never tune without metrics. Guessing which GC to use or which flag to set without JFR or GC logs is cargo-cult optimization. Always measure first.

---

## 1. Profiling Tools

![Performance Tuning Workflow](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/06-performance.png)

A profiler observes a running application and reports where it spends CPU time, allocates memory, or blocks on locks. Different profilers trade off precision, overhead, and ease of use.

### 1.1 Java Mission Control & Flight Recorder


JDK Flight Recorder (JFR) is a low-overhead event-recording engine built into the JVM. Java Mission Control (JMC) is the GUI for browsing JFR recordings. JFR is the **first tool you should reach for** in production because its overhead is typically under 1%.

```java
import jdk.jfr.*;
import jdk.jfr.consumer.RecordingFile;
import java.io.IOException;
import java.nio.file.Path;
import java.util.List;

// Custom JFR event → you can define your own events
@Label("Database Query")
@Description("Duration of a database query")
@Category({"Application", "Database"})
public class DatabaseQueryEvent extends Event {

    @Label("Query")
    @Description("The SQL query string")
    private String query;

    @Label("Rows Returned")
    private int rows;

    public void setQuery(String query) {
        this.query = query;
    }

    public void setRows(int rows) {
        this.rows = rows;
    }
}

// Usage of custom JFR event
class DatabaseService {

    public List<User> findUsersByStatus(String status) {
        DatabaseQueryEvent event = new DatabaseQueryEvent();
        event.setQuery("SELECT * FROM users WHERE status = ?");
        event.begin();

        try {
            // simulate query execution
            Thread.sleep(50);
            List<User> results = List.of(new User(1, "alice"));
            event.setRows(results.size());
            return results;
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            return List.of();
        } finally {
            event.commit();
        }
    }
}

// Programmatic JFR recording
class JfrRecorder {

    public static void main(String[] args) throws Exception {
        // Start a recording with custom settings
        Recording recording = new Recording();
        recording.setName("My Recording");
        recording.setMaxSize(100L * 1024 * 1024); // 100 MB
        recording.setMaxAge(Duration.ofMinutes(60));

        // Enable events with custom threshold
        Configuration config = Configuration.getConfiguration("default");
        recording.setSettings(config.getSettings());
        recording.start();

        // Run the workload
        DatabaseService service = new DatabaseService();
        for (int i = 0; i < 100; i++) {
            service.findUsersByStatus("active");
        }

        recording.stop();

        // Dump to file → can be opened in JMC
        Path dumpPath = Path.of("my-recording.jfr");
        recording.dump(dumpPath);
        System.out.println("Recording dumped to " + dumpPath.toAbsolutePath());

        // Read back and print events
        try (RecordingFile reader = new RecordingFile(dumpPath)) {
            while (reader.hasMoreEvents()) {
                RecordedEvent ev = reader.readEvent();
                if (ev.getEventType().getName().contains("DatabaseQuery")) {
                    System.out.printf("Query: %s, Duration: %d ms%n",
                        ev.getString("query"),
                        ev.getDuration().toMillis());
                }
            }
        }
    }
}

record User(int id, String name) {}
```

**Key JFR events** you inspect in JMC:

| Category         | Events                                      |
|------------------|---------------------------------------------|
| GC               | GC Phase Pause, Allocation Stall, GarbageCollection |
| Compiler         | Compilation, Code Cache Full, OSR          |
| Threading        | Thread Park, Thread Sleep, Java Monitor Blocked |
| IO               | File Read/Write, Socket Read/Write          |
| Exceptions       | Java Exception Throw                        |

Start an on-demand recording from command line instead of code:

```bash
# Start recording on a running JVM (PID 12345) for 60 seconds
jcmd 12345 JFR.start name=hotspot recording=60s filename=hotspot.jfr

# Dump without stopping
jcmd 12345 JFR.dump name=hotspot filename=hotspot-dump.jfr

# Check status
jcmd 12345 JFR.check

# Stop
jcmd 12345 JFR.stop name=hotspot
```

### 1.2 JProfiler


JProfiler is a commercial profiler with a rich GUI for CPU, memory, thread, and JDBC profiling. It supports **offline profiling** via heap dumps and saved snapshots and **live attach** to local and remote JVMs.

```java
// JProfiler-specific telemetry via JDBC probe → no code changes needed
// JProfiler intercepts JDBC driver calls and shows:
//   - Slowest queries
//   - Hotspot call trees for query execution
//   - Connection open/close patterns
//   - PreparedStatement cache behavior

// To detect connection leaks, JProfiler tracks:
//   - Connection acquired but never closed
//   - Statements not closed after use
//   - ResultSets left open

// →→→ Demonstration of a "connection leak" that JProfiler detects →→→
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

class ConnectionLeakSimulator {

    private static final String URL = "jdbc:h2:mem:test";

    public static void main(String[] args) throws Exception {
        // Setup in-memory table
        try (Connection c = DriverManager.getConnection(URL);
             Statement s = c.createStatement()) {
            s.execute("CREATE TABLE IF NOT EXISTS items (id INT PRIMARY KEY, name VARCHAR(100))");
        }

        // Simulate a leak: Connection never closed
        for (int i = 0; i < 100; i++) {
            leakyQuery(i);
        }

        System.out.println("Done → check JProfiler for unclosed connections");
    }

    static void leakyQuery(int id) throws Exception {
        Connection conn = DriverManager.getConnection(URL);
        Statement stmt = conn.createStatement();
        ResultSet rs = stmt.executeQuery("SELECT name FROM items WHERE id = " + id);
        if (rs.next()) {
            System.out.println("Found: " + rs.getString(1));
        }
        // conn.close() never called → leak!
        // stmt.close() never called
        // rs.close() never called
    }
}
```

### 1.3 YourKit


YourKit is another commercial profiler similar to JProfiler. It provides **offline CPU and memory snapshots**, **allocation profiling**, and **thread analysis**.

YourKit's distinguishing features:

- **Memory probes** show which methods allocate the most objects
- **Object explorer** lets you inspect the reference graph of any live object
- **String duplication** detector shows how much memory is wasted by identical strings

```java
// YourKit can detect duplicate strings → useful for large collections
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

class StringDuplicationSimulator {

    private static final String[] FIRST_NAMES = {"Alice", "Bob", "Charlie", "Diana"};
    private static final String[] LAST_NAMES = {"Smith", "Jones", "Brown", "Taylor"};
    private static final Random RNG = new Random(42);

    public static void main(String[] args) {
        // Each iteration creates brand-new String objects via concatenation.
        // Even with identical values, the JVM does NOT automatically intern them.
        List<String> names = new ArrayList<>();
        for (int i = 0; i < 1_000_000; i++) {
            String first = FIRST_NAMES[RNG.nextInt(FIRST_NAMES.length)];
            String last = LAST_NAMES[RNG.nextInt(LAST_NAMES.length)];
            names.add(first + " " + last);
        }

        // After 1M inserts, many strings are duplicated.
        // YourKit's string duplication probe would show massive waste.
        System.out.println("Size: " + names.size());

        // With String.intern() or -XX:+UseStringDeduplication the GC can
        // collapse duplicates. The dedup probe makes this visible.
        Runtime rt = Runtime.getRuntime();
        long used = (rt.totalMemory() - rt.freeMemory()) / 1_000_000;
        System.out.println("Approx MB used: " + used);
    }
}
```

### 1.4 VisualVM


VisualVM is a free, open-source profiler bundled with older JDK distributions. For JDK 9+, download it separately from visualvm.github.io.

```java
// VisualVM excels at real-time monitoring:
//   - Heap and metaspace usage over time
//   - Thread activity (live threads, daemon threads)
//   - CPU sampling: which methods consume CPU
//   - Heap dump browsing (similar to MAT but lighter)

// →→→ CPU hotspot simulation that VisualVM makes visible →→→
class CpuHotspotSimulator {

    public static void main(String[] args) throws Exception {
        System.out.println("Start profiling with VisualVM now...");
        Thread.sleep(10_000);
        System.out.println("Running workload...");

        long result = 0;
        for (int i = 0; i < 5; i++) {
            result += expensiveComputation();
        }
        System.out.println("Result: " + result);
        Thread.sleep(5_000);
        System.out.println("Done → check VisualVM hot spots");
    }

    static long expensiveComputation() {
        long sum = 0;
        for (int i = 0; i < 1_000_000; i++) {
            sum += i * i / (i + 1);
        }
        // An obvious CPU hotspot
        for (int i = 0; i < 500_000; i++) {
            sum += Math.log(i + 1) * Math.sqrt(i + 1);
        }
        return sum;
    }
}
```

VisualVM's **Sampler** tab shows methods sorted by self time. The method `CpuHotspotSimulator.expensiveComputation` appears at the top. Double-clicking reveals the call tree and line-level hot spots.

### 1.5 async-profiler


async-profiler (github.com/async-profiler/async-profiler) uses Linux `perf_events` to collect stack traces with **zero safepoint bias**. It is the most accurate CPU profiler for Java and also supports allocation profiling, wall-clock profiling, and Java execution samples.

```bash
# CPU profiling for 30 seconds, output as flamegraph HTML
./profiler.sh -d 30 -f cpu-flamegraph.html <PID>

# Allocation profiling: track which methods allocate most memory
./profiler.sh -d 30 -e alloc -f alloc-flamegraph.html <PID>

# Wall-clock profiling: includes blocking, I/O, and sleeping threads
./profiler.sh -d 30 -e wall -f wall-flamegraph.html <PID>
```

```java
// async-profiler can be embedded programmatically via Jattach
// or through the AsyncProfiler API (available as a JAR):

// import one.profiler.AsyncProfiler;
// import one.profiler.AsyncProfilerLoader;

class AsyncProfilerDemo {

    public static void main(String[] args) throws Exception {
        // AsyncProfiler api = AsyncProfilerLoader.load();
        // api.start("event=cpu,file=cpu.html,width=1600");
        // workload();
        // api.stop();

        // If the library is not available, run via command line:
        // ./profiler.sh -d 10 -s -f profile.svg <PID>

        System.out.println("Run with: ./profiler.sh -d 10 -e cpu -f profile.svg $(jps | grep AsyncProfilerDemo | awk '{print $1}')");
        workload();
    }

    static void workload() {
        double sum = 0;
        for (int i = 0; i < 10_000_000; i++) {
            sum += Math.sin(i * Math.PI / 180_000.0);
        }
        System.out.println("Sum: " + sum);
    }
}
```

**Flame graphs** produced by async-profiler show stack frames as rectangles. The wider a frame, the more CPU time it consumed. The left-to-right order is alphabetical. Clicking a frame zooms into its callees.

### 1.6 IntelliJ Profiler


IntelliJ IDEA Ultimate includes an embedded async-profiler-based profiler. It integrates CPU and memory profiling into the IDE's run/debug configuration.

```java
// To use IntelliJ's profiler:
// 1. Run → Profile <class> (or right-click in gutter)
// 2. IntelliJ attaches async-profiler automatically
// 3. CPU flame graph opens in the Profiler tool window
// 4. Click a method to jump to its source

// Memory profiling shows allocations per method/line.
// →→→ Memory allocation hotspot →→→
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

class IntelliJProfilerDemo {

    public static void main(String[] args) {
        // Run this with "Profile..." action in IntelliJ
        Map<String, UserProfile> cache = new HashMap<>();

        for (int i = 0; i < 500_000; i++) {
            String id = UUID.randomUUID().toString();
            cache.put(id, new UserProfile(id, "User_" + i, i % 100));
        }

        // IntelliJ shows the HashMap.put allocation as the top memory consumer
        System.out.println("Cache size: " + cache.size());
    }
}

record UserProfile(String id, String name, int age) {}
```

IntelliJ also offers an **object count view** that lists every class and its instance count. This is invaluable for finding unexpected object proliferation.

---

## 2. Heap Analysis with MAT

When the JVM runs out of memory or you suspect a memory leak, a **heap dump** captures the complete state of the Java heap: every live object, its fields, and its reference chain. Eclipse Memory Analyzer (MAT) is the gold standard for analyzing heap dumps.

### 2.1 Capturing a Heap Dump


```java
// Method 1: jcmd (JDK 8+)
// jcmd <PID> GC.heap_dump /path/to/heapdump.hprof

// Method 2: jmap
// jmap -dump:live,format=b,file=heapdump.hprof <PID>

// Method 3: Programmatically (with JVM option)
// -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/path/to/dumps/

// Method 4: At runtime with HotSpotDiagnosticMXBean
import com.sun.management.HotSpotDiagnosticMXBean;
import java.lang.management.ManagementFactory;

class HeapDumpCreator {

    public static void dumpHeap(String filePath, boolean live) throws Exception {
        HotSpotDiagnosticMXBean bean = ManagementFactory
            .getPlatformMXBean(HotSpotDiagnosticMXBean.class);
        bean.dumpHeap(filePath, live);
        System.out.println("Heap dump written to: " + filePath);
    }

    public static void main(String[] args) throws Exception {
        // Create some data before dumping
        var map = new java.util.HashMap<String, int[]>();
        for (int i = 0; i < 10_000; i++) {
            map.put("key-" + i, new int[1_000]);
        }
        dumpHeap("manual-dump.hprof", true);
    }
}
```

### 2.2 Dominator Tree


The dominator tree is MAT's most important view. It shows the retained object set for each object → every object that would be garbage collected when that object is collected.

```java
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

// This class produces a heap structure visible in the dominator tree
class DominatorTreeExample {

    public static void main(String[] args) {
        Department eng = new Department("Engineering");
        Department sales = new Department("Sales");

        for (int i = 0; i < 10_000; i++) {
            Employee e = new Employee("emp-" + i, 50_000 + i * 1000);
            eng.addEmployee(e);
        }

        // The "eng" Department object dominates all 10,000 Employee objects.
        // In MAT's dominator tree, eng appears at the top with
        // retained heap = sum of all Employee objects.
        // "sales" with 0 employees has minimal retained heap.

        System.out.println("Engineering dept has " + eng.getEmployees().size() + " employees");
        // Keep references alive
        Thread.currentThread().setName("dominator-demo-main");
        try { Thread.sleep(300_000); } catch (InterruptedException e) { Thread.currentThread().interrupt(); }
    }
}

class Department {
    private final String name;
    private final List<Employee> employees = new ArrayList<>();

    Department(String name) { this.name = name; }
    void addEmployee(Employee e) { employees.add(e); }
    List<Employee> getEmployees() { return employees; }
}

class Employee {
    private final String id;
    private final double salary;

    Employee(String id, double salary) {
        this.id = id;
        this.salary = salary;
    }
}
```

**Reading the dominator tree** in MAT:

1. Open the heap dump → **Dominator Tree** view
2. Objects are sorted by **Retained Heap** (largest first)
3. Expand a `Department` instance to see all dominated `Employee` instances
4. Right-click → **Path to GC Roots** → **exclude weak/soft references** to see why an object is alive

### 2.3 Leak Suspect Report


MAT's **Leak Suspect Report** automatically identifies the objects most likely causing a memory leak.

```java
import java.util.ArrayList;
import java.util.List;

// A classic memory leak pattern: static collection that grows unbounded
class LeakSuspectSimulator {

    // STATIC → never eligible for GC
    private static final List<byte[]> CACHE = new ArrayList<>();

    public static void main(String[] args) throws Exception {
        System.out.println("Running leak suspect simulation...");

        // Each iteration adds 1 MB that can never be freed
        int mb = 0;
        while (mb < 500) {
            CACHE.add(new byte[1_024 * 1_024]); // 1 MB
            mb++;
            if (mb % 50 == 0) {
                System.out.println("Allocated " + mb + " MB");
                Thread.sleep(100);
            }
        }

        // Generate a heap dump for analysis
        // jcmd <PID> GC.heap_dump leak-suspect.hprof
        System.out.println("Ready for heap dump. PID: " + ProcessHandle.current().pid());
        Thread.sleep(60_000);
    }
}
```

MAT's leak suspect report would produce something like:

```
Problem Suspect 1
   The class java.util.ArrayList loaded by <system class loader>
   occupies 500,000,480 (95.2%) bytes.
   The memory is accumulated in one instance of ArrayList
   referenced by LeakSuspectSimulator.CACHE.

   Keywords: java.util.ArrayList, LeakSuspectSimulator
```

### 2.4 Shallow vs Retained Heap


Understanding the distinction is critical:

| Measure     | Definition                                                   |
|-------------|--------------------------------------------------------------|
| Shallow heap | Memory consumed by one object's header + fields. For an `int[]` of 100 elements, shallow = header (16 bytes) + 100 Ã— 4 = 416 bytes. |
| Retained heap | Shallow heap of the object PLUS shallow heap of every object **only reachable through this object**. The total memory freed when this object is GC'd. |

```java
import java.util.ArrayList;
import java.util.List;

class ShallowVsRetained {

    public static void main(String[] args) {
        // Each LargeData object retains many other objects

        Node root = new Node("root");
        for (int i = 0; i < 100; i++) {
            Node child = new Node("child-" + i);
            root.addChild(child);
            for (int j = 0; j < 50; j++) {
                child.addChild(new Node("leaf-" + i + "-" + j));
            }
        }

        // Shallow heap of root: ~24 bytes (header + fields)
        // Retained heap of root: shallow + all 1 + 100 + 5,000 Node objects
        // If root becomes unreachable, ALL children are freed.

        System.out.println("Tree built with root and 5,100 child nodes");
        try { Thread.sleep(300_000); } catch (InterruptedException e) { Thread.currentThread().interrupt(); }
    }
}

class Node {
    private final String name;
    private final List<Node> children = new ArrayList<>();

    Node(String name) { this.name = name; }
    void addChild(Node child) { children.add(child); }
}
```

In MAT, the **Retained Heap column** on the dominator tree shows the true cost of each object. A seemingly small `HashMap` can have a huge retained heap if it references millions of entries.

### 2.5 OQL → Object Query Language


MAT includes an OQL (Object Query Language) console for SQL-like queries against the heap.

```java
// Example heap structures for OQL queries
import java.util.ArrayList;
import java.util.List;

class OqlExample {

    public static void main(String[] args) {
        List<Order> orders = new ArrayList<>();
        for (int i = 0; i < 10_000; i++) {
            orders.add(new Order("ORD-" + i, i * 100.0, "PENDING"));
        }
        // Leak: some orders are stuck in PENDING status and never removed
        // OQL can find them:
        System.out.println("10,000 orders created, many PENDING");
        try { Thread.sleep(300_000); } catch (InterruptedException e) { Thread.currentThread().interrupt(); }
    }
}

record Order(String id, double amount, String status) {}
```

**Useful OQL queries** to run in MAT:

```
// Find all String instances longer than 100 characters
SELECT s FROM java.lang.String s WHERE s.value.length > 100

// Find all arrays of bytes larger than 1 MB
SELECT a FROM byte[] a WHERE a.length > 1_048_576

// Count instances of a specific class
SELECT COUNT(*) FROM com.example.OqlExample$Order

// Find char[] arrays retained by HashMap$Node
SELECT * FROM char[] c
  WHERE c.elementData.@referencedIn = "java.util.HashMap$Node"

// Group objects by their class and count
SELECT clazz, COUNT(*) AS cnt
  FROM OBJECTS OBJECTS o
  GROUP BY clazz = o.@usedAs("class")
  ORDER BY cnt DESC

// Find objects with a specific field value
SELECT * FROM com.example.Order o WHERE o.status = "PENDING"

// Find GC root path for the largest char[] array
SELECT * FROM OBJECTS
  dominators(OBJECTS (SELECT o FROM char[] o ORDER BY o.length DESC LIMIT 1))
```

### 2.6 Eclipse MAT Advanced: JOverflow


JOverflow is a lesser-known tool that combines heap analysis with **outage pattern detection**. While MAT shows the static state, JOverflow (and tools like it) look for:

- **Thread-local storage leaks**: web applications where threads are reused but ThreadLocal values are not cleared
- **Classloader leaks**: redeployed web applications where the old classloader is retained
- **Reference chains**: analysis of why collections grow unbounded

```java
import java.util.HashMap;
import java.util.Map;

// A pattern that JOverflow detects well: ThreadLocal leak in a thread pool
class ThreadLocalLeak {

    // Static ThreadLocal → the value is retained as long as the thread is alive
    private static final ThreadLocal<Map<String, Object>> USER_SESSION =
        ThreadLocal.withInitial(HashMap::new);

    public static void main(String[] args) throws Exception {
        // Simulate web requests on pooled threads
        for (int i = 0; i < 100; i++) {
            handleRequest("user-" + i);
        }

        // In a real app, the thread pool threads never die.
        // Each thread's ThreadLocal map accumulates data from every request it handled.
        System.out.println("ThreadLocal leak simulated");
        try { Thread.sleep(300_000); } catch (InterruptedException e) { Thread.currentThread().interrupt(); }
    }

    static void handleRequest(String user) {
        Map<String, Object> session = USER_SESSION.get();
        session.put("lastAccess", System.nanoTime());
        session.put("user", user);
        session.put("largeData", new byte[100_000]); // accumulates across requests!
        // NEVER removed → memory leak
    }
}
```

---

## 3. Thread Dump Analysis

A **thread dump** is a snapshot of every thread's stack trace at a given moment. It reveals deadlocks, lock contention, and threads stuck in unexpected states.

### 3.1 Capturing Thread Dumps


```bash
# Method 1: jstack
jstack -l <PID> > threaddump.txt

# Method 2: jcmd
jcmd <PID> Thread.print > threaddump.txt

# Method 3: kill -3 (Linux)
kill -3 <PID>  # printed to stdout of the JVM process

# Method 4: Programmatic
# Use ThreadMXBean to generate a thread dump from code
```

```java
import java.lang.management.ManagementFactory;
import java.lang.management.ThreadInfo;
import java.lang.management.ThreadMXBean;
import java.util.Map;

class ProgrammaticThreadDump {

    public static void main(String[] args) {
        // Simulate threads in various states
        Thread deadlock1 = new Thread(new DeadlockCandidate(1, 2), "Worker-1");
        Thread deadlock2 = new Thread(new DeadlockCandidate(2, 1), "Worker-2");
        deadlock1.start();
        deadlock2.start();

        // Dump after brief delay
        try { Thread.sleep(500); } catch (InterruptedException e) { Thread.currentThread().interrupt(); }

        System.out.println("=== PROGRAMMATIC THREAD DUMP ===");
        ThreadMXBean bean = ManagementFactory.getThreadMXBean();

        // Detect deadlocks
        long[] deadlockedThreads = bean.findDeadlockedThreads();
        if (deadlockedThreads != null) {
            System.out.println("DEADLOCK DETECTED! Thread IDs: ");
            for (long id : deadlockedThreads) {
                System.out.println("  - " + id);
            }
        }

        // Print all thread dumps
        Map<Thread, StackTraceElement[]> allStacks = Thread.getAllStackTraces();
        for (Map.Entry<Thread, StackTraceElement[]> entry : allStacks.entrySet()) {
            Thread t = entry.getKey();
            System.out.printf("\n\"%s\" #%d priority=%d state=%s%n",
                t.getName(), t.threadId(), t.getPriority(), t.getState());

            for (StackTraceElement frame : entry.getValue()) {
                System.out.println("\tat " + frame);
            }
            System.out.println();
        }

        System.exit(0);
    }
}

class DeadlockCandidate implements Runnable {
    private final int firstLock;
    private final int secondLock;
    private static final Object LOCK_1 = new Object();
    private static final Object LOCK_2 = new Object();

    DeadlockCandidate(int first, int second) {
        this.firstLock = first;
        this.secondLock = second;
    }

    @Override
    public void run() {
        Object lockA = firstLock == 1 ? LOCK_1 : LOCK_2;
        Object lockB = secondLock == 1 ? LOCK_1 : LOCK_2;

        synchronized (lockA) {
            System.out.println(Thread.currentThread().getName() + " acquired lock " + firstLock);
            try { Thread.sleep(100); } catch (InterruptedException e) { Thread.currentThread().interrupt(); }

            synchronized (lockB) {
                System.out.println(Thread.currentThread().getName() + " acquired lock " + secondLock);
            }
        }
    }
}
```

### 3.2 Thread States in Dumps


Every thread in a dump shows its state. The key states are:

| State       | Meaning                                                   |
|-------------|-----------------------------------------------------------|
| `RUNNABLE`  | Executing on the CPU (or waiting for CPU scheduling). Also includes threads waiting for I/O (socket read, file read). |
| `BLOCKED`   | Waiting for a monitor lock → another thread holds the lock. **High BLOCKED count = contention**. |
| `WAITING`   | Waiting indefinitely via `Object.wait()`, `LockSupport.park()`, or `Thread.join()` with no timeout. |
| `TIMED_WAITING` | Waiting with a timeout via `Thread.sleep()`, `Object.wait(ms)`, or `LockSupport.parkNanos()`. |
| `TERMINATED`| Thread has finished execution. Rare in dumps.              |

```java
// Demonstration of threads in different states
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

class ThreadStateDemo {

    private static final Object MONITOR = new Object();
    private static final Lock REENTRANT = new ReentrantLock();

    public static void main(String[] args) throws Exception {
        // Thread 1: RUNNABLE → computing
        Thread t1 = new Thread(() -> {
            long sum = 0;
            for (int i = 0; i < 1_000_000_000; i++) {
                sum += i;
            }
            System.out.println("T1 done: " + sum);
        }, "CPU-Worker");

        // Thread 2: RUNNABLE (waiting for socket read → also "RUNNABLE")
        Thread t2 = new Thread(() -> {
            try {
                // Reading from a socket that has no data → thread is "RUNNABLE" in dump
                var socket = new java.net.ServerSocket(0);
                System.out.println("T2 listening on port " + socket.getLocalPort());
                socket.accept(); // blocks here, state = RUNNABLE
            } catch (Exception e) { /* expected */ }
        }, "IO-Worker");

        // Thread 3: BLOCKED → waiting for monitor held by T4
        Thread t3 = new Thread(() -> {
            synchronized (MONITOR) {
                System.out.println("T3 inside monitor");
                try { Thread.sleep(50_000); } catch (InterruptedException e) { Thread.currentThread().interrupt(); }
            }
        }, "Monitor-Holder");

        // Thread 4: BLOCKED → cannot enter synchronized block held by T3
        Thread t4 = new Thread(() -> {
            synchronized (MONITOR) {
                System.out.println("T4 inside monitor (never reached)");
            }
        }, "Monitor-Waiter");

        // Thread 5, 6: WAITING via LockSupport.park
        Thread t5 = new Thread(() -> {
            REENTRANT.lock();
            try {
                System.out.println("T5 holds reentrant lock");
                try { Thread.sleep(50_000); } catch (InterruptedException e) { Thread.currentThread().interrupt(); }
            } finally {
                REENTRANT.unlock();
            }
        }, "Lock-Holder");

        Thread t6 = new Thread(() -> {
            REENTRANT.lock(); // blocks until T5 unlocks
            try {
                System.out.println("T6 acquired reentrant lock");
            } finally {
                REENTRANT.unlock();
            }
        }, "Lock-Waiter");

        // Thread 7: TIMED_WAITING → sleeping
        Thread t7 = new Thread(() -> {
            try { Thread.sleep(120_000); } catch (InterruptedException e) { Thread.currentThread().interrupt(); }
        }, "Sleepy");

        t1.start(); t2.start(); t3.start(); t4.start(); t5.start(); t6.start(); t7.start();
        Thread.sleep(1_000);

        System.out.println("Thread dump captured. Run: jstack <PID>");
        System.out.println("Or press Enter for programmatic dump...");
        System.in.read();
        System.exit(0);
    }
}
```

### 3.3 Deadlock Detection


`jstack -l <PID>` automatically detects deadlocks and prints them at the end of the dump:

```
Found one Java-level deadlock:
=============================
"Worker-1":
  waiting to lock monitor 0x0000000012345678 (object 0x000000076b8c5d40, a java.lang.Object),
  which is held by "Worker-2"
"Worker-2":
  waiting to lock monitor 0x0000000012345679 (object 0x000000076b8c5d30, a java.lang.Object),
  which is held by "Worker-1"

Java stack information for the threads listed above:
===================================================
"Worker-1":
        at DeadlockCandidate.run(ThreadDumpAnalysis.java:45)
        - waiting to lock <0x000000076b8c5d40> (a java.lang.Object)
        - locked <0x000000076b8c5d30> (a java.lang.Object)
"Worker-2":
        at DeadlockCandidate.run(ThreadDumpAnalysis.java:45)
        - waiting to lock <0x000000076b8c5d30> (a java.lang.Object)
        - locked <0x000000076b8c5d40> (a java.lang.Object)
```

### 3.4 CPU Hotspots from Thread Stacks


Thread dumps capture **where the thread is executing right now**. By taking **multiple thread dumps** (e.g., 5 dumps spaced 3 seconds apart) and finding stack frames that appear in all of them, you locate CPU hotspots.

```java
import java.util.ArrayList;
import java.util.List;

class CpuHotspotDemo {

    public static void main(String[] args) {
        List<String> items = new ArrayList<>();

        // This method will appear in every thread dump
        Thread worker = new Thread(() -> {
            while (true) {
                for (int i = 0; i < 10_000; i++) {
                    items.add("Item-" + i);
                }
                items.clear();
            }
        }, "Hotspot-Worker");

        worker.setDaemon(true);
        worker.start();

        System.out.println("Worker thread started. Take 5 thread dumps with:");
        System.out.println("  for i in 1 2 3 4 5; do jstack " + ProcessHandle.current().pid()
            + " >> dump.txt; sleep 3; done");
        System.out.println("Analyze: grep 'CpuHotspotDemo' dump.txt | sort | uniq -c | sort -nr");

        try { Thread.sleep(120_000); } catch (InterruptedException e) { Thread.currentThread().interrupt(); }
    }
}
```

The heuristic: if a stack frame appears in 4 out of 5 dumps, that method is likely consuming most of the CPU. Tools like **fastthread.io** automate this analysis.

### 3.5 Thread Dump Analyzers (fastthread.io, etc.)


Manual thread dump analysis is tedious. Online analyzers parse and summarize dumps:

| Tool               | Features                                              |
|--------------------|-------------------------------------------------------|
| fastthread.io      | Groups duplicate stacks, highlights deadlocks, computes CPU "cost" |
| jstack.review      | Thread state aggregation, stuck thread detection       |
| ThreadLogic        | Desktop analyzer with pattern recognition              |

```java
// What fastthread.io shows after uploading dump.txt:
//
// THREAD COUNT BY STATE:
//   RUNNABLE:      23
//   BLOCKED:        4   ← high contention!
//   WAITING:        7
//   TIMED_WAITING:  3
//
// TOP BLOCKED THREADS:
//   "http-nio-8080-exec-4" BLOCKED on java.util.HashMap
//     at java.util.HashMap.putVal(HashMap.java:631)
//     - waiting to lock <0x000000076b8c5d40> (a HashMap$Node[])
//
// CPU HOTSPOTS (appearing in 4/5 dumps):
//   com.example.CpuHotspotDemo.lambda$main$0(CPUHotspotDemo.java:15)
//   java.util.ArrayList.add(ArrayList.java:519)
//
// STUCK THREADS (state unchanged across 5 dumps):
//   "AsyncLogger-1" WAITING at jdk.internal.misc.Unsafe.park(Native Method)
```

The typical drill for thread dump analysis:

1. Collect **5 thread dumps** over 15 seconds
2. Upload to fastthread.io (or equivalent)
3. Check **BLOCKED** count → if > 10% of threads, you have contention
4. Check **deadlock** section
5. Check **CPU hotspots** → frames appearing in 80%+ of dumps
6. Check **stuck threads** → same stack in every dump, usually waiting on I/O or locks

---

## 4. GC Analysis

Garbage collection pauses are the single largest source of latency spikes in Java applications. Understanding GC logs is essential.

### 4.1 Enabling GC Logging


```bash
# JDK 8 style
-XX:+PrintGCDetails -XX:+PrintGCDateStamps -Xloggc:gc.log

# JDK 11+ unified logging (recommended)
-Xlog:gc*=info:file=gc.log:utctime,uptimemillis,pID,tags:filecount=5,filesize=20m

# More verbose for detailed analysis
-Xlog:gc*=debug:file=gc-detailed.log:utctime,uptimemillis,pID,tags:filecount=5,filesize=50m

# Minimal but sufficient for GCeasy/GCViewer
-Xlog:gc*:file=gc.log:time,level,tags:filecount=5,filesize=20m
```

### 4.2 Reading GC Logs


```java
// →→→ Application whose GC behavior we will analyze →→→
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

class GcLogExample {

    private static final Random RNG = new Random(42);
    private static final List<byte[]> KEEP_ALIVE = new ArrayList<>();

    public static void main(String[] args) {
        System.out.println("Run with GC logging enabled.");
        System.out.println("VM args: -Xlog:gc*=info:file=gc.log:time,level,tags -Xms256m -Xmx256m -XX:+UseG1GC");

        // Allocate and discard in bursts to trigger GC
        for (int round = 0; round < 20; round++) {
            List<byte[]> batch = new ArrayList<>();
            for (int i = 0; i < 200; i++) {
                batch.add(new byte[100_000]); // 100 KB each = ~20 MB per round
            }
            System.out.printf("Round %d: allocated %d objects, size approx %d MB%n",
                round, batch.size(), (batch.size() * 100_000) / 1_000_000);

            // Keep some objects alive to simulate "promotion"
            if (round % 5 == 0) {
                KEEP_ALIVE.add(new byte[500_000]);
            }
        }
        System.out.println("Done. Check gc.log for pause times.");
    }
}
```

A sample GC log entry (G1GC):

```
[2025-06-12T10:30:15.123+0000] GC(42) Pause Young (Normal) (G1 Evacuation Pause)
   -> 204.123: [GC pause (G1 Evacuation Pause) (young)
   -> 204.123: [Parallel Time: 85.6 ms, GC Workers: 4]
   -> 204.123: [GC Worker Start (ms): Min: 204123.0, Avg: 204123.1, Max: 204123.2, Diff: 0.2]
   -> 204.208: [Ext Root Scanning (ms): 3.2]
   -> 204.208: [Update RS (ms): 12.4]
   -> 204.208: [Scan RS (ms): 8.1]
   -> 204.208: [Code Root Scanning (ms): 1.2]
   -> 204.208: [Object Copy (ms): 55.7]
   -> 204.208: [Termination (ms): 4.8]
   -> 204.208: [GC Worker End (ms): Min: 204208.5, Avg: 204208.6, Max: 204208.7, Diff: 0.2]
   -> 204.208: [GC Worker Other (ms): 0.2]
   -> 204.208: [Clear CT: 0.5 ms]
   -> 204.208: [Other: 3.1 ms]
   -> 204.211: [Eden: 128.0 MB(128.0 MB)->0.0 MB(112.0 MB) Survivors: 16.0 MB->16.0 MB Heap: 196.5 MB(256.0 MB)->68.5 MB(256.0 MB)]
   -> 204.211: [Times: user=0.25 sys=0.01, real=0.09 secs]
```

### 4.3 GCeasy & GCViewer


**GCeasy** (gceasy.io) and **GCViewer** parse GC logs and produce interactive reports:

```java
// What GCeasy reports for the GC log above:

// KEY METRICS
// ─────────────────────────────────────────
// Total Pause Time:           3.42 sec
// Avg Pause Time:             85.5 ms
// Max Pause Time:             420 ms     ← spike!
// Throughput:                 98.3%
// GC Count:                   40
// Allocation Rate:            245 MB/sec ← high
// Promotion Rate:             12 MB/sec
// Avg Live Heap After GC:     85 MB
// Survivor Ratio:             6.25%
// Peak Heap After Full GC:    212 MB

// RECOMMENDATIONS:
//   - Max pause exceeds target: increase -XX:MaxGCPauseMillis=50
//   - High allocation rate: investigate method allocateObjects()
//   - Survivor overflow: try -XX:SurvivorRatio=4 (reduces tenure waste)
//   - Consider ZGC if pause times must stay < 10ms

// KEY GC PHASES PAUSE BREAKDOWN:
//   1. Object Copy:    55.7 ms (65%)  ← moving objects between regions
//   2. Update RS:      12.4 ms (15%)  ← updating remembered sets
//   3. Scan RS:         8.1 ms (9%)   ← scanning remembered sets
//   4. Ext Root Scanning: 3.2 ms (4%)
//   5. Termination:     4.8 ms (6%)
```

### 3.4 Allocation Rate & Promotion Rate


High allocation rate causes frequent young GC. High promotion rate means objects are tenuring prematurely, causing concurrent-mark phases in G1 or full GC in Parallel/Serial collectors.

```java
// Programmatic access to GC metrics via GarbageCollectorMXBean
import java.lang.management.GarbageCollectorMXBean;
import java.lang.management.ManagementFactory;
import java.util.List;

class AllocationRateMonitor {

    public static void main(String[] args) throws Exception {
        List<GarbageCollectorMXBean> gcBeans =
            ManagementFactory.getGarbageCollectorMXBeans();

        System.out.println("GC Beans:");
        for (GarbageCollectorMXBean bean : gcBeans) {
            System.out.printf("  %s: %d collections, %d ms total%n",
                bean.getName(),
                bean.getCollectionCount(),
                bean.getCollectionTime());
        }

        // Start allocation-heavy workload
        System.out.println("\nStarting allocation burst...");
        long startTime = System.nanoTime();
        long startGcTime = totalGcTime(gcBeans);
        long startCount = totalGcCount(gcBeans);

        allocateBurst();

        long endTime = System.nanoTime();
        long endGcTime = totalGcTime(gcBeans);
        long endCount = totalGcCount(gcBeans);

        double elapsedSec = (endTime - startTime) / 1_000_000_000.0;
        System.out.printf("\nWorkload ran for %.2f seconds%n", elapsedSec);
        System.out.printf("GC count: %d → %d (%d collections)%n",
            startCount, endCount, endCount - startCount);
        System.out.printf("GC time: %d ms → %d ms (%d ms total pause)%n",
            startGcTime, endGcTime, endGcTime - startGcTime);
        System.out.printf("Throughput: %.1f%%%n",
            (1.0 - (endGcTime - startGcTime) / (elapsedSec * 1000.0)) * 100.0);
    }

    static void allocateBurst() {
        List<byte[]> garbage = new java.util.ArrayList<>();
        for (int i = 0; i < 5_000; i++) {
            garbage.add(new byte[10_000]);
            if (i % 100 == 0) {
                // Let some objects escape
                System.out.print(".");
            }
        }
        System.out.println();
    }

    static long totalGcTime(List<GarbageCollectorMXBean> beans) {
        return beans.stream().mapToLong(GarbageCollectorMXBean::getCollectionTime).sum();
    }

    static long totalGcCount(List<GarbageCollectorMXBean> beans) {
        return beans.stream().mapToLong(GarbageCollectorMXBean::getCollectionCount).sum();
    }
}
```

### 3.5 GC Frequency Tuning


The relationship between allocation rate, heap size, and GC frequency:

```
Young GC frequency = allocation rate / young generation size

Example:
  Allocation rate = 500 MB/sec
  Young gen = 100 MB
  → Young GC every 200 ms (5 pauses/sec)

Fix: Increase young gen or reduce allocation rate.
```

```java
import java.util.ArrayList;
import java.util.List;

class GcFrequencyTuning {

    public static void main(String[] args) {
        // Simulate application with variable allocation rates
        // Use -Xms1g -Xmx1g -XX:+UseG1GC -Xlog:gc*:file=gc-tuning.log:time

        List<byte[]> sessionData = new ArrayList<>();

        // Phase 1: Low allocation
        System.out.println("Phase 1: Low allocation...");
        for (int i = 0; i < 1_000; i++) {
            sessionData.add(new byte[1024]); // 1 KB each
        }
        sessionData.clear();

        // Phase 2: High allocation burst
        System.out.println("Phase 2: High allocation burst...");
        List<byte[]> burst = new ArrayList<>();
        for (int i = 0; i < 50_000; i++) {
            burst.add(new byte[10_000]); // 500 MB total
        }

        // Phase 3: Retain many objects to cause promotion
        System.out.println("Phase 3: Retaining objects...");
        List<byte[]> retained = new ArrayList<>();
        for (int i = 0; i < 5_000; i++) {
            retained.add(new byte[10_000]); // 50 MB retained
        }

        System.out.println("Check gc-tuning.log for pause frequency changes between phases");
        try { Thread.sleep(30_000); } catch (InterruptedException e) { Thread.currentThread().interrupt(); }
    }
}
```

**Key tuning knobs** for GC frequency:

| Flag                  | Effect                                     |
|-----------------------|--------------------------------------------|
| `-Xms` / `-Xmx`       | Total heap size. Larger heap = fewer GCs but longer pauses. |
| `-XX:NewRatio`        | Ratio of old/young. Default 2 (old:young = 2:1). Increase for more young space. |
| `-XX:SurvivorRatio`   | Ratio of Eden/Survivor. Default 8 (Eden:S0:S1 = 8:1:1). |
| `-XX:MaxGCPauseMillis`| Target max pause (G1GC). Default 200 ms. |
| `-XX:ParallelGCThreads`| Number of threads for parallel phases. |
| `-XX:ConcGCThreads`   | Number of threads for concurrent phases (G1, ZGC). |

---

## 5. JMH Benchmarking

Java Microbenchmark Harness (JMH) is the standard framework for writing correct microbenchmarks. Without JMH, the JIT compiler optimizations (like dead code elimination, loop unrolling, constant folding) produce misleading results.

### 5.1 Basic JMH Setup


Add to `pom.xml`:

```xml
<dependency>
    <groupId>org.openjdk.jmh</groupId>
    <artifactId>jmh-core</artifactId>
    <version>1.37</version>
    <scope>test</scope>
</dependency>
<dependency>
    <groupId>org.openjdk.jmh</groupId>
    <artifactId>jmh-generator-annprocess</artifactId>
    <version>1.37</version>
    <scope>test</scope>
</dependency>
```

Or use the Maven archetype:

```bash
mvn archetype:generate \
  -DinteractiveMode=false \
  -DarchetypeGroupId=org.openjdk.jmh \
  -DarchetypeArtifactId=jmh-java-benchmark-archetype \
  -DgroupId=com.example \
  -DartifactId=benchmarks \
  -Dversion=1.0
```

### 5.2 Your First @Benchmark


```java
import org.openjdk.jmh.annotations.*;
import org.openjdk.jmh.infra.Blackhole;
import org.openjdk.jmh.runner.Runner;
import org.openjdk.jmh.runner.options.Options;
import org.openjdk.jmh.runner.options.OptionsBuilder;
import java.util.concurrent.TimeUnit;

@BenchmarkMode(Mode.Throughput)
@OutputTimeUnit(TimeUnit.SECONDS)
@State(Scope.Thread)
public class StringConcatBenchmark {

    private String a = "Hello";
    private String b = "World";
    private String c = "Java";
    private String d = "JMH";
    private int iterations = 1000;

    // →→→ BAD: String concatenation in loop →→→
    @Benchmark
    public String stringConcat(Blackhole bh) {
        String result = "";
        for (int i = 0; i < iterations; i++) {
            result += a + b + c;  // creates new StringBuilder each iteration!
        }
        return result;
    }

    // →→→ GOOD: explicit StringBuilder →→→
    @Benchmark
    public String stringBuilder(Blackhole bh) {
        StringBuilder sb = new StringBuilder(iterations * 30);
        for (int i = 0; i < iterations; i++) {
            sb.append(a).append(b).append(c);
        }
        return sb.toString();
    }

    // →→→ GOOD: single StringBuilder per call →→→
    @Benchmark
    public String stringBuffer(Blackhole bh) {
        StringBuffer sb = new StringBuffer(iterations * 30);
        for (int i = 0; i < iterations; i++) {
            sb.append(a).append(b).append(c);
        }
        return sb.toString();
    }

    public static void main(String[] args) throws Exception {
        Options opt = new OptionsBuilder()
            .include(StringConcatBenchmark.class.getSimpleName())
            .warmupIterations(3)
            .measurementIterations(5)
            .forks(2)
            .build();
        new Runner(opt).run();
    }
}
```

### 5.3 @BenchmarkMode


| Mode                     | What It Measures                        | Use Case                          |
|--------------------------|----------------------------------------|-----------------------------------|
| `Mode.Throughput`        | Operations per unit time               | Capacity planning, comparing impls |
| `Mode.AverageTime`       | Average time per operation             | Latency-sensitive code            |
| `Mode.SampleTime`        | Distribution of times (max, p99, etc.) | Latency outliers                  |
| `Mode.SingleShotTime`    | Time of a single invocation            | Cold-start benchmarks             |
| `Mode.All`               | All of the above                       | Comprehensive analysis            |

```java
@BenchmarkMode(Mode.SampleTime)
@OutputTimeUnit(TimeUnit.MICROSECONDS)
@State(Scope.Thread)
public class ListBenchmark {

    @Param({"10", "100", "1000"})
    public int size;

    private List<Integer> arrayList;
    private List<Integer> linkedList;

    @Setup(Level.Trial)
    public void setup() {
        arrayList = new java.util.ArrayList<>();
        linkedList = new java.util.LinkedList<>();
        for (int i = 0; i < size; i++) {
            arrayList.add(i);
            linkedList.add(i);
        }
    }

    @Benchmark
    public int arrayListGet() {
        return arrayList.get(size / 2); // O(1) → fast
    }

    @Benchmark
    public int linkedListGet() {
        return linkedList.get(size / 2); // O(n) → slow
    }

    public static void main(String[] args) throws Exception {
        Options opt = new OptionsBuilder()
            .include(ListBenchmark.class.getSimpleName())
            .warmupIterations(3)
            .measurementIterations(5)
            .forks(1)
            .build();
        new Runner(opt).run();
    }
}
```

### 5.4 @State


`@State` defines scope of benchmark state:

| Scope              | Shared Across                          | Thread Safety           |
|--------------------|----------------------------------------|-------------------------|
| `Scope.Thread`     | One instance per benchmark thread      | No synchronization needed |
| `Scope.Benchmark`  | Shared across all threads              | Must be thread-safe     |
| `Scope.Group`      | Shared within a thread group           | Must be thread-safe     |

```java
import org.openjdk.jmh.annotations.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

@State(Scope.Benchmark) // Shared across all threads → need thread safety
public class SharedStateBenchmark {

    // Thread-safe: ConcurrentHashMap handles concurrent access
    private final ConcurrentHashMap<String, AtomicLong> counter = new ConcurrentHashMap<>();

    @Setup(Level.Trial)
    public void setup() {
        counter.clear();
        counter.put("hits", new AtomicLong(0));
    }

    @Benchmark
    @Group("concurrent")
    @GroupThreads(4)
    public long increment() {
        return counter.get("hits").incrementAndGet();
    }

    @Benchmark
    @Group("concurrent")
    @GroupThreads(1)
    public long read() {
        return counter.get("hits").get();
    }
}
```

### 5.5 @Warmup, @Measurement, @Fork


```java
@BenchmarkMode(Mode.AverageTime)
@OutputTimeUnit(TimeUnit.NANOSECONDS)
@State(Scope.Thread)
public class MathBenchmark {

    @Warmup(iterations = 5, time = 1, timeUnit = TimeUnit.SECONDS)
    @Measurement(iterations = 10, time = 500, timeUnit = TimeUnit.MILLISECONDS)
    @Fork(value = 3, warmups = 1)
    @Benchmark
    public double sqrt() {
        return Math.sqrt(12345.6789);
    }

    @Benchmark
    @Fork(value = 1)
    @Warmup(iterations = 2)
    @Measurement(iterations = 3)
    public double log() {
        return Math.log(12345.6789);
    }

    public static void main(String[] args) throws Exception {
        Options opt = new OptionsBuilder()
            .include(MathBenchmark.class.getSimpleName())
            .build();
        new Runner(opt).run();
    }
}
```

**Guidelines** for warmup/measurement:

- **Warmup**: 5--10 iterations of 1--10 seconds each. Watch the warmup graph → steady state should be reached before measurement begins.
- **Measurement**: 5--10 iterations of 1--10 seconds. More iterations reduce noise.
- **Forks**: 3--5 forks to account for JVM warmup randomization. Each fork runs the benchmark in a fresh JVM.
- **Total time**: 3 forks Ã— (5 warmup + 5 measurement) Ã— 2 sec = 60 seconds minimum per benchmark method.

### 5.6 Blackhole


`Blackhole.consumeCPU()` prevents the JIT from optimizing away a computation. Use it when you want to measure the cost of generating a value but don't want the JIT to eliminate the call because the result is unused.

```java
import org.openjdk.jmh.infra.Blackhole;

@BenchmarkMode(Mode.AverageTime)
@OutputTimeUnit(TimeUnit.NANOSECONDS)
@State(Scope.Thread)
public class BlackholeExample {

    private int a = 17;
    private int b = 42;

    // →→→ WRONG: JIT sees result is unused, eliminates computation →→→
    @Benchmark
    public void wrong() {
        a + b;  // Dead Code Elimination → this becomes a no-op!
    }

    // →→→ CORRECT: Blackhole consumes the result →→→
    @Benchmark
    public void correct(Blackhole bh) {
        bh.consume(a + b);
    }

    // →→→ Consume multiple results →→→
    @Benchmark
    public void multipleResults(Blackhole bh) {
        bh.consume(a * b);
        bh.consume(a + b);
        bh.consume(a - b);
    }

    // →→→ ConsumeCPU for measuring overhead →→→
    @Benchmark
    public void consumeCpu(Blackhole bh) {
        // Consumes approximately 1000 cycles of CPU work
        // Useful as a "noise floor" measurement
        bh.consumeCPU(1000);
    }

    public static void main(String[] args) throws Exception {
        Options opt = new OptionsBuilder()
            .include(BlackholeExample.class.getSimpleName())
            .warmupIterations(3)
            .measurementIterations(5)
            .forks(1)
            .build();
        new Runner(opt).run();
    }
}
```

### 5.7 Compiler Control


JMH provides `@CompilerControl` to influence JIT decisions:

```java
import org.openjdk.jmh.annotations.*;
import org.openjdk.jmh.infra.Blackhole;

@State(Scope.Thread)
public class CompilerControlExample {

    // →→→ DONT_INLINE: force the call to NOT be inlined →→→
    @Benchmark
    @CompilerControl(CompilerControl.Mode.DONT_INLINE)
    public void measureWithExclude(Blackhole bh) {
        bh.consume(compute());
    }

    // →→→ INLINE: force the call to be inlined →→→
    @Benchmark
    @CompilerControl(CompilerControl.Mode.INLINE)
    public void measureWithInline(Blackhole bh) {
        bh.consume(compute());
    }

    // →→→ EXCLUDE: never JIT compile this method →→→
    @Benchmark
    @CompilerControl(CompilerControl.Mode.EXCLUDE)
    public void measureInterpreted(Blackhole bh) {
        bh.consume(compute());
    }

    private int compute() {
        int sum = 0;
        for (int i = 0; i < 100; i++) {
            sum += i * i;
        }
        return sum;
    }

    public static void main(String[] args) throws Exception {
        Options opt = new OptionsBuilder()
            .include(CompilerControlExample.class.getSimpleName())
            .warmupIterations(3)
            .measurementIterations(3)
            .forks(1)
            .jvmArgs("-XX:+PrintCompilation")
            .build();
        new Runner(opt).run();
    }
}
```

### 5.8 Profilers in JMH


JMH can attach profilers during the benchmark run:

```bash
# Run with built-in profilers
java -jar benchmarks.jar -prof gc          # GC behavior per benchmark
java -jar benchmarks.jar -prof stack       # Stack sampling (like async-profiler)
java -jar benchmarks.jar -prof perf        # Linux perf events
java -jar benchmarks.jar -prof perfasm     # Assembly level profiling
java -jar benchmarks.jar -prof cl          # Classloader profiling
java -jar benchmarks.jar -prof comp        # JIT compiler profiling
java -jar benchmarks.jar -prof dtraceasm   # DTrace assembly
```

```java
// JVM args for profiling can be added via @Fork jvmArgs
@Fork(value = 1, jvmArgs = {
    "-XX:+PrintCompilation",
    "-XX:+UnlockDiagnosticVMOptions",
    "-XX:+PrintInlining"
})
@Benchmark
public void profiledBenchmark(Blackhole bh) {
    bh.consume(Math.pow(2.0, 10.0));
}
```

### 5.9 Proper Benchmark Writing Rules


```java
import org.openjdk.jmh.annotations.*;
import org.openjdk.jmh.infra.Blackhole;
import java.util.concurrent.TimeUnit;

@BenchmarkMode(Mode.AverageTime)
@OutputTimeUnit(TimeUnit.NANOSECONDS)
@State(Scope.Thread)
public class ProperBenchmarkRules {

    // RULE 1: return value or consume in Blackhole
    @Benchmark
    public int rule1_returnValue() {
        return 1 + 1;
    }

    // RULE 2: setup state in @Setup, not in benchmark method
    private int[] data;

    @Setup
    public void rule2_setup() {
        data = new int[1_000_000];
        for (int i = 0; i < data.length; i++) {
            data[i] = i;
        }
    }

    @Benchmark
    public long rule2_sumArray() {
        long sum = 0;
        for (int v : data) sum += v;
        return sum;
    }

    // RULE 3: avoid constant folding → use fields, not literals
    private final int multiplier = 42;

    @Benchmark
    public int rule3_dynamicInput(Blackhole bh) {
        // multiplier is NOT a compile-time constant for the JIT across forks
        return data[multiplier] * multiplier;
    }

    // RULE 4: use @Param for size scaling
    @Param({"100", "1000", "10000"})
    public int arraySize;

    private int[] sizedArray;

    @Setup
    public void rule4_setupParams() {
        sizedArray = new int[arraySize];
        for (int i = 0; i < sizedArray.length; i++) {
            sizedArray[i] = i;
        }
    }

    @Benchmark
    public double rule4_average() {
        long sum = 0;
        for (int v : sizedArray) sum += v;
        return (double) sum / sizedArray.length;
    }

    // RULE 5: include a baseline method
    @Benchmark
    public void rule5_baseline(Blackhole bh) {
        // Measures the cost of the benchmark harness itself
        bh.consume(0);
    }

    // RULE 6: test both competitors fairly → same setup
    @Benchmark
    public int rule6_hashMapGet() {
        return 0; // would look up in HashMap in real test
    }

    @Benchmark
    public int rule6_enumMapGet() {
        return 0; // would look up in EnumMap in real test
    }

    public static void main(String[] args) throws Exception {
        Options opt = new OptionsBuilder()
            .include(ProperBenchmarkRules.class.getSimpleName())
            .warmupIterations(3)
            .measurementIterations(5)
            .forks(2)
            .build();
        new Runner(opt).run();
    }
}
```

**Critical rules summary:**

1. **Never write loops inside a benchmark** to get more "iterations". That's what JMH's `@Measurement` does.
2. **Always return a value or consume via Blackhole**. If you don't, DCE removes your entire benchmark.
3. **Use `@State` and `@Setup`** to prepare data. Never prepare data inside the benchmark method.
4. **Use `@Param`** for size or configuration → not hardcoded values.
5. **Always include a baseline**. `bh.consume(0)` tells you the framework overhead.
6. **Run with multiple forks**. A single JVM fork may have already JIT-compiled code, hiding warmup issues.
7. **Check the JMH output for "HOT" methods** and ensure they are not compiled on first invocation.

---

## 6. Performance Anti-Patterns

This section catalogs the most common performance problems in Java and Spring Boot applications.

### 6.1 Unnecessary Object Creation


```java
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;
import java.util.stream.IntStream;

@BenchmarkMode(Mode.Throughput)
@OutputTimeUnit(TimeUnit.SECONDS)
@State(Scope.Thread)
public class ObjectCreationAntiPatterns {

    // →→→ ANTI-PATTERN 1: Auto-boxing in loops →→→
    @Benchmark
    public long autoBoxing() {
        Long sum = 0L;              // Long (boxed) → each += creates a new Long
        for (int i = 0; i < 1_000_000; i++) {
            sum += i;               // i is auto-boxed, sum is unboxed, result re-boxed
        }
        return sum;
    }

    @Benchmark
    public long primitiveSum() {
        long sum = 0L;              // primitive long → no allocation
        for (int i = 0; i < 1_000_000; i++) {
            sum += i;
        }
        return sum;
    }

    // →→→ ANTI-PATTERN 2: String concat in loop →→→
    @Benchmark
    public String stringConcatInLoop() {
        String s = "";
        for (int i = 0; i < 1000; i++) {
            s += i;                 // Each iteration: new StringBuilder(), append, toString()
        }
        return s;
    }

    @Benchmark
    public String stringBuilderInLoop() {
        StringBuilder sb = new StringBuilder(5000);
        for (int i = 0; i < 1000; i++) {
            sb.append(i);
        }
        return sb.toString();
    }

    // →→→ ANTI-PATTERN 3: Creating expensive objects in hot path →→→
    private static final java.util.regex.Pattern EMAIL_PATTERN =
        java.util.regex.Pattern.compile("^[A-Za-z0-9+_.-]+@(.+)$");

    @Benchmark
    public boolean patternCompiledEachTime() {
        // Pattern.compile() is expensive → do this once as static final
        return java.util.regex.Pattern
            .compile("^[A-Za-z0-9+_.-]+@(.+)$")
            .matcher("test@example.com")
            .matches();
    }

    @Benchmark
    public boolean patternReused() {
        return EMAIL_PATTERN.matcher("test@example.com").matches();
    }

    // →→→ ANTI-PATTERN 4: Stream overhead for simple operations →→→
    @Benchmark
    public int streamMax() {
        return IntStream.range(0, 1000)
            .filter(i -> i % 2 == 0)
            .max()
            .orElse(-1);
    }

    @Benchmark
    public int plainLoopMax() {
        int max = -1;
        for (int i = 0; i < 1000; i++) {
            if (i % 2 == 0 && i > max) {
                max = i;
            }
        }
        return max;
    }
}
```

### 6.2 Excessive Synchronization


```java
import java.util.*;
import java.util.concurrent.*;
import java.util.concurrent.atomic.*;
import java.util.stream.*;

@BenchmarkMode(Mode.Throughput)
@OutputTimeUnit(TimeUnit.SECONDS)
@State(Scope.Benchmark)
public class SynchronizationAntiPatterns {

    // →→→ ANTI-PATTERN: Overly coarse synchronization →→→
    private final Map<String, int[]> synchronizedMap = new HashMap<>();

    public synchronized void addSync(String key, int[] value) {
        // Entire method synchronized → blocks all readers too
        synchronizedMap.put(key, value);
    }

    public synchronized int[] getSync(String key) {
        return synchronizedMap.get(key);
    }

    @Benchmark
    public void coarseSyncWrite() {
        addSync("key-" + ThreadLocalRandom.current().nextInt(100), new int[10]);
    }

    // →→→ BETTER: ConcurrentHashMap →→→
    private final Map<String, int[]> concurrentMap = new ConcurrentHashMap<>();

    @Benchmark
    public void concurrentMapWrite() {
        concurrentMap.put("key-" + ThreadLocalRandom.current().nextInt(100), new int[10]);
    }

    // →→→ ANTI-PATTERN: Synchronized when atomic is enough →→→
    private int syncCounter = 0;

    public synchronized int incrementSync() {
        return ++syncCounter;
    }

    @Benchmark
    public int synchronizedCounter() {
        return incrementSync();
    }

    // →→→ BETTER: AtomicInteger →→→
    private final AtomicInteger atomicCounter = new AtomicInteger(0);

    @Benchmark
    public int atomicCounter() {
        return atomicCounter.incrementAndGet();
    }

    // →→→ ANTI-PATTERN: Synchronized wrapper on single-threaded code →→→
    private final List<String> syncList = Collections.synchronizedList(new ArrayList<>());

    @Benchmark
    public void synchronizedList() {
        syncList.add("item");
    }

    // →→→ BETTER: Plain ArrayList when single-threaded →→→
    private final List<String> plainList = new ArrayList<>();

    @Benchmark
    public void plainList() {
        plainList.add("item");
    }
}
```

### 6.3 Connection Pool Leaks


```java
import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

class ConnectionPoolLeak {

    public static void main(String[] args) throws Exception {
        HikariConfig config = new HikariConfig();
        config.setJdbcUrl("jdbc:h2:mem:leakdb");
        config.setMaximumPoolSize(10);
        config.setMinimumIdle(2);
        config.setConnectionTimeout(5000);
        config.setLeakDetectionThreshold(10_000); // Logs warning if connection is held >10s

        HikariDataSource ds = new HikariDataSource(config);

        // Setup table
        try (Connection c = ds.getConnection();
             PreparedStatement ps = c.prepareStatement(
                 "CREATE TABLE IF NOT EXISTS users (id INT PRIMARY KEY, name VARCHAR(100))")) {
            ps.execute();
        }

        System.out.println("Connection pool size: " + ds.getMaximumPoolSize());
        System.out.println("Leak detection threshold: " + ds.getLeakDetectionThreshold() + " ms");

        // →→→ Simulate connection leak →→→
        ExecutorService executor = Executors.newFixedThreadPool(15);
        for (int i = 0; i < 50; i++) {
            final int userId = i;
            executor.submit(() -> {
                try {
                    // Get connection but NEVER return it
                    Connection conn = ds.getConnection();
                    PreparedStatement ps = conn.prepareStatement(
                        "SELECT COUNT(*) FROM users WHERE id = ?");
                    ps.setInt(1, userId);
                    ResultSet rs = ps.executeQuery();
                    if (rs.next()) {
                        System.out.printf("User %d count: %d%n", userId, rs.getInt(1));
                    }
                    // conn.close() NOT called → leak!
                    // ps.close() NOT called
                    // rs.close() NOT called
                } catch (Exception e) {
                    System.err.println("Error: " + e.getMessage());
                }
            });
        }

        executor.shutdown();
        executor.awaitTermination(5, TimeUnit.SECONDS);

        System.out.println("\n--- Pool Status ---");
        System.out.println("Active connections: " + ds.getHikariPoolMXBean().getActiveConnections());
        System.out.println("Idle connections: " + ds.getHikariPoolMXBean().getIdleConnections());
        System.out.println("Total connections: " + ds.getHikariPoolMXBean().getTotalConnections());
        System.out.println("Threads waiting: " + ds.getHikariPoolMXBean().getThreadsAwaitingConnection());

        // HikariCP's leak detection log:
        // "Connection leak detection triggered: connection com.zaxxer.hikari.pool.ProxyConnection@xxx
        //  has been active for 10003 ms, stack trace: ..."

        ds.close();
    }
}
```

### 6.4 N+1 Queries (Hibernate)


```java
import jakarta.persistence.*;
import java.util.List;

// →→→ ENTITY DEFINITIONS →→→
@Entity
@Table(name = "authors")
class Author {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @OneToMany(mappedBy = "author", fetch = FetchType.LAZY)
    private List<Book> books;

    public Author() {}
    public Author(String name) { this.name = name; }

    public Long getId() { return id; }
    public String getName() { return name; }
    public List<Book> getBooks() { return books; }
}

@Entity
@Table(name = "books")
class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "author_id")
    private Author author;

    public Book() {}
    public Book(String title, Author author) {
        this.title = title;
        this.author = author;
    }

    public Long getId() { return id; }
    public String getTitle() { return title; }
    public Author getAuthor() { return author; }
}

// →→→ N+1 DEMONSTRATION →→→
@org.springframework.stereotype.Service
class BookService {

    private final AuthorRepository authorRepository;
    private final BookRepository bookRepository;

    public BookService(AuthorRepository authorRepository, BookRepository bookRepository) {
        this.authorRepository = authorRepository;
        this.bookRepository = bookRepository;
    }

    // →→→ N+1: 1 query for authors + N queries for books →→→
    @Transactional(readOnly = true)
    public void printAuthorBooksNPlus1() {
        List<Author> authors = authorRepository.findAll(); // 1 query

        for (Author author : authors) {
            // Each iteration triggers a lazy load: N queries!
            List<Book> books = author.getBooks();
            System.out.printf("%s wrote %d books%n", author.getName(), books.size());
        }
        // Total: 1 + N queries → disastrous with 1000 authors
    }

    // →→→ FIX: JOIN FETCH →→→
    @Query("SELECT DISTINCT a FROM Author a LEFT JOIN FETCH a.books")
    List<Author> findAllWithBooks() {
        return authorRepository.findAllWithBooks();
    }

    @Transactional(readOnly = true)
    public void printAuthorBooksJoinFetch() {
        List<Author> authors = findAllWithBooks(); // 1 query with JOIN
        for (Author author : authors) {
            // books already loaded → no additional queries
            System.out.printf("%s wrote %d books%n", author.getName(), author.getBooks().size());
        }
        // Total: 1 query
    }

    // →→→ FIX: @EntityGraph →→→
    @EntityGraph(attributePaths = "books")
    @Query("SELECT a FROM Author a")
    List<Author> findAllWithEntityGraph();

    // →→→ FIX: batch fetching →→→
    // application.properties:
    // spring.jpa.properties.hibernate.default_batch_fetch_size=20
}

interface AuthorRepository extends org.springframework.data.jpa.repository.JpaRepository<Author, Long> {
    @Query("SELECT DISTINCT a FROM Author a LEFT JOIN FETCH a.books")
    List<Author> findAllWithBooks();

    @EntityGraph(attributePaths = "books")
    @Query("SELECT a FROM Author a")
    List<Author> findAllWithEntityGraph();
}

interface BookRepository extends org.springframework.data.jpa.repository.JpaRepository<Book, Long> {}
```

### 6.5 Memory Leaks


```java
import java.util.*;
import java.util.concurrent.*;

// →→→ LEAK 1: Static collection →→→
class StaticCollectionLeak {
    // Never cleared → grows indefinitely
    private static final List<byte[]> GLOBAL_CACHE = new ArrayList<>();

    public void processRequest(byte[] data) {
        GLOBAL_CACHE.add(data); // accumulates forever
    }
}

// →→→ LEAK 2: Unregistered listener/callback →→→
interface ChangeListener {
    void onChange();
}

class EventSource {
    private final List<ChangeListener> listeners = new CopyOnWriteArrayList<>();

    public void register(ChangeListener listener) {
        listeners.add(listener);
    }

    public void unregister(ChangeListener listener) {
        listeners.remove(listener); // never called → leak
    }
}

class LeakyComponent {
    private final EventSource eventSource;

    LeakyComponent(EventSource source) {
        this.eventSource = source;
        // Registers a listener but never unregisters
        eventSource.register(() -> System.out.println("Changed"));
    }
}

// →→→ LEAK 3: ThreadLocal not cleared →→→
class ThreadLocalLeakExample {
    private static final ThreadLocal<Map<String, Object>> REQUEST_CONTEXT =
        ThreadLocal.withInitial(HashMap::new);

    public static void handleRequest(String requestId) {
        Map<String, Object> ctx = REQUEST_CONTEXT.get();
        ctx.put("requestId", requestId);
        ctx.put("largePayload", new byte[100_000]); // accumulates

        // Process request...

        // BUG: never calls REQUEST_CONTEXT.remove()
        // When thread returns to pool, context survives
    }
}

// →→→ LEAK 4: HashMap with mutable keys →→→
class MutableKeyLeak {
    public static void main(String[] args) {
        Map<MutableKey, String> map = new HashMap<>();

        MutableKey key = new MutableKey("original");
        map.put(key, "value1");

        // Mutate the key after insertion
        key.setName("modified");

        // Now we CANNOT retrieve the value
        System.out.println(map.get(key)); // null

        // And we CANNOT remove it → the bucket is wrong
        map.remove(key);

        // The entry is leaked → unreachable but still in the map
        System.out.println("Map size: " + map.size()); // still 1!
    }
}

class MutableKey {
    private String name;

    MutableKey(String name) { this.name = name; }
    void setName(String name) { this.name = name; }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        MutableKey that = (MutableKey) o;
        return Objects.equals(name, that.name);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(name);
    }
}

// →→→ LEAK 5: Inner class holding outer reference →→→
class OuterWithLeak {
    private final byte[] expensiveData = new byte[1_000_000];

    class Inner {
        void doSomething() {
            System.out.println("Inner: " + expensiveData.length);
            // Inner holds implicit reference to Outer.
            // If Inner is passed around, Outer (and its 1 MB data) cannot be GC'd.
        }
    }

    public Inner createInner() {
        return new Inner();
    }
}

// →→→ FIXES →→→
class LeakPrevention {

    // Fix 1: Use WeakHashMap for caches
    private final Map<Object, byte[]> weakCache = new WeakHashMap<>();

    // Fix 2: Bounded cache with eviction
    private final Map<String, byte[]> boundedCache =
        new LinkedHashMap<>() {
            @Override
            protected boolean removeEldestEntry(Map.Entry<String, byte[]> eldest) {
                return size() > 1000; // auto-evict oldest when > 1000 entries
            }
        };

    // Fix 3: Always clear ThreadLocal
    public void safeHandleRequest() {
        try {
            Map<String, Object> ctx = RequestContextHolder.get();
            // use context...
        } finally {
            RequestContextHolder.clear(); // always called
        }
    }

    // Fix 4: Use static inner class (no outer reference)
    static class SafeInner {
        void doSomething() {
            // No implicit reference to outer class
        }
    }
}

class RequestContextHolder {
    private static final ThreadLocal<Map<String, Object>> CONTEXT =
        ThreadLocal.withInitial(HashMap::new);

    public static Map<String, Object> get() { return CONTEXT.get(); }
    public static void clear() { CONTEXT.remove(); }
}
```

---

## 7. Code Optimization

Understanding JIT compiler behavior helps you write code that the JVM can optimize aggressively.

### 7.1 JIT Warmup


The JVM starts interpreting bytecode. Methods that execute frequently (the **hot** threshold, default 10,000 invocations) are compiled to native code by the C1 compiler. Methods that are even hotter are recompiled by C2 with more aggressive optimizations.

```java
// →→→ Observing JIT warmup →→→
// Run with: -XX:+PrintCompilation -XX:+UnlockDiagnosticVMOptions

class JitWarmupDemo {

    // Method that becomes hot after ~10K invocations
    static long compute(int iterations) {
        long sum = 0;
        for (int i = 0; i < iterations; i++) {
            sum += i * i;
        }
        return sum;
    }

    public static void main(String[] args) {
        System.out.println("Warming up...");

        // Phase 1: Interpreted (first few thousand calls)
        for (int i = 0; i < 50_000; i++) {
            compute(100);
        }

        System.out.println("Warmup complete. Method should be JIT-compiled by now.");

        // Phase 2: Fully compiled
        long start = System.nanoTime();
        long result = compute(100);
        long end = System.nanoTime();

        System.out.printf("Result: %d, Time: %.2f Âµs%n", result, (end - start) / 1000.0);

        // Repeat to see stable timings after compilation
        for (int i = 0; i < 10; i++) {
            start = System.nanoTime();
            compute(100);
            end = System.nanoTime();
            System.out.printf("Run %d: %.2f Âµs%n", i, (end - start) / 1000.0);
        }
    }
}
```

**Warmup strategies**:

```java
import java.util.concurrent.CountDownLatch;

class WarmupStrategies {

    // Strategy 1: Explicit warmup in main() before benchmark
    static class ExplicitWarmup {
        static void warmup() {
            for (int i = 0; i < 20_000; i++) {
                compute(i);
            }
        }
        static int compute(int x) {
            return x * x + 2 * x + 1;
        }
    }

    // Strategy 2: Warmup on a background thread during startup
    static class BackgroundWarmup {
        static volatile boolean warm = false;

        static void startWarmup() {
            Thread warmupThread = new Thread(() -> {
                for (int i = 0; i < 50_000; i++) {
                    Math.sin(i * 0.001);
                    Math.cos(i * 0.001);
                }
                warm = true;
            }, "warmup-thread");
            warmupThread.setDaemon(true);
            warmupThread.start();
        }
    }

    // Strategy 3: Use @Warmup in JMH (recommended)
    // JMH handles this automatically → it runs warmup iterations
    // and verifies that JIT compilation has stabilized before
    // recording measurements.

    public static void main(String[] args) throws Exception {
        ExplicitWarmup.warmup();
        int result = ExplicitWarmup.compute(5);
        System.out.println("Explicit warmup result: " + result);

        BackgroundWarmup.startWarmup();
        Thread.sleep(2000);
        System.out.println("Background warmup done: " + BackgroundWarmup.warm);
    }
}
```

### 7.2 Inlining


Inlining replaces a method call with the method body, eliminating call overhead and enabling further optimizations. The JIT inlines aggressively → methods smaller than 325 bytes of bytecode (default `-XX:MaxInlineSize=325`) and call sites with high frequency.

```java
// →→→ Methods the JIT will inline →→→
class InlineExample {

    // Small, hot: WILL be inlined (13 bytes bytecode)
    static int add(int a, int b) {
        return a + b;
    }

    // Larger but still hot: WILL be inlined if MaxInlineSize allows
    static int compute(int base) {
        int result = 0;
        for (int i = 0; i < 10; i++) {
            result += base * i;
        }
        return result;
    }

    // →→→ Methods the JIT will NOT inline →→→
    // Large method: will NOT be inlined by default
    static int largeMethod(int input) {
        int a = input * 2;
        int b = a + 10;
        int c = b / 3;
        int d = c * c;
        int e = d - a;
        int f = e + b;
        int g = f * input;
        int h = g / 2;
        int i = h + a;
        int j = i - b;
        int k = j * c;
        int l = k / 4;
        int m = l + d;
        // ... imagine 100+ more lines ...
        return m;
    }

    // Recursive: inlining is limited to a few levels
    static int factorial(int n) {
        if (n <= 1) return 1;
        return n * factorial(n - 1); // inlined up to -XX:MaxInlineLevel=9 depth
    }

    public static void main(String[] args) {
        // Run with: -XX:+PrintInlining -XX:+UnlockDiagnosticVMOptions
        int sum = 0;
        for (int i = 0; i < 100_000; i++) {
            sum += add(i, 1);
        }
        System.out.println("Sum: " + sum);

        // The PrintInlining output shows:
        //   InlineExample.add (3 bytes)   inline (hot)
        //   InlineExample.compute (18 bytes)   inline (hot)
        //   InlineExample.largeMethod (200 bytes)   too big
        //   InlineExample.factorial (N bytes)   recursive inlining is too deep
    }
}
```

### 7.3 Dead Code Elimination (DCE)


The JIT can eliminate code whose results are never used. This is why JMH uses `Blackhole`.

```java
class DeadCodeElimination {

    public static void main(String[] args) {
        long start = System.nanoTime();

        // This computation will be ELIMINATED entirely
        // because the result is never used.
        long result = 0;
        for (int i = 0; i < 100_000_000; i++) {
            result += i * i;
        }

        long end = System.nanoTime();

        // The loop above may execute in 1-2 ms because
        // the JIT can prove 'result' is never used and removes it!
        System.out.printf("Time: %.2f ms%n", (end - start) / 1_000_000.0);

        // →→→ Now compare: prevent DCE by using result →→→
        long start2 = System.nanoTime();

        long result2 = 0;
        for (int i = 0; i < 100_000_000; i++) {
            result2 += i * i;
        }
        // If we print the result, DCE is prevented:
        System.out.println("Result2: " + result2);

        long end2 = System.nanoTime();
        System.out.printf("Time with usage: %.2f ms%n", (end2 - start2) / 1_000_000.0);
    }
}
```

**How DCE applies to Spring Boot**:

```java
import org.springframework.stereotype.Service;

@Service
class DceAwareService {

    // If this bean is never injected anywhere,
    // Spring can still instantiate it for @Autowired injection points.
    // But if there is NO injection point at all,
    // the AOT engine eliminates it during AOT processing.

    private final ExpensiveDependency expensiveDep;

    public DceAwareService(ExpensiveDependency expensiveDep) {
        this.expensiveDep = expensiveDep;
    }

    // Unused method → Spring AOT may skip its instantiation
    public String unusedMethod() {
        return expensiveDep.compute();
    }
}

class ExpensiveDependency {
    public String compute() {
        try { Thread.sleep(1000); } catch (InterruptedException e) {}
        return "expensive";
    }
}
```

### 7.4 Loop Unrolling


The JIT unrolls loops to reduce branch overhead and expose instruction-level parallelism.

```java
class LoopUnrolling {

    // →→→ JIT unrolls small, countable loops →→→
    static int sumArray(int[] arr) {
        int sum = 0;
        // Loop with 4 constant-length iterations → fully unrolled
        for (int i = 0; i < 4; i++) {
            sum += arr[i];  // becomes: sum = arr[0] + arr[1] + arr[2] + arr[3];
        }
        return sum;
    }

    // →→→ Partial unrolling for larger loops →→→
    static int sumLargeArray(int[] arr) {
        int sum = 0;
        // For variable-length loops, JIT may unroll in chunks of 4-8
        for (int i = 0; i < arr.length; i++) {
            sum += arr[i];
            // Might become:
            // for (; i < arr.length - 7; i += 8) {
            //     sum += arr[i] + arr[i+1] + arr[i+2] + arr[i+3]
            //          + arr[i+4] + arr[i+5] + arr[i+6] + arr[i+7];
            // }
            // for (; i < arr.length; i++) {
            //     sum += arr[i];
            // }
        }
        return sum;
    }

    // →→→ Manual unrolling for hot paths →→→
    static int sumManuallyUnrolled(int[] arr) {
        int sum = 0;
        int i = 0;
        int len = arr.length;

        // Process 8 elements per iteration
        for (; i + 7 < len; i += 8) {
            sum += arr[i] + arr[i+1] + arr[i+2] + arr[i+3]
                 + arr[i+4] + arr[i+5] + arr[i+6] + arr[i+7];
        }

        // Handle remaining elements
        for (; i < len; i++) {
            sum += arr[i];
        }
        return sum;
    }

    public static void main(String[] args) {
        int[] data = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

        System.out.println("Sum array (unrolled): " + sumArray(data));
        System.out.println("Sum large: " + sumLargeArray(data));
        System.out.println("Manual unroll: " + sumManuallyUnrolled(data));

        // Run with: -XX:+PrintOptoAssembly (debug VM only)
        // or: -XX:+PrintIdeal -XX:+UnlockDiagnosticVMOptions
    }
}
```

### 7.5 Intrinsics


Intrinsics are methods that the JIT recognizes and replaces with hand-written machine code → usually a CPU instruction.

```java
class IntrinsicsExample {

    public static void main(String[] args) {
        // →→→ Math intrinsics →→→
        // These are intrinsified on most platforms:
        double sin = Math.sin(1.5);
        double cos = Math.cos(1.5);
        double sqrt = Math.sqrt(2.0);
        double log = Math.log(100.0);
        double pow = Math.pow(2.0, 10.0);
        double abs = Math.abs(-42.0);
        long max = Math.max(100L, 200L);

        // →→→ Array copy intrinsic →→→
        int[] src = {1, 2, 3, 4, 5};
        int[] dst = new int[5];
        System.arraycopy(src, 0, dst, 0, 5);
        // This becomes a single memmove() call → very fast

        // →→→ Object intrinsics →→→
        // Object.getClass() is intrinsified
        Class<?> clazz = "hello".getClass();

        // →→→ Unsafe intrinsics (used internally by JDK) →→→
        // Unsafe.compareAndSwapObject, Unsafe.putOrderedObject, etc.
        // These become single CPU instructions (CMPXCHG on x86)

        System.out.printf("sin=%.3f cos=%.3f sqrt=%.3f log=%.3f pow=%.0f%n",
            sin, cos, sqrt, log, pow);
    }
}
```

**How to check if a method is intrinsic**:

```java
// Run with: -XX:+PrintIntrinsics -XX:+UnlockDiagnosticVMOptions
// Output looks like:
//   @ 8   java.lang.Math::sin (14 bytes)   intrinsified

class IntrinsicChecker {

    static void checkIntrinsic() {
        double x = Math.sin(1.0); // intrinsic on x86_64 → FSIN instruction
    }

    public static void main(String[] args) {
        // Warmup
        for (int i = 0; i < 50_000; i++) {
            checkIntrinsic();
        }
        System.out.println("Check -XX:+PrintIntrinsics output");
    }
}
```

### 7.6 Branch Prediction


Modern CPUs predict branch outcomes. A mispredicted branch costs 10--20 cycles. Code that is unpredictable hurts performance.

```java
import java.util.*;

class BranchPrediction {

    public static void main(String[] args) {
        int size = 100_000;
        int[] sorted = new Random(42).ints(size, 0, 100).toArray();
        int[] unsorted = sorted.clone();

        Arrays.sort(sorted);

        // →→→ Predictable branch: sorted data →→→
        long start = System.nanoTime();
        long sum1 = countAboveThreshold(sorted, 50);
        long end = System.nanoTime();
        System.out.printf("Sorted (predictable): %d, time=%.2f ms%n",
            sum1, (end - start) / 1_000_000.0);

        // →→→ Unpredictable branch: unsorted data →→→
        start = System.nanoTime();
        long sum2 = countAboveThreshold(unsorted, 50);
        end = System.nanoTime();
        System.out.printf("Unsorted (unpredictable): %d, time=%.2f ms%n",
            sum2, (end - start) / 1_000_000.0);

        // The unsorted version can be 2-4x slower due to branch mispredictions.
        // The difference shrinks on modern CPUs with large branch predictor tables.
    }

    static long countAboveThreshold(int[] data, int threshold) {
        long count = 0;
        for (int v : data) {
            if (v > threshold) { // The branch
                count++;
            }
        }
        return count;
    }
}
```

**Mitigating branch mispredictions**:

```java
class BranchPredictionMitigation {

    // Use branchless patterns where possible
    static long countAboveThresholdBranchless(int[] data, int threshold) {
        long count = 0;
        for (int v : data) {
            // Branchless: the conditional is a bit operation
            // (v - threshold) >> 31 gives -1 if v < threshold, 0 otherwise
            // Then ~(x) gives 0 or -1. Adding increments only when above.
            count += (v > threshold) ? 1 : 0;
        }
        // The JIT can use CMOV (conditional move) for the ternary,
        // which avoids a branch entirely on x86.
        return count;
    }

    // For boolean-heavy logic, prefer bitwise operations:
    static boolean isInRange(int value, int min, int max) {
        // Branch version:
        // return value >= min && value <= max;

        // Branchless version (for hot paths):
        return (value - min) | (max - value) >= 0;
    }
}
```

### 7.7 False Sharing (@Contended)


False sharing occurs when two threads write to different fields that share the same CPU cache line (typically 64 bytes). The CPU cache coherence protocol forces the line to ping-pong between cores, destroying performance.

```java
import java.util.concurrent.CountDownLatch;

class FalseSharingDemo {

    // →→→ FALSE SHARING: fields on same cache line →→→
    static class SharedCounters {
        volatile long counter1 = 0; // occupies bytes 0-7
        volatile long counter2 = 0; // bytes 8-15 → SAME CACHE LINE!
        // Padding would be needed:
        // volatile long p1, p2, p3, p4, p5, p6, p7; // fill to byte 64
    }

    // →→→ FIX: @Contended (JDK 8+) or manual padding →→→
    @jdk.internal.vm.annotation.Contended
    static class PaddedCounters {
        volatile long counter1 = 0;
        // @Contented adds padding to isolate this field on its own cache line
        volatile long counter2 = 0;
    }

    // →→→ Manual padding (works on all JDK versions) →→→
    static class ManualPaddedCounters {
        volatile long counter1 = 0;
        // 7 unused longs push counter2 to a different cache line
        volatile long p1, p2, p3, p4, p5, p6, p7;
        volatile long counter2 = 0;
    }

    public static void runTest(Object counters, boolean useShared) throws Exception {
        int threadCount = 2;
        int iterations = 100_000_000;
        CountDownLatch latch = new CountDownLatch(threadCount);
        long start = System.nanoTime();

        Runnable task = () -> {
            for (int i = 0; i < iterations; i++) {
                if (useShared) {
                    ((SharedCounters) counters).counter1++;
                } else {
                    ((PaddedCounters) counters).counter1++;
                }
            }
            latch.countDown();
        };

        Runnable task2 = () -> {
            for (int i = 0; i < iterations; i++) {
                if (useShared) {
                    ((SharedCounters) counters).counter2++;
                } else {
                    ((PaddedCounters) counters).counter2++;
                }
            }
            latch.countDown();
        };

        Thread t1 = new Thread(task, "Writer-1");
        Thread t2 = new Thread(task2, "Writer-2");
        t1.start();
        t2.start();
        latch.await();

        long end = System.nanoTime();
        String type = useShared ? "FALSE SHARING" : "PADDED (no false sharing)";
        System.out.printf("[%s] Time: %.2f ms%n", type, (end - start) / 1_000_000.0);
    }

    public static void main(String[] args) throws Exception {
        // Run with: -XX:-RestrictContended (JDK 8+) to enable @Contended
        // Without @Contended, the padded version is ~4x faster.

        SharedCounters shared = new SharedCounters();
        PaddedCounters padded = new PaddedCounters();

        // Warmup
        runTest(shared, true);
        runTest(padded, false);

        System.out.println("\n--- Main test ---");
        runTest(shared, true);  // slower
        runTest(padded, false); // faster
    }
}
```

**When to think about false sharing**:

- High-frequency writes to `volatile` fields by different threads
- Atomic counters (`AtomicLong`, `AtomicInteger`) in arrays → adjacent elements share cache lines
- `Exchanger`, `Exchanger` internal slots, `ThreadPoolExecutor` worker counts
- Ring buffers (LMAX Disruptor style)

---

## 8. JVM Tuning

JVM flags control memory allocation, garbage collection, compilation, and runtime behavior.

### 8.1 Heap Sizing


```bash
# Minimum and maximum heap size (set equal to avoid resizing)
-Xms4g -Xmx4g

# Young generation size (absolute)
-Xmn1g

# Ratio of old/young (default 2 → old:young = 2:1)
-XX:NewRatio=3

# Survivor space ratio (default 8 → Eden:S0:S1 = 8:1:1)
-XX:SurvivorRatio=6

# Max metaspace (class metadata) → avoid metaspace GC
-XX:MaxMetaspaceSize=512m

# Initial metaspace → prevent growth-induced GC
-XX:MetaspaceSize=256m
```

```java
// Programmatic heap configuration verification
import java.lang.management.MemoryMXBean;
import java.lang.management.ManagementFactory;
import java.lang.management.MemoryUsage;

class HeapConfig {

    public static void main(String[] args) {
        MemoryMXBean mem = ManagementFactory.getMemoryMXBean();

        MemoryUsage heap = mem.getHeapMemoryUsage();
        MemoryUsage nonHeap = mem.getNonHeapMemoryUsage();

        System.out.println("=== HEAP ===");
        System.out.printf("Initial: %.2f MB%n", heap.getInit() / 1_000_000.0);
        System.out.printf("Used: %.2f MB%n", heap.getUsed() / 1_000_000.0);
        System.out.printf("Committed: %.2f MB%n", heap.getCommitted() / 1_000_000.0);
        System.out.printf("Max: %.2f MB%n", heap.getMax() / 1_000_000.0);

        System.out.println("\n=== NON-HEAP (Metaspace) ===");
        System.out.printf("Initial: %.2f MB%n", nonHeap.getInit() / 1_000_000.0);
        System.out.printf("Used: %.2f MB%n", nonHeap.getUsed() / 1_000_000.0);
        System.out.printf("Committed: %.2f MB%n", nonHeap.getCommitted() / 1_000_000.0);
        System.out.printf("Max: %.2f MB%n", nonHeap.getMax() / 1_000_000.0);

        // Useful for verifying -Xms/-Xmx are correctly applied
    }
}
```

### 8.2 GC Selection & Tuning


```bash
# G1GC (default since JDK 9) → balanced throughput and latency
-XX:+UseG1GC
-XX:MaxGCPauseMillis=100         # Target max pause (default 200 ms)
-XX:G1HeapRegionSize=4m           # Region size (1-32 MB, default based on heap)
-XX:G1NewSizePercent=5            # Initial young gen % (default 5%)
-XX:G1MaxNewSizePercent=60        # Max young gen % (default 60%)
-XX:G1HeapWastePercent=5          # Waste threshold for mixed GC (default 5%)

# ZGC (JDK 15+ GA, JDK 21+ production-ready) → sub-millisecond pauses
-XX:+UseZGC
-XX:ZAllocationSpikeTolerance=2.0 # Tolerate allocation spikes
-Xmx16g
# ZGC works best with at least 2-4 GB heap

# Parallel GC (throughput-oriented)
-XX:+UseParallelGC
-XX:ParallelGCThreads=8           # Default: CPU cores
```

```java
// GC comparison framework
class GcComparison {

    public static void main(String[] args) {
        // Run with different GCs and compare:
        // G1GC:   -XX:+UseG1GC -Xmx1g -Xlog:gc*:file=gc-g1.log
        // ZGC:    -XX:+UseZGC -Xmx1g -Xlog:gc*:file=gc-zgc.log
        // ParGC:  -XX:+UseParallelGC -Xmx1g -Xlog:gc*:file=gc-par.log

        System.out.println("Running allocation workload for GC comparison...");
        System.out.println("JVM: " + System.getProperty("java.version"));
        System.out.println("GC:  " + getGCName());

        // Mixed workload: allocations + retention
        var retained = new java.util.ArrayList<byte[]>();
        var rng = new java.util.Random(42);

        for (int round = 0; round < 50; round++) {
            // Allocate 10 MB of short-lived objects
            for (int i = 0; i < 100; i++) {
                var tmp = new byte[100_000];
                tmp[rng.nextInt(100_000)] = (byte) round; // prevent DCE
            }

            // Retain some objects
            if (round % 3 == 0) {
                retained.add(new byte[200_000]);
            }

            System.out.printf("Round %d: retained %d objects%n", round, retained.size());
        }

        System.out.println("Done. Compare pause times across GC logs.");
    }

    static String getGCName() {
        for (var bean : ManagementFactory.getGarbageCollectorMXBeans()) {
            return bean.getName();
        }
        return "unknown";
    }
}
```

### 8.3 Additional JVM Tuning Flags


```bash
# →→→ String Deduplication (G1GC only) →→→
# Deduplicates identical String values in the heap (saves 10-30% on string-heavy apps)
-XX:+UseStringDeduplication

# →→→ Always PreTouch →→→
# Commit all heap memory at startup instead of lazily.
# Eliminates pause during first GC when the OS page-faults memory.
-XX:+AlwaysPreTouch

# →→→ Compiler Threads →→→
# More compiler threads = faster warmup, more CPU during startup
-XX:CICompilerCount=4

# →→→ Reserved Code Cache →→→
# Ensure code cache doesn't fill up (which disables JIT)
-XX:ReservedCodeCacheSize=256m
-XX:InitialCodeCacheSize=64m

# →→→ Optimize String Concat →→→
# String concatenation optimization (default on since JDK 9)
-XX:+OptimizeStringConcat

# →→→ Tiered Compilation →→→
# Default on. Can be disabled for faster startup (but slower peak perf)
-XX:-TieredCompilation

# →→→ Thread Stack Size →→→
-XX:ThreadStackSize=256k

# →→→ Direct Memory →→→
-XX:MaxDirectMemorySize=256m

# →→→ Heap Dump on OOM →→→
-XX:+HeapDumpOnOutOfMemoryError
-XX:HeapDumpPath=/var/log/app/heapdumps/

# →→→ Exit on OOM →→→
-XX:+ExitOnOutOfMemoryError

# →→→ GC Time Ratio →→→
# Target that GC time should not exceed 1% of total time (default 99)
-XX:GCTimeRatio=19  # GC time should be < 5% (99 → 1%)
```

```java
// Demonstration of AlwaysPreTouch effect
class PreTouchDemo {

    public static void main(String[] args) throws Exception {
        // Run WITHOUT -XX:+AlwaysPreTouch:
        //   java PreTouchDemo
        // Run WITH -XX:+AlwaysPreTouch:
        //   java -XX:+AlwaysPreTouch -Xms2g -Xmx2g PreTouchDemo

        Runtime rt = Runtime.getRuntime();
        long maxMemory = rt.maxMemory() / 1_000_000;
        System.out.printf("Max heap: %d MB%n", maxMemory);

        // With AlwaysPreTouch, the rss (resident set size) equals max heap immediately.
        // Without it, the initial RSS is small and grows as pages are faulted in.

        Runtime.getRuntime().exec("tasklist /fi \"PID eq " + ProcessHandle.current().pid() + "\"")
            .inputReader()
            .lines()
            .filter(l -> l.contains("java"))
            .forEach(System.out::println);

        // Allocate memory to force page faults
        byte[][] pages = new byte[100][];
        for (int i = 0; i < pages.length; i++) {
            pages[i] = new byte[10_000_000]; // 10 MB each
            System.out.printf("Allocated %d MB%n", (i + 1) * 10);
        }
    }
}
```

---

## 9. Spring Boot Performance

Spring Boot convenience comes with an overhead. This section covers the tuning knobs available.

### 9.1 Lazy Initialization


By default, Spring Boot creates all singleton beans at startup. Lazy initialization defers bean creation until first use.

```java
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

// →→→ Option 1: Global lazy initialization →→→
// application.properties:
//   spring.main.lazy-initialization=true

// →→→ Option 2: Per-bean lazy initialization →→→
@Service
@Lazy
class ExpensiveService {

    public ExpensiveService() {
        System.out.println("ExpensiveService created → deferred until first use");
        // Simulate expensive setup
        try { Thread.sleep(2000); } catch (InterruptedException e) {}
    }

    public String process() {
        return "processed";
    }
}

@Service
class NormalService {

    public NormalService() {
        System.out.println("NormalService created at startup → eager");
    }
}

@SpringBootApplication
class LazyInitDemo {

    public static void main(String[] args) {
        SpringApplication app = new SpringApplication(LazyInitDemo.class);
        app.setLazyInitialization(true); // same as spring.main.lazy-initialization=true
        var ctx = app.run(args);

        System.out.println("Application started");

        // ExpensiveService is not created yet...
        var svc = ctx.getBean(ExpensiveService.class);
        System.out.println("Service result: " + svc.process());
    }
}
```

**When to use lazy initialization**:

| Use Case               | Recommendation                              |
|------------------------|---------------------------------------------|
| Development           | Always → faster startup time                |
| Production            | Only if startup time matters and services are hit uniformly |
| Low-traffic services  | Good → infrequently used endpoints skip startup cost |
| High-traffic services | Not recommended → first request pays full initialization tax |

### 9.2 Connection Pool Tuning


HikariCP is Spring Boot's default connection pool. Tuning it is the single highest-impact per-database optimization.

```yaml
# application.yml → HikariCP tuning
spring:
  datasource:
    hikari:
      # Core pool settings
      maximum-pool-size: 20
      minimum-idle: 5
      connection-timeout: 5000     # Max ms to wait for a connection
      idle-timeout: 300000         # 5 min → remove idle connections
      max-lifetime: 1800000        # 30 min → max connection age

      # Performance settings
      pool-name: AppPool
      auto-commit: false           # Let transaction manager manage commits
      connection-test-query: SELECT 1  # Only if driver doesn't support isValid()
      validation-timeout: 3000

      # Leak detection
      leak-detection-threshold: 10000  # 10 sec → warn if connection held too long

      # Prepared statement cache (if driver supports it)
      data-source-properties:
        cachePrepStmts: true
        prepStmtCacheSize: 250
        prepStmtCacheSqlLimit: 2048
        useServerPrepStmts: true
```

```java
import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.PreparedStatement;

class HikariTuning {

    public static DataSource createOptimizedDataSource() {
        HikariConfig config = new HikariConfig();

        // Database
        config.setJdbcUrl("jdbc:postgresql://localhost:5432/appdb");
        config.setUsername("appuser");
        config.setPassword("apppass");
        config.setDriverClassName("org.postgresql.Driver");

        // Pool sizing
        config.setMaximumPoolSize(20);
        config.setMinimumIdle(5);

        // The formula for max pool size:
        //   maxPoolSize = (coreCount * 2) + effectiveSpindleCount
        // For a typical 4-core DB server with 16-core app server:
        //   maxPoolSize = (4 * 2) + 1 = 9  (per app instance)
        // Start conservative and increase while monitoring:
        //   - If connections are 100% utilized, increase
        //   - If DB CPU is low but queries are slow, pool is too small
        //   - If DB CPU is high, pool may be too large

        config.addDataSourceProperty("cachePrepStmts", "true");
        config.addDataSourceProperty("prepStmtCacheSize", "250");
        config.addDataSourceProperty("prepStmtCacheSqlLimit", "2048");
        config.addDataSourceProperty("useServerPrepStmts", "true");

        // These reduce per-connection overhead by caching prepared statements
        // across the connection's lifetime → can improve throughput by 20-40%.

        config.setAutoCommit(false); // Let Spring manage transactions
        config.setTransactionIsolation("TRANSACTION_READ_COMMITTED");

        config.setLeakDetectionThreshold(10_000);
        config.setConnectionTimeout(5_000);
        config.setMaxLifetime(1_800_000); // 30 min → rotate connections to avoid DB-side drops
        config.setIdleTimeout(300_000);   // 5 min

        return new HikariDataSource(config);
    }

    // Monitoring pool health
    public static void logPoolStatus(HikariDataSource ds) {
        var mx = ds.getHikariPoolMXBean();
        System.out.printf("Pool: %s | Active: %d | Idle: %d | Wait: %d | Total: %d%n",
            ds.getPoolName(),
            mx.getActiveConnections(),
            mx.getIdleConnections(),
            mx.getThreadsAwaitingConnection(),
            mx.getTotalConnections());
    }
}
```

### 9.3 AOT Processing


Spring Boot 3.x introduced Ahead-of-Time (AOT) processing for GraalVM native images and optimized startup.

```java
import org.springframework.aot.hint.annotation.Reflective;
import org.springframework.aot.hint.annotation.ImportRuntimeHints;
import org.springframework.aot.hint.RuntimeHints;
import org.springframework.aot.hint.RuntimeHintsRegistrar;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;

// →→→ AOT hints →→→
// In a native image, reflection must be declared at build time.
// AOT processing analyzes your code and generates these hints automatically,
// but for edge cases you register them manually.

@Configuration
@ImportRuntimeHints(MyRuntimeHints.class)
class AotConfiguration {

    // Spring AOT will analyze this class at build time and
    // generate the necessary reflection configuration.
}

class MyRuntimeHints implements RuntimeHintsRegistrar {

    @Override
    public void registerHints(RuntimeHints hints, ClassLoader classLoader) {
        // Register a class for reflection
        hints.reflection().registerType(SomeDynamicClass.class,
            memberCategory ->
                memberCategory.withPublicConstructors()
                    .withPublicMethods()
                    .withPublicFields());

        // Register a resource that must be available at runtime
        hints.resources().registerResource(
            new ClassPathResource("dynamic-config.json"));

        // Register a serialization type
        hints.serialization().registerType(SomeSerializableClass.class);
    }
}

class SomeDynamicClass {
    public String name;
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
}

class SomeSerializableClass implements java.io.Serializable {
    private String data;
}

// →→→ Building with AOT →→→
// Maven:
//   mvn spring-boot:process-aot
//   mvn package -Pnative
//
// Gradle:
//   ./gradlew processAot
//   ./gradlew nativeCompile
//
// AOT processing analyzes:
//   - @Configuration classes and @Bean methods
//   - @Component, @Service, @Repository beans
//   - Reflection in @EventListener, @Autowired, etc.
//   - Property bindings from @ConfigurationProperties
//   - Spring Data JPA repositories
```

### 9.4 Graceful Shutdown


Graceful shutdown allows in-flight requests to complete before the application stops.

```yaml
# application.yml
server:
  shutdown: graceful

spring:
  lifecycle:
    timeout-per-shutdown-phase: 30s  # Max wait for active requests
```

```java
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory;
import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import jakarta.annotation.PreDestroy;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

@SpringBootApplication
class GracefulShutdownDemo {

    public static void main(String[] args) {
        SpringApplication app = new SpringApplication(GracefulShutdownDemo.class);
        app.run(args);
    }

    @Bean
    public WebServerFactoryCustomizer<TomcatServletWebServerFactory> tomcatCustomizer() {
        return factory -> {
            factory.addConnectorCustomizers(connector -> {
                // Wait up to 30 seconds for active requests
                connector.setProperty("connectionTimeout", "30000");
            });
        };
    }
}

@Service
class LongRunningTaskService {

    private final ExecutorService executor = Executors.newFixedThreadPool(4);

    public void processAsync() {
        executor.submit(() -> {
            try {
                Thread.sleep(10_000);
                System.out.println("Task completed");
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                System.out.println("Task interrupted during shutdown");
            }
        });
    }

    @PreDestroy
    public void shutdown() {
        System.out.println("Shutting down executor gracefully...");
        executor.shutdown();
        try {
            if (!executor.awaitTermination(30, TimeUnit.SECONDS)) {
                executor.shutdownNow();
            }
        } catch (InterruptedException e) {
            executor.shutdownNow();
            Thread.currentThread().interrupt();
        }
        System.out.println("Executor shut down");
    }
}
```

### 9.5 Virtual Threads


Virtual threads (Project Loom, JDK 21+) dramatically reduce the overhead of thread-per-request models.

```java
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.embedded.tomcat.TomcatProtocolHandlerCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.Executors;

@SpringBootApplication
class VirtualThreadDemo {

    public static void main(String[] args) {
        SpringApplication.run(VirtualThreadDemo.class, args);
    }

    // →→→ Enable virtual threads for Tomcat →→→
    @Bean
    public TomcatProtocolHandlerCustomizer<?> protocolHandlerVirtualThreadExecutor() {
        return handler -> {
            handler.setExecutor(Executors.newVirtualThreadPerTaskExecutor());
        };
    }

    // Or simpler: set in application.properties
    //   spring.threads.virtual.enabled=true
}

@RestController
class VirtualThreadController {

    private final BlockingService service;

    VirtualThreadController(BlockingService service) {
        this.service = service;
    }

    @GetMapping("/blocking")
    public String blocking() {
        // On platform threads: this blocks a 1 MB OS thread
        // On virtual threads: this blocks a ~2 KB carrier mount
        return service.fetchFromExternalService();
    }

    @GetMapping("/parallel")
    public int parallel() throws Exception {
        // Virtual threads make parallel blocking calls much cheaper
        var task1 = new java.util.concurrent.FutureTask<>(() -> service.fetchFromExternalService());
        var task2 = new java.util.concurrent.FutureTask<>(() -> service.fetchFromExternalService());
        var task3 = new java.util.concurrent.FutureTask<>(() -> service.fetchFromExternalService());

        Thread.ofVirtual().start(task1).join();
        Thread.ofVirtual().start(task2).join();
        Thread.ofVirtual().start(task3).join();

        return task1.get().length() + task2.get().length() + task3.get().length();
    }
}

@Service
class BlockingService {

    public String fetchFromExternalService() {
        try {
            // Simulate blocking I/O → database call, HTTP call, etc.
            Thread.sleep(500);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        return "result from " + Thread.currentThread().getName();
    }
}
```

**Virtual thread caveats**:

```java
import java.util.concurrent.*;
import java.util.concurrent.locks.ReentrantLock;

class VirtualThreadPitfalls {

    // →→→ PITFALL 1: Pinned threads →→→
    // Virtual threads "pin" to their carrier thread when:
    //   - Inside a synchronized block (the main cause)
    //   - Executing native code or JNI

    private static final Object MONITOR = new Object();

    static void blockPinned() throws Exception {
        // synchronized causes pinning → virtual thread can't be unmounted
        synchronized (MONITOR) {
            Thread.sleep(1000); // carrier thread is blocked!
        }
    }

    // Fix: use ReentrantLock instead of synchronized for virtual threads
    private static final Lock REENTRANT_LOCK = new ReentrantLock();

    static void blockNotPinned() throws Exception {
        REENTRANT_LOCK.lock();
        try {
            Thread.sleep(1000); // virtual thread unmounts → carrier is free
        } finally {
            REENTRANT_LOCK.unlock();
        }
    }

    // →→→ PITFALL 2: ThreadLocal with massive data →→→
    // ThreadLocal works with virtual threads, but each virtual thread
    // has its own copy. With millions of virtual threads, ThreadLocal
    // data multiplies.

    private static final ThreadLocal<byte[]> LARGE_CONTEXT =
        ThreadLocal.withInitial(() -> new byte[100_000]);

    // →→→ PITFALL 3: Pool of virtual threads is pointless →→→
    // Virtual threads should NOT be pooled. Create new ones cheaply.
    // Pooling adds overhead for zero benefit.

    // BAD:
    static final ExecutorService POOLED_VIRTUAL = Executors.newFixedThreadPool(100, Thread.ofVirtual().factory());

    // GOOD: create per-task
    static void doWork(Runnable task) {
        Thread.startVirtualThread(task);
    }

    // →→→ PITFALL 4: Thread pool wrapping →→→
    // Wrapping a virtual thread executor in a bounded pool
    // defeats the purpose → you get the overhead of pooling
    // with a fixed limit on parallelism.

    // BAD:
    static final ExecutorService boundedVirtual = Executors.newThreadPerTaskExecutor(
        Thread.ofVirtual().factory()
    ); // Actually this is OK → newThreadPerTaskExecutor is unbounded

    // →→→ PITFALL 5: Semaphore is your new friend →→→
    // With unlimited virtual threads, you need Semaphore to limit
    // external resource access (DB connections, sockets, etc.)

    private static final Semaphore DB_CONNECTIONS = new Semaphore(10);

    static void limitedDbAccess() throws Exception {
        DB_CONNECTIONS.acquire();
        try {
            // access database → at most 10 concurrent virtual threads
        } finally {
            DB_CONNECTIONS.release();
        }
    }
}
```

## Concept Comparison Table

| Concept | Definition | Key Distinction | Use Case |
|---------|-----------|-----------------|----------|
| JFR/JMC | Built-in event recording and analysis | <1% overhead, production-safe | First-choice diagnostic tool |
| async-profiler | Sampling CPU/memory profiler | Stack traces with safepoint bias avoidance | CPU hotspot identification |
| MAT | Heap dump analyzer | Dominator tree, leak suspect, OQL | Memory leak root cause analysis |
| JMH | Microbenchmark harness | @Benchmark, Blackhole, warmup forks | Precise method-level performance measurement |

## Quick Reference

| Category | Tools & Techniques | Notes |
|----------|-------------------|-------|
| **CPU Profiling** | async-profiler, JFR, VisualVM | async-profiler handles safepoint bias |
| **Memory Analysis** | MAT, jmap, jhat | Dominator tree shows biggest retained objects |
| **Thread Analysis** | jstack, ThreadMXBean, JMC | 3-column thread dump: blocked, waiting, running |
| **GC Analysis** | GC logs, GCViewer, G1GC -Xlog:gc* | Key metrics: pause time, allocation rate, promoted bytes |
| **Benchmarking** | JMH with @Benchmark, @State, Blackhole | Always include warmup and avoid constant folding |

## Cross-Application Matrix

| Technique | Web Apps | Batch Jobs | Low-Latency | Microservices |
|-----------|----------|------------|-------------|---------------|
| JFR Profiling | Transaction latency | CPU hotspots | Real-time monitoring | Distributed tracing |
| Heap Dump Analysis | OOM investigation | Large data leaks | Memory leak detection | Container OOMKilled |
| JMH | - | - | Critical path benchmarks | Library performance |
| GC Tuning | Steady throughput | Large heap tuning | Sub-ms pause goals | Container heap sizing |

## Chapter Quiz

1. Which tool has the lowest overhead for production profiling?
   - A) async-profiler
   - B) JFR (JDK Flight Recorder)
   - C) VisualVM
   - D) MAT

<details>
<summary>Answer&lt;/summary&gt;
**B) JFR (JDK Flight Recorder).** JFR has &lt;1% overhead and is designed for continuous production use.
</details>

2. In Eclipse MAT, what does the Dominator Tree show?
   - A) The call stack for each thread
   - B) Which objects keep others alive — the dominator path to the GC root
   - C) The JVM heap configuration
   - D) GC log summary

<details>
<summary>Answer&lt;/summary&gt;
**B) Which objects keep others alive — the dominator path to the GC root.** The dominator tree simplifies heap analysis by showing the smallest set of objects that retain the largest amount of memory.
</details>

3. What is the purpose of `Blackhole` in JMH?
   - A) To consume the return value of a benchmark to prevent dead code elimination
   - B) To measure memory allocation
   - C) To simulate a slow I/O operation
   - D) To profile CPU usage

<details>
<summary>Answer&lt;/summary&gt;
**A) To consume the return value of a benchmark to prevent dead code elimination.** Without Blackhole, the JIT may optimize away the code being benchmarked if the result is unused.
</details>

4. Which GC metric is most important for latency-sensitive applications?
   - A) Throughput
   - B) Pause time
   - C) Heap size
   - D) Allocation rate

<details>
<summary>Answer&lt;/summary&gt;
**B) Pause time.** For latency-sensitive applications, stop-the-world pause times directly impact response time SLAs.
</details>

---

## Summary

- **Profiling tools** range from built-in (JFR/JMC, VisualVM, jstack, jcmd) to commercial (JProfiler, YourKit) to specialized (async-profiler for flame graphs, IntelliJ profiler for IDE integration). Start with JFR for production profiling → its overhead is under 1%.
- **Heap analysis** with Eclipse MAT focuses on the dominator tree, leak suspect reports, and OQL. Understand shallow vs retained heap to identify true memory cost.
- **Thread dump analysis** reveals deadlocks, contention (BLOCKED threads), and CPU hotspots when you analyze multiple dumps. Online tools like fastthread.io automate the pattern recognition.
- **GC log analysis** measures pause time, allocation rate, and promotion rate. Tools like GCeasy and GCViewer parse GC logs and provide tuning recommendations.
- **JMH** is essential for correct microbenchmarking. Key elements: `@Benchmark`, `@State`, `Blackhole`, `@Warmup`/`@Measurement`/`@Fork`, and profiler integration via `-prof`.
- **Anti-patterns** include auto-boxing in loops, string concatenation in loops, excessive synchronization (prefer `ConcurrentHashMap` and `AtomicInteger`), connection pool leaks, N+1 queries in Hibernate, and memory leaks from static collections, unregistered listeners, mutable keys in HashMap, and ThreadLocal not cleared.
- **Code optimization** relies on JIT behavior: warmup, inlining, loop unrolling, intrinsics, and branch prediction. Understand that the JIT is your ally → write clear code and let it optimize, with targeted manual optimizations only in confirmed hot paths.
- **JVM tuning** covers heap sizing (`-Xms`/`-Xmx`), GC selection (G1GC for general use, ZGC for sub-millisecond pauses), and flags like `-XX:+AlwaysPreTouch`, `-XX:+UseStringDeduplication`, and `-XX:+HeapDumpOnOutOfMemoryError`.
- **Spring Boot performance** tuning includes lazy initialization, HikariCP connection pool tuning, AOT processing for native images, graceful shutdown with timeout, and virtual threads (JDK 21+) for high-concurrency blocking I/O.

---

## Exercises

### Review Questions

1. What is the difference between `jstack`, `jcmd`, and `kill -3` for capturing thread dumps? Which method allows you to specify a filename directly?

2. Explain the difference between shallow heap and retained heap. Give an example of an object with large retained heap but small shallow heap.

3. What is the purpose of `Blackhole` in JMH? What happens if you write a JMH benchmark method that returns `void` without using `Blackhole`?

4. Which GC log phase typically accounts for the longest pause time in G1GC: Object Copy, Update RS, or Ext Root Scanning? Why?

5. What is false sharing (cache line ping-pong) and how does `@jdk.internal.vm.annotation.Contended` fix it?

6. Why does `synchronized` block cause virtual thread pinning? What is the alternative?

7. What does `-XX:+AlwaysPreTouch` do and when should you use it?

8. In the context of Hibernate, what is the N+1 queries problem? List three ways to fix it.

9. What is the effect of `spring.main.lazy-initialization=true` on startup time, memory usage, and first-request latency?

### Application Problems

10. Given the following code, identify all performance anti-patterns and rewrite it efficiently:

```java
import java.util.*;
import java.util.regex.Pattern;

class BadCode {
    private static Map<String, Object> cache = new HashMap<>();

    public static String processUsers(List<String> userIds) {
        String result = "";
        for (int i = 0; i < userIds.size(); i++) {
            String id = userIds.get(i);
            if (Pattern.compile("\\d+").matcher(id).matches()) {
                result += fetchUser(id);
            }
        }
        return result;
    }

    private static String fetchUser(String id) {
        Integer count = 0;
        for (Integer i = 0; i < 100; i++) {
            count += i;
        }
        cache.put(id, count);
        return id + ":" + count;
    }
}
```

11. You have a Spring Boot application with the following configuration:
- 32 GB heap, 8-core server
- PostgreSQL database on a separate 4-core server
- 200 concurrent users
- Average query takes 50 ms

Calculate the minimum `maximum-pool-size` using the formula `poolSize = cores * 2 + spindle`. Then explain what happens if you set it to 100.

12. Design a JVM flag set (command line) for a latency-sensitive trading application with the following requirements:
- Sub-10 ms GC pauses
- 16 GB heap
- 8-core server
- Application creates many intermediate strings
- Must detect and preserve heap dumps on OOM

13. Given the following performance test results from JMH, interpret the data and recommend changes:

```
Benchmark                              Mode  Cnt   Score    Error  Units
StringConcat.stringConcat             thrpt    5   12.4 Â±  2.1  ops/s
StringConcat.stringBuilder            thrpt    5  842.3 Â± 34.2  ops/s
StringConcat.stringBuffer             thrpt    5  721.5 Â± 28.9  ops/s
```

```
Benchmark                        Mode  Cnt     Score    Error  Units
ListBenchmark.arrayListGet      thrpt    5  8421.3 Â± 212.4  ops/s
ListBenchmark.linkedListGet     thrpt    5   832.1 Â±  67.3  ops/s
```

14. Analyze the following GC log segment and identify potential issues:

```
2025-06-12T10:30:15.123+0000 GC(42) Pause Young (Normal) (G1 Evacuation Pause)
  Eden: 512.0M(512.0M)->0.0B(480.0M)
  Survivors: 32.0M->48.0M
  Heap: 980.0M(2048.0M)->468.0M(2048.0M)
  [Parallel Time: 245.6 ms]
  [Object Copy: 201.3 ms]

2025-06-12T10:30:15.423+0000 GC(43) Pause Young (Normal) (G1 Evacuation Pause)
  Eden: 480.0M(480.0M)->0.0B(448.0M)
  Survivors: 48.0M->64.0M
  Heap: 950.0M(2048.0M)->492.0M(2048.0M)
  [Parallel Time: 238.9 ms]
  [Object Copy: 195.7 ms]
```

### Challenge Problems

15. **Memory Leak Investigation**

Given the following Spring Boot service, identify the memory leak and fix it. Then write a JMH benchmark that proves your fix reduces allocation rate.

```java
import org.springframework.stereotype.Service;
import jakarta.annotation.PostConstruct;
import java.util.*;

@Service
class LeakyCache {
    private final Map<String, SessionData> sessions = new HashMap<>();
    private final Random rng = new Random();

    @PostConstruct
    public void init() {
        // Simulates periodic session creation
        new Timer(true).scheduleAtFixedRate(new TimerTask() {
            @Override
            public void run() {
                for (int i = 0; i < 100; i++) {
                    String sessionId = UUID.randomUUID().toString();
                    byte[] payload = new byte[10_000];
                    rng.nextBytes(payload);
                    sessions.put(sessionId, new SessionData(sessionId, payload));
                }
                // Sessions are never removed → leak
            }
        }, 0, 5000);
    }
}

record SessionData(String sessionId, byte[] payload) {}
```

Requirements:
- Fix the leak by adding time-based eviction (remove sessions older than 5 minutes)
- Write a JMH benchmark that compares the allocation rate of the leaky vs fixed version
- Use the JMH GC profiler (`-prof gc`) to measure allocation rate

16. **Thread Dump Analysis**

The following thread dumps were captured during a production incident. Analyze and diagnose:

```
Dump 1 at 10:00:00:
"http-nio-8080-exec-1" #23 BLOCKED
   at java.util.HashMap.putVal(HashMap.java:631)
   - waiting to lock <0x000000076b8c5d40> (a HashMap$Node[])
   at java.util.HashMap.put(HashMap.java:611)
   at com.example.InMemoryCache.put(Cache.java:25)

"http-nio-8080-exec-2" #24 BLOCKED
   at java.util.HashMap.putVal(HashMap.java:631)
   - waiting to lock <0x000000076b8c5d40> (a HashMap$Node[])
   at java.util.HashMap.put(HashMap.java:611)
   at com.example.InMemoryCache.put(Cache.java:25)

"http-nio-8080-exec-3" #25 RUNNABLE
   at java.net.SocketInputStream.socketRead0(Native Method)
   at com.example.SlowService.callExternalAPI(Service.java:42)
```

```
Dump 2 at 10:00:03:
"http-nio-8080-exec-1" #23 BLOCKED
   at java.util.HashMap.putVal(HashMap.java:631)
   - waiting to lock <0x000000076b8c5d40>
"http-nio-8080-exec-2" #24 BLOCKED
   at java.util.HashMap.putVal(HashMap.java:631)
   - waiting to lock <0x000000076b8c5d40>
"http-nio-8080-exec-3" #25 RUNNABLE
   - same as dump 1
"http-nio-8080-exec-4" #26 BLOCKED
   at java.util.HashMap.putVal(HashMap.java:631)
   - waiting to lock <0x000000076b8c5d40>
```

Diagnose the problem, propose a fix, and explain how you would prevent it from recurring.

17. **Build a Performance Dashboard**

Create a Spring Boot Actuator endpoint (`/actuator/perf`) that exposes:

- Current heap usage (used, committed, max)
- GC count and total pause time per GC type
- Thread counts (active, daemon, peak)
- Connection pool statistics (active, idle, pending)
- CPU load (available via `OperatingSystemMXBean`)

Then write a JMH benchmark that measures the overhead of calling this endpoint under concurrency.

18. **GC Optimization Case Study**

A Spring Boot application with G1GC on 4 GB heap shows:
- Average young GC pause: 180 ms (target: 100 ms)
- Average allocation rate: 800 MB/sec
- Survivor overflow after every 3rd GC
- Full GC every 2 hours (target: never)

Design a JVM flag configuration that addresses each issue. Explain the trade-offs of each change and how you would verify the improvements.

19. **Virtual Thread Migration**

Given the following code that uses a fixed thread pool, migrate it to virtual threads and identify any pitfalls:

```java
@Service
class LegacyService {
    private final ExecutorService executor = Executors.newFixedThreadPool(50);
    private final Semaphore dbSemaphore = new Semaphore(10);
    private final Object lock = new Object();
    private int counter = 0;

    public CompletableFuture<String> process(String input) {
        return CompletableFuture.supplyAsync(() -> {
            synchronized (lock) {
                counter++;
            }
            try {
                dbSemaphore.acquire();
                // call database
                return "processed: " + input;
            } catch (Exception e) {
                throw new RuntimeException(e);
            } finally {
                dbSemaphore.release();
                synchronized (lock) {
                    counter--;
                }
            }
        }, executor);
    }
}
```

20. **End-to-End Profiling Lab**

Set up a complete profiling exercise:

1. Write a Spring Boot application with a REST endpoint that:
   - Parses a large CSV file (100,000+ rows)
   - Groups records by a key
   - Computes aggregates
   - Stores results in a database

2. Flood the endpoint with 100 concurrent requests using Apache JMeter or Gatling

3. While under load:
   - Capture a JFR recording (60 seconds)
   - Capture 5 thread dumps (3 seconds apart)
   - Capture a heap dump

4. Analyze:
   - Open JFR in JMC → find the hottest methods
   - Upload thread dumps to fastthread.io → identify contention
   - Open heap dump in MAT → run leak suspect report

5. Based on findings, apply 3 optimizations. Re-run and show the improvement.

Write a report documenting each step, the tools used, the findings, and the quantified improvement.
