<div class="module-hero">
  <div class="module-hero-icon">💻</div>
  <div class="module-hero-body">
    <h1>Programming — Languages Ki Baap Baat</h1>
    <p>Placement mein 2-3 languages strong honi chahiye. PHP+Laravel teri strongest skill hai. Java, JavaScript, Python bhi hai. Ye section tujhe batayega kya padhna hai aur resources kahan hain.</p>
    <div class="module-hero-meta">
      <span>PHP + Laravel</span>
      <span>JavaScript</span>
      <span>Java · Python · C</span>
    </div>
  </div>
</div>

<div class="roadmap-path">
<div class="roadmap-step" data-step="1">**PHP + Laravel** <span class="tag tag-star">Superpower</span></div>
<div class="roadmap-step" data-step="2">**JavaScript** <span class="tag">ES6+</span></div>
<div class="roadmap-step" data-step="3">**Java** <span class="tag tag-hot">Complete Mastery</span></div>
<div class="roadmap-step" data-step="4">**Python** <span class="tag">Basics</span></div>
<div class="roadmap-step" data-step="5">**C** <span class="tag">Fundamentals</span></div>
<div class="roadmap-step" data-step="6">**Go / Rust / TS** <span class="tag tag-hot">Future-Proof</span></div>
</div>

<div class="phase-section">
<div class="phase-header">
<span class="phase-number">01</span>
<h2>PHP + Laravel <span class="tag-star">Tera Superpower</span></h2>
</div>
<div class="phase-body">

**Location**: `Web-Development/WebDev/PHP/` + `Web-Development/WebDev/Laravel/` + `Web-Development/WebDev/php-for-laravel/`

### PHP Basics

`Web-Development/WebDev/PHP/PHP_Syllabus.md` se padh:

- Syntax, Variables, Loops, Functions
- OOP in PHP (Classes, Inheritance, Interfaces, Traits)
- File Handling, Sessions, Cookies
- Error Handling, Exceptions
- Composer, Namespaces, Autoloading

### PHP for Laravel (16 Topics)

`Web-Development/WebDev/php-for-laravel/` mein 16 files hain:

```
01_Classes_and_Traits_Eloquent.md
02_Aliases_and_MultiLevel_Extends.md
03_Implements_vs_Extends.md
04_Interface_with_Trait.md
05_Override_Extend_Functions.md
06_Controller_Response_Methods.md
07_Visibility.md
08_Static_and_AutoResolving.md
09_Callbacks_and_Closures.md
10_Ternary_and_NullSafe.md
11_Variable_and_Return_Types.md
12_Try_Catch_Exceptions.md
13_Composer_Complete.md
14_PHP_New_Syntax.md
15_Array_Functions.md
16_String_Functions.md
```

### Laravel Syllabus

`Web-Development/WebDev/Laravel/Laravel_12x_Detailed_Syllabus.md`:

- MVC Architecture
- Routing, Controllers, Blade
- Eloquent ORM (advanced relationships, mutators, accessors)
- Authentication & Authorization
- API Development (Passport/Sanctum)
- Testing (PHPUnit, Pest)
- Broadcasting, Queues, Events
- Best practices: Services, Repositories, SOLID

### Interview Q&A — PHP Laravel

`Web-Development/WebDev/php-laravel-interview-questions-answers-part-1-main/` — 6 parts mein complete Q&A:

- Part 1: Core PHP + Laravel basics
- Part 2: Eloquent, Database, Migrations
- Part 3: API, Authentication, Security
- Part 4: Testing, Queues, Events
- Part 5: Advanced Laravel patterns
- Part 6: Final summary + author details

Also available at: `Main-Course/Placement-01/php-laravel-interview-questions-answers-part-1-main/`

</div>
</div>

<div class="phase-section">
<div class="phase-header">
<span class="phase-number">02</span>
<h2>JavaScript <span class="tag">ES6+ Complete</span></h2>
</div>
<div class="phase-body">

**Location**: `Web-Development/WebDev/JavaScript/` — 19 modules complete

```
01_Introduction to ES6+
02_Basics, Types, Operators
03_Control Structures
04_Functions, Scopes, Closures
05_Objects and Arrays
06_Strings and Numbers
07_Date and Time
08_Error Handling
09_DOM Manipulation
10_Events
11_ES6+ Features
12_Async JS (Promises, Async/Await)
13_Error Handling & Debugging
14_Best Practices
15_Design Patterns
16_Interview Q&A
17_OOP & Advanced
18_Browser APIs & Storage
19_Frameworks Ecosystem
```

**Reference PDF**: `PDF-References/JavaScript Handwritten Notes.pdf`

### jQuery + AJAX

**Location**: `Web-Development/WebDev/JavaScript/` — 15 jQuery modules + AJAX docs:

```
jQuery_01_Introduction through jQuery_15_Interview
AJAX_Detailed_Syllabus.md
AJAX_Interview_Questions_and_Revision.md
```

</div>
</div>

<div class="phase-section">
<div class="phase-header">
<span class="phase-number">03</span>
<h2>Java <span class="tag-hot">Complete Mastery</span></h2>
</div>
<div class="phase-body">

**Source**: `Main-Course/Placement-01/03-Programming/02-Java/Java-Complete.md` (571 lines)

Also refer: `Main-Course/Placement-01/03-Programming/02-Java/Java_Complete_Syllabus.md` (531 lines) — FAANG-focused interview-first approach.

### Java Fundamentals

| Topic | Key Points |
|-------|-----------|
| JVM, JRE, JDK | Platform independence, compilation process |
| Syntax & Data Types | Primitives (byte, short, int, long, float, double, char, boolean), String Pool |
| Operators & Control | if/switch, loops, ternary |
| Methods & Classes | Method overloading, constructors, static vs instance |

**Interview Essentials:**
```
String s1 = "Hello";            // String pool
String s2 = new String("Hello"); // Heap
s1 == s2   → false
s1.equals(s2) → true
```
- `==` vs `equals()` — **most asked Java question**
- Autoboxing / Unboxing of wrapper classes
- String immutability — kyun beneficial hai?

### OOP Mastery

| Concept | Real Code Pattern |
|---------|------------------|
| Encapsulation | `private` fields + getters/setters |
| Inheritance | `extends` keyword, `super()` call |
| Polymorphism | Method overloading (compile-time) + overriding (run-time) |
| Abstraction | `abstract` classes vs `interface` (Java 8+ default methods) |

```java
// Runtime Polymorphism — Interview favourite
Animal animal = new Dog();
animal.eat(); // Dog's version runs

// Interface with default method
interface Vehicle {
    default void start() { System.out.println("Starting..."); }
}
```

### Collections Framework

`Main-Course/Placement-01/03-Programming/02-Java/04_Collections_Framework.md`

```
Collection
├── List (ArrayList, LinkedList, Vector)
├── Set (HashSet, LinkedHashSet, TreeSet)
└── Queue (PriorityQueue, Deque)
Map (HashMap, LinkedHashMap, TreeMap, ConcurrentHashMap)
```

- HashMap internal working → **FAANG must-know**
- Comparable vs Comparator
- fail-fast vs fail-safe iterators

### Multithreading

`Main-Course/Placement-01/03-Programming/02-Java/05_Generics_Multithreading.md`

```java
// Thread creation — extends Thread
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread running: " + Thread.currentThread().getName());
    }
}
new MyThread().start();

// Thread creation — implements Runnable (preferred)
class MyTask implements Runnable {
    public void run() {
        System.out.println("Task in thread: " + Thread.currentThread().getName());
    }
}
new Thread(new MyTask()).start();

// Lambda style
new Thread(() -> System.out.println("Lambda thread")).start();
```

**Synchronization:**
```java
class Counter {
    private int count = 0;
    public synchronized void increment() { count++; }
    public synchronized int getCount() { return count; }
}
```

**ExecutorService:**
```java
ExecutorService pool = Executors.newFixedThreadPool(5);
pool.submit(() -> System.out.println("Task executed"));
pool.shutdown();
```

**Producer-Consumer with BlockingQueue:**
```java
BlockingQueue<Integer> queue = new ArrayBlockingQueue<>(10);
// Producer
new Thread(() -> { for (int i = 0; i < 10; i++) queue.put(i); }).start();
// Consumer
new Thread(() -> { for (int i = 0; i < 10; i++) System.out.println(queue.take()); }).start();
```

- Thread lifecycle: New → Runnable → Running → Blocked → Terminated
- `volatile` keyword — visibility guarantee, no caching
- `AtomicInteger`, `AtomicBoolean` — lock-free thread-safe operations
- `deadlock` — circular wait prevention (lock ordering)
- `race condition` — happens when multiple threads read/write shared data without sync

### Modern Java Features

`Main-Course/Placement-01/03-Programming/02-Java/06_Modern_Java_Features.md`

**Lambda Expressions:**
```java
// Traditional vs Lambda
Runnable r1 = () -> System.out.println("Hello");
Comparator<String> cmp = (a, b) -> a.compareTo(b);
Consumer<String> printer = s -> System.out.println(s);
```

**Functional Interfaces:**
| Interface | Input | Output | Use Case |
|-----------|-------|--------|----------|
| `Predicate<T>` | T | boolean | Filtering |
| `Function<T,R>` | T | R | Mapping |
| `Consumer<T>` | T | void | Side effects |
| `Supplier<T>` | none | T | Lazy generation |
| `BinaryOperator<T>` | T,T | T | Reduction |

**Stream API — Chaining Operations:**
```java
List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "Dave");

// Filter + Map + Collect
List<String> filtered = names.stream()
    .filter(name -> name.length() > 3)
    .map(String::toUpperCase)
    .collect(Collectors.toList());

// Grouping
Map<Integer, List<String>> byLength = names.stream()
    .collect(Collectors.groupingBy(String::length));

// Reduce
int totalChars = names.stream()
    .mapToInt(String::length)
    .sum();
```

**Optional:**
```java
Optional<String> name = Optional.ofNullable(getName());
String result = name.orElse("Default");
name.ifPresent(System.out::println);
name.orElseThrow(() -> new RuntimeException("Name not found"));
```

**Method References:**
```java
// Instead of: s -> System.out.println(s)
Consumer<String> printer = System.out::println;
// Instead of: s -> s.length()
Function<String, Integer> len = String::length;
```

- Records (Java 14+): `public record Point(int x, int y) {}` — immutable data carrier
- Sealed Classes (Java 17+): `sealed class Shape permits Circle, Rectangle {}`
- Pattern Matching (Java 16+): `if (obj instanceof String s) { System.out.println(s.length()); }`

### Exception Handling

```java
// Checked vs Unchecked
// Checked: caught at compile time — IOException, SQLException
// Unchecked: caught at runtime — NullPointerException, ArithmeticException

// Try-with-resources (Java 7+)
try (BufferedReader br = new BufferedReader(new FileReader("file.txt"))) {
    System.out.println(br.readLine());
} catch (IOException e) {
    System.out.println("Error: " + e.getMessage());
}
// Resource automatically closed — no finally needed

// Custom exception
public class InsufficientFundsException extends Exception {
    public InsufficientFundsException(String msg) {
        super(msg);
    }
}
```

### Generics

```java
// Generic class
public class Box<T> {
    private T content;
    public void set(T content) { this.content = content; }
    public T get() { return content; }
}

Box<String> stringBox = new Box<>();  // Type safe
Box<Integer> intBox = new Box<>();

// Bounded type parameter
public static <T extends Number> double sum(T[] nums) {
    double total = 0;
    for (T n : nums) total += n.doubleValue();
    return total;
}

// Wildcards
List<? extends Number> readList;   // Can read Numbers (covariance)
List<? super Integer> writeList;  // Can write Integers (contravariance)
```

**HashMap Internals — FAANG Favourite:**
```java
// Internal Working:
// 1. Array of buckets (size 16) → index = hash(key) & (n-1)
// 2. Collision → linked list (Java 7) or tree (Java 8+ if >8 nodes)
// 3. Load factor 0.75 → resize at 75% capacity
// 4. Resize → doubles size + rehash all entries
```

### Interview Q&A

`Main-Course/Placement-01/03-Programming/02-Java/Java_Interview_Questions_Bank.md` + `Interview_Ready_Code_Templates.md`

**Core Java Interview Topics:**
1. OOP concepts with real examples
2. String, StringBuilder, StringBuffer differences
3. Exception Handling — checked vs unchecked, try-with-resources
4. Collections — when to use what?
5. Multithreading — deadlock, starvation, race condition
6. Java 8 features — Stream API, Lambda, Optional
7. JVM Architecture — classloader, runtime data areas, GC algorithms
8. Design Patterns — Singleton, Factory, Builder (PHP-Laravel mein bhi use hote hain)
9. HashMap internal working — hashCode(), equals() contract, collision handling
10. Immutable class creation — final class, final fields, no setters, defensive copying

</div>
</div>

<div class="tip-banner">
<span class="tip-badge">💡 STRATEGY</span>
**Bhai ka gyaan — Hinglish Study Strategy:** Pehle **PHP+Laravel** full command kar — ye tera superpower hai. Phir **JavaScript** ke 19 modules utha. **Java** ke liye regular programs likh — roz 1-2 programs. **Python** aur **C** ko overview level pe rakh. Har language ke **interview Q&A** zaroor padh. Lekin sabse important: **code likh bina dekhe** — confidence tab aata hai jab tera dimaag khud se logic likhne lage.
</div>

## Python Basics

`Main-Course/Placement-01/05-AI-ML/AI-ML-Complete.md` se Python section padh. AI/ML ke liye Python zaroori hai.

### Fundamentals

```python
# Data Types
name = "Raushan"       # str
age = 22               # int
marks = 85.5           # float
is_placed = True       # bool

# List, Tuple, Set, Dict
fruits = ["apple", "banana", "cherry"]
coordinates = (10, 20)
unique_nums = {1, 2, 3, 2, 1}  # {1, 2, 3}
student = {"name": "Raushan", "age": 22}

# List Comprehension
squares = [x**2 for x in range(10)]
even_squares = [x**2 for x in range(10) if x % 2 == 0]
```

### Functions & Modules

```python
# Lambda
double = lambda x: x * 2
list(map(lambda x: x**2, [1, 2, 3]))  # [1, 4, 9]

# Generator — memory efficient
def fibonacci(limit):
    a, b = 0, 1
    while a < limit:
        yield a
        a, b = b, a + b

for num in fibonacci(100):
    print(num)
```

### OOP in Python

```python
class Employee:
    def __init__(self, name, salary):
        self.name = name
        self._salary = salary  # protected

    @property
    def salary(self):
        return self._salary

    @salary.setter
    def salary(self, value):
        if value > 0:
            self._salary = value

emp = Employee("Raushan", 50000)
print(emp.salary)  # 50000 (getter)
```

- `*args` (tuple) aur `**kwargs` (dict) — flexible function parameters
- Decorators — `@staticmethod`, `@classmethod`, `@property`
- Context managers — `with open("file.txt") as f:`
- Key libraries: NumPy, Pandas, Matplotlib (detailed in AI/ML module)

## 🚀 Future-Proof Languages — Big Tech ke Favourite

<div class="tip-banner">
  <span class="tip-badge">🔥 WHY THIS MATTERS</span>
  PHP+Laravel tera superpower hai — but big tech companies ka primary stack <strong>Go, Rust, TypeScript</strong> hai. Inhe jaanna teri <strong>future-proofing</strong> hai. Placement mein bonus points milte hain jab tu inki baat karta hai.
</div>

<div class="lang-grid">
  <div class="lang-card">
    <h4>🦫 Go (Golang)</h4>
    <p>Google ka language. Docker, Kubernetes, Terraform isme likhe. Concurrency model (goroutines) game-changer hai. Backend microservices ke liye best.</p>
    <div class="lang-meta"><span>Google</span><span>Uber</span><span>Netflix</span><span>Twitch</span></div>
  </div>
  <div class="lang-card">
    <h4>🦀 Rust</h4>
    <p>Memory safety without garbage collection. Mozilla → now Linux kernel, AWS, Cloudflare, Dropbox isme likhte hain. Systems programming ka future.</p>
    <div class="lang-meta"><span>Amazon AWS</span><span>Cloudflare</span><span>Dropbox</span><span>Meta</span></div>
  </div>
  <div class="lang-card">
    <h4>📘 TypeScript</h4>
    <p>JavaScript + types = big tech ka web standard. Microsoft ka project, ab har jagah. React/Angular/Vue — sab TypeScript use karte hain.</p>
    <div class="lang-meta"><span>Microsoft</span><span>Airbnb</span><span>Google</span><span>Slack</span></div>
  </div>
  <div class="lang-card">
    <h4>☕ Kotlin</h4>
    <p>Google's preferred Android language. Modern, concise, null-safe. Backend development mein bhi growing.</p>
    <div class="lang-meta"><span>Google</span><span>Uber</span><span>Trello</span><span>CashApp</span></div>
  </div>
</div>

<div class="tip-banner">
  <span class="tip-badge">💡 MINIMUM VIABLE LEARNING</span>
  Sab kuch seekhna zaroori nahi. <strong>Go basics + concurrency</strong> aur <strong>TypeScript types + generics</strong> basics kaafi hain. Interview mein mention karna ki tu aware hai aur basics aata hai — enough hai.
</div>

## C Programming Basics

`Main-Course/Placement-01/03-Programming/` mein C content refer karo.

```c
// Basic structure
#include <stdio.h>
int main() {
    printf("Hello, Placement!");
    return 0;
}

// Pointers — C ka superpower
int x = 10;
int *ptr = &x;
printf("%d\n", *ptr);  // Dereference → 10

// Dynamic memory allocation
int *arr = (int*)malloc(5 * sizeof(int));
if (arr != NULL) {
    for (int i = 0; i < 5; i++) arr[i] = i * 10;
    free(arr);  // Always free!
}

// Struct — custom data type
struct Student {
    char name[50];
    int age;
    float marks;
};

// File I/O
FILE *fp = fopen("data.txt", "r");
if (fp != NULL) {
    char buffer[100];
    while (fgets(buffer, 100, fp) != NULL) {
        printf("%s", buffer);
    }
    fclose(fp);
}
```

**Interview Topics:** Pointers vs arrays, Call by reference, Memory leak prevention, `malloc` vs `calloc`, Structure padding.

## Checklist

- [ ] PHP complete syllabus padh liya (WebDev/PHP/)
- [ ] PHP for Laravel ke 16 topics complete kiye
- [ ] Laravel detailed syllabus cover kiya
- [ ] JavaScript ke 19 modules padh liye
- [ ] jQuery + AJAX complete kiya
- [ ] Java fundamentals + OOP + Collections practice ki
- [ ] Java 8+ features (Streams, Lambda) padh liye
- [ ] Java interview questions bank revise kiya
- [ ] Python aur C basics cover kiye
- [ ] Future-proof languages (Go/TypeScript) basics padhe

---

## 📂 Original Deep Content

Original programming content with language-wise breakdowns:

- [C Programming](../original/03-Programming/C/)
- [Java Mastery](../original/03-Programming/Java/)
- [Python](../original/03-Programming/Python/)
- [PHP Syllabus](../original/03-Programming/PHP/)
- [Go, Rust, TypeScript](../original/03-Programming/Future-Proof/)

---

## Notes

<div id="page-notes"></div>
