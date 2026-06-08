# DAY 8: QUICK REFERENCE - INTERFACES & EXCEPTIONS

## INTERFACES
- Declare: `interface InterfaceName {}`
- Implement: `class Impl implements InterfaceName {}`
- Default method: `default void method() { }`
- Static method: `static void helper() {}`
- Functional interface: `@FunctionalInterface interface Foo{ int apply(int a, int b); }`
- Multiple inheritance via interfaces supported: `class X implements A,B {}`

## ABSTRACT CLASSES
- Declare: `abstract class Base { abstract void run(); }`
- Use when sharing state & implementation.
- Template method: final method using abstract steps to be overridden.

## EXCEPTIONS
- Checked: must declare or handle (e.g., IOException)
- Unchecked: runtime exceptions (e.g., NullPointerException)
- throw vs throws: `throw new Exception();` vs `void foo() throws Exception{}`
- try-with-resources: `try (AutoCloseable r = ...) {}`
- finally always runs unless JVM exits/crash

## COMMON PATTERNS
- Observer: listener interfaces with register/unregister methods
- Strategy: pass comparator or strategy objects
- Adapter: wrap incompatible interface with adapter
- Template Method: abstract class with final method controlling steps

## QUICK COMMANDS
- Sort list by custom comparator:
```java
List<String> list = Arrays.asList("a","bbb","cc");
list.sort((a,b) -> a.length() - b.length());
```

- Create lambda for functional interface:
```java
Runnable r = () -> System.out.println("run");
```

- Try-with-resources:
```java
try (BufferedReader br = new BufferedReader(new FileReader("file.txt"))) { ... }
```

---

**Keep this cheat sheet handy for interviews and quick coding references.**