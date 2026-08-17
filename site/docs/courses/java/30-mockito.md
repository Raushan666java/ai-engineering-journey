---
id: 30-mockito
slug: /java/30-mockito
title: "Mockito & Mocking Frameworks"
sidebar_label: "Mockito & Mocking Frameworks"
sidebar_position: 30
---
# Mockito & Mocking Frameworks
> **Previous:** [JUnit 5](29-junit5.md) | **Next:** [Spring Boot Testing](31-spring-boot-test.md)

Mockito is the most widely used mocking framework in the Java ecosystem. It allows you to create test doubles (mocks, spies) that isolate the unit under test from its dependencies, control the behaviour of those dependencies through stubbing, and verify that specific interactions occurred. This chapter covers everything from basic mock creation through advanced features like mocking static methods and constructors introduced in Mockito 3.x/4.x/5.x.

Add this dependency:

```xml
<dependency>
    <groupId>org.mockito</groupId>
    <artifactId>mockito-core</artifactId>
    <version>5.12.0</version>
    <scope>test</scope>
</dependency>

<!-- For mocking static methods and constructors -->
<dependency>
    <groupId>org.mockito</groupId>
    <artifactId>mockito-inline</artifactId>
    <version>5.2.0</version>
    <scope>test</scope>
</dependency>
```

---

## Learning Objectives

By the end of this chapter you will be able to:

- Create mocks using both the static `mock()` method and the `@Mock` annotation with `MockitoExtension`
- Inject mocks into the system under test using `@InjectMocks` and understand the three injection strategies
- Write stub definitions using `when().thenReturn`, `when().thenThrow`, `when().thenAnswer`, `when().thenCallRealMethod`, and the `doReturn/when`, `doThrow/when`, `doAnswer/when` variants
- Verify interaction counts, order, and absence using `verify`, `InOrder`, `verifyNoMoreInteractions`, and `verifyNoInteractions`
- Use built-in argument matchers (`any()`, `eq()`, `anyString`, etc.), custom `argThat` matchers, and `ArgumentCaptor` for flexible verification
- Apply BDDMockito to write tests in the Given/When/Then style
- Create spies and distinguish when to use `spy()` vs `mock()`
- Configure lenient stubbing to suppress unnecessary-stubbing warnings
- Write custom `Answer` implementations and configure mocks with `MockSettings`
- Mock final classes and methods, static methods, and constructors using mockito-inline

---
## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|------------|-------------------|
| Mockito → mocking framework for unit tests | Create mocks with `@Mock`, inject with `@InjectMocks` |
| Stubbing → define mock behavior with `when().thenReturn()` | Support for exceptions, answers, and callbacks |
| Verification → assert interactions with `verify()` | Check invocation count, order, timeout, and argument matching |

---
## Chapter Roadmap

```mermaid
flowchart TD
    A[Mockito] --> B[Mock Creation]
    A --> C[Stubbing]
    A --> D[Verification]
    A --> E[Argument Matchers]
    B --> B1[@Mock / @Spy]
    B --> B2[@InjectMocks]
    C --> C1[when / thenReturn]
    C --> C2[doThrow / doAnswer]
    D --> D1[verify / verifyNoInteractions]
    E --> E1[any / eq / argThat]
```

---
## Concept Comparison Table

| Concept | Description | Key Difference |
|---------|-------------|----------------|
| `@Mock` | Creates a mock instance | All methods return defaults unless stubbed |
| `@Spy` | Wraps a real object | Real methods execute unless stubbed |
| `@InjectMocks` | Injects mocks into the object under test | Constructor, setter, field injection |
| `Mockito.when()` | Defines stubbing | `when(foo.bar()).thenReturn(value)` |

---
## Quick Reference

| Element | Purpose | Example |
|---------|---------|---------|
| `when(mock.method()).thenReturn(x)` | Stubs return value | Basic stubbing pattern |
| `doThrow(e).when(mock).method()` | Stubs exception | For void methods |
| `verify(mock, times(n)).method()` | Verifies invocation count | `atLeast(1)`, `never()` |
| `ArgumentCaptor<T>` | Captures method arguments | `captor.getValue()` for assertion |

---
## Cross-Application Matrix

| Domain | Application | Use Case |
|--------|-------------|----------|
| Service Layer Tests | Mock repositories with `@Mock` | Isolate business logic from data access |
| Controller Tests | Mock service layer | Test HTTP handling without full context |
| Legacy Code | `@Spy` on real objects | Partial mocking for hard-to-test classes |

---
## Chapter Quiz

1. What annotation creates a mock and automatically injects it into the test subject? **Answer:** `@InjectMocks`
2. How do you stub a void method to throw an exception? **Answer:** `doThrow(new RuntimeException()).when(mock).voidMethod()`
3. Which Mockito method checks that no interactions occurred on a mock? **Answer:** `verifyNoInteractions(mock)`

---

## Table of Contents

1. [Mock Creation](#1-mock-creation)
2. [InjectMocks — Wiring the System Under Test](#2-injectmocks--wiring-the-system-under-test)
3. [Stubbing](#3-stubbing)
4. [Verification](#4-verification)
5. [Argument Matchers](#5-argument-matchers)
6. [ArgumentCaptor](#6-argumentcaptor)
7. [BDD Style](#7-bdd-style)
8. [Spying](#8-spying)
9. [Advanced Features](#9-advanced-features)
10. [Summary](#summary)
11. [Exercises](#exercises)

---

## 1. Mock Creation

![Mockito Mocking Framework Flow](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/30-mockito.png)

### 1.1 Static mock() Method


```java
package mockito.creation;

import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

/**
 * The simplest way to create a mock: call Mockito.mock().
 * The mock implements the same interface or extends the same class,
 * but all methods return default values (0, false, null, empty collections).
 */
class MockCreationTest {

    @Test
    void createMockWithStaticMethod() {
        List<String> list = mock(List.class);
        assertNotNull(list);

        // Default behaviour: returns default values for unstubbed methods
        assertNull(list.get(0));         // null for object return
        assertEquals(0, list.size());    // 0 for primitive int
        assertFalse(list.contains("x")); // false for boolean

        // The mock does NOT delegate to the real implementation
        list.add("hello");
        verify(list).add("hello");       // records the interaction
    }

    @Test
    void createMockWithCustomSettings() {
        List<String> list = mock(List.class, withSettings()
            .name("customMock")
            .verboseLogging()
            .defaultAnswer(CALLS_REAL_METHODS) // careful: only works with concrete classes
        );
        // withSettings() returns MockSettings for advanced configuration
    }

    @Test
    void mockConcreteClass() {
        ArrayList<String> arrayList = mock(ArrayList.class);
        // ArrayList is a concrete class — Mockito can mock it
        assertNull(arrayList.get(0)); // default behaviour, not the real ArrayList
    }
}
```

### 1.2 @Mock Annotation with MockitoExtension


```java
package mockito.creation;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

/**
 * @ExtendWith(MockitoExtension.class) initialises all @Mock fields
 * before each test method. This is the preferred approach — it
 * reduces boilerplate, provides better error messages, and integrates
 * with JUnit 5's lifecycle.
 */
@ExtendWith(MockitoExtension.class)
class MockAnnotationTest {

    @Mock
    private Map<String, String> cache;

    @Mock(strict = true)
    private PaymentGateway paymentGateway;

    @Mock(lenient = true)
    private Logger logger;   // lenient = skip unnecessary-stubbing checks

    @Mock(answer = Answers.RETURNS_DEEP_STUBS)
    private DeepService deepService;

    @Test
    void mockIsCreated() {
        assertNotNull(cache);
        assertNull(cache.get("any-key"));
    }

    @Test
    void deepStubs() {
        // With RETURNS_DEEP_STUBS, chained calls return mocks automatically
        // deepService.getConfig().getTimeout() — both getConfig() and getTimeout()
        // return mocks without explicit stubbing
        int timeout = deepService.getConfig().getTimeout();
        assertEquals(0, timeout); // default int value
    }
}

interface PaymentGateway {
    boolean charge(String cardNumber, double amount);
    boolean refund(String transactionId);
}

interface Logger {
    void log(String message);
    void error(String message);
}

interface DeepService {
    Config getConfig();
}

interface Config {
    int getTimeout();
    String getUrl();
}
```

### 1.3 Manual Initialisation with MockitoAnnotations.openMocks


```java
package mockito.creation;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.List;

import static org.mockito.Mockito.*;

/**
 * When you cannot use MockitoExtension (e.g., in a custom test base class,
 * Android, or a DI framework), you can initialise mocks manually.
 */
class ManualInitTest {

    private AutoCloseable mocks;

    @Mock
    private List<String> list;

    @Captor
    private ArgumentCaptor<String> captor;

    @BeforeEach
    void setUp() {
        // Opens all @Mock, @Spy, @Captor, @InjectMocks fields
        mocks = MockitoAnnotations.openMocks(this);
    }

    @AfterEach
    void tearDown() throws Exception {
        // Clean up the mocks after each test
        mocks.close();
    }

    @Test
    void usesMock() {
        list.add("hello");
        verify(list).add("hello");
    }
}
```

> [!TIP]
> Use `@ExtendWith(MockitoExtension.class)` to enable Mockito annotations → this replaces the legacy `MockitoJUnitRunner`.

---

## 2. InjectMocks — Wiring the System Under Test

`@InjectMocks` attempts to inject mock dependencies into the object under test using three strategies, tried in order:

1. **Constructor injection** (preferred)
2. **Setter injection** (if no constructor is found)
3. **Field injection** (direct field reflection)

```java
package mockito.injection;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

/**
 * @InjectMocks creates the SUT (System Under Test) and injects
 * matching @Mock or @Spy beans into it.
 */
@ExtendWith(MockitoExtension.class)
class InjectMocksTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private EmailService emailService;

    @InjectMocks
    private UserRegistrationService registrationService;

    @Test
    void registrationSuccess() {
        User user = new User("alice@example.com", "Alice");
        when(userRepository.save(any(User.class))).thenReturn(user);

        User result = registrationService.register(user);

        assertNotNull(result);
        verify(emailService).sendWelcomeEmail(user.getEmail(), user.getName());
    }
}

// ---- Production Code ----

class UserRegistrationService {

    private final UserRepository userRepository;
    private final EmailService emailService;

    // Constructor injection — Mockito uses this
    public UserRegistrationService(UserRepository userRepository, EmailService emailService) {
        this.userRepository = userRepository;
        this.emailService = emailService;
    }

    public User register(User user) {
        if (userRepository.findByEmail(user.getEmail()) != null) {
            throw new DuplicateUserException("User already exists: " + user.getEmail());
        }
        User saved = userRepository.save(user);
        emailService.sendWelcomeEmail(user.getEmail(), user.getName());
        return saved;
    }
}

interface UserRepository {
    User findByEmail(String email);
    User save(User user);
}

interface EmailService {
    void sendWelcomeEmail(String email, String name);
}

class User {
    private final String email;
    private final String name;

    public User(String email, String name) {
        this.email = email;
        this.name = name;
    }

    public String getEmail() { return email; }
    public String getName() { return name; }
}

class DuplicateUserException extends RuntimeException {
    public DuplicateUserException(String message) {
        super(message);
    }
}
```

### 2.1 Injection Strategy Edge Cases


```java
package mockito.injection;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.*;

/**
 * Demonstrates the three injection strategies Mockito tries
 * and how to handle ambiguous injections.
 */
@ExtendWith(MockitoExtension.class)
class InjectionStrategyTest {

    // Constructor injection (tried first)
    // Mockito takes the constructor with the most parameters
    // and tries to match mocks by type. If multiple mocks have
    // the same type, use @Mock(name = "...") to differentiate.

    @Mock(name = "primaryDataSource")
    private DataSource dataSource1;

    @Mock(name = "secondaryDataSource")
    private DataSource dataSource2;

    @InjectMocks
    private MultiDataSourceService multiService;

    @Test
    void constructorInjection() {
        assertNotNull(multiService);
    }

    // Setter injection (tried second, if no constructor)
    // Setter-based: injectMocks
    //
    // public class SetterService {
    //     private DataSource ds;
    //
    //     @Autowired
    //     public void setDataSource(DataSource ds) { this.ds = ds; }
    // }
}

class MultiDataSourceService {

    private final DataSource primary;
    private final DataSource secondary;

    public MultiDataSourceService(DataSource primary, DataSource secondary) {
        this.primary = primary;
        this.secondary = secondary;
    }

    public DataSource getPrimary() { return primary; }
    public DataSource getSecondary() { return secondary; }
}

interface DataSource {
    String getConnection();
}
```

---

## 3. Stubbing

Stubbing defines what a mock returns (or does) when a specific method is called.

### 3.1 when().thenReturn / thenThrow / thenAnswer / thenCallRealMethod


```java
package mockito.stubbing;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.invocation.InvocationOnMock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.mockito.stubbing.Answer;

import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
import static org.mockito.ArgumentMatchers.*;

@ExtendWith(MockitoExtension.class)
class WhenThenStubbingTest {

    @Mock
    private List<String> list;

    @Mock
    private InventoryService inventory;

    @Test
    void thenReturn() {
        when(list.get(0)).thenReturn("first");
        when(list.get(1)).thenReturn("second");
        // Stub void methods differently (see doReturn section below)

        assertEquals("first", list.get(0));
        assertEquals("second", list.get(1));
        assertNull(list.get(2)); // unstubbed — returns default
    }

    @Test
    void thenReturnMultipleTimes() {
        when(list.get(0))
            .thenReturn("first")
            .thenReturn("second")
            .thenReturn("third");

        assertEquals("first", list.get(0));
        assertEquals("second", list.get(0));
        assertEquals("third", list.get(0));
        assertEquals("third", list.get(0)); // subsequent calls keep the last value
    }

    @Test
    void thenReturnWithThenThrow() {
        when(list.get(0))
            .thenReturn("ok")
            .thenThrow(new RuntimeException("fail"));

        assertEquals("ok", list.get(0));
        assertThrows(RuntimeException.class, () -> list.get(0));
    }

    @Test
    void thenThrow() {
        when(list.get(anyInt())).thenThrow(IndexOutOfBoundsException.class);

        assertThrows(IndexOutOfBoundsException.class, () -> list.get(0));
        assertThrows(IndexOutOfBoundsException.class, () -> list.get(99));
    }

    @Test
    void thenThrowWithInstance() {
        when(list.size()).thenThrow(new IllegalStateException("corrupted list"));

        assertThrows(IllegalStateException.class, () -> list.size());
    }

    @Test
    void thenAnswer() {
        when(list.get(anyInt())).thenAnswer(invocation -> {
            int index = invocation.getArgument(0);
            return "element-" + index;
        });

        assertEquals("element-0", list.get(0));
        assertEquals("element-5", list.get(5));
        assertEquals("element-99", list.get(99));
    }

    @Test
    void thenAnswerWithLambda() {
        when(list.get(anyInt())).thenAnswer(i -> "value-" + i.getArgument(0));

        assertEquals("value-42", list.get(42));
    }

    @Test
    void thenCallRealMethod() {
        // Only works if the mocked type is a concrete class
        ArrayList<String> realList = mock(ArrayList.class, CALLS_REAL_METHODS);
        // OR use thenCallRealMethod for specific methods:
        ArrayList<String> partialMock = mock(ArrayList.class);
        when(partialMock.size()).thenCallRealMethod();

        // size() is delegated to the real ArrayList
        // All other methods return defaults
    }

    @Test
    void inventoryStubbing() {
        when(inventory.getStock("LAPTOP")).thenReturn(10);
        when(inventory.getStock("PHONE")).thenReturn(50);
        when(inventory.getStock("TABLET")).thenReturn(0);

        assertEquals(10, inventory.getStock("LAPTOP"));
        assertEquals(50, inventory.getStock("PHONE"));
        assertEquals(0, inventory.getStock("TABLET"));

        // Unstubbed product
        assertEquals(0, inventory.getStock("MONITOR"));
    }

    @Test
    void thenReturnWithNull() {
        // Returning null for non-primitive returns
        when(list.get(0)).thenReturn(null);
        assertNull(list.get(0));

        // For primitive wrappers, autoboxing handles null
        when(list.size()).thenReturn(null);
        // This works but is unusual — prefer returning explicit values
    }
}

interface InventoryService {
    int getStock(String productCode);
}
```

### 3.2 doReturn/when, doThrow/when, doAnswer/when


The `do*` family is used when `when()` cannot be used — primarily for **void methods** and **spies**.

```java
package mockito.stubbing;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class DoWhenStubbingTest {

    @Mock
    private EventBus eventBus;

    @Mock
    private List<String> list;

    @Test
    void doThrowOnVoidMethod() {
        doThrow(new RuntimeException("bus error")).when(eventBus).publish(any());

        assertThrows(RuntimeException.class, () -> eventBus.publish("event1"));
    }

    @Test
    void doThrowOnVoidMethodWithClass() {
        doThrow(RuntimeException.class).when(eventBus).publish(any());
        assertThrows(RuntimeException.class, () -> eventBus.publish("x"));
    }

    @Test
    void doReturnOnSpy() {
        // When spying, when().thenReturn() would CALL the real method first.
        // doReturn avoids this:
        List<String> spyList = spy(ArrayList.class);
        doReturn(100).when(spyList).size();

        assertEquals(100, spyList.size());

        // If we used when(spyList.size()).thenReturn(100),
        // the real size() method would be called first.
    }

    @Test
    void doAnswer() {
        doAnswer(invocation -> {
            String arg = invocation.getArgument(0);
            System.out.println("Published: " + arg);
            return null; // void
        }).when(eventBus).publish(anyString());

        assertDoesNotThrow(() -> eventBus.publish("hello"));
    }

    @Test
    void doNothing() {
        doNothing().when(eventBus).publish(anyString());
        assertDoesNotThrow(() -> eventBus.publish("anything"));
    }

    @Test
    void doCallRealMethod() {
        // For a mock, call the real implementation of a specific method
        ArrayList<String> mockList = mock(ArrayList.class);
        doCallRealMethod().when(mockList).clear();
        // When clear() is called, the real ArrayList.clear() runs

        doCallRealMethod().when(mockList).size();
        // When size() is called, the real ArrayList.size() runs
    }

    @Test
    void multipleDoCalls() {
        doNothing()
            .doThrow(new RuntimeException("second call fails"))
            .when(eventBus).publish(anyString());

        eventBus.publish("first"); // ok
        assertThrows(RuntimeException.class, () -> eventBus.publish("second"));
        assertThrows(RuntimeException.class, () -> eventBus.publish("third")); // last value repeats
    }
}

interface EventBus {
    void publish(String event);
    void publish(String event, Object payload);
}
```

### 3.3 Stubbing with Custom Answer


```java
package mockito.stubbing;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.invocation.InvocationOnMock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.mockito.stubbing.Answer;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

/**
 * The Answer interface gives full control over mock behaviour.
 * It receives the invocation and returns whatever you like.
 */
@ExtendWith(MockitoExtension.class)
class CustomAnswerTest {

    @Mock
    private CalculatorService calculatorService;

    @Test
    void answerWithMultipleArgs() {
        when(calculatorService.add(anyInt(), anyInt())).thenAnswer(
            new Answer<Integer>() {
                @Override
                public Integer answer(InvocationOnMock invocation) {
                    Object[] args = invocation.getArguments();
                    int a = (int) args[0];
                    int b = (int) args[1];
                    System.out.println("Adding " + a + " + " + b);
                    return a + b;
                }
            }
        );

        assertEquals(5, calculatorService.add(2, 3));
        assertEquals(100, calculatorService.add(40, 60));
    }

    @Test
    void answerWithLambda() {
        when(calculatorService.multiply(anyInt(), anyInt()))
            .thenAnswer(inv -> inv.getArgument(0) * inv.getArgument(1));

        assertEquals(6, calculatorService.multiply(2, 3));
        assertEquals(0, calculatorService.multiply(5, 0));
    }

    @Test
    void answerThatThrows() {
        when(calculatorService.divide(anyInt(), eq(0)))
            .thenAnswer(inv -> { throw new ArithmeticException("Division by zero"); });

        when(calculatorService.divide(anyInt(), intThat(n -> n != 0)))
            .thenAnswer(inv -> inv.getArgument(0) / inv.getArgument(1));

        assertThrows(ArithmeticException.class, () -> calculatorService.divide(10, 0));
        assertEquals(5, calculatorService.divide(10, 2));
    }

    @Test
    void answerWithSideEffects() {
        when(calculatorService.add(anyInt(), anyInt())).thenAnswer(invocation -> {
            int a = invocation.getArgument(0);
            int b = invocation.getArgument(1);
            // Side effect: modify a captured data structure
            return a + b;
        });
    }
}

interface CalculatorService {
    int add(int a, int b);
    int subtract(int a, int b);
    int multiply(int a, int b);
    int divide(int a, int b);
}
```

> [!WARNING]
> Do not over-stub. Only stub methods that will actually be called by the code under test → unnecessary stubbing makes tests brittle.

---

## 4. Verification

Verification checks that specific interactions happened on the mock.

### 4.1 verify with Times


```java
package mockito.verification;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static org.mockito.Mockito.*;
import static org.mockito.ArgumentMatchers.*;

@ExtendWith(MockitoExtension.class)
class VerificationTest {

    @Mock
    private List<String> list;

    @Mock
    private EmailService emailService;

    @Test
    void verifyTimes() {
        list.add("one");
        list.add("one");
        list.add("two");

        verify(list, times(2)).add("one");
        verify(list, times(1)).add("two");
        verify(list, atLeastOnce()).add("one");
        verify(list, atLeast(1)).add("two");
        verify(list, atMost(2)).add("one");
        verify(list, never()).clear();
    }

    @Test
    void verifyOnly() {
        // verifyNoOtherInteractions: checks that ONLY the verified
        // interaction happened — no other calls on this mock.
        list.add("hello");
        verify(list).add("hello");
        verifyNoMoreInteractions(list); // passes

        // If we add another call:
        // list.size();
        // verify(list).add("hello");
        // verifyNoMoreInteractions(list); // FAILS: size() was not verified
    }

    @Test
    void verifyNoInteractions() {
        // verifyNoInteractions: checks that NO calls happened at all
        verifyNoInteractions(list); // list has no interactions — passes
        verifyNoInteractions(emailService);
    }

    @Test
    void verifyWithDescription() {
        list.add("hello");
        verify(list, description("add should have been called with 'hello'"))
            .add("hello");
    }

    @Test
    void verifyCallRealMethod() {
        // When a mock is set to CALLS_REAL_METHODS, verify still tracks calls
        ArrayList<String> realMock = mock(ArrayList.class, CALLS_REAL_METHODS);
        realMock.add("test");
        verify(realMock).add("test");
    }
}

interface EmailService {
    void send(String to, String subject);
    void sendBulk(List<String> recipients, String subject);
}
```

### 4.2 InOrder Verification


```java
package mockito.verification;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InOrder;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static org.mockito.Mockito.*;

/**
 * InOrder verifies that interactions happened in a specific sequence.
 */
@ExtendWith(MockitoExtension.class)
class InOrderTest {

    @Mock
    private List<String> first;

    @Mock
    private List<String> second;

    @Test
    void verifyOrderOnSingleMock() {
        first.add("a");
        first.add("b");
        first.add("c");

        InOrder inOrder = inOrder(first);
        inOrder.verify(first).add("a");
        inOrder.verify(first).add("b");
        inOrder.verify(first).add("c");
    }

    @Test
    void verifyOrderAcrossMultipleMocks() {
        first.add("a");
        second.add("b");
        first.add("c");

        InOrder inOrder = inOrder(first, second);
        inOrder.verify(first).add("a");
        inOrder.verify(second).add("b");
        inOrder.verify(first).add("c");

        // The order of verify calls must match the actual interaction order
    }

    @Test
    void verifyOrderFailsWhenWrong() {
        first.add("a");

        InOrder inOrder = inOrder(first);
        // If we verify a call that hasn't happened yet:
        // inOrder.verify(first).add("b"); // this would make the next line fail
        inOrder.verify(first).add("a");

        // Uncommenting the following would fail because add("a") already consumed:
        // inOrder.verify(first).add("a"); // WRONG ORDER
    }

    @Test
    void verifyOrderWithTimes() {
        first.add("a");
        first.add("a");
        second.add("b");

        InOrder inOrder = inOrder(first, second);
        inOrder.verify(first, times(2)).add("a");
        inOrder.verify(second).add("b");
    }

    @Test
    void verifyNoMoreInteractionsAfterOrder() {
        first.add("a");
        second.add("b");

        InOrder inOrder = inOrder(first, second);
        inOrder.verify(first).add("a");
        inOrder.verify(second).add("b");

        // After InOrder verification, check no extra interactions
        // Note: verifyNoMoreInteractions must be called on mocks directly,
        // not through InOrder
    }
}
```

### 4.3 Timeout Verification


```java
package mockito.verification;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

import static org.mockito.Mockito.*;

/**
 * verify with timeout: waits up to the specified duration for the
 * interaction to happen. Useful for asynchronous code.
 *
 * after(): waits the full duration, then checks.
 * timeout(): checks periodically and returns as soon as satisfied.
 */
@ExtendWith(MockitoExtension.class)
class TimeoutVerificationTest {

    @Mock
    private AsyncCallback callback;

    @Test
    void verifyTimeout() throws Exception {
        ExecutorService executor = Executors.newSingleThreadExecutor();
        executor.submit(() -> {
            Thread.sleep(200);
            callback.onComplete("success");
            return null;
        });

        // timeout: polls every 10ms — returns as soon as the interaction happens
        verify(callback, timeout(1000)).onComplete("success");
        executor.shutdown();
    }

    @Test
    void verifyAfter() {
        ExecutorService executor = Executors.newSingleThreadExecutor();
        executor.submit(() -> {
            Thread.sleep(50);
            callback.onComplete("done");
            return null;
        });

        // after: waits the full 300ms regardless
        verify(callback, after(300)).onComplete("done");
        executor.shutdown();
    }

    @Test
    void verifyTimeoutWithTimes() {
        ExecutorService executor = Executors.newSingleThreadExecutor();
        executor.submit(() -> {
            Thread.sleep(100);
            callback.onComplete("first");
            Thread.sleep(100);
            callback.onComplete("second");
            return null;
        });

        verify(callback, timeout(2000).times(2)).onComplete(anyString());
        executor.shutdown();
    }
}

interface AsyncCallback {
    void onComplete(String result);
    void onError(Throwable t);
}
```

> [!NOTE]
> Verification is optional → only verify interactions when proving a side effect occurred. Testing return values is usually sufficient.

---

## 5. Argument Matchers

Matchers allow flexible stubbing and verification when you don't know the exact argument values at test-writing time.

### 5.1 Built-in Matchers


```java
package mockito.matchers;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentMatcher;
import org.mockito.ArgumentMatchers;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Set;

import static org.mockito.Mockito.*;
import static org.mockito.ArgumentMatchers.*;

@ExtendWith(MockitoExtension.class)
class BuiltInMatchersTest {

    @Mock
    private List<String> list;

    @Mock
    private Set<Integer> set;

    @Test
    void anyAndEq() {
        when(list.get(anyInt())).thenReturn("found");

        assertEquals("found", list.get(0));
        assertEquals("found", list.get(42));

        when(list.contains(eq("specific"))).thenReturn(true);
        assertTrue(list.contains("specific"));
        assertFalse(list.contains("other")); // unstubbed
    }

    @Test
    void typedMatchers() {
        when(list.get(anyInt())).thenReturn("x");
        when(list.indexOf(anyString())).thenReturn(42);
        when(list.contains(anyString())).thenReturn(true);

        // Type-specific matchers:
        // anyInt(), anyLong(), anyDouble(), anyFloat(),
        // anyBoolean(), anyByte(), anyShort(), anyChar()
        // anyString(), anyList(), anySet(), anyMap(),
        // anyCollection(), anyIterable()
    }

    @Test
    void nullableAndNotNull() {
        when(list.contains(nullable(String.class))).thenReturn(true);
        assertTrue(list.contains("hello"));
        assertTrue(list.contains(null));

        when(list.contains(notNull())).thenReturn(true);
    }

    @Test
    void stringMatchers() {
        when(list.contains(startsWith("prefix_"))).thenReturn(true);
        when(list.contains(endsWith("_suffix"))).thenReturn(true);
        when(list.contains(contains("substring"))).thenReturn(true);

        assertTrue(list.contains("prefix_value"));
        assertTrue(list.contains("value_suffix"));
        assertTrue(list.contains("has_substring_here"));

        // also: matches(String regex)
    }

    @Test
    void intMatchers() {
        when(list.get(intThat(n -> n >= 0 && n < 10))).thenReturn("small");
        when(list.get(intThat(n -> n >= 10))).thenReturn("large");

        assertEquals("small", list.get(5));
        assertEquals("large", list.get(42));
    }

    @Test
    void combinableMatchers() {
        // Matchers can be combined in a stub
    }
}
```

### 5.2 Custom ArgumentMatcher (argThat)


```java
package mockito.matchers;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentMatcher;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.Mockito.*;
import static org.mockito.ArgumentMatchers.*;
import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
class CustomMatcherTest {

    @Mock
    private InventoryService inventory;

    private record Product(String id, String category, double price) {}

    @Test
    void argThatWithLambda() {
        when(inventory.getStock(argThat(code -> code.startsWith("ELEC-"))))
            .thenReturn(50);
        when(inventory.getStock(argThat(code -> code.startsWith("FOOD-"))))
            .thenReturn(200);

        assertEquals(50, inventory.getStock("ELEC-001"));
        assertEquals(200, inventory.getStock("FOOD-001"));
        assertEquals(0, inventory.getStock("OTHER-001")); // unstubbed
    }

    @Test
    void argThatWithCustomMatcherClass() {
        when(inventory.getStock(argThat(new ProductCodeMatcher("ELEC"))))
            .thenReturn(100);

        assertEquals(100, inventory.getStock("ELEC-XYZ"));
        assertEquals(0, inventory.getStock("BOOK-001"));
    }

    @Test
    void verifyWithCustomMatcher() {
        inventory.updateStock("ELEC-001", 10);

        verify(inventory).updateStock(
            argThat(code -> code.startsWith("ELEC")),
            anyInt()
        );
    }

    @Test
    void multipleCustomMatchers() {
        when(inventory.updateStock(
            argThat(c -> c.length() >= 5),
            argThat(q -> q > 0)
        )).thenReturn(true);

        assertTrue(inventory.updateStock("CODE123", 5));
        assertFalse(inventory.updateStock("AB", 0)); // both matchers fail
    }
}

class ProductCodeMatcher implements ArgumentMatcher<String> {

    private final String prefix;

    ProductCodeMatcher(String prefix) {
        this.prefix = prefix;
    }

    @Override
    public boolean matches(String code) {
        return code != null && code.startsWith(prefix);
    }

    @Override
    public String toString() {
        return "[code starting with " + prefix + "]";
    }
}

interface InventoryService {
    int getStock(String productCode);
    boolean updateStock(String productCode, int quantity);
}
```

---

## 6. ArgumentCaptor

`ArgumentCaptor` captures arguments passed to mock methods for later inspection. Use it when you need to verify the exact structure, fields, or computed values of an argument.

### 6.1 Basic Captor


```java
package mockito.captor;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class ArgumentCaptorTest {

    @Mock
    private EmailService emailService;

    @Captor
    private ArgumentCaptor<Email> emailCaptor;

    @Captor
    private ArgumentCaptor<String> stringCaptor;

    @Test
    void captureEmailSent() {
        Email expected = new Email("alice@example.com", "Welcome!", "<h1>Hi</h1>");
        emailService.send(expected);

        verify(emailService).send(emailCaptor.capture());

        Email captured = emailCaptor.getValue();
        assertEquals("alice@example.com", captured.to());
        assertEquals("Welcome!", captured.subject());
        assertTrue(captured.body().contains("Hi"));
    }

    @Test
    void captureMultipleValues() {
        emailService.send(new Email("a@x.com", "S1", "Body1"));
        emailService.send(new Email("b@x.com", "S2", "Body2"));

        verify(emailService, times(2)).send(emailCaptor.capture());

        var allValues = emailCaptor.getAllValues();
        assertEquals(2, allValues.size());
        assertEquals("S1", allValues.get(0).subject());
        assertEquals("S2", allValues.get(1).subject());
    }

    @Test
    void captureStringArgument() {
        emailService.sendWelcome("user@example.com", "Alice");

        verify(emailService).sendWelcome(
            stringCaptor.capture(),
            stringCaptor.capture()
        );

        var values = stringCaptor.getAllValues();
        assertEquals("user@example.com", values.get(0));
        assertEquals("Alice", values.get(1));
    }
}

record Email(String to, String subject, String body) {}

interface EmailService {
    void send(Email email);
    void sendWelcome(String email, String name);
}
```

### 6.2 Captor with Complex Verification


```java
package mockito.captor;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDate;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class ComplexCaptorTest {

    @Mock
    private OrderRepository orderRepository;

    @Captor
    private ArgumentCaptor<List<OrderLine>> linesCaptor;

    @Captor
    private ArgumentCaptor<Order> orderCaptor;

    @Test
    void captureOrderWithLines() {
        OrderService orderService = new OrderService(orderRepository);
        List<OrderLine> lines = List.of(
            new OrderLine("LAPTOP", 1, 999.99),
            new OrderLine("MOUSE", 2, 49.99)
        );

        orderService.placeOrder("customer-1", lines);

        verify(orderRepository).save(orderCaptor.capture());
        Order saved = orderCaptor.getValue();

        assertNotNull(saved.id());
        assertEquals("customer-1", saved.customerId());
        assertEquals(2, saved.lines().size());
        assertEquals(1099.97, saved.total(), 0.01);
    }

    @Test
    void captureWithCaptorCreatedManually() {
        // Sometimes it's clearer to create the captor inline
        ArgumentCaptor<String> manualCaptor = ArgumentCaptor.forClass(String.class);

        orderRepository.log("order-created", "Order 123 created");
        verify(orderRepository).log(anyString(), manualCaptor.capture());

        assertEquals("Order 123 created", manualCaptor.getValue());
    }

    @Test
    void verifyWithArgumentMatchersAndCaptor() {
        Order order = new Order("id-1", "cust-1", List.of(), 0.0);
        orderRepository.save(order);

        // Captor captures on a specific matcher
        verify(orderRepository).save(argThat(o -> o.customerId().equals("cust-1")));
    }
}

record OrderLine(String productCode, int quantity, double unitPrice) {}
record Order(String id, String customerId, List<OrderLine> lines, double total) {}

interface OrderRepository {
    Order save(Order order);
    Order findById(String id);
    void log(String event, String message);
}

class OrderService {

    private final OrderRepository repository;

    OrderService(OrderRepository repository) {
        this.repository = repository;
    }

    Order placeOrder(String customerId, List<OrderLine> lines) {
        double total = lines.stream()
            .mapToDouble(l -> l.unitPrice() * l.quantity())
            .sum();
        Order order = new Order(
            "ord-" + System.currentTimeMillis(),
            customerId,
            lines,
            total
        );
        return repository.save(order);
    }
}
```

---

## 7. BDD Style

BDDMockito provides aliases that match BDD (Behaviour-Driven Development) language: `given` (instead of `when`), `willReturn` (instead of `thenReturn`), `then` (instead of `verify`), and `should` (instead of `verify`).

```java
package mockito.bdd;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.BDDMockito;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.BDDMockito.*;
import static org.junit.jupiter.api.Assertions.*;

/**
 * BDDMockito uses BDD-style language that reads naturally:
 *
 * // Given — stub configuration
 * given(repository.findById(1L)).willReturn(Optional.of(user));
 *
 * // When — exercise the SUT
 * User result = service.getUser(1L);
 *
 * // Then — verify outcomes
 * then(repository).should(times(1)).findById(1L);
 */
@ExtendWith(MockitoExtension.class)
class BddStyleTest {

    @Mock
    private UserRepository repository;

    @Mock
    private NotificationService notificationService;

    @Test
    void bddStyleStubbing() {
        // Given
        User user = new User(1L, "Alice", "alice@example.com");
        given(repository.findById(1L)).willReturn(java.util.Optional.of(user));

        // When
        UserService service = new UserService(repository, notificationService);
        User result = service.getUser(1L);

        // Then
        assertNotNull(result);
        assertEquals("Alice", result.name());

        // Then — verify interactions
        then(repository).should(times(1)).findById(1L);
        then(notificationService).should(never()).notify(anyString());
    }

    @Test
    void bddWillThrow() {
        // Given
        given(repository.findById(anyLong())).willThrow(
            new RuntimeException("Database connection lost"));

        // When / Then
        UserService service = new UserService(repository, notificationService);
        assertThrows(RuntimeException.class, () -> service.getUser(1L));
    }

    @Test
    void bddWillAnswer() {
        // Given
        given(repository.findById(anyLong())).willAnswer(invocation -> {
            Long id = invocation.getArgument(0);
            return java.util.Optional.of(new User(id, "User-" + id, "user" + id + "@test.com"));
        });

        // When
        UserService service = new UserService(repository, notificationService);
        User result = service.getUser(99L);

        // Then
        assertEquals("User-99", result.name());
    }

    @Test
    void bddWillCallRealMethod() {
        // Use willCallRealMethod for spies in BDD style
        // given(spy).someMethod().willCallRealMethod();
    }

    @Test
    void bddShouldWithTimes() {
        // Given
        User user = new User(1L, "Bob", "bob@example.com");
        given(repository.findById(1L)).willReturn(java.util.Optional.of(user));

        // When
        UserService service = new UserService(repository, notificationService);
        User result1 = service.getUser(1L);
        User result2 = service.getUser(1L);

        // Then — should verify with exact times
        then(repository).should(times(2)).findById(1L);
    }

    @Test
    void bddShouldInOrder() {
        // Given
        User user = new User(1L, "Carol", "carol@example.com");
        given(repository.save(any(User.class))).willReturn(user);

        // When
        UserService service = new UserService(repository, notificationService);
        service.createUser("Carol", "carol@example.com");

        // Then — ordered verification
        then(repository).should().findByEmail("carol@example.com");
        then(repository).should().save(any(User.class));
        then(notificationService).should().notify("Welcome Carol!");
    }

    // BDDMockito's then() returns BDDMockito.Then — not Mockito.verify directly
    // but they behave equivalently
}

record User(Long id, String name, String email) {}

interface UserRepository {
    java.util.Optional<User> findById(Long id);
    User save(User user);
    java.util.Optional<User> findByEmail(String email);
}

interface NotificationService {
    void notify(String message);
}

class UserService {

    private final UserRepository repository;
    private final NotificationService notificationService;

    UserService(UserRepository repository, NotificationService notificationService) {
        this.repository = repository;
        this.notificationService = notificationService;
    }

    User getUser(Long id) {
        return repository.findById(id)
            .orElseThrow(() -> new RuntimeException("User not found: " + id));
    }

    User createUser(String name, String email) {
        repository.findByEmail(email).ifPresent(u -> {
            throw new RuntimeException("Email already exists");
        });
        User user = new User(null, name, email);
        User saved = repository.save(user);
        notificationService.notify("Welcome " + name + "!");
        return saved;
    }
}
```

---

## 8. Spying

A spy is a **partial mock**: it wraps a real object and by default delegates to real methods, but can be selectively stubbed to override specific behaviour.

### 8.1 spy() and @Spy


```java
package mockito.spy;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.mockito.Spy;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

/**
 * When to use spy vs mock:
 *
 * spy():  You want the real behaviour most of the time,
 *        but need to stub a few specific methods.
 * mock(): You want a completely controlled double — no real
 *        implementation runs unless explicitly stubbed.
 */
@ExtendWith(MockitoExtension.class)
class SpyTest {

    @Spy
    private List<String> list = new ArrayList<>();

    @Test
    void spyDelegatesToRealMethods() {
        list.add("hello");
        list.add("world");

        assertEquals(2, list.size()); // real size() is called
        assertEquals("hello", list.get(0)); // real get() is called
    }

    @Test
    void spyWithStubbedMethod() {
        // Stub a specific method — the rest remain real
        doReturn(100).when(list).size();

        list.add("hello");

        assertEquals(100, list.size()); // stubbed
        assertEquals("hello", list.get(0)); // real
    }

    @Test
    void spyCreatedWithStaticMethod() {
        List<String> spyList = spy(new ArrayList<>());
        spyList.add("test");

        assertEquals(1, spyList.size());
        doReturn(999).when(spyList).size();
        assertEquals(999, spyList.size());
    }

    @Test
    void spyThrowsException() {
        List<String> spyList = spy(new ArrayList<>());
        doThrow(new RuntimeException("spy exception")).when(spyList).clear();

        assertThrows(RuntimeException.class, () -> spyList.clear());
    }

    @Test
    void spyVerifyInteractions() {
        list.add("real add");
        list.size();

        verify(list).add("real add");
        verify(list).size();
        verify(list, never()).clear();
    }
}
```

### 8.2 Spy vs Mock — When to Use What


```java
package mockito.spy;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.Spy;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

/**
 * Comparing spy and mock behaviour side by side.
 */
@ExtendWith(MockitoExtension.class)
class SpyVsMockTest {

    @Mock
    private List<String> mockList;

    @Spy
    private List<String> spyList = new ArrayList<>();

    @Test
    void mockReturnsDefaults() {
        assertNull(mockList.get(0));
        assertEquals(0, mockList.size());
        assertFalse(mockList.contains("x"));

        // Adding to a mock does nothing visible
        mockList.add("hello");
        assertEquals(0, mockList.size()); // still 0 — mock ignores real behaviour
    }

    @Test
    void spyCallsRealMethods() {
        assertThrows(IndexOutOfBoundsException.class, () -> spyList.get(0));

        spyList.add("hello");
        assertEquals(1, spyList.size());
        assertTrue(spyList.contains("hello"));
    }

    @Test
    void importantGotchaWithSpy() {
        // IMPORTANT: When stubbing with when().thenReturn() on a spy,
        // the real method is still called first!
        List<String> spy = spy(new ArrayList<>());

        // This calls the real spy.get(0) which throws IndexOutOfBoundsException!
        // Uncomment to see:
        // when(spy.get(0)).thenReturn("boom"); // throws!

        // ALWAYS use doReturn for stubbing spies:
        doReturn("safe").when(spy).get(0);
        assertEquals("safe", spy.get(0));
    }

    @Test
    void whenToUseSpy() {
        // Use spy when:
        // 1. Most methods should behave normally
        // 2. You only need to override a few specific methods
        // 3. The object has important internal state or side effects
        // 4. You're testing legacy code that can't be easily refactored

        // Use mock when:
        // 1. You want complete control over all interactions
        // 2. The dependency is expensive or has side effects
        // 3. You're testing the SUT's interaction with the dependency
        // 4. You need to verify behaviour (calls, arguments, order)
    }
}
```

### 8.3 Partial Mocking with Answer


```java
package mockito.spy;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class PartialMockTest {

    @Test
    void partialMockWithAnswer() {
        ArrayList<String> list = Mockito.mock(ArrayList.class, withSettings()
            .useConstructor()
            .defaultAnswer(CALLS_REAL_METHODS)
        );

        // Now we have a real ArrayList that delegates to its constructor
        list.add("test");

        // Override size() to return a fixed value
        doReturn(42).when(list).size();

        assertEquals(42, list.size());

        // But real behaviour for other methods
        assertEquals("test", list.get(0));
    }

    @Test
    void partialMockWithSpy() {
        // Alternative: use spy for partial mocking
        ArrayList<String> list = spy(new ArrayList<>());
        list.add("a");

        doReturn(100).when(list).size();
        assertEquals(100, list.size());
        assertEquals("a", list.get(0));
    }
}
```

---

## 9. Advanced Features

### 9.1 Lenient Stubbing


Mockito by default checks that all stubbed methods are actually used during the test. If a stub is never used, it throws `UnnecessaryStubbingException`. Enable lenient mode to suppress this:

```java
package mockito.advanced;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.mockito.quality.Strictness;

import java.util.List;
import java.util.Map;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

/**
 * Lenient stubbing suppresses the "unnecessary stubbing" exception
 * that Mockito throws when a stub is never used during a test.
 */
@ExtendWith(MockitoExtension.class)
class LenientStubbingTest {

    @Mock(lenient = true)
    private List<String> lenientList;

    @Mock
    private List<String> strictList;

    @Test
    void lenientStubbingIsNotChecked() {
        when(lenientList.get(0)).thenReturn("a");
        when(lenientList.get(1)).thenReturn("b");

        // Only get(0) is used — get(1) stub is unnecessary but
        // does NOT cause a failure because the mock is lenient
        lenientList.get(0);
        verify(lenientList).get(0);
    }

    @Test
    void strictStubbingCausesFailure() {
        // If we add an unused stub, the test fails:
        // when(strictList.get(0)).thenReturn("x");
        // The test above would fail because get(0) is never called
    }
}

/**
 * Set strictness at the class level.
 */
@MockitoSettings(strictness = Strictness.LENIENT)
class ClassLevelLenientTest {

    @Mock
    private Map<String, String> map;

    @Test
    void classLevelLenient() {
        when(map.get("unused")).thenReturn("value");
        // Even though map.get("unused") is never called,
        // no exception is thrown because the whole class is lenient
        assertNull(map.get("other"));
    }
}
```

### 9.2 MockSettings


```java
package mockito.advanced;

import org.junit.jupiter.api.Test;
import org.mockito.MockSettings;
import org.mockito.Mockito;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class MockSettingsTest {

    @Test
    void customMockSettings() {
        MockSettings settings = withSettings()
            .name("myCustomMock")
            .verboseLogging()             // logs all interactions
            .defaultAnswer(RETURNS_SMART_NULLS) // more helpful NullPointerException
            .withoutAnnotations();        // skip annotation processing

        List<String> list = mock(List.class, settings);

        assertNotNull(list);
    }

    @Test
    void mockWithDefaultAnswer() {
        // RETURNS_SMART_NULLS: returns smart objects instead of null
        List<String> smartList = mock(List.class, RETURNS_SMART_NULLS);
        // smartList.get(0) returns "" (empty string) instead of null
        // This can make tests fail with clearer errors

        // RETURNS_DEEP_STUBS: for chained calls
        // RETURNS_MOCKS: returns mocks instead of nulls
        // RETURNS_DEFAULTS: default behaviour (zeros, nulls, falses)
    }

    @Test
    void mockWithSerializable() {
        MockSettings settings = withSettings().serializable();
        List<String> serializableList = mock(List.class, settings);
        // The mock can now be serialized
        assertNotNull(serializableList);
    }

    @Test
    void mockWithConstructor() {
        // Mock a concrete class through its constructor
        // Requires mockito-inline
        // ArrayList<String> list = mock(ArrayList.class, withSettings()
        //     .useConstructor("initial", "args"));
    }
}
```

### 9.3 Mocking Final Classes and Methods


Since Mockito 2.x, final classes and methods can be mocked without any configuration. Mockito 5.x enables this by default via `mockito-inline`.

```java
package mockito.advanced;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

/**
 * Mockito 2.1+ can mock final classes and methods.
 * No config needed for Mockito 5.x with mockito-inline on the classpath.
 */
@ExtendWith(MockitoExtension.class)
class FinalMockTest {

    @Mock
    private FinalClass finalClass;

    @Test
    void mockFinalClass() {
        assertNotNull(finalClass);
    }

    @Test
    void stubFinalMethod() {
        FinalService service = mock(FinalService.class);
        when(service.finalMethod()).thenReturn("mocked");
        assertEquals("mocked", service.finalMethod());
    }

    @Test
    void verifyFinalMethod() {
        FinalService service = mock(FinalService.class);
        service.finalMethod();

        verify(service).finalMethod();
    }
}

final class FinalClass {
    final String greet() {
        return "hello";
    }
}

class FinalService {
    final String finalMethod() {
        return "original";
    }
}
```

### 9.4 Mocking Static Methods


Requires `mockito-inline` on the classpath. This feature enables mocking of static utility methods, `java.lang.Math`, `UUID.randomUUID()`, etc.

```java
package mockito.advanced;

import org.junit.jupiter.api.Test;
import org.mockito.MockedStatic;
import org.mockito.Mockito;

import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

/**
 * Static mocking uses try-with-resources for scoped mocking.
 * The mock is only active within the try block.
 */
class StaticMockTest {

    @Test
    void mockUUID() {
        UUID fixedUuid = UUID.fromString("00000000-0000-0000-0000-000000000001");

        try (MockedStatic<UUID> mockedUuid = mockStatic(UUID.class)) {
            mockedUuid.when(UUID::randomUUID).thenReturn(fixedUuid);

            UUID result = UUID.randomUUID();
            assertEquals(fixedUuid, result);
        }

        // Outside the try block, UUID.randomUUID() returns real values
    }

    @Test
    void mockMathRandom() {
        try (MockedStatic<Math> mockedMath = mockStatic(Math.class)) {
            mockedMath.when(() -> Math.random()).thenReturn(0.42);

            assertEquals(0.42, Math.random(), 0.0001);
        }
    }

    @Test
    void mockStaticWithArguments() {
        try (MockedStatic<String> mockedString = mockStatic(String.class)) {
            mockedString.when(() -> String.valueOf(anyInt())).thenReturn("mocked");

            assertEquals("mocked", String.valueOf(42));
        }
    }

    @Test
    void verifyStaticCall() {
        try (MockedStatic<IdGenerator> mocked = mockStatic(IdGenerator.class)) {
            mocked.when(IdGenerator::nextId).thenReturn("fixed-id");

            String id = IdGenerator.nextId();
            assertEquals("fixed-id", id);

            mocked.verify(IdGenerator::nextId);
        }
    }
}

class IdGenerator {
    static String nextId() {
        return UUID.randomUUID().toString();
    }
}
```

### 9.5 Mocking Constructors


Requires `mockito-inline`. Allows you to control what `new ClassName(...)` returns within a specific scope.

```java
package mockito.advanced;

import org.junit.jupiter.api.Test;
import org.mockito.MockedConstruction;
import org.mockito.Mockito;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

/**
 * Constructor mocking: control what "new SomeClass()" returns.
 */
class ConstructorMockTest {

    @Test
    void mockConstructor() {
        try (MockedConstruction<HeavyService> mocked = mockConstruction(HeavyService.class)) {
            // Any call to new HeavyService() returns a mock

            HeavyService service1 = new HeavyService("param");
            HeavyService service2 = new HeavyService("other");

            // Both service1 and service2 are mocks, not real objects
            assertNotNull(service1);
            assertNotNull(service2);
        }
    }

    @Test
    void mockConstructorWithAnswer() {
        try (MockedConstruction<HeavyService> mocked = mockConstruction(
                HeavyService.class,
                (mock, context) -> {
                    // Custom initialisation for each constructed mock
                    when(mock.initialize()).thenReturn(true);
                })) {

            HeavyService service = new HeavyService("test");
            assertTrue(service.initialize());
        }
    }

    @Test
    void mockConstructorVerification() {
        try (MockedConstruction<HeavyService> mocked = mockConstruction(HeavyService.class)) {
            HeavyService s1 = new HeavyService("a");
            HeavyService s2 = new HeavyService("b");

            // Verify how many times the constructor was called
            assertEquals(2, mocked.constructed().size());

            List<HeavyService> allConstructed = mocked.constructed();
            assertEquals("a", allConstructed.get(0).getConfig());
            assertEquals("b", allConstructed.get(1).getConfig());
        }
    }
}

class HeavyService {

    private final String config;

    public HeavyService(String config) {
        this.config = config;
        // Expensive initialisation — database connection, etc.
    }

    boolean initialize() {
        // real implementation
        return true;
    }

    String getConfig() {
        return config;
    }
}
```

### 9.6 Mock Cleanup and Reset


```java
package mockito.advanced;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static org.mockito.Mockito.*;

/**
 * Mockito automatically resets mocks between tests when using
 * MockitoExtension. In specific cases, you need manual control.
 */
@ExtendWith(MockitoExtension.class)
class MockCleanupTest {

    @Mock
    private List<String> list;

    @BeforeEach
    void setUp() {
        // Mocks are fresh at this point — no interaction history
    }

    @AfterEach
    void tearDown() {
        // Verify no leftover interactions
        // verifyNoMoreInteractions(list);
    }

    @Test
    void firstTest() {
        when(list.get(0)).thenReturn("a");
        assertEquals("a", list.get(0));
    }

    @Test
    void secondTest() {
        // Mock is clean — no leftover state from firstTest
        when(list.size()).thenReturn(10);
        assertEquals(10, list.size());
    }

    @Test
    void clearInvocations() {
        list.add("x");
        verify(list).add("x");

        // Clear the invocation data without resetting stubs
        clearInvocations(list);

        // Now verify fails because invocations were cleared
        // verify(list).add("x"); // FAILS

        // But stubs still work:
        when(list.size()).thenReturn(5);
        assertEquals(5, list.size());
    }

    @Test
    void resetMock() {
        list.add("x");
        when(list.size()).thenReturn(5);

        // reset clears BOTH invocations AND stubs
        reset(list);

        // All stubs are gone:
        assertEquals(0, list.size()); // default

        // All invocations are gone:
        verifyNoInteractions(list);
    }
}
```

---

## Summary

This chapter covered the complete Mockito mocking framework, starting with mock creation using both the static `mock()` method and the `@Mock` annotation with `@ExtendWith(MockitoExtension.class)`. The `@InjectMocks` annotation was explained with its three injection strategies — constructor, setter, and field — and how mock naming resolves ambiguity when multiple mocks share a type.

Stubbing was covered in full detail: `when().thenReturn` for simple return values, chained `thenReturn` for multiple calls, `thenThrow` for exceptions, `thenAnswer` for computed return values, and `thenCallRealMethod` for delegating to real implementations. The `doReturn/when`, `doThrow/when`, and `doAnswer/when` patterns were shown as alternatives necessary for void methods and spies.

Verification techniques included `verify` with exact and flexible times (`times`, `atLeast`, `atMost`, `never`, `only`), `InOrder` for ordered verification across single and multiple mocks, `verifyNoMoreInteractions` and `verifyNoInteractions` for ensuring no unexpected calls occurred, and timeout-based verification with `timeout()` and `after()` for asynchronous code.

Argument matchers were explored from built-in matchers (`any()`, `eq()`, `anyString`, `anyInt`, `anyList`) through custom `argThat` with both lambda and class-based `ArgumentMatcher` implementations. `ArgumentCaptor` with `@Captor` provided type-safe capture and inspection of method arguments.

BDDMockito showed the `given/willReturn/then/should` pattern that makes tests read like BDD scenarios. Spies were covered with `spy()` and `@Spy`, including the critical `when().thenReturn` gotcha on spies and when to prefer `doReturn`. The spy vs mock decision framework was explained.

Advanced features included lenient stubbing with `@MockitoSettings`, the `Answer` interface for custom mock behaviour, `MockSettings` for configuring mock name, verbosity, default answer, and serializability. Mockito 5.x capabilities were demonstrated for mocking final classes and methods (enabled by default), static methods using `MockedStatic` in try-with-resources blocks, and constructor mocking using `MockedConstruction`. Finally, `clearInvocations` and `reset()` were shown for manual mock lifecycle management.

---

## Exercises

### Exercise 1: Mock Creation

Create a mock of `javax.sql.DataSource` using each of these methods:
- `mock(DataSource.class)`
- `@Mock` annotation with `MockitoExtension`
- `MockitoAnnotations.openMocks(this)`

Verify that each mock returns `null` from `getConnection()` and is not null.

### Exercise 2: InjectMocks

Create a `ShoppingCartService` class that depends on `ProductRepository`, `PricingService`, and `InventoryClient`. Write a test using `@InjectMocks` that verifies:

- All three mocks are injected into the service
- `addProduct(productId, quantity)` calls `productRepository.findById()`, then `inventoryClient.reserve()`
- If the product is out of stock, the item is not added

### Exercise 3: Stubbing

Write stubs for the following scenarios:
- `when().thenReturn()` — return a user for a specific ID
- `when().thenThrow()` — throw `IllegalStateException` when the database is closed
- `when().thenAnswer()` — map input IDs to generated usernames: `findById(1) -> User("user-1")`
- `doThrow()` — simulate a void method failure on `auditLogger.log()`
- Multiple calls: first call returns "init", second call throws, third call returns "recovered"

### Exercise 4: Verification

Given a `PaymentProcessor` that calls `fraudDetection.analyze()`, `bankGateway.charge()`, and `notificationService.send()`:

- Verify all three are called in order
- Verify `charge()` is called exactly once with the correct amount
- Verify `send()` is called either 0 or 1 times depending on success
- Use `verifyNoMoreInteractions` to ensure no extra calls

### Exercise 5: Argument Matchers and Captors

Write a test for a `ReportGenerator` that receives a `ReportRequest` object and calls `database.query(request.getFilters(), request.getPage(), request.getPageSize())`. Use `ArgumentCaptor` to:

- Capture the `ReportRequest` passed to `generate()`
- Assert that filters contain the expected keys
- Assert that pagination values are within valid bounds
- Verify that the captured query parameters are correct

### Exercise 6: BDD Style

Convert the PaymentProcessor test from Exercise 4 to BDDMockito style with `given/willReturn/then/should`.

### Exercise 7: Spy

Create a test for a `CacheManager` that wraps a real `HashMap`. Use `@Spy` to:

- Test that real `put()` and `get()` methods work
- Stub `size()` to return a fixed value
- Verify that `put()` was called for each cache entry
- Demonstrate the `when(spy).method()` gotcha and fix it with `doReturn`

### Exercise 8: Static Method Mocking

Mock `LocalDate.now()` to return a fixed date. Write a test for a `PromotionService` that determines if today is a holiday and should apply a discount. Use `MockedStatic<LocalDate>` in a try-with-resources block.

### Exercise 9: Constructor Mocking

Mock `new FileReader("config.properties")` in a `ConfigurationLoader` class. Use `MockedConstruction<FileReader>` to return a mock that reads predefined config values. Verify the constructor was called with the correct filename.

### Exercise 10: Complete Mocking Suite

Create a full test suite for an `OrderProcessingService` with these requirements:

- Mock `PaymentGateway`, `InventoryService`, `EmailService`, and `AuditLogger`
- Use `@InjectMocks` for the service under test
- Test successful order flow with BDD style
- Test payment failure with `doThrow`
- Test inventory shortage with `thenAnswer` that checks stock
- Use `ArgumentCaptor` to capture the `AuditEvent` and verify its fields
- Use `InOrder` to verify the complete execution sequence
- Use `lenient` stubbing for a rarely-used logger method
- Include a test that resets a mock using `clearInvocations` mid-test
